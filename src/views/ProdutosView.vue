<script setup>
import { ref, reactive, } from 'vue'
import PlusBoxIcon from 'vue-material-design-icons/PlusBox.vue'

import Card from '../components/Card.vue'
import Modal from '../components/Modal.vue'
import imageService from '../services/images.js'
import moveisService from '../services/moveis.js'
</script>

<template>

    <div>
      <h1>Produtos Cadastrados</h1>
    </div>
  
    <Modal />
    <Card />
   

  </template>
  
  <style>

  </style>
  