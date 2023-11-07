<script setup>
import { ref, reactive, } from 'vue'
import PlusBoxIcon from 'vue-material-design-icons/PlusBox.vue'

import Card from '../components/Card.vue'
import Modal from '../components/Modal.vue'
import imageService from '../services/images.js'
import moveisService from '../services/moveis.js'


const coverUrl = ref('')
const file = ref(null)
const currentMovel = reactive({
  title: '',
  year: '',
  genre: '',
  rating: 5
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

const showForm = ref(false)
</script>


<template > 
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="flex justify-start mb-4">
        <button class="btn btn-wide" @click="showForm = true">
          <PlusBoxIcon />
          Cadastrar Móvel
        </button>
      </div>  
      <modal :visible="showForm" @close="showForm = false">
        <template #header>
          <h3>Cadastro </h3>
        </template>
        <template #body>  
          <form class="form">
            <div class="row mb-4  ">
              <div id="preview" class="w-full text-center">
                <input type="file" @change="onFileChange" />
                <div class="cover">
                  <img v-if="coverUrl" :src="coverUrl" />
                </div>
              </div>
            </div>
            <div class="form-item">
              <input type="text" placeholder="Nome" id="title" v-model="currentMovel.title" />
              <label for="title"></label>
            </div>
            <div class="form-item">
              <input type="number" placeholder="Quantidade"/>
            </div>
            <div class="form-item">
              <input type="text" placeholder="Cor"/>
            </div>
            <div class="form-item">
              <input type="number" placeholder="Preço"/>
            </div>
            <div class="form-item">
              <input type="Text" placeholder="Fornecedor"/>
            </div>

          </form>
        </template>
        <template #footer>
          <div class="footerButtons">
            <button @click="showForm = false">Cancelar</button>
            <button class="saveButton" @click="save">Salvar</button>
          </div>
        </template>
      </modal>
    </div>
  </div>
</template>

<style scoped
lang="css"> 
.addButton,
.saveButton {

  height: 2rem;
  align-self: center;
  margin-left: 75%; 
  background-color: #080;
  color: white;
  justify-content: space-around;
}



.footerButtons {
  display: flex;
  padding: 75 px;
}
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  row-gap: 0.5rem;
}

#preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#preview .cover {
  width: 200px;
  height: 270px;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
}

#preview img {
  width: 200px;
  height: 270px;
}
</style>