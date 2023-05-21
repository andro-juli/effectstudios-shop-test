<template>
 <div class="main_dropdown">
  <div class="select-category flex items-center gap-3" @click="toggleOpen">
   <div class="category">{{ activeCategory }}</div>
   <SvgDown class="svg" />
  </div>
  <div class="dropdown">
   <div v-for="category in dropdown" :key="category" class="dropdown_item" @click="selectCategory(category)">
    <p class="dropdown_item-text">{{ category }}</p>
   </div>
  </div>
 </div>
</template>xx

<script setup>
import { useDropdownList } from '~/composables/useDropdownList';


const { dropdown } = useDropdownList();

const activeCategory = ref("All Categories")

function toggleOpen() {
 const label = document.querySelector(".dropdown");
 label.classList.toggle("open_dropdown");
};
function selectCategory(cat) {
 activeCategory.value = cat;
 toggleOpen();
};

</script>

<style lang="scss" scoped>
.main_dropdown {
 position: relative;
 display: grid;
 place-content: center;

 .select-category {
  padding: 0.4rem 0;
  cursor: pointer;
 }

 .category {
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.04em;
  color: var(--black);
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
 }


 .svg {
  cursor: pointer;
 }

 .dropdown_item {
  padding: 0.4rem 1.5rem;
  cursor: pointer;
  margin-bottom: .5rem;

  &:hover {
   background: var(--border)
  }
 }

 .dropdown {
  position: absolute;
  height: max-content;
  max-height: 0;
  top: 3.4rem;
  overflow: hidden;
  background: var(--white);
  width: 100%;
  border: 1px solid var(--border);
  z-index: 10;
  display: none;
 }

 .open_dropdown {
  display: block;
  max-height: 36vh;
  width: 18vw;
  overflow-y: auto;
 }
}
</style>