<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import emitter from "../utils/emitter";
import "../styles/index.css";

let buttonText = ref('Spinn..');
let isDisable = ref(false)

// called when button is clicked
const startSpin = () => {
    isDisable.value = true;
    buttonText.value ='Spinning ...';
    emitter.emit('start-spin') // emit an event to the spinner/wheel to enable it spin
        
}

// called when the wheel has finished spinning
// and return button to it's original state
const spinFinished =  () => {
    buttonText.value ='Spinn..';
    isDisable.value = false ;
}

onMounted (() => {
  emitter.on('spin-finished', spinFinished)
  emitter.on('enable-spinButton', () => isDisable.value = false )
  emitter.on('disable-spinButton', () => isDisable.value = true)
})

onUnmounted (() => {
  emitter.on('spin-finished', spinFinished)
})
</script>


<template>
    <div class="centered">
        <button @click="startSpin" :class="['spin-btn', '', {'disable' : isDisable}]">{{ buttonText }}</button>
    </div>
</template>


<style scoped>
.disable{      
    opacity: 0.5;
    pointer-events: none;
    cursor: not-allowed;
    background: rgba(126, 126, 126, 0.74);
}

button {
    transition: box-shadow 0.1s ease;
    background: #333333;   
    border-radius: 20%;    
    color: white;
    padding: 10px;
    width: 21rem;
    z-index: 1px;
    border: 0;
}

button:hover {
    font: 13px sans-serif;
    box-shadow: 0 2px rgb(126, 125, 125);
    transform: translate(3px);
}

/* mobile version */
@media only screen and (max-width: 768px) {

  button {
    width: 16rem;
  }

}
</style>




