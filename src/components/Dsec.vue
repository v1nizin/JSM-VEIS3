<script >
import MoveisApi from "../api/Movel.js";
const moveisapi = new MoveisApi();
export default {
  props: ["movel"],
};

</script>

<template>
  <div class="Visualizar">
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure class="w-56">
        <img :src="movel.foto.url" alt="Capa do Livro" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ movel.nome || "Título não disponível" }}
        </h2>
        <p>Quantidade: {{ movel.quantidade }}</p>
        <p>Preço: R${{ movel.preco || "Título não disponível" }}</p>
        <p>Cor: {{ movel.cor }}</p>
        <p>Fornecedor: {{ movel.fornecedor }}</p>
        <p>Categoria: {{ movel.categoria }}</p>
      </div>
    </div>
  </div>
</template>

<style setup>
.Visualizar {
  margin-top: 5px;
  z-index: -110;
  position: sticky;
}

.card {
  height: 30vh;
}
  
h2 {
  margin-bottom: 5px;
}
</style>
