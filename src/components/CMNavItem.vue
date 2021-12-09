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
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinlefuhao"></use>
      </svg>
      <h2>每日推荐</h2>
    </div>

    <div class="cmnav-item" @click="privateFM">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-a-changpianjiyinle"></use>
      </svg>
      <h2>私人FM</h2>
    </div>

    <div class="cmnav-item" @click="songList">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cidai"></use>
      </svg>
      <h2>歌单</h2>
    </div>

    <div class="cmnav-item" @click="songsRanking">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinlefengge"></use>
      </svg>
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
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 16px;
    cursor: pointer;

    svg {
      font-size: 36px;
      padding: 10px;
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

      i {
        font-size: 16px;
      }

      h2 {
        font-size: 16px;
      }

      svg {
        font-size: 24px;
        padding: 5px;
      }
    }
  }
}
@media screen and(max-width:360px) {
  #cmnavitem {
    .cmnav-item {
      h2 {
        font-size: 12px;
      }
    }
  }
}
</style>