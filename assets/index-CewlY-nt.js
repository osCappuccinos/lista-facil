(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Bd={exports:{}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function aT(){if(Yg)return Ne;Yg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function I(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,j={};function F(b,K,ue){this.props=b,this.context=K,this.refs=j,this.updater=ue||x}F.prototype.isReactComponent={},F.prototype.setState=function(b,K){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,K,"setState")},F.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function q(){}q.prototype=F.prototype;function Y(b,K,ue){this.props=b,this.context=K,this.refs=j,this.updater=ue||x}var G=Y.prototype=new q;G.constructor=Y,U(G,F.prototype),G.isPureReactComponent=!0;var ne=Array.isArray,_e=Object.prototype.hasOwnProperty,ge={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(b,K,ue){var Ee,Te={},De=null,Pe=null;if(K!=null)for(Ee in K.ref!==void 0&&(Pe=K.ref),K.key!==void 0&&(De=""+K.key),K)_e.call(K,Ee)&&!k.hasOwnProperty(Ee)&&(Te[Ee]=K[Ee]);var Le=arguments.length-2;if(Le===1)Te.children=ue;else if(1<Le){for(var je=Array(Le),Ct=0;Ct<Le;Ct++)je[Ct]=arguments[Ct+2];Te.children=je}if(b&&b.defaultProps)for(Ee in Le=b.defaultProps,Le)Te[Ee]===void 0&&(Te[Ee]=Le[Ee]);return{$$typeof:n,type:b,key:De,ref:Pe,props:Te,_owner:ge.current}}function C(b,K){return{$$typeof:n,type:b.type,key:K,ref:b.ref,props:b.props,_owner:b._owner}}function P(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function O(b){var K={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ue){return K[ue]})}var N=/\/+/g;function R(b,K){return typeof b=="object"&&b!==null&&b.key!=null?O(""+b.key):K.toString(36)}function xe(b,K,ue,Ee,Te){var De=typeof b;(De==="undefined"||De==="boolean")&&(b=null);var Pe=!1;if(b===null)Pe=!0;else switch(De){case"string":case"number":Pe=!0;break;case"object":switch(b.$$typeof){case n:case e:Pe=!0}}if(Pe)return Pe=b,Te=Te(Pe),b=Ee===""?"."+R(Pe,0):Ee,ne(Te)?(ue="",b!=null&&(ue=b.replace(N,"$&/")+"/"),xe(Te,K,ue,"",function(Ct){return Ct})):Te!=null&&(P(Te)&&(Te=C(Te,ue+(!Te.key||Pe&&Pe.key===Te.key?"":(""+Te.key).replace(N,"$&/")+"/")+b)),K.push(Te)),1;if(Pe=0,Ee=Ee===""?".":Ee+":",ne(b))for(var Le=0;Le<b.length;Le++){De=b[Le];var je=Ee+R(De,Le);Pe+=xe(De,K,ue,je,Te)}else if(je=I(b),typeof je=="function")for(b=je.call(b),Le=0;!(De=b.next()).done;)De=De.value,je=Ee+R(De,Le++),Pe+=xe(De,K,ue,je,Te);else if(De==="object")throw K=String(b),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Pe}function Ge(b,K,ue){if(b==null)return b;var Ee=[],Te=0;return xe(b,Ee,"","",function(De){return K.call(ue,De,Te++)}),Ee}function Qe(b){if(b._status===-1){var K=b._result;K=K(),K.then(function(ue){(b._status===0||b._status===-1)&&(b._status=1,b._result=ue)},function(ue){(b._status===0||b._status===-1)&&(b._status=2,b._result=ue)}),b._status===-1&&(b._status=0,b._result=K)}if(b._status===1)return b._result.default;throw b._result}var ke={current:null},te={transition:null},pe={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:te,ReactCurrentOwner:ge};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ne.Children={map:Ge,forEach:function(b,K,ue){Ge(b,function(){K.apply(this,arguments)},ue)},count:function(b){var K=0;return Ge(b,function(){K++}),K},toArray:function(b){return Ge(b,function(K){return K})||[]},only:function(b){if(!P(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Ne.Component=F,Ne.Fragment=t,Ne.Profiler=o,Ne.PureComponent=Y,Ne.StrictMode=i,Ne.Suspense=p,Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ne.act=oe,Ne.cloneElement=function(b,K,ue){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Ee=U({},b.props),Te=b.key,De=b.ref,Pe=b._owner;if(K!=null){if(K.ref!==void 0&&(De=K.ref,Pe=ge.current),K.key!==void 0&&(Te=""+K.key),b.type&&b.type.defaultProps)var Le=b.type.defaultProps;for(je in K)_e.call(K,je)&&!k.hasOwnProperty(je)&&(Ee[je]=K[je]===void 0&&Le!==void 0?Le[je]:K[je])}var je=arguments.length-2;if(je===1)Ee.children=ue;else if(1<je){Le=Array(je);for(var Ct=0;Ct<je;Ct++)Le[Ct]=arguments[Ct+2];Ee.children=Le}return{$$typeof:n,type:b.type,key:Te,ref:De,props:Ee,_owner:Pe}},Ne.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Ne.createElement=S,Ne.createFactory=function(b){var K=S.bind(null,b);return K.type=b,K},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(b){return{$$typeof:d,render:b}},Ne.isValidElement=P,Ne.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:Qe}},Ne.memo=function(b,K){return{$$typeof:y,type:b,compare:K===void 0?null:K}},Ne.startTransition=function(b){var K=te.transition;te.transition={};try{b()}finally{te.transition=K}},Ne.unstable_act=oe,Ne.useCallback=function(b,K){return ke.current.useCallback(b,K)},Ne.useContext=function(b){return ke.current.useContext(b)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(b){return ke.current.useDeferredValue(b)},Ne.useEffect=function(b,K){return ke.current.useEffect(b,K)},Ne.useId=function(){return ke.current.useId()},Ne.useImperativeHandle=function(b,K,ue){return ke.current.useImperativeHandle(b,K,ue)},Ne.useInsertionEffect=function(b,K){return ke.current.useInsertionEffect(b,K)},Ne.useLayoutEffect=function(b,K){return ke.current.useLayoutEffect(b,K)},Ne.useMemo=function(b,K){return ke.current.useMemo(b,K)},Ne.useReducer=function(b,K,ue){return ke.current.useReducer(b,K,ue)},Ne.useRef=function(b){return ke.current.useRef(b)},Ne.useState=function(b){return ke.current.useState(b)},Ne.useSyncExternalStore=function(b,K,ue){return ke.current.useSyncExternalStore(b,K,ue)},Ne.useTransition=function(){return ke.current.useTransition()},Ne.version="18.3.1",Ne}var Jg;function Vf(){return Jg||(Jg=1,Bd.exports=aT()),Bd.exports}var M=Vf(),Yu={},zd={exports:{}},on={},jd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function lT(){return Zg||(Zg=1,function(n){function e(te,pe){var oe=te.length;te.push(pe);e:for(;0<oe;){var b=oe-1>>>1,K=te[b];if(0<o(K,pe))te[b]=pe,te[oe]=K,oe=b;else break e}}function t(te){return te.length===0?null:te[0]}function i(te){if(te.length===0)return null;var pe=te[0],oe=te.pop();if(oe!==pe){te[0]=oe;e:for(var b=0,K=te.length,ue=K>>>1;b<ue;){var Ee=2*(b+1)-1,Te=te[Ee],De=Ee+1,Pe=te[De];if(0>o(Te,oe))De<K&&0>o(Pe,Te)?(te[b]=Pe,te[De]=oe,b=De):(te[b]=Te,te[Ee]=oe,b=Ee);else if(De<K&&0>o(Pe,oe))te[b]=Pe,te[De]=oe,b=De;else break e}}return pe}function o(te,pe){var oe=te.sortIndex-pe.sortIndex;return oe!==0?oe:te.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],v=1,T=null,I=3,x=!1,U=!1,j=!1,F=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(te){for(var pe=t(y);pe!==null;){if(pe.callback===null)i(y);else if(pe.startTime<=te)i(y),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(y)}}function ne(te){if(j=!1,G(te),!U)if(t(p)!==null)U=!0,Qe(_e);else{var pe=t(y);pe!==null&&ke(ne,pe.startTime-te)}}function _e(te,pe){U=!1,j&&(j=!1,q(S),S=-1),x=!0;var oe=I;try{for(G(pe),T=t(p);T!==null&&(!(T.expirationTime>pe)||te&&!O());){var b=T.callback;if(typeof b=="function"){T.callback=null,I=T.priorityLevel;var K=b(T.expirationTime<=pe);pe=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),G(pe)}else i(p);T=t(p)}if(T!==null)var ue=!0;else{var Ee=t(y);Ee!==null&&ke(ne,Ee.startTime-pe),ue=!1}return ue}finally{T=null,I=oe,x=!1}}var ge=!1,k=null,S=-1,C=5,P=-1;function O(){return!(n.unstable_now()-P<C)}function N(){if(k!==null){var te=n.unstable_now();P=te;var pe=!0;try{pe=k(!0,te)}finally{pe?R():(ge=!1,k=null)}}else ge=!1}var R;if(typeof Y=="function")R=function(){Y(N)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,Ge=xe.port2;xe.port1.onmessage=N,R=function(){Ge.postMessage(null)}}else R=function(){F(N,0)};function Qe(te){k=te,ge||(ge=!0,R())}function ke(te,pe){S=F(function(){te(n.unstable_now())},pe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(te){te.callback=null},n.unstable_continueExecution=function(){U||x||(U=!0,Qe(_e))},n.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<te?Math.floor(1e3/te):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(te){switch(I){case 1:case 2:case 3:var pe=3;break;default:pe=I}var oe=I;I=pe;try{return te()}finally{I=oe}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(te,pe){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var oe=I;I=te;try{return pe()}finally{I=oe}},n.unstable_scheduleCallback=function(te,pe,oe){var b=n.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?b+oe:b):oe=b,te){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=oe+K,te={id:v++,callback:pe,priorityLevel:te,startTime:oe,expirationTime:K,sortIndex:-1},oe>b?(te.sortIndex=oe,e(y,te),t(p)===null&&te===t(y)&&(j?(q(S),S=-1):j=!0,ke(ne,oe-b))):(te.sortIndex=K,e(p,te),U||x||(U=!0,Qe(_e))),te},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(te){var pe=I;return function(){var oe=I;I=pe;try{return te.apply(this,arguments)}finally{I=oe}}}}($d)),$d}var ey;function uT(){return ey||(ey=1,jd.exports=lT()),jd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function cT(){if(ty)return on;ty=1;var n=Vf(),e=uT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},T={};function I(r){return p.call(T,r)?!0:p.call(v,r)?!1:y.test(r)?T[r]=!0:(v[r]=!0,!1)}function x(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function U(r,s,a,h){if(s===null||typeof s>"u"||x(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function j(r,s,a,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){F[r]=new j(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];F[s]=new j(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){F[r]=new j(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){F[r]=new j(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){F[r]=new j(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){F[r]=new j(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){F[r]=new j(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){F[r]=new j(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){F[r]=new j(r,5,!1,r.toLowerCase(),null,!1,!1)});var q=/[\-:]([a-z])/g;function Y(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(q,Y);F[s]=new j(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(q,Y);F[s]=new j(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(q,Y);F[s]=new j(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){F[r]=new j(r,1,!1,r.toLowerCase(),null,!1,!1)}),F.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){F[r]=new j(r,1,!1,r.toLowerCase(),null,!0,!0)});function G(r,s,a,h){var f=F.hasOwnProperty(s)?F[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(U(s,a,f,h)&&(a=null),h||f===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var ne=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),ge=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),te=Symbol.iterator;function pe(r){return r===null||typeof r!="object"?null:(r=te&&r[te]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,b;function K(r){if(b===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+r}var ue=!1;function Ee(r,s){if(!r||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(H){var h=H}Reflect.construct(r,[],s)}else{try{s.call()}catch(H){h=H}r.call(s.prototype)}else{try{throw Error()}catch(H){h=H}r()}}catch(H){if(H&&h&&typeof H.stack=="string"){for(var f=H.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,A=g.length-1;1<=w&&0<=A&&f[w]!==g[A];)A--;for(;1<=w&&0<=A;w--,A--)if(f[w]!==g[A]){if(w!==1||A!==1)do if(w--,A--,0>A||f[w]!==g[A]){var D=`
`+f[w].replace(" at new "," at ");return r.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",r.displayName)),D}while(1<=w&&0<=A);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Te(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Ee(r.type,!1),r;case 11:return r=Ee(r.type.render,!1),r;case 1:return r=Ee(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case ge:return"Portal";case C:return"Profiler";case S:return"StrictMode";case R:return"Suspense";case xe:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case P:return(r._context.displayName||"Context")+".Provider";case N:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Ge:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Qe:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Pe(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Le(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function je(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ct(r){var s=je(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Tr(r){r._valueTracker||(r._valueTracker=Ct(r))}function Ls(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=je(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function Yr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function qi(r,s){var a=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Vs(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=Le(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ta(r,s){s=s.checked,s!=null&&G(r,"checked",s,!1)}function na(r,s){ta(r,s);var a=Le(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ms(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ms(r,s.type,Le(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Vl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ms(r,s,a){(s!=="number"||Yr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Ir=Array.isArray;function Sr(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+Le(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ra(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Fs(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Ir(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Le(a)}}function Us(r,s){var a=Le(s.value),h=Le(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function ia(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function _t(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?_t(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Cr,sa=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Cr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Jr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gi=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(r){Gi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ki[s]=Ki[r]})});function oa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ki.hasOwnProperty(r)&&Ki[r]?(""+s).trim():s+"px"}function aa(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=oa(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var la=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ua(r,s){if(s){if(la[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ca(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=null;function Bs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var zs=null,En=null,tr=null;function js(r){if(r=Oa(r)){if(typeof zs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=du(s),zs(r.stateNode,r.type,s))}}function nr(r){En?tr?tr.push(r):tr=[r]:En=r}function ha(){if(En){var r=En,s=tr;if(tr=En=null,js(r),s)for(r=0;r<s.length;r++)js(s[r])}}function Xi(r,s){return r(s)}function da(){}var Rr=!1;function fa(r,s,a){if(Rr)return r(s,a);Rr=!0;try{return Xi(r,s,a)}finally{Rr=!1,(En!==null||tr!==null)&&(da(),ha())}}function ct(r,s){var a=r.stateNode;if(a===null)return null;var h=du(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var $s=!1;if(d)try{var On={};Object.defineProperty(On,"passive",{get:function(){$s=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{$s=!1}function Yi(r,s,a,h,f,g,w,A,D){var H=Array.prototype.slice.call(arguments,3);try{s.apply(a,H)}catch(Z){this.onError(Z)}}var Ji=!1,Hs=null,Ln=!1,pa=null,ph={onError:function(r){Ji=!0,Hs=r}};function Ws(r,s,a,h,f,g,w,A,D){Ji=!1,Hs=null,Yi.apply(ph,arguments)}function Ml(r,s,a,h,f,g,w,A,D){if(Ws.apply(this,arguments),Ji){if(Ji){var H=Hs;Ji=!1,Hs=null}else throw Error(t(198));Ln||(Ln=!0,pa=H)}}function Vn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Zi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Mn(r){if(Vn(r)!==r)throw Error(t(188))}function Fl(r){var s=r.alternate;if(!s){if(s=Vn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Mn(f),r;if(g===h)return Mn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var w=!1,A=f.child;A;){if(A===a){w=!0,a=f,h=g;break}if(A===h){w=!0,h=f,a=g;break}A=A.sibling}if(!w){for(A=g.child;A;){if(A===a){w=!0,a=g,h=f;break}if(A===h){w=!0,h=g,a=f;break}A=A.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ma(r){return r=Fl(r),r!==null?qs(r):null}function qs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=qs(r);if(s!==null)return s;r=r.sibling}return null}var Ks=e.unstable_scheduleCallback,ga=e.unstable_cancelCallback,Ul=e.unstable_shouldYield,mh=e.unstable_requestPaint,qe=e.unstable_now,Bl=e.unstable_getCurrentPriorityLevel,es=e.unstable_ImmediatePriority,Zr=e.unstable_UserBlockingPriority,Tn=e.unstable_NormalPriority,ya=e.unstable_LowPriority,zl=e.unstable_IdlePriority,ts=null,hn=null;function jl(r){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(ts,r,void 0,(r.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Hl,_a=Math.log,$l=Math.LN2;function Hl(r){return r>>>=0,r===0?32:31-(_a(r)/$l|0)|0}var Gs=64,Qs=4194304;function ei(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ns(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var A=w&~f;A!==0?h=ei(A):(g&=w,g!==0&&(h=ei(g)))}else w=a&~f,w!==0?h=ei(w):g!==0&&(h=ei(g));if(h===0)return 0;if(s!==0&&s!==h&&!(s&f)&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(h&4&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-qt(s),f=1<<a,h|=r[a],s&=~f;return h}function gh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-qt(g),A=1<<w,D=f[w];D===-1?(!(A&a)||A&h)&&(f[w]=gh(A,s)):D<=s&&(r.expiredLanes|=A),g&=~A}}function dn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function rs(){var r=Gs;return Gs<<=1,!(Gs&4194240)&&(Gs=64),r}function ti(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ni(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-qt(s),r[s]=a}function We(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-qt(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function ri(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-qt(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var Ve=0;function ii(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var Wl,Xs,ql,Kl,Gl,va=!1,rr=[],Nt=null,Fn=null,Un=null,si=new Map,In=new Map,ir=[],yh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ql(r,s){switch(r){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":si.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(s.pointerId)}}function Jt(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Oa(s),s!==null&&Xs(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function _h(r,s,a,h,f){switch(s){case"focusin":return Nt=Jt(Nt,r,s,a,h,f),!0;case"dragenter":return Fn=Jt(Fn,r,s,a,h,f),!0;case"mouseover":return Un=Jt(Un,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return si.set(g,Jt(si.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,In.set(g,Jt(In.get(g)||null,r,s,a,h,f)),!0}return!1}function Xl(r){var s=ls(r.target);if(s!==null){var a=Vn(s);if(a!==null){if(s=a.tag,s===13){if(s=Zi(a),s!==null){r.blockedOn=s,Gl(r.priority,function(){ql(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function kr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Ys(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Qi=h,a.target.dispatchEvent(h),Qi=null}else return s=Oa(a),s!==null&&Xs(s),r.blockedOn=a,!1;s.shift()}return!0}function is(r,s,a){kr(r)&&a.delete(s)}function Yl(){va=!1,Nt!==null&&kr(Nt)&&(Nt=null),Fn!==null&&kr(Fn)&&(Fn=null),Un!==null&&kr(Un)&&(Un=null),si.forEach(is),In.forEach(is)}function Bn(r,s){r.blockedOn===s&&(r.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yl)))}function zn(r){function s(f){return Bn(f,r)}if(0<rr.length){Bn(rr[0],r);for(var a=1;a<rr.length;a++){var h=rr[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Nt!==null&&Bn(Nt,r),Fn!==null&&Bn(Fn,r),Un!==null&&Bn(Un,r),si.forEach(s),In.forEach(s),a=0;a<ir.length;a++)h=ir[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)Xl(a),a.blockedOn===null&&ir.shift()}var Pr=ne.ReactCurrentBatchConfig,oi=!0;function Ze(r,s,a,h){var f=Ve,g=Pr.transition;Pr.transition=null;try{Ve=1,wa(r,s,a,h)}finally{Ve=f,Pr.transition=g}}function vh(r,s,a,h){var f=Ve,g=Pr.transition;Pr.transition=null;try{Ve=4,wa(r,s,a,h)}finally{Ve=f,Pr.transition=g}}function wa(r,s,a,h){if(oi){var f=Ys(r,s,a,h);if(f===null)xh(r,s,h,ss,a),Ql(r,h);else if(_h(f,r,s,a,h))h.stopPropagation();else if(Ql(r,h),s&4&&-1<yh.indexOf(r)){for(;f!==null;){var g=Oa(f);if(g!==null&&Wl(g),g=Ys(r,s,a,h),g===null&&xh(r,s,h,ss,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else xh(r,s,h,null,a)}}var ss=null;function Ys(r,s,a,h){if(ss=null,r=Bs(h),r=ls(r),r!==null)if(s=Vn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Zi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return ss=r,null}function Ea(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bl()){case es:return 1;case Zr:return 4;case Tn:case ya:return 16;case zl:return 536870912;default:return 16}default:return 16}}var fn=null,Js=null,Zt=null;function Ta(){if(Zt)return Zt;var r,s=Js,a=s.length,h,f="value"in fn?fn.value:fn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var w=a-r;for(h=1;h<=w&&s[a-h]===f[g-h];h++);return Zt=f.slice(r,1<h?1-h:void 0)}function Zs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function sr(){return!0}function Ia(){return!1}function Dt(r){function s(a,h,f,g,w){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?sr:Ia,this.isPropagationStopped=Ia,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),s}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eo=Dt(jn),or=oe({},jn,{view:0,detail:0}),wh=Dt(or),to,xr,ai,os=oe({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ai&&(ai&&r.type==="mousemove"?(to=r.screenX-ai.screenX,xr=r.screenY-ai.screenY):xr=to=0,ai=r),to)},movementY:function(r){return"movementY"in r?r.movementY:xr}}),no=Dt(os),Sa=oe({},os,{dataTransfer:0}),Jl=Dt(Sa),ro=oe({},or,{relatedTarget:0}),io=Dt(ro),Zl=oe({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nr=Dt(Zl),eu=oe({},jn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),tu=Dt(eu),nu=oe({},jn,{data:0}),Ca=Dt(nu),so={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ru={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ru[r])?!!s[r]:!1}function ar(){return iu}var u=oe({},or,{key:function(r){if(r.key){var s=so[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Zs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Kt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(r){return r.type==="keypress"?Zs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Zs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Dt(u),_=oe({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Dt(_),B=oe({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),W=Dt(B),ie=oe({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),He=Dt(ie),wt=oe({},os,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Fe=Dt(wt),Rt=[9,13,27,32],ft=d&&"CompositionEvent"in window,Sn=null;d&&"documentMode"in document&&(Sn=document.documentMode);var pn=d&&"TextEvent"in window&&!Sn,as=d&&(!ft||Sn&&8<Sn&&11>=Sn),oo=" ",Wp=!1;function qp(r,s){switch(r){case"keyup":return Rt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ao=!1;function i0(r,s){switch(r){case"compositionend":return Kp(s);case"keypress":return s.which!==32?null:(Wp=!0,oo);case"textInput":return r=s.data,r===oo&&Wp?null:r;default:return null}}function s0(r,s){if(ao)return r==="compositionend"||!ft&&qp(r,s)?(r=Ta(),Zt=Js=fn=null,ao=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return as&&s.locale!=="ko"?null:s.data;default:return null}}var o0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!o0[r.type]:s==="textarea"}function Qp(r,s,a,h){nr(h),s=uu(s,"onChange"),0<s.length&&(a=new eo("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var Ra=null,Aa=null;function a0(r){fm(r,0)}function su(r){var s=fo(r);if(Ls(s))return r}function l0(r,s){if(r==="change")return s}var Xp=!1;if(d){var Eh;if(d){var Th="oninput"in document;if(!Th){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Th=typeof Yp.oninput=="function"}Eh=Th}else Eh=!1;Xp=Eh&&(!document.documentMode||9<document.documentMode)}function Jp(){Ra&&(Ra.detachEvent("onpropertychange",Zp),Aa=Ra=null)}function Zp(r){if(r.propertyName==="value"&&su(Aa)){var s=[];Qp(s,Aa,r,Bs(r)),fa(a0,s)}}function u0(r,s,a){r==="focusin"?(Jp(),Ra=s,Aa=a,Ra.attachEvent("onpropertychange",Zp)):r==="focusout"&&Jp()}function c0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return su(Aa)}function h0(r,s){if(r==="click")return su(s)}function d0(r,s){if(r==="input"||r==="change")return su(s)}function f0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var $n=typeof Object.is=="function"?Object.is:f0;function ka(r,s){if($n(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!$n(r[f],s[f]))return!1}return!0}function em(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function tm(r,s){var a=em(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=em(a)}}function nm(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?nm(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function rm(){for(var r=window,s=Yr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Yr(r.document)}return s}function Ih(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function p0(r){var s=rm(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&nm(a.ownerDocument.documentElement,a)){if(h!==null&&Ih(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=tm(a,g);var w=tm(a,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var m0=d&&"documentMode"in document&&11>=document.documentMode,lo=null,Sh=null,Pa=null,Ch=!1;function im(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ch||lo==null||lo!==Yr(h)||(h=lo,"selectionStart"in h&&Ih(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Pa&&ka(Pa,h)||(Pa=h,h=uu(Sh,"onSelect"),0<h.length&&(s=new eo("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=lo)))}function ou(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var uo={animationend:ou("Animation","AnimationEnd"),animationiteration:ou("Animation","AnimationIteration"),animationstart:ou("Animation","AnimationStart"),transitionend:ou("Transition","TransitionEnd")},Rh={},sm={};d&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete uo.animationend.animation,delete uo.animationiteration.animation,delete uo.animationstart.animation),"TransitionEvent"in window||delete uo.transitionend.transition);function au(r){if(Rh[r])return Rh[r];if(!uo[r])return r;var s=uo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in sm)return Rh[r]=s[a];return r}var om=au("animationend"),am=au("animationiteration"),lm=au("animationstart"),um=au("transitionend"),cm=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(r,s){cm.set(r,s),l(s,[r])}for(var Ah=0;Ah<hm.length;Ah++){var kh=hm[Ah],g0=kh.toLowerCase(),y0=kh[0].toUpperCase()+kh.slice(1);li(g0,"on"+y0)}li(om,"onAnimationEnd"),li(am,"onAnimationIteration"),li(lm,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(um,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_0=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function dm(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Ml(h,s,void 0,r),r.currentTarget=null}function fm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var A=h[w],D=A.instance,H=A.currentTarget;if(A=A.listener,D!==g&&f.isPropagationStopped())break e;dm(f,A,H),g=D}else for(w=0;w<h.length;w++){if(A=h[w],D=A.instance,H=A.currentTarget,A=A.listener,D!==g&&f.isPropagationStopped())break e;dm(f,A,H),g=D}}}if(Ln)throw r=pa,Ln=!1,pa=null,r}function Xe(r,s){var a=s[Vh];a===void 0&&(a=s[Vh]=new Set);var h=r+"__bubble";a.has(h)||(pm(s,r,2,!1),a.add(h))}function Ph(r,s,a){var h=0;s&&(h|=4),pm(a,r,h,s)}var lu="_reactListening"+Math.random().toString(36).slice(2);function Na(r){if(!r[lu]){r[lu]=!0,i.forEach(function(a){a!=="selectionchange"&&(_0.has(a)||Ph(a,!1,r),Ph(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[lu]||(s[lu]=!0,Ph("selectionchange",!1,s))}}function pm(r,s,a,h){switch(Ea(s)){case 1:var f=Ze;break;case 4:f=vh;break;default:f=wa}a=f.bind(null,s,a,r),f=void 0,!$s||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function xh(r,s,a,h,f){var g=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var A=h.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var D=w.tag;if((D===3||D===4)&&(D=w.stateNode.containerInfo,D===f||D.nodeType===8&&D.parentNode===f))return;w=w.return}for(;A!==null;){if(w=ls(A),w===null)return;if(D=w.tag,D===5||D===6){h=g=w;continue e}A=A.parentNode}}h=h.return}fa(function(){var H=g,Z=Bs(a),ee=[];e:{var J=cm.get(r);if(J!==void 0){var ae=eo,de=r;switch(r){case"keypress":if(Zs(a)===0)break e;case"keydown":case"keyup":ae=m;break;case"focusin":de="focus",ae=io;break;case"focusout":de="blur",ae=io;break;case"beforeblur":case"afterblur":ae=io;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=Jl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=W;break;case om:case am:case lm:ae=Nr;break;case um:ae=He;break;case"scroll":ae=wh;break;case"wheel":ae=Fe;break;case"copy":case"cut":case"paste":ae=tu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=E}var fe=(s&4)!==0,ht=!fe&&r==="scroll",z=fe?J!==null?J+"Capture":null:J;fe=[];for(var V=H,$;V!==null;){$=V;var re=$.stateNode;if($.tag===5&&re!==null&&($=re,z!==null&&(re=ct(V,z),re!=null&&fe.push(Da(V,re,$)))),ht)break;V=V.return}0<fe.length&&(J=new ae(J,de,null,a,Z),ee.push({event:J,listeners:fe}))}}if(!(s&7)){e:{if(J=r==="mouseover"||r==="pointerover",ae=r==="mouseout"||r==="pointerout",J&&a!==Qi&&(de=a.relatedTarget||a.fromElement)&&(ls(de)||de[Dr]))break e;if((ae||J)&&(J=Z.window===Z?Z:(J=Z.ownerDocument)?J.defaultView||J.parentWindow:window,ae?(de=a.relatedTarget||a.toElement,ae=H,de=de?ls(de):null,de!==null&&(ht=Vn(de),de!==ht||de.tag!==5&&de.tag!==6)&&(de=null)):(ae=null,de=H),ae!==de)){if(fe=no,re="onMouseLeave",z="onMouseEnter",V="mouse",(r==="pointerout"||r==="pointerover")&&(fe=E,re="onPointerLeave",z="onPointerEnter",V="pointer"),ht=ae==null?J:fo(ae),$=de==null?J:fo(de),J=new fe(re,V+"leave",ae,a,Z),J.target=ht,J.relatedTarget=$,re=null,ls(Z)===H&&(fe=new fe(z,V+"enter",de,a,Z),fe.target=$,fe.relatedTarget=ht,re=fe),ht=re,ae&&de)t:{for(fe=ae,z=de,V=0,$=fe;$;$=co($))V++;for($=0,re=z;re;re=co(re))$++;for(;0<V-$;)fe=co(fe),V--;for(;0<$-V;)z=co(z),$--;for(;V--;){if(fe===z||z!==null&&fe===z.alternate)break t;fe=co(fe),z=co(z)}fe=null}else fe=null;ae!==null&&mm(ee,J,ae,fe,!1),de!==null&&ht!==null&&mm(ee,ht,de,fe,!0)}}e:{if(J=H?fo(H):window,ae=J.nodeName&&J.nodeName.toLowerCase(),ae==="select"||ae==="input"&&J.type==="file")var me=l0;else if(Gp(J))if(Xp)me=d0;else{me=c0;var ve=u0}else(ae=J.nodeName)&&ae.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(me=h0);if(me&&(me=me(r,H))){Qp(ee,me,a,Z);break e}ve&&ve(r,J,H),r==="focusout"&&(ve=J._wrapperState)&&ve.controlled&&J.type==="number"&&Ms(J,"number",J.value)}switch(ve=H?fo(H):window,r){case"focusin":(Gp(ve)||ve.contentEditable==="true")&&(lo=ve,Sh=H,Pa=null);break;case"focusout":Pa=Sh=lo=null;break;case"mousedown":Ch=!0;break;case"contextmenu":case"mouseup":case"dragend":Ch=!1,im(ee,a,Z);break;case"selectionchange":if(m0)break;case"keydown":case"keyup":im(ee,a,Z)}var we;if(ft)e:{switch(r){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else ao?qp(r,a)&&(Ce="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(as&&a.locale!=="ko"&&(ao||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&ao&&(we=Ta()):(fn=Z,Js="value"in fn?fn.value:fn.textContent,ao=!0)),ve=uu(H,Ce),0<ve.length&&(Ce=new Ca(Ce,r,null,a,Z),ee.push({event:Ce,listeners:ve}),we?Ce.data=we:(we=Kp(a),we!==null&&(Ce.data=we)))),(we=pn?i0(r,a):s0(r,a))&&(H=uu(H,"onBeforeInput"),0<H.length&&(Z=new Ca("onBeforeInput","beforeinput",null,a,Z),ee.push({event:Z,listeners:H}),Z.data=we))}fm(ee,s)})}function Da(r,s,a){return{instance:r,listener:s,currentTarget:a}}function uu(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=ct(r,a),g!=null&&h.unshift(Da(r,g,f)),g=ct(r,s),g!=null&&h.push(Da(r,g,f))),r=r.return}return h}function co(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function mm(r,s,a,h,f){for(var g=s._reactName,w=[];a!==null&&a!==h;){var A=a,D=A.alternate,H=A.stateNode;if(D!==null&&D===h)break;A.tag===5&&H!==null&&(A=H,f?(D=ct(a,g),D!=null&&w.unshift(Da(a,D,A))):f||(D=ct(a,g),D!=null&&w.push(Da(a,D,A)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var v0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function gm(r){return(typeof r=="string"?r:""+r).replace(v0,`
`).replace(w0,"")}function cu(r,s,a){if(s=gm(s),gm(r)!==s&&a)throw Error(t(425))}function hu(){}var Nh=null,Dh=null;function bh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Oh=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,ym=typeof Promise=="function"?Promise:void 0,T0=typeof queueMicrotask=="function"?queueMicrotask:typeof ym<"u"?function(r){return ym.resolve(null).then(r).catch(I0)}:Oh;function I0(r){setTimeout(function(){throw r})}function Lh(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),zn(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);zn(s)}function ui(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function _m(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var ho=Math.random().toString(36).slice(2),lr="__reactFiber$"+ho,ba="__reactProps$"+ho,Dr="__reactContainer$"+ho,Vh="__reactEvents$"+ho,S0="__reactListeners$"+ho,C0="__reactHandles$"+ho;function ls(r){var s=r[lr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Dr]||a[lr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=_m(r);r!==null;){if(a=r[lr])return a;r=_m(r)}return s}r=a,a=r.parentNode}return null}function Oa(r){return r=r[lr]||r[Dr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function fo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function du(r){return r[ba]||null}var Mh=[],po=-1;function ci(r){return{current:r}}function Ye(r){0>po||(r.current=Mh[po],Mh[po]=null,po--)}function Ke(r,s){po++,Mh[po]=r.current,r.current=s}var hi={},Ft=ci(hi),en=ci(!1),us=hi;function mo(r,s){var a=r.type.contextTypes;if(!a)return hi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function tn(r){return r=r.childContextTypes,r!=null}function fu(){Ye(en),Ye(Ft)}function vm(r,s,a){if(Ft.current!==hi)throw Error(t(168));Ke(Ft,s),Ke(en,a)}function wm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,Pe(r)||"Unknown",f));return oe({},a,h)}function pu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||hi,us=Ft.current,Ke(Ft,r),Ke(en,en.current),!0}function Em(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=wm(r,s,us),h.__reactInternalMemoizedMergedChildContext=r,Ye(en),Ye(Ft),Ke(Ft,r)):Ye(en),Ke(en,a)}var br=null,mu=!1,Fh=!1;function Tm(r){br===null?br=[r]:br.push(r)}function R0(r){mu=!0,Tm(r)}function di(){if(!Fh&&br!==null){Fh=!0;var r=0,s=Ve;try{var a=br;for(Ve=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}br=null,mu=!1}catch(f){throw br!==null&&(br=br.slice(r+1)),Ks(es,di),f}finally{Ve=s,Fh=!1}}return null}var go=[],yo=0,gu=null,yu=0,Cn=[],Rn=0,cs=null,Or=1,Lr="";function hs(r,s){go[yo++]=yu,go[yo++]=gu,gu=r,yu=s}function Im(r,s,a){Cn[Rn++]=Or,Cn[Rn++]=Lr,Cn[Rn++]=cs,cs=r;var h=Or;r=Lr;var f=32-qt(h)-1;h&=~(1<<f),a+=1;var g=32-qt(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Or=1<<32-qt(s)+f|a<<f|h,Lr=g+r}else Or=1<<g|a<<f|h,Lr=r}function Uh(r){r.return!==null&&(hs(r,1),Im(r,1,0))}function Bh(r){for(;r===gu;)gu=go[--yo],go[yo]=null,yu=go[--yo],go[yo]=null;for(;r===cs;)cs=Cn[--Rn],Cn[Rn]=null,Lr=Cn[--Rn],Cn[Rn]=null,Or=Cn[--Rn],Cn[Rn]=null}var mn=null,gn=null,et=!1,Hn=null;function Sm(r,s){var a=xn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function Cm(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,mn=r,gn=ui(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,mn=r,gn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=cs!==null?{id:Or,overflow:Lr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=xn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,mn=r,gn=null,!0):!1;default:return!1}}function zh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function jh(r){if(et){var s=gn;if(s){var a=s;if(!Cm(r,s)){if(zh(r))throw Error(t(418));s=ui(a.nextSibling);var h=mn;s&&Cm(r,s)?Sm(h,a):(r.flags=r.flags&-4097|2,et=!1,mn=r)}}else{if(zh(r))throw Error(t(418));r.flags=r.flags&-4097|2,et=!1,mn=r}}}function Rm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;mn=r}function _u(r){if(r!==mn)return!1;if(!et)return Rm(r),et=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!bh(r.type,r.memoizedProps)),s&&(s=gn)){if(zh(r))throw Am(),Error(t(418));for(;s;)Sm(r,s),s=ui(s.nextSibling)}if(Rm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){gn=ui(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}gn=null}}else gn=mn?ui(r.stateNode.nextSibling):null;return!0}function Am(){for(var r=gn;r;)r=ui(r.nextSibling)}function _o(){gn=mn=null,et=!1}function $h(r){Hn===null?Hn=[r]:Hn.push(r)}var A0=ne.ReactCurrentBatchConfig;function La(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var A=f.refs;w===null?delete A[g]:A[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function vu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function km(r){var s=r._init;return s(r._payload)}function Pm(r){function s(z,V){if(r){var $=z.deletions;$===null?(z.deletions=[V],z.flags|=16):$.push(V)}}function a(z,V){if(!r)return null;for(;V!==null;)s(z,V),V=V.sibling;return null}function h(z,V){for(z=new Map;V!==null;)V.key!==null?z.set(V.key,V):z.set(V.index,V),V=V.sibling;return z}function f(z,V){return z=wi(z,V),z.index=0,z.sibling=null,z}function g(z,V,$){return z.index=$,r?($=z.alternate,$!==null?($=$.index,$<V?(z.flags|=2,V):$):(z.flags|=2,V)):(z.flags|=1048576,V)}function w(z){return r&&z.alternate===null&&(z.flags|=2),z}function A(z,V,$,re){return V===null||V.tag!==6?(V=Od($,z.mode,re),V.return=z,V):(V=f(V,$),V.return=z,V)}function D(z,V,$,re){var me=$.type;return me===k?Z(z,V,$.props.children,re,$.key):V!==null&&(V.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Qe&&km(me)===V.type)?(re=f(V,$.props),re.ref=La(z,V,$),re.return=z,re):(re=$u($.type,$.key,$.props,null,z.mode,re),re.ref=La(z,V,$),re.return=z,re)}function H(z,V,$,re){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=Ld($,z.mode,re),V.return=z,V):(V=f(V,$.children||[]),V.return=z,V)}function Z(z,V,$,re,me){return V===null||V.tag!==7?(V=vs($,z.mode,re,me),V.return=z,V):(V=f(V,$),V.return=z,V)}function ee(z,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Od(""+V,z.mode,$),V.return=z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case _e:return $=$u(V.type,V.key,V.props,null,z.mode,$),$.ref=La(z,null,V),$.return=z,$;case ge:return V=Ld(V,z.mode,$),V.return=z,V;case Qe:var re=V._init;return ee(z,re(V._payload),$)}if(Ir(V)||pe(V))return V=vs(V,z.mode,$,null),V.return=z,V;vu(z,V)}return null}function J(z,V,$,re){var me=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return me!==null?null:A(z,V,""+$,re);if(typeof $=="object"&&$!==null){switch($.$$typeof){case _e:return $.key===me?D(z,V,$,re):null;case ge:return $.key===me?H(z,V,$,re):null;case Qe:return me=$._init,J(z,V,me($._payload),re)}if(Ir($)||pe($))return me!==null?null:Z(z,V,$,re,null);vu(z,$)}return null}function ae(z,V,$,re,me){if(typeof re=="string"&&re!==""||typeof re=="number")return z=z.get($)||null,A(V,z,""+re,me);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case _e:return z=z.get(re.key===null?$:re.key)||null,D(V,z,re,me);case ge:return z=z.get(re.key===null?$:re.key)||null,H(V,z,re,me);case Qe:var ve=re._init;return ae(z,V,$,ve(re._payload),me)}if(Ir(re)||pe(re))return z=z.get($)||null,Z(V,z,re,me,null);vu(V,re)}return null}function de(z,V,$,re){for(var me=null,ve=null,we=V,Ce=V=0,Pt=null;we!==null&&Ce<$.length;Ce++){we.index>Ce?(Pt=we,we=null):Pt=we.sibling;var ze=J(z,we,$[Ce],re);if(ze===null){we===null&&(we=Pt);break}r&&we&&ze.alternate===null&&s(z,we),V=g(ze,V,Ce),ve===null?me=ze:ve.sibling=ze,ve=ze,we=Pt}if(Ce===$.length)return a(z,we),et&&hs(z,Ce),me;if(we===null){for(;Ce<$.length;Ce++)we=ee(z,$[Ce],re),we!==null&&(V=g(we,V,Ce),ve===null?me=we:ve.sibling=we,ve=we);return et&&hs(z,Ce),me}for(we=h(z,we);Ce<$.length;Ce++)Pt=ae(we,z,Ce,$[Ce],re),Pt!==null&&(r&&Pt.alternate!==null&&we.delete(Pt.key===null?Ce:Pt.key),V=g(Pt,V,Ce),ve===null?me=Pt:ve.sibling=Pt,ve=Pt);return r&&we.forEach(function(Ei){return s(z,Ei)}),et&&hs(z,Ce),me}function fe(z,V,$,re){var me=pe($);if(typeof me!="function")throw Error(t(150));if($=me.call($),$==null)throw Error(t(151));for(var ve=me=null,we=V,Ce=V=0,Pt=null,ze=$.next();we!==null&&!ze.done;Ce++,ze=$.next()){we.index>Ce?(Pt=we,we=null):Pt=we.sibling;var Ei=J(z,we,ze.value,re);if(Ei===null){we===null&&(we=Pt);break}r&&we&&Ei.alternate===null&&s(z,we),V=g(Ei,V,Ce),ve===null?me=Ei:ve.sibling=Ei,ve=Ei,we=Pt}if(ze.done)return a(z,we),et&&hs(z,Ce),me;if(we===null){for(;!ze.done;Ce++,ze=$.next())ze=ee(z,ze.value,re),ze!==null&&(V=g(ze,V,Ce),ve===null?me=ze:ve.sibling=ze,ve=ze);return et&&hs(z,Ce),me}for(we=h(z,we);!ze.done;Ce++,ze=$.next())ze=ae(we,z,Ce,ze.value,re),ze!==null&&(r&&ze.alternate!==null&&we.delete(ze.key===null?Ce:ze.key),V=g(ze,V,Ce),ve===null?me=ze:ve.sibling=ze,ve=ze);return r&&we.forEach(function(oT){return s(z,oT)}),et&&hs(z,Ce),me}function ht(z,V,$,re){if(typeof $=="object"&&$!==null&&$.type===k&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case _e:e:{for(var me=$.key,ve=V;ve!==null;){if(ve.key===me){if(me=$.type,me===k){if(ve.tag===7){a(z,ve.sibling),V=f(ve,$.props.children),V.return=z,z=V;break e}}else if(ve.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===Qe&&km(me)===ve.type){a(z,ve.sibling),V=f(ve,$.props),V.ref=La(z,ve,$),V.return=z,z=V;break e}a(z,ve);break}else s(z,ve);ve=ve.sibling}$.type===k?(V=vs($.props.children,z.mode,re,$.key),V.return=z,z=V):(re=$u($.type,$.key,$.props,null,z.mode,re),re.ref=La(z,V,$),re.return=z,z=re)}return w(z);case ge:e:{for(ve=$.key;V!==null;){if(V.key===ve)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(z,V.sibling),V=f(V,$.children||[]),V.return=z,z=V;break e}else{a(z,V);break}else s(z,V);V=V.sibling}V=Ld($,z.mode,re),V.return=z,z=V}return w(z);case Qe:return ve=$._init,ht(z,V,ve($._payload),re)}if(Ir($))return de(z,V,$,re);if(pe($))return fe(z,V,$,re);vu(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(a(z,V.sibling),V=f(V,$),V.return=z,z=V):(a(z,V),V=Od($,z.mode,re),V.return=z,z=V),w(z)):a(z,V)}return ht}var vo=Pm(!0),xm=Pm(!1),wu=ci(null),Eu=null,wo=null,Hh=null;function Wh(){Hh=wo=Eu=null}function qh(r){var s=wu.current;Ye(wu),r._currentValue=s}function Kh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function Eo(r,s){Eu=r,Hh=wo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(nn=!0),r.firstContext=null)}function An(r){var s=r._currentValue;if(Hh!==r)if(r={context:r,memoizedValue:s,next:null},wo===null){if(Eu===null)throw Error(t(308));wo=r,Eu.dependencies={lanes:0,firstContext:r}}else wo=wo.next=r;return s}var ds=null;function Gh(r){ds===null?ds=[r]:ds.push(r)}function Nm(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,Gh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Vr(r,h)}function Vr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var fi=!1;function Qh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Mr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function pi(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,Be&2){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Vr(r,a)}return f=h.interleaved,f===null?(s.next=s,Gh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Vr(r,a)}function Tu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ri(r,a)}}function bm(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Iu(r,s,a,h){var f=r.updateQueue;fi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var D=A,H=D.next;D.next=null,w===null?g=H:w.next=H,w=D;var Z=r.alternate;Z!==null&&(Z=Z.updateQueue,A=Z.lastBaseUpdate,A!==w&&(A===null?Z.firstBaseUpdate=H:A.next=H,Z.lastBaseUpdate=D))}if(g!==null){var ee=f.baseState;w=0,Z=H=D=null,A=g;do{var J=A.lane,ae=A.eventTime;if((h&J)===J){Z!==null&&(Z=Z.next={eventTime:ae,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var de=r,fe=A;switch(J=s,ae=a,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){ee=de.call(ae,ee,J);break e}ee=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,J=typeof de=="function"?de.call(ae,ee,J):de,J==null)break e;ee=oe({},ee,J);break e;case 2:fi=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,J=f.effects,J===null?f.effects=[A]:J.push(A))}else ae={eventTime:ae,lane:J,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Z===null?(H=Z=ae,D=ee):Z=Z.next=ae,w|=J;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;J=A,A=J.next,J.next=null,f.lastBaseUpdate=J,f.shared.pending=null}}while(!0);if(Z===null&&(D=ee),f.baseState=D,f.firstBaseUpdate=H,f.lastBaseUpdate=Z,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ms|=w,r.lanes=w,r.memoizedState=ee}}function Om(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Va={},ur=ci(Va),Ma=ci(Va),Fa=ci(Va);function fs(r){if(r===Va)throw Error(t(174));return r}function Xh(r,s){switch(Ke(Fa,s),Ke(Ma,r),Ke(ur,Va),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:vt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=vt(s,r)}Ye(ur),Ke(ur,s)}function To(){Ye(ur),Ye(Ma),Ye(Fa)}function Lm(r){fs(Fa.current);var s=fs(ur.current),a=vt(s,r.type);s!==a&&(Ke(Ma,r),Ke(ur,a))}function Yh(r){Ma.current===r&&(Ye(ur),Ye(Ma))}var nt=ci(0);function Su(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Jh=[];function Zh(){for(var r=0;r<Jh.length;r++)Jh[r]._workInProgressVersionPrimary=null;Jh.length=0}var Cu=ne.ReactCurrentDispatcher,ed=ne.ReactCurrentBatchConfig,ps=0,rt=null,Et=null,At=null,Ru=!1,Ua=!1,Ba=0,k0=0;function Ut(){throw Error(t(321))}function td(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!$n(r[a],s[a]))return!1;return!0}function nd(r,s,a,h,f,g){if(ps=g,rt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Cu.current=r===null||r.memoizedState===null?D0:b0,r=a(h,f),Ua){g=0;do{if(Ua=!1,Ba=0,25<=g)throw Error(t(301));g+=1,At=Et=null,s.updateQueue=null,Cu.current=O0,r=a(h,f)}while(Ua)}if(Cu.current=Pu,s=Et!==null&&Et.next!==null,ps=0,At=Et=rt=null,Ru=!1,s)throw Error(t(300));return r}function rd(){var r=Ba!==0;return Ba=0,r}function cr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?rt.memoizedState=At=r:At=At.next=r,At}function kn(){if(Et===null){var r=rt.alternate;r=r!==null?r.memoizedState:null}else r=Et.next;var s=At===null?rt.memoizedState:At.next;if(s!==null)At=s,Et=r;else{if(r===null)throw Error(t(310));Et=r,r={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},At===null?rt.memoizedState=At=r:At=At.next=r}return At}function za(r,s){return typeof s=="function"?s(r):s}function id(r){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=Et,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var A=w=null,D=null,H=g;do{var Z=H.lane;if((ps&Z)===Z)D!==null&&(D=D.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),h=H.hasEagerState?H.eagerState:r(h,H.action);else{var ee={lane:Z,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};D===null?(A=D=ee,w=h):D=D.next=ee,rt.lanes|=Z,ms|=Z}H=H.next}while(H!==null&&H!==g);D===null?w=h:D.next=A,$n(h,s.memoizedState)||(nn=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=D,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,rt.lanes|=g,ms|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function sd(r){var s=kn(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);$n(g,s.memoizedState)||(nn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function Vm(){}function Mm(r,s){var a=rt,h=kn(),f=s(),g=!$n(h.memoizedState,f);if(g&&(h.memoizedState=f,nn=!0),h=h.queue,od(Bm.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||At!==null&&At.memoizedState.tag&1){if(a.flags|=2048,ja(9,Um.bind(null,a,h,f,s),void 0,null),kt===null)throw Error(t(349));ps&30||Fm(a,s,f)}return f}function Fm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Um(r,s,a,h){s.value=a,s.getSnapshot=h,zm(s)&&jm(r)}function Bm(r,s,a){return a(function(){zm(s)&&jm(r)})}function zm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!$n(r,a)}catch{return!0}}function jm(r){var s=Vr(r,1);s!==null&&Gn(s,r,1,-1)}function $m(r){var s=cr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:r},s.queue=r,r=r.dispatch=N0.bind(null,rt,r),[s.memoizedState,r]}function ja(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=rt.updateQueue,s===null?(s={lastEffect:null,stores:null},rt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Hm(){return kn().memoizedState}function Au(r,s,a,h){var f=cr();rt.flags|=r,f.memoizedState=ja(1|s,a,void 0,h===void 0?null:h)}function ku(r,s,a,h){var f=kn();h=h===void 0?null:h;var g=void 0;if(Et!==null){var w=Et.memoizedState;if(g=w.destroy,h!==null&&td(h,w.deps)){f.memoizedState=ja(s,a,g,h);return}}rt.flags|=r,f.memoizedState=ja(1|s,a,g,h)}function Wm(r,s){return Au(8390656,8,r,s)}function od(r,s){return ku(2048,8,r,s)}function qm(r,s){return ku(4,2,r,s)}function Km(r,s){return ku(4,4,r,s)}function Gm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Qm(r,s,a){return a=a!=null?a.concat([r]):null,ku(4,4,Gm.bind(null,s,r),a)}function ad(){}function Xm(r,s){var a=kn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&td(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function Ym(r,s){var a=kn();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&td(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function Jm(r,s,a){return ps&21?($n(a,s)||(a=rs(),rt.lanes|=a,ms|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,nn=!0),r.memoizedState=a)}function P0(r,s){var a=Ve;Ve=a!==0&&4>a?a:4,r(!0);var h=ed.transition;ed.transition={};try{r(!1),s()}finally{Ve=a,ed.transition=h}}function Zm(){return kn().memoizedState}function x0(r,s,a){var h=_i(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},eg(r))tg(s,a);else if(a=Nm(r,s,a,h),a!==null){var f=Qt();Gn(a,r,h,f),ng(a,s,h)}}function N0(r,s,a){var h=_i(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(eg(r))tg(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,A=g(w,a);if(f.hasEagerState=!0,f.eagerState=A,$n(A,w)){var D=s.interleaved;D===null?(f.next=f,Gh(s)):(f.next=D.next,D.next=f),s.interleaved=f;return}}catch{}finally{}a=Nm(r,s,f,h),a!==null&&(f=Qt(),Gn(a,r,h,f),ng(a,s,h))}}function eg(r){var s=r.alternate;return r===rt||s!==null&&s===rt}function tg(r,s){Ua=Ru=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function ng(r,s,a){if(a&4194240){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ri(r,a)}}var Pu={readContext:An,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},D0={readContext:An,useCallback:function(r,s){return cr().memoizedState=[r,s===void 0?null:s],r},useContext:An,useEffect:Wm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Au(4194308,4,Gm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Au(4194308,4,r,s)},useInsertionEffect:function(r,s){return Au(4,2,r,s)},useMemo:function(r,s){var a=cr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=cr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=x0.bind(null,rt,r),[h.memoizedState,r]},useRef:function(r){var s=cr();return r={current:r},s.memoizedState=r},useState:$m,useDebugValue:ad,useDeferredValue:function(r){return cr().memoizedState=r},useTransition:function(){var r=$m(!1),s=r[0];return r=P0.bind(null,r[1]),cr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=rt,f=cr();if(et){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),kt===null)throw Error(t(349));ps&30||Fm(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Wm(Bm.bind(null,h,g,r),[r]),h.flags|=2048,ja(9,Um.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=cr(),s=kt.identifierPrefix;if(et){var a=Lr,h=Or;a=(h&~(1<<32-qt(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ba++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=k0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},b0={readContext:An,useCallback:Xm,useContext:An,useEffect:od,useImperativeHandle:Qm,useInsertionEffect:qm,useLayoutEffect:Km,useMemo:Ym,useReducer:id,useRef:Hm,useState:function(){return id(za)},useDebugValue:ad,useDeferredValue:function(r){var s=kn();return Jm(s,Et.memoizedState,r)},useTransition:function(){var r=id(za)[0],s=kn().memoizedState;return[r,s]},useMutableSource:Vm,useSyncExternalStore:Mm,useId:Zm,unstable_isNewReconciler:!1},O0={readContext:An,useCallback:Xm,useContext:An,useEffect:od,useImperativeHandle:Qm,useInsertionEffect:qm,useLayoutEffect:Km,useMemo:Ym,useReducer:sd,useRef:Hm,useState:function(){return sd(za)},useDebugValue:ad,useDeferredValue:function(r){var s=kn();return Et===null?s.memoizedState=r:Jm(s,Et.memoizedState,r)},useTransition:function(){var r=sd(za)[0],s=kn().memoizedState;return[r,s]},useMutableSource:Vm,useSyncExternalStore:Mm,useId:Zm,unstable_isNewReconciler:!1};function Wn(r,s){if(r&&r.defaultProps){s=oe({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function ld(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:oe({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var xu={isMounted:function(r){return(r=r._reactInternals)?Vn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Qt(),f=_i(r),g=Mr(h,f);g.payload=s,a!=null&&(g.callback=a),s=pi(r,g,f),s!==null&&(Gn(s,r,f,h),Tu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Qt(),f=_i(r),g=Mr(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=pi(r,g,f),s!==null&&(Gn(s,r,f,h),Tu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Qt(),h=_i(r),f=Mr(a,h);f.tag=2,s!=null&&(f.callback=s),s=pi(r,f,h),s!==null&&(Gn(s,r,h,a),Tu(s,r,h))}};function rg(r,s,a,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!ka(a,h)||!ka(f,g):!0}function ig(r,s,a){var h=!1,f=hi,g=s.contextType;return typeof g=="object"&&g!==null?g=An(g):(f=tn(s)?us:Ft.current,h=s.contextTypes,g=(h=h!=null)?mo(r,f):hi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=xu,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function sg(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&xu.enqueueReplaceState(s,s.state,null)}function ud(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Qh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=An(g):(g=tn(s)?us:Ft.current,f.context=mo(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(ld(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&xu.enqueueReplaceState(f,f.state,null),Iu(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Io(r,s){try{var a="",h=s;do a+=Te(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function cd(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function hd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var L0=typeof WeakMap=="function"?WeakMap:Map;function og(r,s,a){a=Mr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Mu||(Mu=!0,Rd=h),hd(r,s)},a}function ag(r,s,a){a=Mr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){hd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){hd(r,s),typeof h!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function lg(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new L0;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=Q0.bind(null,r,s,a),s.then(r,r))}function ug(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function cg(r,s,a,h,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Mr(-1,1),s.tag=2,pi(a,s,1))),a.lanes|=1),r)}var V0=ne.ReactCurrentOwner,nn=!1;function Gt(r,s,a,h){s.child=r===null?xm(s,null,a,h):vo(s,r.child,a,h)}function hg(r,s,a,h,f){a=a.render;var g=s.ref;return Eo(s,f),h=nd(r,s,a,h,g,f),a=rd(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Fr(r,s,f)):(et&&a&&Uh(s),s.flags|=1,Gt(r,s,h,f),s.child)}function dg(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!bd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,fg(r,s,g,h,f)):(r=$u(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:ka,a(w,h)&&r.ref===s.ref)return Fr(r,s,f)}return s.flags|=1,r=wi(g,h),r.ref=s.ref,r.return=s,s.child=r}function fg(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(ka(g,h)&&r.ref===s.ref)if(nn=!1,s.pendingProps=h=g,(r.lanes&f)!==0)r.flags&131072&&(nn=!0);else return s.lanes=r.lanes,Fr(r,s,f)}return dd(r,s,a,h,f)}function pg(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Co,yn),yn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Ke(Co,yn),yn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,Ke(Co,yn),yn|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,Ke(Co,yn),yn|=h;return Gt(r,s,f,a),s.child}function mg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function dd(r,s,a,h,f){var g=tn(a)?us:Ft.current;return g=mo(s,g),Eo(s,f),a=nd(r,s,a,h,g,f),h=rd(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Fr(r,s,f)):(et&&h&&Uh(s),s.flags|=1,Gt(r,s,a,f),s.child)}function gg(r,s,a,h,f){if(tn(a)){var g=!0;pu(s)}else g=!1;if(Eo(s,f),s.stateNode===null)Du(r,s),ig(s,a,h),ud(s,a,h,f),h=!0;else if(r===null){var w=s.stateNode,A=s.memoizedProps;w.props=A;var D=w.context,H=a.contextType;typeof H=="object"&&H!==null?H=An(H):(H=tn(a)?us:Ft.current,H=mo(s,H));var Z=a.getDerivedStateFromProps,ee=typeof Z=="function"||typeof w.getSnapshotBeforeUpdate=="function";ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==h||D!==H)&&sg(s,w,h,H),fi=!1;var J=s.memoizedState;w.state=J,Iu(s,h,w,f),D=s.memoizedState,A!==h||J!==D||en.current||fi?(typeof Z=="function"&&(ld(s,a,Z,h),D=s.memoizedState),(A=fi||rg(s,a,A,h,J,D,H))?(ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=D),w.props=h,w.state=D,w.context=H,h=A):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,Dm(r,s),A=s.memoizedProps,H=s.type===s.elementType?A:Wn(s.type,A),w.props=H,ee=s.pendingProps,J=w.context,D=a.contextType,typeof D=="object"&&D!==null?D=An(D):(D=tn(a)?us:Ft.current,D=mo(s,D));var ae=a.getDerivedStateFromProps;(Z=typeof ae=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(A!==ee||J!==D)&&sg(s,w,h,D),fi=!1,J=s.memoizedState,w.state=J,Iu(s,h,w,f);var de=s.memoizedState;A!==ee||J!==de||en.current||fi?(typeof ae=="function"&&(ld(s,a,ae,h),de=s.memoizedState),(H=fi||rg(s,a,H,h,J,de,D)||!1)?(Z||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,de,D),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,de,D)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=de),w.props=h,w.state=de,w.context=D,h=H):(typeof w.componentDidUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(s.flags|=1024),h=!1)}return fd(r,s,a,h,g,f)}function fd(r,s,a,h,f,g){mg(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&Em(s,a,!1),Fr(r,s,g);h=s.stateNode,V0.current=s;var A=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=vo(s,r.child,null,g),s.child=vo(s,null,A,g)):Gt(r,s,A,g),s.memoizedState=h.state,f&&Em(s,a,!0),s.child}function yg(r){var s=r.stateNode;s.pendingContext?vm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&vm(r,s.context,!1),Xh(r,s.containerInfo)}function _g(r,s,a,h,f){return _o(),$h(f),s.flags|=256,Gt(r,s,a,h),s.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(r){return{baseLanes:r,cachePool:null,transitions:null}}function vg(r,s,a){var h=s.pendingProps,f=nt.current,g=!1,w=(s.flags&128)!==0,A;if((A=w)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Ke(nt,f&1),r===null)return jh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},!(h&1)&&g!==null?(g.childLanes=0,g.pendingProps=w):g=Hu(w,h,0,null),r=vs(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=md(a),s.memoizedState=pd,r):gd(s,w));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return M0(r,s,w,h,A,f,a);if(g){g=h.fallback,w=s.mode,f=r.child,A=f.sibling;var D={mode:"hidden",children:h.children};return!(w&1)&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=D,s.deletions=null):(h=wi(f,D),h.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=wi(A,g):(g=vs(g,w,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?md(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=pd,h}return g=r.child,r=g.sibling,h=wi(g,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function gd(r,s){return s=Hu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Nu(r,s,a,h){return h!==null&&$h(h),vo(s,r.child,null,a),r=gd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function M0(r,s,a,h,f,g,w){if(a)return s.flags&256?(s.flags&=-257,h=cd(Error(t(422))),Nu(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=Hu({mode:"visible",children:h.children},f,0,null),g=vs(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,s.mode&1&&vo(s,r.child,null,w),s.child.memoizedState=md(w),s.memoizedState=pd,g);if(!(s.mode&1))return Nu(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var A=h.dgst;return h=A,g=Error(t(419)),h=cd(g,h,void 0),Nu(r,s,w,h)}if(A=(w&r.childLanes)!==0,nn||A){if(h=kt,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(h.suspendedLanes|w)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Vr(r,f),Gn(h,r,f,-1))}return Dd(),h=cd(Error(t(421))),Nu(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=X0.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,gn=ui(f.nextSibling),mn=s,et=!0,Hn=null,r!==null&&(Cn[Rn++]=Or,Cn[Rn++]=Lr,Cn[Rn++]=cs,Or=r.id,Lr=r.overflow,cs=s),s=gd(s,h.children),s.flags|=4096,s)}function wg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),Kh(r.return,s,a)}function yd(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function Eg(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Gt(r,s,h.children,a),h=nt.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&wg(r,a,s);else if(r.tag===19)wg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(Ke(nt,h),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Su(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),yd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Su(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}yd(s,!0,a,null,g);break;case"together":yd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Du(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Fr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ms|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=wi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=wi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function F0(r,s,a){switch(s.tag){case 3:yg(s),_o();break;case 5:Lm(s);break;case 1:tn(s.type)&&pu(s);break;case 4:Xh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;Ke(wu,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(Ke(nt,nt.current&1),s.flags|=128,null):a&s.child.childLanes?vg(r,s,a):(Ke(nt,nt.current&1),r=Fr(r,s,a),r!==null?r.sibling:null);Ke(nt,nt.current&1);break;case 19:if(h=(a&s.childLanes)!==0,r.flags&128){if(h)return Eg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(nt,nt.current),h)break;return null;case 22:case 23:return s.lanes=0,pg(r,s,a)}return Fr(r,s,a)}var Tg,_d,Ig,Sg;Tg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},_d=function(){},Ig=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,fs(ur.current);var g=null;switch(a){case"input":f=qi(r,f),h=qi(r,h),g=[];break;case"select":f=oe({},f,{value:void 0}),h=oe({},h,{value:void 0}),g=[];break;case"textarea":f=ra(r,f),h=ra(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=hu)}ua(a,h);var w;a=null;for(H in f)if(!h.hasOwnProperty(H)&&f.hasOwnProperty(H)&&f[H]!=null)if(H==="style"){var A=f[H];for(w in A)A.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(o.hasOwnProperty(H)?g||(g=[]):(g=g||[]).push(H,null));for(H in h){var D=h[H];if(A=f!=null?f[H]:void 0,h.hasOwnProperty(H)&&D!==A&&(D!=null||A!=null))if(H==="style")if(A){for(w in A)!A.hasOwnProperty(w)||D&&D.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in D)D.hasOwnProperty(w)&&A[w]!==D[w]&&(a||(a={}),a[w]=D[w])}else a||(g||(g=[]),g.push(H,a)),a=D;else H==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,A=A?A.__html:void 0,D!=null&&A!==D&&(g=g||[]).push(H,D)):H==="children"?typeof D!="string"&&typeof D!="number"||(g=g||[]).push(H,""+D):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(o.hasOwnProperty(H)?(D!=null&&H==="onScroll"&&Xe("scroll",r),g||A===D||(g=[])):(g=g||[]).push(H,D))}a&&(g=g||[]).push("style",a);var H=g;(s.updateQueue=H)&&(s.flags|=4)}},Sg=function(r,s,a,h){a!==h&&(s.flags|=4)};function $a(r,s){if(!et)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Bt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function U0(r,s,a){var h=s.pendingProps;switch(Bh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(s),null;case 1:return tn(s.type)&&fu(),Bt(s),null;case 3:return h=s.stateNode,To(),Ye(en),Ye(Ft),Zh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(_u(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Hn!==null&&(Pd(Hn),Hn=null))),_d(r,s),Bt(s),null;case 5:Yh(s);var f=fs(Fa.current);if(a=s.type,r!==null&&s.stateNode!=null)Ig(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Bt(s),null}if(r=fs(ur.current),_u(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[lr]=s,h[ba]=g,r=(s.mode&1)!==0,a){case"dialog":Xe("cancel",h),Xe("close",h);break;case"iframe":case"object":case"embed":Xe("load",h);break;case"video":case"audio":for(f=0;f<xa.length;f++)Xe(xa[f],h);break;case"source":Xe("error",h);break;case"img":case"image":case"link":Xe("error",h),Xe("load",h);break;case"details":Xe("toggle",h);break;case"input":Vs(h,g),Xe("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Xe("invalid",h);break;case"textarea":Fs(h,g),Xe("invalid",h)}ua(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var A=g[w];w==="children"?typeof A=="string"?h.textContent!==A&&(g.suppressHydrationWarning!==!0&&cu(h.textContent,A,r),f=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&cu(h.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(w)&&A!=null&&w==="onScroll"&&Xe("scroll",h)}switch(a){case"input":Tr(h),Vl(h,g,!0);break;case"textarea":Tr(h),ia(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=hu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=_t(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[lr]=s,r[ba]=h,Tg(r,s,!1,!1),s.stateNode=r;e:{switch(w=ca(a,h),a){case"dialog":Xe("cancel",r),Xe("close",r),f=h;break;case"iframe":case"object":case"embed":Xe("load",r),f=h;break;case"video":case"audio":for(f=0;f<xa.length;f++)Xe(xa[f],r);f=h;break;case"source":Xe("error",r),f=h;break;case"img":case"image":case"link":Xe("error",r),Xe("load",r),f=h;break;case"details":Xe("toggle",r),f=h;break;case"input":Vs(r,h),f=qi(r,h),Xe("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=oe({},h,{value:void 0}),Xe("invalid",r);break;case"textarea":Fs(r,h),f=ra(r,h),Xe("invalid",r);break;default:f=h}ua(a,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var D=A[g];g==="style"?aa(r,D):g==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&sa(r,D)):g==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&Jr(r,D):typeof D=="number"&&Jr(r,""+D):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?D!=null&&g==="onScroll"&&Xe("scroll",r):D!=null&&G(r,g,D,w))}switch(a){case"input":Tr(r),Vl(r,h,!1);break;case"textarea":Tr(r),ia(r);break;case"option":h.value!=null&&r.setAttribute("value",""+Le(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?Sr(r,!!h.multiple,g,!1):h.defaultValue!=null&&Sr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=hu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Bt(s),null;case 6:if(r&&s.stateNode!=null)Sg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=fs(Fa.current),fs(ur.current),_u(s)){if(h=s.stateNode,a=s.memoizedProps,h[lr]=s,(g=h.nodeValue!==a)&&(r=mn,r!==null))switch(r.tag){case 3:cu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&cu(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[lr]=s,s.stateNode=h}return Bt(s),null;case 13:if(Ye(nt),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(et&&gn!==null&&s.mode&1&&!(s.flags&128))Am(),_o(),s.flags|=98560,g=!1;else if(g=_u(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[lr]=s}else _o(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Bt(s),g=!1}else Hn!==null&&(Pd(Hn),Hn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||nt.current&1?Tt===0&&(Tt=3):Dd())),s.updateQueue!==null&&(s.flags|=4),Bt(s),null);case 4:return To(),_d(r,s),r===null&&Na(s.stateNode.containerInfo),Bt(s),null;case 10:return qh(s.type._context),Bt(s),null;case 17:return tn(s.type)&&fu(),Bt(s),null;case 19:if(Ye(nt),g=s.memoizedState,g===null)return Bt(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)$a(g,!1);else{if(Tt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(w=Su(r),w!==null){for(s.flags|=128,$a(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ke(nt,nt.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>Ro&&(s.flags|=128,h=!0,$a(g,!1),s.lanes=4194304)}else{if(!h)if(r=Su(w),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),$a(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!et)return Bt(s),null}else 2*qe()-g.renderingStartTime>Ro&&a!==1073741824&&(s.flags|=128,h=!0,$a(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=nt.current,Ke(nt,h?a&1|2:a&1),s):(Bt(s),null);case 22:case 23:return Nd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?yn&1073741824&&(Bt(s),s.subtreeFlags&6&&(s.flags|=8192)):Bt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function B0(r,s){switch(Bh(s),s.tag){case 1:return tn(s.type)&&fu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return To(),Ye(en),Ye(Ft),Zh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Yh(s),null;case 13:if(Ye(nt),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));_o()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ye(nt),null;case 4:return To(),null;case 10:return qh(s.type._context),null;case 22:case 23:return Nd(),null;case 24:return null;default:return null}}var bu=!1,zt=!1,z0=typeof WeakSet=="function"?WeakSet:Set,ce=null;function So(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){at(r,s,h)}else a.current=null}function vd(r,s,a){try{a()}catch(h){at(r,s,h)}}var Cg=!1;function j0(r,s){if(Nh=oi,r=rm(),Ih(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,A=-1,D=-1,H=0,Z=0,ee=r,J=null;t:for(;;){for(var ae;ee!==a||f!==0&&ee.nodeType!==3||(A=w+f),ee!==g||h!==0&&ee.nodeType!==3||(D=w+h),ee.nodeType===3&&(w+=ee.nodeValue.length),(ae=ee.firstChild)!==null;)J=ee,ee=ae;for(;;){if(ee===r)break t;if(J===a&&++H===f&&(A=w),J===g&&++Z===h&&(D=w),(ae=ee.nextSibling)!==null)break;ee=J,J=ee.parentNode}ee=ae}a=A===-1||D===-1?null:{start:A,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dh={focusedElem:r,selectionRange:a},oi=!1,ce=s;ce!==null;)if(s=ce,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ce=r;else for(;ce!==null;){s=ce;try{var de=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,ht=de.memoizedState,z=s.stateNode,V=z.getSnapshotBeforeUpdate(s.elementType===s.type?fe:Wn(s.type,fe),ht);z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=s.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(re){at(s,s.return,re)}if(r=s.sibling,r!==null){r.return=s.return,ce=r;break}ce=s.return}return de=Cg,Cg=!1,de}function Ha(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&vd(s,a,g)}f=f.next}while(f!==h)}}function Ou(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function wd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Rg(r){var s=r.alternate;s!==null&&(r.alternate=null,Rg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[lr],delete s[ba],delete s[Vh],delete s[S0],delete s[C0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Ag(r){return r.tag===5||r.tag===3||r.tag===4}function kg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Ag(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ed(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=hu));else if(h!==4&&(r=r.child,r!==null))for(Ed(r,s,a),r=r.sibling;r!==null;)Ed(r,s,a),r=r.sibling}function Td(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(Td(r,s,a),r=r.sibling;r!==null;)Td(r,s,a),r=r.sibling}var bt=null,qn=!1;function mi(r,s,a){for(a=a.child;a!==null;)Pg(r,s,a),a=a.sibling}function Pg(r,s,a){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(ts,a)}catch{}switch(a.tag){case 5:zt||So(a,s);case 6:var h=bt,f=qn;bt=null,mi(r,s,a),bt=h,qn=f,bt!==null&&(qn?(r=bt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):bt.removeChild(a.stateNode));break;case 18:bt!==null&&(qn?(r=bt,a=a.stateNode,r.nodeType===8?Lh(r.parentNode,a):r.nodeType===1&&Lh(r,a),zn(r)):Lh(bt,a.stateNode));break;case 4:h=bt,f=qn,bt=a.stateNode.containerInfo,qn=!0,mi(r,s,a),bt=h,qn=f;break;case 0:case 11:case 14:case 15:if(!zt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&(g&2||g&4)&&vd(a,s,w),f=f.next}while(f!==h)}mi(r,s,a);break;case 1:if(!zt&&(So(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(A){at(a,s,A)}mi(r,s,a);break;case 21:mi(r,s,a);break;case 22:a.mode&1?(zt=(h=zt)||a.memoizedState!==null,mi(r,s,a),zt=h):mi(r,s,a);break;default:mi(r,s,a)}}function xg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new z0),s.forEach(function(h){var f=Y0.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function Kn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,w=s,A=w;e:for(;A!==null;){switch(A.tag){case 5:bt=A.stateNode,qn=!1;break e;case 3:bt=A.stateNode.containerInfo,qn=!0;break e;case 4:bt=A.stateNode.containerInfo,qn=!0;break e}A=A.return}if(bt===null)throw Error(t(160));Pg(g,w,f),bt=null,qn=!1;var D=f.alternate;D!==null&&(D.return=null),f.return=null}catch(H){at(f,s,H)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ng(s,r),s=s.sibling}function Ng(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Kn(s,r),hr(r),h&4){try{Ha(3,r,r.return),Ou(3,r)}catch(fe){at(r,r.return,fe)}try{Ha(5,r,r.return)}catch(fe){at(r,r.return,fe)}}break;case 1:Kn(s,r),hr(r),h&512&&a!==null&&So(a,a.return);break;case 5:if(Kn(s,r),hr(r),h&512&&a!==null&&So(a,a.return),r.flags&32){var f=r.stateNode;try{Jr(f,"")}catch(fe){at(r,r.return,fe)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,A=r.type,D=r.updateQueue;if(r.updateQueue=null,D!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&ta(f,g),ca(A,w);var H=ca(A,g);for(w=0;w<D.length;w+=2){var Z=D[w],ee=D[w+1];Z==="style"?aa(f,ee):Z==="dangerouslySetInnerHTML"?sa(f,ee):Z==="children"?Jr(f,ee):G(f,Z,ee,H)}switch(A){case"input":na(f,g);break;case"textarea":Us(f,g);break;case"select":var J=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ae=g.value;ae!=null?Sr(f,!!g.multiple,ae,!1):J!==!!g.multiple&&(g.defaultValue!=null?Sr(f,!!g.multiple,g.defaultValue,!0):Sr(f,!!g.multiple,g.multiple?[]:"",!1))}f[ba]=g}catch(fe){at(r,r.return,fe)}}break;case 6:if(Kn(s,r),hr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(fe){at(r,r.return,fe)}}break;case 3:if(Kn(s,r),hr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{zn(s.containerInfo)}catch(fe){at(r,r.return,fe)}break;case 4:Kn(s,r),hr(r);break;case 13:Kn(s,r),hr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Cd=qe())),h&4&&xg(r);break;case 22:if(Z=a!==null&&a.memoizedState!==null,r.mode&1?(zt=(H=zt)||Z,Kn(s,r),zt=H):Kn(s,r),hr(r),h&8192){if(H=r.memoizedState!==null,(r.stateNode.isHidden=H)&&!Z&&r.mode&1)for(ce=r,Z=r.child;Z!==null;){for(ee=ce=Z;ce!==null;){switch(J=ce,ae=J.child,J.tag){case 0:case 11:case 14:case 15:Ha(4,J,J.return);break;case 1:So(J,J.return);var de=J.stateNode;if(typeof de.componentWillUnmount=="function"){h=J,a=J.return;try{s=h,de.props=s.memoizedProps,de.state=s.memoizedState,de.componentWillUnmount()}catch(fe){at(h,a,fe)}}break;case 5:So(J,J.return);break;case 22:if(J.memoizedState!==null){Og(ee);continue}}ae!==null?(ae.return=J,ce=ae):Og(ee)}Z=Z.sibling}e:for(Z=null,ee=r;;){if(ee.tag===5){if(Z===null){Z=ee;try{f=ee.stateNode,H?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=ee.stateNode,D=ee.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null,A.style.display=oa("display",w))}catch(fe){at(r,r.return,fe)}}}else if(ee.tag===6){if(Z===null)try{ee.stateNode.nodeValue=H?"":ee.memoizedProps}catch(fe){at(r,r.return,fe)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===r)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===r)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===r)break e;Z===ee&&(Z=null),ee=ee.return}Z===ee&&(Z=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:Kn(s,r),hr(r),h&4&&xg(r);break;case 21:break;default:Kn(s,r),hr(r)}}function hr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Ag(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(Jr(f,""),h.flags&=-33);var g=kg(r);Td(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,A=kg(r);Ed(r,A,w);break;default:throw Error(t(161))}}catch(D){at(r,r.return,D)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function $0(r,s,a){ce=r,Dg(r)}function Dg(r,s,a){for(var h=(r.mode&1)!==0;ce!==null;){var f=ce,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||bu;if(!w){var A=f.alternate,D=A!==null&&A.memoizedState!==null||zt;A=bu;var H=zt;if(bu=w,(zt=D)&&!H)for(ce=f;ce!==null;)w=ce,D=w.child,w.tag===22&&w.memoizedState!==null?Lg(f):D!==null?(D.return=w,ce=D):Lg(f);for(;g!==null;)ce=g,Dg(g),g=g.sibling;ce=f,bu=A,zt=H}bg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,ce=g):bg(r)}}function bg(r){for(;ce!==null;){var s=ce;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:zt||Ou(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!zt)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:Wn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Om(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Om(s,w,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var D=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var H=s.alternate;if(H!==null){var Z=H.memoizedState;if(Z!==null){var ee=Z.dehydrated;ee!==null&&zn(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||s.flags&512&&wd(s)}catch(J){at(s,s.return,J)}}if(s===r){ce=null;break}if(a=s.sibling,a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Og(r){for(;ce!==null;){var s=ce;if(s===r){ce=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Lg(r){for(;ce!==null;){var s=ce;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Ou(4,s)}catch(D){at(s,a,D)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(D){at(s,f,D)}}var g=s.return;try{wd(s)}catch(D){at(s,g,D)}break;case 5:var w=s.return;try{wd(s)}catch(D){at(s,w,D)}}}catch(D){at(s,s.return,D)}if(s===r){ce=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ce=A;break}ce=s.return}}var H0=Math.ceil,Lu=ne.ReactCurrentDispatcher,Id=ne.ReactCurrentOwner,Pn=ne.ReactCurrentBatchConfig,Be=0,kt=null,pt=null,Ot=0,yn=0,Co=ci(0),Tt=0,Wa=null,ms=0,Vu=0,Sd=0,qa=null,rn=null,Cd=0,Ro=1/0,Ur=null,Mu=!1,Rd=null,gi=null,Fu=!1,yi=null,Uu=0,Ka=0,Ad=null,Bu=-1,zu=0;function Qt(){return Be&6?qe():Bu!==-1?Bu:Bu=qe()}function _i(r){return r.mode&1?Be&2&&Ot!==0?Ot&-Ot:A0.transition!==null?(zu===0&&(zu=rs()),zu):(r=Ve,r!==0||(r=window.event,r=r===void 0?16:Ea(r.type)),r):1}function Gn(r,s,a,h){if(50<Ka)throw Ka=0,Ad=null,Error(t(185));ni(r,a,h),(!(Be&2)||r!==kt)&&(r===kt&&(!(Be&2)&&(Vu|=a),Tt===4&&vi(r,Ot)),sn(r,h),a===1&&Be===0&&!(s.mode&1)&&(Ro=qe()+500,mu&&di()))}function sn(r,s){var a=r.callbackNode;Ar(r,s);var h=ns(r,r===kt?Ot:0);if(h===0)a!==null&&ga(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&ga(a),s===1)r.tag===0?R0(Mg.bind(null,r)):Tm(Mg.bind(null,r)),T0(function(){!(Be&6)&&di()}),a=null;else{switch(ii(h)){case 1:a=es;break;case 4:a=Zr;break;case 16:a=Tn;break;case 536870912:a=zl;break;default:a=Tn}a=Wg(a,Vg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Vg(r,s){if(Bu=-1,zu=0,Be&6)throw Error(t(327));var a=r.callbackNode;if(Ao()&&r.callbackNode!==a)return null;var h=ns(r,r===kt?Ot:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=ju(r,h);else{s=h;var f=Be;Be|=2;var g=Ug();(kt!==r||Ot!==s)&&(Ur=null,Ro=qe()+500,ys(r,s));do try{K0();break}catch(A){Fg(r,A)}while(!0);Wh(),Lu.current=g,Be=f,pt!==null?s=0:(kt=null,Ot=0,s=Tt)}if(s!==0){if(s===2&&(f=dn(r),f!==0&&(h=f,s=kd(r,f))),s===1)throw a=Wa,ys(r,0),vi(r,h),sn(r,qe()),a;if(s===6)vi(r,h);else{if(f=r.current.alternate,!(h&30)&&!W0(f)&&(s=ju(r,h),s===2&&(g=dn(r),g!==0&&(h=g,s=kd(r,g))),s===1))throw a=Wa,ys(r,0),vi(r,h),sn(r,qe()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:_s(r,rn,Ur);break;case 3:if(vi(r,h),(h&130023424)===h&&(s=Cd+500-qe(),10<s)){if(ns(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Oh(_s.bind(null,r,rn,Ur),s);break}_s(r,rn,Ur);break;case 4:if(vi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-qt(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=qe()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*H0(h/1960))-h,10<h){r.timeoutHandle=Oh(_s.bind(null,r,rn,Ur),h);break}_s(r,rn,Ur);break;case 5:_s(r,rn,Ur);break;default:throw Error(t(329))}}}return sn(r,qe()),r.callbackNode===a?Vg.bind(null,r):null}function kd(r,s){var a=qa;return r.current.memoizedState.isDehydrated&&(ys(r,s).flags|=256),r=ju(r,s),r!==2&&(s=rn,rn=a,s!==null&&Pd(s)),r}function Pd(r){rn===null?rn=r:rn.push.apply(rn,r)}function W0(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!$n(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function vi(r,s){for(s&=~Sd,s&=~Vu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-qt(s),h=1<<a;r[a]=-1,s&=~h}}function Mg(r){if(Be&6)throw Error(t(327));Ao();var s=ns(r,0);if(!(s&1))return sn(r,qe()),null;var a=ju(r,s);if(r.tag!==0&&a===2){var h=dn(r);h!==0&&(s=h,a=kd(r,h))}if(a===1)throw a=Wa,ys(r,0),vi(r,s),sn(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,_s(r,rn,Ur),sn(r,qe()),null}function xd(r,s){var a=Be;Be|=1;try{return r(s)}finally{Be=a,Be===0&&(Ro=qe()+500,mu&&di())}}function gs(r){yi!==null&&yi.tag===0&&!(Be&6)&&Ao();var s=Be;Be|=1;var a=Pn.transition,h=Ve;try{if(Pn.transition=null,Ve=1,r)return r()}finally{Ve=h,Pn.transition=a,Be=s,!(Be&6)&&di()}}function Nd(){yn=Co.current,Ye(Co)}function ys(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,E0(a)),pt!==null)for(a=pt.return;a!==null;){var h=a;switch(Bh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&fu();break;case 3:To(),Ye(en),Ye(Ft),Zh();break;case 5:Yh(h);break;case 4:To();break;case 13:Ye(nt);break;case 19:Ye(nt);break;case 10:qh(h.type._context);break;case 22:case 23:Nd()}a=a.return}if(kt=r,pt=r=wi(r.current,null),Ot=yn=s,Tt=0,Wa=null,Sd=Vu=ms=0,rn=qa=null,ds!==null){for(s=0;s<ds.length;s++)if(a=ds[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}a.pending=h}ds=null}return r}function Fg(r,s){do{var a=pt;try{if(Wh(),Cu.current=Pu,Ru){for(var h=rt.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}Ru=!1}if(ps=0,At=Et=rt=null,Ua=!1,Ba=0,Id.current=null,a===null||a.return===null){Tt=1,Wa=s,pt=null;break}e:{var g=r,w=a.return,A=a,D=s;if(s=Ot,A.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var H=D,Z=A,ee=Z.tag;if(!(Z.mode&1)&&(ee===0||ee===11||ee===15)){var J=Z.alternate;J?(Z.updateQueue=J.updateQueue,Z.memoizedState=J.memoizedState,Z.lanes=J.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var ae=ug(w);if(ae!==null){ae.flags&=-257,cg(ae,w,A,g,s),ae.mode&1&&lg(g,H,s),s=ae,D=H;var de=s.updateQueue;if(de===null){var fe=new Set;fe.add(D),s.updateQueue=fe}else de.add(D);break e}else{if(!(s&1)){lg(g,H,s),Dd();break e}D=Error(t(426))}}else if(et&&A.mode&1){var ht=ug(w);if(ht!==null){!(ht.flags&65536)&&(ht.flags|=256),cg(ht,w,A,g,s),$h(Io(D,A));break e}}g=D=Io(D,A),Tt!==4&&(Tt=2),qa===null?qa=[g]:qa.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var z=og(g,D,s);bm(g,z);break e;case 1:A=D;var V=g.type,$=g.stateNode;if(!(g.flags&128)&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(gi===null||!gi.has($)))){g.flags|=65536,s&=-s,g.lanes|=s;var re=ag(g,A,s);bm(g,re);break e}}g=g.return}while(g!==null)}zg(a)}catch(me){s=me,pt===a&&a!==null&&(pt=a=a.return);continue}break}while(!0)}function Ug(){var r=Lu.current;return Lu.current=Pu,r===null?Pu:r}function Dd(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),kt===null||!(ms&268435455)&&!(Vu&268435455)||vi(kt,Ot)}function ju(r,s){var a=Be;Be|=2;var h=Ug();(kt!==r||Ot!==s)&&(Ur=null,ys(r,s));do try{q0();break}catch(f){Fg(r,f)}while(!0);if(Wh(),Be=a,Lu.current=h,pt!==null)throw Error(t(261));return kt=null,Ot=0,Tt}function q0(){for(;pt!==null;)Bg(pt)}function K0(){for(;pt!==null&&!Ul();)Bg(pt)}function Bg(r){var s=Hg(r.alternate,r,yn);r.memoizedProps=r.pendingProps,s===null?zg(r):pt=s,Id.current=null}function zg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=B0(a,s),a!==null){a.flags&=32767,pt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Tt=6,pt=null;return}}else if(a=U0(a,s,yn),a!==null){pt=a;return}if(s=s.sibling,s!==null){pt=s;return}pt=s=r}while(s!==null);Tt===0&&(Tt=5)}function _s(r,s,a){var h=Ve,f=Pn.transition;try{Pn.transition=null,Ve=1,G0(r,s,a,h)}finally{Pn.transition=f,Ve=h}return null}function G0(r,s,a,h){do Ao();while(yi!==null);if(Be&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(We(r,g),r===kt&&(pt=kt=null,Ot=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Fu||(Fu=!0,Wg(Tn,function(){return Ao(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=Pn.transition,Pn.transition=null;var w=Ve;Ve=1;var A=Be;Be|=4,Id.current=null,j0(r,a),Ng(a,r),p0(Dh),oi=!!Nh,Dh=Nh=null,r.current=a,$0(a),mh(),Be=A,Ve=w,Pn.transition=g}else r.current=a;if(Fu&&(Fu=!1,yi=r,Uu=f),g=r.pendingLanes,g===0&&(gi=null),jl(a.stateNode),sn(r,qe()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Mu)throw Mu=!1,r=Rd,Rd=null,r;return Uu&1&&r.tag!==0&&Ao(),g=r.pendingLanes,g&1?r===Ad?Ka++:(Ka=0,Ad=r):Ka=0,di(),null}function Ao(){if(yi!==null){var r=ii(Uu),s=Pn.transition,a=Ve;try{if(Pn.transition=null,Ve=16>r?16:r,yi===null)var h=!1;else{if(r=yi,yi=null,Uu=0,Be&6)throw Error(t(331));var f=Be;for(Be|=4,ce=r.current;ce!==null;){var g=ce,w=g.child;if(ce.flags&16){var A=g.deletions;if(A!==null){for(var D=0;D<A.length;D++){var H=A[D];for(ce=H;ce!==null;){var Z=ce;switch(Z.tag){case 0:case 11:case 15:Ha(8,Z,g)}var ee=Z.child;if(ee!==null)ee.return=Z,ce=ee;else for(;ce!==null;){Z=ce;var J=Z.sibling,ae=Z.return;if(Rg(Z),Z===H){ce=null;break}if(J!==null){J.return=ae,ce=J;break}ce=ae}}}var de=g.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var ht=fe.sibling;fe.sibling=null,fe=ht}while(fe!==null)}}ce=g}}if(g.subtreeFlags&2064&&w!==null)w.return=g,ce=w;else e:for(;ce!==null;){if(g=ce,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Ha(9,g,g.return)}var z=g.sibling;if(z!==null){z.return=g.return,ce=z;break e}ce=g.return}}var V=r.current;for(ce=V;ce!==null;){w=ce;var $=w.child;if(w.subtreeFlags&2064&&$!==null)$.return=w,ce=$;else e:for(w=V;ce!==null;){if(A=ce,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:Ou(9,A)}}catch(me){at(A,A.return,me)}if(A===w){ce=null;break e}var re=A.sibling;if(re!==null){re.return=A.return,ce=re;break e}ce=A.return}}if(Be=f,di(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(ts,r)}catch{}h=!0}return h}finally{Ve=a,Pn.transition=s}}return!1}function jg(r,s,a){s=Io(a,s),s=og(r,s,1),r=pi(r,s,1),s=Qt(),r!==null&&(ni(r,1,s),sn(r,s))}function at(r,s,a){if(r.tag===3)jg(r,r,a);else for(;s!==null;){if(s.tag===3){jg(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(gi===null||!gi.has(h))){r=Io(a,r),r=ag(s,r,1),s=pi(s,r,1),r=Qt(),s!==null&&(ni(s,1,r),sn(s,r));break}}s=s.return}}function Q0(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Qt(),r.pingedLanes|=r.suspendedLanes&a,kt===r&&(Ot&a)===a&&(Tt===4||Tt===3&&(Ot&130023424)===Ot&&500>qe()-Cd?ys(r,0):Sd|=a),sn(r,s)}function $g(r,s){s===0&&(r.mode&1?(s=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):s=1);var a=Qt();r=Vr(r,s),r!==null&&(ni(r,s,a),sn(r,a))}function X0(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),$g(r,a)}function Y0(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),$g(r,a)}var Hg;Hg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||en.current)nn=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return nn=!1,F0(r,s,a);nn=!!(r.flags&131072)}else nn=!1,et&&s.flags&1048576&&Im(s,yu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Du(r,s),r=s.pendingProps;var f=mo(s,Ft.current);Eo(s,a),f=nd(null,s,h,r,f,a);var g=rd();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,tn(h)?(g=!0,pu(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Qh(s),f.updater=xu,s.stateNode=f,f._reactInternals=s,ud(s,h,r,a),s=fd(null,s,h,!0,g,a)):(s.tag=0,et&&g&&Uh(s),Gt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(Du(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=Z0(h),r=Wn(h,r),f){case 0:s=dd(null,s,h,r,a);break e;case 1:s=gg(null,s,h,r,a);break e;case 11:s=hg(null,s,h,r,a);break e;case 14:s=dg(null,s,h,Wn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Wn(h,f),dd(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Wn(h,f),gg(r,s,h,f,a);case 3:e:{if(yg(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,Dm(r,s),Iu(s,h,null,a);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=Io(Error(t(423)),s),s=_g(r,s,h,a,f);break e}else if(h!==f){f=Io(Error(t(424)),s),s=_g(r,s,h,a,f);break e}else for(gn=ui(s.stateNode.containerInfo.firstChild),mn=s,et=!0,Hn=null,a=xm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_o(),h===f){s=Fr(r,s,a);break e}Gt(r,s,h,a)}s=s.child}return s;case 5:return Lm(s),r===null&&jh(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,bh(h,f)?w=null:g!==null&&bh(h,g)&&(s.flags|=32),mg(r,s),Gt(r,s,w,a),s.child;case 6:return r===null&&jh(s),null;case 13:return vg(r,s,a);case 4:return Xh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=vo(s,null,h,a):Gt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Wn(h,f),hg(r,s,h,f,a);case 7:return Gt(r,s,s.pendingProps,a),s.child;case 8:return Gt(r,s,s.pendingProps.children,a),s.child;case 12:return Gt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,Ke(wu,h._currentValue),h._currentValue=w,g!==null)if($n(g.value,w)){if(g.children===f.children&&!en.current){s=Fr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){w=g.child;for(var D=A.firstContext;D!==null;){if(D.context===h){if(g.tag===1){D=Mr(-1,a&-a),D.tag=2;var H=g.updateQueue;if(H!==null){H=H.shared;var Z=H.pending;Z===null?D.next=D:(D.next=Z.next,Z.next=D),H.pending=D}}g.lanes|=a,D=g.alternate,D!==null&&(D.lanes|=a),Kh(g.return,a,s),A.lanes|=a;break}D=D.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,A=w.alternate,A!==null&&(A.lanes|=a),Kh(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Gt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,Eo(s,a),f=An(f),h=h(f),s.flags|=1,Gt(r,s,h,a),s.child;case 14:return h=s.type,f=Wn(h,s.pendingProps),f=Wn(h.type,f),dg(r,s,h,f,a);case 15:return fg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:Wn(h,f),Du(r,s),s.tag=1,tn(h)?(r=!0,pu(s)):r=!1,Eo(s,a),ig(s,h,f),ud(s,h,f,a),fd(null,s,h,!0,r,a);case 19:return Eg(r,s,a);case 22:return pg(r,s,a)}throw Error(t(156,s.tag))};function Wg(r,s){return Ks(r,s)}function J0(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(r,s,a,h){return new J0(r,s,a,h)}function bd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function Z0(r){if(typeof r=="function")return bd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===N)return 11;if(r===Ge)return 14}return 2}function wi(r,s){var a=r.alternate;return a===null?(a=xn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function $u(r,s,a,h,f,g){var w=2;if(h=r,typeof r=="function")bd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case k:return vs(a.children,f,g,s);case S:w=8,f|=8;break;case C:return r=xn(12,a,s,f|2),r.elementType=C,r.lanes=g,r;case R:return r=xn(13,a,s,f),r.elementType=R,r.lanes=g,r;case xe:return r=xn(19,a,s,f),r.elementType=xe,r.lanes=g,r;case ke:return Hu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case P:w=10;break e;case O:w=9;break e;case N:w=11;break e;case Ge:w=14;break e;case Qe:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=xn(w,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function vs(r,s,a,h){return r=xn(7,r,h,s),r.lanes=a,r}function Hu(r,s,a,h){return r=xn(22,r,h,s),r.elementType=ke,r.lanes=a,r.stateNode={isHidden:!1},r}function Od(r,s,a){return r=xn(6,r,null,s),r.lanes=a,r}function Ld(r,s,a){return s=xn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function eT(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Vd(r,s,a,h,f,g,w,A,D){return r=new eT(r,s,a,A,D),s===1?(s=1,g===!0&&(s|=8)):s=0,g=xn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qh(g),r}function tT(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function qg(r){if(!r)return hi;r=r._reactInternals;e:{if(Vn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(tn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(tn(a))return wm(r,a,s)}return s}function Kg(r,s,a,h,f,g,w,A,D){return r=Vd(a,h,!0,r,f,g,w,A,D),r.context=qg(null),a=r.current,h=Qt(),f=_i(a),g=Mr(h,f),g.callback=s??null,pi(a,g,f),r.current.lanes=f,ni(r,f,h),sn(r,h),r}function Wu(r,s,a,h){var f=s.current,g=Qt(),w=_i(f);return a=qg(a),s.context===null?s.context=a:s.pendingContext=a,s=Mr(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=pi(f,s,w),r!==null&&(Gn(r,f,w,g),Tu(r,f,w)),w}function qu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Gg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Md(r,s){Gg(r,s),(r=r.alternate)&&Gg(r,s)}function nT(){return null}var Qg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Fd(r){this._internalRoot=r}Ku.prototype.render=Fd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));Wu(r,s,null,null)},Ku.prototype.unmount=Fd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;gs(function(){Wu(null,r,null,null)}),s[Dr]=null}};function Ku(r){this._internalRoot=r}Ku.prototype.unstable_scheduleHydration=function(r){if(r){var s=Kl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<ir.length&&s!==0&&s<ir[a].priority;a++);ir.splice(a,0,r),a===0&&Xl(r)}};function Ud(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Gu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Xg(){}function rT(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var H=qu(w);g.call(H)}}var w=Kg(s,h,r,0,null,!1,!1,"",Xg);return r._reactRootContainer=w,r[Dr]=w.current,Na(r.nodeType===8?r.parentNode:r),gs(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var A=h;h=function(){var H=qu(D);A.call(H)}}var D=Vd(r,0,!1,null,null,!1,!1,"",Xg);return r._reactRootContainer=D,r[Dr]=D.current,Na(r.nodeType===8?r.parentNode:r),gs(function(){Wu(s,D,a,h)}),D}function Qu(r,s,a,h,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var A=f;f=function(){var D=qu(w);A.call(D)}}Wu(s,w,r,f)}else w=rT(a,s,r,f,h);return qu(w)}Wl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=ei(s.pendingLanes);a!==0&&(ri(s,a|1),sn(s,qe()),!(Be&6)&&(Ro=qe()+500,di()))}break;case 13:gs(function(){var h=Vr(r,1);if(h!==null){var f=Qt();Gn(h,r,1,f)}}),Md(r,1)}},Xs=function(r){if(r.tag===13){var s=Vr(r,134217728);if(s!==null){var a=Qt();Gn(s,r,134217728,a)}Md(r,134217728)}},ql=function(r){if(r.tag===13){var s=_i(r),a=Vr(r,s);if(a!==null){var h=Qt();Gn(a,r,s,h)}Md(r,s)}},Kl=function(){return Ve},Gl=function(r,s){var a=Ve;try{return Ve=r,s()}finally{Ve=a}},zs=function(r,s,a){switch(s){case"input":if(na(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=du(h);if(!f)throw Error(t(90));Ls(h),na(h,f)}}}break;case"textarea":Us(r,a);break;case"select":s=a.value,s!=null&&Sr(r,!!a.multiple,s,!1)}},Xi=xd,da=gs;var iT={usingClientEntryPoint:!1,Events:[Oa,fo,du,nr,ha,xd]},Ga={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sT={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ma(r),r===null?null:r.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||nT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{ts=Xu.inject(sT),hn=Xu}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iT,on.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(s))throw Error(t(200));return tT(r,s,null,a)},on.createRoot=function(r,s){if(!Ud(r))throw Error(t(299));var a=!1,h="",f=Qg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=Vd(r,1,!1,null,null,a,!1,h,f),r[Dr]=s.current,Na(r.nodeType===8?r.parentNode:r),new Fd(s)},on.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ma(s),r=r===null?null:r.stateNode,r},on.flushSync=function(r){return gs(r)},on.hydrate=function(r,s,a){if(!Gu(s))throw Error(t(200));return Qu(null,r,s,!0,a)},on.hydrateRoot=function(r,s,a){if(!Ud(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",w=Qg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Kg(s,null,r,1,a??null,f,!1,g,w),r[Dr]=s.current,Na(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Ku(s)},on.render=function(r,s,a){if(!Gu(s))throw Error(t(200));return Qu(null,r,s,!1,a)},on.unmountComponentAtNode=function(r){if(!Gu(r))throw Error(t(40));return r._reactRootContainer?(gs(function(){Qu(null,null,r,!1,function(){r._reactRootContainer=null,r[Dr]=null})}),!0):!1},on.unstable_batchedUpdates=xd,on.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Gu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Qu(r,s,a,!1,h)},on.version="18.3.1-next-f1338f8080-20240426",on}var ny;function hT(){if(ny)return zd.exports;ny=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),zd.exports=cT(),zd.exports}var ry;function dT(){if(ry)return Yu;ry=1;var n=hT();return Yu.createRoot=n.createRoot,Yu.hydrateRoot=n.hydrateRoot,Yu}var fT=dT(),Qa={},iy;function pT(){if(iy)return Qa;iy=1,Object.defineProperty(Qa,"__esModule",{value:!0}),Qa.parse=c,Qa.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function c(I,x){const U=new l,j=I.length;if(j<2)return U;const F=(x==null?void 0:x.decode)||v;let q=0;do{const Y=I.indexOf("=",q);if(Y===-1)break;const G=I.indexOf(";",q),ne=G===-1?j:G;if(Y>ne){q=I.lastIndexOf(";",Y-1)+1;continue}const _e=d(I,q,Y),ge=p(I,Y,_e),k=I.slice(_e,ge);if(U[k]===void 0){let S=d(I,Y+1,ne),C=p(I,ne,S);const P=F(I.slice(S,C));U[k]=P}q=ne+1}while(q<j);return U}function d(I,x,U){do{const j=I.charCodeAt(x);if(j!==32&&j!==9)return x}while(++x<U);return U}function p(I,x,U){for(;x>U;){const j=I.charCodeAt(--x);if(j!==32&&j!==9)return x+1}return U}function y(I,x,U){const j=(U==null?void 0:U.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const F=j(x);if(!e.test(F))throw new TypeError(`argument val is invalid: ${x}`);let q=I+"="+F;if(!U)return q;if(U.maxAge!==void 0){if(!Number.isInteger(U.maxAge))throw new TypeError(`option maxAge is invalid: ${U.maxAge}`);q+="; Max-Age="+U.maxAge}if(U.domain){if(!t.test(U.domain))throw new TypeError(`option domain is invalid: ${U.domain}`);q+="; Domain="+U.domain}if(U.path){if(!i.test(U.path))throw new TypeError(`option path is invalid: ${U.path}`);q+="; Path="+U.path}if(U.expires){if(!T(U.expires)||!Number.isFinite(U.expires.valueOf()))throw new TypeError(`option expires is invalid: ${U.expires}`);q+="; Expires="+U.expires.toUTCString()}if(U.httpOnly&&(q+="; HttpOnly"),U.secure&&(q+="; Secure"),U.partitioned&&(q+="; Partitioned"),U.priority)switch(typeof U.priority=="string"?U.priority.toLowerCase():void 0){case"low":q+="; Priority=Low";break;case"medium":q+="; Priority=Medium";break;case"high":q+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${U.priority}`)}if(U.sameSite)switch(typeof U.sameSite=="string"?U.sameSite.toLowerCase():U.sameSite){case!0:case"strict":q+="; SameSite=Strict";break;case"lax":q+="; SameSite=Lax";break;case"none":q+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${U.sameSite}`)}return q}function v(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return Qa}pT();/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var sy="popstate";function mT(n={}){function e(i,o){let{pathname:l,search:c,hash:d}=i.location;return af("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:hl(o)}return yT(e,t,null,n)}function tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Qn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gT(){return Math.random().toString(36).substring(2,10)}function oy(n,e){return{usr:n.state,key:n.key,idx:e}}function af(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Wo(e):e,state:t,key:e&&e.key||i||gT()}}function hl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Wo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function yT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d="POP",p=null,y=v();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function v(){return(c.state||{idx:null}).idx}function T(){d="POP";let F=v(),q=F==null?null:F-y;y=F,p&&p({action:d,location:j.location,delta:q})}function I(F,q){d="PUSH";let Y=af(j.location,F,q);y=v()+1;let G=oy(Y,y),ne=j.createHref(Y);try{c.pushState(G,"",ne)}catch(_e){if(_e instanceof DOMException&&_e.name==="DataCloneError")throw _e;o.location.assign(ne)}l&&p&&p({action:d,location:j.location,delta:1})}function x(F,q){d="REPLACE";let Y=af(j.location,F,q);y=v();let G=oy(Y,y),ne=j.createHref(Y);c.replaceState(G,"",ne),l&&p&&p({action:d,location:j.location,delta:0})}function U(F){let q=o.location.origin!=="null"?o.location.origin:o.location.href,Y=typeof F=="string"?F:hl(F);return Y=Y.replace(/ $/,"%20"),tt(q,`No window.location.(origin|href) available to create URL for href: ${Y}`),new URL(Y,q)}let j={get action(){return d},get location(){return n(o,c)},listen(F){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(sy,T),p=F,()=>{o.removeEventListener(sy,T),p=null}},createHref(F){return e(o,F)},createURL:U,encodeLocation(F){let q=U(F);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:I,replace:x,go(F){return c.go(F)}};return j}function q_(n,e,t="/"){return _T(n,e,t,!1)}function _T(n,e,t,i){let o=typeof e=="string"?Wo(e):e,l=bi(o.pathname||"/",t);if(l==null)return null;let c=K_(n);vT(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=xT(l);d=kT(c[p],y,i)}return d}function K_(n,e=[],t=[],i=""){let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(tt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=$r([i,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(tt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),K_(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:RT(y,l.index),routesMeta:v})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of G_(l.path))o(l,c,p)}),e}function G_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=G_(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function vT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:AT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var wT=/^:[\w-]+$/,ET=3,TT=2,IT=1,ST=10,CT=-2,ay=n=>n==="*";function RT(n,e){let t=n.split("/"),i=t.length;return t.some(ay)&&(i+=CT),e&&(i+=TT),t.filter(o=>!ay(o)).reduce((o,l)=>o+(wT.test(l)?ET:l===""?IT:ST),i)}function AT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function kT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",T=vc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=vc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:$r([l,T.pathname]),pathnameBase:OT($r([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=$r([l,T.pathnameBase]))}return c}function vc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=PT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:v,isOptional:T},I)=>{if(v==="*"){let U=d[I]||"";c=l.slice(0,l.length-U.length).replace(/(.)\/+$/,"$1")}const x=d[I];return T&&!x?y[v]=void 0:y[v]=(x||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function PT(n,e=!1,t=!0){Qn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function xT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function bi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function NT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?Wo(n):n;return{pathname:t?t.startsWith("/")?t:DT(t,e):e,search:LT(i),hash:VT(o)}}function DT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Hd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Mf(n){let e=bT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Ff(n,e,t,i=!1){let o;typeof n=="string"?o=Wo(n):(o={...n},tt(!o.pathname||!o.pathname.includes("?"),Hd("?","pathname","search",o)),tt(!o.pathname||!o.pathname.includes("#"),Hd("#","pathname","hash",o)),tt(!o.search||!o.search.includes("#"),Hd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}d=T>=0?e[T]:"/"}let p=NT(o,d),y=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}var $r=n=>n.join("/").replace(/\/\/+/g,"/"),OT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),LT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,VT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function MT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Q_=["POST","PUT","PATCH","DELETE"];new Set(Q_);var FT=["GET",...Q_];new Set(FT);var qo=M.createContext(null);qo.displayName="DataRouter";var jc=M.createContext(null);jc.displayName="DataRouterState";var X_=M.createContext({isTransitioning:!1});X_.displayName="ViewTransition";var UT=M.createContext(new Map);UT.displayName="Fetchers";var BT=M.createContext(null);BT.displayName="Await";var Zn=M.createContext(null);Zn.displayName="Navigation";var El=M.createContext(null);El.displayName="Location";var bn=M.createContext({outlet:null,matches:[],isDataRoute:!1});bn.displayName="Route";var Uf=M.createContext(null);Uf.displayName="RouteError";function zT(n,{relative:e}={}){tt(Ko(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=M.useContext(Zn),{hash:o,pathname:l,search:c}=Tl(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:$r([t,l])),i.createHref({pathname:d,search:c,hash:o})}function Ko(){return M.useContext(El)!=null}function zi(){return tt(Ko(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(El).location}var Y_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function J_(n){M.useContext(Zn).static||M.useLayoutEffect(n)}function wn(){let{isDataRoute:n}=M.useContext(bn);return n?rI():jT()}function jT(){tt(Ko(),"useNavigate() may be used only in the context of a <Router> component.");let n=M.useContext(qo),{basename:e,navigator:t}=M.useContext(Zn),{matches:i}=M.useContext(bn),{pathname:o}=zi(),l=JSON.stringify(Mf(i)),c=M.useRef(!1);return J_(()=>{c.current=!0}),M.useCallback((p,y={})=>{if(Qn(c.current,Y_),!c.current)return;if(typeof p=="number"){t.go(p);return}let v=Ff(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:$r([e,v.pathname])),(y.replace?t.replace:t.push)(v,y.state,y)},[e,t,l,o,n])}var $T=M.createContext(null);function HT(n){let e=M.useContext(bn).outlet;return e&&M.createElement($T.Provider,{value:n},e)}function WT(){let{matches:n}=M.useContext(bn),e=n[n.length-1];return e?e.params:{}}function Tl(n,{relative:e}={}){let{matches:t}=M.useContext(bn),{pathname:i}=zi(),o=JSON.stringify(Mf(t));return M.useMemo(()=>Ff(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function qT(n,e){return Z_(n,e)}function Z_(n,e,t,i){var Y;tt(Ko(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=M.useContext(Zn),{matches:c}=M.useContext(bn),d=c[c.length-1],p=d?d.params:{},y=d?d.pathname:"/",v=d?d.pathnameBase:"/",T=d&&d.route;{let G=T&&T.path||"";ev(y,!T||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let I=zi(),x;if(e){let G=typeof e=="string"?Wo(e):e;tt(v==="/"||((Y=G.pathname)==null?void 0:Y.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${G.pathname}" was given in the \`location\` prop.`),x=G}else x=I;let U=x.pathname||"/",j=U;if(v!=="/"){let G=v.replace(/^\//,"").split("/");j="/"+U.replace(/^\//,"").split("/").slice(G.length).join("/")}let F=!l&&t&&t.matches&&t.matches.length>0?t.matches:q_(n,{pathname:j});Qn(T||F!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Qn(F==null||F[F.length-1].route.element!==void 0||F[F.length-1].route.Component!==void 0||F[F.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let q=YT(F&&F.map(G=>Object.assign({},G,{params:Object.assign({},p,G.params),pathname:$r([v,o.encodeLocation?o.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?v:$r([v,o.encodeLocation?o.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),c,t,i);return e&&q?M.createElement(El.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},q):q}function KT(){let n=nI(),e=MT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:l},"ErrorBoundary")," or"," ",M.createElement("code",{style:l},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),t?M.createElement("pre",{style:o},t):null,c)}var GT=M.createElement(KT,null),QT=class extends M.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?M.createElement(bn.Provider,{value:this.props.routeContext},M.createElement(Uf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function XT({routeContext:n,match:e,children:t}){let i=M.useContext(qo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),M.createElement(bn.Provider,{value:n},t)}function YT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);tt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:v,errors:T}=t,I=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,v)=>{let T,I=!1,x=null,U=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,x=y.route.errorElement||GT,c&&(d<0&&v===0?(ev("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,U=null):d===v&&(I=!0,U=y.route.hydrateFallbackElement||null)));let j=e.concat(o.slice(0,v+1)),F=()=>{let q;return T?q=x:I?q=U:y.route.Component?q=M.createElement(y.route.Component,null):y.route.element?q=y.route.element:q=p,M.createElement(XT,{match:y,routeContext:{outlet:p,matches:j,isDataRoute:t!=null},children:q})};return t&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?M.createElement(QT,{location:t.location,revalidation:t.revalidation,component:x,error:T,children:F(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):F()},null)}function Bf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JT(n){let e=M.useContext(qo);return tt(e,Bf(n)),e}function ZT(n){let e=M.useContext(jc);return tt(e,Bf(n)),e}function eI(n){let e=M.useContext(bn);return tt(e,Bf(n)),e}function zf(n){let e=eI(n),t=e.matches[e.matches.length-1];return tt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function tI(){return zf("useRouteId")}function nI(){var i;let n=M.useContext(Uf),e=ZT("useRouteError"),t=zf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function rI(){let{router:n}=JT("useNavigate"),e=zf("useNavigate"),t=M.useRef(!1);return J_(()=>{t.current=!0}),M.useCallback(async(o,l={})=>{Qn(t.current,Y_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var ly={};function ev(n,e,t){!e&&!ly[n]&&(ly[n]=!0,Qn(!1,t))}M.memo(iI);function iI({routes:n,future:e,state:t}){return Z_(n,void 0,t,e)}function tv({to:n,replace:e,state:t,relative:i}){tt(Ko(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=M.useContext(Zn);Qn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=M.useContext(bn),{pathname:c}=zi(),d=wn(),p=Ff(n,Mf(l),c,i==="path"),y=JSON.stringify(p);return M.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function nv(n){return HT(n.context)}function Nn(n){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sI({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){tt(!Ko(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=M.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=Wo(t));let{pathname:p="/",search:y="",hash:v="",state:T=null,key:I="default"}=t,x=M.useMemo(()=>{let U=bi(p,c);return U==null?null:{location:{pathname:U,search:y,hash:v,state:T,key:I},navigationType:i}},[c,p,y,v,T,I,i]);return Qn(x!=null,`<Router basename="${c}"> is not able to match the URL "${p}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:M.createElement(Zn.Provider,{value:d},M.createElement(El.Provider,{children:e,value:x}))}function oI({children:n,location:e}){return qT(lf(n),e)}function lf(n,e=[]){let t=[];return M.Children.forEach(n,(i,o)=>{if(!M.isValidElement(i))return;let l=[...e,o];if(i.type===M.Fragment){t.push.apply(t,lf(i.props.children,l));return}tt(i.type===Nn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=lf(i.props.children,l)),t.push(c)}),t}var ac="get",lc="application/x-www-form-urlencoded";function $c(n){return n!=null&&typeof n.tagName=="string"}function aI(n){return $c(n)&&n.tagName.toLowerCase()==="button"}function lI(n){return $c(n)&&n.tagName.toLowerCase()==="form"}function uI(n){return $c(n)&&n.tagName.toLowerCase()==="input"}function cI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function hI(n,e){return n.button===0&&(!e||e==="_self")&&!cI(n)}var Ju=null;function dI(){if(Ju===null)try{new FormData(document.createElement("form"),0),Ju=!1}catch{Ju=!0}return Ju}var fI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wd(n){return n!=null&&!fI.has(n)?(Qn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lc}"`),null):n}function pI(n,e){let t,i,o,l,c;if(lI(n)){let d=n.getAttribute("action");i=d?bi(d,e):null,t=n.getAttribute("method")||ac,o=Wd(n.getAttribute("enctype"))||lc,l=new FormData(n)}else if(aI(n)||uI(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?bi(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||ac,o=Wd(n.getAttribute("formenctype"))||Wd(d.getAttribute("enctype"))||lc,l=new FormData(d,n),!dI()){let{name:y,type:v,value:T}=n;if(v==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if($c(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=ac,i=null,o=lc,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:c}}function jf(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function mI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gI(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function yI(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await mI(l,t);return c.links?c.links():[]}return[]}));return EI(i.flat(1).filter(gI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function uy(n,e,t,i,o,l){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var v;return t[y].pathname!==p.pathname||((v=t[y].route.path)==null?void 0:v.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>c(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var T;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function _I(n,e,{includeHydrateFallback:t}={}){return vI(n.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function vI(n){return[...new Set(n)]}function wI(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function EI(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(wI(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function TI(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function II(){let n=M.useContext(qo);return jf(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function SI(){let n=M.useContext(jc);return jf(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var $f=M.createContext(void 0);$f.displayName="FrameworkContext";function rv(){let n=M.useContext($f);return jf(n,"You must render this element inside a <HydratedRouter> element"),n}function CI(n,e){let t=M.useContext($f),[i,o]=M.useState(!1),[l,c]=M.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:v,onTouchStart:T}=e,I=M.useRef(null);M.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let j=q=>{q.forEach(Y=>{c(Y.isIntersecting)})},F=new IntersectionObserver(j,{threshold:.5});return I.current&&F.observe(I.current),()=>{F.disconnect()}}},[n]),M.useEffect(()=>{if(i){let j=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(j)}}},[i]);let x=()=>{o(!0)},U=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:Xa(d,x),onBlur:Xa(p,U),onMouseEnter:Xa(y,x),onMouseLeave:Xa(v,U),onTouchStart:Xa(T,x)}]:[!1,I,{}]}function Xa(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function RI({page:n,...e}){let{router:t}=II(),i=M.useMemo(()=>q_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?M.createElement(kI,{page:n,matches:i,...e}):null}function AI(n){let{manifest:e,routeModules:t}=rv(),[i,o]=M.useState([]);return M.useEffect(()=>{let l=!1;return yI(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),i}function kI({page:n,matches:e,...t}){let i=zi(),{manifest:o,routeModules:l}=rv(),{loaderData:c,matches:d}=SI(),p=M.useMemo(()=>uy(n,e,d,o,i,"data"),[n,e,d,o,i]),y=M.useMemo(()=>uy(n,e,d,o,i,"assets"),[n,e,d,o,i]),v=M.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let x=new Set,U=!1;if(e.forEach(F=>{var Y;let q=o.routes[F.route.id];!q||!q.hasLoader||(!p.some(G=>G.route.id===F.route.id)&&F.route.id in c&&((Y=l[F.route.id])!=null&&Y.shouldRevalidate)||q.hasClientLoader?U=!0:x.add(F.route.id))}),x.size===0)return[];let j=TI(n);return U&&x.size>0&&j.searchParams.set("_routes",e.filter(F=>x.has(F.route.id)).map(F=>F.route.id).join(",")),[j.pathname+j.search]},[c,i,o,p,e,n,l]),T=M.useMemo(()=>_I(y,o),[y,o]),I=AI(y);return M.createElement(M.Fragment,null,v.map(x=>M.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),T.map(x=>M.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),I.map(({key:x,link:U})=>M.createElement("link",{key:x,...U})))}function PI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{iv&&(window.__reactRouterVersion="7.2.0")}catch{}function xI({basename:n,children:e,window:t}){let i=M.useRef();i.current==null&&(i.current=mT({window:t,v5Compat:!0}));let o=i.current,[l,c]=M.useState({action:o.action,location:o.location}),d=M.useCallback(p=>{M.startTransition(()=>c(p))},[c]);return M.useLayoutEffect(()=>o.listen(d),[o,d]),M.createElement(sI,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Il=M.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:v,viewTransition:T,...I},x){let{basename:U}=M.useContext(Zn),j=typeof y=="string"&&sv.test(y),F,q=!1;if(typeof y=="string"&&j&&(F=y,iv))try{let C=new URL(window.location.href),P=y.startsWith("//")?new URL(C.protocol+y):new URL(y),O=bi(P.pathname,U);P.origin===C.origin&&O!=null?y=O+P.search+P.hash:q=!0}catch{Qn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=zT(y,{relative:o}),[G,ne,_e]=CI(i,I),ge=OI(y,{replace:c,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:T});function k(C){e&&e(C),C.defaultPrevented||ge(C)}let S=M.createElement("a",{...I,..._e,href:F||Y,onClick:q||l?e:k,ref:PI(x,ne),target:p,"data-discover":!j&&t==="render"?"true":void 0});return G&&!j?M.createElement(M.Fragment,null,S,M.createElement(RI,{page:Y})):S});Il.displayName="Link";var NI=M.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:d,children:p,...y},v){let T=Tl(c,{relative:y.relative}),I=zi(),x=M.useContext(jc),{navigator:U,basename:j}=M.useContext(Zn),F=x!=null&&UI(T)&&d===!0,q=U.encodeLocation?U.encodeLocation(T).pathname:T.pathname,Y=I.pathname,G=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(Y=Y.toLowerCase(),G=G?G.toLowerCase():null,q=q.toLowerCase()),G&&j&&(G=bi(G,j)||G);const ne=q!=="/"&&q.endsWith("/")?q.length-1:q.length;let _e=Y===q||!o&&Y.startsWith(q)&&Y.charAt(ne)==="/",ge=G!=null&&(G===q||!o&&G.startsWith(q)&&G.charAt(q.length)==="/"),k={isActive:_e,isPending:ge,isTransitioning:F},S=_e?e:void 0,C;typeof i=="function"?C=i(k):C=[i,_e?"active":null,ge?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(k):l;return M.createElement(Il,{...y,"aria-current":S,className:C,ref:v,style:P,to:c,viewTransition:d},typeof p=="function"?p(k):p)});NI.displayName="NavLink";var DI=M.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:c=ac,action:d,onSubmit:p,relative:y,preventScrollReset:v,viewTransition:T,...I},x)=>{let U=MI(),j=FI(d,{relative:y}),F=c.toLowerCase()==="get"?"get":"post",q=typeof d=="string"&&sv.test(d),Y=G=>{if(p&&p(G),G.defaultPrevented)return;G.preventDefault();let ne=G.nativeEvent.submitter,_e=(ne==null?void 0:ne.getAttribute("formmethod"))||c;U(ne||G.currentTarget,{fetcherKey:e,method:_e,navigate:t,replace:o,state:l,relative:y,preventScrollReset:v,viewTransition:T})};return M.createElement("form",{ref:x,method:F,action:j,onSubmit:i?p:Y,...I,"data-discover":!q&&n==="render"?"true":void 0})});DI.displayName="Form";function bI(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ov(n){let e=M.useContext(qo);return tt(e,bI(n)),e}function OI(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:c}={}){let d=wn(),p=zi(),y=Tl(n,{relative:l});return M.useCallback(v=>{if(hI(v,e)){v.preventDefault();let T=t!==void 0?t:hl(p)===hl(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[p,d,y,t,i,e,n,o,l,c])}var LI=0,VI=()=>`__${String(++LI)}__`;function MI(){let{router:n}=ov("useSubmit"),{basename:e}=M.useContext(Zn),t=tI();return M.useCallback(async(i,o={})=>{let{action:l,method:c,encType:d,formData:p,body:y}=pI(i,e);if(o.navigate===!1){let v=o.fetcherKey||VI();await n.fetch(v,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function FI(n,{relative:e}={}){let{basename:t}=M.useContext(Zn),i=M.useContext(bn);tt(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...Tl(n||".",{relative:e})},c=zi();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let v=d.toString();l.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:$r([t,l.pathname])),hl(l)}function UI(n,e={}){let t=M.useContext(X_);tt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=ov("useViewTransitionState"),o=Tl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=bi(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=bi(t.nextLocation.pathname,i)||t.nextLocation.pathname;return vc(o.pathname,c)!=null||vc(o.pathname,l)!=null}new TextEncoder;var cy={};/**
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
 */const av=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},BI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},lv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let I=(d&15)<<2|y>>6,x=y&63;p||(x=64,c||(I=64)),i.push(t[v],t[T],t[I],t[x])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(av(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):BI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new zI;const I=l<<2|d>>4;if(i.push(I),y!==64){const x=d<<4&240|y>>2;if(i.push(x),T!==64){const U=y<<6&192|T;i.push(U)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jI=function(n){const e=av(n);return lv.encodeByteArray(e,!0)},wc=function(n){return jI(n).replace(/\./g,"")},uv=function(n){try{return lv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $I(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HI=()=>$I().__FIREBASE_DEFAULTS__,WI=()=>{if(typeof process>"u"||typeof cy>"u")return;const n=cy.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&uv(n[1]);return e&&JSON.parse(e)},Hc=()=>{try{return HI()||WI()||qI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cv=n=>{var e,t;return(t=(e=Hc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hv=n=>{const e=cv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},dv=()=>{var n;return(n=Hc())===null||n===void 0?void 0:n.config},fv=n=>{var e;return(e=Hc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class KI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function pv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wc(JSON.stringify(t)),wc(JSON.stringify(c)),""].join(".")}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function QI(){var n;const e=(n=Hc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function JI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZI(){const n=Wt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function eS(){return!QI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tS(){try{return typeof indexedDB=="object"}catch{return!1}}function nS(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const rS="FirebaseError";class Er extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=rS,Object.setPrototypeOf(this,Er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sl.prototype.create)}}class Sl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?iS(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Er(o,d,i)}}function iS(n,e){return n.replace(sS,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const sS=/\{\$([^}]+)}/g;function oS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ec(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(hy(l)&&hy(c)){if(!Ec(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function hy(n){return n!==null&&typeof n=="object"}/**
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
 */function Cl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function el(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function aS(n,e){const t=new lS(n,e);return t.subscribe.bind(t)}class lS{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");uS(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=qd),o.error===void 0&&(o.error=qd),o.complete===void 0&&(o.complete=qd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uS(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qd(){}/**
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
 */function st(n){return n&&n._delegate?n._delegate:n}class Oi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ws="[DEFAULT]";/**
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
 */class cS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new KI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dS(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:hS(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hS(n){return n===ws?void 0:n}function dS(n){return n.instantiationMode==="EAGER"}/**
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
 */class fS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var be;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(be||(be={}));const pS={debug:be.DEBUG,verbose:be.VERBOSE,info:be.INFO,warn:be.WARN,error:be.ERROR,silent:be.SILENT},mS=be.INFO,gS={[be.DEBUG]:"log",[be.VERBOSE]:"log",[be.INFO]:"info",[be.WARN]:"warn",[be.ERROR]:"error"},yS=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=gS[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hf{constructor(e){this.name=e,this._logLevel=mS,this._logHandler=yS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in be))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,be.DEBUG,...e),this._logHandler(this,be.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,be.VERBOSE,...e),this._logHandler(this,be.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,be.INFO,...e),this._logHandler(this,be.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,be.WARN,...e),this._logHandler(this,be.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,be.ERROR,...e),this._logHandler(this,be.ERROR,...e)}}const _S=(n,e)=>e.some(t=>n instanceof t);let dy,fy;function vS(){return dy||(dy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wS(){return fy||(fy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mv=new WeakMap,uf=new WeakMap,gv=new WeakMap,Kd=new WeakMap,Wf=new WeakMap;function ES(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Pi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&mv.set(t,n)}).catch(()=>{}),Wf.set(e,n),e}function TS(n){if(uf.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});uf.set(n,e)}let cf={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uf.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function IS(n){cf=n(cf)}function SS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Gd(this),e,...t);return gv.set(i,e.sort?e.sort():[e]),Pi(i)}:wS().includes(n)?function(...e){return n.apply(Gd(this),e),Pi(mv.get(this))}:function(...e){return Pi(n.apply(Gd(this),e))}}function CS(n){return typeof n=="function"?SS(n):(n instanceof IDBTransaction&&TS(n),_S(n,vS())?new Proxy(n,cf):n)}function Pi(n){if(n instanceof IDBRequest)return ES(n);if(Kd.has(n))return Kd.get(n);const e=CS(n);return e!==n&&(Kd.set(n,e),Wf.set(e,n)),e}const Gd=n=>Wf.get(n);function RS(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=Pi(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Pi(c.result),p.oldVersion,p.newVersion,Pi(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const AS=["get","getKey","getAll","getAllKeys","count"],kS=["put","add","delete","clear"],Qd=new Map;function py(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qd.get(e))return Qd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=kS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||AS.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Qd.set(e,l),l}IS(n=>({...n,get:(e,t,i)=>py(e,t)||n.get(e,t,i),has:(e,t)=>!!py(e,t)||n.has(e,t)}));/**
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
 */class PS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(xS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function xS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hf="@firebase/app",my="0.11.1";/**
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
 */const Wr=new Hf("@firebase/app"),NS="@firebase/app-compat",DS="@firebase/analytics-compat",bS="@firebase/analytics",OS="@firebase/app-check-compat",LS="@firebase/app-check",VS="@firebase/auth",MS="@firebase/auth-compat",FS="@firebase/database",US="@firebase/data-connect",BS="@firebase/database-compat",zS="@firebase/functions",jS="@firebase/functions-compat",$S="@firebase/installations",HS="@firebase/installations-compat",WS="@firebase/messaging",qS="@firebase/messaging-compat",KS="@firebase/performance",GS="@firebase/performance-compat",QS="@firebase/remote-config",XS="@firebase/remote-config-compat",YS="@firebase/storage",JS="@firebase/storage-compat",ZS="@firebase/firestore",eC="@firebase/vertexai",tC="@firebase/firestore-compat",nC="firebase",rC="11.3.1";/**
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
 */const df="[DEFAULT]",iC={[hf]:"fire-core",[NS]:"fire-core-compat",[bS]:"fire-analytics",[DS]:"fire-analytics-compat",[LS]:"fire-app-check",[OS]:"fire-app-check-compat",[VS]:"fire-auth",[MS]:"fire-auth-compat",[FS]:"fire-rtdb",[US]:"fire-data-connect",[BS]:"fire-rtdb-compat",[zS]:"fire-fn",[jS]:"fire-fn-compat",[$S]:"fire-iid",[HS]:"fire-iid-compat",[WS]:"fire-fcm",[qS]:"fire-fcm-compat",[KS]:"fire-perf",[GS]:"fire-perf-compat",[QS]:"fire-rc",[XS]:"fire-rc-compat",[YS]:"fire-gcs",[JS]:"fire-gcs-compat",[ZS]:"fire-fst",[tC]:"fire-fst-compat",[eC]:"fire-vertex","fire-js":"fire-js",[nC]:"fire-js-all"};/**
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
 */const Tc=new Map,sC=new Map,ff=new Map;function gy(n,e){try{n.container.addComponent(e)}catch(t){Wr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cs(n){const e=n.name;if(ff.has(e))return Wr.debug(`There were multiple attempts to register component ${e}.`),!1;ff.set(e,n);for(const t of Tc.values())gy(t,n);for(const t of sC.values())gy(t,n);return!0}function Wc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function un(n){return n==null?!1:n.settings!==void 0}/**
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
 */const oC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xi=new Sl("app","Firebase",oC);/**
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
 */class aC{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xi.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=rC;function yv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:df,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw xi.create("bad-app-name",{appName:String(o)});if(t||(t=dv()),!t)throw xi.create("no-options");const l=Tc.get(o);if(l){if(Ec(t,l.options)&&Ec(i,l.config))return l;throw xi.create("duplicate-app",{appName:o})}const c=new fS(o);for(const p of ff.values())c.addComponent(p);const d=new aC(t,i,c);return Tc.set(o,d),d}function qf(n=df){const e=Tc.get(n);if(!e&&n===df&&dv())return yv();if(!e)throw xi.create("no-app",{appName:n});return e}function pr(n,e,t){var i;let o=(i=iC[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wr.warn(d.join(" "));return}Cs(new Oi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const lC="firebase-heartbeat-database",uC=1,dl="firebase-heartbeat-store";let Xd=null;function _v(){return Xd||(Xd=RS(lC,uC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(dl)}catch(t){console.warn(t)}}}}).catch(n=>{throw xi.create("idb-open",{originalErrorMessage:n.message})})),Xd}async function cC(n){try{const t=(await _v()).transaction(dl),i=await t.objectStore(dl).get(vv(n));return await t.done,i}catch(e){if(e instanceof Er)Wr.warn(e.message);else{const t=xi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wr.warn(t.message)}}}async function yy(n,e){try{const i=(await _v()).transaction(dl,"readwrite");await i.objectStore(dl).put(e,vv(n)),await i.done}catch(t){if(t instanceof Er)Wr.warn(t.message);else{const i=xi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wr.warn(i.message)}}}function vv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const hC=1024,dC=30;class fC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mC(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=_y();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>dC){const c=gC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Wr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=_y(),{heartbeatsToSend:i,unsentEntries:o}=pC(this._heartbeatsCache.heartbeats),l=wc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Wr.warn(t),""}}}function _y(){return new Date().toISOString().substring(0,10)}function pC(n,e=hC){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),vy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),vy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class mC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tS()?nS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return yy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return yy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function vy(n){return wc(JSON.stringify({version:2,heartbeats:n})).length}function gC(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function yC(n){Cs(new Oi("platform-logger",e=>new PS(e),"PRIVATE")),Cs(new Oi("heartbeat",e=>new fC(e),"PRIVATE")),pr(hf,my,n),pr(hf,my,"esm2017"),pr("fire-js","")}yC("");var _C="firebase",vC="11.3.1";/**
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
 */pr(_C,vC,"app");function Kf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wC=wv,Ev=new Sl("auth","Firebase",wv());/**
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
 */const Ic=new Hf("@firebase/auth");function EC(n,...e){Ic.logLevel<=be.WARN&&Ic.warn(`Auth (${xs}): ${n}`,...e)}function uc(n,...e){Ic.logLevel<=be.ERROR&&Ic.error(`Auth (${xs}): ${n}`,...e)}/**
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
 */function Xn(n,...e){throw Gf(n,...e)}function mr(n,...e){return Gf(n,...e)}function Tv(n,e,t){const i=Object.assign(Object.assign({},wC()),{[e]:t});return new Sl("auth","Firebase",i).create(e,{appName:n.name})}function gr(n){return Tv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Ev.create(n,...e)}function Ie(n,e,...t){if(!n)throw Gf(e,...t)}function Br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw uc(e),new Error(e)}function qr(n,e){n||Br(e)}/**
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
 */function pf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function TC(){return wy()==="http:"||wy()==="https:"}function wy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function IC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TC()||YI()||"connection"in navigator)?navigator.onLine:!0}function SC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Rl{constructor(e,t){this.shortDelay=e,this.longDelay=t,qr(t>e,"Short delay should be less than long delay!"),this.isMobile=GI()||JI()}get(){return IC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qf(n,e){qr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Iv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const CC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RC=new Rl(3e4,6e4);function ji(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Xr(n,e,t,i,o={}){return Sv(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Cl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return XI()||(y.referrerPolicy="no-referrer"),Iv.fetch()(Cv(n,n.config.apiHost,t,d),y)})}async function Sv(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},CC),e);try{const o=new kC(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Zu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Zu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Zu(n,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Tv(n,v,y);Xn(n,v)}}catch(o){if(o instanceof Er)throw o;Xn(n,"network-request-failed",{message:String(o)})}}async function Al(n,e,t,i,o={}){const l=await Xr(n,e,t,i,o);return"mfaPendingCredential"in l&&Xn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function Cv(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Qf(n.config,o):`${n.config.apiScheme}://${o}`}function AC(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mr(this.auth,"network-request-failed")),RC.get())})}}function Zu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=mr(n,e,i);return o.customData._tokenResponse=t,o}function Ey(n){return n!==void 0&&n.enterprise!==void 0}class PC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return AC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function xC(n,e){return Xr(n,"GET","/v2/recaptchaConfig",ji(n,e))}/**
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
 */async function NC(n,e){return Xr(n,"POST","/v1/accounts:delete",e)}async function Rv(n,e){return Xr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function sl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DC(n,e=!1){const t=st(n),i=await t.getIdToken(e),o=Xf(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:sl(Yd(o.auth_time)),issuedAtTime:sl(Yd(o.iat)),expirationTime:sl(Yd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Yd(n){return Number(n)*1e3}function Xf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return uc("JWT malformed, contained fewer than 3 sections"),null;try{const o=uv(t);return o?JSON.parse(o):(uc("Failed to decode base64 JWT payload"),null)}catch(o){return uc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Ty(n){const e=Xf(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Er&&bC(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function bC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class OC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sl(this.lastLoginAt),this.creationTime=sl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Mo(n,Rv(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Av(l.providerUserInfo):[],d=VC(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new mf(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,T)}async function LC(n){const e=st(n);await Sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VC(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Av(n){return n.map(e=>{var{providerId:t}=e,i=Kf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function MC(n,e){const t=await Sv(n,{},async()=>{const i=Cl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=Cv(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Iv.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function FC(n,e){return Xr(n,"POST","/v2/accounts:revokeToken",ji(n,e))}/**
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
 */class bo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=Ty(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await MC(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new bo;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(Ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bo,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
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
 */function Ti(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Kf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new mf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Mo(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return DC(this,e)}reload(){return LC(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Sc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await Mo(this,NC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,x=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,U=(c=t.photoURL)!==null&&c!==void 0?c:void 0,j=(d=t.tenantId)!==null&&d!==void 0?d:void 0,F=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,q=(y=t.createdAt)!==null&&y!==void 0?y:void 0,Y=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:G,emailVerified:ne,isAnonymous:_e,providerData:ge,stsTokenManager:k}=t;Ie(G&&k,e,"internal-error");const S=bo.fromJSON(this.name,k);Ie(typeof G=="string",e,"internal-error"),Ti(T,e.name),Ti(I,e.name),Ie(typeof ne=="boolean",e,"internal-error"),Ie(typeof _e=="boolean",e,"internal-error"),Ti(x,e.name),Ti(U,e.name),Ti(j,e.name),Ti(F,e.name),Ti(q,e.name),Ti(Y,e.name);const C=new zr({uid:G,auth:e,email:I,emailVerified:ne,displayName:T,isAnonymous:_e,photoURL:U,phoneNumber:x,tenantId:j,stsTokenManager:S,createdAt:q,lastLoginAt:Y});return ge&&Array.isArray(ge)&&(C.providerData=ge.map(P=>Object.assign({},P))),F&&(C._redirectEventId=F),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new bo;o.updateFromServerResponse(t);const l=new zr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Sc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Av(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new bo;d.updateFromIdToken(i);const p=new zr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new mf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const Iy=new Map;function jr(n){qr(n instanceof Function,"Expected a class definition");let e=Iy.get(n);return e?(qr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Iy.set(n,e),e)}/**
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
 */class kv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kv.type="NONE";const Sy=kv;/**
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
 */function cc(n,e,t){return`firebase:${n}:${e}:${t}`}class Oo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=cc(this.userKey,o.apiKey,l),this.fullPersistenceKey=cc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Oo(jr(Sy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||jr(Sy);const c=cc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(c);if(v){const T=zr._fromJSON(e,v);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Oo(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new Oo(l,e,i))}}/**
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
 */function Cy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ov(e))return"Blackberry";if(Lv(e))return"Webos";if(xv(e))return"Safari";if((e.includes("chrome/")||Nv(e))&&!e.includes("edge/"))return"Chrome";if(bv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Pv(n=Wt()){return/firefox\//i.test(n)}function xv(n=Wt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nv(n=Wt()){return/crios\//i.test(n)}function Dv(n=Wt()){return/iemobile/i.test(n)}function bv(n=Wt()){return/android/i.test(n)}function Ov(n=Wt()){return/blackberry/i.test(n)}function Lv(n=Wt()){return/webos/i.test(n)}function Yf(n=Wt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function UC(n=Wt()){var e;return Yf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BC(){return ZI()&&document.documentMode===10}function Vv(n=Wt()){return Yf(n)||bv(n)||Lv(n)||Ov(n)||/windows phone/i.test(n)||Dv(n)}/**
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
 */function Mv(n,e=[]){let t;switch(n){case"Browser":t=Cy(Wt());break;case"Worker":t=`${Cy(Wt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xs}/${i}`}/**
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
 */class zC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function jC(n,e={}){return Xr(n,"GET","/v2/passwordPolicy",ji(n,e))}/**
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
 */const $C=6;class HC{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:$C,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class WC{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ry(this),this.idTokenSubscription=new Ry(this),this.beforeStateQueue=new zC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ev,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Oo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Rv(this,{idToken:e}),i=await zr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(un(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(gr(this));const t=e?st(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jC(this),t=new HC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Sl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await FC(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await Oo.create(this,[jr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&EC(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $i(n){return st(n)}class Ry{constructor(e){this.auth=e,this.observer=null,this.addObserver=aS(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qC(n){qc=n}function Fv(n){return qc.loadJS(n)}function KC(){return qc.recaptchaEnterpriseScript}function GC(){return qc.gapiScript}function QC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class XC{constructor(){this.enterprise=new YC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class YC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const JC="recaptcha-enterprise",Uv="NO_RECAPTCHA";class ZC{constructor(e){this.type=JC,this.auth=$i(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{xC(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new PC(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;Ey(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(Uv)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new XC().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&Ey(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=KC();p.length!==0&&(p+=d),Fv(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function Ay(n,e,t,i=!1,o=!1){const l=new ZC(n);let c;if(o)c=Uv;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function gf(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ay(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Ay(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
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
 */function eR(n,e){const t=Wc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Ec(l,e??{}))return o;Xn(o,"already-initialized")}return t.initialize({options:e})}function tR(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(jr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function nR(n,e,t){const i=$i(n);Ie(i._canInitEmulator,i,"emulator-config-failed"),Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Bv(e),{host:c,port:d}=rR(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),iR()}function Bv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function rR(n){const e=Bv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:ky(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:ky(c)}}}function ky(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function iR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Jf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}async function sR(n,e){return Xr(n,"POST","/v1/accounts:update",e)}async function oR(n,e){return Xr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function aR(n,e){return Al(n,"POST","/v1/accounts:signInWithPassword",ji(n,e))}/**
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
 */async function lR(n,e){return Al(n,"POST","/v1/accounts:signInWithEmailLink",ji(n,e))}async function uR(n,e){return Al(n,"POST","/v1/accounts:signInWithEmailLink",ji(n,e))}/**
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
 */class fl extends Jf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new fl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new fl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gf(e,t,"signInWithPassword",aR);case"emailLink":return lR(e,{email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gf(e,i,"signUpPassword",oR);case"emailLink":return uR(e,{idToken:t,email:this._email,oobCode:this._password});default:Xn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Lo(n,e){return Al(n,"POST","/v1/accounts:signInWithIdp",ji(n,e))}/**
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
 */const cR="http://localhost";class Rs extends Jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Kf(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Rs(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Lo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Lo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Lo(e,t)}buildRequest(){const e={requestUri:cR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cl(t)}return e}}/**
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
 */function hR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dR(n){const e=Za(el(n)).link,t=e?Za(el(e)).deep_link_id:null,i=Za(el(n)).deep_link_id;return(i?Za(el(i)).link:null)||i||t||e||n}class Zf{constructor(e){var t,i,o,l,c,d;const p=Za(el(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,T=hR((o=p.mode)!==null&&o!==void 0?o:null);Ie(y&&v&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=dR(e);try{return new Zf(t)}catch{return null}}}/**
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
 */class Ns{constructor(){this.providerId=Ns.PROVIDER_ID}static credential(e,t){return fl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Zf.parseLink(t);return Ie(i,"argument-error"),fl._fromEmailAndCode(e,i.code,i.tenantId)}}Ns.PROVIDER_ID="password";Ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kl extends zv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ii extends kl{constructor(){super("facebook.com")}static credential(e){return Rs._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
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
 */class Si extends kl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Rs._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Si.credential(t,i)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
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
 */class Ci extends kl{constructor(){super("github.com")}static credential(e){return Rs._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ci.credential(e.oauthAccessToken)}catch{return null}}}Ci.GITHUB_SIGN_IN_METHOD="github.com";Ci.PROVIDER_ID="github.com";/**
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
 */class Ri extends kl{constructor(){super("twitter.com")}static credential(e,t){return Rs._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ri.credential(t,i)}catch{return null}}}Ri.TWITTER_SIGN_IN_METHOD="twitter.com";Ri.PROVIDER_ID="twitter.com";/**
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
 */async function jv(n,e){return Al(n,"POST","/v1/accounts:signUp",ji(n,e))}/**
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
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await zr._fromIdTokenResponse(e,i,o),c=Py(i);return new Kr({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Py(i);return new Kr({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Py(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function fR(n){var e;if(un(n.app))return Promise.reject(gr(n));const t=$i(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Kr({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await jv(t,{returnSecureToken:!0}),o=await Kr._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(o.user),o}/**
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
 */class Cc extends Er{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Cc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Cc(e,t,i,o)}}function $v(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Cc._fromErrorAndOperation(n,l,e,i):l})}async function pR(n,e,t=!1){const i=await Mo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Kr._forOperation(n,"link",i)}/**
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
 */async function Hv(n,e,t=!1){const{auth:i}=n;if(un(i.app))return Promise.reject(gr(i));const o="reauthenticate";try{const l=await Mo(n,$v(i,o,e,n),t);Ie(l.idToken,i,"internal-error");const c=Xf(l.idToken);Ie(c,i,"internal-error");const{sub:d}=c;return Ie(n.uid===d,i,"user-mismatch"),Kr._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Xn(i,"user-mismatch"),l}}/**
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
 */async function Wv(n,e,t=!1){if(un(n.app))return Promise.reject(gr(n));const i="signIn",o=await $v(n,i,e),l=await Kr._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function mR(n,e){return Wv($i(n),e)}async function gR(n,e){return Hv(st(n),e)}/**
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
 */async function qv(n){const e=$i(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yR(n,e,t){if(un(n.app))return Promise.reject(gr(n));const i=$i(n),c=await gf(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jv).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&qv(n),p}),d=await Kr._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function _R(n,e,t){return un(n.app)?Promise.reject(gr(n)):mR(st(n),Ns.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&qv(n),i})}function vR(n,e){return wR(st(n),null,e)}async function wR(n,e,t){const{auth:i}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const c=await Mo(n,sR(i,l));await n._updateTokensIfNecessary(c,!0)}function ER(n,e,t,i){return st(n).onIdTokenChanged(e,t,i)}function TR(n,e,t){return st(n).beforeAuthStateChanged(e,t)}function IR(n,e,t,i){return st(n).onAuthStateChanged(e,t,i)}const Rc="__sak";/**
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
 */class Kv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Rc,"1"),this.storage.removeItem(Rc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const SR=1e3,CR=10;class Gv extends Kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);BC()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,CR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},SR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gv.type="LOCAL";const RR=Gv;/**
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
 */class Qv extends Kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qv.type="SESSION";const Xv=Qv;/**
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
 */function AR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Kc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await AR(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
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
 */function ep(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class kR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=ep("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function yr(){return window}function PR(n){yr().location.href=n}/**
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
 */function Yv(){return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}async function xR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function DR(){return Yv()?self:null}/**
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
 */const Jv="firebaseLocalStorageDb",bR=1,Ac="firebaseLocalStorage",Zv="fbase_key";class Pl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Gc(n,e){return n.transaction([Ac],e?"readwrite":"readonly").objectStore(Ac)}function OR(){const n=indexedDB.deleteDatabase(Jv);return new Pl(n).toPromise()}function yf(){const n=indexedDB.open(Jv,bR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ac,{keyPath:Zv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ac)?e(i):(i.close(),await OR(),e(await yf()))})})}async function xy(n,e,t){const i=Gc(n,!0).put({[Zv]:e,value:t});return new Pl(i).toPromise()}async function LR(n,e){const t=Gc(n,!1).get(e),i=await new Pl(t).toPromise();return i===void 0?null:i.value}function Ny(n,e){const t=Gc(n,!0).delete(e);return new Pl(t).toPromise()}const VR=800,MR=3;class ew{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>MR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(DR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xR(),!this.activeServiceWorker)return;this.sender=new kR(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yf();return await xy(e,Rc,"1"),await Ny(e,Rc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>xy(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>LR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ny(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Gc(o,!1).getAll();return new Pl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ew.type="LOCAL";const FR=ew;new Rl(3e4,6e4);/**
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
 */function UR(n,e){return e?jr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class tp extends Jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Lo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Lo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function BR(n){return Wv(n.auth,new tp(n),n.bypassAuthState)}function zR(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),Hv(t,new tp(n),n.bypassAuthState)}async function jR(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),pR(t,new tp(n),n.bypassAuthState)}/**
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
 */class tw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BR;case"linkViaPopup":case"linkViaRedirect":return jR;case"reauthViaPopup":case"reauthViaRedirect":return zR;default:Xn(this.auth,"internal-error")}}resolve(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $R=new Rl(2e3,1e4);class Do extends tw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Do.currentPopupAction&&Do.currentPopupAction.cancel(),Do.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){qr(this.filter.length===1,"Popup operations only handle one event");const e=ep();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Do.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$R.get())};e()}}Do.currentPopupAction=null;/**
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
 */const HR="pendingRedirect",hc=new Map;class WR extends tw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=hc.get(this.auth._key());if(!e){try{const i=await qR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}hc.set(this.auth._key(),e)}return this.bypassAuthState||hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qR(n,e){const t=QR(e),i=GR(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function KR(n,e){hc.set(n._key(),e)}function GR(n){return jr(n._redirectPersistence)}function QR(n){return cc(HR,n.config.apiKey,n.name)}async function XR(n,e,t=!1){if(un(n.app))return Promise.reject(gr(n));const i=$i(n),o=UR(i,e),c=await new WR(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const YR=10*60*1e3;class JR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!nw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(mr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dy(e))}saveEventToCache(e){this.cachedEventUids.add(Dy(e)),this.lastProcessedEventTime=Date.now()}}function Dy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function nw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nw(n);default:return!1}}/**
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
 */async function eA(n,e={}){return Xr(n,"GET","/v1/projects",e)}/**
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
 */const tA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nA=/^https?/;async function rA(n){if(n.config.emulator)return;const{authorizedDomains:e}=await eA(n);for(const t of e)try{if(iA(t))return}catch{}Xn(n,"unauthorized-domain")}function iA(n){const e=pf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!nA.test(t))return!1;if(tA.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const sA=new Rl(3e4,6e4);function by(){const n=yr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function oA(n){return new Promise((e,t)=>{var i,o,l;function c(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),t(mr(n,"network-request-failed"))},timeout:sA.get()})}if(!((o=(i=yr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=yr().gapi)===null||l===void 0)&&l.load)c();else{const d=QC("iframefcb");return yr()[d]=()=>{gapi.load?c():t(mr(n,"network-request-failed"))},Fv(`${GC()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw dc=null,e})}let dc=null;function aA(n){return dc=dc||oA(n),dc}/**
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
 */const lA=new Rl(5e3,15e3),uA="__/auth/iframe",cA="emulator/auth/iframe",hA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fA(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Qf(e,cA):`https://${n.config.authDomain}/${uA}`,i={apiKey:e.apiKey,appName:n.name,v:xs},o=dA.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Cl(i).slice(1)}`}async function pA(n){const e=await aA(n),t=yr().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:fA(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hA,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=mr(n,"network-request-failed"),d=yr().setTimeout(()=>{l(c)},lA.get());function p(){yr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const mA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gA=500,yA=600,_A="_blank",vA="http://localhost";class Oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wA(n,e,t,i=gA,o=yA){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},mA),{width:i.toString(),height:o.toString(),top:l,left:c}),y=Wt().toLowerCase();t&&(d=Nv(y)?_A:t),Pv(y)&&(e=e||vA,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[x,U])=>`${I}${x}=${U},`,"");if(UC(y)&&d!=="_self")return EA(e||"",d),new Oy(null);const T=window.open(e||"",d,v);Ie(T,n,"popup-blocked");try{T.focus()}catch{}return new Oy(T)}function EA(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const TA="__/auth/handler",IA="emulator/auth/handler",SA=encodeURIComponent("fac");async function Ly(n,e,t,i,o,l){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:xs,eventId:o};if(e instanceof zv){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",oS(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof kl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${SA}=${encodeURIComponent(p)}`:"";return`${CA(n)}?${Cl(d).slice(1)}${y}`}function CA({config:n}){return n.emulator?Qf(n,IA):`https://${n.authDomain}/${TA}`}/**
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
 */const Jd="webStorageSupport";class RA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xv,this._completeRedirectFn=XR,this._overrideRedirectResult=KR}async _openPopup(e,t,i,o){var l;qr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Ly(e,t,i,pf(),o);return wA(e,c,ep())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Ly(e,t,i,pf(),o);return PR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(qr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await pA(e),i=new JR(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jd,{type:Jd},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Jd];c!==void 0&&t(!!c),Xn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vv()||xv()||Yf()}}const AA=RA;var Vy="@firebase/auth",My="1.9.0";/**
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
 */class kA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xA(n){Cs(new Oi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mv(n)},y=new WC(i,o,l,p);return tR(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Cs(new Oi("auth-internal",e=>{const t=$i(e.getProvider("auth").getImmediate());return(i=>new kA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(Vy,My,PA(n)),pr(Vy,My,"esm2017")}/**
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
 */const NA=5*60,DA=fv("authIdTokenMaxAge")||NA;let Fy=null;const bA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>DA)return;const o=t==null?void 0:t.token;Fy!==o&&(Fy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Go(n=qf()){const e=Wc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=eR(n,{popupRedirectResolver:AA,persistence:[FR,RR,Xv]}),i=fv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=bA(l.toString());TR(t,c,()=>c(t.currentUser)),ER(t,d=>c(d))}}const o=cv("auth");return o&&nR(t,`http://${o}`),t}function OA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}qC({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=mr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",OA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xA("Browser");var Uy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ni,rw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,S){function C(){}C.prototype=S.prototype,k.D=S.prototype,k.prototype=new C,k.prototype.constructor=k,k.C=function(P,O,N){for(var R=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)R[xe-2]=arguments[xe];return S.prototype[O].apply(P,R)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(k,S,C){C||(C=0);var P=Array(16);if(typeof S=="string")for(var O=0;16>O;++O)P[O]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(O=0;16>O;++O)P[O]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=k.g[0],C=k.g[1],O=k.g[2];var N=k.g[3],R=S+(N^C&(O^N))+P[0]+3614090360&4294967295;S=C+(R<<7&4294967295|R>>>25),R=N+(O^S&(C^O))+P[1]+3905402710&4294967295,N=S+(R<<12&4294967295|R>>>20),R=O+(C^N&(S^C))+P[2]+606105819&4294967295,O=N+(R<<17&4294967295|R>>>15),R=C+(S^O&(N^S))+P[3]+3250441966&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(N^C&(O^N))+P[4]+4118548399&4294967295,S=C+(R<<7&4294967295|R>>>25),R=N+(O^S&(C^O))+P[5]+1200080426&4294967295,N=S+(R<<12&4294967295|R>>>20),R=O+(C^N&(S^C))+P[6]+2821735955&4294967295,O=N+(R<<17&4294967295|R>>>15),R=C+(S^O&(N^S))+P[7]+4249261313&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(N^C&(O^N))+P[8]+1770035416&4294967295,S=C+(R<<7&4294967295|R>>>25),R=N+(O^S&(C^O))+P[9]+2336552879&4294967295,N=S+(R<<12&4294967295|R>>>20),R=O+(C^N&(S^C))+P[10]+4294925233&4294967295,O=N+(R<<17&4294967295|R>>>15),R=C+(S^O&(N^S))+P[11]+2304563134&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(N^C&(O^N))+P[12]+1804603682&4294967295,S=C+(R<<7&4294967295|R>>>25),R=N+(O^S&(C^O))+P[13]+4254626195&4294967295,N=S+(R<<12&4294967295|R>>>20),R=O+(C^N&(S^C))+P[14]+2792965006&4294967295,O=N+(R<<17&4294967295|R>>>15),R=C+(S^O&(N^S))+P[15]+1236535329&4294967295,C=O+(R<<22&4294967295|R>>>10),R=S+(O^N&(C^O))+P[1]+4129170786&4294967295,S=C+(R<<5&4294967295|R>>>27),R=N+(C^O&(S^C))+P[6]+3225465664&4294967295,N=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(N^S))+P[11]+643717713&4294967295,O=N+(R<<14&4294967295|R>>>18),R=C+(N^S&(O^N))+P[0]+3921069994&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(O^N&(C^O))+P[5]+3593408605&4294967295,S=C+(R<<5&4294967295|R>>>27),R=N+(C^O&(S^C))+P[10]+38016083&4294967295,N=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(N^S))+P[15]+3634488961&4294967295,O=N+(R<<14&4294967295|R>>>18),R=C+(N^S&(O^N))+P[4]+3889429448&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(O^N&(C^O))+P[9]+568446438&4294967295,S=C+(R<<5&4294967295|R>>>27),R=N+(C^O&(S^C))+P[14]+3275163606&4294967295,N=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(N^S))+P[3]+4107603335&4294967295,O=N+(R<<14&4294967295|R>>>18),R=C+(N^S&(O^N))+P[8]+1163531501&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(O^N&(C^O))+P[13]+2850285829&4294967295,S=C+(R<<5&4294967295|R>>>27),R=N+(C^O&(S^C))+P[2]+4243563512&4294967295,N=S+(R<<9&4294967295|R>>>23),R=O+(S^C&(N^S))+P[7]+1735328473&4294967295,O=N+(R<<14&4294967295|R>>>18),R=C+(N^S&(O^N))+P[12]+2368359562&4294967295,C=O+(R<<20&4294967295|R>>>12),R=S+(C^O^N)+P[5]+4294588738&4294967295,S=C+(R<<4&4294967295|R>>>28),R=N+(S^C^O)+P[8]+2272392833&4294967295,N=S+(R<<11&4294967295|R>>>21),R=O+(N^S^C)+P[11]+1839030562&4294967295,O=N+(R<<16&4294967295|R>>>16),R=C+(O^N^S)+P[14]+4259657740&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(C^O^N)+P[1]+2763975236&4294967295,S=C+(R<<4&4294967295|R>>>28),R=N+(S^C^O)+P[4]+1272893353&4294967295,N=S+(R<<11&4294967295|R>>>21),R=O+(N^S^C)+P[7]+4139469664&4294967295,O=N+(R<<16&4294967295|R>>>16),R=C+(O^N^S)+P[10]+3200236656&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(C^O^N)+P[13]+681279174&4294967295,S=C+(R<<4&4294967295|R>>>28),R=N+(S^C^O)+P[0]+3936430074&4294967295,N=S+(R<<11&4294967295|R>>>21),R=O+(N^S^C)+P[3]+3572445317&4294967295,O=N+(R<<16&4294967295|R>>>16),R=C+(O^N^S)+P[6]+76029189&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(C^O^N)+P[9]+3654602809&4294967295,S=C+(R<<4&4294967295|R>>>28),R=N+(S^C^O)+P[12]+3873151461&4294967295,N=S+(R<<11&4294967295|R>>>21),R=O+(N^S^C)+P[15]+530742520&4294967295,O=N+(R<<16&4294967295|R>>>16),R=C+(O^N^S)+P[2]+3299628645&4294967295,C=O+(R<<23&4294967295|R>>>9),R=S+(O^(C|~N))+P[0]+4096336452&4294967295,S=C+(R<<6&4294967295|R>>>26),R=N+(C^(S|~O))+P[7]+1126891415&4294967295,N=S+(R<<10&4294967295|R>>>22),R=O+(S^(N|~C))+P[14]+2878612391&4294967295,O=N+(R<<15&4294967295|R>>>17),R=C+(N^(O|~S))+P[5]+4237533241&4294967295,C=O+(R<<21&4294967295|R>>>11),R=S+(O^(C|~N))+P[12]+1700485571&4294967295,S=C+(R<<6&4294967295|R>>>26),R=N+(C^(S|~O))+P[3]+2399980690&4294967295,N=S+(R<<10&4294967295|R>>>22),R=O+(S^(N|~C))+P[10]+4293915773&4294967295,O=N+(R<<15&4294967295|R>>>17),R=C+(N^(O|~S))+P[1]+2240044497&4294967295,C=O+(R<<21&4294967295|R>>>11),R=S+(O^(C|~N))+P[8]+1873313359&4294967295,S=C+(R<<6&4294967295|R>>>26),R=N+(C^(S|~O))+P[15]+4264355552&4294967295,N=S+(R<<10&4294967295|R>>>22),R=O+(S^(N|~C))+P[6]+2734768916&4294967295,O=N+(R<<15&4294967295|R>>>17),R=C+(N^(O|~S))+P[13]+1309151649&4294967295,C=O+(R<<21&4294967295|R>>>11),R=S+(O^(C|~N))+P[4]+4149444226&4294967295,S=C+(R<<6&4294967295|R>>>26),R=N+(C^(S|~O))+P[11]+3174756917&4294967295,N=S+(R<<10&4294967295|R>>>22),R=O+(S^(N|~C))+P[2]+718787259&4294967295,O=N+(R<<15&4294967295|R>>>17),R=C+(N^(O|~S))+P[9]+3951481745&4294967295,k.g[0]=k.g[0]+S&4294967295,k.g[1]=k.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,k.g[2]=k.g[2]+O&4294967295,k.g[3]=k.g[3]+N&4294967295}i.prototype.u=function(k,S){S===void 0&&(S=k.length);for(var C=S-this.blockSize,P=this.B,O=this.h,N=0;N<S;){if(O==0)for(;N<=C;)o(this,k,N),N+=this.blockSize;if(typeof k=="string"){for(;N<S;)if(P[O++]=k.charCodeAt(N++),O==this.blockSize){o(this,P),O=0;break}}else for(;N<S;)if(P[O++]=k[N++],O==this.blockSize){o(this,P),O=0;break}}this.h=O,this.o+=S},i.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var S=1;S<k.length-8;++S)k[S]=0;var C=8*this.o;for(S=k.length-8;S<k.length;++S)k[S]=C&255,C/=256;for(this.u(k),k=Array(16),S=C=0;4>S;++S)for(var P=0;32>P;P+=8)k[C++]=this.g[S]>>>P&255;return k};function l(k,S){var C=d;return Object.prototype.hasOwnProperty.call(C,k)?C[k]:C[k]=S(k)}function c(k,S){this.h=S;for(var C=[],P=!0,O=k.length-1;0<=O;O--){var N=k[O]|0;P&&N==S||(C[O]=N,P=!1)}this.g=C}var d={};function p(k){return-128<=k&&128>k?l(k,function(S){return new c([S|0],0>S?-1:0)}):new c([k|0],0>k?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return T;if(0>k)return F(y(-k));for(var S=[],C=1,P=0;k>=C;P++)S[P]=k/C|0,C*=4294967296;return new c(S,0)}function v(k,S){if(k.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(k.charAt(0)=="-")return F(v(k.substring(1),S));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(S,8)),P=T,O=0;O<k.length;O+=8){var N=Math.min(8,k.length-O),R=parseInt(k.substring(O,O+N),S);8>N?(N=y(Math.pow(S,N)),P=P.j(N).add(y(R))):(P=P.j(C),P=P.add(y(R)))}return P}var T=p(0),I=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(j(this))return-F(this).m();for(var k=0,S=1,C=0;C<this.g.length;C++){var P=this.i(C);k+=(0<=P?P:4294967296+P)*S,S*=4294967296}return k},n.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(U(this))return"0";if(j(this))return"-"+F(this).toString(k);for(var S=y(Math.pow(k,6)),C=this,P="";;){var O=ne(C,S).g;C=q(C,O.j(S));var N=((0<C.g.length?C.g[0]:C.h)>>>0).toString(k);if(C=O,U(C))return N+P;for(;6>N.length;)N="0"+N;P=N+P}},n.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function U(k){if(k.h!=0)return!1;for(var S=0;S<k.g.length;S++)if(k.g[S]!=0)return!1;return!0}function j(k){return k.h==-1}n.l=function(k){return k=q(this,k),j(k)?-1:U(k)?0:1};function F(k){for(var S=k.g.length,C=[],P=0;P<S;P++)C[P]=~k.g[P];return new c(C,~k.h).add(I)}n.abs=function(){return j(this)?F(this):this},n.add=function(k){for(var S=Math.max(this.g.length,k.g.length),C=[],P=0,O=0;O<=S;O++){var N=P+(this.i(O)&65535)+(k.i(O)&65535),R=(N>>>16)+(this.i(O)>>>16)+(k.i(O)>>>16);P=R>>>16,N&=65535,R&=65535,C[O]=R<<16|N}return new c(C,C[C.length-1]&-2147483648?-1:0)};function q(k,S){return k.add(F(S))}n.j=function(k){if(U(this)||U(k))return T;if(j(this))return j(k)?F(this).j(F(k)):F(F(this).j(k));if(j(k))return F(this.j(F(k)));if(0>this.l(x)&&0>k.l(x))return y(this.m()*k.m());for(var S=this.g.length+k.g.length,C=[],P=0;P<2*S;P++)C[P]=0;for(P=0;P<this.g.length;P++)for(var O=0;O<k.g.length;O++){var N=this.i(P)>>>16,R=this.i(P)&65535,xe=k.i(O)>>>16,Ge=k.i(O)&65535;C[2*P+2*O]+=R*Ge,Y(C,2*P+2*O),C[2*P+2*O+1]+=N*Ge,Y(C,2*P+2*O+1),C[2*P+2*O+1]+=R*xe,Y(C,2*P+2*O+1),C[2*P+2*O+2]+=N*xe,Y(C,2*P+2*O+2)}for(P=0;P<S;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=S;P<2*S;P++)C[P]=0;return new c(C,0)};function Y(k,S){for(;(k[S]&65535)!=k[S];)k[S+1]+=k[S]>>>16,k[S]&=65535,S++}function G(k,S){this.g=k,this.h=S}function ne(k,S){if(U(S))throw Error("division by zero");if(U(k))return new G(T,T);if(j(k))return S=ne(F(k),S),new G(F(S.g),F(S.h));if(j(S))return S=ne(k,F(S)),new G(F(S.g),S.h);if(30<k.g.length){if(j(k)||j(S))throw Error("slowDivide_ only works with positive integers.");for(var C=I,P=S;0>=P.l(k);)C=_e(C),P=_e(P);var O=ge(C,1),N=ge(P,1);for(P=ge(P,2),C=ge(C,2);!U(P);){var R=N.add(P);0>=R.l(k)&&(O=O.add(C),N=R),P=ge(P,1),C=ge(C,1)}return S=q(k,O.j(S)),new G(O,S)}for(O=T;0<=k.l(S);){for(C=Math.max(1,Math.floor(k.m()/S.m())),P=Math.ceil(Math.log(C)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),N=y(C),R=N.j(S);j(R)||0<R.l(k);)C-=P,N=y(C),R=N.j(S);U(N)&&(N=I),O=O.add(N),k=q(k,R)}return new G(O,k)}n.A=function(k){return ne(this,k).h},n.and=function(k){for(var S=Math.max(this.g.length,k.g.length),C=[],P=0;P<S;P++)C[P]=this.i(P)&k.i(P);return new c(C,this.h&k.h)},n.or=function(k){for(var S=Math.max(this.g.length,k.g.length),C=[],P=0;P<S;P++)C[P]=this.i(P)|k.i(P);return new c(C,this.h|k.h)},n.xor=function(k){for(var S=Math.max(this.g.length,k.g.length),C=[],P=0;P<S;P++)C[P]=this.i(P)^k.i(P);return new c(C,this.h^k.h)};function _e(k){for(var S=k.g.length+1,C=[],P=0;P<S;P++)C[P]=k.i(P)<<1|k.i(P-1)>>>31;return new c(C,k.h)}function ge(k,S){var C=S>>5;S%=32;for(var P=k.g.length-C,O=[],N=0;N<P;N++)O[N]=0<S?k.i(N+C)>>>S|k.i(N+C+1)<<32-S:k.i(N+C);return new c(O,k.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,rw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=v,Ni=c}).apply(typeof Uy<"u"?Uy:typeof self<"u"?self:typeof window<"u"?window:{});var ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iw,tl,sw,fc,_f,ow,aw,lw;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ec=="object"&&ec];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var B=u[E];if(!(B in _))break e;_=_[B]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,E=!1,B={next:function(){if(!E&&_<u.length){var W=_++;return{value:m(W,u[W]),done:!1}}return E=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,E),u.apply(m,B)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,I.apply(null,arguments)}function x(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function U(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,B,W){for(var ie=Array(arguments.length-2),He=2;He<arguments.length;He++)ie[He-2]=arguments[He];return m.prototype[B].apply(E,ie)}}function j(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function F(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const B=u.length||0,W=E.length||0;u.length=B+W;for(let ie=0;ie<W;ie++)u[B+ie]=E[ie]}else u.push(E)}}class q{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Y(u){return/^[\s\xa0]*$/.test(u)}function G(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ne(u){return ne[" "](u),u}ne[" "]=function(){};var _e=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ge(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function k(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(u,m){let _,E;for(let B=1;B<arguments.length;B++){E=arguments[B];for(_ in E)u[_]=E[_];for(let W=0;W<C.length;W++)_=C[W],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function O(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function N(u){d.setTimeout(()=>{throw u},0)}function R(){var u=pe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class xe{constructor(){this.h=this.g=null}add(m,_){const E=Ge.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var Ge=new q(()=>new Qe,u=>u.reset());class Qe{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,te=!1,pe=new xe,oe=()=>{const u=d.Promise.resolve(void 0);ke=()=>{u.then(b)}};var b=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(_){N(_)}var m=Ge;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}te=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Te(u,m){if(ue.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(_e){e:{try{ne(m.nodeName);var B=!0;break e}catch{}B=!1}B||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Te.aa.h.call(this)}}U(Te,ue);var De={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Pe="closure_listenable_"+(1e6*Math.random()|0),Le=0;function je(u,m,_,E,B){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=B,this.key=++Le,this.da=this.fa=!1}function Ct(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Tr(u){this.src=u,this.g={},this.h=0}Tr.prototype.add=function(u,m,_,E,B){var W=u.toString();u=this.g[W],u||(u=this.g[W]=[],this.h++);var ie=Yr(u,m,E,B);return-1<ie?(m=u[ie],_||(m.fa=!1)):(m=new je(m,this.src,W,!!E,B),m.fa=_,u.push(m)),m};function Ls(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],B=Array.prototype.indexOf.call(E,m,void 0),W;(W=0<=B)&&Array.prototype.splice.call(E,B,1),W&&(Ct(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Yr(u,m,_,E){for(var B=0;B<u.length;++B){var W=u[B];if(!W.da&&W.listener==m&&W.capture==!!_&&W.ha==E)return B}return-1}var qi="closure_lm_"+(1e6*Math.random()|0),Vs={};function ta(u,m,_,E,B){if(Array.isArray(m)){for(var W=0;W<m.length;W++)ta(u,m[W],_,E,B);return null}return _=ia(_),u&&u[Pe]?u.K(m,_,y(E)?!!E.capture:!1,B):na(u,m,_,!1,E,B)}function na(u,m,_,E,B,W){if(!m)throw Error("Invalid event type");var ie=y(B)?!!B.capture:!!B,He=Fs(u);if(He||(u[qi]=He=new Tr(u)),_=He.add(m,_,E,ie,W),_.proxy)return _;if(E=Vl(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Ee||(B=ie),B===void 0&&(B=!1),u.addEventListener(m.toString(),E,B);else if(u.attachEvent)u.attachEvent(Sr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Vl(){function u(_){return m.call(u.src,u.listener,_)}const m=ra;return u}function Ms(u,m,_,E,B){if(Array.isArray(m))for(var W=0;W<m.length;W++)Ms(u,m[W],_,E,B);else E=y(E)?!!E.capture:!!E,_=ia(_),u&&u[Pe]?(u=u.i,m=String(m).toString(),m in u.g&&(W=u.g[m],_=Yr(W,_,E,B),-1<_&&(Ct(W[_]),Array.prototype.splice.call(W,_,1),W.length==0&&(delete u.g[m],u.h--)))):u&&(u=Fs(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Yr(m,_,E,B)),(_=-1<u?m[u]:null)&&Ir(_))}function Ir(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Pe])Ls(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(Sr(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=Fs(m))?(Ls(_,u),_.h==0&&(_.src=null,m[qi]=null)):Ct(u)}}}function Sr(u){return u in Vs?Vs[u]:Vs[u]="on"+u}function ra(u,m){if(u.da)u=!0;else{m=new Te(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&Ir(u),u=_.call(E,m)}return u}function Fs(u){return u=u[qi],u instanceof Tr?u:null}var Us="__closure_events_fn_"+(1e9*Math.random()>>>0);function ia(u){return typeof u=="function"?u:(u[Us]||(u[Us]=function(m){return u.handleEvent(m)}),u[Us])}function _t(){K.call(this),this.i=new Tr(this),this.M=this,this.F=null}U(_t,K),_t.prototype[Pe]=!0,_t.prototype.removeEventListener=function(u,m,_,E){Ms(this,u,m,_,E)};function vt(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new ue(m,u);else if(m instanceof ue)m.target=m.target||u;else{var B=m;m=new ue(E,u),P(m,B)}if(B=!0,_)for(var W=_.length-1;0<=W;W--){var ie=m.g=_[W];B=Cr(ie,E,!0,m)&&B}if(ie=m.g=u,B=Cr(ie,E,!0,m)&&B,B=Cr(ie,E,!1,m)&&B,_)for(W=0;W<_.length;W++)ie=m.g=_[W],B=Cr(ie,E,!1,m)&&B}_t.prototype.N=function(){if(_t.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)Ct(_[E]);delete u.g[m],u.h--}}this.F=null},_t.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},_t.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function Cr(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var B=!0,W=0;W<m.length;++W){var ie=m[W];if(ie&&!ie.da&&ie.capture==_){var He=ie.listener,wt=ie.ha||ie.src;ie.fa&&Ls(u.i,ie),B=He.call(wt,E)!==!1&&B}}return B&&!E.defaultPrevented}function sa(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Jr(u){u.g=sa(()=>{u.g=null,u.i&&(u.i=!1,Jr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ki extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Jr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gi(u){K.call(this),this.h=u,this.g={}}U(Gi,K);var oa=[];function aa(u){ge(u.g,function(m,_){this.g.hasOwnProperty(_)&&Ir(m)},u),u.g={}}Gi.prototype.N=function(){Gi.aa.N.call(this),aa(this)},Gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var la=d.JSON.stringify,ua=d.JSON.parse,ca=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Qi(){}Qi.prototype.h=null;function Bs(u){return u.h||(u.h=u.i())}function zs(){}var En={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tr(){ue.call(this,"d")}U(tr,ue);function js(){ue.call(this,"c")}U(js,ue);var nr={},ha=null;function Xi(){return ha=ha||new _t}nr.La="serverreachability";function da(u){ue.call(this,nr.La,u)}U(da,ue);function Rr(u){const m=Xi();vt(m,new da(m))}nr.STAT_EVENT="statevent";function fa(u,m){ue.call(this,nr.STAT_EVENT,u),this.stat=m}U(fa,ue);function ct(u){const m=Xi();vt(m,new fa(m,u))}nr.Ma="timingevent";function $s(u,m){ue.call(this,nr.Ma,u),this.size=m}U($s,ue);function On(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Yi(){this.g=!0}Yi.prototype.xa=function(){this.g=!1};function Ji(u,m,_,E,B,W){u.info(function(){if(u.g)if(W)for(var ie="",He=W.split("&"),wt=0;wt<He.length;wt++){var Fe=He[wt].split("=");if(1<Fe.length){var Rt=Fe[0];Fe=Fe[1];var ft=Rt.split("_");ie=2<=ft.length&&ft[1]=="type"?ie+(Rt+"="+Fe+"&"):ie+(Rt+"=redacted&")}}else ie=null;else ie=W;return"XMLHTTP REQ ("+E+") [attempt "+B+"]: "+m+`
`+_+`
`+ie})}function Hs(u,m,_,E,B,W,ie){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+B+"]: "+m+`
`+_+`
`+W+" "+ie})}function Ln(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+ph(u,_)+(E?" "+E:"")})}function pa(u,m){u.info(function(){return"TIMEOUT: "+m})}Yi.prototype.info=function(){};function ph(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var B=E[1];if(Array.isArray(B)&&!(1>B.length)){var W=B[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ie=1;ie<B.length;ie++)B[ie]=""}}}}return la(_)}catch{return m}}var Ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ml={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vn;function Zi(){}U(Zi,Qi),Zi.prototype.g=function(){return new XMLHttpRequest},Zi.prototype.i=function(){return{}},Vn=new Zi;function Mn(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new Gi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var ma={},qs={};function Ks(u,m,_){u.L=1,u.v=ri(dn(m)),u.m=_,u.P=!0,ga(u,null)}function ga(u,m){u.F=Date.now(),qe(u),u.A=dn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),si(_.i,"t",E),u.C=0,_=u.j.J,u.h=new Fl,u.g=nu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Ki(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var B="readystatechange";Array.isArray(B)||(B&&(oa[0]=B.toString()),B=oa);for(var W=0;W<B.length;W++){var ie=ta(_,B[W],E||m.handleEvent,!1,m.h||m);if(!ie)break;m.g[ie.key]=ie}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Rr(),Ji(u.i,u.u,u.A,u.l,u.R,u.m)}Mn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Zt(u)==3?m.j():this.Y(u)},Mn.prototype.Y=function(u){try{if(u==this.g)e:{const ft=Zt(this.g);var m=this.g.Ba();const Sn=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||Ta(this.g)))){this.J||ft!=4||m==7||(m==8||0>=Sn?Rr(3):Rr(2)),es(this);var _=this.g.Z();this.X=_;t:if(Ul(this)){var E=Ta(this.g);u="";var B=E.length,W=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),Zr(this);var ie="";break t}this.h.i=new d.TextDecoder}for(m=0;m<B;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(W&&m==B-1)});E.length=0,this.h.g+=u,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=_==200,Hs(this.i,this.u,this.A,this.l,this.R,ft,_),this.o){if(this.T&&!this.K){t:{if(this.g){var He,wt=this.g;if((He=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(He)){var Fe=He;break t}}Fe=null}if(_=Fe)Ln(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,_);else{this.o=!1,this.s=3,ct(12),Tn(this),Zr(this);break e}}if(this.P){_=!0;let pn;for(;!this.J&&this.C<ie.length;)if(pn=mh(this,ie),pn==qs){ft==4&&(this.s=4,ct(14),_=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==ma){this.s=4,ct(15),Ln(this.i,this.l,ie,"[Invalid Chunk]"),_=!1;break}else Ln(this.i,this.l,pn,null),ya(this,pn);if(Ul(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||ie.length!=0||this.h.h||(this.s=1,ct(16),_=!1),this.o=this.o&&_,!_)Ln(this.i,this.l,ie,"[Invalid Chunked Response]"),Tn(this),Zr(this);else if(0<ie.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Sa(Rt),Rt.M=!0,ct(11))}}else Ln(this.i,this.l,ie,null),ya(this,ie);ft==4&&Tn(this),this.o&&!this.J&&(ft==4?io(this.j,this):(this.o=!1,qe(this)))}else Zs(this.g),_==400&&0<ie.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Tn(this),Zr(this)}}}catch{}finally{}};function Ul(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function mh(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?qs:(_=Number(m.substring(_,E)),isNaN(_)?ma:(E+=1,E+_>m.length?qs:(m=m.slice(E,E+_),u.C=E+_,m)))}Mn.prototype.cancel=function(){this.J=!0,Tn(this)};function qe(u){u.S=Date.now()+u.I,Bl(u,u.I)}function Bl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=On(I(u.ba,u),m)}function es(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Mn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(pa(this.i,this.A),this.L!=2&&(Rr(),ct(17)),Tn(this),this.s=2,Zr(this)):Bl(this,this.S-u)};function Zr(u){u.j.G==0||u.J||io(u.j,u)}function Tn(u){es(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,aa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ya(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||qt(_.h,u))){if(!u.K&&qt(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var B=E;if(B[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)ro(_),jn(_);else break e;no(_),ct(18)}}else _.za=B[1],0<_.za-_.T&&37500>B[2]&&_.F&&_.v==0&&!_.C&&(_.C=On(I(_.Za,_),6e3));if(1>=jl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Nr(_,11)}else if((u.K||_.g==u)&&ro(_),!Y(m))for(B=_.Da.g.parse(m),m=0;m<B.length;m++){let Fe=B[m];if(_.T=Fe[0],Fe=Fe[1],_.G==2)if(Fe[0]=="c"){_.K=Fe[1],_.ia=Fe[2];const Rt=Fe[3];Rt!=null&&(_.la=Rt,_.j.info("VER="+_.la));const ft=Fe[4];ft!=null&&(_.Aa=ft,_.j.info("SVER="+_.Aa));const Sn=Fe[5];Sn!=null&&typeof Sn=="number"&&0<Sn&&(E=1.5*Sn,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const pn=u.g;if(pn){const as=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(as){var W=E.h;W.g||as.indexOf("spdy")==-1&&as.indexOf("quic")==-1&&as.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(_a(W,W.h),W.h=null))}if(E.D){const oo=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;oo&&(E.ya=oo,We(E.I,E.D,oo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var ie=u;if(E.qa=tu(E,E.J?E.ia:null,E.W),ie.K){$l(E.h,ie);var He=ie,wt=E.L;wt&&(He.I=wt),He.B&&(es(He),qe(He)),E.g=ie}else os(E);0<_.i.length&&or(_)}else Fe[0]!="stop"&&Fe[0]!="close"||Nr(_,7);else _.G==3&&(Fe[0]=="stop"||Fe[0]=="close"?Fe[0]=="stop"?Nr(_,7):Dt(_):Fe[0]!="noop"&&_.l&&_.l.ta(Fe),_.v=0)}}Rr(4)}catch{}}var zl=class{constructor(u,m){this.g=u,this.map=m}};function ts(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function jl(u){return u.h?1:u.g?u.g.size:0}function qt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function _a(u,m){u.g?u.g.add(m):u.h=m}function $l(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ts.prototype.cancel=function(){if(this.i=Hl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Hl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return j(u.i)}function Gs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function Qs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function ei(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Qs(u),E=Gs(u),B=E.length,W=0;W<B;W++)m.call(void 0,E[W],_&&_[W],u)}var ns=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),B=null;if(0<=E){var W=u[_].substring(0,E);B=u[_].substring(E+1)}else W=u[_];m(W,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Ar(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ar){this.h=u.h,rs(this,u.j),this.o=u.o,this.g=u.g,ti(this,u.s),this.l=u.l;var m=u.i,_=new rr;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ni(this,_),this.m=u.m}else u&&(m=String(u).match(ns))?(this.h=!1,rs(this,m[1]||"",!0),this.o=Ve(m[2]||""),this.g=Ve(m[3]||"",!0),ti(this,m[4]),this.l=Ve(m[5]||"",!0),ni(this,m[6]||"",!0),this.m=Ve(m[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}Ar.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ii(m,Xs,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ii(m,Xs,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ii(_,_.charAt(0)=="/"?Kl:ql,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ii(_,va)),u.join("")};function dn(u){return new Ar(u)}function rs(u,m,_){u.j=_?Ve(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ti(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ni(u,m,_){m instanceof rr?(u.i=m,ir(u.i,u.h)):(_||(m=ii(m,Gl)),u.i=new rr(m,u.h))}function We(u,m,_){u.i.set(m,_)}function ri(u){return We(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ve(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ii(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Wl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Wl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Xs=/[#\/\?@]/g,ql=/[#\?:]/g,Kl=/[#\?]/g,Gl=/[#\?@]/g,va=/#/g;function rr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Nt(u){u.g||(u.g=new Map,u.h=0,u.i&&gh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=rr.prototype,n.add=function(u,m){Nt(this),this.i=null,u=In(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Fn(u,m){Nt(u),m=In(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Un(u,m){return Nt(u),m=In(u,m),u.g.has(m)}n.forEach=function(u,m){Nt(this),this.g.forEach(function(_,E){_.forEach(function(B){u.call(m,B,E,this)},this)},this)},n.na=function(){Nt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const B=u[E];for(let W=0;W<B.length;W++)_.push(m[E])}return _},n.V=function(u){Nt(this);let m=[];if(typeof u=="string")Un(this,u)&&(m=m.concat(this.g.get(In(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Nt(this),this.i=null,u=In(this,u),Un(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function si(u,m,_){Fn(u,m),0<_.length&&(u.i=null,u.g.set(In(u,m),j(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const W=encodeURIComponent(String(E)),ie=this.V(E);for(E=0;E<ie.length;E++){var B=W;ie[E]!==""&&(B+="="+encodeURIComponent(String(ie[E]))),u.push(B)}}return this.i=u.join("&")};function In(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function ir(u,m){m&&!u.j&&(Nt(u),u.i=null,u.g.forEach(function(_,E){var B=E.toLowerCase();E!=B&&(Fn(this,E),si(this,B,_))},u)),u.j=m}function yh(u,m){const _=new Yi;if(d.Image){const E=new Image;E.onload=x(Jt,_,"TestLoadImage: loaded",!0,m,E),E.onerror=x(Jt,_,"TestLoadImage: error",!1,m,E),E.onabort=x(Jt,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=x(Jt,_,"TestLoadImage: timeout",!1,m,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Ql(u,m){const _=new Yi,E=new AbortController,B=setTimeout(()=>{E.abort(),Jt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(W=>{clearTimeout(B),W.ok?Jt(_,"TestPingServer: ok",!0,m):Jt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(B),Jt(_,"TestPingServer: error",!1,m)})}function Jt(u,m,_,E,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),E(_)}catch{}}function _h(){this.g=new ca}function Xl(u,m,_){const E=_||"";try{ei(u,function(B,W){let ie=B;y(B)&&(ie=la(B)),m.push(E+W+"="+encodeURIComponent(ie))})}catch(B){throw m.push(E+"type="+encodeURIComponent("_badmap")),B}}function kr(u){this.l=u.Ub||null,this.j=u.eb||!1}U(kr,Qi),kr.prototype.g=function(){return new is(this.l,this.j)},kr.prototype.i=function(u){return function(){return u}}({});function is(u,m){_t.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(is,_t),n=is.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,zn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Bn(this):zn(this),this.readyState==3&&Yl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Bn(this))},n.Qa=function(u){this.g&&(this.response=u,Bn(this))},n.ga=function(){this.g&&Bn(this)};function Bn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,zn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function zn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Pr(u){let m="";return ge(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function oi(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=Pr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):We(u,m,_))}function Ze(u){_t.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ze,_t);var vh=/^https?$/i,wa=["POST","PUT"];n=Ze.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vn.g(),this.v=this.o?Bs(this.o):Bs(Vn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(W){ss(this,W);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var B in E)_.set(B,E[B]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const W of E.keys())_.set(W,E.get(W));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(W=>W.toLowerCase()=="content-type"),B=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(wa,m,void 0))||E||B||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ie]of _)this.g.setRequestHeader(W,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Js(this),this.u=!0,this.g.send(u),this.u=!1}catch(W){ss(this,W)}};function ss(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Ys(u),fn(u)}function Ys(u){u.A||(u.A=!0,vt(u,"complete"),vt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,vt(this,"complete"),vt(this,"abort"),fn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fn(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},n.bb=function(){Ea(this)};function Ea(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Zt(u)!=4||u.Z()!=2)){if(u.u&&Zt(u)==4)sa(u.Ea,0,u);else if(vt(u,"readystatechange"),Zt(u)==4){u.h=!1;try{const ie=u.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=ie===0){var B=String(u.D).match(ns)[1]||null;!B&&d.self&&d.self.location&&(B=d.self.location.protocol.slice(0,-1)),E=!vh.test(B?B.toLowerCase():"")}_=E}if(_)vt(u,"complete"),vt(u,"success");else{u.m=6;try{var W=2<Zt(u)?u.g.statusText:""}catch{W=""}u.l=W+" ["+u.Z()+"]",Ys(u)}}finally{fn(u)}}}}function fn(u,m){if(u.g){Js(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||vt(u,"ready");try{_.onreadystatechange=E}catch{}}}function Js(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Zt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ua(m)}};function Ta(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Zs(u){const m={};u=(u.g&&2<=Zt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(Y(u[E]))continue;var _=O(u[E]);const B=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const W=m[B]||[];m[B]=W,W.push(_)}k(m,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Ia(u){this.Aa=0,this.i=[],this.j=new Yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,u),this.cb=sr("retryDelaySeedMs",1e4,u),this.Wa=sr("forwardChannelMaxRetries",2,u),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ts(u&&u.concurrentRequestLimit),this.Da=new _h,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ia.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,E){ct(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=tu(this,null,this.W),or(this)};function Dt(u){if(eo(u),u.G==3){var m=u.U++,_=dn(u.I);if(We(_,"SID",u.K),We(_,"RID",m),We(_,"TYPE","terminate"),xr(u,_),m=new Mn(u,u.j,m),m.L=2,m.v=ri(dn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=nu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}eu(u)}function jn(u){u.g&&(Sa(u),u.g.cancel(),u.g=null)}function eo(u){jn(u),u.u&&(d.clearTimeout(u.u),u.u=null),ro(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function or(u){if(!hn(u.h)&&!u.s){u.s=!0;var m=u.Ga;ke||oe(),te||(ke(),te=!0),pe.add(m,u),u.B=0}}function wh(u,m){return jl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=On(I(u.Ga,u,m),Zl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const B=new Mn(this,this.j,u);let W=this.o;if(this.S&&(W?(W=S(W),P(W,this.S)):W=this.S),this.m!==null||this.O||(B.H=W,W=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ai(this,B,m),_=dn(this.I),We(_,"RID",u),We(_,"CVER",22),this.D&&We(_,"X-HTTP-Session-Id",this.D),xr(this,_),W&&(this.O?m="headers="+encodeURIComponent(String(Pr(W)))+"&"+m:this.m&&oi(_,this.m,W)),_a(this.h,B),this.Ua&&We(_,"TYPE","init"),this.P?(We(_,"$req",m),We(_,"SID","null"),B.T=!0,Ks(B,_,null)):Ks(B,_,m),this.G=2}}else this.G==3&&(u?to(this,u):this.i.length==0||hn(this.h)||to(this))};function to(u,m){var _;m?_=m.l:_=u.U++;const E=dn(u.I);We(E,"SID",u.K),We(E,"RID",_),We(E,"AID",u.T),xr(u,E),u.m&&u.o&&oi(E,u.m,u.o),_=new Mn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ai(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),_a(u.h,_),Ks(_,E,m)}function xr(u,m){u.H&&ge(u.H,function(_,E){We(m,E,_)}),u.l&&ei({},function(_,E){We(m,E,_)})}function ai(u,m,_){_=Math.min(u.i.length,_);var E=u.l?I(u.l.Na,u.l,u):null;e:{var B=u.i;let W=-1;for(;;){const ie=["count="+_];W==-1?0<_?(W=B[0].g,ie.push("ofs="+W)):W=0:ie.push("ofs="+W);let He=!0;for(let wt=0;wt<_;wt++){let Fe=B[wt].g;const Rt=B[wt].map;if(Fe-=W,0>Fe)W=Math.max(0,B[wt].g-100),He=!1;else try{Xl(Rt,ie,"req"+Fe+"_")}catch{E&&E(Rt)}}if(He){E=ie.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,E}function os(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ke||oe(),te||(ke(),te=!0),pe.add(m,u),u.v=0}}function no(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=On(I(u.Fa,u),Zl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Jl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=On(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),jn(this),Jl(this))};function Sa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Jl(u){u.g=new Mn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=dn(u.qa);We(m,"RID","rpc"),We(m,"SID",u.K),We(m,"AID",u.T),We(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&We(m,"TO",u.ja),We(m,"TYPE","xmlhttp"),xr(u,m),u.m&&u.o&&oi(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ri(dn(m)),_.m=null,_.P=!0,ga(_,u)}n.Za=function(){this.C!=null&&(this.C=null,jn(this),no(this),ct(19))};function ro(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function io(u,m){var _=null;if(u.g==m){ro(u),Sa(u),u.g=null;var E=2}else if(qt(u.h,m))_=m.D,$l(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var B=u.B;E=Xi(),vt(E,new $s(E,_)),or(u)}else os(u);else if(B=m.s,B==3||B==0&&0<m.X||!(E==1&&wh(u,m)||E==2&&no(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),B){case 1:Nr(u,5);break;case 4:Nr(u,10);break;case 3:Nr(u,6);break;default:Nr(u,2)}}}function Zl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Nr(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),E=u.Xa;const B=!E;E=new Ar(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||rs(E,"https"),ri(E),B?yh(E.toString(),_):Ql(E.toString(),_)}else ct(2);u.G=0,u.l&&u.l.sa(m),eu(u),eo(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function eu(u){if(u.G=0,u.ka=[],u.l){const m=Hl(u.h);(m.length!=0||u.i.length!=0)&&(F(u.ka,m),F(u.ka,u.i),u.h.i.length=0,j(u.i),u.i.length=0),u.l.ra()}}function tu(u,m,_){var E=_ instanceof Ar?dn(_):new Ar(_);if(E.g!="")m&&(E.g=m+"."+E.g),ti(E,E.s);else{var B=d.location;E=B.protocol,m=m?m+"."+B.hostname:B.hostname,B=+B.port;var W=new Ar(null);E&&rs(W,E),m&&(W.g=m),B&&ti(W,B),_&&(W.l=_),E=W}return _=u.D,m=u.ya,_&&m&&We(E,_,m),We(E,"VER",u.la),xr(u,E),E}function nu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ze(new kr({eb:_})):new Ze(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ca(){}n=Ca.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function so(){}so.prototype.g=function(u,m){return new Kt(u,m)};function Kt(u,m){_t.call(this),this.g=new Ia(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!Y(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!Y(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ar(this)}U(Kt,_t),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Dt(this.g)},Kt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=la(u),u=_);m.i.push(new zl(m.Ya++,u)),m.G==3&&or(m)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Dt(this.g),delete this.g,Kt.aa.N.call(this)};function ru(u){tr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}U(ru,tr);function iu(){js.call(this),this.status=1}U(iu,js);function ar(u){this.g=u}U(ar,Ca),ar.prototype.ua=function(){vt(this.g,"a")},ar.prototype.ta=function(u){vt(this.g,new ru(u))},ar.prototype.sa=function(u){vt(this.g,new iu)},ar.prototype.ra=function(){vt(this.g,"b")},so.prototype.createWebChannel=so.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,lw=function(){return new so},aw=function(){return Xi()},ow=nr,_f={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,fc=Ws,Ml.COMPLETE="complete",sw=Ml,zs.EventType=En,En.OPEN="a",En.CLOSE="b",En.ERROR="c",En.MESSAGE="d",_t.prototype.listen=_t.prototype.K,tl=zs,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,iw=Ze}).apply(typeof ec<"u"?ec:typeof self<"u"?self:typeof window<"u"?window:{});const By="@firebase/firestore",zy="4.7.8";/**
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
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let Qo="11.3.1";/**
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
 */const As=new Hf("@firebase/firestore");function ko(){return As.logLevel}function le(n,...e){if(As.logLevel<=be.DEBUG){const t=e.map(np);As.debug(`Firestore (${Qo}): ${n}`,...t)}}function Gr(n,...e){if(As.logLevel<=be.ERROR){const t=e.map(np);As.error(`Firestore (${Qo}): ${n}`,...t)}}function Fo(n,...e){if(As.logLevel<=be.WARN){const t=e.map(np);As.warn(`Firestore (${Qo}): ${n}`,...t)}}function np(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Se(n="Unexpected state"){const e=`FIRESTORE (${Qo}) INTERNAL ASSERTION FAILED: `+n;throw Gr(e),new Error(e)}function $e(n,e){n||Se()}function Ae(n,e){return n}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Er{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Hr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class uw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class LA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t($t.UNAUTHENTICATED))}shutdown(){}}class VA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class MA{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$e(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Hr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Hr,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Hr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($e(typeof i.accessToken=="string"),new uw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new $t(e)}}class FA{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class UA{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new FA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BA{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,un(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){$e(this.o===void 0);const i=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,le("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new jy(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($e(typeof t.token=="string"),this.R=t.token,new jy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class cw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=zA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Me(n,e){return n<e?-1:n>e?1:0}function Uo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */const $y=-62135596800,Hy=1e6;class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Hy);return new It(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<$y)throw new he(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Hy}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-$y;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new It(0,0))}static max(){return new Re(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Wy="__name__";class dr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Se(),i===void 0?i=e.length-t:i>e.length-t&&Se(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return dr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=dr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=dr.isNumericId(e),o=dr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?dr.extractNumericId(e).compare(dr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ni.fromString(e.substring(4,e.length-2))}}class Je extends dr{construct(e,t,i){return new Je(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new he(X.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Je(t)}static emptyPath(){return new Je([])}}const jA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends dr{construct(e,t,i){return new Vt(e,t,i)}static isValidIdentifier(e){return jA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wy}static keyField(){return new Vt([Wy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new he(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new he(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new he(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new he(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(t)}static emptyPath(){return new Vt([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Je.fromString(e))}static fromName(e){return new ye(Je.fromString(e).popFirst(5))}static empty(){return new ye(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Je(e.slice()))}}/**
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
 */const pl=-1;function $A(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(i===1e9?new It(t+1,0):new It(t,i));return new Li(o,ye.empty(),e)}function HA(n){return new Li(n.readTime,n.key,pl)}class Li{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Li(Re.min(),ye.empty(),pl)}static max(){return new Li(Re.max(),ye.empty(),pl)}}function WA(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Me(n.largestBatchId,e.largestBatchId))}/**
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
 */const qA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xo(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==qA)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.reject(t)}static resolve(e){return new Q((t,i)=>{t(e)})}static reject(e){return new Q((t,i)=>{i(e)})}static waitFor(e){return new Q((t,i)=>{let o=0,l=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=Q.resolve(!1);for(const i of e)t=t.next(o=>o?Q.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new Q((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(v=>{c[y]=v,++d,d===l&&i(c)},v=>o(v))}})}static doWhile(e,t){return new Q((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function GA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Qc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Qc.ae=-1;/**
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
 */const rp=-1;function Xc(n){return n==null}function kc(n){return n===0&&1/n==-1/0}function QA(n){return typeof n=="number"&&Number.isInteger(n)&&!kc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const hw="";function XA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=qy(e)),e=YA(n.get(t),e);return qy(e)}function YA(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case hw:t+="";break;default:t+=l}}return t}function qy(n){return n+hw+""}/**
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
 */function Ky(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ot{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tc(this.root,e,this.comparator,!1)}getReverseIterator(){return new tc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tc(this.root,e,this.comparator,!0)}}class tc{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Lt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class St{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gy(this.data.getIterator())}getIteratorFrom(e){return new Gy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof St)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new St(this.comparator);return t.data=e,t}}class Gy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class _n{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new _n([])}unionWith(e){let t=new St(Vt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new _n(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Uo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class fw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new fw("Invalid base64 string: "+l):l}}(e);return new Mt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new Mt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const JA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(n){if($e(!!n),typeof n=="string"){let e=0;const t=JA.exec(n);if($e(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:dt(n.seconds),nanos:dt(n.nanos)}}function dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mi(n){return typeof n=="string"?Mt.fromBase64String(n):Mt.fromUint8Array(n)}/**
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
 */const pw="server_timestamp",mw="__type__",gw="__previous_value__",yw="__local_write_time__";function ip(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[mw])===null||t===void 0?void 0:t.stringValue)===pw}function Yc(n){const e=n.mapValue.fields[gw];return ip(e)?Yc(e):e}function ml(n){const e=Vi(n.mapValue.fields[yw].timestampValue);return new It(e.seconds,e.nanos)}/**
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
 */class ZA{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}const Pc="(default)";class gl{constructor(e,t){this.projectId=e,this.database=t||Pc}static empty(){return new gl("","")}get isDefaultDatabase(){return this.database===Pc}isEqual(e){return e instanceof gl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _w="__type__",ek="__max__",nc={mapValue:{}},vw="__vector__",xc="value";function Fi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ip(n)?4:nk(n)?9007199254740991:tk(n)?10:11:Se()}function wr(n,e){if(n===e)return!0;const t=Fi(n);if(t!==Fi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ml(n).isEqual(ml(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Vi(o.timestampValue),d=Vi(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Mi(o.bytesValue).isEqual(Mi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return dt(o.geoPointValue.latitude)===dt(l.geoPointValue.latitude)&&dt(o.geoPointValue.longitude)===dt(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return dt(o.integerValue)===dt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=dt(o.doubleValue),d=dt(l.doubleValue);return c===d?kc(c)===kc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Uo(n.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Ky(c)!==Ky(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!wr(c[p],d[p])))return!1;return!0}(n,e);default:return Se()}}function yl(n,e){return(n.values||[]).find(t=>wr(t,e))!==void 0}function Bo(n,e){if(n===e)return 0;const t=Fi(n),i=Fi(e);if(t!==i)return Me(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=dt(l.integerValue||l.doubleValue),p=dt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Qy(n.timestampValue,e.timestampValue);case 4:return Qy(ml(n),ml(e));case 5:return Me(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Mi(l),p=Mi(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=Me(d[y],p[y]);if(v!==0)return v}return Me(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Me(dt(l.latitude),dt(c.latitude));return d!==0?d:Me(dt(l.longitude),dt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Xy(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,y,v;const T=l.fields||{},I=c.fields||{},x=(d=T[xc])===null||d===void 0?void 0:d.arrayValue,U=(p=I[xc])===null||p===void 0?void 0:p.arrayValue,j=Me(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((v=U==null?void 0:U.values)===null||v===void 0?void 0:v.length)||0);return j!==0?j:Xy(x,U)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===nc.mapValue&&c===nc.mapValue)return 0;if(l===nc.mapValue)return 1;if(c===nc.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const I=Me(p[T],v[T]);if(I!==0)return I;const x=Bo(d[p[T]],y[v[T]]);if(x!==0)return x}return Me(p.length,v.length)}(n.mapValue,e.mapValue);default:throw Se()}}function Qy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Me(n,e);const t=Vi(n),i=Vi(e),o=Me(t.seconds,i.seconds);return o!==0?o:Me(t.nanos,i.nanos)}function Xy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Bo(t[o],i[o]);if(l)return l}return Me(t.length,i.length)}function zo(n){return vf(n)}function vf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Vi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Mi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=vf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${vf(t.fields[c])}`;return o+"}"}(n.mapValue):Se()}function pc(n){switch(Fi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yc(n);return e?16+pc(e):16;case 5:return 2*n.stringValue.length;case 6:return Mi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+pc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Hi(i.fields,(l,c)=>{o+=l.length+pc(c)}),o}(n.mapValue);default:throw Se()}}function Yy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wf(n){return!!n&&"integerValue"in n}function sp(n){return!!n&&"arrayValue"in n}function Jy(n){return!!n&&"nullValue"in n}function Zy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function mc(n){return!!n&&"mapValue"in n}function tk(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[_w])===null||t===void 0?void 0:t.stringValue)===vw}function ol(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Hi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ol(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ol(n.arrayValue.values[t]);return e}return Object.assign({},n)}function nk(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ek}/**
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
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!mc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ol(t)}setAll(e){let t=Vt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=ol(c):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());mc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];mc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Hi(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new cn(ol(this.value))}}function ww(n){const e=[];return Hi(n.fields,(t,i)=>{const o=new Vt([t]);if(mc(i)){const l=ww(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new _n(e)}/**
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
 */class Ht{constructor(e,t,i,o,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new Ht(e,0,Re.min(),Re.min(),Re.min(),cn.empty(),0)}static newFoundDocument(e,t,i,o){return new Ht(e,1,t,Re.min(),i,o,0)}static newNoDocument(e,t){return new Ht(e,2,t,Re.min(),Re.min(),cn.empty(),0)}static newUnknownDocument(e,t){return new Ht(e,3,t,Re.min(),Re.min(),cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Nc{constructor(e,t){this.position=e,this.inclusive=t}}function e_(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(c.referenceValue),t.key):i=Bo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function t_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Dc{constructor(e,t="asc"){this.field=e,this.dir=t}}function rk(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ew{}class gt extends Ew{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new sk(e,t,i):t==="array-contains"?new lk(e,i):t==="in"?new uk(e,i):t==="not-in"?new ck(e,i):t==="array-contains-any"?new hk(e,i):new gt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new ok(e,i):new ak(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Bo(t,this.value)):t!==null&&Fi(this.value)===Fi(t)&&this.matchesComparison(Bo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends Ew{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new Yn(e,t)}matches(e){return Tw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Tw(n){return n.op==="and"}function Iw(n){return ik(n)&&Tw(n)}function ik(n){for(const e of n.filters)if(e instanceof Yn)return!1;return!0}function Ef(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+zo(n.value);if(Iw(n))return n.filters.map(e=>Ef(e)).join(",");{const e=n.filters.map(t=>Ef(t)).join(",");return`${n.op}(${e})`}}function Sw(n,e){return n instanceof gt?function(i,o){return o instanceof gt&&i.op===o.op&&i.field.isEqual(o.field)&&wr(i.value,o.value)}(n,e):n instanceof Yn?function(i,o){return o instanceof Yn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,d)=>l&&Sw(c,o.filters[d]),!0):!1}(n,e):void Se()}function Cw(n){return n instanceof gt?function(t){return`${t.field.canonicalString()} ${t.op} ${zo(t.value)}`}(n):n instanceof Yn?function(t){return t.op.toString()+" {"+t.getFilters().map(Cw).join(" ,")+"}"}(n):"Filter"}class sk extends gt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class ok extends gt{constructor(e,t){super(e,"in",t),this.keys=Rw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ak extends gt{constructor(e,t){super(e,"not-in",t),this.keys=Rw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class lk extends gt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return sp(t)&&yl(t.arrayValue,this.value)}}class uk extends gt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yl(this.value.arrayValue,t)}}class ck extends gt{constructor(e,t){super(e,"not-in",t)}matches(e){if(yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!yl(this.value.arrayValue,t)}}class hk extends gt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!sp(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>yl(this.value.arrayValue,i))}}/**
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
 */class dk{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function n_(n,e=null,t=[],i=[],o=null,l=null,c=null){return new dk(n,e,t,i,o,l,c)}function op(n){const e=Ae(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Ef(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Xc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>zo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>zo(i)).join(",")),e.le=t}return e.le}function ap(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!rk(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Sw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!t_(n.startAt,e.startAt)&&t_(n.endAt,e.endAt)}function Tf(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class xl{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function fk(n,e,t,i,o,l,c,d){return new xl(n,e,t,i,o,l,c,d)}function lp(n){return new xl(n)}function r_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Aw(n){return n.collectionGroup!==null}function al(n){const e=Ae(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new St(Vt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new Dc(l,i))}),t.has(Vt.keyField().canonicalString())||e.he.push(new Dc(Vt.keyField(),i))}return e.he}function _r(n){const e=Ae(n);return e.Pe||(e.Pe=pk(e,al(n))),e.Pe}function pk(n,e){if(n.limitType==="F")return n_(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Dc(o.field,l)});const t=n.endAt?new Nc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Nc(n.startAt.position,n.startAt.inclusive):null;return n_(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function If(n,e){const t=n.filters.concat([e]);return new xl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Sf(n,e,t){return new xl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Jc(n,e){return ap(_r(n),_r(e))&&n.limitType===e.limitType}function kw(n){return`${op(_r(n))}|lt:${n.limitType}`}function Po(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>Cw(o)).join(", ")}]`),Xc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>zo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>zo(o)).join(",")),`Target(${i})`}(_r(n))}; limitType=${n.limitType})`}function Zc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of al(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=e_(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,al(i),o)||i.endAt&&!function(c,d,p){const y=e_(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,al(i),o))}(n,e)}function mk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pw(n){return(e,t)=>{let i=!1;for(const o of al(n)){const l=gk(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function gk(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Bo(p,y):Se()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Se()}}/**
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
 */class Ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Hi(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return dw(this.inner)}size(){return this.innerSize}}/**
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
 */const yk=new ot(ye.comparator);function Qr(){return yk}const xw=new ot(ye.comparator);function nl(...n){let e=xw;for(const t of n)e=e.insert(t.key,t);return e}function Nw(n){let e=xw;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Es(){return ll()}function Dw(){return ll()}function ll(){return new Ds(n=>n.toString(),(n,e)=>n.isEqual(e))}const _k=new ot(ye.comparator),vk=new St(ye.comparator);function Oe(...n){let e=vk;for(const t of n)e=e.add(t);return e}const wk=new St(Me);function Ek(){return wk}/**
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
 */function up(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kc(e)?"-0":e}}function bw(n){return{integerValue:""+n}}function Tk(n,e){return QA(e)?bw(e):up(n,e)}/**
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
 */class eh{constructor(){this._=void 0}}function Ik(n,e,t){return n instanceof bc?function(o,l){const c={fields:{[mw]:{stringValue:pw},[yw]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&ip(l)&&(l=Yc(l)),l&&(c.fields[gw]=l),{mapValue:c}}(t,e):n instanceof _l?Lw(n,e):n instanceof vl?Vw(n,e):function(o,l){const c=Ow(o,l),d=i_(c)+i_(o.Ie);return wf(c)&&wf(o.Ie)?bw(d):up(o.serializer,d)}(n,e)}function Sk(n,e,t){return n instanceof _l?Lw(n,e):n instanceof vl?Vw(n,e):t}function Ow(n,e){return n instanceof Oc?function(i){return wf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class bc extends eh{}class _l extends eh{constructor(e){super(),this.elements=e}}function Lw(n,e){const t=Mw(e);for(const i of n.elements)t.some(o=>wr(o,i))||t.push(i);return{arrayValue:{values:t}}}class vl extends eh{constructor(e){super(),this.elements=e}}function Vw(n,e){let t=Mw(e);for(const i of n.elements)t=t.filter(o=>!wr(o,i));return{arrayValue:{values:t}}}class Oc extends eh{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function i_(n){return dt(n.integerValue||n.doubleValue)}function Mw(n){return sp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ck(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof _l&&o instanceof _l||i instanceof vl&&o instanceof vl?Uo(i.elements,o.elements,wr):i instanceof Oc&&o instanceof Oc?wr(i.Ie,o.Ie):i instanceof bc&&o instanceof bc}(n.transform,e.transform)}class Rk{constructor(e,t){this.version=e,this.transformResults=t}}class Dn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class th{}function Fw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cp(n.key,Dn.none()):new Nl(n.key,n.data,Dn.none());{const t=n.data,i=cn.empty();let o=new St(Vt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Wi(n.key,i,new _n(o.toArray()),Dn.none())}}function Ak(n,e,t){n instanceof Nl?function(o,l,c){const d=o.value.clone(),p=o_(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Wi?function(o,l,c){if(!gc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=o_(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(Uw(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function ul(n,e,t,i){return n instanceof Nl?function(l,c,d,p){if(!gc(l.precondition,c))return d;const y=l.value.clone(),v=a_(l.fieldTransforms,p,c);return y.setAll(v),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Wi?function(l,c,d,p){if(!gc(l.precondition,c))return d;const y=a_(l.fieldTransforms,p,c),v=c.data;return v.setAll(Uw(l)),v.setAll(y),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,c,d){return gc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function kk(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Ow(i.transform,o||null);l!=null&&(t===null&&(t=cn.empty()),t.set(i.field,l))}return t||null}function s_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Uo(i,o,(l,c)=>Ck(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Nl extends th{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Wi extends th{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Uw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function o_(n,e,t){const i=new Map;$e(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,Sk(c,d,t[o]))}return i}function a_(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,Ik(l,c,e))}return i}class cp extends th{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Pk extends th{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&Ak(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ul(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ul(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Dw();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=Fw(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Re.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Oe())}isEqual(e){return this.batchId===e.batchId&&Uo(this.mutations,e.mutations,(t,i)=>s_(t,i))&&Uo(this.baseMutations,e.baseMutations,(t,i)=>s_(t,i))}}class hp{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){$e(e.mutations.length===i.length);let o=function(){return _k}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new hp(e,t,i,o)}}/**
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
 */class Nk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Dk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var mt,Ue;function bk(n){switch(n){case X.OK:return Se();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return Se()}}function Bw(n){if(n===void 0)return Gr("GRPC error has no .code"),X.UNKNOWN;switch(n){case mt.OK:return X.OK;case mt.CANCELLED:return X.CANCELLED;case mt.UNKNOWN:return X.UNKNOWN;case mt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case mt.INTERNAL:return X.INTERNAL;case mt.UNAVAILABLE:return X.UNAVAILABLE;case mt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case mt.NOT_FOUND:return X.NOT_FOUND;case mt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case mt.ABORTED:return X.ABORTED;case mt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case mt.DATA_LOSS:return X.DATA_LOSS;default:return Se()}}(Ue=mt||(mt={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ok(){return new TextEncoder}/**
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
 */const Lk=new Ni([4294967295,4294967295],0);function l_(n){const e=Ok().encode(n),t=new rw;return t.update(e),new Uint8Array(t.digest())}function u_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ni([t,i],0),new Ni([o,l],0)]}class dp{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new rl(`Invalid padding: ${t}`);if(i<0)throw new rl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new rl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new rl(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Ni.fromNumber(this.Ee)}Ae(e,t,i){let o=e.add(t.multiply(Ni.fromNumber(i)));return o.compare(Lk)===1&&(o=new Ni([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=l_(e),[i,o]=u_(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(i,o,l);if(!this.Re(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new dp(l,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=l_(e),[i,o]=u_(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(i,o,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class nh{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Dl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new nh(Re.min(),o,new ot(Me),Qr(),Oe())}}class Dl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Dl(i,t,Oe(),Oe(),Oe())}}/**
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
 */class yc{constructor(e,t,i,o){this.me=e,this.removedTargetIds=t,this.key=i,this.fe=o}}class zw{constructor(e,t){this.targetId=e,this.ge=t}}class jw{constructor(e,t,i=Mt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class c_{constructor(){this.pe=0,this.ye=h_(),this.we=Mt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Oe(),t=Oe(),i=Oe();return this.ye.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Se()}}),new Dl(this.we,this.Se,e,t,i)}Me(){this.be=!1,this.ye=h_()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,$e(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Vk{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Qr(),this.$e=rc(),this.Ke=rc(),this.Ue=new ot(Me)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Ce(e.resumeToken);break;case 1:i.Be(),i.De||i.Me(),i.Ce(e.resumeToken);break;case 2:i.Be(),i.De||this.removeTarget(t);break;case 3:this.Je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Ce(e.resumeToken));break;default:Se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((i,o)=>{this.Je(o)&&t(o)})}Ze(e){const t=e.targetId,i=e.ge.count,o=this.Xe(t);if(o){const l=o.target;if(Tf(l))if(i===0){const c=new ye(l.path);this.ze(t,c,Ht.newNoDocument(c,Re.min()))}else $e(i===1);else{const c=this.et(t);if(c!==i){const d=this.tt(e),p=d?this.nt(d,e,c):1;if(p!==0){this.Ye(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,y)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=Mi(i).toUint8Array()}catch(p){if(p instanceof fw)return Fo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new dp(c,o,l)}catch(p){return Fo(p instanceof rl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,i){return t.ge.count===i-this.st(e,t.targetId)?0:2}st(e,t){const i=this.ke.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),o++)}),o}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&Tf(d.target)){const p=new ye(d.target.path);this._t(p).has(c)||this.ut(c,p)||this.ze(c,p,Ht.newNoDocument(p,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let i=Oe();this.Ke.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Xe(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const o=new nh(e,t,this.Ue,this.Qe,i);return this.Qe=Qr(),this.$e=rc(),this.Ke=rc(),this.Ue=new ot(Me),o}Ge(e,t){if(!this.Je(e))return;const i=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,i),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),i&&(this.Qe=this.Qe.insert(t,i))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new c_,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new St(Me),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new St(Me),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new c_),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function rc(){return new ot(ye.comparator)}function h_(){return new ot(ye.comparator)}const Mk={asc:"ASCENDING",desc:"DESCENDING"},Fk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Uk={and:"AND",or:"OR"};class Bk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Cf(n,e){return n.useProto3Json||Xc(e)?e:{value:e}}function Lc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $w(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zk(n,e){return Lc(n,e.toTimestamp())}function vr(n){return $e(!!n),Re.fromTimestamp(function(t){const i=Vi(t);return new It(i.seconds,i.nanos)}(n))}function fp(n,e){return Rf(n,e).canonicalString()}function Rf(n,e){const t=function(o){return new Je(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Hw(n){const e=Je.fromString(n);return $e(Qw(e)),e}function Af(n,e){return fp(n.databaseId,e.path)}function Zd(n,e){const t=Hw(e);if(t.get(1)!==n.databaseId.projectId)throw new he(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(qw(t))}function Ww(n,e){return fp(n.databaseId,e)}function jk(n){const e=Hw(n);return e.length===4?Je.emptyPath():qw(e)}function kf(n){return new Je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qw(n){return $e(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function d_(n,e,t){return{name:Af(n,e),fields:t.value.mapValue.fields}}function $k(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,v){return y.useProto3Json?($e(v===void 0||typeof v=="string"),Mt.fromBase64String(v||"")):($e(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Mt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const v=y.code===void 0?X.UNKNOWN:Bw(y.code);return new he(v,y.message||"")}(c);t=new jw(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Zd(n,i.document.name),l=vr(i.document.updateTime),c=i.document.createTime?vr(i.document.createTime):Re.min(),d=new cn({mapValue:{fields:i.document.fields}}),p=Ht.newFoundDocument(o,l,c,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new yc(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Zd(n,i.document),l=i.readTime?vr(i.readTime):Re.min(),c=Ht.newNoDocument(o,l),d=i.removedTargetIds||[];t=new yc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Zd(n,i.document),l=i.removedTargetIds||[];t=new yc([],l,o,null)}else{if(!("filter"in e))return Se();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new Dk(o,l),d=i.targetId;t=new zw(d,c)}}return t}function Hk(n,e){let t;if(e instanceof Nl)t={update:d_(n,e.key,e.value)};else if(e instanceof cp)t={delete:Af(n,e.key)};else if(e instanceof Wi)t={update:d_(n,e.key,e.data),updateMask:Zk(e.fieldMask)};else{if(!(e instanceof Pk))return Se();t={verify:Af(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof bc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof _l)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof vl)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Oc)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw Se()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:zk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Se()}(n,e.precondition)),t}function Wk(n,e){return n&&n.length>0?($e(e!==void 0),n.map(t=>function(o,l){let c=o.updateTime?vr(o.updateTime):vr(l);return c.isEqual(Re.min())&&(c=vr(l)),new Rk(c,o.transformResults||[])}(t,e))):[]}function qk(n,e){return{documents:[Ww(n,e.path)]}}function Kk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Ww(n,o);const l=function(y){if(y.length!==0)return Gw(Yn.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(v=>function(I){return{field:xo(I.field),direction:Xk(I.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Cf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ht:t,parent:o}}function Gk(n){let e=jk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){$e(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(T){const I=Kw(T);return I instanceof Yn&&Iw(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(I=>function(U){return new Dc(No(U.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(T){let I;return I=typeof T=="object"?T.value:T,Xc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,x=T.values||[];return new Nc(x,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,x=T.values||[];return new Nc(x,I)}(t.endAt)),fk(e,o,c,l,d,"F",p,y)}function Qk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Kw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=No(t.unaryFilter.field);return gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=No(t.unaryFilter.field);return gt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=No(t.unaryFilter.field);return gt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=No(t.unaryFilter.field);return gt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(n):n.fieldFilter!==void 0?function(t){return gt.create(No(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Yn.create(t.compositeFilter.filters.map(i=>Kw(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(n):Se()}function Xk(n){return Mk[n]}function Yk(n){return Fk[n]}function Jk(n){return Uk[n]}function xo(n){return{fieldPath:n.canonicalString()}}function No(n){return Vt.fromServerFormat(n.fieldPath)}function Gw(n){return n instanceof gt?function(t){if(t.op==="=="){if(Zy(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NAN"}};if(Jy(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zy(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NAN"}};if(Jy(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(t.field),op:Yk(t.op),value:t.value}}}(n):n instanceof Yn?function(t){const i=t.getFilters().map(o=>Gw(o));return i.length===1?i[0]:{compositeFilter:{op:Jk(t.op),filters:i}}}(n):Se()}function Zk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ki{constructor(e,t,i,o,l=Re.min(),c=Re.min(),d=Mt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class eP{constructor(e){this.Tt=e}}function tP(n){const e=Gk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Sf(e,e.limit,"L"):e}/**
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
 */class nP{constructor(){this.Tn=new rP}addToCollectionParentIndex(e,t){return this.Tn.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(Li.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(Li.min())}updateCollectionGroup(e,t,i){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class rP{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new St(Je.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new St(Je.comparator)).toArray()}}/**
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
 */const f_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xw=41943040;class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(Xw,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class jo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new jo(0)}static Un(){return new jo(-1)}}/**
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
 */const p_="LruGarbageCollector",iP=1048576;function m_([n,e],[t,i]){const o=Me(n,t);return o===0?Me(e,i):o}class sP{constructor(e){this.Hn=e,this.buffer=new St(m_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();m_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class oP{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){le(p_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yo(t)?le(p_,"Ignoring IndexedDB error during garbage collection: ",t):await Xo(t)}await this.er(3e5)})}}class aP{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(Qc.ae);const i=new sP(t);return this.tr.forEachTarget(e,o=>i.Zn(o.sequenceNumber)).next(()=>this.tr.rr(e,o=>i.Zn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.tr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(f_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),f_):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let i,o,l,c,d,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),ko()<=be.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function lP(n,e){return new aP(n,e)}/**
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
 */class uP{constructor(){this.changes=new Ds(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class cP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class hP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&ul(i.mutation,o,_n.empty(),It.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Oe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Oe()){const o=Es();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=nl();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Es();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Oe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let l=Qr();const c=ll(),d=function(){return ll()}();return t.forEach((p,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Wi)?l=l.insert(y.key,y):v!==void 0?(c.set(y.key,v.mutation.getFieldMask()),ul(v.mutation,y,v.mutation.getFieldMask(),It.now())):c.set(y.key,_n.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,v)=>c.set(y,v)),t.forEach((y,v)=>{var T;return d.set(y,new cP(v,(T=c.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=ll();let o=new ot((c,d)=>c-d),l=Oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let v=i.get(p)||_n.empty();v=d.applyToLocalView(y,v),i.set(p,v);const T=(o.get(d.batchId)||Oe()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,T=Dw();v.forEach(I=>{if(!l.has(I)){const x=Fw(t.get(I),i.get(I));x!==null&&T.set(I,x),l=l.add(I)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return Q.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Aw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Q.resolve(Es());let d=pl,p=l;return c.next(y=>Q.forEach(y,(v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?Q.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{p=p.insert(v,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Oe())).next(v=>({batchId:d,changes:Nw(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=nl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=nl();return this.indexManager.getCollectionParents(e,l).next(d=>Q.forEach(d,p=>{const y=function(T,I){return new xl(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((T,I)=>{c=c.insert(T,I)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const v=y.getKey();c.get(v)===null&&(c=c.insert(v,Ht.newInvalidDocument(v)))});let d=nl();return c.forEach((p,y)=>{const v=l.get(p);v!==void 0&&ul(v.mutation,y,_n.empty(),It.now()),Zc(t,y)&&(d=d.insert(p,y))}),d})}}/**
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
 */class dP{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return Q.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:vr(o.createTime)}}(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(o){return{name:o.name,query:tP(o.bundledQuery),readTime:vr(o.readTime)}}(t)),Q.resolve()}}/**
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
 */class fP{constructor(){this.overlays=new ot(ye.comparator),this.Rr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Es();return Q.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Et(e,t,l)}),Q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Rr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(i)),Q.resolve()}getOverlaysForCollection(e,t,i){const o=Es(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new ot((y,v)=>y-v);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=l.get(y.largestBatchId);v===null&&(v=Es(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=Es(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return Q.resolve(d)}Et(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.Rr.get(o.largestBatchId).delete(i.key);this.Rr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new Nk(t,i));let l=this.Rr.get(t);l===void 0&&(l=Oe(),this.Rr.set(t,l)),this.Rr.set(t,l.add(i.key))}}/**
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
 */class pP{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
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
 */class pp{constructor(){this.Vr=new St(xt.mr),this.gr=new St(xt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const i=new xt(e,t);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.wr(new xt(e,t))}Sr(e,t){e.forEach(i=>this.removeReference(i,t))}br(e){const t=new ye(new Je([])),i=new xt(t,e),o=new xt(t,e+1),l=[];return this.gr.forEachInRange([i,o],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ye(new Je([])),i=new xt(t,e),o=new xt(t,e+1);let l=Oe();return this.gr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new xt(e,0),i=this.Vr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class xt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ye.comparator(e.key,t.key)||Me(e.Cr,t.Cr)}static pr(e,t){return Me(e.Cr,t.Cr)||ye.comparator(e.key,t.key)}}/**
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
 */class mP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new St(xt.mr)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new xk(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.Mr=this.Mr.add(new xt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Q.resolve(c)}lookupMutationBatch(e,t){return Q.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Nr(i),l=o<0?0:o;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?rp:this.Fr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new xt(t,0),o=new xt(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([i,o],c=>{const d=this.Or(c.Cr);l.push(d)}),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new St(Me);return t.forEach(o=>{const l=new xt(o,0),c=new xt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{i=i.add(d.Cr)})}),Q.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const c=new xt(new ye(l),0);let d=new St(Me);return this.Mr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.Cr)),!0)},c),Q.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(i=>{const o=this.Or(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){$e(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return Q.forEach(t.mutations,o=>{const l=new xt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,t){const i=new xt(t,0),o=this.Mr.firstAfterOrEqual(i);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class gP{constructor(e){this.kr=e,this.docs=function(){return new ot(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.kr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Q.resolve(i?i.document.mutableCopy():Ht.newInvalidDocument(t))}getEntries(e,t){let i=Qr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ht.newInvalidDocument(o))}),Q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Qr();const c=t.path,d=new ye(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||WA(HA(v),i)<=0||(o.has(v.key)||Zc(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Se()}qr(e,t){return Q.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new yP(this)}getSize(e){return Q.resolve(this.size)}}class yP extends uP{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(i)}),Q.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class _P{constructor(e){this.persistence=e,this.Qr=new Ds(t=>op(t),ap),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.$r=0,this.Kr=new pp,this.targetCount=0,this.Ur=jo.Kn()}forEachTarget(e,t){return this.Qr.forEach((i,o)=>t(o)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.$r&&(this.$r=t),Q.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new jo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.zn(t),Q.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),Q.waitFor(l).next(()=>o)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Qr.get(t)||null;return Q.resolve(i)}addMatchingKeys(e,t,i){return this.Kr.yr(t,i),Q.resolve()}removeMatchingKeys(e,t,i){this.Kr.Sr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Kr.vr(t);return Q.resolve(i)}containsKey(e,t){return Q.resolve(this.Kr.containsKey(t))}}/**
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
 */class Yw{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Qc(0),this.zr=!1,this.zr=!0,this.jr=new pP,this.referenceDelegate=e(this),this.Hr=new _P(this),this.indexManager=new nP,this.remoteDocumentCache=function(o){return new gP(o)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new eP(t),this.Yr=new dP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Wr[e.toKey()];return i||(i=new mP(t,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const o=new vP(this.Gr.next());return this.referenceDelegate.Zr(),i(o).next(l=>this.referenceDelegate.Xr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}ei(e,t){return Q.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,t)))}}class vP extends KA{constructor(e){super(),this.currentSequenceNumber=e}}class mp{constructor(e){this.persistence=e,this.ti=new pp,this.ni=null}static ri(e){return new mp(e)}get ii(){if(this.ni)return this.ni;throw Se()}addReference(e,t,i){return this.ti.addReference(i,t),this.ii.delete(i.toString()),Q.resolve()}removeReference(e,t,i){return this.ti.removeReference(i,t),this.ii.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),Q.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(o=>this.ii.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ii.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.ii,i=>{const o=ye.fromPath(i);return this.si(e,o).next(l=>{l||t.removeEntry(o,Re.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(i=>{i?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return Q.or([()=>Q.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Vc{constructor(e,t){this.persistence=e,this.oi=new Ds(i=>XA(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=lP(this,t)}static ri(e,t){return new Vc(e,t)}Zr(){}Xr(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}sr(e){let t=0;return this.rr(e,i=>{t++}).next(()=>t)}rr(e,t){return Q.forEach(this.oi,(i,o)=>this.ar(e,i,o).next(l=>l?Q.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.qr(e,c=>this.ar(e,c,t).next(d=>{d||(i++,l.removeEntry(c,Re.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),Q.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=pc(e.data.value)),t}ar(e,t,i){return Q.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return Q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Hi=i,this.Ji=o}static Yi(e,t){let i=Oe(),o=Oe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new gp(e,t.fromCache,i,o)}}/**
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
 */class wP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class EP{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return eS()?8:GA(Wt())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new wP;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,i,o){return i.documentReadCount<this.es?(ko()<=be.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Q.resolve()):(ko()<=be.DEBUG&&le("QueryEngine","Query:",Po(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.ts*o?(ko()<=be.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(t))):Q.resolve())}rs(e,t){if(r_(t))return Q.resolve(null);let i=_r(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Sf(t,null,"F"),i=_r(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Oe(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.cs(t,d);return this.ls(t,y,c,p.readTime)?this.rs(e,Sf(t,null,"F")):this.hs(e,y,t,p)}))})))}ss(e,t,i,o){return r_(t)||o.isEqual(Re.min())?Q.resolve(null):this.ns.getDocuments(e,i).next(l=>{const c=this.cs(t,l);return this.ls(t,c,i,o)?Q.resolve(null):(ko()<=be.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Po(t)),this.hs(e,c,t,$A(o,pl)).next(d=>d))})}cs(e,t){let i=new St(Pw(e));return t.forEach((o,l)=>{Zc(e,l)&&(i=i.add(l))}),i}ls(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}_s(e,t,i){return ko()<=be.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Po(t)),this.ns.getDocumentsMatchingQuery(e,t,Li.min(),i)}hs(e,t,i,o){return this.ns.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const yp="LocalStore",TP=3e8;class IP{constructor(e,t,i,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new ot(Me),this.Is=new Ds(l=>op(l),ap),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hP(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function SP(n,e,t,i){return new IP(n,e,t,i)}async function Jw(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.As(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=Oe();for(const y of o){c.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of l){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Rs:y,removedBatchIds:c,addedBatchIds:d}))})})}function CP(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,y,v){const T=y.batch,I=T.keys();let x=Q.resolve();return I.forEach(U=>{x=x.next(()=>v.getEntry(p,U)).next(j=>{const F=y.docVersions.get(U);$e(F!==null),j.version.compareTo(F)<0&&(T.applyToRemoteDocument(j,y),j.isValidDocument()&&(j.setReadTime(y.commitVersion),v.addEntry(j)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Oe();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Zw(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function RP(n,e){const t=Ae(n),i=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const d=[];e.targetChanges.forEach((v,T)=>{const I=o.get(T);if(!I)return;d.push(t.Hr.removeMatchingKeys(l,v.removedDocuments,T).next(()=>t.Hr.addMatchingKeys(l,v.addedDocuments,T)));let x=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(Mt.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,i)),o=o.insert(T,x),function(j,F,q){return j.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=TP?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(I,x,v)&&d.push(t.Hr.updateTargetData(l,x))});let p=Qr(),y=Oe();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(AP(l,c,e.documentUpdates).next(v=>{p=v.Vs,y=v.fs})),!i.isEqual(Re.min())){const v=t.Hr.getLastRemoteSnapshotVersion(l).next(T=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return Q.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.Ts=o,l))}function AP(n,e,t){let i=Oe(),o=Oe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Qr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Re.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):le(yp,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Vs:c,fs:o}})}function kP(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=rp),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function PP(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Hr.getTargetData(i,e).next(l=>l?(o=l,Q.resolve(o)):t.Hr.allocateTargetId(i).next(c=>(o=new ki(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Hr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.Ts.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(i.targetId,i),t.Is.set(e,i.targetId)),i})}async function Pf(n,e,t){const i=Ae(n),o=i.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Yo(c))throw c;le(yp,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ts=i.Ts.remove(e),i.Is.delete(o.target)}function g_(n,e,t){const i=Ae(n);let o=Re.min(),l=Oe();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,v){const T=Ae(p),I=T.Is.get(v);return I!==void 0?Q.resolve(T.Ts.get(I)):T.Hr.getTargetData(y,v)}(i,c,_r(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i.Ps.getDocumentsMatchingQuery(c,e,t?o:Re.min(),t?l:Oe())).next(d=>(xP(i,mk(e),d),{documents:d,gs:l})))}function xP(n,e,t){let i=n.Es.get(e)||Re.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.Es.set(e,i)}class y_{constructor(){this.activeTargetIds=Ek()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NP{constructor(){this.ho=new y_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,i){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new y_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class DP{To(e){}shutdown(){}}/**
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
 */const __="ConnectivityMonitor";class v_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){le(__,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){le(__,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ic=null;function xf(){return ic===null?ic=function(){return 268435456+Math.round(2147483648*Math.random())}():ic++,"0x"+ic.toString(16)}/**
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
 */const ef="RestConnection",bP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class OP{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${o}`,this.wo=this.databaseId.database===Pc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}So(e,t,i,o,l){const c=xf(),d=this.bo(e,t.toUriEncodedString());le(ef,`Sending RPC '${e}' ${c}:`,d,i);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,o,l),this.vo(e,d,p,i).then(y=>(le(ef,`Received RPC '${e}' ${c}: `,y),y),y=>{throw Fo(ef,`RPC '${e}' ${c} failed with error: `,y,"url: ",d,"request:",i),y})}Co(e,t,i,o,l,c){return this.So(e,t,i,o,l)}Do(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,l)=>e[l]=o),i&&i.headers.forEach((o,l)=>e[l]=o)}bo(e,t){const i=bP[e];return`${this.po}/v1/${t}:${i}`}terminate(){}}/**
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
 */class LP{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const jt="WebChannelConnection";class VP extends OP{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,o){const l=xf();return new Promise((c,d)=>{const p=new iw;p.setWithCredentials(!0),p.listenOnce(sw.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case fc.NO_ERROR:const v=p.getResponseJson();le(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),c(v);break;case fc.TIMEOUT:le(jt,`RPC '${e}' ${l} timed out`),d(new he(X.DEADLINE_EXCEEDED,"Request time out"));break;case fc.HTTP_ERROR:const T=p.getStatus();if(le(jt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const U=function(F){const q=F.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(q)>=0?q:X.UNKNOWN}(x.status);d(new he(U,x.message))}else d(new he(X.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new he(X.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{le(jt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);le(jt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}Wo(e,t,i){const o=xf(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=lw(),d=aw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");le(jt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const T=c.createWebChannel(v,p);let I=!1,x=!1;const U=new LP({Fo:F=>{x?le(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(I||(le(jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),le(jt,`RPC '${e}' stream ${o} sending:`,F),T.send(F))},Mo:()=>T.close()}),j=(F,q,Y)=>{F.listen(q,G=>{try{Y(G)}catch(ne){setTimeout(()=>{throw ne},0)}})};return j(T,tl.EventType.OPEN,()=>{x||(le(jt,`RPC '${e}' stream ${o} transport opened.`),U.Qo())}),j(T,tl.EventType.CLOSE,()=>{x||(x=!0,le(jt,`RPC '${e}' stream ${o} transport closed`),U.Ko())}),j(T,tl.EventType.ERROR,F=>{x||(x=!0,Fo(jt,`RPC '${e}' stream ${o} transport errored:`,F),U.Ko(new he(X.UNAVAILABLE,"The operation could not be completed")))}),j(T,tl.EventType.MESSAGE,F=>{var q;if(!x){const Y=F.data[0];$e(!!Y);const G=Y,ne=(G==null?void 0:G.error)||((q=G[0])===null||q===void 0?void 0:q.error);if(ne){le(jt,`RPC '${e}' stream ${o} received error:`,ne);const _e=ne.status;let ge=function(C){const P=mt[C];if(P!==void 0)return Bw(P)}(_e),k=ne.message;ge===void 0&&(ge=X.INTERNAL,k="Unknown error status: "+_e+" with message "+ne.message),x=!0,U.Ko(new he(ge,k)),T.close()}else le(jt,`RPC '${e}' stream ${o} received:`,Y),U.Uo(Y)}}),j(d,ow.STAT_EVENT,F=>{F.stat===_f.PROXY?le(jt,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===_f.NOPROXY&&le(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.$o()},0),U}}function tf(){return typeof document<"u"?document:null}/**
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
 */function rh(n){return new Bk(n,!0)}/**
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
 */class eE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=i,this.zo=o,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-i);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const w_="PersistentStream";class tE{constructor(e,t,i,o,l,c,d,p){this.Ti=e,this.n_=i,this.r_=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new eE(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Gr(t.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.i_===t&&this.V_(i,o)},i=>{e(()=>{const o=new he(X.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(o)})})}V_(e,t){const i=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(o=>{i(()=>this.m_(o))}),this.stream.onMessage(o=>{i(()=>++this.__==1?this.g_(o):this.onNext(o))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return le(w_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(le(w_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class MP extends tE{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=$k(this.serializer,e),i=function(l){if(!("targetChange"in l))return Re.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Re.min():c.readTime?vr(c.readTime):Re.min()}(e);return this.listener.p_(t,i)}y_(e){const t={};t.database=kf(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=Tf(p)?{documents:qk(l,p)}:{query:Kk(l,p).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=$w(l,c.resumeToken);const y=Cf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Re.min())>0){d.readTime=Lc(l,c.snapshotVersion.toTimestamp());const y=Cf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=Qk(this.serializer,e);i&&(t.labels=i),this.I_(t)}w_(e){const t={};t.database=kf(this.serializer),t.removeTarget=e,this.I_(t)}}class FP extends tE{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return $e(!!e.streamToken),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){$e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=Wk(e.writeResults,e.commitTime),i=vr(e.commitTime);return this.listener.v_(i,t)}C_(){const e={};e.database=kf(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Hk(this.serializer,i))};this.I_(t)}}/**
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
 */class UP{}class BP extends UP{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new he(X.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,i,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.So(e,Rf(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new he(X.UNKNOWN,l.toString())})}Co(e,t,i,o,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,Rf(t,i),o,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he(X.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class zP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Gr(t),this.N_=!1):le("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const ks="RemoteStore";class jP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{i.enqueueAndForget(async()=>{bs(this)&&(le(ks,"Restarting streams for network reachability change."),await async function(p){const y=Ae(p);y.W_.add(4),await bl(y),y.j_.set("Unknown"),y.W_.delete(4),await ih(y)}(this))})}),this.j_=new zP(i,o)}}async function ih(n){if(bs(n))for(const e of n.G_)await e(!0)}async function bl(n){for(const e of n.G_)await e(!1)}function nE(n,e){const t=Ae(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),Ep(t)?wp(t):Jo(t).c_()&&vp(t,e))}function _p(n,e){const t=Ae(n),i=Jo(t);t.U_.delete(e),i.c_()&&rE(t,e),t.U_.size===0&&(i.c_()?i.P_():bs(t)&&t.j_.set("Unknown"))}function vp(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jo(n).y_(e)}function rE(n,e){n.H_.Ne(e),Jo(n).w_(e)}function wp(n){n.H_=new Vk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Jo(n).start(),n.j_.B_()}function Ep(n){return bs(n)&&!Jo(n).u_()&&n.U_.size>0}function bs(n){return Ae(n).W_.size===0}function iE(n){n.H_=void 0}async function $P(n){n.j_.set("Online")}async function HP(n){n.U_.forEach((e,t)=>{vp(n,e)})}async function WP(n,e){iE(n),Ep(n)?(n.j_.q_(e),wp(n)):n.j_.set("Unknown")}async function qP(n,e,t){if(n.j_.set("Online"),e instanceof jw&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const d of l.targetIds)o.U_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.U_.delete(d),o.H_.removeTarget(d))}(n,e)}catch(i){le(ks,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Mc(n,i)}else if(e instanceof yc?n.H_.We(e):e instanceof zw?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Re.min()))try{const i=await Zw(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.U_.get(y);v&&l.U_.set(y,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const v=l.U_.get(p);if(!v)return;l.U_.set(p,v.withResumeToken(Mt.EMPTY_BYTE_STRING,v.snapshotVersion)),rE(l,p);const T=new ki(v.target,p,y,v.sequenceNumber);vp(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){le(ks,"Failed to raise snapshot:",i),await Mc(n,i)}}async function Mc(n,e,t){if(!Yo(e))throw e;n.W_.add(1),await bl(n),n.j_.set("Offline"),t||(t=()=>Zw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{le(ks,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ih(n)})}function sE(n,e){return e().catch(t=>Mc(n,t,e))}async function sh(n){const e=Ae(n),t=Ui(e);let i=e.K_.length>0?e.K_[e.K_.length-1].batchId:rp;for(;KP(e);)try{const o=await kP(e.localStore,i);if(o===null){e.K_.length===0&&t.P_();break}i=o.batchId,GP(e,o)}catch(o){await Mc(e,o)}oE(e)&&aE(e)}function KP(n){return bs(n)&&n.K_.length<10}function GP(n,e){n.K_.push(e);const t=Ui(n);t.c_()&&t.S_&&t.b_(e.mutations)}function oE(n){return bs(n)&&!Ui(n).u_()&&n.K_.length>0}function aE(n){Ui(n).start()}async function QP(n){Ui(n).C_()}async function XP(n){const e=Ui(n);for(const t of n.K_)e.b_(t.mutations)}async function YP(n,e,t){const i=n.K_.shift(),o=hp.from(i,e,t);await sE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await sh(n)}async function JP(n,e){e&&Ui(n).S_&&await async function(i,o){if(function(c){return bk(c)&&c!==X.ABORTED}(o.code)){const l=i.K_.shift();Ui(i).h_(),await sE(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await sh(i)}}(n,e),oE(n)&&aE(n)}async function E_(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),le(ks,"RemoteStore received new credentials");const i=bs(t);t.W_.add(3),await bl(t),i&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ih(t)}async function ZP(n,e){const t=Ae(n);e?(t.W_.delete(2),await ih(t)):e||(t.W_.add(2),await bl(t),t.j_.set("Unknown"))}function Jo(n){return n.J_||(n.J_=function(t,i,o){const l=Ae(t);return l.M_(),new MP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{xo:$P.bind(null,n),No:HP.bind(null,n),Lo:WP.bind(null,n),p_:qP.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Ep(n)?wp(n):n.j_.set("Unknown")):(await n.J_.stop(),iE(n))})),n.J_}function Ui(n){return n.Y_||(n.Y_=function(t,i,o){const l=Ae(t);return l.M_(),new FP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:QP.bind(null,n),Lo:JP.bind(null,n),D_:XP.bind(null,n),v_:YP.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await sh(n)):(await n.Y_.stop(),n.K_.length>0&&(le(ks,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
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
 */class Tp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Hr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new Tp(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ip(n,e){if(Gr("AsyncQueue",`${e}: ${n}`),Yo(n))return new he(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Vo{static emptySet(e){return new Vo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=nl(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Vo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class T_{constructor(){this.Z_=new ot(ye.comparator)}track(e){const t=e.doc.key,i=this.Z_.get(t);i?e.type!==0&&i.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&i.type!==1?this.Z_=this.Z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Z_=this.Z_.remove(t):e.type===1&&i.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Se():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class $o{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new $o(e,t,Vo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class e1{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class t1{constructor(){this.queries=I_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,i){const o=Ae(t),l=o.queries;o.queries=I_(),l.forEach((c,d)=>{for(const p of d.ta)p.onError(i)})})(this,new he(X.ABORTED,"Firestore shutting down"))}}function I_(){return new Ds(n=>kw(n),Jc)}async function lE(n,e){const t=Ae(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.na()&&e.ra()&&(i=2):(l=new e1,i=e.ra()?0:1);try{switch(i){case 0:l.ea=await t.onListen(o,!0);break;case 1:l.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=Ip(c,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&Sp(t)}async function uE(n,e){const t=Ae(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?o=e.ra()?0:1:!l.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function n1(n,e){const t=Ae(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.ta)d.oa(o)&&(i=!0);c.ea=o}}i&&Sp(t)}function r1(n,e,t){const i=Ae(n),o=i.queries.get(e);if(o)for(const l of o.ta)l.onError(t);i.queries.delete(e)}function Sp(n){n.ia.forEach(e=>{e.next()})}var Nf,S_;(S_=Nf||(Nf={}))._a="default",S_.Cache="cache";class cE{constructor(e,t,i){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=i||{}}oa(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new $o(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const i=t!=="Offline";return(!this.options.Ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=$o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Nf.Cache}}/**
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
 */class hE{constructor(e){this.key=e}}class dE{constructor(e){this.key=e}}class i1{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Oe(),this.mutatedKeys=Oe(),this.ya=Pw(e),this.wa=new Vo(this.ya)}get Sa(){return this.fa}ba(e,t){const i=t?t.Da:new T_,o=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,T)=>{const I=o.get(v),x=Zc(this.query,T)?T:null,U=!!I&&this.mutatedKeys.has(I.key),j=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let F=!1;I&&x?I.data.isEqual(x.data)?U!==j&&(i.track({type:3,doc:x}),F=!0):this.va(I,x)||(i.track({type:2,doc:x}),F=!0,(p&&this.ya(x,p)>0||y&&this.ya(x,y)<0)&&(d=!0)):!I&&x?(i.track({type:0,doc:x}),F=!0):I&&!x&&(i.track({type:1,doc:I}),F=!0,(p||y)&&(d=!0)),F&&(x?(c=c.add(x),l=j?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{wa:c,Da:i,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((v,T)=>function(x,U){const j=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return j(x)-j(U)}(v.type,T.type)||this.ya(v.doc,T.doc)),this.Ca(i),o=o!=null&&o;const d=t&&!o?this.Fa():[],p=this.pa.size===0&&this.current&&!o?1:0,y=p!==this.ga;return this.ga=p,c.length!==0||y?{snapshot:new $o(this.query,e.wa,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new T_,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Oe(),this.wa.forEach(i=>{this.xa(i.key)&&(this.pa=this.pa.add(i.key))});const t=[];return e.forEach(i=>{this.pa.has(i)||t.push(new dE(i))}),this.pa.forEach(i=>{e.has(i)||t.push(new hE(i))}),t}Oa(e){this.fa=e.gs,this.pa=Oe();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return $o.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Cp="SyncEngine";class s1{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class o1{constructor(e){this.key=e,this.Ba=!1}}class a1{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new Ds(d=>kw(d),Jc),this.qa=new Map,this.Qa=new Set,this.$a=new ot(ye.comparator),this.Ka=new Map,this.Ua=new pp,this.Wa={},this.Ga=new Map,this.za=jo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function l1(n,e,t=!0){const i=_E(n);let o;const l=i.ka.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Na()):o=await fE(i,e,t,!0),o}async function u1(n,e){const t=_E(n);await fE(t,e,!0,!1)}async function fE(n,e,t,i){const o=await PP(n.localStore,_r(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await c1(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&nE(n.remoteStore,o),d}async function c1(n,e,t,i,o){n.Ha=(T,I,x)=>async function(j,F,q,Y){let G=F.view.ba(q);G.ls&&(G=await g_(j.localStore,F.query,!1).then(({documents:k})=>F.view.ba(k,G)));const ne=Y&&Y.targetChanges.get(F.targetId),_e=Y&&Y.targetMismatches.get(F.targetId)!=null,ge=F.view.applyChanges(G,j.isPrimaryClient,ne,_e);return R_(j,F.targetId,ge.Ma),ge.snapshot}(n,T,I,x);const l=await g_(n.localStore,e,!0),c=new i1(e,l.gs),d=c.ba(l.documents),p=Dl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);R_(n,t,y.Ma);const v=new s1(e,t,c);return n.ka.set(e,v),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),y.snapshot}async function h1(n,e,t){const i=Ae(n),o=i.ka.get(e),l=i.qa.get(o.targetId);if(l.length>1)return i.qa.set(o.targetId,l.filter(c=>!Jc(c,e))),void i.ka.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Pf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&_p(i.remoteStore,o.targetId),Df(i,o.targetId)}).catch(Xo)):(Df(i,o.targetId),await Pf(i.localStore,o.targetId,!0))}async function d1(n,e){const t=Ae(n),i=t.ka.get(e),o=t.qa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),_p(t.remoteStore,i.targetId))}async function f1(n,e,t){const i=w1(n);try{const o=await function(c,d){const p=Ae(c),y=It.now(),v=d.reduce((x,U)=>x.add(U.key),Oe());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",x=>{let U=Qr(),j=Oe();return p.ds.getEntries(x,v).next(F=>{U=F,U.forEach((q,Y)=>{Y.isValidDocument()||(j=j.add(q))})}).next(()=>p.localDocuments.getOverlayedDocuments(x,U)).next(F=>{T=F;const q=[];for(const Y of d){const G=kk(Y,T.get(Y.key).overlayedDocument);G!=null&&q.push(new Wi(Y.key,G,ww(G.value.mapValue),Dn.exists(!0)))}return p.mutationQueue.addMutationBatch(x,y,q,d)}).next(F=>{I=F;const q=F.applyToLocalDocumentSet(T,j);return p.documentOverlayCache.saveOverlays(x,F.batchId,q)})}).then(()=>({batchId:I.batchId,changes:Nw(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.Wa[c.currentUser.toKey()];y||(y=new ot(Me)),y=y.insert(d,p),c.Wa[c.currentUser.toKey()]=y}(i,o.batchId,t),await Ol(i,o.changes),await sh(i.remoteStore)}catch(o){const l=Ip(o,"Failed to persist write");t.reject(l)}}async function pE(n,e){const t=Ae(n);try{const i=await RP(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.Ka.get(l);c&&($e(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Ba=!0:o.modifiedDocuments.size>0?$e(c.Ba):o.removedDocuments.size>0&&($e(c.Ba),c.Ba=!1))}),await Ol(t,i,e)}catch(i){await Xo(i)}}function C_(n,e,t){const i=Ae(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Ae(c);p.onlineState=d;let y=!1;p.queries.forEach((v,T)=>{for(const I of T.ta)I.sa(d)&&(y=!0)}),y&&Sp(p)}(i.eventManager,e),o.length&&i.La.p_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function p1(n,e,t){const i=Ae(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ka.get(e),l=o&&o.key;if(l){let c=new ot(ye.comparator);c=c.insert(l,Ht.newNoDocument(l,Re.min()));const d=Oe().add(l),p=new nh(Re.min(),new Map,new ot(Me),c,d);await pE(i,p),i.$a=i.$a.remove(l),i.Ka.delete(e),Rp(i)}else await Pf(i.localStore,e,!1).then(()=>Df(i,e,t)).catch(Xo)}async function m1(n,e){const t=Ae(n),i=e.batch.batchId;try{const o=await CP(t.localStore,e);gE(t,i,null),mE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Ol(t,o)}catch(o){await Xo(o)}}async function g1(n,e,t){const i=Ae(n);try{const o=await function(c,d){const p=Ae(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>($e(T!==null),v=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>p.localDocuments.getDocuments(y,v))})}(i.localStore,e);gE(i,e,t),mE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Ol(i,o)}catch(o){await Xo(o)}}function mE(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function gE(n,e,t){const i=Ae(n);let o=i.Wa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Wa[i.currentUser.toKey()]=o}}function Df(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.qa.get(e))n.ka.delete(i),t&&n.La.Ja(i,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.br(e).forEach(i=>{n.Ua.containsKey(i)||yE(n,i)})}function yE(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(_p(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),Rp(n))}function R_(n,e,t){for(const i of t)i instanceof hE?(n.Ua.addReference(i.key,e),y1(n,i)):i instanceof dE?(le(Cp,"Document no longer in limbo: "+i.key),n.Ua.removeReference(i.key,e),n.Ua.containsKey(i.key)||yE(n,i.key)):Se()}function y1(n,e){const t=e.key,i=t.path.canonicalString();n.$a.get(t)||n.Qa.has(i)||(le(Cp,"New document in limbo: "+t),n.Qa.add(i),Rp(n))}function Rp(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ye(Je.fromString(e)),i=n.za.next();n.Ka.set(i,new o1(t)),n.$a=n.$a.insert(t,i),nE(n.remoteStore,new ki(_r(lp(t.path)),i,"TargetPurposeLimboResolution",Qc.ae))}}async function Ol(n,e,t){const i=Ae(n),o=[],l=[],c=[];i.ka.isEmpty()||(i.ka.forEach((d,p)=>{c.push(i.Ha(p,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=gp.Yi(p.targetId,y);l.push(T)}}))}),await Promise.all(c),i.La.p_(o),await async function(p,y){const v=Ae(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Q.forEach(y,I=>Q.forEach(I.Hi,x=>v.persistence.referenceDelegate.addReference(T,I.targetId,x)).next(()=>Q.forEach(I.Ji,x=>v.persistence.referenceDelegate.removeReference(T,I.targetId,x)))))}catch(T){if(!Yo(T))throw T;le(yp,"Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const x=v.Ts.get(I),U=x.snapshotVersion,j=x.withLastLimboFreeSnapshotVersion(U);v.Ts=v.Ts.insert(I,j)}}}(i.localStore,l))}async function _1(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){le(Cp,"User change. New user:",e.toKey());const i=await Jw(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(p=>{p.reject(new he(X.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ol(t,i.Rs)}}function v1(n,e){const t=Ae(n),i=t.Ka.get(e);if(i&&i.Ba)return Oe().add(i.key);{let o=Oe();const l=t.qa.get(e);if(!l)return o;for(const c of l){const d=t.ka.get(c);o=o.unionWith(d.view.Sa)}return o}}function _E(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=v1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=p1.bind(null,e),e.La.p_=n1.bind(null,e.eventManager),e.La.Ja=r1.bind(null,e.eventManager),e}function w1(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=m1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=g1.bind(null,e),e}class Fc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=rh(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return SP(this.persistence,new EP,e.initialUser,this.serializer)}Xa(e){return new Yw(mp.ri,this.serializer)}Za(e){return new NP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fc.provider={build:()=>new Fc};class E1 extends Fc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){$e(this.persistence.referenceDelegate instanceof Vc);const i=this.persistence.referenceDelegate.garbageCollector;return new oP(i,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new Yw(i=>Vc.ri(i,t),this.serializer)}}class bf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>C_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=_1.bind(null,this.syncEngine),await ZP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new t1}()}createDatastore(e){const t=rh(e.databaseInfo.databaseId),i=function(l){return new VP(l)}(e.databaseInfo);return function(l,c,d,p){return new BP(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,d){return new jP(i,o,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>C_(this.syncEngine,t,0),function(){return v_.D()?new v_:new DP}())}createSyncEngine(e,t){return function(o,l,c,d,p,y,v){const T=new a1(o,l,c,d,p,y);return v&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ae(o);le(ks,"RemoteStore shutting down."),l.W_.add(5),await bl(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bf.provider={build:()=>new bf};/**
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
 */class vE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Gr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Bi="FirestoreClient";class T1{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=cw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{le(Bi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(le(Bi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Hr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ip(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function nf(n,e){n.asyncQueue.verifyOperationInProgress(),le(Bi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Jw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function A_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await I1(n);le(Bi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>E_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>E_(e.remoteStore,o)),n._onlineComponents=e}async function I1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le(Bi,"Using user provided OfflineComponentProvider");try{await nf(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Fo("Error using user provided cache. Falling back to memory cache: "+t),await nf(n,new Fc)}}else le(Bi,"Using default OfflineComponentProvider"),await nf(n,new E1(void 0));return n._offlineComponents}async function wE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le(Bi,"Using user provided OnlineComponentProvider"),await A_(n,n._uninitializedComponentsProvider._online)):(le(Bi,"Using default OnlineComponentProvider"),await A_(n,new bf))),n._onlineComponents}function S1(n){return wE(n).then(e=>e.syncEngine)}async function EE(n){const e=await wE(n),t=e.eventManager;return t.onListen=l1.bind(null,e.syncEngine),t.onUnlisten=h1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=u1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=d1.bind(null,e.syncEngine),t}function C1(n,e,t={}){const i=new Hr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const v=new vE({next:I=>{v.su(),c.enqueueAndForget(()=>uE(l,T));const x=I.docs.has(d);!x&&I.fromCache?y.reject(new he(X.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&I.fromCache&&p&&p.source==="server"?y.reject(new he(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new cE(lp(d.path),v,{includeMetadataChanges:!0,Ta:!0});return lE(l,T)}(await EE(n),n.asyncQueue,e,t,i)),i.promise}function R1(n,e,t={}){const i=new Hr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const v=new vE({next:I=>{v.su(),c.enqueueAndForget(()=>uE(l,T)),I.fromCache&&p.source==="server"?y.reject(new he(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new cE(d,v,{includeMetadataChanges:!0,Ta:!0});return lE(l,T)}(await EE(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function TE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const k_=new Map;/**
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
 */function IE(n,e,t){if(!t)throw new he(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function A1(n,e,t,i){if(e===!0&&i===!0)throw new he(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function P_(n){if(!ye.isDocumentKey(n))throw new he(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function x_(n){if(ye.isDocumentKey(n))throw new he(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function oh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se()}function Jn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=oh(n);throw new he(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const SE="firestore.googleapis.com",N_=!0;class D_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new he(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=SE,this.ssl=N_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:N_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iP)throw new he(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}A1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=TE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new he(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new he(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new he(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ah{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new D_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new D_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new LA;switch(i.type){case"firstParty":return new UA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new he(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=k_.get(t);i&&(le("ComponentProvider","Removing Datastore"),k_.delete(t),i.terminate())}(this),Promise.resolve()}}function k1(n,e,t,i={}){var o;const l=(n=Jn(n,ah))._getSettings(),c=`${e}:${t}`;if(l.host!==SE&&l.host!==c&&Fo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=$t.MOCK_USER;else{d=pv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new he(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new $t(y)}n._authCredentials=new VA(new uw(d,p))}}/**
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
 */class Zo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Zo(this.firestore,e,this._query)}}class Yt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class Di extends Zo{constructor(e,t,i){super(e,t,lp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new ye(e))}withConverter(e){return new Di(this.firestore,e,this._path)}}function lh(n,e,...t){if(n=st(n),IE("collection","path",e),n instanceof ah){const i=Je.fromString(e,...t);return x_(i),new Di(n,null,i)}{if(!(n instanceof Yt||n instanceof Di))throw new he(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Je.fromString(e,...t));return x_(i),new Di(n.firestore,null,i)}}function yt(n,e,...t){if(n=st(n),arguments.length===1&&(e=cw.newId()),IE("doc","path",e),n instanceof ah){const i=Je.fromString(e,...t);return P_(i),new Yt(n,null,new ye(i))}{if(!(n instanceof Yt||n instanceof Di))throw new he(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Je.fromString(e,...t));return P_(i),new Yt(n.firestore,n instanceof Di?n.converter:null,new ye(i))}}/**
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
 */const b_="AsyncQueue";class O_{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new eE(this,"async_queue_retry"),this.Su=()=>{const i=tf();i&&le(b_,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=e;const t=tf();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=tf();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Hr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Yo(e))throw e;le(b_,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Gr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.pu=!1,i))));return this.bu=t,t}enqueueAfterDelay(e,t,i){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=Tp.createAndSchedule(this,e,t,i,l=>this.Fu(l));return this.fu.push(o),o}Du(){this.gu&&Se()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Os extends ah{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new O_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new O_(e),this._firestoreClient=void 0,await e}}}function P1(n,e){const t=typeof n=="object"?n:qf(),i=typeof n=="string"?n:Pc,o=Wc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=hv("firestore");l&&k1(o,...l)}return o}function Ap(n){if(n._terminated)throw new he(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||x1(n),n._firestoreClient}function x1(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,v){return new ZA(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,TE(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new T1(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class Ho{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ho(Mt.fromBase64String(e))}catch(t){throw new he(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ho(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class uh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class kp{constructor(e){this._methodName=e}}/**
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
 */class Pp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}}/**
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
 */class xp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const N1=/^__.*__$/;class D1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Wi(e,this.data,this.fieldMask,t,this.fieldTransforms):new Nl(e,this.data,t,this.fieldTransforms)}}class CE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Wi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function RE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class Np{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Np(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:i,Qu:!1});return o.$u(e),o}Ku(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:i,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Uc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(RE(this.Lu)&&N1.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class b1{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||rh(e)}ju(e,t,i,o=!1){return new Np({Lu:e,methodName:t,zu:i,path:Vt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ch(n){const e=n._freezeSettings(),t=rh(n._databaseId);return new b1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function AE(n,e,t,i,o,l={}){const c=n.ju(l.merge||l.mergeFields?2:0,e,t,o);Dp("Data must be an object, but it was:",c,i);const d=kE(i,c);let p,y;if(l.merge)p=new _n(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const I=Of(e,T,t);if(!c.contains(I))throw new he(X.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);xE(v,I)||v.push(I)}p=new _n(v),y=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=c.fieldTransforms;return new D1(new cn(d),p,y)}class hh extends kp{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hh}}function O1(n,e,t,i){const o=n.ju(1,e,t);Dp("Data must be an object, but it was:",o,i);const l=[],c=cn.empty();Hi(i,(p,y)=>{const v=bp(e,p,t);y=st(y);const T=o.Ku(v);if(y instanceof hh)l.push(v);else{const I=Ll(y,T);I!=null&&(l.push(v),c.set(v,I))}});const d=new _n(l);return new CE(c,d,o.fieldTransforms)}function L1(n,e,t,i,o,l){const c=n.ju(1,e,t),d=[Of(e,i,t)],p=[o];if(l.length%2!=0)throw new he(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)d.push(Of(e,l[I])),p.push(l[I+1]);const y=[],v=cn.empty();for(let I=d.length-1;I>=0;--I)if(!xE(y,d[I])){const x=d[I];let U=p[I];U=st(U);const j=c.Ku(x);if(U instanceof hh)y.push(x);else{const F=Ll(U,j);F!=null&&(y.push(x),v.set(x,F))}}const T=new _n(y);return new CE(v,T,c.fieldTransforms)}function V1(n,e,t,i=!1){return Ll(t,n.ju(i?4:3,e))}function Ll(n,e){if(PE(n=st(n)))return Dp("Unsupported field value:",e,n),kE(n,e);if(n instanceof kp)return function(i,o){if(!RE(o.Lu))throw o.Wu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const d of i){let p=Ll(d,o.Uu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=st(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Tk(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=It.fromDate(i);return{timestampValue:Lc(o.serializer,l)}}if(i instanceof It){const l=new It(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Lc(o.serializer,l)}}if(i instanceof Pp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Ho)return{bytesValue:$w(o.serializer,i._byteString)};if(i instanceof Yt){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:fp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof xp)return function(c,d){return{mapValue:{fields:{[_w]:{stringValue:vw},[xc]:{arrayValue:{values:c.toArray().map(y=>{if(typeof y!="number")throw d.Wu("VectorValues must only contain numeric values.");return up(d.serializer,y)})}}}}}}(i,o);throw o.Wu(`Unsupported field value: ${oh(i)}`)}(n,e)}function kE(n,e){const t={};return dw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hi(n,(i,o)=>{const l=Ll(o,e.qu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function PE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof It||n instanceof Pp||n instanceof Ho||n instanceof Yt||n instanceof kp||n instanceof xp)}function Dp(n,e,t){if(!PE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=oh(t);throw i==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+i)}}function Of(n,e,t){if((e=st(e))instanceof uh)return e._internalPath;if(typeof e=="string")return bp(n,e);throw Uc("Field path arguments must be of type string or ",n,!1,void 0,t)}const M1=new RegExp("[~\\*/\\[\\]]");function bp(n,e,t){if(e.search(M1)>=0)throw Uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new uh(...e.split("."))._internalPath}catch{throw Uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Uc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new he(X.INVALID_ARGUMENT,d+n+p)}function xE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class NE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new F1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Op("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class F1 extends NE{data(){return super.data()}}function Op(n,e){return typeof e=="string"?bp(n,e):e instanceof uh?e._internalPath:e._delegate._internalPath}/**
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
 */function U1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Lp{}class B1 extends Lp{}function DE(n,e,...t){let i=[];e instanceof Lp&&i.push(e),i=i.concat(t),function(l){const c=l.filter(p=>p instanceof Vp).length,d=l.filter(p=>p instanceof dh).length;if(c>1||c>0&&d>0)throw new he(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class dh extends B1{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new dh(e,t,i)}_apply(e){const t=this._parse(e);return OE(e._query,t),new Zo(e.firestore,e.converter,If(e._query,t))}_parse(e){const t=ch(e.firestore);return function(l,c,d,p,y,v,T){let I;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new he(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){V_(T,v);const U=[];for(const j of T)U.push(L_(p,l,j));I={arrayValue:{values:U}}}else I=L_(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||V_(T,v),I=V1(d,c,T,v==="in"||v==="not-in");return gt.create(y,v,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function bE(n,e,t){const i=e,o=Op("where",n);return dh._create(o,i,t)}class Vp extends Lp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Vp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Yn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let c=o;const d=l.getFlattenedFilters();for(const p of d)OE(c,p),c=If(c,p)}(e._query,t),new Zo(e.firestore,e.converter,If(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function L_(n,e,t){if(typeof(t=st(t))=="string"){if(t==="")throw new he(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Aw(e)&&t.indexOf("/")!==-1)throw new he(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Je.fromString(t));if(!ye.isDocumentKey(i))throw new he(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Yy(n,new ye(i))}if(t instanceof Yt)return Yy(n,t._key);throw new he(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(t)}.`)}function V_(n,e){if(!Array.isArray(n)||n.length===0)throw new he(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function OE(n,e){const t=function(o,l){for(const c of o)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new he(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class z1{convertValue(e,t="none"){switch(Fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Hi(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[xc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>dt(c.doubleValue));return new xp(l)}convertGeoPoint(e){return new Pp(dt(e.latitude),dt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Yc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ml(e));default:return null}}convertTimestamp(e){const t=Vi(e);return new It(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Je.fromString(e);$e(Qw(i));const o=new gl(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Gr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function LE(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class il{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class VE extends NE{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _c(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Op("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class _c extends VE{data(e={}){return super.data(e)}}class j1{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new il(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new _c(this._firestore,this._userDataWriter,i.key,i,new il(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new _c(o._firestore,o._userDataWriter,d.doc.key,d.doc,new il(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new _c(o._firestore,o._userDataWriter,d.doc.key,d.doc,new il(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:$1(d.type),doc:p,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function $1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}/**
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
 */function Ts(n){n=Jn(n,Yt);const e=Jn(n.firestore,Os);return C1(Ap(e),n._key).then(t=>W1(e,n,t))}class ME extends z1{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ho(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,t)}}function Mp(n){n=Jn(n,Zo);const e=Jn(n.firestore,Os),t=Ap(e),i=new ME(e);return U1(n._query),R1(t,n._query).then(o=>new j1(e,i,n,o))}function Is(n,e,t){n=Jn(n,Yt);const i=Jn(n.firestore,Os),o=LE(n.converter,e,t);return fh(i,[AE(ch(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Dn.none())])}function Bc(n,e,t,...i){n=Jn(n,Yt);const o=Jn(n.firestore,Os),l=ch(o);let c;return c=typeof(e=st(e))=="string"||e instanceof uh?L1(l,"updateDoc",n._key,e,t,i):O1(l,"updateDoc",n._key,e),fh(o,[c.toMutation(n._key,Dn.exists(!0))])}function zc(n){return fh(Jn(n.firestore,Os),[new cp(n._key,Dn.none())])}function H1(n,e){const t=Jn(n.firestore,Os),i=yt(n),o=LE(n.converter,e);return fh(t,[AE(ch(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Dn.exists(!1))]).then(()=>i)}function fh(n,e){return function(i,o){const l=new Hr;return i.asyncQueue.enqueueAndForget(async()=>f1(await S1(i),o,l)),l.promise}(Ap(n),e)}function W1(n,e,t){const i=t.docs.get(e._key),o=new ME(n);return new VE(n,o,e._key,i,new il(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Qo=o})(xs),Cs(new Oi("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Os(new MA(i.getProvider("auth-internal")),new BA(c,i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new he(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(y.options.projectId,v)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),pr(By,zy,e),pr(By,zy,"esm2017")})();const q1={apiKey:"AIzaSyCEkJyNaOnlCWEKXAeBaL2p-Spzj2GWRnE",authDomain:"lista-de-compras-fc76a.firebaseapp.com",projectId:"lista-de-compras-fc76a",storageBucket:"lista-de-compras-fc76a.firebasestorage.app",messagingSenderId:"158886457966",appId:"1:158886457966:web:c5aeadfa924585f054ac7f"},FE=yv(q1),ln=Go(FE),it=P1(FE);var rf={exports:{}},Ya={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function K1(){if(M_)return Ya;M_=1;var n=Vf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var v,T={},I=null,x=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(x=p.ref);for(v in p)i.call(p,v)&&!l.hasOwnProperty(v)&&(T[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)T[v]===void 0&&(T[v]=p[v]);return{$$typeof:e,type:d,key:I,ref:x,props:T,_owner:o.current}}return Ya.Fragment=t,Ya.jsx=c,Ya.jsxs=c,Ya}var F_;function G1(){return F_||(F_=1,rf.exports=K1()),rf.exports}var Fp=G1();const L=Fp.jsx,se=Fp.jsxs,Q1=Fp.Fragment,X1=({id:n,titulo:e,itens:t,total:i,onEdit:o,onDelete:l})=>{const c=wn(),[d,p]=M.useState(!1),[y,v]=M.useState(e);return se("div",{className:"bg-white w-full min-h-40 drop-shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow",onClick:()=>c(`/list/${n}`),children:[d?se("div",{children:[L("input",{type:"text",value:y,onChange:I=>v(I.target.value),className:"w-full p-2 border rounded mt-1"}),L("button",{onClick:()=>{o(n,y),p(!1)},className:"bg-green-500 text-white px-3 py-1 rounded text-xs mt-2",children:"Save"})]}):L("h2",{className:"text-gray-800 font-bold text-lg",children:e}),se("ul",{className:"text-gray-600 text-sm mt-2",children:[t.slice(0,3).map((I,x)=>se("li",{children:[I.quantidade,"x ",I.nome]},x)),t.length>3&&L("li",{className:"text-gray-500",children:"..."})]}),se("p",{className:"text-gray-700 font-bold mt-3 fixed bottom-3 right-4 text-[15px]",children:["TOTAL: R$ ",i.toFixed(2)]})]})};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),UE=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var J1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=M.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:c,...d},p)=>M.createElement("svg",{ref:p,...J1,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:UE("lucide",o),...d},[...c.map(([y,v])=>M.createElement(y,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=(n,e)=>{const t=M.forwardRef(({className:i,...o},l)=>M.createElement(Z1,{ref:l,iconNode:e,className:UE(`lucide-${Y1(n)}`,i),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ea=er("ArrowLeft",ex);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],nx=er("Check",tx);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],ix=er("CircleUser",rx);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],ox=er("Download",sx);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],lx=er("KeyRound",ax);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],cx=er("List",ux);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]],dx=er("PencilLine",hx);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],px=er("Plus",fx);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],gx=er("RefreshCcw",mx);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]],BE=er("Share",yx);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],wl=er("Trash2",_x),Up=()=>{const n=wn();return se("div",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-[#CFD8DC] flex justify-around items-center h-16",children:[se("button",{className:"flex flex-col items-center text-[#656565] hover:text-[#64a651] transition-colors",onClick:()=>n("/home"),children:[L(cx,{}),L("span",{className:"text-xs mt-1",children:"Listas"})]}),se("button",{onClick:()=>n("/new-list"),className:"flex flex-col items-center justify-center gap-1 bg-transparent border-none cursor-pointer pb-8",children:[L("div",{className:"bg-[#388E3C] flex items-center justify-center w-12 h-12 rounded-full p- shadow-lg hover:bg-[#4f7545] hover:text-[#388E3C] transition-colors",children:L(dx,{color:"white"})}),L("p",{className:"text-sm text-gray-700",children:"Nova Lista"})]}),se("button",{className:"flex flex-col items-center text-[#656565] hover:text-[#388E3C] transition-colors",onClick:()=>n("/profile"),children:[L(ix,{}),L("span",{className:"text-xs mt-1",children:"Perfil"})]})]})},vx=()=>{const[n,e]=M.useState([]),[t,i]=M.useState(""),[o,l]=M.useState("list");wn(),M.useEffect(()=>{(async()=>{const v=ln.currentUser;if(!v)return;const T=lh(it,"listas"),I=DE(T,bE("uid","==",v.uid)),x=await Mp(I),U=[];x.forEach(j=>{U.push({id:j.id,...j.data()})}),e(U)})()},[]),M.useEffect(()=>{(async()=>{const v=ln.currentUser;if(v){const T=await Ts(yt(it,"users",v.uid));T.exists()&&i(T.data().nome)}})()},[]);const c=async(y,v)=>{const T=yt(it,"listas",y);await Bc(T,{titulo:v}),e(I=>I.map(x=>x.id===y?{...x,titulo:v}:x))},d=async y=>{const v=yt(it,"listas",y);await zc(v),e(T=>T.filter(I=>I.id!==y))};return se("div",{className:"min-h-screen min-w-screen bg-white px-6",style:{fontFamily:"Calibri"},children:[se("header",{className:"fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center",children:[L("div",{className:"flex-1",children:se("h1",{className:"text-[24px] font-semibold text-[#4CAF50]",children:["Olá, ",t]})}),L("div",{className:"flex items-center gap-4",children:L("button",{className:"w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none",onClick:()=>{if(n.length===0){alert("Nenhuma lista para exportar.");return}const{titulo:y,itens:v}=n[0],T=v.map(x=>`Nome: ${x.nome}, Categoria: ${x.categoria}, Preço: ${x.preco}, Quantidade: ${x.quantidade}`).join(`
`),I=`https://api.whatsapp.com/send?text=${encodeURIComponent(y+`

`+T)}`;window.open(I,"_blank")},children:L(BE,{size:24})})})]}),se("div",{className:"pt-20 flex justify-between items-center",children:[L("h2",{className:"text-lg font-medium text-[#656565]",children:"Todas as listas"}),se("div",{className:"flex items-center border border-gray-300 rounded-lg overflow-hidden",children:[L("button",{className:`px-4 py-2 text-sm ${o==="list"?"bg-[#FBE9E7] text-[#BF360C] font-bold":"text-[#212121]"}`,onClick:()=>l("list"),children:"LISTA"}),L("button",{className:`px-4 py-2 text-sm ${o==="grid"?"bg-[#FBE9E7] text-[#BF360C] font-bold":"text-[#212121]"}`,onClick:()=>l("grid"),children:"GRADE"})]})]}),L("div",{className:`mt-5 grid gap-4 ${o==="list"?"grid-cols-1":"grid-cols-2"}`,children:n.length===0?L("p",{className:"text-center text-[#656565] mt-6",children:"Nenhuma lista encontrada"}):n.map(y=>L(X1,{id:y.id,titulo:y.titulo,itens:y.itens||[],total:parseFloat(y.total)||0,onEdit:c,onDelete:d},y.id))}),L(Up,{})]})},wx=()=>{const n=wn(),e=Go(),[t,i]=M.useState(""),[o,l]=M.useState(""),[c,d]=M.useState("");return se("div",{className:"flex flex-col items-center justify-center min-w-screen min-h-screen bg-white px-6",children:[L("div",{className:"absolute top-14 left-6 cursor-pointer",onClick:()=>n(-1),children:L(ea,{size:24,className:"text-red-700"})}),L("h1",{className:"text-[20px] font-semibold text-[#656565] mb-6",children:"Entre agora"}),se("form",{className:"w-full max-w-sm",onSubmit:async y=>{y.preventDefault(),d("");try{await _R(e,t,o),n("/home")}catch{d("Credenciais inválidas. Tente novamente.")}},children:[L("label",{className:"block text-[#455A64] text-[14px] text-left font-medium mb-1",children:"Email"}),L("input",{type:"email",value:t,onChange:y=>i(y.target.value),className:"w-full border border-[#CFD8DC]  rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#BF360C] text-black",required:!0}),L("label",{className:"block text-[#455A64] text-[14px] text-left font-medium mb-1",children:"Senha"}),L("input",{type:"password",value:o,onChange:y=>l(y.target.value),className:"w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#BF360C] text-black",required:!0}),c&&L("p",{className:"text-red-700 text-sm mb-4",children:c}),L("button",{type:"submit",className:"w-full !bg-[#BF360C] text-white mt-4 h-11 rounded-lg shadow-md text-[16px]",children:"ENTRAR"})]}),se("p",{className:"mt-6 text-[#888888] text-[12px]",children:["NÃO POSSUI UMA CONTA?"," ",L(Il,{to:"/register",className:"!text-[#BF360C] font-bold",children:"CRIE UMA AQUI"})]})]})},U_=({isOpen:n,onClose:e,listId:t,setListId:i,setItens:o,itemUid:l})=>{const[c,d]=M.useState(""),[p,y]=M.useState(""),[v,T]=M.useState("0"),[I,x]=M.useState(1),[U,j]=M.useState([]),[F,q]=M.useState([]),[Y,G]=M.useState(0),[ne,_e]=M.useState(!1);M.useEffect(()=>{(async()=>{const C=(await Mp(lh(it,"categorias"))).docs.map(P=>({id:P.id,...P.data()}));j(C)})()},[]),M.useEffect(()=>{if(c){const k=U.find(S=>S.nome===c);if(k&&k.itens){const S=k.itens.split(",").map(C=>C.trim());q(S)}else q([])}else q([])},[c,U]),M.useEffect(()=>{G(I*v)},[I,v]),M.useEffect(()=>{n&&(async()=>{if(l&&t){const S=yt(it,"listas",t),C=await Ts(S);if(C.exists()){const O=(C.data().itens||[]).find(N=>N.uid===l);O&&(y(O.nome),T(O.preco),x(O.quantidade),_e(!0))}}})()},[n,l,t]);const ge=async()=>{if(!(!p.trim()||isNaN(parseFloat(v))||!ln.currentUser))try{if(I===0&&ne){if(t.startsWith("temp-"))o(C=>C.filter(P=>P.uid!==l));else{const C=yt(it,"listas",t),P=await Ts(C);if(P.exists()){const N=P.data().itens.filter(R=>R.uid!==l);await Bc(C,{itens:N,total:N.reduce((R,xe)=>R+xe.preco*xe.quantidade,0)}),o(N)}}y(""),d(""),T("0"),x(1),_e(!1),e();return}const S={uid:ne?l:crypto.randomUUID(),nome:p,categoria:c,preco:parseFloat(v)||0,quantidade:I,comprado:!1};if(t.startsWith("temp-"))o(C=>ne?C.map(P=>P.uid===l?S:P):[...C,S]);else{const C=yt(it,"listas",t),P=await Ts(C);if(P.exists()){const O=P.data();let N;ne?N=O.itens.map(R=>R.uid===l?S:R):N=[...O.itens||[],S],await Bc(C,{itens:N,total:N.reduce((R,xe)=>R+xe.preco*xe.quantidade,0)}),o(N)}}y(""),d(""),T("0"),x(1),_e(!1),e()}catch(S){console.error("Erro ao adicionar/editar item:",S)}};return n?se("div",{className:"fixed inset-0 flex items-center justify-center",style:{fontFamily:"Calibri"},children:[L("div",{className:"absolute inset-0 bg-black opacity-80",onClick:e}),se("div",{className:"relative bg-white p-6 rounded-lg w-11/12 max-w-md text-black",children:[L("div",{className:"h-1 w-12 bg-gray-400 mx-auto rounded-full mb-4"}),L("label",{className:"block text-sm text-gray-600",children:"Selecione uma categoria"}),se("select",{className:"w-full p-2 border rounded mt-1",value:c,onChange:k=>d(k.target.value),children:[L("option",{value:"",children:"Selecione"}),U.map((k,S)=>L("option",{value:k.nome,children:k.nome},S))]}),L("label",{className:"block text-sm text-gray-600 mt-4",children:"Informe o item"}),F.length>0?se("select",{className:"w-full p-2 border rounded mt-1",value:p,onChange:k=>y(k.target.value),children:[L("option",{value:"",children:"Selecione"}),F.map((k,S)=>L("option",{value:k,children:k},S))]}):L("input",{type:"text",className:"w-full p-2 border rounded mt-1",value:p,onChange:k=>y(k.target.value)}),L("label",{className:"block text-sm text-gray-600 mt-4",children:"Valor unitário"}),L("input",{type:"number",min:"0",step:"0.01",className:"w-full p-2 border rounded mt-1 bg-white text-gray-600",value:v,onChange:k=>{const S=parseFloat(k.target.value);!isNaN(S)&&S>=0?T(S.toString()):k.target.value===""&&T("0")},onBlur:()=>{(v===""||isNaN(parseFloat(v)))&&T("0")},placeholder:"0"}),se("div",{className:"flex items-center justify-between mt-4",children:[L("label",{className:"block text-sm text-gray-600",children:"Quantidade"}),se("div",{className:"flex items-center mt-1 bg-[#FBE9E7] h-7 w-21 rounded-md",children:[L("button",{className:`p-2 text-gray rounded ${!ne&&I<=1?"opacity-50 cursor-not-allowed":""}`,onClick:()=>x(k=>Math.max(ne?0:1,k-1)),disabled:!ne&&I<=1,title:ne?"Definir como 0 para remover o item":"",children:"-"}),L("span",{className:"px-4 text-black",children:I}),L("button",{className:"p-2 text-gray rounded",onClick:()=>x(k=>k+1),children:"+"})]}),ne&&I===0&&L("span",{className:"text-xs text-red-600 absolute -bottom-5 right-0",children:"Salvar com 0 irá remover o item"})]}),L("button",{className:"w-full mt-6 bg-[#BF360C] text-gray p-3 rounded-md text-white font-semibold",onClick:ge,children:ne?"Salvar Alterações":"Adicionar"}),L("hr",{className:"my-4"}),L("div",{className:"text-center text-[#00000065] text-sm font-semibold text-[14px]",children:"Resumo da lista"}),se("div",{className:"flex justify-between text-gray-600 text-sm mt-2 font-medium",children:[L("p",{children:"Quantidade Total"}),L("p",{children:I})]}),se("div",{className:"flex justify-between font-medium text-gray-800 text-lg text-[14px]",children:[L("p",{children:"Valor Total"}),se("p",{className:"font-bold text-black text-[16px]",children:["R$ ",Y.toFixed(2)]})]})]})]}):null},Ex=({isVisible:n,onHide:e,listId:t})=>{const i=wn(),o=async()=>{try{const l=ln.currentUser;if(!l){console.error("Usuário não autenticado");return}const c=yt(it,"listas",t),d=await Ts(c);if(d.exists()){const p=d.data(),y=yt(it,"trash",t);await Is(y,{...p,userId:l.uid,deletedAt:new Date().toISOString()}),await zc(c),i("/home")}else console.error("Lista não encontrada")}catch(l){console.error("Erro ao mover para lixeira:",l),alert("Erro ao mover item para lixeira. Tente novamente.")}};return n?se("div",{children:[L("div",{className:"absolute inset-0 bg-black opacity-80",onClick:e}),se("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[90vw] h-[50vw] md:w-[30vw] md:h-[16vw] bg-white rounded-md p-5 text-[#00000088] flex flex-col items-center justify-center text-center",children:[L("div",{className:"mb-4 p-2.5 bg-[#FFF1F0] rounded-md",children:L(wl,{color:"#F5222D"})}),se("p",{className:"mb-4",children:["Você tem certeza de que",L("br",{}),"deseja apagar esta lista?"]}),se("div",{className:"flex justify-center gap-4 w-full",children:[L("button",{className:"text-[#00000065] py-2 px-6 rounded-lg w-full text-[14px] font-bold bg-white cursor-pointer transition-colors duration-300",onClick:e,children:"Cancelar"}),L("button",{className:"border border-[#F5222D] text-[#F5222D] py-2 px-6 rounded-lg w-full text-[14px] font-bold bg-white cursor-pointer transition-colors duration-300",onClick:o,children:"Sim, apagar"})]})]})]}):null},B_=()=>{const n=wn(),{id:e}=WT(),[t,i]=M.useState("Nova Lista"),[o,l]=M.useState(!1),[c,d]=M.useState([]),[p,y]=M.useState("todos"),[v,T]=M.useState(e||`temp-${Date.now()}`),[I,x]=M.useState(e),[U,j]=M.useState(null),[F,q]=M.useState(!1),[Y,G]=M.useState(!1),[ne,_e]=M.useState(!1);M.useEffect(()=>{(async()=>{if(!e)return;const R=yt(it,"listas",e),xe=await Ts(R);if(xe.exists()){const Ge=xe.data();i(Ge.titulo),d(Ge.itens||[])}})()},[e]);const ge=async()=>{const N=ln.currentUser;if(!N)return;const R=e||`${N.uid}-${Date.now()}`,xe=yt(it,"listas",R);await Is(xe,{uid:N.uid,titulo:t,itens:c,total:c.reduce((Ge,Qe)=>Ge+(Qe.preco||0)*(Qe.quantidade||1),0)}),n("/home")},k=N=>{j(N),G(!0)},S=()=>{if(c.length===0){alert("Nenhum item para exportar.");return}const N=c.reduce((ke,te)=>{const pe=te.categoria||"Outros";return ke[pe]||(ke[pe]=[]),ke[pe].push(te),ke},{}),R=Object.entries(N).sort(([ke],[te])=>ke==="Outros"?1:te==="Outros"?-1:ke.localeCompare(te)).map(([ke,te])=>{const pe=te.map(oe=>`• ${oe.nome}: R$ ${(oe.preco||0).toFixed(2)} x ${oe.quantidade||1}`).join(`
`);return`${ke}:
${pe}`}).join(`

`),xe=c.reduce((ke,te)=>ke+(te.preco||0)*(te.quantidade||1),0),Ge=`${t}

${R}

Total: R$ ${xe.toFixed(2)}`,Qe=`https://api.whatsapp.com/send?text=${encodeURIComponent(Ge)}`;window.open(Qe,"_blank")},C=async()=>{if(!e||!ln.currentUser)return;const N=yt(it,"listas",e);await Is(N,{titulo:t},{merge:!0}),l(!1)},P=p==="comprados"?c.filter(N=>N.comprado):c,O=async N=>{const R=[...c];if(R[N].comprado=!R[N].comprado,d(R),e){const xe=yt(it,"listas",e);await Is(xe,{itens:R},{merge:!0})}};return se("div",{className:"w-screen h-screen bg-white px-6",style:{fontFamily:"Calibri"},children:[se("header",{className:"fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center",children:[L("button",{className:"w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none",onClick:()=>n(-1),children:L(ea,{color:"red"})}),L("h1",{className:"text-[18px] font-semibold text-[#00000088] cursor-pointer pl-5",onClick:()=>l(!0),children:o?L("input",{type:"text",value:t,onChange:N=>i(N.target.value),onBlur:C,onKeyDown:N=>N.key==="Enter"&&C(),autoFocus:!0,className:"rounded px-2 py-1 w-auto focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"}):t}),se("div",{className:"flex items-center space-x-4",children:[L("button",{className:"w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none",onClick:S,children:L(BE,{color:"#00000088"})}),L("button",{className:"w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none",onClick:()=>_e(!0),children:L(wl,{color:"#CF1322"})})]})]}),se("div",{className:"pt-20",children:[se("div",{className:"flex justify-center gap-4 mb-4",children:[L("button",{onClick:()=>y("todos"),className:`mt-4 py-2 px-6 text-center rounded-4xl transition-colors duration-300 text-[14px] font-medium ${p==="todos"?"bg-[#2E7D32] text-[#FFFFFF]":"border border-[#2E7D32] text-[#2E7D32] bg-white"}`,children:"Todos os itens"}),L("button",{onClick:()=>y("comprados"),className:`mt-4 py-2 px-6 text-center rounded-4xl transition-colors duration-300 text-[14px] font-medium ${p==="comprados"?"bg-[#2E7D32] text-[#FFFFFF]":"border border-[#2E7D32] text-[#2E7D32] bg-white"}`,children:"Comprados"})]}),P.length===0?L("p",{className:"text-center text-[#00000045] mt-6",children:p==="comprados"?"Nenhum item comprado":"Nenhum item cadastrado"}):L("ul",{className:"mt-4 space-y-2",children:P.length===0?L("p",{className:"text-center text-[#00000045] mt-6",children:p==="comprados"?"Nenhum item comprado":"Nenhum item cadastrado"}):L("ul",{className:"mt-4 space-y-2",children:P.map((N,R)=>se("li",{className:"p-2 border border-[#CFD8DC] rounded-md flex items-center gap-3",onDoubleClick:()=>k(N.uid),children:[L("button",{onClick:()=>O(R),className:`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all duration-200 ${N.comprado?"bg-[#66BB6A] border-[#66BB6A]":"bg-white border-gray-300"}`,children:N.comprado&&L(nx,{className:"w-5 h-5 text-white"})}),L("span",{className:"text-gray-700",children:N.nome})]},N.uid))})})]}),L("div",{className:"fixed bottom-4 left-0 right-0 flex justify-center drop-shadow-xl",children:se("div",{className:"bg-white rounded-xl p-4 w-11/12 max-w-md",children:[se("div",{className:"flex justify-between text-gray-600 text-sm",children:[L("p",{children:"Quantidade Total"}),L("p",{children:c.reduce((N,R)=>N+(R.quantidade||1),0)})]}),se("div",{className:"flex justify-between font-semibold text-gray-800 text-sm",children:[L("p",{children:"Valor Total"}),se("p",{children:["R$ ",c.reduce((N,R)=>N+(R.preco||0)*(R.quantidade||1),0).toFixed(2)]})]}),L("button",{onClick:()=>q(!0),className:"mt-4 bg-[#FBE9E7] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px cursor-pointer transition-colors duration-300",children:se("div",{className:"flex justify-center items-center gap-1 font-semibold",children:[L(px,{}),"Adicionar item"]})}),L("button",{onClick:ge,className:"mt-4 border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300",children:"Salvar Lista"})]})}),F&&L(U_,{isOpen:F,onClose:()=>q(!1),listId:e||v,setListId:x,setItens:d}),Y&&L(U_,{isOpen:Y,onClose:()=>G(!1),itemUid:U,listId:e||v,setItens:d}),ne&&L(Ex,{isVisible:ne,onHide:()=>_e(!1),listId:I})]})},Tx=()=>{const[n,e]=M.useState(""),[t,i]=M.useState(""),[o,l]=M.useState(""),[c,d]=M.useState(""),[p,y]=M.useState(!1),[v,T]=M.useState(""),I=wn(),x=j=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(j).toLowerCase());return se("div",{className:"min-h-screen min-w-screen bg-white px-6",style:{fontFamily:"Calibri"},children:[L("header",{className:"fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center z-10",children:L("div",{className:"absolute top-5 left-6 cursor-pointer",onClick:()=>I(-1),children:L(ea,{size:24,className:"text-red-700"})})}),se("div",{className:"pt-20 flex flex-col items-center",children:[L("h1",{className:"text-[24px] font-semibold text-[#656565] mb-6",children:"Crie sua conta"}),v&&L("p",{className:"text-red-500 mb-4 text-sm w-full max-w-md",children:v}),se("form",{onSubmit:async j=>{if(j.preventDefault(),y(!0),T(""),!n||!t||!o||!c){T("Todos os campos são obrigatórios"),y(!1);return}if(!x(t)){T("Por favor, insira um e-mail válido"),y(!1);return}if(o.length<6){T("A senha deve ter pelo menos 6 caracteres"),y(!1);return}if(o!==c){T("As senhas não coincidem"),y(!1);return}try{const q=(await yR(ln,t,o)).user;await Is(yt(it,"users",q.uid),{nome:n,email:t,createdAt:new Date().toISOString()}),e(""),i(""),l(""),d(""),I("/login")}catch(F){switch(F.code){case"auth/email-already-in-use":T("Este e-mail já está cadastrado");break;case"auth/weak-password":T("A senha deve ter pelo menos 6 caracteres");break;case"auth/invalid-email":T("E-mail inválido");break;default:T("Ocorreu um erro durante o cadastro. Tente novamente.")}}finally{y(!1)}},className:"w-full max-w-md space-y-4",children:[se("div",{children:[L("label",{htmlFor:"nome",className:"block text-gray-700 mb-1 text-sm",children:"Nome"}),L("input",{id:"nome",type:"text",value:n,onChange:j=>e(j.target.value),className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",required:!0})]}),se("div",{children:[L("label",{htmlFor:"email",className:"block text-gray-700 mb-1 text-sm",children:"E-mail"}),L("input",{id:"email",type:"email",value:t,onChange:j=>i(j.target.value),className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",required:!0})]}),se("div",{children:[L("label",{htmlFor:"senha",className:"block text-gray-700 mb-1 text-sm",children:"Senha (mínimo 6 caracteres)"}),L("input",{id:"senha",type:"password",value:o,onChange:j=>l(j.target.value),className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",required:!0,minLength:"6"})]}),se("div",{children:[L("label",{htmlFor:"confirmarSenha",className:"block text-gray-700 mb-1 text-sm",children:"Confirmar Senha"}),L("input",{id:"confirmarSenha",type:"password",value:c,onChange:j=>d(j.target.value),className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",required:!0,minLength:"6"})]}),L("button",{type:"submit",disabled:p,className:`w-full mt-6 py-3 rounded-lg text-sm text-[16px] border !bg-[#BF360C] text-white 
              hover:bg-[#BF360C] hover:text-white transition-colors duration-300 ${p?"opacity-50 cursor-not-allowed":""}`,children:p?"Cadastrando...":"Cadastrar"})]}),se("div",{className:"w-full max-w-md text-center mt-4",children:[L("span",{className:"text-gray-600 text-sm",children:"Já tem uma conta? "}),L(Il,{to:"/login",className:"text-[#BF360C] text-sm font-medium hover:underline",children:"Faça login"})]})]})]})},Ix="/lista-facil/assets/logo-CDqnwYrD.svg",Sx=()=>{const n=wn();return se("div",{className:"flex flex-col items-center min-h-screen bg-white px-6 pt-10",style:{fontFamily:"Calibri"},children:[L("div",{className:"w-40 h-40 flex items-center justify-center my-20",children:L("img",{src:Ix,alt:"Logo",className:"w-full h-full object-contain"})}),se("div",{className:"flex flex-col w-full max-w-xs items-center",children:[L("button",{className:"w-full bg-[#BF360C] text-white text-[16px] font-medium py-3 rounded-md shadow-md mb-4",onClick:()=>n("/login"),children:"FAZER LOGIN"}),L("button",{className:"w-full border-2 border-[#BF360C] text-[#BF360C] text-[16px] font-semibold py-3 rounded-md mb-6",onClick:()=>n("/anonymous"),children:"ENTRAR COMO CONVIDADO"}),se("p",{className:"text-[12px] text-gray-700",children:["NÃO POSSUI UMA CONTA?",L(Il,{to:"/register",className:"text-[#BF360C] font-bold ml-1",children:"CRIE UMA AQUI"})]})]})]})};/**
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
 */const zE="firebasestorage.googleapis.com",jE="storageBucket",Cx=2*60*1e3,Rx=10*60*1e3;/**
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
 */class ut extends Er{constructor(e,t,i=0){super(sf(e),`Firebase Storage: ${t} (${sf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ut.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var lt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(lt||(lt={}));function sf(n){return"storage/"+n}function Bp(){const n="An unknown error occurred, please check the error payload for server response.";return new ut(lt.UNKNOWN,n)}function Ax(n){return new ut(lt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function kx(n){return new ut(lt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Px(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ut(lt.UNAUTHENTICATED,n)}function xx(){return new ut(lt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Nx(n){return new ut(lt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Dx(){return new ut(lt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function bx(){return new ut(lt.CANCELED,"User canceled the upload/download.")}function Ox(n){return new ut(lt.INVALID_URL,"Invalid URL '"+n+"'.")}function Lx(n){return new ut(lt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Vx(){return new ut(lt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+jE+"' property when initializing the app?")}function Mx(){return new ut(lt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Fx(){return new ut(lt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ux(n){return new ut(lt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Lf(n){return new ut(lt.INVALID_ARGUMENT,n)}function $E(){return new ut(lt.APP_DELETED,"The Firebase app was deleted.")}function Bx(n){return new ut(lt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function cl(n,e){return new ut(lt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ja(n){throw new ut(lt.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class vn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=vn.makeFromUrl(e,t)}catch{return new vn(e,"")}if(i.path==="")return i;throw Lx(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ne){ne.path.charAt(ne.path.length-1)==="/"&&(ne.path_=ne.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(ne){ne.path_=decodeURIComponent(ne.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",x=new RegExp(`^https?://${T}/${v}/b/${o}/o${I}`,"i"),U={bucket:1,path:3},j=t===zE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,F="([^?#]*)",q=new RegExp(`^https?://${j}/${o}/${F}`,"i"),G=[{regex:d,indices:p,postModify:l},{regex:x,indices:U,postModify:y},{regex:q,indices:{bucket:1,path:2},postModify:y}];for(let ne=0;ne<G.length;ne++){const _e=G[ne],ge=_e.regex.exec(e);if(ge){const k=ge[_e.indices.bucket];let S=ge[_e.indices.path];S||(S=""),i=new vn(k,S),_e.postModify(i);break}}if(i==null)throw Ox(e);return i}}class zx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function jx(n,e,t){let i=1,o=null,l=null,c=!1,d=0;function p(){return d===2}let y=!1;function v(...F){y||(y=!0,e.apply(null,F))}function T(F){o=setTimeout(()=>{o=null,n(x,p())},F)}function I(){l&&clearTimeout(l)}function x(F,...q){if(y){I();return}if(F){I(),v.call(null,F,...q);return}if(p()||c){I(),v.call(null,F,...q);return}i<64&&(i*=2);let G;d===1?(d=2,G=0):G=(i+Math.random())*1e3,T(G)}let U=!1;function j(F){U||(U=!0,I(),!y&&(o!==null?(F||(d=2),clearTimeout(o),T(0)):F||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,j(!0)},t),j}function $x(n){n(!1)}/**
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
 */function Hx(n){return n!==void 0}function Wx(n){return typeof n=="object"&&!Array.isArray(n)}function zp(n){return typeof n=="string"||n instanceof String}function z_(n){return jp()&&n instanceof Blob}function jp(){return typeof Blob<"u"}function j_(n,e,t,i){if(i<e)throw Lf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Lf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function $p(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function HE(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ss;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ss||(Ss={}));/**
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
 */function qx(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class Kx{constructor(e,t,i,o,l,c,d,p,y,v,T,I=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=T,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,U)=>{this.resolve_=x,this.reject_=U,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new sc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Ss.NO_ERROR,p=l.getStatus();if(!d||qx(p,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Ss.ABORT;i(!1,new sc(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new sc(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());Hx(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=Bp();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?$E():bx();c(p)}else{const p=Dx();c(p)}};this.canceled_?t(!1,new sc(!1,null,!0)):this.backoffId_=jx(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$x(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Gx(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Qx(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Xx(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Yx(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Jx(n,e,t,i,o,l,c=!0){const d=HE(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return Xx(y,e),Gx(y,t),Qx(y,l),Yx(y,i),new Kx(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
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
 */function Zx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function eN(...n){const e=Zx();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(jp())return new Blob(n);throw new ut(lt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function tN(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function nN(n){if(typeof atob>"u")throw Ux("base-64");return atob(n)}/**
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
 */const fr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class of{constructor(e,t){this.data=e,this.contentType=t||null}}function rN(n,e){switch(n){case fr.RAW:return new of(WE(e));case fr.BASE64:case fr.BASE64URL:return new of(qE(n,e));case fr.DATA_URL:return new of(sN(e),oN(e))}throw Bp()}function WE(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function iN(n){let e;try{e=decodeURIComponent(n)}catch{throw cl(fr.DATA_URL,"Malformed data URL.")}return WE(e)}function qE(n,e){switch(n){case fr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw cl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case fr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw cl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=nN(e)}catch(o){throw o.message.includes("polyfill")?o:cl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class KE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw cl(fr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=aN(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function sN(n){const e=new KE(n);return e.base64?qE(fr.BASE64,e.rest):iN(e.rest)}function oN(n){return new KE(n).contentType}function aN(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Ai{constructor(e,t){let i=0,o="";z_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(z_(this.data_)){const i=this.data_,o=tN(i,e,t);return o===null?null:new Ai(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Ai(i,!0)}}static getBlob(...e){if(jp()){const t=e.map(i=>i instanceof Ai?i.data_:i);return new Ai(eN.apply(null,t))}else{const t=e.map(c=>zp(c)?rN(fr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[l++]=c[d]}),new Ai(o,!0)}}uploadData(){return this.data_}}/**
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
 */function GE(n){let e;try{e=JSON.parse(n)}catch{return null}return Wx(e)?e:null}/**
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
 */function lN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function uN(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function QE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function cN(n,e){return e}class Xt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||cN}}let oc=null;function hN(n){return!zp(n)||n.length<2?n:QE(n)}function XE(){if(oc)return oc;const n=[];n.push(new Xt("bucket")),n.push(new Xt("generation")),n.push(new Xt("metageneration")),n.push(new Xt("name","fullPath",!0));function e(l,c){return hN(c)}const t=new Xt("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const o=new Xt("size");return o.xform=i,n.push(o),n.push(new Xt("timeCreated")),n.push(new Xt("updated")),n.push(new Xt("md5Hash",null,!0)),n.push(new Xt("cacheControl",null,!0)),n.push(new Xt("contentDisposition",null,!0)),n.push(new Xt("contentEncoding",null,!0)),n.push(new Xt("contentLanguage",null,!0)),n.push(new Xt("contentType",null,!0)),n.push(new Xt("metadata","customMetadata",!0)),oc=n,oc}function dN(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new vn(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function fN(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return dN(i,n),i}function YE(n,e,t){const i=GE(e);return i===null?null:fN(n,i,t)}function pN(n,e,t,i){const o=GE(e);if(o===null||!zp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(y=>{const v=n.bucket,T=n.fullPath,I="/b/"+c(v)+"/o/"+c(T),x=$p(I,t,i),U=HE({alt:"media",token:y});return x+U})[0]}function mN(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class JE{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function ZE(n){if(!n)throw Bp()}function gN(n,e){function t(i,o){const l=YE(n,o,e);return ZE(l!==null),l}return t}function yN(n,e){function t(i,o){const l=YE(n,o,e);return ZE(l!==null),pN(l,o,n.host,n._protocol)}return t}function e0(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=xx():o=Px():t.getStatus()===402?o=kx(n.bucket):t.getStatus()===403?o=Nx(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function _N(n){const e=e0(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=Ax(n.path)),l.serverResponse=o.serverResponse,l}return t}function vN(n,e,t){const i=e.fullServerUrl(),o=$p(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new JE(o,l,yN(n,t),c);return d.errorHandler=_N(e),d}function wN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function EN(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=wN(null,e)),i}function TN(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let G="";for(let ne=0;ne<2;ne++)G=G+Math.random().toString().slice(2);return G}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const y=EN(e,i,o),v=mN(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+p+"--",x=Ai.getBlob(T,i,I);if(x===null)throw Mx();const U={name:y.fullPath},j=$p(l,n.host,n._protocol),F="POST",q=n.maxUploadRetryTime,Y=new JE(j,F,gN(n,t),q);return Y.urlParams=U,Y.headers=c,Y.body=x.uploadData(),Y.errorHandler=e0(e),Y}class IN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ss.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ss.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ss.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Ja("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ja("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ja("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ja("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ja("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class SN extends IN{initXhr(){this.xhr_.responseType="text"}}function t0(){return new SN}/**
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
 */class Ps{constructor(e,t){this._service=e,t instanceof vn?this._location=t:this._location=vn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ps(e,t)}get root(){const e=new vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return QE(this._location.path)}get storage(){return this._service}get parent(){const e=lN(this._location.path);if(e===null)return null;const t=new vn(this._location.bucket,e);return new Ps(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Bx(e)}}function CN(n,e,t){n._throwIfRoot("uploadBytes");const i=TN(n.storage,n._location,XE(),new Ai(e,!0),t);return n.storage.makeRequestWithTokens(i,t0).then(o=>({metadata:o,ref:n}))}function RN(n){n._throwIfRoot("getDownloadURL");const e=vN(n.storage,n._location,XE());return n.storage.makeRequestWithTokens(e,t0).then(t=>{if(t===null)throw Fx();return t})}function AN(n,e){const t=uN(n._location.path,e),i=new vn(n._location.bucket,t);return new Ps(n.storage,i)}/**
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
 */function kN(n){return/^[A-Za-z]+:\/\//.test(n)}function PN(n,e){return new Ps(n,e)}function n0(n,e){if(n instanceof Hp){const t=n;if(t._bucket==null)throw Vx();const i=new Ps(t,t._bucket);return e!=null?n0(i,e):i}else return e!==void 0?AN(n,e):n}function xN(n,e){if(e&&kN(e)){if(n instanceof Hp)return PN(n,e);throw Lf("To use ref(service, url), the first argument must be a Storage instance.")}else return n0(n,e)}function $_(n,e){const t=e==null?void 0:e[jE];return t==null?null:vn.makeFromBucketSpec(t,n)}function NN(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:pv(o,n.app.options.projectId))}class Hp{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=zE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Cx,this._maxUploadRetryTime=Rx,this._requests=new Set,o!=null?this._bucket=vn.makeFromBucketSpec(o,this._host):this._bucket=$_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vn.makeFromBucketSpec(this._url,e):this._bucket=$_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){j_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){j_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ps(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new zx($E());{const c=Jx(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const H_="@firebase/storage",W_="0.13.6";/**
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
 */const r0="storage";function DN(n,e,t){return n=st(n),CN(n,e,t)}function bN(n){return n=st(n),RN(n)}function ON(n,e){return n=st(n),xN(n,e)}function LN(n=qf(),e){n=st(n);const i=Wc(n,r0).getImmediate({identifier:e}),o=hv("storage");return o&&VN(i,...o),i}function VN(n,e,t,i={}){NN(n,e,t,i)}function MN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Hp(t,i,o,e,xs)}function FN(){Cs(new Oi(r0,MN,"PUBLIC").setMultipleInstances(!0)),pr(H_,W_,""),pr(H_,W_,"esm2017")}FN();const UN=M.memo(({userData:n,onClose:e,onChangePasswordOpen:t})=>L("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto flex items-center justify-center p-4",children:L("div",{className:"bg-white rounded-lg shadow-md w-full max-w-xs md:max-w-sm p-6",children:se("div",{className:"text-center",children:[L("h3",{className:"text-lg font-medium text-[#666666] mb-4",children:"Dados de Acesso"}),L("div",{className:"text-[#666666] space-y-2",children:n?se(Q1,{children:[se("p",{children:["Nome: ",n.nome]}),se("p",{children:["Email: ",n.email]}),L("button",{className:"border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none",onClick:t,children:"Alterar Senha"})]}):L("p",{children:"Carregando dados..."})}),L("div",{className:"mt-6",children:L("button",{className:"border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none",onClick:e,children:"Fechar"})})]})})})),BN=M.memo(({passwordError:n,successMessage:e,errorMessage:t,newPassword:i,confirmNewPassword:o,loading:l,onNewPasswordChange:c,onConfirmNewPasswordChange:d,onSave:p,onCancel:y})=>L("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto flex items-center justify-center p-4",children:L("div",{className:"bg-white rounded-lg shadow-md w-full max-w-xs md:max-w-sm p-6",children:se("div",{className:"text-center",children:[L("h3",{className:"text-lg font-medium text-[#333333] mb-4",children:"Alterar Senha"}),n&&L("p",{className:"text-red-500 mb-4 text-sm",children:n}),e&&L("p",{className:"text-green-500 mb-4 text-sm",children:e}),t&&L("p",{className:"text-red-500 mb-4 text-sm",children:t}),se("div",{className:"space-y-3",children:[L("input",{type:"password",placeholder:"Nova Senha",className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",value:i,onChange:c}),L("input",{type:"password",placeholder:"Confirmar Nova Senha",className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",value:o,onChange:d})]}),se("div",{className:"mt-6 space-y-3",children:[L("button",{className:"border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none",onClick:p,disabled:l,children:l?"Alterando...":"Salvar Nova Senha"}),L("button",{className:"border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none",onClick:y,disabled:l,children:"Cancelar"})]})]})})})),zN=()=>{const n=wn(),[e,t]=M.useState(""),[i,o]=M.useState(null),[l,c]=M.useState(!1),[d,p]=M.useState(!1),[y,v]=M.useState(null),[T,I]=M.useState(""),[x,U]=M.useState(""),[j,F]=M.useState(""),[q,Y]=M.useState(!1),[G,ne]=M.useState(""),[_e,ge]=M.useState(""),[k,S]=M.useState(null),C=M.useRef(null),P=M.useRef(null);M.useEffect(()=>{(async()=>{const K=ln.currentUser;if(K){const ue=yt(it,"users",K.uid);try{const Ee=await Ts(ue);if(Ee.exists()){const Te=Ee.data();t(Te.nome||"Usuário"),o(Te),Te.photoUrl&&S(Te.photoUrl)}}catch(Ee){console.error("Erro ao carregar dados:",Ee)}}else n("/login")})()},[n]),M.useEffect(()=>{const b=K=>{K.preventDefault(),v(K),console.log("beforeinstallprompt event captured")};return window.addEventListener("beforeinstallprompt",b),()=>{window.removeEventListener("beforeinstallprompt",b)}},[]);const O=M.useCallback(async()=>{try{await ln.signOut(),n("/")}catch(b){console.error("Erro ao fazer logout:",b)}},[n]),N=M.useCallback(async()=>{if(!y){console.log("O evento beforeinstallprompt não está disponível.");return}y.prompt();const{outcome:b}=await y.userChoice;console.log(b==="accepted"?"Usuário aceitou o prompt de instalação":"Usuário rejeitou o prompt de instalação"),v(null)},[y]),R=M.useCallback(()=>{c(!0)},[]),xe=M.useCallback(()=>{c(!1)},[]),Ge=M.useCallback(()=>{p(!0),c(!1)},[]),Qe=M.useCallback(()=>{p(!1)},[]),ke=M.useCallback(async()=>{if(F(""),ne(""),ge(""),Y(!0),!T||!x){F("Todos os campos são obrigatórios"),Y(!1);return}if(T.length<6){F("A senha deve ter pelo menos 6 caracteres"),Y(!1);return}if(T!==x){F("As senhas não coincidem"),Y(!1);return}try{const b=ln.currentUser;if(!b){ge("Usuário não autenticado."),Y(!1);return}const K=prompt("Digite sua senha atual para confirmar:");if(!K){ge("Reautenticação cancelada."),Y(!1);return}const ue=Ns.credential(b.email,K);await gR(b,ue),await vR(b,T),ne("Senha alterada com sucesso!"),I(""),U(""),Qe()}catch(b){ge("Erro ao alterar senha: "+b.message),console.error("Erro ao alterar senha:",b)}finally{Y(!1)}},[T,x,Qe]),te=M.useCallback(async b=>{const K=b.target.files[0];if(K)try{const ue=LN(),Ee=ON(ue,`profilePhotos/${ln.currentUser.uid}`);await DN(Ee,K);const Te=await bN(Ee);S(Te),await Bc(yt(it,"users",ln.currentUser.uid),{photoUrl:Te})}catch(ue){console.error("Erro ao fazer upload da foto:",ue)}},[]),pe=M.useCallback(async b=>{const K=b.target.files[0];if(K)try{const Te=(await K.text()).split(`
`).filter(Pe=>Pe.trim()!=="").map(Pe=>{const[Le,je]=Pe.split(",");return{title:Le==null?void 0:Le.trim(),content:je==null?void 0:je.trim()}}),De=lh(it,"notes");for(const Pe of Te)Pe.title&&Pe.content&&await H1(De,{...Pe,userId:ln.currentUser.uid,createdAt:new Date});alert("Notas importadas com sucesso!")}catch(ue){console.error("Erro ao importar notas:",ue),alert("Erro ao importar notas. Verifique o arquivo e tente novamente.")}},[]),oe=M.useCallback(()=>{var b;(b=P.current)==null||b.click()},[]);return L("div",{className:"w-screen h-screen bg-white px-6",style:{fontFamily:"Calibri"},children:se("div",{className:"mt-20 w-full max-w-4xl mx-auto",children:[se("div",{className:"mt-10 flex flex-col items-center justify-center md:flex-row md:space-x-8",children:[L("input",{type:"file",accept:"image/*",ref:C,onChange:te,className:"hidden"}),L("h2",{className:"text-green-600 mt-2 md:mt-0 text-lg font-semibold",children:e})]}),L("div",{className:"w-full max-w-sm md:max-w-md mt-6 mx-auto",children:se("ul",{className:"space-y-4",children:[se("li",{className:"flex items-center text-gray-700",children:[L(lx,{className:"mr-2",size:20}),L("button",{className:"!bg-transparent focus:outline-none",onClick:R,children:"Dados de acesso"})]}),se("li",{className:"flex items-center text-gray-700",children:[L(ox,{className:"mr-2",size:20}),L("button",{className:"!bg-transparent focus:outline-none",onClick:oe,children:"Importar notas"}),L("input",{type:"file",accept:".txt",ref:P,onChange:pe,className:"hidden"})]}),se("li",{className:"flex items-center text-gray-700",children:[L(wl,{className:"mr-2",size:20}),L("button",{className:"!bg-transparent focus:outline-none",onClick:()=>n("/trash"),children:"Lixeira"})]}),se("li",{className:"flex items-center text-red-500",children:[L(ea,{className:"mr-2",size:20}),L("button",{className:"!bg-transparent focus:outline-none",onClick:O,children:"Sair"})]})]})}),se("div",{className:"mt-8 bg-white rounded-lg shadow-md p-4 max-w-sm md:max-w-md w-full border border-red-400 mx-auto",children:[L("h3",{className:"text-red-500 font-semibold text-sm",children:"Baixe o Lista Fácil"}),L("p",{className:"text-gray-600 text-xs mt-1",children:"Tenha acesso às suas listas de forma simples mesmo sem internet"}),L("button",{onClick:N,className:"mt-3 w-full border border-red-500 text-red-500 py-1 rounded text-sm focus:outline-none",children:"Quero baixar"})]}),l&&L(UN,{userData:i,onClose:xe,onChangePasswordOpen:Ge}),d&&L(BN,{passwordError:j,successMessage:G,errorMessage:_e,newPassword:T,confirmNewPassword:x,loading:q,onNewPasswordChange:b=>I(b.target.value),onConfirmNewPasswordChange:b=>U(b.target.value),onSave:ke,onCancel:Qe}),L(Up,{})]})})},jN=()=>{const n=Go(),e=wn(),[t,i]=M.useState(""),o=async()=>{try{return await fR(n)}catch(c){throw alert("Erro ao entrar como convidado: "+c.message),c}},l=async c=>{c.preventDefault();try{const p=(await o()).user;await Is(yt(it,"users",p.uid),{nome:t,createdAt:new Date().toISOString()}),i(""),e("/home")}catch(d){console.error("Erro no login anônimo:",d),alert("Erro ao cadastrar o usuário: "+d.message)}};return se("div",{className:"min-h-screen min-w-screen bg-white flex flex-col justify-center items-center px-6",style:{fontFamily:"Calibri"},children:[L("header",{className:"fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center",children:L("div",{className:"absolute top-5 left-6 cursor-pointer",onClick:()=>e(-1),children:L(ea,{size:24,className:"text-red-700"})})}),se("div",{className:"flex flex-col items-center w-full max-w-md",children:[L("h1",{className:"text-[20px] font-semibold text-[#656565] mb-6",children:"Acesse como convidado"}),se("form",{onSubmit:c=>l(c),className:"w-full max-w-md space-y-4",children:[L("label",{className:"block text-[#455A64] text-[14px] text-left font-medium mb-1",children:"Informe seu nome"}),L("input",{type:"text",value:t,onChange:c=>i(c.target.value),className:"w-full border border-[#CFD8DC]  rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#BF360C] text-black",required:!0}),L("button",{type:"submit",className:"w-full !bg-[#BF360C] text-white mt-4 h-11 rounded-lg shadow-md text-[16px]",children:"ACESSAR"})]}),L("button",{className:"w-full text-[#BF360C] mt-4 h-11 rounded-lg text-[16px] font-bold",onClick:()=>e("/register"),children:"CRIE UMA CONTA"})]})]})},$N=()=>{const[n,e]=M.useState([]),t=wn();M.useEffect(()=>{i()},[]);const i=async()=>{try{const c=ln.currentUser;if(!c){t("/login");return}const d=DE(lh(it,"trash"),bE("userId","==",c.uid)),p=await Mp(d),y=[];p.forEach(v=>{y.push({id:v.id,...v.data()})}),e(y)}catch(c){console.error("Erro ao carregar listas da lixeira:",c)}},o=async c=>{try{const{deletedAt:d,...p}=c;await Is(yt(it,"listas",c.id),p),await zc(yt(it,"trash",c.id)),e(y=>y.filter(v=>v.id!==c.id)),alert("Lista restaurada com sucesso!")}catch(d){console.error("Erro ao restaurar lista:",d),alert("Erro ao restaurar lista. Tente novamente.")}},l=async c=>{if(window.confirm("Deseja excluir permanentemente esta lista?"))try{await zc(yt(it,"trash",c)),e(d=>d.filter(p=>p.id!==c))}catch(d){console.error("Erro ao excluir permanentemente:",d)}};return L("div",{className:"w-screen min-h-screen bg-white px-6",children:se("div",{className:"pt-20 w-full max-w-4xl mx-auto",children:[se("div",{className:"flex items-center mb-6",children:[L("button",{onClick:()=>t("/profile"),className:"text-gray-600 hover:text-gray-800",children:L(ea,{size:24})}),L("h1",{className:"ml-4 text-xl font-semibold text-gray-800",children:"Lixeira"})]}),n.length===0?se("div",{className:"text-center mt-10 text-gray-500",children:[L(wl,{size:48,className:"mx-auto mb-4 opacity-50"}),L("p",{children:"Nenhuma lista na lixeira"})]}):L("div",{className:"space-y-4",children:n.map(c=>L("div",{className:"border rounded-lg p-4 hover:border-gray-300",children:se("div",{className:"flex justify-between items-center",children:[se("div",{children:[L("h3",{className:"font-medium text-gray-800",children:c.titulo}),se("span",{className:"text-sm text-gray-500",children:["Excluído em: ",new Date(c.deletedAt).toLocaleDateString("pt-BR")]})]}),se("div",{className:"flex space-x-2",children:[L("button",{onClick:()=>o(c),className:"p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors",title:"Restaurar",children:L(gx,{size:20})}),L("button",{onClick:()=>l(c.id),className:"p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors",title:"Excluir permanentemente",children:L(wl,{size:20})})]})]})},c.id))}),L(Up,{})]})})},HN=()=>Go().currentUser?L(tv,{to:"/home",replace:!0}):L(nv,{}),WN=()=>Go().currentUser?L(nv,{}):L(tv,{to:"/",replace:!0});function qN(){const n=Go(),[e,t]=M.useState(null);return M.useEffect(()=>{const i=IR(n,o=>{t(o)});return()=>i()},[]),M.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/lista-facil/service-worker.js",{scope:"/lista-facil/"}).then(i=>{console.log("Service Worker registered with scope:",i.scope)}).catch(i=>{console.error("Service Worker registration failed:",i)})},[]),L(xI,{basename:"/lista-facil",children:se(oI,{children:[se(Nn,{element:L(HN,{}),children:[L(Nn,{path:"/",element:L(Sx,{})}),L(Nn,{path:"/register",element:L(Tx,{})}),L(Nn,{path:"/anonymous",element:L(jN,{})}),L(Nn,{path:"/login",element:L(wx,{})})]}),se(Nn,{element:L(WN,{}),children:[L(Nn,{path:"/home",element:L(vx,{})}),L(Nn,{path:"/list/:id",element:L(B_,{})}),L(Nn,{path:"/new-list",element:L(B_,{})}),L(Nn,{path:"/profile",element:L(zN,{})}),L(Nn,{path:"/trash",element:L($N,{})})]})]})})}fT.createRoot(document.getElementById("root")).render(L(M.StrictMode,{children:L(qN,{})}));
