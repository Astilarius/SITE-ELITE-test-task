<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 4000
}
const slides = [
    {
        title: 'Любимый семейный кроссовер уже в продаже!',
        description: 'Первый взнос составит 12% от стоимости дома, без изменения за использование кредита.'
    },
    {
        title: 'Любимый семейный кроссовер уже в продаже!',
        description: 'Первый взнос составит 12% от стоимости дома, без изменения за использование кредита.'
    },
    {
        title: 'Любимый семейный кроссовер уже в продаже!',
        description: 'Первый взнос составит 12% от стоимости дома, без изменения за использование кредита.'
    }
]
</script>

<template>
    <div class="main-block">
        <Carousel
            v-bind="carouselConfig"
        >
            <Slide v-for="slide in slides" :key="slide">
                <div class="main-block__slide">
                    <div class="main-block__slide-text-block">
                        <h2 class="main-block__slide-title">{{ slide.title }}</h2>
                        <span class="main-block__slide-description">{{ slide.description }}</span>
                    </div>
                    <div class="main-block__slide-button-block">
                        <button class="main-block__slide-button secondary-light">
                            Подробнее <nuxt-icon name="arrow"/>
                        </button>
                        <button class="main-block__slide-button primary-light">
                            Тест-драйв <nuxt-icon name="arrow"/>
                        </button>
                    </div>
                </div>
            </Slide>
            <template #addons>
                <div class="main-block__slide-addons-block">
                    <div class="main-block__slide-pagination-block"><Pagination /></div>
                    <div class="main-block__slide-navigation-block"><Navigation /></div>
                </div>
            </template>
        </Carousel>
        <MainBlockOfferForm/>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/variables";
.main-block {
    color: colors.$text-light-primary;

    section {
        display: flex;
        flex-direction: column;
        background-image: url("@/assets/images/banner.png");
        background-size: cover;
        background-position: 40%;
        padding: 2rem 1rem;
    }

    @media screen and (min-width: variables.$md) {
        .carousel__slide {
            justify-content: start;
        }
    }

    .main-block__slide {
        display: flex;
        flex-direction: column;
        gap: 1.5625rem;

        .main-block__slide-text-block {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .main-block__slide-title {
                color: colors.$text-light-primary;
                font-weight: 600;
                font-size: 26px;
                line-height: 115%;
                letter-spacing: 0%;
            }
            @media screen and (min-width: variables.$md) {
                .main-block__slide-title {
                    font-size: 2.25rem;
                }
            }

            .main-block__slide-description {
                color: colors.$text-light-primary;
                font-weight: 400;
                font-size: 14px;
                line-height: 150%;
                letter-spacing: 0%;
            }
            @media screen and (min-width: variables.$md) {
                .main-block__slide-description {
                    font-size: 1rem;
                }
            }
        }
        @media screen and (min-width: variables.$md) {
            .main-block__slide-text-block {
                max-width: 452px;
            }
        }

        
        .main-block__slide-button-block {
            display: flex;
            flex-direction: column;
            gap: 0.625rem;
            
            .main-block__slide-button {
                display: flex;
                flex-direction: row;
                gap: 1.25rem;

                width: max-content;
                padding: 0.325rem 0.9375rem 0.625rem 0.9375rem;
                border-radius: 0.5rem;
                
                svg {
                    margin-top: 1.25rem;
                    width: 1rem;
                    height: 1rem;
                }
            }
            @media screen and (min-width: variables.$md) {
                .main-block__slide-button {
                    font-size: 1rem;
                }
            }
        }
        @media screen and (min-width: variables.$md) {
            .main-block__slide-button-block {
                flex-direction: row;
                gap: 0.625rem;
            }
        }
        
    }

    .main-block__slide-addons-block {
        display: flex;
        flex-direction: row;
        margin-top: 2.5rem;
        align-items: flex-end;
        margin-bottom: 2.5rem;
        justify-content: space-between;
        gap: 1.25rem;

        .main-block__slide-navigation-block {
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
                color: colors.$text-light-primary;
                inset-block-start: 0;
                padding: 2px;
            }
        }
        .main-block__slide-pagination-block {
            width: 100%;
            .carousel__pagination {
                position: relative;
                display: flex;
                .carousel__pagination-item {
                    width: 100%;
                    .carousel__pagination-button {
                        background-color: colors.$stroke-light-25;
                        width: 100%;
                    }
                    .carousel__pagination-button--active {
                        background-color: colors.$stroke-light-100;
                    }
                }
            }
        }
    }
    @media screen and (min-width: variables.$lg) {
        .main-block__slide-addons-block {
            margin-top: 8.5rem;
        }
    }
}
</style>