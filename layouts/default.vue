<template>
 <div class="page__layout">
  <NavbarMain />
  <StaticFlag />

  <div class="slot">
   <slot />
  </div>
  <FooterMain />
 </div>
</template>

<style lang="scss" scoped>
.page__layout {
 width: 100%;
 height: 100%;
 background: var(--white);
 // overflow-x: clip;

 .slot {
  min-height: 50vh;
 }
}
</style>