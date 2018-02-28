<template>
  <div class="page" >
		<div class="content">
			<slot  name="content"></slot>
		</div>
	
	
	 
	 <footer>
		<slot name="footer"></slot>
	</footer>
	</div>
</template>

<script>

export default {
  name: 'page',
  components:{
  },
  props:[
	'foo',
	'name',
	'nav-group'
  ],
  data(){
	return {
		
	}
  },
  created(){
	this.$store.commit('setNav',{title:this.navGroup});
	document.title=this.name
  },
  mounted(){

	this.$emit('update:foo', 2);
  },
  watch: {

  },
}
</script>

<style scope="less">


</style>
