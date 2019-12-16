<template>
  <aside id="rss-channels">
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
  
</style>
