(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Md={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function OT(){if($g)return Pe;$g=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.iterator;function I(b){return b===null||typeof b!="object"?null:(b=T&&b[T]||b["@@iterator"],typeof b=="function"?b:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,j={};function V(b,K,ue){this.props=b,this.context=K,this.refs=j,this.updater=ue||x}V.prototype.isReactComponent={},V.prototype.setState=function(b,K){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,K,"setState")},V.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function W(){}W.prototype=V.prototype;function J(b,K,ue){this.props=b,this.context=K,this.refs=j,this.updater=ue||x}var G=J.prototype=new W;G.constructor=J,F(G,V.prototype),G.isPureReactComponent=!0;var re=Array.isArray,_e=Object.prototype.hasOwnProperty,me={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function S(b,K,ue){var Ee,Te={},xe=null,ke=null;if(K!=null)for(Ee in K.ref!==void 0&&(ke=K.ref),K.key!==void 0&&(xe=""+K.key),K)_e.call(K,Ee)&&!P.hasOwnProperty(Ee)&&(Te[Ee]=K[Ee]);var be=arguments.length-2;if(be===1)Te.children=ue;else if(1<be){for(var ze=Array(be),Rt=0;Rt<be;Rt++)ze[Rt]=arguments[Rt+2];Te.children=ze}if(b&&b.defaultProps)for(Ee in be=b.defaultProps,be)Te[Ee]===void 0&&(Te[Ee]=be[Ee]);return{$$typeof:n,type:b,key:xe,ref:ke,props:Te,_owner:me.current}}function R(b,K){return{$$typeof:n,type:b.type,key:K,ref:b.ref,props:b.props,_owner:b._owner}}function A(b){return typeof b=="object"&&b!==null&&b.$$typeof===n}function N(b){var K={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ue){return K[ue]})}var M=/\/+/g;function k(b,K){return typeof b=="object"&&b!==null&&b.key!=null?N(""+b.key):K.toString(36)}function Ze(b,K,ue,Ee,Te){var xe=typeof b;(xe==="undefined"||xe==="boolean")&&(b=null);var ke=!1;if(b===null)ke=!0;else switch(xe){case"string":case"number":ke=!0;break;case"object":switch(b.$$typeof){case n:case e:ke=!0}}if(ke)return ke=b,Te=Te(ke),b=Ee===""?"."+k(ke,0):Ee,re(Te)?(ue="",b!=null&&(ue=b.replace(M,"$&/")+"/"),Ze(Te,K,ue,"",function(Rt){return Rt})):Te!=null&&(A(Te)&&(Te=R(Te,ue+(!Te.key||ke&&ke.key===Te.key?"":(""+Te.key).replace(M,"$&/")+"/")+b)),K.push(Te)),1;if(ke=0,Ee=Ee===""?".":Ee+":",re(b))for(var be=0;be<b.length;be++){xe=b[be];var ze=Ee+k(xe,be);ke+=Ze(xe,K,ue,ze,Te)}else if(ze=I(b),typeof ze=="function")for(b=ze.call(b),be=0;!(xe=b.next()).done;)xe=xe.value,ze=Ee+k(xe,be++),ke+=Ze(xe,K,ue,ze,Te);else if(xe==="object")throw K=String(b),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ke}function St(b,K,ue){if(b==null)return b;var Ee=[],Te=0;return Ze(b,Ee,"","",function(xe){return K.call(ue,xe,Te++)}),Ee}function mt(b){if(b._status===-1){var K=b._result;K=K(),K.then(function(ue){(b._status===0||b._status===-1)&&(b._status=1,b._result=ue)},function(ue){(b._status===0||b._status===-1)&&(b._status=2,b._result=ue)}),b._status===-1&&(b._status=0,b._result=K)}if(b._status===1)return b._result.default;throw b._result}var Be={current:null},se={transition:null},ge={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:se,ReactCurrentOwner:me};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:St,forEach:function(b,K,ue){St(b,function(){K.apply(this,arguments)},ue)},count:function(b){var K=0;return St(b,function(){K++}),K},toArray:function(b){return St(b,function(K){return K})||[]},only:function(b){if(!A(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},Pe.Component=V,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=J,Pe.StrictMode=i,Pe.Suspense=p,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ge,Pe.act=ae,Pe.cloneElement=function(b,K,ue){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Ee=F({},b.props),Te=b.key,xe=b.ref,ke=b._owner;if(K!=null){if(K.ref!==void 0&&(xe=K.ref,ke=me.current),K.key!==void 0&&(Te=""+K.key),b.type&&b.type.defaultProps)var be=b.type.defaultProps;for(ze in K)_e.call(K,ze)&&!P.hasOwnProperty(ze)&&(Ee[ze]=K[ze]===void 0&&be!==void 0?be[ze]:K[ze])}var ze=arguments.length-2;if(ze===1)Ee.children=ue;else if(1<ze){be=Array(ze);for(var Rt=0;Rt<ze;Rt++)be[Rt]=arguments[Rt+2];Ee.children=be}return{$$typeof:n,type:b.type,key:Te,ref:xe,props:Ee,_owner:ke}},Pe.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},Pe.createElement=S,Pe.createFactory=function(b){var K=S.bind(null,b);return K.type=b,K},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(b){return{$$typeof:d,render:b}},Pe.isValidElement=A,Pe.lazy=function(b){return{$$typeof:v,_payload:{_status:-1,_result:b},_init:mt}},Pe.memo=function(b,K){return{$$typeof:y,type:b,compare:K===void 0?null:K}},Pe.startTransition=function(b){var K=se.transition;se.transition={};try{b()}finally{se.transition=K}},Pe.unstable_act=ae,Pe.useCallback=function(b,K){return Be.current.useCallback(b,K)},Pe.useContext=function(b){return Be.current.useContext(b)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(b){return Be.current.useDeferredValue(b)},Pe.useEffect=function(b,K){return Be.current.useEffect(b,K)},Pe.useId=function(){return Be.current.useId()},Pe.useImperativeHandle=function(b,K,ue){return Be.current.useImperativeHandle(b,K,ue)},Pe.useInsertionEffect=function(b,K){return Be.current.useInsertionEffect(b,K)},Pe.useLayoutEffect=function(b,K){return Be.current.useLayoutEffect(b,K)},Pe.useMemo=function(b,K){return Be.current.useMemo(b,K)},Pe.useReducer=function(b,K,ue){return Be.current.useReducer(b,K,ue)},Pe.useRef=function(b){return Be.current.useRef(b)},Pe.useState=function(b){return Be.current.useState(b)},Pe.useSyncExternalStore=function(b,K,ue){return Be.current.useSyncExternalStore(b,K,ue)},Pe.useTransition=function(){return Be.current.useTransition()},Pe.version="18.3.1",Pe}var qg;function Df(){return qg||(qg=1,Md.exports=OT()),Md.exports}var U=Df(),Qu={},Fd={exports:{}},on={},Ud={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function LT(){return Hg||(Hg=1,function(n){function e(se,ge){var ae=se.length;se.push(ge);e:for(;0<ae;){var b=ae-1>>>1,K=se[b];if(0<o(K,ge))se[b]=ge,se[ae]=K,ae=b;else break e}}function t(se){return se.length===0?null:se[0]}function i(se){if(se.length===0)return null;var ge=se[0],ae=se.pop();if(ae!==ge){se[0]=ae;e:for(var b=0,K=se.length,ue=K>>>1;b<ue;){var Ee=2*(b+1)-1,Te=se[Ee],xe=Ee+1,ke=se[xe];if(0>o(Te,ae))xe<K&&0>o(ke,Te)?(se[b]=ke,se[xe]=ae,b=xe):(se[b]=Te,se[Ee]=ae,b=Ee);else if(xe<K&&0>o(ke,ae))se[b]=ke,se[xe]=ae,b=xe;else break e}}return ge}function o(se,ge){var ae=se.sortIndex-ge.sortIndex;return ae!==0?ae:se.id-ge.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],y=[],v=1,T=null,I=3,x=!1,F=!1,j=!1,V=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(se){for(var ge=t(y);ge!==null;){if(ge.callback===null)i(y);else if(ge.startTime<=se)i(y),ge.sortIndex=ge.expirationTime,e(p,ge);else break;ge=t(y)}}function re(se){if(j=!1,G(se),!F)if(t(p)!==null)F=!0,mt(_e);else{var ge=t(y);ge!==null&&Be(re,ge.startTime-se)}}function _e(se,ge){F=!1,j&&(j=!1,W(S),S=-1),x=!0;var ae=I;try{for(G(ge),T=t(p);T!==null&&(!(T.expirationTime>ge)||se&&!N());){var b=T.callback;if(typeof b=="function"){T.callback=null,I=T.priorityLevel;var K=b(T.expirationTime<=ge);ge=n.unstable_now(),typeof K=="function"?T.callback=K:T===t(p)&&i(p),G(ge)}else i(p);T=t(p)}if(T!==null)var ue=!0;else{var Ee=t(y);Ee!==null&&Be(re,Ee.startTime-ge),ue=!1}return ue}finally{T=null,I=ae,x=!1}}var me=!1,P=null,S=-1,R=5,A=-1;function N(){return!(n.unstable_now()-A<R)}function M(){if(P!==null){var se=n.unstable_now();A=se;var ge=!0;try{ge=P(!0,se)}finally{ge?k():(me=!1,P=null)}}else me=!1}var k;if(typeof J=="function")k=function(){J(M)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,St=Ze.port2;Ze.port1.onmessage=M,k=function(){St.postMessage(null)}}else k=function(){V(M,0)};function mt(se){P=se,me||(me=!0,k())}function Be(se,ge){S=V(function(){se(n.unstable_now())},ge)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){F||x||(F=!0,mt(_e))},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(se){switch(I){case 1:case 2:case 3:var ge=3;break;default:ge=I}var ae=I;I=ge;try{return se()}finally{I=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,ge){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ae=I;I=se;try{return ge()}finally{I=ae}},n.unstable_scheduleCallback=function(se,ge,ae){var b=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?b+ae:b):ae=b,se){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=ae+K,se={id:v++,callback:ge,priorityLevel:se,startTime:ae,expirationTime:K,sortIndex:-1},ae>b?(se.sortIndex=ae,e(y,se),t(p)===null&&se===t(y)&&(j?(W(S),S=-1):j=!0,Be(re,ae-b))):(se.sortIndex=K,e(p,se),F||x||(F=!0,mt(_e))),se},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(se){var ge=I;return function(){var ae=I;I=ge;try{return se.apply(this,arguments)}finally{I=ae}}}}(Bd)),Bd}var Wg;function VT(){return Wg||(Wg=1,Ud.exports=LT()),Ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function MT(){if(Kg)return on;Kg=1;var n=Df(),e=VT();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){c(r,s),c(r+"Capture",s)}function c(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},T={};function I(r){return p.call(T,r)?!0:p.call(v,r)?!1:y.test(r)?T[r]=!0:(v[r]=!0,!1)}function x(r,s,a,h){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function F(r,s,a,h){if(s===null||typeof s>"u"||x(r,s,a,h))return!0;if(h)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function j(r,s,a,h,f,g,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=w}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){V[r]=new j(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];V[s]=new j(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){V[r]=new j(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){V[r]=new j(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){V[r]=new j(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){V[r]=new j(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){V[r]=new j(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){V[r]=new j(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){V[r]=new j(r,5,!1,r.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function J(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(W,J);V[s]=new j(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(W,J);V[s]=new j(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(W,J);V[s]=new j(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){V[r]=new j(r,1,!1,r.toLowerCase(),null,!1,!1)}),V.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){V[r]=new j(r,1,!1,r.toLowerCase(),null,!0,!0)});function G(r,s,a,h){var f=V.hasOwnProperty(s)?V[s]:null;(f!==null?f.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(F(s,a,f,h)&&(a=null),h||f===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,h=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,h?r.setAttributeNS(h,s,a):r.setAttribute(s,a))))}var re=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_e=Symbol.for("react.element"),me=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),N=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),St=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),se=Symbol.iterator;function ge(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var ae=Object.assign,b;function K(r){if(b===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);b=s&&s[1]||""}return`
`+b+r}var ue=!1;function Ee(r,s){if(!r||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(q){var h=q}Reflect.construct(r,[],s)}else{try{s.call()}catch(q){h=q}r.call(s.prototype)}else{try{throw Error()}catch(q){h=q}r()}}catch(q){if(q&&h&&typeof q.stack=="string"){for(var f=q.stack.split(`
`),g=h.stack.split(`
`),w=f.length-1,C=g.length-1;1<=w&&0<=C&&f[w]!==g[C];)C--;for(;1<=w&&0<=C;w--,C--)if(f[w]!==g[C]){if(w!==1||C!==1)do if(w--,C--,0>C||f[w]!==g[C]){var D=`
`+f[w].replace(" at new "," at ");return r.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",r.displayName)),D}while(1<=w&&0<=C);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?K(r):""}function Te(r){switch(r.tag){case 5:return K(r.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return r=Ee(r.type,!1),r;case 11:return r=Ee(r.type.render,!1),r;case 1:return r=Ee(r.type,!0),r;default:return""}}function xe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case me:return"Portal";case R:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case Ze:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case N:return(r.displayName||"Context")+".Consumer";case A:return(r._context.displayName||"Context")+".Provider";case M:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case St:return s=r.displayName||null,s!==null?s:xe(r.type)||"Memo";case mt:s=r._payload,r=r._init;try{return xe(r(s))}catch{}}return null}function ke(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(s);case 8:return s===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function be(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ze(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Rt(r){var s=ze(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),h=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(w){h=""+w,g.call(this,w)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return h},setValue:function(w){h=""+w},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Tr(r){r._valueTracker||(r._valueTracker=Rt(r))}function Ds(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),h="";return r&&(h=ze(r)?r.checked?"true":"false":r.value),r=h,r!==a?(s.setValue(r),!0):!1}function Xr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Wi(r,s){var a=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function bs(r,s){var a=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;a=be(s.value!=null?s.value:a),r._wrapperState={initialChecked:h,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ta(r,s){s=s.checked,s!=null&&G(r,"checked",s,!1)}function na(r,s){ta(r,s);var a=be(s.value),h=s.type;if(a!=null)h==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(h==="submit"||h==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Os(r,s.type,a):s.hasOwnProperty("defaultValue")&&Os(r,s.type,be(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Ol(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Os(r,s,a){(s!=="number"||Xr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Ir=Array.isArray;function Sr(r,s,a,h){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&h&&(r[a].defaultSelected=!0)}else{for(a=""+be(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,h&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function ra(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ls(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(Ir(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:be(a)}}function Vs(r,s){var a=be(s.value),h=be(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),h!=null&&(r.defaultValue=""+h)}function ia(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function gt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?gt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Rr,sa=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,h,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,h,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Rr=Rr||document.createElement("div"),Rr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Rr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Jr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gi=["Webkit","ms","Moz","O"];Object.keys(Ki).forEach(function(r){Gi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Ki[s]=Ki[r]})});function oa(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Ki.hasOwnProperty(r)&&Ki[r]?(""+s).trim():s+"px"}function aa(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var h=a.indexOf("--")===0,f=oa(a,s[a],h);a==="float"&&(a="cssFloat"),h?r.setProperty(a,f):r[a]=f}}var la=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ua(r,s){if(s){if(la[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ca(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qi=null;function Ms(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Fs=null,wn=null,tr=null;function Us(r){if(r=Oa(r)){if(typeof Fs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=cu(s),Fs(r.stateNode,r.type,s))}}function nr(r){wn?tr?tr.push(r):tr=[r]:wn=r}function ha(){if(wn){var r=wn,s=tr;if(tr=wn=null,Us(r),s)for(r=0;r<s.length;r++)Us(s[r])}}function Yi(r,s){return r(s)}function da(){}var Cr=!1;function fa(r,s,a){if(Cr)return r(s,a);Cr=!0;try{return Yi(r,s,a)}finally{Cr=!1,(wn!==null||tr!==null)&&(da(),ha())}}function lt(r,s){var a=r.stateNode;if(a===null)return null;var h=cu(a);if(h===null)return null;a=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(r=r.type,h=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!h;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Bs=!1;if(d)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Bs=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Bs=!1}function Xi(r,s,a,h,f,g,w,C,D){var q=Array.prototype.slice.call(arguments,3);try{s.apply(a,q)}catch(Z){this.onError(Z)}}var Ji=!1,zs=null,On=!1,pa=null,hh={onError:function(r){Ji=!0,zs=r}};function js(r,s,a,h,f,g,w,C,D){Ji=!1,zs=null,Xi.apply(hh,arguments)}function Ll(r,s,a,h,f,g,w,C,D){if(js.apply(this,arguments),Ji){if(Ji){var q=zs;Ji=!1,zs=null}else throw Error(t(198));On||(On=!0,pa=q)}}function Ln(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Zi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function Vn(r){if(Ln(r)!==r)throw Error(t(188))}function Vl(r){var s=r.alternate;if(!s){if(s=Ln(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,h=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(h=f.return,h!==null){a=h;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Vn(f),r;if(g===h)return Vn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==h.return)a=f,h=g;else{for(var w=!1,C=f.child;C;){if(C===a){w=!0,a=f,h=g;break}if(C===h){w=!0,h=f,a=g;break}C=C.sibling}if(!w){for(C=g.child;C;){if(C===a){w=!0,a=g,h=f;break}if(C===h){w=!0,h=g,a=f;break}C=C.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==h)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ma(r){return r=Vl(r),r!==null?$s(r):null}function $s(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=$s(r);if(s!==null)return s;r=r.sibling}return null}var qs=e.unstable_scheduleCallback,ga=e.unstable_cancelCallback,Ml=e.unstable_shouldYield,dh=e.unstable_requestPaint,He=e.unstable_now,Fl=e.unstable_getCurrentPriorityLevel,es=e.unstable_ImmediatePriority,Zr=e.unstable_UserBlockingPriority,En=e.unstable_NormalPriority,ya=e.unstable_LowPriority,Ul=e.unstable_IdlePriority,ts=null,cn=null;function Bl(r){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(ts,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:jl,_a=Math.log,zl=Math.LN2;function jl(r){return r>>>=0,r===0?32:31-(_a(r)/zl|0)|0}var Hs=64,Ws=4194304;function ei(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function ns(r,s){var a=r.pendingLanes;if(a===0)return 0;var h=0,f=r.suspendedLanes,g=r.pingedLanes,w=a&268435455;if(w!==0){var C=w&~f;C!==0?h=ei(C):(g&=w,g!==0&&(h=ei(g)))}else w=a&~f,w!==0?h=ei(w):g!==0&&(h=ei(g));if(h===0)return 0;if(s!==0&&s!==h&&!(s&f)&&(f=h&-h,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(h&4&&(h|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=h;0<s;)a=31-Wt(s),f=1<<a,h|=r[a],s&=~f;return h}function fh(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(r,s){for(var a=r.suspendedLanes,h=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var w=31-Wt(g),C=1<<w,D=f[w];D===-1?(!(C&a)||C&h)&&(f[w]=fh(C,s)):D<=s&&(r.expiredLanes|=C),g&=~C}}function hn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function rs(){var r=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),r}function ti(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ni(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Wt(s),r[s]=a}function qe(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var h=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Wt(a),g=1<<f;s[f]=0,h[f]=-1,r[f]=-1,a&=~g}}function ri(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var h=31-Wt(a),f=1<<h;f&s|r[h]&s&&(r[h]|=s),a&=~f}}var Oe=0;function ii(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var $l,Ks,ql,Hl,Wl,va=!1,rr=[],Nt=null,Mn=null,Fn=null,si=new Map,Tn=new Map,ir=[],ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kl(r,s){switch(r){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":si.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(s.pointerId)}}function Jt(r,s,a,h,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:h,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Oa(s),s!==null&&Ks(s)),r):(r.eventSystemFlags|=h,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function mh(r,s,a,h,f){switch(s){case"focusin":return Nt=Jt(Nt,r,s,a,h,f),!0;case"dragenter":return Mn=Jt(Mn,r,s,a,h,f),!0;case"mouseover":return Fn=Jt(Fn,r,s,a,h,f),!0;case"pointerover":var g=f.pointerId;return si.set(g,Jt(si.get(g)||null,r,s,a,h,f)),!0;case"gotpointercapture":return g=f.pointerId,Tn.set(g,Jt(Tn.get(g)||null,r,s,a,h,f)),!0}return!1}function Gl(r){var s=ls(r.target);if(s!==null){var a=Ln(s);if(a!==null){if(s=a.tag,s===13){if(s=Zi(a),s!==null){r.blockedOn=s,Wl(r.priority,function(){ql(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function kr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Gs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var h=new a.constructor(a.type,a);Qi=h,a.target.dispatchEvent(h),Qi=null}else return s=Oa(a),s!==null&&Ks(s),r.blockedOn=a,!1;s.shift()}return!0}function is(r,s,a){kr(r)&&a.delete(s)}function Ql(){va=!1,Nt!==null&&kr(Nt)&&(Nt=null),Mn!==null&&kr(Mn)&&(Mn=null),Fn!==null&&kr(Fn)&&(Fn=null),si.forEach(is),Tn.forEach(is)}function Un(r,s){r.blockedOn===s&&(r.blockedOn=null,va||(va=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ql)))}function Bn(r){function s(f){return Un(f,r)}if(0<rr.length){Un(rr[0],r);for(var a=1;a<rr.length;a++){var h=rr[a];h.blockedOn===r&&(h.blockedOn=null)}}for(Nt!==null&&Un(Nt,r),Mn!==null&&Un(Mn,r),Fn!==null&&Un(Fn,r),si.forEach(s),Tn.forEach(s),a=0;a<ir.length;a++)h=ir[a],h.blockedOn===r&&(h.blockedOn=null);for(;0<ir.length&&(a=ir[0],a.blockedOn===null);)Gl(a),a.blockedOn===null&&ir.shift()}var Pr=re.ReactCurrentBatchConfig,oi=!0;function Ye(r,s,a,h){var f=Oe,g=Pr.transition;Pr.transition=null;try{Oe=1,wa(r,s,a,h)}finally{Oe=f,Pr.transition=g}}function gh(r,s,a,h){var f=Oe,g=Pr.transition;Pr.transition=null;try{Oe=4,wa(r,s,a,h)}finally{Oe=f,Pr.transition=g}}function wa(r,s,a,h){if(oi){var f=Gs(r,s,a,h);if(f===null)Ah(r,s,h,ss,a),Kl(r,h);else if(mh(f,r,s,a,h))h.stopPropagation();else if(Kl(r,h),s&4&&-1<ph.indexOf(r)){for(;f!==null;){var g=Oa(f);if(g!==null&&$l(g),g=Gs(r,s,a,h),g===null&&Ah(r,s,h,ss,a),g===f)break;f=g}f!==null&&h.stopPropagation()}else Ah(r,s,h,null,a)}}var ss=null;function Gs(r,s,a,h){if(ss=null,r=Ms(h),r=ls(r),r!==null)if(s=Ln(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Zi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return ss=r,null}function Ea(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fl()){case es:return 1;case Zr:return 4;case En:case ya:return 16;case Ul:return 536870912;default:return 16}default:return 16}}var dn=null,Qs=null,Zt=null;function Ta(){if(Zt)return Zt;var r,s=Qs,a=s.length,h,f="value"in dn?dn.value:dn.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var w=a-r;for(h=1;h<=w&&s[a-h]===f[g-h];h++);return Zt=f.slice(r,1<h?1-h:void 0)}function Ys(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function sr(){return!0}function Ia(){return!1}function Dt(r){function s(a,h,f,g,w){this._reactName=a,this._targetInst=f,this.type=h,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var C in r)r.hasOwnProperty(C)&&(a=r[C],this[C]=a?a(g):g[C]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?sr:Ia,this.isPropagationStopped=Ia,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=sr)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=sr)},persist:function(){},isPersistent:sr}),s}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=Dt(zn),or=ae({},zn,{view:0,detail:0}),yh=Dt(or),Js,xr,ai,os=ae({},or,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ai&&(ai&&r.type==="mousemove"?(Js=r.screenX-ai.screenX,xr=r.screenY-ai.screenY):xr=Js=0,ai=r),Js)},movementY:function(r){return"movementY"in r?r.movementY:xr}}),Zs=Dt(os),Sa=ae({},os,{dataTransfer:0}),Yl=Dt(Sa),eo=ae({},or,{relatedTarget:0}),to=Dt(eo),Xl=ae({},zn,{animationName:0,elapsedTime:0,pseudoElement:0}),Nr=Dt(Xl),Jl=ae({},zn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Zl=Dt(Jl),eu=ae({},zn,{data:0}),Ra=Dt(eu),no={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=tu[r])?!!s[r]:!1}function ar(){return nu}var u=ae({},or,{key:function(r){if(r.key){var s=no[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ys(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Kt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(r){return r.type==="keypress"?Ys(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ys(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=Dt(u),_=ae({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),E=Dt(_),B=ae({},or,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),H=Dt(B),ne=ae({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$e=Dt(ne),_t=ae({},os,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ve=Dt(_t),Ct=[9,13,27,32],ht=d&&"CompositionEvent"in window,In=null;d&&"documentMode"in document&&(In=document.documentMode);var fn=d&&"TextEvent"in window&&!In,as=d&&(!ht||In&&8<In&&11>=In),ro=" ",Mp=!1;function Fp(r,s){switch(r){case"keyup":return Ct.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Up(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var io=!1;function DE(r,s){switch(r){case"compositionend":return Up(s);case"keypress":return s.which!==32?null:(Mp=!0,ro);case"textInput":return r=s.data,r===ro&&Mp?null:r;default:return null}}function bE(r,s){if(io)return r==="compositionend"||!ht&&Fp(r,s)?(r=Ta(),Zt=Qs=dn=null,io=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return as&&s.locale!=="ko"?null:s.data;default:return null}}var OE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!OE[r.type]:s==="textarea"}function zp(r,s,a,h){nr(h),s=au(s,"onChange"),0<s.length&&(a=new Xs("onChange","change",null,a,h),r.push({event:a,listeners:s}))}var Ca=null,Aa=null;function LE(r){sm(r,0)}function ru(r){var s=uo(r);if(Ds(s))return r}function VE(r,s){if(r==="change")return s}var jp=!1;if(d){var _h;if(d){var vh="oninput"in document;if(!vh){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),vh=typeof $p.oninput=="function"}_h=vh}else _h=!1;jp=_h&&(!document.documentMode||9<document.documentMode)}function qp(){Ca&&(Ca.detachEvent("onpropertychange",Hp),Aa=Ca=null)}function Hp(r){if(r.propertyName==="value"&&ru(Aa)){var s=[];zp(s,Aa,r,Ms(r)),fa(LE,s)}}function ME(r,s,a){r==="focusin"?(qp(),Ca=s,Aa=a,Ca.attachEvent("onpropertychange",Hp)):r==="focusout"&&qp()}function FE(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ru(Aa)}function UE(r,s){if(r==="click")return ru(s)}function BE(r,s){if(r==="input"||r==="change")return ru(s)}function zE(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var jn=typeof Object.is=="function"?Object.is:zE;function ka(r,s){if(jn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),h=Object.keys(s);if(a.length!==h.length)return!1;for(h=0;h<a.length;h++){var f=a[h];if(!p.call(s,f)||!jn(r[f],s[f]))return!1}return!0}function Wp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Kp(r,s){var a=Wp(r);r=0;for(var h;a;){if(a.nodeType===3){if(h=r+a.textContent.length,r<=s&&h>=s)return{node:a,offset:s-r};r=h}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Wp(a)}}function Gp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Gp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Qp(){for(var r=window,s=Xr();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Xr(r.document)}return s}function wh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function jE(r){var s=Qp(),a=r.focusedElem,h=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Gp(a.ownerDocument.documentElement,a)){if(h!==null&&wh(a)){if(s=h.start,r=h.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(h.start,f);h=h.end===void 0?g:Math.min(h.end,f),!r.extend&&g>h&&(f=h,h=g,g=f),f=Kp(a,g);var w=Kp(a,h);f&&w&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==w.node||r.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>h?(r.addRange(s),r.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var $E=d&&"documentMode"in document&&11>=document.documentMode,so=null,Eh=null,Pa=null,Th=!1;function Yp(r,s,a){var h=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Th||so==null||so!==Xr(h)||(h=so,"selectionStart"in h&&wh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Pa&&ka(Pa,h)||(Pa=h,h=au(Eh,"onSelect"),0<h.length&&(s=new Xs("onSelect","select",null,s,a),r.push({event:s,listeners:h}),s.target=so)))}function iu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var oo={animationend:iu("Animation","AnimationEnd"),animationiteration:iu("Animation","AnimationIteration"),animationstart:iu("Animation","AnimationStart"),transitionend:iu("Transition","TransitionEnd")},Ih={},Xp={};d&&(Xp=document.createElement("div").style,"AnimationEvent"in window||(delete oo.animationend.animation,delete oo.animationiteration.animation,delete oo.animationstart.animation),"TransitionEvent"in window||delete oo.transitionend.transition);function su(r){if(Ih[r])return Ih[r];if(!oo[r])return r;var s=oo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Xp)return Ih[r]=s[a];return r}var Jp=su("animationend"),Zp=su("animationiteration"),em=su("animationstart"),tm=su("transitionend"),nm=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(r,s){nm.set(r,s),l(s,[r])}for(var Sh=0;Sh<rm.length;Sh++){var Rh=rm[Sh],qE=Rh.toLowerCase(),HE=Rh[0].toUpperCase()+Rh.slice(1);li(qE,"on"+HE)}li(Jp,"onAnimationEnd"),li(Zp,"onAnimationIteration"),li(em,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(tm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WE=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function im(r,s,a){var h=r.type||"unknown-event";r.currentTarget=a,Ll(h,s,void 0,r),r.currentTarget=null}function sm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var h=r[a],f=h.event;h=h.listeners;e:{var g=void 0;if(s)for(var w=h.length-1;0<=w;w--){var C=h[w],D=C.instance,q=C.currentTarget;if(C=C.listener,D!==g&&f.isPropagationStopped())break e;im(f,C,q),g=D}else for(w=0;w<h.length;w++){if(C=h[w],D=C.instance,q=C.currentTarget,C=C.listener,D!==g&&f.isPropagationStopped())break e;im(f,C,q),g=D}}}if(On)throw r=pa,On=!1,pa=null,r}function Ke(r,s){var a=s[bh];a===void 0&&(a=s[bh]=new Set);var h=r+"__bubble";a.has(h)||(om(s,r,2,!1),a.add(h))}function Ch(r,s,a){var h=0;s&&(h|=4),om(a,r,h,s)}var ou="_reactListening"+Math.random().toString(36).slice(2);function Na(r){if(!r[ou]){r[ou]=!0,i.forEach(function(a){a!=="selectionchange"&&(WE.has(a)||Ch(a,!1,r),Ch(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[ou]||(s[ou]=!0,Ch("selectionchange",!1,s))}}function om(r,s,a,h){switch(Ea(s)){case 1:var f=Ye;break;case 4:f=gh;break;default:f=wa}a=f.bind(null,s,a,r),f=void 0,!Bs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),h?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function Ah(r,s,a,h,f){var g=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var w=h.tag;if(w===3||w===4){var C=h.stateNode.containerInfo;if(C===f||C.nodeType===8&&C.parentNode===f)break;if(w===4)for(w=h.return;w!==null;){var D=w.tag;if((D===3||D===4)&&(D=w.stateNode.containerInfo,D===f||D.nodeType===8&&D.parentNode===f))return;w=w.return}for(;C!==null;){if(w=ls(C),w===null)return;if(D=w.tag,D===5||D===6){h=g=w;continue e}C=C.parentNode}}h=h.return}fa(function(){var q=g,Z=Ms(a),ee=[];e:{var X=nm.get(r);if(X!==void 0){var oe=Xs,de=r;switch(r){case"keypress":if(Ys(a)===0)break e;case"keydown":case"keyup":oe=m;break;case"focusin":de="focus",oe=to;break;case"focusout":de="blur",oe=to;break;case"beforeblur":case"afterblur":oe=to;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Yl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=H;break;case Jp:case Zp:case em:oe=Nr;break;case tm:oe=$e;break;case"scroll":oe=yh;break;case"wheel":oe=Ve;break;case"copy":case"cut":case"paste":oe=Zl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=E}var fe=(s&4)!==0,ut=!fe&&r==="scroll",z=fe?X!==null?X+"Capture":null:X;fe=[];for(var L=q,$;L!==null;){$=L;var te=$.stateNode;if($.tag===5&&te!==null&&($=te,z!==null&&(te=lt(L,z),te!=null&&fe.push(Da(L,te,$)))),ut)break;L=L.return}0<fe.length&&(X=new oe(X,de,null,a,Z),ee.push({event:X,listeners:fe}))}}if(!(s&7)){e:{if(X=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",X&&a!==Qi&&(de=a.relatedTarget||a.fromElement)&&(ls(de)||de[Dr]))break e;if((oe||X)&&(X=Z.window===Z?Z:(X=Z.ownerDocument)?X.defaultView||X.parentWindow:window,oe?(de=a.relatedTarget||a.toElement,oe=q,de=de?ls(de):null,de!==null&&(ut=Ln(de),de!==ut||de.tag!==5&&de.tag!==6)&&(de=null)):(oe=null,de=q),oe!==de)){if(fe=Zs,te="onMouseLeave",z="onMouseEnter",L="mouse",(r==="pointerout"||r==="pointerover")&&(fe=E,te="onPointerLeave",z="onPointerEnter",L="pointer"),ut=oe==null?X:uo(oe),$=de==null?X:uo(de),X=new fe(te,L+"leave",oe,a,Z),X.target=ut,X.relatedTarget=$,te=null,ls(Z)===q&&(fe=new fe(z,L+"enter",de,a,Z),fe.target=$,fe.relatedTarget=ut,te=fe),ut=te,oe&&de)t:{for(fe=oe,z=de,L=0,$=fe;$;$=ao($))L++;for($=0,te=z;te;te=ao(te))$++;for(;0<L-$;)fe=ao(fe),L--;for(;0<$-L;)z=ao(z),$--;for(;L--;){if(fe===z||z!==null&&fe===z.alternate)break t;fe=ao(fe),z=ao(z)}fe=null}else fe=null;oe!==null&&am(ee,X,oe,fe,!1),de!==null&&ut!==null&&am(ee,ut,de,fe,!0)}}e:{if(X=q?uo(q):window,oe=X.nodeName&&X.nodeName.toLowerCase(),oe==="select"||oe==="input"&&X.type==="file")var pe=VE;else if(Bp(X))if(jp)pe=BE;else{pe=FE;var ve=ME}else(oe=X.nodeName)&&oe.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(pe=UE);if(pe&&(pe=pe(r,q))){zp(ee,pe,a,Z);break e}ve&&ve(r,X,q),r==="focusout"&&(ve=X._wrapperState)&&ve.controlled&&X.type==="number"&&Os(X,"number",X.value)}switch(ve=q?uo(q):window,r){case"focusin":(Bp(ve)||ve.contentEditable==="true")&&(so=ve,Eh=q,Pa=null);break;case"focusout":Pa=Eh=so=null;break;case"mousedown":Th=!0;break;case"contextmenu":case"mouseup":case"dragend":Th=!1,Yp(ee,a,Z);break;case"selectionchange":if($E)break;case"keydown":case"keyup":Yp(ee,a,Z)}var we;if(ht)e:{switch(r){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else io?Fp(r,a)&&(Se="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(as&&a.locale!=="ko"&&(io||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&io&&(we=Ta()):(dn=Z,Qs="value"in dn?dn.value:dn.textContent,io=!0)),ve=au(q,Se),0<ve.length&&(Se=new Ra(Se,r,null,a,Z),ee.push({event:Se,listeners:ve}),we?Se.data=we:(we=Up(a),we!==null&&(Se.data=we)))),(we=fn?DE(r,a):bE(r,a))&&(q=au(q,"onBeforeInput"),0<q.length&&(Z=new Ra("onBeforeInput","beforeinput",null,a,Z),ee.push({event:Z,listeners:q}),Z.data=we))}sm(ee,s)})}function Da(r,s,a){return{instance:r,listener:s,currentTarget:a}}function au(r,s){for(var a=s+"Capture",h=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=lt(r,a),g!=null&&h.unshift(Da(r,g,f)),g=lt(r,s),g!=null&&h.push(Da(r,g,f))),r=r.return}return h}function ao(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function am(r,s,a,h,f){for(var g=s._reactName,w=[];a!==null&&a!==h;){var C=a,D=C.alternate,q=C.stateNode;if(D!==null&&D===h)break;C.tag===5&&q!==null&&(C=q,f?(D=lt(a,g),D!=null&&w.unshift(Da(a,D,C))):f||(D=lt(a,g),D!=null&&w.push(Da(a,D,C)))),a=a.return}w.length!==0&&r.push({event:s,listeners:w})}var KE=/\r\n?/g,GE=/\u0000|\uFFFD/g;function lm(r){return(typeof r=="string"?r:""+r).replace(KE,`
`).replace(GE,"")}function lu(r,s,a){if(s=lm(s),lm(r)!==s&&a)throw Error(t(425))}function uu(){}var kh=null,Ph=null;function xh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Nh=typeof setTimeout=="function"?setTimeout:void 0,QE=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,YE=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(r){return um.resolve(null).then(r).catch(XE)}:Nh;function XE(r){setTimeout(function(){throw r})}function Dh(r,s){var a=s,h=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(h===0){r.removeChild(f),Bn(s);return}h--}else a!=="$"&&a!=="$?"&&a!=="$!"||h++;a=f}while(a);Bn(s)}function ui(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function cm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var lo=Math.random().toString(36).slice(2),lr="__reactFiber$"+lo,ba="__reactProps$"+lo,Dr="__reactContainer$"+lo,bh="__reactEvents$"+lo,JE="__reactListeners$"+lo,ZE="__reactHandles$"+lo;function ls(r){var s=r[lr];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Dr]||a[lr]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=cm(r);r!==null;){if(a=r[lr])return a;r=cm(r)}return s}r=a,a=r.parentNode}return null}function Oa(r){return r=r[lr]||r[Dr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function uo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function cu(r){return r[ba]||null}var Oh=[],co=-1;function ci(r){return{current:r}}function Ge(r){0>co||(r.current=Oh[co],Oh[co]=null,co--)}function We(r,s){co++,Oh[co]=r.current,r.current=s}var hi={},Ft=ci(hi),en=ci(!1),us=hi;function ho(r,s){var a=r.type.contextTypes;if(!a)return hi;var h=r.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function tn(r){return r=r.childContextTypes,r!=null}function hu(){Ge(en),Ge(Ft)}function hm(r,s,a){if(Ft.current!==hi)throw Error(t(168));We(Ft,s),We(en,a)}function dm(r,s,a){var h=r.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return a;h=h.getChildContext();for(var f in h)if(!(f in s))throw Error(t(108,ke(r)||"Unknown",f));return ae({},a,h)}function du(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||hi,us=Ft.current,We(Ft,r),We(en,en.current),!0}function fm(r,s,a){var h=r.stateNode;if(!h)throw Error(t(169));a?(r=dm(r,s,us),h.__reactInternalMemoizedMergedChildContext=r,Ge(en),Ge(Ft),We(Ft,r)):Ge(en),We(en,a)}var br=null,fu=!1,Lh=!1;function pm(r){br===null?br=[r]:br.push(r)}function eT(r){fu=!0,pm(r)}function di(){if(!Lh&&br!==null){Lh=!0;var r=0,s=Oe;try{var a=br;for(Oe=1;r<a.length;r++){var h=a[r];do h=h(!0);while(h!==null)}br=null,fu=!1}catch(f){throw br!==null&&(br=br.slice(r+1)),qs(es,di),f}finally{Oe=s,Lh=!1}}return null}var fo=[],po=0,pu=null,mu=0,Sn=[],Rn=0,cs=null,Or=1,Lr="";function hs(r,s){fo[po++]=mu,fo[po++]=pu,pu=r,mu=s}function mm(r,s,a){Sn[Rn++]=Or,Sn[Rn++]=Lr,Sn[Rn++]=cs,cs=r;var h=Or;r=Lr;var f=32-Wt(h)-1;h&=~(1<<f),a+=1;var g=32-Wt(s)+f;if(30<g){var w=f-f%5;g=(h&(1<<w)-1).toString(32),h>>=w,f-=w,Or=1<<32-Wt(s)+f|a<<f|h,Lr=g+r}else Or=1<<g|a<<f|h,Lr=r}function Vh(r){r.return!==null&&(hs(r,1),mm(r,1,0))}function Mh(r){for(;r===pu;)pu=fo[--po],fo[po]=null,mu=fo[--po],fo[po]=null;for(;r===cs;)cs=Sn[--Rn],Sn[Rn]=null,Lr=Sn[--Rn],Sn[Rn]=null,Or=Sn[--Rn],Sn[Rn]=null}var pn=null,mn=null,Xe=!1,$n=null;function gm(r,s){var a=Pn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function ym(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,pn=r,mn=ui(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,pn=r,mn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=cs!==null?{id:Or,overflow:Lr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Pn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,pn=r,mn=null,!0):!1;default:return!1}}function Fh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Uh(r){if(Xe){var s=mn;if(s){var a=s;if(!ym(r,s)){if(Fh(r))throw Error(t(418));s=ui(a.nextSibling);var h=pn;s&&ym(r,s)?gm(h,a):(r.flags=r.flags&-4097|2,Xe=!1,pn=r)}}else{if(Fh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Xe=!1,pn=r}}}function _m(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;pn=r}function gu(r){if(r!==pn)return!1;if(!Xe)return _m(r),Xe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!xh(r.type,r.memoizedProps)),s&&(s=mn)){if(Fh(r))throw vm(),Error(t(418));for(;s;)gm(r,s),s=ui(s.nextSibling)}if(_m(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){mn=ui(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}mn=null}}else mn=pn?ui(r.stateNode.nextSibling):null;return!0}function vm(){for(var r=mn;r;)r=ui(r.nextSibling)}function mo(){mn=pn=null,Xe=!1}function Bh(r){$n===null?$n=[r]:$n.push(r)}var tT=re.ReactCurrentBatchConfig;function La(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var h=a.stateNode}if(!h)throw Error(t(147,r));var f=h,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(w){var C=f.refs;w===null?delete C[g]:C[g]=w},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function yu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function wm(r){var s=r._init;return s(r._payload)}function Em(r){function s(z,L){if(r){var $=z.deletions;$===null?(z.deletions=[L],z.flags|=16):$.push(L)}}function a(z,L){if(!r)return null;for(;L!==null;)s(z,L),L=L.sibling;return null}function h(z,L){for(z=new Map;L!==null;)L.key!==null?z.set(L.key,L):z.set(L.index,L),L=L.sibling;return z}function f(z,L){return z=wi(z,L),z.index=0,z.sibling=null,z}function g(z,L,$){return z.index=$,r?($=z.alternate,$!==null?($=$.index,$<L?(z.flags|=2,L):$):(z.flags|=2,L)):(z.flags|=1048576,L)}function w(z){return r&&z.alternate===null&&(z.flags|=2),z}function C(z,L,$,te){return L===null||L.tag!==6?(L=Nd($,z.mode,te),L.return=z,L):(L=f(L,$),L.return=z,L)}function D(z,L,$,te){var pe=$.type;return pe===P?Z(z,L,$.props.children,te,$.key):L!==null&&(L.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===mt&&wm(pe)===L.type)?(te=f(L,$.props),te.ref=La(z,L,$),te.return=z,te):(te=zu($.type,$.key,$.props,null,z.mode,te),te.ref=La(z,L,$),te.return=z,te)}function q(z,L,$,te){return L===null||L.tag!==4||L.stateNode.containerInfo!==$.containerInfo||L.stateNode.implementation!==$.implementation?(L=Dd($,z.mode,te),L.return=z,L):(L=f(L,$.children||[]),L.return=z,L)}function Z(z,L,$,te,pe){return L===null||L.tag!==7?(L=vs($,z.mode,te,pe),L.return=z,L):(L=f(L,$),L.return=z,L)}function ee(z,L,$){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Nd(""+L,z.mode,$),L.return=z,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case _e:return $=zu(L.type,L.key,L.props,null,z.mode,$),$.ref=La(z,null,L),$.return=z,$;case me:return L=Dd(L,z.mode,$),L.return=z,L;case mt:var te=L._init;return ee(z,te(L._payload),$)}if(Ir(L)||ge(L))return L=vs(L,z.mode,$,null),L.return=z,L;yu(z,L)}return null}function X(z,L,$,te){var pe=L!==null?L.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return pe!==null?null:C(z,L,""+$,te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case _e:return $.key===pe?D(z,L,$,te):null;case me:return $.key===pe?q(z,L,$,te):null;case mt:return pe=$._init,X(z,L,pe($._payload),te)}if(Ir($)||ge($))return pe!==null?null:Z(z,L,$,te,null);yu(z,$)}return null}function oe(z,L,$,te,pe){if(typeof te=="string"&&te!==""||typeof te=="number")return z=z.get($)||null,C(L,z,""+te,pe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case _e:return z=z.get(te.key===null?$:te.key)||null,D(L,z,te,pe);case me:return z=z.get(te.key===null?$:te.key)||null,q(L,z,te,pe);case mt:var ve=te._init;return oe(z,L,$,ve(te._payload),pe)}if(Ir(te)||ge(te))return z=z.get($)||null,Z(L,z,te,pe,null);yu(L,te)}return null}function de(z,L,$,te){for(var pe=null,ve=null,we=L,Se=L=0,Pt=null;we!==null&&Se<$.length;Se++){we.index>Se?(Pt=we,we=null):Pt=we.sibling;var Ue=X(z,we,$[Se],te);if(Ue===null){we===null&&(we=Pt);break}r&&we&&Ue.alternate===null&&s(z,we),L=g(Ue,L,Se),ve===null?pe=Ue:ve.sibling=Ue,ve=Ue,we=Pt}if(Se===$.length)return a(z,we),Xe&&hs(z,Se),pe;if(we===null){for(;Se<$.length;Se++)we=ee(z,$[Se],te),we!==null&&(L=g(we,L,Se),ve===null?pe=we:ve.sibling=we,ve=we);return Xe&&hs(z,Se),pe}for(we=h(z,we);Se<$.length;Se++)Pt=oe(we,z,Se,$[Se],te),Pt!==null&&(r&&Pt.alternate!==null&&we.delete(Pt.key===null?Se:Pt.key),L=g(Pt,L,Se),ve===null?pe=Pt:ve.sibling=Pt,ve=Pt);return r&&we.forEach(function(Ei){return s(z,Ei)}),Xe&&hs(z,Se),pe}function fe(z,L,$,te){var pe=ge($);if(typeof pe!="function")throw Error(t(150));if($=pe.call($),$==null)throw Error(t(151));for(var ve=pe=null,we=L,Se=L=0,Pt=null,Ue=$.next();we!==null&&!Ue.done;Se++,Ue=$.next()){we.index>Se?(Pt=we,we=null):Pt=we.sibling;var Ei=X(z,we,Ue.value,te);if(Ei===null){we===null&&(we=Pt);break}r&&we&&Ei.alternate===null&&s(z,we),L=g(Ei,L,Se),ve===null?pe=Ei:ve.sibling=Ei,ve=Ei,we=Pt}if(Ue.done)return a(z,we),Xe&&hs(z,Se),pe;if(we===null){for(;!Ue.done;Se++,Ue=$.next())Ue=ee(z,Ue.value,te),Ue!==null&&(L=g(Ue,L,Se),ve===null?pe=Ue:ve.sibling=Ue,ve=Ue);return Xe&&hs(z,Se),pe}for(we=h(z,we);!Ue.done;Se++,Ue=$.next())Ue=oe(we,z,Se,Ue.value,te),Ue!==null&&(r&&Ue.alternate!==null&&we.delete(Ue.key===null?Se:Ue.key),L=g(Ue,L,Se),ve===null?pe=Ue:ve.sibling=Ue,ve=Ue);return r&&we.forEach(function(bT){return s(z,bT)}),Xe&&hs(z,Se),pe}function ut(z,L,$,te){if(typeof $=="object"&&$!==null&&$.type===P&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case _e:e:{for(var pe=$.key,ve=L;ve!==null;){if(ve.key===pe){if(pe=$.type,pe===P){if(ve.tag===7){a(z,ve.sibling),L=f(ve,$.props.children),L.return=z,z=L;break e}}else if(ve.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===mt&&wm(pe)===ve.type){a(z,ve.sibling),L=f(ve,$.props),L.ref=La(z,ve,$),L.return=z,z=L;break e}a(z,ve);break}else s(z,ve);ve=ve.sibling}$.type===P?(L=vs($.props.children,z.mode,te,$.key),L.return=z,z=L):(te=zu($.type,$.key,$.props,null,z.mode,te),te.ref=La(z,L,$),te.return=z,z=te)}return w(z);case me:e:{for(ve=$.key;L!==null;){if(L.key===ve)if(L.tag===4&&L.stateNode.containerInfo===$.containerInfo&&L.stateNode.implementation===$.implementation){a(z,L.sibling),L=f(L,$.children||[]),L.return=z,z=L;break e}else{a(z,L);break}else s(z,L);L=L.sibling}L=Dd($,z.mode,te),L.return=z,z=L}return w(z);case mt:return ve=$._init,ut(z,L,ve($._payload),te)}if(Ir($))return de(z,L,$,te);if(ge($))return fe(z,L,$,te);yu(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,L!==null&&L.tag===6?(a(z,L.sibling),L=f(L,$),L.return=z,z=L):(a(z,L),L=Nd($,z.mode,te),L.return=z,z=L),w(z)):a(z,L)}return ut}var go=Em(!0),Tm=Em(!1),_u=ci(null),vu=null,yo=null,zh=null;function jh(){zh=yo=vu=null}function $h(r){var s=_u.current;Ge(_u),r._currentValue=s}function qh(r,s,a){for(;r!==null;){var h=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),r===a)break;r=r.return}}function _o(r,s){vu=r,zh=yo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(nn=!0),r.firstContext=null)}function Cn(r){var s=r._currentValue;if(zh!==r)if(r={context:r,memoizedValue:s,next:null},yo===null){if(vu===null)throw Error(t(308));yo=r,vu.dependencies={lanes:0,firstContext:r}}else yo=yo.next=r;return s}var ds=null;function Hh(r){ds===null?ds=[r]:ds.push(r)}function Im(r,s,a,h){var f=s.interleaved;return f===null?(a.next=a,Hh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Vr(r,h)}function Vr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var fi=!1;function Wh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Mr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function pi(r,s,a){var h=r.updateQueue;if(h===null)return null;if(h=h.shared,Fe&2){var f=h.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),h.pending=s,Vr(r,a)}return f=h.interleaved,f===null?(s.next=s,Hh(h)):(s.next=f.next,f.next=s),h.interleaved=s,Vr(r,a)}function wu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ri(r,a)}}function Rm(r,s){var a=r.updateQueue,h=r.alternate;if(h!==null&&(h=h.updateQueue,a===h)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:h.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:h.shared,effects:h.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function Eu(r,s,a,h){var f=r.updateQueue;fi=!1;var g=f.firstBaseUpdate,w=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var D=C,q=D.next;D.next=null,w===null?g=q:w.next=q,w=D;var Z=r.alternate;Z!==null&&(Z=Z.updateQueue,C=Z.lastBaseUpdate,C!==w&&(C===null?Z.firstBaseUpdate=q:C.next=q,Z.lastBaseUpdate=D))}if(g!==null){var ee=f.baseState;w=0,Z=q=D=null,C=g;do{var X=C.lane,oe=C.eventTime;if((h&X)===X){Z!==null&&(Z=Z.next={eventTime:oe,lane:0,tag:C.tag,payload:C.payload,callback:C.callback,next:null});e:{var de=r,fe=C;switch(X=s,oe=a,fe.tag){case 1:if(de=fe.payload,typeof de=="function"){ee=de.call(oe,ee,X);break e}ee=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=fe.payload,X=typeof de=="function"?de.call(oe,ee,X):de,X==null)break e;ee=ae({},ee,X);break e;case 2:fi=!0}}C.callback!==null&&C.lane!==0&&(r.flags|=64,X=f.effects,X===null?f.effects=[C]:X.push(C))}else oe={eventTime:oe,lane:X,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Z===null?(q=Z=oe,D=ee):Z=Z.next=oe,w|=X;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;X=C,C=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);if(Z===null&&(D=ee),f.baseState=D,f.firstBaseUpdate=q,f.lastBaseUpdate=Z,s=f.shared.interleaved,s!==null){f=s;do w|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ms|=w,r.lanes=w,r.memoizedState=ee}}function Cm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var h=r[s],f=h.callback;if(f!==null){if(h.callback=null,h=a,typeof f!="function")throw Error(t(191,f));f.call(h)}}}var Va={},ur=ci(Va),Ma=ci(Va),Fa=ci(Va);function fs(r){if(r===Va)throw Error(t(174));return r}function Kh(r,s){switch(We(Fa,s),We(Ma,r),We(ur,Va),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:yt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=yt(s,r)}Ge(ur),We(ur,s)}function vo(){Ge(ur),Ge(Ma),Ge(Fa)}function Am(r){fs(Fa.current);var s=fs(ur.current),a=yt(s,r.type);s!==a&&(We(Ma,r),We(ur,a))}function Gh(r){Ma.current===r&&(Ge(ur),Ge(Ma))}var et=ci(0);function Tu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Qh=[];function Yh(){for(var r=0;r<Qh.length;r++)Qh[r]._workInProgressVersionPrimary=null;Qh.length=0}var Iu=re.ReactCurrentDispatcher,Xh=re.ReactCurrentBatchConfig,ps=0,tt=null,vt=null,At=null,Su=!1,Ua=!1,Ba=0,nT=0;function Ut(){throw Error(t(321))}function Jh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!jn(r[a],s[a]))return!1;return!0}function Zh(r,s,a,h,f,g){if(ps=g,tt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Iu.current=r===null||r.memoizedState===null?oT:aT,r=a(h,f),Ua){g=0;do{if(Ua=!1,Ba=0,25<=g)throw Error(t(301));g+=1,At=vt=null,s.updateQueue=null,Iu.current=lT,r=a(h,f)}while(Ua)}if(Iu.current=Au,s=vt!==null&&vt.next!==null,ps=0,At=vt=tt=null,Su=!1,s)throw Error(t(300));return r}function ed(){var r=Ba!==0;return Ba=0,r}function cr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?tt.memoizedState=At=r:At=At.next=r,At}function An(){if(vt===null){var r=tt.alternate;r=r!==null?r.memoizedState:null}else r=vt.next;var s=At===null?tt.memoizedState:At.next;if(s!==null)At=s,vt=r;else{if(r===null)throw Error(t(310));vt=r,r={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},At===null?tt.memoizedState=At=r:At=At.next=r}return At}function za(r,s){return typeof s=="function"?s(r):s}function td(r){var s=An(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=vt,f=h.baseQueue,g=a.pending;if(g!==null){if(f!==null){var w=f.next;f.next=g.next,g.next=w}h.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,h=h.baseState;var C=w=null,D=null,q=g;do{var Z=q.lane;if((ps&Z)===Z)D!==null&&(D=D.next={lane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),h=q.hasEagerState?q.eagerState:r(h,q.action);else{var ee={lane:Z,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null};D===null?(C=D=ee,w=h):D=D.next=ee,tt.lanes|=Z,ms|=Z}q=q.next}while(q!==null&&q!==g);D===null?w=h:D.next=C,jn(h,s.memoizedState)||(nn=!0),s.memoizedState=h,s.baseState=w,s.baseQueue=D,a.lastRenderedState=h}if(r=a.interleaved,r!==null){f=r;do g=f.lane,tt.lanes|=g,ms|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function nd(r){var s=An(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var h=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do g=r(g,w.action),w=w.next;while(w!==f);jn(g,s.memoizedState)||(nn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,h]}function km(){}function Pm(r,s){var a=tt,h=An(),f=s(),g=!jn(h.memoizedState,f);if(g&&(h.memoizedState=f,nn=!0),h=h.queue,rd(Dm.bind(null,a,h,r),[r]),h.getSnapshot!==s||g||At!==null&&At.memoizedState.tag&1){if(a.flags|=2048,ja(9,Nm.bind(null,a,h,f,s),void 0,null),kt===null)throw Error(t(349));ps&30||xm(a,s,f)}return f}function xm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Nm(r,s,a,h){s.value=a,s.getSnapshot=h,bm(s)&&Om(r)}function Dm(r,s,a){return a(function(){bm(s)&&Om(r)})}function bm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!jn(r,a)}catch{return!0}}function Om(r){var s=Vr(r,1);s!==null&&Kn(s,r,1,-1)}function Lm(r){var s=cr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:r},s.queue=r,r=r.dispatch=sT.bind(null,tt,r),[s.memoizedState,r]}function ja(r,s,a,h){return r={tag:r,create:s,destroy:a,deps:h,next:null},s=tt.updateQueue,s===null?(s={lastEffect:null,stores:null},tt.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(h=a.next,a.next=r,r.next=h,s.lastEffect=r)),r}function Vm(){return An().memoizedState}function Ru(r,s,a,h){var f=cr();tt.flags|=r,f.memoizedState=ja(1|s,a,void 0,h===void 0?null:h)}function Cu(r,s,a,h){var f=An();h=h===void 0?null:h;var g=void 0;if(vt!==null){var w=vt.memoizedState;if(g=w.destroy,h!==null&&Jh(h,w.deps)){f.memoizedState=ja(s,a,g,h);return}}tt.flags|=r,f.memoizedState=ja(1|s,a,g,h)}function Mm(r,s){return Ru(8390656,8,r,s)}function rd(r,s){return Cu(2048,8,r,s)}function Fm(r,s){return Cu(4,2,r,s)}function Um(r,s){return Cu(4,4,r,s)}function Bm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function zm(r,s,a){return a=a!=null?a.concat([r]):null,Cu(4,4,Bm.bind(null,s,r),a)}function id(){}function jm(r,s){var a=An();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Jh(s,h[1])?h[0]:(a.memoizedState=[r,s],r)}function $m(r,s){var a=An();s=s===void 0?null:s;var h=a.memoizedState;return h!==null&&s!==null&&Jh(s,h[1])?h[0]:(r=r(),a.memoizedState=[r,s],r)}function qm(r,s,a){return ps&21?(jn(a,s)||(a=rs(),tt.lanes|=a,ms|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,nn=!0),r.memoizedState=a)}function rT(r,s){var a=Oe;Oe=a!==0&&4>a?a:4,r(!0);var h=Xh.transition;Xh.transition={};try{r(!1),s()}finally{Oe=a,Xh.transition=h}}function Hm(){return An().memoizedState}function iT(r,s,a){var h=_i(r);if(a={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null},Wm(r))Km(s,a);else if(a=Im(r,s,a,h),a!==null){var f=Qt();Kn(a,r,h,f),Gm(a,s,h)}}function sT(r,s,a){var h=_i(r),f={lane:h,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wm(r))Km(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var w=s.lastRenderedState,C=g(w,a);if(f.hasEagerState=!0,f.eagerState=C,jn(C,w)){var D=s.interleaved;D===null?(f.next=f,Hh(s)):(f.next=D.next,D.next=f),s.interleaved=f;return}}catch{}finally{}a=Im(r,s,f,h),a!==null&&(f=Qt(),Kn(a,r,h,f),Gm(a,s,h))}}function Wm(r){var s=r.alternate;return r===tt||s!==null&&s===tt}function Km(r,s){Ua=Su=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Gm(r,s,a){if(a&4194240){var h=s.lanes;h&=r.pendingLanes,a|=h,s.lanes=a,ri(r,a)}}var Au={readContext:Cn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},oT={readContext:Cn,useCallback:function(r,s){return cr().memoizedState=[r,s===void 0?null:s],r},useContext:Cn,useEffect:Mm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Ru(4194308,4,Bm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Ru(4194308,4,r,s)},useInsertionEffect:function(r,s){return Ru(4,2,r,s)},useMemo:function(r,s){var a=cr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var h=cr();return s=a!==void 0?a(s):s,h.memoizedState=h.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},h.queue=r,r=r.dispatch=iT.bind(null,tt,r),[h.memoizedState,r]},useRef:function(r){var s=cr();return r={current:r},s.memoizedState=r},useState:Lm,useDebugValue:id,useDeferredValue:function(r){return cr().memoizedState=r},useTransition:function(){var r=Lm(!1),s=r[0];return r=rT.bind(null,r[1]),cr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var h=tt,f=cr();if(Xe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),kt===null)throw Error(t(349));ps&30||xm(h,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Mm(Dm.bind(null,h,g,r),[r]),h.flags|=2048,ja(9,Nm.bind(null,h,g,a,s),void 0,null),a},useId:function(){var r=cr(),s=kt.identifierPrefix;if(Xe){var a=Lr,h=Or;a=(h&~(1<<32-Wt(h)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ba++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=nT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},aT={readContext:Cn,useCallback:jm,useContext:Cn,useEffect:rd,useImperativeHandle:zm,useInsertionEffect:Fm,useLayoutEffect:Um,useMemo:$m,useReducer:td,useRef:Vm,useState:function(){return td(za)},useDebugValue:id,useDeferredValue:function(r){var s=An();return qm(s,vt.memoizedState,r)},useTransition:function(){var r=td(za)[0],s=An().memoizedState;return[r,s]},useMutableSource:km,useSyncExternalStore:Pm,useId:Hm,unstable_isNewReconciler:!1},lT={readContext:Cn,useCallback:jm,useContext:Cn,useEffect:rd,useImperativeHandle:zm,useInsertionEffect:Fm,useLayoutEffect:Um,useMemo:$m,useReducer:nd,useRef:Vm,useState:function(){return nd(za)},useDebugValue:id,useDeferredValue:function(r){var s=An();return vt===null?s.memoizedState=r:qm(s,vt.memoizedState,r)},useTransition:function(){var r=nd(za)[0],s=An().memoizedState;return[r,s]},useMutableSource:km,useSyncExternalStore:Pm,useId:Hm,unstable_isNewReconciler:!1};function qn(r,s){if(r&&r.defaultProps){s=ae({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function sd(r,s,a,h){s=r.memoizedState,a=a(h,s),a=a==null?s:ae({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var ku={isMounted:function(r){return(r=r._reactInternals)?Ln(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var h=Qt(),f=_i(r),g=Mr(h,f);g.payload=s,a!=null&&(g.callback=a),s=pi(r,g,f),s!==null&&(Kn(s,r,f,h),wu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var h=Qt(),f=_i(r),g=Mr(h,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=pi(r,g,f),s!==null&&(Kn(s,r,f,h),wu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Qt(),h=_i(r),f=Mr(a,h);f.tag=2,s!=null&&(f.callback=s),s=pi(r,f,h),s!==null&&(Kn(s,r,h,a),wu(s,r,h))}};function Qm(r,s,a,h,f,g,w){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(h,g,w):s.prototype&&s.prototype.isPureReactComponent?!ka(a,h)||!ka(f,g):!0}function Ym(r,s,a){var h=!1,f=hi,g=s.contextType;return typeof g=="object"&&g!==null?g=Cn(g):(f=tn(s)?us:Ft.current,h=s.contextTypes,g=(h=h!=null)?ho(r,f):hi),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ku,r.stateNode=s,s._reactInternals=r,h&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function Xm(r,s,a,h){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,h),s.state!==r&&ku.enqueueReplaceState(s,s.state,null)}function od(r,s,a,h){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Wh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=Cn(g):(g=tn(s)?us:Ft.current,f.context=ho(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(sd(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&ku.enqueueReplaceState(f,f.state,null),Eu(r,a,f,h),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function wo(r,s){try{var a="",h=s;do a+=Te(h),h=h.return;while(h);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function ad(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function ld(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var uT=typeof WeakMap=="function"?WeakMap:Map;function Jm(r,s,a){a=Mr(-1,a),a.tag=3,a.payload={element:null};var h=s.value;return a.callback=function(){Lu||(Lu=!0,Id=h),ld(r,s)},a}function Zm(r,s,a){a=Mr(-1,a),a.tag=3;var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var f=s.value;a.payload=function(){return h(f)},a.callback=function(){ld(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){ld(r,s),typeof h!="function"&&(gi===null?gi=new Set([this]):gi.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),a}function eg(r,s,a){var h=r.pingCache;if(h===null){h=r.pingCache=new uT;var f=new Set;h.set(s,f)}else f=h.get(s),f===void 0&&(f=new Set,h.set(s,f));f.has(a)||(f.add(a),r=IT.bind(null,r,s,a),s.then(r,r))}function tg(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function ng(r,s,a,h,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Mr(-1,1),s.tag=2,pi(a,s,1))),a.lanes|=1),r)}var cT=re.ReactCurrentOwner,nn=!1;function Gt(r,s,a,h){s.child=r===null?Tm(s,null,a,h):go(s,r.child,a,h)}function rg(r,s,a,h,f){a=a.render;var g=s.ref;return _o(s,f),h=Zh(r,s,a,h,g,f),a=ed(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Fr(r,s,f)):(Xe&&a&&Vh(s),s.flags|=1,Gt(r,s,h,f),s.child)}function ig(r,s,a,h,f){if(r===null){var g=a.type;return typeof g=="function"&&!xd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,sg(r,s,g,h,f)):(r=zu(a.type,null,h,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:ka,a(w,h)&&r.ref===s.ref)return Fr(r,s,f)}return s.flags|=1,r=wi(g,h),r.ref=s.ref,r.return=s,s.child=r}function sg(r,s,a,h,f){if(r!==null){var g=r.memoizedProps;if(ka(g,h)&&r.ref===s.ref)if(nn=!1,s.pendingProps=h=g,(r.lanes&f)!==0)r.flags&131072&&(nn=!0);else return s.lanes=r.lanes,Fr(r,s,f)}return ud(r,s,a,h,f)}function og(r,s,a){var h=s.pendingProps,f=h.children,g=r!==null?r.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(To,gn),gn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(To,gn),gn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=g!==null?g.baseLanes:a,We(To,gn),gn|=h}else g!==null?(h=g.baseLanes|a,s.memoizedState=null):h=a,We(To,gn),gn|=h;return Gt(r,s,f,a),s.child}function ag(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function ud(r,s,a,h,f){var g=tn(a)?us:Ft.current;return g=ho(s,g),_o(s,f),a=Zh(r,s,a,h,g,f),h=ed(),r!==null&&!nn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,Fr(r,s,f)):(Xe&&h&&Vh(s),s.flags|=1,Gt(r,s,a,f),s.child)}function lg(r,s,a,h,f){if(tn(a)){var g=!0;du(s)}else g=!1;if(_o(s,f),s.stateNode===null)xu(r,s),Ym(s,a,h),od(s,a,h,f),h=!0;else if(r===null){var w=s.stateNode,C=s.memoizedProps;w.props=C;var D=w.context,q=a.contextType;typeof q=="object"&&q!==null?q=Cn(q):(q=tn(a)?us:Ft.current,q=ho(s,q));var Z=a.getDerivedStateFromProps,ee=typeof Z=="function"||typeof w.getSnapshotBeforeUpdate=="function";ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==h||D!==q)&&Xm(s,w,h,q),fi=!1;var X=s.memoizedState;w.state=X,Eu(s,h,w,f),D=s.memoizedState,C!==h||X!==D||en.current||fi?(typeof Z=="function"&&(sd(s,a,Z,h),D=s.memoizedState),(C=fi||Qm(s,a,C,h,X,D,q))?(ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=D),w.props=h,w.state=D,w.context=q,h=C):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{w=s.stateNode,Sm(r,s),C=s.memoizedProps,q=s.type===s.elementType?C:qn(s.type,C),w.props=q,ee=s.pendingProps,X=w.context,D=a.contextType,typeof D=="object"&&D!==null?D=Cn(D):(D=tn(a)?us:Ft.current,D=ho(s,D));var oe=a.getDerivedStateFromProps;(Z=typeof oe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(C!==ee||X!==D)&&Xm(s,w,h,D),fi=!1,X=s.memoizedState,w.state=X,Eu(s,h,w,f);var de=s.memoizedState;C!==ee||X!==de||en.current||fi?(typeof oe=="function"&&(sd(s,a,oe,h),de=s.memoizedState),(q=fi||Qm(s,a,q,h,X,de,D)||!1)?(Z||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(h,de,D),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(h,de,D)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||C===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=de),w.props=h,w.state=de,w.context=D,h=q):(typeof w.componentDidUpdate!="function"||C===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||C===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),h=!1)}return cd(r,s,a,h,g,f)}function cd(r,s,a,h,f,g){ag(r,s);var w=(s.flags&128)!==0;if(!h&&!w)return f&&fm(s,a,!1),Fr(r,s,g);h=s.stateNode,cT.current=s;var C=w&&typeof a.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,r!==null&&w?(s.child=go(s,r.child,null,g),s.child=go(s,null,C,g)):Gt(r,s,C,g),s.memoizedState=h.state,f&&fm(s,a,!0),s.child}function ug(r){var s=r.stateNode;s.pendingContext?hm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&hm(r,s.context,!1),Kh(r,s.containerInfo)}function cg(r,s,a,h,f){return mo(),Bh(f),s.flags|=256,Gt(r,s,a,h),s.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function dd(r){return{baseLanes:r,cachePool:null,transitions:null}}function hg(r,s,a){var h=s.pendingProps,f=et.current,g=!1,w=(s.flags&128)!==0,C;if((C=w)||(C=r!==null&&r.memoizedState===null?!1:(f&2)!==0),C?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),We(et,f&1),r===null)return Uh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(w=h.children,r=h.fallback,g?(h=s.mode,g=s.child,w={mode:"hidden",children:w},!(h&1)&&g!==null?(g.childLanes=0,g.pendingProps=w):g=ju(w,h,0,null),r=vs(r,h,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=dd(a),s.memoizedState=hd,r):fd(s,w));if(f=r.memoizedState,f!==null&&(C=f.dehydrated,C!==null))return hT(r,s,w,h,C,f,a);if(g){g=h.fallback,w=s.mode,f=r.child,C=f.sibling;var D={mode:"hidden",children:h.children};return!(w&1)&&s.child!==f?(h=s.child,h.childLanes=0,h.pendingProps=D,s.deletions=null):(h=wi(f,D),h.subtreeFlags=f.subtreeFlags&14680064),C!==null?g=wi(C,g):(g=vs(g,w,a,null),g.flags|=2),g.return=s,h.return=s,h.sibling=g,s.child=h,h=g,g=s.child,w=r.child.memoizedState,w=w===null?dd(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=r.childLanes&~a,s.memoizedState=hd,h}return g=r.child,r=g.sibling,h=wi(g,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=a),h.return=s,h.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=h,s.memoizedState=null,h}function fd(r,s){return s=ju({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Pu(r,s,a,h){return h!==null&&Bh(h),go(s,r.child,null,a),r=fd(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function hT(r,s,a,h,f,g,w){if(a)return s.flags&256?(s.flags&=-257,h=ad(Error(t(422))),Pu(r,s,w,h)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=h.fallback,f=s.mode,h=ju({mode:"visible",children:h.children},f,0,null),g=vs(g,f,w,null),g.flags|=2,h.return=s,g.return=s,h.sibling=g,s.child=h,s.mode&1&&go(s,r.child,null,w),s.child.memoizedState=dd(w),s.memoizedState=hd,g);if(!(s.mode&1))return Pu(r,s,w,null);if(f.data==="$!"){if(h=f.nextSibling&&f.nextSibling.dataset,h)var C=h.dgst;return h=C,g=Error(t(419)),h=ad(g,h,void 0),Pu(r,s,w,h)}if(C=(w&r.childLanes)!==0,nn||C){if(h=kt,h!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(h.suspendedLanes|w)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Vr(r,f),Kn(h,r,f,-1))}return Pd(),h=ad(Error(t(421))),Pu(r,s,w,h)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=ST.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,mn=ui(f.nextSibling),pn=s,Xe=!0,$n=null,r!==null&&(Sn[Rn++]=Or,Sn[Rn++]=Lr,Sn[Rn++]=cs,Or=r.id,Lr=r.overflow,cs=s),s=fd(s,h.children),s.flags|=4096,s)}function dg(r,s,a){r.lanes|=s;var h=r.alternate;h!==null&&(h.lanes|=s),qh(r.return,s,a)}function pd(r,s,a,h,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=h,g.tail=a,g.tailMode=f)}function fg(r,s,a){var h=s.pendingProps,f=h.revealOrder,g=h.tail;if(Gt(r,s,h.children,a),h=et.current,h&2)h=h&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&dg(r,a,s);else if(r.tag===19)dg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}h&=1}if(We(et,h),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&Tu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),pd(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Tu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}pd(s,!0,a,null,g);break;case"together":pd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function xu(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Fr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ms|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=wi(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=wi(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function dT(r,s,a){switch(s.tag){case 3:ug(s),mo();break;case 5:Am(s);break;case 1:tn(s.type)&&du(s);break;case 4:Kh(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,f=s.memoizedProps.value;We(_u,h._currentValue),h._currentValue=f;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(et,et.current&1),s.flags|=128,null):a&s.child.childLanes?hg(r,s,a):(We(et,et.current&1),r=Fr(r,s,a),r!==null?r.sibling:null);We(et,et.current&1);break;case 19:if(h=(a&s.childLanes)!==0,r.flags&128){if(h)return fg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(et,et.current),h)break;return null;case 22:case 23:return s.lanes=0,og(r,s,a)}return Fr(r,s,a)}var pg,md,mg,gg;pg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},md=function(){},mg=function(r,s,a,h){var f=r.memoizedProps;if(f!==h){r=s.stateNode,fs(ur.current);var g=null;switch(a){case"input":f=Wi(r,f),h=Wi(r,h),g=[];break;case"select":f=ae({},f,{value:void 0}),h=ae({},h,{value:void 0}),g=[];break;case"textarea":f=ra(r,f),h=ra(r,h),g=[];break;default:typeof f.onClick!="function"&&typeof h.onClick=="function"&&(r.onclick=uu)}ua(a,h);var w;a=null;for(q in f)if(!h.hasOwnProperty(q)&&f.hasOwnProperty(q)&&f[q]!=null)if(q==="style"){var C=f[q];for(w in C)C.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else q!=="dangerouslySetInnerHTML"&&q!=="children"&&q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&q!=="autoFocus"&&(o.hasOwnProperty(q)?g||(g=[]):(g=g||[]).push(q,null));for(q in h){var D=h[q];if(C=f!=null?f[q]:void 0,h.hasOwnProperty(q)&&D!==C&&(D!=null||C!=null))if(q==="style")if(C){for(w in C)!C.hasOwnProperty(w)||D&&D.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in D)D.hasOwnProperty(w)&&C[w]!==D[w]&&(a||(a={}),a[w]=D[w])}else a||(g||(g=[]),g.push(q,a)),a=D;else q==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,C=C?C.__html:void 0,D!=null&&C!==D&&(g=g||[]).push(q,D)):q==="children"?typeof D!="string"&&typeof D!="number"||(g=g||[]).push(q,""+D):q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&(o.hasOwnProperty(q)?(D!=null&&q==="onScroll"&&Ke("scroll",r),g||C===D||(g=[])):(g=g||[]).push(q,D))}a&&(g=g||[]).push("style",a);var q=g;(s.updateQueue=q)&&(s.flags|=4)}},gg=function(r,s,a,h){a!==h&&(s.flags|=4)};function $a(r,s){if(!Xe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var h=null;a!==null;)a.alternate!==null&&(h=a),a=a.sibling;h===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:h.sibling=null}}function Bt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,h=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags&14680064,h|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,h|=f.subtreeFlags,h|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=h,r.childLanes=a,s}function fT(r,s,a){var h=s.pendingProps;switch(Mh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(s),null;case 1:return tn(s.type)&&hu(),Bt(s),null;case 3:return h=s.stateNode,vo(),Ge(en),Ge(Ft),Yh(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(r===null||r.child===null)&&(gu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,$n!==null&&(Cd($n),$n=null))),md(r,s),Bt(s),null;case 5:Gh(s);var f=fs(Fa.current);if(a=s.type,r!==null&&s.stateNode!=null)mg(r,s,a,h,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(t(166));return Bt(s),null}if(r=fs(ur.current),gu(s)){h=s.stateNode,a=s.type;var g=s.memoizedProps;switch(h[lr]=s,h[ba]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",h),Ke("close",h);break;case"iframe":case"object":case"embed":Ke("load",h);break;case"video":case"audio":for(f=0;f<xa.length;f++)Ke(xa[f],h);break;case"source":Ke("error",h);break;case"img":case"image":case"link":Ke("error",h),Ke("load",h);break;case"details":Ke("toggle",h);break;case"input":bs(h,g),Ke("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",h);break;case"textarea":Ls(h,g),Ke("invalid",h)}ua(a,g),f=null;for(var w in g)if(g.hasOwnProperty(w)){var C=g[w];w==="children"?typeof C=="string"?h.textContent!==C&&(g.suppressHydrationWarning!==!0&&lu(h.textContent,C,r),f=["children",C]):typeof C=="number"&&h.textContent!==""+C&&(g.suppressHydrationWarning!==!0&&lu(h.textContent,C,r),f=["children",""+C]):o.hasOwnProperty(w)&&C!=null&&w==="onScroll"&&Ke("scroll",h)}switch(a){case"input":Tr(h),Ol(h,g,!0);break;case"textarea":Tr(h),ia(h);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(h.onclick=uu)}h=f,s.updateQueue=h,h!==null&&(s.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=gt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=w.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof h.is=="string"?r=w.createElement(a,{is:h.is}):(r=w.createElement(a),a==="select"&&(w=r,h.multiple?w.multiple=!0:h.size&&(w.size=h.size))):r=w.createElementNS(r,a),r[lr]=s,r[ba]=h,pg(r,s,!1,!1),s.stateNode=r;e:{switch(w=ca(a,h),a){case"dialog":Ke("cancel",r),Ke("close",r),f=h;break;case"iframe":case"object":case"embed":Ke("load",r),f=h;break;case"video":case"audio":for(f=0;f<xa.length;f++)Ke(xa[f],r);f=h;break;case"source":Ke("error",r),f=h;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),f=h;break;case"details":Ke("toggle",r),f=h;break;case"input":bs(r,h),f=Wi(r,h),Ke("invalid",r);break;case"option":f=h;break;case"select":r._wrapperState={wasMultiple:!!h.multiple},f=ae({},h,{value:void 0}),Ke("invalid",r);break;case"textarea":Ls(r,h),f=ra(r,h),Ke("invalid",r);break;default:f=h}ua(a,f),C=f;for(g in C)if(C.hasOwnProperty(g)){var D=C[g];g==="style"?aa(r,D):g==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&sa(r,D)):g==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&Jr(r,D):typeof D=="number"&&Jr(r,""+D):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?D!=null&&g==="onScroll"&&Ke("scroll",r):D!=null&&G(r,g,D,w))}switch(a){case"input":Tr(r),Ol(r,h,!1);break;case"textarea":Tr(r),ia(r);break;case"option":h.value!=null&&r.setAttribute("value",""+be(h.value));break;case"select":r.multiple=!!h.multiple,g=h.value,g!=null?Sr(r,!!h.multiple,g,!1):h.defaultValue!=null&&Sr(r,!!h.multiple,h.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=uu)}switch(a){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Bt(s),null;case 6:if(r&&s.stateNode!=null)gg(r,s,r.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(t(166));if(a=fs(Fa.current),fs(ur.current),gu(s)){if(h=s.stateNode,a=s.memoizedProps,h[lr]=s,(g=h.nodeValue!==a)&&(r=pn,r!==null))switch(r.tag){case 3:lu(h.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&lu(h.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else h=(a.nodeType===9?a:a.ownerDocument).createTextNode(h),h[lr]=s,s.stateNode=h}return Bt(s),null;case 13:if(Ge(et),h=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Xe&&mn!==null&&s.mode&1&&!(s.flags&128))vm(),mo(),s.flags|=98560,g=!1;else if(g=gu(s),h!==null&&h.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[lr]=s}else mo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Bt(s),g=!1}else $n!==null&&(Cd($n),$n=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(h=h!==null,h!==(r!==null&&r.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(r===null||et.current&1?wt===0&&(wt=3):Pd())),s.updateQueue!==null&&(s.flags|=4),Bt(s),null);case 4:return vo(),md(r,s),r===null&&Na(s.stateNode.containerInfo),Bt(s),null;case 10:return $h(s.type._context),Bt(s),null;case 17:return tn(s.type)&&hu(),Bt(s),null;case 19:if(Ge(et),g=s.memoizedState,g===null)return Bt(s),null;if(h=(s.flags&128)!==0,w=g.rendering,w===null)if(h)$a(g,!1);else{if(wt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(w=Tu(r),w!==null){for(s.flags|=128,$a(g,!1),h=w.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=a,a=s.child;a!==null;)g=a,r=h,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,r=w.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(et,et.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>Io&&(s.flags|=128,h=!0,$a(g,!1),s.lanes=4194304)}else{if(!h)if(r=Tu(w),r!==null){if(s.flags|=128,h=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),$a(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Xe)return Bt(s),null}else 2*He()-g.renderingStartTime>Io&&a!==1073741824&&(s.flags|=128,h=!0,$a(g,!1),s.lanes=4194304);g.isBackwards?(w.sibling=s.child,s.child=w):(a=g.last,a!==null?a.sibling=w:s.child=w,g.last=w)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,a=et.current,We(et,h?a&1|2:a&1),s):(Bt(s),null);case 22:case 23:return kd(),h=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?gn&1073741824&&(Bt(s),s.subtreeFlags&6&&(s.flags|=8192)):Bt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function pT(r,s){switch(Mh(s),s.tag){case 1:return tn(s.type)&&hu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return vo(),Ge(en),Ge(Ft),Yh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Gh(s),null;case 13:if(Ge(et),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));mo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(et),null;case 4:return vo(),null;case 10:return $h(s.type._context),null;case 22:case 23:return kd(),null;case 24:return null;default:return null}}var Nu=!1,zt=!1,mT=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Eo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(h){it(r,s,h)}else a.current=null}function gd(r,s,a){try{a()}catch(h){it(r,s,h)}}var yg=!1;function gT(r,s){if(kh=oi,r=Qp(),wh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var h=a.getSelection&&a.getSelection();if(h&&h.rangeCount!==0){a=h.anchorNode;var f=h.anchorOffset,g=h.focusNode;h=h.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,C=-1,D=-1,q=0,Z=0,ee=r,X=null;t:for(;;){for(var oe;ee!==a||f!==0&&ee.nodeType!==3||(C=w+f),ee!==g||h!==0&&ee.nodeType!==3||(D=w+h),ee.nodeType===3&&(w+=ee.nodeValue.length),(oe=ee.firstChild)!==null;)X=ee,ee=oe;for(;;){if(ee===r)break t;if(X===a&&++q===f&&(C=w),X===g&&++Z===h&&(D=w),(oe=ee.nextSibling)!==null)break;ee=X,X=ee.parentNode}ee=oe}a=C===-1||D===-1?null:{start:C,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ph={focusedElem:r,selectionRange:a},oi=!1,ce=s;ce!==null;)if(s=ce,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ce=r;else for(;ce!==null;){s=ce;try{var de=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(de!==null){var fe=de.memoizedProps,ut=de.memoizedState,z=s.stateNode,L=z.getSnapshotBeforeUpdate(s.elementType===s.type?fe:qn(s.type,fe),ut);z.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var $=s.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){it(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,ce=r;break}ce=s.return}return de=yg,yg=!1,de}function qa(r,s,a){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var f=h=h.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&gd(s,a,g)}f=f.next}while(f!==h)}}function Du(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var h=a.create;a.destroy=h()}a=a.next}while(a!==s)}}function yd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function _g(r){var s=r.alternate;s!==null&&(r.alternate=null,_g(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[lr],delete s[ba],delete s[bh],delete s[JE],delete s[ZE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function vg(r){return r.tag===5||r.tag===3||r.tag===4}function wg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||vg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function _d(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=uu));else if(h!==4&&(r=r.child,r!==null))for(_d(r,s,a),r=r.sibling;r!==null;)_d(r,s,a),r=r.sibling}function vd(r,s,a){var h=r.tag;if(h===5||h===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(h!==4&&(r=r.child,r!==null))for(vd(r,s,a),r=r.sibling;r!==null;)vd(r,s,a),r=r.sibling}var bt=null,Hn=!1;function mi(r,s,a){for(a=a.child;a!==null;)Eg(r,s,a),a=a.sibling}function Eg(r,s,a){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(ts,a)}catch{}switch(a.tag){case 5:zt||Eo(a,s);case 6:var h=bt,f=Hn;bt=null,mi(r,s,a),bt=h,Hn=f,bt!==null&&(Hn?(r=bt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):bt.removeChild(a.stateNode));break;case 18:bt!==null&&(Hn?(r=bt,a=a.stateNode,r.nodeType===8?Dh(r.parentNode,a):r.nodeType===1&&Dh(r,a),Bn(r)):Dh(bt,a.stateNode));break;case 4:h=bt,f=Hn,bt=a.stateNode.containerInfo,Hn=!0,mi(r,s,a),bt=h,Hn=f;break;case 0:case 11:case 14:case 15:if(!zt&&(h=a.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){f=h=h.next;do{var g=f,w=g.destroy;g=g.tag,w!==void 0&&(g&2||g&4)&&gd(a,s,w),f=f.next}while(f!==h)}mi(r,s,a);break;case 1:if(!zt&&(Eo(a,s),h=a.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=a.memoizedProps,h.state=a.memoizedState,h.componentWillUnmount()}catch(C){it(a,s,C)}mi(r,s,a);break;case 21:mi(r,s,a);break;case 22:a.mode&1?(zt=(h=zt)||a.memoizedState!==null,mi(r,s,a),zt=h):mi(r,s,a);break;default:mi(r,s,a)}}function Tg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new mT),s.forEach(function(h){var f=RT.bind(null,r,h);a.has(h)||(a.add(h),h.then(f,f))})}}function Wn(r,s){var a=s.deletions;if(a!==null)for(var h=0;h<a.length;h++){var f=a[h];try{var g=r,w=s,C=w;e:for(;C!==null;){switch(C.tag){case 5:bt=C.stateNode,Hn=!1;break e;case 3:bt=C.stateNode.containerInfo,Hn=!0;break e;case 4:bt=C.stateNode.containerInfo,Hn=!0;break e}C=C.return}if(bt===null)throw Error(t(160));Eg(g,w,f),bt=null,Hn=!1;var D=f.alternate;D!==null&&(D.return=null),f.return=null}catch(q){it(f,s,q)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ig(s,r),s=s.sibling}function Ig(r,s){var a=r.alternate,h=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Wn(s,r),hr(r),h&4){try{qa(3,r,r.return),Du(3,r)}catch(fe){it(r,r.return,fe)}try{qa(5,r,r.return)}catch(fe){it(r,r.return,fe)}}break;case 1:Wn(s,r),hr(r),h&512&&a!==null&&Eo(a,a.return);break;case 5:if(Wn(s,r),hr(r),h&512&&a!==null&&Eo(a,a.return),r.flags&32){var f=r.stateNode;try{Jr(f,"")}catch(fe){it(r,r.return,fe)}}if(h&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,w=a!==null?a.memoizedProps:g,C=r.type,D=r.updateQueue;if(r.updateQueue=null,D!==null)try{C==="input"&&g.type==="radio"&&g.name!=null&&ta(f,g),ca(C,w);var q=ca(C,g);for(w=0;w<D.length;w+=2){var Z=D[w],ee=D[w+1];Z==="style"?aa(f,ee):Z==="dangerouslySetInnerHTML"?sa(f,ee):Z==="children"?Jr(f,ee):G(f,Z,ee,q)}switch(C){case"input":na(f,g);break;case"textarea":Vs(f,g);break;case"select":var X=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?Sr(f,!!g.multiple,oe,!1):X!==!!g.multiple&&(g.defaultValue!=null?Sr(f,!!g.multiple,g.defaultValue,!0):Sr(f,!!g.multiple,g.multiple?[]:"",!1))}f[ba]=g}catch(fe){it(r,r.return,fe)}}break;case 6:if(Wn(s,r),hr(r),h&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(fe){it(r,r.return,fe)}}break;case 3:if(Wn(s,r),hr(r),h&4&&a!==null&&a.memoizedState.isDehydrated)try{Bn(s.containerInfo)}catch(fe){it(r,r.return,fe)}break;case 4:Wn(s,r),hr(r);break;case 13:Wn(s,r),hr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Td=He())),h&4&&Tg(r);break;case 22:if(Z=a!==null&&a.memoizedState!==null,r.mode&1?(zt=(q=zt)||Z,Wn(s,r),zt=q):Wn(s,r),hr(r),h&8192){if(q=r.memoizedState!==null,(r.stateNode.isHidden=q)&&!Z&&r.mode&1)for(ce=r,Z=r.child;Z!==null;){for(ee=ce=Z;ce!==null;){switch(X=ce,oe=X.child,X.tag){case 0:case 11:case 14:case 15:qa(4,X,X.return);break;case 1:Eo(X,X.return);var de=X.stateNode;if(typeof de.componentWillUnmount=="function"){h=X,a=X.return;try{s=h,de.props=s.memoizedProps,de.state=s.memoizedState,de.componentWillUnmount()}catch(fe){it(h,a,fe)}}break;case 5:Eo(X,X.return);break;case 22:if(X.memoizedState!==null){Cg(ee);continue}}oe!==null?(oe.return=X,ce=oe):Cg(ee)}Z=Z.sibling}e:for(Z=null,ee=r;;){if(ee.tag===5){if(Z===null){Z=ee;try{f=ee.stateNode,q?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(C=ee.stateNode,D=ee.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null,C.style.display=oa("display",w))}catch(fe){it(r,r.return,fe)}}}else if(ee.tag===6){if(Z===null)try{ee.stateNode.nodeValue=q?"":ee.memoizedProps}catch(fe){it(r,r.return,fe)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===r)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===r)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===r)break e;Z===ee&&(Z=null),ee=ee.return}Z===ee&&(Z=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:Wn(s,r),hr(r),h&4&&Tg(r);break;case 21:break;default:Wn(s,r),hr(r)}}function hr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(vg(a)){var h=a;break e}a=a.return}throw Error(t(160))}switch(h.tag){case 5:var f=h.stateNode;h.flags&32&&(Jr(f,""),h.flags&=-33);var g=wg(r);vd(r,g,f);break;case 3:case 4:var w=h.stateNode.containerInfo,C=wg(r);_d(r,C,w);break;default:throw Error(t(161))}}catch(D){it(r,r.return,D)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function yT(r,s,a){ce=r,Sg(r)}function Sg(r,s,a){for(var h=(r.mode&1)!==0;ce!==null;){var f=ce,g=f.child;if(f.tag===22&&h){var w=f.memoizedState!==null||Nu;if(!w){var C=f.alternate,D=C!==null&&C.memoizedState!==null||zt;C=Nu;var q=zt;if(Nu=w,(zt=D)&&!q)for(ce=f;ce!==null;)w=ce,D=w.child,w.tag===22&&w.memoizedState!==null?Ag(f):D!==null?(D.return=w,ce=D):Ag(f);for(;g!==null;)ce=g,Sg(g),g=g.sibling;ce=f,Nu=C,zt=q}Rg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,ce=g):Rg(r)}}function Rg(r){for(;ce!==null;){var s=ce;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:zt||Du(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!zt)if(a===null)h.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:qn(s.type,a.memoizedProps);h.componentDidUpdate(f,a.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Cm(s,g,h);break;case 3:var w=s.updateQueue;if(w!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Cm(s,w,a)}break;case 5:var C=s.stateNode;if(a===null&&s.flags&4){a=C;var D=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var q=s.alternate;if(q!==null){var Z=q.memoizedState;if(Z!==null){var ee=Z.dehydrated;ee!==null&&Bn(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||s.flags&512&&yd(s)}catch(X){it(s,s.return,X)}}if(s===r){ce=null;break}if(a=s.sibling,a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Cg(r){for(;ce!==null;){var s=ce;if(s===r){ce=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ce=a;break}ce=s.return}}function Ag(r){for(;ce!==null;){var s=ce;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Du(4,s)}catch(D){it(s,a,D)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var f=s.return;try{h.componentDidMount()}catch(D){it(s,f,D)}}var g=s.return;try{yd(s)}catch(D){it(s,g,D)}break;case 5:var w=s.return;try{yd(s)}catch(D){it(s,w,D)}}}catch(D){it(s,s.return,D)}if(s===r){ce=null;break}var C=s.sibling;if(C!==null){C.return=s.return,ce=C;break}ce=s.return}}var _T=Math.ceil,bu=re.ReactCurrentDispatcher,wd=re.ReactCurrentOwner,kn=re.ReactCurrentBatchConfig,Fe=0,kt=null,dt=null,Ot=0,gn=0,To=ci(0),wt=0,Ha=null,ms=0,Ou=0,Ed=0,Wa=null,rn=null,Td=0,Io=1/0,Ur=null,Lu=!1,Id=null,gi=null,Vu=!1,yi=null,Mu=0,Ka=0,Sd=null,Fu=-1,Uu=0;function Qt(){return Fe&6?He():Fu!==-1?Fu:Fu=He()}function _i(r){return r.mode&1?Fe&2&&Ot!==0?Ot&-Ot:tT.transition!==null?(Uu===0&&(Uu=rs()),Uu):(r=Oe,r!==0||(r=window.event,r=r===void 0?16:Ea(r.type)),r):1}function Kn(r,s,a,h){if(50<Ka)throw Ka=0,Sd=null,Error(t(185));ni(r,a,h),(!(Fe&2)||r!==kt)&&(r===kt&&(!(Fe&2)&&(Ou|=a),wt===4&&vi(r,Ot)),sn(r,h),a===1&&Fe===0&&!(s.mode&1)&&(Io=He()+500,fu&&di()))}function sn(r,s){var a=r.callbackNode;Ar(r,s);var h=ns(r,r===kt?Ot:0);if(h===0)a!==null&&ga(a),r.callbackNode=null,r.callbackPriority=0;else if(s=h&-h,r.callbackPriority!==s){if(a!=null&&ga(a),s===1)r.tag===0?eT(Pg.bind(null,r)):pm(Pg.bind(null,r)),YE(function(){!(Fe&6)&&di()}),a=null;else{switch(ii(h)){case 1:a=es;break;case 4:a=Zr;break;case 16:a=En;break;case 536870912:a=Ul;break;default:a=En}a=Mg(a,kg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function kg(r,s){if(Fu=-1,Uu=0,Fe&6)throw Error(t(327));var a=r.callbackNode;if(So()&&r.callbackNode!==a)return null;var h=ns(r,r===kt?Ot:0);if(h===0)return null;if(h&30||h&r.expiredLanes||s)s=Bu(r,h);else{s=h;var f=Fe;Fe|=2;var g=Ng();(kt!==r||Ot!==s)&&(Ur=null,Io=He()+500,ys(r,s));do try{ET();break}catch(C){xg(r,C)}while(!0);jh(),bu.current=g,Fe=f,dt!==null?s=0:(kt=null,Ot=0,s=wt)}if(s!==0){if(s===2&&(f=hn(r),f!==0&&(h=f,s=Rd(r,f))),s===1)throw a=Ha,ys(r,0),vi(r,h),sn(r,He()),a;if(s===6)vi(r,h);else{if(f=r.current.alternate,!(h&30)&&!vT(f)&&(s=Bu(r,h),s===2&&(g=hn(r),g!==0&&(h=g,s=Rd(r,g))),s===1))throw a=Ha,ys(r,0),vi(r,h),sn(r,He()),a;switch(r.finishedWork=f,r.finishedLanes=h,s){case 0:case 1:throw Error(t(345));case 2:_s(r,rn,Ur);break;case 3:if(vi(r,h),(h&130023424)===h&&(s=Td+500-He(),10<s)){if(ns(r,0)!==0)break;if(f=r.suspendedLanes,(f&h)!==h){Qt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Nh(_s.bind(null,r,rn,Ur),s);break}_s(r,rn,Ur);break;case 4:if(vi(r,h),(h&4194240)===h)break;for(s=r.eventTimes,f=-1;0<h;){var w=31-Wt(h);g=1<<w,w=s[w],w>f&&(f=w),h&=~g}if(h=f,h=He()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*_T(h/1960))-h,10<h){r.timeoutHandle=Nh(_s.bind(null,r,rn,Ur),h);break}_s(r,rn,Ur);break;case 5:_s(r,rn,Ur);break;default:throw Error(t(329))}}}return sn(r,He()),r.callbackNode===a?kg.bind(null,r):null}function Rd(r,s){var a=Wa;return r.current.memoizedState.isDehydrated&&(ys(r,s).flags|=256),r=Bu(r,s),r!==2&&(s=rn,rn=a,s!==null&&Cd(s)),r}function Cd(r){rn===null?rn=r:rn.push.apply(rn,r)}function vT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var h=0;h<a.length;h++){var f=a[h],g=f.getSnapshot;f=f.value;try{if(!jn(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function vi(r,s){for(s&=~Ed,s&=~Ou,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Wt(s),h=1<<a;r[a]=-1,s&=~h}}function Pg(r){if(Fe&6)throw Error(t(327));So();var s=ns(r,0);if(!(s&1))return sn(r,He()),null;var a=Bu(r,s);if(r.tag!==0&&a===2){var h=hn(r);h!==0&&(s=h,a=Rd(r,h))}if(a===1)throw a=Ha,ys(r,0),vi(r,s),sn(r,He()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,_s(r,rn,Ur),sn(r,He()),null}function Ad(r,s){var a=Fe;Fe|=1;try{return r(s)}finally{Fe=a,Fe===0&&(Io=He()+500,fu&&di())}}function gs(r){yi!==null&&yi.tag===0&&!(Fe&6)&&So();var s=Fe;Fe|=1;var a=kn.transition,h=Oe;try{if(kn.transition=null,Oe=1,r)return r()}finally{Oe=h,kn.transition=a,Fe=s,!(Fe&6)&&di()}}function kd(){gn=To.current,Ge(To)}function ys(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,QE(a)),dt!==null)for(a=dt.return;a!==null;){var h=a;switch(Mh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&hu();break;case 3:vo(),Ge(en),Ge(Ft),Yh();break;case 5:Gh(h);break;case 4:vo();break;case 13:Ge(et);break;case 19:Ge(et);break;case 10:$h(h.type._context);break;case 22:case 23:kd()}a=a.return}if(kt=r,dt=r=wi(r.current,null),Ot=gn=s,wt=0,Ha=null,Ed=Ou=ms=0,rn=Wa=null,ds!==null){for(s=0;s<ds.length;s++)if(a=ds[s],h=a.interleaved,h!==null){a.interleaved=null;var f=h.next,g=a.pending;if(g!==null){var w=g.next;g.next=f,h.next=w}a.pending=h}ds=null}return r}function xg(r,s){do{var a=dt;try{if(jh(),Iu.current=Au,Su){for(var h=tt.memoizedState;h!==null;){var f=h.queue;f!==null&&(f.pending=null),h=h.next}Su=!1}if(ps=0,At=vt=tt=null,Ua=!1,Ba=0,wd.current=null,a===null||a.return===null){wt=1,Ha=s,dt=null;break}e:{var g=r,w=a.return,C=a,D=s;if(s=Ot,C.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var q=D,Z=C,ee=Z.tag;if(!(Z.mode&1)&&(ee===0||ee===11||ee===15)){var X=Z.alternate;X?(Z.updateQueue=X.updateQueue,Z.memoizedState=X.memoizedState,Z.lanes=X.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var oe=tg(w);if(oe!==null){oe.flags&=-257,ng(oe,w,C,g,s),oe.mode&1&&eg(g,q,s),s=oe,D=q;var de=s.updateQueue;if(de===null){var fe=new Set;fe.add(D),s.updateQueue=fe}else de.add(D);break e}else{if(!(s&1)){eg(g,q,s),Pd();break e}D=Error(t(426))}}else if(Xe&&C.mode&1){var ut=tg(w);if(ut!==null){!(ut.flags&65536)&&(ut.flags|=256),ng(ut,w,C,g,s),Bh(wo(D,C));break e}}g=D=wo(D,C),wt!==4&&(wt=2),Wa===null?Wa=[g]:Wa.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var z=Jm(g,D,s);Rm(g,z);break e;case 1:C=D;var L=g.type,$=g.stateNode;if(!(g.flags&128)&&(typeof L.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(gi===null||!gi.has($)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=Zm(g,C,s);Rm(g,te);break e}}g=g.return}while(g!==null)}bg(a)}catch(pe){s=pe,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function Ng(){var r=bu.current;return bu.current=Au,r===null?Au:r}function Pd(){(wt===0||wt===3||wt===2)&&(wt=4),kt===null||!(ms&268435455)&&!(Ou&268435455)||vi(kt,Ot)}function Bu(r,s){var a=Fe;Fe|=2;var h=Ng();(kt!==r||Ot!==s)&&(Ur=null,ys(r,s));do try{wT();break}catch(f){xg(r,f)}while(!0);if(jh(),Fe=a,bu.current=h,dt!==null)throw Error(t(261));return kt=null,Ot=0,wt}function wT(){for(;dt!==null;)Dg(dt)}function ET(){for(;dt!==null&&!Ml();)Dg(dt)}function Dg(r){var s=Vg(r.alternate,r,gn);r.memoizedProps=r.pendingProps,s===null?bg(r):dt=s,wd.current=null}function bg(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=pT(a,s),a!==null){a.flags&=32767,dt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{wt=6,dt=null;return}}else if(a=fT(a,s,gn),a!==null){dt=a;return}if(s=s.sibling,s!==null){dt=s;return}dt=s=r}while(s!==null);wt===0&&(wt=5)}function _s(r,s,a){var h=Oe,f=kn.transition;try{kn.transition=null,Oe=1,TT(r,s,a,h)}finally{kn.transition=f,Oe=h}return null}function TT(r,s,a,h){do So();while(yi!==null);if(Fe&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(qe(r,g),r===kt&&(dt=kt=null,Ot=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Vu||(Vu=!0,Mg(En,function(){return So(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=kn.transition,kn.transition=null;var w=Oe;Oe=1;var C=Fe;Fe|=4,wd.current=null,gT(r,a),Ig(a,r),jE(Ph),oi=!!kh,Ph=kh=null,r.current=a,yT(a),dh(),Fe=C,Oe=w,kn.transition=g}else r.current=a;if(Vu&&(Vu=!1,yi=r,Mu=f),g=r.pendingLanes,g===0&&(gi=null),Bl(a.stateNode),sn(r,He()),s!==null)for(h=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],h(f.value,{componentStack:f.stack,digest:f.digest});if(Lu)throw Lu=!1,r=Id,Id=null,r;return Mu&1&&r.tag!==0&&So(),g=r.pendingLanes,g&1?r===Sd?Ka++:(Ka=0,Sd=r):Ka=0,di(),null}function So(){if(yi!==null){var r=ii(Mu),s=kn.transition,a=Oe;try{if(kn.transition=null,Oe=16>r?16:r,yi===null)var h=!1;else{if(r=yi,yi=null,Mu=0,Fe&6)throw Error(t(331));var f=Fe;for(Fe|=4,ce=r.current;ce!==null;){var g=ce,w=g.child;if(ce.flags&16){var C=g.deletions;if(C!==null){for(var D=0;D<C.length;D++){var q=C[D];for(ce=q;ce!==null;){var Z=ce;switch(Z.tag){case 0:case 11:case 15:qa(8,Z,g)}var ee=Z.child;if(ee!==null)ee.return=Z,ce=ee;else for(;ce!==null;){Z=ce;var X=Z.sibling,oe=Z.return;if(_g(Z),Z===q){ce=null;break}if(X!==null){X.return=oe,ce=X;break}ce=oe}}}var de=g.alternate;if(de!==null){var fe=de.child;if(fe!==null){de.child=null;do{var ut=fe.sibling;fe.sibling=null,fe=ut}while(fe!==null)}}ce=g}}if(g.subtreeFlags&2064&&w!==null)w.return=g,ce=w;else e:for(;ce!==null;){if(g=ce,g.flags&2048)switch(g.tag){case 0:case 11:case 15:qa(9,g,g.return)}var z=g.sibling;if(z!==null){z.return=g.return,ce=z;break e}ce=g.return}}var L=r.current;for(ce=L;ce!==null;){w=ce;var $=w.child;if(w.subtreeFlags&2064&&$!==null)$.return=w,ce=$;else e:for(w=L;ce!==null;){if(C=ce,C.flags&2048)try{switch(C.tag){case 0:case 11:case 15:Du(9,C)}}catch(pe){it(C,C.return,pe)}if(C===w){ce=null;break e}var te=C.sibling;if(te!==null){te.return=C.return,ce=te;break e}ce=C.return}}if(Fe=f,di(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(ts,r)}catch{}h=!0}return h}finally{Oe=a,kn.transition=s}}return!1}function Og(r,s,a){s=wo(a,s),s=Jm(r,s,1),r=pi(r,s,1),s=Qt(),r!==null&&(ni(r,1,s),sn(r,s))}function it(r,s,a){if(r.tag===3)Og(r,r,a);else for(;s!==null;){if(s.tag===3){Og(s,r,a);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(gi===null||!gi.has(h))){r=wo(a,r),r=Zm(s,r,1),s=pi(s,r,1),r=Qt(),s!==null&&(ni(s,1,r),sn(s,r));break}}s=s.return}}function IT(r,s,a){var h=r.pingCache;h!==null&&h.delete(s),s=Qt(),r.pingedLanes|=r.suspendedLanes&a,kt===r&&(Ot&a)===a&&(wt===4||wt===3&&(Ot&130023424)===Ot&&500>He()-Td?ys(r,0):Ed|=a),sn(r,s)}function Lg(r,s){s===0&&(r.mode&1?(s=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):s=1);var a=Qt();r=Vr(r,s),r!==null&&(ni(r,s,a),sn(r,a))}function ST(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Lg(r,a)}function RT(r,s){var a=0;switch(r.tag){case 13:var h=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:h=r.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(s),Lg(r,a)}var Vg;Vg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||en.current)nn=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return nn=!1,dT(r,s,a);nn=!!(r.flags&131072)}else nn=!1,Xe&&s.flags&1048576&&mm(s,mu,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;xu(r,s),r=s.pendingProps;var f=ho(s,Ft.current);_o(s,a),f=Zh(null,s,h,r,f,a);var g=ed();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,tn(h)?(g=!0,du(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Wh(s),f.updater=ku,s.stateNode=f,f._reactInternals=s,od(s,h,r,a),s=cd(null,s,h,!0,g,a)):(s.tag=0,Xe&&g&&Vh(s),Gt(null,s,f,a),s=s.child),s;case 16:h=s.elementType;e:{switch(xu(r,s),r=s.pendingProps,f=h._init,h=f(h._payload),s.type=h,f=s.tag=AT(h),r=qn(h,r),f){case 0:s=ud(null,s,h,r,a);break e;case 1:s=lg(null,s,h,r,a);break e;case 11:s=rg(null,s,h,r,a);break e;case 14:s=ig(null,s,h,qn(h.type,r),a);break e}throw Error(t(306,h,""))}return s;case 0:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:qn(h,f),ud(r,s,h,f,a);case 1:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:qn(h,f),lg(r,s,h,f,a);case 3:e:{if(ug(s),r===null)throw Error(t(387));h=s.pendingProps,g=s.memoizedState,f=g.element,Sm(r,s),Eu(s,h,null,a);var w=s.memoizedState;if(h=w.element,g.isDehydrated)if(g={element:h,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=wo(Error(t(423)),s),s=cg(r,s,h,a,f);break e}else if(h!==f){f=wo(Error(t(424)),s),s=cg(r,s,h,a,f);break e}else for(mn=ui(s.stateNode.containerInfo.firstChild),pn=s,Xe=!0,$n=null,a=Tm(s,null,h,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(mo(),h===f){s=Fr(r,s,a);break e}Gt(r,s,h,a)}s=s.child}return s;case 5:return Am(s),r===null&&Uh(s),h=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,w=f.children,xh(h,f)?w=null:g!==null&&xh(h,g)&&(s.flags|=32),ag(r,s),Gt(r,s,w,a),s.child;case 6:return r===null&&Uh(s),null;case 13:return hg(r,s,a);case 4:return Kh(s,s.stateNode.containerInfo),h=s.pendingProps,r===null?s.child=go(s,null,h,a):Gt(r,s,h,a),s.child;case 11:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:qn(h,f),rg(r,s,h,f,a);case 7:return Gt(r,s,s.pendingProps,a),s.child;case 8:return Gt(r,s,s.pendingProps.children,a),s.child;case 12:return Gt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(h=s.type._context,f=s.pendingProps,g=s.memoizedProps,w=f.value,We(_u,h._currentValue),h._currentValue=w,g!==null)if(jn(g.value,w)){if(g.children===f.children&&!en.current){s=Fr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var C=g.dependencies;if(C!==null){w=g.child;for(var D=C.firstContext;D!==null;){if(D.context===h){if(g.tag===1){D=Mr(-1,a&-a),D.tag=2;var q=g.updateQueue;if(q!==null){q=q.shared;var Z=q.pending;Z===null?D.next=D:(D.next=Z.next,Z.next=D),q.pending=D}}g.lanes|=a,D=g.alternate,D!==null&&(D.lanes|=a),qh(g.return,a,s),C.lanes|=a;break}D=D.next}}else if(g.tag===10)w=g.type===s.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,C=w.alternate,C!==null&&(C.lanes|=a),qh(w,a,s),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===s){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}Gt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,h=s.pendingProps.children,_o(s,a),f=Cn(f),h=h(f),s.flags|=1,Gt(r,s,h,a),s.child;case 14:return h=s.type,f=qn(h,s.pendingProps),f=qn(h.type,f),ig(r,s,h,f,a);case 15:return sg(r,s,s.type,s.pendingProps,a);case 17:return h=s.type,f=s.pendingProps,f=s.elementType===h?f:qn(h,f),xu(r,s),s.tag=1,tn(h)?(r=!0,du(s)):r=!1,_o(s,a),Ym(s,h,f),od(s,h,f,a),cd(null,s,h,!0,r,a);case 19:return fg(r,s,a);case 22:return og(r,s,a)}throw Error(t(156,s.tag))};function Mg(r,s){return qs(r,s)}function CT(r,s,a,h){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(r,s,a,h){return new CT(r,s,a,h)}function xd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function AT(r){if(typeof r=="function")return xd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===M)return 11;if(r===St)return 14}return 2}function wi(r,s){var a=r.alternate;return a===null?(a=Pn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function zu(r,s,a,h,f,g){var w=2;if(h=r,typeof r=="function")xd(r)&&(w=1);else if(typeof r=="string")w=5;else e:switch(r){case P:return vs(a.children,f,g,s);case S:w=8,f|=8;break;case R:return r=Pn(12,a,s,f|2),r.elementType=R,r.lanes=g,r;case k:return r=Pn(13,a,s,f),r.elementType=k,r.lanes=g,r;case Ze:return r=Pn(19,a,s,f),r.elementType=Ze,r.lanes=g,r;case Be:return ju(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case A:w=10;break e;case N:w=9;break e;case M:w=11;break e;case St:w=14;break e;case mt:w=16,h=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Pn(w,a,s,f),s.elementType=r,s.type=h,s.lanes=g,s}function vs(r,s,a,h){return r=Pn(7,r,h,s),r.lanes=a,r}function ju(r,s,a,h){return r=Pn(22,r,h,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function Nd(r,s,a){return r=Pn(6,r,null,s),r.lanes=a,r}function Dd(r,s,a){return s=Pn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function kT(r,s,a,h,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=h,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function bd(r,s,a,h,f,g,w,C,D){return r=new kT(r,s,a,C,D),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Pn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:h,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wh(g),r}function PT(r,s,a){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:h==null?null:""+h,children:r,containerInfo:s,implementation:a}}function Fg(r){if(!r)return hi;r=r._reactInternals;e:{if(Ln(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(tn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(tn(a))return dm(r,a,s)}return s}function Ug(r,s,a,h,f,g,w,C,D){return r=bd(a,h,!0,r,f,g,w,C,D),r.context=Fg(null),a=r.current,h=Qt(),f=_i(a),g=Mr(h,f),g.callback=s??null,pi(a,g,f),r.current.lanes=f,ni(r,f,h),sn(r,h),r}function $u(r,s,a,h){var f=s.current,g=Qt(),w=_i(f);return a=Fg(a),s.context===null?s.context=a:s.pendingContext=a,s=Mr(g,w),s.payload={element:r},h=h===void 0?null:h,h!==null&&(s.callback=h),r=pi(f,s,w),r!==null&&(Kn(r,f,w,g),wu(r,f,w)),w}function qu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Bg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Od(r,s){Bg(r,s),(r=r.alternate)&&Bg(r,s)}var zg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ld(r){this._internalRoot=r}Hu.prototype.render=Ld.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));$u(r,s,null,null)},Hu.prototype.unmount=Ld.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;gs(function(){$u(null,r,null,null)}),s[Dr]=null}};function Hu(r){this._internalRoot=r}Hu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Hl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<ir.length&&s!==0&&s<ir[a].priority;a++);ir.splice(a,0,r),a===0&&Gl(r)}};function Vd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Wu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function jg(){}function xT(r,s,a,h,f){if(f){if(typeof h=="function"){var g=h;h=function(){var q=qu(w);g.call(q)}}var w=Ug(s,h,r,0,null,!1,!1,"",jg);return r._reactRootContainer=w,r[Dr]=w.current,Na(r.nodeType===8?r.parentNode:r),gs(),w}for(;f=r.lastChild;)r.removeChild(f);if(typeof h=="function"){var C=h;h=function(){var q=qu(D);C.call(q)}}var D=bd(r,0,!1,null,null,!1,!1,"",jg);return r._reactRootContainer=D,r[Dr]=D.current,Na(r.nodeType===8?r.parentNode:r),gs(function(){$u(s,D,a,h)}),D}function Ku(r,s,a,h,f){var g=a._reactRootContainer;if(g){var w=g;if(typeof f=="function"){var C=f;f=function(){var D=qu(w);C.call(D)}}$u(s,w,r,f)}else w=xT(a,s,r,f,h);return qu(w)}$l=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=ei(s.pendingLanes);a!==0&&(ri(s,a|1),sn(s,He()),!(Fe&6)&&(Io=He()+500,di()))}break;case 13:gs(function(){var h=Vr(r,1);if(h!==null){var f=Qt();Kn(h,r,1,f)}}),Od(r,1)}},Ks=function(r){if(r.tag===13){var s=Vr(r,134217728);if(s!==null){var a=Qt();Kn(s,r,134217728,a)}Od(r,134217728)}},ql=function(r){if(r.tag===13){var s=_i(r),a=Vr(r,s);if(a!==null){var h=Qt();Kn(a,r,s,h)}Od(r,s)}},Hl=function(){return Oe},Wl=function(r,s){var a=Oe;try{return Oe=r,s()}finally{Oe=a}},Fs=function(r,s,a){switch(s){case"input":if(na(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var h=a[s];if(h!==r&&h.form===r.form){var f=cu(h);if(!f)throw Error(t(90));Ds(h),na(h,f)}}}break;case"textarea":Vs(r,a);break;case"select":s=a.value,s!=null&&Sr(r,!!a.multiple,s,!1)}},Yi=Ad,da=gs;var NT={usingClientEntryPoint:!1,Events:[Oa,uo,cu,nr,ha,Ad]},Ga={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},DT={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:re.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ma(r),r===null?null:r.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gu.isDisabled&&Gu.supportsFiber)try{ts=Gu.inject(DT),cn=Gu}catch{}}return on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NT,on.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(s))throw Error(t(200));return PT(r,s,null,a)},on.createRoot=function(r,s){if(!Vd(r))throw Error(t(299));var a=!1,h="",f=zg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=bd(r,1,!1,null,null,a,!1,h,f),r[Dr]=s.current,Na(r.nodeType===8?r.parentNode:r),new Ld(s)},on.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ma(s),r=r===null?null:r.stateNode,r},on.flushSync=function(r){return gs(r)},on.hydrate=function(r,s,a){if(!Wu(s))throw Error(t(200));return Ku(null,r,s,!0,a)},on.hydrateRoot=function(r,s,a){if(!Vd(r))throw Error(t(405));var h=a!=null&&a.hydratedSources||null,f=!1,g="",w=zg;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),s=Ug(s,null,r,1,a??null,f,!1,g,w),r[Dr]=s.current,Na(r),h)for(r=0;r<h.length;r++)a=h[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Hu(s)},on.render=function(r,s,a){if(!Wu(s))throw Error(t(200));return Ku(null,r,s,!1,a)},on.unmountComponentAtNode=function(r){if(!Wu(r))throw Error(t(40));return r._reactRootContainer?(gs(function(){Ku(null,null,r,!1,function(){r._reactRootContainer=null,r[Dr]=null})}),!0):!1},on.unstable_batchedUpdates=Ad,on.unstable_renderSubtreeIntoContainer=function(r,s,a,h){if(!Wu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Ku(r,s,a,!1,h)},on.version="18.3.1-next-f1338f8080-20240426",on}var Gg;function FT(){if(Gg)return Fd.exports;Gg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Fd.exports=MT(),Fd.exports}var Qg;function UT(){if(Qg)return Qu;Qg=1;var n=FT();return Qu.createRoot=n.createRoot,Qu.hydrateRoot=n.hydrateRoot,Qu}var BT=UT(),Qa={},Yg;function zT(){if(Yg)return Qa;Yg=1,Object.defineProperty(Qa,"__esModule",{value:!0}),Qa.parse=c,Qa.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const I=function(){};return I.prototype=Object.create(null),I})();function c(I,x){const F=new l,j=I.length;if(j<2)return F;const V=(x==null?void 0:x.decode)||v;let W=0;do{const J=I.indexOf("=",W);if(J===-1)break;const G=I.indexOf(";",W),re=G===-1?j:G;if(J>re){W=I.lastIndexOf(";",J-1)+1;continue}const _e=d(I,W,J),me=p(I,J,_e),P=I.slice(_e,me);if(F[P]===void 0){let S=d(I,J+1,re),R=p(I,re,S);const A=V(I.slice(S,R));F[P]=A}W=re+1}while(W<j);return F}function d(I,x,F){do{const j=I.charCodeAt(x);if(j!==32&&j!==9)return x}while(++x<F);return F}function p(I,x,F){for(;x>F;){const j=I.charCodeAt(--x);if(j!==32&&j!==9)return x+1}return F}function y(I,x,F){const j=(F==null?void 0:F.encode)||encodeURIComponent;if(!n.test(I))throw new TypeError(`argument name is invalid: ${I}`);const V=j(x);if(!e.test(V))throw new TypeError(`argument val is invalid: ${x}`);let W=I+"="+V;if(!F)return W;if(F.maxAge!==void 0){if(!Number.isInteger(F.maxAge))throw new TypeError(`option maxAge is invalid: ${F.maxAge}`);W+="; Max-Age="+F.maxAge}if(F.domain){if(!t.test(F.domain))throw new TypeError(`option domain is invalid: ${F.domain}`);W+="; Domain="+F.domain}if(F.path){if(!i.test(F.path))throw new TypeError(`option path is invalid: ${F.path}`);W+="; Path="+F.path}if(F.expires){if(!T(F.expires)||!Number.isFinite(F.expires.valueOf()))throw new TypeError(`option expires is invalid: ${F.expires}`);W+="; Expires="+F.expires.toUTCString()}if(F.httpOnly&&(W+="; HttpOnly"),F.secure&&(W+="; Secure"),F.partitioned&&(W+="; Partitioned"),F.priority)switch(typeof F.priority=="string"?F.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${F.priority}`)}if(F.sameSite)switch(typeof F.sameSite=="string"?F.sameSite.toLowerCase():F.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${F.sameSite}`)}return W}function v(I){if(I.indexOf("%")===-1)return I;try{return decodeURIComponent(I)}catch{return I}}function T(I){return o.call(I)==="[object Date]"}return Qa}zT();/**
 * react-router v7.1.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Xg="popstate";function jT(n={}){function e(i,o){let{pathname:l,search:c,hash:d}=i.location;return rf("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:hl(o)}return qT(e,t,null,n)}function Je(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Qn(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $T(){return Math.random().toString(36).substring(2,10)}function Jg(n,e){return{usr:n.state,key:n.key,idx:e}}function rf(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?qo(e):e,state:t,key:e&&e.key||i||$T()}}function hl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function qo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function qT(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,c=o.history,d="POP",p=null,y=v();y==null&&(y=0,c.replaceState({...c.state,idx:y},""));function v(){return(c.state||{idx:null}).idx}function T(){d="POP";let V=v(),W=V==null?null:V-y;y=V,p&&p({action:d,location:j.location,delta:W})}function I(V,W){d="PUSH";let J=rf(j.location,V,W);y=v()+1;let G=Jg(J,y),re=j.createHref(J);try{c.pushState(G,"",re)}catch(_e){if(_e instanceof DOMException&&_e.name==="DataCloneError")throw _e;o.location.assign(re)}l&&p&&p({action:d,location:j.location,delta:1})}function x(V,W){d="REPLACE";let J=rf(j.location,V,W);y=v();let G=Jg(J,y),re=j.createHref(J);c.replaceState(G,"",re),l&&p&&p({action:d,location:j.location,delta:0})}function F(V){let W=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof V=="string"?V:hl(V);return J=J.replace(/ $/,"%20"),Je(W,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,W)}let j={get action(){return d},get location(){return n(o,c)},listen(V){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Xg,T),p=V,()=>{o.removeEventListener(Xg,T),p=null}},createHref(V){return e(o,V)},createURL:F,encodeLocation(V){let W=F(V);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:I,replace:x,go(V){return c.go(V)}};return j}function k_(n,e,t="/"){return HT(n,e,t,!1)}function HT(n,e,t,i){let o=typeof e=="string"?qo(e):e,l=Oi(o.pathname||"/",t);if(l==null)return null;let c=P_(n);WT(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let y=rI(l);d=tI(c[p],y,i)}return d}function P_(n,e=[],t=[],i=""){let o=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(Je(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=$r([i,p.relativePath]),v=t.concat(p);l.children&&l.children.length>0&&(Je(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),P_(l.children,e,v,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:ZT(y,l.index),routesMeta:v})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,c);else for(let p of x_(l.path))o(l,c,p)}),e}function x_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let c=x_(i.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function WT(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:eI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var KT=/^:[\w-]+$/,GT=3,QT=2,YT=1,XT=10,JT=-2,Zg=n=>n==="*";function ZT(n,e){let t=n.split("/"),i=t.length;return t.some(Zg)&&(i+=JT),e&&(i+=QT),t.filter(o=>!Zg(o)).reduce((o,l)=>o+(KT.test(l)?GT:l===""?YT:XT),i)}function eI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function tI(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",c=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",T=yc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},v),I=p.route;if(!T&&y&&t&&!i[i.length-1].route.index&&(T=yc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!T)return null;Object.assign(o,T.params),c.push({params:o,pathname:$r([l,T.pathname]),pathnameBase:aI($r([l,T.pathnameBase])),route:I}),T.pathnameBase!=="/"&&(l=$r([l,T.pathnameBase]))}return c}function yc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=nI(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:v,isOptional:T},I)=>{if(v==="*"){let F=d[I]||"";c=l.slice(0,l.length-F.length).replace(/(.)\/+$/,"$1")}const x=d[I];return T&&!x?y[v]=void 0:y[v]=(x||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:c,pattern:n}}function nI(n,e=!1,t=!0){Qn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function rI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Qn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Oi(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function iI(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?qo(n):n;return{pathname:t?t.startsWith("/")?t:sI(t,e):e,search:lI(i),hash:uI(o)}}function sI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function zd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function oI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function bf(n){let e=oI(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Of(n,e,t,i=!1){let o;typeof n=="string"?o=qo(n):(o={...n},Je(!o.pathname||!o.pathname.includes("?"),zd("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),zd("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),zd("#","search","hash",o)));let l=n===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let I=c.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}d=T>=0?e[T]:"/"}let p=iI(o,d),y=c&&c!=="/"&&c.endsWith("/"),v=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||v)&&(p.pathname+="/"),p}var $r=n=>n.join("/").replace(/\/\/+/g,"/"),aI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),lI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,uI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function cI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var N_=["POST","PUT","PATCH","DELETE"];new Set(N_);var hI=["GET",...N_];new Set(hI);var Ho=U.createContext(null);Ho.displayName="DataRouter";var Mc=U.createContext(null);Mc.displayName="DataRouterState";var D_=U.createContext({isTransitioning:!1});D_.displayName="ViewTransition";var dI=U.createContext(new Map);dI.displayName="Fetchers";var fI=U.createContext(null);fI.displayName="Await";var Zn=U.createContext(null);Zn.displayName="Navigation";var wl=U.createContext(null);wl.displayName="Location";var Dn=U.createContext({outlet:null,matches:[],isDataRoute:!1});Dn.displayName="Route";var Lf=U.createContext(null);Lf.displayName="RouteError";function pI(n,{relative:e}={}){Je(Wo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=U.useContext(Zn),{hash:o,pathname:l,search:c}=El(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:$r([t,l])),i.createHref({pathname:d,search:c,hash:o})}function Wo(){return U.useContext(wl)!=null}function zi(){return Je(Wo(),"useLocation() may be used only in the context of a <Router> component."),U.useContext(wl).location}var b_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function O_(n){U.useContext(Zn).static||U.useLayoutEffect(n)}function vn(){let{isDataRoute:n}=U.useContext(Dn);return n?xI():mI()}function mI(){Je(Wo(),"useNavigate() may be used only in the context of a <Router> component.");let n=U.useContext(Ho),{basename:e,navigator:t}=U.useContext(Zn),{matches:i}=U.useContext(Dn),{pathname:o}=zi(),l=JSON.stringify(bf(i)),c=U.useRef(!1);return O_(()=>{c.current=!0}),U.useCallback((p,y={})=>{if(Qn(c.current,b_),!c.current)return;if(typeof p=="number"){t.go(p);return}let v=Of(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:$r([e,v.pathname])),(y.replace?t.replace:t.push)(v,y.state,y)},[e,t,l,o,n])}var gI=U.createContext(null);function yI(n){let e=U.useContext(Dn).outlet;return e&&U.createElement(gI.Provider,{value:n},e)}function _I(){let{matches:n}=U.useContext(Dn),e=n[n.length-1];return e?e.params:{}}function El(n,{relative:e}={}){let{matches:t}=U.useContext(Dn),{pathname:i}=zi(),o=JSON.stringify(bf(t));return U.useMemo(()=>Of(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function vI(n,e){return L_(n,e)}function L_(n,e,t,i){var J;Je(Wo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o,static:l}=U.useContext(Zn),{matches:c}=U.useContext(Dn),d=c[c.length-1],p=d?d.params:{},y=d?d.pathname:"/",v=d?d.pathnameBase:"/",T=d&&d.route;{let G=T&&T.path||"";V_(y,!T||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let I=zi(),x;if(e){let G=typeof e=="string"?qo(e):e;Je(v==="/"||((J=G.pathname)==null?void 0:J.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${G.pathname}" was given in the \`location\` prop.`),x=G}else x=I;let F=x.pathname||"/",j=F;if(v!=="/"){let G=v.replace(/^\//,"").split("/");j="/"+F.replace(/^\//,"").split("/").slice(G.length).join("/")}let V=!l&&t&&t.matches&&t.matches.length>0?t.matches:k_(n,{pathname:j});Qn(T||V!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Qn(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let W=SI(V&&V.map(G=>Object.assign({},G,{params:Object.assign({},p,G.params),pathname:$r([v,o.encodeLocation?o.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?v:$r([v,o.encodeLocation?o.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),c,t,i);return e&&W?U.createElement(wl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},W):W}function wI(){let n=PI(),e=cI(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=U.createElement(U.Fragment,null,U.createElement("p",null,"💿 Hey developer 👋"),U.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",U.createElement("code",{style:l},"ErrorBoundary")," or"," ",U.createElement("code",{style:l},"errorElement")," prop on your route.")),U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),t?U.createElement("pre",{style:o},t):null,c)}var EI=U.createElement(wI,null),TI=class extends U.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?U.createElement(Dn.Provider,{value:this.props.routeContext},U.createElement(Lf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function II({routeContext:n,match:e,children:t}){let i=U.useContext(Ho);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),U.createElement(Dn.Provider,{value:n},t)}function SI(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Je(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:v,errors:T}=t,I=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||I){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,v)=>{let T,I=!1,x=null,F=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,x=y.route.errorElement||EI,c&&(d<0&&v===0?(V_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),I=!0,F=null):d===v&&(I=!0,F=y.route.hydrateFallbackElement||null)));let j=e.concat(o.slice(0,v+1)),V=()=>{let W;return T?W=x:I?W=F:y.route.Component?W=U.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=p,U.createElement(II,{match:y,routeContext:{outlet:p,matches:j,isDataRoute:t!=null},children:W})};return t&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?U.createElement(TI,{location:t.location,revalidation:t.revalidation,component:x,error:T,children:V(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):V()},null)}function Vf(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function RI(n){let e=U.useContext(Ho);return Je(e,Vf(n)),e}function CI(n){let e=U.useContext(Mc);return Je(e,Vf(n)),e}function AI(n){let e=U.useContext(Dn);return Je(e,Vf(n)),e}function Mf(n){let e=AI(n),t=e.matches[e.matches.length-1];return Je(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function kI(){return Mf("useRouteId")}function PI(){var i;let n=U.useContext(Lf),e=CI("useRouteError"),t=Mf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function xI(){let{router:n}=RI("useNavigate"),e=Mf("useNavigate"),t=U.useRef(!1);return O_(()=>{t.current=!0}),U.useCallback(async(o,l={})=>{Qn(t.current,b_),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var ey={};function V_(n,e,t){!e&&!ey[n]&&(ey[n]=!0,Qn(!1,t))}U.memo(NI);function NI({routes:n,future:e,state:t}){return L_(n,void 0,t,e)}function M_({to:n,replace:e,state:t,relative:i}){Je(Wo(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=U.useContext(Zn);Qn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=U.useContext(Dn),{pathname:c}=zi(),d=vn(),p=Of(n,bf(l),c,i==="path"),y=JSON.stringify(p);return U.useEffect(()=>{d(JSON.parse(y),{replace:e,state:t,relative:i})},[d,y,i,e,t]),null}function F_(n){return yI(n.context)}function xn(n){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function DI({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Je(!Wo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=U.useMemo(()=>({basename:c,navigator:o,static:l,future:{}}),[c,o,l]);typeof t=="string"&&(t=qo(t));let{pathname:p="/",search:y="",hash:v="",state:T=null,key:I="default"}=t,x=U.useMemo(()=>{let F=Oi(p,c);return F==null?null:{location:{pathname:F,search:y,hash:v,state:T,key:I},navigationType:i}},[c,p,y,v,T,I,i]);return Qn(x!=null,`<Router basename="${c}"> is not able to match the URL "${p}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:U.createElement(Zn.Provider,{value:d},U.createElement(wl.Provider,{children:e,value:x}))}function bI({children:n,location:e}){return vI(sf(n),e)}function sf(n,e=[]){let t=[];return U.Children.forEach(n,(i,o)=>{if(!U.isValidElement(i))return;let l=[...e,o];if(i.type===U.Fragment){t.push.apply(t,sf(i.props.children,l));return}Je(i.type===xn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=sf(i.props.children,l)),t.push(c)}),t}var sc="get",oc="application/x-www-form-urlencoded";function Fc(n){return n!=null&&typeof n.tagName=="string"}function OI(n){return Fc(n)&&n.tagName.toLowerCase()==="button"}function LI(n){return Fc(n)&&n.tagName.toLowerCase()==="form"}function VI(n){return Fc(n)&&n.tagName.toLowerCase()==="input"}function MI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function FI(n,e){return n.button===0&&(!e||e==="_self")&&!MI(n)}var Yu=null;function UI(){if(Yu===null)try{new FormData(document.createElement("form"),0),Yu=!1}catch{Yu=!0}return Yu}var BI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jd(n){return n!=null&&!BI.has(n)?(Qn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oc}"`),null):n}function zI(n,e){let t,i,o,l,c;if(LI(n)){let d=n.getAttribute("action");i=d?Oi(d,e):null,t=n.getAttribute("method")||sc,o=jd(n.getAttribute("enctype"))||oc,l=new FormData(n)}else if(OI(n)||VI(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Oi(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||sc,o=jd(n.getAttribute("formenctype"))||jd(d.getAttribute("enctype"))||oc,l=new FormData(d,n),!UI()){let{name:y,type:v,value:T}=n;if(v==="image"){let I=y?`${y}.`:"";l.append(`${I}x`,"0"),l.append(`${I}y`,"0")}else y&&l.append(y,T)}}else{if(Fc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=sc,i=null,o=oc,c=n}return l&&o==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:c}}function Ff(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function jI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function $I(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function qI(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await jI(l,t);return c.links?c.links():[]}return[]}));return GI(i.flat(1).filter($I).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ty(n,e,t,i,o,l){let c=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var v;return t[y].pathname!==p.pathname||((v=t[y].route.path)==null?void 0:v.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>c(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var T;let v=i.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let I=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof I=="boolean")return I}return!0}):[]}function HI(n,e){return WI(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function WI(n){return[...new Set(n)]}function KI(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function GI(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(KI(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function QI(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function YI(){let n=U.useContext(Ho);return Ff(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function XI(){let n=U.useContext(Mc);return Ff(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Uf=U.createContext(void 0);Uf.displayName="FrameworkContext";function U_(){let n=U.useContext(Uf);return Ff(n,"You must render this element inside a <HydratedRouter> element"),n}function JI(n,e){let t=U.useContext(Uf),[i,o]=U.useState(!1),[l,c]=U.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:v,onTouchStart:T}=e,I=U.useRef(null);U.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let j=W=>{W.forEach(J=>{c(J.isIntersecting)})},V=new IntersectionObserver(j,{threshold:.5});return I.current&&V.observe(I.current),()=>{V.disconnect()}}},[n]),U.useEffect(()=>{if(i){let j=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(j)}}},[i]);let x=()=>{o(!0)},F=()=>{o(!1),c(!1)};return t?n!=="intent"?[l,I,{}]:[l,I,{onFocus:Ya(d,x),onBlur:Ya(p,F),onMouseEnter:Ya(y,x),onMouseLeave:Ya(v,F),onTouchStart:Ya(T,x)}]:[!1,I,{}]}function Ya(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function ZI({page:n,...e}){let{router:t}=YI(),i=U.useMemo(()=>k_(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?U.createElement(t0,{page:n,matches:i,...e}):null}function e0(n){let{manifest:e,routeModules:t}=U_(),[i,o]=U.useState([]);return U.useEffect(()=>{let l=!1;return qI(n,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[n,e,t]),i}function t0({page:n,matches:e,...t}){let i=zi(),{manifest:o,routeModules:l}=U_(),{loaderData:c,matches:d}=XI(),p=U.useMemo(()=>ty(n,e,d,o,i,"data"),[n,e,d,o,i]),y=U.useMemo(()=>ty(n,e,d,o,i,"assets"),[n,e,d,o,i]),v=U.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let x=new Set,F=!1;if(e.forEach(V=>{var J;let W=o.routes[V.route.id];!W||!W.hasLoader||(!p.some(G=>G.route.id===V.route.id)&&V.route.id in c&&((J=l[V.route.id])!=null&&J.shouldRevalidate)||W.hasClientLoader?F=!0:x.add(V.route.id))}),x.size===0)return[];let j=QI(n);return F&&x.size>0&&j.searchParams.set("_routes",e.filter(V=>x.has(V.route.id)).map(V=>V.route.id).join(",")),[j.pathname+j.search]},[c,i,o,p,e,n,l]),T=U.useMemo(()=>HI(y,o),[y,o]),I=e0(y);return U.createElement(U.Fragment,null,v.map(x=>U.createElement("link",{key:x,rel:"prefetch",as:"fetch",href:x,...t})),T.map(x=>U.createElement("link",{key:x,rel:"modulepreload",href:x,...t})),I.map(({key:x,link:F})=>U.createElement("link",{key:x,...F})))}function n0(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var B_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{B_&&(window.__reactRouterVersion="7.1.4")}catch{}function r0({basename:n,children:e,window:t}){let i=U.useRef();i.current==null&&(i.current=jT({window:t,v5Compat:!0}));let o=i.current,[l,c]=U.useState({action:o.action,location:o.location}),d=U.useCallback(p=>{U.startTransition(()=>c(p))},[c]);return U.useLayoutEffect(()=>o.listen(d),[o,d]),U.createElement(DI,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var z_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Tl=U.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:c,state:d,target:p,to:y,preventScrollReset:v,viewTransition:T,...I},x){let{basename:F}=U.useContext(Zn),j=typeof y=="string"&&z_.test(y),V,W=!1;if(typeof y=="string"&&j&&(V=y,B_))try{let R=new URL(window.location.href),A=y.startsWith("//")?new URL(R.protocol+y):new URL(y),N=Oi(A.pathname,F);A.origin===R.origin&&N!=null?y=N+A.search+A.hash:W=!0}catch{Qn(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=pI(y,{relative:o}),[G,re,_e]=JI(i,I),me=a0(y,{replace:c,state:d,target:p,preventScrollReset:v,relative:o,viewTransition:T});function P(R){e&&e(R),R.defaultPrevented||me(R)}let S=U.createElement("a",{...I,..._e,href:V||J,onClick:W||l?e:P,ref:n0(x,re),target:p,"data-discover":!j&&t==="render"?"true":void 0});return G&&!j?U.createElement(U.Fragment,null,S,U.createElement(ZI,{page:J})):S});Tl.displayName="Link";var i0=U.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:d,children:p,...y},v){let T=El(c,{relative:y.relative}),I=zi(),x=U.useContext(Mc),{navigator:F,basename:j}=U.useContext(Zn),V=x!=null&&d0(T)&&d===!0,W=F.encodeLocation?F.encodeLocation(T).pathname:T.pathname,J=I.pathname,G=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(J=J.toLowerCase(),G=G?G.toLowerCase():null,W=W.toLowerCase()),G&&j&&(G=Oi(G,j)||G);const re=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let _e=J===W||!o&&J.startsWith(W)&&J.charAt(re)==="/",me=G!=null&&(G===W||!o&&G.startsWith(W)&&G.charAt(W.length)==="/"),P={isActive:_e,isPending:me,isTransitioning:V},S=_e?e:void 0,R;typeof i=="function"?R=i(P):R=[i,_e?"active":null,me?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let A=typeof l=="function"?l(P):l;return U.createElement(Tl,{...y,"aria-current":S,className:R,ref:v,style:A,to:c,viewTransition:d},typeof p=="function"?p(P):p)});i0.displayName="NavLink";var s0=U.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:c=sc,action:d,onSubmit:p,relative:y,preventScrollReset:v,viewTransition:T,...I},x)=>{let F=c0(),j=h0(d,{relative:y}),V=c.toLowerCase()==="get"?"get":"post",W=typeof d=="string"&&z_.test(d),J=G=>{if(p&&p(G),G.defaultPrevented)return;G.preventDefault();let re=G.nativeEvent.submitter,_e=(re==null?void 0:re.getAttribute("formmethod"))||c;F(re||G.currentTarget,{fetcherKey:e,method:_e,navigate:t,replace:o,state:l,relative:y,preventScrollReset:v,viewTransition:T})};return U.createElement("form",{ref:x,method:V,action:j,onSubmit:i?p:J,...I,"data-discover":!W&&n==="render"?"true":void 0})});s0.displayName="Form";function o0(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function j_(n){let e=U.useContext(Ho);return Je(e,o0(n)),e}function a0(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:c}={}){let d=vn(),p=zi(),y=El(n,{relative:l});return U.useCallback(v=>{if(FI(v,e)){v.preventDefault();let T=t!==void 0?t:hl(p)===hl(y);d(n,{replace:T,state:i,preventScrollReset:o,relative:l,viewTransition:c})}},[p,d,y,t,i,e,n,o,l,c])}var l0=0,u0=()=>`__${String(++l0)}__`;function c0(){let{router:n}=j_("useSubmit"),{basename:e}=U.useContext(Zn),t=kI();return U.useCallback(async(i,o={})=>{let{action:l,method:c,encType:d,formData:p,body:y}=zI(i,e);if(o.navigate===!1){let v=o.fetcherKey||u0();await n.fetch(v,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||c,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function h0(n,{relative:e}={}){let{basename:t}=U.useContext(Zn),i=U.useContext(Dn);Je(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...El(n||".",{relative:e})},c=zi();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(v=>v==="")){d.delete("index"),p.filter(T=>T).forEach(T=>d.append("index",T));let v=d.toString();l.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:$r([t,l.pathname])),hl(l)}function d0(n,e={}){let t=U.useContext(D_);Je(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=j_("useViewTransitionState"),o=El(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Oi(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Oi(t.nextLocation.pathname,i)||t.nextLocation.pathname;return yc(o.pathname,c)!=null||yc(o.pathname,l)!=null}new TextEncoder;var ny={};/**
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
 */const $_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},f0=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],c=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|c&63)}}return e.join("")},q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],c=o+1<n.length,d=c?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,v=l>>2,T=(l&3)<<4|d>>4;let I=(d&15)<<2|y>>6,x=y&63;p||(x=64,c||(I=64)),i.push(t[v],t[T],t[I],t[x])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($_(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):f0(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||T==null)throw new p0;const I=l<<2|d>>4;if(i.push(I),y!==64){const x=d<<4&240|y>>2;if(i.push(x),T!==64){const F=y<<6&192|T;i.push(F)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class p0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const m0=function(n){const e=$_(n);return q_.encodeByteArray(e,!0)},_c=function(n){return m0(n).replace(/\./g,"")},H_=function(n){try{return q_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function g0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const y0=()=>g0().__FIREBASE_DEFAULTS__,_0=()=>{if(typeof process>"u"||typeof ny>"u")return;const n=ny.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},v0=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&H_(n[1]);return e&&JSON.parse(e)},Uc=()=>{try{return y0()||_0()||v0()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},W_=n=>{var e,t;return(t=(e=Uc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},K_=n=>{const e=W_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},G_=()=>{var n;return(n=Uc())===null||n===void 0?void 0:n.config},Q_=n=>{var e;return(e=Uc())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class w0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Y_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[_c(JSON.stringify(t)),_c(JSON.stringify(c)),""].join(".")}/**
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
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function E0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function T0(){var n;const e=(n=Uc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function I0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function S0(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function R0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function C0(){const n=Ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function A0(){return!T0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k0(){try{return typeof indexedDB=="object"}catch{return!1}}function P0(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const x0="FirebaseError";class Er extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=x0,Object.setPrototypeOf(this,Er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Il.prototype.create)}}class Il{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],c=l?N0(l,i):"Error",d=`${this.serviceName}: ${c} (${o}).`;return new Er(o,d,i)}}function N0(n,e){return n.replace(D0,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const D0=/\{\$([^}]+)}/g;function b0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],c=e[o];if(ry(l)&&ry(c)){if(!dl(l,c))return!1}else if(l!==c)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function ry(n){return n!==null&&typeof n=="object"}/**
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
 */function Sl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Za(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function el(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function O0(n,e){const t=new L0(n,e);return t.subscribe.bind(t)}class L0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");V0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=$d),o.error===void 0&&(o.error=$d),o.complete===void 0&&(o.complete=$d);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function V0(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $d(){}/**
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
 */function nt(n){return n&&n._delegate?n._delegate:n}class Li{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class M0{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new w0;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(U0(e))try{this.getOrInitializeService({instanceIdentifier:ws})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ws){return this.instances.has(e)}getOptions(e=ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const c=this.instances.get(o);return c&&e(c,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:F0(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ws){return this.component?this.component.multipleInstances?e:ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function F0(n){return n===ws?void 0:n}function U0(n){return n.instantiationMode==="EAGER"}/**
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
 */class B0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new M0(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ne;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ne||(Ne={}));const z0={debug:Ne.DEBUG,verbose:Ne.VERBOSE,info:Ne.INFO,warn:Ne.WARN,error:Ne.ERROR,silent:Ne.SILENT},j0=Ne.INFO,$0={[Ne.DEBUG]:"log",[Ne.VERBOSE]:"log",[Ne.INFO]:"info",[Ne.WARN]:"warn",[Ne.ERROR]:"error"},q0=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=$0[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bf{constructor(e){this.name=e,this._logLevel=j0,this._logHandler=q0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?z0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ne.DEBUG,...e),this._logHandler(this,Ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ne.VERBOSE,...e),this._logHandler(this,Ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ne.INFO,...e),this._logHandler(this,Ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ne.WARN,...e),this._logHandler(this,Ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ne.ERROR,...e),this._logHandler(this,Ne.ERROR,...e)}}const H0=(n,e)=>e.some(t=>n instanceof t);let iy,sy;function W0(){return iy||(iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function K0(){return sy||(sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X_=new WeakMap,of=new WeakMap,J_=new WeakMap,qd=new WeakMap,zf=new WeakMap;function G0(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(Pi(n.result)),o()},c=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&X_.set(t,n)}).catch(()=>{}),zf.set(e,n),e}function Q0(n){if(of.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),o()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});of.set(n,e)}let af={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return of.get(n);if(e==="objectStoreNames")return n.objectStoreNames||J_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Y0(n){af=n(af)}function X0(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Hd(this),e,...t);return J_.set(i,e.sort?e.sort():[e]),Pi(i)}:K0().includes(n)?function(...e){return n.apply(Hd(this),e),Pi(X_.get(this))}:function(...e){return Pi(n.apply(Hd(this),e))}}function J0(n){return typeof n=="function"?X0(n):(n instanceof IDBTransaction&&Q0(n),H0(n,W0())?new Proxy(n,af):n)}function Pi(n){if(n instanceof IDBRequest)return G0(n);if(qd.has(n))return qd.get(n);const e=J0(n);return e!==n&&(qd.set(n,e),zf.set(e,n)),e}const Hd=n=>zf.get(n);function Z0(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const c=indexedDB.open(n,e),d=Pi(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Pi(c.result),p.oldVersion,p.newVersion,Pi(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const eS=["get","getKey","getAll","getAllKeys","count"],tS=["put","add","delete","clear"],Wd=new Map;function oy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wd.get(e))return Wd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=tS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||eS.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Wd.set(e,l),l}Y0(n=>({...n,get:(e,t,i)=>oy(e,t)||n.get(e,t,i),has:(e,t)=>!!oy(e,t)||n.has(e,t)}));/**
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
 */class nS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function rS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const lf="@firebase/app",ay="0.10.18";/**
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
 */const Hr=new Bf("@firebase/app"),iS="@firebase/app-compat",sS="@firebase/analytics-compat",oS="@firebase/analytics",aS="@firebase/app-check-compat",lS="@firebase/app-check",uS="@firebase/auth",cS="@firebase/auth-compat",hS="@firebase/database",dS="@firebase/data-connect",fS="@firebase/database-compat",pS="@firebase/functions",mS="@firebase/functions-compat",gS="@firebase/installations",yS="@firebase/installations-compat",_S="@firebase/messaging",vS="@firebase/messaging-compat",wS="@firebase/performance",ES="@firebase/performance-compat",TS="@firebase/remote-config",IS="@firebase/remote-config-compat",SS="@firebase/storage",RS="@firebase/storage-compat",CS="@firebase/firestore",AS="@firebase/vertexai",kS="@firebase/firestore-compat",PS="firebase",xS="11.2.0";/**
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
 */const uf="[DEFAULT]",NS={[lf]:"fire-core",[iS]:"fire-core-compat",[oS]:"fire-analytics",[sS]:"fire-analytics-compat",[lS]:"fire-app-check",[aS]:"fire-app-check-compat",[uS]:"fire-auth",[cS]:"fire-auth-compat",[hS]:"fire-rtdb",[dS]:"fire-data-connect",[fS]:"fire-rtdb-compat",[pS]:"fire-fn",[mS]:"fire-fn-compat",[gS]:"fire-iid",[yS]:"fire-iid-compat",[_S]:"fire-fcm",[vS]:"fire-fcm-compat",[wS]:"fire-perf",[ES]:"fire-perf-compat",[TS]:"fire-rc",[IS]:"fire-rc-compat",[SS]:"fire-gcs",[RS]:"fire-gcs-compat",[CS]:"fire-fst",[kS]:"fire-fst-compat",[AS]:"fire-vertex","fire-js":"fire-js",[PS]:"fire-js-all"};/**
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
 */const vc=new Map,DS=new Map,cf=new Map;function ly(n,e){try{n.container.addComponent(e)}catch(t){Hr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Is(n){const e=n.name;if(cf.has(e))return Hr.debug(`There were multiple attempts to register component ${e}.`),!1;cf.set(e,n);for(const t of vc.values())ly(t,n);for(const t of DS.values())ly(t,n);return!0}function Bc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Gn(n){return n.settings!==void 0}/**
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
 */const bS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xi=new Il("app","Firebase",bS);/**
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
 */class OS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Li("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xi.create("app-deleted",{appName:this._name})}}/**
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
 */const As=xS;function Z_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:uf,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw xi.create("bad-app-name",{appName:String(o)});if(t||(t=G_()),!t)throw xi.create("no-options");const l=vc.get(o);if(l){if(dl(t,l.options)&&dl(i,l.config))return l;throw xi.create("duplicate-app",{appName:o})}const c=new B0(o);for(const p of cf.values())c.addComponent(p);const d=new OS(t,i,c);return vc.set(o,d),d}function jf(n=uf){const e=vc.get(n);if(!e&&n===uf&&G_())return Z_();if(!e)throw xi.create("no-app",{appName:n});return e}function pr(n,e,t){var i;let o=(i=NS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Hr.warn(d.join(" "));return}Is(new Li(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const LS="firebase-heartbeat-database",VS=1,fl="firebase-heartbeat-store";let Kd=null;function ev(){return Kd||(Kd=Z0(LS,VS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fl)}catch(t){console.warn(t)}}}}).catch(n=>{throw xi.create("idb-open",{originalErrorMessage:n.message})})),Kd}async function MS(n){try{const t=(await ev()).transaction(fl),i=await t.objectStore(fl).get(tv(n));return await t.done,i}catch(e){if(e instanceof Er)Hr.warn(e.message);else{const t=xi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Hr.warn(t.message)}}}async function uy(n,e){try{const i=(await ev()).transaction(fl,"readwrite");await i.objectStore(fl).put(e,tv(n)),await i.done}catch(t){if(t instanceof Er)Hr.warn(t.message);else{const i=xi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Hr.warn(i.message)}}}function tv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const FS=1024,US=30*24*60*60*1e3;class BS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=cy();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const d=new Date(c.date).valueOf();return Date.now()-d<=US}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Hr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cy(),{heartbeatsToSend:i,unsentEntries:o}=zS(this._heartbeatsCache.heartbeats),l=_c(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Hr.warn(t),""}}}function cy(){return new Date().toISOString().substring(0,10)}function zS(n,e=FS){const t=[];let i=n.slice();for(const o of n){const l=t.find(c=>c.agent===o.agent);if(l){if(l.dates.push(o.date),hy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),hy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class jS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return k0()?P0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await MS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return uy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return uy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function hy(n){return _c(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function $S(n){Is(new Li("platform-logger",e=>new nS(e),"PRIVATE")),Is(new Li("heartbeat",e=>new BS(e),"PRIVATE")),pr(lf,ay,n),pr(lf,ay,"esm2017"),pr("fire-js","")}$S("");var qS="firebase",HS="11.2.0";/**
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
 */pr(qS,HS,"app");function $f(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function nv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WS=nv,rv=new Il("auth","Firebase",nv());/**
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
 */const wc=new Bf("@firebase/auth");function KS(n,...e){wc.logLevel<=Ne.WARN&&wc.warn(`Auth (${As}): ${n}`,...e)}function ac(n,...e){wc.logLevel<=Ne.ERROR&&wc.error(`Auth (${As}): ${n}`,...e)}/**
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
 */function Yn(n,...e){throw qf(n,...e)}function mr(n,...e){return qf(n,...e)}function iv(n,e,t){const i=Object.assign(Object.assign({},WS()),{[e]:t});return new Il("auth","Firebase",i).create(e,{appName:n.name})}function gr(n){return iv(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return rv.create(n,...e)}function Ie(n,e,...t){if(!n)throw qf(e,...t)}function Br(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ac(e),new Error(e)}function Wr(n,e){n||Br(e)}/**
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
 */function hf(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function GS(){return dy()==="http:"||dy()==="https:"}function dy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function QS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GS()||S0()||"connection"in navigator)?navigator.onLine:!0}function YS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Rl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Wr(t>e,"Short delay should be less than long delay!"),this.isMobile=E0()||R0()}get(){return QS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hf(n,e){Wr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class sv{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Br("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Br("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Br("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const XS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const JS=new Rl(3e4,6e4);function ji(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yr(n,e,t,i,o={}){return ov(n,o,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=Sl(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return I0()||(y.referrerPolicy="no-referrer"),sv.fetch()(av(n,n.config.apiHost,t,d),y)})}async function ov(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},XS),e);try{const o=new eR(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Xu(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xu(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Xu(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Xu(n,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw iv(n,v,y);Yn(n,v)}}catch(o){if(o instanceof Er)throw o;Yn(n,"network-request-failed",{message:String(o)})}}async function Cl(n,e,t,i,o={}){const l=await Yr(n,e,t,i,o);return"mfaPendingCredential"in l&&Yn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function av(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Hf(n.config,o):`${n.config.apiScheme}://${o}`}function ZS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class eR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mr(this.auth,"network-request-failed")),JS.get())})}}function Xu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=mr(n,e,i);return o.customData._tokenResponse=t,o}function fy(n){return n!==void 0&&n.enterprise!==void 0}class tR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ZS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nR(n,e){return Yr(n,"GET","/v2/recaptchaConfig",ji(n,e))}/**
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
 */async function rR(n,e){return Yr(n,"POST","/v1/accounts:delete",e)}async function lv(n,e){return Yr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function sl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iR(n,e=!1){const t=nt(n),i=await t.getIdToken(e),o=Wf(i);Ie(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:sl(Gd(o.auth_time)),issuedAtTime:sl(Gd(o.iat)),expirationTime:sl(Gd(o.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Gd(n){return Number(n)*1e3}function Wf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ac("JWT malformed, contained fewer than 3 sections"),null;try{const o=H_(t);return o?JSON.parse(o):(ac("Failed to decode base64 JWT payload"),null)}catch(o){return ac("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function py(n){const e=Wf(n);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Oo(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Er&&sR(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function sR({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class oR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class df{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sl(this.lastLoginAt),this.creationTime=sl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ec(n){var e;const t=n.auth,i=await n.getIdToken(),o=await Oo(n,lv(t,{idToken:i}));Ie(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?uv(l.providerUserInfo):[],d=lR(n.providerData,c),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),v=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new df(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(n,T)}async function aR(n){const e=nt(n);await Ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lR(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function uv(n){return n.map(e=>{var{providerId:t}=e,i=$f(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function uR(n,e){const t=await ov(n,{},async()=>{const i=Sl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,c=av(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",sv.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function cR(n,e){return Yr(n,"POST","/v2/accounts:revokeToken",ji(n,e))}/**
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
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ie(e.length!==0,"internal-error");const t=py(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await uR(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,c=new xo;return i&&(Ie(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),o&&(Ie(typeof o=="string","internal-error",{appName:e}),c.accessToken=o),l&&(Ie(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return Br("not implemented")}}/**
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
 */function Ti(n,e){Ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class zr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=$f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new df(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Oo(this,this.stsTokenManager.getToken(this.auth,e));return Ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return iR(this,e)}reload(){return aR(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ec(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await Oo(this,rR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,c,d,p,y,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,x=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(c=t.photoURL)!==null&&c!==void 0?c:void 0,j=(d=t.tenantId)!==null&&d!==void 0?d:void 0,V=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,W=(y=t.createdAt)!==null&&y!==void 0?y:void 0,J=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:G,emailVerified:re,isAnonymous:_e,providerData:me,stsTokenManager:P}=t;Ie(G&&P,e,"internal-error");const S=xo.fromJSON(this.name,P);Ie(typeof G=="string",e,"internal-error"),Ti(T,e.name),Ti(I,e.name),Ie(typeof re=="boolean",e,"internal-error"),Ie(typeof _e=="boolean",e,"internal-error"),Ti(x,e.name),Ti(F,e.name),Ti(j,e.name),Ti(V,e.name),Ti(W,e.name),Ti(J,e.name);const R=new zr({uid:G,auth:e,email:I,emailVerified:re,displayName:T,isAnonymous:_e,photoURL:F,phoneNumber:x,tenantId:j,stsTokenManager:S,createdAt:W,lastLoginAt:J});return me&&Array.isArray(me)&&(R.providerData=me.map(A=>Object.assign({},A))),V&&(R._redirectEventId=V),R}static async _fromIdTokenResponse(e,t,i=!1){const o=new xo;o.updateFromServerResponse(t);const l=new zr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await Ec(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];Ie(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?uv(o.providerUserInfo):[],c=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new xo;d.updateFromIdToken(i);const p=new zr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:c}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new df(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
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
 */const my=new Map;function jr(n){Wr(n instanceof Function,"Expected a class definition");let e=my.get(n);return e?(Wr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,my.set(n,e),e)}/**
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
 */class cv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cv.type="NONE";const gy=cv;/**
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
 */function lc(n,e,t){return`firebase:${n}:${e}:${t}`}class No{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=lc(this.userKey,o.apiKey,l),this.fullPersistenceKey=lc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new No(jr(gy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||jr(gy);const c=lc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const v=await y._get(c);if(v){const T=zr._fromJSON(e,v);y!==l&&(d=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new No(l,e,i):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(c)}catch{}})),new No(l,e,i))}}/**
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
 */function yy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gv(e))return"Blackberry";if(yv(e))return"Webos";if(dv(e))return"Safari";if((e.includes("chrome/")||fv(e))&&!e.includes("edge/"))return"Chrome";if(mv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function hv(n=Ht()){return/firefox\//i.test(n)}function dv(n=Ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fv(n=Ht()){return/crios\//i.test(n)}function pv(n=Ht()){return/iemobile/i.test(n)}function mv(n=Ht()){return/android/i.test(n)}function gv(n=Ht()){return/blackberry/i.test(n)}function yv(n=Ht()){return/webos/i.test(n)}function Kf(n=Ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hR(n=Ht()){var e;return Kf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dR(){return C0()&&document.documentMode===10}function _v(n=Ht()){return Kf(n)||mv(n)||yv(n)||gv(n)||/windows phone/i.test(n)||pv(n)}/**
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
 */function vv(n,e=[]){let t;switch(n){case"Browser":t=yy(Ht());break;case"Worker":t=`${yy(Ht())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${As}/${i}`}/**
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
 */class fR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function pR(n,e={}){return Yr(n,"GET","/v2/passwordPolicy",ji(n,e))}/**
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
 */const mR=6;class gR{constructor(e){var t,i,o,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:mR,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class yR{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _y(this),this.idTokenSubscription=new _y(this),this.beforeStateQueue=new fR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await lv(this,{idToken:e}),i=await zr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Gn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(c){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ec(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gn(this.app))return Promise.reject(gr(this));const t=e?nt(e):null;return t&&Ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gn(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pR(this),t=new gR(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Il("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await cR(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jr(e)||this._popupRedirectResolver;Ie(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[jr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&KS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function $i(n){return nt(n)}class _y{constructor(e){this.auth=e,this.observer=null,this.addObserver=O0(t=>this.observer=t)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _R(n){zc=n}function wv(n){return zc.loadJS(n)}function vR(){return zc.recaptchaEnterpriseScript}function wR(){return zc.gapiScript}function ER(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class TR{constructor(){this.enterprise=new IR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class IR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const SR="recaptcha-enterprise",Ev="NO_RECAPTCHA";class RR{constructor(e){this.type=SR,this.auth=$i(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{nR(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new tR(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,c(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,c,d){const p=window.grecaptcha;fy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{c(y)}).catch(()=>{c(Ev)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new TR().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&fy(window.grecaptcha))o(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=vR();p.length!==0&&(p+=d),wv(p).then(()=>{o(d,l,c)}).catch(y=>{c(y)})}}).catch(d=>{c(d)})})}}async function vy(n,e,t,i=!1,o=!1){const l=new RR(n);let c;if(o)c=Ev;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function ff(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await vy(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await vy(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
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
 */function CR(n,e){const t=Bc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(dl(l,e??{}))return o;Yn(o,"already-initialized")}return t.initialize({options:e})}function AR(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(jr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function kR(n,e,t){const i=$i(n);Ie(i._canInitEmulator,i,"emulator-config-failed"),Ie(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=Tv(e),{host:c,port:d}=PR(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),xR()}function Tv(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function PR(n){const e=Tv(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:wy(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:wy(c)}}}function wy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xR(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Gf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Br("not implemented")}_getIdTokenResponse(e){return Br("not implemented")}_linkToIdToken(e,t){return Br("not implemented")}_getReauthenticationResolver(e){return Br("not implemented")}}async function NR(n,e){return Yr(n,"POST","/v1/accounts:update",e)}async function DR(n,e){return Yr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function bR(n,e){return Cl(n,"POST","/v1/accounts:signInWithPassword",ji(n,e))}/**
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
 */async function OR(n,e){return Cl(n,"POST","/v1/accounts:signInWithEmailLink",ji(n,e))}async function LR(n,e){return Cl(n,"POST","/v1/accounts:signInWithEmailLink",ji(n,e))}/**
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
 */class pl extends Gf{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new pl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new pl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ff(e,t,"signInWithPassword",bR);case"emailLink":return OR(e,{email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ff(e,i,"signUpPassword",DR);case"emailLink":return LR(e,{idToken:t,email:this._email,oobCode:this._password});default:Yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Do(n,e){return Cl(n,"POST","/v1/accounts:signInWithIdp",ji(n,e))}/**
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
 */const VR="http://localhost";class Ss extends Gf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Yn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=$f(t,["providerId","signInMethod"]);if(!i||!o)return null;const c=new Ss(i,o);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Do(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Do(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Do(e,t)}buildRequest(){const e={requestUri:VR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Sl(t)}return e}}/**
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
 */function MR(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FR(n){const e=Za(el(n)).link,t=e?Za(el(e)).deep_link_id:null,i=Za(el(n)).deep_link_id;return(i?Za(el(i)).link:null)||i||t||e||n}class Qf{constructor(e){var t,i,o,l,c,d;const p=Za(el(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,T=MR((o=p.mode)!==null&&o!==void 0?o:null);Ie(y&&v&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=FR(e);try{return new Qf(t)}catch{return null}}}/**
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
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,t){return pl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Qf.parseLink(t);return Ie(i,"argument-error"),pl._fromEmailAndCode(e,i.code,i.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Iv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Al extends Iv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ii extends Al{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ii.PROVIDER_ID="facebook.com";/**
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
 */class Si extends Al{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ss._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Si.credential(t,i)}catch{return null}}}Si.GOOGLE_SIGN_IN_METHOD="google.com";Si.PROVIDER_ID="google.com";/**
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
 */class Ri extends Al{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:Ri.PROVIDER_ID,signInMethod:Ri.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ri.credentialFromTaggedObject(e)}static credentialFromError(e){return Ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ri.credential(e.oauthAccessToken)}catch{return null}}}Ri.GITHUB_SIGN_IN_METHOD="github.com";Ri.PROVIDER_ID="github.com";/**
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
 */class Ci extends Al{constructor(){super("twitter.com")}static credential(e,t){return Ss._fromParams({providerId:Ci.PROVIDER_ID,signInMethod:Ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ci.credentialFromTaggedObject(e)}static credentialFromError(e){return Ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ci.credential(t,i)}catch{return null}}}Ci.TWITTER_SIGN_IN_METHOD="twitter.com";Ci.PROVIDER_ID="twitter.com";/**
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
 */async function Sv(n,e){return Cl(n,"POST","/v1/accounts:signUp",ji(n,e))}/**
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
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await zr._fromIdTokenResponse(e,i,o),c=Ey(i);return new Kr({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=Ey(i);return new Kr({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function Ey(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function UR(n){var e;if(Gn(n.app))return Promise.reject(gr(n));const t=$i(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Kr({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await Sv(t,{returnSecureToken:!0}),o=await Kr._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(o.user),o}/**
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
 */class Tc extends Er{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Tc(e,t,i,o)}}function Rv(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(n,l,e,i):l})}async function BR(n,e,t=!1){const i=await Oo(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Kr._forOperation(n,"link",i)}/**
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
 */async function Cv(n,e,t=!1){const{auth:i}=n;if(Gn(i.app))return Promise.reject(gr(i));const o="reauthenticate";try{const l=await Oo(n,Rv(i,o,e,n),t);Ie(l.idToken,i,"internal-error");const c=Wf(l.idToken);Ie(c,i,"internal-error");const{sub:d}=c;return Ie(n.uid===d,i,"user-mismatch"),Kr._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Yn(i,"user-mismatch"),l}}/**
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
 */async function Av(n,e,t=!1){if(Gn(n.app))return Promise.reject(gr(n));const i="signIn",o=await Rv(n,i,e),l=await Kr._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function zR(n,e){return Av($i(n),e)}async function jR(n,e){return Cv(nt(n),e)}/**
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
 */async function kv(n){const e=$i(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function $R(n,e,t){if(Gn(n.app))return Promise.reject(gr(n));const i=$i(n),c=await ff(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sv).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&kv(n),p}),d=await Kr._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function qR(n,e,t){return Gn(n.app)?Promise.reject(gr(n)):zR(nt(n),ks.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&kv(n),i})}function HR(n,e){return WR(nt(n),null,e)}async function WR(n,e,t){const{auth:i}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};t&&(l.password=t);const c=await Oo(n,NR(i,l));await n._updateTokensIfNecessary(c,!0)}function KR(n,e,t,i){return nt(n).onIdTokenChanged(e,t,i)}function GR(n,e,t){return nt(n).beforeAuthStateChanged(e,t)}function QR(n,e,t,i){return nt(n).onAuthStateChanged(e,t,i)}const Ic="__sak";/**
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
 */class Pv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YR=1e3,XR=10;class xv extends Pv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_v(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);dR()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,XR):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},YR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xv.type="LOCAL";const JR=xv;/**
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
 */class Nv extends Pv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nv.type="SESSION";const Dv=Nv;/**
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
 */function ZR(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new jc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,c=this.handlersMap[o];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(c).map(async y=>y(t.origin,l)),p=await ZR(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
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
 */function Yf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class eC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const y=Yf("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(I.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),o.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function yr(){return window}function tC(n){yr().location.href=n}/**
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
 */function bv(){return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}async function nC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rC(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function iC(){return bv()?self:null}/**
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
 */const Ov="firebaseLocalStorageDb",sC=1,Sc="firebaseLocalStorage",Lv="fbase_key";class kl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $c(n,e){return n.transaction([Sc],e?"readwrite":"readonly").objectStore(Sc)}function oC(){const n=indexedDB.deleteDatabase(Ov);return new kl(n).toPromise()}function pf(){const n=indexedDB.open(Ov,sC);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Sc,{keyPath:Lv})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Sc)?e(i):(i.close(),await oC(),e(await pf()))})})}async function Ty(n,e,t){const i=$c(n,!0).put({[Lv]:e,value:t});return new kl(i).toPromise()}async function aC(n,e){const t=$c(n,!1).get(e),i=await new kl(t).toPromise();return i===void 0?null:i.value}function Iy(n,e){const t=$c(n,!0).delete(e);return new kl(t).toPromise()}const lC=800,uC=3;class Vv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>uC)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(iC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nC(),!this.activeServiceWorker)return;this.sender=new eC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pf();return await Ty(e,Ic,"1"),await Iy(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ty(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>aC(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Iy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=$c(o,!1).getAll();return new kl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vv.type="LOCAL";const cC=Vv;new Rl(3e4,6e4);/**
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
 */function hC(n,e){return e?jr(e):(Ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Xf extends Gf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Do(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Do(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Do(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dC(n){return Av(n.auth,new Xf(n),n.bypassAuthState)}function fC(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),Cv(t,new Xf(n),n.bypassAuthState)}async function pC(n){const{auth:e,user:t}=n;return Ie(t,e,"internal-error"),BR(t,new Xf(n),n.bypassAuthState)}/**
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
 */class Mv{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dC;case"linkViaPopup":case"linkViaRedirect":return pC;case"reauthViaPopup":case"reauthViaRedirect":return fC;default:Yn(this.auth,"internal-error")}}resolve(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mC=new Rl(2e3,1e4);class Po extends Mv{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Po.currentPopupAction&&Po.currentPopupAction.cancel(),Po.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ie(e,this.auth,"internal-error"),e}async onExecution(){Wr(this.filter.length===1,"Popup operations only handle one event");const e=Yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Po.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mC.get())};e()}}Po.currentPopupAction=null;/**
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
 */const gC="pendingRedirect",uc=new Map;class yC extends Mv{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=uc.get(this.auth._key());if(!e){try{const i=await _C(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}uc.set(this.auth._key(),e)}return this.bypassAuthState||uc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _C(n,e){const t=EC(e),i=wC(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function vC(n,e){uc.set(n._key(),e)}function wC(n){return jr(n._redirectPersistence)}function EC(n){return lc(gC,n.config.apiKey,n.name)}async function TC(n,e,t=!1){if(Gn(n.app))return Promise.reject(gr(n));const i=$i(n),o=hC(i,e),c=await new yC(i,o,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const IC=10*60*1e3;class SC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Fv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(mr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sy(e))}saveEventToCache(e){this.cachedEventUids.add(Sy(e)),this.lastProcessedEventTime=Date.now()}}function Sy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Fv({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fv(n);default:return!1}}/**
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
 */async function CC(n,e={}){return Yr(n,"GET","/v1/projects",e)}/**
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
 */const AC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kC=/^https?/;async function PC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await CC(n);for(const t of e)try{if(xC(t))return}catch{}Yn(n,"unauthorized-domain")}function xC(n){const e=hf(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!kC.test(t))return!1;if(AC.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
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
 */const NC=new Rl(3e4,6e4);function Ry(){const n=yr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function DC(n){return new Promise((e,t)=>{var i,o,l;function c(){Ry(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ry(),t(mr(n,"network-request-failed"))},timeout:NC.get()})}if(!((o=(i=yr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=yr().gapi)===null||l===void 0)&&l.load)c();else{const d=ER("iframefcb");return yr()[d]=()=>{gapi.load?c():t(mr(n,"network-request-failed"))},wv(`${wR()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw cc=null,e})}let cc=null;function bC(n){return cc=cc||DC(n),cc}/**
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
 */const OC=new Rl(5e3,15e3),LC="__/auth/iframe",VC="emulator/auth/iframe",MC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UC(n){const e=n.config;Ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hf(e,VC):`https://${n.config.authDomain}/${LC}`,i={apiKey:e.apiKey,appName:n.name,v:As},o=FC.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${Sl(i).slice(1)}`}async function BC(n){const e=await bC(n),t=yr().gapi;return Ie(t,n,"internal-error"),e.open({where:document.body,url:UC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MC,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const c=mr(n,"network-request-failed"),d=yr().setTimeout(()=>{l(c)},OC.get());function p(){yr().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const zC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jC=500,$C=600,qC="_blank",HC="http://localhost";class Cy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WC(n,e,t,i=jC,o=$C){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},zC),{width:i.toString(),height:o.toString(),top:l,left:c}),y=Ht().toLowerCase();t&&(d=fv(y)?qC:t),hv(y)&&(e=e||HC,p.scrollbars="yes");const v=Object.entries(p).reduce((I,[x,F])=>`${I}${x}=${F},`,"");if(hR(y)&&d!=="_self")return KC(e||"",d),new Cy(null);const T=window.open(e||"",d,v);Ie(T,n,"popup-blocked");try{T.focus()}catch{}return new Cy(T)}function KC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const GC="__/auth/handler",QC="emulator/auth/handler",YC=encodeURIComponent("fac");async function Ay(n,e,t,i,o,l){Ie(n.config.authDomain,n,"auth-domain-config-required"),Ie(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:As,eventId:o};if(e instanceof Iv){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",b0(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries({}))c[v]=T}if(e instanceof Al){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const v of Object.keys(d))d[v]===void 0&&delete d[v];const p=await n._getAppCheckToken(),y=p?`#${YC}=${encodeURIComponent(p)}`:"";return`${XC(n)}?${Sl(d).slice(1)}${y}`}function XC({config:n}){return n.emulator?Hf(n,QC):`https://${n.authDomain}/${GC}`}/**
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
 */const Qd="webStorageSupport";class JC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dv,this._completeRedirectFn=TC,this._overrideRedirectResult=vC}async _openPopup(e,t,i,o){var l;Wr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Ay(e,t,i,hf(),o);return WC(e,c,Yf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await Ay(e,t,i,hf(),o);return tC(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Wr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await BC(e),i=new SC(e);return t.register("authEvent",o=>(Ie(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qd,{type:Qd},o=>{var l;const c=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Qd];c!==void 0&&t(!!c),Yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=PC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _v()||dv()||Kf()}}const ZC=JC;var ky="@firebase/auth",Py="1.8.2";/**
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
 */class eA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nA(n){Is(new Li("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;Ie(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vv(n)},y=new yR(i,o,l,p);return AR(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Is(new Li("auth-internal",e=>{const t=$i(e.getProvider("auth").getImmediate());return(i=>new eA(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pr(ky,Py,tA(n)),pr(ky,Py,"esm2017")}/**
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
 */const rA=5*60,iA=Q_("authIdTokenMaxAge")||rA;let xy=null;const sA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>iA)return;const o=t==null?void 0:t.token;xy!==o&&(xy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Ko(n=jf()){const e=Bc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=CR(n,{popupRedirectResolver:ZC,persistence:[cC,JR,Dv]}),i=Q_("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=sA(l.toString());GR(t,c,()=>c(t.currentUser)),KR(t,d=>c(d))}}const o=W_("auth");return o&&kR(t,`http://${o}`),t}function oA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}_R({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=mr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",oA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nA("Browser");var Ny=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ni,Uv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,S){function R(){}R.prototype=S.prototype,P.D=S.prototype,P.prototype=new R,P.prototype.constructor=P,P.C=function(A,N,M){for(var k=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)k[Ze-2]=arguments[Ze];return S.prototype[N].apply(A,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,S,R){R||(R=0);var A=Array(16);if(typeof S=="string")for(var N=0;16>N;++N)A[N]=S.charCodeAt(R++)|S.charCodeAt(R++)<<8|S.charCodeAt(R++)<<16|S.charCodeAt(R++)<<24;else for(N=0;16>N;++N)A[N]=S[R++]|S[R++]<<8|S[R++]<<16|S[R++]<<24;S=P.g[0],R=P.g[1],N=P.g[2];var M=P.g[3],k=S+(M^R&(N^M))+A[0]+3614090360&4294967295;S=R+(k<<7&4294967295|k>>>25),k=M+(N^S&(R^N))+A[1]+3905402710&4294967295,M=S+(k<<12&4294967295|k>>>20),k=N+(R^M&(S^R))+A[2]+606105819&4294967295,N=M+(k<<17&4294967295|k>>>15),k=R+(S^N&(M^S))+A[3]+3250441966&4294967295,R=N+(k<<22&4294967295|k>>>10),k=S+(M^R&(N^M))+A[4]+4118548399&4294967295,S=R+(k<<7&4294967295|k>>>25),k=M+(N^S&(R^N))+A[5]+1200080426&4294967295,M=S+(k<<12&4294967295|k>>>20),k=N+(R^M&(S^R))+A[6]+2821735955&4294967295,N=M+(k<<17&4294967295|k>>>15),k=R+(S^N&(M^S))+A[7]+4249261313&4294967295,R=N+(k<<22&4294967295|k>>>10),k=S+(M^R&(N^M))+A[8]+1770035416&4294967295,S=R+(k<<7&4294967295|k>>>25),k=M+(N^S&(R^N))+A[9]+2336552879&4294967295,M=S+(k<<12&4294967295|k>>>20),k=N+(R^M&(S^R))+A[10]+4294925233&4294967295,N=M+(k<<17&4294967295|k>>>15),k=R+(S^N&(M^S))+A[11]+2304563134&4294967295,R=N+(k<<22&4294967295|k>>>10),k=S+(M^R&(N^M))+A[12]+1804603682&4294967295,S=R+(k<<7&4294967295|k>>>25),k=M+(N^S&(R^N))+A[13]+4254626195&4294967295,M=S+(k<<12&4294967295|k>>>20),k=N+(R^M&(S^R))+A[14]+2792965006&4294967295,N=M+(k<<17&4294967295|k>>>15),k=R+(S^N&(M^S))+A[15]+1236535329&4294967295,R=N+(k<<22&4294967295|k>>>10),k=S+(N^M&(R^N))+A[1]+4129170786&4294967295,S=R+(k<<5&4294967295|k>>>27),k=M+(R^N&(S^R))+A[6]+3225465664&4294967295,M=S+(k<<9&4294967295|k>>>23),k=N+(S^R&(M^S))+A[11]+643717713&4294967295,N=M+(k<<14&4294967295|k>>>18),k=R+(M^S&(N^M))+A[0]+3921069994&4294967295,R=N+(k<<20&4294967295|k>>>12),k=S+(N^M&(R^N))+A[5]+3593408605&4294967295,S=R+(k<<5&4294967295|k>>>27),k=M+(R^N&(S^R))+A[10]+38016083&4294967295,M=S+(k<<9&4294967295|k>>>23),k=N+(S^R&(M^S))+A[15]+3634488961&4294967295,N=M+(k<<14&4294967295|k>>>18),k=R+(M^S&(N^M))+A[4]+3889429448&4294967295,R=N+(k<<20&4294967295|k>>>12),k=S+(N^M&(R^N))+A[9]+568446438&4294967295,S=R+(k<<5&4294967295|k>>>27),k=M+(R^N&(S^R))+A[14]+3275163606&4294967295,M=S+(k<<9&4294967295|k>>>23),k=N+(S^R&(M^S))+A[3]+4107603335&4294967295,N=M+(k<<14&4294967295|k>>>18),k=R+(M^S&(N^M))+A[8]+1163531501&4294967295,R=N+(k<<20&4294967295|k>>>12),k=S+(N^M&(R^N))+A[13]+2850285829&4294967295,S=R+(k<<5&4294967295|k>>>27),k=M+(R^N&(S^R))+A[2]+4243563512&4294967295,M=S+(k<<9&4294967295|k>>>23),k=N+(S^R&(M^S))+A[7]+1735328473&4294967295,N=M+(k<<14&4294967295|k>>>18),k=R+(M^S&(N^M))+A[12]+2368359562&4294967295,R=N+(k<<20&4294967295|k>>>12),k=S+(R^N^M)+A[5]+4294588738&4294967295,S=R+(k<<4&4294967295|k>>>28),k=M+(S^R^N)+A[8]+2272392833&4294967295,M=S+(k<<11&4294967295|k>>>21),k=N+(M^S^R)+A[11]+1839030562&4294967295,N=M+(k<<16&4294967295|k>>>16),k=R+(N^M^S)+A[14]+4259657740&4294967295,R=N+(k<<23&4294967295|k>>>9),k=S+(R^N^M)+A[1]+2763975236&4294967295,S=R+(k<<4&4294967295|k>>>28),k=M+(S^R^N)+A[4]+1272893353&4294967295,M=S+(k<<11&4294967295|k>>>21),k=N+(M^S^R)+A[7]+4139469664&4294967295,N=M+(k<<16&4294967295|k>>>16),k=R+(N^M^S)+A[10]+3200236656&4294967295,R=N+(k<<23&4294967295|k>>>9),k=S+(R^N^M)+A[13]+681279174&4294967295,S=R+(k<<4&4294967295|k>>>28),k=M+(S^R^N)+A[0]+3936430074&4294967295,M=S+(k<<11&4294967295|k>>>21),k=N+(M^S^R)+A[3]+3572445317&4294967295,N=M+(k<<16&4294967295|k>>>16),k=R+(N^M^S)+A[6]+76029189&4294967295,R=N+(k<<23&4294967295|k>>>9),k=S+(R^N^M)+A[9]+3654602809&4294967295,S=R+(k<<4&4294967295|k>>>28),k=M+(S^R^N)+A[12]+3873151461&4294967295,M=S+(k<<11&4294967295|k>>>21),k=N+(M^S^R)+A[15]+530742520&4294967295,N=M+(k<<16&4294967295|k>>>16),k=R+(N^M^S)+A[2]+3299628645&4294967295,R=N+(k<<23&4294967295|k>>>9),k=S+(N^(R|~M))+A[0]+4096336452&4294967295,S=R+(k<<6&4294967295|k>>>26),k=M+(R^(S|~N))+A[7]+1126891415&4294967295,M=S+(k<<10&4294967295|k>>>22),k=N+(S^(M|~R))+A[14]+2878612391&4294967295,N=M+(k<<15&4294967295|k>>>17),k=R+(M^(N|~S))+A[5]+4237533241&4294967295,R=N+(k<<21&4294967295|k>>>11),k=S+(N^(R|~M))+A[12]+1700485571&4294967295,S=R+(k<<6&4294967295|k>>>26),k=M+(R^(S|~N))+A[3]+2399980690&4294967295,M=S+(k<<10&4294967295|k>>>22),k=N+(S^(M|~R))+A[10]+4293915773&4294967295,N=M+(k<<15&4294967295|k>>>17),k=R+(M^(N|~S))+A[1]+2240044497&4294967295,R=N+(k<<21&4294967295|k>>>11),k=S+(N^(R|~M))+A[8]+1873313359&4294967295,S=R+(k<<6&4294967295|k>>>26),k=M+(R^(S|~N))+A[15]+4264355552&4294967295,M=S+(k<<10&4294967295|k>>>22),k=N+(S^(M|~R))+A[6]+2734768916&4294967295,N=M+(k<<15&4294967295|k>>>17),k=R+(M^(N|~S))+A[13]+1309151649&4294967295,R=N+(k<<21&4294967295|k>>>11),k=S+(N^(R|~M))+A[4]+4149444226&4294967295,S=R+(k<<6&4294967295|k>>>26),k=M+(R^(S|~N))+A[11]+3174756917&4294967295,M=S+(k<<10&4294967295|k>>>22),k=N+(S^(M|~R))+A[2]+718787259&4294967295,N=M+(k<<15&4294967295|k>>>17),k=R+(M^(N|~S))+A[9]+3951481745&4294967295,P.g[0]=P.g[0]+S&4294967295,P.g[1]=P.g[1]+(N+(k<<21&4294967295|k>>>11))&4294967295,P.g[2]=P.g[2]+N&4294967295,P.g[3]=P.g[3]+M&4294967295}i.prototype.u=function(P,S){S===void 0&&(S=P.length);for(var R=S-this.blockSize,A=this.B,N=this.h,M=0;M<S;){if(N==0)for(;M<=R;)o(this,P,M),M+=this.blockSize;if(typeof P=="string"){for(;M<S;)if(A[N++]=P.charCodeAt(M++),N==this.blockSize){o(this,A),N=0;break}}else for(;M<S;)if(A[N++]=P[M++],N==this.blockSize){o(this,A),N=0;break}}this.h=N,this.o+=S},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var S=1;S<P.length-8;++S)P[S]=0;var R=8*this.o;for(S=P.length-8;S<P.length;++S)P[S]=R&255,R/=256;for(this.u(P),P=Array(16),S=R=0;4>S;++S)for(var A=0;32>A;A+=8)P[R++]=this.g[S]>>>A&255;return P};function l(P,S){var R=d;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=S(P)}function c(P,S){this.h=S;for(var R=[],A=!0,N=P.length-1;0<=N;N--){var M=P[N]|0;A&&M==S||(R[N]=M,A=!1)}this.g=R}var d={};function p(P){return-128<=P&&128>P?l(P,function(S){return new c([S|0],0>S?-1:0)}):new c([P|0],0>P?-1:0)}function y(P){if(isNaN(P)||!isFinite(P))return T;if(0>P)return V(y(-P));for(var S=[],R=1,A=0;P>=R;A++)S[A]=P/R|0,R*=4294967296;return new c(S,0)}function v(P,S){if(P.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(P.charAt(0)=="-")return V(v(P.substring(1),S));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(S,8)),A=T,N=0;N<P.length;N+=8){var M=Math.min(8,P.length-N),k=parseInt(P.substring(N,N+M),S);8>M?(M=y(Math.pow(S,M)),A=A.j(M).add(y(k))):(A=A.j(R),A=A.add(y(k)))}return A}var T=p(0),I=p(1),x=p(16777216);n=c.prototype,n.m=function(){if(j(this))return-V(this).m();for(var P=0,S=1,R=0;R<this.g.length;R++){var A=this.i(R);P+=(0<=A?A:4294967296+A)*S,S*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(F(this))return"0";if(j(this))return"-"+V(this).toString(P);for(var S=y(Math.pow(P,6)),R=this,A="";;){var N=re(R,S).g;R=W(R,N.j(S));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(P);if(R=N,F(R))return M+A;for(;6>M.length;)M="0"+M;A=M+A}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function F(P){if(P.h!=0)return!1;for(var S=0;S<P.g.length;S++)if(P.g[S]!=0)return!1;return!0}function j(P){return P.h==-1}n.l=function(P){return P=W(this,P),j(P)?-1:F(P)?0:1};function V(P){for(var S=P.g.length,R=[],A=0;A<S;A++)R[A]=~P.g[A];return new c(R,~P.h).add(I)}n.abs=function(){return j(this)?V(this):this},n.add=function(P){for(var S=Math.max(this.g.length,P.g.length),R=[],A=0,N=0;N<=S;N++){var M=A+(this.i(N)&65535)+(P.i(N)&65535),k=(M>>>16)+(this.i(N)>>>16)+(P.i(N)>>>16);A=k>>>16,M&=65535,k&=65535,R[N]=k<<16|M}return new c(R,R[R.length-1]&-2147483648?-1:0)};function W(P,S){return P.add(V(S))}n.j=function(P){if(F(this)||F(P))return T;if(j(this))return j(P)?V(this).j(V(P)):V(V(this).j(P));if(j(P))return V(this.j(V(P)));if(0>this.l(x)&&0>P.l(x))return y(this.m()*P.m());for(var S=this.g.length+P.g.length,R=[],A=0;A<2*S;A++)R[A]=0;for(A=0;A<this.g.length;A++)for(var N=0;N<P.g.length;N++){var M=this.i(A)>>>16,k=this.i(A)&65535,Ze=P.i(N)>>>16,St=P.i(N)&65535;R[2*A+2*N]+=k*St,J(R,2*A+2*N),R[2*A+2*N+1]+=M*St,J(R,2*A+2*N+1),R[2*A+2*N+1]+=k*Ze,J(R,2*A+2*N+1),R[2*A+2*N+2]+=M*Ze,J(R,2*A+2*N+2)}for(A=0;A<S;A++)R[A]=R[2*A+1]<<16|R[2*A];for(A=S;A<2*S;A++)R[A]=0;return new c(R,0)};function J(P,S){for(;(P[S]&65535)!=P[S];)P[S+1]+=P[S]>>>16,P[S]&=65535,S++}function G(P,S){this.g=P,this.h=S}function re(P,S){if(F(S))throw Error("division by zero");if(F(P))return new G(T,T);if(j(P))return S=re(V(P),S),new G(V(S.g),V(S.h));if(j(S))return S=re(P,V(S)),new G(V(S.g),S.h);if(30<P.g.length){if(j(P)||j(S))throw Error("slowDivide_ only works with positive integers.");for(var R=I,A=S;0>=A.l(P);)R=_e(R),A=_e(A);var N=me(R,1),M=me(A,1);for(A=me(A,2),R=me(R,2);!F(A);){var k=M.add(A);0>=k.l(P)&&(N=N.add(R),M=k),A=me(A,1),R=me(R,1)}return S=W(P,N.j(S)),new G(N,S)}for(N=T;0<=P.l(S);){for(R=Math.max(1,Math.floor(P.m()/S.m())),A=Math.ceil(Math.log(R)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),M=y(R),k=M.j(S);j(k)||0<k.l(P);)R-=A,M=y(R),k=M.j(S);F(M)&&(M=I),N=N.add(M),P=W(P,k)}return new G(N,P)}n.A=function(P){return re(this,P).h},n.and=function(P){for(var S=Math.max(this.g.length,P.g.length),R=[],A=0;A<S;A++)R[A]=this.i(A)&P.i(A);return new c(R,this.h&P.h)},n.or=function(P){for(var S=Math.max(this.g.length,P.g.length),R=[],A=0;A<S;A++)R[A]=this.i(A)|P.i(A);return new c(R,this.h|P.h)},n.xor=function(P){for(var S=Math.max(this.g.length,P.g.length),R=[],A=0;A<S;A++)R[A]=this.i(A)^P.i(A);return new c(R,this.h^P.h)};function _e(P){for(var S=P.g.length+1,R=[],A=0;A<S;A++)R[A]=P.i(A)<<1|P.i(A-1)>>>31;return new c(R,P.h)}function me(P,S){var R=S>>5;S%=32;for(var A=P.g.length-R,N=[],M=0;M<A;M++)N[M]=0<S?P.i(M+R)>>>S|P.i(M+R+1)<<32-S:P.i(M+R);return new c(N,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Uv=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=y,c.fromString=v,Ni=c}).apply(typeof Ny<"u"?Ny:typeof self<"u"?self:typeof window<"u"?window:{});var Ju=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bv,tl,zv,hc,mf,jv,$v,qv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ju=="object"&&Ju];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var _=i;u=u.split(".");for(var E=0;E<u.length-1;E++){var B=u[E];if(!(B in _))break e;_=_[B]}u=u[u.length-1],E=_[u],m=m(E),m!=E&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,E=!1,B={next:function(){if(!E&&_<u.length){var H=_++;return{value:m(H,u[H]),done:!1}}return E=!0,{done:!0,value:void 0}}};return B[Symbol.iterator]=function(){return B},B}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function v(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var B=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(B,E),u.apply(m,B)}}return function(){return u.apply(m,arguments)}}function I(u,m,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,I.apply(null,arguments)}function x(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),u.apply(this,E)}}function F(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(E,B,H){for(var ne=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)ne[$e-2]=arguments[$e];return m.prototype[B].apply(E,ne)}}function j(u){const m=u.length;if(0<m){const _=Array(m);for(let E=0;E<m;E++)_[E]=u[E];return _}return[]}function V(u,m){for(let _=1;_<arguments.length;_++){const E=arguments[_];if(p(E)){const B=u.length||0,H=E.length||0;u.length=B+H;for(let ne=0;ne<H;ne++)u[B+ne]=E[ne]}else u.push(E)}}class W{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function J(u){return/^[\s\xa0]*$/.test(u)}function G(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function re(u){return re[" "](u),u}re[" "]=function(){};var _e=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function me(u,m,_){for(const E in u)m.call(_,u[E],E,u)}function P(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function S(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,m){let _,E;for(let B=1;B<arguments.length;B++){E=arguments[B];for(_ in E)u[_]=E[_];for(let H=0;H<R.length;H++)_=R[H],Object.prototype.hasOwnProperty.call(E,_)&&(u[_]=E[_])}}function N(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function M(u){d.setTimeout(()=>{throw u},0)}function k(){var u=ge;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class Ze{constructor(){this.h=this.g=null}add(m,_){const E=St.get();E.set(m,_),this.h?this.h.next=E:this.g=E,this.h=E}}var St=new W(()=>new mt,u=>u.reset());class mt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,se=!1,ge=new Ze,ae=()=>{const u=d.Promise.resolve(void 0);Be=()=>{u.then(b)}};var b=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(_){M(_)}var m=St;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}se=!1};function K(){this.s=this.s,this.C=this.C}K.prototype.s=!1,K.prototype.ma=function(){this.s||(this.s=!0,this.N())},K.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};d.addEventListener("test",_,m),d.removeEventListener("test",_,m)}catch{}return u}();function Te(u,m){if(ue.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,E=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(_e){e:{try{re(m.nodeName);var B=!0;break e}catch{}B=!1}B||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Te.aa.h.call(this)}}F(Te,ue);var xe={2:"touch",3:"pen",4:"mouse"};Te.prototype.h=function(){Te.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ke="closure_listenable_"+(1e6*Math.random()|0),be=0;function ze(u,m,_,E,B){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!E,this.ha=B,this.key=++be,this.da=this.fa=!1}function Rt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Tr(u){this.src=u,this.g={},this.h=0}Tr.prototype.add=function(u,m,_,E,B){var H=u.toString();u=this.g[H],u||(u=this.g[H]=[],this.h++);var ne=Xr(u,m,E,B);return-1<ne?(m=u[ne],_||(m.fa=!1)):(m=new ze(m,this.src,H,!!E,B),m.fa=_,u.push(m)),m};function Ds(u,m){var _=m.type;if(_ in u.g){var E=u.g[_],B=Array.prototype.indexOf.call(E,m,void 0),H;(H=0<=B)&&Array.prototype.splice.call(E,B,1),H&&(Rt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Xr(u,m,_,E){for(var B=0;B<u.length;++B){var H=u[B];if(!H.da&&H.listener==m&&H.capture==!!_&&H.ha==E)return B}return-1}var Wi="closure_lm_"+(1e6*Math.random()|0),bs={};function ta(u,m,_,E,B){if(Array.isArray(m)){for(var H=0;H<m.length;H++)ta(u,m[H],_,E,B);return null}return _=ia(_),u&&u[ke]?u.K(m,_,y(E)?!!E.capture:!1,B):na(u,m,_,!1,E,B)}function na(u,m,_,E,B,H){if(!m)throw Error("Invalid event type");var ne=y(B)?!!B.capture:!!B,$e=Ls(u);if($e||(u[Wi]=$e=new Tr(u)),_=$e.add(m,_,E,ne,H),_.proxy)return _;if(E=Ol(),_.proxy=E,E.src=u,E.listener=_,u.addEventListener)Ee||(B=ne),B===void 0&&(B=!1),u.addEventListener(m.toString(),E,B);else if(u.attachEvent)u.attachEvent(Sr(m.toString()),E);else if(u.addListener&&u.removeListener)u.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Ol(){function u(_){return m.call(u.src,u.listener,_)}const m=ra;return u}function Os(u,m,_,E,B){if(Array.isArray(m))for(var H=0;H<m.length;H++)Os(u,m[H],_,E,B);else E=y(E)?!!E.capture:!!E,_=ia(_),u&&u[ke]?(u=u.i,m=String(m).toString(),m in u.g&&(H=u.g[m],_=Xr(H,_,E,B),-1<_&&(Rt(H[_]),Array.prototype.splice.call(H,_,1),H.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ls(u))&&(m=u.g[m.toString()],u=-1,m&&(u=Xr(m,_,E,B)),(_=-1<u?m[u]:null)&&Ir(_))}function Ir(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[ke])Ds(m.i,u);else{var _=u.type,E=u.proxy;m.removeEventListener?m.removeEventListener(_,E,u.capture):m.detachEvent?m.detachEvent(Sr(_),E):m.addListener&&m.removeListener&&m.removeListener(E),(_=Ls(m))?(Ds(_,u),_.h==0&&(_.src=null,m[Wi]=null)):Rt(u)}}}function Sr(u){return u in bs?bs[u]:bs[u]="on"+u}function ra(u,m){if(u.da)u=!0;else{m=new Te(m,this);var _=u.listener,E=u.ha||u.src;u.fa&&Ir(u),u=_.call(E,m)}return u}function Ls(u){return u=u[Wi],u instanceof Tr?u:null}var Vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ia(u){return typeof u=="function"?u:(u[Vs]||(u[Vs]=function(m){return u.handleEvent(m)}),u[Vs])}function gt(){K.call(this),this.i=new Tr(this),this.M=this,this.F=null}F(gt,K),gt.prototype[ke]=!0,gt.prototype.removeEventListener=function(u,m,_,E){Os(this,u,m,_,E)};function yt(u,m){var _,E=u.F;if(E)for(_=[];E;E=E.F)_.push(E);if(u=u.M,E=m.type||m,typeof m=="string")m=new ue(m,u);else if(m instanceof ue)m.target=m.target||u;else{var B=m;m=new ue(E,u),A(m,B)}if(B=!0,_)for(var H=_.length-1;0<=H;H--){var ne=m.g=_[H];B=Rr(ne,E,!0,m)&&B}if(ne=m.g=u,B=Rr(ne,E,!0,m)&&B,B=Rr(ne,E,!1,m)&&B,_)for(H=0;H<_.length;H++)ne=m.g=_[H],B=Rr(ne,E,!1,m)&&B}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],E=0;E<_.length;E++)Rt(_[E]);delete u.g[m],u.h--}}this.F=null},gt.prototype.K=function(u,m,_,E){return this.i.add(String(u),m,!1,_,E)},gt.prototype.L=function(u,m,_,E){return this.i.add(String(u),m,!0,_,E)};function Rr(u,m,_,E){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var B=!0,H=0;H<m.length;++H){var ne=m[H];if(ne&&!ne.da&&ne.capture==_){var $e=ne.listener,_t=ne.ha||ne.src;ne.fa&&Ds(u.i,ne),B=$e.call(_t,E)!==!1&&B}}return B&&!E.defaultPrevented}function sa(u,m,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function Jr(u){u.g=sa(()=>{u.g=null,u.i&&(u.i=!1,Jr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Ki extends K{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Jr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gi(u){K.call(this),this.h=u,this.g={}}F(Gi,K);var oa=[];function aa(u){me(u.g,function(m,_){this.g.hasOwnProperty(_)&&Ir(m)},u),u.g={}}Gi.prototype.N=function(){Gi.aa.N.call(this),aa(this)},Gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var la=d.JSON.stringify,ua=d.JSON.parse,ca=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Qi(){}Qi.prototype.h=null;function Ms(u){return u.h||(u.h=u.i())}function Fs(){}var wn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function tr(){ue.call(this,"d")}F(tr,ue);function Us(){ue.call(this,"c")}F(Us,ue);var nr={},ha=null;function Yi(){return ha=ha||new gt}nr.La="serverreachability";function da(u){ue.call(this,nr.La,u)}F(da,ue);function Cr(u){const m=Yi();yt(m,new da(m))}nr.STAT_EVENT="statevent";function fa(u,m){ue.call(this,nr.STAT_EVENT,u),this.stat=m}F(fa,ue);function lt(u){const m=Yi();yt(m,new fa(m,u))}nr.Ma="timingevent";function Bs(u,m){ue.call(this,nr.Ma,u),this.size=m}F(Bs,ue);function bn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Xi(){this.g=!0}Xi.prototype.xa=function(){this.g=!1};function Ji(u,m,_,E,B,H){u.info(function(){if(u.g)if(H)for(var ne="",$e=H.split("&"),_t=0;_t<$e.length;_t++){var Ve=$e[_t].split("=");if(1<Ve.length){var Ct=Ve[0];Ve=Ve[1];var ht=Ct.split("_");ne=2<=ht.length&&ht[1]=="type"?ne+(Ct+"="+Ve+"&"):ne+(Ct+"=redacted&")}}else ne=null;else ne=H;return"XMLHTTP REQ ("+E+") [attempt "+B+"]: "+m+`
`+_+`
`+ne})}function zs(u,m,_,E,B,H,ne){u.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+B+"]: "+m+`
`+_+`
`+H+" "+ne})}function On(u,m,_,E){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+hh(u,_)+(E?" "+E:"")})}function pa(u,m){u.info(function(){return"TIMEOUT: "+m})}Xi.prototype.info=function(){};function hh(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var E=_[u];if(!(2>E.length)){var B=E[1];if(Array.isArray(B)&&!(1>B.length)){var H=B[0];if(H!="noop"&&H!="stop"&&H!="close")for(var ne=1;ne<B.length;ne++)B[ne]=""}}}}return la(_)}catch{return m}}var js={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ll={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ln;function Zi(){}F(Zi,Qi),Zi.prototype.g=function(){return new XMLHttpRequest},Zi.prototype.i=function(){return{}},Ln=new Zi;function Vn(u,m,_,E){this.j=u,this.i=m,this.l=_,this.R=E||1,this.U=new Gi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vl}function Vl(){this.i=null,this.g="",this.h=!1}var ma={},$s={};function qs(u,m,_){u.L=1,u.v=ri(hn(m)),u.m=_,u.P=!0,ga(u,null)}function ga(u,m){u.F=Date.now(),He(u),u.A=hn(u.v);var _=u.A,E=u.R;Array.isArray(E)||(E=[String(E)]),si(_.i,"t",E),u.C=0,_=u.j.J,u.h=new Vl,u.g=eu(u.j,_?m:null,!u.m),0<u.O&&(u.M=new Ki(I(u.Y,u,u.g),u.O)),m=u.U,_=u.g,E=u.ca;var B="readystatechange";Array.isArray(B)||(B&&(oa[0]=B.toString()),B=oa);for(var H=0;H<B.length;H++){var ne=ta(_,B[H],E||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?S(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),Cr(),Ji(u.i,u.u,u.A,u.l,u.R,u.m)}Vn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Zt(u)==3?m.j():this.Y(u)},Vn.prototype.Y=function(u){try{if(u==this.g)e:{const ht=Zt(this.g);var m=this.g.Ba();const In=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||Ta(this.g)))){this.J||ht!=4||m==7||(m==8||0>=In?Cr(3):Cr(2)),es(this);var _=this.g.Z();this.X=_;t:if(Ml(this)){var E=Ta(this.g);u="";var B=E.length,H=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Zr(this);var ne="";break t}this.h.i=new d.TextDecoder}for(m=0;m<B;m++)this.h.h=!0,u+=this.h.i.decode(E[m],{stream:!(H&&m==B-1)});E.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,zs(this.i,this.u,this.A,this.l,this.R,ht,_),this.o){if(this.T&&!this.K){t:{if(this.g){var $e,_t=this.g;if(($e=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J($e)){var Ve=$e;break t}}Ve=null}if(_=Ve)On(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,_);else{this.o=!1,this.s=3,lt(12),En(this),Zr(this);break e}}if(this.P){_=!0;let fn;for(;!this.J&&this.C<ne.length;)if(fn=dh(this,ne),fn==$s){ht==4&&(this.s=4,lt(14),_=!1),On(this.i,this.l,null,"[Incomplete Response]");break}else if(fn==ma){this.s=4,lt(15),On(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else On(this.i,this.l,fn,null),ya(this,fn);if(Ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||ne.length!=0||this.h.h||(this.s=1,lt(16),_=!1),this.o=this.o&&_,!_)On(this.i,this.l,ne,"[Invalid Chunked Response]"),En(this),Zr(this);else if(0<ne.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Sa(Ct),Ct.M=!0,lt(11))}}else On(this.i,this.l,ne,null),ya(this,ne);ht==4&&En(this),this.o&&!this.J&&(ht==4?to(this.j,this):(this.o=!1,He(this)))}else Ys(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),En(this),Zr(this)}}}catch{}finally{}};function Ml(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function dh(u,m){var _=u.C,E=m.indexOf(`
`,_);return E==-1?$s:(_=Number(m.substring(_,E)),isNaN(_)?ma:(E+=1,E+_>m.length?$s:(m=m.slice(E,E+_),u.C=E+_,m)))}Vn.prototype.cancel=function(){this.J=!0,En(this)};function He(u){u.S=Date.now()+u.I,Fl(u,u.I)}function Fl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=bn(I(u.ba,u),m)}function es(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Vn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(pa(this.i,this.A),this.L!=2&&(Cr(),lt(17)),En(this),this.s=2,Zr(this)):Fl(this,this.S-u)};function Zr(u){u.j.G==0||u.J||to(u.j,u)}function En(u){es(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,aa(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ya(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||Wt(_.h,u))){if(!u.K&&Wt(_.h,u)&&_.G==3){try{var E=_.Da.g.parse(m)}catch{E=null}if(Array.isArray(E)&&E.length==3){var B=E;if(B[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)eo(_),zn(_);else break e;Zs(_),lt(18)}}else _.za=B[1],0<_.za-_.T&&37500>B[2]&&_.F&&_.v==0&&!_.C&&(_.C=bn(I(_.Za,_),6e3));if(1>=Bl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Nr(_,11)}else if((u.K||_.g==u)&&eo(_),!J(m))for(B=_.Da.g.parse(m),m=0;m<B.length;m++){let Ve=B[m];if(_.T=Ve[0],Ve=Ve[1],_.G==2)if(Ve[0]=="c"){_.K=Ve[1],_.ia=Ve[2];const Ct=Ve[3];Ct!=null&&(_.la=Ct,_.j.info("VER="+_.la));const ht=Ve[4];ht!=null&&(_.Aa=ht,_.j.info("SVER="+_.Aa));const In=Ve[5];In!=null&&typeof In=="number"&&0<In&&(E=1.5*In,_.L=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const fn=u.g;if(fn){const as=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(as){var H=E.h;H.g||as.indexOf("spdy")==-1&&as.indexOf("quic")==-1&&as.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(_a(H,H.h),H.h=null))}if(E.D){const ro=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(E.ya=ro,qe(E.I,E.D,ro))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),E=_;var ne=u;if(E.qa=Zl(E,E.J?E.ia:null,E.W),ne.K){zl(E.h,ne);var $e=ne,_t=E.L;_t&&($e.I=_t),$e.B&&(es($e),He($e)),E.g=ne}else os(E);0<_.i.length&&or(_)}else Ve[0]!="stop"&&Ve[0]!="close"||Nr(_,7);else _.G==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?Nr(_,7):Dt(_):Ve[0]!="noop"&&_.l&&_.l.ta(Ve),_.v=0)}}Cr(4)}catch{}}var Ul=class{constructor(u,m){this.g=u,this.map=m}};function ts(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function cn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Bl(u){return u.h?1:u.g?u.g.size:0}function Wt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function _a(u,m){u.g?u.g.add(m):u.h=m}function zl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}ts.prototype.cancel=function(){if(this.i=jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function jl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return j(u.i)}function Hs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,E=0;E<_;E++)m.push(u[E]);return m}m=[],_=0;for(E in u)m[_++]=u[E];return m}function Ws(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const E in u)m[_++]=E;return m}}}function ei(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Ws(u),E=Hs(u),B=E.length,H=0;H<B;H++)m.call(void 0,E[H],_&&_[H],u)}var ns=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fh(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var E=u[_].indexOf("="),B=null;if(0<=E){var H=u[_].substring(0,E);B=u[_].substring(E+1)}else H=u[_];m(H,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function Ar(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ar){this.h=u.h,rs(this,u.j),this.o=u.o,this.g=u.g,ti(this,u.s),this.l=u.l;var m=u.i,_=new rr;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),ni(this,_),this.m=u.m}else u&&(m=String(u).match(ns))?(this.h=!1,rs(this,m[1]||"",!0),this.o=Oe(m[2]||""),this.g=Oe(m[3]||"",!0),ti(this,m[4]),this.l=Oe(m[5]||"",!0),ni(this,m[6]||"",!0),this.m=Oe(m[7]||"")):(this.h=!1,this.i=new rr(null,this.h))}Ar.prototype.toString=function(){var u=[],m=this.j;m&&u.push(ii(m,Ks,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(ii(m,Ks,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(ii(_,_.charAt(0)=="/"?Hl:ql,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",ii(_,va)),u.join("")};function hn(u){return new Ar(u)}function rs(u,m,_){u.j=_?Oe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function ti(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function ni(u,m,_){m instanceof rr?(u.i=m,ir(u.i,u.h)):(_||(m=ii(m,Wl)),u.i=new rr(m,u.h))}function qe(u,m,_){u.i.set(m,_)}function ri(u){return qe(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Oe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function ii(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,$l),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function $l(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ks=/[#\/\?@]/g,ql=/[#\?:]/g,Hl=/[#\?]/g,Wl=/[#\?@]/g,va=/#/g;function rr(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Nt(u){u.g||(u.g=new Map,u.h=0,u.i&&fh(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}n=rr.prototype,n.add=function(u,m){Nt(this),this.i=null,u=Tn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function Mn(u,m){Nt(u),m=Tn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Fn(u,m){return Nt(u),m=Tn(u,m),u.g.has(m)}n.forEach=function(u,m){Nt(this),this.g.forEach(function(_,E){_.forEach(function(B){u.call(m,B,E,this)},this)},this)},n.na=function(){Nt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let E=0;E<m.length;E++){const B=u[E];for(let H=0;H<B.length;H++)_.push(m[E])}return _},n.V=function(u){Nt(this);let m=[];if(typeof u=="string")Fn(this,u)&&(m=m.concat(this.g.get(Tn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},n.set=function(u,m){return Nt(this),this.i=null,u=Tn(this,u),Fn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function si(u,m,_){Mn(u,m),0<_.length&&(u.i=null,u.g.set(Tn(u,m),j(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var E=m[_];const H=encodeURIComponent(String(E)),ne=this.V(E);for(E=0;E<ne.length;E++){var B=H;ne[E]!==""&&(B+="="+encodeURIComponent(String(ne[E]))),u.push(B)}}return this.i=u.join("&")};function Tn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function ir(u,m){m&&!u.j&&(Nt(u),u.i=null,u.g.forEach(function(_,E){var B=E.toLowerCase();E!=B&&(Mn(this,E),si(this,B,_))},u)),u.j=m}function ph(u,m){const _=new Xi;if(d.Image){const E=new Image;E.onload=x(Jt,_,"TestLoadImage: loaded",!0,m,E),E.onerror=x(Jt,_,"TestLoadImage: error",!1,m,E),E.onabort=x(Jt,_,"TestLoadImage: abort",!1,m,E),E.ontimeout=x(Jt,_,"TestLoadImage: timeout",!1,m,E),d.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=u}else m(!1)}function Kl(u,m){const _=new Xi,E=new AbortController,B=setTimeout(()=>{E.abort(),Jt(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:E.signal}).then(H=>{clearTimeout(B),H.ok?Jt(_,"TestPingServer: ok",!0,m):Jt(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(B),Jt(_,"TestPingServer: error",!1,m)})}function Jt(u,m,_,E,B){try{B&&(B.onload=null,B.onerror=null,B.onabort=null,B.ontimeout=null),E(_)}catch{}}function mh(){this.g=new ca}function Gl(u,m,_){const E=_||"";try{ei(u,function(B,H){let ne=B;y(B)&&(ne=la(B)),m.push(E+H+"="+encodeURIComponent(ne))})}catch(B){throw m.push(E+"type="+encodeURIComponent("_badmap")),B}}function kr(u){this.l=u.Ub||null,this.j=u.eb||!1}F(kr,Qi),kr.prototype.g=function(){return new is(this.l,this.j)},kr.prototype.i=function(u){return function(){return u}}({});function is(u,m){gt.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(is,gt),n=is.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Bn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ql(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ql(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Un(this):Bn(this),this.readyState==3&&Ql(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Un(this))},n.Qa=function(u){this.g&&(this.response=u,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Bn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function Bn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Pr(u){let m="";return me(u,function(_,E){m+=E,m+=":",m+=_,m+=`\r
`}),m}function oi(u,m,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=Pr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):qe(u,m,_))}function Ye(u){gt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Ye,gt);var gh=/^https?$/i,wa=["POST","PUT"];n=Ye.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ln.g(),this.v=this.o?Ms(this.o):Ms(Ln),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(H){ss(this,H);return}if(u=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var B in E)_.set(B,E[B]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const H of E.keys())_.set(H,E.get(H));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(H=>H.toLowerCase()=="content-type"),B=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(wa,m,void 0))||E||B||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,ne]of _)this.g.setRequestHeader(H,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Qs(this),this.u=!0,this.g.send(u),this.u=!1}catch(H){ss(this,H)}};function ss(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Gs(u),dn(u)}function Gs(u){u.A||(u.A=!0,yt(u,"complete"),yt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,yt(this,"complete"),yt(this,"abort"),dn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),dn(this,!0)),Ye.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ea(this):this.bb())},n.bb=function(){Ea(this)};function Ea(u){if(u.h&&typeof c<"u"&&(!u.v[1]||Zt(u)!=4||u.Z()!=2)){if(u.u&&Zt(u)==4)sa(u.Ea,0,u);else if(yt(u,"readystatechange"),Zt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var E;if(E=ne===0){var B=String(u.D).match(ns)[1]||null;!B&&d.self&&d.self.location&&(B=d.self.location.protocol.slice(0,-1)),E=!gh.test(B?B.toLowerCase():"")}_=E}if(_)yt(u,"complete"),yt(u,"success");else{u.m=6;try{var H=2<Zt(u)?u.g.statusText:""}catch{H=""}u.l=H+" ["+u.Z()+"]",Gs(u)}}finally{dn(u)}}}}function dn(u,m){if(u.g){Qs(u);const _=u.g,E=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||yt(u,"ready");try{_.onreadystatechange=E}catch{}}}function Qs(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Zt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ua(m)}};function Ta(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ys(u){const m={};u=(u.g&&2<=Zt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<u.length;E++){if(J(u[E]))continue;var _=N(u[E]);const B=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const H=m[B]||[];m[B]=H,H.push(_)}P(m,function(E){return E.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function Ia(u){this.Aa=0,this.i=[],this.j=new Xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,u),this.cb=sr("retryDelaySeedMs",1e4,u),this.Wa=sr("forwardChannelMaxRetries",2,u),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new ts(u&&u.concurrentRequestLimit),this.Da=new mh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ia.prototype,n.la=8,n.G=1,n.connect=function(u,m,_,E){lt(0),this.W=u,this.H=m||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.I=Zl(this,null,this.W),or(this)};function Dt(u){if(Xs(u),u.G==3){var m=u.U++,_=hn(u.I);if(qe(_,"SID",u.K),qe(_,"RID",m),qe(_,"TYPE","terminate"),xr(u,_),m=new Vn(u,u.j,m),m.L=2,m.v=ri(hn(_)),_=!1,d.navigator&&d.navigator.sendBeacon)try{_=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&d.Image&&(new Image().src=m.v,_=!0),_||(m.g=eu(m.j,null),m.g.ea(m.v)),m.F=Date.now(),He(m)}Jl(u)}function zn(u){u.g&&(Sa(u),u.g.cancel(),u.g=null)}function Xs(u){zn(u),u.u&&(d.clearTimeout(u.u),u.u=null),eo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function or(u){if(!cn(u.h)&&!u.s){u.s=!0;var m=u.Ga;Be||ae(),se||(Be(),se=!0),ge.add(m,u),u.B=0}}function yh(u,m){return Bl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=bn(I(u.Ga,u,m),Xl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const B=new Vn(this,this.j,u);let H=this.o;if(this.S&&(H?(H=S(H),A(H,this.S)):H=this.S),this.m!==null||this.O||(B.H=H,H=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(m+=E,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=ai(this,B,m),_=hn(this.I),qe(_,"RID",u),qe(_,"CVER",22),this.D&&qe(_,"X-HTTP-Session-Id",this.D),xr(this,_),H&&(this.O?m="headers="+encodeURIComponent(String(Pr(H)))+"&"+m:this.m&&oi(_,this.m,H)),_a(this.h,B),this.Ua&&qe(_,"TYPE","init"),this.P?(qe(_,"$req",m),qe(_,"SID","null"),B.T=!0,qs(B,_,null)):qs(B,_,m),this.G=2}}else this.G==3&&(u?Js(this,u):this.i.length==0||cn(this.h)||Js(this))};function Js(u,m){var _;m?_=m.l:_=u.U++;const E=hn(u.I);qe(E,"SID",u.K),qe(E,"RID",_),qe(E,"AID",u.T),xr(u,E),u.m&&u.o&&oi(E,u.m,u.o),_=new Vn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=ai(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),_a(u.h,_),qs(_,E,m)}function xr(u,m){u.H&&me(u.H,function(_,E){qe(m,E,_)}),u.l&&ei({},function(_,E){qe(m,E,_)})}function ai(u,m,_){_=Math.min(u.i.length,_);var E=u.l?I(u.l.Na,u.l,u):null;e:{var B=u.i;let H=-1;for(;;){const ne=["count="+_];H==-1?0<_?(H=B[0].g,ne.push("ofs="+H)):H=0:ne.push("ofs="+H);let $e=!0;for(let _t=0;_t<_;_t++){let Ve=B[_t].g;const Ct=B[_t].map;if(Ve-=H,0>Ve)H=Math.max(0,B[_t].g-100),$e=!1;else try{Gl(Ct,ne,"req"+Ve+"_")}catch{E&&E(Ct)}}if($e){E=ne.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,E}function os(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;Be||ae(),se||(Be(),se=!0),ge.add(m,u),u.v=0}}function Zs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=bn(I(u.Fa,u),Xl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Yl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=bn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),zn(this),Yl(this))};function Sa(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Yl(u){u.g=new Vn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=hn(u.qa);qe(m,"RID","rpc"),qe(m,"SID",u.K),qe(m,"AID",u.T),qe(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&qe(m,"TO",u.ja),qe(m,"TYPE","xmlhttp"),xr(u,m),u.m&&u.o&&oi(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=ri(hn(m)),_.m=null,_.P=!0,ga(_,u)}n.Za=function(){this.C!=null&&(this.C=null,zn(this),Zs(this),lt(19))};function eo(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function to(u,m){var _=null;if(u.g==m){eo(u),Sa(u),u.g=null;var E=2}else if(Wt(u.h,m))_=m.D,zl(u.h,m),E=1;else return;if(u.G!=0){if(m.o)if(E==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var B=u.B;E=Yi(),yt(E,new Bs(E,_)),or(u)}else os(u);else if(B=m.s,B==3||B==0&&0<m.X||!(E==1&&yh(u,m)||E==2&&Zs(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),B){case 1:Nr(u,5);break;case 4:Nr(u,10);break;case 3:Nr(u,6);break;default:Nr(u,2)}}}function Xl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function Nr(u,m){if(u.j.info("Error code "+m),m==2){var _=I(u.fb,u),E=u.Xa;const B=!E;E=new Ar(E||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||rs(E,"https"),ri(E),B?ph(E.toString(),_):Kl(E.toString(),_)}else lt(2);u.G=0,u.l&&u.l.sa(m),Jl(u),Xs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Jl(u){if(u.G=0,u.ka=[],u.l){const m=jl(u.h);(m.length!=0||u.i.length!=0)&&(V(u.ka,m),V(u.ka,u.i),u.h.i.length=0,j(u.i),u.i.length=0),u.l.ra()}}function Zl(u,m,_){var E=_ instanceof Ar?hn(_):new Ar(_);if(E.g!="")m&&(E.g=m+"."+E.g),ti(E,E.s);else{var B=d.location;E=B.protocol,m=m?m+"."+B.hostname:B.hostname,B=+B.port;var H=new Ar(null);E&&rs(H,E),m&&(H.g=m),B&&ti(H,B),_&&(H.l=_),E=H}return _=u.D,m=u.ya,_&&m&&qe(E,_,m),qe(E,"VER",u.la),xr(u,E),E}function eu(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ye(new kr({eb:_})):new Ye(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ra(){}n=Ra.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function no(){}no.prototype.g=function(u,m){return new Kt(u,m)};function Kt(u,m){gt.call(this),this.g=new Ia(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!J(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!J(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new ar(this)}F(Kt,gt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){Dt(this.g)},Kt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=la(u),u=_);m.i.push(new Ul(m.Ya++,u)),m.G==3&&or(m)},Kt.prototype.N=function(){this.g.l=null,delete this.j,Dt(this.g),delete this.g,Kt.aa.N.call(this)};function tu(u){tr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}F(tu,tr);function nu(){Us.call(this),this.status=1}F(nu,Us);function ar(u){this.g=u}F(ar,Ra),ar.prototype.ua=function(){yt(this.g,"a")},ar.prototype.ta=function(u){yt(this.g,new tu(u))},ar.prototype.sa=function(u){yt(this.g,new nu)},ar.prototype.ra=function(){yt(this.g,"b")},no.prototype.createWebChannel=no.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,qv=function(){return new no},$v=function(){return Yi()},jv=nr,mf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},js.NO_ERROR=0,js.TIMEOUT=8,js.HTTP_ERROR=6,hc=js,Ll.COMPLETE="complete",zv=Ll,Fs.EventType=wn,wn.OPEN="a",wn.CLOSE="b",wn.ERROR="c",wn.MESSAGE="d",gt.prototype.listen=gt.prototype.K,tl=Fs,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,Bv=Ye}).apply(typeof Ju<"u"?Ju:typeof self<"u"?self:typeof window<"u"?window:{});const Dy="@firebase/firestore";/**
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
 */let Go="11.2.0";/**
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
 */const Rs=new Bf("@firebase/firestore");function Ro(){return Rs.logLevel}function le(n,...e){if(Rs.logLevel<=Ne.DEBUG){const t=e.map(Jf);Rs.debug(`Firestore (${Go}): ${n}`,...t)}}function Gr(n,...e){if(Rs.logLevel<=Ne.ERROR){const t=e.map(Jf);Rs.error(`Firestore (${Go}): ${n}`,...t)}}function Lo(n,...e){if(Rs.logLevel<=Ne.WARN){const t=e.map(Jf);Rs.warn(`Firestore (${Go}): ${n}`,...t)}}function Jf(n){if(typeof n=="string")return n;try{/**
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
 */function Re(n="Unexpected state"){const e=`FIRESTORE (${Go}) INTERNAL ASSERTION FAILED: `+n;throw Gr(e),new Error(e)}function je(n,e){n||Re()}function Ae(n,e){return n}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Er{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Hv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t($t.UNAUTHENTICATED))}shutdown(){}}class lA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class uA{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){je(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new qr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new qr,e.enqueueRetryable(()=>o(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{le("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(le("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new qr)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(le("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(je(typeof i.accessToken=="string"),new Hv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return je(e===null||typeof e=="string"),new $t(e)}}class cA{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class hA{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new cA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t($t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){je(this.o===void 0);const i=l=>{l.error!=null&&le("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,le("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{le("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):le("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(je(typeof t.token=="string"),this.R=t.token,new dA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pA(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class Wv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=pA(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Le(n,e){return n<e?-1:n>e?1:0}function Vo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
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
 */class Tt{static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Tt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new he(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new Tt(0,0))}static max(){return new Ce(new Tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class dr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Re(),i===void 0?i=e.length-t:i>e.length-t&&Re(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return dr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=dr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=dr.isNumericId(e),o=dr.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?dr.extractNumericId(e).compare(dr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ni.fromString(e.substring(4,e.length-2))}}class Qe extends dr{construct(e,t,i){return new Qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new he(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Qe(t)}static emptyPath(){return new Qe([])}}const mA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Vt extends dr{construct(e,t,i){return new Vt(e,t,i)}static isValidIdentifier(e){return mA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Vt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new he(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new he(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new he(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(c=!c,o++):d!=="."||c?(i+=d,o++):(l(),o++)}if(l(),c)throw new he(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Vt(t)}static emptyPath(){return new Vt([])}}/**
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
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Qe.fromString(e))}static fromName(e){return new ye(Qe.fromString(e).popFirst(5))}static empty(){return new ye(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Qe(e.slice()))}}function gA(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ce.fromTimestamp(i===1e9?new Tt(t+1,0):new Tt(t,i));return new Vi(o,ye.empty(),e)}function yA(n){return new Vi(n.readTime,n.key,-1)}class Vi{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Vi(Ce.min(),ye.empty(),-1)}static max(){return new Vi(Ce.max(),ye.empty(),-1)}}function _A(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
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
 */const vA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qo(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==vA)throw n;le("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class Q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Q((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Q?t:Q.resolve(t)}catch(t){return Q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Q.reject(t)}static resolve(e){return new Q((t,i)=>{t(e)})}static reject(e){return new Q((t,i)=>{i(e)})}static waitFor(e){return new Q((t,i)=>{let o=0,l=0,c=!1;e.forEach(d=>{++o,d.next(()=>{++l,c&&l===o&&t()},p=>i(p))}),c=!0,l===o&&t()})}static or(e){let t=Q.resolve(!1);for(const i of e)t=t.next(o=>o?Q.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new Q((i,o)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(v=>{c[y]=v,++d,d===l&&i(c)},v=>o(v))}})}static doWhile(e,t){return new Q((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function EA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class qc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}qc.oe=-1;function Hc(n){return n==null}function Rc(n){return n===0&&1/n==-1/0}function TA(n){return typeof n=="number"&&Number.isInteger(n)&&!Rc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function IA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=by(e)),e=SA(n.get(t),e);return by(e)}function SA(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function by(n){return n+""}/**
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
 */function Oy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Kv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class rt{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new rt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new rt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zu(this.root,e,this.comparator,!0)}}class Zu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Lt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Re();const e=this.left.check();if(e!==this.right.check())throw Re();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw Re()}get value(){throw Re()}get color(){throw Re()}get left(){throw Re()}get right(){throw Re()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ly(this.data.getIterator())}getIteratorFrom(e){return new Ly(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new It(this.comparator);return t.data=e,t}}class Ly{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yn{constructor(e){this.fields=e,e.sort(Vt.comparator)}static empty(){return new yn([])}unionWith(e){let t=new It(Vt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Gv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Gv("Invalid base64 string: "+l):l}}(e);return new Mt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let c=0;c<o.length;++c)l+=String.fromCharCode(o[c]);return l}(e);return new Mt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const RA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mi(n){if(je(!!n),typeof n=="string"){let e=0;const t=RA.exec(n);if(je(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fi(n){return typeof n=="string"?Mt.fromBase64String(n):Mt.fromUint8Array(n)}/**
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
 */function Zf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Wc(n){const e=n.mapValue.fields.__previous_value__;return Zf(e)?Wc(e):e}function ml(n){const e=Mi(n.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
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
 */class CA{constructor(e,t,i,o,l,c,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class gl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ec={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ui(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zf(n)?4:kA(n)?9007199254740991:AA(n)?10:11:Re()}function wr(n,e){if(n===e)return!0;const t=Ui(n);if(t!==Ui(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ml(n).isEqual(ml(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const c=Mi(o.timestampValue),d=Mi(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return Fi(o.bytesValue).isEqual(Fi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return ct(o.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return ct(o.integerValue)===ct(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const c=ct(o.doubleValue),d=ct(l.doubleValue);return c===d?Rc(c)===Rc(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Vo(n.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:case 11:return function(o,l){const c=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Oy(c)!==Oy(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!wr(c[p],d[p])))return!1;return!0}(n,e);default:return Re()}}function yl(n,e){return(n.values||[]).find(t=>wr(t,e))!==void 0}function Mo(n,e){if(n===e)return 0;const t=Ui(n),i=Ui(e);if(t!==i)return Le(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=ct(l.integerValue||l.doubleValue),p=ct(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Vy(n.timestampValue,e.timestampValue);case 4:return Vy(ml(n),ml(e));case 5:return Le(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Fi(l),p=Fi(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let y=0;y<d.length&&y<p.length;y++){const v=Le(d[y],p[y]);if(v!==0)return v}return Le(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Le(ct(l.latitude),ct(c.latitude));return d!==0?d:Le(ct(l.longitude),ct(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return My(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,y,v;const T=l.fields||{},I=c.fields||{},x=(d=T.value)===null||d===void 0?void 0:d.arrayValue,F=(p=I.value)===null||p===void 0?void 0:p.arrayValue,j=Le(((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0,((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0);return j!==0?j:My(x,F)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===ec.mapValue&&c===ec.mapValue)return 0;if(l===ec.mapValue)return 1;if(c===ec.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=c.fields||{},v=Object.keys(y);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const I=Le(p[T],v[T]);if(I!==0)return I;const x=Mo(d[p[T]],y[v[T]]);if(x!==0)return x}return Le(p.length,v.length)}(n.mapValue,e.mapValue);default:throw Re()}}function Vy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=Mi(n),i=Mi(e),o=Le(t.seconds,i.seconds);return o!==0?o:Le(t.nanos,i.nanos)}function My(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Mo(t[o],i[o]);if(l)return l}return Le(t.length,i.length)}function Fo(n){return gf(n)}function gf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Mi(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Fi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ye.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=gf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const c of i)l?l=!1:o+=",",o+=`${c}:${gf(t.fields[c])}`;return o+"}"}(n.mapValue):Re()}function dc(n){switch(Ui(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wc(n);return e?16+dc(e):16;case 5:return 2*n.stringValue.length;case 6:return Fi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+dc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return qi(i.fields,(l,c)=>{o+=l.length+dc(c)}),o}(n.mapValue);default:throw Re()}}function Fy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function yf(n){return!!n&&"integerValue"in n}function ep(n){return!!n&&"arrayValue"in n}function Uy(n){return!!n&&"nullValue"in n}function By(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fc(n){return!!n&&"mapValue"in n}function AA(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ol(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return qi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ol(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ol(n.arrayValue.values[t]);return e}return Object.assign({},n)}function kA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!fc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ol(t)}setAll(e){let t=Vt.emptyPath(),i={},o=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}c?i[d.lastSegment()]=ol(c):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());fc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];fc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){qi(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new un(ol(this.value))}}function Qv(n){const e=[];return qi(n.fields,(t,i)=>{const o=new Vt([t]);if(fc(i)){const l=Qv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const c of l)e.push(o.child(c))}else e.push(o)}),new yn(e)}/**
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
 */class qt{constructor(e,t,i,o,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new qt(e,0,Ce.min(),Ce.min(),Ce.min(),un.empty(),0)}static newFoundDocument(e,t,i,o){return new qt(e,1,t,Ce.min(),i,o,0)}static newNoDocument(e,t){return new qt(e,2,t,Ce.min(),Ce.min(),un.empty(),0)}static newUnknownDocument(e,t){return new qt(e,3,t,Ce.min(),Ce.min(),un.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Cc{constructor(e,t){this.position=e,this.inclusive=t}}function zy(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],c=n.position[o];if(l.field.isKeyField()?i=ye.comparator(ye.fromName(c.referenceValue),t.key):i=Mo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function jy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ac{constructor(e,t="asc"){this.field=e,this.dir=t}}function PA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Yv{}class pt extends Yv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new NA(e,t,i):t==="array-contains"?new OA(e,i):t==="in"?new LA(e,i):t==="not-in"?new VA(e,i):t==="array-contains-any"?new MA(e,i):new pt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new DA(e,i):new bA(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Mo(t,this.value)):t!==null&&Ui(this.value)===Ui(t)&&this.matchesComparison(Mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends Yv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Xn(e,t)}matches(e){return Xv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xv(n){return n.op==="and"}function Jv(n){return xA(n)&&Xv(n)}function xA(n){for(const e of n.filters)if(e instanceof Xn)return!1;return!0}function _f(n){if(n instanceof pt)return n.field.canonicalString()+n.op.toString()+Fo(n.value);if(Jv(n))return n.filters.map(e=>_f(e)).join(",");{const e=n.filters.map(t=>_f(t)).join(",");return`${n.op}(${e})`}}function Zv(n,e){return n instanceof pt?function(i,o){return o instanceof pt&&i.op===o.op&&i.field.isEqual(o.field)&&wr(i.value,o.value)}(n,e):n instanceof Xn?function(i,o){return o instanceof Xn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,c,d)=>l&&Zv(c,o.filters[d]),!0):!1}(n,e):void Re()}function ew(n){return n instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${Fo(t.value)}`}(n):n instanceof Xn?function(t){return t.op.toString()+" {"+t.getFilters().map(ew).join(" ,")+"}"}(n):"Filter"}class NA extends pt{constructor(e,t,i){super(e,t,i),this.key=ye.fromName(i.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class DA extends pt{constructor(e,t){super(e,"in",t),this.keys=tw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class bA extends pt{constructor(e,t){super(e,"not-in",t),this.keys=tw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function tw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ye.fromName(i.referenceValue))}class OA extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ep(t)&&yl(t.arrayValue,this.value)}}class LA extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yl(this.value.arrayValue,t)}}class VA extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(yl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!yl(this.value.arrayValue,t)}}class MA extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ep(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>yl(this.value.arrayValue,i))}}/**
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
 */class FA{constructor(e,t=null,i=[],o=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=c,this.endAt=d,this.ue=null}}function $y(n,e=null,t=[],i=[],o=null,l=null,c=null){return new FA(n,e,t,i,o,l,c)}function tp(n){const e=Ae(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>_f(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Hc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Fo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Fo(i)).join(",")),e.ue=t}return e.ue}function np(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!PA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Zv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!jy(n.startAt,e.startAt)&&jy(n.endAt,e.endAt)}function vf(n){return ye.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Pl{constructor(e,t=null,i=[],o=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function UA(n,e,t,i,o,l,c,d){return new Pl(n,e,t,i,o,l,c,d)}function rp(n){return new Pl(n)}function qy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function nw(n){return n.collectionGroup!==null}function al(n){const e=Ae(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new It(Vt.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Ac(l,i))}),t.has(Vt.keyField().canonicalString())||e.ce.push(new Ac(Vt.keyField(),i))}return e.ce}function _r(n){const e=Ae(n);return e.le||(e.le=BA(e,al(n))),e.le}function BA(n,e){if(n.limitType==="F")return $y(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new Ac(o.field,l)});const t=n.endAt?new Cc(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Cc(n.startAt.position,n.startAt.inclusive):null;return $y(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function wf(n,e){const t=n.filters.concat([e]);return new Pl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ef(n,e,t){return new Pl(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Kc(n,e){return np(_r(n),_r(e))&&n.limitType===e.limitType}function rw(n){return`${tp(_r(n))}|lt:${n.limitType}`}function Co(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>ew(o)).join(", ")}]`),Hc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Fo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Fo(o)).join(",")),`Target(${i})`}(_r(n))}; limitType=${n.limitType})`}function Gc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):ye.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of al(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(c,d,p){const y=zy(c,d,p);return c.inclusive?y<=0:y<0}(i.startAt,al(i),o)||i.endAt&&!function(c,d,p){const y=zy(c,d,p);return c.inclusive?y>=0:y>0}(i.endAt,al(i),o))}(n,e)}function zA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function iw(n){return(e,t)=>{let i=!1;for(const o of al(n)){const l=jA(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function jA(n,e,t){const i=n.field.isKeyField()?ye.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),y=d.data.field(l);return p!==null&&y!==null?Mo(p,y):Re()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Re()}}/**
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
 */class Ps{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){qi(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return Kv(this.inner)}size(){return this.innerSize}}/**
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
 */const $A=new rt(ye.comparator);function Qr(){return $A}const sw=new rt(ye.comparator);function nl(...n){let e=sw;for(const t of n)e=e.insert(t.key,t);return e}function ow(n){let e=sw;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Es(){return ll()}function aw(){return ll()}function ll(){return new Ps(n=>n.toString(),(n,e)=>n.isEqual(e))}const qA=new rt(ye.comparator),HA=new It(ye.comparator);function De(...n){let e=HA;for(const t of n)e=e.add(t);return e}const WA=new It(Le);function KA(){return WA}/**
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
 */function ip(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rc(e)?"-0":e}}function lw(n){return{integerValue:""+n}}function GA(n,e){return TA(e)?lw(e):ip(n,e)}/**
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
 */class Qc{constructor(){this._=void 0}}function QA(n,e,t){return n instanceof kc?function(o,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Zf(l)&&(l=Wc(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}}(t,e):n instanceof Uo?cw(n,e):n instanceof _l?hw(n,e):function(o,l){const c=uw(o,l),d=Hy(c)+Hy(o.Pe);return yf(c)&&yf(o.Pe)?lw(d):ip(o.serializer,d)}(n,e)}function YA(n,e,t){return n instanceof Uo?cw(n,e):n instanceof _l?hw(n,e):t}function uw(n,e){return n instanceof Pc?function(i){return yf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class kc extends Qc{}class Uo extends Qc{constructor(e){super(),this.elements=e}}function cw(n,e){const t=dw(e);for(const i of n.elements)t.some(o=>wr(o,i))||t.push(i);return{arrayValue:{values:t}}}class _l extends Qc{constructor(e){super(),this.elements=e}}function hw(n,e){let t=dw(e);for(const i of n.elements)t=t.filter(o=>!wr(o,i));return{arrayValue:{values:t}}}class Pc extends Qc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Hy(n){return ct(n.integerValue||n.doubleValue)}function dw(n){return ep(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class XA{constructor(e,t){this.field=e,this.transform=t}}function JA(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof Uo&&o instanceof Uo||i instanceof _l&&o instanceof _l?Vo(i.elements,o.elements,wr):i instanceof Pc&&o instanceof Pc?wr(i.Pe,o.Pe):i instanceof kc&&o instanceof kc}(n.transform,e.transform)}class ZA{constructor(e,t){this.version=e,this.transformResults=t}}class Nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yc{}function fw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sp(n.key,Nn.none()):new xl(n.key,n.data,Nn.none());{const t=n.data,i=un.empty();let o=new It(Vt.comparator);for(let l of e.fields)if(!o.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),o=o.add(l)}return new Hi(n.key,i,new yn(o.toArray()),Nn.none())}}function ek(n,e,t){n instanceof xl?function(o,l,c){const d=o.value.clone(),p=Ky(o.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Hi?function(o,l,c){if(!pc(o.precondition,l))return void l.convertToUnknownDocument(c.version);const d=Ky(o.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(pw(o)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function ul(n,e,t,i){return n instanceof xl?function(l,c,d,p){if(!pc(l.precondition,c))return d;const y=l.value.clone(),v=Gy(l.fieldTransforms,p,c);return y.setAll(v),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Hi?function(l,c,d,p){if(!pc(l.precondition,c))return d;const y=Gy(l.fieldTransforms,p,c),v=c.data;return v.setAll(pw(l)),v.setAll(y),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,c,d){return pc(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function tk(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=uw(i.transform,o||null);l!=null&&(t===null&&(t=un.empty()),t.set(i.field,l))}return t||null}function Wy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Vo(i,o,(l,c)=>JA(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xl extends Yc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Hi extends Yc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function pw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Ky(n,e,t){const i=new Map;je(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],c=l.transform,d=e.data.field(l.field);i.set(l.field,YA(c,d,t[o]))}return i}function Gy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,c=t.data.field(o.field);i.set(o.field,QA(l,c,e))}return i}class sp extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nk extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&ek(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ul(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ul(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=aw();return this.mutations.forEach(o=>{const l=e.get(o.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(o.key)?null:d;const p=fw(c,d);p!==null&&i.set(o.key,p),c.isValidDocument()||c.convertToNoDocument(Ce.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),De())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,(t,i)=>Wy(t,i))&&Vo(this.baseMutations,e.baseMutations,(t,i)=>Wy(t,i))}}class op{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){je(e.mutations.length===i.length);let o=function(){return qA}();const l=e.mutations;for(let c=0;c<l.length;c++)o=o.insert(l[c].key,i[c].version);return new op(e,t,i,o)}}/**
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
 */class ik{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ft,Me;function ok(n){switch(n){default:return Re();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function mw(n){if(n===void 0)return Gr("GRPC error has no .code"),Y.UNKNOWN;switch(n){case ft.OK:return Y.OK;case ft.CANCELLED:return Y.CANCELLED;case ft.UNKNOWN:return Y.UNKNOWN;case ft.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ft.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ft.INTERNAL:return Y.INTERNAL;case ft.UNAVAILABLE:return Y.UNAVAILABLE;case ft.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ft.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ft.NOT_FOUND:return Y.NOT_FOUND;case ft.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ft.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ft.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ft.ABORTED:return Y.ABORTED;case ft.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ft.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ft.DATA_LOSS:return Y.DATA_LOSS;default:return Re()}}(Me=ft||(ft={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ak(){return new TextEncoder}/**
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
 */const lk=new Ni([4294967295,4294967295],0);function Qy(n){const e=ak().encode(n),t=new Uv;return t.update(e),new Uint8Array(t.digest())}function Yy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ni([t,i],0),new Ni([o,l],0)]}class ap{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new rl(`Invalid padding: ${t}`);if(i<0)throw new rl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new rl(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new rl(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ni.fromNumber(this.Te)}de(e,t,i){let o=e.add(t.multiply(Ni.fromNumber(i)));return o.compare(lk)===1&&(o=new Ni([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Qy(e),[i,o]=Yy(t);for(let l=0;l<this.hashCount;l++){const c=this.de(i,o,l);if(!this.Ee(c))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new ap(l,o,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Te===0)return;const t=Qy(e),[i,o]=Yy(t);for(let l=0;l<this.hashCount;l++){const c=this.de(i,o,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Xc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Nl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Xc(Ce.min(),o,new rt(Le),Qr(),De())}}class Nl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Nl(i,t,De(),De(),De())}}/**
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
 */class mc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class gw{constructor(e,t){this.targetId=e,this.me=t}}class yw{constructor(e,t,i=Mt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Xy{constructor(){this.fe=0,this.ge=Jy(),this.pe=Mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=De(),t=De(),i=De();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Re()}}),new Nl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Jy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,je(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class uk{constructor(e){this.Be=e,this.Le=new Map,this.ke=Qr(),this.qe=tc(),this.Qe=tc(),this.Ke=new rt(Le)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Re()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(vf(l))if(i===0){const c=new ye(l.path);this.We(t,c,qt.newNoDocument(c,Ce.min()))}else je(i===1);else{const c=this.Ze(t);if(c!==i){const d=this.Xe(e),p=d?this.et(d,e,c):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let c,d;try{c=Fi(i).toUint8Array()}catch(p){if(p instanceof Gv)return Lo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new ap(c,o,l)}catch(p){return Lo(p instanceof rl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Be.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const c=this.Be.nt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((l,c)=>{const d=this.Ye(c);if(d){if(l.current&&vf(d.target)){const p=new ye(d.target.path);this.st(p).has(c)||this.ot(c,p)||this.We(c,p,qt.newNoDocument(p,e))}l.be&&(t.set(c,l.ve()),l.Ce())}});let i=De();this.Qe.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,c)=>c.setReadTime(e));const o=new Xc(e,t,this.Ke,this.ke,i);return this.ke=Qr(),this.qe=tc(),this.Qe=tc(),this.Ke=new rt(Le),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new Xy,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new It(Le),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new It(Le),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||le("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Xy),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function tc(){return new rt(ye.comparator)}function Jy(){return new rt(ye.comparator)}const ck={asc:"ASCENDING",desc:"DESCENDING"},hk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dk={and:"AND",or:"OR"};class fk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Tf(n,e){return n.useProto3Json||Hc(e)?e:{value:e}}function xc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _w(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function pk(n,e){return xc(n,e.toTimestamp())}function vr(n){return je(!!n),Ce.fromTimestamp(function(t){const i=Mi(t);return new Tt(i.seconds,i.nanos)}(n))}function lp(n,e){return If(n,e).canonicalString()}function If(n,e){const t=function(o){return new Qe(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function vw(n){const e=Qe.fromString(n);return je(Sw(e)),e}function Sf(n,e){return lp(n.databaseId,e.path)}function Yd(n,e){const t=vw(e);if(t.get(1)!==n.databaseId.projectId)throw new he(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ye(Ew(t))}function ww(n,e){return lp(n.databaseId,e)}function mk(n){const e=vw(n);return e.length===4?Qe.emptyPath():Ew(e)}function Rf(n){return new Qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ew(n){return je(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Zy(n,e,t){return{name:Sf(n,e),fields:t.value.mapValue.fields}}function gk(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Re()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,v){return y.useProto3Json?(je(v===void 0||typeof v=="string"),Mt.fromBase64String(v||"")):(je(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Mt.fromUint8Array(v||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(y){const v=y.code===void 0?Y.UNKNOWN:mw(y.code);return new he(v,y.message||"")}(c);t=new yw(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Yd(n,i.document.name),l=vr(i.document.updateTime),c=i.document.createTime?vr(i.document.createTime):Ce.min(),d=new un({mapValue:{fields:i.document.fields}}),p=qt.newFoundDocument(o,l,c,d),y=i.targetIds||[],v=i.removedTargetIds||[];t=new mc(y,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Yd(n,i.document),l=i.readTime?vr(i.readTime):Ce.min(),c=qt.newNoDocument(o,l),d=i.removedTargetIds||[];t=new mc([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Yd(n,i.document),l=i.removedTargetIds||[];t=new mc([],l,o,null)}else{if(!("filter"in e))return Re();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,c=new sk(o,l),d=i.targetId;t=new gw(d,c)}}return t}function yk(n,e){let t;if(e instanceof xl)t={update:Zy(n,e.key,e.value)};else if(e instanceof sp)t={delete:Sf(n,e.key)};else if(e instanceof Hi)t={update:Zy(n,e.key,e.data),updateMask:Ck(e.fieldMask)};else{if(!(e instanceof nk))return Re();t={verify:Sf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof kc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Uo)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof _l)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Pc)return{fieldPath:c.field.canonicalString(),increment:d.Pe};throw Re()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:pk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Re()}(n,e.precondition)),t}function _k(n,e){return n&&n.length>0?(je(e!==void 0),n.map(t=>function(o,l){let c=o.updateTime?vr(o.updateTime):vr(l);return c.isEqual(Ce.min())&&(c=vr(l)),new ZA(c,o.transformResults||[])}(t,e))):[]}function vk(n,e){return{documents:[ww(n,e.path)]}}function wk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=ww(n,o);const l=function(y){if(y.length!==0)return Iw(Xn.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(y){if(y.length!==0)return y.map(v=>function(I){return{field:Ao(I.field),direction:Ik(I.dir)}}(v))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Tf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function Ek(n){let e=mk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){je(i===1);const v=t.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=function(T){const I=Tw(T);return I instanceof Xn&&Jv(I)?I.getFilters():[I]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(I=>function(F){return new Ac(ko(F.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(I))}(t.orderBy));let d=null;t.limit&&(d=function(T){let I;return I=typeof T=="object"?T.value:T,Hc(I)?null:I}(t.limit));let p=null;t.startAt&&(p=function(T){const I=!!T.before,x=T.values||[];return new Cc(x,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,x=T.values||[];return new Cc(x,I)}(t.endAt)),UA(e,o,c,l,d,"F",p,y)}function Tk(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Re()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Tw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=ko(t.unaryFilter.field);return pt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=ko(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=ko(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ko(t.unaryFilter.field);return pt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Re()}}(n):n.fieldFilter!==void 0?function(t){return pt.create(ko(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Re()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Xn.create(t.compositeFilter.filters.map(i=>Tw(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Re()}}(t.compositeFilter.op))}(n):Re()}function Ik(n){return ck[n]}function Sk(n){return hk[n]}function Rk(n){return dk[n]}function Ao(n){return{fieldPath:n.canonicalString()}}function ko(n){return Vt.fromServerFormat(n.fieldPath)}function Iw(n){return n instanceof pt?function(t){if(t.op==="=="){if(By(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NAN"}};if(Uy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(By(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NOT_NAN"}};if(Uy(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ao(t.field),op:Sk(t.op),value:t.value}}}(n):n instanceof Xn?function(t){const i=t.getFilters().map(o=>Iw(o));return i.length===1?i[0]:{compositeFilter:{op:Rk(t.op),filters:i}}}(n):Re()}function Ck(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Sw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ki{constructor(e,t,i,o,l=Ce.min(),c=Ce.min(),d=Mt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ak{constructor(e){this.ht=e}}function kk(n){const e=Ek({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ef(e,e.limit,"L"):e}/**
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
 */class Pk{constructor(){this.ln=new xk}addToCollectionParentIndex(e,t){return this.ln.add(t),Q.resolve()}getCollectionParents(e,t){return Q.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return Q.resolve()}deleteFieldIndex(e,t){return Q.resolve()}deleteAllFieldIndexes(e){return Q.resolve()}createTargetIndexes(e,t){return Q.resolve()}getDocumentsMatchingTarget(e,t){return Q.resolve(null)}getIndexType(e,t){return Q.resolve(0)}getFieldIndexes(e,t){return Q.resolve([])}getNextCollectionGroupToUpdate(e){return Q.resolve(null)}getMinOffset(e,t){return Q.resolve(Vi.min())}getMinOffsetFromCollectionGroup(e,t){return Q.resolve(Vi.min())}updateCollectionGroup(e,t,i){return Q.resolve()}updateIndexEntries(e,t){return Q.resolve()}}class xk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new It(Qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new It(Qe.comparator)).toArray()}}/**
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
 */const e_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class an{static withCacheSize(e){return new an(e,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */an.DEFAULT_COLLECTION_PERCENTILE=10,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,an.DEFAULT=new an(41943040,an.DEFAULT_COLLECTION_PERCENTILE,an.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),an.DISABLED=new an(-1,0,0);/**
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
 */class Bo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Bo(0)}static Qn(){return new Bo(-1)}}/**
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
 */function t_([n,e],[t,i]){const o=Le(n,t);return o===0?Le(e,i):o}class Nk{constructor(e){this.Gn=e,this.buffer=new It(t_),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();t_(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Dk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){le("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Yo(t)?le("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Qo(t)}await this.Yn(3e5)})}}class bk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return Q.resolve(qc.oe);const i=new Nk(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(le("LruGarbageCollector","Garbage collection skipped; disabled"),Q.resolve(e_)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(le("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),e_):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,c,d,p,y;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(le("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,c=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),Ro()<=Ne.DEBUG&&le("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${o} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-v}ms`),Q.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function Ok(n,e){return new bk(n,e)}/**
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
 */class Lk{constructor(){this.changes=new Ps(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?Q.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Vk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Mk{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&ul(i.mutation,o,yn.empty(),Tt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,De()).next(()=>i))}getLocalViewOfDocuments(e,t,i=De()){const o=Es();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let c=nl();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Es();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,De()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,o){let l=Qr();const c=ll(),d=function(){return ll()}();return t.forEach((p,y)=>{const v=i.get(y.key);o.has(y.key)&&(v===void 0||v.mutation instanceof Hi)?l=l.insert(y.key,y):v!==void 0?(c.set(y.key,v.mutation.getFieldMask()),ul(v.mutation,y,v.mutation.getFieldMask(),Tt.now())):c.set(y.key,yn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,v)=>c.set(y,v)),t.forEach((y,v)=>{var T;return d.set(y,new Vk(v,(T=c.get(y))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=ll();let o=new rt((c,d)=>c-d),l=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let v=i.get(p)||yn.empty();v=d.applyToLocalView(y,v),i.set(p,v);const T=(o.get(d.batchId)||De()).add(p);o=o.insert(d.batchId,T)})}).next(()=>{const c=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,v=p.value,T=aw();v.forEach(I=>{if(!l.has(I)){const x=fw(t.get(I),i.get(I));x!==null&&T.set(I,x),l=l.add(I)}}),c.push(this.documentOverlayCache.saveOverlays(e,y,T))}return Q.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(c){return ye.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const c=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):Q.resolve(Es());let d=-1,p=l;return c.next(y=>Q.forEach(y,(v,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(v)?Q.resolve():this.remoteDocumentCache.getEntry(e,v).next(I=>{p=p.insert(v,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,De())).next(v=>({batchId:d,changes:ow(v)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(i=>{let o=nl();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let c=nl();return this.indexManager.getCollectionParents(e,l).next(d=>Q.forEach(d,p=>{const y=function(T,I){return new Pl(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(v=>{v.forEach((T,I)=>{c=c.insert(T,I)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(c=>{l.forEach((p,y)=>{const v=y.getKey();c.get(v)===null&&(c=c.insert(v,qt.newInvalidDocument(v)))});let d=nl();return c.forEach((p,y)=>{const v=l.get(p);v!==void 0&&ul(v.mutation,y,yn.empty(),Tt.now()),Gc(t,y)&&(d=d.insert(p,y))}),d})}}/**
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
 */class Fk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return Q.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:vr(o.createTime)}}(t)),Q.resolve()}getNamedQuery(e,t){return Q.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:kk(o.bundledQuery),readTime:vr(o.readTime)}}(t)),Q.resolve()}}/**
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
 */class Uk{constructor(){this.overlays=new rt(ye.comparator),this.dr=new Map}getOverlay(e,t){return Q.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Es();return Q.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),Q.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.dr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.dr.delete(i)),Q.resolve()}getOverlaysForCollection(e,t,i){const o=Es(),l=t.length+1,c=new ye(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return Q.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new rt((y,v)=>y-v);const c=this.overlays.getIterator();for(;c.hasNext();){const y=c.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let v=l.get(y.largestBatchId);v===null&&(v=Es(),l=l.insert(y.largestBatchId,v)),v.set(y.getKey(),y)}}const d=Es(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,v)=>d.set(y,v)),!(d.size()>=o)););return Q.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const c=this.dr.get(o.largestBatchId).delete(i.key);this.dr.set(o.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new ik(t,i));let l=this.dr.get(t);l===void 0&&(l=De(),this.dr.set(t,l)),this.dr.set(t,l.add(i.key))}}/**
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
 */class Bk{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return Q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Q.resolve()}}/**
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
 */class up{constructor(){this.Er=new It(xt.Ar),this.Rr=new It(xt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const i=new xt(e,t);this.Er=this.Er.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new xt(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new ye(new Qe([])),i=new xt(t,e),o=new xt(t,e+1),l=[];return this.Rr.forEachInRange([i,o],c=>{this.gr(c),l.push(c.key)}),l}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ye(new Qe([])),i=new xt(t,e),o=new xt(t,e+1);let l=De();return this.Rr.forEachInRange([i,o],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new xt(e,0),i=this.Er.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class xt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ye.comparator(e.key,t.key)||Le(e.br,t.br)}static Vr(e,t){return Le(e.br,t.br)||ye.comparator(e.key,t.key)}}/**
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
 */class zk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new It(xt.Ar)}checkEmpty(e){return Q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new rk(l,t,i,o);this.mutationQueue.push(c);for(const d of o)this.vr=this.vr.add(new xt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Q.resolve(c)}lookupMutationBatch(e,t){return Q.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return Q.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Q.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return Q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new xt(t,0),o=new xt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],c=>{const d=this.Cr(c.br);l.push(d)}),Q.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new It(Le);return t.forEach(o=>{const l=new xt(o,0),c=new xt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,c],d=>{i=i.add(d.br)})}),Q.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;ye.isDocumentKey(l)||(l=l.child(""));const c=new xt(new ye(l),0);let d=new It(Le);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},c),Q.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){je(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return Q.forEach(t.mutations,o=>{const l=new xt(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Bn(e){}containsKey(e,t){const i=new xt(t,0),o=this.vr.firstAfterOrEqual(i);return Q.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Q.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class jk{constructor(e){this.Nr=e,this.docs=function(){return new rt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,c=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return Q.resolve(i?i.document.mutableCopy():qt.newInvalidDocument(t))}getEntries(e,t){let i=Qr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():qt.newInvalidDocument(o))}),Q.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Qr();const c=t.path,d=new ye(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:v}}=p.getNext();if(!c.isPrefixOf(y.path))break;y.path.length>c.length+1||_A(yA(v),i)<=0||(o.has(v.key)||Gc(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return Q.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Re()}Br(e,t){return Q.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new $k(this)}getSize(e){return Q.resolve(this.size)}}class $k extends Lk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),Q.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class qk{constructor(e){this.persistence=e,this.Lr=new Ps(t=>tp(t),np),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.kr=0,this.qr=new up,this.targetCount=0,this.Qr=Bo.qn()}forEachTarget(e,t){return this.Lr.forEach((i,o)=>t(o)),Q.resolve()}getLastRemoteSnapshotVersion(e){return Q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Q.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),Q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),Q.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Bo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,Q.resolve()}updateTargetData(e,t){return this.Un(t),Q.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,Q.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Lr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Lr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),Q.waitFor(l).next(()=>o)}getTargetCount(e){return Q.resolve(this.targetCount)}getTargetData(e,t){const i=this.Lr.get(t)||null;return Q.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),Q.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(c=>{l.push(o.markPotentiallyOrphaned(e,c))}),Q.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),Q.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return Q.resolve(i)}containsKey(e,t){return Q.resolve(this.qr.containsKey(t))}}/**
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
 */class Rw{constructor(e,t){this.Kr={},this.overlays={},this.$r=new qc(0),this.Ur=!1,this.Ur=!0,this.Wr=new Bk,this.referenceDelegate=e(this),this.Gr=new qk(this),this.indexManager=new Pk,this.remoteDocumentCache=function(o){return new jk(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new Ak(t),this.jr=new Fk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Uk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new zk(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){le("MemoryPersistence","Starting transaction:",e);const o=new Hk(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return Q.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class Hk extends wA{constructor(e){super(),this.currentSequenceNumber=e}}class cp{constructor(e){this.persistence=e,this.Zr=new up,this.Xr=null}static ei(e){return new cp(e)}get ti(){if(this.Xr)return this.Xr;throw Re()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),Q.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),Q.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),Q.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Q.forEach(this.ti,i=>{const o=ye.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ce.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return Q.or([()=>Q.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Nc{constructor(e,t){this.persistence=e,this.ri=new Ps(i=>IA(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=Ok(this,t)}static ei(e,t){return new Nc(e,t)}Hr(){}Jr(e){return Q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return Q.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?Q.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,c=>this.ir(e,c,t).next(d=>{d||(i++,l.removeEntry(c,Ce.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),Q.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),Q.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),Q.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),Q.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=dc(e.data.value)),t}ir(e,t,i){return Q.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return Q.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class hp{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=De(),o=De();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new hp(e,t.fromCache,i,o)}}/**
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
 */class Wk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Kk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return A0()?8:EA(Ht())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new Wk;return this.ts(e,t,c).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,c,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(Ro()<=Ne.DEBUG&&le("QueryEngine","SDK will not create cache indexes for query:",Co(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),Q.resolve()):(Ro()<=Ne.DEBUG&&le("QueryEngine","Query:",Co(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(Ro()<=Ne.DEBUG&&le("QueryEngine","The SDK decides to create cache indexes for query:",Co(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(t))):Q.resolve())}Xi(e,t){if(qy(t))return Q.resolve(null);let i=_r(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Ef(t,null,"F"),i=_r(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=De(...l);return this.Zi.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,c,p.readTime)?this.Xi(e,Ef(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return qy(t)||o.isEqual(Ce.min())?Q.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const c=this.rs(t,l);return this.ss(t,c,i,o)?Q.resolve(null):(Ro()<=Ne.DEBUG&&le("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Co(t)),this.os(e,c,t,gA(o,-1)).next(d=>d))})}rs(e,t){let i=new It(iw(e));return t.forEach((o,l)=>{Gc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return Ro()<=Ne.DEBUG&&le("QueryEngine","Using full collection scan to execute query:",Co(t)),this.Zi.getDocumentsMatchingQuery(e,t,Vi.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */class Gk{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new rt(Le),this.cs=new Ps(l=>tp(l),np),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Qk(n,e,t,i){return new Gk(n,e,t,i)}async function Cw(n,e){const t=Ae(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let p=De();for(const y of o){c.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}for(const y of l){d.push(y.batchId);for(const v of y.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:c,addedBatchIds:d}))})})}function Yk(n,e){const t=Ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,v){const T=y.batch,I=T.keys();let x=Q.resolve();return I.forEach(F=>{x=x.next(()=>v.getEntry(p,F)).next(j=>{const V=y.docVersions.get(F);je(V!==null),j.version.compareTo(V)<0&&(T.applyToRemoteDocument(j,y),j.isValidDocument()&&(j.setReadTime(y.commitVersion),v.addEntry(j)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=De();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function Aw(n){const e=Ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function Xk(n,e){const t=Ae(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((v,T)=>{const I=o.get(T);if(!I)return;d.push(t.Gr.removeMatchingKeys(l,v.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,v.addedDocuments,T)));let x=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(Mt.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):v.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(v.resumeToken,i)),o=o.insert(T,x),function(j,V,W){return j.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(I,x,v)&&d.push(t.Gr.updateTargetData(l,x))});let p=Qr(),y=De();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))}),d.push(Jk(l,c,e.documentUpdates).next(v=>{p=v.Is,y=v.ds})),!i.isEqual(Ce.min())){const v=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(v)}return Q.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function Jk(n,e,t){let i=De(),o=De();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Qr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ce.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):le("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:c,ds:o}})}function Zk(n,e){const t=Ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function eP(n,e){const t=Ae(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,Q.resolve(o)):t.Gr.allocateTargetId(i).next(c=>(o=new ki(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function Cf(n,e,t){const i=Ae(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,o))}catch(c){if(!Yo(c))throw c;le("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function n_(n,e,t){const i=Ae(n);let o=Ce.min(),l=De();return i.persistence.runTransaction("Execute query","readwrite",c=>function(p,y,v){const T=Ae(p),I=T.cs.get(v);return I!==void 0?Q.resolve(T.us.get(I)):T.Gr.getTargetData(y,v)}(i,c,_r(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(c,e,t?o:Ce.min(),t?l:De())).next(d=>(tP(i,zA(e),d),{documents:d,Es:l})))}function tP(n,e,t){let i=n.ls.get(e)||Ce.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class r_{constructor(){this.activeTargetIds=KA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nP{constructor(){this._o=new r_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new r_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rP{uo(e){}shutdown(){}}/**
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
 */class i_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){le("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){le("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nc=null;function Xd(){return nc===null?nc=function(){return 268435456+Math.round(2147483648*Math.random())}():nc++,"0x"+nc.toString(16)}/**
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
 */const iP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class sP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const jt="WebChannelConnection";class oP extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,c){const d=Xd(),p=this.No(t,i.toUriEncodedString());le("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,c),this.Lo(t,p,y,o).then(v=>(le("RestConnection",`Received RPC '${t}' ${d}: `,v),v),v=>{throw Lo("RestConnection",`RPC '${t}' ${d} failed with error: `,v,"url: ",p,"request:",o),v})}ko(t,i,o,l,c,d){return this.Oo(t,i,o,l,c)}Bo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Go}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,c)=>t[c]=l),o&&o.headers.forEach((l,c)=>t[c]=l)}No(t,i){const o=iP[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,i,o){const l=Xd();return new Promise((c,d)=>{const p=new Bv;p.setWithCredentials(!0),p.listenOnce(zv.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case hc.NO_ERROR:const v=p.getResponseJson();le(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),c(v);break;case hc.TIMEOUT:le(jt,`RPC '${e}' ${l} timed out`),d(new he(Y.DEADLINE_EXCEEDED,"Request time out"));break;case hc.HTTP_ERROR:const T=p.getStatus();if(le(jt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let I=p.getResponseJson();Array.isArray(I)&&(I=I[0]);const x=I==null?void 0:I.error;if(x&&x.status&&x.message){const F=function(V){const W=V.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(W)>=0?W:Y.UNKNOWN}(x.status);d(new he(F,x.message))}else d(new he(Y.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new he(Y.UNAVAILABLE,"Connection failed."));break;default:Re()}}finally{le(jt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);le(jt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=Xd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=qv(),d=$v(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");le(jt,`Creating RPC '${e}' stream ${o}: ${v}`,p);const T=c.createWebChannel(v,p);let I=!1,x=!1;const F=new sP({Eo:V=>{x?le(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,V):(I||(le(jt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),le(jt,`RPC '${e}' stream ${o} sending:`,V),T.send(V))},Ao:()=>T.close()}),j=(V,W,J)=>{V.listen(W,G=>{try{J(G)}catch(re){setTimeout(()=>{throw re},0)}})};return j(T,tl.EventType.OPEN,()=>{x||(le(jt,`RPC '${e}' stream ${o} transport opened.`),F.So())}),j(T,tl.EventType.CLOSE,()=>{x||(x=!0,le(jt,`RPC '${e}' stream ${o} transport closed`),F.Do())}),j(T,tl.EventType.ERROR,V=>{x||(x=!0,Lo(jt,`RPC '${e}' stream ${o} transport errored:`,V),F.Do(new he(Y.UNAVAILABLE,"The operation could not be completed")))}),j(T,tl.EventType.MESSAGE,V=>{var W;if(!x){const J=V.data[0];je(!!J);const G=J,re=(G==null?void 0:G.error)||((W=G[0])===null||W===void 0?void 0:W.error);if(re){le(jt,`RPC '${e}' stream ${o} received error:`,re);const _e=re.status;let me=function(R){const A=ft[R];if(A!==void 0)return mw(A)}(_e),P=re.message;me===void 0&&(me=Y.INTERNAL,P="Unknown error status: "+_e+" with message "+re.message),x=!0,F.Do(new he(me,P)),T.close()}else le(jt,`RPC '${e}' stream ${o} received:`,J),F.vo(J)}}),j(d,jv.STAT_EVENT,V=>{V.stat===mf.PROXY?le(jt,`RPC '${e}' stream ${o} detected buffering proxy`):V.stat===mf.NOPROXY&&le(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{F.bo()},0),F}}function Jd(){return typeof document<"u"?document:null}/**
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
 */function Jc(n){return new fk(n,!0)}/**
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
 */class kw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&le("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Pw{constructor(e,t,i,o,l,c,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new kw(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(Gr(t.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new he(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.d_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.d_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return le("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(le("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aP extends Pw{constructor(e,t,i,o,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=gk(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ce.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ce.min():c.readTime?vr(c.readTime):Ce.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=Rf(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=vf(p)?{documents:vk(l,p)}:{query:wk(l,p).ct},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=_w(l,c.resumeToken);const y=Tf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}else if(c.snapshotVersion.compareTo(Ce.min())>0){d.readTime=xc(l,c.snapshotVersion.toTimestamp());const y=Tf(l,c.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=Tk(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=Rf(this.serializer),t.removeTarget=e,this.c_(t)}}class lP extends Pw{constructor(e,t,i,o,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,c),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return je(!!e.streamToken),this.lastStreamToken=e.streamToken,je(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){je(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=_k(e.writeResults,e.commitTime),i=vr(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=Rf(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>yk(this.serializer,i))};this.c_(t)}}/**
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
 */class uP extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new he(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Oo(e,If(t,i),o,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new he(Y.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.ko(e,If(t,i),o,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he(Y.UNKNOWN,c.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class cP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Gr(t),this.C_=!1):le("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class hP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(c=>{i.enqueueAndForget(async()=>{xs(this)&&(le("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Ae(p);y.k_.add(4),await Dl(y),y.K_.set("Unknown"),y.k_.delete(4),await Zc(y)}(this))})}),this.K_=new cP(i,o)}}async function Zc(n){if(xs(n))for(const e of n.q_)await e(!0)}async function Dl(n){for(const e of n.q_)await e(!1)}function xw(n,e){const t=Ae(n);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),mp(t)?pp(t):Xo(t).s_()&&fp(t,e))}function dp(n,e){const t=Ae(n),i=Xo(t);t.L_.delete(e),i.s_()&&Nw(t,e),t.L_.size===0&&(i.s_()?i.a_():xs(t)&&t.K_.set("Unknown"))}function fp(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xo(n).V_(e)}function Nw(n,e){n.U_.xe(e),Xo(n).m_(e)}function pp(n){n.U_=new uk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.L_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Xo(n).start(),n.K_.F_()}function mp(n){return xs(n)&&!Xo(n).i_()&&n.L_.size>0}function xs(n){return Ae(n).k_.size===0}function Dw(n){n.U_=void 0}async function dP(n){n.K_.set("Online")}async function fP(n){n.L_.forEach((e,t)=>{fp(n,e)})}async function pP(n,e){Dw(n),mp(n)?(n.K_.O_(e),pp(n)):n.K_.set("Unknown")}async function mP(n,e,t){if(n.K_.set("Online"),e instanceof yw&&e.state===2&&e.cause)try{await async function(o,l){const c=l.cause;for(const d of l.targetIds)o.L_.has(d)&&(await o.remoteSyncer.rejectListen(d,c),o.L_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){le("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Dc(n,i)}else if(e instanceof mc?n.U_.$e(e):e instanceof gw?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ce.min()))try{const i=await Aw(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.U_.it(c);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.L_.get(y);v&&l.L_.set(y,v.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,y)=>{const v=l.L_.get(p);if(!v)return;l.L_.set(p,v.withResumeToken(Mt.EMPTY_BYTE_STRING,v.snapshotVersion)),Nw(l,p);const T=new ki(v.target,p,y,v.sequenceNumber);fp(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){le("RemoteStore","Failed to raise snapshot:",i),await Dc(n,i)}}async function Dc(n,e,t){if(!Yo(e))throw e;n.k_.add(1),await Dl(n),n.K_.set("Offline"),t||(t=()=>Aw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{le("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Zc(n)})}function bw(n,e){return e().catch(t=>Dc(n,t,e))}async function eh(n){const e=Ae(n),t=Bi(e);let i=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;gP(e);)try{const o=await Zk(e.localStore,i);if(o===null){e.B_.length===0&&t.a_();break}i=o.batchId,yP(e,o)}catch(o){await Dc(e,o)}Ow(e)&&Lw(e)}function gP(n){return xs(n)&&n.B_.length<10}function yP(n,e){n.B_.push(e);const t=Bi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Ow(n){return xs(n)&&!Bi(n).i_()&&n.B_.length>0}function Lw(n){Bi(n).start()}async function _P(n){Bi(n).w_()}async function vP(n){const e=Bi(n);for(const t of n.B_)e.g_(t.mutations)}async function wP(n,e,t){const i=n.B_.shift(),o=op.from(i,e,t);await bw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await eh(n)}async function EP(n,e){e&&Bi(n).f_&&await async function(i,o){if(function(c){return ok(c)&&c!==Y.ABORTED}(o.code)){const l=i.B_.shift();Bi(i).__(),await bw(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await eh(i)}}(n,e),Ow(n)&&Lw(n)}async function s_(n,e){const t=Ae(n);t.asyncQueue.verifyOperationInProgress(),le("RemoteStore","RemoteStore received new credentials");const i=xs(t);t.k_.add(3),await Dl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Zc(t)}async function TP(n,e){const t=Ae(n);e?(t.k_.delete(2),await Zc(t)):e||(t.k_.add(2),await Dl(t),t.K_.set("Unknown"))}function Xo(n){return n.W_||(n.W_=function(t,i,o){const l=Ae(t);return l.b_(),new aP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:dP.bind(null,n),mo:fP.bind(null,n),po:pP.bind(null,n),R_:mP.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),mp(n)?pp(n):n.K_.set("Unknown")):(await n.W_.stop(),Dw(n))})),n.W_}function Bi(n){return n.G_||(n.G_=function(t,i,o){const l=Ae(t);return l.b_(),new lP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:_P.bind(null,n),po:EP.bind(null,n),p_:vP.bind(null,n),y_:wP.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await eh(n)):(await n.G_.stop(),n.B_.length>0&&(le("RemoteStore",`Stopping write stream with ${n.B_.length} pending writes`),n.B_=[]))})),n.G_}/**
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
 */class gp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const c=Date.now()+i,d=new gp(e,t,c,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yp(n,e){if(Gr("AsyncQueue",`${e}: ${n}`),Yo(n))return new he(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class bo{static emptySet(e){return new bo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ye.comparator(t.key,i.key):(t,i)=>ye.comparator(t.key,i.key),this.keyedMap=nl(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new bo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class o_{constructor(){this.z_=new rt(ye.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Re():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class zo{constructor(e,t,i,o,l,c,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new zo(e,t,bo.emptySet(t),c,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
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
 */class IP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class SP{constructor(){this.queries=a_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Ae(t),l=o.queries;o.queries=a_(),l.forEach((c,d)=>{for(const p of d.J_)p.onError(i)})})(this,new he(Y.ABORTED,"Firestore shutting down"))}}function a_(){return new Ps(n=>rw(n),Kc)}async function Vw(n,e){const t=Ae(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new IP,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(c){const d=yp(c,`Initialization of query '${Co(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&_p(t)}async function Mw(n,e){const t=Ae(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const c=l.J_.indexOf(e);c>=0&&(l.J_.splice(c,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function RP(n,e){const t=Ae(n);let i=!1;for(const o of e){const l=o.query,c=t.queries.get(l);if(c){for(const d of c.J_)d.ta(o)&&(i=!0);c.H_=o}}i&&_p(t)}function CP(n,e,t){const i=Ae(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function _p(n){n.X_.forEach(e=>{e.next()})}var Af,l_;(l_=Af||(Af={})).na="default",l_.Cache="cache";class Fw{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new zo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Af.Cache}}/**
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
 */class Uw{constructor(e){this.key=e}}class Bw{constructor(e){this.key=e}}class AP{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=De(),this.mutatedKeys=De(),this.Va=iw(e),this.ma=new bo(this.Va)}get fa(){return this.Ea}ga(e,t){const i=t?t.pa:new o_,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,c=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,T)=>{const I=o.get(v),x=Gc(this.query,T)?T:null,F=!!I&&this.mutatedKeys.has(I.key),j=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let V=!1;I&&x?I.data.isEqual(x.data)?F!==j&&(i.track({type:3,doc:x}),V=!0):this.ya(I,x)||(i.track({type:2,doc:x}),V=!0,(p&&this.Va(x,p)>0||y&&this.Va(x,y)<0)&&(d=!0)):!I&&x?(i.track({type:0,doc:x}),V=!0):I&&!x&&(i.track({type:1,doc:I}),V=!0,(p||y)&&(d=!0)),V&&(x?(c=c.add(x),l=j?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{ma:c,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const c=e.pa.j_();c.sort((v,T)=>function(x,F){const j=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Re()}};return j(x)-j(F)}(v.type,T.type)||this.Va(v.doc,T.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,c.length!==0||y?{snapshot:new zo(this.query,e.ma,l,c,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new o_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=De(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new Bw(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new Uw(i))}),t}va(e){this.Ea=e.Es,this.Ra=De();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return zo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class kP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class PP{constructor(e){this.key=e,this.Fa=!1}}class xP{constructor(e,t,i,o,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Ma={},this.xa=new Ps(d=>rw(d),Kc),this.Oa=new Map,this.Na=new Set,this.Ba=new rt(ye.comparator),this.La=new Map,this.ka=new up,this.qa={},this.Qa=new Map,this.Ka=Bo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function NP(n,e,t=!0){const i=Ww(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await zw(i,e,t,!0),o}async function DP(n,e){const t=Ww(n);await zw(t,e,!0,!1)}async function zw(n,e,t,i){const o=await eP(n.localStore,_r(e)),l=o.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await bP(n,e,l,c==="current",o.resumeToken)),n.isPrimaryClient&&t&&xw(n.remoteStore,o),d}async function bP(n,e,t,i,o){n.Ua=(T,I,x)=>async function(j,V,W,J){let G=V.view.ga(W);G.ss&&(G=await n_(j.localStore,V.query,!1).then(({documents:P})=>V.view.ga(P,G)));const re=J&&J.targetChanges.get(V.targetId),_e=J&&J.targetMismatches.get(V.targetId)!=null,me=V.view.applyChanges(G,j.isPrimaryClient,re,_e);return c_(j,V.targetId,me.ba),me.snapshot}(n,T,I,x);const l=await n_(n.localStore,e,!0),c=new AP(e,l.Es),d=c.ga(l.documents),p=Nl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=c.applyChanges(d,n.isPrimaryClient,p);c_(n,t,y.ba);const v=new kP(e,t,c);return n.xa.set(e,v),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function OP(n,e,t){const i=Ae(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(c=>!Kc(c,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await Cf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&dp(i.remoteStore,o.targetId),kf(i,o.targetId)}).catch(Qo)):(kf(i,o.targetId),await Cf(i.localStore,o.targetId,!0))}async function LP(n,e){const t=Ae(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),dp(t.remoteStore,i.targetId))}async function VP(n,e,t){const i=$P(n);try{const o=await function(c,d){const p=Ae(c),y=Tt.now(),v=d.reduce((x,F)=>x.add(F.key),De());let T,I;return p.persistence.runTransaction("Locally write mutations","readwrite",x=>{let F=Qr(),j=De();return p.hs.getEntries(x,v).next(V=>{F=V,F.forEach((W,J)=>{J.isValidDocument()||(j=j.add(W))})}).next(()=>p.localDocuments.getOverlayedDocuments(x,F)).next(V=>{T=V;const W=[];for(const J of d){const G=tk(J,T.get(J.key).overlayedDocument);G!=null&&W.push(new Hi(J.key,G,Qv(G.value.mapValue),Nn.exists(!0)))}return p.mutationQueue.addMutationBatch(x,y,W,d)}).next(V=>{I=V;const W=V.applyToLocalDocumentSet(T,j);return p.documentOverlayCache.saveOverlays(x,V.batchId,W)})}).then(()=>({batchId:I.batchId,changes:ow(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(c,d,p){let y=c.qa[c.currentUser.toKey()];y||(y=new rt(Le)),y=y.insert(d,p),c.qa[c.currentUser.toKey()]=y}(i,o.batchId,t),await bl(i,o.changes),await eh(i.remoteStore)}catch(o){const l=yp(o,"Failed to persist write");t.reject(l)}}async function jw(n,e){const t=Ae(n);try{const i=await Xk(t.localStore,e);e.targetChanges.forEach((o,l)=>{const c=t.La.get(l);c&&(je(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?c.Fa=!0:o.modifiedDocuments.size>0?je(c.Fa):o.removedDocuments.size>0&&(je(c.Fa),c.Fa=!1))}),await bl(t,i,e)}catch(i){await Qo(i)}}function u_(n,e,t){const i=Ae(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,c)=>{const d=c.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(c,d){const p=Ae(c);p.onlineState=d;let y=!1;p.queries.forEach((v,T)=>{for(const I of T.J_)I.ea(d)&&(y=!0)}),y&&_p(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function MP(n,e,t){const i=Ae(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.La.get(e),l=o&&o.key;if(l){let c=new rt(ye.comparator);c=c.insert(l,qt.newNoDocument(l,Ce.min()));const d=De().add(l),p=new Xc(Ce.min(),new Map,new rt(Le),c,d);await jw(i,p),i.Ba=i.Ba.remove(l),i.La.delete(e),vp(i)}else await Cf(i.localStore,e,!1).then(()=>kf(i,e,t)).catch(Qo)}async function FP(n,e){const t=Ae(n),i=e.batch.batchId;try{const o=await Yk(t.localStore,e);qw(t,i,null),$w(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await bl(t,o)}catch(o){await Qo(o)}}async function UP(n,e,t){const i=Ae(n);try{const o=await function(c,d){const p=Ae(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let v;return p.mutationQueue.lookupMutationBatch(y,d).next(T=>(je(T!==null),v=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,v,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,v)).next(()=>p.localDocuments.getDocuments(y,v))})}(i.localStore,e);qw(i,e,t),$w(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await bl(i,o)}catch(o){await Qo(o)}}function $w(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function qw(n,e,t){const i=Ae(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function kf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||Hw(n,i)})}function Hw(n,e){n.Na.delete(e.path.canonicalString());const t=n.Ba.get(e);t!==null&&(dp(n.remoteStore,t),n.Ba=n.Ba.remove(e),n.La.delete(t),vp(n))}function c_(n,e,t){for(const i of t)i instanceof Uw?(n.ka.addReference(i.key,e),BP(n,i)):i instanceof Bw?(le("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||Hw(n,i.key)):Re()}function BP(n,e){const t=e.key,i=t.path.canonicalString();n.Ba.get(t)||n.Na.has(i)||(le("SyncEngine","New document in limbo: "+t),n.Na.add(i),vp(n))}function vp(n){for(;n.Na.size>0&&n.Ba.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new ye(Qe.fromString(e)),i=n.Ka.next();n.La.set(i,new PP(t)),n.Ba=n.Ba.insert(t,i),xw(n.remoteStore,new ki(_r(rp(t.path)),i,"TargetPurposeLimboResolution",qc.oe))}}async function bl(n,e,t){const i=Ae(n),o=[],l=[],c=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{c.push(i.Ua(p,e,t).then(y=>{var v;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(v=t==null?void 0:t.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;i.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=hp.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(c),i.Ma.R_(o),await async function(p,y){const v=Ae(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>Q.forEach(y,I=>Q.forEach(I.Wi,x=>v.persistence.referenceDelegate.addReference(T,I.targetId,x)).next(()=>Q.forEach(I.Gi,x=>v.persistence.referenceDelegate.removeReference(T,I.targetId,x)))))}catch(T){if(!Yo(T))throw T;le("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const x=v.us.get(I),F=x.snapshotVersion,j=x.withLastLimboFreeSnapshotVersion(F);v.us=v.us.insert(I,j)}}}(i.localStore,l))}async function zP(n,e){const t=Ae(n);if(!t.currentUser.isEqual(e)){le("SyncEngine","User change. New user:",e.toKey());const i=await Cw(t.localStore,e);t.currentUser=e,function(l,c){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new he(Y.CANCELLED,c))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await bl(t,i.Ts)}}function jP(n,e){const t=Ae(n),i=t.La.get(e);if(i&&i.Fa)return De().add(i.key);{let o=De();const l=t.Oa.get(e);if(!l)return o;for(const c of l){const d=t.xa.get(c);o=o.unionWith(d.view.fa)}return o}}function Ww(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MP.bind(null,e),e.Ma.R_=RP.bind(null,e.eventManager),e.Ma.Wa=CP.bind(null,e.eventManager),e}function $P(n){const e=Ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UP.bind(null,e),e}class bc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Jc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Qk(this.persistence,new Kk,e.initialUser,this.serializer)}ja(e){return new Rw(cp.ei,this.serializer)}za(e){return new nP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bc.provider={build:()=>new bc};class qP extends bc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){je(this.persistence.referenceDelegate instanceof Nc);const i=this.persistence.referenceDelegate.garbageCollector;return new Dk(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?an.withCacheSize(this.cacheSizeBytes):an.DEFAULT;return new Rw(i=>Nc.ei(i,t),this.serializer)}}class Pf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>u_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=zP.bind(null,this.syncEngine),await TP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SP}()}createDatastore(e){const t=Jc(e.databaseInfo.databaseId),i=function(l){return new oP(l)}(e.databaseInfo);return function(l,c,d,p){return new uP(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,c,d){return new hP(i,o,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>u_(this.syncEngine,t,0),function(){return i_.p()?new i_:new rP}())}createSyncEngine(e,t){return function(o,l,c,d,p,y,v){const T=new xP(o,l,c,d,p,y);return v&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ae(o);le("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await Dl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Pf.provider={build:()=>new Pf};/**
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
 */class Kw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Gr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class HP{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=Wv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{le("FirestoreClient","Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(le("FirestoreClient","Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=yp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Zd(n,e){n.asyncQueue.verifyOperationInProgress(),le("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await Cw(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function h_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await WP(n);le("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>s_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>s_(e.remoteStore,o)),n._onlineComponents=e}async function WP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){le("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Lo("Error using user provided cache. Falling back to memory cache: "+t),await Zd(n,new bc)}}else le("FirestoreClient","Using default OfflineComponentProvider"),await Zd(n,new qP(void 0));return n._offlineComponents}async function Gw(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(le("FirestoreClient","Using user provided OnlineComponentProvider"),await h_(n,n._uninitializedComponentsProvider._online)):(le("FirestoreClient","Using default OnlineComponentProvider"),await h_(n,new Pf))),n._onlineComponents}function KP(n){return Gw(n).then(e=>e.syncEngine)}async function Qw(n){const e=await Gw(n),t=e.eventManager;return t.onListen=NP.bind(null,e.syncEngine),t.onUnlisten=OP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=DP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=LP.bind(null,e.syncEngine),t}function GP(n,e,t={}){const i=new qr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const v=new Kw({next:I=>{v.eu(),c.enqueueAndForget(()=>Mw(l,T));const x=I.docs.has(d);!x&&I.fromCache?y.reject(new he(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&I.fromCache&&p&&p.source==="server"?y.reject(new he(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Fw(rp(d.path),v,{includeMetadataChanges:!0,ua:!0});return Vw(l,T)}(await Qw(n),n.asyncQueue,e,t,i)),i.promise}function QP(n,e,t={}){const i=new qr;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,y){const v=new Kw({next:I=>{v.eu(),c.enqueueAndForget(()=>Mw(l,T)),I.fromCache&&p.source==="server"?y.reject(new he(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new Fw(d,v,{includeMetadataChanges:!0,ua:!0});return Vw(l,T)}(await Qw(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function Yw(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const d_=new Map;/**
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
 */function Xw(n,e,t){if(!t)throw new he(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function YP(n,e,t,i){if(e===!0&&i===!0)throw new he(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function f_(n){if(!ye.isDocumentKey(n))throw new he(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function p_(n){if(ye.isDocumentKey(n))throw new he(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function th(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Re()}function Jn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=th(n);throw new he(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class m_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new he(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new he(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yw((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new he(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new he(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new he(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nh{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new m_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new m_(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new aA;switch(i.type){case"firstParty":return new hA(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new he(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=d_.get(t);i&&(le("ComponentProvider","Removing Datastore"),d_.delete(t),i.terminate())}(this),Promise.resolve()}}function XP(n,e,t,i={}){var o;const l=(n=Jn(n,nh))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Lo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=$t.MOCK_USER;else{d=Y_(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new he(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new $t(y)}n._authCredentials=new lA(new Hv(d,p))}}/**
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
 */class Jo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Jo(this.firestore,e,this._query)}}class Xt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Di(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}}class Di extends Jo{constructor(e,t,i){super(e,t,rp(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new ye(e))}withConverter(e){return new Di(this.firestore,e,this._path)}}function rh(n,e,...t){if(n=nt(n),Xw("collection","path",e),n instanceof nh){const i=Qe.fromString(e,...t);return p_(i),new Di(n,null,i)}{if(!(n instanceof Xt||n instanceof Di))throw new he(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return p_(i),new Di(n.firestore,null,i)}}function Et(n,e,...t){if(n=nt(n),arguments.length===1&&(e=Wv.newId()),Xw("doc","path",e),n instanceof nh){const i=Qe.fromString(e,...t);return f_(i),new Xt(n,null,new ye(i))}{if(!(n instanceof Xt||n instanceof Di))throw new he(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Qe.fromString(e,...t));return f_(i),new Xt(n.firestore,n instanceof Di?n.converter:null,new ye(i))}}/**
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
 */class g_{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new kw(this,"async_queue_retry"),this.fu=()=>{const i=Jd();i&&le("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Jd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Jd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new qr;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Yo(e))throw e;le("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Gr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=gp.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.Eu.push(o),o}pu(){this.Au&&Re()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Ns extends nh{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new g_,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new g_(e),this._firestoreClient=void 0,await e}}}function JP(n,e){const t=typeof n=="object"?n:jf(),i=typeof n=="string"?n:"(default)",o=Bc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=K_("firestore");l&&XP(o,...l)}return o}function wp(n){if(n._terminated)throw new he(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ZP(n),n._firestoreClient}function ZP(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,v){return new CA(d,p,y,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,Yw(v.experimentalLongPollingOptions),v.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new HP(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class jo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jo(Mt.fromBase64String(e))}catch(t){throw new he(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jo(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ih{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sh{constructor(e){this._methodName=e}}/**
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
 */class Ep{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
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
 */class Tp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const e1=/^__.*__$/;class t1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Hi(e,this.data,this.fieldMask,t,this.fieldTransforms):new xl(e,this.data,t,this.fieldTransforms)}}class Jw{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Hi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zw(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Re()}}class oh{constructor(e,t,i,o,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new oh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Bu(e),o}Lu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Oc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Zw(this.Mu)&&e1.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class n1{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Jc(e)}$u(e,t,i,o=!1){return new oh({Mu:e,methodName:t,Ku:i,path:Vt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ah(n){const e=n._freezeSettings(),t=Jc(n._databaseId);return new n1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function eE(n,e,t,i,o,l={}){const c=n.$u(l.merge||l.mergeFields?2:0,e,t,o);Sp("Data must be an object, but it was:",c,i);const d=tE(i,c);let p,y;if(l.merge)p=new yn(c.fieldMask),y=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const I=xf(e,T,t);if(!c.contains(I))throw new he(Y.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);rE(v,I)||v.push(I)}p=new yn(v),y=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=c.fieldTransforms;return new t1(new un(d),p,y)}class lh extends sh{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof lh}}function r1(n,e,t){return new oh({Mu:3,Ku:e.settings.Ku,methodName:n._methodName,Nu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ip extends sh{constructor(e,t){super(e),this.Uu=t}_toFieldTransform(e){const t=r1(this,e,!0),i=this.Uu.map(l=>Zo(l,t)),o=new Uo(i);return new XA(e.path,o)}isEqual(e){return e instanceof Ip&&dl(this.Uu,e.Uu)}}function i1(n,e,t,i){const o=n.$u(1,e,t);Sp("Data must be an object, but it was:",o,i);const l=[],c=un.empty();qi(i,(p,y)=>{const v=Rp(e,p,t);y=nt(y);const T=o.Lu(v);if(y instanceof lh)l.push(v);else{const I=Zo(y,T);I!=null&&(l.push(v),c.set(v,I))}});const d=new yn(l);return new Jw(c,d,o.fieldTransforms)}function s1(n,e,t,i,o,l){const c=n.$u(1,e,t),d=[xf(e,i,t)],p=[o];if(l.length%2!=0)throw new he(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)d.push(xf(e,l[I])),p.push(l[I+1]);const y=[],v=un.empty();for(let I=d.length-1;I>=0;--I)if(!rE(y,d[I])){const x=d[I];let F=p[I];F=nt(F);const j=c.Lu(x);if(F instanceof lh)y.push(x);else{const V=Zo(F,j);V!=null&&(y.push(x),v.set(x,V))}}const T=new yn(y);return new Jw(v,T,c.fieldTransforms)}function o1(n,e,t,i=!1){return Zo(t,n.$u(i?4:3,e))}function Zo(n,e){if(nE(n=nt(n)))return Sp("Unsupported field value:",e,n),tE(n,e);if(n instanceof sh)return function(i,o){if(!Zw(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let c=0;for(const d of i){let p=Zo(d,o.ku(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=nt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return GA(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Tt.fromDate(i);return{timestampValue:xc(o.serializer,l)}}if(i instanceof Tt){const l=new Tt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:xc(o.serializer,l)}}if(i instanceof Ep)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof jo)return{bytesValue:_w(o.serializer,i._byteString)};if(i instanceof Xt){const l=o.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw o.qu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:lp(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof Tp)return function(c,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return ip(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${th(i)}`)}(n,e)}function tE(n,e){const t={};return Kv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qi(n,(i,o)=>{const l=Zo(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function nE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Tt||n instanceof Ep||n instanceof jo||n instanceof Xt||n instanceof sh||n instanceof Tp)}function Sp(n,e,t){if(!nE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=th(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function xf(n,e,t){if((e=nt(e))instanceof ih)return e._internalPath;if(typeof e=="string")return Rp(n,e);throw Oc("Field path arguments must be of type string or ",n,!1,void 0,t)}const a1=new RegExp("[~\\*/\\[\\]]");function Rp(n,e,t){if(e.search(a1)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ih(...e.split("."))._internalPath}catch{throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Oc(n,e,t,i,o){const l=i&&!i.isEmpty(),c=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${o}`),p+=")"),new he(Y.INVALID_ARGUMENT,d+n+p)}function rE(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class iE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new l1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Cp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class l1 extends iE{data(){return super.data()}}function Cp(n,e){return typeof e=="string"?Rp(n,e):e instanceof ih?e._internalPath:e._delegate._internalPath}/**
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
 */function u1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ap{}class c1 extends Ap{}function sE(n,e,...t){let i=[];e instanceof Ap&&i.push(e),i=i.concat(t),function(l){const c=l.filter(p=>p instanceof kp).length,d=l.filter(p=>p instanceof uh).length;if(c>1||c>0&&d>0)throw new he(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class uh extends c1{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new uh(e,t,i)}_apply(e){const t=this._parse(e);return aE(e._query,t),new Jo(e.firestore,e.converter,wf(e._query,t))}_parse(e){const t=ah(e.firestore);return function(l,c,d,p,y,v,T){let I;if(y.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new he(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){__(T,v);const x=[];for(const F of T)x.push(y_(p,l,F));I={arrayValue:{values:x}}}else I=y_(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||__(T,v),I=o1(d,c,T,v==="in"||v==="not-in");return pt.create(y,v,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function oE(n,e,t){const i=e,o=Cp("where",n);return uh._create(o,i,t)}class kp extends Ap{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new kp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Xn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let c=o;const d=l.getFlattenedFilters();for(const p of d)aE(c,p),c=wf(c,p)}(e._query,t),new Jo(e.firestore,e.converter,wf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function y_(n,e,t){if(typeof(t=nt(t))=="string"){if(t==="")throw new he(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nw(e)&&t.indexOf("/")!==-1)throw new he(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Qe.fromString(t));if(!ye.isDocumentKey(i))throw new he(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Fy(n,new ye(i))}if(t instanceof Xt)return Fy(n,t._key);throw new he(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${th(t)}.`)}function __(n,e){if(!Array.isArray(n)||n.length===0)throw new he(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function aE(n,e){const t=function(o,l){for(const c of o)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new he(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class h1{convertValue(e,t="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Re()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return qi(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(c=>ct(c.doubleValue));return new Tp(l)}convertGeoPoint(e){return new Ep(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Wc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ml(e));default:return null}}convertTimestamp(e){const t=Mi(e);return new Tt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Qe.fromString(e);je(Sw(i));const o=new gl(i.get(1),i.get(3)),l=new ye(i.popFirst(5));return o.isEqual(t)||Gr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function lE(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class il{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uE extends iE{constructor(e,t,i,o,l,c){super(e,t,i,o,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Cp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class gc extends uE{data(e={}){return super.data(e)}}class d1{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new il(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new gc(this._firestore,this._userDataWriter,i.key,i,new il(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let c=0;return o._snapshot.docChanges.map(d=>{const p=new gc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new il(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new gc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new il(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,v=-1;return d.type!==0&&(y=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),v=c.indexOf(d.doc.key)),{type:f1(d.type),doc:p,oldIndex:y,newIndex:v}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function f1(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Re()}}/**
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
 */function $o(n){n=Jn(n,Xt);const e=Jn(n.firestore,Ns);return GP(wp(e),n._key).then(t=>m1(e,n,t))}class cE extends h1{constructor(e){super(),this.firestore=e}convertBytes(e){return new jo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,t)}}function Pp(n){n=Jn(n,Jo);const e=Jn(n.firestore,Ns),t=wp(e),i=new cE(e);return u1(n._query),QP(t,n._query).then(o=>new d1(e,i,n,o))}function bi(n,e,t){n=Jn(n,Xt);const i=Jn(n.firestore,Ns),o=lE(n.converter,e,t);return ch(i,[eE(ah(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Nn.none())])}function Lc(n,e,t,...i){n=Jn(n,Xt);const o=Jn(n.firestore,Ns),l=ah(o);let c;return c=typeof(e=nt(e))=="string"||e instanceof ih?s1(l,"updateDoc",n._key,e,t,i):i1(l,"updateDoc",n._key,e),ch(o,[c.toMutation(n._key,Nn.exists(!0))])}function Vc(n){return ch(Jn(n.firestore,Ns),[new sp(n._key,Nn.none())])}function p1(n,e){const t=Jn(n.firestore,Ns),i=Et(n),o=lE(n.converter,e);return ch(t,[eE(ah(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,Nn.exists(!1))]).then(()=>i)}function ch(n,e){return function(i,o){const l=new qr;return i.asyncQueue.enqueueAndForget(async()=>VP(await KP(i),o,l)),l.promise}(wp(n),e)}function m1(n,e,t){const i=t.docs.get(e._key),o=new cE(n);return new uE(n,o,e._key,i,new il(t.hasPendingWrites,t.fromCache),e.converter)}function g1(...n){return new Ip("arrayUnion",n)}(function(e,t=!0){(function(o){Go=o})(As),Is(new Li("firestore",(i,{instanceIdentifier:o,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Ns(new uA(i.getProvider("auth-internal")),new fA(i.getProvider("app-check-internal")),function(y,v){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new he(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gl(y.options.projectId,v)}(c,o),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),pr(Dy,"4.7.6",e),pr(Dy,"4.7.6","esm2017")})();const y1={apiKey:"AIzaSyCEkJyNaOnlCWEKXAeBaL2p-Spzj2GWRnE",authDomain:"lista-de-compras-fc76a.firebaseapp.com",projectId:"lista-de-compras-fc76a",storageBucket:"lista-de-compras-fc76a.firebasestorage.app",messagingSenderId:"158886457966",appId:"1:158886457966:web:c5aeadfa924585f054ac7f"},hE=Z_(y1),ln=Ko(hE),st=JP(hE);var ef={exports:{}},Xa={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function _1(){if(v_)return Xa;v_=1;var n=Df(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,y){var v,T={},I=null,x=null;y!==void 0&&(I=""+y),p.key!==void 0&&(I=""+p.key),p.ref!==void 0&&(x=p.ref);for(v in p)i.call(p,v)&&!l.hasOwnProperty(v)&&(T[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)T[v]===void 0&&(T[v]=p[v]);return{$$typeof:e,type:d,key:I,ref:x,props:T,_owner:o.current}}return Xa.Fragment=t,Xa.jsx=c,Xa.jsxs=c,Xa}var w_;function v1(){return w_||(w_=1,ef.exports=_1()),ef.exports}var xp=v1();const O=xp.jsx,ie=xp.jsxs,w1=xp.Fragment,E1=({id:n,titulo:e,itens:t,total:i,onEdit:o,onDelete:l})=>{const c=vn(),[d,p]=U.useState(!1),[y,v]=U.useState(e);return ie("div",{className:"bg-white w-full min-h-40 drop-shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow",onClick:()=>c(`/list/${n}`),children:[d?ie("div",{children:[O("input",{type:"text",value:y,onChange:I=>v(I.target.value),className:"w-full p-2 border rounded mt-1"}),O("button",{onClick:()=>{o(n,y),p(!1)},className:"bg-green-500 text-white px-3 py-1 rounded text-xs mt-2",children:"Save"})]}):O("h2",{className:"text-gray-800 font-bold text-lg",children:e}),ie("ul",{className:"text-gray-600 text-sm mt-2",children:[t.slice(0,3).map((I,x)=>ie("li",{children:[I.quantidade,"x ",I.nome]},x)),t.length>3&&O("li",{className:"text-gray-500",children:"..."})]}),ie("p",{className:"text-gray-700 font-bold mt-3 fixed bottom-3 right-4 text-[15px]",children:["TOTAL: R$ ",i.toFixed(2)]})]})};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),dE=(...n)=>n.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var I1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=U.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:c,...d},p)=>U.createElement("svg",{ref:p,...I1,width:e,height:e,stroke:n,strokeWidth:i?Number(t)*24/Number(e):t,className:dE("lucide",o),...d},[...c.map(([y,v])=>U.createElement(y,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=(n,e)=>{const t=U.forwardRef(({className:i,...o},l)=>U.createElement(S1,{ref:l,iconNode:e,className:dE(`lucide-${T1(n)}`,i),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ea=er("ArrowLeft",R1);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],A1=er("Check",C1);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],fE=er("CircleUser",k1);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],x1=er("Download",P1);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],D1=er("KeyRound",N1);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],O1=er("List",b1);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]],V1=er("PencilLine",L1);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],F1=er("Plus",M1);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],B1=er("RefreshCcw",U1);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]],pE=er("Share",z1);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],vl=er("Trash2",j1),Np=()=>{const n=vn();return ie("div",{className:"fixed bottom-0 left-0 right-0 bg-white border-t border-[#CFD8DC] flex justify-around items-center h-16",children:[ie("button",{className:"flex flex-col items-center text-[#656565] hover:text-[#64a651] transition-colors",onClick:()=>n("/home"),children:[O(O1,{}),O("span",{className:"text-xs mt-1",children:"Listas"})]}),ie("button",{onClick:()=>n("/new-list"),className:"flex flex-col items-center justify-center gap-1 bg-transparent border-none cursor-pointer pb-8",children:[O("div",{className:"bg-[#388E3C] flex items-center justify-center w-12 h-12 rounded-full p- shadow-lg hover:bg-[#4f7545] hover:text-[#388E3C] transition-colors",children:O(V1,{color:"white"})}),O("p",{className:"text-sm text-gray-700",children:"Nova Lista"})]}),ie("button",{className:"flex flex-col items-center text-[#656565] hover:text-[#388E3C] transition-colors",onClick:()=>n("/profile"),children:[O(fE,{}),O("span",{className:"text-xs mt-1",children:"Perfil"})]})]})},$1=()=>{const[n,e]=U.useState([]),[t,i]=U.useState(""),[o,l]=U.useState("list");vn(),U.useEffect(()=>{(async()=>{const v=ln.currentUser;if(!v)return;const T=rh(st,"listas"),I=sE(T,oE("uid","==",v.uid)),x=await Pp(I),F=[];x.forEach(j=>{F.push({id:j.id,...j.data()})}),e(F)})()},[]),U.useEffect(()=>{(async()=>{const v=ln.currentUser;if(v){const T=await $o(Et(st,"users",v.uid));T.exists()&&i(T.data().nome)}})()},[]);const c=async(y,v)=>{const T=Et(st,"listas",y);await Lc(T,{titulo:v}),e(I=>I.map(x=>x.id===y?{...x,titulo:v}:x))},d=async y=>{const v=Et(st,"listas",y);await Vc(v),e(T=>T.filter(I=>I.id!==y))};return ie("div",{className:"min-h-screen min-w-screen bg-white px-6",style:{fontFamily:"Calibri"},children:[ie("header",{className:"fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center",children:[O("div",{className:"flex-1",children:ie("h1",{className:"text-[24px] font-semibold text-[#4CAF50]",children:["Olá, ",t]})}),O("div",{className:"flex items-center gap-4",children:O("button",{className:"w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none",onClick:()=>{if(n.length===0){alert("Nenhuma lista para exportar.");return}const{titulo:y,itens:v}=n[0],T=v.map(x=>`Nome: ${x.nome}, Categoria: ${x.categoria}, Preço: ${x.preco}, Quantidade: ${x.quantidade}`).join(`
`),I=`https://api.whatsapp.com/send?text=${encodeURIComponent(y+`

`+T)}`;window.open(I,"_blank")},children:O(pE,{size:24})})})]}),ie("div",{className:"pt-20 flex justify-between items-center",children:[O("h2",{className:"text-lg font-medium text-[#656565]",children:"Todas as listas"}),ie("div",{className:"flex items-center border border-gray-300 rounded-lg overflow-hidden",children:[O("button",{className:`px-4 py-2 text-sm ${o==="list"?"bg-[#FBE9E7] text-[#BF360C] font-bold":"text-[#212121]"}`,onClick:()=>l("list"),children:"LISTA"}),O("button",{className:`px-4 py-2 text-sm ${o==="grid"?"bg-[#FBE9E7] text-[#BF360C] font-bold":"text-[#212121]"}`,onClick:()=>l("grid"),children:"GRADE"})]})]}),O("div",{className:`mt-5 grid gap-4 ${o==="list"?"grid-cols-1":"grid-cols-2"}`,children:n.length===0?O("p",{className:"text-center text-[#656565] mt-6",children:"Nenhuma lista encontrada"}):n.map(y=>O(E1,{id:y.id,titulo:y.titulo,itens:y.itens||[],total:parseFloat(y.total)||0,onEdit:c,onDelete:d},y.id))}),O(Np,{})]})},q1=()=>{const n=vn(),e=Ko(),[t,i]=U.useState(""),[o,l]=U.useState(""),[c,d]=U.useState("");return ie("div",{className:"flex flex-col items-center justify-center min-w-screen min-h-screen bg-white px-6",children:[O("div",{className:"absolute top-14 left-6 cursor-pointer",onClick:()=>n(-1),children:O(ea,{size:24,className:"text-red-700"})}),O("h1",{className:"text-[20px] font-semibold text-[#656565] mb-6",children:"Entre agora"}),ie("form",{className:"w-full max-w-sm",onSubmit:async y=>{y.preventDefault(),d("");try{await qR(e,t,o),n("/home")}catch{d("Credenciais inválidas. Tente novamente.")}},children:[O("label",{className:"block text-[#455A64] text-[14px] text-left font-medium mb-1",children:"Email"}),O("input",{type:"email",value:t,onChange:y=>i(y.target.value),className:"w-full border border-[#CFD8DC]  rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#BF360C] text-black",required:!0}),O("label",{className:"block text-[#455A64] text-[14px] text-left font-medium mb-1",children:"Senha"}),O("input",{type:"password",value:o,onChange:y=>l(y.target.value),className:"w-full border border-gray-300 rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#BF360C] text-black",required:!0}),c&&O("p",{className:"text-red-700 text-sm mb-4",children:c}),O("button",{type:"submit",className:"w-full !bg-[#BF360C] text-white mt-4 h-11 rounded-lg shadow-md text-[16px]",children:"ENTRAR"})]}),ie("p",{className:"mt-6 text-[#888888] text-[12px]",children:["NÃO POSSUI UMA CONTA?"," ",O(Tl,{to:"/register",className:"!text-[#BF360C] font-bold",children:"CRIE UMA AQUI"})]})]})},E_=({isOpen:n,onClose:e,listId:t,setListId:i,setItens:o,itemUid:l})=>{const[c,d]=U.useState(""),[p,y]=U.useState(""),[v,T]=U.useState("0"),[I,x]=U.useState(1),[F,j]=U.useState([]),[V,W]=U.useState([]),[J,G]=U.useState(0),[re,_e]=U.useState(!1);U.useEffect(()=>{(async()=>{const R=(await Pp(rh(st,"categorias"))).docs.map(A=>({id:A.id,...A.data()}));j(R)})()},[]),U.useEffect(()=>{if(c){const P=F.find(S=>S.nome===c);if(P&&P.itens){const S=P.itens.split(",").map(R=>R.trim());W(S)}else W([])}else W([])},[c,F]),U.useEffect(()=>{G(I*v)},[I,v]),U.useEffect(()=>{n&&(async()=>{if(l&&t){const S=Et(st,"listas",t),R=await $o(S);if(R.exists()){const N=(R.data().itens||[]).find(M=>M.uid===l);N&&(y(N.nome),T(N.preco),x(N.quantidade),_e(!0))}}})()},[n,l,t]);const me=async()=>{if(!p.trim()||isNaN(parseFloat(v))||I<=0)return;const P=ln.currentUser;if(P){if(!t){console.error("Lista ID não encontrada");return}try{let S=Et(st,"listas",t);const R=await $o(S),A=parseFloat(v)||0;if(re){if(R.exists()){const M=(R.data().itens||[]).map(k=>k.uid===l?{...k,nome:p,preco:A,quantidade:I}:k);await Lc(S,{itens:M}),o(M)}}else{const N={uid:crypto.randomUUID(),nome:p,preco:A,quantidade:I,comprado:!1};if(R.exists()){const M=(R.data().total||0)+A*I;await Lc(S,{itens:g1(N),total:M})}else await bi(S,{uid:P.uid,titulo:"Nova Lista",itens:[N],total:A*I});o(M=>[...M,N])}y(""),T("0"),x(1),_e(!1),e()}catch(S){console.error("Erro ao adicionar item:",S)}}};return n?ie("div",{className:"fixed inset-0 flex items-center justify-center",style:{fontFamily:"Calibri"},children:[O("div",{className:"absolute inset-0 bg-black opacity-80",onClick:e}),ie("div",{className:"relative bg-white p-6 rounded-lg w-11/12 max-w-md text-black",children:[O("div",{className:"h-1 w-12 bg-gray-400 mx-auto rounded-full mb-4"}),O("label",{className:"block text-sm text-gray-600",children:"Selecione uma categoria"}),ie("select",{className:"w-full p-2 border rounded mt-1",value:c,onChange:P=>d(P.target.value),children:[O("option",{value:"",children:"Selecione"}),F.map((P,S)=>O("option",{value:P.nome,children:P.nome},S))]}),O("label",{className:"block text-sm text-gray-600 mt-4",children:"Informe o item"}),V.length>0?ie("select",{className:"w-full p-2 border rounded mt-1",value:p,onChange:P=>y(P.target.value),children:[O("option",{value:"",children:"Selecione"}),V.map((P,S)=>O("option",{value:P,children:P},S))]}):O("input",{type:"text",className:"w-full p-2 border rounded mt-1",value:p,onChange:P=>y(P.target.value)}),O("label",{className:"block text-sm text-gray-600 mt-4",children:"Valor unitário"}),O("input",{type:"number",min:"0",step:"0.01",className:"w-full p-2 border rounded mt-1 bg-white text-gray-600",value:v,onChange:P=>{const S=parseFloat(P.target.value);!isNaN(S)&&S>=0?T(S.toString()):P.target.value===""&&T("0")},onBlur:()=>{(v===""||isNaN(parseFloat(v)))&&T("0")},placeholder:"0"}),ie("div",{className:"flex items-center justify-between mt-4",children:[O("label",{className:"block text-sm text-gray-600",children:"Quantidade"}),ie("div",{className:"flex items-center mt-1 bg-[#FBE9E7] h-7 w-21 rounded-md",children:[O("button",{className:`p-2 text-gray rounded ${I<=1?"opacity-50 cursor-not-allowed":""}`,onClick:()=>x(Math.max(1,I-1)),disabled:I<=1,children:"-"}),O("span",{className:"px-4 text-black",children:I}),O("button",{className:"p-2 text-gray rounded",onClick:()=>x(I+1),children:"+"})]})]}),O("button",{className:"w-full mt-6 bg-[#BF360C] text-gray p-3 rounded-md text-white font-semibold",onClick:me,children:re?"Salvar Alterações":"Adicionar"}),O("hr",{className:"my-4"}),O("div",{className:"text-center text-[#00000065] text-sm font-semibold text-[14px]",children:"Resumo da lista"}),ie("div",{className:"flex justify-between text-gray-600 text-sm mt-2 font-medium",children:[O("p",{children:"Quantidade Total"}),O("p",{children:I})]}),ie("div",{className:"flex justify-between font-medium text-gray-800 text-lg text-[14px]",children:[O("p",{children:"Valor Total"}),ie("p",{className:"font-bold text-black text-[16px]",children:["R$ ",J.toFixed(2)]})]})]})]}):null},H1=({isVisible:n,onHide:e,listId:t})=>{const i=vn(),o=async()=>{try{const l=ln.currentUser;if(!l){console.error("Usuário não autenticado");return}const c=Et(st,"listas",t),d=await $o(c);if(d.exists()){const p=d.data(),y=Et(st,"trash",t);await bi(y,{...p,userId:l.uid,deletedAt:new Date().toISOString()}),await Vc(c),i("/home")}else console.error("Lista não encontrada")}catch(l){console.error("Erro ao mover para lixeira:",l),alert("Erro ao mover item para lixeira. Tente novamente.")}};return n?ie("div",{children:[O("div",{className:"absolute inset-0 bg-black opacity-80",onClick:e}),ie("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 \r w-[90vw] h-[50vw] md:w-[30vw] md:h-[16vw] bg-white rounded-md p-5 text-[#00000088]\r flex flex-col items-center justify-center text-center",children:[O("div",{className:"mb-4 p-2.5 bg-[#FFF1F0] rounded-md",children:O(vl,{color:"#F5222D"})}),ie("p",{className:"mb-4",children:["Você tem certeza de que",O("br",{}),"deseja apagar esta lista?"]}),ie("div",{className:"flex justify-center gap-4 w-full",children:[O("button",{className:"text-[#00000065] py-2 px-6 rounded-lg w-full\r text-[14px] font-bold bg-white cursor-pointer transition-colors duration-300",onClick:e,children:"Cancelar"}),O("button",{className:"border border-[#F5222D] text-[#F5222D] py-2 px-6 rounded-lg w-full\r text-[14px] font-bold bg-white cursor-pointer transition-colors duration-300",onClick:o,children:"Sim, apagar"})]})]})]}):null},T_=()=>{const n=vn(),{id:e}=_I(),[t,i]=U.useState("Nova Lista"),[o,l]=U.useState(!1),[c,d]=U.useState([]),[p,y]=U.useState("todos"),[v,T]=U.useState(e),[I,x]=U.useState(null),[F,j]=U.useState(!1),[V,W]=U.useState(!1),[J,G]=U.useState(!1);U.useEffect(()=>{(async()=>{if(!e)return;const N=Et(st,"listas",e),M=await $o(N);if(M.exists()){const k=M.data();i(k.titulo),d(k.itens||[])}})()},[e]);const re=async()=>{const A=ln.currentUser;if(!A)return;const N=Et(st,"listas",e||`${A.uid}-${Date.now()}`);await bi(N,{uid:A.uid,titulo:t,itens:c,total:c.reduce((M,k)=>M+(k.preco||0),0)}),n("/home")},_e=A=>{x(A),W(!0)},me=()=>{if(c.length===0){alert("Nenhum item para exportar.");return}const A=c.map(M=>`Nome: ${M.nome}, Categoria: ${M.categoria}, Preço: ${M.preco}, Quantidade: ${M.quantidade}`).join(`
`),N=`https://api.whatsapp.com/send?text=${encodeURIComponent(t+`

`+A)}`;window.open(N,"_blank")},P=async()=>{if(!e||!ln.currentUser)return;const A=Et(st,"listas",e);await bi(A,{titulo:t},{merge:!0}),l(!1)},S=p==="comprados"?c.filter(A=>A.comprado):c,R=async A=>{const N=[...c];if(N[A].comprado=!N[A].comprado,d(N),e){const M=Et(st,"listas",e);await bi(M,{itens:N},{merge:!0})}};return ie("div",{className:"w-screen h-screen bg-white px-6",style:{fontFamily:"Calibri"},children:[ie("header",{className:"fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center",children:[O("button",{className:"w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none",onClick:()=>n(-1),children:O(ea,{color:"red"})}),O("h1",{className:"text-[18px] font-semibold text-[#00000088] cursor-pointer pl-5",onClick:()=>l(!0),children:o?O("input",{type:"text",value:t,onChange:A=>i(A.target.value),onBlur:P,onKeyDown:A=>A.key==="Enter"&&P(),autoFocus:!0,className:"rounded px-2 py-1 w-auto focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"}):t}),ie("div",{className:"flex items-center space-x-4",children:[O("button",{className:"w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none",onClick:me,children:O(pE,{color:"#00000088"})}),O("button",{className:"w-10 h-10 flex items-center justify-center bg-white text-[#656565] rounded-lg focus:outline-none",onClick:()=>G(!0),children:O(vl,{color:"#CF1322"})})]})]}),ie("div",{className:"pt-20",children:[ie("div",{className:"flex justify-center gap-4 mb-4",children:[O("button",{onClick:()=>y("todos"),className:`mt-4 py-2 px-6 text-center rounded-4xl transition-colors duration-300 text-[14px] font-medium ${p==="todos"?"bg-[#2E7D32] text-[#FFFFFF]":"border border-[#2E7D32] text-[#2E7D32] bg-white"}`,children:"Todos os itens"}),O("button",{onClick:()=>y("comprados"),className:`mt-4 py-2 px-6 text-center rounded-4xl transition-colors duration-300 text-[14px] font-medium ${p==="comprados"?"bg-[#2E7D32] text-[#FFFFFF]":"border border-[#2E7D32] text-[#2E7D32] bg-white"}`,children:"Comprados"})]}),S.length===0?O("p",{className:"text-center text-[#00000045] mt-6",children:p==="comprados"?"Nenhum item comprado":"Nenhum item cadastrado"}):O("ul",{className:"mt-4 space-y-2",children:S.length===0?O("p",{className:"text-center text-[#00000045] mt-6",children:p==="comprados"?"Nenhum item comprado":"Nenhum item cadastrado"}):O("ul",{className:"mt-4 space-y-2",children:S.map((A,N)=>ie("li",{className:"p-2 border border-[#CFD8DC] rounded-md flex items-center gap-3",onDoubleClick:()=>_e(A.uid),children:[O("button",{onClick:()=>R(N),className:`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all duration-200 ${A.comprado?"bg-[#66BB6A] border-[#66BB6A]":"bg-white border-gray-300"}`,children:A.comprado&&O(A1,{className:"w-5 h-5 text-white"})}),O("span",{className:"text-gray-700",children:A.nome})]},A.uid))})})]}),O("div",{className:"fixed bottom-4 left-0 right-0 flex justify-center drop-shadow-xl",children:ie("div",{className:"bg-white rounded-xl p-4 w-11/12 max-w-md",children:[ie("div",{className:"flex justify-between text-gray-600 text-sm",children:[O("p",{children:"Quantidade Total"}),O("p",{children:c.reduce((A,N)=>A+(N.quantidade||1),0)})]}),ie("div",{className:"flex justify-between font-semibold text-gray-800 text-sm",children:[O("p",{children:"Valor Total"}),ie("p",{children:["R$ ",c.reduce((A,N)=>A+(N.preco||0)*(N.quantidade||1),0).toFixed(2)]})]}),O("button",{onClick:()=>j(!0),className:"mt-4 bg-[#FBE9E7] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px cursor-pointer transition-colors duration-300",children:ie("div",{className:"flex justify-center items-center gap-1 font-semibold",children:[O(F1,{}),"Adicionar item"]})}),O("button",{onClick:re,className:"mt-4 border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300",children:"Salvar Lista"})]})}),F&&O(E_,{isOpen:F,onClose:()=>j(!1),listId:v,setListId:T,setItens:d}),V&&O(E_,{isOpen:V,onClose:()=>W(!1),itemUid:I,listId:v,setItens:d}),J&&O(H1,{isVisible:J,onHide:()=>G(!1),listId:v})]})},W1=()=>{const[n,e]=U.useState(""),[t,i]=U.useState(""),[o,l]=U.useState(""),[c,d]=U.useState(""),[p,y]=U.useState(!1),[v,T]=U.useState(""),I=vn(),x=j=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(j).toLowerCase());return ie("div",{className:"min-h-screen min-w-screen bg-white px-6",style:{fontFamily:"Calibri"},children:[O("header",{className:"fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center z-10",children:O("div",{className:"absolute top-5 left-6 cursor-pointer",onClick:()=>I(-1),children:O(ea,{size:24,className:"text-red-700"})})}),ie("div",{className:"pt-20 flex flex-col items-center",children:[O("h1",{className:"text-[24px] font-semibold text-[#656565] mb-6",children:"Crie sua conta"}),v&&O("p",{className:"text-red-500 mb-4 text-sm w-full max-w-md",children:v}),ie("form",{onSubmit:async j=>{if(j.preventDefault(),y(!0),T(""),!n||!t||!o||!c){T("Todos os campos são obrigatórios"),y(!1);return}if(!x(t)){T("Por favor, insira um e-mail válido"),y(!1);return}if(o.length<6){T("A senha deve ter pelo menos 6 caracteres"),y(!1);return}if(o!==c){T("As senhas não coincidem"),y(!1);return}try{const W=(await $R(ln,t,o)).user;await bi(Et(st,"users",W.uid),{nome:n,email:t,createdAt:new Date().toISOString()}),e(""),i(""),l(""),d(""),I("/login")}catch(V){switch(V.code){case"auth/email-already-in-use":T("Este e-mail já está cadastrado");break;case"auth/weak-password":T("A senha deve ter pelo menos 6 caracteres");break;case"auth/invalid-email":T("E-mail inválido");break;default:T("Ocorreu um erro durante o cadastro. Tente novamente.")}}finally{y(!1)}},className:"w-full max-w-md space-y-4",children:[ie("div",{children:[O("label",{htmlFor:"nome",className:"block text-gray-700 mb-1 text-sm",children:"Nome"}),O("input",{id:"nome",type:"text",value:n,onChange:j=>e(j.target.value),className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",required:!0})]}),ie("div",{children:[O("label",{htmlFor:"email",className:"block text-gray-700 mb-1 text-sm",children:"E-mail"}),O("input",{id:"email",type:"email",value:t,onChange:j=>i(j.target.value),className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",required:!0})]}),ie("div",{children:[O("label",{htmlFor:"senha",className:"block text-gray-700 mb-1 text-sm",children:"Senha (mínimo 6 caracteres)"}),O("input",{id:"senha",type:"password",value:o,onChange:j=>l(j.target.value),className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",required:!0,minLength:"6"})]}),ie("div",{children:[O("label",{htmlFor:"confirmarSenha",className:"block text-gray-700 mb-1 text-sm",children:"Confirmar Senha"}),O("input",{id:"confirmarSenha",type:"password",value:c,onChange:j=>d(j.target.value),className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",required:!0,minLength:"6"})]}),O("button",{type:"submit",disabled:p,className:`w-full mt-6 py-3 rounded-lg text-sm text-[16px] border !bg-[#BF360C] text-white 
              hover:bg-[#BF360C] hover:text-white transition-colors duration-300 ${p?"opacity-50 cursor-not-allowed":""}`,children:p?"Cadastrando...":"Cadastrar"})]}),ie("div",{className:"w-full max-w-md text-center mt-4",children:[O("span",{className:"text-gray-600 text-sm",children:"Já tem uma conta? "}),O(Tl,{to:"/login",className:"text-[#BF360C] text-sm font-medium hover:underline",children:"Faça login"})]})]})]})},K1=()=>{const n=vn();return ie("div",{className:"flex flex-col items-center min-h-screen bg-white px-6 pt-10",style:{fontFamily:"Calibri"},children:[O("div",{className:"w-40 h-40 border border-gray-400 flex items-center justify-center my-20",children:O("span",{className:"text-gray-400 text-4xl",children:"🖼️"})}),ie("div",{className:"flex flex-col w-full max-w-xs items-center",children:[O("button",{className:"w-full bg-[#BF360C] text-white text-[16px] font-medium py-3 rounded-md shadow-md mb-4",onClick:()=>n("/login"),children:"FAZER LOGIN"}),O("button",{className:"w-full border-2 border-[#BF360C] text-[#BF360C] text-[16px] font-semibold py-3 rounded-md mb-6",onClick:()=>n("/anonymous"),children:"ENTRAR COMO CONVIDADO"}),ie("p",{className:"text-[12px] text-gray-700",children:["NÃO POSSUI UMA CONTA?",O(Tl,{to:"/register",className:"text-[#BF360C] font-bold ml-1",children:"CRIE UMA AQUI"})]})]})]})};/**
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
 */const mE="firebasestorage.googleapis.com",gE="storageBucket",G1=2*60*1e3,Q1=10*60*1e3;/**
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
 */class at extends Er{constructor(e,t,i=0){super(tf(e),`Firebase Storage: ${t} (${tf(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,at.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tf(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ot;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ot||(ot={}));function tf(n){return"storage/"+n}function Dp(){const n="An unknown error occurred, please check the error payload for server response.";return new at(ot.UNKNOWN,n)}function Y1(n){return new at(ot.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function X1(n){return new at(ot.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function J1(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new at(ot.UNAUTHENTICATED,n)}function Z1(){return new at(ot.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ex(n){return new at(ot.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function tx(){return new at(ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nx(){return new at(ot.CANCELED,"User canceled the upload/download.")}function rx(n){return new at(ot.INVALID_URL,"Invalid URL '"+n+"'.")}function ix(n){return new at(ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function sx(){return new at(ot.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+gE+"' property when initializing the app?")}function ox(){return new at(ot.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ax(){return new at(ot.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lx(n){return new at(ot.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Nf(n){return new at(ot.INVALID_ARGUMENT,n)}function yE(){return new at(ot.APP_DELETED,"The Firebase app was deleted.")}function ux(n){return new at(ot.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function cl(n,e){return new at(ot.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ja(n){throw new at(ot.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class _n{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=_n.makeFromUrl(e,t)}catch{return new _n(e,"")}if(i.path==="")return i;throw ix(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+o+c,"i"),p={bucket:1,path:3};function y(re){re.path_=decodeURIComponent(re.path)}const v="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",x=new RegExp(`^https?://${T}/${v}/b/${o}/o${I}`,"i"),F={bucket:1,path:3},j=t===mE?"(?:storage.googleapis.com|storage.cloud.google.com)":t,V="([^?#]*)",W=new RegExp(`^https?://${j}/${o}/${V}`,"i"),G=[{regex:d,indices:p,postModify:l},{regex:x,indices:F,postModify:y},{regex:W,indices:{bucket:1,path:2},postModify:y}];for(let re=0;re<G.length;re++){const _e=G[re],me=_e.regex.exec(e);if(me){const P=me[_e.indices.bucket];let S=me[_e.indices.path];S||(S=""),i=new _n(P,S),_e.postModify(i);break}}if(i==null)throw rx(e);return i}}class cx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function hx(n,e,t){let i=1,o=null,l=null,c=!1,d=0;function p(){return d===2}let y=!1;function v(...V){y||(y=!0,e.apply(null,V))}function T(V){o=setTimeout(()=>{o=null,n(x,p())},V)}function I(){l&&clearTimeout(l)}function x(V,...W){if(y){I();return}if(V){I(),v.call(null,V,...W);return}if(p()||c){I(),v.call(null,V,...W);return}i<64&&(i*=2);let G;d===1?(d=2,G=0):G=(i+Math.random())*1e3,T(G)}let F=!1;function j(V){F||(F=!0,I(),!y&&(o!==null?(V||(d=2),clearTimeout(o),T(0)):V||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,j(!0)},t),j}function dx(n){n(!1)}/**
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
 */function fx(n){return n!==void 0}function px(n){return typeof n=="object"&&!Array.isArray(n)}function bp(n){return typeof n=="string"||n instanceof String}function I_(n){return Op()&&n instanceof Blob}function Op(){return typeof Blob<"u"}function S_(n,e,t,i){if(i<e)throw Nf(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Nf(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Lp(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function _E(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var Ts;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ts||(Ts={}));/**
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
 */function mx(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
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
 */class gx{constructor(e,t,i,o,l,c,d,p,y,v,T,I=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=y,this.progressCallback_=v,this.connectionFactory_=T,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,F)=>{this.resolve_=x,this.reject_=F,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new rc(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,y=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,y)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===Ts.NO_ERROR,p=l.getStatus();if(!d||mx(p,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Ts.ABORT;i(!1,new rc(!1,null,v));return}const y=this.successCodes_.indexOf(p)!==-1;i(!0,new rc(y,l))})},t=(i,o)=>{const l=this.resolve_,c=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());fx(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=Dp();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(o.canceled){const p=this.appDelete_?yE():nx();c(p)}else{const p=tx();c(p)}};this.canceled_?t(!1,new rc(!1,null,!0)):this.backoffId_=hx(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rc{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function yx(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function _x(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vx(n,e){e&&(n["X-Firebase-GMPID"]=e)}function wx(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Ex(n,e,t,i,o,l,c=!0){const d=_E(n.urlParams),p=n.url+d,y=Object.assign({},n.headers);return vx(y,e),yx(y,t),_x(y,l),wx(y,i),new gx(p,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,c)}/**
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
 */function Tx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ix(...n){const e=Tx();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Op())return new Blob(n);throw new at(ot.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Sx(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function Rx(n){if(typeof atob>"u")throw lx("base-64");return atob(n)}/**
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
 */const fr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nf{constructor(e,t){this.data=e,this.contentType=t||null}}function Cx(n,e){switch(n){case fr.RAW:return new nf(vE(e));case fr.BASE64:case fr.BASE64URL:return new nf(wE(n,e));case fr.DATA_URL:return new nf(kx(e),Px(e))}throw Dp()}function vE(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function Ax(n){let e;try{e=decodeURIComponent(n)}catch{throw cl(fr.DATA_URL,"Malformed data URL.")}return vE(e)}function wE(n,e){switch(n){case fr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw cl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case fr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw cl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Rx(e)}catch(o){throw o.message.includes("polyfill")?o:cl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class EE{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw cl(fr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=xx(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function kx(n){const e=new EE(n);return e.base64?wE(fr.BASE64,e.rest):Ax(e.rest)}function Px(n){return new EE(n).contentType}function xx(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class Ai{constructor(e,t){let i=0,o="";I_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(I_(this.data_)){const i=this.data_,o=Sx(i,e,t);return o===null?null:new Ai(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Ai(i,!0)}}static getBlob(...e){if(Op()){const t=e.map(i=>i instanceof Ai?i.data_:i);return new Ai(Ix.apply(null,t))}else{const t=e.map(c=>bp(c)?Cx(fr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)o[l++]=c[d]}),new Ai(o,!0)}}uploadData(){return this.data_}}/**
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
 */function TE(n){let e;try{e=JSON.parse(n)}catch{return null}return px(e)?e:null}/**
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
 */function Nx(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Dx(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function IE(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function bx(n,e){return e}class Yt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||bx}}let ic=null;function Ox(n){return!bp(n)||n.length<2?n:IE(n)}function SE(){if(ic)return ic;const n=[];n.push(new Yt("bucket")),n.push(new Yt("generation")),n.push(new Yt("metageneration")),n.push(new Yt("name","fullPath",!0));function e(l,c){return Ox(c)}const t=new Yt("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const o=new Yt("size");return o.xform=i,n.push(o),n.push(new Yt("timeCreated")),n.push(new Yt("updated")),n.push(new Yt("md5Hash",null,!0)),n.push(new Yt("cacheControl",null,!0)),n.push(new Yt("contentDisposition",null,!0)),n.push(new Yt("contentEncoding",null,!0)),n.push(new Yt("contentLanguage",null,!0)),n.push(new Yt("contentType",null,!0)),n.push(new Yt("metadata","customMetadata",!0)),ic=n,ic}function Lx(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new _n(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function Vx(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return Lx(i,n),i}function RE(n,e,t){const i=TE(e);return i===null?null:Vx(n,i,t)}function Mx(n,e,t,i){const o=TE(e);if(o===null||!bp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(y=>{const v=n.bucket,T=n.fullPath,I="/b/"+c(v)+"/o/"+c(T),x=Lp(I,t,i),F=_E({alt:"media",token:y});return x+F})[0]}function Fx(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class CE{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function AE(n){if(!n)throw Dp()}function Ux(n,e){function t(i,o){const l=RE(n,o,e);return AE(l!==null),l}return t}function Bx(n,e){function t(i,o){const l=RE(n,o,e);return AE(l!==null),Mx(l,o,n.host,n._protocol)}return t}function kE(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=Z1():o=J1():t.getStatus()===402?o=X1(n.bucket):t.getStatus()===403?o=ex(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function zx(n){const e=kE(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=Y1(n.path)),l.serverResponse=o.serverResponse,l}return t}function jx(n,e,t){const i=e.fullServerUrl(),o=Lp(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new CE(o,l,Bx(n,t),c);return d.errorHandler=zx(e),d}function $x(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function qx(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=$x(null,e)),i}function Hx(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let G="";for(let re=0;re<2;re++)G=G+Math.random().toString().slice(2);return G}const p=d();c["Content-Type"]="multipart/related; boundary="+p;const y=qx(e,i,o),v=Fx(y,t),T="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+p+"--",x=Ai.getBlob(T,i,I);if(x===null)throw ox();const F={name:y.fullPath},j=Lp(l,n.host,n._protocol),V="POST",W=n.maxUploadRetryTime,J=new CE(j,V,Ux(n,t),W);return J.urlParams=F,J.headers=c,J.body=x.uploadData(),J.errorHandler=kE(e),J}class Wx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o){if(this.sent_)throw Ja("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const l in o)o.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,o[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ja("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ja("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ja("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ja("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Kx extends Wx{initXhr(){this.xhr_.responseType="text"}}function PE(){return new Kx}/**
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
 */class Cs{constructor(e,t){this._service=e,t instanceof _n?this._location=t:this._location=_n.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Cs(e,t)}get root(){const e=new _n(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IE(this._location.path)}get storage(){return this._service}get parent(){const e=Nx(this._location.path);if(e===null)return null;const t=new _n(this._location.bucket,e);return new Cs(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw ux(e)}}function Gx(n,e,t){n._throwIfRoot("uploadBytes");const i=Hx(n.storage,n._location,SE(),new Ai(e,!0),t);return n.storage.makeRequestWithTokens(i,PE).then(o=>({metadata:o,ref:n}))}function Qx(n){n._throwIfRoot("getDownloadURL");const e=jx(n.storage,n._location,SE());return n.storage.makeRequestWithTokens(e,PE).then(t=>{if(t===null)throw ax();return t})}function Yx(n,e){const t=Dx(n._location.path,e),i=new _n(n._location.bucket,t);return new Cs(n.storage,i)}/**
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
 */function Xx(n){return/^[A-Za-z]+:\/\//.test(n)}function Jx(n,e){return new Cs(n,e)}function xE(n,e){if(n instanceof Vp){const t=n;if(t._bucket==null)throw sx();const i=new Cs(t,t._bucket);return e!=null?xE(i,e):i}else return e!==void 0?Yx(n,e):n}function Zx(n,e){if(e&&Xx(e)){if(n instanceof Vp)return Jx(n,e);throw Nf("To use ref(service, url), the first argument must be a Storage instance.")}else return xE(n,e)}function R_(n,e){const t=e==null?void 0:e[gE];return t==null?null:_n.makeFromBucketSpec(t,n)}function eN(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:Y_(o,n.app.options.projectId))}class Vp{constructor(e,t,i,o,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._bucket=null,this._host=mE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=G1,this._maxUploadRetryTime=Q1,this._requests=new Set,o!=null?this._bucket=_n.makeFromBucketSpec(o,this._host):this._bucket=R_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_n.makeFromBucketSpec(this._url,e):this._bucket=R_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){S_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){S_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cs(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new cx(yE());{const c=Ex(e,this._appId,i,o,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const C_="@firebase/storage",A_="0.13.5";/**
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
 */const NE="storage";function tN(n,e,t){return n=nt(n),Gx(n,e,t)}function nN(n){return n=nt(n),Qx(n)}function rN(n,e){return n=nt(n),Zx(n,e)}function iN(n=jf(),e){n=nt(n);const i=Bc(n,NE).getImmediate({identifier:e}),o=K_("storage");return o&&sN(i,...o),i}function sN(n,e,t,i={}){eN(n,e,t,i)}function oN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Vp(t,i,o,e,As)}function aN(){Is(new Li(NE,oN,"PUBLIC").setMultipleInstances(!0)),pr(C_,A_,""),pr(C_,A_,"esm2017")}aN();const lN=()=>{const n=vn(),[e,t]=U.useState(""),[i,o]=U.useState(null),[l,c]=U.useState(!1),[d,p]=U.useState(!1),[y,v]=U.useState(null),[T,I]=U.useState(""),[x,F]=U.useState(""),[j,V]=U.useState(""),[W,J]=U.useState(!1),[G,re]=U.useState(""),[_e,me]=U.useState(""),[P,S]=U.useState(null),R=U.useRef(null),A=U.useRef(null);U.useEffect(()=>{(async()=>{const K=ln.currentUser;if(K){const ue=Et(st,"users",K.uid);try{const Ee=await $o(ue);if(Ee.exists()){const Te=Ee.data();t(Te.nome||"Usuário"),o(Te),Te.photoUrl&&S(Te.photoUrl)}}catch(Ee){console.error("Erro ao carregar dados:",Ee)}}else n("/login")})()},[n]),U.useEffect(()=>{const b=K=>{K.preventDefault(),v(K),console.log("beforeinstallprompt event captured")};return window.addEventListener("beforeinstallprompt",b),()=>{window.removeEventListener("beforeinstallprompt",b)}},[]);const N=async()=>{try{await ln.signOut(),n("/")}catch(b){console.error("Erro ao fazer logout:",b)}},M=async()=>{if(!y){console.log("O evento beforeinstallprompt não está disponível.");return}y.prompt();const{outcome:b}=await y.userChoice;console.log(b==="accepted"?"Usuário aceitou o prompt de instalação":"Usuário rejeitou o prompt de instalação"),v(null)},k=()=>{c(!0)},Ze=()=>{c(!1)},St=()=>{p(!0),c(!1)},mt=()=>{p(!1)},Be=async()=>{if(V(""),re(""),me(""),J(!0),!T||!x){V("Todos os campos são obrigatórios"),J(!1);return}if(T.length<6){V("A senha deve ter pelo menos 6 caracteres"),J(!1);return}if(T!==x){V("As senhas não coincidem"),J(!1);return}try{const b=ln.currentUser;if(!b){me("Usuário não autenticado."),J(!1);return}const K=prompt("Digite sua senha atual para confirmar:");if(!K){me("Reautenticação cancelada."),J(!1);return}const ue=ks.credential(b.email,K);await jR(b,ue),await HR(b,T),re("Senha alterada com sucesso!"),I(""),F(""),mt()}catch(b){me("Erro ao alterar senha: "+b.message),console.error("Erro ao alterar senha:",b)}finally{J(!1)}};return O("div",{className:"w-screen h-screen bg-white px-6",style:{fontFamily:"Calibri"},children:ie("div",{className:"mt-20 w-full max-w-4xl mx-auto",children:[ie("div",{className:"mt-10 flex flex-col items-center justify-center md:flex-row md:space-x-8",children:[O("div",{onClick:()=>R.current.click(),className:"w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer",children:P?O("img",{src:P,alt:"Perfil",className:"w-full h-full object-cover rounded-full"}):O(fE,{size:60,className:"text-gray-500"})}),O("input",{type:"file",accept:"image/*",ref:R,onChange:async b=>{const K=b.target.files[0];if(K)try{const ue=iN(),Ee=rN(ue,`profilePhotos/${ln.currentUser.uid}`);await tN(Ee,K);const Te=await nN(Ee);S(Te),await Lc(Et(st,"users",ln.currentUser.uid),{photoUrl:Te})}catch(ue){console.error("Erro ao fazer upload da foto:",ue)}},className:"hidden"}),O("h2",{className:"text-green-600 mt-2 md:mt-0 text-lg font-semibold",children:e})]}),O("div",{className:"w-full max-w-sm md:max-w-md mt-6 mx-auto",children:ie("ul",{className:"space-y-4",children:[ie("li",{className:"flex items-center text-gray-700",children:[O(D1,{className:"mr-2",size:20}),O("button",{className:"!bg-transparent focus:outline-none",onClick:k,children:"Dados de acesso"})]}),ie("li",{className:"flex items-center text-gray-700",children:[O(x1,{className:"mr-2",size:20}),O("button",{className:"!bg-transparent focus:outline-none",onClick:()=>{A.current.click()},children:"Importar notas"}),O("input",{type:"file",accept:".txt",ref:A,onChange:async b=>{const K=b.target.files[0];if(K)try{const Te=(await K.text()).split(`
`).filter(ke=>ke.trim()!=="").map(ke=>{const[be,ze]=ke.split(",");return{title:be==null?void 0:be.trim(),content:ze==null?void 0:ze.trim()}}),xe=rh(st,"notes");for(const ke of Te)ke.title&&ke.content&&await p1(xe,{...ke,userId:ln.currentUser.uid,createdAt:new Date});alert("Notas importadas com sucesso!")}catch(ue){console.error("Erro ao importar notas:",ue),alert("Erro ao importar notas. Verifique o arquivo e tente novamente.")}},className:"hidden"})]}),ie("li",{className:"flex items-center text-gray-700",children:[O(vl,{className:"mr-2",size:20}),O("button",{className:"!bg-transparent focus:outline-none",onClick:()=>n("/trash"),children:"Lixeira"})]}),ie("li",{className:"flex items-center text-red-500",children:[O(ea,{className:"mr-2",size:20}),O("button",{className:"!bg-transparent focus:outline-none",onClick:N,children:"Sair"})]})]})}),ie("div",{className:"mt-8 bg-white rounded-lg shadow-md p-4 max-w-sm md:max-w-md w-full border border-red-400 mx-auto",children:[O("h3",{className:"text-red-500 font-semibold text-sm",children:"Baixe o Lista Fácil"}),O("p",{className:"text-gray-600 text-xs mt-1",children:"Tenha acesso às suas listas de forma simples mesmo sem internet"}),O("button",{onClick:M,className:"mt-3 w-full border border-red-500 text-red-500 py-1 rounded text-sm focus:outline-none",children:"Quero baixar"})]}),l&&O("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto flex items-center justify-center p-4",children:O("div",{className:"bg-white rounded-lg shadow-md w-full max-w-xs md:max-w-sm p-6",children:ie("div",{className:"text-center",children:[O("h3",{className:"text-lg font-medium text-[#666666] mb-4",children:"Dados de Acesso"}),O("div",{className:"text-[#666666] space-y-2",children:i?ie(w1,{children:[ie("p",{children:["Nome: ",i.nome]}),ie("p",{children:["Email: ",i.email]}),O("button",{className:"border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none",onClick:St,children:"Alterar Senha"})]}):O("p",{children:"Carregando dados..."})}),O("div",{className:"mt-6",children:O("button",{className:"border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none",onClick:Ze,children:"Fechar"})})]})})}),d&&O("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto flex items-center justify-center p-4",children:O("div",{className:"bg-white rounded-lg shadow-md w-full max-w-xs md:max-w-sm p-6",children:ie("div",{className:"text-center",children:[O("h3",{className:"text-lg font-medium text-[#333333] mb-4",children:"Alterar Senha"}),j&&O("p",{className:"text-red-500 mb-4 text-sm",children:j}),G&&O("p",{className:"text-green-500 mb-4 text-sm",children:G}),_e&&O("p",{className:"text-red-500 mb-4 text-sm",children:_e}),ie("div",{className:"space-y-3",children:[O("input",{type:"password",placeholder:"Nova Senha",className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",value:T,onChange:b=>I(b.target.value)}),O("input",{type:"password",placeholder:"Confirmar Nova Senha",className:"w-full px-4 py-2 border border-[#CFD8DC] rounded-lg focus:outline-none focus:border-[#BF360C]",value:x,onChange:b=>F(b.target.value)})]}),ie("div",{className:"mt-6 space-y-3",children:[O("button",{className:"border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none",onClick:Be,disabled:W,children:W?"Alterando...":"Salvar Nova Senha"}),O("button",{className:"border border-[#BF360C] text-[#BF360C] py-2 px-6 rounded-lg w-full text-[14px] bg-white cursor-pointer transition-colors duration-300 focus:outline-none",onClick:mt,disabled:W,children:"Cancelar"})]})]})})}),O(Np,{})]})})},uN=()=>{const n=Ko(),e=vn(),[t,i]=U.useState(""),o=async()=>{try{return await UR(n)}catch(c){throw alert("Erro ao entrar como convidado: "+c.message),c}},l=async c=>{c.preventDefault();try{const p=(await o()).user;await bi(Et(st,"users",p.uid),{nome:t,createdAt:new Date().toISOString()}),i(""),e("/home")}catch(d){console.error("Erro no login anônimo:",d),alert("Erro ao cadastrar o usuário: "+d.message)}};return ie("div",{className:"min-h-screen min-w-screen bg-white flex flex-col justify-center items-center px-6",style:{fontFamily:"Calibri"},children:[O("header",{className:"fixed top-5 left-0 right-0 bg-white px-6 py-2 flex justify-between items-center",children:O("div",{className:"absolute top-5 left-6 cursor-pointer",onClick:()=>e(-1),children:O(ea,{size:24,className:"text-red-700"})})}),ie("div",{className:"flex flex-col items-center w-full max-w-md",children:[O("h1",{className:"text-[20px] font-semibold text-[#656565] mb-6",children:"Acesse como convidado"}),ie("form",{onSubmit:c=>l(c),className:"w-full max-w-md space-y-4",children:[O("label",{className:"block text-[#455A64] text-[14px] text-left font-medium mb-1",children:"Informe seu nome"}),O("input",{type:"text",value:t,onChange:c=>i(c.target.value),className:"w-full border border-[#CFD8DC]  rounded-md p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#BF360C] text-black",required:!0}),O("button",{type:"submit",className:"w-full !bg-[#BF360C] text-white mt-4 h-11 rounded-lg shadow-md text-[16px]",children:"ACESSAR"})]}),O("button",{className:"w-full text-[#BF360C] mt-4 h-11 rounded-lg text-[16px] font-bold",onClick:()=>e("/register"),children:"CRIE UMA CONTA"})]})]})},cN=()=>{const[n,e]=U.useState([]),t=vn();U.useEffect(()=>{i()},[]);const i=async()=>{try{const c=ln.currentUser;if(!c){t("/login");return}const d=sE(rh(st,"trash"),oE("userId","==",c.uid)),p=await Pp(d),y=[];p.forEach(v=>{y.push({id:v.id,...v.data()})}),e(y)}catch(c){console.error("Erro ao carregar listas da lixeira:",c)}},o=async c=>{try{const{deletedAt:d,...p}=c;await bi(Et(st,"listas",c.id),p),await Vc(Et(st,"trash",c.id)),e(y=>y.filter(v=>v.id!==c.id)),alert("Lista restaurada com sucesso!")}catch(d){console.error("Erro ao restaurar lista:",d),alert("Erro ao restaurar lista. Tente novamente.")}},l=async c=>{if(window.confirm("Deseja excluir permanentemente esta lista?"))try{await Vc(Et(st,"trash",c)),e(d=>d.filter(p=>p.id!==c))}catch(d){console.error("Erro ao excluir permanentemente:",d)}};return O("div",{className:"w-screen min-h-screen bg-white px-6",children:ie("div",{className:"pt-20 w-full max-w-4xl mx-auto",children:[ie("div",{className:"flex items-center mb-6",children:[O("button",{onClick:()=>t("/profile"),className:"text-gray-600 hover:text-gray-800",children:O(ea,{size:24})}),O("h1",{className:"ml-4 text-xl font-semibold text-gray-800",children:"Lixeira"})]}),n.length===0?ie("div",{className:"text-center mt-10 text-gray-500",children:[O(vl,{size:48,className:"mx-auto mb-4 opacity-50"}),O("p",{children:"Nenhuma lista na lixeira"})]}):O("div",{className:"space-y-4",children:n.map(c=>O("div",{className:"border rounded-lg p-4 hover:border-gray-300",children:ie("div",{className:"flex justify-between items-center",children:[ie("div",{children:[O("h3",{className:"font-medium text-gray-800",children:c.titulo}),ie("span",{className:"text-sm text-gray-500",children:["Excluído em: ",new Date(c.deletedAt).toLocaleDateString("pt-BR")]})]}),ie("div",{className:"flex space-x-2",children:[O("button",{onClick:()=>o(c),className:"p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors",title:"Restaurar",children:O(B1,{size:20})}),O("button",{onClick:()=>l(c.id),className:"p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors",title:"Excluir permanentemente",children:O(vl,{size:20})})]})]})},c.id))}),O(Np,{})]})})},hN=()=>Ko().currentUser?O(M_,{to:"/home",replace:!0}):O(F_,{}),dN=()=>Ko().currentUser?O(F_,{}):O(M_,{to:"/",replace:!0});function fN(){const n=Ko(),[e,t]=U.useState(null);return U.useEffect(()=>{const i=QR(n,o=>{t(o)});return()=>i()},[]),U.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(i=>{console.log("Service Worker registered with scope:",i.scope)}).catch(i=>{console.error("Service Worker registration failed:",i)})},[]),O(r0,{children:ie(bI,{children:[ie(xn,{element:O(hN,{}),children:[O(xn,{path:"/",element:O(K1,{})}),O(xn,{path:"/register",element:O(W1,{})}),O(xn,{path:"/anonymous",element:O(uN,{})}),O(xn,{path:"/login",element:O(q1,{})})]}),ie(xn,{element:O(dN,{}),children:[O(xn,{path:"/home",element:O($1,{})}),O(xn,{path:"/list/:id",element:O(T_,{})}),O(xn,{path:"/new-list",element:O(T_,{})}),O(xn,{path:"/profile",element:O(lN,{})}),O(xn,{path:"/trash",element:O(cN,{})})]})]})})}BT.createRoot(document.getElementById("root")).render(O(U.StrictMode,{children:O(fN,{})}));
