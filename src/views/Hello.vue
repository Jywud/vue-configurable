<style lang="less">
#hello{
  .text{
    color: red;
  }
}
</style>
<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <swiper :list="demo01_list" auto dots-position="center" style="width:80%;margin:0 auto;"></swiper>
    <load-more tip="正在加载"></load-more>
    <marquee>
      <marquee-item v-for="i in 5" :key="i">hello world {{i}}</marquee-item>
    </marquee>
    <div class="text" @click="toLogin">去登陆</div>
    <button @click="setCount">addCount</button>
    <div>vuex-count: {{getCount}}</div>    
    <hr>    
    <foo></foo>
    <hoo></hoo>
  </div>
</template>

<script>
// import hsBus from 'src/common/js/hsBusiness'
import utils from 'src/common/js/utils'
import _ from 'underscore'
 
import compConfig from 'src/componentsConfig'
var Foo = compConfig[current_client]['Foo'];
var Hoo = compConfig[current_client]['Hoo'];

// import Foo from 'src/components/Foo/default'

import { LoadMore, Marquee, MarqueeItem, Swiper } from 'vux'

const baseList = [{    
    img: 'https://static.vux.li/demo/1.jpg'
  }, {    
    img: 'https://static.vux.li/demo/2.jpg'
  }, {    
    img: 'https://static.vux.li/demo/3.jpg'
  }];
export default {
  name: 'hello',
  mounted() {
    
  },
  data () {
    return {
      demo01_list: baseList,
      msg: '15298781234'
    }
  },
  methods: {
    toLogin () {
      /*hsBus.callback = () =>{
        alert(222);        
      }*/
      this.$router.push("/login");
    },
    setCount() {
      this.$http.getSysConfig({config_no: "49002"}).then( res => {
        console.log(res.data);
      }).catch(res => {
        console.log(res);
      });
      // var a = utils.uuidMaker(10);
      // console.log(a);
      this.$store.dispatch("setCount", 300);
      _.each([1,2,3], function(i) {
        console.log(i);
      });
      /*this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD',
        value: '2017-05-21',
        onConfirm (val) {
          console.log('plugin confirm', val)
        },
        onShow () {
          console.log('plugin show')
        },
        onHide () {
          console.log('plugin hide')
        }
      });*/
    }
  },
  watch: {

  },
  computed: {
    getCount() {
      return this.$store.state.count;
    }
  },
  components: {
    Foo,
    Hoo,
    LoadMore,
    Marquee,
    MarqueeItem,
    Swiper
  }
}
</script>