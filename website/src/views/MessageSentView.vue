<template>
  <div class="wrapper">
    <div class="confirmation-wrapper">
      <BaseH2 title="success" />
      <p>Your message was sent successfully.</p>
    </div>
    <BaseButton buttonClass="primary" text="Go Back" />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseH2 from "@/components/BaseH2.vue";
export default {
  name: "MessageSentView",
  components: {
    BaseH2,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.confirmation-wrapper {
  padding: 2rem;
  background-color: green;
  border-radius: 8px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 2rem;
  text-align: center;
  p {
    padding-top: 5rem;
  }
}
</style>
