import{a as r,i as e,o as t,j as s,w as a,k as i,v as o,p as n}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./index.bc80fc9d.js";import"./LeftOutlined.5f75eb1f.js";import"./tsxHelper.23698464.js";import"./index.5af0c53a.js";import{B as c,a as p}from"./index.6c338271.js";var d=r({components:{BasicDrawer:c},setup(){const[r,{closeDrawer:e}]=p();return{register:r,closeDrawer:e}}});const f=n(" Drawer Info. "),l=n("内部关闭drawer");d.render=function(r,n,c,p,d,m){const w=e("a-button"),u=e("BasicDrawer");return t(),s(u,o(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:a((()=>[f,i(w,{type:"primary",onClick:r.closeDrawer},{default:a((()=>[l])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default d;