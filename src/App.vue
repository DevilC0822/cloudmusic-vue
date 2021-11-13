<template>
  <div id="app">
    <router-view/>
   

  </div>
</template>

<script>

export default ({
  components: {

  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
},
})

</script>


<style lang="less">
/* @import url('./assets/css/button.css'); */
html{
  background:#fff;
}
a{
  text-decoration:none;
  color:#333;
}
.pc-show{
  display: block;
}
.mob-show{
  display:none;
}
@media screen and (max-width:750px){
 .pc-show{
  display: none;
}
.mob-show{
  display:block;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#f8f8f8;
  min-height: 100vh;
  
}
}





</style>
