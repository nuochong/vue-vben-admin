import{a as t,r as e,Q as s,i as a,o as r,j as o,w as i,k as n}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.70efe216.js";import{a as p}from"./index.f85aa6bf.js";import"./useTimeout.a028e2d1.js";import"./tsxHelper.23698464.js";import"./index.f3ab5b5b.js";import"./domUtils.31b70c37.js";import"./index.5af0c53a.js";import"./resizeEvent.6c27db1d.js";import"./animation.cbaf969b.js";import"./useScrollTo.e7559bfd.js";import{u as d}from"./useApexCharts.fecd67a7.js";var c=t({components:{CollapseContainer:p},setup(){const t=e(null),{setOptions:a}=d(t);return s((()=>{a({series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},title:{show:!1},tooltip:{x:{show:!1}},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}})})),{chartRef:t}}});const l={ref:"chartRef",style:{width:"100%"}};c.render=function(t,e,s,p,d,c){const m=a("CollapseContainer");return r(),o(m,{title:"销售统计",canExpan:!1},{default:i((()=>[n("div",l,null,512)])),_:1})};export default c;