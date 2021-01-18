// import App from "../App"
import DeviceDetail from "@/page/devices/DeviceDetail";
import Vue from "vue";
import VueRouter from "vue-router";
import overview from "@/page/ov/overview";

const routers = [
    // {
    // path: '/',
    // name: 'index',
    // component: App,
    // children: [
        {
        path: '/devices',
            component: DeviceDetail,
        // component: () => import('../page/devices/Devices'),
        children: [{
            path: ':id',
            name: 'detail',
            component: ()=> import('../page/devices/DeviceDetail')
        }]
    }, {
        path: '/overview',
        name: 'overview',
        component: overview
    }, {
        path: 'doc/',
        name: 'document',
        component: () => import('../page/doc/doc')
    }, {
        path: '/manage',
        name: 'manager',
        component: () => import('../page/manage/manage')
    }
]

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routers
})

export default router