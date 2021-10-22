<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" style="padding-bottom: 52px">
      <v-card class="links-list">
        <v-card-text>
          Things and people on the web I think you should check out.
        </v-card-text>
      </v-card>
      <v-list two-line class="links-list">
        <v-list-item
          v-for="(l, index) in links"
          :key="l.slug"
          :href="l.url"
          :target="l.url ? '_blank' : undefined"
          :rel="l.url ? 'noopener' : undefined"
          two-line
        >
          <v-list-item-icon class="icon">
            <v-icon>{{ l.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ l.name }}</v-list-item-title>
            <v-list-item-subtitle ref="userText">
              {{ l.user }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const links = await $content('links').fetch();
    return {
      links,
    };
  },
  head: {
    title: 'Links',
  },
};
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.links-list {
  margin: 16px 0;
  background-color: rgba(
    map-get($material-dark-elevation-colors, '1'),
    0.5
  ) !important;
  backdrop-filter: blur(10px) grayscale(0.5);
}
.icon {
  margin-bottom: 16px !important;
}
</style>
