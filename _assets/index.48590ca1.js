let e=document.createElement("style");e.innerHTML=".desc-wrap[data-v-e07fa688]{padding:16px;background:#fff}",document.head.appendChild(e);import{a as i,c$ as t,d0 as s,i as r,o,j as d,k as a,aS as n}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./index.deb1177b.js";import"./index.1a9c0d02.js";import"./Trigger.bfe12865.js";import"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06ba6731.js";import"./CheckOutlined.35bd116b.js";import"./index.5586c30e.js";import"./index.4355cf69.js";import"./colors.88c331b3.js";import"./index.d6ae3dfa.js";import"./RightOutlined.7f7867ab.js";import"./index.209318a5.js";import"./types.80de9d94.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import"./_baseFor.f4e5f03f.js";import"./index.5d3f872a.js";import"./index.a172b251.js";import"./index.23afc8d6.js";import"./index.668cd44f.js";import"./UpOutlined.4f317e4e.js";import"./LeftOutlined.760e802a.js";import"./index.2c5ff13d.js";import"./index.1027e3c8.js";import"./index.eb4ddc20.js";import"./index.2cd1edc8.js";import"./index.d958525d.js";import"./zh_CN.0242bd16.js";import"./TableAction.5f18bb1b.js";import"./index.99070219.js";import"./CaretDownFilled.b023be26.js";import"./index.4eeb0172.js";import"./CheckOutlined.952b8817.js";import"./CloseOutlined.c517d8dc.js";import{s as m}from"./EditTableHeaderIcon.d245563b.js";import"./DownOutlined.88faef57.js";import"./FullscreenOutlined.fcc47bab.js";import"./functional.8f7dc448.js";import"./LoadingOutlined.0226bca5.js";import"./RedoOutlined.990d63dc.js";import"./RightOutlined.28ca736c.js";import"./SettingOutlined.a5ad0862.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import{D as p}from"./index.03a2fa62.js";import"./useAttrs.6880d872.js";import"./index.f4b13226.js";import"./index.ff50ff6b.js";import"./useForm.86f9369f.js";import"./index.17c0dda7.js";import"./useWindowSizeFn.4b33812b.js";import"./useFullScreen.b273f378.js";import"./uuid.40269c00.js";import"./useExpose.95c38320.js";import"./index.e63d61cb.js";import{u as c}from"./useTable.ea56ba93.js";import{refundSchema as l,refundData as j,personSchema as u,personData as f,refundTableData as b,refundTableSchema as x,refundTimeTableSchema as g,refundTimeTableData as h}from"./data.e0b36657.js";var T=i({components:{Description:p,BasicTable:m},setup(){const[e]=c({title:"退货商品",dataSource:b,columns:x,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=c({title:"退货进度",columns:g,pagination:!1,dataSource:h,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:l,refundData:j,personSchema:u,personData:f}}});const O=n("data-v-e07fa688");t("data-v-e07fa688");const S={class:"m-5 desc-wrap"};s();const D=O(((e,i,t,s,n,m)=>{const p=r("a-page-header"),c=r("Description"),l=r("a-divider"),j=r("BasicTable");return o(),d("div",null,[a(p,{title:"基础详情页",ghost:!1}),a("div",S,[a(c,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),a(l),a(c,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),a(l),a(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),a(l),a(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])}));T.render=D,T.__scopeId="data-v-e07fa688";export default T;