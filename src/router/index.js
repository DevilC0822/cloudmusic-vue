import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[

    ],
  },
  {
    path:'/home',
    redirect:'/'
  },
  {
    path: '/todayRecommend',
    name: 'todayRecommend',
    component: () => import('@/views/NavItem/TodayRecommend.vue'),

  },
  {
    path: '/privateFM',
    name: 'privateFM',
    component: () => import('@/views/NavItem/PrivateFM.vue')
  },
  {
    path: '/songList',
    name: 'songList',
    component: () => import('@/views/NavItem/SongList.vue')
  },
  {
    path: '/songsRanking',
    name: 'songsRanking',
    component: () => import('@/views/NavItem/SongsRanking.vue')
  },
  {
    path: '/tools',
    name: 'Tools',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Tools.vue')
  },
  {
    path: '/profiles',
    name: 'Profiles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/Profiles.vue')
  },
  {
    path: '/searchView',
    name: 'SearchView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/songPlay',
    name: 'songPlay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/songPlay.vue'),
    // meta:{
    //   keepAlive:true
    // }

  },
  {
    path: '/songs-list',
    name: 'songs-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/SongsList.vue')

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



export default router
