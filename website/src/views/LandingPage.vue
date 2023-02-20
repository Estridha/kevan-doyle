<template>
  <div class="landing-page-container">
    <h1 class="landing-page-desc">
      Photographer <br />
      Kevan Doyle
    </h1>
    <router-link to="/about"
      ><BaseButton buttonClass="secondary" text="Enter"
    /></router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "LandingPage",
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Megrim&display=swap');


.landing-page-container {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-image: url(@/assets/images/prints/fine-art/fine-art\ \(7\).jpg);
  background-size: cover;
}
.landing-page-desc {
  font-family: 'Megrim', cursive;
  padding-top: 30vh;
}
</style>
