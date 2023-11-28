import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import VisualizarView from '../views/VisualizarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/Produtos',
      name: 'Produtos',
      component: ProdutosView
    },

    {
      path: '/Visualizar',
      name: 'Visualizar',
      component: VisualizarView
    }
  ]
})

export default router
