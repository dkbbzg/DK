<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-input v-model="account" placeholder="account"></el-input>
    <el-input v-model="password" placeholder="password"></el-input>
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
      this.testData = '2';
    }
  }
  // components: {
  //   HelloWorld
  // }
}
</script>
