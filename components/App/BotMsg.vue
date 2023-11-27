<script setup>
defineProps(["message"]);
</script>

<template>
  <div class="flex justify-start items-start gap-5 mt-2">
    <img src="/images/logo.png" alt="Jennie" class="w-8" />
    <div
      class="bot-chat relative min-w-[40%] px-5 py-3 max-w-[80%] text-gray-700 dark:text-slate-300 bg-[#ebefff] dark:bg-[#0a0c14] self-start duration-300 rounded-r-lg rounded-bl-lg shadow-lg"
      :style="`--corner-image: url('/images/bot-chat-corner-${$colorMode.preference}.png');`"
    >
      {{ message }}
    </div>
  </div>
</template>

<style scoped>
.bot-chat::before {
  content: "";
  position: absolute;
  top: 0;
  left: -10px;
  width: 10px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: var(--corner-image);
}
</style>
