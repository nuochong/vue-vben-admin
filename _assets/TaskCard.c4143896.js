let a=document.createElement("style");a.innerHTML=".task-card[data-v-bcc45f4e]{display:flex;width:calc(100% - 24px);height:199px;padding:24px 20px 12px 16px;margin:0 12px 12px;background:#fff;border:1px solid #ececf2;border-radius:12px;flex-direction:column}.task-card-header[data-v-bcc45f4e]{display:flex;width:100%;justify-content:space-between;align-items:center}.task-card__tag[data-v-bcc45f4e]{display:inline-block;padding:4px 6px;font-family:PingFangSC-Regular;font-size:12px;border-radius:6px}.task-card__tag.success[data-v-bcc45f4e]{color:#55d187;background:rgba(85,209,135,.16)}.task-card__tag.warn[data-v-bcc45f4e]{color:#ffa07d;background:#ffd16416}.task-card__tag.done[data-v-bcc45f4e]{color:#0593ff;background:#0593ff16}.task-card__info[data-v-bcc45f4e]{display:flex;flex-direction:column}.task-card__title[data-v-bcc45f4e]{font-family:PingFangSC-Medium;font-size:16px;line-height:24px;color:rgba(0,0,0,.85)}.task-card__desc[data-v-bcc45f4e]{font-family:PingFangSC-Regular;font-size:12px;line-height:21px;color:#8181a5}.task-card__process-nfo[data-v-bcc45f4e]{display:flex;justify-content:space-between}.task-card__process-nfo span[data-v-bcc45f4e]{font-size:14px;line-height:21px;color:#8181a5}.task-card-footer[data-v-bcc45f4e]{display:flex;width:100%;margin-top:16px;align-items:center;justify-content:space-between}.task-card__date[data-v-bcc45f4e]{font-size:12px;line-height:21px;color:#2c3a61}.task-card__date span[data-v-bcc45f4e]{color:#7c8087}.task-card__avatar[data-v-bcc45f4e]{display:flex}",document.head.appendChild(a);import{a as e,I as s,d9 as t,da as c,i as n,o as r,j as i,k as d,n as o,bp as f,p}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./CheckOutlined.8b8f8ab7.js";import{A as l}from"./index.1ba525ec.js";import"./types.d260ef98.js";import{P as x}from"./index.bc87bef6.js";var b=e({name:"GrowCard",components:{Progress:x,Avatar:l},props:{info:{type:Object,default:null}},setup:a=>({prefixCls:"task-card",text:s((()=>{const{status:e}=a.info||{};return"active"===e?"进度正常":"exception"===e?"进度滞后":"项目完成"}))})});const _=f("data-v-bcc45f4e");t("data-v-bcc45f4e");const u=d("span",null,"进度",-1),g=p(" 更新日期: "),v=p("+3");c();const m=_(((a,e,s,t,c,f)=>{const p=n("Progress"),l=n("Avatar");return r(),i("div",{class:a.prefixCls},[d("div",{class:`${a.prefixCls}-header`},[d("div",{class:`${a.prefixCls}__info`},[d("span",{class:`${a.prefixCls}__title`},o(a.info.title),3),d("span",{class:`${a.prefixCls}__desc`},o(a.info.desc),3)],2),d("span",{class:`${a.prefixCls}__tag ${a.info.status}`},o(a.info.text),3)],2),d("div",{class:`${a.prefixCls}-body mt-5`},[d("div",{class:`${a.prefixCls}__process-nfo`},[u,d("span",null,o(a.info.percent)+"%",1)],2),d(p,{percent:a.info.percent,showInfo:!1,status:a.info.status},null,8,["percent","status"])],2),d("div",{class:`${a.prefixCls}-footer`},[d("span",{class:`${a.prefixCls}__date`},[g,d("span",null,o(a.info.updateTime),1)],2),d("div",{class:`${a.prefixCls}__avatar`},[d(l,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),d(l,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),d(l,null,{default:_((()=>[v])),_:1})],2)],2)],2)}));b.render=m,b.__scopeId="data-v-bcc45f4e";export default b;