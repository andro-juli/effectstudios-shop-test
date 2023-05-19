<template>
 <form class="main_search h-full">
  <input placeholder="What are you looking for?" class="search_input w-full" />
  <div role="button" class="search_btn mr-4">
   <div class="yellow-bg flex items-center justify-center">
    <p class="font-semibold">
     Search
    </p>
   </div>
   <div class="black-bg flex items-center justify-center">
    <img :src="search" alt="search-icon" />
   </div>
  </div>
 </form>
</template>

<script setup>
import search from "@/assets/icons/svg/search.svg"
</script>

<style lang="scss" scoped>
.main_search {
 --border: #F5F5F6;
 display: flex;
 border-left: 1px solid var(--border);
 border-right: 1px solid var(--border);
 padding: .5rem 1.5rem;

 .search_input::placeholder {
  font-size: 1rem;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: var(--black);
  opacity: 0.48;
 }

 .search_btn {
  height: 2.5rem;
  width: 7.5rem;
  display: grid;
  grid: 1fr / 2fr 1fr;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.04em;
  color: var(--black);

  .yellow-bg {
   background: var(--primary);
   backdrop-filter: blur(8px);
  }

  .black-bg {
   background: var(--black);

   svg {
    path: {
     fill: var(--white) !important;
    }
   }
  }
 }
}
</style>