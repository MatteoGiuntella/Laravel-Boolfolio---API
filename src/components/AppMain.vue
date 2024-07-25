<script>
import axios from "axios";
export default {
  data() {
    return {
        // projects:[],
    };
  },
  // methods: {},
  // created() {
  //   axios.get("http://127.0.0.1:8000/api/projects").then((res) => {
  //     this.projects = res.data.results.data;
  //     console.log(this.projects)
  //   });
  // },
};
</script>

<template> 
 
  <router-view></router-view>
</template>

<style lang="scss" scoped>

</style>
