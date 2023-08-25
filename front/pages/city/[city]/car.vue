<template>
  <div>
    <!-- CARS PAGE -->
    <div class="mt-32 flex">
      <CarSidebar />
      <NuxtPage />
    </div>
    <!-- CARS PAGE -->
  </div>
</template>

<script setup>
const route = useRoute();
console.log('useRoute =>', route.params);
useHead({
  title: `Cars in ${route.params.city}`
})

definePageMeta({
  layout: 'custom'
})
</script>