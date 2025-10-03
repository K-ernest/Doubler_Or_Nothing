<script setup>
import { ref } from "vue";
import "../styles/index.css";
import announcements from '../components/announcements.vue'
import spinButton from '../components/spinButton.vue'
import alertBox from '../components/alertBox.vue'
import spinner from '../components/spinner.vue'
import setting from '../components/setting.vue'
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
</script>


<template>
  <div>
    <Header />
    <announcements />
    <spinner />
    <alert-box />
    <spinButton />
    <setting />
    <Footer />
  </div> 
</template>



