主要技术栈: `Vue2` `Vuex` `VueRouter` `Vant-ui` `Elememt-ui` `axios`

预览地址:<a href='http://175.24.198.84:3001/' target='_blank' rel="noopener">点我查看详情</a>

项目地址:https://github.com/DevilC0822/cloudmusic-vue

后端接口:https://github.com/Binaryify/NeteaseCloudMusicApi

首先界面使用了`Vant-ui` 和 `Elememt-ui` 分别作为移动端和PC端的ui框架, 其中夹杂着一些CodePen中找来的一些样式

### 主要实现的的一些功能:
1. 导航栏使用`VueRouter`的`histrot`模式进行页面的跳转。
2. 使用`axios`请求轮播图数据,在主页使用轮播图进行展示。
3. 实现了每日推荐歌单, 获取热门歌单, 歌曲、歌单排行榜等数据渲染页面。
4. 账号登录功能, 以及一些个人信息的展示。
5. 搜索功能, 添加了默认搜索关键词。
6. 模拟`HTML5`的`Audio`标签,使其可以在切换页面时不中断播放。并且添加了播放列表功能。

### 项目截图

![mob主页图](https://wordpress-1301688670.cos.ap-shanghai.myqcloud.com/img/vue2-music/Mob-home.png)

![mob登录页](https://wordpress-1301688670.cos.ap-shanghai.myqcloud.com/img/vue2-music/mob-login.png)

![mob个人信息页](https://wordpress-1301688670.cos.ap-shanghai.myqcloud.com/img/vue2-music/mob-profile.png)

![mob歌曲列表展示](https://wordpress-1301688670.cos.ap-shanghai.myqcloud.com/img/vue2-music/mob-list.png)

![PC主页图](https://wordpress-1301688670.cos.ap-shanghai.myqcloud.com/img/vue2-music/PC-home.png)
