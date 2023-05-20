import { instance } from "~/config/axios";


export async function getBanners() {
 return instance.get("/banner?status=true");
}

export async function getPopularShirts() {
 return instance.get("/popular-products?limit=10");
}


export async function getProductCategory(slug) {
 return instance.get(`/product-category-slug/${slug}`);
}