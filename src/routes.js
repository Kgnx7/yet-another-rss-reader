import RssFeeds from "./RssFeeds.vue"

export default [
  { 
    path: '/', component: RssFeeds, props: true,
    // children: [
    //   {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        // path: 'channel',
        // component: UserProfile
      // },
    // ]
  }
]