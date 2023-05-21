<template>
 <div class="image__section">
  <div class="image--wrapper">
   <div v-for="(image, index) in product.gallery" :key="image.id"
    :class="['image-lg', { imageactive: index === active }, { imageNotActive: index !== active }]">
    <img :src="image.image" alt="image" />
    <div class="action-buttons flex gap-2">
     <button @click="leftBtnClick()" class="btn_left grid place-content-center" type="button">
      <SvgDownWhite class="arrow-svg" />
     </button>
     <button @click="rightBtnClick()" class="btn_right grid place-content-center" type="button">
      <SvgDownWhite class="arrow-svg" />
     </button>
    </div>
   </div>
  </div>
  <div class="images__hightlights-wrapper">
   <div v-for="(image, index) in product.gallery" :key="image.id"
    :class="['image-sm', { active: index === active }, { notActive: index !== active }]">
    <SvgDown class="svg-down" />
    <img :src="image.image" alt="image" />
   </div>
  </div>
 </div>
</template>

<script setup>
const active = ref(0);
const props = defineProps({
 product: {
  type: Object,
 }
});

const product = computed(() => props.product);
const galleryLength = computed(() => product.value.gallery.length)

function leftBtnClick() {
 if (active.value === 0) return;
 active.value = active.value - 1;
}

function rightBtnClick() {
 if (active.value === (galleryLength.value - 1)) return;
 active.value = active.value + 1;
}
</script>

<style lang="scss" scoped>
%btn {
 width: 2rem;
 height: 2rem;
 background: rgba(17, 17, 18, 0.4);
 border: 1px solid rgba(255, 255, 255, 0.16);
 backdrop-filter: blur(20px);

 &:hover {
  // background-color: var(--border);
 }
}

.image__section {
 margin: 0 auto;

 .image--wrapper {
  width: 100%;
  max-width: 500px;
  position: relative;
  display: flex;
  overflow: hidden;

  .image-lg {
   width: 100%;
   height: 100%;
  }


  .imageactive {
   width: 100%;
   height: 100%;

   img {
    height: inherit;
    width: inherit;
   }
  }

  .imageNotActive {
   display: none;
  }

  .action-buttons {
   position: absolute;
   bottom: 1rem;
   right: 1rem;

   .btn_left {
    @extend %btn;

    .arrow-svg {
     transform: rotate(90deg);
    }

    svg {
     fill: var(--white);
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

 .images__hightlights-wrapper {
  display: flex;
  gap: 1rem;
  margin-top: 1.6rem;


  .notActive {
   opacity: 0.4;

   .svg-down {
    display: none;
   }
  }

  .image-sm {
   width: 3.125rem;
   height: 3.125rem;
   position: relative;

   @media (min-width: 768px) {
    width: 5rem;
    height: 5rem;
   }

   img {
    width: inherit;
    height: inherit;
    object-fit: contain;
   }

   .svg-down {
    position: absolute;
    top: -1rem;
    left: 50%;
   }
  }
 }
}
</style>