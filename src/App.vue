<template>
  <div id="app">
    <div class="container flex-container">
      <header-comp :title="title" :desc="desc"/>

      <main class="main flex-row">
        <rss-channels :channels="rssChannels"/>
        <div class="flex-large">
          placeholder
        </div>
      </main>
      <footer-comp />
    </div>
  </div>
</template>

<script>
import HeaderComp from "./Header.vue"
import RssChannels from "./RssChannels.vue"
import FooterComp from "./Footer.vue"

export default {
  name: 'app',
  components: {
    HeaderComp,
    RssChannels,
    FooterComp
  },
  data() {
    return  {
      title: "Rss reader 🔊",
      desc: "yet another rss reader, powered by vuejs, primitive-ui and rss-reader npm packages",
      rssChannels: [
        {
          id: 1,
          title: "Reddit: the front page of the internet",
          link: 'https://www.reddit.com/.rss'
        },
        {
          id: 2,
          title: "Все публикации подряд на Хабре",
          link: 'https://habr.com/ru/rss/all/all/'
        },
      ],
    }
  },
  methods: {
    
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
