(function(){"use strict";var t={6190:function(t,e,n){var r=n(9242),a=n(3396);const o={class:"container with-nav"};function i(t,e,n,r,i,s){const u=(0,a.up)("the-navbar"),c=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u),(0,a._)("div",o,[(0,a.Wm)(c)])],64)}const s={class:"navbar"},u=(0,a._)("h3",null," Freelance ",-1),c={class:"navbar-menu"},l=(0,a.Uk)("Все задачи"),d=(0,a.Uk)("Создать");function f(t,e,n,r,o,i){const f=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",s,[u,(0,a._)("ul",c,[(0,a._)("li",null,[(0,a.Wm)(f,{to:"/"},{default:(0,a.w5)((()=>[l])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(f,{to:"/new"},{default:(0,a.w5)((()=>[d])),_:1})])])])}var p={},v=n(89);const m=(0,v.Z)(p,[["render",f]]);var k=m,g={components:{TheNavbar:k}};const h=(0,v.Z)(g,[["render",i]]);var b=h,y=n(8057),w=n(4239);(0,r.ri)(b).use(w.Z).use(y.Z).mount("#app")},8057:function(t,e,n){n.d(e,{Z:function(){return w}});var r=n(678),a=n(3396),o=n(7139);const i={key:0},s={class:"text-white"},u=["id"],c={class:"card-title"},l=(0,a.Uk)("Посмотреть"),d={key:1,class:"text-white center"};function f(t,e,n,r,f,p){const v=(0,a.up)("AppStatus"),m=(0,a.up)("router-link");return r.tasks.length?((0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("h3",s,"Всего активных задач: "+(0,o.zw)(r.activeTaskCounter),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.tasks,((t,e)=>((0,a.wg)(),(0,a.iD)("div",{id:e,class:"card",key:t.id},[(0,a._)("h2",c,[(0,a.Uk)((0,o.zw)(t.title)+" ",1),(0,a.Wm)(v,{type:t.status},null,8,["type"])]),(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("small",null,(0,o.zw)(new Date(t.date).toLocaleDateString()),1)])]),(0,a.Wm)(m,{to:"/task/"+t.id,class:"btn primary"},{default:(0,a.w5)((()=>[l])),_:2},1032,["to"])],8,u)))),128))])):((0,a.wg)(),(0,a.iD)("h1",d,"Задач пока нет"))}var p=n(1060),v=n(4239),m={setup(){const t=(0,a.Fl)((()=>v.Z.getters.tasks)),e=(0,a.Fl)((()=>v.Z.getters.activeTasksCount));return{tasks:t,activeTaskCounter:e}},components:{AppStatus:p.Z}},k=n(89);const g=(0,k.Z)(m,[["render",f]]);var h=g;const b=[{path:"/",name:"tasks",component:h},{path:"/task/:id",name:"task",component:()=>n.e(930).then(n.bind(n,1366))},{path:"/new",name:"new",component:()=>n.e(443).then(n.bind(n,9480))}],y=(0,r.p7)({history:(0,r.PO)("/"),routes:b,linkExactActiveClass:"active",linkActiveClass:"active"});var w=y},4239:function(t,e,n){var r=n(65);e["Z"]=(0,r.MT)({state:{tasks:JSON.parse(localStorage.getItem("tasks")||"[]").map((t=>(new Date(t.date)<new Date&&(t.status="outdated"),t)))},getters:{tasks:t=>t.tasks,taskById:t=>e=>t.tasks.find((t=>t.id===e)),activeTasksCount(t){return t.tasks.filter((t=>"active"===t.status)).length}},mutations:{createTask(t,e){t.tasks.push(e),localStorage.setItem("tasks",JSON.stringify(t.tasks))},changeTask(t,e){const n=t.tasks.findIndex((t=>t.id===e.id));t.tasks[n]=e,localStorage.setItem("tasks",JSON.stringify(t.tasks))}},actions:{createTask({commit:t},e){t("createTask",e)},changeTask({commit:t},e){t("changeTask",e)}},modules:{}})},1060:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(3396),a=n(7139);function o(t,e,n,o,i,s){return(0,r.wg)(),(0,r.iD)("span",{class:(0,a.C_)(["badge",o.statusClassName])},(0,a.zw)(o.statusText),3)}n(6699);var i=n(4870),s={props:{title:String,type:{type:String,default:"badge",validator(t){return["active","done","cancelled","badge","outdated","performed"].includes(t)}}},setup(t){const e={active:"primary",done:"primary",performed:"primary",cancelled:"danger",outdated:"warning"},n={active:"Активен",done:"Выполнен",performed:"Выполненяется",cancelled:"Отменен",outdated:"Просрочен"},a=(0,i.iH)(e[t.type]),o=(0,i.iH)(n[t.type]);return(0,r.YP)(t,(t=>{a.value=e[t.type],o.value=n[t.type]})),{statusClassName:a,statusText:o}}},u=n(89);const c=(0,u.Z)(s,[["render",o]]);var l=c}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,o){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],o=t[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(l--,1);var c=a();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{443:"about",930:"task"}[t]+"."+{443:"43615e76",930:"95754939"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="freelance:";n.l=function(r,a,o,i){if(t[r])t[r].push(a);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+o),s.src=r),t[r]=[a];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var a=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,o,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(u)var l=u(n)}for(e&&e(r);c<i.length;c++)o=i[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunkfreelance"]=self["webpackChunkfreelance"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6190)}));r=n.O(r)})();
//# sourceMappingURL=app.dfb7c65c.js.map