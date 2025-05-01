import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 boilerplate',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/eslint', '@pinia/nuxt'],
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  compatibilityDate: '2024-11-01',
  vite: {
    plugins: [tailwindcss()]
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
        commaDangle: 'never'
      }
    }
  }
})
