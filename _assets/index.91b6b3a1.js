let e=document.createElement("style");e.innerHTML=".vben-layout-footer[data-v-6da14420]{color:rgba(0,0,0,.45);text-align:center}.vben-layout-footer__links[data-v-6da14420]{margin-bottom:8px}.vben-layout-footer__links a[data-v-6da14420]{color:rgba(0,0,0,.45)}.vben-layout-footer__links a[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}.vben-layout-footer__github[data-v-6da14420]{margin:0 30px}.vben-layout-footer__github[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}",document.head.appendChild(e);import{a as o,u as t,ap as i,au as r,s,ax as a,f as d,aA as n,cR as p,cS as m,i as l,o as c,j as f,k as j,n as b,m as u,aR as x}from"./index.acbb87a5.js";import"./xlsx.a48e520c.js";import"./index.005d8637.js";import"./index.43cfa9a0.js";import"./Trigger.7e5aa3a2.js";import"./omit.e88f0464.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d8f26848.js";import"./CheckOutlined.3360de48.js";import"./index.76ecadf4.js";import"./index.896d6740.js";import"./index.fe671246.js";import"./colors.4e87fc28.js";import"./index.e51afa00.js";import"./RightOutlined.31cb4cc9.js";import{L as _}from"./index.bded7764.js";import"./index.4bc096ce.js";import"./types.1d435903.js";import"./index.f03014a9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67f16270.js";import"./_baseFor.f4e5f03f.js";import"./index.1b763d8a.js";import"./index.a172b251.js";import"./index.428f9fc4.js";import"./index.6bcb6667.js";import"./index.9504117c.js";import"./UpOutlined.58a09ac3.js";import"./LeftOutlined.258c5f05.js";import"./index.f39ff197.js";import"./index.8fe39e5f.js";import"./index.687a618a.js";import"./index.8eebb15a.js";import"./index.2d8f1145.js";import"./zh_CN.0242bd16.js";import"./index.edff2ab5.js";import"./index.402d573f.js";import"./index.cb8cd2f6.js";import"./index.cb9a9fbb.js";import"./CaretDownFilled.146c316e.js";import"./FileOutlined.d01c0d19.js";import"./index.fb1010bd.js";import"./index.13f63cfb.js";import"./index.d71ec280.js";import"./index.d3875df5.js";import{G as v}from"./GithubFilled.36198587.js";import"./RightOutlined.0108934f.js";import"./useDebounce.c071ec0c.js";import"./index.f486b7fa.js";import"./tsxHelper.0159f1e5.js";import"./index.0c60de8b.js";import"./index.c0cb7618.js";import"./domUtils.f125794f.js";import"./useWindowSizeFn.81260ba1.js";import"./index.f5c7d8cf.js";import"./useHeaderSetting.11e470c0.js";import"./index.93459902.js";import{D as g,G as h,S as y}from"./siteSetting.99cfbd47.js";var F=o({name:"LayoutFooter",components:{Footer:_.Footer,GithubFilled:v},setup(){const{t:e}=t(),{getShowFooter:o}=n(),{currentRoute:p}=i(),{prefixCls:m}=r("layout-footer");return{getShowLayoutFooter:s((()=>{var e;return d(o)&&!(null==(e=d(p).meta)?void 0:e.hiddenFooter)})),prefixCls:m,t:e,DOC_URL:g,GITHUB_URL:h,SITE_URL:y,openWindow:a}}});const C=x("data-v-6da14420");p("data-v-6da14420");const L=j("div",null,"Copyright ©2020 Vben Admin",-1);m();const w=C(((e,o,t,i,r,s)=>{const a=l("GithubFilled"),d=l("Footer");return e.getShowLayoutFooter?(c(),f(d,{key:0,class:e.prefixCls},{default:C((()=>[j("div",{class:`${e.prefixCls}__links`},[j("a",{onClick:o[1]||(o[1]=o=>e.openWindow(e.SITE_URL))},b(e.t("layout.footer.onlinePreview")),1),j(a,{onClick:o[2]||(o[2]=o=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),j("a",{onClick:o[3]||(o[3]=o=>e.openWindow(e.DOC_URL))},b(e.t("layout.footer.onlineDocument")),1)],2),L])),_:1},8,["class"])):u("",!0)}));F.render=w,F.__scopeId="data-v-6da14420";export default F;