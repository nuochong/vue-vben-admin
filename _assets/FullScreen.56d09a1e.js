import{a as e,u as l,s as t,f as s,i as r,o as n,j as o,w as u,k as i}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./Trigger.0d1e9c99.js";import{T as a}from"./index.9250ace7.js";import{F as c,a as F}from"./FullscreenOutlined.3b09f301.js";import{u as m}from"./useFullScreen.891b55e2.js";var p=e({name:"FullScreen",components:{FullscreenExitOutlined:c,FullscreenOutlined:F,Tooltip:a},setup(){const{t:e}=l(),{toggleFullscreen:r,isFullscreenRef:n}=m();return{getTitle:t((()=>s(n)?e("layout.header.tooltipExitFull"):e("layout.header.tooltipEntryFull"))),isFullscreen:n,toggleFullscreen:r}}});p.render=function(e,l,t,s,a,c){const F=r("FullscreenOutlined"),m=r("FullscreenExitOutlined"),p=r("Tooltip");return n(),o(p,{title:e.getTitle,placement:"bottom",mouseEnterDelay:.5},{default:u((()=>[i("span",{onClick:l[1]||(l[1]=(...l)=>e.toggleFullscreen&&e.toggleFullscreen(...l))},[e.isFullscreen?(n(),o(m,{key:1})):(n(),o(F,{key:0}))])])),_:1},8,["title","mouseEnterDelay"])};export default p;