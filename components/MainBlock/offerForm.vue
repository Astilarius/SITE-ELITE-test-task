<script setup lang="ts">
import { vMaska } from "maska/vue"
import { object, string, bool } from 'yup';

let userSchema = object({
    name: string().required('Имя это обязательное поле'),
    phone: string().required('Телефон это обязательное поле').min(18).max(18),
    checkbox: bool().required(),
});

const formState = reactive({
    name: '',
    phone: '',
    checkbox: undefined,

    nameError: false,
    phoneError: false,
    checkboxError: false,
})

defineExpose( formState ) 

function handleSubmit() {
    userSchema.validate({name: formState.name, phone: formState.phone, checkbox: formState.checkbox})
        .catch(error=>{
            switch (error.params.path) {
                case 'name': 
                    formState.nameError = true;
                    break;
                case 'phone': 
                    formState.phoneError = true;
                    break;
                case 'checkbox': 
                    formState.checkboxError = true;
                    break;
            }
        }).then(value=>{
            if (value?.name && value?.phone) {
                alert(`имя - ${formState.name}, телефон - ${formState.phone}`)
                formState.nameError = false;
                formState.phoneError = false;
                formState.checkboxError = false;
                formState.name = '';
                formState.phone = '';
            }
        })
}

</script>

<template>
    <div class="offer-form">
        <span class="offer-form__title">Получить индивидуальное предложение на покупку в кредит от 4.9%</span>
        <div class="offer-form__input-block">
            <div class="offer-form__text-inputs-block">
                <div class="offer-form__text-input-block">
                    <label class="offer-form__input-label">имя</label>
                    <input v-model="formState.name" class="offer-form__text-input" type="text" placeholder="Введите ваше имя">
                    <div class="offer-form__text-input-error" v-if="formState.nameError">
                        <nuxt-icon name="error"/>
                        <span>Имя это обязательное поле</span>
                    </div>
                </div>
                <div class="offer-form__text-input-block">
                    <label class="offer-form__input-label">телефон</label>
                    <input v-maska:(formState.phone)="'+7 (###) ###-##-##'" v-model="formState.phone" class="offer-form__text-input" type="text" placeholder="+7 (___) ___-__-__">
                    <div class="offer-form__text-input-error" v-if="formState.phoneError">
                        <nuxt-icon name="error"/>
                        <span>Номер телефона это обязательное поле</span>
                    </div>
                </div>
            </div>
            <div class="offer-form__buttons-block">
                <div class="offer-form__checkbox-container">
                    <input 
                        class="offer-form__checkbox" 
                        type="checkbox" 
                        :class="formState.checkboxError ? 'offer-form__checkbox-error' : ''"
                        v-model="formState.checkbox"
                    >
                    <label class="offer-form__checkbox-label">
                        Я принимаю <a class="offer-form__checkbox-link">условия передачи информации</a>
                    </label>
                </div>
                <button @click="handleSubmit" class="offer-form__submit-button primary-light">
                    Оставить заявку <nuxt-icon name="arrow"/>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/variables";
.offer-form {
    position: relative;
    top: -40px;
    background-color: colors.$bg-cta;
    border-radius: 1rem;
    color: colors.$text-dark-primary;
    display: flex;
    flex-direction: column;
    margin: 1.25rem 1.25rem 0 1.25rem;
    padding: 1.25rem;
    gap: 1.25rem;
    z-index: 5;
    font-size: 1rem;

    .offer-form__title {
        font-size: 1rem;
        line-height: 140%;
        letter-spacing: 0%;
        font-weight: 600;
    }
    @media screen and (min-width: variables.$md) {
        .offer-form__title {
            font-size: 1.125rem;
        }
    }

    .offer-form__input-block {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;

        .offer-form__text-inputs-block {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            
            .offer-form__text-input-block {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;

                .offer-form__input-label {
                    font-size: 0.75rem;
                    text-transform: uppercase;
                }
                .offer-form__text-input {
                    padding: 1rem;
                    border-radius: 0.5rem;
                    border-width: 1px;
                    border-style: solid;
                    border-color: colors.$stroke-dark-25;
                    background-color: colors.$stroke-light-100;
                    color: colors.$text-dark-secondary;
                }
                .offer-form__text-input:hover {
                    background-color: colors.$stroke-dark-25;
                }
                .offer-form__text-input:active {
                    border-color: colors.$stroke-dark-50;
                }
            }
            @media screen and (min-width: variables.$md) {
                .offer-form__text-input-block {
                    width: 50%;
                }
            }
            @media screen and (min-width: variables.$lg) {
                .offer-form__text-input-block {
                    width: 100%;
                }
            }

            

            .offer-form__text-input-error {                
                border: 1px solid colors.$stroke-dark-10;
                border-radius: 1rem;
                padding: 0.625rem;
                display: flex;
                flex-direction: row;
                gap: 0.625rem;

                svg {
                    color: colors.$error;
                }
            }
        }
        @media screen and (min-width: variables.$md) {
            .offer-form__text-inputs-block {
                flex-direction: row;
            }
        }
        @media screen and (min-width: variables.$lg) {
            .offer-form__text-inputs-block {
                flex-direction: column;
            }
        }

        .offer-form__buttons-block {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .offer-form__checkbox-container {
                display: flex;
                flex-direction: row;
                align-items: start;
                gap: 0.75rem;

                .offer-form__checkbox {
                    border-radius: 0.25rem;
                    border: 1px solid colors.$stroke-dark-25;
                    background-color: transparent;
                    appearance: none;
                    min-width: 1.1rem;
                    min-height: 1.1rem;
                }
                .offer-form__checkbox-error {
                    border: 1px solid colors.$error;
                }
                .offer-form__checkbox:hover {
                    border: 1px solid colors.$stroke-dark-50;
                }
                .offer-form__checkbox:checked {
                    background-color: colors.$bg-dark;
                    background-image: url("@/assets/icons/check.svg");
                    background-position: center;
                    background-repeat: no-repeat;
                }

                .offer-form__checkbox-label {
                    font-size: 14px;
                    line-height: 150%;

                    .offer-form__checkbox-link {
                        text-decoration: underline;
                        cursor: pointer;
                    }
                    .offer-form__checkbox-link:hover {
                        color: colors.$text-dark-secondary;
                    }
                }
            }
            .offer-form__submit-button {
                display: flex;
                flex-direction: row;
                gap: 1.25rem;

                width: max-content;
                padding: 0.325rem 0.9375rem 0.625rem 0.9375rem;
                border-radius: 0.5rem;
                
                svg {
                    margin-top: 1.25rem;
                    width: 1rem;
                    height: 1rem;
                }
            }
        }
        @media screen and (min-width: variables.$md) {
            .offer-form__buttons-block {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }
        @media screen and (min-width: variables.$lg) {
            .offer-form__buttons-block {
                flex-direction: column;
                align-items: start;
            }
        }
    }
}
@media screen and (min-width: variables.$lg) {
    .offer-form {
        position: absolute;
        top: 70px;
        right: 0;
        width: 360px;
    }
}
</style>