<script>

export default {
  name:"Home",
  
};

</script>



<template>

<div>
    <!-- Hero Section -->
    <section class="hero d-flex justify-content-between align-items-center">
      <div class="hero-text">
        <h1>Hello! I'm <span class="highlight">Natali Di Marino</span></h1>
        <p class="lead">Fullstack Web Developer</p>
        <div class="mt-4">
          <router-link to="/projects" class="btn btn-custom btn-lg me-3">Guarda i Progetti</router-link>
          <a href="https://github.com" class="btn btn-outline-light btn-lg">Vai su GitHub</a>
        </div>
      </div>
      <div class="hero-image">
        <img src="/src/assets/img/img1.webp" alt="Natali">
      </div>
    </section>

    <!-- Divider -->
    <div class="divider"></div>

    <!-- About Me Section -->
    <section class="about d-flex align-items-center justify-content-between">
      <img src="/src/assets/img/img2.webp" alt="About Natali" class="about-image">
      <div class="info">
        <h2>About Me</h2>
        <p>Hi! I'm Natali, a passionate Fullstack Web Developer who loves creating modern and dynamic web applications. I specialize in bringing ideas to life with clean and efficient code.</p>
        <ul>
          <li><strong>Email:</strong> natalidimarino@gmail.com</li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com" target="_blank" style="color: #f39c12;">Visit my profile</a></li>
          <li><strong>Projects Completed:</strong> 70</li>
        </ul>
        <a href="/src/assets/img/CV Di Marino Natali.pdf" class="btn btn-custom">Scarica il CV</a>
      </div>
    </section>
  </div>

</template>

<style scoped>

body {
  background: linear-gradient(135deg, #1e1e1e, #2a2a2a);
  color: white;
  font-family: 'Poppins', Arial, sans-serif;
}
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  height: 100vh;
}
.hero-text {
  max-width: 50%;
  text-align: left;
}
.hero-text h1 {
  font-size: 3.5rem;
  font-weight: bold;
}
.hero-text .highlight {
  color: #f39c12;
}
.hero-image img {
  width: 450px;
  border-radius: 20px;
}
.divider {
  height: 4px;
  background: linear-gradient(to right, #f39c12, transparent);
  margin: 50px 0;
}
.about {
  padding: 50px;
}
.about img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
}
.about .info {
  margin-left: 20px;
}
.about .info h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}
.about .info ul {
  list-style: none;
  padding: 0;
}
.about .info ul li {
  margin-bottom: 10px;
  font-size: 1.2rem;
}
.about .info ul li strong {
  color: #f39c12;
}
.btn-custom {
  background-color: #f39c12;
  color: white;
  border: none;
  font-size: 1.2rem;
  padding: 10px 20px;
}
.btn-custom:hover {
  background-color: #d87b0a;
}

</style>









