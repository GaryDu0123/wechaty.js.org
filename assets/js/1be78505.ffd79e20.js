"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9514,7769,8683],{38704:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(67294),r=a(3905),l=a(46291),o=a(34328),c=a(86010),i=a(6358),m=a(93783),s=a(77898),d=a(98030),u=a(87462),h=function(e){return n.createElement("svg",(0,u.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=a(24973),E=a(63366),b=a(36742),f=a(13919),v=a(18617),g="menuLinkText_OKON",C=["items"],y=["item"],k=["item","onItemClick","activePath"],w=["item","onItemClick","activePath"],_=function e(t,a){return"link"===t.type?(0,i.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},Z=(0,n.memo)((function(e){var t=e.items,a=(0,E.Z)(e,C);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(T,(0,u.Z)({key:t,item:e},a))})))}));function T(e){var t=e.item,a=(0,E.Z)(e,y);return"category"===t.type?0===t.items.length?null:n.createElement(S,(0,u.Z)({item:t},a)):n.createElement(N,(0,u.Z)({item:t},a))}function S(e){var t,a=e.item,r=e.onItemClick,l=e.activePath,o=(0,E.Z)(e,k),m=a.items,s=a.label,d=a.collapsible,h=_(a,l),p=(0,i.uR)({initialState:function(){return!!d&&(!h&&a.collapsed)}}),b=p.collapsed,f=p.setCollapsed,v=p.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,l=(0,i.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a])}({isActive:h,collapsed:b,setCollapsed:f}),n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,"menu__list-item",{"menu__list-item--collapsed":b})},n.createElement("a",(0,u.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&h},t[g]=!d,t)),onClick:d?function(e){e.preventDefault(),v()}:void 0,href:d?"#":void 0},o),s),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.createElement(Z,{items:m,tabIndex:b?-1:0,onItemClick:r,activePath:l})))}function N(e){var t=e.item,a=e.onItemClick,r=e.activePath,l=(0,E.Z)(e,w),o=t.href,m=t.label,s=_(t,r);return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,"menu__list-item"),key:m},n.createElement(b.Z,(0,u.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),"aria-current":s?"page":void 0,to:o},(0,f.Z)(o)&&{onClick:a},l),(0,f.Z)(o)?m:n.createElement("span",null,m,n.createElement(v.Z,null))))}var I="sidebar_a3j0",M="sidebarWithHideableNavbar_VlPv",x="sidebarHidden_OqfG",F="sidebarLogo_hmkv",B="menu_cyFh",P="menuWithAnnouncementBar_+O1J",L="collapseSidebarButton_eoK2",H="collapseSidebarButtonIcon_e+kA";function D(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",L),onClick:t},n.createElement(h,{className:H}))}function A(e){var t,a,r=e.path,l=e.sidebar,o=e.onCollapse,m=e.isHidden,u=function(){var e=(0,i.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,s.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),h=(0,i.LU)(),p=h.navbar.hideOnScroll,E=h.hideableSidebar,b=(0,i.nT)().isClosed;return n.createElement("div",{className:(0,c.Z)(I,(t={},t[M]=p,t[x]=m,t))},p&&n.createElement(d.Z,{tabIndex:-1,className:F}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",B,(a={},a[P]=!b&&u,a))},n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:l,activePath:r}))),E&&n.createElement(D,{onClick:o}))}var W=function(e){var t=e.toggleSidebar,a=e.sidebar,r=e.path;return n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:a,activePath:r,onItemClick:function(){return t()}}))};function R(e){return n.createElement(i.Cv,{component:W,props:e})}var O=n.memo(A),z=n.memo(R);function G(e){var t=(0,m.Z)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(O,e),r&&n.createElement(z,e))}var Y=a(96845),q=a(24608),J=a(5977),j="backToTopButton_i9tI",U="backToTopButtonShow_wCmF";function K(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Q=function(){var e,t=(0,J.TH)(),a=K(),r=a.smoothScrollTop,l=a.cancelScrollToTop,o=(0,n.useState)(!1),i=o[0],m=o[1];return(0,s.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||l(),a<300)m(!1);else if(n){var r=document.documentElement.scrollHeight;a+window.innerHeight<r&&m(!0)}else m(!1)}}),[t]),n.createElement("button",{className:(0,c.Z)("clean-btn",j,(e={},e[U]=i,e)),type:"button",onClick:function(){return r()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},X={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"},V=a(99105);function $(e){var t,a,l,m=e.currentDocRoute,s=e.versionMetadata,d=e.children,u=s.pluginId,E=s.version,b=m.sidebar,f=b?s.docsSidebars[b]:void 0,v=(0,n.useState)(!1),g=v[0],C=v[1],y=(0,n.useState)(!1),k=y[0],w=y[1],_=(0,n.useCallback)((function(){k&&w(!1),C(!g)}),[k]);return n.createElement(o.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:E,tag:(0,i.os)(u,E)}},n.createElement("div",{className:X.docPage},n.createElement(Q,null),f&&n.createElement("aside",{className:(0,c.Z)(X.docSidebarContainer,(t={},t[X.docSidebarContainerHidden]=g,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(X.docSidebarContainer)&&g&&w(!0)}},n.createElement(G,{key:b,sidebar:f,path:m.path,onCollapse:_,isHidden:k}),k&&n.createElement("div",{className:X.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:_,onClick:_},n.createElement(h,{className:X.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(X.docMainContainer,(a={},a[X.docMainContainerEnhanced]=g||!f,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",X.docItemWrapper,(l={},l[X.docItemWrapperEnhanced]=g,l))},n.createElement(r.Zo,{components:Y.Z},d)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,o=t.find((function(e){return(0,J.LX)(r.pathname,e)}));return o?n.createElement(n.Fragment,null,n.createElement(V.Z,null,n.createElement("html",{className:a.className})),n.createElement($,{currentDocRoute:o,versionMetadata:a},(0,l.Z)(t,{versionMetadata:a}))):n.createElement(q.default,e)}},24608:function(e,t,a){a.r(t);var n=a(67294),r=a(34328),l=a(24973);t.default=function(){return n.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},49456:function(e,t,a){var n=a(67294);t.Z=function(){return n.createElement("main",{id:"body"},n.createElement("footer",{id:"footer"},n.createElement("div",{id:"footerUpper"},n.createElement("div",{id:"footerFirstColumn"},n.createElement("p",{id:"footerColumnEmphasis"}," Docs "),n.createElement("p",{id:"footerColumnOne"},n.createElement("a",{href:"docs/wechaty"}," Introduction "),n.createElement("br",null),n.createElement("a",{href:"docs/tutorials/"}," Tutorials "),n.createElement("br",null),n.createElement("a",{href:"docs/howto/"}," How-to Guides "),n.createElement("br",null),n.createElement("a",{href:"docs/references/"}," References "),n.createElement("br",null),n.createElement("a",{href:"docs/explanations/"}," Explanations "),n.createElement("br",null))),n.createElement("div",{id:"footerSecondColumn"},n.createElement("p",{id:"footerColumnEmphasis"}," Community "),n.createElement("p",{id:"footerColumnTwo"},n.createElement("a",{href:"https://gitter.im/wechaty/wechaty"}," Gitter "),n.createElement("br",null),n.createElement("a",{href:"https://github.com/wechaty/wechaty/discussions"}," Discussion "),n.createElement("br",null),n.createElement("a",{href:"https://stackoverflow.com/questions/tagged/wechaty"}," Stack Overflow "),n.createElement("br",null),n.createElement("a",{href:"https://t.me/wechaty"}," Telegram "),n.createElement("br",null),n.createElement("a",{href:"https://twitter.com/chatieio"}," Twitter "),n.createElement("br",null),n.createElement("a",{href:"https://bit.ly/3aoLE86"}," YouTube "),n.createElement("br",null),n.createElement("a",{href:"https://opencollective.com/wechaty"}," Open Collective "),n.createElement("br",null),n.createElement("a",{href:"https://bit.ly/33Dfkuf"}," Google Drive "),n.createElement("br",null),n.createElement("a",{href:"https://photos.app.goo.gl/LkmYMWypGoJdyvEJ6"}," Photo Album "),n.createElement("br",null),n.createElement("a",{href:"https://bit.ly/2zpi2XG"}," Meeting Notes "),n.createElement("br",null),n.createElement("a",{href:"https://bit.ly/2J6ziXa"}," Hall of Fame "),n.createElement("br",null))),n.createElement("div",{id:"footerThirdColumn"},n.createElement("div",{id:"footerColumnEmphasisFirst"},n.createElement("p",{id:"footerColumnEmphasis"}," More ")),n.createElement("p",{id:"footerColumnThree"},n.createElement("a",{href:"https://wechaty.js.org/blog/"}," Blog "),n.createElement("br",null),n.createElement("a",{href:"http://www.bot5.ml/blogs/chatbot-0-1/"}," Book "),n.createElement("br",null),n.createElement("a",{href:"https://wechaty.js.org/docs/marketing/branding/"}," Branding "),n.createElement("br",null),n.createElement("a",{href:"press"}," Press "),n.createElement("br",null),n.createElement("a",{href:"https://github.com/wechaty/wechaty#readme"}," GitHub "),n.createElement("br",null),n.createElement("a",{href:"https://chatie.statuspage.io/"}," Status "),n.createElement("br",null))),n.createElement("div",{id:"scannerWrapper"},n.createElement("img",{alt:"Wechaty QR Scanner",id:"scanner",src:"/img/wechatyqrcode.webp"}),n.createElement("strong",{id:"footerColumnEmphasis"},"Join our WeChat Room",n.createElement("br",null)),n.createElement("p",{id:"scannerText"},'You are welcome to join our Wechaty Developers\' Home by scanning the above QR code, then send the secret code "wechaty" to Friday.BOT.'))),n.createElement("div",{id:"wechatyLogoFooter"},n.createElement("img",{alt:"Wechaty Logo",src:"/img/wechatylogofooter.webp"})),n.createElement("p",{id:"codeOfConductText"},n.createElement("a",null," Code of Conduct ")),n.createElement("p",{id:"copyrightText"},"Copyright \xa9 2016-2021 Wechaty Contributors")))}}}]);