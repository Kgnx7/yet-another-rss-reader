<template>
  <details id="rss-channel-form" class="rss-channel-form">
    <summary class="rss-channel-form__summary">Add new RSS channel</summary>

    <form class="rss-channel-form__form" @submit.prevent="handleSubmit">
      <label for="title">{{titleErrMsg}}</label>
      <input type="text" id="name" placeholder="title" v-model="newChannel.title" class="rss-channel-form__input" :class="{'has-error': titleErrMsg}">
      <label for="link">{{linkErrMsg}}</label>
      <input type="text" id="link" placeholder="link" v-model="newChannel.link" class="rss-channel-form__input" :class="{'has-error': linkErrMsg}">
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
      },
      titleErrMsg: null,
      linkErrMsg: null,
    }
  },
  methods: {
    handleSubmit() {
      if (this.invalidTitle()) {
        this.titleErrMsg = "Title is empty";
      }
      if (!this.isURLValid(this.newChannel.link)) {
        this.linkErrMsg = "URL is invalid";
      } else {
        this.$emit('handleFormSubmit', this.newChannel);
        this.linkErrMsg = null;
        this.titleErrMsg = null;
      }
    },

    invalidTitle() {
      return this.newChannel.title === ''
    },

    isURLValid(url) {
      
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(url);
    },
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
