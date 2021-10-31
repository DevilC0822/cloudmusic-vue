<template>
  
  <div>
     
        <div class="songCard" v-for="(item,index) in songsInfo" :key="index">
     
                <div class="songsIndex">
                  <p>{{index + 1}}</p>
                </div>

                <div class="songInfo">
                    <h3>{{item.name}}</h3>
                    <p v-if="item.alias"> {{item.artists[0].name}}</p>
                    <p v-else> {{item.ar[0].name}}</p>
                </div>

                <div class="songMenu">
                    <p @click="goPlay(item)">
                    播放
                    </p>
                </div>
        
        </div>


  </div>

</template>

<script>
export default {
        props:['songsInfo'],
        created(){
            
        },
        methods:{
            goPlay(item){
                console.log('item')
                console.log(item)
                //  this.$router.push({name:'SearchView',query: {keywords:this.searcSongName}})
                this.$router.push({name:'songPlay',query: {songName:item.name}})
                let playingSong = {}
                playingSong.name = item.name
                if(item.artists){
                 playingSong.songer = item.artists[0].name
                }else{
                    playingSong.songer = item.ar[0].name
                }
                playingSong.id = item.id
                this.$store.commit('setPlayingSong',playingSong)
            }
        }
}
</script>

<style  scoped>
.songCard{
    display: flex;
    margin: 1vw;
    background: #fff;
    border-radius: 8px;
}
.songsIndex{
    width: 20%;
}
.songInfo{
    width: 60%;
}
.songInfo h3 ,.songInfo p{
    margin: 0;
    text-align: left;
}
.songMenu{
    width: 20%;
}


</style>>
