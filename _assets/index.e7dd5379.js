let e=document.createElement("style");e.innerHTML=".demo-box[data-v-4c00886b]{display:flex;width:100%;height:300px;font-size:24px;color:#fff;background:#408ede;border-radius:10px;justify-content:center;align-items:center}",document.head.appendChild(e);import{a as t,r as i,i as s,o as n,j as a,k as r,n as d,bp as o}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./index.1ba525ec.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./usePageContext.5e891747.js";import"./types.d260ef98.js";import"./index.c6a9e5cf.js";import"./transButton.295c4225.js";import{s as c}from"./index.7bdbbe2a.js";import{s as l}from"./index.16d46915.js";var p=t({components:{ClickOutSide:l,PageWrapper:c},setup(){const e=i("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const u=o("data-v-4c00886b"),m=u(((e,t,i,o,c,l)=>{const p=s("ClickOutSide"),m=s("PageWrapper");return n(),a(m,{title:"点内外部触发事件"},{default:u((()=>[r(p,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:u((()=>[r("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},d(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));p.render=m,p.__scopeId="data-v-4c00886b";export default p;