<template>
 <div class="global_lang h-full">
  <img :src="global" alt="globe-icon" />
  <p class="lang">EN</p>
  <img :src="down" alt="arrow-down-icon" />
 </div>
</template>

<script setup>
import global from "@/assets/icons/svg/globe.svg";
import down from "@/assets/icons/svg/down.svg";
</script>

<style lang="scss" scoped>
.global_lang {
 display: flex;
 align-items: center;
 justify-content: center;
 background: rgba(255, 255, 255, 0.08);
 padding: 0 .9375rem;

 .lang {
  font-weight: 600;
  font-size: .6875rem;
  line-height: 1rem;
  color: var(--white);
  padding: 0 .25rem 0 .375rem;
 }
}
</style>