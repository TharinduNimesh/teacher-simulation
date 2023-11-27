<script setup>
const remember = ref(false);
const pending = ref(false);

const form = ref({
  email: "",
  password: "",
});

function login() {
  pending.value = true;
  useApiFetch("/auth/login", {
    method: "POST",
    body: form.value,
  })
    .then(({ data, error }) => {
      if (error.value) {
        useErrorHandler(error.value.data);
      }

      if (data.value) {
        const token = useCookie("auth-token", {
          secure: true,
          maxAge: 60 * 60 * 24 ,
        });

        token.value = data.value.token;
        useRouter().push("/chat");
      }
    })
    .finally(() => {
      pending.value = false;
    });
}
</script>

<template>
  <form>
    <PrimaryInput
      label="Email"
      placeholder="Enter your email"
      icon="mdi:email-outline"
      type="email"
      v-model="form.email"
    />
    <PrimaryInput
      label="Password"
      placeholder="Enter your password"
      icon="mdi:lock-outline"
      type="password"
      v-model="form.password"
    />
    <div class="flex justify-between items-center mt-1 px-1">
      <UCheckbox v-model="remember" name="Remember" label="Remember me" />
      <NuxtLink to="/">
        <span class="text-sm text-gray-500 dark:text-gray-300"
          >Forgot Password?</span
        >
      </NuxtLink>
    </div>
    <div class="w-full flex flex-col items-center mt-5">
      <PrimaryButton text="Sign In" styles="w-full" @clicked="login" :loading="pending" />
      <NuxtLink to="/register" class="cursor-pointer mt-1">
        <span class="text-sm mt-3 text-gray-500 dark:text-gray-300"
          >Don't have an account? <span class="underline">Sign up</span></span
        >
      </NuxtLink>
    </div>
  </form>
</template>

<style></style>
