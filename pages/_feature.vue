<template>
  <section>
    <navbar :data-navbar="dataNavbar" />
    <search-list :params="params" />
    <list-feature :params="params" />
  </section>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import ListFeature from '~/components/ListFeature.vue'
import SearchList from '~/components/SearchList.vue'
import dataNavbar from './data/navbar.json'

export default {
  components: {
    Navbar,
    ListFeature,
    SearchList
  },
  data() {
    return {
      params: this.$route.params.feature,
      dataNavbar
    }
  }
}
</script>
