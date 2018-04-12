import Vue from 'vue'
import Router from 'vue-router'
import Home from './../pages/Home.vue'
import hello from './../components/hello'
import demo from './../pages/demo'
import demoPage from './../pages/DemoPage.vue'
import dialogList from './../pages/DialogList.vue'
import jsonp from '@/components/jsonp.vue'
import scrollView from '@/pages/scrollView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/hello', component: hello},
    {path: '/demo', component: demo},
    {path: '/demoPage', component: demoPage},
    {path: '/dialogList', component: dialogList},
    {path: '/jsonp', component: jsonp},
    {path: '/scrollView', component: scrollView}
  ]
})
