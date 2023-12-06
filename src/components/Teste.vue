<script setup>
import MoveisApi from "../api/Movel";
import {ref, reactive, onMounted} from "vue"

const moveisApi = new MoveisApi();
let movel = {};
let moveis = [];

async function buscarMoveis() {
  moveis = await moveisApi.buscaTodosOsMoveis();
}

async function salvar() {
  if (movel.id) {
    await moveisApi.atualizarMovel(movel);
  } else {
    await moveisApi.adicionarMovel(movel);
  }
  await buscarMoveis();
  movel = {};
}

async function excluir(movel) {
  await moveisApi.excluirMovel(movel.id);
  await buscarMoveis();
}

function editar(movel) {
  Object.assign(movel, movel);
}

buscarMoveis();


import imageService from '@/services/images.js'
import moveisService from '@/services/moveis.js'
import genreService from '@/services/genres.js'

const genres = ref([])
const coverUrl = ref('')
const file = ref(null)
const currentMovel = reactive({
  title: '',
  year: '',
  genre: '',
  rating: 0
})

function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}

async function save() {
  const image = await imageService.uploadImage(file.value)
  currentMovel.cover_attachment_key = image.attachment_key
  await moveisService.saveMovel(currentMovel)
  Object.assign(currentMovel, {
    id: '',
    title: '',
    year: '',
    genre: '',
    rating: 0,
    cover_attachment_key: ''
  })
  showForm.value = false
}

onMounted(async () => {
  const data = await genreService.getAllGenres()
  genres.value = data
})

const showForm = ref(false)


</script>

<template>
















  <div class="myComponentInputs">
    <!-- Alterado para um nome mais específico -->
    <h1 class="h1_home">Cadastro de Móveis</h1>

    <input type="file"      @change="onFileChange" />

    <input class="input_movel"  type="text" v-model="movel.nome"  placeholder="Móvel"/>

    <input type="number" v-model="movel.quantidade" placeholder="Quantidade" />

    <input type="text" v-model="movel.cor" placeholder="Cor" />

    <input type="number" v-model="movel.preco" placeholder="Preço" />

    <input type="number" v-model="movel.categoria" placeholder="Categoria" />

    <input type="number" v-model="movel.fornecedor" placeholder="Fornecedor   " />

    <button @click="salvar" class="Cadastrar">Cadastrar</button>
  </div>
</template>




<style scoped>
input {
  height: 7vh;
  margin-bottom: 35px;
  margin-left: 76.8vh;
  margin-top: 2px;
  border-radius: 30px;
  padding: 5px;
  display: flex;
  flex-direction: column;
}

.Cadastrar {
  margin-top: 5px;
  margin-left: 83vh;
  border-radius: 30px;
  height: 50px;
  width: 150px;
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
}

.Cadastrar:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5, inset -4px -4px 12px #ffffff;
}

.Cadastrar:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.Cadastrar:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #009087;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.Cadastrar:hover {
  color: #ffffff;
  border: 1px solid #009087;
}

.Cadastrar:hover:before {
  top: -35%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.Cadastrar:hover:after {
  top: -45%;
  background-color: #df7d0c;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}
.h1_home {
  margin-left: 75vh;
  margin-bottom: 40px;
  font-size: 4vh;
}
</style>