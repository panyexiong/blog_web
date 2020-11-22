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
</style>