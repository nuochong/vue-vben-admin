import{dg as e,a as r,r as i,u as o,O as t,F as s,cU as a,dj as n,i as d,o as m,j as l,ad as c,aH as p,aI as f,aJ as j,k as u,w as b,p as x,n as g}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./index.ef677c95.js";import"./index.6e1ed0cf.js";import"./Trigger.0d1e9c99.js";import"./omit.cd50f989.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.c949c33a.js";import"./CheckOutlined.0f618137.js";import"./index.beeefc20.js";import"./colors.6c5ee752.js";import"./index.aa32687c.js";import"./RightOutlined.fba547ae.js";import"./index.54399c4c.js";import"./types.7e830ab9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.70efe216.js";import"./_baseFor.f4e5f03f.js";import"./index.9ca02ef3.js";import"./index.a172b251.js";import"./index.9250ace7.js";import"./index.055efe2d.js";import"./UpOutlined.c1494348.js";import"./LeftOutlined.2055e192.js";import"./index.81ef6f4a.js";import"./index.f2456bee.js";import"./index.a36fbb7c.js";import"./index.9f889c90.js";import"./index.270163cf.js";import"./zh_CN.0242bd16.js";import{T as E}from"./TableAction.34a184ca.js";import"./index.cbd12732.js";import"./CaretDownFilled.bbefe251.js";import"./CheckOutlined.a5fdbd04.js";import"./CloseOutlined.64314fd9.js";import{s as y}from"./EditTableHeaderIcon.76c5f731.js";import"./DownOutlined.163b95e7.js";import"./FullscreenOutlined.3b09f301.js";import"./LeftOutlined.5f75eb1f.js";import"./functional.5a9182aa.js";import"./RedoOutlined.0a5e4c4b.js";import"./RightOutlined.94af8b13.js";import"./SettingOutlined.1bc0aa51.js";import"./useTimeout.a028e2d1.js";import"./tsxHelper.23698464.js";import"./domUtils.31b70c37.js";import"./index.5af0c53a.js";import"./resizeEvent.6c27db1d.js";import"./useDescription.1394fdac.js";import"./index.113c350f.js";import"./index.873cd9b9.js";import"./index.bc4d46ae.js";import"./useForm.08101b0a.js";import{a as R}from"./index.009e9369.js";import"./useWindowSizeFn.5af43173.js";import"./useFullScreen.891b55e2.js";import"./uuid.40269c00.js";import"./useExpose.d312b03e.js";import"./index.a0a60a24.js";import{u as T}from"./useTable.c716adce.js";import{getColumns as O}from"./data.748ba973.js";import C from"./DetailModal.660f07b5.js";var h;(h||(h={})).Error="/error";var w=r({name:"ErrorHandler",components:{DetailModal:C,BasicTable:y,TableAction:E},setup(){const r=i(),d=i([]),{t:m}=o(),[l,{setTableData:c}]=T({title:m("sys.errorLog.tableTitle"),columns:O(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[p,{openModal:f}]=R();return t((()=>n.getErrorInfoState),(e=>{s((()=>{c(a(e))}))}),{immediate:!0}),{register:l,registerModal:p,handleDetail:function(e){r.value=e,f(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){d.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:async function(){await e.request({url:h.Error,method:"GET"})},imgListRef:d,rowInfoRef:r,t:m}}});const D={class:"p-4"};w.render=function(e,r,i,o,t,s){const a=d("DetailModal"),n=d("a-button"),E=d("TableAction"),y=d("BasicTable");return m(),l("div",D,[(m(!0),l(c,null,p(e.imgListRef,(e=>f((m(),l("img",{key:e,src:e},null,8,["src"])),[[j,!1]]))),128)),u(a,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),u(y,{onRegister:e.register,class:"error-handle-table"},{toolbar:b((()=>[u(n,{onClick:e.fireVueError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireResourceError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),u(n,{onClick:e.fireAjaxError,type:"primary"},{default:b((()=>[x(g(e.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:b((({record:r})=>[u(E,{actions:[{label:e.t("sys.errorLog.tableActionDesc"),onClick:e.handleDetail.bind(null,r)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default w;