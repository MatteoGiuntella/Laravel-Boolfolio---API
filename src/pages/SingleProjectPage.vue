<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      store,
      project: store.project,
    };
  },
  methods: {},

  mounted() {
    console.log(store.project);
  },
};
</script>

<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col-12 mb-3 mb-sm-0 d-flex px-1 justify-content-around">
          <div class="card my-3">
            <div class="card-body">
              <h2 class="card-title">{{ project.Nome }}</h2>
              <!-- <p class="card-text">{{ project.Img }}</p> QUESTO è DA CAMBIARE-->
              <p class="card-text"><span>Tecnologies:</span> {{ project.Tecnologie }}</p>
              <p class="card-text"><span>Description:</span> {{ project.Descrizione }}</p>
              <div class="card-text">
                <button class="btn">
                <a target="_blank" :href="project.Link">SHOW</a>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 20px;
}
h2 {
    color: aliceblue;
  }
  p{
    font-weight: bold;
  }
  span{
    padding: 2px;
    background-color: #981599;
    color: aliceblue;
    margin-right: 2px;
  }
.single-project-card {
  width: 250px;
  height: auto; /* Altezza automatica per adattarsi al contenuto */
  background-color: aliceblue;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.card-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-title {
  background-color: #981599;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: aliceblue;
  padding: 10px;
  border-radius: 5px;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13rem;
  overflow: hidden;
  height: 3rem;
  background-size: 300% 300%;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: linear-gradient(#212121, #212121),
    linear-gradient(
      137.48deg,
      #ffdb3b 10%,
      #fe53bb 45%,
      #8f51ea 67%,
      #0044ff 87%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
}

#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}

a {
  z-index: 2;
  font-family: "Avalors Personal Use";
  font-size: 20px;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
}

#glow {
  position: absolute;
  display: flex;
  width: 12rem;
}

.circle {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
}

.circle:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.circle:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.btn:hover #container-stars {
  z-index: 1;
  background-color: #212121;
}

.btn:hover {
  transform: scale(1.1);
}

.btn:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.btn:active .circle {
  background: #fe53bb;
}

#stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

#stars::after {
  content: "";
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 90s linear infinite;
}

#stars::after {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

#stars::before {
  content: "";
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
}

#stars::before {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
</style>
