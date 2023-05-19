<template>
 <div class="navbar_bottom">
  <div class="left-yellow-bg">
  </div>
  <div class="navbar_content">
   <NavbarActionArea />
   <NavbarMenuLinks />
  </div>
 </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.navbar_bottom {
 height: 5.5rem;
 display: grid;
 grid: 1fr / 10rem 1fr;

 @media (max-width: 1020px) {
  display: none;
 }

 .navbar_content {
  display: grid;
  grid: 2fr 1fr / 1fr;
 }

 .left-yellow-bg {
  background: var(--primary)
 }
}
</style>