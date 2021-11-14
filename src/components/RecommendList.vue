<template>
  <div id="recommendlist">
      <!-- <div class="header">
        <p>推荐歌单</p>
        <van-button class="button" size="normal" round type="plain" @click="more">更多 ></van-button>
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

</van-swipe> -->


<h2>推荐歌单</h2>
<div class='list-container'>
    <div class='list-item' v-for="(item,index) in recommendList" :key="index" @click="goSongsListView(item)">
       <img :src="item.picUrl" alt="">   
        <p>{{item.name}}</p>
    </div>
</div>


  </div>
</template>

<script>
import { getRecommendList} from '@/api'
export default {
    data(){
        return{
            recommendList:[],

        }
    },

    created(){
        getRecommendList().then(res =>{
            console.log(res)
            this.recommendList = res.data.result




        }).catch(err =>{
            console.log(err)
        })
    },
    methods:{
        goSongsListView(item){
            console.log(item)
            this.$router.push({name:'SearchView',query:{songsListId:item.id}})
        },
        more(){
            this.$router.push('/songList')
        }
    }
}
</script>

<style scoped lang='less'>
#recommendlist{
    h2{
        margin: 24px;
        margin-top: 12px;
        margin-left: 3%;
    }


    .list-container{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;


                .list-item{
           width: 20%;
           margin: 0 2%;
           text-align: center;
           margin-top: 20px;
           box-sizing: border-box;
           border: 1px solid #f2f2f2;
           border-radius: 16px;
           cursor: pointer;

           img{
               width: 80%;
               max-width: 150px;
               min-width: 75px;
                padding-top: 24px;
           }
           p{
               margin: 0;
               padding: 0 20%;
           }
    }
     

   
}
}

@media screen and(max-width:750px) {
    #recommendlist{

            h2{
                margin: 0;
                margin-top: 12px;
            }

    
.list-container{

        .list-item{
            img{

                padding-top: 12px;
           }
           p{
               font-size: 10px;
               padding: 0;
           }
    }
}

   
}

}

@media screen and(max-width:360px) {
    #recommendlist{


    
.list-container{

        .list-item{
           p{
               font-size: 8px;
           }
    }
}

   
}
}
</style>