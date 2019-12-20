<template>
 <article id="rss-msg" class="main__article flex-large">
   <a @click="$router.go(-1)">back</a>
   <h2>{{$route.params.msg.title}}</h2>
   <p class="rss-msg__p">Link: {{$route.params.msg.link}}</p>
   <p class="rss-msg__p">Publication date: {{$route.params.msg.pubDate}}</p>
   <p class="rss-msg__p">Authors: {{$route.params.msg.creator}}</p>
   <p class="rss-msg__p">categories: {{$route.params.msg.categories}}</p>
   <p class="rss-msg__p">Main content: {{$route.params.msg.contentSnippet}}</p>
  </article>
</template>

<script>
export default {
  name: 'rss-msg',
  data() {
    return {
     
    }
  },
  components: {
  },
  props: {
    msg: Object,
  },
  created() {
    this.$route.params.markAsRead();
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

  .rss-msg__p {
    margin-top: 15px;;
  }

  .progress-ring__circle {
    transition: 0.35s stroke-dashoffset;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
</style>
