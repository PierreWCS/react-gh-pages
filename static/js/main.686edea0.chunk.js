(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"name":"Wild Beers","description":"Fake beer shop with the most commons features of a shop (cart, account, orders, products). There is also an admin section of the website, where the user can manage products, orders, messages and upload files directly from his interface.","technologies":"React, Node, Express, MySQL","link":"https://github.com/PierreWCS/beer-shop","images":[{"image":"wildBeers/CaptureHomepage.jpg","legend":"Home page"},{"image":"wildBeers/captureAbout.jpg","legend":"About page"},{"image":"wildBeers/captureLogin.PNG","legend":"Login page"},{"image":"wildBeers/captureSales.png","legend":"Admin page"},{"image":"wildBeers/captureAdmin.png","legend":"Admin uploads"},{"image":"wildBeers/captureMsgs.png","legend":"Admin messages"}]},{"name":"Solo blackjack","description":"Web application for playing blackjack against the Bank. User can bet an amount of coins every round, and as the official rules, he gets the rewards if he wins","technologies":"React","link":"https://github.com/PierreWCS/blackjack","images":[{"image":"blackjack/blackjackHomepage.jpg","legend":"Home page"},{"image":"blackjack/my-blackjack.jpg","legend":"Game"},{"image":"blackjack/blackjackWin.jpg","legend":"Victory"}]},[]]')},,,,,,,function(e,a,t){e.exports=t.p+"static/media/WildBeersAbout.17cc62f3.png"},function(e,a,t){e.exports=t.p+"static/media/my-blackjack - Copie.86e4f0bc.PNG"},function(e,a,t){e.exports=t.p+"static/media/mysiege.d3a12409.PNG"},function(e,a,t){e.exports=t.p+"static/media/wildbeers.e8a81de3.PNG"},,,function(e,a,t){e.exports=t(53)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},,,,,,function(e,a,t){var r={"./WildBeersAbout.png":15,"./blackjack.PNG":41,"./blackjack/blackjackHomepage.jpg":42,"./blackjack/blackjackWin.jpg":43,"./blackjack/my-blackjack.jpg":44,"./my-blackjack - Copie.PNG":16,"./mysiege.PNG":17,"./wildBeers/CaptureHomepage.jpg":45,"./wildBeers/captureAbout.jpg":46,"./wildBeers/captureAdmin.png":47,"./wildBeers/captureLogin.PNG":48,"./wildBeers/captureMsgs.png":49,"./wildBeers/captureSales.png":50,"./wildbeers.PNG":18};function c(e){var a=n(e);return t(a)}function n(e){if(!t.o(r,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=n,e.exports=c,c.id=40},function(e,a,t){e.exports=t.p+"static/media/blackjack.39be92a0.PNG"},function(e,a,t){e.exports=t.p+"static/media/blackjackHomepage.6b3616c5.jpg"},function(e,a,t){e.exports=t.p+"static/media/blackjackWin.83f4062e.jpg"},function(e,a,t){e.exports=t.p+"static/media/my-blackjack.bf53ce19.jpg"},function(e,a,t){e.exports=t.p+"static/media/CaptureHomepage.8ddfa14e.jpg"},function(e,a,t){e.exports=t.p+"static/media/captureAbout.c25609cb.jpg"},function(e,a,t){e.exports=t.p+"static/media/captureAdmin.900c278b.png"},function(e,a,t){e.exports=t.p+"static/media/captureLogin.24f55dbf.PNG"},function(e,a,t){e.exports=t.p+"static/media/captureMsgs.2de222fd.png"},function(e,a,t){e.exports=t.p+"static/media/captureSales.8f5ddfb5.png"},,function(e,a){},function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(6),l=t.n(n),o=(t(26),t(27),t(4)),s=(t(28),t(2)),i=t(3),m=t(20),p=(t(34),t(19)),d=(t(15),function(e){var a=e.imagesData;return c.a.createElement(p.Carousel,null,a?a.images.map((function(e,a){return c.a.createElement("div",{key:a},c.a.createElement("img",{src:t(40)("./".concat(e.image)),alt:""}),c.a.createElement("p",{className:"legend"},e.legend))})):null)}),u=(t(51),function(e){var a=e.setProjectDetails,t=e.imagesData;return c.a.createElement("div",{className:"projectDetailsContainer"},c.a.createElement("button",{className:"closeDetailsButton",onClick:function(){return a(!1)}},"Close"),c.a.createElement("div",{className:"firstColDetails"},c.a.createElement(d,{imagesData:t})),c.a.createElement("div",{className:"secondColDetails"},c.a.createElement("h2",null,t.name,"."),c.a.createElement("h3",null,"Description."),c.a.createElement("p",null,t.description),c.a.createElement("h3",null,"Technologies."),c.a.createElement("p",null,t.technologies),c.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.link,className:"githubLinkDetails"},"See on Github")))}),g=t(8),E=(t(52),function(){var e=Object(r.useState)(null),a=Object(o.a)(e,2),n=a[0],l=a[1],p=Object(r.useState)(!1),d=Object(o.a)(p,2),E=d[0],f=d[1],N=Object(r.useState)(!1),j=Object(o.a)(N,2),k=j[0],b=j[1];return c.a.createElement("div",{className:"homePageContainer"},c.a.createElement("div",{className:"header",onMouseMove:function(e){return function(e){var a=(window.innerWidth/1.05-e.clientX)/1.1;a>100&&a<1870&&l(a)}(e)}},c.a.createElement("div",{className:"headerContent"},c.a.createElement(s.a,{style:{position:"absolute",zIndex:"0",left:n||"10%",top:"15%",transition:"transform ease 200ms"},color:"orange",icon:i.d,id:"techIcons",className:"fa-4x reactIconHeader"}),c.a.createElement("div",{style:{zIndex:1},className:"columnOneHeader"},c.a.createElement("p",{className:"nameTitle"},"Pierre"),c.a.createElement("p",{className:"nameTitle"},"Legrain."),c.a.createElement("hr",{className:"separatorHeader"}),c.a.createElement("div",{className:"iconContainer"},c.a.createElement("a",{style:{color:"inherit"},href:"https://github.com/PierreWCS",target:"_blank",rel:"noopener noreferrer",className:"linkIconHeader"},c.a.createElement(s.a,{icon:i.a,className:"fa-2x iconHeader",style:{marginRight:"25px"}})),c.a.createElement("a",{style:{color:"inherit"},href:"https://www.linkedin.com/in/pierre-legrain/",target:"_blank",rel:"noopener noreferrer",className:"linkIconHeader"},c.a.createElement(s.a,{icon:i.b,className:"fa-2x iconHeader"})))),c.a.createElement("div",{style:{zIndex:1},className:"columnTwoHeader"},c.a.createElement("p",{className:"introHeader"},"- Introduction"),c.a.createElement("h2",{className:"subtitleHeader"},"Front-End developer based in France."),c.a.createElement("p",{className:"subtitleHeaderText"},"React.JS and Node.JS specialized.")))),c.a.createElement("div",{className:"aboutContainer"},c.a.createElement("div",{className:"aboutContent"},c.a.createElement("div",{className:"columnAboutContainer"},c.a.createElement("div",{className:"firstColumnAbout"},c.a.createElement("p",{className:"introHeader"},"- Contact"),c.a.createElement("h2",{style:{color:"#EBEBEC",width:"60%"}},"Any type of JavaScript & contact."),c.a.createElement("p",{style:{color:"#ACADB2",width:"60%"}},"Send me an email."),c.a.createElement("p",{style:{color:"#FFAF29",textDecoration:"underline"}},"pierrelegrain45@gmail.com")),c.a.createElement("div",{className:"secColumnAbout"},c.a.createElement("h3",{style:{color:"#EBEBEC"}},"You can't use up creativity, the more you use, more you have in your significant mind."),c.a.createElement("p",{style:{color:"#ACADB2"}},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aut, dolor dolorum eligendi est et expedita fugiat laborum magni nisi non optio pariatur recusandae."),c.a.createElement("div",{className:"expProjectsContainer"},c.a.createElement("p",{className:"numberExpProject"},"1"),c.a.createElement("p",{className:"textExpProject"},"year of experiences"),c.a.createElement("p",{className:"numberExpProject"},"14"),c.a.createElement("p",{className:"textExpProject"},"projects")))))),c.a.createElement("div",{className:"projects"},c.a.createElement("div",{className:"projectsContent"},c.a.createElement("div",{className:"projectsSquareContainer"},c.a.createElement("div",{className:"projectsSquare orangeSquare"},c.a.createElement("div",{className:"iconTextProjectSquare"},c.a.createElement(s.a,{style:{marginTop:"20px"},icon:i.d,className:"fa-2x"}),c.a.createElement("div",{className:"projectSquareTextContainer"},c.a.createElement("p",{className:"projectSquareTitle"},"React."),c.a.createElement("p",{style:{margin:0,fontSize:"12px"}},"6 projects")))),c.a.createElement("div",{className:"projectsSquare"},c.a.createElement("div",{className:"iconTextProjectSquare"},c.a.createElement(s.a,{style:{marginTop:"20px"},icon:i.c,className:"fa-2x"}),c.a.createElement("div",{className:"projectSquareTextContainer"},c.a.createElement("p",{className:"projectSquareTitle"},"Node."),c.a.createElement("p",{style:{margin:0,fontSize:"12px",color:"#ACADB2"}},"3 projects")))),c.a.createElement("div",{className:"projectsSquare"},c.a.createElement("div",{className:"iconTextProjectSquare"},c.a.createElement(s.a,{style:{marginTop:"20px"},icon:m.a,className:"fa-2x",color:"white"}),c.a.createElement("div",{className:"projectSquareTextContainer"},c.a.createElement("p",{className:"projectSquareTitle"},"React Native."),c.a.createElement("p",{style:{margin:0,fontSize:"12px",color:"#ACADB2"}},"2 projects"))))),c.a.createElement("div",{className:"selectedProjects"},E?c.a.createElement(u,{setProjectDetails:f,imagesData:k}):null,c.a.createElement("div",{className:"selectedProjectsContent"},c.a.createElement("div",{className:"firstColumnSelectedProjects"},c.a.createElement("div",{className:"portfolioText"},c.a.createElement("p",{style:{margin:"5px 0"}},"- Portfolio"),c.a.createElement("h2",{style:{width:"250px"}},"All creative works, selected projects."),c.a.createElement("p",{className:"projectsLastMonthsText"},"Here are some of the projects I have been working last months.")),c.a.createElement("div",{className:"projectCard cardBeers",onClick:function(){b(g[0]),f(!0)}},c.a.createElement("div",{className:"projectCardText"},c.a.createElement("h2",{style:{margin:0}},"Wild Beers."),c.a.createElement("p",{style:{fontSize:"12px"}},"Branding, development")),c.a.createElement("img",{className:"projectCardImage",src:t(18),alt:"blackjack"}),c.a.createElement("p",{className:"clickToSeeProject"},"Click for more details"))),c.a.createElement("div",{className:"secondColumnSelectedProjects"},c.a.createElement("div",{className:"projectCard"},c.a.createElement("div",{className:"projectCardText"},c.a.createElement("h2",{style:{margin:0}},"My Siege."),c.a.createElement("p",{style:{fontSize:"12px"}},"Api, Development")),c.a.createElement("img",{className:"projectCardImage",src:t(17),alt:"blackjack"}),c.a.createElement("p",{className:"clickToSeeProject"},"Click for more details")),c.a.createElement("div",{className:"projectCard",onClick:function(){b(g[1]),f(!0)}},c.a.createElement("div",{className:"projectCardText"},c.a.createElement("h2",{style:{margin:0}},"My Blackjack."),c.a.createElement("p",{style:{fontSize:"12px"}},"Game, development")),c.a.createElement("img",{className:"projectCardImage",src:t(16),alt:"blackjack"}),c.a.createElement("p",{className:"clickToSeeProject"},"Click for more details"))))))),c.a.createElement("footer",null,c.a.createElement("div",{className:"footerContent"},c.a.createElement("div",{className:"firstColumnFooter"},c.a.createElement("p",null,"Looking for a front-end developer?"),c.a.createElement("p",null,"Let's talk about it."),c.a.createElement("p",{style:{color:"#FFAF29",textDecoration:"underline"}},"pierrelegrain45@gmail.com")),c.a.createElement("div",{className:"secondColumnFooter"},c.a.createElement("h3",{style:{margin:"10px"}},"Find me."),c.a.createElement("hr",{className:"footerSeparator"}),c.a.createElement("div",{className:"footerIconsContainer"},c.a.createElement("a",{href:"https://github.com/PierreWCS",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(s.a,{color:"#EBEBEC",icon:i.a,className:"fa-2x iconFooter"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/pierre-legrain/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(s.a,{color:"#EBEBEC",icon:i.b,className:"fa-2x iconFooter"})))))))});var f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.686edea0.chunk.js.map