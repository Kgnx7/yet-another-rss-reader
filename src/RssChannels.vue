<template>
  <aside id="rss-channels" class="flex-small main__aside">
    <rss-channels-list v-bind:channels="channels" @handleChannelClick="handleChannelClick"/>
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
  methods: {
    handleChannelClick(id) {
      this.$emit("changeCurrentChannel", id);
    }
  },
}
</script>

<style>
  .main__aside {
    flex-grow: 0 !important;
    flex-basis: 400px !important;
  }
</style>
