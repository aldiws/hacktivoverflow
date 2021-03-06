import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'

vue.use(vuex)
vue.use(router)

const http = axios.create({
  baseURL: `http://35.198.234.101:3003`
})

const state = {
  login: [],
  signup: [],
  createQuest: null,
  questions: [],
  questID: null,
  myquest: null,
  answerTemp: [],
  hasilEdit: null
}
const getters = {
  filterTimeline: (state, getters) => (model) => {
    console.log('ini getters', getters)
    let articlesArray = state.questions
    let searchString = model

    if (!searchString) {
      return articlesArray
    }
    searchString = searchString.trim().toLowerCase()
    articlesArray = articlesArray.filter(function (item) {
      if (item.title.toLowerCase().indexOf(searchString) !== -1) {
        return item
      }
    })
    return articlesArray
  },
  filterSelf: (state, getters) => (model) => {
    console.log('ini getters', getters)
    let articlesArray = state.myquest
    let searchString = model

    if (!searchString) {
      return articlesArray
    }
    searchString = searchString.trim().toLowerCase()
    articlesArray = articlesArray.filter(function (item) {
      if (item.title.toLowerCase().indexOf(searchString) !== -1) {
        return item
      }
    })
    return articlesArray
  }
}

const mutations = {
  setUser (state, payload) {
    state.login = payload
    // router.push('/')
  },
  setUserCreate (state, payload) {
    state.signup = payload
  },
  setCreateQuest (state, payload) {
    state.questions.unshift(payload)
    state.createQuest = payload
  },
  setQuestions (state, payload) {
    state.questions = payload
  },
  setId (state, payload) {
    state.questID = payload
  },
  setMyQuestion (state, payload) {
    state.myquest = payload
  },
  setDeleteMyQuest (state, payload) {
    state.myquest.splice(payload.idx, 1)
  },
  setPostAnswer (state, payload) {
    state.answerTemp.unshift(payload)
  },
  setGetAnswer (state, payload) {
    state.answerTemp = payload
  },
  setEditMyQuest (state, payload) {
    console.log('ini idx di mutations : ', payload.idx)
    state.myquest.splice(payload.idx, 1)
    state.myquest.unshift(payload.response)
  },
  setDelAnswer (state, payload) {
    state.answerTemp.splice(payload, 1)
  }
}

const actions = {
  getUser (context, payload) {
    http.post('/users/login', {
      username: payload.username,
      password: payload.password
    })
    .then(response => {
      // console.log(response.data)
      localStorage.setItem('token', response.data.token)
      context.commit('setUser', response.data)
      // router.push('/')
    })
    .catch(err => {
      console.log(err)
    })
  },
  createUser (context, payload) {
    http.post('/users/register', {
      name: payload.name,
      email: payload.email,
      username: payload.username,
      password: payload.password
    })
    .then(response => {
      console.log(response)
      context.commit('setUserCreate', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  createQuestion (context, payload) {
    http.post('/questions', {
      title: payload.title,
      content: payload.content
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      context.commit('setCreateQuest', response.data)
      // router.push('/')
    })
    .catch(err => {
      console.log(err)
    })
  },
  getQuestions (context, payload) {
    http.get('/questions/all')
    .then(response => {
      context.commit('setQuestions', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  doId (context, payload) {
    http.get(`/questions/all/${payload}`)
    .then(response => {
      console.log('response id', response)
      context.commit('setId', response.data)
    })
  },
  myQuestion (context, payload) {
    http.get('/questions/', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      context.commit('setMyQuestion', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  },
  doDelMyQuest (context, payload) {
    http.delete(`/questions/${payload.id}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      context.commit('setDeleteMyQuest', payload)
    })
    .catch(err => {
      console.log(err)
    })
  },
  postAnswer (context, payload) {
    http.post(`/answers/${payload.id}`, {
      answer: payload.answer
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      context.commit('setPostAnswer', response.data)
    })
  },
  getAnswers (context, payload) {
    http.get(`answers/${payload}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      context.commit('setGetAnswer', response.data)
    })
  },
  editMyQuest (context, payload) {
    http.put(`questions/${payload.id}`, {
      title: payload.title,
      content: payload.content
    }, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      var payloadTo = {
        response: response.data,
        idx: payload.idx
      }
      context.commit('setEditMyQuest', payloadTo)
    })
  },
  delAnswer (context, payload) {
    http.put(`questions/${payload.id}`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .then(response => {
      context.commit('setDelAnswer', payload.idx)
    })
  }
}
const store = new vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
