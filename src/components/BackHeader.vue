
// 页面顶部返回组件

<template>
  <div id="backheader">
    <van-nav-bar :title="title" @click-left="backHome" left-text="返回" left-arrow>
        <!-- <template #right>
            <van-icon name="search" size="18" />
        </template> -->
    </van-nav-bar>
  </div>
</template>

<script>
export default {
    props:['title'],
     methods:{
      backHome(){
          this.$router.go(-1)
      }
  }
}
</script>

<style>
    
</style>