<template>
  <div id="cmbottom">


<van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000" @change="onChange(active)">
  <van-tabbar-item  @click="goHome" icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item  @click="goTools"  icon="gem">工具箱</van-tabbar-item>
        <van-tabbar-item  @click="goProfiles" icon="manager">我的</van-tabbar-item>
        <van-tabbar-item @click="goAbout" icon="more">关于</van-tabbar-item>
</van-tabbar>




  </div>
</template>

<script>

export default {
    data(){
        return{
          active:0,
        }
    },
    beforeMount(){
      // 每次因切换路由导致导航栏重新渲染时 进行一次判断 改变active 数值,否则active 一直为0,导致底部标签栏不能正确改变颜色状态
      switch(this.$route.name){
        case 'Home':
          this.active = 0
          break;
        case 'Tools':
          this.active = 1
          break;
        case 'Profiles':
          this.active = 2
          break;
        case 'About':
          this.active = 3
          break;
     }
    },
    // watch:{
    //   active(val,oldVal){
    //      console.log('new: %s, old: %s', val, oldVal)
    //      this.active = val
    //   }
    // },

    methods: {
        onChange(index) {
            console.log(this.active + 'bottomChange' + index)
            
        },
        goHome(){
            this.$router.push('./')

           
        },
        goTools(){
            this.$router.push('./tools')
 
        },
        goProfiles(){
            this.$router.push('./profiles')

        },
        goAbout(){
            this.$router.push('./about')

        }
  },
}
</script>


<style scoped>
.van-tabbar{
    max-width: 750px;
    left: 0;
    right: 0;
    margin: auto;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>