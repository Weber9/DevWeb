<template>
  <div>
    <h1>我是档案</h1>
    <h2>{{$route.query}}</h2>
    <h3>{{$route.query.id}}</h3>
    <h3>{{$route.query.name}}</h3>
    <h3>{{$route.query.age}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>

</style>
