<script setup>
const props = defineProps(["label", "icon", "placeholder", "type"]);
const isDark = inject("isDark");

const displayType = ref(props.type);

const isPassword = computed(() => props.type === "password");

const togglePassword = () => {
  displayType.value = displayType.value === "password" ? "text" : "password";
};
</script>

<template>
  <div class="w-full mt-5">
    <label
      class="block text-sm mb-1 mx-2 uppercase"
      :class="{
        'text-gray-500': !isDark,
        'text-slate-400': isDark,
      }"
      >{{ label }}</label
    >
    <div class="flex relative w-full">
      <div
        v-if="icon != null"
        class="absolute h-full w-10 flex justify-center items-center left-0"
        @click="togglePassword"
      >
        <Icon class="text-gray-500" :name="icon" />
      </div>
      <input
        :type="displayType"
        class="w-full h-10 bg-transparent rounded border px-3 py-2 outline-none focus:border-blue-500 duration-300"
        :class="{
          'border-gray-500 placeholder:text-gray-500': isDark,
          'border-slate-400 placeholder:text-slate-400': !isDark,
          'pr-10': isPassword,
          'pl-10': icon != null,
        }"
        :placeholder="placeholder"
      />
      <div
        v-if="isPassword"
        class="absolute h-full w-10 flex justify-center items-center right-0 cursor-pointer"
        @click="togglePassword"
      >
        <Icon
          class="text-gray-500"
          name="mdi:eye-outline"
          v-if="displayType === 'password'"
        />
        <Icon
          class="text-gray-500"
          name="mdi:eye-off-outline"
          v-if="displayType === 'text'"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
