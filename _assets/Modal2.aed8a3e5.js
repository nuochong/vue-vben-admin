import{a as e,i as s,o as t,j as o,w as i,k as r,v as a,p as l}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import"./index.4eeb0172.js";import"./CloseOutlined.c517d8dc.js";import"./FullscreenOutlined.fcc47bab.js";import"./RightOutlined.28ca736c.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import"./useAttrs.6880d872.js";import{s as d,b as p}from"./index.17c0dda7.js";import"./useWindowSizeFn.4b33812b.js";var c=e({components:{BasicModal:d},setup(){const[e,{closeModal:s,setModalProps:t}]=p();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const n=l("从内部关闭弹窗"),m=l("从内部修改title");c.render=function(e,l,d,p,c,j){const u=s("a-button"),b=s("BasicModal");return t(),o(b,a(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[r(u,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:i((()=>[n])),_:1},8,["onClick"]),r(u,{type:"primary",onClick:e.setModalProps},{default:i((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;