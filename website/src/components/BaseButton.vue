<template>
  <button
  :class="buttonClass"
   :type="type"
    :label="text"
    :disabled="disabled"
    @click="$emit('userClicked')"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
    },
    type: {
      type: String,
    },
    buttonClass: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background: none;
  border: none;
  color: black;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.1rem;

  &.primary {
    color: white;
    background: black;
  }

  &.secondary {
    color: black;
    background: white;
  }

  &.tertiary {
    color: white;
    &:hover {
      color: black;
      background: white;
  }
  }
  
  &:hover {
    opacity: 80%;
  }
}
</style>
