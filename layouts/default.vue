<script setup lang="ts">
import type { TransitionProps } from "vue";
import Logo from "~/public/logo.svg";

definePageMeta({
  layout: "default",
});

useHead({
  titleTemplate(titleChunk) {
    if (titleChunk) {
      return `${titleChunk} - Nanoseil`;
    }

    return "Nanoseil: Edge innovations, in our hands.";
  },
});

const transition: TransitionProps = {
  name: "anim",
  mode: "out-in",
  appear: true,
  onEnter(el, done) {
    console.log("enter", el);
    done();
  },
};
</script>

<template>
  <v-responsive class="border rounded">
    <v-app>
      <v-app-bar :elevation="0" class="border-b">
        <v-row justify="center" tag="nav">
          <v-col
            cols="auto"
            class="d-flex align-center tk-gravesend-sans font-weight-300"
          >
            <div class="p-2">
              <nuxt-link custom to="/" v-slot="{ navigate }">
                <v-btn @click="navigate" variant="text" href="/">
                  <Logo class="logo" />
                </v-btn>
              </nuxt-link>
            </div>
            <v-divider vertical class="mx-4" />
            <div class="d-flex align-center">
              <nuxt-link custom to="/projects" v-slot="{ navigate }">
                <v-btn @click="navigate" variant="text" href="/projects"
                  >Projects</v-btn
                >
              </nuxt-link>
              <nuxt-link custom to="/artifacts" v-slot="{ navigate }">
                <v-btn @click="navigate" variant="text" href="/artifacts"
                  >Artifacts</v-btn
                >
              </nuxt-link>
              <nuxt-link custom to="/characters" v-slot="{ navigate }">
                <v-btn @click="navigate" variant="text" href="/characters"
                  >Characters</v-btn
                >
              </nuxt-link>
            </div>
            <v-divider vertical class="mx-4" />
            <nuxt-link custom to="/" v-slot="{ navigate }">
              <v-btn @click="navigate" variant="text" href="/" disabled
                >Nanostream</v-btn
              >
            </nuxt-link>
          </v-col>
        </v-row>
      </v-app-bar>

      <v-main>
        <nuxt-page :transition="transition" />
      </v-main>

      <v-divider />
      <v-footer class="py-4">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <p class="text-h4 font-weight-light tk-gravesend-sans">
                <Logo class="logo" />
                Nanoseil
              </p>
            </v-col>
            <v-col cols="12" md="8" class="d-flex justify-end align-end">
              <p class="text-caption">© 2025 Nanoseil. All rights reserved.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<style scoped lang="scss">
.logo {
  height: 2em;
  vertical-align: middle;
}
</style>
