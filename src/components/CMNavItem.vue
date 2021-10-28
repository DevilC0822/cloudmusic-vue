<template>
  <div id="cmnavitem">
        <van-grid gutter="10" >
            <van-grid-item icon="good-job-o" @click="todayRecommend" text="每日推荐" />
            <van-grid-item icon="service-o" @click="privateFM" text="私人FM" />
            <van-grid-item icon="music-o" @click="songList" text="歌单" />
            <van-grid-item icon="fire-o" @click="songsRanking" text="排行榜" />
        </van-grid>
  </div>
</template>

<script>
export default {
    methods:{
        todayRecommend(){
            this.$router.push('todayRecommend')
        },
        privateFM(){
            this.$router.push('privateFM')
        },
        songList(){
            this.$router.push('songList')
        },
        songsRanking(){
            this.$router.push('songsRanking')
        }
    }
}
</script>

<style scoped>
#cmnavitem{
    margin-top: 10px;

}



</style>