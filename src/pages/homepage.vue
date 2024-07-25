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
    <div class="container m-5">
      <div class="row justify-content-center mt-5 border-white border-3">
        <div class="col-4">
          <div class="container-img ms-5">
            <img class="img-" src="/public/img/logo.png" alt="" />
          </div>
        </div>
        <div class="col-6">
          <div class="container-text">
            <h1 class="mt-5">Matteo Giuntella</h1>
            <h3 class="mt-1">Web Developer Junior</h3>
            <p class="">
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
.row {
  box-shadow: 0 4px 8px rgba(220, 222, 224, 0.5);
  border-radius: 20px;
  padding: 50px;
  position: relative;
  z-index: 1;
  top: 2px;
}
.container-img {
  width: 80%;
  .img- {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
}

.container-text {
  h1,
  h3,
  p {
    color: rgb(220, 222, 224);
  }
  p {
    margin-top: 10px;
    font-style: oblique;
  }
  .matrix-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
  z-index: 0; /* Ensure matrix effect is behind content */
}

.matrix-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    90deg,
    rgba(0, 255, 0, 0.5),
    rgba(0, 255, 0, 0.5) 1px,
    transparent 1px,
    transparent 2px
  );
  animation: matrix-animation 1s linear infinite;
}

@keyframes matrix-animation {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}
}

</style>
