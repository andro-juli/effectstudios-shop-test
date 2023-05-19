<template>
 <div class="subscribe">
  <p class="footer-title font-bold">Subscribe</p>
  <div class="grid">
   <p class="text-sm">Subscribe to our mailing list to receive the latest news.</p>
  </div>

  <form class="footer-subscribe-email mt-6">
   <input placeholder="Email Address" />
   <button class="flex items-center justify-center" type="button">
    <SvgRight />
   </button>
  </form>
 </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer-title {
 font-size: 16px;
 line-height: 30px;
 letter-spacing: 0.02em;
 color: var(--black);
 margin-bottom: 24px;
}

.footer-subscribe-email {
 height: 40px;
 width: 100%;
 max-width: 280px;
 display: grid;
 grid: 1fr / 7fr 1fr;
 border: 1px solid #EAEAEC;
 backdrop-filter: blur(8px);

 input {
  padding: 0 20px;
 }

 input,
 input::placeholder {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: var(--black);
 }

 button {
  width: 40px;
  height: 40px;
  background-color: var(--primary);
 }
}
</style>