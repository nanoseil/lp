# AGENTS.md - Nanoseil Landing Page

## Build/Test/Lint Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm generate` - Generate static site
- `pnpm preview` - Preview production build
- No lint/test scripts configured - suggest adding to package.json if needed

## Code Style Guidelines

### Vue/Nuxt Components
- Use `<script setup lang="ts">` with TypeScript
- Define props with `defineProps<{}>()` syntax
- Use Vuetify components (v-card, v-btn, v-layout, etc.)
- Import SVGs using vite-svg-loader: `import Logo from "~/public/logo.svg"`

### Styling
- Use scoped SCSS: `<style scoped lang="scss">`
- CSS custom properties with Vuetify theme: `rgb(var(--v-theme-acc1))`
- Use tk-gravesend-sans font class for typography
- Animations with CSS keyframes for slide-in effects

### TypeScript
- Extends Nuxt's built-in TypeScript config
- Use @nuxtjs/i18n types
- Strict typing for component props and interfaces