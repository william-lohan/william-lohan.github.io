<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8" style="padding-bottom: 52px">
      <v-card class="blog-card">
        <v-card-title>{{ blog.title }}</v-card-title>
        <v-card-subtitle>{{ date }}</v-card-subtitle>
        <v-card-text>
          <nuxt-content :document="blog" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content, route }) {
    const blog = await $content('blog/' + route.params.slug).fetch();
    new Date().toDateString();
    return {
      blog,
    };
  },
  head() {
    return {
      title: this.blog.title,
    };
  },
  computed: {
    date() {
      return this.blog?.updatedAt
        ? new Intl.DateTimeFormat(undefined, {
            dateStyle: 'short',
          }).format(new Date(this.blog.updatedAt))
        : '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.blog-card {
  margin: 16px 0;
  background-color: rgba(
    map-get($material-dark-elevation-colors, '1'),
    0.5
  ) !important;
  backdrop-filter: blur(10px) grayscale(0.5);
}
</style>
