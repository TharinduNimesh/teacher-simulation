<script setup>
const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("dark", isDark.value);
};

const theme = computed(() => isDark.value);

provide("isDark", theme);

onMounted(() => {
  const dark = JSON.parse(localStorage.getItem("dark"));
  if (dark === null) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      isDark.value = true;
    } else {
      isDark.value = false;
    }
  } else {
    if (dark) {
      isDark.value = dark;
    }
  }
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
