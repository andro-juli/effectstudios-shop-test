import { useCategoryStore } from "~/store/category"

export const useDropdownList = () => {
 const store = useCategoryStore();

 async function fetchCategoryList() {
  await store.getCategoriesList()
 };
 
 const dropdown = computed(() => store.dropDownList.map((list) => list.title))
 
 watchEffect(() => {
  fetchCategoryList();
 });

 return { dropdown }
}