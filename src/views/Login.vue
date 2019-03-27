<template>
  <div class="login-page">
    <div class="box">
      <div class="welcome">
        <p>Welcome</p>
        <p>to login</p>
      </div>
      <p class="tips">Please enter your account number and password to log in.</p>
      <div><input type="text" placeholder="Account Number" v-model="account" @keyup.enter="onSubmit"></div>
      <div><input type="password" placeholder="Password" v-model="password" @keyup.enter="onSubmit"></div>
      <div class="button-login" @click="onSubmit">Login</div>
      <div class="link">
        <div class="pwd">Password</div>
        <span>|</span>
        <div class="register" @click="toRegister">Register</div>
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
      account: '',
      password: '',
      value2: true
    }
  },
  methods: {
    onSubmit(e) {
      var that = this;
      var element = e.target;
      if (this.account == '') {
        this.$message({
          message: 'Please input your account',
          center: true
        });
      }
      else if (this.password == '') {
        this.$message({
          message: 'Please input your password',
          center: true
        });
      }
      else {
        this.loading = true
        this.axios.post('http://127.0.0.1:8081/users/login', {
          account: that.account,
          password: that.password
        }).then(req => {
          let data = req.data
          if (data.status == 0) {
            this.loading = false
            this.open('Sorry, there is no this account, please input right account or register a new account.', 'Login failed')
          }
          else if (data.status == 1) {
            this.loading = false
            this.open('Sorry, this is a wrong password, please input right password', 'Login failed')
          }
          else if (data.status == 2) {
            this.loading = false
            this.$store.commit('userState', {
              isLogin: true,
              UserGUID: data.UserGUID,
              UserName: data.UserName,
              UserIcon: data.UserIcon,
            })
            this.$router.go(-1)
          }
        }).catch(error => {
          console.log(error)
        })
      }
    },
    // open message box
    open (content, title) {
      this.$alert(content, title, {
        confirmButtonText: 'Enter',
        type: 'error',
        center: true
      })
    },
    // Turn to register page
    toRegister () {
      this.$router.push('/register')
    }
  }
}

</script>

<style scoped>
.login-page {
  background-color: rgba(0, 0, 0, 0.6);
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
