<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import trophyIcon from "../assets/Icons/icons8-trophy-cup.gif";
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
      <img class="icons leaderboard-icon" :src="trophyIcon" alt="leaderBoard Icon" />
    </span>
    <span style="font-size: 0.8rem">Leaderboard</span>
    <!-- Rankings board -->
    <aside style="pointer-events: visible !important;">
      <div class="centered" v-if="isActive">
        <div class="box">
          <!-- Ranking Text -->
          <h2 >
            RANKINGS!
            <i class="material-symbols-outlined">leaderboard</i>
            <button class="closeButton">
              <i class="material-symbols-outlined" @click="closeLeaderboard">close</i>
            </button>
          </h2>
          <!-- Names of people on the Ranking -->
          <section class="ranking-list">
            <ol>
              <li v-for="x in 100" :key="x">player {{x}} </li>
            </ol>
          </section>
        </div>
      </div>
    </aside>
    <!--  -->
  </div>
</template>


<style scoped>
.leaderboard-icon {
  width: 2.5rem;
  border-radius: 50%;
  border: 4px solid gold;
  background-color: #333333;
  transition: box-shadow 0.3s ease;
}

.leaderboard-icon:hover {
  box-shadow: 0 0 20px rgb(155, 153, 153), 0 0 40px rgb(155, 153, 153),
    0 0 60px rgb(155, 153, 153);
  transform: translate(3px);
}

.centered {
  top: 50%;
  left: 50%;
  z-index: 2;
  position: absolute;
  transform: translate(-50%, -50%);
}

.box{
  justify-content: flex-end;
  align-items: center;
  height: 29rem;
}

.box > h2 {
  border-bottom: 2px solid;
  align-items: flex-end;
  position: absolute;
  font-size: 1.3rem;
  color: gold;
  display: flex;
  gap: 8px;
  top: 2%;
}

button {
  pointer-events: visible !important;
  transition: transform 0.1s ease;
  background: inherit;       
  position: absolute;
  color: gold;
  left: 110%;
  border: 0;
}

button:hover {
  font: 13px sans-serif;
  transform: translate(2.5px);
}

.ranking-list{
  scroll-behavior: smooth;
  flex-direction: column;
  overflow-y: auto;
  display: flex;
  margin: 5px;
  height: 85%;
  width: 100%;
}

.ranking-list::-webkit-scrollbar {
  width : 10px;
 }

.ranking-list::-webkit-scrollbar-thumb {
  background-color: gold; 
  border: 3px solid gold;
  border-radius: 6px;
 } 

</style>
