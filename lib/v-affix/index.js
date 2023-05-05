!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["@bilibili/sakura"]=e():t["@bilibili/sakura"]=e()}(this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=24)}({0:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"g",(function(){return a})),n.d(e,"c",(function(){return s}));var i="undefined"==typeof window,o=function(){var t,e,n,i=((null===(t=window)||void 0===t||null===(e=t.navigator)||void 0===e||null===(n=e.connection)||void 0===n?void 0:n.effectiveType)||"").match(/\d+/);return i?Math.max(window.devicePixelRatio-(4-i[0])|0,1):0|window.devicePixelRatio},r=i?null:window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},c=i?null:window.cancelIdleCallback||function(t){clearTimeout(t)},u=function(t){return!!t&&t.startsWith("http")},a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.width,o=e.height,r=e.rule,c=e.webP,u=e.dpr;if(!t)return"";var a=f(t);if(!n&&!o)return a;var s=c?".webp":"",l=r?"_".concat(r):"",d=u||(i?2:0|(window.__img_dpr__||window.devicePixelRatio));return"".concat(a,"@").concat(n*d|0,"w_").concat(0|(o?o*d:n*d),"h").concat(l).concat(s)},s=function(t,e){for(var n=[],i=0;i<t;i++)n.push(e);return n},f=function(t){return t?t.replace(/^http:/,""):""}},1:function(t,e,n){"use strict";function i(t,e,n,i,o,r,c,u){var a,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),i&&(s.functional=!0),r&&(s._scopeId="data-v-"+r),c?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},s._ssrRegister=a):o&&(a=u?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),a)if(s.functional){s._injectStyles=a;var f=s.render;s.render=function(t,e){return a.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,a):[a]}return{exports:t,options:s}}n.d(e,"a",(function(){return i}))},12:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"==typeof window&&(n=window)}t.exports=n},17:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-affix"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showFixedShim,expression:"showFixedShim"}],style:t.fixedShimStyle}),t._v(" "),n("div",{ref:"wrap",class:{"v-affix--fixed":!t.disabled&&t.isFixed},style:t.fixedSlotStyle},[t._t("default")],2)])};i._withStripped=!0;var o=n(5),r=n(4),c={name:"VAffix",props:{fixedTop:{type:Number},disabled:{type:Boolean,default:!1}},data:function(){return{isFixed:!1,showFixedShim:!1,fixedShimStyle:{},fixedSlotStyle:{}}},mounted:function(){var t=this;if(void 0!==this.fixedTop){var e=Object(r.g)(this.$el);Object(o.b)(e,"scroll",this.handleScroll),Object(o.b)(window,"resize",this.handleScroll),this.$nextTick((function(){t.$refs.wrap&&t.$el&&t.$el.offsetWidth&&t.handleScroll()}))}},beforeDestroy:function(){if(void 0!==this.fixedTop){var t=Object(r.g)(this.$el);Object(o.a)(t,"scroll",this.handleScroll),Object(o.a)(window,"resize",this.handleScroll)}},methods:{handleScroll:function(){if(this.disabled)return this.isFixed=!1,this.showFixedShim=!1,void(this.fixedSlotStyle=null);var t=this.isFixed,e=Object(r.f)(window,!0),n=Object(r.e)(this.$el);if(n.top-this.fixedTop<=e&&!t){this.isFixed=!0;var i=this.$refs.wrap;this.fixedShimStyle={width:"".concat(i.clientWidth,"px"),height:"".concat(i.clientHeight,"px")},this.showFixedShim=!0,this.fixedSlotStyle={top:"".concat(this.fixedTop,"px"),left:"".concat(n.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-fixed",!0)}else n.top-this.fixedTop>e&&t&&(this.showFixedShim=!1,this.fixedShimStyle={},this.isFixed=!1,this.fixedSlotStyle=null,this.$emit("on-fixed",!1))}}},u=n(1),a=Object(u.a)(c,i,[],!1,null,null,null);a.options.__file="src/components/affix/affix.vue";e.a=a.exports},24:function(t,e,n){"use strict";n.r(e);var i=n(17);e.default=i.a},4:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return i})),n.d(e,"h",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"g",(function(){return f})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return m}));var i=function(t,e){if(t){for(var n=t.className,i=(e||"").split(" "),o=0,r=i.length;o<r;o++){var u=i[o];u&&(t.classList?t.classList.add(u):c(t,u)||(n+=" "+u))}t.classList||(t.className=n)}},o=function(t,e){if(t&&e){for(var n=e.split(" "),i=" "+t.className+" ",o=0,u=n.length;o<u;o++){var a=n[o];a&&(t.classList?t.classList.remove(a):c(t,a)&&(i=i.replace(" "+a+" "," ")))}t.classList||(t.className=r(i))}},r=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},c=function(t,e){if(!t||!e)return!1;if(e.includes(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").includes(" "+e+" ")},u=function t(e,n){var i=-1;if(!n)return i;var o=n.endsWith("/")?n:"".concat(n,"/");if(e.map((function(t){return t.route})).forEach((function(t,e){if(t){var n=t.endsWith("/")?t:"".concat(t,"/");o===n&&(i=e)}})),-1!==i)return i;var r=o.split("/").filter((function(t){return t}));return r.length?(r.pop(),t(e,"/".concat(r.join("/"),"/"))):-1},a=function(t,e){var n=e?"scrollTop":"scrollLeft",i=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof i&&(i=window.document.documentElement[n]),i},s=function(t){var e=t.getBoundingClientRect(),n=a(window,!0),i=a(window),o=window.document.body,r=o.clientTop||0,c=o.clientLeft||0;return{top:e.top+n-r,left:e.left+i-c}},f=function(t){var e=t;if(!e)return null;for(;e&&"HTML"!==e.tagName&&"BOYD"!==e.tagName&&1===e.nodeType;){var n=window.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return"HTML"===e.tagName||"BODY"===e.tagName?document:e;e=e.parentNode}return document},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!t)return!1;var n=t.getBoundingClientRect();return n.top<window.innerHeight+e&&n.bottom+e>0&&n.left<window.innerWidth+e&&n.right+e>0},d=Date.now();var h=t,p=h.requestAnimationFrame||function(t){var e=Date.now(),n=Math.max(0,16-(e-d)),i=setTimeout(t,n);return d=e+n,i};h.cancelAnimationFrame||h.clearTimeout;function v(t){return p.call(h,t)}function m(t){v((function(){v(t)}))}}).call(this,n(12))},5:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return c}));var i=n(0),o=function(){if(!i.e)return document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)}}(),r=function(){if(!i.e)return document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)}}(),c=function(){var t="",e=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,n=document.getElementsByTagName("script")[0].style;for(var i in n)e.test(i)&&(t="-"+i.match(e)[0].toLowerCase()+"-");return!t&&"WebkitOpacity"in n&&(t="-webkit-"),!t&&"KhtmlOpacity"in n&&(t="-khtml-"),t}}})}));