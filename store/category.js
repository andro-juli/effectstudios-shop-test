import { defineStore } from "pinia";
import { getCategoryList, getProductCategory } from "~/api";


export const useCategoryStore = defineStore('category', () => {
 const loading = ref(false);
 const categories = ref([]);
 const collections = ref([]);
 const dropDownList = ref([]);
 const tournaments = ref([]);

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

 const getSpecialTournaments = async () => {
  loading.value = true;
  try {
   const response = await getProductCategory('special-tournaments')
   tournaments.value = response.data.category.sub_categories;
  } catch (error) {
   return error
  } finally {
   loading.value = false;
  }
 }

 const getCategoriesList = async () => {
  loading.value = true;
  try {
   const response = await getCategoryList()
  dropDownList.value = response.data.categories.data;
  } catch (error) {
   return error
  } finally {
   loading.value = false;
  }
 }

 return {
  getProductCategories, getCategoriesList, getSpecialTournaments, tournaments, categories, collections, dropDownList
 }
})