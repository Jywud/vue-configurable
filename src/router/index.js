/*vue router by wujiayu 官网地址https://router.vuejs.org/zh-cn/index.html */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/*function getComponent(url, groupName) {
    return  r => require.ensure([], () => r(require(url)), groupName || 'default');
}*/


/*
  1.首页可以考虑单独分包
  2.添加路由请补全name属性 
  3.如果在路由离开后想保持页面状态，可以使用 meta: { keepAlive: true }, 默认为false
  4.默认分配为default包
*/
const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',  
        // meta: { keepAlive: true },      
        component: r => require.ensure([], () => r(require('src/views/Home')), 'default'),
        children: [
        {
            path: '',
            name: 'recommend',            
            component: r => require.ensure([], () => r(require('src/views/home/Recommend')), 'default')
        }, {
            path: 'asset',
            name: 'asset',            
            component: r => require.ensure([], () => r(require('src/views/home/Asset')), 'default')
        }, {
            path: 'mine',
            name: 'mine',            
            component: r => require.ensure([], () => r(require('src/views/home/Mine')), 'default')
        }]
    }, 
    {
        path: '/hello',
        name: 'hello',
        component: r => require.ensure([], () => r(require('src/views/Hello')), 'default')
    },    
    {
        path: '/login',
        name: 'login',        
        component: r => require.ensure([], () => r(require('src/views/Login')), 'default')
    },    
    {
        path: '*',
        name: 'notFindPage',        
        component: r => require.ensure([], () => r(require('src/views/NotFindPage')), 'default')
    }
];

let router = new Router({
    routes
});

/**
* 路由拦截
*next()方法必须调用
*/
router.beforeEach((to, from, next) => {    
    next();
});

export default router;