<script setup lang="ts">
useHead({
  title: "News",
});

type NewsArticle = {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
};

const newsArticles = [
  {
    title: "Nanostudio Alpha Release",
    date: "2024-12-15",
    excerpt: "We're excited to announce the alpha release of Nanostudio, our self-contained AI development environment.",
    tags: ["Release", "AI", "Platform"],
  },
  {
    title: "Hikari Wins Regional Tetris Championship",
    date: "2024-11-28",
    excerpt: "Our competitive Tetris bot achieved first place in the regional AI gaming competition.",
    tags: ["AI", "Gaming", "Achievement"],
  },
  {
    title: "Crocotile Hardware Update",
    date: "2024-11-10",
    excerpt: "Major improvements to force-feedback precision and haptic response in our 2D trackball prototype.",
    tags: ["Hardware", "Haptics", "Update"],
  },
  {
    title: "Team Expansion Announcement",
    date: "2024-10-22",
    excerpt: "Nanoseil is growing! We're welcoming three new team members to help push the boundaries of innovation.",
    tags: ["Team", "Growth"],
  },
  {
    title: "Tangiblr Beta Testing Begins",
    date: "2024-10-05",
    excerpt: "Early access beta testing for our tangible social media platform is now available to select users.",
    tags: ["Beta", "Social Media", "Haptics"],
  },
  {
    title: "Nanowriter AI Model Update",
    date: "2024-09-18",
    excerpt: "Enhanced language model capabilities and improved writing suggestions in our AI-driven writing assistant.",
    tags: ["AI", "Update", "Writing"],
  },
] as const satisfies NewsArticle[];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
</script>

<template>
  <div>
    <v-container class="border-b my-8">
      <h1 class="tk-gravesend-sans my-16 text-h1 font-weight-thin">News</h1>
    </v-container>
    <v-sheet>
      <v-container>
        <v-row>
          <v-col
            v-for="(article, index) in newsArticles"
            :key="index"
            cols="12"
            md="6"
            lg="4"
            class="mb-6"
          >
            <v-card
              class="h-100 d-flex flex-column"
              variant="outlined"
              color="dim"
            >
              <v-card-title class="text-h5 tk-gravesend-sans text-main">
                {{ article.title }}
              </v-card-title>
              <v-card-subtitle class="text-caption text-main opacity-75">
                {{ formatDate(article.date) }}
              </v-card-subtitle>
              <v-card-text class="flex-grow-1">
                <p class="text-body mb-4">{{ article.excerpt }}</p>
                <div class="d-flex flex-wrap gap-1">
                  <v-chip
                    v-for="tag in article.tags"
                    :key="tag"
                    size="small"
                    variant="outlined"
                    color="acc1"
                  >
                    {{ tag }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss">
.v-card {
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
  }
}
</style>