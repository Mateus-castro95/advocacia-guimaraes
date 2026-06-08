<script setup lang="ts">
import { ref, computed } from 'vue'
import { PhoneCall, Menu, X } from 'lucide-vue-next'
import { useRoute } from '#imports'

const route = useRoute()

const isAreasActive = computed(() => {
  return route.path === '/areas-de-atuacao' || route.path.startsWith('/advogado-')
})

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Áreas de Atuação +', href: '/areas-de-atuacao', hasDropdown: true },
  { name: 'Notícias', href: '/noticias' },
]

const areas = [
  { name: 'Direito Administrativo', href: '/advogado-administrativo-canoinhas-sc' },
  { name: 'Direito Ambiental', href: '/advogado-ambiental-canoinhas-sc' },
  { name: 'Direito Civil', href: '/advogado-civil-canoinhas-sc' },
  { name: 'Direito de Família e Sucessões', href: '/advogado-familia-e-sucessoes-canoinhas-sc' },
  { name: 'Direito Imobiliário', href: '/advogado-imobiliario-canoinhas-sc' },
  { name: 'Direito Médico, Odontológico e da Saúde', href: '/advogado-saude-canoinhas-sc' },
  { name: 'Direito Penal', href: '/advogado-penal-canoinhas-sc' },
  { name: 'Direito Previdenciário', href: '/advogado-previdenciario-canoinhas-sc' },
  { name: 'Direito Societário', href: '/advogado-societario-canoinhas-sc' },
  { name: 'Direito Trabalhista', href: '/advogado-trabalhista-canoinhas-sc' },
  { name: 'Direito Tributário', href: '/advogado-tributario-canoinhas-sc' }
]

const isMenuOpen = ref(false)
const isAccordionOpen = ref(false)
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { 
  isMenuOpen.value = false
  isAccordionOpen.value = false
}
</script>

<template>
  <div class="fixed top-6 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

    <!-- Barra principal do header -->
    <div
      class="w-full rounded-2xl px-6 py-3 sm:px-8 flex items-center justify-between relative overflow-visible"
      style="
        background: rgba(255, 255, 255, 0.07);
        backdrop-filter: blur(24px) saturate(180%) brightness(1.1);
        -webkit-backdrop-filter: blur(24px) saturate(180%) brightness(1.1);
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
      "
    >
      <!-- Reflexo de luz (glass sheen) -->
      <div
        class="absolute inset-0 pointer-events-none"
        style="background: linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 40%, transparent 100%);"
      ></div>

      <!-- Logo -->
      <div class="flex-shrink-0 flex items-center">
        <NuxtLink to="/" class="group flex items-center" @click="closeMenu">
          <img
            src="/img/Logo-Advocacia-Guimaraes.webp"
            alt="Logo Advocacia Guimarães"
            class="h-10 w-auto object-contain transition-smooth group-hover:opacity-90"
            style="filter: brightness(0) saturate(100%) invert(67%) sepia(21%) saturate(983%) brightness(95%) contrast(85%) drop-shadow(0 0 4px rgba(180, 145, 90, 0.25));"
          />
        </NuxtLink>
      </div>

      <!-- Links de Navegação (Desktop) -->
      <nav class="hidden lg:flex items-center space-x-8">
        <template v-for="item in navigation" :key="item.name">
          <!-- Item com Dropdown (Áreas de Atuação) -->
          <div v-if="item.hasDropdown" class="relative group py-2">
            <NuxtLink
              :to="item.href"
              class="font-body font-bodyMedium text-xs text-content-inverse/85 hover:text-accent uppercase tracking-wider transition-smooth flex items-center gap-1.5 focus:outline-none"
              :class="{ '!text-accent': isAreasActive }"
            >
              {{ item.name }}
            </NuxtLink>
            <!-- Dropdown Panel (Desktop) -->
            <div
              class="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
            >
              <div class="w-full bg-bg-darkAlt/95 backdrop-blur-md border border-border-dark rounded-xl shadow-[0_10px_45px_rgba(0,0,0,0.5)] p-4 flex flex-col gap-1">
                <!-- Links das Áreas -->
                <NuxtLink
                  v-for="area in areas"
                  :key="area.name"
                  :to="area.href"
                  class="font-body text-xs text-slate-300 hover:text-accent transition-colors py-2 px-3 rounded-md hover:bg-white/5 text-left font-normal"
                  exact-active-class="!text-accent bg-white/5"
                >
                  {{ area.name }}
                </NuxtLink>

                <!-- Divider -->
                <div class="h-[1px] bg-white/10 my-2"></div>

                <!-- Botão Ver Todas -->
                <NuxtLink
                  to="/areas-de-atuacao"
                  class="font-body text-xs bg-accent text-primary font-semibold py-2.5 px-3 rounded-md text-center block"
                >
                  Ver todas
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Item Normal -->
          <NuxtLink
            v-else
            :to="item.href"
            class="font-body font-bodyMedium text-xs text-content-inverse/85 hover:text-accent uppercase tracking-wider transition-smooth"
            exact-active-class="!text-accent"
          >
            {{ item.name }}
          </NuxtLink>
        </template>
      </nav>

      <!-- Botão Fale Conosco (Desktop) -->
      <div class="hidden lg:block">
        <a
          href="https://api.whatsapp.com/send/?phone=554736223742&text&type=phone_number&app_absent=0"
          target="_blank"
          class="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-primary font-body font-bodyMedium text-xs uppercase tracking-wider rounded-lg"
        >
          <span>Fale Conosco</span>
          <PhoneCall class="w-4 h-4" />
        </a>
      </div>

      <!-- Botão Hambúrguer (Mobile) -->
      <div class="lg:hidden">
        <button
          type="button"
          class="text-content-inverse hover:text-accent p-2 focus:outline-none transition-smooth flex items-center justify-center"
          aria-label="Abrir Menu"
          @click="toggleMenu"
        >
          <X v-if="isMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Menu Mobile Dropdown -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        class="lg:hidden mt-2 rounded-2xl px-6 py-4 flex flex-col gap-1"
        style="
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(24px) saturate(180%) brightness(1.1);
          -webkit-backdrop-filter: blur(24px) saturate(180%) brightness(1.1);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
        "
      >
        <template v-for="item in navigation" :key="item.name">
          <!-- Accordion de Áreas de Atuação -->
          <div v-if="item.hasDropdown" class="flex flex-col border-b border-white/5 py-1">
            <div class="flex items-center justify-between">
              <!-- Link do Texto -->
              <NuxtLink
                :to="item.href"
                class="font-body font-bodyMedium text-sm text-content-inverse/85 hover:text-accent uppercase tracking-wider transition-smooth py-3 text-left flex-grow"
                :class="{ '!text-accent': isAreasActive }"
                @click="closeMenu"
              >
                {{ item.name }}
              </NuxtLink>
              
              <!-- Seta para Expandir/Recolher -->
              <button
                type="button"
                class="text-content-inverse/85 hover:text-accent p-3 focus:outline-none flex items-center justify-center transition-smooth"
                aria-label="Expandir Áreas de Atuação"
                @click="isAccordionOpen = !isAccordionOpen"
              >
                <span 
                  class="text-[10px] transition-transform duration-300"
                  :class="isAccordionOpen ? 'rotate-180' : ''"
                >
                  ▼
                </span>
              </button>
            </div>
            
            <!-- Accordion Content -->
            <div
              v-show="isAccordionOpen"
              class="flex flex-col gap-2 pl-4 pb-3 overflow-hidden transition-all duration-300"
            >
              <NuxtLink
                v-for="area in areas"
                :key="area.name"
                :to="area.href"
                class="font-body text-xs text-slate-400 hover:text-accent transition-colors py-2 px-2 rounded-md"
                exact-active-class="!text-accent bg-white/5"
                @click="closeMenu"
              >
                {{ area.name }}
              </NuxtLink>
              
              <!-- Divider -->
              <div class="h-[1px] bg-white/5 my-1"></div>

              <!-- Botão Ver Todas -->
              <NuxtLink
                to="/areas-de-atuacao"
                class="font-body text-xs bg-accent text-primary font-semibold py-2.5 px-3 rounded-md text-center block"
                @click="closeMenu"
              >
                Ver todas
              </NuxtLink>
            </div>
          </div>

          <!-- Item Normal Mobile -->
          <NuxtLink
            v-else
            :to="item.href"
            class="font-body font-bodyMedium text-sm text-content-inverse/85 hover:text-accent uppercase tracking-wider transition-smooth py-3 border-b border-white/5 last:border-0"
            exact-active-class="!text-accent"
            @click="closeMenu"
          >
            {{ item.name }}
          </NuxtLink>
        </template>

        <a
          href="https://api.whatsapp.com/send/?phone=554736223742&text&type=phone_number&app_absent=0"
          target="_blank"
          class="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-primary font-body font-bodyMedium text-xs uppercase tracking-wider rounded-lg mt-3"
          @click="closeMenu"
        >
          <span>Fale Conosco</span>
          <PhoneCall class="w-4 h-4" />
        </a>
      </div>
    </Transition>

  </div>
</template>
