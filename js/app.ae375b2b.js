(function(t){function e(e){for(var o,l,n=e[0],i=e[1],c=e[2],m=0,p=[];m<n.length;m++)l=n[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],o=!0,n=1;n<s.length;n++){var i=s[n];0!==a[i]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=s[0]))}return t}var o={},a={app:0},r=[];function l(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=o,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(s,o,function(e){return t[e]}.bind(null,o));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=i;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("64a9"),a=s.n(o);a.a},"56d7":function(t,e,s){"use strict";s.r(e);var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("nav",[o("img",{attrs:{src:s("5b62")}}),o("ul",[o("li",[o("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),o("li",[o("router-link",{attrs:{to:"/browsers"}},[t._v("Browsers")])],1),o("li",[o("router-link",{attrs:{to:"/extensions"}},[t._v("Extensions")])],1),t._m(0)])]),o("router-view"),o("img",{staticStyle:{position:"absolute",left:"5px",bottom:"5px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-No%20longer%20available-inactive.svg"}}),o("img",{staticStyle:{position:"absolute",left:"5px",bottom:"59px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-Available%20soon-yellow.svg"}}),o("img",{staticStyle:{position:"absolute",left:"5px",bottom:"86px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-Working-success.svg"}}),o("img",{staticStyle:{position:"absolute",left:"5px",bottom:"32px",height:"25px"},attrs:{src:"https://img.shields.io/badge/-Blocked by LSR7-red.svg"}}),o("span",{staticStyle:{"font-size":"15px",position:"absolute",left:"5px",bottom:"111px"}},[t._v("What do the colors mean?")])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("a",{attrs:{href:"//users.that0ne1rishpqtato.gq"}},[t._v("Users")])])}],l={name:"App",metaInfo:{title:"",titleTemplate:"%s • Th@t0ne1rishPqtato",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"}]}},n=l,i=(s("034f"),s("2877")),c=Object(i["a"])(n,a,r,!1,null,null,null),u=c.exports,m=s("8c4f"),p=s("58ca"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("div",[o("span",{staticClass:"title"},[o("img",{staticClass:"shadow",attrs:{src:s("5b62")}})]),o("h3",[t._v("Please select a category above.")])])])}],f={name:"Home",metaInfo:{title:"Home"}},b=f,g=Object(i["a"])(b,d,h,!1,null,null,null),v=g.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"browsers"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("Browsers")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},w=[],k={name:"Browsers",metaInfo:{title:"Browsers"},data:function(){return{items:[{name:"Simple Calculator",color:"success",url:"#/simplecalculator"},{name:"Discontinued Browsers",color:"blueviolet",url:"#/discontinued"}]}}},x=k,j=Object(i["a"])(x,_,w,!1,null,null,null),C=j.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"extensions"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("Extensions")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},O=[],E={name:"Extensions",metaInfo:{title:"Extensions"},data:function(){return{items:[{name:"Quizlet Assistant",color:"success",url:"https://chrome.google.com/webstore/detail//onomhgmepnaepoahbgffmjameginfgkm"}]}}},S=E,A=Object(i["a"])(S,y,O,!1,null,null,null),B=A.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"apps"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("Apps")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},P=[],I={name:"Apps",metaInfo:{title:"Apps"},data:function(){return{items:[{name:"None yet.",color:"blue",url:""}]}}},T=I,M=Object(i["a"])(T,$,P,!1,null,null,null),D=M.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"apps"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("About")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},H=[],W={name:"About",metaInfo:{title:"About"},data:function(){return{items:[{name:"Contact",color:"blue",url:"#/contact"},{name:"About",color:"blue",url:"#/about2"}]}}},z=W,J=Object(i["a"])(z,q,H,!1,null,null,null),K=J.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"apps"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("About")]),s("li",[t._v("\n      salad242 is the creator of many browsers, extensions, games, and more.\n    ")]),s("br"),s("br"),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},R=[],F={name:"About",metaInfo:{title:"About"},data:function(){return{items:[{name:"Back",color:"red",url:"#/about"}]}}},G=F,L=Object(i["a"])(G,N,R,!1,null,null,null),Q=L.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"apps"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("Contact")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},V=[],X={name:"Contact",metaInfo:{title:"Contact"},data:function(){return{items:[{name:"Back",color:"red",url:"#/about"},{name:"Email",color:"blue",url:"mailto:jacob@salad242.gq"},{name:"Discord",color:"blue",url:"javascript:alert('I am ThePqtatoGalaxy#9001 on Discord')"},{name:"Kermit's Meme Truck",color:"blue",url:"https://discord.gg/W8MC5dE"}]}}},Y=X,Z=Object(i["a"])(Y,U,V,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"apps"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("Simple Calculator")]),t._m(0),s("br"),s("br"),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},st=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("\n      Simple Calculator is a browser "),s("i",[t._v("disguised")]),t._v(" as a calculator. To unlock it click "),s("b",[t._v("9 8 5 4")]),t._v(".\n    ")])}],ot={name:"Simple Calculator",metaInfo:{title:"Simple Calculator"},data:function(){return{items:[{name:"Add",color:"blue",url:"https://t01p.page.link/SimpleCalculator"},{name:"Back",color:"blueviolet",url:"#/browsers"}]}}},at=ot,rt=Object(i["a"])(at,et,st,!1,null,null,null),lt=rt.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"browsers"},[s("ul",{staticClass:"list"},[s("span",{staticClass:"title"},[t._v("Discontinued Browsers")]),t._l(t.items,(function(t){return s("li",[s("a",{attrs:{href:""+t.url}},[s("img",{class:"shadow",attrs:{src:"https://img.shields.io/badge/-"+t.name+"-"+t.color+".svg"}})])])}))],2)])},it=[],ct={name:"Discontinued Browsers",metaInfo:{title:"Discontinued Browsers"},data:function(){return{items:[{name:"Potato",color:"red",url:"https://chrome.google.com/webstore/detail//eikdpecakdfglplkafngboigefiojocg"},{name:"Avocado",color:"red",url:"https://chrome.google.com/webstore/detail//bgkdgnahbdfddpagnmpkhbgdpepmbjbf"},{name:"Kermit's Meme Browser",color:"red",url:"https://chrome.google.com/webstore/detail//jpieeijbjnjpfclbbbmfnoncedamonga"},{name:"Steve The Monkey",color:"red",url:"https://chrome.google.com/webstore/detail//ldjkakppecnkjfcmbcehbmphmkdbhbkj"},{name:"Earls Browser",color:"red",url:"https://chrome.google.com/webstore/detail//bajbkoongpoeddacnegpakakhemifgmk"},{name:"Fortnite Sans Browser",color:"red",url:"https://chrome.google.com/webstore/detail//klkodfbmmgmfpmlgmfgfkekeilkdcdmh"},{name:"Patrick",color:"red",url:"https://chrome.google.com/webstore/detail//cnhcbpmjemifplbaopldlikncpcifjgf"},{name:"Cherry",color:"red",url:"https://chrome.google.com/webstore/detail//odgpbeipjlaiompgjpfjgpdddoephckk"},{name:"Rainboww",color:"red",url:"https://chrome.google.com/webstore/detail//ckfbmfccloijkilcokojoecmeipgdbmb"},{name:"Back",color:"blueviolet",url:"#/browsers"}]}}},ut=ct,mt=Object(i["a"])(ut,nt,it,!1,null,null,null),pt=mt.exports;const dt=[{path:"/",component:v},{path:"/browsers",component:C},{path:"/extensions",component:B},{path:"/apps",component:D},{path:"/about",component:K},{path:"/about2",component:Q},{path:"/contact",component:tt},{path:"/simplecalculator",component:lt},{path:"/discontinued",component:pt}];var ht=dt;o["a"].config.productionTip=!1,o["a"].use(p["a"]),o["a"].use(m["a"]);const ft=new m["a"]({routes:ht});new o["a"]({router:ft,render:t=>t(u)}).$mount("#app")},"5b62":function(t,e,s){t.exports=s.p+"img/logo.69620f10.png"},"64a9":function(t,e,s){}});
//# sourceMappingURL=app.ae375b2b.js.map