(function(e){function t(t){for(var r,l,i=t[0],c=t[1],s=t[2],p=0,f=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"29ed":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},o=[],l={name:"App"},i=l,c=n("2877"),s=Object(c["a"])(i,a,o,!1,null,null,null),u=s.exports,p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Header"),n("v-main",[n("router-view")],1)],1)},d=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",color:"primary",flat:"",dark:""}},[n("div",{staticClass:"d-flex align-center"})])},h=[],b={name:"Header"},m=b,_=(n("6dd0"),n("6544")),x=n.n(_),y=n("40dc"),g=Object(c["a"])(m,v,h,!1,null,null,null),w=g.exports;x()(g,{VAppBar:y["a"]});var O={name:"Layout",components:{Header:w}},j=O,V=(n("6adb"),n("7496")),E=n("f6c4"),P=Object(c["a"])(j,f,d,!1,null,null,null),k=P.exports;x()(P,{VApp:V["a"],VMain:E["a"]});var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"10",offset:"1"}},[[n("v-expansion-panels",{attrs:{popout:""}},e._l(e.tests,(function(t,r){return n("v-expansion-panel",{key:r},[n("v-expansion-panel-header",[e._v(" "+e._s(t.title)+" ")]),n("v-expansion-panel-content",[n("v-card",[n("v-img",{attrs:{height:"200px",src:"https://picsum.photos/id/870/200/300?grayscale&blur=2"}}),n("v-card-text",[e._v(" "+e._s(t.description)+" ")]),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",to:t.link}},[e._v("Detail")]),n("v-btn",{attrs:{color:"primary"}},[e._v("Example")])],1)],1)],1)],1)})),1)]],2)],1)],1)},$=[],T={name:"Dashboard",data:function(){return{tests:[{id:0,title:"Карта интересов для младших школьников",description:"Для того, чтобы дать вам правильный совет и конкретные рекомендации для развития способностей вашего ребёнка, нам нужно знать его склонности. Вам предлагается 35 вопросов, подумайте и ответьте на каждый из них, стараясь не завышать и не занижать возможности ребёнка. Для большей  объективности сравните его с другими детьми того же возраста.",link:"/first-test"},{id:1,title:"Методика «Тип мышления»",description:"Диагностика типа мышления респондента. Тип мышления – индивидуальный способ преобразования информации. Зная свой тип мышления, можно прогнозировать успешность в конкретных видах профессиональной деятельности.\nУ каждого человека преобладает определенный тип мышления. Данный тест поможет вам определить тип своего мышления. Если вы согласны с высказыванием, то ставите “+”, если не согласны – “-“.",link:"/second-test"}]}}},H=T,M=n("8336"),S=n("b0af"),A=n("99d9"),D=n("62ad"),B=n("a523"),J=n("cd55"),L=n("49e2"),F=n("c865"),I=n("0393"),R=n("adda"),q=n("0fd9"),z=Object(c["a"])(H,C,$,!1,null,null,null),G=z.exports;x()(z,{VBtn:M["a"],VCard:S["a"],VCardActions:A["a"],VCardText:A["b"],VCol:D["a"],VContainer:B["a"],VExpansionPanel:J["a"],VExpansionPanelContent:L["a"],VExpansionPanelHeader:F["a"],VExpansionPanels:I["a"],VImg:R["a"],VRow:q["a"]});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Hello first test")])},N=[],Q={name:"TestPage"},U=Q,W=Object(c["a"])(U,K,N,!1,null,"c87fdfde",null),X=W.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Error page")])},Z=[],ee={name:"Error"},te=ee,ne=Object(c["a"])(te,Y,Z,!1,null,null,null),re=ne.exports;r["a"].use(p["a"]);var ae=new p["a"]({routes:[{path:"/",name:"Layout",component:k,redirect:G,children:[{path:"/dashboard",name:"Dashboard",component:G},{path:"/first-test",name:"FirstTest",component:X}]},{path:"*",name:"Error",component:re}]}),oe=n("f309");r["a"].use(oe["a"]);var le=new oe["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:le,router:ae,render:function(e){return e(u)}}).$mount("#app")},"6adb":function(e,t,n){"use strict";n("8680")},"6dd0":function(e,t,n){"use strict";n("29ed")},8680:function(e,t,n){}});
//# sourceMappingURL=app.aa0109ef.js.map