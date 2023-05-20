<template>
 <div class="mainContainer">
  <div class="single__product">
   <div class="route__breadcrumbs flex">
    <p>Home <span> > </span></p>
    <p>{{ slug }} <span> > </span></p>
    <p>Manchester United 21-22 Home Shirt</p>
   </div>
   <p>slug page</p>
  </div>
 </div>
</template>

<script setup>
import { useRoute } from "nuxt/app";

const route = useRoute();

const slug = ref(route.params.slug);
</script>

<style lang="scss" scoped>
.single__product {
 padding: 1.5rem 0;

 .route__breadcrumbs {
  gap: .5rem;

  p {
   font-weight: 500;
   font-size: 10px;
   line-height: 16px;
   letter-spacing: -0.04em;
  }

 }
}
</style>