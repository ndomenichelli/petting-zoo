import { createRouter, createWebHistory } from "vue-router";
import StartScreen from "../views/StartScreen.vue";
import Animals from "../views/Animals.vue";
import AnimalDetails from "../views/AnimalDetails.vue";
import Admin from "../views/Admin.vue";

const routes = [
  {
    path: "/",
    name: "StartScreen",
    component: StartScreen,
  },
  {
    path: "/events",
    name: "Animals",
    component: Animals,
  },
  {
    path: "/event/:id",
    name: "AnimalDetails",
    props: true,
    component: AnimalDetails,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
