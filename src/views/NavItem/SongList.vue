<template>
  <div id="songlist">
        <backheader title="歌单" />

  </div>
</template>

<script>
import backheader from '@/components/BackHeader.vue'

export default {
  components:{
    backheader
  }
}
</script>

<style scoped>
 #songlist{
    min-height: 100vh;
  }
</style>