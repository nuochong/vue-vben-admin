let e=document.createElement("style");e.innerHTML=".vben-header-lock-modal__entry{position:relative;height:240px;padding:130px 30px 60px;background:#fff;border-radius:10px}.vben-header-lock-modal__header{position:absolute;top:0;left:calc(50% - 45px);width:auto;text-align:center}.vben-header-lock-modal__header-img{width:70px;border-radius:50%}.vben-header-lock-modal__header-name{margin-top:5px}.vben-header-lock-modal__footer{text-align:center}",document.head.appendChild(e);import{a as r,u as s,au as t,s as o,dr as a,g as i,i as d,o as l,j as n,w as c,k as p,n as m,p as f,v as u}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./index.6e1ed0cf.js";import"./Trigger.0d1e9c99.js";import"./omit.cd50f989.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.c949c33a.js";import"./CheckOutlined.0f618137.js";import{s as x}from"./index.beeefc20.js";import"./colors.6c5ee752.js";import"./RightOutlined.fba547ae.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.70efe216.js";import"./index.9ca02ef3.js";import"./index.a172b251.js";import"./index.055efe2d.js";import"./UpOutlined.c1494348.js";import"./index.81ef6f4a.js";import"./index.f2456bee.js";import"./index.9f889c90.js";import"./index.cbd12732.js";import"./CloseOutlined.64314fd9.js";import"./FullscreenOutlined.3b09f301.js";import"./useTimeout.a028e2d1.js";import"./tsxHelper.23698464.js";import"./index.5af0c53a.js";import"./resizeEvent.6c27db1d.js";import{_ as j}from"./header.0299ae16.js";import"./index.873cd9b9.js";import"./index.bc4d46ae.js";import{u as h}from"./useForm.08101b0a.js";import{B as b,b as g}from"./index.009e9369.js";import"./useWindowSizeFn.5af43173.js";var _=r({name:"LockModal",components:{BasicModal:b,BasicForm:x},setup(){const{t:e}=s(),{prefixCls:r}=t("header-lock-modal"),d=o((()=>{var e;return null==(e=i.getUserInfoState)?void 0:e.realName})),[l,{closeModal:n}]=g(),[c,{validateFields:p,resetFields:m}]=h({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:r,getRealName:d,register:l,registerForm:c,handleLock:async function(){const e=(await p()).password;n(),a.commitLockInfoState({isLock:!0,pwd:e}),await m()}}}});_.render=function(e,r,s,t,o,a){const i=d("BasicForm"),x=d("a-button"),h=d("BasicModal");return l(),n(h,u({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:c((()=>[p("div",{class:`${e.prefixCls}__entry`},[p("div",{class:`${e.prefixCls}__header`},[p("img",{src:j,class:`${e.prefixCls}__header-img`},null,2),p("p",{class:`${e.prefixCls}__header-name`},m(e.getRealName),3)],2),p(i,{onRegister:e.registerForm,layout:"vertical"},null,8,["onRegister"]),p("div",{class:`${e.prefixCls}__footer`},[p(x,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:c((()=>[f(m(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default _;