"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2833],{41589:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e,t){return"function"==typeof e?e(t):e}},51871:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4210),o=n(18450),l=n(93643),i=n(86351),a=n(35209);function u(e){if(void 0===e)return{};let t={};return Object.keys(e).filter(t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t])).forEach(n=>{t[n]=e[n]}),t}var s=n(41589);let d=["elementType","externalSlotProps","ownerState"];function c(e){var t,n;let{elementType:c,externalSlotProps:f,ownerState:p}=e,m=(0,o.Z)(e,d),h=(0,s.Z)(f,p),{props:b,internalRef:v}=function(e){let{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:l,className:i}=e;if(!t){let e=(0,a.Z)(null==l?void 0:l.className,null==o?void 0:o.className,i,null==n?void 0:n.className),t=(0,r.Z)({},null==n?void 0:n.style,null==l?void 0:l.style,null==o?void 0:o.style),u=(0,r.Z)({},n,l,o);return e.length>0&&(u.className=e),Object.keys(t).length>0&&(u.style=t),{props:u,internalRef:void 0}}let s=function(e,t=[]){if(void 0===e)return{};let n={};return Object.keys(e).filter(n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n)).forEach(t=>{n[t]=e[t]}),n}((0,r.Z)({},l,o)),d=u(o),c=u(l),f=t(s),p=(0,a.Z)(null==f?void 0:f.className,null==n?void 0:n.className,i,null==l?void 0:l.className,null==o?void 0:o.className),m=(0,r.Z)({},null==f?void 0:f.style,null==n?void 0:n.style,null==l?void 0:l.style,null==o?void 0:o.style),h=(0,r.Z)({},f,n,c,d);return p.length>0&&(h.className=p),Object.keys(m).length>0&&(h.style=m),{props:h,internalRef:f.ref}}((0,r.Z)({},m,{externalSlotProps:h})),y=(0,l.Z)(v,null==h?void 0:h.ref,null==(t=e.additionalProps)?void 0:t.ref),Z=(n=(0,r.Z)({},b,{ref:y}),void 0===c||(0,i.Z)(c)?n:(0,r.Z)({},n,{ownerState:(0,r.Z)({},n.ownerState,p)}));return Z}},3505:function(e,t,n){var r=n(4210),o=n(18450),l=n(34676),i=n(87794),a=n(40336),u=n(95686),s=n(33365),d=n(87812);let c=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],f={entering:{opacity:1},entered:{opacity:1}},p=l.forwardRef(function(e,t){let n=(0,a.Z)(),p={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:m,appear:h=!0,children:b,easing:v,in:y,onEnter:Z,onEntered:g,onEntering:x,onExit:E,onExited:S,onExiting:k,style:w,timeout:R=p,TransitionComponent:C=i.ZP}=e,N=(0,o.Z)(e,c),P=l.useRef(null),T=(0,s.Z)(P,b.ref,t),A=e=>t=>{if(e){let n=P.current;void 0===t?e(n):e(n,t)}},I=A(x),M=A((e,t)=>{(0,u.n)(e);let r=(0,u.C)({style:w,timeout:R,easing:v},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",r),e.style.transition=n.transitions.create("opacity",r),Z&&Z(e,t)}),O=A(g),j=A(k),F=A(e=>{let t=(0,u.C)({style:w,timeout:R,easing:v},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),E&&E(e)}),z=A(S);return(0,d.jsx)(C,(0,r.Z)({appear:h,in:y,nodeRef:P,onEnter:M,onEntered:O,onEntering:I,onExit:F,onExited:z,onExiting:j,addEndListener:e=>{m&&m(P.current,e)},timeout:R},N,{children:(e,t)=>l.cloneElement(b,(0,r.Z)({style:(0,r.Z)({opacity:0,visibility:"exited"!==e||y?void 0:"hidden"},f[e],w,b.props.style),ref:T},t))}))});t.Z=p},71309:function(e,t,n){var r=n(34676);let o=r.createContext(void 0);t.Z=o},73529:function(e,t,n){n.d(t,{Z:function(){return r}});function r({props:e,states:t,muiFormControl:n}){return t.reduce((t,r)=>(t[r]=e[r],n&&void 0===e[r]&&(t[r]=n[r]),t),{})}},10749:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(34676),o=n(71309);function l(){return r.useContext(o.Z)}},83509:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(4210);n(34676);var o=n(11927),l=n(87812);function i(e){let{styles:t,defaultTheme:n={}}=e,r="function"==typeof t?e=>t(null==e||0===Object.keys(e).length?n:e):t;return(0,l.jsx)(o.xB,{styles:r})}var a=n(26063),u=function({styles:e,themeId:t,defaultTheme:n={}}){let r=(0,a.Z)(n),o="function"==typeof e?e(t&&r[t]||r):e;return(0,l.jsx)(i,{styles:o})},s=n(18561),d=n(5460),c=function(e){return(0,l.jsx)(u,(0,r.Z)({},e,{defaultTheme:s.Z,themeId:d.Z}))}},25690:function(e,t,n){n.d(t,{rA:function(){return z},Ej:function(){return F},ZP:function(){return D},_o:function(){return O},Gx:function(){return M}});var r=n(18450),o=n(4210),l=n(33598),i=n(34676),a=n(35209),u=n(39718),s=n(93775),d=n(93643),c=n(86290),f=n(73146),p=n(32167),m=n(87812);let h=["onChange","maxRows","minRows","style","value"];function b(e){return parseInt(e,10)||0}let v={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function y(e){return null==e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}let Z=i.forwardRef(function(e,t){let{onChange:n,maxRows:l,minRows:a=1,style:u,value:Z}=e,g=(0,r.Z)(e,h),{current:x}=i.useRef(null!=Z),E=i.useRef(null),S=(0,d.Z)(t,E),k=i.useRef(null),w=i.useRef(0),[R,C]=i.useState({outerHeightStyle:0}),N=i.useCallback(()=>{let t=E.current,n=(0,c.Z)(t),r=n.getComputedStyle(t);if("0px"===r.width)return{outerHeightStyle:0};let o=k.current;o.style.width=r.width,o.value=t.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");let i=r.boxSizing,u=b(r.paddingBottom)+b(r.paddingTop),s=b(r.borderBottomWidth)+b(r.borderTopWidth),d=o.scrollHeight;o.value="x";let f=o.scrollHeight,p=d;a&&(p=Math.max(Number(a)*f,p)),l&&(p=Math.min(Number(l)*f,p)),p=Math.max(p,f);let m=p+("border-box"===i?u+s:0),h=1>=Math.abs(p-d);return{outerHeightStyle:m,overflow:h}},[l,a,e.placeholder]),P=(e,t)=>{let{outerHeightStyle:n,overflow:r}=t;return w.current<20&&(n>0&&Math.abs((e.outerHeightStyle||0)-n)>1||e.overflow!==r)?(w.current+=1,{overflow:r,outerHeightStyle:n}):e},T=i.useCallback(()=>{let e=N();y(e)||C(t=>P(t,e))},[N]),A=()=>{let e=N();y(e)||s.flushSync(()=>{C(t=>P(t,e))})};return i.useEffect(()=>{let e;let t=(0,f.Z)(()=>{w.current=0,E.current&&A()}),n=E.current,r=(0,c.Z)(n);return r.addEventListener("resize",t),"undefined"!=typeof ResizeObserver&&(e=new ResizeObserver(t)).observe(n),()=>{t.clear(),r.removeEventListener("resize",t),e&&e.disconnect()}}),(0,p.Z)(()=>{T()}),i.useEffect(()=>{w.current=0},[Z]),(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)("textarea",(0,o.Z)({value:Z,onChange:e=>{w.current=0,x||T(),n&&n(e)},ref:S,rows:a,style:(0,o.Z)({height:R.outerHeightStyle,overflow:R.overflow?"hidden":void 0},u)},g)),(0,m.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:k,tabIndex:-1,style:(0,o.Z)({},v.shadow,u,{padding:0})})]})});var g=n(86351),x=n(73529),E=n(71309),S=n(10749),k=n(55653),w=n(38319),R=n(20709),C=n(33365),N=n(68476),P=n(83509),T=n(73211),A=n(82415);let I=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],M=(e,t)=>{let{ownerState:n}=e;return[t.root,n.formControl&&t.formControl,n.startAdornment&&t.adornedStart,n.endAdornment&&t.adornedEnd,n.error&&t.error,"small"===n.size&&t.sizeSmall,n.multiline&&t.multiline,n.color&&t[`color${(0,R.Z)(n.color)}`],n.fullWidth&&t.fullWidth,n.hiddenLabel&&t.hiddenLabel]},O=(e,t)=>{let{ownerState:n}=e;return[t.input,"small"===n.size&&t.inputSizeSmall,n.multiline&&t.inputMultiline,"search"===n.type&&t.inputTypeSearch,n.startAdornment&&t.inputAdornedStart,n.endAdornment&&t.inputAdornedEnd,n.hiddenLabel&&t.inputHiddenLabel]},j=e=>{let{classes:t,color:n,disabled:r,error:o,endAdornment:l,focused:i,formControl:a,fullWidth:s,hiddenLabel:d,multiline:c,readOnly:f,size:p,startAdornment:m,type:h}=e,b={root:["root",`color${(0,R.Z)(n)}`,r&&"disabled",o&&"error",s&&"fullWidth",i&&"focused",a&&"formControl","small"===p&&"sizeSmall",c&&"multiline",m&&"adornedStart",l&&"adornedEnd",d&&"hiddenLabel",f&&"readOnly"],input:["input",r&&"disabled","search"===h&&"inputTypeSearch",c&&"inputMultiline","small"===p&&"inputSizeSmall",d&&"inputHiddenLabel",m&&"inputAdornedStart",l&&"inputAdornedEnd",f&&"readOnly"]};return(0,u.Z)(b,A.u,t)},F=(0,k.ZP)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:M})(({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${A.Z.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&(0,o.Z)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),z=(0,k.ZP)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:O})(({theme:e,ownerState:t})=>{let n="light"===e.palette.mode,r=(0,o.Z)({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),l={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:n?.42:.5};return(0,o.Z)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${A.Z.formControl} &`]:{"&::-webkit-input-placeholder":l,"&::-moz-placeholder":l,"&:-ms-input-placeholder":l,"&::-ms-input-placeholder":l,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${A.Z.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===t.size&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===t.type&&{MozAppearance:"textfield"})}),B=(0,m.jsx)(P.Z,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),L=i.forwardRef(function(e,t){var n;let u=(0,w.Z)({props:e,name:"MuiInputBase"}),{"aria-describedby":s,autoComplete:d,autoFocus:c,className:f,components:p={},componentsProps:h={},defaultValue:b,disabled:v,disableInjectingGlobalStyles:y,endAdornment:k,fullWidth:R=!1,id:P,inputComponent:A="input",inputProps:M={},inputRef:O,maxRows:L,minRows:D,multiline:W=!1,name:H,onBlur:K,onChange:$,onClick:U,onFocus:_,onKeyDown:V,onKeyUp:q,placeholder:Y,readOnly:G,renderSuffix:X,rows:J,slotProps:Q={},slots:ee={},startAdornment:et,type:en="text",value:er}=u,eo=(0,r.Z)(u,I),el=null!=M.value?M.value:er,{current:ei}=i.useRef(null!=el),ea=i.useRef(),eu=i.useCallback(e=>{},[]),es=(0,C.Z)(ea,O,M.ref,eu),[ed,ec]=i.useState(!1),ef=(0,S.Z)(),ep=(0,x.Z)({props:u,muiFormControl:ef,states:["color","disabled","error","hiddenLabel","size","required","filled"]});ep.focused=ef?ef.focused:ed,i.useEffect(()=>{!ef&&v&&ed&&(ec(!1),K&&K())},[ef,v,ed,K]);let em=ef&&ef.onFilled,eh=ef&&ef.onEmpty,eb=i.useCallback(e=>{(0,T.vd)(e)?em&&em():eh&&eh()},[em,eh]);(0,N.Z)(()=>{ei&&eb({value:el})},[el,eb,ei]),i.useEffect(()=>{eb(ea.current)},[]);let ev=A,ey=M;W&&"input"===ev&&(ey=J?(0,o.Z)({type:void 0,minRows:J,maxRows:J},ey):(0,o.Z)({type:void 0,maxRows:L,minRows:D},ey),ev=Z),i.useEffect(()=>{ef&&ef.setAdornedStart(!!et)},[ef,et]);let eZ=(0,o.Z)({},u,{color:ep.color||"primary",disabled:ep.disabled,endAdornment:k,error:ep.error,focused:ep.focused,formControl:ef,fullWidth:R,hiddenLabel:ep.hiddenLabel,multiline:W,size:ep.size,startAdornment:et,type:en}),eg=j(eZ),ex=ee.root||p.Root||F,eE=Q.root||h.root||{},eS=ee.input||p.Input||z;return ey=(0,o.Z)({},ey,null!=(n=Q.input)?n:h.input),(0,m.jsxs)(i.Fragment,{children:[!y&&B,(0,m.jsxs)(ex,(0,o.Z)({},eE,!(0,g.Z)(ex)&&{ownerState:(0,o.Z)({},eZ,eE.ownerState)},{ref:t,onClick:e=>{ea.current&&e.currentTarget===e.target&&ea.current.focus(),U&&!ep.disabled&&U(e)}},eo,{className:(0,a.Z)(eg.root,eE.className,f,G&&"MuiInputBase-readOnly"),children:[et,(0,m.jsx)(E.Z.Provider,{value:null,children:(0,m.jsx)(eS,(0,o.Z)({ownerState:eZ,"aria-invalid":ep.error,"aria-describedby":s,autoComplete:d,autoFocus:c,defaultValue:b,disabled:ep.disabled,id:P,onAnimationStart:e=>{eb("mui-auto-fill-cancel"===e.animationName?ea.current:{value:"x"})},name:H,placeholder:Y,readOnly:G,required:ep.required,rows:J,value:el,onKeyDown:V,onKeyUp:q,type:en},ey,!(0,g.Z)(eS)&&{as:ev,ownerState:(0,o.Z)({},eZ,ey.ownerState)},{ref:es,className:(0,a.Z)(eg.input,ey.className,G&&"MuiInputBase-readOnly"),onBlur:e=>{K&&K(e),M.onBlur&&M.onBlur(e),ef&&ef.onBlur?ef.onBlur(e):ec(!1)},onChange:(e,...t)=>{if(!ei){let t=e.target||ea.current;if(null==t)throw Error((0,l.Z)(1));eb({value:t.value})}M.onChange&&M.onChange(e,...t),$&&$(e,...t)},onFocus:e=>{if(ep.disabled){e.stopPropagation();return}_&&_(e),M.onFocus&&M.onFocus(e),ef&&ef.onFocus?ef.onFocus(e):ec(!0)}}))}),k,X?X((0,o.Z)({},ep,{startAdornment:et})):null]}))]})});var D=L},82415:function(e,t,n){n.d(t,{u:function(){return l}});var r=n(18092),o=n(87080);function l(e){return(0,o.Z)("MuiInputBase",e)}let i=(0,r.Z)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]);t.Z=i},73211:function(e,t,n){function r(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function o(e,t=!1){return e&&(r(e.value)&&""!==e.value||t&&r(e.defaultValue)&&""!==e.defaultValue)}function l(e){return e.startAdornment}n.d(t,{B7:function(){return l},vd:function(){return o}})},33515:function(e,t,n){n.d(t,{Z:function(){return Y}});var r=n(18450),o=n(4210),l=n(34676),i=n(35209),a=n(93643),u=n(69809),s=n(80826),d=n(1189),c=n(39718),f=n(93775),p=n(32167),m=n(69515),h=n(87812);let b=l.forwardRef(function(e,t){let{children:n,container:r,disablePortal:o=!1}=e,[i,u]=l.useState(null),s=(0,a.Z)(l.isValidElement(n)?n.ref:null,t);return((0,p.Z)(()=>{!o&&u(("function"==typeof r?r():r)||document.body)},[r,o]),(0,p.Z)(()=>{if(i&&!o)return(0,m.Z)(t,i),()=>{(0,m.Z)(t,null)}},[t,i,o]),o)?l.isValidElement(n)?l.cloneElement(n,{ref:s}):(0,h.jsx)(l.Fragment,{children:n}):(0,h.jsx)(l.Fragment,{children:i?f.createPortal(n,i):i})});var v=n(86290),y=n(74130);function Z(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function g(e){return parseInt((0,v.Z)(e).getComputedStyle(e).paddingRight,10)||0}function x(e,t,n,r,o){let l=[t,n,...r];[].forEach.call(e.children,e=>{let t=-1===l.indexOf(e),n=!function(e){let t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&Z(e,o)})}function E(e,t){let n=-1;return e.some((e,r)=>!!t(e)&&(n=r,!0)),n}function S(e){let t=[],n=[];return Array.from(e.querySelectorAll('input,select,textarea,a[href],button,[tabindex],audio[controls],video[controls],[contenteditable]:not([contenteditable="false"])')).forEach((e,r)=>{let o=function(e){let t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1===o||e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type||!e.name)return!1;let t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`),n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e)||(0===o?t.push(e):n.push({documentOrder:r,tabIndex:o,node:e}))}),n.sort((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex).map(e=>e.node).concat(t)}function k(){return!0}var w=function(e){let{children:t,disableAutoFocus:n=!1,disableEnforceFocus:r=!1,disableRestoreFocus:o=!1,getTabbable:i=S,isEnabled:s=k,open:d}=e,c=l.useRef(!1),f=l.useRef(null),p=l.useRef(null),m=l.useRef(null),b=l.useRef(null),v=l.useRef(!1),y=l.useRef(null),Z=(0,a.Z)(t.ref,y),g=l.useRef(null);l.useEffect(()=>{d&&y.current&&(v.current=!n)},[n,d]),l.useEffect(()=>{if(!d||!y.current)return;let e=(0,u.Z)(y.current);return!y.current.contains(e.activeElement)&&(y.current.hasAttribute("tabIndex")||y.current.setAttribute("tabIndex","-1"),v.current&&y.current.focus()),()=>{o||(m.current&&m.current.focus&&(c.current=!0,m.current.focus()),m.current=null)}},[d]),l.useEffect(()=>{if(!d||!y.current)return;let e=(0,u.Z)(y.current),t=t=>{let{current:n}=y;if(null!==n){if(!e.hasFocus()||r||!s()||c.current){c.current=!1;return}if(!n.contains(e.activeElement)){if(t&&b.current!==t.target||e.activeElement!==b.current)b.current=null;else if(null!==b.current)return;if(!v.current)return;let r=[];if((e.activeElement===f.current||e.activeElement===p.current)&&(r=i(y.current)),r.length>0){var o,l;let e=!!((null==(o=g.current)?void 0:o.shiftKey)&&(null==(l=g.current)?void 0:l.key)==="Tab"),t=r[0],n=r[r.length-1];"string"!=typeof t&&"string"!=typeof n&&(e?n.focus():t.focus())}else n.focus()}}},n=t=>{g.current=t,!r&&s()&&"Tab"===t.key&&e.activeElement===y.current&&t.shiftKey&&(c.current=!0,p.current&&p.current.focus())};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);let o=setInterval(()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&t(null)},50);return()=>{clearInterval(o),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}},[n,r,o,s,d,i]);let x=e=>{null===m.current&&(m.current=e.relatedTarget),v.current=!0};return(0,h.jsxs)(l.Fragment,{children:[(0,h.jsx)("div",{tabIndex:d?0:-1,onFocus:x,ref:f,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:Z,onFocus:e=>{null===m.current&&(m.current=e.relatedTarget),v.current=!0,b.current=e.target;let n=t.props.onFocus;n&&n(e)}}),(0,h.jsx)("div",{tabIndex:d?0:-1,onFocus:x,ref:p,"data-testid":"sentinelEnd"})]})},R=n(18092),C=n(87080);function N(e){return(0,C.Z)("MuiModal",e)}(0,R.Z)("MuiModal",["root","hidden","backdrop"]);var P=n(51871);let T=l.createContext({disableDefaultClasses:!1}),A=["children","closeAfterTransition","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"],I=e=>{let{open:t,exited:n}=e;return(0,c.Z)({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},function(e){let{disableDefaultClasses:t}=l.useContext(T);return n=>t?"":e(n)}(N))},M=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&Z(e.modalRef,!1);let r=function(e){let t=[];return[].forEach.call(e.children,e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)}),t}(t);x(t,e.mount,e.modalRef,r,!0);let o=E(this.containers,e=>e.container===t);return -1!==o?this.containers[o].modals.push(e):this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:r}),n}mount(e,t){let n=E(this.containers,t=>-1!==t.modals.indexOf(e)),r=this.containers[n];r.restore||(r.restore=function(e,t){let n=[],r=e.container;if(!t.disableScrollLock){let e;if(function(e){let t=(0,u.Z)(e);return t.body===e?(0,v.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(r)){let e=(0,y.Z)((0,u.Z)(r));n.push({value:r.style.paddingRight,property:"padding-right",el:r}),r.style.paddingRight=`${g(r)+e}px`;let t=(0,u.Z)(r).querySelectorAll(".mui-fixed");[].forEach.call(t,t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${g(t)+e}px`})}if(r.parentNode instanceof DocumentFragment)e=(0,u.Z)(r).body;else{let t=r.parentElement,n=(0,v.Z)(r);e=(null==t?void 0:t.nodeName)==="HTML"&&"scroll"===n.getComputedStyle(t).overflowY?t:r}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach(({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)})}}(r,t))}remove(e,t=!0){let n=this.modals.indexOf(e);if(-1===n)return n;let r=E(this.containers,t=>-1!==t.modals.indexOf(e)),o=this.containers[r];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&Z(e.modalRef,t),x(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(r,1);else{let e=o.modals[o.modals.length-1];e.modalRef&&Z(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}},O=l.forwardRef(function(e,t){var n,i;let{children:c,closeAfterTransition:f=!1,container:p,disableAutoFocus:m=!1,disableEnforceFocus:v=!1,disableEscapeKeyDown:y=!1,disablePortal:g=!1,disableRestoreFocus:x=!1,disableScrollLock:E=!1,hideBackdrop:S=!1,keepMounted:k=!1,manager:R=M,onBackdropClick:C,onClose:N,onKeyDown:T,open:O,onTransitionEnter:j,onTransitionExited:F,slotProps:z={},slots:B={}}=e,L=(0,r.Z)(e,A),[D,W]=l.useState(!O),H=l.useRef({}),K=l.useRef(null),$=l.useRef(null),U=(0,a.Z)($,t),_=!!c&&c.props.hasOwnProperty("in"),V=null==(n=e["aria-hidden"])||n,q=()=>(0,u.Z)(K.current),Y=()=>(H.current.modalRef=$.current,H.current.mountNode=K.current,H.current),G=()=>{R.mount(Y(),{disableScrollLock:E}),$.current&&($.current.scrollTop=0)},X=(0,s.Z)(()=>{let e=("function"==typeof p?p():p)||q().body;R.add(Y(),e),$.current&&G()}),J=l.useCallback(()=>R.isTopModal(Y()),[R]),Q=(0,s.Z)(e=>{K.current=e,e&&$.current&&(O&&J()?G():Z($.current,V))}),ee=l.useCallback(()=>{R.remove(Y(),V)},[R,V]);l.useEffect(()=>()=>{ee()},[ee]),l.useEffect(()=>{O?X():_&&f||ee()},[O,ee,_,f,X]);let et=(0,o.Z)({},e,{closeAfterTransition:f,disableAutoFocus:m,disableEnforceFocus:v,disableEscapeKeyDown:y,disablePortal:g,disableRestoreFocus:x,disableScrollLock:E,exited:D,hideBackdrop:S,keepMounted:k}),en=I(et),er={};void 0===c.props.tabIndex&&(er.tabIndex="-1"),_&&(er.onEnter=(0,d.Z)(()=>{W(!1),j&&j()},c.props.onEnter),er.onExited=(0,d.Z)(()=>{W(!0),F&&F(),f&&ee()},c.props.onExited));let eo=null!=(i=B.root)?i:"div",el=(0,P.Z)({elementType:eo,externalSlotProps:z.root,externalForwardedProps:L,additionalProps:{ref:U,role:"presentation",onKeyDown:e=>{T&&T(e),"Escape"===e.key&&J()&&!y&&(e.stopPropagation(),N&&N(e,"escapeKeyDown"))}},className:en.root,ownerState:et}),ei=B.backdrop,ea=(0,P.Z)({elementType:ei,externalSlotProps:z.backdrop,additionalProps:{"aria-hidden":!0,onClick:e=>{e.target===e.currentTarget&&(C&&C(e),N&&N(e,"backdropClick"))},open:O},className:en.backdrop,ownerState:et});return k||O||_&&!D?(0,h.jsx)(b,{ref:Q,container:p,disablePortal:g,children:(0,h.jsxs)(eo,(0,o.Z)({},el,{children:[!S&&ei?(0,h.jsx)(ei,(0,o.Z)({},ea)):null,(0,h.jsx)(w,{disableEnforceFocus:v,disableAutoFocus:m,disableRestoreFocus:x,isEnabled:J,open:O,children:l.cloneElement(c,er)})]}))}):null});var j=n(41589),F=n(86351),z=n(55653),B=n(38319),L=n(3505);function D(e){return(0,C.Z)("MuiBackdrop",e)}(0,R.Z)("MuiBackdrop",["root","invisible"]);let W=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],H=e=>{let{classes:t,invisible:n}=e;return(0,c.Z)({root:["root",n&&"invisible"]},D,t)},K=(0,z.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>(0,o.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),$=l.forwardRef(function(e,t){var n,l,a;let u=(0,B.Z)({props:e,name:"MuiBackdrop"}),{children:s,className:d,component:c="div",components:f={},componentsProps:p={},invisible:m=!1,open:b,slotProps:v={},slots:y={},TransitionComponent:Z=L.Z,transitionDuration:g}=u,x=(0,r.Z)(u,W),E=(0,o.Z)({},u,{component:c,invisible:m}),S=H(E),k=null!=(n=v.root)?n:p.root;return(0,h.jsx)(Z,(0,o.Z)({in:b,timeout:g},x,{children:(0,h.jsx)(K,(0,o.Z)({"aria-hidden":!0},k,{as:null!=(l=null!=(a=y.root)?a:f.Root)?l:c,className:(0,i.Z)(S.root,d,null==k?void 0:k.className),ownerState:(0,o.Z)({},E,null==k?void 0:k.ownerState),classes:S,ref:t,children:s}))}))}),U=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","open","slotProps","slots","theme"],_=(0,z.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>(0,o.Z)({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),V=(0,z.ZP)($,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),q=l.forwardRef(function(e,t){var n,a,u,s,d,c;let f=(0,B.Z)({name:"MuiModal",props:e}),{BackdropComponent:p=V,BackdropProps:m,classes:b,className:v,closeAfterTransition:y=!1,children:Z,container:g,component:x,components:E={},componentsProps:S={},disableAutoFocus:k=!1,disableEnforceFocus:w=!1,disableEscapeKeyDown:R=!1,disablePortal:C=!1,disableRestoreFocus:N=!1,disableScrollLock:P=!1,hideBackdrop:T=!1,keepMounted:A=!1,onBackdropClick:I,onClose:M,open:z,slotProps:L,slots:D,theme:W}=f,H=(0,r.Z)(f,U),[K,$]=l.useState(!0),q={container:g,closeAfterTransition:y,disableAutoFocus:k,disableEnforceFocus:w,disableEscapeKeyDown:R,disablePortal:C,disableRestoreFocus:N,disableScrollLock:P,hideBackdrop:T,keepMounted:A,onBackdropClick:I,onClose:M,open:z},Y=(0,o.Z)({},f,q,{exited:K}),G=null!=(n=null!=(a=null==D?void 0:D.root)?a:E.Root)?n:_,X=null!=(u=null!=(s=null==D?void 0:D.backdrop)?s:E.Backdrop)?u:p,J=null!=(d=null==L?void 0:L.root)?d:S.root,Q=null!=(c=null==L?void 0:L.backdrop)?c:S.backdrop;return(0,h.jsx)(O,(0,o.Z)({slots:{root:G,backdrop:X},slotProps:{root:()=>(0,o.Z)({},(0,j.Z)(J,Y),!(0,F.Z)(G)&&{as:x,theme:W},{className:(0,i.Z)(v,null==J?void 0:J.className,null==b?void 0:b.root,!Y.open&&Y.exited&&(null==b?void 0:b.hidden))}),backdrop:()=>(0,o.Z)({},m,(0,j.Z)(Q,Y),{className:(0,i.Z)(null==Q?void 0:Q.className,null==m?void 0:m.className,null==b?void 0:b.backdrop)})},onTransitionEnter:()=>$(!1),onTransitionExited:()=>$(!0),ref:t},H,q,{children:Z}))});var Y=q},74130:function(e,t,n){n.d(t,{Z:function(){return r}});function r(e){let t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}},47936:function(e,t){Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},64372:function(e,t,n){n(47936)}}]);