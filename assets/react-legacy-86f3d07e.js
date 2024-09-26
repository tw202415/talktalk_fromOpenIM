System.register(["./@babel-legacy-17757daa.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.g}],execute:function(){function t(e,t){for(var r=0;r<t.length;r++){const n=t[r];if("string"!=typeof n&&!Array.isArray(n))for(const t in n)if("default"!==t&&!(t in e)){const r=Object.getOwnPropertyDescriptor(n,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>n[t]})}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n={exports:{}},o={},u={exports:{}},a={},c=Symbol.for("react.element"),f=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),y=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator,h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,E={};function g(e,t,r){this.props=e,this.context=t,this.refs=E,this.updater=r||h}function R(){}function w(e,t,r){this.props=e,this.context=t,this.refs=E,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},R.prototype=g.prototype;var O=w.prototype=new R;O.constructor=w,S(O,g.prototype),O.isPureReactComponent=!0;var j=Array.isArray,k=Object.prototype.hasOwnProperty,$={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,o={},u=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,n)&&!C.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var i=Array(f),s=0;s<f;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:c,type:e,key:u,ref:a,props:o,_owner:$.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var I=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,r,n,o){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case c:case f:a=!0}}if(a)return o=o(a=e),e=""===n?"."+T(a,0):n,j(o)?(r="",null!=e&&(r=e.replace(I,"$&/")+"/"),A(o,t,r,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(I,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=""===n?".":n+":",j(e))for(var i=0;i<e.length;i++){var s=n+T(u=e[i],i);a+=A(u,t,r,s,o)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=v&&e[v]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),i=0;!(u=e.next()).done;)a+=A(u=u.value,t,r,s=n+T(u,i++),o);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function D(e,t,r){if(null==e)return e;var n=[],o=0;return A(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var U={current:null},F={transition:null},N={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:F,ReactCurrentOwner:$};function V(){throw Error("act(...) is not supported in production builds of React.")}a.Children={map:D,forEach:function(e,t,r){D(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a.Component=g,a.Fragment=i,a.Profiler=l,a.PureComponent=w,a.StrictMode=s,a.Suspense=_,a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,a.act=V,a.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=S({},e.props),o=e.key,u=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,a=$.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in t)k.call(t,i)&&!C.hasOwnProperty(i)&&(n[i]=void 0===t[i]&&void 0!==f?f[i]:t[i])}var i=arguments.length-2;if(1===i)n.children=r;else if(1<i){f=Array(i);for(var s=0;s<i;s++)f[s]=arguments[s+2];n.children=f}return{$$typeof:c,type:e.type,key:o,ref:u,props:n,_owner:a}},a.createContext=function(e){return(e={$$typeof:y,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},a.createElement=x,a.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},a.createRef=function(){return{current:null}},a.forwardRef=function(e){return{$$typeof:d,render:e}},a.isValidElement=P,a.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:L}},a.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},a.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},a.unstable_act=V,a.useCallback=function(e,t){return U.current.useCallback(e,t)},a.useContext=function(e){return U.current.useContext(e)},a.useDebugValue=function(){},a.useDeferredValue=function(e){return U.current.useDeferredValue(e)},a.useEffect=function(e,t){return U.current.useEffect(e,t)},a.useId=function(){return U.current.useId()},a.useImperativeHandle=function(e,t,r){return U.current.useImperativeHandle(e,t,r)},a.useInsertionEffect=function(e,t){return U.current.useInsertionEffect(e,t)},a.useLayoutEffect=function(e,t){return U.current.useLayoutEffect(e,t)},a.useMemo=function(e,t){return U.current.useMemo(e,t)},a.useReducer=function(e,t,r){return U.current.useReducer(e,t,r)},a.useRef=function(e){return U.current.useRef(e)},a.useState=function(e){return U.current.useState(e)},a.useSyncExternalStore=function(e,t,r){return U.current.useSyncExternalStore(e,t,r)},a.useTransition=function(){return U.current.useTransition()},a.version="18.3.1",u.exports=a;var q=e("r",u.exports);const M=e("R",r(q));e("a",t({__proto__:null,default:M},[q]));
/**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
var z=q,B=Symbol.for("react.element"),H=Symbol.for("react.fragment"),W=Object.prototype.hasOwnProperty,Y=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function J(e,t,r){var n,o={},u=null,a=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(a=t.ref),t)W.call(t,n)&&!G.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:B,type:e,key:u,ref:a,props:o,_owner:Y.current}}o.Fragment=H,o.jsx=J,o.jsxs=J,n.exports=o,e("j",n.exports)}}}));
