<template>
  <svg
    v-if="name === 'icon-menu-collapsed'"
    height="42px"
    width="42px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 50 50"
    enable-background="new 0 0 50 50"
    xml:space="preserve"
  >
    <path
      fill="#231F20"
      d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z"
    />
    <path
      fill="#231F20"
      d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z"
    />
    <path
      fill="#231F20"
      d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z"
    />
  </svg>
  <svg
    v-else-if="name === 'icon-menu-open'"
    width="40px" height="40px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</template>
<script>
export default {
  props: ["name"],
};
</script>
