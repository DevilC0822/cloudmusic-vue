import Axios from "./axios";
import md5 from 'js-md5';
import store from '@/store/index.js'



export function getSwiperImg(){
    return Axios ({
            url:'/banner',           
            params:{
                type:2
            },

        }
    )
}

export function getRecommendList(){
    return Axios({
        url:'/personalized',       
        params:{
            limit:8
        },
    })
}

export function login(phone, psd){
    return Axios({
        url:'/login/cellphone',
        params:{
            phone:phone,
            md5_password:md5(psd)
        },
    })
}

export function loginStatus(){
    return Axios({
        url:'/login/status',
    })
}

export function userLevel(){
        return Axios({
            url:'/user/level',
        })
}

export function search(songName){
        return Axios({
            url:'/search',
            params:{
                keywords:songName
            }
        })
}

export function getDefaultSearch(){
        return Axios({
            url:'/search/default',
        })
}

export function getSongUrl(songId){
        return Axios({
            url:'/song/url',
            params:{
                id:songId,
                br:320000
            }
        })
}

export function checkMusic(songId){
        return Axios({
            url:'/check/music',
            params:{
                id:songId,
                br:320000
            }
    })
}

export function getTodayRecommendSongs(){
        return Axios({
            url:'/recommend/songs',
        })
}

export function getSongPlayUrl(songId){
        return Axios({
            url:'/song/url',
            params:{
                id:songId
            }
        })
}

export function getLyric(songId){
    return Axios({
        url:'/lyric',
        params:{
            id:songId
        }
    })
}

// 获取歌单详情
export function getSongsList(songsListId){
    return Axios({
        url:'/playlist/detail',
        params:{
            id:songsListId
        }
    })
}


//通过歌曲id获取歌曲详情
export function getSongDetail(songId){
        return Axios({
            url:'song/detail',
            params:{
                ids:songId
            }
        })
}

// top/playlist/highquality
export function getHostPlayList(){
        return Axios({
            url:'/top/playlist/highquality',
            params:{
                // limit:10
            }
        })
}
