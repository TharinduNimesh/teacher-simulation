<script setup>
defineProps({
  text: String,
  styles: String,
  colors: {
    type: String,
    default: "bg-blue-500 hover:bg-blue-600 disabled:hover:bg-blue-500",
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    type="button"
    class="px-7 py-2 rounded uppercase font-semibold shadow duration-300 text-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="`${colors} ${styles}`"
    @click="$emit('clicked', $event)"
    :disabled="loading"
  >
    <Icon v-show="loading" name="mingcute:loading-3-fill" class="animate-spin mx-4" />
    {{ text }}
  </button>
</template>

<style></style>
