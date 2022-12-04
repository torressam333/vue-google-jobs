<template>
  <button>{{ buttonText }}</button>
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
