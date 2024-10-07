import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      //路由到的地址(自定义)
      path: '/',
			//引入组件，组件HelloWorld.vue所在路径，HelloWorld.vue是需要路由的 vue组件
      component: () => import('@/components/HelloWorld.vue'),
			//组件名称
      name: 'Home'
    }
  ],
  history: createWebHistory()
})

export default router