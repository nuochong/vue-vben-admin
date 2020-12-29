import{a as e,h as s,i,o,j as t,k as l,w as r,p as a}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./index.1a9c0d02.js";import"./Trigger.bfe12865.js";import"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06ba6731.js";import"./CheckOutlined.35bd116b.js";import{s as n}from"./index.5586c30e.js";import"./colors.88c331b3.js";import"./RightOutlined.7f7867ab.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import"./index.5d3f872a.js";import"./index.a172b251.js";import"./index.668cd44f.js";import"./UpOutlined.4f317e4e.js";import"./index.2c5ff13d.js";import"./index.1027e3c8.js";import"./index.2cd1edc8.js";import"./index.99070219.js";import{a as c}from"./index.4eeb0172.js";import"./LoadingOutlined.0226bca5.js";import"./RightOutlined.28ca736c.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import"./useAttrs.6880d872.js";import"./index.f4b13226.js";import"./index.ff50ff6b.js";import{u as d}from"./useForm.86f9369f.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>s?"1"===s?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空"),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var m=e({components:{BasicForm:n,CollapseContainer:c},setup(){const{createMessage:e}=s(),[i,{validateFields:o,clearValidate:t,getFieldsValue:l,setFieldsValue:r}]=d({labelWidth:120,schemas:p,actionColOptions:{span:24}});return{register:i,schemas:p,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=l();e.success("values:"+JSON.stringify(s))},setFormValues:function(){r({field1:1111,field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){t()}}}});const u={class:"m-4"},f={class:"mb-4"},j=a("手动校验表单"),b=a("清空校验信息"),g=a("获取表单值"),x=a("设置表单值");m.render=function(e,s,a,n,c,d){const p=i("a-button"),m=i("BasicForm"),v=i("CollapseContainer");return o(),t("div",u,[l("div",f,[l(p,{onClick:e.validateForm,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),l(p,{onClick:e.resetValidate,class:"mr-2"},{default:r((()=>[b])),_:1},8,["onClick"]),l(p,{onClick:e.getFormValues,class:"mr-2"},{default:r((()=>[g])),_:1},8,["onClick"]),l(p,{onClick:e.setFormValues,class:"mr-2"},{default:r((()=>[x])),_:1},8,["onClick"])]),l(v,{title:"表单校验"},{default:r((()=>[l(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;