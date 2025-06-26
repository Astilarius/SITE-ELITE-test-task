<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'

const carouselConfig = {
    itemsToShow: 1,
    wrapAround: true,
    breakpoints: {
        768: {
            itemsToShow: 2,
            snapAlign: 'start',
        },
        1440: {
            itemsToShow: 3,
            snapAlign: 'start',
        }
    }
}
const slides = [
    {
        id: 1,
        title: 'Каталог оборудования ECORESULT и ECOWAY',
    },
    {
        id: 2,
        title: 'Каталог оборудования ECORESULT и ECOWAY',
    }
]
</script>

<template>
    <div class="sertificates-block">
        <div class="sertificates-block__top-line">
            <h2 class="sertificates-block__title">Сертификаты</h2>
            <button class="sertificates-block__all-sertificates-button primary-light">
                Все сертификаты <nuxt-icon name="arrow"/>
            </button>
        </div>
        <Carousel
            v-bind="carouselConfig"
        >
            <Slide v-for="slide in slides" :key="slide.id">
                <div class="sertificates-block__card">
                    <div class="sertificates-block__card-text-block">               
                        <span class="sertificates-block__card-title">{{ slide.title }}</span>
                        <a class="sertificates-block__card-link">Открыть сертификат <nuxt-icon name="arrow"/></a>
                    </div>
                    <nuxt-icon class="sertificates-block__card-icon" name="certificate"/>
                </div>
            </Slide>
        </Carousel>
        <button class="sertificates-block__all-sertificates-button primary-light">
            Все сертификаты <nuxt-icon name="arrow"/>
        </button>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/variables";
.sertificates-block {
    color: colors.$text-dark-primary;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-bottom: 2.5rem;

    &__top-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .sertificates-block__all-sertificates-button {
            display: none;

            width: max-content;
            padding: 0.325rem 0.9375rem 0.625rem 0.9375rem;
            border-radius: 0.5rem;
            border: 1px solid colors.$stroke-dark-25;
            svg {
                margin-top: 1.25rem;
                width: 1rem;
                height: 1rem;
            }
        }
        @media screen and (min-width: variables.$md) {
            .sertificates-block__all-sertificates-button {
                display: flex;
                flex-direction: row;
                gap: 1.25rem;
            }
        }
    }
    
    &__title {
        font-size: 1.25rem;
    }

    .carousel__slide {
        padding: 1px;
    }

    &__card {
        display: flex;
        flex-direction: row;
        padding: 1.25rem;
        margin-right: 1.25rem;
        justify-content: space-between;
        border: 1px solid colors.$stroke-dark-25;
        border-radius: 1rem;
        height: 12.5rem;
        gap: 2rem;

        &-text-block {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }

        &-title {
            font-size: 1rem;
            color: colors.$text-dark-primary;
        }

        &-link {
            font-size: 1rem;
            color: colors.$accent-primary;
            cursor: pointer;
            &:hover {
                color: colors.$text-dark-secondary;
            }

            svg {
                width: 1rem;
                height: 1rem;
                padding: 0.125rem;
            }

            &-icon {
                svg {
                    min-width: 1.5rem;
                    min-height: 1.5rem;
                }
            }
        }
    }

    &__all-sertificates-button {
        display: flex;
        flex-direction: row;
        gap: 1.25rem;

        width: max-content;
        padding: 0.325rem 0.9375rem 0.625rem 0.9375rem;
        border-radius: 0.5rem;
        border: 1px solid colors.$stroke-dark-25;
        
        svg {
            margin-top: 1.25rem;
            width: 1rem;
            height: 1rem;
        }
    }
    @media screen and (min-width: variables.$md) {
        &__all-sertificates-button {
            display: none;
        }
    }
}
</style>