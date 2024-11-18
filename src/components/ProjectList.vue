<script>

import axios from 'axios';

export default {
  name: "ProjectList",
  data() {
    return {
      projects: [],
    };
  },
  created() {
    axios
      .get("http://127.0.0.1:8000/api/projects")
      .then(response => {
        this.projects = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};

    



</script>

<template>



 
  <div>
        <h1>project</h1>
    <ul>

      <li v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </li>

    </ul>

  </div>




</template>

<style>

</style>
