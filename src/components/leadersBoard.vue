<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import trophyIcon from '../assets/Icons/icons8-trophy-cup.gif';
import emitter from "../utils/emitter";
import "../styles/index.css";
</script>


<template>
  <div>
    <img  class="icons" :src="trophyIcon" alt="">
    <span>Leaderboard</span>
  </div>
</template>
