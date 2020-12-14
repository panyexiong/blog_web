<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" active-class="myActive">film</router-link>
      <router-link to="/center" tag="li" active-class="myActive">center</router-link>
    </ul>
  </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
.myActive {
  color: red;
}

nav {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  background: white;

  ul{
    display: flex;
    li{
      flex: 1;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>