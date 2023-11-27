<script setup>
const form = ref({
  fname: "",
  lname: "",
  email: "",
  password: "",
});
const pending = ref(false);

async function register() {
  pending.value = true;
  const { data, error } = await useApiFetch("/auth/register", {
    method: "POST",
    body: form.value,
  });

  if (error.value) {
    useErrorHandler(error.value.data);
  }

  if (data.value) {
    iziToast.success({
      title: "Success",
      message: "You have successfully registered!",
    });
    useRouter().push("/");
  }

  pending.value = false;
}
</script>

<template>
  <form>
    <div class="flex -mx-3">
      <div class="w-1/2 px-3 mb-1">
        <PrimaryInput
          label="First Name"
          placeholder="Enter your first name"
          icon="mdi:account-outline"
          type="text"
          v-model="form.fname"
        />
      </div>
      <div class="w-1/2 px-3 mb-1">
        <PrimaryInput
          label="Last Name"
          placeholder="Enter your last name"
          icon="mdi:account-outline"
          type="text"
          v-model="form.lname"
        />
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-1">
        <PrimaryInput
          label="Email"
          placeholder="Enter your email"
          icon="mdi:email-outline"
          type="email"
          v-model="form.email"
        />
      </div>
    </div>
    <div class="flex -mx-3">
      <div class="w-full px-3 mb-12">
        <PrimaryInput
          label="Password"
          placeholder="Enter your password"
          icon="mdi:lock-outline"
          type="password"
          v-model="form.password"
        />
      </div>
    </div>
    <div class="flex flex-col items-center -mx-3">
      <PrimaryButton
        text="Register"
        styles="w-2/3"
        @clicked="register"
        :loading="pending"
      />
      <NuxtLink to="/">
        <p
          class="text-sm duration-300 mt-5 block text-center cursor-pointer"
        >
          Already have an account?
          <span class="font-semibold">Sign In</span>
        </p>
      </NuxtLink>
    </div>
  </form>
</template>
