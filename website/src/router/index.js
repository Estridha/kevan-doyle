import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import PhotoView from '../views/photo/PhotoView.vue'
import FilmView from '../views/FilmView.vue'
import CommercialView from '../views/photo/commercial/CommercialView.vue'
import PrintsView from '../views/photo/prints/PrintsView.vue'
import MessageSentView from '../views/MessageSentView.vue'
import ProjectView from '../views/photo/ProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
   {
    path: '/film',
    name: 'film',
    component: FilmView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/contact/success',
    name: 'MessageSentView',
    component: MessageSentView
  },
  {
    path: '/photo',
    name: 'photo',
    component: PhotoView,
  },
  {
    path: '/photo/commercial',
    name: 'commercial',
    component: CommercialView,
  },
  {
    path: '/photo/prints',
    name: 'prints',
    component: PrintsView,
  },
  {
    path: '/photo/prints/:id',
    name: 'project',
    component: ProjectView,
  },
  {
    path: '/photo/commercial/:id',
    name: 'project',
    component: ProjectView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
