import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chat: [],
    name: 'Your Name Here'
  },
  getters: {
    getChat: state => {
      return state.chat
    }
  },
  mutations: {
    addChat (state, payload) {
      state.chat.push(
        {
          message: payload.message,
          type: payload.type
        }
      )
    },
    updateName (state, value) {
      state.name = value
    }
  },
  actions: {
    async sendChat({ commit }, message) {
      // submit message
      const response = await axios.get(
        process.env.VUE_APP_API, {
          params: {
            key: process.env.VUE_APP_API_KEY,
            input: message
          }
        }
      )
      if (response.status != 200) return
      const botResponse = response.data.output
      commit('addChat', { message: message, type: 'ours' } )
      commit('addChat', { message: botResponse, type: 'theirs' } )
    }
  },
  modules: {
  }
})
