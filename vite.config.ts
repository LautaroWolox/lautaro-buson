import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  const base = env.VITE_BASE_PATH || '/'
  return {
    plugins: [vue()],
    base,
    build: { target: 'es2022', sourcemap: false },
  }
})
