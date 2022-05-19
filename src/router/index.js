import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  {
    path: '',
    component: () => import('@/pages/Login/Index.vue'),
    meta: {
      title: '登录'
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes,
});

export default router;
