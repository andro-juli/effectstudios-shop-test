<template>
 <div class="footnote">
  <div class="mainContainer flex items-center justify-between">
   <p class="footnote-text">© 2021 Jambulani • All rights reserved</p>
   <div class="payment-partners">
    <img :src="pay" />
   </div>
  </div>
 </div>
</template>

<script setup>
import pay from "@/assets/images/payment-partners.png";
</script>

<style lang="scss" scoped>
.footnote {
 --bg: rgba(255, 255, 255, 0.08);
 padding: 30px 0;
 background: var(--bg);
 border-top: 1px solid #EAEAEC;

 &-text {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: var(--black);
 }

 .payment-partners {
  display: none;

  @media (min-width: 768px) {
   display: flex;
  }
 }
}
</style>