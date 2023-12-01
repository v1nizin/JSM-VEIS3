<script>
import MoveisApi from '../api/Movel';
const moveisApi = new MoveisApi();
export default {
  data() {
    return {
      movel: {},
      moveis: [],
    };
  },
  async created() {
    this.moveis = await moveisApi.buscarTodosOsMoveis();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await moveisApi.atualizarMovel(this.movel);
      } else {
        await moveisApi.adicionarMovel(this.movel);
      }
      this.moveis = await moveisApi.buscarTodosOsMoveis();
      this.movel = {};
    },
    async excluir(movel) {
      await moveisApi.excluirMovel(movel.id);
      this.moveis = await moveisApi.buscarTodosOsMoveis();
    },
    editar(movel) {
      Object.assign(this.movel, movel);
    },
  },
};


</script>

<template>
    <div>
            <button class="cancelbutton" @click="showModal = false">Cancelar</button>
            <button class="saveButton" @click="save">Adicionar</button>
      </div>
</template>
