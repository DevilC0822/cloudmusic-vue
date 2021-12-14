<template>
  <div id="app">
    <router-view />

    <div :class="{ 'imitation-audio': true, 'is-bottom': isBottom }">
      <audio
        :src="playingUrl"
        ref="mainAudio"
        style="display: none"
        @ended="next"
      ></audio>
      <div class="song-info">
        <div v-if="this.$store.state.playingSong.name">
          <p>{{ this.$store.state.playingSong.name }}</p>
          <span>{{ this.$store.state.playingSong.songer[0].name }}</span>
          <span v-if="this.$store.state.playingSong.songer[1]">{{
            this.$store.state.playingSong.songer[1].name
          }}</span>
        </div>
        <div v-else>
          <span>当前无歌曲在播放</span>
        </div>
      </div>

      <div class="song-control">
        <svg class="icon" aria-hidden="true" @click="prev">
          <use xlink:href="#icon-shangyiqu"></use>
        </svg>

        <svg
          v-if="!this.$store.state.isPlay"
          class="icon"
          aria-hidden="true"
          @click="play"
        >
          <use xlink:href="#icon-bofangyinle"></use>
        </svg>

        <svg v-else class="icon" aria-hidden="true" @click="play">
          <use xlink:href="#icon-a-zantingyinle"></use>
        </svg>

        <svg class="icon" aria-hidden="true" @click="next">
          <use xlink:href="#icon-xiayiqu"></use>
        </svg>
      </div>

      <div class="songs-list">
        <!-- 播放列表弹出框 -->
        <el-dropdown trigger="click" @command="playListSong">
          <span class="el-dropdown-link">
            <svg class="icon el-dropdown-link" aria-hidden="true">
              <use xlink:href="#icon-bofangliebiao"></use>
            </svg>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in playingListInfo"
              :key="index"
              :command="item.id"
              >{{ index + 1 }}&nbsp;&nbsp;{{ item.name
              }}<span
                class="songer"
                v-for="(songer, index) in item.ar"
                :key="index"
                >{{ songer.name }}</span
              ></el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { getSongPlayUrl } from "@/api";
import { getSongDetail } from "@/api";
import { loginStatus } from "@/api";

export default {
  components: {},
  data() {
    return {
      playingUrl: "",
      isBottom: false,
      visible: false,
      playingListInfo: [],
    };
  },
  computed: {},
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (localStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("store"))
        )
      );
      this.$store.commit('setIsLogin',false)
      if (this.$store.state.cookie && !this.$store.state.isLogin) {
        let cookie = this.$store.state.cookie;
        this.cookieIsOK(cookie)
      }
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      this.$store.commit("setIsPlay", false);
      localStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  mounted() {
    // 初始化 模拟的audio
    console.log(this.$store.state);
    let playingSongId = this.$store.state.playingSong.id;
    if (playingSongId) {
      getSongPlayUrl(playingSongId)
        .then((res) => {
          console.log("getSongPlayUrl");
          console.log(res);
          this.playingUrl = res.data.data[0].url;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  methods: {
    play() {
      let audio = this.$refs.mainAudio;
      if (!audio.getAttribute("src") == "") {
        if (audio.paused) {
          audio.play();
          this.$store.commit("setIsPlay", true);
        } else {
          audio.pause();
          this.$store.commit("setIsPlay", false);
        }
      }
    },
    prev() {
      console.log("prev");
      let this_playSongId = this.$store.state.playingSong.id;
      let playingList = this.$store.state.playingList;
      let this_index = playingList.indexOf(this_playSongId);
      this.playListSong(playingList[this_index - 1]);
    },
    next() {
      console.log("next");
      let this_playSongId = this.$store.state.playingSong.id;
      let playingList = this.$store.state.playingList;
      let this_index = playingList.indexOf(this_playSongId);
      this.playListSong(playingList[this_index + 1]);
    },

    playListSong(id) {
      console.log(id);
      getSongDetail(id).then((res) => {
        console.log(res);
        let playingSong = {};
        playingSong.name = res.data.songs[0].name;
        if (res.data.songs[0].artists) {
          playingSong.songer = res.data.songs[0].artists;
        } else {
          playingSong.songer = res.data.songs[0].ar;
        }
        playingSong.id = res.data.songs[0].id;
        this.$store.commit("setPlayingSong", playingSong);
        setTimeout(() => {
          this.$refs.mainAudio.play();
          this.$store.commit("setIsPlay", true);
        }, 500);
      });
    },

    cookieIsOK(cookie) {
      loginStatus(cookie).then((res) => {
        if (res.data.data.profile.userId) {
          this.$store.commit("setIsLogin", true);
          return true;
        } else 
        return false;
      });
    },
  },
  watch: {
    // 监测正在播放歌曲的id 发生改变则根据此id重新请求歌曲url
    "$store.state.playingSong.id": function (newVal, oldVal) {
      console.log("watch");
      getSongPlayUrl(newVal)
        .then((res) => {
          console.log("getSongPlayUrl");
          // console.log(res);
          this.playingUrl = res.data.data[0].url;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //监测播放列表是否变化，有变化则重新获取渲染
    "$store.state.playingList": function (newVal) {
      this.playingListInfo = [];
      getSongDetail(newVal.toString())
        .then((res) => {
          for (const iterator of res.data.songs) {
            this.playingListInfo.push(iterator);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    $route: function (newRouter) {
      console.log(newRouter);
      if (
        newRouter.name == "Home" ||
        newRouter.name == "Tools" ||
        newRouter.name == "Profiles" ||
        newRouter.name == "About"
      ) {
        this.isBottom = false;
      } else {
        this.isBottom = true;
      }
    },

    // 监测cookie
    "$store.state.cookie": function (newVal) {
      if (newVal) {
        this.cookieIsOK(newVal);
      } else {
        console.log("watch cookie为空，退出登录");
        this.$store.commit("setIsLogin", false);
      }
    },
  },
};
</script>


<style>
/* @import url('./assets/css/button.css'); */
* {
  margin: 0;
  padding: 0;
}
html {
  background: #f5f5f5;
}
a {
  text-decoration: none;
  color: #333;
}
/* 加入通用css代码（引入一次就行）阿里矢量图标库symbol引入 */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.pc-show {
  display: block;
}
.mob-show {
  display: none;
}
@media screen and (max-width: 750px) {
  .pc-show {
    display: none !important;
  }
  .mob-show {
    display: block;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #f8f8f8;
    min-height: 100vh;
  }
}
</style>

<style scoped lang='less'>
.el-popper {
  transform-origin: center top;
  position: fixed;
  left: 402px;
  top: 0;
  height: 60%;
  overflow: scroll;

  .songer {
    font-size: 12px;
    margin-left: 8px;
  }
}
.imitation-audio {
  display: flex;
  justify-content: space-around;
  align-items: center;
  // padding: 0 5%;
  position: fixed;
  bottom: 0;
  z-index: 999;
  background: #fff;
  width: 100%;
  padding: 10px 0;

  svg {
    font-size: 24px;
    cursor: pointer;
  }

  .song-info {
    span {
      font-size: 12px;
    }
  }

  .song-control {
    svg {
      margin: 0 5px;
    }
  }
}

@media screen and (max-width: 750px) {
  .imitation-audio {
    bottom: 50px;
  }
  .is-bottom {
    bottom: 0;
  }
}
</style>
