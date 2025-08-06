<script setup lang="ts">
const route = useRoute()

// Use API to fetch the specific blog post
const { data: blogData } = await useFetch('/api/blog')
const post = computed(() => {
  if (!blogData.value?.posts) return null
  return blogData.value.posts.find(p => p._path === route.path)
})

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
})
</script>

<template>
  <v-layout>
    <v-main>
      <v-container class="py-8">
        <!-- Navigation -->
        <v-btn
          to="/blog"
          variant="text"
          prepend-icon="mdi-arrow-left"
          class="mb-6"
        >
          Back to Blog
        </v-btn>

        <!-- Article Header -->
        <article>
          <header class="mb-8">
            <div class="d-flex align-center mb-4">
              <v-chip
                :color="
                  post.category === 'news' ? 'primary' :
                  post.category === 'misc' ? 'secondary' : 'accent'
                "
                variant="outlined"
              >
                {{ post.category }}
              </v-chip>
              <v-spacer />
              <span class="text-body-2 text-medium-emphasis">
                {{ formatDate(post.publishedAt) }}
              </span>
            </div>
            
            <h1 class="text-h3 mb-4 tk-gravesend-sans text-main">
              {{ post.title }}
            </h1>
            
            <p class="text-h6 text-medium-emphasis mb-4">
              {{ post.description }}
            </p>
            
            <div class="d-flex align-center">
              <v-avatar size="32" class="me-2">
                <v-icon>mdi-account</v-icon>
              </v-avatar>
              <span class="text-body-2">{{ post.author }}</span>
            </div>
          </header>

          <!-- Article Content -->
          <v-card variant="outlined" class="pa-6">
            <div class="prose">
              <div v-html="post.body?.replace(/\\n/g, '<br>').replace(/^# /gm, '<h1>').replace(/^## /gm, '<h2>').replace(/^### /gm, '<h3>').replace(/- \*\*(.*?)\*\*:/g, '<li><strong>$1</strong>:</li>')"></div>
            </div>
          </v-card>
        </article>

        <!-- Navigation -->
        <div class="d-flex justify-space-between mt-8">
          <v-btn
            to="/blog"
            variant="outlined"
            prepend-icon="mdi-arrow-left"
          >
            Back to Blog
          </v-btn>
          
          <v-btn
            to="/"
            variant="outlined"
            append-icon="mdi-home"
          >
            Home
          </v-btn>
        </div>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped lang="scss">
.prose {
  :deep(h1) {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 2rem;
    
    &:first-child {
      margin-top: 0;
    }
  }
  
  :deep(h2) {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
    margin-top: 1.5rem;
  }
  
  :deep(h3) {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }
  
  :deep(p) {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  :deep(ul), :deep(ol) {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.25rem;
    }
  }
  
  :deep(blockquote) {
    border-left: 4px solid rgb(var(--v-theme-primary));
    padding-left: 1rem;
    margin: 1rem 0;
    font-style: italic;
  }
  
  :deep(code) {
    background-color: rgb(var(--v-theme-surface-variant));
    padding: 0.125rem 0.25rem;
    border-radius: 0;
    font-size: 0.875rem;
  }
  
  :deep(pre) {
    background-color: rgb(var(--v-theme-surface-variant));
    padding: 1rem;
    border-radius: 0;
    overflow-x: auto;
    margin: 1rem 0;
    
    code {
      background: none;
      padding: 0;
    }
  }
}
</style>