<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8" style="padding-bottom: 52px">
      <v-card class="social-list">
        <v-card-text> Social media and gamer tags. </v-card-text>
      </v-card>
      <v-list two-line class="social-list">
        <v-list-item
          v-for="(s, index) in social"
          :key="s.slug"
          :href="s.url"
          :target="s.url ? '_blank' : undefined"
          two-line
        >
          <v-list-item-icon class="icon">
            <v-icon>{{ s.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ s.name }}</v-list-item-title>
            <v-list-item-subtitle ref="userText">
              {{ s.user }}
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
    const social = await $content('social').fetch();
    return {
      social,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';

.social-list {
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
