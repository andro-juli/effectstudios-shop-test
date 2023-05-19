<template>
 <div class="navbar_actions">
  <NavbarActionAreaDropdown />
  <NavbarActionAreaSearch />
  <NavbarActionAreaCartUser />
 </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar_actions {
 display: grid;
 grid: 1fr / 10rem 1fr 13rem;
 border: 1px solid #F5F5F6;
}
</style>