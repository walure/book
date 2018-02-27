<template>
<Page name="音乐" nav-group="music">

<div class="music" slot="content">
333

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<mu-text-field hintText="提示文字" title="1232"/>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
666
<br><br><br><br><br><br><br><br><br><br><br><br><br><br>

</div>

</Page>
</template>

<script>
import Page from '../../components/page/page'
import {a,b} from '../../components/index'
export default {

components: {
Page
  },
  data () {
    return {
    }
  },
  mounted () {
	let aa=new a(1,2);
	console.log(aa.x,aa.y);
	aa.set(1).then(type=>{
		console.log(22)
		}).then(()=>{
		console.log(333)
		}).catch(function(error) {
	  // 处理 getJSON 和 前一个回调函数运行时发生的错误
	  console.log('发生错误！', error);
	});
	aa.cc();
  },
  methods:{
	
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="less">
	.music{width:100%; background:#eee}
</style>
