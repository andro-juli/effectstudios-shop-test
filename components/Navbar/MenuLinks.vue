<template>
 <ul class="navbar_menu">
  <li v-for="menu in menuList" class="h-full">
   <NuxtLink :to="menu.path"> {{ menu.name }}
    <SvgDown v-if="menu.canOpen" />
   </NuxtLink>
  </li>
 </ul>
</template>

<script setup>
import { menuList } from '~/data/menuList';
</script>

<style lang="scss" scoped>
.navbar_menu {
 --border: #F5F5F6;
 border-bottom: 1px solid var(--border);
 padding: 0 50px;
 background: var(--white);
}

.navbar_menu,
li {
 display: flex;
 gap: 48px;
}

a {
 font-weight: 700;
 font-size: 12px;
 line-height: 16px;
 letter-spacing: -0.04em;
 color: var(--black);
 opacity: 0.6;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: .5rem;
 border-bottom: 2px solid transparent;
}

.router-link-active {
 color: var(--black);
 opacity: 1;
 cursor: pointer;
 border-bottom: 2px solid var(--primary);
}

.router-link-active:hover {
 // color: red;
}
</style>