<template>
  <div id="cmheader">
      <van-search class="headerSearch"
  v-model="searcSongName"
  shape="round"
  background="#fff"
  :placeholder=placeholder

/>
<!-- <van-button round color="#df2f27" size='normal' type="primary">搜索</van-button> -->
<van-button round  @keyup.enter.native="searchSong"  @click="searchSong" color="linear-gradient(to right, #ff6034, #ee0a24)">
  搜索
</van-button>



  </div>
</template>

<script>
import { getDefaultSearch } from '../api/index.js'

export default {
    data(){
        return {
            defaultKeyword:'',
            placeholder:'',
            searcSongName:'',
            // songsInfo:[]
        }
    },
    methods:{
        searchSong(){
            //如果搜索关键词为真时则直接搜索,否则搜索默认关键词
            if(this.searcSongName){
                this.$router.push({name:'SearchView',query: {keywords:this.searcSongName}})     
            }else{
                this.searcSongName = this.defaultKeyword
                this.$router.push({name:'SearchView',query: {keywords:this.searcSongName}})     
            }
    

        }
    },
    created(){
        getDefaultSearch().then(res =>{
        console.log('获取默认关键词')
        console.log(res.data.data)
        this.defaultKeyword = res.data.data.realkeyword
        this.placeholder = res.data.data.showKeyword
        }).catch(err =>{
            console.log(err)
        })
    }

}
</script>

<style scoped>
#cmheader{
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 10px; */
}

.headerSearch{
    width: 100%;
}
.van-button--normal{
    padding: 0 25px;
}
.van-button__content{
    width: 10vw;
}
</style>