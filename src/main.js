import Vue from 'vue'
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import axios from "axios";

import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(Element)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
