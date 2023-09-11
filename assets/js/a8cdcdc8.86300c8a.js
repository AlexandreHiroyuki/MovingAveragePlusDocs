"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7},i="\ud83d\udccd AtIndex",s={unversionedId:"class-methods/input-output/at-index",id:"class-methods/input-output/at-index",title:"\ud83d\udccd AtIndex",description:"---",source:"@site/docs/class-methods/input-output/at-index.md",sourceDirName:"class-methods/input-output",slug:"/class-methods/input-output/at-index",permalink:"/MovingAveragePlusDocs/docs/class-methods/input-output/at-index",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/class-methods/input-output/at-index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udccd Operator[]",permalink:"/MovingAveragePlusDocs/docs/class-methods/input-output/operator-index"},next:{title:"\ud83d\udccf Size",permalink:"/MovingAveragePlusDocs/docs/class-methods/input-output/size"}},p={},u=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1 Complexity",id:"-complexity",level:3}],l={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-atindex"},"\ud83d\udccd AtIndex"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns")," the requested element at the ",(0,a.kt)("strong",{parentName:"p"},"absolute")," position of the ",(0,a.kt)("strong",{parentName:"p"},"array"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If the requested index exceed the array size, it will return a 0.")),(0,a.kt)("h3",{id:"-syntax"},"\ud83d\udcdd Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"TypeOfArray atIndex(size_t index)\n")),(0,a.kt)("h3",{id:"-example"},"\ud83d\udd2e Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// This will create an MovingAverage of size 4 and int type\nMovingAveragePlus<int> intAverage(4);\n\n// Array.atIndex(): 1 0 0 0\nintAverage.push(1);\n// Array.atIndex(): 1 2 0 0\nintAverage.push(2);\n// Array.atIndex(): 1 2 3 0\nintAverage.push(3);\n// Array.atIndex(): 1 2 3 4\nintAverage.push(4)\n\n// return 1\nintAverage.atIndex(0);\n")),(0,a.kt)("h3",{id:"-complexity"},"\u23f1 Complexity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Constant (O(1))"),"."))}d.isMDXComponent=!0}}]);