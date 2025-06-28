<script setup lang="ts"></script>

<template>
    <div class="services-block__title-block">
        <h2 class="services-block__title">Предоставляемые услуги</h2>
        <ServicesBlockAllServicesButton hideOnSize="md"/>
    </div>
</template>

<style lang="scss">
.services-block{
    &__title-block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__title {
        font-weight: 600;
        font-size: 1.25rem;
    }
}
</style>