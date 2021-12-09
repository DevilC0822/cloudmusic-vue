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
      activeName: "1",
      showPopover: false,
      actions: [],
      songId: null,
      songDownloadUrl: "",
      isShowDownloadDialog: false,
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
  },
  components: {
    backheader,
    SongCard,
  },

  created() {
    console.log(this.$route.query);
    if (this.$route.query.keywords) {
    console.log('通过关键词搜索进入页面');
      search(this.$route.query.keywords)
        .then((res) => {
          console.log("search");
          console.log(res);
          // this.songsInfo = res.data.result.songs;

          let songsIdArr = [];
          for (const item of res.data.result.songs) {
            songsIdArr.push(item.id);
          }
          // console.log(songsIdArr.toString());
          this.$store.commit('setPlayingList',songsIdArr)
          // getSongDetail可以接收多个 id, 用 , 隔开 一次请求多首歌曲详细信息
          getSongDetail(songsIdArr.toString())
            .then((res) => {
              console.log("getSongDetail");
              console.log(res);
              this.songsInfo = res.data.songs;
            })
            .catch((err) => {
              console.log(err);
            });

        })
        .catch((err) => {
          console.log(err);
        });
    }

      
    if (this.$route.query.songsListId) {
      console.log(this.$route.query.songsListId);
      console.log('通过歌单形式进入页面');
      getSongsList(this.$route.query.songsListId)
        .then((res) => {
          console.log(res.data.playlist);
          this.showPlayListName = res.data.playlist.name;
          let songsIdArr = [];
          for (const item of res.data.playlist.trackIds) {
            // console.log(item)
            // 每次单独通过id请求 歌曲详细信息
            //   getSongDetail(item.id).then(res =>{
            //     console.log('getSongDetail');
            //     console.log(res)

            //     }).catch(err =>{
            //     console.log(err)
            // })
            songsIdArr.push(item.id);
          }
          // console.log(songsIdArr.toString());
          this.$store.commit('setPlayingList',songsIdArr)

          // getSongDetail可以接收多个 id, 用 , 隔开 一次请求多首歌曲详细信息
          getSongDetail(songsIdArr.toString())
            .then((res) => {
              console.log("getSongDetail");
              console.log(res);
              this.songsInfo = res.data.songs;
            })
            .catch((err) => {
              console.log(err);
            });
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
  }
}
</style>