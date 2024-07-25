<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<template>
    
  <div
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="1000"
    data-aos-offset="0"
  >
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-4">
          <div class="container-img ms-5">
            <img src="/public/img/logo.png" alt="" />
          </div>
        </div>
        <div class="col-6">
          <div class="container-text">
            <h1 class="mt-5">Matteo Giuntella</h1>
            <h3 class="mt-1">Web Developer Jr</h3>
            <p>
              “Cerchiamo di cambiare il nostro atteggiamento tradizionale verso
              la costruzione di programmi. Invece di immaginare che il nostro
              compito principale sia quello di istruire un computer su cosa
              fare, concentriamoci piuttosto a spiegare agli esseri umani ciò
              che vogliamo che un computer faccia.”
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/home.scss";
.container-img {
  width: 80%;
}
img {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}
</style>
