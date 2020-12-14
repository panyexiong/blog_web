<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>


<script>

import tabbar from '@/components/Tabber';

export default {
  name: 'App',


  data() {
    return {}
  },

  methods: {},

  components: {
    tabbar,
  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
  padding: 0px;
}

html {
  height: 100%;
}

li{
  list-style: none;
}
</style>
