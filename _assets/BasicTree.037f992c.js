let e=document.createElement("style");e.innerHTML=".basic-tree{position:relative}.basic-tree-title{position:relative;display:inline-block;width:100%;padding-right:10px}.basic-tree-title:hover .basic-tree__action{visibility:visible}.basic-tree__content{display:inline-block;overflow:hidden}.basic-tree__actions{position:absolute;top:0;right:0;display:flex}.basic-tree__action{margin-left:4px;visibility:hidden}",document.head.appendChild(e);import{f as t,cX as s,cY as n,a as i,b as d,r as a,s as r,cA as c,ad as l,V as o}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./Trigger.bfe12865.js";import{o as y}from"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./index.209318a5.js";import"./types.80de9d94.js";import"./index.a172b251.js";import"./index.23afc8d6.js";import"./index.2c5ff13d.js";import"./index.eb4ddc20.js";import"./CaretDownFilled.b023be26.js";import"./FileOutlined.fc3bf4d5.js";import{T as p}from"./index.0e150eb6.js";import{D as u}from"./DownOutlined.88faef57.js";import{e as f}from"./tsxHelper.de9bad94.js";import"./index.f4b13226.js";import{u as K}from"./useExpose.95c38320.js";import{u as h}from"./useContextMenu.eb9b2b00.js";var b=i({name:"BasicTree",props:{replaceFields:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:null},rightMenuList:{type:Array}},emits:["update:expandedKeys","update:selectedKeys","update:value"],setup(e,{attrs:i,slots:b,emit:m}){const x=d({expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),k=a([]),[g]=h(),j=r((()=>{const{replaceFields:t}=e;return{children:"children",title:"title",key:"key",...t}})),v=r((()=>{const{actionList:t}=e;return{width:`calc(100% - ${18*t.length}px)`}})),_=r((()=>{let s={blockNode:!0,...i,...e,expandedKeys:x.expandedKeys,selectedKeys:x.selectedKeys,checkedKeys:x.checkedKeys,replaceFields:t(j),"onUpdate:expandedKeys":e=>{x.expandedKeys=e,m("update:expandedKeys",e)},"onUpdate:selectedKeys":e=>{x.selectedKeys=e,m("update:selectedKeys",e)},onCheck:e=>{x.checkedKeys=e,m("update:value",e)},onRightClick:D};return s=y(s,"treeData"),s})),B=r((()=>t(k))),{deleteNodeByKey:N,insertNodeByKey:C,filterByLevel:L,updateNodeByKey:w}=function(e,i){return{deleteNodeByKey:function s(n,d){if(!n)return;const a=d||t(e),{key:r,children:c}=t(i);if(c&&r)for(let e=0;e<a.length;e++){const t=a[e],i=t[c];if(t[r]===n){a.splice(e,1);break}i&&i.length&&s(n,t[c])}},insertNodeByKey:function({parentKey:d=null,node:a,push:r="push"}){const c=s(t(e));if(!d)return c[r](a),void(e.value=c);const{key:l,children:o}=t(i);o&&l&&(n(c,(e=>{e[l]===d&&(e[o]=e[o]||[],e[o][r](a))})),e.value=c)},filterByLevel:function s(n=1,d,a=1){if(!n)return[];const r=[],c=d||t(e)||[];for(let e=0;e<c.length;e++){const d=c[e],{key:l,children:o}=t(i),y=l?d[l]:"",p=o?d[o]:[];r.push(y),p&&p.length&&a<n&&(a+=1,r.push(...s(n,p,a)))}return r},updateNodeByKey:function s(n,d,a){if(!n)return;const r=a||t(e),{key:c,children:l}=t(i);if(l&&c)for(let e=0;e<r.length;e++){const t=r[e],i=t[l];if(t[c]===n){r[e]={...r[e],...d};break}i&&i.length&&s(n,d,t[l])}}}}(k,j);function A({data:s}){return s?s.map((s=>{const{title:n,key:i,children:d}=t(j),a=y(s,"title"),r=s;return o(p.TreeNode,{...a,key:null==r?void 0:r[i]},{title:()=>o("span",{class:"basic-tree-title"},o("span",{class:"basic-tree__content",style:t(v)},n&&r[n]),o("span",{class:"basic-tree__actions"}," ",function(t){const{actionList:s}=e;if(s&&0!==s.length)return s.map(((e,s)=>o("span",{key:s,class:"basic-tree__action"},e.render(t))))}(s))),default:()=>A({data:d?r[d]:[]})})})):null}async function D({event:t,node:s}){const{rightMenuList:n=[],beforeRightClick:i}=e;let d=[];d=i&&c(i)?await i(s):n,d.length&&g({event:t,items:d})}return l((()=>{k.value=e.treeData,x.expandedKeys=e.expandedKeys,x.selectedKeys=e.selectedKeys,x.checkedKeys=e.checkedKeys})),K({setExpandedKeys:function(e){x.expandedKeys=e},getExpandedKeys:function(){return x.expandedKeys},setSelectedKeys:function(e){x.selectedKeys=e},getSelectedKeys:function(){return x.selectedKeys},setCheckedKeys:function(e){x.checkedKeys=e},getCheckedKeys:function(){return x.checkedKeys},insertNodeByKey:C,deleteNodeByKey:N,updateNodeByKey:w,filterByLevel:e=>{x.expandedKeys=L(e)}}),()=>o(p,{...t(_),class:"basic-tree"},{switcherIcon:()=>o(u,null),default:()=>A({data:t(B)}),...f(b)})}});export default b;