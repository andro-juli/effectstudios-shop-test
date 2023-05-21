<template>
 <div class="popular__shirts">
  <div class="header__wrapper flex items-center justify-between">
   <p class="section-header">MOST POPULAR T-SHIRTS</p>
   <div class="action-buttons flex gap-2">
    <button @click="leftBtnClick" class="btn_left grid place-content-center" type="button">
     <SvgDown class="arrow-svg" />
    </button>
    <button @click="rightBtnClick" class="btn_right grid place-content-center" type="button">
     <SvgDown class="arrow-svg" />
    </button>
   </div>
  </div>
  <!-- <div v-if="!shirtsList.length" class="empty mainContainer">
   <p class="">No popular shirts listed</p>
  </div> -->
  <div class="popular__shirts--wrapper hide-scrollbar " ref="shirtsWrapper">
   <HomeShirtCard v-for="(shirt, index) in shirtsList" :key="shirt.id" :shirt="shirt" />
  </div>
 </div>
</template>

<script setup>
import { useProductStore } from '~/store/products';

const store = useProductStore();

async function fetchShirts() {
 await store.getShirtsList()
}

const shirtsWrapper = ref(null);

function leftBtnClick() {
 const scrollLeft = shirtsWrapper.value.scrollLeft;
 shirtsWrapper.value.scrollLeft = scrollLeft - 300;
}

function rightBtnClick() {
 const scrollLeft = shirtsWrapper.value.scrollLeft;
 shirtsWrapper.value.scrollLeft = scrollLeft + 300;
}

const shirtsList = computed(() => store.shirts)

watchEffect(() => {
 fetchShirts();
});
</script>

<style lang="scss" scoped>
%btn {
 width: 40px;
 height: 40px;
 border: 1px solid #EAEAEC;

 &:hover {
  background-color: var(--border);
 }
}

.popular__shirts {
 width: 100%;
 padding-bottom: 0;
 overflow: hidden;
 max-width: 1592px;
 margin: 0 auto;


 @media (min-width: 768px) {
  padding-bottom: 5rem;
 }

 @media (min-width: 920px) {
  padding-left: 2.5rem;
 }


 .empty {
  padding-left: 2.5rem;
 }


 .header__wrapper {
  margin-bottom: 5rem;
  padding: 0 20px;

  @media (min-width: 920px) {
   padding: 0 40px;
  }

  .action-buttons {
   .btn_left {
    @extend %btn;

    .arrow-svg {
     transform: rotate(90deg);
    }
   }

   .btn_right {
    @extend %btn;

    .arrow-svg {
     transform: rotate(-90deg);
    }
   }
  }
 }


 &--wrapper {
  width: calc(100% - 20px);
  margin-left: auto;
  display: grid;
  gap: 22px;
  grid: 1fr / repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-flow: column;
  grid-auto-columns: minmax(240px, 1fr);
  overflow-x: auto;

  @media (min-width: 920px) {
   width: calc(100% - 40px);
  }
 }
}
</style>