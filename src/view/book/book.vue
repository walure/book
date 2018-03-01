<template>
<Page name="图书" nav-group="book" :foo.sync="bar" >

	<div class="echarts" slot="content" >
	 <div id="mains" style="width: 300px;height:200px;"></div>
	</div>
	<div slot="footer">asdas
		{{bar}}
		
		<el-alert title="成功提示的文案"
    type="success"></el-alert>
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
		bar:1
    }
  },
  mounted () {
	console.log(this.$alert)
	this.draw()
  },
  methods:{
	draw(){
		 var myChart = echarts.init(document.querySelector('#mains'));

      app.title = '仪表盘';

		let option = {
    "toolbox": {
        "show": false,
        "feature": {
            "mark": {
                "show": true
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        }
    },
    "series": [{
        "name": "指标",
        "type": "gauge",
        "startAngle": 180, //总的360，设置180就是半圆
        "endAngle": 0,
        "center": ["50%", "77%"], //整体的位置设置
        "radius": 100,
        "axisLine": {
            "lineStyle": {
                "width": 20, //柱子的宽度
                "color": [
                        [0.298, "#2d99e2"],
                        [1, "#dce3ec"]
                    ] //0.298是百分比的比例值（小数），还有对应两个颜色值
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "pointer": {
            "width": 5, //指针的宽度
            "length": "70%", //指针长度，按照半圆半径的百分比
            "color": "#2d99e2"
        },
        "title": {
            "show": true,
            "offsetCenter": [25, "25%"], //标题位置设置
            "textStyle": { //标题样式设置
                "color": "#2d99e2",
                "fontSize": 12,
                "fontFamily": "微软雅黑",
                "fontWeight": "bold"
            }
        },
        "detail": {
            "show": false
        },
        "data": [{ //显示数据
            "value": 29.8,
            "name": "你要的比例 29.8%"
        }]
    }]
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option,true);
	}
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="less">
	 .echarts {
 
  }
</style>
