!<template>
  <button>{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
