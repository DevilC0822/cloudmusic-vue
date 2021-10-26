<template>
  <div id="recommendlist">
      <div class="header">
        <p>推荐歌单</p>
        <van-button class="button" size="normal" round type="plain">更多 ></van-button>
      </div>

<van-swipe class="my-swipe" width="30px"  indicator-color="white">
    <van-swipe-item>
        <van-grid :border="false" gutter="10" :column-num="4">
            <van-grid-item v-for="(item,index) in recommendListOne" :key="index" @click="goSongsListView(item)">
                    <img :src="item.picUrl" alt="">   
                    <span>{{item.name}}</span>       
            </van-grid-item>
        </van-grid>
    </van-swipe-item>
    
    <van-swipe-item>
       <van-grid :border="false" gutter="10" :column-num="4">
            <van-grid-item v-for="(item,index) in recommendListTwo"  :key="index" @click="goSongsListView(item)">
                    <img :src="item.picUrl" alt="">   
                    <span>{{item.name}}</span>       

            </van-grid-item>
        </van-grid>      
    </van-swipe-item>

</van-swipe>

  </div>
</template>

<script>
import { getRecommendList} from '@/api'
export default {
    data(){
        return{
            recommendListOne:[],
            recommendListTwo:[]

        }
    },

    created(){
        getRecommendList().then(res =>{
            console.log(res)
            this.recommendListOne.push(res.data.result[0])
            this.recommendListOne.push(res.data.result[1])
            this.recommendListOne.push(res.data.result[2])
            this.recommendListOne.push(res.data.result[3]) 

            this.recommendListTwo.push(res.data.result[4])
            this.recommendListTwo.push(res.data.result[5])
            this.recommendListTwo.push(res.data.result[6])
            this.recommendListTwo.push(res.data.result[7])


        }).catch(err =>{
            console.log(err)
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

<style scoped>
.songListItem{
    width: 50px;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}
.header p{
    font-size: 24px;
}
.header .button{
    padding: 0 20px;
}
.my-swipe img{
    width: 75px;
    height: 75px;

}
.my-swipe span{
    font-size: 16px;
    padding-top: 8px;

}
.my-swipe .box{
    display: flex;
}

@media screen and (max-width:415px) {
    .my-swipe span{
        font-size: 12px;
        padding-top: 5px;
    }
    .my-swipe img{
        width: 16vw;
        height: 16vw;
}
}

</style>

<style>
#recommendlist .van-grid-item .van-grid-item__content{
    justify-content: flex-start !important;
    border-radius: 16px;
}
</style>