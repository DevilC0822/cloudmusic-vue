<template>
  <div id="searchview">
    <backheader :title="getTitle" />

    <div class="songs-container">
      <song-card :songsInfo="songsInfo" />
    </div>
  </div>
</template>

<script>
import backheader from "@/components/BackHeader.vue";
import { search } from "@/api";
import { getSongUrl } from "@/api";
import { checkMusic } from "@/api";
import SongCard from "../components/songCard.vue";
import { getSongsList } from "@/api";
import { getSongDetail } from "@/api";

export default {
  data() {
    return {
      songsInfo: [],
      songId: null,
      songDownloadUrl: "",
      showPlayListName: "",
    };
  },
  computed: {
    getTitle() {
      if (this.$route.query.keywords) {
        return this.$route.query.keywords + " 的搜索结果";
      }
      if (this.$route.query.songsListId) {
        return this.showPlayListName + " 的搜索结果";
      }
    },
  },
  methods: {
    playMusic(songId) {
      console.log(songId);
    },
    getSongBit(songId) {
      getSongUrl(songId)
        .then((res) => {
          console.log(res);
          this.songDownloadUrl = res.data.data[0].url;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    lazy_load() {
      let songsIdArr_lazy = [];
      for (const iterator of this.$store.state.playingList) {
        songsIdArr_lazy.push(iterator);
      }
      const that = this;

      function getNextSongsInfo(n) {
        let newAdd = [];
        if (songsIdArr_lazy.length >= n) {
          newAdd = songsIdArr_lazy.splice(0, n);
        } else {
          newAdd = songsIdArr_lazy.splice(0);
        }
        if (newAdd.length > 0) {
          getSongDetail(newAdd.toString())
            .then((res) => {
              for (const iterator of res.data.songs) {
                that.songsInfo.push(iterator);
              }
            })
            .catch((err) => {
              console.log(err);
            });
          console.log("getNextSongsInfo");
          console.log(newAdd);
        }

        if (newAdd.length == 0 && that.$route.name == 'SearchView') {
          
          that.$message({
            message: "到底了",
            type: "warning",
          });
        }
      }

      getNextSongsInfo(30);

      document.addEventListener("scroll", function () {
        if (getScrollTop() + getClientHeight() == getScrollHeight()) {
          getNextSongsInfo(5);
        }
      });

      //滑动
      function getScrollTop() {
        var scrollTop = 0;
        if (document.documentElement && document.documentElement.scrollTop) {
          scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
          scrollTop = document.body.scrollTop;
        }
        return scrollTop;
      }
      //获取当前可视范围的高度
      function getClientHeight() {
        var clientHeight = 0;
        if (
          document.body.clientHeight &&
          document.documentElement.clientHeight
        ) {
          clientHeight = Math.min(
            document.body.clientHeight,
            document.documentElement.clientHeight
          );
        } else {
          clientHeight = Math.max(
            document.body.clientHeight,
            document.documentElement.clientHeight
          );
        }
        return clientHeight;
      }
      //获取文档完整的高度
      function getScrollHeight() {
        return Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        );
      }
    },
  },
  components: {
    backheader,
    SongCard,
  },

  created() {
    console.log(this.$route.query);
    if (this.$route.query.keywords) {
      console.log("通过关键词搜索进入页面");
      search(this.$route.query.keywords)
        .then((res) => {
          console.log("search");
          console.log(res);
          // this.songsInfo = res.data.result.songs;

          let songsIdArr = [];
          for (const item of res.data.result.songs) {
            songsIdArr.push(item.id);
          }
          this.$store.commit("setPlayingList", songsIdArr);

          this.lazy_load();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (this.$route.query.songsListId) {
      console.log(this.$route.query.songsListId);
      console.log("通过歌单形式进入页面");
      getSongsList(this.$route.query.songsListId)
        .then((res) => {
          console.log(res.data.playlist);
          this.showPlayListName = res.data.playlist.name;

          let songsIdArr = [];
          for (const item of res.data.playlist.trackIds) {
            songsIdArr.push(item.id);
          }
          this.$store.commit("setPlayingList", songsIdArr);

          this.lazy_load();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style scoped>
.songs-container {
  padding: 20px 0;
  width: 80%;
  margin: auto;
  padding-bottom: 50px;
}
.showSongsBox ul li {
  display: flex;
  align-items: center;
}
.showSongsBox h2 {
  margin: 10px 0;
  font-size: 18px;
  text-align: left;
  padding-left: 15px;
  width: 40%;
}
.showSongsBox p {
  padding-left: 10px;
  width: 30%;
}
.showSongsBox .menuBox {
  width: 30%;
}
.showSongsBox .menuBox span:last-child {
  margin-left: 5px;
}
.van-popup {
  width: 80%;
}
.van-popup p {
  word-break: break-all;
  padding: 0 30px;
  text-align: left;
}

@media screen and (max-width: 750px) {
  .songs-container {
    padding: 12px 0;
    width: 99%;
    padding-bottom: 70px;
  }
}
</style>