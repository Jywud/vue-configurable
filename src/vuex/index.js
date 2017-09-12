/*组件状态管理 by wujiayu 官网地址https://vuex.vuejs.org/zh-cn/ */
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		buttomBarActiveIndex: 0, //首页底部栏焦点索引
	    count: 10,
	    loadingShow: false
	},
	getters: {
		loadingShow: state => state.loadingShow,
    	getCount: state => state.count + 10
	},
	mutations: {
		setButtomBarActiveIndex(state, index) {
			state.buttomBarActiveIndex = index;
		},
		updateLoading(state, data) {
	        state.loadingShow = data;
	    },
	    setCount(state, num) {
	        state.count = num;
	    },
	    addCount(state) {
	        state.count ++;
	    },
	    clearCount(state) {
	        state.count = 0;
	    }
	},
	actions: {
		setButtomBarActiveIndex({commit}, data) {
			commit("setButtomBarActiveIndex", data);
		},
		updateLoading({commit}, data) {
	        commit("updateLoading", data);
	    },
	    setCount({commit}, num) {
	        commit("setCount", num);
	    },
	    addCount({commit}) {
	        commit("addCount");
	    },
	    clearCount({commit}) {
	    	commit("clearCount");
	    }

	}
});
