import{r as o,cP as a,f as t,cH as r}from"./index.acbb87a5.js";import{r as s}from"./animation.0ecb044f.js";function c({el:c,to:n,duration:l=500,callback:e}){const i=o(!1),u=(o=>o.scrollTop)(c),f=n-u;let p=0;l=a(l)?500:l;const m=function(){if(!t(i))return;p+=20;const o=(a=p,n=u,b=f,(a/=l/2)<1?b/2*a*a+n:-b/2*(--a*(a-2)-1)+n);var a,n,b;((o,a)=>{o.scrollTop=a})(c,o),p<l&&t(i)?s(m):e&&r(e)&&e()};return{start:()=>{i.value=!0,m()},stop:()=>{i.value=!1}}}export{c as u};