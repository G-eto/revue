import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import axios from "axios";

import App from './App.vue'
import routers from './router/router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(VueRouter)
Vue.use(Element)

const router = new VueRouter({
    routers
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
