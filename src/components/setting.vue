<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import settingIcon from "../assets/Icons/icons8-settings.gif";
import { useSound } from "../utils/soundManger";
import "../styles/index.css";

const { preload, play, stop, setVolume } = useSound();

// list of musics preloaded
const gameMusics = ["casion", "lounge", "jazzcas"];

const volume = ref(0.6);
const body = document.body;
const enableMusic = ref(true);
const showSettings = ref(false);
const currentMusic = ref("casion");

const openSettings = () => {
  showSettings.value = true;
  body.style.pointerEvents = "none";
};

const closeSettings = () => {
  body.style.pointerEvents = "visible";
  showSettings.value = false;
};

// watches when the user changes the game music
// stops the old music playing and start playing
// the new music
watch(currentMusic, (newVal, oldVal) => {
  stop(oldVal);
  play(newVal);
});

// watches when the user increases or decreases
// the game's music volume
watch(volume, (newVal, oldVal) => {
  setVolume(currentMusic.value, volume.value);
});

// watches when the user enables or disables
// game's music sound and pauses or plays it
watch(enableMusic, (newVal, oldVal) => {
  if (oldVal != newVal) {
    stop(currentMusic.value);
  }
  if ((oldVal = newVal)) {
    play(currentMusic.value);
  }
});

onMounted(() => {
  // perloading the musics and reading them for use
  preload("casion", "/sounds/casino.mp3", { volume: volume.value });
  preload("lounge", "/sounds/edm-lounge.mp3");
  preload("jazzcas", "/sounds/jazz-lounge-piano.mp3");

  // add an event thats plays music on user's first click
  const onLoadPlayMusic = () => {
    play("casion");
    window.removeEventListener("click", onLoadPlayMusic);
  };
  window.addEventListener("click", onLoadPlayMusic, { once: true });
});

onUnmounted(() => {
  // un-loading the musics
  preload("casion", "/sounds/casino.mp3", { volume: volume.value });
  preload("lounge", "/sounds/edm-lounge.mp3");
  preload("jazzcas", "/sounds/jazz-lounge-piano.mp3");
});
</script>


<template>
  <div>
    <!-- setting icon -->
    <section class="setting-icon-container" @click="openSettings">
      <img class="icons" :src="settingIcon" alt="settings-icon" />
    </section>
    <!--  settings div -->
    <main class="centered" v-if="showSettings">
      <div class="box" style="pointer-events: visible !important">
        <!-- sounds/music to select -->
        <h4 style="margin: 0">
          Change Music &nbsp;
          <i class="fa-solid fa-music"></i>
        </h4>
        <select id="" v-model="currentMusic">
          <option v-for="musics in gameMusics" :key="musics">
            {{ musics }}
          </option>
        </select>
        <!-- enable/disable music -->
        <section>
          <span>Enable Music: &nbsp;</span>
          <input
            type="checkbox"
            v-model="enableMusic"
            style="accent-color: #607d8b"
          />
          {{ enableMusic ? "Enabled 🔊" : "Disable 🔇" }}
        </section>
        <!-- sound/music volume control -->
        <section>
          <span style="font-size: 0.75rem">V+ / V- &nbsp;</span>
          <input
            type="range"
            style="accent-color: #607d8b"
            v-model="volume"
            min="0"
            max="1"
            step="0.1"
          />
          <span>{{ volume * 100 }}</span>
        </section>
        <!-- button to save changes and exit settings -->
        <button @click="closeSettings">Save Changes</button>
      </div>
    </main>
    <!--  -->
  </div>
</template>


<style scoped>
.setting-icon-container {
  position: absolute;
  bottom: 15%;
}

.icons {
  width: 2rem;
  border: 4px solid #607d8b;
}

.centered {
  left: 50vw;
  top: 50vh;
  position: absolute;
  transform: translate(-50%, -50%);
}

.box {
  gap: 1rem;
  width: 20rem;
  height: 17rem;
}

.box > select {
  border-radius: 5px;
  padding: 0.5rem;
  height: 2.5rem;
  width: 70%;
}

.box > select:hover, select:focus-visible {
  outline-color: #607d8b;
}

button {
  transition: box-shadow 0.2s ease;
  background: #333333;
  border-radius: 20%;
  color: white;
  padding: 10px;
  width: 10rem;
  border: 0;
}

button:hover {
  font: 13px sans-serif;
  transform: translate(3px);
  box-shadow: 0 2px rgb(175, 175, 175);
}
</style>

