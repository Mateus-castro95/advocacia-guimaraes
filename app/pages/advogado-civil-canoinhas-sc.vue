<script setup lang="ts">
import { PhoneCall } from 'lucide-vue-next'
import { useSeoMeta, useHead } from '#imports'

// Configuração de SEO local para Direito Civil
useSeoMeta({
  title: 'Advogado Civil em Canoinhas - SC | Guimarães Advocacia',
  description: 'Assessoria em Direito Civil em Canoinhas - SC. Contratos, responsabilidade civil, indenizações, cobranças e disputas comerciais.',
  ogTitle: 'Advogado Civil em Canoinhas - SC | Guimarães Advocacia',
  ogDescription: 'Assessoria em Direito Civil em Canoinhas - SC. Contratos, responsabilidade civil, indenizações e cobranças.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/advogado-civil-canoinhas-sc' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Guimarães Advocacia - Direito Civil',
        'description': 'Assessoria especializada em contratos, responsabilidade civil, cobranças e direito das obrigações em Canoinhas - SC.',
        'url': 'https://advogadosguimaraes.com.br/advogado-civil-canoinhas-sc',
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
    title: 'Atuação especializada em contencioso relacionado a franquias',
    description: 'Resolução de disputas judiciais entre franqueadores e franqueados, envolvendo quebra de contrato, taxas de royalties, concorrência desleal ou uso de marca.'
  },
  {
    numeral: 'II',
    title: 'Atuação especializada em contencioso relacionado à Representação e Distribuição Comercial',
    description: 'Defesa técnica em litígios comerciais envolvendo rescisão imotivada de contratos de representação, cobrança de comissões e indenizações contratuais.'
  },
  {
    numeral: 'III',
    title: 'Direito das Coisas:',
    description: 'Ações possessórias em geral, usucapião, extinção de condomínio. Resolução judicial de conflitos sobre propriedade e posse de bens imóveis, divisão de terras comuns e regularização possessória em geral.'
  },
  {
    numeral: 'IV',
    title: 'Consultoria Preventiva ao cliente para a contenção de risks no ajuizamento de ações judiciais',
    description: 'Análise jurídica preliminar e elaboração de diagnósticos de risco para evitar passivos judiciais e buscar soluções amigáveis extrajudiciais.'
  },
  {
    numeral: 'V',
    title: 'Direito das Obrigações:',
    description: 'Litígios envolvendo contratos de locação, compra e venda, empréstimos, consórcio, depósitos, seguros, parcerias, doações, fiança, cessões de créditos, de direitos, ações envolvendo direitos autorais e de imagem.'
  },
  {
    numeral: 'VI',
    title: 'Responsabilidade Civil:',
    description: 'Ações envolvendo danos morais e materiais em geral, erro médico, dano ambiental, além de assuntos envolvendo a responsabilidade do Estado, enquanto poder público.'
  },
  {
    numeral: 'VII',
    title: 'Atuação em todo contencioso de natureza Cível, com condução especializada e acompanhamento de processos em todas as instâncias',
    description: 'Acompanhamento judicial técnico e estratégico em todas as esferas e instâncias (inclusive Tribunais Superiores) de processos da esfera cível.'
  },
  {
    numeral: 'VIII',
    title: 'Registros Públicos:',
    description: 'Ações que dizem respeito às nulidades e retificações de registros públicos.'
  },
  {
    numeral: 'IX',
    title: 'Cobrança de títulos de créditos e dívidas em geral',
    description: 'Execução judicial e cobrança extrajudicial de cheques, duplicatas, notas promissórias, contratos inadimplidos e recuperação de créditos diversos.'
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
          Direito <span class="text-accent italic font-normal">Civil</span>
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
          Precisa de assessoria jurídica especializada em Direito Civil?
        </h3>
        <p class="font-body text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-loose">
          Entre em contato diretamente conosco para agendar uma consulta e receber uma análise minuciosa e estratégica da sua demanda civil.
        </p>
        <div class="pt-4">
          <a
            href="https://api.whatsapp.com/send/?phone=554736223742&text=Olá! Preciso de assessoria jurídica em Direito Civil.&type=phone_number&app_absent=0"
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
