<template>
  <div class="landing-page-container">
    <div class="content-container">
      <h1 class="landing-page-desc">
        Photographer <br />
        Kevan Doyle
      </h1>
      <router-link to="/about"
        ><BaseButton buttonClass="secondary" text="Enter"
      /></router-link>
    </div>
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
.landing-page-container {
  overflow: hidden;
  height: 100%;
  width: calc(100vw - 4rem);
  background-image: url("@/assets/images/prints/central-america/central-america (1).jpg");
  padding: 2rem;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;


  h1 {
    color: var(--light-color);
    margin-bottom: 5rem;
    text-transform: uppercase;
  }
}
</style>
