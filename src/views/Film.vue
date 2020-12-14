<template>
  <div>
    film
    <ul>
      <li v-for="data in dataList" :key="data.filmId" @click="handleChangePage(data)">
        {{data.name}}
      </li>
    </ul>
  </div>
</template>

<script>

import axios from "axios";

export default {

  data() {
    return {
      dataList: []
    }
  },
  methods: {
    handleChangePage(data) {

    }
  },
  mounted() {

    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=309324',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1606052535522869318615041","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data);
      this.dataList = res.data.data.films
    })
  },

}


</script>