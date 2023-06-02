import { fileURLToPath, URL } from 'node:url'
import replaceFiles from './script/replacements'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import environment from './environments.config'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), replaceFiles(environment.configurations)],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vdi-class': fileURLToPath(new URL('./src/app/shared/vdi-class', import.meta.url)),
      shared: fileURLToPath(new URL('./src/app/shared', import.meta.url))
    }
  }
})
