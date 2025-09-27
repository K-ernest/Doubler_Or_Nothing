<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import characterSetting from '../components/characterSetting.vue';
// import logo from '/logo.png'
import "../styles/index.css";

</script>


<template>
  <footer>
    <!-- character setting -->
    <div>
            <character-setting />

    </div>
    <!-- logo -->
    <img class="logo" src="/logo.png" alt="">
     <!--  -->
  </footer>
</template>


<style scoped>
.logo{
    width: 4rem;
}

footer{
    bottom: 0;
    width: 100%;
    display: flex;
    margin: 0.3rem;
    position: fixed;
    padding-top: 0.1rem;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-between;
}

</style>