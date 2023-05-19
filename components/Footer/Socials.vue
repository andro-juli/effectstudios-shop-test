<template>
 <div class="footer_socials">
  <p class="footer-title font-bold">Follow Us</p>
  <div class="flex gap-4">
   <div class="footer_icon--wrap">
    <img :src="facebook" alt="facebook" />
   </div>
   <div class="footer_icon--wrap">
    <img :src="twitter" alt="facebook" />
   </div>
   <div class="footer_icon--wrap">
    <img :src="ig" alt="facebook" />
   </div>
  </div>
 </div>
</template>

<script setup>
import facebook from "@/assets/icons/svg/facebook-f.svg";
import twitter from "@/assets/icons/svg/twitter.svg";
import ig from "@/assets/icons/svg/instagram.svg";
</script>

<style lang="scss" scoped>
.footer_icon--wrap {
 background: var(--black);
 width: 32px;
 height: 32px;
 display: flex;
 align-items: center;
 justify-content: center;
}

.footer-title {
 font-size: 16px;
 line-height: 30px;
 letter-spacing: 0.02em;
 color: var(--black);
 margin-bottom: 24px;
}
</style>