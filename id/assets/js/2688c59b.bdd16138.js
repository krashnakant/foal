(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8257],{3905:function(a,e,t){"use strict";t.d(e,{Zo:function(){return p},kt:function(){return c}});var n=t(7294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function l(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var u=n.createContext({}),s=function(a){var e=n.useContext(u),t=e;return a&&(t="function"==typeof a?a(e):o(o({},e),a)),t},p=function(a){var e=s(a.components);return n.createElement(u.Provider,{value:e},a.children)},m={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,r=a.originalType,u=a.parentName,p=l(a,["components","mdxType","originalType","parentName"]),d=s(t),c=i,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||r;return t?n.createElement(k,o(o({ref:e},p),{},{components:t})):n.createElement(k,o({ref:e},p))}));function c(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=a,l.mdxType="string"==typeof a?a:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5335:function(a,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=t(2122),i=t(9756),r=(t(7294),t(3905)),o=["components"],l={title:"Introduksi",slug:"/"},u=void 0,s={unversionedId:"README",id:"README",isDocsHomePage:!1,title:"Introduksi",description:"License: MIT",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/README.md",sourceDirName:".",slug:"/",permalink:"/id/docs/",editUrl:"https://github.com/FoalTS/foal/edit/master/docs/docs/README.md",version:"current",frontMatter:{title:"Introduksi",slug:"/"},sidebar:"someSidebar",next:{title:"Instalasi",permalink:"/id/docs/tutorials/simple-todo-list/1-installation"}},p=[{value:"Apa itu Foal?",id:"apa-itu-foal",children:[]},{value:"Kebijakan saat Develop",id:"kebijakan-saat-develop",children:[{value:"Ribuan kali Tes",id:"ribuan-kali-tes",children:[]},{value:"Dokumentasi",id:"dokumentasi",children:[]},{value:"Stabilitas Produk",id:"stabilitas-produk",children:[]}]},{value:"Mulai",id:"mulai",children:[]}],m={toc:p};function d(a){var e=a.components,t=(0,i.Z)(a,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/License-MIT-blue.svg",alt:"License: MIT"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/node-%3E%3D10-brightgreen.svg",alt:"node version"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://badge.fury.io/js/%40foal%2Fcore.svg",alt:"npm version"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/actions"},(0,r.kt)("img",{parentName:"a",src:"https://github.com/FoalTS/foal/workflows/Test/badge.svg",alt:"Actions Status"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://codecov.io/gh/FoalTS/foal/branch/master/graphs/badge.svg",alt:"Code coverage"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://snyk.io/test/github/foalts/foal/badge.svg",alt:"Known Vulnerabilities"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/commit-activity/y/FoalTS/foal.svg",alt:"Commit activity"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/github/last-commit/FoalTS/foal.svg",alt:"Last commit"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/2FA-npm,%20GitHub-green.svg",alt:"2FA"})),(0,r.kt)("h2",{id:"apa-itu-foal"},"Apa itu Foal?"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Foal")," (atau ",(0,r.kt)("em",{parentName:"p"},"FoalTS"),") merupakan sebuah framework Node.JS untuk membangun aplikasi web."),(0,r.kt)("p",null,"Foal menghadirkan berbagai komponen siap pakai agar kita tak perlu membuat ulang. Kita diberikan sebuah medium lengkap untuk memulai membangun aplikasi web. Antara lain CLI, tes, utilitas frontend, script, otentifikasi, ORM, deploy, GraphQL, Swagger API, AWS, dll. Tak perlu susah payah mencari dan meramu sendiri berbagai package dari npm, semua telah disiapkan."),(0,r.kt)("p",null,"Namun meskipun menawarkan banyak fitur, Foal sendiri tetaplah simpel. Kerumitan yang tidak perlu bagi pengguna sengaja dihindarkan. Kode yang ringkas dan jelas pada saat membangun akan memudahkan pemeliharaan aplikasi tersebut di masa mendatang. Foal mendorong kita untuk lebih fokus ke kode daripada sibuk menelisik bagaimana internal sebuah framework bekerja."),(0,r.kt)("p",null,"Terakhir, Foal dibuat menggunakan TypeScript. Typescript sangat membantu dalam urusan type-checking dan memberi kita fitur terbaru dari ECMAScript. Kesalahan dalam kode pun dapat terdeteksi lebih dini. Typescript juga memberikan kita fitur auto-komplit dan dokumen API saat bekerja dalam editor."),(0,r.kt)("h2",{id:"kebijakan-saat-develop"},"Kebijakan saat Develop"),(0,r.kt)("h3",{id:"ribuan-kali-tes"},"Ribuan kali Tes"),(0,r.kt)("p",null,"Pengetesan Foal senantiasa menjadi prioritas. Sangat penting bagi kami untuk menghadirkan sebuah produk handal yang benar-benar teruji. Per Desember 2020, Foal telah melalui lebih dari 2100 kali tes. "),(0,r.kt)("h3",{id:"dokumentasi"},"Dokumentasi"),(0,r.kt)("p",null,"Fitur baru, apapun itu, kurang bermanfaat bila tidak disertai dengan petunjuk yang baik. Dokumentasi yang lengkap dan berkualitas adalah kunci dari sebuah framework. Sekiranya ada bagian yang terlewat atau kurang jelas tentang Foal, mohon berkenan melaporkannya via Github, dengan senang hati kami terima! "),(0,r.kt)("h3",{id:"stabilitas-produk"},"Stabilitas Produk"),(0,r.kt)("p",null,"Kami mencurahkan segenap perhatian atas stabilitas produk. Untuk keterangan lebih lanjut, silakan rujuk ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#dependency-policy"},"kebijakan dependensi"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#semantic-versioning"},"aturan versi semantik")," dan ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FoalTS/foal/blob/master/.github/CONTRIBUTING.MD#long-term-support-policy-and-schedule"},"kebijakan dukungan jangka panjang"),"."),(0,r.kt)("h2",{id:"mulai"},"Mulai"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> npm install -g @foal/cli\n> foal createapp my-app\n> cd my-app\n> npm run develop\n")),(0,r.kt)("p",null,"Server develop sudah jalan! Coba buka ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3001")," dan lihat apa yang tampil!"),(0,r.kt)("p",null,"\ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"./tutorials/simple-todo-list/1-installation"},"Lanjutkan dengan tutorial")," \ud83c\udf31"))}d.isMDXComponent=!0}}]);