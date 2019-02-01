function directiveNormalize(e){return e.replace(PREFIX_REGEXP,"").replace(SPECIAL_CHARS_REGEXP,function(e,t){return t.toUpperCase()})}!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){
if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){
var t=!!e&&"length"in e&&e.length,n=ae.type(e);return"function"!==n&&!ae.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e,t,n){
if(ae.isFunction(t))return ae.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return ae.grep(e,function(e){return e===t!==n});if("string"==typeof t){
if(he.test(t))return ae.filter(t,e,n);t=ae.filter(t,e)}return ae.grep(e,function(e){return Q.call(t,e)>-1!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);
return e}function a(e){var t={};return ae.each(e.match(we)||[],function(e,n){t[n]=!0}),t}function o(){J.removeEventListener("DOMContentLoaded",o),e.removeEventListener("load",o),
ae.ready()}function s(){this.expando=ae.expando+s.uid++}function u(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Te,"-$&").toLowerCase(),
n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:xe.test(n)?ae.parseJSON(n):n)}catch(e){}ke.set(e,t,n);
}else n=void 0;return n}function l(e,t,n,r){var i,a=1,o=20,s=r?function(){return r.cur()}:function(){return ae.css(e,t,"")},u=s(),l=n&&n[3]||(ae.cssNumber[t]?"":"px"),c=(ae.cssNumber[t]||"px"!==l&&+u)&&Ye.exec(ae.css(e,t));
if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1;do a=a||".5",c/=a,ae.style(e,t,c+l);while(a!==(a=s()/u)&&1!==a&&--o)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],
r&&(r.unit=l,r.start=c,r.end=i)),i}function c(e,t){var n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[];
return void 0===t||t&&ae.nodeName(e,t)?ae.merge([e],n):n}function d(e,t){for(var n=0,r=e.length;n<r;n++)Le.set(e[n],"globalEval",!t||Le.get(t[n],"globalEval"));
}function f(e,t,n,r,i){for(var a,o,s,u,l,f,p=t.createDocumentFragment(),m=[],h=0,_=e.length;h<_;h++)if(a=e[h],a||0===a)if("object"===ae.type(a))ae.merge(m,a.nodeType?[a]:a);else if(Oe.test(a)){
for(o=o||p.appendChild(t.createElement("div")),s=(Fe.exec(a)||["",""])[1].toLowerCase(),u=Pe[s]||Pe._default,o.innerHTML=u[1]+ae.htmlPrefilter(a)+u[2],
f=u[0];f--;)o=o.lastChild;ae.merge(m,o.childNodes),o=p.firstChild,o.textContent=""}else m.push(t.createTextNode(a));for(p.textContent="",h=0;a=m[h++];)if(r&&ae.inArray(a,r)>-1)i&&i.push(a);else if(l=ae.contains(a.ownerDocument,a),
o=c(p.appendChild(a),"script"),l&&d(o),n)for(f=0;a=o[f++];)je.test(a.type||"")&&n.push(a);return p}function p(){return!0}function m(){return!1}function h(){
try{return J.activeElement}catch(e){}}function _(e,t,n,r,i,a){var o,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)_(e,s,n,r,t[s],a);
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=m;else if(!i)return this;return 1===a&&(o=i,
i=function(e){return ae().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=ae.guid++)),e.each(function(){ae.event.add(this,t,i,r,n)})}function g(e,t){
return ae.nodeName(e,"table")&&ae.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e:e}function v(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,
e}function y(e){var t=We.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){var n,r,i,a,o,s,u,l;if(1===t.nodeType){if(Le.hasData(e)&&(a=Le.access(e),
o=Le.set(t,a),l=a.events)){delete o.handle,o.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)ae.event.add(t,i,l[i][n])}ke.hasData(e)&&(s=ke.access(e),
u=ae.extend({},s),ke.set(t,u))}}function w(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ae.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue);
}function M(e,t,n,r){t=K.apply([],t);var i,a,o,s,u,l,d=0,p=e.length,m=p-1,h=t[0],_=ae.isFunction(h);if(_||p>1&&"string"==typeof h&&!re.checkClone&&Be.test(h))return e.each(function(i){
var a=e.eq(i);_&&(t[0]=h.call(this,i,a.html())),M(a,t,n,r)});if(p&&(i=f(t,e[0].ownerDocument,!1,e,r),a=i.firstChild,1===i.childNodes.length&&(i=a),a||r)){
for(o=ae.map(c(i,"script"),v),s=o.length;d<p;d++)u=i,d!==m&&(u=ae.clone(u,!0,!0),s&&ae.merge(o,c(u,"script"))),n.call(e[d],u,d);if(s)for(l=o[o.length-1].ownerDocument,
ae.map(o,y),d=0;d<s;d++)u=o[d],je.test(u.type||"")&&!Le.access(u,"globalEval")&&ae.contains(l,u)&&(u.src?ae._evalUrl&&ae._evalUrl(u.src):ae.globalEval(u.textContent.replace(ze,"")));
}return e}function D(e,t,n){for(var r,i=t?ae.filter(t,e):e,a=0;null!=(r=i[a]);a++)n||1!==r.nodeType||ae.cleanData(c(r)),r.parentNode&&(n&&ae.contains(r.ownerDocument,r)&&d(c(r,"script")),
r.parentNode.removeChild(r));return e}function $(e,t){var n=ae(t.createElement(e)).appendTo(t.body),r=ae.css(n[0],"display");return n.detach(),r}function L(e){
var t=J,n=Ve[e];return n||(n=$(e,t),"none"!==n&&n||(qe=(qe||ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=qe[0].contentDocument,
t.write(),t.close(),n=$(e,t),qe.detach()),Ve[e]=n),n}function k(e,t,n){var r,i,a,o,s=e.style;return n=n||Xe(e),n&&(o=n.getPropertyValue(t)||n[t],""!==o||ae.contains(e.ownerDocument,e)||(o=ae.style(e,t)),
!re.pixelMarginRight()&&Je.test(o)&&Ge.test(t)&&(r=s.width,i=s.minWidth,a=s.maxWidth,s.minWidth=s.maxWidth=s.width=o,o=n.width,s.width=r,s.minWidth=i,s.maxWidth=a)),
void 0!==o?o+"":o}function x(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function T(e){if(e in rt)return e;
for(var t=e[0].toUpperCase()+e.slice(1),n=nt.length;n--;)if(e=nt[n]+t,e in rt)return e}function S(e,t,n){var r=Ye.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t;
}function Y(e,t,n,r,i){for(var a=n===(r?"border":"content")?4:"width"===t?1:0,o=0;a<4;a+=2)"margin"===n&&(o+=ae.css(e,n+Ce[a],!0,i)),r?("content"===n&&(o-=ae.css(e,"padding"+Ce[a],!0,i)),
"margin"!==n&&(o-=ae.css(e,"border"+Ce[a]+"Width",!0,i))):(o+=ae.css(e,"padding"+Ce[a],!0,i),"padding"!==n&&(o+=ae.css(e,"border"+Ce[a]+"Width",!0,i)));
return o}function C(t,n,r){var i=!0,a="width"===n?t.offsetWidth:t.offsetHeight,o=Xe(t),s="border-box"===ae.css(t,"boxSizing",!1,o);if(J.msFullscreenElement&&e.top!==e&&t.getClientRects().length&&(a=Math.round(100*t.getBoundingClientRect()[n])),
a<=0||null==a){if(a=k(t,n,o),(a<0||null==a)&&(a=t.style[n]),Je.test(a))return a;i=s&&(re.boxSizingReliable()||a===t.style[n]),a=parseFloat(a)||0}return a+Y(t,n,r||(s?"border":"content"),i,o)+"px";
}function E(e,t){for(var n,r,i,a=[],o=0,s=e.length;o<s;o++)r=e[o],r.style&&(a[o]=Le.get(r,"olddisplay"),n=r.style.display,t?(a[o]||"none"!==n||(r.style.display=""),
""===r.style.display&&Ee(r)&&(a[o]=Le.access(r,"olddisplay",L(r.nodeName)))):(i=Ee(r),"none"===n&&i||Le.set(r,"olddisplay",i?n:ae.css(r,"display"))));for(o=0;o<s;o++)r=e[o],
r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?a[o]||"":"none"));return e}function A(e,t,n,r,i){return new A.prototype.init(e,t,n,r,i);
}function F(){return e.setTimeout(function(){it=void 0}),it=ae.now()}function j(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=Ce[r],i["margin"+n]=i["padding"+n]=e;
return t&&(i.opacity=i.width=e),i}function P(e,t,n){for(var r,i=(R.tweeners[t]||[]).concat(R.tweeners["*"]),a=0,o=i.length;a<o;a++)if(r=i[a].call(n,t,e))return r;
}function O(e,t,n){var r,i,a,o,s,u,l,c,d=this,f={},p=e.style,m=e.nodeType&&Ee(e),h=Le.get(e,"fxshow");n.queue||(s=ae._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,
u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,ae.queue(e,"fx").length||s.empty.fire();
})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],l=ae.css(e,"display"),c="none"===l?Le.get(e,"olddisplay")||L(e.nodeName):l,
"inline"===c&&"none"===ae.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],
p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],ot.exec(i)){if(delete t[r],a=a||"toggle"===i,i===(m?"hide":"show")){if("show"!==i||!h||void 0===h[r])continue;
m=!0}f[r]=h&&h[r]||ae.style(e,r)}else l=void 0;if(ae.isEmptyObject(f))"inline"===("none"===l?L(e.nodeName):l)&&(p.display=l);else{h?"hidden"in h&&(m=h.hidden):h=Le.access(e,"fxshow",{}),
a&&(h.hidden=!m),m?ae(e).show():d.done(function(){ae(e).hide()}),d.done(function(){var t;Le.remove(e,"fxshow");for(t in f)ae.style(e,t,f[t])});for(r in f)o=P(m?h[r]:0,r,d),
r in h||(h[r]=o.start,m&&(o.end=o.start,o.start="width"===r||"height"===r?1:0))}}function H(e,t){var n,r,i,a,o;for(n in e)if(r=ae.camelCase(n),i=t[r],a=e[n],
ae.isArray(a)&&(i=a[1],a=e[n]=a[0]),n!==r&&(e[r]=a,delete e[n]),o=ae.cssHooks[r],o&&"expand"in o){a=o.expand(a),delete e[r];for(n in a)n in e||(e[n]=a[n],
t[n]=i)}else t[r]=i}function R(e,t,n){var r,i,a=0,o=R.prefilters.length,s=ae.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=it||F(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,a=1-r,o=0,u=l.tweens.length;o<u;o++)l.tweens[o].run(a);
return s.notifyWith(e,[l,a,n]),a<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:ae.extend({},t),opts:ae.extend(!0,{specialEasing:{},easing:ae.easing._default
},n),originalProperties:t,originalOptions:n,startTime:it||F(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ae.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),
s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(H(c,l.opts.specialEasing);a<o;a++)if(r=R.prefilters[a].call(l,e,c,l.opts))return ae.isFunction(r.stop)&&(ae._queueHooks(l.elem,l.opts.queue).stop=ae.proxy(r.stop,r)),
r;return ae.map(c,P,l),ae.isFunction(l.opts.start)&&l.opts.start.call(e,l),ae.fx.timer(ae.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always);
}function I(e){return e.getAttribute&&e.getAttribute("class")||""}function N(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,a=t.toLowerCase().match(we)||[];
if(ae.isFunction(n))for(;r=a[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function U(e,t,n,r){function i(s){
var u;return a[s]=!0,ae.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||a[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),
u}var a={},o=e===Lt;return i(t.dataTypes[0])||!a["*"]&&i("*")}function B(e,t){var n,r,i=ae.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);
return r&&ae.extend(!0,e,r),e}function W(e,t,n){for(var r,i,a,o,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));
if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)a=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){a=i;break}o||(o=i)}a=a||o;
}if(a)return a!==u[0]&&u.unshift(a),n[a]}function z(e,t,n,r){var i,a,o,s,u,l={},c=e.dataTypes.slice();if(c[1])for(o in e.converters)l[o.toLowerCase()]=e.converters[o];
for(a=c.shift();a;)if(e.responseFields[a]&&(n[e.responseFields[a]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=a,a=c.shift())if("*"===a)a=u;else if("*"!==u&&u!==a){
if(o=l[u+" "+a]||l["* "+a],!o)for(i in l)if(s=i.split(" "),s[1]===a&&(o=l[u+" "+s[0]]||l["* "+s[0]])){o===!0?o=l[i]:l[i]!==!0&&(a=s[0],c.unshift(s[1]));
break}if(o!==!0)if(o&&e.throws)t=o(t);else try{t=o(t)}catch(e){return{state:"parsererror",error:o?e:"No conversion from "+u+" to "+a}}}return{state:"success",
data:t}}function q(e,t,n,r){var i;if(ae.isArray(t))ae.each(t,function(t,i){n||St.test(e)?r(e,i):q(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==ae.type(t))r(e,t);else for(i in t)q(e+"["+i+"]",t[i],n,r);
}function V(e){return ae.isWindow(e)?e:9===e.nodeType&&e.defaultView}var G=[],J=e.document,X=G.slice,K=G.concat,Z=G.push,Q=G.indexOf,ee={},te=ee.toString,ne=ee.hasOwnProperty,re={},ie="2.2.0",ae=function(e,t){
return new ae.fn.init(e,t)},oe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,se=/^-ms-/,ue=/-([\da-z])/gi,le=function(e,t){return t.toUpperCase()};ae.fn=ae.prototype={
jquery:ie,constructor:ae,selector:"",length:0,toArray:function(){return X.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:X.call(this);
},pushStack:function(e){var t=ae.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e){return ae.each(this,e);
},map:function(e){return this.pushStack(ae.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(X.apply(this,arguments));
},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[]);
},end:function(){return this.prevObject||this.constructor()},push:Z,sort:G.sort,splice:G.splice},ae.extend=ae.fn.extend=function(){var e,t,n,r,i,a,o=arguments[0]||{},s=1,u=arguments.length,l=!1;
for("boolean"==typeof o&&(l=o,o=arguments[s]||{},s++),"object"==typeof o||ae.isFunction(o)||(o={}),s===u&&(o=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=o[t],
r=e[t],o!==r&&(l&&r&&(ae.isPlainObject(r)||(i=ae.isArray(r)))?(i?(i=!1,a=n&&ae.isArray(n)?n:[]):a=n&&ae.isPlainObject(n)?n:{},o[t]=ae.extend(l,a,r)):void 0!==r&&(o[t]=r));
return o},ae.extend({expando:"jQuery"+(ie+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){
return"function"===ae.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString();return!ae.isArray(e)&&t-parseFloat(t)+1>=0;
},isPlainObject:function(e){return"object"===ae.type(e)&&!e.nodeType&&!ae.isWindow(e)&&!(e.constructor&&!ne.call(e.constructor.prototype,"isPrototypeOf"));
},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?ee[te.call(e)]||"object":typeof e;
},globalEval:function(e){var t,n=eval;e=ae.trim(e),e&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):n(e));
},camelCase:function(e){return e.replace(se,"ms-").replace(ue,le)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase();
},each:function(e,t){var r,i=0;if(n(e))for(r=e.length;i<r&&t.call(e[i],i,e[i])!==!1;i++);else for(i in e)if(t.call(e[i],i,e[i])===!1)break;return e},trim:function(e){
return null==e?"":(e+"").replace(oe,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?ae.merge(r,"string"==typeof e?[e]:e):Z.call(r,e)),
r},inArray:function(e,t,n){return null==t?-1:Q.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,
e},grep:function(e,t,n){for(var r,i=[],a=0,o=e.length,s=!n;a<o;a++)r=!t(e[a],a),r!==s&&i.push(e[a]);return i},map:function(e,t,r){var i,a,o=0,s=[];if(n(e))for(i=e.length;o<i;o++)a=t(e[o],o,r),
null!=a&&s.push(a);else for(o in e)a=t(e[o],o,r),null!=a&&s.push(a);return K.apply([],s)},guid:1,proxy:function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],
t=e,e=n),ae.isFunction(e))return r=X.call(arguments,2),i=function(){return e.apply(t||this,r.concat(X.call(arguments)))},i.guid=e.guid=e.guid||ae.guid++,
i},now:Date.now,support:re}),"function"==typeof Symbol&&(ae.fn[Symbol.iterator]=G[Symbol.iterator]),ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){
ee["[object "+t+"]"]=t.toLowerCase()});var ce=function(e){function t(e,t,n,r){var i,a,o,s,u,l,d,p,m=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;
if(!r&&((t?t.ownerDocument||t:I)!==E&&C(t),t=t||E,F)){if(11!==h&&(l=ge.exec(e)))if(i=l[1]){if(9===h){if(!(o=t.getElementById(i)))return n;if(o.id===i)return n.push(o),
n}else if(m&&(o=m.getElementById(i))&&H(t,o)&&o.id===i)return n.push(o),n}else{if(l[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((i=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(i)),
n}if(w.qsa&&!z[e+" "]&&(!j||!j.test(e))){if(1!==h)m=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(ye,"\\$&"):t.setAttribute("id",s=R),
d=L(e),a=d.length,u=fe.test(s)?"#"+s:"[id='"+s+"']";a--;)d[a]=u+" "+f(d[a]);p=d.join(","),m=ve.test(e)&&c(t.parentNode)||t}if(p)try{return Z.apply(n,m.querySelectorAll(p)),
n}catch(e){}finally{s===R&&t.removeAttribute("id")}}}return x(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>M.cacheLength&&delete e[t.shift()],
e[n+" "]=r}var t=[];return e}function r(e){return e[R]=!0,e}function i(e){var t=E.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),
t=null}}function a(e,t){for(var n=e.split("|"),r=n.length;r--;)M.attrHandle[n[r]]=t}function o(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);
if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e;
}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,
r(function(n,r){for(var i,a=e([],n.length,t),o=a.length;o--;)n[i=a[o]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e;
}function d(){}function f(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=n&&"parentNode"===r,a=U++;return t.first?function(t,n,a){
for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,a)}:function(t,n,o){var s,u,l,c=[N,a];if(o){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,o))return!0}else for(;t=t[r];)if(1===t.nodeType||i){
if(l=t[R]||(t[R]={}),u=l[t.uniqueID]||(l[t.uniqueID]={}),(s=u[r])&&s[0]===N&&s[1]===a)return c[2]=s[2];if(u[r]=c,c[2]=e(t,n,o))return!0}}}function m(e){
return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function h(e,n,r){for(var i=0,a=n.length;i<a;i++)t(e,n[i],r);
return r}function _(e,t,n,r,i){for(var a,o=[],s=0,u=e.length,l=null!=t;s<u;s++)(a=e[s])&&(n&&!n(a,r,i)||(o.push(a),l&&t.push(s)));return o}function g(e,t,n,i,a,o){
return i&&!i[R]&&(i=g(i)),a&&!a[R]&&(a=g(a,o)),r(function(r,o,s,u){var l,c,d,f=[],p=[],m=o.length,g=r||h(t||"*",s.nodeType?[s]:s,[]),v=!e||!r&&t?g:_(g,f,e,s,u),y=n?a||(r?e:m||i)?[]:o:v;
if(n&&n(v,y,s,u),i)for(l=_(y,p),i(l,[],s,u),c=l.length;c--;)(d=l[c])&&(y[p[c]]=!(v[p[c]]=d));if(r){if(a||e){if(a){for(l=[],c=y.length;c--;)(d=y[c])&&l.push(v[c]=d);
a(null,y=[],l,u)}for(c=y.length;c--;)(d=y[c])&&(l=a?ee(r,d):f[c])>-1&&(r[l]=!(o[l]=d))}}else y=_(y===o?y.splice(m,y.length):y),a?a(null,o,y,u):Z.apply(o,y);
})}function v(e){for(var t,n,r,i=e.length,a=M.relative[e[0].type],o=a||M.relative[" "],s=a?1:0,u=p(function(e){return e===t},o,!0),l=p(function(e){return ee(t,e)>-1;
},o,!0),c=[function(e,n,r){var i=!a&&(r||n!==T)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];s<i;s++)if(n=M.relative[e[s].type])c=[p(m(c),n)];else{
if(n=M.filter[e[s].type].apply(null,e[s].matches),n[R]){for(r=++s;r<i&&!M.relative[e[r].type];r++);return g(s>1&&m(c),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""
})).replace(se,"$1"),n,s<r&&v(e.slice(s,r)),r<i&&v(e=e.slice(r)),r<i&&f(e))}c.push(n)}return m(c)}function y(e,n){var i=n.length>0,a=e.length>0,o=function(r,o,s,u,l){
var c,d,f,p=0,m="0",h=r&&[],g=[],v=T,y=r||a&&M.find.TAG("*",l),b=N+=null==v?1:Math.random()||.1,w=y.length;for(l&&(T=o===E||o||l);m!==w&&null!=(c=y[m]);m++){
if(a&&c){for(d=0,o||c.ownerDocument===E||(C(c),s=!F);f=e[d++];)if(f(c,o||E,s)){u.push(c);break}l&&(N=b)}i&&((c=!f&&c)&&p--,r&&h.push(c))}if(p+=m,i&&m!==p){
for(d=0;f=n[d++];)f(h,g,o,s);if(r){if(p>0)for(;m--;)h[m]||g[m]||(g[m]=X.call(u));g=_(g)}Z.apply(u,g),l&&!r&&g.length>0&&p+n.length>1&&t.uniqueSort(u)}return l&&(N=b,
T=v),h};return i?r(o):o}var b,w,M,D,$,L,k,x,T,S,Y,C,E,A,F,j,P,O,H,R="sizzle"+1*new Date,I=e.document,N=0,U=0,B=n(),W=n(),z=n(),q=function(e,t){return e===t&&(Y=!0),
0},V=1<<31,G={}.hasOwnProperty,J=[],X=J.pop,K=J.push,Z=J.push,Q=J.slice,ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",ae=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",oe=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),de=new RegExp(ae),fe=new RegExp("^"+re+"$"),pe={
ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),
bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")
},me=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,_e=/^[^{]+\{\s*\[native \w/,ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,ye=/'|\\/g,be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),we=function(e,t,n){
var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Me=function(){C()};try{Z.apply(J=Q.call(I.childNodes),I.childNodes),
J[I.childNodes.length].nodeType}catch(e){Z={apply:J.length?function(e,t){K.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1;
}}}w=t.support={},$=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},C=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:I;
return r!==E&&9===r.nodeType&&r.documentElement?(E=r,A=E.documentElement,F=!$(E),(n=E.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Me,!1):n.attachEvent&&n.attachEvent("onunload",Me)),
w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(E.createComment("")),
!e.getElementsByTagName("*").length}),w.getElementsByClassName=_e.test(E.getElementsByClassName),w.getById=i(function(e){return A.appendChild(e).id=R,!E.getElementsByName||!E.getElementsByName(R).length;
}),w.getById?(M.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&F){var n=t.getElementById(e);return n?[n]:[]}},M.filter.ID=function(e){var t=e.replace(be,we);
return function(e){return e.getAttribute("id")===t}}):(delete M.find.ID,M.filter.ID=function(e){var t=e.replace(be,we);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");
return n&&n.value===t}}),M.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0;
}:function(e,t){var n,r=[],i=0,a=t.getElementsByTagName(e);if("*"===e){for(;n=a[i++];)1===n.nodeType&&r.push(n);return r}return a},M.find.CLASS=w.getElementsByClassName&&function(e,t){
if("undefined"!=typeof t.getElementsByClassName&&F)return t.getElementsByClassName(e)},P=[],j=[],(w.qsa=_e.test(E.querySelectorAll))&&(i(function(e){A.appendChild(e).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",
e.querySelectorAll("[msallowcapture^='']").length&&j.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||j.push("\\["+ne+"*(?:value|"+te+")"),
e.querySelectorAll("[id~="+R+"-]").length||j.push("~="),e.querySelectorAll(":checked").length||j.push(":checked"),e.querySelectorAll("a#"+R+"+*").length||j.push(".#.+[+~]");
}),i(function(e){var t=E.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&j.push("name"+ne+"*[*^$|!~]?="),
e.querySelectorAll(":enabled").length||j.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),j.push(",.*:")})),(w.matchesSelector=_e.test(O=A.matches||A.webkitMatchesSelector||A.mozMatchesSelector||A.oMatchesSelector||A.msMatchesSelector))&&i(function(e){
w.disconnectedMatch=O.call(e,"div"),O.call(e,"[s!='']:x"),P.push("!=",ae)}),j=j.length&&new RegExp(j.join("|")),P=P.length&&new RegExp(P.join("|")),t=_e.test(A.compareDocumentPosition),
H=t||_e.test(A.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)));
}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},q=t?function(e,t){if(e===t)return Y=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===E||e.ownerDocument===I&&H(I,e)?-1:t===E||t.ownerDocument===I&&H(I,t)?1:S?ee(S,e)-ee(S,t):0:4&n?-1:1);
}:function(e,t){if(e===t)return Y=!0,0;var n,r=0,i=e.parentNode,a=t.parentNode,s=[e],u=[t];if(!i||!a)return e===E?-1:t===E?1:i?-1:a?1:S?ee(S,e)-ee(S,t):0;
if(i===a)return o(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?o(s[r],u[r]):s[r]===I?-1:u[r]===I?1:0;
},E):E},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==E&&C(e),n=n.replace(ce,"='$1']"),w.matchesSelector&&F&&!z[n+" "]&&(!P||!P.test(n))&&(!j||!j.test(n)))try{
var r=O.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,E,null,[e]).length>0},t.contains=function(e,t){
return(e.ownerDocument||e)!==E&&C(e),H(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==E&&C(e);var n=M.attrHandle[t.toLowerCase()],r=n&&G.call(M.attrHandle,t.toLowerCase())?n(e,t,!F):void 0;
return void 0!==r?r:w.attributes||!F?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e);
},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(Y=!w.detectDuplicates,S=!w.sortStable&&e.slice(0),e.sort(q),Y){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1);
}return S=null,e},D=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;
for(e=e.firstChild;e;e=e.nextSibling)n+=D(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=D(t);return n},M=t.selectors={cacheLength:50,
createPseudo:r,match:pe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{
dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,we),e[3]=(e[3]||e[4]||e[5]||"").replace(be,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),
e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),
e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return pe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=L(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),
e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,we).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t;
}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"");
})},ATTR:function(e,n,r){return function(i){var a=t.attr(i,e);return null==a?"!="===n:!n||(a+="","="===n?a===r:"!="===n?a!==r:"^="===n?r&&0===a.indexOf(r):"*="===n?r&&a.indexOf(r)>-1:"$="===n?r&&a.slice(-r.length)===r:"~="===n?(" "+a.replace(oe," ")+" ").indexOf(r)>-1:"|="===n&&(a===r||a.slice(0,r.length+1)===r+"-"));
}},CHILD:function(e,t,n,r,i){var a="nth"!==e.slice(0,3),o="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){
var l,c,d,f,p,m,h=a!==o?"nextSibling":"previousSibling",_=t.parentNode,g=s&&t.nodeName.toLowerCase(),v=!u&&!s,y=!1;if(_){if(a){for(;h;){for(f=t;f=f[h];)if(s?f.nodeName.toLowerCase()===g:1===f.nodeType)return!1;
m=h="only"===e&&!m&&"nextSibling"}return!0}if(m=[o?_.firstChild:_.lastChild],o&&v){for(f=_,d=f[R]||(f[R]={}),c=d[f.uniqueID]||(d[f.uniqueID]={}),l=c[e]||[],
p=l[0]===N&&l[1],y=p&&l[2],f=p&&_.childNodes[p];f=++p&&f&&f[h]||(y=p=0)||m.pop();)if(1===f.nodeType&&++y&&f===t){c[e]=[N,p,y];break}}else if(v&&(f=t,d=f[R]||(f[R]={}),
c=d[f.uniqueID]||(d[f.uniqueID]={}),l=c[e]||[],p=l[0]===N&&l[1],y=p),y===!1)for(;(f=++p&&f&&f[h]||(y=p=0)||m.pop())&&((s?f.nodeName.toLowerCase()!==g:1!==f.nodeType)||!++y||(v&&(d=f[R]||(f[R]={}),
c=d[f.uniqueID]||(d[f.uniqueID]={}),c[e]=[N,y]),f!==t)););return y-=i,y===r||y%r===0&&y/r>=0}}},PSEUDO:function(e,n){var i,a=M.pseudos[e]||M.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);
return a[R]?a(n):a.length>1?(i=[e,e,"",n],M.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=a(e,n),o=i.length;o--;)r=ee(e,i[o]),
e[r]=!(t[r]=i[o])}):function(e){return a(e,0,i)}):a}},pseudos:{not:r(function(e){var t=[],n=[],i=k(e.replace(se,"$1"));return i[R]?r(function(e,t,n,r){
for(var a,o=i(e,null,r,[]),s=e.length;s--;)(a=o[s])&&(e[s]=!(t[s]=a))}):function(e,r,a){return t[0]=e,i(t,null,a,n),t[0]=null,!n.pop()}}),has:r(function(e){
return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(be,we),function(t){return(t.textContent||t.innerText||D(t)).indexOf(e)>-1;
}}),lang:r(function(e){return fe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,we).toLowerCase(),function(t){var n;do if(n=F?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),
n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id;
},root:function(e){return e===A},focus:function(e){return e===E.activeElement&&(!E.hasFocus||E.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){
return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected;
},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;
return!0},parent:function(e){return!M.pseudos.empty(e)},header:function(e){return he.test(e.nodeName)},input:function(e){return me.test(e.nodeName)},button:function(e){
var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase());
},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);
return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){
for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},M.pseudos.nth=M.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})M.pseudos[b]=s(b);
for(b in{submit:!0,reset:!0})M.pseudos[b]=u(b);return d.prototype=M.filters=M.pseudos,M.setFilters=new d,L=t.tokenize=function(e,n){var r,i,a,o,s,u,l,c=W[e+" "];
if(c)return n?0:c.slice(0);for(s=e,u=[],l=M.preFilter;s;){r&&!(i=ue.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(a=[])),r=!1,(i=le.exec(s))&&(r=i.shift(),
a.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length));for(o in M.filter)!(i=pe[o].exec(s))||l[o]&&!(i=l[o](i))||(r=i.shift(),a.push({value:r,
type:o,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):W(e,u).slice(0)},k=t.compile=function(e,t){var n,r=[],i=[],a=z[e+" "];
if(!a){for(t||(t=L(e)),n=t.length;n--;)a=v(t[n]),a[R]?r.push(a):i.push(a);a=z(e,y(i,r)),a.selector=e}return a},x=t.select=function(e,t,n,r){var i,a,o,s,u,l="function"==typeof e&&e,d=!r&&L(e=l.selector||e);
if(n=n||[],1===d.length){if(a=d[0]=d[0].slice(0),a.length>2&&"ID"===(o=a[0]).type&&w.getById&&9===t.nodeType&&F&&M.relative[a[1].type]){if(t=(M.find.ID(o.matches[0].replace(be,we),t)||[])[0],
!t)return n;l&&(t=t.parentNode),e=e.slice(a.shift().value.length)}for(i=pe.needsContext.test(e)?0:a.length;i--&&(o=a[i],!M.relative[s=o.type]);)if((u=M.find[s])&&(r=u(o.matches[0].replace(be,we),ve.test(a[0].type)&&c(t.parentNode)||t))){
if(a.splice(i,1),e=r.length&&f(a),!e)return Z.apply(n,r),n;break}}return(l||k(e,d))(r,t,!F,n,!t||ve.test(e)&&c(t.parentNode)||t),n},w.sortStable=R.split("").sort(q).join("")===R,
w.detectDuplicates=!!Y,C(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(E.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>",
"#"===e.firstChild.getAttribute("href")})||a("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){
return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||a("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue;
}),i(function(e){return null==e.getAttribute("disabled")})||a(te,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null;
}),t}(e);ae.find=ce,ae.expr=ce.selectors,ae.expr[":"]=ae.expr.pseudos,ae.uniqueSort=ae.unique=ce.uniqueSort,ae.text=ce.getText,ae.isXMLDoc=ce.isXML,ae.contains=ce.contains;
var de=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&ae(e).is(n))break;r.push(e)}return r},fe=function(e,t){
for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},pe=ae.expr.match.needsContext,me=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,he=/^.[^:#\[\.,]*$/;
ae.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ae.find.matchesSelector(r,e)?[r]:[]:ae.find.matches(e,ae.grep(t,function(e){
return 1===e.nodeType}))},ae.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(ae(e).filter(function(){
for(t=0;t<n;t++)if(ae.contains(i[t],this))return!0}));for(t=0;t<n;t++)ae.find(e,i[t],r);return r=this.pushStack(n>1?ae.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,
r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&pe.test(e)?ae(e):e||[],!1).length;
}});var _e,ge=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ve=ae.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||_e,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ge.exec(e),
!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof ae?t[0]:t,ae.merge(this,ae.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),
me.test(r[1])&&ae.isPlainObject(t))for(r in t)ae.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=J.getElementById(r[2]),i&&i.parentNode&&(this.length=1,
this[0]=i),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ae.isFunction(e)?void 0!==n.ready?n.ready(e):e(ae):(void 0!==e.selector&&(this.selector=e.selector,
this.context=e.context),ae.makeArray(e,this))};ve.prototype=ae.fn,_e=ae(J);var ye=/^(?:parents|prev(?:Until|All))/,be={children:!0,contents:!0,next:!0,
prev:!0};ae.fn.extend({has:function(e){var t=ae(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ae.contains(this,t[e]))return!0;
})},closest:function(e,t){for(var n,r=0,i=this.length,a=[],o=pe.test(e)||"string"!=typeof e?ae(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(o?o.index(n)>-1:1===n.nodeType&&ae.find.matchesSelector(n,e))){
a.push(n);break}return this.pushStack(a.length>1?ae.uniqueSort(a):a)},index:function(e){return e?"string"==typeof e?Q.call(ae(e),this[0]):Q.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;
},add:function(e,t){return this.pushStack(ae.uniqueSort(ae.merge(this.get(),ae(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e));
}}),ae.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return de(e,"parentNode")},parentsUntil:function(e,t,n){
return de(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return de(e,"nextSibling");
},prevAll:function(e){return de(e,"previousSibling")},nextUntil:function(e,t,n){return de(e,"nextSibling",n)},prevUntil:function(e,t,n){return de(e,"previousSibling",n);
},siblings:function(e){return fe((e.parentNode||{}).firstChild,e)},children:function(e){return fe(e.firstChild)},contents:function(e){return e.contentDocument||ae.merge([],e.childNodes);
}},function(e,t){ae.fn[e]=function(n,r){var i=ae.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ae.filter(r,i)),this.length>1&&(be[e]||ae.uniqueSort(i),
ye.test(e)&&i.reverse()),this.pushStack(i)}});var we=/\S+/g;ae.Callbacks=function(e){e="string"==typeof e?a(e):ae.extend({},e);var t,n,r,i,o=[],s=[],u=-1,l=function(){
for(i=e.once,r=t=!0;s.length;u=-1)for(n=s.shift();++u<o.length;)o[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=o.length,n=!1);e.memory||(n=!1),t=!1,i&&(o=n?[]:"");
},c={add:function(){return o&&(n&&!t&&(u=o.length-1,s.push(n)),function t(n){ae.each(n,function(n,r){ae.isFunction(r)?e.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==ae.type(r)&&t(r);
})}(arguments),n&&!t&&l()),this},remove:function(){return ae.each(arguments,function(e,t){for(var n;(n=ae.inArray(t,o,n))>-1;)o.splice(n,1),n<=u&&u--}),
this},has:function(e){return e?ae.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){
return!o},lock:function(){return i=s=[],n||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],
s.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},ae.extend({Deferred:function(e){
var t=[["resolve","done",ae.Callbacks("once memory"),"resolved"],["reject","fail",ae.Callbacks("once memory"),"rejected"],["notify","progress",ae.Callbacks("memory")]],n="pending",r={
state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return ae.Deferred(function(n){
ae.each(t,function(t,a){var o=ae.isFunction(e[t])&&e[t];i[a[1]](function(){var e=o&&o.apply(this,arguments);e&&ae.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[a[0]+"With"](this===r?n.promise():this,o?[e]:arguments);
})}),e=null}).promise()},promise:function(e){return null!=e?ae.extend(e,r):r}},i={};return r.pipe=r.then,ae.each(t,function(e,a){var o=a[2],s=a[3];r[a[1]]=o.add,
s&&o.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[a[0]]=function(){return i[a[0]+"With"](this===i?r:this,arguments),this},i[a[0]+"With"]=o.fireWith;
}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,a=X.call(arguments),o=a.length,s=1!==o||e&&ae.isFunction(e.promise)?o:0,u=1===s?e:ae.Deferred(),l=function(e,n,r){
return function(i){n[e]=this,r[e]=arguments.length>1?X.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(o>1)for(t=new Array(o),n=new Array(o),
r=new Array(o);i<o;i++)a[i]&&ae.isFunction(a[i].promise)?a[i].promise().progress(l(i,n,t)).done(l(i,r,a)).fail(u.reject):--s;return s||u.resolveWith(r,a),
u.promise()}});var Me;ae.fn.ready=function(e){return ae.ready.promise().done(e),this},ae.extend({isReady:!1,readyWait:1,holdReady:function(e){e?ae.readyWait++:ae.ready(!0);
},ready:function(e){(e===!0?--ae.readyWait:ae.isReady)||(ae.isReady=!0,e!==!0&&--ae.readyWait>0||(Me.resolveWith(J,[ae]),ae.fn.triggerHandler&&(ae(J).triggerHandler("ready"),
ae(J).off("ready"))))}}),ae.ready.promise=function(t){return Me||(Me=ae.Deferred(),"complete"===J.readyState||"loading"!==J.readyState&&!J.documentElement.doScroll?e.setTimeout(ae.ready):(J.addEventListener("DOMContentLoaded",o),
e.addEventListener("load",o))),Me.promise(t)},ae.ready.promise();var De=function(e,t,n,r,i,a,o){var s=0,u=e.length,l=null==n;if("object"===ae.type(n)){
i=!0;for(s in n)De(e,t,s,n[s],!0,a,o)}else if(void 0!==r&&(i=!0,ae.isFunction(r)||(o=!0),l&&(o?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ae(e),n);
})),t))for(;s<u;s++)t(e[s],n,o?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):a},$e=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType;
};s.uid=1,s.prototype={register:function(e,t){var n=t||{};return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,
configurable:!0}),e[this.expando]},cache:function(e){if(!$e(e))return{};var t=e[this.expando];return t||(t={},$e(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{
value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[t]=n;else for(r in t)i[r]=t[r];return i},get:function(e,t){
return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),
void 0!==r?r:this.get(e,ae.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,a=e[this.expando];if(void 0!==a){if(void 0===t)this.register(e);else{
ae.isArray(t)?r=t.concat(t.map(ae.camelCase)):(i=ae.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(we)||[])),n=r.length;for(;n--;)delete a[r[n]];
}(void 0===t||ae.isEmptyObject(a))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ae.isEmptyObject(t);
}};var Le=new s,ke=new s,xe=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Te=/[A-Z]/g;ae.extend({hasData:function(e){return ke.hasData(e)||Le.hasData(e)},data:function(e,t,n){
return ke.access(e,t,n)},removeData:function(e,t){ke.remove(e,t)},_data:function(e,t,n){return Le.access(e,t,n)},_removeData:function(e,t){Le.remove(e,t);
}}),ae.fn.extend({data:function(e,t){var n,r,i,a=this[0],o=a&&a.attributes;if(void 0===e){if(this.length&&(i=ke.get(a),1===a.nodeType&&!Le.get(a,"hasDataAttrs"))){
for(n=o.length;n--;)o[n]&&(r=o[n].name,0===r.indexOf("data-")&&(r=ae.camelCase(r.slice(5)),u(a,r,i[r])));Le.set(a,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){
ke.set(this,e)}):De(this,function(t){var n,r;if(a&&void 0===t){if(n=ke.get(a,e)||ke.get(a,e.replace(Te,"-$&").toLowerCase()),void 0!==n)return n;if(r=ae.camelCase(e),
n=ke.get(a,r),void 0!==n)return n;if(n=u(a,r,void 0),void 0!==n)return n}else r=ae.camelCase(e),this.each(function(){var n=ke.get(this,r);ke.set(this,r,t),
e.indexOf("-")>-1&&void 0!==n&&ke.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ke.remove(this,e);
})}}),ae.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Le.get(e,t),n&&(!r||ae.isArray(n)?r=Le.access(e,t,ae.makeArray(n)):r.push(n)),
r||[]},dequeue:function(e,t){t=t||"fx";var n=ae.queue(e,t),r=n.length,i=n.shift(),a=ae._queueHooks(e,t),o=function(){ae.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),
r--),i&&("fx"===t&&n.unshift("inprogress"),delete a.stop,i.call(e,o,a)),!r&&a&&a.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Le.get(e,n)||Le.access(e,n,{
empty:ae.Callbacks("once memory").add(function(){Le.remove(e,[t+"queue",n])})})}}),ae.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,
e="fx",n--),arguments.length<n?ae.queue(this[0],e):void 0===t?this:this.each(function(){var n=ae.queue(this,e,t);ae._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ae.dequeue(this,e);
})},dequeue:function(e){return this.each(function(){ae.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ae.Deferred(),a=this,o=this.length,s=function(){
--r||i.resolveWith(a,[a])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";o--;)n=Le.get(a[o],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),
i.promise(t)}});var Se=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ye=new RegExp("^(?:([+-])=|)("+Se+")([a-z%]*)$","i"),Ce=["Top","Right","Bottom","Left"],Ee=function(e,t){
return e=t||e,"none"===ae.css(e,"display")||!ae.contains(e.ownerDocument,e)},Ae=/^(?:checkbox|radio)$/i,Fe=/<([\w:-]+)/,je=/^$|\/(?:java|ecma)script/i,Pe={
option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Pe.optgroup=Pe.option,Pe.tbody=Pe.tfoot=Pe.colgroup=Pe.caption=Pe.thead,Pe.th=Pe.td;
var Oe=/<|&#?\w+;/;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),
n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),re.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",
re.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var He=/^key/,Re=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ie=/^([^.]*)(?:\.(.+)|)/;
ae.event={global:{},add:function(e,t,n,r,i){var a,o,s,u,l,c,d,f,p,m,h,_=Le.get(e);if(_)for(n.handler&&(a=n,n=a.handler,i=a.selector),n.guid||(n.guid=ae.guid++),
(u=_.events)||(u=_.events={}),(o=_.handle)||(o=_.handle=function(t){return"undefined"!=typeof ae&&ae.event.triggered!==t.type?ae.event.dispatch.apply(e,arguments):void 0;
}),t=(t||"").match(we)||[""],l=t.length;l--;)s=Ie.exec(t[l])||[],p=h=s[1],m=(s[2]||"").split(".").sort(),p&&(d=ae.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,
d=ae.event.special[p]||{},c=ae.extend({type:p,origType:h,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ae.expr.match.needsContext.test(i),namespace:m.join(".")
},a),(f=u[p])||(f=u[p]=[],f.delegateCount=0,d.setup&&d.setup.call(e,r,m,o)!==!1||e.addEventListener&&e.addEventListener(p,o)),d.add&&(d.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),
i?f.splice(f.delegateCount++,0,c):f.push(c),ae.event.global[p]=!0)},remove:function(e,t,n,r,i){var a,o,s,u,l,c,d,f,p,m,h,_=Le.hasData(e)&&Le.get(e);if(_&&(u=_.events)){
for(t=(t||"").match(we)||[""],l=t.length;l--;)if(s=Ie.exec(t[l])||[],p=h=s[1],m=(s[2]||"").split(".").sort(),p){for(d=ae.event.special[p]||{},p=(r?d.delegateType:d.bindType)||p,
f=u[p]||[],s=s[2]&&new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"),o=a=f.length;a--;)c=f[a],!i&&h!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(a,1),
c.selector&&f.delegateCount--,d.remove&&d.remove.call(e,c));o&&!f.length&&(d.teardown&&d.teardown.call(e,m,_.handle)!==!1||ae.removeEvent(e,p,_.handle),
delete u[p])}else for(p in u)ae.event.remove(e,p+t[l],n,r,!0);ae.isEmptyObject(u)&&Le.remove(e,"handle events")}},dispatch:function(e){e=ae.event.fix(e);
var t,n,r,i,a,o=[],s=X.call(arguments),u=(Le.get(this,"events")||{})[e.type]||[],l=ae.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){
for(o=ae.event.handlers.call(this,e,u),t=0;(i=o[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(a=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.rnamespace&&!e.rnamespace.test(a.namespace)||(e.handleObj=a,
e.data=a.data,r=((ae.event.special[a.origType]||{}).handle||a.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));
return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,a,o=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){
for(r=[],n=0;n<s;n++)a=t[n],i=a.selector+" ",void 0===r[i]&&(r[i]=a.needsContext?ae(i,this).index(u)>-1:ae.find(i,this,null,[u]).length),r[i]&&r.push(a);
r.length&&o.push({elem:u,handlers:r})}return s<t.length&&o.push({elem:this,handlers:t.slice(s)}),o},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),
e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,a=t.button;
return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||J,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),
e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){
if(e[ae.expando])return e;var t,n,r,i=e.type,a=e,o=this.fixHooks[i];for(o||(this.fixHooks[i]=o=Re.test(i)?this.mouseHooks:He.test(i)?this.keyHooks:{}),
r=o.props?this.props.concat(o.props):this.props,e=new ae.Event(a),t=r.length;t--;)n=r[t],e[n]=a[n];return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),
o.filter?o.filter(e,a):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==h()&&this.focus)return this.focus(),!1},delegateType:"focusin"
},blur:{trigger:function(){if(this===h()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&ae.nodeName(this,"input"))return this.click(),
!1},_default:function(e){return ae.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result);
}}}},ae.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},ae.Event=function(e,t){return this instanceof ae.Event?(e&&e.type?(this.originalEvent=e,
this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?p:m):this.type=e,t&&ae.extend(this,t),this.timeStamp=e&&e.timeStamp||ae.now(),
void(this[ae.expando]=!0)):new ae.Event(e,t)},ae.Event.prototype={constructor:ae.Event,isDefaultPrevented:m,isPropagationStopped:m,isImmediatePropagationStopped:m,
preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=p,e&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;
this.isPropagationStopped=p,e&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=p,e&&e.stopImmediatePropagation(),
this.stopPropagation()}},ae.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ae.event.special[e]={
delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,a=e.handleObj;return i&&(i===r||ae.contains(r,i))||(e.type=a.origType,n=a.handler.apply(this,arguments),
e.type=t),n}}}),ae.fn.extend({on:function(e,t,n,r){return _(this,e,t,n,r)},one:function(e,t,n,r){return _(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,
ae(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);
return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=m),this.each(function(){ae.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Ue=/<script|<style|<link/i,Be=/checked\s*(?:[^=]|=\s*.checked.)/i,We=/^true\/(.*)/,ze=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
ae.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,a,o,s=e.cloneNode(!0),u=ae.contains(e.ownerDocument,e);
if(!(re.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ae.isXMLDoc(e)))for(o=c(s),a=c(e),r=0,i=a.length;r<i;r++)w(a[r],o[r]);if(t)if(n)for(a=a||c(e),
o=o||c(s),r=0,i=a.length;r<i;r++)b(a[r],o[r]);else b(e,s);return o=c(s,"script"),o.length>0&&d(o,!u&&c(e,"script")),s},cleanData:function(e){for(var t,n,r,i=ae.event.special,a=0;void 0!==(n=e[a]);a++)if($e(n)){
if(t=n[Le.expando]){if(t.events)for(r in t.events)i[r]?ae.event.remove(n,r):ae.removeEvent(n,r,t.handle);n[Le.expando]=void 0}n[ke.expando]&&(n[ke.expando]=void 0);
}}}),ae.fn.extend({domManip:M,detach:function(e){return D(this,e,!0)},remove:function(e){return D(this,e)},text:function(e){return De(this,function(e){
return void 0===e?ae.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length);
},append:function(){return M(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=g(this,e);t.appendChild(e)}});
},prepend:function(){return M(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=g(this,e);t.insertBefore(e,t.firstChild);
}})},before:function(){return M(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return M(this,arguments,function(e){
this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ae.cleanData(c(e,!1)),
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ae.clone(this,e,t)})},html:function(e){
return De(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ue.test(e)&&!Pe[(Fe.exec(e)||["",""])[1].toLowerCase()]){
e=ae.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(ae.cleanData(c(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length);
},replaceWith:function(){var e=[];return M(this,arguments,function(t){var n=this.parentNode;ae.inArray(this,e)<0&&(ae.cleanData(c(this)),n&&n.replaceChild(t,this));
},e)}}),ae.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ae.fn[e]=function(e){
for(var n,r=[],i=ae(e),a=i.length-1,o=0;o<=a;o++)n=o===a?this:this.clone(!0),ae(i[o])[t](n),Z.apply(r,n.get());return this.pushStack(r)}});var qe,Ve={HTML:"block",
BODY:"block"},Ge=/^margin/,Je=new RegExp("^("+Se+")(?!px)[a-z%]+$","i"),Xe=function(t){var n=t.ownerDocument.defaultView;return n.opener||(n=e),n.getComputedStyle(t);
},Ke=function(e,t,n,r){var i,a,o={};for(a in t)o[a]=e.style[a],e.style[a]=t[a];i=n.apply(e,r||[]);for(a in t)e.style[a]=o[a];return i},Ze=J.documentElement;
!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
s.innerHTML="",Ze.appendChild(o);var t=e.getComputedStyle(s);n="1%"!==t.top,a="2px"===t.marginLeft,r="4px"===t.width,s.style.marginRight="50%",i="4px"===t.marginRight,
Ze.removeChild(o)}var n,r,i,a,o=J.createElement("div"),s=J.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",
re.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
o.appendChild(s),ae.extend(re,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},pixelMarginRight:function(){return null==r&&t(),
i},reliableMarginLeft:function(){return null==r&&t(),a},reliableMarginRight:function(){var t,n=s.appendChild(J.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
n.style.marginRight=n.style.width="0",s.style.width="1px",Ze.appendChild(o),t=!parseFloat(e.getComputedStyle(n).marginRight),Ze.removeChild(o),s.removeChild(n),
t}}))}();var Qe=/^(none|table(?!-c[ea]).+)/,et={position:"absolute",visibility:"hidden",display:"block"},tt={letterSpacing:"0",fontWeight:"400"},nt=["Webkit","O","Moz","ms"],rt=J.createElement("div").style;
ae.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=k(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,
fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"
},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,a,o,s=ae.camelCase(t),u=e.style;return t=ae.cssProps[s]||(ae.cssProps[s]=T(s)||s),
o=ae.cssHooks[t]||ae.cssHooks[s],void 0===n?o&&"get"in o&&void 0!==(i=o.get(e,!1,r))?i:u[t]:(a=typeof n,"string"===a&&(i=Ye.exec(n))&&i[1]&&(n=l(e,t,i),
a="number"),null!=n&&n===n&&("number"===a&&(n+=i&&i[3]||(ae.cssNumber[s]?"":"px")),re.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),
o&&"set"in o&&void 0===(n=o.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var i,a,o,s=ae.camelCase(t);return t=ae.cssProps[s]||(ae.cssProps[s]=T(s)||s),
o=ae.cssHooks[t]||ae.cssHooks[s],o&&"get"in o&&(i=o.get(e,!0,n)),void 0===i&&(i=k(e,t,r)),"normal"===i&&t in tt&&(i=tt[t]),""===n||n?(a=parseFloat(i),n===!0||isFinite(a)?a||0:i):i;
}}),ae.each(["height","width"],function(e,t){ae.cssHooks[t]={get:function(e,n,r){if(n)return Qe.test(ae.css(e,"display"))&&0===e.offsetWidth?Ke(e,et,function(){
return C(e,t,r)}):C(e,t,r)},set:function(e,n,r){var i,a=r&&Xe(e),o=r&&Y(e,t,r,"border-box"===ae.css(e,"boxSizing",!1,a),a);return o&&(i=Ye.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,
n=ae.css(e,t)),S(e,n,o)}}}),ae.cssHooks.marginLeft=x(re.reliableMarginLeft,function(e,t){if(t)return(parseFloat(k(e,"marginLeft"))||e.getBoundingClientRect().left-Ke(e,{
marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),ae.cssHooks.marginRight=x(re.reliableMarginRight,function(e,t){if(t)return Ke(e,{
display:"inline-block"},k,[e,"marginRight"])}),ae.each({margin:"",padding:"",border:"Width"},function(e,t){ae.cssHooks[e+t]={expand:function(n){for(var r=0,i={},a="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Ce[r]+t]=a[r]||a[r-2]||a[0];
return i}},Ge.test(e)||(ae.cssHooks[e+t].set=S)}),ae.fn.extend({css:function(e,t){return De(this,function(e,t,n){var r,i,a={},o=0;if(ae.isArray(t)){for(r=Xe(e),
i=t.length;o<i;o++)a[t[o]]=ae.css(e,t[o],!1,r);return a}return void 0!==n?ae.style(e,t,n):ae.css(e,t)},e,t,arguments.length>1)},show:function(){return E(this,!0);
},hide:function(){return E(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ee(this)?ae(this).show():ae(this).hide();
})}}),ae.Tween=A,A.prototype={constructor:A,init:function(e,t,n,r,i,a){this.elem=e,this.prop=n,this.easing=i||ae.easing._default,this.options=t,this.start=this.now=this.cur(),
this.end=r,this.unit=a||(ae.cssNumber[n]?"":"px")},cur:function(){var e=A.propHooks[this.prop];return e&&e.get?e.get(this):A.propHooks._default.get(this);
},run:function(e){var t,n=A.propHooks[this.prop];return this.options.duration?this.pos=t=ae.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,
this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):A.propHooks._default.set(this),
this}},A.prototype.init.prototype=A.prototype,A.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ae.css(e.elem,e.prop,""),
t&&"auto"!==t?t:0)},set:function(e){ae.fx.step[e.prop]?ae.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[ae.cssProps[e.prop]]&&!ae.cssHooks[e.prop]?e.elem[e.prop]=e.now:ae.style(e.elem,e.prop,e.now+e.unit);
}}},A.propHooks.scrollTop=A.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ae.easing={linear:function(e){
return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ae.fx=A.prototype.init,ae.fx.step={};var it,at,ot=/^(?:toggle|show|hide)$/,st=/queueHooks$/;
ae.Animation=ae.extend(R,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return l(n.elem,e,Ye.exec(t),n),n}]},tweener:function(e,t){ae.isFunction(e)?(t=e,
e=["*"]):e=e.match(we);for(var n,r=0,i=e.length;r<i;r++)n=e[r],R.tweeners[n]=R.tweeners[n]||[],R.tweeners[n].unshift(t)},prefilters:[O],prefilter:function(e,t){
t?R.prefilters.unshift(e):R.prefilters.push(e)}}),ae.speed=function(e,t,n){var r=e&&"object"==typeof e?ae.extend({},e):{complete:n||!n&&t||ae.isFunction(e)&&e,
duration:e,easing:n&&t||t&&!ae.isFunction(t)&&t};return r.duration=ae.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ae.fx.speeds?ae.fx.speeds[r.duration]:ae.fx.speeds._default,
null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){ae.isFunction(r.old)&&r.old.call(this),r.queue&&ae.dequeue(this,r.queue);
},r},ae.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){
var i=ae.isEmptyObject(e),a=ae.speed(t,n,r),o=function(){var t=R(this,ae.extend({},e),a);(i||Le.get(this,"finish"))&&t.stop(!0)};return o.finish=o,i||a.queue===!1?this.each(o):this.queue(a.queue,o);
},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),
this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",a=ae.timers,o=Le.get(this);if(i)o[i]&&o[i].stop&&r(o[i]);else for(i in o)o[i]&&o[i].stop&&st.test(i)&&r(o[i]);
for(i=a.length;i--;)a[i].elem!==this||null!=e&&a[i].queue!==e||(a[i].anim.stop(n),t=!1,a.splice(i,1));!t&&n||ae.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),
this.each(function(){var t,n=Le.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],a=ae.timers,o=r?r.length:0;for(n.finish=!0,ae.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),
t=a.length;t--;)a[t].elem===this&&a[t].queue===e&&(a[t].anim.stop(!0),a.splice(t,1));for(t=0;t<o;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish;
})}}),ae.each(["toggle","show","hide"],function(e,t){var n=ae.fn[t];ae.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(j(t,!0),e,r,i);
}}),ae.each({slideDown:j("show"),slideUp:j("hide"),slideToggle:j("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"
}},function(e,t){ae.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ae.timers=[],ae.fx.tick=function(){var e,t=0,n=ae.timers;for(it=ae.now();t<n.length;t++)e=n[t],
e()||n[t]!==e||n.splice(t--,1);n.length||ae.fx.stop(),it=void 0},ae.fx.timer=function(e){ae.timers.push(e),e()?ae.fx.start():ae.timers.pop()},ae.fx.interval=13,
ae.fx.start=function(){at||(at=e.setInterval(ae.fx.tick,ae.fx.interval))},ae.fx.stop=function(){e.clearInterval(at),at=null},ae.fx.speeds={slow:600,fast:200,
_default:400},ae.fn.delay=function(t,n){return t=ae.fx?ae.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){
e.clearTimeout(i)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",
re.checkOn=""!==e.value,re.optSelected=n.selected,t.disabled=!0,re.optDisabled=!n.disabled,e=J.createElement("input"),e.value="t",e.type="radio",re.radioValue="t"===e.value;
}();var ut,lt=ae.expr.attrHandle;ae.fn.extend({attr:function(e,t){return De(this,ae.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){
ae.removeAttr(this,e)})}}),ae.extend({attr:function(e,t,n){var r,i,a=e.nodeType;if(3!==a&&8!==a&&2!==a)return"undefined"==typeof e.getAttribute?ae.prop(e,t,n):(1===a&&ae.isXMLDoc(e)||(t=t.toLowerCase(),
i=ae.attrHooks[t]||(ae.expr.match.bool.test(t)?ut:void 0)),void 0!==n?null===n?void ae.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),
n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=ae.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!re.radioValue&&"radio"===t&&ae.nodeName(e,"input")){
var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,a=t&&t.match(we);if(a&&1===e.nodeType)for(;n=a[i++];)r=ae.propFix[n]||n,
ae.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)}}),ut={set:function(e,t,n){return t===!1?ae.removeAttr(e,n):e.setAttribute(n,n),n}},ae.each(ae.expr.match.bool.source.match(/\w+/g),function(e,t){
var n=lt[t]||ae.find.attr;lt[t]=function(e,t,r){var i,a;return r||(a=lt[t],lt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,lt[t]=a),i}});var ct=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;
ae.fn.extend({prop:function(e,t){return De(this,ae.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[ae.propFix[e]||e];
})}}),ae.extend({prop:function(e,t,n){var r,i,a=e.nodeType;if(3!==a&&8!==a&&2!==a)return 1===a&&ae.isXMLDoc(e)||(t=ae.propFix[t]||t,i=ae.propHooks[t]),
void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ae.find.attr(e,"tabindex");
return t?parseInt(t,10):ct.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),re.optSelected||(ae.propHooks.selected={
get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),ae.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){
ae.propFix[this.toLowerCase()]=this});var ft=/[\t\r\n\f]/g;ae.fn.extend({addClass:function(e){var t,n,r,i,a,o,s,u=0;if(ae.isFunction(e))return this.each(function(t){
ae(this).addClass(e.call(this,t,I(this)))});if("string"==typeof e&&e)for(t=e.match(we)||[];n=this[u++];)if(i=I(n),r=1===n.nodeType&&(" "+i+" ").replace(ft," ")){
for(o=0;a=t[o++];)r.indexOf(" "+a+" ")<0&&(r+=a+" ");s=ae.trim(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,a,o,s,u=0;
if(ae.isFunction(e))return this.each(function(t){ae(this).removeClass(e.call(this,t,I(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(we)||[];n=this[u++];)if(i=I(n),
r=1===n.nodeType&&(" "+i+" ").replace(ft," ")){for(o=0;a=t[o++];)for(;r.indexOf(" "+a+" ")>-1;)r=r.replace(" "+a+" "," ");s=ae.trim(r),i!==s&&n.setAttribute("class",s);
}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):ae.isFunction(e)?this.each(function(n){
ae(this).toggleClass(e.call(this,n,I(this),t),t)}):this.each(function(){var t,r,i,a;if("string"===n)for(r=0,i=ae(this),a=e.match(we)||[];t=a[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||(t=I(this),
t&&Le.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Le.get(this,"__className__")||""))})},hasClass:function(e){
var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+I(n)+" ").replace(ft," ").indexOf(t)>-1)return!0;return!1}});var pt=/\r/g;ae.fn.extend({
val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=ae.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,ae(this).val()):e,
null==i?i="":"number"==typeof i?i+="":ae.isArray(i)&&(i=ae.map(i,function(e){return null==e?"":e+""})),t=ae.valHooks[this.type]||ae.valHooks[this.nodeName.toLowerCase()],
t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=ae.valHooks[i.type]||ae.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,
"string"==typeof n?n.replace(pt,""):null==n?"":n)}}}),ae.extend({valHooks:{option:{get:function(e){return ae.trim(e.value)}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,a="select-one"===e.type||i<0,o=a?null:[],s=a?i+1:r.length,u=i<0?s:a?i:0;u<s;u++)if(n=r[u],
(n.selected||u===i)&&(re.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!ae.nodeName(n.parentNode,"optgroup"))){if(t=ae(n).val(),
a)return t;o.push(t)}return o},set:function(e,t){for(var n,r,i=e.options,a=ae.makeArray(t),o=i.length;o--;)r=i[o],(r.selected=ae.inArray(ae.valHooks.option.get(r),a)>-1)&&(n=!0);
return n||(e.selectedIndex=-1),a}}}}),ae.each(["radio","checkbox"],function(){ae.valHooks[this]={set:function(e,t){if(ae.isArray(t))return e.checked=ae.inArray(ae(e).val(),t)>-1;
}},re.checkOn||(ae.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var mt=/^(?:focusinfocus|focusoutblur)$/;ae.extend(ae.event,{
trigger:function(t,n,r,i){var a,o,s,u,l,c,d,f=[r||J],p=ne.call(t,"type")?t.type:t,m=ne.call(t,"namespace")?t.namespace.split("."):[];if(o=s=r=r||J,3!==r.nodeType&&8!==r.nodeType&&!mt.test(p+ae.event.triggered)&&(p.indexOf(".")>-1&&(m=p.split("."),
p=m.shift(),m.sort()),l=p.indexOf(":")<0&&"on"+p,t=t[ae.expando]?t:new ae.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
t.result=void 0,t.target||(t.target=r),n=null==n?[t]:ae.makeArray(n,[t]),d=ae.event.special[p]||{},i||!d.trigger||d.trigger.apply(r,n)!==!1)){if(!i&&!d.noBubble&&!ae.isWindow(r)){
for(u=d.delegateType||p,mt.test(u+p)||(o=o.parentNode);o;o=o.parentNode)f.push(o),s=o;s===(r.ownerDocument||J)&&f.push(s.defaultView||s.parentWindow||e);
}for(a=0;(o=f[a++])&&!t.isPropagationStopped();)t.type=a>1?u:d.bindType||p,c=(Le.get(o,"events")||{})[t.type]&&Le.get(o,"handle"),c&&c.apply(o,n),c=l&&o[l],
c&&c.apply&&$e(o)&&(t.result=c.apply(o,n),t.result===!1&&t.preventDefault());return t.type=p,i||t.isDefaultPrevented()||d._default&&d._default.apply(f.pop(),n)!==!1||!$e(r)||l&&ae.isFunction(r[p])&&!ae.isWindow(r)&&(s=r[l],
s&&(r[l]=null),ae.event.triggered=p,r[p](),ae.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=ae.extend(new ae.Event,n,{type:e,
isSimulated:!0});ae.event.trigger(r,null,t),r.isDefaultPrevented()&&n.preventDefault()}}),ae.fn.extend({trigger:function(e,t){return this.each(function(){
ae.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ae.event.trigger(e,t,n,!0)}}),ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){
ae.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ae.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e);
}}),re.focusin="onfocusin"in e,re.focusin||ae.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){ae.event.simulate(t,e.target,ae.event.fix(e));
};ae.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Le.access(r,t);i||r.addEventListener(e,n,!0),Le.access(r,t,(i||0)+1)},teardown:function(){
var r=this.ownerDocument||this,i=Le.access(r,t)-1;i?Le.access(r,t,i):(r.removeEventListener(e,n,!0),Le.remove(r,t))}}});var ht=e.location,_t=ae.now(),gt=/\?/;
ae.parseJSON=function(e){return JSON.parse(e+"")},ae.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml");
}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||ae.error("Invalid XML: "+t),n};var vt=/#.*$/,yt=/([?&])_=[^&]*/,bt=/^(.*?):[ \t]*([^\r\n]*)$/gm,wt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Dt=/^\/\//,$t={},Lt={},kt="*/".concat("*"),xt=J.createElement("a");
xt.href=ht.href,ae.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ht.href,type:"GET",isLocal:wt.test(ht.protocol),global:!0,processData:!0,
async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":kt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",
json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",
json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ae.parseJSON,"text xml":ae.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){
return t?B(B(e,ae.ajaxSettings),t):B(ae.ajaxSettings,e)},ajaxPrefilter:N($t),ajaxTransport:N(Lt),ajax:function(t,n){function r(t,n,r,s){var l,d,v,y,w,D=n;
2!==b&&(b=2,u&&e.clearTimeout(u),i=void 0,o=s||"",M.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(y=W(f,M,r)),y=z(f,y,M,l),l?(f.ifModified&&(w=M.getResponseHeader("Last-Modified"),
w&&(ae.lastModified[a]=w),w=M.getResponseHeader("etag"),w&&(ae.etag[a]=w)),204===t||"HEAD"===f.type?D="nocontent":304===t?D="notmodified":(D=y.state,d=y.data,
v=y.error,l=!v)):(v=D,!t&&D||(D="error",t<0&&(t=0))),M.status=t,M.statusText=(n||D)+"",l?h.resolveWith(p,[d,D,M]):h.rejectWith(p,[M,D,v]),M.statusCode(g),
g=void 0,c&&m.trigger(l?"ajaxSuccess":"ajaxError",[M,f,l?d:v]),_.fireWith(p,[M,D]),c&&(m.trigger("ajaxComplete",[M,f]),--ae.active||ae.event.trigger("ajaxStop")));
}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,a,o,s,u,l,c,d,f=ae.ajaxSetup({},n),p=f.context||f,m=f.context&&(p.nodeType||p.jquery)?ae(p):ae.event,h=ae.Deferred(),_=ae.Callbacks("once memory"),g=f.statusCode||{},v={},y={},b=0,w="canceled",M={
readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=bt.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t;
},getAllResponseHeaders:function(){return 2===b?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){
return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)g[t]=[g[t],e[t]];else M.always(e[M.status]);return this},abort:function(e){
var t=e||w;return i&&i.abort(t),r(0,t),this}};if(h.promise(M).complete=_.add,M.success=M.done,M.error=M.fail,f.url=((t||f.url||ht.href)+"").replace(vt,"").replace(Dt,ht.protocol+"//"),
f.type=n.method||n.type||f.method||f.type,f.dataTypes=ae.trim(f.dataType||"*").toLowerCase().match(we)||[""],null==f.crossDomain){l=J.createElement("a");
try{l.href=f.url,l.href=l.href,f.crossDomain=xt.protocol+"//"+xt.host!=l.protocol+"//"+l.host}catch(e){f.crossDomain=!0}}if(f.data&&f.processData&&"string"!=typeof f.data&&(f.data=ae.param(f.data,f.traditional)),
U($t,f,n,M),2===b)return M;c=ae.event&&f.global,c&&0===ae.active++&&ae.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Mt.test(f.type),
a=f.url,f.hasContent||(f.data&&(a=f.url+=(gt.test(a)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=yt.test(a)?a.replace(yt,"$1_="+_t++):a+(gt.test(a)?"&":"?")+"_="+_t++)),
f.ifModified&&(ae.lastModified[a]&&M.setRequestHeader("If-Modified-Since",ae.lastModified[a]),ae.etag[a]&&M.setRequestHeader("If-None-Match",ae.etag[a])),
(f.data&&f.hasContent&&f.contentType!==!1||n.contentType)&&M.setRequestHeader("Content-Type",f.contentType),M.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+kt+"; q=0.01":""):f.accepts["*"]);
for(d in f.headers)M.setRequestHeader(d,f.headers[d]);if(f.beforeSend&&(f.beforeSend.call(p,M,f)===!1||2===b))return M.abort();w="abort";for(d in{success:1,
error:1,complete:1})M[d](f[d]);if(i=U(Lt,f,n,M)){if(M.readyState=1,c&&m.trigger("ajaxSend",[M,f]),2===b)return M;f.async&&f.timeout>0&&(u=e.setTimeout(function(){
M.abort("timeout")},f.timeout));try{b=1,i.send(v,r)}catch(e){if(!(b<2))throw e;r(-1,e)}}else r(-1,"No Transport");return M},getJSON:function(e,t,n){return ae.get(e,t,n,"json");
},getScript:function(e,t){return ae.get(e,void 0,t,"script")}}),ae.each(["get","post"],function(e,t){ae[t]=function(e,n,r,i){return ae.isFunction(n)&&(i=i||r,
r=n,n=void 0),ae.ajax(ae.extend({url:e,type:t,dataType:i,data:n,success:r},ae.isPlainObject(e)&&e))}}),ae._evalUrl=function(e){return ae.ajax({url:e,type:"GET",
dataType:"script",async:!1,global:!1,throws:!0})},ae.fn.extend({wrapAll:function(e){var t;return ae.isFunction(e)?this.each(function(t){ae(this).wrapAll(e.call(this,t));
}):(this[0]&&(t=ae(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;
return e}).append(this)),this)},wrapInner:function(e){return ae.isFunction(e)?this.each(function(t){ae(this).wrapInner(e.call(this,t))}):this.each(function(){
var t=ae(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ae.isFunction(e);return this.each(function(n){ae(this).wrapAll(t?e.call(this,n):e);
})},unwrap:function(){return this.parent().each(function(){ae.nodeName(this,"body")||ae(this).replaceWith(this.childNodes)}).end()}}),ae.expr.filters.hidden=function(e){
return!ae.expr.filters.visible(e)},ae.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0};var Tt=/%20/g,St=/\[\]$/,Yt=/\r?\n/g,Ct=/^(?:submit|button|image|reset|file)$/i,Et=/^(?:input|select|textarea|keygen)/i;
ae.param=function(e,t){var n,r=[],i=function(e,t){t=ae.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=ae.ajaxSettings&&ae.ajaxSettings.traditional),
ae.isArray(e)||e.jquery&&!ae.isPlainObject(e))ae.each(e,function(){i(this.name,this.value)});else for(n in e)q(n,e[n],t,i);return r.join("&").replace(Tt,"+");
},ae.fn.extend({serialize:function(){return ae.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ae.prop(this,"elements");
return e?ae.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ae(this).is(":disabled")&&Et.test(this.nodeName)&&!Ct.test(e)&&(this.checked||!Ae.test(e));
}).map(function(e,t){var n=ae(this).val();return null==n?null:ae.isArray(n)?ae.map(n,function(e){return{name:t.name,value:e.replace(Yt,"\r\n")}}):{name:t.name,
value:n.replace(Yt,"\r\n")}}).get()}}),ae.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var At={0:200,1223:204},Ft=ae.ajaxSettings.xhr();
re.cors=!!Ft&&"withCredentials"in Ft,re.ajax=Ft=!!Ft,ae.ajaxTransport(function(t){var n,r;if(re.cors||Ft&&!t.crossDomain)return{send:function(i,a){var o,s=t.xhr();
if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(o in t.xhrFields)s[o]=t.xhrFields[o];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),
t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(o in i)s.setRequestHeader(o,i[o]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,
"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?a(0,"error"):a(s.status,s.statusText):a(At[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{
binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){
4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n();
}}}),ae.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/
},converters:{"text script":function(e){return ae.globalEval(e),e}}}),ae.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET");
}),ae.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=ae("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){
t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var jt=[],Pt=/(=)\?(?=&|$)|\?\?/;ae.ajaxSetup({
jsonp:"callback",jsonpCallback:function(){var e=jt.pop()||ae.expando+"_"+_t++;return this[e]=!0,e}}),ae.ajaxPrefilter("json jsonp",function(t,n,r){var i,a,o,s=t.jsonp!==!1&&(Pt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Pt.test(t.data)&&"data");
if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=ae.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Pt,"$1"+i):t.jsonp!==!1&&(t.url+=(gt.test(t.url)?"&":"?")+t.jsonp+"="+i),
t.converters["script json"]=function(){return o||ae.error(i+" was not called"),o[0]},t.dataTypes[0]="json",a=e[i],e[i]=function(){o=arguments},r.always(function(){
void 0===a?ae(e).removeProp(i):e[i]=a,t[i]&&(t.jsonpCallback=n.jsonpCallback,jt.push(i)),o&&ae.isFunction(a)&&a(o[0]),o=a=void 0}),"script"}),re.createHTMLDocument=function(){
var e=J.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),ae.parseHTML=function(e,t,n){
if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||(re.createHTMLDocument?J.implementation.createHTMLDocument(""):J);var r=me.exec(e),i=!n&&[];
return r?[t.createElement(r[1])]:(r=f([e],t,i),i&&i.length&&ae(i).remove(),ae.merge([],r.childNodes))};var Ot=ae.fn.load;ae.fn.load=function(e,t,n){if("string"!=typeof e&&Ot)return Ot.apply(this,arguments);
var r,i,a,o=this,s=e.indexOf(" ");return s>-1&&(r=ae.trim(e.slice(s)),e=e.slice(0,s)),ae.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),
o.length>0&&ae.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){a=arguments,o.html(r?ae("<div>").append(ae.parseHTML(e)).find(r):e)}).always(n&&function(e,t){
o.each(function(){n.apply(o,a||[e.responseText,t,e])})}),this},ae.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){
ae.fn[t]=function(e){return this.on(t,e)}}),ae.expr.filters.animated=function(e){return ae.grep(ae.timers,function(t){return e===t.elem}).length},ae.offset={
setOffset:function(e,t,n){var r,i,a,o,s,u,l,c=ae.css(e,"position"),d=ae(e),f={};"static"===c&&(e.style.position="relative"),s=d.offset(),a=ae.css(e,"top"),
u=ae.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(a+u).indexOf("auto")>-1,l?(r=d.position(),o=r.top,i=r.left):(o=parseFloat(a)||0,i=parseFloat(u)||0),
ae.isFunction(t)&&(t=t.call(e,n,ae.extend({},s))),null!=t.top&&(f.top=t.top-s.top+o),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):d.css(f);
}},ae.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){ae.offset.setOffset(this,e,t)});var t,n,r=this[0],i={
top:0,left:0},a=r&&r.ownerDocument;if(a)return t=a.documentElement,ae.contains(t,r)?(i=r.getBoundingClientRect(),n=V(a),{top:i.top+n.pageYOffset-t.clientTop,
left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===ae.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),
t=this.offset(),ae.nodeName(e[0],"html")||(r=e.offset()),r.top+=ae.css(e[0],"borderTopWidth",!0)-e.scrollTop(),r.left+=ae.css(e[0],"borderLeftWidth",!0)-e.scrollLeft()),
{top:t.top-r.top-ae.css(n,"marginTop",!0),left:t.left-r.left-ae.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===ae.css(e,"position");)e=e.offsetParent;
return e||Ze})}}),ae.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;ae.fn[e]=function(r){return De(this,function(e,r,i){
var a=V(e);return void 0===i?a?a[t]:e[r]:void(a?a.scrollTo(n?a.pageXOffset:i,n?i:a.pageYOffset):e[r]=i)},e,r,arguments.length)}}),ae.each(["top","left"],function(e,t){
ae.cssHooks[t]=x(re.pixelPosition,function(e,n){if(n)return n=k(e,t),Je.test(n)?ae(e).position()[t]+"px":n})}),ae.each({Height:"height",Width:"width"},function(e,t){
ae.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){ae.fn[r]=function(r,i){var a=arguments.length&&(n||"boolean"!=typeof r),o=n||(r===!0||i===!0?"margin":"border");
return De(this,function(t,n,r){var i;return ae.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?ae.css(t,n,o):ae.style(t,n,r,o);
},t,a?r:void 0,a,null)}})}),ae.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){
return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length;
}}),ae.fn.andSelf=ae.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ae});var Ht=e.jQuery,Rt=e.$;return ae.noConflict=function(t){
return e.$===ae&&(e.$=Rt),t&&e.jQuery===ae&&(e.jQuery=Ht),ae},t||(e.jQuery=e.$=ae),ae}),function(e){"use strict";function t(e,t){return t=t||Error,function(){
var n,r,i=2,a=arguments,o=a[0],s="["+(e?e+":":"")+o+"] ",u=a[1];for(s+=u.replace(/\{\d+\}/g,function(e){var t=+e.slice(1,-1),n=t+i;return n<a.length?ve(a[n]):e;
}),s+="\nhttp://errors.angularjs.org/1.5.5/"+(e?e+"/":"")+o,r=i,n="?";r<a.length;r++,n="&")s+=n+"p"+(r-i)+"="+encodeURIComponent(ve(a[r]));return new t(s);
}}function n(e){if(null==e||k(e))return!1;if(qr(e)||w(e)||jr&&e instanceof jr)return!0;var t="length"in Object(e)&&e.length;return M(t)&&(t>=0&&(t-1 in e||e instanceof Array)||"function"==typeof e.item);
}function r(e,t,i){var a,o;if(e)if($(e))for(a in e)"prototype"==a||"length"==a||"name"==a||e.hasOwnProperty&&!e.hasOwnProperty(a)||t.call(i,e[a],a,e);else if(qr(e)||n(e)){
var s="object"!=typeof e;for(a=0,o=e.length;a<o;a++)(s||a in e)&&t.call(i,e[a],a,e)}else if(e.forEach&&e.forEach!==r)e.forEach(t,i,e);else if(b(e))for(a in e)t.call(i,e[a],a,e);else if("function"==typeof e.hasOwnProperty)for(a in e)e.hasOwnProperty(a)&&t.call(i,e[a],a,e);else for(a in e)Sr.call(e,a)&&t.call(i,e[a],a,e);
return e}function i(e,t,n){for(var r=Object.keys(e).sort(),i=0;i<r.length;i++)t.call(n,e[r[i]],r[i]);return r}function a(e){return function(t,n){e(n,t);
}}function o(){return++zr}function s(e,t){t?e.$$hashKey=t:delete e.$$hashKey}function u(e,t,n){for(var r=e.$$hashKey,i=0,a=t.length;i<a;++i){var o=t[i];
if(y(o)||$(o))for(var l=Object.keys(o),c=0,d=l.length;c<d;c++){var f=l[c],p=o[f];n&&y(p)?D(p)?e[f]=new Date(p.valueOf()):L(p)?e[f]=new RegExp(p):p.nodeName?e[f]=p.cloneNode(!0):j(p)?e[f]=p.clone():(y(e[f])||(e[f]=qr(p)?[]:{}),
u(e[f],[p],!0)):e[f]=p}}return s(e,r),e}function l(e){return u(e,Hr.call(arguments,1),!1)}function c(e){return u(e,Hr.call(arguments,1),!0)}function d(e){
return parseInt(e,10)}function f(e,t){return l(Object.create(e),t)}function p(){}function m(e){return e}function h(e){return function(){return e}}function _(e){
return $(e.toString)&&e.toString!==Nr}function g(e){return"undefined"==typeof e}function v(e){return"undefined"!=typeof e}function y(e){return null!==e&&"object"==typeof e;
}function b(e){return null!==e&&"object"==typeof e&&!Ur(e)}function w(e){return"string"==typeof e}function M(e){return"number"==typeof e}function D(e){
return"[object Date]"===Nr.call(e)}function $(e){return"function"==typeof e}function L(e){return"[object RegExp]"===Nr.call(e)}function k(e){return e&&e.window===e;
}function x(e){return e&&e.$evalAsync&&e.$watch}function T(e){return"[object File]"===Nr.call(e)}function S(e){return"[object FormData]"===Nr.call(e)}function Y(e){
return"[object Blob]"===Nr.call(e)}function C(e){return"boolean"==typeof e}function E(e){return e&&$(e.then)}function A(e){return e&&M(e.length)&&Vr.test(Nr.call(e));
}function F(e){return"[object ArrayBuffer]"===Nr.call(e)}function j(e){return!(!e||!(e.nodeName||e.prop&&e.attr&&e.find))}function P(e){var t,n={},r=e.split(",");
for(t=0;t<r.length;t++)n[r[t]]=!0;return n}function O(e){return Yr(e.nodeName||e[0]&&e[0].nodeName)}function H(e,t){var n=e.indexOf(t);return n>=0&&e.splice(n,1),
n}function R(e,t){function n(e,t){var n,r=t.$$hashKey;if(qr(e))for(var a=0,o=e.length;a<o;a++)t.push(i(e[a]));else if(b(e))for(n in e)t[n]=i(e[n]);else if(e&&"function"==typeof e.hasOwnProperty)for(n in e)e.hasOwnProperty(n)&&(t[n]=i(e[n]));else for(n in e)Sr.call(e,n)&&(t[n]=i(e[n]));
return s(t,r),t}function i(e){if(!y(e))return e;var t=o.indexOf(e);if(t!==-1)return u[t];if(k(e)||x(e))throw Br("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");
var r=!1,i=a(e);return void 0===i&&(i=qr(e)?[]:Object.create(Ur(e)),r=!0),o.push(e),u.push(i),r?n(e,i):i}function a(e){switch(Nr.call(e)){case"[object Int8Array]":
case"[object Int16Array]":case"[object Int32Array]":case"[object Float32Array]":case"[object Float64Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
case"[object Uint16Array]":case"[object Uint32Array]":return new e.constructor(i(e.buffer));case"[object ArrayBuffer]":if(!e.slice){var t=new ArrayBuffer(e.byteLength);
return new Uint8Array(t).set(new Uint8Array(e)),t}return e.slice(0);case"[object Boolean]":case"[object Number]":case"[object String]":case"[object Date]":
return new e.constructor(e.valueOf());case"[object RegExp]":var n=new RegExp(e.source,e.toString().match(/[^\/]*$/)[0]);return n.lastIndex=e.lastIndex,
n;case"[object Blob]":return new e.constructor([e],{type:e.type})}if($(e.cloneNode))return e.cloneNode(!0)}var o=[],u=[];if(t){if(A(t)||F(t))throw Br("cpta","Can't copy! TypedArray destination cannot be mutated.");
if(e===t)throw Br("cpi","Can't copy! Source and destination are identical.");return qr(t)?t.length=0:r(t,function(e,n){"$$hashKey"!==n&&delete t[n]}),o.push(e),
u.push(t),n(e,t)}return i(e)}function I(e,t){if(qr(e)){t=t||[];for(var n=0,r=e.length;n<r;n++)t[n]=e[n]}else if(y(e)){t=t||{};for(var i in e)"$"===i.charAt(0)&&"$"===i.charAt(1)||(t[i]=e[i]);
}return t||e}function N(e,t){if(e===t)return!0;if(null===e||null===t)return!1;if(e!==e&&t!==t)return!0;var n,r,i,a=typeof e,o=typeof t;if(a==o&&"object"==a){
if(!qr(e)){if(D(e))return!!D(t)&&N(e.getTime(),t.getTime());if(L(e))return!!L(t)&&e.toString()==t.toString();if(x(e)||x(t)||k(e)||k(t)||qr(t)||D(t)||L(t))return!1;
i=he();for(r in e)if("$"!==r.charAt(0)&&!$(e[r])){if(!N(e[r],t[r]))return!1;i[r]=!0}for(r in t)if(!(r in i)&&"$"!==r.charAt(0)&&v(t[r])&&!$(t[r]))return!1;
return!0}if(!qr(t))return!1;if((n=e.length)==t.length){for(r=0;r<n;r++)if(!N(e[r],t[r]))return!1;return!0}}return!1}function U(e,t,n){return e.concat(Hr.call(t,n));
}function B(e,t){return Hr.call(e,t||0)}function W(e,t){var n=arguments.length>2?B(arguments,2):[];return!$(t)||t instanceof RegExp?t:n.length?function(){
return arguments.length?t.apply(e,U(n,arguments,0)):t.apply(e,n)}:function(){return arguments.length?t.apply(e,arguments):t.call(e)}}function z(t,n){var r=n;
return"string"==typeof t&&"$"===t.charAt(0)&&"$"===t.charAt(1)?r=void 0:k(n)?r="$WINDOW":n&&e.document===n?r="$DOCUMENT":x(n)&&(r="$SCOPE"),r}function q(e,t){
if(!g(e))return M(t)||(t=t?2:null),JSON.stringify(e,z,t)}function V(e){return w(e)?JSON.parse(e):e}function G(e,t){e=e.replace(Zr,"");var n=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;
return isNaN(n)?t:n}function J(e,t){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+t),e}function X(e,t,n){n=n?-1:1;var r=e.getTimezoneOffset(),i=G(t,r);
return J(e,n*(i-r))}function K(e){e=jr(e).clone();try{e.empty()}catch(e){}var t=jr("<div>").append(e).html();try{return e[0].nodeType===ii?Yr(t):t.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(e,t){
return"<"+Yr(t)})}catch(e){return Yr(t)}}function Z(e){try{return decodeURIComponent(e)}catch(e){}}function Q(e){var t={};return r((e||"").split("&"),function(e){
var n,r,i;e&&(r=e=e.replace(/\+/g,"%20"),n=e.indexOf("="),n!==-1&&(r=e.substring(0,n),i=e.substring(n+1)),r=Z(r),v(r)&&(i=!v(i)||Z(i),Sr.call(t,r)?qr(t[r])?t[r].push(i):t[r]=[t[r],i]:t[r]=i));
}),t}function ee(e){var t=[];return r(e,function(e,n){qr(e)?r(e,function(e){t.push(ne(n,!0)+(e===!0?"":"="+ne(e,!0)))}):t.push(ne(n,!0)+(e===!0?"":"="+ne(e,!0)));
}),t.length?t.join("&"):""}function te(e){return ne(e,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ne(e,t){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,t?"%20":"+");
}function re(e,t){var n,r,i=Qr.length;for(r=0;r<i;++r)if(n=Qr[r]+t,w(n=e.getAttribute(n)))return n;return null}function ie(e,t){var n,i,a={};r(Qr,function(t){
var r=t+"app";!n&&e.hasAttribute&&e.hasAttribute(r)&&(n=e,i=e.getAttribute(r))}),r(Qr,function(t){var r,a=t+"app";!n&&(r=e.querySelector("["+a.replace(":","\\:")+"]"))&&(n=r,
i=r.getAttribute(a))}),n&&(a.strictDi=null!==re(n,"strict-di"),t(n,i?[i]:[],a))}function ae(t,n,i){y(i)||(i={});var a={strictDi:!1};i=l(a,i);var o=function(){
if(t=jr(t),t.injector()){var r=t[0]===e.document?"document":K(t);throw Br("btstrpd","App already bootstrapped with this element '{0}'",r.replace(/</,"&lt;").replace(/>/,"&gt;"));
}n=n||[],n.unshift(["$provide",function(e){e.value("$rootElement",t)}]),i.debugInfoEnabled&&n.push(["$compileProvider",function(e){e.debugInfoEnabled(!0);
}]),n.unshift("ng");var a=nt(n,i.strictDi);return a.invoke(["$rootScope","$rootElement","$compile","$injector",function(e,t,n,r){e.$apply(function(){t.data("$injector",r),
n(t)(e)})}]),a},s=/^NG_ENABLE_DEBUG_INFO!/,u=/^NG_DEFER_BOOTSTRAP!/;return e&&s.test(e.name)&&(i.debugInfoEnabled=!0,e.name=e.name.replace(s,"")),e&&!u.test(e.name)?o():(e.name=e.name.replace(u,""),
Wr.resumeBootstrap=function(e){return r(e,function(e){n.push(e)}),o()},void($(Wr.resumeDeferredBootstrap)&&Wr.resumeDeferredBootstrap()))}function oe(){
e.name="NG_ENABLE_DEBUG_INFO!"+e.name,e.location.reload()}function se(e){var t=Wr.element(e).injector();if(!t)throw Br("test","no injector found for element argument to getTestability");
return t.get("$$testability")}function ue(e,t){return t=t||"_",e.replace(ei,function(e,n){return(n?t:"")+e.toLowerCase()})}function le(){var t;if(!ti){
var n=Kr();Pr=g(n)?e.jQuery:n?e[n]:void 0,Pr&&Pr.fn.on?(jr=Pr,l(Pr.fn,{scope:Di.scope,isolateScope:Di.isolateScope,controller:Di.controller,injector:Di.injector,
inheritedData:Di.inheritedData}),t=Pr.cleanData,Pr.cleanData=function(e){for(var n,r,i=0;null!=(r=e[i]);i++)n=Pr._data(r,"events"),n&&n.$destroy&&Pr(r).triggerHandler("$destroy");
t(e)}):jr=Se,Wr.element=jr,ti=!0}}function ce(e,t,n){if(!e)throw Br("areq","Argument '{0}' is {1}",t||"?",n||"required");return e}function de(e,t,n){return n&&qr(e)&&(e=e[e.length-1]),
ce($(e),t,"not a function, got "+(e&&"object"==typeof e?e.constructor.name||"Object":typeof e)),e}function fe(e,t){if("hasOwnProperty"===e)throw Br("badname","hasOwnProperty is not a valid {0} name",t);
}function pe(e,t,n){if(!t)return e;for(var r,i=t.split("."),a=e,o=i.length,s=0;s<o;s++)r=i[s],e&&(e=(a=e)[r]);return!n&&$(e)?W(a,e):e}function me(e){for(var t,n=e[0],r=e[e.length-1],i=1;n!==r&&(n=n.nextSibling);i++)(t||e[i]!==n)&&(t||(t=jr(Hr.call(e,0,i))),
t.push(n));return t||e}function he(){return Object.create(null)}function _e(e){function n(e,t,n){return e[t]||(e[t]=n())}var r=t("$injector"),i=t("ng"),a=n(e,"angular",Object);
return a.$$minErr=a.$$minErr||t,n(a,"module",function(){var e={};return function(t,a,o){var s=function(e,t){if("hasOwnProperty"===e)throw i("badname","hasOwnProperty is not a valid {0} name",t);
};return s(t,"module"),a&&e.hasOwnProperty(t)&&(e[t]=null),n(e,t,function(){function e(e,t,n,r){return r||(r=i),function(){return r[n||"push"]([e,t,arguments]),
c}}function n(e,n){return function(r,a){return a&&$(a)&&(a.$$moduleName=t),i.push([e,n,arguments]),c}}if(!a)throw r("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",t);
var i=[],s=[],u=[],l=e("$injector","invoke","push",s),c={_invokeQueue:i,_configBlocks:s,_runBlocks:u,requires:a,name:t,provider:n("$provide","provider"),
factory:n("$provide","factory"),service:n("$provide","service"),value:e("$provide","value"),constant:e("$provide","constant","unshift"),decorator:n("$provide","decorator"),
animation:n("$animateProvider","register"),filter:n("$filterProvider","register"),controller:n("$controllerProvider","register"),directive:n("$compileProvider","directive"),
component:n("$compileProvider","component"),config:l,run:function(e){return u.push(e),this}};return o&&l(o),c})}})}function ge(e){var t=[];return JSON.stringify(e,function(e,n){
if(n=z(e,n),y(n)){if(t.indexOf(n)>=0)return"...";t.push(n)}return n})}function ve(e){return"function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):g(e)?"undefined":"string"!=typeof e?ge(e):e;
}function ye(n){l(n,{bootstrap:ae,copy:R,extend:l,merge:c,equals:N,element:jr,forEach:r,injector:nt,noop:p,bind:W,toJson:q,fromJson:V,identity:m,isUndefined:g,
isDefined:v,isString:w,isFunction:$,isObject:y,isNumber:M,isElement:j,isArray:qr,version:ui,isDate:D,lowercase:Yr,uppercase:Cr,callbacks:{counter:0},getTestability:se,
$$minErr:t,$$csp:Xr,reloadWithDebugInfo:oe}),(Or=_e(e))("ng",["ngLocale"],["$provide",function(e){e.provider({$$sanitizeUri:Dn}),e.provider("$compile",pt).directive({
a:Ya,input:Ja,textarea:Ja,form:ja,script:zo,select:Go,style:Xo,option:Jo,ngBind:Za,ngBindHtml:eo,ngBindTemplate:Qa,ngClass:no,ngClassEven:io,ngClassOdd:ro,
ngCloak:ao,ngController:oo,ngForm:Pa,ngHide:Ho,ngIf:lo,ngInclude:co,ngInit:po,ngNonBindable:So,ngPluralize:Ao,ngRepeat:Fo,ngShow:Oo,ngStyle:Ro,ngSwitch:Io,
ngSwitchWhen:No,ngSwitchDefault:Uo,ngOptions:Eo,ngTransclude:Wo,ngModel:ko,ngList:mo,ngChange:to,pattern:Zo,ngPattern:Zo,required:Ko,ngRequired:Ko,minlength:es,
ngMinlength:es,maxlength:Qo,ngMaxlength:Qo,ngValue:Ka,ngModelOptions:To}).directive({ngInclude:fo}).directive(Ca).directive(so),e.provider({$anchorScroll:rt,
$animate:Ri,$animateCss:Ui,$$animateJs:Oi,$$animateQueue:Hi,$$AnimateRunner:Ni,$$animateAsyncRun:Ii,$browser:lt,$cacheFactory:ct,$controller:yt,$document:bt,
$exceptionHandler:wt,$filter:On,$$forceReflow:Gi,$interpolate:jt,$interval:Pt,$http:Ct,$httpParamSerializer:Dt,$httpParamSerializerJQLike:$t,$httpBackend:At,
$xhrFactory:Et,$location:Xt,$log:Kt,$parse:gn,$rootScope:Mn,$q:vn,$$q:yn,$sce:xn,$sceDelegate:kn,$sniffer:Tn,$templateCache:dt,$templateRequest:Sn,$$testability:Yn,
$timeout:Cn,$window:Fn,$$rAF:wn,$$jqLite:Xe,$$HashMap:xi,$$cookieReader:Pn})}])}function be(){return++ci}function we(e){return e.replace(pi,function(e,t,n,r){
return r?n.toUpperCase():n}).replace(mi,"Moz$1")}function Me(e){return!vi.test(e)}function De(e){var t=e.nodeType;return t===ni||!t||t===oi}function $e(e){
for(var t in li[e.ng339])return!0;return!1}function Le(e){for(var t=0,n=e.length;t<n;t++)Ae(e[t])}function ke(e,t){var n,i,a,o,s=t.createDocumentFragment(),u=[];
if(Me(e))u.push(t.createTextNode(e));else{for(n=n||s.appendChild(t.createElement("div")),i=(yi.exec(e)||["",""])[1].toLowerCase(),a=wi[i]||wi._default,
n.innerHTML=a[1]+e.replace(bi,"<$1></$2>")+a[2],o=a[0];o--;)n=n.lastChild;u=U(u,n.childNodes),n=s.firstChild,n.textContent=""}return s.textContent="",s.innerHTML="",
r(u,function(e){s.appendChild(e)}),s}function xe(t,n){n=n||e.document;var r;return(r=gi.exec(t))?[n.createElement(r[1])]:(r=ke(t,n))?r.childNodes:[]}function Te(e,t){
var n=e.parentNode;n&&n.replaceChild(t,e),t.appendChild(e)}function Se(e){if(e instanceof Se)return e;var t;if(w(e)&&(e=Gr(e),t=!0),!(this instanceof Se)){
if(t&&"<"!=e.charAt(0))throw _i("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
return new Se(e)}t?Re(this,xe(e)):Re(this,e)}function Ye(e){return e.cloneNode(!0)}function Ce(e,t){if(t||Ae(e),e.querySelectorAll)for(var n=e.querySelectorAll("*"),r=0,i=n.length;r<i;r++)Ae(n[r]);
}function Ee(e,t,n,i){if(v(i))throw _i("offargs","jqLite#off() does not support the `selector` argument");var a=Fe(e),o=a&&a.events,s=a&&a.handle;if(s)if(t){
var u=function(t){var r=o[t];v(n)&&H(r||[],n),v(n)&&r&&r.length>0||(fi(e,t,s),delete o[t])};r(t.split(" "),function(e){u(e),hi[e]&&u(hi[e])})}else for(t in o)"$destroy"!==t&&fi(e,t,s),
delete o[t]}function Ae(e,t){var n=e.ng339,r=n&&li[n];if(r){if(t)return void delete r.data[t];r.handle&&(r.events.$destroy&&r.handle({},"$destroy"),Ee(e)),
delete li[n],e.ng339=void 0}}function Fe(e,t){var n=e.ng339,r=n&&li[n];return t&&!r&&(e.ng339=n=be(),r=li[n]={events:{},data:{},handle:void 0}),r}function je(e,t,n){
if(De(e)){var r=v(n),i=!r&&t&&!y(t),a=!t,o=Fe(e,!i),s=o&&o.data;if(r)s[t]=n;else{if(a)return s;if(i)return s&&s[t];l(s,t)}}}function Pe(e,t){return!!e.getAttribute&&(" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+t+" ")>-1;
}function Oe(e,t){t&&e.setAttribute&&r(t.split(" "),function(t){e.setAttribute("class",Gr((" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Gr(t)+" "," ")));
})}function He(e,t){if(t&&e.setAttribute){var n=(" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(t.split(" "),function(e){e=Gr(e),n.indexOf(" "+e+" ")===-1&&(n+=e+" ");
}),e.setAttribute("class",Gr(n))}}function Re(e,t){if(t)if(t.nodeType)e[e.length++]=t;else{var n=t.length;if("number"==typeof n&&t.window!==t){if(n)for(var r=0;r<n;r++)e[e.length++]=t[r];
}else e[e.length++]=t}}function Ie(e,t){return Ne(e,"$"+(t||"ngController")+"Controller")}function Ne(e,t,n){e.nodeType==oi&&(e=e.documentElement);for(var r=qr(t)?t:[t];e;){
for(var i=0,a=r.length;i<a;i++)if(v(n=jr.data(e,r[i])))return n;e=e.parentNode||e.nodeType===si&&e.host}}function Ue(e){for(Ce(e,!0);e.firstChild;)e.removeChild(e.firstChild);
}function Be(e,t){t||Ce(e);var n=e.parentNode;n&&n.removeChild(e)}function We(t,n){n=n||e,"complete"===n.document.readyState?n.setTimeout(t):jr(n).on("load",t);
}function ze(e,t){var n=$i[t.toLowerCase()];return n&&Li[O(e)]&&n}function qe(e){return ki[e]}function Ve(e,t){var n=function(n,r){n.isDefaultPrevented=function(){
return n.defaultPrevented};var i=t[r||n.type],a=i?i.length:0;if(a){if(g(n.immediatePropagationStopped)){var o=n.stopImmediatePropagation;n.stopImmediatePropagation=function(){
n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),o&&o.call(n)}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0;
};var s=i.specialHandlerWrapper||Ge;a>1&&(i=I(i));for(var u=0;u<a;u++)n.isImmediatePropagationStopped()||s(e,n,i[u])}};return n.elem=e,n}function Ge(e,t,n){
n.call(e,t)}function Je(e,t,n){var r=t.relatedTarget;r&&(r===e||Mi.call(e,r))||n.call(e,t)}function Xe(){this.$get=function(){return l(Se,{hasClass:function(e,t){
return e.attr&&(e=e[0]),Pe(e,t)},addClass:function(e,t){return e.attr&&(e=e[0]),He(e,t)},removeClass:function(e,t){return e.attr&&(e=e[0]),Oe(e,t)}})}}
function Ke(e,t){var n=e&&e.$$hashKey;if(n)return"function"==typeof n&&(n=e.$$hashKey()),n;var r=typeof e;return n="function"==r||"object"==r&&null!==e?e.$$hashKey=r+":"+(t||o)():r+":"+e;
}function Ze(e,t){if(t){var n=0;this.nextUid=function(){return++n}}r(e,this.put,this)}function Qe(e){var t=Function.prototype.toString.call(e).replace(Ei,""),n=t.match(Ti)||t.match(Si);
return n}function et(e){var t=Qe(e);return t?"function("+(t[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function tt(e,t,n){var i,a,o;if("function"==typeof e){
if(!(i=e.$inject)){if(i=[],e.length){if(t)throw w(n)&&n||(n=e.name||et(e)),Ai("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n);
a=Qe(e),r(a[1].split(Yi),function(e){e.replace(Ci,function(e,t,n){i.push(n)})})}e.$inject=i}}else qr(e)?(o=e.length-1,de(e[o],"fn"),i=e.slice(0,o)):de(e,"fn",!0);
return i}function nt(e,t){function n(e){return function(t,n){return y(t)?void r(t,a(e)):e(t,n)}}function i(e,t){if(fe(e,"service"),($(t)||qr(t))&&(t=D.instantiate(t)),
!t.$get)throw Ai("pget","Provider '{0}' must define $get factory method.",e);return M[e+_]=t}function o(e,t){return function(){var n=x.invoke(t,this);if(g(n))throw Ai("undef","Provider '{0}' must return a value from $get factory method.",e);
return n}}function s(e,t,n){return i(e,{$get:n!==!1?o(e,t):t})}function u(e,t){return s(e,["$injector",function(e){return e.instantiate(t)}])}function l(e,t){
return s(e,h(t),!1)}function c(e,t){fe(e,"constant"),M[e]=t,L[e]=t}function d(e,t){var n=D.get(e+_),r=n.$get;n.$get=function(){var e=x.invoke(r,n);return x.invoke(t,null,{
$delegate:e})}}function f(e){ce(g(e)||qr(e),"modulesToLoad","not an array");var t,n=[];return r(e,function(e){function r(e){var t,n;for(t=0,n=e.length;t<n;t++){
var r=e[t],i=D.get(r[0]);i[r[1]].apply(i,r[2])}}if(!b.get(e)){b.put(e,!0);try{w(e)?(t=Or(e),n=n.concat(f(t.requires)).concat(t._runBlocks),r(t._invokeQueue),
r(t._configBlocks)):$(e)?n.push(D.invoke(e)):qr(e)?n.push(D.invoke(e)):de(e,"module")}catch(t){throw qr(e)&&(e=e[e.length-1]),t.message&&t.stack&&t.stack.indexOf(t.message)==-1&&(t=t.message+"\n"+t.stack),
Ai("modulerr","Failed to instantiate module {0} due to:\n{1}",e,t.stack||t.message||t)}}}),n}function p(e,n){function r(t,r){if(e.hasOwnProperty(t)){if(e[t]===m)throw Ai("cdep","Circular dependency found: {0}",t+" <- "+v.join(" <- "));
return e[t]}try{return v.unshift(t),e[t]=m,e[t]=n(t,r)}catch(n){throw e[t]===m&&delete e[t],n}finally{v.shift()}}function i(e,n,i){for(var a=[],o=nt.$$annotate(e,t,i),s=0,u=o.length;s<u;s++){
var l=o[s];if("string"!=typeof l)throw Ai("itkn","Incorrect injection token! Expected service name as string, got {0}",l);a.push(n&&n.hasOwnProperty(l)?n[l]:r(l,i));
}return a}function a(e){return!(Fr<=11)&&("function"==typeof e&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(e)))}function o(e,t,n,r){
"string"==typeof n&&(r=n,n=null);var o=i(e,n,r);return qr(e)&&(e=e[e.length-1]),a(e)?(o.unshift(null),new(Function.prototype.bind.apply(e,o))):e.apply(t,o);
}function s(e,t,n){var r=qr(e)?e[e.length-1]:e,a=i(e,t,n);return a.unshift(null),new(Function.prototype.bind.apply(r,a))}return{invoke:o,instantiate:s,
get:r,annotate:nt.$$annotate,has:function(t){return M.hasOwnProperty(t+_)||e.hasOwnProperty(t)}}}t=t===!0;var m={},_="Provider",v=[],b=new Ze([],!0),M={
$provide:{provider:n(i),factory:n(s),service:n(u),value:n(l),constant:n(c),decorator:d}},D=M.$injector=p(M,function(e,t){throw Wr.isString(t)&&v.push(t),
Ai("unpr","Unknown provider: {0}",v.join(" <- "))}),L={},k=p(L,function(e,t){var n=D.get(e+_,t);return x.invoke(n.$get,n,void 0,e)}),x=k;M["$injector"+_]={
$get:h(k)};var T=f(e);return x=k.get("$injector"),x.strictDi=t,r(T,function(e){e&&x.invoke(e)}),x}function rt(){var e=!0;this.disableAutoScrolling=function(){
e=!1},this.$get=["$window","$location","$rootScope",function(t,n,r){function i(e){var t=null;return Array.prototype.some.call(e,function(e){if("a"===O(e))return t=e,
!0}),t}function a(){var e=s.yOffset;if($(e))e=e();else if(j(e)){var n=e[0],r=t.getComputedStyle(n);e="fixed"!==r.position?0:n.getBoundingClientRect().bottom;
}else M(e)||(e=0);return e}function o(e){if(e){e.scrollIntoView();var n=a();if(n){var r=e.getBoundingClientRect().top;t.scrollBy(0,r-n)}}else t.scrollTo(0,0);
}function s(e){e=w(e)?e:n.hash();var t;e?(t=u.getElementById(e))?o(t):(t=i(u.getElementsByName(e)))?o(t):"top"===e&&o(null):o(null)}var u=t.document;return e&&r.$watch(function(){
return n.hash()},function(e,t){e===t&&""===e||We(function(){r.$evalAsync(s)})}),s}]}function it(e,t){return e||t?e?t?(qr(e)&&(e=e.join(" ")),qr(t)&&(t=t.join(" ")),
e+" "+t):e:t:""}function at(e){for(var t=0;t<e.length;t++){var n=e[t];if(n.nodeType===ji)return n}}function ot(e){w(e)&&(e=e.split(" "));var t=he();return r(e,function(e){
e.length&&(t[e]=!0)}),t}function st(e){return y(e)?e:{}}function ut(e,t,n,i){function a(e){try{e.apply(null,B(arguments,1))}finally{if(v--,0===v)for(;y.length;)try{
y.pop()()}catch(e){n.error(e)}}}function o(e){var t=e.indexOf("#");return t===-1?"":e.substr(t)}function s(){$=null,u(),l()}function u(){b=L(),b=g(b)?null:b,
N(b,T)&&(b=T),T=b}function l(){M===c.url()&&w===b||(M=c.url(),w=b,r(k,function(e){e(c.url(),b)}))}var c=this,d=e.location,f=e.history,m=e.setTimeout,h=e.clearTimeout,_={};
c.isMock=!1;var v=0,y=[];c.$$completeOutstandingRequest=a,c.$$incOutstandingRequestCount=function(){v++},c.notifyWhenNoOutstandingRequests=function(e){
0===v?e():y.push(e)};var b,w,M=d.href,D=t.find("base"),$=null,L=i.history?function(){try{return f.state}catch(e){}}:p;u(),w=b,c.url=function(t,n,r){if(g(r)&&(r=null),
d!==e.location&&(d=e.location),f!==e.history&&(f=e.history),t){var a=w===r;if(M===t&&(!i.history||a))return c;var s=M&&Nt(M)===Nt(t);return M=t,w=r,!i.history||s&&a?(s&&!$||($=t),
n?d.replace(t):s?d.hash=o(t):d.href=t,d.href!==t&&($=t)):(f[n?"replaceState":"pushState"](r,"",t),u(),w=b),c}return $||d.href.replace(/%27/g,"'")},c.state=function(){
return b};var k=[],x=!1,T=null;c.onUrlChange=function(t){return x||(i.history&&jr(e).on("popstate",s),jr(e).on("hashchange",s),x=!0),k.push(t),t},c.$$applicationDestroyed=function(){
jr(e).off("hashchange popstate",s)},c.$$checkUrlChange=l,c.baseHref=function(){var e=D.attr("href");return e?e.replace(/^(https?\:)?\/\/[^\/]*/,""):""},
c.defer=function(e,t){var n;return v++,n=m(function(){delete _[n],a(e)},t||0),_[n]=!0,n},c.defer.cancel=function(e){return!!_[e]&&(delete _[e],h(e),a(p),
!0)}}function lt(){this.$get=["$window","$log","$sniffer","$document",function(e,t,n,r){return new ut(e,r,t,n)}]}function ct(){this.$get=function(){function e(e,r){
function i(e){e!=f&&(p?p==e&&(p=e.n):p=e,a(e.n,e.p),a(e,f),f=e,f.n=null)}function a(e,t){e!=t&&(e&&(e.p=t),t&&(t.n=e))}if(e in n)throw t("$cacheFactory")("iid","CacheId '{0}' is already taken!",e);
var o=0,s=l({},r,{id:e}),u=he(),c=r&&r.capacity||Number.MAX_VALUE,d=he(),f=null,p=null;return n[e]={put:function(e,t){if(!g(t)){if(c<Number.MAX_VALUE){
var n=d[e]||(d[e]={key:e});i(n)}return e in u||o++,u[e]=t,o>c&&this.remove(p.key),t}},get:function(e){if(c<Number.MAX_VALUE){var t=d[e];if(!t)return;i(t);
}return u[e]},remove:function(e){if(c<Number.MAX_VALUE){var t=d[e];if(!t)return;t==f&&(f=t.p),t==p&&(p=t.n),a(t.n,t.p),delete d[e]}e in u&&(delete u[e],
o--)},removeAll:function(){u=he(),o=0,d=he(),f=p=null},destroy:function(){u=null,s=null,d=null,delete n[e]},info:function(){return l({},s,{size:o})}}}var n={};
return e.info=function(){var e={};return r(n,function(t,n){e[n]=t.info()}),e},e.get=function(e){return n[e]},e}}function dt(){this.$get=["$cacheFactory",function(e){
return e("templates")}]}function ft(){}function pt(t,n){function i(e,t,n){var i=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,a=he();return r(e,function(e,r){if(e in L)return void(a[r]=L[e]);
var o=e.match(i);if(!o)throw Bi("iscp","Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",t,r,e,n?"controller bindings definition":"isolate scope definition");
a[r]={mode:o[1][0],collection:"*"===o[2],optional:"?"===o[3],attrName:o[4]||r},o[4]&&(L[e]=a[r])}),a}function o(e,t){var n={isolateScope:null,bindToController:null
};if(y(e.scope)&&(e.bindToController===!0?(n.bindToController=i(e.scope,t,!0),n.isolateScope={}):n.isolateScope=i(e.scope,t,!1)),y(e.bindToController)&&(n.bindToController=i(e.bindToController,t,!0)),
y(n.bindToController)){var r=e.controller,a=e.controllerAs;if(!r)throw Bi("noctrl","Cannot bind to controller without directive '{0}'s controller.",t);if(!vt(r,a))throw Bi("noident","Cannot bind to controller without identifier for directive '{0}'.",t);
}return n}function s(e){var t=e.charAt(0);if(!t||t!==Yr(t))throw Bi("baddir","Directive/Component name '{0}' is invalid. The first character must be a lowercase letter",e);
if(e!==e.trim())throw Bi("baddir","Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces",e)}var u={},c="Directive",d=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,_=/(([\w\-]+)(?:\:([^;]+))?;?)/,b=P("ngSrc,ngSrcset,src,srcset"),M=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,D=/^(on[a-z]+|formaction)$/,L=he();
this.directive=function e(n,i){return fe(n,"directive"),w(n)?(s(n),ce(i,"directiveFactory"),u.hasOwnProperty(n)||(u[n]=[],t.factory(n+c,["$injector","$exceptionHandler",function(e,t){
var i=[];return r(u[n],function(r,a){try{var o=e.invoke(r);$(o)?o={compile:h(o)}:!o.compile&&o.link&&(o.compile=h(o.link)),o.priority=o.priority||0,o.index=a,
o.name=o.name||n,o.require=o.require||o.controller&&o.name,o.restrict=o.restrict||"EA",o.$$moduleName=r.$$moduleName,i.push(o)}catch(e){t(e)}}),i}])),u[n].push(i)):r(n,a(e)),
this},this.component=function(e,t){function n(e){function n(t){return $(t)||qr(t)?function(n,r){return e.invoke(t,this,{$element:n,$attrs:r})}:t}var a=t.template||t.templateUrl?t.template:"",o={
controller:i,controllerAs:vt(t.controller)||t.controllerAs||"$ctrl",template:n(a),templateUrl:n(t.templateUrl),transclude:t.transclude,scope:{},bindToController:t.bindings||{},
restrict:"E",require:t.require};return r(t,function(e,t){"$"===t.charAt(0)&&(o[t]=e)}),o}var i=t.controller||function(){};return r(t,function(e,t){"$"===t.charAt(0)&&(n[t]=e,
$(i)&&(i[t]=e))}),n.$inject=["$injector"],this.directive(e,n)},this.aHrefSanitizationWhitelist=function(e){return v(e)?(n.aHrefSanitizationWhitelist(e),
this):n.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(e){return v(e)?(n.imgSrcSanitizationWhitelist(e),this):n.imgSrcSanitizationWhitelist();
};var k=!0;this.debugInfoEnabled=function(e){return v(e)?(k=e,this):k};var T=10;this.onChangesTtl=function(e){return arguments.length?(T=e,this):T},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(t,n,i,a,s,h,v,L,S,Y){
function E(){try{if(!--ye)throw _e=void 0,Bi("infchng","{0} $onChanges() iterations reached. Aborting!\n",T);v.$apply(function(){for(var e=0,t=_e.length;e<t;++e)_e[e]();
_e=void 0})}finally{ye++}}function A(e,t){if(t){var n,r,i,a=Object.keys(t);for(n=0,r=a.length;n<r;n++)i=a[n],this[i]=t[i]}else this.$attr={};this.$$element=e;
}function F(e,t,n){ve.innerHTML="<span "+t+">";var r=ve.firstChild.attributes,i=r[0];r.removeNamedItem(i.name),i.value=n,e.attributes.setNamedItem(i)}function j(e,t){
try{e.addClass(t)}catch(e){}}function P(t,n,r,i,a){t instanceof jr||(t=jr(t));for(var o=/\S+/,s=0,u=t.length;s<u;s++){var l=t[s];l.nodeType===ii&&l.nodeValue.match(o)&&Te(l,t[s]=e.document.createElement("span"));
}var c=I(t,n,t,r,i,a);P.$$addScopeClass(t);var d=null;return function(e,n,r){ce(e,"scope"),a&&a.needsNewScope&&(e=e.$parent.$new()),r=r||{};var i=r.parentBoundTranscludeFn,o=r.transcludeControllers,s=r.futureParentElement;
i&&i.$$boundTransclude&&(i=i.$$boundTransclude),d||(d=R(s));var u;if(u="html"!==d?jr(oe(d,jr("<div>").append(t).html())):n?Di.clone.call(t):t,o)for(var l in o)u.data("$"+l+"Controller",o[l].instance);
return P.$$addScopeInfo(u,e),n&&n(u,e),c&&c(e,u,u,i),u}}function R(e){var t=e&&e[0];return t&&"foreignobject"!==O(t)&&Nr.call(t).match(/SVG/)?"svg":"html";
}function I(e,t,n,r,i,a){function o(e,n,r,i){var a,o,s,u,l,c,d,f,h;if(p){var _=n.length;for(h=new Array(_),l=0;l<m.length;l+=3)d=m[l],h[d]=n[d]}else h=n;
for(l=0,c=m.length;l<c;)s=h[m[l++]],a=m[l++],o=m[l++],a?(a.scope?(u=e.$new(),P.$$addScopeInfo(jr(s),u)):u=e,f=a.transcludeOnThisElement?U(e,a.transclude,i):!a.templateOnThisElement&&i?i:!i&&t?U(e,t):null,
a(o,u,s,r,f)):o&&o(e,s.childNodes,void 0,i)}for(var s,u,l,c,d,f,p,m=[],h=0;h<e.length;h++)s=new A,u=W(e[h],[],s,0===h?r:void 0,i),l=u.length?G(u,e[h],s,t,n,null,[],[],a):null,
l&&l.scope&&P.$$addScopeClass(s.$$element),d=l&&l.terminal||!(c=e[h].childNodes)||!c.length?null:I(c,l?(l.transcludeOnThisElement||!l.templateOnThisElement)&&l.transclude:t),
(l||d)&&(m.push(h,l,d),f=!0,p=p||l),a=null;return f?o:null}function U(e,t,n){function r(r,i,a,o,s){return r||(r=e.$new(!1,s),r.$$transcluded=!0),t(r,i,{
parentBoundTranscludeFn:n,transcludeControllers:a,futureParentElement:o})}var i=r.$$slots=he();for(var a in t.$$slots)t.$$slots[a]?i[a]=U(e,t.$$slots[a],n):i[a]=null;
return r}function W(e,t,n,r,i){var a,o,s=e.nodeType,u=n.$attr;switch(s){case ni:Q(t,ht(O(e)),"E",r,i);for(var l,c,f,p,m,h,g=e.attributes,v=0,b=g&&g.length;v<b;v++){
var M=!1,D=!1;l=g[v],c=l.name,m=Gr(l.value),p=ht(c),(h=$e.test(p))&&(c=c.replace(zi,"").substr(8).replace(/_(.)/g,function(e,t){return t.toUpperCase()}));
var $=p.match(Le);$&&ee($[1])&&(M=c,D=c.substr(0,c.length-5)+"end",c=c.substr(0,c.length-6)),f=ht(c.toLowerCase()),u[f]=c,!h&&n.hasOwnProperty(f)||(n[f]=m,
ze(e,f)&&(n[f]=!0)),le(e,t,m,f,h),Q(t,f,"A",r,i,M,D)}if(o=e.className,y(o)&&(o=o.animVal),w(o)&&""!==o)for(;a=_.exec(o);)f=ht(a[2]),Q(t,f,"C",r,i)&&(n[f]=Gr(a[3])),
o=o.substr(a.index+a[0].length);break;case ii:if(11===Fr)for(;e.parentNode&&e.nextSibling&&e.nextSibling.nodeType===ii;)e.nodeValue=e.nodeValue+e.nextSibling.nodeValue,
e.parentNode.removeChild(e.nextSibling);ae(t,e.nodeValue);break;case ai:try{a=d.exec(e.nodeValue),a&&(f=ht(a[1]),Q(t,f,"M",r,i)&&(n[f]=Gr(a[2])))}catch(e){}
}return t.sort(re),t}function z(e,t,n){var r=[],i=0;if(t&&e.hasAttribute&&e.hasAttribute(t)){do{if(!e)throw Bi("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",t,n);
e.nodeType==ni&&(e.hasAttribute(t)&&i++,e.hasAttribute(n)&&i--),r.push(e),e=e.nextSibling}while(i>0)}else r.push(e);return jr(r)}function q(e,t,n){return function(r,i,a,o,s){
return i=z(i[0],t,n),e(r,i,a,o,s)}}function V(e,t,n,r,i,a){var o;return e?P(t,n,r,i,a):function(){return o||(o=P(t,n,r,i,a),t=n=a=null),o.apply(this,arguments);
}}function G(e,t,n,a,o,s,u,c,d){function f(e,t,n,r){e&&(n&&(e=q(e,n,r)),e.require=m.require,e.directiveName=h,(L===m||m.$$isolateScope)&&(e=fe(e,{isolateScope:!0
})),u.push(e)),t&&(n&&(t=q(t,n,r)),t.require=m.require,t.directiveName=h,(L===m||m.$$isolateScope)&&(t=fe(t,{isolateScope:!0})),c.push(t))}function p(e,i,a,o,s){
function d(e,t,n,r){var i;if(x(e)||(r=n,n=t,t=e,e=void 0),C&&(i=v),n||(n=C?w.parent():w),!r)return s(e,t,i,n,H);var a=s.$$slots[r];if(a)return a(e,t,i,n,H);
if(g(a))throw Bi("noslot",'No parent directive that requires a transclusion with slot name "{0}". Element: {1}',r,K(w))}var f,p,m,h,_,v,b,w,T,S;t===a?(T=n,
w=n.$$element):(w=jr(a),T=new A(w,n)),_=i,L?h=i.$new(!0):M&&(_=i.$parent),s&&(b=d,b.$$boundTransclude=s,b.isSlotFilled=function(e){return!!s.$$slots[e];
}),D&&(v=X(w,T,b,D,h,i,L)),L&&(P.$$addScopeInfo(w,h,!0,!(k&&(k===L||k===L.$$originalDirective))),P.$$addScopeClass(w,!0),h.$$isolateBindings=L.$$isolateBindings,
S=me(i,T,h,h.$$isolateBindings,L),S.removeWatches&&h.$on("$destroy",S.removeWatches));for(var Y in v){var E=D[Y],F=v[Y],j=E.$$bindings.bindToController;
F.identifier&&j?F.bindingInfo=me(_,T,F.instance,j,E):F.bindingInfo={};var O=F();O!==F.instance&&(F.instance=O,w.data("$"+E.name+"Controller",O),F.bindingInfo.removeWatches&&F.bindingInfo.removeWatches(),
F.bindingInfo=me(_,T,F.instance,j,E))}for(r(D,function(e,t){var n=e.require;e.bindToController&&!qr(n)&&y(n)&&l(v[t].instance,J(t,n,w,v))}),r(v,function(e){
var t=e.instance;$(t.$onChanges)&&t.$onChanges(e.bindingInfo.initialChanges),$(t.$onInit)&&t.$onInit(),$(t.$onDestroy)&&_.$on("$destroy",function(){t.$onDestroy();
})}),f=0,p=u.length;f<p;f++)m=u[f],pe(m,m.isolateScope?h:i,w,T,m.require&&J(m.directiveName,m.require,w,v),b);var H=i;for(L&&(L.template||null===L.templateUrl)&&(H=h),
e&&e(H,a.childNodes,void 0,s),f=c.length-1;f>=0;f--)m=c[f],pe(m,m.isolateScope?h:i,w,T,m.require&&J(m.directiveName,m.require,w,v),b);r(v,function(e){var t=e.instance;
$(t.$postLink)&&t.$postLink()})}d=d||{};for(var m,h,_,v,b,w=-Number.MAX_VALUE,M=d.newScopeDirective,D=d.controllerDirectives,L=d.newIsolateScopeDirective,k=d.templateDirective,T=d.nonTlbTranscludeDirective,S=!1,Y=!1,C=d.hasElementTranscludeDirective,E=n.$$element=jr(t),F=s,j=a,H=!1,R=!1,I=0,N=e.length;I<N;I++){
m=e[I];var U=m.$$start,G=m.$$end;if(U&&(E=z(t,U,G)),_=void 0,w>m.priority)break;if((b=m.scope)&&(m.templateUrl||(y(b)?(ie("new/isolated scope",L||M,m,E),
L=m):ie("new/isolated scope",L,m,E)),M=M||m),h=m.name,!H&&(m.replace&&(m.templateUrl||m.template)||m.transclude&&!m.$$tlb)){for(var Q,ee=I+1;Q=e[ee++];)if(Q.transclude&&!Q.$$tlb||Q.replace&&(Q.templateUrl||Q.template)){
R=!0;break}H=!0}if(!m.templateUrl&&m.controller&&(b=m.controller,D=D||he(),ie("'"+h+"' controller",D[h],m,E),D[h]=m),b=m.transclude)if(S=!0,m.$$tlb||(ie("transclusion",T,m,E),
T=m),"element"==b)C=!0,w=m.priority,_=E,E=n.$$element=jr(P.$$createComment(h,n[h])),t=E[0],de(o,B(_),t),_[0].$$parentNode=_[0].parentNode,j=V(R,_,a,w,F&&F.name,{
nonTlbTranscludeDirective:T});else{var re=he();if(_=jr(Ye(t)).contents(),y(b)){_=[];var ae=he(),se=he();r(b,function(e,t){var n="?"===e.charAt(0);e=n?e.substring(1):e,
ae[e]=t,re[t]=null,se[t]=n}),r(E.contents(),function(e){var t=ae[ht(O(e))];t?(se[t]=!0,re[t]=re[t]||[],re[t].push(e)):_.push(e)}),r(se,function(e,t){if(!e)throw Bi("reqslot","Required transclusion slot `{0}` was not filled.",t);
});for(var ue in re)re[ue]&&(re[ue]=V(R,re[ue],a))}E.empty(),j=V(R,_,a,void 0,void 0,{needsNewScope:m.$$isolateScope||m.$$newScope}),j.$$slots=re}if(m.template)if(Y=!0,
ie("template",k,m,E),k=m,b=$(m.template)?m.template(E,n):m.template,b=De(b),m.replace){if(F=m,_=Me(b)?[]:gt(oe(m.templateNamespace,Gr(b))),t=_[0],1!=_.length||t.nodeType!==ni)throw Bi("tplrt","Template for directive '{0}' must have exactly one root element. {1}",h,"");
de(o,E,t);var le={$attr:{}},ce=W(t,[],le),_e=e.splice(I+1,e.length-(I+1));(L||M)&&Z(ce,L,M),e=e.concat(ce).concat(_e),te(n,le),N=e.length}else E.html(b);
if(m.templateUrl)Y=!0,ie("template",k,m,E),k=m,m.replace&&(F=m),p=ne(e.splice(I,e.length-I),E,n,o,S&&j,u,c,{controllerDirectives:D,newScopeDirective:M!==m&&M,
newIsolateScopeDirective:L,templateDirective:k,nonTlbTranscludeDirective:T}),N=e.length;else if(m.compile)try{v=m.compile(E,n,j),$(v)?f(null,v,U,G):v&&f(v.pre,v.post,U,G);
}catch(e){i(e,K(E))}m.terminal&&(p.terminal=!0,w=Math.max(w,m.priority))}return p.scope=M&&M.scope===!0,p.transcludeOnThisElement=S,p.templateOnThisElement=Y,
p.transclude=j,d.hasElementTranscludeDirective=C,p}function J(e,t,n,i){var a;if(w(t)){var o=t.match(M),s=t.substring(o[0].length),u=o[1]||o[3],l="?"===o[2];
if("^^"===u?n=n.parent():(a=i&&i[s],a=a&&a.instance),!a){var c="$"+s+"Controller";a=u?n.inheritedData(c):n.data(c)}if(!a&&!l)throw Bi("ctreq","Controller '{0}', required by directive '{1}', can't be found!",s,e);
}else if(qr(t)){a=[];for(var d=0,f=t.length;d<f;d++)a[d]=J(e,t[d],n,i)}else y(t)&&(a={},r(t,function(t,r){a[r]=J(e,t,n,i)}));return a||null}function X(e,t,n,r,i,a,o){
var s=he();for(var u in r){var l=r[u],c={$scope:l===o||l.$$isolateScope?i:a,$element:e,$attrs:t,$transclude:n},d=l.controller;"@"==d&&(d=t[l.name]);var f=h(d,c,!0,l.controllerAs);
s[l.name]=f,e.data("$"+l.name+"Controller",f.instance)}return s}function Z(e,t,n){for(var r=0,i=e.length;r<i;r++)e[r]=f(e[r],{$$isolateScope:t,$$newScope:n
})}function Q(e,n,r,a,s,l,d){if(n===s)return null;var p=null;if(u.hasOwnProperty(n))for(var m,h=t.get(n+c),_=0,v=h.length;_<v;_++)try{if(m=h[_],(g(a)||a>m.priority)&&m.restrict.indexOf(r)!=-1){
if(l&&(m=f(m,{$$start:l,$$end:d})),!m.$$bindings){var b=m.$$bindings=o(m,m.name);y(b.isolateScope)&&(m.$$isolateBindings=b.isolateScope)}e.push(m),p=m}
}catch(e){i(e)}return p}function ee(e){if(u.hasOwnProperty(e))for(var n,r=t.get(e+c),i=0,a=r.length;i<a;i++)if(n=r[i],n.multiElement)return!0;return!1}
function te(e,t){var n=t.$attr,i=e.$attr,a=e.$$element;r(e,function(r,i){"$"!=i.charAt(0)&&(t[i]&&t[i]!==r&&(r+=("style"===i?";":" ")+t[i]),e.$set(i,r,!0,n[i]));
}),r(t,function(t,r){"class"==r?(j(a,t),e.class=(e.class?e.class+" ":"")+t):"style"==r?(a.attr("style",a.attr("style")+";"+t),e.style=(e.style?e.style+";":"")+t):"$"==r.charAt(0)||e.hasOwnProperty(r)||(e[r]=t,
i[r]=n[r])})}function ne(e,t,n,i,o,s,u,l){var c,d,p=[],m=t[0],h=e.shift(),_=f(h,{templateUrl:null,transclude:null,replace:null,$$originalDirective:h}),g=$(h.templateUrl)?h.templateUrl(t,n):h.templateUrl,v=h.templateNamespace;
return t.empty(),a(g).then(function(a){var f,b,w,M;if(a=De(a),h.replace){if(w=Me(a)?[]:gt(oe(v,Gr(a))),f=w[0],1!=w.length||f.nodeType!==ni)throw Bi("tplrt","Template for directive '{0}' must have exactly one root element. {1}",h.name,g);
b={$attr:{}},de(i,t,f);var D=W(f,[],b);y(h.scope)&&Z(D,!0),e=D.concat(e),te(n,b)}else f=m,t.html(a);for(e.unshift(_),c=G(e,f,n,o,t,h,s,u,l),r(i,function(e,n){
e==f&&(i[n]=t[0])}),d=I(t[0].childNodes,o);p.length;){var $=p.shift(),L=p.shift(),k=p.shift(),x=p.shift(),T=t[0];if(!$.$$destroyed){if(L!==m){var S=L.className;
l.hasElementTranscludeDirective&&h.replace||(T=Ye(f)),de(k,jr(L),T),j(jr(T),S)}M=c.transcludeOnThisElement?U($,c.transclude,x):x,c(d,$,T,i,M)}}p=null}),
function(e,t,n,r,i){var a=i;t.$$destroyed||(p?p.push(t,n,r,a):(c.transcludeOnThisElement&&(a=U(t,c.transclude,i)),c(d,t,n,r,a)))}}function re(e,t){var n=t.priority-e.priority;
return 0!==n?n:e.name!==t.name?e.name<t.name?-1:1:e.index-t.index}function ie(e,t,n,r){function i(e){return e?" (module: "+e+")":""}if(t)throw Bi("multidir","Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",t.name,i(t.$$moduleName),n.name,i(n.$$moduleName),e,K(r));
}function ae(e,t){var r=n(t,!0);r&&e.push({priority:0,compile:function(e){var t=e.parent(),n=!!t.length;return n&&P.$$addBindingClass(t),function(e,t){
var i=t.parent();n||P.$$addBindingClass(i),P.$$addBindingInfo(i,r.expressions),e.$watch(r,function(e){t[0].nodeValue=e})}}})}function oe(t,n){switch(t=Yr(t||"html")){
case"svg":case"math":var r=e.document.createElement("div");return r.innerHTML="<"+t+">"+n+"</"+t+">",r.childNodes[0].childNodes;default:return n}}function se(e,t){
if("srcdoc"==t)return L.HTML;var n=O(e);return"xlinkHref"==t||"form"==n&&"action"==t||"img"!=n&&("src"==t||"ngSrc"==t)?L.RESOURCE_URL:void 0}function le(e,t,r,i,a){
var o=se(e,i);a=b[i]||a;var s=n(r,!0,o,a);if(s){if("multiple"===i&&"select"===O(e))throw Bi("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",K(e));
t.push({priority:100,compile:function(){return{pre:function(e,t,u){var l=u.$$observers||(u.$$observers=he());if(D.test(i))throw Bi("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
var c=u[i];c!==r&&(s=c&&n(c,!0,o,a),r=c),s&&(u[i]=s(e),(l[i]||(l[i]=[])).$$inter=!0,(u.$$observers&&u.$$observers[i].$$scope||e).$watch(s,function(e,t){
"class"===i&&e!=t?u.$updateClass(e,t):u.$set(i,e)}))}}}})}}function de(t,n,r){var i,a,o=n[0],s=n.length,u=o.parentNode;if(t)for(i=0,a=t.length;i<a;i++)if(t[i]==o){
t[i++]=r;for(var l=i,c=l+s-1,d=t.length;l<d;l++,c++)c<d?t[l]=t[c]:delete t[l];t.length-=s-1,t.context===o&&(t.context=r);break}u&&u.replaceChild(r,o);var f=e.document.createDocumentFragment();
for(i=0;i<s;i++)f.appendChild(n[i]);for(jr.hasData(o)&&(jr.data(r,jr.data(o)),jr(o).off("$destroy")),jr.cleanData(f.querySelectorAll("*")),i=1;i<s;i++)delete n[i];
n[0]=r,n.length=1}function fe(e,t){return l(function(){return e.apply(null,arguments)},e,t)}function pe(e,t,n,r,a,o){try{e(t,n,r,a,o)}catch(e){i(e,K(n));
}}function me(e,t,i,a,o){function u(t,n,r){$(i.$onChanges)&&n!==r&&(_e||(e.$$postDigest(E),_e=[]),c||(c={},_e.push(l)),c[t]&&(r=c[t].previousValue),c[t]=new mt(r,n));
}function l(){i.$onChanges(c),c=void 0}var c,d=[],f={};return r(a,function(r,a){var l,c,m,h,_,g=r.attrName,v=r.optional,y=r.mode;switch(y){case"@":v||Sr.call(t,g)||(i[a]=t[g]=void 0),
t.$observe(g,function(e){if(w(e)||C(e)){var t=i[a];u(a,e,t),i[a]=e}}),t.$$observers[g].$$scope=e,l=t[g],w(l)?i[a]=n(l)(e):C(l)&&(i[a]=l),f[a]=new mt(Wi,i[a]);
break;case"=":if(!Sr.call(t,g)){if(v)break;t[g]=void 0}if(v&&!t[g])break;c=s(t[g]),h=c.literal?N:function(e,t){return e===t||e!==e&&t!==t},m=c.assign||function(){
throw l=i[a]=c(e),Bi("nonassign","Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!",t[g],g,o.name)},l=i[a]=c(e);var b=function(t){
return h(t,i[a])||(h(t,l)?m(e,t=i[a]):i[a]=t),l=t};b.$stateful=!0,_=r.collection?e.$watchCollection(t[g],b):e.$watch(s(t[g],b),null,c.literal),d.push(_);
break;case"<":if(!Sr.call(t,g)){if(v)break;t[g]=void 0}if(v&&!t[g])break;c=s(t[g]),i[a]=c(e),f[a]=new mt(Wi,i[a]),_=e.$watch(c,function(e,t){e===t&&(t=i[a]),
u(a,e,t),i[a]=e},c.literal),d.push(_);break;case"&":if(c=t.hasOwnProperty(g)?s(t[g]):p,c===p&&v)break;i[a]=function(t){return c(e,t)}}}),{initialChanges:f,
removeWatches:d.length&&function(){for(var e=0,t=d.length;e<t;++e)d[e]()}}}var _e,ge=/^\w/,ve=e.document.createElement("div"),ye=T;A.prototype={$normalize:ht,
$addClass:function(e){e&&e.length>0&&S.addClass(this.$$element,e)},$removeClass:function(e){e&&e.length>0&&S.removeClass(this.$$element,e)},$updateClass:function(e,t){
var n=_t(e,t);n&&n.length&&S.addClass(this.$$element,n);var r=_t(t,e);r&&r.length&&S.removeClass(this.$$element,r)},$set:function(e,t,n,a){var o,s=this.$$element[0],u=ze(s,e),l=qe(e),c=e;
if(u?(this.$$element.prop(e,t),a=u):l&&(this[l]=t,c=l),this[e]=t,a?this.$attr[e]=a:(a=this.$attr[e],a||(this.$attr[e]=a=ue(e,"-"))),o=O(this.$$element),
"a"===o&&("href"===e||"xlinkHref"===e)||"img"===o&&"src"===e)this[e]=t=Y(t,"src"===e);else if("img"===o&&"srcset"===e){for(var d="",f=Gr(t),p=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,m=/\s/.test(f)?p:/(,)/,h=f.split(m),_=Math.floor(h.length/2),v=0;v<_;v++){
var y=2*v;d+=Y(Gr(h[y]),!0),d+=" "+Gr(h[y+1])}var b=Gr(h[2*v]).split(/\s/);d+=Y(Gr(b[0]),!0),2===b.length&&(d+=" "+Gr(b[1])),this[e]=t=d}n!==!1&&(null===t||g(t)?this.$$element.removeAttr(a):ge.test(a)?this.$$element.attr(a,t):F(this.$$element[0],a,t));
var w=this.$$observers;w&&r(w[c],function(e){try{e(t)}catch(e){i(e)}})},$observe:function(e,t){var n=this,r=n.$$observers||(n.$$observers=he()),i=r[e]||(r[e]=[]);
return i.push(t),v.$evalAsync(function(){i.$$inter||!n.hasOwnProperty(e)||g(n[e])||t(n[e])}),function(){H(i,t)}}};var be=n.startSymbol(),we=n.endSymbol(),De="{{"==be&&"}}"==we?m:function(e){
return e.replace(/\{\{/g,be).replace(/}}/g,we)},$e=/^ngAttr[A-Z]/,Le=/^(.+)Start$/;return P.$$addBindingInfo=k?function(e,t){var n=e.data("$binding")||[];
qr(t)?n=n.concat(t):n.push(t),e.data("$binding",n)}:p,P.$$addBindingClass=k?function(e){j(e,"ng-binding")}:p,P.$$addScopeInfo=k?function(e,t,n,r){var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope";
e.data(i,t)}:p,P.$$addScopeClass=k?function(e,t){j(e,t?"ng-isolate-scope":"ng-scope")}:p,P.$$createComment=function(t,n){var r="";return k&&(r=" "+(t||"")+": "+(n||"")+" "),
e.document.createComment(r)},P}]}function mt(e,t){this.previousValue=e,this.currentValue=t}function ht(e){return we(e.replace(zi,""))}function _t(e,t){
var n="",r=e.split(/\s+/),i=t.split(/\s+/);e:for(var a=0;a<r.length;a++){for(var o=r[a],s=0;s<i.length;s++)if(o==i[s])continue e;n+=(n.length>0?" ":"")+o;
}return n}function gt(e){e=jr(e);var t=e.length;if(t<=1)return e;for(;t--;){var n=e[t];n.nodeType===ai&&Rr.call(e,t,1)}return e}function vt(e,t){if(t&&w(t))return t;
if(w(e)){var n=Vi.exec(e);if(n)return n[3]}}function yt(){var e={},n=!1;this.has=function(t){return e.hasOwnProperty(t)},this.register=function(t,n){fe(t,"controller"),
y(t)?l(e,t):e[t]=n},this.allowGlobals=function(){n=!0},this.$get=["$injector","$window",function(r,i){function a(e,n,r,i){if(!e||!y(e.$scope))throw t("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,n);
e.$scope[n]=r}return function(t,o,s,u){var c,d,f,p;if(s=s===!0,u&&w(u)&&(p=u),w(t)){if(d=t.match(Vi),!d)throw qi("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",t);
f=d[1],p=p||d[3],t=e.hasOwnProperty(f)?e[f]:pe(o.$scope,f,!0)||(n?pe(i,f,!0):void 0),de(t,f,!0)}if(s){var m=(qr(t)?t[t.length-1]:t).prototype;c=Object.create(m||null),
p&&a(o,p,c,f||t.name);var h;return h=l(function(){var e=r.invoke(t,c,o,f);return e!==c&&(y(e)||$(e))&&(c=e,p&&a(o,p,c,f||t.name)),c},{instance:c,identifier:p
})}return c=r.instantiate(t,o,f),p&&a(o,p,c,f||t.name),c}}]}function bt(){this.$get=["$window",function(e){return jr(e.document)}]}function wt(){this.$get=["$log",function(e){
return function(t,n){e.error.apply(e,arguments)}}]}function Mt(e){return y(e)?D(e)?e.toISOString():q(e):e}function Dt(){this.$get=function(){return function(e){
if(!e)return"";var t=[];return i(e,function(e,n){null===e||g(e)||(qr(e)?r(e,function(e){t.push(ne(n)+"="+ne(Mt(e)))}):t.push(ne(n)+"="+ne(Mt(e))))}),t.join("&");
}}}function $t(){this.$get=function(){return function(e){function t(e,a,o){null===e||g(e)||(qr(e)?r(e,function(e,n){t(e,a+"["+(y(e)?n:"")+"]")}):y(e)&&!D(e)?i(e,function(e,n){
t(e,a+(o?"":"[")+n+(o?"":"]"))}):n.push(ne(a)+"="+ne(Mt(e))))}if(!e)return"";var n=[];return t(e,"",!0),n.join("&")}}}function Lt(e,t){if(w(e)){var n=e.replace(Qi,"").trim();
if(n){var r=t("Content-Type");(r&&0===r.indexOf(Ji)||kt(n))&&(e=V(n))}}return e}function kt(e){var t=e.match(Ki);return t&&Zi[t[0]].test(e)}function xt(e){
function t(e,t){e&&(i[e]=i[e]?i[e]+", "+t:t)}var n,i=he();return w(e)?r(e.split("\n"),function(e){n=e.indexOf(":"),t(Yr(Gr(e.substr(0,n))),Gr(e.substr(n+1)));
}):y(e)&&r(e,function(e,n){t(Yr(n),Gr(e))}),i}function Tt(e){var t;return function(n){if(t||(t=xt(e)),n){var r=t[Yr(n)];return void 0===r&&(r=null),r}return t;
}}function St(e,t,n,i){return $(i)?i(e,t,n):(r(i,function(r){e=r(e,t,n)}),e)}function Yt(e){return 200<=e&&e<300}function Ct(){var e=this.defaults={transformResponse:[Lt],
transformRequest:[function(e){return!y(e)||T(e)||Y(e)||S(e)?e:q(e)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:I(Xi),put:I(Xi),
patch:I(Xi)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},n=!1;this.useApplyAsync=function(e){return v(e)?(n=!!e,
this):n};var i=!0;this.useLegacyPromiseExtensions=function(e){return v(e)?(i=!!e,this):i};var a=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(o,s,u,c,d,f){
function p(n){function a(e){var t=l({},e);return t.data=St(e.data,e.headers,e.status,u.transformResponse),Yt(e.status)?t:d.reject(t)}function o(e,t){var n,i={};
return r(e,function(e,r){$(e)?(n=e(t),null!=n&&(i[r]=n)):i[r]=e}),i}function s(t){var n,r,i,a=e.headers,s=l({},t.headers);a=l({},a.common,a[Yr(t.method)]);
e:for(n in a){r=Yr(n);for(i in s)if(Yr(i)===r)continue e;s[n]=a[n]}return o(s,I(t))}if(!y(n))throw t("$http")("badreq","Http request configuration must be an object.  Received: {0}",n);
if(!w(n.url))throw t("$http")("badreq","Http request configuration url must be a string.  Received: {0}",n.url);var u=l({method:"get",transformRequest:e.transformRequest,
transformResponse:e.transformResponse,paramSerializer:e.paramSerializer},n);u.headers=s(n),u.method=Cr(u.method),u.paramSerializer=w(u.paramSerializer)?f.get(u.paramSerializer):u.paramSerializer;
var c=function(t){var n=t.headers,i=St(t.data,Tt(n),void 0,t.transformRequest);return g(i)&&r(n,function(e,t){"content-type"===Yr(t)&&delete n[t]}),g(t.withCredentials)&&!g(e.withCredentials)&&(t.withCredentials=e.withCredentials),
_(t,i).then(a,a)},p=[c,void 0],m=d.when(u);for(r(D,function(e){(e.request||e.requestError)&&p.unshift(e.request,e.requestError),(e.response||e.responseError)&&p.push(e.response,e.responseError);
});p.length;){var h=p.shift(),v=p.shift();m=m.then(h,v)}return i?(m.success=function(e){return de(e,"fn"),m.then(function(t){e(t.data,t.status,t.headers,u);
}),m},m.error=function(e){return de(e,"fn"),m.then(null,function(t){e(t.data,t.status,t.headers,u)}),m}):(m.success=ta("success"),m.error=ta("error")),
m}function m(e){r(arguments,function(e){p[e]=function(t,n){return p(l({},n||{},{method:e,url:t}))}})}function h(e){r(arguments,function(e){p[e]=function(t,n,r){
return p(l({},r||{},{method:e,url:t,data:n}))}})}function _(t,i){function a(e){if(e){var t={};return r(e,function(e,r){t[r]=function(t){function r(){e(t);
}n?c.$applyAsync(r):c.$$phase?r():c.$apply(r)}}),t}}function u(e,t,r,i){function a(){l(t,e,r,i)}h&&(Yt(e)?h.put(L,[e,t,xt(r),i]):h.remove(L)),n?c.$applyAsync(a):(a(),
c.$$phase||c.$apply())}function l(e,n,r,i){n=n>=-1?n:0,(Yt(n)?w.resolve:w.reject)({data:e,status:n,headers:Tt(r),config:t,statusText:i})}function f(e){
l(e.data,e.status,I(e.headers()),e.statusText)}function m(){var e=p.pendingRequests.indexOf(t);e!==-1&&p.pendingRequests.splice(e,1)}var h,_,w=d.defer(),D=w.promise,$=t.headers,L=b(t.url,t.paramSerializer(t.params));
if(p.pendingRequests.push(t),D.then(m,m),!t.cache&&!e.cache||t.cache===!1||"GET"!==t.method&&"JSONP"!==t.method||(h=y(t.cache)?t.cache:y(e.cache)?e.cache:M),
h&&(_=h.get(L),v(_)?E(_)?_.then(f,f):qr(_)?l(_[1],_[0],I(_[2]),_[3]):l(_,200,{},"OK"):h.put(L,D)),g(_)){var k=An(t.url)?s()[t.xsrfCookieName||e.xsrfCookieName]:void 0;
k&&($[t.xsrfHeaderName||e.xsrfHeaderName]=k),o(t.method,L,i,u,$,t.timeout,t.withCredentials,t.responseType,a(t.eventHandlers),a(t.uploadEventHandlers));
}return D}function b(e,t){return t.length>0&&(e+=(e.indexOf("?")==-1?"?":"&")+t),e}var M=u("$http");e.paramSerializer=w(e.paramSerializer)?f.get(e.paramSerializer):e.paramSerializer;
var D=[];return r(a,function(e){D.unshift(w(e)?f.get(e):f.invoke(e))}),p.pendingRequests=[],m("get","delete","head","jsonp"),h("post","put","patch"),p.defaults=e,
p}]}function Et(){this.$get=function(){return function(){return new e.XMLHttpRequest}}}function At(){this.$get=["$browser","$window","$document","$xhrFactory",function(e,t,n,r){
return Ft(e,r,e.defer,t.angular.callbacks,n[0])}]}function Ft(e,t,n,i,a){function o(e,t,n){var r=a.createElement("script"),o=null;return r.type="text/javascript",
r.src=e,r.async=!0,o=function(e){fi(r,"load",o),fi(r,"error",o),a.body.removeChild(r),r=null;var s=-1,u="unknown";e&&("load"!==e.type||i[t].called||(e={
type:"error"}),u=e.type,s="error"===e.type?404:200),n&&n(s,u)},di(r,"load",o),di(r,"error",o),a.body.appendChild(r),o}return function(a,s,u,l,c,d,f,m,h,_){
function y(){M&&M(),D&&D.abort()}function b(t,r,i,a,o){v(L)&&n.cancel(L),M=D=null,t(r,i,a,o),e.$$completeOutstandingRequest(p)}if(e.$$incOutstandingRequestCount(),
s=s||e.url(),"jsonp"==Yr(a)){var w="_"+(i.counter++).toString(36);i[w]=function(e){i[w].data=e,i[w].called=!0};var M=o(s.replace("JSON_CALLBACK","angular.callbacks."+w),w,function(e,t){
b(l,e,i[w].data,"",t),i[w]=p})}else{var D=t(a,s);D.open(a,s,!0),r(c,function(e,t){v(e)&&D.setRequestHeader(t,e)}),D.onload=function(){var e=D.statusText||"",t="response"in D?D.response:D.responseText,n=1223===D.status?204:D.status;
0===n&&(n=t?200:"file"==En(s).protocol?404:0),b(l,n,t,D.getAllResponseHeaders(),e)};var $=function(){b(l,-1,null,null,"")};if(D.onerror=$,D.onabort=$,r(h,function(e,t){
D.addEventListener(t,e)}),r(_,function(e,t){D.upload.addEventListener(t,e)}),f&&(D.withCredentials=!0),m)try{D.responseType=m}catch(e){if("json"!==m)throw e;
}D.send(g(u)?null:u)}if(d>0)var L=n(y,d);else E(d)&&d.then(y)}}function jt(){var e="{{",t="}}";this.startSymbol=function(t){return t?(e=t,this):e},this.endSymbol=function(e){
return e?(t=e,this):t},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function a(e){return"\\\\\\"+e}function o(n){return n.replace(p,e).replace(m,t);
}function s(e){if(null==e)return"";switch(typeof e){case"string":break;case"number":e=""+e;break;default:e=q(e)}return e}function u(e,t,n,r){var i;return i=e.$watch(function(e){
return i(),r(e)},t,n)}function c(a,c,p,m){function _(e){try{return e=E(e),m&&!v(e)?e:s(e)}catch(e){r(na.interr(a,e))}}if(!a.length||a.indexOf(e)===-1){
var y;if(!c){var b=o(a);y=h(b),y.exp=a,y.expressions=[],y.$$watchDelegate=u}return y}m=!!m;for(var w,M,D,L=0,k=[],x=[],T=a.length,S=[],Y=[];L<T;){if((w=a.indexOf(e,L))==-1||(M=a.indexOf(t,w+d))==-1){
L!==T&&S.push(o(a.substring(L)));break}L!==w&&S.push(o(a.substring(L,w))),D=a.substring(w+d,M),k.push(D),x.push(n(D,_)),L=M+f,Y.push(S.length),S.push("");
}if(p&&S.length>1&&na.throwNoconcat(a),!c||k.length){var C=function(e){for(var t=0,n=k.length;t<n;t++){if(m&&g(e[t]))return;S[Y[t]]=e[t]}return S.join("");
},E=function(e){return p?i.getTrusted(p,e):i.valueOf(e)};return l(function(e){var t=0,n=k.length,i=new Array(n);try{for(;t<n;t++)i[t]=x[t](e);return C(i);
}catch(e){r(na.interr(a,e))}},{exp:a,expressions:k,$$watchDelegate:function(e,t){var n;return e.$watchGroup(x,function(r,i){var a=C(r);$(t)&&t.call(this,a,r!==i?n:a,e),
n=a})}})}}var d=e.length,f=t.length,p=new RegExp(e.replace(/./g,a),"g"),m=new RegExp(t.replace(/./g,a),"g");return c.startSymbol=function(){return e},c.endSymbol=function(){
return t},c}]}function Pt(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(e,t,n,r,i){function a(a,s,u,l){function c(){d?a.apply(null,f):a(h);
}var d=arguments.length>4,f=d?B(arguments,4):[],p=t.setInterval,m=t.clearInterval,h=0,_=v(l)&&!l,g=(_?r:n).defer(),y=g.promise;return u=v(u)?u:0,y.$$intervalId=p(function(){
_?i.defer(c):e.$evalAsync(c),g.notify(h++),u>0&&h>=u&&(g.resolve(h),m(y.$$intervalId),delete o[y.$$intervalId]),_||e.$apply()},s),o[y.$$intervalId]=g,y;
}var o={};return a.cancel=function(e){return!!(e&&e.$$intervalId in o)&&(o[e.$$intervalId].reject("canceled"),t.clearInterval(e.$$intervalId),delete o[e.$$intervalId],
!0)},a}]}function Ot(e){for(var t=e.split("/"),n=t.length;n--;)t[n]=te(t[n]);return t.join("/")}function Ht(e,t){var n=En(e);t.$$protocol=n.protocol,t.$$host=n.hostname,
t.$$port=d(n.port)||ia[n.protocol]||null}function Rt(e,t){var n="/"!==e.charAt(0);n&&(e="/"+e);var r=En(e);t.$$path=decodeURIComponent(n&&"/"===r.pathname.charAt(0)?r.pathname.substring(1):r.pathname),
t.$$search=Q(r.search),t.$$hash=decodeURIComponent(r.hash),t.$$path&&"/"!=t.$$path.charAt(0)&&(t.$$path="/"+t.$$path)}function It(e,t){if(0===t.indexOf(e))return t.substr(e.length);
}function Nt(e){var t=e.indexOf("#");return t==-1?e:e.substr(0,t)}function Ut(e){return e.replace(/(#.+)|#$/,"$1")}function Bt(e){return e.substr(0,Nt(e).lastIndexOf("/")+1);
}function Wt(e){return e.substring(0,e.indexOf("/",e.indexOf("//")+2))}function zt(e,t,n){this.$$html5=!0,n=n||"",Ht(e,this),this.$$parse=function(e){var n=It(t,e);
if(!w(n))throw aa("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',e,t);Rt(n,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){
var e=ee(this.$$search),n=this.$$hash?"#"+te(this.$$hash):"";this.$$url=Ot(this.$$path)+(e?"?"+e:"")+n,this.$$absUrl=t+this.$$url.substr(1)},this.$$parseLinkUrl=function(r,i){
if(i&&"#"===i[0])return this.hash(i.slice(1)),!0;var a,o,s;return v(a=It(e,r))?(o=a,s=v(a=It(n,a))?t+(It("/",a)||a):e+o):v(a=It(t,r))?s=t+a:t==r+"/"&&(s=t),
s&&this.$$parse(s),!!s}}function qt(e,t,n){Ht(e,this),this.$$parse=function(r){function i(e,t,n){var r,i=/^\/[A-Z]:(\/.*)/;return 0===t.indexOf(n)&&(t=t.replace(n,"")),
i.exec(t)?e:(r=i.exec(e),r?r[1]:e)}var a,o=It(e,r)||It(t,r);g(o)||"#"!==o.charAt(0)?this.$$html5?a=o:(a="",g(o)&&(e=r,this.replace())):(a=It(n,o),g(a)&&(a=o)),
Rt(a,this),this.$$path=i(this.$$path,a,e),this.$$compose()},this.$$compose=function(){var t=ee(this.$$search),r=this.$$hash?"#"+te(this.$$hash):"";this.$$url=Ot(this.$$path)+(t?"?"+t:"")+r,
this.$$absUrl=e+(this.$$url?n+this.$$url:"")},this.$$parseLinkUrl=function(t,n){return Nt(e)==Nt(t)&&(this.$$parse(t),!0)}}function Vt(e,t,n){this.$$html5=!0,
qt.apply(this,arguments),this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0;var a,o;return e==Nt(r)?a=r:(o=It(t,r))?a=e+n+o:t===r+"/"&&(a=t),
a&&this.$$parse(a),!!a},this.$$compose=function(){var t=ee(this.$$search),r=this.$$hash?"#"+te(this.$$hash):"";this.$$url=Ot(this.$$path)+(t?"?"+t:"")+r,
this.$$absUrl=e+n+this.$$url}}function Gt(e){return function(){return this[e]}}function Jt(e,t){return function(n){return g(n)?this[e]:(this[e]=t(n),this.$$compose(),
this)}}function Xt(){var e="",t={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(t){return v(t)?(e=t,this):e},this.html5Mode=function(e){
return C(e)?(t.enabled=e,this):y(e)?(C(e.enabled)&&(t.enabled=e.enabled),C(e.requireBase)&&(t.requireBase=e.requireBase),C(e.rewriteLinks)&&(t.rewriteLinks=e.rewriteLinks),
this):t},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,a,o){function s(e,t,n){var i=l.url(),a=l.$$state;try{r.url(e,t,n),
l.$$state=r.state()}catch(e){throw l.url(i),l.$$state=a,e}}function u(e,t){n.$broadcast("$locationChangeSuccess",l.absUrl(),e,l.$$state,t)}var l,c,d,f=r.baseHref(),p=r.url();
if(t.enabled){if(!f&&t.requireBase)throw aa("nobase","$location in HTML5 mode requires a <base> tag to be present!");d=Wt(p)+(f||"/"),c=i.history?zt:Vt;
}else d=Nt(p),c=qt;var m=Bt(d);l=new c(d,m,"#"+e),l.$$parseLinkUrl(p,p),l.$$state=r.state();var h=/^\s*(javascript|mailto):/i;a.on("click",function(e){
if(t.rewriteLinks&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&2!=e.which&&2!=e.button){for(var i=jr(e.target);"a"!==O(i[0]);)if(i[0]===a[0]||!(i=i.parent())[0])return;
var s=i.prop("href"),u=i.attr("href")||i.attr("xlink:href");y(s)&&"[object SVGAnimatedString]"===s.toString()&&(s=En(s.animVal).href),h.test(s)||!s||i.attr("target")||e.isDefaultPrevented()||l.$$parseLinkUrl(s,u)&&(e.preventDefault(),
l.absUrl()!=r.url()&&(n.$apply(),o.angular["ff-684208-preventDefault"]=!0))}}),Ut(l.absUrl())!=Ut(p)&&r.url(l.absUrl(),!0);var _=!0;return r.onUrlChange(function(e,t){
return g(It(m,e))?void(o.location.href=e):(n.$evalAsync(function(){var r,i=l.absUrl(),a=l.$$state;e=Ut(e),l.$$parse(e),l.$$state=t,r=n.$broadcast("$locationChangeStart",e,i,t,a).defaultPrevented,
l.absUrl()===e&&(r?(l.$$parse(i),l.$$state=a,s(i,!1,a)):(_=!1,u(i,a)))}),void(n.$$phase||n.$digest()))}),n.$watch(function(){var e=Ut(r.url()),t=Ut(l.absUrl()),a=r.state(),o=l.$$replace,c=e!==t||l.$$html5&&i.history&&a!==l.$$state;
(_||c)&&(_=!1,n.$evalAsync(function(){var t=l.absUrl(),r=n.$broadcast("$locationChangeStart",t,e,l.$$state,a).defaultPrevented;l.absUrl()===t&&(r?(l.$$parse(e),
l.$$state=a):(c&&s(t,o,a===l.$$state?null:l.$$state),u(e,a)))})),l.$$replace=!1}),l}]}function Kt(){var e=!0,t=this;this.debugEnabled=function(t){return v(t)?(e=t,
this):e},this.$get=["$window",function(n){function i(e){return e instanceof Error&&(e.stack?e=e.message&&e.stack.indexOf(e.message)===-1?"Error: "+e.message+"\n"+e.stack:e.stack:e.sourceURL&&(e=e.message+"\n"+e.sourceURL+":"+e.line)),
e}function a(e){var t=n.console||{},a=t[e]||t.log||p,o=!1;try{o=!!a.apply}catch(e){}return o?function(){var e=[];return r(arguments,function(t){e.push(i(t));
}),a.apply(t,e)}:function(e,t){a(e,null==t?"":t)}}return{log:a("log"),info:a("info"),warn:a("warn"),error:a("error"),debug:function(){var n=a("debug");return function(){
e&&n.apply(t,arguments)}}()}}]}function Zt(e,t){if("__defineGetter__"===e||"__defineSetter__"===e||"__lookupGetter__"===e||"__lookupSetter__"===e||"__proto__"===e)throw sa("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",t);
return e}function Qt(e){return e+""}function en(e,t){if(e){if(e.constructor===e)throw sa("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",t);
if(e.window===e)throw sa("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",t);if(e.children&&(e.nodeName||e.prop&&e.attr&&e.find))throw sa("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",t);
if(e===Object)throw sa("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",t)}return e}function tn(e,t){if(e){if(e.constructor===e)throw sa("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",t);
if(e===ua||e===la||e===ca)throw sa("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",t)}}function nn(e,t){
if(e&&(e===(0).constructor||e===(!1).constructor||e==="".constructor||e==={}.constructor||e===[].constructor||e===Function.constructor))throw sa("isecaf","Assigning to a constructor is disallowed! Expression: {0}",t);
}function rn(e,t){return"undefined"!=typeof e?e:t}function an(e,t){return"undefined"==typeof e?t:"undefined"==typeof t?e:e+t}function on(e,t){var n=e(t);
return!n.$stateful}function sn(e,t){var n,i;switch(e.type){case ma.Program:n=!0,r(e.body,function(e){sn(e.expression,t),n=n&&e.expression.constant}),e.constant=n;
break;case ma.Literal:e.constant=!0,e.toWatch=[];break;case ma.UnaryExpression:sn(e.argument,t),e.constant=e.argument.constant,e.toWatch=e.argument.toWatch;
break;case ma.BinaryExpression:sn(e.left,t),sn(e.right,t),e.constant=e.left.constant&&e.right.constant,e.toWatch=e.left.toWatch.concat(e.right.toWatch);
break;case ma.LogicalExpression:sn(e.left,t),sn(e.right,t),e.constant=e.left.constant&&e.right.constant,e.toWatch=e.constant?[]:[e];break;case ma.ConditionalExpression:
sn(e.test,t),sn(e.alternate,t),sn(e.consequent,t),e.constant=e.test.constant&&e.alternate.constant&&e.consequent.constant,e.toWatch=e.constant?[]:[e];break;
case ma.Identifier:e.constant=!1,e.toWatch=[e];break;case ma.MemberExpression:sn(e.object,t),e.computed&&sn(e.property,t),e.constant=e.object.constant&&(!e.computed||e.property.constant),
e.toWatch=[e];break;case ma.CallExpression:n=!!e.filter&&on(t,e.callee.name),i=[],r(e.arguments,function(e){sn(e,t),n=n&&e.constant,e.constant||i.push.apply(i,e.toWatch);
}),e.constant=n,e.toWatch=e.filter&&on(t,e.callee.name)?i:[e];break;case ma.AssignmentExpression:sn(e.left,t),sn(e.right,t),e.constant=e.left.constant&&e.right.constant,
e.toWatch=[e];break;case ma.ArrayExpression:n=!0,i=[],r(e.elements,function(e){sn(e,t),n=n&&e.constant,e.constant||i.push.apply(i,e.toWatch)}),e.constant=n,
e.toWatch=i;break;case ma.ObjectExpression:n=!0,i=[],r(e.properties,function(e){sn(e.value,t),n=n&&e.value.constant,e.value.constant||i.push.apply(i,e.value.toWatch);
}),e.constant=n,e.toWatch=i;break;case ma.ThisExpression:e.constant=!1,e.toWatch=[];break;case ma.LocalsExpression:e.constant=!1,e.toWatch=[]}}function un(e){
if(1==e.length){var t=e[0].expression,n=t.toWatch;return 1!==n.length?n:n[0]!==t?n:void 0}}function ln(e){return e.type===ma.Identifier||e.type===ma.MemberExpression;
}function cn(e){if(1===e.body.length&&ln(e.body[0].expression))return{type:ma.AssignmentExpression,left:e.body[0].expression,right:{type:ma.NGValueParameter
},operator:"="}}function dn(e){return 0===e.body.length||1===e.body.length&&(e.body[0].expression.type===ma.Literal||e.body[0].expression.type===ma.ArrayExpression||e.body[0].expression.type===ma.ObjectExpression);
}function fn(e){return e.constant}function pn(e,t){this.astBuilder=e,this.$filter=t}function mn(e,t){this.astBuilder=e,this.$filter=t}function hn(e){return"constructor"==e;
}function _n(e){return $(e.valueOf)?e.valueOf():_a.call(e)}function gn(){var e,t,n=he(),i=he(),a={true:!0,false:!1,null:null,undefined:void 0};this.addLiteral=function(e,t){
a[e]=t},this.setIdentifierFns=function(n,r){return e=n,t=r,this},this.$get=["$filter",function(o){function s(e,t,r){var a,s,l;switch(r=r||b,typeof e){case"string":
e=e.trim(),l=e;var _=r?i:n;if(a=_[l],!a){":"===e.charAt(0)&&":"===e.charAt(1)&&(s=!0,e=e.substring(2));var v=r?y:g,w=new pa(v),M=new ha(w,o,v);a=M.parse(e),
a.constant?a.$$watchDelegate=m:s?a.$$watchDelegate=a.literal?f:d:a.inputs&&(a.$$watchDelegate=c),r&&(a=u(a)),_[l]=a}return h(a,t);case"function":return h(e,t);
default:return h(p,t)}}function u(e){function t(t,n,r,i){var a=b;b=!0;try{return e(t,n,r,i)}finally{b=a}}if(!e)return e;t.$$watchDelegate=e.$$watchDelegate,
t.assign=u(e.assign),t.constant=e.constant,t.literal=e.literal;for(var n=0;e.inputs&&n<e.inputs.length;++n)e.inputs[n]=u(e.inputs[n]);return t.inputs=e.inputs,
t}function l(e,t){return null==e||null==t?e===t:("object"!=typeof e||(e=_n(e),"object"!=typeof e))&&(e===t||e!==e&&t!==t)}function c(e,t,n,r,i){var a,o=r.inputs;
if(1===o.length){var s=l;return o=o[0],e.$watch(function(e){var t=o(e);return l(t,s)||(a=r(e,void 0,void 0,[t]),s=t&&_n(t)),a},t,n,i)}for(var u=[],c=[],d=0,f=o.length;d<f;d++)u[d]=l,
c[d]=null;return e.$watch(function(e){for(var t=!1,n=0,i=o.length;n<i;n++){var s=o[n](e);(t||(t=!l(s,u[n])))&&(c[n]=s,u[n]=s&&_n(s))}return t&&(a=r(e,void 0,void 0,c)),
a},t,n,i)}function d(e,t,n,r){var i,a;return i=e.$watch(function(e){return r(e)},function(e,n,r){a=e,$(t)&&t.apply(this,arguments),v(e)&&r.$$postDigest(function(){
v(a)&&i()})},n)}function f(e,t,n,i){function a(e){var t=!0;return r(e,function(e){v(e)||(t=!1)}),t}var o,s;return o=e.$watch(function(e){return i(e)},function(e,n,r){
s=e,$(t)&&t.call(this,e,n,r),a(e)&&r.$$postDigest(function(){a(s)&&o()})},n)}function m(e,t,n,r){var i;return i=e.$watch(function(e){return i(),r(e)},t,n);
}function h(e,t){if(!t)return e;var n=e.$$watchDelegate,r=!1,i=n!==f&&n!==d,a=i?function(n,i,a,o){var s=r&&o?o[0]:e(n,i,a,o);return t(s,n,i)}:function(n,r,i,a){
var o=e(n,r,i,a),s=t(o,n,r);return v(o)?s:o};return e.$$watchDelegate&&e.$$watchDelegate!==c?a.$$watchDelegate=e.$$watchDelegate:t.$stateful||(a.$$watchDelegate=c,
r=!e.inputs,a.inputs=e.inputs?e.inputs:[e]),a}var _=Xr().noUnsafeEval,g={csp:_,expensiveChecks:!1,literals:R(a),isIdentifierStart:$(e)&&e,isIdentifierContinue:$(t)&&t
},y={csp:_,expensiveChecks:!0,literals:R(a),isIdentifierStart:$(e)&&e,isIdentifierContinue:$(t)&&t},b=!1;return s.$$runningExpensiveChecks=function(){return b;
},s}]}function vn(){this.$get=["$rootScope","$exceptionHandler",function(e,t){return bn(function(t){e.$evalAsync(t)},t)}]}function yn(){this.$get=["$browser","$exceptionHandler",function(e,t){
return bn(function(t){e.defer(t)},t)}]}function bn(e,n){function i(){this.$$state={status:0}}function a(e,t){return function(n){t.call(e,n)}}function o(e){
var t,r,i;i=e.pending,e.processScheduled=!1,e.pending=void 0;for(var a=0,o=i.length;a<o;++a){r=i[a][0],t=i[a][e.status];try{$(t)?r.resolve(t(e.value)):1===e.status?r.resolve(e.value):r.reject(e.value);
}catch(e){r.reject(e),n(e)}}}function s(t){!t.processScheduled&&t.pending&&(t.processScheduled=!0,e(function(){o(t)}))}function u(){this.promise=new i}
function c(e){var t=new u,n=0,i=qr(e)?[]:{};return r(e,function(e,r){n++,_(e).then(function(e){i.hasOwnProperty(r)||(i[r]=e,--n||t.resolve(i))},function(e){
i.hasOwnProperty(r)||t.reject(e)})}),0===n&&t.resolve(i),t.promise}var d=t("$q",TypeError),f=function(){var e=new u;return e.resolve=a(e,e.resolve),e.reject=a(e,e.reject),
e.notify=a(e,e.notify),e};l(i.prototype,{then:function(e,t,n){if(g(e)&&g(t)&&g(n))return this;var r=new u;return this.$$state.pending=this.$$state.pending||[],
this.$$state.pending.push([r,e,t,n]),this.$$state.status>0&&s(this.$$state),r.promise},catch:function(e){return this.then(null,e)},finally:function(e,t){
return this.then(function(t){return h(t,!0,e)},function(t){return h(t,!1,e)},t)}}),l(u.prototype,{resolve:function(e){this.promise.$$state.status||(e===this.promise?this.$$reject(d("qcycle","Expected promise to be resolved with value other than itself '{0}'",e)):this.$$resolve(e));
},$$resolve:function(e){function t(e){u||(u=!0,o.$$resolve(e))}function r(e){u||(u=!0,o.$$reject(e))}var i,o=this,u=!1;try{(y(e)||$(e))&&(i=e&&e.then),
$(i)?(this.promise.$$state.status=-1,i.call(e,t,r,a(this,this.notify))):(this.promise.$$state.value=e,this.promise.$$state.status=1,s(this.promise.$$state));
}catch(e){r(e),n(e)}},reject:function(e){this.promise.$$state.status||this.$$reject(e)},$$reject:function(e){this.promise.$$state.value=e,this.promise.$$state.status=2,
s(this.promise.$$state)},notify:function(t){var r=this.promise.$$state.pending;this.promise.$$state.status<=0&&r&&r.length&&e(function(){for(var e,i,a=0,o=r.length;a<o;a++){
i=r[a][0],e=r[a][3];try{i.notify($(e)?e(t):t)}catch(e){n(e)}}})}});var p=function(e){var t=new u;return t.reject(e),t.promise},m=function(e,t){var n=new u;
return t?n.resolve(e):n.reject(e),n.promise},h=function(e,t,n){var r=null;try{$(n)&&(r=n())}catch(e){return m(e,!1)}return E(r)?r.then(function(){return m(e,t);
},function(e){return m(e,!1)}):m(e,t)},_=function(e,t,n,r){var i=new u;return i.resolve(e),i.promise.then(t,n,r)},v=_,b=function(e){function t(e){r.resolve(e);
}function n(e){r.reject(e)}if(!$(e))throw d("norslvr","Expected resolverFn, got '{0}'",e);var r=new u;return e(t,n),r.promise};return b.prototype=i.prototype,
b.defer=f,b.reject=p,b.when=_,b.resolve=v,b.all=c,b}function wn(){this.$get=["$window","$timeout",function(e,t){var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame,r=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame,i=!!n,a=i?function(e){
var t=n(e);return function(){r(t)}}:function(e){var n=t(e,16.66,!1);return function(){t.cancel(n)}};return a.supported=i,a}]}function Mn(){function e(e){
function t(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,
this.$id=o(),this.$$ChildScope=null}return t.prototype=e,t}var i=10,a=t("$rootScope"),s=null,u=null;this.digestTtl=function(e){return arguments.length&&(i=e),
i},this.$get=["$exceptionHandler","$parse","$browser",function(t,l,c){function d(e){e.currentScope.$$destroyed=!0}function f(e){9===Fr&&(e.$$childHead&&f(e.$$childHead),
e.$$nextSibling&&f(e.$$nextSibling)),e.$parent=e.$$nextSibling=e.$$prevSibling=e.$$childHead=e.$$childTail=e.$root=e.$$watchers=null}function m(){this.$id=o(),
this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,
this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}function h(e){if(L.$$phase)throw a("inprog","{0} already in progress",L.$$phase);
L.$$phase=e}function _(){L.$$phase=null}function v(e,t){do e.$$watchersCount+=t;while(e=e.$parent)}function b(e,t,n){do e.$$listenerCount[n]-=t,0===e.$$listenerCount[n]&&delete e.$$listenerCount[n];while(e=e.$parent);
}function w(){}function M(){for(;T.length;)try{T.shift()()}catch(e){t(e)}u=null}function D(){null===u&&(u=c.defer(function(){L.$apply(M)}))}m.prototype={
constructor:m,$new:function(t,n){var r;return n=n||this,t?(r=new m,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=e(this)),r=new this.$$ChildScope),
r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,n.$$childTail=r):n.$$childHead=n.$$childTail=r,(t||n!=this)&&r.$on("$destroy",d),
r},$watch:function(e,t,n,r){var i=l(e);if(i.$$watchDelegate)return i.$$watchDelegate(this,t,n,i,e);var a=this,o=a.$$watchers,u={fn:t,last:w,get:i,exp:r||e,
eq:!!n};return s=null,$(t)||(u.fn=p),o||(o=a.$$watchers=[]),o.unshift(u),v(this,1),function(){H(o,u)>=0&&v(a,-1),s=null}},$watchGroup:function(e,t){function n(){
u=!1,l?(l=!1,t(a,a,s)):t(a,i,s)}var i=new Array(e.length),a=new Array(e.length),o=[],s=this,u=!1,l=!0;if(!e.length){var c=!0;return s.$evalAsync(function(){
c&&t(a,a,s)}),function(){c=!1}}return 1===e.length?this.$watch(e[0],function(e,n,r){a[0]=e,i[0]=n,t(a,e===n?a:i,r)}):(r(e,function(e,t){var r=s.$watch(e,function(e,r){
a[t]=e,i[t]=r,u||(u=!0,s.$evalAsync(n))});o.push(r)}),function(){for(;o.length;)o.shift()()})},$watchCollection:function(e,t){function r(e){a=e;var t,r,i,s,u;
if(!g(a)){if(y(a))if(n(a)){o!==p&&(o=p,_=o.length=0,d++),t=a.length,_!==t&&(d++,o.length=_=t);for(var l=0;l<t;l++)u=o[l],s=a[l],i=u!==u&&s!==s,i||u===s||(d++,
o[l]=s)}else{o!==m&&(o=m={},_=0,d++),t=0;for(r in a)Sr.call(a,r)&&(t++,s=a[r],u=o[r],r in o?(i=u!==u&&s!==s,i||u===s||(d++,o[r]=s)):(_++,o[r]=s,d++));if(_>t){
d++;for(r in o)Sr.call(a,r)||(_--,delete o[r])}}else o!==a&&(o=a,d++);return d}}function i(){if(h?(h=!1,t(a,a,u)):t(a,s,u),c)if(y(a))if(n(a)){s=new Array(a.length);
for(var e=0;e<a.length;e++)s[e]=a[e]}else{s={};for(var r in a)Sr.call(a,r)&&(s[r]=a[r])}else s=a}r.$stateful=!0;var a,o,s,u=this,c=t.length>1,d=0,f=l(e,r),p=[],m={},h=!0,_=0;
return this.$watch(f,i)},$digest:function(){var e,n,r,o,l,d,f,p,m,g,v,y,b=i,D=this,T=[];h("$digest"),c.$$checkUrlChange(),this===L&&null!==u&&(c.defer.cancel(u),
M()),s=null;do{for(p=!1,g=D;k.length;){try{y=k.shift(),y.scope.$eval(y.expression,y.locals)}catch(e){t(e)}s=null}e:do{if(d=g.$$watchers)for(f=d.length;f--;)try{
if(e=d[f])if(l=e.get,(n=l(g))===(r=e.last)||(e.eq?N(n,r):"number"==typeof n&&"number"==typeof r&&isNaN(n)&&isNaN(r))){if(e===s){p=!1;break e}}else p=!0,
s=e,e.last=e.eq?R(n,null):n,o=e.fn,o(n,r===w?n:r,g),b<5&&(v=4-b,T[v]||(T[v]=[]),T[v].push({msg:$(e.exp)?"fn: "+(e.exp.name||e.exp.toString()):e.exp,newVal:n,
oldVal:r}))}catch(e){t(e)}if(!(m=g.$$watchersCount&&g.$$childHead||g!==D&&g.$$nextSibling))for(;g!==D&&!(m=g.$$nextSibling);)g=g.$parent}while(g=m);if((p||k.length)&&!b--)throw _(),
a("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",i,T)}while(p||k.length);for(_();x.length;)try{x.shift()();
}catch(e){t(e)}},$destroy:function(){if(!this.$$destroyed){var e=this.$parent;this.$broadcast("$destroy"),this.$$destroyed=!0,this===L&&c.$$applicationDestroyed(),
v(this,-this.$$watchersCount);for(var t in this.$$listenerCount)b(this,this.$$listenerCount[t],t);e&&e.$$childHead==this&&(e.$$childHead=this.$$nextSibling),
e&&e.$$childTail==this&&(e.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=p,this.$on=this.$watch=this.$watchGroup=function(){return p},this.$$listeners={},
this.$$nextSibling=null,f(this)}},$eval:function(e,t){return l(e)(this,t)},$evalAsync:function(e,t){L.$$phase||k.length||c.defer(function(){k.length&&L.$digest();
}),k.push({scope:this,expression:l(e),locals:t})},$$postDigest:function(e){x.push(e)},$apply:function(e){try{h("$apply");try{return this.$eval(e)}finally{
_()}}catch(e){t(e)}finally{try{L.$digest()}catch(e){throw t(e),e}}},$applyAsync:function(e){function t(){n.$eval(e)}var n=this;e&&T.push(t),e=l(e),D()},
$on:function(e,t){var n=this.$$listeners[e];n||(this.$$listeners[e]=n=[]),n.push(t);var r=this;do r.$$listenerCount[e]||(r.$$listenerCount[e]=0),r.$$listenerCount[e]++;while(r=r.$parent);
var i=this;return function(){var r=n.indexOf(t);r!==-1&&(n[r]=null,b(i,1,e))}},$emit:function(e,n){var r,i,a,o=[],s=this,u=!1,l={name:e,targetScope:s,stopPropagation:function(){
u=!0},preventDefault:function(){l.defaultPrevented=!0},defaultPrevented:!1},c=U([l],arguments,1);do{for(r=s.$$listeners[e]||o,l.currentScope=s,i=0,a=r.length;i<a;i++)if(r[i])try{
r[i].apply(null,c)}catch(e){t(e)}else r.splice(i,1),i--,a--;if(u)return l.currentScope=null,l;s=s.$parent}while(s);return l.currentScope=null,l},$broadcast:function(e,n){
var r=this,i=r,a=r,o={name:e,targetScope:r,preventDefault:function(){o.defaultPrevented=!0},defaultPrevented:!1};if(!r.$$listenerCount[e])return o;for(var s,u,l,c=U([o],arguments,1);i=a;){
for(o.currentScope=i,s=i.$$listeners[e]||[],u=0,l=s.length;u<l;u++)if(s[u])try{s[u].apply(null,c)}catch(e){t(e)}else s.splice(u,1),u--,l--;if(!(a=i.$$listenerCount[e]&&i.$$childHead||i!==r&&i.$$nextSibling))for(;i!==r&&!(a=i.$$nextSibling);)i=i.$parent;
}return o.currentScope=null,o}};var L=new m,k=L.$$asyncQueue=[],x=L.$$postDigestQueue=[],T=L.$$applyAsyncQueue=[];return L}]}function Dn(){var e=/^\s*(https?|ftp|mailto|tel|file):/,t=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(t){return v(t)?(e=t,this):e},this.imgSrcSanitizationWhitelist=function(e){return v(e)?(t=e,this):t},this.$get=function(){
return function(n,r){var i,a=r?t:e;return i=En(n).href,""===i||i.match(a)?n:"unsafe:"+i}}}function $n(e){if("self"===e)return e;if(w(e)){if(e.indexOf("***")>-1)throw ga("iwcard","Illegal sequence *** in string matcher.  String: {0}",e);
return e=Jr(e).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+e+"$")}if(L(e))return new RegExp("^"+e.source+"$");throw ga("imatcher",'Matchers may only be "self", string patterns or RegExp objects');
}function Ln(e){var t=[];return v(e)&&r(e,function(e){t.push($n(e))}),t}function kn(){this.SCE_CONTEXTS=va;var e=["self"],t=[];this.resourceUrlWhitelist=function(t){
return arguments.length&&(e=Ln(t)),e},this.resourceUrlBlacklist=function(e){return arguments.length&&(t=Ln(e)),t},this.$get=["$injector",function(n){function r(e,t){
return"self"===e?An(t):!!e.exec(t.href)}function i(n){var i,a,o=En(n.toString()),s=!1;for(i=0,a=e.length;i<a;i++)if(r(e[i],o)){s=!0;break}if(s)for(i=0,
a=t.length;i<a;i++)if(r(t[i],o)){s=!1;break}return s}function a(e){var t=function(e){this.$$unwrapTrustedValue=function(){return e}};return e&&(t.prototype=new e),
t.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},t.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},t}function o(e,t){
var n=d.hasOwnProperty(e)?d[e]:null;if(!n)throw ga("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",e,t);if(null===t||g(t)||""===t)return t;
if("string"!=typeof t)throw ga("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",e);return new n(t)}function s(e){
return e instanceof c?e.$$unwrapTrustedValue():e}function u(e,t){if(null===t||g(t)||""===t)return t;var n=d.hasOwnProperty(e)?d[e]:null;if(n&&t instanceof n)return t.$$unwrapTrustedValue();
if(e===va.RESOURCE_URL){if(i(t))return t;throw ga("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",t.toString());
}if(e===va.HTML)return l(t);throw ga("unsafe","Attempting to use an unsafe value in a safe context.")}var l=function(e){throw ga("unsafe","Attempting to use an unsafe value in a safe context.");
};n.has("$sanitize")&&(l=n.get("$sanitize"));var c=a(),d={};return d[va.HTML]=a(c),d[va.CSS]=a(c),d[va.URL]=a(c),d[va.JS]=a(c),d[va.RESOURCE_URL]=a(d[va.URL]),
{trustAs:o,getTrusted:u,valueOf:s}}]}function xn(){var e=!0;this.enabled=function(t){return arguments.length&&(e=!!t),e},this.$get=["$parse","$sceDelegate",function(t,n){
if(e&&Fr<8)throw ga("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
var i=I(va);i.isEnabled=function(){return e},i.trustAs=n.trustAs,i.getTrusted=n.getTrusted,i.valueOf=n.valueOf,e||(i.trustAs=i.getTrusted=function(e,t){
return t},i.valueOf=m),i.parseAs=function(e,n){var r=t(n);return r.literal&&r.constant?r:t(n,function(t){return i.getTrusted(e,t)})};var a=i.parseAs,o=i.getTrusted,s=i.trustAs;
return r(va,function(e,t){var n=Yr(t);i[we("parse_as_"+n)]=function(t){return a(e,t)},i[we("get_trusted_"+n)]=function(t){return o(e,t)},i[we("trust_as_"+n)]=function(t){
return s(e,t)}}),i}]}function Tn(){this.$get=["$window","$document",function(e,t){var n,r,i={},a=e.chrome&&e.chrome.app&&e.chrome.app.runtime,o=!a&&e.history&&e.history.pushState,s=d((/android (\d+)/.exec(Yr((e.navigator||{}).userAgent))||[])[1]),u=/Boxee/i.test((e.navigator||{}).userAgent),l=t[0]||{},c=/^(Moz|webkit|ms)(?=[A-Z])/,f=l.body&&l.body.style,p=!1,m=!1;
if(f){for(var h in f)if(r=c.exec(h)){n=r[0],n=n.substr(0,1).toUpperCase()+n.substr(1);break}n||(n="WebkitOpacity"in f&&"webkit"),p=!!("transition"in f||n+"Transition"in f),
m=!!("animation"in f||n+"Animation"in f),!s||p&&m||(p=w(f.webkitTransition),m=w(f.webkitAnimation))}return{history:!(!o||s<4||u),hasEvent:function(e){if("input"===e&&Fr<=11)return!1;
if(g(i[e])){var t=l.createElement("div");i[e]="on"+e in t}return i[e]},csp:Xr(),vendorPrefix:n,transitions:p,animations:m,android:s}}]}function Sn(){var e;
this.httpOptions=function(t){return t?(e=t,this):e},this.$get=["$templateCache","$http","$q","$sce",function(t,n,r,i){function a(o,s){function u(e){if(!s)throw ya("tpload","Failed to load template: {0} (HTTP status: {1} {2})",o,e.status,e.statusText);
return r.reject(e)}a.totalPendingRequests++,w(o)&&t.get(o)||(o=i.getTrustedResourceUrl(o));var c=n.defaults&&n.defaults.transformResponse;return qr(c)?c=c.filter(function(e){
return e!==Lt}):c===Lt&&(c=null),n.get(o,l({cache:t,transformResponse:c},e)).finally(function(){a.totalPendingRequests--}).then(function(e){return t.put(o,e.data),
e.data},u)}return a.totalPendingRequests=0,a}]}function Yn(){this.$get=["$rootScope","$browser","$location",function(e,t,n){var i={};return i.findBindings=function(e,t,n){
var i=e.getElementsByClassName("ng-binding"),a=[];return r(i,function(e){var i=Wr.element(e).data("$binding");i&&r(i,function(r){if(n){var i=new RegExp("(^|\\s)"+Jr(t)+"(\\s|\\||$)");
i.test(r)&&a.push(e)}else r.indexOf(t)!=-1&&a.push(e)})}),a},i.findModels=function(e,t,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){var a=n?"=":"*=",o="["+r[i]+"model"+a+'"'+t+'"]',s=e.querySelectorAll(o);
if(s.length)return s}},i.getLocation=function(){return n.url()},i.setLocation=function(t){t!==n.url()&&(n.url(t),e.$digest())},i.whenStable=function(e){
t.notifyWhenNoOutstandingRequests(e)},i}]}function Cn(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(e,t,n,r,i){function a(a,s,u){
$(a)||(u=s,s=a,a=p);var l,c=B(arguments,3),d=v(u)&&!u,f=(d?r:n).defer(),m=f.promise;return l=t.defer(function(){try{f.resolve(a.apply(null,c))}catch(e){
f.reject(e),i(e)}finally{delete o[m.$$timeoutId]}d||e.$apply()},s),m.$$timeoutId=l,o[l]=f,m}var o={};return a.cancel=function(e){return!!(e&&e.$$timeoutId in o)&&(o[e.$$timeoutId].reject("canceled"),
delete o[e.$$timeoutId],t.defer.cancel(e.$$timeoutId))},a}]}function En(e){var t=e;return Fr&&(ba.setAttribute("href",t),t=ba.href),ba.setAttribute("href",t),
{href:ba.href,protocol:ba.protocol?ba.protocol.replace(/:$/,""):"",host:ba.host,search:ba.search?ba.search.replace(/^\?/,""):"",hash:ba.hash?ba.hash.replace(/^#/,""):"",
hostname:ba.hostname,port:ba.port,pathname:"/"===ba.pathname.charAt(0)?ba.pathname:"/"+ba.pathname}}function An(e){var t=w(e)?En(e):e;return t.protocol===wa.protocol&&t.host===wa.host;
}function Fn(){this.$get=h(e)}function jn(e){function t(e){try{return decodeURIComponent(e)}catch(t){return e}}var n=e[0]||{},r={},i="";return function(){
var e,a,o,s,u,l=n.cookie||"";if(l!==i)for(i=l,e=i.split("; "),r={},o=0;o<e.length;o++)a=e[o],s=a.indexOf("="),s>0&&(u=t(a.substring(0,s)),g(r[u])&&(r[u]=t(a.substring(s+1))));
return r}}function Pn(){this.$get=jn}function On(e){function t(i,a){if(y(i)){var o={};return r(i,function(e,n){o[n]=t(n,e)}),o}return e.factory(i+n,a)}
var n="Filter";this.register=t,this.$get=["$injector",function(e){return function(t){return e.get(t+n)}}],t("currency",Un),t("date",rr),t("filter",Hn),
t("json",ir),t("limitTo",ar),t("lowercase",Ta),t("number",Bn),t("orderBy",or),t("uppercase",Sa)}function Hn(){return function(e,r,i){if(!n(e)){if(null==e)return e;
throw t("filter")("notarray","Expected array but received: {0}",e)}var a,o,s=Nn(r);switch(s){case"function":a=r;break;case"boolean":case"null":case"number":
case"string":o=!0;case"object":a=Rn(r,i,o);break;default:return e}return Array.prototype.filter.call(e,a)}}function Rn(e,t,n){var r,i=y(e)&&"$"in e;return t===!0?t=N:$(t)||(t=function(e,t){
return!g(e)&&(null===e||null===t?e===t:!(y(t)||y(e)&&!_(e))&&(e=Yr(""+e),t=Yr(""+t),e.indexOf(t)!==-1))}),r=function(r){return i&&!y(r)?In(r,e.$,t,!1):In(r,e,t,n);
}}function In(e,t,n,r,i){var a=Nn(e),o=Nn(t);if("string"===o&&"!"===t.charAt(0))return!In(e,t.substring(1),n,r);if(qr(e))return e.some(function(e){return In(e,t,n,r);
});switch(a){case"object":var s;if(r){for(s in e)if("$"!==s.charAt(0)&&In(e[s],t,n,!0))return!0;return!i&&In(e,t,n,!1)}if("object"===o){for(s in t){var u=t[s];
if(!$(u)&&!g(u)){var l="$"===s,c=l?e:e[s];if(!In(c,u,n,l,l))return!1}}return!0}return n(e,t);case"function":return!1;default:return n(e,t)}}function Nn(e){
return null===e?"null":typeof e}function Un(e){var t=e.NUMBER_FORMATS;return function(e,n,r){return g(n)&&(n=t.CURRENCY_SYM),g(r)&&(r=t.PATTERNS[1].maxFrac),
null==e?e:qn(e,t.PATTERNS[1],t.GROUP_SEP,t.DECIMAL_SEP,r).replace(/\u00A4/g,n)}}function Bn(e){var t=e.NUMBER_FORMATS;return function(e,n){return null==e?e:qn(e,t.PATTERNS[0],t.GROUP_SEP,t.DECIMAL_SEP,n);
}}function Wn(e){var t,n,r,i,a,o=0;for((n=e.indexOf(Da))>-1&&(e=e.replace(Da,"")),(r=e.search(/e/i))>0?(n<0&&(n=r),n+=+e.slice(r+1),e=e.substring(0,r)):n<0&&(n=e.length),
r=0;e.charAt(r)==$a;r++);if(r==(a=e.length))t=[0],n=1;else{for(a--;e.charAt(a)==$a;)a--;for(n-=r,t=[],i=0;r<=a;r++,i++)t[i]=+e.charAt(r)}return n>Ma&&(t=t.splice(0,Ma-1),
o=n-1,n=1),{d:t,e:o,i:n}}function zn(e,t,n,r){var i=e.d,a=i.length-e.i;t=g(t)?Math.min(Math.max(n,a),r):+t;var o=t+e.i,s=i[o];if(o>0){i.splice(Math.max(e.i,o));
for(var u=o;u<i.length;u++)i[u]=0}else{a=Math.max(0,a),e.i=1,i.length=Math.max(1,o=t+1),i[0]=0;for(var l=1;l<o;l++)i[l]=0}if(s>=5)if(o-1<0){for(var c=0;c>o;c--)i.unshift(0),
e.i++;i.unshift(1),e.i++}else i[o-1]++;for(;a<Math.max(0,t);a++)i.push(0);var d=i.reduceRight(function(e,t,n,r){return t+=e,r[n]=t%10,Math.floor(t/10)},0);
d&&(i.unshift(d),e.i++)}function qn(e,t,n,r,i){if(!w(e)&&!M(e)||isNaN(e))return"";var a,o=!isFinite(e),s=!1,u=Math.abs(e)+"",l="";if(o)l="âˆž";else{a=Wn(u),
zn(a,i,t.minFrac,t.maxFrac);var c=a.d,d=a.i,f=a.e,p=[];for(s=c.reduce(function(e,t){return e&&!t},!0);d<0;)c.unshift(0),d++;d>0?p=c.splice(d):(p=c,c=[0]);
var m=[];for(c.length>=t.lgSize&&m.unshift(c.splice(-t.lgSize).join(""));c.length>t.gSize;)m.unshift(c.splice(-t.gSize).join(""));c.length&&m.unshift(c.join("")),
l=m.join(n),p.length&&(l+=r+p.join("")),f&&(l+="e+"+f)}return e<0&&!s?t.negPre+l+t.negSuf:t.posPre+l+t.posSuf}function Vn(e,t,n,r){var i="";for((e<0||r&&e<=0)&&(r?e=-e+1:(e=-e,
i="-")),e=""+e;e.length<t;)e=$a+e;return n&&(e=e.substr(e.length-t)),i+e}function Gn(e,t,n,r,i){return n=n||0,function(a){var o=a["get"+e]();return(n>0||o>-n)&&(o+=n),
0===o&&n==-12&&(o=12),Vn(o,t,r,i)}}function Jn(e,t,n){return function(r,i){var a=r["get"+e](),o=(n?"STANDALONE":"")+(t?"SHORT":""),s=Cr(o+e);return i[s][a];
}}function Xn(e,t,n){var r=-1*n,i=r>=0?"+":"";return i+=Vn(Math[r>0?"floor":"ceil"](r/60),2)+Vn(Math.abs(r%60),2)}function Kn(e){var t=new Date(e,0,1).getDay();
return new Date(e,0,(t<=4?5:12)-t)}function Zn(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+(4-e.getDay()))}function Qn(e){return function(t){
var n=Kn(t.getFullYear()),r=Zn(t),i=+r-+n,a=1+Math.round(i/6048e5);return Vn(a,e)}}function er(e,t){return e.getHours()<12?t.AMPMS[0]:t.AMPMS[1]}function tr(e,t){
return e.getFullYear()<=0?t.ERAS[0]:t.ERAS[1]}function nr(e,t){return e.getFullYear()<=0?t.ERANAMES[0]:t.ERANAMES[1]}function rr(e){function t(e){var t;
if(t=e.match(n)){var r=new Date(0),i=0,a=0,o=t[8]?r.setUTCFullYear:r.setFullYear,s=t[8]?r.setUTCHours:r.setHours;t[9]&&(i=d(t[9]+t[10]),a=d(t[9]+t[11])),
o.call(r,d(t[1]),d(t[2])-1,d(t[3]));var u=d(t[4]||0)-i,l=d(t[5]||0)-a,c=d(t[6]||0),f=Math.round(1e3*parseFloat("0."+(t[7]||0)));return s.call(r,u,l,c,f),
r}return e}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(n,i,a){var o,s,u="",l=[];
if(i=i||"mediumDate",i=e.DATETIME_FORMATS[i]||i,w(n)&&(n=xa.test(n)?d(n):t(n)),M(n)&&(n=new Date(n)),!D(n)||!isFinite(n.getTime()))return n;for(;i;)s=ka.exec(i),
s?(l=U(l,s,1),i=l.pop()):(l.push(i),i=null);var c=n.getTimezoneOffset();return a&&(c=G(a,c),n=X(n,a,!0)),r(l,function(t){o=La[t],u+=o?o(n,e.DATETIME_FORMATS,c):"''"===t?"'":t.replace(/(^'|'$)/g,"").replace(/''/g,"'");
}),u}}function ir(){return function(e,t){return g(t)&&(t=2),q(e,t)}}function ar(){return function(e,t,n){return t=Math.abs(Number(t))===1/0?Number(t):d(t),
isNaN(t)?e:(M(e)&&(e=e.toString()),qr(e)||w(e)?(n=!n||isNaN(n)?0:d(n),n=n<0?Math.max(0,e.length+n):n,t>=0?e.slice(n,n+t):0===n?e.slice(t,e.length):e.slice(Math.max(0,n+t),n)):e);
}}function or(e){function r(t,n){return n=n?-1:1,t.map(function(t){var r=1,i=m;if($(t))i=t;else if(w(t)&&("+"!=t.charAt(0)&&"-"!=t.charAt(0)||(r="-"==t.charAt(0)?-1:1,
t=t.substring(1)),""!==t&&(i=e(t),i.constant))){var a=i();i=function(e){return e[a]}}return{get:i,descending:r*n}})}function i(e){switch(typeof e){case"number":
case"boolean":case"string":return!0;default:return!1}}function a(e,t){return"function"==typeof e.valueOf&&(e=e.valueOf(),i(e))?e:_(e)&&(e=e.toString(),
i(e))?e:t}function o(e,t){var n=typeof e;return null===e?(n="string",e="null"):"string"===n?e=e.toLowerCase():"object"===n&&(e=a(e,t)),{value:e,type:n};
}function s(e,t){var n=0;return e.type===t.type?e.value!==t.value&&(n=e.value<t.value?-1:1):n=e.type<t.type?-1:1,n}return function(e,i,a){function u(e,t){
return{value:e,predicateValues:c.map(function(n){return o(n.get(e),t)})}}function l(e,t){for(var n=0,r=0,i=c.length;r<i&&!(n=s(e.predicateValues[r],t.predicateValues[r])*c[r].descending);++r);
return n}if(null==e)return e;if(!n(e))throw t("orderBy")("notarray","Expected array but received: {0}",e);qr(i)||(i=[i]),0===i.length&&(i=["+"]);var c=r(i,a);
c.push({get:function(){return{}},descending:a?-1:1});var d=Array.prototype.map.call(e,u);return d.sort(l),e=d.map(function(e){return e.value})}}function sr(e){
return $(e)&&(e={link:e}),e.restrict=e.restrict||"AC",h(e)}function ur(e,t){e.$name=t}function lr(e,t,n,i,a){var o=this,s=[];o.$error={},o.$$success={},
o.$pending=void 0,o.$name=a(t.name||t.ngForm||"")(n),o.$dirty=!1,o.$pristine=!0,o.$valid=!0,o.$invalid=!1,o.$submitted=!1,o.$$parentForm=Ea,o.$rollbackViewValue=function(){
r(s,function(e){e.$rollbackViewValue()})},o.$commitViewValue=function(){r(s,function(e){e.$commitViewValue()})},o.$addControl=function(e){fe(e.$name,"input"),
s.push(e),e.$name&&(o[e.$name]=e),e.$$parentForm=o},o.$$renameControl=function(e,t){var n=e.$name;o[n]===e&&delete o[n],o[t]=e,e.$name=t},o.$removeControl=function(e){
e.$name&&o[e.$name]===e&&delete o[e.$name],r(o.$pending,function(t,n){o.$setValidity(n,null,e)}),r(o.$error,function(t,n){o.$setValidity(n,null,e)}),r(o.$$success,function(t,n){
o.$setValidity(n,null,e)}),H(s,e),e.$$parentForm=Ea},$r({ctrl:this,$element:e,set:function(e,t,n){var r=e[t];if(r){var i=r.indexOf(n);i===-1&&r.push(n);
}else e[t]=[n]},unset:function(e,t,n){var r=e[t];r&&(H(r,n),0===r.length&&delete e[t])},$animate:i}),o.$setDirty=function(){i.removeClass(e,go),i.addClass(e,vo),
o.$dirty=!0,o.$pristine=!1,o.$$parentForm.$setDirty()},o.$setPristine=function(){i.setClass(e,go,vo+" "+Aa),o.$dirty=!1,o.$pristine=!0,o.$submitted=!1,
r(s,function(e){e.$setPristine()})},o.$setUntouched=function(){r(s,function(e){e.$setUntouched()})},o.$setSubmitted=function(){i.addClass(e,Aa),o.$submitted=!0,
o.$$parentForm.$setSubmitted()}}function cr(e){e.$formatters.push(function(t){return e.$isEmpty(t)?t:t.toString()})}function dr(e,t,n,r,i,a){fr(e,t,n,r,i,a),
cr(r)}function fr(e,t,n,r,i,a){var o=Yr(t[0].type);if(!i.android){var s=!1;t.on("compositionstart",function(){s=!0}),t.on("compositionend",function(){s=!1,
l()})}var u,l=function(e){if(u&&(a.defer.cancel(u),u=null),!s){var i=t.val(),l=e&&e.type;"password"===o||n.ngTrim&&"false"===n.ngTrim||(i=Gr(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,l);
}};if(i.hasEvent("input"))t.on("input",l);else{var c=function(e,t,n){u||(u=a.defer(function(){u=null,t&&t.value===n||l(e)}))};t.on("keydown",function(e){
var t=e.keyCode;91===t||15<t&&t<19||37<=t&&t<=40||c(e,this,this.value)}),i.hasEvent("paste")&&t.on("paste cut",c)}t.on("change",l),Va[o]&&r.$$hasNativeValidators&&o===n.type&&t.on(qa,function(e){
if(!u){var t=this[Tr],n=t.badInput,r=t.typeMismatch;u=a.defer(function(){u=null,t.badInput===n&&t.typeMismatch===r||l(e)})}}),r.$render=function(){var e=r.$isEmpty(r.$viewValue)?"":r.$viewValue;
t.val()!==e&&t.val(e)}}function pr(e,t){if(D(e))return e;if(w(e)){Ba.lastIndex=0;var n=Ba.exec(e);if(n){var r=+n[1],i=+n[2],a=0,o=0,s=0,u=0,l=Kn(r),c=7*(i-1);
return t&&(a=t.getHours(),o=t.getMinutes(),s=t.getSeconds(),u=t.getMilliseconds()),new Date(r,0,l.getDate()+c,a,o,s,u)}}return NaN}function mr(e,t){return function(n,i){
var a,o;if(D(n))return n;if(w(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),Oa.test(n))return new Date(n);if(e.lastIndex=0,
a=e.exec(n))return a.shift(),o=i?{yyyy:i.getFullYear(),MM:i.getMonth()+1,dd:i.getDate(),HH:i.getHours(),mm:i.getMinutes(),ss:i.getSeconds(),sss:i.getMilliseconds()/1e3
}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(a,function(e,n){n<t.length&&(o[t[n]]=+e)}),new Date(o.yyyy,o.MM-1,o.dd,o.HH,o.mm,o.ss||0,1e3*o.sss||0)}return NaN;
}}function hr(e,t,n,r){return function(i,a,o,s,u,l,c){function d(e){return e&&!(e.getTime&&e.getTime()!==e.getTime())}function f(e){return v(e)&&!D(e)?n(e)||void 0:e;
}_r(i,a,o,s),fr(i,a,o,s,u,l);var p,m=s&&s.$options&&s.$options.timezone;if(s.$$parserName=e,s.$parsers.push(function(e){if(s.$isEmpty(e))return null;if(t.test(e)){
var r=n(e,p);return m&&(r=X(r,m)),r}}),s.$formatters.push(function(e){if(e&&!D(e))throw $o("datefmt","Expected `{0}` to be a date",e);return d(e)?(p=e,
p&&m&&(p=X(p,m,!0)),c("date")(e,r,m)):(p=null,"")}),v(o.min)||o.ngMin){var h;s.$validators.min=function(e){return!d(e)||g(h)||n(e)>=h},o.$observe("min",function(e){
h=f(e),s.$validate()})}if(v(o.max)||o.ngMax){var _;s.$validators.max=function(e){return!d(e)||g(_)||n(e)<=_},o.$observe("max",function(e){_=f(e),s.$validate();
})}}}function _r(e,t,n,r){var i=t[0],a=r.$$hasNativeValidators=y(i.validity);a&&r.$parsers.push(function(e){var n=t.prop(Tr)||{};return n.badInput||n.typeMismatch?void 0:e;
})}function gr(e,t,n,r,i,a){if(_r(e,t,n,r),fr(e,t,n,r,i,a),r.$$parserName="number",r.$parsers.push(function(e){return r.$isEmpty(e)?null:Ia.test(e)?parseFloat(e):void 0;
}),r.$formatters.push(function(e){if(!r.$isEmpty(e)){if(!M(e))throw $o("numfmt","Expected `{0}` to be a number",e);e=e.toString()}return e}),v(n.min)||n.ngMin){
var o;r.$validators.min=function(e){return r.$isEmpty(e)||g(o)||e>=o},n.$observe("min",function(e){v(e)&&!M(e)&&(e=parseFloat(e,10)),o=M(e)&&!isNaN(e)?e:void 0,
r.$validate()})}if(v(n.max)||n.ngMax){var s;r.$validators.max=function(e){return r.$isEmpty(e)||g(s)||e<=s},n.$observe("max",function(e){v(e)&&!M(e)&&(e=parseFloat(e,10)),
s=M(e)&&!isNaN(e)?e:void 0,r.$validate()})}}function vr(e,t,n,r,i,a){fr(e,t,n,r,i,a),cr(r),r.$$parserName="url",r.$validators.url=function(e,t){var n=e||t;
return r.$isEmpty(n)||Ha.test(n)}}function yr(e,t,n,r,i,a){fr(e,t,n,r,i,a),cr(r),r.$$parserName="email",r.$validators.email=function(e,t){var n=e||t;return r.$isEmpty(n)||Ra.test(n);
}}function br(e,t,n,r){g(n.name)&&t.attr("name",o());var i=function(e){t[0].checked&&r.$setViewValue(n.value,e&&e.type)};t.on("click",i),r.$render=function(){
var e=n.value;t[0].checked=e==r.$viewValue},n.$observe("value",r.$render)}function wr(e,t,n,r,i){var a;if(v(r)){if(a=e(r),!a.constant)throw $o("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,r);
return a(t)}return i}function Mr(e,t,n,r,i,a,o,s){var u=wr(s,e,"ngTrueValue",n.ngTrueValue,!0),l=wr(s,e,"ngFalseValue",n.ngFalseValue,!1),c=function(e){
r.$setViewValue(t[0].checked,e&&e.type)};t.on("click",c),r.$render=function(){t[0].checked=r.$viewValue},r.$isEmpty=function(e){return e===!1},r.$formatters.push(function(e){
return N(e,u)}),r.$parsers.push(function(e){return e?u:l})}function Dr(e,t){return e="ngClass"+e,["$animate",function(n){function i(e,t){var n=[];e:for(var r=0;r<e.length;r++){
for(var i=e[r],a=0;a<t.length;a++)if(i==t[a])continue e;n.push(i)}return n}function a(e){var t=[];return qr(e)?(r(e,function(e){t=t.concat(a(e))}),t):w(e)?e.split(" "):y(e)?(r(e,function(e,n){
e&&(t=t.concat(n.split(" ")))}),t):e}return{restrict:"AC",link:function(o,s,u){function l(e){var t=d(e,1);u.$addClass(t)}function c(e){var t=d(e,-1);u.$removeClass(t);
}function d(e,t){var n=s.data("$classCounts")||he(),i=[];return r(e,function(e){(t>0||n[e])&&(n[e]=(n[e]||0)+t,n[e]===+(t>0)&&i.push(e))}),s.data("$classCounts",n),
i.join(" ")}function f(e,t){var r=i(t,e),a=i(e,t);r=d(r,1),a=d(a,-1),r&&r.length&&n.addClass(s,r),a&&a.length&&n.removeClass(s,a)}function p(e){if(t===!0||o.$index%2===t){
var n=a(e||[]);if(m){if(!N(e,m)){var r=a(m);f(r,n)}}else l(n)}m=qr(e)?e.map(function(e){return I(e)}):I(e)}var m;o.$watch(u[e],p,!0),u.$observe("class",function(t){
p(o.$eval(u[e]))}),"ngClass"!==e&&o.$watch("$index",function(n,r){var i=1&n;if(i!==(1&r)){var s=a(o.$eval(u[e]));i===t?l(s):c(s)}})}}}]}function $r(e){
function t(e,t,s){g(t)?n("$pending",e,s):r("$pending",e,s),C(t)?t?(c(o.$error,e,s),l(o.$$success,e,s)):(l(o.$error,e,s),c(o.$$success,e,s)):(c(o.$error,e,s),
c(o.$$success,e,s)),o.$pending?(i(wo,!0),o.$valid=o.$invalid=void 0,a("",null)):(i(wo,!1),o.$valid=Lr(o.$error),o.$invalid=!o.$valid,a("",o.$valid));var u;
u=o.$pending&&o.$pending[e]?void 0:!o.$error[e]&&(!!o.$$success[e]||null),a(e,u),o.$$parentForm.$setValidity(e,u,o)}function n(e,t,n){o[e]||(o[e]={}),l(o[e],t,n);
}function r(e,t,n){o[e]&&c(o[e],t,n),Lr(o[e])&&(o[e]=void 0)}function i(e,t){t&&!u[e]?(d.addClass(s,e),u[e]=!0):!t&&u[e]&&(d.removeClass(s,e),u[e]=!1)}
function a(e,t){e=e?"-"+ue(e,"-"):"",i(ho+e,t===!0),i(_o+e,t===!1)}var o=e.ctrl,s=e.$element,u={},l=e.set,c=e.unset,d=e.$animate;u[_o]=!(u[ho]=s.hasClass(ho)),
o.$setValidity=t}function Lr(e){if(e)for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}function kr(e){e[0].hasAttribute("selected")&&(e[0].selected=!0);
}var xr=/^\/(.+)\/([a-z]*)$/,Tr="validity",Sr=Object.prototype.hasOwnProperty,Yr=function(e){return w(e)?e.toLowerCase():e},Cr=function(e){return w(e)?e.toUpperCase():e;
},Er=function(e){return w(e)?e.replace(/[A-Z]/g,function(e){return String.fromCharCode(32|e.charCodeAt(0))}):e},Ar=function(e){return w(e)?e.replace(/[a-z]/g,function(e){
return String.fromCharCode(e.charCodeAt(0)&-33)}):e};"i"!=="I".toLowerCase()&&(Yr=Er,Cr=Ar);var Fr,jr,Pr,Or,Hr=[].slice,Rr=[].splice,Ir=[].push,Nr=Object.prototype.toString,Ur=Object.getPrototypeOf,Br=t("ng"),Wr=e.angular||(e.angular={}),zr=0;
Fr=e.document.documentMode,p.$inject=[],m.$inject=[];var qr=Array.isArray,Vr=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,Gr=function(e){
return w(e)?e.trim():e},Jr=function(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Xr=function(){function t(){try{
return new Function(""),!1}catch(e){return!0}}if(!v(Xr.rules)){var n=e.document.querySelector("[ng-csp]")||e.document.querySelector("[data-ng-csp]");if(n){
var r=n.getAttribute("ng-csp")||n.getAttribute("data-ng-csp");Xr.rules={noUnsafeEval:!r||r.indexOf("no-unsafe-eval")!==-1,noInlineStyle:!r||r.indexOf("no-inline-style")!==-1
}}else Xr.rules={noUnsafeEval:t(),noInlineStyle:!1}}return Xr.rules},Kr=function(){if(v(Kr.name_))return Kr.name_;var t,n,r,i,a=Qr.length;for(n=0;n<a;++n)if(r=Qr[n],
t=e.document.querySelector("["+r.replace(":","\\:")+"jq]")){i=t.getAttribute(r+"jq");break}return Kr.name_=i},Zr=/:/g,Qr=["ng-","data-ng-","ng:","x-ng-"],ei=/[A-Z]/g,ti=!1,ni=1,ri=2,ii=3,ai=8,oi=9,si=11,ui={
full:"1.5.5",major:1,minor:5,dot:5,codeName:"material-conspiration"};Se.expando="ng339";var li=Se.cache={},ci=1,di=function(e,t,n){e.addEventListener(t,n,!1);
},fi=function(e,t,n){e.removeEventListener(t,n,!1)};Se._data=function(e){return this.cache[e[this.expando]]||{}};var pi=/([\:\-\_]+(.))/g,mi=/^moz([A-Z])/,hi={
mouseleave:"mouseout",mouseenter:"mouseover"},_i=t("jqLite"),gi=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,vi=/<|&#?\w+;/,yi=/<([\w:-]+)/,bi=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wi={
option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wi.optgroup=wi.option,wi.tbody=wi.tfoot=wi.colgroup=wi.caption=wi.thead,wi.th=wi.td;
var Mi=e.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))},Di=Se.prototype={ready:function(t){function n(){r||(r=!0,t());
}var r=!1;"complete"===e.document.readyState?e.setTimeout(n):(this.on("DOMContentLoaded",n),Se(e).on("load",n))},toString:function(){var e=[];return r(this,function(t){
e.push(""+t)}),"["+e.join(", ")+"]"},eq:function(e){return jr(e>=0?this[e]:this[this.length+e])},length:0,push:Ir,sort:[].sort,splice:[].splice},$i={};r("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(e){
$i[Yr(e)]=e});var Li={};r("input,select,option,textarea,button,form,details".split(","),function(e){Li[e]=!0});var ki={ngMinlength:"minlength",ngMaxlength:"maxlength",
ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:je,removeData:Ae,hasData:$e,cleanData:Le},function(e,t){Se[t]=e}),r({data:je,inheritedData:Ne,scope:function(e){
return jr.data(e,"$scope")||Ne(e.parentNode||e,["$isolateScope","$scope"])},isolateScope:function(e){return jr.data(e,"$isolateScope")||jr.data(e,"$isolateScopeNoTemplate");
},controller:Ie,injector:function(e){return Ne(e,"$injector")},removeAttr:function(e,t){e.removeAttribute(t)},hasClass:Pe,css:function(e,t,n){return t=we(t),
v(n)?void(e.style[t]=n):e.style[t]},attr:function(e,t,n){var r=e.nodeType;if(r!==ii&&r!==ri&&r!==ai){var i=Yr(t);if($i[i]){if(!v(n))return e[t]||(e.attributes.getNamedItem(t)||p).specified?i:void 0;
n?(e[t]=!0,e.setAttribute(t,i)):(e[t]=!1,e.removeAttribute(i))}else if(v(n))e.setAttribute(t,n);else if(e.getAttribute){var a=e.getAttribute(t,2);return null===a?void 0:a;
}}},prop:function(e,t,n){return v(n)?void(e[t]=n):e[t]},text:function(){function e(e,t){if(g(t)){var n=e.nodeType;return n===ni||n===ii?e.textContent:"";
}e.textContent=t}return e.$dv="",e}(),val:function(e,t){if(g(t)){if(e.multiple&&"select"===O(e)){var n=[];return r(e.options,function(e){e.selected&&n.push(e.value||e.text);
}),0===n.length?null:n}return e.value}e.value=t},html:function(e,t){return g(t)?e.innerHTML:(Ce(e,!0),void(e.innerHTML=t))},empty:Ue},function(e,t){Se.prototype[t]=function(t,n){
var r,i,a=this.length;if(e!==Ue&&g(2==e.length&&e!==Pe&&e!==Ie?t:n)){if(y(t)){for(r=0;r<a;r++)if(e===je)e(this[r],t);else for(i in t)e(this[r],i,t[i]);return this;
}for(var o=e.$dv,s=g(o)?Math.min(a,1):a,u=0;u<s;u++){var l=e(this[u],t,n);o=o?o+l:l}return o}for(r=0;r<a;r++)e(this[r],t,n);return this}}),r({removeData:Ae,
on:function(e,t,n,r){if(v(r))throw _i("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");if(De(e)){var i=Fe(e,!0),a=i.events,o=i.handle;
o||(o=i.handle=Ve(e,a));for(var s=t.indexOf(" ")>=0?t.split(" "):[t],u=s.length,l=function(t,r,i){var s=a[t];s||(s=a[t]=[],s.specialHandlerWrapper=r,"$destroy"===t||i||di(e,t,o)),
s.push(n)};u--;)t=s[u],hi[t]?(l(hi[t],Je),l(t,void 0,!0)):l(t)}},off:Ee,one:function(e,t,n){e=jr(e),e.on(t,function r(){e.off(t,n),e.off(t,r)}),e.on(t,n);
},replaceWith:function(e,t){var n,i=e.parentNode;Ce(e),r(new Se(t),function(t){n?i.insertBefore(t,n.nextSibling):i.replaceChild(t,e),n=t})},children:function(e){
var t=[];return r(e.childNodes,function(e){e.nodeType===ni&&t.push(e)}),t},contents:function(e){return e.contentDocument||e.childNodes||[]},append:function(e,t){
var n=e.nodeType;if(n===ni||n===si){t=new Se(t);for(var r=0,i=t.length;r<i;r++){var a=t[r];e.appendChild(a)}}},prepend:function(e,t){if(e.nodeType===ni){
var n=e.firstChild;r(new Se(t),function(t){e.insertBefore(t,n)})}},wrap:function(e,t){Te(e,jr(t).eq(0).clone()[0])},remove:Be,detach:function(e){Be(e,!0);
},after:function(e,t){var n=e,r=e.parentNode;t=new Se(t);for(var i=0,a=t.length;i<a;i++){var o=t[i];r.insertBefore(o,n.nextSibling),n=o}},addClass:He,removeClass:Oe,
toggleClass:function(e,t,n){t&&r(t.split(" "),function(t){var r=n;g(r)&&(r=!Pe(e,t)),(r?He:Oe)(e,t)})},parent:function(e){var t=e.parentNode;return t&&t.nodeType!==si?t:null;
},next:function(e){return e.nextElementSibling},find:function(e,t){return e.getElementsByTagName?e.getElementsByTagName(t):[]},clone:Ye,triggerHandler:function(e,t,n){
var i,a,o,s=t.type||t,u=Fe(e),c=u&&u.events,d=c&&c[s];d&&(i={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0;
},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0;
},stopPropagation:p,type:s,target:e},t.type&&(i=l(i,t)),a=I(d),o=n?[i].concat(n):[i],r(a,function(t){i.isImmediatePropagationStopped()||t.apply(e,o)}));
}},function(e,t){Se.prototype[t]=function(t,n,r){for(var i,a=0,o=this.length;a<o;a++)g(i)?(i=e(this[a],t,n,r),v(i)&&(i=jr(i))):Re(i,e(this[a],t,n,r));return v(i)?i:this;
},Se.prototype.bind=Se.prototype.on,Se.prototype.unbind=Se.prototype.off}),Ze.prototype={put:function(e,t){this[Ke(e,this.nextUid)]=t},get:function(e){
return this[Ke(e,this.nextUid)]},remove:function(e){var t=this[e=Ke(e,this.nextUid)];return delete this[e],t}};var xi=[function(){this.$get=[function(){
return Ze}]}],Ti=/^([^\(]+?)=>/,Si=/^[^\(]*\(\s*([^\)]*)\)/m,Yi=/,/,Ci=/^\s*(_?)(\S+?)\1\s*$/,Ei=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Ai=t("$injector");nt.$$annotate=tt;
var Fi=t("$animate"),ji=1,Pi="ng-animate",Oi=function(){this.$get=p},Hi=function(){var e=new Ze,t=[];this.$get=["$$AnimateRunner","$rootScope",function(n,i){
function a(e,t,n){var i=!1;return t&&(t=w(t)?t.split(" "):qr(t)?t:[],r(t,function(t){t&&(i=!0,e[t]=n)})),i}function o(){r(t,function(t){var n=e.get(t);if(n){
var i=ot(t.attr("class")),a="",o="";r(n,function(e,t){var n=!!i[t];e!==n&&(e?a+=(a.length?" ":"")+t:o+=(o.length?" ":"")+t)}),r(t,function(e){a&&He(e,a),
o&&Oe(e,o)}),e.remove(t)}}),t.length=0}function s(n,r,s){var u=e.get(n)||{},l=a(u,r,!0),c=a(u,s,!1);(l||c)&&(e.put(n,u),t.push(n),1===t.length&&i.$$postDigest(o));
}return{enabled:p,on:p,off:p,pin:p,push:function(e,t,r,i){i&&i(),r=r||{},r.from&&e.css(r.from),r.to&&e.css(r.to),(r.addClass||r.removeClass)&&s(e,r.addClass,r.removeClass);
var a=new n;return a.complete(),a}}}]},Ri=["$provide",function(e){var t=this;this.$$registeredAnimations=Object.create(null),this.register=function(n,r){
if(n&&"."!==n.charAt(0))throw Fi("notcsel","Expecting class selector starting with '.' got '{0}'.",n);var i=n+"-animation";t.$$registeredAnimations[n.substr(1)]=i,
e.factory(i,r)},this.classNameFilter=function(e){if(1===arguments.length&&(this.$$classNameFilter=e instanceof RegExp?e:null,this.$$classNameFilter)){var t=new RegExp("(\\s+|\\/)"+Pi+"(\\s+|\\/)");
if(t.test(this.$$classNameFilter.toString()))throw Fi("nongcls",'$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',Pi);
}return this.$$classNameFilter},this.$get=["$$animateQueue",function(e){function t(e,t,n){if(n){var r=at(n);!r||r.parentNode||r.previousElementSibling||(n=null);
}n?n.after(e):t.prepend(e)}return{on:e.on,off:e.off,pin:e.pin,enabled:e.enabled,cancel:function(e){e.end&&e.end()},enter:function(n,r,i,a){return r=r&&jr(r),
i=i&&jr(i),r=r||i.parent(),t(n,r,i),e.push(n,"enter",st(a))},move:function(n,r,i,a){return r=r&&jr(r),i=i&&jr(i),r=r||i.parent(),t(n,r,i),e.push(n,"move",st(a));
},leave:function(t,n){return e.push(t,"leave",st(n),function(){t.remove()})},addClass:function(t,n,r){return r=st(r),r.addClass=it(r.addclass,n),e.push(t,"addClass",r);
},removeClass:function(t,n,r){return r=st(r),r.removeClass=it(r.removeClass,n),e.push(t,"removeClass",r)},setClass:function(t,n,r,i){return i=st(i),i.addClass=it(i.addClass,n),
i.removeClass=it(i.removeClass,r),e.push(t,"setClass",i)},animate:function(t,n,r,i,a){return a=st(a),a.from=a.from?l(a.from,n):n,a.to=a.to?l(a.to,r):r,
i=i||"ng-inline-animate",a.tempClasses=it(a.tempClasses,i),e.push(t,"animate",a)}}}]}],Ii=function(){this.$get=["$$rAF",function(e){function t(t){n.push(t),
n.length>1||e(function(){for(var e=0;e<n.length;e++)n[e]();n=[]})}var n=[];return function(){var e=!1;return t(function(){e=!0}),function(n){e?n():t(n);
}}}]},Ni=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(e,t,n,i,a){function o(e){this.setHost(e);var t=n(),r=function(e){
a(e,0,!1)};this._doneCallbacks=[],this._tick=function(e){var n=i[0];n&&n.hidden?r(e):t(e)},this._state=0}var s=0,u=1,l=2;return o.chain=function(e,t){function n(){
return r===e.length?void t(!0):void e[r](function(e){return e===!1?void t(!1):(r++,void n())})}var r=0;n()},o.all=function(e,t){function n(n){a=a&&n,++i===e.length&&t(a);
}var i=0,a=!0;r(e,function(e){e.done(n)})},o.prototype={setHost:function(e){this.host=e||{}},done:function(e){this._state===l?e():this._doneCallbacks.push(e);
},progress:p,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e()})})}return this.promise},
then:function(e,t){return this.getPromise().then(e,t)},catch:function(e){return this.getPromise().catch(e)},finally:function(e){return this.getPromise().finally(e);
},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),
this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(e){var t=this;t._state===s&&(t._state=u,
t._tick(function(){t._resolve(e)}))},_resolve:function(e){this._state!==l&&(r(this._doneCallbacks,function(t){t(e)}),this._doneCallbacks.length=0,this._state=l);
}},o}]},Ui=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(e,t,n){return function(t,r){function i(){return e(function(){a(),s||u.complete(),
s=!0}),u}function a(){o.addClass&&(t.addClass(o.addClass),o.addClass=null),o.removeClass&&(t.removeClass(o.removeClass),o.removeClass=null),o.to&&(t.css(o.to),
o.to=null)}var o=r||{};o.$$prepared||(o=R(o)),o.cleanupStyles&&(o.from=o.to=null),o.from&&(t.css(o.from),o.from=null);var s,u=new n;return{start:i,end:i
}}}]},Bi=t("$compile"),Wi=new ft;pt.$inject=["$provide","$$sanitizeUriProvider"],mt.prototype.isFirstChange=function(){return this.previousValue===Wi};var zi=/^((?:x|data)[\:\-_])/i,qi=t("$controller"),Vi=/^(\S+)(\s+as\s+([\w$]+))?$/,Gi=function(){
this.$get=["$document",function(e){return function(t){return t?!t.nodeType&&t instanceof jr&&(t=t[0]):t=e[0].body,t.offsetWidth+1}}]},Ji="application/json",Xi={
"Content-Type":Ji+";charset=utf-8"},Ki=/^\[|^\{(?!\{)/,Zi={"[":/]$/,"{":/}$/},Qi=/^\)\]\}',?\n/,ea=t("$http"),ta=function(e){return function(){throw ea("legacy","The method `{0}` on the promise returned from `$http` has been disabled.",e);
}},na=Wr.$interpolateMinErr=t("$interpolate");na.throwNoconcat=function(e){throw na("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",e);
},na.interr=function(e,t){return na("interr","Can't interpolate: {0}\n{1}",e,t.toString())};var ra=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ia={http:80,https:443,
ftp:21},aa=t("$location"),oa={$$html5:!1,$$replace:!1,absUrl:Gt("$$absUrl"),url:function(e){if(g(e))return this.$$url;var t=ra.exec(e);return(t[1]||""===e)&&this.path(decodeURIComponent(t[1])),
(t[2]||t[1]||""===e)&&this.search(t[3]||""),this.hash(t[5]||""),this},protocol:Gt("$$protocol"),host:Gt("$$host"),port:Gt("$$port"),path:Jt("$$path",function(e){
return e=null!==e?e.toString():"","/"==e.charAt(0)?e:"/"+e}),search:function(e,t){switch(arguments.length){case 0:return this.$$search;case 1:if(w(e)||M(e))e=e.toString(),
this.$$search=Q(e);else{if(!y(e))throw aa("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");e=R(e,{}),r(e,function(t,n){
null==t&&delete e[n]}),this.$$search=e}break;default:g(t)||null===t?delete this.$$search[e]:this.$$search[e]=t}return this.$$compose(),this},hash:Jt("$$hash",function(e){
return null!==e?e.toString():""}),replace:function(){return this.$$replace=!0,this}};r([Vt,qt,zt],function(e){e.prototype=Object.create(oa),e.prototype.state=function(t){
if(!arguments.length)return this.$$state;if(e!==zt||!this.$$html5)throw aa("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
return this.$$state=g(t)?null:t,this}});var sa=t("$parse"),ua=Function.prototype.call,la=Function.prototype.apply,ca=Function.prototype.bind,da=he();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(e){
da[e]=!0});var fa={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},pa=function(e){this.options=e};pa.prototype={constructor:pa,lex:function(e){for(this.text=e,
this.index=0,this.tokens=[];this.index<this.text.length;){var t=this.text.charAt(this.index);if('"'===t||"'"===t)this.readString(t);else if(this.isNumber(t)||"."===t&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(t,"(){}[].,;:?"))this.tokens.push({
index:this.index,text:t}),this.index++;else if(this.isWhitespace(t))this.index++;else{var n=t+this.peek(),r=n+this.peek(2),i=da[t],a=da[n],o=da[r];if(i||a||o){
var s=o?r:a?n:t;this.tokens.push({index:this.index,text:s,operator:!0}),this.index+=s.length}else this.throwError("Unexpected next character ",this.index,this.index+1);
}}return this.tokens},is:function(e,t){return t.indexOf(e)!==-1},peek:function(e){var t=e||1;return this.index+t<this.text.length&&this.text.charAt(this.index+t);
},isNumber:function(e){return"0"<=e&&e<="9"&&"string"==typeof e},isWhitespace:function(e){return" "===e||"\r"===e||"\t"===e||"\n"===e||"\v"===e||"Â "===e;
},isIdentifierStart:function(e){return this.options.isIdentifierStart?this.options.isIdentifierStart(e,this.codePointAt(e)):this.isValidIdentifierStart(e);
},isValidIdentifierStart:function(e){return"a"<=e&&e<="z"||"A"<=e&&e<="Z"||"_"===e||"$"===e},isIdentifierContinue:function(e){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(e,this.codePointAt(e)):this.isValidIdentifierContinue(e);
},isValidIdentifierContinue:function(e,t){return this.isValidIdentifierStart(e,t)||this.isNumber(e)},codePointAt:function(e){return 1===e.length?e.charCodeAt(0):(e.charCodeAt(0)<<10)+e.charCodeAt(1)-56613888;
},peekMultichar:function(){var e=this.text.charAt(this.index),t=this.peek();if(!t)return e;var n=e.charCodeAt(0),r=t.charCodeAt(0);return n>=55296&&n<=56319&&r>=56320&&r<=57343?e+t:e;
},isExpOperator:function(e){return"-"===e||"+"===e||this.isNumber(e)},throwError:function(e,t,n){n=n||this.index;var r=v(t)?"s "+t+"-"+this.index+" ["+this.text.substring(t,n)+"]":" "+n;
throw sa("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",e,r,this.text)},readNumber:function(){for(var e="",t=this.index;this.index<this.text.length;){
var n=Yr(this.text.charAt(this.index));if("."==n||this.isNumber(n))e+=n;else{var r=this.peek();if("e"==n&&this.isExpOperator(r))e+=n;else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==e.charAt(e.length-1))e+=n;else{
if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=e.charAt(e.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:t,
text:e,constant:!0,value:Number(e)})},readIdent:function(){var e=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var t=this.peekMultichar();
if(!this.isIdentifierContinue(t))break;this.index+=t.length}this.tokens.push({index:e,text:this.text.slice(e,this.index),identifier:!0})},readString:function(e){
var t=this.index;this.index++;for(var n="",r=e,i=!1;this.index<this.text.length;){var a=this.text.charAt(this.index);if(r+=a,i){if("u"===a){var o=this.text.substring(this.index+1,this.index+5);
o.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+o+"]"),this.index+=4,n+=String.fromCharCode(parseInt(o,16))}else{var s=fa[a];n+=s||a;
}i=!1}else if("\\"===a)i=!0;else{if(a===e)return this.index++,void this.tokens.push({index:t,text:r,constant:!0,value:n});n+=a}this.index++}this.throwError("Unterminated quote",t);
}};var ma=function(e,t){this.lexer=e,this.options=t};ma.Program="Program",ma.ExpressionStatement="ExpressionStatement",ma.AssignmentExpression="AssignmentExpression",
ma.ConditionalExpression="ConditionalExpression",ma.LogicalExpression="LogicalExpression",ma.BinaryExpression="BinaryExpression",ma.UnaryExpression="UnaryExpression",
ma.CallExpression="CallExpression",ma.MemberExpression="MemberExpression",ma.Identifier="Identifier",ma.Literal="Literal",ma.ArrayExpression="ArrayExpression",
ma.Property="Property",ma.ObjectExpression="ObjectExpression",ma.ThisExpression="ThisExpression",ma.LocalsExpression="LocalsExpression",ma.NGValueParameter="NGValueParameter",
ma.prototype={ast:function(e){this.text=e,this.tokens=this.lexer.lex(e);var t=this.program();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),
t},program:function(){for(var e=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&e.push(this.expressionStatement()),!this.expect(";"))return{
type:ma.Program,body:e}},expressionStatement:function(){return{type:ma.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var e,t=this.expression();e=this.expect("|");)t=this.filter(t);
return t},expression:function(){return this.assignment()},assignment:function(){var e=this.ternary();return this.expect("=")&&(e={type:ma.AssignmentExpression,
left:e,right:this.assignment(),operator:"="}),e},ternary:function(){var e,t,n=this.logicalOR();return this.expect("?")&&(e=this.expression(),this.consume(":"))?(t=this.expression(),
{type:ma.ConditionalExpression,test:n,alternate:e,consequent:t}):n},logicalOR:function(){for(var e=this.logicalAND();this.expect("||");)e={type:ma.LogicalExpression,
operator:"||",left:e,right:this.logicalAND()};return e},logicalAND:function(){for(var e=this.equality();this.expect("&&");)e={type:ma.LogicalExpression,
operator:"&&",left:e,right:this.equality()};return e},equality:function(){for(var e,t=this.relational();e=this.expect("==","!=","===","!==");)t={type:ma.BinaryExpression,
operator:e.text,left:t,right:this.relational()};return t},relational:function(){for(var e,t=this.additive();e=this.expect("<",">","<=",">=");)t={type:ma.BinaryExpression,
operator:e.text,left:t,right:this.additive()};return t},additive:function(){for(var e,t=this.multiplicative();e=this.expect("+","-");)t={type:ma.BinaryExpression,
operator:e.text,left:t,right:this.multiplicative()};return t},multiplicative:function(){for(var e,t=this.unary();e=this.expect("*","/","%");)t={type:ma.BinaryExpression,
operator:e.text,left:t,right:this.unary()};return t},unary:function(){var e;return(e=this.expect("+","-","!"))?{type:ma.UnaryExpression,operator:e.text,
prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var e;this.expect("(")?(e=this.filterChain(),this.consume(")")):this.expect("[")?e=this.arrayDeclaration():this.expect("{")?e=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?e=R(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?e={
type:ma.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?e=this.identifier():this.peek().constant?e=this.constant():this.throwError("not a primary expression",this.peek());
for(var t;t=this.expect("(","[",".");)"("===t.text?(e={type:ma.CallExpression,callee:e,arguments:this.parseArguments()},this.consume(")")):"["===t.text?(e={
type:ma.MemberExpression,object:e,property:this.expression(),computed:!0},this.consume("]")):"."===t.text?e={type:ma.MemberExpression,object:e,property:this.identifier(),
computed:!1}:this.throwError("IMPOSSIBLE");return e},filter:function(e){for(var t=[e],n={type:ma.CallExpression,callee:this.identifier(),arguments:t,filter:!0
};this.expect(":");)t.push(this.expression());return n},parseArguments:function(){var e=[];if(")"!==this.peekToken().text)do e.push(this.expression());while(this.expect(","));
return e},identifier:function(){var e=this.consume();return e.identifier||this.throwError("is not a valid identifier",e),{type:ma.Identifier,name:e.text
}},constant:function(){return{type:ma.Literal,value:this.consume().value}},arrayDeclaration:function(){var e=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))break;
e.push(this.expression())}while(this.expect(","));return this.consume("]"),{type:ma.ArrayExpression,elements:e}},object:function(){var e,t=[];if("}"!==this.peekToken().text)do{
if(this.peek("}"))break;e={type:ma.Property,kind:"init"},this.peek().constant?e.key=this.constant():this.peek().identifier?e.key=this.identifier():this.throwError("invalid key",this.peek()),
this.consume(":"),e.value=this.expression(),t.push(e)}while(this.expect(","));return this.consume("}"),{type:ma.ObjectExpression,properties:t}},throwError:function(e,t){
throw sa("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",t.text,e,t.index+1,this.text,this.text.substring(t.index));
},consume:function(e){if(0===this.tokens.length)throw sa("ueoe","Unexpected end of expression: {0}",this.text);var t=this.expect(e);return t||this.throwError("is unexpected, expecting ["+e+"]",this.peek()),
t},peekToken:function(){if(0===this.tokens.length)throw sa("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(e,t,n,r){
return this.peekAhead(0,e,t,n,r)},peekAhead:function(e,t,n,r,i){if(this.tokens.length>e){var a=this.tokens[e],o=a.text;if(o===t||o===n||o===r||o===i||!t&&!n&&!r&&!i)return a;
}return!1},expect:function(e,t,n,r){var i=this.peek(e,t,n,r);return!!i&&(this.tokens.shift(),i)},selfReferential:{this:{type:ma.ThisExpression},$locals:{
type:ma.LocalsExpression}}},pn.prototype={compile:function(e,t){var n=this,i=this.astBuilder.ast(e);this.state={nextId:0,filters:{},expensiveChecks:t,fn:{
vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},sn(i,n.$filter);var a,o="";if(this.stage="assign",a=cn(i)){this.state.computing="assign";
var s=this.nextId();this.recurse(a,s),this.return_(s),o="fn.assign="+this.generateFunction("assign","s,v,l")}var u=un(i.body);n.stage="inputs",r(u,function(e,t){
var r="fn"+t;n.state[r]={vars:[],body:[],own:{}},n.state.computing=r;var i=n.nextId();n.recurse(e,i),n.return_(i),n.state.inputs.push(r),e.watchId=t}),
this.state.computing="fn",this.stage="main",this.recurse(i);var l='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+o+this.watchFns()+"return fn;",c=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",l)(this.$filter,Zt,en,tn,Qt,nn,rn,an,e);
return this.state=this.stage=void 0,c.literal=dn(i),c.constant=fn(i),c},USE:"use",STRICT:"strict",watchFns:function(){var e=[],t=this.state.inputs,n=this;
return r(t,function(t){e.push("var "+t+"="+n.generateFunction(t,"s"))}),t.length&&e.push("fn.inputs=["+t.join(",")+"];"),e.join("")},generateFunction:function(e,t){
return"function("+t+"){"+this.varsPrefix(e)+this.body(e)+"};"},filterPrefix:function(){var e=[],t=this;return r(this.state.filters,function(n,r){e.push(n+"=$filter("+t.escape(r)+")");
}),e.length?"var "+e.join(",")+";":""},varsPrefix:function(e){return this.state[e].vars.length?"var "+this.state[e].vars.join(",")+";":""},body:function(e){
return this.state[e].body.join("")},recurse:function(e,t,n,i,a,o){var s,u,l,c,d=this;if(i=i||p,!o&&v(e.watchId))return t=t||this.nextId(),void this.if_("i",this.lazyAssign(t,this.computedMember("i",e.watchId)),this.lazyRecurse(e,t,n,i,a,!0));
switch(e.type){case ma.Program:r(e.body,function(t,n){d.recurse(t.expression,void 0,void 0,function(e){u=e}),n!==e.body.length-1?d.current().body.push(u,";"):d.return_(u);
});break;case ma.Literal:c=this.escape(e.value),this.assign(t,c),i(c);break;case ma.UnaryExpression:this.recurse(e.argument,void 0,void 0,function(e){u=e;
}),c=e.operator+"("+this.ifDefined(u,0)+")",this.assign(t,c),i(c);break;case ma.BinaryExpression:this.recurse(e.left,void 0,void 0,function(e){s=e}),this.recurse(e.right,void 0,void 0,function(e){
u=e}),c="+"===e.operator?this.plus(s,u):"-"===e.operator?this.ifDefined(s,0)+e.operator+this.ifDefined(u,0):"("+s+")"+e.operator+"("+u+")",this.assign(t,c),
i(c);break;case ma.LogicalExpression:t=t||this.nextId(),d.recurse(e.left,t),d.if_("&&"===e.operator?t:d.not(t),d.lazyRecurse(e.right,t)),i(t);break;case ma.ConditionalExpression:
t=t||this.nextId(),d.recurse(e.test,t),d.if_(t,d.lazyRecurse(e.alternate,t),d.lazyRecurse(e.consequent,t)),i(t);break;case ma.Identifier:t=t||this.nextId(),
n&&(n.context="inputs"===d.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",e.name)+"?l:s"),n.computed=!1,n.name=e.name),Zt(e.name),d.if_("inputs"===d.stage||d.not(d.getHasOwnProperty("l",e.name)),function(){
d.if_("inputs"===d.stage||"s",function(){a&&1!==a&&d.if_(d.not(d.nonComputedMember("s",e.name)),d.lazyAssign(d.nonComputedMember("s",e.name),"{}")),d.assign(t,d.nonComputedMember("s",e.name));
})},t&&d.lazyAssign(t,d.nonComputedMember("l",e.name))),(d.state.expensiveChecks||hn(e.name))&&d.addEnsureSafeObject(t),i(t);break;case ma.MemberExpression:
s=n&&(n.context=this.nextId())||this.nextId(),t=t||this.nextId(),d.recurse(e.object,s,void 0,function(){d.if_(d.notNull(s),function(){a&&1!==a&&d.addEnsureSafeAssignContext(s),
e.computed?(u=d.nextId(),d.recurse(e.property,u),d.getStringValue(u),d.addEnsureSafeMemberName(u),a&&1!==a&&d.if_(d.not(d.computedMember(s,u)),d.lazyAssign(d.computedMember(s,u),"{}")),
c=d.ensureSafeObject(d.computedMember(s,u)),d.assign(t,c),n&&(n.computed=!0,n.name=u)):(Zt(e.property.name),a&&1!==a&&d.if_(d.not(d.nonComputedMember(s,e.property.name)),d.lazyAssign(d.nonComputedMember(s,e.property.name),"{}")),
c=d.nonComputedMember(s,e.property.name),(d.state.expensiveChecks||hn(e.property.name))&&(c=d.ensureSafeObject(c)),d.assign(t,c),n&&(n.computed=!1,n.name=e.property.name));
},function(){d.assign(t,"undefined")}),i(t)},!!a);break;case ma.CallExpression:t=t||this.nextId(),e.filter?(u=d.filter(e.callee.name),l=[],r(e.arguments,function(e){
var t=d.nextId();d.recurse(e,t),l.push(t)}),c=u+"("+l.join(",")+")",d.assign(t,c),i(t)):(u=d.nextId(),s={},l=[],d.recurse(e.callee,u,s,function(){d.if_(d.notNull(u),function(){
d.addEnsureSafeFunction(u),r(e.arguments,function(e){d.recurse(e,d.nextId(),void 0,function(e){l.push(d.ensureSafeObject(e))})}),s.name?(d.state.expensiveChecks||d.addEnsureSafeObject(s.context),
c=d.member(s.context,s.name,s.computed)+"("+l.join(",")+")"):c=u+"("+l.join(",")+")",c=d.ensureSafeObject(c),d.assign(t,c)},function(){d.assign(t,"undefined");
}),i(t)}));break;case ma.AssignmentExpression:if(u=this.nextId(),s={},!ln(e.left))throw sa("lval","Trying to assign a value to a non l-value");this.recurse(e.left,void 0,s,function(){
d.if_(d.notNull(s.context),function(){d.recurse(e.right,u),d.addEnsureSafeObject(d.member(s.context,s.name,s.computed)),d.addEnsureSafeAssignContext(s.context),
c=d.member(s.context,s.name,s.computed)+e.operator+u,d.assign(t,c),i(t||c)})},1);break;case ma.ArrayExpression:l=[],r(e.elements,function(e){d.recurse(e,d.nextId(),void 0,function(e){
l.push(e)})}),c="["+l.join(",")+"]",this.assign(t,c),i(c);break;case ma.ObjectExpression:l=[],r(e.properties,function(e){d.recurse(e.value,d.nextId(),void 0,function(t){
l.push(d.escape(e.key.type===ma.Identifier?e.key.name:""+e.key.value)+":"+t)})}),c="{"+l.join(",")+"}",this.assign(t,c),i(c);break;case ma.ThisExpression:
this.assign(t,"s"),i("s");break;case ma.LocalsExpression:this.assign(t,"l"),i("l");break;case ma.NGValueParameter:this.assign(t,"v"),i("v")}},getHasOwnProperty:function(e,t){
var n=e+"."+t,r=this.current().own;return r.hasOwnProperty(n)||(r[n]=this.nextId(!1,e+"&&("+this.escape(t)+" in "+e+")")),r[n]},assign:function(e,t){if(e)return this.current().body.push(e,"=",t,";"),
e},filter:function(e){return this.state.filters.hasOwnProperty(e)||(this.state.filters[e]=this.nextId(!0)),this.state.filters[e]},ifDefined:function(e,t){
return"ifDefined("+e+","+this.escape(t)+")"},plus:function(e,t){return"plus("+e+","+t+")"},return_:function(e){this.current().body.push("return ",e,";");
},if_:function(e,t,n){if(e===!0)t();else{var r=this.current().body;r.push("if(",e,"){"),t(),r.push("}"),n&&(r.push("else{"),n(),r.push("}"))}},not:function(e){
return"!("+e+")"},notNull:function(e){return e+"!=null"},nonComputedMember:function(e,t){var n=/[$_a-zA-Z][$_a-zA-Z0-9]*/,r=/[^$_a-zA-Z0-9]/g;return n.test(t)?e+"."+t:e+'["'+t.replace(r,this.stringEscapeFn)+'"]';
},computedMember:function(e,t){return e+"["+t+"]"},member:function(e,t,n){return n?this.computedMember(e,t):this.nonComputedMember(e,t)},addEnsureSafeObject:function(e){
this.current().body.push(this.ensureSafeObject(e),";")},addEnsureSafeMemberName:function(e){this.current().body.push(this.ensureSafeMemberName(e),";")},
addEnsureSafeFunction:function(e){this.current().body.push(this.ensureSafeFunction(e),";")},addEnsureSafeAssignContext:function(e){this.current().body.push(this.ensureSafeAssignContext(e),";");
},ensureSafeObject:function(e){return"ensureSafeObject("+e+",text)"},ensureSafeMemberName:function(e){return"ensureSafeMemberName("+e+",text)"},ensureSafeFunction:function(e){
return"ensureSafeFunction("+e+",text)"},getStringValue:function(e){this.assign(e,"getStringValue("+e+")")},ensureSafeAssignContext:function(e){return"ensureSafeAssignContext("+e+",text)";
},lazyRecurse:function(e,t,n,r,i,a){var o=this;return function(){o.recurse(e,t,n,r,i,a)}},lazyAssign:function(e,t){var n=this;return function(){n.assign(e,t);
}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)},escape:function(e){if(w(e))return"'"+e.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";
if(M(e))return e.toString();if(e===!0)return"true";if(e===!1)return"false";if(null===e)return"null";if("undefined"==typeof e)return"undefined";throw sa("esc","IMPOSSIBLE");
},nextId:function(e,t){var n="v"+this.state.nextId++;return e||this.current().vars.push(n+(t?"="+t:"")),n},current:function(){return this.state[this.state.computing];
}},mn.prototype={compile:function(e,t){var n=this,i=this.astBuilder.ast(e);this.expression=e,this.expensiveChecks=t,sn(i,n.$filter);var a,o;(a=cn(i))&&(o=this.recurse(a));
var s,u=un(i.body);u&&(s=[],r(u,function(e,t){var r=n.recurse(e);e.input=r,s.push(r),e.watchId=t}));var l=[];r(i.body,function(e){l.push(n.recurse(e.expression));
});var c=0===i.body.length?p:1===i.body.length?l[0]:function(e,t){var n;return r(l,function(r){n=r(e,t)}),n};return o&&(c.assign=function(e,t,n){return o(e,n,t);
}),s&&(c.inputs=s),c.literal=dn(i),c.constant=fn(i),c},recurse:function(e,t,n){var i,a,o,s=this;if(e.input)return this.inputs(e.input,e.watchId);switch(e.type){
case ma.Literal:return this.value(e.value,t);case ma.UnaryExpression:return a=this.recurse(e.argument),this["unary"+e.operator](a,t);case ma.BinaryExpression:
return i=this.recurse(e.left),a=this.recurse(e.right),this["binary"+e.operator](i,a,t);case ma.LogicalExpression:return i=this.recurse(e.left),a=this.recurse(e.right),
this["binary"+e.operator](i,a,t);case ma.ConditionalExpression:return this["ternary?:"](this.recurse(e.test),this.recurse(e.alternate),this.recurse(e.consequent),t);
case ma.Identifier:return Zt(e.name,s.expression),s.identifier(e.name,s.expensiveChecks||hn(e.name),t,n,s.expression);case ma.MemberExpression:return i=this.recurse(e.object,!1,!!n),
e.computed||(Zt(e.property.name,s.expression),a=e.property.name),e.computed&&(a=this.recurse(e.property)),e.computed?this.computedMember(i,a,t,n,s.expression):this.nonComputedMember(i,a,s.expensiveChecks,t,n,s.expression);
case ma.CallExpression:return o=[],r(e.arguments,function(e){o.push(s.recurse(e))}),e.filter&&(a=this.$filter(e.callee.name)),e.filter||(a=this.recurse(e.callee,!0)),
e.filter?function(e,n,r,i){for(var s=[],u=0;u<o.length;++u)s.push(o[u](e,n,r,i));var l=a.apply(void 0,s,i);return t?{context:void 0,name:void 0,value:l
}:l}:function(e,n,r,i){var u,l=a(e,n,r,i);if(null!=l.value){en(l.context,s.expression),tn(l.value,s.expression);for(var c=[],d=0;d<o.length;++d)c.push(en(o[d](e,n,r,i),s.expression));
u=en(l.value.apply(l.context,c),s.expression)}return t?{value:u}:u};case ma.AssignmentExpression:return i=this.recurse(e.left,!0,1),a=this.recurse(e.right),
function(e,n,r,o){var u=i(e,n,r,o),l=a(e,n,r,o);return en(u.value,s.expression),nn(u.context),u.context[u.name]=l,t?{value:l}:l};case ma.ArrayExpression:
return o=[],r(e.elements,function(e){o.push(s.recurse(e))}),function(e,n,r,i){for(var a=[],s=0;s<o.length;++s)a.push(o[s](e,n,r,i));return t?{value:a}:a;
};case ma.ObjectExpression:return o=[],r(e.properties,function(e){o.push({key:e.key.type===ma.Identifier?e.key.name:""+e.key.value,value:s.recurse(e.value)
})}),function(e,n,r,i){for(var a={},s=0;s<o.length;++s)a[o[s].key]=o[s].value(e,n,r,i);return t?{value:a}:a};case ma.ThisExpression:return function(e){
return t?{value:e}:e};case ma.LocalsExpression:return function(e,n){return t?{value:n}:n};case ma.NGValueParameter:return function(e,n,r){return t?{value:r
}:r}}},"unary+":function(e,t){return function(n,r,i,a){var o=e(n,r,i,a);return o=v(o)?+o:0,t?{value:o}:o}},"unary-":function(e,t){return function(n,r,i,a){
var o=e(n,r,i,a);return o=v(o)?-o:0,t?{value:o}:o}},"unary!":function(e,t){return function(n,r,i,a){var o=!e(n,r,i,a);return t?{value:o}:o}},"binary+":function(e,t,n){
return function(r,i,a,o){var s=e(r,i,a,o),u=t(r,i,a,o),l=an(s,u);return n?{value:l}:l}},"binary-":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o),u=t(r,i,a,o),l=(v(s)?s:0)-(v(u)?u:0);
return n?{value:l}:l}},"binary*":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)*t(r,i,a,o);return n?{value:s}:s}},"binary/":function(e,t,n){
return function(r,i,a,o){var s=e(r,i,a,o)/t(r,i,a,o);return n?{value:s}:s}},"binary%":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)%t(r,i,a,o);
return n?{value:s}:s}},"binary===":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)===t(r,i,a,o);return n?{value:s}:s}},"binary!==":function(e,t,n){
return function(r,i,a,o){var s=e(r,i,a,o)!==t(r,i,a,o);return n?{value:s}:s}},"binary==":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)==t(r,i,a,o);
return n?{value:s}:s}},"binary!=":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)!=t(r,i,a,o);return n?{value:s}:s}},"binary<":function(e,t,n){
return function(r,i,a,o){var s=e(r,i,a,o)<t(r,i,a,o);return n?{value:s}:s}},"binary>":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)>t(r,i,a,o);
return n?{value:s}:s}},"binary<=":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)<=t(r,i,a,o);return n?{value:s}:s}},"binary>=":function(e,t,n){
return function(r,i,a,o){var s=e(r,i,a,o)>=t(r,i,a,o);return n?{value:s}:s}},"binary&&":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)&&t(r,i,a,o);
return n?{value:s}:s}},"binary||":function(e,t,n){return function(r,i,a,o){var s=e(r,i,a,o)||t(r,i,a,o);return n?{value:s}:s}},"ternary?:":function(e,t,n,r){
return function(i,a,o,s){var u=e(i,a,o,s)?t(i,a,o,s):n(i,a,o,s);return r?{value:u}:u}},value:function(e,t){return function(){return t?{context:void 0,name:void 0,
value:e}:e}},identifier:function(e,t,n,r,i){return function(a,o,s,u){var l=o&&e in o?o:a;r&&1!==r&&l&&!l[e]&&(l[e]={});var c=l?l[e]:void 0;return t&&en(c,i),
n?{context:l,name:e,value:c}:c}},computedMember:function(e,t,n,r,i){return function(a,o,s,u){var l,c,d=e(a,o,s,u);return null!=d&&(l=t(a,o,s,u),l=Qt(l),
Zt(l,i),r&&1!==r&&(nn(d),d&&!d[l]&&(d[l]={})),c=d[l],en(c,i)),n?{context:d,name:l,value:c}:c}},nonComputedMember:function(e,t,n,r,i,a){return function(o,s,u,l){
var c=e(o,s,u,l);i&&1!==i&&(nn(c),c&&!c[t]&&(c[t]={}));var d=null!=c?c[t]:void 0;return(n||hn(t))&&en(d,a),r?{context:c,name:t,value:d}:d}},inputs:function(e,t){
return function(n,r,i,a){return a?a[t]:e(n,r,i)}}};var ha=function(e,t,n){this.lexer=e,this.$filter=t,this.options=n,this.ast=new ma(e,n),this.astCompiler=n.csp?new mn(this.ast,t):new pn(this.ast,t);
};ha.prototype={constructor:ha,parse:function(e){return this.astCompiler.compile(e,this.options.expensiveChecks)}};var _a=Object.prototype.valueOf,ga=t("$sce"),va={
HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ya=t("$compile"),ba=e.document.createElement("a"),wa=En(e.location.href);jn.$inject=["$document"],
On.$inject=["$provide"];var Ma=22,Da=".",$a="0";Un.$inject=["$locale"],Bn.$inject=["$locale"];var La={yyyy:Gn("FullYear",4,0,!1,!0),yy:Gn("FullYear",2,0,!0,!0),
y:Gn("FullYear",1,0,!1,!0),MMMM:Jn("Month"),MMM:Jn("Month",!0),MM:Gn("Month",2,1),M:Gn("Month",1,1),LLLL:Jn("Month",!1,!0),dd:Gn("Date",2),d:Gn("Date",1),
HH:Gn("Hours",2),H:Gn("Hours",1),hh:Gn("Hours",2,-12),h:Gn("Hours",1,-12),mm:Gn("Minutes",2),m:Gn("Minutes",1),ss:Gn("Seconds",2),s:Gn("Seconds",1),sss:Gn("Milliseconds",3),
EEEE:Jn("Day"),EEE:Jn("Day",!0),a:er,Z:Xn,ww:Qn(2),w:Qn(1),G:tr,GG:tr,GGG:tr,GGGG:nr},ka=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,xa=/^\-?\d+$/;
rr.$inject=["$locale"];var Ta=h(Yr),Sa=h(Cr);or.$inject=["$parse"];var Ya=h({restrict:"E",compile:function(e,t){if(!t.href&&!t.xlinkHref)return function(e,t){
if("a"===t[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===Nr.call(t.prop("href"))?"xlink:href":"href";t.on("click",function(e){t.attr(n)||e.preventDefault();
})}}}}),Ca={};r($i,function(e,t){function n(e,n,i){e.$watch(i[r],function(e){i.$set(t,!!e)})}if("multiple"!=e){var r=ht("ng-"+t),i=n;"checked"===e&&(i=function(e,t,i){
i.ngModel!==i[r]&&n(e,t,i)}),Ca[r]=function(){return{restrict:"A",priority:100,link:i}}}}),r(ki,function(e,t){Ca[t]=function(){return{priority:100,link:function(e,n,r){
if("ngPattern"===t&&"/"==r.ngPattern.charAt(0)){var i=r.ngPattern.match(xr);if(i)return void r.$set("ngPattern",new RegExp(i[1],i[2]))}e.$watch(r[t],function(e){
r.$set(t,e)})}}}}),r(["src","srcset","href"],function(e){var t=ht("ng-"+e);Ca[t]=function(){return{priority:99,link:function(n,r,i){var a=e,o=e;"href"===e&&"[object SVGAnimatedString]"===Nr.call(r.prop("href"))&&(o="xlinkHref",
i.$attr[o]="xlink:href",a=null),i.$observe(t,function(t){return t?(i.$set(o,t),void(Fr&&a&&r.prop(a,i[o]))):void("href"===e&&i.$set(o,null))})}}}});var Ea={
$addControl:p,$$renameControl:ur,$removeControl:p,$setValidity:p,$setDirty:p,$setPristine:p,$setSubmitted:p},Aa="ng-submitted";lr.$inject=["$element","$attrs","$scope","$animate","$interpolate"];
var Fa=function(e){return["$timeout","$parse",function(t,n){function r(e){return""===e?n('this[""]').assign:n(e).assign||p}var i={name:"form",restrict:e?"EAC":"E",
require:["form","^^?form"],controller:lr,compile:function(n,i){n.addClass(go).addClass(ho);var a=i.name?"name":!(!e||!i.ngForm)&&"ngForm";return{pre:function(e,n,i,o){
var s=o[0];if(!("action"in i)){var u=function(t){e.$apply(function(){s.$commitViewValue(),s.$setSubmitted()}),t.preventDefault()};di(n[0],"submit",u),n.on("$destroy",function(){
t(function(){fi(n[0],"submit",u)},0,!1)})}var c=o[1]||s.$$parentForm;c.$addControl(s);var d=a?r(s.$name):p;a&&(d(e,s),i.$observe(a,function(t){s.$name!==t&&(d(e,void 0),
s.$$parentForm.$$renameControl(s,t),(d=r(s.$name))(e,s))})),n.on("$destroy",function(){s.$$parentForm.$removeControl(s),d(e,void 0),l(s,Ea)})}}}};return i;
}]},ja=Fa(),Pa=Fa(!0),Oa=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Ha=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Ra=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Ia=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Na=/^(\d{4,})-(\d{2})-(\d{2})$/,Ua=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ba=/^(\d{4,})-W(\d\d)$/,Wa=/^(\d{4,})-(\d\d)$/,za=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,qa="keydown wheel mousedown",Va=he();
r("date,datetime-local,month,time,week".split(","),function(e){Va[e]=!0});var Ga={text:dr,date:hr("date",Na,mr(Na,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":hr("datetimelocal",Ua,mr(Ua,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),
time:hr("time",za,mr(za,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:hr("week",Ba,pr,"yyyy-Www"),month:hr("month",Wa,mr(Wa,["yyyy","MM"]),"yyyy-MM"),number:gr,
url:vr,email:yr,radio:br,checkbox:Mr,hidden:p,button:p,submit:p,reset:p,file:p},Ja=["$browser","$sniffer","$filter","$parse",function(e,t,n,r){return{restrict:"E",
require:["?ngModel"],link:{pre:function(i,a,o,s){s[0]&&(Ga[Yr(o.type)]||Ga.text)(i,a,o,s[0],t,e,n,r)}}}}],Xa=/^(true|false|\d+)$/,Ka=function(){return{
restrict:"A",priority:100,compile:function(e,t){return Xa.test(t.ngValue)?function(e,t,n){n.$set("value",e.$eval(n.ngValue))}:function(e,t,n){e.$watch(n.ngValue,function(e){
n.$set("value",e)})}}}},Za=["$compile",function(e){return{restrict:"AC",compile:function(t){return e.$$addBindingClass(t),function(t,n,r){e.$$addBindingInfo(n,r.ngBind),
n=n[0],t.$watch(r.ngBind,function(e){n.textContent=g(e)?"":e})}}}}],Qa=["$interpolate","$compile",function(e,t){return{compile:function(n){return t.$$addBindingClass(n),
function(n,r,i){var a=e(r.attr(i.$attr.ngBindTemplate));t.$$addBindingInfo(r,a.expressions),r=r[0],i.$observe("ngBindTemplate",function(e){r.textContent=g(e)?"":e;
})}}}}],eo=["$sce","$parse","$compile",function(e,t,n){return{restrict:"A",compile:function(r,i){var a=t(i.ngBindHtml),o=t(i.ngBindHtml,function(e){return(e||"").toString();
});return n.$$addBindingClass(r),function(t,r,i){n.$$addBindingInfo(r,i.ngBindHtml),t.$watch(o,function(){r.html(e.getTrustedHtml(a(t))||"")})}}}}],to=h({
restrict:"A",require:"ngModel",link:function(e,t,n,r){r.$viewChangeListeners.push(function(){e.$eval(n.ngChange)})}}),no=Dr("",!0),ro=Dr("Odd",0),io=Dr("Even",1),ao=sr({
compile:function(e,t){t.$set("ngCloak",void 0),e.removeClass("ng-cloak")}}),oo=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],so={},uo={
blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(e){
var t=ht("ng-"+e);so[t]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,a){var o=n(a[t],null,!0);return function(t,n){n.on(e,function(n){
var i=function(){o(t,{$event:n})};uo[e]&&r.$$phase?t.$evalAsync(i):t.$apply(i)})}}}}]});var lo=["$animate","$compile",function(e,t){return{multiElement:!0,
transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,a,o){var s,u,l;n.$watch(i.ngIf,function(n){n?u||o(function(n,a){
u=a,n[n.length++]=t.$$createComment("end ngIf",i.ngIf),s={clone:n},e.enter(n,r.parent(),r)}):(l&&(l.remove(),l=null),u&&(u.$destroy(),u=null),s&&(l=me(s.clone),
e.leave(l).then(function(){l=null}),s=null))})}}}],co=["$templateRequest","$anchorScroll","$animate",function(e,t,n){return{restrict:"ECA",priority:400,
terminal:!0,transclude:"element",controller:Wr.noop,compile:function(r,i){var a=i.ngInclude||i.src,o=i.onload||"",s=i.autoscroll;return function(r,i,u,l,c){
var d,f,p,m=0,h=function(){f&&(f.remove(),f=null),d&&(d.$destroy(),d=null),p&&(n.leave(p).then(function(){f=null}),f=p,p=null)};r.$watch(a,function(a){
var u=function(){!v(s)||s&&!r.$eval(s)||t()},f=++m;a?(e(a,!0).then(function(e){if(!r.$$destroyed&&f===m){var t=r.$new();l.template=e;var s=c(t,function(e){
h(),n.enter(e,null,i).then(u)});d=t,p=s,d.$emit("$includeContentLoaded",a),r.$eval(o)}},function(){r.$$destroyed||f===m&&(h(),r.$emit("$includeContentError",a));
}),r.$emit("$includeContentRequested",a)):(h(),l.template=null)})}}}}],fo=["$compile",function(t){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(n,r,i,a){return Nr.call(r[0]).match(/SVG/)?(r.empty(),void t(ke(a.template,e.document).childNodes)(n,function(e){r.append(e)},{futureParentElement:r
})):(r.html(a.template),void t(r.contents())(n))}}}],po=sr({priority:450,compile:function(){return{pre:function(e,t,n){e.$eval(n.ngInit)}}}}),mo=function(){
return{restrict:"A",priority:100,require:"ngModel",link:function(e,t,n,i){var a=t.attr(n.$attr.ngList)||", ",o="false"!==n.ngTrim,s=o?Gr(a):a,u=function(e){
if(!g(e)){var t=[];return e&&r(e.split(s),function(e){e&&t.push(o?Gr(e):e)}),t}};i.$parsers.push(u),i.$formatters.push(function(e){if(qr(e))return e.join(a);
}),i.$isEmpty=function(e){return!e||!e.length}}}},ho="ng-valid",_o="ng-invalid",go="ng-pristine",vo="ng-dirty",yo="ng-untouched",bo="ng-touched",wo="ng-pending",Mo="ng-empty",Do="ng-not-empty",$o=t("ngModel"),Lo=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(e,t,n,i,a,o,s,u,l,c){
this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=void 0,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],
this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},
this.$pending=void 0,this.$name=c(n.name||"",!1)(e),this.$$parentForm=Ea;var d,f=a(n.ngModel),m=f.assign,h=f,_=m,y=null,b=this;this.$$setOptions=function(e){
if(b.$options=e,e&&e.getterSetter){var t=a(n.ngModel+"()"),r=a(n.ngModel+"($$$p)");h=function(e){var n=f(e);return $(n)&&(n=t(e)),n},_=function(e,t){$(f(e))?r(e,{
$$$p:t}):m(e,t)}}else if(!f.assign)throw $o("nonassign","Expression '{0}' is non-assignable. Element: {1}",n.ngModel,K(i))},this.$render=p,this.$isEmpty=function(e){
return g(e)||""===e||null===e||e!==e},this.$$updateEmptyClasses=function(e){b.$isEmpty(e)?(o.removeClass(i,Do),o.addClass(i,Mo)):(o.removeClass(i,Mo),o.addClass(i,Do));
};var w=0;$r({ctrl:this,$element:i,set:function(e,t){e[t]=!0},unset:function(e,t){delete e[t]},$animate:o}),this.$setPristine=function(){b.$dirty=!1,b.$pristine=!0,
o.removeClass(i,vo),o.addClass(i,go)},this.$setDirty=function(){b.$dirty=!0,b.$pristine=!1,o.removeClass(i,go),o.addClass(i,vo),b.$$parentForm.$setDirty();
},this.$setUntouched=function(){b.$touched=!1,b.$untouched=!0,o.setClass(i,yo,bo)},this.$setTouched=function(){b.$touched=!0,b.$untouched=!1,o.setClass(i,bo,yo);
},this.$rollbackViewValue=function(){s.cancel(y),b.$viewValue=b.$$lastCommittedViewValue,b.$render()},this.$validate=function(){if(!M(b.$modelValue)||!isNaN(b.$modelValue)){
var e=b.$$lastCommittedViewValue,t=b.$$rawModelValue,n=b.$valid,r=b.$modelValue,i=b.$options&&b.$options.allowInvalid;b.$$runValidators(t,e,function(e){
i||n===e||(b.$modelValue=e?t:void 0,b.$modelValue!==r&&b.$$writeModelToScope())})}},this.$$runValidators=function(e,t,n){function i(){var e=b.$$parserName||"parse";
return g(d)?(s(e,null),!0):(d||(r(b.$validators,function(e,t){s(t,null)}),r(b.$asyncValidators,function(e,t){s(t,null)})),s(e,d),d)}function a(){var n=!0;
return r(b.$validators,function(r,i){var a=r(e,t);n=n&&a,s(i,a)}),!!n||(r(b.$asyncValidators,function(e,t){s(t,null)}),!1)}function o(){var n=[],i=!0;r(b.$asyncValidators,function(r,a){
var o=r(e,t);if(!E(o))throw $o("nopromise","Expected asynchronous validator to return a promise but got '{0}' instead.",o);s(a,void 0),n.push(o.then(function(){
s(a,!0)},function(){i=!1,s(a,!1)}))}),n.length?l.all(n).then(function(){u(i)},p):u(!0)}function s(e,t){c===w&&b.$setValidity(e,t)}function u(e){c===w&&n(e);
}w++;var c=w;return i()&&a()?void o():void u(!1)},this.$commitViewValue=function(){var e=b.$viewValue;s.cancel(y),(b.$$lastCommittedViewValue!==e||""===e&&b.$$hasNativeValidators)&&(b.$$updateEmptyClasses(e),
b.$$lastCommittedViewValue=e,b.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function t(){b.$modelValue!==a&&b.$$writeModelToScope();
}var n=b.$$lastCommittedViewValue,r=n;if(d=!g(r)||void 0)for(var i=0;i<b.$parsers.length;i++)if(r=b.$parsers[i](r),g(r)){d=!1;break}M(b.$modelValue)&&isNaN(b.$modelValue)&&(b.$modelValue=h(e));
var a=b.$modelValue,o=b.$options&&b.$options.allowInvalid;b.$$rawModelValue=r,o&&(b.$modelValue=r,t()),b.$$runValidators(r,b.$$lastCommittedViewValue,function(e){
o||(b.$modelValue=e?r:void 0,t())})},this.$$writeModelToScope=function(){_(e,b.$modelValue),r(b.$viewChangeListeners,function(e){try{e()}catch(e){t(e)}
})},this.$setViewValue=function(e,t){b.$viewValue=e,b.$options&&!b.$options.updateOnDefault||b.$$debounceViewValueCommit(t)},this.$$debounceViewValueCommit=function(t){
var n,r=0,i=b.$options;i&&v(i.debounce)&&(n=i.debounce,M(n)?r=n:M(n[t])?r=n[t]:M(n.default)&&(r=n.default)),s.cancel(y),r?y=s(function(){b.$commitViewValue();
},r):u.$$phase?b.$commitViewValue():e.$apply(function(){b.$commitViewValue()})},e.$watch(function(){var t=h(e);if(t!==b.$modelValue&&(b.$modelValue===b.$modelValue||t===t)){
b.$modelValue=b.$$rawModelValue=t,d=void 0;for(var n=b.$formatters,r=n.length,i=t;r--;)i=n[r](i);b.$viewValue!==i&&(b.$$updateEmptyClasses(i),b.$viewValue=b.$$lastCommittedViewValue=i,
b.$render(),b.$$runValidators(t,i,p))}return t})}],ko=["$rootScope",function(e){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Lo,
priority:1,compile:function(t){return t.addClass(go).addClass(yo).addClass(ho),{pre:function(e,t,n,r){var i=r[0],a=r[1]||i.$$parentForm;i.$$setOptions(r[2]&&r[2].$options),
a.$addControl(i),n.$observe("name",function(e){i.$name!==e&&i.$$parentForm.$$renameControl(i,e)}),e.$on("$destroy",function(){i.$$parentForm.$removeControl(i);
})},post:function(t,n,r,i){var a=i[0];a.$options&&a.$options.updateOn&&n.on(a.$options.updateOn,function(e){a.$$debounceViewValueCommit(e&&e.type)}),n.on("blur",function(){
a.$touched||(e.$$phase?t.$evalAsync(a.$setTouched):t.$apply(a.$setTouched))})}}}}}],xo=/(\s+|^)default(\s+|$)/,To=function(){return{restrict:"A",controller:["$scope","$attrs",function(e,t){
var n=this;this.$options=R(e.$eval(t.ngModelOptions)),v(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=Gr(this.$options.updateOn.replace(xo,function(){
return n.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},So=sr({terminal:!0,priority:1e3}),Yo=t("ngOptions"),Co=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Eo=["$compile","$document","$parse",function(t,i,a){
function o(e,t,r){function i(e,t,n,r,i){this.selectValue=e,this.viewValue=t,this.label=n,this.group=r,this.disabled=i}function o(e){var t;if(!l&&n(e))t=e;else{
t=[];for(var r in e)e.hasOwnProperty(r)&&"$"!==r.charAt(0)&&t.push(r)}return t}var s=e.match(Co);if(!s)throw Yo("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",e,K(t));
var u=s[5]||s[7],l=s[6],c=/ as /.test(s[0])&&s[1],d=s[9],f=a(s[2]?s[1]:u),p=c&&a(c),m=p||f,h=d&&a(d),_=d?function(e,t){return h(r,t)}:function(e){return Ke(e);
},g=function(e,t){return _(e,D(e,t))},v=a(s[2]||s[1]),y=a(s[3]||""),b=a(s[4]||""),w=a(s[8]),M={},D=l?function(e,t){return M[l]=t,M[u]=e,M}:function(e){
return M[u]=e,M};return{trackBy:d,getTrackByValue:g,getWatchables:a(w,function(e){var t=[];e=e||[];for(var n=o(e),i=n.length,a=0;a<i;a++){var u=e===n?a:n[a],l=e[u],c=D(l,u),d=_(l,c);
if(t.push(d),s[2]||s[1]){var f=v(r,c);t.push(f)}if(s[4]){var p=b(r,c);t.push(p)}}return t}),getOptions:function(){for(var e=[],t={},n=w(r)||[],a=o(n),s=a.length,u=0;u<s;u++){
var l=n===a?u:a[u],c=n[l],f=D(c,l),p=m(r,f),h=_(p,f),M=v(r,f),$=y(r,f),L=b(r,f),k=new i(h,p,M,$,L);e.push(k),t[h]=k}return{items:e,selectValueMap:t,getOptionFromViewValue:function(e){
return t[g(e)]},getViewValueFromOption:function(e){return d?Wr.copy(e.viewValue):e.viewValue}}}}}function s(e,n,a,s){function c(e,t){var n=u.cloneNode(!1);
t.appendChild(n),d(e,n)}function d(e,t){e.element=t,t.disabled=e.disabled,e.label!==t.label&&(t.label=e.label,t.textContent=e.label),e.value!==t.value&&(t.value=e.selectValue);
}function f(){var e=D&&m.readValue();if(D)for(var t=D.items.length-1;t>=0;t--){var r=D.items[t];Be(r.group?r.element.parentNode:r.element)}D=$.getOptions();
var i={};if(w&&n.prepend(p),D.items.forEach(function(e){var t;v(e.group)?(t=i[e.group],t||(t=l.cloneNode(!1),L.appendChild(t),t.label=e.group,i[e.group]=t),
c(e,t)):c(e,L)}),n[0].appendChild(L),h.$render(),!h.$isEmpty(e)){var a=m.readValue(),o=$.trackBy||_;(o?N(e,a):e===a)||(h.$setViewValue(a),h.$render())}
}for(var p,m=s[0],h=s[1],_=a.multiple,g=0,y=n.children(),b=y.length;g<b;g++)if(""===y[g].value){p=y.eq(g);break}var w=!!p,M=jr(u.cloneNode(!1));M.val("?");
var D,$=o(a.ngOptions,n,e),L=i[0].createDocumentFragment(),k=function(){w||n.prepend(p),n.val(""),p.prop("selected",!0),p.attr("selected",!0)},x=function(){
w||p.remove()},T=function(){n.prepend(M),n.val("?"),M.prop("selected",!0),M.attr("selected",!0)},S=function(){M.remove()};_?(h.$isEmpty=function(e){return!e||0===e.length;
},m.writeValue=function(e){D.items.forEach(function(e){e.element.selected=!1}),e&&e.forEach(function(e){var t=D.getOptionFromViewValue(e);t&&(t.element.selected=!0);
})},m.readValue=function(){var e=n.val()||[],t=[];return r(e,function(e){var n=D.selectValueMap[e];n&&!n.disabled&&t.push(D.getViewValueFromOption(n))}),
t},$.trackBy&&e.$watchCollection(function(){if(qr(h.$viewValue))return h.$viewValue.map(function(e){return $.getTrackByValue(e)})},function(){h.$render();
})):(m.writeValue=function(e){var t=D.getOptionFromViewValue(e);t?(n[0].value!==t.selectValue&&(S(),x(),n[0].value=t.selectValue,t.element.selected=!0),
t.element.setAttribute("selected","selected")):null===e||w?(S(),k()):(x(),T())},m.readValue=function(){var e=D.selectValueMap[n.val()];return e&&!e.disabled?(x(),
S(),D.getViewValueFromOption(e)):null},$.trackBy&&e.$watch(function(){return $.getTrackByValue(h.$viewValue)},function(){h.$render()})),w?(p.remove(),t(p)(e),
p.removeClass("ng-scope")):p=jr(u.cloneNode(!1)),n.empty(),f(),e.$watchCollection($.getWatchables,f)}var u=e.document.createElement("option"),l=e.document.createElement("optgroup");
return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(e,t,n,r){r[0].registerOption=p},post:s}}}],Ao=["$locale","$interpolate","$log",function(e,t,n){
var i=/{}/g,a=/^when(Minus)?(.+)$/;return{link:function(o,s,u){function l(e){s.text(e||"")}var c,d=u.count,f=u.$attr.when&&s.attr(u.$attr.when),m=u.offset||0,h=o.$eval(f)||{},_={},v=t.startSymbol(),y=t.endSymbol(),b=v+d+"-"+m+y,w=Wr.noop;
r(u,function(e,t){var n=a.exec(t);if(n){var r=(n[1]?"-":"")+Yr(n[2]);h[r]=s.attr(u.$attr[t])}}),r(h,function(e,n){_[n]=t(e.replace(i,b))}),o.$watch(d,function(t){
var r=parseFloat(t),i=isNaN(r);if(i||r in h||(r=e.pluralCat(r-m)),r!==c&&!(i&&M(c)&&isNaN(c))){w();var a=_[r];g(a)?(null!=t&&n.debug("ngPluralize: no rule defined for '"+r+"' in "+f),
w=p,l()):w=o.$watch(a,l),c=r}})}}}],Fo=["$parse","$animate","$compile",function(e,i,a){var o="$$NG_REMOVED",s=t("ngRepeat"),u=function(e,t,n,r,i,a,o){e[n]=r,
i&&(e[i]=a),e.$index=t,e.$first=0===t,e.$last=t===o-1,e.$middle=!(e.$first||e.$last),e.$odd=!(e.$even=0===(1&t))},l=function(e){return e.clone[0]},c=function(e){
return e.clone[e.clone.length-1]};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(t,d){var f=d.ngRepeat,p=a.$$createComment("end ngRepeat",f),m=f.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!m)throw s("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",f);var h=m[1],_=m[2],g=m[3],v=m[4];if(m=h.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),
!m)throw s("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",h);var y=m[3]||m[1],b=m[2];
if(g&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(g)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(g)))throw s("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",g);
var w,M,D,$,L={$id:Ke};return v?w=e(v):(D=function(e,t){return Ke(t)},$=function(e){return e}),function(e,t,a,d,m){w&&(M=function(t,n,r){return b&&(L[b]=t),
L[y]=n,L.$index=r,w(e,L)});var h=he();e.$watchCollection(_,function(a){var d,_,v,w,L,k,x,T,S,Y,C,E,A=t[0],F=he();if(g&&(e[g]=a),n(a))S=a,T=M||D;else{T=M||$,
S=[];for(var j in a)Sr.call(a,j)&&"$"!==j.charAt(0)&&S.push(j)}for(w=S.length,C=new Array(w),d=0;d<w;d++)if(L=a===S?d:S[d],k=a[L],x=T(L,k,d),h[x])Y=h[x],
delete h[x],F[x]=Y,C[d]=Y;else{if(F[x])throw r(C,function(e){e&&e.scope&&(h[e.id]=e)}),s("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",f,x,k);
C[d]={id:x,scope:void 0,clone:void 0},F[x]=!0}for(var P in h){if(Y=h[P],E=me(Y.clone),i.leave(E),E[0].parentNode)for(d=0,_=E.length;d<_;d++)E[d][o]=!0;Y.scope.$destroy();
}for(d=0;d<w;d++)if(L=a===S?d:S[d],k=a[L],Y=C[d],Y.scope){v=A;do v=v.nextSibling;while(v&&v[o]);l(Y)!=v&&i.move(me(Y.clone),null,A),A=c(Y),u(Y.scope,d,y,k,b,L,w);
}else m(function(e,t){Y.scope=t;var n=p.cloneNode(!1);e[e.length++]=n,i.enter(e,null,A),A=n,Y.clone=e,F[Y.id]=Y,u(Y.scope,d,y,k,b,L,w)});h=F})}}}}],jo="ng-hide",Po="ng-hide-animate",Oo=["$animate",function(e){
return{restrict:"A",multiElement:!0,link:function(t,n,r){t.$watch(r.ngShow,function(t){e[t?"removeClass":"addClass"](n,jo,{tempClasses:Po})})}}}],Ho=["$animate",function(e){
return{restrict:"A",multiElement:!0,link:function(t,n,r){t.$watch(r.ngHide,function(t){e[t?"addClass":"removeClass"](n,jo,{tempClasses:Po})})}}}],Ro=sr(function(e,t,n){
e.$watch(n.ngStyle,function(e,n){n&&e!==n&&r(n,function(e,n){t.css(n,"")}),e&&t.css(e)},!0)}),Io=["$animate","$compile",function(e,t){return{require:"ngSwitch",
controller:["$scope",function(){this.cases={}}],link:function(n,i,a,o){var s=a.ngSwitch||a.on,u=[],l=[],c=[],d=[],f=function(e,t){return function(){e.splice(t,1);
}};n.$watch(s,function(n){var i,a;for(i=0,a=c.length;i<a;++i)e.cancel(c[i]);for(c.length=0,i=0,a=d.length;i<a;++i){var s=me(l[i].clone);d[i].$destroy();
var p=c[i]=e.leave(s);p.then(f(c,i))}l.length=0,d.length=0,(u=o.cases["!"+n]||o.cases["?"])&&r(u,function(n){n.transclude(function(r,i){d.push(i);var a=n.element;
r[r.length++]=t.$$createComment("end ngSwitchWhen");var o={clone:r};l.push(o),e.enter(r,a.parent(),a)})})})}}}],No=sr({transclude:"element",priority:1200,
require:"^ngSwitch",multiElement:!0,link:function(e,t,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({
transclude:i,element:t})}}),Uo=sr({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(e,t,n,r,i){r.cases["?"]=r.cases["?"]||[],
r.cases["?"].push({transclude:i,element:t})}}),Bo=t("ngTransclude"),Wo=sr({restrict:"EAC",link:function(e,t,n,r,i){function a(e){e.length&&(t.empty(),t.append(e));
}if(n.ngTransclude===n.$attr.ngTransclude&&(n.ngTransclude=""),!i)throw Bo("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",K(t));
var o=n.ngTransclude||n.ngTranscludeSlot;i(a,null,o)}}),zo=["$templateCache",function(e){return{restrict:"E",terminal:!0,compile:function(t,n){if("text/ng-template"==n.type){
var r=n.id,i=t[0].text;e.put(r,i)}}}}],qo={$setViewValue:p,$render:p},Vo=["$element","$scope",function(t,n){var r=this,i=new Ze;r.ngModelCtrl=qo,r.unknownOption=jr(e.document.createElement("option")),
r.renderUnknownOption=function(e){var n="? "+Ke(e)+" ?";r.unknownOption.val(n),t.prepend(r.unknownOption),t.val(n)},n.$on("$destroy",function(){r.renderUnknownOption=p;
}),r.removeUnknownOption=function(){r.unknownOption.parent()&&r.unknownOption.remove()},r.readValue=function(){return r.removeUnknownOption(),t.val()},
r.writeValue=function(e){r.hasOption(e)?(r.removeUnknownOption(),t.val(e),""===e&&r.emptyOption.prop("selected",!0)):null==e&&r.emptyOption?(r.removeUnknownOption(),
t.val("")):r.renderUnknownOption(e)},r.addOption=function(e,t){if(t[0].nodeType!==ai){fe(e,'"option value"'),""===e&&(r.emptyOption=t);var n=i.get(e)||0;
i.put(e,n+1),r.ngModelCtrl.$render(),kr(t)}},r.removeOption=function(e){var t=i.get(e);t&&(1===t?(i.remove(e),""===e&&(r.emptyOption=void 0)):i.put(e,t-1));
},r.hasOption=function(e){return!!i.get(e)},r.registerOption=function(e,t,n,i,a){if(i){var o;n.$observe("value",function(e){v(o)&&r.removeOption(o),o=e,
r.addOption(e,t)})}else a?e.$watch(a,function(e,i){n.$set("value",e),i!==e&&r.removeOption(i),r.addOption(e,t)}):r.addOption(n.value,t);t.on("$destroy",function(){
r.removeOption(n.value),r.ngModelCtrl.$render()})}}],Go=function(){function e(e,t,n,i){var a=i[1];if(a){var o=i[0];if(o.ngModelCtrl=a,t.on("change",function(){
e.$apply(function(){a.$setViewValue(o.readValue())})}),n.multiple){o.readValue=function(){var e=[];return r(t.find("option"),function(t){t.selected&&e.push(t.value);
}),e},o.writeValue=function(e){var n=new Ze(e);r(t.find("option"),function(e){e.selected=v(n.get(e.value))})};var s,u=NaN;e.$watch(function(){u!==a.$viewValue||N(s,a.$viewValue)||(s=I(a.$viewValue),
a.$render()),u=a.$viewValue}),a.$isEmpty=function(e){return!e||0===e.length}}}}function t(e,t,n,r){var i=r[1];if(i){var a=r[0];i.$render=function(){a.writeValue(i.$viewValue);
}}}return{restrict:"E",require:["select","?ngModel"],controller:Vo,priority:1,link:{pre:e,post:t}}},Jo=["$interpolate",function(e){return{restrict:"E",
priority:100,compile:function(t,n){if(v(n.value))var r=e(n.value,!0);else{var i=e(t.text(),!0);i||n.$set("value",t.text())}return function(e,t,n){var a="$selectController",o=t.parent(),s=o.data(a)||o.parent().data(a);
s&&s.registerOption(e,t,n,r,i)}}}}],Xo=h({restrict:"E",terminal:!1}),Ko=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){r&&(n.required=!0,
r.$validators.required=function(e,t){return!n.required||!r.$isEmpty(t)},n.$observe("required",function(){r.$validate()}))}}},Zo=function(){return{restrict:"A",
require:"?ngModel",link:function(e,n,r,i){if(i){var a,o=r.ngPattern||r.pattern;r.$observe("pattern",function(e){if(w(e)&&e.length>0&&(e=new RegExp("^"+e+"$")),
e&&!e.test)throw t("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",o,e,K(n));a=e||void 0,i.$validate()}),i.$validators.pattern=function(e,t){
return i.$isEmpty(t)||g(a)||a.test(t)}}}}},Qo=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){if(r){var i=-1;n.$observe("maxlength",function(e){
var t=d(e);i=isNaN(t)?-1:t,r.$validate()}),r.$validators.maxlength=function(e,t){return i<0||r.$isEmpty(t)||t.length<=i}}}}},es=function(){return{restrict:"A",
require:"?ngModel",link:function(e,t,n,r){if(r){var i=0;n.$observe("minlength",function(e){i=d(e)||0,r.$validate()}),r.$validators.minlength=function(e,t){
return r.$isEmpty(t)||t.length>=i}}}}};return e.angular.bootstrap?void e.console:(le(),ye(Wr),Wr.module("ngLocale",[],["$provide",function(e){function t(e){
e+="";var t=e.indexOf(".");return t==-1?0:e.length-t-1}function n(e,n){var r=n;void 0===r&&(r=Math.min(t(e),3));var i=Math.pow(10,r),a=(e*i|0)%i;return{
v:r,f:a}}var r={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};e.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],
SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],STANDALONEMONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",short:"M/d/yy h:mm a",
shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,
negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-Â¤",negSuf:"",posPre:"Â¤",posSuf:""}]},id:"en-us",localeID:"en_US",
pluralCat:function(e,t){var i=0|e,a=n(e,t);return 1==i&&0==a.v?r.ONE:r.OTHER}})}]),void jr(e.document).ready(function(){ie(e.document,ae)}))}(window),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
define("angular",["jquery"],function(e){return function(){var t;return t||e.angular}}(this)),define("misc/BrowserFeatures",["angular"],function(e){"use strict";
function t(e){return r.hasClass("lt-ie"+e)}function n(e){return r.hasClass("ie"+e)}var r,i,a,o,s,u;if(r=e.element("html"),i={}.toString,a=navigator.userAgent.toLowerCase(),
o=a.indexOf("trident")!==-1,s=/windows.+edge\//.test(a),u=!s&&a.indexOf("firefox")!==-1,o){r.addClass("ie");var l=/ rv:(\d+)/.exec(a);l&&l.length>=2?r.addClass("ie"+l[1]):a.indexOf("msie 10")&&(r.addClass("ie10"),
r.addClass("lt-ie11"))}u&&r.addClass("firefox"),s&&r.addClass("edge");var c=function(){var e="https:"===location.protocol?"wss":"ws";if("WebSocket"in window){
if("binaryType"in WebSocket.prototype)return!0;try{return!!new WebSocket(e+"://.").binaryType}catch(e){}}return!1}(),d={svgImg:document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),
svgAnimation:!!document.createElementNS&&/SVGAnimate/.test(i.call(document.createElementNS("http://www.w3.org/2000/svg","animate"))),IE7:n(7),IE8:n(8),
IE9:n(9),IE10:n(10),IE11:n(11),lessThanIE8:t(8),lessThanIE9:t(9),lessThanIE10:t(10),lessThanIE11:t(11),IE:r.hasClass("ie"),isEdge:s,hasFileAPI:!!(window.File&&window.FileList&&window.FileReader),
isMacOS:window.navigator.userAgent.toLowerCase().indexOf("intel mac os x"),hasBinaryWebSockets:c,doesntInsertStylesDynamically:!!document.createStyleSheet,
isFirefox:u};return d}),define("util/CSSRequire",["angular","misc/BrowserFeatures"],function(e,t){"use strict";var n="?"+e.element("#htmlParams").data("cacheBuster");
return function(r){var i,a,o;i=e.element("head"),a=i.find("link").filter(function(){return this.href.indexOf(r)!==-1}).length>0,a||(t.doesntInsertStylesDynamically?document.createStyleSheet(r):(o=e.element("<link/>"),
o.attr({rel:"stylesheet",type:"text/css",href:r+(n||"")}),o.appendTo(i)))}}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("moment",t):e.moment=t();
}(this,function(){"use strict";function e(){return Wr.apply(null,arguments)}function t(e){Wr=e}function n(e){return"[object Array]"===Object.prototype.toString.call(e);
}function r(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function i(e,t){var n,r=[];for(n=0;n<e.length;++n)r.push(t(e[n],n));
return r}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e,t){for(var n in t)a(t,n)&&(e[n]=t[n]);return a(t,"toString")&&(e.toString=t.toString),
a(t,"valueOf")&&(e.valueOf=t.valueOf),e}function s(e,t,n,r){return Se(e,t,n,r,!0).utc()}function u(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,
charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function l(e){return null==e._pf&&(e._pf=u()),e._pf}function c(e){
if(null==e._isValid){var t=l(e);e._isValid=!(isNaN(e._d.getTime())||!(t.overflow<0)||t.empty||t.invalidMonth||t.invalidWeekday||t.nullInput||t.invalidFormat||t.userInvalidated),
e._strict&&(e._isValid=e._isValid&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour)}return e._isValid}function d(e){var t=s(NaN);return null!=e?o(l(t),e):l(t).userInvalidated=!0,
t}function f(e){return void 0===e}function p(e,t){var n,r,i;if(f(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),f(t._i)||(e._i=t._i),f(t._f)||(e._f=t._f),
f(t._l)||(e._l=t._l),f(t._strict)||(e._strict=t._strict),f(t._tzm)||(e._tzm=t._tzm),f(t._isUTC)||(e._isUTC=t._isUTC),f(t._offset)||(e._offset=t._offset),
f(t._pf)||(e._pf=l(t)),f(t._locale)||(e._locale=t._locale),qr.length>0)for(n in qr)r=qr[n],i=t[r],f(i)||(e[r]=i);return e}function m(t){p(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),
Vr===!1&&(Vr=!0,e.updateOffset(this),Vr=!1)}function h(e){return e instanceof m||null!=e&&null!=e._isAMomentObject}function _(e){return e<0?Math.ceil(e):Math.floor(e);
}function g(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=_(t)),n}function v(e,t,n){var r,i=Math.min(e.length,t.length),a=Math.abs(e.length-t.length),o=0;
for(r=0;r<i;r++)(n&&e[r]!==t[r]||!n&&g(e[r])!==g(t[r]))&&o++;return o+a}function y(){}function b(e){return e?e.toLowerCase().replace("_","-"):e}function w(e){
for(var t,n,r,i,a=0;a<e.length;){for(i=b(e[a]).split("-"),t=i.length,n=b(e[a+1]),n=n?n.split("-"):null;t>0;){if(r=M(i.slice(0,t).join("-")))return r;if(n&&n.length>=t&&v(i,n,!0)>=t-1)break;
t--}a++}return null}function M(e){var t=null;if(!Gr[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=zr._abbr,require("./locale/"+e),D(t)}catch(e){}
return Gr[e]}function D(e,t){var n;return e&&(n=f(t)?L(e):$(e,t),n&&(zr=n)),zr._abbr}function $(e,t){return null!==t?(t.abbr=e,Gr[e]=Gr[e]||new y,Gr[e].set(t),
D(e),Gr[e]):(delete Gr[e],null)}function L(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return zr;if(!n(e)){if(t=M(e))return t;e=[e];
}return w(e)}function k(e,t){var n=e.toLowerCase();Jr[n]=Jr[n+"s"]=Jr[t]=e}function x(e){return"string"==typeof e?Jr[e]||Jr[e.toLowerCase()]:void 0}function T(e){
var t,n,r={};for(n in e)a(e,n)&&(t=x(n),t&&(r[t]=e[n]));return r}function S(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e);
}function Y(t,n){return function(r){return null!=r?(E(this,t,r),e.updateOffset(this,n),this):C(this,t)}}function C(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN;
}function E(e,t,n){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+t](n)}function A(e,t){var n;if("object"==typeof e)for(n in e)this.set(n,e[n]);else if(e=x(e),
S(this[e]))return this[e](t);return this}function F(e,t,n){var r=""+Math.abs(e),i=t-r.length,a=e>=0;return(a?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+r;
}function j(e,t,n,r){var i=r;"string"==typeof r&&(i=function(){return this[r]()}),e&&(Qr[e]=i),t&&(Qr[t[0]]=function(){return F(i.apply(this,arguments),t[1],t[2]);
}),n&&(Qr[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function P(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"");
}function O(e){var t,n,r=e.match(Xr);for(t=0,n=r.length;t<n;t++)Qr[r[t]]?r[t]=Qr[r[t]]:r[t]=P(r[t]);return function(i){var a="";for(t=0;t<n;t++)a+=r[t]instanceof Function?r[t].call(i,e):r[t];
return a}}function H(e,t){return e.isValid()?(t=R(t,e.localeData()),Zr[t]=Zr[t]||O(t),Zr[t](e)):e.localeData().invalidDate()}function R(e,t){function n(e){
return t.longDateFormat(e)||e}var r=5;for(Kr.lastIndex=0;r>=0&&Kr.test(e);)e=e.replace(Kr,n),Kr.lastIndex=0,r-=1;return e}function I(e,t,n){gi[e]=S(t)?t:function(e,r){
return e&&n?n:t}}function N(e,t){return a(gi,e)?gi[e](t._strict,t._locale):new RegExp(U(e))}function U(e){return B(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,r,i){
return t||n||r||i}))}function B(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function W(e,t){var n,r=t;for("string"==typeof e&&(e=[e]),"number"==typeof t&&(r=function(e,n){
n[t]=g(e)}),n=0;n<e.length;n++)vi[e[n]]=r}function z(e,t){W(e,function(e,n,r,i){r._w=r._w||{},t(e,r._w,r,i)})}function q(e,t,n){null!=t&&a(vi,e)&&vi[e](t,n._a,n,e);
}function V(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function G(e,t){return n(this._months)?this._months[e.month()]:this._months[Ti.test(t)?"format":"standalone"][e.month()];
}function J(e,t){return n(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Ti.test(t)?"format":"standalone"][e.month()]}function X(e,t,n){
var r,i,a;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(i=s([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),
this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(a="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),
this._monthsParse[r]=new RegExp(a.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r;if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r;
if(!n&&this._monthsParse[r].test(e))return r}}function K(e,t){var n;return e.isValid()?"string"==typeof t&&(t=e.localeData().monthsParse(t),"number"!=typeof t)?e:(n=Math.min(e.date(),V(e.year(),t)),
e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e):e}function Z(t){return null!=t?(K(this,t),e.updateOffset(this,!0),this):C(this,"Month")}function Q(){return V(this.year(),this.month());
}function ee(e){return this._monthsParseExact?(a(this,"_monthsRegex")||ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex;
}function te(e){return this._monthsParseExact?(a(this,"_monthsRegex")||ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex;
}function ne(){function e(e,t){return t.length-e.length}var t,n,r=[],i=[],a=[];for(t=0;t<12;t++)n=s([2e3,t]),r.push(this.monthsShort(n,"")),i.push(this.months(n,"")),
a.push(this.months(n,"")),a.push(this.monthsShort(n,""));for(r.sort(e),i.sort(e),a.sort(e),t=0;t<12;t++)r[t]=B(r[t]),i[t]=B(i[t]),a[t]=B(a[t]);this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),
this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")$","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")$","i");
}function re(e){var t,n=e._a;return n&&l(e).overflow===-2&&(t=n[bi]<0||n[bi]>11?bi:n[wi]<1||n[wi]>V(n[yi],n[bi])?wi:n[Mi]<0||n[Mi]>24||24===n[Mi]&&(0!==n[Di]||0!==n[$i]||0!==n[Li])?Mi:n[Di]<0||n[Di]>59?Di:n[$i]<0||n[$i]>59?$i:n[Li]<0||n[Li]>999?Li:-1,
l(e)._overflowDayOfYear&&(t<yi||t>wi)&&(t=wi),l(e)._overflowWeeks&&t===-1&&(t=ki),l(e)._overflowWeekday&&t===-1&&(t=xi),l(e).overflow=t),e}function ie(t){
e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn}function ae(e,t){var n=!0;return o(function(){return n&&(ie(e+"\nArguments: "+Array.prototype.slice.call(arguments).join(", ")+"\n"+(new Error).stack),
n=!1),t.apply(this,arguments)},t)}function oe(e,t){Ai[e]||(ie(t),Ai[e]=!0)}function se(e){var t,n,r,i,a,o,s=e._i,u=Fi.exec(s)||ji.exec(s);if(u){for(l(e).iso=!0,
t=0,n=Oi.length;t<n;t++)if(Oi[t][1].exec(u[1])){i=Oi[t][0],r=Oi[t][2]!==!1;break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=Hi.length;t<n;t++)if(Hi[t][1].exec(u[3])){
a=(u[2]||" ")+Hi[t][0];break}if(null==a)return void(e._isValid=!1)}if(!r&&null!=a)return void(e._isValid=!1);if(u[4]){if(!Pi.exec(u[4]))return void(e._isValid=!1);
o="Z"}e._f=i+(a||"")+(o||""),Me(e)}else e._isValid=!1}function ue(t){var n=Ri.exec(t._i);return null!==n?void(t._d=new Date(+n[1])):(se(t),void(t._isValid===!1&&(delete t._isValid,
e.createFromInputFallback(t))))}function le(e,t,n,r,i,a,o){var s=new Date(e,t,n,r,i,a,o);return e<100&&e>=0&&isFinite(s.getFullYear())&&s.setFullYear(e),
s}function ce(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function de(e){
return fe(e)?366:365}function fe(e){return e%4===0&&e%100!==0||e%400===0}function pe(){return fe(this.year())}function me(e,t,n){var r=7+t-n,i=(7+ce(e,0,r).getUTCDay()-t)%7;
return-i+r-1}function he(e,t,n,r,i){var a,o,s=(7+n-r)%7,u=me(e,r,i),l=1+7*(t-1)+s+u;return l<=0?(a=e-1,o=de(a)+l):l>de(e)?(a=e+1,o=l-de(e)):(a=e,o=l),{
year:a,dayOfYear:o}}function _e(e,t,n){var r,i,a=me(e.year(),t,n),o=Math.floor((e.dayOfYear()-a-1)/7)+1;return o<1?(i=e.year()-1,r=o+ge(i,t,n)):o>ge(e.year(),t,n)?(r=o-ge(e.year(),t,n),
i=e.year()+1):(i=e.year(),r=o),{week:r,year:i}}function ge(e,t,n){var r=me(e,t,n),i=me(e+1,t,n);return(de(e)-r+i)/7}function ve(e,t,n){return null!=e?e:null!=t?t:n;
}function ye(t){var n=new Date(e.now());return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()];
}function be(e){var t,n,r,i,a=[];if(!e._d){for(r=ye(e),e._w&&null==e._a[wi]&&null==e._a[bi]&&we(e),e._dayOfYear&&(i=ve(e._a[yi],r[yi]),e._dayOfYear>de(i)&&(l(e)._overflowDayOfYear=!0),
n=ce(i,0,e._dayOfYear),e._a[bi]=n.getUTCMonth(),e._a[wi]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=r[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];
24===e._a[Mi]&&0===e._a[Di]&&0===e._a[$i]&&0===e._a[Li]&&(e._nextDay=!0,e._a[Mi]=0),e._d=(e._useUTC?ce:le).apply(null,a),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),
e._nextDay&&(e._a[Mi]=24)}}function we(e){var t,n,r,i,a,o,s,u;t=e._w,null!=t.GG||null!=t.W||null!=t.E?(a=1,o=4,n=ve(t.GG,e._a[yi],_e(Ye(),1,4).year),r=ve(t.W,1),
i=ve(t.E,1),(i<1||i>7)&&(u=!0)):(a=e._locale._week.dow,o=e._locale._week.doy,n=ve(t.gg,e._a[yi],_e(Ye(),a,o).year),r=ve(t.w,1),null!=t.d?(i=t.d,(i<0||i>6)&&(u=!0)):null!=t.e?(i=t.e+a,
(t.e<0||t.e>6)&&(u=!0)):i=a),r<1||r>ge(n,a,o)?l(e)._overflowWeeks=!0:null!=u?l(e)._overflowWeekday=!0:(s=he(n,r,i,a,o),e._a[yi]=s.year,e._dayOfYear=s.dayOfYear);
}function Me(t){if(t._f===e.ISO_8601)return void se(t);t._a=[],l(t).empty=!0;var n,r,i,a,o,s=""+t._i,u=s.length,c=0;for(i=R(t._f,t._locale).match(Xr)||[],
n=0;n<i.length;n++)a=i[n],r=(s.match(N(a,t))||[])[0],r&&(o=s.substr(0,s.indexOf(r)),o.length>0&&l(t).unusedInput.push(o),s=s.slice(s.indexOf(r)+r.length),
c+=r.length),Qr[a]?(r?l(t).empty=!1:l(t).unusedTokens.push(a),q(a,r,t)):t._strict&&!r&&l(t).unusedTokens.push(a);l(t).charsLeftOver=u-c,s.length>0&&l(t).unusedInput.push(s),
l(t).bigHour===!0&&t._a[Mi]<=12&&t._a[Mi]>0&&(l(t).bigHour=void 0),t._a[Mi]=De(t._locale,t._a[Mi],t._meridiem),be(t),re(t)}function De(e,t,n){var r;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(r=e.isPM(n),
r&&t<12&&(t+=12),r||12!==t||(t=0),t):t}function $e(e){var t,n,r,i,a;if(0===e._f.length)return l(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)a=0,
t=p({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Me(t),c(t)&&(a+=l(t).charsLeftOver,a+=10*l(t).unusedTokens.length,l(t).score=a,(null==r||a<r)&&(r=a,
n=t));o(e,n||t)}function Le(e){if(!e._d){var t=T(e._i);e._a=i([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10);
}),be(e)}}function ke(e){var t=new m(re(xe(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function xe(e){var t=e._i,i=e._f;return e._locale=e._locale||L(e._l),
null===t||void 0===i&&""===t?d({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),h(t)?new m(re(t)):(n(i)?$e(e):i?Me(e):r(t)?e._d=t:Te(e),
c(e)||(e._d=null),e))}function Te(t){var a=t._i;void 0===a?t._d=new Date(e.now()):r(a)?t._d=new Date(+a):"string"==typeof a?ue(t):n(a)?(t._a=i(a.slice(0),function(e){
return parseInt(e,10)}),be(t)):"object"==typeof a?Le(t):"number"==typeof a?t._d=new Date(a):e.createFromInputFallback(t)}function Se(e,t,n,r,i){var a={};
return"boolean"==typeof n&&(r=n,n=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=r,ke(a)}function Ye(e,t,n,r){return Se(e,t,n,r,!1);
}function Ce(e,t){var r,i;if(1===t.length&&n(t[0])&&(t=t[0]),!t.length)return Ye();for(r=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](r)||(r=t[i]);return r;
}function Ee(){var e=[].slice.call(arguments,0);return Ce("isBefore",e)}function Ae(){var e=[].slice.call(arguments,0);return Ce("isAfter",e)}function Fe(e){
var t=T(e),n=t.year||0,r=t.quarter||0,i=t.month||0,a=t.week||0,o=t.day||0,s=t.hour||0,u=t.minute||0,l=t.second||0,c=t.millisecond||0;this._milliseconds=+c+1e3*l+6e4*u+36e5*s,
this._days=+o+7*a,this._months=+i+3*r+12*n,this._data={},this._locale=L(),this._bubble()}function je(e){return e instanceof Fe}function Pe(e,t){j(e,0,0,function(){
var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+F(~~(e/60),2)+t+F(~~e%60,2)})}function Oe(e,t){var n=(t||"").match(e)||[],r=n[n.length-1]||[],i=(r+"").match(Wi)||["-",0,0],a=+(60*i[1])+g(i[2]);
return"+"===i[0]?a:-a}function He(t,n){var i,a;return n._isUTC?(i=n.clone(),a=(h(t)||r(t)?+t:+Ye(t))-+i,i._d.setTime(+i._d+a),e.updateOffset(i,!1),i):Ye(t).local();
}function Re(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Ie(t,n){var r,i=this._offset||0;return this.isValid()?null!=t?("string"==typeof t?t=Oe(mi,t):Math.abs(t)<16&&(t=60*t),
!this._isUTC&&n&&(r=Re(this)),this._offset=t,this._isUTC=!0,null!=r&&this.add(r,"m"),i!==t&&(!n||this._changeInProgress?nt(this,Ke(t-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,
e.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?i:Re(this):null!=t?this:NaN}function Ne(e,t){return null!=e?("string"!=typeof e&&(e=-e),
this.utcOffset(e,t),this):-this.utcOffset()}function Ue(e){return this.utcOffset(0,e)}function Be(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,
e&&this.subtract(Re(this),"m")),this}function We(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(Oe(pi,this._i)),
this}function ze(e){return!!this.isValid()&&(e=e?Ye(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function qe(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset();
}function Ve(){if(!f(this._isDSTShifted))return this._isDSTShifted;var e={};if(p(e,this),e=xe(e),e._a){var t=e._isUTC?s(e._a):Ye(e._a);this._isDSTShifted=this.isValid()&&v(e._a,t.toArray())>0;
}else this._isDSTShifted=!1;return this._isDSTShifted}function Ge(){return!!this.isValid()&&!this._isUTC}function Je(){return!!this.isValid()&&this._isUTC;
}function Xe(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ke(e,t){var n,r,i,o=e,s=null;return je(e)?o={ms:e._milliseconds,d:e._days,
M:e._months}:"number"==typeof e?(o={},t?o[t]=e:o.milliseconds=e):(s=zi.exec(e))?(n="-"===s[1]?-1:1,o={y:0,d:g(s[wi])*n,h:g(s[Mi])*n,m:g(s[Di])*n,s:g(s[$i])*n,
ms:g(s[Li])*n}):(s=qi.exec(e))?(n="-"===s[1]?-1:1,o={y:Ze(s[2],n),M:Ze(s[3],n),d:Ze(s[4],n),h:Ze(s[5],n),m:Ze(s[6],n),s:Ze(s[7],n),w:Ze(s[8],n)}):null==o?o={}:"object"==typeof o&&("from"in o||"to"in o)&&(i=et(Ye(o.from),Ye(o.to)),
o={},o.ms=i.milliseconds,o.M=i.months),r=new Fe(o),je(e)&&a(e,"_locale")&&(r._locale=e._locale),r}function Ze(e,t){var n=e&&parseFloat(e.replace(",","."));
return(isNaN(n)?0:n)*t}function Qe(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,
n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function et(e,t){var n;return e.isValid()&&t.isValid()?(t=He(t,e),e.isBefore(t)?n=Qe(e,t):(n=Qe(t,e),n.milliseconds=-n.milliseconds,
n.months=-n.months),n):{milliseconds:0,months:0}}function tt(e,t){return function(n,r){var i,a;return null===r||isNaN(+r)||(oe(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period)."),
a=n,n=r,r=a),n="string"==typeof n?+n:n,i=Ke(n,r),nt(this,i,e),this}}function nt(t,n,r,i){var a=n._milliseconds,o=n._days,s=n._months;t.isValid()&&(i=null==i||i,
a&&t._d.setTime(+t._d+a*r),o&&E(t,"Date",C(t,"Date")+o*r),s&&K(t,C(t,"Month")+s*r),i&&e.updateOffset(t,o||s))}function rt(e,t){var n=e||Ye(),r=He(n,this).startOf("day"),i=this.diff(r,"days",!0),a=i<-6?"sameElse":i<-1?"lastWeek":i<0?"lastDay":i<1?"sameDay":i<2?"nextDay":i<7?"nextWeek":"sameElse",o=t&&(S(t[a])?t[a]():t[a]);
return this.format(o||this.localeData().calendar(a,this,Ye(n)))}function it(){return new m(this)}function at(e,t){var n=h(e)?e:Ye(e);return!(!this.isValid()||!n.isValid())&&(t=x(f(t)?"millisecond":t),
"millisecond"===t?+this>+n:+n<+this.clone().startOf(t))}function ot(e,t){var n=h(e)?e:Ye(e);return!(!this.isValid()||!n.isValid())&&(t=x(f(t)?"millisecond":t),
"millisecond"===t?+this<+n:+this.clone().endOf(t)<+n)}function st(e,t,n){return this.isAfter(e,n)&&this.isBefore(t,n)}function ut(e,t){var n,r=h(e)?e:Ye(e);
return!(!this.isValid()||!r.isValid())&&(t=x(t||"millisecond"),"millisecond"===t?+this===+r:(n=+r,+this.clone().startOf(t)<=n&&n<=+this.clone().endOf(t)));
}function lt(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function ct(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function dt(e,t,n){var r,i,a,o;
return this.isValid()?(r=He(e,this),r.isValid()?(i=6e4*(r.utcOffset()-this.utcOffset()),t=x(t),"year"===t||"month"===t||"quarter"===t?(o=ft(this,r),"quarter"===t?o/=3:"year"===t&&(o/=12)):(a=this-r,
o="second"===t?a/1e3:"minute"===t?a/6e4:"hour"===t?a/36e5:"day"===t?(a-i)/864e5:"week"===t?(a-i)/6048e5:a),n?o:_(o)):NaN):NaN}function ft(e,t){var n,r,i=12*(t.year()-e.year())+(t.month()-e.month()),a=e.clone().add(i,"months");
return t-a<0?(n=e.clone().add(i-1,"months"),r=(t-a)/(a-n)):(n=e.clone().add(i+1,"months"),r=(t-a)/(n-a)),-(i+r)}function pt(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}function mt(){var e=this.clone().utc();return 0<e.year()&&e.year()<=9999?S(Date.prototype.toISOString)?this.toDate().toISOString():H(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):H(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
}function ht(t){var n=H(this,t||e.defaultFormat);return this.localeData().postformat(n)}function _t(e,t){return this.isValid()&&(h(e)&&e.isValid()||Ye(e).isValid())?Ke({
to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function gt(e){return this.from(Ye(),e)}function vt(e,t){return this.isValid()&&(h(e)&&e.isValid()||Ye(e).isValid())?Ke({
from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function yt(e){return this.to(Ye(),e)}function bt(e){var t;return void 0===e?this._locale._abbr:(t=L(e),
null!=t&&(this._locale=t),this)}function wt(){return this._locale}function Mt(e){switch(e=x(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);
case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),
"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function Dt(e){return e=x(e),void 0===e||"millisecond"===e?this:this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms");
}function $t(){return+this._d-6e4*(this._offset||0)}function Lt(){return Math.floor(+this/1e3)}function kt(){return this._offset?new Date(+this):this._d;
}function xt(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function Tt(){var e=this;return{years:e.year(),
months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function St(){return this.isValid()?this.toISOString():"null";
}function Yt(){return c(this)}function Ct(){return o({},l(this))}function Et(){return l(this).overflow}function At(){return{input:this._i,format:this._f,
locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Ft(e,t){j(0,[e,e.length],0,t)}function jt(e){return Rt.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy);
}function Pt(e){return Rt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Ot(){return ge(this.year(),1,4)}function Ht(){var e=this.localeData()._week;
return ge(this.year(),e.dow,e.doy)}function Rt(e,t,n,r,i){var a;return null==e?_e(this,r,i).year:(a=ge(e,r,i),t>a&&(t=a),It.call(this,e,t,n,r,i))}function It(e,t,n,r,i){
var a=he(e,t,n,r,i),o=ce(a.year,0,a.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Nt(e){
return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function Ut(e){return _e(e,this._week.dow,this._week.doy).week}function Bt(){
return this._week.dow}function Wt(){return this._week.doy}function zt(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function qt(e){
var t=_e(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function Vt(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10);
}function Gt(e,t){return n(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]}function Jt(e){
return this._weekdaysShort[e.day()]}function Xt(e){return this._weekdaysMin[e.day()]}function Kt(e,t,n){var r,i,a;for(this._weekdaysParse||(this._weekdaysParse=[],
this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(i=Ye([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),
this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),
this._weekdaysParse[r]||(a="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[r]=new RegExp(a.replace(".",""),"i")),
n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r;if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r;if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r;
if(!n&&this._weekdaysParse[r].test(e))return r}}function Zt(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();
return null!=e?(e=Vt(e,this.localeData()),this.add(e-t,"d")):t}function Qt(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;
return null==e?t:this.add(e-t,"d")}function en(e){return this.isValid()?null==e?this.day()||7:this.day(this.day()%7?e:e-7):null!=e?this:NaN}function tn(e){
var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}function nn(){return this.hours()%12||12;
}function rn(e,t){j(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function an(e,t){return t._meridiemParse}function on(e){
return"p"===(e+"").toLowerCase().charAt(0)}function sn(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}function un(e,t){t[Li]=g(1e3*("0."+e))}function ln(){
return this._isUTC?"UTC":""}function cn(){return this._isUTC?"Coordinated Universal Time":""}function dn(e){return Ye(1e3*e)}function fn(){return Ye.apply(null,arguments).parseZone();
}function pn(e,t,n){var r=this._calendar[e];return S(r)?r.call(t,n):r}function mn(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];
return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function hn(){return this._invalidDate;
}function _n(e){return this._ordinal.replace("%d",e)}function gn(e){return e}function vn(e,t,n,r){var i=this._relativeTime[n];return S(i)?i(e,t,n,r):i.replace(/%d/i,e);
}function yn(e,t){var n=this._relativeTime[e>0?"future":"past"];return S(n)?n(t):n.replace(/%s/i,t)}function bn(e){var t,n;for(n in e)t=e[n],S(t)?this[n]=t:this["_"+n]=t;
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function wn(e,t,n,r){var i=L(),a=s().set(r,t);return i[n](a,e)}function Mn(e,t,n,r,i){
if("number"==typeof e&&(t=e,e=void 0),e=e||"",null!=t)return wn(e,t,n,i);var a,o=[];for(a=0;a<r;a++)o[a]=wn(e,a,n,i);return o}function Dn(e,t){return Mn(e,t,"months",12,"month");
}function $n(e,t){return Mn(e,t,"monthsShort",12,"month")}function Ln(e,t){return Mn(e,t,"weekdays",7,"day")}function kn(e,t){return Mn(e,t,"weekdaysShort",7,"day");
}function xn(e,t){return Mn(e,t,"weekdaysMin",7,"day")}function Tn(){var e=this._data;return this._milliseconds=_a(this._milliseconds),this._days=_a(this._days),
this._months=_a(this._months),e.milliseconds=_a(e.milliseconds),e.seconds=_a(e.seconds),e.minutes=_a(e.minutes),e.hours=_a(e.hours),e.months=_a(e.months),
e.years=_a(e.years),this}function Sn(e,t,n,r){var i=Ke(t,n);return e._milliseconds+=r*i._milliseconds,e._days+=r*i._days,e._months+=r*i._months,e._bubble();
}function Yn(e,t){return Sn(this,e,t,1)}function Cn(e,t){return Sn(this,e,t,-1)}function En(e){return e<0?Math.floor(e):Math.ceil(e)}function An(){var e,t,n,r,i,a=this._milliseconds,o=this._days,s=this._months,u=this._data;
return a>=0&&o>=0&&s>=0||a<=0&&o<=0&&s<=0||(a+=864e5*En(jn(s)+o),o=0,s=0),u.milliseconds=a%1e3,e=_(a/1e3),u.seconds=e%60,t=_(e/60),u.minutes=t%60,n=_(t/60),
u.hours=n%24,o+=_(n/24),i=_(Fn(o)),s+=i,o-=En(jn(i)),r=_(s/12),s%=12,u.days=o,u.months=s,u.years=r,this}function Fn(e){return 4800*e/146097}function jn(e){
return 146097*e/4800}function Pn(e){var t,n,r=this._milliseconds;if(e=x(e),"month"===e||"year"===e)return t=this._days+r/864e5,n=this._months+Fn(t),"month"===e?n:n/12;
switch(t=this._days+Math.round(jn(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return 24*t+r/36e5;case"minute":
return 1440*t+r/6e4;case"second":return 86400*t+r/1e3;case"millisecond":return Math.floor(864e5*t)+r;default:throw new Error("Unknown unit "+e)}}function On(){
return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*g(this._months/12)}function Hn(e){return function(){return this.as(e)}}function Rn(e){
return e=x(e),this[e+"s"]()}function In(e){return function(){return this._data[e]}}function Nn(){return _(this.days()/7)}function Un(e,t,n,r,i){return i.relativeTime(t||1,!!n,e,r);
}function Bn(e,t,n){var r=Ke(e).abs(),i=Ea(r.as("s")),a=Ea(r.as("m")),o=Ea(r.as("h")),s=Ea(r.as("d")),u=Ea(r.as("M")),l=Ea(r.as("y")),c=i<Aa.s&&["s",i]||a<=1&&["m"]||a<Aa.m&&["mm",a]||o<=1&&["h"]||o<Aa.h&&["hh",o]||s<=1&&["d"]||s<Aa.d&&["dd",s]||u<=1&&["M"]||u<Aa.M&&["MM",u]||l<=1&&["y"]||["yy",l];
return c[2]=t,c[3]=+e>0,c[4]=n,Un.apply(null,c)}function Wn(e,t){return void 0!==Aa[e]&&(void 0===t?Aa[e]:(Aa[e]=t,!0))}function zn(e){var t=this.localeData(),n=Bn(this,!e,t);
return e&&(n=t.pastFuture(+this,n)),t.postformat(n)}function qn(){var e,t,n,r=Fa(this._milliseconds)/1e3,i=Fa(this._days),a=Fa(this._months);e=_(r/60),
t=_(e/60),r%=60,e%=60,n=_(a/12),a%=12;var o=n,s=a,u=i,l=t,c=e,d=r,f=this.asSeconds();return f?(f<0?"-":"")+"P"+(o?o+"Y":"")+(s?s+"M":"")+(u?u+"D":"")+(l||c||d?"T":"")+(l?l+"H":"")+(c?c+"M":"")+(d?d+"S":""):"P0D";
}function Vn(e,t){var n=e.split("_");return t%10===1&&t%100!==11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2]}function Gn(e,t,n){var r={mm:t?"Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½":"Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½",
hh:t?"Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½":"Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½",dd:"Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½",MM:"Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž",yy:"Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž"};return"m"===n?t?"Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°":"Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ":"h"===n?t?"Ð³Ð°Ð´Ð·Ñ–Ð½Ð°":"Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ":e+" "+Vn(r[n],+e);
}function Jn(e,t,n){var r={mm:"munutenn",MM:"miz",dd:"devezh"};return e+" "+Zn(r[n],e)}function Xn(e){switch(Kn(e)){case 1:case 3:case 4:case 5:case 9:
return e+" bloaz";default:return e+" vloaz"}}function Kn(e){return e>9?Kn(e%10):e}function Zn(e,t){return 2===t?Qn(e):e}function Qn(e){var t={m:"v",b:"v",
d:"z"};return void 0===t[e.charAt(0)]?e:t[e.charAt(0)]+e.substring(1)}function er(e,t,n){var r=e+" ";switch(n){case"m":return t?"jedna minuta":"jedne minute";
case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";
case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina";
}}function tr(e){return e>1&&e<5&&1!==~~(e/10)}function nr(e,t,n,r){var i=e+" ";switch(n){case"s":return t||r?"pÃ¡r sekund":"pÃ¡r sekundami";case"m":return t?"minuta":r?"minutu":"minutou";
case"mm":return t||r?i+(tr(e)?"minuty":"minut"):i+"minutami";case"h":return t?"hodina":r?"hodinu":"hodinou";case"hh":return t||r?i+(tr(e)?"hodiny":"hodin"):i+"hodinami";
case"d":return t||r?"den":"dnem";case"dd":return t||r?i+(tr(e)?"dny":"dnÃ­"):i+"dny";case"M":return t||r?"mÄ›sÃ­c":"mÄ›sÃ­cem";case"MM":return t||r?i+(tr(e)?"mÄ›sÃ­ce":"mÄ›sÃ­cÅ¯"):i+"mÄ›sÃ­ci";
case"y":return t||r?"rok":"rokem";case"yy":return t||r?i+(tr(e)?"roky":"let"):i+"lety"}}function rr(e,t,n,r){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],
d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]
};return t?i[n][0]:i[n][1]}function ir(e,t,n,r){var i={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],
M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?i[n][0]:i[n][1]}function ar(e,t,n,r){
var i={s:["mÃµne sekundi","mÃµni sekund","paar sekundit"],m:["Ã¼he minuti","Ã¼ks minut"],mm:[e+" minuti",e+" minutit"],h:["Ã¼he tunni","tund aega","Ã¼ks tund"],
hh:[e+" tunni",e+" tundi"],d:["Ã¼he pÃ¤eva","Ã¼ks pÃ¤ev"],M:["kuu aja","kuu aega","Ã¼ks kuu"],MM:[e+" kuu",e+" kuud"],y:["Ã¼he aasta","aasta","Ã¼ks aasta"],yy:[e+" aasta",e+" aastat"]
};return t?i[n][2]?i[n][2]:i[n][1]:r?i[n][0]:i[n][1]}function or(e,t,n,r){var i="";switch(n){case"s":return r?"muutaman sekunnin":"muutama sekunti";case"m":
return r?"minuutin":"minuutti";case"mm":i=r?"minuutin":"minuuttia";break;case"h":return r?"tunnin":"tunti";case"hh":i=r?"tunnin":"tuntia";break;case"d":
return r?"pÃ¤ivÃ¤n":"pÃ¤ivÃ¤";case"dd":i=r?"pÃ¤ivÃ¤n":"pÃ¤ivÃ¤Ã¤";break;case"M":return r?"kuukauden":"kuukausi";case"MM":i=r?"kuukauden":"kuukautta";break;case"y":
return r?"vuoden":"vuosi";case"yy":i=r?"vuoden":"vuotta"}return i=sr(e,r)+" "+i}function sr(e,t){return e<10?t?ao[e]:io[e]:e}function ur(e,t,n){var r=e+" ";
switch(n){case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";
case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";
case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function lr(e,t,n,r){var i=e;switch(n){case"s":return r||t?"nÃ©hÃ¡ny mÃ¡sodperc":"nÃ©hÃ¡ny mÃ¡sodperce";
case"m":return"egy"+(r||t?" perc":" perce");case"mm":return i+(r||t?" perc":" perce");case"h":return"egy"+(r||t?" Ã³ra":" Ã³rÃ¡ja");case"hh":return i+(r||t?" Ã³ra":" Ã³rÃ¡ja");
case"d":return"egy"+(r||t?" nap":" napja");case"dd":return i+(r||t?" nap":" napja");case"M":return"egy"+(r||t?" hÃ³nap":" hÃ³napja");case"MM":return i+(r||t?" hÃ³nap":" hÃ³napja");
case"y":return"egy"+(r||t?" Ã©v":" Ã©ve");case"yy":return i+(r||t?" Ã©v":" Ã©ve")}return""}function cr(e){return(e?"":"[mÃºlt] ")+"["+_o[this.day()]+"] LT[-kor]";
}function dr(e){return e%100===11||e%10!==1}function fr(e,t,n,r){var i=e+" ";switch(n){case"s":return t||r?"nokkrar sekÃºndur":"nokkrum sekÃºndum";case"m":
return t?"mÃ­nÃºta":"mÃ­nÃºtu";case"mm":return dr(e)?i+(t||r?"mÃ­nÃºtur":"mÃ­nÃºtum"):t?i+"mÃ­nÃºta":i+"mÃ­nÃºtu";case"hh":return dr(e)?i+(t||r?"klukkustundir":"klukkustundum"):i+"klukkustund";
case"d":return t?"dagur":r?"dag":"degi";case"dd":return dr(e)?t?i+"dagar":i+(r?"daga":"dÃ¶gum"):t?i+"dagur":i+(r?"dag":"degi");case"M":return t?"mÃ¡nuÃ°ur":r?"mÃ¡nuÃ°":"mÃ¡nuÃ°i";
case"MM":return dr(e)?t?i+"mÃ¡nuÃ°ir":i+(r?"mÃ¡nuÃ°i":"mÃ¡nuÃ°um"):t?i+"mÃ¡nuÃ°ur":i+(r?"mÃ¡nuÃ°":"mÃ¡nuÃ°i");case"y":return t||r?"Ã¡r":"Ã¡ri";case"yy":return dr(e)?i+(t||r?"Ã¡r":"Ã¡rum"):i+(t||r?"Ã¡r":"Ã¡ri");
}}function pr(e,t,n,r){var i={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]
};return t?i[n][0]:i[n][1]}function mr(e){var t=e.substr(0,e.indexOf(" "));return _r(t)?"a "+e:"an "+e}function hr(e){var t=e.substr(0,e.indexOf(" "));return _r(t)?"viru "+e:"virun "+e;
}function _r(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var t=e%10,n=e/10;return _r(0===t?n:t)}if(e<1e4){
for(;e>=10;)e/=10;return _r(e)}return e/=1e3,_r(e)}function gr(e,t,n,r){return t?"kelios sekundÄ—s":r?"keliÅ³ sekundÅ¾iÅ³":"kelias sekundes"}function vr(e,t,n,r){
return t?br(n)[0]:r?br(n)[1]:br(n)[2]}function yr(e){return e%10===0||e>10&&e<20}function br(e){return vo[e].split("_")}function wr(e,t,n,r){var i=e+" ";
return 1===e?i+vr(e,t,n[0],r):t?i+(yr(e)?br(n)[1]:br(n)[0]):r?i+br(n)[1]:i+(yr(e)?br(n)[1]:br(n)[2])}function Mr(e,t,n){return n?t%10===1&&11!==t?e[2]:e[3]:t%10===1&&11!==t?e[0]:e[1];
}function Dr(e,t,n){return e+" "+Mr(yo[n],e,t)}function $r(e,t,n){return Mr(yo[n],e,t)}function Lr(e,t){return t?"daÅ¾as sekundes":"daÅ¾Äm sekundÄ“m"}function kr(e,t,n,r){
var i="";if(t)switch(n){case"s":i="à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";break;case"m":i="à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";break;case"mm":i="%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";break;case"h":i="à¤à¤• à¤¤à¤¾à¤¸";break;case"hh":i="%d à¤¤à¤¾à¤¸";
break;case"d":i="à¤à¤• à¤¦à¤¿à¤µà¤¸";break;case"dd":i="%d à¤¦à¤¿à¤µà¤¸";break;case"M":i="à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";break;case"MM":i="%d à¤®à¤¹à¤¿à¤¨à¥‡";break;case"y":i="à¤à¤• à¤µà¤°à¥à¤·";break;case"yy":i="%d à¤µà¤°à¥à¤·à¥‡";
}else switch(n){case"s":i="à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";break;case"m":i="à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";break;case"mm":i="%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";break;case"h":i="à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";break;case"hh":i="%d à¤¤à¤¾à¤¸à¤¾à¤‚";
break;case"d":i="à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";break;case"dd":i="%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";break;case"M":i="à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";break;case"MM":i="%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";break;case"y":i="à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";break;
case"yy":i="%d à¤µà¤°à¥à¤·à¤¾à¤‚"}return i.replace(/%d/i,e)}function xr(e){return e%10<5&&e%10>1&&~~(e/10)%10!==1}function Tr(e,t,n){var r=e+" ";switch(n){case"m":
return t?"minuta":"minutÄ™";case"mm":return r+(xr(e)?"minuty":"minut");case"h":return t?"godzina":"godzinÄ™";case"hh":return r+(xr(e)?"godziny":"godzin");
case"MM":return r+(xr(e)?"miesiÄ…ce":"miesiÄ™cy");case"yy":return r+(xr(e)?"lata":"lat")}}function Sr(e,t,n){var r={mm:"minute",hh:"ore",dd:"zile",MM:"luni",
yy:"ani"},i=" ";return(e%100>=20||e>=100&&e%100===0)&&(i=" de "),e+i+r[n]}function Yr(e,t){var n=e.split("_");return t%10===1&&t%100!==11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2];
}function Cr(e,t,n){var r={mm:t?"Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚":"Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",hh:"Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",dd:"Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",MM:"Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",yy:"Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
};return"m"===n?t?"Ð¼Ð¸Ð½ÑƒÑ‚Ð°":"Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ":e+" "+Yr(r[n],+e)}function Er(e){return e>1&&e<5}function Ar(e,t,n,r){var i=e+" ";switch(n){case"s":return t||r?"pÃ¡r sekÃºnd":"pÃ¡r sekundami";
case"m":return t?"minÃºta":r?"minÃºtu":"minÃºtou";case"mm":return t||r?i+(Er(e)?"minÃºty":"minÃºt"):i+"minÃºtami";case"h":return t?"hodina":r?"hodinu":"hodinou";
case"hh":return t||r?i+(Er(e)?"hodiny":"hodÃ­n"):i+"hodinami";case"d":return t||r?"deÅˆ":"dÅˆom";case"dd":return t||r?i+(Er(e)?"dni":"dnÃ­"):i+"dÅˆami";case"M":
return t||r?"mesiac":"mesiacom";case"MM":return t||r?i+(Er(e)?"mesiace":"mesiacov"):i+"mesiacmi";case"y":return t||r?"rok":"rokom";case"yy":return t||r?i+(Er(e)?"roky":"rokov"):i+"rokmi";
}}function Fr(e,t,n,r){var i=e+" ";switch(n){case"s":return t||r?"nekaj sekund":"nekaj sekundami";case"m":return t?"ena minuta":"eno minuto";case"mm":return i+=1===e?t?"minuta":"minuto":2===e?t||r?"minuti":"minutama":e<5?t||r?"minute":"minutami":t||r?"minut":"minutami";
case"h":return t?"ena ura":"eno uro";case"hh":return i+=1===e?t?"ura":"uro":2===e?t||r?"uri":"urama":e<5?t||r?"ure":"urami":t||r?"ur":"urami";case"d":return t||r?"en dan":"enim dnem";
case"dd":return i+=1===e?t||r?"dan":"dnem":2===e?t||r?"dni":"dnevoma":t||r?"dni":"dnevi";case"M":return t||r?"en mesec":"enim mesecem";case"MM":return i+=1===e?t||r?"mesec":"mesecem":2===e?t||r?"meseca":"mesecema":e<5?t||r?"mesece":"meseci":t||r?"mesecev":"meseci";
case"y":return t||r?"eno leto":"enim letom";case"yy":return i+=1===e?t||r?"leto":"letom":2===e?t||r?"leti":"letoma":e<5?t||r?"leta":"leti":t||r?"let":"leti";
}}function jr(e){var t=e;return t=e.indexOf("jaj")!==-1?t.slice(0,-3)+"leS":e.indexOf("jar")!==-1?t.slice(0,-3)+"waQ":e.indexOf("DIS")!==-1?t.slice(0,-3)+"nem":t+" pIq";
}function Pr(e){var t=e;return t=e.indexOf("jaj")!==-1?t.slice(0,-3)+"Huâ€™":e.indexOf("jar")!==-1?t.slice(0,-3)+"wen":e.indexOf("DIS")!==-1?t.slice(0,-3)+"ben":t+" ret";
}function Or(e,t,n,r){var i=Hr(e);switch(n){case"mm":return i+" tup";case"hh":return i+" rep";case"dd":return i+" jaj";case"MM":return i+" jar";case"yy":
return i+" DIS"}}function Hr(e){var t=Math.floor(e%1e3/100),n=Math.floor(e%100/10),r=e%10,i="";return t>0&&(i+=Ho[t]+"vatlh"),n>0&&(i+=(""!==i?" ":"")+Ho[n]+"maH"),
r>0&&(i+=(""!==i?" ":"")+Ho[r]),""===i?"pagh":i}function Rr(e,t,n,r){var i={s:["viensas secunds","'iensas secunds"],m:["'n mÃ­ut","'iens mÃ­ut"],mm:[e+" mÃ­uts",""+e+" mÃ­uts"],
h:["'n Ã¾ora","'iensa Ã¾ora"],hh:[e+" Ã¾oras",""+e+" Ã¾oras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",""+e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",""+e+" mesen"],
y:["'n ar","'iens ar"],yy:[e+" ars",""+e+" ars"]};return r?i[n][0]:t?i[n][0]:i[n][1]}function Ir(e,t){var n=e.split("_");return t%10===1&&t%100!==11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2];
}function Nr(e,t,n){var r={mm:t?"Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½":"Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",hh:t?"Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½":"Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",dd:"Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",MM:"Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",
yy:"Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"};return"m"===n?t?"Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°":"Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ":"h"===n?t?"Ð³Ð¾Ð´Ð¸Ð½Ð°":"Ð³Ð¾Ð´Ð¸Ð½Ñƒ":e+" "+Ir(r[n],+e)}function Ur(e,t){var n={nominative:"Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
accusative:"Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),genitive:"Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")
},r=/(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(t)?"accusative":/\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(t)?"genitive":"nominative";return n[r][e.day()]}function Br(e){
return function(){return e+"Ð¾"+(11===this.hours()?"Ð±":"")+"] LT"}}var Wr,zr,qr=e.momentProperties=[],Vr=!1,Gr={},Jr={},Xr=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kr=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Zr={},Qr={},ei=/\d/,ti=/\d\d/,ni=/\d{3}/,ri=/\d{4}/,ii=/[+-]?\d{6}/,ai=/\d\d?/,oi=/\d\d\d\d?/,si=/\d\d\d\d\d\d?/,ui=/\d{1,3}/,li=/\d{1,4}/,ci=/[+-]?\d{1,6}/,di=/\d+/,fi=/[+-]?\d+/,pi=/Z|[+-]\d\d:?\d\d/gi,mi=/Z|[+-]\d\d(?::?\d\d)?/gi,hi=/[+-]?\d+(\.\d{1,3})?/,_i=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,gi={},vi={},yi=0,bi=1,wi=2,Mi=3,Di=4,$i=5,Li=6,ki=7,xi=8;
j("M",["MM",2],"Mo",function(){return this.month()+1}),j("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),j("MMMM",0,0,function(e){
return this.localeData().months(this,e)}),k("month","M"),I("M",ai),I("MM",ai,ti),I("MMM",function(e,t){return t.monthsShortRegex(e)}),I("MMMM",function(e,t){
return t.monthsRegex(e)}),W(["M","MM"],function(e,t){t[bi]=g(e)-1}),W(["MMM","MMMM"],function(e,t,n,r){var i=n._locale.monthsParse(e,r,n._strict);null!=i?t[bi]=i:l(n).invalidMonth=e;
});var Ti=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,Si="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Yi="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ci=_i,Ei=_i,Ai={};
e.suppressDeprecationWarnings=!1;var Fi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ji=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,Pi=/Z|[+-]\d\d(?::?\d\d)?/,Oi=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Hi=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Ri=/^\/?Date\((\-?\d+)/i;
e.createFromInputFallback=ae("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(e){
e._d=new Date(e._i+(e._useUTC?" UTC":""))}),j("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),j(0,["YY",2],0,function(){return this.year()%100;
}),j(0,["YYYY",4],0,"year"),j(0,["YYYYY",5],0,"year"),j(0,["YYYYYY",6,!0],0,"year"),k("year","y"),I("Y",fi),I("YY",ai,ti),I("YYYY",li,ri),I("YYYYY",ci,ii),
I("YYYYYY",ci,ii),W(["YYYYY","YYYYYY"],yi),W("YYYY",function(t,n){n[yi]=2===t.length?e.parseTwoDigitYear(t):g(t)}),W("YY",function(t,n){n[yi]=e.parseTwoDigitYear(t);
}),W("Y",function(e,t){t[yi]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return g(e)+(g(e)>68?1900:2e3)};var Ii=Y("FullYear",!1);e.ISO_8601=function(){};
var Ni=ae("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(){var e=Ye.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:d();
}),Ui=ae("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(){var e=Ye.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:d();
}),Bi=function(){return Date.now?Date.now():+new Date};Pe("Z",":"),Pe("ZZ",""),I("Z",mi),I("ZZ",mi),W(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Oe(mi,e);
});var Wi=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var zi=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,qi=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
Ke.fn=Fe.prototype;var Vi=tt(1,"add"),Gi=tt(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";var Ji=ae("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){
return void 0===e?this.localeData():this.locale(e)});j(0,["gg",2],0,function(){return this.weekYear()%100}),j(0,["GG",2],0,function(){return this.isoWeekYear()%100;
}),Ft("gggg","weekYear"),Ft("ggggg","weekYear"),Ft("GGGG","isoWeekYear"),Ft("GGGGG","isoWeekYear"),k("weekYear","gg"),k("isoWeekYear","GG"),I("G",fi),I("g",fi),
I("GG",ai,ti),I("gg",ai,ti),I("GGGG",li,ri),I("gggg",li,ri),I("GGGGG",ci,ii),I("ggggg",ci,ii),z(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=g(e);
}),z(["gg","GG"],function(t,n,r,i){n[i]=e.parseTwoDigitYear(t)}),j("Q",0,"Qo","quarter"),k("quarter","Q"),I("Q",ei),W("Q",function(e,t){t[bi]=3*(g(e)-1);
}),j("w",["ww",2],"wo","week"),j("W",["WW",2],"Wo","isoWeek"),k("week","w"),k("isoWeek","W"),I("w",ai),I("ww",ai,ti),I("W",ai),I("WW",ai,ti),z(["w","ww","W","WW"],function(e,t,n,r){
t[r.substr(0,1)]=g(e)});var Xi={dow:0,doy:6};j("D",["DD",2],"Do","date"),k("date","D"),I("D",ai),I("DD",ai,ti),I("Do",function(e,t){return e?t._ordinalParse:t._ordinalParseLenient;
}),W(["D","DD"],wi),W("Do",function(e,t){t[wi]=g(e.match(ai)[0],10)});var Ki=Y("Date",!0);j("d",0,"do","day"),j("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e);
}),j("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),j("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),j("e",0,0,"weekday"),
j("E",0,0,"isoWeekday"),k("day","d"),k("weekday","e"),k("isoWeekday","E"),I("d",ai),I("e",ai),I("E",ai),I("dd",_i),I("ddd",_i),I("dddd",_i),z(["dd","ddd","dddd"],function(e,t,n,r){
var i=n._locale.weekdaysParse(e,r,n._strict);null!=i?t.d=i:l(n).invalidWeekday=e}),z(["d","e","E"],function(e,t,n,r){t[r]=g(e)});var Zi="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Qi="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ea="Su_Mo_Tu_We_Th_Fr_Sa".split("_");
j("DDD",["DDDD",3],"DDDo","dayOfYear"),k("dayOfYear","DDD"),I("DDD",ui),I("DDDD",ni),W(["DDD","DDDD"],function(e,t,n){n._dayOfYear=g(e)}),j("H",["HH",2],0,"hour"),
j("h",["hh",2],0,nn),j("hmm",0,0,function(){return""+nn.apply(this)+F(this.minutes(),2)}),j("hmmss",0,0,function(){return""+nn.apply(this)+F(this.minutes(),2)+F(this.seconds(),2);
}),j("Hmm",0,0,function(){return""+this.hours()+F(this.minutes(),2)}),j("Hmmss",0,0,function(){return""+this.hours()+F(this.minutes(),2)+F(this.seconds(),2);
}),rn("a",!0),rn("A",!1),k("hour","h"),I("a",an),I("A",an),I("H",ai),I("h",ai),I("HH",ai,ti),I("hh",ai,ti),I("hmm",oi),I("hmmss",si),I("Hmm",oi),I("Hmmss",si),
W(["H","HH"],Mi),W(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),W(["h","hh"],function(e,t,n){t[Mi]=g(e),l(n).bigHour=!0}),W("hmm",function(e,t,n){
var r=e.length-2;t[Mi]=g(e.substr(0,r)),t[Di]=g(e.substr(r)),l(n).bigHour=!0}),W("hmmss",function(e,t,n){var r=e.length-4,i=e.length-2;t[Mi]=g(e.substr(0,r)),
t[Di]=g(e.substr(r,2)),t[$i]=g(e.substr(i)),l(n).bigHour=!0}),W("Hmm",function(e,t,n){var r=e.length-2;t[Mi]=g(e.substr(0,r)),t[Di]=g(e.substr(r))}),W("Hmmss",function(e,t,n){
var r=e.length-4,i=e.length-2;t[Mi]=g(e.substr(0,r)),t[Di]=g(e.substr(r,2)),t[$i]=g(e.substr(i))});var ta=/[ap]\.?m?\.?/i,na=Y("Hours",!0);j("m",["mm",2],0,"minute"),
k("minute","m"),I("m",ai),I("mm",ai,ti),W(["m","mm"],Di);var ra=Y("Minutes",!1);j("s",["ss",2],0,"second"),k("second","s"),I("s",ai),I("ss",ai,ti),W(["s","ss"],$i);
var ia=Y("Seconds",!1);j("S",0,0,function(){return~~(this.millisecond()/100)}),j(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),j(0,["SSS",3],0,"millisecond"),
j(0,["SSSS",4],0,function(){return 10*this.millisecond()}),j(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),j(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond();
}),j(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),j(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),j(0,["SSSSSSSSS",9],0,function(){
return 1e6*this.millisecond()}),k("millisecond","ms"),I("S",ui,ei),I("SS",ui,ti),I("SSS",ui,ni);var aa;for(aa="SSSS";aa.length<=9;aa+="S")I(aa,di);for(aa="S";aa.length<=9;aa+="S")W(aa,un);
var oa=Y("Milliseconds",!1);j("z",0,0,"zoneAbbr"),j("zz",0,0,"zoneName");var sa=m.prototype;sa.add=Vi,sa.calendar=rt,sa.clone=it,sa.diff=dt,sa.endOf=Dt,
sa.format=ht,sa.from=_t,sa.fromNow=gt,sa.to=vt,sa.toNow=yt,sa.get=A,sa.invalidAt=Et,sa.isAfter=at,sa.isBefore=ot,sa.isBetween=st,sa.isSame=ut,sa.isSameOrAfter=lt,
sa.isSameOrBefore=ct,sa.isValid=Yt,sa.lang=Ji,sa.locale=bt,sa.localeData=wt,sa.max=Ui,sa.min=Ni,sa.parsingFlags=Ct,sa.set=A,sa.startOf=Mt,sa.subtract=Gi,
sa.toArray=xt,sa.toObject=Tt,sa.toDate=kt,sa.toISOString=mt,sa.toJSON=St,sa.toString=pt,sa.unix=Lt,sa.valueOf=$t,sa.creationData=At,sa.year=Ii,sa.isLeapYear=pe,
sa.weekYear=jt,sa.isoWeekYear=Pt,sa.quarter=sa.quarters=Nt,sa.month=Z,sa.daysInMonth=Q,sa.week=sa.weeks=zt,sa.isoWeek=sa.isoWeeks=qt,sa.weeksInYear=Ht,
sa.isoWeeksInYear=Ot,sa.date=Ki,sa.day=sa.days=Zt,sa.weekday=Qt,sa.isoWeekday=en,sa.dayOfYear=tn,sa.hour=sa.hours=na,sa.minute=sa.minutes=ra,sa.second=sa.seconds=ia,
sa.millisecond=sa.milliseconds=oa,sa.utcOffset=Ie,sa.utc=Ue,sa.local=Be,sa.parseZone=We,sa.hasAlignedHourOffset=ze,sa.isDST=qe,sa.isDSTShifted=Ve,sa.isLocal=Ge,
sa.isUtcOffset=Je,sa.isUtc=Xe,sa.isUTC=Xe,sa.zoneAbbr=ln,sa.zoneName=cn,sa.dates=ae("dates accessor is deprecated. Use date instead.",Ki),sa.months=ae("months accessor is deprecated. Use month instead",Z),
sa.years=ae("years accessor is deprecated. Use year instead",Ii),sa.zone=ae("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",Ne);
var ua=sa,la={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"
},ca={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},da="Invalid date",fa="%d",pa=/\d{1,2}/,ma={
future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",
y:"a year",yy:"%d years"},ha=y.prototype;ha._calendar=la,ha.calendar=pn,ha._longDateFormat=ca,ha.longDateFormat=mn,ha._invalidDate=da,ha.invalidDate=hn,
ha._ordinal=fa,ha.ordinal=_n,ha._ordinalParse=pa,ha.preparse=gn,ha.postformat=gn,ha._relativeTime=ma,ha.relativeTime=vn,ha.pastFuture=yn,ha.set=bn,ha.months=G,
ha._months=Si,ha.monthsShort=J,ha._monthsShort=Yi,ha.monthsParse=X,ha._monthsRegex=Ei,ha.monthsRegex=te,ha._monthsShortRegex=Ci,ha.monthsShortRegex=ee,
ha.week=Ut,ha._week=Xi,ha.firstDayOfYear=Wt,ha.firstDayOfWeek=Bt,ha.weekdays=Gt,ha._weekdays=Zi,ha.weekdaysMin=Xt,ha._weekdaysMin=ea,ha.weekdaysShort=Jt,
ha._weekdaysShort=Qi,ha.weekdaysParse=Kt,ha.isPM=on,ha._meridiemParse=ta,ha.meridiem=sn,D("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){
var t=e%10,n=1===g(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),e.lang=ae("moment.lang is deprecated. Use moment.locale instead.",D),
e.langData=ae("moment.langData is deprecated. Use moment.localeData instead.",L);var _a=Math.abs,ga=Hn("ms"),va=Hn("s"),ya=Hn("m"),ba=Hn("h"),wa=Hn("d"),Ma=Hn("w"),Da=Hn("M"),$a=Hn("y"),La=In("milliseconds"),ka=In("seconds"),xa=In("minutes"),Ta=In("hours"),Sa=In("days"),Ya=In("months"),Ca=In("years"),Ea=Math.round,Aa={
s:45,m:45,h:22,d:26,M:11},Fa=Math.abs,ja=Fe.prototype;ja.abs=Tn,ja.add=Yn,ja.subtract=Cn,ja.as=Pn,ja.asMilliseconds=ga,ja.asSeconds=va,ja.asMinutes=ya,
ja.asHours=ba,ja.asDays=wa,ja.asWeeks=Ma,ja.asMonths=Da,ja.asYears=$a,ja.valueOf=On,ja._bubble=An,ja.get=Rn,ja.milliseconds=La,ja.seconds=ka,ja.minutes=xa,
ja.hours=Ta,ja.days=Sa,ja.weeks=Nn,ja.months=Ya,ja.years=Ca,ja.humanize=zn,ja.toISOString=qn,ja.toString=qn,ja.toJSON=qn,ja.locale=bt,ja.localeData=wt,
ja.toIsoString=ae("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",qn),ja.lang=Ji,j("X",0,0,"unix"),j("x",0,0,"valueOf"),
I("x",fi),I("X",hi),W("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),W("x",function(e,t,n){n._d=new Date(g(e))}),e.version="2.11.2",t(Ye),e.fn=ua,
e.min=Ee,e.max=Ae,e.now=Bi,e.utc=s,e.unix=dn,e.months=Dn,e.isDate=r,e.locale=D,e.invalid=d,e.duration=Ke,e.isMoment=h,e.weekdays=Ln,e.parseZone=fn,e.localeData=L,
e.isDuration=je,e.monthsShort=$n,e.weekdaysMin=xn,e.defineLocale=$,e.weekdaysShort=kn,e.normalizeUnits=x,e.relativeTimeThreshold=Wn,e.prototype=ua;var Pa=e,Oa=(Pa.defineLocale("af",{
months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"vm":"VM":n?"nm":"NM"},longDateFormat:{LT:"HH:mm",
LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[MÃ´re om] LT",
nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",
m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,
ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),Pa.defineLocale("ar-ma",{months:"ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
monthsShort:"ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),weekdays:"Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
weekdaysShort:"Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),weekdaysMin:"Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextDay:"[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextWeek:"dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
lastDay:"[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastWeek:"dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",sameElse:"L"},relativeTime:{future:"ÙÙŠ %s",past:"Ù…Ù†Ø° %s",s:"Ø«ÙˆØ§Ù†",m:"Ø¯Ù‚ÙŠÙ‚Ø©",mm:"%d Ø¯Ù‚Ø§Ø¦Ù‚",
h:"Ø³Ø§Ø¹Ø©",hh:"%d Ø³Ø§Ø¹Ø§Øª",d:"ÙŠÙˆÙ…",dd:"%d Ø£ÙŠØ§Ù…",M:"Ø´Ù‡Ø±",MM:"%d Ø£Ø´Ù‡Ø±",y:"Ø³Ù†Ø©",yy:"%d Ø³Ù†ÙˆØ§Øª"},week:{dow:6,doy:12}}),{1:"Ù¡",2:"Ù¢",3:"Ù£",4:"Ù¤",5:"Ù¥",6:"Ù¦",7:"Ù§",
8:"Ù¨",9:"Ù©",0:"Ù "}),Ha={"Ù¡":"1","Ù¢":"2","Ù£":"3","Ù¤":"4","Ù¥":"5","Ù¦":"6","Ù§":"7","Ù¨":"8","Ù©":"9","Ù ":"0"},Ra=(Pa.defineLocale("ar-sa",{months:"ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
monthsShort:"ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),weekdays:"Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
weekdaysShort:"Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),weekdaysMin:"Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/Øµ|Ù…/,isPM:function(e){return"Ù…"===e},meridiem:function(e,t,n){return e<12?"Øµ":"Ù…";
},calendar:{sameDay:"[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextDay:"[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextWeek:"dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastDay:"[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastWeek:"dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
sameElse:"L"},relativeTime:{future:"ÙÙŠ %s",past:"Ù…Ù†Ø° %s",s:"Ø«ÙˆØ§Ù†",m:"Ø¯Ù‚ÙŠÙ‚Ø©",mm:"%d Ø¯Ù‚Ø§Ø¦Ù‚",h:"Ø³Ø§Ø¹Ø©",hh:"%d Ø³Ø§Ø¹Ø§Øª",d:"ÙŠÙˆÙ…",dd:"%d Ø£ÙŠØ§Ù…",M:"Ø´Ù‡Ø±",MM:"%d Ø£Ø´Ù‡Ø±",
y:"Ø³Ù†Ø©",yy:"%d Ø³Ù†ÙˆØ§Øª"},preparse:function(e){return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g,function(e){return Ha[e]}).replace(/ØŒ/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){
return Oa[e]}).replace(/,/g,"ØŒ")},week:{dow:6,doy:12}}),Pa.defineLocale("ar-tn",{months:"Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
monthsShort:"Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),weekdays:"Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
weekdaysShort:"Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),weekdaysMin:"Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextDay:"[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextWeek:"dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
lastDay:"[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastWeek:"dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",sameElse:"L"},relativeTime:{future:"ÙÙŠ %s",past:"Ù…Ù†Ø° %s",s:"Ø«ÙˆØ§Ù†",m:"Ø¯Ù‚ÙŠÙ‚Ø©",mm:"%d Ø¯Ù‚Ø§Ø¦Ù‚",
h:"Ø³Ø§Ø¹Ø©",hh:"%d Ø³Ø§Ø¹Ø§Øª",d:"ÙŠÙˆÙ…",dd:"%d Ø£ÙŠØ§Ù…",M:"Ø´Ù‡Ø±",MM:"%d Ø£Ø´Ù‡Ø±",y:"Ø³Ù†Ø©",yy:"%d Ø³Ù†ÙˆØ§Øª"},week:{dow:1,doy:4}}),{1:"Ù¡",2:"Ù¢",3:"Ù£",4:"Ù¤",5:"Ù¥",6:"Ù¦",7:"Ù§",
8:"Ù¨",9:"Ù©",0:"Ù "}),Ia={"Ù¡":"1","Ù¢":"2","Ù£":"3","Ù¤":"4","Ù¥":"5","Ù¦":"6","Ù§":"7","Ù¨":"8","Ù©":"9","Ù ":"0"},Na=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5;
},Ua={s:["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©","Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©",["Ø«Ø§Ù†ÙŠØªØ§Ù†","Ø«Ø§Ù†ÙŠØªÙŠÙ†"],"%d Ø«ÙˆØ§Ù†","%d Ø«Ø§Ù†ÙŠØ©","%d Ø«Ø§Ù†ÙŠØ©"],m:["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©","Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©",["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†","Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"],"%d Ø¯Ù‚Ø§Ø¦Ù‚","%d Ø¯Ù‚ÙŠÙ‚Ø©","%d Ø¯Ù‚ÙŠÙ‚Ø©"],
h:["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©","Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©",["Ø³Ø§Ø¹ØªØ§Ù†","Ø³Ø§Ø¹ØªÙŠÙ†"],"%d Ø³Ø§Ø¹Ø§Øª","%d Ø³Ø§Ø¹Ø©","%d Ø³Ø§Ø¹Ø©"],d:["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…","ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯",["ÙŠÙˆÙ…Ø§Ù†","ÙŠÙˆÙ…ÙŠÙ†"],"%d Ø£ÙŠØ§Ù…","%d ÙŠÙˆÙ…Ù‹Ø§","%d ÙŠÙˆÙ…"],
M:["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±","Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯",["Ø´Ù‡Ø±Ø§Ù†","Ø´Ù‡Ø±ÙŠÙ†"],"%d Ø£Ø´Ù‡Ø±","%d Ø´Ù‡Ø±Ø§","%d Ø´Ù‡Ø±"],y:["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…","Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯",["Ø¹Ø§Ù…Ø§Ù†","Ø¹Ø§Ù…ÙŠÙ†"],"%d Ø£Ø¹ÙˆØ§Ù…","%d Ø¹Ø§Ù…Ù‹Ø§","%d Ø¹Ø§Ù…"]
},Ba=function(e){return function(t,n,r,i){var a=Na(t),o=Ua[e][Na(t)];return 2===a&&(o=o[n?0:1]),o.replace(/%d/i,t)}},Wa=["ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ ÙŠÙ†Ø§ÙŠØ±","Ø´Ø¨Ø§Ø· ÙØ¨Ø±Ø§ÙŠØ±","Ø¢Ø°Ø§Ø± Ù…Ø§Ø±Ø³","Ù†ÙŠØ³Ø§Ù† Ø£Ø¨Ø±ÙŠÙ„","Ø£ÙŠØ§Ø± Ù…Ø§ÙŠÙˆ","Ø­Ø²ÙŠØ±Ø§Ù† ÙŠÙˆÙ†ÙŠÙˆ","ØªÙ…ÙˆØ² ÙŠÙˆÙ„ÙŠÙˆ","Ø¢Ø¨ Ø£ØºØ³Ø·Ø³","Ø£ÙŠÙ„ÙˆÙ„ Ø³Ø¨ØªÙ…Ø¨Ø±","ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„ Ø£ÙƒØªÙˆØ¨Ø±","ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ Ù†ÙˆÙÙ…Ø¨Ø±","ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„ Ø¯ÙŠØ³Ù…Ø¨Ø±"],za=(Pa.defineLocale("ar",{
months:Wa,monthsShort:Wa,weekdays:"Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),weekdaysShort:"Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
weekdaysMin:"Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/â€M/â€YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"
},meridiemParse:/Øµ|Ù…/,isPM:function(e){return"Ù…"===e},meridiem:function(e,t,n){return e<12?"Øµ":"Ù…"},calendar:{sameDay:"[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",nextDay:"[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
nextWeek:"dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastDay:"[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",lastWeek:"dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",sameElse:"L"},relativeTime:{future:"Ø¨Ø¹Ø¯ %s",past:"Ù…Ù†Ø° %s",
s:Ba("s"),m:Ba("m"),mm:Ba("m"),h:Ba("h"),hh:Ba("h"),d:Ba("d"),dd:Ba("d"),M:Ba("M"),MM:Ba("M"),y:Ba("y"),yy:Ba("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g,function(e){
return Ia[e]}).replace(/ØŒ/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Ra[e]}).replace(/,/g,"ØŒ")},week:{dow:6,doy:12}}),{1:"-inci",
5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-Ã¼ncÃ¼",4:"-Ã¼ncÃ¼",100:"-Ã¼ncÃ¼",6:"-ncÄ±",9:"-uncu",10:"-uncu",30:"-uncu",
60:"-Ä±ncÄ±",90:"-Ä±ncÄ±"}),qa=(Pa.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
weekdays:"Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),weekdaysShort:"Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),weekdaysMin:"Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugÃ¼n saat] LT",
nextDay:"[sabah saat] LT",nextWeek:"[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",lastDay:"[dÃ¼nÉ™n] LT",lastWeek:"[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",sameElse:"L"},relativeTime:{
future:"%s sonra",past:"%s É™vvÉ™l",s:"birneÃ§É™ saniyyÉ™",m:"bir dÉ™qiqÉ™",mm:"%d dÉ™qiqÉ™",h:"bir saat",hh:"%d saat",d:"bir gÃ¼n",dd:"%d gÃ¼n",M:"bir ay",MM:"%d ay",
y:"bir il",yy:"%d il"},meridiemParse:/gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,isPM:function(e){return/^(gÃ¼ndÃ¼z|axÅŸam)$/.test(e)},meridiem:function(e,t,n){return e<4?"gecÉ™":e<12?"sÉ™hÉ™r":e<17?"gÃ¼ndÃ¼z":"axÅŸam";
},ordinalParse:/\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,ordinal:function(e){if(0===e)return e+"-Ä±ncÄ±";var t=e%10,n=e%100-t,r=e>=100?100:null;return e+(za[t]||za[n]||za[r]);
},week:{dow:1,doy:7}}),Pa.defineLocale("be",{months:{format:"ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ".split("_"),
standalone:"ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ".split("_")},monthsShort:"ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶".split("_"),
weekdays:{format:"Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),standalone:"Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
isFormat:/\[ ?[Ð’Ð²] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/},weekdaysShort:"Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),weekdaysMin:"Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),longDateFormat:{
LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY Ð³.",LLL:"D MMMM YYYY Ð³., HH:mm",LLLL:"dddd, D MMMM YYYY Ð³., HH:mm"},calendar:{sameDay:"[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT",
nextDay:"[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT",lastDay:"[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT",nextWeek:function(){return"[Ð£] dddd [Ñž] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:
case 6:return"[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT";case 1:case 2:case 4:return"[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT"}},sameElse:"L"},relativeTime:{future:"Ð¿Ñ€Ð°Ð· %s",past:"%s Ñ‚Ð°Ð¼Ñƒ",
s:"Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´",m:Gn,mm:Gn,h:Gn,hh:Gn,d:"Ð´Ð·ÐµÐ½ÑŒ",dd:Gn,M:"Ð¼ÐµÑÑÑ†",MM:Gn,y:"Ð³Ð¾Ð´",yy:Gn},meridiemParse:/Ð½Ð¾Ñ‡Ñ‹|Ñ€Ð°Ð½Ñ–Ñ†Ñ‹|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°/,isPM:function(e){return/^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°)$/.test(e);
},meridiem:function(e,t,n){return e<4?"Ð½Ð¾Ñ‡Ñ‹":e<12?"Ñ€Ð°Ð½Ñ–Ñ†Ñ‹":e<17?"Ð´Ð½Ñ":"Ð²ÐµÑ‡Ð°Ñ€Ð°"},ordinalParse:/\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,ordinal:function(e,t){switch(t){case"M":
case"d":case"DDD":case"w":case"W":return e%10!==2&&e%10!==3||e%100===12||e%100===13?e+"-Ñ‹":e+"-Ñ–";case"D":return e+"-Ð³Ð°";default:return e}},week:{dow:1,
doy:7}}),Pa.defineLocale("bg",{months:"ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),monthsShort:"ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
weekdays:"Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),weekdaysShort:"Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),weekdaysMin:"Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Ð”Ð½ÐµÑ Ð²] LT",
nextDay:"[Ð£Ñ‚Ñ€Ðµ Ð²] LT",nextWeek:"dddd [Ð²] LT",lastDay:"[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
case 1:case 2:case 4:case 5:return"[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"}},sameElse:"L"},relativeTime:{future:"ÑÐ»ÐµÐ´ %s",past:"Ð¿Ñ€ÐµÐ´Ð¸ %s",s:"Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",m:"Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
mm:"%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",h:"Ñ‡Ð°Ñ",hh:"%d Ñ‡Ð°ÑÐ°",d:"Ð´ÐµÐ½",dd:"%d Ð´Ð½Ð¸",M:"Ð¼ÐµÑÐµÑ†",MM:"%d Ð¼ÐµÑÐµÑ†Ð°",y:"Ð³Ð¾Ð´Ð¸Ð½Ð°",yy:"%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"},ordinalParse:/\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ÐµÐ²":0===n?e+"-ÐµÐ½":n>10&&n<20?e+"-Ñ‚Ð¸":1===t?e+"-Ð²Ð¸":2===t?e+"-Ñ€Ð¸":7===t||8===t?e+"-Ð¼Ð¸":e+"-Ñ‚Ð¸"},
week:{dow:1,doy:7}}),{1:"à§§",2:"à§¨",3:"à§©",4:"à§ª",5:"à§«",6:"à§¬",7:"à§­",8:"à§®",9:"à§¯",0:"à§¦"}),Va={"à§§":"1","à§¨":"2","à§©":"3","à§ª":"4","à§«":"5","à§¬":"6","à§­":"7","à§®":"8",
"à§¯":"9","à§¦":"0"},Ga=(Pa.defineLocale("bn",{months:"à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à§€_à¦«à§‡à¦¬à§à§Ÿà¦¾à¦°à§€_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦…à¦—à¦¾à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),monthsShort:"à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà¦°_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²_à¦…à¦—_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­_à¦¡à¦¿à¦¸à§‡à¦®à§".split("_"),
weekdays:"à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à§à¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),weekdaysShort:"à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à§à¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),weekdaysMin:"à¦°à¦¬_à¦¸à¦®_à¦®à¦™à§à¦—_à¦¬à§_à¦¬à§à¦°à¦¿à¦¹_à¦¶à§_à¦¶à¦¨à¦¿".split("_"),
longDateFormat:{LT:"A h:mm à¦¸à¦®à§Ÿ",LTS:"A h:mm:ss à¦¸à¦®à§Ÿ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",LLLL:"dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"},
calendar:{sameDay:"[à¦†à¦œ] LT",nextDay:"[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",nextWeek:"dddd, LT",lastDay:"[à¦—à¦¤à¦•à¦¾à¦²] LT",lastWeek:"[à¦—à¦¤] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à¦ªà¦°à§‡",
past:"%s à¦†à¦—à§‡",s:"à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",m:"à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",mm:"%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",h:"à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",hh:"%d à¦˜à¦¨à§à¦Ÿà¦¾",d:"à¦à¦• à¦¦à¦¿à¦¨",dd:"%d à¦¦à¦¿à¦¨",M:"à¦à¦• à¦®à¦¾à¦¸",MM:"%d à¦®à¦¾à¦¸",y:"à¦à¦• à¦¬à¦›à¦°",yy:"%d à¦¬à¦›à¦°"
},preparse:function(e){return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g,function(e){return Va[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return qa[e];
})},meridiemParse:/à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/,isPM:function(e){return/^(à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤)$/.test(e)},meridiem:function(e,t,n){return e<4?"à¦°à¦¾à¦¤":e<10?"à¦¸à¦•à¦¾à¦²":e<17?"à¦¦à§à¦ªà§à¦°":e<20?"à¦¬à¦¿à¦•à¦¾à¦²":"à¦°à¦¾à¦¤";
},week:{dow:0,doy:6}}),{1:"à¼¡",2:"à¼¢",3:"à¼£",4:"à¼¤",5:"à¼¥",6:"à¼¦",7:"à¼§",8:"à¼¨",9:"à¼©",0:"à¼ "}),Ja={"à¼¡":"1","à¼¢":"2","à¼£":"3","à¼¤":"4","à¼¥":"5","à¼¦":"6","à¼§":"7","à¼¨":"8",
"à¼©":"9","à¼ ":"0"},Xa=(Pa.defineLocale("bo",{months:"à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
monthsShort:"à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
weekdays:"à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),weekdaysShort:"à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
weekdaysMin:"à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",
LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[à½‘à½²à¼‹à½¢à½²à½„] LT",nextDay:"[à½¦à½„à¼‹à½‰à½²à½“] LT",nextWeek:"[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT",lastDay:"[à½à¼‹à½¦à½„] LT",
lastWeek:"[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à½£à¼‹",past:"%s à½¦à¾”à½“à¼‹à½£",s:"à½£à½˜à¼‹à½¦à½„",m:"à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚",mm:"%d à½¦à¾à½¢à¼‹à½˜",h:"à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚",
hh:"%d à½†à½´à¼‹à½šà½¼à½‘",d:"à½‰à½²à½“à¼‹à½‚à½…à½²à½‚",dd:"%d à½‰à½²à½“à¼‹",M:"à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚",MM:"%d à½Ÿà¾³à¼‹à½–",y:"à½£à½¼à¼‹à½‚à½…à½²à½‚",yy:"%d à½£à½¼"},preparse:function(e){return e.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g,function(e){
return Ja[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Ga[e]})},meridiemParse:/à½˜à½šà½“à¼‹à½˜à½¼|à½žà½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/,isPM:function(e){
return/^(à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼)$/.test(e)},meridiem:function(e,t,n){return e<4?"à½˜à½šà½“à¼‹à½˜à½¼":e<10?"à½žà½¼à½‚à½¦à¼‹à½€à½¦":e<17?"à½‰à½²à½“à¼‹à½‚à½´à½„":e<20?"à½‘à½‚à½¼à½„à¼‹à½‘à½‚":"à½˜à½šà½“à¼‹à½˜à½¼"},week:{dow:0,
doy:6}}),Pa.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"
},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"
},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoÃ¹",m:"ur vunutenn",mm:Jn,h:"un eur",hh:"%d eur",d:"un devezh",dd:Jn,M:"ur miz",
MM:Jn,y:"ur bloaz",yy:Xn},ordinalParse:/\d{1,2}(aÃ±|vet)/,ordinal:function(e){var t=1===e?"aÃ±":"vet";return e+t},week:{dow:1,doy:4}}),Pa.defineLocale("bs",{
months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
weekdays:"nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._Äet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_Äe_pe_su".split("_"),
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",
nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juÄer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[proÅ¡lu] dddd [u] LT";
case 6:return"[proÅ¡le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[proÅ¡li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",
s:"par sekundi",m:er,mm:er,h:er,hh:er,d:"dan",dd:er,M:"mjesec",MM:er,y:"godinu",yy:er},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),Pa.defineLocale("ca",{
months:"gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){
return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demÃ  a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT";
},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT";
},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",
M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|Ã¨|a)/,ordinal:function(e,t){var n=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"Ã¨";
return"w"!==t&&"W"!==t||(n="a"),e+n},week:{dow:1,doy:4}}),"leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_")),Ka="led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),Za=(Pa.defineLocale("cs",{
months:Xa,monthsShort:Ka,monthsParse:function(e,t){var n,r=[];for(n=0;n<12;n++)r[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return r}(Xa,Ka),shortMonthsParse:function(e){
var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(Ka),longMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");
return n}(Xa),weekdays:"nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),weekdaysShort:"ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),weekdaysMin:"ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes v] LT",
nextDay:"[zÃ­tra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedÄ›li v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve stÅ™edu v] LT";
case 4:return"[ve Ätvrtek v] LT";case 5:return"[v pÃ¡tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[vÄera v] LT",lastWeek:function(){switch(this.day()){
case 0:return"[minulou nedÄ›li v] LT";case 1:case 2:return"[minulÃ©] dddd [v] LT";case 3:return"[minulou stÅ™edu v] LT";case 4:case 5:return"[minulÃ½] dddd [v] LT";
case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pÅ™ed %s",s:nr,m:nr,mm:nr,h:nr,hh:nr,d:nr,dd:nr,M:nr,MM:nr,y:nr,
yy:nr},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),Pa.defineLocale("cv",{months:"ÐºÓ‘Ñ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€Ó‘Ñ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ð»Ð°_Ð°Ð²Ó‘Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"),
monthsShort:"ÐºÓ‘Ñ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ð°Ð²Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"),weekdays:"Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÓ—Ò«Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÓ‘Ð¼Ð°Ñ‚ÐºÑƒÐ½".split("_"),
weekdaysShort:"Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÓ—Ò«_ÑÑ€Ð½_ÑˆÓ‘Ð¼".split("_"),weekdaysMin:"Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÒ«_ÑÑ€_ÑˆÐ¼".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",
LL:"YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—]",LLL:"YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm",LLLL:"dddd, YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm"},calendar:{
sameDay:"[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",nextDay:"[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",lastDay:"[Ó–Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",nextWeek:"[ÒªÐ¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",lastWeek:"[Ð˜Ñ€Ñ‚Ð½Ó—] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
sameElse:"L"},relativeTime:{future:function(e){var t=/ÑÐµÑ…ÐµÑ‚$/i.exec(e)?"Ñ€ÐµÐ½":/Ò«ÑƒÐ»$/i.exec(e)?"Ñ‚Ð°Ð½":"Ñ€Ð°Ð½";return e+t},past:"%s ÐºÐ°ÑÐ»Ð»Ð°",s:"Ð¿Ó—Ñ€-Ð¸Ðº Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
m:"Ð¿Ó—Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",mm:"%d Ð¼Ð¸Ð½ÑƒÑ‚",h:"Ð¿Ó—Ñ€ ÑÐµÑ…ÐµÑ‚",hh:"%d ÑÐµÑ…ÐµÑ‚",d:"Ð¿Ó—Ñ€ ÐºÑƒÐ½",dd:"%d ÐºÑƒÐ½",M:"Ð¿Ó—Ñ€ ÑƒÐ¹Ó‘Ñ…",MM:"%d ÑƒÐ¹Ó‘Ñ…",y:"Ð¿Ó—Ñ€ Ò«ÑƒÐ»",yy:"%d Ò«ÑƒÐ»"},ordinalParse:/\d{1,2}-Ð¼Ó—Ñˆ/,
ordinal:"%d-Ð¼Ó—Ñˆ",week:{dow:1,doy:7}}),Pa.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",
lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn Ã´l",s:"ychydig eiliadau",m:"munud",mm:"%d munud",
h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){
var t=e,n="",r=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return t>20?n=40===t||50===t||60===t||80===t||100===t?"fed":"ain":t>0&&(n=r[t]),
e+n},week:{dow:1,doy:4}}),Pa.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),weekdaysShort:"sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
weekdaysMin:"sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY HH:mm"
},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I gÃ¥r kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"
},relativeTime:{future:"om %s",past:"%s siden",s:"fÃ¥ sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en mÃ¥ned",
MM:"%d mÃ¥neder",y:"et Ã¥r",yy:"%d Ã¥r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),Pa.defineLocale("de-at",{months:"JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
monthsShort:"JÃ¤n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",
LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",
nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",
m:rr,mm:"%d Minuten",h:rr,hh:"%d Stunden",d:rr,dd:rr,M:rr,MM:rr,y:rr,yy:rr},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),Pa.defineLocale("de",{
months:"Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",
sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{
future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:ir,mm:"%d Minuten",h:ir,hh:"%d Stunden",d:ir,dd:ir,M:ir,MM:ir,y:ir,yy:ir},ordinalParse:/\d{1,2}\./,
ordinal:"%d.",week:{dow:1,doy:4}}),["Þ–Þ¬Þ‚ÞªÞ‡Þ¦ÞƒÞ©","ÞŠÞ¬Þ„Þ°ÞƒÞªÞ‡Þ¦ÞƒÞ©","Þ‰Þ§ÞƒÞ¨Þ—Þª","Þ‡Þ­Þ•Þ°ÞƒÞ©ÞÞª","Þ‰Þ­","Þ–Þ«Þ‚Þ°","Þ–ÞªÞÞ¦Þ‡Þ¨","Þ‡Þ¯ÞŽÞ¦ÞÞ°Þ“Þª","ÞÞ¬Þ•Þ°Þ“Þ¬Þ‰Þ°Þ„Þ¦ÞƒÞª","Þ‡Þ®Þ†Þ°Þ“Þ¯Þ„Þ¦ÞƒÞª","Þ‚Þ®ÞˆÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª","Þ‘Þ¨ÞÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª"]),Qa=["Þ‡Þ§Þ‹Þ¨Þ‡Þ°ÞŒÞ¦","Þ€Þ¯Þ‰Þ¦","Þ‡Þ¦Þ‚Þ°ÞŽÞ§ÞƒÞ¦","Þ„ÞªÞ‹Þ¦","Þ„ÞªÞƒÞ§ÞÞ°ÞŠÞ¦ÞŒÞ¨","Þ€ÞªÞ†ÞªÞƒÞª","Þ€Þ®Þ‚Þ¨Þ€Þ¨ÞƒÞª"],eo=(Pa.defineLocale("dv",{
months:Za,monthsShort:Za,weekdays:Qa,weekdaysShort:Qa,weekdaysMin:"Þ‡Þ§Þ‹Þ¨_Þ€Þ¯Þ‰Þ¦_Þ‡Þ¦Þ‚Þ°_Þ„ÞªÞ‹Þ¦_Þ„ÞªÞƒÞ§_Þ€ÞªÞ†Þª_Þ€Þ®Þ‚Þ¨".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",
L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/Þ‰Þ†|Þ‰ÞŠ/,isPM:function(e){return""===e},meridiem:function(e,t,n){
return e<12?"Þ‰Þ†":"Þ‰ÞŠ"},calendar:{sameDay:"[Þ‰Þ¨Þ‡Þ¦Þ‹Þª] LT",nextDay:"[Þ‰Þ§Þ‹Þ¦Þ‰Þ§] LT",nextWeek:"dddd LT",lastDay:"[Þ‡Þ¨Þ‡Þ°Þ”Þ¬] LT",lastWeek:"[ÞŠÞ§Þ‡Þ¨ÞŒÞªÞˆÞ¨] dddd LT",sameElse:"L"
},relativeTime:{future:"ÞŒÞ¬ÞƒÞ­ÞŽÞ¦Þ‡Þ¨ %s",past:"Þ†ÞªÞƒÞ¨Þ‚Þ° %s",s:"ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞªÞ†Þ®Þ…Þ¬Þ‡Þ°",m:"Þ‰Þ¨Þ‚Þ¨Þ“Þ¬Þ‡Þ°",mm:"Þ‰Þ¨Þ‚Þ¨Þ“Þª %d",h:"ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞ¬Þ‡Þ°",hh:"ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞª %d",d:"Þ‹ÞªÞˆÞ¦Þ€Þ¬Þ‡Þ°",dd:"Þ‹ÞªÞˆÞ¦ÞÞ° %d",
M:"Þ‰Þ¦Þ€Þ¬Þ‡Þ°",MM:"Þ‰Þ¦ÞÞ° %d",y:"Þ‡Þ¦Þ€Þ¦ÞƒÞ¬Þ‡Þ°",yy:"Þ‡Þ¦Þ€Þ¦ÞƒÞª %d"},preparse:function(e){return e.replace(/ØŒ/g,",")},postformat:function(e){return e.replace(/,/g,"ØŒ");
},week:{dow:7,doy:12}}),Pa.defineLocale("el",{monthsNominativeEl:"Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),
monthsGenitiveEl:"Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),months:function(e,t){
return/D/.test(t.substring(0,t.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]},monthsShort:"Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),
weekdays:"ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),weekdaysShort:"ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),weekdaysMin:"ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),
meridiem:function(e,t,n){return e>11?n?"Î¼Î¼":"ÎœÎœ":n?"Ï€Î¼":"Î Îœ"},isPM:function(e){return"Î¼"===(e+"").toLowerCase()[0]},meridiemParse:/[Î Îœ]\.?Îœ?\.?/i,longDateFormat:{
LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Î£Î®Î¼ÎµÏÎ± {}] LT",
nextDay:"[Î‘ÏÏÎ¹Î¿ {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Î§Î¸ÎµÏ‚ {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";
default:return"[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,t){var n=this._calendarEl[e],r=t&&t.hours();return S(n)&&(n=n.apply(t)),
n.replace("{}",r%12===1?"ÏƒÏ„Î·":"ÏƒÏ„Î¹Ï‚")},relativeTime:{future:"ÏƒÎµ %s",past:"%s Ï€ÏÎ¹Î½",s:"Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",m:"Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",mm:"%d Î»ÎµÏ€Ï„Î¬",h:"Î¼Î¯Î± ÏŽÏÎ±",hh:"%d ÏŽÏÎµÏ‚",
d:"Î¼Î¯Î± Î¼Î­ÏÎ±",dd:"%d Î¼Î­ÏÎµÏ‚",M:"Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚",MM:"%d Î¼Î®Î½ÎµÏ‚",y:"Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",yy:"%d Ï‡ÏÏŒÎ½Î¹Î±"},ordinalParse:/\d{1,2}Î·/,ordinal:"%dÎ·",week:{dow:1,doy:4}}),Pa.defineLocale("en-au",{
months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",
past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"
},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,
doy:4}}),Pa.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"D MMMM, YYYY",LLL:"D MMMM, YYYY h:mm A",LLLL:"dddd, D MMMM, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",
past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"
},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),Pa.defineLocale("en-gb",{
months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",
past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"
},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,
doy:4}}),Pa.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",
past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"
},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,
doy:4}}),Pa.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",
past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"
},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,
doy:4}}),Pa.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec".split("_"),
weekdays:"DimanÄ‰o_Lundo_Mardo_Merkredo_Ä´aÅ­do_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ä´aÅ­_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ä´a_Ve_Sa".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-an de] MMMM, YYYY HH:mm"
},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,t,n){return e>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M.";
},calendar:{sameDay:"[HodiaÅ­ je] LT",nextDay:"[MorgaÅ­ je] LT",nextWeek:"dddd [je] LT",lastDay:"[HieraÅ­ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"
},relativeTime:{future:"je %s",past:"antaÅ­ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",
y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}}),"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),to="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),no=(Pa.defineLocale("es",{
months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,t){return/-MMM-/.test(t)?to[e.month()]:eo[e.month()];
},weekdays:"domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),weekdaysShort:"dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"
},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[maÃ±ana a la"+(1!==this.hours()?"s":"")+"] LT";
},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){
return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",
mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un dÃ­a",dd:"%d dÃ­as",M:"un mes",MM:"%d meses",y:"un aÃ±o",yy:"%d aÃ±os"},ordinalParse:/\d{1,2}Âº/,ordinal:"%dÂº",
week:{dow:1,doy:4}}),Pa.defineLocale("et",{months:"jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
monthsShort:"jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),
weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",
LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[TÃ¤na,] LT",nextDay:"[Homme,] LT",nextWeek:"[JÃ¤rgmine] dddd LT",lastDay:"[Eile,] LT",
lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pÃ¤rast",past:"%s tagasi",s:ar,m:ar,mm:ar,h:ar,hh:ar,d:ar,dd:"%d pÃ¤eva",M:ar,MM:ar,y:ar,
yy:ar},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),Pa.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",
LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",
llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",
lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",
hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,
doy:7}}),{1:"Û±",2:"Û²",3:"Û³",4:"Û´",5:"Ûµ",6:"Û¶",7:"Û·",8:"Û¸",9:"Û¹",0:"Û°"}),ro={"Û±":"1","Û²":"2","Û³":"3","Û´":"4","Ûµ":"5","Û¶":"6","Û·":"7","Û¸":"8","Û¹":"9","Û°":"0"
},io=(Pa.defineLocale("fa",{months:"Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),monthsShort:"Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
weekdays:"ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),weekdaysShort:"ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
weekdaysMin:"ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"
},meridiemParse:/Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/,isPM:function(e){return/Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(e)},meridiem:function(e,t,n){return e<12?"Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±":"Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"},calendar:{
sameDay:"[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",nextDay:"[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",nextWeek:"dddd [Ø³Ø§Ø¹Øª] LT",lastDay:"[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",lastWeek:"dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",sameElse:"L"},relativeTime:{
future:"Ø¯Ø± %s",past:"%s Ù¾ÛŒØ´",s:"Ú†Ù†Ø¯ÛŒÙ† Ø«Ø§Ù†ÛŒÙ‡",m:"ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",mm:"%d Ø¯Ù‚ÛŒÙ‚Ù‡",h:"ÛŒÚ© Ø³Ø§Ø¹Øª",hh:"%d Ø³Ø§Ø¹Øª",d:"ÛŒÚ© Ø±ÙˆØ²",dd:"%d Ø±ÙˆØ²",M:"ÛŒÚ© Ù…Ø§Ù‡",MM:"%d Ù…Ø§Ù‡",y:"ÛŒÚ© Ø³Ø§Ù„",
yy:"%d Ø³Ø§Ù„"},preparse:function(e){return e.replace(/[Û°-Û¹]/g,function(e){return ro[e]}).replace(/ØŒ/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){
return no[e]}).replace(/,/g,"ØŒ")},ordinalParse:/\d{1,2}Ù…/,ordinal:"%dÙ…",week:{dow:6,doy:12}}),"nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" ")),ao=["nolla","yhden","kahden","kolmen","neljÃ¤n","viiden","kuuden",io[7],io[8],io[9]],oo=(Pa.defineLocale("fi",{
months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),
weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),
longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tÃ¤nÃ¤Ã¤n] [klo] LT",nextDay:"[huomenna] [klo] LT",
nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s pÃ¤Ã¤stÃ¤",past:"%s sitten",
s:or,m:or,mm:or,h:or,hh:or,d:or,dd:or,M:or,MM:or,y:or,yy:or},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),Pa.defineLocale("fo",{months:"januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"),
weekdaysShort:"sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"),weekdaysMin:"su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Ã dag kl.] LT",nextDay:"[Ã morgin kl.] LT",nextWeek:"dddd [kl.] LT",
lastDay:"[Ã gjÃ¡r kl.] LT",lastWeek:"[sÃ­Ã°stu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s sÃ­Ã°ani",s:"fÃ¡ sekund",m:"ein minutt",mm:"%d minuttir",
h:"ein tÃ­mi",hh:"%d tÃ­mar",d:"ein dagur",dd:"%d dagar",M:"ein mÃ¡naÃ°i",MM:"%d mÃ¡naÃ°ir",y:"eitt Ã¡r",yy:"%d Ã¡r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{
dow:1,doy:4}}),Pa.defineLocale("fr-ca",{months:"janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),monthsShort:"janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui Ã ] LT",
nextDay:"[Demain Ã ] LT",nextWeek:"dddd [Ã ] LT",lastDay:"[Hier Ã ] LT",lastWeek:"dddd [dernier Ã ] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",
s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"
},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")}}),Pa.defineLocale("fr-ch",{months:"janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
monthsShort:"janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui Ã ] LT",nextDay:"[Demain Ã ] LT",nextWeek:"dddd [Ã ] LT",
lastDay:"[Hier Ã ] LT",lastWeek:"dddd [dernier Ã ] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",
mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){
return e+(1===e?"er":"e")},week:{dow:1,doy:4}}),Pa.defineLocale("fr",{months:"janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
monthsShort:"janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui Ã ] LT",nextDay:"[Demain Ã ] LT",nextWeek:"dddd [Ã ] LT",
lastDay:"[Hier Ã ] LT",lastWeek:"dddd [dernier Ã ] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",
mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(e){
return e+(1===e?"er":"")},week:{dow:1,doy:4}}),"jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),so="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),uo=(Pa.defineLocale("fy",{
months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,t){return/-MMM-/.test(t)?so[e.month()]:oo[e.month()];
},weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",
nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[Ã´frÃ»ne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",
s:"in pear sekonden",m:"ien minÃºt",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"
},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),["Am Faoilleach","An Gearran","Am MÃ rt","An Giblean","An CÃ¨itean","An t-Ã’gmhios","An t-Iuchar","An LÃ¹nastal","An t-Sultain","An DÃ mhair","An t-Samhain","An DÃ¹bhlachd"]),lo=["Faoi","Gear","MÃ rt","Gibl","CÃ¨it","Ã’gmh","Iuch","LÃ¹n","Sult","DÃ mh","Samh","DÃ¹bh"],co=["DidÃ²mhnaich","Diluain","DimÃ irt","Diciadain","Diardaoin","Dihaoine","Disathairne"],fo=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],po=["DÃ²","Lu","MÃ ","Ci","Ar","Ha","Sa"],mo=(Pa.defineLocale("gd",{
months:uo,monthsShort:lo,monthsParseExact:!0,weekdays:co,weekdaysShort:fo,weekdaysMin:po,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",
LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-mÃ ireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dÃ¨ aig] LT",
lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",
h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mÃ¬os",MM:"%d mÃ¬osan",y:"bliadhna",yy:"%d bliadhna"},ordinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){
var t=1===e?"d":e%10===2?"na":"mh";return e+t},week:{dow:1,doy:4}}),Pa.defineLocale("gl",{months:"Xaneiro_Febreiro_Marzo_Abril_Maio_XuÃ±o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
monthsShort:"Xan._Feb._Mar._Abr._Mai._XuÃ±._Xul._Ago._Set._Out._Nov._Dec.".split("_"),weekdays:"Domingo_Luns_Martes_MÃ©rcores_Xoves_Venres_SÃ¡bado".split("_"),
weekdaysShort:"Dom._Lun._Mar._MÃ©r._Xov._Ven._SÃ¡b.".split("_"),weekdaysMin:"Do_Lu_Ma_MÃ©_Xo_Ve_SÃ¡".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"Ã¡s":"Ã¡")+"] LT"},nextDay:function(){
return"[maÃ±Ã¡ "+(1!==this.hours()?"Ã¡s":"Ã¡")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"Ã¡s":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"Ã¡":"a")+"] LT";
},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"Ã¡s":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return"uns segundos"===e?"nuns segundos":"en "+e;
},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un dÃ­a",dd:"%d dÃ­as",M:"un mes",MM:"%d meses",y:"un ano",
yy:"%d anos"},ordinalParse:/\d{1,2}Âº/,ordinal:"%dÂº",week:{dow:1,doy:7}}),Pa.defineLocale("he",{months:"×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),
monthsShort:"×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),weekdays:"×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),weekdaysShort:"××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),
weekdaysMin:"×_×‘_×’_×“_×”_×•_×©".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [×‘]MMMM YYYY",LLL:"D [×‘]MMMM YYYY HH:mm",LLLL:"dddd, D [×‘]MMMM YYYY HH:mm",
l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[×”×™×•× ×‘Ö¾]LT",nextDay:"[×ž×—×¨ ×‘Ö¾]LT",nextWeek:"dddd [×‘×©×¢×”] LT",
lastDay:"[××ª×ž×•×œ ×‘Ö¾]LT",lastWeek:"[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",sameElse:"L"},relativeTime:{future:"×‘×¢×•×“ %s",past:"×œ×¤× ×™ %s",s:"×ž×¡×¤×¨ ×©× ×™×•×ª",m:"×“×§×”",mm:"%d ×“×§×•×ª",
h:"×©×¢×”",hh:function(e){return 2===e?"×©×¢×ª×™×™×":e+" ×©×¢×•×ª"},d:"×™×•×",dd:function(e){return 2===e?"×™×•×ž×™×™×":e+" ×™×ž×™×"},M:"×—×•×“×©",MM:function(e){return 2===e?"×—×•×“×©×™×™×":e+" ×—×•×“×©×™×";
},y:"×©× ×”",yy:function(e){return 2===e?"×©× ×ª×™×™×":e%10===0&&10!==e?e+" ×©× ×”":e+" ×©× ×™×"}}}),{1:"à¥§",2:"à¥¨",3:"à¥©",4:"à¥ª",5:"à¥«",6:"à¥¬",7:"à¥­",8:"à¥®",9:"à¥¯",0:"à¥¦"}),ho={
"à¥§":"1","à¥¨":"2","à¥©":"3","à¥ª":"4","à¥«":"5","à¥¬":"6","à¥­":"7","à¥®":"8","à¥¯":"9","à¥¦":"0"},_o=(Pa.defineLocale("hi",{months:"à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),
monthsShort:"à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),weekdays:"à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
weekdaysShort:"à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),weekdaysMin:"à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),longDateFormat:{LT:"A h:mm à¤¬à¤œà¥‡",LTS:"A h:mm:ss à¤¬à¤œà¥‡",
L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm à¤¬à¤œà¥‡",LLLL:"dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡"},calendar:{sameDay:"[à¤†à¤œ] LT",nextDay:"[à¤•à¤²] LT",nextWeek:"dddd, LT",
lastDay:"[à¤•à¤²] LT",lastWeek:"[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à¤®à¥‡à¤‚",past:"%s à¤ªà¤¹à¤²à¥‡",s:"à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",m:"à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",mm:"%d à¤®à¤¿à¤¨à¤Ÿ",h:"à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",
hh:"%d à¤˜à¤‚à¤Ÿà¥‡",d:"à¤à¤• à¤¦à¤¿à¤¨",dd:"%d à¤¦à¤¿à¤¨",M:"à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",MM:"%d à¤®à¤¹à¥€à¤¨à¥‡",y:"à¤à¤• à¤µà¤°à¥à¤·",yy:"%d à¤µà¤°à¥à¤·"},preparse:function(e){return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g,function(e){
return ho[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return mo[e]})},meridiemParse:/à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,meridiemHour:function(e,t){
return 12===e&&(e=0),"à¤°à¤¾à¤¤"===t?e<4?e:e+12:"à¤¸à¥à¤¬à¤¹"===t?e:"à¤¦à¥‹à¤ªà¤¹à¤°"===t?e>=10?e:e+12:"à¤¶à¤¾à¤®"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"à¤°à¤¾à¤¤":e<10?"à¤¸à¥à¤¬à¤¹":e<17?"à¤¦à¥‹à¤ªà¤¹à¤°":e<20?"à¤¶à¤¾à¤®":"à¤°à¤¾à¤¤";
},week:{dow:0,doy:6}}),Pa.defineLocale("hr",{months:{format:"sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
standalone:"sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
weekdays:"nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._Äet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_Äe_pe_su".split("_"),
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",
nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juÄer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[proÅ¡lu] dddd [u] LT";
case 6:return"[proÅ¡le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[proÅ¡li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",
s:"par sekundi",m:ur,mm:ur,h:ur,hh:ur,d:"dan",dd:ur,M:"mjesec",MM:ur,y:"godinu",yy:ur},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),"vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" ")),go=(Pa.defineLocale("hu",{
months:"januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),monthsShort:"jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"),
weekdays:"vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),weekdaysShort:"vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,
isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,t,n){return e<12?n===!0?"de":"DE":n===!0?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",
nextDay:"[holnap] LT[-kor]",nextWeek:function(){return cr.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return cr.call(this,!1)},sameElse:"L"
},relativeTime:{future:"%s mÃºlva",past:"%s",s:lr,m:lr,mm:lr,h:lr,hh:lr,d:lr,dd:lr,M:lr,MM:lr,y:lr,yy:lr},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,
doy:7}}),Pa.defineLocale("hy-am",{months:{format:"Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_"),
standalone:"Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_")},monthsShort:"Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_"),
weekdays:"Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_"),weekdaysShort:"Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),weekdaysMin:"Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY Õ©.",LLL:"D MMMM YYYY Õ©., HH:mm",LLLL:"dddd, D MMMM YYYY Õ©., HH:mm"},calendar:{
sameDay:"[Õ¡ÕµÕ½Ö…Ö€] LT",nextDay:"[Õ¾Õ¡Õ²Õ¨] LT",lastDay:"[Õ¥Ö€Õ¥Õ¯] LT",nextWeek:function(){return"dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"},lastWeek:function(){return"[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT";
},sameElse:"L"},relativeTime:{future:"%s Õ°Õ¥Õ¿Õ¸",past:"%s Õ¡Õ¼Õ¡Õ»",s:"Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",m:"Ö€Õ¸ÕºÕ¥",mm:"%d Ö€Õ¸ÕºÕ¥",h:"ÕªÕ¡Õ´",hh:"%d ÕªÕ¡Õ´",d:"Ö…Ö€",dd:"%d Ö…Ö€",M:"Õ¡Õ´Õ«Õ½",
MM:"%d Õ¡Õ´Õ«Õ½",y:"Õ¿Õ¡Ö€Õ«",yy:"%d Õ¿Õ¡Ö€Õ«"},meridiemParse:/Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶/,isPM:function(e){return/^(ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(e)},meridiem:function(e){
return e<4?"Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡":e<12?"Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡":e<17?"ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡":"Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"},ordinalParse:/\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,ordinal:function(e,t){switch(t){case"DDD":case"w":
case"W":case"DDDo":return 1===e?e+"-Õ«Õ¶":e+"-Ö€Õ¤";default:return e}},week:{dow:1,doy:7}}),Pa.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",
LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"siang"===t?e>=11?e:e+12:"sore"===t||"malam"===t?e+12:void 0;
},meridiem:function(e,t,n){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",
lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",
mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),Pa.defineLocale("is",{
months:"janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),
weekdays:"sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),weekdaysShort:"sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),
weekdaysMin:"Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"
},calendar:{sameDay:"[Ã­ dag kl.] LT",nextDay:"[Ã¡ morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Ã­ gÃ¦r kl.] LT",lastWeek:"[sÃ­Ã°asta] dddd [kl.] LT",sameElse:"L"
},relativeTime:{future:"eftir %s",past:"fyrir %s sÃ­Ã°an",s:fr,m:fr,mm:fr,h:"klukkustund",hh:fr,d:fr,dd:fr,M:fr,MM:fr,y:fr,yy:fr},ordinalParse:/\d{1,2}\./,
ordinal:"%d.",week:{dow:1,doy:4}}),Pa.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_LunedÃ¬_MartedÃ¬_MercoledÃ¬_GiovedÃ¬_VenerdÃ¬_Sabato".split("_"),
weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",
lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},
sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",
h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}Âº/,ordinal:"%dÂº",week:{dow:1,
doy:4}}),Pa.defineLocale("ja",{months:"1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),monthsShort:"1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
weekdays:"æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),weekdaysShort:"æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),weekdaysMin:"æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),longDateFormat:{LT:"Ahæ™‚måˆ†",
LTS:"Ahæ™‚måˆ†sç§’",L:"YYYY/MM/DD",LL:"YYYYå¹´MæœˆDæ—¥",LLL:"YYYYå¹´MæœˆDæ—¥Ahæ™‚måˆ†",LLLL:"YYYYå¹´MæœˆDæ—¥Ahæ™‚måˆ† dddd"},meridiemParse:/åˆå‰|åˆå¾Œ/i,isPM:function(e){return"åˆå¾Œ"===e},meridiem:function(e,t,n){
return e<12?"åˆå‰":"åˆå¾Œ"},calendar:{sameDay:"[ä»Šæ—¥] LT",nextDay:"[æ˜Žæ—¥] LT",nextWeek:"[æ¥é€±]dddd LT",lastDay:"[æ˜¨æ—¥] LT",lastWeek:"[å‰é€±]dddd LT",sameElse:"L"},relativeTime:{
future:"%så¾Œ",past:"%så‰",s:"æ•°ç§’",m:"1åˆ†",mm:"%dåˆ†",h:"1æ™‚é–“",hh:"%dæ™‚é–“",d:"1æ—¥",dd:"%dæ—¥",M:"1ãƒ¶æœˆ",MM:"%dãƒ¶æœˆ",y:"1å¹´",yy:"%då¹´"}}),Pa.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",
LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,t){return 12===e&&(e=0),"enjing"===t?e:"siyang"===t?e>=11?e:e+12:"sonten"===t||"ndalu"===t?e+12:void 0;
},meridiem:function(e,t,n){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",
nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",
s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"
},week:{dow:1,doy:7}}),Pa.defineLocale("ka",{months:{standalone:"áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"),
format:"áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡".split("_")},monthsShort:"áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"),
weekdays:{standalone:"áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"),format:"áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_"),
isFormat:/(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/},weekdaysShort:"áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"),weekdaysMin:"áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"),longDateFormat:{LT:"h:mm A",
LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]",nextDay:"[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]",
lastDay:"[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]",nextWeek:"[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]",lastWeek:"[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”",sameElse:"L"},relativeTime:{future:function(e){return/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/.test(e)?e.replace(/áƒ˜$/,"áƒ¨áƒ˜"):e+"áƒ¨áƒ˜";
},past:function(e){return/(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(e)?e.replace(/(áƒ˜|áƒ”)$/,"áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ"):/áƒ¬áƒ”áƒšáƒ˜/.test(e)?e.replace(/áƒ¬áƒ”áƒšáƒ˜$/,"áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ"):void 0},s:"áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜",
m:"áƒ¬áƒ£áƒ—áƒ˜",mm:"%d áƒ¬áƒ£áƒ—áƒ˜",h:"áƒ¡áƒáƒáƒ—áƒ˜",hh:"%d áƒ¡áƒáƒáƒ—áƒ˜",d:"áƒ“áƒ¦áƒ”",dd:"%d áƒ“áƒ¦áƒ”",M:"áƒ—áƒ•áƒ”",MM:"%d áƒ—áƒ•áƒ”",y:"áƒ¬áƒ”áƒšáƒ˜",yy:"%d áƒ¬áƒ”áƒšáƒ˜"},ordinalParse:/0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/,
ordinal:function(e){return 0===e?e:1===e?e+"-áƒšáƒ˜":e<20||e<=100&&e%20===0||e%100===0?"áƒ›áƒ”-"+e:e+"-áƒ”"},week:{dow:1,doy:7}}),{0:"-ÑˆÑ–",1:"-ÑˆÑ–",2:"-ÑˆÑ–",3:"-ÑˆÑ–",
4:"-ÑˆÑ–",5:"-ÑˆÑ–",6:"-ÑˆÑ‹",7:"-ÑˆÑ–",8:"-ÑˆÑ–",9:"-ÑˆÑ‹",10:"-ÑˆÑ‹",20:"-ÑˆÑ‹",30:"-ÑˆÑ‹",40:"-ÑˆÑ‹",50:"-ÑˆÑ–",60:"-ÑˆÑ‹",70:"-ÑˆÑ–",80:"-ÑˆÑ–",90:"-ÑˆÑ‹",100:"-ÑˆÑ–"}),vo=(Pa.defineLocale("kk",{
months:"ÒšÐ°Ò£Ñ‚Ð°Ñ€_ÐÒ›Ð¿Ð°Ð½_ÐÐ°ÑƒÑ€Ñ‹Ð·_Ð¡Ó™ÑƒÑ–Ñ€_ÐœÐ°Ð¼Ñ‹Ñ€_ÐœÐ°ÑƒÑÑ‹Ð¼_Ð¨Ñ–Ð»Ð´Ðµ_Ð¢Ð°Ð¼Ñ‹Ð·_ÒšÑ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_ÒšÐ°Ð·Ð°Ð½_ÒšÐ°Ñ€Ð°ÑˆÐ°_Ð–ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½".split("_"),monthsShort:"ÒšÐ°Ò£_ÐÒ›Ð¿_ÐÐ°Ñƒ_Ð¡Ó™Ñƒ_ÐœÐ°Ð¼_ÐœÐ°Ñƒ_Ð¨Ñ–Ð»_Ð¢Ð°Ð¼_ÒšÑ‹Ñ€_ÒšÐ°Ð·_ÒšÐ°Ñ€_Ð–ÐµÐ»".split("_"),
weekdays:"Ð–ÐµÐºÑÐµÐ½Ð±Ñ–_Ð”Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_Ð¡ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¡Ó™Ñ€ÑÐµÐ½Ð±Ñ–_Ð‘ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð–Ò±Ð¼Ð°_Ð¡ÐµÐ½Ð±Ñ–".split("_"),weekdaysShort:"Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¡ÐµÐ¹_Ð¡Ó™Ñ€_Ð‘ÐµÐ¹_Ð–Ò±Ð¼_Ð¡ÐµÐ½".split("_"),weekdaysMin:"Ð–Ðº_Ð”Ð¹_Ð¡Ð¹_Ð¡Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð¡Ð½".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT",
nextDay:"[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT",nextWeek:"dddd [ÑÐ°Ò“Ð°Ñ‚] LT",lastDay:"[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT",lastWeek:"[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT",sameElse:"L"},relativeTime:{
future:"%s Ñ–ÑˆÑ–Ð½Ð´Ðµ",past:"%s Ð±Ò±Ñ€Ñ‹Ð½",s:"Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´",m:"Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",mm:"%d Ð¼Ð¸Ð½ÑƒÑ‚",h:"Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚",hh:"%d ÑÐ°Ò“Ð°Ñ‚",d:"Ð±Ñ–Ñ€ ÐºÒ¯Ð½",dd:"%d ÐºÒ¯Ð½",M:"Ð±Ñ–Ñ€ Ð°Ð¹",MM:"%d Ð°Ð¹",
y:"Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»",yy:"%d Ð¶Ñ‹Ð»"},ordinalParse:/\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,ordinal:function(e){var t=e%10,n=e>=100?100:null;return e+(go[e]||go[t]||go[n])},week:{dow:1,doy:7
}}),Pa.defineLocale("km",{months:"áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž·áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),monthsShort:"áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž·áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
weekdays:"áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),weekdaysShort:"áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),weekdaysMin:"áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT",
nextDay:"[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",nextWeek:"dddd [áž˜áŸ‰áŸ„áž„] LT",lastDay:"[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",lastWeek:"dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",sameElse:"L"},relativeTime:{future:"%sáž‘áŸ€áž",
past:"%sáž˜áž»áž“",s:"áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",m:"áž˜áž½áž™áž“áž¶áž‘áž¸",mm:"%d áž“áž¶áž‘áž¸",h:"áž˜áž½áž™áž˜áŸ‰áŸ„áž„",hh:"%d áž˜áŸ‰áŸ„áž„",d:"áž˜áž½áž™ážáŸ’áž„áŸƒ",dd:"%d ážáŸ’áž„áŸƒ",M:"áž˜áž½áž™ážáŸ‚",MM:"%d ážáŸ‚",y:"áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",yy:"%d áž†áŸ’áž“áž¶áŸ†"
},week:{dow:1,doy:4}}),Pa.defineLocale("ko",{months:"1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),monthsShort:"1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
weekdays:"ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),weekdaysShort:"ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),weekdaysMin:"ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),longDateFormat:{LT:"A hì‹œ më¶„",
LTS:"A hì‹œ më¶„ sì´ˆ",L:"YYYY.MM.DD",LL:"YYYYë…„ MMMM Dì¼",LLL:"YYYYë…„ MMMM Dì¼ A hì‹œ më¶„",LLLL:"YYYYë…„ MMMM Dì¼ dddd A hì‹œ më¶„"},calendar:{sameDay:"ì˜¤ëŠ˜ LT",nextDay:"ë‚´ì¼ LT",
nextWeek:"dddd LT",lastDay:"ì–´ì œ LT",lastWeek:"ì§€ë‚œì£¼ dddd LT",sameElse:"L"},relativeTime:{future:"%s í›„",past:"%s ì „",s:"ëª‡ì´ˆ",ss:"%dì´ˆ",m:"ì¼ë¶„",mm:"%dë¶„",h:"í•œì‹œê°„",
hh:"%dì‹œê°„",d:"í•˜ë£¨",dd:"%dì¼",M:"í•œë‹¬",MM:"%dë‹¬",y:"ì¼ë…„",yy:"%dë…„"},ordinalParse:/\d{1,2}ì¼/,ordinal:"%dì¼",meridiemParse:/ì˜¤ì „|ì˜¤í›„/,isPM:function(e){return"ì˜¤í›„"===e},
meridiem:function(e,t,n){return e<12?"ì˜¤ì „":"ì˜¤í›„"}}),Pa.defineLocale("lb",{months:"Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),weekdays:"Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
weekdaysShort:"So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),weekdaysMin:"So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",
L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",
nextWeek:"dddd [um] LT",lastDay:"[GÃ«schter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT";
}}},relativeTime:{future:mr,past:hr,s:"e puer Sekonnen",m:pr,mm:"%d Minutten",h:pr,hh:"%d Stonnen",d:pr,dd:"%d Deeg",M:pr,MM:"%d MÃ©int",y:pr,yy:"%d Joer"
},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),Pa.defineLocale("lo",{months:"àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
monthsShort:"àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),weekdays:"àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
weekdaysShort:"àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),weekdaysMin:"àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"àº§àº±àº™dddd D MMMM YYYY HH:mm"},meridiemParse:/àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/,isPM:function(e){return"àº•àº­àº™à»àº¥àº‡"===e},meridiem:function(e,t,n){
return e<12?"àº•àº­àº™à»€àºŠàº»à»‰àº²":"àº•àº­àº™à»àº¥àº‡"},calendar:{sameDay:"[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT",nextDay:"[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT",nextWeek:"[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT",lastDay:"[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT",
lastWeek:"[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT",sameElse:"L"},relativeTime:{future:"àº­àºµàº %s",past:"%sàºœà»ˆàº²àº™àº¡àº²",s:"àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ",m:"1 àº™àº²àº—àºµ",mm:"%d àº™àº²àº—àºµ",h:"1 àºŠàº»à»ˆàº§à»‚àº¡àº‡",
hh:"%d àºŠàº»à»ˆàº§à»‚àº¡àº‡",d:"1 àº¡àº·à»‰",dd:"%d àº¡àº·à»‰",M:"1 à»€àº”àº·àº­àº™",MM:"%d à»€àº”àº·àº­àº™",y:"1 àº›àºµ",yy:"%d àº›àºµ"},ordinalParse:/(àº—àºµà»ˆ)\d{1,2}/,ordinal:function(e){return"àº—àºµà»ˆ"+e}}),{
m:"minutÄ—_minutÄ—s_minutÄ™",mm:"minutÄ—s_minuÄiÅ³_minutes",h:"valanda_valandos_valandÄ…",hh:"valandos_valandÅ³_valandas",d:"diena_dienos_dienÄ…",dd:"dienos_dienÅ³_dienas",
M:"mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",MM:"mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",y:"metai_metÅ³_metus",yy:"metai_metÅ³_metus"}),yo=(Pa.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),
standalone:"sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis".split("_")},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
weekdays:{format:"sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_"),
isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Å ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",
L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",
lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Å iandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",
lastDay:"[Vakar] LT",lastWeek:"[PraÄ—jusÄ¯] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieÅ¡ %s",s:gr,m:vr,mm:wr,h:vr,hh:wr,d:vr,dd:wr,M:vr,
MM:wr,y:vr,yy:wr},ordinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}}),{m:"minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),mm:"minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
h:"stundas_stundÄm_stunda_stundas".split("_"),hh:"stundas_stundÄm_stunda_stundas".split("_"),d:"dienas_dienÄm_diena_dienas".split("_"),dd:"dienas_dienÄm_diena_dienas".split("_"),
M:"mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),MM:"mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")
}),bo=(Pa.defineLocale("lv",{months:"janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),
weekdays:"svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"
},calendar:{sameDay:"[Å odien pulksten] LT",nextDay:"[RÄ«t pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[PagÄjuÅ¡Ä] dddd [pulksten] LT",
sameElse:"L"},relativeTime:{future:"pÄ“c %s",past:"pirms %s",s:Lr,m:$r,mm:Dr,h:$r,hh:Dr,d:$r,dd:Dr,M:$r,MM:Dr,y:$r,yy:Dr},ordinalParse:/\d{1,2}\./,ordinal:"%d.",
week:{dow:1,doy:4}}),{words:{m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],
MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,t,n){
var r=bo.words[n];return 1===n.length?t?r[0]:r[1]:e+" "+bo.correctGrammaticalCase(e,r)}}),wo=(Pa.defineLocale("me",{months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],
monthsShort:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],weekdays:["nedjelja","ponedjeljak","utorak","srijeda","Äetvrtak","petak","subota"],
weekdaysShort:["ned.","pon.","uto.","sri.","Äet.","pet.","sub."],weekdaysMin:["ne","po","ut","sr","Äe","pe","su"],longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",
L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){
switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:
return"[u] dddd [u] LT"}},lastDay:"[juÄe u] LT",lastWeek:function(){var e=["[proÅ¡le] [nedjelje] [u] LT","[proÅ¡log] [ponedjeljka] [u] LT","[proÅ¡log] [utorka] [u] LT","[proÅ¡le] [srijede] [u] LT","[proÅ¡log] [Äetvrtka] [u] LT","[proÅ¡log] [petka] [u] LT","[proÅ¡le] [subote] [u] LT"];
return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",m:bo.translate,mm:bo.translate,h:bo.translate,hh:bo.translate,
d:"dan",dd:bo.translate,M:"mjesec",MM:bo.translate,y:"godinu",yy:bo.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),Pa.defineLocale("mk",{
months:"Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),monthsShort:"Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
weekdays:"Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),weekdaysShort:"Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),weekdaysMin:"Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",
nextDay:"[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",nextWeek:"[Ð’Ð¾] dddd [Ð²Ð¾] LT",lastDay:"[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
case 1:case 2:case 4:case 5:return"[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"}},sameElse:"L"},relativeTime:{future:"Ð¿Ð¾ÑÐ»Ðµ %s",past:"Ð¿Ñ€ÐµÐ´ %s",s:"Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",m:"Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
mm:"%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",h:"Ñ‡Ð°Ñ",hh:"%d Ñ‡Ð°ÑÐ°",d:"Ð´ÐµÐ½",dd:"%d Ð´ÐµÐ½Ð°",M:"Ð¼ÐµÑÐµÑ†",MM:"%d Ð¼ÐµÑÐµÑ†Ð¸",y:"Ð³Ð¾Ð´Ð¸Ð½Ð°",yy:"%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"},ordinalParse:/\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ÐµÐ²":0===n?e+"-ÐµÐ½":n>10&&n<20?e+"-Ñ‚Ð¸":1===t?e+"-Ð²Ð¸":2===t?e+"-Ñ€Ð¸":7===t||8===t?e+"-Ð¼Ð¸":e+"-Ñ‚Ð¸"},
week:{dow:1,doy:7}}),Pa.defineLocale("ml",{months:"à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"),monthsShort:"à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"),
weekdays:"à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"),weekdaysShort:"à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"),
weekdaysMin:"à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"),longDateFormat:{LT:"A h:mm -à´¨àµ",LTS:"A h:mm:ss -à´¨àµ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -à´¨àµ",
LLLL:"dddd, D MMMM YYYY, A h:mm -à´¨àµ"},calendar:{sameDay:"[à´‡à´¨àµà´¨àµ] LT",nextDay:"[à´¨à´¾à´³àµ†] LT",nextWeek:"dddd, LT",lastDay:"[à´‡à´¨àµà´¨à´²àµ†] LT",lastWeek:"[à´•à´´à´¿à´žàµà´ž] dddd, LT",
sameElse:"L"},relativeTime:{future:"%s à´•à´´à´¿à´žàµà´žàµ",past:"%s à´®àµàµ»à´ªàµ",s:"à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾",m:"à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ",mm:"%d à´®à´¿à´¨à´¿à´±àµà´±àµ",h:"à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼",hh:"%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼",d:"à´’à´°àµ à´¦à´¿à´µà´¸à´‚",
dd:"%d à´¦à´¿à´µà´¸à´‚",M:"à´’à´°àµ à´®à´¾à´¸à´‚",MM:"%d à´®à´¾à´¸à´‚",y:"à´’à´°àµ à´µàµ¼à´·à´‚",yy:"%d à´µàµ¼à´·à´‚"},meridiemParse:/à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ†|à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿/i,isPM:function(e){return/^(à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿)$/.test(e);
},meridiem:function(e,t,n){return e<4?"à´°à´¾à´¤àµà´°à´¿":e<12?"à´°à´¾à´µà´¿à´²àµ†":e<17?"à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ":e<20?"à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚":"à´°à´¾à´¤àµà´°à´¿"}}),{1:"à¥§",2:"à¥¨",3:"à¥©",4:"à¥ª",5:"à¥«",6:"à¥¬",7:"à¥­",
8:"à¥®",9:"à¥¯",0:"à¥¦"}),Mo={"à¥§":"1","à¥¨":"2","à¥©":"3","à¥ª":"4","à¥«":"5","à¥¬":"6","à¥­":"7","à¥®":"8","à¥¯":"9","à¥¦":"0"},Do=(Pa.defineLocale("mr",{months:"à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
monthsShort:"à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),weekdays:"à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
weekdaysShort:"à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),weekdaysMin:"à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),longDateFormat:{LT:"A h:mm à¤µà¤¾à¤œà¤¤à¤¾",LTS:"A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",
L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾",LLLL:"dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾"},calendar:{sameDay:"[à¤†à¤œ] LT",nextDay:"[à¤‰à¤¦à¥à¤¯à¤¾] LT",
nextWeek:"dddd, LT",lastDay:"[à¤•à¤¾à¤²] LT",lastWeek:"[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",sameElse:"L"},relativeTime:{future:"%sà¤®à¤§à¥à¤¯à¥‡",past:"%sà¤ªà¥‚à¤°à¥à¤µà¥€",s:kr,m:kr,mm:kr,h:kr,hh:kr,
d:kr,dd:kr,M:kr,MM:kr,y:kr,yy:kr},preparse:function(e){return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g,function(e){return Mo[e]})},postformat:function(e){return e.replace(/\d/g,function(e){
return wo[e]})},meridiemParse:/à¤°à¤¾à¤¤à¥à¤°à¥€|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€/,meridiemHour:function(e,t){return 12===e&&(e=0),"à¤°à¤¾à¤¤à¥à¤°à¥€"===t?e<4?e:e+12:"à¤¸à¤•à¤¾à¤³à¥€"===t?e:"à¤¦à¥à¤ªà¤¾à¤°à¥€"===t?e>=10?e:e+12:"à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€"===t?e+12:void 0;
},meridiem:function(e,t,n){return e<4?"à¤°à¤¾à¤¤à¥à¤°à¥€":e<10?"à¤¸à¤•à¤¾à¤³à¥€":e<17?"à¤¦à¥à¤ªà¤¾à¤°à¥€":e<20?"à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€":"à¤°à¤¾à¤¤à¥à¤°à¥€"},week:{dow:0,doy:6}}),Pa.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",
LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0;
},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",
nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",
s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,
doy:7}}),Pa.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,
meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){
return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",
lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",
mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),{1:"á",2:"á‚",3:"áƒ",
4:"á„",5:"á…",6:"á†",7:"á‡",8:"áˆ",9:"á‰",0:"á€"}),$o={"á":"1","á‚":"2","áƒ":"3","á„":"4","á…":"5","á†":"6","á‡":"7","áˆ":"8","á‰":"9","á€":"0"},Lo=(Pa.defineLocale("my",{
months:"á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬".split("_"),monthsShort:"á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®".split("_"),
weekdays:"á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±".split("_"),weekdaysShort:"á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),weekdaysMin:"á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[á€šá€”á€±.] LT [á€™á€¾á€¬]",
nextDay:"[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]",nextWeek:"dddd LT [á€™á€¾á€¬]",lastDay:"[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]",lastWeek:"[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]",sameElse:"L"},relativeTime:{future:"á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬",
past:"á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€",s:"á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º",m:"á€á€…á€ºá€™á€­á€”á€…á€º",mm:"%d á€™á€­á€”á€…á€º",h:"á€á€…á€ºá€”á€¬á€›á€®",hh:"%d á€”á€¬á€›á€®",d:"á€á€…á€ºá€›á€€á€º",dd:"%d á€›á€€á€º",M:"á€á€…á€ºá€œ",MM:"%d á€œ",y:"á€á€…á€ºá€”á€¾á€…á€º",yy:"%d á€”á€¾á€…á€º"
},preparse:function(e){return e.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g,function(e){return $o[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Do[e];
})},week:{dow:1,doy:4}}),Pa.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
weekdays:"sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),weekdaysShort:"sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),weekdaysMin:"sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{
sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i gÃ¥r kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},
relativeTime:{future:"om %s",past:"for %s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en mÃ¥ned",
MM:"%d mÃ¥neder",y:"ett Ã¥r",yy:"%d Ã¥r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"à¥§",2:"à¥¨",3:"à¥©",4:"à¥ª",5:"à¥«",6:"à¥¬",7:"à¥­",8:"à¥®",9:"à¥¯",
0:"à¥¦"}),ko={"à¥§":"1","à¥¨":"2","à¥©":"3","à¥ª":"4","à¥«":"5","à¥¬":"6","à¥­":"7","à¥®":"8","à¥¯":"9","à¥¦":"0"},xo=(Pa.defineLocale("ne",{months:"à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),
monthsShort:"à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),weekdays:"à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),
weekdaysShort:"à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),weekdaysMin:"à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),longDateFormat:{LT:"Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
LTS:"Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",LLLL:"dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡"},preparse:function(e){return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g,function(e){
return ko[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Lo[e]})},meridiemParse:/à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,meridiemHour:function(e,t){
return 12===e&&(e=0),"à¤°à¤¾à¤¤à¤¿"===t?e<4?e:e+12:"à¤¬à¤¿à¤¹à¤¾à¤¨"===t?e:"à¤¦à¤¿à¤‰à¤à¤¸à¥‹"===t?e>=10?e:e+12:"à¤¸à¤¾à¤à¤"===t?e+12:void 0},meridiem:function(e,t,n){return e<3?"à¤°à¤¾à¤¤à¤¿":e<12?"à¤¬à¤¿à¤¹à¤¾à¤¨":e<16?"à¤¦à¤¿à¤‰à¤à¤¸à¥‹":e<20?"à¤¸à¤¾à¤à¤":"à¤°à¤¾à¤¤à¤¿";
},calendar:{sameDay:"[à¤†à¤œ] LT",nextDay:"[à¤­à¥‹à¤²à¤¿] LT",nextWeek:"[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",lastDay:"[à¤¹à¤¿à¤œà¥‹] LT",lastWeek:"[à¤—à¤à¤•à¥‹] dddd[,] LT",sameElse:"L"},relativeTime:{
future:"%sà¤®à¤¾",past:"%s à¤…à¤—à¤¾à¤¡à¤¿",s:"à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£",m:"à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",mm:"%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",h:"à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",hh:"%d à¤˜à¤£à¥à¤Ÿà¤¾",d:"à¤à¤• à¤¦à¤¿à¤¨",dd:"%d à¤¦à¤¿à¤¨",M:"à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",MM:"%d à¤®à¤¹à¤¿à¤¨à¤¾",y:"à¤à¤• à¤¬à¤°à¥à¤·",
yy:"%d à¤¬à¤°à¥à¤·"},week:{dow:0,doy:6}}),"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),To="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),So=(Pa.defineLocale("nl",{
months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,t){return/-MMM-/.test(t)?To[e.month()]:xo[e.month()];
},weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",
nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",
past:"%s geleden",s:"een paar seconden",m:"Ã©Ã©n minuut",mm:"%d minuten",h:"Ã©Ã©n uur",hh:"%d uur",d:"Ã©Ã©n dag",dd:"%d dagen",M:"Ã©Ã©n maand",MM:"%d maanden",
y:"Ã©Ã©n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),Pa.defineLocale("nn",{
months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
weekdays:"sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{
sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I gÃ¥r klokka] LT",lastWeek:"[FÃ¸regÃ¥ande] dddd [klokka] LT",
sameElse:"L"},relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",
M:"ein mÃ¥nad",MM:"%d mÃ¥nader",y:"eit Ã¥r",yy:"%d Ã¥r"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),"styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_")),Yo="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_"),Co=(Pa.defineLocale("pl",{
months:function(e,t){return""===t?"("+Yo[e.month()]+"|"+So[e.month()]+")":/D MMMM/.test(t)?Yo[e.month()]:So[e.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
weekdays:"niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),weekdaysShort:"nie_pon_wt_Å›r_czw_pt_sb".split("_"),weekdaysMin:"Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DziÅ› o] LT",
nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszÅ‚Ä… niedzielÄ™ o] LT";
case 3:return"[W zeszÅ‚Ä… Å›rodÄ™ o] LT";case 6:return"[W zeszÅ‚Ä… sobotÄ™ o] LT";default:return"[W zeszÅ‚y] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",
past:"%s temu",s:"kilka sekund",m:Tr,mm:Tr,h:Tr,hh:Tr,d:"1 dzieÅ„",dd:"%d dni",M:"miesiÄ…c",MM:Tr,y:"rok",yy:Tr},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{
dow:1,doy:4}}),Pa.defineLocale("pt-br",{months:"Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
weekdays:"Domingo_Segunda-Feira_TerÃ§a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_SÃ¡bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
weekdaysMin:"Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [Ã s] HH:mm",
LLLL:"dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm"},calendar:{sameDay:"[Hoje Ã s] LT",nextDay:"[AmanhÃ£ Ã s] LT",nextWeek:"dddd [Ã s] LT",lastDay:"[Ontem Ã s] LT",
lastWeek:function(){return 0===this.day()||6===this.day()?"[Ãšltimo] dddd [Ã s] LT":"[Ãšltima] dddd [Ã s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrÃ¡s",
s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mÃªs",MM:"%d meses",y:"um ano",yy:"%d anos"},
ordinalParse:/\d{1,2}Âº/,ordinal:"%dÂº"}),Pa.defineLocale("pt",{months:"Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-Feira_TerÃ§a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_SÃ¡bado".split("_"),
weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),weekdaysMin:"Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",
LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje Ã s] LT",nextDay:"[AmanhÃ£ Ã s] LT",
nextWeek:"dddd [Ã s] LT",lastDay:"[Ontem Ã s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Ãšltimo] dddd [Ã s] LT":"[Ãšltima] dddd [Ã s] LT";
},sameElse:"L"},relativeTime:{future:"em %s",past:"hÃ¡ %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",
M:"um mÃªs",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}Âº/,ordinal:"%dÂº",week:{dow:1,doy:4}}),Pa.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),weekdays:"duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),
weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",
LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mÃ¢ine la] LT",nextWeek:"dddd [la] LT",
lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s Ã®n urmÄƒ",s:"cÃ¢teva secunde",m:"un minut",
mm:Sr,h:"o orÄƒ",hh:Sr,d:"o zi",dd:Sr,M:"o lunÄƒ",MM:Sr,y:"un an",yy:Sr},week:{dow:1,doy:7}}),[/^ÑÐ½Ð²/i,/^Ñ„ÐµÐ²/i,/^Ð¼Ð°Ñ€/i,/^Ð°Ð¿Ñ€/i,/^Ð¼Ð°[Ð¹|Ñ]/i,/^Ð¸ÑŽÐ½/i,/^Ð¸ÑŽÐ»/i,/^Ð°Ð²Ð³/i,/^ÑÐµÐ½/i,/^Ð¾ÐºÑ‚/i,/^Ð½Ð¾Ñ/i,/^Ð´ÐµÐº/i]),Eo=(Pa.defineLocale("ru",{
months:{format:"Ð¯Ð½Ð²Ð°Ñ€Ñ_Ð¤ÐµÐ²Ñ€Ð°Ð»Ñ_ÐœÐ°Ñ€Ñ‚Ð°_ÐÐ¿Ñ€ÐµÐ»Ñ_ÐœÐ°Ñ_Ð˜ÑŽÐ½Ñ_Ð˜ÑŽÐ»Ñ_ÐÐ²Ð³ÑƒÑÑ‚Ð°_Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_ÐžÐºÑ‚ÑÐ±Ñ€Ñ_ÐÐ¾ÑÐ±Ñ€Ñ_Ð”ÐµÐºÐ°Ð±Ñ€Ñ".split("_"),standalone:"Ð¯Ð½Ð²Ð°Ñ€ÑŒ_Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ_ÐœÐ°Ñ€Ñ‚_ÐÐ¿Ñ€ÐµÐ»ÑŒ_ÐœÐ°Ð¹_Ð˜ÑŽÐ½ÑŒ_Ð˜ÑŽÐ»ÑŒ_ÐÐ²Ð³ÑƒÑÑ‚_Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ_ÐÐ¾ÑÐ±Ñ€ÑŒ_Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_")
},monthsShort:{format:"ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),standalone:"ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_")
},weekdays:{standalone:"Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_Ð¡Ñ€ÐµÐ´Ð°_Ð§ÐµÑ‚Ð²ÐµÑ€Ð³_ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°_Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),format:"Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_Ð¡Ñ€ÐµÐ´Ñƒ_Ð§ÐµÑ‚Ð²ÐµÑ€Ð³_ÐŸÑÑ‚Ð½Ð¸Ñ†Ñƒ_Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"),
isFormat:/\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?\] ?dddd/},weekdaysShort:"Ð’Ñ_ÐŸÐ½_Ð’Ñ‚_Ð¡Ñ€_Ð§Ñ‚_ÐŸÑ‚_Ð¡Ð±".split("_"),weekdaysMin:"Ð’Ñ_ÐŸÐ½_Ð’Ñ‚_Ð¡Ñ€_Ð§Ñ‚_ÐŸÑ‚_Ð¡Ð±".split("_"),
monthsParse:Co,longMonthsParse:Co,shortMonthsParse:Co,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY Ð³.",LLL:"D MMMM YYYY Ð³., HH:mm",
LLLL:"dddd, D MMMM YYYY Ð³., HH:mm"},calendar:{sameDay:"[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT",nextDay:"[Ð—Ð°Ð²Ñ‚Ñ€Ð° Ð²] LT",lastDay:"[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Ð’Ð¾] dddd [Ð²] LT":"[Ð’] dddd [Ð²] LT";
switch(this.day()){case 0:return"[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd [Ð²] LT";case 1:case 2:case 4:return"[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd [Ð²] LT";case 3:case 5:case 6:return"[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd [Ð²] LT";
}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Ð’Ð¾] dddd [Ð²] LT":"[Ð’] dddd [Ð²] LT";switch(this.day()){case 0:return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd [Ð²] LT";
case 1:case 2:case 4:return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd [Ð²] LT";case 3:case 5:case 6:return"[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd [Ð²] LT"}},sameElse:"L"},relativeTime:{future:"Ñ‡ÐµÑ€ÐµÐ· %s",
past:"%s Ð½Ð°Ð·Ð°Ð´",s:"Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",m:Cr,mm:Cr,h:"Ñ‡Ð°Ñ",hh:Cr,d:"Ð´ÐµÐ½ÑŒ",dd:Cr,M:"Ð¼ÐµÑÑÑ†",MM:Cr,y:"Ð³Ð¾Ð´",yy:Cr},meridiemParse:/Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,isPM:function(e){
return/^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(e)},meridiem:function(e,t,n){return e<4?"Ð½Ð¾Ñ‡Ð¸":e<12?"ÑƒÑ‚Ñ€Ð°":e<17?"Ð´Ð½Ñ":"Ð²ÐµÑ‡ÐµÑ€Ð°"},ordinalParse:/\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,ordinal:function(e,t){
switch(t){case"M":case"d":case"DDD":return e+"-Ð¹";case"D":return e+"-Ð³Ð¾";case"w":case"W":return e+"-Ñ";default:return e}},week:{dow:1,doy:7}}),Pa.defineLocale("se",{
months:"oÄ‘Ä‘ajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅ‹omÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu".split("_"),
monthsShort:"oÄ‘Ä‘j_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov".split("_"),weekdays:"sotnabeaivi_vuossÃ¡rga_maÅ‹Å‹ebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat".split("_"),
weekdaysShort:"sotn_vuos_maÅ‹_gask_duor_bear_lÃ¡v".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",
LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",
nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geaÅ¾es",past:"maÅ‹it %s",s:"moadde sekunddat",
m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mÃ¡nnu",MM:"%d mÃ¡nut",y:"okta jahki",yy:"%d jagit"
},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),Pa.defineLocale("si",{months:"à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š".split("_"),
monthsShort:"à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·".split("_"),weekdays:"à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·".split("_"),
weekdaysShort:"à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±".split("_"),weekdaysMin:"à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™".split("_"),longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",
LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss"},calendar:{sameDay:"[à¶…à¶¯] LT[à¶§]",nextDay:"[à·„à·™à¶§] LT[à¶§]",nextWeek:"dddd LT[à¶§]",
lastDay:"[à¶Šà¶ºà·š] LT[à¶§]",lastWeek:"[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]",sameElse:"L"},relativeTime:{future:"%sà¶šà·’à¶±à·Š",past:"%sà¶šà¶§ à¶´à·™à¶»",s:"à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º",m:"à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€",mm:"à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d",
h:"à¶´à·à¶º",hh:"à¶´à·à¶º %d",d:"à¶¯à·’à¶±à¶º",dd:"à¶¯à·’à¶± %d",M:"à¶¸à·à·ƒà¶º",MM:"à¶¸à·à·ƒ %d",y:"à·€à·ƒà¶»",yy:"à·€à·ƒà¶» %d"},ordinalParse:/\d{1,2} à·€à·à¶±à·’/,ordinal:function(e){return e+" à·€à·à¶±à·’"},meridiem:function(e,t,n){
return e>11?n?"à¶´.à·€.":"à¶´à·ƒà·Š à·€à¶»à·”":n?"à¶´à·™.à·€.":"à¶´à·™à¶» à·€à¶»à·”"}}),"januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_")),Ao="jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_"),Fo=(Pa.defineLocale("sk",{
months:Eo,monthsShort:Ao,weekdays:"nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_Å¡t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_Å¡t_pi_so".split("_"),
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",
nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeÄ¾u o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";
case 4:return"[vo Å¡tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[vÄera o] LT",lastWeek:function(){switch(this.day()){
case 0:return"[minulÃº nedeÄ¾u o] LT";case 1:case 2:return"[minulÃ½] dddd [o] LT";case 3:return"[minulÃº stredu o] LT";case 4:case 5:return"[minulÃ½] dddd [o] LT";
case 6:return"[minulÃº sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:Ar,m:Ar,mm:Ar,h:Ar,hh:Ar,d:Ar,dd:Ar,M:Ar,MM:Ar,y:Ar,yy:Ar
},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),Pa.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdays:"nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),
weekdaysShort:"ned._pon._tor._sre._Äet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_Äe_pe_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",
LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){
switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:
return"[v] dddd [ob] LT"}},lastDay:"[vÄeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejÅ¡njo] [nedeljo] [ob] LT";case 3:return"[prejÅ¡njo] [sredo] [ob] LT";
case 6:return"[prejÅ¡njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejÅ¡nji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"Äez %s",past:"pred %s",
s:Fr,m:Fr,mm:Fr,h:Fr,hh:Fr,d:Fr,dd:Fr,M:Fr,MM:Fr,y:Fr,yy:Fr},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),Pa.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"),
monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"),weekdays:"E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"),
weekdaysShort:"Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_MÃ«_E_P_Sh".split("_"),meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0);
},meridiem:function(e,t,n){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"
},calendar:{sameDay:"[Sot nÃ«] LT",nextDay:"[NesÃ«r nÃ«] LT",nextWeek:"dddd [nÃ«] LT",lastDay:"[Dje nÃ«] LT",lastWeek:"dddd [e kaluar nÃ«] LT",sameElse:"L"},
relativeTime:{future:"nÃ« %s",past:"%s mÃ« parÃ«",s:"disa sekonda",m:"njÃ« minutÃ«",mm:"%d minuta",h:"njÃ« orÃ«",hh:"%d orÃ«",d:"njÃ« ditÃ«",dd:"%d ditÃ«",M:"njÃ« muaj",
MM:"%d muaj",y:"njÃ« vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{words:{m:["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚","Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],mm:["Ð¼Ð¸Ð½ÑƒÑ‚","Ð¼Ð¸Ð½ÑƒÑ‚Ðµ","Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],
h:["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚","Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],hh:["ÑÐ°Ñ‚","ÑÐ°Ñ‚Ð°","ÑÐ°Ñ‚Ð¸"],dd:["Ð´Ð°Ð½","Ð´Ð°Ð½Ð°","Ð´Ð°Ð½Ð°"],MM:["Ð¼ÐµÑÐµÑ†","Ð¼ÐµÑÐµÑ†Ð°","Ð¼ÐµÑÐµÑ†Ð¸"],yy:["Ð³Ð¾Ð´Ð¸Ð½Ð°","Ð³Ð¾Ð´Ð¸Ð½Ðµ","Ð³Ð¾Ð´Ð¸Ð½Ð°"]},correctGrammaticalCase:function(e,t){
return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,t,n){var r=Fo.words[n];return 1===n.length?t?r[0]:r[1]:e+" "+Fo.correctGrammaticalCase(e,r);
}}),jo=(Pa.defineLocale("sr-cyrl",{months:["Ñ˜Ð°Ð½ÑƒÐ°Ñ€","Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€","Ð¼Ð°Ñ€Ñ‚","Ð°Ð¿Ñ€Ð¸Ð»","Ð¼Ð°Ñ˜","Ñ˜ÑƒÐ½","Ñ˜ÑƒÐ»","Ð°Ð²Ð³ÑƒÑÑ‚","ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€","Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€","Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€","Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€"],monthsShort:["Ñ˜Ð°Ð½.","Ñ„ÐµÐ±.","Ð¼Ð°Ñ€.","Ð°Ð¿Ñ€.","Ð¼Ð°Ñ˜","Ñ˜ÑƒÐ½","Ñ˜ÑƒÐ»","Ð°Ð²Ð³.","ÑÐµÐ¿.","Ð¾ÐºÑ‚.","Ð½Ð¾Ð².","Ð´ÐµÑ†."],
weekdays:["Ð½ÐµÐ´ÐµÑ™Ð°","Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº","ÑƒÑ‚Ð¾Ñ€Ð°Ðº","ÑÑ€ÐµÐ´Ð°","Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº","Ð¿ÐµÑ‚Ð°Ðº","ÑÑƒÐ±Ð¾Ñ‚Ð°"],weekdaysShort:["Ð½ÐµÐ´.","Ð¿Ð¾Ð½.","ÑƒÑ‚Ð¾.","ÑÑ€Ðµ.","Ñ‡ÐµÑ‚.","Ð¿ÐµÑ‚.","ÑÑƒÐ±."],weekdaysMin:["Ð½Ðµ","Ð¿Ð¾","ÑƒÑ‚","ÑÑ€","Ñ‡Ðµ","Ð¿Ðµ","ÑÑƒ"],
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",
nextDay:"[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",nextWeek:function(){switch(this.day()){case 0:return"[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";case 3:return"[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";case 6:return"[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
case 1:case 2:case 4:case 5:return"[Ñƒ] dddd [Ñƒ] LT"}},lastDay:"[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",lastWeek:function(){var e=["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT","[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"];
return e[this.day()]},sameElse:"L"},relativeTime:{future:"Ð·Ð° %s",past:"Ð¿Ñ€Ðµ %s",s:"Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",m:Fo.translate,mm:Fo.translate,h:Fo.translate,hh:Fo.translate,
d:"Ð´Ð°Ð½",dd:Fo.translate,M:"Ð¼ÐµÑÐµÑ†",MM:Fo.translate,y:"Ð³Ð¾Ð´Ð¸Ð½Ñƒ",yy:Fo.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),{words:{m:["jedan minut","jedne minute"],
mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]
},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,t,n){var r=jo.words[n];return 1===n.length?t?r[0]:r[1]:e+" "+jo.correctGrammaticalCase(e,r);
}}),Po=(Pa.defineLocale("sr",{months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"],monthsShort:["jan.","feb.","mar.","apr.","maj","jun","jul","avg.","sep.","okt.","nov.","dec."],
weekdays:["nedelja","ponedeljak","utorak","sreda","Äetvrtak","petak","subota"],weekdaysShort:["ned.","pon.","uto.","sre.","Äet.","pet.","sub."],weekdaysMin:["ne","po","ut","sr","Äe","pe","su"],
longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD. MM. YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",
nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";
case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juÄe u] LT",lastWeek:function(){var e=["[proÅ¡le] [nedelje] [u] LT","[proÅ¡log] [ponedeljka] [u] LT","[proÅ¡log] [utorka] [u] LT","[proÅ¡le] [srede] [u] LT","[proÅ¡log] [Äetvrtka] [u] LT","[proÅ¡log] [petka] [u] LT","[proÅ¡le] [subote] [u] LT"];
return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:jo.translate,mm:jo.translate,h:jo.translate,hh:jo.translate,
d:"dan",dd:jo.translate,M:"mesec",MM:jo.translate,y:"godinu",yy:jo.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),Pa.defineLocale("sv",{
months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
weekdays:"sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),weekdaysShort:"sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),weekdaysMin:"sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",
nextDay:"[Imorgon] LT",lastDay:"[IgÃ¥r] LT",nextWeek:"[PÃ¥] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"fÃ¶r %s sedan",
s:"nÃ¥gra sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en mÃ¥nad",MM:"%d mÃ¥nader",y:"ett Ã¥r",yy:"%d Ã¥r"
},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var t=e%10,n=1===~~(e%100/10)?"e":1===t?"a":2===t?"a":"e";return e+n},week:{dow:1,doy:4}}),Pa.defineLocale("sw",{
months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",
nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{
future:"%s baadaye",past:"tokea %s",s:"hivi punde",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",
MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}}),{1:"à¯§",2:"à¯¨",3:"à¯©",4:"à¯ª",5:"à¯«",6:"à¯¬",7:"à¯­",8:"à¯®",9:"à¯¯",0:"à¯¦"}),Oo={"à¯§":"1","à¯¨":"2","à¯©":"3",
"à¯ª":"4","à¯«":"5","à¯¬":"6","à¯­":"7","à¯®":"8","à¯¯":"9","à¯¦":"0"},Ho=(Pa.defineLocale("ta",{months:"à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
monthsShort:"à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),weekdays:"à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),
weekdaysShort:"à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),weekdaysMin:"à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",
L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[à®‡à®©à¯à®±à¯] LT",nextDay:"[à®¨à®¾à®³à¯ˆ] LT",nextWeek:"dddd, LT",
lastDay:"[à®¨à¯‡à®±à¯à®±à¯] LT",lastWeek:"[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à®‡à®²à¯",past:"%s à®®à¯à®©à¯",s:"à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",m:"à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",
mm:"%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",h:"à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",hh:"%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",d:"à®’à®°à¯ à®¨à®¾à®³à¯",dd:"%d à®¨à®¾à®Ÿà¯à®•à®³à¯",M:"à®’à®°à¯ à®®à®¾à®¤à®®à¯",MM:"%d à®®à®¾à®¤à®™à¯à®•à®³à¯",y:"à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",yy:"%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"},ordinalParse:/\d{1,2}à®µà®¤à¯/,
ordinal:function(e){return e+"à®µà®¤à¯"},preparse:function(e){return e.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g,function(e){return Oo[e]})},postformat:function(e){return e.replace(/\d/g,function(e){
return Po[e]})},meridiemParse:/à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/,meridiem:function(e,t,n){return e<2?" à®¯à®¾à®®à®®à¯":e<6?" à®µà¯ˆà®•à®±à¯ˆ":e<10?" à®•à®¾à®²à¯ˆ":e<14?" à®¨à®£à¯à®ªà®•à®²à¯":e<18?" à®Žà®±à¯à®ªà®¾à®Ÿà¯":e<22?" à®®à®¾à®²à¯ˆ":" à®¯à®¾à®®à®®à¯";
},meridiemHour:function(e,t){return 12===e&&(e=0),"à®¯à®¾à®®à®®à¯"===t?e<2?e:e+12:"à®µà¯ˆà®•à®±à¯ˆ"===t||"à®•à®¾à®²à¯ˆ"===t?e:"à®¨à®£à¯à®ªà®•à®²à¯"===t&&e>=10?e:e+12},week:{dow:0,doy:6}}),Pa.defineLocale("te",{
months:"à°œà°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±‡_à°œà±‚à°¨à±_à°œà±‚à°²à±†à±–_à°†à°—à°¸à±à°Ÿà±_à°¸à±†à°ªà±à°Ÿà±†à°‚à°¬à°°à±_à°…à°•à±à°Ÿà±‹à°¬à°°à±_à°¨à°µà°‚à°¬à°°à±_à°¡à°¿à°¸à±†à°‚à°¬à°°à±".split("_"),monthsShort:"à°œà°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿._à°®à±‡_à°œà±‚à°¨à±_à°œà±‚à°²à±†à±–_à°†à°—._à°¸à±†à°ªà±._à°…à°•à±à°Ÿà±‹._à°¨à°µ._à°¡à°¿à°¸à±†.".split("_"),
weekdays:"à°†à°¦à°¿à°µà°¾à°°à°‚_à°¸à±‹à°®à°µà°¾à°°à°‚_à°®à°‚à°—à°³à°µà°¾à°°à°‚_à°¬à±à°§à°µà°¾à°°à°‚_à°—à±à°°à±à°µà°¾à°°à°‚_à°¶à±à°•à±à°°à°µà°¾à°°à°‚_à°¶à°¨à°¿à°µà°¾à°°à°‚".split("_"),weekdaysShort:"à°†à°¦à°¿_à°¸à±‹à°®_à°®à°‚à°—à°³_à°¬à±à°§_à°—à±à°°à±_à°¶à±à°•à±à°°_à°¶à°¨à°¿".split("_"),weekdaysMin:"à°†_à°¸à±‹_à°®à°‚_à°¬à±_à°—à±_à°¶à±_à°¶".split("_"),
longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[à°¨à±‡à°¡à±] LT",
nextDay:"[à°°à±‡à°ªà±] LT",nextWeek:"dddd, LT",lastDay:"[à°¨à°¿à°¨à±à°¨] LT",lastWeek:"[à°—à°¤] dddd, LT",sameElse:"L"},relativeTime:{future:"%s à°²à±‹",past:"%s à°•à±à°°à°¿à°¤à°‚",s:"à°•à±Šà°¨à±à°¨à°¿ à°•à±à°·à°£à°¾à°²à±",
m:"à°’à°• à°¨à°¿à°®à°¿à°·à°‚",mm:"%d à°¨à°¿à°®à°¿à°·à°¾à°²à±",h:"à°’à°• à°—à°‚à°Ÿ",hh:"%d à°—à°‚à°Ÿà°²à±",d:"à°’à°• à°°à±‹à°œà±",dd:"%d à°°à±‹à°œà±à°²à±",M:"à°’à°• à°¨à±†à°²",MM:"%d à°¨à±†à°²à°²à±",y:"à°’à°• à°¸à°‚à°µà°¤à±à°¸à°°à°‚",yy:"%d à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°²à±"},ordinalParse:/\d{1,2}à°µ/,
ordinal:"%dà°µ",meridiemParse:/à°°à°¾à°¤à±à°°à°¿|à°‰à°¦à°¯à°‚|à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚|à°¸à°¾à°¯à°‚à°¤à±à°°à°‚/,meridiemHour:function(e,t){return 12===e&&(e=0),"à°°à°¾à°¤à±à°°à°¿"===t?e<4?e:e+12:"à°‰à°¦à°¯à°‚"===t?e:"à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚"===t?e>=10?e:e+12:"à°¸à°¾à°¯à°‚à°¤à±à°°à°‚"===t?e+12:void 0;
},meridiem:function(e,t,n){return e<4?"à°°à°¾à°¤à±à°°à°¿":e<10?"à°‰à°¦à°¯à°‚":e<17?"à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚":e<20?"à°¸à°¾à°¯à°‚à°¤à±à°°à°‚":"à°°à°¾à°¤à±à°°à°¿"},week:{dow:0,doy:6}}),Pa.defineLocale("th",{months:"à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),
monthsShort:"à¸¡à¸à¸£à¸²_à¸à¸¸à¸¡à¸ à¸²_à¸¡à¸µà¸™à¸²_à¹€à¸¡à¸©à¸²_à¸žà¸¤à¸©à¸ à¸²_à¸¡à¸´à¸–à¸¸à¸™à¸²_à¸à¸£à¸à¸Žà¸²_à¸ªà¸´à¸‡à¸«à¸²_à¸à¸±à¸™à¸¢à¸²_à¸•à¸¸à¸¥à¸²_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²_à¸˜à¸±à¸™à¸§à¸²".split("_"),weekdays:"à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
weekdaysShort:"à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),weekdaysMin:"à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),longDateFormat:{LT:"H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ",
LTS:"H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ s à¸§à¸´à¸™à¸²à¸—à¸µ",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY à¹€à¸§à¸¥à¸² H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ",LLLL:"à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ"
},meridiemParse:/à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡|à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡/,isPM:function(e){return"à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"===e},meridiem:function(e,t,n){return e<12?"à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡":"à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"},calendar:{
sameDay:"[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",nextDay:"[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",nextWeek:"dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",lastDay:"[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",lastWeek:"[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",
sameElse:"L"},relativeTime:{future:"à¸­à¸µà¸ %s",past:"%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",s:"à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",m:"1 à¸™à¸²à¸—à¸µ",mm:"%d à¸™à¸²à¸—à¸µ",h:"1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",hh:"%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",d:"1 à¸§à¸±à¸™",dd:"%d à¸§à¸±à¸™",
M:"1 à¹€à¸”à¸·à¸­à¸™",MM:"%d à¹€à¸”à¸·à¸­à¸™",y:"1 à¸›à¸µ",yy:"%d à¸›à¸µ"}}),Pa.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"
},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"
},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",
dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),"pagh_waâ€™_chaâ€™_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")),Ro=(Pa.defineLocale("tlh",{
months:"teraâ€™ jar waâ€™_teraâ€™ jar chaâ€™_teraâ€™ jar wej_teraâ€™ jar loS_teraâ€™ jar vagh_teraâ€™ jar jav_teraâ€™ jar Soch_teraâ€™ jar chorgh_teraâ€™ jar Hut_teraâ€™ jar waâ€™maH_teraâ€™ jar waâ€™maH waâ€™_teraâ€™ jar waâ€™maH chaâ€™".split("_"),
monthsShort:"jar waâ€™_jar chaâ€™_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar waâ€™maH_jar waâ€™maH waâ€™_jar waâ€™maH chaâ€™".split("_"),weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",
nextDay:"[waâ€™leS] LT",nextWeek:"LLL",lastDay:"[waâ€™Huâ€™] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:jr,past:Pr,s:"puS lup",m:"waâ€™ tup",mm:Or,h:"waâ€™ rep",
hh:Or,d:"waâ€™ jaj",dd:Or,M:"waâ€™ jar",MM:Or,y:"waâ€™ DIS",yy:Or},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"'inci",5:"'inci",8:"'inci",
70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'Ã¼ncÃ¼",4:"'Ã¼ncÃ¼",100:"'Ã¼ncÃ¼",6:"'ncÄ±",9:"'uncu",10:"'uncu",30:"'uncu",60:"'Ä±ncÄ±",90:"'Ä±ncÄ±"
}),Io=(Pa.defineLocale("tr",{months:"Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),monthsShort:"Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),
weekdays:"Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugÃ¼n saat] LT",
nextDay:"[yarÄ±n saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dÃ¼n] LT",lastWeek:"[geÃ§en hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",
past:"%s Ã¶nce",s:"birkaÃ§ saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gÃ¼n",dd:"%d gÃ¼n",M:"bir ay",MM:"%d ay",y:"bir yÄ±l",yy:"%d yÄ±l"
},ordinalParse:/\d{1,2}'(inci|nci|Ã¼ncÃ¼|ncÄ±|uncu|Ä±ncÄ±)/,ordinal:function(e){if(0===e)return e+"'Ä±ncÄ±";var t=e%10,n=e%100-t,r=e>=100?100:null;return e+(Ro[t]||Ro[n]||Ro[r]);
},week:{dow:1,doy:7}}),Pa.defineLocale("tzl",{months:"Januar_Fevraglh_MarÃ§_AvrÃ¯u_Mai_GÃ¼n_Julia_Guscht_Setemvar_ListopÃ¤ts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_GÃ¼n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
weekdays:"SÃºladi_LÃºneÃ§i_Maitzi_MÃ¡rcuri_XhÃºadi_ViÃ©nerÃ§i_SÃ¡turi".split("_"),weekdaysShort:"SÃºl_LÃºn_Mai_MÃ¡r_XhÃº_ViÃ©_SÃ¡t".split("_"),weekdaysMin:"SÃº_LÃº_Ma_MÃ¡_Xh_Vi_SÃ¡".split("_"),
longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"
},meridiem:function(e,t,n){return e>11?n?"d'o":"D'O":n?"d'a":"D'A"},calendar:{sameDay:"[oxhi Ã ] LT",nextDay:"[demÃ  Ã ] LT",nextWeek:"dddd [Ã ] LT",lastDay:"[ieiri Ã ] LT",
lastWeek:"[sÃ¼r el] dddd [lasteu Ã ] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:Rr,m:Rr,mm:Rr,h:Rr,hh:Rr,d:Rr,dd:Rr,M:Rr,MM:Rr,y:Rr,
yy:Rr},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),Pa.defineLocale("tzm-latn",{months:"innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
monthsShort:"innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),longDateFormat:{
LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",
nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuá¸",
mm:"%d minuá¸",h:"saÉ›a",hh:"%d tassaÉ›in",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),Pa.defineLocale("tzm",{
months:"âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),monthsShort:"âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
weekdays:"â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),weekdaysShort:"â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),weekdaysMin:"â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[â´°âµ™â´·âµ… â´´] LT",
nextDay:"[â´°âµ™â´½â´° â´´] LT",nextWeek:"dddd [â´´] LT",lastDay:"[â´°âµšâ´°âµâµœ â´´] LT",lastWeek:"dddd [â´´] LT",sameElse:"L"},relativeTime:{future:"â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s",past:"âµ¢â´°âµ %s",
s:"âµ‰âµŽâµ‰â´½",m:"âµŽâµ‰âµâµ“â´º",mm:"%d âµŽâµ‰âµâµ“â´º",h:"âµ™â´°âµ„â´°",hh:"%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ",d:"â´°âµ™âµ™",dd:"%d oâµ™âµ™â´°âµ",M:"â´°âµ¢oâµ“âµ”",MM:"%d âµ‰âµ¢âµ¢âµ‰âµ”âµ",y:"â´°âµ™â´³â´°âµ™",yy:"%d âµ‰âµ™â´³â´°âµ™âµ"},week:{dow:6,doy:12}
}),Pa.defineLocale("uk",{months:{format:"ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"),standalone:"ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_")
},monthsShort:"ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),weekdays:Ur,weekdaysShort:"Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),weekdaysMin:"Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY Ñ€.",LLL:"D MMMM YYYY Ñ€., HH:mm",LLLL:"dddd, D MMMM YYYY Ñ€., HH:mm"},calendar:{
sameDay:Br("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),nextDay:Br("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),lastDay:Br("[Ð’Ñ‡Ð¾Ñ€Ð° "),nextWeek:Br("[Ð£] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:
case 6:return Br("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);case 1:case 2:case 4:return Br("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"Ð·Ð° %s",
past:"%s Ñ‚Ð¾Ð¼Ñƒ",s:"Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",m:Nr,mm:Nr,h:"Ð³Ð¾Ð´Ð¸Ð½Ñƒ",hh:Nr,d:"Ð´ÐµÐ½ÑŒ",dd:Nr,M:"Ð¼Ñ–ÑÑÑ†ÑŒ",MM:Nr,y:"Ñ€Ñ–Ðº",yy:Nr},meridiemParse:/Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,isPM:function(e){
return/^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(e)},meridiem:function(e,t,n){return e<4?"Ð½Ð¾Ñ‡Ñ–":e<12?"Ñ€Ð°Ð½ÐºÑƒ":e<17?"Ð´Ð½Ñ":"Ð²ÐµÑ‡Ð¾Ñ€Ð°"},ordinalParse:/\d{1,2}-(Ð¹|Ð³Ð¾)/,ordinal:function(e,t){
switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-Ð¹";case"D":return e+"-Ð³Ð¾";default:return e}},week:{dow:1,doy:7}}),Pa.defineLocale("uz",{
months:"ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),monthsShort:"ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
weekdays:"Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"),weekdaysShort:"Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"),weekdaysMin:"Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"),
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
nextDay:"[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]",nextWeek:"dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",lastDay:"[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",lastWeek:"[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",sameElse:"L"},
relativeTime:{future:"Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°",past:"Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½",s:"Ñ„ÑƒÑ€ÑÐ°Ñ‚",m:"Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°",mm:"%d Ð´Ð°ÐºÐ¸ÐºÐ°",h:"Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚",hh:"%d ÑÐ¾Ð°Ñ‚",d:"Ð±Ð¸Ñ€ ÐºÑƒÐ½",dd:"%d ÐºÑƒÐ½",
M:"Ð±Ð¸Ñ€ Ð¾Ð¹",MM:"%d Ð¾Ð¹",y:"Ð±Ð¸Ñ€ Ð¹Ð¸Ð»",yy:"%d Ð¹Ð¸Ð»"},week:{dow:1,doy:7}}),Pa.defineLocale("vi",{months:"thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),
monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),weekdays:"chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),
weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",
LL:"D MMMM [nÄƒm] YYYY",LLL:"D MMMM [nÄƒm] YYYY HH:mm",LLLL:"dddd, D MMMM [nÄƒm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"
},calendar:{sameDay:"[HÃ´m nay lÃºc] LT",nextDay:"[NgÃ y mai lÃºc] LT",nextWeek:"dddd [tuáº§n tá»›i lÃºc] LT",lastDay:"[HÃ´m qua lÃºc] LT",lastWeek:"dddd [tuáº§n rá»“i lÃºc] LT",
sameElse:"L"},relativeTime:{future:"%s tá»›i",past:"%s trÆ°á»›c",s:"vÃ i giÃ¢y",m:"má»™t phÃºt",mm:"%d phÃºt",h:"má»™t giá»",hh:"%d giá»",d:"má»™t ngÃ y",dd:"%d ngÃ y",M:"má»™t thÃ¡ng",
MM:"%d thÃ¡ng",y:"má»™t nÄƒm",yy:"%d nÄƒm"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),Pa.defineLocale("zh-cn",{months:"ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
monthsShort:"1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),weekdays:"æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),weekdaysShort:"å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),
weekdaysMin:"æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),longDateFormat:{LT:"Ahç‚¹mmåˆ†",LTS:"Ahç‚¹måˆ†sç§’",L:"YYYY-MM-DD",LL:"YYYYå¹´MMMDæ—¥",LLL:"YYYYå¹´MMMDæ—¥Ahç‚¹mmåˆ†",LLLL:"YYYYå¹´MMMDæ—¥ddddAhç‚¹mmåˆ†",
l:"YYYY-MM-DD",ll:"YYYYå¹´MMMDæ—¥",lll:"YYYYå¹´MMMDæ—¥Ahç‚¹mmåˆ†",llll:"YYYYå¹´MMMDæ—¥ddddAhç‚¹mmåˆ†"},meridiemParse:/å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,meridiemHour:function(e,t){return 12===e&&(e=0),
"å‡Œæ™¨"===t||"æ—©ä¸Š"===t||"ä¸Šåˆ"===t?e:"ä¸‹åˆ"===t||"æ™šä¸Š"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,n){var r=100*e+t;return r<600?"å‡Œæ™¨":r<900?"æ—©ä¸Š":r<1130?"ä¸Šåˆ":r<1230?"ä¸­åˆ":r<1800?"ä¸‹åˆ":"æ™šä¸Š";
},calendar:{sameDay:function(){return 0===this.minutes()?"[ä»Šå¤©]Ah[ç‚¹æ•´]":"[ä»Šå¤©]LT"},nextDay:function(){return 0===this.minutes()?"[æ˜Žå¤©]Ah[ç‚¹æ•´]":"[æ˜Žå¤©]LT"},lastDay:function(){
return 0===this.minutes()?"[æ˜¨å¤©]Ah[ç‚¹æ•´]":"[æ˜¨å¤©]LT"},nextWeek:function(){var e,t;return e=Pa().startOf("week"),t=this.unix()-e.unix()>=604800?"[ä¸‹]":"[æœ¬]",0===this.minutes()?t+"dddAhç‚¹æ•´":t+"dddAhç‚¹mm";
},lastWeek:function(){var e,t;return e=Pa().startOf("week"),t=this.unix()<e.unix()?"[ä¸Š]":"[æœ¬]",0===this.minutes()?t+"dddAhç‚¹æ•´":t+"dddAhç‚¹mm"},sameElse:"LL"
},ordinalParse:/\d{1,2}(æ—¥|æœˆ|å‘¨)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"æ—¥";case"M":return e+"æœˆ";case"w":case"W":return e+"å‘¨";
default:return e}},relativeTime:{future:"%så†…",past:"%så‰",s:"å‡ ç§’",m:"1 åˆ†é’Ÿ",mm:"%d åˆ†é’Ÿ",h:"1 å°æ—¶",hh:"%d å°æ—¶",d:"1 å¤©",dd:"%d å¤©",M:"1 ä¸ªæœˆ",MM:"%d ä¸ªæœˆ",y:"1 å¹´",yy:"%d å¹´"
},week:{dow:1,doy:4}}),Pa.defineLocale("zh-tw",{months:"ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),monthsShort:"1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
weekdays:"æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),weekdaysShort:"é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),weekdaysMin:"æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),longDateFormat:{
LT:"Ahé»žmmåˆ†",LTS:"Ahé»žmåˆ†sç§’",L:"YYYYå¹´MMMDæ—¥",LL:"YYYYå¹´MMMDæ—¥",LLL:"YYYYå¹´MMMDæ—¥Ahé»žmmåˆ†",LLLL:"YYYYå¹´MMMDæ—¥ddddAhé»žmmåˆ†",l:"YYYYå¹´MMMDæ—¥",ll:"YYYYå¹´MMMDæ—¥",lll:"YYYYå¹´MMMDæ—¥Ahé»žmmåˆ†",
llll:"YYYYå¹´MMMDæ—¥ddddAhé»žmmåˆ†"},meridiemParse:/æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,meridiemHour:function(e,t){return 12===e&&(e=0),"æ—©ä¸Š"===t||"ä¸Šåˆ"===t?e:"ä¸­åˆ"===t?e>=11?e:e+12:"ä¸‹åˆ"===t||"æ™šä¸Š"===t?e+12:void 0;
},meridiem:function(e,t,n){var r=100*e+t;return r<900?"æ—©ä¸Š":r<1130?"ä¸Šåˆ":r<1230?"ä¸­åˆ":r<1800?"ä¸‹åˆ":"æ™šä¸Š"},calendar:{sameDay:"[ä»Šå¤©]LT",nextDay:"[æ˜Žå¤©]LT",nextWeek:"[ä¸‹]ddddLT",
lastDay:"[æ˜¨å¤©]LT",lastWeek:"[ä¸Š]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(æ—¥|æœˆ|é€±)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"æ—¥";
case"M":return e+"æœˆ";case"w":case"W":return e+"é€±";default:return e}},relativeTime:{future:"%så…§",past:"%så‰",s:"å¹¾ç§’",m:"ä¸€åˆ†é˜",mm:"%dåˆ†é˜",h:"ä¸€å°æ™‚",hh:"%då°æ™‚",d:"ä¸€å¤©",
dd:"%då¤©",M:"ä¸€å€‹æœˆ",MM:"%då€‹æœˆ",y:"ä¸€å¹´",yy:"%då¹´"}}),Pa);return Io.locale("en"),Io}),define("util/moment_config",["moment"],function(e){"use strict";e.defineLocale("sw",{
months:"Junery_FÄ›Ä›brÃ¸oary'_Merch'_AprÄ›el'_May BORK'_JÃ¸onÄ›Ä›'_JÃ¸oly'_AÃ¸ogÃ¸ost'_SÄ›Ä›ptÄ›Ä›mbÄ›Ä›r'_OctobÄ›Ä›r'_NofembÄ›Ä›r'_DÄ›Ä›cÄ›Ä›mbÄ›Ä›r'".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
weekdays:"SÃ¸onday'_Monday BORK'_TÃ¸oesday'_WÄ›Ä›dnÄ›Ä›sday'_ThÃ¸orsday'_FrÄ›eday'_SetÃ¸orday'".split("_"),weekdaysMin:"SÃ¸_Mo_TÃ¸_WÄ›_TÃ¸_FÄ›_Sa".split("_"),calendar:{
sameDay:"[TÃ¸day BORK' at BORK'] LT",sameElse:"L",nextDay:"[TÃ¸omarrÃ¸ at BORK'] LT",nextWeek:"dddd [um] LT",lastDay:"[YesteÄ›rday at BORK'.] LT",lastWeek:"[l...] dddd [um] LT"
},relativeTime:{future:"i. %s",past:"ago BORK' %s",s:"a fÄ›ew sÄ›Ä›conds'",m:"One BORK' MÄ›enÃ¸otÄ›Ä›",mm:"%d Months BORK'",h:"One BORK'  HoÃ¸or",hh:"%d HoÃ¸ors",
d:"One BOKR'  Dey",dd:e.number+" Deys'",M:"One BORK'  Mont'",MM:e.number+" Months BORK'",y:"ONE BORK' YÄ›Ä›ar'",yy:e.number+" YÄ›Ä›ars'"},ordinal:"%d.",week:{
dow:1,doy:4}}),e.defineLocale("dt",{months:"J......_F......_M...._A...._M.._J..._J..._A....._S........_O......_N......._D.......".split("_"),monthsShort:"J.._F.._M.._A.._M.._J.._J.._A.._S.._O.._N.._D..".split("_"),
weekdays:"S......_M....._T......_W........_T......._F....._S.......".split("_"),weekdaysShort:"S.._M.._D.._M.._D.._F.._S..".split("_"),weekdaysMin:"S._M._D._M._D._F._S.".split("_"),
calendar:{sameDay:"[T.... a.] LT",sameElse:"L",nextDay:"[T....... a.] LT",nextWeek:"dddd [um] LT",lastDay:"[Y........ a.] LT",lastWeek:"[l...] dddd [um] LT"
},relativeTime:{future:"i. %s",past:"a.. %s",s:"a f.. s......",m:"O.. M.....",mm:"%d M......",h:"O.. H...",hh:"%d H....",d:"O.. D..",dd:e.number+" D...",
M:"O.. M....",MM:e.number+" Months",y:"O.. Y...",yy:e.number+" Y...."},ordinal:"%d.",week:{dow:1,doy:4}})}),function(e,t){"use strict";function n(e,t,n){
if(!e)throw he("areq","Argument '{0}' is {1}",t||"?",n||"required");return e}function r(e,t){return e||t?e?t?(U(e)&&(e=e.join(" ")),U(t)&&(t=t.join(" ")),
e+" "+t):e:t:""}function i(e){var t={};return e&&(e.to||e.from)&&(t.to=e.to,t.from=e.from),t}function a(e,t,n){var r="";return e=U(e)?e:e&&B(e)&&e.length?e.split(/\s+/):[],
N(e,function(e,i){e&&e.length>0&&(r+=i>0?" ":"",r+=n?t+e:e+t)}),r}function o(e,t){var n=e.indexOf(t);t>=0&&e.splice(n,1)}function s(e){if(e instanceof I)switch(e.length){
case 0:return[];case 1:if(e[0].nodeType===J)return e;break;default:return I(u(e))}if(e.nodeType===J)return I(e)}function u(e){if(!e[0])return e;for(var t=0;t<e.length;t++){
var n=e[t];if(n.nodeType==J)return n}}function l(e,t,n){N(t,function(t){e.addClass(t,n)})}function c(e,t,n){N(t,function(t){e.removeClass(t,n)})}function d(e){
return function(t,n){n.addClass&&(l(e,t,n.addClass),n.addClass=null),n.removeClass&&(c(e,t,n.removeClass),n.removeClass=null)}}function f(e){if(e=e||{},
!e.$$prepared){var t=e.domOperation||O;e.domOperation=function(){e.$$domOperationFired=!0,t(),t=O},e.$$prepared=!0}return e}function p(e,t){m(e,t),h(e,t);
}function m(e,t){t.from&&(e.css(t.from),t.from=null)}function h(e,t){t.to&&(e.css(t.to),t.to=null)}function _(e,t,n){var r=t.options||{},i=n.options||{},a=(r.addClass||"")+" "+(i.addClass||""),o=(r.removeClass||"")+" "+(i.removeClass||""),s=g(e.attr("class"),a,o);
i.preparationClasses&&(r.preparationClasses=$(i.preparationClasses,r.preparationClasses),delete i.preparationClasses);var u=r.domOperation!==O?r.domOperation:null;
return R(r,i),u&&(r.domOperation=u),s.addClass?r.addClass=s.addClass:r.addClass=null,s.removeClass?r.removeClass=s.removeClass:r.removeClass=null,t.addClass=r.addClass,
t.removeClass=r.removeClass,r}function g(e,t,n){function r(e){B(e)&&(e=e.split(" "));var t={};return N(e,function(e){e.length&&(t[e]=!0)}),t}var i=1,a=-1,o={};
e=r(e),t=r(t),N(t,function(e,t){o[t]=i}),n=r(n),N(n,function(e,t){o[t]=o[t]===i?null:a});var s={addClass:"",removeClass:""};return N(o,function(t,n){var r,o;
t===i?(r="addClass",o=!e[n]):t===a&&(r="removeClass",o=e[n]),o&&(s[r].length&&(s[r]+=" "),s[r]+=n)}),s}function v(e){return e instanceof t.element?e[0]:e;
}function y(e,t,n){var r="";t&&(r=a(t,Z,!0)),n.addClass&&(r=$(r,a(n.addClass,X))),n.removeClass&&(r=$(r,a(n.removeClass,K))),r.length&&(n.preparationClasses=r,
e.addClass(r))}function b(e,t){t.preparationClasses&&(e.removeClass(t.preparationClasses),t.preparationClasses=null),t.activeClasses&&(e.removeClass(t.activeClasses),
t.activeClasses=null)}function w(e,t){var n=t?"-"+t+"s":"";return D(e,[pe,n]),[pe,n]}function M(e,t){var n=t?"paused":"",r=j+le;return D(e,[r,n]),[r,n];
}function D(e,t){var n=t[0],r=t[1];e.style[n]=r}function $(e,t){return e?t?e+" "+t:e:t}function L(e){return[fe,e+"s"]}function k(e,t){var n=t?de:pe;return[n,e+"s"];
}function x(e,t,n){var r=Object.create(null),i=e.getComputedStyle(t)||{};return N(n,function(e,t){var n=i[e];if(n){var a=n.charAt(0);("-"===a||"+"===a||a>=0)&&(n=T(n)),
0===n&&(n=null),r[t]=n}}),r}function T(e){var t=0,n=e.split(/\s*,\s*/);return N(n,function(e){"s"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),
e=parseFloat(e)||0,t=t?Math.max(e,t):e}),t}function S(e){return 0===e||null!=e}function Y(e,t){var n=A,r=e+"s";return t?n+=ie:r+=" linear all",[n,r]}function C(){
var e=Object.create(null);return{flush:function(){e=Object.create(null)},count:function(t){var n=e[t];return n?n.total:0},get:function(t){var n=e[t];return n&&n.value;
},put:function(t,n){e[t]?e[t].total++:e[t]={total:1,value:n}}}}function E(e,t,n){N(n,function(n){e[n]=q(e[n])?e[n]:t.style.getPropertyValue(n)})}var A,F,j,P,O=t.noop,H=t.copy,R=t.extend,I=t.element,N=t.forEach,U=t.isArray,B=t.isString,W=t.isObject,z=t.isUndefined,q=t.isDefined,V=t.isFunction,G=t.isElement,J=1,X="-add",K="-remove",Z="ng-",Q="-active",ee="-prepare",te="ng-animate",ne="$$ngAnimateChildren",re="";
z(e.ontransitionend)&&q(e.onwebkittransitionend)?(re="-webkit-",A="WebkitTransition",F="webkitTransitionEnd transitionend"):(A="transition",F="transitionend"),
z(e.onanimationend)&&q(e.onwebkitanimationend)?(re="-webkit-",j="WebkitAnimation",P="webkitAnimationEnd animationend"):(j="animation",P="animationend");
var ie="Duration",ae="Property",oe="Delay",se="TimingFunction",ue="IterationCount",le="PlayState",ce=9999,de=j+oe,fe=j+ie,pe=A+oe,me=A+ie,he=t.$$minErr("ng"),_e=["$$rAF",function(e){
function t(e){r=r.concat(e),n()}function n(){if(r.length){for(var t=r.shift(),a=0;a<t.length;a++)t[a]();i||e(function(){i||n()})}}var r,i;return r=t.queue=[],
t.waitUntilQuiet=function(t){i&&i(),i=e(function(){i=null,t(),n()})},t}],ge=["$interpolate",function(e){return{link:function(n,r,i){function a(e){e="on"===e||"true"===e,
r.data(ne,e)}var o=i.ngAnimateChildren;t.isString(o)&&0===o.length?r.data(ne,!0):(a(e(o)(n)),i.$observe("ngAnimateChildren",a))}}}],ve="$$animateCss",ye=1e3,be=3,we=1.5,Me={
transitionDuration:me,transitionDelay:pe,transitionProperty:A+ae,animationDuration:fe,animationDelay:de,animationIterationCount:j+ue},De={transitionDuration:me,
transitionDelay:pe,animationDuration:fe,animationDelay:de},$e=["$animateProvider",function(e){var t=C(),n=C();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(e,r,s,u,l,c,_,g){
function y(e,t){var n="$$ngAnimateParentKey",r=e.parentNode,i=r[n]||(r[n]=++I);return i+"-"+e.getAttribute("class")+"-"+t}function b(n,r,i,a){var o=t.get(i);
return o||(o=x(e,n,a),"infinite"===o.animationIterationCount&&(o.animationIterationCount=1)),t.put(i,o),o}function $(i,o,s,u){var l;if(t.count(s)>0&&(l=n.get(s),
!l)){var c=a(o,"-stagger");r.addClass(i,c),l=x(e,i,u),l.animationDuration=Math.max(l.animationDuration,0),l.transitionDuration=Math.max(l.transitionDuration,0),
r.removeClass(i,c),n.put(s,l)}return l||{}}function T(e){B.push(e),_.waitUntilQuiet(function(){t.flush(),n.flush();for(var e=l(),r=0;r<B.length;r++)B[r](e);
B.length=0})}function C(e,t,n){var r=b(e,t,n,Me),i=r.animationDelay,a=r.transitionDelay;return r.maxDelay=i&&a?Math.max(i,a):i||a,r.maxDuration=Math.max(r.animationDuration*r.animationIterationCount,r.transitionDuration),
r}var R=d(r),I=0,B=[];return function(e,n){function l(){_()}function d(){_(!0)}function _(t){if(!(V||J&&G)){V=!0,G=!1,W.$$skipPreparationClasses||r.removeClass(e,Me),
r.removeClass(e,Le),M(q,!1),w(q,!1),N(le,function(e){q.style[e[0]]=""}),R(e,W),p(e,W),Object.keys(z).length&&N(z,function(e,t){e?q.style.setProperty(t,e):q.style.removeProperty(t);
}),W.onDone&&W.onDone(),pe&&pe.length&&e.off(pe.join(" "),I);var n=e.data(ve);n&&(u.cancel(n[0].timer),e.removeData(ve)),ee&&ee.complete(!t)}}function b(e){
Re.blockTransition&&w(q,e),Re.blockKeyframeAnimation&&M(q,!!e)}function x(){return ee=new s({end:l,cancel:d}),T(O),_(),{$$willAnimate:!1,start:function(){
return ee},end:l}}function I(e){e.stopPropagation();var t=e.originalEvent||e,n=t.$manualTimeStamp||Date.now(),r=parseFloat(t.elapsedTime.toFixed(be));Math.max(n-ue,0)>=re&&r>=ie&&(J=!0,
_())}function B(){function t(){if(!V){if(b(!1),N(le,function(e){var t=e[0],n=e[1];q.style[t]=n}),R(e,W),r.addClass(e,Le),Re.recalculateTimingStyles){if($e=q.className+" "+Me,
Te=y(q,$e),Oe=C(q,$e,Te),He=Oe.maxDelay,ne=Math.max(He,0),ie=Oe.maxDuration,0===ie)return void _();Re.hasTransitions=Oe.transitionDuration>0,Re.hasAnimations=Oe.animationDuration>0;
}if(Re.applyAnimationDelay&&(He="boolean"!=typeof W.delay&&S(W.delay)?parseFloat(W.delay):He,ne=Math.max(He,0),Oe.animationDelay=He,Ie=k(He,!0),le.push(Ie),
q.style[Ie[0]]=Ie[1]),re=ne*ye,oe=ie*ye,W.easing){var t,i=W.easing;Re.hasTransitions&&(t=A+se,le.push([t,i]),q.style[t]=i),Re.hasAnimations&&(t=j+se,le.push([t,i]),
q.style[t]=i)}Oe.transitionDuration&&pe.push(F),Oe.animationDuration&&pe.push(P),ue=Date.now();var a=re+we*oe,o=ue+a,s=e.data(ve)||[],l=!0;if(s.length){
var c=s[0];l=o>c.expectedEndTime,l?u.cancel(c.timer):s.push(_)}if(l){var d=u(n,a,!1);s[0]={timer:d,expectedEndTime:o},s.push(_),e.data(ve,s)}pe.length&&e.on(pe.join(" "),I),
W.to&&(W.cleanupStyles&&E(z,q,Object.keys(W.to)),h(e,W))}}function n(){var t=e.data(ve);if(t){for(var n=1;n<t.length;n++)t[n]();e.removeData(ve)}}if(!V){
if(!q.parentNode)return void _();var i=function(e){if(J)G&&e&&(G=!1,_());else if(G=!e,Oe.animationDuration){var t=M(q,G);G?le.push(t):o(le,t)}},a=je>0&&(Oe.transitionDuration&&0===Se.transitionDuration||Oe.animationDuration&&0===Se.animationDuration)&&Math.max(Se.animationDelay,Se.transitionDelay);
a?u(t,Math.floor(a*je*ye),!1):t(),te.resume=function(){i(!0)},te.pause=function(){i(!1)}}}var W=n||{};W.$$prepared||(W=f(H(W)));var z={},q=v(e);if(!q||!q.parentNode||!g.enabled())return x();
var V,G,J,ee,te,ne,re,ie,oe,ue,le=[],de=e.attr("class"),fe=i(W),pe=[];if(0===W.duration||!c.animations&&!c.transitions)return x();var me=W.event&&U(W.event)?W.event.join(" "):W.event,he=me&&W.structural,_e="",ge="";
he?_e=a(me,Z,!0):me&&(_e=me),W.addClass&&(ge+=a(W.addClass,X)),W.removeClass&&(ge.length&&(ge+=" "),ge+=a(W.removeClass,K)),W.applyClassesEarly&&ge.length&&R(e,W);
var Me=[_e,ge].join(" ").trim(),$e=de+" "+Me,Le=a(Me,Q),ke=fe.to&&Object.keys(fe.to).length>0,xe=(W.keyframeStyle||"").length>0;if(!xe&&!ke&&!Me)return x();
var Te,Se;if(W.stagger>0){var Ye=parseFloat(W.stagger);Se={transitionDelay:Ye,animationDelay:Ye,transitionDuration:0,animationDuration:0}}else Te=y(q,$e),
Se=$(q,Me,Te,De);W.$$skipPreparationClasses||r.addClass(e,Me);var Ce;if(W.transitionStyle){var Ee=[A,W.transitionStyle];D(q,Ee),le.push(Ee)}if(W.duration>=0){
Ce=q.style[A].length>0;var Ae=Y(W.duration,Ce);D(q,Ae),le.push(Ae)}if(W.keyframeStyle){var Fe=[j,W.keyframeStyle];D(q,Fe),le.push(Fe)}var je=Se?W.staggerIndex>=0?W.staggerIndex:t.count(Te):0,Pe=0===je;
Pe&&!W.skipBlocking&&w(q,ce);var Oe=C(q,$e,Te),He=Oe.maxDelay;ne=Math.max(He,0),ie=Oe.maxDuration;var Re={};if(Re.hasTransitions=Oe.transitionDuration>0,
Re.hasAnimations=Oe.animationDuration>0,Re.hasTransitionAll=Re.hasTransitions&&"all"==Oe.transitionProperty,Re.applyTransitionDuration=ke&&(Re.hasTransitions&&!Re.hasTransitionAll||Re.hasAnimations&&!Re.hasTransitions),
Re.applyAnimationDuration=W.duration&&Re.hasAnimations,Re.applyTransitionDelay=S(W.delay)&&(Re.applyTransitionDuration||Re.hasTransitions),Re.applyAnimationDelay=S(W.delay)&&Re.hasAnimations,
Re.recalculateTimingStyles=ge.length>0,(Re.applyTransitionDuration||Re.applyAnimationDuration)&&(ie=W.duration?parseFloat(W.duration):ie,Re.applyTransitionDuration&&(Re.hasTransitions=!0,
Oe.transitionDuration=ie,Ce=q.style[A+ae].length>0,le.push(Y(ie,Ce))),Re.applyAnimationDuration&&(Re.hasAnimations=!0,Oe.animationDuration=ie,le.push(L(ie)))),
0===ie&&!Re.recalculateTimingStyles)return x();if(null!=W.delay){var Ie;"boolean"!=typeof W.delay&&(Ie=parseFloat(W.delay),ne=Math.max(Ie,0)),Re.applyTransitionDelay&&le.push(k(Ie)),
Re.applyAnimationDelay&&le.push(k(Ie,!0))}return null==W.duration&&Oe.transitionDuration>0&&(Re.recalculateTimingStyles=Re.recalculateTimingStyles||Pe),
re=ne*ye,oe=ie*ye,W.skipBlocking||(Re.blockTransition=Oe.transitionDuration>0,Re.blockKeyframeAnimation=Oe.animationDuration>0&&Se.animationDelay>0&&0===Se.animationDuration),
W.from&&(W.cleanupStyles&&E(z,q,Object.keys(W.from)),m(e,W)),Re.blockTransition||Re.blockKeyframeAnimation?b(ie):W.skipBlocking||w(q,!1),{$$willAnimate:!0,
end:l,start:function(){if(!V)return te={end:l,cancel:d,resume:null,pause:null},ee=new s(te),T(B),ee}}}}]}],Le=["$$animationProvider",function(e){function t(e){
return e.parentNode&&11===e.parentNode.nodeType}e.drivers.push("$$animateCssDriver");var n="ng-animate-shim",r="ng-anchor",i="ng-anchor-out",a="ng-anchor-in";
this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(e,o,s,u,l,c,f){function p(e){return e.replace(/\bng-\S+\b/g,"");
}function m(e,t){return B(e)&&(e=e.split(" ")),B(t)&&(t=t.split(" ")),e.filter(function(e){return t.indexOf(e)===-1}).join(" ")}function h(t,o,u){function l(e){
var t={},n=v(e).getBoundingClientRect();return N(["width","height","top","left"],function(e){var r=n[e];switch(e){case"top":r+=y.scrollTop;break;case"left":
r+=y.scrollLeft}t[e]=Math.floor(r)+"px"}),t}function c(){var t=e(_,{addClass:i,delay:!0,from:l(o)});return t.$$willAnimate?t:null}function d(e){return e.attr("class")||"";
}function f(){var t=p(d(u)),n=m(t,g),r=m(g,t),o=e(_,{to:l(u),addClass:a+" "+n,removeClass:i+" "+r,delay:!0});return o.$$willAnimate?o:null}function h(){
_.remove(),o.removeClass(n),u.removeClass(n)}var _=I(v(o).cloneNode(!0)),g=p(d(_));o.addClass(n),u.addClass(n),_.addClass(r),w.append(_);var b,M=c();if(!M&&(b=f(),
!b))return h();var D=M||b;return{start:function(){function e(){n&&n.end()}var t,n=D.start();return n.done(function(){return n=null,!b&&(b=f())?(n=b.start(),
n.done(function(){n=null,h(),t.complete()}),n):(h(),void t.complete())}),t=new s({end:e,cancel:e})}}}function _(e,t,n,r){var i=g(e,O),a=g(t,O),o=[];if(N(r,function(e){
var t=e.out,r=e.in,i=h(n,t,r);i&&o.push(i)}),i||a||0!==o.length)return{start:function(){function e(){N(t,function(e){e.end()})}var t=[];i&&t.push(i.start()),
a&&t.push(a.start()),N(o,function(e){t.push(e.start())});var n=new s({end:e,cancel:e});return s.all(t,function(e){n.complete(e)}),n}}}function g(t){var n=t.element,r=t.options||{};
t.structural&&(r.event=t.event,r.structural=!0,r.applyClassesEarly=!0,"leave"===t.event&&(r.onDone=r.domOperation)),r.preparationClasses&&(r.event=$(r.event,r.preparationClasses));
var i=e(n,r);return i.$$willAnimate?i:null}if(!l.animations&&!l.transitions)return O;var y=f[0].body,b=v(u),w=I(t(b)||y.contains(b)?b:y);d(c);return function(e){
return e.from&&e.to?_(e.from,e.to,e.classes,e.anchors):g(e)}}]}],ke=["$animateProvider",function(e){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(t,n,r){
function i(n){n=U(n)?n:n.split(" ");for(var r=[],i={},a=0;a<n.length;a++){var o=n[a],s=e.$$registeredAnimations[o];s&&!i[o]&&(r.push(t.get(s)),i[o]=!0);
}return r}var a=d(r);return function(e,t,r,o){function s(){o.domOperation(),a(e,o)}function u(){m=!0,s(),p(e,o)}function l(e,t,r,i,a){var o;switch(r){case"animate":
o=[t,i.from,i.to,a];break;case"setClass":o=[t,g,v,a];break;case"addClass":o=[t,g,a];break;case"removeClass":o=[t,v,a];break;default:o=[t,a]}o.push(i);var s=e.apply(e,o);
if(s)if(V(s.start)&&(s=s.start()),s instanceof n)s.done(a);else if(V(s))return s;return O}function c(e,t,r,i,a){var o=[];return N(i,function(i){var s=i[a];
s&&o.push(function(){var i,a,o=!1,u=function(e){o||(o=!0,(a||O)(e),i.complete(!e))};return i=new n({end:function(){u()},cancel:function(){u(!0)}}),a=l(s,e,t,r,function(e){
var t=e===!1;u(t)}),i})}),o}function d(e,t,r,i,a){var o=c(e,t,r,i,a);if(0===o.length){var s,u;"beforeSetClass"===a?(s=c(e,"removeClass",r,i,"beforeRemoveClass"),
u=c(e,"addClass",r,i,"beforeAddClass")):"setClass"===a&&(s=c(e,"removeClass",r,i,"removeClass"),u=c(e,"addClass",r,i,"addClass")),s&&(o=o.concat(s)),u&&(o=o.concat(u));
}if(0!==o.length)return function(e){var t=[];return o.length&&N(o,function(e){t.push(e())}),t.length?n.all(t,e):e(),function(e){N(t,function(t){e?t.cancel():t.end();
})}}}var m=!1;3===arguments.length&&W(r)&&(o=r,r=null),o=f(o),r||(r=e.attr("class")||"",o.addClass&&(r+=" "+o.addClass),o.removeClass&&(r+=" "+o.removeClass));
var h,_,g=o.addClass,v=o.removeClass,y=i(r);if(y.length){var b,w;"leave"==t?(w="leave",b="afterLeave"):(w="before"+t.charAt(0).toUpperCase()+t.substr(1),
b=t),"enter"!==t&&"move"!==t&&(h=d(e,t,o,y,w)),_=d(e,t,o,y,b)}if(h||_){var M;return{$$willAnimate:!0,end:function(){return M?M.end():(u(),M=new n,M.complete(!0)),
M},start:function(){function e(e){u(e),M.complete(e)}function t(t){m||((r||O)(t),e(t))}if(M)return M;M=new n;var r,i=[];return h&&i.push(function(e){r=h(e);
}),i.length?i.push(function(e){s(),e(!0)}):s(),_&&i.push(function(e){r=_(e)}),M.setHost({end:function(){t()},cancel:function(){t(!0)}}),n.chain(i,e),M}
}}}}]}],xe=["$$animationProvider",function(e){e.drivers.push("$$animateJsDriver"),this.$get=["$$animateJs","$$AnimateRunner",function(e,t){function n(t){
var n=t.element,r=t.event,i=t.options,a=t.classes;return e(n,r,a,i)}return function(e){if(e.from&&e.to){var r=n(e.from),i=n(e.to);if(!r&&!i)return;return{
start:function(){function e(){return function(){N(a,function(e){e.end()})}}function n(e){o.complete(e)}var a=[];r&&a.push(r.start()),i&&a.push(i.start()),
t.all(a,n);var o=new t({end:e(),cancel:e()});return o}}}return n(e)}}]}],Te="data-ng-animate",Se="$ngAnimatePin",Ye=["$animateProvider",function(r){function i(e){
if(!e)return null;var t=e.split(h),n=Object.create(null);return N(t,function(e){n[e]=!0}),n}function a(e,t){if(e&&t){var n=i(t);return e.split(h).some(function(e){
return n[e]})}}function o(e,t,n,r){return g[e].some(function(e){return e(t,n,r)})}function l(e,t){var n=(e.addClass||"").length>0,r=(e.removeClass||"").length>0;
return t?n&&r:n||r}var c=1,m=2,h=" ",g=this.rules={skip:[],cancel:[],join:[]};g.join.push(function(e,t,n){return!t.structural&&l(t)}),g.skip.push(function(e,t,n){
return!t.structural&&!l(t)}),g.skip.push(function(e,t,n){return"leave"==n.event&&t.structural}),g.skip.push(function(e,t,n){return n.structural&&n.state===m&&!t.structural;
}),g.cancel.push(function(e,t,n){return n.structural&&t.structural}),g.cancel.push(function(e,t,n){return n.state===m&&t.structural}),g.cancel.push(function(e,t,n){
if(n.structural)return!1;var r=t.addClass,i=t.removeClass,o=n.addClass,s=n.removeClass;return!(z(r)&&z(i)||z(o)&&z(s))&&(a(r,s)||a(i,o))}),this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(i,a,h,g,w,M,D,$,L,k){
function x(){var e=!1;return function(t){e?t():a.$$postDigest(function(){e=!0,t()})}}function T(e,t){return _(e,t,{})}function S(e,t,n){var r=v(t),i=v(e),a=[],o=Q[n];
return o&&N(o,function(e){ie.call(e.node,r)?a.push(e.callback):"leave"===n&&ie.call(e.node,i)&&a.push(e.callback)}),a}function Y(e,t,n){var r=u(t);return e.filter(function(e){
var t=e.node===r&&(!n||e.callback===n);return!t})}function C(e,t){"close"!==e||t[0].parentNode||ae.off(t)}function E(e,t,n){function r(t,n,r,a){L(function(){
var t=S(h,e,n);t.length?i(function(){N(t,function(t){t(e,r,a)}),C(r,e)}):C(r,e)}),t.progress(n,r,a)}function u(t){b(e,w),re(e,w),p(e,w),w.domOperation(),
$.complete(!t)}var d,h,w=H(n);e=s(e),e&&(d=v(e),h=e.parent()),w=f(w);var $=new D,L=x();if(U(w.addClass)&&(w.addClass=w.addClass.join(" ")),w.addClass&&!B(w.addClass)&&(w.addClass=null),
U(w.removeClass)&&(w.removeClass=w.removeClass.join(" ")),w.removeClass&&!B(w.removeClass)&&(w.removeClass=null),w.from&&!W(w.from)&&(w.from=null),w.to&&!W(w.to)&&(w.to=null),
!d)return u(),$;var k=[d.className,w.addClass,w.removeClass].join(" ");if(!te(k))return u(),$;var Y=["enter","move","leave"].indexOf(t)>=0,E=g[0].hidden,j=!K||E||X.get(d),R=!j&&V.get(d)||{},I=!!R.state;
if(j||I&&R.state==c||(j=!P(e,h,t)),j)return E&&r($,t,"start"),u(),E&&r($,t,"close"),$;Y&&A(e);var z={structural:Y,element:e,event:t,addClass:w.addClass,
removeClass:w.removeClass,close:u,options:w,runner:$};if(I){var q=o("skip",e,z,R);if(q)return R.state===m?(u(),$):(_(e,R,z),R.runner);var G=o("cancel",e,z,R);
if(G)if(R.state===m)R.runner.end();else{if(!R.structural)return _(e,R,z),R.runner;R.close()}else{var J=o("join",e,z,R);if(J){if(R.state!==m)return y(e,Y?t:null,w),
t=z.event=R.event,w=_(e,R,z),R.runner;T(e,z)}}}else T(e,z);var Z=z.structural;if(Z||(Z="animate"===z.event&&Object.keys(z.options.to||{}).length>0||l(z)),
!Z)return u(),F(e),$;var Q=(R.counter||0)+1;return z.counter=Q,O(e,c,z),a.$$postDigest(function(){var n=V.get(d),i=!n;n=n||{};var a=e.parent()||[],o=a.length>0&&("animate"===n.event||n.structural||l(n));
if(i||n.counter!==Q||!o)return i&&(re(e,w),p(e,w)),(i||Y&&n.event!==t)&&(w.domOperation(),$.end()),void(o||F(e));t=!n.structural&&l(n,!0)?"setClass":n.event,
O(e,m);var s=M(e,t,n.options);$.setHost(s),r($,t,"start",{}),s.done(function(n){u(!n);var i=V.get(d);i&&i.counter===Q&&F(v(e)),r($,t,"close",{})})}),$}
function A(e){var t=v(e),n=t.querySelectorAll("["+Te+"]");N(n,function(e){var t=parseInt(e.getAttribute(Te)),n=V.get(e);if(n)switch(t){case m:n.runner.end();
case c:V.remove(e)}})}function F(e){var t=v(e);t.removeAttribute(Te),V.remove(t)}function j(e,t){return v(e)===v(t)}function P(e,t,n){var r,i=I(g[0].body),a=j(e,i)||"HTML"===e[0].nodeName,o=j(e,h),s=!1,u=X.get(v(e)),l=I.data(e[0],Se);
for(l&&(t=l),t=v(t);t&&(o||(o=j(t,h)),t.nodeType===J);){var c=V.get(t)||{};if(!s){var d=X.get(t);if(d===!0&&u!==!1){u=!0;break}d===!1&&(u=!1),s=c.structural;
}if(z(r)||r===!0){var f=I.data(t,ne);q(f)&&(r=f)}if(s&&r===!1)break;if(a||(a=j(t,i)),a&&o)break;t=o||!(l=I.data(t,Se))?t.parentNode:v(l)}var p=(!s||r)&&u!==!0;
return p&&o&&a}function O(e,t,n){n=n||{},n.state=t;var r=v(e);r.setAttribute(Te,t);var i=V.get(r),a=i?R(i,n):n;V.put(r,a)}var V=new w,X=new w,K=null,Z=a.$watch(function(){
return 0===$.totalPendingRequests},function(e){e&&(Z(),a.$$postDigest(function(){a.$$postDigest(function(){null===K&&(K=!0)})}))}),Q={},ee=r.classNameFilter(),te=ee?function(e){
return ee.test(e)}:function(){return!0},re=d(L),ie=e.Node.prototype.contains||function(e){return this===e||!!(16&this.compareDocumentPosition(e))},ae={
on:function(e,t,n){var r=u(t);Q[e]=Q[e]||[],Q[e].push({node:r,callback:n}),I(t).on("$destroy",function(){var i=V.get(r);i||ae.off(e,t,n)})},off:function(e,n,r){
if(1!==arguments.length||t.isString(arguments[0])){var i=Q[e];i&&(Q[e]=1===arguments.length?null:Y(i,n,r))}else{n=arguments[0];for(var a in Q)Q[a]=Y(Q[a],n);
}},pin:function(e,t){n(G(e),"element","not an element"),n(G(t),"parentElement","not an element"),e.data(Se,t)},push:function(e,t,n,r){return n=n||{},n.domOperation=r,
E(e,t,n)},enabled:function(e,t){var n=arguments.length;if(0===n)t=!!K;else{var r=G(e);if(r){var i=v(e),a=X.get(i);1===n?t=!a:X.put(i,!t)}else t=K=!!e}return t;
}};return ae}]}],Ce=["$animateProvider",function(e){function t(e,t){e.data(s,t)}function n(e){e.removeData(s)}function i(e){return e.data(s)}var a="ng-animate-ref",o=this.drivers=[],s="$$animationRunner";
this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(e,s,u,l,c,m){function h(e){function t(e){if(e.processed)return e;
e.processed=!0;var n=e.domNode,r=n.parentNode;a.put(n,e);for(var o;r;){if(o=a.get(r)){o.processed||(o=t(o));break}r=r.parentNode}return(o||i).children.push(e),
e}function n(e){var t,n=[],r=[];for(t=0;t<e.children.length;t++)r.push(e.children[t]);var i=r.length,a=0,o=[];for(t=0;t<r.length;t++){var s=r[t];i<=0&&(i=a,
a=0,n.push(o),o=[]),o.push(s.fn),s.children.forEach(function(e){a++,r.push(e)}),i--}return o.length&&n.push(o),n}var r,i={children:[]},a=new c;for(r=0;r<e.length;r++){
var o=e[r];a.put(o.domNode,e[r]={domNode:o.domNode,fn:o.fn,children:[]})}for(r=0;r<e.length;r++)t(e[r]);return n(i)}var _=[],g=d(e);return function(c,d,y){
function b(e){var t="["+a+"]",n=e.hasAttribute(a)?[e]:e.querySelectorAll(t),r=[];return N(n,function(e){var t=e.getAttribute(a);t&&t.length&&r.push(e)}),
r}function w(e){var t=[],n={};N(e,function(e,r){var i=e.element,o=v(i),s=e.event,u=["enter","move"].indexOf(s)>=0,l=e.structural?b(o):[];if(l.length){var c=u?"to":"from";
N(l,function(e){var t=e.getAttribute(a);n[t]=n[t]||{},n[t][c]={animationID:r,element:I(e)}})}else t.push(e)});var r={},i={};return N(n,function(n,a){var o=n.from,s=n.to;
if(!o||!s){var u=o?o.animationID:s.animationID,l=u.toString();return void(r[l]||(r[l]=!0,t.push(e[u])))}var c=e[o.animationID],d=e[s.animationID],f=o.animationID.toString();
if(!i[f]){var p=i[f]={structural:!0,beforeStart:function(){c.beforeStart(),d.beforeStart()},close:function(){c.close(),d.close()},classes:M(c.classes,d.classes),
from:c,to:d,anchors:[]};p.classes.length?t.push(p):(t.push(c),t.push(d))}i[f].anchors.push({out:o.element,in:s.element})}),t}function M(e,t){e=e.split(" "),
t=t.split(" ");for(var n=[],r=0;r<e.length;r++){var i=e[r];if("ng-"!==i.substring(0,3))for(var a=0;a<t.length;a++)if(i===t[a]){n.push(i);break}}return n.join(" ");
}function D(e){for(var t=o.length-1;t>=0;t--){var n=o[t];if(u.has(n)){var r=u.get(n),i=r(e);if(i)return i}}}function $(){c.addClass(te),C&&e.addClass(c,C),
E&&(e.removeClass(c,E),E=null)}function L(e,t){function n(e){i(e).setHost(t)}e.from&&e.to?(n(e.from.element),n(e.to.element)):n(e.element)}function k(){
var e=i(c);!e||"leave"===d&&y.$$domOperationFired||e.end()}function x(t){c.off("$destroy",k),n(c),g(c,y),p(c,y),y.domOperation(),C&&e.removeClass(c,C),
c.removeClass(te),S.complete(!t)}y=f(y);var T=["enter","move","leave"].indexOf(d)>=0,S=new l({end:function(){x()},cancel:function(){x(!0)}});if(!o.length)return x(),
S;t(c,S);var Y=r(c.attr("class"),r(y.addClass,y.removeClass)),C=y.tempClasses;C&&(Y+=" "+C,y.tempClasses=null);var E;return T&&(E="ng-"+d+ee,e.addClass(c,E)),
_.push({element:c,classes:Y,event:d,structural:T,options:y,beforeStart:$,close:x}),c.on("$destroy",k),_.length>1?S:(s.$$postDigest(function(){var e=[];N(_,function(t){
i(t.element)?e.push(t):t.close()}),_.length=0;var t=w(e),n=[];N(t,function(e){n.push({domNode:v(e.from?e.from.element:e.element),fn:function(){e.beforeStart();
var t,n=e.close,r=e.anchors?e.from.element||e.to.element:e.element;if(i(r)){var a=D(e);a&&(t=a.start)}if(t){var o=t();o.done(function(e){n(!e)}),L(e,o);
}else n()}})}),m(h(n))}),S)}}]}],Ee=["$animate","$rootScope",function(e,t){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(t,n,r,i,a){
var o,s;t.$watchCollection(r.ngAnimateSwap||r.for,function(r){o&&e.leave(o),s&&(s.$destroy(),s=null),(r||0===r)&&(s=t.$new(),a(s,function(t){o=t,e.enter(t,null,n);
}))})}}}];t.module("ngAnimate",[]).directive("ngAnimateSwap",Ee).directive("ngAnimateChildren",ge).factory("$$rAFScheduler",_e).provider("$$animateQueue",Ye).provider("$$animation",Ce).provider("$animateCss",$e).provider("$$animateCssDriver",Le).provider("$$animateJs",ke).provider("$$animateJsDriver",xe);
}(window,window.angular),define("lib/angular/angular-animate",["angular"],function(){}),function(e,t){"use strict";function n(e,n,r){function i(e,r,i){
var o,s;i=i||{},s=i.expires,o=t.isDefined(i.path)?i.path:a,t.isUndefined(r)&&(s="Thu, 01 Jan 1970 00:00:00 GMT",r=""),t.isString(s)&&(s=new Date(s));var u=encodeURIComponent(e)+"="+encodeURIComponent(r);
u+=o?";path="+o:"",u+=i.domain?";domain="+i.domain:"",u+=s?";expires="+s.toUTCString():"",u+=i.secure?";secure":"";var l=u.length+1;return l>4096&&n.warn("Cookie '"+e+"' possibly not set or overflowed because it was too large ("+l+" > 4096 bytes)!"),
u}var a=r.baseHref(),o=e[0];return function(e,t,n){o.cookie=i(e,t,n)}}t.module("ngCookies",["ng"]).provider("$cookies",[function(){function e(e){return e?t.extend({},n,e):n;
}var n=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(n,r){return{get:function(e){return n()[e]},getObject:function(e){var n=this.get(e);
return n?t.fromJson(n):n},getAll:function(){return n()},put:function(t,n,i){r(t,n,e(i))},putObject:function(e,n,r){this.put(e,t.toJson(n),r)},remove:function(t,n){
r(t,void 0,e(n))}}}]}]),t.module("ngCookies").factory("$cookieStore",["$cookies",function(e){return{get:function(t){return e.getObject(t)},put:function(t,n){
e.putObject(t,n)},remove:function(t){e.remove(t)}}}]),n.$inject=["$document","$log","$browser"],t.module("ngCookies").provider("$$cookieWriter",function(){
this.$get=n})}(window,window.angular),define("lib/angular/angular-cookies",["angular"],function(){}),function(e,t){"use strict";function n(e){return null!=e&&""!==e&&"hasOwnProperty"!==e&&o.test("."+e);
}function r(e,r){if(!n(r))throw a("badmember",'Dotted member path "@{0}" is invalid.',r);for(var i=r.split("."),o=0,s=i.length;o<s&&t.isDefined(e);o++){
var u=i[o];e=null!==e?e[u]:void 0}return e}function i(e,n){n=n||{},t.forEach(n,function(e,t){delete n[t]});for(var r in e)!e.hasOwnProperty(r)||"$"===r.charAt(0)&&"$"===r.charAt(1)||(n[r]=e[r]);
return n}var a=t.$$minErr("$resource"),o=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;t.module("ngResource",["ng"]).provider("$resource",function(){var e=/^https?:\/\/[^\/]*/,n=this;
this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},delete:{
method:"DELETE"}}},this.$get=["$http","$log","$q","$timeout",function(o,s,u,l){function c(e){return d(e,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+");
}function d(e,t){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,t?"%20":"+");
}function f(e,t){this.template=e,this.defaults=_({},n.defaults,t),this.urlParams={}}function p(e,c,d,y){function b(e,t){var n={};return t=_({},c,t),h(t,function(t,i){
v(t)&&(t=t()),n[i]=t&&t.charAt&&"@"==t.charAt(0)?r(e,t.substr(1)):t}),n}function w(e){return e.resource}function M(e){i(e||{},this)}var D=new f(e,y);return d=_({},n.defaults.actions,d),
M.prototype.toJSON=function(){var e=_({},this);return delete e.$promise,delete e.$resolved,e},h(d,function(e,r){var c=/^(POST|PUT|PATCH)$/i.test(e.method),d=e.timeout,f=t.isDefined(e.cancellable)?e.cancellable:y&&t.isDefined(y.cancellable)?y.cancellable:n.defaults.cancellable;
d&&!t.isNumber(d)&&(s.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),
delete e.timeout,d=null),M[r]=function(n,s,p,y){var $,L,k,x={};switch(arguments.length){case 4:k=y,L=p;case 3:case 2:if(!v(s)){x=n,$=s,L=p;break}if(v(n)){
L=n,k=s;break}L=s,k=p;case 1:v(n)?L=n:c?$=n:x=n;break;case 0:break;default:throw a("badargs","Expected up to 4 arguments [params, data, success, error], got {0} arguments",arguments.length);
}var T,S,Y=this instanceof M,C=Y?$:e.isArray?[]:new M($),E={},A=e.interceptor&&e.interceptor.response||w,F=e.interceptor&&e.interceptor.responseError||void 0;
h(e,function(e,t){switch(t){default:E[t]=g(e);break;case"params":case"isArray":case"interceptor":case"cancellable":}}),!Y&&f&&(T=u.defer(),E.timeout=T.promise,
d&&(S=l(T.resolve,d))),c&&(E.data=$),D.setUrlParams(E,_({},b($,e.params||{}),x),e.url);var j=o(E).then(function(n){var o=n.data;if(o){if(t.isArray(o)!==!!e.isArray)throw a("badcfg","Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})",r,e.isArray?"array":"object",t.isArray(o)?"array":"object",E.method,E.url);
if(e.isArray)C.length=0,h(o,function(e){"object"==typeof e?C.push(new M(e)):C.push(e)});else{var s=C.$promise;i(o,C),C.$promise=s}}return n.resource=C,
n},function(e){return(k||m)(e),u.reject(e)});return j.finally(function(){C.$resolved=!0,!Y&&f&&(C.$cancelRequest=t.noop,l.cancel(S),T=S=E.timeout=null);
}),j=j.then(function(e){var t=A(e);return(L||m)(t,e.headers),t},F),Y?j:(C.$promise=j,C.$resolved=!1,f&&(C.$cancelRequest=T.resolve),C)},M.prototype["$"+r]=function(e,t,n){
v(e)&&(n=t,t=e,e={});var i=M[r].call(this,e,this,t,n);return i.$promise||i}}),M.bind=function(t){return p(e,_({},c,t),d)},M}var m=t.noop,h=t.forEach,_=t.extend,g=t.copy,v=t.isFunction;
return f.prototype={setUrlParams:function(n,r,i){var o,s,u=this,l=i||u.template,f="",p=u.urlParams={};h(l.split(/\W/),function(e){if("hasOwnProperty"===e)throw a("badname","hasOwnProperty is not a valid parameter name.");
!new RegExp("^\\d+$").test(e)&&e&&new RegExp("(^|[^\\\\]):"+e+"(\\W|$)").test(l)&&(p[e]={isQueryParamValue:new RegExp("\\?.*=:"+e+"(?:\\W|$)").test(l)});
}),l=l.replace(/\\:/g,":"),l=l.replace(e,function(e){return f=e,""}),r=r||{},h(u.urlParams,function(e,n){o=r.hasOwnProperty(n)?r[n]:u.defaults[n],t.isDefined(o)&&null!==o?(s=e.isQueryParamValue?d(o,!0):c(o),
l=l.replace(new RegExp(":"+n+"(\\W|$)","g"),function(e,t){return s+t})):l=l.replace(new RegExp("(/?):"+n+"(\\W|$)","g"),function(e,t,n){return"/"==n.charAt(0)?n:t+n;
})}),u.defaults.stripTrailingSlashes&&(l=l.replace(/\/+$/,"")||"/"),l=l.replace(/\/\.(?=\w+($|\?))/,"."),n.url=f+l.replace(/\/\\\./,"/."),h(r,function(e,t){
u.urlParams[t]||(n.params=n.params||{},n.params[t]=e)})}},p}]})}(window,window.angular),define("lib/angular/angular-resource",["angular"],function(){}),
function(){function e(e,t){if(e!==t){var n=null===e,r=e===M,i=e===e,a=null===t,o=t===M,s=t===t;if(e>t&&!a||!i||n&&!o&&s||r&&s)return 1;if(e<t&&!n||!s||a&&!r&&i||o&&i)return-1;
}return 0}function t(e,t,n){for(var r=e.length,i=n?r:-1;n?i--:++i<r;)if(t(e[i],i,e))return i;return-1}function n(e,t,n){if(t!==t)return p(e,n);for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;
return-1}function r(e){return"function"==typeof e||!1}function i(e){return null==e?"":e+""}function a(e,t){for(var n=-1,r=e.length;++n<r&&t.indexOf(e.charAt(n))>-1;);
return n}function o(e,t){for(var n=e.length;n--&&t.indexOf(e.charAt(n))>-1;);return n}function s(t,n){return e(t.criteria,n.criteria)||t.index-n.index}
function u(t,n,r){for(var i=-1,a=t.criteria,o=n.criteria,s=a.length,u=r.length;++i<s;){var l=e(a[i],o[i]);if(l){if(i>=u)return l;var c=r[i];return l*("asc"===c||c===!0?1:-1);
}}return t.index-n.index}function l(e){return Ne[e]}function c(e){return Ue[e]}function d(e,t,n){return t?e=ze[e]:n&&(e=qe[e]),"\\"+e}function f(e){return"\\"+qe[e];
}function p(e,t,n){for(var r=e.length,i=t+(n?0:-1);n?i--:++i<r;){var a=e[i];if(a!==a)return i}return-1}function m(e){return!!e&&"object"==typeof e}function h(e){
return e<=160&&e>=9&&e<=13||32==e||160==e||5760==e||6158==e||e>=8192&&(e<=8202||8232==e||8233==e||8239==e||8287==e||12288==e||65279==e)}function _(e,t){
for(var n=-1,r=e.length,i=-1,a=[];++n<r;)e[n]===t&&(e[n]=N,a[++i]=n);return a}function g(e,t){for(var n,r=-1,i=e.length,a=-1,o=[];++r<i;){var s=e[r],u=t?t(s,r,e):s;
r&&n===u||(n=u,o[++a]=s)}return o}function v(e){for(var t=-1,n=e.length;++t<n&&h(e.charCodeAt(t)););return t}function y(e){for(var t=e.length;t--&&h(e.charCodeAt(t)););
return t}function b(e){return Be[e]}function w(h){function G(e){if(m(e)&&!Ss(e)&&!(e instanceof Ne)){if(e instanceof ee)return e;if(eo.call(e,"__chain__")&&eo.call(e,"__wrapped__"))return pr(e);
}return new ee(e)}function Z(){}function ee(e,t,n){this.__wrapped__=e,this.__actions__=n||[],this.__chain__=!!t}function Ne(e){this.__wrapped__=e,this.__actions__=[],
this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=To,this.__views__=[]}function Ue(){var e=new Ne(this.__wrapped__);return e.__actions__=nt(this.__actions__),
e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=nt(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=nt(this.__views__),
e}function Be(){if(this.__filtered__){var e=new Ne(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}function We(){var e=this.__wrapped__.value(),t=this.__dir__,n=Ss(e),r=t<0,i=n?e.length:0,a=qn(0,i,this.__views__),o=a.start,s=a.end,u=s-o,l=r?s:o-1,c=this.__iteratees__,d=c.length,f=0,p=Do(u,this.__takeCount__);
if(!n||i<O||i==u&&p==u)return nn(r&&n?e.reverse():e,this.__actions__);var m=[];e:for(;u--&&f<p;){l+=t;for(var h=-1,_=e[l];++h<d;){var g=c[h],v=g.iteratee,y=g.type,b=v(_);
if(y==R)_=b;else if(!b){if(y==H)continue e;break e}}m[f++]=_}return m}function ze(){this.__data__={}}function qe(e){return this.has(e)&&delete this.__data__[e];
}function Ve(e){return"__proto__"==e?M:this.__data__[e]}function Ge(e){return"__proto__"!=e&&eo.call(this.__data__,e)}function Je(e,t){return"__proto__"!=e&&(this.__data__[e]=t),
this}function Xe(e){var t=e?e.length:0;for(this.data={hash:go(null),set:new co};t--;)this.push(e[t])}function Ke(e,t){var n=e.data,r="string"==typeof t||Fi(t)?n.set.has(t):n.hash[t];
return r?0:-1}function Ze(e){var t=this.data;"string"==typeof e||Fi(e)?t.set.add(e):t.hash[e]=!0}function tt(e,t){for(var n=-1,r=e.length,i=-1,a=t.length,o=Ia(r+a);++n<r;)o[n]=e[n];
for(;++i<a;)o[n++]=t[i];return o}function nt(e,t){var n=-1,r=e.length;for(t||(t=Ia(r));++n<r;)t[n]=e[n];return t}function rt(e,t){for(var n=-1,r=e.length;++n<r&&t(e[n],n,e)!==!1;);
return e}function it(e,t){for(var n=e.length;n--&&t(e[n],n,e)!==!1;);return e}function at(e,t){for(var n=-1,r=e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0;
}function ot(e,t,n,r){for(var i=-1,a=e.length,o=r,s=o;++i<a;){var u=e[i],l=+t(u);n(l,o)&&(o=l,s=u)}return s}function st(e,t){for(var n=-1,r=e.length,i=-1,a=[];++n<r;){
var o=e[n];t(o,n,e)&&(a[++i]=o)}return a}function ut(e,t){for(var n=-1,r=e.length,i=Ia(r);++n<r;)i[n]=t(e[n],n,e);return i}function lt(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];
return e}function ct(e,t,n,r){var i=-1,a=e.length;for(r&&a&&(n=e[++i]);++i<a;)n=t(n,e[i],i,e);return n}function dt(e,t,n,r){var i=e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);
return n}function ft(e,t){for(var n=-1,r=e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function pt(e,t){for(var n=e.length,r=0;n--;)r+=+t(e[n])||0;return r;
}function mt(e,t){return e===M?t:e}function ht(e,t,n,r){return e!==M&&eo.call(r,n)?e:t}function _t(e,t,n){for(var r=-1,i=Is(t),a=i.length;++r<a;){var o=i[r],s=e[o],u=n(s,t[o],o,e,t);
(u===u?u===s:s!==s)&&(s!==M||o in e)||(e[o]=u)}return e}function gt(e,t){return null==t?e:yt(t,Is(t),e)}function vt(e,t){for(var n=-1,r=null==e,i=!r&&Kn(e),a=i?e.length:0,o=t.length,s=Ia(o);++n<o;){
var u=t[n];i?s[n]=Zn(u,a)?e[u]:M:s[n]=r?M:e[u]}return s}function yt(e,t,n){n||(n={});for(var r=-1,i=t.length;++r<i;){var a=t[r];n[a]=e[a]}return n}function bt(e,t,n){
var r=typeof e;return"function"==r?t===M?e:on(e,t,n):null==e?xa:"object"==r?Rt(e):t===M?Aa(e):It(e,t)}function wt(e,t,n,r,i,a,o){var s;if(n&&(s=i?n(e,r,i):n(e)),
s!==M)return s;if(!Fi(e))return e;var u=Ss(e);if(u){if(s=Vn(e),!t)return nt(e,s)}else{var l=no.call(e),c=l==V;if(l!=X&&l!=U&&(!c||i))return Ie[l]?Jn(e,l,t):i?e:{};
if(s=Gn(c?{}:e),!t)return gt(s,e)}a||(a=[]),o||(o=[]);for(var d=a.length;d--;)if(a[d]==e)return o[d];return a.push(e),o.push(s),(u?rt:Ct)(e,function(r,i){
s[i]=wt(r,t,n,i,e,a,o)}),s}function Mt(e,t,n){if("function"!=typeof e)throw new Ja(I);return fo(function(){e.apply(M,n)},t)}function Dt(e,t){var r=e?e.length:0,i=[];
if(!r)return i;var a=-1,o=Bn(),s=o==n,u=s&&t.length>=O?hn(t):null,l=t.length;u&&(o=Ke,s=!1,t=u);e:for(;++a<r;){var c=e[a];if(s&&c===c){for(var d=l;d--;)if(t[d]===c)continue e;
i.push(c)}else o(t,c,0)<0&&i.push(c)}return i}function $t(e,t){var n=!0;return Po(e,function(e,r,i){return n=!!t(e,r,i)}),n}function Lt(e,t,n,r){var i=r,a=i;
return Po(e,function(e,o,s){var u=+t(e,o,s);(n(u,i)||u===r&&u===a)&&(i=u,a=e)}),a}function kt(e,t,n,r){var i=e.length;for(n=null==n?0:+n||0,n<0&&(n=-n>i?0:i+n),
r=r===M||r>i?i:+r||0,r<0&&(r+=i),i=n>r?0:r>>>0,n>>>=0;n<i;)e[n++]=t;return e}function xt(e,t){var n=[];return Po(e,function(e,r,i){t(e,r,i)&&n.push(e)}),
n}function Tt(e,t,n,r){var i;return n(e,function(e,n,a){if(t(e,n,a))return i=r?n:e,!1}),i}function St(e,t,n,r){r||(r=[]);for(var i=-1,a=e.length;++i<a;){
var o=e[i];m(o)&&Kn(o)&&(n||Ss(o)||Li(o))?t?St(o,t,n,r):lt(r,o):n||(r[r.length]=o)}return r}function Yt(e,t){return Ho(e,t,ea)}function Ct(e,t){return Ho(e,t,Is);
}function Et(e,t){return Ro(e,t,Is)}function At(e,t){for(var n=-1,r=t.length,i=-1,a=[];++n<r;){var o=t[n];Ai(e[o])&&(a[++i]=o)}return a}function Ft(e,t,n){
if(null!=e){n!==M&&n in dr(e)&&(t=[n]);for(var r=0,i=t.length;null!=e&&r<i;)e=e[t[r++]];return r&&r==i?e:M}}function jt(e,t,n,r,i,a){return e===t||(null==e||null==t||!Fi(e)&&!m(t)?e!==e&&t!==t:Pt(e,t,jt,n,r,i,a));
}function Pt(e,t,n,r,i,a,o){var s=Ss(e),u=Ss(t),l=B,c=B;s||(l=no.call(e),l==U?l=X:l!=X&&(s=Bi(e))),u||(c=no.call(t),c==U?c=X:c!=X&&(u=Bi(t)));var d=l==X,f=c==X,p=l==c;
if(p&&!s&&!d)return Rn(e,t,l);if(!i){var m=d&&eo.call(e,"__wrapped__"),h=f&&eo.call(t,"__wrapped__");if(m||h)return n(m?e.value():e,h?t.value():t,r,i,a,o);
}if(!p)return!1;a||(a=[]),o||(o=[]);for(var _=a.length;_--;)if(a[_]==e)return o[_]==t;a.push(e),o.push(t);var g=(s?Hn:In)(e,t,n,r,i,a,o);return a.pop(),
o.pop(),g}function Ot(e,t,n){var r=t.length,i=r,a=!n;if(null==e)return!i;for(e=dr(e);r--;){var o=t[r];if(a&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++r<i;){
o=t[r];var s=o[0],u=e[s],l=o[1];if(a&&o[2]){if(u===M&&!(s in e))return!1}else{var c=n?n(u,l,s):M;if(!(c===M?jt(l,u,n,!0):c))return!1}}return!0}function Ht(e,t){
var n=-1,r=Kn(e)?Ia(e.length):[];return Po(e,function(e,i,a){r[++n]=t(e,i,a)}),r}function Rt(e){var t=Wn(e);if(1==t.length&&t[0][2]){var n=t[0][0],r=t[0][1];
return function(e){return null!=e&&(e[n]===r&&(r!==M||n in dr(e)))}}return function(e){return Ot(e,t)}}function It(e,t){var n=Ss(e),r=er(e)&&rr(t),i=e+"";
return e=fr(e),function(a){if(null==a)return!1;var o=i;if(a=dr(a),(n||!r)&&!(o in a)){if(a=1==e.length?a:Ft(a,Gt(e,0,-1)),null==a)return!1;o=kr(e),a=dr(a);
}return a[o]===t?t!==M||o in a:jt(t,a[o],M,!0)}}function Nt(e,t,n,r,i){if(!Fi(e))return e;var a=Kn(t)&&(Ss(t)||Bi(t)),o=a?M:Is(t);return rt(o||t,function(s,u){
if(o&&(u=s,s=t[u]),m(s))r||(r=[]),i||(i=[]),Ut(e,t,u,Nt,n,r,i);else{var l=e[u],c=n?n(l,s,u,e,t):M,d=c===M;d&&(c=s),c===M&&(!a||u in e)||!d&&(c===c?c===l:l!==l)||(e[u]=c);
}}),e}function Ut(e,t,n,r,i,a,o){for(var s=a.length,u=t[n];s--;)if(a[s]==u)return void(e[n]=o[s]);var l=e[n],c=i?i(l,u,n,e,t):M,d=c===M;d&&(c=u,Kn(u)&&(Ss(u)||Bi(u))?c=Ss(l)?l:Kn(l)?nt(l):[]:Ii(u)||Li(u)?c=Li(l)?Gi(l):Ii(l)?l:{}:d=!1),
a.push(u),o.push(c),d?e[n]=r(c,u,i,a,o):(c===c?c!==l:l===l)&&(e[n]=c)}function Bt(e){return function(t){return null==t?M:t[e]}}function Wt(e){var t=e+"";
return e=fr(e),function(n){return Ft(n,e,t)}}function zt(e,t){for(var n=e?t.length:0;n--;){var r=t[n];if(r!=i&&Zn(r)){var i=r;po.call(e,r,1)}}return e}
function qt(e,t){return e+vo(ko()*(t-e+1))}function Vt(e,t,n,r,i){return i(e,function(e,i,a){n=r?(r=!1,e):t(n,e,i,a)}),n}function Gt(e,t,n){var r=-1,i=e.length;
t=null==t?0:+t||0,t<0&&(t=-t>i?0:i+t),n=n===M||n>i?i:+n||0,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Ia(i);++r<i;)a[r]=e[r+t];return a}function Jt(e,t){
var n;return Po(e,function(e,r,i){return n=t(e,r,i),!n}),!!n}function Xt(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}function Kt(e,t,n){
var r=Nn(),i=-1;t=ut(t,function(e){return r(e)});var a=Ht(e,function(e){var n=ut(t,function(t){return t(e)});return{criteria:n,index:++i,value:e}});return Xt(a,function(e,t){
return u(e,t,n)})}function Zt(e,t){var n=0;return Po(e,function(e,r,i){n+=+t(e,r,i)||0}),n}function Qt(e,t){var r=-1,i=Bn(),a=e.length,o=i==n,s=o&&a>=O,u=s?hn():null,l=[];
u?(i=Ke,o=!1):(s=!1,u=t?[]:l);e:for(;++r<a;){var c=e[r],d=t?t(c,r,e):c;if(o&&c===c){for(var f=u.length;f--;)if(u[f]===d)continue e;t&&u.push(d),l.push(c);
}else i(u,d,0)<0&&((t||s)&&u.push(d),l.push(c))}return l}function en(e,t){for(var n=-1,r=t.length,i=Ia(r);++n<r;)i[n]=e[t[n]];return i}function tn(e,t,n,r){
for(var i=e.length,a=r?i:-1;(r?a--:++a<i)&&t(e[a],a,e););return n?Gt(e,r?0:a,r?a+1:i):Gt(e,r?a+1:0,r?i:a)}function nn(e,t){var n=e;n instanceof Ne&&(n=n.value());
for(var r=-1,i=t.length;++r<i;){var a=t[r];n=a.func.apply(a.thisArg,lt([n],a.args))}return n}function rn(e,t,n){var r=0,i=e?e.length:r;if("number"==typeof t&&t===t&&i<=Co){
for(;r<i;){var a=r+i>>>1,o=e[a];(n?o<=t:o<t)&&null!==o?r=a+1:i=a}return i}return an(e,t,xa,n)}function an(e,t,n,r){t=n(t);for(var i=0,a=e?e.length:0,o=t!==t,s=null===t,u=t===M;i<a;){
var l=vo((i+a)/2),c=n(e[l]),d=c!==M,f=c===c;if(o)var p=f||r;else p=s?f&&d&&(r||null!=c):u?f&&(r||d):null!=c&&(r?c<=t:c<t);p?i=l+1:a=l}return Do(a,Yo)}function on(e,t,n){
if("function"!=typeof e)return xa;if(t===M)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 3:return function(n,r,i){return e.call(t,n,r,i);
};case 4:return function(n,r,i,a){return e.call(t,n,r,i,a)};case 5:return function(n,r,i,a,o){return e.call(t,n,r,i,a,o)}}return function(){return e.apply(t,arguments);
}}function sn(e){var t=new ao(e.byteLength),n=new mo(t);return n.set(new mo(e)),t}function un(e,t,n){for(var r=n.length,i=-1,a=Mo(e.length-r,0),o=-1,s=t.length,u=Ia(s+a);++o<s;)u[o]=t[o];
for(;++i<r;)u[n[i]]=e[i];for(;a--;)u[o++]=e[i++];return u}function ln(e,t,n){for(var r=-1,i=n.length,a=-1,o=Mo(e.length-i,0),s=-1,u=t.length,l=Ia(o+u);++a<o;)l[a]=e[a];
for(var c=a;++s<u;)l[c+s]=t[s];for(;++r<i;)l[c+n[r]]=e[a++];return l}function cn(e,t){return function(n,r,i){var a=t?t():{};if(r=Nn(r,i,3),Ss(n))for(var o=-1,s=n.length;++o<s;){
var u=n[o];e(a,u,r(u,o,n),n)}else Po(n,function(t,n,i){e(a,t,r(t,n,i),i)});return a}}function dn(e){return gi(function(t,n){var r=-1,i=null==t?0:n.length,a=i>2?n[i-2]:M,o=i>2?n[2]:M,s=i>1?n[i-1]:M;
for("function"==typeof a?(a=on(a,s,5),i-=2):(a="function"==typeof s?s:M,i-=a?1:0),o&&Qn(n[0],n[1],o)&&(a=i<3?M:a,i=1);++r<i;){var u=n[r];u&&e(t,u,a)}return t;
})}function fn(e,t){return function(n,r){var i=n?Uo(n):0;if(!nr(i))return e(n,r);for(var a=t?i:-1,o=dr(n);(t?a--:++a<i)&&r(o[a],a,o)!==!1;);return n}}function pn(e){
return function(t,n,r){for(var i=dr(t),a=r(t),o=a.length,s=e?o:-1;e?s--:++s<o;){var u=a[s];if(n(i[u],u,i)===!1)break}return t}}function mn(e,t){function n(){
var i=this&&this!==Qe&&this instanceof n?r:e;return i.apply(t,arguments)}var r=gn(e);return n}function hn(e){return go&&co?new Xe(e):null}function _n(e){
return function(t){for(var n=-1,r=$a(ca(t)),i=r.length,a="";++n<i;)a=e(a,r[n],n);return a}}function gn(e){return function(){var t=arguments;switch(t.length){
case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);
case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6]);
}var n=jo(e.prototype),r=e.apply(n,t);return Fi(r)?r:n}}function vn(e){function t(n,r,i){i&&Qn(n,r,i)&&(r=M);var a=On(n,e,M,M,M,M,M,r);return a.placeholder=t.placeholder,
a}return t}function yn(e,t){return gi(function(n){var r=n[0];return null==r?r:(n.push(t),e.apply(M,n))})}function bn(e,t){return function(n,r,i){if(i&&Qn(n,r,i)&&(r=M),
r=Nn(r,i,3),1==r.length){n=Ss(n)?n:cr(n);var a=ot(n,r,e,t);if(!n.length||a!==t)return a}return Lt(n,r,e,t)}}function wn(e,n){return function(r,i,a){if(i=Nn(i,a,3),
Ss(r)){var o=t(r,i,n);return o>-1?r[o]:M}return Tt(r,i,e)}}function Mn(e){return function(n,r,i){return n&&n.length?(r=Nn(r,i,3),t(n,r,e)):-1}}function Dn(e){
return function(t,n,r){return n=Nn(n,r,3),Tt(t,n,e,!0)}}function $n(e){return function(){for(var t,n=arguments.length,r=e?n:-1,i=0,a=Ia(n);e?r--:++r<n;){
var o=a[i++]=arguments[r];if("function"!=typeof o)throw new Ja(I);!t&&ee.prototype.thru&&"wrapper"==Un(o)&&(t=new ee([],!0))}for(r=t?-1:n;++r<n;){o=a[r];
var s=Un(o),u="wrapper"==s?No(o):M;t=u&&tr(u[0])&&u[1]==(C|x|S|E)&&!u[4].length&&1==u[9]?t[Un(u[0])].apply(t,u[3]):1==o.length&&tr(o)?t[s]():t.thru(o)}
return function(){var e=arguments,r=e[0];if(t&&1==e.length&&Ss(r)&&r.length>=O)return t.plant(r).value();for(var i=0,o=n?a[i].apply(this,e):r;++i<n;)o=a[i].call(this,o);
return o}}}function Ln(e,t){return function(n,r,i){return"function"==typeof r&&i===M&&Ss(n)?e(n,r):t(n,on(r,i,3))}}function kn(e){return function(t,n,r){
return"function"==typeof n&&r===M||(n=on(n,r,3)),e(t,n,ea)}}function xn(e){return function(t,n,r){return"function"==typeof n&&r===M||(n=on(n,r,3)),e(t,n);
}}function Tn(e){return function(t,n,r){var i={};return n=Nn(n,r,3),Ct(t,function(t,r,a){var o=n(t,r,a);r=e?o:r,t=e?t:o,i[r]=t}),i}}function Sn(e){return function(t,n,r){
return t=i(t),(e?t:"")+An(t,n,r)+(e?"":t)}}function Yn(e){var t=gi(function(n,r){var i=_(r,t.placeholder);return On(n,e,M,r,i)});return t}function Cn(e,t){
return function(n,r,i,a){var o=arguments.length<3;return"function"==typeof r&&a===M&&Ss(n)?e(n,r,i,o):Vt(n,Nn(r,a,4),i,o,t)}}function En(e,t,n,r,i,a,o,s,u,l){
function c(){for(var y=arguments.length,b=y,w=Ia(y);b--;)w[b]=arguments[b];if(r&&(w=un(w,r,i)),a&&(w=ln(w,a,o)),m||g){var D=c.placeholder,k=_(w,D);if(y-=k.length,
y<l){var x=s?nt(s):M,T=Mo(l-y,0),C=m?k:M,E=m?M:k,A=m?w:M,F=m?M:w;t|=m?S:Y,t&=~(m?Y:S),h||(t&=~($|L));var j=[e,t,n,A,C,F,E,x,u,T],P=En.apply(M,j);return tr(e)&&Bo(P,j),
P.placeholder=D,P}}var O=f?n:this,H=p?O[e]:e;return s&&(w=ur(w,s)),d&&u<w.length&&(w.length=u),this&&this!==Qe&&this instanceof c&&(H=v||gn(e)),H.apply(O,w);
}var d=t&C,f=t&$,p=t&L,m=t&x,h=t&k,g=t&T,v=p?M:gn(e);return c}function An(e,t,n){var r=e.length;if(t=+t,r>=t||!bo(t))return"";var i=t-r;return n=null==n?" ":n+"",
_a(n,_o(i/n.length)).slice(0,i)}function Fn(e,t,n,r){function i(){for(var t=-1,s=arguments.length,u=-1,l=r.length,c=Ia(l+s);++u<l;)c[u]=r[u];for(;s--;)c[u++]=arguments[++t];
var d=this&&this!==Qe&&this instanceof i?o:e;return d.apply(a?n:this,c)}var a=t&$,o=gn(e);return i}function jn(e){var t=Wa[e];return function(e,n){return n=n===M?0:+n||0,
n?(n=uo(10,n),t(e*n)/n):t(e)}}function Pn(e){return function(t,n,r,i){var a=Nn(r);return null==r&&a===bt?rn(t,n,e):an(t,n,a(r,i,1),e)}}function On(e,t,n,r,i,a,o,s){
var u=t&L;if(!u&&"function"!=typeof e)throw new Ja(I);var l=r?r.length:0;if(l||(t&=~(S|Y),r=i=M),l-=i?i.length:0,t&Y){var c=r,d=i;r=i=M}var f=u?M:No(e),p=[e,t,n,r,i,c,d,a,o,s];
if(f&&(ir(p,f),t=p[1],s=p[9]),p[9]=null==s?u?0:e.length:Mo(s-l,0)||0,t==$)var m=mn(p[0],p[2]);else m=t!=S&&t!=($|S)||p[4].length?En.apply(M,p):Fn.apply(M,p);
var h=f?Io:Bo;return h(m,p)}function Hn(e,t,n,r,i,a,o){var s=-1,u=e.length,l=t.length;if(u!=l&&!(i&&l>u))return!1;for(;++s<u;){var c=e[s],d=t[s],f=r?r(i?d:c,i?c:d,s):M;
if(f!==M){if(f)continue;return!1}if(i){if(!ft(t,function(e){return c===e||n(c,e,r,i,a,o)}))return!1}else if(c!==d&&!n(c,d,r,i,a,o))return!1}return!0}function Rn(e,t,n){
switch(n){case W:case z:return+e==+t;case q:return e.name==t.name&&e.message==t.message;case J:return e!=+e?t!=+t:e==+t;case K:case Q:return e==t+""}return!1;
}function In(e,t,n,r,i,a,o){var s=Is(e),u=s.length,l=Is(t),c=l.length;if(u!=c&&!i)return!1;for(var d=u;d--;){var f=s[d];if(!(i?f in t:eo.call(t,f)))return!1;
}for(var p=i;++d<u;){f=s[d];var m=e[f],h=t[f],_=r?r(i?h:m,i?m:h,f):M;if(!(_===M?n(m,h,r,i,a,o):_))return!1;p||(p="constructor"==f)}if(!p){var g=e.constructor,v=t.constructor;
if(g!=v&&"constructor"in e&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof v&&v instanceof v))return!1}return!0}function Nn(e,t,n){
var r=G.callback||La;return r=r===La?bt:r,n?r(e,t,n):r}function Un(e){for(var t=e.name,n=Fo[t],r=n?n.length:0;r--;){var i=n[r],a=i.func;if(null==a||a==e)return i.name;
}return t}function Bn(e,t,r){var i=G.indexOf||$r;return i=i===$r?n:i,e?i(e,t,r):i}function Wn(e){for(var t=ta(e),n=t.length;n--;)t[n][2]=rr(t[n][1]);return t;
}function zn(e,t){var n=null==e?M:e[t];return Oi(n)?n:M}function qn(e,t,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],o=a.size;switch(a.type){case"drop":
e+=o;break;case"dropRight":t-=o;break;case"take":t=Do(t,e+o);break;case"takeRight":e=Mo(e,t-o)}}return{start:e,end:t}}function Vn(e){var t=e.length,n=new e.constructor(t);
return t&&"string"==typeof e[0]&&eo.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function Gn(e){var t=e.constructor;return"function"==typeof t&&t instanceof t||(t=qa),
new t}function Jn(e,t,n){var r=e.constructor;switch(t){case te:return sn(e);case W:case z:return new r(+e);case ne:case re:case ie:case ae:case oe:case se:
case ue:case le:case ce:var i=e.buffer;return new r(n?sn(i):i,e.byteOffset,e.length);case J:case Q:return new r(e);case K:var a=new r(e.source,Se.exec(e));
a.lastIndex=e.lastIndex}return a}function Xn(e,t,n){null==e||er(t,e)||(t=fr(t),e=1==t.length?e:Ft(e,Gt(t,0,-1)),t=kr(t));var r=null==e?e:e[t];return null==r?M:r.apply(e,n);
}function Kn(e){return null!=e&&nr(Uo(e))}function Zn(e,t){return e="number"==typeof e||Ee.test(e)?+e:-1,t=null==t?Eo:t,e>-1&&e%1==0&&e<t}function Qn(e,t,n){
if(!Fi(n))return!1;var r=typeof t;if("number"==r?Kn(n)&&Zn(t,n.length):"string"==r&&t in n){var i=n[t];return e===e?e===i:i!==i}return!1}function er(e,t){
var n=typeof e;if("string"==n&&Me.test(e)||"number"==n)return!0;if(Ss(e))return!1;var r=!we.test(e);return r||null!=t&&e in dr(t)}function tr(e){var t=Un(e);
if(!(t in Ne.prototype))return!1;var n=G[t];if(e===n)return!0;var r=No(n);return!!r&&e===r[0]}function nr(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Eo;
}function rr(e){return e===e&&!Fi(e)}function ir(e,t){var n=e[1],r=t[1],i=n|r,a=i<C,o=r==C&&n==x||r==C&&n==E&&e[7].length<=t[8]||r==(C|E)&&n==x;if(!a&&!o)return e;
r&$&&(e[2]=t[2],i|=n&$?0:k);var s=t[3];if(s){var u=e[3];e[3]=u?un(u,s,t[4]):nt(s),e[4]=u?_(e[3],N):nt(t[4])}return s=t[5],s&&(u=e[5],e[5]=u?ln(u,s,t[6]):nt(s),
e[6]=u?_(e[5],N):nt(t[6])),s=t[7],s&&(e[7]=nt(s)),r&C&&(e[8]=null==e[8]?t[8]:Do(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i,e}function ar(e,t){
return e===M?t:Ys(e,t,ar)}function or(e,t){e=dr(e);for(var n=-1,r=t.length,i={};++n<r;){var a=t[n];a in e&&(i[a]=e[a])}return i}function sr(e,t){var n={};
return Yt(e,function(e,r,i){t(e,r,i)&&(n[r]=e)}),n}function ur(e,t){for(var n=e.length,r=Do(t.length,n),i=nt(e);r--;){var a=t[r];e[r]=Zn(a,n)?i[a]:M}return e;
}function lr(e){for(var t=ea(e),n=t.length,r=n&&e.length,i=!!r&&nr(r)&&(Ss(e)||Li(e)),a=-1,o=[];++a<n;){var s=t[a];(i&&Zn(s,r)||eo.call(e,s))&&o.push(s);
}return o}function cr(e){return null==e?[]:Kn(e)?Fi(e)?e:qa(e):aa(e)}function dr(e){return Fi(e)?e:qa(e)}function fr(e){if(Ss(e))return e;var t=[];return i(e).replace(De,function(e,n,r,i){
t.push(r?i.replace(xe,"$1"):n||e)}),t}function pr(e){return e instanceof Ne?e.clone():new ee(e.__wrapped__,e.__chain__,nt(e.__actions__))}function mr(e,t,n){
t=(n?Qn(e,t,n):null==t)?1:Mo(vo(t)||1,1);for(var r=0,i=e?e.length:0,a=-1,o=Ia(_o(i/t));r<i;)o[++a]=Gt(e,r,r+=t);return o}function hr(e){for(var t=-1,n=e?e.length:0,r=-1,i=[];++t<n;){
var a=e[t];a&&(i[++r]=a)}return i}function _r(e,t,n){var r=e?e.length:0;return r?((n?Qn(e,t,n):null==t)&&(t=1),Gt(e,t<0?0:t)):[]}function gr(e,t,n){var r=e?e.length:0;
return r?((n?Qn(e,t,n):null==t)&&(t=1),t=r-(+t||0),Gt(e,0,t<0?0:t)):[]}function vr(e,t,n){return e&&e.length?tn(e,Nn(t,n,3),!0,!0):[]}function yr(e,t,n){
return e&&e.length?tn(e,Nn(t,n,3),!0):[]}function br(e,t,n,r){var i=e?e.length:0;return i?(n&&"number"!=typeof n&&Qn(e,t,n)&&(n=0,r=i),kt(e,t,n,r)):[]}
function wr(e){return e?e[0]:M}function Mr(e,t,n){var r=e?e.length:0;return n&&Qn(e,t,n)&&(t=!1),r?St(e,t):[]}function Dr(e){var t=e?e.length:0;return t?St(e,!0):[];
}function $r(e,t,r){var i=e?e.length:0;if(!i)return-1;if("number"==typeof r)r=r<0?Mo(i+r,0):r;else if(r){var a=rn(e,t);return a<i&&(t===t?t===e[a]:e[a]!==e[a])?a:-1;
}return n(e,t,r||0)}function Lr(e){return gr(e,1)}function kr(e){var t=e?e.length:0;return t?e[t-1]:M}function xr(e,t,n){var r=e?e.length:0;if(!r)return-1;
var i=r;if("number"==typeof n)i=(n<0?Mo(r+n,0):Do(n||0,r-1))+1;else if(n){i=rn(e,t,!0)-1;var a=e[i];return(t===t?t===a:a!==a)?i:-1}if(t!==t)return p(e,i,!0);
for(;i--;)if(e[i]===t)return i;return-1}function Tr(){var e=arguments,t=e[0];if(!t||!t.length)return t;for(var n=0,r=Bn(),i=e.length;++n<i;)for(var a=0,o=e[n];(a=r(t,o,a))>-1;)po.call(t,a,1);
return t}function Sr(e,t,n){var r=[];if(!e||!e.length)return r;var i=-1,a=[],o=e.length;for(t=Nn(t,n,3);++i<o;){var s=e[i];t(s,i,e)&&(r.push(s),a.push(i));
}return zt(e,a),r}function Yr(e){return _r(e,1)}function Cr(e,t,n){var r=e?e.length:0;return r?(n&&"number"!=typeof n&&Qn(e,t,n)&&(t=0,n=r),Gt(e,t,n)):[];
}function Er(e,t,n){var r=e?e.length:0;return r?((n?Qn(e,t,n):null==t)&&(t=1),Gt(e,0,t<0?0:t)):[]}function Ar(e,t,n){var r=e?e.length:0;return r?((n?Qn(e,t,n):null==t)&&(t=1),
t=r-(+t||0),Gt(e,t<0?0:t)):[]}function Fr(e,t,n){return e&&e.length?tn(e,Nn(t,n,3),!1,!0):[]}function jr(e,t,n){return e&&e.length?tn(e,Nn(t,n,3)):[]}function Pr(e,t,r,i){
var a=e?e.length:0;if(!a)return[];null!=t&&"boolean"!=typeof t&&(i=r,r=Qn(e,t,i)?M:t,t=!1);var o=Nn();return null==r&&o===bt||(r=o(r,i,3)),t&&Bn()==n?g(e,r):Qt(e,r);
}function Or(e){if(!e||!e.length)return[];var t=-1,n=0;e=st(e,function(e){if(Kn(e))return n=Mo(e.length,n),!0});for(var r=Ia(n);++t<n;)r[t]=ut(e,Bt(t));
return r}function Hr(e,t,n){var r=e?e.length:0;if(!r)return[];var i=Or(e);return null==t?i:(t=on(t,n,4),ut(i,function(e){return ct(e,t,M,!0)}))}function Rr(){
for(var e=-1,t=arguments.length;++e<t;){var n=arguments[e];if(Kn(n))var r=r?lt(Dt(r,n),Dt(n,r)):n}return r?Qt(r):[]}function Ir(e,t){var n=-1,r=e?e.length:0,i={};
for(!r||t||Ss(e[0])||(t=[]);++n<r;){var a=e[n];t?i[a]=t[n]:a&&(i[a[0]]=a[1])}return i}function Nr(e){var t=G(e);return t.__chain__=!0,t}function Ur(e,t,n){
return t.call(n,e),e}function Br(e,t,n){return t.call(n,e)}function Wr(){return Nr(this)}function zr(){return new ee(this.value(),this.__chain__)}function qr(e){
for(var t,n=this;n instanceof Z;){var r=pr(n);t?i.__wrapped__=r:t=r;var i=r;n=n.__wrapped__}return i.__wrapped__=e,t}function Vr(){var e=this.__wrapped__,t=function(e){
return n&&n.__dir__<0?e:e.reverse()};if(e instanceof Ne){var n=e;return this.__actions__.length&&(n=new Ne(this)),n=n.reverse(),n.__actions__.push({func:Br,
args:[t],thisArg:M}),new ee(n,this.__chain__)}return this.thru(t)}function Gr(){return this.value()+""}function Jr(){return nn(this.__wrapped__,this.__actions__);
}function Xr(e,t,n){var r=Ss(e)?at:$t;return n&&Qn(e,t,n)&&(t=M),"function"==typeof t&&n===M||(t=Nn(t,n,3)),r(e,t)}function Kr(e,t,n){var r=Ss(e)?st:xt;
return t=Nn(t,n,3),r(e,t)}function Zr(e,t){return is(e,Rt(t))}function Qr(e,t,n,r){var i=e?Uo(e):0;return nr(i)||(e=aa(e),i=e.length),n="number"!=typeof n||r&&Qn(t,n,r)?0:n<0?Mo(i+n,0):n||0,
"string"==typeof e||!Ss(e)&&Ui(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&Bn(e,t,n)>-1}function ei(e,t,n){var r=Ss(e)?ut:Ht;return t=Nn(t,n,3),r(e,t)}function ti(e,t){
return ei(e,Aa(t))}function ni(e,t,n){var r=Ss(e)?st:xt;return t=Nn(t,n,3),r(e,function(e,n,r){return!t(e,n,r)})}function ri(e,t,n){if(n?Qn(e,t,n):null==t){
e=cr(e);var r=e.length;return r>0?e[qt(0,r-1)]:M}var i=-1,a=Vi(e),r=a.length,o=r-1;for(t=Do(t<0?0:+t||0,r);++i<t;){var s=qt(i,o),u=a[s];a[s]=a[i],a[i]=u;
}return a.length=t,a}function ii(e){return ri(e,To)}function ai(e){var t=e?Uo(e):0;return nr(t)?t:Is(e).length}function oi(e,t,n){var r=Ss(e)?ft:Jt;return n&&Qn(e,t,n)&&(t=M),
"function"==typeof t&&n===M||(t=Nn(t,n,3)),r(e,t)}function si(e,t,n){if(null==e)return[];n&&Qn(e,t,n)&&(t=M);var r=-1;t=Nn(t,n,3);var i=Ht(e,function(e,n,i){
return{criteria:t(e,n,i),index:++r,value:e}});return Xt(i,s)}function ui(e,t,n,r){return null==e?[]:(r&&Qn(t,n,r)&&(n=M),Ss(t)||(t=null==t?[]:[t]),Ss(n)||(n=null==n?[]:[n]),
Kt(e,t,n))}function li(e,t){return Kr(e,Rt(t))}function ci(e,t){if("function"!=typeof t){if("function"!=typeof e)throw new Ja(I);var n=e;e=t,t=n}return e=bo(e=+e)?e:0,
function(){if(--e<1)return t.apply(this,arguments)}}function di(e,t,n){return n&&Qn(e,t,n)&&(t=M),t=e&&null==t?e.length:Mo(+t||0,0),On(e,C,M,M,M,M,t)}function fi(e,t){
var n;if("function"!=typeof t){if("function"!=typeof e)throw new Ja(I);var r=e;e=t,t=r}return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=M),
n}}function pi(e,t,n){function r(){p&&oo(p),l&&oo(l),h=0,l=p=m=M}function i(t,n){n&&oo(n),l=p=m=M,t&&(h=hs(),c=e.apply(f,u),p||l||(u=f=M))}function a(){
var e=t-(hs()-d);e<=0||e>t?i(m,l):p=fo(a,e)}function o(){i(g,p)}function s(){if(u=arguments,d=hs(),f=this,m=g&&(p||!v),_===!1)var n=v&&!p;else{l||v||(h=d);
var r=_-(d-h),i=r<=0||r>_;i?(l&&(l=oo(l)),h=d,c=e.apply(f,u)):l||(l=fo(o,r))}return i&&p?p=oo(p):p||t===_||(p=fo(a,t)),n&&(i=!0,c=e.apply(f,u)),!i||p||l||(u=f=M),
c}var u,l,c,d,f,p,m,h=0,_=!1,g=!0;if("function"!=typeof e)throw new Ja(I);if(t=t<0?0:+t||0,n===!0){var v=!0;g=!1}else Fi(n)&&(v=!!n.leading,_="maxWait"in n&&Mo(+n.maxWait||0,t),
g="trailing"in n?!!n.trailing:g);return s.cancel=r,s}function mi(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new Ja(I);var n=function(){
var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o),o};return n.cache=new mi.Cache,
n}function hi(e){if("function"!=typeof e)throw new Ja(I);return function(){return!e.apply(this,arguments)}}function _i(e){return fi(2,e)}function gi(e,t){
if("function"!=typeof e)throw new Ja(I);return t=Mo(t===M?e.length-1:+t||0,0),function(){for(var n=arguments,r=-1,i=Mo(n.length-t,0),a=Ia(i);++r<i;)a[r]=n[t+r];
switch(t){case 0:return e.call(this,a);case 1:return e.call(this,n[0],a);case 2:return e.call(this,n[0],n[1],a)}var o=Ia(t+1);for(r=-1;++r<t;)o[r]=n[r];
return o[t]=a,e.apply(this,o)}}function vi(e){if("function"!=typeof e)throw new Ja(I);return function(t){return e.apply(this,t)}}function yi(e,t,n){var r=!0,i=!0;
if("function"!=typeof e)throw new Ja(I);return n===!1?r=!1:Fi(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),pi(e,t,{leading:r,maxWait:+t,
trailing:i})}function bi(e,t){return t=null==t?xa:t,On(t,S,M,[e],[])}function wi(e,t,n,r){return t&&"boolean"!=typeof t&&Qn(e,t,n)?t=!1:"function"==typeof t&&(r=n,
n=t,t=!1),"function"==typeof n?wt(e,t,on(n,r,1)):wt(e,t)}function Mi(e,t,n){return"function"==typeof t?wt(e,!0,on(t,n,1)):wt(e,!0)}function Di(e,t){return e>t;
}function $i(e,t){return e>=t}function Li(e){return m(e)&&Kn(e)&&eo.call(e,"callee")&&!lo.call(e,"callee")}function ki(e){return e===!0||e===!1||m(e)&&no.call(e)==W;
}function xi(e){return m(e)&&no.call(e)==z}function Ti(e){return!!e&&1===e.nodeType&&m(e)&&!Ii(e)}function Si(e){return null==e||(Kn(e)&&(Ss(e)||Ui(e)||Li(e)||m(e)&&Ai(e.splice))?!e.length:!Is(e).length);
}function Yi(e,t,n,r){n="function"==typeof n?on(n,r,3):M;var i=n?n(e,t):M;return i===M?jt(e,t,n):!!i}function Ci(e){return m(e)&&"string"==typeof e.message&&no.call(e)==q;
}function Ei(e){return"number"==typeof e&&bo(e)}function Ai(e){return Fi(e)&&no.call(e)==V}function Fi(e){var t=typeof e;return!!e&&("object"==t||"function"==t);
}function ji(e,t,n,r){return n="function"==typeof n?on(n,r,3):M,Ot(e,Wn(t),n)}function Pi(e){return Ri(e)&&e!=+e}function Oi(e){return null!=e&&(Ai(e)?io.test(Qa.call(e)):m(e)&&Ce.test(e));
}function Hi(e){return null===e}function Ri(e){return"number"==typeof e||m(e)&&no.call(e)==J}function Ii(e){var t;if(!m(e)||no.call(e)!=X||Li(e)||!eo.call(e,"constructor")&&(t=e.constructor,
"function"==typeof t&&!(t instanceof t)))return!1;var n;return Yt(e,function(e,t){n=t}),n===M||eo.call(e,n)}function Ni(e){return Fi(e)&&no.call(e)==K}
function Ui(e){return"string"==typeof e||m(e)&&no.call(e)==Q}function Bi(e){return m(e)&&nr(e.length)&&!!Re[no.call(e)]}function Wi(e){return e===M}function zi(e,t){
return e<t}function qi(e,t){return e<=t}function Vi(e){var t=e?Uo(e):0;return nr(t)?t?nt(e):[]:aa(e)}function Gi(e){return yt(e,ea(e))}function Ji(e,t,n){
var r=jo(e);return n&&Qn(e,t,n)&&(t=M),t?gt(r,t):r}function Xi(e){return At(e,ea(e))}function Ki(e,t,n){var r=null==e?M:Ft(e,fr(t),t+"");return r===M?n:r;
}function Zi(e,t){if(null==e)return!1;var n=eo.call(e,t);if(!n&&!er(t)){if(t=fr(t),e=1==t.length?e:Ft(e,Gt(t,0,-1)),null==e)return!1;t=kr(t),n=eo.call(e,t);
}return n||nr(e.length)&&Zn(t,e.length)&&(Ss(e)||Li(e))}function Qi(e,t,n){n&&Qn(e,t,n)&&(t=M);for(var r=-1,i=Is(e),a=i.length,o={};++r<a;){var s=i[r],u=e[s];
t?eo.call(o,u)?o[u].push(s):o[u]=[s]:o[u]=s}return o}function ea(e){if(null==e)return[];Fi(e)||(e=qa(e));var t=e.length;t=t&&nr(t)&&(Ss(e)||Li(e))&&t||0;
for(var n=e.constructor,r=-1,i="function"==typeof n&&n.prototype===e,a=Ia(t),o=t>0;++r<t;)a[r]=r+"";for(var s in e)o&&Zn(s,t)||"constructor"==s&&(i||!eo.call(e,s))||a.push(s);
return a}function ta(e){e=dr(e);for(var t=-1,n=Is(e),r=n.length,i=Ia(r);++t<r;){var a=n[t];i[t]=[a,e[a]]}return i}function na(e,t,n){var r=null==e?M:e[t];
return r===M&&(null==e||er(t,e)||(t=fr(t),e=1==t.length?e:Ft(e,Gt(t,0,-1)),r=null==e?M:e[kr(t)]),r=r===M?n:r),Ai(r)?r.call(e):r}function ra(e,t,n){if(null==e)return e;
var r=t+"";t=null!=e[r]||er(t,e)?[r]:fr(t);for(var i=-1,a=t.length,o=a-1,s=e;null!=s&&++i<a;){var u=t[i];Fi(s)&&(i==o?s[u]=n:null==s[u]&&(s[u]=Zn(t[i+1])?[]:{})),
s=s[u]}return e}function ia(e,t,n,r){var i=Ss(e)||Bi(e);if(t=Nn(t,r,4),null==n)if(i||Fi(e)){var a=e.constructor;n=i?Ss(e)?new a:[]:jo(Ai(a)?a.prototype:M);
}else n={};return(i?rt:Ct)(e,function(e,r,i){return t(n,e,r,i)}),n}function aa(e){return en(e,Is(e))}function oa(e){return en(e,ea(e))}function sa(e,t,n){
return t=+t||0,n===M?(n=t,t=0):n=+n||0,e>=Do(t,n)&&e<Mo(t,n)}function ua(e,t,n){n&&Qn(e,t,n)&&(t=n=M);var r=null==e,i=null==t;if(null==n&&(i&&"boolean"==typeof e?(n=e,
e=1):"boolean"==typeof t&&(n=t,i=!0)),r&&i&&(t=1,i=!1),e=+e||0,i?(t=e,e=0):t=+t||0,n||e%1||t%1){var a=ko();return Do(e+a*(t-e+so("1e-"+((a+"").length-1))),t);
}return qt(e,t)}function la(e){return e=i(e),e&&e.charAt(0).toUpperCase()+e.slice(1)}function ca(e){return e=i(e),e&&e.replace(Ae,l).replace(ke,"")}function da(e,t,n){
e=i(e),t+="";var r=e.length;return n=n===M?r:Do(n<0?0:+n||0,r),n-=t.length,n>=0&&e.indexOf(t,n)==n}function fa(e){return e=i(e),e&&ge.test(e)?e.replace(he,c):e;
}function pa(e){return e=i(e),e&&Le.test(e)?e.replace($e,d):e||"(?:)"}function ma(e,t,n){e=i(e),t=+t;var r=e.length;if(r>=t||!bo(t))return e;var a=(t-r)/2,o=vo(a),s=_o(a);
return n=An("",s,n),n.slice(0,o)+e+n}function ha(e,t,n){return(n?Qn(e,t,n):null==t)?t=0:t&&(t=+t),e=ya(e),Lo(e,t||(Ye.test(e)?16:10))}function _a(e,t){
var n="";if(e=i(e),t=+t,t<1||!e||!bo(t))return n;do t%2&&(n+=e),t=vo(t/2),e+=e;while(t);return n}function ga(e,t,n){return e=i(e),n=null==n?0:Do(n<0?0:+n||0,e.length),
e.lastIndexOf(t,n)==n}function va(e,t,n){var r=G.templateSettings;n&&Qn(e,t,n)&&(t=n=M),e=i(e),t=_t(gt({},n||t),r,ht);var a,o,s=_t(gt({},t.imports),r.imports,ht),u=Is(s),l=en(s,u),c=0,d=t.interpolate||Fe,p="__p += '",m=Va((t.escape||Fe).source+"|"+d.source+"|"+(d===be?Te:Fe).source+"|"+(t.evaluate||Fe).source+"|$","g"),h="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++He+"]")+"\n";
e.replace(m,function(t,n,r,i,s,u){return r||(r=i),p+=e.slice(c,u).replace(je,f),n&&(a=!0,p+="' +\n__e("+n+") +\n'"),s&&(o=!0,p+="';\n"+s+";\n__p += '"),
r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=u+t.length,t}),p+="';\n";var _=t.variable;_||(p="with (obj) {\n"+p+"\n}\n"),p=(o?p.replace(de,""):p).replace(fe,"$1").replace(pe,"$1;"),
p="function("+(_||"obj")+") {\n"+(_?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(a?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";
var g=Ks(function(){return Ba(u,h+"return "+p).apply(M,l)});if(g.source=p,Ci(g))throw g;return g}function ya(e,t,n){var r=e;return(e=i(e))?(n?Qn(r,t,n):null==t)?e.slice(v(e),y(e)+1):(t+="",
e.slice(a(e,t),o(e,t)+1)):e}function ba(e,t,n){var r=e;return e=i(e),e?(n?Qn(r,t,n):null==t)?e.slice(v(e)):e.slice(a(e,t+"")):e}function wa(e,t,n){var r=e;
return e=i(e),e?(n?Qn(r,t,n):null==t)?e.slice(0,y(e)+1):e.slice(0,o(e,t+"")+1):e}function Ma(e,t,n){n&&Qn(e,t,n)&&(t=M);var r=A,a=F;if(null!=t)if(Fi(t)){
var o="separator"in t?t.separator:o;r="length"in t?+t.length||0:r,a="omission"in t?i(t.omission):a}else r=+t||0;if(e=i(e),r>=e.length)return e;var s=r-a.length;
if(s<1)return a;var u=e.slice(0,s);if(null==o)return u+a;if(Ni(o)){if(e.slice(s).search(o)){var l,c,d=e.slice(0,s);for(o.global||(o=Va(o.source,(Se.exec(o)||"")+"g")),
o.lastIndex=0;l=o.exec(d);)c=l.index;u=u.slice(0,null==c?s:c)}}else if(e.indexOf(o,s)!=s){var f=u.lastIndexOf(o);f>-1&&(u=u.slice(0,f))}return u+a}function Da(e){
return e=i(e),e&&_e.test(e)?e.replace(me,b):e}function $a(e,t,n){return n&&Qn(e,t,n)&&(t=M),e=i(e),e.match(t||Pe)||[]}function La(e,t,n){return n&&Qn(e,t,n)&&(t=M),
m(e)?Ta(e):bt(e,t)}function ka(e){return function(){return e}}function xa(e){return e}function Ta(e){return Rt(wt(e,!0))}function Sa(e,t){return It(e,wt(t,!0));
}function Ya(e,t,n){if(null==n){var r=Fi(t),i=r?Is(t):M,a=i&&i.length?At(t,i):M;(a?a.length:r)||(a=!1,n=t,t=e,e=this)}a||(a=At(t,Is(t)));var o=!0,s=-1,u=Ai(e),l=a.length;
n===!1?o=!1:Fi(n)&&"chain"in n&&(o=n.chain);for(;++s<l;){var c=a[s],d=t[c];e[c]=d,u&&(e.prototype[c]=function(t){return function(){var n=this.__chain__;
if(o||n){var r=e(this.__wrapped__),i=r.__actions__=nt(this.__actions__);return i.push({func:t,args:arguments,thisArg:e}),r.__chain__=n,r}return t.apply(e,lt([this.value()],arguments));
}}(d))}return e}function Ca(){return Qe._=ro,this}function Ea(){}function Aa(e){return er(e)?Bt(e):Wt(e)}function Fa(e){return function(t){return Ft(e,fr(t),t+"");
}}function ja(e,t,n){n&&Qn(e,t,n)&&(t=n=M),e=+e||0,n=null==n?1:+n||0,null==t?(t=e,e=0):t=+t||0;for(var r=-1,i=Mo(_o((t-e)/(n||1)),0),a=Ia(i);++r<i;)a[r]=e,
e+=n;return a}function Pa(e,t,n){if(e=vo(e),e<1||!bo(e))return[];var r=-1,i=Ia(Do(e,So));for(t=on(t,n,1);++r<e;)r<So?i[r]=t(r):t(r);return i}function Oa(e){
var t=++to;return i(e)+t}function Ha(e,t){return(+e||0)+(+t||0)}function Ra(e,t,n){return n&&Qn(e,t,n)&&(t=M),t=Nn(t,n,3),1==t.length?pt(Ss(e)?e:cr(e),t):Zt(e,t);
}h=h?et.defaults(Qe.Object(),h,et.pick(Qe,Oe)):Qe;var Ia=h.Array,Na=h.Date,Ua=h.Error,Ba=h.Function,Wa=h.Math,za=h.Number,qa=h.Object,Va=h.RegExp,Ga=h.String,Ja=h.TypeError,Xa=Ia.prototype,Ka=qa.prototype,Za=Ga.prototype,Qa=Ba.prototype.toString,eo=Ka.hasOwnProperty,to=0,no=Ka.toString,ro=Qe._,io=Va("^"+Qa.call(eo).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ao=h.ArrayBuffer,oo=h.clearTimeout,so=h.parseFloat,uo=Wa.pow,lo=Ka.propertyIsEnumerable,co=zn(h,"Set"),fo=h.setTimeout,po=Xa.splice,mo=h.Uint8Array,ho=zn(h,"WeakMap"),_o=Wa.ceil,go=zn(qa,"create"),vo=Wa.floor,yo=zn(Ia,"isArray"),bo=h.isFinite,wo=zn(qa,"keys"),Mo=Wa.max,Do=Wa.min,$o=zn(Na,"now"),Lo=h.parseInt,ko=Wa.random,xo=za.NEGATIVE_INFINITY,To=za.POSITIVE_INFINITY,So=4294967295,Yo=So-1,Co=So>>>1,Eo=9007199254740991,Ao=ho&&new ho,Fo={};
G.support={};G.templateSettings={escape:ve,evaluate:ye,interpolate:be,variable:"",imports:{_:G}};var jo=function(){function e(){}return function(t){if(Fi(t)){
e.prototype=t;var n=new e;e.prototype=M}return n||{}}}(),Po=fn(Ct),Oo=fn(Et,!0),Ho=pn(),Ro=pn(!0),Io=Ao?function(e,t){return Ao.set(e,t),e}:xa,No=Ao?function(e){
return Ao.get(e)}:Ea,Uo=Bt("length"),Bo=function(){var e=0,t=0;return function(n,r){var i=hs(),a=P-(i-t);if(t=i,a>0){if(++e>=j)return n}else e=0;return Io(n,r);
}}(),Wo=gi(function(e,t){return m(e)&&Kn(e)?Dt(e,St(t,!1,!0)):[]}),zo=Mn(),qo=Mn(!0),Vo=gi(function(e){for(var t=e.length,r=t,i=Ia(d),a=Bn(),o=a==n,s=[];r--;){
var u=e[r]=Kn(u=e[r])?u:[];i[r]=o&&u.length>=120?hn(r&&u):null}var l=e[0],c=-1,d=l?l.length:0,f=i[0];e:for(;++c<d;)if(u=l[c],(f?Ke(f,u):a(s,u,0))<0){for(var r=t;--r;){
var p=i[r];if((p?Ke(p,u):a(e[r],u,0))<0)continue e}f&&f.push(u),s.push(u)}return s}),Go=gi(function(t,n){n=St(n);var r=vt(t,n);return zt(t,n.sort(e)),r;
}),Jo=Pn(),Xo=Pn(!0),Ko=gi(function(e){return Qt(St(e,!1,!0))}),Zo=gi(function(e,t){return Kn(e)?Dt(e,t):[]}),Qo=gi(Or),es=gi(function(e){var t=e.length,n=t>2?e[t-2]:M,r=t>1?e[t-1]:M;
return t>2&&"function"==typeof n?t-=2:(n=t>1&&"function"==typeof r?(--t,r):M,r=M),e.length=t,Hr(e,n,r)}),ts=gi(function(e){return e=St(e),this.thru(function(t){
return tt(Ss(t)?t:[dr(t)],e)})}),ns=gi(function(e,t){return vt(e,St(t))}),rs=cn(function(e,t,n){eo.call(e,n)?++e[n]:e[n]=1}),is=wn(Po),as=wn(Oo,!0),os=Ln(rt,Po),ss=Ln(it,Oo),us=cn(function(e,t,n){
eo.call(e,n)?e[n].push(t):e[n]=[t]}),ls=cn(function(e,t,n){e[n]=t}),cs=gi(function(e,t,n){var r=-1,i="function"==typeof t,a=er(t),o=Kn(e)?Ia(e.length):[];
return Po(e,function(e){var s=i?t:a&&null!=e?e[t]:M;o[++r]=s?s.apply(e,n):Xn(e,t,n)}),o}),ds=cn(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]];
}),fs=Cn(ct,Po),ps=Cn(dt,Oo),ms=gi(function(e,t){if(null==e)return[];var n=t[2];return n&&Qn(t[0],t[1],n)&&(t.length=1),Kt(e,St(t),[])}),hs=$o||function(){
return(new Na).getTime()},_s=gi(function(e,t,n){var r=$;if(n.length){var i=_(n,_s.placeholder);r|=S}return On(e,r,t,n,i)}),gs=gi(function(e,t){t=t.length?St(t):Xi(e);
for(var n=-1,r=t.length;++n<r;){var i=t[n];e[i]=On(e[i],$,e)}return e}),vs=gi(function(e,t,n){var r=$|L;if(n.length){var i=_(n,vs.placeholder);r|=S}return On(t,r,e,n,i);
}),ys=vn(x),bs=vn(T),ws=gi(function(e,t){return Mt(e,1,t)}),Ms=gi(function(e,t,n){return Mt(e,t,n)}),Ds=$n(),$s=$n(!0),Ls=gi(function(e,t){if(t=St(t),"function"!=typeof e||!at(t,r))throw new Ja(I);
var n=t.length;return gi(function(r){for(var i=Do(r.length,n);i--;)r[i]=t[i](r[i]);return e.apply(this,r)})}),ks=Yn(S),xs=Yn(Y),Ts=gi(function(e,t){return On(e,E,M,M,M,St(t));
}),Ss=yo||function(e){return m(e)&&nr(e.length)&&no.call(e)==B},Ys=dn(Nt),Cs=dn(function(e,t,n){return n?_t(e,t,n):gt(e,t)}),Es=yn(Cs,mt),As=yn(Ys,ar),Fs=Dn(Ct),js=Dn(Et),Ps=kn(Ho),Os=kn(Ro),Hs=xn(Ct),Rs=xn(Et),Is=wo?function(e){
var t=null==e?M:e.constructor;return"function"==typeof t&&t.prototype===e||"function"!=typeof e&&Kn(e)?lr(e):Fi(e)?wo(e):[]}:lr,Ns=Tn(!0),Us=Tn(),Bs=gi(function(e,t){
if(null==e)return{};if("function"!=typeof t[0]){var t=ut(St(t),Ga);return or(e,Dt(ea(e),t))}var n=on(t[0],t[1],3);return sr(e,function(e,t,r){return!n(e,t,r);
})}),Ws=gi(function(e,t){return null==e?{}:"function"==typeof t[0]?sr(e,on(t[0],t[1],3)):or(e,St(t))}),zs=_n(function(e,t,n){return t=t.toLowerCase(),e+(n?t.charAt(0).toUpperCase()+t.slice(1):t);
}),qs=_n(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),Vs=Sn(),Gs=Sn(!0),Js=_n(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}),Xs=_n(function(e,t,n){
return e+(n?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Ks=gi(function(e,t){try{return e.apply(M,t)}catch(e){return Ci(e)?e:new Ua(e)}}),Zs=gi(function(e,t){
return function(n){return Xn(n,e,t)}}),Qs=gi(function(e,t){return function(n){return Xn(e,n,t)}}),eu=jn("ceil"),tu=jn("floor"),nu=bn(Di,xo),ru=bn(zi,To),iu=jn("round");
return G.prototype=Z.prototype,ee.prototype=jo(Z.prototype),ee.prototype.constructor=ee,Ne.prototype=jo(Z.prototype),Ne.prototype.constructor=Ne,ze.prototype.delete=qe,
ze.prototype.get=Ve,ze.prototype.has=Ge,ze.prototype.set=Je,Xe.prototype.push=Ze,mi.Cache=ze,G.after=ci,G.ary=di,G.assign=Cs,G.at=ns,G.before=fi,G.bind=_s,
G.bindAll=gs,G.bindKey=vs,G.callback=La,G.chain=Nr,G.chunk=mr,G.compact=hr,G.constant=ka,G.countBy=rs,G.create=Ji,G.curry=ys,G.curryRight=bs,G.debounce=pi,
G.defaults=Es,G.defaultsDeep=As,G.defer=ws,G.delay=Ms,G.difference=Wo,G.drop=_r,G.dropRight=gr,G.dropRightWhile=vr,G.dropWhile=yr,G.fill=br,G.filter=Kr,
G.flatten=Mr,G.flattenDeep=Dr,G.flow=Ds,G.flowRight=$s,G.forEach=os,G.forEachRight=ss,G.forIn=Ps,G.forInRight=Os,G.forOwn=Hs,G.forOwnRight=Rs,G.functions=Xi,
G.groupBy=us,G.indexBy=ls,G.initial=Lr,G.intersection=Vo,G.invert=Qi,G.invoke=cs,G.keys=Is,G.keysIn=ea,G.map=ei,G.mapKeys=Ns,G.mapValues=Us,G.matches=Ta,
G.matchesProperty=Sa,G.memoize=mi,G.merge=Ys,G.method=Zs,G.methodOf=Qs,G.mixin=Ya,G.modArgs=Ls,G.negate=hi,G.omit=Bs,G.once=_i,G.pairs=ta,G.partial=ks,
G.partialRight=xs,G.partition=ds,G.pick=Ws,G.pluck=ti,G.property=Aa,G.propertyOf=Fa,G.pull=Tr,G.pullAt=Go,G.range=ja,G.rearg=Ts,G.reject=ni,G.remove=Sr,
G.rest=Yr,G.restParam=gi,G.set=ra,G.shuffle=ii,G.slice=Cr,G.sortBy=si,G.sortByAll=ms,G.sortByOrder=ui,G.spread=vi,G.take=Er,G.takeRight=Ar,G.takeRightWhile=Fr,
G.takeWhile=jr,G.tap=Ur,G.throttle=yi,G.thru=Br,G.times=Pa,G.toArray=Vi,G.toPlainObject=Gi,G.transform=ia,G.union=Ko,G.uniq=Pr,G.unzip=Or,G.unzipWith=Hr,
G.values=aa,G.valuesIn=oa,G.where=li,G.without=Zo,G.wrap=bi,G.xor=Rr,G.zip=Qo,G.zipObject=Ir,G.zipWith=es,G.backflow=$s,G.collect=ei,G.compose=$s,G.each=os,
G.eachRight=ss,G.extend=Cs,G.iteratee=La,G.methods=Xi,G.object=Ir,G.select=Kr,G.tail=Yr,G.unique=Pr,Ya(G,G),G.add=Ha,G.attempt=Ks,G.camelCase=zs,G.capitalize=la,
G.ceil=eu,G.clone=wi,G.cloneDeep=Mi,G.deburr=ca,G.endsWith=da,G.escape=fa,G.escapeRegExp=pa,G.every=Xr,G.find=is,G.findIndex=zo,G.findKey=Fs,G.findLast=as,
G.findLastIndex=qo,G.findLastKey=js,G.findWhere=Zr,G.first=wr,G.floor=tu,G.get=Ki,G.gt=Di,G.gte=$i,G.has=Zi,G.identity=xa,G.includes=Qr,G.indexOf=$r,G.inRange=sa,
G.isArguments=Li,G.isArray=Ss,G.isBoolean=ki,G.isDate=xi,G.isElement=Ti,G.isEmpty=Si,G.isEqual=Yi,G.isError=Ci,G.isFinite=Ei,G.isFunction=Ai,G.isMatch=ji,
G.isNaN=Pi,G.isNative=Oi,G.isNull=Hi,G.isNumber=Ri,G.isObject=Fi,G.isPlainObject=Ii,G.isRegExp=Ni,G.isString=Ui,G.isTypedArray=Bi,G.isUndefined=Wi,G.kebabCase=qs,
G.last=kr,G.lastIndexOf=xr,G.lt=zi,G.lte=qi,G.max=nu,G.min=ru,G.noConflict=Ca,G.noop=Ea,G.now=hs,G.pad=ma,G.padLeft=Vs,G.padRight=Gs,G.parseInt=ha,G.random=ua,
G.reduce=fs,G.reduceRight=ps,G.repeat=_a,G.result=na,G.round=iu,G.runInContext=w,G.size=ai,G.snakeCase=Js,G.some=oi,G.sortedIndex=Jo,G.sortedLastIndex=Xo,
G.startCase=Xs,G.startsWith=ga,G.sum=Ra,G.template=va,G.trim=ya,G.trimLeft=ba,G.trimRight=wa,G.trunc=Ma,G.unescape=Da,G.uniqueId=Oa,G.words=$a,G.all=Xr,
G.any=oi,G.contains=Qr,G.eq=Yi,G.detect=is,G.foldl=fs,G.foldr=ps,G.head=wr,G.include=Qr,G.inject=fs,Ya(G,function(){var e={};return Ct(G,function(t,n){
G.prototype[n]||(e[n]=t)}),e}(),!1),G.sample=ri,G.prototype.sample=function(e){return this.__chain__||null!=e?this.thru(function(t){return ri(t,e)}):ri(this.value());
},G.VERSION=D,rt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){G[e].placeholder=G}),rt(["drop","take"],function(e,t){Ne.prototype[e]=function(n){
var r=this.__filtered__;if(r&&!t)return new Ne(this);n=null==n?1:Mo(vo(n)||0,0);var i=this.clone();return r?i.__takeCount__=Do(i.__takeCount__,n):i.__views__.push({
size:n,type:e+(i.__dir__<0?"Right":"")}),i},Ne.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),rt(["filter","map","takeWhile"],function(e,t){
var n=t+1,r=n!=R;Ne.prototype[e]=function(e,t){var i=this.clone();return i.__iteratees__.push({iteratee:Nn(e,t,1),type:n}),i.__filtered__=i.__filtered__||r,
i}}),rt(["first","last"],function(e,t){var n="take"+(t?"Right":"");Ne.prototype[e]=function(){return this[n](1).value()[0]}}),rt(["initial","rest"],function(e,t){
var n="drop"+(t?"":"Right");Ne.prototype[e]=function(){return this.__filtered__?new Ne(this):this[n](1)}}),rt(["pluck","where"],function(e,t){var n=t?"filter":"map",r=t?Rt:Aa;
Ne.prototype[e]=function(e){return this[n](r(e))}}),Ne.prototype.compact=function(){return this.filter(xa)},Ne.prototype.reject=function(e,t){return e=Nn(e,t,1),
this.filter(function(t){return!e(t)})},Ne.prototype.slice=function(e,t){e=null==e?0:+e||0;var n=this;return n.__filtered__&&(e>0||t<0)?new Ne(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),
t!==M&&(t=+t||0,n=t<0?n.dropRight(-t):n.take(t-e)),n)},Ne.prototype.takeRightWhile=function(e,t){return this.reverse().takeWhile(e,t).reverse()},Ne.prototype.toArray=function(){
return this.take(To)},Ct(Ne.prototype,function(e,t){var n=/^(?:filter|map|reject)|While$/.test(t),r=/^(?:first|last)$/.test(t),i=G[r?"take"+("last"==t?"Right":""):t];
i&&(G.prototype[t]=function(){var t=r?[1]:arguments,a=this.__chain__,o=this.__wrapped__,s=!!this.__actions__.length,u=o instanceof Ne,l=t[0],c=u||Ss(o);
c&&n&&"function"==typeof l&&1!=l.length&&(u=c=!1);var d=function(e){return r&&a?i(e,1)[0]:i.apply(M,lt([e],t))},f={func:Br,args:[d],thisArg:M},p=u&&!s;if(r&&!a)return p?(o=o.clone(),
o.__actions__.push(f),e.call(o)):i.call(M,this.value())[0];if(!r&&c){o=p?o:new Ne(this);var m=e.apply(o,t);return m.__actions__.push(f),new ee(m,a)}return this.thru(d);
})}),rt(["join","pop","push","replace","shift","sort","splice","split","unshift"],function(e){var t=(/^(?:replace|split)$/.test(e)?Za:Xa)[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:join|pop|replace|shift)$/.test(e);
G.prototype[e]=function(){var e=arguments;return r&&!this.__chain__?t.apply(this.value(),e):this[n](function(n){return t.apply(n,e)})}}),Ct(Ne.prototype,function(e,t){
var n=G[t];if(n){var r=n.name,i=Fo[r]||(Fo[r]=[]);i.push({name:t,func:n})}}),Fo[En(M,L).name]=[{name:"wrapper",func:M}],Ne.prototype.clone=Ue,Ne.prototype.reverse=Be,
Ne.prototype.value=We,G.prototype.chain=Wr,G.prototype.commit=zr,G.prototype.concat=ts,G.prototype.plant=qr,G.prototype.reverse=Vr,G.prototype.toString=Gr,
G.prototype.run=G.prototype.toJSON=G.prototype.valueOf=G.prototype.value=Jr,G.prototype.collect=G.prototype.map,G.prototype.head=G.prototype.first,G.prototype.select=G.prototype.filter,
G.prototype.tail=G.prototype.rest,G}var M,D="3.10.1",$=1,L=2,k=4,x=8,T=16,S=32,Y=64,C=128,E=256,A=30,F="...",j=150,P=16,O=200,H=1,R=2,I="Expected a function",N="__lodash_placeholder__",U="[object Arguments]",B="[object Array]",W="[object Boolean]",z="[object Date]",q="[object Error]",V="[object Function]",G="[object Map]",J="[object Number]",X="[object Object]",K="[object RegExp]",Z="[object Set]",Q="[object String]",ee="[object WeakMap]",te="[object ArrayBuffer]",ne="[object Float32Array]",re="[object Float64Array]",ie="[object Int8Array]",ae="[object Int16Array]",oe="[object Int32Array]",se="[object Uint8Array]",ue="[object Uint8ClampedArray]",le="[object Uint16Array]",ce="[object Uint32Array]",de=/\b__p \+= '';/g,fe=/\b(__p \+=) '' \+/g,pe=/(__e\(.*?\)|\b__t\)) \+\n'';/g,me=/&(?:amp|lt|gt|quot|#39|#96);/g,he=/[&<>"'`]/g,_e=RegExp(me.source),ge=RegExp(he.source),ve=/<%-([\s\S]+?)%>/g,ye=/<%([\s\S]+?)%>/g,be=/<%=([\s\S]+?)%>/g,we=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,Me=/^\w*$/,De=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,$e=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,Le=RegExp($e.source),ke=/[\u0300-\u036f\ufe20-\ufe23]/g,xe=/\\(\\)?/g,Te=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Se=/\w*$/,Ye=/^0[xX]/,Ce=/^\[object .+?Constructor\]$/,Ee=/^\d+$/,Ae=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Fe=/($^)/,je=/['\n\r\u2028\u2029\\]/g,Pe=function(){
var e="[A-Z\\xc0-\\xd6\\xd8-\\xde]",t="[a-z\\xdf-\\xf6\\xf8-\\xff]+";return RegExp(e+"+(?="+e+t+")|"+e+"?"+t+"|"+e+"+|[0-9]+","g")}(),Oe=["Array","ArrayBuffer","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Math","Number","Object","RegExp","Set","String","_","clearTimeout","isFinite","parseFloat","parseInt","setTimeout","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap"],He=-1,Re={};
Re[ne]=Re[re]=Re[ie]=Re[ae]=Re[oe]=Re[se]=Re[ue]=Re[le]=Re[ce]=!0,Re[U]=Re[B]=Re[te]=Re[W]=Re[z]=Re[q]=Re[V]=Re[G]=Re[J]=Re[X]=Re[K]=Re[Z]=Re[Q]=Re[ee]=!1;
var Ie={};Ie[U]=Ie[B]=Ie[te]=Ie[W]=Ie[z]=Ie[ne]=Ie[re]=Ie[ie]=Ie[ae]=Ie[oe]=Ie[J]=Ie[X]=Ie[K]=Ie[Q]=Ie[se]=Ie[ue]=Ie[le]=Ie[ce]=!0,Ie[q]=Ie[V]=Ie[G]=Ie[Z]=Ie[ee]=!1;
var Ne={"Ã€":"A","Ã":"A","Ã‚":"A","Ãƒ":"A","Ã„":"A","Ã…":"A","Ã ":"a","Ã¡":"a","Ã¢":"a","Ã£":"a","Ã¤":"a","Ã¥":"a","Ã‡":"C","Ã§":"c","Ã":"D","Ã°":"d","Ãˆ":"E","Ã‰":"E",
"ÃŠ":"E","Ã‹":"E","Ã¨":"e","Ã©":"e","Ãª":"e","Ã«":"e","ÃŒ":"I","Ã":"I","ÃŽ":"I","Ã":"I","Ã¬":"i","Ã­":"i","Ã®":"i","Ã¯":"i","Ã‘":"N","Ã±":"n","Ã’":"O","Ã“":"O","Ã”":"O",
"Ã•":"O","Ã–":"O","Ã˜":"O","Ã²":"o","Ã³":"o","Ã´":"o","Ãµ":"o","Ã¶":"o","Ã¸":"o","Ã™":"U","Ãš":"U","Ã›":"U","Ãœ":"U","Ã¹":"u","Ãº":"u","Ã»":"u","Ã¼":"u","Ã":"Y","Ã½":"y",
"Ã¿":"y","Ã†":"Ae","Ã¦":"ae","Ãž":"Th","Ã¾":"th","ÃŸ":"ss"},Ue={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Be={"&amp;":"&","&lt;":"<",
"&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},We={function:!0,object:!0},ze={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",
9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"
},qe={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ve=We[typeof exports]&&exports&&!exports.nodeType&&exports,Ge=We[typeof module]&&module&&!module.nodeType&&module,Je=Ve&&Ge&&"object"==typeof global&&global&&global.Object&&global,Xe=We[typeof self]&&self&&self.Object&&self,Ke=We[typeof window]&&window&&window.Object&&window,Ze=Ge&&Ge.exports===Ve&&Ve,Qe=Je||Ke!==(this&&this.window)&&Ke||Xe||this,et=w();
"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Qe._=et,define("lodash",[],function(){return et})):Ve&&Ge?Ze?(Ge.exports=et)._=et:Ve._=et:Qe._=et;
}.call(this),define("misc/SettingExtender",["lodash"],function(e){"use strict";return{createExtension:function(e,t){return{factory:e,baseProperties:t}},
extendModel:function(t,n){var r=[],i=[];e.forOwn(n,function(n,i){t[i]&&(n.baseProperties.fake&&e.isUndefined(t[i])?(e.isUndefined(n.baseProperties.name)&&(n.baseProperties.name=i),
t[i]=n.baseProperties):e.extend(t[i],n.baseProperties),t[i]=n.factory(t[i]),r.push(i))}),t.startDependencyWatchers=function(n,a){e.forEach(r,function(r){
var o,s;o=t[r],e.isArray(o.recalculateFor)&&(s=function(){o.recalculateValue()},e.forEach(o.recalculateFor,function(e){var t=[a,e,"value"].join(".");i.push(n.$watch(t,s));
}))})},t.stopDependencyWatchers=function(){e.forEach(i,function(e){e()})}}}}),define("misc/Setting",["lodash"],function(e){"use strict";function t(t){var n,r;
e.isBoolean(t.disabled)&&(n=t.disabled,t.disabled=function(){return n}),e.isBoolean(t.hidden)&&(r=t.hidden,t.hidden=function(){return r})}function n(t){
e.isFunction(t.calculatedValue)&&(t.recalculateValue=function(){this.value=this.calculatedValue()}),e.isString(t.recalculateFor)&&(t.recalculateFor=[t.recalculateFor]);
}function r(r,i){e.defaults(r,i),t(r),n(r)}function i(t,n){var r=e.create(t);return e.assign(r,n,function(t,n){return e.isFunction(n)?e.bind(n,this):n},r),
r}var a,o,s,u,l,c;return a={getType:function(){return this.type},getName:function(){return this.name},getLabel:function(){return this.label},disabled:function(){
return!1},wrapDisabled:function(t,n){var r=this,i=this.disabled;n=n||"or",this.disabled=e.wrap(this.disabled,function(e){return"or"===n?t.call(r)||e.call(r):"replace"===n?t.call(r):t.call(r)&&e.call(r);
}),this.disabled.unwrap=function(){r.disabled=i}},hidden:function(){return!1},wrapHidden:function(t,n){var r=this,i=this.hidden;n=n||"or",this.hidden=e.wrap(this.hidden,function(e){
return"or"===n?t.call(r)||e.call(r):"replace"===n?t.call(r):t.call(r)&&e.call(r)}),this.hidden.unwrap=function(){r.hidden=i}},selectedOptionLabel:function(){
var t=e.isUndefined(this.value)?null:this.value;if(!e.isUndefined(this.options)){e.isUndefined(this.hiddenOptions)&&(this.hiddenOptions=[]);var n=e.find(this.options.concat(this.hiddenOptions),function(e){
return t==e.value});if(!e.isUndefined(n))return n.label}return t}},o=e.extend({},a,{type:"selectable"}),s=e.extend({},a,{type:"boolean"}),u=e.extend({},a,{
type:"text"}),l=e.extend({},a,{type:"timestamp"}),c={createSelectable:function(e){return r(e,{value:null,options:[]}),i(o,e)},createBoolean:function(e){
return r(e,{value:!1,trueValue:!0,falseValue:!1}),i(s,e)},createText:function(e){return r(e,{value:""}),i(u,e)},createTimestamp:function(e){return r(e,{
value:0}),i(l,e)}}}),define("misc/SettingOption",["lodash"],function(e){"use strict";function t(t){var n,r;e.isBoolean(t.disabled)&&(n=t.disabled,t.disabled=function(){
return n}),e.isBoolean(t.hidden)&&(r=t.hidden,t.hidden=function(){return r})}function n(n,r){e.defaults(n,r),t(n)}function r(t,n){var r=e.create(t);return e.assign(r,n,function(t,n){
return e.isFunction(n)?e.bind(n,this):n},r),r}var i,a;return i={disabled:function(){return!1},wrapDisabled:function(t,n){var r=this,i=this.disabled;n=n||"or",
this.disabled=e.wrap(this.disabled,function(e){return"or"===n?t.call(r)||e.call(r):"replace"===n?t.call(r):t.call(r)&&e.call(r)}),this.disabled.unwrap=function(){
r.disabled=i}},hidden:function(){return!1},wrapHidden:function(t,n){var r=this,i=this.hidden;n=n||"or",this.hidden=e.wrap(this.hidden,function(e){return"or"===n?t.call(r)||e.call(r):"replace"===n?t.call(r):t.call(r)&&e.call(r);
}),this.hidden.unwrap=function(){r.hidden=i}}},a={create:function(t){return e.isArray(t)?e.map(t,this.create):(n(t,{label:"[not set]",value:null}),r(i,t));
}}}),define("misc",["misc/SettingExtender","misc/Setting","misc/SettingOption"],function(){}),function(){var e=angular.module("restangular",[]);e.provider("Restangular",function(){
var e={};e.init=function(e,t){function n(e,t,n,r){var i={};return _.each(_.keys(r),function(a){var o=r[a];o.params=_.extend({},o.params,e.defaultRequestParams[o.method.toLowerCase()]),
_.isEmpty(o.params)&&delete o.params,e.isSafe(o.method)?i[a]=function(){return t(_.extend(o,{url:n}))}:i[a]=function(e){return t(_.extend(o,{url:n,data:e
}))}}),i}e.configuration=t;var r=["get","head","options","trace","getlist"];t.isSafe=function(e){return _.contains(r,e.toLowerCase())};var i=/^https?:\/\//i;
t.isAbsoluteUrl=function(e){return _.isUndefined(t.absoluteUrl)||_.isNull(t.absoluteUrl)?e&&i.test(e):t.absoluteUrl},t.absoluteUrl=!!_.isUndefined(t.absoluteUrl)||t.absoluteUrl,
e.setSelfLinkAbsoluteUrl=function(e){t.absoluteUrl=e},t.baseUrl=_.isUndefined(t.baseUrl)?"":t.baseUrl,e.setBaseUrl=function(e){return t.baseUrl=/\/$/.test(e)?e.substring(0,e.length-1):e,
this},t.extraFields=t.extraFields||[],e.setExtraFields=function(e){return t.extraFields=e,this},t.defaultHttpFields=t.defaultHttpFields||{},e.setDefaultHttpFields=function(e){
return t.defaultHttpFields=e,this},t.withHttpValues=function(e,n){return _.defaults(n,e,t.defaultHttpFields)},t.encodeIds=!!_.isUndefined(t.encodeIds)||t.encodeIds,
e.setEncodeIds=function(e){t.encodeIds=e},t.defaultRequestParams=t.defaultRequestParams||{get:{},post:{},put:{},remove:{},common:{}},e.setDefaultRequestParams=function(e,n){
var r=[],i=n||e;return _.isUndefined(n)?r.push("common"):_.isArray(e)?r=e:r.push(e),_.each(r,function(e){t.defaultRequestParams[e]=i}),this},e.requestParams=t.defaultRequestParams,
t.defaultHeaders=t.defaultHeaders||{},e.setDefaultHeaders=function(n){return t.defaultHeaders=n,e.defaultHeaders=t.defaultHeaders,this},e.defaultHeaders=t.defaultHeaders,
t.methodOverriders=t.methodOverriders||[],e.setMethodOverriders=function(e){var n=_.extend([],e);return t.isOverridenMethod("delete",n)&&n.push("remove"),
t.methodOverriders=n,this},t.jsonp=!_.isUndefined(t.jsonp)&&t.jsonp,e.setJsonp=function(e){t.jsonp=e},t.isOverridenMethod=function(e,n){var r=n||t.methodOverriders;
return!_.isUndefined(_.find(r,function(t){return t.toLowerCase()===e.toLowerCase()}))},t.urlCreator=t.urlCreator||"path",e.setUrlCreator=function(e){if(!_.has(t.urlCreatorFactory,e))throw new Error("URL Path selected isn't valid");
return t.urlCreator=e,this},t.restangularFields=t.restangularFields||{id:"id",route:"route",parentResource:"parentResource",restangularCollection:"restangularCollection",
cannonicalId:"__cannonicalId",etag:"restangularEtag",selfLink:"href",get:"get",getList:"getList",put:"put",post:"post",remove:"remove",head:"head",trace:"trace",
options:"options",patch:"patch",getRestangularUrl:"getRestangularUrl",getRequestedUrl:"getRequestedUrl",putElement:"putElement",addRestangularMethod:"addRestangularMethod",
getParentList:"getParentList",clone:"clone",ids:"ids",httpConfig:"_$httpConfig",reqParams:"reqParams",one:"one",all:"all",several:"several",oneUrl:"oneUrl",
allUrl:"allUrl",customPUT:"customPUT",customPOST:"customPOST",customDELETE:"customDELETE",customGET:"customGET",customGETLIST:"customGETLIST",customOperation:"customOperation",
doPUT:"doPUT",doPOST:"doPOST",doDELETE:"doDELETE",doGET:"doGET",doGETLIST:"doGETLIST",fromServer:"fromServer",withConfig:"withConfig",withHttpConfig:"withHttpConfig",
singleOne:"singleOne",plain:"plain",save:"save"},e.setRestangularFields=function(e){return t.restangularFields=_.extend(t.restangularFields,e),this},t.isRestangularized=function(e){
return!!e[t.restangularFields.one]||!!e[t.restangularFields.all]},t.setFieldToElem=function(e,t,n){var r=e.split("."),i=t;return _.each(_.initial(r),function(e){
i[e]={},i=i[e]}),i[_.last(r)]=n,this},t.getFieldFromElem=function(e,t){var n=e.split("."),r=t;return _.each(n,function(e){r&&(r=r[e])}),angular.copy(r);
},t.setIdToElem=function(e,n){return t.setFieldToElem(t.restangularFields.id,e,n),this},t.getIdFromElem=function(e){return t.getFieldFromElem(t.restangularFields.id,e);
},t.isValidId=function(e){return""!==e&&!_.isUndefined(e)&&!_.isNull(e)},t.setUrlToElem=function(e,n,r){return t.setFieldToElem(t.restangularFields.selfLink,e,n),
this},t.getUrlFromElem=function(e){return t.getFieldFromElem(t.restangularFields.selfLink,e)},t.useCannonicalId=!_.isUndefined(t.useCannonicalId)&&t.useCannonicalId,
e.setUseCannonicalId=function(e){return t.useCannonicalId=e,this},t.getCannonicalIdFromElem=function(e){var n=e[t.restangularFields.cannonicalId],r=t.isValidId(n)?n:t.getIdFromElem(e);
return r},t.responseInterceptors=t.responseInterceptors||[],t.defaultResponseInterceptor=function(e,t,n,r,i,a){return e},t.responseExtractor=function(e,n,r,i,a,o){
var s=angular.copy(t.responseInterceptors);s.push(t.defaultResponseInterceptor);var u=e;return _.each(s,function(e){u=e(u,n,r,i,a,o)}),u},e.addResponseInterceptor=function(e){
return t.responseInterceptors.push(e),this},e.setResponseInterceptor=e.addResponseInterceptor,e.setResponseExtractor=e.addResponseInterceptor,t.requestInterceptors=t.requestInterceptors||[],
t.defaultInterceptor=function(e,t,n,r,i,a,o){return{element:e,headers:i,params:a,httpConfig:o}},t.fullRequestInterceptor=function(e,n,r,i,a,o,s){var u=angular.copy(t.requestInterceptors),l=t.defaultInterceptor(e,n,r,i,a,o,s);
return _.reduce(u,function(e,t){return _.extend(e,t(e.element,n,r,i,e.headers,e.params,e.httpConfig))},l)},e.addRequestInterceptor=function(e){return t.requestInterceptors.push(function(t,n,r,i,a,o,s){
return{headers:a,params:o,element:e(t,n,r,i),httpConfig:s}}),this},e.setRequestInterceptor=e.addRequestInterceptor,e.addFullRequestInterceptor=function(e){
return t.requestInterceptors.push(e),this},e.setFullRequestInterceptor=e.addFullRequestInterceptor,t.errorInterceptor=t.errorInterceptor||function(){},
e.setErrorInterceptor=function(e){return t.errorInterceptor=e,this},t.onBeforeElemRestangularized=t.onBeforeElemRestangularized||function(e){return e},
e.setOnBeforeElemRestangularized=function(e){return t.onBeforeElemRestangularized=e,this},t.onElemRestangularized=t.onElemRestangularized||function(e){
return e},e.setOnElemRestangularized=function(e){return t.onElemRestangularized=e,this},t.shouldSaveParent=t.shouldSaveParent||function(){return!0},e.setParentless=function(e){
return _.isArray(e)?t.shouldSaveParent=function(t){return!_.contains(e,t)}:_.isBoolean(e)&&(t.shouldSaveParent=function(){return!e}),this},t.suffix=_.isUndefined(t.suffix)?null:t.suffix,
e.setRequestSuffix=function(e){return t.suffix=e,this},t.transformers=t.transformers||{},e.addElementTransformer=function(n,r,i){var a=null,o=null;2===arguments.length?o=r:(o=i,
a=r);var s=t.transformers[n];return s||(s=t.transformers[n]=[]),s.push(function(e,t){return _.isNull(a)||e==a?o(t):t}),e},e.extendCollection=function(t,n){
return e.addElementTransformer(t,!0,n)},e.extendModel=function(t,n){return e.addElementTransformer(t,!1,n)},t.transformElem=function(e,n,r,i,a){if(!a&&!t.transformLocalElements&&!e[t.restangularFields.fromServer])return e;
var o=t.transformers[r],s=e;return o&&_.each(o,function(e){s=e(n,s)}),t.onElemRestangularized(s,n,r,i)},t.transformLocalElements=!_.isUndefined(t.transformLocalElements)&&t.transformLocalElements,
e.setTransformOnlyServerElements=function(e){t.transformLocalElements=!e},t.fullResponse=!_.isUndefined(t.fullResponse)&&t.fullResponse,e.setFullResponse=function(e){
return t.fullResponse=e,this},t.urlCreatorFactory={};var a=function(){};a.prototype.setConfig=function(e){return this.config=e,this},a.prototype.parentsArray=function(e){
for(var t=[];e;)t.push(e),e=e[this.config.restangularFields.parentResource];return t.reverse()},a.prototype.resource=function(e,r,i,a,o,s,u,l){var c=_.defaults(o||{},this.config.defaultRequestParams.common),d=_.defaults(a||{},this.config.defaultHeaders);
u&&(t.isSafe(l)?d["If-None-Match"]=u:d["If-Match"]=u);var f=this.base(e);if(s){var p="";/\/$/.test(f)||(p+="/"),p+=s,f+=p}return this.config.suffix&&f.indexOf(this.config.suffix,f.length-this.config.suffix.length)===-1&&!this.config.getUrlFromElem(e)&&(f+=this.config.suffix),
e[this.config.restangularFields.httpConfig]=void 0,n(this.config,r,f,{getList:this.config.withHttpValues(i,{method:"GET",params:c,headers:d}),get:this.config.withHttpValues(i,{
method:"GET",params:c,headers:d}),jsonp:this.config.withHttpValues(i,{method:"jsonp",params:c,headers:d}),put:this.config.withHttpValues(i,{method:"PUT",
params:c,headers:d}),post:this.config.withHttpValues(i,{method:"POST",params:c,headers:d}),remove:this.config.withHttpValues(i,{method:"DELETE",params:c,
headers:d}),head:this.config.withHttpValues(i,{method:"HEAD",params:c,headers:d}),trace:this.config.withHttpValues(i,{method:"TRACE",params:c,headers:d
}),options:this.config.withHttpValues(i,{method:"OPTIONS",params:c,headers:d}),patch:this.config.withHttpValues(i,{method:"PATCH",params:c,headers:d})});
};var o=function(){};o.prototype=new a,o.prototype.base=function(e){var n=this;return _.reduce(this.parentsArray(e),function(e,r){var i,a=n.config.getUrlFromElem(r);
if(a){if(n.config.isAbsoluteUrl(a))return a;i=a}else if(i=r[n.config.restangularFields.route],r[n.config.restangularFields.restangularCollection]){var o=r[n.config.restangularFields.ids];
o&&(i+="/"+o.join(","))}else{var s;s=n.config.useCannonicalId?n.config.getCannonicalIdFromElem(r):n.config.getIdFromElem(r),t.isValidId(s)&&!r.singleOne&&(i+="/"+(n.config.encodeIds?encodeURIComponent(s):s));
}return e.replace(/\/$/,"")+"/"+i},this.config.baseUrl)},o.prototype.fetchUrl=function(e,t){var n=this.base(e);return t&&(n+="/"+t),n},o.prototype.fetchRequestedUrl=function(e,n){
function r(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t.sort()}function i(e,t,n){for(var i=r(e),a=0;a<i.length;a++)t.call(n,e[i[a]],i[a]);
return i}function a(e,t){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,t?"%20":"+");
}var o=this.fetchUrl(e,n),s=e[t.restangularFields.reqParams];if(!s)return o;var u=[];return i(s,function(e,t){null!=e&&void 0!=e&&(angular.isArray(e)||(e=[e]),
angular.forEach(e,function(e){angular.isObject(e)&&(e=angular.toJson(e)),u.push(a(t)+"="+a(e))}))}),o+(this.config.suffix||"")+(o.indexOf("?")===-1?"?":"&")+u.join("&");
},t.urlCreatorFactory.path=o};var t={};e.init(this,t),this.$get=["$http","$q",function(n,r){function i(t){function a(e,n,r,i,a){if(n[t.restangularFields.route]=r,
n[t.restangularFields.getRestangularUrl]=_.bind(U.fetchUrl,U,n),n[t.restangularFields.getRequestedUrl]=_.bind(U.fetchRequestedUrl,U,n),n[t.restangularFields.addRestangularMethod]=_.bind(H,n),
n[t.restangularFields.clone]=_.bind(v,n,n),n[t.restangularFields.reqParams]=_.isEmpty(i)?null:i,n[t.restangularFields.withHttpConfig]=_.bind(k,n),n[t.restangularFields.plain]=_.bind(h,n,n),
n[t.restangularFields.one]=_.bind(o,n,n),n[t.restangularFields.all]=_.bind(s,n,n),n[t.restangularFields.several]=_.bind(u,n,n),n[t.restangularFields.oneUrl]=_.bind(l,n,n),
n[t.restangularFields.allUrl]=_.bind(c,n,n),n[t.restangularFields.fromServer]=!!a,e&&t.shouldSaveParent(r)){var d=t.getIdFromElem(e),f=t.getUrlFromElem(e),p=_.union(_.values(_.pick(t.restangularFields,["route","singleOne","parentResource"])),t.extraFields),m=_.pick(e,p);
t.isValidId(d)&&t.setIdToElem(m,d),t.isValidId(f)&&t.setUrlToElem(m,f),n[t.restangularFields.parentResource]=m}else n[t.restangularFields.parentResource]=null;
return n}function o(e,n,r,i){if(_.isNumber(n)||_.isNumber(e)){var a="You're creating a Restangular entity with the number ";throw a+="instead of the route or the parent. You can't call .one(12)",
new Error(a)}var o={};return t.setIdToElem(o,r),t.setFieldToElem(t.restangularFields.singleOne,o,i),y(e,o,n,!1)}function s(e,t){return b(e,[],t,!1)}function u(e,n,r){
var i=[];return i[t.restangularFields.ids]=Array.prototype.splice.call(arguments,2),b(e,i,n,!1)}function l(e,n,r){if(!n)throw new Error("Route is mandatory when creating new Restangular objects.");
var i={};return t.setUrlToElem(i,r,n),y(e,i,n,!1)}function c(e,n,r){if(!n)throw new Error("Route is mandatory when creating new Restangular objects.");var i={};
return t.setUrlToElem(i,r,n),b(e,i,n,!1)}function d(e,n,r){return e.call=_.bind(f,e),e.get=_.bind(p,e),e[t.restangularFields.restangularCollection]=n,n&&(e.push=_.bind(f,e,"push")),
e.$object=r,e}function f(e){var n=r.defer(),i=arguments,a={};return this.then(function(t){var r=Array.prototype.slice.call(i,1),o=t[e];o.apply(t,r),a=t,
n.resolve(t)}),d(n.promise,this[t.restangularFields.restangularCollection],a)}function p(e){var n=r.defer(),i={};return this.then(function(t){i=t[e],n.resolve(i);
}),d(n.promise,this[t.restangularFields.restangularCollection],i)}function m(e,n,r,i){return _.extend(i,r),t.fullResponse?e.resolve(_.extend(n,{data:r})):void e.resolve(r);
}function h(e){if(_.isArray(e)){var n=[];return _.each(e,function(e){n.push(h(e))}),n}return _.omit(e,_.values(_.omit(t.restangularFields,"id")))}function g(e){
e[t.restangularFields.customOperation]=_.bind(O,e),_.each(["put","post","get","delete"],function(t){_.each(["do","custom"],function(n){var r,i="delete"===t?"remove":t,a=n+t.toUpperCase();
r="put"!==i&&"post"!==i?O:function(e,t,n,r,i){return _.bind(O,this)(e,n,r,i,t)},e[a]=_.bind(r,e,i)})}),e[t.restangularFields.customGETLIST]=_.bind(L,e),
e[t.restangularFields.doGETLIST]=e[t.restangularFields.customGETLIST]}function v(e,n){var r=angular.copy(e,n);return y(r[t.restangularFields.parentResource],r,r[t.restangularFields.route],!0);
}function y(e,n,r,i,o,s){var u=t.onBeforeElemRestangularized(n,!1,r),l=a(e,u,r,s,i);return t.useCannonicalId&&(l[t.restangularFields.cannonicalId]=t.getIdFromElem(l)),
o&&(l[t.restangularFields.getParentList]=function(){return o}),l[t.restangularFields.restangularCollection]=!1,l[t.restangularFields.get]=_.bind(S,l),l[t.restangularFields.getList]=_.bind(L,l),
l[t.restangularFields.put]=_.bind(C,l),l[t.restangularFields.post]=_.bind(E,l),l[t.restangularFields.remove]=_.bind(Y,l),l[t.restangularFields.head]=_.bind(A,l),
l[t.restangularFields.trace]=_.bind(F,l),l[t.restangularFields.options]=_.bind(j,l),l[t.restangularFields.patch]=_.bind(P,l),l[t.restangularFields.save]=_.bind(x,l),
g(l),t.transformElem(l,!1,r,N,!0)}function b(e,n,r,i,o){var s=t.onBeforeElemRestangularized(n,!0,r),u=a(e,s,r,o,i);return u[t.restangularFields.restangularCollection]=!0,
u[t.restangularFields.post]=_.bind(E,u,null),u[t.restangularFields.remove]=_.bind(Y,u),u[t.restangularFields.head]=_.bind(A,u),u[t.restangularFields.trace]=_.bind(F,u),
u[t.restangularFields.putElement]=_.bind(D,u),u[t.restangularFields.options]=_.bind(j,u),u[t.restangularFields.patch]=_.bind(P,u),u[t.restangularFields.get]=_.bind(M,u),
u[t.restangularFields.getList]=_.bind(L,u,null),g(u),t.transformElem(u,!0,r,N,!0)}function w(e,t,n){var r=b(e,t,n,!1);return _.each(r,function(t){y(e,t,n,!1);
}),r}function M(e,t,n){return this.customGET(e.toString(),t,n)}function D(e,n,i){var a=this,o=this[e],s=r.defer(),u=[];return u=t.transformElem(u,!0,o[t.restangularFields.route],N),
o.put(n,i).then(function(t){var n=v(a);n[e]=t,u=n,s.resolve(n)},function(e){s.reject(e)}),d(s.promise,!0,u)}function $(e,n,r,i,a,o){var s=t.responseExtractor(e,n,r,i,a,o),u=a.headers("ETag");
return s&&u&&(s[t.restangularFields.etag]=u),s}function L(e,i,a){var o=this,s=r.defer(),u="getList",l=U.fetchUrl(this,e),c=e||o[t.restangularFields.route],f=t.fullRequestInterceptor(null,u,c,l,a||{},i||{},this[t.restangularFields.httpConfig]||{}),p=[];
p=t.transformElem(p,!0,c,N);var h="getList";return t.jsonp&&(h="jsonp"),U.resource(this,n,f.httpConfig,f.headers,f.params,e,this[t.restangularFields.etag],u)[h]().then(function(n){
var r=n.data,i=n.config.params,a=$(r,u,c,l,n,s);if((_.isUndefined(a)||""===a)&&(a=[]),!_.isArray(a))throw new Error("Response for getList SHOULD be an array and not an object or something else");
var d=_.map(a,function(n){return o[t.restangularFields.restangularCollection]?y(o[t.restangularFields.parentResource],n,o[t.restangularFields.route],!0,a):y(o,n,e,!0,a);
});d=_.extend(a,d),o[t.restangularFields.restangularCollection]?m(s,n,b(o[t.restangularFields.parentResource],d,o[t.restangularFields.route],!0,i),p):m(s,n,b(o,d,e,!0,i),p);
},function(e){304===e.status&&o[t.restangularFields.restangularCollection]?m(s,e,o,p):t.errorInterceptor(e,s)!==!1&&s.reject(e)}),d(s.promise,!0,p)}function k(e){
return this[t.restangularFields.httpConfig]=e,this}function x(e,n){return this[t.restangularFields.fromServer]?this[t.restangularFields.put](e,n):_.bind(T,this)("post",void 0,e,void 0,n);
}function T(e,i,a,o,s){var u=this,l=r.defer(),c=a||{},f=i||this[t.restangularFields.route],p=U.fetchUrl(this,i),g=o||this,v=g[t.restangularFields.etag]||("post"!=e?this[t.restangularFields.etag]:null);
_.isObject(g)&&t.isRestangularized(g)&&(g=h(g));var b=t.fullRequestInterceptor(g,e,f,p,s||{},c||{},this[t.restangularFields.httpConfig]||{}),w={};w=t.transformElem(w,!1,f,N);
var M=function(n){var r=n.data,a=n.config.params,o=$(r,e,f,p,n,l);o?"post"!==e||u[t.restangularFields.restangularCollection]?(data=y(u[t.restangularFields.parentResource],o,u[t.restangularFields.route],!0,null,a),
data[t.restangularFields.singleOne]=u[t.restangularFields.singleOne],m(l,n,data,w)):m(l,n,y(u,o,i,!0,null,a),w):m(l,n,void 0,w)},D=function(n){304===n.status&&t.isSafe(e)?m(l,n,u,w):t.errorInterceptor(n,l)!==!1&&l.reject(n);
},L=e,k=_.extend({},b.headers),x=t.isOverridenMethod(e);return x?(L="post",k=_.extend(k,{"X-HTTP-Method-Override":"remove"===e?"DELETE":e})):t.jsonp&&"get"===L&&(L="jsonp"),
t.isSafe(e)?x?U.resource(this,n,b.httpConfig,k,b.params,i,v,L)[L]({}).then(M,D):U.resource(this,n,b.httpConfig,k,b.params,i,v,L)[L]().then(M,D):U.resource(this,n,b.httpConfig,k,b.params,i,v,L)[L](b.element).then(M,D),
d(l.promise,!1,w)}function S(e,t){return _.bind(T,this)("get",void 0,e,void 0,t)}function Y(e,t){return _.bind(T,this)("remove",void 0,e,void 0,t)}function C(e,t){
return _.bind(T,this)("put",void 0,e,void 0,t)}function E(e,t,n,r){return _.bind(T,this)("post",e,n,t,r)}function A(e,t){return _.bind(T,this)("head",void 0,e,void 0,t);
}function F(e,t){return _.bind(T,this)("trace",void 0,e,void 0,t)}function j(e,t){return _.bind(T,this)("options",void 0,e,void 0,t)}function P(e,t,n){
return _.bind(T,this)("patch",void 0,t,e,n)}function O(e,t,n,r,i){return _.bind(T,this)(e,t,n,i,r)}function H(e,n,r,i,a,o){var s;s="getList"===n?_.bind(L,this,r):_.bind(O,this,n,r);
var u=function(e,t,n){var r=_.defaults({params:e,headers:t,elem:n},{params:i,headers:a,elem:o});return s(r.params,r.headers,r.elem)};t.isSafe(n)?this[e]=u:this[e]=function(e,t,n){
return u(t,n,e)}}function R(n){var r=angular.copy(_.omit(t,"configuration"));return e.init(r,r),n(r),i(r)}function I(e,t){var n={},r=(t||N).all(e);return n.one=_.bind(o,t||N,t,e),
n.post=_.bind(r.post,r),n.getList=_.bind(r.getList,r),n}var N={},U=new t.urlCreatorFactory[t.urlCreator];return U.setConfig(t),e.init(N,t),N.copy=_.bind(v,N),
N.service=_.bind(I,N),N.withConfig=_.bind(R,N),N.one=_.bind(o,N,null),N.all=_.bind(s,N,null),N.several=_.bind(u,N,null),N.oneUrl=_.bind(l,N,null),N.allUrl=_.bind(c,N,null),
N.stripRestangular=_.bind(h,N),N.restangularizeElement=_.bind(y,N),N.restangularizeCollection=_.bind(w,N),N}return i(t)}]})}(),define("restangular",["angular","lodash"],function(e){
return function(){var t;return t||e.Restangular}}(this)),define("callback_button/CallbackButtonProfileService",[],function(){"use strict";return{CallbackButtonProfile:["Restangular",function(e){
var t=e.withConfig(function(e){e.addElementTransformer("callback_button",!0,function(e){return e.addRestangularMethod("create","get","create"),e.addRestangularMethod("deploy","post","deploy"),
e.addRestangularMethod("registryOptions","get","registry_options"),e.addRestangularMethod("createRegistry","post","create_registry"),e.addRestangularMethod("importRegistry","post","import_registry"),
e.addRestangularMethod("icon","get","icon"),e.addRestangularMethod("siteIcon","get","site-icon"),e.addRestangularMethod("massDeploymentOptions","get","mass-deployment-options"),
e}),e.addElementTransformer("callback_button",!1,function(e){return e.addRestangularMethod("revert","put","revert"),e})}).all("callback_button");return t.deploymentValues=null,
t}]}}),define("cluster/ClusterService",["angular"],function(e){"use strict";return{Cluster:["Restangular",function(t){return t.withConfig(function(t){t.addElementTransformer("cluster",!0,function(e){
return e.addRestangularMethod("status","get","status"),e.addRestangularMethod("create","get","create"),e.addRestangularMethod("sync","put","sync"),e.addRestangularMethod("toggle","put","toggle"),
e.addRestangularMethod("leave","put","leave"),e}),t.setResponseExtractor(function(t){var n=t;return n.original=e.copy(t),n})}).all("cluster")}],ClusterConfig:["Restangular",function(e){
var t=e.withConfig(function(e){e.setRestangularFields({id:"variable"})}).all("cluster").all("config");return t.variable=function(t){return e.all("cluster").all("config").one(t);
},t}]}}),define("config/PublicSiteConfigService",[],function(){"use strict";return{PublicSiteConfig:["Restangular",function(e){return{variable:function(t,n){
return e.one("public-site-config",t).one(n)}}}]}}),define("config/UserConfigService",[],function(){"use strict";return{UserConfig:["Restangular",function(e){
return e.withConfig(function(e){e.setRestangularFields({id:"variable"})}).all("user_config")}]}}),define("exit_survey/ExitSurveyService",[],function(){
"use strict";function e(e,t,n,r){return n.withConfig(function(n){n.addElementTransformer(e,!0,function(e){return e.addRestangularMethod&&(e.addRestangularMethod("create","get","create"),
e.addRestangularMethod("choose","get","choose"),e.addRestangularMethod("previewQuestion","put","previewQuestion")),e.data={questionType:r.ExitSurveyQuestion.types[0]
},e.setQuestionType=function(e){this.data.questionType=e},e.getQuestionType=function(){return this.data.questionType},e.getSurveyName=function(){return t;
},n.setRestangularFields({id:"question_id"}),e})}).all(e)}return{CustExitSurvey:["Restangular","TR","Options",function(t,n,r){return e("exit_survey/cust",n("Customer Exit Survey"),t,r);
}],RepExitSurvey:["Restangular","TR","Options",function(t,n,r){return e("exit_survey/rep",n("Representative Survey"),t,r)}]}}),define("failover/FailoverService",[],function(){
"use strict";return{Failover:["$http","failoverPaths",function(e,t){return{hostname:function(){return e.get(t.action("hostname"))},status:function(n){return e.get(t.action("status"),{
params:n})},sync:function(){return e.put(t.action("sync"))},swap:function(n){return e.put(t.action("swap-roles"),n)},breakUp:function(){return e.put(t.action("break-relationship"));
},ping:function(n){return e.put(t.action("ping"),n)},autoFailover:function(n){return e.put(t.action("auto-failover"),n)},post:function(n){return e.post(t.index(),n);
}}}],FailoverConfig:["Restangular",function(e){var t=e.withConfig(function(e){e.setRestangularFields({id:"variable"})}).all("failover").all("config");return t.variable=function(t){
return e.all("failover").all("config").one(t)},t}]}}),define("group_policy/GroupPolicyService",["angular","lodash"],function(e,t){"use strict";return{GroupPolicyService:["Restangular","UserSettings","SAPSettings","Constants",function(n,r,i,a){
function o(o){var s=e.copy(o);return t.forOwn(s,function(t,n){var r=n+"_status";e.isDefined(s[r])&&(s[n].defined?s[r]=s[n].overridable?a.GroupPolicy.status.OVERRIDABLE:a.GroupPolicy.status.FINAL:s[r]=a.GroupPolicy.status.UNDEFINED,
s[n].value=e.isDefined(s[n].converter)?s[n].converter(s[n].value):s[n].value)}),r.makeValues(s),r.unextend(s),t(["attended_session_policy","unattended_session_policy","chat_session_policy"]).forEach(function(t){
s[t]?(s[t]=e.copy(s[t]),i.makeValues(s[t]),i.unextend(s[t]),s[t]=n.stripRestangular(s[t])):delete s[t]}).value(),t(["support_desk_teams","push_agents","shared_jump_group"]).forEach(function(e){
var n=e+"_added",r=e+"_removed";s[e]=t.merge(s[n],s[r]),delete s[n],delete s[r]}).value(),s.members=e.copy(s.members),s}function s(n,o){return o=!t.isUndefined(o)&&o,
t.isArray(n)?void t.forEach(n,function(e){s(e,!0),e.details={open:!1,members:{open:!1},perms:{open:!1}}}):(n.isPolicy=function(){return!0},n.isEmbassy=function(){
return n.type===a.GroupPolicy.TYPE_EMBASSY},n.isNormal=function(){return n.type===a.GroupPolicy.TYPE_NORMAL},r.makeValueObjects(n),r.extend(n),o&&(n.empty=!0),
t.forOwn(n,function(t,r){var i=r+"_status";if(e.isDefined(n[i])){var s=n[r];s.defined=n[i]!==a.GroupPolicy.status.UNDEFINED,s.defined?(s.overridable=n[i]!==a.GroupPolicy.status.FINAL,
o&&(n.empty=!1)):s.overridable=!0;var u=s.disabled;s.disabled=function(){return!s.defined||u()}}}),void t(["attended_session_policy","unattended_session_policy","chat_session_policy"]).forEach(function(e){
n[e]&&(t.isArray(n[e].value)&&(n[e].value=n[e].value[0]),o||n[e].value&&t.isObject(n[e].value)&&i.makeValueObjects(n[e].value))}).value())}var u,l=null;
return u=n.withConfig(function(e){e.addElementTransformer("group_policy",!0,function(e){return e.addRestangularMethod("create","get","create"),e}),e.addElementTransformer("group_policy",!0,function(e){
return e.addRestangularMethod("export","post","export"),e}),e.addResponseInterceptor(function(e,n,r,i,a){if("get"===n&&"uses"!==r)null===e.account_expire_date&&(e.account_expire_date=e.next_expire_date),
s(e);else if("getList"===n&&t.isUndefined(a.config.params.only)&&!t.isUndefined(e.data)){s(e.data);var o=e,u=e.data;return delete o.data,u.push(o),u}return e;
}),e.addRequestInterceptor(function(e,t){return"put"===t||"post"===t?o(e):e})}).all("group_policy"),{create:function(){return u.create.apply(u,t.toArray(arguments));
},getList:function(){return u.getList.apply(u,t.toArray(arguments))},get:function(){return u.get.apply(u,t.toArray(arguments))},post:function(){return u.post.apply(u,t.toArray(arguments));
},copy:function(e,t){return u.one(e).customGET("copy",t)},export:function(){return u.export.apply(u,t.toArray(arguments))},members:function(e,t){return n.one(u.route,e).customGET("members",{
default_policy:t?1:0})},getExportedFilename:function(){return l},patchPriorities:function(n){var r=t.pluck(n,"id");return u.patch(r).then(function(t){return e.forEach(n,function(e,t){
e.priority=t+1}),t})},preparePolicy:s,setRoute:function(e){return u.route=e,this},adjustEmbassyPolicy:o}}]}}),define("html_template/TemplateService",[],function(){
"use strict";return{Template:["Restangular",function(e){return e.withConfig(function(e){e.addElementTransformer("html_template",!1,function(e){return e.addRestangularMethod("revert","put","revert"),
e})}).all("html_template")}]}}),define("kerberos_keytab/KerberosKeytabService",[],function(){"use strict";return{KerberosKeytab:["Restangular",function(e){
return e.withConfig(function(e){e.addElementTransformer("kerberos_keytab",!0,function(e){return e.addRestangularMethod("create","get","create"),e.uploaded=0,
e})}).all("kerberos_keytab")}]}}),define("languages/LanguagesService",["lodash"],function(e){"use strict";var t;return{Languages:["Restangular","$q",function(n,r){
var i=n.all("nls/languages");return{getList:function(){if(t){var e=r.defer();return e.resolve(t),e.promise}return i.getList().then(function(e){return t=e;
})},refresh:function(){return t=null,this.getList()},post:e.bind(i.post,i),get:e.bind(i.get,i)}}]}}),define("misc/AuthInterceptor",[],function(){"use strict";
return{AuthInterceptor:["$q","$rootScope",function(e,t){return{responseError:function(n){return 401===n.status&&"FormAuth"===n.headers("WWW-Authenticate")&&t.$broadcast("logout"),
e.reject(n)}}}]}}),define("misc/HtmlInterceptor",[],function(){"use strict";return{HtmlInterceptor:["cacheBuster",function(e){return{request:function(t){
var n=t.url&&t.url.length>5&&".html"===t.url.substr(t.url.length-5,5);return n&&(t.headers["X-HTML"]="1",t.url+="?"+e),t}}}]}}),define("misc/LocalizationService",[],function(){
"use strict";return{LocalizedStrings:["$resource",function(e){return e("login/nls/:id",{},{stringForKey:{method:"GET",url:"login/nls/:id/key/:key"},stringForName:{
method:"GET",url:"login/nls/:id/name/:name"}})}]}}),define("misc/LogoutHandler",["angular"],function(e){"use strict";function t(t,r,i,a,o){function s(){
c(),(null===a||u())&&r.location.reload()}function u(){return r.localStorage.getItem(n)!==a.username}function l(){s()}function c(){d.off("mousemove",l)}
var d=e.element(r);t.$on("logout",function(){o.putObject("last_page_for_user",{path:i.url(),username:a.username}),r.localStorage.removeItem(n),a=null,r.location.href="/login/logout";
}),r.localStorage.setItem(n,a.username),d.on("focus focusin",s).on("storage",function(e){e.key!==n&&null!==e.key||r.addEventListener("mousemove",l)})}t.$inject=["$rootScope","$window","$location","currentUserInfo","$cookies"];
var n="currentUser.username";return t}),define("misc/RefreshService",["angular"],function(e){"use strict";return{Refresh:["$interval",function(t){return{
create:function(n,r){var i,a={seconds:15,start:function(){e.isDefined(i)||(i=t(this.execute,1e3*this.seconds))},stop:function(){e.isDefined(i)&&(t.cancel(i),
i=void 0)},execute:n};return r&&r.$on("$destroy",function(){a.stop()}),a}}}]}}),define("misc/ServerVarsService",["constants","misc/BrowserFeatures","lodash"],function(e,t,n){
"use strict";function r(e,t){n.each(t,function(t,n){Object.defineProperty(e,n,{configurable:!1,enumerable:!0,value:t,writable:!1})})}var i=null,a=null,o=null;
return{Constants:function(){return null===i&&(i={},e&&e.vars&&r(i,e.vars)),i}(),Options:function(){return null===a&&(a={},e&&e.options&&r(a,e.options)),
a}(),Features:function(){if(null===o&&(o={},e&&e.features)){var t=e.features.hiddenUserPermissions,i=e.features.hiddenSessionPolicySettings,a=e.features.hiddenJumpItemRoleSettings;
delete e.features.hiddenUserPermissions,delete e.features.hiddenSessionPolicySettings,delete e.features.hiddenJumpItemRoleSettings,r(o,e.features),o.isHiddenUserPerm=function(e){
return n.contains(t,e)},o.isHiddenSAPSetting=function(e){return n.contains(i,e)},o.isHiddenJumpRoleSetting=function(e){return n.contains(a,e)}}return o;
}()}}),define("nav/NavService",["angular","lodash"],function(e,t){"use strict";function n(e){return o[e]}function r(e){return t(a).sortBy(function(e){return-1*e.path.length;
}).find(function(t){if(0===e.indexOf(t.path))return!0;if(t.regex&&t.regex.length>0)for(var n=0;n<t.regex.length;n++)if(new RegExp(t.regex[n],"i").test(e))return!0;
return!1})}function i(t){return o={},a={},e.forEach(t,function(t){t.selected=!1,t.groupId=t.groupId.toLowerCase(),o[t.groupId]=t,e.forEach(t.items,function(e){
e.id=e.id.toLowerCase(),a[e.id]=e,e.selected=!1,e.groupId=t.groupId})}),t}var a,o,s,u,l;return a={},o={},u=!1,l={Nav:["$http","$rootScope","$location",function(t,a,o){
function l(){var t,i=o.url();s.selectedGroup=null,e.forEach(s.tabGroups,function(t){t.selected=!1,e.forEach(t.items,function(e){e.selected=!1})}),t=r(i),
t&&(t.selected=!0,s.selectedGroup=n(t.groupId),s.selectedGroup.selected=!0)}return s?s:s={tabGroups:[],selectedGroup:null,refresh:function(){var e=this;
return t.get("/login/nav").then(function(t){return e.tabGroups=i(t.data),e.tabGroups.length&&(e.tabGroups[0].selected=!0,e.tabGroups[0].items.length&&(e.tabGroups[0].items[0].selected=!0)),
l(),u||(a.$on("$routeChangeSuccess",l),u=!u),e.tabGroups})}}}]}}),define("public_site/PublicSiteService",[],function(){"use strict";return{PublicSite:["Restangular",function(e){
var t=e.withConfig(function(e){e.addElementTransformer("public_site",!0,function(e){return e.addRestangularMethod("create","get","create"),e}),e.addElementTransformer("public_site",!1,function(e){
return e.addRestangularMethod("uploadChatBanner","post","chat_banner"),e.addRestangularMethod("revertChatBanner","put","chat_banner/revert"),e.addRestangularMethod("uploadScreenSharingIndicator","post","screen_sharing_indicator"),
e.addRestangularMethod("revertScreenSharingIndicator","put","screen_sharing_indicator/revert"),e.addRestangularMethod("saveCustomization","put","customization"),
e})}).all("public_site");return t.teams=t.all("available-teams"),t.custExitSurveys=t.all("available-exit-surveys").all("cust"),t.repExitSurveys=t.all("available-exit-surveys").all("rep"),
t.callbackButtonProfiles=t.all("available-callback-button-profiles"),t.templates=t.all("available-templates"),t}]}}),define("push_agent/PushAgentService",["angular","lodash"],function(e,t){
"use strict";function n(n){return e.extend(n,i),t.forEach(n.nodes,function(t){e.extend(t,i)}),n}function r(r,i,a){if("getList"===i){if(!e.isArray(r))throw new Error("unexpected GET /push_agent response format");
if("push_agent"===a)return t.map(r,n)}else if("get"===i){if(e.isArray(r))throw new Error("unexpected GET /push_agent/n response format");return n(r)}return r;
}var i={isSetup:function(){return null!==this.last_connect_date},isConnected:function(){return this.isSetup()&&this.last_connect_date>this.last_disconnect_date;
},isDisconnected:function(){return this.isSetup()&&!this.isConnected()}};return{PushAgent:["Restangular",function(e){return e.withConfig(function(e){e.addResponseInterceptor(r),
e.addElementTransformer("push_agent",!0,function(e){return e.addRestangularMethod("create","get","create"),e.addRestangularMethod("search_for_available_user","post","search_for_available_user"),
e}),e.addElementTransformer("push_agent",!1,function(e){return e.addRestangularMethod("redeploy","put","redeploy"),e});var t=0;e.addRequestInterceptor(function(e,n,r){
return"post"===n&&"search_for_available_user"===r&&(e.requestId=++t),e}),e.addResponseInterceptor(function(e,n,r,i,a){return"post"===n&&"search_for_available_user"===r&&a.config.data.requestId!==t?null:e;
})}).all("push_agent")}]}}),define("jump_item_roles/JumpItemRolesService",[],function(){"use strict";return{JumpItemRole:["Restangular","JumpItemRoleSettings",function(e,t){
return e.withConfig(function(e){e.addElementTransformer("jump_item_roles",!0,function(e){return e.addRestangularMethod("create","get","create"),e}),e.addResponseInterceptor(function(e,n,r,i,a){
return"get"===n&&"uses"!==r?(t.makeValueObjects(e),t.extend(e)):"getList"===n&&a.config.params&&_.isEmpty(a.config.params)&&_.forEach(e,function(e){t.makeValueObjects(e),
t.extend(e)}),e}),e.addRequestInterceptor(function(e,n){if("put"===n||"post"===n){var r=angular.copy(e);return delete r.form,t.makeValues(r),t.unextend(r),
r}return e})}).all("jump_item_roles")}]}}),define("jump_policies/JumpPoliciesService",[],function(){"use strict";return{JumpPolicy:["Restangular",function(e){
return e.withConfig(function(e){e.addElementTransformer("jump_policies",!0,function(e){return e.addRestangularMethod("create","get","create"),e})}).all("jump_policies");
}]}}),define("jump_item/JumpShortcutService",[],function(){"use strict";return{JumpShortcut:["Restangular",function(e){return e.withConfig(function(e){
e.addElementTransformer("jump_item",!0,function(e){return e.addRestangularMethod("checkImportStatus","get","check-import-status"),e})}).all("jump_item");
}]}}),define("search/SearchService",[],function(){"use strict";return{Search:["Restangular",function(e){return this.searchTerm="",e.all("nls/search")}]
}}),define("shared_jump_groups/SharedJumpGroupsService",[],function(){"use strict";return{SharedJumpGroup:["Restangular",function(e){return e.withConfig(function(e){
e.addElementTransformer("shared_jump_groups",!0,function(e){return e.addRestangularMethod("create","get","create"),e.addRestangularMethod("search_for_available_user","post","search_for_available_user"),
e});var t=0;e.addRequestInterceptor(function(e,n,r){return"post"===n&&"search_for_available_user"===r&&(e.requestId=++t),e}),e.addResponseInterceptor(function(e,n,r,i,a){
return"post"===n&&"search_for_available_user"===r&&a.config.data.requestId!==t?null:e})}).all("shared_jump_groups")}]}}),define("security_providers/SecurityProvidersService",["angular","restangular","lodash"],function(e,t,n){
"use strict";function r(e,t){return p=e,f=n.extend(f,i(p)),m=[],n.forEach(p,function(e){e.description=t(e);var n=a(e);n&&(n.description=t(n))}),m.sort(c.priorityComparator),
m}function i(e){return n.reduce(e,function(e,t){return e[t.id]=t,e},{})}function a(e){if(e.isRoot())return m.push(e),m.sort(c.priorityComparator),null;var t=f[e.parent_id];
if(t)return t.addChild(e),t.children.sort(c.priorityComparator),t;throw new Error("Parent provider not found with id '"+e.parent_id+"'")}function o(e,t){
return"put"!==t&&"post"!==t&&"patch"!==t||("post"===t&&delete e.id,e.attributes=n.reduce(e.attributes,function(e,t,n){return e.concat([{name:n,value:t||null
}])},[])),e}function s(t,r,i){var o;if("getList"===r){if(!e.isArray(t))throw new Error("unexpected GET /provider response format");if("security_providers"===i||"children"===i)return n.map(t,c.extend);
}else{if("get"===r){if(e.isArray(t))throw new Error("unexpected GET /provider/n response format");return"upgrade"===i&&(t.children=[n.clone(t)]),c.extend(t);
}if("put"===r&&"test"!==i){var s;o=f[t.provider.id],s=n.find(p,function(e){return e.hasChild(o)}),s&&s.id!==o.parent_id&&(s.removeChild(o),a(o))}else"patch"===r?n.forEach(t.changed,function(e){
o=f[parseInt(e,10)],n.isUndefined(o)||(o.enabled=t.state)}):"remove"===r&&n.forEach(t.deleted,function(t){var r,i;o=f[parseInt(t,10)],n.isUndefined(o)||(i=n.pluck(o.getDescendants(),"id"),
r=o.getParent(),n.remove(p,function(e){return n.contains(i,e.id)}),n.remove(p,{id:o.id}),r?r.removeChild(o):n.remove(m,{id:o.id}),delete f[o.id],e.forEach(i,function(e){
delete f[e]}))})}return t}function u(e){return e.addRestangularMethod&&(e.addRestangularMethod("createSAML","get","create/SAML"),e.addRestangularMethod("createLDAP","get","create/LDAP"),
e.addRestangularMethod("createRADIUS","get","create/RADIUS"),e.addRestangularMethod("createKerberos","get","create/Kerberos")),e}var l,c,d,f,p,m;return c={
providerCopy:null},f={},p=null,m=[],d={isEqual:function(e){return e&&this.id===e.id},isNew:function(){return 0===this.id},isRoot:function(){return null===this.parent_id;
},isChild:function(){return null!==this.parent_id},addChild:function(e){if(e.isRoot())throw new Error("can't add a root provider as a child");if(e.parent_id!==this.id)throw new Error("child doesn't have parent_id set to correct value");
this.children.push(e)},hasChild:function(e){return!!n.find(this.children,function(t){return t.isEqual(e)})},hasChildren:function(){return 0!==this.children.length;
},removeChild:function(e){var t=n.remove(this.children,function(t){return t.isEqual(e)},this);if(!t||0===t.length)throw new Error("child not found")},removeAllChildren:function(e){
var t;if(e)for(t=0;t<this.children.length;t++)this.children[t].removeAllChildren(e);this.children=[]},getChildren:function(){return e.extend([],this.children);
},getDescendants:function(){var e,t=[];for(e=0;e<this.children.length;e++)t=t.concat(this.children[e].getDescendants());return t.concat(this.children)},
childCount:function(){return this.children.length},childAt:function(e){return this.children[e]},getParent:function(){return null!==this.parent_id?f[this.parent_id]:null;
},useGroupLookup:function(){return 0!==this.groups.length},isCluster:function(){return this.hasChildren()},isType:function(e){var t=this.provider_type,r=n.find(e,function(e){
return e===t});return!n.isUndefined(r)}},c.copy=function(e,t){var r=n.clone(e,!1);return r.id=0,t===c.RELATION.None?r.parent_id=null:t===c.RELATION.Child?r.parent_id=e.parent_id:t===c.RELATION.Parent&&(r.children=[e]),
c.providerCopy=r,r.provider_type},c.getCopy=function(){var e=c.providerCopy;return c.providerCopy=null,e},c.extend=function(t){return e.extend(t,{children:t.children||[],
groups:t.groups||[],attributes:n.zipObject(n.pluck(t.attributes,"name"),n.pluck(t.attributes,"value"))||{}},d)},c.priorityComparator=function(e,t){if(e.priority<t.priority)return-1;
if(e.priority>t.priority)return 1;if(e.user_provider===t.user_provider)throw new Error("Two root providers cannot have the same priority.")},c.potentialParentsFor=function(e){
if(e){if(e.isRoot())return[];var t=n.pluck(e.getDescendants(),"id");return t.push(e.id),n.filter(p,function(e){return!n.contains(t,e.id)})}return n.extend([],p);
},{SecurityProviders:["Restangular","Constants","SecurityProviderRelationships","TR","TR_LOOKUP",function(t,i,a,d,p){function h(e){return e.user_provider&&e.group_provider?d(e.isCluster()?"User and group cluster.":"User and group provider."):e.user_provider?d(e.isCluster()?e.useGroupLookup()?"User cluster using external group lookup.":"User cluster only.":e.useGroupLookup()?"User provider using external group lookup.":"User provider only."):e.group_provider?d(e.isCluster()?"Group cluster only.":"Group provider only."):void 0;
}function _(e){var t={};switch(t.services=h(e),e.provider_type){case"Local":t.mode=d("Authenticating locally.");break;case"SAML":e.attributes.name_id_format===i.SecurityProvider.NAME_ID_FORMAT_PERSISTENT&&(t.mode=d("Using user account provision.")),
e.attributes.name_id_format===i.SecurityProvider.NAME_ID_FORMAT_EMAIL_ADDRESS&&(t.mode=d("Using user account lookup."));break;case"LDAP":if(!e.isCluster()){
var n=e.attributes.encryption;n===i.SecurityProvider.ENCRYPTION_NONE?t.mode=d("Communicating with LDAP server at ldap://%1:%2.",e.attributes.server_host,e.attributes.server_port):t.mode=d("Communicating securely with LDAP server at %3://%1:%2.",e.attributes.server_host,e.attributes.server_port,n===i.SecurityProvider.ENCRYPTION_LDAPS?"ldaps":"ldap"),
e.attributes.local_connection===i.SecurityProvider.STATE_DISABLED&&(t.agent=[p("Disconnected from %1 since %2$extdatetime."),p("Connected from %1 since %2$extdatetime.")]);
break}e.attributes.mode===i.SecurityProvider.MODE_FAILOVER?t.mode=d("Using top-to-bottom (failover) selection algorithm."):t.mode=d("Using round-robin (load balancing) selection algorithm.");
break;case"RADIUS":e.isCluster()?e.attributes.mode===i.SecurityProvider.MODE_FAILOVER?t.mode=d("Using top-to-bottom (failover) selection algorithm."):t.mode=d("Using round-robin (load balancing) selection algorithm."):t.mode=d("Communicating with RADIUS server at %1:%2.",e.attributes.server_host,e.attributes.server_port),
e.attributes.local_connection===i.SecurityProvider.STATE_DISABLED&&(t.agent=[p("Disconnected from %1 since %2$extdatetime."),p("Connected from %1 since %2$extdatetime.")]);
var r=e.attributes.user_mode;r===i.SecurityProvider.ALLOW_LIST?t.userWhitelisting=d("Allows listed usernames."):t.userWhitelisting=d("Allows any username.");
break;case"Kerberos":t.mode=d("Authorizes using the provided Kerberos Keytab.");var r=e.attributes.user_mode;r===i.SecurityProvider.ALLOW_LIST?t.userWhitelisting=d("Allows listed usernames."):r===i.SecurityProvider.ALLOW_REGEX?t.userWhitelisting=d("Allows usernames matching a pattern."):t.userWhitelisting=d("Allows any username.");
var a=e.attributes.spn_mode;a===i.SecurityProvider.ALLOW_LIST?t.groupWhitelisting=d("Allows listed domains."):t.groupWhitelisting=d("Allows any domains.");
}return t}var g=a;return l=t.withConfig(function(e){e.addRequestInterceptor(o),e.addResponseInterceptor(s),e.addElementTransformer("security_providers",!0,u);
}).all("security_providers"),c.RELATION=g,c.getList=function(e,t){var n=t?l.customGETLIST(t,e):l.getList(e);return n.then(function(t){return e.flat?t:r(t,_);
})},c.customGETLIST=function(e,t){var n=l.customGETLIST(e,t);return n.then(function(e){return r(e,_)})},c.createSAML=e.bind(l,l.createSAML),c.createLDAP=e.bind(l,l.createLDAP),
c.createRADIUS=e.bind(l,l.createRADIUS),c.createKerberos=e.bind(l,l.createKerberos),c.get=e.bind(l,l.get),c.post=e.bind(l,l.post),c.customPUT=e.bind(l,l.customPUT),
c.copy=function(e,t){return l.one(e).customGET("copy",t)},c.upgrade=function(e,t){return l.one(e).customGET("upgrade",t)},c.node=function(e,t){return l.one(e).customGET("node",t);
},c.sync=function(e){return t.one("security_providers",e).customGET("sync")},c.fullSync=function(){return t.all("security_providers").customGET("sync");
},c.getStatus=function(e){return n.isUndefined(e)?t.all("security_providers").customGET("status",{},{"X-BG-Auto-Request":"1"}):t.one("security_providers",e).customGET("status",{},{
"X-BG-Auto-Request":"1"})},c.getHistory=function(e,n){return t.one("security_providers",e).customGET("log",n,{"X-BG-Auto-Request":"1"})},c.defaultPolicies=function(){
return t.all("security_providers/default_policies").post({only:"id,name,unique_id"})},c.search=function(e){return t.all("security_providers/search").post(e);
},c.patchPriorities=function(t){var r=n.pluck(t,"id");return l.patch(r).then(function(n){return e.forEach(t,function(e,t){e.priority=t+1}),m.sort(c.priorityComparator),
n})},c.hasProviderTree=function(){return!n.isEmpty(f)},c}]}}),define("skill/Skill",["lodash"],function(e){"use strict";var t,n;return n={id:null,display_name:null,
code_name:null,parent_id:null,priority:null},t={isEqual:function(e){return e&&this.id===e.id},isRoot:function(){return null===this.parent_id},isChild:function(){
return null!==this.parent_id},addChild:function(e){if(e.isRoot())throw new Error("can't add a root skill as a child");if(e.parent_id!==this.id)throw new Error("child doesn't have parent_id set to correct value");
this.children.push(e)},hasChild:function(t){return!!e.find(this.children,function(e){return e.isEqual(t)})},removeChild:function(t){var n=e.remove(this.children,function(e){
return e.isEqual(t)},this);if(!n||0===n.length)throw new Error("child not found")},removeAllChildren:function(t){t&&e.invoke(this.children,"removeAllChildren",t),
this.children=[]},getChildren:function(){return e.extend([],this.children)},getDescendants:function(){var e,t=[];for(e=0;e<this.children.length;e++)t=t.concat(this.children[e].getDescendants());
return t.concat(this.children)},childCount:function(){return this.children.length},childAt:function(e){return this.children[e]},toJson:function(){var t={};
return e.forEach(n,function(e,n){t[n]=this[n]},this),t}},{create:function(r){r=r||{};var i=e.create(t);return e.assign(i,e.defaults(r,{children:[]},n)),
i},priorityComparator:function(e,t){if(e.priority<t.priority)return-1;if(e.priority>t.priority)return 1;throw new Error("Two root skills cannot have the same priority.");
}}}),define("skill/SkillTree",["lodash","skill/Skill"],function(e,t){"use strict";function n(n){function r(n){return l=n,u=s(l),c=[],e.forEach(l,function(e){
i(e)}),o(),c.sort(t.priorityComparator),c}function i(e){if(e.isRoot())c.push(e);else{var t=u[e.parent_id];if(!t)throw new Error("Parent skill not found with id '"+e.parent_id+"'");
t.addChild(e)}e.depth=a(e)}function a(e){var t=null;return t=null===e.parent_id?1:1+a(u[e.parent_id])}function o(t){var n;n=e(t?t.getDescendants().concat(t):l),
n.forEach(function(e){e.depth=a(e)}).value()}function s(t){return e.reduce(t,function(e,t){return e[t.id]=t,e},{})}var u,l,c;u={},l=null,c=[],this.getList=function(){
var e=n.getList();return e.then(function(e){return r(e)})},n.create&&(this.create=e.bind(n.create,n)),this.post=function(e){return n.post(e).then(function(t){
return e.id=t.skill.id,e.code_name=t.skill.code_name,e.priority=t.skill.priority,u[e.id]=e,l.push(e),i(e),t})},this.put=function(t){return t.put().then(function(t){
var n,r;return n=u[t.skill.id],r=e.find(l,function(e){return e.hasChild(n)}),r&&r.id!==n.parent_id&&(r.removeChild(n),i(n),o(n)),n.code_name=t.skill.code_name,
t})},this.remove=function(t){var n=this;return t.remove().then(function(t){var r,i,a,o;return o=t.skill.id,r=u[o],a=e.pluck(r.getDescendants(),"id"),i=n.getParentFor(r),
e.remove(l,function(t){return e.contains(a,t.id)}),e.remove(l,{id:r.id}),i?i.removeChild(r):(e.remove(c,{id:r.id}),e.forEach(c,function(e,t){e.priority=t+1;
})),delete u[r.id],e.forEach(a,function(e){delete u[e]}),t})},this.patchPriorities=function(r){var i=e.pluck(r,"id");return n.patch(i).then(function(n){
return e.forEach(r,function(e,t){e.priority=t+1}),c.sort(t.priorityComparator),n})},this.getParentFor=function(e){return null!==e.parent_id?u[e.parent_id]:null;
},this.getAncestorsFor=function(e){if(e.isRoot())return[];var t=this.getParentFor(e);return[t].concat(this.getAncestorsFor(t))},this.potentialParentsFor=function(t){
if(t){if(t.isRoot())return[];var n=e.pluck(t.getDescendants(),"id");return n.push(t.id),e.filter(l,function(t){return!e.contains(n,t.id)})}return e.extend([],l);
},this.findById=function(e){return u[e]},this.filter=function(t){return e.filter(l,t)},this.forEach=function(t){e.forEach(l,t)},this.getCount=function(){
return l.length}}return n}),define("skill/SkillService",["angular","lodash","skill/SkillTree","skill/Skill"],function(e,t,n,r){"use strict";function i(n){
return function(i,a){if("getList"===a){if(!e.isArray(i))throw new Error("unexpected GET /skill response format");var o=t(i).map(r.create);n&&(o=o.map(n)),
i=o.value()}else if("get"===a){if(e.isArray(i))throw new Error("unexpected GET /skill/n response format");i=r.create(i),n&&(i=n(i))}return i}}return{SkillService:["Restangular",function(e){
return{getTree:function(r,a){a=a||"skill";var o=e.withConfig(function(e){e.addRequestInterceptor(function(e,n){if("put"===n||"post"===n){if(!t.isFunction(e.toJson))throw new Error("data should be a Skill with a toJson() method");
return e.toJson()}return e}),e.addResponseInterceptor(i(r)),e.addElementTransformer("skill",!0,function(e){return e.addRestangularMethod("create","get","create"),
e})}).all(a);return new n(o)},usersWith:function(t){return e.all("user").getList({havingSkill:t.id,only:"id,private_display_name"})}}}]}}),define("team/TeamService",["lodash"],function(e){
"use strict";return{Team:["Restangular","Constants","TR_LOOKUP","TR_FORMAT",function(t,n,r,i){function a(e,t,r){var a=t;return r===n.TEAM_TYPE_NORMAL?a=n.Team.NO_TEAM_ID===e?t:i(l,t):r===n.TEAM_TYPE_EMBASSY&&(a=n.Team.NO_TEAM_ID===e?t:i(u,t)),
a}function o(t){return t.isNormal=function(){return t.type===n.Team.TYPE_NORMAL},t.isEmbassy=function(){return t.type===n.Team.TYPE_EMBASSY},t.prefixedName=e.partial(a,t.team_id,t.team_name,t.type),
t}var s,u,l,c;return u=r("Embassy: %1"),l=r("Team: %1"),c=0,s=t.withConfig(function(t){t.addElementTransformer("team",!0,function(e){return e.addRestangularMethod("create","get","create"),
e.addRestangularMethod("search_for_available_user","post","search_for_available_user"),e});var n=0;t.addRequestInterceptor(function(e,t,r){return"post"===t&&"search_for_available_user"===r&&(e.requestId=++n),
e}),t.addResponseInterceptor(function(e,t,r,i,a){return"post"===t&&"search_for_available_user"===r&&a.config.data.requestId!==n?null:e}),t.setRestangularFields({
id:"team_id"}),t.extendModel("team",o),t.extendModel("embassy",o),t.addResponseInterceptor(function(t,n){return"getList"===n?e.forEach(t,o):"put"!==n&&"post"!==n&&"remove"!==n||++c,
t})}).all("team"),s.makePrefixedName=a,s.makePrefixedOptions=function(t){return e.map(t,function(e){return{label:a(e.team_id,e.team_name,e.type),value:e.team_id
}})},s.setRoute=function(e){return s.route=e,s},s.modified=function(){return c},s}]}}),define("user/UserService",["angular","lodash"],function(e,t){"use strict";
return{UserService:["Restangular","Constants","UserSettings","SAPSettings","currentUserInfo",function(n,r,i,a,o){var s;return s=n.withConfig(function(n){
n.addElementTransformer("user",!0,function(e){return e.addRestangularMethod("create","get","create"),e}),n.addResponseInterceptor(function(e,n){return"get"===n&&(e.type=parseInt(e.type,10),
e.password=null,null===e.password_expire_date&&(e.password_expire_date=e.next_expire_date),null===e.account_expire_date&&(e.account_expire_date=e.next_expire_date),
delete e.next_expire_date,e.full_support_license_pool_id=null,e.chat_support_license_pool_id=null,e.perm_sd_allowed===r.User.perm_sd_allowed.FULL&&(e.full_support_license_pool_id=e.license_pool_id),
e.perm_sd_allowed===r.User.perm_sd_allowed.CHAT_ONLY&&(e.chat_support_license_pool_id=e.license_pool_id),e.isPolicy=function(){return!1},e.isEmbassy=function(){
return e.type===r.User.TYPE_EMBASSY},e.isNormal=function(){return e.type===r.User.TYPE_NORMAL},i.makeValueObjects(e),t(["attended_session_policy","unattended_session_policy","chat_session_policy"]).forEach(function(t){
e[t].value&&a.makeValueObjects(e[t].value)}).value(),e.isCurrentUser=function(){return o.id===e.id}),e}),n.addRequestInterceptor(function(n,o){if("put"===o||"post"===o){
var s=e.copy(n);return null===s.password&&delete s.password,s.teams&&delete s.teams,s.group_policies&&delete s.group_policies,i.makeValues(s),i.unextend(s),
t(["attended_session_policy","unattended_session_policy","chat_session_policy"]).forEach(function(e){s[e]&&(a.makeValues(s[e]),a.unextend(s[e]))}).value(),
s.password_never_expires&&(s.password_expire_date=null),s.account_never_expires&&(s.account_expire_date=null),s.perm_sd_allowed===r.User.perm_sd_allowed.FULL?s.license_pool_id=s.full_support_license_pool_id:s.perm_sd_allowed===r.User.perm_sd_allowed.CHAT_ONLY?s.license_pool_id=s.chat_support_license_pool_id:s.license_pool_id=null,
s.full_support_license_pool_id&&delete s.full_support_license_pool_id,s.chat_support_license_pool_id&&delete s.chat_support_license_pool_id,s}return n});
}).all("user"),s.addRestangularMethod("current","get","0"),s.setRoute=function(e){return s.route=e,s},s}]}}),define("user/UserIndexService",[],function(){
"use strict";function e(e){return e.data}return{UserIndexService:["$http","userPaths",function t(n,r){return{paths:r,withPaths:function(e){return new t(n,e);
},getList:function(t){return n.get(this.paths.index(),{params:t}).then(e)},remove:function(t){return n.delete(this.paths.delete(t)).then(e)},current:function(t){
return n.get(this.paths.show(0),{params:t}).then(e)},currentPermission:function(e){return this.current({only:e}).then(function(t){return t[e]})},resetFailedLogins:function(t){
return n.put(this.paths.action(t,"reset-failed-logins")).then(e)}}}]}}),define("util/ActivityIndicatorContext",[],function(){"use strict";function e(e){
return{make:function(){return new t(e)}}}function t(e){function t(t){e.warn(t)}var n,r,i;r=0,i=!1,this.waiting=function(){return!i},this.startedActivity=function(){
i=!1,r++,n++},this.completedActivity=function(){return r>0?(r--,void(i||0!==r||(i=!0))):void t("Unbalanced calls to startedActivity() / completedActivity()");
}}return e.$inject=["$log"],{ActivityIndicatorContext:e}}),define("util/NLS",["angular","moment","lodash"],function(e,t,n){"use strict";var r=e.module("bg.nls",[]);
return r.factory("nls",["$log",function(r){function i(e){var t=a(e),r=n.toArray(arguments).slice(1);return o.apply(p,n.flatten([t,r]))}function a(e){var t="",n=[];
e=e.replace(/\s+/g," ").replace(/â€™/g,"'").trim(),t=e,d?t=d(t):l&&l.hasOwnProperty(e)&&(t=l[e]);var i=1;return t=t.replace(/%([1-9])(\$[a-z]+)?/g,function(e,t,r){
return n.push({index:i,argno:t,formatString:r&&r.substring(1)||""}),"%"+i++}).replace(/#([A-Z_]+)/g,function(e,t){return c&&c.hasOwnProperty(t)?c[t]:e}),
function(){var i=arguments;return t.replace(/%([1-9])/g,function(t,a){var o,u,l;if(a--,!(a>=n.length))return o=n[a],u=o.argno-1,u>=i.length?void r.error("translate(): missing argument "+o.argno+" for string '"+e+'"'):(l=i[u],
o.formatString&&(f.hasOwnProperty(o.formatString)?l=s(o.formatString,l):r.error("translate(): invalid date/time format '"+o.formatString+"' for string '"+e+"'")),
l)})}}function o(e){return e.apply(p,n.toArray(arguments).slice(1))}function s(e,n){var i,a;return a=t.unix(n).utc().add(p.timezoneOffsetMinutes,"minutes"),
f[e]?(i=a.format(f[e].format),f[e].timezone&&(i+=" "+p.timezoneAbbreviation),i):(r.error("trdate format '"+e+"' does not exist"),"")}function u(e){return e.replace(/(#\w+)|(%[1-9](\$\w+)?)|(\w+)/gi,function(e,t,n,r,i){
return t||n?e:i[0]+new Array(i.length).join(".")})}var l,c,d,f,p,m,h,_;f={fulldatetimez:{format:"LL hh:mm:ss A",timezone:!0},extdatetime:{format:t.localeData().longDateFormat("llll").replace("LT","HH:mm:ss"),
timezone:!0},datetime:{format:"LLL",timezone:!0}},p={timezoneAbbreviation:"",timezoneOffsetMinutes:0,fullNLSInterface:!1,localeMap:{},preferredLocale:"en-us",
defaultLanguageID:1,defaultLanguageCode:"en-us",formatDate:s,lookup:a,translate:i,format:o},m=i,h=a,_=o,p.setConfig=function(t){return e.forEach(t,function(e,t){
p.hasOwnProperty(t)&&(p[t]=e)}),this},p.setTranslation=function(t){if(d=null,l=null,c=null,e.isObject(t))t.strings?(l=t.strings,c=t.constant_format_specifiers):l=t;else if(e.isString(t))switch(t){
case"dots":d=u;break;default:throw new Error("Invalid translation name: "+t)}return this},p.getMonthNames=function(e){var r=e?"MMM":"MMMM",i=t();return n.map(n.range(12),function(e){
return i.month(e).format(r)})},p.getDayNames=function(e){var r,i,a;return e=e||{},r=e.short?"ddd":"dddd",i=t(),a=n.map(n.range(7),function(e){return i.day(e).format(r);
}),n.isNumber(e.zeroDay)&&e.zeroDay>0&&e.zeroDay<7&&n.times(e.zeroDay,function(){a.push(a.shift())}),a};var g=h("%1 bytes");return p.bytesToString=function(e){
var t=Math.log(e)/Math.log(1024)|0,n=(e/Math.pow(1024,t)).toFixed(t>2?2:null);return t?n+" "+"KMGTPEZY"[Math.min(t,8)-1]+"iB":_(g,n)},p.getLocaleOptions=function(){
return n(p.localeMap).map(function(e,t){return{value:t,label:e}}).sortBy("label").value()},p}]),r.factory("TR",["nls",function(e){return e.translate}]),
r.factory("TR_LOOKUP",["nls",function(e){return e.lookup}]),r.factory("TR_FORMAT",["nls",function(e){return e.format}]),r.directive("bgTr",["nls","Util",function(e,t){
return{restrict:"AE",scope:{args:"=?bgTr"},link:function(r,i){var a=[i.html()];r.args&&(a=a.concat(n.map(n.isArray(r.args)?r.args:[r.args],function(e){
return t.encodeEntities(e.toString())}))),i.html(e.translate.apply(e,a))}}}]),r}),define("util/PaginationService",["angular","lodash"],function(e,t){"use strict";
var n={perPage:100,currentPage:1};return{PaginationService:function(){return{parse:function(r,i){var a,o,s;return s={},i=e.copy(i)||{},t.defaults(i,n),
a=parseInt(r.perPage,10),t.isNaN(a)?s.perPage=i.perPage:s.perPage=Math.min(a,i.perPage),o=parseInt(r.currentPage,10),t.isNaN(o)?s.currentPage=i.currentPage:s.currentPage=Math.max(o,i.currentPage),
s}}}}}),define("util/IdlenessHandler",["angular","lodash"],function(e,t){"use strict";return{IdlenessHandler:["$q","$timeout","Constants","$log","$injector","$window","BrowserFeatures","$rootScope",function(n,r,i,a,o,s,u,l){
function c(){p.get("/login/ping")}function d(){"visible"===document.visibilityState&&f()}function f(){l.$broadcast("logout")}var p,m=e.element(s),h=1e3*(i.session_auto_refresh_seconds||600),_=t.debounce(d,h);
return m.on("mousemove keyup",_),m.on("visibilitychange",function(){"visible"===document.visibilityState&&c()}),_(),{response:function(e){return p||(p=o.get("$http")),
null===e.headers("X-BG-Auto-Response")&&_(),e}}}]}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define("util/touchlog-client",[],e);else{
var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.touchlogClient=e()}}(function(){var e;return function e(t,n,r){
function i(o,s){if(!n[o]){if(!t[o]){var u="function"==typeof require&&require;if(!s&&u)return u(o,!0);if(a)return a(o,!0);var l=new Error("Cannot find module '"+o+"'");
throw l.code="MODULE_NOT_FOUND",l}var c=n[o]={exports:{}};t[o][0].call(c.exports,function(e){var n=t[o][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[o].exports;
}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){"use strict";t.exports={touch:e("./lib/touch"),
getBrowserInfo:e("./lib/getBrowserInfo"),WebBrowserType:e("./lib/WebBrowserType"),OSType:e("./lib/OSType")}},{"./lib/OSType":2,"./lib/WebBrowserType":3,
"./lib/getBrowserInfo":4,"./lib/touch":5}],2:[function(e,t,n){"use strict";var r={osWindows:1073741823,osWinNTFamily:520093695,osWinXP:303039489,osWinVista:336658689,
osWin2008:336658690,osWin7:336724225,osWin2008R2:336724226,osWin8:336855297,osWin2012:336855298,osWin81:336855300,osWin2012R2:336855304,osWin10:337117441,
osWin10Server:337117442,osChromeOS:1099497471,osLinux:1107296255,osMac:1157627903,osMacClassic:1140858879,osMacOSX:1140862975,osMacOSX10v0:1140858881,osMacOSX10v1:1140858882,
osMacOSX10v2:1140858884,osMacOSX10v3:1140858888,osMacOSX10v4:1140858897,osMacOSX10v5:1140858898,osMacOSX10v6:1140858900,osMacOSX10v7:1140858904,osMacOSX10v8:1140858913,
osMacOSX10v9:1140858914,osMacOSX10v10:1140858916,osMacOSX10v11:1140858920,osMacOSX10v12:1140858945,osBlackBerryFamily:2166489087,osAndroidFamily:2166554623,
osiOSFamily:2166685695,osiPhoneFamily:2166628351,osiPadFamily:2166632447,osWebFamily:2168586239,osWebFlash:2168520705,osWebJava:2168520706,osWebJavaScript:2168520708,
osUnknown:0,osAny:4294967295,osMaskPlatformType:4026531840,osMaskPlatformSubType:251658240,osMaskPlatformMajor:16711680,osMaskPlatformMinor:65280,osMaskPlatformRelease:255,
osMaskPlatformFamily:4294901760,osMaskPlatformFamilyGroup:4294963200};t.exports=r},{}],3:[function(e,t,n){"use strict";var r={Unknown:0,Chrome:1,Firefox:2,
IE:3,Edge:4,Safari:5,Opera:6};t.exports=r},{}],4:[function(e,t,n){"use strict";function r(e,t){return e.indexOf(t)>-1}function i(e,t){return e===t||0===e.indexOf(t+".");
}var a=e("./WebBrowserType"),o=e("./OSType"),s=e("ua-parser-js");t.exports=function(e){function t(){var e;return e=r(l,"windows nt 5.1")?{type:o.osWinXP,
version:"5.1"}:r(l,"windows nt 5.2")?{type:o.osWinXP,version:"5.2"}:r(l,"windows nt 6.0")?{type:o.osWinVista,version:"6.0"}:r(l,"windows nt 6.1")?{type:o.osWin7,
version:"6.1"}:r(l,"windows nt 6.2")?{type:o.osWin8,version:"6.2"}:r(l,"windows nt 6.3")?{type:o.osWin81,version:"6.3"}:r(l,"windows nt 10")?{type:o.osWin10,
version:"10"}:{type:o.osWindows,version:c.os.version||"0"},c.os&&c.os.name?c.os.version?e.name=c.os.name+" "+c.os.version:e.name=c.os.name:e.name="Windows",
e}function n(){var e={version:c.os.version,name:c.os.name+" "+c.os.version,type:o.osMacOSX};return i(c.os.version,"10.5")?e.type=o.osMacOSX10v5:i(c.os.version,"10.6")?e.type=o.osMacOSX10v6:i(c.os.version,"10.7")?e.type=o.osMacOSX10v7:i(c.os.version,"10.8")?e.type=o.osMacOSX10v8:i(c.os.version,"10.9")?e.type=o.osMacOSX10v9:i(c.os.version,"10.10")?e.type=o.osMacOSX10v10:i(c.os.version,"10.11")?e.type=o.osMacOSX10v11:i(c.os.version,"10.12")&&(e.type=o.osMacOSX10v12),
e}var u=e.navigator.userAgent,l=u.toLowerCase(),c=s(u);c.cpu=c.cpu||{},c.cpu.architecture=c.cpu.architecture||null,c.os=c.os||{},c.os.name=c.os.name||null,
c.os.version=c.os.version||null,c.browser=c.browser||{},c.browser.name=c.browser.name||null,c.browser.version=c.browser.version||null,"iOS"!==c.os.name||"WebKit"!==c.browser.name&&"Mobile Safari"!==c.browser.name||(c.browser.name="Safari"),
"Chromium OS"===c.os.name&&(c.os.name="Chrome OS"),"Linux"===c.os.name&&"x86_64"===c.os.version&&(c.os.version=null);var d="Firefox"===c.browser.name,f="Chrome"===c.browser.name,p="Safari"===c.browser.name,m="Opera"===c.browser.name,h="Edge"===c.browser.name,_="IE"===c.browser.name,g=c.browser.version,v=a.Unknown,y=c.browser.name,b=f&&r(u,"CrOS"),w="BlackBerry"===c.os.name,M="Windows"===c.os.name,D="Android"===c.os.name,$=!D&&r(l,"linux"),L="Mac OS"===c.os.name,k="iOS"===c.os.name,x=c.cpu.architecture,T=c.os.version,S=c.os.name;
T&&(S+=" "+T);var Y=o.osUnknown;if(_?v=a.IE:f?v=a.Chrome:d?v=a.Firefox:h?v=a.Edge:p?v=a.Safari:m&&(v=a.Opera),M){var C=t();Y=C.type,T=C.version,S=C.name;
}else if(L){var E=n();Y=E.type,T=E.version,S=E.name}else k?Y=o.osiOSFamily:D?Y=o.osAndroidFamily:w?Y=o.osBlackBerryFamily:b?Y=o.osChromeOS:$&&(Y=o.osLinux);
return"amd64"===c.cpu.architecture?x="x86_64":"ia32"===c.cpu.architecture&&(x="x86"),{os:{architecture:x,version:T,type:Y,name:S,isIOS:k,isOSX:L,isMacOS:L,
isLinux:$,isAndroid:D,isWindows:M,isChromeOS:b,isBlackBerry:w},browser:{version:g,type:v,name:y,isIE:_,isEdge:h,isOpera:m,isChrome:f,isSafari:p,isFirefox:d
}}}},{"./OSType":2,"./WebBrowserType":3,"ua-parser-js":6}],5:[function(e,t,n){"use strict";var r=e("./getBrowserInfo");t.exports=function(e,t,n){var i="https://license.bomgar.com",a=r(t);
e.a=a.os.architecture,e.O=a.os.type,e.o=a.os.version,e.t=a.os.name,e.W=a.browser.type,e.w=a.browser.version,e.y=a.browser.name;t.console&&t.console.log;
n.get(i,e).then(function(e,t){},function(e,n,r){t.console&&t.console.error})}},{"./getBrowserInfo":4}],6:[function(t,n,r){!function(t,i){"use strict";var a="0.7.10",o="",s="?",u="function",l="undefined",c="object",d="string",f="major",p="model",m="name",h="type",_="vendor",g="version",v="architecture",y="console",b="mobile",w="tablet",M="smarttv",D="wearable",$="embedded",L={
extend:function(e,t){for(var n in t)"browser cpu device engine os".indexOf(n)!==-1&&t[n].length%2===0&&(e[n]=t[n].concat(e[n]));return e},has:function(e,t){
return"string"==typeof e&&t.toLowerCase().indexOf(e.toLowerCase())!==-1},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===d?e.split(".")[0]:i;
}},k={rgx:function(){for(var e,t,n,r,a,o,s,d=0,f=arguments;d<f.length&&!o;){var p=f[d],m=f[d+1];if(typeof e===l){e={};for(r in m)m.hasOwnProperty(r)&&(a=m[r],
typeof a===c?e[a[0]]=i:e[a]=i)}for(t=n=0;t<p.length&&!o;)if(o=p[t++].exec(this.getUA()))for(r=0;r<m.length;r++)s=o[++n],a=m[r],typeof a===c&&a.length>0?2==a.length?typeof a[1]==u?e[a[0]]=a[1].call(this,s):e[a[0]]=a[1]:3==a.length?typeof a[1]!==u||a[1].exec&&a[1].test?e[a[0]]=s?s.replace(a[1],a[2]):i:e[a[0]]=s?a[1].call(this,s,a[2]):i:4==a.length&&(e[a[0]]=s?a[3].call(this,s.replace(a[1],a[2])):i):e[a]=s?s:i;
d+=2}return e},str:function(e,t){for(var n in t)if(typeof t[n]===c&&t[n].length>0){for(var r=0;r<t[n].length;r++)if(L.has(t[n][r],e))return n===s?i:n}else if(L.has(t[n],e))return n===s?i:n;
return e}},x={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{
model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51",
"NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},T={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[m,g],[/\s(opr)\/([\w\.]+)/i],[[m,"Opera"],g],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],[m,g],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[m,"IE"],g],[/(edge)\/((\d+)?[\w\.]+)/i],[m,g],[/(yabrowser)\/([\w\.]+)/i],[[m,"Yandex"],g],[/(comodo_dragon)\/([\w\.]+)/i],[[m,/_/g," "],g],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,/(qqbrowser)[\/\s]?([\w\.]+)/i],[m,g],[/(uc\s?browser)[\/\s]?([\w\.]+)/i,/ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i,/JUC.+(ucweb)[\/\s]?([\w\.]+)/i],[[m,"UCBrowser"],g],[/(dolfin)\/([\w\.]+)/i],[[m,"Dolphin"],g],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[m,"Chrome"],g],[/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],[g,[m,"MIUI Browser"]],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],[g,[m,"Android Browser"]],[/FBAV\/([\w\.]+);/i],[g,[m,"Facebook"]],[/fxios\/([\w\.-]+)/i],[g,[m,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[g,[m,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[g,m],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[m,[g,k.str,x.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[m,g],[/(navigator|netscape)\/([\w\.-]+)/i],[[m,"Netscape"],g],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]+)*/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[m,g]],
cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[v,"amd64"]],[/(ia32(?=;))/i],[[v,L.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[v,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[v,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[v,/ower/,"",L.lowerize]],[/(sun4\w)[;\)]/i],[[v,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[v,L.lowerize]]],
device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[p,_,[h,w]],[/applecoremedia\/[\w\.]+ \((ipad)/],[p,[_,"Apple"],[h,w]],[/(apple\s{0,1}tv)/i],[[p,"Apple TV"],[_,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[_,p,[h,w]],[/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],[p,[_,"Amazon"],[h,w]],[/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],[[p,k.str,x.device.amazon.model],[_,"Amazon"],[h,b]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[p,_,[h,b]],[/\((ip[honed|\s\w*]+);/i],[p,[_,"Apple"],[h,b]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[_,p,[h,b]],[/\(bb10;\s(\w+)/i],[p,[_,"BlackBerry"],[h,b]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],[p,[_,"Asus"],[h,w]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[_,"Sony"],[p,"Xperia Tablet"],[h,w]],[/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],[[_,"Sony"],[p,"Xperia Phone"],[h,b]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[_,p,[h,y]],[/android.+;\s(shield)\sbuild/i],[p,[_,"Nvidia"],[h,y]],[/(playstation\s[34portablevi]+)/i],[p,[_,"Sony"],[h,y]],[/(sprint\s(\w+))/i],[[_,k.str,x.device.sprint.vendor],[p,k.str,x.device.sprint.model],[h,b]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[_,p,[h,w]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w+)*/i,/(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],[_,[p,/_/g," "],[h,b]],[/(nexus\s9)/i],[p,[_,"HTC"],[h,w]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[p,[_,"Microsoft"],[h,y]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[_,"Microsoft"],[h,b]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w+)*/i,/(XT\d{3,4}) build\//i,/(nexus\s[6])/i],[p,[_,"Motorola"],[h,b]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[p,[_,"Motorola"],[h,w]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[_,"Samsung"],p,[h,w]],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i,/sec-((sgh\w+))/i],[[_,"Samsung"],p,[h,b]],[/(samsung);smarttv/i],[_,p,[h,M]],[/\(dtv[\);].+(aquos)/i],[p,[_,"Sharp"],[h,M]],[/sie-(\w+)*/i],[p,[_,"Siemens"],[h,b]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]+)*/i],[[_,"Nokia"],p,[h,b]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[p,[_,"Acer"],[h,w]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[_,"LG"],p,[h,w]],[/(lg) netcast\.tv/i],[_,p,[h,M]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w+)*/i],[p,[_,"LG"],[h,b]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[p,[_,"Lenovo"],[h,w]],[/linux;.+((jolla));/i],[_,p,[h,b]],[/((pebble))app\/[\d\.]+\s/i],[_,p,[h,D]],[/android.+;\s(glass)\s\d/i],[p,[_,"Google"],[h,D]],[/android.+(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],[[p,/_/g," "],[_,"Xiaomi"],[h,b]],[/\s(tablet)[;\/\s]/i,/\s(mobile)[;\/\s]/i],[[h,L.lowerize],_,p]],
engine:[[/windows.+\sedge\/([\w\.]+)/i],[g,[m,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[m,g],[/rv\:([\w\.]+).*(gecko)/i],[g,m]],
os:[[/microsoft\s(windows)\s(vista|xp)/i],[m,g],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[m,[g,k.str,x.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[m,"Windows"],[g,k.str,x.os.windows.version]],[/\((bb)(10);/i],[[m,"BlackBerry"],g],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,/linux;.+(sailfish);/i],[m,g],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[m,"Symbian"],g],[/\((series40);/i],[m],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[m,"Firefox OS"],g],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[m,g],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[m,"Chromium OS"],g],[/(sunos)\s?([\w\.]+\d)*/i],[[m,"Solaris"],g],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[m,g],[/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],[[m,"iOS"],[g,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i,/(macintosh|mac(?=_powerpc)\s)/i],[[m,"Mac OS"],[g,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i,/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]+)*/i],[m,g]]
},S=function(e,n){if(!(this instanceof S))return new S(e,n).getResult();var r=e||(t&&t.navigator&&t.navigator.userAgent?t.navigator.userAgent:o),i=n?L.extend(T,n):T;
return this.getBrowser=function(){var e=k.rgx.apply(this,i.browser);return e.major=L.major(e.version),e},this.getCPU=function(){return k.rgx.apply(this,i.cpu);
},this.getDevice=function(){return k.rgx.apply(this,i.device)},this.getEngine=function(){return k.rgx.apply(this,i.engine)},this.getOS=function(){return k.rgx.apply(this,i.os);
},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()
}},this.getUA=function(){return r},this.setUA=function(e){return r=e,this},this.setUA(r),this};S.VERSION=a,S.BROWSER={NAME:m,MAJOR:f,VERSION:g},S.CPU={
ARCHITECTURE:v},S.DEVICE={MODEL:p,VENDOR:_,TYPE:h,CONSOLE:y,MOBILE:b,SMARTTV:M,TABLET:w,WEARABLE:D,EMBEDDED:$},S.ENGINE={NAME:m,VERSION:g},S.OS={NAME:m,
VERSION:g},typeof r!==l?(typeof n!==l&&n.exports&&(r=n.exports=S),r.UAParser=S):typeof e===u&&e.amd?e(function(){return S}):t.UAParser=S;var Y=t.jQuery||t.Zepto;
if(typeof Y!==l){var C=new S;Y.ua=C.getResult(),Y.ua.get=function(){return C.getUA()},Y.ua.set=function(e){C.setUA(e);var t=C.getResult();for(var n in t)Y.ua[n]=t[n];
}}}("object"==typeof window?window:this)},{}]},{},[1])(1)}),define("util/makeTouchLogRequest",["jquery"],function(e){"use strict";return["$window","Constants","nls","shouldHitTouchLog",function(t,n,r,i){
i&&require(["util/touchlog-client"],function(i){i.touch({c:n.company_name,i:"lgn",l:r.preferredLocale,r:n.build,s:n.build_id,v:n.version},t,e)})}]}),define("util/Util",["angular","lodash"],function(e,t){
"use strict";var n=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,r=/([^\#-~| |!])/g,i=/(?:[\0-\/:-@\[-`\{-\xA9\xAB-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u0560\u0588-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EF\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB-\u07FF\u082E-\u083F\u085C-\u089F\u08B5\u08BE-\u08D3\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2\u09F3\u09FA-\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0AFA-\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF3-\u0BFF\u0C04\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0D00\u0D04\u0D0D\u0D11\u0D3B\u0D3C\u0D45\u0D49\u0D4F-\u0D53\u0D64\u0D65\u0D79\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E86\u0E89\u0E8B\u0E8C\u0E8E-\u0E93\u0E98\u0EA0\u0EA4\u0EA6\u0EA8\u0EA9\u0EAC\u0EBA\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u1368\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u17EF\u17FA-\u180A\u180E\u180F\u181A-\u181F\u1878-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1CCF\u1CD3\u1CF7\u1CFA-\u1CFF\u1DF6-\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFC\u2CFE\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u312E-\u3130\u318F-\u3191\u3196-\u319F\u31BB-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DB6-\u4DFF\u9FD6-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7AF\uA7B8-\uA7F6\uA828-\uA82F\uA836-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA8FE\uA8FF\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB66-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD06\uDD34-\uDD3F\uDD79-\uDD89\uDD8C-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEFC-\uDEFF\uDF24-\uDF2F\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56\uDC57\uDC77\uDC78\uDC9F-\uDCA6\uDCB0-\uDCDF\uDCF3\uDCF6-\uDCFA\uDD1C-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBB\uDDD0\uDDD1\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE34-\uDE37\uDE3B-\uDE3E\uDE48-\uDE5F\uDE7F\uDEA0-\uDEBF\uDEC8\uDEE7-\uDEEA\uDEF0-\uDEFF\uDF36-\uDF3F\uDF56\uDF57\uDF73-\uDF77\uDF92-\uDFA8\uDFB0-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCF9\uDD00-\uDE5F\uDE7F-\uDFFF]|\uD804[\uDC47-\uDC51\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC9\uDDCD-\uDDCF\uDDDB\uDDDD-\uDDE0\uDDF5-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF3B\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB8-\uDEBF\uDECA-\uDEFF\uDF1A-\uDF1C\uDF2C-\uDF2F\uDF3C-\uDFFF]|\uD806[\uDC00-\uDC9F\uDCF3-\uDCFE\uDD00-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC6D-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD823-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D-\uD83F\uD874-\uD87D\uD87F-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDEFF\uDF45-\uDF4F\uDF7F-\uDF8E\uDFA0-\uDFDF\uDFE1-\uDFFF]|\uD821[\uDFED-\uDFFF]|\uD822[\uDEF3-\uDFFF]|\uD82C[\uDC02-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDF5F\uDF72-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|[\uD836\uD83B][\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDFFF]|\uD83A[\uDCC5\uDCC6\uDCD7-\uDCFF\uDD4B-\uDD4F\uDD5A-\uDFFF]|[\uD83C\uDB40][\uDC00-\uDCFF\uDD0D-\uDFFF]|\uD869[\uDED7-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+/g,a={
makeOptions:function(e,n,r){return t.isArray(e)?t.map(e,function(e){return{value:e[n],label:e[r]}}):t.isObject(e)?t.map(e,function(e,t){return{value:t,
label:e}}):null},makeUserOptions:function(e){return e.sort(a.localeComparator(function(e){return e.private_display_name})).map(function(e){var n={value:e.id,
label:e.private_display_name+" ("+e.auth_username+")"};return t.isUndefined(e.pivot)||(n.role=e.pivot.role),n})},encodeEntities:function(e){return e.replace(/&/g,"&amp;").replace(n,function(e){
var t=e.charCodeAt(0),n=e.charCodeAt(1);return"&#"+(1024*(t-55296)+(n-56320)+65536)+";"}).replace(r,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;");
},formatForSorting:function(e){var t=e.replace(i,"").toLowerCase();return 0===t.length?"0"+e:t},localeComparator:function(e){return function(t,n){var r=e&&e(t)||t,i=e&&e(n)||n;
return a.formatForSorting(r).localeCompare(a.formatForSorting(i))}}};return a}),define("util/CreateImageFactory",["angular"],function(e){"use strict";return{
createImageFrom:["$q","$window",function(t,n){return function(r){function i(t){return e.isObject(t)&&t instanceof n.File}return t(function(e,t){if(!i(r))return void t();
var n=new FileReader;n.onload=function(n){var r=new Image;r.onload=function(){e(r)},r.onerror=function(){t()},r.src=n.target.result},n.readAsDataURL(r);
})}}]}}),define("services",["angular","moment","nls_config","nls_translation","restangular","callback_button/CallbackButtonProfileService","cluster/ClusterService","config/PublicSiteConfigService","config/UserConfigService","exit_survey/ExitSurveyService","failover/FailoverService","group_policy/GroupPolicyService","html_template/TemplateService","kerberos_keytab/KerberosKeytabService","languages/LanguagesService","misc/AuthInterceptor","misc/BrowserFeatures","misc/HtmlInterceptor","misc/LocalizationService","misc/LogoutHandler","misc/RefreshService","misc/ServerVarsService","nav/NavService","public_site/PublicSiteService","push_agent/PushAgentService","jump_item_roles/JumpItemRolesService","jump_policies/JumpPoliciesService","jump_item/JumpShortcutService","search/SearchService","shared_jump_groups/SharedJumpGroupsService","security_providers/SecurityProvidersService","skill/SkillService","team/TeamService","user/UserService","user/UserIndexService","util/ActivityIndicatorContext","util/NLS","util/PaginationService","util/IdlenessHandler","util/makeTouchLogRequest","util/Util","util/CreateImageFactory"],function(e,t,n,r,i,a,o,s,u,l,c,d,f,p,m,h,_,g,v,y,b,w,M,D,$,L,k,x,T,S,Y,C,E,A,F,j,P,O,H,R,I,N){
"use strict";var U=e.element("#htmlParams");return e.module("bg.admin.services",["bg.nls","restangular"]).constant({Constants:w.Constants}).constant({Options:w.Options
}).constant({Features:w.Features}).factory(j).factory(h).factory(g).factory(H).factory(u).factory(M).factory($).factory(x).factory(p).factory(D).factory(A).factory(F).factory(d).factory(Y).factory(E).factory(C).factory(f).factory(l).factory(a).factory(v).factory(s).factory(m).factory(T).factory(c).factory(o).factory(O).factory(b).factory(N).factory("StatusMessageCache",["$cacheFactory",function(e){
return e("StatusMessageCache")}]).constant("Util",I).constant("StatusTypes",{SUCCESS:"bg.admin.event.success",ERROR:"bg.admin.event.error",CLEAR:"bg.admin.event.clearStatus",
CLEAR_ALL:"bg.admin.event.clearAllStatus"}).constant("cacheBuster",U.data("cacheBuster")).constant("shouldHitTouchLog",U.data("touchlog")).constant("csrfToken",U.data("csrfToken")).constant("csrfTokenHeaderName","X-CSRF-TOKEN").value("currentUserInfo",U.data("currentUser")).value("BrowserFeatures",_).value("loadingSpinnerMarkup",function(){
return _.svgImg&&!_.IE9?'<img class="svg" src="/app/img/loading-spinner.svg" />':'<img src="/app/img/loading-spinner.gif" />'}()).config(["$cookiesProvider",function(e){
e.defaults.secure=!0}]).config(["$httpProvider","csrfToken","csrfTokenHeaderName",function(e,t,n){e.defaults.headers.post[n]=t,e.defaults.headers.put[n]=t,
e.defaults.headers.delete=e.defaults.headers.delete||{},e.defaults.headers.delete[n]=t,e.defaults.headers.patch=e.defaults.headers.patch||{},e.defaults.headers.patch[n]=t,
e.interceptors.push("IdlenessHandler"),e.interceptors.push("AuthInterceptor"),e.interceptors.push("HtmlInterceptor")}]).config(["RestangularProvider",function(e){
e.setBaseUrl("/login")}]).run(y).run(["nls","Languages",function(e,i){e.setConfig(n),e.setTranslation(r),"zh-hans"===e.preferredLocale?e.momentPreferredLocale="zh_cn":"zh"===e.preferredLocale?e.momentPreferredLocale="zh_cn":e.momentPreferredLocale=e.preferredLocale,
t.locale(e.momentPreferredLocale),i.getList()}]).run(R)}),define("util/ActivityIndicatorDirective",["angular","lodash"],function(e,t){"use strict";function n(e){
var t;return t='<div class="activity-indicator ng-hide">'+e+'    <span class="message" ng-hide="messageHidden" ng-bind="messageInternal"></span></div><div class="bg-transclude fading-show-hide"></div>',
{transclude:!0,scope:{waiting:"=?",bgActivityIndicator:"=?",delayed:"@?",message:"=?"},restrict:"AE",template:t,controller:r,link:function(e,t,n,r,i){var a,o;
a=t.children(".bg-transclude"),i(e.$parent,function(e){e.length?(a.append(e),o=a.find(".hidden-when-waiting"),0===o.length&&(o=a)):a.addClass("ng-hide"),
r.setContent(o)})}}}function r(n,r,a,o,s,u,l){function c(){M=!0,y?(f(),w=l(p,b,!1)):p(),_&&_.addClass("ng-hide")}function d(){f(),M=!1,m(),_&&o.removeClass(_,"ng-hide");
}function f(){w&&l.cancel(w)}function p(){v.removeClass("ng-hide")}function m(){v.addClass("ng-hide")}function h(n){if(!e.isUndefined(n)&&null!==n)if(t.isBoolean(n))n?c():d();else{
if(!e.isFunction(n.finally))throw new Error("bgActivityIndicator `waiting` value must be a boolean or a $q promise");if(n===g)return;g=n,c(),n.finally(function(){
d()})}}var _,g,v,y,b,w,M;b=250,this.setContent=function(t){_=t,_&&_.addClass("fading-show-hide"),e.isUndefined(M)&&c()},this.isWaiting=function(){return M;
},function(){if(i||(i=s("Please wait...")),y=a.hasOwnProperty("delayed"),v=r.children(".activity-indicator"),a.hasOwnProperty("message")?n.$watch("message",function(e){
n.messageHidden="false"===e||e===!1,n.messageHidden||(n.messageInternal=e||i)}):(n.messageHidden=!1,n.messageInternal=i),a.hasOwnProperty("waiting"))n.$watch("waiting",h);else{
if(!a.hasOwnProperty("bgActivityIndicator"))throw new Error("bgActivityIndicator must supply something to wait on");n.$watch("bgActivityIndicator",h)}}();
}n.$inject=["loadingSpinnerMarkup"],r.$inject=["$scope","$element","$attrs","$animate","TR","$log","$timeout"];var i;return{bgActivityIndicator:n}}),define("util/mutators/ArrayAsTextDirective",[],function(){
"use strict";function e(){return{restrict:"A",require:"ngModel",link:function(e,t,n,r){r&&(r.$parsers.push(function(e){return""===e?[]:e.split("\n")}),
r.$formatters.push(function(e){return e&&e.join?e.join("\n"):e}))}}}return{bgArrayAsText:e}}),define("util/CategorizedSelectDirective",["angular","lodash"],function(e,t){
"use strict";function n(e){function n(){}return{replace:!0,restrict:"A",scope:{categoryLabel:"@",sourceLabel:"@",altLabel:"@",categoryOptions:"=",sourceOptions:"=",
destOptions:"=",altOptions:"=?",filterDest:"&",sourceToDest:"&",destToSource:"&",sourceToAlt:"&",altToSource:"&",customSort:"&sort",disabled:"=?ngDisabled"
},templateUrl:"/app/js/util/categorized_select.html",controller:r,link:function(r,a,o,s){r.selectedCategory=r.categoryOptions[0],r.baseId=o.id,s.filterDest=r.filterDest(),
s.sourceToDest=r.sourceToDest()||n,s.destToSource=r.destToSource()||n,r.altOptions?(s.sourceToAlt=r.sourceToAlt()||n,s.altToSource=r.altToSource()||n,r.altSelect=!0):r.altSelect=!1,
r.customSort&&(s.customSort=r.customSort()),r.$watch("destOptions",function(e){t.isArray(e)&&t(r.categoryOptions).forEach(function(e){s.destSelectMap[e.value].scope().displayedOptions=s.filterDest(e.value);
}).value()}),r.$watch("selected.category",s.onCategoryChange);var u,l=e(i),c=a.find(".categorized-select-dest-container");s.destSelectElements=[],s.destSelectMap={},
t.forEach(r.categoryOptions,function(e){var t=r.$new();t.selectedDestOptions=[],t.displayedOptions=[],l(t,function(t,n){u||(u=t,u.attr("id",r.baseId+e.value+"_dest_select")),
t.attr("id",r.baseId+e.value+"_dest_select"),n.displayedOptions=s.filterDest(e.value),c.append(t),s.destSelectElements.push(t),s.destSelectMap[e.value]=t,
s.destSelectElements.length===r.categoryOptions&&u.removeClass("ng-hide")})})}}}function r(e,n,r){function i(){n.find(".categorized-select-dest option").add(n.find(".categorized-select-source option")).add(n.find(".multi-select-alternate option")).filter(":selected").removeAttr("selected");
}function a(){return o.destSelectMap[e.selected.category.value]}var o=this,s=r.localeComparator(function(e){return e.label});e.selected={sourceOptions:[],
destOptions:[],altOptions:[],category:e.categoryOptions[0]},this.onCategoryChange=function(){var e=a();e&&(e.removeClass("ng-hide"),t(o.destSelectElements).without(e).forEach(function(e){
e.addClass("ng-hide")}).value())},e.onDestToSource=function(){var n,r=a().scope(),u=t.pluck(r.selectedDestOptions,"value"),l=o.destToSource(u);if(l!==!1){
if(u.length===r.displayedOptions.length&&0===e.sourceOptions.length){var c=r.displayedOptions;r.displayedOptions=e.sourceOptions,e.sourceOptions=c}else n=t.remove(r.displayedOptions,function(e){
return t.contains(u,e.value)}),e.sourceOptions=e.sourceOptions.concat(n).sort(o.customSort||s);t.defer(i)}},e.onSourceToDest=function(){var n,r=t.pluck(e.selected.sourceOptions,"value"),u=o.sourceToDest(r,e.selected.category.value),l=a().scope();
if(u!==!1){if(r.length===e.sourceOptions.length&&0===l.displayedOptions.length){var c=l.displayedOptions;l.displayedOptions=e.sourceOptions,e.sourceOptions=c;
}else n=t.remove(e.sourceOptions,function(e){return t.contains(r,e.value)}),l.displayedOptions=l.displayedOptions.concat(n).sort(o.customSort||s);t.defer(i);
}},e.onAltToSource=function(){var n,r=t.pluck(e.selected.altOptions,"value"),a=o.altToSource(r);if(a!==!1){if(r.length===e.altOptions.length&&0===e.sourceOptions.length){
var u=e.altOptions;e.altOptions=e.sourceOptions,e.sourceOptions=u}else n=t.remove(e.altOptions,function(e){return t.contains(r,e.value)}),e.sourceOptions=e.sourceOptions.concat(n).sort(o.customSort||s);
t.defer(i)}},e.onSourceToAlt=function(){var n,r=t.pluck(e.selected.sourceOptions,"value"),a=o.sourceToAlt(r);if(a!==!1){if(r.length===e.sourceOptions.length&&0===e.altOptions.length){
var u=e.altOptions;e.altOptions=e.sourceOptions,e.sourceOptions=u}else n=t.remove(e.sourceOptions,function(e){return t.contains(r,e.value)}),e.altOptions=e.altOptions.concat(n).sort(o.customSort||s);
t.defer(i)}}}n.$inject=["$compile"],r.$inject=["$scope","$element","Util"];var i;return i='<select class="categorized-select-dest ng-hide" multiple="multiple" size="10" ng-model="selectedDestOptions" ng-options="item.label for item in displayedOptions" ng-disabled="disabled" ></select> ',
{bgCategorizedSelect:n}}),define("text",["module"],function(e){"use strict";var t,n,r,i,a,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],s=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,u=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,l="undefined"!=typeof location&&location.href,c=l&&location.protocol&&location.protocol.replace(/\:/,""),d=l&&location.hostname,f=l&&(location.port||void 0),p={},m=e.config&&e.config()||{};
return t={version:"2.0.12",strip:function(e){if(e){e=e.replace(s,"");var t=e.match(u);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029");
},createXhr:m.createXhr||function(){var e,t,n;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;t<3;t+=1){
n=o[t];try{e=new ActiveXObject(n)}catch(e){}if(e){o=[n];break}}return e},parseName:function(e){var t,n,r,i=!1,a=e.indexOf("."),o=0===e.indexOf("./")||0===e.indexOf("../");
return a!==-1&&(!o||a>1)?(t=e.substring(0,a),n=e.substring(a+1,e.length)):t=e,r=n||t,a=r.indexOf("!"),a!==-1&&(i="strip"===r.substring(a+1),r=r.substring(0,a),
n?n=r:t=r),{moduleName:t,ext:n,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,r,i){var a,o,s,u=t.xdRegExp.exec(e);return!u||(a=u[2],
o=u[3],o=o.split(":"),s=o[1],o=o[0],!(a&&a!==n||o&&o.toLowerCase()!==r.toLowerCase()||(s||o)&&s!==i))},finishLoad:function(e,n,r,i){r=n?t.strip(r):r,m.isBuild&&(p[e]=r),
i(r)},load:function(e,n,r,i){if(i&&i.isBuild&&!i.inlineText)return void r();m.isBuild=i&&i.isBuild;var a=t.parseName(e),o=a.moduleName+(a.ext?"."+a.ext:""),s=n.toUrl(o),u=m.useXhr||t.useXhr;
return 0===s.indexOf("empty:")?void r():void(!l||u(s,c,d,f)?t.get(s,function(n){t.finishLoad(e,a.strip,n,r)},function(e){r.error&&r.error(e)}):n([o],function(e){
t.finishLoad(a.moduleName+"."+a.ext,a.strip,e,r)}))},write:function(e,n,r,i){if(p.hasOwnProperty(n)){var a=t.jsEscape(p[n]);r.asModule(e+"!"+n,"define(function () { return '"+a+"';});\n");
}},writeFile:function(e,n,r,i,a){var o=t.parseName(n),s=o.ext?"."+o.ext:"",u=o.moduleName+s,l=r.toUrl(o.moduleName+s)+".js";t.load(u,r,function(n){var r=function(e){
return i(l,e)};r.asModule=function(e,t){return i.asModule(e,l,t)},t.write(e,u,r,a)},a)}},"node"===m.env||!m.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]?(n=require.nodeRequire("fs"),
t.get=function(e,t,r){try{var i=n.readFileSync(e,"utf8");0===i.indexOf("\ufeff")&&(i=i.substring(1)),t(i)}catch(e){r&&r(e)}}):"xhr"===m.env||!m.env&&t.createXhr()?t.get=function(e,n,r,i){
var a,o=t.createXhr();if(o.open("GET",e,!0),i)for(a in i)i.hasOwnProperty(a)&&o.setRequestHeader(a.toLowerCase(),i[a]);m.onXhr&&m.onXhr(o,e),o.onreadystatechange=function(t){
var i,a;4===o.readyState&&(i=o.status||0,i>399&&i<600?(a=new Error(e+" HTTP status: "+i),a.xhr=o,r&&r(a)):n(o.responseText),m.onXhrComplete&&m.onXhrComplete(o,e));
},o.send(null)}:"rhino"===m.env||!m.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?t.get=function(e,t){var n,r,i="utf-8",a=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(a),i)),u="";
try{for(n=new java.lang.StringBuffer,r=s.readLine(),r&&r.length()&&65279===r.charAt(0)&&(r=r.substring(1)),null!==r&&n.append(r);null!==(r=s.readLine());)n.append(o),
n.append(r);u=String(n.toString())}finally{s.close()}t(u)}:("xpconnect"===m.env||!m.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(r=Components.classes,
i=Components.interfaces,Components.utils.import("resource://gre/modules/FileUtils.jsm"),a="@mozilla.org/windows-registry-key;1"in r,t.get=function(e,t){
var n,o,s,u={};a&&(e=e.replace(/\//g,"\\")),s=new FileUtils.File(e);try{n=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),
n.init(s,1,0,!1),o=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),o.init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
o.readString(n.available(),u),o.close(),n.close(),t(u.value)}catch(e){throw new Error((s&&s.path||"")+": "+e)}}),t}),define("misc/CertificateDirective",["util/CSSRequire","text!/app/js/admin/misc/certificate_directive.css"],function(e){
"use strict";function t(){return{replace:!0,restrict:"A",scope:{info:"=bgCertificate"},templateUrl:"/app/js/admin/misc/certificate_directive.html"}}return e("/app/js/admin/misc/certificate_directive.css"),
{bgCertificate:t}}),define("util/ClickToCopyTextComponent",["jquery","lodash","util/CSSRequire","text!util/click-to-copy-text.css"],function(e,t,n){"use strict";
return n("/app/js/util/click-to-copy-text.css"),{bindings:{value:"<",id:"@"},template:'<div title="{{ctrl.tooltip}}"><span class="text-container"><span class="copyable" id="{{ctrl.id}}-text">{{ctrl.value}}</span><span class="copied-message">{{ctrl.trCopied}}</span></span></div>',
controllerAs:"ctrl",controller:["$scope","$element","$attrs","TR",function(e,n,r,i){function a(e){e.originalEvent.preventDefault(),e.originalEvent.stopPropagation();
var t=window.getSelection(),n=document.createRange();if(n.selectNodeContents(u),t.removeAllRanges(),t.addRange(n),document.execCommand){var r=document.execCommand("copy");
r&&(t.removeAllRanges(),f.addClass("fade-out-in").on("animationend",function(){f.removeClass("fade-out-in")}),d.text(u.textContent.length>m.length?m:h),
p.addClass("fade-in-out").on("animationend",function(){p.removeClass("fade-in-out")}))}}var o=this,s=n.find(".copyable"),u=s.get(0),l=n.find("svg.copy-icon"),c=n.find("svg.check-icon"),d=n.find(".copied-message"),f=l.add(u),p=c.add(d),m=i("Copied to clipboard"),h=i("Copied");
document.execCommand?o.tooltip=i("Click to copy"):o.tooltip=i("Click to select"),n.on("click",t.throttle(a,1500))}]}}),define("util/CollapsibleDirective",["angular"],function(e){
"use strict";function t(t){var n,r,i;return n=".toggle",r="clickable",i="open",{restrict:"C",scope:{targets:"@?"},require:"?ngModel",link:function(a,o,s,u){
function l(a){f=a?0===a.indexOf("self ")?function(){return o.find(a.substr(5))}:function(){return e.element(a)}:function(){return c.nextAll(c[0].tagName);
},f().addClass("bg-collapsible-element"),d=o.find(n),c.on("click.collapsible",function(){d.toggleClass(i);var e=f().toggle().is(":visible");u&&t.$apply(function(){
u.$setViewValue(e)})}).addClass(r),f().toggle(d.hasClass(i))}var c,d,f;c=o,u?u.$render=function(){l(s.targets),f&&(u.$viewValue?(d.addClass(i),f().show()):(d.removeClass(i),
f().hide()))}:e.isDefined(s.targets)?s.$observe("targets",l):l()}}}return t.$inject=["$rootScope"],{bgCollapsible:t}}),define("misc/ConfigValueDirective",["angular"],function(e){
"use strict";function t(){var e='<div>    <span ng-transclude></span>    <button ng-if="saveButtonNeeded" id="{{ resource.variable }}-save"        ng-click="save()" ng-disabled="saveButtonDisabled()" bg-tr>Save</button>    <bg-activity-indicator class="inline" waiting="saving" message="false"></bg-activity-indicator>    <span class="error" bg-error-list="errors" id="{{ resource.variable }}-error"></span></div>';
return{replace:!0,restrict:"A",scope:{resource:"=bgConfigValue"},transclude:!0,controller:n,template:e,link:function(e,t,n,r){var i=t.children("[ng-transclude]");
r.setInputElements(i.find(":input")),r.startWatching(),e.saving=!1}}}function n(t,n,r,i){function a(){h=y?t.$watch("resource.value",d):t.$watch("resource.value",c);
}function o(){h()}function s(){var e=g.get(0);return"text"===e.type||"textarea"===e.tagName.toLowerCase()||"password"===e.type}function u(e){var n=g.prop("disabled");
n||g.prop("disabled",!0),t.saving=!0,p(),t.errors=[],t.resource.put().then(function(){_=t.resource.value,t.saving=!1}).catch(function(n){t.saving=!1,t.errors=[l(n)],
y||(o(),t.resource.value=e,a()),r.error(n)}).finally(function(){n||g.prop("disabled",!1),m()})}function l(t){var n=null;return t.data&&(t=t.data),n=e.isString(t.message)?t.message:i("An unknown error occurred.");
}function c(t,n){e.isUndefined(n)||t===n||u(n)}function d(n,r){n!==r&&(e.isUndefined(r)?_=n:t.errors=[])}function f(){return t.resource&&_!==t.resource.value;
}function p(){v.removeClass("ng-hide")}function m(){v.addClass("ng-hide")}var h,_,g,v,y;t.errors=[],t.save=function(){u(_)},t.saveButtonDisabled=function(){
return!f()||t.saving||g.prop("disabled")},this.setInputElements=function(e){t.resource&&(_=t.resource.value),g=e,y=t.saveButtonNeeded=s()},this.startWatching=a,
v=n.children(".activity-indicator")}return n.$inject=["$scope","$element","$log","TR"],{bgConfigValue:t}}),define("util/DatePickerDirective",["angular","lodash","moment"],function(e,t,n){
"use strict";function r(r,o,c){return u||(u=t.map(r.getMonthNames(),function(e,t){return{value:t,label:e}})),l||a(),{replace:!1,restrict:"AE",scope:{isDisabled:"=?ngDisabled",
id:"@?"},require:"ngModel",compile:function(){var t=o(l);return function(a,o,l,d){function f(e){if(null===e.year||null===e.month||null===e.day)return null;
var t;t=d.$modelValue?"moment"===e.modelFormat?d.$modelValue:n.utc(1e3*d.$modelValue):n.utc();var i=t.clone().utcOffset(r.timezoneOffsetMinutes).year(e.year).month(e.month).date(e.day).utc();
return"moment"===e.modelFormat?i:i.unix()}function p(t){var i,a;if(t){if(n.isMoment(t)){if(0!==t.utcOffset())return void c.error("Invalid timezone for bg-date-picker.");
i=t.clone(),i.utcOffset(r.timezoneOffsetMinutes),a="moment"}else e.isNumber(t)&&(i=n.utc(1e3*t).utcOffset(r.timezoneOffsetMinutes),a="unix");return{year:i.year(),
month:i.month(),day:i.date(),modelFormat:a}}return{year:null,month:null,day:null,modelFormat:null}}a.yearOptions=s,a.trMonthOptions=u,a.dayOptionsFor=i,
a.dateObj={},d.$formatters.push(p),d.$render=function(){a.dateObj=d.$viewValue,a.dayOptions=i(a.dateObj.year,a.dateObj.month)},d.$parsers.push(f),a.$watchCollection("dateObj",function(){
d.$setViewValue(e.copy(a.dateObj)),a.dayOptions=i(a.dateObj.year,a.dateObj.month)}),t(a,function(e){o.append(e)})}}}}function i(e,r){var i=t.range(1,n({
year:e,month:r}).daysInMonth()+1);return t.map(i,function(e){return{label:e,value:e}})}function a(){var r={};if(r.M='<select\tclass="bg-date-picker-month"\tng-model="dateObj.month"\tng-options="item.value as item.label for item in trMonthOptions"\tng-disabled="isDisabled"></select>',
r.D='<select\tclass="bg-date-picker-day"\tng-model="dateObj.day"\tng-options="day.value as day.label for day in dayOptions"\tng-disabled="isDisabled"></select>',
r.Y='<select\tclass="bg-date-picker-year"\tng-model="dateObj.year"\tng-options="year for year in yearOptions"\tng-disabled="isDisabled"></select>',e.isDefined(n.localeData()._longDateFormat)&&e.isDefined(n.localeData()._longDateFormat.L)){
var i=n.localeData()._longDateFormat.L.toUpperCase();l=t([i.indexOf("M"),i.indexOf("D"),i.indexOf("Y")]).map(function(e,t){return{index:e,prop:c[t]}}).sortBy("index").pluck("prop").map(function(e){
return r[e]}).reduce(function(e,t){return e+t})}else l=[r.M,r.D,r.Y].join()}r.$inject=["nls","$compile","$log"];var o,s,u,l;o=n().year(),s=t.range(o,o+21);
var c=["M","D","Y"];return{bgDatePicker:r}}),define("util/DateTimePickerDirective",["angular","lodash","moment"],function(e,t,n){"use strict";function r(t,r){
return a||i(),{replace:!1,restrict:"AE",scope:{isDisabled:"=?ngDisabled",id:"@?",minuteInterval:"=?",dateLabel:"@?",timeLabel:"@?"},require:"ngModel",compile:function(){
var i=t(a);return function(t,a,o,s){function u(e){if(null===e.date||null===e.time)return null;var t;t=s.$modelValue?"moment"===e.modelFormat?s.$modelValue:n.utc(1e3*s.$modelValue):n.utc();
var r=t.clone().year(e.date.year()).month(e.date.month()).date(e.date.date()).hour(e.time.hour()).minute(e.time.minute()).second(e.time.second());return"moment"===e.modelFormat?r:r.unix();
}function l(t){var r,i;return t?(n.isMoment(t)?(r=t,i="moment"):e.isNumber(t)&&(r=n.utc(1e3*t),i="unix"),{date:r,time:r.clone(),modelFormat:i}):{date:null,
time:null,modelFormat:null}}t.dateTimeObj={},e.isDefined(o.dateLabel)&&(t.dateLabelText=r("Date:")),e.isDefined(o.timeLabel)&&(t.timeLabelText=r("Time:")),
s.$formatters.push(l),s.$render=function(){t.dateTimeObj=s.$viewValue},s.$parsers.push(u),t.$watchCollection("dateTimeObj",function(){s.$setViewValue(e.copy(t.dateTimeObj));
}),i(t,function(e){a.append(e)})}}}}function i(){var t,r,i,o;o={},o.DATE='<span\tclass="bg-date-picker-label"\tng-if="dateLabelText"\tng-bind="dateLabelText"\tng-class="{disabled: isDisabled}"></span>&nbsp;<bg-date-picker\tng-model="dateTimeObj.date"\tng-disabled="isDisabled"></bg-date-picker>',
o.TIME='<span\tclass="bg-time-picker-label"\tng-if="timeLabelText"\tng-bind="timeLabelText"\tng-class="{disabled: isDisabled}"></span>&nbsp;<bg-time-picker\tng-model="dateTimeObj.time"\tng-disabled="isDisabled"\tminute-interval="minuteInterval"></bg-time-picker>',
e.isDefined(n.localeData()._longDateFormat)&&e.isDefined(n.localeData()._longDateFormat.LLLL)&&(t=n.localeData()._longDateFormat.LLLL.toUpperCase(),r=t.indexOf("Y"),
i=t.indexOf("LT"),r>-1&&i>-1&&r>i&&(a=o.TIME+o.DATE)),a||(a=o.DATE+o.TIME)}r.$inject=["$compile","TR"];var a;return{bgDateTimePicker:r}}),define("lib/angular-ui/dropdown",[],function(){
"use strict";return{dropdownToggle:["$document","$location",function(e,t){var n=null,r=angular.noop;return{restrict:"CA",link:function(t,i,a){t.$watch("$location.path",function(){
r()}),i.parent().bind("click",function(){r()}),i.bind("click",function(t){var a=i===n;t.preventDefault(),t.stopPropagation(),n&&r(),a||i.hasClass("disabled")||i.prop("disabled")||(i.parent().addClass("open"),
n=i,r=function(t){t&&(t.preventDefault(),t.stopPropagation()),e.unbind("click",r),i.parent().removeClass("open"),r=angular.noop,n=null},e.bind("click",r));
})}}}]}}),define("util/ErrorListDirective",["angular"],function(e){"use strict";return{bgErrorList:["$window",function(t){return{replace:!1,restrict:"A",
scope:{errors:"=bgErrorList",scroll:"@?"},template:'<span ng-if="errors.length == 1">{{ errors[0] }}</span><ul ng-if="errors.length > 1"><li ng-repeat="error in errors">{{ error }}</li></ul>',
link:function(n,r,i,a){n.$watch("errors",function(n,a){if(e.isArray(n)&&n.length>0){r.show();var o=e.element("bg-error-list:visible, [bg-error-list]:visible").first();
o.length&&"false"!==i.scroll&&e.element(t).scrollTop(o.offset().top-parseInt(o.css("marginTop"),10))}else r.hide()})}}}]}}),define("util/HideNextDirective",["angular"],function(e){
"use strict";function t(t,n,r,i){return{restrict:"AC",scope:{hideText:"@",showText:"@",startVisible:"@",cookie:"@",loadedStart:"@loaded",url:"@",key:"@",
val:"@",animate:"@"},transclude:!0,template:'<bg-activity-indicator waiting="loadPromise" message="false"><span class="arrow">&nbsp;</span><div ng-transclude></div></bg-activity-indicator>',
link:function(t,n,r){e.isDefined(r.arrow)||n.find("> bg-activity-indicator > .bg-transclude > .arrow").remove(),n.find(".arrow").length&&n.addClass("custom-arrow"),
t.loadPromise=!1},controller:["$scope","$element","$attrs",function(a,o,s){function u(e){a.cookie&&i(function(){r.put(a.cookie,e)})}function l(){p&&o.find("> bg-activity-indicator > .bg-transclude > [ng-transclude]").text(p),
o.removeClass("bg-show-next"),d.hide(h),u("hide")}function c(){d.show(h),f&&o.find("> bg-activity-indicator > .bg-transclude > [ng-transclude]").text(f),
o.addClass("bg-show-next"),u("show")}var d,f,p,m,h;d=o.find("+ *"),e.isDefined(s.hideText)?s.$observe("hideText",function(e){f=e}):f=!1,e.isDefined(s.showText)?s.$observe("showText",function(e){
p=e}):p=!1,a.loaded=!e.isDefined(s.loaded)||!!parseInt(a.loadedStart,10),m=!e.isDefined(s.startVisible)||!!parseInt(a.startVisible,10),h=e.isDefined(s.animate)?"fast":void 0,
o.addClass("bg-hide-next-anchor"),o.on("click",function(e){var r,i;return a.loaded?d.is(":visible")?l():c():a.url&&(r=n.url().split("?")[0],i={},a.loadPromise=!0,
u("show"),i[a.key]=a.val,a.loadPromise=t.post(r+"/"+a.url,i).success(function(e){a.loaded=!0,d.html(e),c()}).error(function(){l()})),e.preventDefault(),
!1}),m&&"hide"!==r.get(a.cookie)?c():l()}]}}return t.$inject=["$http","$location","$cookies","$timeout"],{bgHideNext:t}}),define("util/LocalizableTextDirective",["angular","lodash"],function(e,t){
"use strict";function n(t,n,i,a){return{replace:!0,transclude:!1,restrict:"AE",scope:{multiline:"@",rows:"@",foreignKey:"@",stringName:"@",localizationUrlDisabled:"@",
isDisabled:"&ngDisabled"},controller:r,controllerAs:"ctrl",templateUrl:"/app/js/util/localizable_text.html",compile:function(){return function(r,o,s,u){
function l(e){r[u.lookupMode]=e,u.refreshString()}u.lookupMode=e.isDefined(s.stringName)?"stringName":"foreignKey",r.rows?r.rows=parseInt(r.rows,10):r.rows=0,
r.isFullNLSInterfaceLevel=function(){return n.fullNLSInterface},e.isDefined(s.bgLocalizableText)&&s.$observe("bgLocalizableText",l),e.isDefined(s.stringName)&&s.$observe("stringName",l),
e.isDefined(s.foreignKey)&&s.$observe("foreignKey",l);var c=!1;(e.isDefined(s.multiline)||r.rows>1)&&(r.multiline&&e.inArray(r.multiline,["False","false","No","no",!1])||(c=!0)),
r.multi=c,r.multi&&r.rows<1&&(r.rows=3),r.$watch("stringName",function(t){e.isDefined(t)&&(r.elementName=t,r.name=t,r.l10nSearchString=i.sn(encodeURIComponent(t)));
}),r.$watch("foreignKey",function(t){e.isDefined(t)&&(r.elementName=t,r.name=t.substr(t.lastIndexOf(":")+1),r.l10nSearchString=i.fk(encodeURIComponent(t)));
}),r.saveText=t("Save"),r.localizationLinkText=t("Localization Interface"),r.Features=a,u.startWatching()}}}}function r(n,r,i,a,o,s,u){function l(){o.cancel(h.successTimeout),
c(),n.querying=!0}function c(){n.errors=[],n.success=!1}function d(){_=n.$watch("selectedLanguage",p)}function f(){_()}function p(e,t){e!==t&&(m(e)||(f(),
n.selectedLanguage=t,d()))}function m(t){if(t=t||n.selectedLanguage,e.isDefined(t)&&""!==t&&(n.stringForm.$pristine||u.confirm(s("You haven't saved your data. Click OK to lose changes, click Cancel to abort.")))){
l();var r=function(){n.querying=!1,n.stringForm.$setPristine()};return n.stringName?n.string=i.stringForName({id:t,name:n.stringName},r):n.foreignKey&&(n.string=i.stringForKey({
id:t,key:n.foreignKey},r)),!0}return!1}var h=this,_=e.noop;n.errors=[],n.elementName="",n.selectedLanguage="",n.querying=!1,r.getList().then(function(e){
n.languages=e,n.selectedLanguage=t.find(n.languages,{code:a.preferredLocale}).id}),this.isDisabled=function(){return n.isDisabled()||n.querying},n.save=function(){
l();var e=n.string.tstr;i.save({id:n.string.id,lang:n.selectedLanguage,string_id:n.string.id,foreign_id:n.foreignKey,string:n.string.tstr},function(){n.querying=!1,
n.success=!0,h.successTimeout=o(function(){n.success=!1},3e3),n.stringForm.$setPristine(),""===e&&m(n.selectedLanguage)},function(t){""===e?(n.stringForm.$setPristine(),
m(n.selectedLanguage)):(n.querying=!1,t.data&&t.data.error?n.errors=[t.data.error]:n.errors=[s("There was an error saving the string.")])})},n.saveButtonDisabled=!0,
n.$watch("selectedLanguage && stringForm.$pristine",function(e){n.saveButtonDisabled=e}),this.startWatching=d,this.refreshString=m}return n.$inject=["TR","nls","searchPaths","Features"],
r.$inject=["$scope","Languages","LocalizedStrings","nls","$timeout","TR","$window"],{bgLocalizableText:n}}),define("util/LocalizationDropdownDirective",["angular","lodash"],function(e,t){
"use strict";function n(e){return{scope:{selectedLanguage:"=",defaultLanguage:"=?"},replace:!0,restrict:"E",controller:i,template:'<div bg-show-promise="languagesPromise" ng-show="displayLocalization()" class="bg-localization-dropdown"><label for="locale_list">'+e("Currently editing language")+':<select id="locale_list" ng-model="selectedLanguage.value" ng-options="language.code as language.name for language in languages"></select></label><br><span>&dagger; - '+e("Indicates that the input field may store content in multiple languages.")+"</span></div>"
}}function r(){return{restrict:"C",link:function(e,t){t.after(o.clone()),e.$watch(a,function(e){e?t.addClass("with-languages"):t.removeClass("with-languages");
})}}}function i(e,n,r){e.defaultLanguage={value:null},e.languagesPromise=n.getList().then(function(n){e.languages=n,t(e.languages).pluck("code").contains(r.get("locale"))?e.defaultLanguage.value=r.get("locale"):e.defaultLanguage.value=t.find(e.languages,"is_default").code,
e.selectedLanguage.value=e.defaultLanguage.value}),e.displayLocalization=function(){return t.isArray(e.languages)&&e.languages.length>1},a=e.displayLocalization;
}n.$inject=["TR"],i.$inject=["$scope","Languages","$cookies"];var a,o;return o=e.element("<span/>").addClass("localizable-element-decoration").append("â€ "),
{bgLocalizationDropdown:n,bgLocalizableElement:r}}),define("util/MultiSelectDirective",["angular","lodash"],function(e,t){"use strict";function n(){function e(){}
return{replace:!0,restrict:"A",scope:{destLabel:"@",sourceLabel:"@",altLabel:"@",sourceOptions:"=",destOptions:"=",altOptions:"=?",sourceToDest:"&",destToSource:"&",
sourceToAlt:"&",altToSource:"&",customSort:"&sort",disabled:"=?ngDisabled"},templateUrl:"/app/js/util/multi_select.html",controller:r,link:function(t,n,r,i){
t.baseId=r.id,i.sourceToDest=t.sourceToDest()||e,i.destToSource=t.destToSource()||e,t.altOptions?(i.sourceToAlt=t.sourceToAlt()||e,i.altToSource=t.altToSource()||e,
t.altSelect=!0):t.altSelect=!1,t.customSort&&(i.customSort=t.customSort()||r.sort,t.manualSort="manual"===i.customSort)}}}function r(e,n,r){function i(){
n.find(".multi-select-dest option").add(n.find(".multi-select-source option")).add(n.find(".multi-select-alternate option")).filter(":selected").removeAttr("selected");
}var a=this,o=r.localeComparator(function(e){return e.label});e.selected={sourceOptions:[],destOptions:[],altOptions:[]},e.onDestToSource=function(){var n,r,s;
if(n=t.pluck(e.selected.destOptions,"value"),r=a.destToSource(n),r!==!1){if(n.length===e.destOptions.length&&0===e.sourceOptions.length){var u=e.destOptions;
e.destOptions=e.sourceOptions,e.sourceOptions=u}else s=t.remove(e.destOptions,function(e){return t.contains(n,e.value)}),e.sourceOptions=e.sourceOptions.concat(s).sort(a.customSort||o);
t.defer(i)}},e.onSourceToDest=function(){var n,r,s;if(n=t.pluck(e.selected.sourceOptions,"value"),r=a.sourceToDest(n),r!==!1){if(n.length===e.sourceOptions.length&&0===e.destOptions.length){
var u=e.destOptions;e.destOptions=e.sourceOptions,e.sourceOptions=u}else s=t.remove(e.sourceOptions,function(e){return t.contains(n,e.value)}),e.manualSort?e.destOptions=e.destOptions.concat(s):e.destOptions=e.destOptions.concat(s).sort(a.customSort||o);
t.defer(i)}},e.onAltToSource=function(){var n,r,s;if(n=t.pluck(e.selected.altOptions,"value"),r=a.altToSource(n),r!==!1){if(n.length===e.altOptions.length&&0===e.sourceOptions.length){
var u=e.altOptions;e.altOptions=e.sourceOptions,e.sourceOptions=u}else s=t.remove(e.altOptions,function(e){return t.contains(n,e.value)}),e.sourceOptions=e.sourceOptions.concat(s).sort(a.customSort||o);
t.defer(i)}},e.onSourceToAlt=function(){var n,r,s;if(n=t.pluck(e.selected.sourceOptions,"value"),r=a.sourceToAlt(n),r!==!1){if(n.length===e.sourceOptions.length&&0===e.altOptions.length){
var u=e.altOptions;e.altOptions=e.sourceOptions,e.sourceOptions=u}else s=t.remove(e.sourceOptions,function(e){return t.contains(n,e.value)}),e.altOptions=e.altOptions.concat(s).sort(a.customSort||o);
t.defer(i)}},e.onDestMoveUp=function(){var t,n,r;r=e.selected.destOptions[0],t=e.destOptions.indexOf(r),n=t-1,t!==-1&&(n<0&&(n=0),e.destOptions.splice(t,1),
e.destOptions.splice(n,0,r))},e.onDestMoveDown=function(){var t,n,r;r=e.selected.destOptions[0],t=e.destOptions.indexOf(r),n=t+1,t!==-1&&(n>=e.destOptions.length&&(n=e.destOptions.length),
e.destOptions.splice(t,1),e.destOptions.splice(n,0,r))},e.reorderDisabled=function(){return 1!==e.selected.destOptions.length||e.destOptions.length<2}}
return r.$inject=["$scope","$element","Util"],{bgMultiSelect:n}}),define("util/MaxLengthDirective",[],function(){"use strict";return{maxlength:function(){
return{restrict:"A",require:"ngModel",link:function(e,t,n,r){var i=parseInt(n.maxlength,10);r.$parsers.push(function(e){return e.length>i&&(e=e.substr(0,i),
r.$setViewValue(e),r.$render()),e})}}}}}),define("misc/OptionsClassDirective",["angular","lodash"],function(e,t){"use strict";function n(e){return{require:"select",
link:function(n,r,i){var a,o;a=i.ngOptions.split(" ").pop(),o=e(i.bgOptionsClass),n.$watch(a,function(e){t.forEach(e,function(e,n){var i={add:[],remove:[]
};t.transform(o(e),function(e,t,n){t?e.add.push(n):e.remove.push(n)},i),r.find("option[value="+n+"]").addClass(i.add.join(" ")).removeClass(i.remove.join(" "));
})})}}}return n.$inject=["$parse"],{bgOptionsClass:n}}),define("util/PaginationDirective",["angular","lodash"],function(e,t){"use strict";function n(n){
return{restrict:"A",scope:{params:"=bgPagination",onPageLinkClicked:"&?",eventContext:"@?context",disabled:"=?ngDisabled"},replace:!0,templateUrl:"/app/js/util/pagination.html",
link:function(r,i){function a(e){r.lotsOfPages()?r.displayPages=r.pages.slice(Math.max(1,Math.min(e-5,r.params.lastPage-10)),Math.max(10,Math.min(e+4,r.params.lastPage-1))):r.displayPages=r.pages;
}var o,s;o=["bg","pagination"],r.eventContext?o.push(r.eventContext):(s=i.closest("[ng-controller]").attr("ng-controller"),s&&o.push(s)),o.push("linkClicked"),
o=o.join("."),r.$watch("params.lastPage",function(n,i){!e.isDefined(n)||n===i&&r.pages||(r.pages=t.times(r.params.lastPage,function(e){return{number:e+1,
isCurrent:e+1===r.params.currentPage}}),a(r.params.currentPage))}),r.$watch("params.currentPage",function(n,i){e.isDefined(n)&&n!==i&&r.pages&&r.pages.length&&(t.find(r.pages,"isCurrent").isCurrent=!1,
t.find(r.pages,{number:n}).isCurrent=!0,a(n))}),r.havePages=function(){return r.params.total>r.params.perPage},r.notOnFirstPage=function(){return 1!==r.params.currentPage;
},r.notOnLastPage=function(){return r.params.currentPage!==r.params.lastPage},r.lotsOfPages=function(){return r.params.lastPage>20},r.leadingEllipsisVisible=function(){
return r.lotsOfPages()&&r.params.currentPage>6},r.trailingEllipsisVisible=function(){return r.lotsOfPages()&&r.params.currentPage<r.params.lastPage-5},
r.goToPage=function(t,i){if(!r.disabled&&r.params.currentPage!==i){var a=e.extend({},r.params,{currentPage:i});r.onPageLinkClicked&&r.onPageLinkClicked(a),
n.$broadcast(o,a)}}}}}return n.$inject=["$rootScope"],{bgPagination:n}}),define("util/PasswordConfirmationDirective",["angular"],function(e){"use strict";
function t(t){return{require:"ngModel",link:function(n,r,i,a){function o(){n.$apply(s)}function s(){var e=r.val()===l.val();a.$setValidity("passwordMismatch",e);
}var u="#"+i.bgPasswordConfirm,l=e.element("input"+u);return 0===l.length?void t.error('Unable to find an input element with an "id" of '+u):void r.add(l).on("keyup",o);
}}}return t.$inject=["$log"],{bgPasswordConfirm:t}}),define("misc/PublicSiteSelectDirective",[],function(){"use strict";function e(e){return{restrict:"AE",
scope:{selection:"=bgPublicSiteSelect"},templateUrl:"/app/js/admin/misc/public_site_select.html",link:function(t){t.publicSites=e.getList({only:"id,name"
}).$object}}}return e.$inject=["PublicSite"],{bgPublicSiteSelect:e}}),define("misc/RadioGroupSettingDirective",["angular"],function(e){"use strict";function t(){
return{scope:{setting:"=bgSettingRadioGroup"},restrict:"A",template:'<label     class="radio"     ng-repeat="option in setting.options"     ng-class="{ disabled: setting.disabled() || option.disabled() }"    ng-if="!option.hidden()">    <input        type="radio"        ng-value="option.value"        ng-disabled="setting.disabled() || option.disabled()"        ng-model="setting.value"        id="{{settingIdPrefix}}{{setting.name}}-{{$index}}"        name="{{settingIdPrefix}}{{setting.name}}"    >{{option.label}}</label>',
controller:["$scope",function(t){for(var n=t;n.$parent;)if(n=n.$parent,e.isDefined(n.settingIdPrefix)){t.settingIdPrefix=n.settingIdPrefix;break}}]}}return{
bgSettingRadioGroup:t}}),define("misc/SettingDirective",["angular","lodash"],function(e,t){"use strict";function n(t,n){return{scope:{setting:"=bgSetting"
},restrict:"A",compile:function(a){var o,s;return s=e.element("<div/>"),o=a.children().remove(),s.append(o),function(a,o,u){var l=e.isDefined(u.bgSettingUseClasses),c=r(a);
if(e.isUndefined(a.setting))return void n.error("bgSetting: setting "+u.bgSetting+" is undefined");i(a.setting,s,l,c),a.$watch("setting.hidden()",function(e){
e?u.$addClass("ng-hide"):u.$removeClass("ng-hide")});var d=a.$parent.$new();d.setting=a.setting,a.$watch("setting",function(e,t){e!==t&&(d.setting=e)}),
t(s.children())(d,function(e){o.append(e)})}}}}function r(t){for(;t.$parent;)if(t=t.$parent,e.isDefined(t.settingIdPrefix))return t.settingIdPrefix;return"";
}function i(n,r,i,a){function o(e){w(e,M,$,L)}function s(e,t,n){var r={};t&&(0===t.has(n).length&&t.is("label")&&(r={for:e.name}),0===t.text().length&&t.text(e.getLabel()),
w(t,r,D))}function u(t,n){var r=e.element("<label></label>"),i=e.element('<input type="checkbox">');return r.text(t.getLabel()),r.prepend(i),n.prepend(r),
i}function l(e,t){var n=h(t)||u(e,t);o(n),s(e,v(t),n)}function c(e,t){var n=_(t);o(n),s(e,v(t),n)}function d(t,n){var r=e.element("<label></label>"),i=n.find("select").first();
return 0===i.length?i:(r.text(t.getLabel()),n.prepend(r),r.append(i),r)}function f(e,t){var n=t.find("select, input[type=radio]").first(),r=v(t)||d(e,t);
if(0===n.length){var i=t.find("[bg-setting-radio-group]");i.length?i.attr("bg-setting-radio-group","setting"):l(e,t)}else if("select"===n[0].tagName.toLowerCase()){
var a=y("select","bg-setting-control",t);o(a),w(a,{"ng-options":"item.value as item.label for item in setting.options"}),s(e,r,a)}else p(e,t)}function p(t,n){
var r=g(n);r.each(function(n,r){r=e.element(r),w(r,M,$,{id:a+t.name+"-"+n,name:a+t.name});var i=r.parent("label");1===i.length&&i.attr(D)})}function m(e,t){
var n=t.find("bg-date-picker, [bg-date-picker], .bg-date-picker").first();w(n,M,$),s(e,v(t),n)}function h(e){return y("input[type=checkbox]","bg-setting-control",e);
}function _(e){return y(["input[type=text]","textarea"],"bg-setting-control",e)}function g(e){var t=e.find("input[type=radio].bg-setting-control");return 0===t.length&&(t=e.find("input[type=radio]")),
t}function v(e){return i?e.find(".bg-setting-label").first():b("label",e)}function y(n,r,a){var o,s;return o=null,n?o=e.isArray(n)?i?t.map(n,function(e){
return e+"."+r}).join(", "):n.join(", "):i?n+(r?"."+r:""):n:i&&r&&(o="."+r),o?(s=a.find(o).first(),0===s.length&&n?b(n,a):s):null}function b(t,n){e.isArray(t)&&(t=t.join(", "));
var r=n.find(t).first();return 0===r.length?null:r}function w(n){var r,i,a;r=n[0],i=t.toArray(arguments).slice(1),i.unshift({}),a=e.extend.apply(e,i),t(a).keys().filter(function(e){
return!r.hasAttribute(e)}).forEach(function(e){n.attr(e,a[e])}).value()}var M,D,$,L;switch(M={"ng-disabled":"setting.disabled()"},D={"ng-class":"{ disabled: setting.disabled() }"
},$={"ng-model":"setting.value"},L={id:a+n.name,name:a+n.name},n.type){case"boolean":l(n,r);break;case"selectable":f(n,r);break;case"text":c(n,r);break;
case"timestamp":m(n,r)}}return n.$inject=["$compile","$log"],{bgSetting:n}}),define("util/ShowHideDebouncedDirectives",["angular","lodash"],function(e,t){
"use strict";function n(e,t){e.removeClass(t,"ng-hide")}function r(e,t){e.addClass(t,"ng-hide")}function i(e,n,r){o[e]=["$animate","$log",function(i,o){
return function(s,u,l){function c(e){9!==e.keyCode&&16!==e.keyCode&&d()}function d(){s.$apply(function(){r(i,u)}),m()}function f(){t.defer(function(){0===y.filter(":focus").length&&p();
})}function p(){s.$eval(l[e])&&s.$apply(function(){n(i,u)})}var m,h,_,g,v,y;h=e+"Input",_=e+"Model",g=e+"Delay",v=l.hasOwnProperty(g)?parseInt(s.$eval(l[g]),10):a,
m=t.debounce(p,v||a),l.hasOwnProperty(h)?(y=u.closest("[ng-controller]").find(l[h]),y.on("keyup",c).on("paste cut",d).on("blur",f).on("$destroy",function(){
y.off("keyup paste cut",d)})):l.hasOwnProperty(_)?s.$watch(l[_],d):o.error("bg-show-debounced must be accompanied by either a bg-show-debounced-input or bg-show-debounced-model",u),
s.$watch(l[e],function(e){e||r(i,u)})}}]}var a=2e3,o={};return i("bgShowDebounced",n,r),i("bgHideDebounced",r,n),o}),define("util/ShowHidePromiseDirectives",["angular"],function(e){
"use strict";function t(t,n,r){return["$animate",function(i){return function(a,o,s){var u,l,c;u=null,c=s.hasOwnProperty(t+"KeepWatching"),n(i,o),l=a.$watch(s[t],function(t){
e.isUndefined(t)||null===t||t===u||e.isFunction(t.finally)&&(u=t,c||l(),n(i,o),t.finally(function(){r(i,o)}))})}}]}return{bgShowPromise:t("bgShowPromise",function(e,t){
e.addClass(t,"ng-hide")},function(e,t){e.removeClass(t,"ng-hide")}),bgHidePromise:t("bgHidePromise",function(e,t){e.removeClass(t,"ng-hide")},function(e,t){
e.addClass(t,"ng-hide")})}}),define("util/StatusMessageDirective",["angular","lodash"],function(e,t){"use strict";return{bgStatusMessage:["StatusTypes","StatusMessageCache","$timeout","$filter","$window","$log",function(n,r,i,a,o,s){
return{scope:{customContext:"@bgStatusMessage",autoHide:"@?"},link:function(u,l,c){function d(){var t,n,r,i;return t=l.offset().top,n=e.element(o).scrollTop(),
r=e.element(o).height(),i=n+r,!(t>n&&t<i)}function f(){!M&&d()&&e.element(o).scrollTop(l.offset().top-parseInt(l.css("marginTop"),10))}function p(e,t){
c.$addClass("success"),c.$removeClass("error"),g(t,n.SUCCESS),e.handled=!0,f()}function m(e,t){c.$addClass("error"),c.$removeClass("success"),g(t,n.ERROR),
e.handled=!0,f()}function h(t){return e.isArray(t)&&t.length>0&&e.isString(t[0])}function _(){D&&i.cancel(D)}function g(r,o){if(_(),r?(c.$removeClass("ng-hide"),
o===n.SUCCESS&&w&&(D=i(v,w,!0))):c.$addClass("ng-hide"),e.isString(r))l.text(r);else if(h(r))if(1===r.length)l.text(r[0]);else{var u,d;u=e.element("<ul/>"),
d=t.map(r,function(t){return e.element("<li/>").text(t)}),u.append(d),l.empty().append(u)}else e.isObject(r)?l.text(a("json")(r)):s.error("Unexpected status message type: ",r);
}function v(){g("")}function y(){return l.closest("[ng-controller]").attr("ng-controller")}c.$addClass("ng-hide");var b,w,M,D;b=u.customContext||y(),M=e.isDefined(c.noScroll),
w=8e3,e.isDefined(c.autoHide)&&c.$observe("autoHide",function(e){"false"===e?w=!1:""!==e&&(w=1e3*parseInt(e,10),w=!t.isNaN(w)&&Math.max(0,w))}),b&&(u.$on(n.ERROR+"."+b,m),
u.$on(n.SUCCESS+"."+b,p),u.$on(n.CLEAR+"."+b,v)),u.$on(n.ERROR+"."+u.$parent.$id,m),u.$on(n.SUCCESS+"."+u.$parent.$id,p),u.$on(n.CLEAR+"."+u.$parent.$id,v),
u.$on(n.CLEAR_ALL,v),r.get(n.SUCCESS+"."+b)?(p({handled:!1},r.get(n.SUCCESS+"."+b)),r.remove(n.SUCCESS+"."+b)):r.get(n.ERROR+"."+b)&&(m({handled:!1},r.get(n.ERROR+"."+b)),
r.remove(n.ERROR+"."+b))}}}]}}),define("util/TableActivityIndicatorDirective",[],function(){"use strict";function e(){return{transclude:!0,scope:{promise:"=",
recordCount:"=",waitMessage:"=?",emptyMessage:"=",contentHidden:"&?"},restrict:"AE",template:'<div bg-activity-indicator="promise"     message="waitMessage"></div><div class="fading-show-hide bg-transclude"     ng-show="contentVisible()" ></div><p class="fading-show-hide"     ng-show="emptyMessageVisible()"     ng-bind="emptyMessage"></p>',
link:function(e,t,n,r,i){var a,o;o=t.children(".bg-transclude"),i(e.$parent,function(e){o.append(e)}),a=t.find("[bg-activity-indicator]").first().controller("bgActivityIndicator"),
n.hasOwnProperty("waitMessage")||(e.waitMessage=null),n.hasOwnProperty("contentHidden")||(e.contentHidden=function(e){return e.waiting||!e.recordCount}),
e.contentVisible=function(){return!e.contentHidden({waiting:a.isWaiting(),recordCount:e.recordCount})},e.emptyMessageVisible=function(){return e.emptyMessage&&!a.isWaiting()&&!e.recordCount;
}}}}return{bgTableActivityIndicator:e}}),define("util/TimePickerDirective",["angular","lodash","moment"],function(e,t,n){"use strict";function r(r,s){return{
replace:!1,restrict:"AE",scope:{isDisabled:"=?ngDisabled",minuteInterval:"=?",id:"@?"},require:"ngModel",template:o,compile:function(){return function(o,u,l,c){
function d(e){if(null===e.hour||null===e.minute)return null;var t;t=c.$modelValue?"moment"===e.modelFormat?c.$modelValue:n.utc(1e3*c.$modelValue):n.utc();
var i=t.clone().utcOffset(r.timezoneOffsetMinutes).hour(e.hour).minute(e.minute).second(e.second||0).utc();return"moment"===e.modelFormat?i:i.unix()}function f(t){
var i,a;if(t){if(n.isMoment(t)){if(0!==t.utcOffset())return void s.warn("Invalid timezone for bg-time-picker.");i=t.clone(),i.utcOffset(r.timezoneOffsetMinutes),
a="moment"}else e.isNumber(t)&&(i=n.utc(1e3*t).utcOffset(r.timezoneOffsetMinutes),a="unix");return i?(i.minute(i.minute()-i.minute()%o.minuteInterval),
{hour:i.hour(),minute:i.minute(),second:i.second(),modelFormat:a}):void s.error("bg-time-picker: Unexpected date format.")}return{hour:null,minute:null,
second:null,modelFormat:null}}o.hourOptions=i(),o.minuteInterval=parseInt(o.minuteInterval,10),o.minuteInterval=Math.min(60,Math.max(1,t.isNaN(o.minuteInterval)?1:o.minuteInterval)),
o.minuteOptions=a(o.minuteInterval),o.dateObj={},c.$formatters.push(f),c.$render=function(){o.dateObj=c.$viewValue},c.$parsers.push(d),o.$watchCollection("dateObj",function(){
c.$setViewValue(e.copy(o.dateObj))})}}}}r.$inject=["nls","$log"];var i,a,o,s="HH",u="mm";return i=t.memoize(function(){var e=n();return t.map(t.range(24),function(t){
return{label:e.hour(t).format(s),value:t}})}),a=t.memoize(function(e){var r=n(),i=t.range(0,60,e);return t.map(i,function(e){return{label:r.minute(e).format(u),
value:e}})}),o='<select\tclass="bg-time-picker-hour"\tng-model="dateObj.hour"\tng-options="item.value as item.label for item in hourOptions"\tng-disabled="isDisabled"></select><strong>:</strong><select\tclass="bg-time-picker-minute"\tng-model="dateObj.minute"\tng-options="item.value as item.label for item in minuteOptions"\tng-disabled="isDisabled"></select>',
{bgTimePicker:r}}),define("util/SortTableDirective",["angular"],function(e){"use strict";function t(t){return{restrict:"A",priority:1e3,terminal:!0,scope:!0,
compile:function(n,r){var i,a,o,s;if(i=n.find("tr[ng-repeat]"),a="",o=!1,"table"!==n[0].tagName.toLowerCase())throw new Error("bg-sort should only be applied to <table> elements.");
if(!i.length)throw new Error("bg-sort requires a <tr> with an ng-repeat directive in the table");return s=i.attr("ng-repeat").match(/\s*\|\s*orderBy(?::(.+?)(?::(.+?))?)?(?:\||$)/),
null!==s&&(a=s[1],o="true"===s[2],i.attr("ng-repeat",i.attr("ng-repeat").replace(/\|\s*orderBy.+?(\||$)/,"$1"))),n.removeAttr("bg-sort"),n.addClass("bg-sort"),
n.find('[bg-sort-by="'+a+'"]').addClass("sorted-by").toggleClass("reversed",o),function(n,r,s){n.sort={column:a,reverse:o},n.doSort=function(t){var r=e.element(t.target),i=r.attr("bg-sort-by");
n.sort.column===i?(n.sort.reverse=!n.sort.reverse,r.toggleClass("reversed")):(r.parent().find(".sorted-by").removeClass("sorted-by reversed"),r.addClass("sorted-by"),
n.sort.column=i,n.sort.reverse=!1)},r.find("tr[ng-repeat]").attr("ng-repeat",i.attr("ng-repeat")+" | orderBy:sort.column:sort.reverse"),r.find("th[bg-sort-by]").attr("ng-click","doSort($event)"),
t(r)(n)}}}}return t.$inject=["$compile"],{bgSort:t}}),define("util/ListComponent/ListComponentDataTypes",[],function(){return{link:"link",image:"image",
raw:"raw",action:"action"}}),define("util/ListComponent/ListComponentSortDirection",[],function(){return{ascending:"ascending",descending:"descending"};
}),define("util/ListComponent/ListComponent",["lodash","util/ListComponent/ListComponentDataTypes","util/ListComponent/ListComponentSortDirection","util/CSSRequire","text!util/ListComponent/list-component.css"],function(e,t,n,r){
"use strict";function i(r,i,a,o,s){function u(){g.onSelected({item:null}),g.currentlyEditing=null,g.saving=!1,g.newItem={label:""},e.rest(g.columns).forEach(function(t){
e.set(g.newItem,t.key,e.get(t,"default",e.get(e.find(t.values,"default"),"value")))})}function l(n,r){if(!e.has(b,[c(n),r.key])){var i=e.get(n,r.key);if(e.isFunction(r.transform))return void e.set(b,[c(n),r.key],r.transform(n));
if(r.values){var a=e.find(r.values,{value:i});if(a)return void e.set(b,[c(n),r.key],{label:a.label,type:t.raw})}return e.isBoolean(i)?void e.set(b,[c(n),r.key],{
label:i?v:y,type:t.raw}):void e.set(b,[c(n),r.key],{label:i,type:t.raw})}}function c(t,n){return t.__listHash&&!n||(t.__listHash=m.map(function(n){return e.get(t,n);
}).join("::")),t.__listHash}var d,f,p,m,h,_,g=this,v=i("Yes"),y=i("No"),b={},w={};g.filterPlaceholder=g.filterPlaceholder||i("Filterâ€¦"),g.searchPlaceholder=g.searchPlaceholder||i("Searchâ€¦"),
g.searchingTR=i("Searchingâ€¦"),g.onSelected=g.onSelected||e.noop,g.$onInit=function(){g.filterString="",g.dataType=t,g.searching=!1,g.itemsLoading=!1,g.openSearch=!1,
g.pagination={total:0,perPage:0,lastPage:0},g.prefix=g.prefix||"",g.showCheckbox=!!g.check,h=e.has(s,"hideDelete"),_=e.has(s,"searchAvailableItems"),m=(g.primaryColumn||"id").split(","),
g.addButtonLabel=g.addButtonLabel||i("Add"),g.addItemLabel=g.addItemLabel||i("Add Item"),g.filterItemsLabel=g.filterItemsLabel||i("Filter Items"),g.editLabel=g.editLabel||i("Edit"),
g.modifyLabel=g.modifyLabel||i("Modify"),g.deleteLabel=g.deleteLabel||i("Delete"),g.revertLabel=g.revertLabel||i("Revert"),g.restoreLabel=g.restoreLabel||i("Restore"),
g.filterButtonText=g.filterButtonText||!1,g.onSelected=g.onSelected||e.noop,u(),g.setSearchClearCallback&&g.setSearchClearCallback({callback:function(){
u()}}),g.setRefreshCallback&&g.setRefreshCallback({callback:function(e){g.refresh(e)}}),e.forEach(g.columns,function(e){e.options=e.options||e.values}),
g.hasItems=!!g.items,g.items=g.items||[],p=r.$watchCollection("ctrl.noSearchResults",function(){g.noSearchResults&&o(function(){g.noSearchResults=!1},2e3);
}),g.hasItems?(Object.defineProperty(g,"data",{get:function(){return g.items.data||g.items}}),f=r.$watchCollection("ctrl.items",function(){g.items.data&&(g.pagination=e.omit(g.items,"data")),
g.itemsLoading=!1,u()})):g.data=[]},g.$onDestroy=function(){b=null,f&&f(),p()},g.$onChanges=function(t){return t.searchResults?(g.openSearch=!1,void(d&&(d.resolve(t.searchResults.currentValue),
d=null,g.searching=!1))):(g.hasItems&&t.items&&t.items.currentValue&&t.items.currentValue.data&&(g.pagination=e.omit(t.items.currentValue,"data")),void u());
},g.canEditItems=function(){return e.find(g.columns,"editable")},g.canDeleteAnything=function(){return!h},g.showActionColumn=function(){return g.canEditItems()||g.canDeleteAnything();
},g.canEditItem=function(t){return!g.disabled&&g.canEditItems()&&e.get(t,"editable",!0)},g.canDeleteItem=function(e){return e.deletable},g.getTypesForItemInColumn=function(t,n){
l(t,n);var r=e.get(b[c(t)],n.key);return e.isArray(r)?r:[r]},g.isMultiLineItem=function(e,t){var n=g.getTypesForItemInColumn(e,t);return 0!==n.length&&!n[0].label;
},g.getHashKeyFor=c,g.showBottomLegend=function(){return g.pagination.perPage&&g.data.length>g.pagination.perPage/4},g.addNameColumn=function(){return e.find(g.columns,function(e){
return!e.virtual})},g.isAdding=function(){return g.data.filter(function(e){return e.added}).length>0},g.isModifying=function(){return g.data.filter(function(e){
return e.modified}).length>0},g.isDeleting=function(){return g.data.filter(function(e){return e.deleted}).length>0},g.getGetter=function(t,n){return function(r){
return 1===arguments.length?e.set(t,n,r):e.get(t,n)}},g.newItemGetter=function(t){var n=1===arguments.length?e.isObject(t)?g.newItem=t:g.newItem.label=t:g.newItem;
return _?n:(g.newItem.selected=0!==g.newItem.label.length,g.newItem.value=g.newItem.label,n.label)},g.getCheckboxGetter=function(e){return function(t){
return 1===arguments.length?g.check({item:e,isChecked:t}):g.check({item:e})}},g.getCheckAllGetter=function(){return function(e){return 1===arguments.length?g.checkAll({
isChecked:e}):g.checkAll()}},g.editItem=function(t){u(),g.isEditingSomething()||(g.editing&&g.editing({item:t}),g.currentlyEditing=e.cloneDeep(t))},g.modifyItem=function(t){
if(g.isItemDirty(t)){g.saving=t;var n={};m.forEach(function(t){e.set(n,t,e.get(g.currentlyEditing,t))}),e.filter(g.columns,"editable").forEach(function(t){
e.set(n,t.key,e.get(g.currentlyEditing,t.key))});var i=r.$watch(function(){return e.find(g.data,n)||null===g.currentlyEditing},function(e){e&&(i(),u());
});delete b[c(t,!0)];var a=g.modify({item:g.currentlyEditing,original:t});a&&delete b[c(a,!0)]}},g.restore=function(e){var t=g.restoreItem({item:e});t&&(delete b[c(t,!0)],
u()),delete b[c(e,!0)]},g.cancelEdit=function(e){delete b[c(e,!0)],g.currentlyEditing=null;var t=g.revert({item:e});t&&delete b[c(t,!0)]},g.isEditingSomething=function(){
return!g.disabled&&!!g.currentlyEditing},g.isEditingItem=function(e){return g.isEditingSomething()&&g.currentlyEditing.__listHash===e.__listHash},g.isItemDirty=function(e){
return g.isEditingItem(e)&&JSON.stringify(g.currentlyEditing)!==JSON.stringify(e)},g.doDeleteItem=function(e){delete b[c(e,!0)];var t=g.deleteItem({item:e
});t&&delete b[c(t,!0)]},g.refresh=function(t){e.isArray(t)||(t=[t]),e.forEach(t,function(e){delete b[c(e,!0)]})},g.possiblyFilter=function(){g.filterButtonLabel||(g.filter({
filterString:g.filterString}),g.itemsLoading=!0)},g.resetFilter=function(){g.filterString="",g.filter({filterString:g.filterString}),g.itemsLoading=!0},
g.getResults=function(e){return g.onSelected({item:null}),delete g.newItem.selected,g.openSearch=!0,g.searching=!0,d&&(d.reject(),d=null),d=a.defer(),g.searchAvailableItems({
searchString:e}),d.promise},g.possiblySelect=function(e,t,n,r){e.model.selected=!0,g.openSearch=!1,e.model.disabled||(r(t,n),g.onSelected({item:e.model
}))},g.selected=function(e,t,n,r){if(13===r.which||9===r.which){if(t.disabled)return void u();t.selected=!0,g.openSearch=!1,g.onSelected({item:t})}},g.searchIsOpen=function(e){
return g.openSearch||e.length},g.addHotKey=function(e){13===e.keyCode&&!g.disabled&&g.newItem.selected&&g.add()},g.addButtonHidden&&r.$watch("ctrl.newItem",function(t,n){
if(t!==n){if(""===t||""===t.label)t=null;else if(!e.isObject(t))return;g.addItem({item:t})}}),g.add=function(){var t=g.addItem({item:g.newItem});t&&delete b[c(t,!0)],
e.isUndefined(g.items)||u()},g.editableColumns=function(){return e.filter(g.columns,"editable")},g.sortOn=function(e){if(e.sortable&&!g.currentlyEditing){
var t=w[e.key]&&w[e.key]===n.ascending?n.descending:n.ascending;w={},w[e.key]=t,g.itemsLoading=!g.sortBy({key:e.key,descending:t===n.descending})}},g.sortDirectionFor=function(e){
return w[e]},g.doChangePage=function(e){g.itemsLoading=!0,o(function(){g.pagination.currentPage=e}),o(function(){g.changePage({currentPage:e}),b={}},250);
},g.getHeaderClass=function(e){return(e.class||"")+(g.currentlyEditing?" disabled":"")}}return i.$inject=["$scope","TR","$q","$timeout","$attrs"],r("/app/js/util/ListComponent/list-component.css"),
{bindings:{prefix:"@?",items:"<",setRefreshCallback:"&?",columns:"<",changePage:"&?",sortBy:"&?",editing:"&?",modify:"&?",revert:"&?",primaryColumn:"@?",
deleteItem:"&?delete",restoreItem:"&?restore",filter:"&?",addItem:"&?",onSelected:"&?",setSearchClearCallback:"&?",searchAvailableItems:"&?",searchResults:"<?",
check:"&?",checkAll:"&?",checkDisabled:"&?",checkAllDisabled:"&?",searchPlaceholder:"@?",addButtonHidden:"<",addButtonLabel:"@?",addItemLabel:"@?",filterItemsLabel:"@?",
filterHelpText:"@?",filterButtonLabel:"@?",filterPlaceholder:"@?",editLabel:"@?",deleteLabel:"@?",modifyLabel:"@?",revertLabel:"@?",restoreLabel:"@?",disabled:"=?ngDisabled",
hideDelete:"@?"},templateUrl:"/app/js/util/ListComponent/list.component.html",controller:i,controllerAs:"ctrl"}}),define("util/ListComponent/ListColumnComponent",["util/ListComponent/ListComponentDataTypes"],function(e){
"use strict";return{bindings:{item:"<",action:"&?"},templateUrl:"/app/js/util/ListComponent/list-column.component.html",controller:function(){var t=this;
t.triggerAction=function(e,n){n.action(e,function(e){t.action({affected:e})})},t.dataType=e},controllerAs:"ctrl"}}),define("util/ListComponent/ListHFComponent",[],function(){
"use strict";return{bindings:{pagination:"<",doChangePage:"<",addItem:"<",isAdding:"<",canEditItems:"<",isModifying:"<",canDeleteAnything:"<",isDeleting:"<"
},templateUrl:"/app/js/util/ListComponent/list-header-footer.component.html",controller:function(){},controllerAs:"ctrl"}}),define("util/DisabledLinkHelper",["lodash"],function(e){
"use strict";return["$provide",function(t){t.decorator("ngClickDirective",["$delegate","$parse",function(t,n){var r=t[0],i=r.compile;return r.compile=function(t,r){
var a=i.apply(this,arguments),o=function(t,i,o){var s=!!i.parents("[ngDisabled], .disabled, [ng-class*=disabled]").length;if("a"===i[0].tagName.toLowerCase()&&(e.has(o,"ngDisabled")||s)){
var u=n(r.ngClick,null,!0);i.on("click",function(e){var n=!!i.parents("[disabled=disabled], .disabled").length;if(!o.disabled&&!n){var r=function(){u(t,{
$event:e})};t.$apply(r)}})}else a.apply(this,arguments)};return o},t}])}]}),define("util/DragDirectives",[],function(){"use strict";var e={};return"dragover dragleave drop change".split(" ").forEach(function(t){
var n=directiveNormalize("bg-"+t);e[n]=["$parse",function(e){return{restrict:"A",compile:function(r,i){var a=e(i[n]);return function(e,n){n.on(t,function(t){
e.$apply(function(){a(e,{$event:t})})})}}}}]}),e});var PREFIX_REGEXP=/^((?:x|data)[:\-_])/i,SPECIAL_CHARS_REGEXP=/[:\-_]+(.)/g;!function(e,t){"object"==typeof exports?module.exports=t(e):"function"==typeof define&&define.amd?define("colors",[],function(){
return t(e)}):e.Colors=t(e)}(this,function(e,t){"use strict";function n(e,n,r,a,o){if("string"==typeof n){var n=w.txt2color(n);r=n.type,h[r]=n[r],o=o!==t?o:n.alpha;
}else if(n)for(var s in n)e[r][s]=c(n[s]/d[r][s][1],0,1);return o!==t&&(e.alpha=c(+o,0,1)),i(r,a?e:t)}function r(e,t,n){var r=m.options.grey,i={};return i.RGB={
r:e.r,g:e.g,b:e.b},i.rgb={r:t.r,g:t.g,b:t.b},i.alpha=n,i.equivalentGrey=p(r.r*e.r+r.g*e.g+r.b*e.b),i.rgbaMixBlack=u(t,{r:0,g:0,b:0},n,1),i.rgbaMixWhite=u(t,{
r:1,g:1,b:1},n,1),i.rgbaMixBlack.luminance=s(i.rgbaMixBlack,!0),i.rgbaMixWhite.luminance=s(i.rgbaMixWhite,!0),m.options.customBG&&(i.rgbaMixCustom=u(t,m.options.customBG,n,1),
i.rgbaMixCustom.luminance=s(i.rgbaMixCustom,!0),m.options.customBG.luminance=s(m.options.customBG,!0)),i}function i(e,t){var n,i,c,_=t||h,g=w,v=m.options,y=d,b=_.RND,M="",D="",$={
hsl:"hsv",rgb:e},L=b.rgb;if("alpha"!==e){for(var k in y)if(!y[k][k]){e!==k&&(D=$[k]||"rgb",_[k]=g[D+"2"+k](_[D])),b[k]||(b[k]={}),n=_[k];for(M in n)b[k][M]=p(n[M]*y[k][M][1]);
}L=b.rgb,_.HEX=g.RGB2HEX(L),_.equivalentGrey=v.grey.r*_.rgb.r+v.grey.g*_.rgb.g+v.grey.b*_.rgb.b,_.webSave=i=a(L,51),_.webSmart=c=a(L,17),_.saveColor=L.r===i.r&&L.g===i.g&&L.b===i.b?"web save":L.r===c.r&&L.g===c.g&&L.b===c.b?"web smart":"",
_.hueRGB=w.hue2RGB(_.hsv.h),t&&(_.background=r(L,_.rgb,_.alpha))}var x,T,S,Y=_.rgb,C=_.alpha,E="luminance",A=_.background;return x=u(Y,{r:0,g:0,b:0},C,1),
x[E]=s(x,!0),_.rgbaMixBlack=x,T=u(Y,{r:1,g:1,b:1},C,1),T[E]=s(T,!0),_.rgbaMixWhite=T,v.customBG&&(S=u(Y,A.rgbaMixCustom,C,1),S[E]=s(S,!0),S.WCAG2Ratio=l(S[E],A.rgbaMixCustom[E]),
_.rgbaMixBGMixCustom=S,S.luminanceDelta=f.abs(S[E]-A.rgbaMixCustom[E]),S.hueDelta=o(A.rgbaMixCustom,S,!0)),_.RGBLuminance=s(L),_.HUELuminance=s(_.hueRGB),
v.convertCallback&&v.convertCallback(_,e),_}function a(e,t){var n={},r=0,i=t/2;for(var a in e)r=e[a]%t,n[a]=e[a]+(r>i?t-r:-r);return n}function o(e,t,n){
return(f.max(e.r-t.r,t.r-e.r)+f.max(e.g-t.g,t.g-e.g)+f.max(e.b-t.b,t.b-e.b))*(n?255:1)/765}function s(e,t){for(var n=t?1:255,r=[e.r/n,e.g/n,e.b/n],i=m.options.luminance,a=r.length;a--;)r[a]=r[a]<=.03928?r[a]/12.92:f.pow((r[a]+.055)/1.055,2.4);
return i.r*r[0]+i.g*r[1]+i.b*r[2]}function u(e,n,r,i){var a={},o=r!==t?r:1,s=i!==t?i:1,u=o+s*(1-o);for(var l in e)a[l]=(e[l]*o+n[l]*s*(1-o))/u;return a.a=u,
a}function l(e,t){var n=1;return n=e>=t?(e+.05)/(t+.05):(t+.05)/(e+.05),p(100*n)/100}function c(e,t,n){return e>n?n:e<t?t:e}var d={rgb:{r:[0,255],g:[0,255],
b:[0,255]},hsv:{h:[0,360],s:[0,100],v:[0,100]},hsl:{h:[0,360],s:[0,100],l:[0,100]},alpha:{alpha:[0,1]},HEX:{HEX:[0,16777215]}},f=e.Math,p=f.round,m={},h={},_={
r:.298954,g:.586434,b:.114612},g={r:.2126,g:.7152,b:.0722},v=function(e){this.colors={RND:{}},this.options={color:"rgba(0,0,0,0)",grey:_,luminance:g,valueRanges:d
},y(this,e||{})},y=function(e,r){var i,a=e.options;b(e);for(var o in r)r[o]!==t&&(a[o]=r[o]);i=a.customBG,a.customBG="string"==typeof i?w.txt2color(i).rgb:i,
h=n(e.colors,a.color,t,!0)},b=function(e){m!==e&&(m=e,h=e.colors)};v.prototype.setColor=function(e,r,a){return b(this),e?n(this.colors,e,r,t,a):(a!==t&&(this.colors.alpha=c(a,0,1)),
i(r))},v.prototype.setCustomBackground=function(e){return b(this),this.options.customBG="string"==typeof e?w.txt2color(e).rgb:e,n(this.colors,t,"rgb")},
v.prototype.saveAsBackground=function(){return b(this),n(this.colors,t,"rgb",!0)},v.prototype.toString=function(e,t){return w.color2text((e||"rgb").toLowerCase(),this.colors,t);
};var w={txt2color:function(e){var t={},n=e.replace(/(?:#|\)|%)/g,"").split("("),r=(n[1]||"").split(/,\s*/),i=n[1]?n[0].substr(0,3):"rgb",a="";if(t.type=i,
t[i]={},n[1])for(var o=3;o--;)a=i[o]||i.charAt(o),t[i][a]=+r[o]/d[i][a][1];else t.rgb=w.HEX2rgb(n[0]);return t.alpha=r[3]?+r[3]:1,t},color2text:function(e,t,n){
var r=n!==!1&&p(100*t.alpha)/100,i="number"==typeof r&&n!==!1&&(n||1!==r),a=t.RND.rgb,o=t.RND.hsl,s="hex"===e&&i,u="hex"===e&&!s,l="rgb"===e||s,c=l?a.r+", "+a.g+", "+a.b:u?"#"+t.HEX:o.h+", "+o.s+"%, "+o.l+"%";
return u?c:(s?"rgb":e)+(i?"a":"")+"("+c+(i?", "+r:"")+")"},RGB2HEX:function(e){return((e.r<16?"0":"")+e.r.toString(16)+(e.g<16?"0":"")+e.g.toString(16)+(e.b<16?"0":"")+e.b.toString(16)).toUpperCase();
},HEX2rgb:function(e){return e=e.split(""),{r:+("0x"+e[0]+e[e[3]?1:0])/255,g:+("0x"+e[e[3]?2:1]+(e[3]||e[1]))/255,b:+("0x"+(e[4]||e[2])+(e[5]||e[2]))/255
}},hue2RGB:function(e){var t=6*e,n=~~t%6,r=6===t?0:t-n;return{r:p(255*[1,1-r,0,0,r,1][n]),g:p(255*[r,1,1,1-r,0,0][n]),b:p(255*[0,0,r,1,1,1-r][n])}},rgb2hsv:function(e){
var t,n,r,i=e.r,a=e.g,o=e.b,s=0;return a<o&&(a=o+(o=a,0),s=-1),n=o,i<a&&(i=a+(a=i,0),s=-2/6-s,n=f.min(a,o)),t=i-n,r=i?t/i:0,{h:r<1e-15?h&&h.hsl&&h.hsl.h||0:t?f.abs(s+(a-o)/(6*t)):0,
s:i?t/i:h&&h.hsv&&h.hsv.s||0,v:i}},hsv2rgb:function(e){var t=6*e.h,n=e.s,r=e.v,i=~~t,a=t-i,o=r*(1-n),s=r*(1-a*n),u=r*(1-(1-a)*n),l=i%6;return{r:[r,s,o,o,u,r][l],
g:[u,r,r,s,o,o][l],b:[o,o,u,r,r,s][l]}},hsv2hsl:function(e){var t=(2-e.s)*e.v,n=e.s*e.v;return n=e.s?t<1?t?n/t:0:n/(2-t):0,{h:e.h,s:e.v||n?n:h&&h.hsl&&h.hsl.s||0,
l:t/2}},rgb2hsl:function(e,t){var n=w.rgb2hsv(e);return w.hsv2hsl(t?n:h.hsv=n)},hsl2rgb:function(e){var t=6*e.h,n=e.s,r=e.l,i=r<.5?r*(1+n):r+n-n*r,a=r+r-i,o=i?(i-a)/i:0,s=~~t,u=t-s,l=i*o*u,c=a+l,d=i-l,f=s%6;
return{r:[i,d,a,a,c,i][f],g:[c,i,i,d,a,a][f],b:[a,a,c,i,i,d][f]}}};return v}),function(e,t){"object"==typeof exports?module.exports=t(e,require("jquery"),require("colors")):"function"==typeof define&&define.amd?define("lib/colorpicker/jqColorPicker",["jquery","colors"],function(n,r){
return t(e,n,r)}):t(e,e.jQuery,e.Colors)}(this,function(e,t,n,r){"use strict";function i(e){return e.value||e.getAttribute("value")||t(e).css("background-color")||"#FFF";
}function a(e){return e=e.originalEvent&&e.originalEvent.touches?e.originalEvent.touches[0]:e,e.originalEvent?e.originalEvent:e}function o(e){return t(e.find(g.doRender)[0]||e[0]);
}function s(n){var r=t(this),a=r.offset(),s=t(e),c=g.gap;n?(v=o(r),v._colorMode=v.data("colorMode"),h.$trigger=r,(y||u()).css(g.positionCallback.call(h,r)||{
left:(y._left=a.left)-((y._left+=y._width-(s.scrollLeft()+s.width()))+c>0?y._left+c:0),top:(y._top=a.top+r.outerHeight())-((y._top+=y._height-(s.scrollTop()+s.height()))+c>0?y._top+c:0)
}).show(g.animationSpeed,function(){n!==!0&&($.toggle(!!g.opacity)._width=$.width(),w._width=w.width(),w._height=w.height(),b._height=b.height(),_.setColor(i(v[0])),
p(!0))}).off(".tcp").on(S,".cp-xy-slider,.cp-z-slider,.cp-alpha",l)):h.$trigger&&t(y).hide(g.animationSpeed,function(){p(!1),h.$trigger=null}).off(".tcp");
}function u(){return t("head")[g.cssPrepend?"prepend":"append"]('<style type="text/css" id="tinyColorPickerStyles">'+(g.css||F)+(g.cssAddon||"")+"</style>"),
t(A).css({margin:g.margin}).appendTo("body").show(0,function(){h.$UI=y=t(this),C=g.GPU&&y.css("perspective")!==r,b=t(".cp-z-slider",this),w=t(".cp-xy-slider",this),
M=t(".cp-xy-cursor",this),D=t(".cp-z-cursor",this),$=t(".cp-alpha",this),L=t(".cp-alpha-cursor",this),g.buildCallback.call(h,y),y.prepend("<div>").children().eq(0).css("width",y.children().eq(0).width()),
y._width=this.offsetWidth,y._height=this.offsetHeight}).hide()}function l(e){var n=this.className.replace(/cp-(.*?)(?:\s*|$)/,"$1").replace("-","_");(e.button||e.which)>1||(e.preventDefault&&e.preventDefault(),
e.returnValue=!1,v._offset=t(this).offset(),(n="xy_slider"===n?c:"z_slider"===n?d:f)(e),p(),k.on(Y,function(e){k.off(".tcp")}).on(T,function(e){n(e),p();
}))}function c(e){var t=a(e),n=t.pageX-v._offset.left,r=t.pageY-v._offset.top;_.setColor({s:n/w._width*100,v:100-r/w._height*100},"hsv")}function d(e){
var t=a(e).pageY-v._offset.top;_.setColor({h:360-t/b._height*360},"hsv")}function f(e){var t=a(e).pageX-v._offset.left,n=t/$._width;_.setColor({},"rgb",n);
}function p(e){var t=_.colors,n=t.hueRGB,i=(t.RND.rgb,t.RND.hsl,g.dark),a=g.light,o=_.toString(v._colorMode,g.forceAlpha),s=t.HUELuminance>.22?i:a,u=t.rgbaMixBlack.luminance>.22?i:a,l=(1-t.hsv.h)*b._height,c=t.hsv.s*w._width,d=(1-t.hsv.v)*w._height,f=t.alpha*$._width,p=C?"translate3d":"",h=v[0].value,y=v[0].hasAttribute("value")&&""===h&&e!==r;
w._css={backgroundColor:"rgb("+n.r+","+n.g+","+n.b+")"},M._css={transform:p+"("+c+"px, "+d+"px, 0)",left:C?"":c,top:C?"":d,borderColor:t.RGBLuminance>.22?i:a
},D._css={transform:p+"(0, "+l+"px, 0)",top:C?"":l,borderColor:"transparent "+s},$._css={backgroundColor:"#"+t.HEX},L._css={transform:p+"("+f+"px, 0, 0)",
left:C?"":f,borderColor:u+" transparent"},v._css={backgroundColor:y?"":o,color:y?"":t.rgbaMixBGMixCustom.luminance>.22?i:a},v.text=y?"":h!==o?o:"",e!==r?m(e):E(m);
}function m(e){w.css(w._css),M.css(M._css),D.css(D._css),$.css($._css),L.css(L._css),g.doRender&&v.css(v._css),v.text&&v.val(v.text),g.renderCallback.call(h,v,"boolean"==typeof e?e:r);
}var h,_,g,v,y,b,w,M,D,$,L,k=t(document),x=t(),T="touchmove.tcp mousemove.tcp pointermove.tcp",S="touchstart.tcp mousedown.tcp pointerdown.tcp",Y="touchend.tcp mouseup.tcp pointerup.tcp",C=!1,E=e.requestAnimationFrame||e.webkitRequestAnimationFrame||function(e){
e()},A='<div class="cp-color-picker"><div class="cp-z-slider"><div class="cp-z-cursor"></div></div><div class="cp-xy-slider"><div class="cp-white"></div><div class="cp-xy-cursor"></div></div><div class="cp-alpha"><div class="cp-alpha-cursor"></div></div></div>',F=".cp-color-picker{position:absolute;overflow:hidden;padding:6px 6px 0;background-color:#444;color:#bbb;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:400;cursor:default;border-radius:5px}.cp-color-picker>div{position:relative;overflow:hidden}.cp-xy-slider{float:left;height:128px;width:128px;margin-bottom:6px;background:linear-gradient(to right,#FFF,rgba(255,255,255,0))}.cp-white{height:100%;width:100%;background:linear-gradient(rgba(0,0,0,0),#000)}.cp-xy-cursor{position:absolute;top:0;width:10px;height:10px;margin:-5px;border:1px solid #fff;border-radius:100%;box-sizing:border-box}.cp-z-slider{float:right;margin-left:6px;height:128px;width:20px;background:linear-gradient(red 0,#f0f 17%,#00f 33%,#0ff 50%,#0f0 67%,#ff0 83%,red 100%)}.cp-z-cursor{position:absolute;margin-top:-4px;width:100%;border:4px solid #fff;border-color:transparent #fff;box-sizing:border-box}.cp-alpha{clear:both;width:100%;height:16px;margin:6px 0;background:linear-gradient(to right,#444,rgba(0,0,0,0))}.cp-alpha-cursor{position:absolute;margin-left:-4px;height:100%;border:4px solid #fff;border-color:#fff transparent;box-sizing:border-box}",j=function(e){
_=this.color=new n(e),g=_.options,h=this};j.prototype={render:p,toggle:s},t.fn.colorPicker=function(n){var r=this,a=function(){};return n=t.extend({animationSpeed:150,
GPU:!0,doRender:!0,customBG:"#FFF",opacity:!0,renderCallback:a,buildCallback:a,positionCallback:a,body:document.body,scrollResize:!0,gap:4,dark:"#222",
light:"#DDD"},n),!h&&n.scrollResize&&t(e).on("resize.tcp scroll.tcp",function(){h.$trigger&&h.toggle.call(h.$trigger[0],!0)}),x=x.add(this),this.colorPicker=h||new j(n),
this.options=n,t(n.body).off(".tcp").on(S,function(e){x.add(y).add(t(y).find(e.target)).index(e.target)===-1&&s()}),this.on("focusin.tcp click.tcp",function(e){
h.color.options=t.extend(h.color.options,g=r.options),s.call(this,e)}).on("change.tcp",function(){_.setColor(this.value||"#FFF"),r.colorPicker.render(!0);
}).each(function(){var e=i(this),r=e.split("("),a=o(t(this));a.data("colorMode",r[1]?r[0].substr(0,3):"HEX").attr("readonly",g.preventFocus),n.doRender&&a.css({
"background-color":e,color:function(){return _.setColor(e).rgbaMixBGMixCustom.luminance>.22?n.dark:n.light}})})},t.fn.colorPicker.destroy=function(){t("*").off(".tcp"),
h.toggle(!1),x=t()}}),define("util/ColorPicker",["lib/colorpicker/jqColorPicker"],function(){"use strict";return{bindings:{color:"=",prefix:"@id"},template:'<div id="{{:: ctrl.prefix}}-swatch" class="color-swatch" value="{{ctrl.color}}" ng-style="{\'background-color\': ctrl.color}"></div><input id="{{:: ctrl.prefix}}-input" size="8" ng-model="ctrl.color">',
controllerAs:"ctrl",controller:["$scope","$element","TR",function(e,t,n){var r=this,i=n("Cancel"),a=n("Done"),o=r.color,s="#ffffff";t.find(".color-swatch").colorPicker({
customBG:"#5f6062",margin:"4px -2px 0",cssAddon:".cp-xy-slider:active {cursor:none;}",opacity:!1,forceAlpha:!1,renderCallback:function(t,n){var i=this.color;
n===!0?(o=r.color?r.color:s,i.setColor(o)):n===!1&&this.$UI.find(".toggle-picker").off("click","a:first-of-type"),e.$apply(function(){r.color="#"+i.colors.HEX.toLowerCase();
})},positionCallback:function(e){var t=this;return t.$UI.find(".toggle-picker").on("click","a:first-of-type",function(){t.color.setColor(o)}),!1},buildCallback:function(e){
var t=this;e.append('<div class="toggle-picker"><a>'+i+"</a><a>"+a+"</a></div>").on("click","a",function(){t.toggle()})}})}]}}),define("public_site/PortalCustomizationComponent",["angular","lodash","colors","util/CSSRequire","text!/app/js/admin/public_site/portal_customization.css"],function(e,t,n,r){
"use strict";function i(r,i,s,u,l,c,d,f,p,m){function h(e){var t=new Image;t.src=e;var n=s.defer();return t.onload=function(){var e=document.createElement("canvas");
e.width=t.width,e.height=t.height;var r=e.getContext("2d");r.drawImage(t,0,0),n.resolve(r.getImageData(0,0,t.width,t.height))},n.promise}function _(e){
return{width:e.width/2+"px",height:e.height/2+"px"}}function g(e){c.crop({image:e,size:{width:250,height:64},done:function(){b.logo=b.logoPreview,b.logoPreview=null,
b.reloadPreview()},cancel:function(){b.logoPreview=null},updated:function(e,t,n,r){var i={width:t,height:n};b.logoPreview={image:e,imageData:r,css:_(i),
size:i}}})}var v,y,b=this,w=a;b.savePromise=!1;var M,D=r.$watch(function(){return b.publicSite},function(){b.publicSite&&(D(),b.logo={image:b.publicSite.logo_uri,
css:{}},h(b.publicSite.logo_uri).then(function(e){b.logo.imageData=v=e,b.logo.size=y={width:e.width,height:e.height},b.logo.css=_(y)}))});b.logo={image:"",
css:{}},b.colors=t.assign({},a),Object.defineProperty(b.colors,"border",{get:function(){var e=new n({color:b.colors.accent1}),t=e.options.valueRanges.hsl,r=e.colors.hsl.h,i=e.colors.hsl.s,a=e.colors.hsl.l;
return a>.8?a-=.1:a+=.1,e.setColor({h:r*t.h[1],s:i*t.s[1],l:a*t.l[1]},"hsl"),"#"+e.colors.HEX},enumerable:!0}),b.support=f.support,b.configLoadPromise=d.get("public_portal_customizations").then(function(e){
Object.keys(e.value).length&&(t.assign(b.colors,{accent1:e.value.accent1,accent2:e.value.accent2,background:e.value.background},function(e,n){return t.isUndefined(n)?e:n;
}),w=e.value)},function(e){p.setErrorStatus(e,r.$id)}),b.colorsArePristine=function(){return w.accent1===b.colors.accent1&&w.accent2===b.colors.accent2&&w.background===b.colors.background;
},b.colorsAreEmpty=function(){return!b.colors.accent1||!b.colors.accent2||!b.colors.background},b.logIsPristine=function(){return!b.hasLogoCustomization()||b.logo.image===b.publicSite.logo_uri;
},b.customizationsArePristine=function(){return!b.publicSite||b.logIsPristine()&&b.colorsArePristine()},b.hasLogoCustomization=function(){return!t.isUndefined(b.publicSite)&&(""!==b.logo.image||""!==b.publicSite.logo_uri);
},b.hasColorCustomizations=function(){return b.colors.accent1!==a.accent1||b.colors.accent2!==a.accent2||b.colors.background!==a.background||w.accent1!==a.accent1||w.accent2!==a.accent2||w.background!==a.background;
},b.saveCustomizations=function(){b.errors=null,b.savePromise=b.publicSite.saveCustomization({color:b.colors,logo:b.logo}),b.savePromise.then(function(e){
t.assign(w,b.colors),b.publicSite.logo_uri=b.logo.image,v=b.logo.imageData,y=b.logo.size,p.setSuccessStatus(e.message,r.$id),b.reloadPreview()},function(e){
e.data.errors?b.errors=e.data.errors:p.setErrorStatus(e,r.$id)})},b.discardChanges=function(){u.confirm(i("Are you sure you want to discard your changes? \n (This cannot be undone)"))&&(t.assign(b.colors,{
accent1:w.accent1,accent2:w.accent2,background:w.background}),b.logo.image=b.publicSite.logo_uri,b.logo.imageData=v,b.logo.css=_(y),b.logo.size=y,b.reloadPreview());
},b.resetToDefaults=function(){u.confirm(i("Are you sure you want to revert to factory defaults? \n (Note: Changes are not permanent until you press â€œSaveâ€)"))&&(t.assign(b.colors,a),
b.logo={image:"",imageData:null,css:{},size:{}},b.reloadPreview())},b.clearLogo=function(e){e.preventDefault(),e.stopPropagation(),b.logo.image.length>0&&(b.logo.image="",
b.logo.imageData=null,b.reloadPreview())},b.reloadPreview=function(){b.errors=[],M=m.find("iframe")[0],Object.keys(b.colors).forEach(function(e){o.exec(b.colors[e])||(b.errors[e]=[i("Colors must be formatted as valid hex color codes.")]);
}),b.errors.length>0||M&&M.contentWindow.updatePreview({color:b.colors,logo:b.logo})},b.publicSiteURL=l.trustAsResourceUrl(u.location.origin+"?preview=1#"+(new Date).getTime()),
b.onDragOver=function(e){b.draggingOver=!0,e.preventDefault(),e.stopPropagation()},b.onDragLeave=function(e){b.draggingOver=!1,e.preventDefault(),e.stopPropagation();
},b.onFileAdded=function(t){if(0!==t.currentTarget.files.length){g(t.currentTarget.files[0]);var n=e.element(t.currentTarget);n.wrap("<form>").closest("form").get(0).reset(),
n.unwrap()}},b.onDrop=function(e){var t=e.dataTransfer?e.dataTransfer:e.originalEvent.dataTransfer;t&&0!==t.files.length&&(e.preventDefault(),e.stopPropagation(),
b.draggingOver=!1,g(t.files[0]))}}i.$inject=["$scope","TR","$q","$window","$sce","ImageCropper","UserConfig","Features","$rootScope","$element"],r("/app/js/admin/public_site/portal_customization.css");
var a={accent1:"#5f6062",accent2:"#ff5500",background:"#ffffff"},o=/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;return{bindings:{publicSite:"<",heading:"@"},
templateUrl:"/app/js/admin/public_site/portal_customization.html",controller:i,controllerAs:"ctrl"}}),define("util/ThreeStateCheckboxStates",[],function(){
"use strict";return{unchecked:0,checked:1,indeterminate:2}}),define("util/ThreeStateCheckbox",["util/ThreeStateCheckboxStates"],function(e){"use strict";
return{threeState:["BrowserFeatures",function(t){return{restrict:"A",require:"?ngModel",link:function(n,r,i,a){var o=!0;(t.IE||t.isEdge)&&(o=!1),a&&"checkbox"===r[0].type&&(a.$render=function(){
r[0].indeterminate=a.$modelValue===e.indeterminate,r[0].indeterminate?r[0].checked=o:r[0].checked=a.$modelValue!==e.unchecked},a.$isEmpty=function(t){return t===e.unchecked;
},a.$formatters.push(function(t){return t!==e.unchecked}),a.$parsers.push(function(t){return t||a.$modelValue===e.indeterminate?e.checked:e.unchecked}),
n.$watch(function(){return a.$modelValue},function(t){a.$render(),a.$setViewValue(t!==e.unchecked)}))}}}]}}),angular.module("ui.bootstrap",["ui.bootstrap.typeahead","ui.bootstrap.debounce","ui.bootstrap.position"]),
angular.module("ui.bootstrap.typeahead",["ui.bootstrap.debounce","ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(e){var t=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
return{parse:function(n){var r=n.match(t);if(!r)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+n+'".');
return{itemName:r[3],source:e(r[4]),viewMapper:e(r[2]||r[1]),modelMapper:e(r[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$$debounce","$uibPosition","uibTypeaheadParser",function(e,t,n,r,i,a,o,s,u,l,c,d,f){
function p(){I.moveInProgress||(I.moveInProgress=!0,I.$digest()),K()}function m(){I.position=Y?d.offset(t):d.position(t),I.position.top+=t.prop("offsetHeight");
}var h,_,g=[9,13,27,38,40],v=200,y=e.$eval(n.typeaheadMinLength);y||0===y||(y=1),e.$watch(n.typeaheadMinLength,function(e){y=e||0===e?e:1});var b=e.$eval(n.typeaheadWaitMs)||0,w=e.$eval(n.typeaheadEditable)!==!1;
e.$watch(n.typeaheadEditable,function(e){w=e!==!1});var M,D,$=i(n.typeaheadLoading).assign||angular.noop,L=n.typeaheadShouldSelect?i(n.typeaheadShouldSelect):function(e,t){
var n=t.$event;return 13===n.which||9===n.which},k=i(n.typeaheadOnSelect),x=!!angular.isDefined(n.typeaheadSelectOnBlur)&&e.$eval(n.typeaheadSelectOnBlur),T=i(n.typeaheadNoResults).assign||angular.noop,S=n.typeaheadInputFormatter?i(n.typeaheadInputFormatter):void 0,Y=!!n.typeaheadAppendToBody&&e.$eval(n.typeaheadAppendToBody),C=n.typeaheadAppendTo?e.$eval(n.typeaheadAppendTo):null,E=e.$eval(n.typeaheadFocusFirst)!==!1,A=!!n.typeaheadSelectOnExact&&e.$eval(n.typeaheadSelectOnExact),F=i(n.typeaheadIsOpen).assign||angular.noop,j=e.$eval(n.typeaheadShowHint)||!1,P=i(n.ngModel),O=i(n.ngModel+"($$$p)"),H=function(t,n){
return angular.isFunction(P(e))&&_&&_.$options&&_.$options.getterSetter?O(t,{$$$p:n}):P.assign(t,n)},R=f.parse(n.uibTypeahead),I=e.$new(),N=e.$on("$destroy",function(){
I.$destroy()});I.$on("$destroy",N);var U="typeahead-"+I.$id+"-"+Math.floor(1e4*Math.random());t.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":U
});var B,W;j&&(B=angular.element("<div></div>"),B.css("position","relative"),t.after(B),W=t.clone(),W.attr("placeholder",""),W.attr("tabindex","-1"),W.val(""),
W.css({position:"absolute",top:"0px",left:"0px","border-color":"transparent","box-shadow":"none",opacity:1,background:"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",
color:"#999"}),t.css({position:"relative","vertical-align":"top","background-color":"transparent"}),W.attr("id")&&W.removeAttr("id"),B.append(W),W.after(t));
var z=angular.element("<div uib-typeahead-popup></div>");z.attr({id:U,matches:"matches",active:"activeIdx",select:"select(activeIdx, evt)","move-in-progress":"moveInProgress",
query:"query",position:"position","assign-is-open":"assignIsOpen(isOpen)",debounce:"debounceUpdate"}),angular.isDefined(n.typeaheadTemplateUrl)&&z.attr("template-url",n.typeaheadTemplateUrl),
angular.isDefined(n.typeaheadPopupTemplateUrl)&&z.attr("popup-template-url",n.typeaheadPopupTemplateUrl);var q=function(){j&&W.val("")},V=function(){I.matches=[],
I.activeIdx=-1,t.attr("aria-expanded",!1),q()},G=function(e){return U+"-option-"+e};I.$watch("activeIdx",function(e){e<0?t.removeAttr("aria-activedescendant"):t.attr("aria-activedescendant",G(e));
});var J=function(e,t){return!!(I.matches.length>t&&e)&&e.toUpperCase()===I.matches[t].label.toUpperCase()},X=function(n,r){var i={$viewValue:n};$(e,!0),
T(e,!1),a.when(R.source(e,i)).then(function(a){var o=n===h.$viewValue;if(o&&M)if(a&&a.length>0){I.activeIdx=E?0:-1,T(e,!1),I.matches.length=0;for(var s=0;s<a.length;s++)i[R.itemName]=a[s],
I.matches.push({id:G(s),label:R.viewMapper(I,i),model:a[s]});if(I.query=n,m(),t.attr("aria-expanded",!0),A&&1===I.matches.length&&J(n,0)&&(angular.isNumber(I.debounceUpdate)||angular.isObject(I.debounceUpdate)?c(function(){
I.select(0,r)},angular.isNumber(I.debounceUpdate)?I.debounceUpdate:I.debounceUpdate.default):I.select(0,r)),j){var u=I.matches[0].label;angular.isString(n)&&n.length>0&&u.slice(0,n.length).toUpperCase()===n.toUpperCase()?W.val(n+u.slice(n.length)):W.val("");
}}else V(),T(e,!0);o&&$(e,!1)},function(){V(),$(e,!1),T(e,!0)})};Y&&(angular.element(u).on("resize",p),s.find("body").on("scroll",p));var K=c(function(){
I.matches.length&&m(),I.moveInProgress=!1},v);I.moveInProgress=!1,I.query=void 0;var Z,Q=function(e){Z=o(function(){X(e)},b)},ee=function(){Z&&o.cancel(Z);
};V(),I.assignIsOpen=function(t){F(e,t)},I.select=function(r,i){var a,s,u={};D=!0,u[R.itemName]=s=I.matches[r].model,a=R.modelMapper(e,u),H(e,a),h.$setValidity("editable",!0),
h.$setValidity("parse",!0),k(e,{$item:s,$model:a,$label:R.viewMapper(e,u),$event:i}),V(),I.$eval(n.typeaheadFocusOnSelect)!==!1&&o(function(){t[0].focus();
},0,!1)},t.on("keydown",function(t){if(0!==I.matches.length&&g.indexOf(t.which)!==-1){var n=L(e,{$event:t});if(I.activeIdx===-1&&n||9===t.which&&t.shiftKey)return V(),
void I.$digest();t.preventDefault();var r;switch(t.which){case 27:t.stopPropagation(),V(),e.$digest();break;case 38:I.activeIdx=(I.activeIdx>0?I.activeIdx:I.matches.length)-1,
I.$digest(),r=z[0].querySelectorAll(".uib-typeahead-match")[I.activeIdx],r.parentNode.scrollTop=r.offsetTop;break;case 40:I.activeIdx=(I.activeIdx+1)%I.matches.length,
I.$digest(),r=z[0].querySelectorAll(".uib-typeahead-match")[I.activeIdx],r.parentNode.scrollTop=r.offsetTop;break;default:n&&I.$apply(function(){angular.isNumber(I.debounceUpdate)||angular.isObject(I.debounceUpdate)?c(function(){
I.select(I.activeIdx,t)},angular.isNumber(I.debounceUpdate)?I.debounceUpdate:I.debounceUpdate.default):I.select(I.activeIdx,t)})}}}),t.bind("focus",function(e){
M=!0,0!==y||h.$viewValue||o(function(){X(h.$viewValue,e)},0)}),t.bind("blur",function(e){x&&I.matches.length&&I.activeIdx!==-1&&!D&&(D=!0,I.$apply(function(){
angular.isObject(I.debounceUpdate)&&angular.isNumber(I.debounceUpdate.blur)?c(function(){I.select(I.activeIdx,e)},I.debounceUpdate.blur):I.select(I.activeIdx,e);
})),!w&&h.$error.editable&&(h.$setViewValue(),I.$apply(function(){h.$setValidity("editable",!0),h.$setValidity("parse",!0)}),t.val("")),M=!1,D=!1});var te=function(n){
t[0]!==n.target&&3!==n.which&&0!==I.matches.length&&(V(),l.$$phase||e.$digest())};s.on("click",te),e.$on("$destroy",function(){s.off("click",te),(Y||C)&&ne.remove(),
Y&&(angular.element(u).off("resize",p),s.find("body").off("scroll",p)),z.remove(),j&&B.remove()});var ne=r(z)(I);Y?s.find("body").append(ne):C?angular.element(C).eq(0).append(ne):t.after(ne),
this.init=function(t,n){h=t,_=n,I.debounceUpdate=h.$options&&i(h.$options.debounce)(e),h.$parsers.unshift(function(t){return M=!0,0===y||t&&t.length>=y?b>0?(ee(),
Q(t)):X(t):($(e,!1),ee(),V()),w?t:t?void h.$setValidity("editable",!1):(h.$setValidity("editable",!0),null)}),h.$formatters.push(function(t){var n,r,i={};
return w||h.$setValidity("editable",!0),S?(i.$model=t,S(e,i)):(i[R.itemName]=t,n=R.viewMapper(e,i),i[R.itemName]=void 0,r=R.viewMapper(e,i),n!==r?n:t)});
}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(e,t,n,r){
r[2].init(r[0],r[1])}}}).directive("uibTypeaheadPopup",["$$debounce",function(e){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",
select:"&",assignIsOpen:"&",debounce:"&"},replace:!0,templateUrl:function(e,t){return t.popupTemplateUrl||"/app/js/lib/angular-ui/typeahead-popup.html";
},link:function(t,n,r){t.templateUrl=r.templateUrl,t.isOpen=function(){var e=t.matches.length>0;return t.assignIsOpen({isOpen:e}),e},t.isActive=function(e){
return t.active===e},t.selectActive=function(e){t.active=e},t.selectMatch=function(n,r){var i=t.debounce();angular.isNumber(i)||angular.isObject(i)?e(function(){
t.select({activeIdx:n,evt:r})},angular.isNumber(i)?i:i.default):t.select({activeIdx:n,evt:r})}}}}]).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(e,t,n){
return{scope:{index:"=",match:"=",query:"="},link:function(r,i,a){var o=n(a.templateUrl)(r.$parent)||"/app/js/lib/angular-ui/typeahead-match.html";e(o).then(function(e){
var n=angular.element(e.trim());i.replaceWith(n),t(n)(r)})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(e,t,n){function r(e){
return e.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function i(e){return/<.*>/g.test(e)}var a;return a=t.has("$sanitize"),function(t,o){return!a&&i(t)&&n.warn("Unsafe use of typeahead please use ngSanitize"),
t=o?(""+t).replace(new RegExp(r(o),"gi"),"<strong>$&</strong>"):t,a||(t=e.trustAsHtml(t)),t}}]),angular.module("ui.bootstrap.debounce",[]).factory("$$debounce",["$timeout",function(e){
return function(t,n){var r;return function(){var i=this,a=Array.prototype.slice.call(arguments);r&&e.cancel(r),r=e(function(){t.apply(i,a)},n)}}}]),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(e,t){
var n,r,i={normal:/(auto|scroll)/,hidden:/(auto|scroll|hidden)/},a={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,
vertical:/^(top|bottom)$/},o=/(HTML|BODY)/;return{getRawNode:function(e){return e.nodeName?e:e[0]||e},parseStyle:function(e){return e=parseFloat(e),isFinite(e)?e:0;
},offsetParent:function(n){function r(e){return"static"===(t.getComputedStyle(e).position||"static")}n=this.getRawNode(n);for(var i=n.offsetParent||e[0].documentElement;i&&i!==e[0].documentElement&&r(i);)i=i.offsetParent;
return i||e[0].documentElement},scrollbarWidth:function(i){if(i){if(angular.isUndefined(r)){var a=e.find("body");a.addClass("uib-position-body-scrollbar-measure"),
r=t.innerWidth-a[0].clientWidth,r=isFinite(r)?r:0,a.removeClass("uib-position-body-scrollbar-measure")}return r}if(angular.isUndefined(n)){var o=angular.element('<div class="uib-position-scrollbar-measure"></div>');
e.find("body").append(o),n=o[0].offsetWidth-o[0].clientWidth,n=isFinite(n)?n:0,o.remove()}return n},scrollbarPadding:function(e){e=this.getRawNode(e);var n=t.getComputedStyle(e),r=this.parseStyle(n.paddingRight),i=this.parseStyle(n.paddingBottom),a=this.scrollParent(e,!1,!0),s=this.scrollbarWidth(a,o.test(a.tagName));
return{scrollbarWidth:s,widthOverflow:a.scrollWidth>a.clientWidth,right:r+s,originalRight:r,heightOverflow:a.scrollHeight>a.clientHeight,bottom:i+s,originalBottom:i
}},isScrollable:function(e,n){e=this.getRawNode(e);var r=n?i.hidden:i.normal,a=t.getComputedStyle(e);return r.test(a.overflow+a.overflowY+a.overflowX)},
scrollParent:function(n,r,a){n=this.getRawNode(n);var o=r?i.hidden:i.normal,s=e[0].documentElement,u=t.getComputedStyle(n);if(a&&o.test(u.overflow+u.overflowY+u.overflowX))return n;
var l="absolute"===u.position,c=n.parentElement||s;if(c===s||"fixed"===u.position)return s;for(;c.parentElement&&c!==s;){var d=t.getComputedStyle(c);if(l&&"static"!==d.position&&(l=!1),
!l&&o.test(d.overflow+d.overflowY+d.overflowX))break;c=c.parentElement}return c},position:function(n,r){n=this.getRawNode(n);var i=this.offset(n);if(r){
var a=t.getComputedStyle(n);i.top-=this.parseStyle(a.marginTop),i.left-=this.parseStyle(a.marginLeft)}var o=this.offsetParent(n),s={top:0,left:0};return o!==e[0].documentElement&&(s=this.offset(o),
s.top+=o.clientTop-o.scrollTop,s.left+=o.clientLeft-o.scrollLeft),{width:Math.round(angular.isNumber(i.width)?i.width:n.offsetWidth),height:Math.round(angular.isNumber(i.height)?i.height:n.offsetHeight),
top:Math.round(i.top-s.top),left:Math.round(i.left-s.left)}},offset:function(n){n=this.getRawNode(n);var r=n.getBoundingClientRect();return{width:Math.round(angular.isNumber(r.width)?r.width:n.offsetWidth),
height:Math.round(angular.isNumber(r.height)?r.height:n.offsetHeight),top:Math.round(r.top+(t.pageYOffset||e[0].documentElement.scrollTop)),left:Math.round(r.left+(t.pageXOffset||e[0].documentElement.scrollLeft))
}},viewportOffset:function(n,r,i){n=this.getRawNode(n),i=i!==!1;var a=n.getBoundingClientRect(),o={top:0,left:0,bottom:0,right:0},s=r?e[0].documentElement:this.scrollParent(n),u=s.getBoundingClientRect();
if(o.top=u.top+s.clientTop,o.left=u.left+s.clientLeft,s===e[0].documentElement&&(o.top+=t.pageYOffset,o.left+=t.pageXOffset),o.bottom=o.top+s.clientHeight,
o.right=o.left+s.clientWidth,i){var l=t.getComputedStyle(s);o.top+=this.parseStyle(l.paddingTop),o.bottom-=this.parseStyle(l.paddingBottom),o.left+=this.parseStyle(l.paddingLeft),
o.right-=this.parseStyle(l.paddingRight)}return{top:Math.round(a.top-o.top),bottom:Math.round(o.bottom-a.bottom),left:Math.round(a.left-o.left),right:Math.round(o.right-a.right)
}},parsePlacement:function(e){var t=a.auto.test(e);return t&&(e=e.replace(a.auto,"")),e=e.split("-"),e[0]=e[0]||"top",a.primary.test(e[0])||(e[0]="top"),
e[1]=e[1]||"center",a.secondary.test(e[1])||(e[1]="center"),t?e[2]=!0:e[2]=!1,e},positionElements:function(e,n,r,i){e=this.getRawNode(e),n=this.getRawNode(n);
var o=angular.isDefined(n.offsetWidth)?n.offsetWidth:n.prop("offsetWidth"),s=angular.isDefined(n.offsetHeight)?n.offsetHeight:n.prop("offsetHeight");r=this.parsePlacement(r);
var u=i?this.offset(e):this.position(e),l={top:0,left:0,placement:""};if(r[2]){var c=this.viewportOffset(e,i),d=t.getComputedStyle(n),f={width:o+Math.round(Math.abs(this.parseStyle(d.marginLeft)+this.parseStyle(d.marginRight))),
height:s+Math.round(Math.abs(this.parseStyle(d.marginTop)+this.parseStyle(d.marginBottom)))};if(r[0]="top"===r[0]&&f.height>c.top&&f.height<=c.bottom?"bottom":"bottom"===r[0]&&f.height>c.bottom&&f.height<=c.top?"top":"left"===r[0]&&f.width>c.left&&f.width<=c.right?"right":"right"===r[0]&&f.width>c.right&&f.width<=c.left?"left":r[0],
r[1]="top"===r[1]&&f.height-u.height>c.bottom&&f.height-u.height<=c.top?"bottom":"bottom"===r[1]&&f.height-u.height>c.top&&f.height-u.height<=c.bottom?"top":"left"===r[1]&&f.width-u.width>c.right&&f.width-u.width<=c.left?"right":"right"===r[1]&&f.width-u.width>c.left&&f.width-u.width<=c.right?"left":r[1],
"center"===r[1])if(a.vertical.test(r[0])){var p=u.width/2-o/2;c.left+p<0&&f.width-u.width<=c.right?r[1]="left":c.right+p<0&&f.width-u.width<=c.left&&(r[1]="right");
}else{var m=u.height/2-f.height/2;c.top+m<0&&f.height-u.height<=c.bottom?r[1]="top":c.bottom+m<0&&f.height-u.height<=c.top&&(r[1]="bottom")}}switch(r[0]){
case"top":l.top=u.top-s;break;case"bottom":l.top=u.top+u.height;break;case"left":l.left=u.left-o;break;case"right":l.left=u.left+u.width}switch(r[1]){case"top":
l.top=u.top;break;case"bottom":l.top=u.top+u.height-s;break;case"left":l.left=u.left;break;case"right":l.left=u.left+u.width-o;break;case"center":a.vertical.test(r[0])?l.left=u.left+u.width/2-o/2:l.top=u.top+u.height/2-s/2;
}return l.top=Math.round(l.top),l.left=Math.round(l.left),l.placement="center"===r[1]?r[0]:r[0]+"-"+r[1],l},adjustTop:function(e,t,n,r){if(e.indexOf("top")!==-1&&n!==r)return{
top:t.top-r+"px"}},positionArrow:function(e,n){e=this.getRawNode(e);var r=e.querySelector(".tooltip-inner, .popover-inner");if(r){var i=angular.element(r).hasClass("tooltip-inner"),o=i?e.querySelector(".tooltip-arrow"):e.querySelector(".arrow");
if(o){var s={top:"",bottom:"",left:"",right:""};if(n=this.parsePlacement(n),"center"===n[1])return void angular.element(o).css(s);var u="border-"+n[0]+"-width",l=t.getComputedStyle(o)[u],c="border-";
c+=a.vertical.test(n[0])?n[0]+"-"+n[1]:n[1]+"-"+n[0],c+="-radius";var d=t.getComputedStyle(i?r:e)[c];switch(n[0]){case"top":s.bottom=i?"0":"-"+l;break;case"bottom":
s.top=i?"0":"-"+l;break;case"left":s.right=i?"0":"-"+l;break;case"right":s.left=i?"0":"-"+l}s[n[1]]=d,angular.element(o).css(s)}}}}}]),angular.module("ui.bootstrap.typeahead").run(function(){
!angular.$$csp().noInlineStyle&&!angular.$$uibTypeaheadCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'),
angular.$$uibTypeaheadCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),
angular.$$uibPositionCss=!0}),define("lib/angular-ui/typeahead",["angular"],function(){}),define("directives",["angular","util/CSSRequire","util/ActivityIndicatorDirective","util/mutators/ArrayAsTextDirective","util/CategorizedSelectDirective","misc/CertificateDirective","util/ClickToCopyTextComponent","util/CollapsibleDirective","misc/ConfigValueDirective","util/DatePickerDirective","util/DateTimePickerDirective","lib/angular-ui/dropdown","util/ErrorListDirective","util/HideNextDirective","util/LocalizableTextDirective","util/LocalizationDropdownDirective","util/MultiSelectDirective","util/MaxLengthDirective","misc/OptionsClassDirective","util/PaginationDirective","util/PasswordConfirmationDirective","misc/PublicSiteSelectDirective","misc/RadioGroupSettingDirective","misc/SettingDirective","util/ShowHideDebouncedDirectives","util/ShowHidePromiseDirectives","util/StatusMessageDirective","util/TableActivityIndicatorDirective","util/TimePickerDirective","util/SortTableDirective","util/ListComponent/ListComponent","util/ListComponent/ListColumnComponent","util/ListComponent/ListHFComponent","util/DisabledLinkHelper","util/DragDirectives","util/ColorPicker","public_site/PortalCustomizationComponent","util/ThreeStateCheckbox","lib/angular-ui/typeahead","text!lib/angular-ui/bootstrap-dropdown.css","text!lib/angular-ui/typeahead.css","text!/app/js/util/color-picker.css"],function(e,t,n,r,i,a,o,s,u,l,c,d,f,p,m,h,_,g,v,y,b,w,M,D,$,L,k,x,T,S,Y,C,E,A,F,j,P,O){
"use strict";t("/app/js/lib/angular-ui/bootstrap-dropdown.css"),t("/app/js/lib/angular-ui/typeahead.css"),t("/app/js/util/color-picker.css");var H=e.module("bg.admin.directives",["ui.bootstrap.typeahead"]).directive(n).directive(r).directive(d).directive(i).directive(a).component("bgClickToCopy",o).directive(s).directive(u).directive(l).directive(c).directive(f).directive(p).directive(m).directive(h).directive(_).directive(v).directive(y).directive(b).directive(w).directive(M).directive(D).directive($).directive(L).directive(k).directive(x).directive(T).directive(S).component("bgList",Y).component("bgListColumn",C).component("bgListHeaderFooter",E).config(A).directive(F).component("bgColorPicker",j).component("bgPortalCustomization",P).directive(O);
return"maxLength"in document.createElement("textarea")||H.directive(g),H}),define("HeadController",[],function(){"use strict";function e(e,t){e.pageTitle=t("#PRODUCT");
}return e.$inject=["$scope","TR"],e}),define("MainController",["angular","lodash"],function(e,t){"use strict";function n(n,r,i,a,o,s,u,l,c,d,f,p,m,h,_){
function g(t){return e.isArray(t)&&t.length>0&&e.isString(t[0])}function v(e,t){var r=n.$broadcast(e,t);r.handled||o.put(e,t)}var y,b;y=null,n.currentUserInfo=p,
n.Features=m,n.$on("$routeChangeSuccess",function(e,t,n){y=n?n.originalPath:null}),n.back=function(e){e?r.url(e):y&&r.url(y)},h.setSuccessStatus=function(t,n){
var r;if(e.isString(t)||g(t))r=t;else{if(!e.isString(t.message))return void u.warn(t);r=t.message}v(a.SUCCESS+"."+(n||this.$id),r)},h.setErrorStatus=function(t,n){
var r;t.data&&(t=t.data),r=e.isString(t)||g(t)?t:e.isString(t.message)?t.message:s("An unknown error occurred."),v(a.ERROR+"."+(n||this.$id),r),u.error(t);
},n.clearStatus=function(e){e=e||this.$id,n.$broadcast(a.CLEAR+"."+e)},n.clearAllStatuses=function(){n.$broadcast(a.CLEAR_ALL)},n.logout=function(){h.$broadcast("logout");
},n.refreshCurrentUserInfo=function(){var t=["id","username","public_display_name","private_display_name","perm_admin","rep_avatar_encoded","perm_admin_pushagents","perm_edit_sd_teams","perm_edit_jump_groups"];
return l.current({only:t.join(","),expand:"authObject(provider_id)"}).then(function(t){e.extend(p,t)})},n.refreshCurrentUserInfo(),n.securitySettingsIndex=d.index(),
n.clusterIndex=c.index(),n.globalWarnings={},n.warningsVisible=function(){return t.reduce(n.globalWarnings,function(e,t){return e&&t.show&&!t.seen},!0);
},n.$watch(function(){return f.get("global_warnings")},function(e){e&&(n.globalWarnings=f.getObject("global_warnings"))}),n.disableWarning=function(e){
n.globalWarnings[e].seen=!0,f.putObject("global_warnings",n.globalWarnings)},n.populateErrors=function(e,n){t.isObject(e)&&t.isObject(n)&&Object.keys(n).forEach(function(t){
e[t]?n[t]=e[t]:n[t]=null})},b=h.$on("$viewContentLoaded",function(){e.element("#mainActivityIndicator").remove(),_.removeClass(e.element("#footer"),"ng-hide"),
b()})}return n.$inject=["$scope","$location","$window","StatusTypes","StatusMessageCache","TR","$log","UserIndexService","clusterPaths","securitySettingsPaths","$cookies","currentUserInfo","Features","$rootScope","$animate"],
n}),define("nav/NavController",[],function(){"use strict";function e(e,t,n){function r(e){e.refresh=!1,n.putObject("nav",e)}e.Nav=t,t.refresh(),e.$watchCollection(function(){
return n.getObject("nav")},function(e){e&&e.refresh&&t.refresh().finally(function(){r(e)})})}return e.$inject=["$scope","Nav","$cookies"],e}),define("controllers",["angular","HeadController","MainController","nav/NavController"],function(e,t,n,r){
"use strict";return e.module("bg.admin.controllers",[]).controller({HeadController:t}).controller({MainController:n}).controller({NavController:r})}),define("util/YesNoFilter",[],function(){
"use strict";return{yesno:["TR",function(e){var t=e("Yes"),n=e("No");return function(e){return e?t:n}}]}}),define("filters",["angular","util/YesNoFilter"],function(e,t){
"use strict";return e.module("bg.admin.filters",[]).filter(t)}),function(e,t){"use strict";function n(){function e(e,n){return t.extend(Object.create(e),n);
}function n(e,t){var n=t.caseInsensitiveMatch,r={originalPath:e,regexp:e},i=r.keys=[];return e=e.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g,function(e,t,n,r){
var a="?"===r||"*?"===r?"?":null,o="*"===r||"*?"===r?"*":null;return i.push({name:n,optional:!!a}),t=t||"",""+(a?"":t)+"(?:"+(a?t:"")+(o&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"");
}).replace(/([\/$\*])/g,"\\$1"),r.regexp=new RegExp("^"+e+"$",n?"i":""),r}var r={};this.when=function(e,i){var a=t.copy(i);if(t.isUndefined(a.reloadOnSearch)&&(a.reloadOnSearch=!0),
t.isUndefined(a.caseInsensitiveMatch)&&(a.caseInsensitiveMatch=this.caseInsensitiveMatch),r[e]=t.extend(a,e&&n(e,a)),e){var o="/"==e[e.length-1]?e.substr(0,e.length-1):e+"/";
r[o]=t.extend({redirectTo:e},n(o,a))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(e){return"string"==typeof e&&(e={redirectTo:e}),
this.when(null,e),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(n,i,a,o,u,l,c){function d(e,t){
var n=t.keys,r={};if(!t.regexp)return null;var i=t.regexp.exec(e);if(!i)return null;for(var a=1,o=i.length;a<o;++a){var s=n[a-1],u=i[a];s&&u&&(r[s.name]=u);
}return r}function f(e){var r=y.current;_=m(),g=_&&r&&_.$$route===r.$$route&&t.equals(_.pathParams,r.pathParams)&&!_.reloadOnSearch&&!v,g||!r&&!_||n.$broadcast("$routeChangeStart",_,r).defaultPrevented&&e&&e.preventDefault();
}function p(){var e=y.current,r=_;g?(e.params=r.params,t.copy(e.params,a),n.$broadcast("$routeUpdate",e)):(r||e)&&(v=!1,y.current=r,r&&r.redirectTo&&(t.isString(r.redirectTo)?i.path(h(r.redirectTo,r.params)).search(r.params).replace():i.url(r.redirectTo(r.pathParams,i.path(),i.search())).replace()),
o.when(r).then(function(){if(r){var e,n,i=t.extend({},r.resolve);return t.forEach(i,function(e,n){i[n]=t.isString(e)?u.get(e):u.invoke(e,null,null,n)}),
t.isDefined(e=r.template)?t.isFunction(e)&&(e=e(r.params)):t.isDefined(n=r.templateUrl)&&(t.isFunction(n)&&(n=n(r.params)),t.isDefined(n)&&(r.loadedTemplateUrl=c.valueOf(n),
e=l(n))),t.isDefined(e)&&(i.$template=e),o.all(i)}}).then(function(i){r==y.current&&(r&&(r.locals=i,t.copy(r.params,a)),n.$broadcast("$routeChangeSuccess",r,e));
},function(t){r==y.current&&n.$broadcast("$routeChangeError",r,e,t)}))}function m(){var n,a;return t.forEach(r,function(r,o){!a&&(n=d(i.path(),r))&&(a=e(r,{
params:t.extend({},i.search(),n),pathParams:n}),a.$$route=r)}),a||r[null]&&e(r[null],{params:{},pathParams:{}})}function h(e,n){var r=[];return t.forEach((e||"").split(":"),function(e,t){
if(0===t)r.push(e);else{var i=e.match(/(\w+)(?:[?*])?(.*)/),a=i[1];r.push(n[a]),r.push(i[2]||""),delete n[a]}}),r.join("")}var _,g,v=!1,y={routes:r,reload:function(){
v=!0;var e={defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0,v=!1}};n.$evalAsync(function(){f(e),e.defaultPrevented||p()})},updateParams:function(e){
if(!this.current||!this.current.$$route)throw s("norout","Tried updating route when with no current route");e=t.extend({},this.current.params,e),i.path(h(this.current.$$route.originalPath,e)),
i.search(e)}};return n.$on("$locationChangeStart",f),n.$on("$locationChangeSuccess",p),y}]}function r(){this.$get=function(){return{}}}function i(e,n,r){
return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(i,a,o,s,u){function l(){p&&(r.cancel(p),p=null),d&&(d.$destroy(),d=null),
f&&(p=r.leave(f),p.then(function(){p=null}),f=null)}function c(){var o=e.current&&e.current.locals,s=o&&o.$template;if(t.isDefined(s)){var c=i.$new(),p=e.current,_=u(c,function(e){
r.enter(e,null,f||a).then(function(){!t.isDefined(m)||m&&!i.$eval(m)||n()}),l()});f=_,d=p.scope=c,d.$emit("$viewContentLoaded"),d.$eval(h)}else l()}var d,f,p,m=o.autoscroll,h=o.onload||"";
i.$on("$routeChangeSuccess",c),c()}}}function a(e,t,n){return{restrict:"ECA",priority:-400,link:function(r,i){var a=n.current,o=a.locals;i.html(o.$template);
var s=e(i.contents());if(a.controller){o.$scope=r;var u=t(a.controller,o);a.controllerAs&&(r[a.controllerAs]=u),i.data("$ngControllerController",u),i.children().data("$ngControllerController",u);
}r[a.resolveAs||"$resolve"]=o,s(r)}}}var o=t.module("ngRoute",["ng"]).provider("$route",n),s=t.$$minErr("ngRoute");o.provider("$routeParams",r),o.directive("ngView",i),
o.directive("ngView",a),i.$inject=["$route","$anchorScroll","$animate"],a.$inject=["$compile","$controller","$route"]}(window,window.angular),define("lib/angular/angular-route",["angular"],function(){}),
define("routes",["angular","lib/angular/angular-route"],function(e){"use strict";return e.module("bg.admin.routes",["ngRoute"]).config(["$routeProvider","$locationProvider",function(t,n){
var r=e.element("#htmlParams").data("startPath");t.when("/login",{redirectTo:function(){return r}}).otherwise({templateUrl:"/app/html/unknown_route.html"
}),n.html5Mode(!0)}])}),define("util/DependencyResolver",["angular","lodash"],function(e,t){"use strict";function n(e){return e.config(["$locationProvider","$controllerProvider","$compileProvider","$filterProvider","$provide","$animateProvider","$injector",function(n,i,s,u,l,c,d){
e.controller=r(e,d,i,"register"),e.directive=r(e,d,s,"directive"),e.filter=r(e,d,u,"register"),e.factory=r(e,d,l,"factory"),e.service=r(e,d,l,"service"),
e.constant=r(e,d,l,"constant"),e.require=function(){var n=t.isArray(arguments[0])?arguments[0]:Array.prototype.slice.call(arguments);return a("bg.admin.app"),
o({$controllerProvider:i,$compileProvider:s,$filterProvider:u,$provide:l,$injector:d,$animateProvider:c},n),e}}]),e}function r(e,t,n,r){return function(){
var i=arguments[0];return t.has(i)||n[r].apply(n,Array.prototype.slice.call(arguments)),e}}function i(t){return e.isString(t)&&(t=[t]),{resolver:["$q","$rootScope",function(e,n){
var r=e.defer();return require(t,function(){n.$apply(function(){r.resolve()})}),r.promise}]}}function a(n){if(!t.contains(s,n)){s.push(n);var r=e.module(n);
e.forEach(r.requires,a)}}function o(n,r){var i,a,u;if(r){var l=[];t.eachRight(r,function(r){if(i=e.module(r),u=t.difference(i.requires,s),u.length&&o(n,u),
t.contains(s,r))return null;s.push(r),l=l.concat(i._runBlocks);try{t.each(i._invokeQueue,function(e){return!!n.hasOwnProperty(e[0])&&(a=n[e[0]],void a[e[1]].apply(a,e[2]));
})}catch(e){throw e.message&&(e.message+=" from "+r),e}}),t.each(l,function(e){n.$injector.invoke(e)})}return null}var s=["ng"];return{lazifyModule:n,resolve:i
}}),define("util/RoutePaths",["lodash"],function(e){"use strict";var t=/:\w+/g,n=/\/?:\w+\?/g;return function(r){var i=this,a={};e.forOwn(r,function(r,o){
a[o]={value:r,paramMatches:r.match(t)||[]},i[o]=function(){var t,r;return t=a[o].value,arguments.length>0&&(r=e.toArray(arguments),a[o].paramMatches.length>0&&e.forEach(a[o].paramMatches,function(n,i){
e.isUndefined(r[i])||(t=t.replace(n,r[i]))})),t=t.replace(n,"")}})}}),define("access_sponsor/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["access_sponsor/main"]),r=t.lazifyModule(e.module("bg.admin.access_sponsor",[])),r.constant("accessSponsorPaths",new n({
index:"/login/access_sponsor",create:"/login/access_sponsor/create",edit:"/login/access_sponsor/:id/edit"})),r.config(["$routeProvider","accessSponsorPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/access_sponsor/index.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/access_sponsor/edit.html",
resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/access_sponsor/edit.html",resolve:i})}]),r}),define("api_configuration/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.api_configuration",[])),r.constant("apiPaths",new n({index:"/login/api_configuration",edit:"/login/api_field/:id/edit",
create:"/login/api_field/create",account_edit:"/login/api_account/:id/edit",account_create:"/login/api_account/create"})),i=t.resolve("api_configuration/main"),
window.TESTING||r.config(["$routeProvider","apiPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/api_configuration/index.html",resolve:i
}).when(t.create(),{templateUrl:"/app/js/admin/api_configuration/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/api_configuration/edit.html",
resolve:i}).when(t.account_create(),{templateUrl:"/app/js/admin/api_configuration/account/edit.html",resolve:i}).when(t.account_edit(),{templateUrl:"/app/js/admin/api_configuration/account/edit.html",
resolve:i})}]),r}),define("callback_button/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return i=t.resolve(["callback_button/main"]),
r=t.lazifyModule(e.module("bg.admin.callback_button",[])),r.constant("callbackButtonPaths",new n({index:"/login/callback_button",deploy:"/login/callback_button/deploy",
create:"/login/callback_button/create",edit:"/login/callback_button/:id/edit",importRegistry:"/login/callback_button/import_registry",downloadRegistry:"/login/callback_button/download_registry/:fileName"
})),r.config(["$routeProvider","callbackButtonPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/callback_button/index.html",resolve:i}).when(t.deploy(),{
templateUrl:"/app/js/admin/callback_button/deploy.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/callback_button/edit.html",resolve:i}).when(t.edit(),{
templateUrl:"/app/js/admin/callback_button/edit.html",resolve:i})}]),r}),define("canned_message/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["canned_message/main"]),r=t.lazifyModule(e.module("bg.admin.canned_message",[])),r.constant("cannedMessagePaths",new n({
index:"/login/canned_message",create:"/login/canned_message/create",edit:"/login/canned_message/:id/edit",createCategory:"/login/canned_message_category/create",
editCategory:"/login/canned_message_category/:id/edit"})),r.config(["$routeProvider","cannedMessagePaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/canned_message/index.html",
resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/canned_message/edit.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/canned_message/edit.html",
resolve:i}).when(t.createCategory(),{templateUrl:"/app/js/admin/canned_message/category/edit.html",resolve:i}).when(t.editCategory(),{templateUrl:"/app/js/admin/canned_message/category/edit.html",
resolve:i})}]),r}),define("canned_script/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return i=t.resolve(["canned_script/main"]),
r=t.lazifyModule(e.module("bg.admin.canned_script",[])),r.constant("cannedScriptPaths",new n({index:"/login/canned_script",create:"/login/canned_script/create",
edit:"/login/canned_script/:id/edit",createCategory:"/login/canned_script_category/create",createResource:"/login/canned_script_resource"})),r.config(["$routeProvider","cannedScriptPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/canned_script/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/canned_script/edit.html",
resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/canned_script/edit.html",resolve:i})}]),r}),define("cluster/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.cluster",[])),i=t.resolve(["cluster/main"]),r.constant("clusterPaths",new n({index:"/login/cluster",
create:"/login/cluster/create",edit:"/login/cluster/:id"})),window.TESTING||r.config(["$routeProvider","clusterPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/cluster/index.html",
resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/cluster/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/cluster/edit.html",resolve:i
})}]),r}),define("customer_notice/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.customer_notice",[])),
r.constant("customerNoticePaths",new n({index:"/login/customer_notice",create:"/login/customer_notice/create",edit:"/login/customer_notice/:id/edit",send:"/login/customer_notice/send/:id"
})),i=t.resolve("customer_notice/main"),window.TESTING||r.config(["$routeProvider","customerNoticePaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/customer_notice/index.html",
resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/customer_notice/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/customer_notice/edit.html",
resolve:i})}]),r}),define("custom_links/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.customLinks",[])),
i=t.resolve(["custom_links/main"]),r.constant("customLinkPaths",new n({index:"/login/custom_links",create:"/login/custom_links/create",edit:"/login/custom_links/:id/edit"
})),window.TESTING||r.config(["$routeProvider","customLinkPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/custom_links/index.html",resolve:i
}).when(t.create(),{templateUrl:"/app/js/admin/custom_links/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/custom_links/edit.html",resolve:i
})}]),r}),define("email_settings/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r=t.lazifyModule(e.module("bg.admin.emailSettings",[]));
return r.constant("emailPaths",new n({index:"/login/email_settings",putCACert:"/login/email_settings/ca_cert"})),window.TESTING||r.config(["$routeProvider","emailPaths",function(e,n){
e.when(n.index(),{templateUrl:"/app/js/admin/email_settings/emailSettings.html",resolve:t.resolve(["email_settings/main"])})}]),r}),define("embassy/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["embassy/main"]),r=t.lazifyModule(e.module("bg.admin.embassy",[])),r.constant("embassyPaths",new n({index:"/login/embassy",
create:"/login/embassy/create",edit:"/login/embassy/:team_id/edit",equilibrium:"/login/embassy/:team_id/edit?equilibrium",user_index:"/login/embassy_user",
user_create:"/login/embassy_user/create",user_show:"/login/embassy_user/:id",user_delete:"/login/embassy_user/:id",user_edit:"/login/embassy_user/:id/edit",
action:"/login/embassy_user/:id/:action",password:"/login/embassy_user/password/:id",route:"embassy"})),r.filter("lastAuth",["TR","nls",function(e,t){return function(n){
return n?t.formatDate("extdatetime",n):e("Never Authenticated")}}]),window.TESTING||r.config(["$routeProvider","embassyPaths",function(e,t){e.when(t.index(),{
templateUrl:"/app/js/admin/embassy/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/embassy/team_edit.html",resolve:i}).when(t.edit(),{
templateUrl:"/app/js/admin/embassy/team_edit.html",resolve:i}).when(t.equilibrium(),{templateUrl:"/app/js/admin/embassy/team_edit.html",resolve:i}).when(t.user_index(),{
templateUrl:"/app/js/admin/embassy/user_index.html",resolve:i}).when(t.user_create(),{templateUrl:"/app/js/admin/embassy/user_edit.html",resolve:i}).when(t.user_edit(),{
templateUrl:"/app/js/admin/embassy/user_edit.html",resolve:i}).when(t.password(),{templateUrl:"/app/js/admin/embassy/edit_password.html",resolve:i})}]),
r}),angular.module("ui.bootstrap",["ui.bootstrap.transition","ui.bootstrap.modal"]),angular.module("ui.bootstrap.transition",[]).factory("$transition",["$q","$timeout","$rootScope",function(e,t,n){
function r(e){for(var t in e)if(void 0!==a.style[t])return e[t]}var i=function(r,a,o){o=o||{};var s=e.defer(),u=i[o.animation?"animationEndEventName":"transitionEndEventName"],l=function(e){
n.$apply(function(){r.unbind(u,l),s.resolve(r)})};return u&&r.bind(u,l),t(function(){angular.isString(a)?r.addClass(a):angular.isFunction(a)?a(r):angular.isObject(a)&&r.css(a),
u||s.resolve(r)}),s.promise.cancel=function(){u&&r.unbind(u,l),s.reject("Transition cancelled")},s.promise},a=document.createElement("trans"),o={WebkitTransition:"webkitTransitionEnd",
MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"},s={WebkitTransition:"webkitAnimationEnd",MozTransition:"animationend",
OTransition:"oAnimationEnd",transition:"animationend"};return i.transitionEndEventName=r(o),i.animationEndEventName=r(s),i}]),angular.module("ui.bootstrap.modal",["ui.bootstrap.transition"]).factory("$$stackedMap",function(){
return{createNew:function(){var e=[];return{add:function(t,n){e.push({key:t,value:n})},get:function(t){for(var n=0;n<e.length;n++)if(t==e[n].key)return e[n];
},keys:function(){for(var t=[],n=0;n<e.length;n++)t.push(e[n].key);return t},top:function(){return e[e.length-1]},remove:function(t){for(var n=-1,r=0;r<e.length;r++)if(t==e[r].key){
n=r;break}return e.splice(n,1)[0]},removeTop:function(){return e.splice(e.length-1,1)[0]},length:function(){return e.length}}}}}).directive("modalBackdrop",["$timeout",function(e){
return{restrict:"EA",replace:!0,templateUrl:"app/js/lib/angular-ui/backdrop.html",link:function(t){t.animate=!1,e(function(){t.animate=!0})}}}]).directive("modalWindow",["$modalStack","$timeout",function(e,t){
return{restrict:"EA",scope:{index:"@",animate:"="},replace:!0,transclude:!0,templateUrl:function(e,t){return t.templateUrl||"app/js/lib/angular-ui/window.html";
},link:function(n,r,i){r.addClass(i.windowClass||""),n.size=i.size,t(function(){n.animate=!0,r[0].focus()}),n.close=function(t){var n=e.getTop();n&&n.value.backdrop&&"static"!=n.value.backdrop&&t.target===t.currentTarget&&(t.preventDefault(),
t.stopPropagation(),e.dismiss(n.key,"backdrop click"))}}}}]).factory("$modalStack",["$transition","$timeout","$document","$compile","$rootScope","$$stackedMap",function(e,t,n,r,i,a){
function o(){for(var e=-1,t=p.keys(),n=0;n<t.length;n++)p.get(t[n]).value.backdrop&&(e=n);return e}function s(e){var t=n.find("body").eq(0),r=p.get(e).value;
p.remove(e),l(r.modalDomEl,r.modalScope,300,function(){r.modalScope.$destroy(),t.toggleClass(f,p.length()>0),u()})}function u(){if(c&&o()==-1){var e=d;l(c,d,150,function(){
e.$destroy(),e=null}),c=void 0,d=void 0}}function l(n,r,i,a){function o(){o.done||(o.done=!0,n.remove(),a&&a())}r.animate=!1;var s=e.transitionEndEventName;
if(s){var u=t(o,i);n.bind(s,function(){t.cancel(u),o(),r.$apply()})}else t(o,0)}var c,d,f="modal-open",p=a.createNew(),m={};return i.$watch(o,function(e){
d&&(d.index=e)}),n.bind("keydown",function(e){var t;27===e.which&&(t=p.top(),t&&t.value.keyboard&&(e.preventDefault(),i.$apply(function(){m.dismiss(t.key,"escape key press");
})))}),m.open=function(e,t){p.add(e,{deferred:t.deferred,modalScope:t.scope,backdrop:t.backdrop,keyboard:t.keyboard});var a=n.find("body").eq(0),s=o();s>=0&&!c&&(d=i.$new(!0),
d.index=s,c=r("<div modal-backdrop></div>")(d),a.append(c));var u=angular.element("<div modal-window></div>");u.attr({"template-url":t.windowTemplateUrl,
"window-class":t.windowClass,size:t.size,index:p.length()-1,animate:"animate"}).html(t.content);var l=r(u)(t.scope);p.top().value.modalDomEl=l,a.append(l),
a.addClass(f)},m.close=function(e,t){var n=p.get(e).value;n&&(n.deferred.resolve(t),s(e))},m.dismiss=function(e,t){var n=p.get(e).value;n&&(n.deferred.reject(t),
s(e))},m.dismissAll=function(e){for(var t=this.getTop();t;)this.dismiss(t.key,e),t=this.getTop()},m.getTop=function(){return p.top()},m}]).provider("$modal",function(){
var e={options:{backdrop:!0,keyboard:!0},$get:["$injector","$rootScope","$q","$http","$templateCache","$controller","$modalStack",function(t,n,r,i,a,o,s){
function u(e){return e.template?r.when(e.template):i.get(e.templateUrl,{cache:a}).then(function(e){return e.data})}function l(e){var n=[];return angular.forEach(e,function(e,i){
(angular.isFunction(e)||angular.isArray(e))&&n.push(r.when(t.invoke(e)))}),n}var c={};return c.open=function(t){var i=r.defer(),a=r.defer(),c={result:i.promise,
opened:a.promise,close:function(e){s.close(c,e)},dismiss:function(e){s.dismiss(c,e)}};if(t=angular.extend({},e.options,t),t.resolve=t.resolve||{},!t.template&&!t.templateUrl)throw new Error("One of template or templateUrl options is required.");
var d=r.all([u(t)].concat(l(t.resolve)));return d.then(function(e){var r=(t.scope||n).$new();r.$close=c.close,r.$dismiss=c.dismiss;var a,u={},l=1;t.controller&&(u.$scope=r,
u.$modalInstance=c,angular.forEach(t.resolve,function(t,n){u[n]=e[l++]}),a=o(t.controller,u)),s.open(c,{scope:r,deferred:i,content:e[0],backdrop:t.backdrop,
keyboard:t.keyboard,windowClass:t.windowClass,windowTemplateUrl:t.windowTemplateUrl,size:t.size})},function(e){i.reject(e)}),d.then(function(){a.resolve(!0);
},function(){a.reject(!1)}),c},c}]};return e}),define("lib/angular-ui/modal",["angular"],function(){}),define("exit_survey/module",["angular","util/DependencyResolver","util/RoutePaths","lib/angular-ui/modal"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["exit_survey/main"]),r=t.lazifyModule(e.module("bg.admin.exit_survey",["ui.bootstrap.modal"])),r.constant("exitSurveyPaths",new n({
index:"/login/exit_survey",createCust:"/login/exit_survey/cust/create",createRep:"/login/exit_survey/rep/create",editCust:"/login/exit_survey/cust/:id/edit",
editRep:"/login/exit_survey/rep/:id/edit",chooseCust:"/login/exit_survey/cust/choose",chooseRep:"/login/exit_survey/rep/choose",previewCust:"/login/exit_survey/cust/preview",
previewRep:"/login/exit_survey/rep/preview"})),r.config(["$routeProvider","exitSurveyPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/exit_survey/index.html",
resolve:i}).when(t.editCust(),{templateUrl:"/app/js/admin/exit_survey/edit.html",resolve:i}).when(t.editRep(),{templateUrl:"/app/js/admin/exit_survey/edit.html",
resolve:i}).when(t.createCust(),{templateUrl:"/app/js/admin/exit_survey/edit.html",resolve:i}).when(t.createRep(),{templateUrl:"/app/js/admin/exit_survey/edit.html",
resolve:i}).when(t.chooseCust(),{templateUrl:"/app/js/admin/exit_survey/choose.html",resolve:i}).when(t.chooseRep(),{templateUrl:"/app/js/admin/exit_survey/choose.html",
resolve:i}).when(t.previewCust(),{templateUrl:"/app/js/admin/exit_survey/preview.html",resolve:i}).when(t.previewRep(),{templateUrl:"/app/js/admin/exit_survey/preview.html",
resolve:i})}]),r}),define("failover/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.failover",[])),
i=t.resolve(["failover/main"]),r.constant("failoverPaths",new n({index:"/login/failover",action:"/login/failover/:action"})),window.TESTING||r.config(["$routeProvider","failoverPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/failover/index.html",resolve:i})}]),r}),define("file_store/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.file_store",[])),i=t.resolve("file_store/main"),r.constant("fileUploadPaths",new n({index:"/login/file_store",
upload:"/login/file_store"})),window.TESTING||r.config(["$routeProvider","fileUploadPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/file_store/index.html",
resolve:i})}]),r}),define("group_policy/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return i=t.resolve(["group_policy/main",[]]),
r=t.lazifyModule(e.module("bg.admin.group_policy",[])),r.constant("groupPolicyPaths",new n({index:"/login/group_policy",create:"/login/group_policy/create",
edit:"/login/group_policy/:id/edit",copy:"/login/group_policy/:id/copy",show:"/login/group_policy/:id",import:"/login/group_policy/:id/import",import_new:"/login/group_policy/import",
export:"/login/group_policy/export",download:"/login/group_policy/download/:filename"})),window.TESTING||r.config(["$routeProvider","groupPolicyPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/group_policy/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/group_policy/edit.html",resolve:i
}).when(t.copy(),{templateUrl:"/app/js/admin/group_policy/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/group_policy/edit.html",resolve:i
})}]),r}),define("html_template/module",["angular","util/DependencyResolver"],function(e,t){"use strict";var n=t.lazifyModule(e.module("bg.admin.htmlTemplate",[]));
return window.TESTING||n.config(["$routeProvider",function(e){e.when("/login/html_template",{templateUrl:"/app/js/admin/html_template/html_template.html",
resolve:t.resolve(["html_template/main"])})}]),n}),define("ios_profile/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.ios_profile",[])),r.constant("iosProfilePaths",new n({index:"/login/ios_profile",create:"/login/ios_profile/create",
edit:"/login/ios_profile/:id/edit",destroy:"/login/ios_profile/:id/destroy",upload:"/login/ios_profile/upload"})),i=t.resolve("ios_profile/main"),window.TESTING||r.config(["$routeProvider","iosProfilePaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/ios_profile/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/ios_profile/edit.html",resolve:i
}).when(t.edit(),{templateUrl:"/app/js/admin/ios_profile/edit.html",resolve:i})}]),r}),define("issues/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.issue",[])),r.constant("issuesPaths",new n({index:"/login/issue",create:"/login/issue/create",
edit:"/login/issue/:id/edit"})),i=t.resolve("issues/main"),window.TESTING||r.config(["$routeProvider","issuesPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/issues/index.html",
resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/issues/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/issues/edit.html",resolve:i
})}]),r}),define("jump_policies/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return i=t.resolve(["jump_policies/main"]),
r=t.lazifyModule(e.module("bg.admin.jump_policies",[])),r.constant("jumpPoliciesPaths",new n({index:"/login/jump_policies",edit:"/login/jump_policies/:id/edit",
create:"/login/jump_policies/create",uploadCert:"/login/ticket_system/cert"})),window.TESTING||r.config(["$routeProvider","jumpPoliciesPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/jump_policies/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/jump_policies/edit.html",
resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/jump_policies/edit.html",resolve:i})}]),r}),define("kerberos_keytab/module",["angular","util/RoutePaths","util/DependencyResolver"],function(e,t,n){
"use strict";var r,i;return i=n.resolve("kerberos_keytab/main"),r=n.lazifyModule(e.module("bg.admin.kerberos_keytab",[])),r.constant("kerberosKeytabPaths",new t({
index:"/login/kerberos_keytab",create:"/login/kerberos_keytab/keytab"})),window.TESTING||r.config(["$routeProvider","kerberosKeytabPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/kerberos_keytab/index.html",resolve:i})}]),r}),define("languages/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["languages/main"]),r=t.lazifyModule(e.module("bg.admin.languages",[])),r.constant("languagePaths",new n({index:"/login/nls/languages",
edit:"/login/nls/languages/:id/edit"})),window.TESTING||r.config(["$routeProvider","languagePaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/languages/index.html",
resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/languages/edit.html",resolve:i})}]),r}),define("license/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.licensing",[])),i=t.resolve(["license/main"]),r.constant("licensePaths",new n({index:"/login/licensing",
create:"/login/licensing/create/:type",edit:"/login/licensing/:id/edit"})),window.TESTING||r.config(["$routeProvider","licensePaths",function(e,t){e.when(t.index(),{
templateUrl:"/app/js/admin/license/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/license/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/license/edit.html",
resolve:i})}]),r}),define("login_schedule/module",["angular","util/DependencyResolver"],function(e,t){"use strict";return t.lazifyModule(e.module("bg.admin.login_schedule",[]));
}),define("my_account/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.my_account",[])),
i=t.resolve("my_account/main"),r.constant("myAccountPaths",new n({index:"/login/my_account",launchWebConsole:"/login/web_console",launchRepConsole:"/login/my_account/download_brcs",
downloadRepClient:"/login/my_account/download_rep_client/:filename",download:"/login/my_account/download/:download/:platform",changeEmail:"/login/my_account/change-email",
changeDisplayNames:"/login/my_account/change-display-names",changePassword:"/login/my_account/change-password",setExtendedAvailability:"/login/my_account/set-extended-availability",
repAvatar:"/login/my_account/rep-avatar",generateMfaSecret:"/login/my_account/generate-mfa-secret",storeMfaSecret:"/login/my_account/store-mfa-secret",
removeMfaSecret:"/login/my_account/remove-mfa-secret"})),window.TESTING||r.config(["$routeProvider","myAccountPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/my_account/index.html",
resolve:i})}]),r}),define("option/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return i=t.resolve(["option/main"]),
r=t.lazifyModule(e.module("bg.admin.option",[])),r.constant("optionPaths",new n({index:"/login/sd_general"})),window.TESTING||r.config(["$routeProvider","optionPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/option/index.html",resolve:i})}]),r}),define("outbound_event/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.outboundHTTPEvent",[])),i=t.resolve(["outbound_event/main"]),r.constant("outboundEventPaths",new n({
index:"/login/outbound_event",createHTTP:"/login/outbound_event/http/create",editHTTP:"/login/outbound_event/http/:id/edit",createEmail:"/login/outbound_event/email/create",
editEmail:"/login/outbound_event/email/:id/edit"})),window.TESTING||r.config(["$routeProvider","outboundEventPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/outbound_event/index.html",
resolve:i}).when(t.createHTTP(),{templateUrl:"/app/js/admin/outbound_event/edit_http.html",resolve:i}).when(t.editHTTP(),{templateUrl:"/app/js/admin/outbound_event/edit_http.html",
resolve:i}).when(t.createEmail(),{templateUrl:"/app/js/admin/outbound_event/edit_email.html",resolve:i}).when(t.editEmail(),{templateUrl:"/app/js/admin/outbound_event/edit_email.html",
resolve:i})}]),r}),define("permission/module",["angular","util/DependencyResolver"],function(e,t){"use strict";var n,r;return r=t.resolve(["permission/main"]),
n=t.lazifyModule(e.module("bg.admin.permission",[]))}),define("pinned_sessions/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["pinned_sessions/main"]),r=t.lazifyModule(e.module("bg.admin.pinned_sessions",[])),r.constant("pinnedSessionsPaths",new n({
index:"/login/pinned_sessions",deploy:"/login/pinned_sessions/deploy"})),window.TESTING||r.config(["$routeProvider","pinnedSessionsPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/pinned_sessions/index.html",resolve:i}).when(t.deploy(),{templateUrl:"/app/js/admin/pinned_sessions/deploy.html",
resolve:i})}]),r}),define("presentation/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.presentation",[])),
r.constant("presentationPaths",new n({index:"/login/pd_client",submit:"/login/pd_client/upload-banner",revert:"/login/pd_client/revert-banner"})),i=t.resolve("presentation/main"),
window.TESTING||r.config(["$routeProvider","presentationPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/presentation/index.html",resolve:i
})}]),r}),define("public_site/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.publicSite",[])),
i=t.resolve(["public_site/main"]),r.constant("publicSitePaths",new n({index:"/login/public_site",create:"/login/public_site/create",edit:"/login/public_site/:id/edit"
})),window.TESTING||r.config(["$routeProvider","publicSitePaths","Features",function(e,t,n){e.when(t.index(),{templateUrl:"/app/js/admin/public_site/index.html",
resolve:i}),n.advanced?e.when(t.create(),{templateUrl:"/app/js/admin/public_site/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/public_site/edit.html",
resolve:i}):e.when(t.edit(),{templateUrl:"/app/js/admin/public_site/basic/edit.html",resolve:i})}]),r}),define("push_agent/module",["angular","util/RoutePaths","util/DependencyResolver"],function(e,t,n){
"use strict";var r,i;return i=n.resolve("push_agent/main"),r=n.lazifyModule(e.module("bg.admin.push_agent",[])),r.constant("pushAgentPaths",new t({index:"/login/push_agent",
create:"/login/push_agent/create",edit:"/login/push_agent/:push_agent_id/edit",download:"/login/push_agent/:push_agent_id/:platform/download"})),window.TESTING||r.config(["$routeProvider","pushAgentPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/push_agent/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/push_agent/edit.html",resolve:i
}).when(t.edit(),{templateUrl:"/app/js/admin/push_agent/edit.html",resolve:i})}]),r}),define("jump_item/module",["angular","util/RoutePaths","util/DependencyResolver"],function(e,t,n){
"use strict";var r,i;return i=n.resolve("jump_item/main"),r=n.lazifyModule(e.module("bg.admin.jump_item",[])),r.constant("jumpShortcutPaths",new t({index:"/login/jump_item",
download:"/login/jump_item/:jump_method/download",upload:"/login/jump_item/upload"})),window.TESTING||r.config(["$routeProvider","jumpShortcutPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/jump_item/index.html",resolve:i})}]),r}),define("real_time_chat_translation/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["real_time_chat_translation/main"]),r=t.lazifyModule(e.module("bg.admin.real_time_chat_translation",[])),r.constant("realTimeChatPaths",new n({
index:"/login/nls/real_time_chat",postCredentials:"/login/nls/real_time_chat/credentials"})),window.TESTING||r.config(["$routeProvider","realTimeChatPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/real_time_chat_translation/index.html",resolve:i})}]),r}),define("reports/module",["angular","util/RoutePaths","util/DependencyResolver","misc/ServerVarsService"],function(e,t,n,r){
"use strict";var i,a;return a=n.resolve("reports/main"),i=n.lazifyModule(e.module("bg.admin.reports",[])),i.constant("reportingPaths",new t({sd_reporting:"/login/sd_reporting",
pd_reporting:"/login/pd_reporting",license_reporting:"/login/license_reporting"})),window.TESTING||i.config(["$routeProvider","reportingPaths",function(e,t){
e.when(t.sd_reporting(),{templateUrl:"/app/js/admin/reports/index.html",controller:"SDReportController",resolve:a}).when(t.license_reporting(),{templateUrl:"/app/js/admin/reports/index.html",
controller:"LicenseReportController",resolve:a}),r.Features.basic?e.when(t.pd_reporting(),{templateUrl:"/app/js/admin/reports/index.html",controller:"SDReportController",
resolve:a}):e.when(t.pd_reporting(),{templateUrl:"/app/js/admin/reports/index.html",controller:"PDReportController",resolve:a})}]),i}),define("reports/compliance/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r=t.lazifyModule(e.module("bg.admin.compliance",[]));return r.constant("compliancePaths",new n({index:"/login/compliance"})),window.TESTING||r.config(["$routeProvider","compliancePaths",function(e,n){
e.when(n.index(),{templateUrl:"/app/js/admin/reports/compliance/index.html",resolve:t.resolve(["reports/compliance/main"])})}]),r}),define("rep_invite/module",["angular","util/DependencyResolver"],function(e,t){
"use strict";var n,r;return n=t.lazifyModule(e.module("bg.admin.rep_invite",[])),r=t.resolve("rep_invite/main"),window.TESTING||n.config(["$routeProvider",function(e){
e.when("/login/rep_invite",{templateUrl:"/app/js/admin/rep_invite/index.html",resolve:r})}]),n}),define("rep_profile/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.repProfile",[])),i=t.resolve(["rep_profile/main"]),r.constant("repProfilePaths",new n({
index:"/login/rep_profile"})),window.TESTING||r.config(["$routeProvider","repProfilePaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/rep_profile/index.html",
resolve:i})}]),r}),define("port_scan/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return i=t.resolve("port_scan/main"),
r=t.lazifyModule(e.module("bg.admin.port_scan",[])),r.constant("portScanPaths",new n({index:"/login/port_scan",showReport:"/login/port_scan/report"})),
window.TESTING||r.config(["$routeProvider","portScanPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/port_scan/index.html",resolve:i}).when(t.showReport(),{
controller:"PortScanReportController",templateUrl:"/app/js/admin/port_scan/report.html",resolve:{reportData:["$route","$q","$location","$injector",function(e,n,r,a){
var o=n.defer();return a.invoke(i.resolver).then(function(){a.invoke(["PortScan",function(n){n.showReport(e.current.params).then(function(e){o.resolve(e);
},function(e){n.lastError=e,r.url(t.index()),o.reject()})}])},function(){o.reject()}),o.promise}]}})}]),r}),define("sd_client/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.sdClient",[])),i=t.resolve(["sd_client/main"]),r.constant("sdClientPaths",new n({index:"/login/sd_client/:id?"
})),window.TESTING||r.config(["$routeProvider","sdClientPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/sd_client/index.html",resolve:i
})}]),r}),define("search/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return i=t.resolve(["search/main"]),
r=t.lazifyModule(e.module("bg.admin.search",[])),r.constant("searchPaths",new n({index:"/login/nls/search",edit:"/login/nls/search/sid/:id/edit",search:"/login/nls/search/edit",
fk:"/login/nls/search/fk/:fk/edit",sn:"/login/nls/search/sn/:sn/edit"})),window.TESTING||r.config(["$routeProvider","searchPaths",function(e,t){e.when(t.index(),{
templateUrl:"/app/js/admin/search/index.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/search/edit.html",resolve:i}).when(t.search(),{templateUrl:"/app/js/admin/search/edit.html",
resolve:i}).when(t.fk(),{templateUrl:"/app/js/admin/search/edit.html",resolve:i}).when(t.sn(),{templateUrl:"/app/js/admin/search/edit.html",resolve:i});
}]),r}),define("security_providers/module",["angular","util/RoutePaths","util/DependencyResolver"],function(e,t,n){"use strict";var r,i;return i=n.resolve("security_providers/main"),
r=n.lazifyModule(e.module("bg.admin.security_providers",[])),r.constant("securityProvidersPaths",new t({index:"/login/security_providers",create:"/login/security_providers/create/:type",
edit:"/login/security_providers/:id/edit",copy:"/login/security_providers/:id/copy",node:"/login/security_providers/:id/node",upgrade:"/login/security_providers/:id/upgrade",
certificate:"/login/security_providers/certificate",private_key:"/login/security_providers/private_key",metadata:"/login/security_providers/metadata",downloadMetadata:"/login/security_providers/:id/metadata",
downloadConnectionAgent:"/login/security_providers/LDAP/download_connection_agent",log:"/login/security_providers/:id/log"})),window.TESTING||r.config(["$routeProvider","securityProvidersPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/security_providers/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/security_providers/edit.html",
resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/security_providers/edit.html",resolve:i}).when(t.copy(),{templateUrl:"/app/js/admin/security_providers/edit.html",
resolve:i}).when(t.node(),{templateUrl:"/app/js/admin/security_providers/edit.html",resolve:i}).when(t.upgrade(),{templateUrl:"/app/js/admin/security_providers/edit.html",
resolve:i}).when(t.log(),{templateUrl:"/app/js/admin/security_providers/log.html",resolve:i})}]),r}),angular.module("checklist-model",[]).directive("checklistModel",["$parse","$compile",function(e,t){
function n(e,t){if(angular.isArray(e))for(var n=0;n<e.length;n++)if(angular.equals(e[n],t))return!0;return!1}function r(e,t){e=angular.isArray(e)?e:[];for(var n=0;n<e.length;n++)if(angular.equals(e[n],t))return e;
return e.push(t),e}function i(e,t){if(angular.isArray(e))for(var n=0;n<e.length;n++)if(angular.equals(e[n],t)){e.splice(n,1);break}return e}function a(a,o,s){
t(o)(a);var u=e(s.checklistModel),l=u.assign,c=e(s.checklistValue)(a.$parent);a.$watch("checked",function(e,t){if(e!==t){var n=u(a.$parent);e===!0?l(a.$parent,r(n,c)):l(a.$parent,i(n,c));
}}),a.$parent.$watch(s.checklistModel,function(e,t){a.checked=n(e,c)},!0)}return{restrict:"A",priority:1e3,terminal:!0,scope:!0,compile:function(e,t){if("INPUT"!==e[0].tagName||!e.attr("type","checkbox"))throw'checklist-model should be applied to `input[type="checkbox"]`.';
if(!t.checklistValue)throw"You should provide `checklist-value`.";return e.removeAttr("checklist-model"),e.attr("ng-model","checked"),a}}}]),define("lib/checklist-model",["angular"],function(){}),
define("security_settings/module",["angular","util/DependencyResolver","util/RoutePaths","lib/checklist-model"],function(e,t,n){"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.securitySettings",["checklist-model"])),
i=t.resolve(["security_settings/main"]),r.constant("securitySettingsPaths",new n({index:"/login/security_settings"})),window.TESTING||r.config(["$routeProvider","securitySettingsPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/security_settings/index.html",resolve:i})}]),r}),define("session_policy/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["session_policy/main",[]]),r=t.lazifyModule(e.module("bg.admin.session_policy",[])),r.constant("sapPaths",new n({
index:"/login/session_policy",create:"/login/session_policy/create",edit:"/login/session_policy/:id/edit",copy:"/login/session_policy/:id/copy",show:"/login/session_policy/:id",
import:"/login/session_policy/:id/import",import_new:"/login/session_policy/import",export:"/login/session_policy/export",download:"/login/session_policy/download/:filename"
})),window.TESTING||r.config(["$routeProvider","sapPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/session_policy/index.html",resolve:i
}).when(t.create(),{templateUrl:"/app/js/admin/session_policy/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/session_policy/edit.html",
resolve:i}).when(t.copy(),{templateUrl:"/app/js/admin/session_policy/edit.html",resolve:i}).when(t.show(),{templateUrl:"/app/js/admin/session_policy/edit.html",
resolve:i})}]),r}),define("site_settings/module",["angular","util/DependencyResolver"],function(e,t){"use strict";var n=t.lazifyModule(e.module("bg.admin.siteConfiguration",[]));
return window.TESTING||n.config(["$routeProvider",function(e){e.when("/login/site_settings",{templateUrl:"/app/js/admin/site_settings/index.html",resolve:t.resolve(["site_settings/main"])
})}]),n}),define("skill/module",["angular","util/DependencyResolver"],function(e,t){"use strict";var n=t.lazifyModule(e.module("bg.admin.skill",[]));return window.TESTING||n.config(["$routeProvider",function(e){
e.when("/login/skill",{templateUrl:"/app/js/admin/skill/edit.html",resolve:t.resolve(["skill/main"])})}]),n}),define("software_management/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.softwareManagement",[])),i=t.resolve(["software_management/main"]),r.constant("softwareManagementPaths",new n({
index:"/login/settings",action:"/login/settings/:action"})),window.TESTING||r.config(["$routeProvider","softwareManagementPaths",function(e,t){e.when(t.index(),{
templateUrl:"/app/js/admin/software_management/index.html",resolve:i})}]),r}),define("special_actions/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return r=t.lazifyModule(e.module("bg.admin.special_actions",[])),r.constant("specialActionPaths",new n({index:"/login/special_action",
create:"/login/special_action/create",edit:"/login/special_action/:id/edit",destroy:"/login/special_action/:id/destroy"})),i=t.resolve("special_actions/main"),
window.TESTING||r.config(["$routeProvider","specialActionPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/special_actions/index.html",
resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/special_actions/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/special_actions/edit.html",
resolve:i})}]),r}),define("status/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;return i=t.resolve(["status/main"]),
r=t.lazifyModule(e.module("bg.admin.status",[])),r.constant("statusPaths",new n({index:"/login/status",repIndex:"/login/status_representatives",action:"/login/status_representatives/:action/:id?",
featureIndex:"/login/new_features",endpointLicenseUsageReport:"/login/status/report/endpoint_license_usage_report"})),r.config(["$routeProvider","statusPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/status/index.html",resolve:i}).when(t.repIndex(),{templateUrl:"/app/js/admin/status/reps.html",resolve:i}).when(t.featureIndex(),{
templateUrl:"/app/js/admin/status/features.html",resolve:i})}]),r}),define("support/module",["angular","util/DependencyResolver"],function(e,t){"use strict";
var n=t.lazifyModule(e.module("bg.admin.support",[]));return window.TESTING||n.config(["$routeProvider",function(e){e.when("/login/support_settings",{templateUrl:"/app/js/admin/support/support.html",
resolve:t.resolve(["support/main"])})}]),n}),define("team/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){"use strict";var r,i;
return i=t.resolve(["team/main"]),r=t.lazifyModule(e.module("bg.admin.team",[])),r.constant("teamPaths",new n({index:"/login/team",create:"/login/team/create",
edit:"/login/team/:team_id/edit",equilibrium:"/login/team/:team_id/edit?equilibrium",route:"team"})),r.factory("TeamCache",["$cacheFactory",function(e){
return e("TeamCache")}]),window.TESTING||r.config(["$routeProvider","teamPaths",function(e,t){e.when(t.index(),{templateUrl:"/app/js/admin/team/index.html",
resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/team/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/team/edit.html",resolve:i
}).when(t.equilibrium(),{templateUrl:"/app/js/admin/team/edit.html",resolve:i})}]),r}),define("user/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["user/main"]),r=t.lazifyModule(e.module("bg.admin.user",[])),r.constant("userPaths",new n({index:"/login/user",
create:"/login/user/create",show:"/login/user/:id",delete:"/login/user/:id",edit:"/login/user/:id/edit",action:"/login/user/:id/:action",password:"/login/user/password/:id",
uploadRepAvatar:"/login/user/upload-rep-avatar/:id"})),r.filter("lastAuth",["TR","nls",function(e,t){return function(n){return n?t.formatDate("extdatetime",n):e("Never Authenticated");
}}]),r.factory("UserCache",["$cacheFactory",function(e){return e("UserCache")}]),window.TESTING||r.config(["$routeProvider","userPaths",function(e,t){e.when(t.index(),{
templateUrl:"/app/js/admin/user/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/user/edit.html",resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/user/edit.html",
resolve:i}).when(t.password(),{templateUrl:"/app/js/admin/user/edit_password.html",resolve:i})}]),r}),define("jump_item_roles/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["jump_item_roles/main"]),r=t.lazifyModule(e.module("bg.admin.jump_item_roles",[])),r.constant("jumpItemRolesPaths",new n({
index:"/login/jump_item_roles",create:"/login/jump_item_roles/create",edit:"/login/jump_item_roles/:id/edit"})),window.TESTING||r.config(["$routeProvider","jumpItemRolesPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/jump_item_roles/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/jump_item_roles/edit.html",
resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/jump_item_roles/edit.html",resolve:i})}]),r}),define("shared_jump_groups/module",["angular","util/DependencyResolver","util/RoutePaths"],function(e,t,n){
"use strict";var r,i;return i=t.resolve(["shared_jump_groups/main"]),r=t.lazifyModule(e.module("bg.admin.shared_jump_groups",[])),r.constant("sharedJumpGroupsPaths",new n({
index:"/login/shared_jump_groups",create:"/login/shared_jump_groups/create",edit:"/login/shared_jump_groups/:id/edit"})),window.TESTING||r.config(["$routeProvider","sharedJumpGroupsPaths",function(e,t){
e.when(t.index(),{templateUrl:"/app/js/admin/shared_jump_groups/index.html",resolve:i}).when(t.create(),{templateUrl:"/app/js/admin/shared_jump_groups/edit.html",
resolve:i}).when(t.edit(),{templateUrl:"/app/js/admin/shared_jump_groups/edit.html",resolve:i})}]),r}),define("app",["angular","lib/angular/angular-animate","lib/angular/angular-cookies","lib/angular/angular-resource","misc","services","directives","controllers","filters","routes","util/NLS","access_sponsor/module","api_configuration/module","callback_button/module","canned_message/module","canned_script/module","cluster/module","customer_notice/module","custom_links/module","email_settings/module","embassy/module","exit_survey/module","failover/module","file_store/module","group_policy/module","html_template/module","ios_profile/module","issues/module","jump_policies/module","kerberos_keytab/module","languages/module","license/module","login_schedule/module","my_account/module","option/module","outbound_event/module","permission/module","pinned_sessions/module","presentation/module","public_site/module","push_agent/module","jump_item/module","real_time_chat_translation/module","reports/module","reports/compliance/module","rep_invite/module","rep_profile/module","port_scan/module","sd_client/module","search/module","security_providers/module","security_settings/module","session_policy/module","site_settings/module","skill/module","software_management/module","special_actions/module","status/module","support/module","team/module","user/module","jump_item_roles/module","shared_jump_groups/module"],function(e){
"use strict";var t,n;return t=[],t.push("ngAnimate"),t.push("ngCookies"),t.push("ngResource"),n=Array.prototype.slice.call(arguments,1),e.forEach(n,function(e){
e&&e.name&&t.push(e.name)}),e.module("bg.admin.app",t)}),require.config({baseUrl:"/app/js/admin",waitSeconds:60,urlArgs:document.getElementById("htmlParams").getAttribute("data-cache-buster"),
paths:{lib:"../lib",util:"../util",jquery:"../lib/jquery",text:"../lib/text",conditional:"../lib/conditional",constants:"/login/constants",nls_config:"/login/nls/config",
nls_translation:"/login/nls/translation",angular:"../lib/angular/angular","angular-modal":"../lib/angular-modal/modal",restangular:"../lib/restangular",
lodash:"../lib/lodash.modern","angular-file-upload":"../lib/angular-file-upload",moment:"../lib/moment-with-locales",colors:"../lib/colorpicker/colors"
},shim:{angular:{deps:["jquery"],exports:"angular"},"lib/angular/angular-animate":{deps:["angular"]},"lib/angular/angular-cookies":{deps:["angular"]},"lib/angular/angular-route":{
deps:["angular"]},"lib/angular/angular-resource":{deps:["angular"]},"lib/jquery-ui":{deps:["jquery"]},"lib/angular-ui/sortable":{deps:["angular","lib/jquery-ui"]
},restangular:{deps:["angular","lodash"],exports:"Restangular"},"lib/angular-ui/typeahead":{deps:["angular"]},"lib/angular-ui/progressbar":{deps:["angular"]
},"lib/angular-ui/modal":{deps:["angular"]},"lib/angular-slider/slider":{deps:["angular"]},"lib/colorpicker/jqColorPicker":{deps:["jquery","colors"],exports:"jQuery.fn.colorPicker"
},"util/touchlog-client":{deps:["jquery"]},"lib/checklist-model":{deps:["angular"]}}}),require(["angular","util/CSSRequire","util/moment_config","app"],function(e){
"use strict";e.bootstrap(document.documentElement,["bg.admin.app"],{strictDi:!!window.COMPILED})}),define("main",function(){});