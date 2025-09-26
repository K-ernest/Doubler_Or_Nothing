// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// export default defineConfig({
// plugins: [vue()]
// })

import { defineConfig } from 'vite'
import vercel from 'vitejs-plugin-vercel'

export default defineConfig({
    server: {
        port: process.env.PORT,
    },
    plugins: [vercel()]
})