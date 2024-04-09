<template>
  <div>
    <form>
      <BaseInput
        label="Email"
        type="email"
        :model-value="loginForm.email"
        :show-error="loginForm.errors.includes(Errors.Email)"
        @input="loginForm.email = $event"
        @keyup.enter="handleLogin(loginForm)"
      />

      <BaseInput
        label="Password"
        type="password"
        :model-value="loginForm.password"
        :show-error="loginForm.errors.includes(Errors.Password)"
        @input="loginForm.password = $event"
        @keyup.enter="handleLogin(loginForm)"
      />
    </form>

    <div class="w-full text-center">
      <div>
        <button
          @click="handleLogin(loginForm)"
          class="text-gray-300 mb-4 w-full bg-purple-500 p-2 rounded-md hover:bg-purple-400"
        >
          Login
        </button>
      </div>
      <p class="text-gray-300">
        Don't have an account?
        <span
          class="text-blue-500 hover:cursor-pointer hover:text-blue-400"
          @click="$emit('signup', loginForm.email)"
        >
          Sign up
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Errors, type LoginForm } from "~/types";

const emit = defineEmits<{ signup: [username: string | null] }>();

const loginForm: Ref<LoginForm> = ref({
  email: null,
  password: null,
  errors: [],
});

function validateLoginForm(form: LoginForm): boolean {
  loginForm.value.errors = [];

  if (!form.email || form.email.length === 0) {
    loginForm.value.errors.push(Errors.Email);
  }

  if (!form.password || form.password.length === 0) {
    loginForm.value.errors.push(Errors.Password);
  }

  if (loginForm.value.errors.length > 0) {
    return false;
  }

  return true;
}

function handleLogin(form: LoginForm): void {
  const isValid = validateLoginForm(form);

  console.log(loginForm.value);

  if (!isValid) {
    return;
  }

  // Do something...
}
</script>
