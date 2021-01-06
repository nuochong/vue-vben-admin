import{a as e,i as o,o as i,j as s,w as t,k as r,p as a}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import"./index.5edef697.js";import{A as d}from"./index.278c333c.js";import"./index.1ba525ec.js";import"./colors.eda34fc4.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./usePageContext.5e891747.js";import"./types.d260ef98.js";import"./index.fa2eab41.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import"./index.c6a9e5cf.js";import"./index.6512df14.js";import"./UpOutlined.d1c97ab1.js";import"./index.a1f247c9.js";import"./index.0408e61a.js";import"./index.c4bc0140.js";import"./index.b11d4af1.js";import"./index.e0f7086f.js";import"./index.c0281d12.js";import"./index.bc87bef6.js";import"./index.eb3c5efe.js";import"./transButton.295c4225.js";import"./index.c41153d6.js";import"./CloseOutlined.512f8bf6.js";import"./FullscreenOutlined.00c2852f.js";import"./index.9d0f3fe7.js";import"./RightOutlined.a8a05276.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import{s as n}from"./index.7bdbbe2a.js";import"./useAttrs.fddcc395.js";import{a as p}from"./index.ca362417.js";import"./useWindowSizeFn.b2871292.js";import"./index.97911cfc.js";import"./uuid.40269c00.js";import"./download.167d838b.js";import"./useForm.9a3cc7ae.js";import m from"./Modal1.64ad06ad.js";import l from"./Modal2.cc81a757.js";import c from"./Modal3.de49488c.js";import j from"./Modal4.dcb405a7.js";var f=e({components:{Alert:d,Modal1:m,Modal2:l,Modal3:c,Modal4:j,PageWrapper:n},setup(){const[e,{openModal:o,setModalProps:i}]=p(),[s,{openModal:t}]=p(),[r,{openModal:a}]=p(),[d,{openModal:n}]=p();return{register1:e,openModal1:o,register2:s,openModal2:t,register3:r,openModal3:a,register4:d,openModal4:n,send:function(){n(!0,{data:"content",info:"Info"})},openModalLoading:function(){o(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a("打开弹窗 默认可以拖动/全屏"),g=a("打开弹窗"),b=a("打开弹窗"),x=a("打开弹窗并传递数据");f.render=function(e,a,d,n,p,m){const l=o("Alert"),c=o("a-button"),j=o("Modal1"),f=o("Modal2"),M=o("Modal3"),y=o("Modal4"),C=o("PageWrapper");return i(),s(C,{title:"modal组件使用示例"},{default:t((()=>[r(l,{message:"使用 useModal 进行弹窗操作，默认可以拖动，可以通过 draggable\n    参数进行控制是否可以拖动/全屏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModalLoading},{default:t((()=>[u])),_:1},8,["onClick"]),r(l,{message:"内外同时同时显示隐藏","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal2},{default:t((()=>[g])),_:1},8,["onClick"]),r(l,{message:"自适应高度","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.openModal3},{default:t((()=>[b])),_:1},8,["onClick"]),r(l,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),r(c,{type:"primary",class:"my-4",onClick:e.send},{default:t((()=>[x])),_:1},8,["onClick"]),r(j,{onRegister:e.register1},null,8,["onRegister"]),r(f,{onRegister:e.register2},null,8,["onRegister"]),r(M,{onRegister:e.register3},null,8,["onRegister"]),r(y,{onRegister:e.register4},null,8,["onRegister"])])),_:1})};export default f;