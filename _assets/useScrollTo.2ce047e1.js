import{r as o,cz as t,f as r,cA as a}from"./index.ef3db6d5.js";import{r as s}from"./animation.ee9e574c.js";function n({el:n,to:c,duration:e=500,callback:l}){const i=o(!1),u=(o=>o.scrollTop)(n),f=c-u;let p=0;e=t(e)?500:e;const m=function(){if(!r(i))return;p+=20;const o=(t=p,c=u,d=f,(t/=e/2)<1?d/2*t*t+c:-d/2*(--t*(t-2)-1)+c);var t,c,d;((o,t)=>{o.scrollTop=t})(n,o),p<e&&r(i)?s(m):l&&a(l)&&l()};return{start:()=>{i.value=!0,m()},stop:()=>{i.value=!1}}}export{n as u};