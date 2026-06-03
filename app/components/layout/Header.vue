<script setup lang="ts">
import { ref } from 'vue'
import { PhoneCall, Menu, X } from 'lucide-vue-next'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Áreas de Atuação +', href: '/areas-de-atuacao', hasDropdown: true },
  { name: 'Notícias', href: '/noticias' },
]

const isMenuOpen = ref(false)
const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }
const closeMenu = () => { isMenuOpen.value = false }
</script>

<template>
  <div class="fixed top-6 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

    <!-- Barra principal do header -->
    <div
      class="w-full rounded-2xl px-6 py-3 sm:px-8 flex items-center justify-between relative overflow-hidden"
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
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="font-body font-bodyMedium text-xs text-content-inverse/85 hover:text-accent uppercase tracking-wider transition-smooth"
          exact-active-class="!text-accent"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>

      <!-- Botão Fale Conosco (Desktop) -->
      <div class="hidden lg:block">
        <a
          href="https://api.whatsapp.com/send/?phone=554736223742&text&type=phone_number&app_absent=0"
          target="_blank"
          class="inline-flex items-center justify-center gap-2 px-5 py-2 border border-accent text-accent hover:bg-accent hover:text-primary font-body font-bodyMedium text-xs uppercase tracking-wider rounded-md transition-smooth"
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
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="font-body font-bodyMedium text-sm text-content-inverse/85 hover:text-accent uppercase tracking-wider transition-smooth py-3 border-b border-white/5 last:border-0"
          exact-active-class="!text-accent"
          @click="closeMenu"
        >
          {{ item.name }}
        </NuxtLink>
        <a
          href="https://api.whatsapp.com/send/?phone=554736223742&text&type=phone_number&app_absent=0"
          target="_blank"
          class="inline-flex items-center justify-center gap-2 px-5 py-3 border border-accent text-accent hover:bg-accent hover:text-primary font-body font-bodyMedium text-xs uppercase tracking-wider rounded-md transition-smooth mt-3"
          @click="closeMenu"
        >
          <span>Fale Conosco</span>
          <PhoneCall class="w-4 h-4" />
        </a>
      </div>
    </Transition>

  </div>
</template>
