<script>

import ProjectCard from './ProjectCard.vue';
import axios from 'axios';

export default {
  name: "ProjectList",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects')
        .then(response => {
          this.projects = response.data;
        })
        .catch(error => {
          console.error("Error fetching projects:", error);
        });
    }
  }
};

</script>


<template>
  
  <div class="project-list">

    <h1>Lista dei Progetti</h1>

    <div v-for="project in projects" :key="project.id">
      <ProjectCard :project="project" />
    </div>
  

  </div>

</template>

<style scoped>

.project-list {
  margin: 20px;
}

.project-item {
  background-color: #f4f4f4;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
}

.project-item h3 {
  margin: 0;
  font-size: 1.2em;
}

.project-item p {
  color: #555;
}

</style>
