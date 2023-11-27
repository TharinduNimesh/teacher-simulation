<script setup>
useHead({
  title: "Register | Jennie - Virtual Learning Assistant",
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
    class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5"
    :style="`background-image: url(/images/${$colorMode.preference}-background.png)`"
  >
    <div
      class="bg-gray-100 dark:bg-[#090d1266] text-gray-500 rounded-3xl shadow-xl w-full max-w-[1000px] overflow-hidden"
    >
      <div class="md:flex w-full">
        <div
          class="hidden md:flex flex-col gap-5 justify-between items-center w-1/2 bg-[#e3e8ff55] dark:bg-[#090d1277] py-10 px-10"
        >
          <h2
            class="text-2xl text-gray-700 dark:text-slate-300 font-bold text-center"
          >
            Join the Learning Revolution with Jennie!
          </h2>
          <img
            src="/images/register-bot.png"
            alt="Jennie"
            class="w-2/3 max-w-[400px]"
          />
          <div class="w-4/5">
            <p class="text-center text-sm">
              Unlock a world of personalized education. Register now to access
              Jennie, your virtual learning companion, and embark on a journey
              to academic excellence!
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900 dark:text-gray-50">
              REGISTER
            </h1>
            <p>Enter your information to register</p>
          </div>
          <FormRegister />
        </div>
      </div>
    </div>
  </div>
</template>
