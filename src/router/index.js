import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Chris Bailey - New Age Pianist' }
  },
  {
    path: '/album',
    name: 'album',
    component: () => import('../views/AlbumView.vue'),
    meta: { title: 'Album | Chris Bailey Piano' }
  },
  {
    path: '/listen',
    name: 'listen',
    component: () => import('../views/ListenView.vue'),
    meta: { title: 'Listen | Chris Bailey Piano' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About | Chris Bailey Piano' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact | Chris Bailey Piano' }
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue'),
    meta: { title: 'Privacy Policy | Chris Bailey Piano' }
  },
  {
    path: '/sitemap',
    name: 'sitemap',
    component: () => import('../views/SitemapView.vue'),
    meta: { title: 'Sitemap | Chris Bailey Piano' }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Update Page Titles
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Chris Bailey Piano';
  next();
});

export default router
