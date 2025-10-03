import { createApp } from 'vue';
import App from './App.vue';
import { hideSplashScreen } from "vite-plugin-splash-screen/runtime";

const app = createApp(App)

app.mount('#app')

// Hide splash screen after mount
hideSplashScreen() 