<script setup>
import { ref } from "vue";
import "../styles/index.css";
import spinButton from '../components/spinButton.vue'
import spinner from '../components/spinner.vue'


//  requestAnimationFrame(() => {
//     isActive.value = true;
//   })
</script>


<template>
  <div>
    <spinner />
    <spinButton />
  </div> 
</template>



