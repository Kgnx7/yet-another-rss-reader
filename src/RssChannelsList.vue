<template>
  <nav id="rss-channels-list">
    <ul class="rss-channels-list__list">
      <li v-for="channel in channels" v-bind:key="channel.id" class="rss-channels-list__item">
        <button class="rss-channels-list__button muted-button square-button">{{ channel.title }}</button>
        <a v-bind:href="channel.link"><small class="rss-channels-list__link">{{ channel.link }}</small></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'rss-channels-list',
  props: {
    channels: Array,
  },
}
</script>

<style>
  .rss-channels-list__list {
    list-style: none;
    padding: 0;
  }
  .rss-channels-list__item {
    padding: 15px 5px 0 0;
    padding-right: 15px;
  }
  .rss-channels-list__link {
    display: block;
  }
  .rss-channels-list__button {
    margin: 0;
    transition: .25s;
    /* width: 100%; */
  }
</style>
