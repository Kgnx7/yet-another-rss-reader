<template>
  <article id="rss-feeds" class="main__article flex-large">
    <h3 class="feed__header" v-if="errMsg != null">{{errMsg}}</h3>
    <div class="feed__wrapper" v-else>
      <h3 class="feed__header">{{feedTitle}}</h3>
      <ul class="feed__list">
        <li v-for="msg in channelMessages" v-bind:key="msg.id">
          <rss-msg-card :msg="msg"/>
        </li>
      </ul>
    </div>
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
      debag: this.$route.params.id,
      channel: 1,
      errMsg: null
    }
  },
  components: {
    RssMsgCard
  },
  props: {
    channels: Array,
    // channelMessages: Array,
  },
  methods: {
    isURLValid(url) {
      
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(url);
    },
    updateFeed(link) {
      if (!this.isURLValid(link)) {
        this.errMsg = "URL is invalid";
        return;
      }
      this.errMsg = null;

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
    this.channel = this.channels.find(channel => channel.id == this.$route.params.id)
    this.updateFeed(this.channel.link);
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
