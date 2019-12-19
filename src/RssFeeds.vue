<template>
  <article id="rss-feeds" class="main__article flex-large">
    <h3 class="feed__header" v-if="msg != null">{{msg}}</h3>
    <div class="feed__wrapper" v-else>
      <h3 class="feed__header">{{feedTitle}}</h3>
      <p class="feed__p">URL: {{feedUrl}}</p>
      <p class="feed__p">Description: {{feedDesc}}</p>
      <p class="feed__p">Link: {{feedLink}}</p>
      <p class="feed__p">Amoung of messages: <span class="feed__amount">{{channelMessages.length}}</span></p>
      <label class="feed__label">
        <input type="checkbox">
        Show me only unread msg
      </label>
      <hr>

      <ul class="feed__list" v-if="onlyUnread">
        <li v-for="msg in channelMessages.filter(ch=>ch.isRead===false)" v-bind:key="msg.id">
          <rss-msg-card :msg="msg"/>
        </li>
      </ul>
      
      <ul class="feed__list" v-else>
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
      feedTitle: '',
      feedUrl: '',
      feedDesc: '',
      feedLink: '',
      debag: this.$route.params.id,
      channel: null,
      msg: null,
      channelMessages: [],
      onlyUnread: false,
      isLoading: false
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
        this.msg = "URL is invalid";
        return;
      }

      const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
      let parser = new Parser();
      this.channelMessages = [];
      // this.isLoading = true;
      this.msg = "loading...";

      (async () => {
        let feed = await parser.parseURL(CORS_PROXY + link);
        this.feedTitle = feed.title;
        this.feedUrl = feed.feedUrl;
        this.feedDesc = feed.description;
        this.feedLink = feed.link;
        
        feed.items.forEach(item => {
          item.isRead = false;
          this.channelMessages = [...this.channelMessages, item];
        });

        // this.isLoading = false;
        this.msg = null;
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
  .feed__p {
    margin: 0;
    margin-top: 15px;
  }
  .feed__amount {
    font-weight: bold;
  }
  .feed__label {
    cursor: pointer;
  }
</style>
