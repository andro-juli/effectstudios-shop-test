

import { defineStore } from 'pinia'
import { getPopularShirts, getSingleProduct } from '~/api';

export const useProductStore = defineStore('popular', () => {
 const loading = ref(false);
 const shirts = ref([])
 const singleProduct = ref({})

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


 const getProductBySlug = async (slug) =>  {
  try {
   loading.value = true;
   const res = await getSingleProduct(slug);
   singleProduct.value = res.data.product;
  } catch (error) {
   console.log({error})
  } finally {
   loading.value = false;
  }
 };

 return {
  getShirtsList, getProductBySlug, loading, shirts, singleProduct,
 }
})