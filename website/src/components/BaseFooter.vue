<template>
  <div class="footer-container">
    <div class="footer-element copyright"><p>Design by EsDesigns</p></div>
    <div class="footer-element social-icons">
      <a href="#"><img src="@/assets/icons/youtube.svg" alt="" /></a>
      <a href="#"><img src="@/assets/icons/linkedin.svg" alt="" /></a>
      <a href="#"><img src="@/assets/icons/instagram.svg" alt="" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseFooter",
  /*     props: {
      msg: String
    } */
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7%;
  padding: 0 var(--padding);

  @media screen and (max-width: 1025px) {
    justify-content: center;
  }
  .footer-element {
    &.copyright {
      @media screen and (max-width: 1025px) {
        display: none;
      }
    }
    &.social-icons {
      a {
        display: flex;
        margin: 0.3rem;
        &:last-child {
          margin-right: 0;
        }
      }
      display: flex;
      align-items: center;
    }
  }
}
</style>
