<template>
 <div class="relative flex items-center justify-center">
  <img :src="shop" alt="shopping-cart" />
  <div class="cart-count">{{ store.count }}</div>
 </div>
</template>

<script setup>
import shop from "@/assets/icons/svg/shopping-cart.svg";
import { useAddToCartStore } from "~/store/cart";

const store = useAddToCartStore();
</script>

<style lang="scss" scoped>
.cart-count {
 font-size: .625rem;
 background: var(--red);
 color: var(--white);
 border-radius: 50%;
 position: absolute;
 top: -10px;
 right: 30%;
 width: 18px;
 height: 18px;
 display: grid;
 place-content: center;
}
</style>