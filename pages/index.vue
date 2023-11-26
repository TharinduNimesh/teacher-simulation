<script setup>
const isDark = inject("isDark");
const theme = computed(() => (isDark.value ? "dark" : "light"));
</script>

<template>
  <div
    class="w-full min-h-screen bg-cover bg-center flex"
    :style="`background-image: url(/images/${theme}-background.png)`"
  >
    <div
      class="w-full md:w-1/2 min-h-full flex justify-center items-center p-5"
    >
      <div
        class="w-full md:w-2/3 md:min-w-[300px] md:max-w-[400px] flex flex-col rounded shadow-lg p-5 gap-3 duration-300"
        :class="{
          'bg-slate-50 text-gray-800': !isDark,
          'bg-slate-900 text-slate-100': isDark,
        }"
      >
        <div class="w-full flex flex-col items-center text-center">
          <h1 class="uppercase font-bold text-2xl">Welcome Back</h1>
          <p
            class="text-sm"
            :class="{
              'text-gray-500': !isDark,
              'text-slate-300': isDark,
            }"
          >
            Sign in to your account
          </p>
          <img
            class="w-1/2 max-w-[160px] mt-4 md:hidden"
            src="/images/auth-bot.png"
            alt="Bot"
          />
        </div>
        <FormLogin />
      </div>
    </div>
    <div
      class="hidden md:flex flex-col md:w-1/2 min-h-full rounded-l backdrop-blur-lg justify-center items-center duration-300"
      :class="{
        'bg-[#f7faff55]': !isDark,
        'bg-[#1f293755]': isDark,
      }"
    >
      <div class="flex flex-col justify-center items-center w-2/3 gap-3">
        <img class="w-1/2 max-w-[400px]" src="/images/auth-bot.png" alt="Bot" />
        <h2
          class="text-2xl font-bold text-center uppercase"
          :class="{
            'text-slate-800': !isDark,
            'text-slate-100': isDark,
          }"
        >
          Elevate Learning, Sri Lanka's Way !
        </h2>
        <p
          class="text-md text-center"
          :class="{
            'text-slate-500': !isDark,
            'text-slate-300': isDark,
          }"
        >
          Revolutionize education in Sri Lanka with our Simulated Teacher app
          and Alexa-like device. Personalized, interactive, and empowering—the
          future of learning is here, at your fingertips.
        </p>
      </div>
    </div>
  </div>
</template>
