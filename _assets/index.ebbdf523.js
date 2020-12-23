import{a as e,i as o,o as i,j as s,k as r,w as t,p as a}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./index.6e1ed0cf.js";import"./Trigger.0d1e9c99.js";import"./omit.cd50f989.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.c949c33a.js";import"./CheckOutlined.0f618137.js";import"./index.beeefc20.js";import{A as n}from"./index.a2bd603b.js";import"./colors.6c5ee752.js";import"./RightOutlined.fba547ae.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.70efe216.js";import"./index.9ca02ef3.js";import"./index.a172b251.js";import"./index.055efe2d.js";import"./UpOutlined.c1494348.js";import"./index.81ef6f4a.js";import"./index.f2456bee.js";import"./index.9f889c90.js";import"./index.cbd12732.js";import"./CloseOutlined.64314fd9.js";import"./FullscreenOutlined.3b09f301.js";import"./useTimeout.a028e2d1.js";import"./tsxHelper.23698464.js";import"./index.5af0c53a.js";import"./resizeEvent.6c27db1d.js";import"./index.873cd9b9.js";import"./index.bc4d46ae.js";import"./useForm.08101b0a.js";import{a as d}from"./index.009e9369.js";import"./useWindowSizeFn.5af43173.js";import l from"./Modal1.11911d70.js";import p from"./Modal2.fccb3177.js";import m from"./Modal3.722ab2a1.js";import c from"./Modal4.b687ad47.js";var f=e({components:{Alert:n,Modal1:l,Modal2:p,Modal3:m,Modal4:c},setup(){const[e,{openModal:o,setModalProps:i}]=d(),[s,{openModal:r}]=d(),[t,{openModal:a}]=d(),[n,{openModal:l}]=d();return{register1:e,openModal1:o,register2:s,openModal2:r,register3:t,openModal3:a,register4:n,openModal4:l,send:function(){l(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const j={class:"px-10 py-4"},g=a("打开弹窗 默认可以拖动/全屏"),u=a("打开弹窗"),M=a("打开弹窗"),b=a("打开弹窗并传递数据");f.render=function(e,a,n,d,l,p){const m=o("Alert"),c=o("a-button"),f=o("Modal1"),x=o("Modal2"),y=o("Modal3"),k=o("Modal4");return i(),s("div",j,[r(m,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:t((()=>[g])),_:1},8,["onClick"]),r(m,{message:"内外同时同时显示隐藏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:t((()=>[u])),_:1},8,["onClick"]),r(m,{message:"自适应高度","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:t((()=>[M])),_:1},8,["onClick"]),r(m,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[b])),_:1},8,["onClick"]),r(f,{onRegister:e.register1},null,8,["onRegister"]),r(x,{onRegister:e.register2},null,8,["onRegister"]),r(y,{onRegister:e.register3},null,8,["onRegister"]),r(k,{onRegister:e.register4},null,8,["onRegister"])])};export default f;