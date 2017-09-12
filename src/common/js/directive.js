import Vue from 'vue'

/*输入框自动获得焦点*/
Vue.directive('focus', {  
  inserted: function (el) {   
    el.focus()
  }
})