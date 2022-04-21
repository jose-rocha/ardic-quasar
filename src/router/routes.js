import Home from 'pages/IndexPage.vue';
import Solutions from 'pages/Solutions.vue';
import LGPD from 'pages/LGPD.vue';
import Contact from 'pages/Contact.vue';
import BlogPage from 'pages/BlogPage.vue';

import TabsLayout from 'layouts/TabsLayout.vue';
import Tabs from 'pages/TabsIndex.vue';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: Home },
      { path: '/solutions', name: 'solutions', component: Solutions },
      { path: '/lgpd', name: 'lgpd', component: LGPD },
      { path: '/contact', name: 'contact', component: Contact },
      { path: '/blog', name: 'blog', component: BlogPage },
    ],
  },
  {
    path: '/Tabs',
    component: TabsLayout,
    children: [
      { path: '/tabs', name: 'tabs', component: Tabs },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
