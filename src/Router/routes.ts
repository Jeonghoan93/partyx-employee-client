import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("Layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("src/Pages/StartPage/StartPage.vue"),
        meta: {},
      },
      {
        path: "users",
        name: "UserManagement",
        component: () => import("Pages/UserManagement/UserList.vue"),
        meta: {},
      },
    ],
  },
];

export default routes;
