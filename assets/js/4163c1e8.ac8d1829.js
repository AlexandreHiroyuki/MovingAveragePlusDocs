"use strict";(self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[]).push([[336],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var a=r(6540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(8168),n=(r(6540),r(5680));const i={sidebar_position:3},l="\ud83d\udce4 Get Partial",o={unversionedId:"class-methods/partials/get-partial",id:"class-methods/partials/get-partial",title:"\ud83d\udce4 Get Partial",description:"Returns the Partial average result of the requested ID.",source:"@site/docs/class-methods/partials/get-partial.md",sourceDirName:"class-methods/partials",slug:"/class-methods/partials/get-partial",permalink:"/MovingAveragePlusDocs/docs/class-methods/partials/get-partial",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/class-methods/partials/get-partial.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee0 Create Partial",permalink:"/MovingAveragePlusDocs/docs/class-methods/partials/create-partial"}},s={},p=[{value:"\ud83d\udcdd Syntax",id:"-syntax",level:3},{value:"\ud83d\udd2e Example",id:"-example",level:3},{value:"\u23f1Complexity",id:"complexity",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"-get-partial"},"\ud83d\udce4 Get Partial"),(0,n.yg)("p",null,"Returns the Partial average result of the requested ID.\nUse the ID provided by the creation method to access the partial result.\nRequesting an invalid ID will return a 0."),(0,n.yg)("h3",{id:"-syntax"},"\ud83d\udcdd Syntax"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"TypeOfArray get_partial(size_t id)\n")),(0,n.yg)("h3",{id:"-example"},"\ud83d\udd2e Example"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"MovingAveragePlus<unsigned int> intAverage(10);\n\nsize_t partial_id = intAverage.create_partial(3);\nsize_t partial_2_id = intAverage.create_partial(5);\n\n// 10 4 3 2 1 0 0 0 0 0\nintAverage.push(1).push(2).push(3).push(4).push(10);\n\n// (10 + 4 + 3) / 3 = 5\nintAverage.get_partial(partial_id);\n// (10 + 4 + 3 + 2 + 1) / 5 = 4\nintAverage.get_partial(partial_2_id);\n")),(0,n.yg)("h3",{id:"complexity"},"\u23f1Complexity"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Constant (O(1))"),"."))}d.isMDXComponent=!0}}]);