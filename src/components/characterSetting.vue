<script setup>
import { ref, onMounted, onUnmounted, computed, watchEffect} from "vue";
import emitter from "../utils/emitter";
import * as allAvatars from "../assets/Avatars/allAvatars";
import "../styles/index.css";

let avatar = ref("");
let body = document.body;
const isActive = ref(false);
let progressValue = ref(100);
let crossAnimation = ref(false);
const playersName = ref("Noobee");
let newName = ref(playersName.value);

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

// method for getting random avatars
const pickRandomAvatar = () => {
  let keys = Object.keys(allAvatars);
  let randomAvatar = keys[Math.floor(Math.random() * keys.length)];
  avatar.value = allAvatars[randomAvatar];
};

// called when the wheel has finished spinning
// to reduce player's energy
const reduceEnergy = () => {
  progressValue.value -= 15;
  progressValue.value = progressValue.value <= 0? 0: progressValue.value;

  //  deactivate spin button button
  if (progressValue.value === 0) {
    emitter.emit("disable-spinButton"); // emit an event to spin button to update it's state
  }
};


watchEffect(() => {
  // to increase player's energy every
  // 3.5s after reduction
  setInterval(() => {
    if (progressValue.value < 100) {
      progressValue.value += 2.5;

      // show '+' for one second
      crossAnimation.value = true;
      setTimeout(() => {
        crossAnimation.value = false;
      }, 1500)
     
      // re-activate spin button
      // runs ONLY when the progress value is at it's minimum value and is not 0
      if (progressValue.value != 0 && progressValue.value === 2.5) {
        emitter.emit("enable-spinButton"); // emit an event to spin button to update it's state
      }
    }
  }, 30000);
});


onMounted(() => {
  pickRandomAvatar();
  emitter.on("spin-finished", reduceEnergy);
});

onUnmounted(() => {
  emitter.on("spin-finished", reduceEnergy);
});
</script>


<template>
  <div>
    <!-- avatar icon -->
    <section class="player-info" @click="editCharacter">
      <img class="icons" :src="avatar" alt="avatar-icon" />
      <aside>
        <span>{{ playersName }}</span>
        <input
          style="pointer-events: none !important"
          type="range"
          max="100"
          min="0"
          :value="progressValue"
        />
        <span class="cross-animation" v-if="crossAnimation">
          <i class="fa-solid fa-plus"></i>2.5
        </span>
      </aside>
    </section>
    <!-- avatar edit settings div -->
    <main class="centered" v-if="isActive">
      <div class="box">
        <span style="font-size: 0.8rem; color: red">
          click Avatar to change !
        </span>
        <figcaption
          @click="pickRandomAvatar"
          style="pointer-events: visible !important"
        >
          <img class="icons" :src="avatar" alt="avatar-icon" />
        </figcaption>
        <span class="input-span">
          <input type="text" v-model="newName" maxlength="8"/>
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        <span>Name: {{ newName }}</span>
        <button @click="editFinished">Save Changes</button>
      </div>
    </main>
    <!--  -->
  </div>
</template>


<style scoped>
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
  right: 15%;
}

.input-span {
  display: flex;
  flex-direction: row;
}

input {
  pointer-events: visible !important;
  padding: 2.5px;
  border-width: 0.9px;
  border-radius: 5px;
}

input:focus-visible {
  outline-offset: 0px;
  outline-color: gold;
}

.centered {
  left: 50%;
  bottom: 190%;
  position: absolute;
  transform: translate(-50%, -50%);
}

button {
  pointer-events: visible !important;
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
    transform: translateY(-20px)
  }
}
</style>

