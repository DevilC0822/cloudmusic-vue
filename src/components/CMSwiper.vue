<template>
  <div id="cmswiper">
      <van-swipe class="my-swipe" :duration="1000" :autoplay="5000" indicator-color="white">
  <van-swipe-item v-for="item in banners" :key="item.index">
     <!-- <a :href="item.url"></a> -->
      <img :src="item.pic" alt="">
  </van-swipe-item>
<!-- <template #indicator>
    <div class="custom-indicator">{{ current + 1 }}/{{banners.length}}</div>
  </template> -->
</van-swipe>

  </div>
</template>

<script>
import { getSwiperImg } from '../api/index.js'
export default {

    data(){
        return {
            banners:[],
            current:'0'
        }
    },
    methods:{
    //     onChange(index) {
    //   this.current = index;
    //  },
    },

    created(){
        getSwiperImg().then(res =>{
            console.log(res)
            this.banners = res.data.banners
        }).catch(err =>{
            console.log(err)
        })
    }
}
</script>

<style>
#cmswiper{
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
}

#cmswiper .my-swipe .van-swipe-item{
    box-sizing: border-box;
    padding: 0 10px;
}
#cmswiper van-swipe-item{
    width: 100%;

}

.van-swipe img{
    width: 100%;
    border-radius: 16px;

}
.van-swipe__indicator{
    width: 20px !important;
    height: 6px !important;
    border-radius: 20% !important;
}
/* .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  } */

@media screen and (max-width:750px) {
  .van-swipe__indicator{
    width: 3vw !important;
    height: 0.8vw !important;

  }
}
</style>