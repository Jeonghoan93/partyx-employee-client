import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("src/Layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("src/Pages/StartPage/StartPage.vue"),
        meta: {},
      },
    ],
  },
];

export default routes;
