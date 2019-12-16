<template>
  <div id="app">
    <div class="container">
      <header-comp :title="title" :desc="desc"/>
      <main>
        <rss-channels-list v-bind:channels="rssChannels"/>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderComp from "./Header.vue"
import RssChannelsList from "./RssChannelsList.vue"

export default {
  name: 'app',
  components: {
    HeaderComp,
    RssChannelsList
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

<style>

</style>
