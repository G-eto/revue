import App from "../App"

export default [{
    path: '/',
    component: App,
    children: [{
        path: 'devices',
        component: r => require.ensure([], () => r(require('../page/devices/Devices')), 'devices')
    }
        // ,{
        //     path: 'overview',
        //     component: r => require.ensure([], ()=> r(require('../page/overview')), 'overview')
        // },{
        //     path: 'config',
        //     component: r => require.ensure([], ()=> r(require('../page/config')), 'config')
        // },{
        //     path: 'other',
        //     component: r => require.ensure([], ()=> r(require('../page/other')), 'other')
        // },{
        //     path: 'user',
        //     component: r => require.ensure([], ()=> r(require('../page/user')), 'user')
        // }
    ]
}]
