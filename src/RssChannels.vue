<template>
  <aside id="rss-channels" class="flex-small main__aside">
    <rss-channels-list v-bind:channels="channels" />
  </aside>
</template>

<script>
import RssChannelsList from "./RssChannelsList.vue"

export default {
  name: 'rss-channels',
  components: {
    RssChannelsList
  },
  props: {
    channels: Array,
  },
}
</script>

<style>
  .main__aside {
    flex-grow: 0 !important;
    flex-basis: 400px !important;
  }
</style>
