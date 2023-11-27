// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/styles.css"],
  colorMode: {
    classSuffix: "",
  },
  modules: ["@nuxt/ui", "nuxt-icon"],
  app: {
    head: {
      script: [
        {
          defer: true,
          src: "/lib/iziToast/dist/js/iziToast.min.js",
        },
      ],
    },
  },
  routeRules: {
    "/**": {
      cors: true,
    },
  },
});
