var Zepto=function(){function a(a){return null==a?String(a):U[V.call(a)]||"object"}function b(b){return"function"==a(b)}function c(a){return null!=a&&a==a.window}function d(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function e(b){return"object"==a(b)}function f(a){return e(a)&&!c(a)&&Object.getPrototypeOf(a)==Object.prototype}function g(a){return"number"==typeof a.length}function h(a){return D.call(a,function(a){return null!=a})}function i(a){return a.length>0?x.fn.concat.apply([],a):a}function j(a){return a.replace(/::/g,"index.html").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function k(a){return a in G?G[a]:G[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function l(a,b){return"number"!=typeof b||H[j(a)]?b:b+"px"}function m(a){var b,c
return F[a]||(b=E.createElement(a),E.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),F[a]=c),F[a]}function n(a){return"children"in a?C.call(a.children):x.map(a.childNodes,function(a){return 1==a.nodeType?a:void 0})}function o(a,b,c){for(w in b)c&&(f(b[w])||Z(b[w]))?(f(b[w])&&!f(a[w])&&(a[w]={}),Z(b[w])&&!Z(a[w])&&(a[w]=[]),o(a[w],b[w],c)):b[w]!==v&&(a[w]=b[w])}function p(a,b){return null==b?x(a):x(a).filter(b)}function q(a,c,d,e){return b(c)?c.call(a,d,e):c}function r(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function s(a,b){var c=a.className||"",d=c&&c.baseVal!==v
return b===v?d?c.baseVal:c:void(d?c.baseVal=b:a.className=b)}function t(a){try{return a?"true"==a||("false"==a?!1:"null"==a?null:+a+""==a?+a:/^[\[\{]/.test(a)?x.parseJSON(a):a):a}catch(b){return a}}function u(a,b){b(a)
for(var c=0,d=a.childNodes.length;d>c;c++)u(a.childNodes[c],b)}var v,w,x,y,z,A,B=[],C=B.slice,D=B.filter,E=window.document,F={},G={},H={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},I=/^\s*<(\w+|!)[^>]*>/,J=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,K=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,M=/([A-Z])/g,N=["val","css","html","text","data","width","height","offset"],O=["after","prepend","before","append"],P=E.createElement("table"),Q=E.createElement("tr"),R={tr:E.createElement("tbody"),tbody:P,thead:P,tfoot:P,td:Q,th:Q,"*":E.createElement("div")},S=/complete|loaded|interactive/,T=/^[\w-]*$/,U={},V=U.toString,W={},X=E.createElement("div"),Y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Z=Array.isArray||function(a){return a instanceof Array}
return W.matches=function(a,b){if(!b||!a||1!==a.nodeType)return!1
var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector
if(c)return c.call(a,b)
var d,e=a.parentNode,f=!e
return f&&(e=X).appendChild(a),d=~W.qsa(e,b).indexOf(a),f&&X.removeChild(a),d},z=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},A=function(a){return D.call(a,function(b,c){return a.indexOf(b)==c})},W.fragment=function(a,b,c){var d,e,g
return J.test(a)&&(d=x(E.createElement(RegExp.$1))),d||(a.replace&&(a=a.replace(K,"<$1></$2>")),b===v&&(b=I.test(a)&&RegExp.$1),b in R||(b="*"),g=R[b],g.innerHTML=""+a,d=x.each(C.call(g.childNodes),function(){g.removeChild(this)})),f(c)&&(e=x(d),x.each(c,function(a,b){N.indexOf(a)>-1?e[a](b):e.attr(a,b)})),d},W.Z=function(a,b){return a=a||[],a.__proto__=x.fn,a.selector=b||"",a},W.isZ=function(a){return a instanceof W.Z},W.init=function(a,c){var d
if(!a)return W.Z()
if("string"==typeof a)if(a=a.trim(),"<"==a[0]&&I.test(a))d=W.fragment(a,RegExp.$1,c),a=null
else{if(c!==v)return x(c).find(a)
d=W.qsa(E,a)}else{if(b(a))return x(E).ready(a)
if(W.isZ(a))return a
if(Z(a))d=h(a)
else if(e(a))d=[a],a=null
else if(I.test(a))d=W.fragment(a.trim(),RegExp.$1,c),a=null
else{if(c!==v)return x(c).find(a)
d=W.qsa(E,a)}}return W.Z(d,a)},x=function(a,b){return W.init(a,b)},x.extend=function(a){var b,c=C.call(arguments,1)
return"boolean"==typeof a&&(b=a,a=c.shift()),c.forEach(function(c){o(a,c,b)}),a},W.qsa=function(a,b){var c,e="#"==b[0],f=!e&&"."==b[0],g=e||f?b.slice(1):b,h=T.test(g)
return d(a)&&h&&e?(c=a.getElementById(g))?[c]:[]:1!==a.nodeType&&9!==a.nodeType?[]:C.call(h&&!e?f?a.getElementsByClassName(g):a.getElementsByTagName(b):a.querySelectorAll(b))},x.contains=E.documentElement.contains?function(a,b){return a!==b&&a.contains(b)}:function(a,b){for(;b&&(b=b.parentNode);)if(b===a)return!0
return!1},x.type=a,x.isFunction=b,x.isWindow=c,x.isArray=Z,x.isPlainObject=f,x.isEmptyObject=function(a){var b
for(b in a)return!1
return!0},x.inArray=function(a,b,c){return B.indexOf.call(b,a,c)},x.camelCase=z,x.trim=function(a){return null==a?"":String.prototype.trim.call(a)},x.uuid=0,x.support={},x.expr={},x.map=function(a,b){var c,d,e,f=[]
if(g(a))for(d=0;d<a.length;d++)c=b(a[d],d),null!=c&&f.push(c)
else for(e in a)c=b(a[e],e),null!=c&&f.push(c)
return i(f)},x.each=function(a,b){var c,d
if(g(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a
return a},x.grep=function(a,b){return D.call(a,b)},window.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){U["[object "+b+"]"]=b.toLowerCase()}),x.fn={forEach:B.forEach,reduce:B.reduce,push:B.push,sort:B.sort,indexOf:B.indexOf,concat:B.concat,map:function(a){return x(x.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return x(C.apply(this,arguments))},ready:function(a){return S.test(E.readyState)&&E.body?a(x):E.addEventListener("DOMContentLoaded",function(){a(x)},!1),this},get:function(a){return a===v?C.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return B.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return b(a)?this.not(this.not(a)):x(D.call(this,function(b){return W.matches(b,a)}))},add:function(a,b){return x(A(this.concat(x(a,b))))},is:function(a){return this.length>0&&W.matches(this[0],a)},not:function(a){var c=[]
if(b(a)&&a.call!==v)this.each(function(b){a.call(this,b)||c.push(this)})
else{var d="string"==typeof a?this.filter(a):g(a)&&b(a.item)?C.call(a):x(a)
this.forEach(function(a){d.indexOf(a)<0&&c.push(a)})}return x(c)},has:function(a){return this.filter(function(){return e(a)?x.contains(this,a):x(this).find(a).size()})},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0]
return a&&!e(a)?a:x(a)},last:function(){var a=this[this.length-1]
return a&&!e(a)?a:x(a)},find:function(a){var b,c=this
return b=a?"object"==typeof a?x(a).filter(function(){var a=this
return B.some.call(c,function(b){return x.contains(b,a)})}):1==this.length?x(W.qsa(this[0],a)):this.map(function(){return W.qsa(this,a)}):x()},closest:function(a,b){var c=this[0],e=!1
for("object"==typeof a&&(e=x(a));c&&!(e?e.indexOf(c)>=0:W.matches(c,a));)c=c!==b&&!d(c)&&c.parentNode
return x(c)},parents:function(a){for(var b=[],c=this;c.length>0;)c=x.map(c,function(a){return(a=a.parentNode)&&!d(a)&&b.indexOf(a)<0?(b.push(a),a):void 0})
return p(b,a)},parent:function(a){return p(A(this.pluck("parentNode")),a)},children:function(a){return p(this.map(function(){return n(this)}),a)},contents:function(){return this.map(function(){return C.call(this.childNodes)})},siblings:function(a){return p(this.map(function(a,b){return D.call(n(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return x.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=m(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var c=b(a)
if(this[0]&&!c)var d=x(a).get(0),e=d.parentNode||this.length>1
return this.each(function(b){x(this).wrapAll(c?a.call(this,b):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){x(this[0]).before(a=x(a))
for(var b;(b=a.children()).length;)a=b.first()
x(a).append(this)}return this},wrapInner:function(a){var c=b(a)
return this.each(function(b){var d=x(this),e=d.contents(),f=c?a.call(this,b):a
e.length?e.wrapAll(f):d.append(f)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var b=x(this);(a===v?"none"==b.css("display"):a)?b.show():b.hide()})},prev:function(a){return x(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return x(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return 0 in arguments?this.each(function(b){var c=this.innerHTML
x(this).empty().append(q(this,a,b,c))}):0 in this?this[0].innerHTML:null},text:function(a){return 0 in arguments?this.each(function(b){var c=q(this,a,b,this.textContent)
this.textContent=null==c?"":""+c}):0 in this?this[0].textContent:null},attr:function(a,b){var c
return"string"!=typeof a||1 in arguments?this.each(function(c){if(1===this.nodeType)if(e(a))for(w in a)r(this,w,a[w])
else r(this,a,q(this,b,c,this.getAttribute(a)))}):this.length&&1===this[0].nodeType?!(c=this[0].getAttribute(a))&&a in this[0]?this[0][a]:c:v},removeAttr:function(a){return this.each(function(){1===this.nodeType&&a.split(" ").forEach(function(a){r(this,a)},this)})},prop:function(a,b){return a=Y[a]||a,1 in arguments?this.each(function(c){this[a]=q(this,b,c,this[a])}):this[0]&&this[0][a]},data:function(a,b){var c="data-"+a.replace(M,"-$1").toLowerCase(),d=1 in arguments?this.attr(c,b):this.attr(c)
return null!==d?t(d):v},val:function(a){return 0 in arguments?this.each(function(b){this.value=q(this,a,b,this.value)}):this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(a){if(a)return this.each(function(b){var c=x(this),d=q(this,a,b,c.offset()),e=c.offsetParent().offset(),f={top:d.top-e.top,left:d.left-e.left}
"static"==c.css("position")&&(f.position="relative"),c.css(f)})
if(!this.length)return null
var b=this[0].getBoundingClientRect()
return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(b,c){if(arguments.length<2){var d,e=this[0]
if(!e)return
if(d=getComputedStyle(e,""),"string"==typeof b)return e.style[z(b)]||d.getPropertyValue(b)
if(Z(b)){var f={}
return x.each(b,function(a,b){f[b]=e.style[z(b)]||d.getPropertyValue(b)}),f}}var g=""
if("string"==a(b))c||0===c?g=j(b)+":"+l(b,c):this.each(function(){this.style.removeProperty(j(b))})
else for(w in b)b[w]||0===b[w]?g+=j(w)+":"+l(w,b[w])+";":this.each(function(){this.style.removeProperty(j(w))})
return this.each(function(){this.style.cssText+=";"+g})},index:function(a){return a?this.indexOf(x(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return a?B.some.call(this,function(a){return this.test(s(a))},k(a)):!1},addClass:function(a){return a?this.each(function(b){if("className"in this){y=[]
var c=s(this),d=q(this,a,b,c)
d.split(/\s+/g).forEach(function(a){x(this).hasClass(a)||y.push(a)},this),y.length&&s(this,c+(c?" ":"")+y.join(" "))}}):this},removeClass:function(a){return this.each(function(b){if("className"in this){if(a===v)return s(this,"")
y=s(this),q(this,a,b,y).split(/\s+/g).forEach(function(a){y=y.replace(k(a)," ")}),s(this,y.trim())}})},toggleClass:function(a,b){return a?this.each(function(c){var d=x(this),e=q(this,a,c,s(this))
e.split(/\s+/g).forEach(function(a){(b===v?!d.hasClass(a):b)?d.addClass(a):d.removeClass(a)})}):this},scrollTop:function(a){if(this.length){var b="scrollTop"in this[0]
return a===v?b?this[0].scrollTop:this[0].pageYOffset:this.each(b?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var b="scrollLeft"in this[0]
return a===v?b?this[0].scrollLeft:this[0].pageXOffset:this.each(b?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],b=this.offsetParent(),c=this.offset(),d=L.test(b[0].nodeName)?{top:0,left:0}:b.offset()
return c.top-=parseFloat(x(a).css("margin-top"))||0,c.left-=parseFloat(x(a).css("margin-left"))||0,d.top+=parseFloat(x(b[0]).css("border-top-width"))||0,d.left+=parseFloat(x(b[0]).css("border-left-width"))||0,{top:c.top-d.top,left:c.left-d.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||E.body;a&&!L.test(a.nodeName)&&"static"==x(a).css("position");)a=a.offsetParent
return a})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(a){var b=a.replace(/./,function(a){return a[0].toUpperCase()})
x.fn[a]=function(e){var f,g=this[0]
return e===v?c(g)?g["inner"+b]:d(g)?g.documentElement["scroll"+b]:(f=this.offset())&&f[a]:this.each(function(b){g=x(this),g.css(a,q(this,e,b,g[a]()))})}}),O.forEach(function(b,c){var d=c%2
x.fn[b]=function(){var b,e,f=x.map(arguments,function(c){return b=a(c),"object"==b||"array"==b||null==c?c:W.fragment(c)}),g=this.length>1
return f.length<1?this:this.each(function(a,b){e=d?b:b.parentNode,b=0==c?b.nextSibling:1==c?b.firstChild:2==c?b:null
var h=x.contains(E.documentElement,e)
f.forEach(function(a){if(g)a=a.cloneNode(!0)
else if(!e)return x(a).remove()
e.insertBefore(a,b),h&&u(a,function(a){null==a.nodeName||"SCRIPT"!==a.nodeName.toUpperCase()||a.type&&"text/javascript"!==a.type||a.src||window.eval.call(window,a.innerHTML)})})})},x.fn[d?b+"To":"insert"+(c?"Before":"After")]=function(a){return x(a)[b](this),this}}),W.Z.prototype=x.fn,W.uniq=A,W.deserializeValue=t,x.zepto=W,x}()
window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(a){function b(a){return a._zid||(a._zid=m++)}function c(a,c,f,g){if(c=d(c),c.ns)var h=e(c.ns)
return(q[b(a)]||[]).filter(function(a){return!(!a||c.e&&a.e!=c.e||c.ns&&!h.test(a.ns)||f&&b(a.fn)!==b(f)||g&&a.sel!=g)})}function d(a){var b=(""+a).split(".")
return{e:b[0],ns:b.slice(1).sort().join(" ")}}function e(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function f(a,b){return a.del&&!s&&a.e in t||!!b}function g(a){return u[a]||s&&t[a]||a}function h(c,e,h,i,k,m,n){var o=b(c),p=q[o]||(q[o]=[])
e.split(/\s/).forEach(function(b){if("ready"==b)return a(document).ready(h)
var e=d(b)
e.fn=h,e.sel=k,e.e in u&&(h=function(b){var c=b.relatedTarget
return!c||c!==this&&!a.contains(this,c)?e.fn.apply(this,arguments):void 0}),e.del=m
var o=m||h
e.proxy=function(a){if(a=j(a),!a.isImmediatePropagationStopped()){a.data=i
var b=o.apply(c,a._args==l?[a]:[a].concat(a._args))
return b===!1&&(a.preventDefault(),a.stopPropagation()),b}},e.i=p.length,p.push(e),"addEventListener"in c&&c.addEventListener(g(e.e),e.proxy,f(e,n))})}function i(a,d,e,h,i){var j=b(a);(d||"").split(/\s/).forEach(function(b){c(a,b,e,h).forEach(function(b){delete q[j][b.i],"removeEventListener"in a&&a.removeEventListener(g(b.e),b.proxy,f(b,i))})})}function j(b,c){return(c||!b.isDefaultPrevented)&&(c||(c=b),a.each(y,function(a,d){var e=c[a]
b[a]=function(){return this[d]=v,e&&e.apply(c,arguments)},b[d]=w}),(c.defaultPrevented!==l?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())&&(b.isDefaultPrevented=v)),b}function k(a){var b,c={originalEvent:a}
for(b in a)x.test(b)||a[b]===l||(c[b]=a[b])
return j(c,a)}var l,m=1,n=Array.prototype.slice,o=a.isFunction,p=function(a){return"string"==typeof a},q={},r={},s="onfocusin"in window,t={focus:"focusin",blur:"focusout"},u={mouseenter:"mouseover",mouseleave:"mouseout"}
r.click=r.mousedown=r.mouseup=r.mousemove="MouseEvents",a.event={add:h,remove:i},a.proxy=function(c,d){var e=2 in arguments&&n.call(arguments,2)
if(o(c)){var f=function(){return c.apply(d,e?e.concat(n.call(arguments)):arguments)}
return f._zid=b(c),f}if(p(d))return e?(e.unshift(c[d],c),a.proxy.apply(null,e)):a.proxy(c[d],c)
throw new TypeError("expected function")},a.fn.bind=function(a,b,c){return this.on(a,b,c)},a.fn.unbind=function(a,b){return this.off(a,b)},a.fn.one=function(a,b,c,d){return this.on(a,b,c,d,1)}
var v=function(){return!0},w=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"}
a.fn.delegate=function(a,b,c){return this.on(b,a,c)},a.fn.undelegate=function(a,b,c){return this.off(b,a,c)},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d,e,f){var g,j,m=this
return b&&!p(b)?(a.each(b,function(a,b){m.on(a,c,d,b,f)}),m):(p(c)||o(e)||e===!1||(e=d,d=c,c=l),(o(d)||d===!1)&&(e=d,d=l),e===!1&&(e=w),m.each(function(l,m){f&&(g=function(a){return i(m,a.type,e),e.apply(this,arguments)}),c&&(j=function(b){var d,f=a(b.target).closest(c,m).get(0)
return f&&f!==m?(d=a.extend(k(b),{currentTarget:f,liveFired:m}),(g||e).apply(f,[d].concat(n.call(arguments,1)))):void 0}),h(m,b,e,d,c,j||g)}))},a.fn.off=function(b,c,d){var e=this
return b&&!p(b)?(a.each(b,function(a,b){e.off(a,c,b)}),e):(p(c)||o(d)||d===!1||(d=c,c=l),d===!1&&(d=w),e.each(function(){i(this,b,d,c)}))},a.fn.trigger=function(b,c){return b=p(b)||a.isPlainObject(b)?a.Event(b):j(b),b._args=c,this.each(function(){b.type in t&&"function"==typeof this[b.type]?this[b.type]():"dispatchEvent"in this?this.dispatchEvent(b):a(this).triggerHandler(b,c)})},a.fn.triggerHandler=function(b,d){var e,f
return this.each(function(g,h){e=k(p(b)?a.Event(b):b),e._args=d,e.target=h,a.each(c(h,b.type||b),function(a,b){return f=b.proxy(e),e.isImmediatePropagationStopped()?!1:void 0})}),f},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return 0 in arguments?this.bind(b,a):this.trigger(b)}}),a.Event=function(a,b){p(a)||(b=a,a=b.type)
var c=document.createEvent(r[a]||"Events"),d=!0
if(b)for(var e in b)"bubbles"==e?d=!!b[e]:c[e]=b[e]
return c.initEvent(a,d,!0),j(c)}}(Zepto),function(a){function b(b,c,d){var e=a.Event(c)
return a(b).trigger(e,d),!e.isDefaultPrevented()}function c(a,c,d,e){return a.global?b(c||s,d,e):void 0}function d(b){b.global&&0===a.active++&&c(b,null,"ajaxStart")}function e(b){b.global&&!--a.active&&c(b,null,"ajaxStop")}function f(a,b){var d=b.context
return b.beforeSend.call(d,a,b)===!1||c(b,d,"ajaxBeforeSend",[a,b])===!1?!1:void c(b,d,"ajaxSend",[a,b])}function g(a,b,d,e){var f=d.context,g="success"
d.success.call(f,a,g,b),e&&e.resolveWith(f,[a,g,b]),c(d,f,"ajaxSuccess",[b,d,a]),i(g,b,d)}function h(a,b,d,e,f){var g=e.context
e.error.call(g,d,b,a),f&&f.rejectWith(g,[d,b,a]),c(e,g,"ajaxError",[d,e,a||b]),i(b,d,e)}function i(a,b,d){var f=d.context
d.complete.call(f,b,a),c(d,f,"ajaxComplete",[b,d]),e(d)}function j(){}function k(a){return a&&(a=a.split(";",2)[0]),a&&(a==x?"html":a==w?"json":u.test(a)?"script":v.test(a)&&"xml")||"text"}function l(a,b){return""==b?a:(a+"&"+b).replace(/[&?]{1,2}/,"?")}function m(b){b.processData&&b.data&&"string"!=a.type(b.data)&&(b.data=a.param(b.data,b.traditional)),!b.data||b.type&&"GET"!=b.type.toUpperCase()||(b.url=l(b.url,b.data),b.data=void 0)}function n(b,c,d,e){return a.isFunction(c)&&(e=d,d=c,c=void 0),a.isFunction(d)||(e=d,d=void 0),{url:b,data:c,success:d,dataType:e}}function o(b,c,d,e){var f,g=a.isArray(c),h=a.isPlainObject(c)
a.each(c,function(c,i){f=a.type(i),e&&(c=d?e:e+"["+(h||"object"==f||"array"==f?c:"")+"]"),!e&&g?b.add(i.name,i.value):"array"==f||!d&&"object"==f?o(b,i,d,c):b.add(c,i)})}var p,q,r=0,s=window.document,t=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,u=/^(?:text|application)\/javascript/i,v=/^(?:text|application)\/xml/i,w="application/json",x="text/html",y=/^\s*$/,z=s.createElement("a")
z.href=window.location.href,a.active=0,a.ajaxJSONP=function(b,c){if(!("type"in b))return a.ajax(b)
var d,e,i=b.jsonpCallback,j=(a.isFunction(i)?i():i)||"jsonp"+ ++r,k=s.createElement("script"),l=window[j],m=function(b){a(k).triggerHandler("error",b||"abort")},n={abort:m}
return c&&c.promise(n),a(k).on("load error",function(f,i){clearTimeout(e),a(k).off().remove(),"error"!=f.type&&d?g(d[0],n,b,c):h(null,i||"error",n,b,c),window[j]=l,d&&a.isFunction(l)&&l(d[0]),l=d=void 0}),f(n,b)===!1?(m("abort"),n):(window[j]=function(){d=arguments},k.src=b.url.replace(/\?(.+)=\?/,"?$1="+j),s.head.appendChild(k),b.timeout>0&&(e=setTimeout(function(){m("timeout")},b.timeout)),n)},a.ajaxSettings={type:"GET",beforeSend:j,success:j,error:j,complete:j,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:w,xml:"application/xml, text/xml",html:x,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},a.ajax=function(b){var c,e=a.extend({},b||{}),i=a.Deferred&&a.Deferred()
for(p in a.ajaxSettings)void 0===e[p]&&(e[p]=a.ajaxSettings[p])
d(e),e.crossDomain||(c=s.createElement("a"),c.href=e.url,c.href=c.href,e.crossDomain=z.protocol+"//"+z.host!=c.protocol+"//"+c.host),e.url||(e.url=window.location.toString()),m(e)
var n=e.dataType,o=/\?.+=\?/.test(e.url)
if(o&&(n="jsonp"),e.cache!==!1&&(b&&b.cache===!0||"script"!=n&&"jsonp"!=n)||(e.url=l(e.url,"_="+Date.now())),"jsonp"==n)return o||(e.url=l(e.url,e.jsonp?e.jsonp+"=?":e.jsonp===!1?"":"callback=?")),a.ajaxJSONP(e,i)
var r,t=e.accepts[n],u={},v=function(a,b){u[a.toLowerCase()]=[a,b]},w=/^([\w-]+:)\/\//.test(e.url)?RegExp.$1:window.location.protocol,x=e.xhr(),A=x.setRequestHeader
if(i&&i.promise(x),e.crossDomain||v("X-Requested-With","XMLHttpRequest"),v("Accept",t||"*/*"),(t=e.mimeType||t)&&(t.indexOf(",")>-1&&(t=t.split(",",2)[0]),x.overrideMimeType&&x.overrideMimeType(t)),(e.contentType||e.contentType!==!1&&e.data&&"GET"!=e.type.toUpperCase())&&v("Content-Type",e.contentType||"application/x-www-form-urlencoded"),e.headers)for(q in e.headers)v(q,e.headers[q])
if(x.setRequestHeader=v,x.onreadystatechange=function(){if(4==x.readyState){x.onreadystatechange=j,clearTimeout(r)
var b,c=!1
if(x.status>=200&&x.status<300||304==x.status||0==x.status&&"file:"==w){n=n||k(e.mimeType||x.getResponseHeader("content-type")),b=x.responseText
try{"script"==n?(1,eval)(b):"xml"==n?b=x.responseXML:"json"==n&&(b=y.test(b)?null:a.parseJSON(b))}catch(d){c=d}c?h(c,"parsererror",x,e,i):g(b,x,e,i)}else h(x.statusText||null,x.status?"error":"abort",x,e,i)}},f(x,e)===!1)return x.abort(),h(null,"abort",x,e,i),x
if(e.xhrFields)for(q in e.xhrFields)x[q]=e.xhrFields[q]
var B="async"in e?e.async:!0
x.open(e.type,e.url,B,e.username,e.password)
for(q in u)A.apply(x,u[q])
return e.timeout>0&&(r=setTimeout(function(){x.onreadystatechange=j,x.abort(),h(null,"timeout",x,e,i)},e.timeout)),x.send(e.data?e.data:null),x},a.get=function(){return a.ajax(n.apply(null,arguments))},a.post=function(){var b=n.apply(null,arguments)
return b.type="POST",a.ajax(b)},a.getJSON=function(){var b=n.apply(null,arguments)
return b.dataType="json",a.ajax(b)},a.fn.load=function(b,c,d){if(!this.length)return this
var e,f=this,g=b.split(/\s/),h=n(b,c,d),i=h.success
return g.length>1&&(h.url=g[0],e=g[1]),h.success=function(b){f.html(e?a("<div>").html(b.replace(t,"")).find(e):b),i&&i.apply(f,arguments)},a.ajax(h),this}
var A=encodeURIComponent
a.param=function(b,c){var d=[]
return d.add=function(b,c){a.isFunction(c)&&(c=c()),null==c&&(c=""),this.push(A(b)+"="+A(c))},o(d,b,c),d.join("&").replace(/%20/g,"+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b,c,d=[],e=function(a){return a.forEach?a.forEach(e):void d.push({name:b,value:a})}
return this[0]&&a.each(this[0].elements,function(d,f){c=f.type,b=f.name,b&&"fieldset"!=f.nodeName.toLowerCase()&&!f.disabled&&"submit"!=c&&"reset"!=c&&"button"!=c&&"file"!=c&&("radio"!=c&&"checkbox"!=c||f.checked)&&e(a(f).val())}),d},a.fn.serialize=function(){var a=[]
return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(0 in arguments)this.bind("submit",b)
else if(this.length){var c=a.Event("submit")
this.eq(0).trigger(c),c.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(a){"__proto__"in{}||a.extend(a.zepto,{Z:function(b,c){return b=b||[],a.extend(b,a.fn),b.selector=c||"",b.__Z=!0,b},isZ:function(b){return"array"===a.type(b)&&"__Z"in b}})
try{getComputedStyle(void 0)}catch(b){var c=getComputedStyle
window.getComputedStyle=function(a){try{return c(a)}catch(b){return null}}}}(Zepto),function(a){function b(){try{return e in a&&a[e]}catch(b){return!1}}var c,d={},e=(a.document,"localStorage")
d.disabled=!1,d.set=function(){},d.get=function(){},d.remove=function(){},d.clear=function(){},d.transact=function(a,b,c){var e=d.get(a)
null==c&&(c=b,b=null),"undefined"==typeof e&&(e=b||{}),c(e),d.set(a,e)},d.getAll=function(){},d.forEach=function(){},d.serialize=function(a){return JSON.stringify(a)},d.deserialize=function(a){if("string"!=typeof a)return void 0
try{return JSON.parse(a)}catch(b){return a||void 0}}
var f=/quota/i
b()&&(c=a[e],d.set=function(a,b){if(void 0===b)return d.remove(a)
try{c.setItem(a,d.serialize(b))}catch(g){(f.test(g.name)||f.test(g.message)||"Error"===g.name)&&new Error(e+" is full","store.html",56)}return b},d.get=function(a){return d.deserialize(c.getItem(a))},d.remove=function(a){c.removeItem(a)},d.clear=function(){c.clear()},d.getAll=function(){var a={}
return d.forEach(function(b,c){a[b]=c}),a},d.forEach=function(a){for(var b=0;b<c.length;b++){var e=c.key(b)
a(e,d.get(e))}})
try{var g="__storejs__"
d.set(g,g),d.get(g)!=g&&(d.disabled=!0),d.remove(g)}catch(h){d.disabled=!0}d.enabled=!d.disabled,"undefined"!=typeof module&&module.exports&&this.module!==module?module.exports=d:"function"==typeof define&&define.amd?define(d):a.store=d}(Function("return this")()),function(){"use strict"
function a(b,d){function e(a,b){return function(){return a.apply(b,arguments)}}var f
if(d=d||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=d.touchBoundary||10,this.layer=b,this.tapDelay=d.tapDelay||200,this.tapTimeout=d.tapTimeout||700,!a.notNeeded(b)){for(var g=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],h=this,i=0,j=g.length;j>i;i++)h[g[i]]=e(h[g[i]],h)
c&&(b.addEventListener("mouseover",this.onMouse,!0),b.addEventListener("mousedown",this.onMouse,!0),b.addEventListener("mouseup",this.onMouse,!0)),b.addEventListener("click",this.onClick,!0),b.addEventListener("touchstart",this.onTouchStart,!1),b.addEventListener("touchmove",this.onTouchMove,!1),b.addEventListener("touchend",this.onTouchEnd,!1),b.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(b.removeEventListener=function(a,c,d){var e=Node.prototype.removeEventListener
"click"===a?e.call(b,a,c.hijacked||c,d):e.call(b,a,c,d)},b.addEventListener=function(a,c,d){var e=Node.prototype.addEventListener
"click"===a?e.call(b,a,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(b,a,c,d)}),"function"==typeof b.onclick&&(f=b.onclick,b.addEventListener("click",function(a){f(a)},!1),b.onclick=null)}}var b=navigator.userAgent.indexOf("Windows Phone")>=0,c=navigator.userAgent.indexOf("Android")>0&&!b,d=/iP(ad|hone|od)/.test(navigator.userAgent)&&!b,e=d&&/OS 4_\d(_\d)?/.test(navigator.userAgent),f=d&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),g=navigator.userAgent.indexOf("BB10")>0
a.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0
break
case"input":if(d&&"file"===a.type||a.disabled)return!0
break
case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(a.className)},a.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0
case"select":return!c
case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly
default:return/\bneedsfocus\b/.test(a.className)}},a.prototype.sendClick=function(a,b){var c,d
document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},a.prototype.determineEventType=function(a){return c&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},a.prototype.focus=function(a){var b
d&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type&&"month"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},a.prototype.updateScrollParent=function(a){var b,c
if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a
do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c
break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},a.prototype.onTouchStart=function(a){var b,c,f
if(a.targetTouches.length>1)return!0
if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],d){if(f=window.getSelection(),f.rangeCount&&!f.isCollapsed)return!0
if(!e){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1
this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},a.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary
return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},a.prototype.onTouchMove=function(a){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},a.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},a.prototype.onTouchEnd=function(a){var b,g,h,i,j,k=this.targetElement
if(!this.trackingClick)return!0
if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0
if(a.timeStamp-this.trackingClickStart>this.tapTimeout)return!0
if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,g=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,f&&(j=a.changedTouches[0],k=document.elementFromPoint(j.pageX-window.pageXOffset,j.pageY-window.pageYOffset)||k,k.fastClickScrollParent=this.targetElement.fastClickScrollParent),h=k.tagName.toLowerCase(),"label"===h){if(b=this.findControl(k)){if(this.focus(k),c)return!1
k=b}}else if(this.needsFocus(k))return a.timeStamp-g>100||d&&window.top!==window&&"input"===h?(this.targetElement=null,!1):(this.focus(k),this.sendClick(k,a),d&&"select"===h||(this.targetElement=null,a.preventDefault()),!1)
return d&&!e&&(i=k.fastClickScrollParent,i&&i.fastClickLastScrollTop!==i.scrollTop)?!0:(this.needsClick(k)||(a.preventDefault(),this.sendClick(k,a)),!1)},a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},a.prototype.onMouse=function(a){return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},a.prototype.onClick=function(a){var b
return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},a.prototype.destroy=function(){var a=this.layer
c&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},a.notNeeded=function(a){var b,d,e
if("undefined"==typeof window.ontouchstart)return!0
if(d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c)return!0
if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0
if(d>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(g&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),e[1]>=10&&e[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(-1!==b.content.indexOf("user-scalable=no"))return!0
if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction?!0:"none"===a.style.touchAction?!0:!1},a.attach=function(b,c){return new a(b,c)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?(module.exports=a.attach,module.exports.FastClick=a):window.FastClick=a}(),function(){function n(a){return void 0!==a}function ba(){}function ca(a){a.Wb=function(){return a.qf?a.qf:a.qf=new a}}function da(a){var b=typeof a
if("object"==b){if(!a)return"null"
if(a instanceof Array)return"array"
if(a instanceof Object)return b
var c=Object.prototype.toString.call(a)
if("[object Window]"==c)return"object"
if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array"
if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else if("function"==b&&"undefined"==typeof a.call)return"object"
return b}function ea(a){return"array"==da(a)}function fa(a){var b=da(a)
return"array"==b||"object"==b&&"number"==typeof a.length}function p(a){return"string"==typeof a}function ga(a){return"number"==typeof a}function ha(a){return"function"==da(a)}function ia(a){var b=typeof a
return"object"==b&&null!=a||"function"==b}function ja(a){return a.call.apply(a.bind,arguments)}function ka(a,b){if(!a)throw Error()
if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2)
return function(){var d=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(d,c),a.apply(b,d)}}return function(){return a.apply(b,arguments)}}function q(){return q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka,q.apply(null,arguments)}function ma(a,b){function c(){}c.prototype=b.prototype,a.Wg=b.prototype,a.prototype=new c,a.prototype.constructor=a,a.Sg=function(a,c){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e]
return b.prototype[c].apply(a,d)}}function r(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function na(a,b){var c,d={}
for(c in a)d[c]=b.call(void 0,a[c],c,a)
return d}function oa(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1
return!0}function pa(a){var b,c=0
for(b in a)c++
return c}function qa(a){for(var b in a)return b}function ra(a){var b,c=[],d=0
for(b in a)c[d++]=a[b]
return c}function sa(a){var b,c=[],d=0
for(b in a)c[d++]=b
return c}function ta(a,b){for(var c in a)if(a[c]==b)return!0
return!1}function ua(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function va(a,b){var c=ua(a,b,void 0)
return c&&a[c]}function wa(a){for(var b in a)return!1
return!0}function xa(a){var b,c={}
for(b in a)c[b]=a[b]
return c}function za(a){for(var b,c,d=1;d<arguments.length;d++){c=arguments[d]
for(b in c)a[b]=c[b]
for(var e=0;e<ya.length;e++)b=ya[e],Object.prototype.hasOwnProperty.call(c,b)&&(a[b]=c[b])}}function Aa(a){if(a=String(a),/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a)}function Ba(){this.Rd=void 0}function Ca(a,b,c){switch(typeof b){case"string":Da(b,c)
break
case"number":c.push(isFinite(b)&&!isNaN(b)?b:"null")
break
case"boolean":c.push(b)
break
case"undefined":c.push("null")
break
case"object":if(null==b){c.push("null")
break}if(ea(b)){var d=b.length
c.push("[")
for(var e="",f=0;d>f;f++)c.push(e),e=b[f],Ca(a,a.Rd?a.Rd.call(b,String(f),e):e,c),e=","
c.push("]")
break}c.push("{"),d=""
for(f in b)Object.prototype.hasOwnProperty.call(b,f)&&(e=b[f],"function"!=typeof e&&(c.push(d),Da(f,c),c.push(":"),Ca(a,a.Rd?a.Rd.call(b,f,e):e,c),d=","))
c.push("}")
break
case"function":break
default:throw Error("Unknown type: "+typeof b)}}function Da(a,b){b.push('"',a.replace(Fa,function(a){if(a in Ea)return Ea[a]
var b=a.charCodeAt(0),c="\\u"
return 16>b?c+="000":256>b?c+="00":4096>b&&(c+="0"),Ea[a]=c+b.toString(16)}),'"')}function Ga(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^la()).toString(36)}function Ka(){this.Wa=-1}function La(){this.Wa=-1,this.Wa=64,this.R=[],this.me=[],this.Qf=[],this.Kd=[],this.Kd[0]=128
for(var a=1;a<this.Wa;++a)this.Kd[a]=0
this.ce=this.ac=0,this.reset()}function Ma(a,b,c){c||(c=0)
var d=a.Qf
if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4
else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4
for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16]
d[e]=4294967295&(f<<1|f>>>31)}b=a.R[0],c=a.R[1]
for(var g,h=a.R[2],i=a.R[3],j=a.R[4],e=0;80>e;e++)40>e?20>e?(f=i^c&(h^i),g=1518500249):(f=c^h^i,g=1859775393):60>e?(f=c&h|i&(c|h),g=2400959708):(f=c^h^i,g=3395469782),f=(b<<5|b>>>27)+f+j+g+d[e]&4294967295,j=i,i=h,h=4294967295&(c<<30|c>>>2),c=b,b=f
a.R[0]=a.R[0]+b&4294967295,a.R[1]=a.R[1]+c&4294967295,a.R[2]=a.R[2]+h&4294967295,a.R[3]=a.R[3]+i&4294967295,a.R[4]=a.R[4]+j&4294967295}function Ta(a,b){var c=Ua(a,b,void 0)
return 0>c?null:p(a)?a.charAt(c):a[c]}function Ua(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;d>f;f++)if(f in e&&b.call(c,e[f],f,a))return f
return-1}function Va(a,b){var c=Na(a,b)
c>=0&&t.splice.call(a,c,1)}function Wa(a,b,c){return 2>=arguments.length?t.slice.call(a,b):t.slice.call(a,b,c)}function Xa(a,b){a.sort(b||Ya)}function Ya(a,b){return a>b?1:b>a?-1:0}function fb(a,b){if(!fa(a))throw Error("encodeByteArray takes an array as a parameter")
gb()
for(var c=b?db:cb,d=[],e=0;e<a.length;e+=3){var f=a[e],g=e+1<a.length,h=g?a[e+1]:0,i=e+2<a.length,j=i?a[e+2]:0,k=f>>2,f=(3&f)<<4|h>>4,h=(15&h)<<2|j>>6,j=63&j
i||(j=64,g||(h=64)),d.push(c[k],c[f],c[h],c[j])}return d.join("")}function gb(){if(!cb){cb={},db={},eb={}
for(var a=0;65>a;a++)cb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),db[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),eb[db[a]]=a,a>=62&&(eb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a)]=a)}}function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)?a[b]:void 0}function hb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function ib(a){var b={}
return hb(a,function(a,c){b[a]=c}),b}function jb(a){var b=[]
return hb(a,function(a,c){ea(c)?Oa(c,function(c){b.push(encodeURIComponent(a)+"="+encodeURIComponent(c))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(c))}),b.length?"&"+b.join("&"):""}function kb(a){var b={}
return a=a.replace(/^\?/,"").split("&"),Oa(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])}),b}function x(a,b,c,d){var e
if(b>d?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c),e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".")}function z(a,b,c){var d=""
switch(b){case 1:d=c?"first":"First"
break
case 2:d=c?"second":"Second"
break
case 3:d=c?"third":"Third"
break
case 4:d=c?"fourth":"Fourth"
break
default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}return a=a+" failed: "+(d+" argument ")}function A(a,b,c,d){if((!d||n(c))&&!ha(c))throw Error(z(a,b,d)+"must be a valid function.")}function lb(a,b,c){if(n(c)&&(!ia(c)||null===c))throw Error(z(a,b,!0)+"must be a valid context object.")}function mb(a){return"undefined"!=typeof JSON&&n(JSON.parse)?JSON.parse(a):Aa(a)}function B(a){if("undefined"!=typeof JSON&&n(JSON.stringify))a=JSON.stringify(a)
else{var b=[]
Ca(new Ba,a,b),a=b.join("")}return a}function nb(){this.Td=C}function ob(){}function qb(a,b,c){this.Nf=a,this.Ka=b,this.Jd=c}function ub(){this.tb=[]}function vb(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Zb()
null===c||f.Z(c.Zb())||(a.tb.push(c),c=null),null===c&&(c=new wb(f)),c.add(e)}c&&a.tb.push(c)}function xb(a,b,c){vb(a,c),yb(a,function(a){return a.Z(b)})}function zb(a,b,c){vb(a,c),yb(a,function(a){return a.contains(b)||b.contains(a)})}function yb(a,b){for(var c=!0,d=0;d<a.tb.length;d++){var e=a.tb[d]
if(e)if(e=e.Zb(),b(e)){for(var e=a.tb[d],f=0;f<e.ud.length;f++){var g=e.ud[f]
if(null!==g){e.ud[f]=null
var h=g.Ub()
Ab&&Bb("event: "+g.toString()),Cb(h)}}a.tb[d]=null}else c=!1}c&&(a.tb=[])}function wb(a){this.qa=a,this.ud=[]}function D(a,b,c,d){this.type=a,this.Ja=b,this.Ya=c,this.Je=d,this.Pd=void 0}function Db(a){return new D(Eb,a)}function Fb(a,b,c,d){this.ue=b,this.Xd=c,this.Pd=d,this.td=a}function Gb(a,b,c){this.ue=a,this.error=b,this.path=c}function sb(a,b,c){this.B=a,this.$=b,this.Tb=c}function Hb(a){return a.$}function rb(a,b){return a.$&&!a.Tb||a.B.Ha(b)}function Ib(a){this.ag=a,this.Cd=null}function Jb(a,b){this.Jf={},this.Zd=new Ib(a),this.ca=b
var c=1e4+2e4*Math.random()
setTimeout(q(this.Ef,this),Math.floor(c))}function Kb(){this.Dc={}}function Lb(a,b,c){n(c)||(c=1),u(a.Dc,b)||(a.Dc[b]=0),a.Dc[b]+=c}function Ob(a){return a=a.toString(),Mb[a]||(Mb[a]=new Kb),Mb[a]}function Pb(a,b){var c=a.toString()
return Nb[c]||(Nb[c]=b()),Nb[c]}function E(a,b){this.name=a,this.S=b}function Qb(a,b){return new E(a,b)}function Rb(a,b){return Sb(a.name,b.name)}function Tb(a,b){return Sb(a,b)}function Ub(a,b,c){this.type=Vb,this.source=a,this.path=b,this.Ia=c}function Wb(a,b){this.type=Xb,this.source=Yb,this.path=a,this.Te=b}function Zb(a,b){this.type=$b,this.source=a,this.path=b}function ac(a,b){this.La=a,this.xa=b?b:bc}function cc(a,b){for(var c,d=a.xa,e=null;!d.e();){if(c=a.La(b,d.key),0===c){if(d.left.e())return e?e.key:null
for(d=d.left;!d.right.e();)d=d.right
return d.key}0>c?d=d.left:c>0&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}function dc(a,b,c,d,e){for(this.Sd=e||null,this.Ee=d,this.Pa=[],e=1;!a.e();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.Ee?a.left:a.right
else{if(0===e){this.Pa.push(a)
break}this.Pa.push(a),a=this.Ee?a.right:a.left}}function H(a){if(0===a.Pa.length)return null
var b,c=a.Pa.pop()
if(b=a.Sd?a.Sd(c.key,c.value):{key:c.key,value:c.value},a.Ee)for(c=c.left;!c.e();)a.Pa.push(c),c=c.right
else for(c=c.right;!c.e();)a.Pa.push(c),c=c.left
return b}function ec(a){if(0===a.Pa.length)return null
var b
return b=a.Pa,b=b[b.length-1],a.Sd?a.Sd(b.key,b.value):{key:b.key,value:b.value}}function fc(a,b,c,d,e){this.key=a,this.value=b,this.color=null!=c?c:!0,this.left=null!=d?d:bc,this.right=null!=e?e:bc}function gc(a){return a.left.e()?a:gc(a.left)}function ic(a){return a.left.e()?bc:(a.left.fa()||a.left.left.fa()||(a=jc(a)),a=a.X(null,null,null,ic(a.left),null),hc(a))}function hc(a){return a.right.fa()&&!a.left.fa()&&(a=mc(a)),a.left.fa()&&a.left.left.fa()&&(a=kc(a)),a.left.fa()&&a.right.fa()&&(a=lc(a)),a}function jc(a){return a=lc(a),a.right.left.fa()&&(a=a.X(null,null,null,null,kc(a.right)),a=mc(a),a=lc(a)),a}function mc(a){return a.right.X(null,null,a.color,a.X(null,null,!0,null,a.right.left),null)}function kc(a){return a.left.X(null,null,a.color,null,a.X(null,null,!0,a.left.right,null))}function lc(a){return a.X(null,null,!a.color,a.left.X(null,null,!a.left.color,null,null),a.right.X(null,null,!a.right.color,null,null))}function nc(){}function oc(a,b){return a&&"object"==typeof a?(J(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function pc(a,b){var c=new qc
return rc(a,new K(""),function(a,d){c.mc(a,sc(d,b))}),c}function sc(a,b){var c,d=a.A().K(),d=oc(d,b)
if(a.N()){var e=oc(a.Ba(),b)
return e!==a.Ba()||d!==a.A().K()?new tc(e,L(d)):a}return c=a,d!==a.A().K()&&(c=c.da(new tc(d))),a.U(M,function(a,d){var e=sc(d,b)
e!==d&&(c=c.Q(a,e))}),c}function K(a,b){if(1==arguments.length){this.o=a.split("index.html")
for(var c=0,d=0;d<this.o.length;d++)0<this.o[d].length&&(this.o[c]=this.o[d],c++)
this.o.length=c,this.Y=0}else this.o=a,this.Y=b}function N(a,b){var c=O(a)
if(null===c)return b
if(c===O(b))return N(G(a),G(b))
throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")")}function O(a){return a.Y>=a.o.length?null:a.o[a.Y]}function uc(a){return a.o.length-a.Y}function G(a){var b=a.Y
return b<a.o.length&&b++,new K(a.o,b)}function vc(a){return a.Y<a.o.length?a.o[a.o.length-1]:null}function wc(a,b){this.Qa=a.slice(),this.Ea=Math.max(1,this.Qa.length),this.hf=b
for(var c=0;c<this.Qa.length;c++)this.Ea+=xc(this.Qa[c])
yc(this)}function yc(a){if(768<a.Ea)throw Error(a.hf+"has a key path longer than 768 bytes ("+a.Ea+").")
if(32<a.Qa.length)throw Error(a.hf+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+zc(a))}function zc(a){return 0==a.Qa.length?"":"in property '"+a.Qa.join(".")+"'"}function Ac(){this.wc={}}function Bc(a){this.Ec=a,this.Od="firebase:"}function Cc(a){try{if("undefined"!=typeof window&&"undefined"!=typeof window[a]){var b=window[a]
return b.setItem("firebase:sentinel","cache"),b.removeItem("firebase:sentinel"),new Bc(b)}}catch(c){}return new Ac}function Ec(a,b,c,d,e){this.host=a.toLowerCase(),this.domain=this.host.substr(this.host.indexOf(".")+1),this.lb=b,this.Bb=c,this.Qg=d,this.Nd=e||"",this.Oa=Dc.get("host:"+a)||this.host}function Fc(a,b){b!==a.Oa&&(a.Oa=b,"s-"===a.Oa.substr(0,2)&&Dc.set("host:"+a.host,a.Oa))}function J(a,b){if(!a)throw Hc(b)}function Hc(a){return Error("Firebase (2.2.3) INTERNAL ASSERT FAILED: "+a)}function Ic(a){try{var b
if("undefined"!=typeof atob)b=atob(a)
else{gb()
for(var c=eb,d=[],e=0;e<a.length;){var f=c[a.charAt(e++)],g=e<a.length?c[a.charAt(e)]:0;++e
var h=e<a.length?c[a.charAt(e)]:64;++e
var i=e<a.length?c[a.charAt(e)]:64
if(++e,null==f||null==g||null==h||null==i)throw Error()
d.push(f<<2|g>>4),64!=h&&(d.push(g<<4&240|h>>2),64!=i&&d.push(h<<6&192|i))}if(8192>d.length)b=String.fromCharCode.apply(null,d)
else{for(a="",c=0;c<d.length;c+=8192)a+=String.fromCharCode.apply(null,Wa(d,c,c+8192))
b=a}}return b}catch(j){Bb("base64Decode failed: ",j)}return null}function Jc(a){var b=Kc(a)
a=new La,a.update(b)
var b=[],c=8*a.ce
56>a.ac?a.update(a.Kd,56-a.ac):a.update(a.Kd,a.Wa-(a.ac-56))
for(var d=a.Wa-1;d>=56;d--)a.me[d]=255&c,c/=256
for(Ma(a,a.me),d=c=0;5>d;d++)for(var e=24;e>=0;e-=8)b[c]=a.R[d]>>e&255,++c
return fb(b)}function Lc(){for(var a="",b=0;b<arguments.length;b++)a=fa(arguments[b])?a+Lc.apply(null,arguments[b]):"object"==typeof arguments[b]?a+B(arguments[b]):a+arguments[b],a+=" "
return a}function Bb(){if(!0===Mc&&(Mc=!1,null===Ab&&!0===P.get("logging_enabled")&&Nc(!0)),Ab){var a=Lc.apply(null,arguments)
Ab(a)}}function Oc(a){return function(){Bb(a,arguments)}}function Pc(){if("undefined"!=typeof console){var a="FIREBASE INTERNAL ERROR: "+Lc.apply(null,arguments)
"undefined"!=typeof console.error?console.error(a):console.log(a)}}function Qc(){var a=Lc.apply(null,arguments)
throw Error("FIREBASE FATAL ERROR: "+a)}function Q(){if("undefined"!=typeof console){var a="FIREBASE WARNING: "+Lc.apply(null,arguments)
"undefined"!=typeof console.warn?console.warn(a):console.log(a)}}function Rc(a){var b="",c="",d="",e="",f=!0,g="https",h=443
if(p(a)){var i=a.indexOf("//")
for(i>=0&&(g=a.substring(0,i-1),a=a.substring(i+2)),i=a.indexOf("index.html"),-1===i&&(i=a.length),b=a.substring(0,i),e="",a=a.substring(i).split("index.html"),i=0;i<a.length;i++)if(0<a[i].length){var j=a[i]
try{j=decodeURIComponent(j.replace(/\+/g," "))}catch(k){}e+="/"+j}a=b.split("."),3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]),i=b.indexOf(":"),i>=0&&(f="https"===g||"wss"===g,h=b.substring(i+1),isFinite(h)&&(h=String(h)),h=p(h)?/^\s*-?0x/i.test(h)?parseInt(h,16):parseInt(h,10):0/0)}return{host:b,port:h,domain:c,Ng:d,lb:f,scheme:g,$c:e}}function Sc(a){return ga(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}function Tc(a){if("complete"===document.readyState)a()
else{var b=!1,c=function(){document.body?b||(b=!0,a()):setTimeout(c,Math.floor(10))}
document.addEventListener?(document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()}),window.attachEvent("onload",c))}}function Sb(a,b){if(a===b)return 0
if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1
if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1
var c=Uc(a),d=Uc(b)
return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:b>a?-1:1}function Vc(a,b){if(b&&a in b)return b[a]
throw Error("Missing required key ("+a+") in object: "+B(b))}function Wc(a){if("object"!=typeof a||null===a)return B(a)
var b,c=[]
for(b in a)c.push(b)
c.sort(),b="{"
for(var d=0;d<c.length;d++)0!==d&&(b+=","),b+=B(c[d]),b+=":",b+=Wc(a[c[d]])
return b+"}"}function Xc(a,b){if(a.length<=b)return[a]
for(var c=[],d=0;d<a.length;d+=b)c.push(d+b>a?a.substring(d,a.length):a.substring(d,d+b))
return c}function Yc(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c])
else r(a,b)}function Zc(a){J(!Sc(a),"Invalid JSON number")
var b,c,d,e
for(0===a?(d=c=0,b=-1/0===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074)))),e=[],a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2)
for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2)
for(e.push(b?1:0),e.reverse(),b=e.join(""),c="",a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&(d="0"+d),c+=d
return c.toLowerCase()}function Uc(a){return $c.test(a)&&(a=Number(a),a>=-2147483648&&2147483647>=a)?a:null}function Cb(a){try{a()}catch(b){setTimeout(function(){throw Q("Exception was thrown by user callback.",b.stack||""),b},Math.floor(0))}}function R(a){if(ha(a)){var b=Array.prototype.slice.call(arguments,1).slice()
Cb(function(){a.apply(null,b)})}}function Kc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d)
e>=55296&&56319>=e&&(e-=55296,d++,J(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320)),128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=63&e|128)}return b}function xc(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c)
128>d?b++:2048>d?b+=2:d>=55296&&56319>=d?(b+=4,c++):b+=3}return b}function ad(a){var b={},c={},d={},e=""
try{var f=a.split("."),b=mb(Ic(f[0])||""),c=mb(Ic(f[1])||""),e=f[2],d=c.d||{}
delete c.d}catch(g){}return{Tg:b,Ac:c,data:d,Kg:e}}function bd(a){return a=ad(a).Ac,"object"==typeof a&&a.hasOwnProperty("iat")?w(a,"iat"):null}function cd(a){a=ad(a)
var b=a.Ac
return!!a.Kg&&!!b&&"object"==typeof b&&b.hasOwnProperty("iat")}function dd(a){this.V=a,this.g=a.n.g}function ed(a,b,c,d){var e=[],f=[]
return Oa(b,function(b){"child_changed"===b.type&&a.g.zd(b.Je,b.Ja)&&f.push(new D("child_moved",b.Ja,b.Ya))}),fd(a,e,"child_removed",b,d,c),fd(a,e,"child_added",b,d,c),fd(a,e,"child_moved",f,d,c),fd(a,e,"child_changed",b,d,c),fd(a,e,Eb,b,d,c),e}function fd(a,b,c,d,e,f){d=Pa(d,function(a){return a.type===c}),Xa(d,q(a.bg,a)),Oa(d,function(c){var d=gd(a,c,f)
Oa(e,function(e){e.Gf(c.type)&&b.push(e.createEvent(d,a.V))})})}function gd(a,b,c){return"value"!==b.type&&"child_removed"!==b.type&&(b.Pd=c.nf(b.Ya,b.Ja,a.g)),b}function hd(){this.eb={}}function id(a,b){var c=b.type,d=b.Ya
J("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking"),J(".priority"!==d,"Only non-priority child changes can be tracked.")
var e=w(a.eb,d)
if(e){var f=e.type
if("child_added"==c&&"child_removed"==f)a.eb[d]=new D("child_changed",b.Ja,d,e.Ja)
else if("child_removed"==c&&"child_added"==f)delete a.eb[d]
else if("child_removed"==c&&"child_changed"==f)a.eb[d]=new D("child_removed",e.Je,d)
else if("child_changed"==c&&"child_added"==f)a.eb[d]=new D("child_added",b.Ja,d)
else{if("child_changed"!=c||"child_changed"!=f)throw Hc("Illegal combination of changes: "+b+" occurred after "+e)
a.eb[d]=new D("child_changed",b.Ja,d,e.Je)}}else a.eb[d]=b}function jd(a,b,c){this.Pb=a,this.qb=b,this.sb=c||null}function kd(a,b,c){this.ga=a,this.qb=b,this.sb=c}function ld(a){this.g=a}function md(a){this.Be=new ld(a.g),this.g=a.g
var b
a.la?(b=nd(a),b=a.g.Oc(od(a),b)):b=a.g.Sc(),this.fd=b,a.na?(b=pd(a),a=a.g.Oc(qd(a),b)):a=a.g.Pc(),this.Fc=a}function rd(a){this.ra=new md(a),this.g=a.g,J(a.ia,"Only valid if limit has been set"),this.ja=a.ja,this.Ib=!sd(a)}function td(a,b,c,d,e,f){var g
if(a.Ib){var h=vd(a.g)
g=function(a,b){return h(b,a)}}else g=vd(a.g)
J(b.Cb()==a.ja,"")
var i=new E(c,d),j=a.Ib?wd(b,a.g):xd(b,a.g),k=a.ra.matches(i)
if(b.Ha(c)){var l=b.M(c),j=e.ye(a.g,j,a.Ib)
return null!=j&&j.name==c&&(j=e.ye(a.g,j,a.Ib)),e=null==j?1:g(j,i),k&&!d.e()&&e>=0?(null!=f&&id(f,new D("child_changed",d,c,l)),b.Q(c,d)):(null!=f&&id(f,new D("child_removed",l,c)),b=b.Q(c,C),null!=j&&a.ra.matches(j)?(null!=f&&id(f,new D("child_added",j.S,j.name)),b.Q(j.name,j.S)):b)}return d.e()?b:k&&0<=g(j,i)?(null!=f&&(id(f,new D("child_removed",j.S,j.name)),id(f,new D("child_added",d,c))),b.Q(c,d).Q(j.name,C)):b}function yd(a,b){this.ie=a,this.$f=b}function zd(a){this.I=a}function Hd(a,b,c,d,e,f){var g=b.D
if(null!=d.sc(c))return b
var h
if(c.e())J(Hb(b.u()),"If change path is empty, we must have complete server data"),b.u().Tb?(e=tb(b),d=d.xc(e instanceof T?e:C)):d=d.ua(tb(b)),f=a.I.ta(b.D.j(),d,f)
else{var i=O(c)
if(".priority"==i)J(1==uc(c),"Can't have a priority with additional path components"),f=g.j(),h=b.u().j(),d=d.kd(c,f,h),f=null!=d?a.I.da(f,d):g.j()
else{var j=G(c)
rb(g,i)?(h=b.u().j(),d=d.kd(c,g.j(),h),d=null!=d?g.j().M(i).G(j,d):g.j().M(i)):d=d.Xa(i,b.u()),f=null!=d?a.I.G(g.j(),i,d,e,f):g.j()}}return Fd(b,f,g.$||c.e(),a.I.Ga())}function Bd(a,b,c,d,e,f,g,h){var i=b.u()
if(g=g?a.I:a.I.Vb(),c.e())d=g.ta(i.j(),d,null)
else if(g.Ga()&&!i.Tb)d=i.j().G(c,d),d=g.ta(i.j(),d,null)
else{var j=O(c)
if((c.e()?!i.$||i.Tb:!rb(i,O(c)))&&1<uc(c))return b
d=i.j().M(j).G(G(c),d),d=".priority"==j?g.da(i.j(),d):g.G(i.j(),j,d,pb,null)}return i=i.$||c.e(),b=new Id(b.D,new sb(d,i,g.Ga())),Hd(a,b,c,e,new qb(e,b,f),h)}function Ad(a,b,c,d,e,f,g){var h=b.D
if(e=new qb(e,b,f),c.e())g=a.I.ta(b.D.j(),d,g),a=Fd(b,g,!0,a.I.Ga())
else if(f=O(c),".priority"===f)g=a.I.da(b.D.j(),d),a=Fd(b,g,h.$,h.Tb)
else{var i=G(c)
if(c=h.j().M(f),!i.e()){var j=e.mf(f)
d=null!=j?".priority"===vc(i)&&j.oa(i.parent()).e()?j:j.G(i,d):C}c.Z(d)?a=b:(g=a.I.G(h.j(),f,d,e,g),a=Fd(b,g,h.$,a.I.Ga()))}return a}function Dd(a,b,c,d,e,f,g){var h=b
return Kd(d,function(d,i){var j=c.w(d)
rb(b.D,O(j))&&(h=Ad(a,h,j,i,e,f,g))}),Kd(d,function(d,i){var j=c.w(d)
rb(b.D,O(j))||(h=Ad(a,h,j,i,e,f,g))}),h}function Ld(a,b){return Kd(b,function(b,c){a=a.G(b,c)}),a}function Ed(a,b,c,d,e,f,g,h){if(b.u().j().e()&&!Hb(b.u()))return b
var i=b
c=c.e()?d:Md(Nd,c,d)
var j=b.u().j()
return c.children.ha(function(c,d){if(j.Ha(c)){var k=b.u().j().M(c),k=Ld(k,d)
i=Bd(a,i,new K(c),k,e,f,g,h)}}),c.children.ha(function(c,d){var k=!Hb(b.u())&&null==d.value
j.Ha(c)||k||(k=b.u().j().M(c),k=Ld(k,d),i=Bd(a,i,new K(c),k,e,f,g,h))}),i}function Gd(a,b,c,d,e,f){if(null!=d.sc(c))return b
var g=new qb(d,b,e),h=e=b.D.j()
if(Hb(b.u())){if(c.e())e=d.ua(tb(b)),h=a.I.ta(b.D.j(),e,f)
else if(".priority"===O(c)){var i=d.Xa(O(c),b.u())
null==i||e.e()||e.A().Z(i)||(h=a.I.da(e,i))}else i=O(c),e=d.Xa(i,b.u()),null!=e&&(h=a.I.G(b.D.j(),i,e,g,f))
e=!0}else b.D.$||c.e()?(h=e,e=b.D.j(),e.N()||e.U(M,function(c){var e=d.Xa(c,b.u())
null!=e&&(h=a.I.G(h,c,e,g,f))}),e=b.D.$):(i=O(c),(1==uc(c)||rb(b.D,i))&&(c=d.Xa(i,b.u()),null!=c&&(h=a.I.G(e,i,c,g,f))),e=!1)
return Fd(b,h,e,a.I.Ga())}function Od(){}function vd(a){return q(a.compare,a)}function Rd(a){this.cc=a}function Td(){}function Ud(){}function Wd(){}function Zd(){this.Rb=this.na=this.Lb=this.la=this.ia=!1,this.ja=0,this.Nb="",this.ec=null,this.wb="",this.bc=null,this.ub="",this.g=M}function sd(a){return""===a.Nb?a.la:"l"===a.Nb}function od(a){return J(a.la,"Only valid if start has been set"),a.ec}function nd(a){return J(a.la,"Only valid if start has been set"),a.Lb?a.wb:"[MIN_NAME]"}function qd(a){return J(a.na,"Only valid if end has been set"),a.bc}function pd(a){return J(a.na,"Only valid if end has been set"),a.Rb?a.ub:"[MAX_NAME]"}function ae(a){var b=new Zd
return b.ia=a.ia,b.ja=a.ja,b.la=a.la,b.ec=a.ec,b.Lb=a.Lb,b.wb=a.wb,b.na=a.na,b.bc=a.bc,b.Rb=a.Rb,b.ub=a.ub,b.g=a.g,b}function be(a,b){var c=ae(a)
return c.g=b,c}function ce(a){var b={}
if(a.la&&(b.sp=a.ec,a.Lb&&(b.sn=a.wb)),a.na&&(b.ep=a.bc,a.Rb&&(b.en=a.ub)),a.ia){b.l=a.ja
var c=a.Nb
""===c&&(c=sd(a)?"l":"r"),b.vf=c}return a.g!==M&&(b.i=a.g.toString()),b}function de(a){return!(a.la||a.na||a.ia)}function ee(a){var b={}
if(de(a)&&a.g==M)return b
var c
return a.g===M?c="$priority":a.g===Yd?c="$value":(J(a.g instanceof Rd,"Unrecognized index type!"),c=a.g.toString()),b.orderBy=B(c),a.la&&(b.startAt=B(a.ec),a.Lb&&(b.startAt+=","+B(a.wb))),a.na&&(b.endAt=B(a.bc),a.Rb&&(b.endAt+=","+B(a.ub))),a.ia&&(sd(a)?b.limitToFirst=a.ja:b.limitToLast=a.ja),b}function fe(a,b){this.Ad=a,this.dc=b}function ge(a,b,c){var d=na(a.Ad,function(d,e){var f=w(a.dc,e)
if(J(f,"Missing index implementation for "+e),d===Pd){if(f.Hc(b.S)){for(var g=[],h=c.Xb(Qb),i=H(h);i;)i.name!=b.name&&g.push(i),i=H(h)
return g.push(b),he(g,vd(f))}return Pd}return f=c.get(b.name),g=d,f&&(g=g.remove(new E(b.name,f))),g.Na(b,b.S)})
return new fe(d,a.dc)}function ie(a,b,c){var d=na(a.Ad,function(a){if(a===Pd)return a
var d=c.get(b.name)
return d?a.remove(new E(b.name,d)):a})
return new fe(d,a.dc)}function tc(a,b){this.C=a,J(n(this.C)&&null!==this.C,"LeafNode shouldn't be created with null/undefined value."),this.ba=b||C,ke(this.ba),this.Ab=null}function T(a,b,c){this.m=a,(this.ba=b)&&ke(this.ba),a.e()&&J(!this.ba||this.ba.e(),"An empty node cannot have a priority"),this.vb=c,this.Ab=null}function wd(a,b){var c
return c=(c=oe(a,b))?(c=c.Rc())&&c.name:a.m.Rc(),c?new E(c,a.m.get(c)):null}function xd(a,b){var c
return c=(c=oe(a,b))?(c=c.fc())&&c.name:a.m.fc(),c?new E(c,a.m.get(c)):null}function oe(a,b){return b===Vd?null:a.vb.get(b.toString())}function L(a,b){if(null===a)return C
var c=null
if("object"==typeof a&&".priority"in a?c=a[".priority"]:"undefined"!=typeof b&&(c=b),J(null===c||"string"==typeof c||"number"==typeof c||"object"==typeof c&&".sv"in c,"Invalid priority type found: "+typeof c),"object"==typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]),"object"!=typeof a||".sv"in a)return new tc(a,L(c))
if(a instanceof Array){var d=C,e=a
return r(e,function(a,b){if(u(e,b)&&"."!==b.substring(0,1)){var c=L(a);(c.N()||!c.e())&&(d=d.Q(b,c))}}),d.da(L(c))}var f=[],g=!1,h=a
if(hb(h,function(a){if("string"!=typeof a||"."!==a.substring(0,1)){var b=L(h[a])
b.e()||(g=g||!b.A().e(),f.push(new E(a,b)))}}),0==f.length)return C
var i=he(f,Rb,function(a){return a.name},Tb)
if(g){var j=he(f,vd(M))
return new T(i,L(c),new fe({".priority":j},{".priority":M}))}return new T(i,L(c),je)}function qe(a){this.count=parseInt(Math.log(a+1)/pe,10),this.ff=this.count-1,this.Zf=a+1&parseInt(Array(this.count+1).join("1"),2)}function re(a){var b=!(a.Zf&1<<a.ff)
return a.ff--,b}function he(a,b,c,d){function e(b,d){var f=d-b
if(0==f)return null
if(1==f){var g=a[b],h=c?c(g):g
return new fc(h,g.S,!1,null,null)}var g=parseInt(f/2,10)+b,f=e(b,g),i=e(g+1,d),g=a[g],h=c?c(g):g
return new fc(h,g.S,!1,f,i)}a.sort(b)
var f=function(b){function d(b,d){var i=h-b,j=h
h-=b
var j=e(i+1,j),i=a[i],k=c?c(i):i,j=new fc(k,i.S,d,null,j)
f?f.left=j:g=j,f=j}for(var f=null,g=null,h=a.length,i=0;i<b.count;++i){var j=re(b),k=Math.pow(2,b.count-(i+1))
j?d(k,!1):(d(k,!1),d(k,!0))}return g}(new qe(a.length))
return null!==f?new ac(d||b,f):new ac(d||b)}function le(a){return"number"==typeof a?"number:"+Zc(a):"string:"+a}function ke(a){if(a.N()){var b=a.K()
J("string"==typeof b||"number"==typeof b||"object"==typeof b&&u(b,".sv"),"Priority must be a string or number.")}else J(a===Sd||a.e(),"priority of unexpected type.")
J(a===Sd||a.A().e(),"Priority nodes can't have a priority of their own.")}function se(){T.call(this,new ac(Tb),C,je)}function Id(a,b){this.D=a,this.Vd=b}function Fd(a,b,c,d){return new Id(new sb(b,c,d),a.Vd)}function Jd(a){return a.D.$?a.D.j():null}function tb(a){return a.Vd.$?a.Vd.j():null}function te(a,b){this.V=a
var c=a.n,d=new ld(c.g),c=de(c)?new ld(c.g):c.ia?new rd(c):new md(c)
this.Cf=new zd(c)
var e=b.u(),f=b.D,g=d.ta(C,e.j(),null),h=c.ta(C,f.j(),null)
this.Ka=new Id(new sb(h,f.$,c.Ga()),new sb(g,e.$,d.Ga())),this.Za=[],this.fg=new dd(a)}function ue(a){return a.V}function we(a,b){var c=a.Ka.D,d=[]
return c.j().N()||c.j().U(M,function(a,b){d.push(new D("child_added",b,a))}),c.$&&d.push(Db(c.j())),ve(a,d,c.j(),b)}function ve(a,b,c,d){return ed(a.fg,b,c,d?[d]:a.Za)}function xe(a,b,c){this.type=Cd,this.source=a,this.path=b,this.children=c}function ye(a,b,c,d){this.we=a,this.lf=b,this.Hb=c,this.Ze=d,J(!d||b,"Tagged queries must be from server.")}function Ae(a,b){this.f=Oc("p:rest:"),this.H=a,this.Fb=b,this.Fa=null,this.aa={}}function Be(a,b){if(n(b))return"tag$"+b
var c=a.n
return J(de(c)&&c.g==M,"should have a tag if it's not a default query."),a.path.toString()}function Ce(a,b,c,d){c=c||{},c.format="export",a.Fa&&(c.auth=a.Fa)
var e=(a.H.lb?"https://":"http://")+a.H.host+b+"?"+jb(c)
a.f("Sending REST request for "+e)
var f=new XMLHttpRequest
f.onreadystatechange=function(){if(d&&4===f.readyState){a.f("REST Response for "+e+" received. status:",f.status,"response:",f.responseText)
var b=null
if(200<=f.status&&300>f.status){try{b=mb(f.responseText)}catch(c){Q("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==f.status&&Q("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status)
d=null}},f.open("GET.html",e,!0),f.send()}function De(a,b){this.value=a,this.children=b||Ee}function Fe(a){var b=Nd
return r(a,function(a,c){b=b.set(new K(c),a)}),b}function Ge(a,b,c){if(null!=a.value&&c(a.value))return{path:F,value:a.value}
if(b.e())return null
var d=O(b)
return a=a.children.get(d),null!==a?(b=Ge(a,G(b),c),null!=b?{path:new K(d).w(b.path),value:b.value}:null):null}function He(a,b){return Ge(a,b,function(){return!0})}function Md(a,b,c){if(b.e())return c
var d=O(b)
return b=Md(a.children.get(d)||Nd,G(b),c),d=b.e()?a.children.remove(d):a.children.Na(d,b),new De(a.value,d)}function Ie(a,b){return Je(a,F,b)}function Je(a,b,c){var d={}
return a.children.ha(function(a,e){d[a]=Je(e,b.w(a),c)}),c(b,a.value,d)}function Ke(a,b,c){return Le(a,b,F,c)}function Le(a,b,c,d){var e=a.value?d(c,a.value):!1
return e?e:b.e()?null:(e=O(b),(a=a.children.get(e))?Le(a,G(b),c.w(e),d):null)}function Me(a,b,c){var d=F
if(!b.e()){var e=!0
a.value&&(e=c(d,a.value)),!0===e&&(e=O(b),(a=a.children.get(e))&&Ne(a,G(b),d.w(e),c))}}function Ne(a,b,c,d){if(b.e())return a
a.value&&d(c,a.value)
var e=O(b)
return(a=a.children.get(e))?Ne(a,G(b),c.w(e),d):Nd}function Kd(a,b){Oe(a,F,b)}function Oe(a,b,c){a.children.ha(function(a,d){Oe(d,b.w(a),c)}),a.value&&c(b,a.value)}function Pe(a,b){a.children.ha(function(a,c){c.value&&b(a,c.value)})}function Qe(a){this.W=a}function Se(a,b,c){if(b.e())return new Qe(new De(c))
var d=He(a.W,b)
if(null!=d){var e=d.path,d=d.value
return b=N(e,b),d=d.G(b,c),new Qe(a.W.set(e,d))}return a=Md(a.W,b,new De(c)),new Qe(a)}function Te(a,b,c){var d=a
return hb(c,function(a,c){d=Se(d,b.w(a),c)}),d}function Ue(a,b){var c=He(a.W,b)
return null!=c?a.W.get(c.path).oa(N(c.path,b)):null}function Ve(a){var b=[],c=a.W.value
return null!=c?c.N()||c.U(M,function(a,c){b.push(new E(a,c))}):a.W.children.ha(function(a,c){null!=c.value&&b.push(new E(a,c.value))}),b}function We(a,b){if(b.e())return a
var c=Ue(a,b)
return new Qe(null!=c?new De(c):a.W.subtree(b))}function Xe(a,b,c){if(null!=b.value)return c.G(a,b.value)
var d=null
return b.children.ha(function(b,e){".priority"===b?(J(null!==e.value,"Priority writes must always be leaf nodes"),d=e.value):c=Xe(a.w(b),e,c)}),c.oa(a).e()||null===d||(c=c.G(a.w(".priority"),d)),c}function Ye(){this.T=Re,this.za=[],this.Lc=-1}function Ze(a,b){return a.Ia?a.path.contains(b):!!ua(a.children,function(c,d){return a.path.w(d).contains(b)})}function af(a){return a.visible}function $e(a,b,c){for(var d=Re,e=0;e<a.length;++e){var f=a[e]
if(b(f)){var g=f.path
if(f.Ia)c.contains(g)?(g=N(c,g),d=Se(d,g,f.Ia)):g.contains(c)&&(g=N(g,c),d=Se(d,F,f.Ia.oa(g)))
else{if(!f.children)throw Hc("WriteRecord should have .snap or .children")
c.contains(g)?(g=N(c,g),d=Te(d,g,f.children)):g.contains(c)&&(g=N(g,c),g.e()?d=Te(d,F,f.children):(f=w(f.children,O(g)))&&(f=f.oa(G(g)),d=Se(d,F,f)))}}}return d}function bf(a,b){this.Mb=a,this.W=b}function cf(){this.ya={}}function ef(a){return Pa(ra(a.ya),function(a){return!de(a.V.n)})}function ff(a,b){if(de(b.n))return df(a)
var c=b.wa()
return w(a.ya,c)}function df(a){return va(a.ya,function(a){return de(a.V.n)})||null}function gf(a){this.sa=Nd,this.Gb=new Ye,this.Ye={},this.kc={},this.Mc=a}function hf(a,b,c,d,e){var f=a.Gb,g=e
return J(d>f.Lc,"Stacking an older write on top of newer ones"),n(g)||(g=!0),f.za.push({path:b,Ia:c,je:d,visible:g}),g&&(f.T=Se(f.T,b,c)),f.Lc=d,e?jf(a,new Ub(Yb,b,c)):[]}function kf(a,b,c,d){var e=a.Gb
return J(d>e.Lc,"Stacking an older merge on top of newer ones"),e.za.push({path:b,children:c,je:d,visible:!0}),e.T=Te(e.T,b,c),e.Lc=d,c=Fe(c),jf(a,new xe(Yb,b,c))}function lf(a,b,c){return c=c||!1,b=a.Gb.Qd(b),null==b?[]:jf(a,new Wb(b,c))}function mf(a,b,c){return c=Fe(c),jf(a,new xe(ze,b,c))}function nf(a,b,c,d){if(d=of(a,d),null!=d){var e=pf(d)
return d=e.path,e=e.Hb,b=N(d,b),c=new Ub(new ye(!1,!0,e,!0),b,c),qf(a,d,c)}return[]}function rf(a,b,c,d){if(d=of(a,d)){var e=pf(d)
return d=e.path,e=e.Hb,b=N(d,b),c=Fe(c),c=new xe(new ye(!1,!0,e,!0),b,c),qf(a,d,c)}return[]}function vf(a){return Ie(a,function(a,b,c){if(b&&null!=df(b))return[df(b)]
var d=[]
return b&&(d=ef(b)),r(c,function(a){d=d.concat(a)}),d})}function yf(a,b){for(var c=0;c<b.length;++c){var d=b[c]
if(!de(d.n)){var d=sf(d),e=a.kc[d]
delete a.kc[d],delete a.Ye["_"+e]}}}function uf(a,b,c){var d=b.path,e=xf(a,b)
if(c=wf(a,c),b=a.Mc.Ve(b,e,c.wd,c.J),d=a.sa.subtree(d),e)J(null==df(d.value),"If we're adding a query, it shouldn't be shadowed")
else for(e=Ie(d,function(a,b,c){if(!a.e()&&b&&null!=df(b))return[ue(df(b))]
var d=[]
return b&&(d=d.concat(Qa(ef(b),function(a){return a.V}))),r(c,function(a){d=d.concat(a)}),d}),d=0;d<e.length;++d)c=e[d],a.Mc.$d(c,xf(a,c))
return b}function wf(a,b){var c=b.V,d=xf(a,c)
return{wd:function(){return(b.u()||C).hash()},J:function(b){if("ok"===b){if(d){var e=c.path
if(b=of(a,d)){var f=pf(b)
b=f.path,f=f.Hb,e=N(b,e),e=new Zb(new ye(!1,!0,f,!0),e),b=qf(a,b,e)}else b=[]}else b=jf(a,new Zb(ze,c.path))
return b}return e="Unknown Error","too_big"===b?e="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?e="Client doesn't have permission to access the desired data.":"unavailable"==b&&(e="The service is unavailable"),e=Error(b+": "+e),e.code=b.toUpperCase(),a.kb(c,null,e)}}}function sf(a){return a.path.toString()+"$"+a.wa()}function pf(a){var b=a.indexOf("$")
return J(-1!==b&&b<a.length-1,"Bad queryKey."),{Hb:a.substr(b+1),path:new K(a.substr(0,b))}}function of(a,b){var c=a.Ye,d="_"+b
return d in c?c[d]:void 0}function xf(a,b){var c=sf(b)
return w(a.kc,c)}function qf(a,b,c){var d=a.sa.get(b)
return J(d,"Missing sync point for query tag that we're tracking"),d.bb(c,new bf(b,a.Gb),null)}function jf(a,b){return zf(a,b,a.sa,null,new bf(F,a.Gb))}function zf(a,b,c,d,e){if(b.path.e())return Af(a,b,c,d,e)
var f=c.get(F)
null==d&&null!=f&&(d=f.hb(F))
var g=[],h=O(b.path),i=b.Xc(h)
if((c=c.children.get(h))&&i)var j=d?d.M(h):null,h=e.w(h),g=g.concat(zf(a,i,c,j,h))
return f&&(g=g.concat(f.bb(b,e,d))),g}function Af(a,b,c,d,e){var f=c.get(F)
null==d&&null!=f&&(d=f.hb(F))
var g=[]
return c.children.ha(function(c,f){var h=d?d.M(c):null,i=e.w(c),j=b.Xc(c)
j&&(g=g.concat(Af(a,j,f,h,i)))}),f&&(g=g.concat(f.bb(b,e,d))),g}function Bf(){this.children={},this.md=0,this.value=null}function Cf(a,b,c){this.Fd=a?a:"",this.Zc=b?b:null,this.B=c?c:new Bf}function Df(a,b){for(var c,d=b instanceof K?b:new K(b),e=a;null!==(c=O(d));)e=new Cf(c,e,w(e.B.children,c)||new Bf),d=G(d)
return e}function Ef(a,b){J("undefined"!=typeof b,"Cannot set value to undefined"),a.B.value=b,Ff(a)}function Gf(a,b,c,d){c&&!d&&b(a),a.U(function(a){Gf(a,b,!0,d)}),c&&d&&b(a)}function Hf(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}function Ff(a){if(null!==a.Zc){var b=a.Zc,c=a.Fd,d=a.e(),e=u(b.B.children,c)
d&&e?(delete b.B.children[c],b.B.md--,Ff(b)):d||e||(b.B.children[c]=a.B,b.B.md++,Ff(b))}}function If(a){J(ea(a)&&0<a.length,"Requires a non-empty array"),this.Rf=a,this.Nc={}}function Jf(a,b){J(Ta(a.Rf,function(a){return a===b}),"Unknown event: "+b)}function Lf(){if(If.call(this,["online"]),this.Wc=!0,"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener){var a=this
window.addEventListener("online",function(){a.Wc||a.ee("online",!0),a.Wc=!0},!1),window.addEventListener("offline",function(){a.Wc&&a.ee("online",!1),a.Wc=!1},!1)}}function Mf(){If.call(this,["visible"])
var a,b
if("undefined"!=typeof document&&"undefined"!=typeof document.addEventListener&&("undefined"!=typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!=typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!=typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!=typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden")),this.uc=!0,b){var c=this
document.addEventListener(b,function(){var b=!document[a]
b!==c.uc&&(c.uc=b,c.ee("visible",b))},!1)}}function Pf(a){return p(a)&&0!==a.length&&!Nf.test(a)}function Qf(a){return null===a||p(a)||ga(a)&&!Sc(a)||ia(a)&&u(a,".sv")}function Rf(a,b,c,d){d&&!n(b)||Sf(z(a,1,d),b,c)}function Sf(a,b,c){if(c instanceof K&&(c=new wc(c,a)),!n(b))throw Error(a+"contains undefined "+zc(c))
if(ha(b))throw Error(a+"contains a function "+zc(c)+" with contents: "+b.toString())
if(Sc(b))throw Error(a+"contains "+b.toString()+" "+zc(c))
if(p(b)&&b.length>10485760/3&&10485760<xc(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+zc(c)+" ('"+b.substring(0,50)+"...')")
if(ia(b)){var d=!1,e=!1
if(hb(b,function(b,f){if(".value"===b)d=!0
else if(".priority"!==b&&".sv"!==b&&(e=!0,!Pf(b)))throw Error(a+" contains an invalid key ("+b+") "+zc(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
c.push(b),Sf(a,f,c),c.pop()}),d&&e)throw Error(a+' contains ".value" child '+zc(c)+" in addition to actual children.")}}function Tf(a,b,c){if(!ia(b)||ea(b))throw Error(z(a,1,!1)+" must be an Object containing the children to replace.")
if(u(b,".value"))throw Error(z(a,1,!1)+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.')
Rf(a,b,c,!1)}function Uf(a,b,c){if(Sc(c))throw Error(z(a,b,!1)+"is "+c.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).")
if(!Qf(c))throw Error(z(a,b,!1)+"must be a valid Firebase priority (a string, finite number, server value, or null).")}function Vf(a,b,c){if(!c||n(b))switch(b){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break
default:throw Error(z(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}function Wf(a,b,c,d){if((!d||n(c))&&!Pf(c))throw Error(z(a,b,d)+'was an invalid key: "'+c+'".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')}function Xf(a,b){if(!p(b)||0===b.length||Of.test(b))throw Error(z(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')}function Yf(a,b){if(".info"===O(b))throw Error(a+" failed: Can't modify data under /.info/")}function Zf(a,b){if(!p(b))throw Error(z(a,1,!1)+"must be a valid credential (a string).")}function $f(a,b,c){if(!p(c))throw Error(z(a,b,!1)+"must be a valid string.")}function ag(a,b,c,d){if(!(d&&!n(c)||ia(c)&&null!==c))throw Error(z(a,b,d)+"must be a valid object.")}function bg(a,b,c){if(!ia(b)||null===b||!u(b,c))throw Error(z(a,1,!1)+'must contain the key "'+c+'"')
if(!p(w(b,c)))throw Error(z(a,1,!1)+'must contain the key "'+c+'" with type "string"')}function cg(){this.set={}}function dg(a,b){r(a.set,function(a,c){b(c,a)})}function qc(){this.m=this.C=null}function eg(a,b){if(b.e())return a.C=null,a.m=null,!0
if(null!==a.C){if(a.C.N())return!1
var c=a.C
return a.C=null,c.U(M,function(b,c){a.mc(new K(b),c)}),eg(a,b)}return null!==a.m?(c=O(b),b=G(b),a.m.contains(c)&&eg(a.m.get(c),b)&&a.m.remove(c),a.m.e()?(a.m=null,!0):!1):!0}function rc(a,b,c){null!==a.C?c(b,a.C):a.U(function(a,d){var e=new K(b.toString()+"/"+a)
rc(d,e,c)})}function gg(a,b,c){this.nd=a||{},this.de=b||{},this.ab=c||{},this.nd.remember||(this.nd.remember="default")}function ig(a){var b={},c={}
return hb(a||{},function(a,d){0<=Na(hg,a)?b[a]=d:c[a]=d}),new gg(b,{},c)}function jg(a,b){this.Pe=["session",a.Nd,a.Bb].join(":"),this.ae=b}function kg(){return!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function lg(){var a=navigator.userAgent
if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])
return!1}function mg(){var a,b=window.opener.frames
for(a=b.length-1;a>=0;a--)try{if(b[a].location.protocol===window.location.protocol&&b[a].location.host===window.location.host&&"__winchan_relay_frame"===b[a].name)return b[a]}catch(c){}return null}function ng(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function og(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}function pg(a){/^https?:\/\//.test(a)||(a=window.location.href)
var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a)
return b?b[1]:a}function qg(a){var b=""
try{a=a.replace("#","")
var c=kb(a)
c&&u(c,"__firebase_request_key")&&(b=w(c,"__firebase_request_key"))}catch(d){}return b}function rg(){var a=Rc(fg)
return a.scheme+"://"+a.host+"/v2"}function sg(a){return rg()+"/"+a+"/auth/channel"}function tg(a){var b=this
if(this.zc=a,this.be="*",lg()?this.Qc=this.yd=mg():(this.Qc=window.opener,this.yd=window),!b.Qc)throw"Unable to find relay frame"
ng(this.yd,"message",q(this.ic,this)),ng(this.yd,"message",q(this.wf,this))
try{ug(this,{a:"ready"})}catch(c){ng(this.Qc,"load",function(){ug(b,{a:"ready"})})}ng(window,"unload",q(this.vg,this))}function ug(a,b){b=B(b),lg()?a.Qc.doPost(b,a.be):a.Qc.postMessage(b,a.be)}function vg(a){this.oc=Ga()+Ga()+Ga(),this.zf=a}function xg(a){var b=Error(w(wg,a),a)
return b.code=a,b}function yg(a){(!a.window_features||-1!==navigator.userAgent.indexOf("Fennec/index.html")||-1!==navigator.userAgent.indexOf("Firefox/index.html")&&-1!==navigator.userAgent.indexOf("Android"))&&(a.window_features=void 0),a.window_name||(a.window_name="_blank"),this.options=a}function zg(a){a.method||(a.method="GET"),a.headers||(a.headers={}),a.headers.content_type||(a.headers.content_type="application/json"),a.headers.content_type=a.headers.content_type.toLowerCase(),this.options=a}function Ag(a){this.oc=Ga()+Ga()+Ga(),this.zf=a}function Bg(a){a.callback_parameter||(a.callback_parameter="callback"),this.options=a,window.__firebase_auth_jsonp=window.__firebase_auth_jsonp||{}}function Cg(a,b,c){setTimeout(function(){try{var d=document.createElement("script")
d.type="text/javascript",d.id=a,d.async=!0,d.src=b,d.onerror=function(){var b=document.getElementById(a)
null!==b&&b.parentNode.removeChild(b),c&&c(xg("NETWORK_ERROR"))}
var e=document.getElementsByTagName("head");(e&&0!=e.length?e[0]:document.documentElement).appendChild(d)}catch(f){c&&c(xg("NETWORK_ERROR"))}},0)}function Dg(a,b,c,d){If.call(this,["auth_status"]),this.H=a,this.bf=b,this.Pg=c,this.Ke=d,this.rc=new jg(a,[Dc,P]),this.nb=null,Eg(this)}function Eg(a){P.get("redirect_request_id")&&Fg(a)
var b=a.rc.get()
b&&b.token?(Gg(a,b),a.bf(b.token,function(c,d){Hg(a,c,d,!1,b.token,b)},function(b,c){Ig(a,"resumeSession()",b,c)})):Gg(a,null)}function Jg(a,b,c,d,e,f){"firebaseio-demo.com"===a.H.domain&&Q("Firebase authentication is not supported on demo Firebases (*.firebaseio-demo.com). To secure your Firebase, create a production Firebase at https://www.firebase.com."),a.bf(b,function(f,g){Hg(a,f,g,!0,b,c,d||{},e)},function(b,c){Ig(a,"auth()",b,c,f)})}function Kg(a,b){a.rc.clear(),Gg(a,null),a.Pg(function(a,c){if("ok"===a)R(b,null)
else{var d=(a||"error").toUpperCase(),e=d
c&&(e+=": "+c),e=Error(e),e.code=d,R(b,e)}})}function Hg(a,b,c,d,e,f,g,h){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=cd(e)?e:"",c=null,b&&u(b,"uid")?c=w(b,"uid"):u(f,"uid")&&(c=w(f,"uid")),f.uid=c,c="custom",b&&u(b,"provider")?c=w(b,"provider"):u(f,"provider")&&(c=w(f,"provider")),f.provider=c,a.rc.clear(),cd(e)&&(g=g||{},c=Dc,"sessionOnly"===g.remember&&(c=P),"none"!==g.remember&&a.rc.set(f,c)),Gg(a,f)),R(h,null,f)):(a.rc.clear(),Gg(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,R(h,f))}function Ig(a,b,c,d,e){Q(b+" was canceled: "+d),a.rc.clear(),Gg(a,null),a=Error(d),a.code=c.toUpperCase(),R(e,a)}function Lg(a,b,c,d,e){Mg(a),c=new gg(d||{},{},c||{}),Ng(a,[zg,Bg],"/auth/"+b,c,e)}function Og(a,b,c,d){Mg(a)
var e=[yg,Ag]
c=ig(c),"anonymous"===b||"password"===b?setTimeout(function(){R(d,xg("TRANSPORT_UNAVAILABLE"))},0):(c.de.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"==typeof screen?.5*(screen.height-625):0)+",left="+("object"==typeof screen?.5*(screen.width-625):0),c.de.relay_url=sg(a.H.Bb),c.de.requestWithCredential=q(a.pc,a),Ng(a,e,"/auth/"+b,c,d))}function Fg(a){var b=P.get("redirect_request_id")
if(b){var c=P.get("redirect_client_options")
P.remove("redirect_request_id"),P.remove("redirect_client_options")
var d=[zg,Bg],b={requestId:b,requestKey:qg(document.location.hash)},c=new gg(c,{},b)
try{document.location.hash=document.location.hash.replace(/&__firebase_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Ng(a,d,"/auth/session",c)}}function Ng(a,b,c,d,e){Pg(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?Jg(a,c.token,c,d.nd,function(a,b){a?R(e,a):R(e,null,b)}):R(e,b||xg("UNKNOWN_ERROR"))})}function Pg(a,b,c,d,e){b=Pa(b,function(a){return"function"==typeof a.isAvailable&&a.isAvailable()}),0===b.length?setTimeout(function(){R(e,xg("TRANSPORT_UNAVAILABLE"))},0):(b=new(b.shift())(d.de),d=ib(d.ab),d.v="js-2.2.3",d.transport=b.Bc(),d.suppress_status_codes=!0,a=rg()+"/"+a.H.Bb+c,b.open(a,d,function(a,b){if(a)R(e,a)
else if(b&&b.error){var c=Error(b.error.message)
c.code=b.error.code,c.details=b.error.details,R(e,c)}else R(e,null,b)}))}function Gg(a,b){var c=null!==a.nb||null!==b
a.nb=b,c&&a.ee("auth_status",b),a.Ke(null!==b)}function Mg(a){var b=a.H
if("firebaseio.com"!==b.domain&&"firebaseio-demo.com"!==b.domain&&"auth.firebase.com"===fg)throw Error("This custom Firebase server ('"+a.H.domain+"') does not support delegated login.")}function Qg(a){this.ic=a,this.Md=[],this.Qb=0,this.qe=-1,this.Eb=null}function Rg(a,b,c){a.qe=b,a.Eb=c,a.qe<a.Qb&&(a.Eb(),a.Eb=null)}function Sg(a,b,c){for(a.Md[b]=c;a.Md[a.Qb];){var d=a.Md[a.Qb]
delete a.Md[a.Qb]
for(var e=0;e<d.length;++e)if(d[e]){var f=a
Cb(function(){f.ic(d[e])})}if(a.Qb===a.qe){a.Eb&&(clearTimeout(a.Eb),a.Eb(),a.Eb=null)
break}a.Qb++}}function Tg(a,b,c){this.re=a,this.f=Oc(a),this.ob=this.pb=0,this.Va=Ob(b),this.Wd=c,this.Gc=!1,this.jd=function(a){b.host!==b.Oa&&(a.ns=b.Bb)
var c,d=[]
for(c in a)a.hasOwnProperty(c)&&d.push(c+"="+a[c])
return(b.lb?"https://":"http://")+b.Oa+"/.lp?"+d.join("&")}}function Xg(a,b){var c=B(b).length
a.ob+=c,Lb(a.Va,"bytes_received",c)}function Wg(a,b,c,d){if(this.jd=d,this.jb=c,this.Oe=new cg,this.ad=[],this.te=Math.floor(1e8*Math.random()),this.Ud=!0,this.ge=Gc(),window["pLPCommand"+this.ge]=a,window["pRTLPCB"+this.ge]=b,a=document.createElement("iframe"),a.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready."
document.body.appendChild(a)
try{a.contentWindow.document||Bb("No IE domain setting required")}catch(e){a.src="javascript:void((function(){document.open();document.domain='"+document.domain+"';document.close();})())"}a.contentDocument?a.gb=a.contentDocument:a.contentWindow?a.gb=a.contentWindow.document:a.document&&(a.gb=a.document),this.Ca=a,a="",this.Ca.src&&"javascript:"===this.Ca.src.substr(0,11)&&(a='<script>document.domain="'+document.domain+'";</script>'),a="<html><body>"+a+"</body></html>"
try{this.Ca.gb.open(),this.Ca.gb.write(a),this.Ca.gb.close()}catch(f){Bb("frame writing exception"),f.stack&&Bb(f.stack),Bb(f)}}function Zg(a){if(a.le&&a.Ud&&a.Oe.count()<(0<a.ad.length?2:1)){a.te++
var b={}
b.id=a.og,b.pw=a.pg,b.ser=a.te
for(var b=a.jd(b),c="",d=0;0<a.ad.length&&1870>=a.ad[0].gf.length+30+c.length;){var e=a.ad.shift(),c=c+"&seg"+d+"="+e.Gg+"&ts"+d+"="+e.Og+"&d"+d+"="+e.gf
d++}return $g(a,b+c,a.te),!0}return!1}function $g(a,b,c){function d(){a.Oe.remove(c),Zg(a)}a.Oe.add(c,1)
var e=setTimeout(d,Math.floor(25e3))
Yg(a,b,function(){clearTimeout(e),d()})}function Yg(a,b,c){setTimeout(function(){try{if(a.Ud){var d=a.Ca.gb.createElement("script")
d.type="text/javascript",d.async=!0,d.src=b,d.onload=d.onreadystatechange=function(){var a=d.readyState
a&&"loaded"!==a&&"complete"!==a||(d.onload=d.onreadystatechange=null,d.parentNode&&d.parentNode.removeChild(d),c())},d.onerror=function(){Bb("Long-poll script failed to load: "+b),a.Ud=!1,a.close()},a.Ca.gb.body.appendChild(d)}}catch(e){}},Math.floor(1))}function bh(a,b,c){this.re=a,this.f=Oc(this.re),this.frames=this.Jc=null,this.ob=this.pb=this.$e=0,this.Va=Ob(b),this.fb=(b.lb?"wss://":"ws://")+b.Oa+"/.ws?v=5","undefined"!=typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(this.fb+="&r=f"),b.host!==b.Oa&&(this.fb=this.fb+"&ns="+b.Bb),c&&(this.fb=this.fb+"&s="+c)}function eh(a,b){if(a.frames.push(b),a.frames.length==a.$e){var c=a.frames.join("")
a.frames=null,c=mb(c),a.tg(c)}}function dh(a){clearInterval(a.Jc),a.Jc=setInterval(function(){a.va&&a.va.send("0"),dh(a)},Math.floor(45e3))}function fh(a){gh(this,a)}function gh(a,b){var c=bh&&bh.isAvailable(),d=c&&!(Dc.rf||!0===Dc.get("previous_websocket_failure"))
if(b.Qg&&(c||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),d=!0),d)a.gd=[bh]
else{var e=a.gd=[]
Yc(hh,function(a,b){b&&b.isAvailable()&&e.push(b)})}}function ih(a){if(0<a.gd.length)return a.gd[0]
throw Error("No transports available")}function jh(a,b,c,d,e,f){this.id=a,this.f=Oc("c:"+this.id+":"),this.ic=c,this.Vc=d,this.ka=e,this.Me=f,this.H=b,this.Ld=[],this.cf=0,this.Kf=new fh(b),this.Ua=0,this.f("Connection created"),kh(this)}function kh(a){var b=ih(a.Kf)
a.L=new b("c:"+a.id+":"+a.cf++,a.H),a.Qe=b.responsesRequiredToBeHealthy||0
var c=lh(a,a.L),d=mh(a,a.L)
a.hd=a.L,a.dd=a.L,a.F=null,a.zb=!1,setTimeout(function(){a.L&&a.L.open(c,d)},Math.floor(0)),b=b.healthyTimeout||0,b>0&&(a.xd=setTimeout(function(){a.xd=null,a.zb||(a.L&&102400<a.L.ob?(a.f("Connection exceeded healthy timeout but has received "+a.L.ob+" bytes.  Marking connection healthy."),a.zb=!0,a.L.Dd()):a.L&&10240<a.L.pb?a.f("Connection exceeded healthy timeout but has sent "+a.L.pb+" bytes.  Leaving connection alive."):(a.f("Closing unhealthy connection after timeout."),a.close()))},Math.floor(b)))}function mh(a,b){return function(c){b===a.L?(a.L=null,c||0!==a.Ua?1===a.Ua&&a.f("Realtime connection lost."):(a.f("Realtime connection failed."),"s-"===a.H.Oa.substr(0,2)&&(Dc.remove("host:"+a.H.host),a.H.Oa=a.H.host)),a.close()):b===a.F?(a.f("Secondary connection lost."),c=a.F,a.F=null,a.hd!==c&&a.dd!==c||a.close()):a.f("closing an old connection")}}function lh(a,b){return function(c){if(2!=a.Ua)if(b===a.dd){var d=Vc("t",c)
if(c=Vc("d",c),"c"==d){if(d=Vc("t",c),"d"in c)if(c=c.d,"h"===d){var d=c.ts,e=c.v,f=c.h
a.Wd=c.s,Fc(a.H,f),0==a.Ua&&(a.L.start(),nh(a,a.L,d),"5"!==e&&Q("Protocol version mismatch detected"),c=a.Kf,(c=1<c.gd.length?c.gd[1]:null)&&oh(a,c))}else if("n"===d){for(a.f("recvd end transmission on primary"),a.dd=a.F,c=0;c<a.Ld.length;++c)a.Hd(a.Ld[c])
a.Ld=[],ph(a)}else"s"===d?(a.f("Connection shutdown command received. Shutting down..."),a.Me&&(a.Me(c),a.Me=null),a.ka=null,a.close()):"r"===d?(a.f("Reset packet received.  New host: "+c),Fc(a.H,c),1===a.Ua?a.close():(qh(a),kh(a))):"e"===d?Pc("Server Error: "+c):"o"===d?(a.f("got pong on primary."),rh(a),sh(a)):Pc("Unknown control packet command: "+d)}else"d"==d&&a.Hd(c)}else if(b===a.F)if(d=Vc("t",c),c=Vc("d",c),"c"==d)"t"in c&&(c=c.t,"a"===c?th(a):"r"===c?(a.f("Got a reset on secondary, closing it"),a.F.close(),a.hd!==a.F&&a.dd!==a.F||a.close()):"o"===c&&(a.f("got pong on secondary."),a.If--,th(a)))
else{if("d"!=d)throw Error("Unknown protocol layer: "+d)
a.Ld.push(c)}else a.f("message on old connection")}}function ph(a){a.hd===a.F&&a.dd===a.F&&(a.f("cleaning up and promoting a connection: "+a.F.re),a.L=a.F,a.F=null)}function th(a){0>=a.If?(a.f("Secondary connection is healthy."),a.zb=!0,a.F.Dd(),a.F.start(),a.f("sending client ack on secondary"),a.F.send({t:"c",d:{t:"a",d:{}}}),a.f("Ending transmission on primary"),a.L.send({t:"c",d:{t:"n",d:{}}}),a.hd=a.F,ph(a)):(a.f("sending ping on secondary."),a.F.send({t:"c",d:{t:"p",d:{}}}))}function rh(a){a.zb||(a.Qe--,0>=a.Qe&&(a.f("Primary connection is healthy."),a.zb=!0,a.L.Dd()))}function oh(a,b){a.F=new b("c:"+a.id+":"+a.cf++,a.H,a.Wd),a.If=b.responsesRequiredToBeHealthy||0,a.F.open(lh(a,a.F),mh(a,a.F)),setTimeout(function(){a.F&&(a.f("Timed out trying to upgrade."),a.F.close())},Math.floor(6e4))}function nh(a,b,c){a.f("Realtime connection established."),a.L=b,a.Ua=1,a.Vc&&(a.Vc(c),a.Vc=null),0===a.Qe?(a.f("Primary connection is healthy."),a.zb=!0):setTimeout(function(){sh(a)},Math.floor(5e3))}function sh(a){a.zb||1!==a.Ua||(a.f("sending ping on primary."),uh(a,{t:"c",d:{t:"p",d:{}}}))}function uh(a,b){if(1!==a.Ua)throw"Connection is not connected"
a.hd.send(b)}function qh(a){a.f("Shutting down all connections"),a.L&&(a.L.close(),a.L=null),a.F&&(a.F.close(),a.F=null),a.xd&&(clearTimeout(a.xd),a.xd=null)}function vh(a,b,c,d){this.id=wh++,this.f=Oc("p:"+this.id+":"),this.Kb=!0,this.aa={},this.pa=[],this.Yc=0,this.Uc=[],this.ma=!1,this.$a=1e3,this.Ed=3e5,this.Fb=b,this.Tc=c,this.Ne=d,this.H=a,this.Ue=null,this.cd={},this.Fg=0,this.Kc=this.Fe=null,xh(this,0),Mf.Wb().Db("visible",this.wg,this),-1===a.host.indexOf("fblocal")&&Lf.Wb().Db("online",this.ug,this)}function zh(a,b){var c=b.Cg,d=c.path.toString(),e=c.wa()
a.f("Listen on "+d+" for "+e)
var f={p:d}
b.tag&&(f.q=ce(c.n),f.t=b.tag),f.h=b.wd(),a.Da("q",f,function(f){var g=f.d,h=f.s
if(g&&"object"==typeof g&&u(g,"w")){var i=w(g,"w")
ea(i)&&0<=Na(i,"no_index")&&Q("Using an unspecified index. Consider adding "+('".indexOn": "'+c.n.g.toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.aa[d]&&a.aa[d][e])===b&&(a.f("listen response",f),"ok"!==h&&Ah(a,d,e),b.J&&b.J(h,g))})}function Bh(a){var b=a.Fa
a.ma&&b&&a.Da("auth",{cred:b.cg},function(c){var d=c.s
c=c.d||"error","ok"!==d&&a.Fa===b&&delete a.Fa,b.kf?"ok"!==d&&b.ld&&b.ld(d,c):(b.kf=!0,b.yc&&b.yc(d,c))})}function Ch(a,b,c,d,e){c={p:c,d:d},a.f("onDisconnect "+b,c),a.Da(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}function Dh(a,b,c,d,e,f){d={p:c,d:d},n(f)&&(d.h=f),a.pa.push({action:b,Ff:d,J:e}),a.Yc++,b=a.pa.length-1,a.ma?Eh(a,b):a.f("Buffering put: "+c)}function Eh(a,b){var c=a.pa[b].action,d=a.pa[b].Ff,e=a.pa[b].J
a.pa[b].Dg=a.ma,a.Da(c,d,function(d){a.f(c+" response",d),delete a.pa[b],a.Yc--,0===a.Yc&&(a.pa=[]),e&&e(d.s,d.d)})}function xh(a,b){J(!a.Sa,"Scheduling a connect when we're already connected/ing?"),a.Sb&&clearTimeout(a.Sb),a.Sb=setTimeout(function(){a.Sb=null,Hh(a)},Math.floor(b))}function Hh(a){if(a.Kb){a.f("Making a connection attempt"),a.Fe=(new Date).getTime(),a.Kc=null
var b=q(a.Hd,a),c=q(a.Vc,a),d=q(a.yf,a),e=a.id+":"+yh++
a.Sa=new jh(e,a.H,b,c,d,function(b){Q(b+" ("+a.H.toString()+")"),a.Kb=!1})}}function Fh(a,b,c){c=c?Qa(c,function(a){return Wc(a)}).join("$"):"default",(a=Ah(a,b,c))&&a.J&&a.J("permission_denied")}function Ah(a,b,c){b=new K(b).toString()
var d
return n(a.aa[b])?(d=a.aa[b][c],delete a.aa[b][c],0===pa(a.aa[b])&&delete a.aa[b]):d=void 0,d}function Gh(a){Bh(a),r(a.aa,function(b){r(b,function(b){zh(a,b)})})
for(var b=0;b<a.pa.length;b++)a.pa[b]&&Eh(a,b)
for(;a.Uc.length;)b=a.Uc.shift(),Ch(a,b.action,b.$c,b.data,b.J)}function S(a,b,c){this.B=a,this.V=b,this.g=c}function Ih(a,b){this.H=a,this.Va=Ob(a),this.ea=new ub,this.Gd=1,this.Ra=null,b||0<=("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.ca=new Ae(this.H,q(this.Fb,this)),setTimeout(q(this.Tc,this,!0),0)):this.ca=this.Ra=new vh(this.H,q(this.Fb,this),q(this.Tc,this),q(this.Ne,this)),this.Mg=Pb(a,q(function(){return new Jb(this.Va,this.ca)},this)),this.tc=new Cf,this.Ce=new nb
var c=this
this.Bd=new gf({Ve:function(a,b,d,e){return b=[],d=c.Ce.j(a.path),d.e()||(b=jf(c.Bd,new Ub(ze,a.path,d)),setTimeout(function(){e("ok")},0)),b},$d:ba}),Jh(this,"connected",!1),this.ka=new qc,this.P=new Dg(a,q(this.ca.P,this.ca),q(this.ca.fe,this.ca),q(this.Ke,this)),this.rd=0,this.De=null,this.O=new gf({Ve:function(a,b,d,e){return c.ca.sf(a,d,b,function(b,d){var f=e(b,d)
zb(c.ea,a.path,f)}),[]},$d:function(a,b){c.ca.Lf(a,b)}})}function Kh(a){return a=a.Ce.j(new K(".info/serverTimeOffset")).K()||0,(new Date).getTime()+a}function Lh(a){return a=a={timestamp:Kh(a)},a.timestamp=a.timestamp||(new Date).getTime(),a}function Jh(a,b,c){b=new K("/.info/"+b),c=L(c)
var d=a.Ce
d.Td=d.Td.G(b,c),c=jf(a.Bd,new Ub(ze,b,c)),zb(a.ea,b,c)}function Nh(a){a.f("onDisconnectEvents")
var b=Lh(a),c=[]
rc(pc(a.ka,b),F,function(b,d){c=c.concat(jf(a.O,new Ub(ze,b,d)))
var e=Ph(a,b)
Mh(a,e)}),a.ka=new qc,zb(a.ea,F,c)}function Qh(a,b,c,d){var e=L(c)
a.ca.Le(b.toString(),e.K(!0),function(c,f){"ok"===c&&a.ka.mc(b,e),Oh(d,c,f)})}function Rh(a,b,c,d,e){var f=L(c,d)
a.ca.Le(b.toString(),f.K(!0),function(c,d){"ok"===c&&a.ka.mc(b,f),Oh(e,c,d)})}function Sh(a,b,c,d){var e,f=!0
for(e in c)f=!1
f?(Bb("onDisconnect().update() called with empty data.  Don't do anything."),Oh(d,"ok")):a.ca.xf(b.toString(),c,function(e,f){if("ok"===e)for(var g in c){var h=L(c[g])
a.ka.mc(b.w(g),h)}Oh(d,e,f)})}function Th(a,b,c){c=".info"===O(b.path)?a.Bd.Ob(b,c):a.O.Ob(b,c),xb(a.ea,b.path,c)}function Oh(a,b,c){a&&Cb(function(){if("ok"==b)a(null)
else{var d=(b||"error").toUpperCase(),e=d
c&&(e+=": "+c),e=Error(e),e.code=d,a(e)}})}function Uh(a,b,c,d,e){function f(){}a.f("transaction on "+b)
var g=new U(a,b)
if(g.Db("value",f),c={path:b,update:c,J:d,status:null,Af:Gc(),af:e,Hf:0,he:function(){g.hc("value",f)},ke:null,Aa:null,od:null,pd:null,qd:null},d=a.O.ua(b,void 0)||C,c.od=d,d=c.update(d.K()),n(d)){Sf("transaction failed: Data returned ",d,c.path),c.status=1,e=Df(a.tc,b)
var h=e.Ba()||[]
h.push(c),Ef(e,h),"object"==typeof d&&null!==d&&u(d,".priority")?(h=w(d,".priority"),J(Qf(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(a.O.ua(b)||C).A().K(),e=Lh(a),d=L(d,h),e=sc(d,e),c.pd=d,c.qd=e,c.Aa=a.Gd++,c=hf(a.O,b,e,c.Aa,c.af),zb(a.ea,b,c),Vh(a)}else c.he(),c.pd=null,c.qd=null,c.J&&(a=new S(c.od,new U(a,c.path),M),c.J(null,!1,a))}function Vh(a,b){var c=b||a.tc
if(b||Wh(a,c),null!==c.Ba()){var d=Xh(a,c)
J(0<d.length,"Sending zero length transaction queue"),Sa(d,function(a){return 1===a.status})&&Yh(a,c.path(),d)}else c.vd()&&c.U(function(b){Vh(a,b)})}function Yh(a,b,c){for(var d=Qa(c,function(a){return a.Aa}),e=a.O.ua(b,d)||C,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f]
J(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run."),g.status=2,g.Hf++
var h=N(b,g.path),d=d.G(h,g.pd)}d=d.K(!0),a.ca.put(b.toString(),d,function(d){a.f("transaction put response",{path:b.toString(),status:d})
var e=[]
if("ok"===d){for(d=[],f=0;f<c.length;f++){if(c[f].status=3,e=e.concat(lf(a.O,c[f].Aa)),c[f].J){var g=c[f].qd,h=new U(a,c[f].path)
d.push(q(c[f].J,null,null,!0,new S(g,h,M)))}c[f].he()}for(Wh(a,Df(a.tc,b)),Vh(a),zb(a.ea,b,e),f=0;f<d.length;f++)Cb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1
else for(Q("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].ke=d
Mh(a,b)}},e)}function Mh(a,b){var c=Zh(a,b),d=c.path(),c=Xh(a,c)
return $h(a,c,d),d}function $h(a,b,c){if(0!==b.length){for(var d=[],e=[],f=Qa(b,function(a){return a.Aa}),g=0;g<b.length;g++){var h,i=b[g],j=N(c,i.path),k=!1
if(J(null!==j,"rerunTransactionsUnderNode_: relativePath should not be null."),5===i.status)k=!0,h=i.ke,e=e.concat(lf(a.O,i.Aa,!0))
else if(1===i.status)if(25<=i.Hf)k=!0,h="maxretry",e=e.concat(lf(a.O,i.Aa,!0))
else{var l=a.O.ua(i.path,f)||C
i.od=l
var m=b[g].update(l.K())
n(m)?(Sf("transaction failed: Data returned ",m,i.path),j=L(m),"object"==typeof m&&null!=m&&u(m,".priority")||(j=j.da(l.A())),l=i.Aa,m=Lh(a),m=sc(j,m),i.pd=j,i.qd=m,i.Aa=a.Gd++,Va(f,l),e=e.concat(hf(a.O,i.path,m,i.Aa,i.af)),e=e.concat(lf(a.O,l,!0))):(k=!0,h="nodata",e=e.concat(lf(a.O,i.Aa,!0)))}zb(a.ea,c,e),e=[],k&&(b[g].status=3,setTimeout(b[g].he,Math.floor(0)),b[g].J&&("nodata"===h?(i=new U(a,b[g].path),d.push(q(b[g].J,null,null,!1,new S(b[g].od,i,M)))):d.push(q(b[g].J,null,Error(h),!1,null))))}for(Wh(a,a.tc),g=0;g<d.length;g++)Cb(d[g])
Vh(a)}}function Zh(a,b){for(var c,d=a.tc;null!==(c=O(b))&&null===d.Ba();)d=Df(d,c),b=G(b)
return d}function Xh(a,b){var c=[]
return ai(a,b,c),c.sort(function(a,b){return a.Af-b.Af}),c}function ai(a,b,c){var d=b.Ba()
if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e])
b.U(function(b){ai(a,b,c)})}function Wh(a,b){var c=b.Ba()
if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++)
c.length=d,Ef(b,0<c.length?c:null)}b.U(function(b){Wh(a,b)})}function Ph(a,b){var c=Zh(a,b).path(),d=Df(a.tc,b)
return Hf(d,function(b){bi(a,b)}),bi(a,d),Gf(d,function(b){bi(a,b)}),c}function bi(a,b){var c=b.Ba()
if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(J(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].ke="set"):(J(1===c[g].status,"Unexpected transaction status in abort"),c[g].he(),e=e.concat(lf(a.O,c[g].Aa,!0)),c[g].J&&d.push(q(c[g].J,null,Error("set"),!1,null))))
for(-1===f?Ef(b,null):c.length=f+1,zb(a.ea,b.path(),e),g=0;g<d.length;g++)Cb(d[g])}}function W(){this.nc={},this.Mf=!1}function X(a,b){this.bd=a,this.qa=b}function Y(a,b,c,d){this.k=a,this.path=b,this.n=c,this.jc=d}function ci(a){var b=null,c=null
if(a.la&&(b=od(a)),a.na&&(c=qd(a)),a.g===Vd){if(a.la){if("[MIN_NAME]"!=nd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().")
if("string"!=typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.")}if(a.na){if("[MAX_NAME]"!=pd(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().")
if("string"!=typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.")}}else if(a.g===M){if(null!=b&&!Qf(b)||null!=c&&!Qf(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(J(a.g instanceof Rd||a.g===Yd,"unknown index type."),null!=b&&"object"==typeof b||null!=c&&"object"==typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")}function di(a){if(a.la&&a.na&&a.ia&&(!a.ia||""===a.Nb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")}function ei(a,b){if(!0===a.jc)throw Error(b+": You can't combine multiple orderBy calls.")}function fi(a,b,c){var d={cancel:null,Ma:null}
if(b&&c)d.cancel=b,A(a,3,d.cancel,!0),d.Ma=c,lb(a,4,d.Ma)
else if(b)if("object"==typeof b&&null!==b)d.Ma=b
else{if("function"!=typeof b)throw Error(z(a,3,!0)+" must either be a cancel callback or a context object.")
d.cancel=b}return d}function U(a,b){var c,d,e
if(a instanceof Ih)c=a,d=b
else{x("new Firebase",1,2,arguments.length),d=Rc(arguments[0]),c=d.Ng,"firebase"===d.domain&&Qc(d.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),c||Qc("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),d.lb||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("index.html")&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase()."),c=new Ec(d.host,d.lb,c,"ws"===d.scheme||"wss"===d.scheme),d=new K(d.$c),e=d.toString()
var f
if(!(f=!p(c.host)||0===c.host.length||!Pf(c.Bb))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Of.test(e))),f)throw Error(z("new Firebase",1,!1)+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
if(b)if(b instanceof W)e=b
else{if(!p(b))throw Error("Expected a valid Firebase.Context for second argument to new Firebase()")
e=W.Wb(),c.Nd=b}else e=W.Wb()
f=c.toString()
var g=w(e.nc,f)
g||(g=new Ih(c,e.Mf),e.nc[f]=g),c=g}Y.call(this,c,d,$d,!1)}function Nc(a,b){J(!b||!0===a||!1===a,"Can't turn on custom loggers persistently."),!0===a?("undefined"!=typeof console&&("function"==typeof console.log?Ab=q(console.log,console):"object"==typeof console.log&&(Ab=function(a){console.log(a)})),b&&P.set("logging_enabled",!0)):a?Ab=a:(Ab=null,P.remove("logging_enabled"))}var h,aa=this,la=Date.now||function(){return+new Date},ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ea={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","":"\\u000b"},Fa=/\uffff/.test("￿")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,Ha
a:{var Ia=aa.navigator
if(Ia){var Ja=Ia.userAgent
if(Ja){Ha=Ja
break a}}Ha=""}ma(La,Ka),La.prototype.reset=function(){this.R[0]=1732584193,this.R[1]=4023233417,this.R[2]=2562383102,this.R[3]=271733878,this.R[4]=3285377520,this.ce=this.ac=0},La.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length)
for(var c=b-this.Wa,d=0,e=this.me,f=this.ac;b>d;){if(0==f)for(;c>=d;)Ma(this,a,d),d+=this.Wa
if(p(a)){for(;b>d;)if(e[f]=a.charCodeAt(d),++f,++d,f==this.Wa){Ma(this,e),f=0
break}}else for(;b>d;)if(e[f]=a[d],++f,++d,f==this.Wa){Ma(this,e),f=0
break}}this.ac=f,this.ce+=b}}
var t=Array.prototype,Na=t.indexOf?function(a,b,c){return t.indexOf.call(a,b,c)}:function(a,b,c){if(c=null==c?0:0>c?Math.max(0,a.length+c):c,p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1
for(;c<a.length;c++)if(c in a&&a[c]===b)return c
return-1},Oa=t.forEach?function(a,b,c){t.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;d>f;f++)f in e&&b.call(c,e[f],f,a)},Pa=t.filter?function(a,b,c){return t.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;d>h;h++)if(h in g){var i=g[h]
b.call(c,i,h,a)&&(e[f++]=i)}return e},Qa=t.map?function(a,b,c){return t.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;d>g;g++)g in f&&(e[g]=b.call(c,f[g],g,a))
return e},Ra=t.reduce?function(a,b,c,d){for(var e=[],f=1,g=arguments.length;g>f;f++)e.push(arguments[f])
return d&&(e[0]=q(b,d)),t.reduce.apply(a,e)}:function(a,b,c,d){var e=c
return Oa(a,function(c,f){e=b.call(d,e,c,f,a)}),e},Sa=t.every?function(a,b,c){return t.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;d>f;f++)if(f in e&&!b.call(c,e[f],f,a))return!1
return!0},Za=-1!=Ha.indexOf("Opera")||-1!=Ha.indexOf("OPR"),$a=-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE"),ab=-1!=Ha.indexOf("Gecko")&&-1==Ha.toLowerCase().indexOf("webkit")&&!(-1!=Ha.indexOf("Trident")||-1!=Ha.indexOf("MSIE")),bb=-1!=Ha.toLowerCase().indexOf("webkit")
!function(){var a,b=""
return Za&&aa.opera?(b=aa.opera.version,ha(b)?b():b):(ab?a=/rv\:([^\);]+)(\)|;)/:$a?a=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:bb&&(a=/WebKit\/(\S+)/),a&&(b=(b=a.exec(Ha))?b[1]:""),$a&&(a=(a=aa.document)?a.documentMode:void 0,a>parseFloat(b))?String(a):b)}()
var cb=null,db=null,eb=null
nb.prototype.j=function(a){return this.Td.oa(a)},nb.prototype.toString=function(){return this.Td.toString()},ob.prototype.mf=function(){return null},ob.prototype.ye=function(){return null}
var pb=new ob
qb.prototype.mf=function(a){var b=this.Ka.D
return rb(b,a)?b.j().M(a):(b=null!=this.Jd?new sb(this.Jd,!0,!1):this.Ka.u(),this.Nf.Xa(a,b))},qb.prototype.ye=function(a,b,c){var d=null!=this.Jd?this.Jd:tb(this.Ka)
return a=this.Nf.ne(d,b,1,c,a),0===a.length?null:a[0]},wb.prototype.add=function(a){this.ud.push(a)},wb.prototype.Zb=function(){return this.qa}
var Eb="value"
Fb.prototype.Zb=function(){var a=this.Xd.lc()
return"value"===this.td?a.path:a.parent().path},Fb.prototype.ze=function(){return this.td},Fb.prototype.Ub=function(){return this.ue.Ub(this)},Fb.prototype.toString=function(){return this.Zb().toString()+":"+this.td+":"+B(this.Xd.jf())},Gb.prototype.Zb=function(){return this.path},Gb.prototype.ze=function(){return"cancel"},Gb.prototype.Ub=function(){return this.ue.Ub(this)},Gb.prototype.toString=function(){return this.path.toString()+":cancel"},sb.prototype.j=function(){return this.B},Ib.prototype.get=function(){var a=this.ag.get(),b=xa(a)
if(this.Cd)for(var c in this.Cd)b[c]-=this.Cd[c]
return this.Cd=a,b},Jb.prototype.Ef=function(){var a,b=this.Zd.get(),c={},d=!1
for(a in b)0<b[a]&&u(this.Jf,a)&&(c[a]=b[a],d=!0)
d&&this.ca.Df(c),setTimeout(q(this.Ef,this),Math.floor(6e5*Math.random()))},Kb.prototype.get=function(){return xa(this.Dc)}
var Mb={},Nb={}
Ub.prototype.Xc=function(a){return this.path.e()?new Ub(this.source,F,this.Ia.M(a)):new Ub(this.source,G(this.path),this.Ia)},Ub.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Ia.toString()+")"},Wb.prototype.Xc=function(){return this.path.e()?this:new Wb(G(this.path),this.Te)},Wb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.Te+")"},Zb.prototype.Xc=function(){return this.path.e()?new Zb(this.source,F):new Zb(this.source,G(this.path))},Zb.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"},h=ac.prototype,h.Na=function(a,b){return new ac(this.La,this.xa.Na(a,b,this.La).X(null,null,!1,null,null))},h.remove=function(a){return new ac(this.La,this.xa.remove(a,this.La).X(null,null,!1,null,null))},h.get=function(a){for(var b,c=this.xa;!c.e();){if(b=this.La(a,c.key),0===b)return c.value
0>b?c=c.left:b>0&&(c=c.right)}return null},h.e=function(){return this.xa.e()},h.count=function(){return this.xa.count()},h.Rc=function(){return this.xa.Rc()},h.fc=function(){return this.xa.fc()},h.ha=function(a){return this.xa.ha(a)},h.Xb=function(a){return new dc(this.xa,null,this.La,!1,a)},h.Yb=function(a,b){return new dc(this.xa,a,this.La,!1,b)},h.$b=function(a,b){return new dc(this.xa,a,this.La,!0,b)},h.of=function(a){return new dc(this.xa,null,this.La,!0,a)},h=fc.prototype,h.X=function(a,b,c,d,e){return new fc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)},h.count=function(){return this.left.count()+1+this.right.count()},h.e=function(){return!1},h.ha=function(a){return this.left.ha(a)||a(this.key,this.value)||this.right.ha(a)},h.Rc=function(){return gc(this).key},h.fc=function(){return this.right.e()?this.key:this.right.fc()},h.Na=function(a,b,c){var d,e
return e=this,d=c(a,e.key),e=0>d?e.X(null,null,null,e.left.Na(a,b,c),null):0===d?e.X(null,b,null,null,null):e.X(null,null,null,null,e.right.Na(a,b,c)),hc(e)},h.remove=function(a,b){var c,d
if(c=this,0>b(a,c.key))c.left.e()||c.left.fa()||c.left.left.fa()||(c=jc(c)),c=c.X(null,null,null,c.left.remove(a,b),null)
else{if(c.left.fa()&&(c=kc(c)),c.right.e()||c.right.fa()||c.right.left.fa()||(c=lc(c),c.left.left.fa()&&(c=kc(c),c=lc(c))),0===b(a,c.key)){if(c.right.e())return bc
d=gc(c.right),c=c.X(d.key,d.value,null,null,ic(c.right))}c=c.X(null,null,null,null,c.right.remove(a,b))}return hc(c)},h.fa=function(){return this.color},h=nc.prototype,h.X=function(){return this},h.Na=function(a,b){return new fc(a,b,null)},h.remove=function(){return this},h.count=function(){return 0},h.e=function(){return!0},h.ha=function(){return!1},h.Rc=function(){return null},h.fc=function(){return null},h.fa=function(){return!1}
var bc=new nc
h=K.prototype,h.toString=function(){for(var a="",b=this.Y;b<this.o.length;b++)""!==this.o[b]&&(a+="/"+this.o[b])
return a||"/"},h.slice=function(a){return this.o.slice(this.Y+(a||0))},h.parent=function(){if(this.Y>=this.o.length)return null
for(var a=[],b=this.Y;b<this.o.length-1;b++)a.push(this.o[b])
return new K(a,0)},h.w=function(a){for(var b=[],c=this.Y;c<this.o.length;c++)b.push(this.o[c])
if(a instanceof K)for(c=a.Y;c<a.o.length;c++)b.push(a.o[c])
else for(a=a.split("index.html"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c])
return new K(b,0)},h.e=function(){return this.Y>=this.o.length},h.Z=function(a){if(uc(this)!==uc(a))return!1
for(var b=this.Y,c=a.Y;b<=this.o.length;b++,c++)if(this.o[b]!==a.o[c])return!1
return!0},h.contains=function(a){var b=this.Y,c=a.Y
if(uc(this)>uc(a))return!1
for(;b<this.o.length;){if(this.o[b]!==a.o[c])return!1;++b,++c}return!0}
var F=new K("")
wc.prototype.push=function(a){0<this.Qa.length&&(this.Ea+=1),this.Qa.push(a),this.Ea+=xc(a),yc(this)},wc.prototype.pop=function(){var a=this.Qa.pop()
this.Ea-=xc(a),0<this.Qa.length&&--this.Ea},Ac.prototype.set=function(a,b){null==b?delete this.wc[a]:this.wc[a]=b},Ac.prototype.get=function(a){return u(this.wc,a)?this.wc[a]:null},Ac.prototype.remove=function(a){delete this.wc[a]},Ac.prototype.rf=!0,h=Bc.prototype,h.set=function(a,b){null==b?this.Ec.removeItem(this.Od+a):this.Ec.setItem(this.Od+a,B(b))},h.get=function(a){return a=this.Ec.getItem(this.Od+a),null==a?null:mb(a)},h.remove=function(a){this.Ec.removeItem(this.Od+a)},h.rf=!1,h.toString=function(){return this.Ec.toString()}
var Dc=Cc("localStorage"),P=Cc("sessionStorage")
Ec.prototype.toString=function(){var a=(this.lb?"https://":"http://")+this.host
return this.Nd&&(a+="<"+this.Nd+">"),a}
var Gc=function(){var a=1
return function(){return a++}}(),Ab=null,Mc=!0,$c=/^-?\d{1,10}$/
dd.prototype.bg=function(a,b){if(null==a.Ya||null==b.Ya)throw Hc("Should only compare child_ events.")
return this.g.compare(new E(a.Ya,a.Ja),new E(b.Ya,b.Ja))},h=jd.prototype,h.Gf=function(a){return"value"===a},h.createEvent=function(a,b){var c=b.n.g
return new Fb("value",this,new S(a.Ja,b.lc(),c))},h.Ub=function(a){var b=this.sb
if("cancel"===a.ze()){J(this.qb,"Raising a cancel event on a listener with no cancel callback")
var c=this.qb
return function(){c.call(b,a.error)}}var d=this.Pb
return function(){d.call(b,a.Xd)}},h.df=function(a,b){return this.qb?new Gb(this,a,b):null},h.matches=function(a){return a instanceof jd?a.Pb&&this.Pb?a.Pb===this.Pb&&a.sb===this.sb:!0:!1},h.pf=function(){return null!==this.Pb},h=kd.prototype,h.Gf=function(a){return a="children_added"===a?"child_added":a,("children_removed"===a?"child_removed":a)in this.ga},h.df=function(a,b){return this.qb?new Gb(this,a,b):null},h.createEvent=function(a,b){J(null!=a.Ya,"Child events should have a childName.")
var c=b.lc().w(a.Ya)
return new Fb(a.type,this,new S(a.Ja,c,b.n.g),a.Pd)},h.Ub=function(a){var b=this.sb
if("cancel"===a.ze()){J(this.qb,"Raising a cancel event on a listener with no cancel callback")
var c=this.qb
return function(){c.call(b,a.error)}}var d=this.ga[a.td]
return function(){d.call(b,a.Xd,a.Pd)}},h.matches=function(a){if(a instanceof kd){if(!this.ga||!a.ga)return!0
if(this.sb===a.sb){var b=pa(a.ga)
if(b===pa(this.ga)){if(1===b){var b=qa(a.ga),c=qa(this.ga)
return!(c!==b||a.ga[b]&&this.ga[c]&&a.ga[b]!==this.ga[c])}return oa(this.ga,function(b,c){return a.ga[c]===b})}}}return!1},h.pf=function(){return null!==this.ga},h=ld.prototype,h.G=function(a,b,c,d,e){return J(a.Ic(this.g),"A node must be indexed if only a child is updated"),d=a.M(b),d.Z(c)?a:(null!=e&&(c.e()?a.Ha(b)?id(e,new D("child_removed",d,b)):J(a.N(),"A child remove without an old child only makes sense on a leaf node"):d.e()?id(e,new D("child_added",c,b)):id(e,new D("child_changed",c,b,d))),a.N()&&c.e()?a:a.Q(b,c).mb(this.g))},h.ta=function(a,b,c){return null!=c&&(a.N()||a.U(M,function(a,d){b.Ha(a)||id(c,new D("child_removed",d,a))}),b.N()||b.U(M,function(b,d){if(a.Ha(b)){var e=a.M(b)
e.Z(d)||id(c,new D("child_changed",d,b,e))}else id(c,new D("child_added",d,b))})),b.mb(this.g)},h.da=function(a,b){return a.e()?C:a.da(b)},h.Ga=function(){return!1},h.Vb=function(){return this},h=md.prototype,h.matches=function(a){return 0>=this.g.compare(this.fd,a)&&0>=this.g.compare(a,this.Fc)},h.G=function(a,b,c,d,e){return this.matches(new E(b,c))||(c=C),this.Be.G(a,b,c,d,e)},h.ta=function(a,b,c){b.N()&&(b=C)
var d=b.mb(this.g),d=d.da(C),e=this
return b.U(M,function(a,b){e.matches(new E(a,b))||(d=d.Q(a,C))}),this.Be.ta(a,d,c)},h.da=function(a){return a},h.Ga=function(){return!0},h.Vb=function(){return this.Be},h=rd.prototype,h.G=function(a,b,c,d,e){return this.ra.matches(new E(b,c))||(c=C),a.M(b).Z(c)?a:a.Cb()<this.ja?this.ra.Vb().G(a,b,c,d,e):td(this,a,b,c,d,e)},h.ta=function(a,b,c){var d
if(b.N()||b.e())d=C.mb(this.g)
else if(2*this.ja<b.Cb()&&b.Ic(this.g)){d=C.mb(this.g),b=this.Ib?b.$b(this.ra.Fc,this.g):b.Yb(this.ra.fd,this.g)
for(var e=0;0<b.Pa.length&&e<this.ja;){var f,g=H(b)
if(!(f=this.Ib?0>=this.g.compare(this.ra.fd,g):0>=this.g.compare(g,this.ra.Fc)))break
d=d.Q(g.name,g.S),e++}}else{d=b.mb(this.g),d=d.da(C)
var h,i,j
if(this.Ib){b=d.of(this.g),h=this.ra.Fc,i=this.ra.fd
var k=vd(this.g)
j=function(a,b){return k(b,a)}}else b=d.Xb(this.g),h=this.ra.fd,i=this.ra.Fc,j=vd(this.g)
for(var e=0,l=!1;0<b.Pa.length;)g=H(b),!l&&0>=j(h,g)&&(l=!0),(f=l&&e<this.ja&&0>=j(g,i))?e++:d=d.Q(g.name,C)}return this.ra.Vb().ta(a,d,c)},h.da=function(a){return a},h.Ga=function(){return!0},h.Vb=function(){return this.ra.Vb()},zd.prototype.bb=function(a,b,c,d){var e,f=new hd
if(b.type===Vb)b.source.we?c=Ad(this,a,b.path,b.Ia,c,d,f):(J(b.source.lf,"Unknown source."),e=b.source.Ze,c=Bd(this,a,b.path,b.Ia,c,d,e,f))
else if(b.type===Cd)b.source.we?c=Dd(this,a,b.path,b.children,c,d,f):(J(b.source.lf,"Unknown source."),e=b.source.Ze,c=Ed(this,a,b.path,b.children,c,d,e,f))
else if(b.type===Xb)if(b.Te)if(e=b.path,null!=c.sc(e))c=a
else{if(b=new qb(c,a,d),d=a.D.j(),e.e()||".priority"===O(e))Hb(a.u())?b=c.ua(tb(a)):(b=a.u().j(),J(b instanceof T,"serverChildren would be complete if leaf node"),b=c.xc(b)),b=this.I.ta(d,b,f)
else{e=O(e)
var g=c.Xa(e,a.u())
null==g&&rb(a.u(),e)&&(g=d.M(e)),b=null!=g?this.I.G(d,e,g,b,f):a.D.j().Ha(e)?this.I.G(d,e,C,b,f):d,b.e()&&Hb(a.u())&&(d=c.ua(tb(a)),d.N()&&(b=this.I.ta(b,d,f)))}d=Hb(a.u())||null!=c.sc(F),c=Fd(a,b,d,this.I.Ga())}else c=Gd(this,a,b.path,c,d,f)
else{if(b.type!==$b)throw Hc("Unknown operation type: "+b.type)
d=b.path,b=a.u(),e=b.j(),g=b.$||d.e(),c=Hd(this,new Id(a.D,new sb(e,g,b.Tb)),d,c,pb,f)}return f=ra(f.eb),d=c,b=d.D,b.$&&(e=b.j().N()||b.j().e(),g=Jd(a),(0<f.length||!a.D.$||e&&!b.j().Z(g)||!b.j().A().Z(g.A()))&&f.push(Db(Jd(d)))),new yd(c,f)}
var Pd={}
Od.prototype.zd=function(a,b){return 0!==this.compare(new E("[MIN_NAME]",a),new E("[MIN_NAME]",b))},Od.prototype.Sc=function(){return Qd},ma(Rd,Od),h=Rd.prototype,h.Hc=function(a){return!a.M(this.cc).e()},h.compare=function(a,b){var c=a.S.M(this.cc),d=b.S.M(this.cc),c=c.Cc(d)
return 0===c?Sb(a.name,b.name):c},h.Oc=function(a,b){var c=L(a),c=C.Q(this.cc,c)
return new E(b,c)},h.Pc=function(){var a=C.Q(this.cc,Sd)
return new E("[MAX_NAME]",a)},h.toString=function(){return this.cc},ma(Td,Od),h=Td.prototype,h.compare=function(a,b){var c=a.S.A(),d=b.S.A(),c=c.Cc(d)
return 0===c?Sb(a.name,b.name):c},h.Hc=function(a){return!a.A().e()},h.zd=function(a,b){return!a.A().Z(b.A())},h.Sc=function(){return Qd},h.Pc=function(){return new E("[MAX_NAME]",new tc("[PRIORITY-POST]",Sd))},h.Oc=function(a,b){var c=L(a)
return new E(b,new tc("[PRIORITY-POST]",c))},h.toString=function(){return".priority"}
var M=new Td
ma(Ud,Od),h=Ud.prototype,h.compare=function(a,b){return Sb(a.name,b.name)},h.Hc=function(){throw Hc("KeyIndex.isDefinedOn not expected to be called.")},h.zd=function(){return!1},h.Sc=function(){return Qd},h.Pc=function(){return new E("[MAX_NAME]",C)},h.Oc=function(a){return J(p(a),"KeyIndex indexValue must always be a string."),new E(a,C)},h.toString=function(){return".key"}
var Vd=new Ud
ma(Wd,Od),h=Wd.prototype,h.compare=function(a,b){var c=a.S.Cc(b.S)
return 0===c?Sb(a.name,b.name):c},h.Hc=function(){return!0},h.zd=function(a,b){return!a.Z(b)},h.Sc=function(){return Qd},h.Pc=function(){return Xd},h.Oc=function(a,b){var c=L(a)
return new E(b,c)},h.toString=function(){return".value"}
var Yd=new Wd,$d=new Zd
h=Zd.prototype,h.Ge=function(a){var b=ae(this)
return b.ia=!0,b.ja=a,b.Nb="",b},h.He=function(a){var b=ae(this)
return b.ia=!0,b.ja=a,b.Nb="l",b},h.Ie=function(a){var b=ae(this)
return b.ia=!0,b.ja=a,b.Nb="r",b},h.Yd=function(a,b){var c=ae(this)
return c.la=!0,n(a)||(a=null),c.ec=a,null!=b?(c.Lb=!0,c.wb=b):(c.Lb=!1,c.wb=""),c},h.sd=function(a,b){var c=ae(this)
return c.na=!0,n(a)||(a=null),c.bc=a,n(b)?(c.Rb=!0,c.ub=b):(c.Vg=!1,c.ub=""),c},h.toString=function(){return B(ce(this))},fe.prototype.get=function(a){var b=w(this.Ad,a)
if(!b)throw Error("No index defined for "+a)
return b===Pd?null:b}
var je=new fe({".priority":Pd},{".priority":M})
h=tc.prototype,h.N=function(){return!0},h.A=function(){return this.ba},h.da=function(a){return new tc(this.C,a)},h.M=function(a){return".priority"===a?this.ba:C},h.oa=function(a){return a.e()?this:".priority"===O(a)?this.ba:C},h.Ha=function(){return!1},h.nf=function(){return null},h.Q=function(a,b){return".priority"===a?this.da(b):b.e()&&".priority"!==a?this:C.Q(a,b).da(this.ba)},h.G=function(a,b){var c=O(a)
return null===c?b:b.e()&&".priority"!==c?this:(J(".priority"!==c||1===uc(a),".priority must be the last token in a path"),this.Q(c,C.G(G(a),b)))},h.e=function(){return!1},h.Cb=function(){return 0},h.K=function(a){return a&&!this.A().e()?{".value":this.Ba(),".priority":this.A().K()}:this.Ba()},h.hash=function(){if(null===this.Ab){var a=""
this.ba.e()||(a+="priority:"+le(this.ba.K())+":")
var b=typeof this.C,a=a+(b+":"),a="number"===b?a+Zc(this.C):a+this.C
this.Ab=Jc(a)}return this.Ab},h.Ba=function(){return this.C},h.Cc=function(a){if(a===C)return 1
if(a instanceof T)return-1
J(a.N(),"Unknown node type")
var b=typeof a.C,c=typeof this.C,d=Na(me,b),e=Na(me,c)
return J(d>=0,"Unknown leaf type: "+b),J(e>=0,"Unknown leaf type: "+c),d===e?"object"===c?0:this.C<a.C?-1:this.C===a.C?0:1:e-d}
var me=["object","boolean","number","string"]
tc.prototype.mb=function(){return this},tc.prototype.Ic=function(){return!0},tc.prototype.Z=function(a){return a===this?!0:a.N()?this.C===a.C&&this.ba.Z(a.ba):!1},tc.prototype.toString=function(){return B(this.K(!0))},h=T.prototype,h.N=function(){return!1},h.A=function(){return this.ba||C},h.da=function(a){return this.m.e()?this:new T(this.m,a,this.vb)},h.M=function(a){return".priority"===a?this.A():(a=this.m.get(a),null===a?C:a)},h.oa=function(a){var b=O(a)
return null===b?this:this.M(b).oa(G(a))},h.Ha=function(a){return null!==this.m.get(a)},h.Q=function(a,b){if(J(b,"We should always be passing snapshot nodes"),".priority"===a)return this.da(b)
var c,d,e=new E(a,b)
return b.e()?(c=this.m.remove(a),e=ie(this.vb,e,this.m)):(c=this.m.Na(a,b),e=ge(this.vb,e,this.m)),d=c.e()?C:this.ba,new T(c,d,e)},h.G=function(a,b){var c=O(a)
if(null===c)return b
J(".priority"!==O(a)||1===uc(a),".priority must be the last token in a path")
var d=this.M(c).G(G(a),b)
return this.Q(c,d)},h.e=function(){return this.m.e()},h.Cb=function(){return this.m.count()}
var ne=/^(0|[1-9]\d*)$/
h=T.prototype,h.K=function(a){if(this.e())return null
var b={},c=0,d=0,e=!0
if(this.U(M,function(f,g){b[f]=g.K(a),c++,e&&ne.test(f)?d=Math.max(d,Number(f)):e=!1}),!a&&e&&2*c>d){var f,g=[]
for(f in b)g[f]=b[f]
return g}return a&&!this.A().e()&&(b[".priority"]=this.A().K()),b},h.hash=function(){if(null===this.Ab){var a=""
this.A().e()||(a+="priority:"+le(this.A().K())+":"),this.U(M,function(b,c){var d=c.hash()
""!==d&&(a+=":"+b+":"+d)}),this.Ab=""===a?"":Jc(a)}return this.Ab},h.nf=function(a,b,c){return(c=oe(this,c))?(a=cc(c,new E(a,b)))?a.name:null:cc(this.m,a)},h.U=function(a,b){var c=oe(this,a)
return c?c.ha(function(a){return b(a.name,a.S)}):this.m.ha(b)},h.Xb=function(a){return this.Yb(a.Sc(),a)},h.Yb=function(a,b){var c=oe(this,b)
if(c)return c.Yb(a,function(a){return a})
for(var c=this.m.Yb(a.name,Qb),d=ec(c);null!=d&&0>b.compare(d,a);)H(c),d=ec(c)
return c},h.of=function(a){return this.$b(a.Pc(),a)},h.$b=function(a,b){var c=oe(this,b)
if(c)return c.$b(a,function(a){return a})
for(var c=this.m.$b(a.name,Qb),d=ec(c);null!=d&&0<b.compare(d,a);)H(c),d=ec(c)
return c},h.Cc=function(a){return this.e()?a.e()?0:-1:a.N()||a.e()?1:a===Sd?-1:0},h.mb=function(a){if(a===Vd||ta(this.vb.dc,a.toString()))return this
var b=this.vb,c=this.m
J(a!==Vd,"KeyIndex always exists and isn't meant to be added to the IndexMap.")
for(var d=[],e=!1,c=c.Xb(Qb),f=H(c);f;)e=e||a.Hc(f.S),d.push(f),f=H(c)
return d=e?he(d,vd(a)):Pd,e=a.toString(),c=xa(b.dc),c[e]=a,a=xa(b.Ad),a[e]=d,new T(this.m,this.ba,new fe(a,c))},h.Ic=function(a){return a===Vd||ta(this.vb.dc,a.toString())},h.Z=function(a){if(a===this)return!0
if(a.N())return!1
if(this.A().Z(a.A())&&this.m.count()===a.m.count()){var b=this.Xb(M)
a=a.Xb(M)
for(var c=H(b),d=H(a);c&&d;){if(c.name!==d.name||!c.S.Z(d.S))return!1
c=H(b),d=H(a)}return null===c&&null===d}return!1},h.toString=function(){return B(this.K(!0))}
var pe=Math.log(2),C=new T(new ac(Tb),null,je)
ma(se,T),h=se.prototype,h.Cc=function(a){return a===this?0:1},h.Z=function(a){return a===this},h.A=function(){return this},h.M=function(){return C},h.e=function(){return!1}
var Sd=new se,Qd=new E("[MIN_NAME]",C),Xd=new E("[MAX_NAME]",Sd)
Id.prototype.u=function(){return this.Vd},h=te.prototype,h.u=function(){return this.Ka.u().j()},h.hb=function(a){var b=tb(this.Ka)
return b&&(de(this.V.n)||!a.e()&&!b.M(O(a)).e())?b.oa(a):null},h.e=function(){return 0===this.Za.length},h.Ob=function(a){this.Za.push(a)},h.kb=function(a,b){var c=[]
if(b){J(null==a,"A cancel should cancel all event registrations.")
var d=this.V.path
Oa(this.Za,function(a){(a=a.df(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.Za.length;++f){var g=this.Za[f]
if(g.matches(a)){if(a.pf()){e=e.concat(this.Za.slice(f+1))
break}}else e.push(g)}this.Za=e}else this.Za=[]
return c},h.bb=function(a,b,c){a.type===Cd&&null!==a.source.Hb&&(J(tb(this.Ka),"We should always have a full cache before handling merges"),J(Jd(this.Ka),"Missing event cache, even though we have a server cache"))
var d=this.Ka
return a=this.Cf.bb(d,a,b,c),b=this.Cf,c=a.ie,J(c.D.j().Ic(b.I.g),"Event snap not indexed"),J(c.u().j().Ic(b.I.g),"Server snap not indexed"),J(Hb(a.ie.u())||!Hb(d.u()),"Once a server snap is complete, it should never go back"),this.Ka=a.ie,ve(this,a.$f,a.ie.D.j(),null)},xe.prototype.Xc=function(a){return this.path.e()?(a=this.children.subtree(new K(a)),a.e()?null:a.value?new Ub(this.source,F,a.value):new xe(this.source,F,a)):(J(O(this.path)===a,"Can't get a merge for a child not on the path of the operation"),new xe(this.source,G(this.path),this.children))},xe.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}
var Vb=0,Cd=1,Xb=2,$b=3,Yb=new ye(!0,!1,null,!1),ze=new ye(!1,!0,null,!1)
ye.prototype.toString=function(){return this.we?"user":this.Ze?"server(queryID="+this.Hb+")":"server"},h=Ae.prototype,h.sf=function(a,b,c,d){var e=a.path.toString()
this.f("Listen called for "+e+" "+a.wa())
var f=Be(a,c),g={}
this.aa[f]=g,a=ee(a.n)
var h=this
Ce(this,e+".json",a,function(a,b){var i=b
404===a&&(a=i=null),null===a&&h.Fb(e,i,!1,c),w(h.aa,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})},h.Lf=function(a,b){var c=Be(a,b)
delete this.aa[c]},h.P=function(a,b){this.Fa=a
var c=ad(a),d=c.data,c=c.Ac&&c.Ac.exp
b&&b("ok",{auth:d,expires:c})},h.fe=function(a){this.Fa=null,a("ok",null)},h.Le=function(){},h.xf=function(){},h.Id=function(){},h.put=function(){},h.tf=function(){},h.Df=function(){}
var Ee=new ac(function(a,b){return a===b?0:b>a?-1:1})
h=De.prototype,h.e=function(){return null===this.value&&this.children.e()},h.subtree=function(a){if(a.e())return this
var b=this.children.get(O(a))
return null!==b?b.subtree(G(a)):Nd},h.set=function(a,b){if(a.e())return new De(b,this.children)
var c=O(a),d=(this.children.get(c)||Nd).set(G(a),b),c=this.children.Na(c,d)
return new De(this.value,c)},h.remove=function(a){if(a.e())return this.children.e()?Nd:new De(null,this.children)
var b=O(a),c=this.children.get(b)
return c?(a=c.remove(G(a)),b=a.e()?this.children.remove(b):this.children.Na(b,a),null===this.value&&b.e()?Nd:new De(this.value,b)):this},h.get=function(a){if(a.e())return this.value
var b=this.children.get(O(a))
return b?b.get(G(a)):null}
var Nd=new De(null)
De.prototype.toString=function(){var a={}
return Kd(this,function(b,c){a[b.toString()]=c.toString()}),B(a)}
var Re=new Qe(new De(null))
Qe.prototype.Qd=function(a){return a.e()?Re:(a=Md(this.W,a,Nd),new Qe(a))},Qe.prototype.e=function(){return this.W.e()},Qe.prototype.apply=function(a){return Xe(F,this.W,a)},h=Ye.prototype,h.Qd=function(a){var b=Ua(this.za,function(b){return b.je===a})
J(b>=0,"removeWrite called with nonexistent writeId.")
var c=this.za[b]
this.za.splice(b,1)
for(var d=c.visible,e=!1,f=this.za.length-1;d&&f>=0;){var g=this.za[f]
g.visible&&(f>=b&&Ze(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0)),f--}if(d){if(e)this.T=$e(this.za,af,F),this.Lc=0<this.za.length?this.za[this.za.length-1].je:-1
else if(c.Ia)this.T=this.T.Qd(c.path)
else{var h=this
r(c.children,function(a,b){h.T=h.T.Qd(c.path.w(b))})}return c.path}return null},h.ua=function(a,b,c,d){if(c||d){var e=We(this.T,a)
return!d&&e.e()?b:d||null!=b||null!=Ue(e,F)?(e=$e(this.za,function(b){return!(!b.visible&&!d||c&&0<=Na(c,b.je)||!b.path.contains(a)&&!a.contains(b.path))},a),b=b||C,e.apply(b)):null}return e=Ue(this.T,a),null!=e?e:(e=We(this.T,a),e.e()?b:null!=b||null!=Ue(e,F)?(b=b||C,e.apply(b)):null)},h.xc=function(a,b){var c=C,d=Ue(this.T,a)
if(d)d.N()||d.U(M,function(a,b){c=c.Q(a,b)})
else if(b){var e=We(this.T,a)
b.U(M,function(a,b){var d=We(e,new K(a)).apply(b)
c=c.Q(a,d)}),Oa(Ve(e),function(a){c=c.Q(a.name,a.S)})}else e=We(this.T,a),Oa(Ve(e),function(a){c=c.Q(a.name,a.S)})
return c},h.kd=function(a,b,c,d){return J(c||d,"Either existingEventSnap or existingServerSnap must exist"),a=a.w(b),null!=Ue(this.T,a)?null:(a=We(this.T,a),a.e()?d.oa(b):a.apply(d.oa(b)))},h.Xa=function(a,b,c){a=a.w(b)
var d=Ue(this.T,a)
return null!=d?d:rb(c,b)?We(this.T,a).apply(c.j().M(b)):null},h.sc=function(a){return Ue(this.T,a)},h.ne=function(a,b,c,d,e,f){var g
if(a=We(this.T,a),g=Ue(a,F),null==g){if(null==b)return[]
g=a.apply(b)}if(g=g.mb(f),g.e()||g.N())return[]
for(b=[],a=vd(f),e=e?g.$b(c,f):g.Yb(c,f),f=H(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=H(e)
return b},h=bf.prototype,h.ua=function(a,b,c){return this.W.ua(this.Mb,a,b,c)},h.xc=function(a){return this.W.xc(this.Mb,a)},h.kd=function(a,b,c){return this.W.kd(this.Mb,a,b,c)},h.sc=function(a){return this.W.sc(this.Mb.w(a))},h.ne=function(a,b,c,d,e){return this.W.ne(this.Mb,a,b,c,d,e)},h.Xa=function(a,b){return this.W.Xa(this.Mb,a,b)},h.w=function(a){return new bf(this.Mb.w(a),this.W)},h=cf.prototype,h.e=function(){return wa(this.ya)},h.bb=function(a,b,c){var d=a.source.Hb
if(null!==d)return d=w(this.ya,d),J(null!=d,"SyncTree gave us an op for an invalid query."),d.bb(a,b,c)
var e=[]
return r(this.ya,function(d){e=e.concat(d.bb(a,b,c))}),e},h.Ob=function(a,b,c,d,e){var f=a.wa(),g=w(this.ya,f)
if(!g){var g=c.ua(e?d:null),h=!1
g?h=!0:(g=d instanceof T?c.xc(d):C,h=!1),g=new te(a,new Id(new sb(g,h,!1),new sb(d,e,!1))),this.ya[f]=g}return g.Ob(b),we(g,b)},h.kb=function(a,b,c){var d=a.wa(),e=[],f=[],g=null!=df(this)
if("default"===d){var h=this
r(this.ya,function(a,d){f=f.concat(a.kb(b,c)),a.e()&&(delete h.ya[d],de(a.V.n)||e.push(a.V))})}else{var i=w(this.ya,d)
i&&(f=f.concat(i.kb(b,c)),i.e()&&(delete this.ya[d],de(i.V.n)||e.push(i.V)))}return g&&null==df(this)&&e.push(new U(a.k,a.path)),{Eg:e,gg:f}},h.hb=function(a){var b=null
return r(this.ya,function(c){b=b||c.hb(a)}),b},gf.prototype.Ob=function(a,b){var c=a.path,d=null,e=!1
Me(this.sa,c,function(a,b){var f=N(a,c)
return d=b.hb(f),e=e||null!=df(b),!d})
var f=this.sa.get(c)
f?(e=e||null!=df(f),d=d||f.hb(F)):(f=new cf,this.sa=this.sa.set(c,f))
var g
null!=d?g=!0:(g=!1,d=C,Pe(this.sa.subtree(c),function(a,b){var c=b.hb(F)
c&&(d=d.Q(a,c))}))
var h=null!=ff(f,a)
if(!h&&!de(a.n)){var i=sf(a)
J(!(i in this.kc),"View does not exist, but we have a tag")
var j=tf++
this.kc[i]=j,this.Ye["_"+j]=i}return g=f.Ob(a,b,new bf(c,this.Gb),d,g),h||e||(f=ff(f,a),g=g.concat(uf(this,a,f))),g},gf.prototype.kb=function(a,b,c){var d=a.path,e=this.sa.get(d),f=[]
if(e&&("default"===a.wa()||null!=ff(e,a))){f=e.kb(a,b,c),e.e()&&(this.sa=this.sa.remove(d)),e=f.Eg,f=f.gg,b=-1!==Ua(e,function(a){return de(a.n)})
var g=Ke(this.sa,d,function(a,b){return null!=df(b)})
if(b&&!g&&(d=this.sa.subtree(d),!d.e()))for(var d=vf(d),h=0;h<d.length;++h){var i=d[h],j=i.V,i=wf(this,i)
this.Mc.Ve(j,xf(this,j),i.wd,i.J)}if(!g&&0<e.length&&!c)if(b)this.Mc.$d(a,null)
else{var k=this
Oa(e,function(a){a.wa()
var b=k.kc[sf(a)]
k.Mc.$d(a,b)})}yf(this,e)}return f},gf.prototype.ua=function(a,b){var c=this.Gb,d=Ke(this.sa,a,function(b,c){var d=N(b,a)
return(d=c.hb(d))?d:void 0})
return c.ua(a,d,b,!0)}
var tf=1
h=Cf.prototype,h.Ba=function(){return this.B.value},h.clear=function(){this.B.value=null,this.B.children={},this.B.md=0,Ff(this)},h.vd=function(){return 0<this.B.md},h.e=function(){return null===this.Ba()&&!this.vd()},h.U=function(a){var b=this
r(this.B.children,function(c,d){a(new Cf(d,b,c))})},h.path=function(){return new K(null===this.Zc?this.Fd:this.Zc.path()+"/"+this.Fd)},h.name=function(){return this.Fd},h.parent=function(){return this.Zc},If.prototype.ee=function(a){for(var b=this.Nc[a]||[],c=0;c<b.length;c++)b[c].yc.apply(b[c].Ma,Array.prototype.slice.call(arguments,1))},If.prototype.Db=function(a,b,c){Jf(this,a),this.Nc[a]=this.Nc[a]||[],this.Nc[a].push({yc:b,Ma:c}),(a=this.Ae(a))&&b.apply(c,a)},If.prototype.hc=function(a,b,c){Jf(this,a),a=this.Nc[a]||[]
for(var d=0;d<a.length;d++)if(a[d].yc===b&&(!c||c===a[d].Ma)){a.splice(d,1)
break}}
var Kf=function(){var a=0,b=[]
return function(c){var d=c===a
a=c
for(var e=Array(8),f=7;f>=0;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64)
if(J(0===c,"Cannot push at time == 0"),c=e.join(""),d){for(f=11;f>=0&&63===b[f];f--)b[f]=0
b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random())
for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f])
return J(20===c.length,"nextPushId: Length should be 20."),c}}()
ma(Lf,If),Lf.prototype.Ae=function(a){return J("online"===a,"Unknown event type: "+a),[this.Wc]},ca(Lf),ma(Mf,If),Mf.prototype.Ae=function(a){return J("visible"===a,"Unknown event type: "+a),[this.uc]},ca(Mf)
var Nf=/[\[\].#$\/\u0000-\u001F\u007F]/,Of=/[\[\].#$\u0000-\u001F\u007F]/
h=cg.prototype,h.add=function(a,b){this.set[a]=null!==b?b:!0},h.contains=function(a){return u(this.set,a)},h.get=function(a){return this.contains(a)?this.set[a]:void 0},h.remove=function(a){delete this.set[a]},h.clear=function(){this.set={}},h.e=function(){return wa(this.set)},h.count=function(){return pa(this.set)},h.keys=function(){var a=[]
return r(this.set,function(b,c){a.push(c)}),a},qc.prototype.find=function(a){if(null!=this.C)return this.C.oa(a)
if(a.e()||null==this.m)return null
var b=O(a)
return a=G(a),this.m.contains(b)?this.m.get(b).find(a):null},qc.prototype.mc=function(a,b){if(a.e())this.C=b,this.m=null
else if(null!==this.C)this.C=this.C.G(a,b)
else{null==this.m&&(this.m=new cg)
var c=O(a)
this.m.contains(c)||this.m.add(c,new qc),c=this.m.get(c),a=G(a),c.mc(a,b)}},qc.prototype.U=function(a){null!==this.m&&dg(this.m,function(b,c){a(b,c)})}
var fg="auth.firebase.com",hg=["remember","redirectTo"]
jg.prototype.set=function(a,b){if(!b){if(!this.ae.length)throw Error("fb.login.SessionManager : No storage options available!")
b=this.ae[0]}b.set(this.Pe,a)},jg.prototype.get=function(){var a=Qa(this.ae,q(this.kg,this)),a=Pa(a,function(a){return null!==a})
return Xa(a,function(a,b){return bd(b.token)-bd(a.token)}),0<a.length?a.shift():null},jg.prototype.kg=function(a){try{var b=a.get(this.Pe)
if(b&&b.token)return b}catch(c){}return null},jg.prototype.clear=function(){var a=this
Oa(this.ae,function(b){b.remove(a.Pe)})},tg.prototype.ic=function(a){var b,c=this
try{b=mb(a.data)}catch(d){}b&&"request"===b.a&&(og(window,"message",this.ic),this.be=a.origin,this.zc&&setTimeout(function(){c.zc(c.be,b.d,function(a,b){c.Yf=!b,c.zc=void 0,ug(c,{a:"response",d:a,forceKeepWindowOpen:b})})},0))},tg.prototype.vg=function(){try{og(this.yd,"message",this.wf)}catch(a){}this.zc&&(ug(this,{a:"error",d:"unknown closed window"}),this.zc=void 0)
try{window.close()}catch(b){}},tg.prototype.wf=function(a){if(this.Yf&&"die"===a.data)try{window.close()}catch(b){}},vg.prototype.open=function(a,b){P.set("redirect_request_id",this.oc),P.set("redirect_request_id",this.oc),b.requestId=this.oc,b.redirectTo=b.redirectTo||window.location.href,a+=(/\?/.test(a)?"":"?")+jb(b),window.location=a},vg.isAvailable=function(){return!/^file:\//.test(location.href)&&!kg()},vg.prototype.Bc=function(){return"redirect"}
var wg={NETWORK_ERROR:"Unable to contact the Firebase server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."}
yg.prototype.open=function(a,b,c){function d(a){if(f&&(document.body.removeChild(f),f=void 0),k&&(k=clearInterval(k)),og(window,"message",e),og(window,"unload",d),j&&!a)try{j.close()}catch(b){g.postMessage("die",i)}j=g=void 0}function e(a){if(a.origin===i)try{var b=mb(a.data)
"ready"===b.a?g.postMessage(l,i):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f,g,h=lg()
if(!this.options.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"))
var i=pg(a)
if(i!==pg(this.options.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0)
else{h&&(f=document.createElement("iframe"),f.setAttribute("src",this.options.relay_url),f.style.display="none",f.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(f),g=f.contentWindow),a+=(/\?/.test(a)?"":"?")+jb(b)
var j=window.open(a,this.options.window_name,this.options.window_features)
g||(g=j)
var k=setInterval(function(){j&&j.closed&&(d(!1),c&&(c(xg("USER_CANCELLED")),c=null))},500),l=B({a:"request",d:b})
ng(window,"unload",d),ng(window,"message",e)}},yg.isAvailable=function(){return"postMessage"in window&&!/^file:\//.test(location.href)&&!(kg()||navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href)||navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone)&&!navigator.userAgent.match(/PhantomJS/)},yg.prototype.Bc=function(){return"popup"},zg.prototype.open=function(a,b,c){function d(){c&&(c(xg("REQUEST_INTERRUPTED")),c=null)}var e,f=new XMLHttpRequest,g=this.options.method.toUpperCase()
if(ng(window,"beforeunload",d),f.onreadystatechange=function(){if(c&&4===f.readyState){var a
if(200<=f.status&&300>f.status){try{a=mb(f.responseText)}catch(b){}c(null,a)}else c(500<=f.status&&600>f.status?xg("SERVER_ERROR"):xg("NETWORK_ERROR"))
c=null,og(window,"beforeunload",d)}},"GET"===g)a+=(/\?/.test(a)?"":"?")+jb(b),e=null
else{var h=this.options.headers.content_type
"application/json"===h&&(e=B(b)),"application/x-www-form-urlencoded"===h&&(e=jb(b))}f.open(g,a,!0),a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"},za(a,this.options.headers)
for(var i in a)f.setRequestHeader(i,a[i])
f.send(e)},zg.isAvailable=function(){return!!window.XMLHttpRequest&&"string"==typeof(new XMLHttpRequest).responseType&&(!(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/))||lg())},zg.prototype.Bc=function(){return"json"},Ag.prototype.open=function(a,b,c){function d(){c&&(c(xg("USER_CANCELLED")),c=null)}var e,f=this,g=Rc(fg)
b.requestId=this.oc,b.redirectTo=g.scheme+"://"+g.host+"/blank/page.html",a+=/\?/.test(a)?"":"?",a+=jb(b),(e=window.open(a,"_blank","location=no"))&&ha(e.addEventListener)?(e.addEventListener("loadstart",function(a){var b
if(b=a&&a.url)a:{try{var h=document.createElement("a")
h.href=a.url,b=h.host===g.host&&"/blank/page.html"===h.pathname
break a}catch(i){}b=!1}b&&(a=qg(a.url),e.removeEventListener("exit",d),e.close(),a=new gg(null,null,{requestId:f.oc,requestKey:a}),f.zf.requestWithCredential("/auth/session",a,c),c=null)}),e.addEventListener("exit",d)):c(xg("TRANSPORT_UNAVAILABLE"))},Ag.isAvailable=function(){return kg()},Ag.prototype.Bc=function(){return"redirect"},Bg.prototype.open=function(a,b,c){function d(){c&&(c(xg("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__firebase_auth_jsonp[f]=void 0,wa(window.__firebase_auth_jsonp)&&(window.__firebase_auth_jsonp=void 0)
try{var a=document.getElementById(f)
a&&a.parentNode.removeChild(a)}catch(b){}},1),og(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random())
b[this.options.callback_parameter]="__firebase_auth_jsonp."+f,a+=(/\?/.test(a)?"":"?")+jb(b),ng(window,"beforeunload",d),window.__firebase_auth_jsonp[f]=function(a){c&&(c(null,a),c=null),e()},Cg(f,a,c)},Bg.isAvailable=function(){return!0},Bg.prototype.Bc=function(){return"json"},ma(Dg,If),h=Dg.prototype,h.xe=function(){return this.nb||null},h.se=function(a,b){Mg(this)
var c=ig(a)
c.ab._method="POST",this.pc("/users",c,function(a,c){a?R(b,a):R(b,a,c)})},h.Re=function(a,b){var c=this
Mg(this)
var d="/users/"+encodeURIComponent(a.email),e=ig(a)
e.ab._method="DELETE",this.pc(d,e,function(a,d){!a&&d&&d.uid&&c.nb&&c.nb.uid&&c.nb.uid===d.uid&&Kg(c),R(b,a)})},h.pe=function(a,b){Mg(this)
var c="/users/"+encodeURIComponent(a.email)+"/password",d=ig(a)
d.ab._method="PUT",d.ab.password=a.newPassword,this.pc(c,d,function(a){R(b,a)})},h.oe=function(a,b){Mg(this)
var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=ig(a)
d.ab._method="PUT",d.ab.email=a.newEmail,d.ab.password=a.password,this.pc(c,d,function(a){R(b,a)})},h.Se=function(a,b){Mg(this)
var c="/users/"+encodeURIComponent(a.email)+"/password",d=ig(a)
d.ab._method="POST",this.pc(c,d,function(a){R(b,a)})},h.pc=function(a,b,c){Pg(this,[zg,Bg],a,b,c)},h.Ae=function(a){return J("auth_status"===a,'initial event must be of type "auth_status"'),[this.nb]}
var Ug,Vg
Tg.prototype.open=function(a,b){this.ef=0,this.ka=b,this.uf=new Qg(a),this.yb=!1
var c=this
this.rb=setTimeout(function(){c.f("Timed out trying to connect."),c.ib(),c.rb=null},Math.floor(3e4)),Tc(function(){if(!c.yb){c.Ta=new Wg(function(a,b,d){if(Xg(c,arguments),c.Ta)if(c.rb&&(clearTimeout(c.rb),c.rb=null),c.Gc=!0,"start"==a)c.id=b,c.Bf=d
else{if("close"!==a)throw Error("Unrecognized command received: "+a)
b?(c.Ta.Ud=!1,Rg(c.uf,b,function(){c.ib()})):c.ib()}},function(a,b){Xg(c,arguments),Sg(c.uf,a,b)},function(){c.ib()},c.jd)
var a={start:"t"}
a.ser=Math.floor(1e8*Math.random()),c.Ta.ge&&(a.cb=c.Ta.ge),a.v="5",c.Wd&&(a.s=c.Wd),"undefined"!=typeof location&&location.href&&-1!==location.href.indexOf("firebaseio.com")&&(a.r="f"),a=c.jd(a),c.f("Connecting via long-poll to "+a),Yg(c.Ta,a,function(){})}})},Tg.prototype.start=function(){var a=this.Ta,b=this.Bf
for(a.og=this.id,a.pg=b,a.le=!0;Zg(a););a=this.id,b=this.Bf,this.gc=document.createElement("iframe")
var c={dframe:"t"}
c.id=a,c.pw=b,this.gc.src=this.jd(c),this.gc.style.display="none",document.body.appendChild(this.gc)},Tg.isAvailable=function(){return!(Vg||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.Rg)},h=Tg.prototype,h.Dd=function(){},h.ed=function(){this.yb=!0,this.Ta&&(this.Ta.close(),this.Ta=null),this.gc&&(document.body.removeChild(this.gc),this.gc=null),this.rb&&(clearTimeout(this.rb),this.rb=null)},h.ib=function(){this.yb||(this.f("Longpoll is closing itself"),this.ed(),this.ka&&(this.ka(this.Gc),this.ka=null))},h.close=function(){this.yb||(this.f("Longpoll is being closed."),this.ed())},h.send=function(a){a=B(a),this.pb+=a.length,Lb(this.Va,"bytes_sent",a.length),a=Kc(a),a=fb(a,!0),a=Xc(a,1840)
for(var b=0;b<a.length;b++){var c=this.Ta
c.ad.push({Gg:this.ef,Og:a.length,gf:a[b]}),c.le&&Zg(c),this.ef++}},Wg.prototype.close=function(){if(this.le=!1,this.Ca){this.Ca.gb.body.innerHTML=""
var a=this
setTimeout(function(){null!==a.Ca&&(document.body.removeChild(a.Ca),a.Ca=null)},Math.floor(0))}var b=this.jb
b&&(this.jb=null,b())}
var ah=null
"undefined"!=typeof MozWebSocket?ah=MozWebSocket:"undefined"!=typeof WebSocket&&(ah=WebSocket)
var ch
bh.prototype.open=function(a,b){this.jb=b,this.tg=a,this.f("Websocket connecting to "+this.fb),this.Gc=!1,Dc.set("previous_websocket_failure",!0)
try{this.va=new ah(this.fb)}catch(c){this.f("Error instantiating WebSocket.")
var d=c.message||c.data
return d&&this.f(d),void this.ib()}var e=this
this.va.onopen=function(){e.f("Websocket connected."),e.Gc=!0},this.va.onclose=function(){e.f("Websocket connection was disconnected."),e.va=null,e.ib()},this.va.onmessage=function(a){if(null!==e.va)if(a=a.data,e.ob+=a.length,Lb(e.Va,"bytes_received",a.length),dh(e),null!==e.frames)eh(e,a)
else{a:{if(J(null===e.frames,"We already have a frame buffer"),6>=a.length){var b=Number(a)
if(!isNaN(b)){e.$e=b,e.frames=[],a=null
break a}}e.$e=1,e.frames=[]}null!==a&&eh(e,a)}},this.va.onerror=function(a){e.f("WebSocket error.  Closing connection."),(a=a.message||a.data)&&e.f(a),e.ib()}},bh.prototype.start=function(){},bh.isAvailable=function(){var a=!1
if("undefined"!=typeof navigator&&navigator.userAgent){var b=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/)
b&&1<b.length&&4.4>parseFloat(b[1])&&(a=!0)}return!a&&null!==ah&&!ch},bh.responsesRequiredToBeHealthy=2,bh.healthyTimeout=3e4,h=bh.prototype,h.Dd=function(){Dc.remove("previous_websocket_failure")},h.send=function(a){dh(this),a=B(a),this.pb+=a.length,Lb(this.Va,"bytes_sent",a.length),a=Xc(a,16384),1<a.length&&this.va.send(String(a.length))
for(var b=0;b<a.length;b++)this.va.send(a[b])},h.ed=function(){this.yb=!0,this.Jc&&(clearInterval(this.Jc),this.Jc=null),this.va&&(this.va.close(),this.va=null)},h.ib=function(){this.yb||(this.f("WebSocket is closing itself"),this.ed(),this.jb&&(this.jb(this.Gc),this.jb=null))},h.close=function(){this.yb||(this.f("WebSocket is being closed"),this.ed())}
var hh=[Tg,bh]
jh.prototype.Da=function(a){uh(this,{t:"d",d:a})},jh.prototype.Hd=function(a){rh(this),this.ic(a)},jh.prototype.close=function(){2!==this.Ua&&(this.f("Closing realtime connection."),this.Ua=2,qh(this),this.ka&&(this.ka(),this.ka=null))}
var wh=0,yh=0
h=vh.prototype,h.Da=function(a,b,c){var d=++this.Fg
a={r:d,a:a,b:b},this.f(B(a)),J(this.ma,"sendRequest call when we're not connected not allowed."),this.Sa.Da(a),c&&(this.cd[d]=c)},h.sf=function(a,b,c,d){var e=a.wa(),f=a.path.toString()
this.f("Listen called for "+f+" "+e),this.aa[f]=this.aa[f]||{},J(!this.aa[f][e],"listen() called twice for same path/queryId."),a={J:d,wd:b,Cg:a,tag:c},this.aa[f][e]=a,this.ma&&zh(this,a)},h.P=function(a,b,c){this.Fa={cg:a,kf:!1,yc:b,ld:c},this.f("Authenticating using credential: "+a),Bh(this),(b=40==a.length)||(a=ad(a).Ac,b="object"==typeof a&&!0===w(a,"admin")),b&&(this.f("Admin auth credential detected.  Reducing max reconnect time."),this.Ed=3e4)},h.fe=function(a){delete this.Fa,this.ma&&this.Da("unauth",{},function(b){a(b.s,b.d)})},h.Lf=function(a,b){var c=a.path.toString(),d=a.wa()
if(this.f("Unlisten called for "+c+" "+d),Ah(this,c,d)&&this.ma){var e=ce(a.n)
this.f("Unlisten on "+c+" for "+d),c={p:c},b&&(c.q=e,c.t=b),this.Da("n",c)}},h.Le=function(a,b,c){this.ma?Ch(this,"o",a,b,c):this.Uc.push({$c:a,action:"o",data:b,J:c})},h.xf=function(a,b,c){this.ma?Ch(this,"om",a,b,c):this.Uc.push({$c:a,action:"om",data:b,J:c})},h.Id=function(a,b){this.ma?Ch(this,"oc",a,null,b):this.Uc.push({$c:a,action:"oc",data:null,J:b})},h.put=function(a,b,c,d){Dh(this,"p",a,b,c,d)},h.tf=function(a,b,c,d){Dh(this,"m",a,b,c,d)},h.Df=function(a){this.ma&&(a={c:a},this.f("reportStats",a),this.Da("s",a))},h.Hd=function(a){if("r"in a){this.f("from server: "+B(a))
var b=a.r,c=this.cd[b]
c&&(delete this.cd[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error
"a"in a&&(b=a.a,c=a.b,this.f("handleServerMessage",b,c),"d"===b?this.Fb(c.p,c.d,!1,c.t):"m"===b?this.Fb(c.p,c.d,!0,c.t):"c"===b?Fh(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.Fa,delete this.Fa,c&&c.ld&&c.ld(a,b)):"sd"===b?this.Ue?this.Ue(c):"msg"in c&&"undefined"!=typeof console&&console.log("FIREBASE: "+c.msg.replace("\n","\nFIREBASE: ")):Pc("Unrecognized action received from server: "+B(b)+"\nAre you using the latest client?"))}},h.Vc=function(a){this.f("connection ready"),this.ma=!0,this.Kc=(new Date).getTime(),this.Ne({serverTimeOffset:a-(new Date).getTime()}),Gh(this),this.Tc(!0)},h.wg=function(a){a&&!this.uc&&this.$a===this.Ed&&(this.f("Window became visible.  Reducing delay."),this.$a=1e3,this.Sa||xh(this,0)),this.uc=a},h.ug=function(a){a?(this.f("Browser went online.  Reconnecting."),this.$a=1e3,this.Kb=!0,this.Sa||xh(this,0)):(this.f("Browser went offline.  Killing connection; don't reconnect."),this.Kb=!1,this.Sa&&this.Sa.close())},h.yf=function(){this.f("data client disconnected"),this.ma=!1,this.Sa=null
for(var a=0;a<this.pa.length;a++){var b=this.pa[a]
b&&"h"in b.Ff&&b.Dg&&(b.J&&b.J("disconnect"),delete this.pa[a],this.Yc--)}if(0===this.Yc&&(this.pa=[]),this.Kb)this.uc?this.Kc&&(3e4<(new Date).getTime()-this.Kc&&(this.$a=1e3),this.Kc=null):(this.f("Window isn't visible.  Delaying reconnect."),this.$a=this.Ed,this.Fe=(new Date).getTime()),a=Math.max(0,this.$a-((new Date).getTime()-this.Fe)),a*=Math.random(),this.f("Trying to reconnect in "+a+"ms"),xh(this,a),this.$a=Math.min(this.Ed,1.3*this.$a)
else for(var c in this.cd)delete this.cd[c]
this.Tc(!1)},h.xb=function(){this.Kb=!1,this.Sa?this.Sa.close():(this.Sb&&(clearTimeout(this.Sb),this.Sb=null),this.ma&&this.yf())},h.qc=function(){this.Kb=!0,this.$a=1e3,this.Sa||xh(this,0)}
var V={ig:function(){Ug=ch=!0}}
V.forceLongPolling=V.ig,V.jg=function(){Vg=!0},V.forceWebSockets=V.jg,V.Jg=function(a,b){a.k.Ra.Ue=b},V.setSecurityDebugCallback=V.Jg,V.We=function(a,b){a.k.We(b)},V.stats=V.We,V.Xe=function(a,b){a.k.Xe(b)},V.statsIncrementCounter=V.Xe,V.rd=function(a){return a.k.rd},V.dataUpdateCount=V.rd,V.mg=function(a,b){a.k.De=b},V.interceptServerData=V.mg,V.sg=function(a){new tg(a)},V.onPopupOpen=V.sg,V.Hg=function(a){fg=a},V.setAuthenticationServer=V.Hg,S.prototype.K=function(){return x("Firebase.DataSnapshot.val",0,0,arguments.length),this.B.K()},S.prototype.val=S.prototype.K,S.prototype.jf=function(){return x("Firebase.DataSnapshot.exportVal",0,0,arguments.length),this.B.K(!0)},S.prototype.exportVal=S.prototype.jf,S.prototype.hg=function(){return x("Firebase.DataSnapshot.exists",0,0,arguments.length),!this.B.e()},S.prototype.exists=S.prototype.hg,S.prototype.w=function(a){x("Firebase.DataSnapshot.child",0,1,arguments.length),ga(a)&&(a=String(a)),Xf("Firebase.DataSnapshot.child",a)
var b=new K(a),c=this.V.w(b)
return new S(this.B.oa(b),c,M)},S.prototype.child=S.prototype.w,S.prototype.Ha=function(a){x("Firebase.DataSnapshot.hasChild",1,1,arguments.length),Xf("Firebase.DataSnapshot.hasChild",a)
var b=new K(a)
return!this.B.oa(b).e()},S.prototype.hasChild=S.prototype.Ha,S.prototype.A=function(){return x("Firebase.DataSnapshot.getPriority",0,0,arguments.length),this.B.A().K()},S.prototype.getPriority=S.prototype.A,S.prototype.forEach=function(a){if(x("Firebase.DataSnapshot.forEach",1,1,arguments.length),A("Firebase.DataSnapshot.forEach",1,a,!1),this.B.N())return!1
var b=this
return!!this.B.U(this.g,function(c,d){return a(new S(d,b.V.w(c),M))})},S.prototype.forEach=S.prototype.forEach,S.prototype.vd=function(){return x("Firebase.DataSnapshot.hasChildren",0,0,arguments.length),this.B.N()?!1:!this.B.e()},S.prototype.hasChildren=S.prototype.vd,S.prototype.name=function(){return Q("Firebase.DataSnapshot.name() being deprecated. Please use Firebase.DataSnapshot.key() instead."),x("Firebase.DataSnapshot.name",0,0,arguments.length),this.key()},S.prototype.name=S.prototype.name,S.prototype.key=function(){return x("Firebase.DataSnapshot.key",0,0,arguments.length),this.V.key()},S.prototype.key=S.prototype.key,S.prototype.Cb=function(){return x("Firebase.DataSnapshot.numChildren",0,0,arguments.length),this.B.Cb()},S.prototype.numChildren=S.prototype.Cb,S.prototype.lc=function(){return x("Firebase.DataSnapshot.ref",0,0,arguments.length),this.V},S.prototype.ref=S.prototype.lc,h=Ih.prototype,h.toString=function(){return(this.H.lb?"https://":"http://")+this.H.host},h.name=function(){return this.H.Bb},h.Fb=function(a,b,c,d){this.rd++
var e=new K(a)
b=this.De?this.De(a,b):b,a=[],d?c?(b=na(b,function(a){return L(a)}),a=rf(this.O,e,b,d)):(b=L(b),a=nf(this.O,e,b,d)):c?(d=na(b,function(a){return L(a)}),a=mf(this.O,e,d)):(d=L(b),a=jf(this.O,new Ub(ze,e,d))),d=e,0<a.length&&(d=Mh(this,e)),zb(this.ea,d,a)},h.Tc=function(a){Jh(this,"connected",a),!1===a&&Nh(this)},h.Ne=function(a){var b=this
Yc(a,function(a,c){Jh(b,c,a)})},h.Ke=function(a){Jh(this,"authenticated",a)},h.Jb=function(a,b,c,d){this.f("set",{path:a.toString(),value:b,Ug:c})
var e=Lh(this)
b=L(b,c)
var e=sc(b,e),f=this.Gd++,e=hf(this.O,a,e,f,!0)
vb(this.ea,e)
var g=this
this.ca.put(a.toString(),b.K(!0),function(b,c){var e="ok"===b
e||Q("set at "+a+" failed: "+b),e=lf(g.O,f,!e),zb(g.ea,a,e),Oh(d,b,c)}),e=Ph(this,a),Mh(this,e),zb(this.ea,e,[])},h.update=function(a,b,c){this.f("update",{path:a.toString(),value:b})
var d=!0,e=Lh(this),f={}
if(r(b,function(a,b){d=!1
var c=L(a)
f[b]=sc(c,e)}),d)Bb("update() called with empty data.  Don't do anything."),Oh(c,"ok")
else{var g=this.Gd++,h=kf(this.O,a,f,g)
vb(this.ea,h)
var i=this
this.ca.tf(a.toString(),b,function(b,d){var e="ok"===b
e||Q("update at "+a+" failed: "+b)
var e=lf(i.O,g,!e),f=a
0<e.length&&(f=Mh(i,a)),zb(i.ea,f,e),Oh(c,b,d)}),b=Ph(this,a),Mh(this,b),zb(this.ea,a,[])}},h.Id=function(a,b){var c=this
this.ca.Id(a.toString(),function(d,e){"ok"===d&&eg(c.ka,a),Oh(b,d,e)})},h.xb=function(){this.Ra&&this.Ra.xb()},h.qc=function(){this.Ra&&this.Ra.qc()},h.We=function(a){if("undefined"!=typeof console){a?(this.Zd||(this.Zd=new Ib(this.Va)),a=this.Zd.get()):a=this.Va.get()
var b,c=Ra(sa(a),function(a,b){return Math.max(b.length,a)},0)
for(b in a){for(var d=a[b],e=b.length;c+2>e;e++)b+=" "
console.log(b+d)}}},h.Xe=function(a){Lb(this.Va,a),this.Mg.Jf[a]=!0},h.f=function(){var a=""
this.Ra&&(a=this.Ra.id+":"),Bb(a,arguments)},ca(W),W.prototype.xb=function(){for(var a in this.nc)this.nc[a].xb()},W.prototype.interrupt=W.prototype.xb,W.prototype.qc=function(){for(var a in this.nc)this.nc[a].qc()},W.prototype.resume=W.prototype.qc,W.prototype.ve=function(){this.Mf=!0},X.prototype.cancel=function(a){x("Firebase.onDisconnect().cancel",0,1,arguments.length),A("Firebase.onDisconnect().cancel",1,a,!0),this.bd.Id(this.qa,a||null)},X.prototype.cancel=X.prototype.cancel,X.prototype.remove=function(a){x("Firebase.onDisconnect().remove",0,1,arguments.length),Yf("Firebase.onDisconnect().remove",this.qa),A("Firebase.onDisconnect().remove",1,a,!0),Qh(this.bd,this.qa,null,a)},X.prototype.remove=X.prototype.remove,X.prototype.set=function(a,b){x("Firebase.onDisconnect().html",1,2,arguments.length),Yf("Firebase.onDisconnect().html",this.qa),Rf("Firebase.onDisconnect().html",a,this.qa,!1),A("Firebase.onDisconnect().html",2,b,!0),Qh(this.bd,this.qa,a,b)},X.prototype.set=X.prototype.set,X.prototype.Jb=function(a,b,c){x("Firebase.onDisconnect().setWithPriority",2,3,arguments.length),Yf("Firebase.onDisconnect().setWithPriority",this.qa),Rf("Firebase.onDisconnect().setWithPriority",a,this.qa,!1),Uf("Firebase.onDisconnect().setWithPriority",2,b),A("Firebase.onDisconnect().setWithPriority",3,c,!0),Rh(this.bd,this.qa,a,b,c)},X.prototype.setWithPriority=X.prototype.Jb,X.prototype.update=function(a,b){if(x("Firebase.onDisconnect().update",1,2,arguments.length),Yf("Firebase.onDisconnect().update",this.qa),ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d]
a=c,Q("Passing an Array to Firebase.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Tf("Firebase.onDisconnect().update",a,this.qa),A("Firebase.onDisconnect().update",2,b,!0),Sh(this.bd,this.qa,a,b)},X.prototype.update=X.prototype.update,Y.prototype.lc=function(){return x("Query.ref",0,0,arguments.length),new U(this.k,this.path)},Y.prototype.ref=Y.prototype.lc,Y.prototype.Db=function(a,b,c,d){x("Query.on",2,4,arguments.length),Vf("Query.on",a,!1),A("Query.on",2,b,!1)
var e=fi("Query.on",c,d)
if("value"===a)Th(this.k,this,new jd(b,e.cancel||null,e.Ma||null))
else{var f={}
f[a]=b,Th(this.k,this,new kd(f,e.cancel,e.Ma))}return b},Y.prototype.on=Y.prototype.Db,Y.prototype.hc=function(a,b,c){x("Query.off",0,3,arguments.length),Vf("Query.off",a,!0),A("Query.off",2,b,!0),lb("Query.off",3,c)
var d=null,e=null
"value"===a?d=new jd(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new kd(e,null,c||null)),e=this.k,d=".info"===O(this.path)?e.Bd.kb(this,d):e.O.kb(this,d),xb(e.ea,this.path,d)},Y.prototype.off=Y.prototype.hc,Y.prototype.xg=function(a,b){function c(g){f&&(f=!1,e.hc(a,c),b.call(d.Ma,g))}x("Query.once",2,4,arguments.length),Vf("Query.once",a,!1),A("Query.once",2,b,!1)
var d=fi("Query.once",arguments[2],arguments[3]),e=this,f=!0
this.Db(a,c,function(b){e.hc(a,c),d.cancel&&d.cancel.call(d.Ma,b)})},Y.prototype.once=Y.prototype.xg,Y.prototype.Ge=function(a){if(Q("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead."),x("Query.limit",1,1,arguments.length),!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.")
if(this.n.ia)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.")
var b=this.n.Ge(a)
return di(b),new Y(this.k,this.path,b,this.jc)},Y.prototype.limit=Y.prototype.Ge,Y.prototype.He=function(a){if(x("Query.limitToFirst",1,1,arguments.length),!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.")
if(this.n.ia)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).")
return new Y(this.k,this.path,this.n.He(a),this.jc)},Y.prototype.limitToFirst=Y.prototype.He,Y.prototype.Ie=function(a){if(x("Query.limitToLast",1,1,arguments.length),!ga(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.")
if(this.n.ia)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).")
return new Y(this.k,this.path,this.n.Ie(a),this.jc)},Y.prototype.limitToLast=Y.prototype.Ie,Y.prototype.yg=function(a){if(x("Query.orderByChild",1,1,arguments.length),"$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.')
if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.')
if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.')
Wf("Query.orderByChild",1,a,!1),ei(this,"Query.orderByChild")
var b=be(this.n,new Rd(a))
return ci(b),new Y(this.k,this.path,b,!0)},Y.prototype.orderByChild=Y.prototype.yg,Y.prototype.zg=function(){x("Query.orderByKey",0,0,arguments.length),ei(this,"Query.orderByKey")
var a=be(this.n,Vd)
return ci(a),new Y(this.k,this.path,a,!0)},Y.prototype.orderByKey=Y.prototype.zg,Y.prototype.Ag=function(){x("Query.orderByPriority",0,0,arguments.length),ei(this,"Query.orderByPriority")
var a=be(this.n,M)
return ci(a),new Y(this.k,this.path,a,!0)},Y.prototype.orderByPriority=Y.prototype.Ag,Y.prototype.Bg=function(){x("Query.orderByValue",0,0,arguments.length),ei(this,"Query.orderByValue")
var a=be(this.n,Yd)
return ci(a),new Y(this.k,this.path,a,!0)},Y.prototype.orderByValue=Y.prototype.Bg,Y.prototype.Yd=function(a,b){x("Query.startAt",0,2,arguments.length),Rf("Query.startAt",a,this.path,!0),Wf("Query.startAt",2,b,!0)
var c=this.n.Yd(a,b)
if(di(c),ci(c),this.n.la)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).")
return n(a)||(b=a=null),new Y(this.k,this.path,c,this.jc)},Y.prototype.startAt=Y.prototype.Yd,Y.prototype.sd=function(a,b){x("Query.endAt",0,2,arguments.length),Rf("Query.endAt",a,this.path,!0),Wf("Query.endAt",2,b,!0)
var c=this.n.sd(a,b)
if(di(c),ci(c),this.n.na)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).")
return new Y(this.k,this.path,c,this.jc)},Y.prototype.endAt=Y.prototype.sd,Y.prototype.eg=function(a,b){if(x("Query.equalTo",1,2,arguments.length),Rf("Query.equalTo",a,this.path,!1),Wf("Query.equalTo",2,b,!0),this.n.la)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).")
if(this.n.na)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).")
return this.Yd(a,b).sd(a,b)},Y.prototype.equalTo=Y.prototype.eg,Y.prototype.toString=function(){x("Query.toString",0,0,arguments.length)
for(var a=this.path,b="",c=a.Y;c<a.o.length;c++)""!==a.o[c]&&(b+="/"+encodeURIComponent(String(a.o[c])))
return a=this.k.toString()+(b||"/"),b=jb(ee(this.n)),a+=b.replace(/^&/,"")},Y.prototype.toString=Y.prototype.toString,Y.prototype.wa=function(){var a=Wc(ce(this.n))
return"{}"===a?"default":a}
var Z={}
Z.vc=vh,Z.DataConnection=Z.vc,vh.prototype.Lg=function(a,b){this.Da("q",{p:a},b)},Z.vc.prototype.simpleListen=Z.vc.prototype.Lg,vh.prototype.dg=function(a,b){this.Da("echo",{d:a},b)},Z.vc.prototype.echo=Z.vc.prototype.dg,vh.prototype.interrupt=vh.prototype.xb,Z.Pf=jh,Z.RealTimeConnection=Z.Pf,jh.prototype.sendRequest=jh.prototype.Da,jh.prototype.close=jh.prototype.close,Z.lg=function(a){var b=vh.prototype.put
return vh.prototype.put=function(c,d,e,f){n(f)&&(f=a()),b.call(this,c,d,e,f)},function(){vh.prototype.put=b}},Z.hijackHash=Z.lg,Z.Of=Ec,Z.ConnectionTarget=Z.Of,Z.wa=function(a){return a.wa()},Z.queryIdentifier=Z.wa,Z.ng=function(a){return a.k.Ra.aa},Z.listens=Z.ng,Z.ve=function(a){a.ve()},Z.forceRestClient=Z.ve,ma(U,Y)
var gi=U,hi=["Firebase"],ii=aa
hi[0]in ii||!ii.execScript||ii.execScript("var "+hi[0])
for(var ji;hi.length&&(ji=hi.shift());)!hi.length&&n(gi)?ii[ji]=gi:ii=ii[ji]?ii[ji]:ii[ji]={}
U.prototype.name=function(){return Q("Firebase.name() being deprecated. Please use Firebase.key() instead."),x("Firebase.name",0,0,arguments.length),this.key()},U.prototype.name=U.prototype.name,U.prototype.key=function(){return x("Firebase.key",0,0,arguments.length),this.path.e()?null:vc(this.path)},U.prototype.key=U.prototype.key,U.prototype.w=function(a){if(x("Firebase.child",1,1,arguments.length),ga(a))a=String(a)
else if(!(a instanceof K))if(null===O(this.path)){var b=a
b&&(b=b.replace(/^\/*\.info(\/|$)/,"/")),Xf("Firebase.child",b)}else Xf("Firebase.child",a)
return new U(this.k,this.path.w(a))},U.prototype.child=U.prototype.w,U.prototype.parent=function(){x("Firebase.parent",0,0,arguments.length)
var a=this.path.parent()
return null===a?null:new U(this.k,a)},U.prototype.parent=U.prototype.parent,U.prototype.root=function(){x("Firebase.ref",0,0,arguments.length)
for(var a=this;null!==a.parent();)a=a.parent()
return a},U.prototype.root=U.prototype.root,U.prototype.set=function(a,b){x("Firebase.html",1,2,arguments.length),Yf("Firebase.html",this.path),Rf("Firebase.html",a,this.path,!1),A("Firebase.html",2,b,!0),this.k.Jb(this.path,a,null,b||null)},U.prototype.set=U.prototype.set,U.prototype.update=function(a,b){if(x("Firebase.update",1,2,arguments.length),Yf("Firebase.update",this.path),ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d]
a=c,Q("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Tf("Firebase.update",a,this.path),A("Firebase.update",2,b,!0),this.k.update(this.path,a,b||null)},U.prototype.update=U.prototype.update,U.prototype.Jb=function(a,b,c){if(x("Firebase.setWithPriority",2,3,arguments.length),Yf("Firebase.setWithPriority",this.path),Rf("Firebase.setWithPriority",a,this.path,!1),Uf("Firebase.setWithPriority",2,b),A("Firebase.setWithPriority",3,c,!0),".length"===this.key()||".keys"===this.key())throw"Firebase.setWithPriority failed: "+this.key()+" is a read-only object."
this.k.Jb(this.path,a,b,c||null)},U.prototype.setWithPriority=U.prototype.Jb,U.prototype.remove=function(a){x("Firebase.remove",0,1,arguments.length),Yf("Firebase.remove",this.path),A("Firebase.remove",1,a,!0),this.set(null,a)},U.prototype.remove=U.prototype.remove,U.prototype.transaction=function(a,b,c){if(x("Firebase.transaction",1,3,arguments.length),Yf("Firebase.transaction",this.path),A("Firebase.transaction",1,a,!1),A("Firebase.transaction",2,b,!0),n(c)&&"boolean"!=typeof c)throw Error(z("Firebase.transaction",3,!0)+"must be a boolean.")
if(".length"===this.key()||".keys"===this.key())throw"Firebase.transaction failed: "+this.key()+" is a read-only object."
"undefined"==typeof c&&(c=!0),Uh(this.k,this.path,a,b||null,c)},U.prototype.transaction=U.prototype.transaction,U.prototype.Ig=function(a,b){x("Firebase.setPriority",1,2,arguments.length),Yf("Firebase.setPriority",this.path),Uf("Firebase.setPriority",1,a),A("Firebase.setPriority",2,b,!0),this.k.Jb(this.path.w(".priority"),a,null,b)},U.prototype.setPriority=U.prototype.Ig,U.prototype.push=function(a,b){x("Firebase.push",0,2,arguments.length),Yf("Firebase.push",this.path),Rf("Firebase.push",a,this.path,!0),A("Firebase.push",2,b,!0)
var c=Kh(this.k),c=Kf(c),c=this.w(c)
return"undefined"!=typeof a&&null!==a&&c.set(a,b),c},U.prototype.push=U.prototype.push,U.prototype.jb=function(){return Yf("Firebase.onDisconnect",this.path),new X(this.k,this.path)},U.prototype.onDisconnect=U.prototype.jb,U.prototype.P=function(a,b,c){Q("FirebaseRef.auth() being deprecated. Please use FirebaseRef.authWithCustomToken() instead."),x("Firebase.auth",1,3,arguments.length),Zf("Firebase.auth",a),A("Firebase.auth",2,b,!0),A("Firebase.auth",3,b,!0),Jg(this.k.P,a,{},{remember:"none"},b,c)},U.prototype.auth=U.prototype.P,U.prototype.fe=function(a){x("Firebase.unauth",0,1,arguments.length),A("Firebase.unauth",1,a,!0),Kg(this.k.P,a)},U.prototype.unauth=U.prototype.fe,U.prototype.xe=function(){return x("Firebase.getAuth",0,0,arguments.length),this.k.P.xe()},U.prototype.getAuth=U.prototype.xe,U.prototype.rg=function(a,b){x("Firebase.onAuth",1,2,arguments.length),A("Firebase.onAuth",1,a,!1),lb("Firebase.onAuth",2,b),this.k.P.Db("auth_status",a,b)},U.prototype.onAuth=U.prototype.rg,U.prototype.qg=function(a,b){x("Firebase.offAuth",1,2,arguments.length),A("Firebase.offAuth",1,a,!1),lb("Firebase.offAuth",2,b),this.k.P.hc("auth_status",a,b)},U.prototype.offAuth=U.prototype.qg,U.prototype.Tf=function(a,b,c){x("Firebase.authWithCustomToken",2,3,arguments.length),Zf("Firebase.authWithCustomToken",a),A("Firebase.authWithCustomToken",2,b,!1),ag("Firebase.authWithCustomToken",3,c,!0),Jg(this.k.P,a,{},c||{},b)},U.prototype.authWithCustomToken=U.prototype.Tf,U.prototype.Uf=function(a,b,c){x("Firebase.authWithOAuthPopup",2,3,arguments.length),$f("Firebase.authWithOAuthPopup",1,a),A("Firebase.authWithOAuthPopup",2,b,!1),ag("Firebase.authWithOAuthPopup",3,c,!0),Og(this.k.P,a,c,b)},U.prototype.authWithOAuthPopup=U.prototype.Uf,U.prototype.Vf=function(a,b,c){x("Firebase.authWithOAuthRedirect",2,3,arguments.length),$f("Firebase.authWithOAuthRedirect",1,a),A("Firebase.authWithOAuthRedirect",2,b,!1),ag("Firebase.authWithOAuthRedirect",3,c,!0)
var d=this.k.P
Mg(d)
var e=[vg],f=ig(c)
"anonymous"===a||"firebase"===a?R(b,xg("TRANSPORT_UNAVAILABLE")):(P.set("redirect_client_options",f.nd),Ng(d,e,"/auth/"+a,f,b))},U.prototype.authWithOAuthRedirect=U.prototype.Vf,U.prototype.Wf=function(a,b,c,d){x("Firebase.authWithOAuthToken",3,4,arguments.length),$f("Firebase.authWithOAuthToken",1,a),A("Firebase.authWithOAuthToken",3,c,!1),ag("Firebase.authWithOAuthToken",4,d,!0),p(b)?($f("Firebase.authWithOAuthToken",2,b),Lg(this.k.P,a+"/token",{access_token:b},d,c)):(ag("Firebase.authWithOAuthToken",2,b,!1),Lg(this.k.P,a+"/token",b,d,c))},U.prototype.authWithOAuthToken=U.prototype.Wf,U.prototype.Sf=function(a,b){x("Firebase.authAnonymously",1,2,arguments.length),A("Firebase.authAnonymously",1,a,!1),ag("Firebase.authAnonymously",2,b,!0),Lg(this.k.P,"anonymous",{},b,a)},U.prototype.authAnonymously=U.prototype.Sf,U.prototype.Xf=function(a,b,c){x("Firebase.authWithPassword",2,3,arguments.length),ag("Firebase.authWithPassword",1,a,!1),bg("Firebase.authWithPassword",a,"email"),bg("Firebase.authWithPassword",a,"password"),A("Firebase.authAnonymously",2,b,!1),ag("Firebase.authAnonymously",3,c,!0),Lg(this.k.P,"password",a,c,b)},U.prototype.authWithPassword=U.prototype.Xf,U.prototype.se=function(a,b){x("Firebase.createUser",2,2,arguments.length),ag("Firebase.createUser",1,a,!1),bg("Firebase.createUser",a,"email"),bg("Firebase.createUser",a,"password"),A("Firebase.createUser",2,b,!1),this.k.P.se(a,b)},U.prototype.createUser=U.prototype.se,U.prototype.Re=function(a,b){x("Firebase.removeUser",2,2,arguments.length),ag("Firebase.removeUser",1,a,!1),bg("Firebase.removeUser",a,"email"),bg("Firebase.removeUser",a,"password"),A("Firebase.removeUser",2,b,!1),this.k.P.Re(a,b)},U.prototype.removeUser=U.prototype.Re,U.prototype.pe=function(a,b){x("Firebase.changePassword",2,2,arguments.length),ag("Firebase.changePassword",1,a,!1),bg("Firebase.changePassword",a,"email"),bg("Firebase.changePassword",a,"oldPassword"),bg("Firebase.changePassword",a,"newPassword"),A("Firebase.changePassword",2,b,!1),this.k.P.pe(a,b)},U.prototype.changePassword=U.prototype.pe,U.prototype.oe=function(a,b){x("Firebase.changeEmail",2,2,arguments.length),ag("Firebase.changeEmail",1,a,!1),bg("Firebase.changeEmail",a,"oldEmail"),bg("Firebase.changeEmail",a,"newEmail"),bg("Firebase.changeEmail",a,"password"),A("Firebase.changeEmail",2,b,!1),this.k.P.oe(a,b)},U.prototype.changeEmail=U.prototype.oe,U.prototype.Se=function(a,b){x("Firebase.resetPassword",2,2,arguments.length),ag("Firebase.resetPassword",1,a,!1),bg("Firebase.resetPassword",a,"email"),A("Firebase.resetPassword",2,b,!1),this.k.P.Se(a,b)},U.prototype.resetPassword=U.prototype.Se,U.goOffline=function(){x("Firebase.goOffline",0,0,arguments.length),W.Wb().xb()},U.goOnline=function(){x("Firebase.goOnline",0,0,arguments.length),W.Wb().qc()},U.enableLogging=Nc,U.ServerValue={TIMESTAMP:{".sv":"timestamp"}},U.SDK_VERSION="2.2.3",U.INTERNAL=V,U.Context=W,U.TEST_ACCESS=Z}(),function(a,b){b=a.helper||(a.helper={})
var c={},d={devicePixelRatio:this.devicePixelRatio?this.devicePixelRatio.toFixed(2):1,clientWidth:document.documentElement.clientWidth,clientHeight:document.documentElement.clientHeight,screenWidth:this.screen.width,screenHeight:this.screen.height,timezoneOffset:(new Date).getTimezoneOffset()},e=function(){!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(a,document,"script","../www.google-analytics.com/analytics.js","ga"),ga("create",c.gaId,c.gaDomain,{storage:"none",siteSpeedSampleRate:100,clientId:a.localStorage.getItem("ga_clientId")}),ga(function(b){a.localStorage.setItem("ga_clientId",b.get("clientId"))}),ga("set","checkProtocolTask",null),ga("set","appName",c.appName),ga("set","appVersion",c.appVersion),ga("send","appview")},f=function(b){c=$.extend(c,b),c.gaId&&a.setTimeout(e,100),$.extend(d,{apikey:b.apikey,uid:b.uid,app_name:b.appName,app_version:b.appVersion,js_version:b.jsVersion,css_version:b.cssVersion})},g=0,h=function(){var b
a.ga?a.ga.apply(this,arguments):3>g&&(b=arguments,g++,a.setTimeout(function(){h.apply(h,b)},400)),"social"===arguments[1]&&i({action:"share",url:arguments[4]})},i=function(b){b=b||{}
var e=a.location,f=a.store,g=(e.hostname?e.protocol+"//"+e.hostname+e.pathname:"http://hn.premii.com/")+e.search+e.hash,h=f.get("lastPage")||"",i=f.get("notify")||{},j=f.get("yc")||{},k=f.get("appearance")||{}
$.each(i,function(a,b){i["promo-"+a]=b,delete i[a]}),$.extend(b,j,d,k,{currentPage:g,lastPage:h,t:+new Date})
var l=new a.Image
l.src=c.localAnalyticsUrl+$.param(b),f.set("lastPage",g),a.setTimeout(function(){l=void 0},1e3)},j=document.referrer
j&&-1===a.location.href.indexOf(j)&&a.setTimeout(function(){i({action:"referrer",referrer:j,landing:a.location.href})},1e3),b.enableAnalytics=f,b.analytics=h,b.localAnalytics=i}(this),function(a,b){b=a.helper||(a.helper={})
var c=function(a,b){var c,d=document.getElementById(b)
d||(c=document.querySelector("head"),d=document.createElement("style"),d.id=b,d.type="text/css",c.appendChild(d)),d.textContent=a}
b.appendStyle=c}(this),function(a,b){b=a.helper||(a.helper={})
var c=function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},d=function(a,b){var c=parseInt(a.slice(1),16),d=0>b?0:255,e=0>b?-1*b:b,f=c>>16,g=c>>8&255,h=255&c
return"#"+(16777216+65536*(Math.round((d-f)*e)+f)+256*(Math.round((d-g)*e)+g)+(Math.round((d-h)*e)+h)).toString(16).slice(1)},e=function(a,b,c){var d=parseInt(a.slice(1),16),e=parseInt(b.slice(1),16),f=d>>16,g=d>>8&255,h=255&d,i=e>>16,j=e>>8&255,k=255&e
return"#"+(16777216+65536*(Math.round((i-f)*c)+f)+256*(Math.round((j-g)*c)+g)+(Math.round((k-h)*c)+h)).toString(16).slice(1)},f=function(a,b,c){return"#"+((1<<24)+(a<<16)+(b<<8)+c).toString(16).slice(1)},g=function(a){a=0===a.indexOf("#")?a.slice(1):a
var b=parseInt(a,16)
return{r:b>>16&255,g:b>>8&255,b:255&b}},h=function(a,b,c,d,e,f,g){var h=Math.round((1-d)*e+d*a),i=Math.round((1-d)*f+d*b),j=Math.round((1-d)*g+d*c)
return{r:h,g:i,b:j}},i=function(a){return"rgb("+[a.r,a.g,a.b].join()+")"},j=function(a){for(var b=[],c=0;c<a.length;c++)b.push({hex:a[c]})
return b},k=function(a){a=j(a)
for(var b=0;b<a.length;b++){var c=a[b].hex.substring(1),d=parseInt(c.substring(0,2),16)/255,e=parseInt(c.substring(2,4),16)/255,f=parseInt(c.substring(4,6),16)/255,g=Math.max.apply(Math,[d,e,f]),h=Math.min.apply(Math,[d,e,f]),i=g-h,k=0,l=g,m=0
l>0&&(m=i/l,m>0&&(d==g?(k=60*((e-h-(f-h))/i),0>k&&(k+=360)):e==g?k=120+60*((f-h-(d-h))/i):f==g&&(k=240+60*((d-h-(e-h))/i)))),a[b].hue=k,a[b].sat=m,a[b].val=l}a=a.sort(function(a,b){return a.hue-b.hue})
for(var n=[],b=0;b<a.length;b++)n.push(a[b].hex)
return n}
b.colors={isValidColor:c,shadeColor2:d,blendColors:e,rgbToHex:f,hexToRgb:g,RGBAtoRGB:h,rgbToCss:i,sortColors:k}}(this),function(a){var b=a.helper||(a.helper={}),c=function(a){return new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');")}
b.compileTemplate=c}(this),function(a){debug=void 0===debug?!1:!0
var b=localStorage.getItem("filterLog")
b=b?JSON.parse(b):[]
var c=function(){var a=function(a){var c=$.inArray(a,b)
return-1!=c&&(b.splice(c,1),localStorage.setItem("filterLog",JSON.stringify(b))),b},c=function(a){var c=$.inArray(a,b)
return-1==c&&(b.push(a),localStorage.setItem("filterLog",JSON.stringify(b))),b},d=function(){return b=[],localStorage.removeItem("filterLog"),b},e=function(){return b}
return{add:c,remove:a,clear:d,list:e}}
a.filterLog=c(),debug&&(console.log("%cUse $log for debug. You can filter you log with $log:","font-size: 16px;"),console.log("use filterLog.<option> to modify filtering",a.filterLog),console.log("%cFiltering on for:","background: red; color: yellow; padding: 5px;",b))
var d
d=Function.prototype.bind?Function.prototype.bind.call(console.log,console):function(){Function.prototype.apply.call(console.log,console,arguments)}
var e=function(a){return console.log("%cFiltering Available for:","background: #090; color: #fff;",a),!b||0===b.length||$.inArray(a,b)>-1?d:function(){}}
a.$log=debug?e:function(){return function(){}}}(window),function(a){var b=a.helper||(a.helper={}),c={},d=document.createElement("div"),e=["Webkit","webkit","ms","Moz","moz","o","O"],f=function(a){var b
if(!c[a]&&(c[a]=a,"undefined"==typeof d.style[a])){b=a.charAt(0).toUpperCase()+a.slice(1)
for(var f=0;f<e.length;f++)if("undefined"!=typeof d.style[e[f]+b]){e=[e[f]],c[a]=e[f]+b
break}}return c[a]}
b.getPrefixedProperty=f}(this),function(a){var b=a.helper||(a.helper={}),c=function(b,c){return c=c.split("="),b[c[0]]=a.decodeURIComponent(c[1]),b},d=function(a){return a.slice(1).split("&").reduce(c,{})}
b.getQueryString=d}(this),function(a){var b=a.helper||(a.helper={}),c=/\.(jpeg|jpg|png)$/,d=/\.(jpeg|jpg|png|gif)$/,e=function(a,b){return b=b||!1,null!==a.match(b?c:d)}
b.isImageUrl=e}(this),Object.is||(Object.is=function(a,b){return 0===a&&0===b?1/a===1/b:a!==a?b!==b:a===b}),function(a){var b=a.helper||(a.helper={}),c=a.$config,d=30,e=0,f=0,g=0,h=function(b,h,i){if(!c.logjserror)return!1
if(e>d)return!1
if(+new Date-f<1e3)return!1
if(f=+new Date,!h||!i||"runtime"==h||-1!==b.indexOf("ERR_BLOCKED_BY_CLIENT")||-1!==b.indexOf("NS_ERROR_UNEXPECTED")||-1!==b.indexOf("Error connecting to extension"))return!1
g=+new Date
var j,k=new a.Image,l={apikey:c.apikey,pageurl:a.location.href,linenumber:i||"",message:b||"",js:h||"",uid:a.$app.uid,js_version:c.v.js,css_version:c.v.css,app_version:c.v.app,t:+new Date},m=[]
for(j in l)m.push(j+"="+l[j])
k.src=c.url.jserror+"log/errord41d.html?"+m.join("&")}
a.onerror=h,b.onError=h}(this),function(a){var b=a.helper||(a.helper={}),c=function(b){var c="",d=""
if(b=b.toLowerCase(),b.indexOf("win")>-1)d="windows",b.match(/msie\s([\d]+)/)||b.match(/trident/)?(c+=" ie"+(b.match(/touch/)?" ie-touch":""),b.match(/iemobile\/([\d]+)/)&&(d="wp",c+=" ie-mobile")):b.indexOf("chrome")>-1&&(c+=" win-chrome")
else if(b.match(/(iphone|ipod|ipad)/)){d="ios",c+="touch"
var e,f=b.match(/(iPad).*OS\s([\d_]+)/i),g=b.match(/(iPod)(.*OS\s([\d_]+))?/i),h=!f&&b.match(/(iPhone\sOS)\s([\d_]+)/i)
h&&!g?e=h[2].replace(/_/g,"."):f?e=f[2].replace(/_/g,"."):g&&(e=g[3]?g[3].replace(/_/g,"."):null),parseFloat(e)>=7&&(c+=" ios7")}else b.match(/(android)/)&&(d="android",c+=b.match(/firefox/)?" firefox":b.match(/chrome/)?" android-chrome":" android-browser")
return void 0!==a.navigator.standalone&&a.navigator.standalone&&(c+=" standalone"),a.os=d,d+" "+c}
b.parseUa=c}(this),function(a){var b=a.helper||(a.helper={}),c=document.createElement("a"),d=function(a){return c.href=a,{source:a,protocol:c.protocol,hostname:c.hostname,port:c.port,search:c.search,hash:c.hash,pathname:c.pathname.replace(/^([^/])/,"/$1")}}
b.parseUri=d}(this),function(a,b,c){var d,e=0,f=["ms","moz","webkit","o"]
for(d=0;d<f.length&&!a[b];++d)a[b]=a[f[d]+"RequestAnimationFrame"],a[c]=a[f[d]+"CancelAnimationFrame"]||a[f[d]+"CancelRequestAnimationFrame"]
a[b]||(a[b]=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-e)),f=a.setTimeout(function(){b(c+d)},d)
return e=c+d,f}),a[c]||(a[c]=function(b){a.clearTimeout(b)})}(this,"requestAnimationFrame","cancelAnimationFrame"),function(a,b){function c(a){return a.replace(/([=!:$\/()])/g,"\\$1")}function d(a,b,g){b&&!Array.isArray(b)&&(g=b,b=null),b=b||[],g=g||{}
var h=g.strict,i=g.end!==!1,j=g.sensitive?"":"i",k=0
if(a instanceof RegExp){var l=a.source.match(/\((?!\?)/g)||[]
return b.push.apply(b,l.map(function(a,b){return{name:b,delimiter:null,optional:!1,repeat:!1}})),f(a,b)}if(Array.isArray(a))return a=a.map(function(a){return d(a,b,g).source}),f(new RegExp("(?:"+a.join("|")+")",j),b)
a=a.replace(e,function(a,d,e,f,g,h,i,j){if(d)return d
if(j)return"\\"+j
var l="+"===i||"*"===i,m="?"===i||"*"===i
return b.push({name:f||k++,delimiter:e||"index.html",optional:m,repeat:l}),e=e?"\\"+e:"",g=c(g||h||"[^"+(e||"#\\/")+"]+?"),l&&(g=g+"(?:"+e+g+")*"),m?"(?:"+e+"("+g+"))?":e+"("+g+")"})
var m="/"===a[a.length-1]
return h||(a=(m?a.slice(0,-2):a)+"(?:\\/(?=$))?"),i||(a+=h&&m?"":"(?=\\/|$)"),f(new RegExp("^"+a+(i?"$":""),j),b)}b=a.helper||(a.helper={})
var e=new RegExp(["(\\\\.)","([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?","([.+*?=^!:${}()[\\]|\\/])"].join("|"),"g"),f=function(a,b){return a.keys=b,a}
b.pathToRegexp=d}(this),function(a,b){b=a.helper||(a.helper={})
var c=function(a){var c,d,e=[]
return a instanceof RegExp?(d=a,c=a.toString()):(d=b.pathToRegexp(a,e),c=a),{re:d,src:a.toString(),keys:e}},d=function(a,b,c){for(var d,e=c||0,f=a.length;f>e;++e){var g=a[e],h=g.re,i=g.keys,j=g.fn,k=[],l={}
if(d=b.match(h)){for(var m=1,n=d.length;n>m;++m){var o=i[m-1],p="string"==typeof d[m]?decodeURIComponent(d[m]):d[m]
o?l[o.name]=p:k.push(p)}return{params:l,splats:k,fn:j,route:g.src,next:e+1}}}},e=function(){return{routes:[],addRoute:function(a,b,d){if(!a)throw new Error(" route requires a path")
if(!b)throw new Error(" route "+a.toString()+" requires a callback")
var e=c(a)
e.fn=b,d?this.routes.unshift(e):this.routes.push(e)},match:function(a,b){var c=d(this.routes,a,b)
return c&&(c.next=this.match.bind(this,a,c.next)),c}}}
e.Route=c,e.pathToRegExp=b.pathToRegexp,e.match=d,e.Router=e,b.router=e()}(this),function(a,b){b=a.helper||(a.helper={})
var c={easeOutQuad:function(a){return a*(2-a)},easeInOutQuint:function(a){return.5>a?16*a*a*a*a*a:1+16*--a*a*a*a*a}}
b.easing=c
var d=function(b,c,d,e,f){var g=Date.now(),h=b.scrollTop
if(f=f||function(){},h===c)return void f()
var i=function(){var j=Date.now(),k=Math.min(1,(j-g)/d),l=a.helper.easing[e](k)
b.scrollTop=l*(c-h)+h,1>k?a.requestAnimationFrame(i):f()}
a.requestAnimationFrame(i)}
b.scrollTo=d}(this),function(a){var b="__cacheList__",c=!1,d={},e="__storejs__",f=function(f){var g=f||"sessionStorage"
try{a[g].setItem(e,e),a[g].getItem(e)!==e&&(c=!0),a[g].removeItem(e)}catch(h){console.log("storage.js, "+g+" is not available",h),c=!0}var i=a[g].getItem(b)
d[g]=i?JSON.parse(i):{}
var j,k,l=0,m=function(){j?a.clearTimeout(j):j=a.setTimeout(u,200)},n=function(a,b){var c=new Date
c.setMinutes(c.getMinutes()+b),d[g][a]=+c
try{p(),l++>50&&(l=0,m())}catch(e){u()}},o=function(a){delete d[g][a]
try{p()}catch(b){alert(g+" is full. removing items from cache is failing too!")}},p=function(){a[g].setItem(b,JSON.stringify(d[g]))},q=function(b){delete d[g][b],k&&a.clearTimeout(k),k=a.setTimeout(p,100)},r=function(b){var c
return d[g][b]?d[g][b]>+new Date?c=a[g].getItem(b):t(b):c=a[g].getItem(b),c?JSON.parse(c):c},s=function(b,d,e,f){if(!c){e=e||10,f=f||0
try{a[g].setItem(b,JSON.stringify(d)),n(b,e)}catch(h){f>0?alert(g+" is full. Increase Storage: "+f):(u(),s(b,d,e,f+1))}}},t=function(b,d){c||(a[g].removeItem(b),d?q(b):o(b))},u=function(){for(var a=d[g],b=Object.keys(a),c=+new Date,e=0,f=0,h=b.length;h>f;f++)a[b[f]]<c&&(t(b[f],!0),e++)
console.log("[Store] Cleaned Items: ",e),console.log("[Store] Time to clean cache: ",+new Date-c)},v=function(){a[g].clear(),d[g]={}}
return{set:s,get:r,remove:t,clear:v,cache:d[g],cleanCache:u,isDisabled:c}}
a.localStore=f("localStorage"),a.sessionStore=f("sessionStorage")}(window),function(a){var b=a.helper||(a.helper={}),c=function(a,b,d){d=d||""
var e
for(e in b)a="object"==typeof b[e]?c(a,b[e],e+"."):a.split("{"+d+e+"}").join(b[e])
return a}
b.template=c}(this),function(a){var b=a.helper||(a.helper={}),c=function(a,b){if(b||(b=Date.now()),"number"==typeof a&&"number"==typeof b){var c=Math.abs((b-a)/1e3),d=new Date,e=60,f=3600,g=86400,h="Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(",")
return d.setTime(a),e>=c?"Just now!":60*e>c?Math.round(Math.abs(c/e))+" min"+(1!==Math.round(Math.abs(c/e))?"s":""):24*f>c?Math.round(Math.abs(c/f))+" hr"+(1!==Math.round(Math.abs(c/f))?"s":""):7*g>c?Math.round(Math.abs(c/g))+" day"+(1!==Math.round(Math.abs(c/g))?"s":""):(b=new Date,b.setTime(b),h[d.getMonth()]+" "+d.getDate()+(d.getFullYear()==b.getFullYear()?"":" "+d.getFullYear()))}}
b.timeAgo=c}(this),function(a){var b=a.helper||(a.helper={}),c=function(a){return a=a||"",a=a.replace(/&apos;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")}
b.unescapeHTML=c}(this),function(a){var b=a.test||(a.test={})
b.color=function(){var b,c="#e8117F,#3498db,#14689C,#ff6600,#1ABC9C,#F16767,#FF6347,#CDA454,#E25331,#ed1c24,#0072c6,#00b488,#68217a,#026466,#D7403F,#578793,#553A59,#B75459,#31634A,#566C60,#4C7E01,#5E7D9A,#FFA633,#6762a6,#9d0000,#009999,#444444,#663399,#339966,#993366,#776B5F,#F6B701,#3DADAF,#E15e5c,#4DAF7C,#5856d6,#007aff,#34aadc,#5ac8fa,#4cd964,#ff2d55,#ff3b30,#ff9500,#8e8e93,#ED5565,#DA4453,#FC6E51,#E9573F,#F6BB42,#A0D468,#8CC152,#48CFAD,#37BC9B,#4FC1E9,#3BAFDA,#5D9CEC,#4A89DC,#AC92EC,#967ADC,#EC87C0,#D770AD,#AAB2BD,#656D78,#434A54".split(","),d=0,e=function(){a.$ui.updateAppearance("color",c[d++]),d>=c.length&&a.clearInterval(b)}
b=a.setInterval(e,1e3)}}(this),function(a){var b=a.test||(a.test={})
b.fontFamily=function(){var b,c="Source Sans Pro,Fira Sans,Roboto Slab,Open Sans,Source Sans Pro".split(","),d=0,e=function(){a.$ui.updateAppearance("fontFamily",c[d++]),d>=c.length&&a.clearInterval(b)}
b=a.setInterval(e,2e3)}}(this),function(a){var b=a.test||(a.test={})
b.fontSize=function(){var b,c="13,14,15,16,17,18,19,15".split(","),d=0,e=function(){a.$ui.updateAppearance("fontSize",c[d++]),d>=c.length&&a.clearInterval(b)}
b=a.setInterval(e,2e3)}}(this),function(a){var b=a.test||(a.test={}),c="8374636,3746692".split(","),d="8462913".split(","),e="8483763,8478605".split(","),f="8478159".split(",")
b.stories=function(){var b=c.concat(d,e,f)
console.log("test ---- stories",b),a.sessionStore.set("hn-stories-fp",b,5),a.$ui.back(),a.setTimeout(function(){a.location.hash="#/reload"},100)}}(this),function(a){var b=a.test||(a.test={})
b.openInAppBrowser=function(){a.$ui.openInBrowser("http://google.com/")}}(this),function(a){var b=a.test||(a.test={})
b.openInSystemBrowser=function(){var b=a.$config.browserType
a.$config.browserType="system",a.$ui.openInBrowser("http://google.com/"),a.$config.browserType=b}}(this),function(a){void 0!==a.FastClick&&a.FastClick.attach(document.body)}(this),function(a){if(a.devicePixelRatio&&devicePixelRatio>=2){var b=document.querySelector(".hairline-test")
1==b.offsetHeight&&document.querySelector("html").classList.add("hairlines")}}(this),function(a,b,c){b=a.$app||(a.$app={}),c=a.$
var d=c("html")
b.isIOS=d.hasClass("ios"),b.isAndroid=d.hasClass("android"),b.isIE=d.hasClass("ie")
var e=1!=c(".mobile").height(),f=!e&&(b.isIOS||b.isAndroid),g=!e&&!f,h=e||f||d.hasClass("ie-touch")
b.isMobile=e,b.isTablet=f,b.isDesktop=g,b.isTouchEnabled=h,b.isStandalone=a.navigator.standalone}(this),function(a){$("html").hasClass("ie-mobile")&&a.helper.appendStyle("@-ms-viewport{ width:auto!important; }","wp-ie")}(this),function(a){var b
a.$app.isIE&&(b=$("html"),b.hasClass("ie-mobile")&&""===a.location.hash&&(a.location.hash="#/"))}(this)
var compiledTemplates={}
compiledTemplates.commentItem=function anonymous(obj){var p=[]
with(obj)p.push('<div class="comment-meta"> <span class="upvote ',"undefined"!=typeof upVoted&&upVoted?"upvoted":"",'" data-href="',"undefined"!=typeof vote_url?vote_url:"",'"><span class="icon icon-thumbs-up"></span></span> <span class="author ',postBy==by?"op":"",'"><span class="icon icon-user"></span><span class="text"> ',by,'</span></span> <time class="time-ago"><span class="icon icon-hourglass"></span><span class="text"> ',time_ago,'</span></time> <span class="comments-count"></span></div><div class="comment-text"> ',"string"==typeof text?text:"","</div>")
return p.join("")},compiledTemplates.profileItem=function anonymous(obj){var p=[]
with(obj)p.push('<h2 class="theme-color center">',id,"</h2><div> Created on: ",time_ago,"</div><div> Karma: ",karma,"</div>"),submitted_count>0&&p.push("<div> ",submitted_count," stories/comments!</div>"),p.push('<div class="text about"> ',about,"</div>")
return p.join("")},compiledTemplates.storyItem=function anonymous(obj){var p=[]
with(obj)p.push('<li data-id="',id,'" data-self="',"story"===type&&""!==url?"false":"true",'" class="upvoted-',"undefined"==typeof upVoted?"":upVoted,'" id="story-',id,'"> <a href="#/',"story"===type&&""!==url?"article":"comments","/",id,"index.html","",'" class="story ',visitedArticle?"visited":"",'" data-hn="',type,'"> <h3>',title,' </h3> <span class="author">',by,'</span>&nbsp; <span class="time-ago">',helper.timeAgo(1e3*time),"</span> "),"string"==typeof url&&""!==url&&p.push(' <span class="url">',url,"</span> "),p.push(' </a> <a href="#/comments/',id,"index.html","",'" class="theme-bg-lighter-dark comments ',visitedComments?"visited":"",'"> <i class="icon bubble-icon">',"undefined"!=typeof kids?kids.length:0,'</i> <span class="icon icon-thumbs-up upvote"></span> <span class="points">',score,"</span> </a></li>")
return p.join("")},compiledTemplates.loadingAbsolute=function anonymous(obj){var p=[]
with(obj)p.push('<div class="show-loading absolute"> <div class="bg"> <div class="circle"></div> <br> Loading... </div></div>')
return p.join("")},compiledTemplates.loadingRelative=function anonymous(obj){var p=[]
with(obj)p.push('<div class="show-loading relative"> <div class="bg"> <div class="circle"></div> <br> Loading... </div></div>')
return p.join("")},compiledTemplates.styleTheme=function anonymous(obj){var p=[]
with(obj)p.push("html {",void 0!=fontSize?"font-size: "+fontSize+"px":"","}body {",void 0!=fontFamily?"font-family: "+fontFamily:"","}.show-loading .circle { border-color: ",backgroundColorLight," ",backgroundColorLight," ",textColor,"}.loading:after,.theme-bg,.header-container,.article-comments .op .text { background-color: ",backgroundColor,";}.native-browser-options .selected:after,.layout-navigation .selected:after,.layout-split .selected:after,.font-size .selected:after,.theme-style .selected:after,.animation-options .selected:after,.font-family .selected:after { background-color: ",textColor,";}.theme-bg-light { background-color: ",backgroundColorLight,";}.theme-bg-lighter { background-color: ",backgroundColorLighter,";}.theme-bg-lighter-dark { background-color: ",backgroundColorLighterDark,";}a,.theme-color,.article-comments .author,.alt-color { color: ",textColor,";}.theme-border { border-color: ",backgroundColor,";}.bubble-icon { background-color: ",backgroundColorLight,"; color: ",textColor,";}.bubble-icon:after { border-top-color: ",backgroundColorLight,";}.list-line li { border-bottom-color: ",backgroundColorLight,";}.page-stories .active,.article-comments .selected > .comment { box-shadow: 3px 0 0px ",backgroundColor," inset ;}"),"Dark"===themeStyle&&p.push(" html { background: #111; } body, .theme-text-color { color: ",helper.colors.shadeColor2("#ccc6c0",0),"; } .show-loading.absolute .bg { background: rgba(0,0,0,0.9); } .article-meta .self-poll, .article-meta .self-text { background: rgba(0,0,0,0.5); } .article-meta .self-poll div { background-image: -webkit-linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.06)); background-image: linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.06)); } .page-stories .bd a { color: ",helper.colors.shadeColor2("#ccc6c0",0),"; } .page-stories .bd .points { background: rgba(255,255,255,0.031); } .article-comments .comment-meta { color: #555; } .article-comments .kids .kids { border-color: rgba(255,255,255,0.09) !important; } .page-stories .bd li { border-bottom: 1px solid rgba(255,255,255,0.1); } .hairlines .page-stories .bd li { border-bottom: 0.5px solid rgba(255,255,255,0.125); } .article-comments .kid { border-top-color: rgba(255,255,255,0.1); } .hairlines .article-comments .kid { border-top-color: rgba(255,255,255,0.125); } .non-touch .article-comments-help { background: rgba(255,255,255,0.1); } .keyboard-key { color: #999; background: #222; box-shadow: inset 0 0 25px #333, 0 1px 0 #444, 0 2px 0 #444, 0 2px 3px #333; border-top-color: #393939; } .win-chrome ::-webkit-scrollbar { background-color: rgba(255,255,255,.15); } .win-chrome ::-webkit-scrollbar:hover { background-color: rgba(255,255,255,.20); } .win-chrome ::-webkit-scrollbar-thumb:vertical { background-color: rgba(255,255,255,0.1); } .win-chrome ::-webkit-scrollbar-thumb:vertical:active { background: rgba(255,255,255,0.15); /* Some darker color when you click it */ }"),p.push("")
return p.join("")},compiledTemplates.animationOption=function anonymous(obj){var p=[]
with(obj){p.push('<h3 class="theme-color theme-border">',"undefined"==typeof title?"Animation":title,'</h3><ul class="animation-options list list-line"> ')
for(var i=0,l=animationOptions.length;l>i;i++)p.push(' <li><a href="#" class="select-animation-option ',selectedAnimationOption==animationOptions[i]?"selected":"",'" data-animation-option="',animationOptions[i],'"> ',animationOptions[i]," </a></li> ")
p.push("</ul>")}return p.join("")},compiledTemplates.fontFamily=function anonymous(obj){var p=[]
with(obj){p.push('<h3 class="theme-color theme-border">',"undefined"==typeof title?"Font Style":title,'</h3><ul class="font-family list list-line"> ')
for(var i=0,l=fontFamily.length;l>i;i++)p.push(' <li><a href="#" class="select-font-family ',selectedFont==fontFamily[i]?"selected":"",'" style="font-family: ',fontFamily[i],';" data-font-family="',fontFamily[i],'"> ',fontFamily[i]," </a></li> ")
p.push("</ul>")}return p.join("")},compiledTemplates.fontSize=function anonymous(obj){var p=[]
with(obj){p.push('<h3 class="theme-color theme-border">',"undefined"==typeof title?"Text Size":title,'</h3><ul class="font-size list"> ')
for(var i=0,l=fontSizes.length;l>i;i++)p.push(' <li><a href="#" class="select-font-size ',selectedFontSize==fontSizes[i]?"selected":"",'" style="font-size: ',fontSizes[i],'px;" data-font-size="',fontSizes[i],'"> ',fontSizes[i]," </a></li> ")
p.push("</ul>")}return p.join("")},compiledTemplates.formReply=function anonymous(obj){var p=[]
with(obj)p.push('<div class="form-modal"> <form class="form-reply theme-bg-lighter theme-text-color" onsubmit="return false;"> <div class="row textarea-container theme-bg-light theme-border"> <textarea class="text " data-id="',id,'" placeholder="Type your reply here">',text,'</textarea> </div> <div class="row buttons"> <span class="user">',username,'</span> <button class="button clear">Clear</button> <button class="button cancel">Cancel</button> <button type="submit" class="button button-submit save">Save</button> </div> </form></div>')
return p.join("")},compiledTemplates.layoutNavigation=function anonymous(obj){var p=[]
with(obj){p.push('<h3 class="theme-color theme-border">',"undefined"==typeof title?"Layout":title,' <small>- Big Phone? Try a different layout</small></h3><ul class="layout-navigation list list-line"> ')
for(var i=0,l=layoutNavigations.length;l>i;i++)p.push(' <li><a href="#" class="select-layout-navigation ',selectedLayoutNavigation===layoutNavigations[i].value?"selected":"",'" data-layout-navigation="',layoutNavigations[i].value,'"> ',layoutNavigations[i].displayName," </a></li> ")
p.push("</ul>")}return p.join("")},compiledTemplates.layoutSplit=function anonymous(obj){var p=[]
with(obj){p.push('<h3 class="theme-color theme-border">',"undefined"==typeof title?"Split View":title,'</h3><ul class="layout-split list list-line"> ')
for(var i=0,l=layoutSplits.length;l>i;i++)p.push(' <li><a href="#" class="select-layout-split ',selectedLayoutSplit===layoutSplits[i].value?"selected":"",'" data-layout-split="',layoutSplits[i].value,'"> ',layoutSplits[i].displayName," </a></li> ")
p.push("</ul>")}return p.join("")},compiledTemplates.nativeBrowserOption=function anonymous(obj){var p=[]
with(obj){p.push('<h3 class="theme-color theme-border">',"undefined"==typeof title?"Browser":title,'</h3><ul class="native-browser-options list list-line"> ')
for(var i=0,l=nativeBrowserOptions.length;l>i;i++)p.push(' <li><a href="#" class="select-native-browser-option ',selectedBrowserOption==nativeBrowserOptions[i]?"selected":"",'" data-native-browser-option="',nativeBrowserOptions[i],'"> ',nativeBrowserOptions[i]," </a></li> ")
p.push("</ul>")}return p.join("")},compiledTemplates.testUi=function anonymous(obj){var p=[]
with(obj){p.push('<h3 class="theme-color theme-border">',"undefined"==typeof title?"Test":title,'</h3><ul class="test-ui list list-line"> ')
for(var t in tests)p.push(' <li><a href="#" data-test="',t,'"> ',t," </a></li> ")
p.push('</ul><h3 class="theme-color theme-border">',"undefined"==typeof title?"Test End":title,"</h3>")}return p.join("")},compiledTemplates.themeColor=function anonymous(obj){var p=[]
with(obj){p.push('<h3 class="theme-color theme-border">',"undefined"==typeof title?"Theme Color":title,'</h3><div class="themes-container"> <ul class="list clearfix"> ')
for(var i=0,l=colors.length;l>i;i++)p.push(' <li><a href="#" class="select-theme-color ',selectedColor==colors[i]?"selected-color":"",'" style="background-color: ',colors[i],';" data-color="',colors[i],'"></a></li> ')
p.push(" </ul></div>")}return p.join("")},compiledTemplates.themeStyle=function anonymous(obj){var p=[]
with(obj){p.push('<h3 class="theme-color theme-border">',"undefined"==typeof title?"Theme":title,'</h3><ul class="theme-style list list-line"> ')
for(var i=0,l=themeStyles.length;l>i;i++)p.push(' <li><a href="#" class="select-theme-style ',selectedThemeStyle==themeStyles[i]?"selected":"",'" data-theme-style="',themeStyles[i],'"> ',themeStyles[i]," </a></li> ")
p.push("</ul>")}return p.join("")},compiledTemplates.pageArticle=function anonymous(obj){var p=[]
with(obj)p.push('<div class="header-container"> <header class="header"> <div class="l-menu "><a href="#" class="back back-home"><span class="icon icon-arrow-left"></span></a></div> <ul class="r-menu list-inline menu"> <li><a href="#/article/',id,'" data-share-text="',title,'" class="share"><span class="icon icon-share share-android"></span><span class="icon share-ios icon-ios-upload-outline"></span><span class="icon share-web icon-twitter"></span></a></li> <li><a href="#/comments/',id,'" class="show-comments" data-id="',id,'"><span class="icon icon-bubble"></span></a></li> </ul> </header></div><section class="pagebd-container"> <div class="bd"> <div class="article-meta article-self- theme-bg theme-border"> <h3 class="title">',title,'</h3> <span class="points">',score,'</span> <span class="author"> ',by,'</span> <span class="time-ago">',time_ago,'</span> <span class="comments-count"><span class="icon icon-bubble"></span>',comments_count,"</span> "),"undefined"!=typeof url&&p.push(' <a class="url link article-url" href="',url,'" target="_blank"><span class="icon icon-export"></span>',url,"</a> "),p.push(' <a class="url link hn-url" href="https://news.ycombinator.com/item?id=',id,'" target="_blank"><span class="icon icon-export"></span>news.ycombinator.com/item?id=',id,"</a> "),$config.yc.isLoggedIn&&"undefined"!=typeof upVoted&&(p.push(' <a data-id="',id,'" class="upvote '),"undefined"==typeof vote_url||upVoted?p.push(" upvoted "):p.push(' " href="',vote_url," "),p.push(' "><span class="text">upvote</span><span class="icon icon-thumbs-up"></span></a> ')),p.push(' </div> <div class="article-content"> ',window.compiledTemplates.loadingAbsolute({})," </div> </div></section>")
return p.join("")},compiledTemplates.pageCommentOptions=function anonymous(obj){var p=[]
with(obj)p.push('<ul class="list comment-options theme-bg"> <li><a href="#" class="collapse-comment" data-comment-id="',commentId,'">Toggle Comment</a></li> <li><a href="#" class="collapse-thread" data-comment-id="',commentId,'">Collapse Thread</a></li> <li><a href="https://news.ycombinator.com/item?id=',commentId,'" target="_blank">YC Permalink</a></li> <li><a href="#/profile/',author,'">',author,'\'s Profile</a></li> <li><a href="#" class="hide-modal">Cancel</a></li></ul>')
return p.join("")},compiledTemplates.pageComments=function anonymous(obj){var p=[]
with(obj){if(p.push('<div class="header-container"> <header class="header"> <div class="l-menu "><a href="#" class="back back-home"><span class="icon icon-arrow-left"></span></a></div> <ul class="r-menu list-inline menu"> <li><a href="#/comments/',id,'" data-share-text="',title,'" class="share"><span class="icon icon-share share-android"></span><span class="icon share-ios icon-ios-upload-outline"></span><span class="icon share-web icon-twitter"></span></a></li> '),"undefined"!=typeof url&&p.push(' <li><a href="#/article/',id,'" class="show-article article-self-',self,'" data-id="',id,'"><span class="icon icon-newspaper"></span></a></li> '),p.push(' </ul> </header></div><section class="pagebd-container"> <div class="bd"> <div class="article-meta article-self- theme-bg theme-border"> <h3 class="title">',title,'</h3> <span class="points">',score,'</span> <span class="author"> ',by,'</span> <span class="time-ago">',time_ago,'</span> <span class="comments-count"><span class="icon icon-bubble"></span>',comments_count,"</span> "),"string"==typeof url&&""!==url&&p.push(' <a class="url link article-url" href="',url,'" target="_blank"><span class="icon icon-export"></span>',url,"</a> "),p.push(' <a class="url link hn-url" href="https://news.ycombinator.com/item?id=',id,'" target="_blank"><span class="icon icon-export"></span>news.ycombinator.com/item?id=',id,"</a> ","string"==typeof text&&""!==text?'<div class="text self-text">'+text+"</div>":""," "),"poll"===type){p.push(' <div class="text self-poll"> <ol> ')
for(var i=0,l=parts.length;l>i;i++)p.push(' <li id="poll-part-',parts[i],'">...</li> ')
p.push(" </ol> </div> ")}p.push(" "),$config.yc.isLoggedIn&&"undefined"!=typeof upVoted&&(p.push(' <a data-id="',id,'" class="upvote '),"undefined"==typeof vote_url||upVoted?p.push(" upvoted "):p.push(' " href="',vote_url," "),p.push(' "><span class="text">upvote</span><span class="icon icon-thumbs-up"></span></a> ')),p.push(' </div> <div class="article-comments theme-bg-lighter"> <ul class="kids list" id="kids-',id,'"></ul> ',window.compiledTemplates.loadingAbsolute({}),' </div> <div class="article-comments-help"> <div><span class="keyboard-key">j</span> <span class="text">Next Comment</span></div> <div><span class="keyboard-key">k</span> <span class="text">Prev Comment</span></div> <div><span class="keyboard-key">x</span> <span class="text">Collapse Comment</span></div> </div> </div></section>')}return p.join("")},compiledTemplates.pageOptions=function anonymous(obj){var p=[]
with(obj){p.push('<div class="header-container"> <header class="header"> <div class="l-menu"><a href="#" class="back back-home"><span class="icon icon-arrow-left"></span></a></div> <h1 class="center title-center">Hacker News</h1> </header></div><div class="pagebd-container"> <ul class="list options-action theme-bg"> <li><a href="#/options/list" class="show-option ',"list"==request.params.option?"selected":"",'" data-option="list">YC</a></li> <li><a href="#/options/appearance" class="show-option ',"appearance"==request.params.option?"selected":"",'" data-option="appearance">Appearance</a></li> <li><a href="#/options/about" class="show-option ',"about"==request.params.option?"selected":"",'" data-option="about">About</a></li> </ul> <div class="components"> <section class="option-component scrollable-content options-list ',"list"==request.params.option?"selected":"",'"> <div class="bd"> <p class="native-only"><small>Removed login/upvote per YC request. YC is making major changes to the site. Any app that is scrapping YC site will break. Only way to provide upvoting is by scrapping the YC site.</small></p> <div id="componentTestUi"></div> <!--ul class="list list-line"> <li class="item">Add Profile Page</li> <li class="item">Add share</li> <li class="item">Add Read it later</li> <li class="item">Cache stories & comments for offline</li> <li class="item">Add keyboard navi</li> </ul--> <ul class="list list-line"> <li><a href="#">Hacker News</a></li> <li><a href="#/f/show">Show</a></li> <li><a href="#/f/shownew">Show New</a></li> <li><a href="#/f/ask">Ask</a></li> <li><a href="#/f/newest">Newest</a></li> <li><a href="#/f/noobstories">NoobStories</a></li> <li><a href="#/f/todayTop10">Today&#39;s Best</a></li> <li><a href="#/f/yesterdayTop10">Yesterday&#39;s Best</a></li> <li><a href="#/f/weekTop10">Week&#39;s Best</a></li> </ul> <!--h3 class="theme-color theme-border">Read Later</h3> <ul class="list list-line"> <li><a href="#" class="change-read-later" data-type="readability">Readability</a></li> <li><a href="#" class="change-read-later" data-type="pocket">Pocket</a></li> </ul--> <!--div class="web-only"> <h3 class="theme-color theme-border">Timing</h3> <ul class="list list-line"> ')
for(var i in timing)p.push(' <li class="item">',i,": ",timing[i].average.toFixed(2),"ms (avg) - ",timing[i].count," (count)</li> ")
p.push(' </ul> </div--> <div class="web-only"> <h3 class="theme-color theme-border">Available on the</h3> <ul class="list download list-line"> <li><a href="https://itunes.apple.com/us/app/hacker-news-yc/id713733435" data-track="download-ios-setting" target="_blank"><span class="icon icon-apple"></span>iOS App Store</a></li> <li><a href="https://play.google.com/store/apps/details?id=com.premii.hn" data-track="download-android-setting" target="_blank"><span class="icon icon-android"></span>Android Play Store</a></li> </ul> </div> </div> </section> <section class="option-component scrollable-content options-appearance ',"appearance"==request.params.option?"selected":"",'"> <div class="bd"> <div id="componentNativeBrowser"></div> <div id="componentFontFamily"></div> <div id="componentFontSize"></div> <div id="componentThemeStyle"></div> <div id="componentThemeColor"></div> <div id="componentAnimationOption"></div> <div id="componentLayoutNavigation"></div> <div id="componentLayoutSplit"></div> </div> <br> <br> </section> <section class="option-component scrollable-content options-about ',"about"==request.params.option?"selected":"",'"> <div class="bd"> <h3 class="theme-color theme-border">Author</h3> <ul class="list list-line"> <li><a href="http://premii.com" data-track="premiicom-setting" target="_blank">www.premii.com</a></li> <li><a href="http://twitter.com/premii" data-track="tweet-premii-setting" target="_blank"><span class="icon icon-twitter"></span><span class="text">@premii</span></a></li> <li><a href="http://github.com/premii" data-track="github-premii-setting" target="_blank"><span class="icon icon-github"></span><span class="text">github.com/premii</span></a></li> </ul> <br> <ul class="list list-line"> <li><a href="mailto:apps@premii.com?subject=',window.$config.appDisplayName," app feedback&body=%0D%0A%0D%0A-------%0D%0A",window.os,"index.html",window.$config.appName,"index.html",appVersion,'%0D%0A">Send Feedback</a></li> </ul> <h3 class="theme-color theme-border">Donate</h3> <ul class="list list-line"> <li class="donate item">1KudLNBugZXH96nnRFqQyn3yqvemrcxMuB<br> <img src="http://chart.apis.google.com/chart?chs=400x400&cht=qr&chld=|1&chl=bitcoin%3A1KudLNBugZXH96nnRFqQyn3yqvemrcxMuB" width=100 height=100></li> </ul> <h3 class="theme-color theme-border">Version</h3> <ul class="list list-line"> <li class="item">',appVersion,'</li> </ul> <br> <br> <!--h3 class="theme-color theme-border">Cache Size</h3> <ul class="list list-line"> <li class="item">Persistent: 0.02 MB</li> <li class="item">Session: 1.12 MB</li> </ul--> </div> </section> </div></div>')}return p.join("")},compiledTemplates.pageProfile=function anonymous(obj){var p=[]
with(obj)p.push('<div class="header-container"> <header class="header"> <div class="l-menu "><a href="#" class="back back-home"><span class="icon icon-arrow-left"></span></a></div> <ul class="r-menu list-inline menu"> </ul> </header></div><section class="pagebd-container"> <div class="bd"> <div class="show-loading"><div class="circle"></div><br>Loading...</div> </div></section>')
return p.join("")},compiledTemplates.pageStories=function anonymous(obj){var p=[]
with(obj)p.push('<div class="header-container"> <header class="header"> <ul class="l-menu list-inline menu"> <li> <a href="#/options/"><span class="icon icon-menu"></span><span class="text"></span></a> </li> </ul> <h1 class="title-center">HN</h1> <ul class="r-menu list-inline menu"> <li><a href="http://hn.premii.com/about" class="share"><span class="icon icon-share share-android"></span><span class="icon share-ios icon-ios-upload-outline"></span><span class="icon share-web icon-twitter"></span></a></li> <li> <a href="#" class="toggle-submenu"><span class="icon icon-more-vert"></span></a> <ul class="submenu theme-bg"> <li><a href="#" class="reload"><span class="icon icon-refresh"></span><span class="text">Reload App</span></a></li> <li class="toggle-fullscreen-container"><a href="#" class="toggle-fullscreen"><span class="icon icon-fullscreen"></span><span class="text">Fullscreen</span></a></li> </ul> </li> </ul> </header></div><footer class="fixed-promo"></footer><section class="pagebd-container pull-to-refresh-content"> <div class="scrollable-content"> <div class="pull-to-refresh-layer"> <div class="pull-to-refresh-container"> <span class="pull-to-refresh-loader arrow loader theme-bg theme-border icon-arrow-down icon"></span> </div> </div> <div class="bd"> </div> <div class="scroll-bottom-promo"></div> ',window.compiledTemplates.loadingAbsolute({})," </div></section>")
return p.join("")},function(a){var b,c=a.store.get("hn-timing")||{},d=function(){b=null,a.store.set("hn-timing",c)},e=function(){b&&a.clearTimeout(b),b=a.setTimeout(d,1e3)},f=function(a,b){if(!b||1>b||isNaN(b))return c[a]
var d=c[a]||(c[a]={average:0,count:0})
d.count++,d.average=(d.average*(d.count-1)+b)/d.count,d.lastFetchTime=b,e()}
a.$api.performanceTime=f}(this),function(a,b,c){b=a.helper||(a.helper={}),c=a.api||(a.api={})
var d,e,f=a.$config,g=new Firebase("http://hacker-news.firebaseio.com/v0/"),h=g.child("item"),i="apikey="+f.apikey+"&uid="+a.$app.uid,j={newest:"/newest?"+i,noobstories:"/noobstories?"+i,ask:"/ask?"+i,show:"/show?"+i,shownew:"/shownew?"+i},k=new Firebase("https://hacker-news.firebaseio.com/.info/connected")
k.on("value",function(a){e=a.val(),console.log("------------------------------------------",e)})
var l={},m=function(b,c,d,e){var f,h=[],i=!0,k=+new Date
d=d||0,e=e||30
var m=function(b){if(b&&"comment"!==b.type)if(i||a.$api.performanceTime("item",+new Date-k),l[b.id]=b,c){for(;h.length>0;)c(h.shift())
c(b)}else h.push(b)},o=function(c){for(var f=+new Date,g=d;g<c.length&&e+d>g;g++)n(c[g],m)
a.$api.performanceTime("stories-"+b,f-k),k=f},p=a.sessionStore.get("hn-stories-"+b)
if(p)o(p)
else if("fp"===b)g.child("topstories").once("value",function(b){i=!1
var c=b.val()
a.sessionStore.set("hn-stories-fp",c,5),o(c)})
else if("|newest|noobstories|ask|shownew|show".indexOf("|"+b)>-1)f=function(a){for(var b=[],c=0,d=a.length;d>c;c++)n(a[c].id,m),b.push(a[c].id)},$.ajax({url:a.$config.url.stories[0]+j[b],dataType:"jsonp",success:f,error:function(){}})
else if(0===b.indexOf("user")){var r=b.split(":")
r=r[1],q(r,function(a){console.log(a),o(a.submitted)})}else if(-1!==b.indexOf("Top10")){var s=b.split(":")
s=s[1]
var t,u=new Date
u.setHours(0),u.setMinutes(0),u.setSeconds(0),t=new Date(u),"todayTop10"===b?t.setHours(24):"yesterdayTop10"===b?u.setHours(-24):"weekTop10"===b&&u.setDate(u.getDate()-7),f=function(a){a=a.hits
for(var b=[],c=0,d=a.length;d>c;c++)n(a[c].objectID,m),b.push(a[c].objectID)},$.ajax({url:a.$config.url.stories[0]+"/best/"+b,dataType:"jsonp",success:f,error:function(){}})}},n=function(a,b){h.child(a).once("value",function(a){b.apply(b,[a.val()])})},o=function(a,b){console.log(a)
var c=l[a]
c?b(c):n(a,b)},p=function(a){return l[a]},q=function(a,b){d||(d=g.child("user")),d.child(a).once("value",function(a){a&&b.apply(b,[a.val()])})},r=function(b,c,d){{var e=function(c){var e=$("<div></div>").html(c&&c.content)
$("*",e).each(function(a,b){b.className&&(b.className="")})
var f=e.html()
a.sessionStore.set("hn-article-"+b,f,100),d.apply(d,[!1,f])},g=function(){d.apply(d,[!0])};+new Date}$.ajax({url:a.helper.template(f.url.readability,{url:encodeURIComponent(c),id:b,apikey:f.apikey}),dataType:"json",success:e,error:g})},s=function(b,c,d){var e=a.sessionStore.get("hn-article-"+b)
e?d.apply(d,[!1,e]):r(b,c,d)}
c.stories=m,c.story=o,c.storySync=p,c.comment=n,c.article=s,c.user=q}(this),function(a){var b=a.$app||(a.$app={}),c=a.store.get("visited")||{},d=function(){a.store.set("visited",c)},e=function(){c.version=2,$.each(c,function(a,b){"version"!==a&&(b.a<+new Date-6048e5&&delete b.a,b.c<+new Date-6048e5&&delete b.c,b.a||b.c||delete c[a])})}
e(),d()
var f={article:"a",comments:"c","last-item":"l"}
b.visited={set:function(a,b){var e=c[a]
e||(e={},c[a]=e),e[f[b]]=+new Date,d()},get:function(a,b){var d=c[a]
return!(!d||!d[f[b]])}}}(this),function(a,b){b=a.$ui||(a.$ui={})
var c={touchstart:[],touchend:[],touchmove:[]},d={touchmove:!1},e=function(a){for(var b=a.type,e=0,f=c[b].length;f>e;e++)d[b]&&a.preventDefault(),c[b][e](a)},f=function(){document.addEventListener("touchstart",e,!1),document.addEventListener("touchmove",e,!1),document.addEventListener("touchend",e,!1)},g=function(a){for(var b in a)c[b.toLowerCase()].push(a[b])
1===c.touchstart.length&&f()}
b.addTouchEvents=g}(this),function(a,b){b=a.$ui||(a.$ui={})
var c=function(b,c,d,e,f){var g=Date.now(),h=e/d*Math.abs(b.startPosition-b.endPosition),i=b.startPosition,j=0
f=f||function(){},c.getStepSize=function(a){return-100+100*a/d}
var k=b.page,l=c.page,m=b.endPosition,n=function(){var d=Date.now(),e=Math.min(1,(d-g)/h),o=a.helper.easing.easeOutQuad(e)
j++,i=o*(m-b.startPosition)+b.startPosition,k.style.WebkitTransform="translate3d("+i+"px, 0, 0)",k.style.transform="translate3d("+i+"px, 0, 0)",k.style.display="block",l.style.WebkitTransform="translate3d("+c.getStepSize(i)+"px, 0, 0)",l.style.transform="translate3d("+c.getStepSize(i)+"px, 0, 0)",l.style.display="block",a.$app.isIE&&(l.style.height="auto"),1>e&&(m>0&&m>i||0===m&&i>m)?requestAnimationFrame(n):f()}
requestAnimationFrame(n)}
a.$ui.animatePages=c}(this),function(a,b,c){b=a.helper||(a.helper={}),c=a.$ui||(a.$ui={})
var d=a.$config,e=a.store.get("appearance")||{},f=d.appearance,g={},h=a.store.get("theme")
h&&(e.color=h.split("-")[0],a.store.remove("theme"))
var i=a.store.get("fontsize")
i&&("large"==i?e.fontSize=16:"largest"==i&&(e.fontSize=18),a.store.remove("fontsize"))
var j=a.store.get("browser")
j&&(e.browser="External",a.store.remove("browser"))
var k=b.colors,l=function(a){var b=(k.hexToRgb(a),k.hexToRgb(k.shadeColor2(a,.9))),c=k.hexToRgb(k.shadeColor2(a,.98)),d=k.shadeColor2(k.rgbToHex(c.r,c.g,c.b),-0.013)
return{backgroundColor:a,textColor:a,backgroundColorLight:k.rgbToCss(b),backgroundColorLighter:k.rgbToCss(c),backgroundColorLighterDark:d}},m=function(a){var b=(k.hexToRgb(a),k.shadeColor2(a,-0.8)),c=k.hexToRgb(k.shadeColor2(a,-0.98)),d=k.shadeColor2(k.rgbToHex(c.r,c.g,c.b),.033)
return{backgroundColor:k.shadeColor2(a,-0.7),textColor:a,backgroundColorLight:b,backgroundColorLighter:k.rgbToCss(c),backgroundColorLighterDark:d}},n=function(){for(var b in e)f[b]===e[b]&&delete e[b]
Object.keys(e).length>0?a.store.set("appearance",e):a.store.remove("appearance"),$.extend(g,f,e)},o=function(){$.extend(g,f,e)
var c="Dark"!==g.themeStyle?l(g.color):m(g.color),d=a.compiledTemplates.styleTheme($.extend(c,g))
b.appendStyle(d,"theme"),a.$app.isIE&&r(g.color),$("meta[name=theme-color]").attr("content",g.color)},p=function(){$("html").toggleClass("alt-layout","alt"===g.layoutNavigatiaon)},q=function(){a.$app.isMobile||$("html").toggleClass("split-view","Enable"===g.layoutSplit)},r=function(a){$("meta[name=msapplication-TileColor]").attr("content",a)}
o(),p(),q(),n()
var s=function(b,c){"userColor"===b?(e.color=c,e.userColors||(e.userColors=[]),-1===e.userColors.indexOf(c)&&e.userColors.push(c),o()):e[b]=c,n(),"layoutNavigatiaon"===b?p():"layoutSplit"===b?q():"storyView"===b||o()
var d={action:"appearance",property:b,value:c}
a.helper.localAnalytics(d)},t={news:"card",worldnews:"card",politics:"card",technology:"card"},u=a.store.get("storyTypes")||$.extend({},t),v=function(b,c){"list"===c&&!t[b]||"card"===c&&t[b]?u[b]&&delete u[b]:u[b]=c,a.store.set("storyTypes",u)},w=function(a){return u[a]||t[a]}
c.appearance=g,c.updateAppearance=s,c.updateStoryViewType=v,c.getStoryViewType=w}(this),function(a,b){b=a.$ui||(a.$ui={})
var c=a.location.hash,d=a.location,e=function(){var b=d.hash
""!==b&&c===b?d.hash="":a.history.back()}
b.back=e}(this),function(a,b,c){b=a.$ui||(a.$ui={}),c=a.$app||(a.$app={})
var d={},e=function(a){d[a.name]={component:a,child:{}}},f=function(a,b,e){var f,g,h=d[a]
h&&(h.child[b]||(g=new h.component.controller,h.child[b]=g,g.onPointerDown&&c.addPointerDown(b,g.onPointerDown,g,g.onLongPointerDown)),f=document.querySelector(b),f&&h.child[b].init(f,e))},g=function(a){"string"==typeof a?f.apply(f,arguments):e.apply(e,arguments)}
b.component=g,b._component={list:function(){return Object.keys(d)}}}(this),function(a){if(a.$app.isMobile&&(!a.$app.isIOS||a.$config.nativeApp||a.$app.isStandalone)){var b,c,d,e,f,g=!1,h=!1,i=0,j=300,k=100,l=document.querySelector("html"),m=document.querySelector(".pages-container"),n=function(h){console.log("onTouchStart()")
var j=document.querySelector(".page-visible"),k=j.getAttribute("data-page-level")
k=a.parseInt(k,10),!j||0>=k||(d=a.$events.pointerEventToXY(h),d.x<30&&(i=0,g=!0,f=+new Date,b=j,c=m.querySelector('.page[data-page-level="'+(k-1)+'"]'),b.style.zIndex=100,c.style.zIndex=99,c.style.display="block",c.style.WebkitTransform="translate3d(-100px, 0, 0)",c.style.transform="translate3d(-100px, 0, 0)",e=a.innerWidth,l.classList.add("swiping")))},o=function(){console.log("onTouchEnd()")
var d=function(){l.classList.remove("swiping"),b=void 0,c=void 0,i=0}
g&&(g=!1,i>k&&+new Date-f<j?a.$ui.animatePages({page:b,startPosition:i,endPosition:e},{page:c},e,j,function(){b.classList.remove("page-visible"),c.classList.add("page-visible"),b.style.display="none",b.style.WebkitTransform="",b.style.transform="",c.style.WebkitTransform="",c.style.transform="",a.removePage(b),a.setTimeout(function(){a.$ui.back()},10),d()}):h?a.$ui.animatePages({page:b,startPosition:i,endPosition:0},{page:c},e,j,function(){c.style.display="none",b.style.WebkitTransform="",b.style.transform="",c.style.WebkitTransform="",c.style.transform="",d()}):(c.style.display="none",c.style.WebkitTransform="",c.style.transform="",d())),h=!1},p=function(a){return-100+100*a/e},q=function(e){if(g){var f=a.$events.pointerEventToXY(e)
Math.abs(d.y-f.y)<30||i>50?(e.preventDefault(),i=f.x-d.x,1>i&&(i=0),h=!0,b.style.WebkitTransform="translate3d("+i+"px, 0, 0)",b.style.transform="translate3d("+i+"px, 0, 0)",c.style.WebkitTransform="translate3d("+p(i)+"px, 0, 0)",c.style.transform="translate3d("+p(i)+"px, 0, 0)"):g=!1}}
a.$ui.addTouchEvents({touchStart:n,touchMove:q,touchEnd:o})}}(this),function(a,b,c){b=a.$app||(a.$app={}),c=a.$
var d,e=[],f=c(document.body),g=!1,h="undefined"==typeof a.ontouchstart?"mousedown":"touchstart"
navigator.msPointerEnabled&&(h="MSPointerDown"),document.body.addEventListener(h,function(){d=+new Date},!1),f.on("click",function(){})
var i=function(){},j=function(h,j,k,l){if(j=j||i,l=l||i,!e[h]){var m=function(e){var f=c(e.target),h=f.closest("A")
g=!b.isDesktop&&a.getSelection().toString().trim().length>0,!d||!g&&+new Date-d<350?(j.apply(k?k:j,[1===h.length?h:f,e]),h.length>0&&h.data("track")):!g&&+new Date-d<2e3?(e.preventDefault(),l.apply(k?k:l,[1===h.length?h:f,e])):e.preventDefault()}
e[h]={callback:j,longDownCallback:l,eventListener:m,scope:k},f.on("click",h,m)}}
b.eventList=e,a.$app.addPointerDown=j}(this),function(a){var b={}
a.$(document).on("keyup",function(a){var c=a.keyCode
for(var d in b)b[d].callback.apply(b[d].scope,[c,a])})
var c=function(a,c,d){d=d||c,b[a]={callback:c,scope:d,name:a}},d=function(a){delete b[a]}
a.$app.addKeyPress=c,a.$app.removeKeyPress=d}(this),function(a,b){b=a.$events||(a.$events={})
var c=function(a){var b={x:0,y:0}
if(0===a.type.indexOf("touch")){var c=a.touches[0]||a.changedTouches[0]
b.x=c.pageX,b.y=c.pageY}else 0===a.type.indexOf("mouse")&&(b.x=a.pageX,b.y=a.pageY)
return b}
b.pointerEventToXY=c}(this),function(a){var b=(a.helper.router,!1),c=!1,d=!1,e=a.location
if(a.history&&a.history.pushState){var f=history.__proto__.pushState
history.__proto__.pushState=function(b){f.apply(history,arguments)
var c=document.createEvent("Event")
c.initEvent("statechanged",!1,!1),c.state=b,a.dispatchEvent(c)}}var g=function(){b||(a.$app.routes.match(e.pathname+e.search+e.hash),b=!0)}
a.addEventListener("submit",function(b){return"post"==b.target.method&&a.$app.routes.match(b.target.action,b)?(b.preventDefault(),!1):!0}),a.addEventListener("popstate",function(){return console.log("[popstate]",history.state),b=!1,d?(d=!1,void(c=!1)):(c=!0,void g())},!1),a.addEventListener("load",function(){console.log("[load]"),b=!1,g(),c=!0,d=!0,a.setTimeout(function(){c=!1,d=!1},20)},!1),a.addEventListener("hashchange",function(){return console.log("[hashchange]",history.state),console.log("cancelHashChange",c),b=!1,c?(c=!1,void(d=!1)):void g()},!1)}(this),function(a,b){b=a.$ui||(a.$ui={})
var c="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",d=function(a){console.log("showImage()"),a.attr("src",a.data("src")).data("loaded","true")},e=function(a){a.data("hidden")===!0&&a.attr("src",a.data("src")).data("hidden","false")},f=function(a){console.log("hideImage()")
var b=a.height()
a.data("hidden")||a.parent().height(b),a.height(b).attr("src",c).data("hidden","true")},g=function(){var b,c,g,h,i=function(){h&&a.clearTimeout(h),o()},j=function(){h&&a.clearTimeout(h),h=a.setTimeout(i,300)},k=0,l=function(){console.log("loadImages()")
for(var a,c=b.parent().height(),h=0,i=g.length;i>h;h++)a=$(g[h]),a.data("loaded")?a.position().top+2*c<0?f(a):a.position().top>2*c?f(a):e(a):(console.log(h,a.position().top,c,a.data("loaded")),a.position().top<2*c&&d(a))
console.log(k++," ---------------------------------------------------------------------- ")},m=+new Date,n=function(){console.log("onScrollCallback()"),p(),j(),new Date-m>300&&l()},o=function(){l(),$(b.parent()).on("scroll resize",n)},p=function(){$(b.parent()).off("scroll resize",n),l()},q=function(a){console.log("init",a),b=$(a.scrollableRegion),c=a.imageQuerySelector,g=$(c,b),o()},r=function(){console.log("update(): more images are loaded in the scroller;"),g=$(c,b)},s=function(){h&&a.clearTimeout(h),p()}
return{init:q,update:r,unload:s}}
b.lazyload=g}(this),function(a,b,c){b=a.$ui||(a.$ui={}),c=a.$
var d=c(".app-modal"),e={},f=function(a,b){a.hasClass("hide-modal")?(b.preventDefault(),h(e.onHideCallback)):a.hasClass("app-modal")?h(e.onHideCallback):(e.onPointerDown(a,b),h(e.onHideCallback))},g=function(b){b.html&&(d[0].innerHTML=b.html,e={chromeless:b.chromeless||!1,onHideCallback:b.onHideCallback||function(){},onPointerDown:b.onPointerDown||function(){}},a.setTimeout(function(){d.addClass("show-modal")},10))},h=function(b){d.removeClass("show-modal"),a.setTimeout(function(){b.apply(b),e={}},200)}
a.$app.addPointerDown(".app-modal",f),b.appModal=g}(this),function(a){var b=a.$ui||(a.$ui={}),c=function(b){var c="In App"===a.$ui.appearance.browser?"blank":"system";(0===b.indexOf("itms-apps")||0===b.indexOf("market")||0===b.indexOf("mailto"))&&(c="system"),a.$app["native"]&&a.$app["native"].openInBrowser?a.$app["native"].openInBrowser(b):a.$config.nativeApp?a.open(b,"_"+c,"enableViewportScale=yes"):a.open(b,"_"+c),a.helper.localAnalytics({action:"openInBrowser",destinationUrl:b})}
b.openInBrowser=c}(this),function(a,b){b=a.helper||(a.helper={})
var c={},d=document.querySelector(".pages-container")
a.$ui.pages=c
var e=function(a,b){b=b||function(){}
var e=document.createElement("div")
e.style.display="none",e.setAttribute("class","page theme-bg-lighter page-"+a),e.setAttribute("data-page-name",a),e.setAttribute("data-page-id",c[a].pageId),e.setAttribute("data-page-level",c[a].pageLevel),e.innerHTML=c[a].content,d.appendChild(e),c[a].page=e,b.apply(b,[e])},f=function(a,b){var d=c[a].page
d.setAttribute("data-page-id",c[a].pageId),d.innerHTML=c[a].content,c[a].onPageVisible&&c[a].onPageVisible.apply(c[a].onPageVisible,[d,b])},g=function(b){var d=b.getAttribute("data-page-name"),e=c[d]
b.parentNode.removeChild(b),e&&(delete e.page,e.onPageUnload&&e.onPageUnload(),a.$app.removeKeyPress(".page-"+d),delete c[d])},h=100,i=function(b,d){var e=c[b]
e.onPageVisible&&e.onPageVisible.apply(e.onPageVisible,[e.page,d]),e.onPointerDown&&a.$app.addPointerDown(".page-"+b,e.onPointerDown,e,e.onLongPointerDown),e.onKeyPress&&a.$app.addKeyPress(".page-"+b,e.onKeyPress,e),m(b)},j=function(){var b=a.$ui.appearance
return"Enable"===b.animation&&(a.$app.isMobile||"Disable"===b.layoutSplit)},k=a.location,l=function(b,e){e=e||!1
var f=d.querySelector(".page-visible"),g=d.querySelector(".page-"+b),l={},m={},n=300
f==g&&(f=void 0)
var o=function(){f&&(a.$app.isIE&&a.$app.isMobile?f.style.height=0:f.style.display="none",f.classList.remove("page-visible")),g&&(g.style.display="block",g.classList.add("page-visible"),g.style.zIndex=++h),a.helper.analytics("send","pageview",{page:(a.$config.nativeApp?"/":k.pathname)+k.search+k.hash,title:""})}
j()&&f&&g?(c[b].pageLevel>f.getAttribute("data-page-level")?(g.style.zIndex=++h,l.page=g,l.startPosition=a.innerWidth,l.endPosition=0,m.page=f):(f.style.zIndex=++h,f.style.display="block",l.page=f,l.startPosition=0,l.endPosition=a.innerWidth,m.page=g),a.$ui.animatePages(l,m,a.innerWidth,n,function(){o(),i(b,e)})):(o(),i(b,e))},m=function(a){for(var b=c[a].pageLevel,e=d.querySelectorAll(".page"),f=0,h=e.length;h>f;f++)e[f].getAttribute("data-page-name")!==a&&e[f].getAttribute("data-page-level")>=b&&g(e[f])},n=function(a){var b=a.pageName,g=d.querySelector(".page-"+b)
if(c[b]=a,g)a.page=g,a.pageId&&a.pageId===g.getAttribute("data-page-id")?l(b,!0):(f(b,!1),l(b,!0))
else{var h=function(){l(b,!1)}
e(b,h)}},o=function(a){g(a)}
a.pageManager=n,a.removePage=o}(this),function(a){"use strict"
var b,c,d,e,f,g,h=(document.querySelector(".error"),function(b){var c=a.$events.pointerEventToXY(b)
return c?c.y:null}),i={},j=(document.querySelector("html.android"),document.querySelector("html.ios"),function(b){i.region=b.scrollRegion,i.content=b.scrollRegion.querySelector(".scrollable-content"),i.ptr_layer=i.region.querySelector(".pull-to-refresh-layer"),i.ptr_loader=i.ptr_layer.querySelector(".loader"),i.ptr_text=i.ptr_layer.querySelector(".text"),i.onPullToRefresh=b.callback,a.$ui.addTouchEvents({touchStart:k,touchMove:l,touchEnd:m})}),k=function(d){console.log("onTouchStart()",d,a.$events.pointerEventToXY(d))
var e=d.target
if(i.region.contains(e)){var g=i.region.scrollTop
c||0!==g||(b=i.region,f=h(d))}},l=function(g){var j,k
if(b){if(c)return
if(j=i.region.scrollTop,k=h(g),0===j&&0>f-k){g.preventDefault()
var l=h(g)-f
l=Math.pow(l,.9)
var m="translate3d(0, "+l+"px, 0)"
i.content.style.WebkitTransform=m,i.content.style.transform=m,d=55>l?!1:!0,"android"!==a.os&&(46>l?l=45:l>54&&(l=55),i.ptr_loader.style.WebkitTransform="rotate("+18*(l-45)+"deg)",i.ptr_loader.style.transform="rotate("+18*(l-45)+"deg)"),"android"===a.os&&e!=d&&(e=d,d?i.ptr_loader.classList.add("rotate-loader-half"):i.ptr_loader.classList.remove("rotate-loader-half"))}}},m=function(e){if(console.log("onTouchEnd()",e),b){console.log("onTouchEnd() scrollable Pull to refresh region ==============",b),b=null,f=null,g=null
i.content.style.WebkitTransform="",i.content.style.transform="",i.content.classList.add("transitioning")
var h=function(){i.content.classList.remove("refreshing"),a.setTimeout(function(){d=void 0,c=!1,i.content.classList.remove("transitioning"),i.ptr_loader.classList.add("arrow")},300)}
!c&&d?(c=!0,i.content.classList.add("refreshing"),i.ptr_loader.classList.remove("rotate-loader-half"),i.ptr_loader.classList.remove("arrow"),i.onPullToRefresh(h)):h()}}
a.$ui.pullToRefresh=j}(window),function(a,b,c){b=a.helper||(a.helper={}),c=a.$app
var d=(a.$log("routes"),a.location),e=d.pathname+d.search,f=function(a,c,d){b.router.addRoute(e+a,c,d)},g=function(a){console.log("loadRoute()",a),a&&(a.fn({params:a.params,route:a.route}),a.next&&g(a.next()))},h=function(a){var c=b.router.match(a)
g(c)}
c.routes={add:f,match:h}}(this),function(a,b){b=a.$ui||(a.$ui={})
var c="https://twitter.com/intent/tweet?text=",d=24,e=140,f=function(a,b){return a=$.trim(a),a=a.length+d<e?a:a.substring(0,e-d),a=a+"\n"+b},g=function(a,d){a=f(a,d),b.openInBrowser(c+encodeURIComponent(a))},h=function(a){b.openInBrowser("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(a))},i=function(a,b){var c=[]
c.push("subject="+encodeURIComponent(a)),c.push("body="+encodeURIComponent(a)+"%0A%0A"+encodeURIComponent(b))
var d=document.getElementById("mailiframe")
d||(d=document.createElement("iframe"),document.body.appendChild(d),d.style.visibility="none",d.style.position="absolute"),d.style.display="block",d.src="mailto:?"+c.join("&"),d.style.display="none"},j=function(b){var c=a.store.get("share")
c=c||0,a.store.set("share",++c),a.helper.analytics("send","social","twitter","share",b)},k=function(b,c,d,e){var f=a.socialmessage
f&&f.send({subject:b,text:c,url:d,offset:e}),j(d)},l=function(a,b,c,d,e){"twitter"===e?g(b,c):"facebook"===e?h(c):"mail"===e?i(b,c):g(b,c),j(c)}
b.share=a.$config.nativeApp?k:l}(this),function(a){var b=a.helper.getPrefixedProperty("transform"),c=function(c,d,e,f,g,h){var i=c.page,j=d.page,k=c.endPosition,l=c.startPosition,m=Date.now(),n=f/e*Math.abs(l-k),o=l,p=0
g=g||1,h=h||function(){}
var q=function(a,b){return(a-e*b)/2}
i.style.display="block",j.style.display="block"
var r=function(){var c=Date.now(),d=Math.min(1,(c-m)/n),e=a.helper.easing.easeOutQuad(d)
p++,o=e*(k-l)+l,i.style[b]="translate3d(0, "+o+"px, 0)",j.style[b]="translate3d(0, "+q(o,g)+"px, 0)",1>d&&(-1===g&&k>o||1===g&&o>k)?a.requestAnimationFrame(r):h({frameCount:p,time:+new Date-m})}
a.requestAnimationFrame(r)},d=function(a){for(var c,d,e=0,f=a.length;f>e;e++)c=a[e],c.classList.contains("swipe-current")?(d=e,e>0&&(a[e-1].style.display="block",a[e-1].style[b]="translate3d(0, -100%, 0)"),c.style.display="block"):c.style.display="none",e==d+1&&(c.style.display="block",c.style[b]="translate3d(0, 100%, 0)")},e=function(a,b,c){c=c||1
var d=a*c+2*b
return 1===c?0>d?d=0:d>a&&(d=a):-1===c&&(d>0?d=0:-1*a>d&&(d=-1*a)),d},f=function(f){var g={}
g.scrollRegion=f.scrollRegion,g.children=f.children,g.afterAnimationCallback=f.callback||function(){}
var h,i,j,k,l,m,n,o,p,q=!1,r=0,s=.65,t=350,u=!1,v=!1,w=function(b){var c=b.target
!u&&g.scrollRegion.contains(c)&&(i=$(c).closest(".swipe-current"),i=i[0],i&&(v=!0,n=+new Date,h=a.$events.pointerEventToXY(b),m=i.clientHeight,j=i.nextElementSibling,k=i.previousElementSibling))},x=function(){1===q?(k&&(k.style.display="none"),j=l.nextElementSibling,j&&(j.style[b]="translate3d(0, 100%, 0)",j.style.display="block")):-1===q&&(j&&(j.style.display="none"),k=l.previousElementSibling,k&&(k.style[b]="translate3d(0, -100%, 0)",k.style.display="block")),v&&u&&g.afterAnimationCallback(l),v=!1,u=!1,j=null,k=null,i=null,q=!1,o=null},y=function(){var a
a=1===r?l.nextElementSibling:l.previousElementSibling,r=0,a?(i=l,l=a,i.style.zIndex=1,l.style.zIndex=2,c({page:l,startPosition:m*r,endPosition:0},{page:i,startPosition:0},m,t,r,function(){var a=1===r?"-100%":"100%"
i.style[b]="translate3d(0, "+a+", 0)",i.classList.remove("swipe-current"),l.classList.add("swipe-current"),x()})):x()},z=function(){console.log("onTouchEnd()")
var a
v&&q&&!u?(q=1===q?1:-1,a=Math.abs(o.y-h.y),t=m*s,u=!0,c({page:l,startPosition:p.top,endPosition:0},{page:i,startPosition:p.bottom},m,t,q,function(){var a=1===q?"-100%":"100%"
i.style[b]="translate3d(0, "+a+", 0)",i.classList.remove("swipe-current"),l.classList.add("swipe-current"),0!==r?y():x()})):u||x()},A=function(c){if(c.preventDefault(),!u&&v){o=a.$events.pointerEventToXY(c)
var d=o.y-h.y
Math.abs(d)>0&&(d>0&&k?(l=k,q=-1):0>d&&j?(l=j,q=1):(l=null,q=0),l&&(p={bottom:d,top:e(m,d,q)},i.style[b]="translate3d(0, "+p.bottom+"px, 0)",i.style.zIndex=1,l.style[b]="translate3d(0, "+p.top+"px, 0)",l.style.zIndex=2))}}
g.scrollRegion.querySelector(".swipe-current")||g.children[0].classList.add("swipe-current"),d(g.children),a.$ui.addTouchEvents({touchStart:w,touchEnd:z}),g.scrollRegion.addEventListener("touchmove",A,!1)
var B=function(a){g.scrollRegion=a.scrollRegion,g.children=a.children,g.scrollRegion.querySelector(".swipe-current")||g.children[0].classList.add("swipe-current"),d(g.children),g.scrollRegion.addEventListener("touchmove",A,!1)}
return{update:B}}
a.$ui.swipeVertical=f}(window),function(a,b){b=a.$ui||(a.$ui={})
var c=document,d=c.documentElement,e=c.fullscreenEnabled||c.mozFullScreenEnabled||c.webkitFullscreenEnabled||c.msFullscreenEnabled||c.webkitIsFullScreen||!1
e&&c.querySelector("html").classList.add("fullscreen-enabled")
var f=function(a){a=a||d
var b=c.fullscreenElement||c.webkitFullscreenElement||c.mozFullScreenElement||c.msFullscreenElement
b?c.exitFullscreen?c.exitFullscreen():c.msExitFullscreen?c.msExitFullscreen():c.mozCancelFullScreen?c.mozCancelFullScreen():c.webkitExitFullscreen&&c.webkitExitFullscreen():a.requestFullscreen?a.requestFullscreen():a.msRequestFullscreen?a.msRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.webkitRequestFullscreen&&a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}
b.toggleFullScreen=f}(this),function(a,b){b=a.helper||(a.helper={})
var c="animationOption",d="Enable,Disable".split(","),e=function(){}
e.prototype={init:function(a){this.body=a,this.updateHtml()},updateHtml:function(){var b=a.compiledTemplates[c]
this.body.innerHTML=b({animationOptions:d,selectedAnimationOption:a.$ui.appearance.animation})},onPointerDown:function(b,c){c.preventDefault(),b.hasClass("select-animation-option")&&(a.$ui.updateAppearance("animation",b.data("animation-option")),this.updateHtml())}},a.$ui.component({name:c,controller:e})}(this),function(a,b){b=a.helper||(a.helper={})
var c="fontFamily",d="Source Sans Pro,Fira Sans,Roboto Slab,Open Sans".split(","),e=function(){}
e.prototype={init:function(a){this.body=a,this.updateHtml()},updateHtml:function(){var b=a.compiledTemplates[c]
this.body.innerHTML=b({fontFamily:d,selectedFont:a.$ui.appearance.fontFamily})},onPointerDown:function(b,c){c.preventDefault(),b.hasClass("select-font-family")&&(a.$ui.updateAppearance("fontFamily",b.data("font-family")),this.updateHtml())}}
var f={name:c,controller:e}
a.$ui.component(f)}(this),function(a,b){b=a.helper||(a.helper={})
var c="fontSize",d="13,14,15,16,17,18,19".split(","),e=function(){}
e.prototype={init:function(a){this.body=a,this.updateHtml()},updateHtml:function(){var b=a.compiledTemplates[c]
this.body.innerHTML=b({fontSizes:d,selectedFontSize:a.$ui.appearance.fontSize})},onPointerDown:function(b,c){c.preventDefault(),b.hasClass("select-font-size")&&(a.$ui.updateAppearance("fontSize",b.data("font-size")),this.updateHtml())}}
var f={name:c,controller:e}
a.$ui.component(f)}(this),function(a,b){b=a.helper||(a.helper={})
var c="formReply",d=a.store,e="reply-text",f=function(){}
f.prototype={init:function(a,b){this.body=a,this.id=b.id,this.username=b.username,this.onCloseCallback=b.onCloseCallback||function(){},this.updateHtml()},updateHtml:function(){var b=a.compiledTemplates[c]
this.body.style.display="block",this.body.innerHTML=b({id:this.id,username:this.username,text:d.get(e)||""}),this.body.querySelector("textarea").focus()},close:function(){this.body.style.display="none",this.body.innerHTML=""},onPointerDown:function(b,c){c.preventDefault(),console.log(b)
var f=this.body.querySelector("textarea"),g=f.value.trim(),h=this
b.hasClass("cancel")?(document.body.focus(),""!==g&&d.set(e,f.value),this.onCloseCallback(),this.close()):b.hasClass("save")?(document.body.focus(),d.remove(e),b.html("Saving..."),""!==g&&a.$api.submitComment(f.getAttribute("data-id"),g,function(a){h.onCloseCallback(a),h.close()})):b.hasClass("clear")?(f.value="",d.remove(e)):b.hasClass("form-modal")&&(""!==g&&d.set(e,f.value),this.onCloseCallback(),this.close())}},a.$ui.component({name:c,controller:f})}(this),function(a,b){b=a.helper||(a.helper={})
var c="layoutNavigation",d=[{displayName:"Top Navigation",value:"default"},{displayName:"Bottom Navigation",value:"alt"}],e=function(){}
e.prototype={init:function(a){this.body=a,this.updateHtml()},updateHtml:function(){var b=a.compiledTemplates[c]
this.body.innerHTML=b({layoutNavigations:d,selectedLayoutNavigation:a.$ui.appearance.layoutNavigatiaon})},onPointerDown:function(b,c){c.preventDefault(),b.hasClass("select-layout-navigation")&&(a.$ui.updateAppearance("layoutNavigatiaon",b.data("layout-navigation")),this.updateHtml())}},a.$ui.component({name:c,controller:e})}(this),function(a,b){b=a.helper||(a.helper={})
var c="layoutSplit",d=[{displayName:"Enable",value:"Enable"},{displayName:"Disable",value:"Disable"}],e=function(){}
e.prototype={init:function(a){this.body=a,this.updateHtml()},updateHtml:function(){var b=a.compiledTemplates[c]
this.body.innerHTML=b({layoutSplits:d,selectedLayoutSplit:a.$ui.appearance.layoutSplit})},onPointerDown:function(b,c){c.preventDefault(),b.hasClass("select-layout-split")&&(a.$ui.updateAppearance("layoutSplit",b.data("layout-split")),this.updateHtml())}},a.$ui.component({name:c,controller:e})}(this),function(a){var b="nativeBrowserOption",c="In App,External".split(","),d=function(){}
d.prototype={init:function(a){this.body=a,this.updateHtml()},updateHtml:function(){var d=a.compiledTemplates[b]
this.body.innerHTML=d({nativeBrowserOptions:c,selectedBrowserOption:a.$ui.appearance.browser})},onPointerDown:function(b,c){c.preventDefault(),b.hasClass("select-native-browser-option")&&(a.$ui.updateAppearance("browser",b.data("native-browser-option")),this.updateHtml())}},a.$ui.component({name:b,controller:d})}(this),function(a,b){b=a.helper||(a.helper={})
var c="testUi",d=a.test,e=function(){}
e.prototype={init:function(a){this.body=a,this.updateHtml()},updateHtml:function(){var b=a.compiledTemplates[c]
this.body.innerHTML=b({tests:d})},onPointerDown:function(b,c){c.preventDefault(),"A"==b.prop("tagName")&&a.test[b.data("test")]()}},a.$ui.component({name:c,controller:e})}(this),function(a,b){b=a.helper||(a.helper={})
var c="themeColor",d="selected-color",e="#e8117F,#3498db,#14689C,#ff6600,#1ABC9C,#F16767,#FF6347,#CDA454,#E25331,#ed1c24,#0072c6,#00b488,#68217a,#026466,#D7403F,#578793,#553A59,#B75459,#31634A,#566C60,#4C7E01,#5E7D9A,#FFA633,#6762a6,#9d0000,#009999,#339966,#993366,#776B5F,#F6B701,#3DADAF,#E15e5c,#4DAF7C,#5856d6,#007aff,#34aadc,#5ac8fa,#4cd964,#ff2d55,#ff3b30,#ff9500,#8e8e93,#ED5565,#DA4453,#FC6E51,#E9573F,#F6BB42,#A0D468,#8CC152,#48CFAD,#37BC9B,#4FC1E9,#3BAFDA,#5D9CEC,#4A89DC,#AC92EC,#967ADC,#EC87C0,#D770AD,#AAB2BD,#656D78,#434A54,#5C2D91".split(","),f=["#444444","#888888","#bbbbbb"].concat(b.colors.sortColors(e)),g=function(){}
g.prototype={init:function(a){this.body=a,this.showColors()},showColors:function(){var b=a.compiledTemplates[c]
this.body.innerHTML=b({colors:f.concat(a.$ui.appearance.userColors||[]),selectedColor:a.$ui.appearance.color})},onPointerDown:function(b,c){c.preventDefault()
var e
b.hasClass("select-theme-color")&&(e=this.body.querySelector("."+d),e&&e.classList.remove(d),b.addClass(d),a.$ui.updateAppearance("color",b.data("color")))},onLongPointerDown:function(c,d){d.preventDefault()
if(c.hasClass("select-theme-color")){var e=a.prompt("Your color?",a.$ui.appearance.color)
e&&b.colors.isValidColor(e)&&-1===f.indexOf(e)&&(a.$ui.updateAppearance("userColor",e),this.showColors())}}}
var h={name:c,controller:g}
a.$ui.component(h)}(this),function(a,b){b=a.helper||(a.helper={})
var c="themeStyle",d="Light,Dark".split(","),e=function(){}
e.prototype={init:function(a){this.body=a,this.updateHtml()},updateHtml:function(){var b=a.compiledTemplates[c]
this.body.innerHTML=b({themeStyles:d,selectedThemeStyle:a.$ui.appearance.themeStyle})},onPointerDown:function(b,c){c.preventDefault(),b.hasClass("select-theme-style")&&(a.$ui.updateAppearance("themeStyle",b.data("theme-style")),this.updateHtml())}},a.$ui.component({name:c,controller:e})}(this),function(a,b){b=a.$
var c,d,e,f=a.$log("article"),g=function(d,e){var f=d.closest("A")
if(f.hasClass("back-home"))e.preventDefault(),a.$ui.back()
else if(f.hasClass("share"))e.preventDefault(),a.$ui.share(f.data("share-text"),f.data("share-text"),a.$config.url.share+f.attr("href"),f.offset())
else if(f.hasClass("show-comments"))a.history.replaceState({},"",f.attr("href"))
else if(f.length>0)e.preventDefault(),a.$ui.openInBrowser(f.attr("href"))
else if(d.closest(".header").length>0){var g=b(".pagebd-container",c)
a.helper.scrollTo(g[0],0,300,"easeOutQuad")}},h=function(f,g){f&&(g="Failed")
var h=+new Date
c&&(c.querySelector(".article-content").innerHTML=g),a.helper.localAnalytics(b.extend({action:"pageview",pageType:"article",timingFetch:h-e,timingRender:+new Date-h,fetchStatus:!f},d))},i=function(b){b.url?(d.articleUrl=b.url,a.api.article(b.id,b.url,h)):h(!0)},j=function(b){return b.time_ago=a.helper.timeAgo(1e3*b.time),b.comments_count=b.kids?b.kids.length:0,b.isLoggedIn=!1,a.$app.visited.set(b.id,"article"),a.compiledTemplates.pageArticle(b)},k=function(){c=void 0},l=function(){c=void 0},m={pageId:"article-",pageName:"article-content",pageLevel:1,content:"Loading...",onPageVisible:function(){},onPageHidden:k,onPageUnload:l,onPointerDown:g},n=function(b){f(b),d={},e=+new Date
var g=b.params.storyId,h=a.api.storySync(g),k='<div class="show-loading"><div class="circle"></div><br>Loading...</div>',l="article-"+g
d.ycId=g,h&&(k=j(h)),c&&c.getAttribute("data-page-id")===l||(m.pageId=l,m.content=k,m.onPageVisible=function(b,d){f(b),c=b,d||(h?i(h):a.api.story(g,function(a){c.innerHTML=j(a),i(a)}))},a.pageManager(m))}
a.$app.routes.add("#/article/:storyId/:slug?",n)}(this),function(a,b){b=a.$
var c,d,e,f,g=a.$log("comments"),h={},i={},j=function(){b(".show-loading",c).remove()},k={},l=function(){a.helper.localAnalytics(b.extend({action:"pageview",pageType:"comments",timingFirst:i.firstComment,timingTotal:i.lastComment-i.start,timingFirstLast:i.lastComment-i.start-i.firstComment},h))},m=function(){f&&a.clearTimeout(f),f=a.setTimeout(l,1e3)},n=function(b){if(c&&b){if(b.deleted){if(!b.kids)return
b.by="[deleted]"}i.firstComment||(i.firstComment=+new Date-i.start),i.lastComment=+new Date,b.postBy=d,b.time_ago=a.helper.timeAgo(1e3*b.time),b.by||console.log("missing item.by",b)
var f=c.querySelector("#item-"+b.id)
f||console.log("commentNode is missing",b),f&&(f.innerHTML=a.compiledTemplates.commentItem(b)),e(),e=function(){},o(b),m()}},o=function(b){if(!b.kids||0===b.kids.length)return void e()
h.score=b.score||0
for(var c=document.getElementById("kids-"+b.id),d=document.createDocumentFragment(),f=0,g=b.kids.length;g>f;f++){var j=document.createElement("li")
j.id="comment-"+b.kids[f],j.setAttribute("class","kid"),j.setAttribute("data-id",b.kids[f]),j.innerHTML='<div class="comment" id="item-'+b.kids[f]+'"></div><ul class="kids" id="kids-'+b.kids[f]+'"></ul>',d.appendChild(j)}c.appendChild(d),i.commentsStart||(i.commentsStart=+new Date)
for(var f=0,g=b.kids.length;g>f;f++)a.api.comment(b.kids[f],n)
h.commentsCount=h.commentsCount+b.kids.length},p="selected",q=function(d,e){var f,g,h,i=b(".pagebd-container",c),j=d.classList
return e=e?e:!1,b("."+p,i).removeClass(p),j.add(p),j.contains("hide-children")?(j.remove("hide-children"),-1):(f=b("li",d).length,f=f>0?f:"",d.querySelector(".comments-count").textContent=f,j.add("hide-children"),g=b(d).offset(),h=e?i[0].scrollTop+g.top-g.height-10:i[0].scrollTop+g.height,a.helper.scrollTo(i[0],h,250,"easeOutQuad"),1)},r=function(a){var b=a.parent().closest("li"),c=[]
return b.length>0&&(c=b.next().length>0?b.next():r(b)),c},s=function(a){var c=a.attr("id"),d=b("#"+c+" > ul",a)
if(0===d.length||a.hasClass("hide-children"))return a
var e=d.last(),f=b("li",e)
return 0===f.length?a:s(f.last())},t=function(d){var e,f,g=b(".pagebd-container",c),h=b(".article-comments li",c),i=b("."+p,c)
if(0!==g.length&&0!==h.length){if(0===i.length)e=b(h[0]),console.log(e),e.addClass(p)
else if(1===d)f=b("li",i),e=!i.hasClass("hide-children")&&f.length>0?b(f[0]):i.next().length>0?i.next():r(i)
else if(-1===d)if(i.prev().length>0)e=s(i.prev())
else{var j=i.parent().closest("li")
j.length>0&&(e=j)}e&&e.length>0&&(i.removeClass(p),e.addClass(p),a.helper.scrollTo(g[0],g[0].scrollTop+b(e).offset().top-60,250,"easeOutQuad"))}},u=function(b,c){if(b.length>0){var d=a.compiledTemplates.pageCommentOptions({storyId:k.storyId,commentId:b.data("id"),author:c})
console.log(d),a.$ui.appModal({html:d,chormeless:!0,onPointerDown:w})}},v=function(a){for(a=b(a);!a.parent().parent().hasClass("article-comments");)a=a.parent()
q(a.get(0),!0)},w=function(a,b){a.hasClass("collapse-comment")?(b.preventDefault(),q(document.getElementById("comment-"+a.data("comment-id")))):a.hasClass("collapse-thread")?(b.preventDefault(),v(document.getElementById("comment-"+a.data("comment-id")))):a.hasClass("scroll-thread")&&b.preventDefault()},x=function(d,e){console.log(d,e)
var f=d.closest("A")
if(f.hasClass("back-home"))e.preventDefault(),a.$ui.back()
else if(f.hasClass("share"))e.preventDefault(),a.$ui.share(f.data("share-text"),f.data("share-text"),a.$config.url.share+f.attr("href"),f.offset())
else if(f.hasClass("show-article"))a.history.replaceState({},"",f.attr("href"))
else if(f.length>0)e.preventDefault(),a.$ui.openInBrowser(f.attr("href"))
else if(d.closest(".comment-meta").length>0){var g=d.closest(".author")
g.length>0?u(d.closest(".kid"),b.trim(b(".text",g).text())):q(d.closest(".comment-meta").parent().parent().get(0))}else if(d.closest(".header").length>0){var h=b(".pagebd-container",c)
a.helper.scrollTo(h[0],0,300,"easeOutQuad")}else"UL"===d.attr("tagName")&&d.closest(".article-comments").length>0&&q(d.parent().get(0),!0)},y=function(){var b=[],c={},d=0,e=0,f=function(a){c[a.id]=a,d=a.score>d?a.score:d,e--,0==e&&g()},g=function(){for(var a,e,f,g=0,h=b.length;h>g;g++)f=c[b[g]],e=f.score/d*100,e=e.toFixed(2)+"% 100%",a=document.getElementById("poll-part-"+f.id),a&&(a.innerHTML="<em>"+f.score+'</em><div style="background-size:'+e+'">'+f.text+"</div>")}
return{fetch:function(c){b=c.parts,d=0,e=c.parts.length
for(var g=0,h=c.parts.length;h>g;g++)a.api.comment(c.parts[g],f)}}}(),z=function(b){return b.time_ago=a.helper.timeAgo(1e3*b.time),b.comments_count=b.kids?b.kids.length:0,b.isLoggedIn=!1,d=b.by,a.$app.visited.set(b.id,"comments"),"poll"===b.type&&a.setTimeout(function(){y.fetch(b)},10),a.compiledTemplates.pageComments(b)},A=function(a){if(74===a)t(1)
else if(75===a)t(-1)
else if(88===a){var b=c.querySelector("."+p)
if(b){var d=q(b,!0)
1===d&&t(d)}}},B=function(){c=void 0},C=function(){c=void 0},D={pageId:"comments-",pageName:"comments",pageLevel:1,content:"Loading...",onPageVisible:function(){},onPageHidden:B,onPageUnload:C,onPointerDown:x,onKeyPress:A},E=function(b){g(b),h={},i={},i.start=+new Date
var d=b.params.storyId,f=a.api.storySync(d),l='<div class="show-loading"><div class="circle"></div><br>Loading...</div>',m="comments-"+d
h.commentsCount=0,h.ycId=d,k={storyId:d},c&&c.getAttribute("data-page-id")===m||(f&&(l=z(f)),D.pageId=m,D.content=l,D.onPageVisible=function(b,h){g(b),c=b,h||(f?(e=j,o(f)):a.api.story(d,function(a){console.log(a)
var b=z(a)
c.innerHTML=b,e=j,o(a)}))}),a.pageManager(D)}
a.$app.routes.add("#/comments/:storyId/:slug?",E)}(this),function(a,b){b=a.$
var c,d=a.$log("options"),e=a.$config,f=(a.store.get("appearance")||e.appearance,{appVersion:[e.v.app,e.v.js,e.v.css].join("-")}),g=a.$ui.component,h=function(b,c){b.hasClass("back-home")?(c.preventDefault(),a.$ui.back()):b.hasClass("show-option")?(c.preventDefault(),a.history.replaceState({},"",b.attr("href")),j(b.data("option"))):b.length>0&&"_blank"===b.attr("target")&&(c.preventDefault(),a.$ui.openInBrowser(b.attr("href")))},i=function(b){a.helper.localAnalytics({action:"pageview",pageType:"options",subPageType:b})},j=function(a){i(a),console.log(a)
var b=c.querySelector(".options-"+a),d=c.querySelector(".option-component.selected"),e=c.querySelector(".options-action .selected")
d&&d.classList.remove("selected"),e&&e.classList.remove("selected"),b&&(b.classList.add("selected"),c.querySelector(".options-action a[data-option="+a+"]").classList.add("selected"))},k=function(){c=void 0},l=function(){c=void 0},m={pageId:"options",pageName:"options",pageLevel:1,content:"Loading...",onPageVisible:function(){},onPageHidden:k,onPageUnload:l,onPointerDown:h},n=function(b){d(b),b.params.option&&-1!="list|appearance|about".indexOf(b.params.option)||(b.params.option="list"),i(b.params.option),f.request=b,f.timing=a.store.get("hn-timing")
var e=a.compiledTemplates.pageOptions(f)
c?j(b.params.option):(m.content=e,m.onPageVisible=function(b){c=b,a.$config.nativeApp&&g("nativeBrowserOption","#componentNativeBrowser"),g("fontFamily","#componentFontFamily"),g("fontSize","#componentFontSize"),g("themeStyle","#componentThemeStyle"),g("themeColor","#componentThemeColor"),g("animationOption","#componentAnimationOption"),g("layoutNavigation","#componentLayoutNavigation"),a.$app.isMobile||g("layoutSplit","#componentLayoutSplit")},a.pageManager(m))}
a.$app.routes.add("#/options/:option?",n)}(this),function(a,b){b=a.$
var c,d=a.$log("profile"),e=function(b,c){console.log(b,c)
var d=b.closest("A")
d.hasClass("back-home")?(c.preventDefault(),a.$ui.back()):d.length>0&&(c.preventDefault(),a.$ui.openInBrowser(d.attr("href")))},f=function(b){a.helper.localAnalytics({action:"pageview",pageType:"profile",user:b.id,created:1e3*b.created,karma:b.karma,submitted_count:b.submitted_count})},g=function(a){var b,c,d,e
return c=/(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,b=a.replace(c,'<a href="$1" target="_blank">$1</a>'),d=/(^|[^\/])(www\.[\S]+(\b|$))/gim,b=b.replace(d,'$1<a href="http://$2" target="_blank">$2</a>'),e=/(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim,b=b.replace(e,'<a href="mailto:$1">$1</a>')},h=function(b){return b.time_ago=a.helper.timeAgo(1e3*b.created),b.submitted_count=b.submitted?b.submitted.length:0,b.about=b.about?b.about:"",a.compiledTemplates.profileItem(b)},i=function(){c=void 0},j=function(){c=void 0,console.log("onPageUnload() profilePage",c)},k={pageId:"profile-",pageName:"profile",pageLevel:2,content:"Loading...",onPageVisible:function(){},onPageHidden:i,onPageUnload:j,onPointerDown:e},l=function(e){d(e)
var i=e.params.id,j="profile-"+i
c&&c.getAttribute("data-page-id")===j||(k.pageId=j,k.content=a.compiledTemplates.pageProfile({}),k.onPageVisible=function(e,j){d(e),c=e,j||a.api.user(i,function(a){c.querySelector(".bd").innerHTML=h(a)
var d=b(".about",c)
d.html(g(d.html())),f(a)})},a.pageManager(k))}
a.$app.routes.add("#/profile/:id?",l)}(this),function(a,b){b=a.$
var c,d,e,f="visited",g={show:"Show",shownew:"Show New",ask:"Ask",newest:"Newest",noobstories:"Noobstories",todayTop10:"Today's Best",yesterdayTop10:"Yesterday's Best",weekTop10:"Week's Best"},h=a.$log("stories"),i="fp",j=0,k={},l={},m=function(b){var c=a.helper.parseUri(b)
return c.hostname},n=function(){a.helper.localAnalytics(b.extend({action:"pageview",pageType:"stories",timingFirst:l.firstItem,timingTotal:l.lastItem-l.start,timingFirstLast:l.lastItem-l.start-l.firstItem},k))},o=function(){e&&a.clearTimeout(e),e=a.setTimeout(n,1e3)},p=function(e){var f=document.createElement("div")
e.score&&(e.domain=m(e.url),e.visitedArticle=a.$app.visited.get(e.id,"article"),e.visitedComments=a.$app.visited.get(e.id,"comments"),f.innerHTML=a.compiledTemplates.storyItem(e))
var g=document.getElementById("story-"+e.id)
g?g.parentNode.replaceChild(f.firstChild,g):d.appendChild(f.firstChild),l.firstItem||(l.firstItem=+new Date-l.start),l.lastItem=+new Date,k.itemCount++,25==j++&&(b(".show-loading",c).css("display","none"),b(".load-more",c).css("display","block"),b(".scroll-bottom-promo",c).css("display","block")),o()},q=function(e){e=e||0,k={},l={},d=document.createElement("ul"),d.setAttribute("class","list stories-list theme-border"),d.id="stories-"+Date.now()
var f=c.querySelector(".bd")
0===e&&(j=0,f.innerHTML="",b(".show-loading",c).show(),b(".scroll-bottom-promo",c).hide()),k.page=e,k.type=i,k.itemCount=0,l.start=+new Date,f.appendChild(d),"fp"===i&&(0===e?a.setTimeout(function(){var a=document.createElement("div")
a.setAttribute("class","more"),a.innerHTML='<a href="#" class="load-more" style="display: none">Load More</a>',f.appendChild(a)},100):b(".more",f).remove()),c.querySelector("h1.title-center").innerHTML=g[i]||"HN",a.api.stories(i,p,0+30*e,30*e)},r=function(d,e){var g,h=d.closest("A")
if(h.hasClass("story")||h.hasClass("comments"))h.addClass(f),g=h.closest("li"),b(".active",c).removeClass("active"),g.addClass("active"),g.data("self")===!0&&(g.find("a.story").addClass(f),g.find("a.comments").addClass(f))
else if(h.hasClass("reload"))a.location.reload()
else if(h.hasClass("load-more"))e.preventDefault(),q(2)
else if(h.hasClass("toggle-fullscreen"))e.preventDefault(),a.$ui.toggleFullScreen(a.$app.isIE?document.body:null),h.closest(".show-submenu").removeClass("show-submenu")
else if(h.hasClass("toggle-submenu"))e.preventDefault(),h.parent().toggleClass("show-submenu")
else if(h.hasClass("share"))e.preventDefault(),a.$ui.share("Best HN Mobile App","Best Hacker News App for Mobile and Tablet","about/index.html",h.offset())
else if(h.length>0&&"_blank"===h.attr("target"))e.preventDefault(),a.$ui.openInBrowser(h.attr("href"))
else if(h.length>0);else if(d.closest(".submenu").length>0)e.preventDefault(),d.closest(".show-submenu").removeClass("show-submenu")
else if(d.closest(".header").length>0){var i=b(".pagebd-container",c)
a.helper.scrollTo(i[0],0,300,"easeOutQuad")}},s=function(b,d){c=b,d||(q(),a.$ui.pullToRefresh({scrollRegion:c.querySelector(".pagebd-container"),callback:function(b){a.setTimeout(function(){console.log("============================== Reload()"),q(),b()},1e3)},ignore:function(){return!1}}))},t=function(){c=void 0},u=function(){c=void 0},v={pageId:"stories",pageName:"stories",pageLevel:0,content:a.compiledTemplates.pageStories({}),onPageVisible:s,onPageHidden:t,onPageUnload:u,onPointerDown:r,clearDomCache:!0},w=function(b){h(b,b.params),i=b.params.type?b.params.type:"fp",v.pageId="stories-"+i,a.pageManager(v)},x=function(a){c||(a.params.type="fp",w(a))},y=a.$app.routes.add
y("",w),y("#/",w),y("#/f/:type?",w),y("#/reload/:type?",function(){c&&q()}),y("#/comments/:storyId/:slug?",x,!0),y("#/article/:storyId/:slug?",x,!0)}(this)
