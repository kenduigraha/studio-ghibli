<template>
  <section>
    <div v-if="params === 'films'">
      <div v-for="film in getFetchData" :key="film.id">
        <ListFilm :film="film" />
      </div>
    </div>
  </section>
</template>

<script>
import ListFilm from '~/components/ListFilm.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListFeature',
  components: {
    ListFilm
  },
  props: {
    params: {
      type: String,
      default: () => ''
    }
  },
  computed: mapGetters(['getFetchData']),
  created() {
    this.fetchData({ params: this.params })
  },
  methods: {
    ...mapActions(['fetchData'])
  }
}
</script>
