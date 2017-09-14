import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
// const FastClick = require('fastclick')

/*初始化vux插件*/
import './common/js/vuxInit'

/*全局过滤器*/
import './common/js/filter'
/*全局指令*/
import './common/js/directive'

/*导入第三方库*/
import $ from 'n-zepto'
import './common/js/iconfont'

/*网络请求*/
import api from './common/js/api'

/*导入基础样式*/
import './common/style/base.less'

/*http请求注入vue实例*/
Vue.prototype.$http = api;
Vue.config.productionTip = false;

// FastClick.attach(document.body)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
