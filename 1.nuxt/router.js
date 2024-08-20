import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c08f20e2 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _28c78941 = () => interopDefault(import('..\\pages\\contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _811f6b58 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _8f11ff00 = () => interopDefault(import('..\\pages\\situation.vue' /* webpackChunkName: "pages/situation" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _c08f20e2,
    name: "about___en"
  }, {
    path: "/contacts",
    component: _28c78941,
    name: "contacts___en"
  }, {
    path: "/kz",
    component: _811f6b58,
    name: "index___kz"
  }, {
    path: "/ru",
    component: _811f6b58,
    name: "index___ru"
  }, {
    path: "/situation",
    component: _8f11ff00,
    name: "situation___en"
  }, {
    path: "/kz/about",
    component: _c08f20e2,
    name: "about___kz"
  }, {
    path: "/kz/contacts",
    component: _28c78941,
    name: "contacts___kz"
  }, {
    path: "/kz/situation",
    component: _8f11ff00,
    name: "situation___kz"
  }, {
    path: "/ru/about",
    component: _c08f20e2,
    name: "about___ru"
  }, {
    path: "/ru/contacts",
    component: _28c78941,
    name: "contacts___ru"
  }, {
    path: "/ru/situation",
    component: _8f11ff00,
    name: "situation___ru"
  }, {
    path: "/",
    component: _811f6b58,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
