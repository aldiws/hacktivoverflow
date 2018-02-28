<template>
  <div>
    <div class="ui basic segment bg">
      <div class="ui stackable two wide column grid">
        <div class="eleven wide column">
          <div class="judul">
            <h1>Questions Timeline</h1>
          </div>
        </div>
        <div class="right aligned five wide column">
          <div class="ui fluid action input">
            <input v-model="searchString" type="text" placeholder="Search...">
            <button class="ui button">Search</button>
          </div>
        </div>
      </div>
      <div class="ui link grid segment items jarak" v-for="all in quest">
        <div class="two wide column">
          <div class="ui circular fluid image">
            <div v-if="all.user.img === undefined">
              <img src="data:image/png;base64,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">
            </div>
            <div v-else>
              <img :src="all.user.img">
            </div>
          </div>
        </div>
        <div class="fourteen wide column">
          <div class="content">
            <div class="ui header">
              <a @click="pindahCuy(all)" class="header"><b>{{all.title}}</b></a>
            </div>
            <div class="ui divider meta">
              <span></span>
            </div>
            <div class="description">
              <p>{{all.content}}</p>
            </div>
            <div class="ui divider meta">
              <span></span>
            </div>
            <div class="horizontal segments extra">
              <span>
                <a class="item" @click="doDelMyQuest(all._id)"><i class="user icon"></i>{{all.user.name}}</a>
                <i class="history icon"></i>{{all.updatedAt}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import urlSlug from 'url-slug'
export default {
  data () {
    return {
      token: localStorage.getItem('token'),
      searchString: ''
    }
  },
  methods: {
    ...mapActions([
      'getQuestions'
    ]),
    ...mapState([
      'questions'
    ]),
    pindahCuy (all) {
      var slug = urlSlug(all.title)
      this.$router.push(`${all.user.username}/${all._id}/${slug}`)
    }
  },
  computed: {
    ...mapGetters([
      'filterTimeline'
    ]),
    quest () {
      return this.filterTimeline(this.searchString)
    }
  },
  mounted () {
    this.getQuestions()
  }

}
</script>

<style scoped>
.jarak {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.judul {
  color: #FF9800;
  padding-bottom: 1rem;
}
</style>
