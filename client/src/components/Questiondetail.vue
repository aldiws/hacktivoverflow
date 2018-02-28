<template>
  <div>
    <div class="ui container">
      <div class="ui segment bg">
        <div class="judul">
          <!-- <h1>{{questions[0].user.name}}'s question</h1> -->
        </div>
        <div class="ui  grid items jarak" v-for="all in questions">
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
            <div class=" content">
              <div class="ui stackable two column grid">
                <div class="thirteen wide column">
                  <div class="header"><b>{{all.title}}</b></div>
                </div>
                <div class="three wide column">
                  <Votequestions v-show="tokenUser !== null"/>
                </div>
              </div>
              <div class="ui divider meta">
              </div>
              <div class="description">
                <p>{{all.content}}</p>
              </div>
              <div class="ui divider meta">
              </div>
              <div class=" extra">
                  <i class="user icon"></i>{{all.user.name}}
              </div>
            </div>
          </div>
            <!-- {{all}} -->
            <div v-show="tokenUser !== null" @click="showField(all._id)" class="ui fluid  blue button">Answer</div>
          </div>
          <div v-show="activated === true" class="ui form" @submit.prevent="replyAnswer()">
            <div class="field">
              <label>Answer</label>
              <textarea v-model="answer" style="white-space: pre-wrap;" classrows="4"></textarea>
            </div>
            <button class="ui green button" @click="replyAnswer()">Submit</button>
          </div>
        </div>
        <div class="ui grid segment items jarak" v-for="(all, index) in answers">
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
              <div class="ui stackable grid two column header">
                <div class="fourteen wide column">
                  <div @click="pindahCuy(all)" class="header"><b>Reply : '{{all.questions.title}}' from '{{all.user.name}}'</b></div>
                </div>
                <div v-show = "all.user._id === idUser" class="center aligned two wide column">
                  <button @click="del(all._id, index)" class="ui right floated mini basic fluid black button"><i class="trash icon"></i>hapus</button>
                </div>
              </div>
              <div class="ui meta">
                <span></span>
              </div>
              <div class="description">
                <p>{{all.answer}}</p>
              </div>
              <div class="ui divider meta">
                <span></span>
              </div>
              <div class="horizontal segments extra">
                <span>
                  <i class="user icon"></i>{{all.user.name}}
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
import Votequestions from '@/components/Votequestions'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Votequestions
  },
  props: ['id'],
  data () {
    return {
      activated: false,
      idUser: localStorage.getItem('id'),
      tokenUser: localStorage.getItem('token'),
      answer: ''
    }
  },
  computed: {
    questions () {
      return this.questID()
    },
    answers () {
      return this.answerTemp()
    }
  },
  methods: {
    ...mapActions([
      'doId',
      'postAnswer',
      'getAnswers',
      'delAnswer'
    ]),
    ...mapState([
      'questID',
      'answerTemp'
    ]),
    showField (id) {
      // console.log(this.idQuest)
      this.activated = true
      // this.idQuest = id
    },
    replyAnswer () {
      var payload = {
        id: this.id,
        answer: this.answer
      }
      this.postAnswer(payload)
      this.$router.push('/')
    },
    del (id, idx) {
      var payload = {
        id: id,
        idx: idx
      }
      this.delAnswer(payload)
      this.$router.push('/')
    }
  },
  mounted () {
    // console.log(this.id)
    this.doId(this.id)
    this.getAnswers(this.id)
  }
}
</script>

<style lang="css">
</style>
