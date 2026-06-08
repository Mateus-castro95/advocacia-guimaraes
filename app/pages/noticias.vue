<script setup lang="ts">
import { useSeoMeta, useHead } from '#imports'
import NoticiasHero from '~/components/noticias/NoticiasHero.vue'

// Configuração de SEO local para Notícias
useSeoMeta({
  title: 'Notícias e Artigos | Guimarães Advocacia Canoinhas - SC',
  description: 'Fique por dentro das últimas novidades legislativas, notícias jurídicas e artigos informativos produzidos pela banca da Guimarães Advocacia em Canoinhas - SC.',
  ogTitle: 'Notícias e Artigos | Guimarães Advocacia Canoinhas - SC',
  ogDescription: 'Fique por dentro das últimas novidades legislativas e notícias jurídicas em Canoinhas - SC.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/noticias' }
  ]
})
</script>

<template>
  <div>
    <NoticiasHero />
  </div>
</template>
