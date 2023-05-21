<template>
 <div class="mainContainer">
  <div class="single__product">
   <div class="route__breadcrumbs flex">
    <p class="home" @click="router.push('/')">Home <span> > </span></p>
    <p class="category-title" v-if="product.categories">{{ product.categories[0].title }} <span> > </span></p>
    <p>{{ product.product_name }}</p>
   </div>
   <div class="single__product--content" v-if="!store.loading">
    <SingleImage :product="product" />
    <SingleDetails :product="product" />
   </div>
  </div>
 </div>
</template>

<script setup>
import { useRoute, useRouter } from "nuxt/app";
import { useProductStore } from '~/store/products';
const route = useRoute();
const router = useRouter();

const store = useProductStore();

async function fetchSingleProduct() {
 await store.getProductBySlug(route.params.slug)
}
const product = computed(() => store.singleProduct);

watchEffect(() => {
 fetchSingleProduct();
});
</script>

<style lang="scss" scoped>
.single__product {
 padding: 1.5rem 0;
 width: 100%;
 margin: auto;

 @media (min-width: 1200px) {
  width: calc(100% - 240px);
 }

 &--content {
  display: grid;
  grid: 1fr /1fr;
  grid-gap: 2rem;
  margin: 2.5rem 0 10rem;

  @media (min-width: 940px) {
   grid: 1fr / repeat(2, 1fr);
  }
 }

 .route__breadcrumbs {
  gap: .5rem;

  p {
   font-weight: 500;
   font-size: 10px;
   line-height: 16px;
   letter-spacing: -0.04em;
   cursor: pointer;
   padding: .5rem 0;

   &:hover {
    transform: scale(1.02);
   }
  }

  .home,
  .category-title {
   color: #1256DB;
   opacity: 0.9;
  }
 }
}
</style>