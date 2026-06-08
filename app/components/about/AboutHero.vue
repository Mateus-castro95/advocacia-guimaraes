<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { NuxtLink } from '#components'
</script>

<template>
  <section id="aboutHero" class="pt-36 pb-20 sm:pt-40 lg:pt-44 bg-bg-darkAlt relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Row: Grid with Left Text/Buttons and Right Image -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
        
        <!-- Left Side: Content -->
        <div class="lg:col-span-7 flex flex-col justify-center">
          <!-- Title with Decorative Line -->
          <div class="flex items-start gap-4 mb-6">
            <span class="w-12 h-[2px] bg-accent mt-4 shrink-0"></span>
            <h1 class="text-3xl sm:text-4xl lg:text-5xl text-content-inverse font-title font-semibold leading-normal sm:leading-relaxed">
              Estamos prontos para lutar por seus direitos
            </h1>
          </div>

          <!-- Description Text -->
          <p class="text-slate-300 font-body text-base mb-6" style="line-height: 2;">
            Nós da <strong class="text-content-inverse font-semibold">Guimarães Advocacia</strong> prestamos assessoria através de uma equipe treinada e qualificada. Temos uma filosofia de trabalho voltada para a qualidade, com cumprimento de prazo, sigilo, eficácia e profissionalismo na realização dos serviços oferecidos <strong class="text-content-inverse font-semibold">aos nossos clientes</strong>. Asseguramos a excelência de nossos serviços, estamos permanentemente inovando nossos processos através de programas de especialização e de educação contínua, mantendo uma equipe qualificada e motivada no atendimento de nossos clientes.
          </p>
          <p class="text-slate-300 font-body text-base mb-8" style="line-height: 2;">
            Assim criamos uma empresa sólida, que ao longo dos mais de 25 anos de atuação transformou-se em uma empresa estruturada e de sucesso. Estamos sempre atentos às novidades do mercado no intuito de oferecer sempre o melhor. Atendemos presencialmente ou à distância, sempre de maneira profissional.
          </p>

          <!-- Divider Line -->
          <div class="border-t border-border-dark mb-8 w-full"></div>

          <!-- Bullet Points (Botões Glassmorphic) -->
          <div class="flex flex-wrap gap-4 sm:gap-6">
            <!-- Botão 1: Profissionais qualificados -->
            <NuxtLink
              to="/sobre-nos"
              class="inline-flex items-center justify-between gap-4 px-5 py-2.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-accent/30 text-content-inverse hover:text-accent font-body font-medium text-base shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_20px_rgba(201,168,106,0.15)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            >
              <span>Profissionais qualificados</span>
              <div class="flex items-center justify-center w-7 h-7 rounded-full border border-accent/40 group-hover:border-accent text-accent transition-colors bg-black/20">
                <ArrowRight class="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </NuxtLink>

            <!-- Botão 2: Atendimento digital -->
            <a
              href="https://api.whatsapp.com/send/?phone=554736223742&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-between gap-4 px-5 py-2.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-accent/30 text-content-inverse hover:text-accent font-body font-medium text-base shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_20px_rgba(201,168,106,0.15)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            >
              <span>Atendimento digital</span>
              <div class="flex items-center justify-center w-7 h-7 rounded-full border border-accent/40 group-hover:border-accent text-accent transition-colors bg-black/20">
                <ArrowRight class="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        <!-- Right Side: Styled Image -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="relative flex items-stretch">
            <!-- Vertical brand label bar -->
            <div 
              class="w-20 bg-brand-navy text-white flex items-center justify-center rounded-l-lg select-none shadow-lg"
            >
              <span 
                style="writing-mode: vertical-rl;" 
                class="rotate-180 uppercase tracking-[0.25em] text-lg sm:text-xl lg:text-2xl font-title font-semibold text-accent"
              >
                Guimarães Advocacia
              </span>
            </div>
            
            <!-- Image Frame -->
            <div class="relative max-w-[340px] sm:max-w-[400px] overflow-hidden rounded-r-lg shadow-xl">
              <img 
                src="/img/banner-sobre-2.webp" 
                alt="Justiça - Guimarães Advocacia" 
                class="w-full h-auto block"
              />
            </div>
          </div>
        </div>

      </div>

      <!-- Bottom Row: Additional Info Text (De ponta a ponta) -->
      <div class="w-full space-y-6 border-t border-border-dark pt-12">
        <p class="text-slate-300 font-body text-base" style="line-height: 2;">
          Ficamos felizes em saber que o nosso trabalho tem resultados positivos. Nos especializamos em áreas do Direito diretamente relacionadas e interligadas, adotando uma estratégia de atuação segmentada em três etapas: <strong class="text-content-inverse font-semibold">preventivo, consultivo e contencioso</strong> visando garantir maior tranquilidade e segurança aos clientes.
        </p>
        <p class="text-slate-300 font-body text-base font-normal" style="line-height: 2;">
          Nossa equipe de especialistas são multidisciplinares, altamente treinados, com boa formação técnica e capazes de traduzir a legislação brasileira em benefício dos melhores interesses sempre mantendo contato próximo com todos os seus clientes, tornando, assim, essa relação ainda mais humana e proveitosa.
        </p>
      </div>

    </div>
  </section>
</template>
