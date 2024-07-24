"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[722],{6722:(ve,Z,F)=>{F.d(Z,{Z:()=>V});var E=Object.assign||function(c){for(var t=1;t<arguments.length;t++){var d=arguments[t];for(var l in d)Object.prototype.hasOwnProperty.call(d,l)&&(c[l]=d[l])}return c},C=function(t){return"IMG"===t.tagName},O=function(t){return t&&1===t.nodeType},q=function(t){return".svg"===(t.currentSrc||t.src).substr(-4).toLowerCase()},B=function(t){try{return Array.isArray(t)?t.filter(C):function(t){return NodeList.prototype.isPrototypeOf(t)}(t)?[].slice.call(t).filter(C):O(t)?[t].filter(C):"string"==typeof t?[].slice.call(document.querySelectorAll(t)).filter(C):[]}catch{throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}},b=function(t,d){var l=E({bubbles:!1,cancelable:!1,detail:void 0},d);if("function"==typeof window.CustomEvent)return new CustomEvent(t,l);var g=document.createEvent("CustomEvent");return g.initCustomEvent(t,l.bubbles,l.cancelable,l.detail),g};!function J(c,t){void 0===t&&(t={});var d=t.insertAt;if(c&&!(typeof document>"u")){var l=document.head||document.getElementsByTagName("head")[0],g=document.createElement("style");g.type="text/css","top"===d&&l.firstChild?l.insertBefore(g,l.firstChild):l.appendChild(g),g.styleSheet?g.styleSheet.cssText=c:g.appendChild(document.createTextNode(c))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}");const V=function c(t){var l=window.Promise||function(o){function n(){}o(n,n)},S=function(){for(var o=arguments.length,n=Array(o),a=0;a<o;a++)n[a]=arguments[a];var m=n.reduce(function(r,f){return[].concat(r,B(f))},[]);return m.filter(function(r){return-1===p.indexOf(r)}).forEach(function(r){p.push(r),r.classList.add("medium-zoom-image")}),T.forEach(function(r){var f=r.type,v=r.listener,L=r.options;m.forEach(function(y){y.addEventListener(f,v,L)})}),u},R=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target,a=function(){var r={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},f=void 0,v=void 0;if(i.container)if(i.container instanceof Object)f=(r=E({},r,i.container)).width-r.left-r.right-2*i.margin,v=r.height-r.top-r.bottom-2*i.margin;else{var y=(O(i.container)?i.container:document.querySelector(i.container)).getBoundingClientRect();r=E({},r,{width:y.width,height:y.height,left:y.left,top:y.top})}f=f||r.width-2*i.margin,v=v||r.height-2*i.margin;var H=e.zoomedHd||e.original,me=q(H)?f:H.naturalWidth||f,le=q(H)?v:H.naturalHeight||v,x=H.getBoundingClientRect(),ue=x.top,ce=x.left,P=x.width,j=x.height,se=Math.min(Math.max(P,me),f)/P,fe=Math.min(Math.max(j,le),v)/j,M=Math.min(se,fe),Y="scale("+M+") translate3d("+((f-P)/2-ce+i.margin+r.left)/M+"px, "+((v-j)/2-ue+i.margin+r.top)/M+"px, 0)";e.zoomed.style.transform=Y,e.zoomedHd&&(e.zoomedHd.style.transform=Y)};return new l(function(m){if(n&&-1===p.indexOf(n))m(u);else if(e.zoomed)m(u);else{if(n)e.original=n;else{if(!(p.length>0))return void m(u);e.original=p[0]}if(e.original.dispatchEvent(b("medium-zoom:open",{detail:{zoom:u}})),W=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,w=!0,e.zoomed=function(t){var d=t.getBoundingClientRect(),l=d.top,g=d.left,N=d.width,I=d.height,h=t.cloneNode(),_=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,S=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return h.removeAttribute("id"),h.style.position="absolute",h.style.top=l+_+"px",h.style.left=g+S+"px",h.style.width=N+"px",h.style.height=I+"px",h.style.transform="",h}(e.original),document.body.appendChild(A),i.template){var v=O(i.template)?i.template:document.querySelector(i.template);e.template=document.createElement("div"),e.template.appendChild(v.content.cloneNode(!0)),document.body.appendChild(e.template)}if(e.original.parentElement&&"PICTURE"===e.original.parentElement.tagName&&e.original.currentSrc&&(e.zoomed.src=e.original.currentSrc),document.body.appendChild(e.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),e.original.classList.add("medium-zoom-image--hidden"),e.zoomed.classList.add("medium-zoom-image--opened"),e.zoomed.addEventListener("click",z),e.zoomed.addEventListener("transitionend",function k(){w=!1,e.zoomed.removeEventListener("transitionend",k),e.original.dispatchEvent(b("medium-zoom:opened",{detail:{zoom:u}})),m(u)}),e.original.getAttribute("data-zoom-src")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("srcset"),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading"),e.zoomedHd.src=e.zoomed.getAttribute("data-zoom-src"),e.zoomedHd.onerror=function(){clearInterval(L),console.warn("Unable to reach the zoom image target "+e.zoomedHd.src),e.zoomedHd=null,a()};var L=setInterval(function(){e.zoomedHd.complete&&(clearInterval(L),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),a())},10)}else if(e.original.hasAttribute("srcset")){e.zoomedHd=e.zoomed.cloneNode(),e.zoomedHd.removeAttribute("sizes"),e.zoomedHd.removeAttribute("loading");var y=e.zoomedHd.addEventListener("load",function(){e.zoomedHd.removeEventListener("load",y),e.zoomedHd.classList.add("medium-zoom-image--opened"),e.zoomedHd.addEventListener("click",z),document.body.appendChild(e.zoomedHd),a()})}else a()}})},z=function(){return new l(function(o){!w&&e.original?(w=!0,document.body.classList.remove("medium-zoom--opened"),e.zoomed.style.transform="",e.zoomedHd&&(e.zoomedHd.style.transform=""),e.template&&(e.template.style.transition="opacity 150ms",e.template.style.opacity=0),e.original.dispatchEvent(b("medium-zoom:close",{detail:{zoom:u}})),e.zoomed.addEventListener("transitionend",function a(){e.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(e.zoomed),e.zoomedHd&&document.body.removeChild(e.zoomedHd),document.body.removeChild(A),e.zoomed.classList.remove("medium-zoom-image--opened"),e.template&&document.body.removeChild(e.template),w=!1,e.zoomed.removeEventListener("transitionend",a),e.original.dispatchEvent(b("medium-zoom:closed",{detail:{zoom:u}})),e.original=null,e.zoomed=null,e.zoomedHd=null,e.template=null,o(u)})):o(u)})},U=function(){var n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).target;return e.original?z():R({target:n})},p=[],T=[],w=!1,W=0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e={original:null,zoomed:null,zoomedHd:null,template:null};"[object Object]"===Object.prototype.toString.call(t)?i=t:(t||"string"==typeof t)&&S(t);var A=function(t){var d=document.createElement("div");return d.classList.add("medium-zoom-overlay"),d.style.background=t,d}((i=E({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},i)).background);document.addEventListener("click",function(o){var n=o.target;n!==A?-1!==p.indexOf(n)&&U({target:n}):z()}),document.addEventListener("keyup",function(o){var n=o.key||o.keyCode;("Escape"===n||"Esc"===n||27===n)&&z()}),document.addEventListener("scroll",function(){if(!w&&e.original){var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(W-o)>i.scrollOffset&&setTimeout(z,150)}}),window.addEventListener("resize",z);var u={open:R,close:z,toggle:U,update:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o;if(o.background&&(A.style.background=o.background),o.container&&o.container instanceof Object&&(n.container=E({},i.container,o.container)),o.template){var a=O(o.template)?o.template:document.querySelector(o.template);n.template=a}return i=E({},i,n),p.forEach(function(m){m.dispatchEvent(b("medium-zoom:update",{detail:{zoom:u}}))}),u},clone:function(){return c(E({},i,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}))},attach:S,detach:function(){for(var o=arguments.length,n=Array(o),a=0;a<o;a++)n[a]=arguments[a];e.zoomed&&z();var m=n.length>0?n.reduce(function(r,f){return[].concat(r,B(f))},[]):p;return m.forEach(function(r){r.classList.remove("medium-zoom-image"),r.dispatchEvent(b("medium-zoom:detach",{detail:{zoom:u}}))}),p=p.filter(function(r){return-1===m.indexOf(r)}),u},on:function(o,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.forEach(function(m){m.addEventListener("medium-zoom:"+o,n,a)}),T.push({type:"medium-zoom:"+o,listener:n,options:a}),u},off:function(o,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return p.forEach(function(m){m.removeEventListener("medium-zoom:"+o,n,a)}),T=T.filter(function(m){return!(m.type==="medium-zoom:"+o&&m.listener.toString()===n.toString())}),u},getOptions:function(){return i},getImages:function(){return p},getZoomedImage:function(){return e.original}};return u}}}]);