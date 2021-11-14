<template>
  <div class="about">
 <cmheader class="pc-show"></cmheader>

    <h1>This is an about page</h1>
        <cmbottom/>
  </div>
</template>

<script>
import cmheader from '../components/CMHeader.vue'
import cmbottom from '../components/CMBottom.vue'


export default ({
  components:{
    cmheader,
    cmbottom,
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



