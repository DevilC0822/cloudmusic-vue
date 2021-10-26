import Axios from "./axios";
import md5 from 'js-md5';
import store from '@/store/index.js'



export function getSwiperImg(){
    return Axios ({
            url:'/banner',
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                type:2
            },

        }
    )
}

export function getRecommendList(){
    return Axios({
        url:'/personalized',
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        params:{
            limit:8
        },
    })
}

export function login(phone, psd){
    return Axios({
        url:'/login/cellphone',
        methods:'post',
        headers:{
            'Content-Type':'application/json'
        },
        params:{
            phone:phone,
            md5_password:md5(psd)
        },
    })
}

export function loginStatus(){
    return Axios({
        url:'/login/status',
        methods:'post',
        headers:{
            'Content-Type':'application/json',
            // 'cookie':localStorage.getItem('cookie')
           

        },
    })
}

export function userLevel(){
        return Axios({
            url:'/user/level',
            method:'post',
            headers:{
                'Content-Type':'application/json',
                // 'cookie':localStorage.getItem('cookie')

            },
        })
}

export function search(songName){
        return Axios({
            url:'/search',
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                keywords:songName
            }
        })
}

export function getDefaultSearch(){
        return Axios({
            url:'/search/default',
            method:'post',
            headers:{
                'Content-Type':'application/json'
            }
        })
}

export function getSongUrl(songId){
        return Axios({
            url:'/song/url',
            methods:'post',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                id:songId,
                br:320000
            }
        })
}

export function checkMusic(songId){
        return Axios({
            url:'/check/music',
            methods:'post',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                id:songId,
                br:320000
            }
    })
}

export function getTodayRecommendSongs(){
        return Axios({
            url:'/recommend/songs',
            methods:'post',
            headers:{
                'Content-Type':'application/json',
                // 'cookie':localStorage.getItem('cookie')
            },
        })
}

export function getSongPlayUrl(songId){
        return Axios({
            url:'/song/url',
            methods:'post',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                id:songId
            }
        })
}

export function getLyric(songId){
    return Axios({
        url:'/lyric',
        methods:'post',
        headers:{
            'Content-Type':'application/json'
        },
        params:{
            id:songId
        }
    })
}

export function getSongsList(songsListId){
    return Axios({
        url:'/playlist/detail',
        methods:'post',
        headers:{
            'Content-Type':'application/json'
        },
        params:{
            id:songsListId
        }
    })
}


//通过歌曲id获取歌曲详情
export function getSongDetail(songId){
        return Axios({
            url:'song/detail',
            methods:'post',
            headers:{
                'Content-Type':'application/json'
            },
            params:{
                ids:songId
            }
        })
}
