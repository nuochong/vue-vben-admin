let i=document.createElement("style");i.innerHTML=".list-search__header-form[data-v-1b8f9986]{margin-bottom:-16px}.list-search__container[data-v-1b8f9986]{padding:12px;background:#fff}.list-search__title[data-v-1b8f9986]{margin-bottom:12px;font-size:18px}.list-search__content[data-v-1b8f9986]{color:rgba(0,0,0,.65)}.list-search__action[data-v-1b8f9986]{margin-top:10px}.list-search__action-item[data-v-1b8f9986]{display:inline-block;padding:0 16px;color:rgba(0,0,0,.45)}.list-search__action-item[data-v-1b8f9986]:nth-child(1){padding-left:0}.list-search__action-item[data-v-1b8f9986]:nth-child(1),.list-search__action-item[data-v-1b8f9986]:nth-child(2){border-right:1px solid rgba(206,206,206,.4)}.list-search__action-icon[data-v-1b8f9986]{margin-right:3px}.list-search__time[data-v-1b8f9986]{position:absolute;right:20px;color:rgba(0,0,0,.45)}",document.head.appendChild(i);import{a as t,i as s,o as e,j as a,bp as o,k as r,aM as n,aX as d,n as c,m as l,p}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import{s as m}from"./index.5edef697.js";import"./index.278c333c.js";import"./index.1ba525ec.js";import"./colors.eda34fc4.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./usePageContext.5e891747.js";import"./types.d260ef98.js";import"./index.fa2eab41.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import"./index.c6a9e5cf.js";import"./index.6512df14.js";import"./UpOutlined.d1c97ab1.js";import"./index.a1f247c9.js";import{T as f}from"./index.0408e61a.js";import"./index.c4bc0140.js";import"./index.b11d4af1.js";import"./index.e0f7086f.js";import"./index.c0281d12.js";import"./index.bc87bef6.js";import"./index.eb3c5efe.js";import"./transButton.295c4225.js";import"./index.c41153d6.js";import"./CloseOutlined.512f8bf6.js";import"./FullscreenOutlined.00c2852f.js";import"./index.9d0f3fe7.js";import"./RightOutlined.a8a05276.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import{s as b}from"./index.7bdbbe2a.js";import"./useAttrs.fddcc395.js";import"./index.ca362417.js";import"./useWindowSizeFn.b2871292.js";import{s as j}from"./index.97911cfc.js";import"./uuid.40269c00.js";import"./download.167d838b.js";import{searchList as x,actions as _,schemas as u}from"./data.be20d9d6.js";var h=t({components:{Icon:j,Tag:f,BasicForm:m,PageWrapper:b},setup:()=>({prefixCls:"list-search",list:x,actions:_,schemas:u})});const g=o("data-v-1b8f9986"),v=g(((i,t,o,m,f,b)=>{const j=s("BasicForm"),x=s("Icon"),_=s("Tag"),u=s("a-list-item-meta"),h=s("a-list-item"),v=s("a-list"),C=s("PageWrapper");return e(),a(C,{class:i.prefixCls,title:"搜索列表"},{headerContent:g((()=>[r(j,{class:`${i.prefixCls}__header-form`,labelWidth:100,schemas:i.schemas,showActionButtonGroup:!1},null,8,["class","schemas"])])),default:g((()=>[r("div",{class:`${i.prefixCls}__container`},[r(v,null,{default:g((()=>[(e(!0),a(n,null,d(i.list,(t=>(e(),a(h,{key:t.id},{default:g((()=>[r(u,null,{description:g((()=>[r("div",{class:`${i.prefixCls}__content`},c(t.content),3),r("div",{class:`${i.prefixCls}__action`},[(e(!0),a(n,null,d(i.actions,((t,s)=>(e(),a("div",{key:s,class:`${i.prefixCls}__action-item`},[t.icon?(e(),a(x,{key:0,class:`${i.prefixCls}__action-icon`,icon:t.icon,color:t.color},null,8,["class","icon","color"])):l("v-if",!0),p(" "+c(t.text),1)],2)))),128)),r("span",{class:`${i.prefixCls}__time`},c(t.time),3)],2)])),title:g((()=>[r("p",{class:`${i.prefixCls}__title`},c(t.title),3),r("div",null,[(e(!0),a(n,null,d(t.description,((i,t)=>(e(),a(_,{key:t,class:"mb-2"},{default:g((()=>[p(c(i),1)])),_:2},1024)))),128))])])),_:2},1024)])),_:2},1024)))),128))])),_:1})],2)])),_:1},8,["class"])}));h.render=v,h.__scopeId="data-v-1b8f9986";export default h;