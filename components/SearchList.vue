<template>
  <div class="uk-grid-small" uk-grid>
    <div class="uk-search uk-search-large uk-width-12">
      <span uk-search-icon />
      <input
        v-model="searchValue"
        class="uk-search-input"
        placeholder="Search by ID..."
        type="search"
        @keyup.enter="submit"
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchList',
  props: {
    params: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    ...mapActions(['fetchData']),
    submit() {
      this.fetchData({ params: this.params, id: this.searchValue })
    }
  }
}
</script>
