<template>
 <div class="page__layout">
  <NavbarMain />
  <div class="slot">
   <slot />
  </div>
  <FooterMain />
 </div>
</template>

<style lang="scss" scoped>
.page__layout {
 width: 100%;
 background: var(--white);

 .slot {
  min-height: 50vh;
 }
}
</style>