
<script>

import axios from 'axios';

export default {
  data() {
    return {
      projects: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects')
        .then(response => {
          this.projects = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error(error);
          this.loading = false;
        });
    },
  },
};
</script>



<template>

<div>
    <h1>Home</h1>
    <div v-if="loading">Caricamento in corso...</div>
    <div v-else>
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="`/storage/${project.image}`" alt="Project Image" />
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <div>
          <strong>Tipo:</strong> {{ project.type.name }}
        </div>
        <div>
          <strong>Tecnologie:</strong>
          <ul>
            <li v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</li>
          </ul>
        </div>
        <router-link :to="`/projects/${project.id}`">Vedi Dettagli</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
}
.project-card img {
  width: 100%;
  height: auto;
  max-width: 300px;
}
.project-detail img {
  max-width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
}
</style>