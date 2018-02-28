<template>
  <div class="hello">
    <Navbar/>
    <!-- <h1>HOME</h1> -->
    <div class="ui stackable container one column segment grid">
      <div class="column">        
        <Menumain></Menumain>        
      </div>
      <div class="column">
      <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Menumain from '@/components/Menumain'

export default {
  components: {
    Navbar,
    Menumain
  },
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  methods: {
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
