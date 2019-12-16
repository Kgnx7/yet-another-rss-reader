<template>
  <section id="rss-msg-card" class="">
    <h4>{{msg.title}}</h4>
    <time :datetime="msg.isoDate">July 7</time>
    <p>{{msg.contentSnippet}}</p>
    <a :href="msg.link">link to origin</a>
  </section>
</template>

<script>
export default {
  name: 'rss-msg-card',
  data() {
    return {
      
    }
  },
  components: {
  },
  props: {
    msg: Object
  },
}
</script>

<style scoped>
  
</style>
