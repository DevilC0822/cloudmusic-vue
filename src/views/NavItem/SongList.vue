<template>
  <div id="songlist">
        <backheader title="歌单" />

     <van-grid :gutter="10">
            <van-grid-item class="showPlayList" v-for="(item,index) in playList" :key="index" @click="goSongsListView(item)">
                    <img :src="item.coverImgUrl" alt="">   
                    <span>{{item.name}}</span>       
            </van-grid-item>
        </van-grid>


  </div>
</template>

<script>
import backheader from '@/components/BackHeader.vue'
import { getHostPlayList } from '@/api'
import { getSongsList } from '@/api'


export default {
  components:{
    backheader
  },
  data(){
    return{
      playList:[]
    }
  },
  created(){
    // 获取精品歌单 的id
    getHostPlayList().then(res =>{
     console.log(res);
     //将精品歌单的id 保存到playListIdArr数组中
    //  let playListIdArr = []
     for (const item of res.data.playlists) {
          // playListIdArr.push(item.id)
          this.playList.push(item)
     }
      // 通过getSongsList 传入playListIdArr数组中的歌单调取歌单详情
      // for (const itemId of playListIdArr) {
      //       getSongsList(itemId).then(res =>{
      //           得到歌单中每首歌曲的id 
      //           console.log(res.data.playlist.trackIds)
      //           for (const trackId of res.data.playlist.trackIds) {

      //           }

      //     })
      // }
    


    }).catch(err =>{
     console.log(err);
    })
  },
  methods:{
     goSongsListView(item){
            console.log(item)
            this.$router.push({name:'SearchView',query:{songsListId:item.id}})
        }
  }
}
</script>

<style lang="less" scoped>

 #songlist{
    min-height: 100vh;

    .showPlayList{
      width: 200px;
      height: 200px;

      

      img{
        width: 100%;
      }
    }
  }
</style>

<style lang="less">
 #songlist{

  .van-grid-item__content{
          justify-content: flex-start !important;
      }

 }

</style>