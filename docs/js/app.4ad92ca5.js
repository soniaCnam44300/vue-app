(function(e){function t(t){for(var o,r,i=t[0],c=t[1],u=t[2],l=0,p=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"2c6c5172"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{about:"6ef2f4c7"}[e]+".css",a=c.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){u=p[i],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete r[e],d.parentNode.removeChild(d),n(s)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-app/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"05e7":function(e,t,n){"use strict";var o=n("6f2c"),r=n.n(o);r.a},"2c28":function(e,t,n){"use strict";var o=n("e651"),r=n.n(o);r.a},"3a88":function(e,t,n){"use strict";var o=n("8201"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),n("router-view")],1)},a=[],s=(n("034f"),n("2877")),i={},c=Object(s["a"])(i,r,a,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:" home "}})],1)},d=[],f=n("fdab"),m={name:"Home",components:{HelloWorld:f["a"]},data:function(){return{}}},v=m,g=(n("cccb"),Object(s["a"])(v,p,d,!1,null,null,null)),h=g.exports,b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("ComposantWorld",{attrs:{msg:"Se connecter pour accéder a la page About",btn:"Bouton acceder page composant",couleur:"blue"},on:{Btn:function(t){return e.action()}}}),o("form",[o("div",{staticClass:"form-example2",attrs:{id:"main"}},[o("div",{staticClass:"form-example1"},[o("label",{staticClass:"label",attrs:{for:"name"}},[e._v(" Pseudo: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"input",staticStyle:{"margin-left":"40px"},attrs:{type:"text",name:"name",id:"name",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),o("div",{staticClass:"form-example1"},[o("label",{staticClass:"label",attrs:{for:"password"}},[e._v(" Mot de Passe: ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"password",name:"password",id:"password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("div",{staticClass:"form-example1"},[o("input",{staticClass:"bouton",attrs:{type:"submit",value:"Valider"},on:{click:function(t){return e.connect()}}})])])])],1)},w=[],y=(n("b0c0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(" "+e._s(e.msg))]),n("button",{style:{backgroundColor:e.couleur},on:{click:function(t){return e.$emit("Btn")}}},[e._v(e._s(e.btn))])])}),_=[],C={name:"ComposantWorld",props:{msg:String,btn:String,couleur:String},methods:{action:function(){}}},x=C,k=(n("3a88"),Object(s["a"])(x,y,_,!1,null,"bcd62ec4",null)),j=k.exports,O={name:"Login",components:{ComposantWorld:j},data:function(){return{password:"admin",name:"admin"}},methods:{connect:function(){"admin"===this.name&&"admin"===this.password?this.$router.push({name:"About",query:{login:this.name,password:this.password}}):alert("faux")},action:function(){this.$router.push({name:"Composant"})}}},E=O,S=(n("d6db"),Object(s["a"])(E,b,w,!1,null,null,null)),P=S.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("ComposantWorld",{attrs:{msg:"Bienvenue sur la page Composant",btn:"Bouton dans composant",couleur:"red"},on:{Btn:function(t){return e.action()}}}),e._m(0)],1)},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v(" Hello cette page")])])}],$={name:"",components:{ComposantWorld:j},data:function(){return{}},methods:{action:function(){alert("ok")}}},B=$,N=(n("05e7"),Object(s["a"])(B,A,q,!1,null,null,null)),H=N.exports;o["a"].use(l["a"]);var L=[{path:"/composant",name:"Composant",component:H},{path:"/",name:"Home",component:h},{path:"/about",name:"About",beforeEnter:function(e,t,n){console.log("ok"),console.log(e.query);var o=e.query.login,r=e.query.password;"admin"===e.query.login&&"admin"===e.query.password?(sessionStorage.setItem("nom",o),sessionStorage.setItem("mdp",r),n()):(alert("Vous n'êtes pas connecté"),n("/login"))},component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:P}],T=new l["a"]({routes:L}),W=T,M=n("9483");Object(M["a"])("".concat("/vue-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:W,render:function(e){return e(u)}}).$mount("#app")},"5ced":function(e,t,n){},"6f2c":function(e,t,n){},8201:function(e,t,n){},"85ec":function(e,t,n){},cccb:function(e,t,n){"use strict";var o=n("5ced"),r=n.n(o);r.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d6db:function(e,t,n){"use strict";var o=n("e67a"),r=n.n(o);r.a},e651:function(e,t,n){},e67a:function(e,t,n){},fdab:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(" "+e._s(e.msg))])])},r=[],a={name:"HelloWorld",props:{msg:String}},s=a,i=(n("2c28"),n("2877")),c=Object(i["a"])(s,o,r,!1,null,"54e72308",null);t["a"]=c.exports}});
//# sourceMappingURL=app.4ad92ca5.js.map