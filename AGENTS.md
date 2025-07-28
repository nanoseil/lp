# Agent Instructions for Nanoseil Landing Page

## Build/Test/Lint Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build
- No lint/test commands configured - suggest adding if needed

## Code Style Guidelines

### Vue/Nuxt Conventions
- Use `<script setup lang="ts">` with TypeScript
- Define props with `defineProps<{}>()` interface syntax
- Use Composition API patterns
- Import components auto-resolved by Nuxt

### Styling
- Use `<style scoped lang="scss">` for component styles
- Follow BEM-like naming: `.art-card`, `.art-title`, `.art-desc`
- Use Vuetify CSS variables: `rgb(var(--v-theme-acc1))`
- Animations with descriptive names: `.slide-in-left`, `.slide-in-right`

### General Conventions
- No linting configured - maintain existing patterns
- Use double quotes in templates, imports
- Kebab-case for CSS classes and component names
- Descriptive variable names: `tags`, `description`, `title`