<template lang="html">
<div class="">
  <div class="">
    <h1>Resigster</h1>
    <form class="ui segment form">
      <div class="field">
        <label>Full Name</label>
        <input type="text" name="name" placeholder="Full Name"
        v-model="formRegister.name" 
        v-validate="'required|alpha_spaces|min:3'" 
        :class="{'input': true, 'is-danger': errors.has('name') }" >
      <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>          
      </div>
      <div class="field">
        <label>E-mail</label>
        <input type="text" name="email" placeholder="E-mail" 
        v-model="formRegister.email" 
        v-validate="'required|email'" 
        :class="{'input': true, 'is-danger': errors.has('email') }">
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>               
      </div>

      <div class="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="Username"
        v-model="formRegister.username" 
        v-validate="'required|min:3|alpha_dash'" 
        :class="{'input': true, 'is-danger': errors.has('username') }" >
        <span v-show="errors.has('username')" class="help is-danger">{{ errors.first('username') }}</span>
      </div>

      <div class="field">
        <label>password</label>
        <input type="password" name="password" placeholder="Password" 
        v-model="formRegister.password"
        v-validate="'required|min:7'" 
        :class="{'input': true, 'is-danger': errors.has('password') }" >
        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
      </div>

      <router-link :to="'/login'"><button class="ui orange button" type="submit" @click="register()">Submit</button></router-link>
    </form>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
import swal from 'sweetalert'
export default {
  data () {
    return {
      formRegister: {
        name: '',
        email: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'createUser'
    ]),
    register () {
      this.createUser(this.formRegister)
      swal({
        title: 'Good job!',
        text: 'Register success!',
        icon: 'success',
        button: 'Aww yiss!'
      })
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
span{
  color: red
}
</style>
