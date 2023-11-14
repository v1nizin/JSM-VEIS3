<script setup>
import { ref, reactive, } from 'vue'
import PlusBoxIcon from 'vue-material-design-icons/PlusBox.vue'

import Card from '../components/Card.vue'
import Modal from '../components/Modal.vue'
import imageService from '../services/images.js'
import moveisService from '../services/moveis.js'
</script>

<template>
      <h1 class="h1"> Produtos Cadastrados</h1>
  
        <Modal />
        <Card />

</template>
  
<style>
.h1 {
  font-size: 3vh;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-top: -5vh;
  text-align: center;
}
</style>
  