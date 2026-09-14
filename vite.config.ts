import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const base = env.VITE_BASE_PATH || '/'
  const siteUrl = (env.VITE_SITE_URL || 'https://lautarowolox.github.io/lautaro-buson/').replace(/\/?$/, '/')
  return {
    plugins: [
      vue(),
      {
        name: 'portfolio-seo-url',
        transformIndexHtml(html) {
          return html.replaceAll('__SITE_URL__', siteUrl)
        },
      },
    ],
    base,
    build: { target: 'es2022', sourcemap: false },
  }
})
