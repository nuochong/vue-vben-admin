import{r as e,aq as t,O as n,f as o}from"./index.acbb87a5.js";import{u as a}from"./useDebounce.c071ec0c.js";function s({el:s=window,name:i,listener:r,options:m,autoRemove:u=!0,isDebounce:c=!0,wait:v=80}){let d=()=>{};const f=e(!1);if(s){const l=e(s),[b]=c?a(r,v):t(r,v),p=v?b:r,w=e=>{f.value=!0,e.removeEventListener(i,p,m)},E=e=>e.addEventListener(i,p,m),j=n(l,((e,t,n)=>{e&&(!o(f)&&E(e),n((()=>{u&&w(e)})))}),{immediate:!0});d=()=>{w(l.value),j()}}return{removeEvent:d}}export{s as u};