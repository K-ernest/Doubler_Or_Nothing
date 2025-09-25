<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import emitter from "../utils/emitter";
import "../styles/index.css";
import coin from '../assets/Icons/icons8-coin.gif'

let body = document.body
let alertText = ref('');
let showAlert = ref(false);


// called when the wheel has finished spinning
// and to show player's prize
const playerPrize =  (prize) => {
  // body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  body.style.pointerEvents = 'none';
  // body.style.opacity = '0.3';
  // body.style.zIndex = '2';
  alertText.value = prize;
  showAlert.value = true;
}

const closeAlert = () => {
  body.style.pointerEvents = 'visible';
  body.style.opacity = '1';
  showAlert.value = false;
}

onMounted (() => {
  emitter.on('player-prize', playerPrize);
})

onUnmounted (() => {
  emitter.on('player-prize', playerPrize);
})
</script>


<template>
    <div class="centered" v-if="showAlert" > 
      <div class="box" style="opacity: 8;">
        <img :src="coin" alt="">
        <span>
          {{alertText}}
        </span>
        <span v-if="alertText === 'Nothing'">
          You Won Nothing 
        </span>
        <span v-else>
          Congratulations
        </span>
        <button @click="closeAlert">Close</button>
      </div>
    </div>
</template>


<style scoped>
.centered {
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.box {
  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);  
  box-shadow: inset hsl(224, 23%, 55%);
  background-color: rgb(255, 255, 255);
  justify-content: center;
  flex-direction: column;
  opacity: 8 !important;
  border-radius: 10px;
  align-items: center;
  display: flex;
  height: 14rem;
  width: 16rem;
  z-index: 3;
  gap: 16px;
}

button {
  pointer-events: visible !important;
  background: #333333;   
  border-radius: 7px;    
  color: white;
  padding: 10px;
  width: 10rem;
  border: 0;
}

button:hover {
  font: 13px sans-serif;
  box-shadow: 0 2px #666;
  transform: translate(3px);
}

</style>