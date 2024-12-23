<script>

export default {
  name:"Home",
  
};

</script>



<template>

  <div class="hero-container">
    <div class="hero-content text-center text-white">
      <h1 class="display-3 fw-bold"> Ciao! Sono <span class="highlight">Natalì</span></h1>
        <p class="lead"> Sviluppo applicazioni web moderne e dinamiche. Scopri di più sui miei progetti e sulle mie competenze</p>
          <div class="hero-buttons mt-4">
            <router-link to="/projects" class="btn btn-outline-light btn-lg me-3">Guarda i Progetti</router-link>
            <router-link to="/github-projects" class="btn btn-light btn-lg">Vai su GitHub</router-link>
          </div>
    </div>
  </div>

</template>

<style scoped>

.hero-container {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #1d1f21, #3e4c59);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.hero-content h1 {
  font-size: 3rem;
}

.hero-content .highlight {
  color: #007bff;
  text-shadow: 0 0 10px rgba(0, 123, 255, 0.8);
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(0, 123, 255, 0.8), 0 0 20px rgba(0, 123, 255, 0.6);
  }
  to {
    text-shadow: 0 0 20px rgba(0, 123, 255, 1), 0 0 30px rgba(0, 123, 255, 0.8);
  }
}

.hero-buttons .btn {
  transition: transform 0.3s, box-shadow 0.3s;
}

.hero-buttons .btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.3);
}


.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
  animation: rotate 10s infinite linear;
  z-index: 1;
  filter: blur(80px);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>









