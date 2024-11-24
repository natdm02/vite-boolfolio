<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'ProjectDetails',
  setup() {
    const project = ref(null);
    const route = useRoute();

    onMounted(() => {
      fetch(`http://127.0.0.1:8000/api/projects/${route.params.id}`)
        .then(response => response.json())
        .then(data => {
          project.value = data;
        });
    });

    return {
      project,
    };
  },
};

</script>

<template>
    <!-- <div v-if="loading">
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
</div> -->

<div>
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <img :src="project.image ? project.image : '/storage/default-image.jpg'" alt="Project Image" />
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