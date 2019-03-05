<template>
  <div class="login-page">
    <div class="box">
      <p>Welcome</p>
      <p class="tips">Please enter your account number and password to log in.</p>
      <div><input type="text" placeholder="Account Number" v-model="user" @keyup.enter="onSubmit"></div>
      <div><input type="password" placeholder="Password" id="pwd" v-model="pwd" @keyup.enter="onSubmit"></div>
      <div class="button-login" @click="onSubmit">Login</div>
      <div class="link">
        <div class="pwd">Password</div>
        <span>|</span>
        <div class="register">Register</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      loading: false,
      user: '',
      pwd: '',
      value2: true
    }
  },
  methods: {
    onSubmit(e) {
      // var that = this;
      var e = e.target;
      e.blur()
      this.loading = true
      // this.axios.post('http://127.0.0.1:8081/login', {
      //   account: that.account,
      //   password: that.password
      // }).then(response => {
      //   console.log(response)
      // }).catch(error => {
      //   console.log(error)
      // })
      if (this.user === 'admin' && this.pwd === '000000') {
        this.loading = false
        this.$store.state.login.isLogin = true;
        this.$router.go(-1)
      } else {
        this.loading = false
        this.open('Please enter the correct account and password', 'Login failed')
      }
    },
    // open message box
    open (content, title) {
      this.$alert(content, title, {
        confirmButtonText: 'Enter',
        type: 'error',
        center: true
      })
    }
  }
}

</script>

<style scoped>
.login-page {
  background-color: rgba(0, 0, 0, 0.7);
}

.login-page::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/img/login-bg.jpg") no-repeat bottom center;
  z-index: -1;
}

.box {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box > p {
  font-size: 70px;
  color: #fff;
  letter-spacing: 1.6px;
}

.box > p.tips {
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 1px;
  width: 450px;
  text-align: center;
  margin-top: 10px;
}

.box > div {
  margin-top: 20px;
}

.box > div > input,
.box > div.button-login {
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  background: #003d75;
  width: 370px;
  text-align: center;
  border-radius: 25px;
  color: #fff;
  letter-spacing: 1px;
}

.box > div.button-login {
  cursor: pointer;
}

.box > div > input {
  border: 1px solid #fff;
  background: transparent;
}

.box > .link {
  color: #fff;
  width: 370px;
  padding: 0 40px;
  text-align: center;
  display: flex;
  justify-content: space-around;
}

.box > .link > div {
  opacity: .6;
  font-size: 16px;
  cursor: pointer;
}

.box > .link > div:hover {
  opacity: 1;
}
</style>
