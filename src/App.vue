<template>
  <div
    class="w-full justify-center flex flex-col items-center overflow-hidden pt-20"
  >
    <Hero />
    <NewsBanner />
  </div>
</template>

<script setup>
import Hero from "./components/Hero.vue";
import NewsBanner from "./components/NewsBanner.vue";
</script>