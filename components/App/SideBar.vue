<script setup>
useHead({
  title: "Chat | Jennie - Virtual Learning Assistant",
});
const isInfoOpen = ref(false);
const isSidebarOpen = useSideBar();

const iconStyles = computed(() => {
  if (isSidebarOpen.value) {
    return {
      top: "rotate(20deg)",
      bottom: "rotate(-20deg)",
    };
  } else {
    return {
      top: "rotate(-20deg)",
      bottom: "rotate(20deg)",
    };
  }
});

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

onMounted(() => {
  window.addEventListener("click", (e) => {
    if (e.target.closest(".profile")) return;
    isInfoOpen.value = false;
  });
});

const { pending: isLoading, data: chats } = await useApiFetch("/chat");
</script>

<template>
  <div
    class="absolute z-50 md:static w-[250px] h-full flex flex-col justify-between bg-slate-100 dark:bg-[#090a0d] rounded-r-lg duration-300"
    :class="{
      '-ml-[250px]': !isSidebarOpen,
      'md:ml-0': isSidebarOpen,
    }"
  >
    <div
      class="absolute top-5 md:hidden -right-11 bg-slate-100 dark:bg-[#090a0d] w-10 h-10 rounded flex justify-center items-center cursor-pointer"
      :class="{
        hidden: !isSidebarOpen,
      }"
      @click="toggleSidebar"
    >
      <Icon name="material-symbols-light:close-rounded" class="text-2xl" />
    </div>
    <div class="h-4/5 overflow-y-scroll p-2">
      <div
        class="w-full flex px-3 py-2 justify-between items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-[#111217] rounded duration-300"
        @click="$router.push('/chat')"
      >
        <div class="flex items-center gap-2">
          <img class="w-10" src="/images/logo.png" alt="Bot" />
          <span class="font-semibold">New Chat</span>
        </div>
        <Icon class="text-xl" name="material-symbols:add-circle" />
      </div>
      <hr
        class="h-px my-5 bg-gray-400 border-0 dark:bg-gray-700 duration-300"
      />
      <span
        class="text-xs font-semibold text-gray-400 dark:text-gray-500 duration-300 mb-3"
      >
        Chats
      </span>
      <div class="flex flex-col gap-1">
        <AppChat
          v-for="chat in chats.chats"
          :key="chat.id"
          :title="chat.title"
          :unique-id="chat.id"
        />
      </div>
    </div>
    <div class="h-1/5 min-h-[100px] flex flex-col justify-end">
      <div
        class="w-full flex px-3 py-2 justify-between items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-[#111217] rounded duration-300"
      >
        <div class="flex items-center gap-2">
          <span class="font-semibold">Switch To Voice Mode</span>
        </div>
        <Icon name="material-symbols:switch-right-rounded" />
      </div>
      <div class="w-full relative">
        <div
          class="w-full flex flex-col h-[100px] origin-bottom absolute -top-[105px] rounded bg-slate-100 dark:bg-[#111217] duration-300 border border-gray-300 dark:border-gray-800"
          :class="{
            'scale-y-0 opacity-0': !isInfoOpen,
            'scale-y-100 opacity-100': isInfoOpen,
          }"
        >
          <div
            class="w-full h-1/2 flex justify-between items-center px-3 text-gray-500 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-[#181921] cursor-pointer"
          >
            <span>Settings</span>
            <Icon
              name="material-symbols:settings-outline-rounded"
              class="text-xl"
            />
          </div>
          <div
            class="w-full h-1/2 flex justify-between items-center px-3 text-gray-500 dark:text-gray-400 hover:bg-slate-200 dark:hover:bg-[#181921] cursor-pointer"
            @click="$router.push('/')"
          >
            <span>Log Out</span>
            <Icon name="material-symbols:logout" class="text-xl" />
          </div>
        </div>
        <div
          class="profile relative w-full flex px-3 py-2 justify-between items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-[#111217] rounded duration-300"
          @click="isInfoOpen = !isInfoOpen"
        >
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full overflow-hidden">
              <img class="w-full" src="/images/user.avif" alt="User" />
            </div>
            <span class="font-semibold">Tharindu Nimesh</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-full justify-center items-center hidden md:flex">
    <div
      class="flex h-6 w-6 flex-col items-center cursor-pointer"
      @click="toggleSidebar"
    >
      <div
        class="h-3 w-1 rounded-full bg-gray-500 dark:bg-slate-300 duration-300"
        :style="`transform: translateY(0.15rem) ${iconStyles.top} translateZ(0px)`"
      ></div>
      <div
        class="h-3 w-1 rounded-full bg-gray-500 dark:bg-slate-300 duration-300"
        :style="`transform: translateY(-0.15rem) ${iconStyles.bottom} translateZ(0px)`"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
