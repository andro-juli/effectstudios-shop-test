<template>
 <div class="navbar__main">
  <NavbarTop />
  <NavbarMobile />
  <NavbarBottom />
 </div>
</template>

<style lang="scss" scoped>
.navbar__main {
 position: sticky;
 top: 0;
 background: var(--white);
 z-index: 1000;
}
</style>