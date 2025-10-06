<script setup>
import { ref, onMounted, onUnmounted, computed, watchEffect} from "vue";
import emitter from "../utils/emitter";
import inboxIcon from "../assets/Icons/icons8-notification-48.png";
import "../styles/index.css";

let body = document.body;
let showInbox = ref(false);

const openInbox = () => {
  showInbox.value = true;
  body.style.pointerEvents = "none";
};

const closeInbox = () => {
  body.style.pointerEvents = "visible";
  showInbox.value = false;
};
</script>


<template>
  <div>
    <!-- inbox icon -->
    <section @click="openInbox">
      <img class="icons" :src="inboxIcon" alt="inbox-icon" />
      <span class="header-iconText" style="font-size:0.8rem; color:#333333;">
        Inbox
      </span>
    </section>
    <!-- inbox div -->
    <main style="pointer-events: visible !important">
      <div class="centered" v-if="showInbox">
        <div class="box">
          <!-- inbox Text -->
          <h2>
            <span>INBOX</span>
            <button class="close-button" style="color: #333333;">
              <i class="material-symbols-outlined" @click="closeInbox">
                close
              </i>
            </button>
          </h2>
          <!-- inbox list -->
          <section class="headerIcon-list">
            <ol style="list-style-type: none !important" start="1">
              <li v-for="x in 100" :key="x" style="">
                <section>
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
  border: 4px solid #333333;
}

.box{  
  box-shadow: 0 10px 10px 6px rgba(0, 0, 0, 0.2), 1px 1px 10px #333333;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  height: 11rem;
  width: 14.5rem;
  top: 4rem;
}

.box > h2 > span {
  border-bottom: 2px solid;
  position: absolute;
  color: #333333;
  right: 50%
}

.box > h2 {
  position: relative;
  font-size: 0.9rem;
  width: 100%;
}

.headerIcon-list::-webkit-scrollbar-thumb {
  background-color: #333333; 
  border: 3px solid #333333;
  border-radius: 6px;
  } 

.headerIcon-list > ol {
  margin: 0;
  padding: 0px 0px 0px 10px;
  list-style-type: none !important;
} 

.headerIcon-list li section {
  background-color: #b3b3b391;
  margin: 6px 0px 6px 0px;
  border-radius: 5px; 
  padding: 10px;
} 

.headerIcon-list li section:hover {
  background-color: #b3b3b357;
} 
</style>

