<template>
  <section>
    <navbar :data-navbar="dataNavbar" />
    <list-feature :params="params" />
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import ListFeature from '~/components/ListFeature.vue'
import dataNavbar from './data/navbar.json'

export default {
  components: {
    Navbar,
    ListFeature
  },
  data() {
    return {
      params: this.$route.params.feature,
      dataNavbar
    }
  }
}
</script>
