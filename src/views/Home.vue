<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="input-box">
      <el-input v-model="account" placeholder="account"></el-input>
      <el-input v-model="password" placeholder="password"></el-input>
    </div>
    <el-button type="primary" @click="onSubmit">test</el-button>
    <div>{{ testData }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      account: '',
      password: '',
      testData: '1'
    }
  },
  methods: {
    onSubmit() {
      var that = this;
      this.axios.post('http://127.0.0.1:8081/demo', {
        account: that.account,
        password: that.password
      })
      .then(function (res) {
        that.testData = res.data
      })
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: auto;
}
.input-box {
  width: 200px;
}
</style>

