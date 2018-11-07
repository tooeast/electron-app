<template>
  <div class="login">
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <button @click="loginCheck">login</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {

  },
  methods: {
    loginCheck () {
      console.log(`${this.username}----${this.password}`);
      this.$http.get('http://api.sansiro.me/api/home')
        .then(data => {
          this.$router.push({
            name: 'home'
          })
        })



    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: rgb(196, 225, 232);
}
</style>
