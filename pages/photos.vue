<template>
  <div>TODO</div>
</template>
<script>
import Flickr from 'flickr-sdk';

export default {
  async fetch() {
    const flickr = new Flickr('531b72bacdfb367a9c158d928654f5b7');
    const { body } = await flickr.people.getPublicPhotos({
      user_id: '195514992@N05',
      safe_search: 1,
      extras: [
        'url_q',
        'url_o'
      ]
    });
    // TODO
  }
}
</script>
