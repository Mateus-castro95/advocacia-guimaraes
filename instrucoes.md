# PRD COMPLETO — GUIMARÃES ADVOCACIA EMPRESARIAL

## Objetivo do Projeto

Desenvolver um novo site institucional premium para o escritório Guimarães Advocacia Empresarial, substituindo integralmente o site atual.

O projeto deve ser construído com foco em:

* SEO avançado
* Posicionamento orgânico no Google
* Geração de leads
* Autoridade digital
* Conversão de visitantes em clientes
* Performance extrema
* Escalabilidade
* Manutenção simplificada
* Excelente experiência mobile

O site deverá ser preparado para competir pelas primeiras posições do Google para buscas relacionadas a advocacia em Canoinhas e região.

---

# Stack Tecnológica

## Framework

* Nuxt 4

## Estilização

* Tailwind CSS
* CSS modular apenas quando necessário

## Linguagem

* TypeScript

## Renderização

Utilizar SSR (Server Side Rendering) em todas as páginas públicas.

Objetivos:

* Melhor SEO
* Melhor indexação
* Melhor performance
* Melhor Core Web Vitals
* Melhor experiência do usuário

Evitar renderização exclusivamente client-side.

Todo conteúdo principal deve ser renderizado no servidor.

---

# Diretrizes de Desenvolvimento

## Código Limpo

Todo o projeto deve seguir:

* Clean Code
* SOLID quando aplicável
* Responsabilidade única
* Componentização máxima
* Reutilização de código
* Tipagem adequada

---

# IMPORTS EXPLÍCITOS (OBRIGATÓRIO)

NÃO utilizar auto-imports mágicos do Nuxt.

Todo componente deve possuir import explícito.

Exemplo:

```ts
import Header from '~/components/layout/Header.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import ServicesSection from '~/components/home/ServicesSection.vue'
import ContactSection from '~/components/home/ContactSection.vue'
```

Objetivos:

* Melhor manutenção
* Melhor legibilidade
* Melhor rastreabilidade
* Melhor suporte para IA
* Melhor escalabilidade

Esta regra é obrigatória para todo o projeto.

---

# Diretrizes de Performance

O site deve ser extremamente leve.

Priorizar:

* Menor quantidade possível de JavaScript
* Menor quantidade possível de bibliotecas externas
* Imagens otimizadas
* Lazy Loading
* Componentes reutilizáveis
* Carregamento progressivo
* Fontes otimizadas
* HTML semântico

Metas desejadas:

* Lighthouse Performance > 95
* Lighthouse SEO > 95
* Lighthouse Accessibility > 90
* Lighthouse Best Practices > 90

---

# Estrutura do Projeto

## Componentização Obrigatória

Não criar páginas monolíticas.

Estrutura sugerida:

```text
components/

├── layout/
│   ├── Header.vue
│   ├── Footer.vue
│   └── MobileMenu.vue

├── home/
├── about/
├── practice-areas/
├── blog/
├── contact/

├── common/
├── seo/
├── ui/
```

Cada componente deve possuir responsabilidade única.

---

# Estrutura de Navegação

O header deve ser fixo (sticky).

Menu principal:

* Início
* Sobre Nós
* Áreas de Atuação
* Notícias
* Fale Conosco

---

# Dropdown Áreas de Atuação

Ao passar o mouse (desktop) ou clicar (mobile), exibir:

1. Direito Administrativo
2. Direito Ambiental
3. Direito Civil
4. Direito de Família e Sucessões
5. Direito Imobiliário
6. Direito Médico, Odontológico e da Saúde
7. Direito Penal
8. Direito Previdenciário
9. Direito Societário
10. Direito Trabalhista
11. Direito Tributário

Desktop:

* Dropdown elegante
* Animação suave
* Totalmente acessível

Mobile:

* Accordion expansível

---

# Estrutura de Páginas

O projeto possuirá 5 páginas principais.

---

## 1. Início

URL:

```text
/
```

Objetivos:

* Apresentação institucional
* Autoridade
* Conversão
* Direcionamento para áreas de atuação

Seções:

* Hero
* Diferenciais
* Áreas de atuação
* Sobre o escritório
* Equipe
* Estatísticas
* Depoimentos
* FAQ
* CTA
* Contato

---

## 2. Sobre Nós

URL:

```text
/sobre-nos
```

Conteúdo:

* História
* Missão
* Valores
* Diferenciais
* Equipe
* Estrutura do escritório

---

## 3. Áreas de Atuação

URL:

```text
/areas-de-atuacao
```

Esta página funcionará como hub das especialidades.

Exibir 11 cards.

Cada card deve possuir:

* Ícone
* Nome da área
* Breve descrição
* Botão "Saiba Mais"

Ao clicar, direcionar para a página da especialidade.

---

## 4. Notícias

URL:

```text
/noticias
```

Funcionalidades:

* Listagem de artigos
* Busca
* Categorias
* Paginação
* Página individual

Objetivo:

* Estratégia SEO
* Geração de tráfego orgânico
* Autoridade digital

---

## 5. Fale Conosco

URL:

```text
/fale-conosco
```

Conteúdo:

* Formulário
* WhatsApp
* Telefones
* E-mail
* Endereço
* Mapa Google
* Horário de atendimento

---

# Subpáginas das Áreas de Atuação

Cada especialidade terá página própria.

Utilizar URLs otimizadas para SEO local.

---

## Direito Administrativo

```text
/advogado-administrativo-canoinhas-sc
```

## Direito Ambiental

```text
/advogado-ambiental-canoinhas-sc
```

## Direito Civil

```text
/advogado-civil-canoinhas-sc
```

## Direito de Família e Sucessões

```text
/advogado-familia-e-sucessoes-canoinhas-sc
```

## Direito Imobiliário

```text
/advogado-imobiliario-canoinhas-sc
```

## Direito Médico, Odontológico e da Saúde

```text
/advogado-saude-canoinhas-sc
```

## Direito Penal

```text
/advogado-penal-canoinhas-sc
```

## Direito Previdenciário

```text
/advogado-previdenciario-canoinhas-sc
```

## Direito Societário

```text
/advogado-societario-canoinhas-sc
```

## Direito Trabalhista

```text
/advogado-trabalhista-canoinhas-sc
```

## Direito Tributário

```text
/advogado-tributario-canoinhas-sc
```

---

# Estrutura Obrigatória das Páginas de Especialidade

Cada página deverá possuir:

* Hero exclusivo
* Conteúdo aprofundado
* Benefícios
* Casos atendidos
* Diferenciais
* FAQ específico
* CTA para WhatsApp
* CTA para contato
* SEO próprio

Cada página deve possuir conteúdo único.

---

# SEO

SEO é requisito obrigatório.

---

## SEO Técnico

Implementar:

* Sitemap.xml
* Robots.txt
* Canonical URLs
* Open Graph
* Twitter Cards
* Breadcrumbs
* URLs amigáveis
* Meta Tags dinâmicas

---

## SEO On-Page

Cada página deverá possuir:

* Meta Title exclusivo
* Meta Description exclusiva
* H1 único
* Estrutura H2/H3 adequada
* Conteúdo otimizado
* Alt em imagens

---

## SEO Local

O projeto deve priorizar palavras-chave relacionadas a:

* Advogado em Canoinhas
* Escritório de Advocacia em Canoinhas
* Advogado Empresarial em Canoinhas
* Advogado Trabalhista em Canoinhas
* Advogado Previdenciário em Canoinhas
* Advogado Tributário em Canoinhas
* Advogado Imobiliário em Canoinhas
* Advogado de Família em Canoinhas

---

# Schema Markup

Implementar JSON-LD.

Schemas obrigatórios:

* LegalService
* LocalBusiness
* Organization
* FAQPage
* BreadcrumbList

---

# Blog SEO

Estrutura preparada para artigos.

Categorias:

* Trabalhista
* Previdenciário
* Empresarial
* Tributário
* Família
* Imobiliário

Cada artigo deverá permitir:

* Meta Title
* Meta Description
* Open Graph
* Schema Article

---

# Formulários

Todos os formulários devem possuir:

* Validação frontend
* Feedback visual
* Proteção anti-spam
* Integração com WhatsApp

---

# Responsividade

Mobile First.

Compatível com:

* Smartphones
* Tablets
* Notebooks
* Desktop

---

# Acessibilidade

Implementar:

* Navegação por teclado
* Estrutura semântica
* Labels corretas
* Contraste adequado
* Alt em imagens

---

# Quantidade de Páginas

Páginas principais:

* Início
* Sobre Nós
* Áreas de Atuação
* Notícias
* Fale Conosco

Total: 5

Páginas de especialidades:

* 11

Total inicial:

16 páginas estruturadas para SEO.

---

# Resultado Esperado

O resultado final deve ser um site premium, moderno, extremamente rápido, altamente otimizado para SEO, totalmente responsivo e preparado para gerar leads qualificados através do Google.

Prioridades do projeto:

1. SEO
2. Performance
3. Conversão
4. UX
5. Escalabilidade
6. Componentização
7. SSR
8. Código limpo
9. Imports explícitos
10. Facilidade de manutenção
