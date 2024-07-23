<script>
import axios from "axios";
export default {
  data() {
    return {
      project: null,
    };
  },
  methods: {},
 
};
</script>

<template>

  <div class="container">
    <h1 class="text-center">my single project</h1>
    <div>
      <div class="row">
        <div class="col-12 mb-3 mb-sm-0 d-flex px-1 justify-content-around">
          <div class="card my-3">
            <div class="card-body">
              <h3 class="card-title">{{ project.title }}</h3>
              <p class="card-text">Created At: {{ project.date }}</p>
              <p class="card-text">Type: {{ project.type.title }}</p>
              <p class="card-text">Description: {{ project.description }}</p>
              <div class="card-text">
                Technologies:
                <span>
                  <ul>
                    <li
                      class=""
                      v-for="technology in project.technologies"
                      :key="i"
                    >
                      {{ technology.title }}
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<style lang="scss" scoped></style>
