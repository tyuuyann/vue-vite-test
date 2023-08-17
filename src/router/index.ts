import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import LoginSuccess from '../views/LoginSuccess.vue'
import TopView from '../views/TopView.vue'
import TopMain from '../components/TopMain.vue'
import { VueElement } from 'vue'

const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/login_success',
      name: 'login_success',
      component: LoginSuccess
    },
    {
        path: '/topview',
        name: 'topview',
        component: TopView,
        children: [
          {
            path: 'top',
            name: 'top',
            component: TopMain
          },
        //   {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        //   },
        ]
      },
      {
        name: '*',
        path: '/',
        component: HelloWorld
      }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router