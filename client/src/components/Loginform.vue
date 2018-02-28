<template lang="html">
<div class="">
  <h1>Login</h1>
  <form class="ui form">
    <div class="field">
      <label>Username</label>
      <input type="text" name="username" placeholder="Username"
      v-model="formLogin.username" 
      v-validate="'required|min:3'" 
      :class="{'input': true, 'is-danger': errors.has('username') }" >
      <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>          
    </div>

    <div class="field">
      <label>password</label>
      <input type="password" name="password" placeholder="Password" 
      v-model="formLogin.password" 
      v-validate="'required|min:5'" 
      :class="{'input': true, 'is-danger': errors.has('password') }" >
      <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>          
    </div>

    <button class="ui orange button" @click="signin" type="submit">Submit</button>
    <label>you don't have account ? <a class="item" @click="goRegister()"><b>Register</b></a></label>
  </form>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'getUser'
    ]),
    signin () {
      console.log('ini di submit')
      this.getUser(this.formLogin)
      this.$router.push('/')
    },
    goRegister () {
      this.$router.push('/register')
    }
  }
}
</script>


<style scoped>
span{
  color: red
}
</style>
