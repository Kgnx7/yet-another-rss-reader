import RssFeeds from "./RssFeeds.vue"
import rssMsg from "./RssMsg.vue"
import selectChannel from "./selectChannel.vue"

export default [
  { 
    path: '/', components: {selectChannelMsg: selectChannel},
  },
  {
    path: '/channel/:id', components: {rssFeeds: RssFeeds}, props: true
  },
  {
    path: '/channel/:cid/msg/:mid', name: 'msg', components: {rssMsg: rssMsg}, props: true,
  },
  {
    path: '*', redirect: '/'
  }
]