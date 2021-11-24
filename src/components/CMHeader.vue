<template>
  <div id="cmheader">
    <div class="pc-show">
      <div class="back-btn" @click="goBack">
        <p>
          <i class="el-icon-arrow-left"></i>
        </p>
      </div>

      <div class="home-change">
        <h2 :class="{ active: isactive1 }" @click="goHome">首页</h2>
        <h2 :class="{ active: isactive2 }" @click="goTools">工具箱</h2>
        <h2 :class="{ active: isactive3 }" @click="goProfiles">我的</h2>
        <h2 :class="{ active: isactive4 }" @click="goAbout">关于</h2>
      </div>

      <div class="search-container">
        <el-input v-model="searcSongName" :placeholder="placeholder"></el-input>
        <el-button
          type="primary"
          icon="el-icon-search"
          @keyup.enter.native="searchSong"
          @click="searchSong"
          >搜索</el-button
        >
      </div>
    </div>

    <div class="mob-show">
      <van-search
        class="headerSearch"
        v-model="searcSongName"
        shape="round"
        background="#fff"
        :placeholder="placeholder"
      />
      <!-- <van-button round color="#df2f27" size='normal' type="primary">搜索</van-button> -->
      <van-button
        round
        @keyup.enter.native="searchSong"
        @click="searchSong"
        color="linear-gradient(to right, #ff6034, #ee0a24)"
      >
        搜索
      </van-button>
    </div>
  </div>
</template>

<script>
import { getDefaultSearch } from "../api/index.js";

export default {
  data() {
    return {
      defaultKeyword: "",
      placeholder: "",
      searcSongName: "",
      isactive1: false,
      isactive2: false,
      isactive3: false,
      isactive4: false,
      // songsInfo:[]
    };
  },
  beforeMount() {
    switch (this.$route.name) {
      case "Home":
        this.isactive1 = true;
        break;
      case "Tools":
        this.isactive2 = true;

        break;
      case "Profiles":
        this.isactive3 = true;

        break;
      case "About":
        this.isactive4 = true;

        break;
    }
  },
  methods: {
    searchSong() {
      //如果搜索关键词为真时则直接搜索,否则搜索默认关键词
      if (this.searcSongName) {
        this.$router.push({
          name: "SearchView",
          query: { keywords: this.searcSongName },
        });
      } else {
        this.searcSongName = this.defaultKeyword;
        this.$router.push({
          name: "SearchView",
          query: { keywords: this.searcSongName },
        });
      }
    },
    goBack() {
      this.$router.go(-1);
    },

    goHome() {
      this.$router.push("./");
    },
    goTools() {
      this.$router.push("./tools");
    },
    goProfiles() {
      this.$router.push("./profiles");
    },
    goAbout() {
      this.$router.push("./about");
    },
  },
  created() {
    getDefaultSearch()
      .then((res) => {
        console.log("获取默认关键词");
        console.log(res.data.data);
        this.defaultKeyword = res.data.data.realkeyword;
        this.placeholder = res.data.data.showKeyword;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped lang="less">
#cmheader {
  overflow: hidden;
  height: 80px;
  .active {
    color: cornflowerblue;
  }
  .pc-show {
    position: fixed;
    z-index: 999;
    background: #fff;
    height: 80px;
    width: 100%;

    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .back-btn {
      padding: 8px 16px;
      box-sizing: border-box;
      cursor: pointer;
    }
    .back-btn :hover {
      background: #f5f5f5;
    }

    .home-change {
      display: flex;
      width: 50%;
      justify-content: space-evenly;

      h2 {
        padding: 5px 10px;
        box-sizing: border-box;
        border-radius: 10px;
        cursor: pointer;
        font-size: 16px;
        position: relative;
      }
      h2::before {
        transform: scaleX(0);
        transform-origin: bottom right;
      }

      h2:hover::before {
        transform: scaleX(1);
        transform-origin: bottom left;
      }

      h2::before {
        content: " ";
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        inset: 0 0 0 0;
        background: hsl(200 100% 80%);
        z-index: -1;
        transition: transform 0.3s ease;
      }
    }

    .search-container {
      display: flex;
      width: 40%;
    }
  }
}

@media screen and (max-width: 750px) {
  #cmheader {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 10px; */

    .mob-show {
      display: flex;
      width: 100%;
    }
    .headerSearch {
      width: 100%;
    }
    .van-button--normal {
      padding: 0 25px;
    }
    .van-button__content {
      width: 10vw;
    }
  }
}
</style>