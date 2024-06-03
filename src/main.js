import './assets/styles/main.scss'

// Imports
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import Drawer from './pages/Drawer.vue'
import Favorites from './pages/Favorites.vue'

// Criação da aplicação Vue
const app = createApp(App)

// Definição das rotas
const routes = [
    { path: '/', name: 'Home', component: Home },
    { 
        path: '/drawer', 
        name: 'Drawer', 
        component: Drawer,
        meta: { title: 'Meu Carrinho - Nike' }
    },
    { 
      path: '/Favorites', 
      name: 'Favorites', 
      component: Favorites,
      meta: { title: 'Favoritos - nike' }
  },
]

// Criação do router
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title;
    } else {
      document.title = 'Nike';
    }
    next();
});

// Uso do router na aplicação Vue
app.use(router)

// Montagem da aplicação Vue no elemento com id 'app'
app.mount('#app')
