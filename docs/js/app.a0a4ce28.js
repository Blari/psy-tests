(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/psy-tests/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a1b":function(t,e,n){},"13ec":function(t,e,n){"use strict";n("9138")},"29ed":function(t,e,n){},"2c81":function(t,e,n){t.exports=n.p+"img/404.62ce9e27.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},o=[],i={name:"App"},s=i,c=n("2877"),l=Object(c["a"])(s,a,o,!1,null,null,null),u=l.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("v-main",[n("router-view")],1)],1)},f=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",color:"primary",flat:"",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-btn",{attrs:{icon:"",to:"dashboard"}},[n("v-icon",[t._v("mdi-home")])],1)],1)])},m=[],b={name:"Header"},h=b,_=(n("6dd0"),n("6544")),x=n.n(_),y=n("40dc"),V=n("8336"),g=n("132d"),w=Object(c["a"])(h,v,m,!1,null,null,null),O=w.exports;x()(w,{VAppBar:y["a"],VBtn:V["a"],VIcon:g["a"]});var j={name:"Layout",components:{Header:O}},C=j,E=(n("6adb"),n("7496")),P=n("f6c4"),k=Object(c["a"])(C,d,f,!1,null,null,null),q=k.exports;x()(k,{VApp:E["a"],VMain:P["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"10",offset:"1"}},[[n("v-expansion-panels",{attrs:{popout:""}},t._l(t.tests,(function(e,r){return n("v-expansion-panel",{key:r},[n("v-expansion-panel-header",[t._v(" "+t._s(e.title)+" ")]),n("v-expansion-panel-content",[n("v-card",[n("v-img",{attrs:{height:"200px",src:"https://picsum.photos/id/870/200/300?grayscale&blur=2"}}),n("v-card-text",[t._v(" "+t._s(e.description)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",to:e.link}},[t._v("Detail")]),n("v-btn",{attrs:{color:"primary"}},[t._v("Example")])],1)],1)],1)],1)})),1)]],2)],1)],1)},$=[],A={name:"Dashboard",data:function(){return{tests:[{id:0,title:"Карта интересов для младших школьников",description:"Для того, чтобы дать вам правильный совет и конкретные рекомендации для развития способностей вашего ребёнка, нам нужно знать его склонности. Вам предлагается 35 вопросов, подумайте и ответьте на каждый из них, стараясь не завышать и не занижать возможности ребёнка. Для большей  объективности сравните его с другими детьми того же возраста.",link:"/first-test"},{id:1,title:"Методика «Тип мышления»",description:"Диагностика типа мышления респондента. Тип мышления – индивидуальный способ преобразования информации. Зная свой тип мышления, можно прогнозировать успешность в конкретных видах профессиональной деятельности.\nУ каждого человека преобладает определенный тип мышления. Данный тест поможет вам определить тип своего мышления. Если вы согласны с высказыванием, то ставите “+”, если не согласны – “-“.",link:"/second-test"}]}}},M=A,S=n("b0af"),B=n("99d9"),H=n("62ad"),D=n("a523"),I=n("cd55"),R=n("49e2"),J=n("c865"),L=n("0393"),F=n("adda"),N=n("0fd9"),z=Object(c["a"])(M,T,$,!1,null,null,null),G=z.exports;x()(z,{VBtn:V["a"],VCard:S["a"],VCardActions:B["a"],VCardText:B["b"],VCol:H["a"],VContainer:D["a"],VExpansionPanel:I["a"],VExpansionPanelContent:R["a"],VExpansionPanelHeader:J["a"],VExpansionPanels:L["a"],VImg:F["a"],VRow:N["a"]});var K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"10",offset:"1"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("v-card",[n("v-card-text",[n("p",[t._v(t._s(t.tests[t.id].title))]),n("p",[t._v(t._s(t.tests[t.id].description))]),n("p",[t._v(t._s(t.tests[t.id].question))])]),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",disabled:t.id===t.tests.length-1},on:{click:function(e){t.id++}}},[t._v("Next")]),n("v-btn",{attrs:{color:"secondary",disabled:0===t.id},on:{click:function(e){t.id--}}},[t._v("Prev")])],1)],1)],1)],1)],1)],1)},Q=[],U={name:"TestPage",data:function(){return{id:0,title:"title",description:"description",question:"question",tests:[{id:0,title:"Карта интересов для младших школьников",description:"Для того, чтобы дать вам правильный совет и конкретные рекомендации для развития способностей вашего ребёнка, нам нужно знать его склонности. Вам предлагается 35 вопросов, подумайте и ответьте на каждый из них, стараясь не завышать и не занижать возможности ребёнка. Для большей  объективности сравните его с другими детьми того же возраста.",link:"/first-test",question:"question1"},{id:1,title:"Методика «Тип мышления»",description:"Диагностика типа мышления респондента. Тип мышления – индивидуальный способ преобразования информации. Зная свой тип мышления, можно прогнозировать успешность в конкретных видах профессиональной деятельности.\nУ каждого человека преобладает определенный тип мышления. Данный тест поможет вам определить тип своего мышления. Если вы согласны с высказыванием, то ставите “+”, если не согласны – “-“.",link:"/second-test",question:"question2"}]}},methods:{}},W=U,X=(n("9a64"),Object(c["a"])(W,K,Q,!1,null,null,null)),Y=X.exports;x()(X,{VBtn:V["a"],VCard:S["a"],VCardActions:B["a"],VCardText:B["b"],VCol:H["a"],VContainer:D["a"],VRow:N["a"]});var Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"error-page"},[r("v-row",[r("v-col",{attrs:{cols:"5"}},[r("v-img",{staticClass:"mx-auto",attrs:{src:n("2c81"),"max-width":"600"}})],1)],1)],1)},tt=[],et={name:"Error"},nt=et,rt=(n("13ec"),Object(c["a"])(nt,Z,tt,!1,null,null,null)),at=rt.exports;x()(rt,{VCol:H["a"],VContainer:D["a"],VImg:F["a"],VRow:N["a"]}),r["a"].use(p["a"]);var ot=new p["a"]({mode:"history",routes:[{path:"/",name:"Layout",component:q,redirect:G,children:[{path:"/dashboard",name:"Dashboard",component:G},{path:"/first-test",name:"FirstTest",component:Y},{path:"*",name:"Error",component:at}]}]}),it=n("f309");r["a"].use(it["a"]);var st=new it["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:st,router:ot,render:function(t){return t(u)}}).$mount("#app")},"6adb":function(t,e,n){"use strict";n("8680")},"6dd0":function(t,e,n){"use strict";n("29ed")},8680:function(t,e,n){},9138:function(t,e,n){},"9a64":function(t,e,n){"use strict";n("0a1b")}});
//# sourceMappingURL=app.a0a4ce28.js.map