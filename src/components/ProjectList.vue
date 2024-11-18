<script>

export default {
  name: "ProjectList",
  data() {
    return {
      projects: [
        { id: 1, name: "project 1"},
        { id: 2, name: "project 2"},
      ],
    };
  },
};

    



</script>

<template>



 
  <div>
        <h1>project</h1>
    <ul>

      <li v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
      </li>

    </ul>

  </div>




</template>

<style>

</style>
