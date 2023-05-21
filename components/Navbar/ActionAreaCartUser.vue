<template>
 <div class="navbar_right flex items-center h-full">
  <NavbarShoppingCart />
  <div class="user flex items-center justify-center gap-2 h-full">
   <img :src="user" alt="user-avatar" />
   <SvgDown />
  </div>
 </div>
</template>

<script setup>
import user from "@/assets/icons/svg/user.svg";

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