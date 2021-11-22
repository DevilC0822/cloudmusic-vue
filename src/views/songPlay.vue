<template>
  <div class="songPlay">
     <backheader></backheader>


<!-- <div class="audio-wrapper">
    <audio id='audio'>
        <source :src="playingUrl" type="audio/mp3">
    </audio>
    <div class="audio-left" @click="Play">ICON</div>
    <div class="audio-right">
        <p style="max-width: 536px;">Beta-B_Kan R. Gao.mp3</p>
        <div class="progress-bar-bg" id="progressBarBg"><span id="progressDot"></span>
            <div class="progress-bar" id="progressBar"></div>
        </div>
        <div class="audio-time"><span class="audio-length-current" id="audioCurTime">00:00</span><span class="audio-length-total">01:06</span></div>
    </div>
</div> -->

<div class="audio-wrapper">
    <div class="songInfoShow">
        <h6>{{this.$store.state.playingSong.name}}</h6>
        <!-- <p>{{this.$store.state.playingSong.songer[0].name}}</p> -->
       <p v-for="item in this.$store.state.playingSong.songer" :key="item.index" style="margin-left:'10px'">{{item.name}}</p>
    </div>
    <audio controls  :src="playingUrl">
    <p>Your browser does not support the <code>audio</code> element.</p>
    </audio>

    <div class='lyric'>
       <h2>歌词</h2>
        <p v-html='lyric'></p>

    </div>
</div>



  </div>
</template>

<script>
import backheader from '@/components/BackHeader.vue'
import {getSongPlayUrl} from '@/api'
import {getLyric} from '@/api'


export default {
    components:{
        backheader,
    },
    data(){
        return{
            playingUrl:'',
            lyric:``

        }
    },
    methods:{
        // 控制播放
        // Play(){
        //     console.log('play')
        //     var audio =document.querySelector('#audio');
        //     audio.play()
        // }
    },

    mounted(){
        console.log(this.$store.state)
        getSongPlayUrl(this.$store.state.playingSong.id).then(res =>{
            console.log('getSongPlayUrl')
            console.log(res)
            this.playingUrl = res.data.data[0].url

            // 获取歌词
            getLyric(this.$store.state.playingSong.id).then(res =>{
                console.log('getLyric')
                console.log(res)
                let _str = res.data.lrc.lyric
                _str = _str.replace(/\s\[/g,'<br>[')


                this.lyric = _str

            }).catch(err =>{
                console.log(err)
            })
        }).catch(err =>{
            console.log(err)
        })

    }
}
</script>

<style scoped>

.audio-wrapper {
    background-color: #fcfcfc;
    margin: 10px auto;
    max-width: 670px;
    border: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.audio-wrapper audio{
    width: 100%;
}
.songInfoShow{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;
}
.songInfoShow h6{
    margin: 0;
    font-size: 20px;
    margin-right: 15px;
    line-height: 1.5;
}
.songInfoShow p{
    margin: 0;
    font-size: 14px;
    align-self: end;
    line-height: 1.5;
}
.lyric{
    display: table;
    margin: auto;
}
.lyric h2{
    text-align: center;
}

</style>