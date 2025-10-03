import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { splashScreen } from 'vite-plugin-splash-screen'

export default defineConfig({
plugins: [
    vue(),
    splashScreen({
        // splashBg: "#000000",
        logoSrc: 'logo.svg',
        minDurationMs: 3000,
        loaderType: "dots",
        loaderBg: "gold",
        logoHeight: 0,
        logoWidth: 0,
    })
]
})