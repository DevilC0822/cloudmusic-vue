<template>
  <div id="profiles">

     <cmheader class="pc-show"></cmheader>
        <!-- <div class="loginCard" v-if='loginType  == 1' v-show="!refreshLogin">
            <h3>登录</h3>

            <div class="inputBox">
                <van-cell-group>
                    <van-field v-model="phone" label="手机号" placeholder="请输入手机号" />
                </van-cell-group>
                 <van-cell-group>
                    <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
                </van-cell-group>
            </div>

            <div class="loginBox">
    <p>换种登陆方式? ><span @click="loginType = 2">使用手机验证码登录</span></p>
    <el-button type="primary" @click="loginBtn">登录</el-button>
 </div>
        
     

        </div> -->



       
         <!-- <div class="loginCard" v-else-if='loginType  == 2'  v-show="!refreshLogin">
            <h3>登录</h3>

            <div class="inputBox">
                <van-cell-group>
                    <van-field v-model="phone" label="手机号" placeholder="请输入手机号" />
                </van-cell-group>
                 <van-cell-group>
                    <van-field v-model="password" label="验证码" placeholder="请输入短信验证码" />
                </van-cell-group>
            </div>

              <div class="loginBox">
    <p>换种登陆方式? ><span @click="loginType = 1">使用账号登录</span></p>
    <el-button type="primary">登录(未做)</el-button>
 

         
            </div>

     

        </div> -->

        <!-- <div v-else>
            登录类型错误,请检查loginType
        </div> -->

        <div class='new'  v-show="!refreshLogin">

 <div class="page">
  <div class="container">
    <div class="left">
      <div class="login">Login</div>
      <div class="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
    </div>
    <div class="right">
      <svg viewBox="0 0 320 300">
        <defs>
          <linearGradient
                          inkscape:collect="always"
                          id="linearGradient"
                          x1="13"
                          y1="193.49992"
                          x2="307"
                          y2="193.49992"
                          gradientUnits="userSpaceOnUse">
            <stop
                  style="stop-color:#ff00ff;"
                  offset="0"
                  id="stop876" />
            <stop
                  style="stop-color:#ff0000;"
                  offset="1"
                  id="stop878" />
          </linearGradient>
        </defs>
        <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
      </svg>
      <div class="form">
        <label for="email">Email</label>
        <input type="phone" v-model='phone' id="email" @focus="emailFous">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" @focus="pswFous">
        <input type="submit" id="submit" value="Submit" @focus="loginFous" @click='loginBtn'>
      </div>
    </div>
  </div>
</div>

        </div>




        <div class="profileCard" v-show="refreshLogin">
            <div class="showInfoBox">
                <p>
                用户名：{{refreshProfileInfo.nickname}}<br>
                个性签名：{{refreshProfileInfo.signature}}<br>
                用户等级:{{refreshuserLevelInfo.level}}
                </p>
               <van-button @click="loginOut" round plain type="primary">注销</van-button>
            </div>
           
            <div class="level">
                <div v-if="!(refreshuserLevelInfo.level == 10)">
                    <van-circle
                    v-model="refreshuserLevelInfo.nowLoginCount"
                    :rate="refreshuserLevelInfo.nextLoginCount"
                    :color="gradientColor"
                    text="登陆天数"
                    />
                    <van-circle
                    v-model="refreshuserLevelInfo.nowPlayCount"
                    :rate="refreshuserLevelInfo.nextPlayCount"
                    :color="gradientColor"
                    text="播放歌曲数"
                    />
                </div>

                <div v-else>
                    <van-circle
                    v-model="fixedCount"
                    :rate="fixedCount"
                    :color="gradientColor"
                    text="大圆满"
                    />
                </div>

            </div>

        
        </div>
        <cmbottom/>

  </div>
</template>

<script>
import cmheader from '../components/CMHeader.vue'
import cmbottom from '../components/CMBottom.vue'
import anime from 'animejs/lib/anime.es.js';
import { login } from '@/api'
import { loginStatus } from '@/api'
import { userLevel } from '@/api'


import qs from 'qs'
import { Dialog } from 'vant';
import { Notify } from 'vant';

export default {
    data() {
        return{
            phone:'',
            password:'',
            // profileInfo:{},
            // isLogin:false,
            // userLevelInfo:{},
            fixedCount:100,
            gradientColor: {
            '0%': '#3fecff',
            '100%': '#6149f6',
          },
          //登陆方式 默认为1账号密码登录  2为验证码登录
          loginType:1
        }
    },
    computed:{
        refreshLogin(){
            // this.isLogin = this.$store.state.isLogin
            return this.$store.state.isLogin
        },
        refreshProfileInfo(){
            return this.$store.state.profileInfo
        },
        refreshuserLevelInfo(){
            return this.$store.state.userLevelInfo
        },
    },
    components:{
        cmheader,
        cmbottom
    },
    methods:{
       loginBtn(){
           login(this.phone,this.password).then(res =>{
               console.log('登陆成功')
               console.log(res)
            //    let loginRes = res
            // 将个人信息提交到store中 
                this.$store.commit('setProfileInfo',res.data.profile)
            //    console.log(res.data.token)
               this.$store.commit('setToken',JSON.stringify(res.data.token))
               this.$store.commit('setCookie',res.data.cookie)
                if(res.data.code == 200){
                    loginStatus().then(res =>{
                        if(res.data.data.code == 200){
                            userLevel().then(res =>{
                                console.log('loginStatus')
                                console.log(res)
                                // this.userLevelInfo = res.data.data
                                // 将个人等级信息提交到store中
                                this.$store.commit('setUserLevelInfo',res.data.data)

                                
                            }).catch(err =>{
                                console.log('loginStatus')
                                console.log(err)

                            })
                            // this.profileInfo = loginRes.data.profile
                           

                            // this.isLogin = true
                            // 登陆成功后 将更变登录状态
                            this.$store.commit('setIsLogin',true)
                            console.log(this.$store)
                        Notify({ type: 'success', message: '登录成功' });
                            
                    }
                }).catch(err =>{
                    console.log(err)
                })
               }else{
                   if(res.data.code == 502){
                    Dialog({ message: '密码错误' })
                   }else{
                    Dialog({ message: '登录失败' })
                   } 
               }
           }).catch(err =>{
               console.log(err)
                    Dialog({ message: '登录失败' })
           })
       },
       loginOut(){
           this.$store.commit('setIsLogin',false)
       },
       emailFous(){
           var current = null
if (current) current.pause()
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: 0,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
       },
       pswFous(){
           var current = null
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -336,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '240 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
       },
       loginFous(){
           var current = null
  if (current) current.pause();
  current = anime({
    targets: 'path',
    strokeDashoffset: {
      value: -730,
      duration: 700,
      easing: 'easeOutQuart'
    },
    strokeDasharray: {
      value: '530 1386',
      duration: 700,
      easing: 'easeOutQuart'
    }
  });
       }
    },
}
</script>

<style scoped>


.loginCard{
    width: 60%;
    height: 300px;
    background: white;
    margin: 0 auto;
    border-radius: 16px;
    box-shadow: 0px 0px 2px 1px whitesmoke;
    margin-top:10%;
}
.loginBox{
    display:flex;
    justify-content: space-around;
    margin-top: 12px;
}
.loginCard h3{
    padding-top: 50px;
    font-weight: bold;
    font-size: 24px;
    margin: 0;
}
.loginCard p{
    font-size: 12px;
}
/* .loginCard .button{
    left: 100px;
    top: 25px;
    width: 80px;
} */

.inputBox{
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
}
.profileCard{
    width: 60%;
    height: 300px;
    background: white;
    margin: 0 auto;
    border-radius: 16px;
    box-shadow: 0px 0px 2px 1px whitesmoke;
    text-align: left;
    margin-top:10%;
}
.profileCard .level{
    text-align: center;
    margin-top: 20px;
}
.profileCard p{
    line-height: 1.5;
    margin-left: 10px;
    padding-top: 15px;
}
.showInfoBox{
    display: flex;
    align-items: baseline;
    justify-content: space-evenly;
}

@media screen and (max-width:750px) {
    .loginCard,.profileCard{
        width: 70%;
    }
    .inputBox{
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
}
}
@media screen and (max-width:541px) {
    .loginCard,.profileCard{
        width: 80%;
    }
    .inputBox{
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
}
}
@media screen and (max-width:415px) {
    .loginCard,.profileCard{
        width: 95%;
    }
    .inputBox{
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
}
}


@import url('https://rsms.me/inter/inter-ui.css');
::selection {
  background: #2D2F36;
}
::-webkit-selection {
  background: #2D2F36;
}
::-moz-selection {
  background: #2D2F36;
}
body {
  background: white;
  font-family: 'Inter UI', sans-serif;
  margin: 0;
  padding: 20px;
}
.page {
  background: #e2e2e5;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  place-content: center;
  width: 100%;
}
@media (max-width: 767px) {
  .page {
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}
.container {
  display: flex;
  height: 320px;
  margin: 0 auto;
  width: 640px;
}
svg{
    left: 0;
}
@media (max-width: 767px) {
  .container {
    flex-direction: column;
    height: 630px;
    width: 320px;
  }
}
.left {
  background: white;
  height: calc(100% - 40px);
  top: 20px;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .left {
    height: 100%;
    left: 20px;
    width: calc(100% - 40px);
    max-height: 270px;
  }
}
.login {
  font-size: 50px;
  font-weight: 900;
  margin: 50px 40px 40px;
}
.eula {
  color: #999;
  font-size: 14px;
  line-height: 1.5;
  margin: 40px;
}
.right {
  background: #474A59;
  box-shadow: 0px 0px 40px 16px rgba(0,0,0,0.22);
  color: #F1F1F2;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .right {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    max-height: 350px;
  }
}
svg {
  position: absolute;
  width: 320px;
}
path {
  fill: none;
  stroke: url(#linearGradient);;
  stroke-width: 4;
  stroke-dasharray: 240 1386;
}
.form {
  margin: 40px;
  position: absolute;
}
label {
  color:  #c2c2c5;
  display: block;
  font-size: 14px;
  height: 16px;
  margin-top: 20px;
  margin-bottom: 5px;
}
input {
  background: transparent;
  border: 0;
  color: #f2f2f2;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
}
input::-moz-focus-inner { 
  border: 0; 
}
#submit {
  color: #707075;
  margin-top: 40px;
  transition: color 300ms;
}
#submit:focus {
  color: #f2f2f2;
}
#submit:active {
  color: #d0d0d2;
}


</style>

<style>
.van-notify--success{
    border-radius: 0 0 16px 16px !important;
}
</style>