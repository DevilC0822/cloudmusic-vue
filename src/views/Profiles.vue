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

    <div class="new" v-show="!refreshLogin">
      <div class="page">
        <div class="container">
          <div class="left">
            <div class="login">登录</div>
            <div class="eula">输入网易云音乐官方账号密码即可登录</div>
            <div class="qr-login" @click="qrLogin">扫码登录</div>
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
                  gradientUnits="userSpaceOnUse"
                >
                  <stop style="stop-color: #ff00ff" offset="0" id="stop876" />
                  <stop style="stop-color: #ff0000" offset="1" id="stop878" />
                </linearGradient>
              </defs>
              <path
                d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
              />
            </svg>
            <div class="form">
              <label for="email">手机号</label>
              <input
                type="phone"
                v-model="phone"
                id="email"
                @focus="emailFous"
              />
              <label for="password">密码</label>
              <input
                type="password"
                v-model="password"
                id="password"
                @focus="pswFous"
              />
              <input
                type="submit"
                id="submit"
                value="登录"
                @focus="loginFous"
                @click="loginBtn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="profileCard" v-show="refreshLogin">
      <div class="showInfoBox">
        <p>
          用户名：{{ refreshProfileInfo.nickname }}<br />
          个性签名：{{ refreshProfileInfo.signature }}<br />
          用户等级:{{ refreshuserLevelInfo.level }}
        </p>
        <van-button @click="loginOut" round plain type="primary"
          >注销</van-button
        >
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
    </div> -->
    <div class="wrapper profileCard" v-show="refreshLogin">
      <div class="profile-card js-profile-card">
        <div class="profile-card__img">
          <img :src="refreshProfileInfo.avatarUrl" alt="profile card" />
        </div>

        <div class="profile-card__cnt js-profile-cnt">
          <div class="profile-card__name">
            {{ refreshProfileInfo.nickname }}
          </div>
          <div class="profile-card__txt">
            {{ refreshProfileInfo.signature }}
          </div>
          <!-- <div class="profile-card-loc">
        <span class="profile-card-loc__txt">
          Istanbul, Turkey
        </span>
      </div> -->

          <div class="profile-card-inf">
            <div class="profile-card-inf__item">
              <div class="profile-card-inf__title">
                {{ refreshProfileInfo.follows }}
              </div>
              <div class="profile-card-inf__txt">关注</div>
            </div>

            <div class="profile-card-inf__item">
              <div class="profile-card-inf__title">
                {{ refreshProfileInfo.followeds }}
              </div>
              <div class="profile-card-inf__txt">粉丝</div>
            </div>

            <!-- <div class="profile-card-inf__item">
          <div class="profile-card-inf__title">123</div>
          <div class="profile-card-inf__txt">歌单</div>
        </div> -->

            <div class="profile-card-inf__item">
              <div class="profile-card-inf__title">
                {{ refreshuserLevelInfo.level }}
              </div>
              <div class="profile-card-inf__txt">等级</div>
            </div>
          </div>

          <div class="profile-card-ctr">
            <button class="profile-card__button button--blue js-message-btn">
              查看详情
            </button>
            <button
              class="profile-card__button button--orange"
              @click="loginOut"
            >
              注销登录
            </button>
          </div>
        </div>

        <div class="profile-card-message js-message">
          <form class="profile-card-form">
            <div class="profile-card-form__container">
              <textarea placeholder="Say something..."></textarea>
            </div>

            <div class="profile-card-form__bottom">
              <button
                class="profile-card__button button--blue js-message-close"
              >
                Send
              </button>

              <button
                class="profile-card__button button--gray js-message-close"
              >
                Cancel
              </button>
            </div>
          </form>

          <div class="profile-card__overlay js-message-close"></div>
        </div>
      </div>
    </div>

    <!-- 二维码弹框 -->
    <el-dialog title="打开手机二维码,扫码登录" :visible.sync="dialogVisible">
      <div>
        <img :src="qrImg" alt="" />
      </div>
    </el-dialog>

    <cmbottom />
  </div>
</template>


<script>
import cmheader from "../components/CMHeader.vue";
import cmbottom from "../components/CMBottom.vue";
import anime from "animejs/lib/anime.es.js";
import { login } from "@/api";
import { loginStatus } from "@/api";
import { loginRefresh } from "@/api";
import { logout } from "@/api";
import { userLevel } from "@/api";
import { getUserMsg } from "@/api";
import { getQRKey } from "@/api";
import { QRCreate } from "@/api";
import { QRCheck } from "@/api";

import axios from "axios";

import qs from "qs";
import { Dialog } from "vant";
import { Notify } from "vant";

export default {
  data() {
    return {
      phone: "",
      password: "",
      userId: null,
      fixedCount: 100,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6",
      },
      dialogVisible: false,
      qrImg: "",
      //登陆方式 默认为1账号密码登录  2为验证码登录
      loginType: 1,
    };
  },
  computed: {
    refreshLogin() {
      return this.$store.state.isLogin;
    },
    refreshProfileInfo() {
      return this.$store.state.profileInfo;
    },
    refreshuserLevelInfo() {
      return this.$store.state.userLevelInfo;
    },
  },
  components: {
    cmheader,
    cmbottom,
  },
  methods: {
    loginBtn() {
      if (this.phone && this.password) {
        login(this.phone, this.password)
          .then((res) => {
            console.log("登陆成功");
            console.log(res);
            if (res.data.cookie) {
              this.afterLogin(res.data.cookie);
            }
          })
          .catch((err) => {
            console.log("登陆失败");
            console.log(err);

            const h = this.$createElement;
            this.$notify({
              title: "登录失败",
              message: h("i", { style: "color: teal" }, "登录失败"),
            });
          });
      } else {
        const h = this.$createElement;
        this.$notify({
          title: "登录失败",
          message: h("i", { style: "color: teal" }, "账号或密码为空"),
        });
      }
    },
    loginOut() {
      let cookie = this.$store.state.cookie;
      logout(cookie).then((res) => {
        console.log("loginOut");
        console.log(res);

        loginRefresh(cookie).then((res) => {
          console.log("loginRefresh");
          console.log(res);
          // this.$store.commit("setIsLogin", false);
          this.$store.commit("setCookie", "");
          this.$store.commit("setToken", "");
          this.$store.commit("setIsPlay", false);
          this.$store.commit("setPlayingSong", {});
        });
      });
    },
    async qrLogin1() {
      this.dialogVisible = true;

      ////二维码登录第一步
      let timersTamp = Date.now();
      let key;
      console.log(timersTamp);
      getQRKey(timersTamp)
        .then((res) => {
          console.log("qr/key 成功");
          console.log(res);
          key = res.data.data.unikey;
        })
        .catch((err) => {
          console.log("qr/key 获取失败");
          console.log(err);
        });

      //二维码登录第二步
      QRCreate(key, true, timersTamp)
        .then((res) => {
          console.log("qrCreate 成功");
          console.log(res);
          this.qrImg = res.data.data.qrimg;
        })
        .catch((err) => {
          console.log("qrCreate 失败");
          console.log(err);
        });

      //二维码登录第三步
      let timer = setInterval(async () => {
        QRCheck(key, timersTamp)
          .then((res) => {
            console.log("QRCheck 成功");
            console.log(res);
            console.log("当前状态: " + res.data.message);
            if (res.data.code == 800) {
              alert("二维码已过期，请重新获取");
              clearInterval(timer);
              this.dialogVisible = false;
            }
            if (res.data.code == 803) {
              clearInterval(timer);
              this.dialogVisible = false;

              this.$store.commit("setProfileInfo", res.data.profile);
              //    console.log(res.data.token)
              this.$store.commit("setToken", JSON.stringify(res.data.token));
              this.$store.commit("setCookie", res.data.cookie);
              this.userId = res.data.profile.userId;

              loginStatus(this.$store.state.cookie).then((res) => {
                console.log("二维码扫码成功，获取登录状态");
                console.log(res);
              });
            }
          })
          .catch((err) => {
            console.log("QRCheck 失败");
            console.log(err);
          });
      }, 3000);
    },

    async qrLogin2() {
      let timer;
      let timestamp = Date.now();
      const res = await getQRKey(timestamp);
      const key = res.data.data.unikey;
      const res2 = await QRCreate(key, true, timestamp);
      this.qrImg = res2.data.data.qrimg;
      this.dialogVisible = true;

      timer = setInterval(async () => {
        const statusRes = await QRCheck(key, timestamp);
        console.log(statusRes);
        if (statusRes.code === 800) {
          alert("二维码已过期,请重新获取");
          clearInterval(timer);
          this.dialogVisible = false;
        }
        if (statusRes.code === 800) {
          // alert('二维码已过期,请重新获取')
          // clearInterval(timer)
          this.dialogVisible = false;
        }
        if (statusRes.code === 803) {
          // 这一步会返回cookie
          clearInterval(timer);
          alert("授权登录成功");
          this.dialogVisible = false;
          // await loginStatus()
        }
      }, 3000);
    },

    qrLogin() {
      let that = this;
      async function checkStatus(key) {
        const res = await axios({
          url: `http://175.24.198.84:3000/login/qr/check?key=${key}&timerstamp=${Date.now()}`,
          withCredentials: true, //关键
        });
        return res.data;
      }

      async function login() {
        let timer;
        let timestamp = Date.now();
        // getLoginStatus()
        const res = await axios({
          url: `http://175.24.198.84:3000/login/qr/key?timerstamp=${Date.now()}`,
          withCredentials: true, //关键
        });
        const key = res.data.data.unikey;
        const res2 = await axios({
          url: `http://175.24.198.84:3000/login/qr/create?key=${key}&qrimg=true&timerstamp=${Date.now()}`,
          withCredentials: true, //关键
        });
        that.qrImg = res2.data.data.qrimg;
        that.dialogVisible = true;

        timer = setInterval(async () => {
          const statusRes = await checkStatus(key);
          console.log(statusRes);
          if (statusRes.code === 800) {
            alert("二维码已过期,请重新获取");
            that.dialogVisible = false;
            clearInterval(timer);
          }
          if (statusRes.code === 803) {
            // 这一步会返回cookie
            clearInterval(timer);
            that.dialogVisible = false;
            that.afterLogin(statusRes.cookie);
          }
        }, 3000);
      }
      login();
    },

    afterLogin(cookie) {
      //在登录成功后调用这个方法，这个方法中同步一些不同的登录方式返回的不同的登录信息
      this.$store.commit("setCookie", cookie);
      //  刷新登录状态
      loginStatus(cookie).then((res) => {
        console.log("loginStatus 刷新登录信息");
        console.log(res);
        if (res.data.data.profile) {
          getUserMsg(res.data.data.profile.userId).then((res) => {
            console.log("获取用户详情信息成功---");
            console.log(res);
            this.$store.commit("setProfileInfo", res.data.profile);
            console.log(this.$store.state);
          });
          userLevel(cookie).then((res) => {
            console.log("获取用户详细等级信息成功");
            console.log(res);
            this.$store.commit("setUserLevelInfo", res.data.data);
          });
        }
      });
    },

    // 控制登录页面下划线动画
    emailFous() {
      var current = null;
      if (current) current.pause();
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: "easeOutQuart",
        },
        strokeDasharray: {
          value: "240 1386",
          duration: 700,
          easing: "easeOutQuart",
        },
      });
    },
    pswFous() {
      console.log("111");
      var current = null;
      if (current) current.pause();
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: "easeOutQuart",
        },
        strokeDasharray: {
          value: "240 1386",
          duration: 700,
          easing: "easeOutQuart",
        },
      });
    },
    loginFous() {
      var current = null;
      if (current) current.pause();
      current = anime({
        targets: "path",
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: "easeOutQuart",
        },
        strokeDasharray: {
          value: "530 1386",
          duration: 700,
          easing: "easeOutQuart",
        },
      });
    },
  },
};
</script>

<style scoped lang='less'>
//弹出框样式
.el-dialog__wrapper ::v-deep .el-dialog {
  width: 30%;
  text-align: center;
}
::v-deep .el-dialog__headerbtn {
  display: none;
}

@media screen and(max-width:750px) {
  .el-dialog__wrapper ::v-deep .el-dialog {
    width: 80%;
  }
  #profiles {
    padding-bottom: 100px;
  }
}
//登陆样式
@import url("https://rsms.me/inter/inter-ui.css");
::selection {
  background: #2d2f36;
}
::-webkit-selection {
  background: #2d2f36;
}
::-moz-selection {
  background: #2d2f36;
}
body {
  background: white;
  font-family: "Inter UI", sans-serif;
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

.container {
  display: flex;
  height: 320px;
  margin: 0 auto;
  width: 640px;
}
svg {
  left: 0;
}

.left {
  background: white;
  height: calc(100% - 40px);
  top: 20px;
  position: relative;
  width: 50%;
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
  background: #474a59;
  box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
  color: #f1f1f2;
  position: relative;
  width: 50%;
}
svg {
  position: absolute;
  width: 320px;
}
path {
  fill: none;
  stroke: url(#linearGradient);
  stroke-width: 4;
  stroke-dasharray: 240 1386;
}
.form {
  margin: 40px;
  position: absolute;
}
label {
  color: #c2c2c5;
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
  color: #fff;
  margin-top: 35px;
  transition: color 300ms;
  cursor: pointer;
  padding: 10px;
  height: initial;
  border-radius: 80px;
}
#submit:focus {
  color: #f2f2f2;
}
#submit:active {
  color: #d0d0d2;
}
.qr-login {
  margin-left: 40px;
  cursor: pointer;
}

@media (max-width: 750px) {
  .login {
    margin-top: 40px;
  }

  .page {
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }

  .container {
    flex-direction: column;
    height: 630px;
    width: 320px;
  }

  .left {
    height: 100%;
    left: 20px;
    width: calc(100% - 40px);
    max-height: 270px;
  }
  .eula {
    margin: 20px;
  }
  .qr-login {
    font-size: 16px;
    margin-left: 0;
  }
  .right {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    max-height: 350px;
  }
}

// 个人信息展示样式
// @import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700&subset=latin-ext');

html {
  position: relative;
  overflow-x: hidden !important;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "Quicksand", sans-serif;
  color: #324e63;
}

a,
a:hover {
  text-decoration: none;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.wrapper {
  width: 100%;
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding: 50px 20px;
  padding-top: 100px;
  display: flex;
  background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);

  display: flex;
  background-image: linear-gradient(-20deg, #ff2846 0%, #6944ff 100%);

  @media screen and (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding-top: 100px;
  }
}

.profile-card {
  width: 100%;
  min-height: 460px;
  margin: auto;
  box-shadow: 0px 8px 60px -10px rgba(13, 28, 39, 0.6);
  background: #fff;
  border-radius: 12px;
  max-width: 700px;
  position: relative;

  &.active {
    .profile-card__cnt {
      filter: blur(6px);
    }

    .profile-card-message,
    .profile-card__overlay {
      opacity: 1;
      pointer-events: auto;
      transition-delay: 0.1s;
    }

    .profile-card-form {
      transform: none;
      transition-delay: 0.1s;
    }
  }

  &__img {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    transform: translateY(-50%);
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    z-index: 4;
    box-shadow: 0px 5px 50px 0px rgb(108, 68, 252),
      0px 0px 0px 7px rgba(107, 74, 255, 0.5);

    @media screen and (max-width: 576px) {
      width: 120px;
      height: 120px;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  &__cnt {
    margin-top: -35px;
    text-align: center;
    padding: 0 20px;
    padding-bottom: 40px;
    transition: all 0.3s;
  }

  &__name {
    font-weight: 700;
    font-size: 24px;
    color: #6944ff;
    margin-bottom: 15px;
  }

  &__txt {
    font-size: 18px;
    font-weight: 500;
    color: #324e63;
    margin-bottom: 15px;

    strong {
      //color: #ff2846;
      font-weight: 700;
    }
  }

  &-loc {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 600;

    &__icon {
      display: inline-flex;
      font-size: 27px;
      margin-right: 10px;
    }
  }

  &-inf {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 35px;

    &__item {
      padding: 10px 35px;
      min-width: 150px;

      @media screen and (max-width: 768px) {
        padding: 10px 20px;
        min-width: 100px;
      }

      @media screen and (max-width: 375px) {
        padding: 10px 20px;
        min-width: 85px;
      }
    }

    &__title {
      font-weight: 700;
      font-size: 27px;
      //color: #6944ff;
      color: #324e63;
    }

    &__txt {
      font-weight: 500;
      margin-top: 7px;
    }
  }

  &-social {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    &__item {
      display: inline-flex;
      width: 55px;
      height: 55px;
      margin: 15px;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      color: #fff;
      background: #405de6;
      box-shadow: 0px 7px 30px rgba(43, 98, 169, 0.5);
      position: relative;
      font-size: 21px;
      flex-shrink: 0;
      transition: all 0.3s;

      @media screen and (max-width: 768px) {
        width: 50px;
        height: 50px;
        margin: 10px;
      }

      @media screen and (min-width: 768px) {
        &:hover {
          transform: scale(1.2);
        }
      }

      &.facebook {
        background: linear-gradient(45deg, #3b5998, #0078d7);
        box-shadow: 0px 4px 30px rgba(43, 98, 169, 0.5);
      }

      &.twitter {
        background: linear-gradient(45deg, #1da1f2, #0e71c8);
        box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.7);
      }

      &.instagram {
        background: linear-gradient(
          45deg,
          #405de6,
          #5851db,
          #833ab4,
          #c13584,
          #e1306c,
          #fd1d1d
        );
        box-shadow: 0px 4px 30px rgba(120, 64, 190, 0.6);
      }

      &.behance {
        background: linear-gradient(45deg, #1769ff, #213fca);
        box-shadow: 0px 4px 30px rgba(27, 86, 231, 0.7);
      }

      &.github {
        background: linear-gradient(45deg, #333333, #626b73);
        box-shadow: 0px 4px 30px rgba(63, 65, 67, 0.6);
      }

      &.codepen {
        background: linear-gradient(45deg, #324e63, #414447);
        box-shadow: 0px 4px 30px rgba(55, 75, 90, 0.6);
      }

      &.link {
        background: linear-gradient(45deg, #d5135a, #f05924);
        box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.6);
      }
    }

    .icon-font {
      display: inline-flex;
    }
  }

  &-ctr {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    @media screen and (max-width: 576px) {
      flex-wrap: wrap;
    }
  }

  &__button {
    background: none;
    border: none;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    font-size: 19px;
    margin: 15px 35px;
    padding: 15px 40px;
    min-width: 201px;
    border-radius: 50px;
    min-height: 55px;
    color: #fff;
    cursor: pointer;
    backface-visibility: hidden;
    transition: all 0.3s;

    @media screen and (max-width: 768px) {
      min-width: 170px;
      margin: 15px 25px;
    }

    @media screen and (max-width: 576px) {
      min-width: inherit;
      margin: 0;
      margin-bottom: 16px;
      width: 100%;
      max-width: 300px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &:focus {
      outline: none !important;
    }

    @media screen and (min-width: 768px) {
      &:hover {
        transform: translateY(-5px);
      }
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &.button--blue {
      background: linear-gradient(45deg, #1da1f2, #0e71c8);
      box-shadow: 0px 4px 30px rgba(19, 127, 212, 0.4);

      &:hover {
        box-shadow: 0px 7px 30px rgba(19, 127, 212, 0.75);
      }
    }

    &.button--orange {
      background: linear-gradient(45deg, #d5135a, #f05924);
      box-shadow: 0px 4px 30px rgba(223, 45, 70, 0.35);

      &:hover {
        box-shadow: 0px 7px 30px rgba(223, 45, 70, 0.75);
      }
    }

    &.button--gray {
      box-shadow: none;
      background: #dcdcdc;
      color: #142029;
    }
  }

  &-message {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 130px;
    padding-bottom: 100px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
  }

  &-form {
    box-shadow: 0 4px 30px rgba(15, 22, 56, 0.35);
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    height: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 35px;
    transform: scale(0.8);
    position: relative;
    z-index: 3;
    transition: all 0.3s;

    @media screen and (max-width: 768px) {
      max-width: 90%;
      height: auto;
    }

    @media screen and (max-width: 576px) {
      padding: 20px;
    }

    &__bottom {
      justify-content: space-between;
      display: flex;

      @media screen and (max-width: 576px) {
        flex-wrap: wrap;
      }
    }
  }

  textarea {
    width: 100%;
    resize: none;
    height: 210px;
    margin-bottom: 20px;
    border: 2px solid #dcdcdc;
    border-radius: 10px;
    padding: 15px 20px;
    color: #324e63;
    font-weight: 500;
    font-family: "Quicksand", sans-serif;
    outline: none;
    transition: all 0.3s;

    &:focus {
      outline: none;
      border-color: #8a979e;
    }
  }

  &__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    opacity: 0;
    background: rgba(22, 33, 72, 0.35);
    border-radius: 12px;
    transition: all 0.3s;
  }
}
</style>

