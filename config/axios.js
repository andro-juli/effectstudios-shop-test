import axios from "axios";

const BASEURL = 'https://camiestas-futbol.effectstudios.co/api/v1';

const instance = axios.create({
 baseURL: BASEURL
})

export { instance }