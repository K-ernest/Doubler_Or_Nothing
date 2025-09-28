<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import trophyIcon from "../assets/Icons/icons8-trophy-cup.gif";
import emitter from "../utils/emitter";
import "../styles/index.css";

let body = document.body;
const isActive = ref(false);

const openLeaderboard = () => {
  isActive.value = true;
  // body.style.pointerEvents = "none";
};
</script>


<template>
  <div>
    <!-- leaderboard icon -->
    <span @click="openLeaderboard">
      <img class="icons leaderboardIcon"  :src="trophyIcon" alt="" />
    </span>
    <span style="font-size: 0.8rem">Leaderboard</span>
    <!-- Rankings board -->
    <div class="centered" v-if="isActive">
      <div class="box">
        <span style="font-size: 0.8rem; color: gold; align-self:bottom;">
          RANKINGS!
          <i class="material-symbols-outlined">
          contract
        </i>
          <i class="material-symbols-outlined">leaderboard</i>
          <i class="fa-solid fa-pen-to-square"></i>
        </span>
        
      </div>
    </div>
    <!--  -->
  </div>
</template>


<style scoped>
.leaderboardIcon {
  width: 2.5rem;
  border-radius: 50%;
  border: 4px solid gold;
  background-color: #333333;
  transition: box-shadow 0.3s ease;
}

.leaderboardIcon:hover {
  box-shadow: 0 0 20px rgb(155, 153, 153), 0 0 40px rgb(155, 153, 153),
    0 0 60px rgb(155, 153, 153);
  transform: translate(3px);
}

.centered {
  left: 50%;
  bottom: 15%;
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
