let t=document.createElement("style");t.innerHTML=".virtual-scroll-demo-wrap[data-v-60b32a02]{display:flex;margin:0 30%;background:#fff;justify-content:center}.virtual-scroll-demo__item[data-v-60b32a02]{height:40px;padding:0 20px;line-height:40px;border-bottom:1px solid #ddd}",document.head.appendChild(t);import{aV as e,a,d9 as i,da as s,i as d,o as r,j as o,k as l,n as m,bp as c,p as n}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./index.1ba525ec.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./usePageContext.5e891747.js";import"./types.d260ef98.js";import"./index.c6a9e5cf.js";import{D as p}from"./index.c4bc0140.js";import"./transButton.295c4225.js";import{s as u}from"./index.7bdbbe2a.js";const b=e((()=>import("./index.5a8eb609.js"))),v=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var f=a({components:{VScroll:b,Divider:p,PageWrapper:u},setup:()=>({data:v})});const j=c("data-v-60b32a02");i("data-v-60b32a02");const h=n("基础滚动示例"),x={class:"virtual-scroll-demo-wrap"},g={class:"virtual-scroll-demo__item"},_=n("即使不可见，也预先加载50条数据，防止空白"),w={class:"virtual-scroll-demo-wrap"},y={class:"virtual-scroll-demo__item"};s();const D=j(((t,e,a,i,s,c)=>{const n=d("Divider"),p=d("VScroll"),u=d("PageWrapper");return r(),o(u,{class:"virtual-scroll-demo"},{default:j((()=>[l(n,null,{default:j((()=>[h])),_:1}),l("div",x,[l(p,{itemHeight:41,items:t.data,height:300,width:300},{default:j((({item:t})=>[l("div",g,m(t.title),1)])),_:1},8,["items"])]),l(n,null,{default:j((()=>[_])),_:1}),l("div",w,[l(p,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:j((({item:t})=>[l("div",y,m(t.title),1)])),_:1},8,["items"])])])),_:1})}));f.render=D,f.__scopeId="data-v-60b32a02";export default f;