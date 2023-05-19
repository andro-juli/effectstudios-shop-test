<template>
 <div class="navbar_right flex items-center h-full">
  <div class="flex items-center justify-center">
   <img :src="shop" alt="shopping-cart" />
  </div>
  <div class="user flex items-center justify-center gap-2 h-full">
   <img :src="user" alt="user-avatar" />
   <SvgDown />
  </div>
 </div>
</template>

<script setup>
import user from "@/assets/icons/svg/user.svg";
import shop from "@/assets/icons/svg/shopping-cart.svg";
</script>

<style lang="scss" scoped>
.navbar_right {
 --border: #F5F5F6;
 width: 13rem;
 display: grid;
 grid: 1fr / repeat(2, 1fr);

 .user {
  border-left: 1px solid var(--border);
 }
}
</style>