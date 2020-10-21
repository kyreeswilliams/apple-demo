<template>
  <div id="app-textbox">
    <form>
      <input type="text" name="app-textbox-name" id="app-text-box-name" v-model="name"><br>
      <textarea name="app-textbox-textarea" id="app-textbox-textarea" v-model="message" @keyup.enter="sendChat(message)"></textarea></br>
      <button @click.prevent="sendChat(message)" type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'

export default {
  name: 'TextBox',
  data () {
    return {
      message: ''
    }
  },
  computed: {
    ...mapGetters([
      'getChat'
    ]),
    name: {
      get() {
        return this.$store.state.name
      },
      set(value) {
        this.$store.commit('updateName', value)
      }
    }
  },
  methods: {
    ...mapActions([
      'sendChat'
    ])
  },
  watch: {
    getChat: function(val) {
      this.message = ''
    }
  }
}
</script>
