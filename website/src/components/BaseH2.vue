<template>
    <h2>
      {{ title }}
    </h2>
</template>
  
  <script>
  export default {
    name: "BaseH2",
    props: {
      title: {
        type: String,
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  h2 {
    text-transform: uppercase;
  }
  </style>
  