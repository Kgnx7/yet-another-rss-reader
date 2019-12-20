<template>
 <article id="rss-msg" class="main__article flex-large">
   <a @click="$router.go(-1)">back</a>
   <h2>{{$route.params.msg.title}}</h2>
   <details>
     <summary>Statistics</summary>

     <svg
        class="progress-ring"
        width="120"
        height="120">
        <circle
          class="progress-ring__circle"
          stroke="#eee"
          stroke-width="4"
          fill="transparent"
          r="52"
          cx="60"
          cy="60"
        />
        <circle
          class="progress-ring__circle"
          stroke="#2962FF"
          stroke-width="4"
          fill="transparent"
          r="52"
          cx="60"
          cy="60"
          :stroke-dasharray="`${circumference} ${circumference}`"
          :stroke-dashoffset="`${strokeDashoffset}`"
        />
      </svg>
      <p class="circle__label"> - Percentage of latin characters in the main content</p>
   </details>
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
      circumference: 52 * 2 * Math.PI,
      strokeDashoffset: this.circumference,
      debag: 0
    }
  },
  components: {
  },
  props: {
    msg: Object,
  },
  methods: {
    setProgress(percent=0) {
      const offset = this.circumference - percent / 100 * this.circumference;
      this.strokeDashoffset = offset;
    }
  },
  created() {
    this.$route.params.markAsRead();

    this.setProgress(this.$route.params.msg.contentSnippet.split('').reduce((acc, ch) => {
      return ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122 ? acc + 1 : acc;
    }, 0));
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
  .circle__label {
    margin-left: 15px;
    position: relative;
  }
  .circle__label:before {
    content: "";
    position: absolute;
    top: calc(50% - 5px);
    left: -15px;
    width: 10px;
    height: 10px;
    background-color: #2962FF;
  }
</style>
