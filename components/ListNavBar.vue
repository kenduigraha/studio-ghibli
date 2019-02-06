<template>
  <li class="uk-active">
    <nuxt-link :to="list.link">
      {{ list.text }}
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'ListNavBar',
  props: {
    list: {
      type: Object,
      default: () => ({
        text: '',
        link: '/'
      })
    }
  }
}
</script>
