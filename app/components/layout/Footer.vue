<script setup lang="ts">
import { ChevronRight, Mail, MapPin, Facebook, Instagram } from 'lucide-vue-next'

const linksCol1 = [
  { name: 'Início', href: '/' },
  { name: 'Áreas de Atuação', href: '/areas-de-atuacao' },
  { name: 'Fale Conosco', href: '/fale-conosco' }
]

const linksCol2 = [
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Notícias', href: '/noticias' }
]
</script>

<template>
  <footer class="bg-bg-dark border-t border-border-dark py-16 sm:py-20 text-slate-300 relative overflow-hidden font-body">
    <!-- Grafismo de Fundo Sutil (Luxuoso) -->
    <div class="absolute inset-0 pointer-events-none opacity-5">
      <div class="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-[120px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Grid Principal -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        
        <!-- Coluna 1: Logo & Expediente & Redes Sociais -->
        <div class="lg:col-span-3 flex flex-col items-start">
          <NuxtLink to="/" class="group flex items-center mb-6">
            <img
              src="/img/Logo-Advocacia-Guimaraes.webp"
              alt="Logo Advocacia Guimarães"
              class="h-12 w-auto object-contain transition-all duration-300 group-hover:opacity-90"
              style="filter: brightness(0) saturate(100%) invert(67%) sepia(21%) saturate(983%) brightness(95%) contrast(85%) drop-shadow(0 0 4px rgba(180, 145, 90, 0.25));"
            />
          </NuxtLink>
          
          <p class="text-slate-300 text-sm font-normal mb-5 max-w-sm" style="line-height: 2;">
            Nós da Guimarães Advocacia prestamos assessoria através de uma equipe treinada e qualificada.
          </p>

          <div class="mb-6">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Expediente:
            </h4>
            <p class="text-slate-400 text-sm font-normal" style="line-height: 2;">
              Segunda a Sexta-feira: 08:30 às 12:00<br />e das 13:30 às 18:00
            </p>
          </div>

          <!-- Redes Sociais -->
          <div class="flex items-center gap-3">
            <a 
              href="#" 
              target="_blank"
              aria-label="Facebook"
              class="w-10 h-10 rounded-full border border-accent/40 bg-bg-darkAlt flex items-center justify-center text-slate-300 hover:text-primary hover:bg-accent hover:border-accent transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <Facebook class="w-4 h-4 fill-current" />
            </a>
            
            <a 
              href="#" 
              target="_blank"
              aria-label="Instagram"
              class="w-10 h-10 rounded-full border border-accent/40 bg-bg-darkAlt flex items-center justify-center text-slate-300 hover:text-primary hover:bg-accent hover:border-accent transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              <Instagram class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Coluna 2: Links Úteis -->
        <div class="lg:col-span-2 lg:col-start-4">
          <div class="flex items-center gap-4 mb-6">
            <h3 class="text-lg font-semibold text-content-inverse font-title shrink-0">
              Links úteis
            </h3>
            <span class="flex-grow h-[1px] bg-border-dark"></span>
          </div>

          <div class="flex flex-col gap-3">
            <NuxtLink 
              v-for="link in [...linksCol1, ...linksCol2]" 
              :key="link.name" 
              :to="link.href"
              class="group text-sm font-normal text-slate-300 hover:text-accent flex items-center gap-1.5 transition-colors duration-300"
              exact-active-class="!text-accent"
            >
              <ChevronRight class="w-3.5 h-3.5 text-accent shrink-0 transform group-hover:translate-x-0.5 transition-transform duration-300" />
              <span>{{ link.name }}</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Coluna 3: Contato -->
        <div class="lg:col-span-4 lg:col-start-6 flex flex-col">
          <div class="flex items-center gap-4 mb-6">
            <h3 class="text-lg font-semibold text-content-inverse font-title shrink-0">
              Contato
            </h3>
            <span class="flex-grow h-[1px] bg-border-dark"></span>
          </div>

          <p class="text-slate-300 text-sm font-normal mb-5">
            Estamos prontos para atendê-lo (a)!
          </p>

          <div class="flex flex-col gap-3.5 text-sm">
            <!-- WhatsApp -->
            <a 
              href="https://api.whatsapp.com/send/?phone=554736223742&text&type=phone_number&app_absent=0" 
              target="_blank"
              class="flex items-center gap-3 hover:text-accent transition-colors duration-300 group"
            >
              <div class="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center bg-bg-darkAlt group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                <!-- SVG WhatsApp oficial -->
                <svg class="w-4 h-4 text-accent fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span class="font-normal">(47) 93622-3742</span>
            </a>

            <!-- E-mail -->
            <a 
              href="mailto:contato@advogadosguimaraes.com.br" 
              class="flex items-center gap-3 hover:text-accent transition-colors duration-300 group"
            >
              <div class="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center bg-bg-darkAlt group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                <Mail class="w-4 h-4 text-accent" />
              </div>
              <span class="font-normal">contato@advogadosguimaraes.com.br</span>
            </a>

            <!-- Endereço -->
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center bg-bg-darkAlt shrink-0 mt-0.5">
                <MapPin class="w-4 h-4 text-accent" />
              </div>
              <span class="font-normal leading-relaxed text-slate-300">
                Rua Francisco De Paula Pereira, 47, Canoinhas - SC
              </span>
            </div>
          </div>
        </div>

        <!-- Coluna 4: Localização / Mini Mapa -->
        <div class="lg:col-span-3 lg:col-start-10 flex flex-col">
          <div class="flex items-center gap-4 mb-6">
            <h3 class="text-lg font-semibold text-content-inverse font-title shrink-0">
              Localização
            </h3>
            <span class="flex-grow h-[1px] bg-border-dark"></span>
          </div>

          <div class="w-full h-44 rounded-lg border border-accent/25 overflow-hidden shadow-lg hover:border-accent/40 transition-all duration-300 group">
            <iframe
              src="https://maps.google.com/maps?q=Rua%20Francisco%20De%20Paula%20Pereira,%2047,%20Canoinhas%20-%20SC&t=&z=16&ie=UTF8&iwloc=&output=embed"
              class="w-full h-full border-0 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <!-- Copyright Sub-Footer -->
      <div class="border-t border-border-dark mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-normal">
        <p>© 2026 Advocacia Guimarães. Todos os direitos reservados.</p>
        <div class="flex gap-4">
          <NuxtLink to="/politica-de-privacidade" class="hover:text-accent transition-colors duration-300">
            Políticas de Privacidade
          </NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>
