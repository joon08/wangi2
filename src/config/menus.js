import Home from '../components/Home'
import Category from '../components/Category'
import Deserve from '../components/Deserve'
import ShoppingCard from '../components/ShoppingCard'
import Personal from '../components/Personal'

export default [
  {
    title: '首页',
    icon: 'iconfont icon-shouye',
    path: '/home',
    component: Home
  },
  {
    title: '分类',
    icon: 'iconfont icon-leimupinleifenleileibie',
    path: '/category',
    component: Category
  },
  {
    title: '值得买',
    icon: 'iconfont icon-fenlei',
    path: '/deserve',
    component: Deserve
  },
  {
    title: '购物车',
    icon: 'iconfont icon-gouwuche2',
    path: '/shoppingcard',
    component: ShoppingCard
  },
  {
    title: '个人',
    icon: 'iconfont icon-personal',
    path: '/personal',
    component: Personal
  }
]
