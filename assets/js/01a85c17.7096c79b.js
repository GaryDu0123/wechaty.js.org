"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4013,8683],{46165:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(63366),a=r(67294),l=r(86010),c=r(34328),o=r(36742),i="sidebar_q+wC",s="sidebarItemTitle_9G5K",m="sidebarItemList_6T4b",u="sidebarItem_cjdF",h="sidebarItemLink_zyXk",d="sidebarItemLinkActive_wcJs",f=r(24973);function E(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),a.createElement("ul",{className:m},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:u},a.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:h,activeClassName:d},e.title))}))))}var b=r(571),p=["sidebar","toc","children"];var g=function(e){var t=e.sidebar,r=e.toc,o=e.children,i=(0,n.Z)(e,p),s=t&&t.items.length>0;return a.createElement(c.Z,i,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},s&&a.createElement("aside",{className:"col col--3"},a.createElement(E,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),r&&a.createElement("div",{className:"col col--2"},a.createElement(b.Z,{toc:r})))))}},70094:function(e,t,r){r.r(t);var n=r(67294),a=r(46165),l=r(6584),c=r(6358);t.default=function(e){var t=e.tags,r=e.sidebar,o=(0,c.MA)();return n.createElement(a.Z,{title:o,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:r},n.createElement("h1",null,o),n.createElement(l.Z,{tags:Object.values(t)}))}},571:function(e,t,r){r.d(t,{r:function(){return d},Z:function(){return f}});var n=r(67294),a=r(86010),l=r(6358);function c(e){var t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function o(e){var t,r=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=n.find((function(e){return c(e).top>=r}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(a))?a:null!=(t=n[n.indexOf(a)-1])?t:null:n[n.length-1]}function i(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),r=i();(0,n.useEffect)((function(){var n=e.linkClassName,a=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:r.current}),c=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,r){if(r){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,r])},m="tableOfContents_vrFS",u="table-of-contents__link",h={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function d(e){var t=e.toc,r=e.isChild;return t.length?n.createElement("ul",{className:r?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(d,{isChild:!0,toc:e.children}))}))):null}var f=function(e){var t=e.toc;return s(h),n.createElement("div",{className:(0,a.Z)(m,"thin-scrollbar")},n.createElement(d,{toc:t}))}},37211:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(67294),a=r(86010),l=r(36742),c="tag_WK-t",o="tagRegular_LXbV",i="tagWithCount_S5Zl";var s=function(e){var t,r=e.permalink,s=e.name,m=e.count;return n.createElement(l.Z,{href:r,className:(0,a.Z)(c,(t={},t[o]=!m,t[i]=m,t))},s,m&&n.createElement("span",null,m))}},6584:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294),a=r(37211),l=r(6358),c="tag_7kA+";function o(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:c},n.createElement(a.Z,e))}))),n.createElement("hr",null))}var i=function(e){var t=e.tags,r=(0,l.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},r.map((function(e){return n.createElement(o,{key:e.letter,letterEntry:e})})))}},49456:function(e,t,r){var n=r(67294);t.Z=function(){return n.createElement("main",{id:"body"},n.createElement("footer",{id:"footer"},n.createElement("div",{id:"footerUpper"},n.createElement("div",{id:"footerFirstColumn"},n.createElement("p",{id:"footerColumnEmphasis"}," Docs "),n.createElement("p",{id:"footerColumnOne"},n.createElement("a",{href:"docs/wechaty"}," Introduction "),n.createElement("br",null),n.createElement("a",{href:"docs/tutorials/"}," Tutorials "),n.createElement("br",null),n.createElement("a",{href:"docs/howto/"}," How-to Guides "),n.createElement("br",null),n.createElement("a",{href:"docs/references/"}," References "),n.createElement("br",null),n.createElement("a",{href:"docs/explanations/"}," Explanations "),n.createElement("br",null))),n.createElement("div",{id:"footerSecondColumn"},n.createElement("p",{id:"footerColumnEmphasis"}," Community "),n.createElement("p",{id:"footerColumnTwo"},n.createElement("a",{href:"https://gitter.im/wechaty/wechaty"}," Gitter "),n.createElement("br",null),n.createElement("a",{href:"https://github.com/wechaty/wechaty/discussions"}," Discussion "),n.createElement("br",null),n.createElement("a",{href:"https://stackoverflow.com/questions/tagged/wechaty"}," Stack Overflow "),n.createElement("br",null),n.createElement("a",{href:"https://t.me/wechaty"}," Telegram "),n.createElement("br",null),n.createElement("a",{href:"https://twitter.com/chatieio"}," Twitter "),n.createElement("br",null),n.createElement("a",{href:"https://bit.ly/3aoLE86"}," YouTube "),n.createElement("br",null),n.createElement("a",{href:"https://opencollective.com/wechaty"}," Open Collective "),n.createElement("br",null),n.createElement("a",{href:"https://bit.ly/33Dfkuf"}," Google Drive "),n.createElement("br",null),n.createElement("a",{href:"https://photos.app.goo.gl/LkmYMWypGoJdyvEJ6"}," Photo Album "),n.createElement("br",null),n.createElement("a",{href:"https://bit.ly/2zpi2XG"}," Meeting Notes "),n.createElement("br",null),n.createElement("a",{href:"https://bit.ly/2J6ziXa"}," Hall of Fame "),n.createElement("br",null))),n.createElement("div",{id:"footerThirdColumn"},n.createElement("div",{id:"footerColumnEmphasisFirst"},n.createElement("p",{id:"footerColumnEmphasis"}," More ")),n.createElement("p",{id:"footerColumnThree"},n.createElement("a",{href:"https://wechaty.js.org/blog/"}," Blog "),n.createElement("br",null),n.createElement("a",{href:"http://www.bot5.ml/blogs/chatbot-0-1/"}," Book "),n.createElement("br",null),n.createElement("a",{href:"https://wechaty.js.org/docs/marketing/branding/"}," Branding "),n.createElement("br",null),n.createElement("a",{href:"press"}," Press "),n.createElement("br",null),n.createElement("a",{href:"https://github.com/wechaty/wechaty#readme"}," GitHub "),n.createElement("br",null),n.createElement("a",{href:"https://chatie.statuspage.io/"}," Status "),n.createElement("br",null))),n.createElement("div",{id:"scannerWrapper"},n.createElement("img",{alt:"Wechaty QR Scanner",id:"scanner",src:"/img/wechatyqrcode.webp"}),n.createElement("strong",{id:"footerColumnEmphasis"},"Join our WeChat Room",n.createElement("br",null)),n.createElement("p",{id:"scannerText"},'You are welcome to join our Wechaty Developers\' Home by scanning the above QR code, then send the secret code "wechaty" to Friday.BOT.'))),n.createElement("div",{id:"wechatyLogoFooter"},n.createElement("img",{alt:"Wechaty Logo",src:"/img/wechatylogofooter.webp"})),n.createElement("p",{id:"codeOfConductText"},n.createElement("a",null," Code of Conduct ")),n.createElement("p",{id:"copyrightText"},"Copyright \xa9 2016-2021 Wechaty Contributors")))}}}]);