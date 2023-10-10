<script setup>
import { RouterView } from "vue-router";
import Nav from "./components/NavBar.vue";

</script>

<template>
  <div class="flex-col" >
    <div>
    <Nav />
  </div>
  <div>
    <main>
      <RouterView />
    </main>
  </div>
  </div>
</template>