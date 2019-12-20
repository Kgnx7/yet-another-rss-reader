<template>
  <aside id="rss-channels" class="flex-small main__aside">
    <rss-channel-form @handleFormSubmit="handleFormSubmit"/>
    <rss-channels-list 
      v-bind:channels="channels"
      @handleDeleteChannel="handleDeleteChannel"
    />
  </aside>
</template>

<script>
import RssChannelsList from "./RssChannelsList.vue"
import RssChannelForm from "./RssChannelForm.vue"

export default {
  name: 'rss-channels',
  components: {
    RssChannelsList,
    RssChannelForm
  },
  props: {
    channels: Array,
  },
  methods: {
    handleDeleteChannel(id) {
      this.$emit("handleDeleteChannel", id);
    },
    handleFormSubmit(newChannel) {
      this.$emit('addRssChannel', newChannel)
    }
  },
}
</script>

<style>
  .main__aside {
    flex-grow: 0 !important;
    flex-basis: 400px !important;
    padding-right: 15px;
  }
</style>
