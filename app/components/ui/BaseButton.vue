<script setup lang="ts">
import { computed } from 'vue'
import { NuxtLink } from '#components'

const props = defineProps({
  to: {
    type: String,
    default: undefined
  },
  href: {
    type: String,
    default: undefined
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary', 'outline'].includes(value)
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  }
})

const isExternal = computed(() => {
  return props.href && (props.href.startsWith('http') || props.href.startsWith('wa.me'))
})

const componentType = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return 'button'
})

const buttonClasses = computed(() => {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 font-body font-bodyMedium text-sm tracking-wide rounded-md transition-smooth disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants: Record<string, string> = {
    primary: 'bg-accent text-primary hover:bg-accent-light',
    secondary: 'bg-brand-navy text-content-inverse hover:bg-primary-light',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-primary'
  }

  return `${base} ${variants[props.variant]}`
})
</script>

<template>
  <component
    :is="componentType"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="buttonClasses"
  >
    <slot />
  </component>
</template>
