import{a as e,i,o as t,j as s,k as o}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./index.ef677c95.js";import"./index.6e1ed0cf.js";import"./Trigger.0d1e9c99.js";import"./omit.cd50f989.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.c949c33a.js";import"./CheckOutlined.0f618137.js";import"./index.beeefc20.js";import"./colors.6c5ee752.js";import"./index.aa32687c.js";import"./RightOutlined.fba547ae.js";import"./index.54399c4c.js";import"./types.7e830ab9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.70efe216.js";import"./_baseFor.f4e5f03f.js";import"./index.9ca02ef3.js";import"./index.a172b251.js";import"./index.9250ace7.js";import"./index.055efe2d.js";import"./UpOutlined.c1494348.js";import"./LeftOutlined.2055e192.js";import"./index.81ef6f4a.js";import"./index.f2456bee.js";import"./index.a36fbb7c.js";import"./index.9f889c90.js";import"./index.270163cf.js";import"./zh_CN.0242bd16.js";import"./TableAction.34a184ca.js";import"./index.cbd12732.js";import"./CaretDownFilled.bbefe251.js";import"./CheckOutlined.a5fdbd04.js";import"./CloseOutlined.64314fd9.js";import{s as r}from"./EditTableHeaderIcon.76c5f731.js";import"./DownOutlined.163b95e7.js";import"./FullscreenOutlined.3b09f301.js";import"./LeftOutlined.5f75eb1f.js";import"./functional.5a9182aa.js";import"./RedoOutlined.0a5e4c4b.js";import"./RightOutlined.94af8b13.js";import"./SettingOutlined.1bc0aa51.js";import"./useTimeout.a028e2d1.js";import"./tsxHelper.23698464.js";import"./domUtils.31b70c37.js";import"./index.5af0c53a.js";import"./resizeEvent.6c27db1d.js";import"./index.873cd9b9.js";import"./index.bc4d46ae.js";import"./useForm.08101b0a.js";import"./index.009e9369.js";import"./useWindowSizeFn.5af43173.js";import"./useFullScreen.891b55e2.js";import"./uuid.40269c00.js";import"./useExpose.d312b03e.js";import"./index.a0a60a24.js";import{getBasicColumns as m,getTreeTableData as p}from"./tableData.a982dfb7.js";var a=e({components:{BasicTable:r},setup:()=>({columns:m(),data:p()})});const d={class:"p-4"};a.render=function(e,r,m,p,a,n){const j=i("BasicTable");return t(),s("div",d,[o(j,{rowSelection:{type:"checkbox"},isTreeTable:!0,title:"树形表格",titleHelpMessage:"树形组件不能和序列号列同时存在",columns:e.columns,dataSource:e.data,rowKey:"id",indentSize:20},null,8,["columns","dataSource"])])};export default a;