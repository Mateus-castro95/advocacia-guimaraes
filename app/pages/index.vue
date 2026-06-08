<script setup lang="ts">
import { useSeoMeta, useHead } from '#imports'
import HeroSection from '~/components/home/HeroSection.vue'
import CardsAreas from '~/components/home/CardsAreas.vue'
import SeusDireitos from '~/components/home/SeusDireitos.vue'
import NossosValores from '~/components/home/NossosValores.vue'
import CardsProfissionais from '~/components/home/CardsProfissionais.vue'

// Configuração de SEO local para a Página Inicial
useSeoMeta({
  title: 'Guimarães Advocacia | Escritório de Advocacia em Canoinhas - SC',
  description: 'Escritório de advocacia especializado em Canoinhas - SC. Atuação em Direito Civil, Tributário, Trabalhista, Família, Penal, Previdenciário, Imobiliário e da Saúde.',
  ogTitle: 'Guimarães Advocacia | Escritório de Advocacia em Canoinhas - SC',
  ogDescription: 'Escritório de advocacia em Canoinhas - SC. Especialistas em Direito Civil, Trabalhista, Previdenciário, Penal, Tributário, Imobiliário, Família e da Saúde.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Guimarães Advocacia',
        'description': 'Escritório de advocacia especializado em soluções jurídicas preventivas e contenciosas em Canoinhas - SC.',
        'url': 'https://advogadosguimaraes.com.br/',
        'telephone': '+554736223742',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Rua Francisco De Paula Pereira, 47',
          'addressLocality': 'Canoinhas',
          'addressRegion': 'SC',
          'postalCode': '89460-000',
          'addressCountry': 'BR'
        }
      })
    }
  ]
})
</script>

<template>
  <div class="relative min-h-screen">
    <HeroSection />
    <CardsAreas />
    <SeusDireitos />
    <NossosValores />
    <CardsProfissionais />
  </div>
</template>

