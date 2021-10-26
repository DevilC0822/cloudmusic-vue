<template>
  <div id="searchview">
        <backheader :title="this.$route.query.keywords + ' 的搜索结果'" />
      <!-- <div class="showSongsBox">
          <ul>
              <li>
                  <h2>歌曲名</h2>
                  <p>歌手</p>
                  <div class="menuBox">

                  </div>
              </li>
              <li v-for="(item,index) in songsInfo" :key="index">
                  
                  <h2>{{item.name}}</h2>
                  <p>{{item.artists[0].name}}</p>
                  <div class="menuBox">
                      <span>
                          <a href="">播放</a>
                          </span>
                      <span @click="showDownloadDialog(item.id)">下载</span>
                  </div>
                  </li>
          </ul>
          

      </div> -->


<div >
    <song-card :songsInfo='songsInfo'/>
</div>

      <van-popup v-model="isShowDownloadDialog" round  overlay-class='downloadDialog'>
          <div>
              <h2>下载链接</h2>
                <p>
                    <a :href="songDownloadUrl">{{songDownloadUrl}}</a>
                </p>
          </div>

      </van-popup>
  </div>
</template>

<script>
import backheader from '@/components/BackHeader.vue'
import { search } from '@/api'
import { Toast } from 'vant';
import { getSongUrl } from '@/api'
import { checkMusic } from '@/api'
import { Dialog } from 'vant';
import SongCard from '../components/songCard.vue';

export default {

    data(){
        return{
            songsInfo:[],
            activeName:'1',
            showPopover: false,
            actions: [],
            songId:null,
            songDownloadUrl:'',
            isShowDownloadDialog:false,
        }
    },
    computed:{
        
    },
    methods:{
        onSelect(action) {
            // Toast(action.text);
            // this.isShowDownloadDialog = true;
            // Dialog.alert({
            // title: '下载链接',
            // message: this.songDownloadUrl,
            // }).then(() => {
            // // on close
            // });
        },
        showDownloadDialog(songId){
             getSongUrl(songId).then(res =>{
                console.log(res)
                 this.songDownloadUrl = res.data.data[0].url
                   }).catch(err =>{
                console.log(err)
            })
            this.isShowDownloadDialog = true;
        },
        playMusic(songId){
            console.log(songId)
        },
        getSongBit(songId){
            getSongUrl(songId).then(res =>{
                console.log(res)
                 this.songDownloadUrl = res.data.data[0].url
                // if(res.data.data.length == 1){
                //     this.actions = [{
                //         text: res.data.data[0].br
                //     }]
                //     this.songDownloadUrl = res.data.data[0].url
                // }else if(res.data.data.length == 2){
                //      this.actions = [{
                //         text: res.data.data[0].br
                //     },{
                //          text: res.data.data[1].br
                //     }
                //     ]
                // }else if(res.data.data.length == 3){
                //      this.actions = [{
                //         text: res.data.data[0].br
                //     },{
                //          text: res.data.data[1].br
                //     },{
                //          text: res.data.data[2].br
                //     }
                //     ]
                // }
            }).catch(err =>{
                console.log(err)
            })
            
            // checkMusic(songId).then(res =>{
            //     console.log(res)
            // }).catch(err =>{
            //     console.log(err)
            // })
            
        }
    },
    components:{
        backheader,
        SongCard
    },
    created(){
        console.log(this.$route.query.keywords)
        search(this.$route.query.keywords).then(res =>{
                console.log('search')
                console.log(res)
                this.songsInfo = res.data.result.songs
            }).catch(err =>{
                console.log(err)
            })
    }
    
}
</script>

<style scoped>
.showSongsBox{

}
.showSongsBox ul li{
    display: flex;
    align-items: center
}
.showSongsBox h2{
    margin: 10px 0;
    font-size: 18px;
    text-align: left;
    padding-left: 15px;
    width:40%;
}
.showSongsBox p{
    padding-left: 10px;
    width:30%;
}
.showSongsBox .menuBox{
    width:30%
}
.showSongsBox .menuBox span:last-child{
    margin-left: 5px;
}
.van-popup{
    width: 80%;
}
.van-popup p{
    word-break: break-all;
    padding: 0 30px;
    text-align: left;
}
</style>