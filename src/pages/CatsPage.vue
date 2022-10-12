<template>
  <div class="main-container">
    <CatsList v-if="catsArray" :catsList="catsArray"></CatsList>
  </div>
</template>

<script>
import CatsList from '../components/CatsList.vue';
import { getCats } from '@/helpers/getCats';

export default {
  components: { CatsList: CatsList },
  data() {
    return {
      catsArray: null,
    };
  },
  mounted() {
    this.getCatsList();
  },

  methods: {
    async getCatsList() {
      this.catsArray = await getCats();
    },
  },
};
</script>

<style>
div .main-container {
  display: flex;
  max-width: 50vw;
}
</style>
