<script setup>
import { ref , onMounted, onUnmounted, computed } from "vue";
import emitter  from "../utils/emitter";
import "../styles/index.css";

const circleSections = ref(['$10B', 'Nothing','$1M', '$500k', '$10M', '$100M', '$1B', '$50B']);

const root = document.documentElement;
let pointerCalculation = ref(0);
let animationState = ref(null);
let isSpinning = ref(false);
let finalRotation = ref(0);


// called when the animation is finished anjle moced
const animationEnded = (angleMoved) => {
  console.log(angleMoved);
  // getting the prize value from the circle
  pointerCalculation.value = ((angleMoved % 360) / 45);
  const prizeValue = ref(circleSections.value[Math.ceil(pointerCalculation.value)]);

  // clearing value
  pointerCalculation.value = 0;
  angleMoved = 0;

  isSpinning.value = false; // setting wheel back to it's original position
  emitter.emit('spin-finished'); // emit an event to the spin button to update it's state
  emitter.emit('player-prize', prizeValue.value); // emit an event to send back the prize player got after spin
};

// method is called when button is pressed
const spinWheel = () => {
  isSpinning.value = true; // enables wheel to spin

  // generate random angle for at which the wheel will spin
  finalRotation.value = Math.ceil(Math.random() * (360 - 90) + 90);
  root.style.setProperty('--final-rotation', `${finalRotation.value}deg`);
  
  // constantly watches for when the wheel finishes to spin
  if (animationState.value) {
   animationState.value.addEventListener('animationend', () => animationEnded(finalRotation.value));
  }
};

onMounted (() => {
  emitter.on('start-spin', spinWheel); // emitted event from spin button when pressed to update wheels state
});

onUnmounted (() => {
  emitter.on('start-spin', spinWheel);
});
</script>


<template>
  <div class="centered">

    <!-- Red Arrow Pointer (triangle at top) -->
    <div class="pointer">
      <div>
        <svg>
          <polygon points="200,15 215,35 185,35" fill="#ff4444" stroke="#cc0000" stroke-width="1"/>
        </svg>
      </div> 
    </div>
    <!-- Wheel -->
    <svg :class="['wheel', {'spinning': isSpinning}]" ref="animationState" width="400" height="400" viewBox="0 0 400 400"  xmlns="http://www.w3.org/2000/svg">
      <!-- Outer shadow/rim -->
      <circle cx="200" cy="200" r="195" fill="#e0e0e0" opacity="0.3"/>
      <circle cx="200" cy="200" r="190" fill="#ffffff" stroke="#cccccc" stroke-width="3"/>

      <!-- Main wheel background -->
      <circle cx="200" cy="200" r="180" fill="#ffffff" stroke="#999999" stroke-width="2"/>

      <!-- Section 1: $10B (Light grey) -->
      <path d="M 200 200 L 200 20 A 180 180 0 0 1 327.28 72.72 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="250" y="70" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">{{ circleSections[0] }}</text>

      <!-- Section 2: Death (Black) -->
      <path d="M 200 200 L 327.28 72.72 A 180 180 0 0 1 380 200 Z" fill="#333333" stroke="#999999" stroke-width="1"/>
      <text x="315" y="165" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">{{ circleSections[1] }}</text>

      <!-- Section 3: $500k (Light grey) -->
      <path d="M 200 200 L 380 200 A 180 180 0 0 1 327.28 327.28 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="330" y="260" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">{{ circleSections[2] }}</text>

      <!-- Section 4: $1M (Light grey) -->
      <path d="M 200 200 L 327.28 327.28 A 180 180 0 0 1 200 380 Z" fill="#00bfa5" stroke="#999999" stroke-width="1"/>
      <text x="250" y="330" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">{{ circleSections[3] }}</text>

      <!-- Section 5: $10M (Light grey) -->
      <path d="M 200 200 L 200 380 A 180 180 0 0 1 72.72 327.28 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="150" y="330" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">{{ circleSections[4] }}</text>

      <!-- Section 6: $100M (Light grey) -->
      <path d="M 200 200 L 72.72 327.28 A 180 180 0 0 1 20 200 Z" fill="#00bfa5" stroke="#999999" stroke-width="1"/>
      <text x="75" y="255" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">{{ circleSections[5] }}</text>

      <!-- Section 7: $1B (Light grey) -->
      <path d="M 200 200 L 20 200 A 180 180 0 0 1 72.72 72.72 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="75" y="155" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">{{ circleSections[6] }}</text>

      <!-- Section 8: $50B (Light grey) -->
      <path d="M 200 200 L 72.72 72.72 A 180 180 0 0 1 200 20 Z" fill="#00bfa5" stroke="#999999" stroke-width="1"/>
      <text x="150" y="70" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">{{ circleSections[7] }}</text>

    </svg>
  </div>
</template>



<style scoped>
.pointer{
  position: relative;
  display: flex;
  left: 1px;
  z-index: 1;
}

.pointer > div{
 position: absolute;
 right: -100px;
}

.wheel  {

  transform-origin: center center;
  transition: transform 4s cubic-bezier(0.23, 1, 0.32, 1);
}

.wheel.spinning {
  animation: spin-wheel 9s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes spin-wheel {
  0% {

    transform: rotate(0deg);
  }

  50% {
    /* transform: rotate(3000deg); */
  }

  100% {
    transform: rotate(var(--final-rotation));
  }
}
</style>