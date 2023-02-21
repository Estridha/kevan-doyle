<template>
  <h2>
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: "BaseH2",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: var(--screen-breakpoint)) {
  h2 {
    display: none;
  }
}
</style>
