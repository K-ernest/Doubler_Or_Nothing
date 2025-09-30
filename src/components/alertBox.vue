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
  body.style.pointerEvents = 'none';
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
        <span v-if="alertText === 'Nothing'">
          <span>
            {{alertText}}
          </span>
          <p>You Won Nothing</p>
        </span>
        <span v-else>
          <span>
           You Won : {{alertText}}
          </span>
          <p>Congratulations</p>
        </span>
        <button @click="closeAlert">Close</button>
      </div>
    </div>
</template>


<style scoped>
.centered {
  top: 50%;
  left: 50%;  
  z-index: 4;
  position: absolute;
  transform: translate(-50%, -50%);
}

button {
  pointer-events: visible !important;
  transition: box-shadow 0.1s ease;
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