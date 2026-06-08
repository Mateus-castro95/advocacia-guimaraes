<script setup lang="ts">
import { PhoneCall } from 'lucide-vue-next'
import { useSeoMeta, useHead } from '#imports'

// Configuração de SEO local para Direito Trabalhista
useSeoMeta({
  title: 'Advogado Trabalhista em Canoinhas - SC | Guimarães Advocacia',
  description: 'Assessoria jurídica em Direito Trabalhista em Canoinhas - SC. Defesa de direitos do trabalhador e consultoria preventiva para empregadores.',
  ogTitle: 'Advogado Trabalhista em Canoinhas - SC | Guimarães Advocacia',
  ogDescription: 'Assessoria jurídica em Direito Trabalhista em Canoinhas - SC. Defesa de direitos e assessoria consultiva.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/advogado-trabalhista-canoinhas-sc' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        'name': 'Guimarães Advocacia - Direito Trabalhista',
        'description': 'Assessoria jurídica especializada em relações de trabalho, contencioso trabalhista e prevenção de riscos para empresas em Canoinhas - SC.',
        'url': 'https://advogadosguimaraes.com.br/advogado-trabalhista-canoinhas-sc',
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
    title: 'Jornada de Trabalho:',
    description: 'Horas extras, Domingos e Feriados Trabalhados, Adicional noturno, Jornada noturna reduzida, Descanso semanal remunerado.'
  },
  {
    numeral: 'II',
    title: 'Empregador:',
    description: 'Terceirização, Responsabilidade Solidária e Subsidiária, Poder Diretivo.'
  },
  {
    numeral: 'III',
    title: 'Contrato de Trabalho:',
    description: 'Contrato por tempo determinado, Contrato de aprendizagem, Suspensão e interrupção, Efeitos da aposentadoria.'
  },
  {
    numeral: 'IV',
    title: 'Estabilidade:',
    description: 'Gestante, Acidentária, Cipeiro, Dirigente Sindical.'
  },
  {
    numeral: 'V',
    title: 'Férias e Rescisão',
    description: 'Férias, 13º Salário, Aviso prévio e suas modalidades.'
  },
  {
    numeral: 'VI',
    title: 'Salário:',
    description: 'Salário-mínimo, Piso salarial, Equiparação salarial.'
  },
  {
    numeral: 'VII',
    title: 'Adicionais:',
    description: 'Adicional de insalubridade, adicional de periculosidade, Participação nos lucros, Correção monetária, Estabilidade, Rescisão, Programa de desligamento voluntário, Reintegração, Prescrição dos Créditos.'
  },
  {
    numeral: 'VIII',
    title: 'Empregado:',
    description: 'Vínculo empregatício, Autônomo, Profissional liberal, Representante comercial, Cooperativas de trabalho, Trabalhador voluntário, Estagiário, Programa Primeiro Emprego, Trabalho Infanto-Juvenil, Pessoas portadoras de Deficiência, Esportistas.'
  },
  {
    numeral: 'IX',
    title: 'Contencioso e Consultivo',
    description: 'Atuação em primeiras e segundas instâncias na área contenciosa, preventiva e consultiva de questões que envolvem as relações de emprego e de trabalho, como carteira de trabalho, trabalho de mulheres grávidas e menores, saúde e segurança no trabalho, garantia de estabilidade, gratificações, dano moral e acordos para extinção do processo.'
  },
  {
    numeral: 'X',
    title: 'Saúde:',
    description: 'Auxílio-doença, Acidente de trabalho.'
  },
  {
    numeral: 'XI',
    title: 'Direitos Coletivos',
    description: 'Direitos oriundos das normas coletivas de trabalho: Acordos e Convenções coletivas, Direito de greve.'
  },
  {
    numeral: 'XII',
    title: 'Responsabilidade Civil:',
    description: 'Discriminação, Assédio moral, Dano moral.'
  },
  {
    numeral: 'XIII',
    title: 'Análise de Contratos',
    description: 'Análise de contratos de trabalho de diversas modalidades, por prazo determinado ou indeterminado, tais como contrato temporário, terceirizado, de experiência, por obra ou serviço certo, além de outros.'
  },
  {
    numeral: 'XIV',
    title: 'Acordos Trabalhistas',
    description: 'Discriminação de verbas que compõem o acordo.'
  },
  {
    numeral: 'XV',
    title: 'Defesa do Empregador',
    description: 'Contestação de reclamações trabalhistas que envolvem as mais diversas relações de trabalho.'
  },
  {
    numeral: 'XVI',
    title: 'Laudos Periciais',
    description: 'Impugnação e manifestação sobre laudos periciais.'
  },
  {
    numeral: 'XVII',
    title: 'Rotina de RH',
    description: 'Disciplina, admissões, pedidos de demissões, rescisão indireta.'
  },
  {
    numeral: 'XVIII',
    title: 'Acidentes de Trabalho',
    description: 'Ações que envolvem Acidentes de Trabalho e pedido de Indenizações por Dano Material, Dano Moral e Dano Estético com pedido de pensionamento até o final da vida em favor da vítima ou de seus familiares.'
  },
  {
    numeral: 'XIX',
    title: 'Supressão de Benefícios',
    description: 'Redução ou Retirada de Benefícios dos Empregados (Vale-Alimentação, Refeição, Transporte, Planos de Saúde e etc).'
  },
  {
    numeral: 'XX',
    title: 'Horas Extras e Plantões',
    description: 'Não Pagamento de Horas Extras, Hora BIP (Plantão).'
  },
  {
    numeral: 'XXI',
    title: 'Desvio e Acúmulo',
    description: 'Reconhecimento de Desvio e Acúmulo de Função e Pedidos de Equiparação Funcional e Salarial.'
  },
  {
    numeral: 'XXII',
    title: 'Assédio e Dano Moral',
    description: 'Indenizações por Assédio Moral e Assédio Sexual e Dano Moral no Ambiente de Trabalho.'
  },
  {
    numeral: 'XXIII',
    title: 'Adicionais Trabalhistas',
    description: 'Adicionais de Periculosidade, Insalubridade e Trabalho Noturno.'
  },
  {
    numeral: 'XXIV',
    title: 'Contratos Especiais',
    description: 'Elaboração de Contratos de Representante Comercial (Lei 4.886/65) e Vendedores Pracistas.'
  },
  {
    numeral: 'XXV',
    title: 'Violabilidade de Estabilidades',
    description: 'Violação de Estabilidade da Empregada Gestante, Estabilidade de Dirigentes da CIPA, Estabilidade Acidentária e Representação Sindical.'
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
          Direito <span class="text-accent italic font-normal">Trabalhista</span>
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
          Precisa de auxílio especializado em Direito do Trabalho?
        </h3>
        <p class="font-body text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-loose">
          Fale diretamente com um especialista e receba orientação completa sobre contratos, rescisões e direitos trabalhistas.
        </p>
        <div class="pt-4">
          <a
            href="https://api.whatsapp.com/send/?phone=554736223742&text=Olá! Preciso de assessoria jurídica em Direito Trabalhista.&type=phone_number&app_absent=0"
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
