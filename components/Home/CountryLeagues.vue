<template>
 <div class="country__leagues section">
  <template v-if="!store.loading">
   <p class="section-header">Country Leagues</p>
   <div class="country__leagues--wrapper">
    <div v-for="category in categories" :key="category.id" class="league-card">
     <div class="image">
      <img :src="category.image" alt="">
     </div>
     <p class="league-name text-center">{{ category.title }}</p>
    </div>
   </div>
  </template>
 </div>
</template>

<script setup>
import { useCategoryStore } from '~/store/category';

const store = useCategoryStore();

async function fetchLeaguesCategory() {
 await store.getProductCategories("country-leagues")
};

const categories = computed(() => store.categories)

watchEffect(() => {
 fetchLeaguesCategory();
});
</script>

<style lang="scss" scoped>
.country__leagues {
 padding-top: 5rem;

 &--wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  padding: 40px 0;


  .league-card {
   width: max-content;
   cursor: pointer;
   max-width: 10rem;

   &:hover {
    .league-name {
     text-decoration: underline;
    }
   }

   @media (min-width: 768px) {
    max-width: 15rem;
   }
  }

  .image {
   img {
    height: inherit;
    width: inherit;
    object-fit: contain;
   }
  }

  .league-name {
   font-weight: 700;
   font-size: 16px;
   line-height: 24px;
   letter-spacing: -0.02em;
   margin-top: 1rem;
  }
 }
}
</style>