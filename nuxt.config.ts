// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    runtimeConfig: {
        DOMAIN: process.env.DOMAIN,
    },
    compatibilityDate: "2024-04-03",

    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxt/icon"],
    css: ["~/assets/scss/style.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    pinia: {
        storesDirs: ["./stores/**"],
    },
    icon: {
        customCollections: [
            {
                prefix: "my-icon",
                dir: "./assets/my-icons",
            },
        ],
    },
});
