<template>
  <div class="register-page">
    <div class="box">
      <div class="welcome">
        <p>Welcome</p>
        <p>to register</p>
      </div>
      <p class="tips">You can register an account on this page to log in to DK</p>
      <div><input type="text" placeholder="Please input your account number" v-model="registerAccount"></div>
      <div><input type="password" placeholder="Please input your password" v-model="registerPassword"></div>
      <div><input type="text" placeholder="Please Input your email" v-model="registerEmail"></div>
      <div class="button-login" @click="register">Register</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
      registerAccount: '',
      registerPassword: '',
      registerEmail: ''
    }
  },
  methods: {
    register () {
      if (this.registerAccount == '') {
        this.open('Account nubmer can not be blank', 0)
      }
      else if (this.registerPassword.length < 6) {
        this.open('Password\'s length must more than 6', 0)
      }
      else {
        this.open('', 1)
      }
    },
    // open message box
    open (content, type) {
      var that = this;
      if (type) {
        that.$message({
          message: 'Register Success',
          type: 'success',
          duration: 1000,
          onClose: function() {
            that.$router.go(-1)
          }
        })
      }
      else {
        that.$message({
          message: content,
          type: 'error',
          duration: 1500
        })
      }
    },
  }
}

</script>

<style scoped>
.register-page {
  background-color: rgba(0, 0, 0, 0.6);
}

.register-page::before {
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
  color: #fff;
  letter-spacing: 1.6px;
}

.box > .welcome {
  margin-bottom: 20px;
}

.box > .welcome > p {
  text-align: right;
  font-size: 26px;
  color: #fff;
  letter-spacing: 1.6px;
}

.box > .welcome > p:first-child {
  font-size: 70px;
  padding-right: 80px;
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
