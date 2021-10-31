<template>
  <div id="cmswiper">

<van-swipe ref="swipe" class="my-swipe"  :duration="1000" :autoplay="0" indicator-color="white">

  <van-swipe-item v-for="item in banners" :key="item.index">
     <!-- <a :href="item.url"></a> -->
      <img :src="item.pic" alt="">
      <button @click="prev" class="prev">prev</button>
<button @click="next" class="next">next</button>
  </van-swipe-item>
<!-- <template #indicator>
    <div class="custom-indicator">{{ current + 1 }}/{{banners.length}}</div>
  </template> -->

</van-swipe>


  </div>
</template>

<script>
import { getSwiperImg } from '../api/index.js'
import '@vant/touch-emulator';

export default {

    data(){
        return {
            banners:[],
            current:'0',
            autoplay:0
        }
    },
    methods:{
    //     onChange(index) {
    //   this.current = index;
    //  },
    prev(){
        this.$refs.swipe.prev()

    },
    next(){
        console.log(this.$refs.swipe)
        this.$refs.swipe.next()
    }
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
    position: relative;
}
.prev,.next{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    /* background-color: transparent; */
    background-color: pink;
    
    position: absolute;
    top: 40%;
}
.prev{

    left: 2%;
}
.next{
    right: 2%;
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
  .prev,.next{
      display: none;
  }
}
</style>