import{d as e,r as l,h as r,o as t,i as o,w as s,j as n,m as i,l as c}from"./index.02d1965c.js";import"./_stringToArray.2de96d92.js";import"./domUtils.be3edd39.js";import{a}from"./index.daf19870.js";import"./RightOutlined.d46e4d56.js";import"./useTimeout.5f562c84.js";import"./index.46df4a2f.js";import"./animation.218b0c8c.js";import"./useScrollTo.b870f612.js";import{_ as u}from"./index.5c3eb61c.js";import"./usePageContext.91d46251.js";import{u as d}from"./useFullScreen.fd8fcfa8.js";var m=e({components:{CollapseContainer:a,PageWrapper:u},setup(){const e=l(null),{enterFullscreen:r,toggleFullscreen:t,isFullscreenRef:o,exitFullscreen:s}=d(),{toggleFullscreen:n}=d(e);return{enterFullscreen:r,toggleDom:n,toggleFullscreen:t,isFullscreenRef:o,exitFullscreen:s,domRef:e}}});const f=i(" Enter Window Full Screen "),p=i(" Toggle Window Full Screen "),g=i(" Exit Window Full Screen "),F=i(" Enter Dom Full Screen "),C={ref:"domRef",class:"w-1/2 h-64 flex justify-center rounded-md items-center bg-white mx-auto mt-10"},x=i(" Exit Dom Full Screen ");m.render=function(e,l,a,u,d,m){const j=r("a-button"),w=r("CollapseContainer"),k=r("PageWrapper");return t(),o(k,{title:"全屏示例"},{default:s((()=>[n(w,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Window Full Screen"},{default:s((()=>[n(j,{type:"primary",onClick:e.enterFullscreen,class:"mr-2"},{default:s((()=>[f])),_:1},8,["onClick"]),n(j,{color:"success",onClick:e.toggleFullscreen,class:"mr-2"},{default:s((()=>[p])),_:1},8,["onClick"]),n(j,{color:"error",onClick:e.exitFullscreen,class:"mr-2"},{default:s((()=>[g])),_:1},8,["onClick"]),i(" Current State: "+c(e.isFullscreenRef),1)])),_:1}),n(w,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Dom Full Screen"},{default:s((()=>[n(j,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:s((()=>[F])),_:1},8,["onClick"])])),_:1}),n("div",C,[n(j,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:s((()=>[x])),_:1},8,["onClick"])],512)])),_:1})};export default m;