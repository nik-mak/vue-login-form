<template>
  <div class="flex w-full h-full items-center justify-center">
    <div
      class="w-full h-full backdrop-blur-lg bg-[#00000020] inline-block md:h-fit md:p-8 md:border md:rounded-lg md:m-12 md:border-white md:border-solid md:w-[400px]"
    >
      <div
        class="flex flex-col w-full h-full items-center justify-center md:justify-normal"
      >
        <div>
          <div class="m-4 pt-8 pb-4">
            <p class="uppercase text-4xl text-white">Login / Signup</p>
          </div>
          <SignUpForm v-if="showSignup" @login="showSignup = false" />

          <LoginForm v-else @signup="showSignup = true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showSignup = ref(false);
</script>
