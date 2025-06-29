<script setup lang="ts"></script>

<template>
    <div class="services-block__title-block">
        <h2 class="services-block__title">Предоставляемые услуги</h2>
        <ServicesBlockAllServicesButton hideOnSize="md"/>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/mixins";
.services-block{
    &__title-block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__title {
        font-weight: 600;
        font-size: 1.25rem;

        @include mixins.min-width('md') {
            font-size: 28px;
            line-height: 130%;
            letter-spacing: 0%;
        }
    }
}
</style>