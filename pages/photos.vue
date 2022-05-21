<template>
  <v-container>
    <v-row>
      <v-col
        v-for="photo in photos"
        :key="photo.id"
        cols="4"
        md="2"
        class="d-flex justify-center"
      >
        <v-img
          :src="photo.url_q"
          aspect-ratio="1"
          width="150"
          height="150"
          class="flex-grow-0 grey lighten-2 clickable"
          @click="clickImage(photo)"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Flickr from 'flickr-sdk';

export default {
  data() {
    return {
      photos: [],
    };
  },
  async fetch() {
    const flickr = new Flickr('531b72bacdfb367a9c158d928654f5b7');
    const { body } = await flickr.people.getPublicPhotos({
      user_id: '195514992@N05',
      safe_search: 1,
      extras: ['url_q', 'url_l'],
    });
    this.photos = body.photos.photo;
  },
  methods: {
    clickImage({ url_l }) {
      const element = document.createElement('img');
      element.src = url_l;
      element.onfullscreenchange = () => {
        if (document.fullscreenElement !== element) {
          document.body.removeChild(element);
        }
      }
      document.body.appendChild(element);
      element.requestFullscreen();
    }
  }
};
</script>
<style scoped>
.clickable {
  cursor: pointer;
}
</style>
