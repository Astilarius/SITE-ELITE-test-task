<script setup lang="ts">
import { HeaderBurgerMenu } from '#components';
</script>

<template>
    <div class="header">
        <HeaderBurgerMenu/>
        <div class="header__title-block">
            <nuxt-icon class="header__logo" name="logo"/>
        </div>
        <a href="tel:+74954340326" class="header__phone-button">
            <nuxt-icon name="phone"/>
        </a>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
.header {
    z-index: 10;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    background-color: colors.$bg-dark;

    .header__title-block {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.25rem;

        .header__logo {

            svg {
                width: 157px;
                height: 42px;
            }
        }
    }

    .header__phone-button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: colors.$phone-button;
        width: 2.75rem;
        height: 2.75rem;
        border-radius: 0.75rem;
        border: 0;
        svg {
            color: colors.$stroke-light-100;
            width: 1.25rem;
            height: 1.25rem;
            transition: 0.3s;
        }
    }
    .header__phone-button:hover {
        svg {
            color: colors.$stroke-dark-100;
        }
    }
}
</style>