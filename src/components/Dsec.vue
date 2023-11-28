<script >
import MoveisApi from "../api/Movel.js";
const moveisapi = new MoveisApi();
export default {
  props: ["movel"],
};

</script>

<template>


  <h2>lançamento: {{ movel.preco }}</h2>

  <div class="card lg:card-side bg-base-100 shadow-xl">
          <figure class="w-56">
            <img :src="movel.foto.url" alt="Capa do Livro" />
          </figure>
  </div>
 
</template>
