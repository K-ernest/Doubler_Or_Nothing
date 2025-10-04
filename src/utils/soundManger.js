// src/composables/useSound.js
import { ref } from 'vue';

const sounds = {};
const isMuted = ref(false);

export function useSound() {
    const preload = (name, path, options = {}) => {
        const audio = new Audio(path);
        audio.volume = options.volume ?? 1;
        audio.loop = options.loop ?? false;
        sounds[name] = audio;
    };

    const play = (name) => {
        if (isMuted.value || !sounds[name]) return;
        sounds[name].currentTime = 0;
        sounds[name].play();
    };

    const setVolume = (name, volume) => {
        if (sounds[name]) sounds[name].volume = volume;
    };

    const toggleMute = () => {
        isMuted.value = !isMuted.value;
    };

    return {
        preload,
        play,
        setVolume,
        toggleMute,
        isMuted,
    };
}












// <script setup>
// import { useSound } from '@/composables/useSound';

// const {
// preload,
// play,
// setVolume,
// toggleMute,
// isMuted,
// } = useSound();

// // Preload sounds on mount
// onMounted(() => {
// preload('spin', '/sounds/spin.mp3', { volume: 0.7 });
// preload('win', '/sounds/win.mp3');
// preload('click', '/sounds/click.mp3');
// });

// const onSpin = () => play('spin');
// const onWin = () => play('win');
// const onClick = () => play('click');
// </script>

// <template>
// <div>
// <button @click="onSpin">Spin 🎡</button>
// <button @click="onWin">Win 💰</button>
// <button @click="onClick">Click 🔘</button>
// <button @click="toggleMute">
// {{ isMuted ? 'Unmute 🔊' : 'Mute 🔇' }}
// </button>
// </div>
// </template>