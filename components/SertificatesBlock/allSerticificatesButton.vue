<script setup lang="ts">
defineProps({
    hideOnSize: {
        type: String,
        required: true,
        validator: (value: string): boolean => {
            return ['sm', 'md'].includes(value);
        }
    }
})
</script>

<template>
    <a
        class="sertificates-block__all-sertificates-button primary-light"
        :class="`sertificates-block__all-sertificates-button--${hideOnSize}`"
    >
        Все сертификаты <nuxt-icon name="arrow"/>
    </a>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/variables";
@use "@/assets/scss/mixins";
.sertificates-block__all-sertificates-button {
    display: flex;
    flex-direction: row;
    gap: 1.25rem;

    width: max-content;
    padding: 0.325rem 0.9375rem 0.625rem 0.9375rem;
    border-radius: 0.5rem;
    border: 1px solid colors.$stroke-dark-25;

    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    @include mixins.min-width('md') {
        padding: 5px 15px 10px 15px;
    }

    svg {
        margin-top: 1.25rem;
        width: 13px;

        @include mixins.min-width('md') {
            margin-top: 1rem;
        }
    }
    &--sm{
        display: flex;
        @include mixins.min-width('md') {
            display: none;
        }
    }
    &--md{
        display: none;
        @include mixins.min-width('md') {
            display: flex;
        }
    }
}
</style>