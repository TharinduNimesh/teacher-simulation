<template>
  <form>
    <div class="flex -mx-3">
      <div class="w-1/2 px-3 mb-1">
        <PrimaryInput
          label="First Name"
          placeholder="Enter your first name"
          icon="mdi:account-outline"
          type="text"
        />
      </div>
      <div class="w-1/2 px-3 mb-1">
        <PrimaryInput
          label="Last Name"
          placeholder="Enter your last name"
          icon="mdi:account-outline"
          type="text"
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
        />
      </div>
    </div>
    <div class="flex justify-center -mx-3">
      <PrimaryButton text="Register" styles="w-2/3" />
    </div>
  </form>
</template>
