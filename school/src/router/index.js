import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Intro from '../components/Intro.vue'
import Add from '../components/Add.vue'
import Visual from '../components/Visual.vue'
import Source from "../components/Source.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        {
            path: '/home',
            component: Home,
            redirect: '/intro',
            children: [
                { path: '/intro', component: Intro },
                { path: '/add', component: Add },
                { path: '/visual', component: Visual },
                { path: '/source', component: Source }
            ]
        },
    ]
})

export default router