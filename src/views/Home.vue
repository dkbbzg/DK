<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-input v-model="account" placeholder="account"></el-input>
    <el-input v-model="password" placeholder="password"></el-input>
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
      password: ''
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>
