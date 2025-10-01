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
      <span class="header-iconText">Inbox</span>
    </section>
    <!-- inbox div -->
    <main style="pointer-events: visible !important">
      <div class="centered" v-if="showInbox">
        <div class="box">
          <!-- inbox Text -->
          <h2>
            INBOX
            <button class="close-button" style="color: #333333;">
              <i class="material-symbols-outlined" @click="closeInbox">
                close
              </i>
            </button>
          </h2>
          <!-- inbox list -->
          <section class="headerIcon-list">
            <ol style="list-style-type: decimal !important" start="1">
              <li v-for="x in 100" :key="x">
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
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  height: 14rem;
  width: 11rem;
  top: 4rem;
}

.box > h2 {
  border-bottom: 2px solid;
  align-items: flex-end;
  position: absolute;
  font-size: 0.9rem;
  color: #333333;
  display: flex;
  gap: 8px;
  top: 0;
}

.headerIcon-list::-webkit-scrollbar-thumb {
  background-color: #333333; 
  border: 3px solid #333333;
  border-radius: 6px;
  } 

</style>

