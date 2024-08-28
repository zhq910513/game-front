import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/login/LoginView.vue';
import DashboardView from '@/views/dashboard/DashboardView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LoginView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
