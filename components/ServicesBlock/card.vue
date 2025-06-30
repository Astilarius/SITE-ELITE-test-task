<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
})
</script>

<template>
    <div class="services-block__card">
        <div class="services-block__card-image-block">
            <img class="services-block__card-image" :src="image"/>
            <nuxt-icon name="arrow"/>
        </div>
        <div class="services-block__card-text-block">
            <div class="services-block__card-info-block">
                <h3 class="services-block__card-title">{{ title }}</h3>
                <span class="services-block__card-description">{{ description }}</span>
            </div>
            <span class="services-block__card-price">от {{ price }}</span>
        </div>
    </div>
</template>

<style lang="scss">
@use "@/assets/scss/colors";
@use "@/assets/scss/mixins";
.services-block__card {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    border-radius: 1rem;
    border: 1px solid colors.$stroke-dark-25;
    gap: 1.25rem;
    height: fit-content;
    @include mixins.min-width('md') {
        padding: 1.5625rem;
    }
    @include mixins.min-width('lg') {
        padding: 35px;
    }
    @include mixins.min-width('xl') {
        gap: 1.25rem;
    }

    &-image-block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    
    &-image {
        max-width: 196px;
        max-height: 126px;
        border-radius: 1rem;
        @include mixins.min-width('xl') {
            max-width: 475px;
            max-height: 273px;
        }
    }

    &-text-block {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @include mixins.min-width('xl') {
            gap:20px;
        }
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

        line-height: 140%;
        letter-spacing: -3%;

        @include mixins.min-width('lg') {
            font-size: 1.5rem;
        }
        @include mixins.min-width('xl') {
            font-size: 2rem;
        }
    }

    &-description {
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: -1%;
        color: colors.$text-dark-secondary;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        display: -webkit-box;

        @include mixins.min-width('md') {
            font-size: 16px;
        }
        @include mixins.min-width('xl') {
            font-size: 20px;
        }
    }

    &-price {
        font-size: 1rem;
        font-weight: 600;
        
        @include mixins.min-width('md') {
            font-size: 18px;
        }
        @include mixins.min-width('lg') {
            font-size: 24px;
        }
    }
}
</style>