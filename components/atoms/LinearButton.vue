<template>
  <button
    class="linear-button"
    :class="{ disabled: disabled }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "LinearButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
};
</script>

<style scoped>
.linear-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: 1px solid #333;
  background-color: transparent;
  color: #333;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.linear-button:hover {
  background-color: #333;
  color: white;
}

.linear-button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
