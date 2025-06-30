<script setup lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'

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
        id: 1,
        title: 'Каталог оборудования ECORESULT и ECOWAY',
    },
    {
        id: 2,
        title: 'Каталог оборудования ECORESULT и ECOWAY',
    }
]
</script>

<template>
    <div class="sertificates-block">
        <SertificatesBlockTitleBlock/>
        <Carousel
            v-bind="carouselConfig"
        >
            <Slide v-for="slide in slides" :key="slide.id">
                <SertificatesBlockCard
                    :title="slide.title"
                />
            </Slide>
        </Carousel>
        <SertificatesBlockAllSerticificatesButton hideOnSize="sm" />
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/mixins";
.sertificates-block {
    color: colors.$text-dark-primary;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-bottom: 2.5rem;

    .carousel__slide {
        padding: 1px;
    }
    @include mixins.min-width('md') {
        gap: 2.625rem;
        padding: 1.875rem 2.5rem 2.5rem 2.5rem;
    }
    @include mixins.min-width('lg') {
        gap: 50px;
        padding: 95px 80px 0 80px;
    }
    @include mixins.min-width('xl') {
        gap: 60px;
        padding: 120px 100px;
    }
}
</style>