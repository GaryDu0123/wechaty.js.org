"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6073],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),o=n(79443);var r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),i="tabItem_vU9c",p="tabItemActive_cw6a";var s=function(e){var t,n=e.lazy,o=e.block,s=e.defaultValue,u=e.values,c=e.groupId,m=e.className,d=a.Children.toArray(e.children),h=null!=u?u:d.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=s?s:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,k=r(),b=k.tabGroupChoices,w=k.setTabGroupChoices,f=(0,a.useState)(g),N=f[0],y=f[1],v=[];if(null!=c){var _=b[c];null!=_&&_!==N&&h.some((function(e){return e.value===_}))&&y(_)}var T=function(e){var t=e.currentTarget,n=v.indexOf(t),a=h[n].value;y(a),null!=c&&(w(c,a),setTimeout((function(){var e,n,a,o,r,l,i,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,l=window,i=l.innerHeight,s=l.innerWidth,n>=0&&r<=s&&o<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case"ArrowLeft":var o=v.indexOf(e.target)-1;n=v[o]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},m)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":N===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(d.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},70618:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=n(55064),i=n(58215),p=["components"],s={title:"Tuling 123 Bot"},u=void 0,c={unversionedId:"examples/professional/tuling123-bot",id:"examples/professional/tuling123-bot",isDocsHomePage:!1,title:"Tuling 123 Bot",description:"Powered by Wechaty",source:"@site/docs/examples/professional/tuling123-bot.mdx",sourceDirName:"examples/professional",slug:"/examples/professional/tuling123-bot",permalink:"/docs/examples/professional/tuling123-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/examples/professional/tuling123-bot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan (\u674e\u5353\u6853)",lastUpdatedAt:1631790719,formattedLastUpdatedAt:"9/16/2021",frontMatter:{title:"Tuling 123 Bot"},sidebar:"docs",previous:{title:"Ctrl C Signal Bot",permalink:"/docs/examples/professional/ctrl-c-signal-bot"},next:{title:"Overview",permalink:"/docs/howto/"}},m=[{value:"Try out the bot",id:"try-out-the-bot",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Getting started",id:"getting-started",children:[{value:"1. Clone the repository",id:"1-clone-the-repository",children:[]},{value:"2. Install dependencies",id:"2-install-dependencies",children:[]},{value:"3. Run the bot",id:"3-run-the-bot",children:[]}]},{value:"Building the bot",id:"building-the-bot",children:[{value:"1. Initialize project",id:"1-initialize-project",children:[]},{value:"2. Install dependencies",id:"2-install-dependencies-1",children:[]},{value:"3. Write code for bot",id:"3-write-code-for-bot",children:[]}]},{value:"Running the bot",id:"running-the-bot",children:[]},{value:"References",id:"references",children:[]}],d={toc:m};function h(e){var t=e.components,n=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Wechaty/wechaty"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.javascript.com/"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-JavaScript-blue.svg",alt:"JavaScript"}))),(0,r.kt)("p",null,"Tuling bot is a bot which can talk with you using ",(0,r.kt)("a",{parentName:"p",href:"http://www.turingapi.com/"},"Tuling123.com"),"."),(0,r.kt)("p",null,"This tutorial is a demonstration of how to use this bot."),(0,r.kt)("h2",{id:"try-out-the-bot"},"Try out the bot"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/github/sbis04/wechaty-tuling123-bot/tree/main/?fontsize=14&hidenavigation=1&theme=dark"},(0,r.kt)("img",{parentName:"a",src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wechaty-tuling123-bot"}))),(0,r.kt)("p",null,"You can try out the Tuling123 bot using this interactive CodeSandbox."),(0,r.kt)("p",null,"Just scan the generated QR code with ",(0,r.kt)("strong",{parentName:"p"},"WeChat")," app, and you are ready to play with the bot!"),(0,r.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/sbis04/wechaty-tuling123-bot/tree/main/?fontsize=12&hidenavigation=1&module=%2Ftuling123-bot.js&theme=dark",title:"tuling123-bot",sandbox:"allow-forms allow-modals allow-popups allow-same-origin allow-scripts"}),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v16+"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," v0.40+")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"You should have ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," installed on your system. If you do not have ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," installed (or have a version below 12), then you need to install the latest version of ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," by following the links below:"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Node.js installation docs")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("p",{parentName:"blockquote"},"Installation guide for ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," on other platforms can be found ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"here"),".")))),(0,r.kt)("p",null,"You can head over to the ",(0,r.kt)("a",{parentName:"p",href:"#building-the-bot"},"Building the bot")," section to learn how to build the bot on your own."),(0,r.kt)("p",null,"Otherwise, if you just want to try out the bot on your local system, follow the steps below:"),(0,r.kt)("h3",{id:"1-clone-the-repository"},"1. Clone the repository"),(0,r.kt)("p",null,"Use the following commands to clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"GitHub repository")," and navigate to the directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/wechaty/wechaty-getting-started.git\ncd wechaty-getting-started\n")),(0,r.kt)("h3",{id:"2-install-dependencies"},"2. Install dependencies"),(0,r.kt)("p",null,"You can install the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," packages required for running the bot, using this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")),(0,r.kt)("h3",{id:"3-run-the-bot"},"3. Run the bot"),(0,r.kt)("p",null,"You have to ",(0,r.kt)("inlineCode",{parentName:"p"},"export/set")," the environment variables:"),(0,r.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n"))),(0,r.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There are various ",(0,r.kt)("strong",{parentName:"p"},"Wechaty puppets")," available, you can know more about them ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started#working-with-different-puppets"},"here"),".")),(0,r.kt)("p",null,"Run the bot by using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node examples/professional/tuling123-bot.js\n")),(0,r.kt)("p",null,"It will generate a QR code, scan it using ",(0,r.kt)("strong",{parentName:"p"},"WeChat")," or ",(0,r.kt)("strong",{parentName:"p"},"WhatsApp")," (according to the puppet you have used), and you are ready to play with the bot."),(0,r.kt)("h2",{id:"building-the-bot"},"Building the bot"),(0,r.kt)("p",null,"Let's get started with building the Tuling bot using Wechaty."),(0,r.kt)("h3",{id:"1-initialize-project"},"1. Initialize project"),(0,r.kt)("p",null,"Create a new folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"tuling-bot")," and move into that directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir tuling-bot\ncd tuling-bot\n")),(0,r.kt)("p",null,"Use the following command to initialize an npm project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\n")),(0,r.kt)("h3",{id:"2-install-dependencies-1"},"2. Install dependencies"),(0,r.kt)("p",null,"You will need the ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty")," NPM package for building this bot, ",(0,r.kt)("inlineCode",{parentName:"p"},"qrcode-terminal")," for displaying the QR code that can be scanned for using the bot and ",(0,r.kt)("inlineCode",{parentName:"p"},"tuling123-client")," for connecting to tuling bot. Install them using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty\nnpm install qrcode-terminal tuling123-client\n")),(0,r.kt)("p",null,"You will also need to add dependencies for using any ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"Wechaty Puppet")," which helps to integrate Wechaty with various ",(0,r.kt)("strong",{parentName:"p"},"instant messaging (IM) systems")," (such as WeChat, WhatsApp, and WeCom):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.whatsapp.com/"},"WhatsApp")),", install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-whatsapp"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-whatsapp\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.wechat.com/"},"WeChat")),", you can try the following puppets:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Web Protocol:")," Install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-wechat"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-wechat\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"iPad Protocol:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"padlocal: Install ",(0,r.kt)("inlineCode",{parentName:"li"},"wechaty-puppet-padlocal"),":")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-padlocal\n")),(0,r.kt)("p",{parentName:"li"},"Then get a token like ",(0,r.kt)("inlineCode",{parentName:"p"},"puppet_padlocal_XXX"),", know more about puppet service padlocal ",(0,r.kt)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/padlocal"},"here"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"paimon: Install ",(0,r.kt)("inlineCode",{parentName:"li"},"wechaty-puppet-service"),":")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-service\n")),(0,r.kt)("p",{parentName:"li"},"Then get a token like ",(0,r.kt)("inlineCode",{parentName:"p"},"puppet_paimon_XXX"),", know more about puppet service paimon ",(0,r.kt)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/paimon"},"here"),"."))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want to use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://work.weixin.qq.com/"},"WeCom")),", install ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-service"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-service\n")),(0,r.kt)("p",{parentName:"li"},"Then get a token like ",(0,r.kt)("inlineCode",{parentName:"p"},"puppet_wxwork_XXXXX"),", more about puppet service wxwork ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-services/wxwork/"},"here"),"."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can find more information about the puppets ",(0,r.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-providers/"},"here"),".")),(0,r.kt)("h3",{id:"3-write-code-for-bot"},"3. Write code for bot"),(0,r.kt)("p",null,"Start by creating a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"tuling-bot.js"),". We will be writing the code here."),(0,r.kt)("p",null,"Let's import the required packages in the JavaScript file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import qrTerm  from 'qrcode-terminal'\nimport Tuling123  from 'tuling123-client'\n\nconst {\n  Wechaty,\n  Message,\n} = require('wechaty')\n\nconst welcome = `\n=============== Powered by Wechaty ===============\n-------- https://github.com/Chatie/wechaty --------\n\nI can talk with you using Tuling123.com\nApply your own tuling123.com API_KEY\nat: http://www.tuling123.com/html/doc/api.html\n\n__________________________________________________\n\nPlease wait... I'm trying to login in...\n`\n\nconsole.log(welcome)\n")),(0,r.kt)("p",null,"Apply Your Own Tuling123 Developer API_KEY at ",(0,r.kt)("a",{parentName:"p",href:"http://www.tuling123.com"},"tuling123.com")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const TULING123_API_KEY = '18f25157e0446df58ade098479f74b21'\nconst tuling = new Tuling123(TULING123_API_KEY)\n")),(0,r.kt)("p",null,"Initializing the bot by providing it a name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const bot = new Wechaty()\n")),(0,r.kt)("p",null,"Assigning proper functions to call when an event is triggered by the bot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"bot.on('scan',    onScan)\nbot.on('login',   onLogin)\nbot.on('logout',  onLogout)\nbot.on('message', onMessage)\nbot.on('error',   onError)\n")),(0,r.kt)("p",null,"Specify some functions that you will require for handling different events returned by the tuling bot."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"onScan")),(0,r.kt)("p",{parentName:"li"},"This function will be used for generating the ",(0,r.kt)("strong",{parentName:"p"},"QR code")," for the puppet specified, and display it on the console."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function onScan (qrcode, status) {\nqrTerm.generate(qrcode, { small: true })  // show qrcode on console\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"onLogin")),(0,r.kt)("p",{parentName:"li"},"This will print a log message when an user logs in to the bot."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function onLogin (user) {\n  console.log(`${user} login`)\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"onLogout")),(0,r.kt)("p",{parentName:"li"},"This will print a log message when an user logs out of the bot."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function onLogout (user) {\n  console.log(`${user} logout`)\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"onError")),(0,r.kt)("p",{parentName:"li"},"This is for printing an error message to the console."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function onError (e) {\n  console.error(e)\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"onMessage")),(0,r.kt)("p",{parentName:"li"},"This is the main function which will handle the messaging service."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"async function onMessage (msg) {\n  // Skip message from self, or inside a room\n  if (msg.self() || msg.room() || msg.from().name() === '\u5fae\u4fe1\u56e2\u961f' || msg.type() !== Message.Type.Text) return\n\n  console.log('Bot', 'talk: %s'  , msg.text())\n\n  try {\n    const {text: reply} = await tuling.ask(msg.text(), {userid: msg.from()})\n    console.log('Tuling123', 'Talker reply:\"%s\" for \"%s\" ',\n                          reply,\n                          msg.text(),\n            )\n    await msg.say(reply)\n  } catch (e) {\n    console.error('Bot', 'on message tuling.ask() exception: %s' , e && e.message || e)\n  }\n}\n")))),(0,r.kt)("p",null,"Finally, for starting the bot"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"bot.start()\n.catch(console.error)\n")),(0,r.kt)("h2",{id:"running-the-bot"},"Running the bot"),(0,r.kt)("p",null,"In order to run the bot, first you have to ",(0,r.kt)("strong",{parentName:"p"},"export/set")," an environment variable with the type of puppet to use:"),(0,r.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n\n# For using WhatsApp:\n# export WECHATY_PUPPET=wechaty-puppet-whatsapp\n\n# For using WeCom:\n# export WECHATY_PUPPET=wechaty-puppet-service\n# export WECHATY_PUPPET_SERVICE_TOKEN="puppet_wxwork_XXXXX"\n'))),(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export WECHATY_LOG=verbose\nexport WECHATY_PUPPET=wechaty-puppet-wechat\n\n# For using WhatsApp:\n# export WECHATY_PUPPET=wechaty-puppet-whatsapp\n\n# For using WeCom:\n# export WECHATY_PUPPET=wechaty-puppet-service\n# export WECHATY_PUPPET_SERVICE_TOKEN="puppet_wxwork_XXXXX"\n'))),(0,r.kt)(i.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'set WECHATY_LOG=verbose\nset WECHATY_PUPPET=wechaty-puppet-wechat\n\n# For using WhatsApp:\n# set WECHATY_PUPPET=wechaty-puppet-whatsapp\n\n# For using WeCom:\n# set WECHATY_PUPPET=wechaty-puppet-service\n# set WECHATY_PUPPET_SERVICE_TOKEN="puppet_wxwork_XXXXX"\n')))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are using WeCom, you can get token from ",(0,r.kt)("a",{parentName:"p",href:"http://wechaty.js.org/docs/puppet-services/wxwork"},"puppet service wxwork"),".")),(0,r.kt)("p",null,"Run the bot using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx ts-node tuling-bot.js\n")),(0,r.kt)("p",null,"This will start the bot and generate a QR code."),(0,r.kt)("p",null,"Scan it using your ",(0,r.kt)("strong",{parentName:"p"},"WeChat/WhatsApp")," as per the puppet you have selected, and you are ready to play with the bot!"),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started GitHub repository"))))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);