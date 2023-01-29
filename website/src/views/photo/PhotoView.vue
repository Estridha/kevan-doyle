<template>
  <div class="photo-view">
    <div class="link commercial">
      <div class="button-container">
        <BaseButton buttonClass="tertiary" text="Commercial" @userClicked="goToPage('commercial')"/>
      </div> 
    </div>
    <div class="link prints">
      <div class="button-container">
      <BaseButton buttonClass="tertiary" text="Prints" @userClicked="goToPage('prints')"/></div></div>
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "PhotoView",
  data() {
    return {
      categories: [
        { id: 1, title: "commercial", photo: 'commercial.jpg' },
        { id: 2, title: "editorial", photo: 'editorial.jpg' },
        { id: 3, title: "prints", photo: 'prints.jpg' }
      ],
    };
  },
  components: {
    BaseButton
},
  methods: {
    goToPage(page) {
      if (page === "commercial") {
        this.$router.push("/photo/commercial");
      } else if (page === "prints") {
        this.$router.push("/photo/prints");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.photo-view {
  margin: 0 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 845px) {
    margin: 0;
    min-width: 100vw;
  }

  a {
    font-size: 30px;
    text-decoration: none;
    text-transform: uppercase;
    &:hover {
      font-size: 40px;
    }
  }
  .link {
    display: grid;
    align-items: center;
    width: 100%;
    height: calc(100vh / 2 - 4rem);
    margin: 0.5rem 0;

    &.commercial {
    background-image: url('@/assets/images/commercial/commercial.jpg');
    background-size: cover;
    }

    &.prints {
    background-image: url('@/assets/images/prints.jpg');
    background-size: cover;
    }

  }
}
</style>
