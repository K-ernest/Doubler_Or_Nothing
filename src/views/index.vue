<script setup>
import { ref } from "vue";
import "../styles/index.css";
import spinButton from '../components/spinButton.vue'
import alertBox from '../components/alertBox.vue'
import spinner from '../components/spinner.vue'
import Header from '../components/header.vue'
</script>


<template>
  <div>
    <Header />
    <spinner />
    <alert-box />
    <spinButton />
  </div> 
</template>



