<template>
  <aside id="rss-channels-list">
    <nav>
      <ul>
        <li v-for="channel in channels" v-bind:key="channel.id">
          {{ channel.title }}
        </li>
      </ul>
    </nav>
  </aside>
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
