<template>
  <div class="wrapper" :style="{ height: windowHeight.toString() + 'px' }">
    <LandingPage v-show="currentRouteName == 'home'" />
    <BasePage v-show="currentRouteName !== 'home'" :innerHeight="windowHeight" />
  </div>
</template>

<script>
import BasePage from "@/components/BasePage.vue";
import LandingPage from "./views/LandingPage.vue";
export default {
  components: {
    BasePage,
    LandingPage,
  },
  data() {
    return {
      windowHeight: window.innerHeight,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
#app {
  /*  background-image: url(@/assets/images/background.jpg);
  background-size: cover; */
  position: relative;
  display: border-box;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

*,
body {
  display: border-box;
  color: black;
  margin: 0;
  padding: 0;
}
</style>
