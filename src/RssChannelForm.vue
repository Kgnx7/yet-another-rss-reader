<template>
  <details id="rss-channel-form" class="rss-channel-form">
    <summary class="rss-channel-form__summary">Add new RSS channel</summary>

    <form class="rss-channel-form__form">
      <!-- <label for="title">Title</label> -->
      <input type="text" id="name" placeholder="title">
      <!-- <label for="link">link</label> -->
      <input type="text" id="link" placeholder="link">
      <input type="submit" value="Add new RSS channel" class="square-button">
    </form>
  </details>
</template>

<script>
export default {
  name: 'rss-channel-form',
}
</script>

<style>
  .rss-channel-form__summary {
    cursor: pointer;
  }
  .rss-channel-form__form {
    padding-top: 15px;
  }
</style>
