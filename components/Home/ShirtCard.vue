<template>
 <div class="card" @click="router.push(`/shirts/${shirt.slug}`)">
  <div class="card-images relative">
   <img :src="shirt.gallery[0].image" />
   <p v-if="saved !== 'No compare price'" class="discount">Save {{ saved }}%</p>
  </div>
  <div class="card-text-area grid gap-2">
   <p class="shirt-name">{{ shirt.product_name }}</p>
   <div class="flex item-center gap-1">
    <p class="price" v-if="shirt.variants.length">€{{ shirt.variants[0].price }}</p>
    <p class="initial-price" v-if="shirt.variants[0].compare_at_price !== '0.00'">€{{ shirt.variants[0].compare_at_price
    }}</p>
   </div>
  </div>
 </div>
</template>

<script setup>
import { useRouter } from "nuxt/app";
import { useGetPrice } from "~/composables/useGetPrice";
const props = defineProps({
 shirt: {
  type: Object
 },
 index: {
  type: Number
 },
});

const router = useRouter();

const { getInfo } = useGetPrice();

const shirt = computed(() => props.shirt);

const saved = computed(() => getInfo(props.shirt));
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

  .discount {
   padding: 4px;
   font-weight: 600;
   font-size: 10px;
   line-height: 16px;
   text-align: center;
   color: var(--white);
   background: #23C353;
   position: absolute;
   bottom: 1rem;
   left: 1rem;

   @media (min-width: 600px) {
    padding: 4px 8px;
   }
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

  .initial-price {
   font-size: 16px;
   line-height: 24px;
   text-decoration-line: line-through;
   color: var(--red);
  }


 }
}
</style>