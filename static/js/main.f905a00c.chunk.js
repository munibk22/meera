(this.webpackJsonpmeera=this.webpackJsonpmeera||[]).push([[0],{139:function(e,i,s){},140:function(e,i,s){"use strict";s.r(i),s.d(i,"default",(function(){return H}));var t=s(1),c=s.n(t),a=s(57),l=s.n(a),n=(s(65),s(66),s(36),s(37),s(35)),r=s.n(n),j=s(58),d=s(20),m=s(59),o=s.n(m).a.create({baseURL:"https://api.coingecko.com/api/v3"}),x=s(0),h=Object(t.createContext)(),u=function(e){var i=Object(t.useState)(["bitcoin","litecoin","ethereum"]),s=Object(d.a)(i,2),c=s[0];s[1];return Object(x.jsx)(h.Provider,{value:{watchList:c},children:e.children})};function b(e){var i=e.coin;return Object(x.jsxs)("div",{className:"flex justifybetween alignitems ",style:{},children:[Object(x.jsx)("img",{className:"coinimg marginright1",src:i.image,alt:""}),Object(x.jsx)("div",{className:"",children:i.name}),Object(x.jsxs)("div",{className:"flex",children:["\xa0Price:",Object(x.jsx)("div",{className:"",style:{marginLeft:"3%",width:"75px",color:"#97d451"},children:i.current_price})]}),Object(x.jsx)("div",{className:""})]})}var O=function(){var e=Object(t.useState)([]),i=Object(d.a)(e,2),s=i[0],c=i[1],a=Object(t.useContext)(h).watchList;console.log(a),Object(t.useEffect)((function(){(function(){var e=Object(j.a)(r.a.mark((function e(){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/coins/markets",{params:{vs_currency:"usd",ids:a.join(",")}});case 2:i=e.sent,c(i.data),console.log(i.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(x.jsx)("div",{children:Object(x.jsx)("div",{className:"flexwrap  justifybetween  ",style:{maxWidth:"1200px",width:"55vw"},children:s.map((function(e){return Object(x.jsx)(b,{coin:e},e.id)}))})})};function f(){return Object(x.jsx)("div",{className:"banner  flex justify",children:Object(x.jsx)("div",{className:"flex justifyaround ",style:{width:""},children:Object(x.jsx)(u,{children:Object(x.jsx)(O,{})})})})}s.p;var p=s.p+"static/media/phone.f60cc21b.png",g=s.p+"static/media/time.bd1a7aaf.jpg";function v(){return Object(x.jsxs)("div",{className:"flexwrap justifyaround width30 font600 ",children:[Object(x.jsx)("script",{src:"https://kit.fontawesome.com/494ce4ee7f.js",crossorigin:"anonymous"}),Object(x.jsxs)("div",{className:" headerb flexcol alignitems ",children:[Object(x.jsx)("i",{class:"fas fa-hand-holding-usd hicon"}),"Finance"]}),Object(x.jsxs)("div",{className:"headerb flexcol alignitems",children:[Object(x.jsx)("i",{class:"fas fa-coins hicon"}),"Cryptos"]}),Object(x.jsxs)("div",{className:"headerb flexcol alignitems",children:[Object(x.jsx)("i",{class:"fas fa-home hicon"}),"Real Estate"]})]})}function N(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"",style:{top:"0px"},children:Object(x.jsx)(f,{})}),Object(x.jsx)("div",{className:" flexwrap justify margintop",children:Object(x.jsx)(v,{})}),Object(x.jsxs)("div",{className:"relative flexwrap container margintop15 justifybetween alignitems",style:{maxWidth:""},children:[Object(x.jsxs)("fieldset",{className:"p1 ",children:[Object(x.jsx)("legend",{children:Object(x.jsx)("h2",{style:{color:"#cfa900"},children:"Now Is The Time To Invest "})}),Object(x.jsx)("div",{className:"",children:Object(x.jsx)("h4",{style:{color:"005d31 "},children:"Inner Headline"})}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{className:"",style:{width:"70%"},children:"Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet."})]}),Object(x.jsx)("div",{className:"flex absolute img1div  ",children:Object(x.jsx)("img",{alt:"",src:g,className:"img2",style:{maxWidth:"35vw"}})}),Object(x.jsx)("div",{className:"",style:{width:"15rem"}}),Object(x.jsx)("div",{className:"flex rightcard",children:"Aliqua occaecat dolor incididunt ut magna id eiu"})]}),Object(x.jsxs)("div",{className:"relative  flexwrap p2 margintop  justifybetween alignitems",children:[Object(x.jsxs)("fieldset",{className:"p1",style:{maxWidth:""},children:[Object(x.jsxs)("legend",{children:[Object(x.jsx)("h2",{style:{color:"#cfa900"},children:"Sample Text "})," "]}),Object(x.jsx)("div",{className:"",children:Object(x.jsx)("h4",{children:"Inner Headline"})}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{className:"",style:{width:"70%"},children:"Aliqua occaecat dolor incididunt ut magna id eiusmod sit consequat nisi. Adipisicing cupidatat ad dolore consectetur aliqua velit aute. Nulla cillum qui dolore sunt enim quis ut tempor ut non exercitation laborum fugiat nulla. In magna labore enim sunt enim. Mollit exercitation commodo laborum aliqua cillum incididunt. Amet amet Lorem dolor mollit anim esse fugiat incididunt officia eiusmod tempor est sit. Cillum tempor fugiat pariatur enim excepteur Lorem ipsum eiusmod ipsum deserunt amet."})]}),Object(x.jsx)("div",{className:"flex absolute img3div ",children:Object(x.jsx)("img",{alt:"",src:p,className:"img3",style:{maxWidth:"35vw"}})}),Object(x.jsx)("div",{className:"",style:{width:"15rem"}}),Object(x.jsx)("div",{className:"flex rightcard",children:"Aliqua occaecat dolor incididunt ut magna id eiu"})]})]})}function y(){return Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:" ",children:["     ",Object(x.jsx)(N,{})," "]})})}s(87),s(88);function w(){return Object(x.jsxs)("div",{className:" flex justifyend alignitems ",style:{marginTop:"1%"},children:[Object(x.jsx)("input",{className:"relative search-bar ",type:"text",value:"",style:{}}),Object(x.jsx)("div",{className:"absolute",children:Object(x.jsx)("button",{type:"submit",className:"search-button   ",style:{textAlign:"center",margin:"0"},children:"Search "})})]})}function k(){return Object(x.jsxs)("nav",{className:"navbar sticky flex justifyaround  font600",style:{width:"70vw",maxWidth:"1250px"},children:[Object(x.jsx)("a",{href:"/",children:"Home"}),Object(x.jsxs)("div",{className:"flex white navul",children:[Object(x.jsx)("div",{className:"white",children:Object(x.jsx)("a",{href:"#learnmore",children:"Learn More"})}),Object(x.jsx)("div",{className:"",children:Object(x.jsx)("a",{href:"#about",children:"About"})}),Object(x.jsx)("div",{className:"",children:Object(x.jsx)("a",{href:"#contact",children:"Contact"})})]}),Object(x.jsx)("a",{href:"/signup",children:"Sign Up"})]})}var q=function(){return Object(x.jsx)("div",{className:"flex justifyend ",style:{marginRight:"",marginTop:"10%"},children:Object(x.jsx)("div",{className:" flex justifyend",style:{marginRight:"",marginLeft:""},children:Object(x.jsxs)("a",{href:"/",className:"btn btn-link btn-sm flex  alignitems",style:{fontSize:".8rem",padding:"",marginRight:""},children:[Object(x.jsx)("img",{type:"button",src:"\r\nhttps://cdn3.iconfinder.com/data/icons/UltimateGnome/256x256/actions/gnome-session-logout.png\r ",alt:"",style:{width:"26px",height:"25px",marginBottom:"3px",padding:""}}),Object(x.jsx)("div",{className:"",children:"User Login"})]})})})},S=function(){return Object(x.jsxs)("div",{className:"",style:{fontWeight:"600",color:"white",fontSize:".8rem",lineHeight:"1.2",marginTop:"5%"},children:["Change The Conversation,",Object(x.jsx)("ul",{children:"Change The Compensation"})]})},T=s.p+"static/media/icon.a5b52996.svg";function C(){return Object(x.jsxs)("div",{className:"head relative ",children:[Object(x.jsx)("div",{className:"flex justify",children:Object(x.jsxs)("div",{className:"flexwrap justifybetween alignitems",style:{width:"95vw"},children:[Object(x.jsx)("div",{className:"",children:Object(x.jsx)(S,{})}),Object(x.jsx)("div",{className:"flex justifystart ",children:Object(x.jsx)(w,{})}),Object(x.jsx)("div",{className:"",children:Object(x.jsx)(q,{})})]})}),Object(x.jsx)("div",{className:"flexwrap width100 alignitems",style:{height:"36vh"},children:Object(x.jsxs)("div",{className:"flexwrap alignitems justify width100",children:[Object(x.jsx)("div",{className:"logo ",children:Object(x.jsx)("img",{src:T,alt:"",style:{width:"7rem"},className:" "})}),Object(x.jsxs)("div",{className:"font600  padding2",children:[Object(x.jsx)("h1",{style:{color:"white"},children:" Z&J INVESMENTS LLC"}),Object(x.jsx)("ul",{style:{color:"#8B7619"},children:"Your Trusted Invesment Partner"})]})]})}),Object(x.jsx)("div",{className:" flex justify absolutebottom ",children:Object(x.jsx)(k,{})}),Object(x.jsx)("div",{className:"flex justify "})]})}var I=s(60),L=s.n(I),A=function(){return Object(x.jsx)("div",{className:"flex justify ",style:{marginTop:"1%"},children:Object(x.jsxs)("form",{className:"flexwrap contact-form width20",onSubmit:function(e){e.preventDefault(),L.a.sendForm("service_ey4ab2x","template_3de1jw9",e.target,"user_wv3K1hQDxcdMl9VBIJNVm").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),e.target.reset()},style:{width:"100px"},children:[Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("label",{htmlFor:"user_name",children:"Name"}),Object(x.jsx)("input",{type:"text",name:"user_name",id:"user_name"})]}),Object(x.jsx)("div",{className:"",children:Object(x.jsx)("label",{children:"Email"})}),Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("input",{type:"email",name:"user_email"}),Object(x.jsx)("label",{children:"Message"})]}),Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("textarea",{name:"message"}),Object(x.jsx)("input",{type:"submit",value:"Send"})]})]})})};s(91);function M(){return Object(x.jsxs)("div",{className:" flex justify ",style:{width:"100vw"},children:[Object(x.jsx)("script",{src:"https://kit.fontawesome.com/494ce4ee7f.js",crossorigin:"anonymous"}),Object(x.jsxs)("div",{className:"flex width30 justify alignitems",children:[Object(x.jsx)("div",{className:"socialbackground justify alignitems ",children:Object(x.jsxs)("a",{href:"/",style:{},className:" ",children:[" ",Object(x.jsx)("i",{class:"fab fa-facebook-square    social"})]})}),Object(x.jsx)("div",{className:"socialbackground justify alignitems ",children:Object(x.jsxs)("a",{href:"/",children:[" ",Object(x.jsx)("i",{class:"fab fa-twitter-square social"})]})}),Object(x.jsx)("div",{className:"socialbackground justify alignitems ",children:Object(x.jsx)("a",{href:"/",children:Object(x.jsx)("i",{class:"fab fa-instagram social"})})}),Object(x.jsx)("div",{className:"socialbackground justify alignitems ",children:Object(x.jsxs)("a",{href:"/",children:[" ",Object(x.jsx)("i",{class:"fas fa-envelope social",children:"  "})," "]})})]})]})}s(92);function W(){return Object(x.jsxs)("div",{className:"footer relative",children:[Object(x.jsx)("div",{className:"flex justify top",children:Object(x.jsx)("h3",{children:" Footer"})}),Object(x.jsx)("div",{className:"flex ",style:{width:"100%"},children:Object(x.jsx)(M,{})}),Object(x.jsxs)("div",{className:" flexwrap ",children:[Object(x.jsxs)("div",{className:"width30  flexwrap padding1",children:[Object(x.jsx)("div",{className:"padding1 ",children:"dfsdafIrure irure ullamco minim reprehenderit ea fugiat ex sunt esse"}),Object(x.jsxs)("div",{className:"flexcol justifyend  padding1",style:{color:"burlywood"},children:[Object(x.jsxs)("div",{className:"",id:"",children:["\u201cTell me and I forget, teach me and I may remember, involve me and I learn.\u201d \u2014",Object(x.jsx)("em",{children:"Benjamin Franklin"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{id:"app"}),Object(x.jsx)("a",{href:"https://munibkhanresume.tk/",target:"blank",className:"anchor",children:"@Munib Khan "})]})]}),Object(x.jsx)("div",{className:"padding2 width30",children:Object(x.jsx)(A,{})})]})]})}s(139);var E=s.p+"static/media/icon1.8dcb09e1.png",R=s.p+"static/media/icon2.1c06acfd.png",_=s.p+"static/media/icon3.7ac32440.png";function P(){return Object(x.jsx)("div",{className:"alignitem  flex justify width65",style:{maxWidth:"1200px"},children:Object(x.jsxs)("div",{className:"panel  justifybetween alignitems   ",children:[Object(x.jsxs)("div",{className:"pricing-plan threedhover",children:[Object(x.jsx)("img",{src:E,alt:"",className:"pricing-img"}),Object(x.jsx)("h2",{className:"pricing-header",style:{color:"#027002"},children:"Personal"}),Object(x.jsxs)("ul",{className:"pricing-features panelul",children:[Object(x.jsx)("li",{className:"pricing-features-item",children:"Start As Low As"}),Object(x.jsx)("li",{className:"pricing-features-item",children:"$100 - $500"})]}),Object(x.jsx)("span",{className:"pricing-price",children:"$100"}),Object(x.jsx)("a",{href:"#/",className:"pricing-button",children:"Sign up"})]}),Object(x.jsxs)("div",{className:"pricing-plan threedhover",children:[Object(x.jsx)("img",{src:R,alt:"",className:"pricing-img"}),Object(x.jsx)("h2",{className:"pricing-header",style:{color:"#027002"},children:"Medium"}),Object(x.jsxs)("ul",{className:"pricing-features panelul",children:[Object(x.jsx)("li",{className:"pricing-features-item",children:"Never sleeps"}),Object(x.jsx)("li",{className:"pricing-features-item",children:"$1000 - $ 10000"})]}),Object(x.jsx)("span",{className:"pricing-price",children:"$5000"}),Object(x.jsx)("a",{href:"#/",className:"pricing-button is-featured",children:"Sign up"})]}),Object(x.jsxs)("div",{className:"pricing-plan threedhover",children:[Object(x.jsx)("img",{src:_,alt:"",className:"pricing-img"}),Object(x.jsx)("h2",{className:"pricing-header",style:{color:"#027002"},children:"Enterprise"}),Object(x.jsxs)("ul",{className:"pricing-features panelul",children:[Object(x.jsx)("li",{className:"pricing-features-item",children:"Dedicated"}),Object(x.jsx)("li",{className:"pricing-features-item",children:"Simple scalability"})]}),Object(x.jsx)("span",{className:"pricing-price",children:"$10,000+"}),Object(x.jsx)("a",{href:"#/",className:"pricing-button",style:{backgroundColor:"#ff9800",color:"white"},children:"Sign up"})]})]})})}var $=s.p+"static/media/perfectcell.a1439f8f.jpg",B=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:" flex justify ",style:{color:"#284243",padding:"1%"},children:Object(x.jsx)("h1",{children:"Meet the TEAM"})}),Object(x.jsx)("div",{className:"flexwrap justify ",style:{padding:"1%"},children:Object(x.jsxs)("div",{className:"flexwrap justifyaround width60",style:{backgroundColor:"",maxWidth:"1300px"},children:[Object(x.jsxs)("div",{className:"card textalign",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"",alt:"",style:{width:"8rem",borderRadius:"50%"}})}),Object(x.jsx)("hr",{style:{width:"14.5rem"}}),Object(x.jsx)("div",{children:Object(x.jsx)("h2",{children:"Perfect Cell"})}),Object(x.jsx)("div",{style:{marginTop:"3%"},children:"Cupidatat velit enim anim pariatur magna nostrud est excepteur ea aute cillum est. Elit qui et exercitation consequat laborum."})]}),Object(x.jsxs)("div",{className:"card textalign",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"",alt:"",style:{width:"8rem",borderRadius:"50%"}})}),Object(x.jsx)("hr",{style:{width:"14.5rem"}}),Object(x.jsx)("div",{children:Object(x.jsx)("h2",{children:"Kid Buu"})}),Object(x.jsx)("div",{style:{marginTop:"3%"},children:"Deserunt ipsum tempor aute officia aute cupidatat occaecat cillum id laboris id nostrud."})]}),Object(x.jsxs)("div",{className:"card textalign",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:$,alt:"",style:{width:"8rem",minHeight:"11rem",borderRadius:"50%"}})}),Object(x.jsx)("hr",{style:{width:"14.5rem"}}),Object(x.jsx)("div",{style:{marginTop:"3%"},children:Object(x.jsx)("h2",{children:"Munib Khan"})}),Object(x.jsx)("div",{style:{marginTop:"3%"},children:"Full Stack Javascript/React Developer."})]})]})})]})};function F(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{className:"",id:"home",children:Object(x.jsx)(C,{})}),Object(x.jsx)("div",{className:"bod flex margin  relative ",style:{maxWidth:""},children:Object(x.jsx)("div",{className:" justify width70",style:{maxWidth:"1250px"},children:Object(x.jsx)(y,{})})}),Object(x.jsx)("div",{className:"width100 margintop10 cardcontainer ",style:{backgroundColor:""},children:Object(x.jsx)(B,{})}),Object(x.jsx)("div",{className:"flex justify margintop10",children:Object(x.jsx)("h1",{children:"Pricing Plan "})}),Object(x.jsx)("div",{className:" flex justify margintop ",children:Object(x.jsx)(P,{})}),Object(x.jsx)("div",{className:"margintop15",children:Object(x.jsx)(W,{})})]})}function D(e){return Object(x.jsx)("div",{className:"",children:Object(x.jsx)(F,{})})}function H(){return Object(x.jsx)("div",{})}l.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(D,{})}),document.getElementById("root"))},36:function(e,i,s){},37:function(e,i,s){},65:function(e,i,s){},66:function(e,i,s){},87:function(e,i,s){},88:function(e,i,s){},91:function(e,i,s){}},[[140,1,2]]]);
//# sourceMappingURL=main.f905a00c.chunk.js.map