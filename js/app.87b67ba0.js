(function(t){function e(e){for(var a,r,l=e[0],i=e[1],c=e[2],p=0,m=[];p<l.length;p++)r=l[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,l=1;l<s.length;l++){var i=s[l];0!==n[i]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},o=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",[a("img",{attrs:{src:s("5b62")}}),a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/browsers"}},[t._v("Browsers")])],1)])]),a("router-view"),a("img",{staticStyle:{position:"absolute",left:"5px",bottom:"5px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-No%20longer%20available-inactive.svg"}}),a("img",{staticStyle:{position:"absolute",left:"5px",bottom:"59px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-Available%20soon-yellow.svg"}}),a("img",{staticStyle:{position:"absolute",left:"5px",bottom:"86px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-Working-success.svg"}}),a("img",{staticStyle:{position:"absolute",left:"5px",bottom:"32px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-Blocked by LSR7-red.svg"}}),a("span",{staticStyle:{"font-size":"15px",position:"absolute",left:"5px",bottom:"111px"}},[t._v("What do the colors mean?")])],1)},o=[],r={name:"App",metaInfo:{title:"",titleTemplate:"%s • Th@t0ne1rishPqtato",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"}]}},l=r,i=(s("034f"),s("2877")),c=Object(i["a"])(l,n,o,!1,null,null,null),u=c.exports,p=s("8c4f"),m=s("58ca"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",[a("span",{staticClass:"title"},[a("img",{staticClass:"shadow",attrs:{src:s("5b62")}})]),a("h3",[t._v("Please select a category above.")])])])}],b={name:"Home",metaInfo:{title:"Home"}},d=b,g=Object(i["a"])(d,f,h,!1,null,null,null),v=g.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"browsers"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("Browsers")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},x=[],w={name:"Browsers",metaInfo:{title:"Browsers"},data:function(){return{items:[{name:"Simple Calculator",color:"success",url:"#/simplecalculator"}]}}},y=w,C=Object(i["a"])(y,_,x,!1,null,null,null),j=C.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"extensions"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("Extensions")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},k=[],A={name:"Extensions",metaInfo:{title:"Extensions"},data:function(){return{items:[{name:"Quizlet Assistant",color:"success",url:"https://chrome.google.com/webstore/detail//onomhgmepnaepoahbgffmjameginfgkm"},{name:"salAD Blocker",color:"inactive",url:"https://chrome.google.com/webstore/detail//ddmladhkbigkncghbhnkebioboipfcpk"}]}}},E=A,S=Object(i["a"])(E,O,k,!1,null,null,null),P=S.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"apps"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("Apps")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},I=[],B={name:"Apps",metaInfo:{title:"Apps"},data:function(){return{items:[{name:"None yet.",color:"blue",url:""}]}}},T=B,M=Object(i["a"])(T,$,I,!1,null,null,null),q=M.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"apps"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("About")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},H=[],W={name:"About",metaInfo:{title:"About"},data:function(){return{items:[{name:"Contact",color:"blue",url:"#/contact"},{name:"About",color:"blue",url:"#/about2"}]}}},z=W,J=Object(i["a"])(z,D,H,!1,null,null,null),N=J.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"apps"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("About")]),s("li",[t._v("\n      salad242 is the creator of many browsers, extensions, games, and more.\n    ")]),s("br"),s("br"),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},K=[],L={name:"About",metaInfo:{title:"About"},data:function(){return{items:[{name:"Back",color:"red",url:"#/about"}]}}},Q=L,R=Object(i["a"])(Q,G,K,!1,null,null,null),F=R.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"apps"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("Contact")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},V=[],X={name:"Contact",metaInfo:{title:"Contact"},data:function(){return{items:[{name:"Back",color:"red",url:"#/about"},{name:"Email",color:"blue",url:"mailto:jacob@salad242.gq"},{name:"Discord",color:"blue",url:"javascript:alert('I am ThePqtatoGalaxy#9001 on Discord')"},{name:"Kermit's Meme Truck",color:"blue",url:"https://discord.gg/W8MC5dE"}]}}},Y=X,Z=Object(i["a"])(Y,U,V,!1,null,null,null),tt=Z.exports;const et=[{path:"/",component:v},{path:"/browsers",component:j},{path:"/extensions",component:P},{path:"/apps",component:q},{path:"/about",component:N},{path:"/about2",component:F},{path:"/contact",component:tt}];var st=et;a["a"].config.productionTip=!1,a["a"].use(m["a"]),a["a"].use(p["a"]);const at=new p["a"]({routes:st});new a["a"]({router:at,render:t=>t(u)}).$mount("#app")},"5b62":function(t,e,s){t.exports=s.p+"img/logo.69620f10.png"},"64a9":function(t,e,s){}});
//# sourceMappingURL=app.87b67ba0.js.map