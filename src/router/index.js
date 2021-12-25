import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/pages/Home.vue";
import About from "@/components/pages/About.vue";
import Services from "@/components/pages/Services.vue";
import Contact from "@/components/pages/ContactUs.vue";
import NotFound from "@/components/pages/NotFound.vue";
import Faq from "@/components/pages/Faq.vue";
import Tnc from "@/components/pages/Tnc.vue";

 const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/tnc",
    name: "tnc",
    component: Tnc,
  },
  {
    path: "/faq",
    name: "faq",
    component: Faq,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
 ];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return document.querySelector(to.hash).scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0,0);
    }
  }
});

export default router;