import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import ProjectsList from './components/ProjectList.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/projects', 
    name: 'ProjectsList',
    component: ProjectsList ,
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: ProjectDetail,
    props: true ,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
