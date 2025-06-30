<script setup lang="ts"></script>

<template>
    <div class="sertificates-block__title-block">
        <h2 class="sertificates-block__title">Сертификаты</h2>
        <SertificatesBlockAllSerticificatesButton hideOnSize="md"/>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/mixins";
.sertificates-block {
    &__title-block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__title {
        font-size: 1.25rem;
        
        @include mixins.min-width('md') {
            font-weight: 600;
            font-size: 28px;
            line-height: 130%;
            letter-spacing: -2%;
        }
        @include mixins.min-width('xl') {
            font-size: 48px;
            line-height: 130%;
            letter-spacing: 0%;
        }
    }
}
</style>