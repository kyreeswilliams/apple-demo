<template>
  <div id="app-textbox">
    <form>
      <textarea name="app-textbox-textarea" id="app-textbox-textarea" v-model="message" @keyup.enter="sendChat(message)"></textarea></br>
      <button @click.prevent="sendChat(message)" type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TextBox',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    ...mapActions([
      'sendChat'
    ])
  }
}
</script>
