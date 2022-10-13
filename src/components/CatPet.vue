<template>
  <button class="pet-button" data-testid="increaseBtn" @click="addClick"
    >Pet me!
    <div class="heart-counter-container"
      ><img src="@/assets/icons/heart.svg" alt="heart-icon" />
      <span data-testid="clickCounter">{{ catClicks }}</span></div
    >
  </button>
</template>
<script>
export default {
  props: {
    catClicks: 0,
  },
  methods: {
    addClick() {
      this.$emit('catPetClick');
    },
  },
};
</script>
<style scoped>
@import './CatPet.css';
</style>
