<script setup lang="ts">
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import { HeaderBurgerMenu } from '#components';

    const isMounted = ref(false);
    const prevScrollPos = ref(0);
    const navbarHeight = ref(0);

    const navbarStyle = ref({
        top: '0',
    });

    const handleScroll = () => {
        if (!isMounted.value) return;
        const currentScrollPos = window.pageYOffset;
        if (prevScrollPos.value > currentScrollPos) {
            navbarStyle.value.top = '0';
        } else {
            navbarStyle.value.top = `-${navbarHeight.value}px`;
        }
        prevScrollPos.value = currentScrollPos;
    };

    onMounted(() => {
        isMounted.value = true;
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbarHeight.value = navbar.clientHeight;
        }
        window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
    });
</script>

<template>
    <div id="navbar" class="header" :style="navbarStyle">
        <div class="header__logo-block">
            <HeaderBurgerMenu/>
            <nuxt-icon class="header__logo header__logo--md" name="logo"/>
            <div class="header__partner-text">Официальный дилер Scamacca в Москве</div>
        </div>
        <nuxt-icon class="header__logo header__logo--sm" name="logo"/>
        <div class="header__end-block">
            <div class="header__stats-block">
                <div class="stat-container">
                    <nuxt-icon name="heart"/>
                    <div class="stat-container__counter">22</div>
                </div>
                <div class="stat-container">
                    <nuxt-icon name="graph"/>
                    <div class="stat-container__counter">22</div>
                </div>
            </div>
            <a href="tel:+74954340326" class="header__phone-button">
                <nuxt-icon name="phone"/>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/mixins";
.header {
    transition: 0.3s;
    z-index: 10;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    background-color: colors.$bg-dark;

    @include mixins.min-width('md') {
        padding: 1rem 2.5rem;
    }

    &__logo-block {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    &__partner-text {
        display: none;
        @include mixins.min-width('md') {
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 12px;
            line-height: 150%;
            letter-spacing: 0%;
            width: 114px;
            color: colors.$text-light-secondary;
        }
    }

    &__end-block {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    &__stats-block {
        display: flex;
        flex-direction: row;
        gap: 15px;
    }

    .stat-container {
        display: none;

        @include mixins.min-width('md') {
            display: flex;
            flex-direction: row;
            gap: 5px;

            &__counter {
                display: flex;
                align-items: center;
                justify-content: center;
                
                width: 13px;
                height: 15px;
                padding: 2px 4px 0 4px;
                font-size: 10px;
                font-weight: 600;
                color: colors.$text-dark-primary;
                background-color: colors.$stat-block;
                border-radius: 0.25rem;
            }
        }
    }

    &__logo {
        svg {
            width: 157px;
            height: 42px;
        }
        
        &--sm{
            display: inline;
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

    &__phone-button {
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
        &:hover {
            svg {
                color: colors.$stroke-dark-100;
            }
        }
    }
}
</style>