import{aU as t,r as e,cX as n,f as s,a,Q as c,o as i,j as o,x as r,y as u}from"./index.5d3f6cb5.js";var l=a({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(a,{emit:i}){const o=e(null);return function(a,c,i="click"){if(t)return;const o=e(!1);function r(t){if("touchend"===t.type&&(o.value=!0),"click"===t.type&&s(o))return;const e=a.value;e&&t.target&&!e.contains(t.target)&&c(t)}n({el:document,name:"touchend",listener:r,options:!0}),n({el:document,name:i,listener:r,options:!0})}(o,(()=>{i("clickOutside")})),c((()=>{i("mounted")})),{wrap:o}}});const d={ref:"wrap"};l.render=function(t,e,n,s,a,c){return i(),o("div",d,[r(t.$slots,"default")],512)},u(l);export{l as s};