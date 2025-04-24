<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  tags: string[];
}>();
</script>

<template>
  <v-card variant="text" class="art-card">
    <v-card-title class="art-title tk-gravesend-sans font-weight-500 pb-0">
      <span>{{ title }}</span>
    </v-card-title>
    <v-card-subtitle class="art-tags d-flex">
      <div v-for="tag in tags" :key="tag" class="mr-2 rounded">#{{ tag }}</div>
    </v-card-subtitle>
    <v-card-text class="art-desc">
      <span>{{ description }}</span>
    </v-card-text>
    <v-card-actions>
      <v-btn>Coming Soon</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
.art-card {
  border-radius: 0;
  padding-left: 3px;
  transition: background-color 0.3s ease;

  &::before {
    content: "";
    background: linear-gradient(
      to bottom,
      rgb(var(--v-theme-acc1)) 0%,
      rgb(var(--v-theme-acc1)) 10%,
      rgb(var(--v-theme-main)) 10%,
      rgb(var(--v-theme-main)) 90%,
      rgb(var(--v-theme-acc2)) 90%,
      rgb(var(--v-theme-acc2)) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    clip-path: polygon(0 3px, 100% 0, 100% calc(100% - 3px), 0 100%);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
}
.art-desc {
  border-bottom: 0.5px solid #333;
}
</style>
