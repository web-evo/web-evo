"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9095],{92692:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){return e?(e.nodeName||"").toLowerCase():null}},23695:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}},62976:function(e,t,n){n.d(t,{Re:function(){return i},Zq:function(){return a},kK:function(){return o}});var r=n(23695);function o(e){var t=(0,r.Z)(e).Element;return e instanceof t||e instanceof Element}function i(e){var t=(0,r.Z)(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function a(e){if("undefined"==typeof ShadowRoot)return!1;var t=(0,r.Z)(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}},97062:function(e,t,n){var r=n(92692),o=n(62976);t.Z={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},a=t.elements[e];(0,o.Re)(a)&&(0,r.Z)(a)&&(Object.assign(a.style,n),Object.keys(i).forEach(function(e){var t=i[e];!1===t?a.removeAttribute(e):a.setAttribute(e,!0===t?"":t)}))})},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var i=t.elements[e],a=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]="",e},{});(0,o.Re)(i)&&(0,r.Z)(i)&&(Object.assign(i.style,s),Object.keys(a).forEach(function(e){i.removeAttribute(e)}))})}},requires:["computeStyles"]}},29095:function(e,t,n){n.d(t,{fi:function(){return ef}});var r,o,i,a,s,f=n(62976),c=Math.max,p=Math.min,u=Math.round,l=n(23695);function d(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function h(){return!/^((?!chrome|android).)*safari/i.test(d())}function m(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&(0,f.Re)(e)&&(o=e.offsetWidth>0&&u(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&u(r.height)/e.offsetHeight||1);var a=((0,f.kK)(e)?(0,l.Z)(e):window).visualViewport,s=!h()&&n,c=(r.left+(s&&a?a.offsetLeft:0))/o,p=(r.top+(s&&a?a.offsetTop:0))/i,d=r.width/o,m=r.height/i;return{width:d,height:m,top:p,right:c+d,bottom:p+m,left:c,x:c,y:p}}function v(e){var t=(0,l.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}var g=n(92692);function y(e){return(((0,f.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}function b(e){return m(y(e)).left+v(e).scrollLeft}function w(e){return(0,l.Z)(e).getComputedStyle(e)}function x(e){var t=w(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function O(e){var t=m(e),n=e.offsetWidth,r=e.offsetHeight;return 1>=Math.abs(t.width-n)&&(n=t.width),1>=Math.abs(t.height-r)&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function j(e){return"html"===(0,g.Z)(e)?e:e.assignedSlot||e.parentNode||((0,f.Zq)(e)?e.host:null)||y(e)}function E(e,t){void 0===t&&(t=[]);var n,r=function e(t){return["html","body","#document"].indexOf((0,g.Z)(t))>=0?t.ownerDocument.body:(0,f.Re)(t)&&x(t)?t:e(j(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=(0,l.Z)(r),a=o?[i].concat(i.visualViewport||[],x(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(E(j(a)))}function k(e){return(0,f.Re)(e)&&"fixed"!==w(e).position?e.offsetParent:null}function Z(e){for(var t,n=(0,l.Z)(e),r=k(e);r&&(t=r,["table","td","th"].indexOf((0,g.Z)(t))>=0)&&"static"===w(r).position;)r=k(r);return r&&("html"===(0,g.Z)(r)||"body"===(0,g.Z)(r)&&"static"===w(r).position)?n:r||function(e){var t=/firefox/i.test(d());if(/Trident/i.test(d())&&(0,f.Re)(e)&&"fixed"===w(e).position)return null;var n=j(e);for((0,f.Zq)(n)&&(n=n.host);(0,f.Re)(n)&&0>["html","body"].indexOf((0,g.Z)(n));){var r=w(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||n}var D="bottom",A="right",R="left",L="auto",W=["top",D,A,R],M="start",P="viewport",B="popper",H=W.reduce(function(e,t){return e.concat([t+"-"+M,t+"-end"])},[]),T=[].concat(W,[L]).reduce(function(e,t){return e.concat([t,t+"-"+M,t+"-end"])},[]),q=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],C={placement:"bottom",modifiers:[],strategy:"absolute"};function S(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(e){return!(e&&"function"==typeof e.getBoundingClientRect)})}var V={passive:!0};function N(e){return e.split("-")[0]}function K(e){return e.split("-")[1]}function _(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function I(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?N(o):null,a=o?K(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case"top":t={x:s,y:n.y-r.height};break;case D:t={x:s,y:n.y+n.height};break;case A:t={x:n.x+n.width,y:f};break;case R:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?_(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case M:t[c]=t[c]-(n[p]/2-r[p]/2);break;case"end":t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}var F={top:"auto",right:"auto",bottom:"auto",left:"auto"};function U(e){var t,n,r,o,i,a,s,f=e.popper,c=e.popperRect,p=e.placement,d=e.variation,h=e.offsets,m=e.position,v=e.gpuAcceleration,g=e.adaptive,b=e.roundOffsets,x=e.isFixed,O=h.x,j=void 0===O?0:O,E=h.y,k=void 0===E?0:E,L="function"==typeof b?b({x:j,y:k}):{x:j,y:k};j=L.x,k=L.y;var W=h.hasOwnProperty("x"),M=h.hasOwnProperty("y"),P=R,B="top",H=window;if(g){var T=Z(f),q="clientHeight",C="clientWidth";T===(0,l.Z)(f)&&"static"!==w(T=y(f)).position&&"absolute"===m&&(q="scrollHeight",C="scrollWidth"),("top"===p||(p===R||p===A)&&"end"===d)&&(B=D,k-=(x&&T===H&&H.visualViewport?H.visualViewport.height:T[q])-c.height,k*=v?1:-1),(p===R||("top"===p||p===D)&&"end"===d)&&(P=A,j-=(x&&T===H&&H.visualViewport?H.visualViewport.width:T[C])-c.width,j*=v?1:-1)}var S=Object.assign({position:m},g&&F),V=!0===b?(t={x:j,y:k},n=(0,l.Z)(f),r=t.x,o=t.y,{x:u(r*(i=n.devicePixelRatio||1))/i||0,y:u(o*i)/i||0}):{x:j,y:k};return(j=V.x,k=V.y,v)?Object.assign({},S,((s={})[B]=M?"0":"",s[P]=W?"0":"",s.transform=1>=(H.devicePixelRatio||1)?"translate("+j+"px, "+k+"px)":"translate3d("+j+"px, "+k+"px, 0)",s)):Object.assign({},S,((a={})[B]=M?k+"px":"",a[P]=W?j+"px":"",a.transform="",a))}var z=n(97062),X={left:"right",right:"left",bottom:"top",top:"bottom"};function Y(e){return e.replace(/left|right|bottom|top/g,function(e){return X[e]})}var G={start:"end",end:"start"};function J(e){return e.replace(/start|end/g,function(e){return G[e]})}function Q(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,f.Zq)(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function $(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ee(e,t,n){var r,o,i,a,s,p,u,d,g,x;return t===P?$(function(e,t){var n=(0,l.Z)(e),r=y(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=h();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+b(e),y:f}}(e,n)):(0,f.kK)(t)?((r=m(t,!1,"fixed"===n)).top=r.top+t.clientTop,r.left=r.left+t.clientLeft,r.bottom=r.top+t.clientHeight,r.right=r.left+t.clientWidth,r.width=t.clientWidth,r.height=t.clientHeight,r.x=r.left,r.y=r.top,r):$((o=y(e),a=y(o),s=v(o),p=null==(i=o.ownerDocument)?void 0:i.body,u=c(a.scrollWidth,a.clientWidth,p?p.scrollWidth:0,p?p.clientWidth:0),d=c(a.scrollHeight,a.clientHeight,p?p.scrollHeight:0,p?p.clientHeight:0),g=-s.scrollLeft+b(o),x=-s.scrollTop,"rtl"===w(p||a).direction&&(g+=c(a.clientWidth,p?p.clientWidth:0)-u),{width:u,height:d,x:g,y:x}))}function et(){return{top:0,right:0,bottom:0,left:0}}function en(e){return Object.assign({},et(),e)}function er(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}function eo(e,t){void 0===t&&(t={});var n,r,o,i,a,s,u,l=t,d=l.placement,h=void 0===d?e.placement:d,v=l.strategy,b=void 0===v?e.strategy:v,x=l.boundary,O=l.rootBoundary,k=l.elementContext,R=void 0===k?B:k,L=l.altBoundary,M=l.padding,H=void 0===M?0:M,T=en("number"!=typeof H?H:er(H,W)),q=e.rects.popper,C=e.elements[void 0!==L&&L?R===B?"reference":B:R],S=(n=(0,f.kK)(C)?C:C.contextElement||y(e.elements.popper),s=(a=[].concat("clippingParents"===(r=void 0===x?"clippingParents":x)?(o=E(j(n)),i=["absolute","fixed"].indexOf(w(n).position)>=0&&(0,f.Re)(n)?Z(n):n,(0,f.kK)(i)?o.filter(function(e){return(0,f.kK)(e)&&Q(e,i)&&"body"!==(0,g.Z)(e)}):[]):[].concat(r),[void 0===O?P:O]))[0],(u=a.reduce(function(e,t){var r=ee(n,t,b);return e.top=c(r.top,e.top),e.right=p(r.right,e.right),e.bottom=p(r.bottom,e.bottom),e.left=c(r.left,e.left),e},ee(n,s,b))).width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u),V=m(e.elements.reference),N=I({reference:V,element:q,strategy:"absolute",placement:h}),K=$(Object.assign({},q,N)),_=R===B?K:V,F={top:S.top-_.top+T.top,bottom:_.bottom-S.bottom+T.bottom,left:S.left-_.left+T.left,right:_.right-S.right+T.right},U=e.modifiersData.offset;if(R===B&&U){var z=U[h];Object.keys(F).forEach(function(e){var t=[A,D].indexOf(e)>=0?1:-1,n=["top",D].indexOf(e)>=0?"y":"x";F[e]+=z[n]*t})}return F}function ei(e,t,n){return c(e,p(t,n))}function ea(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function es(e){return["top",A,D,R].some(function(t){return e[t]>=0})}var ef=(i=void 0===(o=(r={defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=(0,l.Z)(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(e){e.addEventListener("scroll",n.update,V)}),s&&f.addEventListener("resize",n.update,V),function(){i&&c.forEach(function(e){e.removeEventListener("scroll",n.update,V)}),s&&f.removeEventListener("resize",n.update,V)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=I({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=n.adaptive,i=n.roundOffsets,a=void 0===i||i,s={placement:N(t.placement),variation:K(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:void 0===r||r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,U(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:void 0===o||o,roundOffsets:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,U(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},z.Z,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=T.reduce(function(e,n){var r,o,a,s,f,c;return e[n]=(r=t.rects,a=[R,"top"].indexOf(o=N(n))>=0?-1:1,f=(s="function"==typeof i?i(Object.assign({},r,{placement:n})):i)[0],c=s[1],f=f||0,c=(c||0)*a,[R,A].indexOf(o)>=0?{x:c,y:f}:{x:f,y:c}),e},{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=t.options.placement,g=N(v)===v,y=f||(g||!h?[Y(v)]:function(e){if(N(e)===L)return[];var t=Y(e);return[J(e),t,J(t)]}(v)),b=[v].concat(y).reduce(function(e,n){var r,o,i,a,s,f,l,d,v,g,y,b;return e.concat(N(n)===L?(o=(r={placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:h,allowedAutoPlacements:m}).placement,i=r.boundary,a=r.rootBoundary,s=r.padding,f=r.flipVariations,d=void 0===(l=r.allowedAutoPlacements)?T:l,0===(y=(g=(v=K(o))?f?H:H.filter(function(e){return K(e)===v}):W).filter(function(e){return d.indexOf(e)>=0})).length&&(y=g),Object.keys(b=y.reduce(function(e,n){return e[n]=eo(t,{placement:n,boundary:i,rootBoundary:a,padding:s})[N(n)],e},{})).sort(function(e,t){return b[e]-b[t]})):n)},[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],k=0;k<b.length;k++){var Z=b[k],P=N(Z),B=K(Z)===M,q=["top",D].indexOf(P)>=0,C=q?"width":"height",S=eo(t,{placement:Z,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),V=q?B?A:R:B?D:"top";w[C]>x[C]&&(V=Y(V));var _=Y(V),I=[];if(i&&I.push(S[P]<=0),s&&I.push(S[V]<=0,S[_]<=0),I.every(function(e){return e})){E=Z,j=!1;break}O.set(Z,I)}if(j)for(var F=h?3:1,U=function(e){var t=b.find(function(t){var n=O.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return E=t,"break"},z=F;z>0&&"break"!==U(z);z--);t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=n.altAxis,a=n.boundary,s=n.rootBoundary,f=n.altBoundary,u=n.padding,l=n.tether,d=void 0===l||l,h=n.tetherOffset,m=void 0===h?0:h,v=eo(t,{boundary:a,rootBoundary:s,padding:u,altBoundary:f}),g=N(t.placement),y=K(t.placement),b=!y,w=_(g),x="x"===w?"y":"x",j=t.modifiersData.popperOffsets,E=t.rects.reference,k=t.rects.popper,L="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,W="number"==typeof L?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(j){if(void 0===o||o){var H,T="y"===w?"top":R,q="y"===w?D:A,C="y"===w?"height":"width",S=j[w],V=S+v[T],I=S-v[q],F=d?-k[C]/2:0,U=y===M?E[C]:k[C],z=y===M?-k[C]:-E[C],X=t.elements.arrow,Y=d&&X?O(X):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:et(),J=G[T],Q=G[q],$=ei(0,E[C],Y[C]),ee=b?E[C]/2-F-$-J-W.mainAxis:U-$-J-W.mainAxis,en=b?-E[C]/2+F+$+Q+W.mainAxis:z+$+Q+W.mainAxis,er=t.elements.arrow&&Z(t.elements.arrow),ea=er?"y"===w?er.clientTop||0:er.clientLeft||0:0,es=null!=(H=null==P?void 0:P[w])?H:0,ef=S+ee-es-ea,ec=S+en-es,ep=ei(d?p(V,ef):V,S,d?c(I,ec):I);j[w]=ep,B[w]=ep-S}if(void 0!==i&&i){var eu,el,ed="x"===w?"top":R,eh="x"===w?D:A,em=j[x],ev="y"===x?"height":"width",eg=em+v[ed],ey=em-v[eh],eb=-1!==["top",R].indexOf(g),ew=null!=(el=null==P?void 0:P[x])?el:0,ex=eb?eg:em-E[ev]-k[ev]-ew+W.altAxis,eO=eb?em+E[ev]+k[ev]-ew-W.altAxis:ey,ej=d&&eb?(eu=ei(ex,em,eO))>eO?eO:eu:ei(d?ex:eg,em,d?eO:ey);j[x]=ej,B[x]=ej-em}t.modifiersData[r]=B}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n,r=e.state,o=e.name,i=e.options,a=r.elements.arrow,s=r.modifiersData.popperOffsets,f=N(r.placement),c=_(f),p=[R,A].indexOf(f)>=0?"height":"width";if(a&&s){var u=en("number"!=typeof(t="function"==typeof(t=i.padding)?t(Object.assign({},r.rects,{placement:r.placement})):t)?t:er(t,W)),l=O(a),d="y"===c?"top":R,h="y"===c?D:A,m=r.rects.reference[p]+r.rects.reference[c]-s[c]-r.rects.popper[p],v=s[c]-r.rects.reference[c],g=Z(a),y=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,b=u[d],w=y-l[p]-u[h],x=y/2-l[p]/2+(m/2-v/2),j=ei(b,x,w);r.modifiersData[o]=((n={})[c]=j,n.centerOffset=j-x,n)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&Q(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=eo(t,{elementContext:"reference"}),s=eo(t,{altBoundary:!0}),f=ea(a,r),c=ea(s,o,i),p=es(f),u=es(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]}).defaultModifiers)?[]:o,s=void 0===(a=r.defaultOptions)?C:a,function(e,t,n){void 0===n&&(n=s);var r,o={placement:"bottom",orderedModifiers:[],options:Object.assign({},C,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],c=!1,p={state:o,setOptions:function(n){var r,c,u,l,h,m="function"==typeof n?n(o.options):n;d(),o.options=Object.assign({},s,o.options,m),o.scrollParents={reference:(0,f.kK)(e)?E(e):e.contextElement?E(e.contextElement):[],popper:E(t)};var v=(c=Object.keys(r=[].concat(i,o.options.modifiers).reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{})).map(function(e){return r[e]}),u=new Map,l=new Set,h=[],c.forEach(function(e){u.set(e.name,e)}),c.forEach(function(e){l.has(e.name)||function e(t){l.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach(function(t){if(!l.has(t)){var n=u.get(t);n&&e(n)}}),h.push(t)}(e)}),q.reduce(function(e,t){return e.concat(h.filter(function(e){return e.phase===t}))},[]));return o.orderedModifiers=v.filter(function(e){return e.enabled}),o.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=e.effect;if("function"==typeof r){var i=r({state:o,name:t,instance:p,options:void 0===n?{}:n});a.push(i||function(){})}}),p.update()},forceUpdate:function(){if(!c){var e,t,n,r,i,a,s,d,h,w,j,E,k=o.elements,D=k.reference,A=k.popper;if(S(D,A)){;o.rects={reference:(t=Z(A),n="fixed"===o.options.strategy,r=(0,f.Re)(t),d=(0,f.Re)(t)&&(a=u((i=t.getBoundingClientRect()).width)/t.offsetWidth||1,s=u(i.height)/t.offsetHeight||1,1!==a||1!==s),h=y(t),w=m(D,d,n),j={scrollLeft:0,scrollTop:0},E={x:0,y:0},(r||!r&&!n)&&(("body"!==(0,g.Z)(t)||x(h))&&(j=(e=t)!==(0,l.Z)(e)&&(0,f.Re)(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:v(e)),(0,f.Re)(t)?(E=m(t,!0),E.x+=t.clientLeft,E.y+=t.clientTop):h&&(E.x=b(h))),{x:w.left+j.scrollLeft-E.x,y:w.top+j.scrollTop-E.y,width:w.width,height:w.height}),popper:O(A)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach(function(e){return o.modifiersData[e.name]=Object.assign({},e.data)});for(var R=0;R<o.orderedModifiers.length;R++){if(!0===o.reset){o.reset=!1,R=-1;continue}var L=o.orderedModifiers[R],W=L.fn,M=L.options,P=void 0===M?{}:M,B=L.name;"function"==typeof W&&(o=W({state:o,options:P,name:B,instance:p})||o)}}}},update:function(){return r||(r=new Promise(function(e){Promise.resolve().then(function(){r=void 0,e(new Promise(function(e){p.forceUpdate(),e(o)}))})})),r},destroy:function(){d(),c=!0}};if(!S(e,t))return p;function d(){a.forEach(function(e){return e()}),a=[]}return p.setOptions(n).then(function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)}),p})}}]);