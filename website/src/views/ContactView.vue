<template>
  <div class="wrapper">
    <BasePageTitle title="Contact Form"/>
    <ContactForm />
  </div>
</template>

<script>
import BasePageTitle from "@/components/BasePageTitle.vue";
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "ContactView",
  components: {
    ContactForm,
    BasePageTitle
},
};
</script>

<style scoped lang="scss">
.wrapper {
  @media screen and (min-width: 1025px) {
    padding: 0 var(--padding);
  }
}
</style>
