import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import ProjectsList from './components/ProjectList.vue';
// import ProjectDetail from './pages/ProjectDetail.vue';
import GitHubProjects from './components/GitHubProjects.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/projects', 
    name: 'ProjectList',
    component: ProjectsList ,
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: () => import('./pages/ProjectDetail.vue'),
    props: true ,
  },
  {
    path: '/github-projects',
    name: 'github-projects',
    component: GitHubProjects,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
