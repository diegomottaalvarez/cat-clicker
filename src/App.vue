<template>
  <h1 class="app-title">PET OR LEAVE</h1>
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
@import './assets/styles/styles.css';
h1.app-title {
  font-family: 'AgentOrange', Helvetica, Arial;
  font-size: 3.5rem;
  margin-bottom: 3rem;
}

@media (max-width: 900px) {
  h1.app-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
