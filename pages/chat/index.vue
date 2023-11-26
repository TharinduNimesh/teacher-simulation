<script setup>
const color = useColorMode();

color.preference = "dark";
</script>

<template>
  <div class="w-full h-screen flex bg-slate-200 dark:bg-[#202124] overflow-hidden">
    <AppSideBar />
  </div>
</template>

