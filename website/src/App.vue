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
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Spectral&display=swap');
@import './assets/styles/variables.css';
#app {
  position: relative;
  display: border-box;
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-color);
  overflow: hidden;

  h1, h2, h3, h4 {
    font-family: 'Old Standard TT', serif;
    font-weight: 400;
  }

  a, button {
    font-family: 'Spectral', serif;
  }

}

*,
body {
  display: border-box;
  color: black;
  margin: 0;
  padding: 0;
}
</style>
