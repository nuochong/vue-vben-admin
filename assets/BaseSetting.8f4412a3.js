import{cT as e,d as t,a4 as s,aJ as i,a0 as o,g as a,cp as r,cq as d,h as n,o as m,i as p,bw as c,j as l,m as f}from"./index.cf365317.js";import{U as j}from"./uuid.20e2b0e6.js";import"./index.1077fb7c.js";/* empty css              */import"./index.a947876e.js";import{R as u,C as b}from"./index.161c7f6b.js";import{_ as x}from"./index.b75404bd.js";import{a as h}from"./index.eb3022f0.js";import{h as g}from"./header.d801b988.js";import{b as O}from"./data.a32591d5.js";import{u as _}from"./useForm.c2bcb6ec.js";import"./vendor.3b1829c7.js";import"./findIndex.dfb4a59a.js";import"./isEqual.a74a7c19.js";import"./get.719a4219.js";import"./_baseProperty.74f89655.js";import"./toInteger.4b5728ae.js";import"./util.2327827f.js";import"./DeleteOutlined.ce3d1c59.js";import"./EyeOutlined.37772c3d.js";import"./types.d79f185c.js";import"./CheckOutlined.e5d7bf16.js";import"./responsiveObserve.c545f1cc.js";import"./index.ce4dce0a.js";import"./index.9e4baf11.js";import"./SearchOutlined.70021315.js";import"./index.acfd6410.js";import"./DownOutlined.a5bc93c0.js";import"./index.8749b4fc.js";import"./colors.31ba1fd6.js";import"./index.444ab33f.js";import"./UpOutlined.da4838f7.js";import"./index.fb5bb62b.js";import"./RightOutlined.dff2a05b.js";import"./RedoOutlined.f186bbf9.js";import"./index.0444d019.js";import"./EllipsisOutlined.45abe0a5.js";import"./Tree.41dfced6.js";import"./useAttrs.ea7f6219.js";import"./index.fbe41d70.js";import"./index.5622acee.js";import"./useTimeout.cb6e36e1.js";import"./useWindowSizeFn.308a0bee.js";import"./FullscreenOutlined.d0ce88af.js";import"./index.607b19dc.js";import"./index.579d8600.js";import"./index.f96d6e91.js";import"./LeftOutlined.9278b1ed.js";import"./download.c885af96.js";import"./domUtils.fbaa4cd3.js";import"./_stringToArray.8266c95f.js";import"./index.0b90850f.js";import"./useScrollTo.e29c35ef.js";import"./animation.5370f8e0.js";var C;(C||(C={})).ACCOUNT_INFO="/account/getAccountInfo";var v=t({components:{BasicForm:x,CollapseContainer:h,Button:s,Upload:j,Icon:i,[u.name]:u,[b.name]:b},setup(){const{createMessage:t}=a(),[s,{setFieldsValue:i}]=_({labelWidth:120,schemas:O,showActionButtonGroup:!1});return o((async()=>{const t=await e.request({url:C.ACCOUNT_INFO,method:"GET"});i(t)})),{headerImg:g,register:s,handleSubmit:()=>{t.success("更新成功！")}}}});const I=c("data-v-dad0b9f0");r("data-v-dad0b9f0");const w={class:"change-avatar"},y=l("div",{class:"mb-2"}," 头像 ",-1),F=f("更换头像 "),T=f(" 更新基本信息 ");d();const U=I(((e,t,s,i,o,a)=>{const r=n("BasicForm"),d=n("a-col"),c=n("Icon"),f=n("Button"),j=n("Upload"),u=n("a-row"),b=n("CollapseContainer");return m(),p(b,{title:"基本设置",canExpan:!1},{default:I((()=>[l(u,{gutter:24},{default:I((()=>[l(d,{span:14},{default:I((()=>[l(r,{onRegister:e.register},null,8,["onRegister"])])),_:1}),l(d,{span:10},{default:I((()=>[l("div",w,[y,l("img",{width:"140",src:e.headerImg},null,8,["src"]),l(j,{showUploadList:!1},{default:I((()=>[l(f,{type:"ghost",class:"ml-5"},{default:I((()=>[l(c,{icon:"feather:upload"}),F])),_:1})])),_:1})])])),_:1})])),_:1}),l(f,{type:"primary",onClick:e.handleSubmit},{default:I((()=>[T])),_:1},8,["onClick"])])),_:1})}));v.render=U,v.__scopeId="data-v-dad0b9f0";export default v;