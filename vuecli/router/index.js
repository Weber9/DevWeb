// 配置路由相关信息
import { createRouter, createWebHashHistory } from 'vue-router'

// 路由懒加载    打包文件变小 用户请求效率更高
const Home = () => import('../src/components/Home.vue')
const HomeNews = () => import('../src/components/HomeNews')
const HomeMessage = () => import('../src/components/HomeMessage')
const About = () => import('../src/components/About.vue')
const User = () => import('../src/components/User.vue')
const Profile = () => import('../src/components/Profile')

// 创建 VueRouter对象
const routes = [
  // 一个组件就是一个对象
  {
    path: '',
    // 重定向 将根路径重新定向到 /home 的路径下
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]
// eslint-disable-next-line new-cap
const router = new createRouter({
  // 配置路由和组件之间的应用关系
  // 将 路径方式 改变为 HTML5 方式  默认为 hash方式
  history: createWebHashHistory(),
  routes //  ES6 增强写法  相当于   routes : routes[...]
})

router.beforeEach(function (to, from, next) {
  // 从 from 到 to
  document.title = to.matched[0].meta.title
  next()
})

// 将router对象传入到Vue实例
export default router
