(this.webpackJsonpmeera=this.webpackJsonpmeera||[]).push([[0],{24:function(e,t,i){},25:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return B}));var s=i(1),c=i.n(s),a=i(16),n=i.n(a),l=(i(24),i(25),i(6),i(7),i(5)),r=i.n(l),j=i(17),d=i(3),m=i(18),o=i.n(m).a.create({baseURL:"https://api.coingecko.com/api/v3"}),u=i(0),x=Object(s.createContext)(),b=function(e){var t=Object(s.useState)(["bitcoin","litecoin","ethereum"]),i=Object(d.a)(t,2),c=i[0];i[1];return Object(u.jsx)(x.Provider,{value:{watchList:c},children:e.children})};function h(e){var t=e.coin;return Object(u.jsxs)("div",{className:"flex justifybetween alignitems max2000",style:{},children:[Object(u.jsx)("img",{className:"coinimg marginright1",src:t.image,alt:""}),Object(u.jsx)("div",{className:"marginright2",children:t.name}),Object(u.jsxs)("div",{className:"marginright2 flex",children:["CurrentPrice:",Object(u.jsx)("div",{className:"",style:{marginLeft:"3%",color:"#97d451"},children:t.current_price})]}),Object(u.jsx)("div",{className:""})]})}var f=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),i=t[0],c=t[1],a=Object(s.useContext)(x).watchList;console.log(a),Object(s.useEffect)((function(){(function(){var e=Object(j.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/coins/markets",{params:{vs_currency:"usd",ids:a.join(",")}});case 2:t=e.sent,c(t.data),console.log(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"flexwrap justifybetween width60 ",style:{maxWidth:"50vw"},children:i.map((function(e){return Object(u.jsx)(h,{coin:e},e.id)}))})})},O=i.p+"static/media/invest.57e5a2e4.jpg",p=i.p+"static/media/phone.f60cc21b.png",g=i.p+"static/media/time.bd1a7aaf.jpg";function v(){return Object(u.jsxs)("div",{className:"flex justifyaround width30 font600 ",children:[Object(u.jsx)("script",{src:"https://kit.fontawesome.com/494ce4ee7f.js",crossorigin:"anonymous"}),Object(u.jsxs)("div",{className:" headerb flexcol alignitems ",children:[Object(u.jsx)("i",{class:"fas fa-hand-holding-usd hicon"}),"Finance"]}),Object(u.jsxs)("div",{className:"headerb flexcol alignitems",children:[Object(u.jsx)("i",{class:"fas fa-coins hicon"}),"Cryptos"]}),Object(u.jsxs)("div",{className:"headerb flexcol alignitems",children:[Object(u.jsx)("i",{class:"fas fa-home hicon"}),"Real Estate"]})]})}function N(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:" flex justify ",children:Object(u.jsx)(v,{})}),Object(u.jsxs)("div",{className:"relative flexwrap container margintop15 justifybetween alignitems",style:{maxWidth:""},children:[Object(u.jsxs)("fieldset",{className:"p1 ",children:[Object(u.jsx)("legend",{children:Object(u.jsx)("h2",{style:{color:"#cfa900"},children:"Sample Text "})}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("h4",{style:{color:"005d31 "},children:"Inner Headline"})}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"",style:{width:"70%"},children:"Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet."})]}),Object(u.jsx)("div",{className:"flex absolute img1div  ",children:Object(u.jsx)("img",{alt:"",src:O,className:"img1",style:{maxWidth:"35vw"}})}),Object(u.jsx)("div",{className:"",style:{width:"15rem"}}),Object(u.jsx)("div",{className:"flex rightcard",children:"Aliqua occaecat dolor incididunt ut magna id eiu"})]}),Object(u.jsxs)("div",{className:"relative flexwrap p2 margintop  justifybetween alignitems",children:[Object(u.jsx)("div",{className:"flex rightcard",children:"Aliqua occaecat dolor incididunt ut magna id eiu"}),Object(u.jsx)("div",{className:"",style:{width:"15rem"}}),Object(u.jsxs)("fieldset",{className:"p1",children:[Object(u.jsx)("legend",{children:Object(u.jsx)("h2",{style:{color:"#cfa900"},children:"Sample Text "})}),Object(u.jsx)("div",{className:" flex justifyend",children:Object(u.jsx)("h4",{style:{color:"#284336"},children:"Time To Invest"})}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:" flex justifyend",children:Object(u.jsx)("p",{className:"",style:{width:"70%",textAlign:"end",color:"#432928"},children:"Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet."})})]}),Object(u.jsx)("div",{className:"flex absolute img2div ",children:Object(u.jsx)("img",{alt:"",src:g,className:"img2"})})]}),Object(u.jsxs)("div",{className:"relative  flexwrap p2 margintop  justifybetween alignitems",children:[Object(u.jsxs)("fieldset",{className:"p1",style:{maxWidth:""},children:[Object(u.jsxs)("legend",{children:[Object(u.jsx)("h2",{style:{color:"#cfa900"},children:"Sample Text "})," "]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("h4",{children:"Inner Headline"})}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"",style:{width:"70%"},children:"Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet."})]}),Object(u.jsx)("div",{className:"flex absolute img3div ",children:Object(u.jsx)("img",{alt:"",src:p,className:"img3",style:{maxWidth:"35vw"}})}),Object(u.jsx)("div",{className:"",style:{width:"15rem"}}),Object(u.jsx)("div",{className:"flex rightcard",children:"Aliqua occaecat dolor incididunt ut magna id eiu"})]})]})}function y(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"margintop ",children:["     ",Object(u.jsx)(N,{})," "]})})}i(46),i(47);function w(){return Object(u.jsxs)("div",{className:" flex justifyend alignitems ",style:{marginTop:"1%"},children:[Object(u.jsx)("input",{className:"relative search-bar ",type:"text",value:"",style:{}}),Object(u.jsx)("div",{className:"absolute",children:Object(u.jsx)("button",{type:"submit",className:"search-button   ",style:{textAlign:"center",margin:"0"},children:"Search "})})]})}function q(){return Object(u.jsxs)("nav",{className:"navbar sticky flex justifybetween  font600",style:{width:"65vw"},children:[Object(u.jsx)("a",{href:"/",children:"Home"}),Object(u.jsxs)("div",{className:"flex white navul",children:[Object(u.jsx)("div",{className:"white",children:Object(u.jsx)("a",{href:"#learnmore",children:"Learn More"})}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("a",{href:"#about",children:"About"})}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)("a",{href:"#contact",children:"Contact"})})]}),Object(u.jsx)("a",{href:"/signup",children:"Sign Up"})]})}var S=function(){return Object(u.jsx)("div",{className:" flex justifyend alignitems ",style:{marginRight:"3%",marginTop:"1.3%"},children:Object(u.jsx)("span",{className:" ",style:{marginLeft:""},children:Object(u.jsxs)("a",{href:"/",className:"btn btn-link btn-sm flex  alignitems",style:{fontSize:".8rem",padding:"",marginRight:"5px"},children:[Object(u.jsx)("img",{type:"button",src:"\r\nhttps://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/actions/gnome-session-logout.png\r ",alt:"",style:{width:"26px",height:"25px",marginBottom:"3px",padding:""}}),"User Login "]})})})},A=function(){return Object(u.jsxs)("div",{className:"width70",style:{fontWeight:"600",color:"white",fontSize:"2rem",lineHeight:"1.2"},children:["Invest Smart,",Object(u.jsx)("ul",{children:"Invest With Us"})]})};function k(){return Object(u.jsxs)("div",{className:"head relative ",children:[Object(u.jsx)("div",{className:"absolute width100",children:Object(u.jsx)(S,{})}),Object(u.jsx)("div",{className:"flex justify width100 ",children:Object(u.jsx)(w,{})}),Object(u.jsxs)("div",{className:"  flexwrap alignitems justify ",style:{height:"36vh"},children:[Object(u.jsx)("div",{className:"absolute flexwrap alignitems ",style:{zIndex:"2",bottom:"0px",top:"0px",left:"16%"},children:Object(u.jsx)(A,{})}),Object(u.jsx)("div",{className:"logo flexwrap"}),Object(u.jsxs)("div",{className:"font600 ",children:[Object(u.jsx)("h1",{style:{color:"white"},children:"Z/J INVESMENTS"}),Object(u.jsx)("ul",{style:{color:"#8B7619"},children:"Your Trusted Invesment Partner"})]})]}),Object(u.jsx)("div",{className:" flex justify absolutebottom ",children:Object(u.jsx)(q,{})}),Object(u.jsx)("div",{className:"flex justify "})]})}function I(){return Object(u.jsx)("div",{className:"banner  flex justify",children:Object(u.jsx)("div",{className:"flex justifyaround ",style:{width:"55rem"},children:Object(u.jsx)(b,{children:Object(u.jsx)(f,{})})})})}var L=i(19),M=i.n(L),T=function(){return Object(u.jsx)("div",{className:"flex justify ",style:{marginTop:"1%"},children:Object(u.jsxs)("form",{className:"flexwrap contact-form width20",onSubmit:function(e){e.preventDefault(),M.a.sendForm("service_ey4ab2x","template_3de1jw9",e.target,"user_wv3K1hQDxcdMl9VBIJNVm").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},style:{width:"100px"},children:[Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("input",{type:"hidden",name:"contact_number"}),Object(u.jsx)("label",{children:"Name"})]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("input",{type:"text",name:"user_name"}),Object(u.jsx)("label",{children:"Email"})]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("input",{type:"email",name:"user_email"}),Object(u.jsx)("label",{children:"Message"})]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("textarea",{name:"message"}),Object(u.jsx)("input",{type:"submit",value:"Send"})]})]})})};i(50);function W(){return Object(u.jsxs)("div",{className:" flex justify",style:{width:"100vw"},children:[Object(u.jsx)("script",{src:"https://kit.fontawesome.com/494ce4ee7f.js",crossorigin:"anonymous"}),Object(u.jsxs)("div",{className:"flex width30 justifyaround ",children:[Object(u.jsxs)("a",{href:"/",style:{width:"3rem"},children:[" ",Object(u.jsx)("i",{class:"fab fa-facebook-square social"})," "]}),Object(u.jsxs)("a",{href:"/",children:[" ",Object(u.jsx)("i",{class:"fab fa-twitter-square social"})]}),Object(u.jsx)("a",{href:"/",children:Object(u.jsx)("i",{class:"fab fa-instagram social"})}),Object(u.jsxs)("a",{href:"/",children:[" ",Object(u.jsx)("i",{class:"fas fa-envelope social",children:"  "})," "]})]})]})}function C(){return Object(u.jsxs)("div",{className:"footer relative",children:[Object(u.jsxs)("div",{className:"flex justify top",children:[Object(u.jsx)("h3",{children:" Footer"}),"       ",Object(u.jsx)("div",{})]}),Object(u.jsx)("div",{className:"flex",style:{width:"100%",zIndex:"1"},children:Object(u.jsx)(W,{})}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)(T,{})}),Object(u.jsx)("div",{className:"absolutebottom",style:{color:"burlywood"},children:Object(u.jsx)("a",{href:"https://munibkhanresume.tk/",target:"blank",className:"anchor",children:"@Munib Khan "})})]})}i(51);var _=i.p+"static/media/icon1.8dcb09e1.png",E=i.p+"static/media/icon2.1c06acfd.png",$=i.p+"static/media/icon3.7ac32440.png";function P(){return Object(u.jsx)("div",{className:"alignitem  flex justify width65",style:{maxWidth:"1400px"},children:Object(u.jsxs)("div",{className:"panel  justifybetween alignitems   ",children:[Object(u.jsxs)("div",{className:"pricing-plan threedhover",children:[Object(u.jsx)("img",{src:_,alt:"",className:"pricing-img"}),Object(u.jsx)("h2",{className:"pricing-header",children:"Personal"}),Object(u.jsxs)("ul",{className:"pricing-features panelul",children:[Object(u.jsx)("li",{className:"pricing-features-item",children:"Start As Low As"}),Object(u.jsx)("li",{className:"pricing-features-item",children:"$100 - $500"})]}),Object(u.jsx)("span",{className:"pricing-price",children:"$100"}),Object(u.jsx)("a",{href:"#/",className:"pricing-button",children:"Sign up"})]}),Object(u.jsxs)("div",{className:"pricing-plan threedhover",children:[Object(u.jsx)("img",{src:E,alt:"",className:"pricing-img"}),Object(u.jsx)("h2",{className:"pricing-header",style:{color:"blue"},children:"Medium"}),Object(u.jsxs)("ul",{className:"pricing-features panelul",children:[Object(u.jsx)("li",{className:"pricing-features-item",children:"Never sleeps"}),Object(u.jsx)("li",{className:"pricing-features-item",children:"$1000 - $ 10000"})]}),Object(u.jsx)("span",{className:"pricing-price",children:"$5000"}),Object(u.jsx)("a",{href:"#/",className:"pricing-button is-featured",children:"Sign up"})]}),Object(u.jsxs)("div",{className:"pricing-plan threedhover",children:[Object(u.jsx)("img",{src:$,alt:"",className:"pricing-img"}),Object(u.jsx)("h2",{className:"pricing-header",style:{color:"#027002"},children:"Enterprise"}),Object(u.jsxs)("ul",{className:"pricing-features panelul",children:[Object(u.jsx)("li",{className:"pricing-features-item",children:"Dedicated"}),Object(u.jsx)("li",{className:"pricing-features-item",children:"Simple horizontal scalability"})]}),Object(u.jsx)("span",{className:"pricing-price",children:"$10,000+"}),Object(u.jsx)("a",{href:"#/",className:"pricing-button",style:{backgroundColor:"#ff9800",color:"white"},children:"Sign up"})]})]})})}function z(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"",id:"home",children:Object(u.jsx)(k,{})}),Object(u.jsxs)("div",{className:"bod flex margin  relative max2000",style:{maxWidth:""},children:[Object(u.jsx)("div",{className:"absolute width70  ",children:Object(u.jsx)(I,{})}),Object(u.jsx)("div",{className:"margintop max2000 justify width70",style:{maxWidth:""},children:Object(u.jsx)(y,{})})]}),Object(u.jsx)("div",{className:"flex justify margintop10",children:Object(u.jsx)("h1",{children:"Pricing Plan "})}),Object(u.jsx)("div",{className:" flex justify margintop ",children:Object(u.jsx)(P,{})}),Object(u.jsx)("div",{className:"margintop15",children:Object(u.jsx)(C,{})})]})}function U(e){return Object(u.jsx)("div",{className:"",children:Object(u.jsx)(z,{})})}function B(){return Object(u.jsx)("div",{})}n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(U,{})}),document.getElementById("root"))},6:function(e,t,i){},7:function(e,t,i){}},[[52,1,2]]]);
//# sourceMappingURL=main.aa2d364d.chunk.js.map