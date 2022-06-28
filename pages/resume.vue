<template>
  <v-container>
    <v-row justify="center" align="center">
      <i>Requires Google Chrome</i>
    </v-row>
    <v-row justify="center" align="center">
      <iframe src="https://gatimus.com/resume_office/"></iframe>
    </v-row>
    <v-row justify="center" align="center">
      <a href="https://gatimus.com/resume_office/Resume 2022.pdf" download="William Lohan" target="_blank">Download</a>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head: {
    title: 'Resume',
  },
};
</script>

<style lang="scss" scoped>
  iframe {
    border: none;
    min-width: 1280px;
    min-height: 720px;
  }
</style>
