<script setup>
defineProps({
  text: String,
  styles: String,
  colors: {
    type: String,
    default: "bg-blue-500 hover:bg-blue-600",
  },
});
</script>

<template>
  <button
    type="button"
    class="px-7 py-2 rounded uppercase font-semibold shadow duration-300 text-slate-100"
    :class="`${colors} ${styles}`"
    @click="$emit('clicked', $event)"
  >
    {{ text }}
  </button>
</template>

<style></style>
