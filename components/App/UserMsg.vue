<script setup>
defineProps(["message"]);
</script>

<template>
  <div class="flex justify-end items-start gap-5 mt-2">
    <div
      class="client-chat relative min-w-[40%] px-5 py-3 max-w-[80%] bg-blue-700 text-slate-100 self-start duration-300 rounded-l-lg rounded-br-lg shadow-lg"
    >
    {{ message }}
    </div>
    <img src="/images/user.avif" alt="User" class="w-8 rounded-full" />
  </div>
</template>

<style scoped>
.client-chat::before {
  content: "";
  position: absolute;
  top: 0;
  right: -10px;
  width: 10px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/images/client-chat-corner.png");
}
</style>
