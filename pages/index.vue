<script setup lang="ts">
import Logo from "~/public/logo.svg";

// Fetch latest 3 blog posts via API
const { data: blogData } = await useFetch('/api/blog')
const latestPosts = computed(() => {
  const posts = blogData.value?.posts || []
  return posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 3)
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ja-JP', {
    month: 'short',
    day: 'numeric'
  })
}
</script>

<template>
  <v-layout>
    <v-main>
      <v-sheet class="hero" color="background">
        <v-container height="500px" class="d-flex flex-column justify-center">
          <h1
            class="name tk-gravesend-sans my-16 text-h1 font-weight-thin slide-in-left d-flex flex-column flex-sm-row align-center"
          >
            <Logo class="logo me-sm-2 mb-2 mb-sm-0" />
            <span class="text-h2 text-sm-h1 font-weight-thin tk-gravesend-sans"
              >Nanoseil</span
            >
          </h1>
          <h3
            class="text-end slide-in-right delayed font-weight-light tk-gravesend-sans"
          >
            Weaving ambitious projects into the fabric of reality.
          </h3>
        </v-container>
      </v-sheet>
      <v-sheet color="dim" class="py-8">
        <v-container>
          <v-row>
            <v-col cols="12" md="5" class="d-flex align-center">
              <h2
                class="text-h2 pb-4 border-b tk-gravesend-sans flex-grow-1 text-main"
              >
                Vi<span class="text-acc1">s</span>io<span class="text-acc2"
                  >n</span
                >
              </h2>
            </v-col>
            <v-col cols="12" md="7">
              <h4 class="text-h4 mb-4">Edge innovations, in our hands.</h4>
              <p class="text-body">
                We are a team of passionate individuals dedicated to pushing the
                boundaries of technology and creativity. Our mission is to
                transform innovative ideas into reality, creating impactful
                projects that inspire and empower.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      <v-sheet color="background" class="py-8">
        <v-container>
          <v-row>
            <v-col cols="12" md="5" class="d-flex align-center">
              <h2
                class="text-h2 pb-4 border-b tk-gravesend-sans flex-grow-1 text-main"
              >
                <span class="text-acc1">S</span>olutio<span class="text-acc2"
                  >n</span
                >s
              </h2>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      <v-sheet color="background" class="py-8">
        <v-container>
          <v-row>
            <v-col cols="12" md="5" class="d-flex align-center">
              <h2
                class="text-h2 pb-4 border-b tk-gravesend-sans flex-grow-1 text-main"
              >
                <span class="text-acc1">B</span>lo<span class="text-acc2">g</span>
              </h2>
            </v-col>
            <v-col cols="12" md="7">
              <div class="d-flex flex-column gap-4">
                <div
                  v-for="post in latestPosts"
                  :key="post._path"
                  class="d-flex align-center"
                >
                  <nuxt-link
                    :to="post._path"
                    class="text-decoration-none flex-grow-1"
                  >
                    <v-card
                      variant="outlined"
                      hover
                      class="pa-4"
                    >
                      <div class="d-flex align-center mb-2">
                        <v-chip
                          :color="
                            post.category === 'news' ? 'primary' :
                            post.category === 'misc' ? 'secondary' : 'accent'
                          "
                          size="x-small"
                          variant="outlined"
                        >
                          {{ post.category }}
                        </v-chip>
                        <v-spacer />
                        <span class="text-caption text-medium-emphasis">
                          {{ formatDate(post.publishedAt) }}
                        </span>
                      </div>
                      <h4 class="text-subtitle-1 mb-1">{{ post.title }}</h4>
                      <p class="text-body-2 text-medium-emphasis">
                        {{ post.description }}
                      </p>
                    </v-card>
                  </nuxt-link>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      <v-sheet color="dim" class="py-8">
        <v-container>
          <div class="d-flex justify-end">
            <nuxt-link custom to="/blog" v-slot="{ navigate }">
              <v-btn
                @click="navigate"
                class="text-h4 font-weight-light tk-gravesend-sans"
                variant="text"
                href="/blog"
              >
                More Posts <span aria-hidden="true">-></span>
              </v-btn>
            </nuxt-link>
          </div>
        </v-container>
      </v-sheet>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">
.logo {
  height: 2em;
  vertical-align: middle;
}
.art-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.border-b-nanoseil {
  position: relative;
  padding: 1px;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      rgb(var(--v-theme-acc1)) 0%,
      rgb(var(--v-theme-acc1)) 10%,
      rgb(var(--v-theme-main)) 10%,
      rgb(var(--v-theme-main)) 90%,
      rgb(var(--v-theme-acc2)) 90%,
      rgb(var(--v-theme-acc2)) 100%
    );
  }
}

.slide-in-left {
  animation: slide-in-left 0.5s ease-out;
  animation-fill-mode: both;
}
@keyframes slide-in-left {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-right {
  animation: slide-in-right 0.5s ease-out;
  animation-fill-mode: both;
}
@keyframes slide-in-right {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.delayed {
  animation-delay: 0.3s;
}
</style>
