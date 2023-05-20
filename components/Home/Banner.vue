<template>
 <div class="banners">
  <div v-if="!store.loading" class="banners__content">
   <div class="banners__images">
    <div v-for="[key, val] in bannersList" :key="val.id"
     :class="['banner__image', { active: key === active }, { notActive: key !== active }]">
     <img :src="val.image" alt="banner-picture" class="" />
     <div class="overlay__content">
      <div :class="{ 'hide-content': key !== active }" class="banner__text">
       <p v-html="val.content" class="text-content"></p>
      </div>
     </div>

    </div>
   </div>
   <div class="overlay"></div>
   <div class="active__banner flex items-center justify-space-between">
    <div v-for="[key, val] in bannersList" :key="key" :class="['active-dash', { active: key === active }]"
     @click="setAsActive(key)">
    </div>
   </div>
   <div class="btn-text-wrapper" role="button" v-show="btn_text">
    <div class="btn-text grid place-content-center">{{ btn_text }}</div>
    <div class="btn-shopping-bag grid place-content-center"><img :src="bag" alt="shopping-bag" /></div>
   </div>
  </div>
 </div>
</template>

<script setup>
import bag from "@/assets/icons/svg/bag.svg";
import { useMainStore } from "@/store/index";

const store = useMainStore();

async function fetchBanners() {
 await store.getBannersList()
}

const intervalId = ref(null);
const active = ref(0);

const bannersList = computed(() => {
 return Object.entries(store.data);
});

const btn_text = computed(() => {
 return bannersList.value[active.value][1].btn_text
});

function setAsActive(key) {
 active.value = key;
}

watchEffect(() => {
 fetchBanners();
});

onMounted(() => {
 intervalId.value = setInterval(() => {
  const index = bannersList.value.findIndex((item) => item[0] === active.value);
  const indexToUse = (index + 1) % bannersList.value.length;
  active.value = bannersList.value[indexToUse][0];
 }, 3000)
})

onUnmounted(() => {
 clearInterval(intervalId.value);
});
</script>

<style lang="scss" scoped>
.banners {
 width: 100%;
 height: 400px;
 position: relative;
 margin: 2.5rem 0;

 &__content {
  display: flex;
  width: inherit;
  height: inherit;
 }

 &__images {
  width: inherit;
  height: inherit;
  position: relative;
  left: 0;
  right: 0;
 }

 .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(40deg, #111112 0%, rgba(17, 17, 18, 0) 80%);
 }

 .banner__image {
  width: 100%;
  height: 100%;

  img {
   width: inherit;
   height: inherit;
   object-fit: cover;
  }

  &.active {
   width: 100%;
   height: 100%;

   img {
    width: inherit;
    height: inherit;
    object-fit: cover;
   }
  }

  &.notActive {

   display: none;
   max-width: 0;
   overflow: hidden;
  }
 }

 .overlay__content {
  position: absolute;
  top: 20%;
  left: 6%;
  max-width: 490px;
  z-index: 100;

  .text-content {
   font-weight: 700;
   font-size: 40px;
   line-height: 48px;
   letter-spacing: -0.04em;
   color: #FFFFFF;
  }
 }

 .active__banner {
  position: absolute;
  bottom: 10%;
  left: 6%;
  z-index: 100;
  display: flex;
  gap: 8px;

  .active-dash {
   width: 40px;
   height: 4px;
   background: var(--white);
   opacity: 0.16;
   cursor: pointer;

   @media (min-width: 768px) {
    width: 80px;
   }
  }

  .active {
   background-color: var(--primary);
   opacity: 1;
   cursor: pointer;
  }
 }

 .btn-text-wrapper {
  position: absolute;
  bottom: 10%;
  right: 4%;
  z-index: 100;
  display: grid;
  grid: 2.5rem / 6.25rem 2.5rem;
  cursor: pointer;

  &:hover {
   transform: scale(1.01);
  }

  .btn-text {
   font-weight: 600;
   font-size: 12px;
   line-height: 16px;
   text-align: center;
   letter-spacing: -0.04em;
   color: var(--white);
   height: 100%;
   background: rgba(17, 17, 18, 0.4);
   border: 1px solid #FFFFFF;
   backdrop-filter: blur(8px);
  }

  .btn-shopping-bag {
   background: var(--white);
   height: 100%;
  }
 }
}
</style>