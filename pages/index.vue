<script setup>
useHead({
  title: "Login | Jennie - Virtual Learning Assistant",
  meta: [
    {
      name: "description",
      content:
        "Meet Jennie, your virtual learning companion! Elevate your academic journey with personalized guidance, interactive lessons, and instant support. Empowering Sri Lankan students for success in every study session.",
    },
  ],
});

</script>

<template>
  <div
    class="w-full min-h-screen bg-cover bg-center flex"
    :style="`background-image: url(/images/${$colorMode.preference}-background.png)`"
  >
    <div
      class="w-full md:w-1/2 min-h-full flex justify-center items-center p-5"
    >
      <div
        class="w-full md:w-2/3 md:min-w-[300px] md:max-w-[400px] bg-[#f0f7ff99] backdrop-blur-md text-gray-800 dark:bg-[#090d1266] dark:text-slate-100 flex flex-col rounded-lg shadow-lg p-5 gap-3 duration-300"
      >
        <div class="w-full flex flex-col items-center text-center">
          <h1 class="uppercase font-bold text-2xl">Welcome Back</h1>
          <p class="text-sm text-gray-500 dark:text-slate-300">
            Sign in to your account
          </p>
          <img
            class="w-1/2 max-w-[160px] mt-4 md:hidden"
            src="/images/logo.png"
            alt="Bot"
          />
        </div>
        <FormLogin />
      </div>
    </div>
    <div
      class="hidden md:flex flex-col md:w-1/2 min-h-full bg-[#f7faff55] dark:bg-[#1f293755] rounded-l backdrop-blur-lg justify-center items-center duration-300"
    >
      <div class="flex flex-col justify-center items-center w-2/3 gap-3">
        <img class="w-1/2 max-w-[400px]" src="/images/logo.png" alt="Bot" />
        <h2
          class="text-2xl font-bold text-center uppercase text-slate-800 dark:text-slate-100"
        >
          Elevate Learning, Sri Lanka's Way !
        </h2>
        <p class="text-md text-center text-slate-500 dark:text-slate-300">
          Introducing Jennie, your academic ally! With Jennie's personalized
          tutoring and interactive lessons, learning becomes a joy. Instant
          support and tailored guidance redefine education for Sri Lankan
          students, ensuring success in every study endeavor.
        </p>
      </div>
    </div>
  </div>
</template>
