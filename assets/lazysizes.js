// repalce lazySizes to lazySizesBE
// https://raw.githubusercontent.com/aFarkas/lazySizesBE/gh-pages/CHANGELOG.md
// https://github.com/aFarkas/lazysizes

window.lazySizesBEConfig = window.lazySizesBEConfig || {};
window.lazySizesBEConfig = {
  init: true,
  loadMode: true,
  loadHidden: false,
  hFac: 0.5,
  expFactor: 2,
  ricTimeout: 150,
  lazyClass: 'lazyloadbee',
  loadingClass: 'lazyloadbeeing',
  loadedClass: 'lazyloadbeeed',
  preloadClass: 'lazypreloadbee'
};

// https://afarkas.github.io/lazySizesBE/lazySizesBE.min.js
// https://afarkas.github.io/lazySizesBE/plugins/bgset/ls.bgset.min.js
// ls.respimg.min.js suport run lazySizesBE IE

/*! ls.respimg.min.js - v5.2.0-beta1 */
//if(!window.HTMLPictureElement || !('sizes' in document.createElement('img'))) {
//  !function(a,b){if(a){var c=function(){b(a.lazySizesBE),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazySizesBE")):a.lazySizesBE?c():a.addEventListener("lazyunveilread",c,!0)}}("undefined"!=typeof window?window:0,function(a,b,c){"use strict";var d,e=c.cfg,f=b.createElement("img"),g="sizes"in f&&"srcset"in f,h=/\s+\d+h/g,i=function(){var a=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,d=Array.prototype.forEach;return function(){var f=b.createElement("img"),g=function(b){var c,d,f=b.getAttribute(e.srcsetAttr);f&&(d=f.match(a))&&(c="w"==d[2]?d[1]/d[3]:d[3]/d[1],c&&b.setAttribute("data-aspectratio",c),b.setAttribute(e.srcsetAttr,f.replace(h,"")))},i=function(a){if(a.detail.instance==c){var b=a.target.parentNode;b&&"PICTURE"==b.nodeName&&d.call(b.getElementsByTagName("source"),g),g(a.target)}},j=function(){f.currentSrc&&b.removeEventListener("lazybeforeunveil",i)};b.addEventListener("lazybeforeunveil",i),f.onload=j,f.onerror=j,f.srcset="data:,a 1w 1h",f.complete&&j()}}();if(e.supportsType||(e.supportsType=function(a){return!a}),a.HTMLPictureElement&&g)return void(!c.hasHDescriptorFix&&b.msElementsFromPoint&&(c.hasHDescriptorFix=!0,i()));a.picturefill||e.pf||(e.pf=function(b){var c,e;if(!a.picturefill)for(c=0,e=b.elements.length;c<e;c++)d(b.elements[c])},d=function(){var f=function(a,b){return a.w-b.w},i=/^\s*\d+\.*\d*px\s*$/,j=function(a){var b,c,d=a.length,e=a[d-1],f=0;for(f;f<d;f++)if(e=a[f],e.d=e.w/a.w,e.d>=a.d){!e.cached&&(b=a[f-1])&&b.d>a.d-.13*Math.pow(a.d,2.2)&&(c=Math.pow(b.d-.6,1.6),b.cached&&(b.d+=.15*c),b.d+(e.d-a.d)*c>a.d&&(e=b));break}return e},k=function(){var a,b=/(([^,\s].[^\s]+)\s+(\d+)w)/g,c=/\s/,d=function(b,c,d,e){a.push({c:c,u:d,w:1*e})};return function(e){return a=[],e=e.trim(),e.replace(h,"").replace(b,d),a.length||!e||c.test(e)||a.push({c:e,u:e,w:99}),a}}(),l=function(){l.init||(l.init=!0,addEventListener("resize",function(){var a,c=b.getElementsByClassName("lazymatchmedia"),e=function(){var a,b;for(a=0,b=c.length;a<b;a++)d(c[a])};return function(){clearTimeout(a),a=setTimeout(e,66)}}()))},m=function(b,d){var f,g=b.getAttribute("srcset")||b.getAttribute(e.srcsetAttr);!g&&d&&(g=b._lazypolyfill?b._lazypolyfill._set:b.getAttribute(e.srcAttr)||b.getAttribute("src")),b._lazypolyfill&&b._lazypolyfill._set==g||(f=k(g||""),d&&b.parentNode&&(f.isPicture="PICTURE"==b.parentNode.nodeName.toUpperCase(),f.isPicture&&a.matchMedia&&(c.aC(b,"lazymatchmedia"),l())),f._set=g,Object.defineProperty(b,"_lazypolyfill",{value:f,writable:!0}))},n=function(b){var d=a.devicePixelRatio||1,e=c.getX&&c.getX(b);return Math.min(e||d,2.5,d)},o=function(b){return a.matchMedia?(o=function(a){return!a||(matchMedia(a)||{}).matches})(b):!b},p=function(a){var b,d,g,h,k,l,p;if(h=a,m(h,!0),k=h._lazypolyfill,k.isPicture)for(d=0,b=a.parentNode.getElementsByTagName("source"),g=b.length;d<g;d++)if(e.supportsType(b[d].getAttribute("type"),a)&&o(b[d].getAttribute("media"))){h=b[d],m(h),k=h._lazypolyfill;break}return k.length>1?(p=h.getAttribute("sizes")||"",p=i.test(p)&&parseInt(p,10)||c.gW(a,a.parentNode),k.d=n(a),!k.src||!k.w||k.w<p?(k.w=p,l=j(k.sort(f)),k.src=l):l=k.src):l=k[0],l},q=function(a){if(!g||!a.parentNode||"PICTURE"==a.parentNode.nodeName.toUpperCase()){var b=p(a);b&&b.u&&a._lazypolyfill.cur!=b.u&&(a._lazypolyfill.cur=b.u,b.cached=!0,a.setAttribute(e.srcAttr,b.u),a.setAttribute("src",b.u))}};return q.parse=k,q}(),e.loadedClass&&e.loadingClass&&function(){var a=[];['img[sizes$="px"][srcset].',"picture > img:not([srcset])."].forEach(function(b){a.push(b+e.loadedClass),a.push(b+e.loadingClass)}),e.pf({elements:b.querySelectorAll(a.join(", "))})}())});
//}
/*! ls.unveilhooks.min.js - v5.2.0-beta1 */
/*
This plugin extends lazySizesBE to lazyLoad:
background images, videos/posters and scripts

Background-Image:
For background images, use data-bg attribute:
<div class="lazyload" data-bg="bg-img.jpg"></div>

 Video:
 For video/audio use data-poster and preload="none":
 <video class="lazyload" data-poster="poster.jpg" preload="none">
 <!-- sources -->
 </video>

 Scripts:
 For scripts use data-script:
 <div class="lazyload" data-script="module-name.js"></div>


 Script modules using require:
 For modules using require use data-require:
 <div class="lazyload" data-require="module-name"></div>
*/

!function(a,b){var c=function(){b(a.lazySizesBE),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazySizesBE")):a.lazySizesBE?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(a,c){if(!g[a]){var d=b.createElement(c?"link":"script"),e=b.getElementsByTagName("script")[0];c?(d.rel="stylesheet",d.href=a):d.src=a,g[a]=!0,g[d.src||d.href]=!0,e.parentNode.insertBefore(d,e)}}var e,f,g={};b.addEventListener&&(f=/\(|\)|\s|'/,e=function(a,c){var d=b.createElement("img");d.onload=function(){d.onload=null,d.onerror=null,d=null,c()},d.onerror=d.onload,d.src=a,d&&d.complete&&d.onload&&d.onload()},addEventListener("lazybeforeunveil",function(a){if(a.detail.instance==c){var b,g,h,i;if(!a.defaultPrevented){var j=a.target;if("none"==j.preload&&(j.preload="auto"),null!=j.getAttribute("data-autoplay"))if(j.getAttribute("data-expand")&&!j.autoplay)try{j.play()}catch(a){}else requestAnimationFrame(function(){j.setAttribute("data-expand","-10"),c.aC(j,c.cfg.lazyClass)});b=j.getAttribute("data-link"),b&&d(b,!0),b=j.getAttribute("data-script"),b&&d(b),b=j.getAttribute("data-require"),b&&(c.cfg.requireJs?c.cfg.requireJs([b]):d(b)),h=j.getAttribute("data-bg"),h&&(a.detail.firesLoad=!0,g=function(){j.style.backgroundImage="url("+(f.test(h)?JSON.stringify(h):h)+")",a.detail.firesLoad=!1,c.fire(j,"_lazyloaded",{},!0,!0)},e(h,g)),i=j.getAttribute("data-poster"),i&&(a.detail.firesLoad=!0,g=function(){j.poster=i,a.detail.firesLoad=!1,c.fire(j,"_lazyloaded",{},!0,!0)},e(i,g))}}},!1))});

/*! nathan add plugin bgset data 11/12/2020 */
(function(window, factory) {
    var globalInstall = function() {
        factory(window.lazySizesBE);
        window.removeEventListener('lazyunveilread', globalInstall, true);
    };

    factory = factory.bind(null, window, window.document);

    if (typeof module == 'object' && module.exports) {
        factory(require('lazySizesBE'));
    } else if (typeof define == 'function' && define.amd) {
        define(['lazySizesBE'], factory);
    } else if (window.lazySizesBE) {
        globalInstall();
    } else {
        window.addEventListener('lazyunveilread', globalInstall, true);
    }
}(window, function(window, document, lazySizesBE) {
    /*jshint eqnull:true */
    'use strict';
    //var key_replace = '[width]';
    var key_replace = '_1x1.',
        key_width = 'width=1';

    addEventListener('lazybeforeunveil', function(e) {

       var current_target = e.target,
       set                = current_target.getAttribute('data-bgset'),
       urlParams          = new URLSearchParams(set),
       urlWidth           = urlParams.get('width'),
       nonImageUrl        = (urlWidth != '1');

      if ( e.defaultPrevented || !(set) || ( set.indexOf(key_replace) < 0 || nonImageUrl ) ) {
         return;
      }

      var ratio   = current_target.getAttribute('data-ratio') || 0,
      has_url_h   = current_target.hasAttribute("data-hash"),
      getbg       = set,
      set         ='',
      arrWidths;
        //console.log('aaa');
        //if (set.indexOf(key_replace) > -1) {

          // var widths1 = [180, 360, 540, 720, 900, 1080];

            // if (e.target.hasAttribute("data-la")) {
      if (current_target.hasAttribute("data-widths")) {
       arrWidths = JSON.parse(current_target.getAttribute('data-widths'));
      } else if (current_target.hasAttribute("data-wiis")) {
       arrWidths = [180, 360, 540, 720, 900, 1080];
      } else {
       arrWidths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1950, 2100, 2260, 2450, 2700, 3000, 3350, 3750, 4100];
      }
      var icl,
          lcl = arrWidths.length,
          arr_urlbg  = nonImageUrl ? getbg.split('_1x1.') : getbg.split(key_width),
          arr_urlbg0 = nonImageUrl ? `${arr_urlbg[0]}x.` : `${arr_urlbg[0]}width=`,
          arr_urlbg1 = arr_urlbg[1],
          str_img_url;

      if (has_url_h && ratio > 0) {
      
        for (icl = 0; icl < lcl; icl++) {
          //set += getbg.replace(key_replace, value+'x') +' '+ value + "w, ";
          set += arr_urlbg0 + '_'+arrWidths[icl]+ arr_urlbg1 +' '+ arrWidths[icl] + 'w '+Math.round(arrWidths[icl] * ratio)+'h, ';
          //set += getbg.replace(key_replace, '_'+arrWidths[icl]+'x.') +' '+ arrWidths[icl] + 'w, ';
        }
      } else {

        for (icl = 0; icl < lcl; icl++) {
          //set += getbg.replace(key_replace, value+'x') +' '+ value + "w, ";
          //set += getbg.replace(key_replace, '_'+arrWidths[icl]+'x.') +' '+ arrWidths[icl] + 'w '+Math.round(arrWidths[icl] * current_target.getAttribute('data-ratio'))+'h, ';
          set += arr_urlbg0 + '_'+arrWidths[icl]+ arr_urlbg1 +' '+ arrWidths[icl] + 'w, ';
        }

      }
      //console.log(set.replace(/\  /g,''))
      set = set.slice(0, -2);
      current_target.setAttribute('data-bgset', set);
          //}
        
    }, true);

}));
/*! end nathan add plugin bgset */

/*! ls.bgset.min.js - v5.2.0-beta1 */
(function(window, factory) {
  var globalInstall = function(){
    factory(window.lazySizesBE);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if(typeof module == 'object' && module.exports){
    factory(require('lazySizesBE'));
  } else if(window.lazySizesBE) {
    globalInstall();
  } else {
    window.addEventListener('lazyunveilread', globalInstall, true);
  }
}(window, function(window, document, lazySizesBE) {
  'use strict';
  if(!window.addEventListener){return;}

  var lazySizesBECfg = lazySizesBE.cfg;
  var regWhite = /\s+/g;
  var regSplitSet = /\s*\|\s+|\s+\|\s*/g;
  var regSource = /^(.+?)(?:\s+\[\s*(.+?)\s*\])(?:\s+\[\s*(.+?)\s*\])?$/;
  var regType = /^\s*\(*\s*type\s*:\s*(.+?)\s*\)*\s*$/;
  var regBgUrlEscape = /\(|\)|'/;
  var allowedBackgroundSize = {contain: 1, cover: 1};
  var proxyWidth = function(elem){
    var width = lazySizesBE.gW(elem, elem.parentNode);

    if(!elem._lazySizesBEWidth || width > elem._lazySizesBEWidth){
      elem._lazySizesBEWidth = width;
    }
    return elem._lazySizesBEWidth;
  };
  var getBgSize = function(elem){
    var bgSize;

    bgSize = (getComputedStyle(elem) || {getPropertyValue: function(){}}).getPropertyValue('background-size');

    if(!allowedBackgroundSize[bgSize] && allowedBackgroundSize[elem.style.backgroundSize]){
      bgSize = elem.style.backgroundSize;
    }

    return bgSize;
  };
  var setTypeOrMedia = function(source, match){
    if(match){
      var typeMatch = match.match(regType);
      if(typeMatch && typeMatch[1]){
        source.setAttribute('type', typeMatch[1]);
      } else {
        source.setAttribute('media', lazySizesBECfg.customMedia[match] || match);
      }
    }
  };
  var createPicture = function(sets, elem, img){
    //console.log('createPicture');
    var picture = document.createElement('picture');
    var sizes = elem.getAttribute(lazySizesBECfg.sizesAttr);
    var ratio = elem.getAttribute('data-ratio');
    var optimumx = elem.getAttribute('data-optimumx');
    var sizesScale = elem.getAttribute('data-sizes-scale');

    if(elem._lazybgset && elem._lazybgset.parentNode == elem){
      elem.removeChild(elem._lazybgset);
    }

    Object.defineProperty(img, '_lazybgset', {
      value: elem,
      writable: true
    });
    Object.defineProperty(elem, '_lazybgset', {
      value: picture,
      writable: true
    });

    sets = sets.replace(regWhite, ' ').split(regSplitSet);

    picture.style.display = 'none';
    img.className = lazySizesBECfg.lazyClass;

    if(sets.length == 1 && !sizes){
      sizes = 'auto';
    }

    sets.forEach(function(set){
      var match;
      var source = document.createElement('source');
            
      if(sizes && sizes != 'auto'){
        source.setAttribute('sizes', sizes);
      }

      if((match = set.match(regSource))){
        source.setAttribute(lazySizesBECfg.srcsetAttr, match[1]);

        setTypeOrMedia(source, match[2]);
        setTypeOrMedia(source, match[3]);
      } else {
        source.setAttribute(lazySizesBECfg.srcsetAttr, set);
      }

      picture.appendChild(source);
    });

    if(sizes){
      img.setAttribute(lazySizesBECfg.sizesAttr, sizes);
      elem.removeAttribute(lazySizesBECfg.sizesAttr);
      elem.removeAttribute('sizes');
    }
    if(optimumx){
      img.setAttribute('data-optimumx', optimumx);
    }
    if(ratio) {
      img.setAttribute('data-ratio', ratio);
    }
    if(sizesScale) {
      img.setAttribute('data-sizes-scale', sizesScale);
    }

    picture.appendChild(img);

    elem.appendChild(picture);
  };

  var proxyLoad = function(e){
    if(!e.target._lazybgset){return;}

    var image = e.target;
    var elem = image._lazybgset;
    var bg = image.currentSrc || image.src;


    if(bg){
      var event = lazySizesBE.fire(elem, 'bgsetproxy', {
        src: bg,
        useSrc: regBgUrlEscape.test(bg) ? JSON.stringify(bg) : bg,
      });

      if(!event.defaultPrevented){
        elem.style.backgroundImage = 'url(' + event.detail.useSrc + ')';
      }
    }

    if(image._lazybgsetLoading){
      lazySizesBE.fire(elem, '_lazyloaded', {}, false, true);
      delete image._lazybgsetLoading;
    }
  };

  addEventListener('lazybeforeunveil', function(e){
    var set, image, elem;

    if(e.defaultPrevented || !(set = e.target.getAttribute('data-bgset'))){return;}

    elem = e.target;
    image = document.createElement('img');

    image.alt = '';

    image._lazybgsetLoading = true;
    e.detail.firesLoad = true;
        
        // start nathan the4 optimization
        // console.log(set);
   //      if (set.indexOf('_1x1.') > 0) {
    //       var getbg = set;set=''
    //       var widths1 = [180, 360, 540, 720, 900, 1080];

   //          // if (e.target.hasAttribute("data-la")) {
    //       if (e.target.hasAttribute("data-widths")) {
    //        var arrWidths = JSON.parse(e.target.getAttribute('data-widths'));
    //       } else if (e.target.hasAttribute("data-wiis")) {
    //        var arrWidths = [180, 360, 540, 720, 900, 1080];
    //       } else {
    //        var arrWidths = [180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 1950, 2100, 2260, 2450, 2700, 3000, 3350, 3750, 4100];
    //       }
      // var icl,lcl = arrWidths.length;
      // for (icl = 0; icl < lcl; icl++) {
      //   //set += getbg.replace("1x1", value+'x') +' '+ value + "w, ";
      //   //set += getbg.replace("_1x1.", '_'+arrWidths[icl]+'x.') +' '+ arrWidths[icl] + 'w '+Math.round(arrWidths[icl] * e.target.getAttribute('data-ratio'))+'h, ';
      //   set += getbg.replace("_1x1.", '_'+arrWidths[icl]+'x.') +' '+ arrWidths[icl] + 'w, ';
      // }
      // //console.log(set.replace(/\  /g,''))
      // set = set.slice(0, -2);
    //       //e.target.setAttribute('data-bgset', set);
   //      }
    //    console.log(set);
        
       // end nathan the4 optimization

    createPicture(set, elem, image);

    setTimeout(function(){
      lazySizesBE.loader.unveil(image);

      lazySizesBE.rAF(function(){
        lazySizesBE.fire(image, '_lazyloaded', {}, true, true);
        if(image.complete) {
          proxyLoad({target: image});
        }
      });
    });

  });

  document.addEventListener('load', proxyLoad, true);

  window.addEventListener('lazybeforesizes', function(e){
    if(e.detail.instance != lazySizesBE){return;}

    if(e.target._lazybgset && e.detail.dataAttr){
      var elem = e.target._lazybgset;
      //console.log(elem.dataset.parentFit);
      // nathan fix
      var bgSize = elem.dataset.parentFit || getBgSize(elem);
      //console.log(bgSize)
      //var bgSize = getBgSize(elem);

      if(allowedBackgroundSize[bgSize]){
        e.target._lazySizesBEParentFit = bgSize;

        lazySizesBE.rAF(function(){
          e.target.setAttribute('data-parent-fit', bgSize);
          if(e.target._lazySizesBEParentFit){
            delete e.target._lazySizesBEParentFit;
          }
        });
      }
    }
  }, true);

  document.documentElement.addEventListener('lazybeforesizes', function(e){
    if(e.defaultPrevented || !e.target._lazybgset || e.detail.instance != lazySizesBE){return;}
    e.detail.width = proxyWidth(e.target._lazybgset);
  });
}));

/*! ls.include.min.js - v5.2.0-beta1 */
/*
 This plugin extends lazySizesBE to lazyLoad and/or conditionally load content
 */
 // Nathan custom Changed data-include, data-currentinclude to data-renderbee, data-currentrenderbee

(function(window, factory) {
  var globalInstall = function(){
    factory(window.lazySizesBE);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if(typeof module == 'object' && module.exports){
    factory(require('lazySizesBE'));
  } else if (typeof define == 'function' && define.amd) {
    define(['lazySizesBE'], factory);
  } else if(window.lazySizesBE) {
    globalInstall();
  } else {
    window.addEventListener('lazyunveilread', globalInstall, true);
  }
}(window, function(window, document, lazySizesBE) {
  /*jshint eqnull:true */
  'use strict';

  if(!document.getElementsByClassName) {
    return;
  }
  var config, includeConfig, baseContentElement, basePseudos;
  var regSplitCan = /\s*,+\s+/;
  var cssComplete = {complete: 1, loaded: 1};
  var uniqueUrls = {};
  var regWhite = /\s+/;
  var regTypes = /^(amd|css|module)\:(.+)/i;
  var regUrlCan = /(.+)\s+(\(\s*(.+)\s*\))/;
  var regCleanPseudos = /['"]/g;
  var docElem = document.documentElement;
  var conditionalIncludes = document.getElementsByClassName('lazyconditionalinclude');

  var getStyles = function (element, pseudo) {
    var view = element.ownerDocument.defaultView;

    if (!view.opener) {
      view = window;
    }

    return view.getComputedStyle(element, pseudo || null) || {getPropertyValue: function(){}, isNull: true};
  };

  var queue = (function(){
    var lowTreshold = 2;
    var highTreshold = 3;
    var queueThreshold = lowTreshold;
    var inProgress = 0;
    var priosInProgress = 0;
    var queue = [];
    var resetQueue = (function(){
      var timer;
      var reset = function(){
          // nathan_fix_queue
              //console.log(queue)
              //console.log(queue.length)
// fix code 1:
        // if(queue.length < 1){
        //    inProgress = 0;
        //    //queue.d();
    //             } else {
    //                inProgress = 0;
    //                queue.d();
    //             }
// fix code 2:
        if(queue.length){
          inProgress = 0;
          //queue.d();
        }
// default code
//        if(queue.length){
//          inProgress = 0;
//          queue.d();
//        }
      };

      return function(){
        clearTimeout(timer);
        timer = setTimeout(reset, 999);
      };
    })();

    return {
      q: function(element){
        var isPrio = element.getAttribute('data-lazyqueue') == null;
        if(isPrio){
          priosInProgress++;
          queueThreshold = highTreshold;
        }

        if(inProgress > queueThreshold){
          queue[isPrio ? 'unshift' : 'push'](element);
        } else if(findLoadCandidate(element)) {
          inProgress++;
          resetQueue();
        }
      },
      d: function(){
        if(inProgress){
          inProgress--;
        }
        if(priosInProgress > 0){
          priosInProgress--;

          if(!priosInProgress){
            queueThreshold = lowTreshold;
          }
        }

        if(inProgress > queueThreshold){
          return;
        }

        while(queue.length){
          if(findLoadCandidate(queue.shift())){
            inProgress++;
            break;
          }
        }
        resetQueue();
      }
    };
  })();
  var refreshIncludes = (function(){
    var timer;
    var run = function(){
      var i = 0;
      var len = conditionalIncludes.length;
      for(; i < len; i++){
        if(!lazySizesBE.hC(conditionalIncludes[i], config.lazyClass) && findCandidate(conditionalIncludes[i])){
          lazySizesBE.aC(conditionalIncludes[i], config.lazyClass);
        }
      }
    };
    return function(e){
      clearTimeout(timer);
      basePseudos = null;
      timer = setTimeout(run, e.type == 'resize' ? 31 : 0);
    };
  })();

  config = lazySizesBE && lazySizesBE.cfg;

  if(!config.include){
    config.include = {};
  }

  includeConfig = config.include;

  if(!includeConfig.contentElement){
    includeConfig.contentElement = 'html';
  }

  if(!includeConfig.conditions){
    includeConfig.conditions = {};
  }

  if(!includeConfig.map){
    includeConfig.map = {};
  }

  function addUrl(url){
    /*jshint validthis:true */
    var match;
    if((match = url.match(regTypes))){
      this.urls[match[1]] = includeConfig.map[match[2]] || match[2];
    } else {
      this.urls.include = includeConfig.map[url] || url;
    }
  }

  function parseCandidate(input){
    var output, map, url;
    input = input.trim();

    input = includeConfig.map[input] || input;

    map = input.match(regUrlCan);

    if(map){
      url = map[1];
      output = {
        condition: config.include.conditions[map[3]] || config.customMedia[map[3]] || map[2] || null,
        name: map[3]
      };
    } else {
      url = input;
      output = {
        condition: null,
        name: ''
      };
    }

    output.urls = {};

    (includeConfig.map[url] || url).split(regWhite).forEach(addUrl, output);

    if(!output.urls.include && output.urls.amd){
      /*jshint validthis:true */
      this.saved = true;
      output.initial = this;
    }

    return output;
  }
  // var rootUrl = BEEroutes.root_url;
  // rootUrl = (rootUrl != '/') ? rootUrl : '';
  var rootUrl = Shopify.routes.root;
  
  function getIncludeData(elem){
    var len;
    var Sebeeurl = (elem.getAttribute('data-sebeeurl') || '');

    if (elem.hasAttribute('data-qs-inl')) {
      var includeStr = rootUrl+'products/'+(elem.getAttribute('data-renderbee') || '')+'/?section_id=qs_inline';
    } else {
      var includeStr = (elem.getAttribute('data-renderbee') || '')+Sebeeurl;
    }
    //console.log('includeStr',includeStr)
    var includeData = elem.lazyInclude;
    var initialContent;
    if(!includeData || includeData.str != includeStr || includeConfig.allowReload){
      initialContent = {saved: false, content: null};
      includeData = {
        str: includeStr,
        candidates: (includeConfig.map[includeStr] || includeStr).split(regSplitCan).map(parseCandidate, initialContent)
      };

      if(!(len = includeData.candidates.length) || includeData.candidates[len - 1].condition){
        initialContent.saved = true;

        includeData.candidates.push({
          urls: {},
          condition: null,
          name: 'initial',
          content: initialContent
        });
      } else if(initialContent.saved && includeData.candidates.length == 1){
        initialContent.saved = false;
      }

      includeData.initialContent = initialContent;
      if(initialContent.saved){
        initialContent.content = elem.innerHTML;
      }

      elem.lazyInclude = includeData;
      if(includeData.candidates.length > 1){
        lazySizesBE.aC(elem, 'lazyconditionalinclude');
      } else {
        lazySizesBE.rC(elem, 'lazyconditionalinclude');
      }
    }
    return includeData;
  }

  function matchesCondition(elem, candidate){
    var matches = !candidate.condition;

    if(candidate.condition){
      createPseudoCondition();
      if(basePseudos[candidate.name]){
        matches = true;
      } else if(window.matchMedia && typeof candidate.condition == 'string'){
        matches = (matchMedia(candidate.condition) || {}).matches;
      } else if(typeof candidate.condition == 'function'){
        matches = candidate.condition(elem, candidate);
      }
    }
    return matches;
  }


  function createPseudoCondition(){
    var cStyle;

    if(!basePseudos){

      if(!baseContentElement){
        baseContentElement = document.querySelector(includeConfig.contentElement);
      }

      if(baseContentElement){
        cStyle = (getStyles(baseContentElement, ':after').getPropertyValue('content') || 'none').replace(regCleanPseudos, '');

        basePseudos = {};

        if(cStyle){
          basePseudos[cStyle] = 1;
        }
        cStyle = (getStyles(baseContentElement, ':before').getPropertyValue('content') || 'none').replace(regCleanPseudos, '');
        if(cStyle){
          basePseudos[cStyle] = 1;
        }
      } else {
        basePseudos = {};
      }
    }

  }

  function findCandidate(elem){
    var i, candidate;
    var includeData = elem.lazyInclude;
    if(includeData && includeData.candidates){
      for(i = 0; i < includeData.candidates.length; i++){
        candidate = includeData.candidates[i];
        if(matchesCondition(elem, candidate)){
          break;
        }
      }
    }
    if(!candidate || candidate == includeData.current){
      candidate = null;
    }
    return candidate;
  }
  function loadInclude(detail, includeCallback){
    //var request = new XMLHttpRequest();
    // Fix error XMLHttpRequest Override
    var request = new beeXMLHttpRequest();

    request.addEventListener('readystatechange', function () {
      var DONE = this.DONE || 4;
      if (this.readyState === DONE){

        includeCallback(request);
        request = null;
      }
    }, false);

    request.open.apply(request, detail.openArgs);
    request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    if(detail.xhrModifier){
      detail.xhrModifier(request, detail.candidate);
    }
    //console.log('close load inlcude ntbee'.)
    request.send(detail.sendData);
  }

  function loadRequire(urls, callback){
    urls = urls.split('|,|');

    var last = urls.length - 1;

    if(lazySizesBE.cfg.requireJs){
      lazySizesBE.cfg.requireJs(urls, callback);
    } else {
      urls.forEach(function(url, index){
        loadStyleScript(url, index == last ? callback : null);
      });
    }
  }

  function loadSystemJs(url, callback){
    if(lazySizesBE.cfg.systemJs){
      lazySizesBE.cfg.systemJs(url, callback);
    } else {
      loadStyleScript(url, callback);
    }
  }

  function isStyleReady(link){
    var ready = false;
    var sheets = document.styleSheets;
    var href = link.href;

    for(var i = 0, length = sheets.length; i < length; i++){
      if(sheets[i].href == href){
        ready = true;
        break;
      }
    }


    return ready;
  }

  function loadStyleScript(url, isScript, cb){
    if(!uniqueUrls[url]){
      var elem = document.createElement(isScript === true ? 'script' : 'link');
      var insertElem = document.getElementsByTagName('script')[0];

      if(isScript){
        elem.src = url;
        elem.async = false;
      } else {
        elem.rel = 'stylesheet';
        elem.href = url;
      }

      uniqueUrls[url] = [];
      uniqueUrls[elem.href] = uniqueUrls[url];

      if(cb){
        var timer;
        var load = function(e){
          if(e.type == 'readystatechange' && !cssComplete[e.target.readyState]){return;}

          var cbs = uniqueUrls[url];

          elem.removeEventListener('load', load);
          elem.removeEventListener('error', load);
          elem.removeEventListener('readystatechange', load);
          elem.removeEventListener('loadcssdefined', load);

          if(timer){
            clearInterval(timer);
          }

          uniqueUrls[url] = true;
          uniqueUrls[elem.href] = true;

          while(cbs.length){
            cbs.shift()();
          }
        };

        uniqueUrls[elem.href][0] = cb;

        if(!isScript){
          timer = setInterval(function(){
            if(isStyleReady(elem)){
              load({});
            }
          }, 60);
        }

        elem.addEventListener('load', load);
        elem.addEventListener('error', load);
        elem.addEventListener('readystatechange', load);
        elem.addEventListener('loadcssdefined', load);

      }

      insertElem.parentNode.insertBefore(elem, insertElem);
    } else if(cb){
      if(uniqueUrls[url] === true){
        setTimeout(cb);
      } else {
        uniqueUrls[url].push(cb);
      }
    }
  }

  function loadStyles(urls, cb){
    urls = urls.split('|,|');

    var last = urls.length - 1;

    urls.forEach(function(url, index){
      loadStyleScript(url, false, index == last ? cb : null);
    });
  }

  function transformInclude(module){
    if(module && typeof module.lazytransform == 'function'){
      /*jshint validthis:true */
      module.lazytransform(this);
    }
  }

  function unloadModule(module){
    if(module && typeof module.lazyunload == 'function'){
      /*jshint validthis:true */
      module.lazyunload(this);
    }
  }

  function loadModule(module){
    if(module && typeof module.lazyload == 'function'){
      /*jshint validthis:true */
      module.lazyload(this);
    }
  }

  function loadCandidate(elem, candidate){
    var include, xhrObj, modules, waitCss, runInclude;
    var old = elem.lazyInclude.current || null;
    var detail = {
      candidate: candidate,
      openArgs: ['GET', candidate.urls.include, true],
      sendData: null,
      xhrModifier: null,
      content: candidate.content && candidate.content.content || candidate.content,
      oldCandidate: old
    };
    var event = lazySizesBE.fire(elem, 'lazyincludeload', detail);

    if(event.defaultPrevented){
      queue.d();
      return;
    }

    runInclude = function(){
      if(xhrObj && modules && !waitCss){
        include();
      }
    };

    include = function(){
      var event;
      var status = xhrObj.status;
      var content = xhrObj.content || xhrObj.responseText;
      var reset = !!(content == null && old && old.urls.include);
      var detail = {
        candidate: candidate,
        content: content,
        text: xhrObj.responseText || xhrObj.content,
        response: xhrObj.response,
        xml: xhrObj.responseXML,
        isSuccess: ('status' in xhrObj) ? status >= 200 && status < 300 || status === 304 : true,
        oldCandidate: old,
        insert: true,
        resetHTML: reset
      };
      var moduleObj = {target: elem, details: detail, detail: detail};

      candidate.modules = modules;

      if(old && old.modules){
        old.modules.forEach(unloadModule, moduleObj);
        old.modules = null;

        if(detail.resetHTML && detail.content == null && candidate.initial && candidate.initial.saved){
          detail.content = candidate.initial.content;
        }
      }


      modules.forEach(transformInclude, moduleObj);

      event = lazySizesBE.fire(elem, 'lazyincludeloaded', detail);

      if(detail.insert && detail.isSuccess && !event.defaultPrevented && detail.content != null && detail.content != elem.innerHTML){
        elem.innerHTML = detail.content;
      }

      queue.d();

      modules.forEach(loadModule, moduleObj);

      setTimeout(function(){
        lazySizesBE.fire(elem, 'lazyincluded', detail);
      });

      xhrObj = null;
      modules = null;
    };

    elem.lazyInclude.current = candidate;
    elem.setAttribute('data-currentrenderbee', candidate.name);

    if(candidate.urls.css){
      waitCss = true;
      loadStyles(candidate.urls.css, function () {
        waitCss = false;
        runInclude();
      });
    }
    if(detail.content == null && candidate.urls.include){
      loadInclude(detail, function(data){
        xhrObj = data;
        runInclude();
      });
    } else {
      xhrObj = detail;
    }

    if(candidate.urls.amd || candidate.urls.module){
      var loadRequireImportCB = function(){
        modules = Array.prototype.slice.call(arguments);
        runInclude();
      };

      if(candidate.urls.amd){
        loadRequire(candidate.urls.amd, loadRequireImportCB);
      } else {
        loadSystemJs(candidate.urls.module, loadRequireImportCB);
      }

    } else {
      modules = [];
    }

    runInclude();
  }

  function findLoadCandidate(elem){
    var candidate;
    var includeData = getIncludeData(elem);
    if(!includeData.candidates.length || !docElem.contains(elem) ){return;}
    candidate = findCandidate(elem);
    if(candidate){
      loadCandidate(elem, candidate);
    }
    return true;
  }

  function beforeUnveil(e){
    if(e.detail.instance != lazySizesBE || e.defaultPrevented || !e.target.getAttribute('data-renderbee')){return;}
    queue.q(e.target);
    e.detail.firesLoad = true;
  }

  addEventListener('lazybeforeunveil', beforeUnveil, false);

  addEventListener('resize', refreshIncludes, false);
  addEventListener('lazyrefreshincludes', refreshIncludes, false);

}));

/*! ls.attrchange.min.js - 5.3.2 */
!function(e,t){var n;e&&(n=function(){t(e.lazySizesBE),e.removeEventListener("lazyunveilread",n,!0)},t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazySizesBE")):"function"==typeof define&&define.amd?define(["lazySizesBE"],t):e.lazySizesBE?n():e.addEventListener("lazyunveilread",n,!0))}("undefined"!=typeof window?window:0,function(f,v,y){"use strict";var b=function(){function e(e){for(var t,n,a=0,i=e.length;a<i;a++)(n=(t=e[a]).target).getAttribute(t.attributeName)&&("source"==n.localName&&n.parentNode&&(n=n.parentNode.querySelector("img")),n&&l.test(n.className)&&function(e){y.rAF(function(){y.rC(e,o.loadedClass),o.unloadedClass&&y.rC(e,o.unloadedClass),y.aC(e,o.lazyClass),("none"==e.style.display||e.parentNode&&"none"==e.parentNode.style.display)&&setTimeout(function(){y.loader.unveil(e)},0)})}(n))}var t,n,a,i,s,r,o=y.cfg,d={"data-bgset":1,"data-include":1,"data-poster":1,"data-bg":1,"data-script":1},l="(\\s|^)("+o.loadedClass,u=v.documentElement;function c(){e(r),s=!(r=[])}o.unloadedClass&&(l+="|"+o.unloadedClass),l+="|"+o.loadingClass+")(\\s|$)",l=new RegExp(l),d[o.srcAttr]=1,d[o.srcsetAttr]=1,n=f.MutationObserver?(a=new MutationObserver(e),t=function(){i||(i=!0,a.observe(u,{subtree:!0,attributes:!0,attributeFilter:Object.keys(d)}))},function(){i&&(i=!1,a.disconnect())}):(u.addEventListener("DOMAttrModified",(r=[],function(e){i&&d[e.attrName]&&e.newValue&&(r.push({target:e.target,attributeName:e.attrName}),s||(setTimeout(c),s=!0))}),!0),t=function(){i=!0},function(){i=!1}),addEventListener("lazybeforeunveil",n,!0),addEventListener("lazybeforeunveil",t),addEventListener("lazybeforesizes",n,!0),addEventListener("lazybeforesizes",t),t(),removeEventListener("lazybeforeunveil",b)};addEventListener("lazybeforeunveil",b)});

/*! ls.parent-fit.min.js - v5.3.2 */
!function(t,e){var i;t&&(i=function(){e(t.lazySizesBE),t.removeEventListener("lazyunveilread",i,!0)},e=e.bind(null,t,t.document),"object"==typeof module&&module.exports?e(require("lazySizesBE")):"function"==typeof define&&define.amd?define(["lazySizesBE"],e):t.lazySizesBE?i():t.addEventListener("lazyunveilread",i,!0))}("undefined"!=typeof window?window:0,function(u,t,i){"use strict";var l,s,d,f,g,o;u.addEventListener&&(l=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,s=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,d=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,f=/^picture$/i,g=i.cfg,o={getParent:function(t,e){var i=t,a=t.parentNode;return e&&"prev"!=e||!a||!f.test(a.nodeName||"")||(a=a.parentNode),"self"!=e&&(i="prev"==e?t.previousElementSibling:e&&(a.closest||u.jQuery)&&(a.closest?a.closest(e):jQuery(a).closest(e)[0])||a),i},getFit:function(t){var e,i,a=getComputedStyle(t,null)||{},n=a.content||a.fontFamily,r={fit:t._lazySizesBEParentFit||t.getAttribute("data-parent-fit")};return!r.fit&&n&&(e=n.match(s))&&(r.fit=e[1]),r.fit?(!(i=t._lazySizesBEParentContainer||t.getAttribute("data-parent-container"))&&n&&(e=n.match(d))&&(i=e[1]),r.parent=o.getParent(t,i)):r.fit=a.objectFit,r},getImageRatio:function(t){for(var e,i,a,n,r,s,d=t.parentNode,o=d&&f.test(d.nodeName||"")?d.querySelectorAll("source, img"):[t],c=0;c<o.length;c++)if(e=(t=o[c]).getAttribute(g.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",i=t._lsMedia||t.getAttribute("media"),i=g.customMedia[t.getAttribute("data-media")||i]||i,e&&(!i||(u.matchMedia&&matchMedia(i)||{}).matches)){(a=parseFloat(t.getAttribute("data-aspectratio")))||(s=(n=e.match(l))?"w"==n[2]?(r=n[1],n[3]):(r=n[3],n[1]):(r=t.getAttribute("width"),t.getAttribute("height")),a=r/s);break}return a},calculateSize:function(t,e){var i,a,n,r=this.getFit(t),s=r.fit,d=r.parent;return"width"==s||("contain"==s||"cover"==s)&&(a=this.getImageRatio(t))?(d?e=d.clientWidth:d=t,n=e,"width"==s?n=e:(i=e/d.clientHeight)&&("cover"==s&&i<a||"contain"==s&&a<i)&&(n=e*(a/i)),n):e}},i.parentFit=o,t.addEventListener("lazybeforesizes",function(t){var e;t.defaultPrevented||t.detail.instance!=i||(e=t.target,t.detail.width=o.calculateSize(e,t.detail.width))}))});

/*! ls.rias.min.js - v5.3.2 - nathan custom */
(function(window, factory) {
  var globalInstall = function(){
    factory(window.lazySizesBE);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if(typeof module == 'object' && module.exports){
    factory(require('lazySizesBE'));
  } else if (typeof define == 'function' && define.amd) {
    define(['lazySizesBE'], factory);
  } else if(window.lazySizesBE) {
    globalInstall();
  } else {
    window.addEventListener('lazyunveilread', globalInstall, true);
  }
}(window, function(window, document, lazySizesBE) {
  /*jshint eqnull:true */
  'use strict';

  var config, riasCfg;
  var lazySizesBECfg = lazySizesBE.cfg;
  var replaceTypes = {string: 1, number: 1};
  var regNumber = /^\-*\+*\d+\.*\d*$/;
  var regPicture = /^picture$/i;
  var regWidth = /\s*\{\s*width\s*\}\s*/i;
  var regHeight = /\s*\{\s*height\s*\}\s*/i;
  var regPlaceholder = /\s*\{\s*([a-z0-9]+)\s*\}\s*/ig;
  var regObj = /^\[.*\]|\{.*\}$/;
  var regAllowedSizes = /^(?:auto|\d+(px)?)$/;
  var anchor = document.createElement('a');
  var img = document.createElement('img');
  var buggySizes = ('srcset' in img) && !('sizes' in img);
  var supportPicture = !!window.HTMLPictureElement && !buggySizes;

  (function(){
    var prop;
    var noop = function(){};
    var riasDefaults = {
      prefix: '',
      postfix: '',
      srcAttr: 'data-src',
      absUrl: false,
      modifyOptions: noop,
      widthmap: {},
      ratio: false,
      traditionalRatio: false,
      aspectratio: false,
    };

    config = lazySizesBE && lazySizesBE.cfg;

    if(!config.supportsType){
      config.supportsType = function(type/*, elem*/){
        return !type;
      };
    }

    if(!config.rias){
      config.rias = {};
    }
    riasCfg = config.rias;

    if(!('widths' in riasCfg)){
      riasCfg.widths = [];
      (function (widths){
        var width;
        var i = 0;
        while(!width || width < 3000){
          i += 5;
          if(i > 30){
            i += 1;
          }
          width = (36 * i);
          widths.push(width);
        }
      })(riasCfg.widths);
    }

    for(prop in riasDefaults){
      if(!(prop in riasCfg)){
        riasCfg[prop] = riasDefaults[prop];
      }
    }
  })();

  function getElementOptions(elem, src, options){
    var attr, parent, setOption, prop, opts;
    var elemStyles = window.getComputedStyle(elem);

    if (!options) {
      parent = elem.parentNode;

      options = {
        isPicture: !!(parent && regPicture.test(parent.nodeName || ''))
      };
    } else {
      opts = {};

      for (prop in options) {
        opts[prop] = options[prop];
      }

      options = opts;
    }

    setOption = function(attr, run){
      var attrVal = elem.getAttribute('data-'+ attr);

      if (!attrVal) {
        // no data- attr, get value from the CSS
        var styles = elemStyles.getPropertyValue('--ls-' + attr);
        // at least Safari 9 returns null rather than
        // an empty string for getPropertyValue causing
        // .trim() to fail
        if (styles) {
          attrVal = styles.trim();
        }
      }

      if (attrVal) {
        if(attrVal == 'true'){
          attrVal = true;
        } else if(attrVal == 'false'){
          attrVal = false;
        } else if(regNumber.test(attrVal)){
          attrVal = parseFloat(attrVal);
        } else if(typeof riasCfg[attr] == 'function'){
          attrVal = riasCfg[attr](elem, attrVal);
        } else if(regObj.test(attrVal)){
          try {
            attrVal = JSON.parse(attrVal);
          } catch(e){}
        }
        options[attr] = attrVal;
      } else if((attr in riasCfg) && typeof riasCfg[attr] != 'function' && !options[attr]){
        options[attr] = riasCfg[attr];
      } else if(run && typeof riasCfg[attr] == 'function'){
        options[attr] = riasCfg[attr](elem, attrVal);
      }
    };

    for(attr in riasCfg){
      setOption(attr);
    }
    src.replace(regPlaceholder, function(full, match){
      if(!(match in options)){
        setOption(match, true);
      }
    });

    return options;
  }

  function replaceUrlProps(url, options){
    var candidates = [];
    var replaceFn = function(full, match){
      return (replaceTypes[typeof options[match]]) ? options[match] : full;
    };
    candidates.srcset = [];

    if(options.absUrl){
      anchor.setAttribute('href', url);
      url = anchor.href;
    }

    url = ((options.prefix || '') + url + (options.postfix || '')).replace(regPlaceholder, replaceFn);

    options.widths.forEach(function(width){
      var widthAlias = options.widthmap[width] || width;
      var ratio = options.aspectratio || options.ratio;
      var traditionalRatio = !options.aspectratio && riasCfg.traditionalRatio;
      var candidate = {
        u: url.replace(regWidth, widthAlias)
            .replace(regHeight, ratio ?
              traditionalRatio ?
                Math.round(width * ratio) :
                Math.round(width / ratio)
              : ''),
        w: width
      };

      candidates.push(candidate);
      candidates.srcset.push( (candidate.c = candidate.u + ' ' + width + 'w') );
    });
    return candidates;
  }

  function setSrc(src, opts, elem){
    var elemW = 0;
    var elemH = 0;
    var sizeElement = elem;

    if(!src){return;}

    if (opts.ratio === 'container') {
      // calculate image or parent ratio
      elemW = sizeElement.scrollWidth;
      elemH = sizeElement.scrollHeight;

      while ((!elemW || !elemH) && sizeElement !== document) {
        sizeElement = sizeElement.parentNode;
        elemW = sizeElement.scrollWidth;
        elemH = sizeElement.scrollHeight;
      }
      if (elemW && elemH) {
        opts.ratio = opts.traditionalRatio ? elemH / elemW : elemW / elemH;
      }
    }

    src = replaceUrlProps(src, opts);

    src.isPicture = opts.isPicture;

    if(buggySizes && elem.nodeName.toUpperCase() == 'IMG'){
      elem.removeAttribute(config.srcsetAttr);
    } else {
      elem.setAttribute(config.srcsetAttr, src.srcset.join(', '));
    }

    Object.defineProperty(elem, '_lazyrias', {
      value: src,
      writable: true
    });
  }

  function createAttrObject(elem, src){
    var opts = getElementOptions(elem, src);

    riasCfg.modifyOptions.call(elem, {target: elem, details: opts, detail: opts});

    lazySizesBE.fire(elem, 'lazyriasmodifyoptions', opts);
    return opts;
  }

  function getSrc(elem){
    var getElemSrc = elem.getAttribute( elem.getAttribute('data-srcattr') || riasCfg.srcAttr ) || elem.getAttribute(config.srcsetAttr) || elem.getAttribute(config.srcAttr) || elem.getAttribute('data-pfsrcset') || '';
    // nathan custom
    let urlParams = new URLSearchParams(getElemSrc),
    urlWidth      = urlParams.get('width');
    if (urlWidth != '1') {
      return getElemSrc.replace('_1x1.', '_{width}x.');
    } else {
      return getElemSrc.replace('width=1', 'width={width}');
    }
    // end nathan custom
    // return getElemSrc.replace('_1x1.', '_{width}x.');
  }

  addEventListener('lazybeforesizes', function(e){
    if(e.detail.instance != lazySizesBE){return;}

    var elem, src, elemOpts, sourceOpts, parent, sources, i, len, sourceSrc, sizes, detail, hasPlaceholder, modified, emptyList;
    elem = e.target;

    if(!e.detail.dataAttr || e.defaultPrevented || riasCfg.disabled || !((sizes = elem.getAttribute(config.sizesAttr) || elem.getAttribute('sizes')) && regAllowedSizes.test(sizes))){return;}

    src = getSrc(elem);

    elemOpts = createAttrObject(elem, src);

    hasPlaceholder = regWidth.test(elemOpts.prefix) || regWidth.test(elemOpts.postfix);

    if(elemOpts.isPicture && (parent = elem.parentNode)){
      sources = parent.getElementsByTagName('source');
      for(i = 0, len = sources.length; i < len; i++){
        if ( hasPlaceholder || regWidth.test(sourceSrc = getSrc(sources[i])) ){
          sourceOpts = getElementOptions(sources[i], sourceSrc, elemOpts);
          setSrc(sourceSrc, sourceOpts, sources[i]);
          modified = true;
        }
      }
    }

    if ( hasPlaceholder || regWidth.test(src) ){
      setSrc(src, elemOpts, elem);
      modified = true;
    } else if (modified) {
      emptyList = [];
      emptyList.srcset = [];
      emptyList.isPicture = true;
      Object.defineProperty(elem, '_lazyrias', {
        value: emptyList,
        writable: true
      });
    }

    if(modified){
      if(supportPicture){
        elem.removeAttribute(config.srcAttr);
      } else if(sizes != 'auto') {
        detail = {
          width: parseInt(sizes, 10)
        };
        polyfill({
          target: elem,
          detail: detail
        });
      }
    }
  }, true);
  // partial polyfill
  var polyfill = (function(){
    var ascendingSort = function( a, b ) {
      return a.w - b.w;
    };

    var reduceCandidate = function (srces) {
      var lowerCandidate, bonusFactor;
      var len = srces.length;
      var candidate = srces[len -1];
      var i = 0;

      for(i; i < len;i++){
        candidate = srces[i];
        candidate.d = candidate.w / srces.w;
        if(candidate.d >= srces.d){
          if(!candidate.cached && (lowerCandidate = srces[i - 1]) &&
            lowerCandidate.d > srces.d - (0.13 * Math.pow(srces.d, 2.2))){

            bonusFactor = Math.pow(lowerCandidate.d - 0.6, 1.6);

            if(lowerCandidate.cached) {
              lowerCandidate.d += 0.15 * bonusFactor;
            }

            if(lowerCandidate.d + ((candidate.d - srces.d) * bonusFactor) > srces.d){
              candidate = lowerCandidate;
            }
          }
          break;
        }
      }
      return candidate;
    };

    var getWSet = function(elem, testPicture){
      var src;
      if(!elem._lazyrias && lazySizesBE.pWS && (src = lazySizesBE.pWS(elem.getAttribute(config.srcsetAttr || ''))).length){
        Object.defineProperty(elem, '_lazyrias', {
          value: src,
          writable: true
        });
        if(testPicture && elem.parentNode){
          src.isPicture = elem.parentNode.nodeName.toUpperCase() == 'PICTURE';
        }
      }
      return elem._lazyrias;
    };

    var getX = function(elem){
      var dpr = window.devicePixelRatio || 1;
      var optimum = lazySizesBE.getX && lazySizesBE.getX(elem);
      return Math.min(optimum || dpr, 2.4, dpr);
    };

    var getCandidate = function(elem, width){
      var sources, i, len, media, srces, src;

      srces = elem._lazyrias;

      if(srces.isPicture && window.matchMedia){
        for(i = 0, sources = elem.parentNode.getElementsByTagName('source'), len = sources.length; i < len; i++){
          if(getWSet(sources[i]) && !sources[i].getAttribute('type') && ( !(media = sources[i].getAttribute('media')) || ((matchMedia(media) || {}).matches))){
            srces = sources[i]._lazyrias;
            break;
          }
        }
      }

      if(!srces.w || srces.w < width){
        srces.w = width;
        srces.d = getX(elem);
        src = reduceCandidate(srces.sort(ascendingSort));
      }

      return src;
    };

    var polyfill = function(e){
      if(e.detail.instance != lazySizesBE){return;}

      var candidate;
      var elem = e.target;

      if(!buggySizes && (window.respimage || window.picturefill || lazySizesBECfg.pf)){
        document.removeEventListener('lazybeforesizes', polyfill);
        return;
      }

      if(!('_lazyrias' in elem) && (!e.detail.dataAttr || !getWSet(elem, true))){
        return;
      }

      candidate = getCandidate(elem, e.detail.width);

      if(candidate && candidate.u && elem._lazyrias.cur != candidate.u){
        elem._lazyrias.cur = candidate.u;
        candidate.cached = true;
        lazySizesBE.rAF(function(){
          elem.setAttribute(config.srcAttr, candidate.u);
          elem.setAttribute('src', candidate.u);
        });
      }
    };

    if(!supportPicture){
      addEventListener('lazybeforesizes', polyfill);
    } else {
      polyfill = function(){};
    }

    return polyfill;

  })();

}));

/*! lazySizesBE - v5.2.0-beta1 */
(function(window, factory) {
  var lazySizesBE = factory(window, window.document, Date);
  window.lazySizesBE = lazySizesBE;
  if(typeof module == 'object' && module.exports){
    module.exports = lazySizesBE;
  }
}(typeof window != 'undefined' ?
      window : {}, function l(window, document, Date) { // Pass in the windoe Date function also for SSR because the Date class can be lost
  'use strict';
  /*jshint eqnull:true */

  var lazySizesBE, lazySizesBECfg;

  (function(){
    var prop;

    var lazySizesBEDefaults = {
      lazyClass: 'lazyload',
      loadedClass: 'lazyloaded',
      loadingClass: 'lazyloading',
      preloadClass: 'lazypreload',
      errorClass: 'lazyerror',
      //strictClass: 'lazystrict',
      autosizesClass: 'lazyautosizes',
      srcAttr: 'data-src',
      srcsetAttr: 'data-srcset',
      sizesAttr: 'data-sizes',
      //preloadAfterLoad: false,
      minSize: 40,
      customMedia: {},
      init: true,
      expFactor: 1.5,
      hFac: 0.8,
      loadMode: 2,
      loadHidden: true,
      ricTimeout: 0,
      throttleDelay: 125,
    };

    lazySizesBECfg = window.lazySizesBEConfig || window.lazySizesBEConfig || {};

    for(prop in lazySizesBEDefaults){
      if(!(prop in lazySizesBECfg)){
        lazySizesBECfg[prop] = lazySizesBEDefaults[prop];
      }
    }
  })();

  if (!document || !document.getElementsByClassName) {
    return {
      init: function () {},
      cfg: lazySizesBECfg,
      noSupport: true,
    };
  }

  var docElem = document.documentElement;

  var supportPicture = window.HTMLPictureElement;

  var _addEventListener = 'addEventListener';

  var _getAttribute = 'getAttribute';

  /**
   * Update to bind to window because 'this' becomes null during SSR
   * builds.
   */
  var addEventListener = window[_addEventListener].bind(window);

  var setTimeout = window.setTimeout;

  var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

  var requestIdleCallback = window.requestIdleCallback;

  var regPicture = /^picture$/i;

  var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

  var regClassCache = {};

  var forEach = Array.prototype.forEach;

  var hasClass = function(ele, cls) {
    if(!regClassCache[cls]){
      regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    }
    return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
  };

  var addClass = function(ele, cls) {
    if (!hasClass(ele, cls)){
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
    }
  };

  var removeClass = function(ele, cls) {
    var reg;
    if ((reg = hasClass(ele,cls))) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
    }
  };

  var addRemoveLoadEvents = function(dom, fn, add){
    var action = add ? _addEventListener : 'removeEventListener';
    if(add){
      addRemoveLoadEvents(dom, fn);
    }
    loadEvents.forEach(function(evt){
      dom[action](evt, fn);
    });
  };

  var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
    var event = document.createEvent('Event');

    if(!detail){
      detail = {};
    }

    detail.instance = lazySizesBE;

    event.initEvent(name, !noBubbles, !noCancelable);

    event.detail = detail;

    elem.dispatchEvent(event);
    return event;
  };

  var updatePolyfill = function (el, full){
    var polyfill;
    if( !supportPicture && ( polyfill = (window.picturefill || lazySizesBECfg.pf) ) ){
      if(full && full.src && !el[_getAttribute]('srcset')){
        el.setAttribute('srcset', full.src);
      }
      polyfill({reevaluate: true, elements: [el]});
    } else if(full && full.src){
      el.src = full.src;
    }
  };

  var getCSS = function (elem, style){
    return (getComputedStyle(elem, null) || {})[style];
  };

  var getWidth = function(elem, parent, width){
    width = width || elem.offsetWidth;
    while(width < lazySizesBECfg.minSize && parent && !elem._lazySizesBEWidth){
      width =  parent.offsetWidth;
      parent = parent.parentNode;
    }
        //console.log(width);
    return width;
  };

  var rAF = (function(){
    var running, waiting;
    var firstFns = [];
    var secondFns = [];
    var fns = firstFns;

    var run = function(){
      var runFns = fns;

      fns = firstFns.length ? secondFns : firstFns;

      running = true;
      waiting = false;

      while(runFns.length){
        runFns.shift()();
      }

      running = false;
    };

    var rafBatch = function(fn, queue){
      if(running && !queue){
        fn.apply(this, arguments);
      } else {
        fns.push(fn);

        if(!waiting){
          waiting = true;
          (document.hidden ? setTimeout : requestAnimationFrame)(run);
        }
      }
    };

    rafBatch._lsFlush = run;

    return rafBatch;
  })();

  var rAFIt = function(fn, simple){
    return simple ?
      function() {
        rAF(fn);
      } :
      function(){
        var that = this;
        var args = arguments;
        rAF(function(){
          fn.apply(that, args);
        });
      }
    ;
  };

  var throttle = function(fn){
    var running;
    var lastTime = 0;
    var gDelay = lazySizesBECfg.throttleDelay;
    var rICTimeout = lazySizesBECfg.ricTimeout;
    var run = function(){
      running = false;
      lastTime = Date.now();
      fn();
    };
    var idleCallback = requestIdleCallback && rICTimeout > 49 ?
      function(){
        requestIdleCallback(run, {timeout: rICTimeout});

        if(rICTimeout !== lazySizesBECfg.ricTimeout){
          rICTimeout = lazySizesBECfg.ricTimeout;
        }
      } :
      rAFIt(function(){
        setTimeout(run);
      }, true)
    ;

    return function(isPriority){
      var delay;

      if((isPriority = isPriority === true)){
        rICTimeout = 33;
      }

      if(running){
        return;
      }

      running =  true;

      delay = gDelay - (Date.now() - lastTime);

      if(delay < 0){
        delay = 0;
      }

      if(isPriority || delay < 9){
        idleCallback();
      } else {
        setTimeout(idleCallback, delay);
      }
    };
  };

  //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
  var debounce = function(func) {
    var timeout, timestamp;
    var wait = 99;
    var run = function(){
      timeout = null;
      func();
    };
    var later = function() {
      var last = Date.now() - timestamp;

      if (last < wait) {
        setTimeout(later, wait - last);
      } else {
        (requestIdleCallback || run)(run);
      }
    };

    return function() {
      timestamp = Date.now();

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    };
  };

  var loader = (function(){
    var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

    var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

    var regImg = /^img$/i;
    var regIframe = /^iframe$/i;

    var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

    var shrinkExpand = 0;
    var currentExpand = 0;

    var isLoading = 0;
    var lowRuns = -1;

    var resetPreloading = function(e){
      isLoading--;
      if(!e || isLoading < 0 || !e.target){
        isLoading = 0;
      }
    };

    var isVisible = function (elem) {
      if (isBodyHidden == null) {
        isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
      }

      return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
    };

    var isNestedVisible = function(elem, elemExpand){
      var outerRect;
      var parent = elem;
      var visible = isVisible(elem);

      eLtop -= elemExpand;
      eLbottom += elemExpand;
      eLleft -= elemExpand;
      eLright += elemExpand;

      while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
        visible = ((getCSS(parent, 'opacity') || 1) > 0);

        if(visible && getCSS(parent, 'overflow') != 'visible'){
          outerRect = parent.getBoundingClientRect();
          visible = eLright > outerRect.left &&
            eLleft < outerRect.right &&
            eLbottom > outerRect.top - 1 &&
            eLtop < outerRect.bottom + 1
          ;
        }
      }

      return visible;
    };

    var checkElements = function() {
      var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
        beforeExpandVal, defaultExpand, preloadExpand, hFac;
      var lazyloadElems = lazySizesBE.elements;

      if((loadMode = lazySizesBECfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

        i = 0;

        lowRuns++;

        for(; i < eLlen; i++){

          if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

          if(!supportScroll || (lazySizesBE.prematureUnveil && lazySizesBE.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

          if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
            elemExpand = currentExpand;
          }

          if (!defaultExpand) {
            defaultExpand = (!lazySizesBECfg.expand || lazySizesBECfg.expand < 1) ?
              docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
              lazySizesBECfg.expand;

            lazySizesBE._defEx = defaultExpand;

            preloadExpand = defaultExpand * lazySizesBECfg.expFactor;
            hFac = lazySizesBECfg.hFac;
            isBodyHidden = null;

            if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
              currentExpand = preloadExpand;
              lowRuns = 0;
            } else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
              currentExpand = defaultExpand;
            } else {
              currentExpand = shrinkExpand;
            }
          }

          if(beforeExpandVal !== elemExpand){
            eLvW = innerWidth + (elemExpand * hFac);
            elvH = innerHeight + elemExpand;
            elemNegativeExpand = elemExpand * -1;
            beforeExpandVal = elemExpand;
          }

          rect = lazyloadElems[i].getBoundingClientRect();

          if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
            (eLtop = rect.top) <= elvH &&
            (eLright = rect.right) >= elemNegativeExpand * hFac &&
            (eLleft = rect.left) <= eLvW &&
            (eLbottom || eLright || eLleft || eLtop) &&
            (lazySizesBECfg.loadHidden || isVisible(lazyloadElems[i])) &&
            ((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
            unveilElement(lazyloadElems[i]);
            loadedSomething = true;
            if(isLoading > 9){break;}
          } else if(!loadedSomething && isCompleted && !autoLoadElem &&
            isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
            (preloadElems[0] || lazySizesBECfg.preloadAfterLoad) &&
            (preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesBECfg.sizesAttr) != 'auto')))){
            autoLoadElem = preloadElems[0] || lazyloadElems[i];
          }
        }

        if(autoLoadElem && !loadedSomething){
          unveilElement(autoLoadElem);
        }
      }
    };

    var throttledCheckElements = throttle(checkElements);

    var switchLoadingClass = function(e){
      var elem = e.target;

      if (elem._lazyCache) {
        delete elem._lazyCache;
        return;
      }

      resetPreloading(e);
      addClass(elem, lazySizesBECfg.loadedClass);
      removeClass(elem, lazySizesBECfg.loadingClass);
      addRemoveLoadEvents(elem, rafSwitchLoadingClass);
      triggerEvent(elem, 'lazyloaded');
    };
    var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
    var rafSwitchLoadingClass = function(e){
      rafedSwitchLoadingClass({target: e.target});
    };

    var changeIframeSrc = function(elem, src){
      try {
        elem.contentWindow.location.replace(src);
      } catch(e){
        elem.src = src;
      }
    };

    var handleSources = function(source){
      var customMedia;

      var sourceSrcset = source[_getAttribute](lazySizesBECfg.srcsetAttr);

      if( (customMedia = lazySizesBECfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
        source.setAttribute('media', customMedia);
      }

      if(sourceSrcset){
        source.setAttribute('srcset', sourceSrcset);
      }
    };

    var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
      var src, srcset, parent, isPicture, event, firesLoad;

      if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

        if(sizes){
          if(isAuto){
            addClass(elem, lazySizesBECfg.autosizesClass);
          } else {
            elem.setAttribute('sizes', sizes);
          }
        }

        srcset = elem[_getAttribute](lazySizesBECfg.srcsetAttr);
        src = elem[_getAttribute](lazySizesBECfg.srcAttr);

        if(isImg) {
          parent = elem.parentNode;
          isPicture = parent && regPicture.test(parent.nodeName || '');
        }

        firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

        event = {target: elem};

        addClass(elem, lazySizesBECfg.loadingClass);

        if(firesLoad){
          clearTimeout(resetPreloadingTimer);
          resetPreloadingTimer = setTimeout(resetPreloading, 2500);
          addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
        }

        if(isPicture){
          forEach.call(parent.getElementsByTagName('source'), handleSources);
        }

        if(srcset){
          elem.setAttribute('srcset', srcset);
        } else if(src && !isPicture){
          if(regIframe.test(elem.nodeName)){
            changeIframeSrc(elem, src);
          } else {
            elem.src = src;
          }
        }

        if(isImg && (srcset || isPicture)){
          updatePolyfill(elem, {src: src});
        }
      }

      if(elem._lazyRace){
        delete elem._lazyRace;
      }
      removeClass(elem, lazySizesBECfg.lazyClass);

      rAF(function(){
        // Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
        var isLoaded = elem.complete && elem.naturalWidth > 1;

        if( !firesLoad || isLoaded){
          if (isLoaded) {
            addClass(elem, 'ls-is-cached');
          }
          switchLoadingClass(event);
          elem._lazyCache = true;
          setTimeout(function(){
            if ('_lazyCache' in elem) {
              delete elem._lazyCache;
            }
          }, 9);
        }
        if (elem.loading == 'lazy') {
          isLoading--;
        }
      }, true);
    });

    var unveilElement = function (elem){
      if (elem._lazyRace) {return;}
      var detail;

      var isImg = regImg.test(elem.nodeName);

      //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
      var sizes = isImg && (elem[_getAttribute](lazySizesBECfg.sizesAttr) || elem[_getAttribute]('sizes'));
      var isAuto = sizes == 'auto';

      if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesBECfg.errorClass) && hasClass(elem, lazySizesBECfg.lazyClass)){return;}

      detail = triggerEvent(elem, 'lazyunveilread').detail;

      if(isAuto){
         autoSizer.updateElem(elem, true, elem.offsetWidth);
      }

      elem._lazyRace = true;
      isLoading++;
            
      lazyUnveil(elem, detail, isAuto, sizes, isImg);
    };

    var afterScroll = debounce(function(){
      lazySizesBECfg.loadMode = 3;
      throttledCheckElements();
    });

    var altLoadmodeScrollListner = function(){
      if(lazySizesBECfg.loadMode == 3){
        lazySizesBECfg.loadMode = 2;
      }
      afterScroll();
    };

    var onload = function(){
      if(isCompleted){return;}
      if(Date.now() - started < 999){
        setTimeout(onload, 999);
        return;
      }


      isCompleted = true;

      lazySizesBECfg.loadMode = 3;

      throttledCheckElements();

      addEventListener('scroll', altLoadmodeScrollListner, true);
    };

    return {
      _: function(){
        started = Date.now();

        lazySizesBE.elements = document.getElementsByClassName(lazySizesBECfg.lazyClass);
        preloadElems = document.getElementsByClassName(lazySizesBECfg.lazyClass + ' ' + lazySizesBECfg.preloadClass);

        addEventListener('scroll', throttledCheckElements, true);

        addEventListener('resize', throttledCheckElements, true);

        addEventListener('pageshow', function (e) {
          if (e.persisted) {
            var loadingElements = document.querySelectorAll('.' + lazySizesBECfg.loadingClass);

            if (loadingElements.length && loadingElements.forEach) {
              requestAnimationFrame(function () {
                loadingElements.forEach( function (img) {
                  if (img.complete) {
                    unveilElement(img);
                  }
                });
              });
            }
          }
        });

        if(window.MutationObserver){
          new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
        } else {
          docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
          docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
          setInterval(throttledCheckElements, 999);
        }

        addEventListener('hashchange', throttledCheckElements, true);

        //, 'fullscreenchange'
        ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
          document[_addEventListener](name, throttledCheckElements, true);
        });

        if((/d$|^c/.test(document.readyState))){
          onload();
        } else {
          addEventListener('load', onload);
          document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
          setTimeout(onload, 20000);
        }

        if(lazySizesBE.elements.length){
          checkElements();
          rAF._lsFlush();
        } else {
          throttledCheckElements();
        }
      },
      checkElems: throttledCheckElements,
      unveil: unveilElement,
      _aLSL: altLoadmodeScrollListner,
    };
  })();


  var autoSizer = (function(){
    var autosizesElems;

    var sizeElement = rAFIt(function(elem, parent, event, width){
      var sources, i, len;
      // nathan custom
      width = width*parseFloat(elem.getAttribute('data-sizes-scale') || 1);
      // end nathan custom
      elem._lazySizesBEWidth = width;
      width += 'px';

      // console.log(elem,width)

      elem.setAttribute('sizes', width);

      if(regPicture.test(parent.nodeName || '')){
        sources = parent.getElementsByTagName('source');
        for(i = 0, len = sources.length; i < len; i++){
          sources[i].setAttribute('sizes', width);
        }
      }

      if(!event.detail.dataAttr){
        updatePolyfill(elem, event.detail);
      }
    });
    var getSizeElement = function (elem, dataAttr, width){
      var event;
      var parent = elem.parentNode;

      if(parent){
        width = getWidth(elem, parent, width);
        //console.log(width);
        event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});
        // console.log(elem);
        // console.log(elem.dataset)
                //console.log(elem.getAttribute("data-parent-fit"));
        if(!event.defaultPrevented){
          // nathan fix
          // if(elem.dataset.parentFit != 'width'){
          //  width = event.detail.width;
          // }
          width = event.detail.width;
                    // console.log(width);
          if(width && width !== elem._lazySizesBEWidth){
            sizeElement(elem, parent, event, width);
          }
        }
      }
    };

    var updateElementsSizes = function(){
      var i;
      var len = autosizesElems.length;
      if(len){
        i = 0;

        for(; i < len; i++){
          getSizeElement(autosizesElems[i]);
        }
      }
    };

    var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

    return {
      _: function(){
        autosizesElems = document.getElementsByClassName(lazySizesBECfg.autosizesClass);
        addEventListener('resize', debouncedUpdateElementsSizes);
      },
      checkElems: debouncedUpdateElementsSizes,
      updateElem: getSizeElement
    };
  })();

  var init = function(){
    if(!init.i && document.getElementsByClassName){
      init.i = true;
      autoSizer._();
      loader._();
    }
  };

  setTimeout(function(){
    if(lazySizesBECfg.init){
      init();
    }
  });

  lazySizesBE = {
    cfg: lazySizesBECfg,
    autoSizer: autoSizer,
    loader: loader,
    init: init,
    uP: updatePolyfill,
    aC: addClass,
    rC: removeClass,
    hC: hasClass,
    fire: triggerEvent,
    gW: getWidth,
    rAF: rAF,
  };

  return lazySizesBE;
}
));

/*! ls.optimumx.min.js - v5.3.2 */
//!function(e,t){var n;e&&(n=function(){t(e.lazySizesBE),e.removeEventListener("lazyunveilread",n,!0)},t=t.bind(null,e,e.document),"object"==typeof module&&module.exports?t(require("lazySizesBE")):"function"==typeof define&&define.amd?define(["lazySizesBE"],t):e.lazySizesBE?n():e.addEventListener("lazyunveilread",n,!0))}("undefined"!=typeof window?window:0,function(t,e,s){"use strict";var c,d,n,r,o,i,l,u,f,m,a;function p(e,t,n,i,r,a,d,u){o.push({c:t,u:n,w:+("w"==u?d:i)})}function v(e,t){return e.w-t.w}function y(e,t){var n={srcset:e.getAttribute(s.cfg.srcsetAttr)||""},i=r(n.srcset);return Object.defineProperty(e,t,{value:n,writable:!0}),n.cands=i,n.index=0,n.dirty=!1,i[0]&&i[0].w?(i.sort(v),n.cSrcset=[i[n.index].c]):(n.cSrcset=n.srcset?[n.srcset]:[],n.cands=[]),n}function g(e,t,n,i,r){var a,d=e[r];d&&(a=d.index,u[r](d,t,n),d.dirty&&a==d.index||(d.cSrcset.join(", "),e.setAttribute(i,d.cSrcset.join(", ")),d.dirty=!0))}t.addEventListener&&(d=/^picture$/i,n=e.documentElement,i=/(([^,\s].[^\s]+)\s+(\d+)(w|h)(\s+(\d+)(w|h))?)/g,r=function(e){return o=[],e.replace(i,p),o},l=function(e,t){var n,i,r,a;if(!e[t]&&(a=e.parentNode||{},e[t]=y(e,t),e[t].isImg=!0,d.test(a.nodeName||"")))for(e[t].picture=!0,i=0,r=(n=a.getElementsByTagName("source")).length;i<r;i++)y(n[i],t).isImg=!1;return e[t]},u={_lazyOptimumx:function(e,t,n){for(var i,r,a,d,u,s,c=0;c<e.cands.length;c++)if((i=e.cands[c]).d=(i.w||1)/t,!(e.index>=c)){if(!(i.d<=n)&&(r=e.cands[c-1],a=i.d,d=n,s=u=void 0,r&&r.d&&(s=.7<d?.6:.4,r.d>=d||((u=Math.pow(r.d-s,1.6)||.1)<.1?u=.1:3<u&&(u=3),!(r.d+(a-d)*u<d)))))break;e.cSrcset.push(i.c),e.index=c}}},f=function(e,t,n,i,r){var a,d,u,s,c=e[r];if(c.width=t,c.picture&&(d=e.parentNode))for(s=0,u=(a=d.getElementsByTagName("source")).length;s<u;s++)g(a[s],t,n,i,r);g(e,t,n,i,r)},m=function(e){var t=e.getAttribute("data-optimumx")||e.getAttribute("data-maxdpr");return!t&&c.constrainPixelDensity&&(t="auto"),t=t&&("auto"==t?c.getOptimumX(e):parseFloat(t,10))},a=function(){s&&!s.getOptimumX&&(s.getX=m,s.pWS=r,n.removeEventListener("lazybeforeunveil",a))},n.addEventListener("lazybeforeunveil",a),setTimeout(a),"function"!=typeof(c=s&&s.cfg).getOptimumX&&(c.getOptimumX=function(){var e=t.devicePixelRatio||1;return 2.6<e?e*=.6:1.9<e?e*=.8:e-=.01,Math.min(Math.round(100*e)/100,2)}),t.devicePixelRatio&&addEventListener("lazybeforesizes",function(e){var t,n,i,r,a,d,u;e.detail.instance==s&&(a=e.target,u=(d=e.detail).dataAttr,e.defaultPrevented||!(t=m(a))||t>=devicePixelRatio||(!u||!a._lazyOptimumx||d.reloaded||c.unloadedClass&&s.hC(a,c.unloadedClass)||(a._lazyOptimumx=null),n=l(a,"_lazyOptimumx"),(i=d.width)&&(n.width||0)<i&&(r=u?s.cfg.srcsetAttr:"srcset",s.rAF(function(){f(a,i,t,r,"_lazyOptimumx")}))))}))});

/*! ls.object-fit.min.js - v5.2.0-beta1 */
// if (!('object-fit' in document.createElement('a').style)) {
//   !function(a,b){if(a){var c=function(d){b(a.lazySizesBE,d),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazySizesBE")):a.lazySizesBE?c():a.addEventListener("lazyunveilread",c,!0)}}("undefined"!=typeof window?window:0,function(a,b,c,d){"use strict";function e(a){var b=getComputedStyle(a,null)||{},c=b.fontFamily||"",d=c.match(m)||"",e=d&&c.match(n)||"";return e&&(e=e[1]),{fit:d&&d[1]||"",position:q[e]||e||"center"}}function f(){if(!i){var a=b.createElement("style");i=c.cfg.objectFitClass||"lazySizesBE-display-clone",b.querySelector("head").appendChild(a)}}function g(a){var b=a.previousElementSibling;b&&c.hC(b,i)&&(b.parentNode.removeChild(b),a.style.position=b.getAttribute("data-position")||"",a.style.visibility=b.getAttribute("data-visibility")||"")}function h(a,b){var d,e,h,j,k=c.cfg,l=function(){var b=a.currentSrc||a.src;b&&e!==b&&(e=b,j.backgroundImage="url("+(p.test(b)?JSON.stringify(b):b)+")",d||(d=!0,c.rC(h,k.loadingClass),c.aC(h,k.loadedClass)))},m=function(){c.rAF(l)};a._lazySizesBEParentFit=b.fit,a.addEventListener("lazyloaded",m,!0),a.addEventListener("load",m,!0),c.rAF(function(){var d=a,e=a.parentNode;"PICTURE"==e.nodeName.toUpperCase()&&(d=e,e=e.parentNode),g(d),i||f(),h=a.cloneNode(!1),j=h.style,h.addEventListener("load",function(){var a=h.currentSrc||h.src;a&&a!=o&&(h.src=o,h.srcset="")}),c.rC(h,k.loadedClass),c.rC(h,k.lazyClass),c.rC(h,k.autosizesClass),c.aC(h,k.loadingClass),c.aC(h,i),["data-parent-fit","data-parent-container","data-object-fit-polyfilled",k.srcsetAttr,k.srcAttr].forEach(function(a){h.removeAttribute(a)}),h.src=o,h.srcset="",j.backgroundRepeat="no-repeat",j.backgroundPosition=b.position,j.backgroundSize=b.fit,h.setAttribute("data-position",d.style.position),h.setAttribute("data-visibility",d.style.visibility),d.style.visibility="hidden",d.style.position="absolute",a.setAttribute("data-parent-fit",b.fit),a.setAttribute("data-parent-container","prev"),a.setAttribute("data-object-fit-polyfilled",""),a._objectFitPolyfilledDisplay=h,e.insertBefore(h,d),a._lazySizesBEParentFit&&delete a._lazySizesBEParentFit,a.complete&&l()})}var i,j=b.createElement("a").style,k="objectFit"in j,l=k&&"objectPosition"in j,m=/object-fit["']*\s*:\s*["']*(contain|cover)/,n=/object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/,o="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",p=/\(|\)|'/,q={center:"center","50% 50%":"center"};if(!k||!l){var r=function(a){if(a.detail.instance==c){var b=a.target,d=e(b);return!(!d.fit||k&&"center"==d.position)&&(h(b,d),!0)}};a.addEventListener("lazybeforesizes",function(a){if(a.detail.instance==c){var b=a.target;null==b.getAttribute("data-object-fit-polyfilled")||b._objectFitPolyfilledDisplay||r(a)||c.rAF(function(){b.removeAttribute("data-object-fit-polyfilled")})}}),a.addEventListener("lazyunveilread",r,!0),d&&d.detail&&r(d)}});
// }

/*! lazySizesBE config optional */

//window.lazySizesBEConfig.loadHidden = false;
// window.lazySizesBEConfig.expand = -100;
// lazySizesBE.init();
// end lazySizesBE

// // Start Nathan custom lazysizes lazyinclude
// // document.addEventListener('DOMContentLoaded', function() {
//   var $beeplitlz = document.querySelectorAll('[data-beeplitlz]');

//   // Modify the request headers when the targeted component kicks off an XHR
//   // component.addEventListener('lazyincludeload', function(event) {
//   //   if (event.detail) {
//   //     event.detail.xhrModifier = function(request, candidate) {
//   //       request.setRequestHeader('Accept', 'application/json');
//   //     }
//   //   }
//   // });

//   if ($beeplitlz.length && $beeplitlz.forEach) {
//     requestAnimationFrame(function () {
//       $beeplitlz.forEach( function (el) {

//       //   el.addEventListener('lazyincludeload', function(event) {
//       //     if (event.detail) {
//       //       console.log(event.detail);
//         // event.detail.xhrModifier = function(request, candidate) {
//         //   request.abort();
//         // }

//       //     }
//       //   });
//         // el.addEventListener('lazybeforeunveil', function(e){
//         //  console.log(e.target)
//         // });
//         document.addEventListener('lazyincludeloaded', function(event) {
//           if (event.detail.content && event.detail.content.indexOf('[beeplitlz]') > -1) {
//             var html = event.detail.content.split('[beeplitlz]')[1];
//             event.detail.content = html;
//           }
//         });

//       });
//     });
// //   }
document.addEventListener('lazyincludeloaded', function(event) {
  if (event.detail.content && event.detail.content.indexOf('[beeplitlz]') > -1) {
    var html = event.detail.content.split('[beeplitlz]')[1];
    event.detail.content = html;
  }
});
// });
// End Nathan custom lazysizes lazyinclude

/*! modernizr 3.6.0 (Custom Build) | MIT * 
 * https://modernizr.com/download/?-csspositionsticky-hovermq-touchevents-video-setclasses-cssclassprefix:cl !*/
//!function(e,n,t){function o(e,n){return typeof e===n}function i(){var e,n,t,i,a,s,r;for(var c in d)if(d.hasOwnProperty(c)){if(e=[],n=d[c],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)s=e[a],r=s.split("."),1===r.length?Modernizr[r[0]]=i:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=i),f.push((i?"":"no-")+r.join("-"))}}function a(e){var n=p.className,t=Modernizr._config.classPrefix||"";if(h&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),h?p.className.baseVal=n:p.className=n)}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):h?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(e,n){if("object"==typeof e)for(var t in e)m(e,t)&&r(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),i=Modernizr[o[0]];if(2==o.length&&(i=i[o[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function c(){var e=n.body;return e||(e=s(h?"svg":"body"),e.fake=!0),e}function l(e,t,o,i){var a,r,l,f,d="modernizr",u=s("div"),h=c();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=i?i[o]:d+(o+1),u.appendChild(l);return a=s("style"),a.type="text/css",a.id="s"+d,(h.fake?h:u).appendChild(a),h.appendChild(u),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),u.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",f=p.style.overflow,p.style.overflow="hidden",p.appendChild(h)),r=t(u,e),h.fake?(h.parentNode.removeChild(h),p.style.overflow=f,p.offsetHeight):u.parentNode.removeChild(u),!!r}var f=[],d=[],u={_version:"3.6.0",_config:{classPrefix:"cl",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){d.push({name:e,fn:n,options:t})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var p=n.documentElement,h="svg"===p.nodeName.toLowerCase(),v=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];u._prefixes=v,Modernizr.addTest("video",function(){var e=s("video"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("csspositionsticky",function(){var e="position:",n="sticky",t=s("a"),o=t.style;return o.cssText=e+v.join(n+";"+e).slice(0,-e.length),-1!==o.position.indexOf(n)});var m;!function(){var e={}.hasOwnProperty;m=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),u._l={},u.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},u._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){u.addTest=r});var y=u.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",v.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");y(o,function(e){t=9===e.offsetTop})}return t});var g=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();u.mq=g,Modernizr.addTest("hovermq",g("(hover)")),i(),a(f),delete u.addTest,delete u.addAsyncTest;for(var w=0;w<Modernizr._q.length;w++)Modernizr._q[w]();e.Modernizr=Modernizr}(window,document);

/*! loadCSS. [c]2017 Filament Group, Inc. MIT License */
//!function(n){"use strict";n.loadCSS||(n.loadCSS=function(){});var o=loadCSS.relpreload={};if(o.support=function(){var e;try{e=n.document.createElement("link").relList.supports("preload")}catch(t){e=!1}return function(){return e}}(),o.bindMediaToggle=function(t){var e=t.media||"all";function a(){t.addEventListener?t.removeEventListener("load",a):t.attachEvent&&t.detachEvent("onload",a),t.setAttribute("onload",null),t.media=e}t.addEventListener?t.addEventListener("load",a):t.attachEvent&&t.attachEvent("onload",a),setTimeout(function(){t.rel="stylesheet",t.media="only x"}),setTimeout(a,3e3)},o.poly=function(){if(!o.support())for(var t=n.document.getElementsByTagName("link"),e=0;e<t.length;e++){var a=t[e];"preload"!==a.rel||"style"!==a.getAttribute("as")||a.getAttribute("data-loadcss")||(a.setAttribute("data-loadcss",!0),o.bindMediaToggle(a))}},!o.support()){o.poly();var t=n.setInterval(o.poly,500);n.addEventListener?n.addEventListener("load",function(){o.poly(),n.clearInterval(t)}):n.attachEvent&&n.attachEvent("onload",function(){o.poly(),n.clearInterval(t)})}"undefined"!=typeof exports?exports.loadCSS=loadCSS:n.loadCSS=loadCSS}("undefined"!=typeof global?global:this);

// nathan Create the event custom when loaded lazysize js

document.dispatchEvent(new CustomEvent('lazysizebee:loaded'));

// Nathan
// document.addEventListener('lazybeforeunveil', function(evt) {

//    let image = evt.target,
//    parentImage = image.parentNode;
//    // parentImage = image.parentNode.closest('div');

//    if (!parentImage || !parentImage.classList.contains("bee-bg-11") ) return;
//    parentImage.classList.remove('bee-child-lazyloaded')
//    parentImage.classList.add('bee-child-lazyloading');
//    //console.log('lazybeforeunveil')

// });

document.addEventListener('lazyloaded', function(evt) {

   let image = evt.target,
   parentImage = image.parentNode;
   // parentImage = image.parentNode.closest('div');

   if (!parentImage || !parentImage.classList.contains("bee-bg-11") ) return;
   //parentImage.classList.remove('bee-child-lazyloading')
   parentImage.classList.add('bee-child-lazyloaded');
   //console.log('lazyloaded')
});
//lazySizesBE.init();
// end Nathan