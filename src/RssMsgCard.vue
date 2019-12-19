<template>
  <section id="rss-msg-card" class="">
    <h4>{{msg.title}}</h4>
    <p class="card__p card__p--first">{{msg.isRead ? "Прочитано" : "Не прочитано"}}</p>
    <time :datetime="msg.pubDate">Publication date: {{msg.pubDate}}</time>
    <p class="card__p">Author: {{msg.author}}</p>
    <p class="card__p">Categories: {{msg.categories}}</p>
    <p class="card__p">{{msg.contentSnippet}}</p>
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
  .card__p {
    margin: 0;
    margin-top: 15px;
  }

  .card__p--first {
    margin-bottom: 15px;
    text-decoration: underline;
  }
</style>
