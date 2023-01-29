<template>
  <div v-if="selectedImage" class="lightbox" @click="selectImage('')">
    <!-- <img src="../assets/images/chevron-left.png" @click="previousImage()"/> -->
    <img :src="selectedImage" alt="some" />
  </div>
  <div class="row">
    <!-- probably need to change key -->
    <img
      v-for="image in images"
      :key="image[index]"
      :src="image.pathLong"
      @click="selectImage(image.pathLong)"
    />
  </div>
</template>

<script>
export default {
  name: "PhotoProjectView",
  data() {
    return {
      id: this.$route.params.id,
      images: [],
      selectedImage: "",
    };
  },
  mounted() {
    switch (this.id) {
      case "nomadix":
        this.importAll(
          require.context("@/assets/images/commercial/nomadix", true, /\.jpg$/)
        );
        break
      case "tactandstone":
      this.importAll(
          require.context("@/assets/images/commercial/tactandstone", true, /\.jpg$/)
        );
        break
        case "patara":
      this.importAll(
          require.context("@/assets/images/commercial/patara", true, /\.jpg$/)
        );
        break
        case "avana":
      this.importAll(
          require.context("@/assets/images/commercial/avana", true, /\.jpg$/)
        );
        break
        case "wildernesscoffee":
      this.importAll(
          require.context("@/assets/images/commercial/wildernesscoffee", true, /\.jpg$/)
        );
        break
        case "outdoorvitals":
      this.importAll(
          require.context("@/assets/images/commercial/outdoorvitals", true, /\.jpg$/)
        );
        break
        case "us":
      this.importAll(
          require.context("@/assets/images/prints/us", true, /\.jpg$/)
        );
        break
        case "europe":
      this.importAll(
          require.context("@/assets/images/prints/europe", true, /\.jpg$/)
        );
        break
        case "fineart":
      this.importAll(
          require.context("@/assets/images/prints/fine-art", true, /\.jpg$/)
        );
        break
        case "centralamerica":
      this.importAll(
          require.context("@/assets/images/prints/central-america", true, /\.jpg$/)
        );
        break
    }
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
    selectImage(src) {
      console.log("hello");
      this.selectedImage = src;
    },
    /* previousImage(){
        const currentImage = this.images.indexOf(element => element.pathLong = this.selectedImage);
        this.selectedImage = currentImage;
      } */
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

img {
  max-width: 100vw;
  height: 20rem;
  padding: 0.5rem;

  &:hover {
    @media screen and (min-width: 845px) {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 845px) {
    padding: 0.5rem 0;
    height: auto;
    width: 100vw;
  }
}

.lightbox {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.709);
  cursor: pointer;

  @media screen and (max-width: 845px) {
    display: none;
  }

  img {
    cursor: auto;
    max-width: 80vw;
    max-height: 80%;
    height: auto;
  }
}

/* responsive grid styling
  
  .row {
    display: flex;
    flex-flow: row wrap;
    margin-left: -8px;
    max-width: 100%;
  }
  
  img {
    flex: auto;
    height: 250px;
    min-width: 150px;
    margin: 0 8px 8px 0;
  } */
</style>
