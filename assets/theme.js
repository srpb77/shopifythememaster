// Fixed exports error
// when has a js if (typeof exports === 'undefined') { exports = {} } make error js because add small check js this to fix it
if (typeof exports !== 'undefined') exports = undefined;
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.8
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 *  Replace jquery to jQuery_BENT
 */
 !function(){var n={2:function(e,t,n){n="undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};e.exports=n},1:function(e){e.exports=function(e){"complete"===document.readyState||"interactive"===document.readyState?e.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&e.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",e)}},8:function(e,t,n){"use strict";n.r(t);var o=n(1),o=n.n(o),f=n(2);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,i,a=[],r=!0,l=!1;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){l=!0,i=e}finally{try{r||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r,g,u=f.window.navigator,p=-1<u.userAgent.indexOf("MSIE ")||-1<u.userAgent.indexOf("Trident/")||-1<u.userAgent.indexOf("Edge/"),l=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u.userAgent),m=function(){for(var e="transform WebkitTransform MozTransform".split(" "),t=document.createElement("div"),n=0;n<e.length;n+=1)if(t&&void 0!==t.style[e[n]])return e[n];return!1}();function d(){g=l?(!r&&document.body&&((r=document.createElement("div")).style.cssText="position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;",document.body.appendChild(r)),(r?r.clientHeight:0)||f.window.innerHeight||document.documentElement.clientHeight):f.window.innerHeight||document.documentElement.clientHeight}d(),f.window.addEventListener("resize",d),f.window.addEventListener("orientationchange",d),f.window.addEventListener("load",d),o()(function(){d()});var y=[];function h(){y.length&&(y.forEach(function(e,t){var n=e.instance,o=e.oldData,i=n.$item.getBoundingClientRect(),e={width:i.width,height:i.height,top:i.top,bottom:i.bottom,wndW:f.window.innerWidth,wndH:g},i=!o||o.wndW!==e.wndW||o.wndH!==e.wndH||o.width!==e.width||o.height!==e.height,o=i||!o||o.top!==e.top||o.bottom!==e.bottom;y[t].oldData=e,i&&n.onResize(),o&&n.onScroll()}),f.window.requestAnimationFrame(h))}var b=0,v=function(){function l(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var n=this;n.instanceID=b,b+=1,n.$item=e,n.defaults={type:"scroll",speed:.5,imgSrc:null,imgElement:".jarallax-img",imgSize:"cover",imgPosition:"50% 50%",imgRepeat:"no-repeat",keepImg:!1,elementInViewport:null,zIndex:-100,disableParallax:!1,disableVideo:!1,videoSrc:null,videoStartTime:0,videoEndTime:0,videoVolume:0,videoLoop:!0,videoPlayOnlyVisible:!0,videoLazyLoading:!0,onScroll:null,onInit:null,onDestroy:null,onCoverImage:null};var o,i,a=n.$item.dataset||{},r={};Object.keys(a).forEach(function(e){var t=e.substr(0,1).toLowerCase()+e.substr(1);t&&void 0!==n.defaults[t]&&(r[t]=a[e])}),n.options=n.extend({},n.defaults,r,t),n.pureOptions=n.extend({},n.options),Object.keys(n.options).forEach(function(e){"true"===n.options[e]?n.options[e]=!0:"false"===n.options[e]&&(n.options[e]=!1)}),n.options.speed=Math.min(2,Math.max(-1,parseFloat(n.options.speed))),"string"==typeof n.options.disableParallax&&(n.options.disableParallax=new RegExp(n.options.disableParallax)),n.options.disableParallax instanceof RegExp&&(o=n.options.disableParallax,n.options.disableParallax=function(){return o.test(u.userAgent)}),"function"!=typeof n.options.disableParallax&&(n.options.disableParallax=function(){return!1}),"string"==typeof n.options.disableVideo&&(n.options.disableVideo=new RegExp(n.options.disableVideo)),n.options.disableVideo instanceof RegExp&&(i=n.options.disableVideo,n.options.disableVideo=function(){return i.test(u.userAgent)}),"function"!=typeof n.options.disableVideo&&(n.options.disableVideo=function(){return!1});t=n.options.elementInViewport;(t=t&&"object"===c(t)&&void 0!==t.length?s(t,1)[0]:t)instanceof Element||(t=null),n.options.elementInViewport=t,n.image={src:n.options.imgSrc||null,$container:null,useImgTag:!1,position:"fixed"},n.initImg()&&n.canInitParallax()&&n.init()}var e,t,n;return e=l,(t=[{key:"css",value:function(t,n){return"string"==typeof n?f.window.getComputedStyle(t).getPropertyValue(n):(n.transform&&m&&(n[m]=n.transform),Object.keys(n).forEach(function(e){t.style[e]=n[e]}),t)}},{key:"extend",value:function(n){for(var e=arguments.length,o=new Array(1<e?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];return n=n||{},Object.keys(o).forEach(function(t){o[t]&&Object.keys(o[t]).forEach(function(e){n[e]=o[t][e]})}),n}},{key:"getWindowData",value:function(){return{width:f.window.innerWidth||document.documentElement.clientWidth,height:g,y:document.documentElement.scrollTop}}},{key:"initImg",value:function(){var e=this,t=e.options.imgElement;return(t=t&&"string"==typeof t?e.$item.querySelector(t):t)instanceof Element||(e.options.imgSrc?(t=new Image).src=e.options.imgSrc:t=null),t&&(e.options.keepImg?e.image.$item=t.cloneNode(!0):(e.image.$item=t,e.image.$itemParent=t.parentNode),e.image.useImgTag=!0),!!e.image.$item||(null===e.image.src&&(e.image.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",e.image.bgImage=e.css(e.$item,"background-image")),!(!e.image.bgImage||"none"===e.image.bgImage))}},{key:"canInitParallax",value:function(){return m&&!this.options.disableParallax()}},{key:"init",value:function(){var e,t=this,n={position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"},o={pointerEvents:"none",transformStyle:"preserve-3d",backfaceVisibility:"hidden",willChange:"transform,opacity"};t.options.keepImg||((e=t.$item.getAttribute("style"))&&t.$item.setAttribute("data-jarallax-original-styles",e),!t.image.useImgTag||(e=t.image.$item.getAttribute("style"))&&t.image.$item.setAttribute("data-jarallax-original-styles",e)),"static"===t.css(t.$item,"position")&&t.css(t.$item,{position:"relative"}),"auto"===t.css(t.$item,"z-index")&&t.css(t.$item,{zIndex:0}),t.image.$container=document.createElement("div"),t.css(t.image.$container,n),t.css(t.image.$container,{"z-index":t.options.zIndex}),p&&t.css(t.image.$container,{opacity:.9999}),t.image.$container.setAttribute("id","jarallax-container-".concat(t.instanceID)),t.$item.appendChild(t.image.$container),t.image.useImgTag?o=t.extend({"object-fit":t.options.imgSize,"object-position":t.options.imgPosition,"font-family":"object-fit: ".concat(t.options.imgSize,"; object-position: ").concat(t.options.imgPosition,";"),"max-width":"none"},n,o):(t.image.$item=document.createElement("div"),t.image.src&&(o=t.extend({"background-position":t.options.imgPosition,"background-size":t.options.imgSize,"background-repeat":t.options.imgRepeat,"background-image":t.image.bgImage||'url("'.concat(t.image.src,'")')},n,o))),"opacity"!==t.options.type&&"scale"!==t.options.type&&"scale-opacity"!==t.options.type&&1!==t.options.speed||(t.image.position="absolute"),"fixed"===t.image.position&&(n=function(e){for(var t=[];null!==e.parentElement;)1===(e=e.parentElement).nodeType&&t.push(e);return t}(t.$item).filter(function(e){var t=f.window.getComputedStyle(e),e=t["-webkit-transform"]||t["-moz-transform"]||t.transform;return e&&"none"!==e||/(auto|scroll)/.test(t.overflow+t["overflow-y"]+t["overflow-x"])}),t.image.position=n.length?"absolute":"fixed"),o.position=t.image.position,t.css(t.image.$item,o),t.image.$container.appendChild(t.image.$item),t.onResize(),t.onScroll(!0),t.options.onInit&&t.options.onInit.call(t),"none"!==t.css(t.$item,"background-image")&&t.css(t.$item,{"background-image":"none"}),t.addToParallaxList()}},{key:"addToParallaxList",value:function(){y.push({instance:this}),1===y.length&&f.window.requestAnimationFrame(h)}},{key:"removeFromParallaxList",value:function(){var n=this;y.forEach(function(e,t){e.instance.instanceID===n.instanceID&&y.splice(t,1)})}},{key:"destroy",value:function(){var e=this;e.removeFromParallaxList();var t,n=e.$item.getAttribute("data-jarallax-original-styles");e.$item.removeAttribute("data-jarallax-original-styles"),n?e.$item.setAttribute("style",n):e.$item.removeAttribute("style"),e.image.useImgTag&&(t=e.image.$item.getAttribute("data-jarallax-original-styles"),e.image.$item.removeAttribute("data-jarallax-original-styles"),t?e.image.$item.setAttribute("style",n):e.image.$item.removeAttribute("style"),e.image.$itemParent&&e.image.$itemParent.appendChild(e.image.$item)),e.$clipStyles&&e.$clipStyles.parentNode.removeChild(e.$clipStyles),e.image.$container&&e.image.$container.parentNode.removeChild(e.image.$container),e.options.onDestroy&&e.options.onDestroy.call(e),delete e.$item.jarallax}},{key:"clipContainer",value:function(){var e,t,n;"fixed"===this.image.position&&(t=(n=(e=this).image.$container.getBoundingClientRect()).width,n=n.height,e.$clipStyles||(e.$clipStyles=document.createElement("style"),e.$clipStyles.setAttribute("type","text/css"),e.$clipStyles.setAttribute("id","jarallax-clip-".concat(e.instanceID)),(document.head||document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)),n="#jarallax-container-".concat(e.instanceID," {\n            clip: rect(0 ").concat(t,"px ").concat(n,"px 0);\n            clip: rect(0, ").concat(t,"px, ").concat(n,"px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"),e.$clipStyles.styleSheet?e.$clipStyles.styleSheet.cssText=n:e.$clipStyles.innerHTML=n)}},{key:"coverImage",value:function(){var e=this,t=e.image.$container.getBoundingClientRect(),n=t.height,o=e.options.speed,i="scroll"===e.options.type||"scroll-opacity"===e.options.type,a=0,r=n,l=0;return i&&(o<0?(a=o*Math.max(n,g),g<n&&(a-=o*(n-g))):a=o*(n+g),1<o?r=Math.abs(a-g):o<0?r=a/o+Math.abs(a):r+=(g-n)*(1-o),a/=2),e.parallaxScrollDistance=a,l=i?(g-r)/2:(n-r)/2,e.css(e.image.$item,{height:"".concat(r,"px"),marginTop:"".concat(l,"px"),left:"fixed"===e.image.position?"".concat(t.left,"px"):"0",width:"".concat(t.width,"px")}),e.options.onCoverImage&&e.options.onCoverImage.call(e),{image:{height:r,marginTop:l},container:t}}},{key:"isVisible",value:function(){return this.isElementInViewport||!1}},{key:"onScroll",value:function(e){var t,n,o,i,a,r,l,s=this,c=s.$item.getBoundingClientRect(),u=c.top,p=c.height,m={},d=c;s.options.elementInViewport&&(d=s.options.elementInViewport.getBoundingClientRect()),s.isElementInViewport=0<=d.bottom&&0<=d.right&&d.top<=g&&d.left<=f.window.innerWidth,(e||s.isElementInViewport)&&(t=Math.max(0,u),n=Math.max(0,p+u),o=Math.max(0,-u),i=Math.max(0,u+p-g),a=Math.max(0,p-(u+p-g)),r=Math.max(0,-u+g-p),d=1-(g-u)/(g+p)*2,e=1,p<g?e=1-(o||i)/p:n<=g?e=n/g:a<=g&&(e=a/g),"opacity"!==s.options.type&&"scale-opacity"!==s.options.type&&"scroll-opacity"!==s.options.type||(m.transform="translate3d(0,0,0)",m.opacity=e),"scale"!==s.options.type&&"scale-opacity"!==s.options.type||(l=1,s.options.speed<0?l-=s.options.speed*e:l+=s.options.speed*(1-e),m.transform="scale(".concat(l,") translate3d(0,0,0)")),"scroll"!==s.options.type&&"scroll-opacity"!==s.options.type||(l=s.parallaxScrollDistance*d,"absolute"===s.image.position&&(l-=u),m.transform="translate3d(0,".concat(l,"px,0)")),s.css(s.image.$item,m),s.options.onScroll&&s.options.onScroll.call(s,{section:c,beforeTop:t,beforeTopEnd:n,afterTop:o,beforeBottom:i,beforeBottomEnd:a,afterBottom:r,visiblePercent:e,fromViewportCenter:d}))}},{key:"onResize",value:function(){this.coverImage(),this.clipContainer()}}])&&a(e.prototype,t),n&&a(e,n),l}(),o=function(e,t){for(var n,o=(e=("object"===("undefined"==typeof HTMLElement?"undefined":c(HTMLElement))?e instanceof HTMLElement:e&&"object"===c(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName)?[e]:e).length,i=0,a=arguments.length,r=new Array(2<a?a-2:0),l=2;l<a;l++)r[l-2]=arguments[l];for(;i<o;i+=1)if("object"===c(t)||void 0===t?e[i].jarallax||(e[i].jarallax=new v(e[i],t)):e[i].jarallax&&(n=e[i].jarallax[t].apply(e[i].jarallax,r)),void 0!==n)return n;return e};o.constructor=v,t.default=o}},o={};function l(e){var t=o[e];if(void 0!==t)return t.exports;t=o[e]={exports:{}};return n[e](t,t.exports,l),t.exports}l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};!function(){"use strict";l.r(s);var e=l(1),t=l.n(e),i=l(2),a=l(8);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n,o=i.window.jarallax;i.window.jarallax=a.default,i.window.jarallax.noConflict=function(){return i.window.jarallax=o,this},void 0!==i.jQuery_BENT&&((e=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];Array.prototype.unshift.call(t,this);var o=a.default.apply(i.window,t);return"object"!==r(o)?o:this}).constructor=a.default.constructor,n=i.jQuery_BENT.fn.jarallax,i.jQuery_BENT.fn.jarallax=e,i.jQuery_BENT.fn.jarallax.noConflict=function(){return i.jQuery_BENT.fn.jarallax=n,this}),t()(function(){(0,a.default)(document.querySelectorAll("[data-jarallax]"))})}()}();
var beeJarallax = jarallax.noConflict();
jQuery_BENT.fn.beeJarallax = jQuery_BENT.fn.jarallax.noConflict();
// If you already have global jarallax variable or jQuery.fn.jarallax, you can rename plugin.
//# sourceMappingURL=jarallax.min.js.map
// a parallax other https://github.com/dixonandmoe/rellax

/*!
 * The Final Countdown for jquery v2.2.0 (http://hilios.github.io/jquery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 * Replace jquery to jQuery_BENT
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jQuery_BENT"],a):a(jQuery_BENT)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery_BENT.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});

// Dayjs v1.10.7 - https://cdn.jsdelivr.net/npm/dayjs@1.10.7/dayjs.min.js
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs=e()}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

// Day js utc - https://unpkg.com/dayjs@1.10.7/plugin/utc.js
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs_plugin_utc=i()}(this,(function(){"use strict";var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,e=/([+-]|\d\d)/g;return function(s,f,n){var u=f.prototype;n.utc=function(t){var i={date:t,utc:!0,args:arguments};return new f(i)},u.utc=function(i){var e=n(this.toDate(),{locale:this.$L,utc:!0});return i?e.add(this.utcOffset(),t):e},u.local=function(){return n(this.toDate(),{locale:this.$L,utc:!1})};var o=u.parse;u.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t)};var r=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else r.call(this)};var a=u.utcOffset;u.utcOffset=function(s,f){var n=this.$utils().u;if(n(s))return this.$u?0:n(this.$offset)?a.call(this):this.$offset;if("string"==typeof s&&null===(s=function(t){void 0===t&&(t="");var s=t.match(i);if(!s)return null;var f=(""+s[0]).match(e)||["-",0,0],n=f[0],u=60*+f[1]+ +f[2];return 0===u?0:"+"===n?u:-u}(s)))return this;var u=Math.abs(s)<=16?60*s:s,o=this;if(f)return o.$offset=u,o.$u=0===s,o;if(0!==s){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(u+r,t)).$offset=u,o.$x.$localOffset=r}else o=this.utc();return o};var h=u.format;u.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,i)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return!!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var l=u.toDate;u.toDate=function(t){return"s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var c=u.diff;u.diff=function(t,i,e){if(t&&this.$u===t.$u)return c.call(this,t,i,e);var s=this.local(),f=n(t).local();return c.call(s,f,i,e)}}}));

// Day js timezone - https://unpkg.com/browse/dayjs@1.10.7/plugin/timezone.js
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dayjs_plugin_timezone=e()}(this,(function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,i,o){var r,a=function(t,n,i){void 0===i&&(i={});var o=new Date(t);return function(t,n){void 0===n&&(n={});var i=n.timeZoneName||"short",o=t+"|"+i,r=e[o];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[o]=r),r}(n,i).formatToParts(o)},u=function(e,n){for(var i=a(e,n),r=[],u=0;u<i.length;u+=1){var f=i[u],s=f.type,m=f.value,c=t[s];c>=0&&(r[c]=parseInt(m,10))}var d=r[3],l=24===d?0:d,v=r[0]+"-"+r[1]+"-"+r[2]+" "+l+":"+r[4]+":"+r[5]+":000",h=+e;return(o.utc(v).valueOf()-(h-=h%1e3))/6e4},f=i.prototype;f.tz=function(t,e){void 0===t&&(t=r);var n=this.utcOffset(),i=this.toDate(),a=i.toLocaleString("en-US",{timeZone:t}),u=Math.round((i-new Date(a))/1e3/60),f=o(a).$set("millisecond",this.$ms).utcOffset(15*-Math.round(i.getTimezoneOffset()/15)-u,!0);if(e){var s=f.utcOffset();f=f.add(n-s,"minute")}return f.$x.$timezone=t,f},f.offsetName=function(t){var e=this.$x.$timezone||o.tz.guess(),n=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return n&&n.value};var s=f.startOf;f.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var n=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return s.call(n,t,e).tz(this.$x.$timezone,!0)},o.tz=function(t,e,n){var i=n&&e,a=n||e||r,f=u(+o(),a);if("string"!=typeof t)return o(t).tz(a);var s=function(t,e,n){var i=t-60*e*1e3,o=u(i,n);if(e===o)return[i,e];var r=u(i-=60*(o-e)*1e3,n);return o===r?[i,o]:[t-60*Math.min(o,r)*1e3,Math.max(o,r)]}(o.utc(t,i).valueOf(),f,a),m=s[0],c=s[1],d=o(m).utcOffset(c);return d.$x.$timezone=a,d},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(t){r=t}}}));

// Day js advancedFormat - https://unpkg.com/dayjs@1.11.1/plugin/advancedFormat.js
// !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).dayjs_plugin_advancedFormat=t()}(this,(function(){"use strict";return function(e,t,r){var n=t.prototype,s=n.format;r.en.ordinal=function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"},n.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return s.bind(this)(e);var n=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return n.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return n.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return n.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return s.bind(this)(a)}}}));

var dayjs_utc = window.dayjs_plugin_utc,
    dayjs_timezone = window.dayjs_plugin_timezone;
    // dayjs_plugin_advancedFormat = window.dayjs_plugin_advancedFormat;

dayjs.locale('en'); // use locale globally
dayjs.extend(dayjs_utc);
dayjs.extend(dayjs_timezone);
// dayjs.extend(dayjs_plugin_advancedFormat);
// https://unpkg.com/browse/dayjs@1.10.7/plugin/

/*! Magnific Popup Nathan Custom - v1.1.0 - 2016-02-20
 * https://dimsemenov.com/plugins/magnific-popup/documentation.html */
!function(e){"function"==typeof define&&define.amd?define(["jQuery_BENT"],e):"object"==typeof exports?e(require("jQuery_BENT")):e(window.jQuery_BENT||window.Zepto)}(function(e){var t,n,i,o,a,r,s={},l=function(){},c=!!window.jQuery_BENT,d=e(window),p=function(e,n){t.ev.on("mfp"+e+".mfp",n)},u=function(t,n,i,o){var a=document.createElement("div");return a.className="mfp-"+t,i&&(a.innerHTML=i),o?n&&n.appendChild(a):(a=e(a),n&&a.appendTo(n)),a},f=function(n,i){t.ev.triggerHandler("mfp"+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},m=function(n){return n===r&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),r=n),t.currTemplate.closeBtn},g=function(){e.magnificPopupBee.instance||((t=new l).init(),e.magnificPopupBee.instance=t)};l.prototype={constructor:l,init:function(){var n=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o;if(!1===n.isObj){t.items=n.items.toArray(),t.index=0;var r,s=n.items;for(o=0;o<s.length;o++)if((r=s[o]).parsed&&(r=r.el[0]),r===n.el[0]){t.index=o;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(!t.isOpen){t.types=[],a="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopupBee.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=u("bg").on("click.mfp",function(){t.close()}),t.wrap=u("wrap").attr("tabindex",-1).on("click.mfp",function(e){t._checkIfClose(e.target)&&t.close()}),t.container=u("container",t.wrap)),t.contentContainer=u("content"),t.st.preloader&&(t.preloader=u("preloader",t.container,t.st.tLoading));var l=e.magnificPopupBee.modules;for(o=0;o<l.length;o++){var c=l[o];c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}f("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(p("MarkupParse",function(e,t,n,i){n.close_replaceWith=m(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(m())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:d.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup.mfp",function(e){27===e.keyCode&&t.close()}),d.on("resize.mfp",function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var g=t.wH=d.height(),v={};if(t.fixedContentPos&&t._hasScrollBar(g)){var h=t._getScrollbarSize();h&&(v.marginRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):v.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),f("BuildControls"),e("html").css(v),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP("mfp-ready"),t._setFocus()):t.bgOverlay.addClass("mfp-ready"),i.on("focusin.mfp",t._onFocusIn)},16),t.isOpen=!0,t.updateSize(g),f("Open"),n}t.updateItemHTML()},close:function(){t.isOpen&&(f("BeforeClose"),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP("mfp-removing"),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){f("Close");var n="mfp-removing mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup.mfp focusin.mfp"),t.ev.off(".mfp"),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,f("AfterClose")},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||d.height();t.fixedContentPos||t.wrap.css("height",t.wH),f("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(f("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var a=!!t.st[i]&&t.st[i].markup;f("FirstMarkupParse",a),t.currTemplate[i]=!a||e(a)}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder");var r=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(r,i),n.preloaded=!0,f("Change",n),o=n.type,t.container.prepend(t.contentContainer),f("AfterChange")},appendContent:function(e,n,i){if(""==e&&"ajax"==n)return!1;t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[n]?t.content.find(".mfp-close").length||t.content.append(m()):t.content=e:t.content="",f("BeforeAppend"),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var a=t.types,r=0;r<a.length;r++)if(o.el.hasClass("mfp-"+a[r])){i=a[r];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,f("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopupBee";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){if((void 0!==o.midClick?o.midClick:e.magnificPopupBee.defaults.midClick)||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopupBee.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(d.width()<a)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};f("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass("mfp-prevent-close")){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||d.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){if(n.target!==t.wrap[0]&&!e.contains(t.wrap[0],n.target))return t._setFocus(),!1},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),f("MarkupParse",[t,n,i]),e.each(n,function(n,i){if(void 0===i||!1===i)return!0;if((o=n.split("_")).length>1){var a=t.find(".mfp-"+o[0]);if(a.length>0){var r=o[1];"replaceWith"===r?a[0]!==i[0]&&a.replaceWith(i):"img"===r?a.is("img")?a.attr("src",i):a.replaceWith(e("<img>").attr("src",i).attr("class",a.attr("class"))):a.attr(o[1],i)}}else t.find(".mfp-"+n).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopupBee={instance:null,proto:l.prototype,modules:[],open:function(t,n){return g(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopupBee.instance&&e.magnificPopupBee.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopupBee.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close"><svg class="beemfp-icon-close" role="presentation" viewBox="0 0 16 14"><path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path></svg></button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopupBee=function(n){g();var i=e(this);if("string"==typeof n)if("open"===n){var o,a=c?i.data("magnificPopup"):i[0].magnificPopupBee,r=parseInt(arguments[1],10)||0;a.items?o=a.items[r]:(o=i,a.delegate&&(o=o.find(a.delegate)),o=o.eq(r)),t._openClick({mfpEl:o},i,a)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),c?i.data("magnificPopup",n):i[0].magnificPopupBee=n,t.addGroup(i,n);return i};var v,h,C,y=function(){C&&(h.after(C.addClass(v)).detach(),C=null)};e.magnificPopupBee.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push("inline"),p("Close.inline",function(){y()})},getInline:function(n,i){if(y(),n.src){var o=t.st.inline,a=e(n.src);if(a.length){var r=a[0].parentNode;r&&r.tagName&&(h||(v=o.hiddenClass,h=u(v),v="mfp-"+v),C=a.after(h).detach().removeClass(v)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),a=e("<div>");return n.inlineElement=a,a}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var w,b=function(){w&&e(document.body).removeClass(w)},T=function(){b(),t.req&&t.req.abort()};e.magnificPopupBee.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push("ajax"),w=t.st.ajax.cursor,p("Close.ajax",T),p("BeforeChange.ajax",T)},getAjax:function(n){w&&e(document.body).addClass(w),t.updateStatus("loading");var i=e(n.el).attr("data-storageid")||"nt94",o=e.extend({url:n.src,success:function(o,a,r){var l={data:o,xhr:r};f("ParseAjax",l),t.appendContent(e(l.data),"ajax"),n.finished=!0,b(),t._setFocus(),setTimeout(function(){t.wrap.addClass("mfp-ready")},16),t.updateStatus("ready"),f("AjaxContentAdded"),s[i]=o},error:function(){b(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings),a=s[i];if(void 0!==a){var r={data:a};f("ParseAjax",r),t.appendContent(e(r.data),"ajax"),b(),t._setFocus(),setTimeout(function(){t.wrap.addClass("mfp-ready")},16),t.updateStatus("ready"),f("AjaxContentAdded")}else t.req=e.ajax(o);return""}}});var x;e.magnificPopupBee.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image";t.types.push("image"),p("Open"+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),p("Close"+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),d.off("resize.mfp")}),p("Resize"+i,t.resizeImage),t.isLowIE&&p("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,x&&clearInterval(x),e.isCheckingImgSize=!1,f("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(a){x&&clearInterval(x),x=setInterval(function(){i.naturalWidth>0?t._onImageHasSize(e):(n>200&&clearInterval(x),3===++n?o(10):40===n?o(50):100===n&&o(500))},a)};o(1)},getImage:function(n,i){var o=0,a=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,f("ImageLoadComplete")):++o<200?setTimeout(a,100):r())},r=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",a).on("error.mfploader",r),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),(c=n.img[0]).naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""}(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(x&&clearInterval(x),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var I;e.magnificPopupBee.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,a,r=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},a="transition";return o["-webkit-"+a]=o["-moz-"+a]=o["-o-"+a]=o[a]=i,t.css(o),t},l=function(){t.content.css("visibility","visible")};p("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void l();(a=s(e)).css(t._getOffset()),t.wrap.append(a),o=setTimeout(function(){a.css(t._getOffset(!0)),o=setTimeout(function(){l(),setTimeout(function(){a.remove(),e=a=null,f("ZoomAnimationEnded")},16)},r)},16)}}),p("BeforeClose"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=r,!e){if(!(e=t._getItemToZoom()))return;a=s(e)}a.css(t._getOffset(!0)),t.wrap.append(a),t.content.css("visibility","hidden"),setTimeout(function(){a.css(t._getOffset())},16)}}),p("Close"+i,function(){t._allowZoom()&&(l(),a&&a.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(n){var i,o=(i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),a=parseInt(i.css("padding-top"),10),r=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-a;var s={width:i.width(),height:(c?i.innerHeight():i[0].offsetHeight)-r-a};return void 0===I&&(I=void 0!==document.createElement("p").style.MozTransform),I?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var k=function(e){if(t.currTemplate.iframe){var n=t.currTemplate.iframe.find("iframe");n.length&&(e||(n[0].src="//about:blank"),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopupBee.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push("iframe"),p("BeforeChange",function(e,t,n){t!==n&&("iframe"===t?k():"iframe"===n&&k(!0))}),p("Close.iframe",function(){k()})},getIframe:function(n,i){var o=n.src,a=t.st.iframe;e.each(a.patterns,function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace(/%id%/g,o),!1});var r={};return a.srcAction&&(r[a.srcAction]=o),t._parseMarkup(i,r,n),t.updateStatus("ready"),i}}});var _=function(e){var n=t.items.length;return e>n-1?e-n:e<0?n+e:e},P=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopupBee.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery";if(t.direction=!0,!n||!n.enabled)return!1;a+=" mfp-gallery",p("Open"+o,function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),i.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),p("UpdateStatus"+o,function(e,n){n.text&&(n.text=P(n.text,t.currItem.index,t.items.length))}),p("MarkupParse"+o,function(e,i,o,a){var r=t.items.length;o.counter=r>1?P(n.tCounter,a.index,r):""}),p("BuildControls"+o,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close");o.click(function(){t.prev()}),a.click(function(){t.next()}),t.container.append(o.add(a))}}),p("Change"+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),p("Close"+o,function(){i.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null})},next:function(){t.direction=!0,t.index=_(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=_(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=_(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),f("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,f("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});e.magnificPopupBee.registerModule("retina",{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;(n=isNaN(n)?n():n)>1&&(p("ImageHasSize.retina",function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),p("ElementParse.retina",function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),g()});

function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
}
//https://github.com/wilsonpage/fastdom
function createCommonjsModule(fn, basedir, module) {
   return module = {
      path: basedir,
      exports: {},
      require: function (path, base) {
         return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
   }, fn(module, module.exports), module.exports;
}
// Error commonjs: Dynamic requires are not currently supported by @rollup/plugin-commonjs
function commonjsRequire () {
   throw new Error('Error commonjs');
}
var fastdomBee = createCommonjsModule(function (module) {
   !function (win) {
      /**
       * Mini logger
       *
       * @return {Function}
       */

      var debug =  function () {};
      /**
       * Normalized rAF
       *
       * @type {Function}
       */

      var raf = win.requestAnimationFrame || win.webkitRequestAnimationFrame || win.mozRequestAnimationFrame || win.msRequestAnimationFrame || function (cb) {
        return setTimeout(cb, 16);
      };
      /**
       * Initialize a `FastDom`.
       *
       * @constructor
       */


      function FastDom() {
        var self = this;
        self.reads = [];
        self.writes = [];
        self.raf = raf.bind(win); // test hook
      }

      FastDom.prototype = {
        constructor: FastDom,

        /**
         * Adds a job to the read batch and
         * schedules a new frame if need be.
         *
         * @param  {Function} fn
         * @param  {Object} ctx the context to be bound to `fn` (optional).
         * @public
         */
        measure: function measure(fn, ctx) {
          var task = !ctx ? fn : fn.bind(ctx);
          this.reads.push(task);
          scheduleFlush(this);
          return task;
        },

        /**
         * Adds a job to the
         * write batch and schedules
         * a new frame if need be.
         *
         * @param  {Function} fn
         * @param  {Object} ctx the context to be bound to `fn` (optional).
         * @public
         */
        mutate: function mutate(fn, ctx) {
          var task = !ctx ? fn : fn.bind(ctx);
          this.writes.push(task);
          scheduleFlush(this);
          return task;
        },

        /**
         * Clears a scheduled 'read' or 'write' task.
         *
         * @param {Object} task
         * @return {Boolean} success
         * @public
         */
        clear: function clear(task) {
          return remove(this.reads, task) || remove(this.writes, task);
        },

        /**
         * Extend this FastDom with some
         * custom functionality.
         *
         * Because fastdom must *always* be a
         * singleton, we're actually extending
         * the fastdom instance. This means tasks
         * scheduled by an extension still enter
         * fastdom's global task queue.
         *
         * The 'super' instance can be accessed
         * from `this.fastdom`.
         *
         * @example
         *
         * var myFastdom = fastdom.extend({
         *   initialize: function() {
         *     // runs on creation
         *   },
         *
         *   // override a method
         *   measure: function(fn) {
         *     // do extra stuff ...
         *
         *     // then call the original
         *     return this.fastdom.measure(fn);
         *   },
         *
         *   ...
         * });
         *
         * @param  {Object} props  properties to mixin
         * @return {FastDom}
         */
        extend: function extend(props) {
          if (_typeof(props) != 'object') throw new Error('expected object');
          var child = Object.create(this);
          mixin(child, props);
          child.fastdom = this; // run optional creation hook

          if (child.initialize) child.initialize();
          return child;
        },
        // override this with a function
        // to prevent Errors in console
        // when tasks throw
        "catch": null
      };
      /**
       * Schedules a new read/write
       * batch if one isn't pending.
       *
       * @private
       */

      function scheduleFlush(fastdom) {
        if (!fastdom.scheduled) {
          fastdom.scheduled = true;
          fastdom.raf(flush.bind(null, fastdom));
        }
      }
      /**
       * Runs queued `read` and `write` tasks.
       *
       * Errors are caught and thrown by default.
       * If a `.catch` function has been defined
       * it is called instead.
       *
       * @private
       */


      function flush(fastdom) {
        var writes = fastdom.writes;
        var reads = fastdom.reads;
        var error;

        try {
          debug('flushing reads', reads.length);
          runTasks(reads);
          debug('flushing writes', writes.length);
          runTasks(writes);
        } catch (e) {
          error = e;
        }

        fastdom.scheduled = false; // If the batch errored we may still have tasks queued

        if (reads.length || writes.length) scheduleFlush(fastdom);

        if (error) {
          debug('task errored', error.message);
          if (fastdom["catch"]) fastdom["catch"](error);else throw error;
        }
      }
      /**
       * We run this inside a try catch
       * so that if any jobs error, we
       * are able to recover and continue
       * to flush the batch until it's empty.
       *
       * @private
       */


      function runTasks(tasks) {
        var task;

        while (task = tasks.shift()) {
          task();
        }
      }
      /**
       * Remove an item from an Array.
       *
       * @param  {Array} array
       * @param  {*} item
       * @return {Boolean}
       */


      function remove(array, item) {
        var index = array.indexOf(item);
        return !!~index && !!array.splice(index, 1);
      }
      /**
       * Mixin own properties of source
       * object into the target.
       *
       * @param  {Object} target
       * @param  {Object} source
       */


      function mixin(target, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) target[key] = source[key];
        }
      } // There should never be more than
      // one instance of `FastDom` in an app


      var exports = win.fastdom = win.fastdom || new FastDom(); // jshint ignore:line
      // Expose to CJS & AMD

      module.exports = exports;
   }(typeof window !== 'undefined' ? window : commonjsGlobal);
}),
smoothscroll = createCommonjsModule(function (module, exports) {
   /* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
   (function () {

     function polyfill() {
       // aliases
       var w = window;
       var d = document; // return if scroll behavior is supported and polyfill is not forced

       if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
         return;
       } // globals


       var Element = w.HTMLElement || w.Element;
       var SCROLL_TIME = 468; // object gathering original scroll methods

       var original = {
         scroll: w.scroll || w.scrollTo,
         scrollBy: w.scrollBy,
         elementScroll: Element.prototype.scroll || scrollElement,
         scrollIntoView: Element.prototype.scrollIntoView
       }; // define timing method

       var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
       /**
        * indicates if a the current browser is made by Microsoft
        * @method isMicrosoftBrowser
        * @param {String} userAgent
        * @returns {Boolean}
        */

       function isMicrosoftBrowser(userAgent) {
         var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];
         return new RegExp(userAgentPatterns.join('|')).test(userAgent);
       }
       /*
        * IE has rounding bug rounding down clientHeight and clientWidth and
        * rounding up scrollHeight and scrollWidth causing false positives
        * on hasScrollableSpace
        */


       var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
       /**
        * changes scroll position inside an element
        * @method scrollElement
        * @param {Number} x
        * @param {Number} y
        * @returns {undefined}
        */

       function scrollElement(x, y) {
         this.scrollLeft = x;
         this.scrollTop = y;
       }
       /**
        * returns result of applying ease math function to a number
        * @method ease
        * @param {Number} k
        * @returns {Number}
        */


       function ease(k) {
         return 0.5 * (1 - Math.cos(Math.PI * k));
       }
       /**
        * indicates if a smooth behavior should be applied
        * @method shouldBailOut
        * @param {Number|Object} firstArg
        * @returns {Boolean}
        */


       function shouldBailOut(firstArg) {
         if (firstArg === null || _typeof(firstArg) !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
           // first argument is not an object/null
           // or behavior is auto, instant or undefined
           return true;
         }

         if (_typeof(firstArg) === 'object' && firstArg.behavior === 'smooth') {
           // first argument is an object and behavior is smooth
           return false;
         } // throw error when behavior is not supported


         throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
       }
       /**
        * indicates if an element has scrollable space in the provided axis
        * @method hasScrollableSpace
        * @param {Node} el
        * @param {String} axis
        * @returns {Boolean}
        */


       function hasScrollableSpace(el, axis) {
         if (axis === 'Y') {
           return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
         }

         if (axis === 'X') {
           return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
         }
       }
       /**
        * indicates if an element has a scrollable overflow property in the axis
        * @method canOverflow
        * @param {Node} el
        * @param {String} axis
        * @returns {Boolean}
        */


       function canOverflow(el, axis) {
         var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
         return overflowValue === 'auto' || overflowValue === 'scroll';
       }
       /**
        * indicates if an element can be scrolled in either axis
        * @method isScrollable
        * @param {Node} el
        * @param {String} axis
        * @returns {Boolean}
        */


       function isScrollable(el) {
         var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
         var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
         return isScrollableY || isScrollableX;
       }
       /**
        * finds scrollable parent of an element
        * @method findScrollableParent
        * @param {Node} el
        * @returns {Node} el
        */


       function findScrollableParent(el) {
         while (el !== d.body && isScrollable(el) === false) {
           el = el.parentNode || el.host;
         }

         return el;
       }
       /**
        * self invoked function that, given a context, steps through scrolling
        * @method step
        * @param {Object} context
        * @returns {undefined}
        */


       function step(context) {
         var time = now();
         var value;
         var currentX;
         var currentY;
         var elapsed = (time - context.startTime) / SCROLL_TIME; // avoid elapsed times higher than one

         elapsed = elapsed > 1 ? 1 : elapsed; // apply easing to elapsed time

         value = ease(elapsed);
         currentX = context.startX + (context.x - context.startX) * value;
         currentY = context.startY + (context.y - context.startY) * value;
         context.method.call(context.scrollable, currentX, currentY); // scroll more if we have not reached our destination

         if (currentX !== context.x || currentY !== context.y) {
           w.requestAnimationFrame(step.bind(w, context));
         }
       }
       /**
        * scrolls window or element with a smooth behavior
        * @method smoothScroll
        * @param {Object|Node} el
        * @param {Number} x
        * @param {Number} y
        * @returns {undefined}
        */


       function smoothScroll(el, x, y) {
         var scrollable;
         var startX;
         var startY;
         var method;
         var startTime = now(); // define scroll context

         if (el === d.body) {
           scrollable = w;
           startX = w.scrollX || w.pageXOffset;
           startY = w.scrollY || w.pageYOffset;
           method = original.scroll;
         } else {
           scrollable = el;
           startX = el.scrollLeft;
           startY = el.scrollTop;
           method = scrollElement;
         } // scroll looping over a frame


         step({
           scrollable: scrollable,
           method: method,
           startTime: startTime,
           startX: startX,
           startY: startY,
           x: x,
           y: y
         });
       } // ORIGINAL METHODS OVERRIDES
       // w.scroll and w.scrollTo


       w.scroll = w.scrollTo = function () {
         // avoid action when no arguments are passed
         if (arguments[0] === undefined) {
           return;
         } // avoid smooth behavior if not required


         if (shouldBailOut(arguments[0]) === true) {
           original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
           arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
           return;
         } // LET THE SMOOTHNESS BEGIN!


         smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
       }; // w.scrollBy


       w.scrollBy = function () {
         // avoid action when no arguments are passed
         if (arguments[0] === undefined) {
           return;
         } // avoid smooth behavior if not required


         if (shouldBailOut(arguments[0])) {
           original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : _typeof(arguments[0]) !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
           return;
         } // LET THE SMOOTHNESS BEGIN!


         smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
       }; // Element.prototype.scroll and Element.prototype.scrollTo


       Element.prototype.scroll = Element.prototype.scrollTo = function () {
         // avoid action when no arguments are passed
         if (arguments[0] === undefined) {
           return;
         } // avoid smooth behavior if not required


         if (shouldBailOut(arguments[0]) === true) {
           // if one number is passed, throw error to match Firefox implementation
           if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
             throw new SyntaxError('Value could not be converted');
           }

           original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
           arguments[0].left !== undefined ? ~~arguments[0].left : _typeof(arguments[0]) !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
           arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
           return;
         }

         var left = arguments[0].left;
         var top = arguments[0].top; // LET THE SMOOTHNESS BEGIN!

         smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
       }; // Element.prototype.scrollBy


       Element.prototype.scrollBy = function () {
         // avoid action when no arguments are passed
         if (arguments[0] === undefined) {
           return;
         } // avoid smooth behavior if not required


         if (shouldBailOut(arguments[0]) === true) {
           original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
           return;
         }

         this.scroll({
           left: ~~arguments[0].left + this.scrollLeft,
           top: ~~arguments[0].top + this.scrollTop,
           behavior: arguments[0].behavior
         });
       }; // Element.prototype.scrollIntoView


       Element.prototype.scrollIntoView = function () {
         // avoid smooth behavior if not required
         if (shouldBailOut(arguments[0]) === true) {
           original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
           return;
         } // LET THE SMOOTHNESS BEGIN!


         var scrollableParent = findScrollableParent(this);
         var parentRects = scrollableParent.getBoundingClientRect();
         var clientRects = this.getBoundingClientRect();

         if (scrollableParent !== d.body) {
           // reveal element inside parent
           smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top); // reveal parent in viewport unless is fixed

           if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
             w.scrollBy({
               left: parentRects.left,
               top: parentRects.top,
               behavior: 'smooth'
             });
           }
         } else {
           // reveal element in viewport
           w.scrollBy({
             left: clientRects.left,
             top: clientRects.top,
             behavior: 'smooth'
           });
         }
       };
     }

     {
       // commonjs
       module.exports = {
         polyfill: polyfill
       };
     }
   })();
});
// https://github.com/iamdustan/smoothscroll

(function($) {
   'use strict';

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Assign Variable
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   var $window         = $(window),
   $document           = $(document);

   var windowWidth     = $window.width();

   var $html           = $('html'),
   $body               = $('body'), 
   IsScreen767Smaller  = (windowWidth < 768),
   IsScreen1025Smaller = (windowWidth <= 1024),
   IsDesignMode        = window.BEErequest.design_mode,
   BEEstrings          = window.BEEstrings,
   cacheNameFirst      = BEEThemeSP.cacheNameFirst,
   isTouch             = ('ontouchstart' in window) || window.DocumentTouch && window.document instanceof DocumentTouch || window.navigator.maxTouchPoints || window.navigator.msMaxTouchPoints ? true : false;
   
   BEEThemeSP.isHover  = $html.hasClass('beep-hover');
   //BEEThemeSP.isHover  = (window.matchMedia("(hover: hover)").matches);
   BEEThemeSP.isTouch  = isTouch && (!BEEThemeSP.isHover || IsScreen1025Smaller);
   
   // Update again if overwrite
   document.addEventListener('theme:hover', function(evt) {
     //console.log('theme:hover')
     BEEThemeSP.isHover = true;
     BEEThemeSP.isTouch = false;
   });


   BEEThemeSP.getToFetchSection = function (url, typeData = 'text', urlFull = null) {

      let last_url = url ? BEEThemeSP.root_url + url : urlFull;

      return fetch( last_url , {
       method: 'GET',
       headers: { 'Cache-Control': 'no-cache' }
      })
      .then((response) => {
         if ( response.redirected ) return 'NVT_94';
         return (typeData == 'text') ? response.text() : response.json();
      })
      .then((responseData) => {
         //console.log(responseData);
         return responseData;
      })
      .catch((error) => {
         console.warn(error);
         return 'NVT_94';
      })
   };

   /**
    * OverflowScroller
    * -----------------------------------------------------------------------------
    * Warehouse
    * infoOverflowScroller: true
      var productInfoElement = this.element.querySelector('.bee-product__info-container--sticky');
      if (productInfoElement && this.options['infoOverflowScroll']) {
         this.infoOverflowScroller = new BEEThemeSP.OverflowScroller(productInfoElement, {
           offsetTop: document.documentElement.style.getPropertyValue('--header-is-sticky') * parseInt(document.documentElement.style.getPropertyValue('--header-height') + 30),
           offsetBottom: 30,
           updateOffsetTop: true
         });
      }
      
    *
    */
   BEEThemeSP.OverflowScroller = (function() {

      function overflowScroller(element, options) {
           if (!element && windowWidth > 767) {
             return;
           }
     
           this.element = element;
           this.options = options;
           this.lastKnownY = window.scrollY;
           this.currentTop = 0;
           this.initialTopOffset = options['offsetTop'] || parseInt(window.getComputedStyle(this.element).top);
           this._attachListeners();

           if (options.updateOffsetTop) {
           this.initialTopOffsetCache = this.initialTopOffset;
           this._updateInitialTopOffset();
           }
      }

      overflowScroller.prototype = Object.assign({}, overflowScroller.prototype, {

         _updateInitialTopOffset: function () {
            window.addEventListener('BeeHeaderReveal', function(){
               this.initialTopOffset = this.initialTopOffsetCache
            });
            window.addEventListener('BeeHeaderHide', function(){
               this.initialTopOffset = 30
            });
         },

         _attachListeners: function () {
             this._checkPositionListener = this._checkPosition.bind(this);
             window.addEventListener('scroll', this._checkPositionListener);

         },

         _checkPosition: function () {
             var _this = this;
             // console.log(_this.initialTopOffset)
             fastdomBee.measure(function () {
               var bounds = _this.element.getBoundingClientRect(),
                   maxTop = bounds.top + window.scrollY - _this.element.offsetTop + _this.initialTopOffset,
                   minTop = _this.element.clientHeight - window.innerHeight + (_this.options['offsetBottom'] || 0);
     
               if (window.scrollY < _this.lastKnownY) {
                 _this.currentTop -= window.scrollY - _this.lastKnownY;
               } else {
                 _this.currentTop += _this.lastKnownY - window.scrollY;
               }
     
               _this.currentTop = Math.min(Math.max(_this.currentTop, -minTop), maxTop, _this.initialTopOffset);
               _this.lastKnownY = window.scrollY;
             });
             
             fastdomBee.mutate(function () {
               _this.element.style.top = "".concat(_this.currentTop, "px");
             });
         },

         destroy: function () {
          window.removeEventListener('scroll', this._checkPositionListener);
         }

      });

      return overflowScroller;

   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * SWATCH FUCTIONS
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   
   var Variants = (function() {

      var data_swatch_item = '[data-swatch-item]',
      data_current_value   = '[data-current-value]',
      str_soldout          = 'is--soldout',
      str_unavai           = 'is--unavailable',
      str_nt_sold_un       = str_soldout + ' ' + str_unavai,
      str_nt_un            = str_unavai,
      class_selected       = '.is--selected',
      txt_nav_selected     = 'is-nav-selected',
      txt_selected         = 'is--selected',
      is_media_hide        = 'is--media-hide',
      
      BEEProductStrings    = window.BEEProductStrings,
      txt_unavailable      = BEEProductStrings.unavailable,
      txt_addToCart        = BEEProductStrings.addToCart,
      txt_soldOut          = BEEProductStrings.soldOut,
      txt_preOrder         = BEEProductStrings.preOrder,
      txt_addToCart        = BEEProductStrings.addToCart,
      txt_replace_qs_atc   = BEEProductStrings.replace_qs_atc,
      txt_replace_qs_pre   = BEEProductStrings.replace_qs_pre,
      badgeSavePercent2    = BEEProductStrings.badgeSavePercent2,
      badgeSaveFixed2      = BEEProductStrings.badgeSaveFixed2,

      aria = {
         disabled:'aria-disabled'
      };

      function Variants(options) {
         
         this.$container              = options.$container;
         this.variants                = options.variants;
         this.productOptions          = options.productOptions;
         this.productOptionSize       = options.PrOptionsSize;
         this.formSelectorId          = options.formSelectorId;
         this.$formSelectorId         = $(this.formSelectorId);
         this.$originalSelectorId     = options.$originalSelectorId;
         this.originalSelectorId      = this.$originalSelectorId[0];
         this.enableHistoryState      = options.enableHistoryState;
         this.removeSoldout           = options.removeSoldout;
         this.$options1               = options.$options1;
         this.$options2               = options.$options2;
         this.$options3               = options.$options3;
         this.isNoPick                = options.isNoPick;
         this.isNoPickOriginal        = options.isNoPick;
         this.hasSoldoutUnavailable   = options.hasSoldoutUnavailable;
         this.canMediaGroup           = options.canMediaGroup;
         this.badgesConfigs           = options.badgesConfigs;
         this.$variantImg             = options.$variantImg;
         this.disableVariantImage     = options.disableVariantImage;
         this.swatchWidth             = options.swatchWidth;
         this.$incomingMess           = this.$formSelectorId.find('[data-incoming__mess');
         this.isSticky                = options.isSticky;
         this.useStickySelect         = options.useStickySelect;
         this.isMainProduct           = options.isMainProduct;
         this.$quantity               = this.$formSelectorId.find('[data-quantity-value');
         this.$mainMedia              = this.$container.find('[data-main-media]');
         this.$mainNav                     = this.$container.find('.bee-carousel__nav');
         this.clickedOptions          = [];
         // this.showFirstMedia          = (this.isNoPickOriginal && !this.canMediaGroup) ? false : options.showFirstMedia;
         this.showFirstMedia          = this.isNoPickOriginal ? false : options.showFirstMedia;

         this.oldVariant              = {};
         this.currentVariant          = {};
         
         this.mediaID                 = 0;
         // this.eventChangeSlider       = false;
         this.eventClickedSwatch      = false;

         // Initial state for global variantState object
         this.variantState = {
            available: true,
            soldOut: false,
            onSale: false,
            preOrder: false,
            showUnitPrice: false
         };

         // Update soldout
         //console.log(this.removeSoldout, str_soldout)
         //if (this.removeSoldout) str_soldout = str_nt_sold_un;
         // console.log(str_soldout)
         // if (this.removeSoldout) {
         //  this.$formSelectorId.addClass('is-remove-soldout-true');
         // }
         
         // Initial global var badge
         this.$productPrice    = this.$container.find('[data-product-price]');
         this.formartPrice     = (this.$productPrice.data('formartPrice') == 'ins-del') ? '<ins>money_ins</ins> <del>money_del</del>' : '<del>money_del</del> <ins>money_ins</ins>';
         this.saletype         = this.$productPrice.data('saletype');
         let $productUnitPrice = this.$container.find('[data-product-unit-price]');
         this.$unit_price      = $productUnitPrice.find('[data-unit-price]');
         this.$unit_base       = $productUnitPrice.find('[data-unit-base]');

         let $badge         = this.$container.find('[data-product-single-badge]'),
         badgesConfigsTexts = this.badgesConfigs.texts,
         badgesSaleStyle    = this.badgesConfigs.saleStyle;

         this.badgeSelector = {
            $onSale: $badge.find('[data-badge-sale]'),
            $preOrder: $badge.find('[data-badge-preorder]'),
            $soldOut: $badge.find('[data-badge-soldout]')
         };

         if ( badgesSaleStyle == '2') {
           this.saleLabel = badgesConfigsTexts.SavePercent;
         } else {
           this.saleLabel = badgesConfigsTexts.sale;

         }
         
         this.useComingMess = false;
         if ( this.$incomingMess[0] ) {
            this.useComingMess          = true;
            this.$incomingAvailable     = this.$incomingMess.find('[data-incoming-available]');
            this.$incomingSoldout       = this.$incomingMess.find('[data-incoming-soldout]');
            this.$incomingAvailableDate = this.$incomingAvailable.find('[data-incoming-date]');
            this.$incomingSoldoutDate   = this.$incomingSoldout.find('[data-incoming-date]');
         }

         // Button atc
 
         this.$addToCartButton      = this.formSelectorId.find('[type="submit"][name="add"]');
         this.$quantityWrapper      = this.formSelectorId.find('[data-quantity-wrapper]');
         this.$paymentButton        = this.formSelectorId.find('.shopify-payment-button');
         this.$addToCartButtonText  = this.$addToCartButton.find('.bee-btn-atc_text');
         
         // Update sticky atc
         if (this.isSticky) {
            let $sticky                 = $('[data-sticky-addtocart]'); 
            this.$stickyimg             = $sticky.find('[data-sticky-img] img');
            this.$stickyVtitle          = $sticky.find('[data-sticky-v-title]');
            this.$stickyPrice           = $sticky.find('[data-sticky-price]');
            this.$stickyATC             = $sticky.find('[data-action-atc]');
            this.$stickyATCText         = this.$stickyATC.find('.bee-btn-atc_text');
            this.$stickySelect          = $sticky.find('[data-sticky-select]');
            this.stickyImgOrginal       = this.$stickyimg.data('orginal');
            this.$stickyQuantityWrapper = $sticky.find('[data-quantity-wrapper]');
            this.$stickyQuantity        = this.$stickyQuantityWrapper.find('[data-quantity-value]');
            this.isStickyChanging       = false;

            var self = this;
            // self.$stickyQuantity.change(function(){
            //   self.$quantity.val(this.value)
            // });
            // self.$quantity.change(function(){
            //   self.$stickyQuantity.val(this.value)
            // }); 
            self.$stickySelect.on('change:drop', function (e, $this, value) {
              // console.log( e, $this, value );      
              // console.log('$stickySelect changed')
              // if (!self.isStickyChanging) {
              //  self.isStickyChanging = true;
              //  return;
              // }
              self.eventClickedSwatch = false;
              self.isStickyChanging = true;
              self.originalSelectorId.value = value;
              self.originalSelectorId.dispatchEvent( new Event('change', { bubbles: true, cancelable: true }) );
            }); 
         }

         if (BEEThemeSP.isEditCartReplace) {
            this.txt_addToCart = txt_replace_qs_atc;
            this.txt_preOrder  = txt_replace_qs_pre;
         }

         // console.log(options)

         //this.currentVariant          = this._getVariantFromVariantid();
         
        
         this.unQuickShopInline = options.unQuickShopInline;
         this.isQuickShopForm   = options.isQuickShopForm;
         this.$imgMainItem      = this.$container.find('[data-main-img-change]');

         if (options.unQuickShopInline) {
            
            this.originalSelectorId.addEventListener('change', this._onSelectChange.bind(this) );
            //this.$originalSelectorId.on('change', this._onSelectChange.bind(this) );
            this._updateSwatchFromSizeOne();

            if( this.isNoPick ){
               this.currentVariant = this._getVariantFromVariantid();
               //this.updateMediaFilterNoPick  = this._updateMediaFilterNoPick;
            } else {
               // update selector first
               // console.log(this.originalSelectorId)
               this.originalSelectorId.dispatchEvent( new Event('change', { bubbles: true, cancelable: true }) );
            }

         } else {

            // case quickshop inline actvie
            var self = this;

            // update var after replace button
            self.$container.one( 'replace:btnAtc', function() {
            //this.$container.one( 'replaceSuccess:btnAtc', function() {
               self.$addToCartButton      = self.$container.find('.bee-pr-addtocart');
               self.$quantityWrapper      = self.$container.find('[data-quantity-wrapper]');
               self.$addToCartButtonText  = self.$addToCartButton.find('.bee-text-pr');
            });

            //self._updateMediaFirst =
            // self.updateMediaFirst = self._updateMediaFirst; 

            $badge = self.$container.find('[data-product-badge]');
            self.badgeSelector = {
               $onSale: $badge.find('[data-badge-sale]'),
               $preOrder: $badge.find('[data-badge-preorder]'),
               $soldOut: $badge.find('[data-badge-soldout]')
            };
            // console.log(self.badgeSelector)

            // self.$imgMainItem = self.$container.find('[data-pr-img]');
            self.$dataHref    = self.$container.find('[data-pr-href]');
            self.productHref  = self.$dataHref.attr('href');

            self.currentVariant = self._getVariantFromVariantid();
            self.$originalSelectorId.on('change', self._onQuickShopInlineChange.bind(self) );
            self._updateSwatchFromSizeOne();
         }
      }

      function getStrUnSlold(available) {
         // if (this.removeSoldout && !available) return;
         return available ? str_nt_sold_un : str_unavai;
      }

      // Variants.prototype = ({
      //    _updateSwatchSelector: _updateSwatchSelector
      // });
      Variants.prototype = Object.assign({}, Variants.prototype, {

         /**
           * Event handler for when a variant input changes.
           */
         _onSelectChange: function() {

            // console.log('_onSelectChange');
            // console.log(this);
            
            /**
             * Check when swatch click not check againt new variant
             */
            if (!this.eventClickedSwatch) this.oldVariant = this.currentVariant;

            var currentVariant  = (this.eventClickedSwatch) ? this.currentVariant : this._getVariantFromVariantid();
            // console.log(currentVariant);
            // update var eventClickedSwatch
            //this.eventClickedSwatch = false;

            this._setVariantState(currentVariant);
            this._updateSwatchSelector(currentVariant, this.oldVariant, this.formSelectorId, this.hasSoldoutUnavailable);
            this._updatePrice(currentVariant, this.oldVariant, this.$container);
            this._updateAddToCartButton(currentVariant, this.oldVariant, this.$addToCartButton, this.$quantityWrapper, this.$paymentButton, this.$addToCartButtonText);
            this._updateAvailability(currentVariant, this.oldVariant, this.$container);
            this._updateSKU(currentVariant, this.oldVariant, this.$container);
            this._updateBarcode(currentVariant, this.oldVariant, this.$container);
            this._updateMetafield(currentVariant, this.oldVariant, this.$container);
            this._updateDelivery(currentVariant, this.oldVariant, this.$container);
            this._updateInventoryQuantity(currentVariant, this.oldVariant, this.$container);

            // update store availabilities info
            this._updatePickupAvailabilityContent(currentVariant, this.$container);
            
            // update Notify Back in Stock
            this._updateNotifyBackinStock(currentVariant, this.$container);
            
            // update Badges
            this._updateBadges();

            this._updateIncomingMess(currentVariant);

            if (!currentVariant) {
              return;
            }

            this.currentVariant = currentVariant;
            
            // console.log(this.canMediaGroup)
            if (this.canMediaGroup) this._updateMediaFilter(currentVariant, this.oldVariant, this.$container);

            this._updateMedia(currentVariant, this.oldVariant, this.$container);

            this._updateQuantity(currentVariant);
            
            if (!this.disableVariantImage) this._updateVariantImageSwatch(currentVariant);

            if (this.isSticky) this._updateStickyATC(currentVariant);
            

            if (this.enableHistoryState) {
              this._updateHistoryState(currentVariant);
            }

            this.$container.trigger({
              type: 'variant:changed',
              currentVariant: currentVariant,
              oldVariant: this.oldVariant
            });

            // this.$container.trigger( "variant:changed", [ currentVariant, this.oldVariant ] );
            // $( document ).on( "variant:changed", function( event, currentVariant, oldVariant ) {
            //   console.log(currentVariant, oldVariant)
            // });
         },

         _onQuickShopInlineChange: function() {
            // console.log('_onQuickShopInlineChange')

            // console.log('_onSelectChange');
            // console.log(this);
            this.notSelected = true;
            /**
             * Check when swatch click not check againt new variant
             */
            if (!this.eventClickedSwatch) this.oldVariant = this.currentVariant;

            var currentVariant  = (this.eventClickedSwatch) ? this.currentVariant : this._getVariantFromVariantid();
            // console.log(currentVariant);
            // update var eventClickedSwatch
            //this.eventClickedSwatch = false;

            this._setVariantState(currentVariant);
            this._updateSwatchSelector(currentVariant, this.oldVariant, this.formSelectorId, this.hasSoldoutUnavailable);
            this._updatePrice(currentVariant, this.oldVariant, this.$container);
            this._updateAtcBtnQSInline(currentVariant, this.oldVariant, this.$addToCartButton, this.$quantityWrapper, this.$addToCartButtonText);
            
            // update Badges
            this._updateBadges();

            if (!currentVariant) {
              return;
            }

            this.currentVariant = currentVariant;
            

            this._updateMedia(currentVariant, this.oldVariant, this.$container);

            this._updateQuantity(currentVariant);

            this.$dataHref.attr('href',this._getUrlWithVariant( this.productHref, currentVariant.id ));
            //this._getUrlWithVariant( this.productHref, currentVariant.id );
            
            if (!this.disableVariantImage) this._updateVariantImageSwatch(currentVariant);

            this.$container.trigger({
              type: 'variant:changed',
              currentVariant: currentVariant,
              oldVariant: this.oldVariant
            });
         },

         /**
          * Find variant based on selected values.
          *
          * @param  {array} selectedValues - Values of variant inputs
          * @return {object || undefined} found - Variant object from product.variants
          */
         _getVariantFromOptions: function() {
            var clickedOptions = this.clickedOptions;
            var variants       = this.variants;
            // console.log(clickedOptions)
            var found          = variants.find(function(variant) {
              return clickedOptions.every(function(values) {
                // console.log(variant[values.index],values)
                return variant[values.index] === values.value;
              });
            });

            return found || 'nathan';

                     // var found      = [],
                     // variants       = $container.variants,
                     // option1        = $container.currentVariant.option1,
                     // option2        = $container.currentVariant.option2,
                     // option3        = $container.currentVariant.option3;
                 //     if( option3) {
                 //        found = $.grep( variants, function( v, i ) {
                 //           console.log('xx')
                 //           return v.option1 == option1 && v.option2 == option2 && v.option3 == option3;
                 //        });
                 //     } else if( option2) {
                 //         found = $.grep( variants, function( v, i ) {
                 //           //return v.option1 === vl0 && v.option2 === vl1 && v.option3 === vl2 ;
                 //           return v.option1 == option1 && v.option2 == option2;
                 //         });
                 //     } else {
                 //         found= $.grep( variants, function( v, i ) {
                 //           //return v.option1 === vl0 && v.option2 === vl1 && v.option3 === vl2 ;
                 //           return v.option1 == option1;
                 //         })
                      
                 //     }
                 //     return found[0] || 'nathan';
         },

         /**
          * Find variant based on selected values by size.
          */
         _getVariantFromSize: function() {
            // console.log('_getVariantFromSize')
            var found           ,
            variants            = this.variants,
            OptionSize          = this.productOptionSize,
            removeSoldout       = this.removeSoldout,
            option1             = this.clickedOptions[0].value,
            option2             = this.clickedOptions[1],
            option3             = this.clickedOptions[2],
            clickedCurrentValue = this.clickedCurrentValue,
            clickedCurrentIndex = this.clickedCurrentIndex;
        
            if ( OptionSize == 1 ) {
               found = $.grep( variants, function( v, i ) {
                 //return v.available == false;
                 return v.available;
               });
               
            } else if ( OptionSize == 3 & removeSoldout ) {
              option2 = option2.value;
              found = $.grep( variants, function( v, i ) {
                 return v.option1 == option1 && v.option2 == option2 && v.available;
               });
               if ( !found[0] ) {
                  found =  $.grep( variants, function( v, i ) {
                    return v.available && v[clickedCurrentIndex] == clickedCurrentValue;
                  });
                  //console.log('bbb',found)
               }
               
            } else if ( removeSoldout ) {
               found = $.grep( variants, function( v, i ) {
                 return v.option1 == option1 && v.available;
               });
               if ( !found[0] ) {
                  found =  $.grep( variants, function( v, i ) {
                    return v.available && v[clickedCurrentIndex] == clickedCurrentValue;
                  });
               }
               
               
            } else if ( OptionSize == 3 ) {
               option2 = option2.value;
               found = $.grep( variants, function( v, i ) {
                 return v.option1 == option1 && v.option2 == option2;
               });
               if ( !found[0] ) {
                  found =  $.grep( variants, function( v, i ) {
                    return v[clickedCurrentIndex] == clickedCurrentValue;
                  });
               }
               
            } else {
               found = $.grep( variants, function( v, i ) {
                 return v.option1 == option1;
               });
               if ( !found[0] ) {
                  found =  $.grep( variants, function( v, i ) {
                    return v[clickedCurrentIndex] == clickedCurrentValue;
                  });
               }
             
            }

            return found[0];

         },

         _getVariantFromVariantid: function() {
            // console.log('_getVariantFromVariantid')
            var found = [],
            variants  = this.variants,
            l         = variants.length,
            variantID = this.$originalSelectorId.val(); // get variant id current

            for (let i = 0; i < l; i++) {
              // console.log(variants[i])
              if (variants[i].id == variantID) { 
               found[0] = variants[i]; 
               break; 
              }
            }
            return found[0] || null;
         },

         /**
          * Find variant based on selected values by size.
          */
         _getVariantFromOptionIndex: function(type,currentVariant) {
            var found,
            variants       = this.variants,
            option1        = currentVariant.option1,
            option2        = currentVariant.option2,
            option3        = currentVariant.option3;
            // console.log('_getVariantFromOptionIndex',currentVariant)
            
            switch(type) {
              case 1:
               found = $.grep( variants, function( v, i ) {
                 return v.option1 == option1;
               });
                break;

              case 2:
               found = $.grep( variants, function( v, i ) {
                 return v.option2 == option2;
               });
                break;

              case 3:
               found = $.grep( variants, function( v, i ) {
                 return v.option3 == option3;
               });
                break;

              case 1.2:
                found = $.grep( variants, function( v, i ) {
                 return v.option1 == option1 && v.option2 == option2;
                });
                break;

              default:
                // as 0
               found = $.grep( variants, function( v, i ) {
                 return v.available == false;
               });
            }

            // if ( type == 1 ) {
            //    found = $.grep( variants, function( v, i ) {
            //      return v.option1 == option1;
            //    });
               
            // } else if ( type == 1.2 ) {
            //    found = $.grep( variants, function( v, i ) {
            //      return v.option1 == option1 && v.option2 == option2;
            //    });
               
            // } else {
            //    found = $.grep( variants, function( v, i ) {
            //      return v.available == false;
            //    });
             
            // }
             
            return found || 'nathan';

         },

         /**
          * Update Media Filter No Pick
          */ 
         _updateMediaFilterNoPick: function() {
            // console.log(this.currentVariant, '_updateMediaFilterNoPick');
            // console.log('_updateMediaFilterNoPick')
            if ( !this.clickedCurrentValue || !this.clickedCurrentIndex || !this.canMediaGroup ) return;
            var index    = this.clickedCurrentIndex.replace('option',''),
            optionName   = this.productOptions[parseInt(index) - 1].name || 'nobee', // option1, option2, option3 - 1
            value        = this.clickedCurrentValue || 'nobee',
            $mainMedia   = this.$mainMedia,
            $mainNav     = this.$mainNav,
            strSelector  = `[data-grname="${(optionName+'').toLowerCase()}"][data-grpvl="${(value+'').toLowerCase()}"]`,
            // + '' to convert value to string, fix error when is a number, will error with fuction toLowerCase
            $groupFilter = $mainMedia.find(strSelector),
            $navFilter   = $mainNav.find(strSelector);

            if ( $groupFilter.length == 0 ) return;
            // console.log(optionName, value, $groupFilter);
            
            $mainMedia.find('[data-main-slide]').addClass(is_media_hide);
            $groupFilter.removeClass(is_media_hide);

            // update Thumb
            $mainNav.find('.bee-carousel__nav-item').addClass(is_media_hide);
            $navFilter.removeClass(is_media_hide);

            if ( $mainMedia.hasClass('flickitybee-enabled') ) {
               $mainMedia.trigger( 'update.flickitybee');
               // add class selected first nav item
               if ( !$navFilter.hasClass(txt_nav_selected) ) $navFilter.first().addClass(txt_nav_selected);

            } else if ($mainMedia.hasClass('isotopebee-enabled')) {

               initMediaVisible($mainMedia);
               $mainMedia.isotopebee();

            }
         },

         _updateSwatchFromSizeOne: function() {
            // console.log(this, this.variants.length)
            var self = this,
                selfVariants = self.variants,
                selfVariantsLength = selfVariants.length,
                i = 0,
                getProductSize = false,
                $optionsOne,
                optionsOneIndex = 0,
                productOptionSize = self.productOptionSize,
                productOptions = self.productOptions;

            if (productOptionSize == 3) {
               var options0Length = productOptions[0].values.length,
                   options1Length = productOptions[1].values.length,
                   options2Length = productOptions[2].values.length;
               
            } else if (productOptionSize == 2) {
               var options0Length = productOptions[0].values.length,
                   options1Length = productOptions[1].values.length;
            }

            // if (productOptionSize < 2  ) {
            //    getProductSize = 1;
            //    $optionsOne =  self.$options1;
            //    optionsOneIndex = 0;

            // } else if ( productOptionSize == 2 && (options0Length == 1 || options1Length == 1) ) {
            //    getProductSize = 1;
            //    if ( options0Length > 1 ) {
            //       $optionsOne =  self.$options1;
            //       optionsOneIndex = 0;
            //    } else {
            //       $optionsOne =  self.$options2;
            //       optionsOneIndex = 1;
            //    }

            // } else if ( productOptionSize == 3 && ((options0Length == 1 && options1Length == 1) || (options0Length == 1 && options2Length == 1) || (options1Length == 1 && options2Length == 1)) ) {
            //    getProductSize = 1;
            //    if ( options0Length > 1 ) {
            //       $optionsOne =  self.$options1;
            //       optionsOneIndex = 0;
            //    } else if ( options1Length > 1 ) {
            //       $optionsOne =  self.$options2;
            //       optionsOneIndex = 1;
            //    } else {
            //       $optionsOne =  self.$options3;
            //       optionsOneIndex = 2;
            //    }
            // }
            
            if (productOptionSize < 2  ) {

               getProductSize   = 1;
               $optionsOne      = self.$options1;
               // optionsOneIndex  = 0;

            } else if ( productOptionSize == 2 && options0Length == 1)  {
        
               getProductSize   = 1;
               $optionsOne      = self.$options2;
               optionsOneIndex  = 1;

            } else if ( productOptionSize == 2 && options1Length == 1)  {

               getProductSize   = 1;
               $optionsOne      = self.$options1;
               // optionsOneIndex  = 0;

            } else if ( productOptionSize == 3 && options0Length == 1 && options1Length == 1 ) {

               getProductSize   = 1;
               $optionsOne      = self.$options3;
               optionsOneIndex  = 2;

            } else if ( productOptionSize == 3 && options0Length == 1 && options2Length == 1 ) {

               getProductSize   = 1;
               $optionsOne      = self.$options2;
               optionsOneIndex  = 1;

            } else if ( productOptionSize == 3 && options1Length == 1 && options2Length == 1 ) {

               getProductSize   = 1;
               $optionsOne      = self.$options1;
               // optionsOneIndex  = 0;

            // } else if ( productOptionSize == 3 && options0Length == 1 ) {
            //     getProductSize   = 2;
               // optionsOneIndex  = 1;

            } else if ( productOptionSize == 3 && options2Length == 1 ) {
              getProductSize   = 2;
            }
            
            // Fix when has a option name full sold out but enable remove soldout
            // add soldout when has 1 option name
            // if (productOptionSize > 1 && self.hasSoldoutUnavailable && selfVariantsLength > 1) {
            if (self.hasSoldoutUnavailable) {
               //console.log(productOptionSize)
               // optionsOneIndex = optionsOneIndex || 0;
           
               let _values   = productOptions[optionsOneIndex].values,
               l             = _values.length,
               $items        = self[`$options${optionsOneIndex+1}`].find('[data-swatch-item]');

               for (let i = 0; i < l; i++) {

                  // let found =  $.grep( self.variants, function( v, ii ) {
                  //       return v.options[optionsOneIndex] == _values[i] && v.available;
                  //     });
                  let isOptionSoldOut = true,
                  values_i            = _values[i];
                   
                  for (let i2 = 0; i2 < selfVariantsLength; i2++) {
                     let _variant = selfVariants[i2];
                     //console.log(_variant)
                     if (_variant.options[optionsOneIndex] == values_i && _variant.available) {
                        isOptionSoldOut = false;
                        break;
                     }
                  }
                   
                  if (isOptionSoldOut) {
                     // console.log(optionsOneIndex)
                     $items.eq(i).addClass(str_soldout);
                  }
               }
            }
            // end Fix when has a option name full sold out but enable remove soldout

            self.getProductSize = getProductSize;
            // if ( !getProductSize || getProductSize == 2 || selfVariantsLength < 2) return;
            self.$optionsOne = $optionsOne;
            self.$optionsOneIndex = optionsOneIndex;

            // if ( !this.isNoPick ) return;

            // for (i = 0; i < selfVariantsLength; i++) {
            //    // console.log(i, selfVariants[i])
            //    if (!selfVariants[i].available) $optionsOne.find(data_swatch_item).eq(i).addClass(str_soldout);
            // }

         },

         /**
          * Update Media Filter
          *  We may have selected a variant that will cause the set of images to change completely. To do that we need to iterate through all images,
          *  check for the attribute "data-grname" and verify if some images need to be filtered or not
          */ 
         _updateMediaFilter: function(currentVariant, oldVariant, $container) {
            // console.log('_updateMediaFilter')
            // console.log(this.currentVariant, this.clickedCurrentValue, this.clickedCurrentIndex)
            //if ( !this.clickedCurrentValue || !this.clickedCurrentIndex || !this.canMediaGroup ) return;
            if ( !this.currentVariant || !this.canMediaGroup ) return;
            //console.log(this.$mainMedia,this.$mainNav)
            var _productOptions = this.productOptions,
            _productOptionSize  = this.productOptionSize,
            _currentVariant     = this.currentVariant,
            $mainMedia   = this.$mainMedia,
            $mainNav     = this.$mainNav,
            strSelector,
            $groupFilter,
            $navFilter,
            optionName,
            $grname,
            index,
            value;

            for (let i = 0; i < _productOptionSize; i++) { 

               optionName   = _productOptions[i].name || 'nobee';   
               $grname      = $mainMedia.find(`[data-grname="${ (optionName+'').toLowerCase() }"]`);
               
               if ($grname.length == 0) return;
               
               // + '' to convert value to string, fix error when is a number, will error with fuction toLowerCase
               value        = _currentVariant.options[i]+'';
               strSelector  = `[data-grname="${(optionName+'').toLowerCase()}"][data-grpvl="${value.toLowerCase()}"]`;
               break;
            }

            $groupFilter = $mainMedia.find(strSelector);
            $navFilter   = $mainNav.find(strSelector);

            // fastdomBee.mutate(function () { });
            // var index    = this.clickedCurrentIndex.replace('option',''),
            // optionName   = this.productOptions[parseInt(index) - 1].name || 'nobee', // option1, option2, option3 - 1
            // value        = this.clickedCurrentValue || 'nobee',
            // $mainMedia   = $container.find('[data-main-media]'),
            // + '' to convert value to string, fix error when is a number, will error with fuction toLowerCase
            // strSelector  = `[data-grname="${(optionName+'').toLowerCase()}"][data-grpvl="${(value+'').toLowerCase()}"]`,
            // $groupFilter = $mainMedia.find(strSelector),
            // $mainNav     = $container.find('.bee-carousel__nav'),
            // $navFilter   = $mainNav.find(strSelector);

            //console.log('yyy', optionName, value, $groupFilter);
            // if ( $groupFilter.length == 0 ) {
            //    $grname.removeClass(is_media_hide);
            // }
            if ( $groupFilter.length == 0 || value == this.groupValue ) return;
            //console.log('kkk', optionName, value, $groupFilter);
            this.groupValue = value;
            
            $mainMedia.find('[data-main-slide]').addClass(is_media_hide);
            $groupFilter.removeClass(is_media_hide);

            // update Thumb
            $mainNav.find('.bee-carousel__nav-item').addClass(is_media_hide);
            $navFilter.removeClass(is_media_hide);

            if ( $mainMedia.hasClass('flickitybee-enabled') ) {
               $mainMedia.trigger( 'update.flickitybee');
               // $mainMedia.trigger({
               //   type: 'update.flickitybee',
               //   mediaID: currentVariant.featured_media.id
               // });
               // console.log(currentVariant.featured_media)
               if (currentVariant.featured_media) var indexMedia = $mainMedia.find(`[data-media-id="${currentVariant.featured_media.id}"`).index();
               // console.log(indexMedia)
               $mainMedia.flickitybee( 'selectCell', indexMedia, false, false );
               // console.log('_updateMedia flickitybee')
            } else if ($mainMedia.hasClass('isotopebee-enabled')) {

               initMediaVisible($mainMedia);
               $mainMedia.isotopebee();

            }
         },

         /**
          * Update Swatch Selector
          */ 
         _updateSwatchSelector: function(currentVariant, oldVariant, $formSelectorId, hasSoldoutUnavailable) {
            // console.log(currentVariant)
            // if ( !hasSoldoutUnavailable ) return;
            // Disable to update swatch select when trigger
            
            // Update label soldout, unavailable
            // console.log('_updateSwatchSelector');

            //if (currentVariant == oldVariant) return;

            // $formSelectorId.find(class_selected).removeClass(txt_selected);
            // $formSelectorId.find(data_current_value).html('');
            // if (!currentVariant) {
               // currentVariant = this.currentVariant;
            // }

            //console.log('currentVariant', _this44.currentVariant);

            var self      = this,
            $optionsSet   ,
            ArrOPSet      ,
            optionSet     ,
            optionCurrent ,
            optionVariant ,
            optionIndex   = 1,
            $options1     = self.$options1,
            $options2     = self.$options2,
            $options3     = self.$options3,
            optionSize    = self.getProductSize || self.productOptionSize,
            getOption     = [],
            l             = 0,
            ntvariant     ,
            i             ,
            option1       = currentVariant.option1,
            option2       = currentVariant.option2,
            option3       = currentVariant.option3,
            ArrOP1        = [],
            ArrOP2        = [],
            ArrOP3        = [];

            // update setected, current name
            $formSelectorId.find(class_selected).removeClass(txt_selected);
            $formSelectorId.find(data_current_value).html('');
            
            ArrOP1 = self.productOptions[0].values;
            $options1.find(data_current_value).html(option1);
            $options1.find(data_swatch_item).eq(ArrOP1.indexOf(option1)).addClass(txt_selected);
             
            if ( $options2[0] ) { 
               ArrOP2 = self.productOptions[1].values;
               $options2.find(data_current_value).html(option2);
               $options2.find(data_swatch_item).eq(ArrOP2.indexOf(option2)).addClass(txt_selected);
            }
            
            if ( $options3[0] ) { 
               ArrOP3 = self.productOptions[2].values;
               $options3.find(data_current_value).html(option3);
               $options3.find(data_swatch_item).eq(ArrOP3.indexOf(option3)).addClass(txt_selected);
            }

            // var ArrOP2Length = ArrOP2.length,
            //     ArrOP3Length = ArrOP3.length;
            
            
            // Update label soldout, unavailable
            if ( !hasSoldoutUnavailable ) return;

            // if ( self.getProductSize ) {
            //    optionSize = self.getProductSize;
            // }
            switch(optionSize) {
               case 3:
                  // console.log(getOption)
                  // if option 2 has 1 value && option 3 has 1 value
                  // if (ArrOP3Length == 1 && ArrOP2Length == 1) {
                  //    getOption = this._getVariantFromOptionIndex(0,currentVariant);
                  //    l          = getOption.length;
                  //    for (i = 0; i < l; i++) {
                  //     $options2.find(data_swatch_item).eq(ArrOP1.indexOf(option1)).addClass(str_soldout);
                  //    }
                  // } else if (ArrOP3Length == 1) {

                  // if option 3 has 1 value
                  if (ArrOP3.length == 1) {
                     $optionsSet   = $options1;
                     ArrOPSet      = ArrOP1;
                     optionSet     = 'option3';
                     optionCurrent =  option3;
                     optionVariant = 'option1';
                     optionIndex   = 3;
                  } else {
                     $optionsSet   = $options3;
                     ArrOPSet      = ArrOP3;
                     optionSet     = 'option1';
                     optionCurrent =  option1;
                     optionVariant = 'option3';
                  }

                  getOption = this._getVariantFromOptionIndex(optionIndex,currentVariant);
                  l         = getOption.length;

                  $optionsSet.find(data_swatch_item).addClass(str_nt_sold_un);
                  $options2.find(data_swatch_item).addClass(str_nt_sold_un);

                  for (i = 0; i < l; i++) {

                     ntvariant = getOption[i];
                     //console.log(ntvariant);
                     if ( ntvariant[optionSet] == optionCurrent ) {
                       if (ntvariant.available) {
                           $options2.find(data_swatch_item).eq( ArrOP2.indexOf(ntvariant.option2) ).removeClass(str_nt_sold_un);

                           if ( ntvariant.option2 == option2 ) {
                              $optionsSet.find(data_swatch_item).eq (ArrOPSet.indexOf(ntvariant[optionVariant]) ).removeClass( str_nt_sold_un );
                           }

                       } else {
                          $options2.find(data_swatch_item).eq( ArrOP2.indexOf(ntvariant.option2) ).removeClass(str_unavai);
                           if ( ntvariant.option2 == option2 ) {
                              $optionsSet.find(data_swatch_item).eq (ArrOPSet.indexOf(ntvariant[optionVariant]) ).removeClass( str_unavai );
                           }
                       }
                    }
                  }

                  break;

               case 2:

                  // if option 2 has 1 value
                  // if (ArrOP2Length == 1) {

                  //    $options1.find(data_swatch_item).addClass(str_nt_sold_un);
                  //    getOption = this._getVariantFromOptionIndex(2,currentVariant);
                  //    l         = getOption.length;
                  //    //console.log(getOption,ArrOP1);

                  //    for (i = 0; i < l; i++) {
                  //      ntvariant = getOption[i];
                  //      //console.log(ntvariant);
                  //      if ( ntvariant.option2 == option2 ) {
                  //         $options1.find(data_swatch_item).eq(ArrOP1.indexOf(ntvariant.option1)).removeClass( getStrUnSlold(ntvariant.available) );
                  //      }
                  //    }
                  // } else {

                     // if normal
                     getOption = this._getVariantFromOptionIndex(1,currentVariant);
                     l         = getOption.length;

                     $options2.find(data_swatch_item).addClass(str_nt_sold_un);

                     for (i = 0; i < l; i++) {

                       ntvariant = getOption[i];
                       //console.log(ntvariant);
                       if ( ntvariant.option1 == option1 ) {
                        $options2.find(data_swatch_item).eq(ArrOP2.indexOf(ntvariant.option2)).removeClass( getStrUnSlold(ntvariant.available) );
                       }
                     }
                  // }

                  break;

               default:
                  // getOption = self._getVariantFromOptionIndex(0,currentVariant);
                  // l          = getOption.length;
                  // for (i = 0; i < l; i++) {
                  //   ntvariant = getOption[i];
                  //   $options1.find(data_swatch_item).eq(ArrOP1.indexOf(ntvariant.option1)).addClass(str_soldout);
                  // }
                  
                  // // Trigger enable remove soldout when no pick select a soldout
                  // if ( self.removeSoldout && $options1.find(class_selected).is(':hidden') ) {
                  //    $options1.find(`${data_swatch_item}:visible:first`).trigger('click');
                  // }
                  // getOption = self._getVariantFromOptionIndex(0,currentVariant);
                  // l          = getOption.length;
                  // for (i = 0; i < l; i++) {
                  //   ntvariant = getOption[i];
                  //   $options1.find(data_swatch_item).eq(ArrOP1.indexOf(ntvariant.option1)).addClass(str_soldout);
                  // }
                  
                  // Trigger enable remove soldout when no pick select a soldout
                  if ( self.removeSoldout && self.$optionsOne.find(class_selected).is(':hidden') ) {
                     self.$optionsOne.find(`${data_swatch_item}:visible:first`).trigger('click');
                  }
            }
         },
      
         /**
          * Update Metafield
          */
         _updateMetafield: function(currentVariant, oldVariant, $container) {

            if (!currentVariant || currentVariant.id == oldVariant.id) return;
            
            $container.find('[data-variant-toggle]').hide();
            $container.find(`[data-variant-toggle="${currentVariant.id}"]`).show();
            if (this.isMainProduct) {
               $('[data-variant-tab][data-variant-toggle]').hide();
               $(`[data-variant-tab][data-variant-toggle="${currentVariant.id}"]`).show();
            }
            // console.log('_updatemetafield')
         },
         
         /**
          * Update Media
          */
         _updateMedia: function(currentVariant, oldVariant, $container) {
            
            // https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
            // console.log('_updateMedia', currentVariant, oldVariant ); JSON.stringify(obj1) === JSON.stringify(obj2)
            //if ( !currentVariant.featured_media || currentVariant.featured_media == oldVariant.featured_media || this.showFirstMedia) {
            if ( !currentVariant.featured_media || JSON.stringify(currentVariant.featured_media) === JSON.stringify(oldVariant.featured_media) || this.showFirstMedia) {
                this.showFirstMedia = false;
                // console.log(currentVariant.featured_media, oldVariant.featured_media)
                return;
            }
            // if (this.eventChangeSlider) {
            //    this.eventChangeSlider = false;
            //    return;
            // }
            // 
            if (!this.unQuickShopInline || this.isQuickShopForm) {
              // console.log('sss',currentVariant.featured_media, currentVariant, this.$imgMainItem)
              // console.log(currentVariant.featured_media, oldVariant.featured_media)
              let previewImage = currentVariant.featured_media.preview_image;
              this.$imgMainItem.attr('data-srcset', BEEThemeSP.Images.getNewImageUrl(previewImage.src, 1) );
              //this.$imgMainItem.attr('data-srcset', BEEThemeSP.Images.getNewImageUrl(previewImage.src, 1) ).parent().css('--aspect-ratioapt',previewImage.aspect_ratio);

              if (this.notSelected) {
               this.$container.addClass('bee-colors-selected');
               this.notSelected = false;
               //--aspect-ratioapt
              }
              return;
            }

            this.mediaID = currentVariant.featured_media.id;
            // console.log('_updateMedia')
            
            var $mainCarousel = $container.find('[data-main-media]');
            if ( $mainCarousel.hasClass('flickitybee-enabled') ) {
              var index = $mainCarousel.find('[data-media-id="'+this.mediaID+'"]').index();
              $mainCarousel.flickitybee( 'select', index, false, true );

              // update var eventClickedSwatch
              this.eventClickedSwatch = false;
              // console.log('_updateMedia slider')
            } else {
               // Got to Dawn global.js
               // console.log('not slider trigger media')
               var $parent = $mainCarousel.find('[data-media-id="'+this.mediaID+'"]'),
               parent      = $parent[0];

               // console.log(BEEThemeSP.isVisible($parent))
               // console.log(this.isStickyChanging)
               if (!parent || BEEThemeSP.isVisible($parent) || this.isStickyChanging ) return;
               if ( !this.header ) this.header = document.querySelector('.bee-section-header');
               this.header.dispatchEvent(new Event('preventHeaderReveal'));
               window.setTimeout(() => {
                  $mainCarousel[0].scrollLeft = 0;
                  parent.scrollIntoView({behavior: 'smooth'});
               });
            }
         },

         _updateMediaFirst: function($swatchItem) {
            
            if (this.unQuickShopInline) return;

            var $swatchOption = $swatchItem.closest('[data-swatch-option]');
             
            if ( !$swatchOption.hasClass('is-bee-style__color') ) return;

            let self    = this,
            variants    = self.variants,
            l           = variants.length,
            colorOptionIndex = $swatchOption.data('id');

            var getVariantImageSwatch = function(valueLowerCase) {
               for (let i = 0; i < l; i++) {
                  let variant = variants[i];

                  // variant.title not support multi languages convert variant.options
                  // variant.title.toLowerCase() ==> variant.options.join(' / ').toLowerCase()
                  // + '' to convert value to string, fix error when is a number, will error with fuction toLowerCase
                  // if (variant.featured_image && variant.options.join(' / ').toLowerCase().indexOf(valueLowerCase) > -1 ) {
                  //if (variant.featured_image && (variant.options[colorOptionIndex]+'').toLowerCase() == valueLowerCase ) {
                  if (variant.featured_media && (variant.options[colorOptionIndex]+'').toLowerCase() == valueLowerCase ) {
                     // return variant.featured_image; // Return as soon as the object is found
                     return variant.featured_media.preview_image
                     break
                  }

               }
            };

            // console.log(colorOptionIndex, this)

            let value = ($swatchItem.data('value')+'').toLowerCase(),
            img_url   = getVariantImageSwatch(value);

            if (!img_url) return;
            
            // console.log(img_url)
            this.$imgMainItem.attr('data-srcset', BEEThemeSP.Images.getNewImageUrl(img_url.src, 1) );
            // this.$imgMainItem.attr('data-srcset', BEEThemeSP.Images.getNewImageUrl(img_url.src, 1) ).parent().css('--aspect-ratioapt',img_url.aspect_ratio);

         },
         
         /**
          * Update Price
          */
         _updatePrice: function(currentVariant, oldVariant, $container) {
            // console.log('_updatePrice',this)

            if ( !currentVariant ) {
               this.$productPrice.hide();
               return;
            }

            let price          = currentVariant.price,
            compare_at_price   = currentVariant.compare_at_price;

            if ( !this.isNoPickOriginal && price === oldVariant.price && compare_at_price === oldVariant.compare_at_price && currentVariant.unit_price === oldVariant.unit_price) {
               return;
            }

            if (this.isNoPickOriginal) this.isNoPickOriginal = false;
            
            // Update price display.
            let priceFormatMoney = BEEThemeSP.Currency.formatMoney(price);
            
            this.$productPrice.show();

            if (this.variantState.onSale) {
              
               // Update price
               let comparePriceFormatMoney = BEEThemeSP.Currency.formatMoney(compare_at_price),
               customPriceFormat           = this.formartPrice.replace('money_ins',priceFormatMoney).replace('money_del',comparePriceFormatMoney),
               saveAmountFixed             = compare_at_price - price,
               savePercentage              = ( saveAmountFixed * 100 ) / compare_at_price,
               savePercentageRound         = Math.round(savePercentage);
               if(BEEProductStrings.price_template !== undefined){
                  customPriceFormat        = BEEProductStrings.price_template.replace('INS', priceFormatMoney).replace('DEL', comparePriceFormatMoney)
               }
               // update sticky price
               if (this.isSticky) this.$stickyPrice.html(customPriceFormat);
               // update badge

               // 1. Update badge on main media
               // Math.round - Math.ceil
               this.badgeSelector.$onSale.html( this.saleLabel.replace( '[sale]', savePercentageRound ));
                
               // 2. Update badge on price
               if (this.saletype == '1') {
                  customPriceFormat += ` <span class="bee-badge-price">${ badgeSavePercent2.replace('[sale]', savePercentageRound) }</span>`;

               } else if (this.saletype == '2') {
                  customPriceFormat += ` <span class="bee-badge-price">${ badgeSaveFixed2.replace( '[sale]',  BEEThemeSP.Currency.formatMoney(saveAmountFixed) ) }</span>`;
               }

               this.$productPrice.html(customPriceFormat);

            } else {
               this.$productPrice.html(priceFormatMoney);
               // update sticky price
               if (this.isSticky) this.$stickyPrice.html(priceFormatMoney);
            }

            // Unit price
            if (this.variantState.showUnitPrice) {
                 //console.log('Unit price');
                 this.$unit_price.html(BEEThemeSP.Currency.formatMoney(currentVariant.unit_price));
                 this.$unit_base.html(BEEThemeSP.Currency.getBaseUnit(currentVariant));
            }
            
            // Change Shop Pay Installment Price On Variant Change
            // https://community.shopify.com/c/technical-q-a/change-shop-pay-installment-price-on-variant-change/td-p/1611305
            // console.log(this.$container)
            this.$container.find('shopify-payment-terms').attr('variant-id', currentVariant.id) //this will trigger a rerender and update the banner
             
            // Update currency 
            $body.trigger('currency:update');
         },
         
         /**
          * Update Quantity
          */
         _updateQuantity: function(currentVariant) {

             if (this.variantState.preOrder) {
                this.$quantity.attr('max', 9999);
                if (this.isSticky) this.$stickyQuantity.attr('max', 9999);
             } else if (currentVariant.inventory_management != null && currentVariant.inventory_policy != 'continue' ) {
          
                let currentVariant_qty = currentVariant.inventory_quantity;
                this.$quantity.attr('max', currentVariant_qty);
                if (this.isSticky) this.$stickyQuantity.attr('max', currentVariant_qty);
                
                if ( parseInt( this.$quantity.val() ) > currentVariant_qty ) {
                   this.$quantity.attr('value', 1).val(1);
                }
                
                if ( this.isSticky && parseInt( this.$stickyQuantity.val() ) > currentVariant_qty ) {
                   this.$stickyQuantity.attr('value', 1).val(1);
                }

             } else {
                this.$quantity.attr('max', 9999);
                if (this.isSticky) this.$stickyQuantity.attr('max', 9999);
             }
         },

         /**
          * Update Availability 
          */
         _updateAvailability: function(currentVariant, oldVariant, $container) {

            var $productAvailable = $container.find('[data-product-available]');

            if (!$productAvailable[0]) {
             return;
            }


            var $dataAvailable = $productAvailable.find('[data-available-status]'),
                $dataSoldout   = $productAvailable.find('[data-soldout-status]'),
                $dataInstock   = $productAvailable.find('[data-instock-status]'),
                $dataPreorder  = $productAvailable.find('[data-preorder-status]');

            if (!currentVariant) {

             $productAvailable.hide();

            } else {

               $productAvailable.show();
               if (this.variantState.available) { 
                  $dataAvailable.show()
                  $dataSoldout.hide();
                  // Check preorder
                  if ( this.variantState.preOrder ) {
                    $dataPreorder.show();
                    $dataInstock.hide();
                  } else {
                    $dataInstock.show();
                    $dataPreorder.hide();
                  }
               } else {
                  $dataSoldout.show();
                  $dataAvailable.hide()
               }
            }
         },

         /**
          * Update Barcode
          */
         _updateBarcode: function(currentVariant, oldVariant, $container) {

            var $productBarcode = $container.find('[data-product-barcode]');

            if (!$productBarcode[0]) {
             return;
            }

            var $productBarcodeNumber = $productBarcode.find('[data-product__barcode-number]');

            if (!currentVariant || currentVariant.barcode === '') {
             $productBarcode.hide(0);
            } else {
             if (oldVariant && oldVariant.barcode === currentVariant.barcode) {
               return; // The SKU do not have changed so let's return to avoid changing the DOM for nothing
             }

             $productBarcodeNumber.text(currentVariant.barcode);
             $productBarcode.show(0);
            }
         },
         
         /**
          * Update SKU
          */
         _updateSKU: function(currentVariant, oldVariant, $container) {
            
            // console.log('_updateSKU', currentVariant, oldVariant)
            var $productSku = $container.find('[data-product-sku]');

            if (!$productSku[0]) {
             return;
            }

            var $productSkuNumber = $productSku.find('[data-product__sku-number]');

            if (!currentVariant || currentVariant.sku === '') {
             $productSku.hide(0);
            } else {
             if (oldVariant && oldVariant.sku === currentVariant.sku) {
               return; // The SKU do not have changed so let's return to avoid changing the DOM for nothing
             }

             $productSkuNumber.text(currentVariant.sku);
             $productSku.show(0);
            }
         },

         /**
          * Update AddToCartButton
          */
         _updateAddToCartButton: function(currentVariant, oldVariant, $addToCartButton, $quantityWrapper, $paymentButton, $addToCartButtonText) { 
            // var $addToCartButton  = $formSelectorId.find('[type="submit"][name="add"]'),
            // $quantityWrapper      = $formSelectorId.find('[data-quantity-wrapper]'),
            // $paymentButton        = $formSelectorId.find('.shopify-payment-button'),
            // $addToCartButtonText  = $addToCartButton.find('.bee-btn-atc_text');

            // console.log(currentVariant)
            if (!$addToCartButton[0] && !$paymentButton[0] ) {
             return; // Sometimes merchant remove element from the code without taking care of JS... so let's be defensive
            }

            if ( BEEThemeSP.isEditCartReplace && !$addToCartButton.is('[data-replace-item]') ) {
               $addToCartButton.attr('data-replace-item','');
            }

            if (!currentVariant || currentVariant == 'nathan') { 
                $addToCartButton.attr('disabled','disabled').attr(aria.disabled,true).removeAttr('data-atc-form');
                $addToCartButtonText.text(txt_unavailable);
                $quantityWrapper.hide();
                $paymentButton.hide();
                if (this.isSticky) {
                  this.$stickyQuantityWrapper.hide();
                  this.$stickyATC.attr('disabled','disabled').attr(aria.disabled,true);
                  this.$stickyATCText.text(txt_unavailable);
                }

            } else {

               if (currentVariant.available) {

                  let txt_atc = (this.variantState.preOrder) ? (this.txt_preOrder || txt_preOrder) : (this.txt_addToCart || txt_addToCart);
                  $quantityWrapper.show();
                  $addToCartButton.removeAttr('disabled '+aria.disabled).attr('data-atc-form','');
                  $addToCartButtonText.text( txt_atc );
                  $paymentButton.show();

                  if (this.isSticky) {
                     this.$stickyQuantityWrapper.show();
                     this.$stickyATC.removeAttr('disabled '+aria.disabled);
                     this.$stickyATCText.text(txt_atc);
                  }

               } else {
                  
                  $quantityWrapper.hide();
                  $addToCartButton.attr('disabled','disabled').attr(aria.disabled,true).removeAttr('data-atc-form','');
                  $addToCartButtonText.text(txt_soldOut);
                  $paymentButton.hide();

                  if (this.isSticky) {
                     this.$stickyQuantityWrapper.hide();
                     this.$stickyATC.attr('disabled','disabled').attr(aria.disabled,true);
                     this.$stickyATCText.text(txt_soldOut);
                  }
                }
            }
         },

         /**
          * Update AddToCartButton QuickShop Inline
          */
         _updateAtcBtnQSInline: function(currentVariant, oldVariant, $addToCartButton, $quantityWrapper, $addToCartButtonText) { 

            // console.log(currentVariant, $addToCartButton)
            if (!$addToCartButton[0] ) {
             return; // Sometimes merchant remove element from the code without taking care of JS... so let's be defensive
            }
             
            if (!currentVariant || currentVariant == 'nathan') { 
                $addToCartButton.attr('disabled','disabled').attr(aria.disabled,true).removeAttr('data-action-atc');
                $addToCartButtonText.text(txt_unavailable);
                $quantityWrapper.hide();

            } else {

               if (currentVariant.available) {

                  let txt_atc = (this.variantState.preOrder) ? (this.txt_preOrder || txt_preOrder) : (this.txt_addToCart || txt_addToCart);
                  $quantityWrapper.show();
                  $addToCartButton.removeAttr('disabled '+aria.disabled).attr('data-action-atc','').attr('data-variant-id',currentVariant.id);
                  $addToCartButtonText.text( txt_atc );

               } else {
                  
                  $quantityWrapper.hide();
                  $addToCartButton.attr('disabled','disabled').attr(aria.disabled,true).removeAttr('data-action-atc','');
                  $addToCartButtonText.text(txt_soldOut);
                }
            }
         },

         /**
          * Update order delivery
          */
         _updateDelivery: function(currentVariant, oldVariant, $container) {

            var data_delivery    = 'data-order-delivery',
                $productDelivery = $container.find('['+data_delivery+']');

            if (!$productDelivery[0]) {
             return;
            }

            if (!currentVariant || !currentVariant.available) {

             $productDelivery.hide();

            } else {

               // Check preorder
               var options = JsonParse( $productDelivery.attr(data_delivery) )
               if (this.variantState.preOrder && options.hideWithPreorder ) {
                 $productDelivery.hide()
               } else {
                 $productDelivery.show()
               }
            }
         },

         /**
          * Update inventory Quantity
          */
         _updateInventoryQuantity: function(currentVariant, oldVariant, $container) {

            var data_inventory   = 'data-inventory-qty',
                $inventoryQuantity = $container.find('['+data_inventory+']');

            if (!$inventoryQuantity[0]) {
             return;
            }

            if (!currentVariant || !currentVariant.available) {

             $inventoryQuantity.hide();

            } else {

               $inventoryQuantity.trigger({
                 type: 'variant:inventory',
                 currentVariant: currentVariant,
                 oldVariant: this.oldVariant
               });
            }
         },
         
         /**
          * Update Pickup Availability Content
          */
         _updatePickupAvailabilityContent: function(currentVariant, $container) {

            let typeName = (currentVariant.available) ? 'pickupAvailability:update' : 'pickupAvailability:clear';
            $container.trigger({
              type: typeName,
              currentVariant: currentVariant
            });
         },
         
         /**
          * Update Notify Back in Stock
          */
         _updateNotifyBackinStock: function(currentVariant, $container) {
            let typeName = (this.variantState.available) ? 'notifyBackinStock:hide' : 'notifyBackinStock:show';
            $container.trigger({
              type: typeName,
              currentVariant: currentVariant
            });
         },
         
         /**
          * Update Badges
          */
         _updateBadges: function() {
            let variantState  = this.variantState,
                badgeSelector = this.badgeSelector;
            
            // console.log(variantState,badgeSelector)
            // 1. Sale
            if ( variantState.onSale ) {
               badgeSelector.$onSale.removeAttr('hidden');
            } else {
               badgeSelector.$onSale.attr('hidden',true);
            }

            // 2. Pre-order
            if ( variantState.preOrder ) {
               badgeSelector.$preOrder.removeAttr('hidden');
            } else {
               badgeSelector.$preOrder.attr('hidden',true);
            }
            
            // 3. Soldout
            if ( variantState.soldOut ) {
               badgeSelector.$soldOut.removeAttr('hidden');
            } else {
               badgeSelector.$soldOut.attr('hidden',true);
            }

         },

         /**
           * The returned variantState object keeps track of a number of properties about the current variant and product
           * @param {object} evt - object returned from variant change event
           * @return {object} variantState - current product variant's state
           *                  variantState.available - true if current product options result in valid variant
           *                  variantState.soldOut - true if variant is sold out
           *                  variantState.onSale - true if variant is on sale
           *                  variantState.showUnitPrice - true if variant has unit price value
           */
         _setVariantState: function(currentVariant) {

            if (!currentVariant) {
              this.variantState.available = false;
              return;
            }
            
            this.variantState = {
               available : currentVariant.available,
               soldOut : !currentVariant.available,
               onSale : currentVariant.compare_at_price > currentVariant.price,
               showUnitPrice : !!currentVariant.unit_price,
               preOrder : currentVariant.inventory_management == 'shopify' && currentVariant.inventory_quantity <= 0 && currentVariant.available
            }

            // this.variantState.preOrder
            // this.variantState.onSale
            // this.variantState.soldOut
            // this.variantState.available
            
            // this.variantState.available = true;
            // this.variantState.soldOut = !currentVariant.available;
            // this.variantState.onSale = currentVariant.compare_at_price > currentVariant.price;
            // this.variantState.showUnitPrice = !!currentVariant.unit_price;
            // this.variantState.preOrder = currentVariant.inventory_management == 'shopify' && currentVariant.inventory_quantity <= 0
         },
         
         /**
          * Update Variant image
          */
         _updateVariantImageSwatch: function(currentVariant) {

            if ( !currentVariant.featured_image ) return;
            
            // console.log(this.swatchWidth)

            let $selected = this.$variantImg.find(class_selected),
            $imgElement = $selected.find('[data-img-el]');

            $selected = (!$imgElement[0]) ? $selected : $imgElement;
            $selected.attr('data-bg', BEEThemeSP.Images.getNewImageUrl(currentVariant.featured_image.src,this.swatchWidth));
         },
         
         /**
          * Update incoming mess
          * data-incoming__mess
          * data-incoming-available
          * data-incoming-soldout
          */
         _updateIncomingMess: function(currentVariant) {
 
            if ( !this.useComingMess ) return;

            let dataComingdate = currentVariant.next_incoming_date,
            inventoryquantity = currentVariant.inventory_quantity,
            incoming = currentVariant.incoming,
            inventoryManagement = currentVariant.inventory_management;

            if ( !currentVariant || !dataComingdate || inventoryquantity > 0 || !incoming || inventoryManagement != 'shopify' ) {
               this.$incomingMess.attr('hidden','');
               return;
            }
 
            this.$incomingMess.removeAttr('hidden');

            if (this.variantState.available) {
              this.$incomingAvailableDate.html(dataComingdate);
              this.$incomingSoldout.hide();
              this.$incomingAvailable.show();
            } else {
              this.$incomingSoldoutDate.html(dataComingdate);
              this.$incomingAvailable.hide();
              this.$incomingSoldout.show();
            }
         },

         _updateStickyATC: function(currentVariant) {
            
            
            // if (this.isStickyChanging) this.eventClickedSwatch = false;
            // this.eventClickedSwatch = false;
            this.isStickyChanging = false;
            // if ( currentVariant.featured_image ) {
            //    this.$stickyimg.attr( 'data-src', BEEThemeSP.Images.lazyloadImagePath(currentVariant.featured_image.src) );
            // } else {
            //    this.$stickyimg.attr('data-src', this.stickyImgOrginal );
            // }
            this.$stickyimg.attr('data-src', ( currentVariant.featured_image ) ? BEEThemeSP.Images.lazyloadImagePath(currentVariant.featured_image.src) : this.stickyImgOrginal );

            // update sticky title
            if ( this.useStickySelect) {
               // console.log(currentVariant,`[data-value="${currentVariant.id}"]`, this.$stickySelect.find(`[data-dropdown-item][data-value="${currentVariant.id}"]`))
               if ( currentVariant.available) {
               this.$stickyVtitle.find('[data-dropdown-open]>span').text( currentVariant.title );
               this.$stickySelect.find(`[data-dropdown-item]`).removeClass('is--selected');
               this.$stickySelect.find(`[data-dropdown-item][data-value="${currentVariant.id}"]`).addClass('is--selected');
              }
            } else {
               this.$stickyVtitle.html( currentVariant.title );
            }


            // update sticky price on _updatePrice function

            // update sticky button data variant id
            this.$stickyATC.attr('data-variant-id', currentVariant.id)
         
         },

         /**
          * Update history state for product deeplinking
          *
          * @param  {variant} variant - Currently selected variant
          * @return {k}         [description]
          */
         _updateHistoryState: function(currentVariant) {

            if ( !history.replaceState || !currentVariant ) {
               return;
            }

            var newurl =
               window.location.protocol +
               '//' +
               window.location.host +
               window.location.pathname +
               '?variant=' +
               currentVariant.id;
            window.history.replaceState({
               path: newurl
            }, '', newurl);

            if (typeof window.addthis !== 'undefined') addthis.layers.refresh();
         },
         /**
            * Returns a URL with a variant ID query parameter. Useful for updating window.history
            * with a new URL based on the currently select product variant.
            * @param {string} url - The URL you wish to append the variant ID to
            * @param {number} id  - The variant ID you wish to append to the URL
            * @returns {string} - The new url which includes the variant ID query parameter
            */

         _getUrlWithVariant: function(url, id) {
             if (/variant=/.test(url)) {
               return url.replace(/(variant=)[^&]+/, '$1' + id);
             } else if (/\?/.test(url)) {
               return url.concat('&variant=').concat(id);
             }

             return url.concat('?variant=').concat(id);
         }

      });


      return Variants;

   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * BOOST SALE PRODUCT
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   var BootSales = (function() {

      var data_live_view  = 'data-live-view',
      data_flash_sold     = 'data-flash-sold',
      data_ani_atc        = 'data-animation-atc',
      data_order_delivery = 'data-order-delivery',
      timezone_config     = BEEconfigs.timezone,
      timezone_guess      = 'bee_nt_guess',
      data_inventory_qty  = 'data-inventory-qty',
      data_countdown_pr   = 'data-countdown-pr';

      try {
        timezone_guess = dayjs.tz.guess();
      }
       catch(err) {
      }

      var isTimeZone = (timezone_config != 'nobee' && timezone_guess != timezone_config)

      function BootSales($container) {
         this.$container = $container;
         this.BootSalesInt();
      };

      function AnimationATC($aniATC) {

         if ( $aniATC.length == 0 ) return;

         var options = JsonParse( $aniATC.attr(data_ani_atc) ),
         animation   = options.ani;

         if ( animation == 'none' ) return;

         var animationClass = 'is--animated '+animation,
         intervalTime       = parseInt( options.time ),
         animTime           = parseInt( options.animTime ) || 1000;

        var ATC_animation = function() {
          setInterval(function() {
              $aniATC.addClass(animationClass);
              setTimeout(function(){ 
                 $aniATC.removeClass(animationClass);
              }, animTime);
          }, intervalTime);
        };

         ATC_animation();
      };

      BootSales.prototype = Object.assign({}, BootSales.prototype, {

         BootSalesInt: function () {
            this._liveView();
            this._flashSold();
            this._animationATC();
            this._orderDelivery();
            this._inventoryQuantity();
            this._countdown();
         },

         _getRandomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
         },
        
         _animationATC: function() {

            var $aniATC = this.$container.find('['+data_ani_atc+']');
            
            AnimationATC($aniATC);

            if ( $aniATC.length == 0 || true ) return;

            var options = JsonParse( $aniATC.attr(data_ani_atc) ),
            animation   = options.ani;

            if ( animation == 'none' ) return;

            var animationClass = 'is--animated '+animation,
            intervalTime       = parseInt( options.time ),
            animTime           = parseInt( options.animTime ) || 1100;

            function ATC_animation() {
             setInterval(function() {
                 $aniATC.addClass(animationClass);
                 setTimeout(function(){ 
                    $aniATC.removeClass(animationClass);
                 }, animTime);
             }, intervalTime);
            };

            ATC_animation();
           
         },
        
         _liveView: function() {

            var $liveView = this.$container.find('['+data_live_view+']');
              
               if ( $liveView.length == 0 ) return;

            var options = JsonParse( $liveView.attr(data_live_view) ),
            self        = this,
            min         = options.min,
            max         = options.max,
            interval    = options.interval,
            o           = self._getRandomInt(min,max),
            n           = ["1", "2", "4", "3", "6", "10", "-1", "-3", "-2", "-4", "-6"],
            l           = ["10", "20", "15"],
            h           = "",
            e           = "",
            M           = "",
            $count      = $liveView.find('[data-count]');

            //console.log(min)
            function liveViewInt() {

               if (h = Math.floor(Math.random() * n.length), e = n[h], o = parseInt(o) + parseInt(e), min >= o) {
                  M = Math.floor(Math.random() * l.length);
                  var a = l[M];
                  o += a
               }
               if (o < min || o > max) {
                  o = self._getRandomInt(min,max);
               }
               $count.html( (parseInt(o)) );

            }

            liveViewInt();
            $liveView.show();

            setInterval( liveViewInt , interval);

         },
        
         _flashSold: function() {

            var $flashSold = this.$container.find('['+data_flash_sold+']');

            if ( $flashSold.length == 0 ) return;

            var options  = JsonParse( $flashSold.attr(data_flash_sold) ),
            self        = this,
            mins         = options.mins,
            maxs         = options.maxs,
            mint         = options.mint,
            maxt         = options.maxt,
            dataID       = options.id,
            getS         = sessionStorage.getItem("soldS"+dataID) || self._getRandomInt(mins,maxs),
            getT         = sessionStorage.getItem("soldT"+dataID) || self._getRandomInt(mint,maxt),
            numS         = parseInt(getS),
            numT         = parseInt(getT),
            intervalTime = parseInt(options.time),
            $sold        = $flashSold.find('[data-sold]'),
            $hour        = $flashSold.find('[data-hour]');

            LimitMinMax();
            UpdateSold(numS,numT);
            $flashSold.show();

            setInterval(function() {
                numS = numS + self._getRandomInt(1,4);
                numT = numT + (Math.random() * (0.8 - 0.1) + 0.1).toFixed(1)*1;
                LimitMinMax();
                UpdateSold(numS,numT);
            }, intervalTime);

            function UpdateSold(num1,num2) {
              $sold.html(num1);
              $hour.html(Math.floor(numT));
              sessionStorage.setItem("soldS"+dataID, num1);
              sessionStorage.setItem("soldT"+dataID, num2);
            };

            function LimitMinMax() {
              if ( numS > maxs ) numS =self._getRandomInt(mins,maxs);
              if ( numT > maxt ) numT =self._getRandomInt(mint,maxt);
            };
 
         },
        
         _orderDelivery: function() {

            var $orderDelivery = this.$container.find('['+data_order_delivery+']');

            if ($orderDelivery.length == 0) return;

            var options      = JsonParse( $orderDelivery.attr(data_order_delivery) ),
            format_day       = options.format_day,
            //self             = this,
            time             = options.time.replace("24:00:00", "23:59:59") || '19041994',
            arrDayWeek       = ["SUN","MON","TUE","WED","THU","FRI","SAT"],
            dateStart        = options.estimateStartDate || 0,
            dateEnd          = options.estimateEndDate || 0,
            excludeDays      = options.cut_day.replace(/ /g,'').split(","),
            startDay         = dayjs(),
            i                = 0,
            endDay           = dayjs(),
            j                = 0,
            orderTimezone    = options.timezone,
            nowDay           = dayjs(),
            nowTime          = nowDay.format('HHmmss'),
            timeint          = time.replace(/ /g,'').replace(/:/g,''),

            arrDay           = BEEProductStrings.order_dayNames.replace(/ /g,'').split(","),
            arrMth           = BEEProductStrings.order_monthNames.replace(/ /g,'').split(",");
            // mthSuffix        = { 1:'1st',2:'2nd',3:'3rd',4:'4th',5:'5th',6:'6th',7:'7th',8:'8th',9:'9th',10:'10th',11:'11th',12:'12th' };
            
            if (isTimeZone && orderTimezone) {
               try {
                 nowDay = dayjs.tz(nowDay, timezone_config);
                 nowTime = nowDay.format('HHmmss')
               }
               catch(err) {
                 console.log('Timezone error: '+timezone_config);
               }
            }

            /**
             * Check Time, if nowTime >=  timeint +1 day
             */
            // console.log(nowTime, timeint)
            if (parseInt(nowTime) >= parseInt(timeint)) {
               nowDay   = nowDay.add(1, 'day');
               startDay = startDay.add(1, 'day');
               endDay   = endDay.add(1, 'day');
               // console.log(today2,today3, mode)
            }

            /**
             * Mode: 2 - Shipping + delivery
             * Mode: 1 - Only delivery
             */

            if ( options.mode == '2' ) {

               // START DATE
               // startDay = startDay.add(dateStart, 'day');
               // startDay = startDay.add(1, 'day');
               // if ngay khach mua trung voi ngay loai tru tang 1 ngay
               while (excludeDays.indexOf( arrDayWeek[startDay.format('d')] ) > -1) {
                 //console.log('aaa')
                 startDay = startDay.add(1, 'day');
               }

               while (i < dateStart) {
                 i++;
                 startDay = startDay.add(1, 'day');
                 if (excludeDays.indexOf( arrDayWeek[startDay.format('d')] ) > -1) {
                   i--;
                 }
               }

               // END DATE
               // endDay = endDay.add(dateEnd, 'day');
               // endDay = endDay.add(1, 'day');
               // if ngay khach mua trung voi ngay loai tru tang 1 ngay
               while (excludeDays.indexOf( arrDayWeek[endDay.format('d')] ) > -1) {
                   // console.log('bbb')
                 endDay = endDay.add(1, 'day');
               }

               while (j < dateEnd) {
                 j++;
                 endDay = endDay.add(1, 'day');
                 if (excludeDays.indexOf( arrDayWeek[endDay.format('d')] ) > -1) {
                   j--;
                 }
               }

            } else {

               // START DATE
               // let addDaystart = ( dateStart > 0) ? 1 : 0;
               //startDay = startDay.add(dateStart - 1, 'day');
               // console.log(startDay)
               // do {
               //     startDay = startDay.add(addDaystart, 'day');

               // } while (excludeDays.indexOf( arrDayWeek[startDay.format('d')] ) > -1);
               //console.log('startDay',startDay)
               startDay = startDay.add(dateStart, 'day');
               //console.log('aaa',dateStart,startDay)
               while (excludeDays.indexOf( arrDayWeek[startDay.format('d')] ) > -1) {
                 //console.log('aaa')
                 startDay = startDay.add(1, 'day');
               }

               // END DATE
               // let addDayEnd = ( dateEnd > 0) ? 1 : 0;
               // endDay = endDay.add(dateEnd - 1, 'day');
               // // console.log(endDay)
               // do {
               //     endDay = endDay.add(addDayEnd, 'day');

               // } while (excludeDays.indexOf( arrDayWeek[endDay.format('d')] ) > -1);
               endDay = endDay.add(dateEnd, 'day');
               // console.log('bbb',dateEnd)
               while (excludeDays.indexOf( arrDayWeek[endDay.format('d')] ) > -1) {
                   // console.log('bbb')
                 endDay = endDay.add(1, 'day');
               }

            }

            // console.log( arrDayWeek[startDay.format('d')] ,startDay, endDay )
            // console.log( startDay.format(format_day) );
            // console.log( endDay.format(format_day) );


            /**
             * Translate day, month
             * https://day.js.org/docs/en/display/format
             */
            arrDay = ArrUnique(arrDay);
            arrMth = ArrUnique(arrMth);
               
            var startDayDInt = parseInt(startDay.format('D')),
            daystStart       = startDayDInt + nth(startDayDInt),
            MntStart         = arrMth[ parseInt(startDay.format('M')) -1 ],
            dayStart         = arrDay[ parseInt(startDay.format('d')) ],
            
            EndDayDInt       = parseInt(endDay.format('D')),
            daystEnd         = EndDayDInt + nth( EndDayDInt ),
            MntEnd           = arrMth[ parseInt(endDay.format('M')) -1 ],
            dayEnd           = arrDay[ parseInt(endDay.format('d')) ];
               
            //console.log( startDayDInt, EndDayDInt )
            $orderDelivery.find('[data-start-delivery]').html( startDay.format(format_day).replace('bee4',dayStart).replace('bee5',daystStart).replace('bee6',MntStart) );
            $orderDelivery.find('[data-end-delivery]').html( endDay.format(format_day).replace('bee4',dayEnd).replace('bee5',daystEnd).replace('bee6',MntEnd) );

            /**
             * Countdown
             */
            if (time != '19041994') {
               var $countdown = $orderDelivery.find('[data-hour-delivery]'); 
               
               // console.log(lastDay)
               $countdown.countdown( nowDay.format("YYYY-MM-DD " + time), {elapse: true})
               .on('update.countdown', function (event) {
               if (event.elapsed) {
                  // location.reload();
                  $orderDelivery.hide();
               } else {
                  var totalHours = event.offset.totalDays * 24 + event.offset.hours;
                  $countdown.html( event.strftime( $.trim( $countdown.html().replace('[totalHours]',totalHours) ) ) ).show();
                }
               });
            }

            $orderDelivery.show();

            function ArrUnique(arr) { 
                var onlyUnique = function (value, index, self) { 
                      return self.indexOf(value) === index;
                };
                return arr.filter( onlyUnique );
            };

            function nth(d) {
                if (d > 3 && d < 21) return 'th';
                switch (d % 10) {
                    case 1:  return "st";
                    case 2:  return "nd";
                    case 3:  return "rd";
                    default: return "th";
               }
            };
         },

         _inventoryQuantity: function() {

            var $inventoryQuantity = this.$container.find('['+data_inventory_qty+']');

            if ($inventoryQuantity.length == 0) return;
            
            $inventoryQuantity.removeAttr('data-ttcalc');
            var options               = JsonParse( $inventoryQuantity.attr(data_inventory_qty) ),
            self                      = this,
            stock                     = options.stock,
            qty                       = options.qty,
            total_items               = options.total,
            min_items_left            = options.min,
            max_items_left            = options.max,
            reduce                    = options.reduce,
            bgprocess                 = options.bgprocess,
            bgten                     = options.bgten,
            bar_id                    = options.id,
            inventoryQty              = options.inventoryQty || 0,
            timer                     = null,
            timerinterval             = null,
            min_of_remaining_items    = 1,
            decrease_after            = 1.7,
            decrease_after_first_item = 0.17, 
            remaining_items           = self._getRandomInt(min_items_left, max_items_left),
            $count                    = $inventoryQuantity.find('[data-count]'),
            $progressbar              = $inventoryQuantity.find('[data-progressbar]'),
            $message                  = $inventoryQuantity.find('[data-message]'),
            $progressbarDiv           = $progressbar.find('>div');
            

            $inventoryQuantity.on("variant:inventory", function(e) {
               // console.log(stock,'variant:inventory',$inventoryQuantity)
               if ( stock == '2' ) {
                  $inventoryQuantity.show();
                  return; 
               }

               // console.log(e,e.currentVariant,e.oldVariant);
               // console.log(e.currentVariant);

               var currentVariant = e.currentVariant,
               variant_qty = currentVariant.inventory_quantity || 0;
               // console.log(variant_qty);
               
               // Update bar_id
               bar_id = currentVariant.id;
               
               // Case only default
               if ( (variant_qty >= qty || variant_qty < 1) && stock == '1' ) {
                  $inventoryQuantity.hide();
                  return;
               }
               
               // Case 3
 
               if ( (variant_qty >= qty || variant_qty == 0) && isStorageSpSession) {
                  // console.log('variant_qty',variant_qty, qty);
                  variant_qty = sessionStorage.getItem('probar'+bar_id) || self._getRandomInt(min_items_left, max_items_left);
                  $inventoryQuantity.attr('data-variant-qty'+bar_id,variant_qty);
                  
               }

               $inventoryQuantity.attr('data-variant-qty'+bar_id,variant_qty);
               sessionStorage.setItem('probar'+bar_id, variant_qty);
               
               // console.log(variant_qty, qty);
               $count.text(variant_qty);

               // Update progressbar
               var total_items = $inventoryQuantity.attr('data-ttcalc'),
               b               = 100 * variant_qty / total_items,
               color           = (variant_qty < 10) ? bgten : bgprocess;
               $progressbarDiv.css({"background-color": color, 'width': b + '%'});

               $message.show();
               $progressbar.show();
               $inventoryQuantity.show();

            });
            
            if ( (inventoryQty >= qty || inventoryQty < 1) && stock == '1' ) return;

            // Update remaining_items
            if ( inventoryQty < qty && inventoryQty > 0) remaining_items = inventoryQty;
            // if ( stock != '2' && inventoryQty < qty ) remaining_items = qty;
            //decrease_after: 1.7 min, 102 sec ; decrease_after_first_item: 10.2 sec 
            //console.log(min_items_left)
            
            // console.log(options);
            // isStorageSpSession && !IsDesignMode && reduce
            if ( isStorageSpSession && !IsDesignMode && stock != '1') {
               var getse_re = sessionStorage.getItem('probar'+bar_id);
               if (getse_re > 0) remaining_items = getse_re;
            }
            
            // if ( inventoryQty > 0 && inventoryQty != qty) {}
            // console.log(remaining_items)
            $count.text(remaining_items).css({'background-color': '#fff','color': bgprocess});
           
            updateMeter(remaining_items, bgprocess, bgten);
            $message.show();
            $progressbar.show();

            updatedecrease();
              
            $inventoryQuantity.on("destroy:inventoryQty", function() {
                clearTimeout(timer);
                clearInterval(timerinterval);
            });
            
            // $('[data-inventory-qty][data-prid="19041994"').trigger('update:inventoryQty');
            $inventoryQuantity.on("update:inventoryQty", function() {

               var qty = 1,
                   vl_count = parseInt( $count.text() ) - qty;

               if (vl_count < 1)  return;
                
               // Update count
               $count.text(vl_count);

               // Update progressbar
               var total_items = $inventoryQuantity.attr('data-ttcalc'),
               b               = 100 * vl_count / total_items,
               color           = (vl_count < 10) ? bgten : bgprocess;
               $progressbarDiv.css({"background-color": color, 'width': b + '%'});

            });

            // $inventoryQuantity.on("variant:inventory:hide", function(e) {
            //    $inventoryQuantity.hide();
            // });

            function updateMeter(remaining_items,bgprocess,bgten) {
               //if(sp_nt_storage) {res = sessionStorage.getItem('qv'+ntid)}
               remaining_items =  parseInt(remaining_items);

               if ( isStorageSpSession ) { 
                  sessionStorage.setItem('probar'+bar_id, remaining_items)
               }
               total_items = $inventoryQuantity.attr('data-ttcalc') || (total_items > remaining_items) ? total_items : remaining_items + total_items;
               $inventoryQuantity.attr('data-ttcalc',total_items);
               //console.log('total_items: '+total_items)
               var b = 100 * remaining_items / total_items,
               color = (remaining_items < 10) ? bgten : bgprocess;
               $progressbarDiv.css("background-color", color);
               setTimeout(function () {
                 $progressbarDiv.css('width', b + '%');
               }, 300);
              $progressbarDiv.css("background-color", color);
               
            };

            function returnNumber(num) {
               return num || 0
            }

            function updatedecrease() {
              
               if ( !reduce ) return;

               timer = setTimeout(function () {
                    //console.log(remaining_items)
                    //console.log('timer: '+remaining_items)
                    remaining_items--;
                    if (remaining_items < min_of_remaining_items) {
                       remaining_items = returnNumber( $inventoryQuantity.attr('data-variant-qty'+bar_id) ) || self._getRandomInt(min_items_left, max_items_left)
                    }
                    $count.css({'background-color': bgprocess,'color': '#fff'});
                    setTimeout(function () {
                       $count.css({'background-color': '#fff','color': bgprocess});
                    }, 1000 * 60 * 0.03);
                    $count.text(remaining_items);
                    updateMeter(remaining_items, bgprocess, bgten)
               }, 1000 * 60 * decrease_after_first_item);
               //1000 * 60 * decrease_after_first_item

               timerinterval = setInterval(function () {
                    //console.log('timerinterval: '+remaining_items)
                    remaining_items--;
                    // if (typeof qty !== 'undefined' && remaining_items < min_of_remaining_items) {
                    //   remaining_items = 0;
                    // } else if (remaining_items < min_of_remaining_items) {
                    //    remaining_items = qty || self._getRandomInt(min_items_left, max_items_left)
                    // }
                    if (remaining_items < min_of_remaining_items) {
                       remaining_items = returnNumber( $inventoryQuantity.attr('data-variant-qty'+bar_id) ) || self._getRandomInt(min_items_left, max_items_left)
                       $inventoryQuantity.on("destroy:inventoryQty").hide();
                    }
                    $count.css({ 'background-color': bgprocess,'color': '#fff' });
                    setTimeout(function () {
                       $count.css({ 'background-color': '#fff','color': bgprocess });
                    }, 1000 * 60 * 0.03);
                    $count.text(remaining_items);
                    updateMeter(remaining_items,bgprocess,bgten)
               }, 1000 * 60 * decrease_after);
               // 1000 * 60 * decrease_after
            };

         },

         _countdown: function() {

            var $countdownProduct = this.$container.find('['+data_countdown_pr+']');

            if ($countdownProduct.length == 0) return;

            var dt_cd_ops = 'data-cd-options',
            $countdown    = $countdownProduct.find('['+dt_cd_ops+']'),
            options       = JsonParse( $countdown.attr(dt_cd_ops) ),
            arrDate;
            
            if (!options.isCountdownMeta) {

               arrDate = options.cd_date.replace("24:00:00", "23:59:59").split(',');

               var nowDay = dayjs(),
                   nowTime = nowDay.format('HHmmss'),
                   i, l = arrDate.length,
                   time_cd;

               if (isTimeZone) {
                  try {
                    nowDay = dayjs.tz(nowDay, timezone_config);
                    nowTime = nowDay.format('HHmmss')
                  }
                  catch(err) {
                    console.log('Timezone error: '+timezone_config);
                  }
               }

               for (i = 0; i < l; i++) {

                  //console.log(i)
                  if (parseInt(arrDate[i].replace(/:/g, "")) >= nowTime) {
                     // fix 24:00:00 error ios,safari
                     time_cd = arrDate[i]
                     break;

                  } else if ( i == l - 1 ) {
                     time_cd = arrDate[i]
                  }

               }

               $countdown.attr('data-date', nowDay.format('YYYY-MM-DD') +' '+time_cd);

            }

            $countdown.attr('data-countdown-bee', '');
            BEEThemeSP.Countdown();
         }

      });

      return {
         init: BootSales,
         ani: AnimationATC
      };

    })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * VIDEO PRODUCT
    * https://github.com/sampotts/plyr
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   var ProductVideo = (function() {

        var videos = {};

        var hosts = {
          shopify: 'shopify',
          external: 'external'
        };

        var selectors = {
          productMediaWrapper: '[data-product-single-media-wrapper]'
        };

        var attributes = {
          enableVideoLooping: 'enable-video-looping',
          enableVideoMuting: 'enable-video-muting',
          enableVideoAutoplaying: 'enable-video-autoplaying',
          videoId: 'video-id'
        };

        function init(videoContainer, sectionId) {
          // console.log(videoContainer, sectionId)
          if (!videoContainer) {
            return;
          }

          var videoElement = videoContainer.querySelector('iframe, video');

          if (!videoElement) {
            return;
          }

          var mediaId = videoContainer.getAttribute('data-nt-media-id');

          videos[mediaId] = {
            mediaId: mediaId,
            sectionId: sectionId,
            host: hostFromVideoElement(videoElement),
            container: videoContainer,
            element: videoElement,
            ready: function() {
              createPlayer(this);
            }
          };

          window.Shopify.loadFeatures([
            {
              name: 'video-ui',
              version: '2.0',
              onLoad: setupVideos
            }
          ]);
          BEEThemeSP.LibraryLoader.load('plyrShopifyStyles');
        }

        function setupVideos(errors) {
          if (errors) {
            fallbackToNativeVideo();
            return;
          }

          loadVideos();
        }

        function createPlayer(video) {
          if (video.player) {
            return;
          }

          var productMediaWrapper = video.container.closest(
            selectors.productMediaWrapper
          );

          var enableLooping      = productMediaWrapper.getAttribute('data-' + attributes.enableVideoLooping) === 'true',
          enableMuteing          = productMediaWrapper.getAttribute('data-' + attributes.enableVideoMuting) === 'true',
          enableVideoAutoplaying = productMediaWrapper.getAttribute('data-' + attributes.enableVideoAutoplaying) === 'true';

          // eslint-disable-next-line no-undef
          video.player = new Shopify.Video(video.element, {
            loop: { active: enableLooping },
            volume: enableMuteing ? 0 : 1,
            muted: enableMuteing
          });
          productMediaWrapper.classList.add('is-media__initialized');

          var pauseVideo = function() {
            if (!video.player) return;
            video.player.pause();
          };

          productMediaWrapper.addEventListener('mediaHidden', pauseVideo);
          productMediaWrapper.addEventListener('xrLaunch', pauseVideo);
          
          productMediaWrapper.addEventListener('mediaVisible', function() {
            if (BEEThemeSP.isTouch || !enableVideoAutoplaying) return;
            if (!video.player) return;
            video.player.play();
          });

          // check first active
        //   if ( $(productMediaWrapper).index == 0) {
        //     productMediaWrapper.dispatchEvent(
            //   new CustomEvent('mediaVisible', {
            //     bubbles: true,
            //     cancelable: true
            //   })
            // );
        //   }
        }

        function hostFromVideoElement(video) {
          if (video.tagName === 'VIDEO') {
            return hosts.shopify;
          }

          return hosts.external;
        }

        function loadVideos() {
          for (var key in videos) {
            if (videos.hasOwnProperty(key)) {
              var video = videos[key];
              video.ready();
            }
          }
        }

        function fallbackToNativeVideo() {
          for (var key in videos) {
            if (videos.hasOwnProperty(key)) {
              var video = videos[key];

              if (video.nativeVideo) continue;

              if (video.host === hosts.shopify) {
                video.element.setAttribute('controls', 'controls');
                video.nativeVideo = true;
              }
            }
          }
        }

        function removeSectionVideos(sectionId) {
          for (var key in videos) {
            if (videos.hasOwnProperty(key)) {
              var video = videos[key];

              if (video.sectionId === sectionId) {
                if (video.player) video.player.destroy();
                delete videos[key];
              }
            }
          }
        }

        return {
          init: init,
          hosts: hosts,
          loadVideos: loadVideos,
          removeSectionVideos: removeSectionVideos
        };
   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * MODEL PRODUCT
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   var ProductModel = (function() {
        var modelJsonSections = {};
        var models = {};
        var xrButtons = {};

        var selectors = {
          mediaGroup: '[data-product-single-media-group]',
          xrButton: '[data-shopify-xr]'
        };

        function init(modelViewerContainers, sectionId) {
          modelJsonSections[sectionId] = {
            loaded: false
          };

          modelViewerContainers.forEach(function(modelViewerContainer, index) {
            var mediaId = modelViewerContainer.getAttribute('data-nt-media-id');
            var modelViewerElement = modelViewerContainer.querySelector(
              'model-viewer'
            );
            var modelId = modelViewerElement.getAttribute('data-model-id');

            if (index === 0) {
              var mediaGroup = modelViewerContainer.closest(selectors.mediaGroup);
              var xrButton = mediaGroup.querySelector(selectors.xrButton);
              xrButtons[sectionId] = {
                element: xrButton,
                defaultId: modelId
              };
            }

            models[mediaId] = {
              modelId: modelId,
              sectionId: sectionId,
              container: modelViewerContainer,
              element: modelViewerElement
            };
          });

          window.Shopify.loadFeatures([
            {
              name: 'shopify-xr',
              version: '1.0',
              onLoad: setupShopifyXr
            },
            {
              name: 'model-viewer-ui',
              version: '1.0',
              onLoad: setupModelViewerUi
            }
          ]);
          BEEThemeSP.LibraryLoader.load('modelViewerUiStyles');
        }

        function setupShopifyXr(errors) {
          if (errors) return;

          if (!window.ShopifyXR) {
            document.addEventListener('shopify_xr_initialized', function() {
              setupShopifyXr();
            });
            return;
          }

          for (var sectionId in modelJsonSections) {
            if (modelJsonSections.hasOwnProperty(sectionId)) {
              var modelSection = modelJsonSections[sectionId];

              if (modelSection.loaded) continue;
              var modelJson = document.querySelector('#ModelJson-' + sectionId);

              window.ShopifyXR.addModels(JSON.parse(modelJson.innerHTML));
              modelSection.loaded = true;
            }
          }
          window.ShopifyXR.setupXRElements();
        }

        function setupModelViewerUi(errors) {
          if (errors) return;

          for (var key in models) {
            if (models.hasOwnProperty(key)) {
              var model = models[key];
              if (!model.modelViewerUi) {
                model.modelViewerUi = new Shopify.ModelViewerUI(model.element);
              }
              setupModelViewerListeners(model);
            }
          }
        }

        function setupModelViewerListeners(model) {
          var xrButton = xrButtons[model.sectionId];

          model.container.classList.add('is-media__initialized');

          model.container.addEventListener('mediaVisible', function() {
            if (xrButton.element) xrButton.element.setAttribute( 'data-shopify-model3d-id', model.modelId );
            if (BEEThemeSP.isTouch) return;
            model.modelViewerUi.play();
          });

          model.container.addEventListener('mediaHidden', function() {
            if (xrButton.element)  xrButton.element.setAttribute( 'data-shopify-model3d-id',xrButton.defaultId );
            model.modelViewerUi.pause();
          });

          model.container.addEventListener('xrLaunch', function() {
            model.modelViewerUi.pause();
          });

          // check first active
        //   if ( $(model).index == 0) {
        //     model.dispatchEvent(
            //   new CustomEvent('mediaVisible', {
            //     bubbles: true,
            //     cancelable: true
            //   })
            // );
        //   }

          // model.element.addEventListener('shopify_model_viewer_ui_toggle_play', function() {
          //   console.log('model play');
          // });

          // model.element.addEventListener('shopify_model_viewer_ui_toggle_pause', function() {
          //   console.log('model pause');
          // });
        }

        function removeSectionModels(sectionId) {
          for (var key in models) {
            if (models.hasOwnProperty(key)) {
              var model = models[key];
              if (model.sectionId === sectionId) {
                models[key].modelViewerUi.destroy();
                delete models[key];
              }
            }
          }
          delete modelJsonSections[sectionId];
        }

        return {
          init: init,
          removeSectionModels: removeSectionModels
        };
   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * 360 PRODUCT
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   var Product360 = (function() {

        var loadScript360 = false;

        function init(media, sectionId) {

            if (loadScript360) {
               initRun(media, sectionId)

            } else {
               $script(BEEconfigs.script12b, function() {
                  initRun(media, sectionId);
                  loadScript360 = true;
               });
            }

        }

        function initRun(media, sectionId) {
            media = media[0];

            let json360 = JSON.parse(document.querySelector('#Json360-' + sectionId).innerHTML),
               imgArray = json360.imgArray,
               min      = parseFloat(media.getAttribute("data-min")) || 1.194,
               max      = parseFloat(media.getAttribute("data-max")) || 2,
               ratio    = (window.devicePixelRatio < min) ? min : window.devicePixelRatio,
               ratio_2  = (ratio > max) ? max : ratio,
               imgW     = Math.round(media.clientWidth*ratio_2);

            json360.imgArray = [];
 
            for (let i in imgArray) {
               json360.imgArray.push(`${imgArray[i]}&width=${imgW}`)
            }

            json360.onReady = function() {
               setup360Listeners(threesixty,media);
            };

            var threesixty  = $(media.querySelector('.bee-threesixty') ).ThreeSixty(json360);
            //setup360Listeners(threesixty,media);
            //
        }

        function setup360Listeners(threesixty,media) {

            media.classList.add('is-media__initialized');

            media.addEventListener('mediaVisible', function() {
               //if (xrButton.element) xrButton.element.setAttribute( 'data-shopify-model3d-id', model.modelId );

               if (BEEThemeSP.isTouch) return;
               try {
                  threesixty.play();
                  $(media.querySelector('.nav_bar_play')).removeClass("nav_bar_play").addClass("nav_bar_stop");
               } catch (error) {}
            });
            
            //console.log($(media).hasClass('is-selected'))
            if ($(media).hasClass('is-selected')) {
               threesixty.play();
               setTimeout(function() {
                  $(media.querySelector('.nav_bar_play')).removeClass("nav_bar_play").addClass("nav_bar_stop");
               }, 50);
            }

            media.addEventListener('mediaHidden', function() {
               // if (xrButton.element)  xrButton.element.setAttribute( 'data-shopify-model3d-id',xrButton.defaultId );
               threesixty.stop();
               $(media.querySelector('.nav_bar_stop')).removeClass("nav_bar_stop").addClass("nav_bar_play");
             });
        }

        return {
          init: init
        };
   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Store Availability
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   var PickupAvailability = (function() {

      var selectors = {
          pickupAvailabilityPopupOpen: '[data-pickup-availability-popup-open]',
          pickupAvailabilityPopupClose: '[data-pickup-availability-popup-close]'
      },
      mfp_close   = BEEstrings.mfp_close,
      mfp_loading = BEEstrings.mfp_loading,
      pickupAvailabilityCache = {};

      function PickupAvailability($container, pickupAvailabilityContainer) {
         this.container             = pickupAvailabilityContainer;
         this.idPopup               = this.container.dataset.idPopup;
         this.hasOnlyDefaultVariant = this.container.dataset.hasOnlyDefaultVariant === 'true';
         this.rootUrl = this.container.dataset.rootUrl;
         this.variantId = this.container.dataset.variantId;
         // console.log(this)
         var self = this;

         $container.on('pickupAvailability:update', function(e) {
           self.updateContent(e.currentVariant.id);
         });  

         $container.on('pickupAvailability:clear', function(e) {
            self.clearContent();
         });
      }

      PickupAvailability.prototype = Object.assign({}, PickupAvailability.prototype, {

         updateContent: function(variantId = this.variantId) {
            let rootUrl = this.rootUrl;
            if (!rootUrl.endsWith("/")) {
              rootUrl = rootUrl + "/";
            }
            var variantSectionUrl = rootUrl + 'variants/' +variantId + '/?section_id=pickup-availability',
            self                  = this,
            cacheName             = cacheNameFirst+'pickup-availability'+variantId;

            var pickupAvailabilityPopupOpen = self.container.querySelector(selectors.pickupAvailabilityPopupOpen);

            self.container.style.opacity = 0.5;

            if (pickupAvailabilityPopupOpen) {
              pickupAvailabilityPopupOpen.disabled = true;
              pickupAvailabilityPopupOpen.setAttribute('aria-busy', true);
            }

            // console.log(pickupAvailabilityCache)
            
            if ( pickupAvailabilityCache[cacheName] ) {
              self.updateResponse( pickupAvailabilityCache[cacheName] );

            } else {
               BEEThemeSP.getToFetchSection(null,'text',variantSectionUrl).then((pickupAvailabilityHTML) => {
                  if ( pickupAvailabilityHTML == 'NVT_94') return;
                  pickupAvailabilityCache[cacheName] = pickupAvailabilityHTML;
                  self.updateResponse(pickupAvailabilityHTML);
               });
               // fetch(variantSectionUrl)
               //  .then(function(response) {
               //     return response.text();
               // }).then(function(pickupAvailabilityHTML) {

               //     pickupAvailabilityCache[cacheName] = pickupAvailabilityHTML;
               //     self.updateResponse(pickupAvailabilityHTML);

               // });

            }
         },

         updateResponse: function(pickupAvailabilityHTML) {

            if (pickupAvailabilityHTML.trim() === '') {
               return;
            }

            this.container.innerHTML = pickupAvailabilityHTML;
            this.container.innerHTML = this.container.firstElementChild.innerHTML;
            this.container.style.opacity = 1;

            // Need to query this again because we updated the DOM
            var pickupAvailabilityPopupOpen = this.container.querySelector(selectors.pickupAvailabilityPopupOpen),
            self = this;

            if (!pickupAvailabilityPopupOpen) {
               return;
            }

            this.container.querySelector("#pickupAvailabilityPopup").id = this.idPopup;
            pickupAvailabilityPopupOpen.addEventListener('click', self._onClickModalOpen.bind(self) );
         },

         clearContent: function() {
            this.container.innerHTML = '';
         },

         _onClickModalOpen: function() {
            var self = this;
            // console.log(self)
            $.magnificPopupBee.open({
               items: {
                src: `#${self.idPopup}`
               },
               type        : 'inline',
               removalDelay: 500, //delay removal by X to allow out-animation
               tClose      : mfp_close,
               tLoading    : mfp_loading,
               callbacks: {
               beforeOpen: function () {
                  this.st.mainClass ='mfp-move-horizontal bee-pickup-availability_pp_wrapper';
               },
               open: function () {
                   // Will fire when this exact popup is opened
                   // this - is Magnific Popup object
      
                  // self.container.dispatchEvent(
                  //   new CustomEvent('pickupAvailabilityPopupOpened', {
                  //     bubbles: true,
                  //     cancelable: true
                  //   })
                  // );

                  $body.trigger('NTpopupInline:offClose');
                  $body.trigger('currency:update');

                  var pickupAvailabilityPopupClose = document.querySelector(`#${self.idPopup} ${selectors.pickupAvailabilityPopupClose}`);
                  // console.log(pickupAvailabilityPopupClose)
                  if (!pickupAvailabilityPopupClose) {
                     return;
                  }
                  pickupAvailabilityPopupClose.removeEventListener('click', self._onClickModalClose );
                  pickupAvailabilityPopupClose.addEventListener('click', self._onClickModalClose );

               },
               beforeClose: function () { },
               close: function () { },
               afterClose: function() {
                  $body.trigger('NTpopupInline:onClose');
               }
              }
            });
         },
         _onClickModalClose: function() {
            // console.log('_onClickModalClose');
            $.magnificPopupBee.close();
         }
      });

      return PickupAvailability;
   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Sticky Addto cart
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   var StickyAddToCart = (function() {

      var classes   = {
         isShow     : 'is--shown',
         isActive   : 'sticky-is--active',
         isHiddenMb : 'is-hidden--mobile'
      },
      eventClick = 'click.sticky',
      $sticky,
      summaryOffset,
      data_ani_atc   = 'data-animation-atc',
      windowHeight   = $window.height(),
      documentHeight = $document.height(),
      heightStickyATC = 0,
      heightStickyATC2 = 0,
      $stickyClose,
      backToTop = '#bee-backToTop',
      isShow = 'is--show';

      function stickyAddToCart($formID, stickyShow, useStickySelect) {

         if ( !$formID[0] ) return;
         //console.log($formID)

         var self = this,
         debounce_timer,
         offAlwaysStickyVisible = (stickyShow == '2');

         summaryOffset  = $formID.offset().top + $formID.outerHeight();

         // Add html sticky add to cart
         self._updateContent();

         $stickyClose = $sticky.find('[data-action-info-close]');
         BootSales.ani( $sticky.find('[data-action-atc]') );
         self._stickyAddToCartToggle();

         if (!offAlwaysStickyVisible) {
             $sticky.addClass(classes.isShow);
             $body.addClass(classes.isActive);
         }

         // $window.scroll( self._stickyAddToCartToggle );

         $window.scroll(function() {
           if(debounce_timer) {clearTimeout(debounce_timer);}
        
           debounce_timer = setTimeout(function() {
             self._stickyAddToCartToggle(offAlwaysStickyVisible);
           }, 30);
         });



         var $stickyQuantity = $sticky.find('[data-quantity-wrapper] [data-quantity-value]'),
             $quantity = $formID.find('[data-quantity-value');

         $stickyQuantity.change(function(){
           $quantity.val(this.value)
         });

         $quantity.change(function() {
           $stickyQuantity.val(this.value)
         }); 

         if (useStickySelect) {

         } else {

            $sticky.find('[data-sticky-v-title]').on(eventClick, function (e) {
              e.preventDefault();
              $('html, body').animate({
                scrollTop: $formID.offset().top - 100
              }, 500);
              $stickyClose.trigger(eventClick);
            });

         }
            
         let $atcProduct = $sticky.find('.bee-sticky-atc__product'),
         dataActionATC   = 'data-action-atc',
         dataActionDelay = 'data-action-delay',
         $atcAction      = $sticky.find(`[${dataActionATC}]`),
         isOpened = true;

         //console.log($atcProduct)
         $sticky.find(`[${dataActionATC}][${dataActionDelay}]`).on(eventClick, function (e) {

            if ( !$(this)[0].hasAttribute(dataActionDelay) || $window.width() > 767 ) return;
            
            e.preventDefault();
            e.stopPropagation();

            isOpened = true;
            
            // console.log('xxx')
            $atcProduct.slideDown({
                start: function () {
                    $(this).css({
                        display: "flex"
                    });
                    $atcAction.removeAttr(dataActionDelay);
                    $(backToTop).removeClass(isShow);
                },
                complete: function(){
                    getHeightStickyATC();
                    $(backToTop).addClass(isShow);
                }
            });
            // $atcAction.removeAttr(dataActionDelay);
            // $(backToTop).removeClass(isShow);
            // setTimeout(getHeightStickyATC, 500);

         });

         $stickyClose.on(eventClick, function (e) {

            if ( !isOpened || $window.width() > 767 ) return;

            e.preventDefault();
            isOpened = false;
            $atcProduct.slideUp({
                start: function () {
                    $atcAction.attr(dataActionDelay,'');
                    $(backToTop).removeClass(isShow);
                },
                complete: function(){
                    getHeightStickyATC();
                    $(backToTop).addClass(isShow);
                }
            })
            // $atcAction.attr(dataActionDelay,'');
            // $(backToTop).removeClass(isShow);
            // setTimeout(getHeightStickyATC, 404);
         });
         
         // Get height BackToTop
         // console.log($sticky)
         // getHeightStickyATC();
         // setTimeout(getHeightStickyATC, 1500);
         // setTimeout(getHeightStickyATC, 2500);
         // $window.on('resize', function() {
         //    getHeightStickyATC();
         //    setTimeout(getHeightStickyATC, 1500);
         //    setTimeout(getHeightStickyATC, 2500);
         // });
         $window.on('resize.sticky', getHeightStickyATC);

      }

      function getHeightStickyATC() {
         heightStickyATC2 = $sticky.outerHeight();

        if ( heightStickyATC == heightStickyATC2 ) return;

        heightStickyATC = heightStickyATC2;
 
        $html.css({
          '--stickyATC-height': $sticky.outerHeight() + 'px',
        });
      }

      stickyAddToCart.prototype = Object.assign({}, stickyAddToCart.prototype, {

         _updateContent: function() {
            BEEThemeSP.$appendComponent.after($('#bee-sticky-atc-temp').html());
            $sticky = $('[data-sticky-addtocart]');
         },
          
         _stickyAddToCartToggle: function(offAlwaysStickyVisible) {
           var windowScroll = $window.scrollTop(),
               totalScroll = parseInt(windowScroll + windowHeight) + 60;
               documentHeight = $document.height();

           if (summaryOffset < windowScroll && totalScroll !== documentHeight && totalScroll < documentHeight) {
             $sticky.addClass(classes.isShow);
             $body.addClass(classes.isActive);
             getHeightStickyATC();
          
           } else if (totalScroll === documentHeight || totalScroll > documentHeight || summaryOffset > windowScroll && offAlwaysStickyVisible) {
             // scroll last footer show windowScroll + windowHeight == documentHeight || summaryOffset > windowScroll 
             $sticky.removeClass(classes.isShow);
             $body.removeClass(classes.isActive);
             $sticky.find('[data-dropdown-open].is--clicked').click();
             $stickyClose.trigger(eventClick);
           }
         }

      });

      return stickyAddToCart;

   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Init Media Visible
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   function initMediaVisible($mainMedia) {

      var $mainMediaVisible = $mainMedia.find('.bee-product__media-item:not(.is--media-hide)'),
          mainMediaVisibleLength = $mainMediaVisible.length;
      
      if ( mainMediaVisibleLength == 4 || mainMediaVisibleLength > 5 ) mainMediaVisibleLength = 'normal';
      $mainMedia.attr('data-media-sizes',mainMediaVisibleLength);
      $mainMedia.find('.bee-product__media-item:not(.is--media-hide):last').addClass('is--media-last');
      //$mainMedia.find('.bee-product__media-item:not(.is--media-hide):visible:last').addClass('is--media-last');

      // remove all class data-index
      $mainMedia.find('.bee-product__media-item').attr('data-index', '');
      $mainMediaVisible.each(function( index ) {
         $(this).attr('data-index', index);
      });
   };

   /**
    * Product Selection scripts
    * ------------------------------------------------------------------------------
    *
    * @namespace Product
    * data-product-featured='{"id":"{{product.id}}", "swatch":true, "media": true,"enableHistoryState": true, "formID": "#product-form-12345"}'
    */
   function JsonParse(str) {
      return JSON.parse(str || '{}');
   };

   BEEThemeSP.Product = (function() {

      var data_product   = 'data-product-featured',
      VariantsCache      = {},
      //VariantItemCache   = {},
      ProductsOPCache    = {},
      IsRemoveUnavai     = !$html.hasClass('is-remove-unavai-0'),
      data_swatch_item   = '[data-swatch-item]',
      data_swatch_option = '[data-swatch-option]',
      str_unavai         = 'is--unavailable',
      txt_selected       = 'is--selected',
      class_selected     = '.'+txt_selected,
      txt_disable        = 'is-pswp-disable',
      class_enabled      = 'isotopebee-enabled',
      txt_variant_img    = '.bee-color-mode__variant_image .is--first-color',
      swatch_selector    = data_swatch_item+':not('+class_selected+')',

      productMediaTypeVideo = '[data-media-type="video"], [data-media-type="external_video"]',
      productMediaTypeModel = '[data-media-type="model"]',
      productMediaType360   = '[data-media-type="360"]',
      productMediaWrapper   = '[data-product-single-media-wrapper]',
      productDeferredMedia  = '[data-deferred-media]',
      productMainMedia      = '[data-main-media]',
      pickupAvailabilityContainer = '[data-pickup-availability-container]',

      BEE_config         = BEEconfigs,
      BEE_Str            = BEEProductStrings,
      nowTimestamp       = BEE_config.nowTimestamp,
      new_day_int        = BEE_config.new_day_int,
      use_sale_badge     = BEE_config.use_sale_badge,
      label_sale_style   = BEE_config.label_sale_style,
      use_preorder_badge = BEE_config.use_preorder_badge,
      use_new_badge      = BEE_config.use_new_badge,
      use_soldout_badge  = BEE_config.use_soldout_badge,
      use_custom_badge   = BEE_config.use_custom_badge,
      badgeTexts         = {
         sale: BEE_Str.badgeSale,
         new: BEE_Str.badgeNew,
         preOrder: BEE_Str.badgepreOrder,
         soldout: BEE_Str.badgeSoldout,
         SavePercent: BEE_Str.badgeSavePercent,
      },
      badgesConfigs      = {
         texts : badgeTexts,
         saleStyle : label_sale_style
         // usePreorder : use_preorder_badge,
         // useSoldout : use_soldout_badge,
         // useSale : use_sale_badge,
         // saleStyle : label_sale_style
      },
      addedAddthis     = false;

      // if (IsRemoveUnavai) {
      //    swatch_selector = swatch_selector + ':not(.'+str_unavai+')';
      // }

      function Product(_this44) {
         // console.log(this)
         this.$container     = $(_this44);

         if (this.$container.is('[data-product-options]') ) {
            this._itemQuickShopInline();
            return;
         }
         this.productConfigs = JsonParse( this.$container.attr(data_product) );
         this.productID      = this.productConfigs.id;
         
         this.container       = _this44;
         this.$mainMedia      = this.$container.find(productMainMedia);
         this.mainMedia       = this.$mainMedia[0];
         this.sectionId       = this.productConfigs.sectionId;
         this.disableSwatch   = this.productConfigs.disableSwatch;
         this.isSticky        = this.productConfigs.isSticky;
         this.isStickyMB      = this.productConfigs.isStickyMB;
         this.stickyShow      = this.productConfigs.stickyShow;
         this.useStickySelect = this.productConfigs.useStickySelect;
         this.$addThis        = this.$container.find('[data-bee-addthis]');         
         this.$shortDes       = this.$container.find('[data-des-height]');
         this.eventHandlers   = {};

         this._createBadgesProduct();
         this._initBootSales();
         this._initSubmit();
         
         // console.log(this)
         // Stop parsing if we don't have the product config
         // section in the Theme Editor
         if (!this.productConfigs['id']) {
            return;
         }

         this.$variantImg         = this.$container.find(txt_variant_img);
         this.disableVariantImage = !this.$variantImg[0];
         // console.log(this.disableVariantImage)

         // Check run swatch
         this.$formSelectorId             = this.$container.find(this.productConfigs.formID);
         this.$formSelectorIdLength       = this.$formSelectorId.length;
         this.pickupAvailabilityContainer = this.$container.find(pickupAvailabilityContainer)[0];

         if (this.pickupAvailabilityContainer && this.$formSelectorIdLength > 0) {
            this._initPickupAvailability();
            if ( this.disableSwatch) {
               this.pickupAvailability.updateContent();

            }
         }

         this._initNotifyBackinStock();

         if (IsScreen767Smaller && !this.isStickyMB) this.isSticky = false;
         if (this.isSticky) this._initStickyAddToCart(); 

         if ( !this.disableSwatch && this.$formSelectorIdLength > 0 ) {

            // this.$formSelectorId     = this.$container.find(this.productConfigs.formID);
            this.$originalSelectorId = this.$formSelectorId.find('select[name="id"]');
            this.$options1           = this.$formSelectorId.find('[data-swatch-option][data-id="0"]');
            this.$options2           = this.$formSelectorId.find('[data-swatch-option][data-id="1"]');
            this.$options3           = this.$formSelectorId.find('[data-swatch-option][data-id="2"]');
            this.PrOptionsSize;

            if ( !this.disableVariantImage ) {
               this.$variantImgItems = this.$variantImg.find('[data-swatch-item]');
               this.colorOptionIndex = this.$variantImg.data('id');
               //this.colorOptionIndex = this.$variantImg.index();
               this.swatchWidth      = this.$variantImgItems.outerWidth()*2
            }

            
            this._initVariants();

            // Click swatch
            this._swatchesEventListeners();
            this._changeMediaSlider();

            if ( !this.disableVariantImage ) this._updateVariantImageSwatchFirst();
            
         }
         // EndCheck run swatch
         
         var self = this;   
         if (self.mainMedia) {
            self._initProductIsotope();
         }

         setTimeout(function(){ 

            if (!self.mainMedia) return;
               self._initLoadContent();
               setTimeout(function(){
                  self._initProductVideo();
                  self._initModelViewerLibraries();
                  self._initShopifyXrLaunch();
                  self._init360ViewerLibraries();
                  var productInfoElement = self.container.querySelector('.bee-product__info-container--sticky');
                  if (productInfoElement && self.productConfigs.infoOverflowScroller ) {
                     self.infoOverflowScroller = new BEEThemeSP.OverflowScroller(productInfoElement, {
                       offsetTop: (79 + 30),
                       offsetBottom: 30,
                       updateOffsetTop: true
                     });
                  }
               }, 100);

         }, 1000);
            
         if ( !!self.$addThis[0] ) {

            if ( self.$addThis.is('[data-qv-addthis]') ) {

               if (IsDesignMode) addedAddthis = false;

                // https://www.addthis.com/academy/addthis-sharing-and-follow-buttons-best-practices/
                // https://www.addthis.com/academy/addthis-tumblr-infinite-scroll/
               // https://www.addthis.com/academy/using-dashboard-configuration-tools-dynamically/

               if (typeof window.addthis_new_tool !== 'undefined') { 
                  window.addthis_new_tool(); 
                  addthis.layers.refresh();
                 return;
               }
              
              if (addedAddthis) {
                 intiAjaxHelp();
              } else {
                  $script('https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-56efaa05a768bd19', function() {
                     addedAddthis = true;
                     intiAjaxHelp();
                  });
              }

            } else if ( !addedAddthis ) {
               $script('//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-56efaa05a768bd19' , function() {
                  addedAddthis = true;
               });
            }
         }

         // Update Zoom pswp
         var main_click = self.productConfigs.main_click;
         if (main_click == 'none' || !self.mainMedia) return;

         if ( (BEEThemeSP.isTouch && self.productConfigs.enable_zoom_click_mb) || (BEEThemeSP.isHover && main_click == 'pswp') ) {
            var $disable =  this.$mainMedia.find('.'+txt_disable);
            $disable.removeClass(txt_disable);
            
            if ( BEEThemeSP.isTouch && self.productConfigs.enable_zoom_click_mb && windowWidth > 1024 ) {
               document.addEventListener('theme:hover', function(evt) {
                     $disable.addClass(txt_disable);
               });
            }
         }

        // Get Height description
        if(this.$shortDes) {
          this.$shortDes.each(function(idx,ele){
            $(ele).parent().css("--full-h", $(ele).height()+'px');
          });
          this.$shortDes.on('click', function(){
            $(this).parent().css("--full-h", $(this).height()+'px');
          })
        }

      };

      function intiAjaxHelp() {
         $script('https://s7.addthis.com/downloads/ajax_help.min.js' , function() {
            const myInterval = setInterval(function() {
             if (typeof window.addthis_new_tool !== 'undefined') {
               clearInterval(myInterval);
               window.addthis_new_tool();
               addthis.layers.refresh();
             }
            }, 100);
         });
      };
      
      Product.prototype = Object.assign({}, Product.prototype, {

         _itemQuickShopInline: function() {

            var  _option,
            optionsObject,
            variantsObject,
            PrOptionsSize,
            self = this;

            self.$qsInline           = self.$container.find('[data-qs-inl]');
            self.$formSelectorId     = self.$qsInline.find('form');
            self.$originalSelectorId = self.$formSelectorId.find('select[name="id"]');
            self.$options1           = self.$formSelectorId.find('[data-swatch-option][data-id="0"]');
            self.$options2           = self.$formSelectorId.find('[data-swatch-option][data-id="1"]');
            self.$options3           = self.$formSelectorId.find('[data-swatch-option][data-id="2"]');


            self.productConfigs      = JsonParse( self.$originalSelectorId.attr('data-product-featured') );
            self.productID           = self.productConfigs.id;

            self.$variantImg         = self.$qsInline.find(txt_variant_img);
            self.disableVariantImage = !self.$variantImg[0];
           
            if ( !self.disableVariantImage ) {
               self.$variantImgItems = self.$variantImg.find('[data-swatch-item]');
               self.colorOptionIndex = self.$variantImg.data('id');
               //self.colorOptionIndex = self.$variantImg.index();
               self.swatchWidth      = self.$variantImgItems.outerWidth()*2;
               //console.log('self.swatchWidth ', self.$variantImg, self.swatchWidth )
            }

            self._initVariants();
            self._swatchesEventListeners();
            self._initSubmit();

            if ( !self.disableVariantImage ) this._updateVariantImageSwatchFirst();
            // update button atc x
            // update image      ...
            // update Badges     x
         },
        
         _initVariants: function() {

            var  _option,
            optionsObject,
            variantsObject,
            productConfigs = this.productConfigs;

            // if (this.productConfigs.removeSoldout) {
            //    IsRemoveUnavai = true;
            //    $body.removeClass('is-remove-unavai-false').addClass('is-remove-unavai-true');
            // }
            if ( productConfigs.isGrouped ) {
               productConfigs.isGrouped = ( this.$container.find('form[data-groups-pr-form]').length > 0 );
            }

            if ( productConfigs.isGrouped ) return;

            if ( !VariantsCache[this.productID] ) {
               try {
                  variantsObject = JSON.parse( this.$container.find('.pr_variants_json').html() );
                  
                  // update incoming to variant
                  this.$originalSelectorId.find('> option').each(function(index) {
                     _option                                  = $(this)
                     variantsObject[index].incoming           = _option.data('incoming');
                     variantsObject[index].next_incoming_date = _option.data('nextincomingdate') || null;
                     variantsObject[index].inventory_policy   = _option.data('inventorypolicy')  || null;
                     variantsObject[index].inventory_quantity = _option.data('inventoryquantity');
                     //if (_option.data('mdid') != null) ArrayMedia.push(_option.data('mdid'));
                  });

                  // console.log(variantsObject);
                  VariantsCache[this.productID]   = variantsObject;
                  optionsObject              = JSON.parse(this.$container.find('.pr_options_json').html());
                  ProductsOPCache[this.productID] = optionsObject;
                  this.PrOptionsSize         = optionsObject.length;

               } catch (err) {
                  console.log('not found pr json')
                  // Stop parsing if we don't have the product json script tag when loading
                  return;
               }
            } else {
               variantsObject     = VariantsCache[this.productID];
               optionsObject      = ProductsOPCache[this.productID];
               this.PrOptionsSize = optionsObject.length;
            }

            if (typeof productConfigs.unQuickShopInline != 'boolean') productConfigs.unQuickShopInline = true
            
            var options = {
               enableHistoryState   : productConfigs.enableHistoryState || false,
               $container           : this.$container,
               formSelectorId       : this.$formSelectorId,
               $originalSelectorId  : this.$originalSelectorId,
               $options1            : this.$options1,
               $options2            : this.$options2,
               $options3            : this.$options3,
               variants             : variantsObject,
               productOptions       : optionsObject,
               PrOptionsSize        : this.PrOptionsSize,
               removeSoldout        : productConfigs.removeSoldout,
               isNoPick             : productConfigs.isNoPick,
               hasSoldoutUnavailable: productConfigs.hasSoldoutUnavailable,
               canMediaGroup        : productConfigs.canMediaGroup,
               isMainProduct        : productConfigs.isMainProduct,
               oldVariant           : {},
               badgesConfigs        : badgesConfigs,
               $variantImg          : this.$variantImg,
               disableVariantImage  : this.disableVariantImage,
               swatchWidth          : this.swatchWidth,
               isSticky             : this.isSticky,
               useStickySelect      : this.useStickySelect,
               showFirstMedia       : productConfigs.showFirstMedia,
               unQuickShopInline    : productConfigs.unQuickShopInline,
               isQuickShopForm      : productConfigs.isQuickShopForm
            };

            // Install VariantSelects
            // VariantSelects($container, options);
            // new object variants, object which automatically inherits all the prototype methods, including _updateSwatchSelector, sku, etc
            this.Variants = new Variants(options);
         },

         _swatchesEventListeners: function() {

            if (!this.PrOptionsSize) {
               return;
            }

            var bl_item_swatched = true,
            isFormBeepritem      = this.$formSelectorId.hasClass('is-form-beepritem'),
            self                 = this,
            optionSelected,
            tempVariant,
            index;
           
            self.$formSelectorId.on('click', swatch_selector, function(e) {
            //self.$formSelectorId.on('change', '[data-variant-input]', function(e) {
            //self.$formSelectorId.find(data_swatch_item).change(function(e){

               e.preventDefault();
               
               var $this = $(this); 
               // var $this = $(this).parent();
               $this.addClass(txt_selected).siblings().removeClass(txt_selected);

               // Update text selected
               $this.closest(data_swatch_option).find('[data-current-value]').html( $this.data('value') );

               if (isFormBeepritem && bl_item_swatched) {
                  self.$formSelectorId.addClass('beeproduct-swatched');
                  self.$formSelectorId.find('[data-swatch-option][data-id="0"] [data-swatch-name],[data-swatch-option][data-id="1"],[data-swatch-option][data-id="2"]').show(150);
                  bl_item_swatched = false;
               }

               // cached value currenrt swatch item click
               self.Variants.clickedCurrentValue = $this.data('value') + '';
               index = $this.closest(data_swatch_option).data('id')
               self.Variants.clickedCurrentIndex = 'option'+ (++index);

               if ( self.$formSelectorId.find(class_selected).length < self.PrOptionsSize && self.Variants.isNoPick ) {
                  self.Variants._updateMediaFilterNoPick();
                  self.Variants._updateMediaFirst($this);
                  return;
               }

               self.Variants.eventClickedSwatch = true;
               
               //self.Variants.oldVariant = self.Variants.currentVariant;

               self.Variants.clickedOptions = [];
               self.$formSelectorId.find(data_swatch_option+' '+ class_selected).each(function(index, option) {
                   //console.log(index, option)
                   self.Variants.clickedOptions.push({
                     value: $(option).data('value') + '',
                     index: 'option' + (++index)
                   });
               });
               // self.Variants.clickedOptions = {
               //    option1: self.$options1.find(class_selected).data('value') + '', 
               //    option2: (self.$options2.find(class_selected).data('value') || 'bee_nathan') + '', 
               //    option3: (self.$options3.find(class_selected).data('value') || 'bee_nathan') + '' 
               // };
               // console.log(self.Variants)
               
               // Update var oldVariant
               if (!self.Variants.isNoPick) self.Variants.oldVariant = self.Variants.currentVariant;

               
               if (self.Variants.isNoPick) {
                  // Hidden notices
                  $body.trigger('hide.bee.notices');

                  // Visblue sticky add to cart
                  if (self.isSticky) $('[data-sticky-addtocart]').removeAttr('hidden');

                  // update isNoPick
                  self.Variants.isNoPick = false;

                  // update button atc on product item quickshop inline
                  self.$container.trigger('replace:btnAtc');
                  
               }
               tempVariant = self.Variants._getVariantFromOptions();

               self.$originalSelectorId.val(tempVariant.id);
               optionSelected = self.$originalSelectorId.val();
               
               // New variant not unavailable
               if ( IsRemoveUnavai && (optionSelected === null || optionSelected === "") ) {
                  tempVariant = self.Variants._getVariantFromSize();
                  self.$originalSelectorId.val(tempVariant.id);
                  optionSelected = self.$originalSelectorId.val();
               } 

               // Update var currentVariant
               self.Variants.currentVariant = tempVariant;

               // Trigger event
               //       self.$originalSelectorId[0].dispatchEvent(
                   //     new CustomEvent('variant:clicked', {
                   //       detail: {
                   //         variant: tempVariant
                   //       },
                   //       bubbles: true,
                   //       cancelable: true
                   //     })
                     // );
               
               self.$originalSelectorId[0].dispatchEvent( new Event('change', { bubbles: true, cancelable: true }) );
               //self.$originalSelectorId.trigger('change');

            });
         },

         _changeMediaSlider: function() {

            if ( !this.PrOptionsSize || !this.productConfigs.changeVariantByImg || this.$container.find('.flickitybee[data-main-media] .bee-product__media-item--variant').length == 0 ) {
               return;
            }

            var mediaID, 
                optionVal,
                optionValOld,
                mediaIDOnSelected,
                self = this,
                $selected;
           
            this.$container.find('.flickitybee[data-main-media]').off( 'select.flickitybee').on( 'select.flickitybee', function( event, index ) {
               
               $(this).trigger( 'select.carousel' );
               $selected = $(this).find('.flickitybee-slider>[data-main-slide]').eq(index);
 
               if ( !$selected.hasClass('bee-product__media-item--variant') || self.Variants.eventClickedSwatch ) return;

               mediaID      = $selected.data('media-id');
               optionValOld = self.$originalSelectorId.val();
               optionVal    = self.$originalSelectorId.find('option[data-mdid="'+mediaID+'"]:not(:disabled)').val();
               // console.log( self.Variants.mediaID, mediaID );
               if ( typeof optionVal == 'undefined' || optionValOld == optionVal || self.Variants.isNoPick || self.Variants.mediaID == mediaID) return;

               //console.log('_changeMediaSlider');
               // self.Variants.eventChangeSlider = true;
               self.$originalSelectorId.val(optionVal);
               self.$originalSelectorId[0].dispatchEvent( new Event('change', { bubbles: true, cancelable: true } ) );

            });
         },

         _initBootSales: function() {
           this.BootSales = new BootSales.init(this.$container);
         },

         _initSubmit: function() {
            $document.trigger({
              type: 'submitAtc:bee',
              $container: this.$container
            });
         },

         _initProductVideo: function() {

            var sectionId          = this.sectionId,
            productMediaTypeVideos = this.mainMedia.querySelectorAll(productMediaTypeVideo);
            
            if (productMediaTypeVideos.length < 1) return;

            productMediaTypeVideos.forEach(function(el) {
              ProductVideo.init(el, sectionId);
            });
         },

         _init360ViewerLibraries: function() {
            var Viewer360Elements = this.mainMedia.querySelectorAll(productMediaType360);
            if (Viewer360Elements.length < 1) return;
             Product360.init(Viewer360Elements, this.sectionId);
         },

         _initModelViewerLibraries: function() {
            var modelViewerElements = this.mainMedia.querySelectorAll(productMediaTypeModel);
            if (modelViewerElements.length < 1) return;
             ProductModel.init(modelViewerElements, this.sectionId);
         },

         _initShopifyXrLaunch: function() {
            this.eventHandlers.initShopifyXrLaunchHandler = this._initShopifyXrLaunchHandler.bind(this);
            document.addEventListener(
              'shopify_xr_launch',
              this.eventHandlers.initShopifyXrLaunchHandler
            );
         },

         _initShopifyXrLaunchHandler: function() {
            var currentMedia = this.mainMedia.querySelector( productMediaWrapper );
            // var currentMedia = this.container.querySelector( productMediaWrapper +':not(.' +self.classes.hidden +')');
            currentMedia.dispatchEvent(
              new CustomEvent('xrLaunch', {
                bubbles: true,
                cancelable: true
              })
            );
         },

         loadContent: function(deferredMedia) {
            // window.pauseAllMedia();
            // console.log('deferredMedia',deferredMedia)
            if (deferredMedia.getAttribute('loaded')) return;

            const content  = document.createElement('div'),
                  template = deferredMedia.querySelector('template');

            content.appendChild(template.content.firstElementChild.cloneNode(true));

            deferredMedia.setAttribute('loaded', true);
            const deferredElement = deferredMedia.appendChild(content.querySelector('video, model-viewer, iframe'));
            template.remove();
            //if (focus) deferredElement.focus();

         },

         _initLoadContent: function() {
            var self = this;
            self.mainMedia.querySelectorAll(productDeferredMedia).forEach(function(el) {
               el.classList.add('is--adding');
               self.loadContent( el.querySelector('.bee-pr') );
            });
         },

         _initProductIsotope: function() {
            
            // console.log(this.productConfigs)
            var self = this;
            if ( IsScreen767Smaller || !self.productConfigs.hasIsotope) return;

            initMediaVisible(this.$mainMedia);

            BEEThemeSP.Isotopebee.init(this.$mainMedia);
            $window.on('resize.prIstope', function () {
               if ($window.width() < 768 && self.$mainMedia.hasClass(class_enabled) ) { 
                  self.$mainMedia.isotopebee('destroy').removeClass(class_enabled);

               } else if ( $window.width() >= 768 && !self.$mainMedia.hasClass(class_enabled) ) {
                  setTimeout(function(){ BEEThemeSP.Isotopebee.init(self.$mainMedia); }, 500);
               }
            });
         },

         _initPickupAvailability: function() {
            this.pickupAvailability = new PickupAvailability(this.$container, this.pickupAvailabilityContainer);
            // console.log(this.pickupAvailability)
         },

         _initNotifyBackinStock: function() {

            let self = this;
            let $template_inline = this.$container.find(".bee-product-notify-stock");
            let $template_popup = this.$container.find("[data-notify-stock-btn]");
            if (!$template_inline[0] && !$template_popup[0]) return;
            if ($template_inline[0]){
               this.$container.on('notifyBackinStock:show', function(e) {
                  let $form = $("#ContactFormNotifyStock" + self.productID);
                  $template_inline.show();
                  let url = `${e.currentVariant.name.replace('- ', '( ')} ) ${self.productConfigs.orgUrl}?variants=${e.currentVariant.id}`;
                  $form.find('[name="contact[product]"]').text(url);
               });
               this.$container.on('notifyBackinStock:hide', function(e) {
                  $template_inline.hide();
               });
            }
            else {
               var $notifyBackinStockBtn = this.$container.find('[data-notify-stock-btn]');

               var rootUrl = $notifyBackinStockBtn.data('root-url'),
               url = '';
   
               if (!rootUrl.endsWith("/")) {
                 rootUrl = rootUrl + "/";
               }
   
               url = `${rootUrl}variants/${$notifyBackinStockBtn.data('variant-id')}/?section_id=back-in-stock`;
   
               $notifyBackinStockBtn.attr('data-mfp-src',url).hide().removeClass('bee-d-none');
               
               if (!this.productConfigs.available && this.productConfigs.disableSwatch) {
                  $notifyBackinStockBtn.show();
                  return;
               }
   
               // if ( !$notifyBackinStockBtn.is('[data-notify-stock-trigger]') ) $notifyBackinStockBtn.removeAttr('data-open-mfp-ajax')
   
               this.$container.on('notifyBackinStock:show', function(e) {
                 url = `${rootUrl}variants/${e.currentVariant.id}/?section_id=back-in-stock`;
                 $notifyBackinStockBtn.attr({
                  'data-mfp-src'   : url,
                  'data-storageid' : `notify-stock${e.currentVariant.id}`
                 }).show();
               });
   
               this.$container.on('notifyBackinStock:hide', function(e) {
                 $notifyBackinStockBtn.hide();
               });    
   
            }
         },

         _createBadgesProduct: function() {
            
            let $badges = this.$container.find('[data-product-single-badge]'),
                Arrsort = ( $badges.attr('data-sort') || '' ).replace(/ /g,'').split(','),
                productConfigs = this.productConfigs,
                htmlBadges = '';
            
            // console.log(this, Arrsort,$badges)
            if (Arrsort.length == 0 || $badges.length == 0) return;
         
            let l = Arrsort.length;
            for (let i = 0; i < l; i++) {

               switch(Arrsort[i]) {
                  case 'sale':

                     if (!use_sale_badge) break;

                     let compare_at_price = productConfigs.compare_at_price,
                     price                = productConfigs.price;  

                     if (compare_at_price <= price ){
                        htmlBadges += '<span data-badge-sale class="bee-badge-item bee-badge-sale" hidden></span>'; 
                        break;
                     }

                     if (label_sale_style == '2') {
                        // assign save = compare_price | minus: product_price | times: 100.0 | divided_by: compare_price | round
                        var savePercent = ((compare_at_price - price) * 100) / compare_at_price,
                        saveText        = badgeTexts.SavePercent.replace('[sale]', Math.round(savePercent));

                     } else if (label_sale_style == '3') {
                        var saveAmount = compare_at_price - price,
                        saveText       = BEEThemeSP.Currency.formatMoney(saveAmount);
                     } else {
                        var saveText = badgeTexts[Arrsort[i]];
                     }

                     htmlBadges += '<span data-badge-sale class="bee-badge-item bee-badge-sale">'+saveText+'</span>'; 
                     break;

                  case 'preOrder':

                     if (!use_preorder_badge) break;

                     htmlBadges += `<span data-badge-preorder class="bee-badge-item bee-badge-preorder"${ (productConfigs.isPreoder) ?  '': ' hidden' }>${ badgeTexts[Arrsort[i]] }</span>`;
                     break;

                  case 'new':
                     // productOptions.dateStart
                     var diffSeconds = nowTimestamp - productConfigs.dateStart,
                     diffDays        = Math.floor(diffSeconds / 3600),
                     diffDays        = Math.floor(diffDays / 24);
                     if (diffDays >= new_day_int || !use_new_badge) break;

                     htmlBadges += '<span class="bee-badge-item bee-badge-new">'+badgeTexts[Arrsort[i]]+'</span>';
                     break;

                  case 'soldout':

                     if (!use_soldout_badge) break;

                     htmlBadges += `<span data-badge-soldout class="bee-badge-item bee-badge-soldout"${ (productConfigs.available) ?  ' hidden': '' }>${ badgeTexts[Arrsort[i]] }</span>`;
                     break;

                  default:
                     // custom label
                     let customBadge = productConfigs.customBadge;
                     if (!customBadge || !use_custom_badge) break;
                     let l2 = customBadge.length;
                     for (let j = 0; j < l2; j++) {
                        htmlBadges += '<span class="bee-badge-item bee-badge-custom bee-badge-'+productConfigs.customBadgeHandle[j]+'">'+customBadge[j]+'</span>';
                     }
               }
            }
            $badges.html(htmlBadges);

         },
         
         /**
          * Update swatch variant image first
          */
         _updateVariantImageSwatchFirst: function() {
            //console.log(this.variants)

            let self    = this,
            variants    = self.Variants.variants,
            l           = variants.length,
            colorOptionIndex = this.colorOptionIndex;

            var getVariantImageSwatch = function(valueLowerCase) {
               for (let i = 0; i < l; i++) {
                  let variant = variants[i];

                  // variant.title not support multi languages convert variant.options
                  // variant.title.toLowerCase() ==> variant.options.join(' / ').toLowerCase()
                  // + '' to convert value to string, fix error when is a number, will error with fuction toLowerCase
                  // if (variant.featured_image && variant.options.join(' / ').toLowerCase().indexOf(valueLowerCase) > -1 ) {
                  if (variant.featured_image && (variant.options[colorOptionIndex]+'').toLowerCase() == valueLowerCase ) {
                     return variant.featured_image; // Return as soon as the object is found
                     break
                  }

               }
            };

            self.$variantImgItems.each(function( index ) {
               let $this = $(this),
               // + '' to convert value to string, fix error when is a number, will error with fuction toLowerCase
               // https://stackoverflow.com/questions/5765398/whats-the-best-way-to-convert-a-number-to-a-string-in-javascript
               value = ($this.data('value')+'').toLowerCase(),
               img_url   = getVariantImageSwatch(value);

               if (!img_url) return;

               let $imgElement = $this.find('[data-img-el]');
               $this = (!$imgElement[0]) ? $this : $imgElement;
               
               $this.attr('data-bg', BEEThemeSP.Images.getNewImageUrl(img_url.src, self.swatchWidth));
               // $this.attr('data-bgset', `${BEEThemeSP.Images.getNewImageUrl(img_url.src,swatchWidth)} 1x, ${BEEThemeSP.Images.getNewImageUrl(img_url.src,swatchWidth*2)} 2x`);
            });

         },

         _initStickyAddToCart: function() {
            this.stickyAddToCart = new StickyAddToCart(this.$formSelectorId, this.stickyShow, this.useStickySelect);
         }

      });

      return Product;

   })();

   BEEThemeSP._initProducts = (function() {

      var data_product = 'data-product-featured',
          class_enabled = 'initProducts__enabled';

      function init() {
         $('['+data_product+']:not(.'+class_enabled+')').each(function() {
           $(this).addClass(class_enabled);
           new BEEThemeSP.Product( this );
         });
      }

      return init;
    
   })();

   BEEThemeSP._initBundlePrs = (function() {

      var data_product = 'data-product-bundles',
      class_enabled    = 'initBundles__enabled',
      class_1          = 'has--hover-pin',
      class_2          = 'is--hover',
      class_3          = 'is--trigger-hover';

      function handerHoverPin($container) {
         
         if ( BEEThemeSP.isTouch  || $container.length == 0 ) return;

         // console.log($container)
         let $form = $container.find('[data-bundles-pr-form]'),
         $image    = $container.find('[data-bundle-image]');

         $container.hoverIntent({ 

            selector: '[data-bundle-pin]',   
            sensitivity: 6,
            interval: 40,
            timeout: 40, 
            over:function(t){
               //console.log('over ')
               $image.addClass(class_1);
               $form.addClass(class_1);
               $(this).addClass(class_2);
               $( $(this).data('trigger') ).addClass(class_3);
            },
            out: function(){
               $image.removeClass(class_1);
               $form.removeClass(class_1);
               $image.find('.'+class_2).removeClass(class_2);
               $form.find('.'+class_3).removeClass(class_3);
            }

         });

      }

      function init() {
         // console.log('init')
         $('['+data_product+']:not(.'+class_enabled+')').each(function() {
           let $this = $(this);
           $this.addClass(class_enabled);
           BootSales.ani( $this.find('[data-atc-form]') );
           handerHoverPin( $this )
         });
      }

      return init;

   })();
   
   BEEThemeSP.Cookies = (function() {

        function cookiesEnabled() {
            var cookieEnabled = navigator.cookieEnabled;

            if (!cookieEnabled) {
             document.cookie = 'testcookie';
             cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
            }
            return cookieEnabled;
        }

        function cartCookies() {
           if ( cookiesEnabled() ) return;
           $html.addClass('not--cookies');
        }

      return cartCookies;

   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Init isVisible
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * partial : if set true then any part element visbile
    */
   // https://github.com/customd/jQuery-visible/
   BEEThemeSP.isVisible = function(el, partial, hidden, direction, container) {

      if (el.length < 1) return;

      // Set direction default to 'both'.
      direction = direction || 'both';

      var $w = $window,
         $t = el.length > 1 ? el.eq(0) : el,
         isContained = typeof container !== 'undefined' && container !== null,
         $c = isContained ? $(container) : $w,
         wPosition = isContained ? $c.position() : 0,
         t = $t.get(0),
         vpWidth = $c.outerWidth(),
         vpHeight = $c.outerHeight(),
         clientSize = hidden === true ? t.offsetWidth * t.offsetHeight : true;

      if (typeof t.getBoundingClientRect === 'function') {

         // Use el native browser method, if available.
         var rec = t.getBoundingClientRect(),
            tViz = isContained ?
            rec.top - wPosition.top >= 0 && rec.top < vpHeight + wPosition.top :
            rec.top >= 0 && rec.top < vpHeight,
            bViz = isContained ?
            rec.bottom - wPosition.top > 0 && rec.bottom <= vpHeight + wPosition.top :
            rec.bottom > 0 && rec.bottom <= vpHeight,
            lViz = isContained ?
            rec.left - wPosition.left >= 0 && rec.left < vpWidth + wPosition.left :
            rec.left >= 0 && rec.left < vpWidth,
            rViz = isContained ?
            rec.right - wPosition.left > 0 && rec.right < vpWidth + wPosition.left :
            rec.right > 0 && rec.right <= vpWidth,
            vVisible = partial ? tViz || bViz : tViz && bViz,
            hVisible = partial ? lViz || rViz : lViz && rViz,
            vVisible = (rec.top < 0 && rec.bottom > vpHeight) ? true : vVisible,
            hVisible = (rec.left < 0 && rec.right > vpWidth) ? true : hVisible;

         if (direction === 'both')
            return clientSize && vVisible && hVisible;
         else if (direction === 'vertical')
            return clientSize && vVisible;
         else if (direction === 'horizontal')
            return clientSize && hVisible;
      } else {

         var viewTop = isContained ? 0 : wPosition,
            viewBottom = viewTop + vpHeight,
            viewLeft = $c.scrollLeft(),
            viewRight = viewLeft + vpWidth,
            position = $t.position(),
            _top = position.top,
            _bottom = _top + $t.height(),
            _left = position.left,
            _right = _left + $t.width(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom,
            compareLeft = partial === true ? _right : _left,
            compareRight = partial === true ? _left : _right;

         if (direction === 'both')
            return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
         else if (direction === 'vertical')
            return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
         else if (direction === 'horizontal')
            return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
      }
   };

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Tabs js
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   BEEThemeSP.Tabs = (function() {

      var enabledTab = 'bee-tabs-enabled',
          enabledSimpleTab = 'bee-tabs-simple-enabled',
          enabledASccordionTab = 'bee-tabs-accordion-enabled',
          timeout, 
          $bee_tab, $bee_tab2, $bee_tab_accordion,
          str_atc = 'bee-active',
          time = 300,
          time2 = 150,
          time3 = 200;

      function TabsInt() {

         $bee_tab = $(`[data-bee-tabs]:not(.${enabledTab})`);
         if ($bee_tab.length == 0) return;

         $bee_tab.addClass(enabledTab);

         $bee_tab.on('click', '[data-bee-tab-ul] [data-bee-tab-item]', function(e) {
            e.preventDefault();
            //console.log($(this))
            var _this = $(this),
               tab_parent = _this.closest('[data-bee-tabs]'),
               //content_parent = tab_parent.sibling(''), 
               id = _this.attr('href') || _this.data('id-tab'),
               $id = tab_parent.find(id),
               $flickitybee = $id.find('.flickitybee'),
               $isotopebee = $id.find('.isotopebee');

            tab_parent.find('.' + str_atc).removeClass(str_atc);
            tab_parent.find('[data-bee-tab-content]').hide();

            _this.addClass(str_atc)
            $id.show().addClass(str_atc);
            $id.closest('[data-bee-tab-wrapper]').addClass(str_atc);

            // Refresh or intall slider, istope 
            clearTimeout(timeout);
            timeout = setTimeout(function(){ 

               if ( $flickitybee.hasClass('flickitybee-enabled') ) {
                    $flickitybee.flickitybee('resize');
               } else if ( $isotopebee.hasClass('isotopebee-enabled') ) {
                    $isotopebee.isotopebee('layout');
               }
               
             }, 200);

         });

      }

      function TabsSimpleInt() {

         $bee_tab2 = $(`[data-bee-tabs2]:not(.${enabledSimpleTab})`);
         if ($bee_tab2.length == 0) return;
       
         $bee_tab2.addClass(enabledSimpleTab);
         $bee_tab2.on('click', '[data-bee-tab-ul2] [data-bee-tab-item]', function(e) {
            e.preventDefault();
            //console.log($(this))
            var _this = $(this),
               tab_parent = _this.closest('[data-bee-tabs2]'),
               id = _this.attr('href') || _this.data('id-tab'),
               $id = tab_parent.find(id);

            tab_parent.find('.' + str_atc).removeClass(str_atc);

            _this.addClass(str_atc)
            $id.addClass(str_atc);
            $id.closest('[data-bee-tab-wrapper]').addClass( str_atc );
            $id.closest('[data-bee-tabs2]').attr('data-tab-active', id.replace('#','') );

            if (_this.is('[data-triger-btns-tab]')) {

               if ( $id.hasClass('flickitybee flickitybee-enabled') ) {
                  $id.trigger('updateBtnTab.flickitybee');
               } else {
                  $id.find('.flickitybee.flickitybee-enabled').trigger('updateBtnTab.flickitybee');
               }
            }

            // Refresh or intall slider, istope 
            // clearTimeout(timeout);
            // timeout = setTimeout(function(){ 

            //    if ( $flickitybee.hasClass('flickitybee-enabled') ) {
            //         $flickitybee.flickitybee('resize');
            //    } else if ( $isotopebee.hasClass('isotopebee-enabled') ) {
            //         $isotopebee.isotopebee('layout');
            //    }
               
            //  }, 200);

         });

      }

      function AccordionInt() {

         $bee_tab_accordion = $(`[data-bee-tabs]:not(.${enabledASccordionTab})`);
         if ($bee_tab_accordion.length == 0) return;
 
         $bee_tab_accordion.addClass(enabledASccordionTab);
         $('.bee-type-accordion, [data-bee-accordion-pr]').find('.' + str_atc).find('[data-bee-tab-content]').css("display", "block");
         $bee_tab_accordion.on('click', '[data-bee-tab-wrapper] [data-bee-tab-item]', function(e) {
            e.preventDefault();

            // console.log('$accordion click')
            var _this = $(this),
               _tabs = _this.closest('[data-bee-tabs]'),
               tab_ul = _tabs.find('[data-bee-tab-ul]'),
               tab_wrapper = _tabs.find('[data-bee-tab-wrapper]:not([data-no-auto-close]).' + str_atc),
               tab_wrapper_active = tab_wrapper.find('[data-bee-tab-content]'),
               parent = _this.closest('[data-bee-tab-wrapper]'),
               tab_content = parent.find('[data-bee-tab-content]'),
               el = _this.closest('.bee-section'),
               $flickitybee = tab_content.find('.flickitybee'),
               $isotopebee = tab_content.find('.isotopebee'),
               timeout;

            if (el.length == 0) {
               el = _this.closest('.bee-section,.shopify-section');
            }

            if (parent.hasClass(str_atc)) {
               
               tab_ul.find('.' + str_atc).removeClass(str_atc);
               parent.removeClass(str_atc);
               tab_content.slideUp(time).removeClass(str_atc);

            } else {

               tab_wrapper.removeClass(str_atc);
               tab_ul.find('.' + str_atc).removeClass(str_atc);
               parent.addClass(str_atc);
               tab_ul.find(`a[href="${_this.attr('href')}"], [data-href="${_this.attr('href')}"]`).addClass(str_atc);
               tab_wrapper_active.slideUp(time2).removeClass(str_atc);
               tab_content.stop(true, true).slideDown(time, function() {
                  // Animation complete.

                  // Refresh or intall slider, istope, scollto 
                  if ( $flickitybee.hasClass('flickitybee-enabled') ) {
                       $flickitybee.flickitybee('resize');
                  } else if ( $isotopebee.hasClass('isotopebee-enabled') ) {
                       $isotopebee.isotopebee('layout');
                  }

                  if (BEEThemeSP.isVisible(_this, true)) {
                     return;
                  }

                  var num_height = $('.bee-section-header').height() || 0,
                     of_active = el.find(".bee-tab-wrapper.bee-active").offset().top - num_height - 10;
                  // el.find(".bee-tab-wrapper.bee-active")[0].scrollIntoView({behavior: 'smooth'});
                  // window.scrollBy({ top: -100, behavior: 'smooth'});
                  // https://stackoverflow.com/questions/60000332/how-can-i-detect-window-scroll-ended-in-javascript
                  $('body,html').animate({
                     scrollTop: of_active
                  });
            
               }).addClass(str_atc);

               // // Refresh or intall slider, istope, scollto 
               // clearTimeout(timeout);
               // timeout = setTimeout(function() { 

               //    if ( $flickitybee.hasClass('flickitybee-enabled') ) {
               //         $flickitybee.flickitybee('resize');
               //    } else if ( $isotopebee.hasClass('isotopebee-enabled') ) {
               //         $isotopebee.isotopebee('layout');
               //    }

               //    if (BEEThemeSP.isVisible(_this, true)) {
               //       return;
               //    }

               //    var num_height = $('.bee-section-header').height() || 0,
               //       of_active = el.find(".bee-tab-wrapper.bee-active").offset().top - num_height - 10;
               //    // el.find(".bee-tab-wrapper.bee-active")[0].scrollIntoView({behavior: 'smooth'});
               //    // window.scrollBy({ top: -100, behavior: 'smooth'});
               //    // https://stackoverflow.com/questions/60000332/how-can-i-detect-window-scroll-ended-in-javascript
               //    $('body,html').animate({
               //       scrollTop: of_active
               //    });

               //  }, time3);

            }

         });

      }

      return {
         Default: TabsInt,
         Simple: TabsSimpleInt,
         Accordion: AccordionInt
      }

   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * After render need reload slider, istope,...
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   BEEThemeSP.RenderRefresh = (function() {
      
      function RenderLayout($el) {
              // console.log('222');
              $body.trigger('currency:update');
              // geckoShopify.review();
              // geckoShopify.InitCountdown();
              // geckoShopify.lazyWishUpdate();
              // geckoShopify.recalculateSwatches();
               let $owl  = $el.find('.flickitybee'),
               $iso      = $el.find('.isotopebee'),
               $products = $el.find('.bee-products');

               if ( $products.length > 0 && typeof BEEThemeSP.reinitProductGridItem == 'function' ) {
                  BEEThemeSP.reinitProductGridItem();
               }
                  
               if ($iso.length > 0) {
                  BEEThemeSP.Isotopebee.init($iso);
               }

               if ($owl.length > 0) {
                $owl[0].flickitybee = new BEEThemeSP.Carousel($owl[0]);
                //BEEThemeSP.Flickitybee.init($owl);
               }
               BEEThemeSP.ProductItem.resizeObserver();
               if (BEEThemeSP.initLoadMore) BEEThemeSP.initLoadMore();
      }

      function Int() {
          var str_render_component = '[data-render-lazy-component]',
              $dt_render_component = $(str_render_component);

              // str_render_flickity = '[data-render-lazy-flickity]',
              // $dt_render_flickity = $(str_render_flickity),
              // str_render_istope = '[data-render-lazy-istope]',
              // $dt_render_istope = $(str_render_istope);

           if ($dt_render_component.length == 0) return;

           $(str_render_component+'.lazyloadbeeed' ).each(function() {
               RenderLayout($(this));
           });

           $(str_render_component+':not(.lazyloadbeeed)')
             // .one('lazyincludeloaded', function(e) {
             //   // console.log(e.detail.content);
             //     if (e.detail.content) {
             //     }
             // })
             .one('lazyincluded', function(e) {
               var el = $(e.target)[0], 
               $el    = $(el);
               RenderLayout($el);
           });

           $(str_render_component+':not(.lazyloadbee)').addClass('lazyloadbee');
      }

      return Int;

   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Parallax
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   BEEThemeSP.ParallaxInt = function() {
      var parallaxEl = '[data-parallax-beetrue]',
          $parallaxEl = $(parallaxEl+':not(.parallax_enabled)');

      if ( $parallaxEl.length == 0 ) return;

      $parallaxEl.each(function () {
         
         var $this = $(this),
             this_img = $this.attr('data-imgsl') || $this.find('.bee-parallax-img:visible')[0] || '.bee-parallax-img';

         // console.log('parallax',$this.attr("class"))
         if ($this.find(this_img).length > 0 || $this.is(".bee-parallax-bg.lazyloadbeeed")) {

            $this.addClass('parallax_enabled').beeJarallax({
               speed: $this.attr('data-speed') || 0.8,
               imgElement: this_img
               // ,disableParallax: function () {
               //      return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
               // }
            });

         }

      });
   };

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Init Countdown YYYY/MM/DD, YYYY/MM/DD hh:mm:ss
    * https://day.js.org/
    * http://hilios.github.io/jQuery.countdown/documentation.html
    * http://hilios.github.io/jQuery.countdown/examples/show-total-hours.html
    * http://hilios.github.io/jQuery.countdown/documentation.html#controls
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   BEEThemeSP.Countdown = (function() {

      var timezone_config = BEEconfigs.timezone,
         timezone_guess  = 'bee_nt_guess';
      try {
        timezone_guess = dayjs.tz.guess();
      }
       catch(err) {
      }

      /**
        *-------------------------------------------------------------------------------------------------------------------------------------------
        * Formart Date Countdown
        *-------------------------------------------------------------------------------------------------------------------------------------------
        */
      function getDateCountdown(date) {
         // console.log(date);
         if (typeof date == 'undefined') return;
         // dayjs.tz.name()
         var rt_date = date.replace("24:00:00", "23:59:59");
         //console.log(timezone_config,dayjs.tz.name);
         if (timezone_config != 'nobee' && timezone_guess != timezone_config) {
            try {
              //console.log(date.replace("/", "-").replace("/", "-"));
              // rt_date = dayjs(date.replace("/", "-").replace("/", "-")).tz(timezone_config).format('YYYY/MM/DD HH:mm:ss');
              rt_date = dayjs.tz(date.replace(/\//g,"-"), timezone_config).toDate();
            }
            catch(err) {
              console.log('Timezone error: '+timezone_config);
            }
         } else {
           rt_date = new Date(rt_date);
         }
         return rt_date
      }

      function Int() {
         var $cd = $('[data-countdown-bee]:not(.bee-countdown-enabled)');
         if ($cd.length == 0) return;
      
         $cd.each(function() {
                
            var $this        = $(this),
            html_format_date = $($this.attr('data-keyid')).html() || $.trim($this.html()) || '%D days %H:%M:%S',
            isRefreshSlider  = $this.is('[data-refresh-owl]'),
            isLoop           = $this.data('loop'),
            finalDate        = $this.data('date'),
            dayl             = parseInt($this.data('dayl')), // so ngap lap
            d_now            = dayjs(),
            finalDate_str    = finalDate.replace(/\//g,"").replace(/-/g,"")+'',
            finalDate_num    = parseInt(finalDate_str),
            Str_format       = ( finalDate_str.length < 9 ) ? 'YYYYMMDD' : 'YYYYMMDDHHmmss',
            // Str_format_cd = ( finalDate_str.length < 9 ) ? 'YYYY/MM/DD' : 'YYYY/MM/DD HH:mm:ss',
            d_now_num        = parseInt(d_now.format(Str_format));

            if (finalDate_num > d_now_num || dayl < 1) {
                isLoop = false;
            }
            // console.log(finalDate_num)

            if (isLoop || isLoop == 'true') {
              
              var getHours_FinalDate = dayjs(finalDate).format(' HH:mm:ss'),
              date1                  = d_now.diff(finalDate.replace(/\//g,"-"), 'days'), // lay tong so ngay giua 2 moc thoi gian
              num1                   = date1 % dayl, // chia lay phan du
              num2                   = dayl - num1;
              // console.log(date1,num1,num2,getHours_FinalDate)

              //d_now.add(num2, 'days'); // used on moment js
              d_now = d_now.add(num2, 'day'); // https://day.js.org/docs/en/manipulate/add#docsNav
              finalDate = d_now.format('YYYY/MM/DD')+getHours_FinalDate;
              $this.attr( 'data-dateloop',finalDate ); // buoc nay ko can cung duoc, chi day data date len de sau nay kiem tra check loi thoi

            }

            // console.log(finalDate, getDateCountdown(finalDate))
            $this.countdown(getDateCountdown(finalDate), {elapse: true})
            .on('update.countdown', function(event) {

              if (event.elapsed) {
                 $this.html('').addClass('expired_cdbee').closest('[data-countdown-wrap]').html('').addClass('expired_cdbee');
              } else {
                 var totalHours = event.offset.totalDays * 24 + event.offset.hours;
                 $this.html(event.strftime( html_format_date.replace('[totalHours]',totalHours) ));
              }

            }).addClass('bee-countdown-enabled').closest('[data-countdown-wrap]').addClass('bee-countdown-enabled');
            if (isRefreshSlider) {

                var timeout;
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                  //console.log('aaaa')
                  $this.closest('.flickitybee-enabled').flickitybee('resize');
                }, 600);
            }

         });
         
         // https://fzi4k1gk2dw3t0fqy18sw8qi-wpengine.netdna-ssl.com/wp-content/themes/flatsome/inc/shortcodes/ux_countdown/ux-countdown.js?ver=3.2.6
         // var format = '<span>%-H<strong>%!H:'+t_hour+','+hours_plural+';</strong></span><span>%-M<strong>%!M:'+t_min+','+min_plural+';</strong></span><span>%-S<strong>%!S:'+t_sec+','+sec_plural+';</strong></span>';
         // if(event.offset.days > 0) { format = '<span>%-d<strong>%!d:'+t_day+','+days_plural+';</strong></span>' + format; }
         // if(event.offset.weeks > 0) { format = '<span>%-w<strong>%!w:'+t_week+','+weeks_plural+';</strong></span>' + format; }
      }

      return Int;

   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Init countTo https://github.com/mhuggins/jquery-countTo/blob/master/jquery.countTo.js
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   var countTo = (function() {

      const DEFAULTS = {
         from: 0,               // the number the element should start at
         to: 0,                 // the number the element should end at
         speed: 1000,           // how long it should take to count between the target numbers
         refreshInterval: 100,  // how often the element should be updated
         decimals: 0,           // the number of decimal places to show
         formatter: formatter,  // handler for formatting the value before rendering
         onUpdate: null,        // callback method for every time the element is updated
         onComplete: null       // callback method for when the element finishes updating
      };

      function CountTo(element, option) { 
         //console.log(element)
         const options = typeof(option) === 'object' ? option : {};
         this.$element = $(element);
         this.options  = Object.assign({}, DEFAULTS, this._dataOptions(), options);
         this._init();
      }

      function formatter(value, options) {
         return value.toFixed(options.decimals);
      }

      CountTo.prototype = Object.assign({}, CountTo.prototype, { 

         _init: function() {
               this.value     = this.options.from;
               this.loops     = Math.ceil(this.options.speed / this.options.refreshInterval);
               this.loopCount = 0;
               this.increment = (this.options.to - this.options.from) / this.loops;
               this._start();

         },

         _dataOptions: function() {
               var options = {
                  from:            this.$element.data('from'),
                  to:              this.$element.data('to'),
                  speed:           this.$element.data('speed'),
                  refreshInterval: this.$element.data('refresh-interval'),
                  decimals:        this.$element.data('decimals')
               };
         
               var keys = Object.keys(options);
         
               for (var i in keys) {
                  var key = keys[i];
         
                  if (typeof(options[key]) === 'undefined') {
                  delete options[key];
                  }
               }
         
               return options;
         }, 

         _update: function() {    
               this.value += this.increment;
               this.loopCount++;
         
               this._render();
         
               if (typeof(this.options.onUpdate) == 'function') {
               this.options.onUpdate.call(this.$element, this.value);
               }
         
               if (this.loopCount >= this.loops) {
               clearInterval(this.interval);
               this.value = this.options.to;
         
               if (typeof(this.options.onComplete) == 'function') {
                  this.options.onComplete.call(this.$element, this.value);
               }
               }
         },

         _render: function() {
               var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
               //console.log(formattedValue)
               this.$element.text(formattedValue);
         }, 

         // _restart: function() {    
         //       this._stop();
         //       this._init();
         //       this._start();
         // },

         _start: function() {    
            this._stop();
            this._render();
            this.interval = setInterval(this._update.bind(this), this.options.refreshInterval);
         },

         _stop: function() {
               if (this.interval) {
                  clearInterval(this.interval);
               }
         },

         // _toggle: function() {
         //       if (this.interval) {
         //       this._stop();
         //       } else {
         //       this._start();
         //       }
         // }

      });

      return CountTo;

   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Init AnimateOnScroll
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
   BEEThemeSP.AnimateOnScroll = (function() {

      var options = {
           root: null,
           rootMargin: '0px',
           threshold: 0
          },
          time = BEEconfigs.timeani || 200;

      var myObserver = new IntersectionObserver(function (entries, options) {
         entries.forEach(function (entry) {

            var entry_target = entry.target;
            if (entry.isIntersecting && !entry_target.classList.contains("bee_animated") ) {
              
               // console.log(entry_target)
               setTimeout(function () {
                  // entry_target.classList.add("-in", "bee_animated");
                  entry_target.classList.add("bee_animated");

                  // let $entryTarget = $(entry_target);
                  //if ($entryTarget.is('[data-count-to]')) countTo($entryTarget);
                  if ($(entry_target).is('[data-count-to]')) this.countTo = new countTo(entry_target);
                  //if ($entryTarget.is('[data-count-to]')) $entryTarget.countTo();;

               }, time);
               // setTimeout(function () {
               //    //entry_target.classList.remove("data-cc-animate");
               //    entry_target.removeAttribute("data-bee-animate"); 
               //    // entry_target.style.transitionDuration = null;
               //    // entry_target.style.transitionDelay = null;
               // }, 5000);

               myObserver.unobserve(entry_target);

             }
         });
      });

    //   function countTo($this) {
    //      $this.countTo();
    //      // $this.countTo({
    //      //    onUpdate: function (value) {
    //      //       console.debug(this);
    //      //    },
    //      //    onComplete: function (value) {
    //      //       console.debug(this);
    //      //    }
    //      // });
    //   }

      function Int() {

         var $ani = $('[data-bee-animate]:not(.bee-animate-init)');
         if ($ani.length == 0 || !window.IntersectionObserver) return;

         $ani.each(function( index ) {
           // Start Resize observing the target node for configured mutations
            // if (e.dataset.ccAnimateDelay) {
            //    e.style.transitionDelay = e.dataset.ccAnimateDelay
            // }
            // if (e.dataset.ccAnimateDuration) {
            //    e.style.transitionDuration = e.dataset.ccAnimateDuration
            // }
            // if (e.dataset.ccAnimate) {
            //    e.classList.add(e.dataset.ccAnimate)
            // }
           myObserver.observe(this);
           $(this).addClass('bee-animate-init');
         });
      }

      return Int

   })();
   

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Init ResizeObserver
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver

   // BEEThemeSP.UpdateResizeObserver = function() {
   //    var $els = $('[data-bee-resizeobserver]:not(.bee_observered)');

   //    if ($els.length == 0 || !window.ResizeObserver) return;
      
   //    // var myVar;
   //    var callback = function (entries) {
   //      // This ResizeObserver callback mimics event handlers.

   //      // It calls Element's onresize method.
   //      entries.forEach(function (entry) {
   //             var myVar,
   //                $target = $(entry.target),
   //                $prs    = ($target.hasClass('bee-products')) ? $target : $target.closest('.bee-products');
              
   //            // console.log($target,$prs);
   //            clearTimeout(myVar);

   //            myVar = setTimeout(function(){ 
   //              if ($prs.hasClass('flickitybee-enable')) {
   //                $prs.flickitybee('resize');
   //              } else if ($prs.hasClass('isotopebee-enable')) {
   //                $prs.isotopebee('layout');
   //              }
   //            }, 250);
   //          // if (entry.target.onresize) {
   //          //   entry.target.onresize(entry); 
   //          //   console.log(entry.target);
   //          // }
   //      });
        
   //      // console.log(this);
   //      // console.log('Size changed');
   //    };

   //    // Create an observerIsotope instance linked to the callback function
   //    var MyResizeObserver = new ResizeObserver(callback);
      
   //    $els.each(function( index ) {
   //      // Start Resize observing the target node for configured mutations
   //      MyResizeObserver.observe(this);
   //      $(this).addClass('bee_observered');
   //    });

   //  };
   

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Init Popups
    * https://dimsemenov.com/plugins/magnific-popup/documentation.html
    * closeMarkup
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */

   BEEThemeSP.PopupMFP = (function() {

      var $mfpBee  = $.fn.magnificPopupBee,
      mfp_close    = BEEstrings.mfp_close,
      mfp_loading  = BEEstrings.mfp_loading,
      $mfp_inline  = $('[data-open-mfp-inline]:not(.bee-mfp-enabled)'),
      $mfp_iframe  = $('[data-open-mfp-iframe]:not(.bee-mfp-enabled)'),
      $mfp_video   = $('[data-open-mfp-video]:not(.bee-mfp-enabled)'),
      $mfp_ajax    = $('[data-open-mfp-ajax]:not(.bee-mfp-enabled)'),
      $mfpCustom   = $('[data-open-mfp]'),
      classPpening = 'is-opening-mfp';
      
      function int() {

         if ('undefined' === typeof $mfpBee ) return;
         mfpInline();
         mfpframe();
         mfpVideo();
         mfpAjax();
         mfpCustom();
      }

      // MFPopup Inline
      function mfpInline() {

         if ($mfp_inline.length == 0) {
            return;
         }

         $mfp_inline.magnificPopupBee({
            type        : 'inline',
            removalDelay: 500, //delay removal by X to allow out-animation
            tClose      : mfp_close,
            tLoading    : mfp_loading,
            callbacks   : {
               beforeOpen: function() {
                  $html.addClass(classPpening);
                  this.st.mainClass = 'mfp-move-horizontal bee-inline-popup-wrapper bee-rte '+ $(this.st.el).data('id') || '';
               },
               open      : function() {
                     $body.trigger('NTpopupInline:offClose');
                     $body.trigger('currency:update');
               },
               afterClose: function() {
                  $body.trigger('NTpopupInline:onClose');
                  $html.removeClass(classPpening);

               }
            }
         }).addClass('bee-mfp-enabled');
      }
      
      // MFPopup Iframe
      function mfpframe() {
         
         $mfp_iframe = $('[data-open-mfp-iframe]:not(.bee-mfp-enabled)');
         if ($mfp_iframe.length == 0) {
            return;
         }

         $mfp_iframe.magnificPopupBee({
            type: 'iframe',
            //removalDelay: 500, //delay removal by X to allow out-animation
            tClose      : mfp_close,
            tLoading    : mfp_loading,
            iframe: {
               markup: '<div class="mfp-iframe-scaler bee-pr bee-mfp-iframe">'+
                     '<div class="mfp-close"></div>'+
                     '<iframe class="mfp-iframe" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen></iframe>'+
                   '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

               patterns: {
                  youtube: {
                  index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                  id: 'v=', // String that splits URL in a two parts, second part should be %id%
                  // Or null - full URL will be returned
                  // Or a function that should return %id%, for example:
                  // id: function(url) { return 'parsed id'; }

                  src: '//www.youtube.com/embed/%id%?enablejsapi=1&autoplay=0&rel=0&playlist=%id%&loop=1' // URL that will be set as a source for iframe.
                },
                vimeo: {
                  index: 'vimeo.com/',
                  id: '/',
                  src: '//player.vimeo.com/video/%id%?autoplay=0&loop=1'
                },
                gmaps: {
                  index: '//maps.google.',
                  src: '%id%&output=embed'
                }
               },
               srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            },
            callbacks: {
               beforeOpen: function() {
                  $html.addClass(classPpening);
                  this.st.mainClass = 'bee-iframe-popup-wrapper '+ $(this.st.el).data('id') || '';
               },
               change: function() {
               },
               open: function() {

                var $el  = $(this.st.el),
                $iframe  = $('.bee-mfp-iframe').find('.mfp-iframe'),
                videoScr = $iframe.attr('src');
               // console.log($iframe, videoScr);

                // check autoplay
                if ($el.is('[data-autoplay-true]')) {
                 videoScr = videoScr.replace('autoplay=0','autoplay=1')
                }
                // check disable loop
                if ($el.is('[data-loop-false]')) {
                 videoScr = videoScr.split('&playlist=')[0];
                 videoScr = videoScr.replace('loop=1','loop=0');
                }

                $iframe.attr( 'src',videoScr );  
               },
               close: function() {},
               afterClose: function() {
                  $html.removeClass(classPpening);
               }
            }
         }).addClass('bee-mfp-enabled');
      }
      
      // MFPopup Video
      function mfpVideo() {

         $mfp_video = $('[data-open-mfp-video]:not(.bee-mfp-enabled)');
         if ($mfp_video.length == 0) {
            return;
         }
         
         $mfp_video.on('click', function (e) {
            e.preventDefault();

               var $this       = $(this),
               options_poster  = JSON.parse($this.attr('data-options') || '{}'),
               video_type      = options_poster.type,
               IdVideo         = options_poster.vid,
               isAutoplayVideo = options_poster.autoplay,
               isLoopVideo     = options_poster.loop,
               markupIframe = '<iframe src="src_bee" class="class_bee" title="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
               markupVideo,
               type = {
                  html5: 'html5',
                  youtube: 'youtube',
                  vimeo: 'vimeo'
               };

            switch (video_type) {
               case type.html5:
                  
                  let tmpVideoID = options_poster.id,
                      videoHtml = '';

                  if ( tmpVideoID && $(tmpVideoID)[0] ) { 
                     videoHtml = $(tmpVideoID).html();
                  } else {
                     videoHtml = '<video class="mfp-video" src="'+options_poster.srcDefault+'" preload="auto" controls '+(isAutoplayVideo ? 'autoplay' : '')+(isAutoplayVideo ? ' loop' : '')+' playsinline></video>';
                  }
                  markupVideo = `<div class="mfp-video-scaler bee-pr bee-mfp-video">${videoHtml.replace('<video', '<video  class="mfp-video"')}</div>`;

                  break;

               case type.youtube:
                  
                  markupIframe = markupIframe.replace( 'src_bee','//www.youtube.com/embed/'+IdVideo+'?enablejsapi=1&showinfo=0&controls=1&modestbranding=1&autoplay='+(+isAutoplayVideo)+'&rel=0'+(isLoopVideo ? '&playlist='+IdVideo+'&loop=1':'') ).replace('class_bee','js-youtube');
                  markupVideo  = '<div class="mfp-iframe-scaler bee-pr bee-mfp-iframe">'+markupIframe+'</div>';

                   break;


               case type.vimeo:
                  
                  markupIframe = markupIframe.replace( 'src_bee','//player.vimeo.com/video/'+IdVideo+'?&portrait=0&byline=0&color='+options_poster.accent_color+'&autoplay='+(+isAutoplayVideo)+'&loop='+(+isLoopVideo) ).replace('class_bee','js-vimeo');
                  markupVideo  = '<div class="mfp-iframe-scaler bee-pr bee-mfp-iframe">'+markupIframe+'</div>';

                   break;
            }



            $.magnificPopupBee.open({
               items: {
                  src: markupVideo,
                  type: 'inline'
               },
               // removalDelay: 500, //delay removal by X to allow out-animation
               tClose      : mfp_close,
               tLoading    : mfp_loading,
               callbacks   : {
                  beforeOpen: function() {
                     $html.addClass(classPpening);
                     this.st.mainClass = 'bee-video-popup-wrapper mfp-video-holder '+ $this.data('id') || '';
                  },
                  open      : function() {
                     $this.addClass('bee-mfp-enabled');
                     
                  },
                  afterClose      : function() {
                     $this.removeClass('bee-mfp-enabled');
                     $html.removeClass(classPpening);
                     
                  }
               }
            });

         });
      }
      
      // MFPopup Ajax
      function mfpAjax() {

         $mfp_ajax = $('[data-open-mfp-ajax]:not(.bee-mfp-enabled)');

         if ($mfp_ajax.length == 0) {
            return;
         }
         
         $mfp_ajax.magnificPopupBee({
            type        : 'ajax',
            removalDelay: 500, //delay removal by X to allow out-animation
            tClose      : mfp_close,
            // tLoading    : mfp_loading,
            tLoading    : '<div class="bee-loading-spin bee-spin-centered bee-spin-dark bee-spin-medium"></div>',
            callbacks   : {
                parseAjax: function(mfpResponse) {
                   // mfpResponse.data is a "data" object from ajax "success" callback
                   // for simple HTML file, it will be just String
                   // You may modify it to change contents of the popup
                   // For example, to show just #some-element:
                   // mfpResponse.data = $(mfpResponse.data).find('#some-element');

                   // mfpResponse.data must be a String or a DOM (jQuery) element
                  // console.log(this.st.el);
                  var _this_el = $(this.st.el),
                  id           = _this_el.data('id') || '',
                  _class       = _this_el.data('class') || '',
                  style        = _this_el.data('style') || '',
                  data         = mfpResponse.data;
                  
                  // edit data
                  mfpResponse.data = `<div class="mfp-with-anim bee-mfp-popup bee-rte ${_class}" id="${id}" style="${style}">${data.split('[beeplitlz]')[1] || data}</div>`;
                 
                  // console.log('Ajax content loaded:', mfpResponse);
               },
               ajaxContentAdded: function() {
                   // Ajax content is loaded and appended to DOM
                   // console.log(this.content);
               },
               beforeOpen: function() {
                  $html.addClass(classPpening);
                  this.st.mainClass = 'mfp-move-horizontal bee-ajax-popup-wrapper';
               },
               open      : function() {

                  var custom = $(this.st.el).data('custom'),
                  isPhone    = $(this.st.el).data('phone'),
                  $wrapper   = $('.bee-ajax-popup-wrapper:not(.mfp-bg) .mfp-content');
                   
                  $body.trigger('NTpopupInline:offClose');
                  $body.trigger('currency:update');
                   // console.log(isPhone, isPhone == false);
                   if (isPhone == false) {

                     $wrapper.find('#bee-ContactFormAsk__phone').remove();

                     // Fix not change ajax first load
                     setTimeout(function(){ 
                     $wrapper.find('#bee-ContactFormAsk__phone').remove();
                     }, 400);
                   }

                   if (custom) {
                     var ArrCustom = custom.split('||');
                     $.each( ArrCustom, function( key, value ) {
                       // console.log( key + ": " + value );
                       var ArrValue = value.split('=>');
                       $wrapper.find(ArrValue[0]).html(ArrValue[1]);
                     });

                     // Fix not change ajax first load
                     setTimeout(function(){ 
                     $.each( ArrCustom, function( key, value ) {
                       // console.log( key + ": " + value );
                       var ArrValue = value.split('=>');
                       $wrapper.find(ArrValue[0]).html(ArrValue[1]);
                     });
                     }, 400);

                   }
                  // console.log($wrapper)
                  // $(this.st.el).addClass('bee-mfp-enabled');
                  // $('#ContactFormAsk-product').val(title+' '+prUrl);
                  
               },
               afterClose: function() {
                  $body.trigger('NTpopupInline:onClose');
                  $html.removeClass(classPpening);
               }
            }
         }).addClass('bee-mfp-enabled');
      }
      
      // MFPopup Custom
      function mfpCustom() {

         if ($mfpCustom.length == 0) return;

         $body.on('click', '[data-open-mfp]', function (e) {

              e.preventDefault()
              var $this = $(e.currentTarget),
              html      = $("html"),
              datas     = $this.data(),
              id        = datas.opennt,
              color     = datas.color,
              bg        = datas.bg,
              position  = datas.pos,
              ani       = datas.ani || 'has_ntcanvas',
              remove    = datas.remove,
              cl        = datas.class,
              close     = datas.close || false,
              focuslast = datas.focuslast || false,
              focus     = $this.attr("data-focus"),
              YOffset   = window.pageYOffset,
              height    = window.height - $('#shopify-section-header_banner').outerHeight() - $('.ntheader_wrapper').outerHeight();
              //$this.offset();
             //console.log($this.offset())
             //console.log(ani)

            var nt_scroll = function () {
               if( !YOffset) return; 
               $('html, body').scrollTop(YOffset);
            }
            $this.addClass("current_clicked");
            $.magnificPopupBee.open({
                 items: {
                     src: id,
                     type: "inline",
                     tLoading: '<div class="loading-spin dark"></div>'
                 },
                 tClose: nt_settings.close,
                 removalDelay: 300,
                 closeBtnInside: close,
                 focus: focus,
                 autoFocusLast: focuslast,
                 callbacks: {
                     beforeOpen: function() {
                         this.st.mainClass = ani + " " + color + " " + ani+"_" + position;
                         //html.addClass('fix_ov_scroll');$("#nt_wrapper").css("max-height", height);
                         $html.addClass(classPpening);
                     },
                     open: function() {
                         //$("html,body").addClass('hidden_y');
                         $html.addClass(ani); 
                         $html.addClass(ani+"_" + position); 
                         cl && $(".mfp-content").addClass(cl); 
                         bg && $(".mfp-bg").addClass(bg); 
                         //$(".mfp-content .resize-select").change(); 
                         //$.fn.packery && $("[data-packery-options], .has-packery").packery("layout")
                           // body.find(ani+" .nt_simplebar").each(function() {
                           //    var $this = $(this)[0];
                           //    new SimpleBar($this, { autoHide: false });
                           //    //new SimpleBar($('.nt_simplebar'), { autoHide: false });
                           // });
                           //geckoShopify.catAccordion();
                           body.on('click', '.close_pp', function(e) {
                              e.preventDefault();
                              $.magnificPopup.close();
                           });
                           nt_scroll();



                     },
                     beforeClose: function() {
                         $html.removeClass(ani);
                         //$("html,body").removeClass('hidden_y');
                         //nt_scroll();

                     },
                     afterClose: function() {
                         $html.removeClass(ani+"_" + position); 
                         //html.removeClass('fix_ov_scroll');$("#nt_wrapper").css("max-height",'' );
                         $(".current_clicked").removeClass("current_clicked"); 
                         remove && $(id).removeClass("mfp-hide");
                         $html.removeClass(classPpening);

                     }
                 }
            });
         });
      }

      return int;

   })();

   /**
    * Nahtan popup custom
    */
   BEEThemeSP.NTpopupInline = (function() {

      var html_temp_modal = $('#bee_temp_modal').html(),
      evt_trigger         = 'modalbee:trigger',
      evt_opened          = 'modalbee:opened',
      evt_closed          = 'modalbee:closed',
      evt_destroy         = 'modalbee:destroy',
      class_actvie        = 'bee-modal--is-active',
      class_opened        = 'bee-modal-opened',
      namespace           = '.bee_qv',
      clickNamespace      = 'click'+namespace,
      keyupNamespace      = 'keyup'+namespace,
      transitionend       = 'transitionend webkitTransitionEnd oTransitionEnd',
      popupClass; 

      function ntPopupInline(data, type ,callback, ppClass = null) {
         popupClass = ppClass;
         // $body.trigger('modalbee:trigger');
         $body.off(evt_trigger).on(evt_trigger,function (e) {
            // console.log(e)
            if (isOpened()) {

               $body.trigger(evt_closed);

            } else {

               $body.trigger(evt_opened);

            }

         });
         
         // $body.trigger('modalbee:opened');
         $body.off(evt_opened).on(evt_opened,function (e) {
           
           if ( isOpened() ) return;
           
           // console.log('opened')
           beforeOpen(data);
           opened(callback);

         });
         
         // $body.trigger('modalbee:closed');
         $body.off(evt_closed).on(evt_closed,function (e) {
           // console.log(e)
           if (!isOpened() ) return;

           // console.log('closed')
           beforeClose();
           closed();
           afterClose();
           $body.trigger(evt_destroy);
           $body.trigger('bee:hideTooltip');

         });
         
         // $body.trigger('modalbee:destroy');
         $body.off(evt_destroy).on(evt_destroy,function (e) {
           // $body = $('body')
           // console.log('destroy');
           $body.off(evt_trigger)
           .off(evt_opened)
           .off(evt_closed)
           .off(evt_destroy)
           .off(clickNamespace)
           .off(keyupNamespace);

         });

         $body.on(clickNamespace,'[data-bee-modal-close]',function (e) {
           e.preventDefault();
           $body.trigger(evt_closed);
         });
         
         // Run int
         // Close by overlay
         $body.on(clickNamespace, closeByClickOverlay);

         // Close by esc
         $body.on(keyupNamespace, closeByEsc);

         $body.on('NTpopupInline:offClose',function (e) {
            $body.off(keyupNamespace, closeByEsc);
            $body.off(clickNamespace, closeByClickOverlay);
         });

         $body.on('NTpopupInline:onClose',function (e) {
            $body.on(keyupNamespace, closeByEsc);
            $body.on(clickNamespace, closeByClickOverlay);
         });
      }

      
      function isOpened() {
        return $('html').hasClass(class_opened);
      };

      function beforeOpen(data) {
         // AppendMarkupPopup
         BEEThemeSP.$appendComponent.after(html_temp_modal);
         if (popupClass) $html.addClass(popupClass);
         $('.bee-modal__content').html(data);
      };

      function opened(callback) {
         $html.addClass(class_opened);
         $('.bee-modal').addClass(class_actvie);
         // set focus when visible
         
         $('.bee-modal').on(transitionend, function () {
             $(this).focus().off(transitionend);
         });
         setTimeout(function(){ 
           $('.bee-modal').focus();
         }, 500);
         
         // run Refresh js
         // QuickVSRefresh(type);
         // console.log($('.bee-modal .bee-extra-link >a'))
         callback();
      };

      function beforeClose() {
         $('.bee-modal .flickitybee-enabled').trigger('destroy.bee')
      };

      function closed() {
         // console.log('closed')
         $('html').removeClass(class_opened).addClass('bee-modal-closing');
         $('.bee-modal').removeClass(class_actvie).addClass('bee-modal--is-closing');
         
      };

      function afterClose() {
         setTimeout(function(){ 
            // Remove MarkupPopup
            $('.bee-modal').remove();
            // Remove class
            $('html').removeClass('bee-modal-closing');
            if (popupClass) $html.removeClass(popupClass);
            //$body.trigger('bee:hideTooltip');
            BEEThemeSP.isEditCartReplace = false;
         }, 500);
      };

      function closeByEsc(e) {
         if (e.keyCode !== 27) return
         $body.trigger(evt_closed);
         //$body.unbind('keyup', closeByEsc);
         // $body.trigger(evt_closed).off(clickNamespace).off(keyupNamespace);
      };

      function closeByClickOverlay(e) {
         // console.log($(e.target).parents().is('.bee-modal__inner'));
         if ( $(e.target).parents().is('.bee-modal__inner') || $(e.target).parents().is('.mfp-ready') ) return;
         e.preventDefault();
         $body.trigger(evt_closed);
        
      };

      return ntPopupInline;

   })();
  
  /**
   * Currency Helpers
   * -----------------------------------------------------------------------------
   * A collection of useful functions that help with currency formatting
   *
   * Current contents
   * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
   *   - When theme.settings.superScriptPrice is enabled, format cents in <sup> tag
   * - getBaseUnit - Splits unit price apart to get value + unit
   *
   */

   BEEThemeSP.Currency = (function() {

      var moneyFormat = '${{amount}}',
      superScript     = BEEThemeSP.settings && BEEThemeSP.settings.superScriptPrice,
      themeFormat     = window.BEEconfigs.moneyFormat,
      defaultTo       = function(value, defaultValue) {
      return (value == null || value !== value) ? defaultValue : value
      };

      function formatMoney(cents, format) {
         if (!format) {
           format = themeFormat;
         }
     
         if (typeof cents === 'string') {
           cents = cents.replace('.', '');
         }
         var value = '';
         var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
         var formatString = (format || moneyFormat);
     
         function formatWithDelimiters(number, precision, thousands, decimal) {
           precision = defaultTo(precision, 2);
           thousands = defaultTo(thousands, ',');
           decimal   = defaultTo(decimal, '.');
     
           if (isNaN(number) || number == null) {
             return 0;
           }
     
           number = (number / 100.0).toFixed(precision);
     
           var parts = number.split('.');
           var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
           var centsAmount = parts[1] ? (decimal + parts[1]) : '';
     
           return dollarsAmount + centsAmount;
         }
     
         switch (formatString.match(placeholderRegex)[1]) {
           case 'amount':
             value = formatWithDelimiters(cents, 2);
     
             if (superScript && value && value.includes('.')) {
               value = value.replace('.', '<sup>') + '</sup>';
             }
     
             break;
           case 'amount_no_decimals':
             value = formatWithDelimiters(cents, 0);
             break;
           case 'amount_with_comma_separator':
             value = formatWithDelimiters(cents, 2, '.', ',');
     
             if (superScript && value && value.includes('.')) {
               value = value.replace(',', '<sup>') + '</sup>';
             }
     
             break;
           case 'amount_no_decimals_with_comma_separator':
             value = formatWithDelimiters(cents, 0, '.', ',');
             break;
           case 'amount_no_decimals_with_space_separator':
             value = formatWithDelimiters(cents, 0, ' ');
             break;
         }
     
         return formatString.replace(placeholderRegex, value);
      }
     
      function getBaseUnit(variant) {
         if (!variant) {
           return;
         }
     
         if (!variant.unit_price_measurement || !variant.unit_price_measurement.reference_value) {
           return;
         }
     
         return variant.unit_price_measurement.reference_value === 1
           ? variant.unit_price_measurement.reference_unit
           : variant.unit_price_measurement.reference_value +
               variant.unit_price_measurement.reference_unit;
      }
     
      return {
         formatMoney: formatMoney,
         getBaseUnit: getBaseUnit
      }

   })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * BEEThemeSP Helpers
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
      // BEEThemeSP.delegate = {
      //   on: function(event, callback, options){
      //     if( !this.namespaces ) // save the namespaces on the DOM element itself
      //       this.namespaces = {};
      
      //     this.namespaces[event] = callback;
      //     options = options || false;
      
      //     this.addEventListener(event.split('.')[0], callback, options);
      //     return this;
      //   },
      //   off: function(event) {
      //     if (!this.namespaces) { return }
      //     this.removeEventListener(event.split('.')[0], this.namespaces[event]);
      //     delete this.namespaces[event];
      //     return this;
      //   }
      // };
      
      // // Extend the DOM with these above custom methods
      // window.on = Element.prototype.on = BEEThemeSP.delegate.on;
      // window.off = Element.prototype.off = BEEThemeSP.delegate.off;

   // BEEThemeSP.Helpers = (function() {
   //      // var touchDevice = false;

   //      // var classes = {
   //      //   preventScrolling: 'prevent-scrolling'
   //      // };

   //      // var scrollPosition = window.pageYOffset;

   //      // function setTouch() {
   //      //   touchDevice = true;
   //      // }

   //      // function isTouch() {
   //      //   return touchDevice;
   //      // }

   //      // function enableScrollLock() {
   //      //   scrollPosition = window.pageYOffset;
   //      //   document.body.style.top = '-' + scrollPosition + 'px';
   //      //   document.body.classList.add(classes.preventScrolling);
   //      // }

   //      // function disableScrollLock() {
   //      //   document.body.classList.remove(classes.preventScrolling);
   //      //   document.body.style.removeProperty('top');
   //      //   window.scrollTo(0, scrollPosition);
   //      // }
  
   //      // function lockMobileScrolling(namespace, element) {
   //      //   var el = element ? element : $document;
   //      //   $html.addClass('lock-scroll');
   //      //   $document.on('touchmove.' + namespace, function(e) {
   //      //     e.preventDefault();
   //      //     return true;
   //      //   });
   //      // }
   //      // // BEEThemeSP.Helpers.lockMobileScrolling(namespace);
      
   //      // function unlockMobileScrolling(namespace, element) {
   //      //   $html.removeClass('lock-scroll');
   //      //   var el = element ? element : $document;
   //      //   $document.off('touchmove.' + namespace);
   //      // }
   //      // function lockMobileScrolling(namespace, element) {
   //      //   var el = element ? element : document.documentElement;
   //      //   document.documentElement.classList.add('lock-scroll');
   //      //   el.on('touchmove' + namespace, function() {
   //      //     return true;
   //      //   });
   //      // }
      
   //      // function unlockMobileScrolling(namespace, element) {
   //      //   document.documentElement.classList.remove('lock-scroll');
   //      //   var el = element ? element : document.documentElement;
   //      //   el.off('touchmove' + namespace);
   //      // }
        
   //      // https://gist.github.com/thuijssoon/fd238517b487a45ce78d8f7ddfa7fee9
   //      function disableBodyScroll() {

   //          /**
   //           * Private variables
   //           */
   //          var _selector = false,
   //              _element = false,
   //              _clientY;

   //          /**
   //           * Polyfills for Element.matches and Element.closest
   //           */
   //          if (!Element.prototype.matches)
   //              Element.prototype.matches = Element.prototype.msMatchesSelector ||
   //              Element.prototype.webkitMatchesSelector;

   //          if (!Element.prototype.closest)
   //              Element.prototype.closest = function (s) {
   //                  var ancestor = this;
   //                  if (!document.documentElement.contains(el)) return null;
   //                  do {
   //                      if (ancestor.matches(s)) return ancestor;
   //                      ancestor = ancestor.parentElement;
   //                  } while (ancestor !== null);
   //                  return el;
   //              };

   //          /**
   //           * Prevent default unless within _selector
   //           * 
   //           * @param  event object event
   //           * @return void
   //           */
   //          var preventBodyScroll = function (event) {
   //              if (false === _element || !event.target.closest(_selector)) {
   //                  event.preventDefault();
   //              }
   //          };

   //          /**
   //           * Cache the clientY co-ordinates for
   //           * comparison
   //           * 
   //           * @param  event object event
   //           * @return void
   //           */
   //          var captureClientY = function (event) {
   //              // only respond to a single touch
   //              if (event.targetTouches.length === 1) { 
   //                  _clientY = event.targetTouches[0].clientY;
   //              }
   //          };

   //          /**
   //           * Detect whether the element is at the top
   //           * or the bottom of their scroll and prevent
   //           * the user from scrolling beyond
   //           * 
   //           * @param  event object event
   //           * @return void
   //           */
   //          var preventOverscroll = function (event) {
   //              // only respond to a single touch
   //              if (event.targetTouches.length !== 1) {
   //                  return;
   //              }

   //              var clientY = event.targetTouches[0].clientY - _clientY;

   //              // The element at the top of its scroll,
   //              // and the user scrolls down
   //              if (_element.scrollTop === 0 && clientY > 0) {
   //                  event.preventDefault();
   //              }

   //              // The element at the bottom of its scroll,
   //              // and the user scrolls up
   //              // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
   //              if ((_element.scrollHeight - _element.scrollTop <= _element.clientHeight) && clientY < 0) {
   //                  event.preventDefault();
   //              }

   //          };

   //          /**
   //           * Disable body scroll. Scrolling with the selector is
   //           * allowed if a selector is porvided.
   //           * 
   //           * @param  boolean allow
   //           * @param  string selector Selector to element to change scroll permission
   //           * @return void
   //           */
   //          return function (allow, selector) {
   //              if (typeof selector !== "undefined") {
   //                  _selector = selector;
   //                  _element = document.querySelector(selector);
   //              }

   //              if (true === allow) {
   //                  if (false !== _element) {
   //                      _element.addEventListener('touchstart', captureClientY, false);
   //                      _element.addEventListener('touchmove', preventOverscroll, false);
   //                  }
   //                  document.body.addEventListener("touchmove", preventBodyScroll, false);
   //              } else {
   //                  if (false !== _element) {
   //                      _element.removeEventListener('touchstart', captureClientY, false);
   //                      _element.removeEventListener('touchmove', preventOverscroll, false);
   //                  }
   //                  document.body.removeEventListener("touchmove", preventBodyScroll, false);
   //              }
   //          };
   //      }

   //      function debounce(func, wait, immediate) {
   //        var timeout;

   //        return function() {
   //          var context = this,
   //            args = arguments;

   //          var later = function() {
   //            timeout = null;
   //            if (!immediate) func.apply(context, args);
   //          };

   //          var callNow = immediate && !timeout;
   //          clearTimeout(timeout);
   //          timeout = setTimeout(later, wait);
   //          if (callNow) func.apply(context, args);
   //        };
   //      }

   //      function getScript(source, beforeEl) {
   //        return new Promise(function(resolve, reject) {
   //          var script = document.createElement('script');
   //          var prior = beforeEl || document.getElementsByTagName('script')[0];

   //          script.async = true;
   //          script.defer = true;

   //          // eslint-disable-next-line shopify/prefer-early-return
   //          function onloadHander(_, isAbort) {
   //            if (
   //              isAbort ||
   //              !script.readyState ||
   //              /loaded|complete/.test(script.readyState)
   //            ) {
   //              script.onload = null;
   //              script.onreadystatechange = null;
   //              script = undefined;

   //              if (isAbort) {
   //                reject();
   //              } else {
   //                resolve();
   //              }
   //            }
   //          }

   //          script.onload = onloadHander;
   //          script.onreadystatechange = onloadHander;

   //          script.src = source;
   //          prior.parentNode.insertBefore(script, prior);
   //        });
   //      }

   //       function loadScript(url, callback) {
   //        if (url == undefined) return;
   //        $.ajax({
   //            url: url,
   //            dataType: 'script',
   //            success: callback,
   //            async: true
   //        });
   //       }

   //    /* Based on the prepareTransition by Jonathan Snook */
   //    /* Jonathan Snook - MIT License - https://github.com/snookca/prepareTransition */
   //    function prepareTransition(element) {
   //     element.addEventListener(
   //       'transitionend',
   //       function(event) {
   //         event.currentTarget.classList.remove('is-transitioning');
   //       },
   //       { once: true }
   //     );

   //     var properties = [
   //       'transition-duration',
   //       '-moz-transition-duration',
   //       '-webkit-transition-duration',
   //       '-o-transition-duration'
   //     ];

   //     var duration = 0;

   //     properties.forEach(function(property) {
   //       var computedValue = getComputedStyle(element)[property];

   //       if (computedValue) {
   //         computedValue.replace(/\D/g, '');
   //         duration || (duration = parseFloat(computedValue));
   //       }
   //     });

   //     if (duration !== 0) {
   //       element.classList.add('is-transitioning');
   //       element.offsetWidth;
   //     }
   //    }

   //    /*!
   //    * Serialize all form data into a SearchParams string
   //    * (c) 2020 Chris Ferdinandi, MIT License, https://gomakethings.com
   //    * @param  {Node}   form The form to serialize
   //    * @return {String}      The serialized form data
   //    */
   //      function serialize(form) {
   //        var arr = [];
   //        Array.prototype.slice.call(form.elements).forEach(function(field) {
   //          if (
   //            !field.name ||
   //            field.disabled ||
   //            ['file', 'reset', 'submit', 'button'].indexOf(field.type) > -1
   //          )
   //            return;
   //          if (field.type === 'select-multiple') {
   //            Array.prototype.slice.call(field.options).forEach(function(option) {
   //              if (!option.selected) return;
   //              arr.push(
   //                encodeURIComponent(field.name) +
   //                  '=' +
   //                  encodeURIComponent(option.value)
   //              );
   //            });
   //            return;
   //          }
   //          if (['checkbox', 'radio'].indexOf(field.type) > -1 && !field.checked)
   //            return;
   //          arr.push(
   //            encodeURIComponent(field.name) + '=' + encodeURIComponent(field.value)
   //          );
   //        });
   //        return arr.join('&');
   //      }
   //      function cookiesEnabled() {
   //        var cookieEnabled = navigator.cookieEnabled;

   //        if (!cookieEnabled) {
   //          document.cookie = 'testcookie';
   //          cookieEnabled = document.cookie.indexOf('testcookie') !== -1;
   //        }

   //        return cookieEnabled;
   //      }

   //      function promiseStylesheet(stylesheet) {
   //        var stylesheetUrl = stylesheet;
   //        //var stylesheetUrl = stylesheet || theme.stylesheet;

   //        if (typeof this.stylesheetPromise === 'undefined') {
   //          this.stylesheetPromise = new Promise(function(resolve) {
   //            var link = document.querySelector('link[href="' + stylesheetUrl + '"]');

   //            if (link.loaded) resolve();

   //            link.addEventListener('load', function() {
   //              setTimeout(resolve, 0);
   //            });
   //          });
   //        }

   //        return this.stylesheetPromise;
   //      }

   //      return {
   //        // setTouch: setTouch,
   //        // isTouch: isTouch,
   //        // enableScrollLock: enableScrollLock,
   //        // disableScrollLock: disableScrollLock,
   //        // lockMobileScrolling: lockMobileScrolling,
   //        // unlockMobileScrolling: unlockMobileScrolling,
   //        disableBodyScroll: disableBodyScroll,
   //        debounce: debounce,
   //        getScript: getScript,
   //        loadScript: loadScript,
   //        prepareTransition: prepareTransition,
   //        serialize: serialize,
   //        cookiesEnabled: cookiesEnabled,
   //        promiseStylesheet: promiseStylesheet
   //      };
   //      // Use BEEThemeSP.Helpers.setTouch() BEEThemeSP.Helpers.enableScrollLock()
   // })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * BEEThemeSP slate
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */

    //BEEThemeSP.slate = 
    BEEThemeSP.slate = {};
    var slate        = BEEThemeSP.slate;
   /**
    * Slate utilities
    * -----------------------------------------------------------------------------
    * A collection of useful utilities to help build your theme
    *
    *
    * @namespace utils
    */

   slate.utils = {
        /**
         * Get the query params in a Url
         * Ex
         * https://mysite.com/search?q=noodles&b
         * getParameterByName('q') = "noodles"
         * getParameterByName('b') = "" (empty value)
         * getParameterByName('test') = null (absent)
         */
        getParameterByName: function(name, url) {
          if (!url) url = window.location.href;
          name = name.replace(/[[\]]/g, '\\$&');
          var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
          if (!results) return null;
          if (!results[2]) return '';
          return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },

        removeParameterByName: function(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[[\]]/g, '\\$&');
            
            var rtn = url.split("?")[0],
                param,
                params_arr = [],
                queryString = (url.indexOf("?") !== -1) ? url.split("?")[1] : "";
            if (queryString !== "") {
                params_arr = queryString.split("&");
                for (var i = params_arr.length - 1; i >= 0; i -= 1) {
                    param = params_arr[i].split("=")[0];
                    if (param === name) {
                        params_arr.splice(i, 1);
                    }
                }
                if (params_arr.length) rtn = rtn + "?" + params_arr.join("&");
            }
            return rtn;
        },

        resizeSelects: function($selects) {
          $selects.each(function() {
            var $this = $(this);
            var arrowWidth = 10;
            // create test element
            var text = $this.find('option:selected').text();
            var $test = $('<span>').html(text);

            // add to body, get width, and get out
            $test.appendTo('body');
            var width = $test.width();
            $test.remove();

            // set select width
            $this.width(width + arrowWidth);
          });
        },

       //  goToID: function() {
         // var announcementBar = document.querySelector('.bee-announcement-bar');

         // $body.on('click', '[href^="#"], [data-href]', function (event, target) {
         //    target = this;
         //   var selector = target.hasAttribute('href') ? target.getAttribute('href') : target.getAttribute('data-href');

         //   if (selector === '#') {
         //     return;
         //   }

         //   var element = document.querySelector(selector),
         //       offset = parseInt(target.getAttribute('data-offset') || 0);

         //   if (announcementBar) {
         //     offset -= announcementBar.clientHeight;
         //   }

         //   if (target.hasAttribute('data-focus-on-click')) {
         //     var prevScrollY = window.pageYOffset;
         //     element.focus({ preventScroll: true });

         //     // hack to fix scroll jump after focus
         //     if (window.pageYOffset !== prevScrollY) {
         //       window.scrollTo(window.pageXOffset, prevScrollY);
         //     }

         //     element.focus();
         //   }

         //   window.scrollTo({ behavior: 'smooth', top: element.offsetTop - offset });

         //   event.preventDefault();
         // });
       //  },

        keyboardKeys: {
          TAB: 9,
          ENTER: 13,
          ESCAPE: 27,
          LEFTARROW: 37,
          RIGHTARROW: 39
        }
   };

   /**
    * iFrames
    * -----------------------------------------------------------------------------
    * Wrap videos in div to force responsive layout.
    *
    * @namespace iframes
    */

   slate.rte = {
        /**
         * Wrap tables in a container div to make them scrollable when needed
         *
         * @param {object} options - Options to be used
         * @param {jquery} options.$tables - jquery object(s) of the table(s) to wrap
         * @param {string} options.tableWrapperClass - table wrapper class name
         */
        wrapTable: function(options) {
          options.$tables.wrap(
            '<div class="' + options.tableWrapperClass + '"></div>'
          );
        },

        /**
         * Wrap iframes in a container div to make them responsive
         *
         * @param {object} options - Options to be used
         * @param {jquery} options.$iframes - jquery object(s) of the iframe(s) to wrap
         * @param {string} options.iframeWrapperClass - class name used on the wrapping div
         */
        wrapIframe: function(options) {
          options.$iframes.each(function() {
            // Add wrapper to make video responsive
            $(this).wrap('<div class="' + options.iframeWrapperClass + '"></div>');

            // Re-set the src attribute on each iframe after page load
            // for Chrome's "incorrect iFrame content on 'back'" bug.
            // https://code.google.com/p/chromium/issues/detail?id=395791
            // Need to specifically target video and admin bar
            this.src = this.src;
          });
        }
   };
   /**
    * A11y Helpers
    * -----------------------------------------------------------------------------
    * A collection of useful functions that help make your theme more accessible
    * to users with visual impairments.
    *
    *
    * @namespace a11y
    */

   slate.a11y = {
        /**
         * For use when focus shifts to a container rather than a link
         * eg for In-page links, after scroll, focus shifts to content area so that
         * next `tab` is where user expects if focusing a link, just $link.focus();
         *
         * @param {JQuery} $element - The element to be acted upon
         */
        pageLinkFocus: function($element) {
          var focusClass = 'js-focus-hidden';

          $element
            .first()
            .attr('tabIndex', '-1')
            .focus()
            .addClass(focusClass)
            .one('blur', callback);

          function callback() {
            $element
              .first()
              .removeClass(focusClass)
              .removeAttr('tabindex');
          }
        },

        /**
         * If there's a hash in the url, focus the appropriate element
         */
        focusHash: function() {
          var hash = window.location.hash;

          // is there a hash in the url? is it an element on the page?
          if (hash && document.getElementById(hash.slice(1))) {
            this.pageLinkFocus($(hash));
          }
        },

        /**
         * When an in-page (url w/hash) link is clicked, focus the appropriate element
         */
        bindInPageLinks: function() {
          $('a[href*=#]').on(
            'click',
            function(evt) {
              this.pageLinkFocus($(evt.currentTarget.hash));
            }.bind(this)
          );
        },

        /**
         * Traps the focus in a particular container
         *
         * @param {object} options - Options to be used
         * @param {jQuery} options.$container - Container to trap focus within
         * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
         * @param {string} options.namespace - Namespace used for new focus event handler
         */
        trapFocus: function(options) {
          var eventsName = {
            focusin: options.namespace ? 'focusin.' + options.namespace : 'focusin',
            focusout: options.namespace
              ? 'focusout.' + options.namespace
              : 'focusout',
            keydown: options.namespace
              ? 'keydown.' + options.namespace
              : 'keydown.handleFocus'
          };

          /**
           * Get every possible visible focusable element
           */
          var $focusableElements = options.$container.find(
            $(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex^="-"])'
            ).filter(':visible')
          );
          var firstFocusable = $focusableElements[0];
          var lastFocusable = $focusableElements[$focusableElements.length - 1];

          if (!options.$elementToFocus) {
            options.$elementToFocus = options.$container;
          }

          function _manageFocus(evt) {
            if (evt.keyCode !== slate.utils.keyboardKeys.TAB) return;

            /**
             * On the last focusable element and tab forward,
             * focus the first element.
             */
            if (evt.target === lastFocusable && !evt.shiftKey) {
              evt.preventDefault();
              firstFocusable.focus();
            }
            /**
             * On the first focusable element and tab backward,
             * focus the last element.
             */
            if (evt.target === firstFocusable && evt.shiftKey) {
              evt.preventDefault();
              lastFocusable.focus();
            }
          }

          options.$container.attr('tabindex', '-1');
          options.$elementToFocus.focus();

          $(document).off('focusin');

          $(document).on(eventsName.focusout, function() {
            $(document).off(eventsName.keydown);
          });

          $(document).on(eventsName.focusin, function(evt) {
            if (evt.target !== lastFocusable && evt.target !== firstFocusable) return;

            $(document).on(eventsName.keydown, function(evt) {
              _manageFocus(evt);
            });
          });
        },

        /**
         * Removes the trap of focus in a particular container
         *
         * @param {object} options - Options to be used
         * @param {jQuery} options.$container - Container to trap focus within
         * @param {string} options.namespace - Namespace used for new focus event handler
         */
        removeTrapFocus: function(options) {
          var eventName = options.namespace
            ? 'focusin.' + options.namespace
            : 'focusin';

          if (options.$container && options.$container.length) {
            options.$container.removeAttr('tabindex');
          }

          $(document).off(eventName);
        },

        /**
         * Add aria-describedby attribute to external and new window links
         *
         * @param {object} options - Options to be used
         * @param {object} options.messages - Custom messages to be used
         * @param {jQuery} options.$links - Specific links to be targeted
         */
        accessibleLinks: function(options) {
          var body = document.querySelector('body');

          var idSelectors = {
            newWindow: 'a11y-new-window-message',
            external: 'a11y-external-message',
            newWindowExternal: 'a11y-new-window-external-message'
          };

          if (options.$links === undefined || !options.$links.jquery) {
            options.$links = $('a[href]:not([aria-describedby])');
          }

          function generateHTML(customMessages) {
            if (typeof customMessages !== 'object') {
              customMessages = {};
            }

            var messages = $.extend(
              {
                newWindow: 'Opens in a new window.',
                external: 'Opens external website.',
                newWindowExternal: 'Opens external website in a new window.'
              },
              customMessages
            );

            var container = document.createElement('ul');
            var htmlMessages = '';

            for (var message in messages) {
              htmlMessages +=
                '<li id=' + idSelectors[message] + '>' + messages[message] + '</li>';
            }

            container.setAttribute('hidden', true);
            container.innerHTML = htmlMessages;

            body.appendChild(container);
          }

          function _externalSite($link) {
            var hostname = window.location.hostname;

            return $link[0].hostname !== hostname;
          }

          $.each(options.$links, function() {
            var $link = $(this);
            var target = $link.attr('target');
            var rel = $link.attr('rel');
            var isExternal = _externalSite($link);
            var isTargetBlank = target === '_blank';

            if (isExternal) {
              $link.attr('aria-describedby', idSelectors.external);
            }
            if (isTargetBlank) {
              if (rel === undefined || rel.indexOf('noopener') === -1) {
                $link.attr('rel', function(i, val) {
                  var relValue = val === undefined ? '' : val + ' ';
                  return relValue + 'noopener';
                });
              }
              $link.attr('aria-describedby', idSelectors.newWindow);
            }
            if (isExternal && isTargetBlank) {
              $link.attr('aria-describedby', idSelectors.newWindowExternal);
            }
          });

          generateHTML(options.messages);
        }
   };



   // slate.a11y.accessibleLinks({
   //   messages: {
   //     newWindow: theme.strings.newWindow,
   //     external: theme.strings.external,
   //     newWindowExternal: theme.strings.newWindowExternal
   //   },
   //   $links: $('a[href]:not([aria-describedby], .product-single__thumbnail)')
   // });

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * Link Mylti Lang
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */
   BEEThemeSP.LinkMyltiLang = (function () {

      var root_url = BEEThemeSP.root_url,
      hostname     = window.location.hostname,
      root_url2    = BEEroutes.root_url,
      classCk      = 'is--checked-link',
      newLink      = hostname+root_url2;

      function addRootUrl() {

         if ( root_url == '/' ) return;

         $(`a[href*="${hostname}"]:not(.${classCk}):not([href*="@"])`).each(function() {
            let $this = $(this),
                _href = $this.attr('href');

            $this.addClass(classCk);

            if ( _href.indexOf(hostname+root_url) >= 0 && _href != '/' ||  _href.indexOf('preview_theme_id=') > -1 ) return;

            (_href != '/') ?
               $this.attr( 'href',_href.replace(hostname,newLink) )
            :
               $this.attr( 'href',root_url2 );
         });

      }

      return addRootUrl;

    })();

   /**
    *-------------------------------------------------------------------------------------------------------------------------------------------
    * end BEEThemeSP slate, use BEEThemeSP.slate
    *-------------------------------------------------------------------------------------------------------------------------------------------
    */

   /**
    * Image Helper Functions
    * -----------------------------------------------------------------------------
    * A collection of functions that help with basic image operations.
    *
    */

   /**
    * Slider Functions
    * -----------------------------------------------------------------------------
    * https://codepen.io/sarus/pen/xxWZmdz
    */
   
   var sliderComponent = (function () {

      var active = 'is--active';

      function constructor(_this44) {

         var self = this;

         self.$slider       = $(_this44);
         self.slideWrap     = self.$slider.closest('[data-slide-wrap]')[0] || _this44;
         
         if (!self.slideWrap) return
         self.sliderOptions = JSON.parse(self.$slider.attr('data-options') || '{}');
         self.slider        = _this44;
         self.sliderItems   = _this44.querySelectorAll('.bee-slider__slide');

         self.pageCount  = self.slideWrap.querySelector('.bee-slider-counter--current');
         self.pageTotal  = self.slideWrap.querySelector('.bee-slider-counter--total');
         self.prevButton = self.slideWrap.querySelector('.bee-slider__slide-prev');
         self.nextButton = self.slideWrap.querySelector('.bee-slider__slide-next');
        
         if (!self.slider || !self.nextButton) return;

         const resizeObserver = new ResizeObserver(entries=>self._initPages());
         resizeObserver.observe(self.slider);

         self.slider.addEventListener('scroll', self._update.bind(self));
         self.prevButton.addEventListener('click', self._onButtonClick.bind(self));
         self.nextButton.addEventListener('click', self._onButtonClick.bind(self));
      }

      constructor.prototype = Object.assign({}, constructor.prototype, {

         _initPages: function() {
           
           this.slider.classList.remove(active);
           if (!this.sliderItems.length === 0) {
            return;
           }

           this.slider.classList.add(active);

           this.slidesPerPage = Math.floor(this.slider.clientWidth / this.sliderItems[0].clientWidth);
           this.totalPages = this.sliderItems.length - this.slidesPerPage + 1;
           this._update();
         },

         _update: function() {

           if (!this.pageCount || !this.pageTotal) return;

           this.currentPage = Math.round(this.slider.scrollLeft / this.sliderItems[0].clientWidth) + 1;

           if (this.currentPage === 1) {
               this.prevButton.setAttribute('disabled', true);
           } else {
               this.prevButton.removeAttribute('disabled');
           }

           if (this.currentPage === this.totalPages) {
               this.nextButton.setAttribute('disabled', true);
           } else {
               this.nextButton.removeAttribute('disabled');
           }

           this.pageCount.textContent = this.currentPage;
           this.pageTotal.textContent = this.totalPages;
         },

         _onButtonClick: function(event) {
           event.preventDefault();
           const slideScrollPosition = event.currentTarget.name === 'next' ? this.slider.scrollLeft + this.sliderItems[0].clientWidth : this.slider.scrollLeft - this.sliderItems[0].clientWidth;
           this.slider.scrollTo({
               left: slideScrollPosition
           });
         }

      });

      return constructor;

   })();

   BEEThemeSP.SliderComponentInt = (function () {

     
      var $slider = $('.bee-slider:not(.bee-enabled)');

      if ($slider.length == 0 ) return;
        
      $slider.each(function( index ) {
        this.classList.add('bee-enabled');
        this.sliderComponent = new sliderComponent(this);
      });
   })();
   
   /**
    * LibraryLoader
    * -----------------------------------------------------------------------------
    *
    */
   BEEThemeSP.LibraryLoader = (function () {

      // plyr/v2.0/shopify-plyr.css
      // shopify-plyr/v1.0/shopify-plyr.css
      var types = {
        link: 'link',
        script: 'script'
      };

      var status = {
        requested: 'requested',
        loaded: 'loaded'
      };

      var cloudCdn = 'https://cdn.shopify.com/shopifycloud/';

      var libraries = {
        youtubeSdk: {
          tagId: 'youtube-sdk',
          src: 'https://www.youtube.com/iframe_api',
          type: types.script
        },
        vimeoSdk: {
          tagId: 'vimeo-sdk',
          src: 'https://player.vimeo.com/api/player.js',
          type: types.script
        },
        plyrShopifyStyles: {
          tagId: 'plyr-shopify-styles',
          src: cloudCdn + 'plyr/v2.0/shopify-plyr.css',
          type: types.link
        },
        modelViewerUiStyles: {
          tagId: 'shopify-model-viewer-ui-styles',
          src: cloudCdn + 'model-viewer-ui/assets/v1.0/model-viewer-ui.css',
          type: types.link
        }
      };

      function load(libraryName, callback) {
        var library = libraries[libraryName];

        if (!library) return;
        
        // console.log(libraryName)
        // console.log(callback)
        if ( IsDesignMode && libraryName == 'youtubeSdk' && window.YT) {
          callback();
          $document.trigger('youtube:ready');
          return;
        }

        if (library.status === status.requested) return;

        callback = callback || function() {};

        if (library.status === status.loaded) {
          callback();
          return;
        }

        library.status = status.requested;

        var tag;

        switch (library.type) {
          case types.script:
            tag = createScriptTag(library, callback);
            break;
          case types.link:
            tag = createLinkTag(library, callback);
            break;
        }

        tag.id = library.tagId;
        library.element = tag;

        var firstScriptTag = document.getElementsByTagName(library.type)[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }

      function createScriptTag(library, callback) {
        var tag = document.createElement('script');
        tag.src = library.src;
        tag.addEventListener('load', function() {
          library.status = status.loaded;
          callback();
        });
        return tag;
      }

      function createLinkTag(library, callback) {
        var tag = document.createElement('link');
        tag.href = library.src;
        tag.rel = 'stylesheet';
        tag.type = 'text/css';
        tag.addEventListener('load', function() {
          library.status = status.loaded;
          callback();
        });
        return tag;
      }

      return {
        load: load
      };
   })();
   //BEEThemeSP.LibraryLoader.load('plyrShopifyStyles');

   /**
    * Background Video Section
    * -----------------------------------------------------------------------------
    * https://developers.google.com/youtube/iframe_api_reference#Events
    * https://developer.vimeo.com/player/sdk/reference
    *
    */
   var backgroundVideo = (function () {

      var str_class_vid = 'bee-bgvideo-playing',
          type          = {
            html5      : 'html5',
            youtube    : 'youtube',
            vimeo      : 'vimeo'
         },
         loadingYoutubeSdk = false,
         loadingVimeoSdk = false;

      function bgVideo(_this44) { 
         
         var self = this;

         self.$video           = $(_this44);
         self.video_options    = JSON.parse(self.$video.attr('data-options') || '{}');
         self.video_type       = self.video_options.type;
         self.video_mute       = self.video_options.mute;
         self.$videoInsert     = self.$video.find('[data-bgvideo-insert]');
         self.$elementToInsert = self.$videoInsert.length ? self.$videoInsert : self.$video;
         self.elementToInsert  = self.$elementToInsert[0];

         self.$video.attr('loaded', true);
         //console.log(self.$video )
         // Load youtube Sdk, vimeo sdk
         switch (self.video_type) {
           case type.html5:
             self._setupBgHtml5Video();
             break;
           case type.youtube:
             if (!window.YT) {
               
               self._triggerBgYouTubeVideo();
               if (!loadingYoutubeSdk) {
                  BEEThemeSP.LibraryLoader.load('youtubeSdk');
                  loadingYoutubeSdk = true;
               }
             } else {
               self._setupBgYouTubeVideo();
             }
             break;
           case type.vimeo:
             //console.log('vimeo')
             if (!window.Vimeo) {
               
               self._triggerBgVimeoVideo();
               if (!loadingVimeoSdk) {
                  BEEThemeSP.LibraryLoader.load('vimeoSdk', self._loadedVimeoSDK.bind(self));
                  loadingVimeoSdk = true;
               }
               //BEEThemeSP.LibraryLoader.load('vimeoSdk', self.setupBgVimeoVideo.bind(self));
             } else {
               self._setupBgVimeoVideo();
             }
             break;
         }
      }

      bgVideo.prototype = Object.assign({}, bgVideo.prototype, {

         _triggerBgYouTubeVideo: function() {
           var self = this;
           $document.on('youtube:ready', function(e) {
               self._setupBgYouTubeVideo();
            });
         },

         _loadedVimeoSDK: function() {
          $document.trigger('vimeo:ready');
         },

         _triggerBgVimeoVideo: function() {
           var self = this;
           $document.on('vimeo:ready', function(e) {
               self._setupBgVimeoVideo();
            });
         },
         
         _setupBgHtml5Video: function() {

            //console.log('setupBgHtml5Video');
            var self = this,
                tmpVideoID = self.video_options.id;

            let markupVideo = ( tmpVideoID && $(tmpVideoID)[0] ) ? $(tmpVideoID).html() : '<video class="bee_bg_vid_html5" src="'+self.video_options.srcDefault+'" preload="auto" playsinline autoplay '+(self.video_mute ? 'muted ':' ')+'loop></video>';

            // Append video
            self.$elementToInsert.replaceWith(markupVideo);
            let VideoHTML5 = self.$video.find('.bee_bg_vid_html5');
            // VideoHTML5[0].play();

            // Playing event
            VideoHTML5.on("playing", function(evt) {
               self.$video.addClass(str_class_vid);
               //console.log('video VideoHTML5 playing')
            });
         },

         _setupBgYouTubeVideo: function() {
            //console.log('setupBgYouTubeVideo');
            if (!window.YT) return;

            var self = this;
            self.player = new YT.Player(self.elementToInsert, {
               videoId: self.video_options.vid,
               playerVars: {
                  // showinfo: 0,
                  // controls: 0,
                  // fs: 0,
                  // rel: 0,
                  // height: '100%',
                  // width: '100%',
                  // iv_load_policy: 3,
                  // html5: 1,
                  // loop: 1,
                  // playsinline: 1,
                  // modestbranding: 1,
                  // disablekb: 1,
                  // origin: self.video_options.requestHost
                  iv_load_policy: 3,
                  enablejsapi: 1,
                  disablekb: 1,
                  autoplay: 0,
                  controls: 0,
                  rel: 0,
                  loop: 0,
                  playsinline: 1,
                  modestbranding: 1,
                  autohide:1,
                  branding: 0,
                  cc_load_policy: 0,
                  fs: 0,
                  quality: 'hd1080',  //hd1080, hd720
                  wmode: "transparent",
                  height: '100%',
                  width: '100%',
                  origin: self.video_options.requestHost
               },
               events: {
                  onReady: self.onPlayerReady.bind(this),
                  onStateChange: self.onPlayerStateChange.bind(this)
               }
            });

            self.resizeVideoBackground();
            $window.on("resize", BEEThemeSP.debounce(300, function() {
              self.resizeVideoBackground()
            }.bind(self)));
            
         },

         onPlayerReady: function(event) {
           // evt.target.setPlaybackQuality('hd1080');
           // evt.target.setPlaybackQuality('hd1080').playVideo().mute();
           //if ( _this.hasClass('unmute_false') ) {evt.target.mute();}
           // console.log(this)
            if (this.video_mute) this.player.mute();
            this.player.playVideo();
         },

         onPlayerStateChange: function(event) {

           if (event.data === YT.PlayerState.PLAYING) {
            //this.classList.add(str_class_vid);
            this.$video.addClass(str_class_vid);
             //console.log('video Youtube play')
           } else if (event.data === YT.PlayerState.ENDED) {
             this.player.playVideo();
             //console.log('video Youtube ended')
           }

         },

         _setupBgVimeoVideo: function() {
            //console.log('setupYouTubeVideos');
            if (!window.Vimeo) return;

            var self = this;
            self.player = new Vimeo.Player(self.elementToInsert.parentNode, {
                id: self.video_options.vid,
                autoplay: true,
                autopause: false,
                muted: true,
                background: true,
                /*height: '100%',
                width: '100%',*/
                loop: self.video_mute
            });
            self.$videoInsert.remove();
            self.resizeVideoBackground();
            $window.on("resize", BEEThemeSP.debounce(300, function() {
              self.resizeVideoBackground()
            }.bind(self)));

            self.player.on('play', function () {
              //console.log('video Vimeo play')
              self.$video.addClass(str_class_vid);
            });

            self.player.on('ended', function () {
              //console.log('video Vimeo ended')
            });
         },

         resizeVideoBackground: function() {
           var $element = this.$video,
           iframeW      , 
           iframeH      , 
           marginLeft   , 
           marginTop    , 
           containerW   = $element.innerWidth(), 
           containerH   = $element.innerHeight();

           containerW / containerH < 16 / 9 ? 
           (
              iframeW = containerH * (16 / 9),
              iframeH = containerH,
              marginLeft = -Math.round((iframeW - containerW) / 2) + "px",
              marginTop = -Math.round((iframeH - containerH) / 2) + "px"
           ) : (
              iframeH = (iframeW = containerW) * (9 / 16),
              marginTop = -Math.round((iframeH - containerH) / 2) + "px",
              marginLeft = -Math.round((iframeW - containerW) / 2) + "px"
           )

           iframeW += "px";
           iframeH += "px";

           $element.find("iframe").css({
               maxWidth: "1000%",
               marginLeft: marginLeft,
               marginTop: marginTop,
               width: iframeW,
               height: iframeH
           })
       }

      });

      return bgVideo;

   })();

   BEEThemeSP.BgVideo = function () {

      var $bgVideo = $('[data-video-background]:not([loaded="true"])');

      if ($bgVideo.length == 0 ) return;
        
      $bgVideo.each(function( index ) {
        this.bgVideo = new backgroundVideo(this);
      });
   };

   BEEThemeSP.Footer = (function () {

      var classes = {
        opened: 'is--footer_opened',
        btnClose: '.bee-announcement-bar__close'
      },
      time = 200;

      // var $footer = $('#bee-footer'),
      // $page       = $('#MainContent'),
      // $prefooter  = $('.bee-prefooter'),
      // isSafari    = $html.hasClass('bee-browser-Safari'),
      // windowScroll,
      // footerOffsetTop;

      // if ($prefooter.length > 0) {
      //    $page = $prefooter;
      // }

      // function footerOffset() {
      //    $page.css({
      //       "--main-mb": $footer.outerHeight() +'px'
      //    });
      // }

      //Safari fix
      // function footerSafariFix() {
      //    if (!isSafari) return;

      //    windowScroll = $window.scrollTop();
      //    footerOffsetTop = $document.outerHeight() - $footer.outerHeight();

      //    if (footerOffsetTop < windowScroll + $footer.outerHeight() + $window.outerHeight()) {
      //       $footer.addClass('is--visible-footer');
      //    } else {
      //       $footer.removeClass('is--visible-footer');
      //    }
      // }

      function footerCollapseClick() {
         $('[data-footer-open]').off('click').on('click', function () {
             var $this = $(this),
             $widget   = $this.parent(),
             $content  = $widget.find('> [data-footer-content]');

             if ($widget.hasClass(classes.opened)) {
               $widget.removeClass(classes.opened);
               $content.stop().slideUp(time);
             } else {
               $widget.addClass(classes.opened);
               $content.stop().slideDown(time);
             }
         });
         $window.off('resize.FooterCollapse');
      }

      // function Sticky() {
      //    if ( $window.width() < 1025 || $('.is--footer-sticky-true').length == 0 ) return;

      //    footerOffset();
      //    $window.on('resize', footerOffset);

      //    if (!isSafari) return;
      //    footerSafariFix();
      //    $window.on('scroll', footerSafariFix);
      // }

      function Collapse() {
         $window.on('resize.FooterCollapse', footerCollapseClick); 
         if ( $window.width() < 768 && $('.is--footer-collapse-true').length > 0 ) footerCollapseClick();
      }

      function Init() {
         Collapse();
         //Sticky();
      }

      return Init;

   })();

   /**
    * Notices
    * BEEThemeSP.Notices('text'); 
    * $body.trigger('hide.bee.notices');
    * 
    */
   BEEThemeSP.Notices = (function () {
      
      var $noticesTMP = $('#bee-notices__tmp'),
      template        = $noticesTMP.html(),
      showClass       = 'is--show',
      htmlClass       = 'is--active-notices',
      clickEvent      = 'click.notices',
      triggerEvent    = 'hide.bee.notices',
      added           = false,
      $wrapper,
      $msg,
      $bar,
      $barSpan,
      timer,
      timeOutShow     = 200,
      autoHideNotices = BEEconfigs.autoHideNotices,
      timeOut         = BEEconfigs.timeOutNotices;

      $noticesTMP.remove();

      // console.log(template)

      function creatNotices(message, status = 'warning') {
          
         if (!added) {
             BEEThemeSP.$appendComponent.after(template);
             $wrapper = $('#bee-notices__wrapper');
             $msg     = $wrapper.find('.bee-notices__mess');
             $bar     = $wrapper.find('.bee-notices__progressbar');
             $barSpan = $bar.show().find('>span');
             added    = true;
             template = null;
             $barSpan.css('animation-duration',`${timeOut}ms`);
         }

         $wrapper.attr('data-notices-status',status);

         $msg.html(message);

         (autoHideNotices) ? $bar.show() : $bar.hide();
         
         setTimeout(function(){ showNotices() }, timeOutShow);
        
         if (autoHideNotices) {
            timer = setTimeout(function(){ 
               hideNotices();
            }, timeOut+timeOutShow );
         }
         
         $wrapper.on(clickEvent, function () {
           hideNotices();
         });
         
         $body.on(triggerEvent, function () {
           hideNotices();
         });
         // $body.trigger('hide.bee.notices');
      }

      function showNotices() {
          $wrapper.addClass(showClass);
          $html.addClass(htmlClass);
      }

      function hideNotices() {
          $bar.hide();
          clearTimeout(timer);
          $wrapper.removeClass(showClass);
          $html.removeClass(htmlClass);
          $wrapper.off(clickEvent).off(triggerEvent);
          // $msg.html('');
      }

      return creatNotices;

   })();

   /**
    * Form back in stock
    * Form ask a question
    * Form newsletter popup
    */
   BEEThemeSP.FormShopifyMessSuccess = function () {

      $(document).on("submit", 'form[action^="/contact"]' , function(event){
         localStorage.setItem("bee-recentform", $(this).attr("id"));
      })
      let location_href = location.href;
      let recentform = localStorage.getItem("bee-recentform") || "";      

      if (location_href.indexOf('contact_posted=true') < 0 && recentform !== "" ) return;

      if ( location_href.indexOf('contact_posted=true#ContactFormNotifyStock') > -1 || recentform.includes("ContactFormNotifyStock")) {
         // Form back in stock
          BEEThemeSP.Notices(BEEstrings.frm_notify_stock_success,'success'); 
      } else if ( location_href.indexOf('contact_posted=true#ContactFormAsk') > -1  || recentform.includes("ContactFormAsk")) {
         // ContactFormAsk
         BEEThemeSP.Notices(BEEstrings.frm_contact_ask_success,'success'); 
      } else if ( location_href.indexOf('contact_posted=true#beeNewsletterFormPopup') > -1  || recentform.includes("beeNewsletterFormPopup")) {
         // Newsletter popup
         BEEThemeSP.Notices(BEEstrings.frm_newsletter_popup_success,'success'); 
      }

   };

   BEEThemeSP.PreloadStylePopup = function () {

      var $style = $('#bee-style-popup');
      
      if ($style.length == 0) return;

      // $body.prepend( $style.html() );
      $('#bee-assets-pre').html( $style.html() );

   };
   
   // https://stackoverflow.com/questions/48646853/add-simple-slide-down-animation-to-read-more-text-reveal
   BEEThemeSP.BtnMore = (function () {

      var classes = {
         enabled: 'is--enabled',
         btn: '[data-btn-toogle]',
         open: 'is--open'
      },
      timeout = 200;

      
      function btnMore(el) {
         this.el = el;
         this.$el = $(el);
         this.clickHandler();
         this.$el.addClass(classes.enabled)
         this.selector = this.$el.data('slector');
         this.tMore = this.$el.data('tmore');
         this.tLess = this.$el.data('tless')
         this.hasIsotope = this.$el.hasClass('isotopebee');
      }

      btnMore.prototype = Object.assign({}, btnMore.prototype, {
         
         clickHandler: function() {
            
            var self = this;
            self.$el.on('click.more', classes.btn, function (e) {
               e.preventDefault();
               let $this = $(this);
               $this.parent().find( self.selector ).slideToggle(timeout);
               $this.toggleClass(classes.open);

               $this.hasClass(classes.open) ? $this.html(self.tLess) : $this.html(self.tMore);

               if (!self.hasIsotope) return;
               self.$el.isotopebee('layout');
               setTimeout(function(){ self.$el.isotopebee('layout'); }, timeout+19);

            });
         }

      });

      return btnMore;

   })();

   BEEThemeSP.initBtnMore = function() {
      var $toogle = $('[data-wrap-toogle]:not(.is--enabled)');
      if ($toogle.length == 0) return;

      $toogle.each(function() {
         this.btnMore = new BEEThemeSP.BtnMore(this);
      });
   }();

   //_IS_IOS_DEVICE
   // BEEThemeSP.isIOSDevice = function() {
   //   const isWindowsPhoneDevice = navigator.userAgent.indexOf("Windows Phone") >= 0;
   //   const isIOSDevice = /iP(ad|hone|od)/.test(navigator.userAgent) && !isWindowsPhoneDevice;

   //   return isIOSDevice;
   // };

   // FIX IOS DOUBLE TAP
   // https://stackoverflow.com/questions/33922957/disable-double-tap-to-click-on-touchscreen-ios-devices
   // https://github.com/ftlabs/fastclick
   // $script(BEEconfigs.script12c);
   // needsclick - Sometimes you need FastClick to ignore certain elements. You can do this easily by adding the needsclick class.
   BEEThemeSP.fixHand = function() {

      var isWindowsPhoneDevice = navigator.userAgent.indexOf("Windows Phone") >= 0,
      isIOSDevice = /iP(ad|hone|od)/.test(navigator.userAgent) && !isWindowsPhoneDevice;

      if ( !isIOSDevice || windowWidth > 1199 ) return;

      $script( BEEconfigs.script12c, function() {

         BEEThemeSP.FastClick.attach(document.body);
         
         if ( BEEconfigs.disFlashyApp ) return
         disableFastClickForFlashyApp();
       
         function disableFastClickForFlashyApp() {
           const targetNode = document.querySelector('body');
           const config = { attributes: true, childList: true, subtree: true };
           const observer = new MutationObserver(callback);
           observer.observe(targetNode, config);

           function callback(){
             let flashyContainer = document.querySelector("flashy-popup");

             if(flashyContainer && !flashyContainer.classList.contains("needsclick")){
               flashyContainer.classList.add("needsclick");
             }
           }
         }

      });
   };


})(jQuery_BENT);

jQuery_BENT(document).ready(function($) {
   
   smoothscroll.polyfill(); // Instantiate global plugins
   // BEEThemeSP.slate.utils.goToID();

   BEEThemeSP.FormShopifyMessSuccess();

   // Run Background Video Section
   BEEThemeSP.BgVideo();

   // Run Parallax
   BEEThemeSP.ParallaxInt();

   // Run Parallax BG
   $('.bee-parallax-bg:not(.lazyloadbeeed)').one('lazyloaded', function(e) {
       // console.log('parallax bg',e)
       setTimeout(function(){ 
         BEEThemeSP.ParallaxInt();
       }, 100);
   });
   
   // Run Countdown
   BEEThemeSP.Countdown();

   // Run Animate 
   BEEThemeSP.AnimateOnScroll();
   
   // Run ResizeObserver 
   // BEEThemeSP.UpdateResizeObserver();

   // Run fuction swatch
   //BEEThemeSP.ProductVariants.Int();
   BEEThemeSP._initProducts();

   BEEThemeSP.slate.a11y.accessibleLinks({
     $links: $('a[href]:not([aria-describedby])')
   });

   // $('.beepr_swatch_wrapper.lazyloadbeeed').on('mouseenter touchstart', function() {
   //   BEEThemeSP.InitVariantSelects($(this));
   // });

   // $(document).on('mouseenter touchstart', '.beeproduct:not(.bee-pr-watched)', function(e) {
   //     $(this).addClass('bee-pr-watched').find('.beepr_swatch_wrapper').addClass('lazyloadbee');
   // });
   

   // End run fuction swatch

   // Run tooltips
   //BEEThemeSP.InitTooltip();

   // Run Tabs
   BEEThemeSP.Tabs.Default();

   // Run Tabs Simple
   BEEThemeSP.Tabs.Simple();

   // Run Accordion
   BEEThemeSP.Tabs.Accordion();

   // Render Refresh Int
   // BEEThemeSP.RenderRefresh();
   

   // Footer sticky, collapse
   BEEThemeSP.Footer();
   
   // Run Init Popups
   // BEEThemeSP.MFPopupInline();
   // BEEThemeSP.MFPopupIframe();
   // BEEThemeSP.MFPopupVideo();
   // BEEThemeSP.MFPopupAjax();
   // BEEThemeSP.CustomPopupMFP();
   BEEThemeSP.PopupMFP();

   BEEThemeSP.Cookies();

   // init QuickView, quickshop
   // BEEThemeSP.initQuickViewShop();
   
   // load js hand
   BEEThemeSP.fixHand();
   // if ( BEEThemeSP.isTouch ) $script(BEEconfigs.script12c);

   // Load js photoswipe
   $script([BEEconfigs.script3, BEEconfigs.script6]);

    setTimeout(function(){ 
      BEEThemeSP.LinkMyltiLang();
    }, 500);
   // PreLoad style quickview, quickshop
    setTimeout(function(){ 
      BEEThemeSP.PreloadStylePopup();
    }, 1500);
   
   // Detect Touch 
   // $(document).one('touchstart.nt94', function() {
   //  BEEThemeSP.Helpers.setTouch();
   // });
   // $(document).trigger('touchstart.nt94');

});

// jQuery_BENT(window).on('resize', function() {
//  console.log('window resize')
// });
// Youtube API callback
// eslint-disable-next-line no-unused-vars
// https://developers.google.com/youtube/iframe_api_reference
function onYouTubeIframeAPIReady() {
    //document.dispatchEvent(new CustomEvent('youtube:ready'));
    document.dispatchEvent(new CustomEvent('youtube:ready'));
}

// jQuery_BENT(window).on('resize', function() {
//  if(nonFooterCollapse) BEEThemeSP.Footer.collapse();
// });


