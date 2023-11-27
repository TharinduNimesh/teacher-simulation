<script setup>
const props = defineProps(["label", "icon", "placeholder", "type", "modelValue"]);

const displayType = ref(props.type);

const isPassword = computed(() => props.type === "password");

const togglePassword = () => {
  displayType.value = displayType.value === "password" ? "text" : "password";
};
</script>

<template>
  <div class="w-full mt-5">
    <label
      class="block text-sm mb-1 mx-2 uppercase text-gray-500 dark:text-slate-400"
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
        class="w-full h-10 bg-transparent rounded border px-3 py-2 outline-none border-gray-400 placeholder:text-gray-500 dark:border-slate-500 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-500 duration-300"
        :class="{
          'pr-10': isPassword,
          'pl-10': icon != null,
        }"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
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
          v-else
        />
      </div>
    </div>
  </div>
</template>

<style></style>
