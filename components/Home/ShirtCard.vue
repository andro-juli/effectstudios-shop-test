<template>
 <div class="card" @click="router.push(`/shirts/${shirt.slug}`)">
  <div class="card-images">
   <img :src="shirt.gallery[0].image" />
  </div>
  <div class="card-text-area grid gap-2">
   <p class="shirt-name">{{ shirt.product_name }}</p>
   <p class="price">€30.00</p>
  </div>
 </div>
</template>

<script setup>
import { useRouter } from "nuxt/app"
const props = defineProps({
 shirt: {
  type: Object
 },
 index: {
  type: Number
 },
});

const router = useRouter()

const shirt = computed(() => props.shirt);
</script>

<style lang="scss" scoped>
.card {
 background: var(--white);
 border: 1px solid #EAEAEC;
 cursor: pointer;

 &:hover {
  .shirt-name {
   text-decoration: underline;
  }
 }

 &-images {
  width: 100%;
  height: 15rem;

  img {
   width: 100%;
   height: inherit;
   object-fit: cover;
  }

  &:hover {
   transform: scale(0.99);
  }
 }

 &-text-area {
  padding: 1rem;
  // border-top: 1px solid #EAEAEC;

  .shirt-name {
   font-weight: 400;
   font-size: 14px;
   line-height: 18px;
   letter-spacing: -0.02em;
   color: #393A38;
   height: 2.25rem;
  }

  .price {
   font-weight: 700;
   font-size: 20px;
   line-height: 24px;
   letter-spacing: -0.02em;
   color: var(--black);
  }
 }
}
</style>