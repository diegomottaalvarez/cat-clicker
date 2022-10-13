<template>
  <img
    v-if="catDetail.url"
    :src="catDetail.url"
    :alt="catDetail.breeds[0].name"
    class="cat-img"
  />
</template>

<script>
export default {
  props: {
    catDetail: Object,
  },
};
</script>

<style scoped>
@import './CatImage.css';
</style>
