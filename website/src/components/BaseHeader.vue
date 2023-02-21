<template>
  <div :class="{ change_color: scrollPosition > 50 }" class="wrapper">
    <h4 class="title">Kevan Doyle</h4>
    <h4 class="mobile-title">{{$route.name}}</h4>
    <div class="navigation-menu">
      <router-link to="/photo">Photo</router-link>
      <router-link to="/film">Film</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
};
</script>

<style scoped lang="scss">

.wrapper {
  position: sticky;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  height: 15%;
  z-index: 1;
  padding: 0 var(--padding);
  .mobile-title {
      display: none;
    }

  @media screen and (max-width: 1025px) {
    .title {
      display: none
    }
    .mobile-title {
      display: block;
    }
  }

  a,
  li {
    color: black;
    margin: 0 1rem;
    text-decoration: none;
    &:last-child {
      margin: 0 0 0 1rem;
    }
  }

  a.router-link-exact-active {
    font-weight: bold;
  }
}

.change_color {
  transition: 2s ease;
  background-color: white;
}

.navigation-menu {
  display: flex;
  align-items: center;
  @media screen and (max-width: 1025px) {
    display: none;
  }
}
</style>
