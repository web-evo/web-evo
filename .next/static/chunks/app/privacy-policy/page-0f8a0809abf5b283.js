(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3310],{93664:function(e,t,i){"use strict";i.d(t,{Z:function(){return j}});var r=i(4210),n=i(18450),l=i(34676),s=i(35209),a=i(78136),o=i(66602),c=i(14409),d=i(26063),h=i(87812);let x=["className","component"];var u=i(45078),p=i(33861),m=i(5460);let g=(0,p.Z)(),f=function(e={}){let{themeId:t,defaultTheme:i,defaultClassName:u="MuiBox-root",generateClassName:p}=e,m=(0,a.ZP)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(o.Z),g=l.forwardRef(function(e,l){let a=(0,d.Z)(i),o=(0,c.Z)(e),{className:g,component:f="div"}=o,j=(0,n.Z)(o,x);return(0,h.jsx)(m,(0,r.Z)({as:f,ref:l,className:(0,s.Z)(g,p?p(u):u),theme:t&&a[t]||a},j))});return g}({themeId:m.Z,defaultTheme:g,defaultClassName:"MuiBox-root",generateClassName:u.Z.generate});var j=f},78420:function(e,t,i){"use strict";i.d(t,{Z:function(){return N}});var r=i(18450),n=i(4210),l=i(34676),s=i(35209),a=i(85675),o=i(87080),c=i(39718),d=i(98421),h=i(86226);let x=(0,h.ZP)();var u=i(9095),p=i(87812);let m=["className","component","disableGutters","fixed","maxWidth","classes"],g=(0,u.Z)(),f=x("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,a.Z)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),j=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:g}),v=(e,t)=>{let{classes:i,fixed:r,disableGutters:n,maxWidth:l}=e,s={root:["root",l&&`maxWidth${(0,a.Z)(String(l))}`,r&&"fixed",n&&"disableGutters"]};return(0,c.Z)(s,e=>(0,o.Z)(t,e),i)};var Z=i(20709),b=i(55653),y=i(38319);let _=function(e={}){let{createStyledComponent:t=f,useThemeProps:i=j,componentName:a="MuiContainer"}=e,o=t(({theme:e,ownerState:t})=>(0,n.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,i)=>{let r=e.breakpoints.values[i];return 0!==r&&(t[e.breakpoints.up(i)]={maxWidth:`${r}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,n.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),c=l.forwardRef(function(e,t){let l=i(e),{className:c,component:d="div",disableGutters:h=!1,fixed:x=!1,maxWidth:u="lg"}=l,g=(0,r.Z)(l,m),f=(0,n.Z)({},l,{component:d,disableGutters:h,fixed:x,maxWidth:u}),j=v(f,a);return(0,p.jsx)(o,(0,n.Z)({as:d,ownerState:f,className:(0,s.Z)(j.root,c),ref:t},g))});return c}({createStyledComponent:(0,b.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,Z.Z)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,y.Z)({props:e,name:"MuiContainer"})});var N=_},21673:function(e,t,i){"use strict";i.d(t,{Z:function(){return _}});var r=i(18450),n=i(4210),l=i(34676),s=i(35209),a=i(14409),o=i(39718),c=i(55653),d=i(38319),h=i(20709),x=i(18092),u=i(87080);function p(e){return(0,u.Z)("MuiTypography",e)}(0,x.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=i(87812);let g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=e=>{let{align:t,gutterBottom:i,noWrap:r,paragraph:n,variant:l,classes:s}=e,a={root:["root",l,"inherit"!==e.align&&`align${(0,h.Z)(t)}`,i&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,o.Z)(a,p,s)},j=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.variant&&t[i.variant],"inherit"!==i.align&&t[`align${(0,h.Z)(i.align)}`],i.noWrap&&t.noWrap,i.gutterBottom&&t.gutterBottom,i.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=e=>Z[e]||e,y=l.forwardRef(function(e,t){let i=(0,d.Z)({props:e,name:"MuiTypography"}),l=b(i.color),o=(0,a.Z)((0,n.Z)({},i,{color:l})),{align:c="inherit",className:h,component:x,gutterBottom:u=!1,noWrap:p=!1,paragraph:Z=!1,variant:y="body1",variantMapping:_=v}=o,N=(0,r.Z)(o,g),k=(0,n.Z)({},o,{align:c,color:l,className:h,component:x,gutterBottom:u,noWrap:p,paragraph:Z,variant:y,variantMapping:_}),C=x||(Z?"p":_[y]||v[y])||"span",W=f(k);return(0,m.jsx)(j,(0,n.Z)({as:C,ref:t,ownerState:k,className:(0,s.Z)(W.root,h)},N))});var _=y},14409:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var r=i(4210),n=i(18450),l=i(11555),s=i(69587);let a=["sx"],o=e=>{var t,i;let r={systemProps:{},otherProps:{}},n=null!=(t=null==e?void 0:null==(i=e.theme)?void 0:i.unstable_sxConfig)?t:s.Z;return Object.keys(e).forEach(t=>{n[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]}),r};function c(e){let t;let{sx:i}=e,s=(0,n.Z)(e,a),{systemProps:c,otherProps:d}=o(s);return t=Array.isArray(i)?[c,...i]:"function"==typeof i?(...e)=>{let t=i(...e);return(0,l.P)(t)?(0,r.Z)({},c,t):c}:(0,r.Z)({},c,i),(0,r.Z)({},d,{sx:t})}},18092:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var r=i(87080);function n(e,t,i="Mui"){let n={};return t.forEach(t=>{n[t]=(0,r.Z)(e,t,i)}),n}},8843:function(e,t,i){Promise.resolve().then(i.bind(i,96567))},66027:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return l}});let r=i(51801),n=r._(i(34676)),l=n.default.createContext(null)},74502:function(e,t,i){"use strict";var r=i(87812);i(34676);var n=i(93664),l=i(21673);t.Z=e=>{let{children:t,title:i="Title",desc:s="Description",backgroundColor:a="transparent",first:o=!1}=e;return(0,r.jsx)("section",{children:(0,r.jsxs)(n.Z,{sx:{paddingTop:"64px",paddingBottom:"20px",backgroundColor:a},children:[(0,r.jsx)(l.Z,{variant:o?"h1":"h2",fontSize:32,sx:{marginBottom:"48px"},children:i}),(0,r.jsx)(l.Z,{variant:"body1",sx:{mb:"56px"},children:s}),null!=t?t:""]})})}},96567:function(e,t,i){"use strict";i.r(t),i.d(t,{PrivacyPolicy:function(){return o}});var r=i(87812);i(34676);var n=i(78420),l=i(74502),s=i(61893),a=i.n(s);let o=()=>{let e="https://web-evo.bulv.life/",t="Web Evo Studio",i=[{title:"隐私政策",desc:(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("span",{children:[t,".（“我们”，“我们”或“我们的”）操作 "]}),(0,r.jsx)(a(),{href:e,children:e}),(0,r.jsx)("span",{children:"网站（此处称为“站点”）。"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"此页面在您使用我们的服务以及与该数据相关联的选择时，将向您告知我们有关收集，使用和披露个人数据的政策。 我们使用您的数据来提供和改进网站。 使用本网站，您同意根据本政策收集和使用信息。 除非本隐私政策中另有定义，否则本隐私政策中使用的术语与我们条款和条件中的含义相同，可以从 "}),(0,r.jsx)(a(),{href:e,children:e}),(0,r.jsx)("span",{children:"中访问。"})]})]})},{title:"Definitions",desc:(0,r.jsxs)("ul",{className:"list-disc leading-normal text-grey_font_col ml-8",children:[(0,r.jsxs)("li",{children:["网站: 此",(0,r.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",className:"link",children:e}),"网站由 ",t," 运营."]}),(0,r.jsx)("li",{children:"个人数据：是指可以从该数据（或从我们拥有或可能拥有的那些信息和其他信息）中识别出的有关在世个人的数据。"}),(0,r.jsx)("li",{children:"使用数据：是通过使用网站或从网站基础设施生成的自动收集的数据（例如，页面访问的持续时间）。"}),(0,r.jsx)("li",{children:"Cookie：是存储在您的设备（计算机或移动设备）上的小文件。"}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{children:"数据控制者：指（单独或共同或与其他人共同）确定处理或将处理任何个人信息的目的和方式的自然人或法人。"}),(0,r.jsx)("ul",{className:"pl-3",style:{listStyleType:"circle"},children:(0,r.jsx)("li",{children:"就本隐私政策而言，我们是您个人数据的数据控制者。"})})]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("span",{children:"数据处理者（或服务提供商）是指代表数据控制者处理数据的任何自然人或法人。"}),(0,r.jsx)("ul",{className:"pl-3",style:{listStyleType:"circle"},children:(0,r.jsx)("li",{children:"我们可能会使用各个服务提供商的服务，以便更有效地处理您的数据。"})})]}),(0,r.jsx)("li",{children:"数据主体：是使用我们网站的任何在世个人，并且是个人数据的主体。"})]})},{title:"信息收集和使用",desc:(0,r.jsx)("p",{className:"leading-normal text-grey_font_col",children:"我们出于各种目的收集多种不同类型的信息，以便为您提供和改进我们的网站。"}),children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-light_title_col md:text-46 text-38 leading-44 font-bold",children:"收集的数据类型"}),(0,r.jsxs)("div",{className:"flex flex-col pb-4",children:[(0,r.jsx)("span",{className:"text-light_title_col underline md:text-46 text-36 leading-10",children:"个人资料"}),(0,r.jsx)("p",{className:"text-light_title_col mb-2",children:"在使用我们的网站时，我们可能会要求您向我们提供某些用于联系或识别您的个人身份信息（“个人数据”）。 个人身份信息可能包括但不限于："}),(0,r.jsxs)("ul",{className:"list-disc leading-normal text-grey_font_col ml-8",children:[(0,r.jsx)("li",{children:"电子邮件地址"}),(0,r.jsx)("li",{children:"名字和姓氏"}),(0,r.jsx)("li",{children:"Cookie 和使用数据"})]}),(0,r.jsx)("p",{className:"text-light_title_col",children:"我们可能会使用您的个人数据与您联系，提供时事通讯、营销或促销材料以及其他可能为您服务的信息。 您可以按照我们发送的任何电子邮件中的取消订阅链接或说明选择不接收任何或所有这些通信。"})]}),(0,r.jsxs)("div",{className:"flex flex-col pb-4",children:[(0,r.jsx)("span",{className:"text-light_title_col underline md:text-46 text-36 leading-10",children:"使用数据"}),(0,r.jsx)("p",{className:"text-light_title_col",children:"我们还可能收集有关如何访问和使用网站的信息（“使用数据”）。 该使用数据可能包括您计算机的互联网协议地址（例如 IP 地址）、浏览器类型、浏览器版本、您访问的我们网站的页面、您访问的时间和日期、在这些页面上花费的时间等信息， 唯一的设备标识符和其他诊断数据。"})]}),(0,r.jsxs)("div",{className:"flex flex-col",children:[(0,r.jsx)("span",{className:"text-light_title_col underline md:text-46 text-36 leading-10",children:"追踪& Cookie 数据"}),(0,r.jsxs)("p",{className:"text-light_title_col pb-4",children:["我们使用 cookie 和类似的跟踪技术来跟踪我们网站上的活动并保存某些信息。",(0,r.jsx)("br",{}),"Cookie 是包含少量数据的文件，其中可能包含唯一的匿名标识符。 Cookie 从网站发送到您的浏览器并存储在您的设备上。 还使用其他跟踪技术，例如用于收集和跟踪信息以及改进和分析我们的网站的信标、标签和脚本。"]}),(0,r.jsx)("p",{className:"text-light_title_col",children:"您可以指示您的浏览器拒绝所有 cookie 或指示何时发送 cookie。 但是，如果您不接受 cookie，您可能无法使用我们网站的某些部分。 我们使用的 Cookie 示例："}),(0,r.jsxs)("ul",{className:"list-disc leading-normal text-grey_font_col ml-8",children:[(0,r.jsx)("li",{children:"会话 Cookie。 我们使用会话 Cookie 来运营我们的网站。"}),(0,r.jsx)("li",{children:"偏好 Cookie。 我们使用偏好 Cookie 来记住您的偏好和各种设置。"}),(0,r.jsx)("li",{children:"安全 Cookie。 我们出于安全目的使用安全 Cookie。"})]})]})]})},{title:"数据的使用",desc:"{siteName}. 将收集的数据用于各种目的：",children:(0,r.jsxs)("ul",{className:"list-disc leading-normal text-grey_font_col ml-8",children:[(0,r.jsx)("li",{children:"提供和维护我们的网站"}),(0,r.jsx)("li",{children:"当您选择时，允许您参与我们网站的互动功能"}),(0,r.jsx)("li",{children:"提供客户支持"}),(0,r.jsx)("li",{children:"收集分析或有价值的信息，以便我们改进我们的网站"}),(0,r.jsx)("li",{children:"监控我们网站的使用情况"}),(0,r.jsx)("li",{children:"检测、预防和解决技术问题"}),(0,r.jsx)("li",{children:"提供已批准交易的发票或收据"}),(0,r.jsx)("li",{children:"向您提供与您已购买或询问的产品、服务和活动类似的我们提供的其他商品、服务和活动的新闻、特别优惠和一般信息，除非您选择不接收此类信息"})]})},{title:"《通用数据保护条例》(GDPR) 下处理个人数据的法律依据",desc:"如果您来自欧洲经济区 (EEA)，{siteName}. 收集和使用本隐私政策中所述个人信息的法律依据取决于我们收集的个人数据以及我们收集这些数据的具体背景。 {siteName}. 可能会处理您的个人数据，因为：",children:(0,r.jsxs)("ul",{className:"list-disc leading-normal text-grey_font_col ml-8",children:[(0,r.jsx)("li",{children:"我们需要与您履行合同"}),(0,r.jsx)("li",{children:"您已允许我们这样做"}),(0,r.jsx)("li",{children:"处理符合我们的合法利益，并且不会被您的权利所取代"}),(0,r.jsx)("li",{children:"用于付款处理目的"}),(0,r.jsx)("li",{children:"遵守法律"})]})},{title:"数据保留",desc:"{siteName}. 将仅在本隐私政策中规定的目的所需的时间内保留您的个人数据。 我们将在必要的范围内保留和使用您的个人数据，以遵守我们的法律义务（例如，如果我们需要保留您的数据以遵守适用的法律）、解决争议并执行我们的法律协议和政策。 {siteName}. 还将保留使用数据用于内部分析目的。 使用数据的保留时间较短，除非该数据用于加强安全性或改进我们网站的功能，或者我们有法律义务保留更长时间的数据。"},{title:"数据传输",desc:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"您的信息（包括个人数据）可能会传输到并保存在位于您所在州、省、国家或其他政府管辖区之外的计算机上，这些地方的数据保护法可能与您所在管辖区的数据保护法不同。"}),(0,r.jsxs)("p",{children:[t,". 将采取一切合理必要的步骤，确保您的数据得到安全处理并符合本隐私政策，并且除非有足够的控制措施，否则不会将您的个人数据传输到任何组织或国家/地区 包括您的数据和其他个人信息的安全。"]})]})}];return(0,r.jsx)(n.Z,{maxWidth:"lg",children:i.map((e,t)=>{let{title:i,desc:n,children:s}=e;return(0,r.jsx)(l.Z,{first:0===t,title:i,desc:n,children:s},t)})})}}},function(e){e.O(0,[7941,1893,3342,1937,1744],function(){return e(e.s=8843)}),_N_E=e.O()}]);