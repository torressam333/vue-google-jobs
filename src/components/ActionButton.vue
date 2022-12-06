<template>
  <button
    class="rounded border-0 bg-brand-blue-1 px-5 py-3 font-medium text-white"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    buttonText: {
      type: String,
      required: true,
      default: "Submit",
    },
  },
};
</script>
