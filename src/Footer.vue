<template>
  <header class="footer" id="footer-comp">
    <p class="footer__text">{{footerText}}</p>
  </header>
</template>

<script>
export default {
  name: 'footer-comp',
  data() {
    return {
      footerText: "some footer text",
    }
  },
}

</script>

<style scoped>
  .footer {
    text-align: center;
    padding: 20px 0;
  }

  .footer__text {
    margin: 0;
  }
</style>