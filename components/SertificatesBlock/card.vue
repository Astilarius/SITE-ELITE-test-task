<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="sertificates-block__card">
        <div class="sertificates-block__card-text-block">               
            <span class="sertificates-block__card-title">{{ title }}</span>
            <a class="sertificates-block__card-link">Открыть сертификат <nuxt-icon name="arrow"/></a>
        </div>
        <nuxt-icon class="sertificates-block__card-icon" name="certificate"/>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/mixins";
.sertificates-block__card {
    display: flex;
    flex-direction: row;
    padding: 1.25rem;
    justify-content: space-between;
    border: 1px solid colors.$stroke-dark-25;
    border-radius: 1rem;
    height: 12.5rem;
    gap: 2rem;
    
    @include mixins.min-width('md') {
        padding: 1.5rem;
        height: 214px;
        width: 334px;
    }
    @include mixins.min-width('md') {
        padding: 40px;
        height: 275px;
        width: 560px;
    }

    &-text-block {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        justify-content: space-between;
    }

    &-title {
        font-size: 1rem;
        font-weight: 600;
        line-height: 140%;
        letter-spacing: 0%;

        color: colors.$text-dark-primary;

        @include mixins.min-width('md') {
            font-size: 18px;
            line-height: 150%;
            letter-spacing: 0%;
        }
        @include mixins.min-width('xl') {
            font-size: 24px;
        }
    }

    &-link {
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0%;
        color: colors.$accent-primary;
        cursor: pointer;
        
        @include mixins.min-width('xl') {
            font-size: 18px;
        }

        &:hover {
            color: colors.$text-dark-secondary;
        }

        svg {
            width: 1rem;
            height: 1rem;
            padding: 0.125rem;
        }
    }

    &-icon {
        @include mixins.min-width('md') {
            display: flex;
            flex-direction: column-reverse;
        }
        svg {
            min-width: 1.5rem;
            min-height: 1.5rem;
            @include mixins.min-width('md') {
                min-width: 2rem;
                min-height: 2rem;
            }
            @include mixins.min-width('xl') {
                min-width: 50px;
                min-height: 50px;
            }
        }
    }
}
</style>