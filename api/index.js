import { instance } from "~/config/axios";


export async function getBanners() {
 return instance.get("/banner?status=true");
}