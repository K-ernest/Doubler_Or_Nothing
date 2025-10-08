<script setup>
import { ref, onMounted, onUnmounted, computed, watchEffect } from "vue";
import { pickRandomAvatar } from '../utils/generateRandomItems'
import googleIconVue from "./googleIcon.vue";
import googleIcon from "./googleIcon.vue";
import emitter from "../utils/emitter";
import "../styles/index.css";

const body = document.body;
const avatarImg = ref('');
const energyValue = ref(100);
const isActive = ref(false);
const crossAnimation = ref(false);
const playersName = ref("Noobee");
const newName = ref(playersName.value);

const editCharacter = () => {
  isActive.value = true;
  body.style.pointerEvents = "none";
};

const editFinished = () => {
  // replacing the old player's name with new players name
  playersName.value = newName.value === "" ? playersName.value : newName.value;
  body.style.pointerEvents = "visible";
  isActive.value = false;
};

// called when the wheel has finished spinning
// to reduce player's energy
const reduceEnergy = () => {
  energyValue.value -= 15;
  energyValue.value = energyValue.value <= 0 ? 0 : energyValue.value;

  //  deactivate spin button button
  if (energyValue.value === 0) {
    emitter.emit("disable-spinButton"); // emit an event to spin button to update it's state
  }
};

watchEffect(() => {
  // to increase player's energy every
  // 3.5s after reduction
  setInterval(() => {
    if (energyValue.value < 100) {
      energyValue.value += 2.5;

      // show '+' for one second
      crossAnimation.value = true;
      setTimeout(() => {
        crossAnimation.value = false;
      }, 1500);

      // re-activate spin button
      // runs ONLY when the energy value is at it's minimum value and is not 0
      if (energyValue.value != 0 && energyValue.value === 2.5) {
        emitter.emit("enable-spinButton"); // emit an event to spin button to update it's state
      }
    }
  }, 30000);
});

onMounted(() => {
  avatarImg.value = pickRandomAvatar();
  emitter.on("spin-finished", reduceEnergy);
});

onUnmounted(() => {
  avatarImg.value = pickRandomAvatar();
  emitter.on("spin-finished", reduceEnergy);
});
</script>


<template>
  <div>
    <!-- avatar icon -->
    <section class="player-info" @click="editCharacter">
      <img class="icons" :src="avatarImg" alt="avatar-icon" />
      <aside>
        <span>{{ playersName }}</span>
        <input
          style="pointer-events: none !important"
          type="range"
          max="100"
          min="0"
          :value="energyValue"
        />
        <span class="cross-animation" v-if="crossAnimation">
          <i class="fa-solid fa-plus"></i>2.5
        </span>
      </aside>
    </section>
    <!-- avatar edit settings div -->
    <main class="centered" v-if="isActive">
      <div class="box" style="pointer-events: visible !important">
        <!-- user avatar icon -->
        <span style="font-size: 0.8rem; color: red">
          click Avatar to change !
        </span>
        <h3 style="margin:0;">Profile</h3>
        <figcaption @click="pickRandomAvatar">
          <img class="icons" style="width:6rem;" :src="avatar" alt="avatar-icon" />
        </figcaption>
        <!-- user input Nickname -->
        <span class="input-span" >
          <input type="text" placeholder="Nickname" v-model="newName" maxlength="8" />
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        <!-- display user Nickname and energy  -->
        <span>
          <i class="fa-solid fa-user"></i>
          Name: {{ newName }}</span>
        <span style="color:rgb(37, 154, 201);">
          <i class="fa-solid fa-bolt"></i> 
          Energy: {{ energyValue }}%
        </span>
        <!-- button to save changes and exit settings -->
        <button @click="editFinished">Save Changes</button>
        <google-icon />
      </div>
    </main>
    <!--  -->
  </div>
</template>


<style scoped>

.centered {
  margin: -2px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  transform: translate(-0.1vw, -96.5vh);
}

.box{
  margin: -2;
  gap: 1.5rem;
  width: 100vw;
  height: 100vh;
  border-radius: 0;
}

.player-info {
  align-items: center;
  display: flex;
  gap: 5px;
}

.player-info > aside {
  height: 1rem;
  display: flex;
  flex-direction: column;
}

.icons {
  border: 4px solid #00bfa5;
  background-color: #333333;
}

.cross-animation {
  left: 10rem;
  position: absolute;
  color: rgb(37, 154, 201);
  animation: fade-up 1.5s ease-out;
}

.fa-pen-to-square {
  position: absolute;
  font-size: 1.3rem;
  right: 0;
}

.input-span {
  position: relative;
  display: flex;
  flex-direction: row;
}

input {
  padding: 2.5px;
  border-width: 0.9px;
  border-radius: 5px;
}

input:focus-visible {
  outline-offset: 0px;
  outline-color: gold;
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

@keyframes fade-up {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>

