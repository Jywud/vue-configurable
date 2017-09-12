<template>
	<div id="login">		
		<img src="static/image/logo.png">
		<div class="bs" ref="bs">
			<div class="bs-w">
				<div>11</div>
				<div>22</div>
				<div>33</div>
				<div>44</div>
				<div>55</div>
				<div>66</div>
				<div>77</div>
				<div>88</div>
			</div>		
		</div>
		<input v-focus>
		<div @click="ok">okokok</div>
		login
	</div>
</template>
<script>
	// import hsBus from 'src/common/js/hsBusiness'
	import BScroll from 'better-scroll'
	export default {
		name: 'login',
		mounted() {			
			this.$nextTick( ()=> {
				new BScroll(this.$refs.bs, {						
					scrollX: true,
					eventPassthrough: 'vertical'
				});
			});
		},
		data() {
			return {
				count: 0
			}
		},
		methods: {
			ok() {
				// hsBus.callback();
			}
		}
	}
</script>
<style lang="less">
	#login{
		.bs{
			margin-left: 100px;
			overflow: hidden;			
			border: 1px solid;
			width: 200px;
			height: 140px;
			.bs-w{
				width: 320px;
				display: flex;
				div{					
					height: 40px;	
					width: 	40px;
					flex: 0 0 40px;
				}
			}
		}
	}
</style>