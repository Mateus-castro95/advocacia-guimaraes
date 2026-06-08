<script setup lang="ts">
import { useSeoMeta, useHead } from '#imports'
import AreasHero from '~/components/areas-de-atuacao/AreasHero.vue'

// Configuração de SEO local para Áreas de Atuação
useSeoMeta({
  title: 'Áreas de Atuação | Guimarães Advocacia Canoinhas - SC',
  description: 'Conheça as áreas de atuação jurídica da Guimarães Advocacia em Canoinhas - SC. Assessoria especializada em Direito Civil, Previdenciário, Penal, Saúde, Trabalhista, Tributário e mais.',
  ogTitle: 'Áreas de Atuação | Guimarães Advocacia Canoinhas - SC',
  ogDescription: 'Conheça as áreas de atuação jurídica da Guimarães Advocacia em Canoinhas - SC.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/areas-de-atuacao' }
  ]
})
</script>

<template>
  <div>
    <AreasHero />
  </div>
</template>
