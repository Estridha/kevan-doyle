<template>
  <div v-if="selectedImage" class="lightbox" @click="selectImage('')">
    <!-- <img src="../assets/images/chevron-left.png" @click="previousImage()"/> -->
    <img :src="selectedImage" alt="some" />
  </div>
  <div class="row">
    <img
      v-for="image in images"
      :src="image.pathLong"
      @click="selectImage(image.pathLong)"
    />
  </div>
</template>

<script>
export default {
  name: "ProjectView",
  data() {
    return {
      id: this.$route.params.id,
      images: [],
      selectedImage: "",
    };
  },
  mounted() {
    this.importAll(
      require.context("../assets/images/commercial/nomadix", true, /\.jpg$/)
    );
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    },
    selectImage(src) {
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
