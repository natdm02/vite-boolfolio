<script>

export default {
    name: "Header",
};

</script>

<template>

    <header class="bg-dark text-white fixed-top shadow">
        <nav class="navbar navbar-expand-lg navbar-dark container">
            <router-link class="navbar-brand fw-bold" to="/">Portfolio</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/projects" class="nav-link">Progetti</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/github-projects" class="nav-link">GitHub Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <a href="http://127.0.0.1:8000/register" class="nav-link">Register</a>
                        </li>
                    </ul>
                </div>
        </nav>
    </header>

</template>



<style scoped>

body {
    padding-top: 70px; 
}


header {
    z-index: 10; 
}
</style>