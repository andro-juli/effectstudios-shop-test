<template>
 <div class="navbar_chat h-full">
  <img :src="whatsapp" alt="whatsapp-icon" />
  <p class="chat-text font-bold">Chat <span class="hide-on-mobile">with us</span></p>
 </div>
</template>

<script setup>
import whatsapp from "@/assets/icons/svg/whatsapp.svg";
</script>

<style lang="scss" scoped>
.navbar_chat {
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 background: var(--green);
 padding: 0 15px;
 gap: .5rem;
 z-index: 5;

 .chat-text {
  font-size: 11px;
  line-height: 16px;
  letter-spacing: -0.04em;
 }

 .hide-on-mobile {
  @media (max-width: 768px) {
   display: none;
  }
 }
}
</style>