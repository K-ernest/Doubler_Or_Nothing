<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import Leaderboard from '../components/leadersBoard.vue';
import Wallet from '../components/wallet.vue';
import "../styles/index.css";


</script>


<template>
  <header>
    <!-- wallet -->
    <Wallet />
    <!-- leaderboard -->
    <Leaderboard />
     <!--  -->
  </header>
</template>


<style scoped>
header{
    display: flex;
    margin: 0.3rem;
    padding-top: 0.1rem;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
}

header > div {
    display: flex;
    align-items: center;
    flex-direction: column;
}

</style>