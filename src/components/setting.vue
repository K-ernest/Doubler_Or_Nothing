<script setup>
import { ref, onMounted } from "vue";
import settingIcon from "../assets/Icons/icons8-settings.gif";
import { useSound } from "../utils/soundManger";
import "../styles/index.css";

 const { preload, play, setVolume, toggleMute, isMuted } = useSound();

let body = document.body;
let showSettings = ref(false);

const openSettings = () => {
  showSettings.value = true;
  body.style.pointerEvents = "none";

};

const closeSettings = () => {
  body.style.pointerEvents = "visible";
  showSettings.value = false;
};

const onLoadPlayGameSound = () => {
  play('casion')
}

// Preload sounds on mount
onMounted(() => {
preload('casion', '/sounds/casino.mp3', { volume: 0.6 });
preload('lounge', '/sounds/edm-lounge.mp3');
preload('jazzcas', '/sounds/jazz-lounge-piano.mp3');

onLoadPlayGameSound()
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
        <h4 style="margin: 0">Change Music &nbsp; 
          <i class="fa-solid fa-music"></i> 
        </h4>
        <select name="hhh" id="">
          <option value="">sound 1</option>
          <option value="">sound 2</option>
          <option value="">sound 3</option>
        </select>
        <!-- enable/disable music -->
        <section>
          <span>Enable Music &nbsp;</span>
          <input type="checkbox" style="accent-color: #607d8b"/>
        </section>
        <!-- sound/music volume control -->
        <section>
          <span style="font-size: 0.75rem">V+ / V- &nbsp;</span>
          <input type="range" value="100" style="accent-color: #607d8b" />
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
  width: 1.5rem;
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
  width: 70%;
  border-radius: 5px;
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

