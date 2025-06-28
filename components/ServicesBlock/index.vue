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
        <div class="services-block__top-line">
            <h2 class="services-block__title">Предоставляемые услуги</h2>
            <button class="services-block__all-services-button services-block__all-services-button--md primary-light">
                Все услуги <nuxt-icon name="arrow"/>
            </button>
        </div>
        <Carousel
            v-bind="carouselConfig"
        >
            <!-- <template #addons>
                <div class="">
                    <div class=""><Navigation /></div>
                </div>
            </template> -->
            <Slide v-for="slide in slides" :key="slide">
                <div class="services-block__card">
                    <div class="services-block__card-image-block">
                        <img class="services-block__card-image" :src="slide.image"/>
                        <nuxt-icon name="arrow"/>
                    </div>
                    <div class="services-block__card-text-block">
                        <div class="services-block__card-info-block">
                            <h3 class="services-block__card-title">{{ slide.title }}</h3>
                            <span class="services-block__card-description">{{ slide.description }}</span>
                        </div>
                        <span class="services-block__card-price">от {{ slide.price }}</span>
                    </div>
                </div>
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
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-bottom: 1.5rem;

    &__top-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__title {
        font-weight: 600;
        font-size: 1.25rem;
    }

    &__all-services-button {
        display: none;
    }
    @media screen and (min-width: variables.$md) {
        &__all-services-button {
            display: flex;
            flex-direction: row;
            gap: 1.25rem;

            width: max-content;
            padding: 0.325rem 0.9375rem 0.625rem 0.9375rem;
            border-radius: 0.5rem;
            border: 1px solid colors.$stroke-dark-25;
            
            svg {
                margin-top: 1.25rem;
                width: 1rem;
                height: 1rem;
            }
        }
    }

    .carousel__slide {
        padding: 1px;
    }

    &__card {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        border-radius: 1rem;
        border: 1px solid colors.$stroke-dark-25;
        gap: 1.25rem;
        height: fit-content;

        &-image-block {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        &-image {
            max-width: 196px;
            max-height: 126px;
            border-radius: 1rem;
        }

        &-text-block {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        &-info-block {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;

            line-height: 150%;
            letter-spacing: 0%;
        }
        
        &-title {
            font-size: 1.1rem;
            font-weight: 600;
        }

        &-description {
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            letter-spacing: 0%;
            color: colors.$text-dark-secondary;

            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            display: -webkit-box;

        }

        &-price {
            font-size: 1rem;
            font-weight: 600;
        }
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