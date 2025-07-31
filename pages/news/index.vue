<script setup lang="ts">
useHead({
  title: "News",
});

type NewsArticle = {
  title: string;
  date: string;
  tags: string[];
  description: string;
  content: string;
};

const newsArticles = [
  {
    title: "Nanostudio Alpha Release",
    date: "2025-01-15",
    tags: ["Product Launch", "AI", "Platform"],
    description: "We're excited to announce the alpha release of Nanostudio, our self-contained AI development environment.",
    content: "After months of development, we're thrilled to share the first public alpha of Nanostudio. This revolutionary platform brings together cutting-edge AI tools in a unified development environment, making it easier than ever to build, test, and deploy AI-powered applications."
  },
  {
    title: "Hikari Wins International Tetris Championship",
    date: "2025-01-10",
    tags: ["Achievement", "AI", "Competition"],
    description: "Our competitive Tetris bot Hikari has achieved first place in the International AI Gaming Championship.",
    content: "Hikari's advanced decision-making algorithms and real-time optimization capabilities proved superior against competitors from around the world. This victory showcases the potential of our AI research and development efforts."
  },
  {
    title: "Partnership with Tech Innovation Labs",
    date: "2025-01-05",
    tags: ["Partnership", "Innovation"],
    description: "Nanoseil announces strategic partnership to accelerate haptic technology development.",
    content: "We're partnering with Tech Innovation Labs to advance our haptic technology projects, including Crocotile and Tangiblr. This collaboration will bring additional expertise and resources to our ambitious hardware initiatives."
  },
  {
    title: "Nanowriter 2.0 Beta Launch",
    date: "2024-12-20",
    tags: ["Product Update", "AI", "Writing"],
    description: "Enhanced AI writing assistant with improved natural language processing and collaborative features.",
    content: "The new version of Nanowriter includes advanced context understanding, multi-language support, and real-time collaboration tools. Beta users have reported 40% improvement in writing efficiency and quality."
  },
  {
    title: "Team Expansion: Welcome New Developers",
    date: "2024-12-15",
    tags: ["Team", "Growth"],
    description: "Nanoseil welcomes five new talented developers to accelerate project development.",
    content: "Our growing team now includes specialists in machine learning, haptic technology, and full-stack development. This expansion will help us deliver on our ambitious roadmap for 2025."
  }
] as const satisfies NewsArticle[];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};
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
              class="news-card h-100 d-flex flex-column"
              variant="outlined"
              hover
            >
              <v-card-title class="text-h5 tk-gravesend-sans">
                {{ article.title }}
              </v-card-title>
              
              <v-card-subtitle class="text-caption text-medium-emphasis">
                {{ formatDate(article.date) }}
              </v-card-subtitle>

              <v-card-text class="flex-grow-1">
                <div class="mb-3">
                  <v-chip
                    v-for="tag in article.tags"
                    :key="tag"
                    size="small"
                    class="me-2 mb-1"
                    variant="outlined"
                  >
                    {{ tag }}
                  </v-chip>
                </div>
                
                <p class="text-body-2 mb-3">
                  {{ article.description }}
                </p>
                
                <p class="text-body-2 text-medium-emphasis">
                  {{ article.content }}
                </p>
              </v-card-text>

              <v-card-actions class="pt-0">
                <v-spacer></v-spacer>
                <v-btn
                  variant="text"
                  size="small"
                  class="text-acc1"
                >
                  Read More
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss">
.news-card {
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
  }
}

.border-b {
  border-bottom: 1px solid rgb(var(--v-theme-surface-variant));
}
</style>