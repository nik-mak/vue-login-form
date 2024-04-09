<template>
  <div>
    <form>
      <BaseInput
        label="First Name"
        type="text"
        :model-value="signUpForm.firstName"
        :show-error="signUpForm.errors.includes(Errors.FirstName)"
        @input="signUpForm.firstName = $event"
        @keyup.enter="handleSignUp(signUpForm)"
      />

      <BaseInput
        label="Last Name"
        type="text"
        :model-value="signUpForm.lastName"
        :show-error="signUpForm.errors.includes(Errors.LastName)"
        @input="signUpForm.lastName = $event"
        @keyup.enter="handleSignUp(signUpForm)"
      />

      <BaseInput
        label="Email"
        type="email"
        :model-value="signUpForm.email"
        :show-error="signUpForm.errors.includes(Errors.Email)"
        @input="signUpForm.email = $event"
        @keyup.enter="handleSignUp(signUpForm)"
      />

      <BaseInput
        label="Password"
        type="password"
        :model-value="signUpForm.password"
        :show-error="signUpForm.errors.includes(Errors.Password)"
        @input="signUpForm.password = $event"
        @keyup.enter="handleSignUp(signUpForm)"
      />
    </form>

    <div class="w-full text-center">
      <div>
        <button
          @click="handleSignUp(signUpForm)"
          class="text-gray-300 mb-4 w-full bg-purple-500 p-2 rounded-md hover:bg-purple-400"
        >
          Sign Up
        </button>
      </div>
      <p class="text-gray-300">
        Already have an account?
        <span
          class="text-blue-500 hover:cursor-pointer hover:text-blue-400"
          @click="$emit('login', signUpForm.email)"
        >
          Log in
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Errors, type SignUpForm } from "~/types";

const emit = defineEmits<{ login: [username: string | null] }>();

const signUpForm: Ref<SignUpForm> = ref({
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  errors: [],
});

function validateSignUpForm(form: SignUpForm): boolean {
  signUpForm.value.errors = [];

  if (!form.firstName || form.firstName.length === 0) {
    signUpForm.value.errors.push(Errors.FirstName);
  }

  if (!form.lastName || form.lastName.length === 0) {
    signUpForm.value.errors.push(Errors.LastName);
  }

  if (!form.email || form.email.length === 0) {
    signUpForm.value.errors.push(Errors.Email);
  }

  if (!form.password || form.password.length === 0) {
    signUpForm.value.errors.push(Errors.Password);
  }

  if (signUpForm.value.errors.length > 0) {
    return false;
  }

  return true;
}

function handleSignUp(form: SignUpForm): void {
  const isValid = validateSignUpForm(form);

  console.log(signUpForm.value);

  if (!isValid) {
    return;
  }

  // Do something...
}
</script>
