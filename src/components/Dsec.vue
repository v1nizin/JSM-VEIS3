<script>
import MoveisApi from "../api/Movel.js";
const moveisApi = new MoveisApi(); // Corrigido para "moveisApi"
export default {
  data() {
    return {
      movel: {},
      moveis: [],
    };
  },
  async created() {
    this.moveis = await moveisApi.buscaTodosOsMoveis(); // Corrigido para usar "moveisApi"
  },
  methods: {
    async salvar() {
      if (this.movel.id) {
        await moveisApi.atualizarMovel(this.movel);
      } else {
        await moveisApi.adicionarMovel(this.movel);
      }
      this.moveis = await moveisApi.buscaTodosOsMoveis();
      this.movel = {};
    },
    async excluir(movel) {
      await moveisApi.excluirMovel(movel.id);
      this.moveis = await moveisApi.buscaTodosOsMoveis();
    },
    editar(movel) {
      Object.assign(this.movel, movel);
    },
  },
  props: ["movel"],
};
</script>

<template>
  <Nav></Nav>
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
        <button @click="() => excluir(movel)" class="btn btn-primary">Excluir</button>
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
