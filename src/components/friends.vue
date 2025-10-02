<script setup>
import { ref, onMounted, onUnmounted, computed, watchEffect } from "vue";
import emitter from "../utils/emitter";
import friendsIcon from "../assets/Icons/icons8-friends-48.png";
import mockAvatar from "../assets/Avatars/cat.png";
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
    <section class="player-info" @click="openFriendList">
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
          <!-- Names of people on the friends list -->
          <section class="headerIcon-list">
            <ol style="list-style-type: decimal !important" start="1">
              <li v-for="x in 100" :key="x">
                <section>
                  <img
                    class="headerIcon-icon"
                    :src="mockAvatar"
                    alt="friends-icon"
                  />
                  <span>player {{ x }} </span>
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
  width: 11rem;
  top: 4rem;
}

.box > h2 > span {
  border-bottom: 2px solid;
  position: absolute;
  color: #00bfa5;
  right: 50%
}

.box > h2 {
  position: relative;
  font-size: 0.9rem;
  width: 100%;
}

.headerIcon-list::-webkit-scrollbar-thumb {
  background-color: #00bfa5; 
  border: 3px solid #00bfa5;
  border-radius: 6px;
  } 

</style>

