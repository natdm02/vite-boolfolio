<script>
import axios from 'axios';

export default {
props: ['id'], 
  data() {
    return {
      project: null,
      loading: true,
    };
  },
  mounted() {
    this.fetchProjectDetail();
  },
  methods: {
    fetchProjectDetail() {
      axios.get(`http://127.0.0.1:8000/api/projects/${this.id}`)
        .then(response => {
          this.project = response.data;
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
    <div v-if="loading">
    <h1>Caricamento del progetto...</h1>
  </div>
  <div v-else>
    <div class="project-detail">
      <h1>{{ project.name }}</h1>
      <img :src="`/storage/${project.image}`" alt="Project Image" />
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
    </div>
</div>
</template>




<style scoped>
.project-detail {
  padding: 20px;
}
.project-detail img {
  width: 100%;
  height: auto;
  max-width: 500px;
}
.project-card img {
  max-width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
}

</style>