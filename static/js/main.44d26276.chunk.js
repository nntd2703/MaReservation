(this.webpackJsonpreservation=this.webpackJsonpreservation||[]).push([[0],{149:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(90),n(14)),l=n(15),s=n(17),u=n(16),m=n(18),f=(n(91),n(25)),v=n(33),h=[{name:"Home",to:"/",exact:!0},{name:"Reservation",to:"/reservation",exact:!1}],d=function(e){var t=e.label,n=e.to,a=e.activeOnlyWhenExact;return r.a.createElement(f.a,{path:n,exact:a,children:function(e){var a=e.match?"active abc":"";return r.a.createElement("li",{className:"my-li ".concat(a)},r.a.createElement(v.b,{to:n,className:"my-link"},t))}})},p=(a.Component,function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null," Home Page "),r.a.createElement(v.b,{to:"/reservation"},"About"))}}]),t}(a.Component)),b=n(151),E=n(152),g=n(153),w=(n(97),n(82)),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,null,r.a.createElement(E.a,null,r.a.createElement(g.a,{md:6,xs:12},r.a.createElement("div",{className:"reservation"},r.a.createElement("div",{class:"header"},r.a.createElement("span",{className:"tit2"},"Reservation"),r.a.createElement("h3",{className:"tit3"}," Book Table ")),r.a.createElement("div",{className:"form"},r.a.createElement(w.DateTimePicker,{defaultValue:new Date})))),r.a.createElement(g.a,{md:6,xs:12},r.a.createElement("div",{className:"image"},"Image will be display here")))))}}]),t}(a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null)}}]),t}(a.Component),y=[{path:"/",exact:!0,main:function(){return r.a.createElement(p,null)}},{path:"/reservation",exact:!1,main:function(){return r.a.createElement(O,null)}}],k=(n(146),n(147),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).showContentMenu=function(e){var t=null;return e.length>0&&(t=e.map((function(e,t){return r.a.createElement(f.a,{key:t,path:e.path,exact:e.exact,component:e.main})}))),t},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f.c,null,this.showContentMenu(y))))}}]),t}(a.Component)),x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var C=n(57),W=n.n(C),R=n(84),A=n.n(R);W.a.locale("vi"),A()(),c.a.render(r.a.createElement(k,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/MaReservation",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/MaReservation","/service-worker.js");x?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):N(e)}))}}()},85:function(e,t,n){e.exports=n(149)},90:function(e,t,n){},91:function(e,t,n){},97:function(e,t,n){}},[[85,1,2]]]);
//# sourceMappingURL=main.44d26276.chunk.js.map