import{a as e,r as t,h as a,f as n,i as s,o as l,j as c,k as o,w as i,p as d}from"./index.5d3f6cb5.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.70efe216.js";import{a as r}from"./index.f85aa6bf.js";import"./useTimeout.a028e2d1.js";import"./tsxHelper.23698464.js";import"./index.f3ab5b5b.js";import"./domUtils.31b70c37.js";import"./index.5af0c53a.js";import"./resizeEvent.6c27db1d.js";import"./animation.cbaf969b.js";import"./useScrollTo.e7559bfd.js";import{B as p,t as u}from"./data.627d9667.js";var f=e({components:{BasicTree:p,CollapseContainer:r},setup(){const e=t(null),{createMessage:s}=a();function l(){const t=n(e);if(!t)throw new Error("tree is null!");return t}return{treeData:u,treeRef:e,handleLevel:function(e){l().filterByLevel(e)},handleSetCheckData:function(){l().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=l().getCheckedKeys();s.success(JSON.stringify(e))},handleSetSelectData:function(){l().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=l().getSelectedKeys();s.success(JSON.stringify(e))},handleSetExpandData:function(){l().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=l().getExpandedKeys();s.success(JSON.stringify(e))},appendNodeByKey:function(e=null){l().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){l().deleteNodeByKey(e)},updateNodeByKey:function(e){l().updateNodeByKey(e,{title:"parent2-new"})}}}});const m={class:"p-4"},y={class:"mb-4"},C=d("显示到第2级"),h=d("显示到第1级"),k=d("设置勾选数据"),K=d("获取勾选数据"),S=d("设置选中数据"),b=d("获取选中数据"),j=d("设置展开数据"),D=d("获取展开数据"),x={class:"mb-4"},_=d("添加根节点"),B=d("添加在parent3内添加节点"),N=d("删除parent3节点"),v=d("更新parent2节点");f.render=function(e,t,a,n,d,r){const p=s("a-button"),u=s("BasicTree"),f=s("CollapseContainer");return l(),c("div",m,[o("div",y,[o(p,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:i((()=>[C])),_:1}),o(p,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:i((()=>[h])),_:1}),o(p,{onClick:e.handleSetCheckData,class:"mr-2"},{default:i((()=>[k])),_:1},8,["onClick"]),o(p,{onClick:e.handleGetCheckData,class:"mr-2"},{default:i((()=>[K])),_:1},8,["onClick"]),o(p,{onClick:e.handleSetSelectData,class:"mr-2"},{default:i((()=>[S])),_:1},8,["onClick"]),o(p,{onClick:e.handleGetSelectData,class:"mr-2"},{default:i((()=>[b])),_:1},8,["onClick"]),o(p,{onClick:e.handleSetExpandData,class:"mr-2"},{default:i((()=>[j])),_:1},8,["onClick"]),o(p,{onClick:e.handleGetExpandData,class:"mr-2"},{default:i((()=>[D])),_:1},8,["onClick"])]),o("div",x,[o(p,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:i((()=>[_])),_:1}),o(p,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:i((()=>[B])),_:1}),o(p,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:i((()=>[N])),_:1}),o(p,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:i((()=>[v])),_:1})]),o(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:i((()=>[o(u,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])};export default f;