<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import walletIcon from "../assets/Icons/icons8-wallet-48.png";
import emitter from "../utils/emitter";
import "../styles/index.css";

const prizeMoney = ref({
  $1k: 1000,
  Nothing: 0,
  $50k: 50000,
  $10k: 10000,
  $20k: 20000,
  $2k: 2000,
  $100k: 100000,
  $15k: 15000,
});

let show_WalletBalance = ref(false);
let initialBalance = ref(0);
let walletBalance = ref(0);

// called when the wheel has finished spinning
// to update the player's wallet with the player's prize
const playerPrize = (prize) => {
  initialBalance.value = prizeMoney.value[prize];
  walletBalance.value = walletBalance.value + initialBalance.value;
  show_WalletBalance.value = true

  // Hide balance after 3s of showing it
  setTimeout(() => {
    show_WalletBalance.value = false
  }, 3000);

  console.log(initialBalance.value);

};

onMounted(() => {
  emitter.on("player-prize", playerPrize);
});

onUnmounted(() => {
  emitter.on("player-prize", playerPrize);
});
</script>


<template>
  <!-- wallet -->
  <section
    class="wallet-section"
    @mouseenter="show_WalletBalance = true"
    @mouseleave="show_WalletBalance = false"
  >
    <img class="icons" :src="walletIcon" alt="" />
    <span :class="{ 'hover': show_WalletBalance }">
      ${{ walletBalance.toLocaleString() }}
    </span>
  </section>
  <!--  -->
</template>


<style scoped>
.icons {
  width: 2.5rem;
  border-radius: 50%;
  transition: box-shadow 0.3s ease;
  border: 4px solid #f57c00;
}

.wallet-section {
  display: flex;
  position: relative;
  flex-direction: column;
}

.wallet-section > span {
  display: none;
}

.wallet-section > span.hover {
  box-shadow: 1px 1px 10px #f57c00;
  position: absolute;
  border-radius: 5px;
  font-size: 0.8rem;
  color: green;
  display: block;
  padding: 3px;
  width: 100%;
  top: 3.5rem;
}
</style>