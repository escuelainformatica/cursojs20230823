import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LibrosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'libros',
      component: () => HomeView
    },    
    {
      path: '/libroinsertar',
      name: 'libroinsertar',
      component: () => import('../views/LibroInsertarView.vue')
    },    
    {
      path: '/libroactualizar/:id',
      name: 'libroactualizar',
      component: () => import('../views/LibroActualizarView.vue')
    },    
  ]
})

export default router
