<script setup lang="ts">
import { PhoneCall } from 'lucide-vue-next'
import { useSeoMeta, useHead } from '#imports'

// Configuração de SEO local para Direito Penal
useSeoMeta({
  title: 'Advogado Criminalista em Canoinhas - SC | Guimarães Advocacia',
  description: 'Defesa criminal especializada em Canoinhas - SC. Acompanhamento em delegacia, audiência de custódia, habeas corpus, progressão de regime e recursos.',
  ogTitle: 'Advogado Criminalista em Canoinhas - SC | Guimarães Advocacia',
  ogDescription: 'Defesa criminal especializada em Canoinhas - SC. Acompanhamento em delegacia, habeas corpus e audiências.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/advogado-penal-canoinhas-sc' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Guimarães Advocacia - Direito Penal',
        'description': 'Defesa criminal técnica e acompanhamento de inquéritos policiais, prisões em flagrante e execução penal em Canoinhas - SC.',
        'url': 'https://advogadosguimaraes.com.br/advogado-penal-canoinhas-sc',
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
    title: 'Análise de Progressão de Regime',
    description: 'Análise técnica de progressão de regime prisional com verificação minuciosa dos requisitos objetivos e subjetivos previstos em lei.'
  },
  {
    numeral: 'II',
    title: 'Contagem de Prescrição da Pena',
    description: 'Cálculo técnico e acompanhamento da prescrição da pena para declaração de extinção da punibilidade estatal.'
  },
  {
    numeral: 'III',
    title: 'Recursos',
    description: 'Elaboração e acompanhamento de recursos de apelação, recurso em sentido estrito, agravo em execução e perante tribunais superiores.'
  },
  {
    numeral: 'IV',
    title: 'Habeas Corpus',
    description: 'Impetração de habeas corpus em caráter de urgência contra prisão ilegal ou qualquer outra espécie de constrangimento ilegal à liberdade.'
  },
  {
    numeral: 'V',
    title: 'Prisões em Flagrante',
    description: 'Atendimento de plantão imediato em prisões em flagrante e atuação estratégica em audiências de custódia para reverter prisões.'
  },
  {
    numeral: 'VI',
    title: 'Acompanhamento em delegacias',
    description: 'Presença física e assessoria técnica em delegacias de polícia durante interrogatórios, depoimentos e lavratura de flagrantes.'
  },
  {
    numeral: 'VII',
    title: 'Pedidos de Liberdade',
    description: 'Elaboração de pedidos de liberdade provisória, revogação de prisão preventiva ou relaxamento de prisão ilegal de forma célere.'
  },
  {
    numeral: 'VIII',
    title: 'Supervisão em Inquéritos Policiais',
    description: 'Supervisão jurídica e produção de provas defensivas no curso do inquérito policial, resguardando direitos constitucionais.'
  },
  {
    numeral: 'IX',
    title: 'Revisão de Pena',
    description: 'Pedido de revisão criminal e reanálise de dosimetria de sentenças condenatórias transitadas em julgado.'
  },
  {
    numeral: 'X',
    title: 'Defesa criminal',
    description: 'Defesa criminal técnica e combativa em processos de rito comum, especial, júri popular e juizados especiais criminais.'
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
          Direito <span class="text-accent italic font-normal">Penal</span>
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
              <span class="font-title text-4xl lg:text-5xl font-light text-accent-dark select-none">
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
          Necessita de defesa técnica ou acompanhamento criminal especializado?
        </h3>
        <p class="font-body text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-loose">
          Fale diretamente com um de nossos especialistas em Direito Penal para assegurar total sigilo, agilidade e excelência na sua defesa.
        </p>
        <div class="pt-4">
          <a
            href="https://api.whatsapp.com/send/?phone=554736223742&text=Olá! Preciso de assessoria em Direito Penal.&type=phone_number&app_absent=0"
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
