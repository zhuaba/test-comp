!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["@bilibili/sakura"]=e():t["@bilibili/sakura"]=e()}(this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=54)}({0:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"g",(function(){return s})),n.d(e,"c",(function(){return f}));var i="undefined"==typeof window,r=function(){var t,e,n,i=((null===(t=window)||void 0===t||null===(e=t.navigator)||void 0===e||null===(n=e.connection)||void 0===n?void 0:n.effectiveType)||"").match(/\d+/);return i?Math.max(window.devicePixelRatio-(4-i[0])|0,1):0|window.devicePixelRatio},o=i?null:window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},a=i?null:window.cancelIdleCallback||function(t){clearTimeout(t)},u=function(t){return!!t&&t.startsWith("http")},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.width,r=e.height,o=e.rule,a=e.webP,u=e.dpr;if(!t)return"";var s=c(t);if(!n&&!r)return s;var f=a?".webp":"",l=o?"_".concat(o):"",h=u||(i?2:0|(window.__img_dpr__||window.devicePixelRatio));return"".concat(s,"@").concat(n*h|0,"w_").concat(0|(r?r*h:n*h),"h").concat(l).concat(f)},f=function(t,e){for(var n=[],i=0;i<t;i++)n.push(e);return n},c=function(t){return t?t.replace(/^http:/,""):""}},1:function(t,e,n){"use strict";function i(t,e,n,i,r,o,a,u){var s,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),i&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),a?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=s):r&&(s=u?function(){r.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(f.functional){f._injectStyles=s;var c=f.render;f.render=function(t,e){return s.call(e),c(t,e)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,s):[s]}return{exports:t,options:f}}n.d(e,"a",(function(){return i}))},54:function(t,e,n){"use strict";n.r(e);var i=n(0);function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var a={name:"VRender",props:{column:{type:Number,default:1,validator:function(t){return t>=1}},height:{type:Number,default:0,validator:function(t){return t>=0}},remain:{type:Number,required:!0},total:{type:Number,required:!0,default:0},item:{type:Object,default:null},getter:{type:Function,default:function(){}}},data:function(){return{wrapHeight:0,offsetTop:0,lastScrollTop:0,start:0,flowHeight:0,paddingTop:0,cache:{}}},computed:{isSameHeight:function(){return 0!==this.height},isSingleColumn:function(){return 1===this.column}},watch:{total:function(t,e){t?t<e?this.reset():this._computeRenderHeight(this.isSameHeight?void 0:this.$slots.default.slice(e,t),e):this.clear(),this.scroll(this.lastScrollTop,!1)}},mounted:function(){this.setOffset(),this.setWrap(),this._computeRenderHeight(this.$slots.default,0)},methods:{reset:function(){this.clear(),this._computeRenderHeight(this.$slots.default,0)},setOffset:function(){this.offsetTop=this.$el.offsetTop},setWrap:function(t){this.wrapHeight=(t||function(t){var e=t;if(!e)return null;for(;e&&"HTML"!==e.tagName&&"BOYD"!==e.tagName&&1===e.nodeType;){var n=window.getComputedStyle(e);if("auto"===n.overflowY||"auto"===n.overflow||"hidden"===n.overflowY||"hidden"===n.overflow)return"HTML"===e.tagName||"BODY"===e.tagName?document:e;e=e.parentNode}return document}(this.$el)).clientHeight},getRect:function(t){return this.cache[t]},scroll:function(t,e){var n=this,i=void 0===e?t<this.lastScrollTop:e;this.lastScrollTop=t;var r=this.cache,o=this.start,a=this.remain,u=this.total;if(!(a>=u)){var s=t-this.offsetTop;if(s<=0)return this.paddingTop=0,void(this.start=0);this.wrapHeight||this.setWrap();var f=s+this.wrapHeight;if(f>=r[u-1].bottom)return this.start=u-a,void(this.paddingTop=r[u-a].top);var c=this.isSameHeight,l=this.column,h=this.height;i?function(){var t=a<5?0:a/2,e=r[o].top-s;if(!(e<=0))if(c){var i=Math.abs(Math.ceil(e/h/l)),u=Math.max(o-i-t|0,0);n.start=u,n.paddingTop=r[u].top}else for(var f=o-1;f>=0;f--)if(r[f].top<=s){var d=Math.max(f-t|0,0);n.paddingTop=r[d].top,n.start=d;break}}():function(){var t=r[o+a-1].bottom-f;if(!(t>=0))if(c){var e=Math.abs(Math.floor(t/h/l)),i=Math.min(o+e+a/2|0,u-a);n.start=i,n.paddingTop=r[i].top}else for(var s=o+a;s<u;s++)if(r[s].bottom>=f){var d=Math.min(s+1-a/2|0,u-a);n.paddingTop=r[d].top,n.start=d;break}}()}},clear:function(){this.flowHeight=0,this.paddingTop=0,this.start=0,this.cache={}},_computeRenderHeight:function(t,e){var n=this.total,o=this.column,a=this.cache;if(n)if(this.isSameHeight){var u=this.height,s=t?t.length+e:n;if(this.isSingleColumn){for(var f=e;f<s;f++){var c=u*f;a[f]={top:c,height:u,bottom:u+c}}this.flowHeight=u*n}else{for(var l=e;l<s;l++){var h=u*Math.floor(l/o);a[l]={top:h,height:u,bottom:u+h}}this.flowHeight=u*Math.ceil(n/o)}}else if(this.isSingleColumn){var d=e?a[e-1].bottom:0;t.forEach((function(t,n){var i=parseInt(t.data.style.height,10);a[n+e]={top:d,bottom:i+d,height:i},d+=i})),this.flowHeight=d}else{var p;if(e){p=[];for(var m=e-o,v=e-1;m<=v;m++)p.push(a[m].bottom)}else p=Object(i.c)(o,0);t.forEach((function(t,n){var i=Math.min.apply(Math,r(p)),o=parseInt(t.data.style.height,10);a[n+e]={top:i,bottom:o+i,height:o},p[p.indexOf(i)]+=o})),this.flowHeight=Math.max.apply(Math,r(p))}},_filter:function(t){var e=this.remain,n=this.total,i=this.start,r=this.item,o=e>=n?n:i+e,a=i-i%this.column;if(r){for(var u=[],s=a;s<o;s++)u.push(t(r,this.getter(s)));return u}return this.$slots.default?this.$slots.default.slice(a,o):[]}},render:function(t){return t("div",{style:{paddingTop:"".concat(this.paddingTop,"px"),height:"".concat(this.flowHeight,"px")},class:"v-render"},this._filter(t))}},u=n(1),s=Object(u.a)(a,undefined,undefined,!1,null,null,null);s.options.__file="src/components/render/render.vue";var f=s.exports;e.default=f}})}));