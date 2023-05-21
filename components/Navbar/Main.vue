<template>
 <div class="navbar__main">
  <NavbarTop />
  <NavbarMobile :open-sidebar="toggleSidebar" />
  <NavbarBottom />
  <NavbarMobileSidebar :toggle-sidebar="toggleSidebar" />
 </div>
</template>
<script setup>
function toggleSidebar() {
 const label = document.querySelector(".mobile__sidebar");
 label.classList.toggle("mobile__sidebar-opened");
}
</script>

<style lang="scss" scoped>
.navbar__main {
 position: sticky;
 top: 0;
 background: var(--white);
 z-index: 1000;
}
</style>