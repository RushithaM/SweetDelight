(()=>{var e={};e.id=492,e.ids=[492],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},8666:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,pages:()=>c,routeModule:()=>h,tree:()=>d});var s=r(260),n=r(8203),o=r(5155),i=r.n(o),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3446)),"C:\\Users\\M RISHITHA\\OneDrive\\Documents\\Rushitha\\VComply\\Sweet Delight\\frontend\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}],c=[],m={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4242:(e,t,r)=>{Promise.resolve().then(r.bind(r,451)),Promise.resolve().then(r.bind(r,425)),Promise.resolve().then(r.t.bind(r,9607,23))},7802:(e,t,r)=>{Promise.resolve().then(r.bind(r,7647)),Promise.resolve().then(r.bind(r,6381)),Promise.resolve().then(r.t.bind(r,8531,23))},4710:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},7918:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,1284,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},7647:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>i,_:()=>a});var s=r(5512),n=r(8009);let o=(0,n.createContext)();function i({children:e}){let[t,r]=(0,n.useState)([]);return(0,s.jsx)(o.Provider,{value:{cart:t,addToCart:e=>{r(t=>{let r;return r=t.find(t=>t.productId===e._id)?t.map(t=>t.productId===e._id?{...t,quantity:t.quantity+1}:t):[...t,{productId:e._id,quantity:1,product:e}],localStorage.setItem("cart",JSON.stringify(r)),r})},removeFromCart:e=>{r(t=>{let r=t.filter(t=>t.productId!==e);return localStorage.setItem("cart",JSON.stringify(r)),r})},updateQuantity:(e,t)=>{r(r=>{let s=r.map(r=>r.productId===e?{...r,quantity:t}:r);return localStorage.setItem("cart",JSON.stringify(s)),s})}},children:e})}let a=()=>{let e=(0,n.useContext)(o);if(!e)throw Error("useCart must be used within a CartProvider");return e}},6381:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var s=r(5512),n=r(8531),o=r.n(n),i=r(6873),a=r(1124),l=r(9334),d=r(8009),c=r(7647);let m=()=>{let e=(0,l.useRouter)(),t=(0,l.useSearchParams)(),[r,n]=(0,d.useState)(""),{cart:m}=(0,c._)(),h=m.reduce((e,t)=>e+t.quantity,0);return(0,d.useEffect)(()=>{n(t.get("q")||"")},[t]),(0,s.jsx)("header",{className:"sticky top-0 z-40 w-full bg-rose-50 shadow-sm",children:(0,s.jsx)("div",{className:"mx-auto max-w-7xl",children:(0,s.jsxs)("div",{className:"flex items-center justify-between px-4 py-4",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-8",children:[(0,s.jsx)(o(),{href:"/",className:"text-pink-700 font-bold uppercase tracking-tight text-2xl font-sans",children:"Sweet Delights"}),(0,s.jsxs)("nav",{className:"hidden md:flex items-center space-x-6",children:[(0,s.jsx)(o(),{href:"/all-products",className:"text-sm font-medium text-black-600 hover:text-pink-600",children:"All"}),(0,s.jsx)(o(),{href:"/category/cakes",className:"text-sm font-medium text-black-600 hover:text-pink-600",children:"Cakes"}),(0,s.jsx)(o(),{href:"/category/cookies",className:"text-sm font-medium text-black-600 hover:text-pink-600",children:"Cookies"})]})]}),(0,s.jsx)("form",{onSubmit:t=>{t.preventDefault(),r?e.push(`/all-products?q=${encodeURIComponent(r)}`):e.push("/all-products")},className:"hidden md:flex items-center flex-1 justify-center px-6",children:(0,s.jsx)("div",{className:"w-full max-w-md",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(i.A,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"}),(0,s.jsx)("input",{type:"text",value:r,onChange:e=>n(e.target.value),placeholder:"Search for desserts...",className:"w-full rounded-lg border bg-gray-50 py-2 pl-10 pr-4 text-sm text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"})]})})}),(0,s.jsxs)(o(),{href:"/cart",className:"flex items-center justify-center rounded-lg border bg-white p-2 hover:bg-pink-100 relative",children:[(0,s.jsx)(a.A,{className:"h-5 w-5"}),h>0&&(0,s.jsx)("span",{className:"absolute -top-2 -right-2 bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs",children:h}),(0,s.jsx)("span",{className:"sr-only",children:"Cart"})]})]})})})}},451:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>n});var s=r(6760);let n=(0,s.registerClientReference)(function(){throw Error("Attempted to call CartProvider() from the server but CartProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\M RISHITHA\\OneDrive\\Documents\\Rushitha\\VComply\\Sweet Delight\\frontend\\app\\components\\CartProvider.js","CartProvider");(0,s.registerClientReference)(function(){throw Error("Attempted to call useCart() from the server but useCart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\M RISHITHA\\OneDrive\\Documents\\Rushitha\\VComply\\Sweet Delight\\frontend\\app\\components\\CartProvider.js","useCart")},425:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\M RISHITHA\\\\OneDrive\\\\Documents\\\\Rushitha\\\\VComply\\\\Sweet Delight\\\\frontend\\\\app\\\\components\\\\Header.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\M RISHITHA\\OneDrive\\Documents\\Rushitha\\VComply\\Sweet Delight\\frontend\\app\\components\\Header.js","default")},3446:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m,metadata:()=>c});var s=r(2740);r(2704);var n=r(425),o=r(9607),i=r.n(o);function a(){return(0,s.jsx)("footer",{className:"bg-rose-100 text-gray-800",children:(0,s.jsx)("div",{className:"container mx-auto px-4 py-8",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Sweet Delights"}),(0,s.jsx)("p",{className:"text-sm",children:"Bringing sweetness to your life"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Quick Links"}),(0,s.jsxs)("ul",{className:"space-y-2",children:[(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/",className:"text-sm hover:text-pink-600",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/all-products",className:"text-sm hover:text-pink-600",children:"All Products"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/category/cakes",className:"text-sm hover:text-pink-600",children:"Cakes"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i(),{href:"/category/cookies",className:"text-sm hover:text-pink-600",children:"Cookies"})})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Contact Us"}),(0,s.jsx)("p",{className:"text-sm",children:"Phone: (+91) 9390473998"}),(0,s.jsx)("p",{className:"text-sm",children:"Email: rushitha286@gmail.com"})]})]})})})}var l=r(6301),d=r(451);let c={title:"Sweet Delights",description:"Delicious desserts and cakes for every occasion"};function m({children:e}){return(0,s.jsx)("html",{children:(0,s.jsx)("body",{children:(0,s.jsxs)(d.CartProvider,{children:[(0,s.jsx)(l.Suspense,{children:(0,s.jsx)(n.default,{})}),(0,s.jsx)("main",{className:"min-h-screen bg-rose-50",children:e}),(0,s.jsx)(a,{})]})})})}},2704:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,741],()=>r(8666));module.exports=s})();