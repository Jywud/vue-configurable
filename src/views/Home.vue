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
	import compConfig from 'src/componentsConfig'
	let ButtomBar = compConfig[current_client]['ButtomBar'];
	export default {
		name: 'home',
		data() {
			return {
				
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