<template>
<Page name="首页" nav-group="movies">
	<div class="echarts" slot="content" >

	 <div id="main" style="width: 100%;height:300px;"></div>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	<br/>
	</div>
</Page>
</template>

<script>
import Page from '../../components/page/page'
import echarts  from 'echarts';

export default {
components: {
	Page
  },
  data () {
    return {
	
    }
  },
  mounted () {
	this.draw()
  },
  methods:{
	draw(){
		 var myChart = echarts.init(document.getElementById('main'));

      app.title = '堆叠柱状图';

		let option = {
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				data:['直接访问','邮件营销','联盟广告']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			 "axisLabel":{  
				axisLabel:false,
				interval: 0  
			}, 
			dataZoom:[
				 {
				type: 'inside',
				zoomLock: false,
				zoomOnMouseWheel: false,
				moveOnMouseMove:false,
				orient:'horizontal',
				moveOnMouseMove: true,
				 start: 0,
				end: 40,
				minSpan:100,
				},
			],
			xAxis : [
				{
					scale:1,
					type : 'category',
					data : ['周一','周二','周三','周四','周五','周六','周日','周八','周九','周十','周十一','周十二','周十三','周十四','周十五','周十六'],
					axisLabel:{
						interval:'0',
						max:1,
					
					}
				}
			],
			yAxis : [
				{
					type : 'value'
				}
			],
			series : [
				{
					name:'直接访问',
					type:'bar',
					data:[320, 332, 301, 334, 390, 330, 320, 332, 301,301,320, 332, 301, 334, 390,320, 332, 301, 334, 390,]
				},
				{
					name:'邮件营销',
					type:'bar',
					stack: '广告',
					data:[120, 132, 101, 134, 90, 230, 210, 332, 301,301,320, 332, 301, 334, 390,320, 332, 301, 334, 390,]
				},
				{
					name:'联盟广告',
					type:'bar',
					stack: '广告',
					data:[220, 182, 191, 234, 290, 330, 310, 332, 301,301,320, 332, 301, 334, 390,320, 332, 301, 334, 390,]
				},
	
				
			]
		};
	/*
		option = {
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					show:false,
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				data: ['云上贵州', '政法平台','互联网舆情','部门交换','网格化管理']
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '30',
				containLabel: true
			},
			dataZoom:[
				 {
				   yAxisIndex: 0,
				type: 'inside',
				zoomLock: false,
				zoomOnMouseWheel: false,
				moveOnMouseMove: true,
				 start: 0,
				end: 30,
				startValue:1,
				maxSpan:1,
				},
			],
			xAxis:  {
				type: 'value'
			},
			yAxis: {
				type: 'category',
				data: ['周一','周二','周三','周四','周五','周六','周日']
				//data: ['周一']
			},
			series: [
				{
					name: '云上贵州',
					type: 'bar',
					stack: '总量',
					barWidth: 30,//设置柱子的宽度
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: [320, 302, 301, 334, 390, 330, 320]
				},
				{
					name: '政法平台',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: [120, 132, 101, 134, 90, 230, 210]
				},
				{
					name: '互联网舆情',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: [220, 182, 191, 234, 290, 330, 310]
				},
				{
					name: '部门交换',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: [150, 212, 201, 154, 190, 330, 410]
				},
				{
					name: '网格化管理',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: [820, 832, 901, 934, 1290, 1330, 1320]
				}
			]
		};
*/

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
	}
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="less">
	 .echarts {
    width: 100%;
    height: 400px;
	background:#ccc;
  }
</style>
