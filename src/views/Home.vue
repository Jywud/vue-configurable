<style lang="less">
	#home{
		
	}
</style>
<template>
	<div id="home">		
		<router-view></router-view>		
		<buttom-bar></buttom-bar>
	</div>
</template>
<script>	
	import componentCfg from 'src/componentsConfig'
	var ButtomBar = componentCfg[current_client]['ButtomBar'];	
	export default {
		name: 'home',
		data() {
			return {
				num: 0
			}
		},
		mounted() {			
			
		},
		methods: {
			
		},
		components: {
			ButtomBar
		}
	}
</script>