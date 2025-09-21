<script setup>
import { ref } from "vue";
import "../styles/index.css";
</script>


<template>
  <div>
    <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer shadow/rim -->
      <circle cx="200" cy="200" r="195" fill="#e0e0e0" opacity="0.3"/>
      <circle cx="200" cy="200" r="190" fill="#ffffff" stroke="#cccccc" stroke-width="3"/>

      <!-- Main wheel background -->
      <circle cx="200" cy="200" r="180" fill="#ffffff" stroke="#999999" stroke-width="2"/>

      <!-- Section 1: $10B (Light grey) -->
      <path d="M 200 200 L 200 20 A 180 180 0 0 1 327.28 72.72 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="250" y="55" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">$10B</text>
      <text x="250" y="72" font-family="Arial, sans-serif" font-size="11" fill="#666666" text-anchor="middle">22.5°</text>

      <!-- Section 2: Death (Black) -->
      <path d="M 200 200 L 327.28 72.72 A 180 180 0 0 1 380 200 Z" fill="#333333" stroke="#999999" stroke-width="1"/>
      <text x="345" y="125" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">Death</text>
      <text x="345" y="142" font-family="Arial, sans-serif" font-size="11" fill="#cccccc" text-anchor="middle">67.5°</text>

      <!-- Section 3: $500k (Light grey) -->
      <path d="M 200 200 L 380 200 A 180 180 0 0 1 327.28 327.28 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="345" y="275" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">$500k</text>
      <text x="345" y="292" font-family="Arial, sans-serif" font-size="11" fill="#666666" text-anchor="middle">112.5°</text>

      <!-- Section 4: $1M (Light grey) -->
      <path d="M 200 200 L 327.28 327.28 A 180 180 0 0 1 200 380 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="250" y="350" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">$1M</text>
      <text x="250" y="367" font-family="Arial, sans-serif" font-size="11" fill="#666666" text-anchor="middle">157.5°</text>

      <!-- Section 5: $10M (Light grey) -->
      <path d="M 200 200 L 200 380 A 180 180 0 0 1 72.72 327.28 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="150" y="350" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">$10M</text>
      <text x="150" y="367" font-family="Arial, sans-serif" font-size="11" fill="#666666" text-anchor="middle">202.5°</text>

      <!-- Section 6: $100M (Light grey) -->
      <path d="M 200 200 L 72.72 327.28 A 180 180 0 0 1 20 200 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="55" y="275" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">$100M</text>
      <text x="55" y="292" font-family="Arial, sans-serif" font-size="11" fill="#666666" text-anchor="middle">247.5°</text>

      <!-- Section 7: $1B (Light grey) -->
      <path d="M 200 200 L 20 200 A 180 180 0 0 1 72.72 72.72 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="55" y="125" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">$1B</text>
      <text x="55" y="142" font-family="Arial, sans-serif" font-size="11" fill="#666666" text-anchor="middle">292.5°</text>

      <!-- Section 8: $50B (Light grey) -->
      <path d="M 200 200 L 72.72 72.72 A 180 180 0 0 1 200 20 Z" fill="#f0f0f0" stroke="#999999" stroke-width="1"/>
      <text x="150" y="55" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#333333" text-anchor="middle">$50B</text>
      <text x="150" y="72" font-family="Arial, sans-serif" font-size="11" fill="#666666" text-anchor="middle">337.5°</text>

      <!-- Center hub -->
      <!-- <circle cx="200" cy="200" r="20" fill="#ffffff" stroke="#999999" stroke-width="2"/>
      <circle cx="200" cy="200" r="8" fill="#666666"/> -->

      <!-- Red Arrow Pointer (triangle at top) -->
      <polygon points="200,15 215,35 185,35" fill="#ff4444" stroke="#cc0000" stroke-width="1"/>
    </svg>

















   <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer rim -->
      <circle cx="200" cy="200" r="190" fill="#8B4513" stroke="#654321" stroke-width="4"/>

      <!-- Main wheel background -->
      <circle cx="200" cy="200" r="180" fill="#2F4F2F" stroke="#1C3A1C" stroke-width="2"/>

      <!-- Section 1: Red -->
      <path d="M 200 200 L 200 20 A 180 180 0 0 1 329.81 74.64 Z" fill="#DC143C" stroke="#B22222" stroke-width="1"/>
      <text x="245" y="65" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">1</text>

      <!-- Section 2: Black -->
      <path d="M 200 200 L 329.81 74.64 A 180 180 0 0 1 329.81 325.36 Z" fill="#2F2F2F" stroke="#1C1C1C" stroke-width="1"/>
      <text x="315" y="140" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">2</text>

      <!-- Section 3: Red -->
      <path d="M 200 200 L 329.81 325.36 A 180 180 0 0 1 200 380 Z" fill="#DC143C" stroke="#B22222" stroke-width="1"/>
      <text x="280" y="335" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">3</text>

      <!-- Section 4: Black -->
      <path d="M 200 200 L 200 380 A 180 180 0 0 1 70.19 325.36 Z" fill="#2F2F2F" stroke="#1C1C1C" stroke-width="1"/>
      <text x="155" y="350" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">4</text>

      <!-- Section 5: Red -->
      <path d="M 200 200 L 70.19 325.36 A 180 180 0 0 1 70.19 74.64 Z" fill="#DC143C" stroke="#B22222" stroke-width="1"/>
      <text x="85" y="260" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">5</text>

      <!-- Section 6: Black -->
      <path d="M 200 200 L 70.19 74.64 A 180 180 0 0 1 200 20 Z" fill="#2F2F2F" stroke="#1C1C1C" stroke-width="1"/>
      <text x="120" y="90" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">6</text>

      <!-- Section 7: Green (special) -->
      <!-- <circle cx="200" cy="200" r="50" fill="#228B22" stroke="#1C6B1C" stroke-width="2"/>
      <text x="200" y="210" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="white" text-anchor="middle">7</text> -->

      <!-- Center hub -->
      <!-- <circle cx="200" cy="200" r="15" fill="#FFD700" stroke="#FFA500" stroke-width="2"/> -->

      <!-- Red Arrow Pointer (triangle at top) -->
      <polygon points="200,15 215,35 185,35" fill="#FFFFFF" stroke="#CCCCCC" stroke-width="1"/>
    </svg>
  </div>
</template>

