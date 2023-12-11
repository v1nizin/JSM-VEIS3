<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";

</script>

<template>

  <div class="flex-col">
    <Nav></Nav>
        <RouterView />

  </div>
</template>