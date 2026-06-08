<script setup lang="ts">
import { PhoneCall } from 'lucide-vue-next'
import { useSeoMeta, useHead } from '#imports'

// Configuração de SEO local para Direito Médico, Odontológico e da Saúde
useSeoMeta({
  title: 'Advogado de Erro Médico e Saúde em Canoinhas - SC | Guimarães Advocacia',
  description: 'Defesa e assessoria jurídica em Direito Médico, Odontológico e da Saúde em Canoinhas - SC. Sindicâncias no CRM/CRO, defesas em processos éticos e erro médico.',
  ogTitle: 'Advogado de Erro Médico e Saúde em Canoinhas - SC | Guimarães Advocacia',
  ogDescription: 'Defesa e assessoria jurídica em Direito Médico, Odontológico e da Saúde em Canoinhas - SC. Processos éticos e erro médico.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/advogado-saude-canoinhas-sc' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Guimarães Advocacia - Direito Médico, Odontológico e da Saúde',
        'description': 'Assessoria especializada em defesa de médicos e dentistas em processos éticos, sindicâncias no CRM/CRO e ações de responsabilidade civil em Canoinhas - SC.',
        'url': 'https://advogadosguimaraes.com.br/advogado-saude-canoinhas-sc',
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
    title: 'Consultoria Jurídica para Médicos:',
    description: 'documentos, contratos, termo de consentimento, observância a princípios éticos da profissão em face do Código de Ética do CRM, e, principalmente dúvidas a respeito de possíveis situações com seus pacientes, seja de maneira preventiva, sindicância, processo administrativo ou de processo judicial (civil ou criminal).'
  },
  {
    numeral: 'II',
    title: 'Consultoria Jurídica para Dentistas:',
    description: 'informar e aconselhar o profissional da odontologia acerca de possíveis abusos de direito de seus pacientes e intercorrências no exercício da profissão, buscando evitar processos administrativos ou judiciais.'
  },
  {
    numeral: 'III',
    title: 'Elaboração de Termo de Consentimento Livre e Esclarecido:',
    description: 'o termo deve ser individualizado para cada paciente e jamais elaborado em linhas gerais ou de forma resumida, demonstrando que foram informados os riscos, cuidados e possíveis sequelas do procedimento.'
  },
  {
    numeral: 'IV',
    title: 'Elaboração de Contrato de Cirurgia:',
    description: 'para todo procedimento cirúrgico, com finalidade estética ou não, deve ser elaborado um contrato detalhando tudo o que foi estipulado, especialmente para evitar questionamentos no pós-cirúrgico.'
  },
  {
    numeral: 'V',
    title: 'Sindicância CRM',
    description: 'Defesa em Sindicância de Médico no CRM.'
  },
  {
    numeral: 'VI',
    title: 'Sindicância CRO',
    description: 'Defesa em Sindicância de Dentista no CRO.'
  },
  {
    numeral: 'VII',
    title: 'Processo Ético CRM',
    description: 'Defesa em Processo Ético-Profissional de Médico no CRM.'
  },
  {
    numeral: 'VIII',
    title: 'Processo Ético CRO',
    description: 'Defesa em Processo Ético-Profissional de Dentista no CRO.'
  },
  {
    numeral: 'IX',
    title: 'Recurso CFM',
    description: 'Recurso ao Conselho Federal de Medicina.'
  },
  {
    numeral: 'X',
    title: 'Recurso CFO',
    description: 'Recurso ao Conselho Federal de Odontologia.'
  },
  {
    numeral: 'XI',
    title: 'Processo de Erro Médico',
    description: 'Defesa em Processo Judicial de Erro Médico.'
  },
  {
    numeral: 'XII',
    title: 'Quesitos Periciais',
    description: 'Quesitos para Perícia em Ação Judicial de Erro Médico.'
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
          Direito Médico, Odontológico <span class="text-accent italic font-normal">e da Saúde</span>
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
          Necessita de defesa ética profissional ou assessoria jurídica em saúde?
        </h3>
        <p class="font-body text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-loose">
          Fale diretamente com nossa banca de especialistas em Direito Médico e da Saúde para proteger seu exercício profissional.
        </p>
        <div class="pt-4">
          <a
            href="https://api.whatsapp.com/send/?phone=554736223742&text=Olá! Preciso de assessoria jurídica em Direito Médico e da Saúde.&type=phone_number&app_absent=0"
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
