<script setup lang="ts"></script>

<template>
    <div class="sertificates-block__title-block">
        <h2 class="sertificates-block__title">Сертификаты</h2>
        <SertificatesBlockAllSerticificatesButton hideOnSize="md"/>
    </div>
</template>

<style lang="scss">
.sertificates-block {
    &__top-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__title {
        font-size: 1.25rem;
    }
}
</style>