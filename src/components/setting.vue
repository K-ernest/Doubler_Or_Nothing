<script setup>
import { ref } from "vue";
import settingIcon from "../assets/Icons/icons8-settings.gif";
import "../styles/index.css";

let body = document.body;
let showSettings = ref(false);

const openSettings = () => {
  showSettings.value = true;
  // body.style.pointerEvents = "none";
};

const closeSettings = () => {
  body.style.pointerEvents = "visible";
  showSettings.value = false;
};
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
        <select name="hhh" id="">jjjjj</select>
        <input type="range" value="100">
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
  gap: 0.6rem;
  width: 20rem;
  height: 17rem;
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

