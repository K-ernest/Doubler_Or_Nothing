<script setup>
import { ref } from "vue";
import "../styles/index.css";

let buttonText = ref('Spin');

const spin = () => {
    buttonText.value ='Spinning ...';

}

</script>


<template>
    <button @click="spin">{{ buttonText }}</button>
</template>

<style scoped>
    button {
       background: black;   
       border-radius: 7px;
       color: white;
       padding: 10px;
       width: 7rem;
    }

</style>