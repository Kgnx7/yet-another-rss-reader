<template>
  <details id="rss-channel-form" class="rss-channel-form">
    <summary class="rss-channel-form__summary">Add new RSS channel</summary>

    <form class="rss-channel-form__form" @submit.prevent="handleSubmit">
      <!-- <label for="title">Title</label> -->
      <input type="text" id="name" placeholder="title" v-model="newChannel.title" class="rss-channel-form__input">
      <!-- <label for="link">link</label> -->
      <input type="text" id="link" placeholder="link" v-model="newChannel.link" class="rss-channel-form__input">
      <input type="submit" value="Add new RSS channel" class="square-button">
    </form>
  </details>
</template>

<script>
export default {
  name: 'rss-channel-form',
  data() {
    return {
      newChannel: {
        title: '',
        link: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('handleFormSubmit', this.newChannel)
    }
  }
}
</script>

<style>
  .rss-channel-form__summary {
    cursor: pointer;
  }
  .rss-channel-form__form {
    padding-top: 15px;
  }
  .rss-channel-form__input {
    box-sizing: border-box;
  }
</style>
