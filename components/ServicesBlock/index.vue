<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
import cardImage from '../../assets/images/card-image.jpg'

const carouselConfig = {
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
                <div class="">
                    <div class=""><Navigation /></div>
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
        <button class="services-block__all-services-button services-block__all-services-button--sm primary-light">
            Все услуги <nuxt-icon name="arrow"/>
        </button>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/variables";
.services-block {
    color: colors.$text-dark-primary;
    padding: 0.875rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    .carousel__slide {
        padding: 1px;
    }

    &__all-services-button {
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
}
</style>