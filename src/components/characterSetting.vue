<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import emitter from "../utils/emitter";
import * as allAvatars from "../assets/Avatars/allAvatars";
import "../styles/index.css";

let avatar = ref("");
let body = document.body;
const isActive = ref(false);
const playersName = ref("noobee");
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

// method for gettin random avatars
const pickRandomAvatar = () => {
  let keys = Object.keys(allAvatars);
  let randomAvatar = keys[Math.floor(Math.random() * keys.length)];
  avatar.value = allAvatars[randomAvatar];
};

onMounted(() => {
  pickRandomAvatar();
});
</script>


<template>
  <div>
    <!-- avatar icon -->
    <span @click="editCharacter">
      <img class="avatarIcon mainAvatarIcon" :src="avatar" alt="avatar-icon" />
      <span >{{ playersName }}</span>
    </span>
    <!-- avatar edit settings div -->
    <div class="centered" v-if="isActive">
      <div class="box">
        <span style="font-size: 0.8rem; color: red"
          >click Avatar to change !</span
        >
        <span
          @click="pickRandomAvatar"
          style="pointer-events: visible !important"
        >
          <img class="avatarIcon" :src="avatar" alt="avatar-icon" />
        </span>
        <input type="" v-model="newName" />
        <span>Name: {{ newName }}</span>
        <button @click="editFinished">Save Changes</button>
      </div>
    </div>
    <!--  -->
  </div>
</template>


<style scoped>
.avatarIcon {
  width: 2.5rem;
  border-radius: 50%;
  border: 4px solid #00bfa5;
  background-color: #333333;
  transition: box-shadow 0.3s ease;
}

.avatarIcon:hover {
  box-shadow: 0 0 20px rgb(155, 153, 153), 0 0 40px rgb(155, 153, 153),
    0 0 60px rgb(155, 153, 153);
  transform: translate(3px);
}

input {
  pointer-events: visible !important;
  border-width: 0.9px;
  border-radius: 5px;
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
</style>

