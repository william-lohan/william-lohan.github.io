<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8" style="padding-bottom: 52px">
      <v-card v-for="blog in blogs" :key="blog.slug" class="blog-card">
        <v-card-title>{{ blog.title }}</v-card-title>
        <v-card-text>{{ blog.description }}</v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn nuxt :to="'/blog/' + blog.slug">View</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const blogs = await $content('blog')
      .only(['title', 'description', 'slug'])
      .where({ publish: true })
      .fetch();

    return {
      blogs,
    };
  },
  head: {
    title: 'Blog',
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
