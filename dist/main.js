/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t={224:(t,e,r)=>{r.d(e,{YA:()=>d}),r(894);let i=0,o=0,s=[],n=0,a=!1,l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=s.length;for(let e=0;e<t;e++){let t=s[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}s.splice(0,t),o+=t})).observe(l,{characterData:!0});const d={run:t=>(a||(a=!0,l.textContent=n++),s.push(t),i++),cancel(t){const e=t-o;if(e>=0){if(!s[e])throw new Error("invalid async handle: "+t);s[e]=null}}}},894:()=>{window.JSCompiler_renameProperty=function(t,e){return t}},557:(t,e,r)=>{function i(t,e,r){return{index:t,removed:e,addedCount:r}}function o(t,e){return t===e}r.d(e,{o:()=>l}),r(894);var s=r(224),n=r(342);function a(t){return"slot"===t.localName}let l=class{static getFlattenedNodes(t){const e=(0,n.r)(t);return a(t)?e.assignedNodes({flatten:!0}):Array.from(e.childNodes).map((t=>a(t)?(0,n.r)(t).assignedNodes({flatten:!0}):[t])).reduce(((t,e)=>t.concat(e)),[])}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){a(this._target)?this._listenSlots([this._target]):(0,n.r)(this._target).children&&(this._listenSlots((0,n.r)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,(t=>{this._processMutations(t)})):(this._nativeChildrenObserver=new MutationObserver((t=>{this._processMutations(t)})),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){a(this._target)?this._unlistenSlots([this._target]):(0,n.r)(this._target).children&&(this._unlistenSlots((0,n.r)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,s.YA.run((()=>this.flush())))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let r=t[e];r.addedNodes&&this._listenSlots(r.addedNodes),r.removedNodes&&this._unlistenSlots(r.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),r=(s=e,n=this._effectiveNodes,function(t,e,r,s,n,a){let l,d=0,h=0,c=Math.min(r-e,a-n);if(0==e&&0==n&&(d=function(t,e,r){for(let i=0;i<r;i++)if(!o(t[i],e[i]))return i;return r}(t,s,c)),r==t.length&&a==s.length&&(h=function(t,e,r){let i=t.length,s=e.length,n=0;for(;n<r&&o(t[--i],e[--s]);)n++;return n}(t,s,c-d)),n+=d,a-=h,(r-=h)-(e+=d)==0&&a-n==0)return[];if(e==r){for(l=i(e,[],0);n<a;)l.removed.push(s[n++]);return[l]}if(n==a)return[i(e,[],r-e)];let u=function(t){let e=t.length-1,r=t[0].length-1,i=t[e][r],o=[];for(;e>0||r>0;){if(0==e){o.push(2),r--;continue}if(0==r){o.push(3),e--;continue}let s,n=t[e-1][r-1],a=t[e-1][r],l=t[e][r-1];s=a<l?a<n?a:n:l<n?l:n,s==n?(n==i?o.push(0):(o.push(1),i=n),e--,r--):s==a?(o.push(3),e--,i=a):(o.push(2),r--,i=l)}return o.reverse(),o}(function(t,e,r,i,s,n){let a=n-s+1,l=r-e+1,d=new Array(a);for(let t=0;t<a;t++)d[t]=new Array(l),d[t][0]=t;for(let t=0;t<l;t++)d[0][t]=t;for(let r=1;r<a;r++)for(let n=1;n<l;n++)if(o(t[e+n-1],i[s+r-1]))d[r][n]=d[r-1][n-1];else{let t=d[r-1][n]+1,e=d[r][n-1]+1;d[r][n]=t<e?t:e}return d}(t,e,r,s,n,a));l=void 0;let p=[],_=e,m=n;for(let t=0;t<u.length;t++)switch(u[t]){case 0:l&&(p.push(l),l=void 0),_++,m++;break;case 1:l||(l=i(_,[],0)),l.addedCount++,_++,l.removed.push(s[m]),m++;break;case 2:l||(l=i(_,[],0)),l.addedCount++,_++;break;case 3:l||(l=i(_,[],0)),l.removed.push(s[m]),m++}return l&&p.push(l),p}(s,0,s.length,n,0,n.length));var s,n;for(let e,i=0;i<r.length&&(e=r[i]);i++)for(let r,i=0;i<e.removed.length&&(r=e.removed[i]);i++)t.removedNodes.push(r);for(let i,o=0;o<r.length&&(i=r[o]);o++)for(let r=i.index;r<i.index+i.addedCount;r++)t.addedNodes.push(e[r]);this._effectiveNodes=e;let a=!1;return(t.addedNodes.length||t.removedNodes.length)&&(a=!0,this.callback.call(this._target,t)),a}_listenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];a(r)&&r.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let r=t[e];a(r)&&r.removeEventListener("slotchange",this._boundSchedule)}}}},14:(t,e,r)=>{r.d(e,{o:()=>s}),r(894);let i=0;function o(){}o.prototype.__mixinApplications,o.prototype.__mixinSet;const s=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let r=i++;return function(i){let o=i.__mixinSet;if(o&&o[r])return i;let s=e,n=s.get(i);if(!n){n=t(i),s.set(i,n);let e=Object.create(n.__mixinSet||o||null);e[r]=!0,n.__mixinSet=e}return n}}},967:(t,e,r)=>{r.d(e,{Kk:()=>a,Rq:()=>l,iY:()=>d}),r(894);let i,o,s=/(url\()([^)]*)(\))/g,n=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function a(t,e){if(t&&n.test(t))return t;if("//"===t)return t;if(void 0===i){i=!1;try{const t=new URL("b","http://a");t.pathname="c%20d",i="http://a/c%20d"===t.href}catch(t){}}if(e||(e=document.baseURI||window.location.href),i)try{return new URL(t,e).href}catch(e){return t}return o||(o=document.implementation.createHTMLDocument("temp"),o.base=o.createElement("base"),o.head.appendChild(o.base),o.anchor=o.createElement("a"),o.body.appendChild(o.anchor)),o.base.href=e,o.anchor.href=t,o.anchor.href||t}function l(t,e){return t.replace(s,(function(t,r,i,o){return r+"'"+a(i.replace(/["']/g,""),e)+"'"+o}))}function d(t){return t.substring(0,t.lastIndexOf("/")+1)}},387:(t,e,r)=>{r.d(e,{FV:()=>s,HY:()=>p,Hr:()=>u,XN:()=>l,ZN:()=>d,a2:()=>c,ew:()=>v,gx:()=>g,ls:()=>_,md:()=>b,nL:()=>h,sM:()=>n,v1:()=>a,xj:()=>f}),r(894);var i=r(967);const o=!window.ShadyDOM||!window.ShadyDOM.inUse,s=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,o&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch(t){return!1}})());let n=window.Polymer&&window.Polymer.rootPath||(0,i.iY)(document.baseURI||window.location.href),a=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let l=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,d=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,h=window.Polymer&&window.Polymer.legacyOptimizations||!1,c=window.Polymer&&window.Polymer.legacyWarnings||!1,u=window.Polymer&&window.Polymer.syncInitialRender||!1,p=window.Polymer&&window.Polymer.legacyUndefined||!1,_=window.Polymer&&window.Polymer.orderedComputed||!1,m=!0;const f=function(t){m=t};let g=window.Polymer&&window.Polymer.removeNestedTemplates||!1,v=window.Polymer&&window.Polymer.fastDomIf||!1;window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes;let b=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1},342:(t,e,r)=>{r.d(e,{r:()=>i});const i=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t},428:(t,e,r)=>{r.d(e,{H3:()=>Ht,dy:()=>Ft}),r(894);var i=r(387),o=r(14),s=r(967);let n={},a={};function l(t,e){n[t]=a[t.toLowerCase()]=e}function d(t){return n[t]||a[t.toLowerCase()]}class h extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let r=d(t);return r&&e?r.querySelector(e):r}return null}attributeChangedCallback(t,e,r,i){e!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=(0,s.Kk)(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=(0,s.iY)(e)}return this.__assetpath}register(t){if(t=t||this.id){if(i.XN&&void 0!==d(t))throw l(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,l(t,this),(e=this).querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}var e}}h.prototype.modules=n,customElements.define("dom-module",h);const c="shady-unscoped";function u(t){return h.import(t)}function p(t){let e=t.body?t.body:t;const r=(0,s.Rq)(e.textContent,t.baseURI),i=document.createElement("style");return i.textContent=r,i}function _(t){const e=t.trim().split(/\s+/),r=[];for(let t=0;t<e.length;t++)r.push(...m(e[t]));return r}function m(t){const e=u(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(void 0===e._styles){const t=[];t.push(...g(e));const r=e.querySelector("template");r&&t.push(...f(r,e.assetpath)),e._styles=t}return e._styles}function f(t,e){if(!t._styles){const r=[],i=t.content.querySelectorAll("style");for(let t=0;t<i.length;t++){let o=i[t],n=o.getAttribute("include");n&&r.push(..._(n).filter((function(t,e,r){return r.indexOf(t)===e}))),e&&(o.textContent=(0,s.Rq)(o.textContent,e)),r.push(o)}t._styles=r}return t._styles}function g(t){const e=[],r=t.querySelectorAll("link[rel=import][type~=css]");for(let t=0;t<r.length;t++){let i=r[t];if(i.import){const t=i.import,r=i.hasAttribute(c);if(r&&!t._unscopedStyle){const e=p(t);e.setAttribute(c,""),t._unscopedStyle=e}else t._style||(t._style=p(t));e.push(r?t._unscopedStyle:t._style)}}return e}var v=r(342);function b(t){return t.indexOf(".")>=0}function y(t){let e=t.indexOf(".");return-1===e?t:t.slice(0,e)}function w(t,e){return 0===e.indexOf(t+".")}function C(t,e,r){return e+r.slice(t.length)}function x(t){if(Array.isArray(t)){let e=[];for(let r=0;r<t.length;r++){let i=t[r].toString().split(".");for(let t=0;t<i.length;t++)e.push(i[t])}return e.join(".")}return t}function A(t){return Array.isArray(t)?x(t).split("."):t.toString().split(".")}function E(t,e,r){let i=t,o=A(e);for(let t=0;t<o.length;t++){if(!i)return;i=i[o[t]]}return r&&(r.path=o.join(".")),i}function S(t,e,r){let i=t,o=A(e),s=o[o.length-1];if(o.length>1){for(let t=0;t<o.length-1;t++)if(i=i[o[t]],!i)return;i[s]=r}else i[e]=r;return o.join(".")}const P={},T=/-[a-z]/g,I=/([A-Z])/g;function O(t){return P[t]||(P[t]=t.indexOf("-")<0?t:t.replace(T,(t=>t[1].toUpperCase())))}function k(t){return P[t]||(P[t]=t.replace(I,"-$1").toLowerCase())}const z=r(224).YA,R=(0,o.o)((t=>class extends t{static createProperties(t){const e=this.prototype;for(let r in t)r in e||e._createPropertyAccessor(r)}static attributeNameForProperty(t){return t.toLowerCase()}static typeForProperty(t){}_createPropertyAccessor(t,e){this._addPropertyToAttributeMap(t),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[t]||(this.__dataHasAccessor[t]=!0,this._definePropertyAccessor(t,e))}_addPropertyToAttributeMap(t){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[t];return e||(e=this.constructor.attributeNameForProperty(t),this.__dataAttributes[e]=t),e}_definePropertyAccessor(t,e){Object.defineProperty(this,t,{get(){return this.__data[t]},set:e?function(){}:function(e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let t in this.__dataHasAccessor)this.hasOwnProperty(t)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[t]=this[t],delete this[t])}_initializeInstanceProperties(t){Object.assign(this,t)}_setProperty(t,e){this._setPendingProperty(t,e)&&this._invalidateProperties()}_getProperty(t){return this.__data[t]}_setPendingProperty(t,e,r){let i=this.__data[t],o=this._shouldPropertyChange(t,e,i);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(t in this.__dataOld)&&(this.__dataOld[t]=i),this.__data[t]=e,this.__dataPending[t]=e),o}_isPropertyPending(t){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(t))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,z.run((()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())})))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const t=this.__data,e=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(t,e,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(t,e,r)),this.__dataCounter--}_shouldPropertiesChange(t,e,r){return Boolean(e)}_propertiesChanged(t,e,r){}_shouldPropertyChange(t,e,r){return r!==e&&(r==r||e==e)}attributeChangedCallback(t,e,r,i){e!==r&&this._attributeToProperty(t,r),super.attributeChangedCallback&&super.attributeChangedCallback(t,e,r,i)}_attributeToProperty(t,e,r){if(!this.__serializing){const i=this.__dataAttributes,o=i&&i[t]||t;this[o]=this._deserializeValue(e,r||this.constructor.typeForProperty(o))}}_propertyToAttribute(t,e,r){this.__serializing=!0,r=arguments.length<3?this[t]:r,this._valueToNodeAttribute(this,r,e||this.constructor.attributeNameForProperty(t)),this.__serializing=!1}_valueToNodeAttribute(t,e,r){const i=this._serializeValue(e);"class"!==r&&"name"!==r&&"slot"!==r||(t=(0,v.r)(t)),void 0===i?t.removeAttribute(r):t.setAttribute(r,""===i&&window.trustedTypes?window.trustedTypes.emptyScript:i)}_serializeValue(t){return"boolean"==typeof t?t?"":void 0:null!=t?t.toString():void 0}_deserializeValue(t,e){switch(e){case Boolean:return null!==t;case Number:return Number(t);default:return t}}})),N={};let $=HTMLElement.prototype;for(;$;){let t=Object.getOwnPropertyNames($);for(let e=0;e<t.length;e++)N[t[e]]=!0;$=Object.getPrototypeOf($)}const L=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1,F=(0,o.o)((t=>{const e=R(t);return class extends e{static createPropertiesForAttributes(){let t=this.observedAttributes;for(let e=0;e<t.length;e++)this.prototype._createPropertyAccessor(O(t[e]))}static attributeNameForProperty(t){return k(t)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(t){for(let e in t)this._setProperty(e,t[e])}_ensureAttribute(t,e){this.hasAttribute(t)||this._valueToNodeAttribute(this,e,t)}_serializeValue(t){if("object"==typeof t){if(t instanceof Date)return t.toString();if(t){if(L(t))return t;try{return JSON.stringify(t)}catch(t){return""}}}return super._serializeValue(t)}_deserializeValue(t,e){let r;switch(e){case Object:try{r=JSON.parse(t)}catch(e){r=t}break;case Array:try{r=JSON.parse(t)}catch(e){r=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${t}`)}break;case Date:r=isNaN(t)?String(t):Number(t),r=new Date(r);break;default:r=super._deserializeValue(t,e)}return r}_definePropertyAccessor(t,e){!function(t,e){if(!N[e]){let r=t[e];void 0!==r&&(t.__data?t._setPendingProperty(e,r):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=r))}}(this,t),super._definePropertyAccessor(t,e)}_hasAccessor(t){return this.__dataHasAccessor&&this.__dataHasAccessor[t]}_isPropertyPending(t){return Boolean(this.__dataPending&&t in this.__dataPending)}}})),D={"dom-if":!0,"dom-repeat":!0};let H=!1,M=!1;const B=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(e,r,i)=>{const o=r.getAttribute(i);t&&i.startsWith("on-")?e.setAttribute(i,t.createScript(o,i)):e.setAttribute(i,o)}})();function V(t){let e=t.getAttribute("is");if(e&&D[e]){let r=t;for(r.removeAttribute("is"),t=r.ownerDocument.createElement(e),r.parentNode.replaceChild(t,r),t.appendChild(r);r.attributes.length;){const{name:e}=r.attributes[0];B(t,r,e),r.removeAttribute(e)}}return t}function j(t,e){let r=e.parentInfo&&j(t,e.parentInfo);if(!r)return t;for(let t=r.firstChild,i=0;t;t=t.nextSibling)if(e.parentIndex===i++)return t}function U(t,e,r,i){i.id&&(e[i.id]=r)}function q(t,e,r){if(r.events&&r.events.length)for(let i,o=0,s=r.events;o<s.length&&(i=s[o]);o++)t._addMethodEventListenerToNode(e,i.name,i.value,t)}function W(t,e,r,i){r.templateInfo&&(e._templateInfo=r.templateInfo,e._parentTemplateInfo=i)}const G=(0,o.o)((t=>class extends t{static _parseTemplate(t,e){if(!t._templateInfo){let r=t._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=Boolean(e),r.stripWhiteSpace=e&&e.stripWhiteSpace||t.hasAttribute&&t.hasAttribute("strip-whitespace"),this._parseTemplateContent(t,r,{parent:null})}return t._templateInfo}static _parseTemplateContent(t,e,r){return this._parseTemplateNode(t.content,e,r)}static _parseTemplateNode(t,e,r){let i=!1,o=t;return"template"!=o.localName||o.hasAttribute("preserve-content")?"slot"===o.localName&&(e.hasInsertionPoint=!0):i=this._parseTemplateNestedTemplate(o,e,r)||i,function(t){(function(){if(!H){H=!0;const t=document.createElement("textarea");t.placeholder="a",M=t.placeholder===t.textContent}return M})()&&"textarea"===t.localName&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}(o),o.firstChild&&this._parseTemplateChildNodes(o,e,r),o.hasAttributes&&o.hasAttributes()&&(i=this._parseTemplateNodeAttributes(o,e,r)||i),i||r.noted}static _parseTemplateChildNodes(t,e,r){if("script"!==t.localName&&"style"!==t.localName)for(let i,o=t.firstChild,s=0;o;o=i){if("template"==o.localName&&(o=V(o)),i=o.nextSibling,o.nodeType===Node.TEXT_NODE){let r=i;for(;r&&r.nodeType===Node.TEXT_NODE;)o.textContent+=r.textContent,i=r.nextSibling,t.removeChild(r),r=i;if(e.stripWhiteSpace&&!o.textContent.trim()){t.removeChild(o);continue}}let n={parentIndex:s,parentInfo:r};this._parseTemplateNode(o,e,n)&&(n.infoIndex=e.nodeInfoList.push(n)-1),o.parentNode&&s++}}static _parseTemplateNestedTemplate(t,e,r){let i=t,o=this._parseTemplate(i,e);return(o.content=i.content.ownerDocument.createDocumentFragment()).appendChild(i.content),r.templateInfo=o,!0}static _parseTemplateNodeAttributes(t,e,r){let i=!1,o=Array.from(t.attributes);for(let s,n=o.length-1;s=o[n];n--)i=this._parseTemplateNodeAttribute(t,e,r,s.name,s.value)||i;return i}static _parseTemplateNodeAttribute(t,e,r,i,o){return"on-"===i.slice(0,3)?(t.removeAttribute(i),r.events=r.events||[],r.events.push({name:i.slice(3),value:o}),!0):"id"===i&&(r.id=o,!0)}static _contentForTemplate(t){let e=t._templateInfo;return e&&e.content||t.content}_stampTemplate(t,e){t&&!t.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(t);let r=(e=e||this.constructor._parseTemplate(t)).nodeInfoList,i=e.content||t.content,o=document.importNode(i,!0);o.__noInsertionPoint=!e.hasInsertionPoint;let s=o.nodeList=new Array(r.length);o.$={};for(let t,i=0,n=r.length;i<n&&(t=r[i]);i++){let r=s[i]=j(o,t);U(0,o.$,r,t),W(0,r,t,e),q(this,r,t)}return o}_addMethodEventListenerToNode(t,e,r,i){let o=function(t,e,r){return t=t._methodHost||t,function(e){t[r]?t[r](e,e.detail):console.warn("listener method `"+r+"` not defined")}}(i=i||t,0,r);return this._addEventListenerToNode(t,e,o),o}_addEventListenerToNode(t,e,r){t.addEventListener(e,r)}_removeEventListenerFromNode(t,e,r){t.removeEventListener(e,r)}}));let Y=0;const K=[],J={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},X="__computeInfo",Q=/[A-Z]/;function Z(t,e,r){let i=t[e];if(i){if(!t.hasOwnProperty(e)&&(i=t[e]=Object.create(t[e]),r))for(let t in i){let e=i[t],r=i[t]=Array(e.length);for(let t=0;t<e.length;t++)r[t]=e[t]}}else i=t[e]={};return i}function tt(t,e,r,i,o,s){if(e){let n=!1;const a=Y++;for(let l in r){let d=e[o?y(l):l];if(d)for(let e,h=0,c=d.length;h<c&&(e=d[h]);h++)e.info&&e.info.lastRun===a||o&&!rt(l,e.trigger)||(e.info&&(e.info.lastRun=a),e.fn(t,l,r,i,e.info,o,s),n=!0)}return n}return!1}function et(t,e,r,i,o,s,n,a){let l=!1,d=e[n?y(i):i];if(d)for(let e,h=0,c=d.length;h<c&&(e=d[h]);h++)e.info&&e.info.lastRun===r||n&&!rt(i,e.trigger)||(e.info&&(e.info.lastRun=r),e.fn(t,i,o,s,e.info,n,a),l=!0);return l}function rt(t,e){if(e){let r=e.name;return r==t||!(!e.structured||!function(t,e){return 0===t.indexOf(e+".")}(r,t))||!(!e.wildcard||!w(r,t))}return!0}function it(t,e,r,i,o){let s="string"==typeof o.method?t[o.method]:o.method,n=o.property;s?s.call(t,t.__data[n],i[n]):o.dynamicFn||console.warn("observer method `"+o.method+"` not defined")}function ot(t,e,r){let i=y(e);return i!==e&&(st(t,k(i)+"-changed",r[e],e),!0)}function st(t,e,r,i){let o={value:r,queueProperty:!0};i&&(o.path=i),(0,v.r)(t).dispatchEvent(new CustomEvent(e,{detail:o}))}function nt(t,e,r,i,o,s){let n=(s?y(e):e)!=e?e:null,a=n?E(t,n):t.__data[e];n&&void 0===a&&(a=r[e]),st(t,o.eventName,a,n)}function at(t,e,r,o,s){let n=t.__data[e];i.v1&&(n=(0,i.v1)(n,s.attrName,"attribute",t)),t._propertyToAttribute(e,s.attrName,n)}const lt=(t,e,r)=>{let i=0,o=e.length-1,s=-1;for(;i<=o;){const n=i+o>>1,a=r.get(e[n].methodInfo)-r.get(t.methodInfo);if(a<0)i=n+1;else{if(!(a>0)){s=n;break}o=n-1}}s<0&&(s=o+1),e.splice(s,0,t)},dt=(t,e,r,i,o)=>{const s=e[o?y(t):t];if(s)for(let e=0;e<s.length;e++){const n=s[e];n.info.lastRun===Y||o&&!rt(t,n.trigger)||(n.info.lastRun=Y,lt(n.info,r,i))}};function ht(t,e,r,i,o){let s=gt(t,e,r,0,o);if(s===K)return!1;let n=o.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[n]?t._setPendingProperty(n,s,!0):(t[n]=s,!1)}function ct(t,e,r,i,o,s,n){r.bindings=r.bindings||[];let a={kind:i,target:o,parts:s,literal:n,isCompound:1!==s.length};if(r.bindings.push(a),function(t){return Boolean(t.target)&&"attribute"!=t.kind&&"text"!=t.kind&&!t.isCompound&&"{"===t.parts[0].mode}(a)){let{event:t,negate:e}=a.parts[0];a.listenerEvent=t||k(o)+"-changed",a.listenerNegate=e}let l=e.nodeInfoList.length;for(let r=0;r<a.parts.length;r++){let i=a.parts[r];i.compoundIndex=r,ut(t,e,a,i,l)}}function ut(t,e,r,i,o){if(!i.literal)if("attribute"===r.kind&&"-"===r.target[0])console.warn("Cannot set attribute "+r.target+' because "-" is not a valid attribute starting character');else{let s=i.dependencies,n={index:o,binding:r,part:i,evaluator:t};for(let r=0;r<s.length;r++){let i=s[r];"string"==typeof i&&(i=At(i),i.wildcard=!0),t._addTemplatePropertyEffect(e,i.rootProperty,{fn:pt,info:n,trigger:i})}}}function pt(t,e,r,o,s,n,a){let l=a[s.index],d=s.binding,h=s.part;if(n&&h.source&&e.length>h.source.length&&"property"==d.kind&&!d.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[d.target]){let i=r[e];e=C(h.source,d.target,e),l._setPendingPropertyOrPath(e,i,!1,!0)&&t._enqueueClient(l)}else{let a=s.evaluator._evaluateBinding(t,h,e,r,o,n);a!==K&&function(t,e,r,o,s){if(s=function(t,e,r,i){if(r.isCompound){let o=t.__dataCompoundStorage[r.target];o[i.compoundIndex]=e,e=o.join("")}return"attribute"!==r.kind&&("textContent"!==r.target&&("value"!==r.target||"input"!==t.localName&&"textarea"!==t.localName)||(e=null==e?"":e)),e}(e,s,r,o),i.v1&&(s=(0,i.v1)(s,r.target,r.kind,e)),"attribute"==r.kind)t._valueToNodeAttribute(e,s,r.target);else{let i=r.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[i]?e[J.READ_ONLY]&&e[J.READ_ONLY][i]||e._setPendingProperty(i,s)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,i,s)}}(t,l,d,h,a)}}function _t(t,e){if(e.isCompound){let r=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),i=e.parts,o=new Array(i.length);for(let t=0;t<i.length;t++)o[t]=i[t].literal;let s=e.target;r[s]=o,e.literal&&"property"==e.kind&&("className"===s&&(t=(0,v.r)(t)),t[s]=e.literal)}}function mt(t,e,r){if(r.listenerEvent){let i=r.parts[0];t.addEventListener(r.listenerEvent,(function(t){!function(t,e,r,i,o){let s,n=t.detail,a=n&&n.path;a?(i=C(r,i,a),s=n&&n.value):s=t.currentTarget[r],s=o?!s:s,e[J.READ_ONLY]&&e[J.READ_ONLY][i]||!e._setPendingPropertyOrPath(i,s,!0,Boolean(a))||n&&n.queueProperty||e._invalidateProperties()}(t,e,r.target,i.source,i.negate)}))}}function ft(t,e,r,i,o,s){s=e.static||s&&("object"!=typeof s||s[e.methodName]);let n={methodName:e.methodName,args:e.args,methodInfo:o,dynamicFn:s};for(let o,s=0;s<e.args.length&&(o=e.args[s]);s++)o.literal||t._addPropertyEffect(o.rootProperty,r,{fn:i,info:n,trigger:o});return s&&t._addPropertyEffect(e.methodName,r,{fn:i,info:n}),n}function gt(t,e,r,i,o){let s=t._methodHost||t,n=s[o.methodName];if(n){let i=t._marshalArgs(o.args,e,r);return i===K?K:n.apply(s,i)}o.dynamicFn||console.warn("method `"+o.methodName+"` not defined")}const vt=[],bt="(?:[a-zA-Z_$][\\w.:$\\-*]*)",yt="(?:("+bt+"|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)",wt=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?("+bt+"\\s*(?:\\(\\s*(?:(?:"+yt+"(?:,\\s*"+yt+")*)?)\\)\\s*)?)(?:]]|}})","g");function Ct(t){let e="";for(let r=0;r<t.length;r++)e+=t[r].literal||"";return e}function xt(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let t={methodName:e[1],static:!0,args:vt};return e[2].trim()?function(t,e){return e.args=t.map((function(t){let r=At(t);return r.literal||(e.static=!1),r}),this),e}(e[2].replace(/\\,/g,"&comma;").split(","),t):t}return null}function At(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),r={name:e,value:"",literal:!1},i=e[0];switch("-"===i&&(i=e[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':r.value=e.slice(1,-1),r.literal=!0;break;case"#":r.value=Number(e),r.literal=!0}return r.literal||(r.rootProperty=y(e),r.structured=b(e),r.structured&&(r.wildcard=".*"==e.slice(-2),r.wildcard&&(r.name=e.slice(0,-2)))),r}function Et(t,e,r){let i=E(t,r);return void 0===i&&(i=e[r]),i}function St(t,e,r,o){const s={indexSplices:o};i.HY&&!t._overrideLegacyUndefined&&(e.splices=s),t.notifyPath(r+".splices",s),t.notifyPath(r+".length",e.length),i.HY&&!t._overrideLegacyUndefined&&(s.indexSplices=[])}function Pt(t,e,r,i,o,s){St(t,e,r,[{index:i,addedCount:o,removed:s,object:e,type:"splice"}])}const Tt=(0,o.o)((t=>{const e=G(F(t));return class extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return J}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(It.length){let t=It[It.length-1];t._enqueueClient(this),this.__dataHost=t}}_initializeProtoProperties(t){this.__data=Object.create(t),this.__dataPending=Object.create(t),this.__dataOld={}}_initializeInstanceProperties(t){let e=this[J.READ_ONLY];for(let r in t)e&&e[r]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[r]=this.__dataPending[r]=t[r])}_addPropertyEffect(t,e,r){this._createPropertyAccessor(t,e==J.READ_ONLY);let i=Z(this,e,!0)[t];i||(i=this[e][t]=[]),i.push(r)}_removePropertyEffect(t,e,r){let i=Z(this,e,!0)[t],o=i.indexOf(r);o>=0&&i.splice(o,1)}_hasPropertyEffect(t,e){let r=this[e];return Boolean(r&&r[t])}_hasReadOnlyEffect(t){return this._hasPropertyEffect(t,J.READ_ONLY)}_hasNotifyEffect(t){return this._hasPropertyEffect(t,J.NOTIFY)}_hasReflectEffect(t){return this._hasPropertyEffect(t,J.REFLECT)}_hasComputedEffect(t){return this._hasPropertyEffect(t,J.COMPUTE)}_setPendingPropertyOrPath(t,e,r,i){if(i||y(Array.isArray(t)?t[0]:t)!==t){if(!i){let r=E(this,t);if(!(t=S(this,t,e))||!super._shouldPropertyChange(t,e,r))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(t,e,r))return function(t,e,r){let i=t.__dataLinkedPaths;if(i){let o;for(let s in i){let n=i[s];w(s,e)?(o=C(s,n,e),t._setPendingPropertyOrPath(o,r,!0,!0)):w(n,e)&&(o=C(n,s,e),t._setPendingPropertyOrPath(o,r,!0,!0))}}}(this,t,e),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[t])return this._setPendingProperty(t,e,r);this[t]=e}return!1}_setUnmanagedPropertyToNode(t,e,r){r===t[e]&&"object"!=typeof r||("className"===e&&(t=(0,v.r)(t)),t[e]=r)}_setPendingProperty(t,e,r){let i=this.__dataHasPaths&&b(t),o=i?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(t,e,o[t])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),t in this.__dataOld||(this.__dataOld[t]=this.__data[t]),i?this.__dataTemp[t]=e:this.__data[t]=e,this.__dataPending[t]=e,(i||this[J.NOTIFY]&&this[J.NOTIFY][t])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[t]=r),!0)}_setProperty(t,e){this._setPendingProperty(t,e,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(t){this.__dataPendingClients=this.__dataPendingClients||[],t!==this&&this.__dataPendingClients.push(t)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let t=this.__dataPendingClients;if(t){this.__dataPendingClients=null;for(let e=0;e<t.length;e++){let r=t[e];r.__dataEnabled?r.__dataPending&&r._flushProperties():r._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(t,e){for(let r in t)!e&&this[J.READ_ONLY]&&this[J.READ_ONLY][r]||this._setPendingPropertyOrPath(r,t[r],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(t,e,r){let o,s=this.__dataHasPaths;this.__dataHasPaths=!1,function(t,e,r,o){let s=t[J.COMPUTE];if(s)if(i.ls){Y++;const i=function(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const r=t[J.COMPUTE];let i,{counts:o,ready:s,total:n}=function(t){const e=t[X],r={},i=t[J.COMPUTE],o=[];let s=0;for(let t in e){const i=e[t];s+=r[t]=i.args.filter((t=>!t.literal)).length+(i.dynamicFn?1:0)}for(let t in i)e[t]||o.push(t);return{counts:r,ready:o,total:s}}(t);for(;i=s.shift();){e.set(i,e.size);const t=r[i];t&&t.forEach((t=>{const e=t.info.methodInfo;--n,0==--o[e]&&s.push(e)}))}if(0!==n){const e=t;console.warn(`Computed graph for ${e.localName} incomplete; circular?`)}t.constructor.__orderedComputedDeps=e}return e}(t),n=[];for(let t in e)dt(t,s,n,i,o);let a;for(;a=n.shift();)ht(t,"",e,0,a)&&dt(a.methodInfo,s,n,i,o);Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let i=e;for(;tt(t,s,i,r,o);)Object.assign(r,t.__dataOld),Object.assign(e,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}(this,e,r,s),o=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(e,r,s),this._flushClients(),tt(this,this[J.REFLECT],e,r,s),tt(this,this[J.OBSERVE],e,r,s),o&&function(t,e,r,i,o){let s,n,a=t[J.NOTIFY],l=Y++;for(let n in e)e[n]&&(a&&et(t,a,l,n,r,i,o)||o&&ot(t,n,r))&&(s=!0);s&&(n=t.__dataHost)&&n._invalidateProperties&&n._invalidateProperties()}(this,o,e,r,s),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(t,e,r){this[J.PROPAGATE]&&tt(this,this[J.PROPAGATE],t,e,r),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,t,e,r)}_runEffectsForTemplate(t,e,r,i){const o=(e,i)=>{tt(this,t.propertyEffects,e,r,i,t.nodeList);for(let o=t.firstChild;o;o=o.nextSibling)this._runEffectsForTemplate(o,e,r,i)};t.runEffects?t.runEffects(o,e,i):o(e,i)}linkPaths(t,e){t=x(t),e=x(e),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[t]=e}unlinkPaths(t){t=x(t),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[t]}notifySplices(t,e){let r={path:""};St(this,E(this,t,r),r.path,e)}get(t,e){return E(e||this,t)}set(t,e,r){r?S(r,t,e):this[J.READ_ONLY]&&this[J.READ_ONLY][t]||this._setPendingPropertyOrPath(t,e,!0)&&this._invalidateProperties()}push(t,...e){let r={path:""},i=E(this,t,r),o=i.length,s=i.push(...e);return e.length&&Pt(this,i,r.path,o,e.length,[]),s}pop(t){let e={path:""},r=E(this,t,e),i=Boolean(r.length),o=r.pop();return i&&Pt(this,r,e.path,r.length,0,[o]),o}splice(t,e,r,...i){let o,s={path:""},n=E(this,t,s);return e<0?e=n.length-Math.floor(-e):e&&(e=Math.floor(e)),o=2===arguments.length?n.splice(e):n.splice(e,r,...i),(i.length||o.length)&&Pt(this,n,s.path,e,i.length,o),o}shift(t){let e={path:""},r=E(this,t,e),i=Boolean(r.length),o=r.shift();return i&&Pt(this,r,e.path,0,0,[o]),o}unshift(t,...e){let r={path:""},i=E(this,t,r),o=i.unshift(...e);return e.length&&Pt(this,i,r.path,0,e.length,[]),o}notifyPath(t,e){let r;if(1==arguments.length){let i={path:""};e=E(this,t,i),r=i.path}else r=Array.isArray(t)?x(t):t;this._setPendingPropertyOrPath(r,e,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(t,e){var r;this._addPropertyEffect(t,J.READ_ONLY),e&&(this["_set"+(r=t,r[0].toUpperCase()+r.substring(1))]=function(e){this._setProperty(t,e)})}_createPropertyObserver(t,e,r){let i={property:t,method:e,dynamicFn:Boolean(r)};this._addPropertyEffect(t,J.OBSERVE,{fn:it,info:i,trigger:{name:t}}),r&&this._addPropertyEffect(e,J.OBSERVE,{fn:it,info:i,trigger:{name:e}})}_createMethodObserver(t,e){let r=xt(t);if(!r)throw new Error("Malformed observer expression '"+t+"'");ft(this,r,J.OBSERVE,gt,null,e)}_createNotifyingProperty(t){this._addPropertyEffect(t,J.NOTIFY,{fn:nt,info:{eventName:k(t)+"-changed",property:t}})}_createReflectedProperty(t){let e=this.constructor.attributeNameForProperty(t);"-"===e[0]?console.warn("Property "+t+" cannot be reflected to attribute "+e+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(t,J.REFLECT,{fn:at,info:{attrName:e}})}_createComputedProperty(t,e,r){let i=xt(e);if(!i)throw new Error("Malformed computed expression '"+e+"'");const o=ft(this,i,J.COMPUTE,ht,t,r);Z(this,X)[t]=o}_marshalArgs(t,e,r){const o=this.__data,s=[];for(let n=0,a=t.length;n<a;n++){let{name:a,structured:l,wildcard:d,value:h,literal:c}=t[n];if(!c)if(d){const t=w(a,e),i=Et(o,r,t?e:a);h={path:t?e:a,value:i,base:t?E(o,a):i}}else h=l?Et(o,r,a):o[a];if(i.HY&&!this._overrideLegacyUndefined&&void 0===h&&t.length>1)return K;s[n]=h}return s}static addPropertyEffect(t,e,r){this.prototype._addPropertyEffect(t,e,r)}static createPropertyObserver(t,e,r){this.prototype._createPropertyObserver(t,e,r)}static createMethodObserver(t,e){this.prototype._createMethodObserver(t,e)}static createNotifyingProperty(t){this.prototype._createNotifyingProperty(t)}static createReadOnlyProperty(t,e){this.prototype._createReadOnlyProperty(t,e)}static createReflectedProperty(t){this.prototype._createReflectedProperty(t)}static createComputedProperty(t,e,r){this.prototype._createComputedProperty(t,e,r)}static bindTemplate(t){return this.prototype._bindTemplate(t)}_bindTemplate(t,e){let r=this.constructor._parseTemplate(t),i=this.__preBoundTemplateInfo==r;if(!i)for(let t in r.propertyEffects)this._createPropertyAccessor(t);if(e)if(r=Object.create(r),r.wasPreBound=i,this.__templateInfo){const e=t._parentTemplateInfo||this.__templateInfo,i=e.lastChild;r.parent=e,e.lastChild=r,r.previousSibling=i,i?i.nextSibling=r:e.firstChild=r}else this.__templateInfo=r;else this.__preBoundTemplateInfo=r;return r}static _addTemplatePropertyEffect(t,e,r){(t.hostProps=t.hostProps||{})[e]=!0;let i=t.propertyEffects=t.propertyEffects||{};(i[e]=i[e]||[]).push(r)}_stampTemplate(t,e){e=e||this._bindTemplate(t,!0),It.push(this);let r=super._stampTemplate(t,e);if(It.pop(),e.nodeList=r.nodeList,!e.wasPreBound){let t=e.childNodes=[];for(let e=r.firstChild;e;e=e.nextSibling)t.push(e)}return r.templateInfo=e,function(t,e){let{nodeList:r,nodeInfoList:i}=e;if(i.length)for(let e=0;e<i.length;e++){let o=i[e],s=r[e],n=o.bindings;if(n)for(let e=0;e<n.length;e++){let r=n[e];_t(s,r),mt(s,t,r)}s.__dataHost=t}}(this,e),this.__dataClientsReady&&(this._runEffectsForTemplate(e,this.__data,null,!1),this._flushClients()),r}_removeBoundDom(t){const e=t.templateInfo,{previousSibling:r,nextSibling:i,parent:o}=e;r?r.nextSibling=i:o&&(o.firstChild=i),i?i.previousSibling=r:o&&(o.lastChild=r),e.nextSibling=e.previousSibling=null;let s=e.childNodes;for(let t=0;t<s.length;t++){let e=s[t];(0,v.r)((0,v.r)(e).parentNode).removeChild(e)}}static _parseTemplateNode(t,r,i){let o=e._parseTemplateNode.call(this,t,r,i);if(t.nodeType===Node.TEXT_NODE){let e=this._parseBindings(t.textContent,r);e&&(t.textContent=Ct(e)||" ",ct(this,r,i,"text","textContent",e),o=!0)}return o}static _parseTemplateNodeAttribute(t,r,i,o,s){let n=this._parseBindings(s,r);if(n){let e=o,s="property";Q.test(o)?s="attribute":"$"==o[o.length-1]&&(o=o.slice(0,-1),s="attribute");let a=Ct(n);return a&&"attribute"==s&&("class"==o&&t.hasAttribute("class")&&(a+=" "+t.getAttribute(o)),t.setAttribute(o,a)),"attribute"==s&&"disable-upgrade$"==e&&t.setAttribute(o,""),"input"===t.localName&&"value"===e&&t.setAttribute(e,""),t.removeAttribute(e),"property"===s&&(o=O(o)),ct(this,r,i,s,o,n,a),!0}return e._parseTemplateNodeAttribute.call(this,t,r,i,o,s)}static _parseTemplateNestedTemplate(t,r,o){let s=e._parseTemplateNestedTemplate.call(this,t,r,o);const n=t.parentNode,a=o.templateInfo,l="dom-if"===n.localName,d="dom-repeat"===n.localName;i.gx&&(l||d)&&(n.removeChild(t),(o=o.parentInfo).templateInfo=a,o.noted=!0,s=!1);let h=a.hostProps;if(i.ew&&l)h&&(r.hostProps=Object.assign(r.hostProps||{},h),i.gx||(o.parentInfo.noted=!0));else{let t="{";for(let e in h)ct(this,r,o,"property","_host_"+e,[{mode:t,source:e,dependencies:[e],hostProp:!0}])}return s}static _parseBindings(t,e){let r,i=[],o=0;for(;null!==(r=wt.exec(t));){r.index>o&&i.push({literal:t.slice(o,r.index)});let s=r[1][0],n=Boolean(r[2]),a=r[3].trim(),l=!1,d="",h=-1;"{"==s&&(h=a.indexOf("::"))>0&&(d=a.substring(h+2),a=a.substring(0,h),l=!0);let c=xt(a),u=[];if(c){let{args:t,methodName:r}=c;for(let e=0;e<t.length;e++){let r=t[e];r.literal||u.push(r)}let i=e.dynamicFns;(i&&i[r]||c.static)&&(u.push(r),c.dynamicFn=!0)}else u.push(a);i.push({source:a,mode:s,negate:n,customEvent:l,signature:c,dependencies:u,event:d}),o=wt.lastIndex}if(o&&o<t.length){let e=t.substring(o);e&&i.push({literal:e})}return i.length?i:null}static _evaluateBinding(t,e,r,i,o,s){let n;return n=e.signature?gt(t,r,i,0,e.signature):r!=e.source?E(t,e.source):s&&b(r)?E(t,r):t.__data[r],e.negate&&(n=!n),n}}})),It=[],Ot=[],kt=(0,o.o)((t=>{const e=R(t);function r(t){const e=Object.getPrototypeOf(t);return e.prototype instanceof o?e:null}function i(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",t))){let e=null;if(t.hasOwnProperty(JSCompiler_renameProperty("properties",t))){const r=t.properties;r&&(e=function(t){const e={};for(let r in t){const i=t[r];e[r]="function"==typeof i?{type:i}:i}return e}(r))}t.__ownProperties=e}return t.__ownProperties}class o extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){t=this.prototype,Ot.push(t);const e=this._properties;this.__observedAttributes=e?Object.keys(e).map((t=>this.prototype._addPropertyToAttributeMap(t))):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const t=r(this);t&&t.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const t=i(this);t&&this.createProperties(t)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const t=r(this);this.__properties=Object.assign({},t&&t._properties,i(this))}return this.__properties}static typeForProperty(t){const e=this._properties[t];return e&&e.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return o})),zt=window.ShadyCSS&&window.ShadyCSS.cssBuild,Rt=(0,o.o)((t=>{const e=kt(Tt(t));function r(t,e,r,i){r.computed&&(r.readOnly=!0),r.computed&&(t._hasReadOnlyEffect(e)?console.warn(`Cannot redefine computed property '${e}'.`):t._createComputedProperty(e,r.computed,i)),r.readOnly&&!t._hasReadOnlyEffect(e)?t._createReadOnlyProperty(e,!r.computed):!1===r.readOnly&&t._hasReadOnlyEffect(e)&&console.warn(`Cannot make readOnly property '${e}' non-readOnly.`),r.reflectToAttribute&&!t._hasReflectEffect(e)?t._createReflectedProperty(e):!1===r.reflectToAttribute&&t._hasReflectEffect(e)&&console.warn(`Cannot make reflected property '${e}' non-reflected.`),r.notify&&!t._hasNotifyEffect(e)?t._createNotifyingProperty(e):!1===r.notify&&t._hasNotifyEffect(e)&&console.warn(`Cannot make notify property '${e}' non-notify.`),r.observer&&t._createPropertyObserver(e,r.observer,i[r.observer]),t._addPropertyToAttributeMap(e)}return class extends e{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){e._finalizeClass.call(this);const t=((r=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",r))||(r.__ownObservers=r.hasOwnProperty(JSCompiler_renameProperty("observers",r))?r.observers:null),r.__ownObservers);var r;t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){let t=this.template;t&&("string"==typeof t?(console.error("template getter must return HTMLTemplateElement"),t=null):i.nL||(t=t.cloneNode(!0))),this.prototype._template=t}static createProperties(t){for(let e in t)r(this.prototype,e,t[e],t)}static createObservers(t,e){const r=this.prototype;for(let i=0;i<t.length;i++)r._createMethodObserver(t[i],e)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let t=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof t&&(t=t()),this._template=void 0!==t?t:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(t){let e=null;if(t&&(!i.XN||i.ZN)&&(e=h.import(t,"template"),i.XN&&!e))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${t}`);return e}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(t){this._template=t}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const t=this.importMeta;if(t)this._importPath=(0,s.iY)(t.url);else{const t=h.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=i.sM,this.importPath=this.constructor.importPath;let t=function(t){if(!t.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",t))){t.__propertyDefaults=null;let e=t._properties;for(let r in e){let i=e[r];"value"in i&&(t.__propertyDefaults=t.__propertyDefaults||{},t.__propertyDefaults[r]=i)}}return t.__propertyDefaults}(this.constructor);if(t)for(let e in t){let r=t[e];if(this._canApplyPropertyDefault(e)){let t="function"==typeof r.value?r.value.call(this):r.value;this._hasAccessor(e)?this._setPendingProperty(e,t,!0):this[e]=t}}}_canApplyPropertyDefault(t){return!this.hasOwnProperty(t)}static _processStyleText(t,e){return(0,s.Rq)(t,e)}static _finalizeTemplate(t){const e=this.prototype._template;if(e&&!e.__polymerFinalized){e.__polymerFinalized=!0;const r=this.importPath;(function(t,e,r,o){if(!zt){const i=e.content.querySelectorAll("style"),s=f(e),n=function(t){let e=u(t);return e?g(e):[]}(r),a=e.content.firstElementChild;for(let r=0;r<n.length;r++){let i=n[r];i.textContent=t._processStyleText(i.textContent,o),e.content.insertBefore(i,a)}let l=0;for(let e=0;e<s.length;e++){let r=s[e],n=i[l];n!==r?(r=r.cloneNode(!0),n.parentNode.insertBefore(r,n)):l++,r.textContent=t._processStyleText(r.textContent,o)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(e,r),i.md&&zt&&i.FV){const r=e.content.querySelectorAll("style");if(r){let e="";Array.from(r).forEach((t=>{e+=t.textContent,t.parentNode.removeChild(t)})),t._styleSheet=new CSSStyleSheet,t._styleSheet.replaceSync(e)}}})(this,e,t,r?(0,s.Kk)(r):""),this.prototype._bindTemplate(e)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(t){const e=(0,v.r)(this);if(e.attachShadow)return t?(e.shadowRoot||(e.attachShadow({mode:"open",shadyUpgradeFragment:t}),e.shadowRoot.appendChild(t),this.constructor._styleSheet&&(e.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),i.Hr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(e.shadowRoot),e.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(t){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,t)}resolveUrl(t,e){return!e&&this.importPath&&(e=(0,s.Kk)(this.importPath)),(0,s.Kk)(t,e)}static _parseTemplateContent(t,r,i){return r.dynamicFns=r.dynamicFns||this._properties,e._parseTemplateContent.call(this,t,r,i)}static _addTemplatePropertyEffect(t,r,o){return!i.a2||r in this._properties||o.info.part.signature&&o.info.part.signature.static||o.info.part.hostProp||t.nestedTemplate||console.warn(`Property '${r}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,t,r,o)}}})),Nt=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class $t{constructor(t,e){Dt(t,e);const r=e.reduce(((e,r,i)=>e+Lt(r)+t[i+1]),t[0]);this.value=r.toString()}toString(){return this.value}}function Lt(t){if(t instanceof $t)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}const Ft=function(t,...e){Dt(t,e);const r=document.createElement("template");let i=e.reduce(((e,r,i)=>e+function(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof $t)return Lt(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}(r)+t[i+1]),t[0]);return Nt&&(i=Nt.createHTML(i)),r.innerHTML=i,r},Dt=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")},Ht=Rt(HTMLElement)},219:(t,e,r)=>{function i(t){return t=t||[],Array.isArray(t)?t:[t]}function o(t){return`[Vaadin.Router] ${t}`}r.r(e),r.d(e,{Resolver:()=>D,Router:()=>rt});const s="module",n="nomodule",a=[s,n];function l(t){if(!t.match(/.+\.[m]?js$/))throw new Error(o(`Unsupported type for bundle "${t}": .js or .mjs expected.`))}function d(t){if(!t||!m(t.path))throw new Error(o('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=t.bundle,r=["component","redirect","bundle"];if(!(_(t.action)||Array.isArray(t.children)||_(t.children)||p(e)||r.some((e=>m(t[e])))))throw new Error(o(`Expected route config "${t.path}" to include either "${r.join('", "')}" or "action" function but none found.`));if(e)if(m(e))l(e);else{if(!a.some((t=>t in e)))throw new Error(o('Expected route bundle to include either "'+n+'" or "'+s+'" keys, or both'));a.forEach((t=>t in e&&l(e[t])))}t.redirect&&["bundle","component"].forEach((e=>{e in t&&console.warn(o(`Route config "${t.path}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))}))}function h(t){i(t).forEach((t=>d(t)))}function c(t,e){let r=document.head.querySelector('script[src="'+t+'"][async]');return r||(r=document.createElement("script"),r.setAttribute("src",t),e===s?r.setAttribute("type",s):e===n&&r.setAttribute(n,""),r.async=!0),new Promise(((t,e)=>{r.onreadystatechange=r.onload=e=>{r.__dynamicImportLoaded=!0,t(e)},r.onerror=t=>{r.parentNode&&r.parentNode.removeChild(r),e(t)},null===r.parentNode?document.head.appendChild(r):r.__dynamicImportLoaded&&t()}))}function u(t,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${t}`,{cancelable:"go"===t,detail:e}))}function p(t){return"object"==typeof t&&!!t}function _(t){return"function"==typeof t}function m(t){return"string"==typeof t}function f(t){const e=new Error(o(`Page not found (${t.pathname})`));return e.context=t,e.code=404,e}const g=new class{};function v(t){if(t.defaultPrevented)return;if(0!==t.button)return;if(t.shiftKey||t.ctrlKey||t.altKey||t.metaKey)return;let e=t.target;const r=t.composedPath?t.composedPath():t.path||[];for(let t=0;t<r.length;t++){const i=r[t];if(i.nodeName&&"a"===i.nodeName.toLowerCase()){e=i;break}}for(;e&&"a"!==e.nodeName.toLowerCase();)e=e.parentNode;if(!e||"a"!==e.nodeName.toLowerCase())return;if(e.target&&"_self"!==e.target.toLowerCase())return;if(e.hasAttribute("download"))return;if(e.hasAttribute("router-ignore"))return;if(e.pathname===window.location.pathname&&""!==e.hash)return;const i=e.origin||function(t){const e=t.port,r=t.protocol;return`${r}//${"http:"===r&&"80"===e||"https:"===r&&"443"===e?t.hostname:t.host}`}(e);if(i!==window.location.origin)return;const{pathname:o,search:s,hash:n}=e;u("go",{pathname:o,search:s,hash:n})&&(t.preventDefault(),t&&"click"===t.type&&window.scrollTo(0,0))}const b={activate(){window.document.addEventListener("click",v)},inactivate(){window.document.removeEventListener("click",v)}};function y(t){if("vaadin-router-ignore"===t.state)return;const{pathname:e,search:r,hash:i}=window.location;u("go",{pathname:e,search:r,hash:i})}/Trident/.test(navigator.userAgent)&&!_(window.PopStateEvent)&&(window.PopStateEvent=function(t,e){e=e||{};var r=document.createEvent("Event");return r.initEvent(t,Boolean(e.bubbles),Boolean(e.cancelable)),r.state=e.state||null,r},window.PopStateEvent.prototype=window.Event.prototype);const w={activate(){window.addEventListener("popstate",y)},inactivate(){window.removeEventListener("popstate",y)}};var C=function t(e,r,i){return e instanceof RegExp?function(t,e){if(!e)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var i=0;i<r.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(e,r):Array.isArray(e)?function(e,r,i){for(var o=[],s=0;s<e.length;s++)o.push(t(e[s],r,i).source);return new RegExp("(?:"+o.join("|")+")",k(i))}(e,r,i):function(t,e,r){return z(P(t,r),e,r)}(e,r,i)},x=P,A=T,E=z,S=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function P(t,e){for(var r,i=[],o=0,s=0,n="",a=e&&e.delimiter||"/",l=e&&e.delimiters||"./",d=!1;null!==(r=S.exec(t));){var h=r[0],c=r[1],u=r.index;if(n+=t.slice(s,u),s=u+h.length,c)n+=c[1],d=!0;else{var p="",_=t[s],m=r[2],f=r[3],g=r[4],v=r[5];if(!d&&n.length){var b=n.length-1;l.indexOf(n[b])>-1&&(p=n[b],n=n.slice(0,b))}n&&(i.push(n),n="",d=!1);var y=""!==p&&void 0!==_&&_!==p,w="+"===v||"*"===v,C="?"===v||"*"===v,x=p||a,A=f||g;i.push({name:m||o++,prefix:p,delimiter:x,optional:C,repeat:w,partial:y,pattern:A?O(A):"[^"+I(x)+"]+?"})}}return(n||s<t.length)&&i.push(n+t.substr(s)),i}function T(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,i){for(var o="",s=i&&i.encode||encodeURIComponent,n=0;n<t.length;n++){var a=t[n];if("string"!=typeof a){var l,d=r?r[a.name]:void 0;if(Array.isArray(d)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(0===d.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<d.length;h++){if(l=s(d[h],a),!e[n].test(l))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');o+=(0===h?a.prefix:a.delimiter)+l}}else if("string"!=typeof d&&"number"!=typeof d&&"boolean"!=typeof d){if(!a.optional)throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"));a.partial&&(o+=a.prefix)}else{if(l=s(String(d),a),!e[n].test(l))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+l+'"');o+=a.prefix+l}}else o+=a}return o}}function I(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function O(t){return t.replace(/([=!:$/()])/g,"\\$1")}function k(t){return t&&t.sensitive?"":"i"}function z(t,e,r){for(var i=(r=r||{}).strict,o=!1!==r.start,s=!1!==r.end,n=I(r.delimiter||"/"),a=r.delimiters||"./",l=[].concat(r.endsWith||[]).map(I).concat("$").join("|"),d=o?"^":"",h=0===t.length,c=0;c<t.length;c++){var u=t[c];if("string"==typeof u)d+=I(u),h=c===t.length-1&&a.indexOf(u[u.length-1])>-1;else{var p=u.repeat?"(?:"+u.pattern+")(?:"+I(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),u.optional?u.partial?d+=I(u.prefix)+"("+p+")?":d+="(?:"+I(u.prefix)+"("+p+"))?":d+=I(u.prefix)+"("+p+")"}}return s?(i||(d+="(?:"+n+")?"),d+="$"===l?"$":"(?="+l+")"):(i||(d+="(?:"+n+"(?="+l+"))?"),h||(d+="(?="+n+"|"+l+")")),new RegExp(d,k(r))}C.parse=x,C.compile=function(t,e){return T(P(t,e))},C.tokensToFunction=A,C.tokensToRegExp=E;const{hasOwnProperty:R}=Object.prototype,N=new Map;function $(t){try{return decodeURIComponent(t)}catch(e){return t}}function L(t,e,r,i,o){let s,n,a=0,l=t.path||"";return"/"===l.charAt(0)&&(r&&(l=l.substr(1)),r=!0),{next(d){if(t===d)return{done:!0};const h=t.__children=t.__children||t.children;if(!s&&(s=function(t,e,r,i,o){const s=`${t}|${r=!!r}`;let n=N.get(s);if(!n){const e=[];n={keys:e,pattern:C(t,e,{end:r,strict:""===t})},N.set(s,n)}const a=n.pattern.exec(e);if(!a)return null;const l=Object.assign({},o);for(let t=1;t<a.length;t++){const e=n.keys[t-1],r=e.name,i=a[t];void 0===i&&R.call(l,r)||(e.repeat?l[r]=i?i.split(e.delimiter).map($):[]:l[r]=i?$(i):i)}return{path:a[0],keys:(i||[]).concat(n.keys),params:l}}(l,e,!h,i,o),s))return{done:!1,value:{route:t,keys:s.keys,params:s.params,path:s.path}};if(s&&h)for(;a<h.length;){if(!n){const i=h[a];i.parent=t;let o=s.path.length;o>0&&"/"===e.charAt(o)&&(o+=1),n=L(i,e.substr(o),r,s.keys,s.params)}const i=n.next(d);if(!i.done)return{done:!1,value:i.value};n=null,a++}return{done:!0}}}}function F(t){if(_(t.route.action))return t.route.action(t)}N.set("|false",{keys:[],pattern:/(?:)/});class D{constructor(t,e={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e.baseUrl||"",this.errorHandler=e.errorHandler,this.resolveRoute=e.resolveRoute||F,this.context=Object.assign({resolver:this},e.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){h(t);const e=[...i(t)];this.root.__children=e}addRoutes(t){return h(t),this.root.__children.push(...i(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const e=Object.assign({},this.context,m(t)?{pathname:t}:t),r=L(this.root,this.__normalizePathname(e.pathname),this.baseUrl),i=this.resolveRoute;let o=null,s=null,n=e;function a(t,l=o.value.route,d){const h=null===d&&o.value.route;return o=s||r.next(h),s=null,t||!o.done&&function(t,e){let r=e;for(;r;)if(r=r.parent,r===t)return!0;return!1}(l,o.value.route)?o.done?Promise.reject(f(e)):(n=Object.assign(n?{chain:n.chain?n.chain.slice(0):[]}:{},e,o.value),function(t,e){const{route:r,path:i}=e;if(r&&!r.__synthetic){const e={path:i,route:r};if(t.chain){if(r.parent){let e=t.chain.length;for(;e--&&t.chain[e].route&&t.chain[e].route!==r.parent;)t.chain.pop()}}else t.chain=[];t.chain.push(e)}}(n,o.value),Promise.resolve(i(n)).then((e=>null!=e&&e!==g?(n.result=e.result||e,n):a(t,l,e)))):(s=o,Promise.resolve(g))}return e.next=a,Promise.resolve().then((()=>a(!0,this.root))).catch((t=>{const e=function(t){let e=`Path '${t.pathname}' is not properly resolved due to an error.`;const r=(t.route||{}).path;return r&&(e+=` Resolution had failed on route: '${r}'`),e}(n);if(t?console.warn(e):t=new Error(e),t.context=t.context||n,t instanceof DOMException||(t.code=t.code||500),this.errorHandler)return n.result=this.errorHandler(t),n;throw t}))}static __createUrl(t,e){return new URL(t,e)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const e=this.__effectiveBaseUrl,r=this.constructor.__createUrl(t,e).href;return r.slice(0,e.length)===e?r.slice(e.length):void 0}}D.pathToRegexp=C;const{pathToRegexp:H}=D,M=new Map;function B(t,e,r){const i=e.name||e.component;if(i&&(t.has(i)?t.get(i).push(e):t.set(i,[e])),Array.isArray(r))for(let i=0;i<r.length;i++){const o=r[i];o.parent=e,B(t,o,o.__children||o.children)}}function V(t,e){const r=t.get(e);if(r&&r.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return r&&r[0]}function j(t){let e=t.path;return e=Array.isArray(e)?e[0]:e,void 0!==e?e:""}function U(t,e={}){if(!(t instanceof D))throw new TypeError("An instance of Resolver is expected");const r=new Map;return(i,o)=>{let s=V(r,i);if(!s&&(r.clear(),B(r,t.root,t.root.__children),s=V(r,i),!s))throw new Error(`Route "${i}" not found`);let n=M.get(s.fullPath);if(!n){let t=j(s),e=s.parent;for(;e;){const r=j(e);r&&(t=r.replace(/\/$/,"")+"/"+t.replace(/^\//,"")),e=e.parent}const r=H.parse(t),i=H.tokensToFunction(r),o=Object.create(null);for(let t=0;t<r.length;t++)m(r[t])||(o[r[t].name]=!0);n={toPath:i,keys:o},M.set(t,n),s.fullPath=t}let a=n.toPath(o,e)||"/";if(e.stringifyQueryParams&&o){const t={},r=Object.keys(o);for(let e=0;e<r.length;e++){const i=r[e];n.keys[i]||(t[i]=o[i])}const i=e.stringifyQueryParams(t);i&&(a+="?"===i.charAt(0)?i:`?${i}`)}return a}}let q=[];function W(t){q.forEach((t=>t.inactivate())),t.forEach((t=>t.activate())),q=t}function G(t,e){return t.classList.add(e),new Promise((r=>{if((t=>{const e=getComputedStyle(t).getPropertyValue("animation-name");return e&&"none"!==e})(t)){const i=t.getBoundingClientRect(),o=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;t.setAttribute("style",`position: absolute; ${o}`),((t,e)=>{const r=()=>{t.removeEventListener("animationend",r),e()};t.addEventListener("animationend",r)})(t,(()=>{t.classList.remove(e),t.removeAttribute("style"),r()}))}else t.classList.remove(e),r()}))}function Y(t){return null!=t}function K({pathname:t="",search:e="",hash:r="",chain:i=[],params:o={},redirectFrom:s,resolver:n},a){const l=i.map((t=>t.route));return{baseUrl:n&&n.baseUrl||"",pathname:t,search:e,hash:r,routes:l,route:a||l.length&&l[l.length-1]||null,params:o,redirectFrom:s,getUrl:(t={})=>tt(rt.pathToRegexp.compile(et(l))(Object.assign({},o,t)),n)}}function J(t,e){const r=Object.assign({},t.params);return{redirect:{pathname:e,from:t.pathname,params:r}}}function X(t,e,r){if(_(t))return t.apply(r,e)}function Q(t,e,r){return i=>i&&(i.cancel||i.redirect)?i:r?X(r[t],e,r):void 0}function Z(t){if(t&&t.length){const e=t[0].parentNode;for(let r=0;r<t.length;r++)e.removeChild(t[r])}}function tt(t,e){const r=e.__effectiveBaseUrl;return r?e.constructor.__createUrl(t.replace(/^\//,""),r).pathname:t}function et(t){return t.map((t=>t.path)).reduce(((t,e)=>e.length?t.replace(/\/$/,"")+"/"+e.replace(/^\//,""):t),"")}class rt extends D{constructor(t,e){const r=document.head.querySelector("base"),i=r&&r.getAttribute("href");super([],Object.assign({baseUrl:i&&D.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},e)),this.resolveRoute=t=>this.__resolveRoute(t);const o=rt.NavigationTrigger;rt.setTriggers.apply(rt,Object.keys(o).map((t=>o[t]))),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=K({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const e=t.route;let r=Promise.resolve();_(e.children)&&(r=r.then((()=>e.children(function(t){const e=Object.assign({},t);return delete e.next,e}(t)))).then((t=>{Y(t)||_(e.children)||(t=e.children),function(t,e){if(!Array.isArray(t)&&!p(t))throw new Error(o(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${t}`));e.__children=[];const r=i(t);for(let t=0;t<r.length;t++)d(r[t]),e.__children.push(r[t])}(t,e)})));const s={redirect:e=>J(t,e),component:t=>{const e=document.createElement(t);return this.__createdByRouter.set(e,!0),e}};return r.then((()=>{if(this.__isLatestRender(t))return X(e.action,[t,s],e)})).then((t=>{return Y(t)&&(t instanceof HTMLElement||t.redirect||t===g)?t:m(e.redirect)?s.redirect(e.redirect):e.bundle?(r=e.bundle,m(r)?c(r):Promise.race(a.filter((t=>t in r)).map((t=>c(r[t],t))))).then((()=>{}),(()=>{throw new Error(o(`Bundle not found: ${e.bundle}. Check if the file name is correct`))})):void 0;var r})).then((t=>Y(t)?t:m(e.component)?s.component(e.component):void 0))}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,e=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),e||this.__onNavigationEvent(),this.ready}render(t,e){const r=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},m(t)?{pathname:t}:t,{__renderId:r});return this.ready=this.resolve(i).then((t=>this.__fullyResolveChain(t))).then((t=>{if(this.__isLatestRender(t)){const i=this.__previousContext;if(t===i)return this.__updateBrowserHistory(i,!0),this.location;if(this.location=K(t),e&&this.__updateBrowserHistory(t,1===r),u("location-changed",{router:this,location:this.location}),t.__skipAttach)return this.__copyUnchangedElements(t,i),this.__previousContext=t,this.location;this.__addAppearingContent(t,i);const o=this.__animateIfNeeded(t);return this.__runOnAfterEnterCallbacks(t),this.__runOnAfterLeaveCallbacks(t,i),o.then((()=>{if(this.__isLatestRender(t))return this.__removeDisappearingContent(),this.__previousContext=t,this.location}))}})).catch((t=>{if(r===this.__lastStartedRenderId)throw e&&this.__updateBrowserHistory(i),Z(this.__outlet&&this.__outlet.children),this.location=K(Object.assign(i,{resolver:this})),u("error",Object.assign({router:this,error:t},i)),t})),this.ready}__fullyResolveChain(t,e=t){return this.__findComponentContextAfterAllRedirects(e).then((r=>{const i=r!==e?r:t,o=tt(et(r.chain),r.resolver)===r.pathname,s=(t,e=t.route,r)=>t.next(void 0,e,r).then((r=>null===r||r===g?o?t:null!==e.parent?s(t,e.parent,r):r:r));return s(r).then((t=>{if(null===t||t===g)throw f(i);return t&&t!==g&&t!==r?this.__fullyResolveChain(i,t):this.__amendWithOnBeforeCallbacks(r)}))}))}__findComponentContextAfterAllRedirects(t){const e=t.result;return e instanceof HTMLElement?(function(t,e){e.location=K(t);const r=t.chain.map((t=>t.route)).indexOf(t.route);t.chain[r].element=e}(t,e),Promise.resolve(t)):e.redirect?this.__redirect(e.redirect,t.__redirectCount,t.__renderId).then((t=>this.__findComponentContextAfterAllRedirects(t))):e instanceof Error?Promise.reject(e):Promise.reject(new Error(o(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${function(t){if("object"!=typeof t)return String(t);const e=Object.prototype.toString.call(t).match(/ (.*)\]$/)[1];return"Object"===e||"Array"===e?`${e} ${JSON.stringify(t)}`:e}(e)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then((e=>e===this.__previousContext||e===t?e:this.__fullyResolveChain(e)))}__runOnBeforeCallbacks(t){const e=this.__previousContext||{},r=e.chain||[],i=t.chain;let o=Promise.resolve();const s=()=>({cancel:!0}),n=e=>J(t,e);if(t.__divergedChainIndex=0,t.__skipAttach=!1,r.length){for(let e=0;e<Math.min(r.length,i.length)&&r[e].route===i[e].route&&(r[e].path===i[e].path||r[e].element===i[e].element)&&this.__isReusableElement(r[e].element,i[e].element);e=++t.__divergedChainIndex);if(t.__skipAttach=i.length===r.length&&t.__divergedChainIndex==i.length&&this.__isReusableElement(t.result,e.result),t.__skipAttach){for(let e=i.length-1;e>=0;e--)o=this.__runOnBeforeLeaveCallbacks(o,t,{prevent:s},r[e]);for(let e=0;e<i.length;e++)o=this.__runOnBeforeEnterCallbacks(o,t,{prevent:s,redirect:n},i[e]),r[e].element.location=K(t,r[e].route)}else for(let e=r.length-1;e>=t.__divergedChainIndex;e--)o=this.__runOnBeforeLeaveCallbacks(o,t,{prevent:s},r[e])}if(!t.__skipAttach)for(let e=0;e<i.length;e++)e<t.__divergedChainIndex?e<r.length&&r[e].element&&(r[e].element.location=K(t,r[e].route)):(o=this.__runOnBeforeEnterCallbacks(o,t,{prevent:s,redirect:n},i[e]),i[e].element&&(i[e].element.location=K(t,i[e].route)));return o.then((e=>{if(e){if(e.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(e.redirect)return this.__redirect(e.redirect,t.__redirectCount,t.__renderId)}return t}))}__runOnBeforeLeaveCallbacks(t,e,r,i){const o=K(e);return t.then((t=>{if(this.__isLatestRender(e))return Q("onBeforeLeave",[o,r,this],i.element)(t)})).then((t=>{if(!(t||{}).redirect)return t}))}__runOnBeforeEnterCallbacks(t,e,r,i){const o=K(e,i.route);return t.then((t=>{if(this.__isLatestRender(e))return Q("onBeforeEnter",[o,r,this],i.element)(t)}))}__isReusableElement(t,e){return!(!t||!e)&&(this.__createdByRouter.get(t)&&this.__createdByRouter.get(e)?t.localName===e.localName:t===e)}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,e,r){if(e>256)throw new Error(o(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(e||0)+1,__renderId:r})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(o(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:e="",hash:r=""},i){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==r){const o=i?"replaceState":"pushState";window.history[o](null,document.title,t+e+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,e){let r=this.__outlet;for(let i=0;i<t.__divergedChainIndex;i++){const o=e&&e.chain[i].element;if(o){if(o.parentNode!==r)break;t.chain[i].element=o,r=o}}return r}__addAppearingContent(t,e){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(t,e);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter((e=>this.__addedByRouter.get(e)&&e!==t.result));let i=r;for(let e=t.__divergedChainIndex;e<t.chain.length;e++){const o=t.chain[e].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===r&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&Z(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Z(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,e){if(e)for(let r=e.chain.length-1;r>=t.__divergedChainIndex&&this.__isLatestRender(t);r--){const i=e.chain[r].element;if(i)try{const r=K(t);X(i.onAfterLeave,[r,{},e.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&Z(i.children)}}}__runOnAfterEnterCallbacks(t){for(let e=t.__divergedChainIndex;e<t.chain.length&&this.__isLatestRender(t);e++){const r=t.chain[e].element||{},i=K(t,t.chain[e].route);X(r.onAfterEnter,[i,{},t.resolver],r)}}__animateIfNeeded(t){const e=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],i=[],o=t.chain;let s;for(let t=o.length;t>0;t--)if(o[t-1].route.animate){s=o[t-1].route.animate;break}if(e&&r&&s){const t=p(s)&&s.leave||"leaving",o=p(s)&&s.enter||"entering";i.push(G(e,t)),i.push(G(r,o))}return Promise.all(i).then((()=>t))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:e,search:r,hash:i}=t?t.detail:window.location;m(this.__normalizePathname(e))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:e,search:r,hash:i},!0))}static setTriggers(...t){W(t)}urlForName(t,e){return this.__urlForName||(this.__urlForName=U(this)),tt(this.__urlForName(t,e),this)}urlForPath(t,e){return tt(rt.pathToRegexp.compile(t)(e),this)}static go(t){const{pathname:e,search:r,hash:i}=m(t)?this.__createUrl(t,"http://a"):t;return u("go",{pathname:e,search:r,hash:i})}}const it=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ot=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function st(t,e){if("function"!=typeof t)return;const r=it.exec(t.toString());if(r)try{t=new Function(r[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(ot?!(ot&&Object.keys(ot).map((t=>ot[t])).filter((t=>t.productionMode)).length>0):!st((function(){return!0})))}catch(t){return!1}}()),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),function(t,e){if(window.Vaadin.developmentMode)st(t,e)}((function(){})),rt.NavigationTrigger={POPSTATE:w,CLICK:b}},565:function(t,e,r){var i,o=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},n=this&&this.__decorate||function(t,e,r,i){var o,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};e.__esModule=!0;var a=r(370),l=r(662);r(199),r(101),r(882);var d,h=r(604);!function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.res=[],e}o(e,t),e.prototype.render=function(){return(0,a.html)(d||(d=s(["\n\t\t\t","\n\t\t\t<vaadin-text-field id='first' clear-button-visible></vaadin-text-field>\n\t\t\t<vaadin-text-field id='last' clear-button-visible></vaadin-text-field>\n\t\t\t<vaadin-button @click=\"",'" theme="normal">POST</vaadin-button>\n\t\t\t<vaadin-grid .items="','">\n\t\t\t<vaadin-grid-column path="name"></vaadin-grid-column>\n\t\t    </vaadin-grid>\n\t\t'],["\n\t\t\t","\n\t\t\t<vaadin-text-field id='first' clear-button-visible></vaadin-text-field>\n\t\t\t<vaadin-text-field id='last' clear-button-visible></vaadin-text-field>\n\t\t\t<vaadin-button @click=\"",'" theme="normal">POST</vaadin-button>\n\t\t\t<vaadin-grid .items="','">\n\t\t\t<vaadin-grid-column path="name"></vaadin-grid-column>\n\t\t    </vaadin-grid>\n\t\t'])),h.styles,this._post,this.res)},e.prototype._post=function(){var t=this,e={value:this._input.value,value2:this._last.value};fetch("/postJSON.do",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(e){return t.res=e.results})).catch((function(t){return console.log(t)}))},n([(0,l.property)({type:Array})],e.prototype,"res"),n([(0,l.query)("#first")],e.prototype,"_input"),n([(0,l.query)("#last")],e.prototype,"_last"),e=n([(0,l.customElement)("fetching-data")],e)}(a.LitElement)},900:function(t,e,r){var i,o=this&&this.__extends||(i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},i(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),s=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},n=this&&this.__decorate||function(t,e,r,i){var o,s=arguments.length,n=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};e.__esModule=!0,e.FetchingData2=void 0;var a=r(370),l=r(662);r(199),r(101),r(882);var d,h,c=r(604),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.res=[],e}return o(e,t),e.prototype.render=function(){return(0,a.html)(h||(h=s(["\n\t\t\t","\n\t\t\t<table>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t</th> \n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t","\n\t\t\t\t<tbody>\n\t\t\t</table>\n\t\t"],["\n\t\t\t","\n\t\t\t<table>\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t</th> \n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t","\n\t\t\t\t<tbody>\n\t\t\t</table>\n\t\t"])),c.styles,this.res.map((function(t){return(0,a.html)(d||(d=s(['<tr class="striped"><td>',"</td></tr>"],['<tr class="striped"><td>',"</td></tr>"])),t.name)})))},e.prototype._post=function(){var t=this,e={value:this._input.value,value2:this._last.value};fetch("/postJSON.do",{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(t){return t.json()})).then((function(e){return t.res=e.results})).catch((function(t){return console.log(t)}))},n([(0,l.property)({type:Array})],e.prototype,"res"),n([(0,l.query)("#first")],e.prototype,"_input"),n([(0,l.query)("#last")],e.prototype,"_last"),n([(0,l.customElement)("fetching-data2")],e)}(a.LitElement);e.FetchingData2=u},604:function(t,e,r){var i=this&&this.__makeTemplateObject||function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t};e.__esModule=!0,e.styles=void 0;var o,s=r(936);e.styles=(0,s.html)(o||(o=i(["\n<style>\npaper-button.custom {\n  --paper-button-ink-color: var(--paper-pink-a200);\n  /* These could also be individually defined for each of the\n    specific css classes, but we'll just do it once as an example */\n  --paper-button-flat-keyboard-focus: {\n    background-color: var(--paper-pink-a200) !important;\n    color: white !important;\n  };\n  --paper-button-raised-keyboard-focus: {\n    background-color: var(--paper-pink-a200) !important;\n    color: white !important;\n  };\n}\npaper-button.custom:hover {\n  background-color: var(--paper-indigo-100);\n}\npaper-button.pink {\n  color: var(--paper-pink-a200);\n\n}\npaper-button.indigo {\n  background-color: var(--paper-indigo-500);\n  color: white;\n  --paper-button-raised-keyboard-focus: {\n    background-color: var(--paper-pink-a200) !important;\n    color: white !important;\n  };\n}\npaper-button.green {\n  background-color: var(--paper-green-500);\n  color: white;\n}\npaper-button.green[active] {\n  background-color: var(--paper-red-500);\n}\npaper-button.disabled {\n  color: white;\n  background-color: bisque;\n}\n</style>\n"],["\n<style>\npaper-button.custom {\n  --paper-button-ink-color: var(--paper-pink-a200);\n  /* These could also be individually defined for each of the\n    specific css classes, but we'll just do it once as an example */\n  --paper-button-flat-keyboard-focus: {\n    background-color: var(--paper-pink-a200) !important;\n    color: white !important;\n  };\n  --paper-button-raised-keyboard-focus: {\n    background-color: var(--paper-pink-a200) !important;\n    color: white !important;\n  };\n}\npaper-button.custom:hover {\n  background-color: var(--paper-indigo-100);\n}\npaper-button.pink {\n  color: var(--paper-pink-a200);\n\n}\npaper-button.indigo {\n  background-color: var(--paper-indigo-500);\n  color: white;\n  --paper-button-raised-keyboard-focus: {\n    background-color: var(--paper-pink-a200) !important;\n    color: white !important;\n  };\n}\npaper-button.green {\n  background-color: var(--paper-green-500);\n  color: white;\n}\npaper-button.green[active] {\n  background-color: var(--paper-red-500);\n}\npaper-button.disabled {\n  color: white;\n  background-color: bisque;\n}\n</style>\n"])))},674:(t,e,r)=>{r.d(e,{Nz:()=>o,Oi:()=>i,eZ:()=>s});const i=(t,e,r)=>{Object.defineProperty(e,r,t)},o=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),s=({finisher:t,descriptor:e})=>(r,i)=>{var o;if(void 0===i){const i=null!==(o=r.originalKey)&&void 0!==o?o:r.key,s=null!=e?{kind:"method",placement:"prototype",key:i,descriptor:e(r.key)}:{...r,key:i};return null!=t&&(s.finisher=function(e){t(e,i)}),s}{const o=r.constructor;void 0!==e&&Object.defineProperty(r,i,e(i)),null==t||t(o,i)}}},713:(t,e,r)=>{r.d(e,{M:()=>i});const i=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(e){customElements.define(t,e)}}})(t,e)},829:(t,e,r)=>{r.d(e,{h:()=>o});var i=r(674);function o(t){return(0,i.eZ)({finisher:(e,r)=>{Object.assign(e.prototype[r],t)}})}},760:(t,e,r)=>{r.d(e,{C:()=>o});const i=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(r){r.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}};function o(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):i(t,e)}},711:(t,e,r)=>{r.d(e,{K:()=>o});var i=r(674);function o(t){return(0,i.eZ)({descriptor:e=>({get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelectorAll(t))&&void 0!==r?r:[]},enumerable:!0,configurable:!0})})}},935:(t,e,r)=>{r.d(e,{N:()=>n});var i,o=r(674);const s=null!=(null===(i=window.HTMLSlotElement)||void 0===i?void 0:i.prototype.assignedElements)?(t,e)=>t.assignedElements(e):(t,e)=>t.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));function n(t){const{slot:e,selector:r}=null!=t?t:{};return(0,o.eZ)({descriptor:i=>({get(){var i;const o="slot"+(e?`[name=${e}]`:":not([name])"),n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(o),a=null!=n?s(n,t):[];return r?a.filter((t=>t.matches(r))):a},enumerable:!0,configurable:!0})})}},43:(t,e,r)=>{r.d(e,{v:()=>s});var i=r(674),o=r(935);function s(t,e,r){let s,n=t;return"object"==typeof t?(n=t.slot,s=t):s={flatten:e},r?(0,o.N)({slot:n,flatten:e,selector:r}):(0,i.eZ)({descriptor:t=>({get(){var t,e;const r="slot"+(n?`[name=${n}]`:":not([name])"),i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(r);return null!==(e=null==i?void 0:i.assignedNodes(s))&&void 0!==e?e:[]},enumerable:!0,configurable:!0})})}},602:(t,e,r)=>{r.d(e,{G:()=>o});var i=r(674);function o(t){return(0,i.eZ)({descriptor:e=>({async get(){var e;return await this.updateComplete,null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)},enumerable:!0,configurable:!0})})}},669:(t,e,r)=>{r.d(e,{I:()=>o});var i=r(674);function o(t,e){return(0,i.eZ)({descriptor:r=>{const i={get(){var e,r;return null!==(r=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof r?Symbol():"__"+r;i.get=function(){var r,i;return void 0===this[e]&&(this[e]=null!==(i=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(t))&&void 0!==i?i:null),this[e]}}return i}})}},158:(t,e,r)=>{r.d(e,{S:()=>o});var i=r(760);function o(t){return(0,i.C)({...t,state:!0})}},898:(t,e,r)=>{r.d(e,{c3:()=>a,fl:()=>y,ec:()=>h,iv:()=>d,Ts:()=>g,i1:()=>c,Qu:()=>v,FV:()=>o,$m:()=>l});const i=window,o=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class a{constructor(t,e,r){if(this._$cssResult$=!0,r!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(o&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&n.set(e,t))}return t}toString(){return this.cssText}}const l=t=>new a("string"==typeof t?t:t+"",void 0,s),d=(t,...e)=>{const r=1===t.length?t[0]:e.reduce(((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1]),t[0]);return new a(r,t,s)},h=(t,e)=>{o?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const r=document.createElement("style"),o=i.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=e.cssText,t.appendChild(r)}))},c=o?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return l(e)})(t):t;var u;const p=window,_=p.trustedTypes,m=_?_.emptyScript:"",f=p.reactiveElementPolyfillSupport,g={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},v=(t,e)=>e!==t&&(e==e||t==t),b={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:v};class y extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,r)=>{const i=this._$Ep(r,e);void 0!==i&&(this._$Ev.set(i,r),t.push(i))})),t}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const r="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){const o=this[t];this[e]=i,this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||b}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of e)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(c(t))}else void 0!==t&&e.push(c(t));return e}static _$Ep(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,r;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(r=t.hostConnected)||void 0===r||r.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return h(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e,r=b){var i;const o=this.constructor._$Ep(t,r);if(void 0!==o&&!0===r.reflect){const s=(void 0!==(null===(i=r.converter)||void 0===i?void 0:i.toAttribute)?r.converter:g).toAttribute(e,r.type);this._$El=t,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(t,e){var r;const i=this.constructor,o=i._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=i.getPropertyOptions(o),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(r=t.converter)||void 0===r?void 0:r.fromAttribute)?t.converter:g;this._$El=o,this[o]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,r){let i=!0;void 0!==t&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===r.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(r)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}y.finalized=!0,y.elementProperties=new Map,y.elementStyles=[],y.shadowRootOptions={mode:"open"},null==f||f({ReactiveElement:y}),(null!==(u=p.reactiveElementVersions)&&void 0!==u?u:p.reactiveElementVersions=[]).push("1.5.0")},913:(t,e,r)=>{r.d(e,{Wc:()=>d,YA:()=>u,rs:()=>h,t$:()=>c});let i=0,o=0;const s=[];let n=0,a=!1;const l=document.createTextNode("");new window.MutationObserver((function(){a=!1;const t=s.length;for(let e=0;e<t;e++){const t=s[e];if(t)try{t()}catch(t){setTimeout((()=>{throw t}))}}s.splice(0,t),o+=t})).observe(l,{characterData:!0});const d={after:t=>({run:e=>window.setTimeout(e,t),cancel(t){window.clearTimeout(t)}}),run:(t,e)=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}},h={run:t=>window.requestAnimationFrame(t),cancel(t){window.cancelAnimationFrame(t)}},c={run:t=>window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16),cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},u={run(t){a||(a=!0,l.textContent=n,n+=1),s.push(t);const e=i;return i+=1,e},cancel(t){const e=t-o;if(e>=0){if(!s[e])throw new Error(`invalid async handle: ${t}`);s[e]=null}}}},155:(t,e,r)=>{r.d(e,{k:()=>i});const i=(0,r(14).o)((t=>class extends t{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach((t=>{t.hostConnected&&t.hostConnected()}))}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach((t=>{t.hostDisconnected&&t.hostDisconnected()}))}addController(t){this.__controllers.add(t),void 0!==this.$&&this.isConnected&&t.hostConnected&&t.hostConnected()}removeController(t){this.__controllers.delete(t)}}))},139:(t,e,r)=>{r.d(e,{Ex:()=>s,dx:()=>i,yl:()=>a});class i{static debounce(t,e,r){return t instanceof i?t._cancelAsync():t=new i,t.setConfig(e,r),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run((()=>{this._timer=null,o.delete(this),this._callback()}))}cancel(){this.isActive()&&(this._cancelAsync(),o.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}}let o=new Set;function s(t){o.add(t)}function n(){const t=Boolean(o.size);return o.forEach((t=>{try{t.flush()}catch(t){setTimeout((()=>{throw t}))}})),t}const a=()=>{let t;do{t=n()}while(t)}},676:(t,e,r)=>{r.d(e,{U:()=>l});class i{static detectScrollType(){const t=document.createElement("div");t.textContent="ABCD",t.dir="rtl",t.style.fontSize="14px",t.style.width="4px",t.style.height="1px",t.style.position="absolute",t.style.top="-1000px",t.style.overflow="scroll",document.body.appendChild(t);let e="reverse";return t.scrollLeft>0?e="default":(t.scrollLeft=2,t.scrollLeft<2&&(e="negative")),document.body.removeChild(t),e}static getNormalizedScrollLeft(t,e,r){const{scrollLeft:i}=r;if("rtl"!==e||!t)return i;switch(t){case"negative":return r.scrollWidth-r.clientWidth+i;case"reverse":return r.scrollWidth-r.clientWidth-i;default:return i}}static setNormalizedScrollLeft(t,e,r,i){if("rtl"===e&&t)switch(t){case"negative":r.scrollLeft=r.clientWidth-r.scrollWidth+i;break;case"reverse":r.scrollLeft=r.scrollWidth-r.clientWidth-i;break;default:r.scrollLeft=i}else r.scrollLeft=i}}const o=[];let s;function n(t,e,r=t.getAttribute("dir")){e?t.setAttribute("dir",e):null!=r&&t.removeAttribute("dir")}function a(){return document.documentElement.getAttribute("dir")}new MutationObserver((function(){const t=a();o.forEach((e=>{n(e,t)}))})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const l=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:t=>t||"",toAttribute:t=>""===t?null:t}}}}static finalize(){super.finalize(),s||(s=i.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")&&!this.__restoreSubscription||(this.__subscribe(),n(this,a(),null))}attributeChangedCallback(t,e,r){if(super.attributeChangedCallback(t,e,r),"dir"!==t)return;const i=a(),s=r===i&&-1===o.indexOf(this),l=!r&&e&&-1===o.indexOf(this),d=r!==i&&e===i;s||l?(this.__subscribe(),n(this,i,r)):d&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=o.includes(this),this.__unsubscribe()}_valueToNodeAttribute(t,e,r){("dir"!==r||""!==e||t.hasAttribute("dir"))&&super._valueToNodeAttribute(t,e,r)}_attributeToProperty(t,e,r){"dir"!==t||e?super._attributeToProperty(t,e,r):this.dir=""}__subscribe(){o.includes(this)||o.push(this)}__unsubscribe(){o.includes(this)&&o.splice(o.indexOf(this),1)}__getNormalizedScrollLeft(t){return i.getNormalizedScrollLeft(s,this.getAttribute("dir")||"ltr",t)}__setNormalizedScrollLeft(t,e){return i.setNormalizedScrollLeft(s,this.getAttribute("dir")||"ltr",t,e)}}},598:(t,e,r)=>{r.d(e,{f:()=>i});const i=(0,r(14).o)((t=>class extends t{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(t){this._setAriaDisabled(t)}_setAriaDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}}))},726:(t,e,r)=>{function i(t){return t?new Set(t.split(" ")):new Set}function o(t){return[...t].join(" ")}function s(t,e,r){const s=i(t.getAttribute(e));s.add(r),t.setAttribute(e,o(s))}function n(t,e,r){const s=i(t.getAttribute(e));s.delete(r),0!==s.size?t.setAttribute(e,o(s)):t.removeAttribute(e)}r.d(e,{$2:()=>s,x_:()=>n})},402:(t,e,r)=>{r.d(e,{S:()=>p});var i=r(387);const o=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,s=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function n(t,e){if("function"!=typeof t)return;const r=o.exec(t.toString());if(r)try{t=new Function(r[1])}catch(t){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",t)}return t(e)}window.Vaadin=window.Vaadin||{};function a(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(s?!(s&&Object.keys(s).map((t=>s[t])).filter((t=>t.productionMode)).length>0):!n((function(){return!0})))}catch(t){return!1}}());var l=r(913),d=r(139),h=r(676);let c;(0,i.xj)(!1),window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){!function(t,e){if(window.Vaadin.developmentMode)n(t,e)}(a)};const u=new Set,p=t=>class extends((0,h.U)(t)){static get version(){return"23.3.1"}static finalize(){super.finalize();const{is:t}=this;t&&!u.has(t)&&(window.Vaadin.registrations.push(this),u.add(t),window.Vaadin.developmentModeCallback&&(c=d.dx.debounce(c,l.t$,(()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()})),(0,d.Ex)(c)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},527:(t,e,r)=>{r.d(e,{W:()=>s});var i=r(14),o=r(530);const s=(0,i.o)((t=>class extends t{get _keyboardActive(){return(0,o.LQ)()}ready(){this.addEventListener("focusin",(t=>{this._shouldSetFocus(t)&&this._setFocused(!0)})),this.addEventListener("focusout",(t=>{this._shouldRemoveFocus(t)&&this._setFocused(!1)})),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(t){this.toggleAttribute("focused",t),this.toggleAttribute("focus-ring",t&&this._keyboardActive)}_shouldSetFocus(t){return!0}_shouldRemoveFocus(t){return!0}}))},530:(t,e,r)=>{r.d(e,{LQ:()=>o});let i=!1;function o(){return i}window.addEventListener("keydown",(()=>{i=!0}),{capture:!0}),window.addEventListener("mousedown",(()=>{i=!1}),{capture:!0})},109:(t,e,r)=>{r.d(e,{NH:()=>A});var i=r(913);const o="string"==typeof document.head.style.touchAction,s="__polymerGestures",n="__polymerGesturesHandled",a="__polymerGesturesTouchAction",l=["mousedown","mousemove","mouseup","click"],d=[0,1,4,2],h=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}();function c(t){return l.indexOf(t)>-1}let u=!1;!function(){try{const t=Object.defineProperty({},"passive",{get(){u=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(t){}}();const p=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),_={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function m(t){const e=t.type;if(!c(e))return!1;if("mousemove"===e){let e=void 0===t.buttons?1:t.buttons;return t instanceof window.MouseEvent&&!h&&(e=d[t.which]||0),Boolean(1&e)}return 0===(void 0===t.button?0:t.button)}const f={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function g(t,e,r){t.movefn=e,t.upfn=r,document.addEventListener("mousemove",e),document.addEventListener("mouseup",r)}function v(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}const b=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],y={},w=[];function C(t){const e=b(t);return e.length>0?e[0]:t.target}function x(t){const e=t.type,r=t.currentTarget[s];if(!r)return;const i=r[e];if(!i)return;if(!t[n]&&(t[n]={},e.startsWith("touch"))){const r=t.changedTouches[0];if("touchstart"===e&&1===t.touches.length&&(f.touch.id=r.identifier),f.touch.id!==r.identifier)return;o||"touchstart"!==e&&"touchmove"!==e||function(t){const e=t.changedTouches[0],r=t.type;if("touchstart"===r)f.touch.x=e.clientX,f.touch.y=e.clientY,f.touch.scrollDecided=!1;else if("touchmove"===r){if(f.touch.scrollDecided)return;f.touch.scrollDecided=!0;const r=function(t){let e="auto";const r=b(t);for(let t,i=0;i<r.length;i++)if(t=r[i],t[a]){e=t[a];break}return e}(t);let i=!1;const o=Math.abs(f.touch.x-e.clientX),s=Math.abs(f.touch.y-e.clientY);t.cancelable&&("none"===r?i=!0:"pan-x"===r?i=s>o:"pan-y"===r&&(i=o>s)),i?t.preventDefault():P("track")}}(t)}const l=t[n];if(!l.skip){for(let e,r=0;r<w.length;r++)e=w[r],i[e.name]&&!l[e.name]&&e.flow&&e.flow.start.indexOf(t.type)>-1&&e.reset&&e.reset();for(let r,o=0;o<w.length;o++)r=w[o],i[r.name]&&!l[r.name]&&(l[r.name]=!0,r[e](t))}}function A(t,e,r){return!!y[e]&&(function(t,e,r){const n=y[e],l=n.deps,d=n.name;let h=t[s];h||(t[s]=h={});for(let e,r,i=0;i<l.length;i++)e=l[i],p&&c(e)&&"click"!==e||(r=h[e],r||(h[e]=r={_count:0}),0===r._count&&t.addEventListener(e,x,void c(e)),r[d]=(r[d]||0)+1,r._count=(r._count||0)+1);t.addEventListener(e,r),n.touchAction&&function(t,e){o&&t instanceof HTMLElement&&i.YA.run((()=>{t.style.touchAction=e})),t[a]=e}(t,n.touchAction)}(t,e,r),!0)}function E(t){w.push(t);for(let e=0;e<t.emits.length;e++)y[t.emits[e]]=t}function S(t,e,r){const i=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=r,t.dispatchEvent(i),i.defaultPrevented){const t=r.preventer||r.sourceEvent;t&&t.preventDefault&&t.preventDefault()}}function P(t){const e=function(t){for(let e,r=0;r<w.length;r++){e=w[r];for(let r,i=0;i<e.emits.length;i++)if(r=e.emits[i],r===t)return e}return null}(t);e.info&&(e.info.prevent=!0)}function T(t,e,r,i){e&&S(e,t,{x:r.clientX,y:r.clientY,sourceEvent:r,preventer:i,prevent:t=>P(t)})}function I(t,e,r){if(t.prevent)return!1;if(t.started)return!0;const i=Math.abs(t.x-e),o=Math.abs(t.y-r);return i>=5||o>=5}function O(t,e,r){if(!e)return;const i=t.moves[t.moves.length-2],o=t.moves[t.moves.length-1],s=o.x-t.x,n=o.y-t.y;let a,l=0;i&&(a=o.x-i.x,l=o.y-i.y),S(e,"track",{state:t.state,x:r.clientX,y:r.clientY,dx:s,dy:n,ddx:a,ddy:l,sourceEvent:r,hover:()=>function(t,e){let r=document.elementFromPoint(t,e),i=r;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const o=i;if(i=i.shadowRoot.elementFromPoint(t,e),o===i)break;i&&(r=i)}return r}(r.clientX,r.clientY)})}function k(t,e,r){const i=Math.abs(e.clientX-t.x),o=Math.abs(e.clientY-t.y),s=C(r||e);!s||_[s.localName]&&s.hasAttribute("disabled")||(isNaN(i)||isNaN(o)||i<=25&&o<=25||function(t){if("click"===t.type){if(0===t.detail)return!0;const e=C(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;const r=e.getBoundingClientRect(),i=t.pageX,o=t.pageY;return!(i>=r.left&&i<=r.right&&o>=r.top&&o<=r.bottom)}return!1}(e))&&(t.prevent||S(s,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:r}))}E({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){v(this.info)},mousedown(t){if(!m(t))return;const e=C(t),r=this;g(this.info,(t=>{m(t)||(T("up",e,t),v(r.info))}),(t=>{m(t)&&T("up",e,t),v(r.info)})),T("down",e,t)},touchstart(t){T("down",C(t),t.changedTouches[0],t)},touchend(t){T("up",C(t),t.changedTouches[0],t)}}),E({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(t){this.moves.length>2&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,v(this.info)},mousedown(t){if(!m(t))return;const e=C(t),r=this,i=t=>{const i=t.clientX,o=t.clientY;I(r.info,i,o)&&(r.info.state=r.info.started?"mouseup"===t.type?"end":"track":"start","start"===r.info.state&&P("tap"),r.info.addMove({x:i,y:o}),m(t)||(r.info.state="end",v(r.info)),e&&O(r.info,e,t),r.info.started=!0)};g(this.info,i,(t=>{r.info.started&&i(t),v(r.info)})),this.info.x=t.clientX,this.info.y=t.clientY},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove(t){const e=C(t),r=t.changedTouches[0],i=r.clientX,o=r.clientY;I(this.info,i,o)&&("start"===this.info.state&&P("tap"),this.info.addMove({x:i,y:o}),O(this.info,e,r),this.info.state="track",this.info.started=!0)},touchend(t){const e=C(t),r=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:r.clientX,y:r.clientY}),O(this.info,e,r))}}),E({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(t){m(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click(t){m(t)&&k(this.info,t)},touchstart(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend(t){k(this.info,t.changedTouches[0],t)}})},256:(t,e,r)=>{r.d(e,{L:()=>i});const i=(0,r(14).o)((t=>class extends t{ready(){super.ready(),this.addEventListener("keydown",(t=>{this._onKeyDown(t)})),this.addEventListener("keyup",(t=>{this._onKeyUp(t)}))}_onKeyDown(t){switch(t.key){case"Enter":this._onEnter(t);break;case"Escape":this._onEscape(t)}}_onKeyUp(t){}_onEnter(t){}_onEscape(t){}}))},677:(t,e,r)=>{r.d(e,{n:()=>s});var i=r(557);let o=0;class s extends EventTarget{static generateId(t,e){return`${t||"default"}-${e.localName}-${o++}`}constructor(t,e,r,i,o){super(),this.host=t,this.slotName=e,this.slotFactory=r,this.slotInitializer=i,o&&(this.defaultId=s.generateId(e,t))}hostConnected(){if(!this.initialized){let t=this.getSlotChild();t?(this.node=t,this.initCustomNode(t)):t=this.attachDefaultNode(),this.initNode(t),this.observe(),this.initialized=!0}}attachDefaultNode(){const{host:t,slotName:e,slotFactory:r}=this;let i=this.defaultNode;return!i&&r&&(i=r(t),i instanceof Element&&(""!==e&&i.setAttribute("slot",e),this.node=i,this.defaultNode=i)),i&&t.appendChild(i),i}getSlotChild(){const{slotName:t}=this;return Array.from(this.host.childNodes).find((e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&""===t))}initNode(t){const{slotInitializer:e}=this;e&&e(this.host,t)}initCustomNode(t){}teardownNode(t){}observe(){const{slotName:t}=this,e=""===t?"slot:not([name])":`slot[name=${t}]`,r=this.host.shadowRoot.querySelector(e);this.__slotObserver=new i.o(r,(t=>{const e=this.node,r=t.addedNodes.find((t=>t!==e));t.removedNodes.length&&t.removedNodes.forEach((t=>{this.teardownNode(t)})),r&&(e&&e.isConnected&&this.host.removeChild(e),this.node=r,r!==this.defaultNode&&(this.initCustomNode(r),this.initNode(r)))}))}}},62:(t,e,r)=>{r.d(e,{N:()=>o});var i=r(598);const o=t=>class extends((0,i.f)(t)){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(t,e){super._disabledChanged(t,e),t?(void 0!==this.tabindex&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):e&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(t){this.disabled&&-1!==t&&(this._lastTabIndex=t,this.tabindex=-1)}}},463:(t,e,r)=>{r.d(e,{f:()=>o});var i=r(677);class o extends i.n{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,void 0!==this.context&&(t.context=this.context),void 0!==this.manual&&(t.manual=this.manual),void 0!==this.opened&&(t.opened=this.opened),void 0!==this.position&&(t._position=this.position),void 0!==this.shouldShow&&(t.shouldShow=this.shouldShow)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}}},101:(t,e,r)=>{r.r(e),r(125),r(817);var i=r(128);(0,i.hC)("vaadin-grid",i.iv`
    :host {
      background-color: var(--material-background-color);
      font-family: var(--material-font-family);
      font-size: var(--material-small-font-size);
      line-height: 20px;
      color: var(--material-body-text-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    [part~='cell'] {
      min-height: 48px;
      -webkit-tap-highlight-color: transparent;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      padding: 8px 16px;
    }

    [part~='details-cell'] ::slotted(vaadin-grid-cell-content) {
      padding: 14px 16px;
    }

    [part~='header-cell'],
    [part~='footer-cell'] {
      background-color: var(--material-background-color);
      color: var(--material-secondary-text-color);
      font-size: var(--material-caption-font-size);
      font-weight: 500;
    }

    /* Header and footer divider between body rows */

    [part~='body-cell'],
    [part~='details-cell'],
    [part~='row']:last-child > [part~='header-cell'] {
      border-bottom: 1px solid var(--material-divider-color);
    }

    [part~='row']:first-child > [part~='footer-cell'] {
      border-top: 1px solid var(--material-divider-color);
    }

    /* Body rows/cells */

    [part~='body-cell'] {
      background-color: var(--material-background-color);
    }

    [part~='row']:hover > [part~='body-cell'] {
      background: linear-gradient(
          var(--_material-grid-row-hover-background-color, rgba(0, 0, 0, 0.04)),
          var(--_material-grid-row-hover-background-color, rgba(0, 0, 0, 0.04))
        )
        var(--material-background-color);
    }

    @media (hover: none) {
      [part~='row']:hover > [part~='body-cell'] {
        background: var(--material-background-color);
      }
    }

    /* Selected row */

    [part~='body-cell']::before {
      content: '';
      pointer-events: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: var(--material-primary-color);
      opacity: 0;
      transition: opacity 0.1s cubic-bezier(0.4, 0, 0.2, 0.1);
    }

    :host(:not([reordering])) [part~='row'][selected] > [part~='body-cell']::before {
      opacity: var(--_material-grid-row-selected-overlay-opacity, 0.08);
    }

    [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      /* NOTE(platosha): Raise cell content above background cell pseudo elements */
      position: relative;
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: var(--material-secondary-background-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--material-background-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: var(--material-background-color);
    }

    /* Frozen columns */

    [part~='cell'][last-frozen] {
      border-right: 1px solid var(--material-divider-color);
    }

    [part~='cell'][first-frozen-to-end] {
      border-left: 1px solid var(--material-divider-color);
    }

    /* Column resizing */

    [part~='cell']:not([last-frozen]) [part='resize-handle'] {
      border-right: 1px solid var(--material-divider-color);
    }

    /* Keyboard navigation */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus {
      box-shadow: inset 0 0 0 2px var(--material-primary-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 2px var(--material-primary-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: 3px;
      pointer-events: none;
      background: var(--material-primary-color);
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='row'][last][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] {
      z-index: 100 !important;
      opacity: 0.9;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: 4px;
      color: var(--material-primary-contrast-color);
      background-color: var(--material-error-color);
      min-width: 24px;
      border-radius: 2px;
      font-size: var(--material-caption-font-size);
      text-align: center;
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='cell'][last-frozen] {
      border-right: none;
      border-left: 1px solid var(--material-divider-color);
    }

    :host([dir='rtl']) [part~='cell'][first-frozen-to-end] {
      border-left: none;
      border-right: 1px solid var(--material-divider-color);
    }

    :host([dir='rtl']) [part~='cell']:not([last-frozen]) [part='resize-handle'] {
      border-right: none;
      border-left: 1px solid var(--material-divider-color);
    }

    :host([dir='rtl']) #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      left: auto;
      right: var(--_grid-drag-start-x);
    }
  `,{moduleId:"material-grid"});var o=r(428),s=r(913),n=r(139),a=r(676);function l(t){window.Vaadin&&window.Vaadin.templateRendererCallback?window.Vaadin.templateRendererCallback(t):t.querySelector("template")&&console.warn(`WARNING: <template> inside <${t.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}const d=t=>class extends t{static get properties(){return{resizable:{type:Boolean,value(){if("vaadin-grid-column-group"===this.localName)return;const t=this.parentNode;return t&&"vaadin-grid-column-group"===t.localName&&t.resizable||!1}},frozen:{type:Boolean,value:!1},frozenToEnd:{type:Boolean,value:!1},hidden:{type:Boolean,value:!1},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_firstFrozenToEnd:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:Function,_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)"},footerRenderer:Function,_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)"},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _cells.*, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),requestAnimationFrame((()=>{this._grid&&this._allCells.forEach((t=>{t._content.parentNode||this._grid.appendChild(t._content)}))}))}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame((()=>{this._grid||this._allCells.forEach((t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)}))})),this._gridValue=void 0}ready(){super.ready(),l(this)}_findHostGrid(){let t=this;for(;t&&!/^vaadin.*grid(-pro)?$/.test(t.localName);)t=t.assignedSlot?t.assignedSlot.parentNode:t.parentNode;return t||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter((t=>t))}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach((e=>{e.style.flexGrow=t}))}_orderChanged(t){this._allCells.forEach((e=>{e.style.order=t}))}_widthChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach((e=>{e.style.width=t}))}_frozenChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",t),this._allCells.forEach((e=>e.toggleAttribute("frozen",t))),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",t),this._allCells.forEach((e=>{this._grid&&e.parentElement===this._grid.$.sizer||e.toggleAttribute("frozen-to-end",t)})),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(t){this._allCells.forEach((e=>e.toggleAttribute("last-frozen",t))),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=t)}_firstFrozenToEndChanged(t){this._allCells.forEach((e=>{this._grid&&e.parentElement===this._grid.$.sizer||e.toggleAttribute("first-frozen-to-end",t)})),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=t)}_generateHeader(t){return t.substr(t.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,(t=>t.toUpperCase()))}_reorderStatusChanged(t){this._allCells.forEach((e=>e.setAttribute("reorder-status",t)))}_resizableChanged(t,e){void 0!==t&&void 0!==e&&e&&[e].concat(this._emptyCells).forEach((e=>{if(e){const r=e.querySelector('[part~="resize-handle"]');if(r&&e.removeChild(r),t){const t=document.createElement("div");t.setAttribute("part","resize-handle"),e.appendChild(t)}}}))}_textAlignChanged(t){if(void 0===t)return;if(-1===["start","end","center"].indexOf(t))return void console.warn('textAlign can only be set as "start", "end" or "center"');let e;"ltr"===getComputedStyle(this._grid).direction?"start"===t?e="left":"end"===t&&(e="right"):"start"===t?e="right":"end"===t&&(e="left"),this._allCells.forEach((r=>{r._content.style.textAlign=t,getComputedStyle(r._content).textAlign!==t&&(r._content.style.textAlign=e)}))}_hiddenChanged(t){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",t),!!t!=!!this._previousHidden&&this._grid&&(!0===t&&this._allCells.forEach((t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)})),this._grid._debouncerHiddenChanged=n.dx.debounce(this._grid._debouncerHiddenChanged,s.rs,(()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)})),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=t}_runRenderer(t,e,r){const i=[e._content,this];r&&r.item&&i.push(r),t.apply(this,i)}__renderCellsContent(t,e){!this.hidden&&this._grid&&e.forEach((e=>{if(!e.parentElement)return;const r=this._grid.__getRowModel(e.parentElement);t&&(e._renderer!==t&&this._clearCellContent(e),e._renderer=t,(r.item||t===this._headerRenderer||t===this._footerRenderer)&&this._runRenderer(t,e,r))}))}_clearCellContent(t){t._content.innerHTML="",delete t._content._$litPart$}_renderHeaderCellContent(t,e){e&&t&&(this.__renderCellsContent(t,[e]),this._grid&&this._grid.__debounceUpdateHeaderFooterRowVisibility(e.parentElement))}_onHeaderRendererOrBindingChanged(t,e,...r){this._renderHeaderCellContent(t,e)}_renderBodyCellsContent(t,e){e&&t&&this.__renderCellsContent(t,e)}_onRendererOrBindingChanged(t,e,...r){this._renderBodyCellsContent(t,e)}_renderFooterCellContent(t,e){e&&t&&(this.__renderCellsContent(t,[e]),this._grid&&this._grid.__debounceUpdateHeaderFooterRowVisibility(e.parentElement))}_onFooterRendererOrBindingChanged(t,e){this._renderFooterCellContent(t,e)}__setTextContent(t,e){t.textContent!==e&&(t.textContent=e)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(t,e,{item:r}){this.path&&this.__setTextContent(t,this.get(this.path,r))}_defaultFooterRenderer(){}_computeHeaderRenderer(t,e){return t||(null!=e?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(t){return t||this._defaultRenderer}_computeFooterRenderer(t){return t||this._defaultFooterRenderer}};class h extends(d((0,a.U)(o.H3))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)"},path:{type:String},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:Array}}}customElements.define(h.is,h),(0,i.hC)("vaadin-grid",i.iv`
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host([all-rows-visible]) #items {
      min-height: 1px;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~='row'] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~='row'] {
      position: absolute;
    }

    #items [part~='row']:empty {
      height: 100%;
    }

    [part~='cell']:not([part~='details-cell']) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~='cell'] > [tabindex] {
      display: flex;
      align-items: inherit;
      outline: none;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    [part~='details-cell'] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen],
    [frozen-to-end] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~='resize-handle'],
    #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~='reorder-ghost'] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Resizing styles */
    [part~='resize-handle'] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~='resize-handle']::before {
      position: absolute;
      content: '';
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~='resize-handle']::before,
    [last-frozen] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    [frozen-to-end] [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    [frozen-to-end] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    [first-frozen-to-end] [part~='resize-handle']::before {
      width: 18px;
      transform: none;
    }

    [first-frozen-to-end] {
      margin-inline-start: auto;
    }

    /* Hide resize handle if scrolled to end */
    :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
      display: none;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~='details-cell'] {
      display: none !important;
    }

    #sizer [part~='cell'][hidden] {
      display: none !important;
    }

    #sizer [part~='cell'] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~='cell']::before {
      content: '-';
    }

    #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir='rtl']) #items,
    :host([dir='rtl']) #header,
    :host([dir='rtl']) #footer {
      left: auto;
    }

    :host([dir='rtl']) [part~='reorder-ghost'] {
      left: auto;
      right: 0;
    }

    :host([dir='rtl']) [part~='resize-handle'] {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [part~='resize-handle']::before {
      transform: translateX(50%);
    }

    :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
    :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
      left: 0;
      right: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
      right: 0;
      left: auto;
    }

    :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
      right: 0;
      left: auto;
    }
  `,{moduleId:"vaadin-grid-styles"}),r(894);let c=!1,u=[],p=[];function _(){c=!0,requestAnimationFrame((function(){c=!1,function(t){for(;t.length;)m(t.shift())}(u),setTimeout((function(){!function(t){for(let e=0,r=t.length;e<r;e++)m(t.shift())}(p)}))}))}function m(t){const e=t[0],r=t[1],i=t[2];try{r.apply(e,i)}catch(t){setTimeout((()=>{throw t}))}}const f=t=>t.test(navigator.userAgent),g=t=>t.test(navigator.platform),v=f(/Android/),b=f(/Chrome/)&&/Google Inc/.test(navigator.vendor),y=f(/Firefox/),w=g(/^iPad/)||g(/^Mac/)&&navigator.maxTouchPoints>1,C=g(/^iPhone/)||w,x=f(/^((?!chrome|android).)*safari/i),A=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}})();var E=r(155),S=r(402),P=r(62),T=r(463);const I=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),O=I&&I[1]>=8,k={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const t=this._virtualCount;return Math.max(0,t-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(t){t=this._clamp(t,0,this._maxVirtualStart),this._virtualStartVal=t},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(t){(t%=this._physicalCount)<0&&(t=this._physicalCount+t),this._physicalStartVal=t},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(t){this._physicalCountVal=t},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let t=this._firstVisibleIndexVal;if(null==t){let e=this._physicalTop+this._scrollOffset;t=this._iterateItems(((t,r)=>{if(e+=this._getPhysicalSizeIncrement(t),e>this._scrollPosition)return r}))||0,this._firstVisibleIndexVal=t}return t},get lastVisibleIndex(){let t=this._lastVisibleIndexVal;if(null==t){let e=this._physicalTop+this._scrollOffset;this._iterateItems(((r,i)=>{e<this._scrollBottom&&(t=i),e+=this._getPhysicalSizeIncrement(r)})),this._lastVisibleIndexVal=t}return t},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const t=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let e=t-this._scrollPosition;const r=e>=0;if(this._scrollPosition=t,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(e)>this._physicalSize&&this._physicalSize>0){e-=this._scrollOffset;const t=Math.round(e/this._physicalAverage);this._virtualStart+=t,this._physicalStart+=t,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const t=this._getReusables(r);r?(this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length):(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length),this._update(t.indexes,r?null:t.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),s.YA)}},_getReusables(t){let e,r,i;const o=[],s=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const h=this._physicalBottom+this._scrollOffset,c=this._scrollPosition,u=this._scrollBottom;for(t?(e=this._physicalStart,r=c-d):(e=this._physicalEnd,r=h-u);i=this._getPhysicalSizeIncrement(e),r-=i,!(o.length>=l||r<=s);)if(t){if(a+o.length+1>=this._virtualCount)break;if(d+i>=c-this._scrollOffset)break;o.push(e),d+=i,e=(e+1)%l}else{if(n-o.length<=0)break;if(d+this._physicalSize-i<=u)break;o.push(e),d-=i,e=0===e?l-1:e-1}return{indexes:o,physicalTop:d-this._scrollOffset}},_update(t,e){if(!(t&&0===t.length||0===this._physicalCount)){if(this._assignModels(t),this._updateMetrics(t),e)for(;e.length;){const t=e.pop();this._physicalTop-=this._getPhysicalSizeIncrement(t)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return 0!==this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(t){const e=this._clamp(this._physicalCount+t,3,this._virtualCount-this._virtualStart)-this._physicalCount;let r=Math.round(.5*this._physicalCount);if(!(e<0)){if(e>0){const t=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let t=0;t<e;t++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-t)/e,r=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===r||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),s.t$):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),s.YA))}},_render(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){const t=this._getReusables(!0);this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length,this._update(t.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged(t){"items"===t.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,s.rs))},_iterateItems(t,e){let r,i,o,s;if(2===arguments.length&&e){for(s=0;s<e.length;s++)if(r=e[s],i=this._computeVidx(r),null!=(o=t.call(this,r,i)))return o}else{for(r=this._physicalStart,i=this._virtualStart;r<this._physicalCount;r++,i++)if(null!=(o=t.call(this,r,i)))return o;for(r=0;r<this._physicalStart;r++,i++)if(null!=(o=t.call(this,r,i)))return o}},_computeVidx(t){return t>=this._physicalStart?this._virtualStart+(t-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+t},_updateMetrics(t){(0,n.yl)();let e=0,r=0;const i=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems(((t,i)=>{r+=this._physicalSizes[t],this._physicalSizes[t]=this._physicalItems[t].offsetHeight,e+=this._physicalSizes[t],this._physicalAverageCount+=this._physicalSizes[t]?1:0}),t),this._physicalSize=this._physicalSize+e-r,this._physicalAverageCount!==i&&(this._physicalAverage=Math.round((o*i+e)/this._physicalAverageCount))},_positionItems(){this._adjustScrollPosition();let t=this._physicalTop;this._iterateItems((e=>{this.translate3d(0,`${t}px`,0,this._physicalItems[e]),t+=this._physicalSizes[e]}))},_getPhysicalSizeIncrement(t){return this._physicalSizes[t]},_adjustScrollPosition(){const t=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==t){this._physicalTop-=t;const e=this._scrollPosition;!O&&e>0&&this._resetScrollPosition(e-t)}},_resetScrollPosition(t){this.scrollTarget&&t>=0&&(this._scrollTop=t,this._scrollPosition=this._scrollTop)},_updateScrollerSize(t){this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((t=(t=t||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${this._estScrollHeight}px`,this._scrollHeight=this._estScrollHeight)},scrollToIndex(t){if("number"!=typeof t||t<0||t>this.items.length-1)return;if((0,n.yl)(),0===this._physicalCount)return;t=this._clamp(t,0,this._virtualCount-1),(!this._isIndexRendered(t)||t>=this._maxVirtualStart)&&(this._virtualStart=t-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let e=this._physicalStart,r=this._virtualStart,i=0;const o=this._hiddenContentSize;for(;r<t&&i<=o;)i+=this._getPhysicalSizeIncrement(e),e=(e+1)%this._physicalCount,r+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",(()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),s.rs)},_isIndexRendered(t){return t>=this._virtualStart&&t<=this._virtualEnd},_getPhysicalIndex(t){return(this._physicalStart+(t-this._virtualStart))%this._physicalCount},_clamp:(t,e,r)=>Math.min(r,Math.max(e,t)),_debounce(t,e,r){this._debouncers=this._debouncers||{},this._debouncers[t]=n.dx.debounce(this._debouncers[t],r,e.bind(this)),(0,n.Ex)(this._debouncers[t])}},z=1e3;class R{constructor({createElements:t,updateElement:e,scrollTarget:r,scrollContainer:i,elementsContainer:o,reorderElements:s}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=r,this.scrollContainer=i,this.elementsContainer=o||i,this.reorderElements=s,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500},this.__resizeObserver=new ResizeObserver((()=>this._resizeHandler())),"visible"===getComputedStyle(this.scrollTarget).overflow&&(this.scrollTarget.style.overflow="auto"),"static"===getComputedStyle(this.scrollContainer).position&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",(()=>this._scrollHandler())),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",(t=>this.__onWheel(t))),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",(()=>{this.__mouseDown=!0})),this.scrollTarget.addEventListener("mouseup",(()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()})))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}scrollToIndex(t){if("number"!=typeof t||isNaN(t)||0===this.size||!this.scrollTarget.offsetHeight)return;t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let r=Math.floor(t/this.size*this._virtualCount);this._virtualCount-r<e?(r=this._virtualCount-(this.size-t),this._vidxOffset=this.size-this._virtualCount):r<e?t<z?(r=t,this._vidxOffset=0):(r=z,this._vidxOffset=t-r):this._vidxOffset=t-r,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(r),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler()}flush(){0!==this.scrollTarget.offsetHeight&&(this._resizeHandler(),(0,n.yl)(),this._scrollHandler(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(t=0,e=this.size-1){this.__getVisibleElements().forEach((r=>{r.__virtualIndex>=t&&r.__virtualIndex<=e&&this.__updateElement(r,r.__virtualIndex,!0)}))}__updateElement(t,e,r){t.style.paddingTop&&(t.style.paddingTop=""),this.__preventElementUpdates||t.__lastUpdatedIndex===e&&!r||(this.updateElement(t,e),t.__lastUpdatedIndex=e);const i=t.offsetHeight;if(0===i)t.style.paddingTop=`${this.__placeholderHeight}px`,requestAnimationFrame((()=>this._resizeHandler()));else{this.__elementHeightQueue.push(i),this.__elementHeightQueue.shift();const t=this.__elementHeightQueue.filter((t=>void 0!==t));this.__placeholderHeight=Math.round(t.reduce(((t,e)=>t+e),0)/t.length)}}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find((e=>e.__virtualIndex===t));return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;let e,r;if(this.__preventElementUpdates=!0,t>0&&(e=this.adjustedFirstVisibleIndex,r=this.__getIndexScrollOffset(e)),this.__size=t,(0,n.yl)(),this._itemsChanged({path:"items"}),(0,n.yl)(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const i=this.__getIndexScrollOffset(e);void 0!==r&&void 0!==i&&(this._scrollTop+=r-i)}this.elementsContainer.children.length||requestAnimationFrame((()=>this._resizeHandler())),this.__preventElementUpdates=!1,this._resizeHandler(),(0,n.yl)()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,1e5)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=Boolean("rtl"===t.direction),this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),r=document.createDocumentFragment();return e.forEach((t=>{t.style.position="absolute",r.appendChild(t),this.__resizeObserver.observe(t)})),this.elementsContainer.appendChild(r),e}_assignModels(t){this._iterateItems(((t,e)=>{const r=this._physicalItems[t];r.hidden=e>=this.size,r.hidden?delete r.__lastUpdatedIndex:(r.__virtualIndex=e+(this._vidxOffset||0),this.__updateElement(r,r.__virtualIndex))}),t)}_isClientFull(){return setTimeout((()=>{this.__clientFull=!0})),this.__clientFull||super._isClientFull()}translate3d(t,e,r,i){i.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),0!==this._physicalCount){const e=t>=0,r=this._getReusables(!e);r.indexes.length&&(this._physicalTop=r.physicalTop,e?(this._virtualStart-=r.indexes.length,this._physicalStart-=r.indexes.length):(this._virtualStart+=r.indexes.length,this._physicalStart+=r.indexes.length),this._resizeHandler())}this.reorderElements&&(this.__scrollReorderDebouncer=n.dx.debounce(this.__scrollReorderDebouncer,s.Wc.after(this.timeouts.SCROLL_REORDER),(()=>this.__reorderElements()))),this.__previousScrollTop=this._scrollTop,0===this._scrollTop&&0!==this.firstVisibleIndex&&(this._scrollTop=1)}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc=this._deltaYAcc||0,this._wheelAnimationFrame)return this._deltaYAcc+=e,void t.preventDefault();e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=n.dx.debounce(this.__debouncerWheelAnimationFrame,s.rs,(()=>{this._wheelAnimationFrame=!1}));const r=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=n.dx.debounce(this._debouncerIgnoreNewWheel,s.Wc.after(this.timeouts.IGNORE_WHEEL),(()=>{this._ignoreNewWheel=!1}))):this._hasResidualMomentum&&r<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():r>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=r}_hasScrolledAncestor(t,e,r){return t!==this.scrollTarget&&t!==this.scrollTarget.getRootNode().host&&(!(!this._canScroll(t,e,r)||-1===["auto","scroll"].indexOf(getComputedStyle(t).overflow))||(t!==this&&t.parentElement?this._hasScrolledAncestor(t.parentElement,e,r):void 0))}_canScroll(t,e,r){return r>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||r<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter((t=>!t.hidden))}__reorderElements(){if(this.__mouseDown)return void(this.__pendingReorder=!0);this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),r=e.find((t=>t.contains(this.elementsContainer.getRootNode().activeElement)||t.contains(this.scrollTarget.getRootNode().activeElement)))||e[0];if(!r)return;const i=r.__virtualIndex-t,o=e.indexOf(r)-i;if(o>0)for(let t=0;t<o;t++)this.elementsContainer.appendChild(e[t]);else if(o<0)for(let t=e.length+o;t<e.length;t++)this.elementsContainer.insertBefore(e[t],e[0]);if(x){const{transform:t}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout((()=>{this.scrollTarget.style.transform=t}))}}_adjustVirtualIndexOffset(t){if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.offsetHeight),e=t*this.size;this._vidxOffset=Math.round(e-t*this._virtualCount)}else{const t=this._vidxOffset,e=z,r=100;0===this._scrollTop?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<e&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset)));const i=this.size-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=i,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-e&&this._vidxOffset<i&&(this._vidxOffset+=Math.min(i-this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(R.prototype,k);class N{constructor(t){this.__adapter=new R(t)}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}}const $=t=>class extends t{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(t){return t.filter((t=>t.some((t=>t.headerRenderer||t.path||t.header)))).length}_a11yGetFooterRowCount(t){return t.filter((t=>t.some((t=>t.headerRenderer)))).length}_a11yUpdateGridSize(t,e){if(void 0===t||void 0===e)return;const r=e[e.length-1];this.$.table.setAttribute("aria-rowcount",t+this._a11yGetHeaderRowCount(e)+this._a11yGetFooterRowCount(e)),this.$.table.setAttribute("aria-colcount",r&&r.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach(((t,e)=>t.setAttribute("aria-rowindex",e+1)))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach(((t,e)=>t.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+e+1)))}_a11yUpdateRowRowindex(t,e){t.setAttribute("aria-rowindex",e+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(t,e){t.setAttribute("aria-selected",Boolean(e)),Array.from(t.children).forEach((t=>t.setAttribute("aria-selected",Boolean(e))))}_a11yUpdateRowExpanded(t){this.__isRowExpandable(t)?t.setAttribute("aria-expanded","false"):this.__isRowCollapsible(t)?t.setAttribute("aria-expanded","true"):t.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(t,e){e>0||this.__isRowCollapsible(t)||this.__isRowExpandable(t)?t.setAttribute("aria-level",e+1):t.removeAttribute("aria-level")}_a11ySetRowDetailsCell(t,e){Array.from(t.children).forEach((t=>{t!==e&&t.setAttribute("aria-controls",e.id)}))}_a11yUpdateCellColspan(t,e){t.setAttribute("aria-colspan",Number(e))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach((t=>{let e=t.parentNode;for(;e&&"vaadin-grid-cell-content"!==e.localName;)e=e.parentNode;e&&e.assignedSlot&&e.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(t.direction)]||"none")}))}},L=t=>class extends t{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(t){const e=t.detail.model,r=e?e.item:null;r&&(this.activeItem=this._itemsEqual(this.activeItem,r)?null:r)}_onClick(t){if(t.defaultPrevented)return;const e=t.composedPath(),r=e[e.indexOf(this.$.table)-3];if(!r||r.getAttribute("part").indexOf("details-cell")>-1)return;const i=r._content,o=this.getRootNode().activeElement;i.contains(o)||this._isFocusable(t.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(r.parentElement)}}))}_isFocusable(t){return F(t)}},F=t=>{if(!t.parentNode)return!1;const e=Array.from(t.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter((t=>"cell body-cell"!==t.getAttribute("part"))).includes(t);return!t.disabled&&e};function D(t,e){return t.split(".").reduce(((t,e)=>t[e]),e)}function H(t,e,r){if(0===r.length)return!1;let i=!0;return t.forEach((({path:t})=>{t&&-1!==t.indexOf(".")&&void 0===D(t.replace(/\.[^.]*$/,""),r[0])&&(console.warn(`Path "${t}" used for ${e} does not exist in all of the items, ${e} is disabled.`),i=!1)})),i}function M(t){return[void 0,null].indexOf(t)>=0?"":isNaN(t)?t.toString():t}function B(t,e){return(t=M(t))<(e=M(e))?-1:t>e?1:0}const V=t=>class extends t{static get properties(){return{items:Array}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*, _filters, _sorters)"]}__setArrayDataProvider(t){const e=(r=this.items,(t,e)=>{let i=r?[...r]:[];t.filters&&H(t.filters,"filtering",i)&&(i=function(t,e){return t.filter((t=>e.every((e=>{const r=M(D(e.path,t)),i=M(e.value).toString().toLowerCase();return r.toString().toLowerCase().includes(i)}))))}(i,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&H(t.sortOrders,"sorting",i)&&(i=function(t,e){return t.sort(((t,r)=>e.map((e=>"asc"===e.direction?B(D(e.path,t),D(e.path,r)):"desc"===e.direction?B(D(e.path,r),D(e.path,t)):0)).reduce(((t,e)=>0!==t?t:e),0)))}(i,t.sortOrders));const o=Math.min(i.length,t.pageSize),s=t.page*o,n=s+o;e(i.slice(s,n),i.length)});var r;e.__items=t,this.setProperties({_arrayDataProvider:e,size:t.length,dataProvider:e})}__dataProviderOrItemsChanged(t,e,r){r&&(this._arrayDataProvider?t!==this._arrayDataProvider?this.setProperties({_arrayDataProvider:void 0,items:void 0}):e?this._arrayDataProvider.__items===e?(this.clearCache(),this.size=this._effectiveSize):this.__setArrayDataProvider(e):(this.setProperties({_arrayDataProvider:void 0,dataProvider:void 0,size:0}),this.clearCache()):e&&this.__setArrayDataProvider(e))}};var j=r(109);const U=t=>class extends t{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),(0,j.NH)(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(t){this.hasAttribute("reordering")&&t.preventDefault()}_onTouchStart(t){this._startTouchReorderTimeout=setTimeout((()=>{this._onTrackStart({detail:{x:t.touches[0].clientX,y:t.touches[0].clientY}})}),100)}_onTouchMove(t){this._draggedColumn&&t.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(t){if("start"===t.detail.state){const e=t.composedPath(),r=e[e.indexOf(this.$.header)-2];if(!r||!r._content)return;if(r._content.contains(this.getRootNode().activeElement))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(t)}else"track"===t.detail.state?this._onTrack(t):"end"===t.detail.state&&this._onTrackEnd(t)}_onTrackStart(t){if(!this.columnReorderingAllowed)return;const e=t.composedPath&&t.composedPath();if(e&&e.some((t=>t.hasAttribute&&t.hasAttribute("draggable"))))return;const r=this._cellFromPoint(t.detail.x,t.detail.y);if(r&&r.getAttribute("part").includes("header-cell")){for(this.toggleAttribute("reordering",!0),this._draggedColumn=r._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(r),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(t.detail.x,this._touchDevice?t.detail.y-50:t.detail.y),this._autoScroller()}}_onTrack(t){if(!this._draggedColumn)return;const e=this._cellFromPoint(t.detail.x,t.detail.y);if(!e)return;const r=this._getTargetColumn(e,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,r)&&this._isSwappableByPosition(r,t.detail.x)){const t=this._columnTree.findIndex((t=>t.includes(r))),e=this._getColumnsInOrder(t),i=e.indexOf(this._draggedColumn),o=e.indexOf(r),s=i<o?1:-1;for(let t=i;t!==o;t+=s)this._swapColumnOrders(this._draggedColumn,e[t+s])}this._updateGhostPosition(t.detail.x,this._touchDevice?t.detail.y-50:t.detail.y),this._lastDragClientX=t.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(t=this._columnTree.length-1){return this._columnTree[t].filter((t=>!t.hidden)).sort(((t,e)=>t._order-e._order))}_cellFromPoint(t,e){t=t||0,e=e||0,this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const r=this.shadowRoot.elementFromPoint(t,e);if(this.$.scroller.toggleAttribute("no-content-pointer-events",!1),r&&r._column)return r}_updateGhostPosition(t,e){const r=this._reorderGhost.getBoundingClientRect(),i=t-r.width/2,o=e-r.height/2,s=parseInt(this._reorderGhost._left||0),n=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=s-(r.left-i),this._reorderGhost._top=n-(r.top-o),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(t){const e=this._reorderGhost;e.textContent=t._content.innerText;const r=window.getComputedStyle(t);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach((t=>{e.style[t]=r[t]})),e}_updateOrders(t){void 0!==t&&(t[0].forEach((t=>{t._order=0})),function(t,e,r){let i=1;t.forEach((t=>{i%10==0&&(i+=1),t._order=0+i*e,i+=1}))}(t[0],this._orderBaseScope))}_setSiblingsReorderStatus(t,e){Array.from(t.parentNode.children).filter((e=>/column/.test(e.localName)&&this._isSwapAllowed(e,t))).forEach((t=>{t._reorderStatus=e}))}_autoScroller(){if(this._lastDragClientX){const t=this._lastDragClientX-this.getBoundingClientRect().right+50,e=this.getBoundingClientRect().left-this._lastDragClientX+50;t>0?this.$.table.scrollLeft+=t/10:e>0&&(this.$.table.scrollLeft-=e/10)}this._draggedColumn&&setTimeout((()=>this._autoScroller()),10)}_isSwapAllowed(t,e){if(t&&e){const r=t!==e,i=t.parentElement===e.parentElement,o=t.frozen&&e.frozen||t.frozenToEnd&&e.frozenToEnd||!t.frozen&&!t.frozenToEnd&&!e.frozen&&!e.frozenToEnd;return r&&i&&o}}_isSwappableByPosition(t,e){const r=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find((e=>t.contains(e._column))),i=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),o=r.getBoundingClientRect();return o.left>i.left?e>o.right-i.width:e<o.left+i.width}_swapColumnOrders(t,e){[t._order,e._order]=[e._order,t._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(t,e){if(t&&e){let r=t._column;for(;r.parentElement!==e.parentElement&&r!==this;)r=r.parentElement;return r.parentElement===e.parentElement?r:t._column}}},q=t=>class extends t{ready(){super.ready();const t=this.$.scroller;(0,j.NH)(t,"track",this._onHeaderTrack.bind(this)),t.addEventListener("touchmove",(e=>t.hasAttribute("column-resizing")&&e.preventDefault())),t.addEventListener("contextmenu",(t=>"resize-handle"===t.target.getAttribute("part")&&t.preventDefault())),t.addEventListener("mousedown",(t=>"resize-handle"===t.target.getAttribute("part")&&t.preventDefault()))}_onHeaderTrack(t){const e=t.target;if("resize-handle"===e.getAttribute("part")){let r=e.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);"vaadin-grid-column-group"===r.localName;)r=r._childColumns.slice(0).sort(((t,e)=>t._order-e._order)).filter((t=>!t.hidden)).pop();const i=t.detail.x,o=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),s=o.find((t=>t._column===r));if(s.offsetWidth){const t=getComputedStyle(s._content),e=10+parseInt(t.paddingLeft)+parseInt(t.paddingRight)+parseInt(t.borderLeftWidth)+parseInt(t.borderRightWidth)+parseInt(t.marginLeft)+parseInt(t.marginRight);let o;const n=s.offsetWidth,a=s.getBoundingClientRect();o=s.hasAttribute("frozen-to-end")?n+(this.__isRTL?i-a.right:a.left-i):n+(this.__isRTL?a.left-i:i-a.right),r.width=`${Math.max(e,o)}px`,r.flexGrow=0}o.sort(((t,e)=>t._column._order-e._column._order)).forEach(((t,e,r)=>{e<r.indexOf(s)&&(t._column.width=`${t.offsetWidth}px`,t._column.flexGrow=0)}));const n=this._frozenToEndCells[0];if(n&&this.$.table.scrollWidth>this.$.table.offsetWidth){const t=n.getBoundingClientRect(),e=i-(this.__isRTL?t.right:t.left);(this.__isRTL&&e<=0||!this.__isRTL&&e>=0)&&(this.$.table.scrollLeft+=e)}"end"===t.detail.state&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:r}}))),this._resizeHandler()}}},W=class t{constructor(t,e,r){this.grid=t,this.parentCache=e,this.parentItem=r,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter((t=>this.itemCaches[t].isLoading()))[0])}getItemForIndex(t){const{cache:e,scaledIndex:r}=this.getCacheAndIndex(t);return e.items[r]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce(((t,e)=>{const r=this.itemCaches[e];return r.updateSize(),t+r.effectiveSize}),0):0}ensureSubCacheForScaledIndex(e){if(!this.itemCaches[e]){const r=new t(this.grid,this,this.items[e]);this.itemCaches[e]=r,this.grid._loadPage(0,r)}}getCacheAndIndex(t){let e=t;const r=Object.keys(this.itemCaches);for(let t=0;t<r.length;t++){const i=Number(r[t]),o=this.itemCaches[i];if(e<=i)return{cache:this,scaledIndex:e};if(e<=i+o.effectiveSize)return o.getCacheAndIndex(e-i-1);e-=o.effectiveSize}return{cache:this,scaledIndex:e}}},G=t=>class extends t{static get properties(){return{size:{type:Number,notify:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value(){return new W(this)}},_hasData:{type:Boolean,value:!1},itemHasChildrenPath:{type:String,value:"children"},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems.*)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(t){const e=t-this._cache.size;this._cache.size+=e,this._cache.effectiveSize+=e,this._effectiveSize=this._cache.effectiveSize}_getItem(t,e){if(t>=this._effectiveSize)return;e.index=t;const{cache:r,scaledIndex:i}=this._cache.getCacheAndIndex(t),o=r.items[i];o?(e.toggleAttribute("loading",!1),this._updateItem(e,o),this._isExpanded(o)&&r.ensureSubCacheForScaledIndex(i)):(e.toggleAttribute("loading",!0),this._loadPage(this._getPageForIndex(i),r))}getItemId(t){return this.itemIdPath?this.get(this.itemIdPath,t):t}_isExpanded(t){return this.__expandedKeys.has(this.getItemId(t))}_expandedItemsChanged(){this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this.__updateVisibleRows()}__computeExpandedKeys(t,e){const r=e.base||[],i=new Set;return r.forEach((t=>{i.add(this.getItemId(t))})),i}expandItem(t){this._isExpanded(t)||(this.expandedItems=[...this.expandedItems,t])}collapseItem(t){this._isExpanded(t)&&(this.expandedItems=this.expandedItems.filter((e=>!this._itemsEqual(e,t))))}_getIndexLevel(t){let{cache:e}=this._cache.getCacheAndIndex(t),r=0;for(;e.parentCache;)e=e.parentCache,r+=1;return r}_loadPage(t,e){if(!e.pendingRequests[t]&&this.dataProvider){this._setLoading(!0),e.pendingRequests[t]=!0;const r={page:t,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:e.parentItem};this.dataProvider(r,((i,o)=>{void 0!==o?e.size=o:r.parentItem&&(e.size=i.length);const a=Array.from(this.$.items.children).map((t=>t._item));i.forEach(((r,i)=>{const o=t*this.pageSize+i;e.items[o]=r,this._isExpanded(r)&&a.indexOf(r)>-1&&e.ensureSubCacheForScaledIndex(o)})),this._hasData=!0,delete e.pendingRequests[t],this._debouncerApplyCachedData=n.dx.debounce(this._debouncerApplyCachedData,s.Wc.after(0),(()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter((t=>!t.hidden)).forEach((t=>{this._cache.getItemForIndex(t.index)&&this._getItem(t.index,t)})),this.__scrollToPendingIndex()})),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__itemsReceived()}))}}_getPageForIndex(t){return Math.floor(t/this.pageSize)}clearCache(){this._cache=new W(this),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this.__updateVisibleRows(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(t,e){void 0!==e&&t!==e&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(t,e){void 0!==e&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=n.dx.debounce(this._debouncerCheckSize,s.Wc.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(t,e){return this.getItemId(t)===this.getItemId(e)}_getItemIndexInArray(t,e){let r=-1;return e.forEach(((e,i)=>{this._itemsEqual(e,t)&&(r=i)})),r}scrollToIndex(t){super.scrollToIndex(t),isNaN(t)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=t)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){const t=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this.scrollToIndex(t)}}},Y="between",K="on-top-or-between",J="above",X="below",Q="empty",Z=!("draggable"in document.createElement("div")),tt=t=>class extends t{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",(t=>{this.dropMode&&(t.preventDefault(),t.stopPropagation())}))}_onDragStart(t){if(this.rowsDraggable){let e=t.target;if("vaadin-grid-cell-content"===e.localName&&(e=e.assignedSlot.parentNode.parentNode),e.parentNode!==this.$.items)return;if(t.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const t=e.style.transform;e.style.top=/translateY\((.*)\)/.exec(t)[1],e.style.transform="none",requestAnimationFrame((()=>{e.style.top="",e.style.transform=t}))}const r=e.getBoundingClientRect();Z?t.dataTransfer.setDragImage(e):t.dataTransfer.setDragImage(e,t.clientX-r.left,t.clientY-r.top);let i=[e];this._isSelected(e._item)&&(i=this.__getViewportRows().filter((t=>this._isSelected(t._item))).filter((t=>!this.dragFilter||this.dragFilter(this.__getRowModel(t))))),t.dataTransfer.setData("text",this.__formatDefaultTransferData(i)),e.setAttribute("dragstart",i.length>1?i.length:""),this.style.setProperty("--_grid-drag-start-x",t.clientX-r.left+20+"px"),this.style.setProperty("--_grid-drag-start-y",t.clientY-r.top+10+"px"),requestAnimationFrame((()=>{e.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})}));const o=new CustomEvent("grid-dragstart",{detail:{draggedItems:i.map((t=>t._item)),setDragData:(e,r)=>t.dataTransfer.setData(e,r),setDraggedItemsCount:t=>e.setAttribute("dragstart",t)}});o.originalEvent=t,this.dispatchEvent(o)}}_onDragEnd(t){this.toggleAttribute("dragging-rows",!1),t.stopPropagation();const e=new CustomEvent("grid-dragend");e.originalEvent=t,this.dispatchEvent(e)}_onDragLeave(t){t.stopPropagation(),this._clearDragStyles()}_onDragOver(t){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(t.clientY))return void this._clearDragStyles();let e=t.composedPath().find((t=>"tr"===t.localName));if(this._effectiveSize&&"on-grid"!==this.dropMode)if(e&&e.parentNode===this.$.items){const r=e.getBoundingClientRect();if(this._dropLocation="on-top",this.dropMode===Y){const e=t.clientY-r.top<r.bottom-t.clientY;this._dropLocation=e?J:X}else this.dropMode===K&&(t.clientY-r.top<r.height/3?this._dropLocation=J:t.clientY-r.top>r.height/3*2&&(this._dropLocation=X))}else{if(e)return;if(this.dropMode!==Y&&this.dropMode!==K)return;e=Array.from(this.$.items.children).filter((t=>!t.hidden)).pop(),this._dropLocation=X}else this._dropLocation=Q;if(e&&e.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);t.stopPropagation(),t.preventDefault(),this._dropLocation===Q?this.toggleAttribute("dragover",!0):e?(this._dragOverItem=e._item,e.getAttribute("dragover")!==this._dropLocation&&e.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(t){if(this.__dndAutoScrolling)return!0;const e=this.$.header.getBoundingClientRect().bottom,r=this.$.footer.getBoundingClientRect().top,i=e-t+this.__dndAutoScrollThreshold,o=t-r+this.__dndAutoScrollThreshold;let s=0;if(o>0?s=2*o:i>0&&(s=2*-i),s){const t=this.$.table.scrollTop;if(this.$.table.scrollTop+=s,t!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout((()=>{this.__dndAutoScrolling=!1}),20),!0}}__getViewportRows(){const t=this.$.header.getBoundingClientRect().bottom,e=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter((r=>{const i=r.getBoundingClientRect();return i.bottom>t&&i.top<e}))}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach((t=>t.removeAttribute("dragover")))}_onDrop(t){if(this.dropMode){t.stopPropagation(),t.preventDefault();const e=t.dataTransfer.types&&Array.from(t.dataTransfer.types).map((e=>({type:e,data:t.dataTransfer.getData(e)})));this._clearDragStyles();const r=new CustomEvent("grid-drop",{bubbles:t.bubbles,cancelable:t.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:e}});r.originalEvent=t,this.dispatchEvent(r)}}__formatDefaultTransferData(t){return t.map((t=>Array.from(t.children).filter((t=>!t.hidden&&-1===t.getAttribute("part").indexOf("details-cell"))).sort(((t,e)=>t._column._order>e._column._order?1:-1)).map((t=>t._content.textContent.trim())).filter((t=>t)).join("\t"))).join("\n")}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter((t=>!t.hidden)).forEach((t=>{this._filterDragAndDrop(t,this.__getRowModel(t))}))}_filterDragAndDrop(t,e){const r=this.loading||t.hasAttribute("loading"),i=!this.rowsDraggable||r||this.dragFilter&&!this.dragFilter(e),o=!this.dropMode||r||this.dropFilter&&!this.dropFilter(e);Array.from(t.children).map((t=>t._content)).forEach((t=>{i?t.removeAttribute("draggable"):t.setAttribute("draggable",!0)})),t.toggleAttribute("drag-disabled",!!i),t.toggleAttribute("drop-disabled",!!o)}};var et=r(557);function rt(t,e){if(!t||!e||t.length!==e.length)return!1;for(let r=0,i=t.length;r<i;r++)if(t[r]instanceof Array&&e[r]instanceof Array){if(!rt(t[r],e[r]))return!1}else if(t[r]!==e[r])return!1;return!0}const it=t=>class extends t{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(t){for(let e=0;e<t.length;e++)if("vaadin-grid-column-group"===t[e].localName)return!0;return!1}_getChildColumns(t){return et.o.getFlattenedNodes(t).filter(this._isColumnElement)}_flattenColumnGroups(t){return t.map((t=>"vaadin-grid-column-group"===t.localName?this._getChildColumns(t):[t])).reduce(((t,e)=>t.concat(e)),[])}_getColumnTree(){const t=et.o.getFlattenedNodes(this).filter(this._isColumnElement),e=[t];let r=t;for(;this._hasColumnGroups(r);)r=this._flattenColumnGroups(r),e.push(r);return e}_updateColumnTree(){const t=this._getColumnTree();rt(t,this._columnTree)||(this._columnTree=t)}_addNodeObserver(){this._observer=new et.o(this,(t=>{const e=t=>t.filter(this._isColumnElement).length>0;if(e(t.addedNodes)||e(t.removedNodes)){const e=t.removedNodes.flatMap((t=>t._allCells)),r=t=>e.filter((e=>e._content.contains(t))).length;this.__removeSorters(this._sorters.filter(r)),this.__removeFilters(this._filters.filter(r)),this._updateColumnTree()}this._debouncerCheckImports=n.dx.debounce(this._debouncerCheckImports,s.Wc.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()}))}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach((t=>{const e=this.querySelector(t);!e||e instanceof o.H3||console.warn(`Make sure you have imported the required module for <${t}> element.`)}))}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach((t=>this._updateFirstAndLastColumnForRow(t)))}_updateFirstAndLastColumnForRow(t){Array.from(t.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort(((t,e)=>t._column._order-e._column._order)).forEach(((t,e,r)=>{t.toggleAttribute("first-column",0===e),t.toggleAttribute("last-column",e===r.length-1)}))}_isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(t.localName)}},ot=t=>class extends t{getEventContext(t){const e={},r=t.__composedPath||t.composedPath(),i=r[r.indexOf(this.$.table)-3];return i?(e.section=["body","header","footer","details"].find((t=>i.getAttribute("part").indexOf(t)>-1)),i._column&&(e.column=i._column),"body"!==e.section&&"details"!==e.section||Object.assign(e,this.__getRowModel(i.parentElement)),e):e}},st=t=>class extends t{static get properties(){return{_filters:{type:Array,value:()=>[]}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(t){t.stopPropagation(),this.__addFilter(t.target),this.__applyFilters()}__removeFilters(t){0!==t.length&&(this._filters=this._filters.filter((e=>t.indexOf(e)<0)),this.__applyFilters())}__addFilter(t){-1===this._filters.indexOf(t)&&this._filters.push(t)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map((t=>({path:t.path,value:t.value})))}};var nt=r(726),at=r(530);const lt=t=>class extends t{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged"},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",(()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0})),this.addEventListener("mouseup",(()=>{this._isMousedown=!1})))}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(t){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach((e=>{const r=this[e];if(t){const t=r&&r.parentElement;this.__isCell(r)?this[e]=t:this.__isCell(t)&&(this[e]=t.parentElement)}else if(!t&&this.__isRow(r)){const t=r.firstElementChild;this[e]=t._focusButton||t}}))}_focusableChanged(t,e){e&&e.setAttribute("tabindex","-1"),t&&this._updateGridSectionFocusTarget(t)}_focusedCellChanged(t,e){e&&(0,nt.x_)(e,"part","focused-cell"),t&&(0,nt.$2)(t,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const t=this.shadowRoot.activeElement===this._itemsFocusable;this._getVisibleRows().forEach((t=>{if(t.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=t;else{let e=this._itemsFocusable.parentElement,r=this._itemsFocusable;if(e){this.__isCell(e)&&(r=e,e=e.parentElement);const i=[...e.children].indexOf(r);this._itemsFocusable=this.__getFocusable(t,t.children[i])}}})),t&&this._itemsFocusable.focus()}_onKeyDown(t){const e=t.key;let r;switch(e){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":r="Navigation";break;case"Enter":case"Escape":case"F2":r="Interaction";break;case"Tab":r="Tab";break;case" ":r="Space"}this._detectInteracting(t),this.interacting&&"Interaction"!==r&&(r=void 0),r&&this[`_on${r}KeyDown`](t,e)}_ensureScrolledToIndex(t){[...this.$.items.children].find((e=>e.index===t))?this.__scrollIntoViewport(t):this.scrollToIndex(t)}__isRowExpandable(t){if(this.itemHasChildrenPath){const e=t._item;return e&&this.get(this.itemHasChildrenPath,e)&&!this._isExpanded(e)}}__isRowCollapsible(t){return this._isExpanded(t._item)}__isDetailsCell(t){return t.matches('[part~="details-cell"]')}__isCell(t){return t instanceof HTMLTableCellElement}__isRow(t){return t instanceof HTMLTableRowElement}__getIndexOfChildElement(t){return Array.prototype.indexOf.call(t.parentNode.children,t)}_onNavigationKeyDown(t,e){t.preventDefault();const r=this._lastVisibleIndex-this._firstVisibleIndex-1;let i=0,o=0;switch(e){case"ArrowRight":i=this.__isRTL?-1:1;break;case"ArrowLeft":i=this.__isRTL?1:-1;break;case"Home":this.__rowFocusMode||t.ctrlKey?o=-1/0:i=-1/0;break;case"End":this.__rowFocusMode||t.ctrlKey?o=1/0:i=1/0;break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":o=r;break;case"PageUp":o=-r}const s=t.composedPath().find((t=>this.__isRow(t))),n=t.composedPath().find((t=>this.__isCell(t)));if(this.__rowFocusMode&&!s||!this.__rowFocusMode&&!n)return;const a=this.__isRTL?"ArrowLeft":"ArrowRight",l=this.__isRTL?"ArrowRight":"ArrowLeft";if(e===a){if(this.__rowFocusMode)return this.__isRowExpandable(s)?void this.expandItem(s._item):(this.__rowFocusMode=!1,void this._onCellNavigation(s.firstElementChild,0,0))}else if(e===l)if(this.__rowFocusMode){if(this.__isRowCollapsible(s))return void this.collapseItem(s._item)}else if(n===[...s.children].sort(((t,e)=>t._order-e._order))[0]||this.__isDetailsCell(n))return this.__rowFocusMode=!0,void this._onRowNavigation(s,0);this.__rowFocusMode?this._onRowNavigation(s,o):this._onCellNavigation(n,i,o)}_onRowNavigation(t,e){const{dstRow:r}=this.__navigateRows(e,t);r&&r.focus()}__getIndexInGroup(t,e){return t.parentNode===this.$.items?void 0!==e?e:t.index:this.__getIndexOfChildElement(t)}__navigateRows(t,e,r){const i=this.__getIndexInGroup(e,this._focusedItemIndex),o=e.parentNode,s=(o===this.$.items?this._effectiveSize:o.children.length)-1;let n=Math.max(0,Math.min(i+t,s));if(o!==this.$.items){if(n>i)for(;n<s&&o.children[n].hidden;)n+=1;else if(n<i)for(;n>0&&o.children[n].hidden;)n-=1;return this.toggleAttribute("navigating",!0),{dstRow:o.children[n]}}let a=!1;if(r){const s=this.__isDetailsCell(r);if(o===this.$.items){const r=e._item,o=this._cache.getItemForIndex(n);a=s?0===t:1===t&&this._isDetailsOpened(r)||-1===t&&n!==i&&this._isDetailsOpened(o),a!==s&&(1===t&&a||-1===t&&!a)&&(n=i)}}return this._ensureScrolledToIndex(n),this._focusedItemIndex=n,this.toggleAttribute("navigating",!0),{dstRow:[...o.children].find((t=>!t.hidden&&t.index===n)),dstIsRowDetails:a}}_onCellNavigation(t,e,r){const i=t.parentNode,{dstRow:o,dstIsRowDetails:s}=this.__navigateRows(r,i,t);if(!o)return;const n=this.__getIndexOfChildElement(t),a=this.__isDetailsCell(t),l=i.parentNode,d=this.__getIndexInGroup(i,this._focusedItemIndex);if(void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=a?0:this._getColumns(l,d).filter((t=>!t.hidden))[n]._order),s)[...o.children].find((t=>this.__isDetailsCell(t))).focus();else{const t=this.__getIndexInGroup(o,this._focusedItemIndex),i=this._getColumns(l,t).filter((t=>!t.hidden)),s=i.map((t=>t._order)).sort(((t,e)=>t-e)),n=s.length-1,d=s.indexOf(s.slice(0).sort(((t,e)=>Math.abs(t-this._focusedColumnOrder)-Math.abs(e-this._focusedColumnOrder)))[0]),h=0===r&&a?d:Math.max(0,Math.min(d+e,n));h!==d&&(this._focusedColumnOrder=void 0);const c=i.reduce(((t,e,r)=>(t[e._order]=r,t)),{})[s[h]],u=o.children[c];this._scrollHorizontallyToCell(u),u.focus()}}_onInteractionKeyDown(t,e){const r=t.composedPath()[0],i="input"===r.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(r.type);let o;switch(e){case"Enter":o=!this.interacting||!i;break;case"Escape":o=!1;break;case"F2":o=!this.interacting}const{cell:s}=this._getGridEventLocation(t);if(this.interacting!==o&&null!==s)if(o){const e=s._content.querySelector("[focus-target]")||[...s._content.querySelectorAll("*")].find((t=>this._isFocusable(t)));e&&(t.preventDefault(),e.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else t.preventDefault(),this._focusedColumnOrder=void 0,s.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);"Escape"===e&&this._hideTooltip(!0)}_predictFocusStepTarget(t,e){const r=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let i=r.indexOf(t);for(i+=e;i>=0&&i<=r.length-1;){let t=r[i];if(t&&!this.__rowFocusMode&&(t=r[i].parentNode),t&&!t.hidden)break;i+=e}return r[i]}_onTabKeyDown(t){const e=this._predictFocusStepTarget(t.composedPath()[0],t.shiftKey?-1:1);if(e){if(t.stopPropagation(),e===this.$.table)this.$.table.focus();else if(e===this.$.focusexit)this.$.focusexit.focus();else if(e===this._itemsFocusable){let r=e;const i=this.__isRow(e)?e:e.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),i.index!==this._focusedItemIndex&&this.__isCell(e)){const t=Array.from(i.children).indexOf(this._itemsFocusable),e=Array.from(this.$.items.children).find((t=>!t.hidden&&t.index===this._focusedItemIndex));e&&(r=e.children[t])}t.preventDefault(),r.focus()}else t.preventDefault(),e.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(t){t.preventDefault();const e=t.composedPath()[0],r=this.__isRow(e);!r&&e._content&&e._content.firstElementChild||this.dispatchEvent(new CustomEvent(r?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(r?e:e.parentElement)}}))}_onKeyUp(t){if(!/^( |SpaceBar)$/.test(t.key)||this.interacting)return;t.preventDefault();const e=t.composedPath()[0];if(e._content&&e._content.firstElementChild){const r=this.hasAttribute("navigating");e._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:t.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",r)}}_onFocusIn(t){this._isMousedown||this.toggleAttribute("navigating",!0);const e=t.composedPath()[0];e===this.$.table||e===this.$.focusexit?(this._predictFocusStepTarget(e,e===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(t)}_onFocusOut(t){this.toggleAttribute("navigating",!1),this._detectInteracting(t),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(t){const{section:e,cell:r,row:i}=this._getGridEventLocation(t);if(r||this.__rowFocusMode){if(this._detectInteracting(t),e&&(r||i))if(this._activeRowGroup=e,this.$.header===e?this._headerFocusable=this.__getFocusable(i,r):this.$.items===e?this._itemsFocusable=this.__getFocusable(i,r):this.$.footer===e&&(this._footerFocusable=this.__getFocusable(i,r)),r){const e=this.getEventContext(t);r.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:e}})),this._focusedCell=r._focusButton||r,(0,at.LQ)()&&t.target===r&&this._showTooltip(t)}else this._focusedCell=null;this._detectFocusedItemIndex(t)}}__getFocusable(t,e){return this.__rowFocusMode?t:e._focusButton||e}_detectInteracting(t){const e=t.composedPath().some((t=>"vaadin-grid-cell-content"===t.localName));this._setInteracting(e),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(t){const{section:e,row:r}=this._getGridEventLocation(t);e===this.$.items&&(this._focusedItemIndex=r.index)}_updateGridSectionFocusTarget(t){if(!t)return;const e=this._getGridSectionFromFocusTarget(t),r=this.interacting&&e===this._activeRowGroup;t.tabIndex=r?-1:0}_preventScrollerRotatingCellFocus(t,e){t.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),e===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(t,e){let r=this._columnTree.length-1;return t===this.$.header?r=e:t===this.$.footer&&(r=this._columnTree.length-1-e),this._columnTree[r]}__isValidFocusable(t){return this.$.table.contains(t)&&t.offsetHeight}_resetKeyboardNavigation(){if(["header","footer"].forEach((t=>{if(!this.__isValidFocusable(this[`_${t}Focusable`])){const e=[...this.$[t].children].find((t=>t.offsetHeight)),r=e?[...e.children].find((t=>!t.hidden)):null;e&&r&&(this[`_${t}Focusable`]=this.__getFocusable(e,r))}})),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const t=this.__getFirstVisibleItem(),e=t?[...t.children].find((t=>!t.hidden)):null;e&&t&&(delete this._focusedColumnOrder,this._itemsFocusable=this.__getFocusable(t,e))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(t){if(t.hasAttribute("frozen")||t.hasAttribute("frozen-to-end")||this.__isDetailsCell(t))return;const e=t.getBoundingClientRect(),r=t.parentNode,i=Array.from(r.children).indexOf(t),o=this.$.table.getBoundingClientRect();let s=o.left,n=o.right;for(let t=i-1;t>=0;t--){const e=r.children[t];if(!e.hasAttribute("hidden")&&!this.__isDetailsCell(e)&&(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end"))){s=e.getBoundingClientRect().right;break}}for(let t=i+1;t<r.children.length;t++){const e=r.children[t];if(!e.hasAttribute("hidden")&&!this.__isDetailsCell(e)&&(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end"))){n=e.getBoundingClientRect().left;break}}e.left<s&&(this.$.table.scrollLeft+=Math.round(e.left-s)),e.right>n&&(this.$.table.scrollLeft+=Math.round(e.right-n))}_getGridEventLocation(t){const e=t.composedPath(),r=e.indexOf(this.$.table);return{section:r>=1?e[r-1]:null,row:r>=2?e[r-2]:null,cell:r>=3?e[r-3]:null}}_getGridSectionFromFocusTarget(t){return t===this._headerFocusable?this.$.header:t===this._itemsFocusable?this.$.items:t===this._footerFocusable?this.$.footer:null}},dt=t=>class extends t{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[]},rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver((t=>{t.forEach((({target:t})=>{this._updateDetailsCellHeight(t.parentElement)})),this.__virtualizer.__adapter._resizeHandler()}))}_rowDetailsRendererChanged(t){t&&this._columnTree&&Array.from(this.$.items.children).forEach((t=>{if(!t.querySelector("[part~=details-cell]")){this._updateRow(t,this._columnTree[this._columnTree.length-1]);const e=this._isDetailsOpened(t._item);this._toggleDetailsCell(t,e)}}))}_detailsOpenedItemsChanged(t,e){"detailsOpenedItems.length"!==t.path&&t.value&&[...this.$.items.children].forEach((t=>{(t.hasAttribute("details-opened")||e&&this._isDetailsOpened(t._item))&&this._updateItem(t,t._item)}))}_configureDetailsCell(t){t.setAttribute("part","cell details-cell"),t.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(t)}_toggleDetailsCell(t,e){const r=t.querySelector('[part~="details-cell"]');r&&(r.hidden=!e,r.hidden||this.rowDetailsRenderer&&(r._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(t){const e=t.querySelector('[part~="details-cell"]');e&&(e.hidden?t.style.removeProperty("padding-bottom"):t.style.setProperty("padding-bottom",`${e.offsetHeight}px`))}_updateDetailsCellHeights(){[...this.$.items.children].forEach((t=>{this._updateDetailsCellHeight(t)}))}_isDetailsOpened(t){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(t,this.detailsOpenedItems)}openItemDetails(t){this._isDetailsOpened(t)||(this.detailsOpenedItems=[...this.detailsOpenedItems,t])}closeItemDetails(t){this._isDetailsOpened(t)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter((e=>!this._itemsEqual(e,t))))}};var ht=r(14);const ct=new ResizeObserver((t=>{setTimeout((()=>{t.forEach((t=>{t.target.resizables?t.target.resizables.forEach((e=>{e._onResize(t.contentRect)})):t.target._onResize(t.contentRect)}))}))})),ut=(0,ht.o)((t=>class extends t{connectedCallback(){if(super.connectedCallback(),ct.observe(this),this._observeParent){const t=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;t.resizables||(t.resizables=new Set,ct.observe(t)),t.resizables.add(this),this.__parent=t}}disconnectedCallback(){super.disconnectedCallback(),ct.unobserve(this);const t=this.__parent;if(this._observeParent&&t){const e=t.resizables;e&&(e.delete(this),0===e.size&&ct.unobserve(t)),this.__parent=null}}get _observeParent(){return!1}_onResize(t){}notifyResize(){console.warn("WARNING: Since Vaadin 23, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}})),pt=t=>class extends(ut(t)){static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(t){this.$.table.scrollTop=t}get _scrollLeft(){return this.$.table.scrollLeft}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",(t=>{const e=t.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=t.composedPath()[e-1]})),this.$.items.addEventListener("focusout",(()=>{this._rowWithFocusedElement=void 0})),this.$.table.addEventListener("scroll",(()=>this._afterScroll()))}_onResize(){this._updateOverflow(),this.__updateHorizontalScrollPosition()}scrollToIndex(t){t=Math.min(this._effectiveSize-1,Math.max(0,t)),this.__virtualizer.scrollToIndex(t),this.__scrollIntoViewport(t)}__scrollIntoViewport(t){const e=[...this.$.items.children].find((e=>e.index===t));if(e){const t=e.getBoundingClientRect(),r=this.$.footer.getBoundingClientRect().top,i=this.$.header.getBoundingClientRect().bottom;t.bottom>r?this.$.table.scrollTop+=t.bottom-r:t.top<i&&(this.$.table.scrollTop-=i-t.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame((()=>this.$.scroller.toggleAttribute("scrolling",!0)))),this._debounceScrolling=n.dx.debounce(this._debounceScrolling,s.Wc.after(500),(()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)}))}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow()}_updateOverflow(){let t="";const e=this.$.table;e.scrollTop<e.scrollHeight-e.clientHeight&&(t+=" bottom"),e.scrollTop>0&&(t+=" top");const r=this.__getNormalizedScrollLeft(e);r>0&&(t+=" start"),r<e.scrollWidth-e.clientWidth&&(t+=" end"),this.__isRTL&&(t=t.replace(/start|end/gi,(t=>"start"===t?"end":"start"))),e.scrollLeft<e.scrollWidth-e.clientWidth&&(t+=" right"),e.scrollLeft>0&&(t+=" left"),this._debounceOverflow=n.dx.debounce(this._debounceOverflow,s.rs,(()=>{const e=t.trim();e.length>0&&this.getAttribute("overflow")!==e?this.setAttribute("overflow",e):0===e.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}))}_frozenCellsChanged(){this._debouncerCacheElements=n.dx.debounce(this._debouncerCacheElements,s.YA,(()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((t=>{t.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()})),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=n.dx.debounce(this.__debounceUpdateFrozenColumn,s.YA,(()=>this._updateFrozenColumn()))}_updateFrozenColumn(){if(!this._columnTree)return;const t=this._columnTree[this._columnTree.length-1].slice(0);let e,r;t.sort(((t,e)=>t._order-e._order));for(let i=0;i<t.length;i++){const o=t[i];o._lastFrozen=!1,o._firstFrozenToEnd=!1,void 0===r&&o.frozenToEnd&&!o.hidden&&(r=i),o.frozen&&!o.hidden&&(e=i)}void 0!==e&&(t[e]._lastFrozen=!0),void 0!==r&&(t[r]._firstFrozenToEnd=!0)}__updateHorizontalScrollPosition(){const t=this.$.table.scrollWidth,e=this.$.table.clientWidth,r=Math.max(0,this.$.table.scrollLeft),i=this.__getNormalizedScrollLeft(this.$.table),o=`translate(${-r}px, 0)`;this.$.header.style.transform=o,this.$.footer.style.transform=o,this.$.items.style.transform=o;const s=this.__isRTL?i+e-t:r,n=`translate(${s}px, 0)`;for(let t=0;t<this._frozenCells.length;t++)this._frozenCells[t].style.transform=n;const a=`translate(${this.__isRTL?i:r+e-t}px, 0)`;for(let t=0;t<this._frozenToEndCells.length;t++)this._frozenToEndCells[t].style.transform=a;this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",-s+"px")}},_t=t=>class extends t{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems.*)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems.*)"]}_isSelected(t){return this.__selectedKeys.has(this.getItemId(t))}selectItem(t){this._isSelected(t)||(this.selectedItems=[...this.selectedItems,t])}deselectItem(t){this._isSelected(t)&&(this.selectedItems=this.selectedItems.filter((e=>!this._itemsEqual(e,t))))}_toggleItem(t){this._isSelected(t)?this.deselectItem(t):this.selectItem(t)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(t,e){const r=e.base||[],i=new Set;return r.forEach((t=>{i.add(this.getItemId(t))})),i}};let mt="prepend";const ft=t=>class extends t{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>mt},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(t){mt=["append","prepend"].includes(t)?t:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(t){const e=t.target;t.stopPropagation(),e._grid=this,this.__updateSorter(e,t.detail.shiftClick),this.__applySorters()}__removeSorters(t){0!==t.length&&(this._sorters=this._sorters.filter((e=>t.indexOf(e)<0)),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(((t,e)=>{t._order=this._sorters.length>1?e:null}))}__appendSorter(t){t.direction?this._sorters.includes(t)||this._sorters.push(t):this._removeArrayItem(this._sorters,t),this.__updateSortOrders()}__prependSorter(t){this._removeArrayItem(this._sorters,t),t.direction&&this._sorters.unshift(t),this.__updateSortOrders()}__updateSorter(t,e){if(t.direction||-1!==this._sorters.indexOf(t))if(t._order=null,this.multiSort&&!this.multiSortOnShiftClick||this.multiSortOnShiftClick&&e)"append"===this.multiSortPriority?this.__appendSorter(t):this.__prependSorter(t);else if(t.direction||this.multiSortOnShiftClick){const e=this._sorters.filter((e=>e!==t));this._sorters=t.direction?[t]:[],e.forEach((t=>{t._order=null,t.direction=null}))}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map((t=>({path:t.path,direction:t.direction})))}_removeArrayItem(t,e){const r=t.indexOf(e);r>-1&&t.splice(r,1)}},gt=t=>class extends t{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter((t=>!t.hidden&&!t.hasAttribute("loading"))).forEach((t=>this._generateCellClassNames(t,this.__getRowModel(t))))}_generateCellClassNames(t,e){Array.from(t.children).forEach((t=>{if(t.__generatedClasses&&t.__generatedClasses.forEach((e=>t.classList.remove(e))),this.cellClassNameGenerator){const r=this.cellClassNameGenerator(t._column,e);t.__generatedClasses=r&&r.split(" ").filter((t=>t.length>0)),t.__generatedClasses&&t.__generatedClasses.forEach((e=>t.classList.add(e)))}}))}};class vt extends((0,S.S)((0,i.Tb)(G(V(it(L(pt(_t(ft(dt(lt($(st(U(q((0,E.k)(ot(tt(gt((0,P.N)(o.H3))))))))))))))))))))){static get template(){return o.dy`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)","_effectiveSizeChanged(_effectiveSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:x},_ios:{type:Boolean,value:C},_firefox:{type:Boolean,value:y},_android:{type:Boolean,value:v},_touchDevice:{type:Boolean,value:A},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getVisibleRows().find((t=>this._isInViewport(t)))}get _firstVisibleIndex(){const t=this.__getFirstVisibleItem();return t?t.index:void 0}__getLastVisibleItem(){return this._getVisibleRows().reverse().find((t=>this._isInViewport(t)))}get _lastVisibleIndex(){const t=this.__getLastVisibleItem();return t?t.index:void 0}_isInViewport(t){const e=this.$.table.getBoundingClientRect(),r=t.getBoundingClientRect(),i=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return r.bottom>e.top+i&&r.top<e.bottom-o}_getVisibleRows(){return Array.from(this.$.items.children).filter((t=>!t.hidden)).sort(((t,e)=>t.index-e.index))}ready(){super.ready(),this.__virtualizer=new N({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver((()=>setTimeout((()=>this.__updateFooterPositioning())))).observe(this.$.footer),l(this),this._tooltipController=new T.f(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),"dir"===t&&(this.__isRTL="rtl"===r)}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&"td"===t.localName)return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){const r=this._getVisibleRows().find((e=>e._item===t)),i=r&&[...r.children].find((t=>t._column===e));i&&i.focus()}_effectiveSizeChanged(t,e,r,i){if(e&&r&&i){const r=this.shadowRoot.activeElement,i=this.__getBodyCellCoordinates(r);e.size=t,e.update(),e.flush(),i&&r.parentElement.hidden&&this.__focusBodyCell(i),this._resetKeyboardNavigation()}}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter((t=>t.clientHeight)).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}__getIntrinsicWidth(t){if(this.__intrinsicWidthCache.has(t))return this.__intrinsicWidthCache.get(t);const e=this.__calculateIntrinsicWidth(t);return this.__intrinsicWidthCache.set(t,e),e}__calculateIntrinsicWidth(t){const e=t.width,r=t.flexGrow;t.width="auto",t.flexGrow=0;const i=t._allCells.filter((t=>!this.$.items.contains(t)||this._isInViewport(t.parentElement))).reduce(((t,e)=>Math.max(t,e.offsetWidth+1)),0);return t.flexGrow=r,t.width=e,i}__getDistributedWidth(t,e){if(null==t||t===this)return 0;const r=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth(t.parentElement,t));if(!e)return r;const i=r,o=t._visibleChildColumns.map((t=>this.__getIntrinsicWidth(t))).reduce(((t,e)=>t+e),0),s=Math.max(0,i-o),n=this.__getIntrinsicWidth(e)/o*s;return this.__getIntrinsicWidth(e)+n}_recalculateColumnWidths(t){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach((t=>{t.__debounceUpdateHeaderFooterRowVisibility&&t.__debounceUpdateHeaderFooterRowVisibility.flush()})),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map,t.forEach((t=>{t.width=`${this.__getDistributedWidth(t)}px`}))}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const t=this._getColumns().filter((t=>!t.hidden&&t.autoWidth));this._recalculateColumnWidths(t)}}_createScrollerRows(t){const e=[];for(let r=0;r<t;r++){const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(t,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(t)}var r;return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach((t=>t.isConnected&&t.notifyPath&&t.notifyPath("_cells.*",t._cells))),this,r=()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._afterScroll(),this.__itemsReceived()},c||_(),u.push([this,r,undefined]),e}_createCell(t,e){const r=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",r);const o=document.createElement(t);o.id=r.replace("-content-","-"),o.setAttribute("role","td"===t?"gridcell":"columnheader"),v||C||(o.addEventListener("mouseenter",(t=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(t)})),o.addEventListener("mouseleave",(()=>{this._hideTooltip()})),o.addEventListener("mousedown",(()=>{this._hideTooltip(!0)})));const s=document.createElement("slot");if(s.setAttribute("name",r),e&&e._focusButtonMode){const t=document.createElement("div");t.setAttribute("role","button"),t.setAttribute("tabindex","-1"),o.appendChild(t),o._focusButton=t,o.focus=function(){o._focusButton.focus()},t.appendChild(s)}else o.setAttribute("tabindex","-1"),o.appendChild(s);return o._content=i,i.addEventListener("mousedown",(()=>{if(b){const t=e=>{const r=i.contains(this.getRootNode().activeElement),s=e.composedPath().includes(i);!r&&s&&o.focus(),document.removeEventListener("mouseup",t,!0)};document.addEventListener("mouseup",t,!0)}else setTimeout((()=>{i.contains(this.getRootNode().activeElement)||o.focus()}))})),o}_updateRow(t,e,r,i,o){r=r||"body";const s=document.createDocumentFragment();Array.from(t.children).forEach((t=>{t._vacant=!0})),t.innerHTML="",e.filter((t=>!t.hidden)).forEach(((e,n,a)=>{let l;if("body"===r){if(e._cells=e._cells||[],l=e._cells.find((t=>t._vacant)),l||(l=this._createCell("td",e),e._cells.push(l)),l.setAttribute("part","cell body-cell"),t.appendChild(l),n===a.length-1&&this.rowDetailsRenderer){this._detailsCells=this._detailsCells||[];const e=this._detailsCells.find((t=>t._vacant))||this._createCell("td");-1===this._detailsCells.indexOf(e)&&this._detailsCells.push(e),e._content.parentElement||s.appendChild(e._content),this._configureDetailsCell(e),t.appendChild(e),this._a11ySetRowDetailsCell(t,e),e._vacant=!1}e.notifyPath&&!o&&e.notifyPath("_cells.*",e._cells)}else{const o="header"===r?"th":"td";i||"vaadin-grid-column-group"===e.localName?(l=e[`_${r}Cell`]||this._createCell(o),l._column=e,t.appendChild(l),e[`_${r}Cell`]=l):(e._emptyCells=e._emptyCells||[],l=e._emptyCells.find((t=>t._vacant))||this._createCell(o),l._column=e,t.appendChild(l),-1===e._emptyCells.indexOf(l)&&e._emptyCells.push(l)),l.setAttribute("part",`cell ${r}-cell`)}l._content.parentElement||s.appendChild(l._content),l._vacant=!1,l._column=e})),"body"!==r&&this.__debounceUpdateHeaderFooterRowVisibility(t),this.appendChild(s),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__debounceUpdateHeaderFooterRowVisibility(t){t.__debounceUpdateHeaderFooterRowVisibility=n.dx.debounce(t.__debounceUpdateHeaderFooterRowVisibility,s.YA,(()=>this.__updateHeaderFooterRowVisibility(t)))}__updateHeaderFooterRowVisibility(t){if(!t)return;const e=Array.from(t.children).filter((e=>{const r=e._column;if(r._emptyCells&&r._emptyCells.indexOf(e)>-1)return!1;if(t.parentElement===this.$.header){if(r.headerRenderer)return!0;if(null===r.header)return!1;if(r.path||void 0!==r.header)return!0}else if(r.footerRenderer)return!0;return!1}));t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(t.toggleAttribute("first",0===e),t.toggleAttribute("last",e===this._effectiveSize-1),t.toggleAttribute("odd",e%2),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths()}_renderColumnTree(t){for(Array.from(this.$.items.children).forEach((e=>this._updateRow(e,t[t.length-1],null,!1,!0)));this.$.header.children.length<t.length;){const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.header.appendChild(t);const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.footer.appendChild(e)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach(((e,r)=>this._updateRow(e,t[r],"header",r===t.length-1))),Array.from(this.$.footer.children).forEach(((e,r)=>this._updateRow(e,t[t.length-1-r],"footer",0===r))),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning(),this.generateCellClassNames()}__updateFooterPositioning(){this._firefox&&parseFloat(navigator.userAgent.match(/Firefox\/(\d{2,3}.\d)/)[1])<99&&(this.$.items.style.paddingBottom=0,this.allRowsVisible||(this.$.items.style.paddingBottom=`${this.$.footer.offsetHeight}px`))}_updateItem(t,e){t._item=e;const r=this.__getRowModel(t);this._toggleDetailsCell(t,r.detailsOpened),this._a11yUpdateRowLevel(t,r.level),this._a11yUpdateRowSelected(t,r.selected),t.toggleAttribute("expanded",r.expanded),t.toggleAttribute("selected",r.selected),t.toggleAttribute("details-opened",r.detailsOpened),this._generateCellClassNames(t,r),this._filterDragAndDrop(t,r),Array.from(t.children).forEach((t=>{if(t._renderer){const e=t._column||this;t._renderer.call(e,t._content,e,r)}})),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,r.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateFooterPositioning(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(t){0===t.animationName.indexOf("vaadin-grid-appear")&&(t.stopPropagation(),this.__itemsReceived(),requestAnimationFrame((()=>{this.__scrollToPendingIndex()})))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}_showTooltip(t){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(t.target),this._tooltipController.setContext(this.getEventContext(t)),e._stateController.open({focus:"focusin"===t.type,hover:"mouseenter"===t.type}))}_hideTooltip(t){const e=this._tooltipController.node;e&&e._stateController.close(t)}requestContentUpdate(){this._columnTree&&(this._columnTree.forEach((t=>{t.forEach((t=>{t._renderHeaderAndFooter&&t._renderHeaderAndFooter()}))})),this.__updateVisibleRows())}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}notifyResize(){console.warn("WARNING: Since Vaadin 22, notifyResize() is deprecated. The component uses a ResizeObserver internally and doesn't need to be explicitly notified of resizes.")}}customElements.define(vt.is,vt)},882:(t,e,r)=>{r.r(e),r(125);var i=r(128);(0,i.hC)("vaadin-input-container",i.iv`
    :host {
      position: relative;
      top: -0.2px; /* NOTE(platosha): Adjusts for wrong flex baseline in Chrome & Safari */
      height: 32px;
      padding-left: 0;
      padding-right: 0;
      background-color: transparent;
      margin: 0;
    }

    :host::before,
    :host::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      transform-origin: 50% 0%;
      background-color: var(--_material-text-field-input-line-background-color, #000);
      opacity: var(--_material-text-field-input-line-opacity, 0.42);
    }

    :host::after {
      background-color: var(--material-primary-color);
      opacity: 0;
      height: 2px;
      bottom: 0;
      transform: scaleX(0);
      transition: opacity 0.175s;
    }

    ::slotted(:not([slot$='fix'])) {
      padding: 8px 0;
    }

    ::slotted([slot$='fix']) {
      color: var(--material-secondary-text-color);
    }

    /* Disabled */
    :host([disabled]) {
      color: var(--material-disabled-text-color);
    }

    :host([disabled])::before {
      background-color: transparent;
      background-image: linear-gradient(
        90deg,
        var(--_material-text-field-input-line-background-color, #000) 0,
        var(--_material-text-field-input-line-background-color, #000) 2px,
        transparent 2px
      );
      background-size: 4px 1px;
      background-repeat: repeat-x;
    }

    :host([disabled]) ::slotted(:not([slot$='fix'])) {
      color: var(--material-disabled-text-color);
      -webkit-text-fill-color: var(--material-disabled-text-color);
    }

    /* Invalid */
    :host([invalid])::after {
      background-color: var(--material-error-color);
      opacity: 1;
      transform: none;
      transition: transform 0.175s, opacity 0.175s;
    }
  `,{moduleId:"material-input-container"});var o=r(428),s=r(676);class n extends((0,i.Tb)((0,s.U)(o.H3))){static get is(){return"vaadin-input-container"}static get template(){return o.dy`
      <style>
        :host {
          display: flex;
          align-items: center;
          flex: 0 1 auto;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Reset the native input styles */
        ::slotted(input) {
          -webkit-appearance: none;
          -moz-appearance: none;
          flex: auto;
          white-space: nowrap;
          overflow: hidden;
          width: 100%;
          height: 100%;
          outline: none;
          margin: 0;
          padding: 0;
          border: 0;
          border-radius: 0;
          min-width: 0;
          font: inherit;
          line-height: normal;
          color: inherit;
          background-color: transparent;
          /* Disable default invalid style in Firefox */
          box-shadow: none;
        }

        ::slotted(*) {
          flex: none;
        }

        ::slotted(:is(input, textarea))::placeholder {
          /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
          /* because ::slotted(...)::placeholder does not work in Safari. */
          font: inherit;
          color: inherit;
          /* Override default opacity in Firefox */
          opacity: 1;
        }
      </style>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",(t=>{t.target===this&&t.preventDefault()})),this.addEventListener("click",(t=>{t.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach((t=>t.focus&&t.focus()))}))}}customElements.define(n.is,n),r(323);const a=document.createElement("template");a.innerHTML='\n  <style>\n    @font-face {\n      font-family: \'material-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAjAAAsAAAAADaAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAFZSk1xEY21hcAAAAYgAAACNAAACNOuCXH5nbHlmAAACGAAABDoAAAX4NWGBxmhlYWQAAAZUAAAAMAAAADZhSa2YaGhlYQAABoQAAAAeAAAAJBGxCLtobXR4AAAGpAAAABMAAABAjXoAAGxvY2EAAAa4AAAAIgAAACIKMAjcbWF4cAAABtwAAAAfAAAAIAEeAFRuYW1lAAAG/AAAATQAAAJe3l764XBvc3QAAAgwAAAAkAAAAMondETCeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYOS4wTiBgZWBga2WbQIDA2MAhGZpYChlymZgYGJgZWbACgLSXFMYHF4xvuJnv/CvgOEG+wXG6UBhRpAcAA0HDXt4nO2R2Q0DIQxEHwt7HzSSGlJQvlJkqqGJjYdJGbH0PPJgELKBEcjBIyiQ3iQUr3BT9zNb9wvP3lPkt3rfkZNy1KXnIXpLvDgxs7DGvZ2Dk4saxxP/OHr+/KqqCZo+08EgzUa7acVoym002lubDNLZIF0M0tUg3Yz22XaD9DD6XTsN0ssgrYb6BZEQJiUAAAB4nH1UXUgcVxS+Z2ZnZpeq7IT9CbTY2Z24o1m72+zPTB/UFSS2MWssTZRs6doqialmy27bPIghPzQttCxjfEhjfGhoUFLBQoVdKixSkofCEkurwQdBgw1NqeCWFrokVt3b3pnRqm3J/Nw598537v3Od869CBC5uFm2EZkRAgl4kQcOuFm1NJcv3R+kBVpQS/dNdzcilH9w80e0F+8EPsiDAjCkUv485SMIgqd8GxHT3dIc8UYUQnjefINLoGfR88RDDIt2F3lFdwXYeVslBF2BBgjzIR/QLt7FzZ7Kb+7Pn5LfkMnDNhrfP++wjexYnlx6Z9fPtTXGZnAyh5hbiEHIApwFJPpD/OYg5TdNqnAJbpFgiGXgWIbp13AgWQhxllFL49RJFcumVWKVxlWY2cI1buHIdE6gV1S4h2WVOsn0qziMw8Ta0iLBLKFnjPk0qDYrlyArluaIJnpD+UmXaSONbu38IO40Qn+9RPQxo/3oEFLIPG6ORRxrdTqQ0yEoMlJkq+RBkod2Sz6QPFalARRZcFaC02HlKoBjaVFLgemrmVwGr0aPHYuCPZOD4VwG7NG2tihezeRmRq8NPaiPROofDF2D5h373etU+VHcwJkJrJDN4b5cFhc0J7Blc3A9lwVbtG1t7T9+OKfbjK00jr89D1r4umZj9IqWcQtFTUMRivQKLoPinhifQ8LTYhTDwbDIB02TM//HxGB5RiuEp1NeP5DPkwQZ+pLa2GQr0D7kRY3ba/+z8C5lQ7qyAV1Zm6EswXKszelwOgKKrMghySN5TJOPlxfwVEcHHFlYhsLyAhzp6MBTC8uPe+KxtEeSPOlY/Lsds+e15qbqmprqpuaxbYOt6IrjicVFPBHv6opD++IitMe7Nir/7WqYtLDHWTeQieyrXssyN4sqUBWqQy8jVMWKgqaivE/RahBYu02PJRhQJFZ0a9zDIcUCcjikxyu6OUkOCloSWIoMBwNaoHYb+8v8I1wsruKRzro7FzGXNi+l12PV3oPD3aeTZ7uzZeWxaEttLZi68Q+yt0YbvZD69acnUPZHAc50Rr4vfYYvCm4d1Nna1wPv/zYClrdhLf3kQJr5ovts8nT3cI23OgMveFuisfLyUh4OpS5oowe9cuH13h6s/v45LsB7cIWt9ba0xlxo114j9QU80IIpyiytf0xNo11nko90SJiCnj3rdvREEFEbEPfm2eEEF8/+nLxqlHNdJFJHSnt0avTmw9rZmvHUucsDycRtn9/vu51IFpN9x/E31DTTnty7B0jh8V+e+zoQ2oJpHi/6TmhYjRalNZa3CLcqVGuw05XX+Gj3do5cAZ1VWC8x4MlRSI6Tq+6+3pGbmcErl+5FPj0/cPgVfY0BxmZUWqS+N1HqxSk8r2+2RxPpT1pfDQam+q0njl/+6IbB3qjBD1LvNB3GD3EKhqCIy9DfIQrMlQAAeJxjYGRgYABiYWGbw/H8Nl8ZuDkTgCIMNaobGhH0v0zO++wXgFwOBiaQKAAHHgoPeJxjYGRgYL/wr4CBgcuKAQg47zMwMqACAQBc2wOEAAB4nGNgYGDgTCAec1mh8gG9VgYDAAAAAAAAGAAwAGIAdgCKAJ4AwAEkATIBcAHcAlQCYgKwAvwAAHicY2BkYGAQYPBgYGEAASYg5gJCBob/YD4DABFeAXMAeJx9kL1uwjAUhU8gUJVIVaWqnRgsVepSEX5G1BkkRgb2EBwIcuLIMUi8QR+kT9CH6NgH6VP0xHiBAVtyvvvdc50oAB7xgwDNCvDgzma1cMfqzG3Ss+eQ/Oq5gwhjz136D889vGPhOcITDrwhCO9p+vj03GL+y3Ob/ttzSP713MEL/jx30Q/guYdV0Pcc4S0wRWKlyRM1yFNd1ku5PajkSl5WK2nqXJdiHI8uG3NZSkOzEeuTqI/bibWZyIwuxEyXViqlRWX0XqY23llbTYfDzPs41QUKJLCQMMhJCgM+U2iUqLGk3/JfKHbMzeSt3sr5mqapBf9/jNHNiTl96XrnzIZTa5x41jjyiya0FhnrjBnNuwRmbrZJK25NU7nenialj7FzUxWmGHJnV/nYvb34BzHZcLZ4nG2M0Q6CMBRDV2CIOhTf/Ak+am5XIdyw5QoS/l4W4ptN2uYkTVWmdt3VfzXIkKOARokDKhxxwhkGNS64osFNXaxIWFoflnGx4s2Oc0xQOcs0eivadeQGs+VHwtgyPaf6B9K/ukk7pjTj4IbKS4jpT9P2JTmtZDa3vn/bB5MvItu1FOJgfTnHVEp9AbKdMX4=) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --material-icons-arrow-downward: "\\ea01";\n      --material-icons-arrow-upward: "\\ea02";\n      --material-icons-calendar: "\\ea03";\n      --material-icons-check: "\\ea04";\n      --material-icons-chevron-left: "\\ea05";\n      --material-icons-chevron-right: "\\ea06";\n      --material-icons-clear: "\\ea07";\n      --material-icons-clock: "\\ea08";\n      --material-icons-dropdown: "\\ea09";\n      --material-icons-error: "\\ea0a";\n      --material-icons-eye: "\\ea0b";\n      --material-icons-eye-disabled: "\\ea0c";\n      --material-icons-play: "\\ea0d";\n      --material-icons-reload: "\\ea0e";\n      --material-icons-upload: "\\ea0f";\n    }\n  </style>\n',document.head.appendChild(a.content),r(817);const l=i.iv`
  [part$='button'] {
    flex: none;
    width: 24px;
    height: 24px;
    padding: 4px;
    color: var(--material-secondary-text-color);
    font-size: var(--material-icon-font-size);
    line-height: 24px;
    text-align: center;
  }

  :host(:not([readonly])) [part$='button'] {
    cursor: pointer;
  }

  :host(:not([readonly])) [part$='button']:hover {
    color: var(--material-text-color);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--material-disabled-text-color);
  }

  :host([disabled]) [part='clear-button'] {
    display: none;
  }

  [part$='button']::before {
    font-family: 'material-icons';
  }
`;(0,i.hC)("",l,{moduleId:"material-field-button"});const d=i.iv`
  [part='helper-text'] {
    font-size: 0.75rem;
    line-height: 1;
    color: var(--material-secondary-text-color);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: 6px;
  }

  /* According to Material guidelines, helper text should be hidden when error message is set and input is invalid */
  :host([has-helper][invalid][has-error-message]) [part='helper-text'] {
    display: none;
  }
`,h=i.iv`
  [part='label'] {
    display: block;
    position: absolute;
    top: 8px;
    font-size: 1em;
    line-height: 1;
    height: 20px;
    margin-bottom: -4px;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    color: var(--material-secondary-text-color);
    transform-origin: 0 75%;
    transform: scale(0.75);
  }

  :host([required]) [part='required-indicator']::after {
    content: ' *';
    color: inherit;
  }

  :host([invalid]) [part='label'] {
    color: var(--material-error-text-color);
  }

  [part='error-message'] {
    font-size: 0.75em;
    line-height: 1;
    color: var(--material-error-text-color);
  }

  :host([has-error-message]) [part='error-message']::before {
    content: '';
    display: block;
    height: 6px;
  }

  :host(:not([invalid])) [part='error-message'] {
    margin-top: 0;
    max-height: 0;
    overflow: hidden;
  }

  :host([invalid]) [part='error-message'] {
    animation: reveal 0.2s;
  }

  @keyframes reveal {
    0% {
      opacity: 0;
    }
  }

  /* RTL specific styles */
  :host([dir='rtl']) [part='label'] {
    transform-origin: 100% 75%;
  }
`;(0,i.hC)("",h,{moduleId:"material-required-field"});const c=[h,l,d,i.iv`
  :host {
    display: inline-flex;
    position: relative;
    padding-top: 8px;
    margin-bottom: 8px;
    outline: none;
    color: var(--material-body-text-color);
    font-size: var(--material-body-font-size);
    line-height: 24px;
    font-family: var(--material-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host::before {
    line-height: 32px;
  }

  /* Strange gymnastics to make fields vertically align nicely in most cases
     (no label, with label, without prefix, with prefix, etc.) */

  :host([has-label]) {
    padding-top: 24px;
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: -8px;
  }

  [part='input-field'] {
    position: relative;
    top: -0.2px; /* NOTE(platosha): Adjusts for wrong flex baseline in Chrome & Safari */
    height: 32px;
    padding-left: 0;
    padding-right: 0;
    background-color: transparent;
    margin: 0;
  }

  [part='input-field']::before,
  [part='input-field']::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    transform-origin: 50% 0%;
    background-color: var(--_material-text-field-input-line-background-color, #000);
    opacity: var(--_material-text-field-input-line-opacity, 0.42);
  }

  [part='input-field']::after {
    background-color: var(--material-primary-color);
    opacity: 0;
    height: 2px;
    bottom: 0;
    transform: scaleX(0);
    transition: opacity 0.175s;
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(:is(input, textarea)) {
    color: var(--material-disabled-text-color);
    -webkit-text-fill-color: var(--material-disabled-text-color);
  }

  [part='input-field'] ::slotted(:is(input, textarea)) {
    outline: none;
    margin: 0;
    border: 0;
    border-radius: 0;
    padding: 8px 0;
    width: 100%;
    height: 100%;
    font-family: inherit;
    font-size: 1em;
    line-height: inherit;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  /* TODO: the text opacity should be 42%, but the disabled style is 38%.
  Would need to introduce another property for it if we want to be 100% accurate. */
  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--material-disabled-text-color);
    transition: opacity 0.175s 0.1s;
  }

  /* prettier-ignore */
  :host([has-label]:not([focused]):not([invalid]):not([theme='always-float-label'])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
    transition-delay: 0;
  }

  [part='label'] {
    width: 133%;
    transition: transform 0.175s, color 0.175s, width 0.175s;
    transition-timing-function: ease, ease, step-end;
  }

  :host(:hover:not([readonly]):not([invalid])) [part='input-field']::before {
    opacity: var(--_material-text-field-input-line-hover-opacity, 0.87);
  }

  :host([focused]:not([invalid])) [part='label'] {
    color: var(--material-primary-text-color);
  }

  :host([focused]) [part='input-field']::after,
  :host([invalid]) [part='input-field']::after {
    opacity: 1;
    transform: none;
    transition: transform 0.175s, opacity 0.175s;
  }

  :host([invalid]) [part='input-field']::after {
    background-color: var(--material-error-color);
  }

  :host([input-prevented]) [part='input-field'] {
    color: var(--material-error-text-color);
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part='input-field'] {
    color: var(--material-disabled-text-color);
  }

  :host([disabled]) [part='input-field']::before {
    background-color: transparent;
    background-image: linear-gradient(
      90deg,
      var(--_material-text-field-input-line-background-color, #000) 0,
      var(--_material-text-field-input-line-background-color, #000) 2px,
      transparent 2px
    );
    background-size: 4px 1px;
    background-repeat: repeat-x;
  }

  /* Only target the visible floating label */
  :host([has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~='always-float-label'])) [part='label'] {
    width: 100%;
    transform: scale(1) translateY(24px);
    transition-timing-function: ease, ease, step-start;
    pointer-events: none;
    left: auto;
    right: auto;
    transition-delay: 0.1s;
  }

  /* Slotted content */
  [part='input-field'] ::slotted(*:not([part$='-button']):not(input):not(textarea)) {
    color: var(--material-secondary-text-color);
  }

  [part='clear-button']::before {
    content: var(--material-icons-clear);
  }

  /* RTL specific styles */

  :host([disabled][dir='rtl']) [part='input-field']::before {
    background-image: linear-gradient(
      -90deg,
      var(--_material-text-field-input-line-background-color, #000) 0,
      var(--_material-text-field-input-line-background-color, #000) 2px,
      transparent 2px
    );
  }
`];(0,i.hC)("",c,{moduleId:"material-input-field-shared-styles"}),(0,i.hC)("vaadin-text-field",c,{moduleId:"material-text-field-styles"});var u=r(402),p=r(463),_=r(677);class m extends _.n{constructor(t,e){super(t,"input",(()=>document.createElement("input")),((t,r)=>{t.value&&r.setAttribute("value",t.value),t.type&&r.setAttribute("type",t.type),r.id=this.defaultId,"function"==typeof e&&e(r)}),!0)}}var f=r(913),g=r(139),v=r(256),b=r(14),y=r(527),w=r(62);const C=(0,b.o)((t=>class extends((0,y.W)((0,w.N)(t))){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame((()=>{this.focus(),this.setAttribute("focus-ring","")}))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(t,e){t?(t.disabled=this.disabled,this._addFocusListeners(t),this.__forwardTabIndex(this.tabindex)):e&&this._removeFocusListeners(e)}_addFocusListeners(t){t.addEventListener("blur",this._boundOnBlur),t.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(t){t.removeEventListener("blur",this._boundOnBlur),t.removeEventListener("focus",this._boundOnFocus)}_onFocus(t){t.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(t){t.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(t){return t.target===this.focusElement}_disabledChanged(t,e){super._disabledChanged(t,e),this.focusElement&&(this.focusElement.disabled=t),t&&this.blur()}_tabindexChanged(t){this.__forwardTabIndex(t)}__forwardTabIndex(t){void 0!==t&&this.focusElement&&(this.focusElement.tabIndex=t,-1!==t&&(this.tabindex=void 0)),this.disabled&&t&&(-1!==t&&(this._lastTabIndex=t),this.tabindex=void 0)}}));var x=r(155);class A extends _.n{constructor(t){super(t,"error-message",(()=>document.createElement("div")),((t,e)=>{this.__updateErrorId(e),this.__updateHasError()}),!0)}get errorId(){return this.node&&this.node.id}setErrorMessage(t){this.errorMessage=t,this.__updateHasError()}setInvalid(t){this.invalid=t,this.__updateHasError()}initCustomNode(t){this.__updateErrorId(t),t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),this.__updateHasError()}teardownNode(t){let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e)),this.__updateHasError()}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__updateHasError(){const t=this.node,e=Boolean(this.invalid&&this.__isNotEmpty(this.errorMessage));t&&(t.textContent=e?this.errorMessage:"",t.hidden=!e,e?t.setAttribute("role","alert"):t.removeAttribute("role")),this.host.toggleAttribute("has-error-message",e)}__updateErrorId(t){t.id||(t.id=this.defaultId)}}var E=r(726);class S{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setLabelId(t){this.__setLabelIdToAriaAttribute(t,this.__labelId),this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}get __isGroupField(){return this.__target===this.host}__setLabelIdToAriaAttribute(t,e){this.__setAriaAttributeId("aria-labelledby",t,e)}__setErrorIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setHelperIdToAriaAttribute(t,e){this.__isGroupField?this.__setAriaAttributeId("aria-labelledby",t,e):this.__setAriaAttributeId("aria-describedby",t,e)}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}__setAriaAttributeId(t,e,r){this.__target&&(r&&(0,E.x_)(this.__target,t,r),e&&(0,E.$2)(this.__target,t,e))}}class P extends _.n{constructor(t){super(t,"helper",null,null,!0)}get helperId(){return this.node&&this.node.id}initCustomNode(t){this.__updateHelperId(t),this.__observeHelper(t);const e=this.__hasHelper(t);this.__toggleHasHelper(e)}teardownNode(t){this.__helperIdObserver&&this.__helperIdObserver.disconnect();const e=this.getSlotChild();if(e&&e!==this.defaultNode){const t=this.__hasHelper(e);this.__toggleHasHelper(t)}else this.__applyDefaultHelper(this.helperText,e)}setHelperText(t){this.helperText=t;const e=this.getSlotChild();e&&e!==this.defaultNode||this.__applyDefaultHelper(t,e)}__hasHelper(t){return!!t&&(t.children.length>0||t.nodeType===Node.ELEMENT_NODE&&customElements.get(t.localName)||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return t&&""!==t.trim()}__applyDefaultHelper(t,e){const r=this.__isNotEmpty(t);r&&!e&&(this.slotFactory=()=>document.createElement("div"),e=this.attachDefaultNode(),this.__updateHelperId(e),this.__observeHelper(e)),e&&(e.textContent=t),this.__toggleHasHelper(r)}__observeHelper(t){this.__helperObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,r=e===this.node;if("attributes"===t.type)r&&e.id!==this.defaultId&&this.__updateHelperId(e);else if(r||e.parentElement===this.node){const t=this.__hasHelper(this.node);this.__toggleHasHelper(t)}}))})),this.__helperObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasHelper(t){this.host.toggleAttribute("has-helper",t),this.dispatchEvent(new CustomEvent("helper-changed",{detail:{hasHelper:t,node:this.node}}))}__updateHelperId(t){t.id||(t.id=this.defaultId)}}class T extends _.n{constructor(t){super(t,"label",(()=>document.createElement("label")),((t,e)=>{this.__updateLabelId(e),this.__updateDefaultLabel(this.label),this.__observeLabel(e)}),!0)}get labelId(){return this.node.id}initCustomNode(t){this.__updateLabelId(t);const e=this.__hasLabel(t);this.__toggleHasLabel(e)}teardownNode(t){this.__labelObserver&&this.__labelObserver.disconnect();let e=this.getSlotChild();e||t===this.defaultNode||(e=this.attachDefaultNode(),this.initNode(e));const r=this.__hasLabel(e);this.__toggleHasLabel(r)}setLabel(t){this.label=t,this.__updateDefaultLabel(t)}__hasLabel(t){return!!t&&(t.children.length>0||this.__isNotEmpty(t.textContent))}__isNotEmpty(t){return Boolean(t&&""!==t.trim())}__observeLabel(t){this.__labelObserver=new MutationObserver((t=>{t.forEach((t=>{const e=t.target,r=e===this.node;if("attributes"===t.type)r&&e.id!==this.defaultId&&this.__updateLabelId(e);else if(r||e.parentElement===this.node){const t=this.__hasLabel(this.node);this.__toggleHasLabel(t)}}))})),this.__labelObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__toggleHasLabel(t){this.host.toggleAttribute("has-label",t),this.dispatchEvent(new CustomEvent("label-changed",{detail:{hasLabel:t,node:this.node}}))}__updateDefaultLabel(t){if(this.defaultNode&&(this.defaultNode.textContent=t,this.defaultNode===this.node)){const e=this.__isNotEmpty(t);this.__toggleHasLabel(e)}}__updateLabelId(t){t.id||(t.id=this.defaultId)}}const I=(0,b.o)((t=>class extends((0,x.k)(t)){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}get _labelId(){return this._labelController.labelId}get _labelNode(){return this._labelController.node}constructor(){super(),this._labelController=new T(this)}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(t){this._labelController.setLabel(t)}})),O=(0,b.o)((t=>class extends t{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const t=this.checkValidity();return this._setInvalid(!t),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:t}})),t}checkValidity(){return!this.required||!!this.value}_setInvalid(t){this._shouldSetInvalid(t)&&(this.invalid=t)}_shouldSetInvalid(t){return!0}})),k=t=>class extends(O(I((0,x.k)(t)))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}get _errorId(){return this._errorController.errorId}get _errorNode(){return this._errorController.node}get _helperId(){return this._helperController.helperId}get _helperNode(){return this._helperController.node}constructor(){super(),this._fieldAriaController=new S(this),this._helperController=new P(this),this._errorController=new A(this),this._labelController.addEventListener("label-changed",(t=>{const{hasLabel:e,node:r}=t.detail;this.__labelChanged(e,r)})),this._helperController.addEventListener("helper-changed",(t=>{const{hasHelper:e,node:r}=t.detail;this.__helperChanged(e,r)}))}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(t,e){t?this._fieldAriaController.setHelperId(e.id):this._fieldAriaController.setHelperId(null)}__labelChanged(t,e){t?this._fieldAriaController.setLabelId(e.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(t){this._errorController.setErrorMessage(t)}_helperTextChanged(t){this._helperController.setHelperText(t)}_ariaTargetChanged(t){t&&this._fieldAriaController.setTarget(t)}_requiredChanged(t){this._fieldAriaController.setRequired(t)}_invalidChanged(t){this._errorController.setInvalid(t),setTimeout((()=>{t?this._fieldAriaController.setErrorId(this._errorController.errorId):this._fieldAriaController.setErrorId(null)}))}},z=(0,b.o)((t=>class extends t{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(t){t&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach((t=>{this._delegateAttribute(t,this[t])}))}_ensurePropsDelegated(){this.constructor.delegateProps.forEach((t=>{this._delegateProperty(t,this[t])}))}_delegateAttrsChanged(...t){this.constructor.delegateAttrs.forEach(((e,r)=>{this._delegateAttribute(e,t[r])}))}_delegatePropsChanged(...t){this.constructor.delegateProps.forEach(((e,r)=>{this._delegateProperty(e,t[r])}))}_delegateAttribute(t,e){this.stateTarget&&("invalid"===t&&this._delegateAttribute("aria-invalid",!!e&&"true"),"boolean"==typeof e?this.stateTarget.toggleAttribute(t,e):e?this.stateTarget.setAttribute(t,e):this.stateTarget.removeAttribute(t))}_delegateProperty(t,e){this.stateTarget&&(this.stateTarget[t]=e)}})),R=(0,b.o)((t=>class extends t{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}clear(){this.value=""}_addInputListeners(t){t.addEventListener("input",this._boundOnInput),t.addEventListener("change",this._boundOnChange)}_removeInputListeners(t){t.removeEventListener("input",this._boundOnInput),t.removeEventListener("change",this._boundOnChange)}_forwardInputValue(t){this.inputElement&&(this.inputElement.value=null!=t?t:"")}_inputElementChanged(t,e){t?this._addInputListeners(t):e&&this._removeInputListeners(e)}_hasInputValueChanged(t,e){(t||e)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(t){this._setHasInputValue(t),this._onInput(t)}_onInput(t){const e=t.composedPath()[0];this.__userInput=t.isTrusted,this.value=e.value,this.__userInput=!1}_onChange(t){}_toggleHasValue(t){this.toggleAttribute("has-value",t)}_valueChanged(t,e){this._toggleHasValue(this._hasValue),""===t&&void 0===e||this.__userInput||this._forwardInputValue(t)}get _hasValue(){return null!=this.value&&""!==this.value}_setHasInputValue(t){const e=t.composedPath()[0];this._hasInputValue=e.value.length>0}})),N=(0,b.o)((t=>class extends(z(O(R(t)))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map((t=>this[t])))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(t){return t.some((t=>this.__isValidConstraint(t)))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(t,...e){if(!t)return;const r=this._hasValidConstraints(e),i=this.__previousHasConstraints&&!r;(this._hasValue||this.invalid)&&r?this.validate():i&&this._setInvalid(!1),this.__previousHasConstraints=r}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__isValidConstraint(t){return Boolean(t)||0===t}})),$=new WeakMap,L=(0,b.o)((t=>class extends t{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const t=this.getRootNode(),e=function(t){return $.has(t)||$.set(t,new Set),$.get(t)}(t);this.slotStyles.forEach((r=>{e.has(r)||(function(t,e){const r=document.createElement("style");r.textContent=t,e===document?document.head.appendChild(r):e.insertBefore(r,e.firstChild)}(r,t),e.add(r))}))}})),F=t=>class extends(L(C(N(k((0,v.L)(t)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}get slotStyles(){return["\n          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {\n            font: inherit;\n            color: inherit;\n          }\n        "]}ready(){super.ready(),this.clearElement&&this.clearElement.addEventListener("click",(t=>this._onClearButtonClick(t)))}_onClearButtonClick(t){t.preventDefault(),this.inputElement.focus(),this.__clear()}_onFocus(t){super._onFocus(t),this.autoselect&&this.inputElement&&this.inputElement.select()}_onEscape(t){super._onEscape(t),this.clearButtonVisible&&this.value&&(t.stopPropagation(),this.__clear())}_onChange(t){t.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:t},bubbles:t.bubbles,cancelable:t.cancelable}))}__clear(){this.clear(),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}_addInputListeners(t){super._addInputListeners(t),t.addEventListener("paste",this._boundOnPaste),t.addEventListener("drop",this._boundOnDrop),t.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(t){super._removeInputListeners(t),t.removeEventListener("paste",this._boundOnPaste),t.removeEventListener("drop",this._boundOnDrop),t.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(t){super._onKeyDown(t),this.allowedCharPattern&&!this.__shouldAcceptKey(t)&&(t.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=g.dx.debounce(this._preventInputDebouncer,f.Wc.after(200),(()=>{this.removeAttribute("input-prevented")}))}__shouldAcceptKey(t){return t.metaKey||t.ctrlKey||!t.key||1!==t.key.length||this.__allowedCharRegExp.test(t.key)}_onPaste(t){if(this.allowedCharPattern){const e=t.clipboardData.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onDrop(t){if(this.allowedCharPattern){const e=t.dataTransfer.getData("text");this.__allowedTextRegExp.test(e)||(t.preventDefault(),this._markInputPrevented())}}_onBeforeInput(t){this.allowedCharPattern&&t.data&&!this.__allowedTextRegExp.test(t.data)&&(t.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(t){if(t)try{this.__allowedCharRegExp=new RegExp(`^${t}$`),this.__allowedTextRegExp=new RegExp(`^${t}*$`)}catch(t){console.error(t)}}},D=t=>class extends(F(t)){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}_inputElementChanged(t){super._inputElementChanged(t),t&&(t.value&&t.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),t.value=""),this.value&&(t.value=this.value))}get __data(){return this.__dataValue||{}}set __data(t){this.__dataValue=t}_setFocused(t){super._setFocused(t),t||this.validate()}_onInput(t){super._onInput(t),this.invalid&&this.validate()}_valueChanged(t,e){super._valueChanged(t,e),void 0!==e&&this.invalid&&this.validate()}};class H{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("label-changed",(t=>{this.__initLabel(t.detail.node)})),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}const M=t=>class extends(N(t)){static get properties(){return{pattern:{type:String},preventInvalidInput:{type:Boolean,observer:"_preventInvalidInputChanged"}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}_checkInputValue(){if(this.preventInvalidInput){const t=this.inputElement;t&&t.value.length>0&&!this.checkValidity()&&(t.value=this.value||"",this.setAttribute("input-prevented",""),this._inputDebouncer=g.dx.debounce(this._inputDebouncer,f.Wc.after(200),(()=>{this.removeAttribute("input-prevented")})))}}_onInput(t){this._checkInputValue(),super._onInput(t)}_preventInvalidInputChanged(t){t&&console.warn('WARNING: Since Vaadin 23.2, "preventInvalidInput" is deprecated. Please use "allowedCharPattern" instead.')}};var B=r(370);const V=B.css`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '✕';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`,j=[B.css`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }
`,B.css`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`,V];(0,i.hC)("vaadin-text-field",j,{moduleId:"vaadin-text-field-styles"});class U extends(M(D((0,i.Tb)((0,u.S)(o.H3))))){static get is(){return"vaadin-text-field"}static get template(){return o.dy`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength"]}static get constraints(){return[...super.constraints,"maxlength","minlength"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new m(this,(t=>{this._setInputElement(t),this._setFocusElement(t),this.stateTarget=t,this.ariaTarget=t}))),this.addController(new H(this.inputElement,this._labelController)),this._tooltipController=new p.f(this),this._tooltipController.setPosition("top"),this.addController(this._tooltipController)}}customElements.define(U.is,U)},199:(t,e,r)=>{r.r(e),r.d(e,{Button:()=>O,ButtonElement:()=>k});class i extends HTMLElement{static get version(){return"23.3.1"}}customElements.define("vaadin-lumo-styles",i);var o=r(128);const s=o.iv`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;
  }
`,n=document.createElement("template");n.innerHTML=`<style>${s.toString().replace(":host","html")}</style>`,document.head.appendChild(n.content);const a=o.iv`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;(0,o.hC)("",a,{moduleId:"lumo-color"});const l=o.iv`
  :host {
    color: var(--lumo-body-text-color) !important;
    background-color: var(--lumo-base-color) !important;
  }
`;(0,o.hC)("",[a,l],{moduleId:"lumo-color-legacy"});const d=o.iv`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`,h=document.createElement("template");h.innerHTML=`<style>${d.toString().replace(":host","html")}</style>`,document.head.appendChild(h.content);const c=o.iv`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`,u=document.createElement("template");u.innerHTML=`<style>${c.toString().replace(":host","html")}</style>`,document.head.appendChild(u.content);const p=o.iv`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */
    --lumo-border-radius: 0.25em; /* Deprecated */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`,_=document.createElement("template");_.innerHTML=`<style>${p.toString().replace(":host","html")}</style>`,document.head.appendChild(_.content);const m=o.iv`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,f=o.iv`
  html,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size, var(--lumo-font-size-m));
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-top: 1.25em;
  }

  h1 {
    font-size: var(--lumo-font-size-xxxl);
    margin-bottom: 0.75em;
  }

  h2 {
    font-size: var(--lumo-font-size-xxl);
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: var(--lumo-font-size-xl);
    margin-bottom: 0.5em;
  }

  h4 {
    font-size: var(--lumo-font-size-l);
    margin-bottom: 0.5em;
  }

  h5 {
    font-size: var(--lumo-font-size-m);
    margin-bottom: 0.25em;
  }

  h6 {
    font-size: var(--lumo-font-size-xs);
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;(0,o.hC)("",f,{moduleId:"lumo-typography"});const g=document.createElement("template");g.innerHTML=`<style>${m.toString().replace(":host","html")}</style>`,document.head.appendChild(g.content);const v=o.iv`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: calc(var(--lumo-button-size) * 2);
    height: var(--lumo-button-size);
    padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius-m) / 2);
    margin: var(--lumo-space-xs) 0;
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 500;
    color: var(--_lumo-button-color, var(--lumo-primary-text-color));
    background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Set only for the internal parts so we don’t affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    background-color: transparent !important;
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    padding: 0 calc(var(--lumo-button-size) / 6);
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
    color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
    font-weight: 600;
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon),
  [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']),
  [part] ::slotted(iron-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;(0,o.hC)("vaadin-button",v,{moduleId:"lumo-button"});var b=r(428),y=r(155),w=r(402),C=r(463),x=r(598),A=r(109),E=r(256);const S=t=>class extends((0,x.f)((0,E.L)(t))){get _activeKeys(){return[" "]}ready(){super.ready(),(0,A.NH)(this,"down",(t=>{this._shouldSetActive(t)&&this._setActive(!0)})),(0,A.NH)(this,"up",(()=>{this._setActive(!1)}))}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(t){return!this.disabled}_onKeyDown(t){super._onKeyDown(t),this._shouldSetActive(t)&&this._activeKeys.includes(t.key)&&(this._setActive(!0),document.addEventListener("keyup",(t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)}),{once:!0}))}_setActive(t){this.toggleAttribute("active",t)}};var P=r(527),T=r(62);const I=t=>class extends(S((0,T.N)((0,P.W)(t)))){static get properties(){return{tabindex:{value:0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(t){super._onKeyDown(t),this._activeKeys.includes(t.key)&&(t.preventDefault(),this.click())}};class O extends(I((0,w.S)((0,o.Tb)((0,y.k)(b.H3))))){static get is(){return"vaadin-button"}static get template(){return b.dy`
      <style>
        :host {
          display: inline-block;
          position: relative;
          outline: none;
          white-space: nowrap;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Aligns the button with form fields when placed on the same line.
          Note, to make it work, the form fields should have the same "::before" pseudo-element. */
        .vaadin-button-container::before {
          content: '\\2003';
          display: inline-block;
          width: 0;
          max-height: 100%;
        }

        .vaadin-button-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
          height: 100%;
          min-height: inherit;
          text-shadow: inherit;
        }

        [part='prefix'],
        [part='suffix'] {
          flex: none;
        }

        [part='label'] {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      </style>
      <div class="vaadin-button-container">
        <span part="prefix" aria-hidden="true">
          <slot name="prefix"></slot>
        </span>
        <span part="label">
          <slot></slot>
        </span>
        <span part="suffix" aria-hidden="true">
          <slot name="suffix"></slot>
        </span>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new C.f(this),this.addController(this._tooltipController)}}customElements.define(O.is,O);const k=O;console.warn('WARNING: Since Vaadin 23.2, "@vaadin/vaadin-button" is deprecated. Use "@vaadin/button" instead.')},125:(t,e,r)=>{r(323);var i=r(128);const o=i.iv`
  :host {
    /* Text colors */
    --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
    --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
    --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

    /* Primary colors */
    --material-primary-color: var(--primary-color, #6200ee);
    --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
    --material-primary-text-color: var(--material-primary-color);

    /* Error colors */
    --material-error-color: var(--error-color, #b00020);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--light-theme-background-color, #fff);
    --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
    --material-disabled-color: rgba(0, 0, 0, 0.26);

    /* Divider colors */
    --material-divider-color: rgba(0, 0, 0, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: initial;
    --_material-text-field-input-line-opacity: initial;
    --_material-text-field-input-line-hover-opacity: initial;
    --_material-text-field-focused-label-opacity: initial;

    /* Button tweaks */
    --_material-button-raised-background-color: initial;
    --_material-button-outline-color: initial;

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: initial;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: initial;

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }

  [theme~='dark'] {
    /* Text colors */
    --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
    --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
    --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

    /* Primary colors */
    --material-primary-color: var(--light-primary-color, #7e3ff2);
    --material-primary-text-color: #b794f6;

    /* Error colors */
    --material-error-color: var(--error-color, #de2839);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--dark-theme-background-color, #303030);
    --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
    --material-disabled-color: rgba(255, 255, 255, 0.3);

    /* Divider colors */
    --material-divider-color: rgba(255, 255, 255, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: #fff;
    --_material-text-field-input-line-opacity: 0.7;
    --_material-text-field-input-line-hover-opacity: 1;
    --_material-text-field-focused-label-opacity: 1;

    /* Button tweaks */
    --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
    --_material-button-outline-color: rgba(255, 255, 255, 0.2);

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
    --_material-grid-row-selected-overlay-opacity: 0.16;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }

  a {
    color: inherit;
  }
`;(0,i.hC)("",o,{moduleId:"material-color-light"});const s=i.iv`
  :host {
    /* Text colors */
    --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));
    --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));
    --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));

    /* Primary colors */
    --material-primary-color: var(--light-primary-color, #7e3ff2);
    --material-primary-text-color: #b794f6;

    /* Error colors */
    --material-error-color: var(--error-color, #de2839);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--dark-theme-background-color, #303030);
    --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);
    --material-disabled-color: rgba(255, 255, 255, 0.3);

    /* Divider colors */
    --material-divider-color: rgba(255, 255, 255, 0.12);

    /* Undocumented internal properties (prefixed with three dashes) */

    /* Text field tweaks */
    --_material-text-field-input-line-background-color: #fff;
    --_material-text-field-input-line-opacity: 0.7;
    --_material-text-field-input-line-hover-opacity: 1;
    --_material-text-field-focused-label-opacity: 1;

    /* Button tweaks */
    --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);
    --_material-button-outline-color: rgba(255, 255, 255, 0.2);

    /* Grid tweaks */
    --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);
    --_material-grid-row-selected-overlay-opacity: 0.16;

    /* Split layout tweaks */
    --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);

    background-color: var(--material-background-color);
    color: var(--material-body-text-color);
  }
`;(0,i.hC)("",s,{moduleId:"material-color-dark"});const n=i.iv`
  :host {
    /* Text colors */
    --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));
    --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));
    --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));

    /* Primary colors */
    --material-primary-color: var(--primary-color, #6200ee);
    --material-primary-contrast-color: var(--dark-theme-base-color, #fff);
    --material-primary-text-color: var(--material-primary-color);

    /* Error colors */
    --material-error-color: var(--error-color, #b00020);
    --material-error-text-color: var(--material-error-color);

    /* Background colors */
    --material-background-color: var(--light-theme-background-color, #fff);
    --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);
    --material-disabled-color: rgba(0, 0, 0, 0.26);

    /* Divider colors */
    --material-divider-color: rgba(0, 0, 0, 0.12);
  }
`,a=document.createElement("template");a.innerHTML=`<style>${n.toString().replace(":host","html")}</style>`,document.head.appendChild(a.content)},817:(t,e,r)=>{r(323);var i=r(128);const o=i.iv`
  :host {
    /* Font family */
    --material-font-family: 'Roboto', sans-serif;

    /* Font sizes */
    --material-h1-font-size: 6rem;
    --material-h2-font-size: 3.75rem;
    --material-h3-font-size: 3rem;
    --material-h4-font-size: 2.125rem;
    --material-h5-font-size: 1.5rem;
    --material-h6-font-size: 1.25rem;
    --material-body-font-size: 1rem;
    --material-small-font-size: 0.875rem;
    --material-button-font-size: 0.875rem;
    --material-caption-font-size: 0.75rem;

    /* Icon size */
    --material-icon-font-size: 20px;
  }
`,s=i.iv`
  body,
  :host {
    font-family: var(--material-font-family);
    font-size: var(--material-body-font-size);
    line-height: 1.4;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    line-height: 1.1;
    margin-top: 1.5em;
  }

  h1 {
    font-size: var(--material-h3-font-size);
    font-weight: 300;
    letter-spacing: -0.015em;
    margin-bottom: 1em;
    text-indent: -0.07em;
  }

  h2 {
    font-size: var(--material-h4-font-size);
    font-weight: 300;
    letter-spacing: -0.01em;
    margin-bottom: 0.75em;
    text-indent: -0.07em;
  }

  h3 {
    font-size: var(--material-h5-font-size);
    font-weight: 400;
    margin-bottom: 0.75em;
    text-indent: -0.05em;
  }

  h4 {
    font-size: var(--material-h6-font-size);
    font-weight: 400;
    letter-spacing: 0.01em;
    margin-bottom: 0.75em;
    text-indent: -0.05em;
  }

  h5 {
    font-size: var(--material-body-font-size);
    font-weight: 500;
    margin-bottom: 0.5em;
    text-indent: -0.025em;
  }

  h6 {
    font-size: var(--material-small-font-size);
    font-weight: 500;
    letter-spacing: 0.01em;
    margin-bottom: 0.25em;
    text-indent: -0.025em;
  }

  a,
  b,
  strong {
    font-weight: 500;
  }
`;(0,i.hC)("",s,{moduleId:"material-typography"});const n=document.createElement("template");if(n.innerHTML=`<style>${o.toString().replace(":host","html")}</style>`,document.head.appendChild(n.content),!window.polymerSkipLoadingFontRoboto){const t="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href=t,document.head.appendChild(e)}},323:(t,e,r)=>{class i extends HTMLElement{static get version(){return"23.3.1"}}customElements.define("vaadin-material-styles",i)},128:(t,e,r)=>{r.d(e,{Tb:()=>u,iv:()=>i.css,hC:()=>n});var i=r(370);const o=t=>class extends t{static get properties(){return{theme:{type:String,reflectToAttribute:!0,observer:"__deprecatedThemePropertyChanged"},_theme:{type:String,readOnly:!0}}}__deprecatedThemePropertyChanged(t){this._set_theme(t)}},s=[];function n(t,e,r={}){var o;t&&(o=t,c(customElements.get(o))&&console.warn(`The custom element definition for "${t}"\n      was finalized before a style module was registered.\n      Make sure to add component specific style modules before\n      importing the corresponding custom element.`)),e=function(t=[]){return[t].flat(1/0).filter((t=>t instanceof i.CSSResult||(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1)))}(e),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,e,r):s.push({themeFor:t,styles:e,include:r.include,moduleId:r.moduleId})}function a(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():s}function l(t=""){let e=0;return t.startsWith("lumo-")||t.startsWith("material-")?e=1:t.startsWith("vaadin-")&&(e=2),e}function d(t){const e=[];return t.include&&[].concat(t.include).forEach((t=>{const r=a().find((e=>e.moduleId===t));r?e.push(...d(r),...r.styles):console.warn(`Included moduleId ${t} not found in style registry`)}),t.styles),e}function h(t){const e=`${t}-default-theme`,r=a().filter((r=>r.moduleId!==e&&function(t,e){return(t||"").split(" ").some((t=>new RegExp(`^${t.split("*").join(".*")}$`).test(e)))}(r.themeFor,t))).map((t=>({...t,styles:[...d(t),...t.styles],includePriority:l(t.moduleId)}))).sort(((t,e)=>e.includePriority-t.includePriority));return r.length>0?r:a().filter((t=>t.moduleId===e))}function c(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}const u=t=>class extends(o(t)){static finalize(){if(super.finalize(),this.elementStyles)return;const t=this.prototype._template;t&&!c(this)&&function(t,e){const r=document.createElement("style");r.innerHTML=t.map((t=>t.cssText)).join("\n"),e.content.appendChild(r)}(this.getStylesForThis(),t)}static finalizeStyles(t){const e=this.getStylesForThis();return t?[...super.finalizeStyles(t),...e]:e}static getStylesForThis(){const t=Object.getPrototypeOf(this.prototype),e=(t?t.constructor.__themes:[])||[];this.__themes=[...e,...h(this.is)];const r=this.__themes.flatMap((t=>t.styles));return r.filter(((t,e)=>e===r.lastIndexOf(t)))}}},936:(t,e,r)=>{r.r(e),r.d(e,{CSSResult:()=>i.c3,LitElement:()=>s.oi,ReactiveElement:()=>i.fl,UpdatingElement:()=>s.f4,_$LE:()=>s.uD,_$LH:()=>o.Al,adoptStyles:()=>i.ec,css:()=>i.iv,customElement:()=>a.M,decorateProperty:()=>n.eZ,defaultConverter:()=>i.Ts,eventOptions:()=>h.h,getCompatibleStyle:()=>i.i1,html:()=>o.dy,legacyPrototypeMethod:()=>n.Oi,noChange:()=>o.Jb,notEqual:()=>i.Qu,nothing:()=>o.Ld,property:()=>l.C,query:()=>c.I,queryAll:()=>u.K,queryAssignedElements:()=>_.N,queryAssignedNodes:()=>m.v,queryAsync:()=>p.G,render:()=>o.sY,standardPrototypeMethod:()=>n.Nz,state:()=>d.S,supportsAdoptingStyleSheets:()=>i.FV,svg:()=>o.YP,unsafeCSS:()=>i.$m});var i=r(898),o=r(692),s=r(922),n=r(674),a=r(713),l=r(760),d=r(158),h=r(829),c=r(669),u=r(711),p=r(602),_=r(935),m=r(43);console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.")},922:(t,e,r)=>{r.d(e,{$m:()=>s.$m,Al:()=>n.Al,FV:()=>s.FV,Jb:()=>n.Jb,Ld:()=>n.Ld,Qu:()=>s.Qu,Ts:()=>s.Ts,YP:()=>n.YP,c3:()=>s.c3,dy:()=>n.dy,ec:()=>s.ec,f4:()=>a,fl:()=>s.fl,i1:()=>s.i1,iv:()=>s.iv,oi:()=>l,sY:()=>n.sY,uD:()=>h});var i,o,s=r(898),n=r(692);const a=s.fl;class l extends s.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,n.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return n.Jb}}l.finalized=!0,l._$litElement$=!0,null===(i=globalThis.litElementHydrateSupport)||void 0===i||i.call(globalThis,{LitElement:l});const d=globalThis.litElementPolyfillSupport;null==d||d({LitElement:l});const h={_$AK:(t,e,r)=>{t._$AK(e,r)},_$AL:t=>t._$AL};(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.2")},692:(t,e,r)=>{var i;r.d(e,{Al:()=>M,Jb:()=>E,Ld:()=>S,YP:()=>A,dy:()=>x,sY:()=>V});const o=window,s=o.trustedTypes,n=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,a=`lit$${(Math.random()+"").slice(9)}$`,l="?"+a,d=`<${l}>`,h=document,c=(t="")=>h.createComment(t),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,_=t=>p(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),m=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,g=/>/g,v=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),b=/'/g,y=/"/g,w=/^(?:script|style|textarea|title)$/i,C=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),x=C(1),A=C(2),E=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),P=new WeakMap,T=h.createTreeWalker(h,129,null,!1),I=(t,e)=>{const r=t.length-1,i=[];let o,s=2===e?"<svg>":"",l=m;for(let e=0;e<r;e++){const r=t[e];let n,h,c=-1,u=0;for(;u<r.length&&(l.lastIndex=u,h=l.exec(r),null!==h);)u=l.lastIndex,l===m?"!--"===h[1]?l=f:void 0!==h[1]?l=g:void 0!==h[2]?(w.test(h[2])&&(o=RegExp("</"+h[2],"g")),l=v):void 0!==h[3]&&(l=v):l===v?">"===h[0]?(l=null!=o?o:m,c=-1):void 0===h[1]?c=-2:(c=l.lastIndex-h[2].length,n=h[1],l=void 0===h[3]?v:'"'===h[3]?y:b):l===y||l===b?l=v:l===f||l===g?l=m:(l=v,o=void 0);const p=l===v&&t[e+1].startsWith("/>")?" ":"";s+=l===m?r+d:c>=0?(i.push(n),r.slice(0,c)+"$lit$"+r.slice(c)+a+p):r+a+(-2===c?(i.push(void 0),e):p)}const h=s+(t[r]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==n?n.createHTML(h):h,i]};class O{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,n=0;const d=t.length-1,h=this.parts,[u,p]=I(t,e);if(this.el=O.createElement(u,r),T.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=T.nextNode())&&h.length<d;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(a)){const r=p[n++];if(t.push(e),void 0!==r){const t=i.getAttribute(r.toLowerCase()+"$lit$").split(a),e=/([.?@])?(.*)/.exec(r);h.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?$:"?"===e[1]?F:"@"===e[1]?D:N})}else h.push({type:6,index:o})}for(const e of t)i.removeAttribute(e)}if(w.test(i.tagName)){const t=i.textContent.split(a),e=t.length-1;if(e>0){i.textContent=s?s.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],c()),T.nextNode(),h.push({type:2,index:++o});i.append(t[e],c())}}}else if(8===i.nodeType)if(i.data===l)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(a,t+1));)h.push({type:7,index:o}),t+=a.length-1}o++}}static createElement(t,e){const r=h.createElement("template");return r.innerHTML=t,r}}function k(t,e,r=t,i){var o,s,n,a;if(e===E)return e;let l=void 0!==i?null===(o=r._$Co)||void 0===o?void 0:o[i]:r._$Cl;const d=u(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,r,i)),void 0!==i?(null!==(n=(a=r)._$Co)&&void 0!==n?n:a._$Co=[])[i]=l:r._$Cl=l),void 0!==l&&(e=k(t,l._$AS(t,e.values),l,i)),e}class z{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:r},parts:i}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(r,!0);T.currentNode=o;let s=T.nextNode(),n=0,a=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new R(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new H(s,this,t)),this.u.push(e),l=i[++a]}n!==(null==l?void 0:l.index)&&(s=T.nextNode(),n++)}return o}p(t){let e=0;for(const r of this.u)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class R{constructor(t,e,r,i){var o;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cm=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),u(t)?t===S||null==t||""===t?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==E&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):_(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==S&&u(this._$AH)?this._$AA.nextSibling.data=t:this.T(h.createTextNode(t)),this._$AH=t}$(t){var e;const{values:r,_$litType$:i}=t,o="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=O.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.p(r);else{const t=new z(o,this),e=t.v(this.options);t.p(r),this.T(e),this._$AH=t}}_$AC(t){let e=P.get(t.strings);return void 0===e&&P.set(t.strings,e=new O(t)),e}k(t){p(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const o of t)i===e.length?e.push(r=new R(this.O(c()),this.O(c()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class N{constructor(t,e,r,i,o){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){const o=this.strings;let s=!1;if(void 0===o)t=k(this,t,e,0),s=!u(t)||t!==this._$AH&&t!==E,s&&(this._$AH=t);else{const i=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=k(this,i[r+n],e,n),a===E&&(a=this._$AH[n]),s||(s=!u(a)||a!==this._$AH[n]),a===S?t=S:t!==S&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}s&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class $ extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}const L=s?s.emptyScript:"";class F extends N{constructor(){super(...arguments),this.type=4}j(t){t&&t!==S?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class D extends N{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){var r;if((t=null!==(r=k(this,t,e,0))&&void 0!==r?r:S)===E)return;const i=this._$AH,o=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==S&&(i===S||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==r?r:this.element,t):this._$AH.handleEvent(t)}}class H{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const M={P:"$lit$",A:a,M:l,C:1,L:I,R:z,D:_,V:k,I:R,H:N,N:F,U:D,B:$,F:H},B=o.litHtmlPolyfillSupport;null==B||B(O,R),(null!==(i=o.litHtmlVersions)&&void 0!==i?i:o.litHtmlVersions=[]).push("2.5.0");const V=(t,e,r)=>{var i,o;const s=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:e;let n=s._$litPart$;if(void 0===n){const t=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:null;s._$litPart$=n=new R(e.insertBefore(c(),t),t,void 0,null!=r?r:{})}return n._$AI(t),n}},662:(t,e,r)=>{r.r(e),r.d(e,{customElement:()=>i.M,eventOptions:()=>n.h,property:()=>o.C,query:()=>a.I,queryAll:()=>l.K,queryAssignedElements:()=>h.N,queryAssignedNodes:()=>c.v,queryAsync:()=>d.G,state:()=>s.S});var i=r(713),o=r(760),s=r(158),n=r(829),a=r(669),l=r(711),d=r(602),h=r(935),c=r(43)},370:(t,e,r)=>{r.r(e),r.d(e,{CSSResult:()=>i.c3,LitElement:()=>i.oi,ReactiveElement:()=>i.fl,UpdatingElement:()=>i.f4,_$LE:()=>i.uD,_$LH:()=>i.Al,adoptStyles:()=>i.ec,css:()=>i.iv,defaultConverter:()=>i.Ts,getCompatibleStyle:()=>i.i1,html:()=>i.dy,isServer:()=>o,noChange:()=>i.Jb,notEqual:()=>i.Qu,nothing:()=>i.Ld,render:()=>i.sY,supportsAdoptingStyleSheets:()=>i.FV,svg:()=>i.YP,unsafeCSS:()=>i.$m}),r(898),r(692);var i=r(922);const o=!1}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,r),s.exports}r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t=r(219);r(565),r(900);var e=document.querySelector("#app");new t.Router(e).setRoutes([{path:"/",component:"fetching-data"},{path:"/about",component:"fetching-data2"}])})()})();