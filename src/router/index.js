import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import ItemDetail from "@/views/ItemDetail";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/item/:name',
        component: ItemDetail
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
