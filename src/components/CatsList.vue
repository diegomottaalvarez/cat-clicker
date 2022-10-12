<template>
  <div class="photos" v-if="catsList" data-testid="catsList">
    <img v-for="cat of catsList" :src="cat.url" :ref="cat.id"
  /></div>
</template>
<script>
export default {
  props: {
    catsList: { type: Array },
  },
};
</script>
<style scoped>
.photos {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
  padding: 0;
}

.photos img {
  display: block;
  max-width: 400px;
  flex: 0 0 auto;
  background-color: #fff;
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 10px;
}
</style>
