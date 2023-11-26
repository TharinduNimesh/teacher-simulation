<script setup>
const id = useRoute().params.id;
</script>

<template>
  <div>
    <h1>{{ id }} Chat</h1>
    <NuxtLink to="/chat">New Chat</NuxtLink>
  </div>
</template>
