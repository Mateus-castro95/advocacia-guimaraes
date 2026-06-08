<script setup lang="ts">
import { PhoneCall } from 'lucide-vue-next'
import { useSeoMeta, useHead } from '#imports'

// Configuração de SEO local para Direito de Família e Sucessões
useSeoMeta({
  title: 'Advogado de Família e Sucessões em Canoinhas - SC | Guimarães Advocacia',
  description: 'Assessoria jurídica em inventários, divórcios, partilha de bens, pensão alimentícia e planejamento sucessório em Canoinhas - SC.',
  ogTitle: 'Advogado de Família e Sucessões em Canoinhas - SC | Guimarães Advocacia',
  ogDescription: 'Assessoria jurídica em inventários, divórcios, partilha de bens e planejamento sucessório em Canoinhas - SC.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/advogado-familia-e-sucessoes-canoinhas-sc' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Guimarães Advocacia - Direito de Família e Sucessões',
        'description': 'Assessoria especializada em divórcios, guarda, pensão, inventários judiciais e extrajudiciais em Canoinhas - SC.',
        'url': 'https://advogadosguimaraes.com.br/advogado-familia-e-sucessoes-canoinhas-sc',
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
    title: 'Inventários e arrolamentos',
    description: 'Processo de levantamento, partilha e transferência de bens deixados pelo falecido aos herdeiros legítimos de forma consensual ou litigiosa.'
  },
  {
    numeral: 'II',
    title: 'Habilitação de crédito em inventários',
    description: 'Procedimento para credores solicitarem o pagamento de dívidas ativas do falecido diretamente dentro do processo de inventário.'
  },
  {
    numeral: 'III',
    title: 'Testamentos',
    description: 'Assessoria e planejamento para declaração de última vontade, garantindo a destinação do patrimônio segundo a lei e desejo do testador.'
  },
  {
    numeral: 'IV',
    title: 'Anulação de testamento',
    description: 'Medida judicial para invalidar testamentos que possuam vícios de consentimento, incapacidade do testador ou erros de formalidade legal.'
  },
  {
    numeral: 'V',
    title: 'Divórcio (consensual e litigioso)',
    description: 'Dissolução legal do casamento com definição de partilha de bens, pensão alimentícia e guarda de filhos pela via amigável ou judicial.'
  },
  {
    numeral: 'VI',
    title: 'Anulação de casamento',
    description: 'Ação jurídica para invalidar o casamento civil em casos de erro essencial sobre a pessoa do outro cônjuge ou coação.'
  },
  {
    numeral: 'VII',
    title: 'Investigação de paternidade',
    description: 'Ação destinada a obter o reconhecimento legal do vínculo de filiação com todas as consequências patrimoniais e de registro civil.'
  },
  {
    numeral: 'VIII',
    title: 'Alimentos',
    description: 'Fixação judicial de pensão alimentícia para prover o sustento e necessidades básicas de filhos menores ou ex-cônjuge necessitado.'
  },
  {
    numeral: 'IX',
    title: 'Revisões de alimentos',
    description: 'Ação para aumentar ou diminuir o valor da pensão alimentícia com base na alteração da necessidade de quem recebe ou da capacidade de quem paga.'
  },
  {
    numeral: 'X',
    title: 'Execução de alimentos',
    description: 'Cobrança forçada de pensões em atraso sob rito de prisão civil do devedor ou penhora de seus bens patrimoniais.'
  },
  {
    numeral: 'XI',
    title: 'Regulamentação de guarda',
    description: 'Definição jurídica sobre a responsabilidade e convivência com os filhos (compartilhada ou unilateral), visando o melhor interesse do menor.'
  },
  {
    numeral: 'XII',
    title: 'Regulamentação de visitas',
    description: 'Definição de regime de convivência do filho com o genitor que não detém a residência de referência, garantindo o convívio familiar.'
  },
  {
    numeral: 'XIII',
    title: 'Interdição',
    description: 'Processo para declarar a incapacidade civil de pessoa que não possa exprimir sua vontade devido a enfermidade ou deficiência mental.'
  },
  {
    numeral: 'XIV',
    title: 'Tutela e curatela',
    description: 'Nomeação de responsável legal para zelar pelos interesses e bens de menores de idade ou maiores interditados incapazes.'
  },
  {
    numeral: 'XV',
    title: 'Adoção',
    description: 'Assessoria completa no processo legal de integração de uma criança ou adolescente em uma nova família com plenos direitos de filiação.'
  },
  {
    numeral: 'XVI',
    title: 'Emancipação',
    description: 'Procedimento para concessão da capacidade civil plena a menores de 18 anos por vontade dos pais ou por decisão judicial.'
  },
  {
    numeral: 'XVII',
    title: 'Extinção de usufruto ou fideicomisso',
    description: 'Procedimento legal para cancelamento do direito de uso e gozo temporário sobre um bem imóvel ou liberação de herança sob condição.'
  },
  {
    numeral: 'XVIII',
    title: 'Alienação e arrendamento ou oneração de bens',
    description: 'Pedido judicial de autorização para venda, aluguel ou oferecimento em garantia de bens pertencentes a menores ou incapazes.'
  },
  {
    numeral: 'XIX',
    title: 'Alvarás',
    description: 'Pedido de autorização judicial para levantamento de valores (saldos bancários, PIS/FGTS) deixados por falecidos ou para atos específicos.'
  },
  {
    numeral: 'XX',
    title: 'Ofícios',
    description: 'Requerimentos judiciais a órgãos públicos e privados para obtenção de informações relevantes a litígios familiares.'
  },
  {
    numeral: 'XXI',
    title: 'Mandados',
    description: 'Solicitações judiciais para cumprimento de ordens de averbação, busca e apreensão de menores ou afastamento do lar.'
  },
  {
    numeral: 'XXII',
    title: 'Divórcio Imediato em Cartório ou Judicial, Consensual ou Litigioso sem aguardar prazo para realização',
    description: 'Dissolução imediata do vínculo conjugal sem necessidade de prévia separação judicial ou prazo mínimo, tanto via administrativa quanto judicial.'
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
          Direito de Família <span class="text-accent italic font-normal">e Sucessões</span>
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
          Precisa de acolhimento e segurança jurídica familiar?
        </h3>
        <p class="font-body text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-loose">
          Fale de forma segura e com total sigilo com um advogado especialista em Direito de Família e Sucessões.
        </p>
        <div class="pt-4">
          <a
            href="https://api.whatsapp.com/send/?phone=554736223742&text=Olá! Preciso de assessoria em Direito de Família e Sucessões.&type=phone_number&app_absent=0"
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
