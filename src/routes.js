import RssFeeds from "./RssFeeds.vue"
import selectChannel from "./selectChannel.vue"

export default [
  { 
    path: '/', components: {selectChannelMsg: selectChannel}, props: false,
  },
  {
    path: '/channel/:id', components: {rssFeeds: RssFeeds}, props: true,
  },
  {
    path: '*', redirect: '/'
  }
]