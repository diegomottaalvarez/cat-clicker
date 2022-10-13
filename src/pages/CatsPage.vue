<template>
  <div class="main-container" :class="selectedCat ? 'cat-selected' : ''">
    <img
      v-if="loading"
      class="loading-spinner"
      src="@/assets/images/spinner.svg"
    />
    <div class="cat-list-container">
      <CatsList
        v-if="catsArray"
        :catsList="catsArray"
        @catSelection="setSelectedCat"
      /> </div
    ><div class="cat-detail-container">
      <CatDetail
        v-if="selectedCat"
        :catDetail="selectedCat"
        @unselectCat="unselectCat"
      />
    </div>
  </div>
</template>

<script>
import CatsList from '../components/CatsList.vue';
import CatDetail from '../components/CatDetail.vue';
import { getCats } from '@/helpers/getCats';

export default {
  components: { CatsList, CatDetail },
  data() {
    return {
      catsArray: null,
      selectedCat: null,
      loading: false,
    };
  },
  created() {
    this.loading = true;
    this.getCatsList();
  },

  methods: {
    async getCatsList() {
      this.catsArray = await getCats();
      this.loading = false;
    },

    setSelectedCat(selectedCat) {
      this.selectedCat = selectedCat;
    },

    unselectCat() {
      this.selectedCat = null;
    },
  },
};
</script>

<style scoped>
@import './CatsPage.css';
</style>
