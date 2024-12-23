<script>

import ProjectCard from './ProjectCard.vue';
import axios from 'axios';

export default {
  name: "ProjectList",
  data() {
    return {
      projects: [],
      loading: true,
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/projects")
      .then((response) => {
        this.projects = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        this.loading = false;
      });
  },
};


</script>


<template>

<div class="project-list">
    <h1>Lista dei Progetti</h1>
    <div v-if="loading">Caricamento in corso...</div>
    <div v-else>
      <ul>
        <li v-for="project in projects" :key="project.id" class="project-item">
          <img
          :src="project.image 
    ? (project.image.startsWith('http') 
        ? project.image 
        : `/storage/${project.image}`) 
    : '/storage/default-image.jpg'"
  alt="Project Image"
  class="project-image"
          />
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <router-link :to="`/projects/${project.id}`">Dettagli</router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<style scoped>

.project-list {
  margin: 20px;
  color: #fff;
}
.project-item {
  background-color: #222;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.project-item h2 {
  margin: 0;
  font-size: 1.5em;
}
.project-item p {
  color: #bbb;
}
.project-image {
  max-width: 100px;
  height: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 8px;
}
</style>
