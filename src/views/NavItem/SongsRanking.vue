<template>
  <div id="songsranking">
    <backheader title="排行榜" />

    <van-grid :gutter="10">
      <van-grid-item
        class="showPlayList"
        v-for="(item, index) in playList"
        :key="index"
        @click="goSongsListView(item)"
      >
        <img :src="item.coverImgUrl" alt="" />
        <span>{{ item.name }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import backheader from "@/components/BackHeader.vue";
import { getTopList } from "@/api";

export default {
  components: {
    backheader,
  },
  data() {
    return {
      playList: [],
    };
  },
  created() {
    getTopList()
      .then((res) => {
        console.log(res);
        for (const playListId of res.data.list) {
          this.playList.push(playListId);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    goSongsListView(item) {
      console.log(item);
      this.$router.push({
        name: "SearchView",
        query: { songsListId: item.id },
      });
    },
  },
};
</script>


<style lang="less" scoped>
#songsranking {
  min-height: 100vh;

  .showPlayList {
    width: 200px;

    img {
      width: 100%;
    }
  }
}
</style>

<style lang="less">
#songsranking {
  .van-grid-item__content {
    justify-content: flex-start !important;
  }
}
</style>