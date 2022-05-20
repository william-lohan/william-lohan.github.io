<template>
  <v-app dark>
    <div class="parallax-container">
      <v-img
        src="/vapor.jpg"
        class="parallax-image"
        :style="{ top: parallax + 'px' }"
      ></v-img>
    </div>
    <div v-scroll="onScroll" class="parallax-foreground">
      <v-app-bar fixed app :dense="small">
        <v-toolbar-items>
          <v-btn nuxt to="/">Home</v-btn>
          <v-btn nuxt to="/blog">Blog</v-btn>
          <v-btn nuxt to="/photos">Photos</v-btn>
          <v-btn nuxt to="/social">Social</v-btn>
          <v-btn nuxt to="/links">Links</v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <Nuxt></Nuxt>
      <v-footer class="d-flex justify-center" app>
        <span>© {{ copyrightDate }}</span>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      parallax: 0,
      copyrightDate: new Date().getFullYear(),
    };
  },
  computed: {
    small() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    onScroll() {
      const scrollHeight =
        document.body.scrollHeight || document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset ||
        window.screenTop ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;
      const innerHeight = window.innerHeight;
      this.parallax =
        0 - Math.floor(128 * (scrollTop / (scrollHeight - innerHeight)));
    },
  },
};
</script>

<style lang="scss" scoped>
.parallax-container {
  position: fixed;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  .parallax-image {
    height: calc(100vh + 128px);
    position: relative;
    top: 0;
  }
}
.parallax-foreground {
  padding-top: 64px;
  z-index: 1;
}

.v-btn.v-btn--active:before {
  color: #bf00ff; /* TODO use var */
}
</style>

<style lang="scss">
.v-toolbar--dense {
  .v-toolbar__content {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
