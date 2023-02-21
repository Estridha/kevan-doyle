<template>
  <h2 class="title">{{ title }}</h2>
</template>

<script>
export default {
  name: "BasePageTitle",
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
.title {
  text-transform: uppercase;
  padding: 2rem;
  @media screen and (max-width: 1025px) {
    display: none;
  }
}
</style>
