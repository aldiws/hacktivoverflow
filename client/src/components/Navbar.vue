<template>
  <div class="ui stackable">
    <div class="ui menu">
      <a @click="home" class="item corp">
        <img src='https://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon@2.png?v=73d79a89bded'/>        
          <span class="title"> hacktiv<b>overflow</b></span>
      </a>
      <buttonmyquestion v-show="token !== null  "/>      
      <div class="right menu">        
        <!-- <Buttonprofile v-show="token !== null"/> -->
        <a class="item" @click="check()">Help</a>        
        <loginbutton v-if="token === null"/>
        <logoutbutton v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import loginbutton from '@/components/loginbutton'
import logoutbutton from '@/components/logoutbutton'
import buttonmyquestion from '@/components/buttonmyquestion'
import Buttonprofile from '@/components/Buttonprofile'
export default {
  data () {
    return {
      token: localStorage.getItem('token'),
      route: this.$router.app._route.path
    }
  },
  methods: {
    home () {
      this.$router.push('/')
    },
    check () {
      console.log(this.$router.app._route.path)
    }
  },
  components: {
    logoutbutton,
    loginbutton,
    buttonmyquestion,
    Buttonprofile
  }
}
</script>

<style scoped>
#corp {
  color: #FF9800;
}
.title {
  font-size: 20px
}
</style>
