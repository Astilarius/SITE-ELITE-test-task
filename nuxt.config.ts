import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-icons'],
  css: ['~/assets/scss/main.scss', '~/assets/scss/buttonStyles.scss'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})