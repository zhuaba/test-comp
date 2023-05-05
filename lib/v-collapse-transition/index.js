!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["@bilibili/sakura"]=e():t["@bilibili/sakura"]=e()}(this,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=21)}({12:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"==typeof window&&(n=window)}t.exports=n},21:function(t,e,n){"use strict";n.r(e);var o=n(4);e.default={name:"VCollapseTransition",functional:!0,render:function(t,e){var n=e.props,a=e.children,r={};return!1!==n.use&&(r.on={beforeEnter:function(t){Object(o.a)(t,"v-transition--collapse"),t.dataset||(t.dataset={});var e=Date.now()-t.dataset.startTime;(isNaN(e)||e>300)&&(t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom),t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0,t.dataset.startTime=Date.now()},enter:function(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height="".concat(t.dataset.targetHeight||t.scrollHeight,"px"),t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter:function(t){Object(o.h)(t,"v-collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.dataset.endTime=Date.now()},beforeLeave:function(t){t.dataset||(t.dataset={}),t.className.includes("v-transition--collapse")||Object(o.a)(t,"v-transition--collapse");var e=t.dataset.endTime-t.dataset.startTime;!isNaN(e)&&e>0&&(t.dataset.targetHeight||(t.dataset.targetHeight=t.offsetHeight)),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave:function(t){0!==t.scrollHeight&&(Object(o.a)(t,"v-collapse-transition"),t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0),t.dataset.startTime=Date.now()},afterLeave:function(t){Object(o.h)(t,"v-collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}),t("transition",r,a)}}},4:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o})),n.d(e,"h",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"g",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return v}));var o=function(t,e){if(t){for(var n=t.className,o=(e||"").split(" "),a=0,r=o.length;a<r;a++){var s=o[a];s&&(t.classList?t.classList.add(s):i(t,s)||(n+=" "+s))}t.classList||(t.className=n)}},a=function(t,e){if(t&&e){for(var n=e.split(" "),o=" "+t.className+" ",a=0,s=n.length;a<s;a++){var l=n[a];l&&(t.classList?t.classList.remove(l):i(t,l)&&(o=o.replace(" "+l+" "," ")))}t.classList||(t.className=r(o))}},r=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},i=function(t,e){if(!t||!e)return!1;if(e.includes(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").includes(" "+e+" ")},s=function t(e,n){var o=-1;if(!n)return o;var a=n.endsWith("/")?n:"".concat(n,"/");if(e.map((function(t){return t.route})).forEach((function(t,e){if(t){var n=t.endsWith("/")?t:"".concat(t,"/");a===n&&(o=e)}})),-1!==o)return o;var r=a.split("/").filter((function(t){return t}));return r.length?(r.pop(),t(e,"/".concat(r.join("/"),"/"))):-1},l=function(t,e){var n=e?"scrollTop":"scrollLeft",o=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof o&&(o=window.document.documentElement[n]),o},d=function(t){var e=t.getBoundingClientRect(),n=l(window,!0),o=l(window),a=window.document.body,r=a.clientTop||0,i=a.clientLeft||0;return{top:e.top+n-r,left:e.left+o-i}},c=function(t){var e=t;if(!e)return null;for(;e&&"HTML"!==e.tagName&&"BOYD"!==e.tagName&&1===e.nodeType;){var n=window.getComputedStyle(e).overflowY;if("scroll"===n||"auto"===n)return"HTML"===e.tagName||"BODY"===e.tagName?document:e;e=e.parentNode}return document},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!t)return!1;var n=t.getBoundingClientRect();return n.top<window.innerHeight+e&&n.bottom+e>0&&n.left<window.innerWidth+e&&n.right+e>0},f=Date.now();var p=t,g=p.requestAnimationFrame||function(t){var e=Date.now(),n=Math.max(0,16-(e-f)),o=setTimeout(t,n);return f=e+n,o};p.cancelAnimationFrame||p.clearTimeout;function m(t){return g.call(p,t)}function v(t){m((function(){m(t)}))}}).call(this,n(12))}})}));