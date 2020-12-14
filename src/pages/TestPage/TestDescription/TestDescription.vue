<template>
  <v-card-text>
    <p class="text-h3">{{ test.title }}</p>
    <p class="text-body-1">{{ test.description }}</p>
  </v-card-text>
</template>

<script>
export default {
  name: "TestDescription",
  props: ['test'],
}
</script>

<style scoped>

</style>
