import{aV as t,aW as a,d as e,cp as i,cq as s,h as r,o,i as d,j as l,l as m,bw as c,m as n}from"./index.cf365317.js";import{D as p}from"./index.607b19dc.js";import{_ as u}from"./index.9bd36aa1.js";import"./vendor.3b1829c7.js";import"./index.327c61a8.js";import"./index.0444d019.js";import"./RightOutlined.dff2a05b.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./isEqual.a74a7c19.js";import"./toInteger.4b5728ae.js";import"./DownOutlined.a5bc93c0.js";/* empty css              */import"./index.a1bfa9a8.js";import"./usePageContext.1152815b.js";import"./transButton.43a89275.js";import"./ArrowLeftOutlined.949c5d9e.js";const j=t((()=>a((()=>import("./index.6df593c7.js")),["/assets/index.6df593c7.js","/assets/index.5ddcb78c.css","/assets/index.cf365317.js","/assets/index.e5c5d570.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css"]))),f=(()=>{const t=[];for(let a=1;a<2e4;a++)t.push({title:"列表项"+a});return t})();var _=e({components:{VScroll:j,Divider:p,PageWrapper:u},setup:()=>({data:f})});const v=c("data-v-b4120884");i("data-v-b4120884");const b=n("基础滚动示例"),h={class:"virtual-scroll-demo-wrap"},x={class:"virtual-scroll-demo__item"},g=n("即使不可见，也预先加载50条数据，防止空白"),w={class:"virtual-scroll-demo-wrap"},D={class:"virtual-scroll-demo__item"};s();const O=v(((t,a,e,i,s,c)=>{const n=r("Divider"),p=r("VScroll"),u=r("PageWrapper");return o(),d(u,{class:"virtual-scroll-demo"},{default:v((()=>[l(n,null,{default:v((()=>[b])),_:1}),l("div",h,[l(p,{itemHeight:41,items:t.data,height:300,width:300},{default:v((({item:t})=>[l("div",x,m(t.title),1)])),_:1},8,["items"])]),l(n,null,{default:v((()=>[g])),_:1}),l("div",w,[l(p,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:v((({item:t})=>[l("div",D,m(t.title),1)])),_:1},8,["items"])])])),_:1})}));_.render=O,_.__scopeId="data-v-b4120884";export default _;