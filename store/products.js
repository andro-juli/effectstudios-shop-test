

import { defineStore } from 'pinia'
import { getPopularShirts } from '~/api';

export const usePopularStore = defineStore('popular', () => {
 const loading = ref(false);
 const shirts = ref([])

 const getShirtsList = async () =>  {
  try {
   loading.value = true;
   const res = await getPopularShirts();
   shirts.value = res.data.products.data
  } catch (error) {
   console.log({error})
  } finally {
   loading.value = false;
  }
 };

 return {
  getShirtsList, loading, shirts,
 }
})