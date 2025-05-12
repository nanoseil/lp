// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

// Detect if the OS is in dark mode
const isDarkMode =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: isDarkMode ? "dark" : "light",
      themes: {
        light: {
          colors: {
            main: "#465258",
            dim: "#eceff1",
            acc1: "#b7589d",
            acc2: "#3d92b4",
          },
        },
        dark: {
          colors: {
            main: "#f2f2f2",
            dim: "#22201e",
            acc1: "#b7589d",
            acc2: "#3d92b4",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
