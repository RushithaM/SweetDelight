(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[403],{3764:(e,t,r)=>{Promise.resolve().then(r.bind(r,6960)),Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,7970,23))},6960:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var a=r(5155),o=r(2115),i=r(1255),s=r(8474);function n(e){let{product:t}=e,[r,n]=(0,o.useState)(!1),[c,d]=(0,o.useState)(!1),{addToCart:l}=(0,i._)(),u=async()=>{n(!0);try{if(!(await fetch("".concat("https://sweetdelight-hrl5.onrender.com","/api/cart/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:t._id})})).ok)throw Error("Failed to add to cart");l(t),d(!0),setTimeout(()=>{d(!1)},3e3)}catch(e){console.error("Error adding to cart:",e),alert("Failed to add item to cart. Please try again.")}finally{n(!1)}};return(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("button",{onClick:u,disabled:r,className:"w-50 inline-flex items-center justify-center space-x-2 rounded-3xl bg-rose-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 transition-colors",children:[(0,a.jsx)(s.A,{className:"w-5 h-5"}),(0,a.jsx)("span",{children:r?"Adding to Cart...":"Add to Cart"})]}),c&&(0,a.jsx)("div",{className:"bg-rose-50 text-rose-700 px-4 py-2 rounded-lg text-center",children:"Added to cart successfully!"})]})}},1255:(e,t,r)=>{"use strict";r.d(t,{CartProvider:()=>s,_:()=>n});var a=r(5155),o=r(2115);let i=(0,o.createContext)();function s(e){let{children:t}=e,[r,s]=(0,o.useState)([]);return(0,o.useEffect)(()=>{let e=localStorage.getItem("cart");e&&s(JSON.parse(e))},[]),(0,a.jsx)(i.Provider,{value:{cart:r,addToCart:e=>{s(t=>{let r;return r=t.find(t=>t.productId===e._id)?t.map(t=>t.productId===e._id?{...t,quantity:t.quantity+1}:t):[...t,{productId:e._id,quantity:1,product:e}],localStorage.setItem("cart",JSON.stringify(r)),r})},removeFromCart:e=>{s(t=>{let r=t.filter(t=>t.productId!==e);return localStorage.setItem("cart",JSON.stringify(r)),r})},updateQuantity:(e,t)=>{s(r=>{let a=r.map(r=>r.productId===e?{...r,quantity:t}:r);return localStorage.setItem("cart",JSON.stringify(a)),a})}},children:t})}let n=()=>{let e=(0,o.useContext)(i);if(!e)throw Error("useCart must be used within a CartProvider");return e}},7401:(e,t,r)=>{"use strict";r.d(t,{A:()=>c});var a=r(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,a.forwardRef)((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:c,className:d="",children:l,iconNode:u,...h}=e;return(0,a.createElement)("svg",{ref:t,...s,width:o,height:o,stroke:r,strokeWidth:c?24*Number(n)/Number(o):n,className:i("lucide",d),...h},[...u.map(e=>{let[t,r]=e;return(0,a.createElement)(t,r)}),...Array.isArray(l)?l:[l]])}),c=(e,t)=>{let r=(0,a.forwardRef)((r,s)=>{let{className:c,...d}=r;return(0,a.createElement)(n,{ref:s,iconNode:t,className:i("lucide-".concat(o(e)),c),...d})});return r.displayName="".concat(e),r}},8474:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});let a=(0,r(7401).A)("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[970,173,441,517,358],()=>t(3764)),_N_E=e.O()}]);