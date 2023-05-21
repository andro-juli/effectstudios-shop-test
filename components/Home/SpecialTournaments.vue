<template>
 <div class="special__tournaments section">
  <template v-if="!store.loading">
   <p class="section-header">Special Tournaments</p>
   <div class="special__tournaments--wrapper">
    <div v-for="category in tournaments" :key="category.id" class="tournament-card">
     <div class="image">
      <img :src="category.image" alt="">
     </div>
     <p class="tournament-name text-center">{{ category.title }}</p>
    </div>
   </div>
  </template>
 </div>
</template>

<script setup>
import { useCategoryStore } from '~/store/category';

const store = useCategoryStore();

async function fetchLeaguesCategory() {
 await store.getSpecialTournaments();
};

const tournaments = computed(() => store.tournaments)

watchEffect(() => {
 fetchLeaguesCategory();
});
</script>

<style lang="scss" scoped>
.special__tournaments {
 padding-top: 2.5rem;

 @media (min-width: 768px) {
  padding-top: 5rem;
 }

 &--wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  padding: 40px 0;


  .tournament-card {
   width: max-content;
   cursor: pointer;
   max-width: 10rem;

   &:hover {
    .tournament-name {
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