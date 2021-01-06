import{a as e,i as r,o as i,j as o,w as s,k as t,p as a}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import"./index.5edef697.js";import{A as n}from"./index.278c333c.js";import"./index.1ba525ec.js";import"./colors.eda34fc4.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./usePageContext.5e891747.js";import"./types.d260ef98.js";import"./index.fa2eab41.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import"./index.c6a9e5cf.js";import"./index.6512df14.js";import"./UpOutlined.d1c97ab1.js";import"./index.a1f247c9.js";import"./index.0408e61a.js";import"./index.c4bc0140.js";import"./index.b11d4af1.js";import"./index.e0f7086f.js";import"./index.c0281d12.js";import"./index.bc87bef6.js";import"./index.eb3c5efe.js";import"./transButton.295c4225.js";import"./index.3ab703ad.js";import"./index.c41153d6.js";import{u as p}from"./index.12362e0d.js";import"./CloseOutlined.512f8bf6.js";import"./FullscreenOutlined.00c2852f.js";import"./index.9d0f3fe7.js";import"./RightOutlined.a8a05276.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import{s as m}from"./index.7bdbbe2a.js";import"./useAttrs.fddcc395.js";import d from"./Drawer1.8abca35e.js";import c from"./Drawer2.e5968797.js";import j from"./Drawer3.94f3c5db.js";import"./index.ca362417.js";import"./useWindowSizeFn.b2871292.js";import"./index.97911cfc.js";import"./uuid.40269c00.js";import"./download.167d838b.js";import"./useForm.9a3cc7ae.js";import l from"./Drawer4.d4c8c489.js";import f from"./Drawer5.c6e53ef2.js";var w=e({components:{Alert:n,PageWrapper:m,Drawer1:d,Drawer2:c,Drawer3:j,Drawer4:l,Drawer5:f},setup(){const[e,{openDrawer:r,setDrawerProps:i}]=p(),[o,{openDrawer:s}]=p(),[t,{openDrawer:a}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:o,openDrawer2:s,register3:t,openDrawer3:a,register4:n,register5:d,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),i({loading:!0}),setTimeout((()=>{i({loading:!1})}),2e3)}}}});const u=a("打开Drawer"),D=a("打开Drawer"),g=a("打开Drawer"),b=a("打开Drawer并传递数据"),x=a("打开详情Drawer");w.render=function(e,a,n,p,m,d){const c=r("Alert"),j=r("a-button"),l=r("Drawer1"),f=r("Drawer2"),w=r("Drawer3"),y=r("Drawer4"),R=r("Drawer5"),C=r("PageWrapper");return i(),o(C,{title:"抽屉组件使用示例"},{default:s((()=>[t(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),t(j,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:s((()=>[u])),_:1},8,["onClick"]),t(c,{message:"内外同时控制显示隐藏","show-icon":""}),t(j,{type:"primary",class:"my-4",onClick:a[1]||(a[1]=r=>e.openDrawer2(!0))},{default:s((()=>[D])),_:1}),t(c,{message:"自适应高度/显示footer","show-icon":""}),t(j,{type:"primary",class:"my-4",onClick:a[2]||(a[2]=r=>e.openDrawer3(!0))},{default:s((()=>[g])),_:1}),t(c,{message:"内外数据交互,外部通过 transferModalData 发送，内部通过 receiveDrawerDataRef 接收。该数据具有响应式","show-icon":""}),t(j,{type:"primary",class:"my-4",onClick:e.send},{default:s((()=>[b])),_:1},8,["onClick"]),t(c,{message:"详情页模式","show-icon":""}),t(j,{type:"primary",class:"my-4",onClick:a[3]||(a[3]=r=>e.openDrawer5(!0))},{default:s((()=>[x])),_:1}),t(l,{onRegister:e.register1},null,8,["onRegister"]),t(f,{onRegister:e.register2},null,8,["onRegister"]),t(w,{onRegister:e.register3},null,8,["onRegister"]),t(y,{onRegister:e.register4},null,8,["onRegister"]),t(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default w;