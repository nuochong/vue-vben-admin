let e=document.createElement("style");e.innerHTML=".desc-wrap[data-v-18c6f5e8]{padding:16px;background:#fff}",document.head.appendChild(e);import{a as t,i,o as r,j as s,bp as o,k as a}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./useSortable.b798defb.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import"./index.5edef697.js";import"./index.278c333c.js";import"./index.1ba525ec.js";import"./index.25538577.js";import"./colors.eda34fc4.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./usePageContext.5e891747.js";import"./types.d260ef98.js";import"./index.fa2eab41.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import"./index.c6a9e5cf.js";import"./index.6512df14.js";import"./UpOutlined.d1c97ab1.js";import"./LeftOutlined.a2747bf9.js";import"./index.a1f247c9.js";import"./index.0408e61a.js";import"./index.c4bc0140.js";import"./index.b11d4af1.js";import"./index.e0f7086f.js";import"./index.98ac4cc3.js";import"./zh_CN.0242bd16.js";import"./index.c0281d12.js";import"./index.bc87bef6.js";import"./index.eb3c5efe.js";import"./CaretDownFilled.332f9000.js";import"./transButton.295c4225.js";import"./index.c41153d6.js";import"./CheckOutlined.5f43e1c7.js";import"./CloseOutlined.512f8bf6.js";import{s as d}from"./index.a2ab4abb.js";import"./FullscreenOutlined.00c2852f.js";import"./index.9d0f3fe7.js";import"./RightOutlined.a8a05276.js";import"./SettingOutlined.33e8a940.js";import"./index.b5fc5f91.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import{s as n}from"./index.7bdbbe2a.js";import{D as m}from"./index.2720700d.js";import"./useAttrs.fddcc395.js";import"./index.ca362417.js";import"./useWindowSizeFn.b2871292.js";import"./index.97911cfc.js";import"./uuid.40269c00.js";import"./download.167d838b.js";import"./useForm.9a3cc7ae.js";import"./useExpose.37206cdb.js";import{u as p}from"./useTable.b95e7e7b.js";import{refundSchema as c,refundData as j,personSchema as l,personData as u,refundTableData as f,refundTableSchema as b,refundTimeTableSchema as x,refundTimeTableData as g}from"./data.4fc59411.js";var h=t({components:{Description:m,BasicTable:d,PageWrapper:n},setup(){const[e]=p({title:"退货商品",dataSource:f,columns:b,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=p({title:"退货进度",columns:x,pagination:!1,dataSource:g,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:c,refundData:j,personSchema:l,personData:u}}});const T=o("data-v-18c6f5e8"),S=T(((e,t,o,d,n,m)=>{const p=i("Description"),c=i("a-divider"),j=i("BasicTable"),l=i("PageWrapper");return r(),s(l,{title:"基础详情页",contentBackgrond:""},{default:T((()=>[a(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),a(c),a(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),a(c),a(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),a(c),a(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=S,h.__scopeId="data-v-18c6f5e8";export default h;