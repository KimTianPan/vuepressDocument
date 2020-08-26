/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "C:\\Users\\kim\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-31d75ae6",
    path: "/React/reactBase.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-31d75ae6").then(next)
    },
  },
  {
    name: "v-a641afb0",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a641afb0").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-6648a1b5",
    path: "/React/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6648a1b5").then(next)
    },
  },
  {
    path: "/React/index.html",
    redirect: "/React/"
  },
  {
    name: "v-7e56ceeb",
    path: "/home/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7e56ceeb").then(next)
    },
  },
  {
    path: "/home/index.html",
    redirect: "/home/"
  },
  {
    name: "v-8a45ce3a",
    path: "/pages/html/html2.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-8a45ce3a").then(next)
    },
  },
  {
    name: "v-a436d7da",
    path: "/pages/html/html.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a436d7da").then(next)
    },
  },
  {
    name: "v-428c3880",
    path: "/home/vuepress.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-428c3880").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]