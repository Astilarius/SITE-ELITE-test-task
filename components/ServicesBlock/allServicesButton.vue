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
        class="services-block__all-services-button primary-light"
        :class="`services-block__all-services-button--${hideOnSize}`"
    >
        Все услуги <nuxt-icon name="arrow"/>
    </a>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/variables";
.services-block__all-services-button {
    flex-direction: row;
    gap: 1.25rem;
    width: max-content;

    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;

    padding: 0.325rem 0.9375rem 0.625rem 0.9375rem;
    border-radius: 0.5rem;
    border: 1px solid colors.$stroke-dark-25;
            
    svg {
        margin-top: 1.25rem;
        width: 1rem;
        height: 1rem;
    }
    
    &--sm{
        display: flex;
    }
    &--md{
        display: none;
    }
    @media screen and (min-width: variables.$md) {
        &--sm {
            display: none;
        }
        &--md{
            display: flex;
        }
    }
}
</style>