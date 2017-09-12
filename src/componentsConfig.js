/*组件透传,可配置已有组件类型*/
const config = {	
	hs: {
		ButtomBar: require('./components/ButtomBar/default.vue'),
		Foo: require('./components/Foo/type1.vue'),
		Hoo: require('./components/Hoo/default.vue')
	},
	hsTest: {
		Foo: require('./components/Foo/default.vue'),
		Hoo: require('./components/Hoo/default.vue')
	}
}

export default config