// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './pages/Home.vue'
import hello from './components/hello'
import demo from './pages/demo'
import demoPage from './pages/DemoPage.vue'
import Calendar from './pages/Calendar.vue'
import 'vue-event-calendar/dist/style.css' //  1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'en'}) //  可以设置语言，支持中文和英文
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/hello', component: hello},
  {path: '/demo', component: demo},
  {path: '/demoPage', component: demoPage},
  {path: '/calendar', component: Calendar}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
