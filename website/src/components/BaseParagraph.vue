<template>
    <p>
      {{ text }}
    </p>
</template>
  
  <script>
  export default {
    name: "BaseParagraph",
    props: {
      text: {
        type: String,
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  p {
    margin: 2rem 0;
  }
  </style>
  