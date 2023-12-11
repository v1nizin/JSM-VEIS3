<script>
import axios from "axios";
import Desc from "../components/Desc.vue";


export default {
  components: { Desc  },
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
   
    <Desc :movel="movel" />
  </div>
</template>