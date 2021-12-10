<template>
  <div class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <div class="songCard infinite-list-item" v-for="(item, index) in songsInfo" :key="index">
      <div class="songsIndex">
        <p>{{ index + 1 }}</p>
      </div>

      <div class="songInfo">
        <div class='song-info-img'>
          <img :src="item.al.picUrl" alt="">
        </div>

        <div class='song-info-text'>
              <h3>{{ item.name }}</h3>
        <p v-if="item.alias">
          {{ item.artists[0].name
          }}<span v-if="item.artists[1]">{{
            " / " + item.artists[1].name
          }}</span
          ><span v-else></span>
        </p>
        <p v-else>
          {{ item.ar[0].name
          }}<span v-if="item.ar[1]">{{ " / " + item.ar[1].name }}</span
          ><span v-else></span>
        </p>
          
        </div>

    
      </div>

      <div class="songMenu">
        <p @click="goPlay(item)">播放</p>
      </div>
  </div>

      <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
    <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
  </ul> -->
  </div>
</template>

<script>
export default {
  props: ["songsInfo"],
  created() {},

  methods: {
    load(){
        
    },
    goPlay(item) {
      console.log("item");
      console.log(item);
      //  this.$router.push({name:'SearchView',query: {keywords:this.searcSongName}})
      this.$router.push({ name: "songPlay", query: { songName: item.name } });
      let playingSong = {};
      playingSong.name = item.name;
      if (item.artists) {
        playingSong.songer = item.artists;
      } else {
        playingSong.songer = item.ar;
      }
      playingSong.id = item.id;
      this.$store.commit("setPlayingSong", playingSong);
    },
  },
};
</script>

<style  scoped lang='less'>
.songCard {
  display: flex;
  margin: 1vw;
  background: #fff;
  border-radius: 8px;
  padding: 5px 10px;
  box-shadow: 1px 1px 1px #000;

  .songsIndex {
    width: 5%;
    text-align: center;
  }
  .songInfo {
    width: 85%;
    padding-left: 15px;
    display: flex;
    align-content: center;

    .song-info-img img{
      max-width: 50px;
      max-height: 50px;
      border-radius: 8px;
    }
    .song-info-text{
      padding-left: 15px;
    }

    h3,p{
      margin: 0;
      text-align: left;
    }
  }

 
  .songMenu {
    width: 10%;
    display: flex;
    justify-content: center;
    p{
      width: fit-content;
      cursor: pointer;
    }
  }
}

@media screen and(max-width:750px) {
  .songCard {
    display: flex;
    margin: 1vw;
    background: #fff;
    border-radius: 8px;

    p,h3{
      font-size: 12px;
    }
  }


}
</style>>
