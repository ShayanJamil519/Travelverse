(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,a){},280:function(e,t,a){e.exports=a(561)},372:function(e,t,a){},546:function(e,t,a){},547:function(e,t,a){},557:function(e,t,a){},561:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(4),c=a.n(l),o=(a(146),a(63)),i=a(179),s=a.n(i),u=a(248),m=a(25),d=a.n(m),p="login_user",f="register_user",E="auth_user",h="logout_user",g="add_to_cart_user",y="get_cart_items_user",b="remove_cart_item_user",v="on_success_buy_user",w="/api/users";var O=a(29),j=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(l){var c=Object(O.c)(function(e){return e.user}),o=Object(O.b)();return Object(r.useEffect)(function(){o(function(){var e=d.a.get("".concat(w,"/auth")).then(function(e){return e.data});return{type:E,payload:e}}()).then(function(){var e=Object(u.a)(s.a.mark(function e(r){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,!r.payload.isAuth;case 2:if(!e.sent){e.next=6;break}t&&l.history.push("/login"),e.next=7;break;case 6:a&&!r.payload.isAdmin?l.history.push("/"):!1===t&&l.history.push("/");case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())},[o,l.history,c.googleAuth]),n.a.createElement(e,Object.assign({},l,{user:c}))}},x=a(89),S=a(53),k=a(14),N=a(563),P=a(43),D=a(13),I=a(91),_=a(562);var C=function(e){return n.a.createElement("div",null,n.a.createElement(_.a,{autoplay:!0},e.images.map(function(e,t){return n.a.createElement("div",{key:t},n.a.createElement("img",{style:{width:"100%",maxHeight:"150px"},src:"http://localhost:5000/".concat(e),alt:"productImage"}))})))},T=a(566),A=a(572),F=(a(80),T.a.Panel);var B=function(e){var t=Object(r.useState)([]),a=Object(k.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",null,n.a.createElement(T.a,{defaultActiveKey:["0"]},n.a.createElement(F,{header:"Continents",key:"1"}," ",e.list&&e.list.map(function(t,a){return n.a.createElement(n.a.Fragment,{key:a},n.a.createElement(A.a,{onChange:function(){return function(t){var a=l.indexOf(t),r=Object(S.a)(l);-1===a?r.push(t):r.splice(a,1),c(r),e.handleFilters(r)}(t._id)},type:"checkbox",checked:-1!==l.indexOf(t._id)}),n.a.createElement("span",null," ",t.name," "),"\xa0\xa0")}))))},q=a(570),z=T.a.Panel;var M=function(e){var t=Object(r.useState)("0"),a=Object(k.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",null,n.a.createElement(T.a,{defaultActiveKey:["0"]},n.a.createElement(z,{header:"price",key:"1"},n.a.createElement(q.a.Group,{onChange:function(t){c(t.target.value),e.handleFilters(t.target.value)},value:l},e.list&&e.list.map(function(e){return n.a.createElement(q.a,{key:e._id,value:"".concat(e._id)},e.name)})))))},R=[{_id:0,name:"Any",array:[]},{_id:1,name:"$0 to $199",array:[0,199]},{_id:2,name:"$200 to $249",array:[200,249]},{_id:3,name:"$250 to $279",array:[250,279]},{_id:4,name:"$280 to $299",array:[280,299]},{_id:5,name:"More than $300",array:[300,15e5]}],L=[{_id:1,name:"Africa"},{_id:2,name:"Europe"},{_id:3,name:"Asia"},{_id:4,name:"North America"},{_id:5,name:"South America"},{_id:6,name:"Australia"},{_id:7,name:"Antarctica"}],$=a(568),W=$.a.Search;var U=function(e){var t=Object(r.useState)(""),a=Object(k.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",null,n.a.createElement(W,{value:l,onChange:function(t){c(t.currentTarget.value),e.refreshFunction(t.currentTarget.value)},placeholder:"Search By Typing..."}))};a(372);function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var G=N.a.Meta;var X=function(){var e=Object(r.useState)([]),t=Object(k.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(0),o=Object(k.a)(c,2),i=o[0],s=o[1],u=Object(r.useState)(8),m=Object(k.a)(u,2),p=m[0],f=(m[1],Object(r.useState)()),E=Object(k.a)(f,2),h=E[0],g=E[1],y=Object(r.useState)(""),b=Object(k.a)(y,2),v=b[0],w=b[1],O=Object(r.useState)({continents:[],price:[]}),j=Object(k.a)(O,2),_=j[0],T=j[1];Object(r.useEffect)(function(){A({skip:i,limit:p})},[]);var A=function(e){d.a.post("/api/product/getProducts",e).then(function(t){t.data.success?(e.loadMore?l([].concat(Object(S.a)(a),Object(S.a)(t.data.products))):l(t.data.products),g(t.data.postSize)):alert("Failed to fectch product datas")})},F=a.map(function(e,t){return n.a.createElement(P.a,{lg:6,md:8,xs:24},n.a.createElement(N.a,{hoverable:!0,cover:n.a.createElement("a",{href:"/product/".concat(e._id)}," ",n.a.createElement(C,{images:e.images}))},n.a.createElement(G,{title:e.title,description:"$".concat(e.price)}),n.a.createElement("div",{style:{fontSize:"14px",fontFamily:"cursive"}},"".concat(e.description))))}),q=function(e,t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},_);if(a[t]=e,"price"===t){var r=function(e){var t=R,a=[];for(var r in t)t[r]._id===parseInt(e,10)&&(a=t[r].array);return console.log("array",a),a}(e);a[t]=r}console.log(a),function(e){A({skip:0,limit:p,filters:e}),s(0)}(a),T(a)};return n.a.createElement("div",null,n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"overlay"}),n.a.createElement("video",{src:"/frontbg2.mp4",autoPlay:!0,loop:!0,muted:!0}),n.a.createElement("div",{className:"content"},n.a.createElement("h1",{className:""},"Book the Best trip of your Life"),n.a.createElement("p",{className:""},"Our easy to use and well maintained application is going to provide you  a Package  easily the best in the market. You are one step away from your dream destination."))),n.a.createElement("div",{style:{width:"75%",margin:"3rem auto",fontSize:"1.5rem"}},n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("h2",{style:{color:"#32605e"},className:"resp1"},"  Let's Travel Anywhere  ",n.a.createElement(D.a,{type:"rocket"}),"  ")),n.a.createElement(I.a,{gutter:[16,16]},n.a.createElement(P.a,{lg:12,xs:24},n.a.createElement(B,{list:L,handleFilters:function(e){return q(e,"continents")}})),n.a.createElement(P.a,{lg:12,xs:24},n.a.createElement(M,{list:R,handleFilters:function(e){return q(e,"price")}}))),n.a.createElement("div",{className:"resp2",style:{display:"flex",justifyContent:"flex-end",margin:"1rem auto"}},n.a.createElement(U,{refreshFunction:function(e){var t={skip:0,limit:p,filters:_,searchTerm:e};s(0),w(e),A(t)}})),0===a.length?n.a.createElement("div",{style:{display:"flex",height:"300px",justifyContent:"center",alignItems:"center"}},n.a.createElement("h2",null,"No post yet...")):n.a.createElement("div",null,n.a.createElement(I.a,{gutter:[16,16]},F)),n.a.createElement("br",null),n.a.createElement("br",null),h>=p&&n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("button",{onClick:function(){var e=i+p;A({skip:e,limit:p,loadMore:!0,filters:_,searchTerm:v}),s(e)}},"Load More"))))},V=a(140),Q=a(38),J=a(565),K=a(564),Y=a(186),Z=J.a.Title;var ee=Object(o.f)(function(e){var t=Object(O.b)(),a=!!localStorage.getItem("rememberMe"),l=Object(r.useState)(""),c=Object(k.a)(l,2),o=c[0],i=c[1],s=Object(r.useState)(a),u=Object(k.a)(s,2),m=u[0],f=u[1],E=function(){f(!m)},h=localStorage.getItem("rememberMe")?localStorage.getItem("rememberMe"):"";return n.a.createElement(V.a,{initialValues:{email:h,password:""},validationSchema:Q.object().shape({email:Q.string().email("Email is invalid").required("Email is required"),password:Q.string().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout(function(){var r={email:a.email,password:a.password};t(function(e){var t=d.a.post("".concat(w,"/login"),e).then(function(e){return e.data});return{type:p,payload:t}}(r)).then(function(t){t.payload.loginSuccess?(window.localStorage.setItem("userId",t.payload.userId),!0===m?window.localStorage.setItem("rememberMe",a.id):localStorage.removeItem("rememberMe"),e.history.push("/")):i("Check out your Account or Password again")}).catch(function(e){i("Check out your Account or Password again"),setTimeout(function(){i("")},3e3)}),n(!1)},500)}},function(e){var t=e.values,a=e.touched,r=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,i=e.handleBlur,s=e.handleSubmit;return e.handleReset,n.a.createElement("div",{className:"app resp11",style:{height:"100vh",width:"100%",background:"linear-gradient(115deg, rgb(112 180 187) 10%, rgb(31 70 144) 90%)"}},n.a.createElement("form",{onSubmit:s,className:"resp10",style:{border:"10px double pink",borderRadius:"100px 20px",width:"350px",background:"#fff",padding:"40px",boxshadow:"0 0 8px rgba(0,0,0,0.1)"}},n.a.createElement(Z,{style:{textAlign:"center",fontSize:"2.1rem",color:"#56d8e4",fontFamily:"emoji"},level:2},"Log In"),n.a.createElement(K.a.Item,{required:!0},n.a.createElement($.a,{id:"email",prefix:n.a.createElement(D.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your email",type:"email",value:t.email,onChange:c,onBlur:i,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(K.a.Item,{required:!0},n.a.createElement($.a,{id:"password",prefix:n.a.createElement(D.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:i,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),o&&n.a.createElement("label",null,n.a.createElement("p",{style:{color:"#ff0000bf",fontSize:"0.7rem",border:"1px solid",padding:"1rem",borderRadius:"10px"}},o)),n.a.createElement(K.a.Item,null,n.a.createElement(A.a,{id:"rememberMe",onChange:E,checked:m},"Remember me"),n.a.createElement("a",{className:"login-form-forgot",href:"/reset_user",style:{float:"right"}},"forgot password"),n.a.createElement("div",null,n.a.createElement(Y.a,{type:"primary",htmlType:"submit",className:"login-form-button",style:{background:" #56d8e4",minWidth:"100%"},disabled:l,onSubmit:s},"Log in")),"Or ",n.a.createElement("a",{href:"/register"},"register now!"))))})}),te=a(105),ae=a.n(te),re=J.a.Title,ne={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},le={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}};var ce=function(e){var t=Object(O.b)();return n.a.createElement(V.a,{initialValues:{email:"",lastName:"",name:"",password:"",confirmPassword:""},validationSchema:Q.object().shape({name:Q.string().required("Name is required"),lastName:Q.string().required("Last Name is required"),email:Q.string().email("Email is invalid").required("Email is required"),password:Q.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:Q.string().oneOf([Q.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(a,r){var n=r.setSubmitting;setTimeout(function(){var r={email:a.email,password:a.password,name:a.name,lastname:a.lastname,image:"http://gravatar.com/avatar/".concat(ae()().unix(),"?d=identicon")};t(function(e){var t=d.a.post("".concat(w,"/register"),e).then(function(e){return e.data});return{type:f,payload:t}}(r)).then(function(t){t.payload.success?e.history.push("/login"):alert(t.payload.err.errmsg)}),n(!1)},500)}},function(e){var t=e.values,a=e.touched,r=e.errors,l=(e.dirty,e.isSubmitting),c=e.handleChange,o=e.handleBlur,i=e.handleSubmit;return e.handleReset,n.a.createElement("div",{className:"app resp21",style:{height:"100vh",width:"100%",background:"linear-gradient(115deg, rgb(112 180 187) 10%, rgb(31 70 144) 90%)"}},n.a.createElement(K.a,Object.assign({className:"resp20",style:{minWidth:"375px",border:"10px double pink",borderRadius:"100px 20px",width:"350px",background:"#fff",padding:"40px",boxshadow:"0 0 8px rgba(0,0,0,0.1)"}},ne,{onSubmit:i}),n.a.createElement(re,{style:{textAlign:"center",fontSize:"2.1rem",color:"#56d8e4",fontFamily:"emoji"},level:2},"Register"),n.a.createElement(K.a.Item,{required:!0,label:"Name"},n.a.createElement($.a,{id:"name",placeholder:"Enter your name",type:"text",value:t.name,onChange:c,onBlur:o,className:r.name&&a.name?"text-input error":"text-input"}),r.name&&a.name&&n.a.createElement("div",{className:"input-feedback"},r.name)),n.a.createElement(K.a.Item,{required:!0,label:"Last Name"},n.a.createElement($.a,{id:"lastName",placeholder:"Enter your Last Name",type:"text",value:t.lastName,onChange:c,onBlur:o,className:r.lastName&&a.lastName?"text-input error":"text-input"}),r.lastName&&a.lastName&&n.a.createElement("div",{className:"input-feedback"},r.lastName)),n.a.createElement(K.a.Item,{required:!0,label:"Email",hasFeedback:!0,validateStatus:r.email&&a.email?"error":"success"},n.a.createElement($.a,{id:"email",placeholder:"Enter your Email",type:"email",value:t.email,onChange:c,onBlur:o,className:r.email&&a.email?"text-input error":"text-input"}),r.email&&a.email&&n.a.createElement("div",{className:"input-feedback"},r.email)),n.a.createElement(K.a.Item,{required:!0,label:"Password",hasFeedback:!0,validateStatus:r.password&&a.password?"error":"success"},n.a.createElement($.a,{id:"password",placeholder:"Enter your password",type:"password",value:t.password,onChange:c,onBlur:o,className:r.password&&a.password?"text-input error":"text-input"}),r.password&&a.password&&n.a.createElement("div",{className:"input-feedback"},r.password)),n.a.createElement(K.a.Item,{required:!0,label:"Confirm",hasFeedback:!0},n.a.createElement($.a,{id:"confirmPassword",placeholder:"Enter your confirmPassword",type:"password",value:t.confirmPassword,onChange:c,onBlur:o,className:r.confirmPassword&&a.confirmPassword?"text-input error":"text-input"}),r.confirmPassword&&a.confirmPassword&&n.a.createElement("div",{className:"input-feedback"},r.confirmPassword)),n.a.createElement(K.a.Item,le,n.a.createElement(Y.a,{className:"resp22",style:{background:" #56d8e4"},onClick:i,type:"primary",disabled:l},"Submit"))))})},oe=a(567);oe.a.SubMenu,oe.a.ItemGroup;var ie=function(e){return n.a.createElement(oe.a,{mode:e.mode},n.a.createElement(oe.a.Item,{key:"mail"},n.a.createElement("a",{href:"/"},"Home")),n.a.createElement(oe.a.Item,{key:"blog"},n.a.createElement("a",{href:"/blog"},"Blog")))},se=a(573);var ue=Object(o.f)(function(e){var t=Object(O.c)(function(e){return e.user});return t.userData&&!t.userData.isAuth?n.a.createElement(oe.a,{mode:e.mode},n.a.createElement(oe.a.Item,{key:"mail"},n.a.createElement("a",{href:"/login"},"Signin")),n.a.createElement(oe.a.Item,{key:"app"},n.a.createElement("a",{href:"/register"},"Signup"))):n.a.createElement(oe.a,{mode:e.mode},n.a.createElement(oe.a.Item,{key:"history"},n.a.createElement("a",{href:"/history"},"History")),n.a.createElement(oe.a.Item,{key:"upload"},n.a.createElement("a",{href:"/product/upload"},"Upload")),n.a.createElement(oe.a.Item,{key:"cart",style:{paddingBottom:3}},n.a.createElement(se.a,{count:t.userData&&t.userData.cart.length},n.a.createElement("a",{href:"/user/cart",style:{marginRight:-22,color:"#667777"}},n.a.createElement(D.a,{type:"shopping-cart",style:{fontSize:30,marginBottom:3}})))),n.a.createElement(oe.a.Item,{key:"logout"},n.a.createElement("a",{onClick:function(){d.a.get("".concat(w,"/logout")).then(function(t){200===t.status?e.history.push("/login"):alert("Log Out Failed")})}},"Logout")))}),me=a(569);a(546);var de=function(){var e=Object(r.useState)(!1),t=Object(k.a)(e,2),a=t[0],l=t[1];return n.a.createElement("nav",{className:"menu",style:{position:"fixed",zIndex:5,width:"100%",top:"0",boxShadow:"0px 4px 11px 0px rgba(0,0,0,0.75)"}},n.a.createElement("div",{className:"menu__logo"},n.a.createElement("a",{href:"/"},"Travelverse")),n.a.createElement("div",{className:"menu__container"},n.a.createElement("div",{className:"menu_left"},n.a.createElement(ie,{mode:"horizontal"})),n.a.createElement("div",{className:"menu_rigth"},n.a.createElement(ue,{mode:"horizontal"})),n.a.createElement(Y.a,{className:"menu__mobile-button",type:"primary",onClick:function(){l(!0)}},n.a.createElement(D.a,{type:"align-right"})),n.a.createElement(me.a,{title:"Basic Drawer",placement:"right",className:"menu_drawer",closable:!1,onClose:function(){l(!1)},visible:a},n.a.createElement(ie,{mode:"inline"}),n.a.createElement(ue,{mode:"inline"}))))},pe=(a(547),a(20)),fe=a(60),Ee=function(){return n.a.createElement("div",null,n.a.createElement("footer",{class:"footer"},n.a.createElement("div",{class:"footer-container"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"footer-col"},n.a.createElement("h4",null,"company"),n.a.createElement("ul",null,n.a.createElement(pe.b,{to:"/about",style:{textDecoration:"none"}},n.a.createElement("li",null,n.a.createElement("p",null,"about us"))),n.a.createElement(pe.b,{to:"/services",style:{textDecoration:"none"}},n.a.createElement("li",null,n.a.createElement("p",null,"our services"))),n.a.createElement(pe.b,{to:"/about",style:{textDecoration:"none"}},n.a.createElement("li",null,n.a.createElement("p",null,"privacy policy"))))),n.a.createElement("div",{class:"footer-col"},n.a.createElement("h4",null,"get help"),n.a.createElement("ul",null,n.a.createElement(pe.b,{to:"/help",style:{textDecoration:"none"}},n.a.createElement("li",null,n.a.createElement("p",null,"FAQ"))),n.a.createElement(pe.b,{to:"/contact",style:{textDecoration:"none"}},n.a.createElement("li",null,n.a.createElement("p",null,"contact"))),n.a.createElement(pe.b,{to:"/blog",style:{textDecoration:"none"}},n.a.createElement("li",null,n.a.createElement("p",null,"blog"))))),n.a.createElement("div",{class:"footer-col"},n.a.createElement("h4",null,"options"),n.a.createElement("ul",null,n.a.createElement(pe.b,{to:"/sell",style:{textDecoration:"none"}},n.a.createElement("li",null,n.a.createElement("p",null,"upload"))),n.a.createElement(pe.b,{to:"/projects",style:{textDecoration:"none"}},n.a.createElement("li",null,n.a.createElement("p",null,"book"))),n.a.createElement(pe.b,{to:"/reg-property",style:{textDecoration:"none"}},n.a.createElement("li",null,n.a.createElement("p",null,"history"))))),n.a.createElement("div",{class:"footer-col"},n.a.createElement("h4",null,"follow us"),n.a.createElement("div",{class:"social-links"},n.a.createElement("div",{className:"footer-svgs"},n.a.createElement(pe.b,{to:"/contact"},n.a.createElement(fe.a,{style:{color:"#003c50",fontSize:"1.2em"}}))),n.a.createElement("div",{className:"footer-svgs"},n.a.createElement(pe.b,{to:"/contact"},n.a.createElement(fe.d,{style:{color:"#003c50",fontSize:"1.2em"}}))),n.a.createElement("div",{className:"footer-svgs"},n.a.createElement(pe.b,{to:"/contact"},n.a.createElement(fe.b,{style:{color:"#003c50",fontSize:"1.2rem"}}))),n.a.createElement("div",{className:"footer-svgs"},n.a.createElement(pe.b,{to:"/contact"},n.a.createElement(fe.c,{style:{color:"#003c50",fontSize:"1.2em"}})))))))))},he=a(275);function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function ye(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var be=function(e){var t=Object(r.useState)([]),a=Object(k.a)(t,2),l=a[0],c=a[1];return n.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},n.a.createElement(he.a,{onDrop:function(t){var a=new FormData;a.append("file",t[0]),d.a.post("/api/product/uploadImage",a,{header:{"content-type":"multipart/form-data"}}).then(function(t){t.data.success?(c([].concat(Object(S.a)(l),[t.data.image])),e.refreshFunction([].concat(Object(S.a)(l),[t.data.image]))):alert("Failed to save the Image in Server")})},multiple:!1,maxSize:8e8},function(e){var t=e.getRootProps,a=e.getInputProps;return n.a.createElement("div",Object.assign({style:{width:"300px",height:"240px",border:"1px solid lightgray",display:"flex",alignItems:"center",justifyContent:"center"}},t()),console.log("getRootProps",ye({},t())),console.log("getInputProps",ye({},a())),n.a.createElement("input",a()),n.a.createElement(D.a,{type:"plus",style:{fontSize:"3rem"}}))}),n.a.createElement("div",{style:{display:"flex",width:"350px",height:"240px",overflowX:"scroll"}},l.map(function(t,a){return n.a.createElement("div",{onClick:function(){return function(t){var a=l.indexOf(t),r=Object(S.a)(l);r.splice(a,1),c(r),e.refreshFunction(r)}(t)}},n.a.createElement("img",{style:{minWidth:"300px",width:"300px",height:"240px"},src:"http://localhost:5000/".concat(t),alt:"productImg-".concat(a)}))})))},ve=J.a.Title,we=$.a.TextArea,Oe=[{key:1,value:"Africa"},{key:2,value:"Europe"},{key:3,value:"Asia"},{key:4,value:"North America"},{key:5,value:"South America"},{key:6,value:"Australia"},{key:7,value:"Antarctica"}];var je=function(e){var t=Object(r.useState)(""),a=Object(k.a)(t,2),l=a[0],c=a[1],o=Object(r.useState)(""),i=Object(k.a)(o,2),s=i[0],u=i[1],m=Object(r.useState)(0),p=Object(k.a)(m,2),f=p[0],E=p[1],h=Object(r.useState)(1),g=Object(k.a)(h,2),y=g[0],b=g[1],v=Object(r.useState)([]),w=Object(k.a)(v,2),O=w[0],j=w[1],x=function(t){if(t.preventDefault(),!l||!s||!f||!y||!O)return alert("fill all the fields first!");var a={writer:e.user.userData._id,title:l,description:s,price:f,images:O,continents:y};d.a.post("/api/product/uploadProduct",a).then(function(t){t.data.success?(alert("Product Successfully Uploaded"),e.history.push("/")):alert("Failed to upload Product")})};return n.a.createElement("div",{style:{background:"linear-gradient(115deg, rgb(112 180 187) 10%, rgb(31 70 144) 90%)",padding:"2rem 0"}},n.a.createElement("div",null,n.a.createElement(K.a,{onSubmit:x,style:{border:"20px double #FFE5B4",borderRadius:"100px 20px",padding:"40px",background:"#E8AA42",maxWidth:"600px",margin:"2rem auto",textAlign:"center",marginBottom:"2rem"}},n.a.createElement(ve,{level:2,style:{fontFamily:"fangsong"}}," Upload Travel Product"),n.a.createElement(be,{refreshFunction:function(e){j(e)}}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{style:{fontSize:"4vmin",fontFamily:"fangsong",fontWeight:"bold ",color:"#231955"}},"Title"),n.a.createElement($.a,{onChange:function(e){c(e.currentTarget.value)},value:l,style:{padding:"1rem"}}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{style:{fontSize:"4vmin",fontFamily:"fangsong",fontWeight:"bold ",color:"#231955"}},"Description"),n.a.createElement(we,{onChange:function(e){u(e.currentTarget.value)},value:s}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("label",{style:{fontSize:"4vmin",fontFamily:"fangsong",fontWeight:"bold ",color:"#231955"}},"Price($)"),n.a.createElement($.a,{onChange:function(e){E(e.currentTarget.value)},value:f,type:"number"}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("select",{onChange:function(e){b(e.currentTarget.value)},value:y,style:{width:"100%",padding:"5px"}},Oe.map(function(e){return n.a.createElement("option",{key:e.key,value:e.key},e.value," ")})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(Y.a,{onClick:x,style:{background:"#231955",color:"white"}},"Submit"))))},xe=a(267),Se=a.n(xe);var ke=function(e){var t=Object(r.useState)([]),a=Object(k.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)(function(){if(e.detail.images&&e.detail.images.length>0){var t=[];e.detail.images&&e.detail.images.map(function(e){t.push({original:"http://localhost:5000/".concat(e),thumbnail:"http://localhost:5000/".concat(e)})}),c(t)}},[e.detail]),n.a.createElement("div",null,n.a.createElement(Se.a,{items:l}))},Ne=a(574);var Pe=function(e){var t=Object(r.useState)({}),a=Object(k.a)(t,2),l=a[0],c=a[1];return Object(r.useEffect)(function(){c(e.detail)},[e.detail]),n.a.createElement("div",null,n.a.createElement(Ne.a,{title:"Product Info:"},n.a.createElement(Ne.a.Item,{label:"Price"}," ",l.price),n.a.createElement(Ne.a.Item,{label:"Sold"},l.sold),n.a.createElement(Ne.a.Item,{label:"View"}," ",l.views),n.a.createElement(Ne.a.Item,{label:"Description"}," ",l.description)),n.a.createElement("br",null),n.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},n.a.createElement("button",{className:"productInfoBtn",onClick:function(){e.addToCart(e.detail._id)}},"Add to Cart")))};var De=function(e){var t=Object(O.b)(),a=e.match.params.productId,l=Object(r.useState)([]),c=Object(k.a)(l,2),o=c[0],i=c[1];return Object(r.useEffect)(function(){d.a.get("/api/product/products_by_id?id=".concat(a,"&type=single")).then(function(e){i(e.data[0])})},[]),n.a.createElement("div",null,n.a.createElement("div",{className:"postPage",style:{width:"100%",minHeight:"90vh",padding:"5rem 11rem 0 11rem"}},n.a.createElement("br",null),n.a.createElement(I.a,{gutter:[16,16]},n.a.createElement(P.a,{lg:12,xs:24},n.a.createElement(ke,{detail:o})),n.a.createElement(P.a,{lg:12,xs:24},n.a.createElement("div",{style:{display:"flex",justifyContent:"flex-start",fontSize:"1.2rem",marginBottom:"0",fontFamily:"cursive"}},n.a.createElement("h1",{style:{marginBottom:"1rem"}},o.title," \u2708\ufe0f ")),n.a.createElement(Pe,{addToCart:function(e){t(function(e){var t=d.a.get("".concat(w,"/addToCart?productId=").concat(e)).then(function(e){return e.data});return{type:g,payload:t}}(e))},detail:o})))))};var Ie=function(e){var t=function(e){if(e.length>0){var t=e[0];return"http://localhost:5000/".concat(t)}};return n.a.createElement("div",null,n.a.createElement("table",null,n.a.createElement("thead",{className:"historyPageStyle"},n.a.createElement("tr",{style:{backgroundColor:"#b5edff"}},n.a.createElement("th",null,"Product Image"),n.a.createElement("th",null,"Product Quantity"),n.a.createElement("th",null,"Product Price"),n.a.createElement("th",null,"Remove from Cart"))),n.a.createElement("tbody",null,e.products&&e.products.map(function(a){return n.a.createElement("tr",{key:a._id},n.a.createElement("td",null,n.a.createElement("img",{style:{width:"4rem",objectFit:"cover",borderRadius:"50%",height:"4rem"},alt:"product",src:t(a.images)})),n.a.createElement("td",null,a.quantity," EA"),n.a.createElement("td",null,"$ ",a.price," "),n.a.createElement("td",null,n.a.createElement("button",{className:"productInfoBtn",style:{width:"50%"},onClick:function(){return e.removeItem(a._id)}},"Remove ")," "))}))))},_e=a(571),Ce=a(92),Te=a(268),Ae=a(269),Fe=a(276),Be=a(270),qe=a(277),ze=a(271),Me=a.n(ze),Re=function(e){function t(){return Object(Te.a)(this,t),Object(Fe.a)(this,Object(Be.a)(t).apply(this,arguments))}return Object(qe.a)(t,e),Object(Ae.a)(t,[{key:"render",value:function(){var e=this,t=this.props.toPay;return n.a.createElement(Me.a,{env:"sandbox",client:{sandbox:"AelMA7rUdxce2INjEX1y9KQ47L4J8Idv7rIROe3if2vnMqsIkIz5FFUvA5g-cZiRCnRl3X2EAZljDxWw",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.onSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"large",color:"blue",shape:"rect",label:"checkout"}})}}]),t}(n.a.Component);var Le=function(e){var t=Object(O.b)(),a=Object(r.useState)(0),l=Object(k.a)(a,2),c=l[0],o=l[1],i=Object(r.useState)(!1),s=Object(k.a)(i,2),u=s[0],m=s[1],p=Object(r.useState)(!1),f=Object(k.a)(p,2),E=f[0],h=f[1];Object(r.useEffect)(function(){var a=[];e.user.userData&&e.user.userData.cart&&e.user.userData.cart.length>0&&(e.user.userData.cart.forEach(function(e){a.push(e.id)}),t(function(e,t){var a=d.a.get("/api/product/products_by_id?id=".concat(e,"&type=array")).then(function(e){return t.forEach(function(t){e.data.forEach(function(a,r){t.id===a._id&&(e.data[r].quantity=t.quantity)})}),e.data});return{type:y,payload:a}}(a,e.user.userData.cart)).then(function(e){e.payload.length>0&&g(e.payload)}))},[e.user.userData]);var g=function(e){var t=0;e.map(function(e){t+=parseInt(e.price,10)*e.quantity}),o(t),m(!0)};return n.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},n.a.createElement("div",{style:{textAlign:"center",fontSize:"1.5rem",fontFamily:"cursive"}},n.a.createElement("h1",{style:{marginBottom:"0"}},"My Cart")),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement(Ie,{products:e.user.cartDetail,removeItem:function(e){t(function(e){var t=d.a.get("/api/users/removeFromCart?_id=".concat(e)).then(function(e){return e.data.cart.forEach(function(t){e.data.cartDetail.forEach(function(a,r){t.id===a._id&&(e.data.cartDetail[r].quantity=t.quantity)})}),e.data});return{type:b,payload:t}}(e)).then(function(e){e.payload.cartDetail.length<=0?m(!1):g(e.payload.cartDetail)})}}),u?n.a.createElement("div",{style:{marginTop:"3rem"}},n.a.createElement("h2",null,"Total amount: $",c," ")):E?n.a.createElement(_e.a,{status:"success",title:"Successfully Purchased Items"}):n.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center"}},n.a.createElement("br",null),n.a.createElement(Ce.a,{description:!1}),n.a.createElement("p",null,"No Items In the Cart"))),u&&n.a.createElement(Re,{toPay:c,onSuccess:function(a){t(function(e){var t=d.a.post("".concat(w,"/successBuy"),e).then(function(e){return e.data});return{type:v,payload:t}}({cartDetail:e.user.cartDetail,paymentData:a})).then(function(e){e.payload.success&&(h(!0),m(!1))})},transactionError:function(){console.log("Paypal error")},transactionCanceled:function(){console.log("Transaction canceled")}}))};var $e=function(e){return n.a.createElement("div",{style:{width:"80%",margin:"2rem auto"}},n.a.createElement("div",{style:{textAlign:"center",fontSize:"1.5rem",fontFamily:"cursive"}},n.a.createElement("h1",{style:{marginBottom:"0"}},"History")),n.a.createElement("br",null),n.a.createElement("table",null,n.a.createElement("thead",{className:"historyPageStyle"},n.a.createElement("tr",{style:{backgroundColor:"#b5edff"}},n.a.createElement("th",null,"Payment Id"),n.a.createElement("th",null,"Price"),n.a.createElement("th",null,"Quantity"),n.a.createElement("th",null,"Date of Purchase"))),n.a.createElement("tbody",null,e.user.userData&&e.user.userData.history&&e.user.userData.history.map(function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,e.id),n.a.createElement("td",null,e.price),n.a.createElement("td",null,e.quantity),n.a.createElement("td",null,e.dateOfPurchase))}))))},We=(a(557),[{title:"Dan Flying Solo",author:"Daniel",body:"His photography has also been published in Beautiful Destination, Travel & Leisure, National Geographic, Travel Channel and Matador Network.",id:0,img:"/b1.jpg"},{title:"A Broken Backpack",author:"Melissa",body:"She\u2019s such a talented individual and has truly proven that hard work pays off. Melissa has been published on Huffington Post, Matador Network, Thought Catalog and much, much more. She\u2019s a true female backpacker and an inspiration!",id:1,img:"/b2.jpg"},{title:"Lili\u2019s Travel Plans",author:"Lili",body:"She was recently named #25 Top Travel Blogger To Follow In 2016. Lili also has no filter and does a wonderful job at sharing her opinion about travel. She's also a fellow Travello App travel blogger.",id:2,img:"/b3.jpg"},{title:"The Blog Abroad",author:"Gloria ",body:"Never afraid to voice her an opinion, she is a talented writer who creates great content. She also has a great eye for photography. She's worked with top travel photographers and writes for Huffington Post, Thought Catalog, and Matador Networks. ",id:3,img:"/b4.jpg"},{title:"My Life\u2019s A Movie",author:"Alyssa Ramos",body:"She\u2019s a GoPro selfie ninja master! Seriously tho, she even published \u201810 Tips For Getting Travel Photos With No People In Them\u2019. She\u2019s just that GOOD! Alyssa is also part of the GoPro family and writes for Huffington Post, Matador Network and other media publications. Catch her on Snapchat as she's always sharing quick travel tips for packing.",id:4,img:"/b5.jpg"}]),Ue=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"blog-head"},n.a.createElement("h3",{className:"blog-heading",style:{color:"wheat"}},"Read the ",n.a.createElement("span",{className:"yellow-color"},"Amazing Blogs")," from Us!")),n.a.createElement("div",{className:"bloglist"},We.map(function(e){return n.a.createElement("div",{className:"blogPreview",key:e.id},n.a.createElement(pe.b,{to:"/Blog"},n.a.createElement("div",{className:"blogImages"},n.a.createElement("img",{src:e.img,alt:""})),n.a.createElement("div",{className:"blogInfo"},n.a.createElement("div",null,n.a.createElement("img",{className:"blog-verify",src:"/verification.jpg",alt:"verification"})),n.a.createElement("h2",{className:"blog-title"},e.title),n.a.createElement("p",{className:"blog-para"},"Written by ",e.author),n.a.createElement("p",{className:"blog-para"},"Written by ",e.body))))})))};var He=function(){return n.a.createElement(r.Suspense,{fallback:n.a.createElement("div",null,"Loading...")},n.a.createElement(de,null),n.a.createElement("div",{style:{paddingTop:"70px",minHeight:"calc(100vh - 80px)"}},n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",component:j(X,null)}),n.a.createElement(o.a,{exact:!0,path:"/login",component:j(ee,!1)}),n.a.createElement(o.a,{exact:!0,path:"/register",component:j(ce,!1)}),n.a.createElement(o.a,{exact:!0,path:"/product/upload",component:j(je,!0)}),n.a.createElement(o.a,{exact:!0,path:"/product/:productId",component:j(De,null)}),n.a.createElement(o.a,{exact:!0,path:"/user/cart",component:j(Le,!0)}),n.a.createElement(o.a,{exact:!0,path:"/history",component:j($e,!0)}),n.a.createElement(o.a,{exact:!0,path:"/Blog",component:Ue}))),n.a.createElement(Ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=a(106);function Xe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function Ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Xe(a,!0).forEach(function(t){Object(x.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Xe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Qe=Object(Ge.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Ve({},e,{register:t.payload});case p:return Ve({},e,{loginSucces:t.payload});case E:return Ve({},e,{userData:t.payload});case h:return Ve({},e);case g:return Ve({},e,{userData:Ve({},e.userData,{cart:t.payload})});case y:return Ve({},e,{cartDetail:t.payload});case b:return Ve({},e,{cartDetail:t.payload.cartDetail,userData:Ve({},e.userData,{cart:t.payload.cart})});case v:return Ve({},e,{userData:Ve({},e.userData,{cart:t.payload.cart}),cartDetail:t.payload.cartDetail});default:return e}}}),Je=a(273),Ke=a.n(Je),Ye=a(274),Ze=Object(Ge.a)(Ke.a,Ye.a)(Ge.c);c.a.render(n.a.createElement(O.a,{store:Ze(Qe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},n.a.createElement(pe.a,null,n.a.createElement(He,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){}},[[280,1,2]]]);
//# sourceMappingURL=main.8887ea77.chunk.js.map