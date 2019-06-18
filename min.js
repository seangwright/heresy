/*! (c) Andrea Giammarchi - ISC */
var heresy=function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i={};try{i.WeakMap=WeakMap}catch(e){i.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,a=o.prototype;return a.delete=function(e){return this.has(e)&&delete e[this._]},a.get=function(e){return this.has(e)?e[this._]:void 0},a.has=function(e){return r.call(e,this._)},a.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(i,this)}function i(e){this.set(e[0],e[1])}}(Math.random(),Object)}var c=i.WeakMap;var u=function(){var t=!1,n=function(a){if(!("raw"in a)||a.propertyIsEnumerable("raw")||!Object.isFrozen(a.raw)||/Firefox\/(\d+)/.test((e.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var o={};n=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return o[t]||(o[t]=e)}}else t=!0;return r(a)};return r;function r(e){return t?e:n(e)}}();function l(e){for(var t=arguments.length,n=[u(e)],r=1;r<t;)n.push(arguments[r++]);return n}var s=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var a=this.ownerDocument.createRange();a.setStartBefore(e?t[1]:n),a.setEndAfter(r),a.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,a=0,o=r.length;a<o;a++)t.appendChild(r[a]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),f=Array.isArray,p=s.prototype.nodeType,h=function(e){var t="fragment",n="content"in a("template")?function(e){var t=a("template");return t.innerHTML=e,t.content}:function(e){var n=a(t),o=a("template"),i=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var c=RegExp.$1;o.innerHTML="<table>"+e+"</table>",i=o.querySelectorAll(c)}else o.innerHTML=e,i=o.childNodes;return r(n,i),n};return function(e,o){return("svg"===o?function(e){var n=a(t),o=a("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,o.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function a(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(e),v={};try{v.Map=Map}catch(e){v.Map=function(){var e=0,t=[],n=[];return{delete:function(a){var o=r(a);return o&&(t.splice(e,1),n.splice(e,1)),o},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(a,o){return n[r(a)?e:t.push(a)-1]=o,this}};function r(n){return-1<(e=t.indexOf(n))}}}var d,g=v.Map,y=function(e,t,n,r,a,o){if(a-r<2)t.insertBefore(e(n[r],1),o);else{for(var i=t.ownerDocument.createDocumentFragment();r<a;)i.appendChild(e(n[r++],1));t.insertBefore(i,o)}},m=function(e,t){return e==t},b=function(e){return e},w=function(e,t,n,r,a,o,i){var c=o-a;if(c<1)return-1;for(;n-t>=c;){for(var u=t,l=a;u<n&&l<o&&i(e[u],r[l]);)u++,l++;if(l===o)return t;t=u+1}return-1},E=function(e,t,n,r,a){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:a},N=function(e,t,n,r,a){if(a-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[a-1],-1)),o.deleteContents()}},x=function(e,t,n){for(var r=1,a=t;r<a;){var o=(r+a)/2>>>0;n<e[o]?a=o:r=o+1}return r},C=function(e,t,n,r,a,o,i,c,u,l,s,f,p){!function(e,t,n,r,a,o,i,c,u){for(var l=new g,s=e.length,f=i,p=0;p<s;)switch(e[p++]){case 0:a++,f++;break;case 1:l.set(r[a],1),y(t,n,r,a++,a,f<c?t(o[f],0):u);break;case-1:f++}for(p=0;p<s;)switch(e[p++]){case 0:i++;break;case-1:l.has(o[i])?i++:N(t,n,o,i++,i)}}(function(e,t,n,r,a,o,i){var c,u,l,s,f,p,h,v=n+o,d=[];e:for(c=0;c<=v;c++){if(c>50)return null;for(h=c-1,f=c?d[c-1]:[0,0],p=d[c]=[],u=-c;u<=c;u+=2){for(l=(s=u===-c||u!==c&&f[h+u-1]<f[h+u+1]?f[h+u+1]:f[h+u-1]+1)-u;s<o&&l<n&&i(r[a+s],e[t+l]);)s++,l++;if(s===o&&l===n)break e;p[c+u]=s}}var g=Array(c/2+v/2),y=g.length-1;for(c=d.length-1;c>=0;c--){for(;s>0&&l>0&&i(r[a+s-1],e[t+l-1]);)g[y--]=0,s--,l--;if(!c)break;h=c-1,f=c?d[c-1]:[0,0],(u=s-l)==-c||u!==c&&f[h+u-1]<f[h+u+1]?(l--,g[y--]=1):(s--,g[y--]=-1)}return g}(n,r,o,i,c,l,f)||function(e,t,n,r,a,o,i,c){var u=0,l=r<c?r:c,s=Array(l++),f=Array(l);f[0]=-1;for(var p=1;p<l;p++)f[p]=i;for(var h=new g,v=o;v<i;v++)h.set(a[v],v);for(var d=t;d<n;d++){var y=h.get(e[d]);null!=y&&-1<(u=x(f,l,y))&&(f[u]=y,s[u]={newi:d,oldi:y,prev:s[u-1]})}for(u=--l,--i;f[u]>i;)--u;l=c+r-u;var m=Array(l),b=s[u];for(--n;b;){for(var w=b,E=w.newi,N=w.oldi;n>E;)m[--l]=1,--n;for(;i>N;)m[--l]=-1,--i;m[--l]=0,--n,--i,b=b.prev}for(;n>=t;)m[--l]=1,--n;for(;i>=o;)m[--l]=-1,--i;return m}(n,r,a,o,i,c,u,l),e,t,n,r,i,c,s,p)},A=function(e,t,n,r){r||(r={});for(var a=r.compare||m,o=r.node||b,i=null==r.before?null:o(r.before,0),c=t.length,u=c,l=0,s=n.length,f=0;l<u&&f<s&&a(t[l],n[f]);)l++,f++;for(;l<u&&f<s&&a(t[u-1],n[s-1]);)u--,s--;var p=l===u,h=f===s;if(p&&h)return n;if(p&&f<s)return y(o,e,n,f,s,E(o,t,l,c,i)),n;if(h&&l<u)return N(o,e,t,l,u),n;var v=u-l,d=s-f,g=-1;if(v<d){if(-1<(g=w(n,f,s,t,l,u,a)))return y(o,e,n,f,g,o(t[l],0)),y(o,e,n,g+v,s,E(o,t,u,c,i)),n}else if(d<v&&-1<(g=w(t,l,u,n,f,s,a)))return N(o,e,t,l,g),N(o,e,t,g+d,u),n;return v<2||d<2?(y(o,e,n,f,s,o(t[l],0)),N(o,e,t,l,u),n):v===d&&function(e,t,n,r,a,o){for(;r<a&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,u,a)?(y(o,e,n,f,s,E(o,t,u,c,i)),n):(C(o,e,n,f,s,d,t,l,u,v,c,a,i),n)},k=function(e,t,n,r,a){var o="importNode"in e,i=e.createDocumentFragment();return i.appendChild(e.createTextNode("g")),i.appendChild(e.createTextNode("")),(o?e.importNode(i,!0):i.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),a=t.childNodes||[],o=a.length,i=0;n&&i<o;i++)r.appendChild(e(a[i],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(e),j="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},O="-"+Math.random().toFixed(6)+"%";try{"content"in(d=e.createElement("template"))&&(d.innerHTML='<p tabindex="'+O+'"></p>',d.content.childNodes[0].getAttribute("tabindex")==O)||(O="_dt: "+O.slice(1,-1)+";")}catch(e){}var S="\x3c!--"+O+"--\x3e",_=8,T=1,$=3,M=/^(?:style|textarea)$/i,R=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var L=" \\f\\n\\r\\t",D="[^"+L+"\\/>\"'=]+",P="["+L+"]+"+D,z="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",Z="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+D.replace("\\/","")+"))?)",F=new RegExp(z+P+Z+"+)(["+L+"]*/?>)","g"),V=new RegExp(z+P+Z+"*)(["+L+"]*/>)","g"),W=new RegExp("("+P+"\\s*=\\s*)(['\"]?)"+S+"\\2","gi");function H(e,t,n,r){return"<"+t+n.replace(W,B)+r}function B(e,t,n){return t+(n||'"')+O+(n||'"')}function G(e,t,n){return R.test(t)?e:"<"+t+n+"></"+t+">"}function I(e,t,n,r){return{name:r,node:t,path:n,type:e}}function q(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function U(t,n,r,a){for(var o=new g,i=t.attributes,c=[],u=c.slice.call(i,0),l=u.length,s=0;s<l;){var f=u[s++];if(f.value===O){var p=f.name;if(!o.has(p)){var h=r.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),v=i[h]||i[h.toLowerCase()];o.set(p,v),n.push(I("attr",v,a,h))}c.push(f)}}for(l=c.length,s=0;s<l;){var d=c[s++];/^id$/i.test(d.name)?t.removeAttribute(d.name):t.removeAttributeNode(d)}var y=t.nodeName;if(/^script$/i.test(y)){var m=e.createElement(y);for(l=i.length,s=0;s<l;)m.setAttributeNode(i[s++].cloneNode(!0));m.textContent=t.textContent,t.parentNode.replaceChild(m,t)}}var J=new c,K=new c;function Q(e,t){var n=function(e){return e.join(S).replace(V,G).replace(F,H)}(t),r=e.transform;r&&(n=r(n));var a=h(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===j.call(r.textContent).length&&e.removeChild(r)}}(a);var o=[];!function e(t,n,r,a){for(var o=t.childNodes,i=o.length,c=0;c<i;){var u=o[c];switch(u.nodeType){case T:var l=a.concat(c);U(u,n,r,l),e(u,n,r,l);break;case _:var s=u.textContent;if(s===O)r.shift(),n.push(M.test(t.nodeName)?I("text",t,a):I("any",u,a.concat(c)));else switch(s.slice(0,2)){case"/*":if("*/"!==s.slice(-2))break;case"👻":t.removeChild(u),c--,i--}break;case $:M.test(t.nodeName)&&j.call(u.textContent)===S&&(r.shift(),n.push(I("text",t,a)))}c++}}(a,o,t.slice(0),[]);var i={content:a,updates:function(n){for(var r=[],a=o.length,i=0;i<a;){var c=o[i++],u=q(n,c.path);switch(c.type){case"any":r.push(e.any(u,[]));break;case"attr":r.push(e.attribute(u,c.name,c.node));break;case"text":r.push(e.text(u)),u.textContent=""}}return function(){var e=arguments.length,o=e-1,i=1;if(a!==o)throw new Error(o+" values instead of "+a+"\n"+t.join(", "));for(;i<e;)r[i-1](arguments[i++]);return n}}};return J.set(t,i),i}function X(t){return function(n){var r=K.get(t);return null!=r&&r.template===n||(r=function(t,n){var r=J.get(n)||Q(t,n),a=k.call(e,r.content,!0),o={content:a,template:n,updates:r.updates(a)};return K.set(t,o),o}(t,n)),r.updates.apply(null,arguments),r.content}}var Y=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,a){var o,i;return function(c){var u,l,s,f;switch(typeof c){case"object":if(c){if("object"===o){if(!a&&i!==c)for(l in i)l in c||(r[l]="")}else a?r.value="":r.cssText="";for(l in u=a?{}:r,c)s="number"!=typeof(f=c[l])||e.test(l)?f:f+"px",!a&&/^--/.test(l)?u.setProperty(l,s):u[l]=s;o="object",a?r.value=function(e){var r,a=[];for(r in e)a.push(r.replace(t,n),":",e[r],";");return a.join("")}(i=u):i=c;break}default:i!=c&&(o="string",i=c,a?r.value=c||"":r.cssText=c||"")}}}}(),ee=function(e,t){return e.nodeType===p?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},te=function(e,t){var n,r=!1,a=t.cloneNode(!0);return function(t){n!==t&&(n=t,a.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(a)),a.value=t):(a.value=t,r||(r=!0,e.setAttributeNode(a)))))}},ne=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},re=/^(?:form|list)$/i,ae=[].slice;function oe(e){return this.type=e,X(this)}function ie(e){return e(this)}oe.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return te(e,n);t="className";case"data":case"props":return ne(e,t);case"style":return Y(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t){return function(n){e[t]=n}}(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!("ownerSVGElement"in e||re.test(t))?ne(e,t):te(e,n)}},any:function(e,t){var n,r={node:ee,before:e},a="ownerSVGElement"in e?"svg":"html",o=!1;return function i(c){switch(typeof c){case"string":case"number":case"boolean":o?n!==c&&(n=c,t[0].textContent=c):(o=!0,n=c,t=A(e.parentNode,t,[function(e,t){return e.ownerDocument.createTextNode(t)}(e,c)],r));break;case"function":i(c(e));break;case"object":case"undefined":if(null==c){o=!1,t=A(e.parentNode,t,[],r);break}default:if(o=!1,n=c,f(c))if(0===c.length)t.length&&(t=A(e.parentNode,t,[],r));else switch(typeof c[0]){case"string":case"number":case"boolean":i(String(c));break;case"function":i(c.map(ie,e));break;case"object":f(c[0])&&(c=c.concat.apply([],c));default:t=A(e.parentNode,t,c,r)}else!function(e){return"ELEMENT_NODE"in e}(c)?"text"in c?i(String(c.text)):"any"in c?i(c.any):"html"in c?t=A(e.parentNode,t,ae.call(h([].concat(c.html).join(""),a).childNodes),r):"length"in c&&i(ae.call(c)):t=A(e.parentNode,t,11===c.nodeType?ae.call(c.childNodes):[c],r)}}},text:function(e){var t;return function n(r){if(t!==r){t=r;var a=typeof r;"object"===a&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(ae.call(r).join("")):"function"===a?n(r(e)):e.textContent=null==r?"":r}}}};var ce=new c,ue=new c,le=null;function se(e,t){var n=function(e,t){var n=le;(le=ce.get(e)||(r=e,a={i:0,length:0,stack:[],update:!1},ce.set(r,a),a)).i=0;var r,a;var o,i=t.call(this);if(i instanceof ye){o=he(de(i,0),le.update);var c=le,u=c.i,l=c.length,s=c.stack,f=c.update;u<l&&s.splice(le.length=u),f&&(le.update=!1)}else o=he(i,!1);return le=n,o}.call(this,e,t);return ue.get(e)!==n&&(ue.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e}var fe=ve("html"),pe=ve("svg");function he(e,t){return e.nodeType===p?e.valueOf(t):e}function ve(e){var t=new c;return n.for=function(n,r){var a=t.get(n)||function(e){var n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),a[r]||function(t,n){var r=null,a=new oe(e);return t[n]=function(){var e=a.apply(null,l.apply(null,arguments));return r||(r=ge(e))}}(a,r)},n;function n(){var t=l.apply(null,arguments);return le?new ye(e,t):new oe(e).apply(null,t)}}function de(e,t){var n=le,r=n.i,a=n.length,o=n.stack,i=e.type,c=e.args,u=r<a;le.i++,u||(le.length=o.push({l:t,kind:i,tag:null,tpl:c[0],wire:null})),function e(t,n,r){for(var a=t.length;n<a;n++){var o=t[n];"object"==typeof o&&o&&(o instanceof ye?t[n]=de(o,r-1):f(o)&&(t[n]=e(o,0,r++)))}return t}(c,1,t+1);var l=o[r];if(u){var s=l.l,p=l.kind,h=l.tag,v=l.tpl,d=l.wire;if(s===t&&i===p&&v===c[0])return h.apply(null,c),d}var g=new oe(i),y=ge(g.apply(null,c));return l.l=t,l.kind=i,l.tag=g,l.tpl=c[0],l.wire=y,r<1&&(le.update=!0),y}function ge(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new s(t):e}function ye(e,t){this.type=e,this.args=t}Object.freeze(ye);var me={};try{me.Event=new Event(".").constructor}catch(t){try{me.Event=new CustomEvent(".").constructor}catch(t){me.Event=function(t,n){n||(n={});var r=e.createEvent("Event"),a=!!n.bubbles,o=!!n.cancelable;r.initEvent(t,a,o);try{r.bubbles=a,r.cancelable=o}catch(r){}return r}}}var be=me.Event,we={};try{we.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},we.WeakSet=r}(WeakMap)}var Ee=we.WeakSet,Ne=function(){var t,n=!1,r=function(o){if(!("raw"in o)||o.propertyIsEnumerable("raw")||!Object.isFrozen(o.raw)||/(Firefox|Safari)\/(\d+)/.test(t=(e.defaultView.navigator||{}).userAgent)&&("Firefox"==RegExp.$1?RegExp.$2<55:!/(Chrome|Android)\/(\d+)/.test(t))){var i={};r=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return i[t]||(i[t]=e)}}else n=!0;return a(o)};return a;function a(e){return n?e:r(e)}}(),xe=null;try{xe=new function(){}}catch(e){}var Ce=function(e){return function(t){function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a(this,n(o).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}(o,e),o}()};if(xe){var Ae=Object.getPrototypeOf,ke=Object.setPrototypeOf,je=("object"==("undefined"==typeof Reflect?"undefined":typeof Reflect)?Reflect:{construct:function(e,t,n){for(var r=[null],a=0;a<t.length;a++)r.push(t[a]);var o=e.bind.apply(e,r);return ke(new o,n.prototype)}}).construct;Ce=function(e,t){function n(){return je(t?Ae(e):e,arguments,n)}return ke(n.prototype,e.prototype),ke(n,e)}}var Oe={map:{},re:null},Se=function(e){return new RegExp("<(/)?(".concat(e.join("|"),")([^A-Za-z0-9:_-])"),"g")},_e=null,Te=function(e,t){var n=_e||t,r=n.map,a=n.re;return e.replace(a,function(e,t,n,a){var o=r[n],i=o.tagName,c=o.is;return o.element?t?"</".concat(c,">"):"<".concat(c).concat(a):t?"</".concat(i,">"):"<".concat(i,' is="').concat(c,'"').concat(a)})},$e=function(e){var t=e.tagName,n=e.is;return e.element?n:"".concat(t,'[is="').concat(n,'"]')},Me=function(){return _e},Re=function(e){_e=e},Le="_🔥",De=Object.defineProperties,Pe=new c,ze=new c,Ze=new Ee,Fe="attributeChangedCallback",Ve="connectedCallback",We="dis".concat(Ve),He=function(e,t,n){if(n in e){var r=e[n];t[n]={configurable:!0,value:function(){return et.call(this),r.apply(this,arguments)}}}else t[n]={configurable:!0,value:et}},Be=function(e){var t=[],n={html:{configurable:!0,get:Qe},svg:{configurable:!0,get:Xe}};n[Le]={value:{events:t,info:null}},"handleEvent"in e||(n.handleEvent={configurable:!0,value:Ye}),"oninit"in e&&(t.push("init"),He(e,n,"render")),He(e,n,Fe),He(e,n,Ve),He(e,n,We),[[Fe,"onattributechanged",function(e,t,n){var r=Ge("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}],[Ve,"onconnected",function(){this.dispatchEvent(Ge("connected"))}],[We,"ondisconnected",function(){this.dispatchEvent(Ge("disconnected"))}],[Ve,"render",function(){this.render()}]].forEach(function(r){var a=o(r,3),i=a[0],c=a[1],u=a[2];if(!(i in e)&&c in e)if("render"!==c&&t.push(c.slice(2)),i in n){var l=n[i].value;n[i]={configurable:!0,value:function(){return l.apply(this,arguments),u.apply(this,arguments)}}}else n[i]={configurable:!0,value:u}}),De(e,n)},Ge=function(e){return new be(e)},Ie=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new ye("html",t)};Ie.for=fe.for;var qe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new ye("svg",t)};qe.for=pe.for;var Ue=function(e,t,n){var r=Je(e,t,new c);return n.set(e,r),r},Je=function(e,t,n){return function(r){for(var a=arguments.length,o=new Array(a>1?a-1:0),i=1;i<a;i++)o[i-1]=arguments[i];var c=Ne(r),u=n.get(c)||function(e,t,n){var r=n.info,a=r?Te(t.join(Le),r).split(Le):t;return e.set(t,a),a}(n,c,e[Le]);return se(e,function(){return t.apply(void 0,[u].concat(o))})}};function Ke(e){this.addEventListener(e,this)}function Qe(){return Pe.get(this)||Ue(this,Ie,Pe)}function Xe(){return ze.get(this)||Ue(this,qe,ze)}function Ye(e){this["on".concat(e.type)](e)}function et(){Ze.has(this)||(Ze.add(this),this[Le].events.forEach(Ke,this),this.dispatchEvent(Ge("init")))}var tt=Object.create,nt=Object.defineProperty,rt=Object.defineProperties,at=Object.getOwnPropertyNames,ot=Object.getOwnPropertySymbols,it=Object.getOwnPropertyDescriptor,ct=Object.keys,ut={element:HTMLElement},lt=new c,st=new c,ft=function(e){var t=tt(null),n=tt(null),r={prototype:n,statics:t};return at(e).concat(ot(e)).forEach(function(r){var a=it(e,r);switch(a.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"name":case"observedAttributes":case"style":case"tagName":t[r]=a;break;default:n[r]=a}}),r},pt=function(t,n,r){var a,o="Invalid name or tag";if(!/^([A-Z][A-Za-z0-9_]*)(<([A-Za-z0-9:_-]+)>|:([A-Za-z0-9:_-]+))?$/.test(t))throw o;var i=RegExp.$1,c=RegExp.$3,u=RegExp.$4,l=c||u||n.tagName||n.extends;if(!/[A-Za-z0-9:_-]+/.test(l))throw o;var s,f=i.replace(/([A-Z])([A-Z][a-z])/g,s="$1"+(s||"-")+"$2").replace(/([a-z])([A-Z])/g,s).toLowerCase()+r+"-heresy";if(customElements.get(f))throw"Duplicated ".concat(f," definition");var p=Ce("object"==typeof n?st.get(n)||function(t,n){var r=ft(t),a=r.statics,o=r.prototype,i=Ce(ut[n]||(ut[n]=e.createElement(n).constructor),!1);return Be(rt(i.prototype,o)),st.set(t,rt(i,a)),i}(n,l):lt.get(n)||function(e){var t=Ce(e,!1);return Be(t.prototype),lt.set(e,t),t}(n),!0),h="element"===l;if(nt(p,"new",{value:h?function(){return e.createElement(f)}:function(){return e.createElement(l,{is:f})}}),nt(p.prototype,"is",{value:f}),""===r){var v=function(e){for(var t=e.length,n=0,r=0;r<t;)n=(n<<5)-n+e.charCodeAt(r++),n&=n;return n.toString(36)}(f.slice(0,-7).toUpperCase());Oe.map[i]=ht(p,l,f,{id:v,i:0}),Oe.re=Se(ct(Oe.map))}var d=[f,p];return h||d.push({extends:l}),(a=customElements).define.apply(a,d),{Class:p,is:f,name:i,tagName:l}},ht=function t(n,r,a,o){var i=n.prototype,c=function(e,t){return{tagName:e,is:t,element:"element"===e}}(r,a),u=[$e(c)],l=n.includes||n.contains;if(l){var s={};ct(l).forEach(function(e){var n="-".concat(o.id,"-").concat(o.i++),r=pt(e,l[e],n),a=r.Class,i=r.is,c=r.name,f=r.tagName;u.push($e(s[c]=t(a,f,i,o)))});var f=Se(ct(s)),p={events:i[Le].events,info:{map:s,re:f}};if(nt(i,Le,{value:p}),"render"in i){var h=i.render,v=p.info;nt(i,"render",{value:function(){var e=Me();Re(v);var t=h.apply(this,arguments);return Re(e),t}})}}return"style"in n&&function(t){if(t.length){var n=e.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(e.createTextNode(t));var r=e.head||e.querySelector("head");r.insertBefore(n,r.lastChild)}}(n.style.apply(n,u)),c};return function(e){var t=oe.prototype.transform;oe.prototype.transform=t?function(n){return e(t(n))}:e}(function(e){return Te(e,Oe)}),t.define=function(e,t){return("string"==typeof e?pt(e,t,""):pt(e.name,e,"")).Class},t.html=Ie,t.ref=function(e,t){return e?e[t]||(e[t]={current:null}):{current:null}},t.render=function(e,t){return se(e,"function"==typeof t?t:function(){return t})},t.svg=qe,t}(document,{});
