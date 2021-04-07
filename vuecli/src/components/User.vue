<template>
  <div>
    <h1>我是用户</h1>
    <h2>咳咳咳咳咳咳</h2>
    <!--动态获取-->
    <h3>{{userId}}</h3>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId () {
      return this.$route.params.userId
    }
  }

}
</script>

<style scoped>

</style>
