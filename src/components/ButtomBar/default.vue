<style lang="less">
@import "../../common/style/common.less";
	#buttom-bar{		
		position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        width: 100%;        
        background-color: #fff;
        border-top: 1px solid #ebebeb;
        z-index: 99;        
        .item{
        	flex: 1;
        	width: 100%;
        	padding: 5px 0 5px;
        	text-align: center;
        	color: #999;
        	&.active{
        		color: @primary-color;
        	}
        	.icon{
        		display: inline-block;
        		width: 24px;
        		height: 24px;
        	}
			.text{				
				font-size: 12px;
			}
        }
	}
</style>
<template>
	<div id="buttom-bar">
		<div class="item" v-for="(item, index) in list" :key="index" :class="{active: item.isActive}" @click="select(item, index)">
			<svg class="icon" aria-hidden="true">
                <use :xlink:href="item.class.normal" v-if="!item.isActive"></use>
                <use :xlink:href="item.class.active" v-if="item.isActive"></use>                
            </svg>
			<p class="text">{{item.name}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'ButtomBar',
		data() {
			return {
				list: [
				{
					name: '首页',
					isActive: false,
					url: '/home',
					class: {
	                    normal:'#icon-businessnormal',
	                    active:'#icon-businessactive'
	                }
				},
				{
					name: '资产',
					isActive: false,
					url: '/home/asset',
					class: {
	                    normal:'#icon-recordnormal',
                    	active:'#icon-recordactive'
	                }
				},
				{
					name: '我的',
					isActive: false,
					url: '/home/mine',
					class: {
	                    normal:'#icon-menormal',
                    	active:'#icon-meactive'
	                }
				}]
			}
		},
		mounted() {
			var activeIndex = this.$store.state.buttomBarActiveIndex;			
			this.list[activeIndex].isActive = true;
		},
		computed: {
		    /*activeIndex() {		    	
		      return this.$store.state.buttomBarActiveIndex;
		    }*/
		},
		methods: {
			select(item, index) {				
				if(item.isActive) {
					return;
				}

				this.list.forEach( data =>{
					data.isActive = false;
				});
				item.isActive = true;

				this.$store.dispatch('setButtomBarActiveIndex', index);
				this.$router.push(item.url);
			}
		}
	}
</script>