<template>
  <article id="rss-feeds" class="main__article feed">
    <h3 class="feed__header">{{feedTitle}}</h3>
    <ul class="feed__list">
      <li v-for="msg in channelMessages" v-bind:key="msg.id">
        <rss-msg-card :msg="msg"/>
      </li>
    </ul>
  </article>
</template>

<script>
import RssMsgCard from "./RssMsgCard.vue"

export default {
  name: 'rss-feeds',
  data() {
    return {
      feedTitle: "",
      test: 1
    }
  },
  components: {
    RssMsgCard
  },
  props: {
    channel: Object,
    channelMessages: Array
  },
  methods: {
  },
  created() {
    // it should be uncommented if you want to download rss feed from channel 1 by default
    // this.$emit('updateFeed', this.channel.link);
  }
}
</script>

<style scoped>
  .feed__header {
    margin: 0;
  }

  .feed__list {
    list-style: none;
    padding: 0;
  }
</style>
