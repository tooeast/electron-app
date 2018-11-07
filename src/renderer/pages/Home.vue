<template>
  <div class="home">
    <div class="title">HAHAHAHAHAHAHAHAHA</div>
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
      this.$http.get('http://api.sansiro.me/api/home');

    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: rgb(134, 197, 160);

  .title {
    font-size: 30px;
    color: red;
    line-height: 100px;
    text-align: center;
  }
}
</style>
