"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[7543],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return k}});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(o),k=a,m=c["".concat(l,".").concat(k)]||c[k]||h[k]||n;return o?r.createElement(m,i(i({ref:t},s),{},{components:o})):r.createElement(m,i({ref:t},s))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},12985:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var r=o(87462),a=o(63366),n=(o(67294),o(3905)),i=["components"],p={title:"Deploying with Heroku"},l=void 0,u={unversionedId:"howto/heroku",id:"howto/heroku",isDocsHomePage:!1,title:"Deploying with Heroku",description:"Powered by Wechaty",source:"@site/docs/howto/heroku.mdx",sourceDirName:"howto",slug:"/howto/heroku",permalink:"/docs/howto/heroku",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/howto/heroku.mdx",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1634708335,formattedLastUpdatedAt:"10/20/2021",frontMatter:{title:"Deploying with Heroku"},sidebar:"docs",previous:{title:"Deploy in WeChat Official Account",permalink:"/docs/howto/wechat-official"},next:{title:"Deploy with Docker",permalink:"/docs/howto/docker"}},s=[{value:"Using the &quot;Deploy to Heroku&quot; Button",id:"using-the-deploy-to-heroku-button",children:[{value:"Setting up a Deploy to Heroku Button",id:"setting-up-a-deploy-to-heroku-button",children:[]}]},{value:"Deploying with Heroku",id:"deploying-with-heroku",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Creating a Heroku Remote",id:"creating-a-heroku-remote",children:[]},{value:"Running the bot",id:"running-the-bot",children:[]}]},{value:"Use Cases",id:"use-cases",children:[]}],h={toc:s};function c(e){var t=e.components,p=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},h,p,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-blue.svg",alt:"Powered by Wechaty"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://travis-ci.com/wechaty/heroku-wechaty-getting-started"},(0,n.kt)("img",{parentName:"a",src:"https://travis-ci.com/wechaty/heroku-wechaty-getting-started.svg?branch=master",alt:"Build Status"})),"\n",(0,n.kt)("a",{parentName:"p",href:"https://greenkeeper.io/"},(0,n.kt)("img",{parentName:"a",src:"https://badges.greenkeeper.io/wechaty/heroku-wechaty-getting-started.svg",alt:"Greenkeeper badge"}))),(0,n.kt)("h2",{id:"using-the-deploy-to-heroku-button"},'Using the "Deploy to Heroku" Button'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The \u2018Deploy to Heroku\u2019 button enables users to deploy apps to Heroku without leaving the web browser, and with little or no configuration. The button is ideal for customers, open-source project maintainers or add-on providers who wish to provide their customers with a quick and easy way to deploy and configure a Heroku app.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://heroku.com/deploy?template=https://github.com/wechaty/heroku-wechaty-getting-started"},(0,n.kt)("img",{parentName:"a",src:"https://www.herokucdn.com/deploy/button.svg",alt:"Deploy to Heroku for Wechaty Starter Project Repository"}))),(0,n.kt)("p",null,"This is a sample deploy with Heroku button for the Wechaty Heroku starter project."),(0,n.kt)("h3",{id:"setting-up-a-deploy-to-heroku-button"},"Setting up a Deploy to Heroku Button"),(0,n.kt)("p",null,"This guide demonstrates setting up a Deploy to Heroku Button with ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Starter Repository"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fork the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Starter Repository"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a branch ",(0,n.kt)("inlineCode",{parentName:"p"},"feature")," in the forked repository.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On branch feature, create an app.json file in the root directory. Add items including name, description, logo in the fields. If you want to know how an app.json file looks like, check out ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/heroku-wechaty-getting-started/blob/master/app.json"},"heroku-wechaty-getting-started templete"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Readme.md file, add the following code snippet:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"`[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)`\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"The deploy with heroku button is now set up.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Heroku button",src:o(70625).Z})),(0,n.kt)("h2",{id:"deploying-with-heroku"},"Deploying with Heroku"),(0,n.kt)("p",null,"This guide demonstrates running the ding-dong bot with Heroku CLI. However you can choose to run any custom bot, with similar steps."),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fork the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started%22"},"Wechaty Starter Repository"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone the Starter repository."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"git clone https://github.com/wechaty/wechaty-getting-started\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Download the ",(0,n.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/heroku-cli"},"Heroku Cli"))),(0,n.kt)("h3",{id:"getting-started"},"Getting Started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"On branch feature, create an app.json file in the root directory.Add in fields such as name, description, logo, etc. If you want to know how an app.js file looks like check ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/heroku-wechaty-getting-started/blob/master/app.json"},"heroku-wechaty-getting-started")),(0,n.kt)("li",{parentName:"ol"},"On branch feature, create a file  named ",(0,n.kt)("inlineCode",{parentName:"li"},"Procfile")," in the root directory.Note that this file has no extension.\nWrite the following code in the file:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"web:WECHATY_LOG=verbose WECHATY_PUPPET=wechaty-puppet-whatsapp node examples/ding-dong-bot.js\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Commit the changes in the feature branch.")),(0,n.kt)("h3",{id:"creating-a-heroku-remote"},"Creating a Heroku Remote"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open the following link in your browser:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"https://heroku.com/deploy?template=https://github.com/user-name/wechaty-getting-started/tree/feature\n")),(0,n.kt)("p",null,"Remember to replace user-name with your Github username."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the necessary details and click on deploy app button.\n",(0,n.kt)("img",{alt:"Heroko Image 1",src:o(76267).Z}),"\n",(0,n.kt)("img",{alt:"Heroko Image 1",src:o(78822).Z}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After the app has been successfully created, open the terminal and add the heroku remote to your local github repository."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"heroku git:remote -a wechaty-test-123\n")),(0,n.kt)("p",null,"Here wechaty-test-123 is the name of the app, created in the previous step. You have to write your own app name."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Push the feature branch of your local repository to the main branch of heroku using the following command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"git push heroku feature:main\n")),(0,n.kt)("h3",{id:"running-the-bot"},"Running the bot"),(0,n.kt)("p",null,"To run the Bot on the Heroku CLI use the command ",(0,n.kt)("inlineCode",{parentName:"p"},"heroku local web")," on your terminal. The ding-dong starter bot  is now successfully running.\n",(0,n.kt)("img",{alt:"Heroku button",src:o(80659).Z})),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/wechaty/friday"},"Friday BOT")," - ",(0,n.kt)("a",{parentName:"li",href:"https://bot-friday.herokuapp.com/"},"bot-friday.herokuapp.com")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/kaiyuanshe/OSS-bot"},"OSSBot")," - ",(0,n.kt)("a",{parentName:"li",href:"https://oss-bot-dev.herokuapp.com/"},"oss-bot-dev.herokuapp.com")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/huan/mike-bo"},"Mike BO")," - ",(0,n.kt)("a",{parentName:"li",href:"http://mike-bo.herokuapp.com/"},"mike-bo.herokuapp.com")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot/qijibot"},"QiJi BOT")," - ",(0,n.kt)("a",{parentName:"li",href:"https://qiji-bot.herokuapp.com/"},"qiji-bot.herokuapp.com")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot/botops"},"Bot Ops")," - ",(0,n.kt)("a",{parentName:"li",href:"https://bot-ops.herokuapp.com/"},"bot-ops.herokuapp.com")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot/rui-bot"},"Rui Assistant BOT")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/juzibot/juzi-bot"},"Juzi.BOT"))))}c.isMDXComponent=!0},70625:function(e,t,o){t.Z=o.p+"assets/images/heroku-4c56b67ccad2a69f1a9a6040874289b9.webp"},76267:function(e,t,o){t.Z=o.p+"assets/images/heroku1-6111d57b617e543667aac8aedbb0b117.webp"},78822:function(e,t,o){t.Z=o.p+"assets/images/heroku2-548e23be3f5e24194a1aa7cabb9b97d2.webp"},80659:function(e,t,o){t.Z=o.p+"assets/images/heroku3-d8f9d2f737d68dbd9e1eb87698be36e0.webp"}}]);