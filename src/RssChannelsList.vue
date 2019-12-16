<template>
  <nav id="rss-channels-list">
    <ul>
      <li v-for="channel in channels" v-bind:key="channel.id">
        <p>
          {{ channel.title }}
        </p>
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
  
</style>
