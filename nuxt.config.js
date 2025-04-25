import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  compatibilityDate: "2024-09-25",
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxt/content",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  vite: {
    plugins: [svgLoader()],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  i18n: {
    locales: [
      { code: "en", iso: "en-US" },
      { code: "ja", iso: "ja-JP" },
    ],
    defaultLocale: "en",
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/qys6mzt.css",
          tagPosition: "bodyOpen",
        },
        // favicon
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
          sizes: "any",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/logo.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/manifest.webmanifest",
        },
      ],
    },
  },
});
