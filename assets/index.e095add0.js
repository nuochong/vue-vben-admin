import{u as e}from"./useContextMenu.ded23bdf.js";import{a as t}from"./index.eb3022f0.js";import{d as i,g as n,h as o,o as s,i as a,w as l,j as r,m as p}from"./index.cf365317.js";import{_ as d}from"./index.9bd36aa1.js";import"./index.0444d019.js";import"./RightOutlined.dff2a05b.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./isEqual.a74a7c19.js";import"./toInteger.4b5728ae.js";/* empty css              */import"./index.607b19dc.js";import"./index.0b90850f.js";import"./domUtils.fbaa4cd3.js";import"./_stringToArray.8266c95f.js";import"./useTimeout.cb6e36e1.js";import"./useScrollTo.e29c35ef.js";import"./animation.5370f8e0.js";import"./vendor.3b1829c7.js";import"./index.327c61a8.js";import"./DownOutlined.a5bc93c0.js";import"./index.a1bfa9a8.js";import"./usePageContext.1152815b.js";import"./transButton.43a89275.js";import"./ArrowLeftOutlined.949c5d9e.js";var m=i({components:{CollapseContainer:t,PageWrapper:d},setup(){const[t]=e(),{createMessage:i}=n();return{handleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",handler:()=>{i.success("click new")}},{label:"Open",icon:"bx:bxs-folder-open",handler:()=>{i.success("click open")}}]})},handleMultipleContext:function(e){t({event:e,items:[{label:"New",icon:"bi:plus",children:[{label:"New1-1",icon:"bi:plus",divider:!0,children:[{label:"New1-1-1",handler:()=>{i.success("click new")}},{label:"New1-2-1",disabled:!0}]},{label:"New1-2",icon:"bi:plus"}]}]})}}}});const c=p(" Right Click on me "),u=p(" Right Click on me ");m.render=function(e,t,i,n,p,d){const m=o("a-button"),b=o("CollapseContainer"),f=o("PageWrapper");return s(),a(f,{title:"右键菜单示例"},{default:l((()=>[r(b,{title:"Simple"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleContext},{default:l((()=>[c])),_:1},8,["onContextmenu"])])),_:1}),r(b,{title:"Multiple",class:"mt-4"},{default:l((()=>[r(m,{type:"primary",onContextmenu:e.handleMultipleContext},{default:l((()=>[u])),_:1},8,["onContextmenu"])])),_:1})])),_:1})};export default m;