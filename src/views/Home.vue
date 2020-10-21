<template>
  <div class="home">
    <Transcript />
    <TextBox />
  </div>
</template>

<script>
import TextBox from '@/components/TextBox'
import Transcript from '@/components/Transcript/Transcript'

export default {
  name: 'Home',
  components: {
    TextBox,
    Transcript
  }
}
</script>
