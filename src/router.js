import { createRouter, createWebHistory} from 'vue-router';

import Homepage from './pages/homepage.vue'

import ProjectPage from './pages/ProjectPage.vue'

import SingleProjectPage from './pages/SingleProjectPage.vue'

import Aboutme from './pages/Aboutme.vue'

import Contacts from './pages/Contacts.vue'


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
            path:'/project/Show',
            name:'single_project',
            component: SingleProjectPage
        },
        {
            path:'/project/About_me',
            name:'About_me',
            component: Aboutme
        },
        {
            path:'/project/Contacts',
            name:'Contacts',
            component: Contacts
        },
    ]
});

export { router };


