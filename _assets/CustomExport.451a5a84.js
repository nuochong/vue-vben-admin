import{a as e,i,o as t,j as o,w as s,k as r,p as a}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./useSortable.b798defb.js";import"./index.54ab32c1.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./CheckOutlined.8b8f8ab7.js";import"./index.5edef697.js";import"./index.278c333c.js";import"./index.1ba525ec.js";import"./colors.eda34fc4.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./usePageContext.5e891747.js";import"./types.d260ef98.js";import"./index.fa2eab41.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import"./index.c6a9e5cf.js";import"./index.6512df14.js";import"./UpOutlined.d1c97ab1.js";import"./LeftOutlined.a2747bf9.js";import"./index.a1f247c9.js";import"./index.0408e61a.js";import"./index.c4bc0140.js";import"./index.b11d4af1.js";import"./index.e0f7086f.js";import"./index.98ac4cc3.js";import"./zh_CN.0242bd16.js";import"./index.c0281d12.js";import"./index.bc87bef6.js";import"./index.eb3c5efe.js";import"./CaretDownFilled.332f9000.js";import"./transButton.295c4225.js";import"./index.c41153d6.js";import"./CheckOutlined.5f43e1c7.js";import"./CloseOutlined.512f8bf6.js";import{s as d}from"./index.a2ab4abb.js";import"./FullscreenOutlined.00c2852f.js";import"./index.9d0f3fe7.js";import"./RightOutlined.a8a05276.js";import"./SettingOutlined.33e8a940.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import{s as n}from"./index.7bdbbe2a.js";import"./useAttrs.fddcc395.js";import{a as p}from"./index.ca362417.js";import"./useWindowSizeFn.b2871292.js";import"./index.97911cfc.js";import"./uuid.40269c00.js";import"./download.167d838b.js";import"./useForm.9a3cc7ae.js";import"./useExpose.37206cdb.js";import{c as m,d as c,j}from"./data.2945f328.js";import{E as l}from"./index.5c40fd88.js";var f=e({components:{BasicTable:d,ExpExcelModel:l,PageWrapper:n},setup(){const[e,{openModal:i}]=p();return{defaultHeader:function({filename:e,bookType:i}){j({data:c,filename:e,write2excelOpts:{bookType:i}})},columns:m,data:c,register:e,openModal:i}}});const u=a("导出");f.render=function(e,a,d,n,p,m){const c=i("a-button"),j=i("BasicTable"),l=i("ExpExcelModel"),f=i("PageWrapper");return t(),o(f,{title:"导出示例",content:"可以选择导出格式"},{default:s((()=>[r(j,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:s((()=>[r(c,{onClick:e.openModal},{default:s((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),r(l,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default f;