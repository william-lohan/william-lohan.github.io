<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8" style="padding-bottom: 52px">
      <v-card class="home-card">
        <v-card-text>
          <nuxt-content :document="page" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('home').fetch();

    return {
      page,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.home-card {
  margin: 16px 0;
  background-color: rgba(
    map-get($material-dark-elevation-colors, '1'),
    0.5
  ) !important;
  backdrop-filter: blur(10px) grayscale(0.5);
}
</style>
