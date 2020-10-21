<template>
  <div
    :class="{
      'app-message': true
    }"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    text: String,
    type: String
  }

}
</script>
