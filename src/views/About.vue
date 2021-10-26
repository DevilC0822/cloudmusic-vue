<template>
  <div class="about">
    <h1>This is an about page</h1>
        <cmbottom/>
  </div>
</template>

<script>
import cmbottom from '../components/CMBottom.vue'


export default ({
  components:{
    cmbottom
  }
})
</script>

<style scoped lang="less">
.about{
    min-height: 100%;

    h1{
      margin: 0;
    }
}

</style>



