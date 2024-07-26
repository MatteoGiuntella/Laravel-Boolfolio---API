<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import {store} from './store.js'
import { errorMessages } from 'vue/compiler-sfc';
export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppHeader,
        AppMain,

    },
    methods: {
     
        
    }
    // mounted(){
    //      axios.get().then((response) =>{
    //          console.log(response)
    //     });
    // }
}
</script>

<template>

        <AppHeader />
        <AppMain />
        

  </template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
*{ font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  }
</style>
