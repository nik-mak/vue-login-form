<template>
  <div class="w-72 mb-8">
    <div class="relative w-full min-w-[200px] h-10">
      <input
        v-model="inputValue"
        :type="type"
        class="peer w-full h-full bg-transparent text-gray-300 font-sans font-normal outline outline-0 focus:outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-300"
        :class="{
          notEmpty: inputValue && inputValue.length > 0,
          error: showError,
        }"
        placeholder=" "
      />
      <label
        :class="
          $props.showError
            ? 'before:border-red-500 peer-focus:before:!border-red-500 after:border-red-500 peer-focus:after:!border-red-500'
            : 'before:border-blue-gray-200 peer-focus:before:!border-gray-300 after:border-blue-gray-200 peer-focus:after:!border-gray-300'
        "
        class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-placeholder-shown:leading-[3.75] text-gray-300 peer-focus:text-gray-300"
      >
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | null;
  label: string;
  type: "text" | "password";
  showError: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{ input: [value: string | null] }>();

const inputValue = computed({
  get(): string | null {
    return props.modelValue;
  },
  set(value: string | null) {
    emit("input", value);
  },
});
</script>

<style scoped>
.notEmpty {
  border-top-color: transparent !important;
}

.error {
  border-color: red;
}

.error:focus {
  border-top-color: transparent;
}
</style>
