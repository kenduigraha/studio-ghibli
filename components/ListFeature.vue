<template>
  <section>
    <div class="uk-card uk-card-body">
      {{ params }}
    </div>
  </section>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ListFeature',
  props: {
    params: {
      type: String,
      default: () => ''
    }
  }
  // created() {
  //   this.fetchData(this.params)
  // },
  // methods: mapActions([
  //   'fetchData'
  // ]),
  // computed: mapGetters([
  //   'getResponse',
  // ]),
}
</script>
