<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import trophyIcon from "../assets/Icons/icons8-trophy-cup.gif";
import playersRingColor from '../utils/playerRingColor';
import mockAvatar from "../assets/Avatars/cat.png";
import emitter from "../utils/emitter";
import "../styles/index.css";

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
          <h2 style="font-size:1.2rem!important;">
            <span>
              RANKINGS!
              <i class="material-symbols-outlined">leaderboard</i>
            </span>
            <button class="close-button" style="color: gold;">
              <i class="material-symbols-outlined" @click="closeLeaderboard">close</i>
            </button>
          </h2>
          <!-- Names of people on the Ranking -->
          <section class="headerIcon-list">
            <ol >
              <!-- Rank details -->
              <li class="rank-details" >
                <section style="font-size: 0.9rem;">
                  <span>#</span>
                  <span>Avatar</span>
                  <span>Player </span> 
                  <span>Balance</span>
                </section>
              </li>
              <!-- Rank details -->
              <li v-for="x in 100" :key="x">
                <section>
                  <span>&nbsp; {{x}}</span>
                  <img :style="{'border-color':playersRingColor[x]}" 
                    class="headerIcon-icon" :src="mockAvatar" alt="players-icon">
                  <span>player</span> 
                  <span>{{ x }}</span>
                </section>
              </li>
              <!--  -->
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

.headerIcon-list > ol {
  margin: 0;
  padding: 16px 0px 0px 10px;
  list-style-type: none !important;
} 

.headerIcon-list ol li{
  margin: 0px 0px 6px 0px;
  border-radius: 5px; 
  padding: 1px;
}
 
.headerIcon-list ol li:nth-child(2) {
  background-color: rgba(255, 226, 62, 0.493);
  margin: 6px 0px 6px 0px;
}

.headerIcon-list ol li:nth-child(3) {
  background-color: #b3b3b3ab;
}

.headerIcon-list ol li:nth-child(4) {
  background-color: rgba(136, 117, 11, 0.521);
}

.headerIcon-list ol li:nth-child(n+5):nth-child(-n+110) {
  background-color: #ad9d9d3a;
}
</style>

