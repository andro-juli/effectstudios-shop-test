<template>
 <div class="mobile_nav flex items-center justify-between">
  <div class="mobile_nav-left flex items-center h-full">
   <SvgMenu class="menu" />
   <button type="button">
    <SvgSearch />
   </button>
  </div>
  <div class="mobile_nav-right flex items-center h-full">
   <img :src="shop" alt="shopping-cart" />
   <div class="flex items-center gap-2">
    <img :src="user" alt="user-avatar" />
    <SvgDown />
   </div>
  </div>
 </div>
</template>

<script setup>
import user from "@/assets/icons/svg/user.svg";
import shop from "@/assets/icons/svg/shopping-cart.svg";
</script>

<style lang="scss" scoped>
.mobile_nav {
 --bg: #F5F5F6;
 height: 72px;
 background: var(--bg);
 padding: 0 20px;

 @media (min-width: 1021px) {
  display: none;
 }

 &-left {
  gap: 31px;

  .menu {
   cursor: pointer;
  }
 }

 &-right {
  gap: 1.75rem;
 }
}
</style>