<template>
  <div id="cmbottom">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <van-tabbar  route active-color="#da0018" :fixed="true" @change="onChange">
        <van-tabbar-item @click="goHome" icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item @click="goTools" icon="gem">工具箱</van-tabbar-item>
        <van-tabbar-item @click="goProfiles" icon="manager">我的</van-tabbar-item>
        <van-tabbar-item @click="goAbout" icon="more">关于</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
    data(){
        return{
            
        }
    },
    methods: {
        onChange(index) {
            console.log('bottomChange')
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