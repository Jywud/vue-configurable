<template>
	<div id="recommend">
		<swiper :list="list" auto dots-position="center" style="width:100%;margin:0 auto;"></swiper>
	</div>
</template>
<script>
	const baseList = [{
	    img: 'https://static.vux.li/demo/1.jpg'
	  }, {    
	    img: 'https://static.vux.li/demo/2.jpg'
	  }, {    
	    img: 'https://static.vux.li/demo/3.jpg'
	  }];
	import {Swiper} from 'vux'
	export default {
		name: 'recommend',
		mounted() {
			
		},
		data () {
		    return {
		      list: baseList
		    }
		},
		components: {
			Swiper
		}
	}
</script>