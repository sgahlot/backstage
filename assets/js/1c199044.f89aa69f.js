/*! For license information please see 1c199044.f89aa69f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[496628],{187836:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(824246),o=r(511151);const s={id:"plugin-tech-insights-node.techinsightsstore.insertfacts",title:"TechInsightsStore.insertFacts()",description:"API reference for TechInsightsStore.insertFacts()"},c=void 0,i={id:"reference/plugin-tech-insights-node.techinsightsstore.insertfacts",title:"TechInsightsStore.insertFacts()",description:"API reference for TechInsightsStore.insertFacts()",source:"@site/../docs/reference/plugin-tech-insights-node.techinsightsstore.insertfacts.md",sourceDirName:"reference",slug:"/reference/plugin-tech-insights-node.techinsightsstore.insertfacts",permalink:"/docs/reference/plugin-tech-insights-node.techinsightsstore.insertfacts",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-tech-insights-node.techinsightsstore.insertfacts.md",tags:[],version:"current",frontMatter:{id:"plugin-tech-insights-node.techinsightsstore.insertfacts",title:"TechInsightsStore.insertFacts()",description:"API reference for TechInsightsStore.insertFacts()"}},a={},u=[{value:"Parameters",id:"parameters",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-tech-insights-node"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.techinsightsstore",children:(0,n.jsx)(t.code,{children:"TechInsightsStore"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.techinsightsstore.insertfacts",children:(0,n.jsx)(t.code,{children:"insertFacts"})})]}),"\n",(0,n.jsx)(t.p,{children:"Stores fact containers as rows into data store. Individual items in array correspond to a fact schema based on reference and entity based on entity identifier."}),"\n",(0,n.jsx)(t.p,{children:"Each row may contain multiple individual facts and values"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"insertFacts(options: {\n        id: string;\n        facts: TechInsightFact[];\n        lifecycle?: FactLifecycle;\n    }): Promise<void>;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"options"}),(0,n.jsxs)(t.td,{children:["{ id: string; facts: ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.techinsightfact",children:"TechInsightFact"}),"[]; lifecycle?: ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-tech-insights-node.factlifecycle",children:"FactLifecycle"}),"; }"]}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,s={},u=null,l=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,g={};function m(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||p}function _(){}function b(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||p}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=m.prototype;var v=b.prototype=new _;v.constructor=b,y(v,m.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,s={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,o)&&!k.hasOwnProperty(o)&&(s[o]=t[o]);var a=arguments.length-2;if(1===a)s.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===s[o]&&(s[o]=a[o]);return{$$typeof:r,type:e,key:c,ref:i,props:s,_owner:S.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,o,s,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return c=c(a=e),e=""===s?"."+C(a,0):s,j(c)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),I(c,t,o,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),t.push(c)),1;if(a=0,s=""===s?".":s+":",j(e))for(var u=0;u<e.length;u++){var l=s+C(i=e[u],u);a+=I(i,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)a+=I(i=i.value,t,o,l=s+C(i,u++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function P(e,t,r){if(null==e)return e;var n=[],o=0;return I(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},T={transition:null},F={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=c,t.PureComponent=b,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=S.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)x.call(t,u)&&!k.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==a?a[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:r,type:e.type,key:s,ref:c,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>s});var n=r(667294);const o=n.createContext({});function s(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||c:s(e),n.createElement(o.Provider,{value:i},t)}}}]);