(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-5822490c":"a490f05a","chunk-b5fecf12":"4e1cc5fc"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5822490c":1,"chunk-b5fecf12":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-5822490c":"f1507c34","chunk-b5fecf12":"fdce140b"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],b.parentNode.removeChild(b),n(c)},b.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var b=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1cdb":function(e,t,n){"use strict";n("cb1d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=n("cf05"),o=n.n(a),c={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},i=Object(r["e"])("img",{src:o.a,alt:"logo",width:"40"},null,-1),l=Object(r["e"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["e"])("span",{class:"navbar-toggler-icon"})],-1),s={class:"collapse navbar-collapse",id:"navbarNav"},f={class:"navbar-nav"},b={class:"nav-item"},d=Object(r["f"])("Home"),p={class:"nav-item"},v=Object(r["f"])("Movies");function h(e,t){var n=Object(r["u"])("router-link"),a=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("nav",c,[Object(r["e"])("div",u,[Object(r["g"])(n,{class:"navbar-brand",to:"/"},{default:Object(r["B"])((function(){return[i]})),_:1}),l,Object(r["e"])("div",s,[Object(r["e"])("ul",f,[Object(r["e"])("li",b,[Object(r["g"])(n,{class:"nav-link",to:"/"},{default:Object(r["B"])((function(){return[d]})),_:1})]),Object(r["e"])("li",p,[Object(r["g"])(n,{class:"nav-link",to:"/Movies"},{default:Object(r["B"])((function(){return[v]})),_:1})])])])])]),Object(r["g"])(a)],64)}n("1cdb");var g=n("6b0d"),m=n.n(g);const O={},j=m()(O,[["render",h]]);var y=j,k=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),w=[{path:"/",name:"Home",component:function(){return n.e("chunk-5822490c").then(n.bind(null,"bb51"))}},{path:"/Movies",name:"Movies",component:function(){return n.e("chunk-b5fecf12").then(n.bind(null,"da27"))}}],_=Object(k["a"])({history:Object(k["b"])(),routes:w}),x=_,P=n("5502"),E=Object(P["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(y).use(E).use(x).mount("#app")},cb1d:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.c2a6927a.js.map