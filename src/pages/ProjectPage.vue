<script>
import axios from "axios";
import {store} from "../store.js";

export default {
  data() {
    return {
      projects: null,
      store,
    };
  },
  methods: {
    ShowProject(project)
    {
      this.store.project = project;
    },
    async GetProjects() {
      try {
        axios.get("/project.json").then((response) => {
          console.log(response);
          this.projects = response.data.projects;
          console.log(this.projects);
        });
        // const response = await fetch("../assets/project.json");
        // const projects = response.json();
        // const myProject = JSON.stringify(projects);
        // console.log(myProject);
        // return myProject;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.GetProjects();
  },
  mounted()
  {
   
  }
};
</script>

<template>
  <div class="container">
    <h1 class="text-center">my project page</h1>
    <div>
      <div class="row">
        <div class="col-12 mb-3 mb-sm-0 d-flex px-1 justify-content-around">
          <div class="card my-3" v-for="(project,i) in projects" :key="i">
            <div class="card-body">
              {{ console.log(project) }}
              <h3 class="card-title">{{ project.Nome }}</h3>
              <p class="card-text">Created At: {{ project.Img }}</p>
              <p class="card-text">Type: {{ project.Descrizione }}</p>
              <div class="card-text">
               
                <router-link
                  :to="{
                    name: 'single_project',
                    param: project
                    
                    
                  }"
                  ><span @click="ShowProject(project)">
                    Read Project
                  </span></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
