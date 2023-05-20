<template>
 <div class="section">
  <div class="other__cards">
   <div class="other__cards--personalization">
    <div class="bg-image-wrapper">
     <img src="@/assets/images/personalization.jpg" alt="extras" />
    </div>
    <div class="image__overlay">
     <div class="overlay--content">
      <p class="title">PERSONALIZATION</p>
      <p class="text-sm add-mb">Put a custom print on the football shirt of your choice with our Personalization service.
      </p>
      <p class="text-sm">Tell us what name, what number and we put it. <span class="font-semibold">FREE!!!</span> </p>
     </div>
    </div>
   </div>
   <div class="other__cards--social_networks">
    <div class="bg-image-wrapper">
     <img src="@/assets/images/social-networks.jpg" alt="extras" />
    </div>
    <div class="image__overlay">
     <div class="overlay--content">
      <p class="title">Social networks</p>
      <p class="text-sm">Share your shirts with us with the #CamisetasFutbolSpainnn</p>
      <div class="social-wrapper flex gap-2">
       <div class="footer_icon--wrap">
        <img :src="facebook" alt="facebook" />
       </div>
       <div class="footer_icon--wrap">
        <img :src="twitter" alt="facebook" />
       </div>
       <div class="footer_icon--wrap">
        <img :src="ig" alt="facebook" />
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script setup>
import facebook from "@/assets/icons/png/facebook-f-black.png";
import twitter from "@/assets/icons/png/twitter-black.png";
import ig from "@/assets/icons/png/instagram-black.png";
</script>

<style lang="scss" scoped>
.other__cards {
 display: grid;
 grid: 1fr / 1fr;
 gap: 2.5rem;

 @media (min-width: 768px) {
  grid: 1fr / repeat(auto-fit, minmax(240px, auto));
 }

 &--personalization {
  position: relative;
 }

 &--social_networks {
  position: relative;

  .footer_icon--wrap {
   background: var(--white);
   width: 32px;
   height: 32px;
   display: flex;
   align-items: center;
   justify-content: center;
  }

  .social-wrapper {
   margin-top: 1.5rem;
  }
 }

 .image__overlay {
  background: rgb(17, 17, 18, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: var(--white);
  display: flex;
  align-items: flex-end;

  .overlay--content {
   width: 100%;
   padding: 1rem;

   .add-mb {
    margin-bottom: 1rem;

    @media (min-width: 768px) {
     margin-bottom: 2rem;
    }
   }

   .title {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.02em;
    margin-bottom: .8125rem;

    @media (min-width: 520px) {
     font-size: 16px;
     line-height: 15px;
     margin-bottom: 1.2rem;
    }
   }

   .text-sm {
    font-size: 8.73171px;
    line-height: 13px;
    letter-spacing: -0.02em;

    @media (min-width: 520px) {
     font-size: 16px;
     line-height: 24px;
    }
   }

   @media (min-width: 1020px) {
    padding: 1.25rem;
   }

   @media (min-width: 1305px) {
    padding: 2.5rem;
   }
  }
 }

 .bg-image-wrapper {
  background: var(--black);

  img {
   width: 100%;
   height: 100%;
   object-fit: contain;
  }
 }

}
</style>