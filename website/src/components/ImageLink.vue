<template>
  <div class="container">
    <img class="image-link" :src="require(`@/assets/images/${fileName}`)" />
    <div class="button-container">
      <BaseButton
        buttonClass="tertiary"
        :text="buttonText"
        @userClicked="$emit('userClicked')"
      />
    </div>
  </div>
</template>
<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "ImageLink",
  props: {
    buttonText: {
      type: String,
    },
    fileName: {
      type: String,
    },
  },
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: block;
  overflow: auto;
  position: relative;
  text-align: center;
  width: 100%;

  .image-link {
    max-height: auto;
    max-width: calc(100% - 2rem);
    margin: 1rem;
    @media screen and (max-width: 480px) {
      margin: 0;
      max-width: 100%;
    }
  }

  .button-container {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 45%;
  }
}
</style>
