(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Xw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ay={exports:{}},iu={},ly={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),Jw=Symbol.for("react.portal"),Zw=Symbol.for("react.fragment"),eE=Symbol.for("react.strict_mode"),tE=Symbol.for("react.profiler"),nE=Symbol.for("react.provider"),rE=Symbol.for("react.context"),iE=Symbol.for("react.forward_ref"),sE=Symbol.for("react.suspense"),oE=Symbol.for("react.memo"),aE=Symbol.for("react.lazy"),Pp=Symbol.iterator;function lE(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var uy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cy=Object.assign,hy={};function us(t,e,n){this.props=t,this.context=e,this.refs=hy,this.updater=n||uy}us.prototype.isReactComponent={};us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function dy(){}dy.prototype=us.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=hy,this.updater=n||uy}var id=rd.prototype=new dy;id.constructor=rd;cy(id,us.prototype);id.isPureReactComponent=!0;var Np=Array.isArray,fy=Object.prototype.hasOwnProperty,sd={current:null},py={key:!0,ref:!0,__self:!0,__source:!0};function my(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fy.call(e,r)&&!py.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:zo,type:t,key:s,ref:o,props:i,_owner:sd.current}}function uE(t,e){return{$$typeof:zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function od(t){return typeof t=="object"&&t!==null&&t.$$typeof===zo}function cE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bp=/\/+/g;function ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cE(""+t.key):e.toString(36)}function Ya(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zo:case Jw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ec(o,0):r,Np(i)?(n="",t!=null&&(n=t.replace(bp,"$&/")+"/"),Ya(i,e,n,"",function(h){return h})):i!=null&&(od(i)&&(i=uE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Np(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ec(s,l);o+=Ya(s,e,n,u,i)}else if(u=lE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ec(s,l++),o+=Ya(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Aa(t,e,n){if(t==null)return t;var r=[],i=0;return Ya(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},Xa={transition:null},dE={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:sd};function gy(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Aa,forEach:function(t,e,n){Aa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Aa(t,function(){e++}),e},toArray:function(t){return Aa(t,function(e){return e})||[]},only:function(t){if(!od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=us;ne.Fragment=Zw;ne.Profiler=tE;ne.PureComponent=rd;ne.StrictMode=eE;ne.Suspense=sE;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dE;ne.act=gy;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=sd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)fy.call(e,u)&&!py.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:zo,type:t.type,key:i,ref:s,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:rE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:nE,_context:t},t.Consumer=t};ne.createElement=my;ne.createFactory=function(t){var e=my.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:iE,render:t}};ne.isValidElement=od;ne.lazy=function(t){return{$$typeof:aE,_payload:{_status:-1,_result:t},_init:hE}};ne.memo=function(t,e){return{$$typeof:oE,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};ne.unstable_act=gy;ne.useCallback=function(t,e){return yt.current.useCallback(t,e)};ne.useContext=function(t){return yt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return yt.current.useEffect(t,e)};ne.useId=function(){return yt.current.useId()};ne.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return yt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};ne.useRef=function(t){return yt.current.useRef(t)};ne.useState=function(t){return yt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return yt.current.useTransition()};ne.version="18.3.1";ly.exports=ne;var K=ly.exports;const fE=Xw(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pE=K,mE=Symbol.for("react.element"),gE=Symbol.for("react.fragment"),yE=Object.prototype.hasOwnProperty,vE=pE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_E={key:!0,ref:!0,__self:!0,__source:!0};function yy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yE.call(e,r)&&!_E.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:mE,type:t,key:s,ref:o,props:i,_owner:vE.current}}iu.Fragment=gE;iu.jsx=yy;iu.jsxs=yy;ay.exports=iu;var g=ay.exports,Uc={},vy={exports:{}},Lt={},_y={exports:{}},wy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,X){var Z=H.length;H.push(X);e:for(;0<Z;){var ve=Z-1>>>1,he=H[ve];if(0<i(he,X))H[ve]=X,H[Z]=he,Z=ve;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var X=H[0],Z=H.pop();if(Z!==X){H[0]=Z;e:for(var ve=0,he=H.length,me=he>>>1;ve<me;){var dt=2*(ve+1)-1,Wt=H[dt],At=dt+1,qe=H[At];if(0>i(Wt,Z))At<he&&0>i(qe,Wt)?(H[ve]=qe,H[At]=Z,ve=At):(H[ve]=Wt,H[dt]=Z,ve=dt);else if(At<he&&0>i(qe,Z))H[ve]=qe,H[At]=Z,ve=At;else break e}}return X}function i(H,X){var Z=H.sortIndex-X.sortIndex;return Z!==0?Z:H.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,y=null,v=3,A=!1,P=!1,N=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(H){for(var X=n(h);X!==null;){if(X.callback===null)r(h);else if(X.startTime<=H)r(h),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(h)}}function D(H){if(N=!1,k(H),!P)if(n(u)!==null)P=!0,Hn(U);else{var X=n(h);X!==null&&Ht(D,X.startTime-H)}}function U(H,X){P=!1,N&&(N=!1,S(m),m=-1),A=!0;var Z=v;try{for(k(X),y=n(u);y!==null&&(!(y.expirationTime>X)||H&&!x());){var ve=y.callback;if(typeof ve=="function"){y.callback=null,v=y.priorityLevel;var he=ve(y.expirationTime<=X);X=t.unstable_now(),typeof he=="function"?y.callback=he:y===n(u)&&r(u),k(X)}else r(u);y=n(u)}if(y!==null)var me=!0;else{var dt=n(h);dt!==null&&Ht(D,dt.startTime-X),me=!1}return me}finally{y=null,v=Z,A=!1}}var z=!1,_=null,m=-1,w=5,T=-1;function x(){return!(t.unstable_now()-T<w)}function C(){if(_!==null){var H=t.unstable_now();T=H;var X=!0;try{X=_(!0,H)}finally{X?I():(z=!1,_=null)}}else z=!1}var I;if(typeof E=="function")I=function(){E(C)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,tt=We.port2;We.port1.onmessage=C,I=function(){tt.postMessage(null)}}else I=function(){L(C,0)};function Hn(H){_=H,z||(z=!0,I())}function Ht(H,X){m=L(function(){H(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){P||A||(P=!0,Hn(U))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(H){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var Z=v;v=X;try{return H()}finally{v=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=v;v=H;try{return X()}finally{v=Z}},t.unstable_scheduleCallback=function(H,X,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,H){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=Z+he,H={id:f++,callback:X,priorityLevel:H,startTime:Z,expirationTime:he,sortIndex:-1},Z>ve?(H.sortIndex=Z,e(h,H),n(u)===null&&H===n(h)&&(N?(S(m),m=-1):N=!0,Ht(D,Z-ve))):(H.sortIndex=he,e(u,H),P||A||(P=!0,Hn(U))),H},t.unstable_shouldYield=x,t.unstable_wrapCallback=function(H){var X=v;return function(){var Z=v;v=X;try{return H.apply(this,arguments)}finally{v=Z}}}})(wy);_y.exports=wy;var wE=_y.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EE=K,Dt=wE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ey=new Set,po={};function ci(t,e){Ki(t,e),Ki(t+"Capture",e)}function Ki(t,e){for(po[t]=e,t=0;t<e.length;t++)Ey.add(e[t])}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=Object.prototype.hasOwnProperty,TE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dp={},Lp={};function IE(t){return zc.call(Lp,t)?!0:zc.call(Dp,t)?!1:TE.test(t)?Lp[t]=!0:(Dp[t]=!0,!1)}function SE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kE(t,e,n,r){if(e===null||typeof e>"u"||SE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ad=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ad,ld);Ze[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ad,ld);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ad,ld);Ze[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ud(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kE(e,n,i,r)&&(n=null),r||i===null?IE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=EE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),Si=Symbol.for("react.portal"),ki=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),Ty=Symbol.for("react.provider"),Iy=Symbol.for("react.context"),hd=Symbol.for("react.forward_ref"),$c=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),Jn=Symbol.for("react.lazy"),Sy=Symbol.for("react.offscreen"),Vp=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=Vp&&t[Vp]||t["@@iterator"],typeof t=="function"?t:null)}var xe=Object.assign,tc;function $s(t){if(tc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tc=e&&e[1]||""}return`
`+tc+t}var nc=!1;function rc(t,e){if(!t||nc)return"";nc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function AE(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function Wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ki:return"Fragment";case Si:return"Portal";case Bc:return"Profiler";case cd:return"StrictMode";case $c:return"Suspense";case Hc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Iy:return(t.displayName||"Context")+".Consumer";case Ty:return(t._context.displayName||"Context")+".Provider";case hd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dd:return e=t.displayName||null,e!==null?e:Wc(t.type)||"Memo";case Jn:e=t._payload,t=t._init;try{return Wc(t(e))}catch{}}return null}function xE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(e);case 8:return e===cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ky(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function CE(t){var e=ky(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ca(t){t._valueTracker||(t._valueTracker=CE(t))}function Ay(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ky(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qc(t,e){var n=e.checked;return xe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Op(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xy(t,e){e=e.checked,e!=null&&ud(t,"checked",e,!1)}function Kc(t,e){xy(t,e);var n=Tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gc(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gc(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function Mi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return xe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Hs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function Cy(t,e){var n=Tr(e.value),r=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ry(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ry(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,Py=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RE=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){RE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function Ny(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function by(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ny(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PE=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xc(t,e){if(e){if(PE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Jc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=null;function fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var eh=null,ji=null,Fi=null;function Up(t){if(t=Ho(t)){if(typeof eh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=uu(e),eh(t.stateNode,t.type,e))}}function Dy(t){ji?Fi?Fi.push(t):Fi=[t]:ji=t}function Ly(){if(ji){var t=ji,e=Fi;if(Fi=ji=null,Up(t),e)for(t=0;t<e.length;t++)Up(e[t])}}function Vy(t,e){return t(e)}function Oy(){}var ic=!1;function My(t,e,n){if(ic)return t(e,n);ic=!0;try{return Vy(t,e,n)}finally{ic=!1,(ji!==null||Fi!==null)&&(Oy(),Ly())}}function go(t,e){var n=t.stateNode;if(n===null)return null;var r=uu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var th=!1;if(Ln)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){th=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{th=!1}function NE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var eo=!1,_l=null,wl=!1,nh=null,bE={onError:function(t){eo=!0,_l=t}};function DE(t,e,n,r,i,s,o,l,u){eo=!1,_l=null,NE.apply(bE,arguments)}function LE(t,e,n,r,i,s,o,l,u){if(DE.apply(this,arguments),eo){if(eo){var h=_l;eo=!1,_l=null}else throw Error(F(198));wl||(wl=!0,nh=h)}}function hi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function jy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zp(t){if(hi(t)!==t)throw Error(F(188))}function VE(t){var e=t.alternate;if(!e){if(e=hi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zp(i),t;if(s===r)return zp(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Fy(t){return t=VE(t),t!==null?Uy(t):null}function Uy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Uy(t);if(e!==null)return e;t=t.sibling}return null}var zy=Dt.unstable_scheduleCallback,Bp=Dt.unstable_cancelCallback,OE=Dt.unstable_shouldYield,ME=Dt.unstable_requestPaint,be=Dt.unstable_now,jE=Dt.unstable_getCurrentPriorityLevel,pd=Dt.unstable_ImmediatePriority,By=Dt.unstable_UserBlockingPriority,El=Dt.unstable_NormalPriority,FE=Dt.unstable_LowPriority,$y=Dt.unstable_IdlePriority,su=null,un=null;function UE(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:$E,zE=Math.log,BE=Math.LN2;function $E(t){return t>>>=0,t===0?32:31-(zE(t)/BE|0)|0}var Pa=64,Na=4194304;function Ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ws(l):(s&=o,s!==0&&(r=Ws(s)))}else o=n&~i,o!==0?r=Ws(o):s!==0&&(r=Ws(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),i=1<<n,r|=t[n],e&=~i;return r}function HE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function WE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=HE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hy(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function sc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function qE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function Wy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qy,gd,Ky,Gy,Qy,ih=!1,ba=[],ur=null,cr=null,hr=null,yo=new Map,vo=new Map,er=[],KE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $p(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vo.delete(e.pointerId)}}function Os(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ho(e),e!==null&&gd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function GE(t,e,n,r,i){switch(e){case"focusin":return ur=Os(ur,t,e,n,r,i),!0;case"dragenter":return cr=Os(cr,t,e,n,r,i),!0;case"mouseover":return hr=Os(hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return yo.set(s,Os(yo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vo.set(s,Os(vo.get(s)||null,t,e,n,r,i)),!0}return!1}function Yy(t){var e=Wr(t.target);if(e!==null){var n=hi(e);if(n!==null){if(e=n.tag,e===13){if(e=jy(n),e!==null){t.blockedOn=e,Qy(t.priority,function(){Ky(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ja(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zc=r,n.target.dispatchEvent(r),Zc=null}else return e=Ho(n),e!==null&&gd(e),t.blockedOn=n,!1;e.shift()}return!0}function Hp(t,e,n){Ja(t)&&n.delete(e)}function QE(){ih=!1,ur!==null&&Ja(ur)&&(ur=null),cr!==null&&Ja(cr)&&(cr=null),hr!==null&&Ja(hr)&&(hr=null),yo.forEach(Hp),vo.forEach(Hp)}function Ms(t,e){t.blockedOn===e&&(t.blockedOn=null,ih||(ih=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,QE)))}function _o(t){function e(i){return Ms(i,t)}if(0<ba.length){Ms(ba[0],t);for(var n=1;n<ba.length;n++){var r=ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&Ms(ur,t),cr!==null&&Ms(cr,t),hr!==null&&Ms(hr,t),yo.forEach(e),vo.forEach(e),n=0;n<er.length;n++)r=er[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<er.length&&(n=er[0],n.blockedOn===null);)Yy(n),n.blockedOn===null&&er.shift()}var Ui=Bn.ReactCurrentBatchConfig,Il=!0;function YE(t,e,n,r){var i=de,s=Ui.transition;Ui.transition=null;try{de=1,yd(t,e,n,r)}finally{de=i,Ui.transition=s}}function XE(t,e,n,r){var i=de,s=Ui.transition;Ui.transition=null;try{de=4,yd(t,e,n,r)}finally{de=i,Ui.transition=s}}function yd(t,e,n,r){if(Il){var i=sh(t,e,n,r);if(i===null)mc(t,e,r,Sl,n),$p(t,r);else if(GE(i,t,e,n,r))r.stopPropagation();else if($p(t,r),e&4&&-1<KE.indexOf(t)){for(;i!==null;){var s=Ho(i);if(s!==null&&qy(s),s=sh(t,e,n,r),s===null&&mc(t,e,r,Sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mc(t,e,r,null,n)}}var Sl=null;function sh(t,e,n,r){if(Sl=null,t=fd(r),t=Wr(t),t!==null)if(e=hi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=jy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Sl=t,null}function Xy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jE()){case pd:return 1;case By:return 4;case El:case FE:return 16;case $y:return 536870912;default:return 16}default:return 16}}var or=null,vd=null,Za=null;function Jy(){if(Za)return Za;var t,e=vd,n=e.length,r,i="value"in or?or.value:or.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Za=i.slice(t,1<r?1-r:void 0)}function el(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Wp(){return!1}function Vt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:Wp,this.isPropagationStopped=Wp,this}return xe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=Vt(cs),$o=xe({},cs,{view:0,detail:0}),JE=Vt($o),oc,ac,js,ou=xe({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(oc=t.screenX-js.screenX,ac=t.screenY-js.screenY):ac=oc=0,js=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),qp=Vt(ou),ZE=xe({},ou,{dataTransfer:0}),eT=Vt(ZE),tT=xe({},$o,{relatedTarget:0}),lc=Vt(tT),nT=xe({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),rT=Vt(nT),iT=xe({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sT=Vt(iT),oT=xe({},cs,{data:0}),Kp=Vt(oT),aT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uT[t])?!!e[t]:!1}function wd(){return cT}var hT=xe({},$o,{key:function(t){if(t.key){var e=aT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=el(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?el(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?el(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dT=Vt(hT),fT=xe({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Vt(fT),pT=xe({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),mT=Vt(pT),gT=xe({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),yT=Vt(gT),vT=xe({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_T=Vt(vT),wT=[9,13,27,32],Ed=Ln&&"CompositionEvent"in window,to=null;Ln&&"documentMode"in document&&(to=document.documentMode);var ET=Ln&&"TextEvent"in window&&!to,Zy=Ln&&(!Ed||to&&8<to&&11>=to),Qp=" ",Yp=!1;function ev(t,e){switch(t){case"keyup":return wT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function TT(t,e){switch(t){case"compositionend":return tv(e);case"keypress":return e.which!==32?null:(Yp=!0,Qp);case"textInput":return t=e.data,t===Qp&&Yp?null:t;default:return null}}function IT(t,e){if(Ai)return t==="compositionend"||!Ed&&ev(t,e)?(t=Jy(),Za=vd=or=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zy&&e.locale!=="ko"?null:e.data;default:return null}}var ST={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ST[t.type]:e==="textarea"}function nv(t,e,n,r){Dy(r),e=kl(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var no=null,wo=null;function kT(t){fv(t,0)}function au(t){var e=Ri(t);if(Ay(e))return t}function AT(t,e){if(t==="change")return e}var rv=!1;if(Ln){var uc;if(Ln){var cc="oninput"in document;if(!cc){var Jp=document.createElement("div");Jp.setAttribute("oninput","return;"),cc=typeof Jp.oninput=="function"}uc=cc}else uc=!1;rv=uc&&(!document.documentMode||9<document.documentMode)}function Zp(){no&&(no.detachEvent("onpropertychange",iv),wo=no=null)}function iv(t){if(t.propertyName==="value"&&au(wo)){var e=[];nv(e,wo,t,fd(t)),My(kT,e)}}function xT(t,e,n){t==="focusin"?(Zp(),no=e,wo=n,no.attachEvent("onpropertychange",iv)):t==="focusout"&&Zp()}function CT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(wo)}function RT(t,e){if(t==="click")return au(e)}function PT(t,e){if(t==="input"||t==="change")return au(e)}function NT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nn=typeof Object.is=="function"?Object.is:NT;function Eo(t,e){if(nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zc.call(e,i)||!nn(t[i],e[i]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,e){var n=em(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=em(n)}}function sv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?sv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ov(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bT(t){var e=ov(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&sv(n.ownerDocument.documentElement,n)){if(r!==null&&Td(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=tm(n,s);var o=tm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var DT=Ln&&"documentMode"in document&&11>=document.documentMode,xi=null,oh=null,ro=null,ah=!1;function nm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ah||xi==null||xi!==vl(r)||(r=xi,"selectionStart"in r&&Td(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&Eo(ro,r)||(ro=r,r=kl(oh,"onSelect"),0<r.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=xi)))}function La(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ci={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},hc={},av={};Ln&&(av=document.createElement("div").style,"AnimationEvent"in window||(delete Ci.animationend.animation,delete Ci.animationiteration.animation,delete Ci.animationstart.animation),"TransitionEvent"in window||delete Ci.transitionend.transition);function lu(t){if(hc[t])return hc[t];if(!Ci[t])return t;var e=Ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in av)return hc[t]=e[n];return t}var lv=lu("animationend"),uv=lu("animationiteration"),cv=lu("animationstart"),hv=lu("transitionend"),dv=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){dv.set(t,e),ci(e,[t])}for(var dc=0;dc<rm.length;dc++){var fc=rm[dc],LT=fc.toLowerCase(),VT=fc[0].toUpperCase()+fc.slice(1);xr(LT,"on"+VT)}xr(lv,"onAnimationEnd");xr(uv,"onAnimationIteration");xr(cv,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(hv,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),OT=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function im(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LE(r,e,void 0,t),t.currentTarget=null}function fv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;im(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;im(i,l,h),s=u}}}if(wl)throw t=nh,wl=!1,nh=null,t}function we(t,e){var n=e[dh];n===void 0&&(n=e[dh]=new Set);var r=t+"__bubble";n.has(r)||(pv(e,t,2,!1),n.add(r))}function pc(t,e,n){var r=0;e&&(r|=4),pv(n,t,r,e)}var Va="_reactListening"+Math.random().toString(36).slice(2);function To(t){if(!t[Va]){t[Va]=!0,Ey.forEach(function(n){n!=="selectionchange"&&(OT.has(n)||pc(n,!1,t),pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Va]||(e[Va]=!0,pc("selectionchange",!1,e))}}function pv(t,e,n,r){switch(Xy(e)){case 1:var i=YE;break;case 4:i=XE;break;default:i=yd}n=i.bind(null,e,n,t),i=void 0,!th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Wr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}My(function(){var h=s,f=fd(n),y=[];e:{var v=dv.get(t);if(v!==void 0){var A=_d,P=t;switch(t){case"keypress":if(el(n)===0)break e;case"keydown":case"keyup":A=dT;break;case"focusin":P="focus",A=lc;break;case"focusout":P="blur",A=lc;break;case"beforeblur":case"afterblur":A=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=eT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=mT;break;case lv:case uv:case cv:A=rT;break;case hv:A=yT;break;case"scroll":A=JE;break;case"wheel":A=_T;break;case"copy":case"cut":case"paste":A=sT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Gp}var N=(e&4)!==0,L=!N&&t==="scroll",S=N?v!==null?v+"Capture":null:v;N=[];for(var E=h,k;E!==null;){k=E;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,S!==null&&(D=go(E,S),D!=null&&N.push(Io(E,D,k)))),L)break;E=E.return}0<N.length&&(v=new A(v,P,null,n,f),y.push({event:v,listeners:N}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",v&&n!==Zc&&(P=n.relatedTarget||n.fromElement)&&(Wr(P)||P[Vn]))break e;if((A||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,A?(P=n.relatedTarget||n.toElement,A=h,P=P?Wr(P):null,P!==null&&(L=hi(P),P!==L||P.tag!==5&&P.tag!==6)&&(P=null)):(A=null,P=h),A!==P)){if(N=qp,D="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=Gp,D="onPointerLeave",S="onPointerEnter",E="pointer"),L=A==null?v:Ri(A),k=P==null?v:Ri(P),v=new N(D,E+"leave",A,n,f),v.target=L,v.relatedTarget=k,D=null,Wr(f)===h&&(N=new N(S,E+"enter",P,n,f),N.target=k,N.relatedTarget=L,D=N),L=D,A&&P)t:{for(N=A,S=P,E=0,k=N;k;k=wi(k))E++;for(k=0,D=S;D;D=wi(D))k++;for(;0<E-k;)N=wi(N),E--;for(;0<k-E;)S=wi(S),k--;for(;E--;){if(N===S||S!==null&&N===S.alternate)break t;N=wi(N),S=wi(S)}N=null}else N=null;A!==null&&sm(y,v,A,N,!1),P!==null&&L!==null&&sm(y,L,P,N,!0)}}e:{if(v=h?Ri(h):window,A=v.nodeName&&v.nodeName.toLowerCase(),A==="select"||A==="input"&&v.type==="file")var U=AT;else if(Xp(v))if(rv)U=PT;else{U=CT;var z=xT}else(A=v.nodeName)&&A.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(U=RT);if(U&&(U=U(t,h))){nv(y,U,n,f);break e}z&&z(t,v,h),t==="focusout"&&(z=v._wrapperState)&&z.controlled&&v.type==="number"&&Gc(v,"number",v.value)}switch(z=h?Ri(h):window,t){case"focusin":(Xp(z)||z.contentEditable==="true")&&(xi=z,oh=h,ro=null);break;case"focusout":ro=oh=xi=null;break;case"mousedown":ah=!0;break;case"contextmenu":case"mouseup":case"dragend":ah=!1,nm(y,n,f);break;case"selectionchange":if(DT)break;case"keydown":case"keyup":nm(y,n,f)}var _;if(Ed)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else Ai?ev(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Zy&&n.locale!=="ko"&&(Ai||m!=="onCompositionStart"?m==="onCompositionEnd"&&Ai&&(_=Jy()):(or=f,vd="value"in or?or.value:or.textContent,Ai=!0)),z=kl(h,m),0<z.length&&(m=new Kp(m,t,null,n,f),y.push({event:m,listeners:z}),_?m.data=_:(_=tv(n),_!==null&&(m.data=_)))),(_=ET?TT(t,n):IT(t,n))&&(h=kl(h,"onBeforeInput"),0<h.length&&(f=new Kp("onBeforeInput","beforeinput",null,n,f),y.push({event:f,listeners:h}),f.data=_))}fv(y,e)})}function Io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=go(t,n),s!=null&&r.unshift(Io(t,s,i)),s=go(t,e),s!=null&&r.push(Io(t,s,i))),t=t.return}return r}function wi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=go(n,s),u!=null&&o.unshift(Io(n,u,l))):i||(u=go(n,s),u!=null&&o.push(Io(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var MT=/\r\n?/g,jT=/\u0000|\uFFFD/g;function om(t){return(typeof t=="string"?t:""+t).replace(MT,`
`).replace(jT,"")}function Oa(t,e,n){if(e=om(e),om(t)!==e&&n)throw Error(F(425))}function Al(){}var lh=null,uh=null;function ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hh=typeof setTimeout=="function"?setTimeout:void 0,FT=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,UT=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(zT)}:hh;function zT(t){setTimeout(function(){throw t})}function gc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),_o(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_o(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var hs=Math.random().toString(36).slice(2),an="__reactFiber$"+hs,So="__reactProps$"+hs,Vn="__reactContainer$"+hs,dh="__reactEvents$"+hs,BT="__reactListeners$"+hs,$T="__reactHandles$"+hs;function Wr(t){var e=t[an];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vn]||n[an]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lm(t);t!==null;){if(n=t[an])return n;t=lm(t)}return e}t=n,n=t.parentNode}return null}function Ho(t){return t=t[an]||t[Vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ri(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function uu(t){return t[So]||null}var fh=[],Pi=-1;function Cr(t){return{current:t}}function Ee(t){0>Pi||(t.current=fh[Pi],fh[Pi]=null,Pi--)}function ye(t,e){Pi++,fh[Pi]=t.current,t.current=e}var Ir={},ct=Cr(Ir),It=Cr(!1),Zr=Ir;function Gi(t,e){var n=t.type.contextTypes;if(!n)return Ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function xl(){Ee(It),Ee(ct)}function um(t,e,n){if(ct.current!==Ir)throw Error(F(168));ye(ct,e),ye(It,n)}function mv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,xE(t)||"Unknown",i));return xe({},n,r)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,Zr=ct.current,ye(ct,t),ye(It,It.current),!0}function cm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=mv(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,Ee(It),Ee(ct),ye(ct,t)):Ee(It),ye(It,n)}var An=null,cu=!1,yc=!1;function gv(t){An===null?An=[t]:An.push(t)}function HT(t){cu=!0,gv(t)}function Rr(){if(!yc&&An!==null){yc=!0;var t=0,e=de;try{var n=An;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,cu=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),zy(pd,Rr),i}finally{de=e,yc=!1}}return null}var Ni=[],bi=0,Rl=null,Pl=0,jt=[],Ft=0,ei=null,xn=1,Cn="";function Br(t,e){Ni[bi++]=Pl,Ni[bi++]=Rl,Rl=t,Pl=e}function yv(t,e,n){jt[Ft++]=xn,jt[Ft++]=Cn,jt[Ft++]=ei,ei=t;var r=xn;t=Cn;var i=32-Zt(r)-1;r&=~(1<<i),n+=1;var s=32-Zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xn=1<<32-Zt(e)+i|n<<i|r,Cn=s+t}else xn=1<<s|n<<i|r,Cn=t}function Id(t){t.return!==null&&(Br(t,1),yv(t,1,0))}function Sd(t){for(;t===Rl;)Rl=Ni[--bi],Ni[bi]=null,Pl=Ni[--bi],Ni[bi]=null;for(;t===ei;)ei=jt[--Ft],jt[Ft]=null,Cn=jt[--Ft],jt[Ft]=null,xn=jt[--Ft],jt[Ft]=null}var Nt=null,Rt=null,Ie=!1,Jt=null;function vv(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Nt=t,Rt=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Nt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:xn,overflow:Cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Nt=t,Rt=null,!0):!1;default:return!1}}function ph(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mh(t){if(Ie){var e=Rt;if(e){var n=e;if(!hm(t,e)){if(ph(t))throw Error(F(418));e=dr(n.nextSibling);var r=Nt;e&&hm(t,e)?vv(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Nt=t)}}else{if(ph(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ie=!1,Nt=t}}}function dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Nt=t}function Ma(t){if(t!==Nt)return!1;if(!Ie)return dm(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ch(t.type,t.memoizedProps)),e&&(e=Rt)){if(ph(t))throw _v(),Error(F(418));for(;e;)vv(t,e),e=dr(e.nextSibling)}if(dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Nt?dr(t.stateNode.nextSibling):null;return!0}function _v(){for(var t=Rt;t;)t=dr(t.nextSibling)}function Qi(){Rt=Nt=null,Ie=!1}function kd(t){Jt===null?Jt=[t]:Jt.push(t)}var WT=Bn.ReactCurrentBatchConfig;function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fm(t){var e=t._init;return e(t._payload)}function wv(t){function e(S,E){if(t){var k=S.deletions;k===null?(S.deletions=[E],S.flags|=16):k.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function i(S,E){return S=gr(S,E),S.index=0,S.sibling=null,S}function s(S,E,k){return S.index=k,t?(k=S.alternate,k!==null?(k=k.index,k<E?(S.flags|=2,E):k):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,k,D){return E===null||E.tag!==6?(E=Sc(k,S.mode,D),E.return=S,E):(E=i(E,k),E.return=S,E)}function u(S,E,k,D){var U=k.type;return U===ki?f(S,E,k.props.children,D,k.key):E!==null&&(E.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Jn&&fm(U)===E.type)?(D=i(E,k.props),D.ref=Fs(S,E,k),D.return=S,D):(D=al(k.type,k.key,k.props,null,S.mode,D),D.ref=Fs(S,E,k),D.return=S,D)}function h(S,E,k,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=kc(k,S.mode,D),E.return=S,E):(E=i(E,k.children||[]),E.return=S,E)}function f(S,E,k,D,U){return E===null||E.tag!==7?(E=Yr(k,S.mode,D,U),E.return=S,E):(E=i(E,k),E.return=S,E)}function y(S,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Sc(""+E,S.mode,k),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case xa:return k=al(E.type,E.key,E.props,null,S.mode,k),k.ref=Fs(S,null,E),k.return=S,k;case Si:return E=kc(E,S.mode,k),E.return=S,E;case Jn:var D=E._init;return y(S,D(E._payload),k)}if(Hs(E)||Ls(E))return E=Yr(E,S.mode,k,null),E.return=S,E;ja(S,E)}return null}function v(S,E,k,D){var U=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return U!==null?null:l(S,E,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case xa:return k.key===U?u(S,E,k,D):null;case Si:return k.key===U?h(S,E,k,D):null;case Jn:return U=k._init,v(S,E,U(k._payload),D)}if(Hs(k)||Ls(k))return U!==null?null:f(S,E,k,D,null);ja(S,k)}return null}function A(S,E,k,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(k)||null,l(E,S,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case xa:return S=S.get(D.key===null?k:D.key)||null,u(E,S,D,U);case Si:return S=S.get(D.key===null?k:D.key)||null,h(E,S,D,U);case Jn:var z=D._init;return A(S,E,k,z(D._payload),U)}if(Hs(D)||Ls(D))return S=S.get(k)||null,f(E,S,D,U,null);ja(E,D)}return null}function P(S,E,k,D){for(var U=null,z=null,_=E,m=E=0,w=null;_!==null&&m<k.length;m++){_.index>m?(w=_,_=null):w=_.sibling;var T=v(S,_,k[m],D);if(T===null){_===null&&(_=w);break}t&&_&&T.alternate===null&&e(S,_),E=s(T,E,m),z===null?U=T:z.sibling=T,z=T,_=w}if(m===k.length)return n(S,_),Ie&&Br(S,m),U;if(_===null){for(;m<k.length;m++)_=y(S,k[m],D),_!==null&&(E=s(_,E,m),z===null?U=_:z.sibling=_,z=_);return Ie&&Br(S,m),U}for(_=r(S,_);m<k.length;m++)w=A(_,S,m,k[m],D),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?m:w.key),E=s(w,E,m),z===null?U=w:z.sibling=w,z=w);return t&&_.forEach(function(x){return e(S,x)}),Ie&&Br(S,m),U}function N(S,E,k,D){var U=Ls(k);if(typeof U!="function")throw Error(F(150));if(k=U.call(k),k==null)throw Error(F(151));for(var z=U=null,_=E,m=E=0,w=null,T=k.next();_!==null&&!T.done;m++,T=k.next()){_.index>m?(w=_,_=null):w=_.sibling;var x=v(S,_,T.value,D);if(x===null){_===null&&(_=w);break}t&&_&&x.alternate===null&&e(S,_),E=s(x,E,m),z===null?U=x:z.sibling=x,z=x,_=w}if(T.done)return n(S,_),Ie&&Br(S,m),U;if(_===null){for(;!T.done;m++,T=k.next())T=y(S,T.value,D),T!==null&&(E=s(T,E,m),z===null?U=T:z.sibling=T,z=T);return Ie&&Br(S,m),U}for(_=r(S,_);!T.done;m++,T=k.next())T=A(_,S,m,T.value,D),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?m:T.key),E=s(T,E,m),z===null?U=T:z.sibling=T,z=T);return t&&_.forEach(function(C){return e(S,C)}),Ie&&Br(S,m),U}function L(S,E,k,D){if(typeof k=="object"&&k!==null&&k.type===ki&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case xa:e:{for(var U=k.key,z=E;z!==null;){if(z.key===U){if(U=k.type,U===ki){if(z.tag===7){n(S,z.sibling),E=i(z,k.props.children),E.return=S,S=E;break e}}else if(z.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Jn&&fm(U)===z.type){n(S,z.sibling),E=i(z,k.props),E.ref=Fs(S,z,k),E.return=S,S=E;break e}n(S,z);break}else e(S,z);z=z.sibling}k.type===ki?(E=Yr(k.props.children,S.mode,D,k.key),E.return=S,S=E):(D=al(k.type,k.key,k.props,null,S.mode,D),D.ref=Fs(S,E,k),D.return=S,S=D)}return o(S);case Si:e:{for(z=k.key;E!==null;){if(E.key===z)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){n(S,E.sibling),E=i(E,k.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=kc(k,S.mode,D),E.return=S,S=E}return o(S);case Jn:return z=k._init,L(S,E,z(k._payload),D)}if(Hs(k))return P(S,E,k,D);if(Ls(k))return N(S,E,k,D);ja(S,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,E!==null&&E.tag===6?(n(S,E.sibling),E=i(E,k),E.return=S,S=E):(n(S,E),E=Sc(k,S.mode,D),E.return=S,S=E),o(S)):n(S,E)}return L}var Yi=wv(!0),Ev=wv(!1),Nl=Cr(null),bl=null,Di=null,Ad=null;function xd(){Ad=Di=bl=null}function Cd(t){var e=Nl.current;Ee(Nl),t._currentValue=e}function gh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function zi(t,e){bl=t,Ad=Di=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Bt(t){var e=t._currentValue;if(Ad!==t)if(t={context:t,memoizedValue:e,next:null},Di===null){if(bl===null)throw Error(F(308));Di=t,bl.dependencies={lanes:0,firstContext:t}}else Di=Di.next=t;return e}var qr=null;function Rd(t){qr===null?qr=[t]:qr.push(t)}function Tv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rd(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zn=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,Rd(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,md(t,n)}}function pm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,r){var i=t.updateQueue;Zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var y=i.baseState;o=0,f=h=u=null,l=s;do{var v=l.lane,A=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,N=l;switch(v=e,A=n,N.tag){case 1:if(P=N.payload,typeof P=="function"){y=P.call(A,y,v);break e}y=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=N.payload,v=typeof P=="function"?P.call(A,y,v):P,v==null)break e;y=xe({},y,v);break e;case 2:Zn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else A={eventTime:A,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=y):f=f.next=A,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(f===null&&(u=y),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=y}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Wo={},cn=Cr(Wo),ko=Cr(Wo),Ao=Cr(Wo);function Kr(t){if(t===Wo)throw Error(F(174));return t}function Nd(t,e){switch(ye(Ao,e),ye(ko,t),ye(cn,Wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yc(e,t)}Ee(cn),ye(cn,e)}function Xi(){Ee(cn),Ee(ko),Ee(Ao)}function Sv(t){Kr(Ao.current);var e=Kr(cn.current),n=Yc(e,t.type);e!==n&&(ye(ko,t),ye(cn,n))}function bd(t){ko.current===t&&(Ee(cn),Ee(ko))}var ke=Cr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function Dd(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var nl=Bn.ReactCurrentDispatcher,_c=Bn.ReactCurrentBatchConfig,ti=0,Ae=null,Oe=null,Be=null,Vl=!1,io=!1,xo=0,qT=0;function it(){throw Error(F(321))}function Ld(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nn(t[n],e[n]))return!1;return!0}function Vd(t,e,n,r,i,s){if(ti=s,Ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nl.current=t===null||t.memoizedState===null?YT:XT,t=n(r,i),io){s=0;do{if(io=!1,xo=0,25<=s)throw Error(F(301));s+=1,Be=Oe=null,e.updateQueue=null,nl.current=JT,t=n(r,i)}while(io)}if(nl.current=Ol,e=Oe!==null&&Oe.next!==null,ti=0,Be=Oe=Ae=null,Vl=!1,e)throw Error(F(300));return t}function Od(){var t=xo!==0;return xo=0,t}function on(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ae.memoizedState=Be=t:Be=Be.next=t,Be}function $t(){if(Oe===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Be===null?Ae.memoizedState:Be.next;if(e!==null)Be=e,Oe=t;else{if(t===null)throw Error(F(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Be===null?Ae.memoizedState=Be=t:Be=Be.next=t}return Be}function Co(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=$t(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((ti&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var y={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,Ae.lanes|=f,ni|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,nn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ae.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=$t(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function kv(){}function Av(t,e){var n=Ae,r=$t(),i=e(),s=!nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Md(Rv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Ro(9,Cv.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(F(349));ti&30||xv(n,e,i)}return i}function xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cv(t,e,n,r){e.value=n,e.getSnapshot=r,Pv(e)&&Nv(t)}function Rv(t,e,n){return n(function(){Pv(e)&&Nv(t)})}function Pv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nn(t,n)}catch{return!0}}function Nv(t){var e=On(t,1);e!==null&&en(e,t,1,-1)}function gm(t){var e=on();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},e.queue=t,t=t.dispatch=QT.bind(null,Ae,t),[e.memoizedState,t]}function Ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ae.updateQueue,e===null?(e={lastEffect:null,stores:null},Ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bv(){return $t().memoizedState}function rl(t,e,n,r){var i=on();Ae.flags|=t,i.memoizedState=Ro(1|e,n,void 0,r===void 0?null:r)}function hu(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Ld(r,o.deps)){i.memoizedState=Ro(e,n,s,r);return}}Ae.flags|=t,i.memoizedState=Ro(1|e,n,s,r)}function ym(t,e){return rl(8390656,8,t,e)}function Md(t,e){return hu(2048,8,t,e)}function Dv(t,e){return hu(4,2,t,e)}function Lv(t,e){return hu(4,4,t,e)}function Vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ov(t,e,n){return n=n!=null?n.concat([t]):null,hu(4,4,Vv.bind(null,e,t),n)}function jd(){}function Mv(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ld(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jv(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ld(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Fv(t,e,n){return ti&21?(nn(n,e)||(n=Hy(),Ae.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function KT(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=_c.transition;_c.transition={};try{t(!1),e()}finally{de=n,_c.transition=r}}function Uv(){return $t().memoizedState}function GT(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zv(t))Bv(e,n);else if(n=Tv(t,e,n,r),n!==null){var i=gt();en(n,t,r,i),$v(n,e,r)}}function QT(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zv(t))Bv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,nn(l,o)){var u=e.interleaved;u===null?(i.next=i,Rd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Tv(t,e,i,r),n!==null&&(i=gt(),en(n,t,r,i),$v(n,e,r))}}function zv(t){var e=t.alternate;return t===Ae||e!==null&&e===Ae}function Bv(t,e){io=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $v(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,md(t,n)}}var Ol={readContext:Bt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},YT={readContext:Bt,useCallback:function(t,e){return on().memoizedState=[t,e===void 0?null:e],t},useContext:Bt,useEffect:ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rl(4194308,4,Vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return rl(4,2,t,e)},useMemo:function(t,e){var n=on();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=on();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GT.bind(null,Ae,t),[r.memoizedState,t]},useRef:function(t){var e=on();return t={current:t},e.memoizedState=t},useState:gm,useDebugValue:jd,useDeferredValue:function(t){return on().memoizedState=t},useTransition:function(){var t=gm(!1),e=t[0];return t=KT.bind(null,t[1]),on().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ae,i=on();if(Ie){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),$e===null)throw Error(F(349));ti&30||xv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ym(Rv.bind(null,r,s,t),[t]),r.flags|=2048,Ro(9,Cv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=on(),e=$e.identifierPrefix;if(Ie){var n=Cn,r=xn;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XT={readContext:Bt,useCallback:Mv,useContext:Bt,useEffect:Md,useImperativeHandle:Ov,useInsertionEffect:Dv,useLayoutEffect:Lv,useMemo:jv,useReducer:wc,useRef:bv,useState:function(){return wc(Co)},useDebugValue:jd,useDeferredValue:function(t){var e=$t();return Fv(e,Oe.memoizedState,t)},useTransition:function(){var t=wc(Co)[0],e=$t().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Av,useId:Uv,unstable_isNewReconciler:!1},JT={readContext:Bt,useCallback:Mv,useContext:Bt,useEffect:Md,useImperativeHandle:Ov,useInsertionEffect:Dv,useLayoutEffect:Lv,useMemo:jv,useReducer:Ec,useRef:bv,useState:function(){return Ec(Co)},useDebugValue:jd,useDeferredValue:function(t){var e=$t();return Oe===null?e.memoizedState=t:Fv(e,Oe.memoizedState,t)},useTransition:function(){var t=Ec(Co)[0],e=$t().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Av,useId:Uv,unstable_isNewReconciler:!1};function Yt(t,e){if(t&&t.defaultProps){e=xe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:xe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?hi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),i=mr(t),s=bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(en(e,t,i,r),tl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),i=mr(t),s=bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fr(t,s,i),e!==null&&(en(e,t,i,r),tl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=mr(t),i=bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=fr(t,i,r),e!==null&&(en(e,t,r,n),tl(e,t,r))}};function vm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Eo(n,r)||!Eo(i,s):!0}function Hv(t,e,n){var r=!1,i=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Bt(s):(i=St(e)?Zr:ct.current,r=e.contextTypes,s=(r=r!=null)?Gi(t,i):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _m(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function vh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Bt(s):(s=St(e)?Zr:ct.current,i.context=Gi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&du.enqueueReplaceState(i,i.state,null),Dl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ji(t,e){try{var n="",r=e;do n+=AE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZT=typeof WeakMap=="function"?WeakMap:Map;function Wv(t,e,n){n=bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jl||(jl=!0,Rh=r),_h(t,e)},n}function qv(t,e,n){n=bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_h(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_h(t,e),typeof r!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=f1.bind(null,t,e,n),e.then(t,t))}function Em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bn(-1,1),e.tag=2,fr(n,e,1))),n.lanes|=1),t)}var e1=Bn.ReactCurrentOwner,Tt=!1;function mt(t,e,n,r){e.child=t===null?Ev(e,null,n,r):Yi(e,t.child,n,r)}function Im(t,e,n,r,i){n=n.render;var s=e.ref;return zi(e,i),r=Vd(t,e,n,r,s,i),n=Od(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Ie&&n&&Id(e),e.flags|=1,mt(t,e,r,i),e.child)}function Sm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kv(t,e,s,r,i)):(t=al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Eo,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=gr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Kv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Eo(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return wh(t,e,n,r,i)}function Gv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Vi,Ct),Ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Vi,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(Vi,Ct),Ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(Vi,Ct),Ct|=r;return mt(t,e,i,n),e.child}function Qv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wh(t,e,n,r,i){var s=St(n)?Zr:ct.current;return s=Gi(e,s),zi(e,i),n=Vd(t,e,n,r,s,i),r=Od(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(Ie&&r&&Id(e),e.flags|=1,mt(t,e,n,i),e.child)}function km(t,e,n,r,i){if(St(n)){var s=!0;Cl(e)}else s=!1;if(zi(e,i),e.stateNode===null)il(t,e),Hv(e,n,r),vh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Bt(h):(h=St(n)?Zr:ct.current,h=Gi(e,h));var f=n.getDerivedStateFromProps,y=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&_m(e,o,r,h),Zn=!1;var v=e.memoizedState;o.state=v,Dl(e,r,o,i),u=e.memoizedState,l!==r||v!==u||It.current||Zn?(typeof f=="function"&&(yh(e,n,f,r),u=e.memoizedState),(l=Zn||vm(e,n,l,r,v,u,h))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Iv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Yt(e.type,l),o.props=h,y=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Bt(u):(u=St(n)?Zr:ct.current,u=Gi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||v!==u)&&_m(e,o,r,u),Zn=!1,v=e.memoizedState,o.state=v,Dl(e,r,o,i);var P=e.memoizedState;l!==y||v!==P||It.current||Zn?(typeof A=="function"&&(yh(e,n,A,r),P=e.memoizedState),(h=Zn||vm(e,n,h,r,v,P,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return Eh(t,e,n,r,s,i)}function Eh(t,e,n,r,i,s){Qv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cm(e,n,!1),Mn(t,e,s);r=e.stateNode,e1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yi(e,t.child,null,s),e.child=Yi(e,null,l,s)):mt(t,e,l,s),e.memoizedState=r.state,i&&cm(e,n,!0),e.child}function Yv(t){var e=t.stateNode;e.pendingContext?um(t,e.pendingContext,e.pendingContext!==e.context):e.context&&um(t,e.context,!1),Nd(t,e.containerInfo)}function Am(t,e,n,r,i){return Qi(),kd(i),e.flags|=256,mt(t,e,n,r),e.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function Ih(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xv(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(ke,i&1),t===null)return mh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mu(o,r,0,null),t=Yr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ih(n),e.memoizedState=Th,t):Fd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return t1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=gr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=gr(l,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ih(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Th,r}return s=t.child,t=s.sibling,r=gr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Fd(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Fa(t,e,n,r){return r!==null&&kd(r),Yi(e,t.child,null,n),t=Fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function t1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Tc(Error(F(422))),Fa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mu({mode:"visible",children:r.children},i,0,null),s=Yr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yi(e,t.child,null,o),e.child.memoizedState=Ih(o),e.memoizedState=Th,s);if(!(e.mode&1))return Fa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Tc(s,r,void 0),Fa(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),en(r,t,i,-1))}return Wd(),r=Tc(Error(F(421))),Fa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=p1.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=dr(i.nextSibling),Nt=e,Ie=!0,Jt=null,t!==null&&(jt[Ft++]=xn,jt[Ft++]=Cn,jt[Ft++]=ei,xn=t.id,Cn=t.overflow,ei=e),e=Fd(e,r.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gh(t.return,e,n)}function Ic(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Jv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(mt(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ic(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ll(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=gr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=gr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function n1(t,e,n){switch(e.tag){case 3:Yv(e),Qi();break;case 5:Sv(e);break;case 1:St(e.type)&&Cl(e);break;case 4:Nd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(Nl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?Xv(t,e,n):(ye(ke,ke.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);ye(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Jv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,Gv(t,e,n)}return Mn(t,e,n)}var Zv,Sh,e_,t_;Zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sh=function(){};e_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(cn.current);var s=null;switch(n){case"input":i=qc(t,i),r=qc(t,r),s=[];break;case"select":i=xe({},i,{value:void 0}),r=xe({},r,{value:void 0}),s=[];break;case"textarea":i=Qc(t,i),r=Qc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Al)}Xc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(po.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(po.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&we("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};t_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Us(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function r1(t,e,n){var r=e.pendingProps;switch(Sd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return St(e.type)&&xl(),st(e),null;case 3:return r=e.stateNode,Xi(),Ee(It),Ee(ct),Dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jt!==null&&(bh(Jt),Jt=null))),Sh(t,e),st(e),null;case 5:bd(e);var i=Kr(Ao.current);if(n=e.type,t!==null&&e.stateNode!=null)e_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return st(e),null}if(t=Kr(cn.current),Ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[an]=e,r[So]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<qs.length;i++)we(qs[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Op(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":jp(r,s),we("invalid",r)}Xc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Oa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Oa(r.textContent,l,t),i=["children",""+l]):po.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Ca(r),Mp(r,s,!0);break;case"textarea":Ca(r),Fp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ry(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[an]=e,t[So]=r,Zv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Jc(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<qs.length;i++)we(qs[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Op(t,r),i=qc(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=xe({},r,{value:void 0}),we("invalid",t);break;case"textarea":jp(t,r),i=Qc(t,r),we("invalid",t);break;default:i=r}Xc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?by(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Py(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&mo(t,u):typeof u=="number"&&mo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(po.hasOwnProperty(s)?u!=null&&s==="onScroll"&&we("scroll",t):u!=null&&ud(t,s,u,o))}switch(n){case"input":Ca(t),Mp(t,r,!1);break;case"textarea":Ca(t),Fp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return st(e),null;case 6:if(t&&e.stateNode!=null)t_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Kr(Ao.current),Kr(cn.current),Ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[an]=e,(s=r.nodeValue!==n)&&(t=Nt,t!==null))switch(t.tag){case 3:Oa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[an]=e,e.stateNode=r}return st(e),null;case 13:if(Ee(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Rt!==null&&e.mode&1&&!(e.flags&128))_v(),Qi(),e.flags|=98560,s=!1;else if(s=Ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[an]=e}else Qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;st(e),s=!1}else Jt!==null&&(bh(Jt),Jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?je===0&&(je=3):Wd())),e.updateQueue!==null&&(e.flags|=4),st(e),null);case 4:return Xi(),Sh(t,e),t===null&&To(e.stateNode.containerInfo),st(e),null;case 10:return Cd(e.type._context),st(e),null;case 17:return St(e.type)&&xl(),st(e),null;case 19:if(Ee(ke),s=e.memoizedState,s===null)return st(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Us(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ll(t),o!==null){for(e.flags|=128,Us(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>Zi&&(e.flags|=128,r=!0,Us(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Us(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ie)return st(e),null}else 2*be()-s.renderingStartTime>Zi&&n!==1073741824&&(e.flags|=128,r=!0,Us(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=ke.current,ye(ke,r?n&1|2:n&1),e):(st(e),null);case 22:case 23:return Hd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function i1(t,e){switch(Sd(e),e.tag){case 1:return St(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xi(),Ee(It),Ee(ct),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bd(e),null;case 13:if(Ee(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(ke),null;case 4:return Xi(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var Ua=!1,lt=!1,s1=typeof WeakSet=="function"?WeakSet:Set,W=null;function Li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function kh(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var Cm=!1;function o1(t,e){if(lh=Il,t=ov(),Td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,y=t,v=null;t:for(;;){for(var A;y!==n||i!==0&&y.nodeType!==3||(l=o+i),y!==s||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(A=y.firstChild)!==null;)v=y,y=A;for(;;){if(y===t)break t;if(v===n&&++h===i&&(l=o),v===s&&++f===r&&(u=o),(A=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(uh={focusedElem:t,selectionRange:n},Il=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var N=P.memoizedProps,L=P.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:Yt(e.type,N),L);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Pe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return P=Cm,Cm=!1,P}function so(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kh(e,n,s)}i=i.next}while(i!==r)}}function fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n_(t){var e=t.alternate;e!==null&&(t.alternate=null,n_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[an],delete e[So],delete e[dh],delete e[BT],delete e[$T])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r_(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(r!==4&&(t=t.child,t!==null))for(xh(t,e,n),t=t.sibling;t!==null;)xh(t,e,n),t=t.sibling}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}var Ge=null,Xt=!1;function Yn(t,e,n){for(n=n.child;n!==null;)i_(t,e,n),n=n.sibling}function i_(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:lt||Li(n,e);case 6:var r=Ge,i=Xt;Ge=null,Yn(t,e,n),Ge=r,Xt=i,Ge!==null&&(Xt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Xt?(t=Ge,n=n.stateNode,t.nodeType===8?gc(t.parentNode,n):t.nodeType===1&&gc(t,n),_o(t)):gc(Ge,n.stateNode));break;case 4:r=Ge,i=Xt,Ge=n.stateNode.containerInfo,Xt=!0,Yn(t,e,n),Ge=r,Xt=i;break;case 0:case 11:case 14:case 15:if(!lt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kh(n,e,o),i=i.next}while(i!==r)}Yn(t,e,n);break;case 1:if(!lt&&(Li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Pe(n,e,l)}Yn(t,e,n);break;case 21:Yn(t,e,n);break;case 22:n.mode&1?(lt=(r=lt)||n.memoizedState!==null,Yn(t,e,n),lt=r):Yn(t,e,n);break;default:Yn(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new s1),e.forEach(function(r){var i=m1.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Xt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Xt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Xt=!0;break e}l=l.return}if(Ge===null)throw Error(F(160));i_(s,o,i),Ge=null,Xt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Pe(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)s_(e,t),e=e.sibling}function s_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),sn(t),r&4){try{so(3,t,t.return),fu(3,t)}catch(N){Pe(t,t.return,N)}try{so(5,t,t.return)}catch(N){Pe(t,t.return,N)}}break;case 1:Qt(e,t),sn(t),r&512&&n!==null&&Li(n,n.return);break;case 5:if(Qt(e,t),sn(t),r&512&&n!==null&&Li(n,n.return),t.flags&32){var i=t.stateNode;try{mo(i,"")}catch(N){Pe(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&xy(i,s),Jc(l,o);var h=Jc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],y=u[o+1];f==="style"?by(i,y):f==="dangerouslySetInnerHTML"?Py(i,y):f==="children"?mo(i,y):ud(i,f,y,h)}switch(l){case"input":Kc(i,s);break;case"textarea":Cy(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Mi(i,!!s.multiple,A,!1):v!==!!s.multiple&&(s.defaultValue!=null?Mi(i,!!s.multiple,s.defaultValue,!0):Mi(i,!!s.multiple,s.multiple?[]:"",!1))}i[So]=s}catch(N){Pe(t,t.return,N)}}break;case 6:if(Qt(e,t),sn(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){Pe(t,t.return,N)}}break;case 3:if(Qt(e,t),sn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_o(e.containerInfo)}catch(N){Pe(t,t.return,N)}break;case 4:Qt(e,t),sn(t);break;case 13:Qt(e,t),sn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bd=be())),r&4&&Pm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(lt=(h=lt)||f,Qt(e,t),lt=h):Qt(e,t),sn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(y=W=f;W!==null;){switch(v=W,A=v.child,v.tag){case 0:case 11:case 14:case 15:so(4,v,v.return);break;case 1:Li(v,v.return);var P=v.stateNode;if(typeof P.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(N){Pe(r,n,N)}}break;case 5:Li(v,v.return);break;case 22:if(v.memoizedState!==null){bm(y);continue}}A!==null?(A.return=v,W=A):bm(y)}f=f.sibling}e:for(f=null,y=t;;){if(y.tag===5){if(f===null){f=y;try{i=y.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ny("display",o))}catch(N){Pe(t,t.return,N)}}}else if(y.tag===6){if(f===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(N){Pe(t,t.return,N)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;f===y&&(f=null),y=y.return}f===y&&(f=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Qt(e,t),sn(t),r&4&&Pm(t);break;case 21:break;default:Qt(e,t),sn(t)}}function sn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(mo(i,""),r.flags&=-33);var s=Rm(t);Ch(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rm(t);xh(t,l,o);break;default:throw Error(F(161))}}catch(u){Pe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function a1(t,e,n){W=t,o_(t)}function o_(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ua;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||lt;l=Ua;var h=lt;if(Ua=o,(lt=u)&&!h)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Dm(i):u!==null?(u.return=o,W=u):Dm(i);for(;s!==null;)W=s,o_(s),s=s.sibling;W=i,Ua=l,lt=h}Nm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Nm(t)}}function Nm(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:lt||fu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!lt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var y=f.dehydrated;y!==null&&_o(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}lt||e.flags&512&&Ah(e)}catch(v){Pe(e,e.return,v)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function bm(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Dm(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fu(4,e)}catch(u){Pe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Pe(e,i,u)}}var s=e.return;try{Ah(e)}catch(u){Pe(e,s,u)}break;case 5:var o=e.return;try{Ah(e)}catch(u){Pe(e,o,u)}}}catch(u){Pe(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var l1=Math.ceil,Ml=Bn.ReactCurrentDispatcher,Ud=Bn.ReactCurrentOwner,zt=Bn.ReactCurrentBatchConfig,ae=0,$e=null,Ve=null,Xe=0,Ct=0,Vi=Cr(0),je=0,Po=null,ni=0,pu=0,zd=0,oo=null,wt=null,Bd=0,Zi=1/0,kn=null,jl=!1,Rh=null,pr=null,za=!1,ar=null,Fl=0,ao=0,Ph=null,sl=-1,ol=0;function gt(){return ae&6?be():sl!==-1?sl:sl=be()}function mr(t){return t.mode&1?ae&2&&Xe!==0?Xe&-Xe:WT.transition!==null?(ol===0&&(ol=Hy()),ol):(t=de,t!==0||(t=window.event,t=t===void 0?16:Xy(t.type)),t):1}function en(t,e,n,r){if(50<ao)throw ao=0,Ph=null,Error(F(185));Bo(t,n,r),(!(ae&2)||t!==$e)&&(t===$e&&(!(ae&2)&&(pu|=n),je===4&&tr(t,Xe)),kt(t,r),n===1&&ae===0&&!(e.mode&1)&&(Zi=be()+500,cu&&Rr()))}function kt(t,e){var n=t.callbackNode;WE(t,e);var r=Tl(t,t===$e?Xe:0);if(r===0)n!==null&&Bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bp(n),e===1)t.tag===0?HT(Lm.bind(null,t)):gv(Lm.bind(null,t)),UT(function(){!(ae&6)&&Rr()}),n=null;else{switch(Wy(r)){case 1:n=pd;break;case 4:n=By;break;case 16:n=El;break;case 536870912:n=$y;break;default:n=El}n=p_(n,a_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a_(t,e){if(sl=-1,ol=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(Bi()&&t.callbackNode!==n)return null;var r=Tl(t,t===$e?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ul(t,r);else{e=r;var i=ae;ae|=2;var s=u_();($e!==t||Xe!==e)&&(kn=null,Zi=be()+500,Qr(t,e));do try{h1();break}catch(l){l_(t,l)}while(!0);xd(),Ml.current=s,ae=i,Ve!==null?e=0:($e=null,Xe=0,e=je)}if(e!==0){if(e===2&&(i=rh(t),i!==0&&(r=i,e=Nh(t,i))),e===1)throw n=Po,Qr(t,0),tr(t,r),kt(t,be()),n;if(e===6)tr(t,r);else{if(i=t.current.alternate,!(r&30)&&!u1(i)&&(e=Ul(t,r),e===2&&(s=rh(t),s!==0&&(r=s,e=Nh(t,s))),e===1))throw n=Po,Qr(t,0),tr(t,r),kt(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:$r(t,wt,kn);break;case 3:if(tr(t,r),(r&130023424)===r&&(e=Bd+500-be(),10<e)){if(Tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hh($r.bind(null,t,wt,kn),e);break}$r(t,wt,kn);break;case 4:if(tr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*l1(r/1960))-r,10<r){t.timeoutHandle=hh($r.bind(null,t,wt,kn),r);break}$r(t,wt,kn);break;case 5:$r(t,wt,kn);break;default:throw Error(F(329))}}}return kt(t,be()),t.callbackNode===n?a_.bind(null,t):null}function Nh(t,e){var n=oo;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=wt,wt=n,e!==null&&bh(e)),t}function bh(t){wt===null?wt=t:wt.push.apply(wt,t)}function u1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tr(t,e){for(e&=~zd,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function Lm(t){if(ae&6)throw Error(F(327));Bi();var e=Tl(t,0);if(!(e&1))return kt(t,be()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var r=rh(t);r!==0&&(e=r,n=Nh(t,r))}if(n===1)throw n=Po,Qr(t,0),tr(t,e),kt(t,be()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$r(t,wt,kn),kt(t,be()),null}function $d(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Zi=be()+500,cu&&Rr())}}function ri(t){ar!==null&&ar.tag===0&&!(ae&6)&&Bi();var e=ae;ae|=1;var n=zt.transition,r=de;try{if(zt.transition=null,de=1,t)return t()}finally{de=r,zt.transition=n,ae=e,!(ae&6)&&Rr()}}function Hd(){Ct=Vi.current,Ee(Vi)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,FT(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Sd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:Xi(),Ee(It),Ee(ct),Dd();break;case 5:bd(r);break;case 4:Xi();break;case 13:Ee(ke);break;case 19:Ee(ke);break;case 10:Cd(r.type._context);break;case 22:case 23:Hd()}n=n.return}if($e=t,Ve=t=gr(t.current,null),Xe=Ct=e,je=0,Po=null,zd=pu=ni=0,wt=oo=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function l_(t,e){do{var n=Ve;try{if(xd(),nl.current=Ol,Vl){for(var r=Ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vl=!1}if(ti=0,Be=Oe=Ae=null,io=!1,xo=0,Ud.current=null,n===null||n.return===null){je=1,Po=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Xe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,y=f.tag;if(!(f.mode&1)&&(y===0||y===11||y===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Em(o);if(A!==null){A.flags&=-257,Tm(A,o,l,s,e),A.mode&1&&wm(s,h,e),e=A,u=h;var P=e.updateQueue;if(P===null){var N=new Set;N.add(u),e.updateQueue=N}else P.add(u);break e}else{if(!(e&1)){wm(s,h,e),Wd();break e}u=Error(F(426))}}else if(Ie&&l.mode&1){var L=Em(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Tm(L,o,l,s,e),kd(Ji(u,l));break e}}s=u=Ji(u,l),je!==4&&(je=2),oo===null?oo=[s]:oo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=Wv(s,u,e);pm(s,S);break e;case 1:l=u;var E=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof E.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(pr===null||!pr.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=qv(s,l,e);pm(s,D);break e}}s=s.return}while(s!==null)}h_(n)}catch(U){e=U,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function u_(){var t=Ml.current;return Ml.current=Ol,t===null?Ol:t}function Wd(){(je===0||je===3||je===2)&&(je=4),$e===null||!(ni&268435455)&&!(pu&268435455)||tr($e,Xe)}function Ul(t,e){var n=ae;ae|=2;var r=u_();($e!==t||Xe!==e)&&(kn=null,Qr(t,e));do try{c1();break}catch(i){l_(t,i)}while(!0);if(xd(),ae=n,Ml.current=r,Ve!==null)throw Error(F(261));return $e=null,Xe=0,je}function c1(){for(;Ve!==null;)c_(Ve)}function h1(){for(;Ve!==null&&!OE();)c_(Ve)}function c_(t){var e=f_(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?h_(t):Ve=e,Ud.current=null}function h_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=i1(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Ve=null;return}}else if(n=r1(n,e,Ct),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);je===0&&(je=5)}function $r(t,e,n){var r=de,i=zt.transition;try{zt.transition=null,de=1,d1(t,e,n,r)}finally{zt.transition=i,de=r}return null}function d1(t,e,n,r){do Bi();while(ar!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qE(t,s),t===$e&&(Ve=$e=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||za||(za=!0,p_(El,function(){return Bi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zt.transition,zt.transition=null;var o=de;de=1;var l=ae;ae|=4,Ud.current=null,o1(t,n),s_(n,t),bT(uh),Il=!!lh,uh=lh=null,t.current=n,a1(n),ME(),ae=l,de=o,zt.transition=s}else t.current=n;if(za&&(za=!1,ar=t,Fl=i),s=t.pendingLanes,s===0&&(pr=null),UE(n.stateNode),kt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jl)throw jl=!1,t=Rh,Rh=null,t;return Fl&1&&t.tag!==0&&Bi(),s=t.pendingLanes,s&1?t===Ph?ao++:(ao=0,Ph=t):ao=0,Rr(),null}function Bi(){if(ar!==null){var t=Wy(Fl),e=zt.transition,n=de;try{if(zt.transition=null,de=16>t?16:t,ar===null)var r=!1;else{if(t=ar,ar=null,Fl=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:so(8,f,s)}var y=f.child;if(y!==null)y.return=f,W=y;else for(;W!==null;){f=W;var v=f.sibling,A=f.return;if(n_(f),f===h){W=null;break}if(v!==null){v.return=A,W=v;break}W=A}}}var P=s.alternate;if(P!==null){var N=P.child;if(N!==null){P.child=null;do{var L=N.sibling;N.sibling=null,N=L}while(N!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:so(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,W=S;break e}W=s.return}}var E=t.current;for(W=E;W!==null;){o=W;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,W=k;else e:for(o=E;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:fu(9,l)}}catch(U){Pe(l,l.return,U)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(ae=i,Rr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(su,t)}catch{}r=!0}return r}finally{de=n,zt.transition=e}}return!1}function Vm(t,e,n){e=Ji(n,e),e=Wv(t,e,1),t=fr(t,e,1),e=gt(),t!==null&&(Bo(t,1,e),kt(t,e))}function Pe(t,e,n){if(t.tag===3)Vm(t,t,n);else for(;e!==null;){if(e.tag===3){Vm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pr===null||!pr.has(r))){t=Ji(n,t),t=qv(e,t,1),e=fr(e,t,1),t=gt(),e!==null&&(Bo(e,1,t),kt(e,t));break}}e=e.return}}function f1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Xe&n)===n&&(je===4||je===3&&(Xe&130023424)===Xe&&500>be()-Bd?Qr(t,0):zd|=n),kt(t,e)}function d_(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=gt();t=On(t,e),t!==null&&(Bo(t,e,n),kt(t,n))}function p1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d_(t,n)}function m1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),d_(t,n)}var f_;f_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,n1(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,Ie&&e.flags&1048576&&yv(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;il(t,e),t=e.pendingProps;var i=Gi(e,ct.current);zi(e,n),i=Vd(null,e,r,t,i,n);var s=Od();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,Cl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pd(e),i.updater=du,e.stateNode=i,i._reactInternals=e,vh(e,r,t,n),e=Eh(null,e,r,!0,s,n)):(e.tag=0,Ie&&s&&Id(e),mt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(il(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=y1(r),t=Yt(r,t),i){case 0:e=wh(null,e,r,t,n);break e;case 1:e=km(null,e,r,t,n);break e;case 11:e=Im(null,e,r,t,n);break e;case 14:e=Sm(null,e,r,Yt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),wh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),km(t,e,r,i,n);case 3:e:{if(Yv(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Iv(t,e),Dl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ji(Error(F(423)),e),e=Am(t,e,r,n,i);break e}else if(r!==i){i=Ji(Error(F(424)),e),e=Am(t,e,r,n,i);break e}else for(Rt=dr(e.stateNode.containerInfo.firstChild),Nt=e,Ie=!0,Jt=null,n=Ev(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){e=Mn(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return Sv(e),t===null&&mh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ch(r,i)?o=null:s!==null&&ch(r,s)&&(e.flags|=32),Qv(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&mh(e),null;case 13:return Xv(t,e,n);case 4:return Nd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yi(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Im(t,e,r,i,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(Nl,r._currentValue),r._currentValue=o,s!==null)if(nn(s.value,o)){if(s.children===i.children&&!It.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=bn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),gh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}mt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,zi(e,n),i=Bt(i),r=r(i),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Sm(t,e,r,i,n);case 15:return Kv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),il(t,e),e.tag=1,St(r)?(t=!0,Cl(e)):t=!1,zi(e,n),Hv(e,r,i),vh(e,r,i,n),Eh(null,e,r,!0,t,n);case 19:return Jv(t,e,n);case 22:return Gv(t,e,n)}throw Error(F(156,e.tag))};function p_(t,e){return zy(t,e)}function g1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new g1(t,e,n,r)}function qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function y1(t){if(typeof t=="function")return qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===hd)return 11;if(t===dd)return 14}return 2}function gr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")qd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ki:return Yr(n.children,i,s,e);case cd:o=8,i|=8;break;case Bc:return t=Ut(12,n,e,i|2),t.elementType=Bc,t.lanes=s,t;case $c:return t=Ut(13,n,e,i),t.elementType=$c,t.lanes=s,t;case Hc:return t=Ut(19,n,e,i),t.elementType=Hc,t.lanes=s,t;case Sy:return mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ty:o=10;break e;case Iy:o=9;break e;case hd:o=11;break e;case dd:o=14;break e;case Jn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Yr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function mu(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=Sy,t.lanes=n,t.stateNode={isHidden:!1},t}function Sc(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function v1(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sc(0),this.expirationTimes=sc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Kd(t,e,n,r,i,s,o,l,u){return t=new v1(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function _1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Si,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function m_(t){if(!t)return Ir;t=t._reactInternals;e:{if(hi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(St(n))return mv(t,n,e)}return e}function g_(t,e,n,r,i,s,o,l,u){return t=Kd(n,r,!0,t,i,s,o,l,u),t.context=m_(null),n=t.current,r=gt(),i=mr(n),s=bn(r,i),s.callback=e??null,fr(n,s,i),t.current.lanes=i,Bo(t,i,r),kt(t,r),t}function gu(t,e,n,r){var i=e.current,s=gt(),o=mr(i);return n=m_(n),e.context===null?e.context=n:e.pendingContext=n,e=bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fr(i,e,o),t!==null&&(en(t,i,o,s),tl(t,i,o)),o}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Om(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gd(t,e){Om(t,e),(t=t.alternate)&&Om(t,e)}function w1(){return null}var y_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Qd(t){this._internalRoot=t}yu.prototype.render=Qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));gu(t,e,null,null)};yu.prototype.unmount=Qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){gu(null,t,null,null)}),e[Vn]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<er.length&&e!==0&&e<er[n].priority;n++);er.splice(n,0,t),n===0&&Yy(t)}};function Yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function E1(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=zl(o);s.call(h)}}var o=g_(e,r,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=o,t[Vn]=o.current,To(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=zl(u);l.call(h)}}var u=Kd(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=u,t[Vn]=u.current,To(t.nodeType===8?t.parentNode:t),ri(function(){gu(e,u,n,r)}),u}function _u(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=zl(o);l.call(u)}}gu(e,o,t,i)}else o=E1(n,e,t,i,r);return zl(o)}qy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ws(e.pendingLanes);n!==0&&(md(e,n|1),kt(e,be()),!(ae&6)&&(Zi=be()+500,Rr()))}break;case 13:ri(function(){var r=On(t,1);if(r!==null){var i=gt();en(r,t,1,i)}}),Gd(t,1)}};gd=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=gt();en(e,t,134217728,n)}Gd(t,134217728)}};Ky=function(t){if(t.tag===13){var e=mr(t),n=On(t,e);if(n!==null){var r=gt();en(n,t,e,r)}Gd(t,e)}};Gy=function(){return de};Qy=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};eh=function(t,e,n){switch(e){case"input":if(Kc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uu(r);if(!i)throw Error(F(90));Ay(r),Kc(r,i)}}}break;case"textarea":Cy(t,n);break;case"select":e=n.value,e!=null&&Mi(t,!!n.multiple,e,!1)}};Vy=$d;Oy=ri;var T1={usingClientEntryPoint:!1,Events:[Ho,Ri,uu,Dy,Ly,$d]},zs={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I1={bundleType:zs.bundleType,version:zs.version,rendererPackageName:zs.rendererPackageName,rendererConfig:zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fy(t),t===null?null:t.stateNode},findFiberByHostInstance:zs.findFiberByHostInstance||w1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ba=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ba.isDisabled&&Ba.supportsFiber)try{su=Ba.inject(I1),un=Ba}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T1;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(e))throw Error(F(200));return _1(t,e,null,n)};Lt.createRoot=function(t,e){if(!Yd(t))throw Error(F(299));var n=!1,r="",i=y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Kd(t,1,!1,null,null,n,!1,r,i),t[Vn]=e.current,To(t.nodeType===8?t.parentNode:t),new Qd(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Fy(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return ri(t)};Lt.hydrate=function(t,e,n){if(!vu(e))throw Error(F(200));return _u(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!Yd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=y_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=g_(e,null,t,1,n??null,i,!1,s,o),t[Vn]=e.current,To(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yu(e)};Lt.render=function(t,e,n){if(!vu(e))throw Error(F(200));return _u(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!vu(t))throw Error(F(40));return t._reactRootContainer?(ri(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[Vn]=null})}),!0):!1};Lt.unstable_batchedUpdates=$d;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return _u(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function v_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v_)}catch(t){console.error(t)}}v_(),vy.exports=Lt;var S1=vy.exports,jm=S1;Uc.createRoot=jm.createRoot,Uc.hydrateRoot=jm.hydrateRoot;/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=(t,e)=>{const n=K.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,...h},f)=>K.createElement("svg",{ref:f,...k1,width:i,height:i,stroke:r,strokeWidth:o?Number(s)*24/Number(i):s,className:["lucide",`lucide-${A1(t)}`,l].join(" "),...h},[...e.map(([y,v])=>K.createElement(y,v)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=le("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=le("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=le("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=le("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=le("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=le("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=le("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=le("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=le("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=le("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=le("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=le("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=le("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=le("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=le("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=le("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=le("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=le("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=le("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=le("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=le("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=le("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=le("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=le("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=le("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=le("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=le("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=le("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=le("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=le("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=le("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=le("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Hm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},X1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},T_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,y=(s&3)<<4|l>>4;let v=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(v=64)),r.push(n[f],n[y],n[v],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(E_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):X1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||y==null)throw new J1;const v=s<<2|l>>4;if(r.push(v),h!==64){const A=l<<4&240|h>>2;if(r.push(A),y!==64){const P=h<<6&192|y;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class J1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z1=function(t){const e=E_(t);return T_.encodeByteArray(e,!0)},Bl=function(t){return Z1(t).replace(/\./g,"")},I_=function(t){try{return T_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=()=>eI().__FIREBASE_DEFAULTS__,nI=()=>{if(typeof process>"u"||typeof Hm>"u")return;const t=Hm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&I_(t[1]);return e&&JSON.parse(e)},wu=()=>{try{return tI()||nI()||rI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},S_=t=>{var e,n;return(n=(e=wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iI=t=>{const e=S_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},k_=()=>{var t;return(t=wu())===null||t===void 0?void 0:t.config},A_=t=>{var e;return(e=wu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bl(JSON.stringify(n)),Bl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function lI(){var t;const e=(t=wu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dI(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fI(){return!lI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pI(){try{return typeof indexedDB=="object"}catch{return!1}}function mI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gI,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qo.prototype.create)}}class qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new $n(i,l,r)}}function yI(t,e){return t.replace(vI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const vI=/\{\$([^}]+)}/g;function _I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $l(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wm(s)&&Wm(o)){if(!$l(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ks(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Gs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wI(t,e){const n=new EI(t,e);return n.subscribe.bind(n)}class EI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");TI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cc),i.error===void 0&&(i.error=Cc),i.complete===void 0&&(i.complete=Cc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class ii{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kI(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SI(t){return t===Hr?void 0:t}function kI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new II(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const xI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},CI=se.INFO,RI={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},PI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xd{constructor(e){this.name=e,this._logLevel=CI,this._logHandler=PI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const NI=(t,e)=>e.some(n=>t instanceof n);let qm,Km;function bI(){return qm||(qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DI(){return Km||(Km=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const x_=new WeakMap,Dh=new WeakMap,C_=new WeakMap,Rc=new WeakMap,Jd=new WeakMap;function LI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&x_.set(n,t)}).catch(()=>{}),Jd.set(e,t),e}function VI(t){if(Dh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dh.set(t,e)}let Lh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||C_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OI(t){Lh=t(Lh)}function MI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pc(this),e,...n);return C_.set(r,e.sort?e.sort():[e]),yr(r)}:DI().includes(t)?function(...e){return t.apply(Pc(this),e),yr(x_.get(this))}:function(...e){return yr(t.apply(Pc(this),e))}}function jI(t){return typeof t=="function"?MI(t):(t instanceof IDBTransaction&&VI(t),NI(t,bI())?new Proxy(t,Lh):t)}function yr(t){if(t instanceof IDBRequest)return LI(t);if(Rc.has(t))return Rc.get(t);const e=jI(t);return e!==t&&(Rc.set(t,e),Jd.set(e,t)),e}const Pc=t=>Jd.get(t);function FI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(yr(o.result),u.oldVersion,u.newVersion,yr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const UI=["get","getKey","getAll","getAllKeys","count"],zI=["put","add","delete","clear"],Nc=new Map;function Gm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nc.get(e))return Nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||UI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Nc.set(e,s),s}OI(t=>({...t,get:(e,n,r)=>Gm(e,n)||t.get(e,n,r),has:(e,n)=>!!Gm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($I(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $I(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vh="@firebase/app",Qm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Xd("@firebase/app"),HI="@firebase/app-compat",WI="@firebase/analytics-compat",qI="@firebase/analytics",KI="@firebase/app-check-compat",GI="@firebase/app-check",QI="@firebase/auth",YI="@firebase/auth-compat",XI="@firebase/database",JI="@firebase/data-connect",ZI="@firebase/database-compat",eS="@firebase/functions",tS="@firebase/functions-compat",nS="@firebase/installations",rS="@firebase/installations-compat",iS="@firebase/messaging",sS="@firebase/messaging-compat",oS="@firebase/performance",aS="@firebase/performance-compat",lS="@firebase/remote-config",uS="@firebase/remote-config-compat",cS="@firebase/storage",hS="@firebase/storage-compat",dS="@firebase/firestore",fS="@firebase/vertexai-preview",pS="@firebase/firestore-compat",mS="firebase",gS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="[DEFAULT]",yS={[Vh]:"fire-core",[HI]:"fire-core-compat",[qI]:"fire-analytics",[WI]:"fire-analytics-compat",[GI]:"fire-app-check",[KI]:"fire-app-check-compat",[QI]:"fire-auth",[YI]:"fire-auth-compat",[XI]:"fire-rtdb",[JI]:"fire-data-connect",[ZI]:"fire-rtdb-compat",[eS]:"fire-fn",[tS]:"fire-fn-compat",[nS]:"fire-iid",[rS]:"fire-iid-compat",[iS]:"fire-fcm",[sS]:"fire-fcm-compat",[oS]:"fire-perf",[aS]:"fire-perf-compat",[lS]:"fire-rc",[uS]:"fire-rc-compat",[cS]:"fire-gcs",[hS]:"fire-gcs-compat",[dS]:"fire-fst",[pS]:"fire-fst-compat",[fS]:"fire-vertex","fire-js":"fire-js",[mS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map,vS=new Map,Mh=new Map;function Ym(t,e){try{t.container.addComponent(e)}catch(n){jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Mh.has(e))return jn.debug(`There were multiple attempts to register component ${e}.`),!1;Mh.set(e,t);for(const n of No.values())Ym(n,t);for(const n of vS.values())Ym(n,t);return!0}function Zd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new qo("app","Firebase",_S);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=gS;function R_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=k_()),!n)throw vr.create("no-options");const s=No.get(i);if(s){if($l(n,s.options)&&$l(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new AI(i);for(const u of Mh.values())o.addComponent(u);const l=new wS(n,r,o);return No.set(i,l),l}function P_(t=Oh){const e=No.get(t);if(!e&&t===Oh&&k_())return R_();if(!e)throw vr.create("no-app",{appName:t});return e}function Xm(){return Array.from(No.values())}function _r(t,e,n){var r;let i=(r=yS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jn.warn(l.join(" "));return}es(new ii(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="firebase-heartbeat-database",TS=1,bo="firebase-heartbeat-store";let bc=null;function N_(){return bc||(bc=FI(ES,TS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),bc}async function IS(t){try{const n=(await N_()).transaction(bo),r=await n.objectStore(bo).get(b_(t));return await n.done,r}catch(e){if(e instanceof $n)jn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jn.warn(n.message)}}}async function Jm(t,e){try{const r=(await N_()).transaction(bo,"readwrite");await r.objectStore(bo).put(e,b_(t)),await r.done}catch(n){if(n instanceof $n)jn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function b_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=1024,kS=30*24*60*60*1e3;class AS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=kS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zm(),{heartbeatsToSend:r,unsentEntries:i}=xS(this._heartbeatsCache.heartbeats),s=Bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return jn.warn(n),""}}}function Zm(){return new Date().toISOString().substring(0,10)}function xS(t,e=SS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),eg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),eg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pI()?mI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await IS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function eg(t){return Bl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(t){es(new ii("platform-logger",e=>new BI(e),"PRIVATE")),es(new ii("heartbeat",e=>new AS(e),"PRIVATE")),_r(Vh,Qm,t),_r(Vh,Qm,"esm2017"),_r("fire-js","")}RS("");var PS="firebase",NS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_r(PS,NS,"app");function ef(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function D_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bS=D_,L_=new qo("auth","Firebase",D_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Xd("@firebase/auth");function DS(t,...e){Hl.logLevel<=se.WARN&&Hl.warn(`Auth (${ds}): ${t}`,...e)}function ll(t,...e){Hl.logLevel<=se.ERROR&&Hl.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,...e){throw tf(t,...e)}function hn(t,...e){return tf(t,...e)}function V_(t,e,n){const r=Object.assign(Object.assign({},bS()),{[e]:n});return new qo("auth","Firebase",r).create(e,{appName:t.name})}function Dn(t){return V_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L_.create(t,...e)}function Y(t,e,...n){if(!t)throw tf(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ll(e),new Error(e)}function Fn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LS(){return tg()==="http:"||tg()==="https:"}function tg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LS()||cI()||"connection"in navigator)?navigator.onLine:!0}function OS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=aI()||hI()}get(){return VS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=new Go(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,i={}){return M_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return uI()||(h.referrerPolicy="no-referrer"),O_.fetch()(j_(t,t.config.apiHost,n,l),h)})}async function M_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MS),e);try{const i=new US(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw $a(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw $a(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw $a(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw V_(t,f,h);rn(t,f)}}catch(i){if(i instanceof $n)throw i;rn(t,"network-request-failed",{message:String(i)})}}async function Qo(t,e,n,r,i={}){const s=await Nr(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function j_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nf(t.config,i):`${t.config.apiScheme}://${i}`}function FS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class US{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(hn(this.auth,"network-request-failed")),jS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $a(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hn(t,e,r);return i.customData._tokenResponse=n,i}function ng(t){return t!==void 0&&t.enterprise!==void 0}class zS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return FS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function BS(t,e){return Nr(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $S(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function F_(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HS(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=rf(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lo(Dc(i.auth_time)),issuedAtTime:lo(Dc(i.iat)),expirationTime:lo(Dc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Dc(t){return Number(t)*1e3}function rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=I_(n);return i?JSON.parse(i):(ll("Failed to decode base64 JWT payload"),null)}catch(i){return ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rg(t){const e=rf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&WS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lo(this.lastLoginAt),this.creationTime=lo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Do(t,F_(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?U_(s.providerUserInfo):[],l=GS(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Fh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,y)}async function KS(t){const e=He(t);await Wl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function U_(t){return t.map(e=>{var{providerId:n}=e,r=ef(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS(t,e){const n=await M_(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=j_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",O_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YS(t,e){return Nr(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=rg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $i;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $i,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ef(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Do(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HS(this,e)}reload(){return KS(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(Dn(this.auth));const e=await this.getIdToken();return await Do(this,$S(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:D,isAnonymous:U,providerData:z,stsTokenManager:_}=n;Y(k&&_,e,"internal-error");const m=$i.fromJSON(this.name,_);Y(typeof k=="string",e,"internal-error"),Xn(y,e.name),Xn(v,e.name),Y(typeof D=="boolean",e,"internal-error"),Y(typeof U=="boolean",e,"internal-error"),Xn(A,e.name),Xn(P,e.name),Xn(N,e.name),Xn(L,e.name),Xn(S,e.name),Xn(E,e.name);const w=new Pn({uid:k,auth:e,email:v,emailVerified:D,displayName:y,isAnonymous:U,photoURL:P,phoneNumber:A,tenantId:N,stsTokenManager:m,createdAt:S,lastLoginAt:E});return z&&Array.isArray(z)&&(w.providerData=z.map(T=>Object.assign({},T))),L&&(w._redirectEventId=L),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new $i;i.updateFromServerResponse(n);const s=new Pn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Y(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?U_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new $i;l.updateFromIdToken(r);const u=new Pn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Map;function Nn(t){Fn(t instanceof Function,"Expected a class definition");let e=ig.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ig.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z_.type="NONE";const sg=z_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ul(this.userKey,i.apiKey,s),this.fullPersistenceKey=ul("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(Nn(sg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Nn(sg);const o=ul(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const y=Pn._fromJSON(e,f);h!==s&&(l=y),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Hi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(B_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(K_(e))return"Blackberry";if(G_(e))return"Webos";if($_(e))return"Safari";if((e.includes("chrome/")||H_(e))&&!e.includes("edge/"))return"Chrome";if(q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function B_(t=ht()){return/firefox\//i.test(t)}function $_(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H_(t=ht()){return/crios\//i.test(t)}function W_(t=ht()){return/iemobile/i.test(t)}function q_(t=ht()){return/android/i.test(t)}function K_(t=ht()){return/blackberry/i.test(t)}function G_(t=ht()){return/webos/i.test(t)}function sf(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XS(t=ht()){var e;return sf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JS(){return dI()&&document.documentMode===10}function Q_(t=ht()){return sf(t)||q_(t)||G_(t)||K_(t)||/windows phone/i.test(t)||W_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e=[]){let n;switch(t){case"Browser":n=og(ht());break;case"Worker":n=`${og(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(t,e={}){return Nr(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=6;class nk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ag(this),this.idTokenSubscription=new ag(this),this.beforeStateQueue=new ZS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await F_(this,{idToken:e}),r=await Pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(Dn(this));const n=e?He(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(Dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(Dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ek(this),n=new nk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function di(t){return He(t)}class ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=wI(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ik(t){Eu=t}function X_(t){return Eu.loadJS(t)}function sk(){return Eu.recaptchaEnterpriseScript}function ok(){return Eu.gapiScript}function ak(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const lk="recaptcha-enterprise",uk="NO_RECAPTCHA";class ck{constructor(e){this.type=lk,this.auth=di(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{BS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new zS(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;ng(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(uk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&ng(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sk();u.length!==0&&(u+=l),X_(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function lg(t,e,n,r=!1){const i=new ck(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Uh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await lg(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await lg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t,e){const n=Zd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if($l(s,e??{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function dk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fk(t,e,n){const r=di(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=J_(e),{host:o,port:l}=pk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),mk()}function J_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pk(t){const e=J_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ug(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ug(o)}}}function ug(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}async function gk(t,e){return Nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(t,e){return Qo(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vk(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function _k(t,e){return Qo(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends of{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Lo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Lo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uh(e,n,"signInWithPassword",yk);case"emailLink":return vk(e,{email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uh(e,r,"signUpPassword",gk);case"emailLink":return _k(e,{idToken:n,email:this._email,oobCode:this._password});default:rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return Qo(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk="http://localhost";class si extends of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ef(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:wk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tk(t){const e=Ks(Gs(t)).link,n=e?Ks(Gs(e)).deep_link_id:null,r=Ks(Gs(t)).deep_link_id;return(r?Ks(Gs(r)).link:null)||r||n||e||t}class af{constructor(e){var n,r,i,s,o,l;const u=Ks(Gs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,y=Ek((i=u.mode)!==null&&i!==void 0?i:null);Y(h&&f&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Tk(e);try{return new af(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this.providerId=fs.PROVIDER_ID}static credential(e,n){return Lo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=af.parseLink(n);return Y(r,"argument-error"),Lo._fromEmailAndCode(e,r.code,r.tenantId)}}fs.PROVIDER_ID="password";fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Z_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Yo{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.FACEBOOK_SIGN_IN_METHOD="facebook.com";nr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.GOOGLE_SIGN_IN_METHOD="google.com";rr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Yo{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Yo{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(t,e){return Qo(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pn._fromIdTokenResponse(e,r,i),o=cg(r);return new oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cg(r);return new oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends $n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ql.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ql(e,n,r,i)}}function e0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ql._fromErrorAndOperation(t,s,e,r):s})}async function Sk(t,e,n=!1){const r=await Do(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kk(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject(Dn(r));const i="reauthenticate";try{const s=await Do(t,e0(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=rf(s.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t0(t,e,n=!1){if(ln(t.app))return Promise.reject(Dn(t));const r="signIn",i=await e0(t,r,e),s=await oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ak(t,e){return t0(di(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n0(t){const e=di(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function xk(t,e,n){if(ln(t.app))return Promise.reject(Dn(t));const r=di(t),o=await Uh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ik).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&n0(t),u}),l=await oi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Ck(t,e,n){return ln(t.app)?Promise.reject(Dn(t)):Ak(He(t),fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&n0(t),r})}function Rk(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function Pk(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function Nk(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function bk(t){return He(t).signOut()}const Kl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kl,"1"),this.storage.removeItem(Kl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=1e3,Lk=10;class i0 extends r0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Lk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}i0.type="LOCAL";const Vk=i0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0 extends r0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}s0.type="SESSION";const o0=s0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await Ok(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=lf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(y){const v=y;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function jk(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function Fk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Uk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zk(){return a0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0="firebaseLocalStorageDb",Bk=1,Gl="firebaseLocalStorage",u0="fbase_key";class Xo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([Gl],e?"readwrite":"readonly").objectStore(Gl)}function $k(){const t=indexedDB.deleteDatabase(l0);return new Xo(t).toPromise()}function zh(){const t=indexedDB.open(l0,Bk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gl,{keyPath:u0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gl)?e(r):(r.close(),await $k(),e(await zh()))})})}async function hg(t,e,n){const r=Iu(t,!0).put({[u0]:e,value:n});return new Xo(r).toPromise()}async function Hk(t,e){const n=Iu(t,!1).get(e),r=await new Xo(n).toPromise();return r===void 0?null:r.value}function dg(t,e){const n=Iu(t,!0).delete(e);return new Xo(n).toPromise()}const Wk=800,qk=3;class c0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return a0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tu._getInstance(zk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Fk(),!this.activeServiceWorker)return;this.sender=new Mk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Uk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zh();return await hg(e,Kl,"1"),await dg(e,Kl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Iu(i,!1).getAll();return new Xo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c0.type="LOCAL";const Kk=c0;new Go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t,e){return e?Nn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qk(t){return t0(t.auth,new uf(t),t.bypassAuthState)}function Yk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),kk(n,new uf(t),t.bypassAuthState)}async function Xk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),Sk(n,new uf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qk;case"linkViaPopup":case"linkViaRedirect":return Xk;case"reauthViaPopup":case"reauthViaRedirect":return Yk;default:rn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=new Go(2e3,1e4);class Oi extends h0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Oi.currentPopupAction&&Oi.currentPopupAction.cancel(),Oi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jk.get())};e()}}Oi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="pendingRedirect",cl=new Map;class eA extends h0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const r=await tA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tA(t,e){const n=iA(e),r=rA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nA(t,e){cl.set(t._key(),e)}function rA(t){return Nn(t._redirectPersistence)}function iA(t){return ul(Zk,t.config.apiKey,t.name)}async function sA(t,e,n=!1){if(ln(t.app))return Promise.reject(Dn(t));const r=di(t),i=Gk(r,e),o=await new eA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=10*60*1e3;class aA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!d0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oA&&this.cachedEventUids.clear(),this.cachedEventUids.has(fg(e))}saveEventToCache(e){this.cachedEventUids.add(fg(e)),this.lastProcessedEventTime=Date.now()}}function fg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hA=/^https?/;async function dA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uA(t);for(const n of e)try{if(fA(n))return}catch{}rn(t,"unauthorized-domain")}function fA(t){const e=jh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hA.test(n))return!1;if(cA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new Go(3e4,6e4);function pg(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mA(t){return new Promise((e,n)=>{var r,i,s;function o(){pg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pg(),n(hn(t,"network-request-failed"))},timeout:pA.get()})}if(!((i=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=dn().gapi)===null||s===void 0)&&s.load)o();else{const l=ak("iframefcb");return dn()[l]=()=>{gapi.load?o():n(hn(t,"network-request-failed"))},X_(`${ok()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw hl=null,e})}let hl=null;function gA(t){return hl=hl||mA(t),hl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=new Go(5e3,15e3),vA="__/auth/iframe",_A="emulator/auth/iframe",wA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},EA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TA(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nf(e,_A):`https://${t.config.authDomain}/${vA}`,r={apiKey:e.apiKey,appName:t.name,v:ds},i=EA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ko(r).slice(1)}`}async function IA(t){const e=await gA(t),n=dn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:TA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=hn(t,"network-request-failed"),l=dn().setTimeout(()=>{s(o)},yA.get());function u(){dn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kA=500,AA=600,xA="_blank",CA="http://localhost";class mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function RA(t,e,n,r=kA,i=AA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},SA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ht().toLowerCase();n&&(l=H_(h)?xA:n),B_(h)&&(e=e||CA,u.scrollbars="yes");const f=Object.entries(u).reduce((v,[A,P])=>`${v}${A}=${P},`,"");if(XS(h)&&l!=="_self")return PA(e||"",l),new mg(null);const y=window.open(e||"",l,f);Y(y,t,"popup-blocked");try{y.focus()}catch{}return new mg(y)}function PA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA="__/auth/handler",bA="emulator/auth/handler",DA=encodeURIComponent("fac");async function gg(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:i};if(e instanceof Z_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_I(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,y]of Object.entries({}))o[f]=y}if(e instanceof Yo){const f=e.getScopes().filter(y=>y!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${DA}=${encodeURIComponent(u)}`:"";return`${LA(t)}?${Ko(l).slice(1)}${h}`}function LA({config:t}){return t.emulator?nf(t,bA):`https://${t.authDomain}/${NA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="webStorageSupport";class VA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=o0,this._completeRedirectFn=sA,this._overrideRedirectResult=nA}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await gg(e,n,r,jh(),i);return RA(e,o,lf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await gg(e,n,r,jh(),i);return jk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IA(e),r=new aA(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Lc,{type:Lc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Lc];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Q_()||$_()||sf()}}const OA=VA;var yg="@firebase/auth",vg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function FA(t){es(new ii("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y_(t)},h=new rk(r,i,s,u);return dk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new ii("auth-internal",e=>{const n=di(e.getProvider("auth").getImmediate());return(r=>new MA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_r(yg,vg,jA(t)),_r(yg,vg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=5*60,zA=A_("authIdTokenMaxAge")||UA;let _g=null;const BA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zA)return;const i=n==null?void 0:n.token;_g!==i&&(_g=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $A(t=P_()){const e=Zd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hk(t,{popupRedirectResolver:OA,persistence:[Kk,Vk,o0]}),r=A_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=BA(s.toString());Pk(n,o,()=>o(n.currentUser)),Rk(n,l=>o(l))}}const i=S_("auth");return i&&fk(n,`http://${i}`),n}function HA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ik({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});FA("Browser");var wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr,f0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,m){function w(){}w.prototype=m.prototype,_.D=m.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(T,x,C){for(var I=Array(arguments.length-2),We=2;We<arguments.length;We++)I[We-2]=arguments[We];return m.prototype[x].apply(T,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,m,w){w||(w=0);var T=Array(16);if(typeof m=="string")for(var x=0;16>x;++x)T[x]=m.charCodeAt(w++)|m.charCodeAt(w++)<<8|m.charCodeAt(w++)<<16|m.charCodeAt(w++)<<24;else for(x=0;16>x;++x)T[x]=m[w++]|m[w++]<<8|m[w++]<<16|m[w++]<<24;m=_.g[0],w=_.g[1],x=_.g[2];var C=_.g[3],I=m+(C^w&(x^C))+T[0]+3614090360&4294967295;m=w+(I<<7&4294967295|I>>>25),I=C+(x^m&(w^x))+T[1]+3905402710&4294967295,C=m+(I<<12&4294967295|I>>>20),I=x+(w^C&(m^w))+T[2]+606105819&4294967295,x=C+(I<<17&4294967295|I>>>15),I=w+(m^x&(C^m))+T[3]+3250441966&4294967295,w=x+(I<<22&4294967295|I>>>10),I=m+(C^w&(x^C))+T[4]+4118548399&4294967295,m=w+(I<<7&4294967295|I>>>25),I=C+(x^m&(w^x))+T[5]+1200080426&4294967295,C=m+(I<<12&4294967295|I>>>20),I=x+(w^C&(m^w))+T[6]+2821735955&4294967295,x=C+(I<<17&4294967295|I>>>15),I=w+(m^x&(C^m))+T[7]+4249261313&4294967295,w=x+(I<<22&4294967295|I>>>10),I=m+(C^w&(x^C))+T[8]+1770035416&4294967295,m=w+(I<<7&4294967295|I>>>25),I=C+(x^m&(w^x))+T[9]+2336552879&4294967295,C=m+(I<<12&4294967295|I>>>20),I=x+(w^C&(m^w))+T[10]+4294925233&4294967295,x=C+(I<<17&4294967295|I>>>15),I=w+(m^x&(C^m))+T[11]+2304563134&4294967295,w=x+(I<<22&4294967295|I>>>10),I=m+(C^w&(x^C))+T[12]+1804603682&4294967295,m=w+(I<<7&4294967295|I>>>25),I=C+(x^m&(w^x))+T[13]+4254626195&4294967295,C=m+(I<<12&4294967295|I>>>20),I=x+(w^C&(m^w))+T[14]+2792965006&4294967295,x=C+(I<<17&4294967295|I>>>15),I=w+(m^x&(C^m))+T[15]+1236535329&4294967295,w=x+(I<<22&4294967295|I>>>10),I=m+(x^C&(w^x))+T[1]+4129170786&4294967295,m=w+(I<<5&4294967295|I>>>27),I=C+(w^x&(m^w))+T[6]+3225465664&4294967295,C=m+(I<<9&4294967295|I>>>23),I=x+(m^w&(C^m))+T[11]+643717713&4294967295,x=C+(I<<14&4294967295|I>>>18),I=w+(C^m&(x^C))+T[0]+3921069994&4294967295,w=x+(I<<20&4294967295|I>>>12),I=m+(x^C&(w^x))+T[5]+3593408605&4294967295,m=w+(I<<5&4294967295|I>>>27),I=C+(w^x&(m^w))+T[10]+38016083&4294967295,C=m+(I<<9&4294967295|I>>>23),I=x+(m^w&(C^m))+T[15]+3634488961&4294967295,x=C+(I<<14&4294967295|I>>>18),I=w+(C^m&(x^C))+T[4]+3889429448&4294967295,w=x+(I<<20&4294967295|I>>>12),I=m+(x^C&(w^x))+T[9]+568446438&4294967295,m=w+(I<<5&4294967295|I>>>27),I=C+(w^x&(m^w))+T[14]+3275163606&4294967295,C=m+(I<<9&4294967295|I>>>23),I=x+(m^w&(C^m))+T[3]+4107603335&4294967295,x=C+(I<<14&4294967295|I>>>18),I=w+(C^m&(x^C))+T[8]+1163531501&4294967295,w=x+(I<<20&4294967295|I>>>12),I=m+(x^C&(w^x))+T[13]+2850285829&4294967295,m=w+(I<<5&4294967295|I>>>27),I=C+(w^x&(m^w))+T[2]+4243563512&4294967295,C=m+(I<<9&4294967295|I>>>23),I=x+(m^w&(C^m))+T[7]+1735328473&4294967295,x=C+(I<<14&4294967295|I>>>18),I=w+(C^m&(x^C))+T[12]+2368359562&4294967295,w=x+(I<<20&4294967295|I>>>12),I=m+(w^x^C)+T[5]+4294588738&4294967295,m=w+(I<<4&4294967295|I>>>28),I=C+(m^w^x)+T[8]+2272392833&4294967295,C=m+(I<<11&4294967295|I>>>21),I=x+(C^m^w)+T[11]+1839030562&4294967295,x=C+(I<<16&4294967295|I>>>16),I=w+(x^C^m)+T[14]+4259657740&4294967295,w=x+(I<<23&4294967295|I>>>9),I=m+(w^x^C)+T[1]+2763975236&4294967295,m=w+(I<<4&4294967295|I>>>28),I=C+(m^w^x)+T[4]+1272893353&4294967295,C=m+(I<<11&4294967295|I>>>21),I=x+(C^m^w)+T[7]+4139469664&4294967295,x=C+(I<<16&4294967295|I>>>16),I=w+(x^C^m)+T[10]+3200236656&4294967295,w=x+(I<<23&4294967295|I>>>9),I=m+(w^x^C)+T[13]+681279174&4294967295,m=w+(I<<4&4294967295|I>>>28),I=C+(m^w^x)+T[0]+3936430074&4294967295,C=m+(I<<11&4294967295|I>>>21),I=x+(C^m^w)+T[3]+3572445317&4294967295,x=C+(I<<16&4294967295|I>>>16),I=w+(x^C^m)+T[6]+76029189&4294967295,w=x+(I<<23&4294967295|I>>>9),I=m+(w^x^C)+T[9]+3654602809&4294967295,m=w+(I<<4&4294967295|I>>>28),I=C+(m^w^x)+T[12]+3873151461&4294967295,C=m+(I<<11&4294967295|I>>>21),I=x+(C^m^w)+T[15]+530742520&4294967295,x=C+(I<<16&4294967295|I>>>16),I=w+(x^C^m)+T[2]+3299628645&4294967295,w=x+(I<<23&4294967295|I>>>9),I=m+(x^(w|~C))+T[0]+4096336452&4294967295,m=w+(I<<6&4294967295|I>>>26),I=C+(w^(m|~x))+T[7]+1126891415&4294967295,C=m+(I<<10&4294967295|I>>>22),I=x+(m^(C|~w))+T[14]+2878612391&4294967295,x=C+(I<<15&4294967295|I>>>17),I=w+(C^(x|~m))+T[5]+4237533241&4294967295,w=x+(I<<21&4294967295|I>>>11),I=m+(x^(w|~C))+T[12]+1700485571&4294967295,m=w+(I<<6&4294967295|I>>>26),I=C+(w^(m|~x))+T[3]+2399980690&4294967295,C=m+(I<<10&4294967295|I>>>22),I=x+(m^(C|~w))+T[10]+4293915773&4294967295,x=C+(I<<15&4294967295|I>>>17),I=w+(C^(x|~m))+T[1]+2240044497&4294967295,w=x+(I<<21&4294967295|I>>>11),I=m+(x^(w|~C))+T[8]+1873313359&4294967295,m=w+(I<<6&4294967295|I>>>26),I=C+(w^(m|~x))+T[15]+4264355552&4294967295,C=m+(I<<10&4294967295|I>>>22),I=x+(m^(C|~w))+T[6]+2734768916&4294967295,x=C+(I<<15&4294967295|I>>>17),I=w+(C^(x|~m))+T[13]+1309151649&4294967295,w=x+(I<<21&4294967295|I>>>11),I=m+(x^(w|~C))+T[4]+4149444226&4294967295,m=w+(I<<6&4294967295|I>>>26),I=C+(w^(m|~x))+T[11]+3174756917&4294967295,C=m+(I<<10&4294967295|I>>>22),I=x+(m^(C|~w))+T[2]+718787259&4294967295,x=C+(I<<15&4294967295|I>>>17),I=w+(C^(x|~m))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+m&4294967295,_.g[1]=_.g[1]+(x+(I<<21&4294967295|I>>>11))&4294967295,_.g[2]=_.g[2]+x&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.u=function(_,m){m===void 0&&(m=_.length);for(var w=m-this.blockSize,T=this.B,x=this.h,C=0;C<m;){if(x==0)for(;C<=w;)i(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<m;)if(T[x++]=_.charCodeAt(C++),x==this.blockSize){i(this,T),x=0;break}}else for(;C<m;)if(T[x++]=_[C++],x==this.blockSize){i(this,T),x=0;break}}this.h=x,this.o+=m},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var m=1;m<_.length-8;++m)_[m]=0;var w=8*this.o;for(m=_.length-8;m<_.length;++m)_[m]=w&255,w/=256;for(this.u(_),_=Array(16),m=w=0;4>m;++m)for(var T=0;32>T;T+=8)_[w++]=this.g[m]>>>T&255;return _};function s(_,m){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=m(_)}function o(_,m){this.h=m;for(var w=[],T=!0,x=_.length-1;0<=x;x--){var C=_[x]|0;T&&C==m||(w[x]=C,T=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?s(_,function(m){return new o([m|0],0>m?-1:0)}):new o([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return y;if(0>_)return L(h(-_));for(var m=[],w=1,T=0;_>=w;T++)m[T]=_/w|0,w*=4294967296;return new o(m,0)}function f(_,m){if(_.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(_.charAt(0)=="-")return L(f(_.substring(1),m));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(m,8)),T=y,x=0;x<_.length;x+=8){var C=Math.min(8,_.length-x),I=parseInt(_.substring(x,x+C),m);8>C?(C=h(Math.pow(m,C)),T=T.j(C).add(h(I))):(T=T.j(w),T=T.add(h(I)))}return T}var y=u(0),v=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-L(this).m();for(var _=0,m=1,w=0;w<this.g.length;w++){var T=this.i(w);_+=(0<=T?T:4294967296+T)*m,m*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(P(this))return"0";if(N(this))return"-"+L(this).toString(_);for(var m=h(Math.pow(_,6)),w=this,T="";;){var x=D(w,m).g;w=S(w,x.j(m));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=x,P(w))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function P(_){if(_.h!=0)return!1;for(var m=0;m<_.g.length;m++)if(_.g[m]!=0)return!1;return!0}function N(_){return _.h==-1}t.l=function(_){return _=S(this,_),N(_)?-1:P(_)?0:1};function L(_){for(var m=_.g.length,w=[],T=0;T<m;T++)w[T]=~_.g[T];return new o(w,~_.h).add(v)}t.abs=function(){return N(this)?L(this):this},t.add=function(_){for(var m=Math.max(this.g.length,_.g.length),w=[],T=0,x=0;x<=m;x++){var C=T+(this.i(x)&65535)+(_.i(x)&65535),I=(C>>>16)+(this.i(x)>>>16)+(_.i(x)>>>16);T=I>>>16,C&=65535,I&=65535,w[x]=I<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(_,m){return _.add(L(m))}t.j=function(_){if(P(this)||P(_))return y;if(N(this))return N(_)?L(this).j(L(_)):L(L(this).j(_));if(N(_))return L(this.j(L(_)));if(0>this.l(A)&&0>_.l(A))return h(this.m()*_.m());for(var m=this.g.length+_.g.length,w=[],T=0;T<2*m;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var x=0;x<_.g.length;x++){var C=this.i(T)>>>16,I=this.i(T)&65535,We=_.i(x)>>>16,tt=_.i(x)&65535;w[2*T+2*x]+=I*tt,E(w,2*T+2*x),w[2*T+2*x+1]+=C*tt,E(w,2*T+2*x+1),w[2*T+2*x+1]+=I*We,E(w,2*T+2*x+1),w[2*T+2*x+2]+=C*We,E(w,2*T+2*x+2)}for(T=0;T<m;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=m;T<2*m;T++)w[T]=0;return new o(w,0)};function E(_,m){for(;(_[m]&65535)!=_[m];)_[m+1]+=_[m]>>>16,_[m]&=65535,m++}function k(_,m){this.g=_,this.h=m}function D(_,m){if(P(m))throw Error("division by zero");if(P(_))return new k(y,y);if(N(_))return m=D(L(_),m),new k(L(m.g),L(m.h));if(N(m))return m=D(_,L(m)),new k(L(m.g),m.h);if(30<_.g.length){if(N(_)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var w=v,T=m;0>=T.l(_);)w=U(w),T=U(T);var x=z(w,1),C=z(T,1);for(T=z(T,2),w=z(w,2);!P(T);){var I=C.add(T);0>=I.l(_)&&(x=x.add(w),C=I),T=z(T,1),w=z(w,1)}return m=S(_,x.j(m)),new k(x,m)}for(x=y;0<=_.l(m);){for(w=Math.max(1,Math.floor(_.m()/m.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(w),I=C.j(m);N(I)||0<I.l(_);)w-=T,C=h(w),I=C.j(m);P(C)&&(C=v),x=x.add(C),_=S(_,I)}return new k(x,_)}t.A=function(_){return D(this,_).h},t.and=function(_){for(var m=Math.max(this.g.length,_.g.length),w=[],T=0;T<m;T++)w[T]=this.i(T)&_.i(T);return new o(w,this.h&_.h)},t.or=function(_){for(var m=Math.max(this.g.length,_.g.length),w=[],T=0;T<m;T++)w[T]=this.i(T)|_.i(T);return new o(w,this.h|_.h)},t.xor=function(_){for(var m=Math.max(this.g.length,_.g.length),w=[],T=0;T<m;T++)w[T]=this.i(T)^_.i(T);return new o(w,this.h^_.h)};function U(_){for(var m=_.g.length+1,w=[],T=0;T<m;T++)w[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(w,_.h)}function z(_,m){var w=m>>5;m%=32;for(var T=_.g.length-w,x=[],C=0;C<T;C++)x[C]=0<m?_.i(C+w)>>>m|_.i(C+w+1)<<32-m:_.i(C+w);return new o(x,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,f0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Xr=o}).apply(typeof wg<"u"?wg:typeof self<"u"?self:typeof window<"u"?window:{});var Ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var p0,Qs,m0,dl,Bh,g0,y0,v0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ha=="object"&&Ha];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var R=a[p];if(!(R in d))break e;d=d[R]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,R={next:function(){if(!p&&d<a.length){var b=d++;return{value:c(b,a[b]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function y(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),a.apply(c,R)}}return function(){return a.apply(c,arguments)}}function v(a,c,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,v.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function P(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,R,b){for(var B=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)B[pe-2]=arguments[pe];return c.prototype[R].apply(p,B)}}function N(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function L(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=a.length||0,b=p.length||0;a.length=R+b;for(let B=0;B<b;B++)a[R+B]=p[B]}else a.push(p)}}class S{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var U=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function z(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function _(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function m(a){const c={};for(const d in a)c[d]=a[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)a[d]=p[d];for(let b=0;b<w.length;b++)d=w[b],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function x(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function I(){var a=X;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class We{constructor(){this.h=this.g=null}add(c,d){const p=tt.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var tt=new S(()=>new Hn,a=>a.reset());class Hn{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ht,H=!1,X=new We,Z=()=>{const a=l.Promise.resolve(void 0);Ht=()=>{a.then(ve)}};var ve=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(d){C(d)}var c=tt;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}H=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var dt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Wt(a,c){if(me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{D(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:At[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Wt.aa.h.call(this)}}P(Wt,me);var At={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var qe="closure_listenable_"+(1e6*Math.random()|0),Bf=0;function $f(a,c,d,p,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++Bf,this.da=this.fa=!1}function ys(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function vs(a){this.src=a,this.g={},this.h=0}vs.prototype.add=function(a,c,d,p,R){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var B=sa(a,c,p,R);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new $f(c,this.src,b,!!p,R),c.fa=d,a.push(c)),c};function ia(a,c){var d=c.type;if(d in a.g){var p=a.g[d],R=Array.prototype.indexOf.call(p,c,void 0),b;(b=0<=R)&&Array.prototype.splice.call(p,R,1),b&&(ys(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function sa(a,c,d,p){for(var R=0;R<a.length;++R){var b=a[R];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==p)return R}return-1}var oa="closure_lm_"+(1e6*Math.random()|0),aa={};function Fu(a,c,d,p,R){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Fu(a,c[b],d,p,R);return null}return d=Wn(d),a&&a[qe]?a.K(c,d,h(p)?!!p.capture:!1,R):Hf(a,c,d,!1,p,R)}function Hf(a,c,d,p,R,b){if(!c)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,pe=Dr(a);if(pe||(a[oa]=pe=new vs(a)),d=pe.add(c,d,p,B,b),d.proxy)return d;if(p=Uu(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)dt||(R=B),R===void 0&&(R=!1),a.addEventListener(c.toString(),p,R);else if(a.attachEvent)a.attachEvent(_s(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Uu(){function a(d){return c.call(a.src,a.listener,d)}const c=ft;return a}function yn(a,c,d,p,R){if(Array.isArray(c))for(var b=0;b<c.length;b++)yn(a,c[b],d,p,R);else p=h(p)?!!p.capture:!!p,d=Wn(d),a&&a[qe]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],d=sa(b,d,p,R),-1<d&&(ys(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=Dr(a))&&(c=a.g[c.toString()],a=-1,c&&(a=sa(c,d,p,R)),(d=-1<a?c[a]:null)&&qt(d))}function qt(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[qe])ia(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(_s(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Dr(c))?(ia(d,a),d.h==0&&(d.src=null,c[oa]=null)):ys(a)}}}function _s(a){return a in aa?aa[a]:aa[a]="on"+a}function ft(a,c){if(a.da)a=!0;else{c=new Wt(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&qt(a),a=d.call(p,c)}return a}function Dr(a){return a=a[oa],a instanceof vs?a:null}var vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wn(a){return typeof a=="function"?a:(a[vn]||(a[vn]=function(c){return a.handleEvent(c)}),a[vn])}function Ue(){he.call(this),this.i=new vs(this),this.M=this,this.F=null}P(Ue,he),Ue.prototype[qe]=!0,Ue.prototype.removeEventListener=function(a,c,d,p){yn(this,a,c,d,p)};function De(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new me(c,a);else if(c instanceof me)c.target=c.target||a;else{var R=c;c=new me(p,a),T(c,R)}if(R=!0,d)for(var b=d.length-1;0<=b;b--){var B=c.g=d[b];R=qn(B,p,!0,c)&&R}if(B=c.g=a,R=qn(B,p,!0,c)&&R,R=qn(B,p,!1,c)&&R,d)for(b=0;b<d.length;b++)B=c.g=d[b],R=qn(B,p,!1,c)&&R}Ue.prototype.N=function(){if(Ue.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)ys(d[p]);delete a.g[c],a.h--}}this.F=null},Ue.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Ue.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function qn(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,b=0;b<c.length;++b){var B=c[b];if(B&&!B.da&&B.capture==d){var pe=B.listener,Ke=B.ha||B.src;B.fa&&ia(a.i,B),R=pe.call(Ke,p)!==!1&&R}}return R&&!p.defaultPrevented}function ws(a,c,d){if(typeof a=="function")d&&(a=v(a,d));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Es(a){a.g=ws(()=>{a.g=null,a.i&&(a.i=!1,Es(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class la extends he{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Es(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _n(a){he.call(this),this.h=a,this.g={}}P(_n,he);var wn=[];function mi(a){z(a.g,function(c,d){this.g.hasOwnProperty(d)&&qt(c)},a),a.g={}}_n.prototype.N=function(){_n.aa.N.call(this),mi(this)},_n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=l.JSON.stringify,Vr=l.JSON.parse,zu=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Ts(){}Ts.prototype.h=null;function ua(a){return a.h||(a.h=a.i())}function Is(){}var Or={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ss(){me.call(this,"d")}P(Ss,me);function ks(){me.call(this,"c")}P(ks,me);var En={},Ot=null;function gi(){return Ot=Ot||new Ue}En.La="serverreachability";function ca(a){me.call(this,En.La,a)}P(ca,me);function Mr(a){const c=gi();De(c,new ca(c))}En.STAT_EVENT="statevent";function V(a,c){me.call(this,En.STAT_EVENT,a),this.stat=c}P(V,me);function j(a){const c=gi();De(c,new V(c,a))}En.Ma="timingevent";function $(a,c){me.call(this,En.Ma,a),this.size=c}P($,me);function re(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Te(){this.g=!0}Te.prototype.xa=function(){this.g=!1};function Mt(a,c,d,p,R,b){a.info(function(){if(a.g)if(b)for(var B="",pe=b.split("&"),Ke=0;Ke<pe.length;Ke++){var ue=pe[Ke].split("=");if(1<ue.length){var nt=ue[0];ue=ue[1];var rt=nt.split("_");B=2<=rt.length&&rt[1]=="type"?B+(nt+"="+ue+"&"):B+(nt+"=redacted&")}}else B=null;else B=b;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+B})}function pt(a,c,d,p,R,b,B){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+b+" "+B})}function ge(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Kt(a,d)+(p?" "+p:"")})}function ha(a,c){a.info(function(){return"TIMEOUT: "+c})}Te.prototype.info=function(){};function Kt(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var b=R[0];if(b!="noop"&&b!="stop"&&b!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Lr(d)}catch{return c}}var da={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bu;function fa(){}P(fa,Ts),fa.prototype.g=function(){return new XMLHttpRequest},fa.prototype.i=function(){return{}},Bu=new fa;function Kn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new _n(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new qf}function qf(){this.i=null,this.g="",this.h=!1}var Kf={},$u={};function Hu(a,c,d){a.L=1,a.v=ya(Tn(c)),a.m=d,a.P=!0,Gf(a,null)}function Gf(a,c){a.F=Date.now(),pa(a),a.A=Tn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),lp(d.i,"t",p),a.C=0,d=a.j.J,a.h=new qf,a.g=Ap(a.j,d?c:null,!a.m),0<a.O&&(a.M=new la(v(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(wn[0]=R.toString()),R=wn);for(var b=0;b<R.length;b++){var B=Fu(d,R[b],p||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Mr(),Mt(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const c=this.M;c&&In(a)==3?c.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const rt=In(this.g);var c=this.g.Ba();const _i=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||mp(this.g)))){this.J||rt!=4||c==7||(c==8||0>=_i?Mr(3):Mr(2)),Wu(this);var d=this.g.Z();this.X=d;t:if(Qf(this)){var p=mp(this.g);a="";var R=p.length,b=In(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jr(this),As(this);var B="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(b&&c==R-1)});p.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,pt(this.i,this.u,this.A,this.l,this.R,rt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,Ke=this.g;if((pe=Ke.g?Ke.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(pe)){var ue=pe;break t}}ue=null}if(d=ue)ge(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qu(this,d);else{this.o=!1,this.s=3,j(12),jr(this),As(this);break e}}if(this.P){d=!0;let Gt;for(;!this.J&&this.C<B.length;)if(Gt=bw(this,B),Gt==$u){rt==4&&(this.s=4,j(14),d=!1),ge(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Kf){this.s=4,j(15),ge(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else ge(this.i,this.l,Gt,null),qu(this,Gt);if(Qf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||B.length!=0||this.h.h||(this.s=1,j(16),d=!1),this.o=this.o&&d,!d)ge(this.i,this.l,B,"[Invalid Chunked Response]"),jr(this),As(this);else if(0<B.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Ju(nt),nt.M=!0,j(11))}}else ge(this.i,this.l,B,null),qu(this,B);rt==4&&jr(this),this.o&&!this.J&&(rt==4?Tp(this.j,this):(this.o=!1,pa(this)))}else Qw(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,j(12)):(this.s=0,j(13)),jr(this),As(this)}}}catch{}finally{}};function Qf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function bw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?$u:(d=Number(c.substring(d,p)),isNaN(d)?Kf:(p+=1,p+d>c.length?$u:(c=c.slice(p,p+d),a.C=p+d,c)))}Kn.prototype.cancel=function(){this.J=!0,jr(this)};function pa(a){a.S=Date.now()+a.I,Yf(a,a.I)}function Yf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=re(v(a.ba,a),c)}function Wu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ha(this.i,this.A),this.L!=2&&(Mr(),j(17)),jr(this),this.s=2,As(this)):Yf(this,this.S-a)};function As(a){a.j.G==0||a.J||Tp(a.j,a)}function jr(a){Wu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,mi(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function qu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ku(d.h,a))){if(!a.K&&Ku(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ia(d),Ea(d);else break e;Xu(d),j(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=re(v(d.Za,d),6e3));if(1>=Zf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ur(d,11)}else if((a.K||d.g==a)&&Ia(d),!E(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let ue=R[c];if(d.T=ue[0],ue=ue[1],d.G==2)if(ue[0]=="c"){d.K=ue[1],d.ia=ue[2];const nt=ue[3];nt!=null&&(d.la=nt,d.j.info("VER="+d.la));const rt=ue[4];rt!=null&&(d.Aa=rt,d.j.info("SVER="+d.Aa));const _i=ue[5];_i!=null&&typeof _i=="number"&&0<_i&&(p=1.5*_i,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Gt=a.g;if(Gt){const ka=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ka){var b=p.h;b.g||ka.indexOf("spdy")==-1&&ka.indexOf("quic")==-1&&ka.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Gu(b,b.h),b.h=null))}if(p.D){const Zu=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;Zu&&(p.ya=Zu,_e(p.I,p.D,Zu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var B=a;if(p.qa=kp(p,p.J?p.ia:null,p.W),B.K){ep(p.h,B);var pe=B,Ke=p.L;Ke&&(pe.I=Ke),pe.B&&(Wu(pe),pa(pe)),p.g=B}else wp(p);0<d.i.length&&Ta(d)}else ue[0]!="stop"&&ue[0]!="close"||Ur(d,7);else d.G==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Ur(d,7):Yu(d):ue[0]!="noop"&&d.l&&d.l.ta(ue),d.v=0)}}Mr(4)}catch{}}var Dw=class{constructor(a,c){this.g=a,this.map=c}};function Xf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Zf(a){return a.h?1:a.g?a.g.size:0}function Ku(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Gu(a,c){a.g?a.g.add(c):a.h=c}function ep(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Xf.prototype.cancel=function(){if(this.i=tp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return N(a.i)}function Lw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function Vw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function np(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Vw(a),p=Lw(a),R=p.length,b=0;b<R;b++)c.call(void 0,p[b],d&&d[b],a)}var rp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ow(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),R=null;if(0<=p){var b=a[d].substring(0,p);R=a[d].substring(p+1)}else b=a[d];c(b,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Fr){this.h=a.h,ma(this,a.j),this.o=a.o,this.g=a.g,ga(this,a.s),this.l=a.l;var c=a.i,d=new Rs;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),ip(this,d),this.m=a.m}else a&&(c=String(a).match(rp))?(this.h=!1,ma(this,c[1]||"",!0),this.o=xs(c[2]||""),this.g=xs(c[3]||"",!0),ga(this,c[4]),this.l=xs(c[5]||"",!0),ip(this,c[6]||"",!0),this.m=xs(c[7]||"")):(this.h=!1,this.i=new Rs(null,this.h))}Fr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Cs(c,sp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Cs(c,sp,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Cs(d,d.charAt(0)=="/"?Fw:jw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Cs(d,zw)),a.join("")};function Tn(a){return new Fr(a)}function ma(a,c,d){a.j=d?xs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ga(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function ip(a,c,d){c instanceof Rs?(a.i=c,Bw(a.i,a.h)):(d||(c=Cs(c,Uw)),a.i=new Rs(c,a.h))}function _e(a,c,d){a.i.set(c,d)}function ya(a){return _e(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Cs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,Mw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Mw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sp=/[#\/\?@]/g,jw=/[#\?:]/g,Fw=/[#\?]/g,Uw=/[#\?@]/g,zw=/#/g;function Rs(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&Ow(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Rs.prototype,t.add=function(a,c){Gn(this),this.i=null,a=yi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function op(a,c){Gn(a),c=yi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ap(a,c){return Gn(a),c=yi(a,c),a.g.has(c)}t.forEach=function(a,c){Gn(this),this.g.forEach(function(d,p){d.forEach(function(R){a.call(c,R,p,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=a[p];for(let b=0;b<R.length;b++)d.push(c[p])}return d},t.V=function(a){Gn(this);let c=[];if(typeof a=="string")ap(this,a)&&(c=c.concat(this.g.get(yi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Gn(this),this.i=null,a=yi(this,a),ap(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function lp(a,c,d){op(a,c),0<d.length&&(a.i=null,a.g.set(yi(a,c),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const b=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var R=b;B[p]!==""&&(R+="="+encodeURIComponent(String(B[p]))),a.push(R)}}return this.i=a.join("&")};function yi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Bw(a,c){c&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(op(this,p),lp(this,R,d))},a)),a.j=c}function $w(a,c){const d=new Te;if(l.Image){const p=new Image;p.onload=A(Qn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(Qn,d,"TestLoadImage: error",!1,c,p),p.onabort=A(Qn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(Qn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function Hw(a,c){const d=new Te,p=new AbortController,R=setTimeout(()=>{p.abort(),Qn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(b=>{clearTimeout(R),b.ok?Qn(d,"TestPingServer: ok",!0,c):Qn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Qn(d,"TestPingServer: error",!1,c)})}function Qn(a,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function Ww(){this.g=new zu}function qw(a,c,d){const p=d||"";try{np(a,function(R,b){let B=R;h(R)&&(B=Lr(R)),c.push(p+b+"="+encodeURIComponent(B))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function va(a){this.l=a.Ub||null,this.j=a.eb||!1}P(va,Ts),va.prototype.g=function(){return new _a(this.l,this.j)},va.prototype.i=function(a){return function(){return a}}({});function _a(a,c){Ue.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(_a,Ue),t=_a.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;up(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function up(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ps(this):Ns(this),this.readyState==3&&up(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ps(this))},t.Qa=function(a){this.g&&(this.response=a,Ps(this))},t.ga=function(){this.g&&Ps(this)};function Ps(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ns(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(_a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cp(a){let c="";return z(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function Qu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=cp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):_e(a,c,d))}function Re(a){Ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(Re,Ue);var Kw=/^https?$/i,Gw=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bu.g(),this.v=this.o?ua(this.o):ua(Bu),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){hp(this,b);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const b of p.keys())d.set(b,p.get(b));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Gw,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,B]of d)this.g.setRequestHeader(b,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){hp(this,b)}};function hp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,dp(a),wa(a)}function dp(a){a.A||(a.A=!0,De(a,"complete"),De(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,De(this,"complete"),De(this,"abort"),wa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wa(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?fp(this):this.bb())},t.bb=function(){fp(this)};function fp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||In(a)!=4||a.Z()!=2)){if(a.u&&In(a)==4)ws(a.Ea,0,a);else if(De(a,"readystatechange"),In(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=B===0){var R=String(a.D).match(rp)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Kw.test(R?R.toLowerCase():"")}d=p}if(d)De(a,"complete"),De(a,"success");else{a.m=6;try{var b=2<In(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",dp(a)}}finally{wa(a)}}}}function wa(a,c){if(a.g){pp(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||De(a,"ready");try{d.onreadystatechange=p}catch{}}}function pp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function In(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<In(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Vr(c)}};function mp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Qw(a){const c={};a=(a.g&&2<=In(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(E(a[p]))continue;var d=x(a[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[R]||[];c[R]=b,b.push(d)}_(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function gp(a){this.Aa=0,this.i=[],this.j=new Te,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,a),this.cb=bs("retryDelaySeedMs",1e4,a),this.Wa=bs("forwardChannelMaxRetries",2,a),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xf(a&&a.concurrentRequestLimit),this.Da=new Ww,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=gp.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){j(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=kp(this,null,this.W),Ta(this)};function Yu(a){if(yp(a),a.G==3){var c=a.U++,d=Tn(a.I);if(_e(d,"SID",a.K),_e(d,"RID",c),_e(d,"TYPE","terminate"),Ds(a,d),c=new Kn(a,a.j,c),c.L=2,c.v=ya(Tn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Ap(c.j,null),c.g.ea(c.v)),c.F=Date.now(),pa(c)}Sp(a)}function Ea(a){a.g&&(Ju(a),a.g.cancel(),a.g=null)}function yp(a){Ea(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ia(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ta(a){if(!Jf(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ht||Z(),H||(Ht(),H=!0),X.add(c,a),a.B=0}}function Yw(a,c){return Zf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=re(v(a.Ga,a,c),Ip(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Kn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=m(b),T(b,this.S)):b=this.S),this.m!==null||this.O||(R.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=_p(this,R,c),d=Tn(this.I),_e(d,"RID",a),_e(d,"CVER",22),this.D&&_e(d,"X-HTTP-Session-Id",this.D),Ds(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(cp(b)))+"&"+c:this.m&&Qu(d,this.m,b)),Gu(this.h,R),this.Ua&&_e(d,"TYPE","init"),this.P?(_e(d,"$req",c),_e(d,"SID","null"),R.T=!0,Hu(R,d,null)):Hu(R,d,c),this.G=2}}else this.G==3&&(a?vp(this,a):this.i.length==0||Jf(this.h)||vp(this))};function vp(a,c){var d;c?d=c.l:d=a.U++;const p=Tn(a.I);_e(p,"SID",a.K),_e(p,"RID",d),_e(p,"AID",a.T),Ds(a,p),a.m&&a.o&&Qu(p,a.m,a.o),d=new Kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=_p(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Gu(a.h,d),Hu(d,p,c)}function Ds(a,c){a.H&&z(a.H,function(d,p){_e(c,p,d)}),a.l&&np({},function(d,p){_e(c,p,d)})}function _p(a,c,d){d=Math.min(a.i.length,d);var p=a.l?v(a.l.Na,a.l,a):null;e:{var R=a.i;let b=-1;for(;;){const B=["count="+d];b==-1?0<d?(b=R[0].g,B.push("ofs="+b)):b=0:B.push("ofs="+b);let pe=!0;for(let Ke=0;Ke<d;Ke++){let ue=R[Ke].g;const nt=R[Ke].map;if(ue-=b,0>ue)b=Math.max(0,R[Ke].g-100),pe=!1;else try{qw(nt,B,"req"+ue+"_")}catch{p&&p(nt)}}if(pe){p=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function wp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ht||Z(),H||(Ht(),H=!0),X.add(c,a),a.v=0}}function Xu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=re(v(a.Fa,a),Ip(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ep(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=re(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,j(10),Ea(this),Ep(this))};function Ju(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Ep(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Tn(a.qa);_e(c,"RID","rpc"),_e(c,"SID",a.K),_e(c,"AID",a.T),_e(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&_e(c,"TO",a.ja),_e(c,"TYPE","xmlhttp"),Ds(a,c),a.m&&a.o&&Qu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ya(Tn(c)),d.m=null,d.P=!0,Gf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ea(this),Xu(this),j(19))};function Ia(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Tp(a,c){var d=null;if(a.g==c){Ia(a),Ju(a),a.g=null;var p=2}else if(Ku(a.h,c))d=c.D,ep(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=a.B;p=gi(),De(p,new $(p,d)),Ta(a)}else wp(a);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&Yw(a,c)||p==2&&Xu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Ur(a,5);break;case 4:Ur(a,10);break;case 3:Ur(a,6);break;default:Ur(a,2)}}}function Ip(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Ur(a,c){if(a.j.info("Error code "+c),c==2){var d=v(a.fb,a),p=a.Xa;const R=!p;p=new Fr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ma(p,"https"),ya(p),R?$w(p.toString(),d):Hw(p.toString(),d)}else j(2);a.G=0,a.l&&a.l.sa(c),Sp(a),yp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),j(2)):(this.j.info("Failed to ping google.com"),j(1))};function Sp(a){if(a.G=0,a.ka=[],a.l){const c=tp(a.h);(c.length!=0||a.i.length!=0)&&(L(a.ka,c),L(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function kp(a,c,d){var p=d instanceof Fr?Tn(d):new Fr(d);if(p.g!="")c&&(p.g=c+"."+p.g),ga(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var b=new Fr(null);p&&ma(b,p),c&&(b.g=c),R&&ga(b,R),d&&(b.l=d),p=b}return d=a.D,c=a.ya,d&&c&&_e(p,d,c),_e(p,"VER",a.la),Ds(a,p),p}function Ap(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Re(new va({eb:d})):new Re(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xp(){}t=xp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sa(){}Sa.prototype.g=function(a,c){return new xt(a,c)};function xt(a,c){Ue.call(this),this.g=new gp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new vi(this)}P(xt,Ue),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Yu(this.g)},xt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Lr(a),a=d);c.i.push(new Dw(c.Ya++,a)),c.G==3&&Ta(c)},xt.prototype.N=function(){this.g.l=null,delete this.j,Yu(this.g),delete this.g,xt.aa.N.call(this)};function Cp(a){Ss.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}P(Cp,Ss);function Rp(){ks.call(this),this.status=1}P(Rp,ks);function vi(a){this.g=a}P(vi,xp),vi.prototype.ua=function(){De(this.g,"a")},vi.prototype.ta=function(a){De(this.g,new Cp(a))},vi.prototype.sa=function(a){De(this.g,new Rp)},vi.prototype.ra=function(){De(this.g,"b")},Sa.prototype.createWebChannel=Sa.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,v0=function(){return new Sa},y0=function(){return gi()},g0=En,Bh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},da.NO_ERROR=0,da.TIMEOUT=8,da.HTTP_ERROR=6,dl=da,Wf.COMPLETE="complete",m0=Wf,Is.EventType=Or,Or.OPEN="a",Or.CLOSE="b",Or.ERROR="c",Or.MESSAGE="d",Ue.prototype.listen=Ue.prototype.K,Qs=Is,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,p0=Re}).apply(typeof Ha<"u"?Ha:typeof self<"u"?self:typeof window<"u"?window:{});const Eg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Xd("@firebase/firestore");function Bs(){return ai.logLevel}function q(t,...e){if(ai.logLevel<=se.DEBUG){const n=e.map(cf);ai.debug(`Firestore (${ps}): ${t}`,...n)}}function Un(t,...e){if(ai.logLevel<=se.ERROR){const n=e.map(cf);ai.error(`Firestore (${ps}): ${t}`,...n)}}function ts(t,...e){if(ai.logLevel<=se.WARN){const n=e.map(cf);ai.warn(`Firestore (${ps}): ${t}`,...n)}}function cf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function fe(t,e){t||J()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class qA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KA{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){fe(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Jr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(fe(typeof r.accessToken=="string"),new _0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new at(e)}}class GA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class QA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new GA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){fe(this.o===void 0);const r=s=>{s.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.R=n.token,new YA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=JA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ce(t,e){return t<e?-1:t>e?1:0}function ns(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Fe(0,0))}static max(){return new ee(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Vo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Vo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Vo{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const ZA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Vo{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return ZA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new G(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new G(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new G(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(Se.fromString(e))}static fromName(e){return new Q(Se.fromString(e).popFirst(5))}static empty(){return new Q(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new Se(e.slice()))}}function ex(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Sr(i,Q.empty(),e)}function tx(t){return new Sr(t.readTime,t.key,-1)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(ee.min(),Q.empty(),-1)}static max(){return new Sr(ee.max(),Q.empty(),-1)}}function nx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ix{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==rx)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function sx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}hf.oe=-1;function Su(t){return t==null}function Ql(t){return t===0&&1/t==-1/0}function ox(t){return typeof t=="number"&&Number.isInteger(t)&&!Ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function E0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Ce(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wa(this.root,e,this.comparator,!0)}}class Wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=s??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ig(this.data.getIterator())}getIteratorFrom(e){return new Ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new Je(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new T0("Invalid base64 string: "+s):s}}(e);return new et(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const ax=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(fe(!!t),typeof t=="string"){let e=0;const n=ax.exec(t);if(fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function li(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ff(t){const e=t.mapValue.fields.__previous_value__;return df(e)?ff(e):e}function Oo(t){const e=kr(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class Mo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa={mapValue:{}};function ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?df(t)?4:cx(t)?9007199254740991:ux(t)?10:11:J()}function mn(t,e){if(t===e)return!0;const n=ui(t);if(n!==ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),l=kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return li(i.bytesValue).isEqual(li(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),l=Ne(s.doubleValue);return o===l?Ql(o)===Ql(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Tg(o)!==Tg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!mn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function jo(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=ui(t),r=ui(e);if(n!==r)return ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ce(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ne(s.integerValue||s.doubleValue),u=Ne(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Sg(t.timestampValue,e.timestampValue);case 4:return Sg(Oo(t),Oo(e));case 5:return ce(t.stringValue,e.stringValue);case 6:return function(s,o){const l=li(s),u=li(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ce(l[h],u[h]);if(f!==0)return f}return ce(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ce(Ne(s.latitude),Ne(o.latitude));return l!==0?l:ce(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return kg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const y=s.fields||{},v=o.fields||{},A=(l=y.value)===null||l===void 0?void 0:l.arrayValue,P=(u=v.value)===null||u===void 0?void 0:u.arrayValue,N=ce(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:kg(A,P)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===qa.mapValue&&o===qa.mapValue)return 0;if(s===qa.mapValue)return 1;if(o===qa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const v=ce(u[y],f[y]);if(v!==0)return v;const A=rs(l[u[y]],h[f[y]]);if(A!==0)return A}return ce(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function Sg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ce(t,e);const n=kr(t),r=kr(e),i=ce(n.seconds,r.seconds);return i!==0?i:ce(n.nanos,r.nanos)}function kg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=rs(n[i],r[i]);if(s)return s}return ce(n.length,r.length)}function is(t){return $h(t)}function $h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return li(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=$h(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${$h(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function Hh(t){return!!t&&"integerValue"in t}function pf(t){return!!t&&"arrayValue"in t}function Ag(t){return!!t&&"nullValue"in t}function xg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fl(t){return!!t&&"mapValue"in t}function ux(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=uo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uo(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=uo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];fl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Et(uo(this.value))}}function I0(t){const e=[];return fi(t.fields,(n,r)=>{const i=new Ye([n]);if(fl(r)){const s=I0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,ee.min(),ee.min(),ee.min(),Et.empty(),0)}static newFoundDocument(e,n,r,i){return new ut(e,1,n,ee.min(),r,i,0)}static newNoDocument(e,n){return new ut(e,2,n,ee.min(),ee.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ee.min(),ee.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this.position=e,this.inclusive=n}}function Cg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=rs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,n="asc"){this.field=e,this.dir=n}}function hx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{}class Me extends S0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new fx(e,n,r):n==="array-contains"?new gx(e,r):n==="in"?new yx(e,r):n==="not-in"?new vx(e,r):n==="array-contains-any"?new _x(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new px(e,r):new mx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(rs(n,this.value)):n!==null&&ui(this.value)===ui(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends S0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new gn(e,n)}matches(e){return k0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function k0(t){return t.op==="and"}function A0(t){return dx(t)&&k0(t)}function dx(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function Wh(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+is(t.value);if(A0(t))return t.filters.map(e=>Wh(e)).join(",");{const e=t.filters.map(n=>Wh(n)).join(",");return`${t.op}(${e})`}}function x0(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&mn(r.value,i.value)}(t,e):t instanceof gn?function(r,i){return i instanceof gn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&x0(o,i.filters[l]),!0):!1}(t,e):void J()}function C0(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${is(n.value)}`}(t):t instanceof gn?function(n){return n.op.toString()+" {"+n.getFilters().map(C0).join(" ,")+"}"}(t):"Filter"}class fx extends Me{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class px extends Me{constructor(e,n){super(e,"in",n),this.keys=R0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mx extends Me{constructor(e,n){super(e,"not-in",n),this.keys=R0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function R0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class gx extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pf(n)&&jo(n.arrayValue,this.value)}}class yx extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class vx extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jo(this.value.arrayValue,n)}}class _x extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Pg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new wx(t,e,n,r,i,s,o)}function mf(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Wh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>is(r)).join(",")),e.ue=n}return e.ue}function gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!x0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rg(t.startAt,e.startAt)&&Rg(t.endAt,e.endAt)}function qh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ex(t,e,n,r,i,s,o,l){return new ku(t,e,n,r,i,s,o,l)}function yf(t){return new ku(t)}function Ng(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Tx(t){return t.collectionGroup!==null}function co(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Je(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Xl(s,r))}),n.has(Ye.keyField().canonicalString())||e.ce.push(new Xl(Ye.keyField(),r))}return e.ce}function fn(t){const e=te(t);return e.le||(e.le=Ix(e,co(t))),e.le}function Ix(t,e){if(t.limitType==="F")return Pg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Xl(i.field,s)});const n=t.endAt?new Yl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yl(t.startAt.position,t.startAt.inclusive):null;return Pg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Kh(t,e,n){return new ku(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Au(t,e){return gf(fn(t),fn(e))&&t.limitType===e.limitType}function P0(t){return`${mf(fn(t))}|lt:${t.limitType}`}function Ei(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>C0(i)).join(", ")}]`),Su(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>is(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>is(i)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function xu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of co(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Cg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,co(r),i)||r.endAt&&!function(o,l,u){const h=Cg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,co(r),i))}(t,e)}function Sx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function N0(t){return(e,n)=>{let r=!1;for(const i of co(t)){const s=kx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function kx(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?rs(u,h):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return E0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=new Ce(Q.comparator);function zn(){return Ax}const b0=new Ce(Q.comparator);function Ys(...t){let e=b0;for(const n of t)e=e.insert(n.key,n);return e}function D0(t){let e=b0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Gr(){return ho()}function L0(){return ho()}function ho(){return new ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const xx=new Ce(Q.comparator),Cx=new Je(Q.comparator);function ie(...t){let e=Cx;for(const n of t)e=e.add(n);return e}const Rx=new Je(ce);function Px(){return Rx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ql(e)?"-0":e}}function V0(t){return{integerValue:""+t}}function Nx(t,e){return ox(e)?V0(e):vf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this._=void 0}}function bx(t,e,n){return t instanceof Jl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&df(s)&&(s=ff(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Fo?M0(t,e):t instanceof Uo?j0(t,e):function(i,s){const o=O0(i,s),l=bg(o)+bg(i.Pe);return Hh(o)&&Hh(i.Pe)?V0(l):vf(i.serializer,l)}(t,e)}function Dx(t,e,n){return t instanceof Fo?M0(t,e):t instanceof Uo?j0(t,e):n}function O0(t,e){return t instanceof Zl?function(r){return Hh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Jl extends Cu{}class Fo extends Cu{constructor(e){super(),this.elements=e}}function M0(t,e){const n=F0(e);for(const r of t.elements)n.some(i=>mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends Cu{constructor(e){super(),this.elements=e}}function j0(t,e){let n=F0(e);for(const r of t.elements)n=n.filter(i=>!mn(i,r));return{arrayValue:{values:n}}}class Zl extends Cu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function bg(t){return Ne(t.integerValue||t.doubleValue)}function F0(t){return pf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Lx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Fo&&i instanceof Fo||r instanceof Uo&&i instanceof Uo?ns(r.elements,i.elements,mn):r instanceof Zl&&i instanceof Zl?mn(r.Pe,i.Pe):r instanceof Jl&&i instanceof Jl}(t.transform,e.transform)}class Vx{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ru{}function U0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _f(t.key,tn.none()):new ea(t.key,t.data,tn.none());{const n=t.data,r=Et.empty();let i=new Je(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new br(t.key,r,new Pt(i.toArray()),tn.none())}}function Ox(t,e,n){t instanceof ea?function(i,s,o){const l=i.value.clone(),u=Lg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof br?function(i,s,o){if(!pl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Lg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(z0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function fo(t,e,n,r){return t instanceof ea?function(s,o,l,u){if(!pl(s.precondition,o))return l;const h=s.value.clone(),f=Vg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof br?function(s,o,l,u){if(!pl(s.precondition,o))return l;const h=Vg(s.fieldTransforms,u,o),f=o.data;return f.setAll(z0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(s,o,l){return pl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Mx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=O0(r.transform,i||null);s!=null&&(n===null&&(n=Et.empty()),n.set(r.field,s))}return n||null}function Dg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ns(r,i,(s,o)=>Lx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ea extends Ru{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class br extends Ru{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function z0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lg(t,e,n){const r=new Map;fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Dx(o,l,n[i]))}return r}function Vg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,bx(s,o,e))}return r}class _f extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jx extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Ox(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=fo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=L0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=U0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>Dg(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>Dg(n,r))}}class wf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){fe(e.mutations.length===r.length);let i=function(){return xx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new wf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le,oe;function Bx(t){switch(t){default:return J();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function B0(t){if(t===void 0)return Un("GRPC error has no .code"),M.UNKNOWN;switch(t){case Le.OK:return M.OK;case Le.CANCELLED:return M.CANCELLED;case Le.UNKNOWN:return M.UNKNOWN;case Le.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Le.INTERNAL:return M.INTERNAL;case Le.UNAVAILABLE:return M.UNAVAILABLE;case Le.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Le.NOT_FOUND:return M.NOT_FOUND;case Le.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Le.ABORTED:return M.ABORTED;case Le.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Le.DATA_LOSS:return M.DATA_LOSS;default:return J()}}(oe=Le||(Le={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hx=new Xr([4294967295,4294967295],0);function Og(t){const e=$x().encode(t),n=new f0;return n.update(e),new Uint8Array(n.digest())}function Mg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Xr([n,r],0),new Xr([i,s],0)]}class Ef{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xs(`Invalid padding: ${n}`);if(r<0)throw new Xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Xr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Xr.fromNumber(r)));return i.compare(Hx)===1&&(i=new Xr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Og(e),[r,i]=Mg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ef(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=Og(e),[r,i]=Mg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pu(ee.min(),i,new Ce(ce),zn(),ie())}}class ta{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ta(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class $0{constructor(e,n){this.targetId=e,this.me=n}}class H0{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class jg{constructor(){this.fe=0,this.ge=Ug(),this.pe=et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new ta(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Ug()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Wx{constructor(e){this.Le=e,this.Be=new Map,this.ke=zn(),this.qe=Fg(),this.Qe=new Ce(ce)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(qh(s))if(r===0){const o=new Q(s.path);this.Ue(n,o,ut.newNoDocument(o,ee.min()))}else fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=li(r).toUint8Array()}catch(u){if(u instanceof T0)return ts("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Ef(o,i,s)}catch(u){return ts(u instanceof Xs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&qh(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ut.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ie();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Pu(e,n,this.Qe,this.ke,r);return this.ke=zn(),this.qe=Fg(),this.Qe=new Ce(ce),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new jg,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Je(ce),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new jg),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Fg(){return new Ce(Q.comparator)}function Ug(){return new Ce(Q.comparator)}const qx={asc:"ASCENDING",desc:"DESCENDING"},Kx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Gx={and:"AND",or:"OR"};class Qx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gh(t,e){return t.useProto3Json||Su(e)?e:{value:e}}function eu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Yx(t,e){return eu(t,e.toTimestamp())}function pn(t){return fe(!!t),ee.fromTimestamp(function(n){const r=kr(n);return new Fe(r.seconds,r.nanos)}(t))}function Tf(t,e){return Qh(t,e).canonicalString()}function Qh(t,e){const n=function(i){return new Se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q0(t){const e=Se.fromString(t);return fe(X0(e)),e}function Yh(t,e){return Tf(t.databaseId,e.path)}function Vc(t,e){const n=q0(e);if(n.get(1)!==t.databaseId.projectId)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(G0(n))}function K0(t,e){return Tf(t.databaseId,e)}function Xx(t){const e=q0(t);return e.length===4?Se.emptyPath():G0(e)}function Xh(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function G0(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zg(t,e,n){return{name:Yh(t,e),fields:n.value.mapValue.fields}}function Jx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(fe(f===void 0||typeof f=="string"),et.fromBase64String(f||"")):(fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),et.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:B0(h.code);return new G(f,h.message||"")}(o);n=new H0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vc(t,r.document.name),s=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):ee.min(),l=new Et({mapValue:{fields:r.document.fields}}),u=ut.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ml(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vc(t,r.document),s=r.readTime?pn(r.readTime):ee.min(),o=ut.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ml([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vc(t,r.document),s=r.removedTargetIds||[];n=new ml([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new zx(i,s),l=r.targetId;n=new $0(l,o)}}return n}function Zx(t,e){let n;if(e instanceof ea)n={update:zg(t,e.key,e.value)};else if(e instanceof _f)n={delete:Yh(t,e.key)};else if(e instanceof br)n={update:zg(t,e.key,e.data),updateMask:lC(e.fieldMask)};else{if(!(e instanceof jx))return J();n={verify:Yh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Jl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Yx(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function eC(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?pn(i.updateTime):pn(s);return o.isEqual(ee.min())&&(o=pn(s)),new Vx(o,i.transformResults||[])}(n,e))):[]}function tC(t,e){return{documents:[K0(t,e.path)]}}function nC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=K0(t,i);const s=function(h){if(h.length!==0)return Y0(gn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:Ti(v.field),direction:sC(v.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Gh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function rC(t){let e=Xx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){fe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(y){const v=Q0(y);return v instanceof gn&&A0(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(v=>function(P){return new Xl(Ii(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(y){let v;return v=typeof y=="object"?y.value:y,Su(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(y){const v=!!y.before,A=y.values||[];return new Yl(A,v)}(n.startAt));let h=null;return n.endAt&&(h=function(y){const v=!y.before,A=y.values||[];return new Yl(A,v)}(n.endAt)),Ex(e,i,o,s,l,"F",u,h)}function iC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Q0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ii(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ii(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ii(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ii(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Ii(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gn.create(n.compositeFilter.filters.map(r=>Q0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function sC(t){return qx[t]}function oC(t){return Kx[t]}function aC(t){return Gx[t]}function Ti(t){return{fieldPath:t.canonicalString()}}function Ii(t){return Ye.fromServerFormat(t.fieldPath)}function Y0(t){return t instanceof Me?function(n){if(n.op==="=="){if(xg(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NAN"}};if(Ag(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xg(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NAN"}};if(Ag(n.value))return{unaryFilter:{field:Ti(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ti(n.field),op:oC(n.op),value:n.value}}}(t):t instanceof gn?function(n){const r=n.getFilters().map(i=>Y0(i));return r.length===1?r[0]:{compositeFilter:{op:aC(n.op),filters:r}}}(t):J()}function lC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function X0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,i,s=ee.min(),o=ee.min(),l=et.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.ct=e}}function cC(t){const e=rC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.un=new dC}addToCollectionParentIndex(e,n){return this.un.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Sr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class dC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(Se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ss(0)}static kn(){return new ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(){this.changes=new ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&fo(r.mutation,i,Pt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=Gr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ys();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=zn();const o=ho(),l=function(){return ho()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof br)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),fo(f.mutation,h,f.mutation.getFieldMask(),Fe.now())):o.set(h.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var y;return l.set(h,new pC(f,(y=o.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ho();let i=new Ce((o,l)=>o-l),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Pt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const y=(i.get(l.batchId)||ie()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,y=L0();f.forEach(v=>{if(!s.has(v)){const A=U0(n.get(v),r.get(v));A!==null&&y.set(v,A),s=s.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Tx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Gr());let l=-1,u=s;return o.next(h=>O.forEach(h,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{u=u.insert(f,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:l,changes:D0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Ys();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ys();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(y,v){return new ku(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((y,v)=>{o=o.insert(y,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ut.newInvalidDocument(f)))});let l=Ys();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&fo(f.mutation,h,Pt.empty(),Fe.now()),xu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return O.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:cC(i.bundledQuery),readTime:pn(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.overlays=new Ce(Q.comparator),this.Ir=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Gr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Gr(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Gr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Gr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ux(n,r));let s=this.Ir.get(n);s===void 0&&(s=ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.Tr=new Je(ze.Er),this.dr=new Je(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new Se([])),r=new ze(n,e),i=new ze(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new Se([])),r=new ze(n,e),i=new ze(n,e+1);let s=ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||ce(e.wr,n.wr)}static Ar(e,n){return ce(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Je(ze.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Fx(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new ze(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),i=new ze(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ce);return n.forEach(i=>{const s=new ze(i,0),o=new ze(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new ze(new Q(s),0);let l=new Je(ce);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),O.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){fe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(n.mutations,i=>{const s=new ze(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),i=this.br.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.Mr=e,this.docs=function(){return new Ce(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=zn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ut.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=zn();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||nx(tx(f),r)<=0||(i.has(f.key)||xu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EC(this)}getSize(e){return O.resolve(this.size)}}class EC extends fC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.persistence=e,this.Nr=new ms(n=>mf(n),gf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new If,this.targetCount=0,this.kr=ss.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),O.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ss(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Kn(n),O.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new hf(0),this.Kr=!1,this.Kr=!0,this.$r=new vC,this.referenceDelegate=e(this),this.Ur=new TC(this),this.indexManager=new hC,this.remoteDocumentCache=function(i){return new wC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new uC(n),this.Gr=new gC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new _C(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){q("MemoryPersistence","Starting transaction:",e);const i=new SC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class SC extends ix{constructor(e){super(),this.currentSequenceNumber=e}}class Sf{constructor(e){this.persistence=e,this.Jr=new If,this.Yr=null}static Zr(e){return new Sf(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return O.or([()=>O.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new kf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return fI()?8:sx(ht())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new kC;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Bs()<=se.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Ei(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(Bs()<=se.DEBUG&&q("QueryEngine","Query:",Ei(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Bs()<=se.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Ei(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):O.resolve())}Yi(e,n){if(Ng(n))return O.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Kh(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Kh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Ng(n)||i.isEqual(ee.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?O.resolve(null):(Bs()<=se.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ei(n)),this.rs(e,o,n,ex(i,-1)).next(l=>l))})}ts(e,n){let r=new Je(N0(e));return n.forEach((i,s)=>{xu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Bs()<=se.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Ei(n)),this.Ji.getDocumentsMatchingQuery(e,n,Sr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ce(ce),this._s=new ms(s=>mf(s),gf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function CC(t,e,n,r){return new xC(t,e,n,r)}async function J0(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ie();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function RC(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const y=h.batch,v=y.keys();let A=O.resolve();return v.forEach(P=>{A=A.next(()=>f.getEntry(u,P)).next(N=>{const L=h.docVersions.get(P);fe(L!==null),N.version.compareTo(L)<0&&(y.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Z0(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function PC(t,e){const n=te(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,y)=>{const v=i.get(y);if(!v)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,y)));let A=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?A=A.withResumeToken(et.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(y,A),function(N,L,S){return N.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(v,A,f)&&l.push(n.Ur.updateTargetData(s,A))});let u=zn(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(NC(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(ee.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(y=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function NC(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=zn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):q("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function bC(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DC(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Jh(t,e,n){const r=te(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zo(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Bg(t,e,n){const r=te(t);let i=ee.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const y=te(u),v=y._s.get(f);return v!==void 0?O.resolve(y.os.get(v)):y.Ur.getTargetData(h,f)}(r,o,fn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?s:ie())).next(l=>(LC(r,Sx(e),l),{documents:l,Ts:s})))}function LC(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class $g{constructor(){this.activeTargetIds=Px()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VC{constructor(){this.so=new $g,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new $g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka=null;function Oc(){return Ka===null?Ka=function(){return 268435456+Math.round(2147483648*Math.random())}():Ka++,"0x"+Ka.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class FC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Oc(),u=this.xo(n,r.toUriEncodedString());q("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(q("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw ts("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ps}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=MC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Oc();return new Promise((o,l)=>{const u=new p0;u.setWithCredentials(!0),u.listenOnce(m0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case dl.NO_ERROR:const f=u.getResponseJson();q(ot,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case dl.TIMEOUT:q(ot,`RPC '${e}' ${s} timed out`),l(new G(M.DEADLINE_EXCEEDED,"Request time out"));break;case dl.HTTP_ERROR:const y=u.getStatus();if(q(ot,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const A=v==null?void 0:v.error;if(A&&A.status&&A.message){const P=function(L){const S=L.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(S)>=0?S:M.UNKNOWN}(A.status);l(new G(P,A.message))}else l(new G(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new G(M.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{q(ot,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);q(ot,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Oc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=v0(),l=y0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");q(ot,`Creating RPC '${e}' stream ${i}: ${f}`,u);const y=o.createWebChannel(f,u);let v=!1,A=!1;const P=new jC({Io:L=>{A?q(ot,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(v||(q(ot,`Opening RPC '${e}' stream ${i} transport.`),y.open(),v=!0),q(ot,`RPC '${e}' stream ${i} sending:`,L),y.send(L))},To:()=>y.close()}),N=(L,S,E)=>{L.listen(S,k=>{try{E(k)}catch(D){setTimeout(()=>{throw D},0)}})};return N(y,Qs.EventType.OPEN,()=>{A||(q(ot,`RPC '${e}' stream ${i} transport opened.`),P.yo())}),N(y,Qs.EventType.CLOSE,()=>{A||(A=!0,q(ot,`RPC '${e}' stream ${i} transport closed`),P.So())}),N(y,Qs.EventType.ERROR,L=>{A||(A=!0,ts(ot,`RPC '${e}' stream ${i} transport errored:`,L),P.So(new G(M.UNAVAILABLE,"The operation could not be completed")))}),N(y,Qs.EventType.MESSAGE,L=>{var S;if(!A){const E=L.data[0];fe(!!E);const k=E,D=k.error||((S=k[0])===null||S===void 0?void 0:S.error);if(D){q(ot,`RPC '${e}' stream ${i} received error:`,D);const U=D.status;let z=function(w){const T=Le[w];if(T!==void 0)return B0(T)}(U),_=D.message;z===void 0&&(z=M.INTERNAL,_="Unknown error status: "+U+" with message "+D.message),A=!0,P.So(new G(z,_)),y.close()}else q(ot,`RPC '${e}' stream ${i} received:`,E),P.bo(E)}}),N(l,g0.STAT_EVENT,L=>{L.stat===Bh.PROXY?q(ot,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===Bh.NOPROXY&&q(ot,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function Mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new Qx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new ew(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new G(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UC extends tw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Jx(this.serializer,e),r=function(s){if(!("targetChange"in s))return ee.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?pn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Xh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=qh(u)?{documents:tC(s,u)}:{query:nC(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=W0(s,o.resumeToken);const h=Gh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(ee.min())>0){l.readTime=eu(s,o.snapshotVersion.toTimestamp());const h=Gh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=iC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Xh(this.serializer),n.removeTarget=e,this.a_(n)}}class zC extends tw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return fe(!!e.streamToken),this.lastStreamToken=e.streamToken,fe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=eC(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Xh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Zx(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(M.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new G(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class $C{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Un(n),this.D_=!1):q("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{pi(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=te(u);h.L_.add(4),await na(h),h.q_.set("Unknown"),h.L_.delete(4),await bu(h)}(this))})}),this.q_=new $C(r,i)}}async function bu(t){if(pi(t))for(const e of t.B_)await e(!0)}async function na(t){for(const e of t.B_)await e(!1)}function nw(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Rf(n)?Cf(n):gs(n).r_()&&xf(n,e))}function Af(t,e){const n=te(t),r=gs(n);n.N_.delete(e),r.r_()&&rw(n,e),n.N_.size===0&&(r.r_()?r.o_():pi(n)&&n.q_.set("Unknown"))}function xf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gs(t).A_(e)}function rw(t,e){t.Q_.xe(e),gs(t).R_(e)}function Cf(t){t.Q_=new Wx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),gs(t).start(),t.q_.v_()}function Rf(t){return pi(t)&&!gs(t).n_()&&t.N_.size>0}function pi(t){return te(t).L_.size===0}function iw(t){t.Q_=void 0}async function WC(t){t.q_.set("Online")}async function qC(t){t.N_.forEach((e,n)=>{xf(t,e)})}async function KC(t,e){iw(t),Rf(t)?(t.q_.M_(e),Cf(t)):t.q_.set("Unknown")}async function GC(t,e,n){if(t.q_.set("Online"),e instanceof H0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await tu(t,r)}else if(e instanceof ml?t.Q_.Ke(e):e instanceof $0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await Z0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(et.EMPTY_BYTE_STRING,f.snapshotVersion)),rw(s,u);const y=new lr(f.target,u,h,f.sequenceNumber);xf(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){q("RemoteStore","Failed to raise snapshot:",r),await tu(t,r)}}async function tu(t,e,n){if(!Zo(e))throw e;t.L_.add(1),await na(t),t.q_.set("Offline"),n||(n=()=>Z0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await bu(t)})}function sw(t,e){return e().catch(n=>tu(t,n,e))}async function Du(t){const e=te(t),n=Ar(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;QC(e);)try{const i=await bC(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,YC(e,i)}catch(i){await tu(e,i)}ow(e)&&aw(e)}function QC(t){return pi(t)&&t.O_.length<10}function YC(t,e){t.O_.push(e);const n=Ar(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ow(t){return pi(t)&&!Ar(t).n_()&&t.O_.length>0}function aw(t){Ar(t).start()}async function XC(t){Ar(t).p_()}async function JC(t){const e=Ar(t);for(const n of t.O_)e.m_(n.mutations)}async function ZC(t,e,n){const r=t.O_.shift(),i=wf.from(r,e,n);await sw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Du(t)}async function eR(t,e){e&&Ar(t).V_&&await async function(r,i){if(function(o){return Bx(o)&&o!==M.ABORTED}(i.code)){const s=r.O_.shift();Ar(r).s_(),await sw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Du(r)}}(t,e),ow(t)&&aw(t)}async function Wg(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const r=pi(n);n.L_.add(3),await na(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await bu(n)}async function tR(t,e){const n=te(t);e?(n.L_.delete(2),await bu(n)):e||(n.L_.add(2),await na(n),n.q_.set("Unknown"))}function gs(t){return t.K_||(t.K_=function(n,r,i){const s=te(n);return s.w_(),new UC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:WC.bind(null,t),Ro:qC.bind(null,t),mo:KC.bind(null,t),d_:GC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Rf(t)?Cf(t):t.q_.set("Unknown")):(await t.K_.stop(),iw(t))})),t.K_}function Ar(t){return t.U_||(t.U_=function(n,r,i){const s=te(n);return s.w_(),new zC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:XC.bind(null,t),mo:eR.bind(null,t),f_:JC.bind(null,t),g_:ZC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Du(t)):(await t.U_.stop(),t.O_.length>0&&(q("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Pf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nf(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Zo(t))return new G(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Ys(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new qi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.W_=new Ce(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class os{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new os(e,n,qi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class rR{constructor(){this.queries=Kg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=te(n),s=i.queries;i.queries=Kg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new G(M.ABORTED,"Firestore shutting down"))}}function Kg(){return new ms(t=>P0(t),Au)}async function iR(t,e){const n=te(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new nR,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Nf(o,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&bf(n)}async function sR(t,e){const n=te(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oR(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&bf(n)}function aR(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function bf(t){t.Y_.forEach(e=>{e.next()})}var Zh,Gg;(Gg=Zh||(Zh={})).ea="default",Gg.Cache="cache";class lR{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Zh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.key=e}}class uw{constructor(e){this.key=e}}class uR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=N0(e),this.Ra=new qi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new qg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const v=i.get(f),A=xu(this.query,y)?y:null,P=!!v&&this.mutatedKeys.has(v.key),N=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let L=!1;v&&A?v.data.isEqual(A.data)?P!==N&&(r.track({type:3,doc:A}),L=!0):this.ga(v,A)||(r.track({type:2,doc:A}),L=!0,(u&&this.Aa(A,u)>0||h&&this.Aa(A,h)<0)&&(l=!0)):!v&&A?(r.track({type:0,doc:A}),L=!0):v&&!A&&(r.track({type:1,doc:v}),L=!0,(u||h)&&(l=!0)),L&&(A?(o=o.add(A),s=N?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,y)=>function(A,P){const N=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return N(A)-N(P)}(f.type,y.type)||this.Aa(f.doc,y.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new os(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new uw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new lw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return os.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class cR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hR{constructor(e){this.key=e,this.va=!1}}class dR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ms(l=>P0(l),Au),this.Ma=new Map,this.xa=new Set,this.Oa=new Ce(Q.comparator),this.Na=new Map,this.La=new If,this.Ba={},this.ka=new Map,this.qa=ss.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function fR(t,e,n=!0){const r=mw(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await cw(r,e,n,!0),i}async function pR(t,e){const n=mw(t);await cw(n,e,!0,!1)}async function cw(t,e,n,r){const i=await DC(t.localStore,fn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await mR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&nw(t.remoteStore,i),l}async function mR(t,e,n,r,i){t.Ka=(y,v,A)=>async function(N,L,S,E){let k=L.view.ma(S);k.ns&&(k=await Bg(N.localStore,L.query,!1).then(({documents:_})=>L.view.ma(_,k)));const D=E&&E.targetChanges.get(L.targetId),U=E&&E.targetMismatches.get(L.targetId)!=null,z=L.view.applyChanges(k,N.isPrimaryClient,D,U);return Yg(N,L.targetId,z.wa),z.snapshot}(t,y,v,A);const s=await Bg(t.localStore,e,!0),o=new uR(e,s.Ts),l=o.ma(s.documents),u=ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);Yg(t,n,h.wa);const f=new cR(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function gR(t,e,n){const r=te(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Au(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Jh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Af(r.remoteStore,i.targetId),ed(r,i.targetId)}).catch(Jo)):(ed(r,i.targetId),await Jh(r.localStore,i.targetId,!0))}async function yR(t,e){const n=te(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Af(n.remoteStore,r.targetId))}async function vR(t,e,n){const r=kR(t);try{const i=await function(o,l){const u=te(o),h=Fe.now(),f=l.reduce((A,P)=>A.add(P.key),ie());let y,v;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let P=zn(),N=ie();return u.cs.getEntries(A,f).next(L=>{P=L,P.forEach((S,E)=>{E.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,P)).next(L=>{y=L;const S=[];for(const E of l){const k=Mx(E,y.get(E.key).overlayedDocument);k!=null&&S.push(new br(E.key,k,I0(k.value.mapValue),tn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,S,l)}).next(L=>{v=L;const S=L.applyToLocalDocumentSet(y,N);return u.documentOverlayCache.saveOverlays(A,L.batchId,S)})}).then(()=>({batchId:v.batchId,changes:D0(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new Ce(ce)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await ra(r,i.changes),await Du(r.remoteStore)}catch(i){const s=Nf(i,"Failed to persist write");n.reject(s)}}async function hw(t,e){const n=te(t);try{const r=await PC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?fe(o.va):i.removedDocuments.size>0&&(fe(o.va),o.va=!1))}),await ra(n,r,e)}catch(r){await Jo(r)}}function Qg(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=te(o);u.onlineState=l;let h=!1;u.queries.forEach((f,y)=>{for(const v of y.j_)v.Z_(l)&&(h=!0)}),h&&bf(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _R(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ce(Q.comparator);o=o.insert(s,ut.newNoDocument(s,ee.min()));const l=ie().add(s),u=new Pu(ee.min(),new Map,new Ce(ce),o,l);await hw(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Df(r)}else await Jh(r.localStore,e,!1).then(()=>ed(r,e,n)).catch(Jo)}async function wR(t,e){const n=te(t),r=e.batch.batchId;try{const i=await RC(n.localStore,e);fw(n,r,null),dw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ra(n,i)}catch(i){await Jo(i)}}async function ER(t,e,n){const r=te(t);try{const i=await function(o,l){const u=te(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(fe(y!==null),f=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);fw(r,e,n),dw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ra(r,i)}catch(i){await Jo(i)}}function dw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function fw(t,e,n){const r=te(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ed(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||pw(t,r)})}function pw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Af(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Df(t))}function Yg(t,e,n){for(const r of n)r instanceof lw?(t.La.addReference(r.key,e),TR(t,r)):r instanceof uw?(q("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||pw(t,r.key)):J()}function TR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(q("SyncEngine","New document in limbo: "+n),t.xa.add(r),Df(t))}function Df(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(Se.fromString(e)),r=t.qa.next();t.Na.set(r,new hR(n)),t.Oa=t.Oa.insert(n,r),nw(t.remoteStore,new lr(fn(yf(n.path)),r,"TargetPurposeLimboResolution",hf.oe))}}async function ra(t,e,n){const r=te(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const y=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){i.push(h);const y=kf.Wi(u.targetId,h);s.push(y)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=te(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>O.forEach(h,v=>O.forEach(v.$i,A=>f.persistence.referenceDelegate.addReference(y,v.targetId,A)).next(()=>O.forEach(v.Ui,A=>f.persistence.referenceDelegate.removeReference(y,v.targetId,A)))))}catch(y){if(!Zo(y))throw y;q("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const v=y.targetId;if(!y.fromCache){const A=f.os.get(v),P=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(P);f.os=f.os.insert(v,N)}}}(r.localStore,s))}async function IR(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const r=await J0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new G(M.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ra(n,r.hs)}}function SR(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let i=ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function mw(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_R.bind(null,e),e.Ca.d_=oR.bind(null,e.eventManager),e.Ca.$a=aR.bind(null,e.eventManager),e}function kR(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ER.bind(null,e),e}class nu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return CC(this.persistence,new AC,e.initialUser,this.serializer)}Ga(e){return new IC(Sf.Zr,this.serializer)}Wa(e){return new VC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nu.provider={build:()=>new nu};class td{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IR.bind(null,this.syncEngine),await tR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rR}()}createDatastore(e){const n=Nu(e.databaseInfo.databaseId),r=function(s){return new FC(s)}(e.databaseInfo);return function(s,o,l,u){return new BC(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new HC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Qg(this.syncEngine,n,0),function(){return Hg.D()?new Hg:new OC}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const y=new dR(i,s,o,l,u,h);return f&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=te(i);q("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await na(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}td.provider={build:()=>new td};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=w0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{q("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Nf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await J0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Xg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CR(t);q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Wg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Wg(e.remoteStore,i)),t._onlineComponents=e}async function CR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ts("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new nu)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await jc(t,new nu);return t._offlineComponents}async function gw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await Xg(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await Xg(t,new td))),t._onlineComponents}function RR(t){return gw(t).then(e=>e.syncEngine)}async function Jg(t){const e=await gw(t),n=e.eventManager;return n.onListen=fR.bind(null,e.syncEngine),n.onUnlisten=gR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=yR.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(t,e,n){if(!n)throw new G(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function PR(t,e,n,r){if(e===!0&&r===!0)throw new G(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ey(t){if(!Q.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ty(t){if(Q.isDocumentKey(t))throw new G(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Lf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function wr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Lf(t);throw new G(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new G(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}PR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new G(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ny({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new G(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new G(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ny(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WA;switch(r.type){case"firstParty":return new QA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new G(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zg.get(n);r&&(q("ComponentProvider","Removing Datastore"),Zg.delete(n),r.terminate())}(this),Promise.resolve()}}function NR(t,e,n,r={}){var i;const s=(t=wr(t,Lu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=at.MOCK_USER;else{l=oI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new G(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new at(h)}t._authCredentials=new qA(new _0(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vu(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class Er extends Vu{constructor(e,n,r){super(e,n,yf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new Q(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function Ga(t,e,...n){if(t=He(t),vw("collection","path",e),t instanceof Lu){const r=Se.fromString(e,...n);return ty(r),new Er(t,null,r)}{if(!(t instanceof bt||t instanceof Er))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return ty(r),new Er(t.firestore,null,r)}}function gl(t,e,...n){if(t=He(t),arguments.length===1&&(e=w0.newId()),vw("doc","path",e),t instanceof Lu){const r=Se.fromString(e,...n);return ey(r),new bt(t,null,new Q(r))}{if(!(t instanceof bt||t instanceof Er))throw new G(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return ey(r),new bt(t.firestore,t instanceof Er?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new ew(this,"async_queue_retry"),this.Vu=()=>{const r=Mc();r&&q("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Jr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Zo(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Un("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Pf.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function iy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class as extends Lu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ry,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ry(e),this._firestoreClient=void 0,await e}}}function bR(t,e){const n=typeof t=="object"?t:P_(),r=typeof t=="string"?t:"(default)",i=Zd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=iI("firestore");s&&NR(i,...s)}return i}function _w(t){if(t._terminated)throw new G(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||DR(t),t._firestoreClient}function DR(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new lx(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,yw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new xR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ls(et.fromBase64String(e))}catch(n){throw new G(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ls(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=/^__.*__$/;class VR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,n,this.fieldTransforms):new ea(e,this.data,n,this.fieldTransforms)}}class ww{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ew(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class jf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new jf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ru(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Ew(this.Cu)&&LR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class OR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nu(e)}Qu(e,n,r,i=!1){return new jf({Cu:e,methodName:n,qu:r,path:Ye.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tw(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new OR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MR(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Ff("Data must be an object, but it was:",o,r);const l=Iw(r,o);let u,h;if(s.merge)u=new Pt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const y of s.mergeFields){const v=nd(e,y,n);if(!o.contains(v))throw new G(M.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);kw(f,v)||f.push(v)}u=new Pt(f),h=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=o.fieldTransforms;return new VR(new Et(l),u,h)}class Mu extends Vf{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mu}}function jR(t,e,n,r){const i=t.Qu(1,e,n);Ff("Data must be an object, but it was:",i,r);const s=[],o=Et.empty();fi(r,(u,h)=>{const f=Uf(e,u,n);h=He(h);const y=i.Nu(f);if(h instanceof Mu)s.push(f);else{const v=ju(h,y);v!=null&&(s.push(f),o.set(f,v))}});const l=new Pt(s);return new ww(o,l,i.fieldTransforms)}function FR(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[nd(e,r,n)],u=[i];if(s.length%2!=0)throw new G(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<s.length;v+=2)l.push(nd(e,s[v])),u.push(s[v+1]);const h=[],f=Et.empty();for(let v=l.length-1;v>=0;--v)if(!kw(h,l[v])){const A=l[v];let P=u[v];P=He(P);const N=o.Nu(A);if(P instanceof Mu)h.push(A);else{const L=ju(P,N);L!=null&&(h.push(A),f.set(A,L))}}const y=new Pt(h);return new ww(f,y,o.fieldTransforms)}function ju(t,e){if(Sw(t=He(t)))return Ff("Unsupported field value:",e,t),Iw(t,e);if(t instanceof Vf)return function(r,i){if(!Ew(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ju(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:eu(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:eu(i.serializer,s)}}if(r instanceof Of)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ls)return{bytesValue:W0(i.serializer,r._byteString)};if(r instanceof bt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Tf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Mf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return vf(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Lf(r)}`)}(t,e)}function Iw(t,e){const n={};return E0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fi(t,(r,i)=>{const s=ju(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Sw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Of||t instanceof ls||t instanceof bt||t instanceof Vf||t instanceof Mf)}function Ff(t,e,n){if(!Sw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Lf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function nd(t,e,n){if((e=He(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return Uf(t,e);throw ru("Field path arguments must be of type string or ",t,!1,void 0,n)}const UR=new RegExp("[~\\*/\\[\\]]");function Uf(t,e,n){if(e.search(UR)>=0)throw ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ou(...e.split("."))._internalPath}catch{throw ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ru(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new G(M.INVALID_ARGUMENT,l+t+u)}function kw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(xw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zR extends Aw{data(){return super.data()}}function xw(t,e){return typeof e=="string"?Uf(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new G(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $R{convertValue(e,n="none"){switch(ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(li(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ne(o.doubleValue));return new Mf(s)}convertGeoPoint(e){return new Of(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ff(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);fe(X0(r));const i=new Mo(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||Un(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Cw extends Aw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yl extends Cw{data(e={}){return super.data(e)}}class WR{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yl(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new G(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new yl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:qR(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class Rw extends $R{constructor(e){super(),this.firestore=e}convertBytes(e){return new ls(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function sy(t,e,n,...r){t=wr(t,bt);const i=wr(t.firestore,as),s=Tw(i);let o;return o=typeof(e=He(e))=="string"||e instanceof Ou?FR(s,"updateDoc",t._key,e,n,r):jR(s,"updateDoc",t._key,e),zf(i,[o.toMutation(t._key,tn.exists(!0))])}function KR(t){return zf(wr(t.firestore,as),[new _f(t._key,tn.none())])}function Fc(t,e){const n=wr(t.firestore,as),r=gl(t),i=HR(t.converter,e);return zf(n,[MR(Tw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function GR(t,...e){var n,r,i;t=He(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||iy(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(iy(e[o])){const y=e[o];e[o]=(n=y.next)===null||n===void 0?void 0:n.bind(y),e[o+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[o+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let u,h,f;if(t instanceof bt)h=wr(t.firestore,as),f=yf(t._key.path),u={next:y=>{e[o]&&e[o](QR(h,t,y))},error:e[o+1],complete:e[o+2]};else{const y=wr(t,Vu);h=wr(y.firestore,as),f=y._query;const v=new Rw(h);u={next:A=>{e[o]&&e[o](new WR(h,v,y,A))},error:e[o+1],complete:e[o+2]},BR(t._query)}return function(v,A,P,N){const L=new AR(N),S=new lR(A,L,P);return v.asyncQueue.enqueueAndForget(async()=>iR(await Jg(v),S)),()=>{L.Za(),v.asyncQueue.enqueueAndForget(async()=>sR(await Jg(v),S))}}(_w(h),f,l,u)}function zf(t,e){return function(r,i){const s=new Jr;return r.asyncQueue.enqueueAndForget(async()=>vR(await RR(r),i,s)),s.promise}(_w(t),e)}function QR(t,e,n){const r=n.docs.get(e._key),i=new Rw(t);return new Cw(t,i,e._key,r,new Js(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ps=i})(ds),es(new ii("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new as(new KA(r.getProvider("auth-internal")),new XA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new G(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),_r(Eg,"4.7.3",e),_r(Eg,"4.7.3","esm2017")})();const YR={apiKey:"AIzaSy...",authDomain:"the-industry-connect.firebaseapp.com",projectId:"the-industry-connect",storageBucket:"the-industry-connect.appspot.com",messagingSenderId:"123456789",appId:"1:123456789:web:abcd1234"};let Qa,Sn,_t;const zr="the-industry-connect-prod";try{const t=typeof __firebase_config<"u"?typeof __firebase_config=="string"?JSON.parse(__firebase_config):__firebase_config:YR;Xm().length===0?Qa=R_(t):Qa=Xm()[0],Sn=$A(Qa),_t=bR(Qa)}catch(t){console.warn("Firebase initialization skipped or failed. Using offline local fallback modes.",t)}const Pw={"Labels & A&R":[{title:"Top Dawg Ent. (TDE)",name:'Anthony "Moosa" Tiffith Jr.',role:"President",email:"info@tde.com",phone:"(310) 955-1445",location:"Los Angeles, CA",tags:"Record Label",notes:""},{title:"Empire Distribution",name:"Tina Davis",role:"President",email:"deals@empiredistribution.com",phone:"(747) 500-1766",location:"Los Angeles, CA",tags:"Distribution",notes:""},{title:"Aftermath Ent.",name:"Bruce Iglauer",role:"A&R / Executive",email:"info@aftermath-ent.com",phone:"(310) 865-7642",location:"Los Angeles, CA",tags:"Record Label",notes:""},{title:"Death Row Records",name:"Snoop Dogg",role:"Owner / CEO",email:"licensing@deathrowrecords.com",phone:"(310) 550-1000",location:"Los Angeles, CA",tags:"Classic Hip Hop",notes:""},{title:"Stones Throw Records",name:"Oscar P.",role:"A&R (Demos)",email:"demos@stonesthrow.com",phone:"(323) 539-2520",location:"Los Angeles, CA",tags:"Independent",notes:""},{title:"Interscope Records",name:"Nicole Wyskoarko",role:"EVP / Urban A&R",email:"info@interscope.com",phone:"(310) 865-1000",location:"Los Angeles, CA",tags:"Major Label",notes:""},{title:"Sick Wid It Records",name:"E-40",role:"CEO / Founder",email:"contact@sickwiditrecords.com",phone:"N/A",location:"Vallejo, CA",tags:"Bay Area",notes:""},{title:"Slovenly Recordings",name:"Pete Menchetti",role:"Founder / Owner",email:"info@slovenly.com",phone:"(775) 358-7865",location:"Las Vegas, NV",tags:"Independent",notes:""},{title:"Imirage Sound Lab",name:"Tom Gordon",role:"Chief Engineer & Manager",email:"tom@inspired-amateur.com",phone:"(775) 358-7484",location:"Reno, NV",tags:"Studio",notes:""},{title:"Granny's Recording Studio",name:"Studio Operations",role:"Booking Coordinator",email:"General Form Contact Only",phone:"(775) 786-2622",location:"Reno, NV",tags:"Studio",notes:""}],Streaming:[{title:"Apple Music",name:"Apple Music for Artists Portal",role:"A&R / Editorial Submission",email:"press@apple.com",phone:"N/A",location:"SF / Cupertino, CA",tags:"DSP Portal",notes:""},{title:"Audiomack",name:"Audiomack Creators / Artist Pro",role:"A&R / Editorial Submission",email:"support@audiomack.com",phone:"N/A",location:"New York, NY",tags:"Discovery Engine",notes:""},{title:"SoundCloud",name:'SoundCloud for Artists / "First Fans"',role:"A&R / Editorial Submission",email:"press@soundcloud.com",phone:"N/A",location:"International",tags:"Discovery Engine",notes:""},{title:"Spotify",name:"Spotify for Artists Pitching Tool",role:"A&R / Editorial Submission",email:"press@spotify.com",phone:"N/A",location:"New York, NY",tags:"DSP Portal",notes:""},{title:"TIDAL",name:"TIDAL Artist Home",role:"A&R / Editorial Submission",email:"press@tidal.com",phone:"N/A",location:"New York, NY",tags:"DSP Portal",notes:""},{title:"YouTube Music",name:"YouTube for Artists / Studio",role:"A&R / Editorial Submission",email:"press@google.com",phone:"N/A",location:"SF / San Bruno, CA",tags:"Video & Streaming",notes:""}],"Radio Directors":[{title:"Power 106 (KPWR)",subtitle:"Los Angeles",name:"DJ E-Man (Emanuel Coquia)",role:"Program Director",email:"eman@power106.com",phone:"(818) 953-4200",location:"Los Angeles, CA",tags:"Urban Radio",notes:""},{title:"Real 92.3 (KRRL)",subtitle:"Los Angeles",name:"Doc Wynter",role:"iHeartMedia Urban Lead",email:"docwynter@iheartmedia.com",phone:"(818) 559-2252",location:"Los Angeles, CA",tags:"Urban Radio",notes:""},{title:"93.5 KDAY",subtitle:"Los Angeles",name:"E-Man",role:"Programming Lead",email:"programming@935kday.com",phone:"(818) 953-4200",location:"Los Angeles, CA",tags:"Classic Hip Hop",notes:""},{title:"106.1 KMEL",subtitle:"San Francisco",name:"Donashea Guy",role:"Program Director",email:"donasheaguy@iheartmedia.com",phone:"(415) 358-1061",location:"San Francisco, CA",tags:"Urban Radio",notes:""},{title:"KBLX 102.9",subtitle:"San Francisco",name:"Elroy Smith",role:"Program Director",email:"elroy.smith@urban1.com",phone:"(415) 765-8800",location:"San Francisco, CA",tags:"Urban Radio",notes:""},{title:"KUBE 93.3",subtitle:"Seattle",name:"Mark Adams",role:"VP of Programming",email:"markadams@iheartmedia.com",phone:"N/A",location:"Seattle, WA",tags:"Pacific NW",notes:""},{title:"KXJM (JAM'N 107.5)",subtitle:"Portland",name:"Tim Rainey",role:"Program Director",email:"timrainey@iheartmedia.com",phone:"(503) 225-1190",location:"Portland, OR",tags:"Pacific NW",notes:""},{title:"XHTZ (Z90.3)",subtitle:"San Diego",name:"R Dub! (Randy Williams)",role:"Program Director",email:"rdub@z90.com",phone:"(619) 426-9090",location:"Long Beach / SD",tags:"Urban Radio",notes:""},{title:"K-V101.1 (KHYL)",subtitle:"Sacramento",name:"Complex",role:"Program Director",email:"complex@v1011fm.com",phone:"(916) 334-7777",location:"Sacramento, CA",tags:"Urban Radio",notes:""}],"Retail & Brand":[{title:"Culture Kings",subtitle:"Clothing/Hats/Shoes",name:"Retail Director",role:"Lead Contact",email:"info@culturekings.com",phone:"(702) 473-5100",location:"Las Vegas, NV",tags:"Streetwear",notes:""},{title:"Diamond Supply Co.",subtitle:"Streetwear/Skate",name:"Nick Tershay",role:"Founder",email:"sales@diamondsupplyco.com",phone:"(213) 621-4200",location:"Los Angeles, CA",tags:"Streetwear",notes:""},{title:"The Hundreds",subtitle:"Apparel/Lifestyle",name:"Bobby Hundreds",role:"Co-Founder",email:"info@thehundreds.com",phone:"(323) 230-7780",location:"Los Angeles, CA",tags:"Streetwear",notes:""},{title:"Flight Club LA",subtitle:"Rare Sneakers",name:"Consignment Mgr",role:"Lead Contact",email:"la@flightclub.com",phone:"(323) 782-8616",location:"Los Angeles, CA",tags:"Sneakers",notes:""},{title:"Mr. Bling Grillz",subtitle:"Custom Grills",name:"Lead Jeweler",role:"Lead Contact",email:"mrblingm2h@gmail.com",phone:"(213) 265-7570",location:"Los Angeles, CA",tags:"Collectibles",notes:""},{title:"True",subtitle:"Streetwear",name:"Manager",role:"Lead Contact",email:"info@true-sf.com",phone:"(415) 626-2882",location:"San Francisco, CA",tags:"Streetwear",notes:""},{title:"Proper LBC",subtitle:"Sneakers",name:"Lead Buyer",role:"Lead Contact",email:"contact@properlbc.com",phone:"(562) 628-9100",location:"Long Beach, CA",tags:"Sneakers",notes:""},{title:"Bait Inc.",subtitle:"Collectibles",name:"Marketing Manager",role:"Lead Contact",email:"info@baitme.com",phone:"(909) 396-1800",location:"Los Angeles, CA",tags:"Collectibles",notes:""}],DJs:[{title:"DJ Mustard",subtitle:"YG / Chart-topping Producer",name:"Los Angeles",role:"Primary Market",email:"info@djmustard.com",phone:"(310) 275-6135",location:"Los Angeles, CA",tags:"Producer",notes:""},{title:"DJ E-Man",subtitle:"Power 106 PD / Club Resident",name:"Burbank / LA",role:"Primary Market",email:"eman@power106.com",phone:"(818) 953-4200",location:"Los Angeles, CA",tags:"Radio DJ",notes:""},{title:"DJ Quik",subtitle:"G-Funk Legend / Touring DJ",name:"Compton / LA",role:"Primary Market",email:"booking@djquik.com",phone:"(310) 865-1000",location:"Los Angeles, CA",tags:"Classic",notes:""},{title:"DJ Muggs",subtitle:"Cypress Hill / Soul Assassins",name:"Los Angeles",role:"Primary Market",email:"info@soulassassins.com",phone:"(323) 654-1234",location:"Los Angeles, CA",tags:"Classic",notes:""},{title:"DJ Amen",subtitle:"Young California / Real 92.3",name:"SF / Bay Area",role:"Primary Market",email:"djamen@real923la.com",phone:"(415) 358-1061",location:"San Francisco, CA",tags:"Open Format",notes:""},{title:"DJ Toure",subtitle:"Hieroglyphics / Souls of Mischief",name:"Oakland",role:"Primary Market",email:"info@hieroglyphics.com",phone:"(510) 465-4376",location:"San Francisco, CA",tags:"Hip Hop Heritage",notes:""},{title:"DJ Skee",subtitle:"DASH Radio / Event Host",name:"Los Angeles",role:"Primary Market",email:"booking@djskee.com",phone:"(323) 539-2520",location:"Los Angeles, CA",tags:"Radio DJ",notes:""},{title:"REMiXnet",subtitle:"Open Format / Luxury Events",name:"San Diego",role:"Primary Market",email:"info@remixnet.live",phone:"(619) 456-7890",location:"Long Beach / SD",tags:"Open Format",notes:""}]},Nw=[];Object.entries(Pw).forEach(([t,e])=>{e.forEach((n,r)=>{Nw.push({id:`fallback-${t}-${r}`,category:t,...n})})});const oy=["Labels & A&R","Streaming","Radio Directors","Retail & Brand","DJs"],XR={"Labels & A&R":g.jsx(x1,{size:18}),Streaming:g.jsx(O1,{size:18}),"Radio Directors":g.jsx(B1,{size:18}),"Retail & Brand":g.jsx(W1,{size:18}),DJs:g.jsx(U1,{size:18})},JR=({onComplete:t})=>{const[e,n]=K.useState(0),[r,i]=K.useState(!1);return K.useEffect(()=>{if(e>=100)return;const s=setTimeout(()=>{n(o=>Math.min(o+Math.floor(Math.random()*20)+10,100))},60);return()=>clearTimeout(s)},[e]),K.useEffect(()=>{if(e>=100){const s=setTimeout(()=>i(!0),300),o=setTimeout(()=>t(),800);return()=>{clearTimeout(s),clearTimeout(o)}}},[e,t]),g.jsx("div",{className:`fixed inset-0 bg-neutral-950 z-50 flex flex-col items-center justify-center p-6 transition-all duration-700 ${r?"opacity-0 scale-105 pointer-events-none":"opacity-100"}`,children:g.jsxs("div",{className:"relative flex flex-col items-center max-w-sm w-full",children:[g.jsxs("div",{className:"w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-500/20 animate-pulse relative mb-8",children:[g.jsx("div",{className:"absolute inset-0.5 bg-neutral-950 rounded-[14px] flex items-center justify-center",children:g.jsx("svg",{className:"w-12 h-12 text-amber-500",viewBox:"0 0 24 24",fill:"currentColor",children:g.jsx("path",{d:"M11 21c-.4 0-.8-.2-1-.6-.3-.5-.2-1.1.2-1.4l5.6-4H10c-.4 0-.8-.2-1-.6-.2-.4-.2-.9 0-1.3l4-7c.3-.5.9-.7 1.4-.4.5.3.7.9.4 1.4L10.2 11H15c.4 0 .8.2 1 .6.2.4.2.9 0 1.3l-4 7c-.2.3-.6.5-1 .5z"})})}),g.jsx("div",{className:"absolute -inset-1 bg-amber-500/30 blur-xl opacity-70 rounded-2xl animate-ping duration-1000"})]}),g.jsxs("h2",{className:"text-2xl font-extrabold text-white tracking-wider uppercase mb-1 flex items-center gap-2",children:["THE INDUSTRY ",g.jsx("span",{className:"text-amber-500",children:"CONNECT"})]}),g.jsx("p",{className:"text-neutral-500 text-xs font-mono tracking-widest uppercase mb-12 text-center",children:"Unified Hub & Outreach CRM"}),g.jsx("div",{className:"w-full bg-neutral-900 border border-neutral-800 rounded-full h-1.5 p-0.5 overflow-hidden",children:g.jsx("div",{className:"bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full transition-all duration-150",style:{width:`${Math.min(e,100)}%`}})}),g.jsxs("div",{className:"flex justify-between w-full mt-2 text-[10px] font-mono text-neutral-500 tracking-wider",children:[g.jsx("span",{children:"CONNECTING SECURE SHELL..."}),g.jsxs("span",{children:[Math.min(e,100),"%"]})]})]})})},ZR=({data:t,isAdmin:e,isBookmarked:n,onToggleBookmark:r,onEdit:i,onDelete:s,onUpdateNotes:o})=>{const[l,u]=K.useState(!1),[h,f]=K.useState(!1),[y,v]=K.useState(!1),[A,P]=K.useState(t.notes||""),[N,L]=K.useState(!1),[S,E]=K.useState(!1),k=U=>{navigator.clipboard.writeText(U),u(!0),setTimeout(()=>u(!1),2e3)},D=()=>{o(t.id,A),v(!1)};return g.jsxs("div",{className:"bg-neutral-800/40 border border-neutral-700/30 rounded-xl p-5 hover:bg-neutral-800 transition-all hover:border-neutral-600 shadow-lg flex flex-col h-full relative group",children:[g.jsx("button",{onClick:()=>r(t.id),className:"absolute top-4 right-4 z-10 p-1.5 rounded bg-neutral-900/60 border border-neutral-700/40 hover:bg-neutral-800 text-amber-500 transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100",title:"Toggle Favorite",children:g.jsx(w_,{size:14,fill:n?"currentColor":"none"})}),e&&g.jsxs("div",{className:"absolute top-4 right-12 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900/85 p-1 rounded-lg backdrop-blur-sm z-10 border border-neutral-700",children:[g.jsx("button",{onClick:()=>i(t),className:"p-1 text-blue-400 hover:bg-blue-400/20 rounded transition-colors",title:"Edit Contact",children:g.jsx(__,{size:13})}),g.jsx("button",{onClick:()=>f(!0),className:"p-1 text-red-400 hover:bg-red-400/20 rounded transition-colors",title:"Delete Contact",children:g.jsx(G1,{size:13})})]}),h&&g.jsxs("div",{className:"absolute inset-0 bg-neutral-900/95 rounded-xl z-20 flex flex-col items-center justify-center p-4 text-center",children:[g.jsx(C1,{size:28,className:"text-red-500 mb-1"}),g.jsx("h4",{className:"text-white text-sm font-bold mb-1",children:"Delete this record?"}),g.jsx("p",{className:"text-neutral-400 text-[10px] mb-3",children:"This change updates database for all clients."}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{onClick:()=>f(!1),className:"px-2.5 py-1 bg-neutral-700 hover:bg-neutral-600 text-white rounded text-xs transition-colors",children:"Cancel"}),g.jsx("button",{onClick:()=>{s(t.id),f(!1)},className:"px-2.5 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs transition-colors",children:"Delete"})]})]}),g.jsxs("div",{className:"mb-4 pr-16",children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 mb-1",children:[g.jsx("h3",{className:"text-lg font-extrabold text-white tracking-tight break-words max-w-full",children:t.title}),t.tags&&g.jsx("span",{className:"px-1.5 py-0.5 bg-neutral-700/60 rounded text-[9px] uppercase font-bold text-amber-400 tracking-wider border border-neutral-600/40",children:t.tags})]}),t.subtitle&&g.jsx("p",{className:"text-xs font-semibold text-neutral-400",children:t.subtitle})]}),g.jsxs("div",{className:"flex-grow space-y-2.5 text-xs",children:[g.jsxs("div",{className:"flex items-start gap-2.5",children:[g.jsx(Y1,{className:"text-neutral-500 mt-0.5 shrink-0",size:15}),g.jsxs("div",{children:[g.jsx("p",{className:"text-neutral-200 font-bold",children:t.name||"N/A"}),g.jsx("p",{className:"text-neutral-400 text-[10px]",children:t.role})]})]}),t.email&&t.email!=="N/A"&&g.jsxs("div",{className:"flex items-start gap-2.5",children:[g.jsx(j1,{className:"text-neutral-500 mt-0.5 shrink-0",size:15}),g.jsx("div",{className:"flex items-center gap-1.5 flex-wrap",children:N?g.jsxs(g.Fragment,{children:[g.jsx("a",{href:`mailto:${t.email}`,className:"text-amber-400 hover:text-amber-300 hover:underline break-all font-medium",children:t.email}),g.jsx("button",{onClick:()=>k(t.email),className:"text-neutral-500 hover:text-white transition-colors p-0.5 rounded hover:bg-neutral-700",title:"Copy Email",children:l?g.jsx(R1,{size:12,className:"text-green-400"}):g.jsx(N1,{size:12})})]}):g.jsxs("button",{onClick:()=>L(!0),className:"px-2 py-0.5 rounded bg-neutral-750 hover:bg-neutral-700 text-amber-500/80 text-[10px] font-bold border border-neutral-700 transition-all flex items-center gap-1",children:[g.jsx(Um,{size:10})," Show Email"]})})]}),t.phone&&t.phone!=="N/A"&&g.jsxs("div",{className:"flex items-start gap-2.5",children:[g.jsx(z1,{className:"text-neutral-500 mt-0.5 shrink-0",size:15}),S?g.jsx("a",{href:`tel:${t.phone.replace(/[^0-9]/g,"")}`,className:"text-neutral-300 hover:text-white font-medium",children:t.phone}):g.jsxs("button",{onClick:()=>E(!0),className:"px-2 py-0.5 rounded bg-neutral-750 hover:bg-neutral-700 text-amber-500/80 text-[10px] font-bold border border-neutral-700 transition-all flex items-center gap-1",children:[g.jsx(Um,{size:10})," Show Phone"]})]}),t.location&&t.location!=="N/A"&&g.jsxs("div",{className:"flex items-start gap-2.5",children:[g.jsx(F1,{className:"text-neutral-500 mt-0.5 shrink-0",size:15}),g.jsx("p",{className:"text-neutral-300",children:t.location})]})]}),g.jsxs("div",{className:"mt-4 pt-3 border-t border-neutral-700/40",children:[g.jsxs("div",{className:"flex justify-between items-center mb-1 text-[10px] font-mono uppercase tracking-wider text-neutral-500",children:[g.jsxs("span",{className:"flex items-center gap-1",children:[g.jsx(P1,{size:11})," Interaction Notes:"]}),g.jsx("button",{onClick:()=>{v(!y),P(t.notes||"")},className:"text-amber-500 hover:text-amber-400 transition-colors",children:y?"Cancel":"Edit Log"})]}),y?g.jsxs("div",{className:"space-y-2 mt-1.5",children:[g.jsx("textarea",{value:A,onChange:U=>P(U.target.value),placeholder:"e.g. Sent promo pack on 5/15.",rows:2,className:"w-full text-xs p-2 bg-neutral-900 border border-neutral-700 rounded text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-500"}),g.jsx("button",{onClick:D,className:"w-full py-1 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded text-[10px] uppercase tracking-wider",children:"Save Log"})]}):g.jsx("p",{className:"text-[11px] text-neutral-400 italic bg-neutral-900/40 p-2 rounded border border-neutral-800/40 min-h-[32px] break-words",children:t.notes?t.notes:"No outreach recorded yet."})]})]})};function e2(){const[t,e]=K.useState(!0),[n,r]=K.useState("Labels & A&R"),[i,s]=K.useState(""),[o,l]=K.useState("All"),[u,h]=K.useState("All"),[f,y]=K.useState(!1),[v,A]=K.useState([]),[P,N]=K.useState(!0),[L,S]=K.useState(null),[E,k]=K.useState(""),[D,U]=K.useState(!1),[z,_]=K.useState(!0),[m,w]=K.useState(""),[T,x]=K.useState(""),[C,I]=K.useState("LOGIN"),[We,tt]=K.useState(""),[Hn,Ht]=K.useState(""),[H,X]=K.useState(""),[Z,ve]=K.useState(""),[he,me]=K.useState(!1),[dt,Wt]=K.useState(()=>{try{const V=localStorage.getItem("industry_connect_bookmarks");return V?JSON.parse(V):[]}catch{return[]}}),[At,qe]=K.useState(!1),[Bf,$f]=K.useState(!1),[ys,vs]=K.useState(""),[ia,sa]=K.useState(""),[oa,aa]=K.useState(!1),[Fu,Hf]=K.useState(""),[Uu,yn]=K.useState(!1),[qt,_s]=K.useState(null),[ft,Dr]=K.useState({}),[vn,Wn]=K.useState(!1),[Ue,De]=K.useState(!1),[qn,ws]=K.useState(""),[Es,la]=K.useState(""),_n=K.useRef(!1);K.useEffect(()=>{localStorage.setItem("industry_connect_bookmarks",JSON.stringify(dt))},[dt]),K.useEffect(()=>{if(!Sn){N(!1);return}const V=Nk(Sn,j=>{S(j),j&&!j.isAnonymous?(k(j.email),j.email.includes("admin")?(qe(!0),U(!0),_(!1)):(qe(!1),U(!0),_(!1))):(qe(!1),k(""))});return()=>V()},[]),K.useEffect(()=>{if(!L||!_t){N(!1);return}const V=Ga(_t,"artifacts",zr,"public","data","contacts"),j=GR(V,$=>{const re=$.docs.map(Te=>({id:Te.id,...Te.data()}));A(re),N(!1)},$=>{console.warn("Using offline memory datasets fallback.",$),N(!1)});return()=>j()},[L]),K.useEffect(()=>{!P&&v.length===0&&_t&&L&&!_n.current&&(_n.current=!0,(async()=>{try{const j=Ga(_t,"artifacts",zr,"public","data","contacts"),$=[];Object.entries(Pw).forEach(([re,Te])=>{Te.forEach(Mt=>{$.push({category:re,...Mt})})});for(const re of $)await Fc(j,re)}catch(j){console.error("Auto seeding process failed:",j)}finally{_n.current=!1}})())},[P,v,L]);const wn=K.useMemo(()=>v.length>0?v:Nw,[v]),mi=K.useMemo(()=>{const V=wn.filter($=>$.category===n),j=new Set(["All"]);return V.forEach($=>{$.tags&&j.add($.tags)}),Array.from(j)},[wn,n]),Lr=K.useMemo(()=>{const V=wn.filter($=>$.category===n),j=new Set(["All"]);return V.forEach($=>{if(!$.location||$.location==="N/A")return;const re=$.location.toLowerCase();re.includes("los angeles")||re.includes("la")?j.add("LA"):re.includes("san francisco")||re.includes("sf")||re.includes("oakland")||re.includes("vallejo")?j.add("SF / Bay Area"):re.includes("las vegas")||re.includes("vegas")?j.add("Las Vegas"):re.includes("long beach")?j.add("Long Beach"):(re.includes("reno")||re.includes("sparks"))&&j.add("Reno / Sparks")}),Array.from(j)},[wn,n]);K.useEffect(()=>{l("All"),h("All")},[n]);const Vr=K.useMemo(()=>{let V=wn.filter(j=>j.category===n);if(f&&(V=V.filter(j=>dt.includes(j.id))),o!=="All"&&(V=V.filter(j=>j.tags===o)),u!=="All"&&(V=V.filter(j=>{if(!j.location)return!1;const $=j.location.toLowerCase();return u==="LA"?$.includes("los angeles")||$.includes("ca")&&$.includes("carson")||$.includes("burbank")||$.includes("sylmar")||$.includes("santa monica"):u==="SF / Bay Area"?$.includes("san francisco")||$.includes("sf")||$.includes("oakland")||$.includes("vallejo"):u==="Las Vegas"?$.includes("las vegas")||$.includes("vegas"):u==="Long Beach"?$.includes("long beach")||$.includes("lbc"):u==="Reno / Sparks"?$.includes("reno")||$.includes("sparks"):!1})),i){const j=i.toLowerCase();V=V.filter($=>$.title&&$.title.toLowerCase().includes(j)||$.subtitle&&$.subtitle.toLowerCase().includes(j)||$.name&&$.name.toLowerCase().includes(j)||$.role&&$.role.toLowerCase().includes(j)||$.location&&$.location.toLowerCase().includes(j)||$.tags&&$.tags.toLowerCase().includes(j))}return V},[wn,n,o,u,i,dt,f]),zu=()=>{const V=Vr.map($=>$.email).filter($=>$&&$!=="N/A"&&$.includes("@"));if(V.length===0)return;const j=V.join(", ");navigator.clipboard.writeText(j),alert(`Success: Copied ${V.length} targeting email routes directly to clipboard!`)},Ts=V=>{Wt(j=>j.includes(V)?j.filter($=>$!==V):[...j,V])},ua=async(V,j)=>{if(!_t){A($=>$.map(re=>re.id===V?{...re,notes:j}:re));return}try{const $=gl(_t,"artifacts",zr,"public","data","contacts",V);await sy($,{notes:j})}catch($){console.error("Failed to commit notes to remote repository:",$)}},Is=async V=>{if(V.preventDefault(),tt(""),!Sn){m==="admin@theindustryconnect.com"&&T==="123456"?(qe(!0),U(!0),_(!1),k("offline-admin")):m==="subscriber@theindustryconnect.com"&&T==="123456"?(qe(!1),U(!0),_(!1),k("offline-subscriber")):tt("Offline Dev Auth: Use admin@theindustryconnect.com or subscriber@theindustryconnect.com (Pass: 123456)");return}try{C==="LOGIN"?await Ck(Sn,m,T):C==="SIGNUP"&&I("PAYWALL")}catch(j){tt(j.message.replace("Firebase:",""))}},Or=async V=>{if(V.preventDefault(),tt(""),me(!0),!Hn||!H||!Z){tt("Please complete all credit card fields."),me(!1);return}setTimeout(async()=>{try{Sn?await xk(Sn,m,T):(U(!0),_(!1),k(m)),me(!1),_(!1),alert("Subscription Active: Welcome to The Industry Connect Ecosystem!")}catch(j){tt(j.message.replace("Firebase:","")),me(!1)}},1500)},Ss=async()=>{if(!Sn){qe(!1),U(!1),_(!0),I("LOGIN"),k("");return}try{await bk(Sn),qe(!1),U(!1),_(!0),I("LOGIN")}catch(V){console.error("Sign out process failed:",V)}},ks=()=>{_s(null),Dr({category:n,title:"",subtitle:"",name:"",role:"",email:"",phone:"",location:"",tags:"",notes:""}),yn(!0)},En=V=>{const j=V.id.startsWith("fallback-")?null:V.id;_s(j?V:null),Dr({...V,id:j}),yn(!0)},Ot=V=>{const{name:j,value:$}=V.target;Dr(re=>({...re,[j]:$}))},gi=async V=>{if(V.preventDefault(),Wn(!0),!_t){if(qt)A(j=>j.map($=>$.id===qt.id?{...ft}:$));else{const j={...ft,id:`local-${Date.now()}`};A($=>[j,...$])}yn(!1),Wn(!1);return}try{const j=Ga(_t,"artifacts",zr,"public","data","contacts");if(qt&&qt.id){const $=gl(_t,"artifacts",zr,"public","data","contacts",qt.id),{id:re,...Te}=ft;await sy($,Te)}else await Fc(j,ft);yn(!1)}catch(j){console.error("Failed to commit directory modifications:",j)}Wn(!1)},ca=async V=>{if(!_t){A(j=>j.filter($=>$.id!==V));return}if(V.startsWith("fallback-")){A(j=>j.filter($=>$.id!==V));return}try{const j=gl(_t,"artifacts",zr,"public","data","contacts",V);await KR(j)}catch(j){console.error("Failed to delete record:",j)}},Mr=async V=>{if(V.preventDefault(),!!qn.trim()){la(""),Wn(!0);try{const j=qn.split(`
`),$=j[0].split(",").map(Te=>Te.trim().toLowerCase()),re=[];for(let Te=1;Te<j.length;Te++){if(!j[Te].trim())continue;const Mt=j[Te].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)||j[Te].split(","),pt={category:n};$.forEach((ge,ha)=>{let Kt=Mt[ha]?Mt[ha].replace(/^"|"$/g,"").trim():"";ge==="title"||ge==="company"||ge==="business name"?pt.title=Kt:ge==="name"||ge==="contact"?pt.name=Kt:ge==="subtitle"||ge==="specialty"||ge==="category"?pt.subtitle=Kt:ge==="role"||ge==="title/role"?pt.role=Kt:ge==="email"||ge==="email address"?pt.email=Kt:ge==="phone"||ge==="phone number"?pt.phone=Kt:ge==="location"||ge==="address"||ge==="physical address"?pt.location=Kt:ge==="tags"?pt.tags=Kt:ge==="notes"&&(pt.notes=Kt)}),pt.title&&re.push(pt)}if(re.length===0)throw new Error("Could not parse any valid entries.");if(_t){const Te=Ga(_t,"artifacts",zr,"public","data","contacts");for(const Mt of re)await Fc(Te,Mt)}else{const Te=re.map((Mt,pt)=>({...Mt,id:`local-bulk-${Date.now()}-${pt}`}));A(Mt=>[...Te,...Mt])}ws(""),De(!1),alert(`Successfully added ${re.length} contacts to your repository catalog!`)}catch(j){la(j.message)}finally{Wn(!1)}}};return g.jsxs("div",{className:"min-h-screen bg-neutral-900 text-neutral-200 font-sans selection:bg-amber-500/30 selection:text-amber-200 flex flex-col relative",children:[t&&g.jsx(JR,{onComplete:()=>e(!1)}),!t&&z&&g.jsxs("div",{className:"fixed inset-0 bg-neutral-950 z-40 flex flex-col lg:flex-row",children:[g.jsxs("div",{className:"lg:w-1/2 bg-neutral-900 border-b lg:border-b-0 lg:border-r border-neutral-800 p-8 lg:p-16 flex flex-col justify-between relative overflow-hidden",children:[g.jsx("div",{className:"absolute -top-32 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"}),g.jsxs("div",{className:"relative z-10 flex items-center gap-2.5",children:[g.jsx("div",{className:"w-8 h-8 bg-amber-500 text-neutral-950 font-black rounded-lg flex items-center justify-center text-lg tracking-tighter",children:"⚡"}),g.jsxs("span",{className:"text-xl font-black text-white tracking-tight uppercase",children:["THE INDUSTRY ",g.jsx("span",{className:"text-amber-500",children:"CONNECT"})]})]}),g.jsxs("div",{className:"relative z-10 my-12 max-w-lg",children:[g.jsxs("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 w-fit mb-6",children:[g.jsx(V1,{size:12})," Value Proposition"]}),g.jsx("h2",{className:"text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-4",children:"Unlock 150+ Verified West Coast Music Industry Decision Makers"}),g.jsx("p",{className:"text-neutral-400 text-sm leading-relaxed mb-8",children:"Skip the gatekeepers. Directly connect with A&Rs, Radio program directors, high-profile club DJs, and key streetwear curators from LA, the Bay Area, and Las Vegas. Perfect for independent artists who are ready to scale their career path."}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(Ac,{className:"text-amber-500 shrink-0 mt-1",size:16}),g.jsxs("p",{className:"text-xs text-neutral-300 font-medium",children:[g.jsx("strong",{className:"text-white",children:"Continuous CRM Verification:"})," Our teams audit the directory to guarantee zero dead-ends or invalid contacts."]})]}),g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(Ac,{className:"text-amber-500 shrink-0 mt-1",size:16}),g.jsxs("p",{className:"text-xs text-neutral-300 font-medium",children:[g.jsx("strong",{className:"text-white",children:"Outreach CRM Notes:"})," Keep logs of past pitches and responses directly associated with each contact card."]})]}),g.jsxs("div",{className:"flex items-start gap-3",children:[g.jsx(Ac,{className:"text-amber-500 shrink-0 mt-1",size:16}),g.jsxs("p",{className:"text-xs text-neutral-300 font-medium",children:[g.jsx("strong",{className:"text-white",children:"Batch Campaigns:"})," One-click bulk-copy email lists to target outreach efficiently."]})]})]})]}),g.jsx("div",{className:"relative z-10 text-[11px] text-neutral-500",children:"© 2026 The Industry Connect Ecosystem. Secured SaaS Directory Shell."})]}),g.jsx("div",{className:"lg:w-1/2 p-8 lg:p-16 flex items-center justify-center bg-neutral-950",children:g.jsxs("div",{className:"max-w-md w-full",children:[g.jsxs("div",{className:"flex gap-4 border-b border-neutral-800 pb-5 mb-8",children:[g.jsx("button",{onClick:()=>{I("LOGIN"),tt("")},className:`text-sm font-extrabold pb-2 border-b-2 transition-all ${C==="LOGIN"?"border-amber-500 text-white":"border-transparent text-neutral-500 hover:text-neutral-300"}`,children:"Log In"}),g.jsx("button",{onClick:()=>{I("SIGNUP"),tt("")},className:`text-sm font-extrabold pb-2 border-b-2 transition-all ${["SIGNUP","PAYWALL"].includes(C)?"border-amber-500 text-white":"border-transparent text-neutral-500 hover:text-neutral-300"}`,children:"Subscribe ($99/mo)"})]}),C==="LOGIN"&&g.jsxs("form",{onSubmit:Is,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1",children:"Email Address"}),g.jsx("input",{type:"email",required:!0,value:m,onChange:V=>w(V.target.value),placeholder:"e.g. artist@mybrand.com",className:"w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-semibold"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1",children:"Password"}),g.jsx("input",{type:"password",required:!0,value:T,onChange:V=>x(V.target.value),placeholder:"••••••••",className:"w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-semibold"})]}),We&&g.jsx("p",{className:"text-red-400 text-xs bg-red-950/20 border border-red-800/30 p-2.5 rounded font-medium",children:We}),g.jsxs("button",{type:"submit",className:"w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-lg transition-colors text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10",children:[g.jsx("span",{children:"Authenticate Account"}),g.jsx(Fm,{size:14})]})]}),C==="SIGNUP"&&g.jsxs("form",{onSubmit:Is,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1",children:"Account Username / Email"}),g.jsx("input",{type:"email",required:!0,value:m,onChange:V=>w(V.target.value),placeholder:"e.g. artist@mybrand.com",className:"w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-semibold"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1",children:"Secure Password"}),g.jsx("input",{type:"password",required:!0,value:T,onChange:V=>x(V.target.value),placeholder:"At least 6 characters",className:"w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-semibold"})]}),g.jsxs("button",{type:"submit",className:"w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-lg transition-colors text-xs uppercase tracking-wider flex items-center justify-center gap-2",children:[g.jsx("span",{children:"Proceed to Secure Checkout"}),g.jsx(Fm,{size:14})]})]}),C==="PAYWALL"&&g.jsxs("form",{onSubmit:Or,className:"space-y-4",children:[g.jsxs("div",{className:"bg-neutral-900 border border-neutral-850 p-4 rounded-xl mb-4",children:[g.jsx("span",{className:"text-[10px] font-bold font-mono tracking-widest text-amber-500 block mb-1",children:"MONTHLY MEMBERSHIP PLAN"}),g.jsxs("div",{className:"flex justify-between items-baseline",children:[g.jsx("h4",{className:"text-xl font-black text-white",children:"Full Platform Membership"}),g.jsxs("span",{className:"text-lg font-black text-white",children:["$99 ",g.jsx("span",{className:"text-xs text-neutral-500",children:"/ mo"})]})]}),g.jsx("p",{className:"text-[11px] text-neutral-400 mt-2 leading-relaxed",children:"Renews monthly, cancel anytime in one-click directly inside your personal account preferences."})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1",children:"Cardholder Name"}),g.jsx("input",{type:"text",required:!0,placeholder:"e.g. Tina Davis",className:"w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-semibold"})]}),g.jsxs("div",{children:[g.jsxs("label",{className:"block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1 flex items-center gap-1",children:[g.jsx(b1,{size:11})," Card Number"]}),g.jsx("input",{type:"text",required:!0,value:Hn,onChange:V=>Ht(V.target.value),placeholder:"•••• •••• •••• ••••",className:"w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-semibold"})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1",children:"Expiry Date"}),g.jsx("input",{type:"text",required:!0,value:H,onChange:V=>X(V.target.value),placeholder:"MM / YY",className:"w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-semibold"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1",children:"CVC Code"}),g.jsx("input",{type:"text",required:!0,value:Z,onChange:V=>ve(V.target.value),placeholder:"•••",className:"w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 text-xs font-semibold"})]})]}),We&&g.jsx("p",{className:"text-red-400 text-xs bg-red-950/20 border border-red-800/30 p-2.5 rounded font-medium",children:We}),g.jsxs("button",{type:"submit",disabled:he,className:"w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-lg transition-colors text-xs uppercase tracking-wider flex items-center justify-center gap-2",children:[he?g.jsx(Bm,{className:"animate-spin",size:14}):g.jsx(H1,{size:14}),g.jsx("span",{children:he?"Verifying Transaction...":"Activate Membership Access"})]}),g.jsx("div",{className:"text-center",children:g.jsx("button",{type:"button",onClick:()=>I("SIGNUP"),className:"text-xs text-neutral-500 hover:text-white underline",children:"Go Back"})})]})]})})]}),!t&&!z&&D&&g.jsxs(g.Fragment,{children:[g.jsxs("header",{className:"bg-neutral-950 border-b border-neutral-800 sticky top-0 z-40 shadow-md",children:[g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5",children:g.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("div",{className:"w-8 h-8 bg-amber-500 text-neutral-950 font-black rounded-lg flex items-center justify-center text-lg tracking-tighter",children:"⚡"}),g.jsxs("h1",{className:"text-xl md:text-2xl font-black text-white tracking-tight",children:["THE INDUSTRY ",g.jsx("span",{className:"text-amber-500",children:"CONNECT"})]}),At&&g.jsx("span",{className:"px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 text-[10px] font-black uppercase tracking-widest border border-amber-500/20",children:"Admin Privileges"})]}),g.jsx("p",{className:"text-neutral-400 mt-1 text-xs md:text-sm font-medium",children:"SaaS Outreach CRM & Vetted Hip-Hop industry network analytics."})]}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto",children:[g.jsxs("div",{className:"relative w-full md:w-64",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:g.jsx($m,{size:15,className:"text-neutral-500"})}),g.jsx("input",{type:"text",placeholder:`Search ${n.toLowerCase()}...`,className:"block w-full pl-9 pr-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 text-neutral-200 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all text-xs",value:i,onChange:V=>s(V.target.value)}),i&&g.jsx("button",{onClick:()=>s(""),className:"absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-500 hover:text-white",children:g.jsx(xc,{size:14})})]}),g.jsxs("div",{className:"flex gap-2 items-stretch",children:[g.jsxs("button",{onClick:()=>y(!f),className:`px-3 py-2 rounded-lg border transition-colors flex items-center justify-center gap-1.5 text-xs font-bold ${f?"bg-amber-500/15 border-amber-500/40 text-amber-400":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-white"}`,title:"Toggle favorites",children:[g.jsx(w_,{size:14,fill:f?"currentColor":"none"}),g.jsx("span",{children:"Favorites"})]}),At&&g.jsxs(g.Fragment,{children:[g.jsxs("button",{onClick:()=>De(!0),className:"px-3 py-2 rounded-lg bg-neutral-800 border border-neutral-700/60 hover:bg-neutral-700 text-neutral-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors",title:"Bulk Ingestion Tools",children:[g.jsx(Q1,{size:14}),g.jsx("span",{className:"hidden sm:inline",children:"Bulk CSV"})]}),g.jsxs("button",{onClick:ks,className:"flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold px-3 py-2 rounded-lg transition-colors text-xs shrink-0 shadow-lg shadow-amber-500/15",children:[g.jsx(zm,{size:14}),g.jsx("span",{children:"Add"})]})]})]})]})]})}),g.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:g.jsx("div",{className:"flex overflow-x-auto hide-scrollbar border-b border-neutral-800 gap-6",children:oy.map(V=>g.jsxs("button",{onClick:()=>r(V),className:`whitespace-nowrap py-3.5 px-0.5 border-b-2 font-bold text-sm flex items-center gap-2 transition-colors tracking-tight ${n===V?"border-amber-500 text-amber-500":"border-transparent text-neutral-400 hover:text-neutral-200"}`,children:[XR[V],V]},V))})})]}),g.jsx("section",{className:"bg-neutral-900/40 border-b border-neutral-800/60 py-3 backdrop-blur-sm sticky top-[165px] md:top-[90px] z-30",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-3 md:flex-row md:items-center justify-between text-xs",children:[g.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center",children:[mi.length>1&&g.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto hide-scrollbar shrink-0",children:[g.jsxs("span",{className:"text-neutral-500 font-bold uppercase tracking-wider flex items-center gap-1",children:[g.jsx(q1,{size:11})," Specialty:"]}),g.jsx("div",{className:"flex gap-1",children:mi.map(V=>g.jsx("button",{onClick:()=>l(V),className:`px-2 py-0.5 rounded text-[11px] font-medium border transition-all ${o===V?"bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold":"bg-neutral-800/40 border-neutral-700/40 text-neutral-400 hover:bg-neutral-800"}`,children:V},V))})]}),mi.length>1&&Lr.length>1&&g.jsx("span",{className:"hidden sm:inline text-neutral-800",children:"|"}),Lr.length>1&&g.jsxs("div",{className:"flex items-center gap-2 overflow-x-auto hide-scrollbar",children:[g.jsxs("span",{className:"text-neutral-500 font-bold uppercase tracking-wider flex items-center gap-1",children:[g.jsx(L1,{size:11})," Location:"]}),g.jsx("div",{className:"flex gap-1",children:Lr.map(V=>g.jsx("button",{onClick:()=>h(V),className:`px-2 py-0.5 rounded text-[11px] font-medium border transition-all ${u===V?"bg-amber-500/15 border-amber-500/40 text-amber-400 font-bold":"bg-neutral-800/40 border-neutral-700/40 text-neutral-400 hover:bg-neutral-800"}`,children:V},V))})]})]}),Vr.length>0&&g.jsxs("button",{onClick:zu,className:"text-[11px] py-1 px-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/60 rounded text-neutral-300 font-bold flex items-center justify-center gap-1.5 transition-colors ml-auto md:ml-0 shadow",children:[g.jsx($1,{size:11}),g.jsx("span",{children:"Copy All Filtered Emails"})]})]})}),g.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex-grow w-full pb-16",children:[g.jsx("div",{className:"mb-4 flex justify-between items-center",children:g.jsxs("h2",{className:"text-xs font-bold text-neutral-400 uppercase tracking-widest font-mono flex items-center gap-1.5",children:[g.jsx(K1,{size:14,className:"text-amber-500"}),"Active Index File / ",n,g.jsxs("span",{className:"text-neutral-600",children:["(",Vr.length," records found)"]})]})}),Vr.length>0?g.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:Vr.map(V=>g.jsx(ZR,{data:V,isAdmin:At,isBookmarked:dt.includes(V.id),onToggleBookmark:Ts,onEdit:En,onDelete:ca,onUpdateNotes:ua},V.id))}):g.jsxs("div",{className:"text-center py-24 bg-neutral-800/20 rounded-2xl border border-neutral-800 border-dashed flex flex-col items-center max-w-xl mx-auto mt-8",children:[g.jsx($m,{className:"mx-auto h-10 w-10 text-neutral-700 mb-3"}),g.jsx("h3",{className:"text-base font-bold text-neutral-300 tracking-tight",children:"No records located"}),g.jsx("p",{className:"text-neutral-500 text-xs mt-1 px-6",children:"No matching index criteria aligns with your active attribute parameter configurations. Toggle favorites off or reset parameters."}),g.jsx("button",{onClick:()=>{s(""),l("All"),h("All"),y(!1)},className:"mt-5 text-xs font-bold text-amber-500 hover:text-amber-400 underline",children:"Reset Search Parameters"})]})]}),g.jsx("footer",{className:"bg-neutral-950 border-t border-neutral-900 mt-auto shadow-inner",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs font-medium text-neutral-500 gap-3",children:[g.jsx("p",{children:"© 2026 The Industry Connect Ecosystem"}),g.jsxs("div",{className:"flex items-center gap-3",children:[E&&g.jsxs("span",{className:"text-neutral-400",children:["Authenticated: ",g.jsx("strong",{className:"text-amber-500 font-bold",children:E})]}),g.jsxs("button",{onClick:Ss,className:"flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors font-bold",children:[g.jsx(M1,{size:12})," Log Out"]})]})]})}),Ue&&g.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-xl shadow-2xl relative",children:[g.jsxs("div",{className:"p-4 border-b border-neutral-800 flex justify-between items-center",children:[g.jsxs("h2",{className:"text-md font-bold text-white flex items-center gap-2",children:[g.jsx(D1,{className:"text-amber-500",size:18}),g.jsx("span",{children:"Bulk CSV Ingestion Matrix"})]}),g.jsx("button",{onClick:()=>De(!1),className:"text-neutral-500 hover:text-white p-1",children:g.jsx(xc,{size:18})})]}),g.jsxs("form",{onSubmit:Mr,className:"p-5 space-y-4",children:[g.jsxs("p",{className:"text-xs text-neutral-400 leading-relaxed",children:["Ingest lists directly into the active ",g.jsxs("strong",{className:"text-amber-400",children:['"',n,'"']})," index directory collection. Ensure the first line represents column schema mapping:",g.jsx("code",{className:"block mt-2 p-2 bg-neutral-950 text-amber-500/80 rounded border border-neutral-800/80 font-mono text-[10px]",children:"title, subtitle, name, role, email, phone, location, tags"})]}),g.jsx("textarea",{value:qn,onChange:V=>ws(V.target.value),placeholder:"Empire Distribution, Tina Davis, Deals, info@empire.com, N/A, Sylmar CA, Record Label",rows:8,className:"w-full text-xs p-3 font-mono bg-neutral-950 border border-neutral-800 rounded-lg text-amber-300 placeholder-neutral-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 leading-normal",required:!0}),Es&&g.jsx("p",{className:"text-red-400 text-xs font-semibold bg-red-950/25 p-2 rounded border border-red-800/20",children:Es}),g.jsxs("div",{className:"flex justify-end gap-3 pt-3 border-t border-neutral-800 text-xs",children:[g.jsx("button",{type:"button",onClick:()=>De(!1),className:"px-4 py-2 rounded text-neutral-400 hover:text-white",children:"Cancel"}),g.jsxs("button",{type:"submit",disabled:vn,className:"px-5 py-2 rounded bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold disabled:opacity-50 tracking-wider flex items-center gap-1.5 shadow",children:[g.jsx(Bm,{size:12,className:vn?"animate-spin":""}),vn?"Parsing Row Blocks...":"Ingest CSV Data"]})]})]})]})}),Uu&&g.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto",children:g.jsxs("div",{className:"bg-neutral-900 border border-neutral-800 rounded-xl w-full max-w-xl shadow-2xl relative my-8",children:[g.jsxs("div",{className:"sticky top-0 bg-neutral-900 border-b border-neutral-800 p-4 rounded-t-xl flex justify-between items-center z-10",children:[g.jsxs("h2",{className:"text-lg font-bold text-white flex items-center gap-2 tracking-tight",children:[qt?g.jsx(__,{size:18,className:"text-amber-500"}):g.jsx(zm,{size:18,className:"text-amber-500"}),qt?"Modify Directory Index":"Append New Directory Index"]}),g.jsx("button",{onClick:()=>yn(!1),className:"text-neutral-500 hover:text-white p-1",children:g.jsx(xc,{size:18})})]}),g.jsxs("form",{onSubmit:gi,className:"p-5 space-y-4 text-xs font-medium",children:[g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-neutral-400 mb-1 font-bold uppercase tracking-wider",children:"Category *"}),g.jsx("select",{name:"category",value:ft.category||"",onChange:Ot,required:!0,className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500",children:oy.map(V=>g.jsx("option",{value:V,children:V},V))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-neutral-400 mb-1 font-bold uppercase tracking-wider",children:"Company / Entity Title *"}),g.jsx("input",{type:"text",name:"title",value:ft.title||"",onChange:Ot,required:!0,placeholder:"e.g. Culture Kings",className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-neutral-400 mb-1 font-bold uppercase tracking-wider",children:"Subtitle / Specialty"}),g.jsx("input",{type:"text",name:"subtitle",value:ft.subtitle||"",onChange:Ot,placeholder:"e.g. Rare Sneakers",className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-neutral-400 mb-1 font-bold uppercase tracking-wider",children:"Filter Tag Category"}),g.jsx("input",{type:"text",name:"tags",value:ft.tags||"",onChange:Ot,placeholder:"Streetwear, Sneakers, Collectibles, Record Label",className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"})]})]}),g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-neutral-400 mb-1 font-bold uppercase tracking-wider",children:"Key Contact Person Name"}),g.jsx("input",{type:"text",name:"name",value:ft.name||"",onChange:Ot,placeholder:"e.g. Tina Davis",className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-neutral-400 mb-1 font-bold uppercase tracking-wider",children:"Operational Role Title"}),g.jsx("input",{type:"text",name:"role",value:ft.role||"",onChange:Ot,placeholder:"e.g. Lead Buyer / President",className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-neutral-400 mb-1 font-bold uppercase tracking-wider",children:"Email Route"}),g.jsx("input",{type:"text",name:"email",value:ft.email||"",onChange:Ot,placeholder:"e.g. info@domain.com",className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-neutral-400 mb-1 font-bold uppercase tracking-wider",children:"Phone Link"}),g.jsx("input",{type:"text",name:"phone",value:ft.phone||"",onChange:Ot,placeholder:"e.g. (310) 555-1212",className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"})]})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-neutral-400 mb-1 font-bold uppercase tracking-wider",children:"Physical Location / Address"}),g.jsx("input",{type:"text",name:"location",value:ft.location||"",onChange:Ot,placeholder:"e.g. Los Angeles, CA or 451 N Fairfax Ave",className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500"})]}),g.jsxs("div",{className:"pt-4 border-t border-neutral-800 flex justify-end gap-3 text-sm",children:[g.jsx("button",{type:"button",onClick:()=>yn(!1),className:"px-4 py-2 rounded-lg text-neutral-400 hover:text-white transition-colors",children:"Cancel"}),g.jsx("button",{type:"submit",disabled:vn,className:"px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold transition-colors disabled:opacity-50 shadow-md shadow-amber-500/10",children:vn?"Saving Metrics...":"Commit Record"})]})]})]})})]}),g.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}})]})}Uc.createRoot(document.getElementById("root")).render(g.jsx(fE.StrictMode,{children:g.jsx(e2,{})}));
