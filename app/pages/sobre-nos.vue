<script setup lang="ts">
import { useSeoMeta, useHead } from '#imports'
import AboutHero from '~/components/about/AboutHero.vue'
import AboutDiferencial from '~/components/about/AboutDiferencial.vue'

// Configuração de SEO local para Sobre Nós
useSeoMeta({
  title: 'Sobre Nós | Guimarães Advocacia Canoinhas - SC',
  description: 'Conheça o escritório Guimarães Advocacia em Canoinhas - SC. Nossa história, missão, valores e o compromisso com a excelência na prestação de serviços jurídicos.',
  ogTitle: 'Sobre Nós | Guimarães Advocacia Canoinhas - SC',
  ogDescription: 'Conheça o escritório Guimarães Advocacia em Canoinhas - SC. Nossa história e compromisso com a excelência jurídica.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/sobre-nos' }
  ]
})
</script>

<template>
  <div>
    <AboutHero />
    <AboutDiferencial />
  </div>
</template>
