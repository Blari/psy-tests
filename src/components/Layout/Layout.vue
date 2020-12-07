<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header/Header';

export default {
  name: 'Layout',

  components: {
    Header,
  },
};
</script>

<style src="./Layout.scss" lang="scss" />
