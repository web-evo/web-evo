(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{20774:function(t,e,i){Promise.resolve().then(i.bind(i,15512))},50954:function(t,e,i){"use strict";i.d(e,{r:function(){return n}});class n{}n.undrawProudCoder=i(70392),n.undrawTeamCollaboration=i(63232),n.undrawUnderConstruction=i(40451),n.undrawBlogPost=i(20167),n.undrawReact=i(21096),n.undrawNextJs=i(36036),n.undrawNuxtJs=i(24366),n.undrawEmpty=i(74862),n.undrawDeveloperActivity=i(84175),n.undrawContactUs=i(60334),n.undrawPageNotFound=i(39708),n.undrawEngineeringTeam=i(35138),n.undrawSolutionMindset=i(41990),n.undrawServices=i(93237),n.undrawDesigner=i(60145),n.undrawSoftwareEngineer=i(71653),n.undrawQaEngineers=i(38582),n.undrawDevProductivity=i(64982),n.undrawMaintenance=i(9928),n.undrawAnalytics=i(78935),n.undrawDesignComponents=i(84588),n.materialDesign=i(7421),n.fluentDesign=i(52643),n.antDesign=i(52333),n.arcoDesign=i(87244),n.semiDesign=i(10525),n.angularLogo=i(17752),n.vueLogo=i(40336),n.reactLogo="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",n.nestjsLogo=i(7072),n.nuxtJsLogo=i(40322),n.nextJsLogo=i(67658)},15512:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return B}});var n=i(31578),r=i(30922),s=i(87377),a=i(10710),A=i(59411),c=i(83909),u=i(88840),d=i(17444),l=i(50954),o=i(20931),g=i.n(o),h=i(43045),m=i(58119),x=i.n(m),b=i(84794),f=i(45083);class w{static toParams(t){let e="";for(let i in t)t.hasOwnProperty(i)&&(e+="".concat(i,"=").concat(t[i],"&"));return e.substring(0,e.length-1)}static toFormData(t){let e=new FormData;for(let i in t)t.hasOwnProperty(i)&&e.append(i,t[i]);return e}}class _{request(t,e,i,n){let r={...this.config,url:t,method:e,data:i,headers:n},s=f.Z.create();return s.interceptors.response.use(this.responseInterceptor,this.errorInterceptor),s.request(r)}get(t,e){return this.request("".concat(t,"?").concat(w.toParams(e)),"get")}post(t,e,i){return this.request(t,"post",e,i)}responseInterceptor(t){switch(t.status){case 200:case 201:return t.data;default:return console.log(t),Promise.reject(t)}}errorInterceptor(t){let e={message:"服务器错误",...t.response.data};return Promise.reject(e)}constructor(t){this.config={},this.config.baseURL="https://web-evo-server.bulv.life/",t&&(this.config.baseURL=t)}}var v=i(41469),p=i.n(v);function j(t){let e="WebEvolution";return(0,n.jsxs)(p(),{children:[(0,n.jsx)("title",{children:t.title||e}),(0,n.jsx)("meta",{name:"description",content:t.description||e+" 是一个帮助web开发者成长的社区。我们以技术文章为核心的产品形态，为开发者提供纯粹、高质的技术文章。"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1, width=device-width, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"}),(0,n.jsx)("meta",{name:"baidu-site-verification",content:"code-yx2HQhygQo"}),(0,n.jsx)("meta",{name:"msvalidate.01",content:"AB78A0C987D3AEA34B969889512FF33E"}),(0,n.jsx)("meta",{name:"google-site-verification",content:"4rS5gjy4-tFOdJO4HvDg0_E4QNcB1D1YeZo29iS4hIY"}),(0,n.jsx)("meta",{name:"baidu_union_verify",content:"50312ad0c63983b3fe6c2e2a6e10c386"})]})}function B(){let{enqueueSnackbar:t}=(0,h.Ds)(),[e,i]=(0,r.useState)({name:"",contact:"",email:"",mobilePhone:"",message:""}),[o,m]=(0,r.useState)({name:!1,contact:!1,message:!1}),f=(0,r.useMemo)(()=>{let t=o.name||o.contact||o.message,i=Object.values(e).some(t=>""!==t);return t||!i},[e,o]);return(0,n.jsxs)(s.Z,{maxWidth:"lg",children:[(0,n.jsx)(j,{title:"联系 - WebEvolution"}),(0,n.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[(0,n.jsx)(a.Z,{sx:{margin:"20px 0"},children:(0,n.jsx)(g(),{alt:"contact us",src:l.r.undrawContactUs,style:{width:"100%",height:"auto"}})}),(0,n.jsx)(A.Z,{variant:"h1",sx:{margin:"20px 0"},fontSize:{xs:"38px",sm:"68px"},color:"#00B0FF",children:"我们能帮你什么吗？"}),(0,n.jsx)(A.Z,{variant:"body1",sx:{marginBottom:"50px"},children:"联系我们，了解 WebEvolution 如何帮助您实现雄心勃勃的软件需求！如对我们的任何计划或服务有任何疑问，请随时与我们联系。 我们将在 24 小时内回复您！"}),(0,n.jsx)(a.Z,{sx:{margin:"20px 0"},children:(0,n.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,n.jsx)(c.ZP,{item:!0,xs:12,sm:4,children:(0,n.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(A.Z,{variant:"h3",fontSize:{sm:"42px"},color:"#00B0FF",children:"让我们谈谈"}),(0,n.jsxs)(a.Z,{sx:{padding:"16px",textAlign:"center",mb:"48px"},children:[(0,n.jsx)(A.Z,{variant:"h6",children:"联系电子邮件:"}),(0,n.jsx)("a",{href:"mailto:dongjun1997@outllook.com?subject=你好!",children:(0,n.jsx)(A.Z,{variant:"body1",children:"dongjun1997@outlook.com"})})]}),(0,n.jsxs)(a.Z,{sx:{padding:"16px",textAlign:"center"},children:[(0,n.jsx)(A.Z,{variant:"h6",children:"联系电话:"}),(0,n.jsx)("a",{href:"tel:+86 18691791512",children:(0,n.jsx)(A.Z,{variant:"body1",children:"+86 186 9179 1512"})})]})]})}),(0,n.jsx)(c.ZP,{item:!0,sx:{display:{xs:"none",sm:"block"}},sm:2}),(0,n.jsx)(c.ZP,{item:!0,xs:12,sm:6,children:(0,n.jsxs)(a.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsx)(A.Z,{variant:"h3",fontSize:{sm:"42px"},color:"#00B0FF",sx:{marginBottom:"10px",textAlign:"center"},children:"我们很乐意听取您的想法！"}),(0,n.jsx)(A.Z,{variant:"body1",sx:{marginBottom:"40px"},children:"不确定您需要什么？ 让我们集思广益，我们可以如何提供帮助！"}),(0,n.jsx)(a.Z,{component:"form",onSubmit:n=>{n.preventDefault(),console.log(e);let r={...e};Object.keys(r).forEach(t=>""===r[t]&&delete r[t]),new _("https://web-evo-server.bulv.life/").post("/customer",r).then(()=>{t("提交成功",{variant:"success"}),i({name:"",contact:"",email:"",mobilePhone:"",message:""})}).catch(e=>t(e.message,{variant:"error"}))},children:(0,n.jsxs)(c.ZP,{container:!0,gap:2,children:[(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(u.Z,{label:"您的名字",fullWidth:!0,required:!0,error:o.name,helperText:o.name?"名字是必须的":"",onBlur:()=>m({...o,name:""===e.name}),onChange:t=>{let{target:{value:n}}=t;return i({...e,name:n})}})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(u.Z,{label:"您的邮件或手机号",fullWidth:!0,required:!0,error:o.contact,helperText:o.contact?"邮箱或手机号码格式不正确":"",onBlur:()=>{if(""===e.email&&""===e.mobilePhone)return m({...o,contact:!0});if(""!==e.contact){m({...o,contact:!0}),i({...e,email:"",mobilePhone:""});return}m({...o,contact:!1})},onChange:t=>{let{target:{value:n}}=t;return x()(n)?i({...e,email:n,contact:""}):(0,b.ZP)(n,"zh-CN")?i({...e,mobilePhone:n,contact:""}):void i({...e,contact:n})}})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(u.Z,{label:"您的需求信息",fullWidth:!0,required:!0,multiline:!0,rows:4,error:o.message,helperText:o.message?"需求信息是必须的":"",onBlur:()=>m({...o,message:""===e.message}),onChange:t=>{let{target:{value:n}}=t;return i({...e,message:n})}})}),(0,n.jsx)(c.ZP,{item:!0,xs:12,children:(0,n.jsx)(a.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,n.jsx)(d.Z,{variant:"contained",sx:{width:"150px"},type:"submit",disabled:f,children:(0,n.jsx)(A.Z,{variant:"h6",color:"white",children:"提交"})})})})]})})]})})]})})]})]})}},87244:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/arco-design.cd8b55e3.png",height:410,width:601,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAASFBMVEXX4v01YtzG2PHD1fzp6e7g6/vv9P33+PxAQ03Q4Pjm9uzZ2eAuXN2NoeRaV2HMz9pOdeA4Rnq63/h4r+BBqOjt9u9MWIhXdNglzl5DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nAXBhwHAIAzAMDOTUKCD0f8/RSJGyUDmur0x5oeIN1klkaz9bneF8Lj6qh4blgFevtsILgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},52643:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/fluent-design.d32d1147.jpg",height:720,width:1440,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAACAQIHAAAAAAAAAAAAAAABAwACEgQFBhEhIkH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AKGl2sz9FIx1ZsCt7FdKeSPBERGEf//Z",blurWidth:8,blurHeight:4}},7421:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/material-design.289ad101.png",height:720,width:1266,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAY1BMVEWN89fQ21D/2wD/wgD/0BGYjZYK6bB30uL79/3XyVBbcJGugmTA3dVgvtCu3ebWcjRKrLP17Dx+gLFzv7GeTX0eYqbzxDu2uMKDaoBhR7CyzGh4lLaZibR7RncXOLN/p6fqukiti/VBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nGNg5+MRZGFhYmZg5xWQUuBk5GTg5hKVZhXn4GDgl5UTkpBnYGAQE5GUYRVmYwMALWUCOBJJweIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},67658:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/next.js.3f9181a3.png",height:180,width:180,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEUDAwMAAAABAQFCQkIFBQVMaXECAgJgYGBOTk4SEhIAAACJiYktLS2lpaV3d3esXZUdAAAACnRSTlMt667+9wCz+fnqwgLqHAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwlyjkCgCAQALHZA9AB/f9zLUwdBrN7MiBUA9JVlkm7n1MG7Vu7DdLLWuafzw2DjEjGBzO5AWkyw9LrAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},10525:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/semi-design.f1faf5ad.png",height:1364,width:2084,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAHlBMVEX8+/v9/Pz8/Pz4+Pn8/P34+fn4+Pjz8fHq8vv////dE4F/AAAACXRSTlPS/KyFuMb5rffe09AhAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKElEQVR4nEXIMQIAIAgDsYMWtP//sKMZgxgA0amk0pxs7U3/0dj26AEOKACwwmzLpwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},40336:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/vue.4cf53b88.png",height:400,width:400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEU1d2ZDwolDw4dBvYVBs4JDvoZAt4Q8gnVBvYY6ZWs0Q1o8mHc2RV82Rl9Gx41Cr4I/n3xrAZ57AAAADnRSTlMBrctpL/dPF43+eXqW+Y50XZ8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVHicJcbHAcAgDMBAUW1TDPtPSwIfnUi9ibSeULcxzBXinnNHoLqZV4CwVvgll5LvoPpE5OsBQA4BXdNmHvUAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},17752:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/angular.d848aaec.svg",height:200,width:184,blurWidth:0,blurHeight:0}},52333:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/ant-design.e83191e4.svg",height:480,width:750,blurWidth:0,blurHeight:0}},7072:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/nest.js.76342a08.svg",height:966,width:1e3,blurWidth:0,blurHeight:0}},40322:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/nuxt.js.8259cac5.svg",height:124,width:124,blurWidth:0,blurHeight:0}},78935:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_analytics_re_dkf8.50fa4f36.svg",height:690,width:762,blurWidth:0,blurHeight:0}},20167:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_blog_post_re_fy5x.3cda16ea.svg",height:594,width:631,blurWidth:0,blurHeight:0}},60334:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_contact_us_re_4qqt.4595ae9e.svg",height:448,width:894,blurWidth:0,blurHeight:0}},84588:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_design_components_9vy6.c001a2e5.svg",height:489,width:980,blurWidth:0,blurHeight:0}},60145:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_designer_re_5v95.65929b98.svg",height:782,width:804,blurWidth:0,blurHeight:0}},64982:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_dev_productivity_re_fylf.cc791672.svg",height:797,width:931,blurWidth:0,blurHeight:0}},84175:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_developer_activity_re_39tg.6e5e4455.svg",height:741,width:851,blurWidth:0,blurHeight:0}},74862:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_empty_re_opql.c91519ba.svg",height:645,width:863,blurWidth:0,blurHeight:0}},35138:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_engineering_team_a7n2.c981b1c3.svg",height:443,width:867,blurWidth:0,blurHeight:0}},9928:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_maintenance_re_59vn.d6d0d183.svg",height:583,width:945,blurWidth:0,blurHeight:0}},36036:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_next_js_-8-g5m.7d2e18ea.svg",height:442,width:888,blurWidth:0,blurHeight:0}},24366:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_nuxt_js_0fq9.fe528a07.svg",height:584,width:1049,blurWidth:0,blurHeight:0}},39708:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_page_not_found_re_e9o6.4bd2f713.svg",height:571,width:860,blurWidth:0,blurHeight:0}},70392:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_proud_coder_re_exuy.979c0549.svg",height:454,width:718,blurWidth:0,blurHeight:0}},38582:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_qa_engineers_dg-5-p.2a5b3be6.svg",height:780,width:1072,blurWidth:0,blurHeight:0}},21096:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_react_y-7-wq.1ac05cd7.svg",height:731,width:1108,blurWidth:0,blurHeight:0}},93237:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_services_re_hu5n.de083392.svg",height:538,width:776,blurWidth:0,blurHeight:0}},71653:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_software_engineer_re_tnjc.c251f4ed.svg",height:507,width:803,blurWidth:0,blurHeight:0}},41990:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_solution_mindset_re_57bf.1d3b96b8.svg",height:368,width:553,blurWidth:0,blurHeight:0}},63232:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_team_collaboration_re_ow29.5c81ef87.svg",height:505,width:936,blurWidth:0,blurHeight:0}},40451:function(t,e,i){"use strict";i.r(e),e.default={src:"/_next/static/media/undraw_under_construction_-46-pa.78f7b58c.svg",height:724,width:1178,blurWidth:0,blurHeight:0}}},function(t){t.O(0,[668,372,210,674,423,334,744],function(){return t(t.s=20774)}),_N_E=t.O()}]);