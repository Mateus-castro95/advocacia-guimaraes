<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useSeoMeta, useHead } from '#imports'
import { ArrowLeft, PhoneCall } from 'lucide-vue-next'
import { articles } from '~/data/noticias'

const route = useRoute()
const slug = route.params.slug as string

// Encontra o artigo correspondente pelo slug
const article = computed(() => {
  return articles.find(a => a.slug === slug)
})

// Configuração dinâmica de SEO para o artigo
if (article.value) {
  useSeoMeta({
    title: `${article.value.title} | Guimarães Advocacia Canoinhas - SC`,
    description: article.value.summary,
    ogTitle: `${article.value.title} | Guimarães Advocacia`,
    ogDescription: article.value.summary,
    ogType: 'article',
    ogImage: article.value.image || undefined,
    twitterCard: 'summary_large_image'
  })

  useHead({
    link: [
      { rel: 'canonical', href: `https://advogadosguimaraes.com.br/noticias/${article.value.slug}` }
    ]
  })
}
</script>

<template>
  <div class="bg-bg-dark text-content-inverse min-h-screen font-body">
    <!-- Se o artigo for encontrado -->
    <div v-if="article" class="relative">
      
      <!-- Hero do Artigo (Sem padding pt-28 por conta do transparent header) -->
      <section class="relative pt-40 pb-20 overflow-hidden bg-bg-dark min-h-[45vh] sm:min-h-[50vh] flex items-center border-b border-border-dark">
        <!-- Imagem de Fundo do Artigo com Mascaramento -->
        <div class="absolute inset-0 z-0">
          <img 
            v-if="article.image" 
            :src="article.image" 
            :alt="article.title" 
            class="w-full h-full object-cover opacity-35" 
          />
          <!-- Textura decorativa se não houver imagem -->
          <div v-else class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, #C9A86A 1.2px, transparent 1.2px); background-size: 16px 16px;"></div>
        </div>

        <!-- Overlays de Cor e Gradiente (Mascara de Transparência) -->
        <div 
          class="absolute inset-0 z-10"
          style="
            background: linear-gradient(to bottom, rgba(17, 17, 17, 0.60) 0%, rgba(17, 17, 17, 0.85) 60%, rgba(17, 17, 17, 1) 100%);
          "
        ></div>

        <!-- Glow Dourado de Fundo Adicional -->
        <div class="absolute inset-0 pointer-events-none opacity-15 z-20">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent rounded-full blur-[150px]"></div>
        </div>

        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
          <!-- Botão Voltar -->
          <NuxtLink 
            to="/noticias" 
            class="inline-flex items-center gap-2 text-accent hover:text-accent-light text-xs uppercase tracking-widest font-semibold mb-8 transition-colors group"
          >
            <ArrowLeft class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para Notícias</span>
          </NuxtLink>

          <!-- Categoria -->
          <span class="text-accent font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-4">
            {{ article.category }}
          </span>

          <!-- Título Principal -->
          <h1 class="text-3xl sm:text-4.5xl lg:text-5.5xl font-title font-semibold text-content-inverse tracking-wide leading-tight mb-6">
            {{ article.title }}
          </h1>

          <!-- Autor / Info de Publicação -->
          <div class="flex items-center gap-3 text-slate-500 text-xs sm:text-sm font-normal border-t border-white/5 pt-6">
            <span>Escrito por:</span>
            <span class="text-slate-300 font-medium">Banca Guimarães Advocacia</span>
            <span class="w-1.5 h-1.5 rounded-full bg-accent/45"></span>
            <span>Canoinhas - SC</span>
          </div>
        </div>
      </section>

      <!-- Corpo do Artigo -->
      <section class="py-16 sm:py-20">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <!-- Conteúdo Editorial (Leitura Confortável) -->
          <div class="max-w-3xl mx-auto">
            <p 
              v-for="(paragraph, index) in article.content" 
              :key="index"
              class="font-body text-slate-300 text-base sm:text-lg leading-loose mb-8 text-justify font-normal"
            >
              {{ paragraph }}
            </p>
          </div>

          <!-- Divider -->
          <div class="max-w-3xl mx-auto h-[1px] bg-border-dark my-16"></div>

          <!-- Seção CTA (WhatsApp Integrado) -->
          <div class="max-w-3xl mx-auto bg-bg-darkAlt border border-accent/30 rounded-2xl p-8 sm:p-10 text-center shadow-xl relative overflow-hidden">
            <div class="absolute inset-0 pointer-events-none opacity-5">
              <div class="absolute -bottom-20 -right-20 w-60 h-60 bg-accent rounded-full blur-[80px]"></div>
            </div>
            
            <div class="relative z-10 space-y-6">
              <h3 class="font-title text-2.5xl sm:text-3xl text-content-inverse font-semibold leading-snug">
                Ficou com alguma dúvida sobre este assunto?
              </h3>
              <p class="font-body text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                Nossos advogados especialistas estão prontos para analisar o seu caso de forma detalhada e segura. Fale conosco agora mesmo.
              </p>
              <div class="pt-4">
                <a
                  :href="`https://api.whatsapp.com/send/?phone=554736223742&text=Olá! Estava lendo o artigo sobre '${article.title}' no site e gostaria de tirar uma dúvida.&type=phone_number&app_absent=0`"
                  target="_blank"
                  class="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-accent text-primary font-body font-semibold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:bg-accent-light hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Falar com Advogado Especialista</span>
                  <PhoneCall class="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>

    <!-- Se o artigo não for encontrado -->
    <div v-else class="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-slate-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <h1 class="text-3xl font-title font-semibold mb-4">Artigo não encontrado</h1>
      <p class="text-slate-400 font-body mb-8 max-w-md leading-relaxed">
        O link que você acessou pode estar quebrado ou o artigo foi removido de nossa base.
      </p>
      <NuxtLink 
        to="/noticias" 
        class="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-semibold text-xs uppercase tracking-wider rounded-lg hover:bg-accent-light transition-colors"
      >
        <ArrowLeft class="w-4 h-4" />
        <span>Voltar para o Blog</span>
      </NuxtLink>
    </div>
  </div>
</template>
