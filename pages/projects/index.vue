<script setup lang="ts">
type Project = {
  title: string;
  tags: string[];
  description: string;
};

const projects = [
  {
    title: "Hikari",
    tags: ["Compute"],
    description: "Competitive Tetris Bot",
  },
  {
    title: "Crocotile",
    tags: ["Haptics"],
    description: "2D Force-Feedback Trackball",
  },
  {
    title: "Tangiblr",
    tags: ["Haptics"],
    description: "Tangible Social Media",
  },
  {
    title: "Nanostream",
    tags: ["Media"],
    description: "Our official YouTube channel",
  },
  {
    title: "Nanowriter",
    tags: ["AI", "Utility"],
    description: "AI-driven writing assistant",
  },
  {
    title: "Achievementer",
    tags: ["AI", "Work Efficiency"],
    description: "Task and project management tool",
  },
  {
    title: "Nodev",
    tags: ["AI"],
    description: "Graph-AI codegen",
  },
] as const satisfies Project[];
</script>

<template>
  <div>
    <v-container class="border-b my-8">
      <h1 class="tk-gravesend-sans my-16 text-h1 font-weight-thin">Projects</h1>
    </v-container>
    <v-sheet>
      <v-container>
        <v-row>
          <v-col
            v-for="(project, index) in projects"
            :key="index"
            class="art-list"
            cols="12"
            md="4"
          >
            <ArtCard
              :title="project.title"
              :description="project.description"
              :tags="project.tags"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<style scoped lang="scss">
.nsdot {
  position: relative;
  padding-left: 40px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgb(var(--v-theme-acc1)) 0%,
      rgb(var(--v-theme-acc1)) 50%,
      rgb(var(--v-theme-acc2)) 50%,
      rgb(var(--v-theme-acc2)) 100%
    );
  }
}
</style>
