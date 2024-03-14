<script>
import axios from "axios";
export default {
  data() {
    return {
        projects:[],
    };
  },
  methods: {},
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
      this.projects = res.data.results.data;
      console.log(this.projects)
    });
  },
};
</script>

<template>

  <div class="container">
    <h1 class=" text-center ">my project page</h1>
    <div>
      <div class="row">
        <div class="col-12 mb-3 mb-sm-0 d-flex px-1 justify-content-around  ">
          <div class="card my-3 " v-for="project in projects" :key="project.id">
            <div class="card-body">
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-text"> Created At: {{ project.date }}
              </p>
              <p  class="card-text"> Type: {{ project.type.title }}
              </p>
              <div  class="card-text"> Technologies: <span > <ul>
                <li class="" v-for="technology in project.technologies" :key="i">
                  {{ technology.title }}
                </li>
              </ul></span>
              <router-link :to="{name:'single_project', params: {slug : project.slug}}" >Read Project</router-link>
            </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
