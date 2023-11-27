<script setup>
defineProps(['title', 'isActive'])
</script>

<template>
  <NuxtLink
    to="/chat/1"
    class="relative w-full flex px-3 py-3 justify-between items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-[#111217] rounded duration-300 overflow-hidden"
    :class="{
      'chat-dark': $colorMode.preference === 'dark',
      'chat-light': $colorMode.preference === 'light',
    }"
  >
    <div class="flex items-center gap-2">
      <span class="whitespace-nowrap">
        {{ title }}
      </span>
    </div>
  </NuxtLink>
</template>

<style scoped>
.chat-dark::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #090a0d);
}

.chat-light::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #f1f5f9);
}
</style>