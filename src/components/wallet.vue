<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import walletIcon from '../assets/Icons/icons8-wallet-48.png';
import emitter from "../utils/emitter";
import "../styles/index.css";

const prizeMoney = ref({"$10B": 10000000000,"Nothing": 0, "$1M": 1000000, "$500k": 500000, "$10M": 10000000,
    "$100M": 100000000, "$1B": 1000000000, "$50B": 50000000000});
  
let initialBalance = ref(0);
let walletBalance = ref(0);
let totalBalance = ref(0);

// called when the wheel has finished spinning
// to update the player's wallet with the player's prize
const playerPrize =  (prize) => {
    initialBalance.value = prizeMoney.value[prize];
    walletBalance.value = walletBalance.value + initialBalance.value;
    console.log( initialBalance.value );

}

onMounted (() => {
  emitter.on('player-prize', playerPrize);
})

onUnmounted (() => {
  emitter.on('player-prize', playerPrize);
})

</script>


<template>
  <!-- wallet -->
  <div>
    <img  class="icons" :src="walletIcon" alt="">
    <span style=""><span>${{ walletBalance.toLocaleString() }}</span></span>
  </div>
  <!--  -->
</template>


<style scoped>
div > span{
  /* box-shadow: 0 2px rgb(141, 140, 140); */
  /* background: #33333373; */
  border-radius: 5px;
  font-size: 0.8rem;
  color: green; 
  padding: 3px;
  width: 100%;
}

</style>