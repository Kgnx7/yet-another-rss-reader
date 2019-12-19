<template>
  <article id="rss-feeds" class="main__article flex-large">
    <h3 class="feed__header">{{feedTitle}}</h3>
    <ul class="feed__list">
      <li v-for="msg in channelMessages" v-bind:key="msg.id">
        <rss-msg-card :msg="msg"/>
      </li>
    </ul>
  </article>
</template>

<script>
import Parser from "rss-parser"
import RssMsgCard from "./RssMsgCard.vue"

export default {
  name: 'rss-feeds',
  data() {
    return {
      feedTitle: "",
      test: 1,
      channel: this.channels.find(channel => channel.id == this.$route.params.id)
    }
  },
  components: {
    RssMsgCard
  },
  props: {
    channels: Array,
    channelMessages: Array,
  },
  methods: {

     updateFeed(link) {
      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      let parser = new Parser();
      this.channelMessages = [];

      (async () => {

        let feed = await parser.parseURL(CORS_PROXY + link);
        this.feedTitle = feed.title;
        feed.items.forEach(item => {
          this.channelMessages = [...this.channelMessages, item];
        });

      })();
    },

  },
  created() {
    this.$emit('updateFeed', this.channel.link);
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
