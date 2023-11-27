<script setup>
const messages = ref([1]);

const sidebar = useSideBar();

function toggleSidebar() {
  sidebar.value = !sidebar.value;
}

const isWelcome = computed(() => {
  return messages.value.length === 0;
});
useColorMode().preference = "dark";
</script>

<template>
  <div
    class="w-full h-screen flex bg-slate-200 dark:bg-[#18191f] overflow-hidden"
  >
    <AppSideBar />
    <div class="flex-1 flex flex-col gap-5">
      <div class="w-full flex flex-col md:hidden">
        <div class="flex justify-between items-center px-3">
          <div
            class="w-10 h-10 my-2 rounded-full bg-slate-100 dark:bg-gray-800 flex justify-center items-center cursor-pointer"
            @click="toggleSidebar"
          >
            <Icon name="ic:baseline-menu" class="text-2xl" />
          </div>
          <span class="text-gray-700 dark:text-slate-300 font-bold">New Chat</span>
        </div>
        <hr class="h-1 w-full bg-gray-400 dark:bg-gray-700 duration-300" />
      </div>
      <div
        class="w-full h-5/6 flex flex-col gap-5 px-10 overflow-y-scroll"
        :class="{
          'justify-center': isWelcome,
        }"
      >
        <div
          v-show="isWelcome"
          class="flex flex-col justify-center items-center"
        >
          <img src="/images/logo.png" alt="chatting" class="w-20" />
          <h1 class="text-2xl font-bold text-gray-700 dark:text-white mt-4">
            How Can I Help You Today ?
          </h1>
        </div>
        <div v-show="!isWelcome" class="pt-10 gap-2">
          <div
            v-for="msg in 1"
            :key="msg"
            class="flex justify-start items-start gap-5 mt-2"
          >
            <img src="/images/logo.png" alt="Jennie" class="w-8" />
            <div
              class="bot-chat relative min-w-[40%] px-5 py-3 max-w-[80%] text-gray-700 dark:text-slate-300 bg-[#ebefff] dark:bg-[#0a0c14] self-start duration-300 rounded-r-lg rounded-bl-lg shadow-lg"
              :style="`--corner-image: url('/images/bot-chat-corner-${$colorMode.preference}.png');`"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eaque fugiat incidunt similique ratione dolorem temporibus,
              cumque, sint, voluptates est nesciunt aliquam sequi architecto at
              aspernatur eveniet nisi corporis magni!
            </div>
          </div>

          <div
            v-for="msg in 1"
            :key="msg"
            class="flex justify-end items-start gap-5 mt-2"
          >
            <div
              class="client-chat relative min-w-[40%] px-5 py-3 max-w-[80%] bg-blue-700 text-slate-100 self-start duration-300 rounded-l-lg rounded-br-lg shadow-lg"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              eaque fugiat incidunt similique ratione dolorem temporibus,
              cumque, sint, voluptates est nesciunt aliquam sequi architecto at
              aspernatur eveniet nisi corporis magni!
            </div>
            <img src="/images/user.avif" alt="User" class="w-8 rounded-full" />
          </div>
        </div>
      </div>
      <div
        class="w-full min-h-[100px] h-1/6 flex flex-col gap-1 px-10 justify-end pb-2 bg-slate-200 dark:bg-[#18191f]"
      >
        <div class="relative h-fit w-full flex items-center">
          <input
            type="text"
            class="w-full h-12 bg-transparent rounded border px-3 py-2 outline-none border-gray-400 placeholder:text-gray-500 dark:border-slate-500 dark:placeholder:text-slate-500 focus:border-blue-500 dark:focus:border-blue-500 duration-300"
            placeholder="Type your message here..."
          />
          <div
            class="absolute h-12 w-12 flex justify-center items-center right-0 cursor-pointer"
          >
            <Icon name="ic:baseline-send" class="text-2xl" />
          </div>
        </div>
        <div class="w-full text-center">
          <p class="text-gray-500 dark:text-gray-400 text-sm">
            Jennie is a learning assistant, that powered By
            <span class="font-semibold">Eversoft IT Solutions</span>.
          </p>
        </div>
      </div>
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
