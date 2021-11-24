<template>
  <div id="cmswiper">
    <!-- <van-swipe ref="swipe" class="my-swipe"  :duration="1000" :autoplay="0" indicator-color="white">

  <van-swipe-item v-for="item in banners" :key="item.index">

      <img :src="item.pic" alt="">
      <button @click="prev" class="prev">prev</button>
<button @click="next" class="next">next</button>
  </van-swipe-item>


</van-swipe> -->

    <!-- <swiper
    :slides-per-view="banners.height"
    :space-between="50"
  >
    <swiper-slide v-for="item in banners" :key="item.index">
        <img class="swiper-img" :src="item.pic" alt="">
    </swiper-slide>


  </swiper> -->

    <!-- <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="index" v-for="(banner,index) in banners">
        <img class="swiper-img" :src="banner.pic">
      </div>

    </div>
  </div> -->

    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <div class="swiper-slide" :key="index" v-for="(banner, index) in banners">
        <img class="swiper-img" :src="banner.pic" />
      </div>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
import { getSwiperImg } from "../api/index.js";
import "@vant/touch-emulator";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },

  name: "carrousel",
  data() {
    return {
      banners: [],

      swiperOption: {
        loop: true, // true循环轮播;false不循环轮播
        autoplay: true, //等同于以下设置
        observer: true,
        observeParents: true,
        // 其他的所有的参数同 swiper 官方 api 参数
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet", //需设置.my-bullet样式
        },
        //     navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },

  mounted() {
    console.log(this.$refs);
    console.log("this is current swiper instance object", this.swiper);
  },
  methods: {},

  created() {
    // 获取banner轮播图
    getSwiperImg()
      .then((res) => {
        console.log(res);
        this.banners = res.data.banners;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped lang='less'>
#cmswiper {
  // width: 100%;
  margin: 0 auto;
  margin-top: 24px;

  .swiper-slide {
    text-align: center;
  }
  .swiper-img {
    width: 90%;
    margin: auto;
    border-radius: 16px;
  }

  .my-bullet {
    width: 12px;
    height: 5px;
    display: inline-block;
    border-radius: 32px;
    background: #f5f5f5;
    opacity: 0.2;
  }
}
@media screen and (max-width: 750px) {
  #cmswiper {
    margin-top: 12px;
    .swiper-img {
      width: 100%;
    }
  }
}
</style>

<style>
.my-bullet {
  width: 32px;
  height: 12px;
  display: inline-block;
  border-radius: 32px;
  background: #f5f5f5;
  opacity: 0.2;
  margin: 0 8px;
}
.swiper-pagination-bullet-active {
  background: #000;
}

@media screen and (max-width: 1024px) {
  .my-bullet {
    width: 24px;
    height: 8px;
    margin: 0 5px;
  }
  .swiper-pagination-bullet-active {
    background: #000;
  }
}

@media screen and (max-width: 750px) {
  .my-bullet {
    width: 12px;
    height: 5px;
    background: #f5f5f5;
    margin: 0 3px;
  }
  .swiper-pagination-bullet-active {
    background: #000;
  }
}
</style>
