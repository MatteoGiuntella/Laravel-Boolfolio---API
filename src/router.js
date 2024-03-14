import { createRouter, createWebHistory} from 'vue-router';

import homepage from './pages/homepage.vue'

import project from './pages/project.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: homepage
        },
        {
            path:'/project',
            name:'project',
            component: project
        },
    ]
});

export { router };


