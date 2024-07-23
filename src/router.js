import { createRouter, createWebHistory} from 'vue-router';

import Homepage from './pages/homepage.vue'

import ProjectPage from './pages/ProjectPage.vue'

import SingleProjectPage from './pages/SingleProjectPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            name:'home',
            component: Homepage
        },
        {
            path:'/project',
            name:'project',
            component: ProjectPage
        },
        {
            path:'/project/:slug',
            name:'single_project',
            component: SingleProjectPage
        },
    ]
});

export { router };


