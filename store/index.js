import { defineStore } from 'pinia'
import { getBanners } from '~/api';

export const useMainStore = defineStore('main', () => {
 const loading = ref(false);
 const data = ref([])

 const getBannersList = async () =>  {
  try {
   loading.value = true;
   const res = await getBanners();
   data.value = res.data.banners.data
  } catch (error) {
   console.log({error})
  } finally {
   loading.value = false;
  }
 };

 return {
  getBannersList, loading, data,
 }
})