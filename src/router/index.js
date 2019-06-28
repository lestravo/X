import Vue from 'vue'
import Router from 'vue-router'
import VueSession from 'vue-session'
import Viewer from 'v-viewer'
import VueCarousel from 'vue-carousel'
import VueImageLoader from '@kevindesousa/vue-image-loader'
import VueProgressiveImage from 'vue-progressive-image'
import VueCountdown from '@xkeshi/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);
Vue.use(VueProgressiveImage)
Vue.use(VueImageLoader)
Vue.use(VueCarousel)
Vue.use(Viewer)
Vue.use(VueSession)
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default,
      meta: {
        guest: true
      }
    },
    {
      path: '/product/:productSlug',
      name: 'product',
      component: require('@/components/ProductPage').default,
      meta: {
        guest: true
      }
    },
    {
      path: '/request-rent/:productSlug',
      name: 'requestRent',
      component: require('@/components/RequestRent').default,
      meta: {
        guest: true
      }
    },
    {
      path: '/buy/:productSlug',
      name: 'buy',
      component: require('@/components/BuyForm').default,
      meta: {
        guest: true
      }
    },
    {
      path: '/bantuan',
      name: 'help',
      component: require('@/components/Help').default,
      meta: {
        guest: true
      }
    },
    {
      path: '/thank-you-submitted',
      name: 'thank-you-submitted',
      component: require('@/components/ThankYouRent').default,
      meta: {
        guest: true
      }
    },
    {
      path: '/thank-you-buy',
      name: 'thank-you-buy',
      component: require('@/components/ThankYouBuy').default,
      meta: {
        guest: true
      }
    },
    // {
    //   path: '/chart',
    //   name: 'chart',
    //   component: require('@/components/Chart').default,
    //   meta: {
    //     guest: true
    //   }
    // },
    // {
    //   path: '/payment',
    //   name: 'payment',
    //   component: require('@/components/Payment').default,
    //   meta: {
    //     guest: true
    //   }
    // },
  ]
})

export default router
