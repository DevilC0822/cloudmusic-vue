<template>
  <div id="app">
   
    <router-view/>

    <audio

      controls
      autoplay
      :src="playingUrl"
      style="visibility: hidden;"
    >
    </audio>
  </div>
</template>

<script>
import { getSongPlayUrl } from "@/api";

export default {
  components: {},
  data(){
    return {
    playingUrl:''
    }
  },
  //  computed: {
  //   // 计算属性的 getter
  //   playingUrl: function () {
  //     // `this` 指向 vm 实例
  //          console.log(this.$store.state);
  //   getSongPlayUrl(this.$store.state.playingSong.id)
  //     .then((res) => {
  //       console.log("getSongPlayUrl1");
  //       console.log(res);
        
  //        res.data.data[0].url;
  //        return 'res url'
  // }).catch((err) => {
  //       console.log(err);
  //       return 'err url'
  //     })


  //   }
  // },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (localStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  mounted(){
  //    console.log(this.$store.state);
  //   getSongPlayUrl(this.$store.state.playingSong.id)
  //     .then((res) => {
  //       console.log("getSongPlayUrl");
  //       console.log(res);
  //       this.playingUrl = res.data.data[0].url;
  // }).catch((err) => {
  //       console.log(err);
  //     })
},
 watch: {
    '$store.state.playingSong.id': function (newVal,oldVal) {
      console.log('watch')
      getSongPlayUrl(newVal)
      .then((res) => {
        console.log("getSongPlayUrl");
        // console.log(res);
        this.playingUrl = res.data.data[0].url;
  }).catch((err) => {
        console.log(err);
      })
    },
    '$store.state.cookie': function (newVal) {
      if(newVal){
        console.log('watch cookie不为空，已登录')
        this.$store.commit('setIsLogin',true)
      }else{
        console.log('watch cookie为空，退出登录')
        this.$store.commit('setIsLogin',false)
      }
    }
  },
  

}
</script>


<style lang="less">
/* @import url('./assets/css/button.css'); */
html {
  background: #f5f5f5;
}
a {
  text-decoration: none;
  color: #333;
}
.pc-show {
  display: block;
}
.mob-show {
  display: none;
}
@media screen and (max-width: 750px) {
  .pc-show {
    display: none !important;
  }
  .mob-show {
    display: block;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #f8f8f8;
    min-height: 100vh;
  }
}
</style>
