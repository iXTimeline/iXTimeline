(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)a=s[u],o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0cb6c9":"fb692a35","chunk-2d0daa98":"077f461b","chunk-2d0e492d":"22d229b2","chunk-2d0f09f3":"a8885dd8","chunk-2d23822a":"16a70cc9","chunk-3d197ff2":"99996c89","chunk-59c0bb64":"ddc8e37b","chunk-760bf4ae":"b782ffa4"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-3d197ff2":1,"chunk-59c0bb64":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0cb6c9":"31d6cfe0","chunk-2d0daa98":"31d6cfe0","chunk-2d0e492d":"31d6cfe0","chunk-2d0f09f3":"31d6cfe0","chunk-2d23822a":"31d6cfe0","chunk-3d197ff2":"41a4938a","chunk-59c0bb64":"5c5a738e","chunk-760bf4ae":"31d6cfe0"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(d)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a2d":function(t){t.exports={needHelp:"Need Help?"}},1196:function(t,e,n){"use strict";var r=n("1d1c"),a=n.n(r);a.a},"173d":function(t){t.exports={facebook:"Facebook",footer:"Footer",github:"Github",twitter:"Twitter"}},"1a5d":function(t,e,n){var r={"./Dashboard.vue":["7277","chunk-760bf4ae"],"./Icons.vue":["9cc6","chunk-2d0f09f3"],"./Maps.vue":["daba","chunk-59c0bb64"],"./Notifications.vue":["fda7","chunk-2d23822a"],"./TableList.vue":["6d0d","chunk-2d0daa98"],"./Typography.vue":["547e","chunk-3d197ff2"],"./Upgrade.vue":["9198","chunk-2d0e492d"],"./UserProfile.vue":["4a39","chunk-2d0cb6c9"]};function a(t){var e=r[t];return e?n.e(e[1]).then(function(){var t=e[0];return n(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}a.keys=function(){return Object.keys(r)},a.id="1a5d",t.exports=a},"1d1c":function(t,e,n){},"25f5":function(t,e,n){"use strict";var r=n("453f"),a=n.n(r);a.a},2609:function(t,e,n){"use strict";n.r(e),e["default"]={drawer:null,color:"success",image:"https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg",sidebarBackgroundColor:"rgba(27, 27, 27, 0.74)"}},"2a74":function(t,e,n){"use strict";n.r(e);n("28a5");var r=n("768b"),a=(n("a481"),n("ac6a"),n("c653")),o={};a.keys().forEach(function(t){if("./index.js"!==t){var e=t.replace(/(\.\/|\.js)/g,""),n=e.split("/"),i=Object(r["a"])(n,2),s=i[0],c=i[1];o[s]||(o[s]={namespaced:!0}),o[s][c]=a(t).default}}),e["default"]=o},"2c37":function(t,e,n){},4025:function(t,e,n){},4072:function(t,e,n){"use strict";var r=n("721f"),a=n.n(r);a.a},"41c0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{id:"app-drawer",app:"",dark:"",floating:"",persistent:"","mobile-break-point":"991",width:"260"},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}},[n("v-img",{attrs:{src:t.image,gradient:t.sidebarOverlayGradiant,height:"100%"}},[n("v-layout",{staticClass:"fill-height",attrs:{tag:"v-list",column:""}},[n("v-list-tile",{attrs:{avatar:""}},[n("v-list-tile-avatar",{attrs:{color:"white"}},[n("v-img",{attrs:{src:t.logo,height:"34",contain:""}})],1),n("v-list-tile-title",{staticClass:"title"},[t._v("\n          Vuetify MD\n        ")])],1),n("v-divider"),t.responsive?n("v-list-tile",[n("v-text-field",{staticClass:"purple-input search-input",attrs:{label:"Search...",color:"purple"}})],1):t._e(),t._l(t.links,function(e,r){return n("v-list-tile",{key:r,staticClass:"v-list-item",attrs:{to:e.to,"active-class":t.color,avatar:""}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)})],2)],1)],1)},a=[],o=n("cebc"),i=n("2f62"),s={data:function(){return{logo:"./img/vuetifylogo.png",links:[{to:"/dashboard",icon:"mdi-view-dashboard",text:"Dashboard"},{to:"/user-profile",icon:"mdi-account",text:"User Profile"},{to:"/table-list",icon:"mdi-clipboard-outline",text:"Table List"},{to:"/typography",icon:"mdi-format-font",text:"Typography"},{to:"/icons",icon:"mdi-chart-bubble",text:"Icons"},{to:"/maps",icon:"mdi-map-marker",text:"Maps"},{to:"/notifications",icon:"mdi-bell",text:"Notifications"}],responsive:!1}},computed:Object(o["a"])({},Object(i["c"])("app",["image","color"]),{inputValue:{get:function(){return this.$store.state.app.drawer},set:function(t){this.setDrawer(t)}},items:function(){return this.$t("Layout.View.items")},sidebarOverlayGradiant:function(){return"".concat(this.$store.state.app.sidebarBackgroundColor,", ").concat(this.$store.state.app.sidebarBackgroundColor)}}),mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(o["a"])({},Object(i["b"])("app",["setDrawer","toggleDrawer"]),{onResponsiveInverted:function(){window.innerWidth<991?this.responsive=!0:this.responsive=!1}})},c=s,l=(n("ff57"),n("2877")),u=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},"42e7":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("material-card",t._g(t._b({staticClass:"v-card--material-stats"},"material-card",t.$attrs,!1),t.$listeners),[n("v-card",{staticClass:"pa-4",class:"elevation-"+t.elevation,attrs:{slot:"offset",color:t.color,dark:""},slot:"offset"},[n("v-icon",{attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")])],1),n("div",{staticClass:"text-xs-right"},[n("p",{staticClass:"category grey--text font-weight-light",domProps:{textContent:t._s(t.title)}}),n("h3",{staticClass:"title display-1 font-weight-light"},[t._v("\n      "+t._s(t.value)+" "),n("small",[t._v(t._s(t.smallValue))])])]),n("template",{slot:"actions"},[n("v-icon",{staticClass:"mr-2",attrs:{color:t.subIconColor,size:"20"}},[t._v("\n      "+t._s(t.subIcon)+"\n    ")]),n("span",{staticClass:"caption font-weight-light",class:t.subTextColor,domProps:{textContent:t._s(t.subText)}})],1)],2)},a=[],o=n("cebc"),i=n("e3a9"),s={inheritAttrs:!1,props:Object(o["a"])({},i["default"].props,{icon:{type:String,required:!0},subIcon:{type:String,default:void 0},subIconColor:{type:String,default:void 0},subTextColor:{type:String,default:void 0},subText:{type:String,default:void 0},title:{type:String,default:void 0},value:{type:String,default:void 0},smallValue:{type:String,default:void 0}})},c=s,l=(n("4d79"),n("2877")),u=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},"453f":function(t,e,n){},4999:function(t,e,n){var r={"./en/Common.json":"0a2d","./en/Core/Footer.json":"173d","./en/Core/Toolbar.json":"f26b","./en/Home.json":"5cc6"};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="4999"},"4d79":function(t,e,n){"use strict";var r=n("803b"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("cb43"),o=n("c143"),i=(n("a481"),n("ac6a"),n("8103")),s=n.n(i),c=n("bba4"),l=n.n(c),u=n("ffe0");u.keys().forEach(function(t){var e=u(t),n=s()(l()(t.replace(/^\.\//,"").replace(/\.\w+$/,"")));r["default"].component(n,e.default||e)});var f=n("bc3a"),d=n.n(f);r["default"].prototype.$http=d.a;n("4633");r["default"].use(n("84b5"));var v=n("ce5b"),p=n.n(v),h={primary:"#4caf50",secondary:"#4caf50",tertiary:"#495057",accent:"#82B1FF",error:"#f55a4e",info:"#00d3ee",success:"#5cb860",warning:"#ffa21a"};n("bf40"),n("5363");r["default"].use(p.a,{iconfont:"mdi",theme:h});var b=n("31bd"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("core-filter"),n("core-toolbar"),n("core-view")],1)},g=[],y=(n("5c0b"),n("2877")),_={},w=Object(y["a"])(_,m,g,!1,null,null,null),x=w.exports,k=n("a925"),C=(n("28a5"),n("ac4d"),n("8a81"),n("4999")),O={},j=!0,E=!1,S=void 0;try{for(var T,$=function(){var t=T.value;if("./index.js"===t)return"continue";var e=t.replace(/(\.\/|\.json$)/g,"").split("/");e.reduce(function(n,r,a){return n[r]?n[r]:(n[r]=a+1===e.length?C(t):{},n[r])},O)},L=C.keys()[Symbol.iterator]();!(j=(T=L.next()).done);j=!0)$()}catch(Q){E=!0,S=Q}finally{try{j||null==L.return||L.return()}finally{if(E)throw S}}var N=O;r["default"].use(k["a"]);var D=new k["a"]({locale:"en",fallbackLocale:"en",messages:N}),I=D,A=(n("7f7f"),n("0284")),B=n.n(A),P=n("8c4f"),U=n("0a89"),F=n.n(U),R=[{path:"/dashboard",view:"Dashboard"},{path:"/notifications",view:"Notifications"}];function V(t,e,r){return{name:r||e,path:t,component:function(t){return n("1a5d")("./".concat(e,".vue")).then(t)}}}r["default"].use(P["a"]);var M=new P["a"]({mode:"history",routes:R.map(function(t){return V(t.path,t.view,t.name)}).concat([{path:"*",redirect:"/dashboard"}]),scrollBehavior:function(t,e,n){return n||(t.hash?{selector:t.hash}:{x:0,y:0})}});r["default"].use(F.a),Object({NODE_ENV:"production",BASE_URL:"/"}).GOOGLE_ANALYTICS&&r["default"].use(B.a,{id:Object({NODE_ENV:"production",BASE_URL:"/"}).GOOGLE_ANALYTICS,router:M,autoTracking:{page:!0}});var H=M,z=n("2f62"),G={},W={},q=n("2a74"),Y={},J={};r["default"].use(z["a"]);var K=new z["a"].Store({actions:G,getters:W,modules:q["default"],mutations:Y,state:J}),X=K;Object(b["sync"])(X,H),r["default"].config.productionTip=!1,r["default"].use(a["default"]),r["default"].use(o["a"]),new r["default"]({i18n:I,router:H,store:X,render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5cc6":function(t){t.exports={title:"Vuetify Alpha",footer:"2018 Vuetify LLC",drawerItems:["Inspire"],needHelp:"Need help?"}},"5e27":function(t,e,n){},"602c":function(t,e,n){"use strict";var r=n("84b6"),a=n.n(r);a.a},6096:function(t,e,n){"use strict";n.r(e);var r=function(t){return function(e,n){return e[t]=n}},a=function(t){return function(e){return e[t]=!e[t]}};e["default"]={setDrawer:r("drawer"),setImage:r("image"),setColor:r("color"),toggleDrawer:a("drawer")}},"703d":function(t,e,n){},"721f":function(t,e,n){},"78d5":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("material-card",t._g(t._b({staticClass:"v-card--material-chart"},"material-card",t.$attrs,!1),t.$listeners),[n("chartist",{attrs:{slot:"header",data:t.data,"event-handlers":t.eventHandlers,options:t.options,ratio:t.ratio,"responsive-options":t.responsiveOptions,type:t.type},slot:"header"}),t._t("default"),t._t("actions",null,{slot:"actions"})],2)},a=[],o=(n("6762"),n("2fdb"),{inheritAttrs:!1,props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0,validator:function(t){return["Bar","Line","Pie"].includes(t)}}}}),i=o,s=(n("e536"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=c.exports},"7a74":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{id:"core-footer",absolute:"",height:"82"}},[n("div",{staticClass:"footer-items"},t._l(t.links,function(e){return n("span",{key:e.name},[n("a",{staticClass:"tertiary--text footer-links",attrs:{href:e.Link}},[t._v(t._s(e.name))])])}),0),n("v-spacer"),n("span",{staticClass:"font-weight-light copyright"},[t._v("\n    ©\n    "+t._s((new Date).getFullYear())+"\n    "),n("a",{attrs:{href:"https://www.creative-tim.com/",target:"_blank"}},[t._v("Creative Tim")]),t._v(", made with\n    "),n("v-icon",{attrs:{color:"tertiary",size:"17"}},[t._v("mdi-heart")]),t._v("\n    for a better web\n  ")],1)],1)},a=[],o={data:function(){return{links:[{name:"Home",Link:"/dashboard"},{name:"Creative Tim",Link:"https://www.creative-tim.com"},{name:"About Us",Link:"https://creative-tim.com/presentation"},{name:"Blog",Link:"https://blog.creative-tim.com"}]}}},i=o,s=(n("602c"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=c.exports},"803b":function(t,e,n){},"84b6":function(t,e,n){},"8f36":function(t,e,n){},9306:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[n("div",{attrs:{id:"core-view"}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1)])},a=[],o={metaInfo:function(){return{title:"iXTimeline"}}},i=o,s=(n("ee4f"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=c.exports},"9cbf":function(t,e,n){"use strict";var r=n("8f36"),a=n.n(r);a.a},"9d6c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-alert",t._g(t._b({staticClass:"v-alert--notification",class:["elevation-"+t.elevation],attrs:{value:t.value}},"v-alert",t.$attrs,!1),t.$listeners),[t._t("default")],2)},a=[],o=(n("c5f6"),{inheritAttrs:!1,props:{elevation:{type:[Number,String],default:6},value:{type:Boolean,default:!0}}}),i=o,s=(n("4072"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=c.exports},b2ab:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,bottom:"",left:"","min-width":"300","max-width":"300","nudge-left":"12","offset-x":"",transition:"slide-y-transition"}},[n("v-btn",{staticClass:"elevation-0",staticStyle:{top:"96px"},attrs:{slot:"activator",color:"grey",dark:"",fab:"",fixed:"",top:""},slot:"activator"},[n("v-icon",[t._v("mdi-settings")])],1),n("v-card",[n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("PLACEHOLDER FILTERS")]),n("v-divider",{staticClass:"mt-3"})],1),n("v-flex",{attrs:{xs12:""}},[n("div",{staticClass:"text-xs-center body-2 text-uppercase sidebar-filter"},[t._v("STUFF HERE")])]),n("v-flex",{attrs:{xs12:""}},[n("v-btn",{attrs:{target:"_blank",color:"success",block:""}},[t._v("\n            BUTTON\n          ")])],1),n("v-flex",{attrs:{xs12:""}},[n("v-btn",{staticClass:"white--text",attrs:{target:"_blank",color:"primary",block:""}},[t._v("\n            BUTTON\n          ")])],1)],1)],1)],1)],1)},a=[],o=n("cebc"),i=n("2f62"),s={data:function(){return{colors:["primary","info","success","warning","danger"]}},computed:Object(o["a"])({},Object(i["c"])("app",["image","color"]),{color:function(){return this.$store.state.app.color}}),methods:Object(o["a"])({},Object(i["b"])("app",["setImage"]),{setColor:function(t){this.$store.state.app.color=t}})},c=s,l=(n("9cbf"),n("2877")),u=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},bdca:function(t,e,n){},c653:function(t,e,n){var r={"./app/mutations.js":"6096","./app/state.js":"2609","./index.js":"2a74"};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="c653"},c6cc:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-offset",class:t.classes,style:t.styles},[t._t("default")],2)},a=[],o=(n("c5f6"),{props:{fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:0}},computed:{classes:function(){return{"v-offset--full-width":this.fullWidth}},styles:function(){return{top:"-".concat(this.offset,"px"),marginBottom:"-".concat(this.offset,"px")}}}}),i=o,s=(n("1196"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=c.exports},cb2c:function(t,e,n){"use strict";var r=n("4025"),a=n.n(r);a.a},d23b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticStyle:{background:"#eee"},attrs:{id:"core-toolbar",flat:"",prominent:""}},[n("v-flex",[n("v-toolbar-title",{staticClass:"tertiary--text font-weight-light px-0"},[t._v("\n      "+t._s(t.title)+"\n    ")])],1),n("v-spacer"),n("v-toolbar-items",[n("v-flex",{attrs:{"align-center":"",layout:"","py-2":""}},[t.responsiveInput?n("v-text-field",{staticClass:"mr-4 mt-2 purple-input",attrs:{label:"Search...","hide-details":"",color:"purple"}}):t._e(),n("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{to:"/"}},[n("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-view-dashboard")])],1),n("v-menu",{attrs:{"open-on-hover":"true",bottom:"",left:"","content-class":"dropdown-menu","offset-y":"",transition:"slide-y-transition"}},[n("router-link",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"toolbar-items",attrs:{slot:"activator",to:"/notifications"},slot:"activator"},[n("v-badge",{attrs:{color:"error",overlap:""}},[n("template",{slot:"badge"},[t._v("\n              "+t._s(t.notifications.length)+"\n            ")]),n("v-icon",{attrs:{color:"tertiary"}},[t._v("mdi-bell")])],2)],1),n("v-card",[n("v-list",{attrs:{dense:""}},t._l(t.notifications,function(e){return n("v-list-tile",{key:e,on:{click:t.onClick}},[n("v-list-tile-title",{domProps:{textContent:t._s(e)}})],1)}),1)],1)],1)],1)],1)],1)},a=[],o=n("cebc"),i=(n("7f7f"),n("2f62")),s={data:function(){return{notifications:["CDR Load Failed."],title:null,responsive:!1,responsiveInput:!1}},watch:{$route:function(t){this.title=t.name}},mounted:function(){this.onResponsiveInverted(),window.addEventListener("resize",this.onResponsiveInverted)},beforeDestroy:function(){window.removeEventListener("resize",this.onResponsiveInverted)},methods:Object(o["a"])({},Object(i["b"])("app",["setDrawer","toggleDrawer"]),{onClickBtn:function(){this.setDrawer(!this.$store.state.app.drawer)},onClick:function(){},onResponsiveInverted:function(){window.innerWidth<991?(this.responsive=!0,this.responsiveInput=!1):(this.responsive=!1,this.responsiveInput=!0)}})},c=s,l=(n("25f5"),n("2877")),u=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=u.exports},e3a9:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",t._g(t._b({style:t.styles},"v-card",t.$attrs,!1),t.$listeners),[t.hasOffset?n("helper-offset",{attrs:{inline:t.inline,"full-width":t.fullWidth,offset:t.offset}},[t.$slots.offset?t._t("offset"):n("v-card",{staticClass:"v-card--material__header",class:"elevation-"+t.elevation,attrs:{color:t.color,dark:""}},[t.title||t.text?n("span",[n("h4",{staticClass:"title font-weight-light mb-2",domProps:{textContent:t._s(t.title)}}),n("p",{staticClass:"category font-weight-thin",domProps:{textContent:t._s(t.text)}})]):t._t("header")],2)],2):t._e(),n("v-card-text",[t._t("default")],2),t.$slots.actions?n("v-divider",{staticClass:"mx-3"}):t._e(),t.$slots.actions?n("v-card-actions",[t._t("actions")],2):t._e()],1)},a=[],o=(n("c5f6"),{inheritAttrs:!1,props:{color:{type:String,default:"secondary"},elevation:{type:[Number,String],default:10},inline:{type:Boolean,default:!1},fullWidth:{type:Boolean,default:!1},offset:{type:[Number,String],default:24},title:{type:String,default:void 0},text:{type:String,default:void 0}},computed:{hasOffset:function(){return this.$slots.header||this.$slots.offset||this.title||this.text},styles:function(){return this.hasOffset?{marginBottom:"".concat(this.offset,"px"),marginTop:"".concat(2*this.offset,"px")}:null}}}),i=o,s=(n("cb2c"),n("2877")),c=Object(s["a"])(i,r,a,!1,null,null,null);e["default"]=c.exports},e536:function(t,e,n){"use strict";var r=n("bdca"),a=n.n(r);a.a},ee4f:function(t,e,n){"use strict";var r=n("703d"),a=n.n(r);a.a},f26b:function(t){t.exports={title:"Title"}},ff57:function(t,e,n){"use strict";var r=n("2c37"),a=n.n(r);a.a},ffe0:function(t,e,n){var r={"./core/Drawer.vue":"41c0","./core/Filter.vue":"b2ab","./core/Footer.vue":"7a74","./core/Toolbar.vue":"d23b","./core/View.vue":"9306","./helper/Offset.vue":"c6cc","./material/Card.vue":"e3a9","./material/ChartCard.vue":"78d5","./material/Notification.vue":"9d6c","./material/StatsCard.vue":"42e7"};function a(t){var e=o(t);return n(e)}function o(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="ffe0"}});
//# sourceMappingURL=app.76b17d34.js.map