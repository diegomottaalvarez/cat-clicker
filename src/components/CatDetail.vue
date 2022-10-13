<template>
  <div v-if="catDetail" class="cat-detail">
    <div class="cat-img-container">
      <button class="leave-cat-button" @click="$emit('unselectCat')"
        >Leave me alone</button
      >
      <CatImage :catDetail="catDetail" @catPetClick="addClick" />
      <CatPet :catClicks="catDetail.catClicks || 0" @catPetClick="addClick" />
    </div>
    <div class="cat-description-container">
      <h2 class="breed-name">{{ catDetail.breeds[0].name }}</h2>
      <p class="cat-info">{{ catDetail.breeds[0].description }}</p>
      <a
        v-if="catDetail.breeds[0].vcahospitals_url"
        class="link"
        :href="catDetail.breeds[0].vcahospitals_url"
        target="_blank"
        >Tell me more!</a
      >
    </div>
  </div>
</template>
<script>
import CatPet from './CatPet.vue';
import CatImage from './CatImage.vue';
export default {
  props: {
    catDetail: { type: Object },
  },
  methods: {
    addClick() {
      this.catDetail.catClicks
        ? this.catDetail.catClicks++
        : (this.catDetail.catClicks = 1);
    },
  },
  components: { CatPet, CatImage },
};
</script>
<style scoped>
@import './CatDetail.css';
</style>
