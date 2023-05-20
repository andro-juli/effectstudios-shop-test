// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
 css: [
  // SCSS file in the project
  "@/assets/css/main.scss",
 ],
 app: {
  head: {
   charset: 'utf-8',
   viewport: 'width=device-width, initial-scale=1',
   title: 'Futbol | Effectstudios',
   link: [
    {
     href: "https://fonts.googleapis.com", rel: "preconnect"
    },
    {
     href: "https://fonts.gstatic.com", rel: "preconnect"
    },
    {
     href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap", rel: "stylesheet"
    },
   ]
  },
 }
})
