<script setup lang="ts">
import { PhoneCall } from 'lucide-vue-next'
import { useSeoMeta, useHead } from '#imports'

// Configuração de SEO local para Direito Imobiliário
useSeoMeta({
  title: 'Advogado Imobiliário em Canoinhas - SC | Guimarães Advocacia',
  description: 'Assessoria jurídica em Direito Imobiliário em Canoinhas - SC. Compra e venda de imóveis, usucapião, despejo, contratos de locação e regularizações patrimoniais.',
  ogTitle: 'Advogado Imobiliário em Canoinhas - SC | Guimarães Advocacia',
  ogDescription: 'Assessoria jurídica em Direito Imobiliário em Canoinhas - SC. Compra e venda, usucapião, despejo e regularizações.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/advogado-imobiliario-canoinhas-sc' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Guimarães Advocacia - Direito Imobiliário',
        'description': 'Assessoria especializada em contratos de locação, regularização de imóveis e disputas possessórias em Canoinhas - SC.',
        'url': 'https://advogadosguimaraes.com.br/advogado-imobiliario-canoinhas-sc',
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
    title: 'Assessoria Jurídica completa na Compra e Venda de Imóveis',
    description: 'Análise detalhada de certidões, riscos patrimoniais e elaboração de contratos seguros para garantir total tranquilidade na transação imobiliária.'
  },
  {
    numeral: 'II',
    title: 'Contratos de Locação em geral com apoio na elaboração, revisão e análise',
    description: 'Elaboração de cláusulas personalizadas que garantem segurança para locadores e locatários, evitando conflitos judiciais desnecessários.'
  },
  {
    numeral: 'III',
    title: 'Ações de Indenização por atraso na entrega de Imóveis',
    description: 'Proteção dos direitos do comprador para reaver prejuízos financeiros, lucros cessantes e danos morais decorrentes de atrasos de construtoras.'
  },
  {
    numeral: 'IV',
    title: 'Apoio com certidões e registros perante Cartório de Notas e Registro de Ofícios',
    description: 'Assessoria burocrática completa para regularização de escrituras, averbações e resolução de pendências em cartórios de registros imobiliários.'
  },
  {
    numeral: 'V',
    title: 'Ações de Despejo',
    description: 'Medida judicial célere para retomada do imóvel em situações de inadimplência, infração contratual ou término do prazo de locação.'
  },
  {
    numeral: 'VI',
    title: 'Ações de Usucapião, Reintegração de Posse e Emissão na Posse',
    description: 'Defesa e regularização da posse da terra, seja por meio da declaração de usucapião ou ações possessórias de urgência.'
  },
  {
    numeral: 'VII',
    title: 'Ações Renovatórias de Locação não Residencial (Arts. 51 e 71 da Lei 8.245/91)',
    description: 'Garantia do direito inerente ao ponto comercial de empresas, assegurando a renovação compulsória do contrato de aluguel comercial.'
  },
  {
    numeral: 'VIII',
    title: 'Ações Revisionais',
    description: 'Revisão judicial de valores de aluguel para adequá-los aos preços de mercado atuais, restabelecendo o equilíbrio econômico do contrato.'
  },
  {
    numeral: 'IX',
    title: 'Ação de Retificação de Registro Imobiliário',
    description: 'Correção judicial ou extrajudicial de erros materiais, metragens incorretas ou dados desatualizados na matrícula do imóvel.'
  },
  {
    numeral: 'X',
    title: 'Ação Para Suprimento de Outorga Conjugal',
    description: 'Suprimento judicial da autorização do cônjuge que recusa injustificadamente assinar transações ou gravames imobiliários.'
  },
  {
    numeral: 'XI',
    title: 'Ações Versando Sobre Falsidade Documental',
    description: 'Atuação técnica para declarar a nulidade de escrituras, procurações ou assinaturas fraudadas em negócios imobiliários.'
  },
  {
    numeral: 'XII',
    title: 'Ação Reivindicatória',
    description: 'Ação do proprietário não possuidor contra o possuidor não proprietário para reaver a posse direta do imóvel com base no título de propriedade.'
  },
  {
    numeral: 'XIII',
    title: 'Ação de Desapropriação',
    description: 'Defesa e garantia do recebimento de indenização justa, prévia e em dinheiro diante de processos de desapropriação pelo Poder Público.'
  },
  {
    numeral: 'XIV',
    title: 'Ação de Resolução Proposta pelo Comprador para Reaver o que Pagou',
    description: 'Direito do adquirente de rescindir o contrato de promessa de compra e venda em caso de impossibilidade financeira, com a devolução dos valores pagos.'
  },
  {
    numeral: 'XV',
    title: 'Ação de Adjudicação Compulsória',
    description: 'Registro definitivo do imóvel em nome do comprador quando o vendedor se recusa ou está impossibilitado de outorgar a escritura definitiva.'
  },
  {
    numeral: 'XVI',
    title: 'Ação de Execução para Entrega de coisa Certa',
    description: 'Ação executiva para compelir o devedor a entregar o imóvel ou bem imobiliário devidamente especificado no título executivo.'
  },
  {
    numeral: 'XVII',
    title: 'Ação de Resolução Contratual em Virtude de Atraso na Entrega de Obra ou Recusa/Impossibilidade de Outorga de Escritura',
    description: 'Rescisão do contrato por culpa exclusiva da construtora ou vendedor, com direito à devolução de 100% dos valores pagos e multas aplicáveis.'
  },
  {
    numeral: 'XVIII',
    title: 'Ação de Imissão na Posse',
    description: 'Ação para que o novo adquirente proprietário de um imóvel possa entrar na posse direta do bem pela primeira vez, retirando eventuais ocupantes.'
  },
  {
    numeral: 'XIX',
    title: 'Ação de Sustação de Leilão/Execução Extrajudicial',
    description: 'Medida urgente para suspender ou anular leilões de imóveis financiados decorrentes de irregularidades procedimentais da instituição financeira.'
  },
  {
    numeral: 'XX',
    title: 'Ação de Cobrança de Despesas Condominiais',
    description: 'Cobrança ágil de taxas de condomínio atrasadas para assegurar a saúde financeira e a manutenção predial.'
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
          Direito <span class="text-accent italic font-normal">Imobiliário</span>
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
          Precisa de segurança jurídica para os seus negócios imobiliários?
        </h3>
        <p class="font-body text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-loose">
          Fale diretamente com um de nossos especialistas em Direito Imobiliário para proteger seus investimentos e patrimônio.
        </p>
        <div class="pt-4">
          <a
            href="https://api.whatsapp.com/send/?phone=554736223742&text=Olá! Preciso de assessoria jurídica em Direito Imobiliário.&type=phone_number&app_absent=0"
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
