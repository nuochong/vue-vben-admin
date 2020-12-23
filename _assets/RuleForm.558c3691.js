import{a as e,h as s,i,o,j as l,k as a,w as t,p as r}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./index.6e1ed0cf.js";import"./Trigger.0d1e9c99.js";import"./omit.cd50f989.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.c949c33a.js";import"./CheckOutlined.0f618137.js";import{s as n}from"./index.beeefc20.js";import"./colors.6c5ee752.js";import"./RightOutlined.fba547ae.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.70efe216.js";import"./index.9ca02ef3.js";import"./index.a172b251.js";import"./index.055efe2d.js";import"./UpOutlined.c1494348.js";import"./index.81ef6f4a.js";import"./index.f2456bee.js";import"./index.9f889c90.js";import"./index.cbd12732.js";import{a as c}from"./index.f85aa6bf.js";import"./useTimeout.a028e2d1.js";import"./tsxHelper.23698464.js";import"./index.f3ab5b5b.js";import"./domUtils.31b70c37.js";import"./index.5af0c53a.js";import"./resizeEvent.6c27db1d.js";import"./animation.cbaf969b.js";import"./useScrollTo.e7559bfd.js";import"./index.873cd9b9.js";import"./index.bc4d46ae.js";import{u as p}from"./useForm.08101b0a.js";const d=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa"}]},{field:"field44",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:async(e,s)=>"1"===s?Promise.reject("值不能为1"):Promise.resolve(),trigger:"blur"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]}];var m=e({components:{BasicForm:n,CollapseContainer:c},setup(){const{createMessage:e}=s(),[i,{validateFields:o,clearValidate:l,getFieldsValue:a,setFieldsValue:t}]=p({labelWidth:120,schemas:d,actionColOptions:{span:24}});return{register:i,schemas:d,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},getFormValues:function(){const s=a();e.success("values:"+JSON.stringify(s))},setFormValues:function(){t({field1:"1111",field5:["1"],field7:"1"})},validateForm:async function(){try{await o()}catch(e){}},resetValidate:async function(){l()}}}});const u={class:"m-4"},f={class:"mb-4"},b=r("手动校验表单"),j=r("清空校验信息"),x=r("获取表单值"),g=r("设置表单值");m.render=function(e,s,r,n,c,p){const d=i("a-button"),m=i("BasicForm"),v=i("CollapseContainer");return o(),l("div",u,[a("div",f,[a(d,{onClick:e.validateForm,class:"mr-2"},{default:t((()=>[b])),_:1},8,["onClick"]),a(d,{onClick:e.resetValidate,class:"mr-2"},{default:t((()=>[j])),_:1},8,["onClick"]),a(d,{onClick:e.getFormValues,class:"mr-2"},{default:t((()=>[x])),_:1},8,["onClick"]),a(d,{onClick:e.setFormValues,class:"mr-2"},{default:t((()=>[g])),_:1},8,["onClick"])]),a(v,{title:"表单校验"},{default:t((()=>[a(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default m;