<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'ProjectDetails',
  setup() {
    const project = ref(null);
    const loading = ref(true);
    const route = useRoute();

    onMounted(() => {
      fetch(`http://127.0.0.1:8000/api/projects/${route.params.id}`)
        .then((response) => response.json())
        .then((data) => {
          project.value = data;
          loading.value = false;
        })
        .catch((error) => {
          console.error("Errore durante il caricamento del progetto:", error);
          loading.value = false;
        });
    });

    return {
      project,
      loading,
    };
  },
};

</script>

<template>
<div v-if="loading">
    <h1>Caricamento del progetto...</h1>
  </div>
  <div v-else-if="project">
    <h1>{{ project.name }}</h1>
    <img
      :src="project.image 
        ? (project.image.startsWith('http') 
            ? project.image 
            : `/storage/${project.image}`) 
        : '/storage/default-image.jpg'"
      alt="Project Image"
    />
    <div>
      <strong>Tipo:</strong> {{ project.type?.name || 'Non disponibile' }}
    </div>
    <div>
      <strong>Tecnologie:</strong>
      <ul>
        <li v-for="tech in project.technologies" :key="tech.id">{{ tech.name }}</li>
      </ul>
    </div>
  </div>
  <div v-else>
    <p>Progetto non trovato.</p>
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


</style>