<template>
  <div class="w-full justify-center flex">
    <Hero />
  </div>
</template>

<script setup>
import Hero from './components/Hero.vue'
</script>

<style scoped>
.logo {
  height: 6em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
