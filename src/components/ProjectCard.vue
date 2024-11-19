<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>


<template>

    <div class="project-card">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <p><strong>Tipo:</strong> {{ project.type.name }}</p>
      <p>
        <strong>Tecnologie:</strong>
        <span v-for="tech in project.technologies" :key="tech.id">
        {{ tech.name }}
        </span>
      </p>
    </div>

</template>
  
  
  <style scoped>
  .project-card {
    background-color: #e0f7fa;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #b2ebf2;
    border-radius: 5px;
  }
  </style>