(function(e){function t(t){for(var r,a,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)a=s[c],i[a]&&d.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},o=[];function a(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1918328d":"f0ed9af6","chunk-2d0c14f9":"09a28ef7","chunk-2d0d0457":"0dc2c763","chunk-2d0de126":"6aa2f982","chunk-2d229046":"35051222"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=i[e]=[t,r]});t.push(n[2]=r);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e),o=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"24ae":function(e,t,n){},"25a1":function(e,t,n){},2847:function(e,t,n){},"2af9":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("ac6a");var r=n("2b0e"),i=n("5814");i.keys().forEach(function(e){if("./index.js"!==e){var t=i(e),n=t.default||t;r["default"].component(n.name,n)}})},"33f6":function(e,t,n){},"37cc":function(e,t,n){"use strict";var r=n("3c65"),i=n.n(r);i.a},"3a5d":function(e,t,n){},"3c65":function(e,t,n){},"4cf3":function(e,t,n){"use strict";var r=n("25a1"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("9d3e"),n("2877")),s={},l=Object(a["a"])(s,i,o,!1,null,"2bb40de4",null),u=l.exports,c=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sk-login"},[n("simple-form",{ref:"loginForm",staticClass:"sk-login__form",attrs:{model:e.formModel,"widget-list":e.widgetList,"widget-grid":24},scopedSlots:e._u([{key:"title",fn:function(t){return[n("div",{staticClass:"sk-login__title"},[e._v("\n        Admin Skeleton\n      ")])]}},{key:"operation",fn:function(t){return[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"small"},on:{click:e.handleUserLogin}},[e._v("\n        "+e._s(e.$t("framework.login"))+"\n      ")])]}}])})],1)},d=[],p={name:"Login",data:function(){return{loading:!1,formModel:{username:"",password:""},widgetList:[{slotname:"title",formItem:{labelWidth:"0px"}},{prop:"username",type:"el-input",component:{clearable:!0,prefixIcon:"iconfont icon-user",size:"small"},validate:{required:!0,message:this.$t("validation.mustInput"),trigger:"blur"}},{prop:"password",type:"el-input",component:{prefixIcon:"iconfont icon-password",size:"small",showPassword:!0},validate:{required:!0,message:this.$t("validation.mustInput"),trigger:"blur"}},{slotname:"operation",formItem:{labelWidth:"0px"}}]}},created:function(){},methods:{handleUserLogin:function(){var e=this;this.$refs.loginForm.validate().then(function(t){e.loading=!0,e.$axios.post("/api/system/login",e.formModel).then(function(t){e.$router.push("/")}).finally(function(t){e.$refs.loginForm.resetFields(),e.loading=!1})}).catch(function(e){})}}},m=p,h=(n("37cc"),Object(a["a"])(m,f,d,!1,null,"40263bd4",null)),b=h.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"sk-container"},[n("el-aside",{attrs:{width:"200px"}},[n("sidebar",{attrs:{"menu-list":e.menuList}})],1),n("el-container",[n("el-header",{staticClass:"sk-header",attrs:{height:"40px"}}),n("el-main",[n("router-view")],1)],1)],1)},v=[],y=[{path:"/",title:"home",icon:"el-icon-s-home"},{path:"/system",title:"Components",icon:"el-icon-setting",children:[{path:"/table",title:"Simple Table Demo"},{path:"/form-input",title:"Simple Form Input"},{path:"/form-select",title:"Simple Form Select"}]},{path:"/foo",title:"foo.main",icon:"icon-tree",children:[{path:"/foo/bar",title:"foo.bar",icon:"icon-tree"}]},{path:"/1-1",title:"1-1",icon:"icon-tree",children:[{path:"/2-1",title:"2-1",children:[{path:"/3-1",title:"3-1"},{path:"/3-2",title:"3-2",children:[{path:"/4-1",title:"4-1",icon:"icon-tree"},{path:"/4-2",title:"4-2"}]}]},{path:"/2-2",title:"2-2"}]}],O={name:"Home",data:function(){return{menuList:y}}},w=O,j=(n("feb7"),Object(a["a"])(w,g,v,!1,null,"6a4ed7da",null)),k=j.exports;r["default"].use(c["a"]);var _=new c["a"]({base:"",scrollBehavior:function(){return{y:0}},routes:[{path:"/login",name:"Login",component:b},{path:"/",name:"Home",component:k,redirect:{name:"Dashboard"},children:[{path:"dashboard",name:"Dashboard",component:function(e){return n.e("chunk-2d0c14f9").then(n.bind(null,"4601"))}},{path:"table",name:"Table",component:function(e){return n.e("chunk-2d0de126").then(n.bind(null,"83a6"))}},{path:"tableWithCopycell",name:"TableWithCopycell",component:function(e){return n.e("chunk-1918328d").then(n.bind(null,"6b08"))}},{path:"form-input",name:"FormInput",component:function(e){return n.e("chunk-2d229046").then(n.bind(null,"dc3d"))}},{path:"form-select",name:"FormSelect",component:function(e){return n.e("chunk-2d0d0457").then(n.bind(null,"66ef"))}}]}]});_.beforeEach(function(e,t,n){n()});var x=_,C=n("2f62"),$={namespaced:!0,state:{userinfo:{}},mutations:{},actions:{}},P=$,S={namespaced:!0,state:{},mutations:{},actions:{}},F=S,E={},L=E;r["default"].use(C["a"]);var A=new C["a"].Store({strict:!1,modules:{system:F,user:P},getters:L}),D=n("bc3a"),M=n.n(D),T=M.a.create({baseURL:"",timeout:5e4}),q=M.a.CancelToken,I=new Array(0);function z(e){for(var t in I)I[t].unique==="".concat(e.url)&&(I[t].fn(),I.splice(t,1))}T.interceptors.request.use(function(e){return z(e),e.cancelToken=new q(function(t){I.push({fn:t,unique:"".concat(e.url)})}),e},function(e){console.log(e)}),T.interceptors.response.use(function(e){z(e.config);var t=e.data;return t},function(e){if(e.response){e.response;console.log(e.response.data),console.log(e.response.status)}else e.request?console.log(e.request):console.log("Error",e.message)});var N=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.prototype.$axios=T},W={install:N},U=(n("8e6e"),n("28a5"),n("bd86")),B=(n("ac6a"),n("456d"),n("7618"));function G(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function H(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{};G(n,!0).forEach(function(t){Object(U["a"])(e,t,n[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):G(n).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(arguments[t],n))});return e}function J(){}function V(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}function R(e){var t=Object(B["a"])(e);return null!==e&&("object"===t||"function"===t)}function K(e,t){return R(e)&&R(t)?Object.keys(H({},e,{},t)).reduce(function(n,r){return n[r]=K(e[r],t[r]),n},Array.isArray(e)?[]:{}):void 0===t?e:t}function Q(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;var o=Array(i);while(++r<i)o[r]=e[r+t];return o}function X(e,t){var n=e?e.length:0;return n?(t=void 0===t?1:t,Q(e,t<0?0:t,n)):[]}function Y(e){var t=e.split(/\r\n/gi);if(0!==t.length){var n=t.map(function(e){return e.split(/\t/gi)});return n}}var Z={isArray:J,isObject:R,bind:V,merge:K,drop:X,matrix:Y},ee=n("75fc"),te=n("96eb"),ne=n.n(te),re=[{url:"/api/system/login",method:"post",response:function(e){console.log(e)}},{url:"/api/system/getUserinfo",method:"post",response:function(e){return console.log(Object(B["a"])(e.body)),{code:200,message:"ok",data:{}}}},{url:"/api/system/logout"}],ie=Object(ee["a"])(re);ie.map(function(e){ne.a.mock(e.url,e.method,e.response)});n("a83d");var oe=n("5c96"),ae=n.n(oe),se=n("a925"),le=n("b2d6"),ue=n.n(le),ce=n("f0d9"),fe=n.n(ce),de={message:"en",framework:{}},pe={message:"zh-CN",framework:{login:"登录"},validation:{mustInput:"请输入"}};function me(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n}function he(e){for(var t=1;t<arguments.length;t++)if(t%2){var n=null!=arguments[t]?arguments[t]:{};me(n,!0).forEach(function(t){Object(U["a"])(e,t,n[t])})}else Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(arguments[t])):me(n).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(arguments[t],n))});return e}r["default"].use(se["a"]);var be={en:he({},de,{},ue.a),zhCN:he({},pe,{},fe.a)},ge=new se["a"]({locale:"zhCN",messages:be}),ve=ge;n("2af9"),n("f5df"),n("4b3c"),n("33f6");r["default"].use(ae.a,{size:"mini",i18n:function(e,t){return ve.t(e,t)}}),r["default"].use(W),r["default"].prototype.$utils=Z,r["default"].config.productionTip=!1,new r["default"]({i18n:ve,router:x,store:A,render:function(e){return e(u)}}).$mount("#app")},5814:function(e,t,n){var r={"./base/sidebar/index.js":"9943","./base/simple-form/index.js":"b674","./base/simple-table-column/index.js":"8c84","./base/simple-table/index.js":"f932","./base/sk-label/index.js":"d57b","./base/widget-item/index.js":"8488","./index.js":"2af9"};function i(e){var t=o(e);return n(t)}function o(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}i.keys=function(){return Object.keys(r)},i.resolve=o,e.exports=i,i.id="5814"},8488:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:e.handleClickoutside,expression:"handleClickoutside"}],on:{click:e.handleWidgetClick}},[n(e.currentOption.type,e._g(e._b({ref:"widget",tag:"component",staticClass:"sk-widget",attrs:{option:e.currentOption.option},model:{value:e.currentModel,callback:function(t){e.currentModel=t},expression:"currentModel"}},"component",e.currentOption.component,!1),e.currentOption.event),[e.hasChildrenComponents?e._l(e.currentOption.option,function(e,t){return n("el-option",{key:t,attrs:{value:e.value,label:e.label}})}):e._e()],2)],1)},i=[],o=(n("c5f6"),n("9169")),a={name:"WidgetItem",directives:{Clickoutside:o["a"]},props:{option:{type:Object,required:!0},model:{type:[Array,String,Number,Object]},editable:{type:Boolean,default:!0},editmode:{type:Boolean,default:!0}},data:function(){return{isFocus:!1}},computed:{currentModel:{set:function(e){this.$emit("update:model",e)},get:function(){return this.model}},currentOption:function(){return this.currentEditMode?this.option:this.$utils.merge(this.option,{type:"sk-label"})},currentEditMode:function(){return this.editable?this.editmode?this.editmode:this.isFocus:this.editable},isDepFocus:function(){return!!this.editable&&!this.editmode},hasChildrenComponents:function(){return"el-select"===this.option.type}},watch:{isFocus:function(e){var t=this;e?this.$nextTick(function(e){t.$refs.widget.focus(),t.$refs.widget.$el.addEventListener("paste",t.handlePaste,!1)}):this.$refs.widget.$el.removeEventListener("paste",this.handlePaste,!1)}},methods:{handleWidgetClick:function(){this.isDepFocus&&(this.isFocus=!0)},handleClickoutside:function(){var e=this;this.isDepFocus&&this.isFocus&&setTimeout(function(){e.isFocus=!1},0)},handlePaste:function(e){e.preventDefault(),this.isDepFocus&&this.isFocus&&this.$emit("paste",e)}}},s=a,l=(n("d8fc"),n("2877")),u=Object(l["a"])(s,r,i,!1,null,"a193d2e8",null),c=u.exports;t["default"]=c},"8c84":function(e,t,n){"use strict";n.r(t);var r,i,o=n("2638"),a=n.n(o),s={name:"SimpleTableColumn",props:{columnAttrs:{type:Object,required:!0},slotList:{type:Object,default:function(){return{}}}},methods:{getColumn:function(e){var t=this,n=this.$createElement;return e.children&&e.children.length>0?n("el-table-column",{attrs:{label:e.label}},[e.children.map(function(e){return t.getColumn(e)})]):e.slotname?n("el-table-column",a()([{},{props:e}]),[this.slotList[e.slotname]]):n("el-table-column",a()([{},{props:e}]))}},render:function(){var e=this.columnAttrs,t=this.getColumn;return t(e)}},l=s,u=n("2877"),c=Object(u["a"])(l,r,i,!1,null,null,null),f=c.exports;t["default"]=f},"96b1":function(e,t,n){"use strict";var r=n("e5c2"),i=n.n(r);i.a},9943:function(e,t,n){"use strict";n.r(t);var r,i,o={name:"Sidebar",props:{menuList:{type:Array,required:!0}},data:function(){return{isCollapse:!1}},methods:{getItem:function(e){return e.children&&e.children.length>0?this.getSubMenu(e):this.getMenuItem(e)},getSubMenu:function(e){var t=this.$createElement,n=this.getItem;return t("el-submenu",{attrs:{index:e.path}},[t("template",{slot:"title"},[e.icon&&t("i",{class:e.icon}),this.getMenuTitle(e.title)]),e.children.map(function(e){return n(e)})])},getMenuItem:function(e){var t=this.$createElement;return t("el-menu-item",{attrs:{index:e.path}},[e.icon&&t("i",{class:e.icon}),this.getMenuTitle(e.title)])},getMenuTitle:function(e){var t=this.$createElement;return t("span",[" ",e," "])}},render:function(e){var t=this.menuList,n=this.isCollapse,r=this.getItem;return e("el-menu",{class:"sk-menu",attrs:{"unique-opened":!0,collapse:n,router:!0}},[t.map(function(e){return r(e)})])}},a=o,s=(n("96b1"),n("2877")),l=Object(s["a"])(a,r,i,!1,null,"388d2cfb",null),u=l.exports;t["default"]=u},"9d3e":function(e,t,n){"use strict";var r=n("f869"),i=n.n(r);i.a},"9dac":function(e,t,n){"use strict";var r=n("2847"),i=n.n(r);i.a},a83d:function(e,t,n){},b674:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",e._b({ref:"simpleForm",attrs:{model:e.model},nativeOn:{submit:function(e){e.preventDefault()}}},"el-form",e.mergedFormLayout,!1),[n("el-row",{attrs:{gutter:6}},e._l(e.widgetList,function(t,r){return n("el-col",{key:r,attrs:{span:t.span?t.span:e.widgetGrid}},[n("el-form-item",e._b({attrs:{prop:t.prop,rules:t.validate}},"el-form-item",t.formItem,!1),[t.slotname?[e._t(t.slotname)]:n("widget-item",{attrs:{model:e.model[t.prop],option:t},on:{"update:model":function(n){return e.$set(e.model,t.prop,n)}}})],2)],1)}),1)],1)},i=[],o=(n("c5f6"),{labelPosition:"top",labelWidth:"60px"}),a={name:"SimpleForm",props:{formLayout:{type:Object,default:function(){}},widgetList:{type:Array,required:!0},widgetGrid:{type:[Number,String],default:6},model:{type:Object,required:!0}},computed:{mergedFormLayout:function(){return this.$utils.merge(o,this.formLayout)}},methods:{handleTest:function(){},resetFields:function(){this.$refs.simpleForm.resetFields()},validate:function(){return this.$refs.simpleForm.validate()}}},s=a,l=n("2877"),u=Object(l["a"])(s,r,i,!1,null,"552b13f6",null),c=u.exports;t["default"]=c},d57b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"sk-label"},[e._v(e._s(e.handledVal))])},i=[],o=(n("7514"),n("c5f6"),{name:"SkLabel",props:{value:{type:[Array,String,Number,Object]},option:{type:Array}},computed:{handledVal:function(){var e=this;if(Array.isArray(this.option)){var t=this.option.find(function(t){return t.value===e.value})||{};return t.label}return this.value}}}),a=o,s=(n("4cf3"),n("2877")),l=Object(s["a"])(a,r,i,!1,null,"676ab7a4",null),u=l.exports;t["default"]=u},d8fc:function(e,t,n){"use strict";var r=n("3a5d"),i=n.n(r);i.a},e5c2:function(e,t,n){},f869:function(e,t,n){},f932:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sk-table"},[n("div",{staticClass:"sk-search"},[e._t("default")],2),n("el-table",e._b({ref:"simpleTableWrapper",attrs:{data:e.tableData,height:"auto"}},"el-table",e.tableAttrs,!1),e._l(e.tableColumns,function(t,r){return n("simple-table-column",{key:r,attrs:{"column-attrs":t,"slot-list":e.$scopedSlots}})}),1),e.withPagination?n("div",{staticClass:"sk-pagination"},[n("el-pagination",{attrs:{"page-sizes":[10,25,50,100],layout:"total, sizes, prev, pager, next, jumper",total:1e3}})],1):e._e()],1)},i=[],o={name:"SimpleTable",props:{tableColumns:{type:Array,required:!0},tableData:{type:Array,required:!0},tableAttrs:{type:Object,default:function(){return{}}},withPagination:{type:Boolean,default:!0}},methods:{}},a=o,s=(n("9dac"),n("2877")),l=Object(s["a"])(a,r,i,!1,null,"42511b90",null),u=l.exports;t["default"]=u},feb7:function(e,t,n){"use strict";var r=n("24ae"),i=n.n(r);i.a}});
//# sourceMappingURL=app.4e4d5dac.js.map