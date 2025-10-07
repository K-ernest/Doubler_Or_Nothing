<script setup>
import { ref, onMounted, onUnmounted, computed, watchEffect } from "vue";
import friendsIcon from "../assets/Icons/icons8-friends-48.png";
import playersRingColor from '../utils/playerRingColor';
import mockAvatar from "../assets/Avatars/cat.png";
import emitter from "../utils/emitter";
import "../styles/index.css";

let body = document.body;
let showFriendList = ref(false);

const openFriendList = () => {
  showFriendList.value = true;
  body.style.pointerEvents = "none";
};

const closeFriendList = () => {
  body.style.pointerEvents = "visible";
  showFriendList.value = false;
};
</script>


<template>
  <div>
    <!-- friends icon -->
    <section @click="openFriendList">
      <img class="icons" :src="friendsIcon" alt="friends-icon" />
      <span class="header-iconText" style="font-size:0.8rem; color:#00bfa5;">
        Friends
      </span>
    </section>
    <!-- list of friends div -->
    <main style="pointer-events: visible !important">
      <div class="centered" v-if="showFriendList">
        <div class="box">
          <!-- FRIENDS Text -->
          <h2>
            <span>FRIENDS</span>
            <button class="close-button" style="color: #00bfa5;">
              <i class="material-symbols-outlined" @click="closeFriendList">
                close
              </i>
            </button>
          </h2>
          <!-- search input -->
          <div class="search-input-div">
            <input type="text" maxlength="9" placeholder="Search Friend...">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <!-- Names of people on the friends list -->
          <section class="headerIcon-list">
            <ol style="" start="1">
              <li v-for="x in 100" :key="x">
                <section>
                  <img
                    :style="{'border-color':playersRingColor[x]}" 
                    class="headerIcon-icon"
                    :src="mockAvatar"
                    alt="friends-icon"
                  />
                  <span>player {{ x }} </span>
                  <article><span>online</span></article>
                </section>
              </li>
            </ol>
          </section>
          <!--  -->
        </div>
      </div>
    </main>
    <!--  -->
  </div>
</template>


<style scoped>
.icons {
  border: 4px solid #00bfa5;
}

.box{  
  box-shadow: 0 10px 10px 6px rgba(0, 0, 0, 0.2), 1px 1px 10px #00bfa5;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  height: 14rem;
  width: 15rem;
  top: 4rem;
}

.box > h2 {
  position: relative;
  font-size: 0.9rem;
  width: 100%;
}

.box > h2 > span {
  border-bottom: 2px solid;
  position: absolute;
  color: #00bfa5;
  right: 50%
}

.search-input-div {
  margin: 0;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
}

.search-input-div > input{
  border-color: #c7c7c7;
  border-width: 0.9px;
  border-radius: 5px;
  padding: 2.5px;
  width: 80%;
}

.search-input-div > input:focus-visible {
  outline-offset: 0px;
  outline-color: #00bfa5;
}

.fa-magnifying-glass {
  position: absolute;
  font-size: 0.8rem;
  bottom: 16%;
  right: 11%;
}

.headerIcon-list::-webkit-scrollbar-thumb {
  background-color: #00bfa5; 
  border: 3px solid #00bfa5;
  border-radius: 6px;
  } 

.headerIcon-list > ol {
  margin: 0;
  padding: 0px 0px 0px 10px;
  list-style-type: none !important;
  } 

.headerIcon-list ol li{
  margin: 0px 0px 6px 0px;
  border-radius: 5px; 
  padding: 1px;
}

.headerIcon-list li section:hover {
  background-color: #b3b3b357;
  margin: 6px 0px 6px 0px;
  border-radius: 5px; 
  padding: 6px;
} 
</style>

