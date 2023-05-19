<template>
 <div class="top">
  <NavbarTopLanguageSelect />
  <div class="moving-title h-full flex items-center">
   <p class="top_movingtext font-semibold">SALES BEGIN • FREE SHIPPING ON ALL ORDERS</p>
  </div>
  <NavbarTopChat />
 </div>
</template>

<style lang="scss" scoped>
.top {
 height: 32px;
 background: var(--black);
 color: var(--white);
 display: grid;
 grid: 1fr / 5rem 1fr 5rem;

 @media (min-width: 768px) {
  grid: 1fr / 10rem 1fr 13rem;
 }

 .moving-title {
  overflow: hidden;
 }

 &_movingtext {
  font-size: .6875rem;
  line-height: 1rem;
  color: var(--white);
  animation: moveInOut 12s linear infinite;
  white-space: nowrap;
  opacity: 0.8;
 }

 @keyframes moveInOut {
  0% {
   transform: translateX(75vw);
  }

  100% {
   transform: translateX(-75vw);
  }
 }
}
</style>