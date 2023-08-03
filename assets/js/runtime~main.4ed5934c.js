(()=>{"use strict";var e,r,t,o,a,n={},f={};function d(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=n,d.c=f,e=[],d.O=(r,t,o,a)=>{if(!t){var n=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],a=e[u][2];for(var f=!0,c=0;c<t.length;c++)(!1&a||n>=a)&&Object.keys(d.O).every((e=>d.O[e](t[c])))?t.splice(c--,1):(f=!1,a<n&&(n=a));if(f){e.splice(u--,1);var i=o();void 0!==i&&(r=i)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,o,a]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);d.r(a);var n={};r=r||[null,t({}),t([]),t(t)];for(var f=2&o&&e;"object"==typeof f&&!~r.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,d.d(a,n),a},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>"assets/js/"+({31:"22be1398",53:"935f2afb",195:"c4f5d8e4",200:"88d0af7c",248:"7bc3ca5f",306:"fd8adfa0",409:"390351d6",509:"30c8f9f0",514:"1be78505",521:"7d00a7f6",560:"0b0d2c40",671:"0e384e19",788:"f9d53352",808:"b46d6778",812:"9b7df6cf",817:"14eb3368",918:"17896441",981:"6593ab29"}[e]||e)+"."+{31:"1e3b60ba",53:"d4e36f55",195:"a4f8fcf3",200:"9be94c91",248:"7a47dd5b",306:"29bc1aec",409:"d5e5d34b",509:"e0bbd248",514:"70e5b3cf",521:"ac0d76e6",560:"99d3bd62",671:"f13589d4",788:"960a3d3a",808:"46162b76",812:"4e599577",817:"e32e8901",918:"ccb6a75b",972:"e195df99",981:"14ff9965"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o={},a="moving-average-plus-docs:",d.l=(e,r,t,n)=>{if(o[e])o[e].push(r);else{var f,c;if(void 0!==t)for(var i=document.getElementsByTagName("script"),u=0;u<i.length;u++){var l=i[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+t){f=l;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.setAttribute("data-webpack",a+t),f.src=e),o[e]=[r];var s=(r,t)=>{f.onerror=f.onload=null,clearTimeout(b);var a=o[e];if(delete o[e],f.parentNode&&f.parentNode.removeChild(f),a&&a.forEach((e=>e(t))),r)return r(t)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),c&&document.head.appendChild(f)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/MovingAveragePlusDocs/",d.gca=function(e){return e={17896441:"918","22be1398":"31","935f2afb":"53",c4f5d8e4:"195","88d0af7c":"200","7bc3ca5f":"248",fd8adfa0:"306","390351d6":"409","30c8f9f0":"509","1be78505":"514","7d00a7f6":"521","0b0d2c40":"560","0e384e19":"671",f9d53352:"788",b46d6778:"808","9b7df6cf":"812","14eb3368":"817","6593ab29":"981"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(r,t)=>{var o=d.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var n=d.p+d.u(r),f=new Error;d.l(n,(t=>{if(d.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,o[1](f)}}),"chunk-"+r,r)}},d.O.j=r=>0===e[r];var r=(r,t)=>{var o,a,n=t[0],f=t[1],c=t[2],i=0;if(n.some((r=>0!==e[r]))){for(o in f)d.o(f,o)&&(d.m[o]=f[o]);if(c)var u=c(d)}for(r&&r(t);i<n.length;i++)a=n[i],d.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return d.O(u)},t=self.webpackChunkmoving_average_plus_docs=self.webpackChunkmoving_average_plus_docs||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();