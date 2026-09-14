import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import { portfolioTheme } from './theme'
import './styles.css'

createApp(App)
  .use(createPinia())
  .use(PrimeVue, {
    ripple: false,
    theme: {
      preset: portfolioTheme,
      options: {
        darkModeSelector: '.portfolio-dark',
        cssLayer: { name: 'primevue', order: 'primevue' },
      },
    },
  })
  .mount('#app')
