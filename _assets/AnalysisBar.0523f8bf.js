import{a as t,r as a,Q as e,o as i,j as r}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./useTimeout.a028e2d1.js";import{u as o}from"./useECharts.1b9041f9.js";import{b as s}from"./props.c31746e0.js";var n=t({name:"AnalysisLine",props:s,setup(){const t=a(null),{setOptions:i}=o(t);return e((()=>{i({tooltip:{trigger:"axis",backgroundColor:"rgba(0, 0, 0, .6)",axisPointer:{type:"shadow"}},legend:{itemWidth:15,right:10,data:["产品一","产品二","产品三"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",axisTick:{inside:!0},data:["付费用户","免费用户","自主"]}],yAxis:[{type:"value",axisTick:{inside:!0}}],series:[{name:"产品一",type:"bar",itemStyle:{color:"#3ca0f6"},data:[3200,3320,3010],animationDuration:4e3},{name:"产品二",type:"bar",itemStyle:{color:"#7dd9b9"},data:[1200,2600,1010],animationDuration:4e3},{name:"产品三",type:"bar",itemStyle:{color:"#e6a23c"},data:[862,2500,964],animationDuration:4e3}]})})),{chartRef:t}}});n.render=function(t,a,e,o,s,n){return i(),r("div",{ref:"chartRef",style:{height:t.height,width:t.width}},null,4)};export default n;