// src/composables/useSound.js
import { ref, watch } from 'vue';

const sounds = {};

export function useSound() {
    const preload = (name, path, options = {}) => {
        const audio = new Audio(path);
        audio.volume = options.volume ?? 1;
        audio.loop = options.loop ?? false;
        sounds[name] = audio;
    };

    const play = (name) => {
        if (sounds[name]) {
            sounds[name].currentTime = 0;
            sounds[name].play();
        }
    };

    const stop = (name) => {
        if (sounds[name]) {
            sounds[name].pause();
            sounds[name].currentTime = 0;
        }
    }
    const setVolume = (name, volume) => {
        if (sounds[name]) sounds[name].volume = volume;
    };

    return {
        stop,
        play,
        sounds,
        preload,
        setVolume,
    };
}

