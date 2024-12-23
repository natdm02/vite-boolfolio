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
      <br>
      <router-link to="/projects">Progetti</router-link>
      <br>
      <router-link to="/github-projects">GitHub Projects</router-link>
      <br>
      <a href="http://127.0.0.1:8000/" target="_blank">Register</a>
    </nav>

    <router-view></router-view>
  </div> 

</template>

<style>
</style>
