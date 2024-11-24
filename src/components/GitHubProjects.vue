<template>
    <div class="container">
      <h1>I miei progetti GitHub</h1>
      <ul v-if="repositories.length">
        <li v-for="repo in repositories" :key="repo.id">
          <h2>{{ repo.name }}</h2>
          <p>{{ repo.description || 'Nessuna descrizione disponibile' }}</p>
          <a :href="repo.html_url" target="_blank">Visita su GitHub</a>
        </li>
      </ul>
      <p v-else>Caricamento in corso...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        repositories: [], 
      };
    },
    created() {
      this.fetchGitHubProjects();
    },
    methods: {
      async fetchGitHubProjects() {
        try {
          const username = 'natdm02'; 
          const response = await axios.get(`https://api.github.com/users/${username}/repos`);
          this.repositories = response.data;
        } catch (error) {
          console.error("Errore nel recupero dei progetti da GitHub", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  .container {
    margin: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 15px;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  </style>
  