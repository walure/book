<template>
  <div id="app">
  <transition :name="transitionName">
		<router-view class="child-view"></router-view>
</transition>
	<nav>
		<navs></navs>
	</nav>	
  </div>
</template>

<script>
import navs from './components/nav.vue'
export default {
  name: 'app',
  components:{
	navs
  },
  watch:{
	'$route' (to, from) {
　　　　let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退

		console.log(isBack)
　　　　if(isBack) {
　　　　　　　　this.transitionName = 'slide-right'
　　　　} else {
　　　　　　    this.transitionName = 'slide-left'
　　　　}
　		this.$router.isBack = false
　　}
  },
  data(){
	return {
	navGroup:'',
	transitionName:'slide-left',
	}
  },

}
</script>

<style scope="less">
.child-view {
 position: absolute;
 width:100%;
 height:100%;
 overflow:hidden;
 overflow-y:auto;
 background:#fff;
 -webkit-overflow-scrolling: touch;
 overflow-scrolling: touch;
transition: all .2s ease;
}
.slide-left-enter,
.slide-right-leave-active {
//opacity: 0;
-webkit-transform: translate(100%, 0);
transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
//opacity: 0;
-webkit-transform: translate(-10%, 0);
transform: translate(-10% 0);
}
nav{position:fixed;bottom:0; width:100%}
</style>
