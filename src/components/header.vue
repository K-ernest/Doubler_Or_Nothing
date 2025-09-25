<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import trophy from '../assets/Icons/icons8-trophy-cup.gif';
import wallet from '../assets/Icons/icons8-wallet-48.png';
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
  <header>
    <!-- wallet -->
    <div>
        <img  class="icons" :src="wallet" alt="">
        <span> ${{ walletBalance }} </span>
    </div>
    <!-- leaderboard -->
    <div>
        <img class="icons" :src="trophy" alt="">
        <span>Leaderboard</span>
    </div>
    <!--  -->
  </header>
</template>


<style scoped>
header{
    display: flex;
    padding: 10px;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
}

header > div {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.icons{
    width: 2.5rem;
}

</style>