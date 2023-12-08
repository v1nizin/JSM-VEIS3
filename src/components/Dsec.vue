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
  <div class="Visualizar">
    <Nav></Nav>
    <div class="card lg:card-side bg-base-100 shadow-2xl mb-4">
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
        <div class="button-container">
          <button @click="() => excluir(movel)" class="btn btn-primary">Excluir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Visualizar {
  margin-top: 5px;
  margin-left: 24%;
  position: sticky;
}

.card {
  height: auto;
  width: 100vh;
}

.shadow-2xl {
  --shadow: 0 20px 30px -6px rgba(0, 0, 0, 0.3), 0 12px 12px -6px rgba(0, 0, 0, 0.15);
  box-shadow: var(--shadow);
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.button-container {
  margin-top: 10px; /* Ajuste a margem conforme necessário */
  align-self: flex-start; /* Alinhe o botão à esquerda */
}

h2 {
  margin-bottom: 5px;
}
</style>
