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
    console.log(this.$store.state);
    if (!this.$store.state.isLogin) {
      alert("未登录");
      this.$router.push("/profiles");
    }

    getTodayRecommendSongs()
      .then((res) => {
        console.log("获取今日推荐");
        console.log(res);
        this.songsInfo = res.data.data.dailySongs;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
#todayrecommend {
  min-height: 100vh;
}
</style>