<template>
  <div class="commercial-view">
    <ImageLink
      v-for="company in companies"
      :key="company.id"
      :fileName="company.photoSrc"
      :buttonText="company.name"
      @click="goToPage(company.id)"
    />
  </div>
</template>

<script>
import ImageLink from "@/components/ImageLink.vue";

export default {
  name: "CommercialView",
  data() {
    return {
      companies: [
        { id: "nomadix", name: "Nomadix", photoSrc: "nomadix.jpg" },
        { id: "tactandstone", name: "Tact and Stone", photoSrc: "tactandstone.jpg" },
        { id: "patara", name: "Patara", photoSrc: "patara.jpg" },
        { id: "avana", name: "Avana", photoSrc: "avana.jpg" },
        {
          id: "wildernesscoffee",
          name: "Wilderness Coffee",
          photoSrc: "wildernesscoffee.jpg",
        },
        {
          id: "outdoorvitals",
          name: "Outdoor Vitals",
          photoSrc: "outdoorvitals.jpg",
        },
      ],
    };
  },
  components: {
    ImageLink,
  },
  methods: {
    goToPage(page) {
      this.$router.push({
        name: "project",
        params: { id: page },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.commercial-view {
  overflow: auto; 
  display: grid;

  @media screen and (min-width: 480px) {
    padding: 0 1.5rem;
    grid-template-columns: calc(100%/2) calc(100%/2);
  }

  @media screen and (min-width: 845px) {
    padding: 0 1.5rem;
    grid-template-columns: calc(100%/3) calc(100%/3) calc(100%/3);
  }
}
</style>
