import{d as e,f as t,dx as a,K as s,dy as o,cp as r,cq as n,h as i,o as d,i as l,bw as p,j as u,l as m,m as c}from"./index.cf365317.js";import{A as f}from"./index.fbe41d70.js";import j from"./CurrentPermissionMode.0eab0b08.js";import{_ as R}from"./index.9bd36aa1.js";import"./vendor.3b1829c7.js";import"./index.607b19dc.js";import"./index.327c61a8.js";import"./index.0444d019.js";import"./RightOutlined.dff2a05b.js";import"./EllipsisOutlined.45abe0a5.js";import"./types.d79f185c.js";import"./isEqual.a74a7c19.js";import"./toInteger.4b5728ae.js";import"./DownOutlined.a5bc93c0.js";/* empty css              */import"./index.a1bfa9a8.js";import"./usePageContext.1152815b.js";import"./transButton.43a89275.js";import"./ArrowLeftOutlined.949c5d9e.js";var b=e({components:{Alert:f,CurrentPermissionMode:j,PageWrapper:R},setup(){const{changeRole:e}=o();return{userStore:t,RoleEnum:a,isSuper:s((()=>t.getRoleListState.includes(a.SUPER))),isTest:s((()=>t.getRoleListState.includes(a.TEST))),changeRole:e}}});const g=p("data-v-9a73aaae");r("data-v-9a73aaae");const E=c(" 当前角色: "),S={class:"mt-4"},x=c(" 权限切换(请先切换权限模式为前端角色权限模式): ");n();const y=g(((e,t,a,s,o,r)=>{const n=i("CurrentPermissionMode"),p=i("Alert"),f=i("a-button"),j=i("a-button-group"),R=i("PageWrapper");return d(),l(R,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:g((()=>[u(n),u("p",null,[E,u("a",null,m(e.userStore.getRoleListState),1)]),u(p,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),u("div",S,[x,u(j,null,{default:g((()=>[u(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:g((()=>[c(m(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),u(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:g((()=>[c(m(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));b.render=y,b.__scopeId="data-v-9a73aaae";export default b;