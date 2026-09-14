import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Locale } from '../data/profile'

export type Perspective = 'recruiter' | 'engineer'

function initialLocale(): Locale {
  if (typeof window === 'undefined') return 'es'
  const query = new URLSearchParams(window.location.search).get('lang')
  if (query === 'es' || query === 'en') return query
  const saved = localStorage.getItem('portfolio-locale')
  return saved === 'en' ? 'en' : 'es'
}

function initialPerspective(): Perspective {
  if (typeof window === 'undefined') return 'recruiter'
  const query = new URLSearchParams(window.location.search).get('mode')
  if (query === 'engineer' || query === 'recruiter') return query
  return localStorage.getItem('portfolio-mode') === 'engineer' ? 'engineer' : 'recruiter'
}

export const useUiStore = defineStore('ui', () => {
  const locale = ref<Locale>(initialLocale())
  const perspective = ref<Perspective>(initialPerspective())
  const menuOpen = ref(false)

  function setLocale(next: Locale) {
    locale.value = next
    document.documentElement.lang = next
  }

  function setPerspective(next: Perspective) {
    perspective.value = next
  }

  watch(locale, value => localStorage.setItem('portfolio-locale', value), { immediate: true })
  watch(perspective, value => localStorage.setItem('portfolio-mode', value), { immediate: true })

  return { locale, perspective, menuOpen, setLocale, setPerspective }
})
