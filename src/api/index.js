import Axios from "./axios";
import md5 from 'js-md5';




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


export async function loginStatus(cookie){
    return Axios({
        url:'/login/status',
        method:'get',
        params:{
            cookie,
        }
    })
}

// logout
export function logout(cookie){
    return Axios({
        url:'/logout',
        method:'get',
        params:{
            cookie,
        }
    })
}

//  login/refresh
export function loginRefresh(cookie){
    return Axios({
        url:'/login/refresh',
        method:'get',
        params:{
            cookie
        }
    })
}


export function userLevel(cookie){
        return Axios({
            url:'/user/level',
            params:{
                cookie,
            }
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

export function getTodayRecommendSongs(cookie){
        return Axios({
            url:'/recommend/songs',
            params:{
                cookie
            }
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

// toplist
export function getTopList(){
        return Axios({
            url:'/toplist',
        })
}


// user/detail
export function getUserMsg(userId){
    return Axios({
        url:'/user/detail',
        methods:'get',
        params:{
            uid:userId
        }

    })
}

//  login/qr/key
export async function getQRKey(timersTamp){
    return await Axios({
        url:'/login/qr/key',
        methods:'get',
        params:{
            timerstamp:timersTamp
        }
    })
}

//  login/qr/create
export async function QRCreate(key,isQRimg,timersTamp){
    return await Axios({
        url:'/login/qr/create',
        methods:'get',
        params:{
            key,
            qrimg:isQRimg,
            timerstamp:timersTamp
        }

    })
}

//  login/qr/check
export async function QRCheck(key,timersTamp){
    return await Axios({
        url:'login/qr/check',
        methods:'get',
        params:{
            key,
            timerstamp:timersTamp
        }
    })
}