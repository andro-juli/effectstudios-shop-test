
import { defineStore } from 'pinia'

export const useAddToCartStore = defineStore('cart', () => {
  const count = ref(0);

  // const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { increment, count }
})