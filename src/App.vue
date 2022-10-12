<template>
  <h1>THE CAT CLICKER</h1>
  <CatsPage></CatsPage>
</template>

<script>
import CatsPage from './pages/CatsPage.vue';

export default {
  name: 'App',
  components: { CatsPage },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
