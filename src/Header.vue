<template>
  <header class="header" id="header">
    <h1 class="header__h1">{{title}}</h1>
    <small class="header__small">{{desc}}</small>
  </header>
</template>

<script>
export default {
  name: 'header',
  props: {
    title: String,
    desc: String,
  },
}
</script>

<style scoped>
  .header {
    padding: 50px 0;
  }

  .header__h1 {
    margin: 0px;
    line-height: 1.5rem;
  }

  .header__small {
    font-style: italic;
  }
</style>