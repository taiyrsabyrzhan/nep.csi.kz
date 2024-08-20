import en from "./store/localization/en.json";
import ru from "./store/localization/ru.json";
import kz from "./store/localization/kz.json";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "NEP",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Новая социально-экономическая политика" },
      { name: "format-detection", content: "telephone=yes" },
      { hid: "og_title", name: "og:title", content: "Новая социально-экономическая политика" },
      {
        hid: "og_description",
        name: "og:description",
        content: "Новая социально-экономическая политика",
      },
      { hid: "og_image", name: "og:image", content: "/favicon.png" },
      { hid: "og_url", name: "og:url", content: "http://nep.csi.kz/" },
      {
        hid: "og_site_name",
        name: "og:site_name",
        content: "http://nep.csi.kz/",
      },
      {
        hid: "twitter_card",
        name: "twitter:card",
        content: "Новая социально-экономическая политика",
      },
      {
        hid: "twitter_domain",
        name: "twitter:domain",
        content: "newaeon.tech",
      },
      { hid: "twitter_title", name: "twitter:title", content: "NEP" },
      {
        hid: "twitter_description",
        name: "twitter:description",
        content: "Новая социально-экономическая политика",
      },
      {
        hid: "twitter_image",
        name: "twitter:image",
        content: "http://nep.csi.kz/logo.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n", "@nuxtjs/axios", "@nuxtjs/proxy", "@nuxt/http"],
  axios: {
    proxy: true,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  },
  http: {
    // proxyHeaders: false
    proxy: true,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  },

  proxy: {
    "/api/": {
      target: "https://api.tulga.pro",
      pathRewrite: { "^/api/": "" },
      changeOrigin: true,
    },
  },
  i18n: {
    locales: ["en", "ru", "kz"],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en,
        ru,
        kz,
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
