import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import VisualizarView from '../views/VisualizarView.vue'
import TelaInicialView from '../views/TelaInicialView.vue'


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
      path: '/TelaInicial',
      name: 'TelaInicial',
      component: TelaInicialView
    },

    {
      path: '/Visualizar/:id',
      name: 'Visualizar',
      component: VisualizarView,
      props: true
    }
  ]
})

export default router
