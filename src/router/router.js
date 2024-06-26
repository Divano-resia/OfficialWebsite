import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";

const routes=[
    {
        path:"/",
        component: () => import("@/pages/index.vue"),
    },
    {
        path:"/courseServices",
        component:()  => import("@/pages/courseServices.vue")
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/pages/404.vue')

    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/404'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
      },
  });
  export default router;