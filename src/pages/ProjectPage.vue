<script>
import axios from "axios";
import { store } from "../store.js";
import { gsap } from "gsap";

export default {
  data() {
    return {
      projects: null,
      store,
    };
  },
  methods: {
    ShowProject(project) {
      this.store.project = project;
    },
    async GetProjects() {
      try {
        axios.get("/project.json").then((response) => {
          console.log(response);
          this.projects = response.data.projects;
          console.log(this.projects);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.GetProjects();
  },
  mounted() {
    gsap.fromTo(
      ".card-body",
      { rotationY: 0 },
      { rotationY: 15, duration: 1, ease: "power1.out", repeat: -1, yoyo: true }
    );
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col6 d-flex justify-content-center">
        <div class="box-title">
          <h2 class="text-center">Projects</h2>
        </div>
      </div>
    </div>

    <div>
      <div class="row">
        <div class="col-12 mb-3 mb-sm-0 d-flex px-1 justify-content-around">
          <div class="card my-3" v-for="(project, i) in projects" :key="i">
            <div class="card-body">
              <h3 class="card-title">{{ project.Nome }}</h3>
              <p class="card-text">
                <span class="me-1">Created At:</span> {{ project.Creato }}
              </p>
              <p class="card-text">
                <span class="me-1">Technologies:</span>{{ project.Tecnologie }}
              </p>
              <div class="card-text">
                <router-link
                  :to="{
                    name: 'single_project',
                    params: { project },
                  }"
                >
                  <button class="btn" @click="ShowProject(project)">
                    <strong>Project</strong> 
                    <div id="container-stars">
                      <div id="stars"></div>
                    </div>

                    <div id="glow">
                      <div class="circle"></div>
                      <div class="circle"></div>
                    </div>
                  </button>
                </router-link>
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
.box-title {
  box-shadow: 0 4px 8px rgba(220, 222, 224, 0.5);
  border-radius: 20px;
  width: 200px;
  padding: 30px;
  h2 {
    color: aliceblue;
  }
}
.card {
  width: 250px;
  height: 300px;
  perspective: 1000px;
  background-color: rgb(220, 222, 224);
}

.card-body {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  color: black;
  border: 10px;
  border-color: black;
  position: relative;
}
p {
  color: black;
  font-weight: bold;
}
span {
  background-color: #981599;
  color: aliceblue;
  padding: 2px;
}
.card:hover .card-body {
  transform: rotateY(15deg);
}

.card-title {
  background-color: #981599;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: aliceblue;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 0.5rem;

  .btn {
    position: absolute;
    bottom: 15px;
    
  }
}

.card-body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  border-radius: 10px;
  border-color: black;
  z-index: -1;
  transform: rotateX(0deg);
  transition: transform 0.6s;
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
  background-image: linear-gradient(#212121, #212121),  linear-gradient(137.48deg, #ffdb3b 10%,#FE53BB 45%, #8F51EA 67%, #0044ff 87%);
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

strong {
  z-index: 2;
  font-family: 'Avalors Personal Use';
  font-size: 12px;
  letter-spacing: 5px;
  color: #FFFFFF;
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
  transform: scale(1.1)
}

.btn:active {
  border: double 4px #FE53BB;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.btn:active .circle {
  background: #FE53BB;
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
