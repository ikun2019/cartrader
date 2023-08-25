<template>
  <div v-if="car">
    <!-- CAR DETAIL PAGE -->
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
    <!-- CAR DETAIL PAGE   -->
  </div>
</template>

<script setup>
const route = useRoute();
const { cars } = useCars();
console.log('useRoute =>', route);
useHead({
  title: route.params.name
})

const car = computed(() => {
  return cars.find((c) => {
    return c.id === parseInt(route.params.id)
  })
})

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with id of ${route.params.id} does not exist.`
  })
}

definePageMeta({
  layout: 'custom'
})
</script>