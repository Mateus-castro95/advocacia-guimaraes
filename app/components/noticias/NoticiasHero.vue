<script setup lang="ts">
// Componente de Hero para a página de Notícias
</script>

<template>
  <section class="relative pt-36 pb-10 bg-bg-dark flex flex-col items-center justify-center text-center overflow-hidden">
    <!-- Efeito de Luz Luxuoso -->
    <div class="absolute inset-0 pointer-events-none opacity-10">
      <div class="absolute -top-48 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-[180px]"></div>
    </div>

    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <span class="text-accent font-body text-xs sm:text-sm uppercase tracking-widest font-semibold mb-3 block">
        Blog & Conteúdo Jurídico
      </span>
      <h1 class="text-4xl sm:text-5xl lg:text-6xl text-content-inverse font-title font-semibold mb-6 tracking-wide leading-tight">
        Notícias & Artigos
      </h1>
      <p class="text-slate-400 font-body text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
        Mantenha-se atualizado com as últimas novidades do setor jurídico, análises de leis e orientações preparadas pela nossa equipe de especialistas.
      </p>
      
      <!-- Divider elegante -->
      <div class="w-24 h-[1px] bg-accent/40 mx-auto mt-8"></div>
    </div>
  </section>
</template>
