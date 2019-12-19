<template>
  <div id="app">
    <div class="container flex-container">
      <header-comp :title="title" :desc="desc"/>

      <main class="main flex-row">
        <rss-channels 
          :channels="rssChannels"
          @changeCurrentChannel="changeCurrentChannel"
          @handleDeleteChannel="deleteChannel"
          @addRssChannel="addRssChannel"
        />

        <router-view
          name="rssFeeds"
          :channels="rssChannels"
          :channelMessages="channelMessages"
          @updateFeed="updateFeed"
        />
        <router-view
          name="rssMsg"
        />
        <router-view
          name="selectChannelMsg"
        />

      </main>
      <footer-comp />
    </div>
  </div>
</template>

<script>
import Parser from "rss-parser"
import HeaderComp from "./Header.vue"
import RssChannels from "./RssChannels.vue"
// import RssFeeds from "./RssFeeds.vue"
import FooterComp from "./Footer.vue"

export default {
  name: 'app',
  components: {
    HeaderComp,
    RssChannels,
    // RssFeeds,
    FooterComp
  },
  data() {
    return  {
      title: "Rss reader 🔊",
      desc: "yet another rss reader, powered by vuejs, primitive-ui and rss-reader npm packages",
      currentChannel: 1,
      counter: 3,
      debag: null,
      rssChannels: [
        {
          id: 1,
          title: "Reddit: the front page of the internet",
          link: 'https://www.reddit.com/.rss'
        },
        {
          id: 2,
          title: "Новые вопросы на StackOverflow",
          link: 'https://stackoverflow.com/feeds/tag?tagnames=stl&sort=newest'
        },
      ],
      channelMessages: [],
    }
  },
  methods: {
    changeCurrentChannel(newChannel) {
      this.currentChannel = newChannel;
      
      this.updateFeed(this.rssChannels.find(ch => ch.id === this.currentChannel).link);
    },
    deleteChannel(id) {
      this.debag = id;
      this.rssChannels = this.rssChannels.filter(channel => channel.id != id);
    },
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
    addRssChannel(newChannel) {
      newChannel.id = this.counter++;
      this.rssChannels = [...this.rssChannels, {...newChannel}];
    }
  }
}
</script>

<style scoped>
  .flex-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .main {
    flex-grow: 1;
  }

</style>
