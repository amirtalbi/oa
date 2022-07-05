<template>
  <Header/>
  <router-view class="view"></router-view>
</template>

<script>
import Header from './components/Header-menu.vue'
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style>

</style>
