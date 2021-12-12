<template>
  <div id="todayrecommend">
    <backheader title="每日推荐" />

    <div>
      <song-card :songsInfo="songsInfo" />
    </div>
  </div>
</template>

<script>
import backheader from "@/components/BackHeader.vue";
import { getTodayRecommendSongs } from "../../api/index";
import SongCard from "../../components/songCard.vue";

export default {
  components: {
    backheader,
    SongCard,
  },
  name: "carrousel",
  data() {
    return {
      songsInfo: [],
    };
  },

  computed: {},
  created() {
    // if (!this.$store.state.isLogin) {
    //   alert("未登录");
    //   this.$router.push("/profiles");
    // }

    new Promise((resolve, reject) => {
      // console.log(this)
      if (!this.$store.state.isLogin) {
        reject();
      } else {
        resolve();
      }
    }).then(
      () => {
        // resolve()
        getTodayRecommendSongs(this.$store.state.cookie)
          .then((res) => {
            console.log("获取今日推荐");
            console.log(res);
            this.songsInfo = res.data.data.dailySongs;
            let songsIdArr = [];
            for (const item of res.data.data.dailySongs) {
              songsIdArr.push(item.id);
            }
            this.$store.commit("setPlayingList", songsIdArr);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      () => {
        // reject()
        alert("未登录");
        this.$router.push("/profiles");
      }
    );

    // getTodayRecommendSongs(this.$store.state.cookie)
    //   .then((res) => {
    //     console.log("获取今日推荐");
    //     console.log(res);
    //     this.songsInfo = res.data.data.dailySongs;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style scoped>
#todayrecommend {
  min-height: 100vh;
}
</style>