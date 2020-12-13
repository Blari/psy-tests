<template>
  <v-app-bar app color="primary" flat dark>
    <div class="d-flex align-center">
      <v-btn icon to="dashboard">
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style src="./Header.scss" lang="scss" />
