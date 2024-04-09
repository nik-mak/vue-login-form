<template>
  <div class="m-4 w-full md:w-1/2 lg:w-1/4 flex items-center flex-col">
    <input
      type="text"
      v-model="input.text"
      placeholder="Enter todo item here..."
      class="bg-gray-50 border border-gray-300 w-full text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      @keyup.enter="handleCreateNewItem"
    />

    <div v-if="input.error" class="w-full">
      <p class="text-sm text-gray-400 bloc italic mt-1 text-left w-full">
        Entry must not be blank.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TodoInput } from "~/types";

const input: Ref<TodoInput> = ref({ text: null, error: false });

function validateInput(input: string | null): boolean {
  if (!input || input.length === 0) {
    return false;
  }

  return true;
}

function handleCreateNewItem(): void {
  input.value.error = false;

  const isValid = validateInput(input.value.text);

  if (!isValid) {
    input.value.error = true;
    return;
  }

  // Do something...
}
</script>
