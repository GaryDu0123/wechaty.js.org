"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9842],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),y=u(n),f=o,m=y["".concat(i,".").concat(f)]||y[f]||p[f]||a;return n?r.createElement(m,c(c({ref:e},l),{},{components:n})):r.createElement(m,c({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=y;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},34608:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return y}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),c=["components"],s={},i=void 0,u={unversionedId:"polyglot/python/transclusions/shortest-chatbot",id:"polyglot/python/transclusions/shortest-chatbot",isDocsHomePage:!1,title:"shortest-chatbot",description:"`py",source:"@site/docs/polyglot/python/transclusions/shortest-chatbot.mdx",sourceDirName:"polyglot/python/transclusions",slug:"/polyglot/python/transclusions/shortest-chatbot",permalink:"/docs/polyglot/python/transclusions/shortest-chatbot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/polyglot/python/transclusions/shortest-chatbot.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616051830,formattedLastUpdatedAt:"3/18/2021",frontMatter:{}},l=[],p={toc:l};function y(t){var e=t.components,n=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import Wechaty\nimport asyncio\n\nasync def main():\n    bot = Wechaty()\n    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))\n    bot.on('login', lambda user: print('User {} logged in'.format(user)))\n    bot.on('message', lambda message: print('Message: {}'.format(message)))\n    await bot.start()\n\nasyncio.run(main())\n")))}y.isMDXComponent=!0}}]);