<template>
 <div class="footer_main">
  <div class="mainContainer footer_main--content">
   <div class="main-menu">
    <p class="footer-title font-bold">Main Menu</p>
    <div class="grid gap-4">
     <NuxtLink v-for="menu in menuList" :to="menu.path" :key="menu.id">{{ menu.name }}</NuxtLink>
    </div>
   </div>
   <div class="secondary-menu">
    <p class="footer-title font-bold">Secondary Menu</p>
    <div class="grid gap-4">
     <p v-for="menu in secondaryMenu" to="/" :key="menu" class="text-sm">{{ menu }}</p>
    </div>
   </div>
   <FooterSubscribe />
   <FooterSocials />
  </div>
  <div class="payment-partners-web mainContainer">
   <img :src="pay" />
  </div>
  <FooterFootNote />
 </div>
</template>

<script setup>
import { menuList } from "@/data/menuList";
import pay from "@/assets/images/payment-partners.png";

const secondaryMenu = ["Search", "Privacy policy", "Shipping Policy", "Returns Policy", "Terms of Service"];
</script>

<style lang="scss" scoped>
.footer_main {
 background: var(--border);
 padding: 0;

 @media (min-width: 768px) {
  padding: 0 40px;
 }

 &--content {
  display: grid;
  grid: 1fr / repeat(auto-fit, minmax(200px, 1fr));
  gap: 3.6rem;
  padding: 2.5rem 0 2.5rem;

  @media (min-width: 768px) {
   padding: 5rem 0 6.25rem;
  }
 }

 a,
 .text-sm {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--black);
  cursor: pointer;
 }

 .footer-title {
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: var(--black);
  margin-bottom: 24px;
 }

 .payment-partners-web {
  display: flex;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
   display: none;
  }
 }
}
</style>