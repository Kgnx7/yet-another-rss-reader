<template>
  <article id="rss-feeds" class="main__article feed">
    <h3 class="feed__header">{{feedTitle}}</h3>

  </article>
</template>

<script>
import Parser from "rss-parser"

export default {
  name: 'rss-feeds',
  data() {
    return {
      channelMessages: [],
      feedTitle: ""
    }
  },
  components: {
  },
  props: {
    channel: Object
  },
  created() {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    let parser = new Parser();

    (async () => {

      let feed = await parser.parseURL(CORS_PROXY + 'https://www.reddit.com/.rss');
      this.feedTitle = feed.title;
      feed.items.forEach(item => {
        this.channelMessages = [...this.channelMessages, item];
      });

    })();
  }
}
</script>

<style scoped>
  .feed__header {
    margin: 0;
    
  }
</style>
