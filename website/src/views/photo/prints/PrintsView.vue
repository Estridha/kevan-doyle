<template>
    <div class="prints-view">
      <ImageLink
        v-for="project in projects"
        :key="project.id"
        :fileName="project.photoSrc"
        :buttonText="project.name"
        @click="goToPage(project.id)"
      />
    </div>
  </template>
  
  <script>
  import ImageLink from "@/components/ImageLink.vue";
  
  export default {
    name: "CommercialView",
    data() {
      return {
        projects: [
          { id: "us", name: "United States", photoSrc: "us.jpg" },
          { id: "europe", name: "Europe", photoSrc: "europe.jpg" },
          { id: "centralamerica", name: "Central America", photoSrc: "centralamerica.jpg" },
          { id: "fineart", name: "Fine Art", photoSrc: "fineart.jpg" },
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
  .prints-view {
    overflow: auto; 
  display: grid;

  @media screen and (min-width: 480px) {
    padding: 0 1.5rem;
    grid-template-columns: calc(100%/2) calc(100%/2);
  }
  }
  </style>
  