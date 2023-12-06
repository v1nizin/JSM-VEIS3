<script>
import axios from "axios";
import Dsec from "../components/Dsec.vue"




export default {
  components: { Dsec },
  props: ["id"],
  data() {
    return {
      movel: {},
    };
  },
  async created() {
    const url = `https://backendprojetointegrador-dev-thmj.4.us-1.fl0.io/api/moveis/${this.id}`;
    const { data } = await axios.get(url);
    this.movel = data;
  },
};


</script>


<template>
  <div class="main">
    <Dsec :movel="movel" />
  </div>
</template>