<script setup lang="ts">
import { PhoneCall } from 'lucide-vue-next'
import { useSeoMeta, useHead } from '#imports'

// Configuração de SEO local para Direito Administrativo
useSeoMeta({
  title: 'Advogado Administrativo em Canoinhas - SC | Guimarães Advocacia',
  description: 'Assessoria em Direito Administrativo em Canoinhas - SC. Licitações, contratos públicos, defesa em PAD, desapropriações e Tribunais de Contas.',
  ogTitle: 'Advogado Administrativo em Canoinhas - SC | Guimarães Advocacia',
  ogDescription: 'Assessoria em Direito Administrativo em Canoinhas - SC. Licitações, defesas públicas e contratos.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/advogado-administrativo-canoinhas-sc' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Guimarães Advocacia - Direito Administrativo',
        'description': 'Assessoria especializada em licitações, contratos administrativos, defesas de servidores públicos e processos junto ao Tribunal de Contas em Canoinhas - SC.',
        'url': 'https://advogadosguimaraes.com.br/advogado-administrativo-canoinhas-sc',
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

const pillars = [
  {
    numeral: 'I',
    title: 'Administração Pública',
    description: 'Atuação judicial e extrajudicial perante entidades da Administração Pública Direta e Indireta.'
  },
  {
    numeral: 'II',
    title: 'Órgãos e Autarquias',
    description: 'Atuação perante autarquias, sociedades de economia mista, agências reguladoras e fundações governamentais públicas e privadas.'
  },
  {
    numeral: 'III',
    title: 'Responsabilidade do Estado',
    description: 'Atuação perante a administração em desapropriações e responsabilização patrimonial extracontratual do Estado por comportamentos ilícitos.'
  },
  {
    numeral: 'IV',
    title: 'Licitações e Contratos',
    description: 'Atuação judicial e extrajudicial em licitações e contratos administrativos.'
  },
  {
    numeral: 'V',
    title: 'Tribunal de Contas',
    description: 'Defesa perante o Tribunal de Contas do Estado.'
  },
  {
    numeral: 'VI',
    title: 'Processo Administrativo',
    description: 'Auxílio em procedimentos administrativos.'
  },
  {
    numeral: 'VII',
    title: 'Concessionárias Públicas',
    description: 'Atuação perante concessionárias e permissionárias de direito público.'
  },
  {
    numeral: 'VIII',
    title: 'Defesa de Servidores (PAD)',
    description: 'Defesa em processo administrativo disciplinar.'
  },
  {
    numeral: 'IX',
    title: 'Recursos e Impugnações',
    description: 'Elaboração de impugnações e recursos administrativos.'
  },
  {
    numeral: 'X',
    title: 'Análise de Contratos',
    description: 'Análise de contratos administrativos.'
  },
  {
    numeral: 'XI',
    title: 'Conduta e Pareceres',
    description: 'Pareceres, estudos e definição de estratégias de conduta de empresas perante a administração pública direta e indireta.'
  },
  {
    numeral: 'XII',
    title: 'Licenciamentos e Registros',
    description: 'Atuação em processos de licitação, de licenciamento de estabelecimentos, de registros de produtos nos órgãos competentes.'
  },
  {
    numeral: 'XIII',
    title: 'Contas e Concessões',
    description: 'Assessoria em contratações administrativas, concessões, permissões e autorizações, em processos de prestação de contas, tomada de contas e demais procedimentos perante os Tribunais de Contas.'
  }
]
</script>

<template>
  <div class="bg-bg-dark text-content-inverse min-h-screen">
    
    <!-- Seção Hero Exclusiva -->
    <section class="relative pt-2 pb-6 lg:pt-4 lg:pb-8 overflow-hidden">
      <!-- Glow de fundo dourado sofisticado -->
      <div class="absolute inset-0 pointer-events-none opacity-20">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px]"></div>
      </div>

      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-title font-semibold text-content-inverse tracking-wide leading-tight">
          Direito <span class="text-accent italic font-normal">Administrativo</span>
        </h1>

        <p class="font-body text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-loose">
          Vamos trabalhar incansavelmente para fornecer a melhor solução para sua situação
        </p>
      </div>
    </section>

    <!-- Seção de Conteúdo Editorial (Sem Cards) -->
    <section class="py-12 lg:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Grid de Conteúdo com numeração Romana -->
        <div class="flex flex-col border-t border-border-dark">
          <div 
            v-for="(pillar, index) in pillars" 
            :key="index"
            class="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 py-12 lg:py-16 border-b border-border-dark last:border-b-0 transition-colors duration-300"
          >
            <!-- Lado Esquerdo: Numeral e Título -->
            <div class="md:col-span-5 flex flex-col sm:flex-row md:flex-col items-start gap-3 sm:gap-6 md:gap-3">
              <span class="font-title text-4xl lg:text-5xl font-light text-accent-dark select-none animate-none">
                {{ pillar.numeral }}
              </span>
              <h2 class="font-title text-xl lg:text-2xl text-accent font-semibold leading-snug">
                {{ pillar.title }}
              </h2>
            </div>

            <!-- Lado Direito: Descrição estruturada (leading-loose para line-height 2.0 obrigatório) -->
            <div class="md:col-span-7 flex items-center">
              <p class="font-body text-slate-300 text-sm sm:text-base leading-loose font-normal text-justify">
                {{ pillar.description }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Seção CTA Integrada -->
    <section class="py-16 lg:py-24 bg-bg-darkAlt border-t border-border-dark">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h3 class="font-title text-2xl sm:text-3.5xl text-content-inverse font-semibold">
          Precisa de suporte jurídico em Direito Administrativo ou Licitações?
        </h3>
        <p class="font-body text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-loose">
          Entre em contato diretamente conosco para estruturar a atuação pública da sua empresa ou defender seus direitos como servidor.
        </p>
        <div class="pt-4">
          <a
            href="https://api.whatsapp.com/send/?phone=554736223742&text=Olá! Preciso de assessoria jurídica em Direito Administrativo.&type=phone_number&app_absent=0"
            target="_blank"
            class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-primary font-body font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Falar com Advogado Especialista</span>
            <PhoneCall class="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

  </div>
</template>
