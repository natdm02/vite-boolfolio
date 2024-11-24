<script>
import ProjectList from './components/ProjectList.vue';

export default {
  name: "App",
  components: {
    ProjectList,
  },
};


</script>

<template>

  <div id="app">
    
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Progetti</router-link>
      <router-link to="/github-projects">GitHub Projects</router-link>
    </nav>

    <router-view></router-view>
  </div> 

</template>

<style>
</style>
