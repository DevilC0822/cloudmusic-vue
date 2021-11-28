<template>
  <!-- <div id="cmnavitem">
        <van-grid gutter="10" >
            <van-grid-item icon="good-job-o" @click="todayRecommend" text="每日推荐" />
            <van-grid-item icon="service-o" @click="privateFM" text="私人FM" />
            <van-grid-item icon="music-o" @click="songList" text="歌单" />
            <van-grid-item icon="fire-o" @click="songsRanking" text="排行榜" />
        </van-grid>
  </div> -->
  <div id="cmnavitem">
    <div class="cmnav-item" @click="todayRecommend">
      <i class="el-icon-headset"></i>
      <h2>每日推荐</h2>
    </div>

    <div class="cmnav-item" @click="privateFM">
      <i class="el-icon-service"></i>
      <h2>私人FM</h2>
    </div>

    <div class="cmnav-item" @click="songList">
      <i class="el-icon-tickets"></i>
      <h2>歌单</h2>
    </div>

    <div class="cmnav-item" @click="songsRanking">
      <i class="el-icon-s-data"></i>
      <h2>排行榜</h2>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    todayRecommend() {
      this.$router.push("todayRecommend");
    },
    privateFM() {
      this.$router.push("privateFM");
    },
    songList() {
      this.$router.push("songList");
    },
    songsRanking() {
      this.$router.push("songsRanking");
    },
  },
};
</script>

<style scoped lang='less'>
#cmnavitem {
  margin-top: 24px;

  display: flex;
  justify-content: space-around;

  .cmnav-item {
    width: 20%;
    box-sizing: border-box;
    text-align: center;
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 16px;
    cursor: pointer;

    i{
      font-size: 24px;
    }
  }

  .cmnav-item:hover {
    background: #fff;
  }
}

@media screen and(max-width:750px) {
  #cmnavitem {
    margin-top: 12px;

    .cmnav-item {
      padding: 0;

      i{
        font-size: 16px;
      }

      h2{
        font-size: 16px;
      }
    }
  }
}
@media screen and(max-width:360px) {
  #cmnavitem {
    .cmnav-item {

       h2{
        font-size: 12px;
      }
    }
  }
}
</style>