(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6221:function(e,r,t){"use strict";t.d(r,{iv:function(){return ke},cx:function(){return we},hi:function(){return xe}});var n=function(){function e(e){var r=this;this._insertTag=function(e){var t;t=0===r.tags.length?r.prepend?r.container.firstChild:r.before:r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(e,t),r.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.before=null}var r=e.prototype;return r.hydrate=function(e){e.forEach(this._insertTag)},r.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),void 0!==e.nonce&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}(r);try{t.insertRule(e,t.cssRules.length)}catch(n){0}}else r.appendChild(document.createTextNode(e));this.ctr++},r.flush=function(){this.tags.forEach((function(e){return e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),a=Math.abs,s=String.fromCharCode;function o(e){return e.trim()}function i(e,r,t){return e.replace(r,t)}function c(e,r){return e.indexOf(r)}function u(e,r){return 0|e.charCodeAt(r)}function l(e,r,t){return e.slice(r,t)}function f(e){return e.length}function d(e){return e.length}function h(e,r){return r.push(e),e}var p=1,v=1,y=0,m=0,g=0,b="";function w(e,r,t,n,a,s,o){return{value:e,root:r,parent:t,type:n,props:a,children:s,line:p,column:v,length:o,return:""}}function x(e,r,t){return w(e,r.root,r.parent,t,r.props,r.children,0)}function k(){return g=m>0?u(b,--m):0,v--,10===g&&(v=1,p--),g}function j(){return g=m<y?u(b,m++):0,v++,10===g&&(v=1,p++),g}function A(){return u(b,m)}function C(){return m}function O(e,r){return l(b,e,r)}function $(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function S(e){return p=v=1,y=f(b=e),m=0,[]}function E(e){return b="",e}function _(e){return o(O(m-1,I(91===e?e+2:40===e?e+1:e)))}function M(e){for(;(g=A())&&g<33;)j();return $(e)>2||$(g)>3?"":" "}function N(e,r){for(;--r&&j()&&!(g<48||g>102||g>57&&g<65||g>70&&g<97););return O(e,C()+(r<6&&32==A()&&32==j()))}function I(e){for(;j();)switch(g){case e:return m;case 34:case 39:return I(34===e||39===e?e:g);case 40:41===e&&I(e);break;case 92:j()}return m}function P(e,r){for(;j()&&e+g!==57&&(e+g!==84||47!==A()););return"/*"+O(r,m-1)+"*"+s(47===e?e:j())}function R(e){for(;!$(A());)j();return O(e,m)}var z="-ms-",L="-moz-",T="-webkit-",G="comm",D="rule",W="decl";function U(e,r){for(var t="",n=d(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function H(e,r,t,n){switch(e.type){case"@import":case W:return e.return=e.return||e.value;case G:return"";case D:e.value=e.props.join(",")}return f(t=U(e.children,n))?e.return=e.value+"{"+t+"}":""}function Z(e,r){switch(function(e,r){return(((r<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3)}(e,r)){case 5103:return T+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return T+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return T+e+L+e+z+e+e;case 6828:case 4268:return T+e+z+e+e;case 6165:return T+e+z+"flex-"+e+e;case 5187:return T+e+i(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return T+e+z+"flex-item-"+i(e,/flex-|-self/,"")+e;case 4675:return T+e+z+"flex-line-pack"+i(e,/align-content|flex-|-self/,"")+e;case 5548:return T+e+z+i(e,"shrink","negative")+e;case 5292:return T+e+z+i(e,"basis","preferred-size")+e;case 6060:return T+"box-"+i(e,"-grow","")+T+e+z+i(e,"grow","positive")+e;case 4554:return T+i(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return i(i(i(e,/(zoom-|grab)/,T+"$1"),/(image-set)/,T+"$1"),e,"")+e;case 5495:case 3959:return i(e,/(image-set\([^]*)/,T+"$1$`$1");case 4968:return i(i(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+T+e+e;case 4095:case 3583:case 4068:case 2532:return i(e,/(.+)-inline(.+)/,T+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(f(e)-1-r>6)switch(u(e,r+1)){case 109:if(45!==u(e,r+4))break;case 102:return i(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+L+(108==u(e,r+3)?"$3":"$2-$3"))+e;case 115:return~c(e,"stretch")?Z(i(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==u(e,r+1))break;case 6444:switch(u(e,f(e)-3-(~c(e,"!important")&&10))){case 107:return i(e,":",":"+T)+e;case 101:return i(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+T+(45===u(e,14)?"inline-":"")+"box$3$1"+T+"$2$3$1"+z+"$2box$3")+e}break;case 5936:switch(u(e,r+11)){case 114:return T+e+z+i(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return T+e+z+i(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return T+e+z+i(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return T+e+z+e+e}return e}function F(e){return E(B("",null,null,null,[""],e=S(e),0,[0],e))}function B(e,r,t,n,a,o,c,u,l){for(var d=0,p=0,v=c,y=0,m=0,g=0,b=1,w=1,x=1,O=0,$="",S=a,E=o,I=n,z=$;w;)switch(g=O,O=j()){case 34:case 39:case 91:case 40:z+=_(O);break;case 9:case 10:case 13:case 32:z+=M(g);break;case 92:z+=N(C()-1,7);continue;case 47:switch(A()){case 42:case 47:h(q(P(j(),C()),r,t),l);break;default:z+="/"}break;case 123*b:u[d++]=f(z)*x;case 125*b:case 59:case 0:switch(O){case 0:case 125:w=0;case 59+p:m>0&&f(z)-v&&h(m>32?X(z+";",n,t,v-1):X(i(z," ","")+";",n,t,v-2),l);break;case 59:z+=";";default:if(h(I=K(z,r,t,d,p,a,u,$,S=[],E=[],v),o),123===O)if(0===p)B(z,r,I,I,S,o,v,u,E);else switch(y){case 100:case 109:case 115:B(e,I,I,n&&h(K(e,I,I,0,0,a,u,$,a,S=[],v),E),a,E,v,u,n?S:E);break;default:B(z,I,I,I,[""],E,v,u,E)}}d=p=m=0,b=x=1,$=z="",v=c;break;case 58:v=1+f(z),m=g;default:if(b<1)if(123==O)--b;else if(125==O&&0==b++&&125==k())continue;switch(z+=s(O),O*b){case 38:x=p>0?1:(z+="\f",-1);break;case 44:u[d++]=(f(z)-1)*x,x=1;break;case 64:45===A()&&(z+=_(j())),y=A(),p=f($=z+=R(C())),O++;break;case 45:45===g&&2==f(z)&&(b=0)}}return o}function K(e,r,t,n,s,c,u,f,h,p,v){for(var y=s-1,m=0===s?c:[""],g=d(m),b=0,x=0,k=0;b<n;++b)for(var j=0,A=l(e,y+1,y=a(x=u[b])),C=e;j<g;++j)(C=o(x>0?m[j]+" "+A:i(A,/&\f/g,m[j])))&&(h[k++]=C);return w(e,r,t,0===s?D:f,h,p,v)}function q(e,r,t){return w(e,r,t,G,s(g),l(e,2,-2),0)}function X(e,r,t,n){return w(e,r,t,W,l(e,0,n),l(e,n+1,-1),n)}var J=function(e,r){return E(function(e,r){var t=-1,n=44;do{switch($(n)){case 0:38===n&&12===A()&&(r[t]=1),e[t]+=R(m-1);break;case 2:e[t]+=_(n);break;case 4:if(44===n){e[++t]=58===A()?"&\f":"",r[t]=e[t].length;break}default:e[t]+=s(n)}}while(n=j());return e}(S(e),r))},Q=new WeakMap,V=function(e){if("rule"===e.type&&e.parent&&e.length){for(var r=e.value,t=e.parent,n=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===r.charCodeAt(0)||Q.get(t))&&!n){Q.set(e,!0);for(var a=[],s=J(r,a),o=t.props,i=0,c=0;i<s.length;i++)for(var u=0;u<o.length;u++,c++)e.props[c]=a[i]?s[i].replace(/&\f/g,o[u]):o[u]+" "+s[i]}}},Y=function(e){if("decl"===e.type){var r=e.value;108===r.charCodeAt(0)&&98===r.charCodeAt(2)&&(e.return="",e.value="")}},ee=[function(e,r,t,n){if(!e.return)switch(e.type){case W:e.return=Z(e.value,e.length);break;case"@keyframes":return U([x(i(e.value,"@","@"+T),e,"")],n);case D:if(e.length)return function(e,r){return e.map(r).join("")}(e.props,(function(r){switch(function(e,r){return(e=r.exec(e))?e[0]:e}(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return U([x(i(r,/:(read-\w+)/,":-moz-$1"),e,"")],n);case"::placeholder":return U([x(i(r,/:(plac\w+)/,":-webkit-input-$1"),e,""),x(i(r,/:(plac\w+)/,":-moz-$1"),e,""),x(i(r,/:(plac\w+)/,z+"input-$1"),e,"")],n)}return""}))}}],re=function(e){var r=e.key;if("css"===r){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var a=e.stylisPlugins||ee;var s,o,i={},c=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),(function(e){for(var r=e.getAttribute("data-emotion").split(" "),t=1;t<r.length;t++)i[r[t]]=!0;c.push(e)}));var u,l,f=[H,(l=function(e){u.insert(e)},function(e){e.root||(e=e.return)&&l(e)})],h=function(e){var r=d(e);return function(t,n,a,s){for(var o="",i=0;i<r;i++)o+=e[i](t,n,a,s)||"";return o}}([V,Y].concat(a,f));o=function(e,r,t,n){u=t,U(F(e?e+"{"+r.styles+"}":r.styles),h),n&&(p.inserted[r.name]=!0)};var p={key:r,sheet:new n({key:r,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend}),nonce:e.nonce,inserted:i,registered:{},insert:o};return p.sheet.hydrate(c),p};var te=function(e){for(var r,t=0,n=0,a=e.length;a>=4;++n,a-=4)r=1540483477*(65535&(r=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(r>>>16)<<16),t=1540483477*(65535&(r^=r>>>24))+(59797*(r>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(a){case 3:t^=(255&e.charCodeAt(n+2))<<16;case 2:t^=(255&e.charCodeAt(n+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(n)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)},ne={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var ae=/[A-Z]|^ms/g,se=/_EMO_([^_]+?)_([^]*?)_EMO_/g,oe=function(e){return 45===e.charCodeAt(1)},ie=function(e){return null!=e&&"boolean"!==typeof e},ce=function(e){var r=Object.create(null);return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}}((function(e){return oe(e)?e:e.replace(ae,"-$&").toLowerCase()})),ue=function(e,r){switch(e){case"animation":case"animationName":if("string"===typeof r)return r.replace(se,(function(e,r,t){return fe={name:r,styles:t,next:fe},r}))}return 1===ne[e]||oe(e)||"number"!==typeof r||0===r?r:r+"px"};function le(e,r,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return fe={name:t.name,styles:t.styles,next:fe},t.name;if(void 0!==t.styles){var n=t.next;if(void 0!==n)for(;void 0!==n;)fe={name:n.name,styles:n.styles,next:fe},n=n.next;return t.styles+";"}return function(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=le(e,r,t[a])+";";else for(var s in t){var o=t[s];if("object"!==typeof o)null!=r&&void 0!==r[o]?n+=s+"{"+r[o]+"}":ie(o)&&(n+=ce(s)+":"+ue(s,o)+";");else if(!Array.isArray(o)||"string"!==typeof o[0]||null!=r&&void 0!==r[o[0]]){var i=le(e,r,o);switch(s){case"animation":case"animationName":n+=ce(s)+":"+i+";";break;default:n+=s+"{"+i+"}"}}else for(var c=0;c<o.length;c++)ie(o[c])&&(n+=ce(s)+":"+ue(s,o[c])+";")}return n}(e,r,t);case"function":if(void 0!==e){var a=fe,s=t(e);return fe=a,le(e,r,s)}break;case"string":}if(null==r)return t;var o=r[t];return void 0!==o?o:t}var fe,de=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var he=function(e,r,t){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,a="";fe=void 0;var s=e[0];null==s||void 0===s.raw?(n=!1,a+=le(t,r,s)):a+=s[0];for(var o=1;o<e.length;o++)a+=le(t,r,e[o]),n&&(a+=s[o]);de.lastIndex=0;for(var i,c="";null!==(i=de.exec(a));)c+="-"+i[1];return{name:te(a)+c,styles:a,next:fe}};function pe(e,r,t){var n="";return t.split(" ").forEach((function(t){void 0!==e[t]?r.push(e[t]+";"):n+=t+" "})),n}var ve=function(e,r,t){var n=e.key+"-"+r.name;if(!1===t&&void 0===e.registered[n]&&(e.registered[n]=r.styles),void 0===e.inserted[r.name]){var a=r;do{e.insert(r===a?"."+n:"",a,e.sheet,!0);a=a.next}while(void 0!==a)}};function ye(e,r){if(void 0===e.inserted[r.name])return e.insert("",r,e.sheet,!0)}function me(e,r,t){var n=[],a=pe(e,n,t);return n.length<2?t:a+r(n)}var ge=function e(r){for(var t="",n=0;n<r.length;n++){var a=r[n];if(null!=a){var s=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))s=e(a);else for(var o in s="",a)a[o]&&o&&(s&&(s+=" "),s+=o);break;default:s=a}s&&(t&&(t+=" "),t+=s)}}return t},be=function(e){var r=re(e);r.sheet.speedy=function(e){this.isSpeedy=e},r.compat=!0;var t=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=he(t,r.registered,void 0);return ve(r,a,!1),r.key+"-"+a.name};return{css:t,cx:function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return me(r.registered,t,ge(n))},injectGlobal:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=he(t,r.registered);ye(r,a)},keyframes:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=he(t,r.registered),s="animation-"+a.name;return ye(r,{name:a.name,styles:"@keyframes "+s+"{"+a.styles+"}"}),s},hydrate:function(e){e.forEach((function(e){r.inserted[e]=!0}))},flush:function(){r.registered={},r.inserted={},r.sheet.flush()},sheet:r.sheet,cache:r,getRegisteredStyles:pe.bind(null,r.registered),merge:me.bind(null,r.registered,t)}}({key:"css"}),we=(be.flush,be.hydrate,be.cx),xe=(be.merge,be.getRegisteredStyles,be.injectGlobal),ke=(be.keyframes,be.css);be.sheet,be.cache},2167:function(e,r,t){"use strict";var n=t(3848),a=t(9448);r.default=void 0;var s=a(t(7294)),o=t(9414),i=t(4651),c=t(7426),u={};function l(e,r,t,n){if(e&&(0,o.isLocalURL)(r)){e.prefetch(r,t,n).catch((e=>{0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,a=(0,i.useRouter)(),f=s.default.useMemo((()=>{var r=(0,o.resolveHref)(a,e.href,!0),t=n(r,2),s=t[0],i=t[1];return{href:s,as:e.as?(0,o.resolveHref)(a,e.as):i||s}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,y=e.shallow,m=e.scroll,g=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var b=(r=s.Children.only(p))&&"object"===typeof r&&r.ref,w=(0,c.useIntersection)({rootMargin:"200px"}),x=n(w,2),k=x[0],j=x[1],A=s.default.useCallback((e=>{k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);(0,s.useEffect)((()=>{var e=j&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof g?g:a&&a.locale,n=u[d+"%"+h+(r?"%"+r:"")];e&&!n&&l(a,d,h,{locale:r})}),[h,d,j,g,t,a]);var C={ref:A,onClick:e=>{r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,s,i,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),r[a?"replace":"push"](t,n,{shallow:s,locale:c,scroll:i}))}(e,a,d,h,v,y,m,g)},onMouseEnter:e=>{(0,o.isLocalURL)(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l(a,d,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var O="undefined"!==typeof g?g:a&&a.locale,$=a&&a.isLocaleDomain&&(0,o.getDomainLocale)(h,O,a&&a.locales,a&&a.domainLocales);C.href=$||(0,o.addBasePath)((0,o.addLocale)(h,O,a&&a.defaultLocale))}return s.default.cloneElement(r,C)};r.default=f},7426:function(e,r,t){"use strict";var n=t(3848);r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!o,c=(0,a.useRef)(),u=(0,a.useState)(!1),l=n(u,2),f=l[0],d=l[1],h=(0,a.useCallback)((e=>{c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=i.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((e=>{e.forEach((e=>{var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,s=n.observer,o=n.elements;return o.set(e,r),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),i.delete(a))}}(e,(e=>e&&d(e)),{rootMargin:r}))}),[t,r,f]);return(0,a.useEffect)((()=>{if(!o&&!f){var e=(0,s.requestIdleCallback)((()=>d(!0)));return()=>(0,s.cancelIdleCallback)(e)}}),[f]),[h,f]};var a=t(7294),s=t(3447),o="undefined"!==typeof IntersectionObserver;var i=new Map},1763:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var n=t(6265),a=t(5893),s=t(7294),o=t(6221),i=t(9227),c=t(1664);function u(){var e=(0,s.useMemo)((()=>{var e;return(null===(e="GitHub,https://github.com/renzholy;Twitter,http://twitter.com/rezholy;Jike,https://web.okjike.com/u/d25026f2-18ce-48aa-9ea7-c05a25446368")?void 0:e.split(";").map((e=>e.split(","))))||[]}),[]);return(0,a.jsxs)("footer",{className:(0,o.iv)({name:"atf797",styles:"user-select:none;display:flex;align-items:center;height:64px;padding:0 20px;border-top:1px solid #e1e4e8;span{color:#586069;font-size:12px;}a{color:#0366d6;text-decoration:none;font-size:12px;}a+a{margin-left:16px;}a:hover,a:focus{text-decoration:underline;}"}),children:[(0,a.jsxs)("span",{children:["Generated by:\xa0",(0,a.jsx)("a",{href:"https://github.com/renzholy/blogit",target:"_blank",rel:"noreferrer",children:"Blogit"})]}),(0,a.jsx)("span",{className:(0,o.iv)({name:"82a6rk",styles:"flex:1"})}),e.map((e=>{var r=(0,i.Z)(e,2),t=r[0],n=r[1];return n.startsWith("http")||n.startsWith("//")?(0,a.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:t},t):(0,a.jsx)(c.default,{href:n,children:t},t)}))]})}function l(e){var r=(0,s.useMemo)((()=>{var e;return(null===(e="About,/about")?void 0:e.split(";").map((e=>e.split(","))))||[]}),[]);return(0,a.jsxs)("nav",{className:(0,o.cx)(e.className,(0,o.iv)({name:"172w2om",styles:"user-select:none;display:flex;align-items:center;a{color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;}a+a{margin-left:16px;}a:hover,a:focus{color:hsla(0, 0%, 100%, 0.7);}"})),children:[(0,a.jsx)(c.default,{href:"/",children:"Found Pan Tiger"}),(0,a.jsx)("div",{className:(0,o.iv)({name:"82a6rk",styles:"flex:1"})}),r.map((e=>{var r=(0,i.Z)(e,2),t=r[0],n=r[1];return n.startsWith("http")||n.startsWith("//")?(0,a.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",children:t},t):(0,a.jsx)(c.default,{href:n,children:t},t)}))]})}function f(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{className:(0,o.iv)({name:"2289rx",styles:"position:fixed;top:0;left:0;right:0;height:64px;background-color:#24292e;padding:0 20px"})}),e.children,(0,a.jsx)(u,{})]})}t(5025);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}(0,o.hi)({name:"1uruf9f",styles:"::-webkit-scrollbar{display:none;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;}:root{--max-width:900px;}"});var p=function(e){var r=e.Component,t=e.pageProps;return(0,a.jsx)(f,{children:(0,a.jsx)(r,h({},t))})}},6363:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(1763)}])},5025:function(){},1664:function(e,r,t){e.exports=t(2167)},6265:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.d(r,{Z:function(){return n}})},9227:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(t.push(o.value),!r||t.length!==r);n=!0);}catch(c){a=!0,s=c}finally{try{n||null==i.return||i.return()}finally{if(a)throw s}}return t}}(e,r)||function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,{Z:function(){return a}})}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(6363),r(4651)}));var t=e.O();_N_E=t}]);