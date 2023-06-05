import { fileURLToPath, URL } from 'node:url'
import environmentReplaceFiles from './script/replacements'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import environment from './environments.config'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx({
            babelPlugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }]
            ]
        }),
        environmentReplaceFiles(environment.configurations),
        UnoCSS()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'vdi-class': fileURLToPath(new URL('./src/app/shared/vdi-class', import.meta.url)),
            'modal-class': fileURLToPath(new URL('./src/app/shared/modal-class', import.meta.url)),
            shared: fileURLToPath(new URL('./src/app/shared', import.meta.url))
        }
    }
})
