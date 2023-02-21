<template>
  <div class="page-container">
    <BaseHeader />
    <SideBar />
      <router-view :style="{ minHeight: (innerHeight*0.78).toString() + 'px' }" />
    <BaseFooter />
  </div>
</template>

<script>
import BaseFooter from "./BaseFooter.vue";
import BaseHeader from "./BaseHeader.vue";
import SideBar from "./sidebar/SideBar.vue";
import { sidebarWidth } from "./sidebar/state";

export default {
  name: "BasePage",
  components: { BaseHeader, SideBar, BaseFooter },
  props: {
    innerHeight: Number,
  },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.page-container {
  overflow-y: scroll;
  max-width: 100vw;
  height: 100%;
}
</style>
