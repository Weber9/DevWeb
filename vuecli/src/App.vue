<template>
  <div id="nav">
    <router-link to="/" tag="button" replace>Home</router-link> |
    <router-link to="/about" tag="button" replace>About</router-link>
<!--    <router-link :to="'/user/'+userId" tag="button" replace>User</router-link>|-->
<!--    <router-link-->
<!--      :to="{path: '/profile', query: {id: 1, name: 'zhangsan',age: 18}}"-->
<!--      tag="button"-->
<!--      replace>Profile</router-link>-->
    <!--手动跳转-->
<!--    <button @click="aboutBtn">About</button>|-->
    <button @click="userBtn">User</button>
    <button @click="profileBtn">Profile</button>

    <router-view></router-view>
  </div>
</template>

<script>
// 传出
export default {
  name: 'App',
  data () {
    return {
      userId: '老八'
    }
  },
  methods: {
    aboutBtn () {
      this.$router.push('/about')
      console.log('aboutBtn')
    },
    userBtn () {
      this.$router.push('/user/' + this.userId)
    },
    profileBtn () {
      this.$router.push({
        path: '/profile',
        query: {
          id: 2,
          name: 'Nash',
          age: '35'
        }
      })
    }
  }
}
</script>
<style>
  .router-link-active {
    color: #bd2c00;
  }
</style>
