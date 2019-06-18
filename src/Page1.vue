<template>
  <div id="app">
    <vueheader></vueheader>
    <vuetopbar></vuetopbar>
    <vuefooter></vuefooter>
  </div>
</template>

<script>

import vueheader from '@/components/layout/vueheader.vue'
import vuetopbar from '@/components/layout/vuetopbar.vue'
import vuefooter from '@/components/layout/vuefooter.vue'

export default {
  name: 'PageApp',
  components: { vueheader, vuetopbar, vuefooter }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
