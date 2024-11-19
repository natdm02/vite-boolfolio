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