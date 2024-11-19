<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
    
  },
  computed: {
    computedImage() {
      console.log("Image URL:", this.project.image);
      return this.project.image.startsWith('http')
        ? this.project.image
        : `/storage/${this.project.image}`;
    },
  },
};
</script>


<template>

    <div class="project-card">
      <img :src="project.image.startsWith('http') ? project.image : `/storage/${project.image}`" alt="Project Image" />
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
    background-color: #646868;
    padding: 15px;
    margin: 10px 0;
    border: 1px solid #b2ebf2;
    border-radius: 5px;
  }

  .project-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    display:block;
}

  </style>