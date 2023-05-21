<template>
 <div class="mobile__sidebar">
  <ul class="navbar_menu">
   <li v-for="menu in menuList" class="h-full">
    <p @click="navigate(menu.path)">
     {{ menu.name }}
    </p>
   </li>
  </ul>
 </div>
</template>

<script setup>
import { menuList } from '~/data/menuList';
import { useRouter } from "nuxt/app"
const props = defineProps({
 toggleSidebar: {
  type: Function,
 }
});

const router = useRouter();

function navigate(path) {
 router.push(path);
 props.toggleSidebar()
}
</script>

<style lang="scss" scoped>
.mobile__sidebar {
 position: fixed;
 left: -240px;
 height: 100vh;
 width: 240px;
 opacity: 0.6;
 background-color: var(--white);
 border: 1px solid var(--border);
 animation: all 1.2s slide-in;

 &-opened {
  left: 0px;
  opacity: 1;

  @keyframes slide-in {
   from {
    left: -240px;
   }

   to {
    left: 0;
   }
  }
 }
}

.navbar_menu {
 --border: #F5F5F6;
 border-bottom: 1px solid var(--border);
 padding: 0 50px;
 background: var(--white);
}

.navbar_menu {
 padding: 0;
}

li {
 display: grid;
 padding: 1rem;

 &:hover {
  background-color: var(--border);
 }
}

a {
 font-weight: 700;
 font-size: 16px;
 line-height: 24px;
 letter-spacing: -0.04em;
 color: var(--black);
 opacity: 0.6;
 display: flex;
 align-items: center;
 gap: .5rem;
}

.router-link-active {
 color: var(--black);
 opacity: 1;
 cursor: pointer;
 // border-bottom: 2px solid var(--primary);
}
</style>