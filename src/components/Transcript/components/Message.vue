<template>
  <div
    :class="{
      'app-message': true
    }"
  >
    <strong>{{ type == 'ours' ? name : 'Bot' }}:</strong> {{ text }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Message',
  props: {
    text: String,
    type: String
  },
  computed: {
    ...mapState({
      name: state => state.name
    })
  }
}
</script>
