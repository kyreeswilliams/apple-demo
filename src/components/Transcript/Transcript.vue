<template>
  <div id="app-transcript">
    <Message
      v-for="(chat, index) in getChat" v-bind:key="index"
      :text="chat.message"
      :type="chat.type"
    />
  </div>
</template>

<script>
import Message from './components/Message'
import { mapGetters } from 'vuex'

export default {
  name: 'Transcript',
  components: {
    Message
  },
  computed: {
    ...mapGetters([
      'getChat'
    ])
  },
}
</script>
