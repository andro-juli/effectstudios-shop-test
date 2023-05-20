<template>
 <div class="features">
  <div v-for="feat in features" :key="feat.title" class="feature_card cursor-pointer">
   <div class="relative mb-3">
    <div class="shape-skew-top"></div>
    <div class="shape-skew-side"></div>
    <div class="features-icon-wrapper grid place-content-center">
     <img :src="feat.icon" :alt="`${feat.title}-icon`" />
    </div>
   </div>
   <p class="title font-bold text-sm">{{ feat.title }}</p>
   <p class="subtitle">{{ feat.subtitle }}</p>
  </div>
 </div>
</template>

<script setup>
import truck from "@/assets/icons/svg/truck.svg";
import phone from "@/assets/icons/svg/phone.svg";
import whatsapp from "@/assets/icons/svg/whatsapp.svg";
import checkBadge from "@/assets/icons/svg/check-badge.svg";

const features = [
 { title: 'Secure Shipping', subtitle: 'on all orders', icon: truck, },
 { title: 'Telephone', subtitle: '+1 23 456 7890', icon: phone },
 { title: 'Chat WhatsApp', subtitle: 'Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00', icon: whatsapp },
 { title: 'Quality Guarantee', subtitle: 'Verified Purchase Reviews', icon: checkBadge },
];
</script>

<style lang="scss" scoped>
.features {
 --light-yellow: #FEFAE1;
 --deep-yellow: #F8D307;

 display: grid;
 grid: 1fr / repeat(auto-fit, minmax(160px, 1fr));
 gap: 1rem;
 margin-bottom: 2.5rem;
 padding-bottom: 2.5rem;

 @media (min-width: 768px) {
  grid: 1fr / repeat(auto-fit, minmax(300px, 1fr));
 }

 &-icon-wrapper {
  width: 21.44px;
  height: 21.44px;
  background: var(--deep-yellow);

  img {
   width: 10px;
   height: 10px;
  }

  @media (min-width: 768px) {
   width: 40px;
   height: 40px;

   img {
    width: auto;
    height: auto;
   }
  }
 }

 .shape-skew-top {
  position: absolute;
  top: -1.2rem;
  left: 1rem;
  width: 30px;
  height: 22px;
  background: #F9DC38;
  opacity: 0.16;
  transform: skewX(50deg) translateX(-2rem);

  @media (min-width: 768px) {
   width: 40px;
   height: 32px;
   top: -1.9rem;
   left: 1rem;
  }
 }

 .shape-skew-side {
  position: absolute;
  width: 20px;
  height: 22px;
  bottom: -1.5rem;
  left: -1.2rem;
  background: rgba(248, 211, 7, 0.4);
  transform: skewY(40deg) translateY(-2rem);

  @media (min-width: 768px) {
   width: 32px;
   height: 42px;
   bottom: -1.2rem;
   left: -2rem;
  }
 }

 .feature_card {
  background: var(--light-yellow);
  padding: 1rem;
  height: max-content;
  max-height: 90px;
  overflow: hidden;

  &:hover {
   transform: scale(1.01);
  }

  .title {
   font-size: 10px;
   line-height: 13px;
  }

  .subtitle {
   font-size: 8px;
   line-height: 16px;
   letter-spacing: -0.02em;
  }

  @media (min-width: 768px) {
   padding: 2rem;
   max-height: 160px;

   .title {
    line-height: 24px;
    letter-spacing: -0.04em;
   }

   .subtitle {
    font-size: 12px;
    line-height: 16px;
   }
  }
 }
}
</style>