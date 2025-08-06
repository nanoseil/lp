<script setup lang="ts">
// Simple approach - use the global queryContent composable
const { data: contentData } = await useAsyncData('blog-content', async () => {
  // Use server-side only content fetching  
  if (process.server) {
    try {
      // Try using the global queryContent composable
      const content = await queryContent().find()
      return content
    } catch (error) {
      console.error('Error querying content:', error)
      return []
    }
  }
  return []
})

// Filter only blog posts
const blogPosts = computed(() => {
  return contentData.value?.filter(post => 
    post._path?.includes('/blog/') || post._path?.includes('test-blog')
  ) || []
})

// Group posts by category
const categories = ['news', 'misc', 'others']
const selectedCategory = ref('all')

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'all') {
    return blogPosts.value || []
  }
  return blogPosts.value?.filter(post => post.category === selectedCategory.value) || []
})

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <v-layout>
    <v-main>
      <v-container class="py-8">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-h2 mb-4 tk-gravesend-sans text-main">
            <span class="text-acc1">B</span>lo<span class="text-acc2">g</span>
          </h1>
          <p class="text-h6 text-medium-emphasis">
            Insights, updates, and thoughts from the Nanoseil team.
          </p>
        </div>

        <!-- Category Filter -->
        <v-card variant="outlined" class="mb-6">
          <v-card-text>
            <v-btn-toggle
              v-model="selectedCategory"
              variant="outlined"
              divided
              mandatory
            >
              <v-btn value="all" class="text-capitalize">
                All
              </v-btn>
              <v-btn value="news" class="text-capitalize">
                News
              </v-btn>
              <v-btn value="misc" class="text-capitalize">
                Misc
              </v-btn>
              <v-btn value="others" class="text-capitalize">
                Others
              </v-btn>
            </v-btn-toggle>
          </v-card-text>
        </v-card>

        <!-- Blog Posts -->
        <v-row>
          <v-col
            v-for="post in filteredPosts"
            :key="post._path"
            cols="12"
            md="6"
            lg="4"
          >
            <v-card
              :to="post._path"
              hover
              class="h-100 d-flex flex-column"
              variant="outlined"
            >
              <v-card-text class="flex-grow-1">
                <div class="d-flex align-center mb-2">
                  <v-chip
                    :color="
                      post.category === 'news' ? 'primary' :
                      post.category === 'misc' ? 'secondary' : 'accent'
                    "
                    size="small"
                    variant="outlined"
                  >
                    {{ post.category }}
                  </v-chip>
                  <v-spacer />
                  <span class="text-caption text-medium-emphasis">
                    {{ formatDate(post.publishedAt) }}
                  </span>
                </div>
                
                <h3 class="text-h6 mb-2 text-high-emphasis">
                  {{ post.title }}
                </h3>
                
                <p class="text-body-2 text-medium-emphasis">
                  {{ post.description }}
                </p>
              </v-card-text>
              
              <v-card-actions>
                <v-spacer />
                <v-btn
                  variant="text"
                  size="small"
                  :to="post._path"
                >
                  Read More
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Debug info -->
        <div v-if="contentData" class="mt-4 pa-4" style="background: #f5f5f5; border-radius: 8px;">
          <h4>Debug: Total posts found: {{ contentData.length }}</h4>
          <h4>Blog posts: {{ blogPosts.length }}</h4>
          <h4>Filtered posts: {{ filteredPosts.length }}</h4>
          <pre>{{ JSON.stringify(contentData.map(p => ({ path: p._path, title: p.title, category: p.category })), null, 2) }}</pre>
        </div>

        <!-- Empty State -->
        <div v-if="filteredPosts.length === 0" class="text-center py-8">
          <v-icon size="64" color="medium-emphasis" class="mb-4">
            mdi-post-outline
          </v-icon>
          <h3 class="text-h6 mb-2">No posts found</h3>
          <p class="text-body-2 text-medium-emphasis">
            Check back later for new content!
          </p>
        </div>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">
.v-btn-toggle {
  border-radius: 8px;
}
</style>