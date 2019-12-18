<template>
  <nav id="rss-channels-list">
    <ul class="rss-channels-list__list">
      <li v-for="channel in channels" :key="channel.id" class="rss-channels-list__item">

        <button 
          class="rss-channels-list__button full-button muted-button square-button"
          @click="handleSetChannel(channel.id)"
        >
          {{ channel.title }}
        </button>

        <details class="rss-channels-list__options">
          <summary>Details</summary>
          <div class="options__wrapper">
            <!-- <p>Rss channel link: <a :href="channel.link"><small class="rss-channels-list__link">{{ channel.link }}</small></a></p> -->
            <p class="rss-channels-link__p">Rss channel link: <a :href="channel.link"><small class="rss-channels-list__link">{{ channel.link }}</small></a></p>

            <button 
              class="rss-channels-list__button rss-channels-list__button--remove muted-button square-button" 
              @click="handleDeleteChannel(channel.id)"
            >
              Remove channel
            </button>

          </div>
        </details>
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
  methods: {
    handleSetChannel(id) {
      this.$emit('handleSetChannel', id);
    },
    handleDeleteChannel(id) {
      this.$emit('handleDeleteChannel', id);
    }
  }
}
</script>

<style>
  .rss-channels-list__list {
    list-style: none;
    padding: 0;
    /* padding-right: 15px; */
  }
  .rss-channels-list__item {
    padding-top: 15px;
    /* padding-right: 15px; */
  }
  .rss-channels-list__link {
    /* display: block; */
  }
  .rss-channels-list__button {
    margin: 0;
    transition: .25s;
  }

  .rss-channels-list__button--remove {
    border-color: coral !important;
  }

  .rss-channels-list__options {
    cursor: pointer;
    margin-top: 5px;
  }

  .options__wrapper {
    padding-top: 15px;
  }

  .rss-channels-link__p {
    margin-bottom: 10px;
  }
</style>
