import { defineStore } from "pinia";
import { getProductCategory } from "~/api";


export const useCategoryStore = defineStore('category', () => {
 const loading = ref(false);
 const categories = ref([]);
 const collections = ref([]);

 const getProductCategories = async (slug) => {
  loading.value = true;
  try {
   const response = await getProductCategory(slug)
   slug === 'others' ? collections.value = response.data.category.sub_categories :
   categories.value = response.data.category.sub_categories;
  } catch (error) {
   return error
  } finally {
   loading.value = false;
  }
 }

 return {
  getProductCategories, categories, collections
 }
})