<template>
  <div>
    <h1>我是Home</h1>
    <h2>哈哈哈哈哈哈</h2>
    <router-link to="/home/news">News新闻</router-link>
    <router-link to="/home/message">Message消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

</style>
