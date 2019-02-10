<template>
  <section>
    <div class="uk-card uk-card-body">
      {{ params }}
      {{ getFetchData }}
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListFeature',
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
