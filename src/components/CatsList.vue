<template>
  <ul class="names" v-if="catsList.length > 0" data-testid="catsList">
    <li
      v-for="cat of catsList"
      :ref="cat.id"
      @click="$emit('catSelection', cat)"
      >{{ cat.breeds[0].name }}</li
    ></ul
  >
</template>
<script>
export default {
  props: {
    catsList: { type: Array },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  font-size: 1.125em;
}

li {
  margin-bottom: 0.225em;
  cursor: pointer;
}
</style>
