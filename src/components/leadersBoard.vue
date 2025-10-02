<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import trophyIcon from "../assets/Icons/icons8-trophy-cup.gif";
import mockAvatar from "../assets/Avatars/cat.png";
import emitter from "../utils/emitter";
import "../styles/index.css";

const RingColor = ['red', '#00bfa5', '#333333'];
const playersRingColor = Array(100).fill().map((_, i) => RingColor[i % RingColor.length])

let body = document.body;
const isActive = ref(false);

const openLeaderboard = () => {
  isActive.value = true;
  body.style.pointerEvents = "none";
};

const closeLeaderboard = () => {
  body.style.pointerEvents = "visible";
  isActive.value = false;
};
</script>


<template>
  <div>
    <!-- leaderboard icon -->
    <span @click="openLeaderboard">
      <img class="icons" :src="trophyIcon" alt="leaderBoard Icon" />
    </span>
    <span class="header-iconText" style="font-size:0.8rem; color:gold;" >
      Leaderboard
    </span>
    <!-- Rankings board -->
    <main style="pointer-events: visible !important;">
      <div class="centered" v-if="isActive">
        <div class="box">
          <!-- Ranking Text -->
          <h2 >
            <span>RANKINGS!
            <i class="material-symbols-outlined">leaderboard</i>
            </span>
            <button class="close-button" style="color: gold;">
              <i class="material-symbols-outlined" @click="closeLeaderboard">close</i>
            </button>
          </h2>
          <!-- Names of people on the Ranking -->
          <section class="headerIcon-list">
            <ol style="list-style-type:decimal!important;" start="1">
              <li v-for="x in 100" :key="x">
                <section>
                  <img :style="{'border-color':playersRingColor[x]}" 
                    class="headerIcon-icon" :src="mockAvatar" alt="players-icon">
                  <span>player {{x}} </span> 
                </section>
              </li>
            </ol>
          </section>
          <!--  -->
        </div>
      </div>
    </main>
    <!--  -->
  </div>
</template>


<style scoped>
.icons {
  border: 4px solid gold;
  background-color: #333333;
}

.centered {
  top: 50%;
  left: 50%;
  z-index: 2;
  position: absolute;
  transform: translate(-50%, -50%);
}

.box{
  box-shadow: 0 10px 10px 6px rgba(0, 0, 0, 0.2), 1px 1px 10px gold;
  justify-content: flex-end;
  align-items: center;
  height: 29rem;
}

.box > h2 > span {
  border-bottom: 2px solid;
  position: absolute;
  color: gold;
  right: 35%;
}

.box > h2 {
  position: relative;
  font-size: 0.9rem;
  width: 100%;
}

.headerIcon-list::-webkit-scrollbar-thumb {
  background-color: gold; 
  border: 3px solid gold;
  border-radius: 6px;
  } 
  

</style>
