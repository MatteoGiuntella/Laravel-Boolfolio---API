<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
      this.projects = res.data.results.data;
    });
  },
};
</script>

<template>
  <router-view></router-view>
  <div class="container">
    <h1>my project</h1>
    <div>
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card" v-for="project in projects" :key="project.id">
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
