"use strict";(self["webpackChunkfreelance"]=self["webpackChunkfreelance"]||[]).push([[443],{9480:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var i=l(3396),a=l(9242);const n=(0,i._)("h1",null,"Создать новую задачу",-1),r={class:"form-control"},s=(0,i._)("label",{for:"title"},"Название",-1),d={class:"form-control"},u=(0,i._)("label",{for:"date"},"Дата дэдлайна",-1),o={class:"form-control"},c=(0,i._)("label",{for:"description"},"Описание",-1),p=["disabled"];function b(e,t,l,b,f,v){return(0,i.wg)(),(0,i.iD)("form",{class:"card",onSubmit:t[3]||(t[3]=(0,a.iM)(((...e)=>b.submitHundler&&b.submitHundler(...e)),["prevent"]))},[n,(0,i._)("div",r,[s,(0,i.wy)((0,i._)("input",{type:"text",id:"title","onUpdate:modelValue":t[0]||(t[0]=e=>b.title=e)},null,512),[[a.nr,b.title]])]),(0,i._)("div",d,[u,(0,i.wy)((0,i._)("input",{type:"date",id:"date","onUpdate:modelValue":t[1]||(t[1]=e=>b.date=e)},null,512),[[a.nr,b.date]])]),(0,i._)("div",o,[c,(0,i.wy)((0,i._)("textarea",{id:"description","onUpdate:modelValue":t[2]||(t[2]=e=>b.description=e)},null,512),[[a.nr,b.description]])]),(0,i._)("button",{class:"btn primary",disabled:b.isDisabled,type:"submit"},"Создать",8,p)],32)}var f=l(4870),v=l(8057),m=l(4239),_={setup(){const e=(0,f.iH)(""),t=(0,f.iH)(""),l=(0,f.iH)(""),a=(0,i.Fl)((()=>""===e.value||""===t.value||""===l.value));function n(){const i={title:e.value,date:t.value,description:l.value,id:Date.now(),status:"active"};m.Z.dispatch("createTask",i),v.Z.push("/")}return{title:e,date:t,description:l,isDisabled:a,submitHundler:n}}},w=l(89);const y=(0,w.Z)(_,[["render",b]]);var h=y}}]);
//# sourceMappingURL=about.43615e76.js.map