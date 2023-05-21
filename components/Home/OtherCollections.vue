<template>
 <div class="other__collections section">
  <template v-if="!store.loading">
   <p class="section-header">Other Collections</p>
   <div class="other__collections--wrapper">
    <div v-for="collection in collections" :key="collection.id" class="collection-card">
     <div class="image">
      <img :src="collection.image" alt="">
     </div>
     <div class="title__overlay">
      <p class="title">{{ collection.title }}</p>
      <button class="btn_left grid place-content-center" type="button">
       <SvgDown class="arrow-svg" />
      </button>
     </div>
    </div>
   </div>
  </template>
 </div>
</template>

<script setup>
import { useCategoryStore } from '~/store/category';

const store = useCategoryStore();

async function fetchLeaguesCategory() {
 await store.getProductCategories("others")
};

const collections = computed(() => store.collections)

watchEffect(() => {
 fetchLeaguesCategory();
});
</script>

<style lang="scss" scoped>
.other__collections {
 padding-top: 2.5rem;
 padding-bottom: 5rem;

 @media (min-width: 768px) {
  padding-top: 5rem;
 }

 &--wrapper {
  padding-top: 2.5rem;
  display: grid;
  grid: auto / repeat(auto-fit, minmax(16rem, 1fr));
  gap: 32px;

  @media (min-width: 600px) {
   padding-top: 3.25rem;
   grid: auto / repeat(auto-fit, minmax(22rem, 1fr));
  }

  .collection-card {
   position: relative;

   .image {
    cursor: pointer;

    img {
     width: 100%;
     height: 100%;
     object-fit: cover;
    }

    &:hover {
     img {
      transform: scale(1.002);
     }
    }
   }

   .title__overlay {
    height: 3rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(17, 17, 18, 0.4);
    backdrop-filter: blur(8px);
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;

    .title {
     font-weight: 600;
     font-size: 14px;
     line-height: 16px;
     letter-spacing: -0.04em;
    }

    .btn_left {
     width: 3rem;
     height: 3rem;
     background-color: var(--primary);

     .arrow-svg {
      transform: rotate(-90deg);
     }
    }
   }
  }
 }
}
</style>