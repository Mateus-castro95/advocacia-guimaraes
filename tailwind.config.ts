import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Cores base solicitadas
        brand: {
          navy: '#07131B',     // Azul petróleo muito escuro
          gold: '#C9A86A',     // Dourado discreto
          white: '#FFFFFF',    // Branco
        },
        // Combinações e Cores Semânticas
        primary: {
          DEFAULT: '#07131B',  // Azul petróleo muito escuro para elementos principais/fundos
          light: '#142735',    // Variação do azul petróleo mais claro para hovers/elementos de apoio
          dark: '#03080b',     // Variação ultra escura do azul petróleo
        },
        accent: {
          DEFAULT: '#C9A86A',  // Dourado discreto para destaques, links e botões primários
          light: '#DBC395',    // Variação suave do dourado
          dark: '#A68347',     // Variação mais escura do dourado
        },
        bg: {
          light: '#FFFFFF',    // Fundo principal claro
          alt: '#F8FAFC',      // Fundo secundário claro
          dark: '#07131B',     // Fundo principal escuro
          darkAlt: '#0F212D',  // Fundo secundário escuro (para cards/seções)
        },
        content: {
          primary: '#07131B',  // Texto principal em fundo claro
          secondary: '#475569',// Texto de apoio em fundo claro
          muted: '#94A3B8',    // Texto desabilitado/rodapé
          inverse: '#FFFFFF',  // Texto principal em fundo escuro
          gold: '#C9A86A',     // Texto dourado para títulos e destaques
        },
        border: {
          light: '#E2E8F0',    // Borda clara
          dark: '#1E2E3A',     // Borda escura
          gold: '#C9A86A',     // Borda dourada
        }
      },
      fontFamily: {
        title: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        // Pesos recomendados no PRD
        bodyNormal: '400',
        bodyMedium: '500',
        titleMedium: '500',
        titleSemibold: '600',
      }
    },
  },
  plugins: [],
}
