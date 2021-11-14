<template>
  <div id="profiles">

     <cmheader class="pc-show"></cmheader>
        <div class="loginCard" v-if='loginType  == 1' v-show="!refreshLogin">
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
    <!-- <button class="button button-glow button-rounded button-raised button-primary"  @click="loginBtn">登录</button> -->

            <!-- <van-button class="button" @click="loginBtn" round type="info">登录</van-button> -->
            </div>
        
     

        </div>

       
         <div class="loginCard" v-else-if='loginType  == 2'  v-show="!refreshLogin">
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
 

            <!-- <van-button class="button" @click="loginBtn" round type="info">登录</van-button> -->
            </div>

     

        </div>

        <div v-else>
            登录类型错误,请检查loginType
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

</style>

<style>
.van-notify--success{
    border-radius: 0 0 16px 16px !important;
}
</style>