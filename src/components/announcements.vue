<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import "../styles/index.css";
</script>


<template>
  <div class="announcements">
    <article>
      <div>
        <span class="first-announcement"> Player: joe don won $100,000</span>
        <span class="second-announcement"> Player: john wick won $100,000</span>
      </div>
    </article>
  </div>
</template>


<style scoped>
.announcements {
  width: 100%;
  height: 1rem;
  overflow: hidden;
  margin-top: 1rem;
  position: relative;
  flex-direction: row;
  max-block-size: 100%;
}

.announcements article {
  /* animation: move-blink 10s infinite linear; */
  position: absolute;
  font-size: 0.9rem;
  display: flex;
  color: red;
  z-index: 0;
  right: 0;
}

.announcements article div {
  flex-direction: row;
  position: relative;
  display: flex;
  gap: 5rem;
}

@keyframes move-blink {
  0% {
    transform: translateX(calc(0vw + 100%));
  }
  100% {
    transform: translateX(calc(-100vw - 100%));
  }
}
</style>