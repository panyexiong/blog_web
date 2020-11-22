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
    return {

    }
  },

  methods: {

  },

  components: {
    tabbar,
  }
}
</script>

<style>

</style>
