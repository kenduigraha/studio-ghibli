<template>
  <div>
    <section class="container">
      <div id="header">
        <logo />
        <h1 class="title">
          studio-ghibli
        </h1>
        <h2 class="subtitle">
          nuxt with ghibli api
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
        <div class="row text-center">
          <h3>Clicked: {{ getCounter }} times, count is {{ evenOrOdd }}.</h3>
          <button class="btn btn-success" @click="increment">
            +
          </button>
          <button class="btn btn-danger" @click="decrement">
            -
          </button>
          <button class="btn" @click="incrementIfOdd">
            Increment if odd
          </button>
          <button class="btn" @click="incrementAsync">
            Increment async
          </button>
          <nuxt-link to="/about">
            about
          </nuxt-link>
          <div v-if="getErrResponseFilm === false">
            {{ JSON.stringify(getResponseFilm) }}
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="uk-card uk-card-body uk-card-primary">
        <h3 class="uk-card-title">
          Nuxt.js + UIKIT
        </h3>
        <button class="uk-button uk-button-default" title="Hello World" uk-tooltip>
          Hover
        </button>
        <div class="uk-inline">
          <button class="uk-button uk-button-default" type="button">
            Click
          </button>
          <div uk-dropdown="mode: click" class="uk-dropdown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </div>
        </div>
        <hr class="uk-divider-icon">
        <nuxt-link to="/about">
          About page
        </nuxt-link>
        <ul uk-accordion>
          <li class="uk-open">
            <a class="uk-accordion-title" href="#">
              Item 1
            </a>
            <div class="uk-accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">
              Item 2
            </a>
            <div class="uk-accordion-content">
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">
              Item 3
            </a>
            <div class="uk-accordion-content">
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Logo
  },
  data() {
    return {
      tesaat: 'aaaaa'
    }
  },
  computed: mapGetters([
    'getCounter',
    'evenOrOdd',
    'getResponseFilm',
    'getErrResponseFilm'
  ]),
  created() {
    this.incrementAsync()
  },
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

<style lang="less">
@width: 10px;
@height: @width + 10px;
@color: black;

#header {
  width: @width;
  height: @height;
  background-color: @color;
}
</style>
