// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          colors: {
            main: "#465258",
            acc1: "#b7589d",
            acc2: "#3d92b4",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
