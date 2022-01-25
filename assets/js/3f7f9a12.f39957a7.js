"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4005],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return y}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(o),y=n,d=u["".concat(l,".").concat(y)]||u[y]||h[y]||a;return o?r.createElement(d,i(i({ref:t},p),{},{components:o})):r.createElement(d,i({ref:t},p))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},75028:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=o(87462),n=o(63366),a=(o(67294),o(3905)),i=["components"],c={slug:"/polyglot/go/",title:"Go Wechaty",sidebar_label:"Go"},l=void 0,s={unversionedId:"polyglot/go/overview",id:"polyglot/go/overview",isDocsHomePage:!1,title:"Go Wechaty",description:"Go Wechaty",source:"@site/docs/polyglot/go/overview.md",sourceDirName:"polyglot/go",slug:"/polyglot/go/",permalink:"/docs/polyglot/go/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/go/overview.md",tags:[],version:"current",lastUpdatedBy:"Shraddha",lastUpdatedAt:1629862938,formattedLastUpdatedAt:"8/25/2021",frontMatter:{slug:"/polyglot/go/",title:"Go Wechaty",sidebar_label:"Go"},sidebar:"docs",previous:{title:"Python",permalink:"/docs/polyglot/python/"},next:{title:"Java",permalink:"/docs/polyglot/java/"}},p=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],h={toc:p};function u(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/go-wechaty"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty-Go-7de",alt:"Go Wechaty"}))),(0,a.kt)("p",null,"Go-Wechaty is the Go- Programming language client.Wechaty is already is implemented in TypeScript so can be easily translated to Go language as Wechaty has only three thousand (3,000) lines of the TypeScript code, they are well designed and de-coupled by the wechaty-puppet abstraction.Wechaty already has an ecosystem in TypeScript, so you will not have to implement everything in Go, especially, in the Feb 2020, we have finished the grpc service abstracting module with the wechaty-puppet-service implementation.For more information on the Go-Wechaty you can visit",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/go-wechaty"},"Github Repo"),"\nMore details on  Go Wechaty And WeChat Web Protocol can be ",(0,a.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/04/16/go-wechaty-use-web/"},"check here"),".\nThe ",(0,a.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/polyglot/diy/"},"Polyglot Architecture Diagram")," illustrates on how the Wechaty-Go can be implemented on the already existing TypeScript Wechaty ecosystem."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"You can run the below commands for starting the Go-Wechaty.Also for more information you can check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/go-wechaty-getting-started"},"Go-Wechaty getting started"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:wechaty/go-wechaty-getting-started.git\ncd go-wechaty-getting-started\nmake install\n# set token\nexport WECHATY_PUPPET_SERVICE_TOKEN=your_token_at_here\n# Run the bot\nmake bot\n")),(0,a.kt)("h2",{id:"blogs"},"Blogs"),(0,a.kt)("p",null,"Here in this section are some of the blogs related to Go-Wechaty."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/04/16/go-wechaty-use-web/"},"Go-Wechaty and web protocol to develop robots, @dchaofei, Apr 16, 2021"))),(0,a.kt)("h2",{id:"history"},"History"),(0,a.kt)("p",null,"Check out the links below for Beta releases of Go-Wechaty also for more information on the ."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2020/06/29/go-wechaty-beta-released/"},"Go Wechaty Beta Released!, dchaofei, Jun 29, 2020"))),(0,a.kt)("h2",{id:"maintainers"},"Maintainers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/dingdayu"},"@dingdayu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/dchaofei"},"@dchaofei"))))}u.isMDXComponent=!0}}]);