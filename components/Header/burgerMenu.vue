<script setup lang="ts">
const showMobileMenu = ref<boolean>(false)
</script>

<template>
    <button @click="showMobileMenu = true" class="header__mobile-menu-button primary-light">
        <img src="@/assets/icons/menu.svg"/>
    </button>
    <div class="header__mobile-menu" v-show="showMobileMenu">
        <button @click="showMobileMenu = false" class="header__mobile-menu-button primary-light">
            <img src="@/assets/icons/close.svg"/>
        </button>
        <span class="header__mobile-menu-link">
            Модельный ряд <img src="@/assets/icons/minimalist-arrow.svg"/>
        </span>
        <span class="header__mobile-menu-link">
            Покупка <img src="@/assets/icons/minimalist-arrow.svg"/>
        </span>
        <span class="header__mobile-menu-link">
            Сервис <img src="@/assets/icons/minimalist-arrow.svg"/>
        </span>
        <span class="header__mobile-menu-link">
            О нас <img src="@/assets/icons/minimalist-arrow.svg"/>
        </span>
        <span class="header__mobile-menu-link">
            Ещё <img src="@/assets/icons/minimalist-arrow.svg"/>
        </span>
        <span>г. Москва, ул. Космонавтиков, д. 6</span>
        <span>+7 (495) 434-03-26</span>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
.header__mobile-menu {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    min-height: calc(100vh - 2rem);
    min-width: calc(100vw - 2rem);
    padding: 1rem;
    background-color: colors.$bg-dark;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    &-link {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }
}

.header__mobile-menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: colors.$bg-white;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 0.75rem;
    border: 0;

    img {
        width: 1.25rem;
        height: 1.25rem;
    }
}
</style>