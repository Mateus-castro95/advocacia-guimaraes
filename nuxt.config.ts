// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Guimarães Advocacia',
      link: [
        { rel: 'icon', type: 'image/webp', href: '/favicon.webp' }
      ]
    }
  }
})