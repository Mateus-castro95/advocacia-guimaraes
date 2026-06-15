<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useSeoMeta, useHead } from '#imports'
import { articles } from '~/data/noticias'
import NoticiasHero from '~/components/noticias/NoticiasHero.vue'

// Configuração de SEO local para Notícias
useSeoMeta({
  title: 'Notícias e Artigos | Guimarães Advocacia Canoinhas - SC',
  description: 'Fique por dentro das últimas novidades legislativas, notícias jurídicas e artigos informativos produzidos pela banca da Guimarães Advocacia em Canoinhas - SC.',
  ogTitle: 'Notícias e Artigos | Guimarães Advocacia Canoinhas - SC',
  ogDescription: 'Fique por dentro das últimas novidades legislativas e notícias jurídicas em Canoinhas - SC.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://advogadosguimaraes.com.br/noticias' }
  ]
})

// Estado dos filtros
const selectedCategory = ref('Todos')
const visibleCount = ref(9)

// Extração dinâmica das categorias
const categories = computed(() => {
  return ['Todos', ...new Set(articles.map(a => a.category))]
})

// Artigos filtrados
const filteredArticles = computed(() => {
  if (selectedCategory.value === 'Todos') {
    return articles
  }
  return articles.filter(a => a.category === selectedCategory.value)
})

// Fatiamento de artigos para paginação
const paginatedArticles = computed(() => {
  return filteredArticles.value.slice(0, visibleCount.value)
})

// Carrega mais artigos
const loadMore = () => {
  visibleCount.value += 9
}

// Reseta o limite exibido ao mudar de categoria
watch(selectedCategory, () => {
  visibleCount.value = 9
})
</script>

<template>
  <div class="bg-bg-dark text-content-inverse font-body">
    <NoticiasHero />

    <section class="py-16 sm:py-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Filtro de Categorias Premium (Mobile: Select, Desktop: Tabs) -->
        <div class="mb-16">
          <!-- Dropdown para Mobile (Visível apenas em telas menores que lg) -->
          <div class="lg:hidden w-full max-w-md mx-auto">
            <div class="relative">
              <select
                id="category-select"
                v-model="selectedCategory"
                class="w-full bg-bg-darkAlt border border-border-dark text-slate-300 font-semibold text-xs uppercase tracking-wider px-4 py-4 rounded-xl appearance-none focus:outline-none focus:border-accent transition-colors cursor-pointer pr-12 shadow-lg"
              >
                <option v-for="cat in categories" :key="cat" :value="cat">
                  {{ cat }}
                </option>
              </select>
              <!-- Seta customizada dourada -->
              <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Abas para Desktop (Visível apenas em lg e maiores) -->
          <div class="hidden lg:flex flex-wrap items-center justify-center gap-2.5 border-b border-border-dark pb-6">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              @click="selectedCategory = cat"
              class="px-5 py-2.5 text-[11px] uppercase tracking-wider font-semibold rounded-full border transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5 shadow-md"
              :class="selectedCategory === cat 
                ? 'bg-accent border-accent text-primary' 
                : 'border-border-dark text-slate-400 bg-bg-darkAlt/60 hover:text-accent hover:border-accent/50'"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Grid de Artigos -->
        <div v-if="paginatedArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <div
            v-for="article in paginatedArticles"
            :key="article.id"
            class="group bg-bg-darkAlt border border-border-dark rounded-xl overflow-hidden shadow-2xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
          >
            <!-- 1. IMAGEM (Espaço reservado) -->
            <div class="relative aspect-[16/10] bg-bg-dark overflow-hidden border-b border-border-dark flex items-center justify-center group/img">
              <!-- Imagem real -->
              <img 
                v-if="article.image" 
                :src="article.image" 
                :alt="article.title" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <!-- Placeholder visível se não houver imagem -->
              <div v-else class="absolute inset-0 flex flex-col items-center justify-center bg-bg-dark text-slate-600 transition-colors group-hover:bg-bg-dark/80">
                <!-- Textura decorativa premium -->
                <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle, #C9A86A 1.2px, transparent 1.2px); background-size: 16px 16px;"></div>
                
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mb-2 opacity-35 text-accent transition-all duration-300 group-hover:scale-110 group-hover:opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="text-[9px] uppercase tracking-widest opacity-60 font-semibold text-center px-4">Espaço para Imagem</span>
              </div>
            </div>

            <!-- Conteúdo (Categoria, Título, Resumo, Botão) -->
            <div class="p-6 flex-grow flex flex-col justify-between">
              <div>
                <!-- 2. CATEGORIA -->
                <span class="text-accent font-semibold text-[11px] uppercase tracking-widest mb-3 block">
                  {{ article.category }}
                </span>
                
                <!-- 3. TÍTULO -->
                <NuxtLink :to="'/noticias/' + article.slug" class="block">
                  <h3 class="text-lg font-title font-semibold text-content-inverse hover:text-accent transition-colors mb-3 line-clamp-2 leading-relaxed min-h-[3.5rem]">
                    {{ article.title }}
                  </h3>
                </NuxtLink>
                
                <!-- 4. RESUMO (Pequeno resumo do artigo em 2 linhas) -->
                <p class="text-slate-400 font-normal text-sm mb-6 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                  {{ article.summary }}
                </p>
              </div>

              <!-- 5. BOTÃO LER MAIS -->
              <div>
                <NuxtLink 
                  :to="'/noticias/' + article.slug"
                  class="inline-flex items-center gap-2 text-accent hover:text-accent-light font-body font-semibold text-[10px] uppercase tracking-widest transition-colors focus:outline-none group/btn"
                >
                  <span>Ler mais</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Sem Artigos Encontrados -->
        <div v-else class="text-center py-20 bg-bg-darkAlt border border-border-dark rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 mx-auto text-slate-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p class="text-slate-400 font-medium">Nenhum artigo encontrado nesta categoria.</p>
        </div>

        <!-- Botão Carregar Mais -->
        <div v-if="filteredArticles.length > visibleCount" class="text-center mt-16">
          <button 
            type="button"
            @click="loadMore"
            class="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border border-accent/65 text-accent hover:bg-accent hover:text-primary font-semibold text-[11px] uppercase tracking-widest rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:border-accent hover:shadow-[0_0_15px_rgba(201,168,106,0.25)]"
          >
            Carregar mais artigos
          </button>
        </div>

      </div>
    </section>
  </div>
</template>

<style scoped>
/* Remove barra de rolagem horizontal mantendo a funcionalidade */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
