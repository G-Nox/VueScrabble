import VueRouter from 'vue-router'
import Home from '../views/LandingPage.vue'
import Scrabble from '../views/ScrabblePage.vue'
import NotFound from '../views/HelloWorld.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/scrabble',
        name: 'Scrabble',
        component: Scrabble
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFound
    },
]

const router = new VueRouter({
    mode: 'history',
    base:"/",
    routes
})

export default router