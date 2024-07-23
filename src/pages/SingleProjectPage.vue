<script>

import {store} from "../store.js";
export default {
  data() {
    return {
      store,
      project : store.project,
    };
  },
  methods:
   {},

  mounted()
  {
    console.log(store.project);
  }
 
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
              <h3 class="card-title">{{ project.Nome }}</h3>
              <p class="card-text">Created At: {{ project.Img }}</p>
              <p class="card-text">Type: {{ project.Tecnologie }}</p>
              <p class="card-text">Description: {{ project.Descrizione }}</p>
              <div class="card-text">
                Technologies:
               S
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<style lang="scss" scoped></style>
