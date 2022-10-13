<template>
  <ul class="names" v-if="catsList.length > 0" data-testid="catsList">
    <li v-for="cat of catsList" :ref="cat.id" class="cat-name"
      ><button
        role="button"
        class="cat-selection-button"
        @click="selectCat(cat)"
        >{{ cat.breeds[0].name }}</button
      ></li
    ></ul
  >
</template>
<script>
export default {
  props: {
    catsList: { type: Array },
  },
  methods: {
    selectCat(cat) {
      window.scrollTo({ top, behavior: 'smooth' });
      this.$emit('catSelection', cat);
    },
  },
};
</script>
<style scoped>
@import './CatsList.css';
</style>
