<template>
  <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <template v-for="list in dataNavbar">
          <list-nav-bar :key="list.link" :list="list" />
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import ListNavBar from '~/components/ListNavbar.vue'

export default {
  name: 'NavBar',
  components: {
    ListNavBar
  },
  props: {
    dataNavbar: {
      type: Array,
      default: () => [
        {
          text: '',
          link: '/'
        }
      ]
    }
  }
}
</script>
