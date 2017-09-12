<template>
  <div id="app">
    <!-- 主界面部分 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {  	
  	
  }
}
</script>

<style>
#app {  
	position: relative;
    height: 100%;
}
</style>
