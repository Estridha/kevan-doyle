<template>
  <div class="wrapper">
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "ContactView",
  components: {
    ContactForm,
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: var(--padding);
}
</style>
