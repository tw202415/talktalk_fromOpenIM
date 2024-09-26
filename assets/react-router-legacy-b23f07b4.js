System.register(["./react-legacy-86f3d07e.js","./@remix-run-legacy-3e5dabd9.js"],(function(e,t){"use strict";var r,a,n,o,l,u,i,s,c,d,m;return{setters:[e=>{r=e.r},e=>{a=e.i,n=e.g,o=e.r,l=e.j,u=e.p,i=e.m,s=e.A,c=e.c,d=e.s,m=e.a}],execute:function(){
/**
       * React Router v6.26.0
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},t.apply(this,arguments)}e({O:function(e){return function(e){let t=r.useContext(g).outlet;return t?r.createElement(b.Provider,{value:e},t):t}(e.context)},R:function(e){let{basename:n="/",children:o=null,location:l,navigationType:i=s.Pop,navigator:c,static:m=!1,future:h}=e;y()&&a(!1);let v=n.replace(/^\/*/,"/"),g=r.useMemo((()=>({basename:v,navigator:c,static:m,future:t({v7_relativeSplatPath:!1},h)})),[v,h,c,m]);"string"==typeof l&&(l=u(l));let{pathname:E="/",search:C="",hash:x="",state:b=null,key:R="default"}=l,k=r.useMemo((()=>{let e=d(E,v);return null==e?null:{location:{pathname:e,search:C,hash:x,state:b,key:R},navigationType:i}}),[v,E,C,x,b,R,i]);return null==k?null:r.createElement(p.Provider,{value:g},r.createElement(f.Provider,{children:o,value:k}))},b:function(){let{isDataRoute:e}=r.useContext(g);return e?function(){let{router:e}=function(){let e=r.useContext(h);return e||a(!1),e}(D.UseNavigateStable),n=P(S.UseNavigateStable),o=r.useRef(!1);return x((()=>{o.current=!0})),r.useCallback((function(r,a){void 0===a&&(a={}),o.current&&("number"==typeof r?e.navigate(r):e.navigate(r,t({fromRouteId:n},a)))}),[e,n])}():function(){y()||a(!1);let e=r.useContext(h),{basename:t,future:u,navigator:i}=r.useContext(p),{matches:s}=r.useContext(g),{pathname:c}=C(),d=JSON.stringify(n(s,u.v7_relativeSplatPath)),m=r.useRef(!1);return x((()=>{m.current=!0})),r.useCallback((function(r,a){if(void 0===a&&(a={}),!m.current)return;if("number"==typeof r)return void i.go(r);let n=o(r,JSON.parse(d),c,"path"===a.relative);null==e&&"/"!==t&&(n.pathname="/"===n.pathname?t:l([t,n.pathname])),(a.replace?i.replace:i.push)(n,a.state,a)}),[t,i,d,c,e])}()},c:C,d:function(){let{matches:e}=r.useContext(g),t=e[e.length-1];return t?t.params:{}},e:N,f:function(e,t){let{relative:a}=void 0===t?{}:t,{future:l}=r.useContext(p),{matches:u}=r.useContext(g),{pathname:i}=C(),s=JSON.stringify(n(u,l.v7_relativeSplatPath));return r.useMemo((()=>o(e,JSON.parse(s),i,"path"===a)),[e,s,i,a])},g:function(){let{matches:e,loaderData:t}=O(S.UseMatches);return r.useMemo((()=>e.map((e=>c(e,t)))),[e,t])},m:function(e){let t={hasErrorBoundary:null!=e.ErrorBoundary||null!=e.errorElement};return e.Component&&Object.assign(t,{element:r.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:r.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:r.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t},u:function(e,n,o,c){y()||a(!1);let{navigator:d}=r.useContext(p),{matches:m}=r.useContext(g),h=m[m.length-1],v=h?h.params:{};!h||h.pathname;let E=h?h.pathnameBase:"/";h&&h.route;let x,b=C();if(n){var R;let e="string"==typeof n?u(n):n;"/"===E||(null==(R=e.pathname)?void 0:R.startsWith(E))||a(!1),x=e}else x=b;let D=x.pathname||"/",S=D;if("/"!==E){let e=E.replace(/^\//,"").split("/");S="/"+D.replace(/^\//,"").split("/").slice(e.length).join("/")}let O=i(e,{pathname:S}),P=function(e,t,n,o){var l;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===o&&(o=null),null==e){var u;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(u=o)&&u.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let i=e,s=null==(l=n)?void 0:l.errors;if(null!=s){let e=i.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||a(!1),i=i.slice(0,Math.min(i.length,e+1))}let c=!1,d=-1;if(n&&o&&o.v7_partialHydration)for(let r=0;r<i.length;r++){let e=i[r];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=r),e.route.id){let{loaderData:t,errors:r}=n,a=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||a){c=!0,i=d>=0?i.slice(0,d+1):[i[0]];break}}}return i.reduceRight(((e,a,o)=>{let l,u=!1,m=null,h=null;var v;n&&(l=s&&a.route.id?s[a.route.id]:void 0,m=a.route.errorElement||k,c&&(d<0&&0===o?(j[v="route-fallback"]||(j[v]=!0),u=!0,h=null):d===o&&(u=!0,h=a.route.hydrateFallbackElement||null)));let p=t.concat(i.slice(0,o+1)),f=()=>{let t;return t=l?m:u?h:a.route.Component?r.createElement(a.route.Component,null):a.route.element?a.route.element:e,r.createElement(B,{match:a,routeContext:{outlet:e,matches:p,isDataRoute:null!=n},children:t})};return n&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?r.createElement(U,{location:n.location,revalidation:n.revalidation,component:m,error:l,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()}),null)}(O&&O.map((e=>Object.assign({},e,{params:Object.assign({},v,e.params),pathname:l([E,d.encodeLocation?d.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?E:l([E,d.encodeLocation?d.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),m,o,c);return n&&P?r.createElement(f.Provider,{value:{location:t({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:s.Pop}},P):P}});const h=e("D",r.createContext(null)),v=e("a",r.createContext(null)),p=e("N",r.createContext(null)),f=r.createContext(null),g=r.createContext({outlet:null,matches:[],isDataRoute:!1}),E=r.createContext(null);function y(){return null!=r.useContext(f)}function C(){return y()||a(!1),r.useContext(f).location}function x(e){r.useContext(p).static||r.useLayoutEffect(e)}const b=r.createContext(null);function R(){let e=N(),t=m(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return r.createElement(r.Fragment,null,r.createElement("h2",null,"Unexpected Application Error!"),r.createElement("h3",{style:{fontStyle:"italic"}},t),a?r.createElement("pre",{style:n},a):null,null)}const k=r.createElement(R,null);class U extends r.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){}render(){return void 0!==this.state.error?r.createElement(g.Provider,{value:this.props.routeContext},r.createElement(E.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function B(e){let{routeContext:t,match:a,children:n}=e,o=r.useContext(h);return o&&o.static&&o.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=a.route.id),r.createElement(g.Provider,{value:t},n)}var D=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(D||{}),S=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(S||{});function O(e){let t=r.useContext(v);return t||a(!1),t}function P(e){let t=function(){let e=r.useContext(g);return e||a(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||a(!1),n.route.id}function N(){var e;let t=r.useContext(E),a=O(S.UseRouteError),n=P(S.UseRouteError);return void 0!==t?t:null==(e=a.errors)?void 0:e[n]}const j={};new Promise((()=>{}))}}}));
