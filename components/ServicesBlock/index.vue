<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
import cardImage from '../../assets/images/card-image.jpg'

const carouselConfig = {
    gap: 20,
    itemsToShow: 1,
    wrapAround: true,
    breakpoints: {
        768: {
            itemsToShow: 2,
            snapAlign: 'start',
        },
        1440: {
            itemsToShow: 3,
            snapAlign: 'start',
        }
    }
}
const slides = [
    {
        title: 'Лизинг',
        description: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
        price: '100 000 ₽',
        image: cardImage,
    },
    {
        title: 'Лизинг',
        description: 'Вид финансовых услуг, форма кредитования для приобретения основных средств предприятиями и других товаров',
        price: '100 000 ₽',
        image: cardImage,
    }
]
</script>

<template>
    <div class="services-block">
        <ServicesBlockTitleBlock/>
        <Carousel
            v-bind="carouselConfig"
        >
            <!-- <template #addons>
                <div class="services-block__slide-navigation-block">
                    <Navigation />
                </div>
            </template> -->
            <Slide v-for="slide in slides" :key="slide">
                <ServicesBlockCard
                    :title="slide.title"
                    :description="slide.description"
                    :image="slide.image"
                    :price="slide.price"
                />
            </Slide>
        </Carousel>
        <ServicesBlockAllServicesButton hideOnSize="sm"/>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/mixins";
.services-block {
    color: colors.$text-dark-primary;
    padding: 0.875rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    @include mixins.min-width('md') {
        gap: 2.8125rem;
        padding: 3.125rem 2.5rem 2.5rem 2.5rem;
        padding-top: 68px;
    }
    @include mixins.min-width('lg') {
        gap: 50px;
        padding: 100px 80px 0 80px;
    }
    @include mixins.min-width('xl') {
        gap: 60px;
        padding: 120px 100px 0 100px;
    }

    .carousel__slide {
        padding: 1px;
    }

    &__slide-navigation-block {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        min-width: 90px;
        height: 50px;
        border-style: solid;
        border-width: 1px;
        border-radius: 0.5rem;
        border-color: colors.$stroke-light-25;
        align-self: flex-end;

        .carousel__prev, .carousel__next {
            position: relative;
            transform: none;
            color: colors.$text-dark-primary;
            inset-block-start: 0;
            padding: 2px;
        }
    }
}
</style>