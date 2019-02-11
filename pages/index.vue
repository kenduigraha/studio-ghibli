<template>
  <section>
    <Navbar :data-navbar="dataNavbar" />
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import Navbar from '~/components/Navbar.vue'
import dataNavbar from './data/navbar.json'

export default {
  components: {
    // Logo,
    Navbar
  },
  data() {
    return {
      dataNavbar
    }
  }
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
