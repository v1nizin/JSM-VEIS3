<script setup>
import { ref, reactive, } from 'vue'
import Card from '../components/Card.vue'

import Nav from "../components/Nav.vue";
</script>

<template>
        <Nav></Nav>
    
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
  